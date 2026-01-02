'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitMessage('Thank you! Your message has been sent successfully.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);

    // Clear success message after 5 seconds
    setTimeout(() => setSubmitMessage(''), 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Full Name <span aria-label="required">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          aria-required="true"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address <span aria-label="required">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          aria-required="true"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number <span className="text-gray-500">(Optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          aria-required="false"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
          placeholder="(919) 519-8477"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message <span aria-label="required">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          aria-required="true"
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
          placeholder="Tell us how we can help you..."
        />
      </div>

      {submitMessage && (
        <div
          role="status"
          aria-live="polite"
          className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg"
        >
          {submitMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        aria-disabled={isSubmitting}
        className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <span aria-live="polite">Sending...</span>
          </>
        ) : (
          <>
            Send Message
            <Send className="ml-2" size={18} aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
