'use client';

import { useState, useEffect } from 'react';
import PitchDeckKangNew from '@/components/PitchDeckKangNew';
import GlobalFooter from '@/components/GlobalFooter';

export default function DeckPage() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open deck automatically when page loads
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    // When closed, redirect to home page
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-white">
      <PitchDeckKangNew isOpen={isOpen} onClose={handleClose} />
    <GlobalFooter />
    </div>
  );
}
