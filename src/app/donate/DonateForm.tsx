'use client';

import { useState } from 'react';

const presets = [25, 50, 100, 250, 500];

export default function DonateForm() {
  const [selected, setSelected] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const displayAmount = customAmount
    ? parseFloat(customAmount) || 0
    : selected || 0;

  function selectPreset(amount: number) {
    setSelected(amount);
    setCustomAmount('');
    setError('');
  }

  function handleCustomChange(value: string) {
    // Allow only numbers and one decimal point
    if (value && !/^\d*\.?\d{0,2}$/.test(value)) return;
    setCustomAmount(value);
    setSelected(null);
    setError('');
  }

  async function handleDonate() {
    if (displayAmount < 1) {
      setError('Please select or enter a donation amount of at least $1.00.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          customAmount
            ? { customAmount }
            : { amount: selected }
        ),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
        setLoading(false);
        return;
      }

      window.location.href = data.url;
    } catch {
      setError('Unable to connect. Please check your connection and try again.');
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto">
      {/* Preset Amounts */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {presets.map((amount) => (
          <button
            key={amount}
            type="button"
            onClick={() => selectPreset(amount)}
            className={`py-3 rounded-xl font-semibold text-lg transition-all ${
              selected === amount
                ? 'bg-brand-blue text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            ${amount}
          </button>
        ))}
      </div>

      {/* Custom Amount */}
      <div className="relative mb-6">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-lg">$</span>
        <input
          type="text"
          inputMode="decimal"
          placeholder="Other amount"
          value={customAmount}
          onChange={(e) => handleCustomChange(e.target.value)}
          className={`w-full pl-9 pr-4 py-3 rounded-xl border text-lg outline-none transition-colors ${
            customAmount
              ? 'border-brand-blue ring-2 ring-brand-blue/20'
              : 'border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20'
          }`}
        />
      </div>

      {/* Error */}
      {error && (
        <p className="text-red-600 text-sm mb-4 text-center">{error}</p>
      )}

      {/* Donate Button */}
      <button
        type="button"
        onClick={handleDonate}
        disabled={loading || displayAmount < 1}
        className="w-full py-4 bg-brand-green text-white font-bold text-lg rounded-full hover:bg-brand-green/90 transition-all shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Redirecting...
          </>
        ) : (
          `Donate $${displayAmount.toLocaleString('en-US', { minimumFractionDigits: displayAmount % 1 ? 2 : 0 })}`
        )}
      </button>

      {/* Trust Signals */}
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-400 flex items-center justify-center gap-1.5">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
          Secure payment powered by Stripe
        </p>
      </div>

      {/* Tax Info */}
      <p className="mt-4 text-xs text-gray-500 text-center leading-relaxed">
        G&amp;A Foundation Inc. is a 501(c)(3) nonprofit organization (EIN: 41-4460409). Your donation is tax-deductible to the fullest extent of the law.
      </p>
    </div>
  );
}
