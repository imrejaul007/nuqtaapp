'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PitchDeckKangNew from '@/components/PitchDeckKangNew';
import GlobalFooter from '@/components/GlobalFooter';

export default function DeckKangPage() {
  const [isDeckOpen, setIsDeckOpen] = useState(true);
  const router = useRouter();

  const handleClose = () => {
    setIsDeckOpen(false);
    // Redirect to landing page when deck is closed
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <PitchDeckKangNew isOpen={isDeckOpen} onClose={handleClose} />
    <GlobalFooter />
    </div>
  );
}
