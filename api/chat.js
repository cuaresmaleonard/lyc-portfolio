import { GoogleGenerativeAI } from '@google/generative-ai';
import { LRUCache } from 'lru-cache';

// Basic in-memory rate limiter for chat (resets when the serverless function cold starts)
const rateLimit = new LRUCache({
  max: 500,
  ttl: 1000 * 60 * 60, // 1 hour
});

// Initialize the SDK. We do this inside the handler or outside if the env var is available globally.
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

const systemPrompt = `You are an AI assistant for Janel Erguin Cuaresma's professional portfolio.
Your role is to answer questions about Janel's experience, skills, and projects based strictly on the following information:

Name: Janel Erguin Cuaresma
Title: Systems Analyst

Experience:
- Philippine Airlines, Inc. (Feb 2022 - Current): Systems Analyst. Led transition from Oracle to SAP SuccessFactors, data migration, HR systems integration.
- Accenture Philippines (Oct 2021 - Feb 2022): Application Development Analyst. SAP HCM functional support (PA, OM, TM, Payroll).
- ePLDT, Inc. (Oct 2019 - Sep 2021): Business Systems Analyst. SAP B1 Master Data Controller, CRM transformation (Salesforce).
- NGA HR Philippines (Dec 2017 - Feb 2019): SAP HCM Associate. Supported SAP HR systems.

Core Competencies:
SAP SuccessFactors, SAP HCM, Employee Central, Recruitment & Onboarding, Time Tracking, Performance & Goals, Business Process Analysis, Requirements Gathering, System Integration, UAT, Cross-functional Collaboration, Incident Management.

Education:
Bachelor of Science in Electronics Engineering, FEU Institute of Technology (2016).

Guidelines:
- Keep your answers concise, professional, and friendly.
- If asked about something not in this resume, politely state that you only have information regarding Janel's professional background.
- Emphasize Janel's expertise in SAP and HR systems when relevant.
`;

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

  // 2. Rate Limiting (Max 20 messages per hour per IP)
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  const tokenCount = (rateLimit.get(ip) || 0) + 1;
  if (tokenCount > 20) {
    return res.status(429).json({ error: 'Chat limit reached. Please try again later.' });
  }
  rateLimit.set(ip, tokenCount);

  try {
    const { message, history } = req.body;

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: 'Gemini API key is not configured on the server.' });
    }

    // Configure the model
    const model = genAI.getGenerativeModel({
      model: 'gemini-3.5-flash',
      systemInstruction: systemPrompt,
    });

    // Start a chat session
    const chat = model.startChat({
      history: history || [],
    });

    // Send the message
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({ text });
  } catch (error) {
    console.error('Error generating AI response:', error);
    return res.status(500).json({ error: 'Failed to generate response' });
  }
}
