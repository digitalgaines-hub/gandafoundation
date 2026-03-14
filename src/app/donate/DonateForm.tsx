'use client';

import { useState, FormEvent } from 'react';

export default function DonateForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, type: 'donate-notify' }),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <p className="text-brand-green font-semibold py-4">
        Thank you! We will notify you when online giving is available.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <label htmlFor="donate-email" className="sr-only">Email address</label>
      <input
        id="donate-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-sm"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-6 py-3 bg-brand-green text-white font-semibold rounded-full hover:bg-brand-green/90 transition-colors disabled:opacity-60 text-sm"
      >
        {status === 'loading' ? 'Sending...' : 'Notify Me'}
      </button>
      {status === 'error' && (
        <p className="text-red-500 text-sm mt-2">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
