import nodemailer from 'nodemailer';
import { LRUCache } from 'lru-cache';

// Basic in-memory rate limiter (resets when the serverless function cold starts)
const rateLimit = new LRUCache({
  max: 500,
  ttl: 1000 * 60 * 60, // 1 hour
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // 1. Referer / Origin Checking
  const referer = req.headers.referer || req.headers.origin || '';
  const host = req.headers.host || '';
  if (!referer.includes(host) && !referer.includes('localhost')) {
    return res.status(403).json({ error: 'Forbidden: Invalid referer' });
  }

  // 2. Rate Limiting (Max 3 emails per hour per IP)
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  const tokenCount = (rateLimit.get(ip) || 0) + 1;
  if (tokenCount > 3) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }
  rateLimit.set(ip, tokenCount);

  const { name, email, message, recaptchaToken } = req.body;

  if (!name || !email || !message || !recaptchaToken) {
    return res.status(400).json({ error: 'Missing required fields or CAPTCHA' });
  }

  // 3. Verify reCAPTCHA token
  const isLocal = !process.env.VERCEL_ENV || process.env.NODE_ENV === 'development' || (req.headers.host && req.headers.host.includes('localhost'));
  
  if (!isLocal) {
    try {
      const recaptchaRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
      });
      const recaptchaData = await recaptchaRes.json();
      if (!recaptchaData.success) {
        return res.status(403).json({ error: 'Failed reCAPTCHA verification' });
      }
    } catch (err) {
      return res.status(500).json({ error: 'Error verifying reCAPTCHA' });
    }
  }

  // 4. Send Email
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `Portfolio Contact Form <${process.env.GMAIL_USER}>`,
      to: 'janelanne.erguin@gmail.com',
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fcfaf8; border-radius: 8px; border: 1px solid #e5e7eb;">
          <div style="background-color: #b4846c; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
            <h2 style="margin: 0; color: #ffffff; font-size: 22px;">New Portfolio Message</h2>
          </div>
          <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <strong style="color: #374151; font-size: 16px;">Name:</strong> 
                  <span style="color: #4b5563; font-size: 16px; margin-left: 8px;">${name}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <strong style="color: #374151; font-size: 16px;">Email:</strong> 
                  <a href="mailto:${email}" style="color: #b4846c; font-size: 16px; margin-left: 8px; text-decoration: none;">${email}</a>
                </td>
              </tr>
            </table>
            
            <strong style="color: #374151; font-size: 16px; display: block; margin-bottom: 10px;">Message:</strong>
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 6px; border-left: 4px solid #b4846c; color: #4b5563; font-size: 15px; line-height: 1.6;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 20px;">
            Sent securely from your portfolio contact form.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
