'use client';

import { useState, FormEvent } from 'react';

export default function GetInvolvedForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'get-involved',
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone'),
          involvement: data.get('involvement'),
          message: data.get('message'),
        }),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
        <p className="text-brand-green font-semibold text-lg">Thank you for reaching out!</p>
        <p className="text-gray-600 mt-2">We will be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm space-y-5">
      <div>
        <label htmlFor="gi-name" className="block text-sm font-medium text-brand-dark mb-1">Name *</label>
        <input id="gi-name" name="name" type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-sm" />
      </div>
      <div>
        <label htmlFor="gi-email" className="block text-sm font-medium text-brand-dark mb-1">Email *</label>
        <input id="gi-email" name="email" type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-sm" />
      </div>
      <div>
        <label htmlFor="gi-phone" className="block text-sm font-medium text-brand-dark mb-1">Phone (optional)</label>
        <input id="gi-phone" name="phone" type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-sm" />
      </div>
      <div>
        <label htmlFor="gi-involvement" className="block text-sm font-medium text-brand-dark mb-1">How would you like to get involved? *</label>
        <select id="gi-involvement" name="involvement" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-sm bg-white">
          <option value="">Select an option</option>
          <option value="Volunteer">Volunteer</option>
          <option value="Partner">Partner</option>
          <option value="Donate">Donate</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="gi-message" className="block text-sm font-medium text-brand-dark mb-1">Message</label>
        <textarea id="gi-message" name="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-sm resize-none" />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-3 bg-brand-blue text-white font-semibold rounded-full hover:bg-brand-blue/90 transition-colors disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending...' : 'Submit'}
      </button>
      {status === 'error' && (
        <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
