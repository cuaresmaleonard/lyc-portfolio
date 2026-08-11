import React, { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Reset success message after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-gray-400 mb-6 max-w-sm">
              I'm always open to discussing new opportunities, system
              integrations, and business process improvements.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:janelanne.erguin@gmail.com"
                className="flex items-center gap-3 text-professional-400 hover:text-professional-300 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                janelanne.erguin@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/janelerguin"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-professional-400 hover:text-professional-300 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Contact Form UI */}
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <h4 className="text-lg font-semibold mb-4 text-white">
              Send a Message
            </h4>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-professional-500 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-professional-500 transition-colors"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  rows="3"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-professional-500 transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-professional-600 hover:bg-professional-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-2 rounded-lg transition-colors"
              >
                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Error Sending' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-gray-800 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Janel Erguin Cuaresma. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
