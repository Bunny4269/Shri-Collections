import React, { useEffect } from 'react';
import { Check, X, Sparkles } from 'lucide-react';

export default function Toast({ message, type = 'success', onClose, duration = 3500 }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-maroon-950 text-white rounded-xl shadow-2xl border border-gold-500/50 p-4 flex items-center justify-between gap-3 animate-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gold-500/20 text-gold-300 flex items-center justify-center flex-shrink-0 border border-gold-500/40">
          <Check className="w-4 h-4 text-gold-300" />
        </div>
        <p className="text-xs font-medium text-cream-100 leading-snug">
          {message}
        </p>
      </div>

      <button
        onClick={onClose}
        className="text-cream-400 hover:text-white transition-colors p-1"
        aria-label="Dismiss toast"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
