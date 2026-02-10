'use client';

import React from 'react';

// Nuqta+ Logo - Crown with star
export const NuqtaPlusLogo = ({ size = 48, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="nuqtaPlusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c9a227" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#nuqtaPlusGrad)" />
    {/* Crown */}
    <path d="M25 65 L30 40 L40 50 L50 30 L60 50 L70 40 L75 65 Z" fill="white" />
    {/* Plus symbol */}
    <rect x="46" y="68" width="8" height="20" rx="2" fill="white" />
    <rect x="41" y="73" width="18" height="8" rx="2" fill="white" />
  </svg>
);

// Qist Logo - Shopping bag with installment bars
export const QistLogo = ({ size = 48, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="qistGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#qistGrad)" />
    {/* Shopping bag outline */}
    <path d="M30 40 L30 75 C30 78 32 80 35 80 L65 80 C68 80 70 78 70 75 L70 40 L30 40" stroke="white" strokeWidth="4" fill="none" />
    {/* Bag handle */}
    <path d="M38 40 L38 32 C38 26 43 22 50 22 C57 22 62 26 62 32 L62 40" stroke="white" strokeWidth="4" fill="none" />
    {/* Installment bars */}
    <rect x="38" y="50" width="24" height="4" rx="2" fill="white" />
    <rect x="38" y="58" width="18" height="4" rx="2" fill="white" opacity="0.8" />
    <rect x="38" y="66" width="12" height="4" rx="2" fill="white" opacity="0.6" />
  </svg>
);

// Sakin Logo - House with key
export const SakinLogo = ({ size = 48, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="sakinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#sakinGrad)" />
    {/* House roof */}
    <path d="M50 20 L25 45 L30 45 L30 75 L70 75 L70 45 L75 45 Z" fill="white" />
    {/* Door */}
    <rect x="43" y="55" width="14" height="20" rx="2" fill="url(#sakinGrad)" />
    {/* Window */}
    <rect x="55" y="48" width="10" height="10" rx="1" fill="url(#sakinGrad)" />
    {/* Key circle */}
    <circle cx="50" cy="62" r="3" fill="white" />
  </svg>
);

// Wasil Logo - Fast delivery truck
export const WasilLogo = ({ size = 48, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="wasilGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f97316" />
        <stop offset="100%" stopColor="#ea580c" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#wasilGrad)" />
    {/* Truck body */}
    <rect x="20" y="40" width="35" height="25" rx="3" fill="white" />
    {/* Truck cabin */}
    <path d="M55 50 L55 65 L75 65 L75 55 L65 45 L55 45 Z" fill="white" />
    {/* Wheels */}
    <circle cx="32" cy="68" r="6" fill="url(#wasilGrad)" />
    <circle cx="32" cy="68" r="3" fill="white" />
    <circle cx="65" cy="68" r="6" fill="url(#wasilGrad)" />
    <circle cx="65" cy="68" r="3" fill="white" />
    {/* Speed lines */}
    <rect x="12" y="48" width="8" height="2" rx="1" fill="white" opacity="0.8" />
    <rect x="14" y="53" width="6" height="2" rx="1" fill="white" opacity="0.6" />
    <rect x="12" y="58" width="8" height="2" rx="1" fill="white" opacity="0.8" />
  </svg>
);

// Hawil Logo - Globe with arrows (remittance)
export const HawilLogo = ({ size = 48, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="hawilGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#0ea5e9" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#hawilGrad)" />
    {/* Globe circle */}
    <circle cx="50" cy="50" r="25" stroke="white" strokeWidth="3" fill="none" />
    {/* Globe lines */}
    <ellipse cx="50" cy="50" rx="10" ry="25" stroke="white" strokeWidth="2" fill="none" />
    <line x1="25" y1="50" x2="75" y2="50" stroke="white" strokeWidth="2" />
    <line x1="50" y1="25" x2="50" y2="75" stroke="white" strokeWidth="2" />
    {/* Arrows */}
    <path d="M15 35 L25 30 L25 35 L35 35 L35 40 L25 40 L25 45 Z" fill="white" />
    <path d="M85 65 L75 70 L75 65 L65 65 L65 60 L75 60 L75 55 Z" fill="white" />
  </svg>
);

// Rakab Logo - Car with motion lines
export const RakabLogo = ({ size = 48, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="rakabGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22c55e" />
        <stop offset="100%" stopColor="#16a34a" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#rakabGrad)" />
    {/* Car body */}
    <path d="M25 55 L30 45 L45 40 L70 40 L78 50 L78 60 L25 60 Z" fill="white" />
    {/* Car windows */}
    <path d="M35 45 L45 42 L55 42 L55 50 L35 50 Z" fill="url(#rakabGrad)" />
    <path d="M58 42 L68 42 L72 50 L58 50 Z" fill="url(#rakabGrad)" />
    {/* Wheels */}
    <circle cx="35" cy="62" r="7" fill="url(#rakabGrad)" />
    <circle cx="35" cy="62" r="4" fill="white" />
    <circle cx="68" cy="62" r="7" fill="url(#rakabGrad)" />
    <circle cx="68" cy="62" r="4" fill="white" />
    {/* Speed lines */}
    <rect x="12" y="50" width="10" height="2" rx="1" fill="white" opacity="0.8" />
    <rect x="14" y="55" width="8" height="2" rx="1" fill="white" opacity="0.6" />
  </svg>
);

// Gamification Logo - Gamepad with star
export const GamificationLogo = ({ size = 48, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="gamificationGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#f43f5e" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#gamificationGrad)" />
    {/* Gamepad body */}
    <path d="M20 45 C20 40 25 35 35 35 L65 35 C75 35 80 40 80 45 L80 60 C80 70 70 75 60 70 L55 65 L45 65 L40 70 C30 75 20 70 20 60 Z" fill="white" />
    {/* D-pad */}
    <rect x="28" y="47" width="4" height="12" rx="1" fill="url(#gamificationGrad)" />
    <rect x="24" y="51" width="12" height="4" rx="1" fill="url(#gamificationGrad)" />
    {/* Buttons */}
    <circle cx="65" cy="48" r="4" fill="url(#gamificationGrad)" />
    <circle cx="73" cy="53" r="4" fill="url(#gamificationGrad)" />
    {/* Star */}
    <path d="M50 22 L52 28 L58 28 L53 32 L55 38 L50 35 L45 38 L47 32 L42 28 L48 28 Z" fill="white" />
  </svg>
);

// Nuqta Main Logo - The N with dot (also exported as NuqtaLogo for convenience)
export const NuqtaMainLogo = ({ size = 48, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="nuqtaMainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c9a227" />
        <stop offset="100%" stopColor="#d4af37" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#nuqtaMainGrad)" />
    {/* N letter */}
    <path d="M30 70 L30 30 L40 30 L55 55 L55 30 L65 30 L65 70 L55 70 L40 45 L40 70 Z" fill="white" />
    {/* Dot (Nuqta) */}
    <circle cx="70" cy="35" r="6" fill="white" />
  </svg>
);

// Ecosystem Logo - Connected nodes
export const EcosystemLogo = ({ size = 48, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="ecosystemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c9a227" />
        <stop offset="50%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#ecosystemGrad)" />
    {/* Center node */}
    <circle cx="50" cy="50" r="12" fill="white" />
    {/* Outer nodes */}
    <circle cx="50" cy="25" r="8" fill="white" />
    <circle cx="72" cy="38" r="8" fill="white" />
    <circle cx="72" cy="62" r="8" fill="white" />
    <circle cx="50" cy="75" r="8" fill="white" />
    <circle cx="28" cy="62" r="8" fill="white" />
    <circle cx="28" cy="38" r="8" fill="white" />
    {/* Connection lines */}
    <line x1="50" y1="38" x2="50" y2="33" stroke="white" strokeWidth="2" />
    <line x1="60" y1="44" x2="66" y2="42" stroke="white" strokeWidth="2" />
    <line x1="60" y1="56" x2="66" y2="58" stroke="white" strokeWidth="2" />
    <line x1="50" y1="62" x2="50" y2="67" stroke="white" strokeWidth="2" />
    <line x1="40" y1="56" x2="34" y2="58" stroke="white" strokeWidth="2" />
    <line x1="40" y1="44" x2="34" y2="42" stroke="white" strokeWidth="2" />
  </svg>
);

// Safar Logo - Plane with globe
export const SafarLogo = ({ size = 48, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="safarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#0891b2" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#safarGrad)" />
    {/* Plane */}
    <path d="M25 55 L35 50 L55 45 L75 35 L78 38 L62 50 L68 55 L65 58 L55 55 L40 60 L38 55 Z" fill="white" />
    {/* Globe hint */}
    <circle cx="50" cy="55" r="12" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
    <ellipse cx="50" cy="55" rx="5" ry="12" stroke="white" strokeWidth="1.5" fill="none" opacity="0.5" />
  </svg>
);

// Ajer Logo - Package with circular arrows (rental)
export const AjerLogo = ({ size = 48, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="ajerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#ajerGrad)" />
    {/* Box */}
    <rect x="30" y="35" width="40" height="35" rx="3" stroke="white" strokeWidth="3" fill="none" />
    {/* Box flaps */}
    <path d="M30 35 L50 25 L70 35" stroke="white" strokeWidth="3" fill="none" />
    {/* Circular arrow left */}
    <path d="M22 50 C22 40 30 32 40 32" stroke="white" strokeWidth="2.5" fill="none" />
    <path d="M38 28 L40 32 L36 34" fill="white" />
    {/* Circular arrow right */}
    <path d="M78 50 C78 60 70 68 60 68" stroke="white" strokeWidth="2.5" fill="none" />
    <path d="M62 72 L60 68 L64 66" fill="white" />
  </svg>
);

// Fakhir Logo - Crown with diamond (luxury)
export const FakhirLogo = ({ size = 48, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="fakhirGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="50%" stopColor="#d97706" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>
      <linearGradient id="fakhirGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef3c7" />
        <stop offset="50%" stopColor="#fcd34d" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#fakhirGrad)" />
    {/* Ornate crown */}
    <path d="M20 60 L25 35 L35 45 L50 25 L65 45 L75 35 L80 60 Z" fill="white" />
    {/* Crown jewels */}
    <circle cx="25" cy="35" r="4" fill="url(#fakhirGold)" />
    <circle cx="50" cy="25" r="5" fill="url(#fakhirGold)" />
    <circle cx="75" cy="35" r="4" fill="url(#fakhirGold)" />
    {/* Diamond in center */}
    <path d="M50 50 L42 58 L50 72 L58 58 Z" fill="url(#fakhirGold)" />
    {/* Crown band */}
    <rect x="22" y="60" width="56" height="8" rx="2" fill="white" />
    {/* Band jewels */}
    <circle cx="35" cy="64" r="2" fill="url(#fakhirGrad)" />
    <circle cx="50" cy="64" r="3" fill="url(#fakhirGrad)" />
    <circle cx="65" cy="64" r="2" fill="url(#fakhirGrad)" />
  </svg>
);

// Alias for NuqtaMainLogo for convenience
export const NuqtaLogo = NuqtaMainLogo;

// Export all logos as a mapping
export const CompanyLogos = {
  nuqta: NuqtaMainLogo,
  'nuqta-plus': NuqtaPlusLogo,
  qist: QistLogo,
  sakin: SakinLogo,
  wasil: WasilLogo,
  hawil: HawilLogo,
  rakab: RakabLogo,
  gamification: GamificationLogo,
  ecosystem: EcosystemLogo,
  safar: SafarLogo,
  ajer: AjerLogo,
  fakhir: FakhirLogo,
};

export default CompanyLogos;
