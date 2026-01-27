'use client';

import { useState, useEffect } from 'react';
import PitchDeckNew from '@/components/PitchDeckNew';

export default function DeckNewPage() {
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
    <div className="min-h-screen bg-[#0a1628]">
      <PitchDeckNew isOpen={isOpen} onClose={handleClose} />
    </div>
  );
}
