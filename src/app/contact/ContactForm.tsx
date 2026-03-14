'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
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
          type: 'contact',
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone'),
          subject: data.get('subject'),
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
      <div className="bg-brand-light rounded-2xl p-8 text-center">
        <p className="text-brand-green font-semibold text-lg">Message sent!</p>
        <p className="text-gray-600 mt-2">Thank you for reaching out. We will get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="c-name" className="block text-sm font-medium text-brand-dark mb-1">Name *</label>
        <input id="c-name" name="name" type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-sm" />
      </div>
      <div>
        <label htmlFor="c-email" className="block text-sm font-medium text-brand-dark mb-1">Email *</label>
        <input id="c-email" name="email" type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-sm" />
      </div>
      <div>
        <label htmlFor="c-phone" className="block text-sm font-medium text-brand-dark mb-1">Phone (optional)</label>
        <input id="c-phone" name="phone" type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-sm" />
      </div>
      <div>
        <label htmlFor="c-subject" className="block text-sm font-medium text-brand-dark mb-1">Subject *</label>
        <input id="c-subject" name="subject" type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-sm" />
      </div>
      <div>
        <label htmlFor="c-message" className="block text-sm font-medium text-brand-dark mb-1">Message *</label>
        <textarea id="c-message" name="message" rows={5} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-sm resize-none" />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-3 bg-brand-blue text-white font-semibold rounded-full hover:bg-brand-blue/90 transition-colors disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'error' && (
        <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
