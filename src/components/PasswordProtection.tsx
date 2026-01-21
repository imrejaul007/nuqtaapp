'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const CORRECT_PASSWORD = 'NuqtaGCC!';
const STORAGE_KEY = 'nuqta_authenticated';

interface PasswordProtectionProps {
  children: React.ReactNode;
}

export default function PasswordProtection({ children }: PasswordProtectionProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, 'true');
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0a1628] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#c9a227] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a1628] flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-24 h-24 mx-auto mb-4 relative">
              <Image
                src="/nuqta-logo.png"
                alt="Nuqta Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Nuqta</h1>
            <p className="text-gray-400">Enter password to access</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 bg-[#1a2a42] border border-[#2a3a52] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a227] transition-colors"
                autoFocus
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-[#c9a227] text-[#0a1628] font-semibold rounded-lg hover:bg-[#dab93a] transition-colors"
            >
              Access Site
            </button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-8">
            Smart Rewards & Payment Intelligence for the GCC
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
