 'use client';
import { useState } from 'react';
export default function ContactForm() {
  const [notice, setNotice] = useState('');
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = `Name: ${data.get('firstName')} ${data.get('lastName')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;
    window.location.href = `mailto:marse@philialivingnc.com?subject=${encodeURIComponent('Home care inquiry')}&body=${encodeURIComponent(body)}`;
    setNotice('Your email app will open with your message. Please send it there, or email marse@philialivingnc.com directly.');
  }
  const inputClass = 'w-full px-4 py-3 border border-gray-300 rounded-lg';
  return <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div><label htmlFor="firstName" className="block mb-2 text-sm">First Name</label><input id="firstName" name="firstName" autoComplete="given-name" className={inputClass} /></div>
      <div><label htmlFor="lastName" className="block mb-2 text-sm">Last name</label><input id="lastName" name="lastName" autoComplete="family-name" className={inputClass} /></div>
    </div>
    <div><label htmlFor="email" className="block mb-2 text-sm">Email *</label><input id="email" name="email" type="email" required autoComplete="email" className={inputClass} /></div>
    <div><label htmlFor="message" className="block mb-2 text-sm">Message</label><textarea id="message" name="message" rows={6} className={inputClass} /></div>
    <p className="text-sm">Opens your email app to send your message.</p>
    <button type="submit" className="w-full btn-primary">Send</button>
    {notice && <p role="status" className="text-sm">{notice}</p>}
  </form>;
}
