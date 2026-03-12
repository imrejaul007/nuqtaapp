'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import GlobalFooter from './GlobalFooter';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();

  return (
    <>
      {children}
      {!pathname?.startsWith('/rez') && <GlobalFooter />}
    </>
  );
}
