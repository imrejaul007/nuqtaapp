'use client';

import PasswordProtection from '@/components/PasswordProtection';
import PitchDeck from '@/components/PitchDeck';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

// Intersection Observer Hook for scroll animations
function useInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView };
}

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = '', prefix = '' }: {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const { ref, isInView } = useInView();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

// Typing Animation Component
function TypeWriter({ text, speed = 50 }: { text: string; speed?: number }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isInView } = useInView();

  useEffect(() => {
    if (isInView && currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [isInView, currentIndex, text, speed]);

  return (
    <span ref={ref}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

// Floating Particles Background
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-[#c9a227]/20 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 20}s`,
          }}
        />
      ))}
    </div>
  );
}

// Scroll Progress Indicator
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((scrollTop / docHeight) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[60] bg-[#1a2a42]">
      <div
        className="h-full bg-gradient-to-r from-[#c9a227] to-[#f4d35e] transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// Icon Components
const BrainIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const GiftIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
  </svg>
);

const RefreshIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const WalletIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);

const StoreIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const CampaignIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
  </svg>
);

const CreditCardIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const BankIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const XIcon = () => (
  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// Animated Section Wrapper
function AnimatedSection({ children, className = '', delay = 0 }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(50px)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}

// FAQ Component with Animation
function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className="border-b border-[#2a3a52] overflow-hidden"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateX(0)' : 'translateX(-30px)',
        transition: `all 0.5s ease ${index * 100}ms`
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-3 sm:py-4 md:py-5 flex justify-between items-center text-left group gap-3"
      >
        <span className="font-medium text-sm sm:text-base md:text-lg group-hover:text-[#c9a227] transition-colors">{question}</span>
        <svg
          className={`w-4 h-4 sm:w-5 sm:h-5 text-[#c9a227] transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 pb-4 sm:pb-5' : 'max-h-0'}`}
      >
        <p className="text-gray-400 text-sm sm:text-base">{answer}</p>
      </div>
    </div>
  );
}

// Interactive Feature Card Component
function FeatureCard({ icon, title, description, items, index = 0 }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  items?: string[];
  index?: number;
}) {
  const { ref, isInView } = useInView();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="card-gradient rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 transition-all duration-500 cursor-pointer group relative overflow-hidden"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView
          ? isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)'
          : 'translateY(50px) scale(0.95)',
        transitionDelay: `${index * 100}ms`,
        boxShadow: isHovered ? '0 20px 40px rgba(201, 162, 39, 0.15)' : 'none'
      }}
    >
      {/* Animated glow effect */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#c9a227]/0 via-[#c9a227]/10 to-[#c9a227]/0 transition-opacity duration-500"
        style={{ opacity: isHovered ? 1 : 0 }}
      />

      <div className="relative z-10">
        <div className={`text-[#c9a227] mb-3 sm:mb-4 transition-transform duration-500 ${isHovered ? 'scale-110' : ''}`}>
          {icon}
        </div>
        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-[#c9a227] transition-colors">{title}</h3>
        <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">{description}</p>
        {items && (
          <ul className="space-y-1.5 sm:space-y-2">
            {items.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-300"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'translateX(0)' : 'translateX(-20px)',
                  transition: `all 0.5s ease ${(index * 100) + (idx * 50)}ms`
                }}
              >
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

// Interactive Step Card Component
function StepCard({ number, title, description, index }: {
  number: string;
  title: string;
  description: string;
  index: number;
}) {
  const { ref, isInView } = useInView();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      className="text-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.6s ease ${index * 150}ms`
      }}
    >
      <div
        className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#c9a227] to-[#f4d35e] rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center transition-all duration-500 ${isHovered ? 'scale-110 shadow-lg shadow-[#c9a227]/30' : ''}`}
      >
        <span className="text-[#0a1628] text-xl sm:text-2xl md:text-3xl font-bold">{number}</span>
      </div>
      {/* Connecting line */}
      {index < 3 && (
        <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#c9a227] to-[#c9a227]/20" />
      )}
      <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 group-hover:text-[#c9a227] transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm sm:text-base">{description}</p>
    </div>
  );
}

// Interactive Use Case Card Component
function UseCaseCard({ icon, title, description, index }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}) {
  const { ref, isInView } = useInView();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="card-gradient rounded-xl p-6 transition-all duration-500 cursor-pointer relative overflow-hidden"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView
          ? isHovered ? 'translateY(-5px)' : 'translateY(0)'
          : 'translateY(40px)',
        transitionDelay: `${index * 100}ms`
      }}
    >
      {/* Animated border */}
      <div
        className="absolute inset-0 rounded-xl border-2 border-transparent transition-all duration-500"
        style={{
          borderColor: isHovered ? 'rgba(201, 162, 39, 0.5)' : 'transparent'
        }}
      />

      <div className={`text-[#c9a227] mb-4 transition-all duration-500 ${isHovered ? 'scale-110 rotate-3' : ''}`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

// Pulsing Button Component
function PulsingButton({ children, onClick, className = '', primary = false }: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  primary?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative ${primary ? 'btn-primary' : 'btn-secondary'} ${className} overflow-hidden group`}
    >
      <span className="relative z-10">{children}</span>
      {primary && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#f4d35e] to-[#c9a227] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </button>
  );
}

export default function Home() {
  const [isDeckOpen, setIsDeckOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <PasswordProtection>
      <PitchDeck isOpen={isDeckOpen} onClose={() => setIsDeckOpen(false)} />
      <ScrollProgress />

      <div className="min-h-screen bg-[#0a1628] text-white overflow-x-hidden">
        {/* Mouse follower glow */}
        <div
          className="fixed w-96 h-96 rounded-full pointer-events-none z-0 transition-all duration-300 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(201, 162, 39, 0.03) 0%, transparent 70%)',
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />

        {/* Navigation */}
        <nav className="fixed top-1 left-0 right-0 z-50 bg-[#0a1628]/90 backdrop-blur-md border-b border-[#2a3a52]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-8 h-8 sm:w-10 sm:h-10 relative transition-transform duration-300 group-hover:scale-110">
                <Image src="/nuqta-logo.png" alt="Nuqta" fill className="object-contain" />
              </div>
              <span className="text-lg sm:text-xl font-bold group-hover:text-[#c9a227] transition-colors">Nuqta</span>
            </div>
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-300 hover:text-[#c9a227]"
              onClick={() => setIsDeckOpen(true)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
              {['Features', 'How It Works', 'Use Cases', 'Investors', 'FAQ'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-sm lg:text-base text-gray-300 hover:text-[#c9a227] transition-all duration-300 hover:scale-105 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c9a227] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <PulsingButton onClick={() => setIsDeckOpen(true)} primary className="text-sm">
                View Deck
              </PulsingButton>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section-padding pt-24 sm:pt-28 md:pt-32 lg:pt-40 min-h-screen flex items-center relative">
          <FloatingParticles />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <AnimatedSection>
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-full mb-4 sm:mb-6 animate-pulse">
                <span className="text-[#c9a227] text-xs sm:text-sm font-medium">Smart Rewards & Payment Intelligence for the GCC</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight">
                Every payment starts<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>with a <span className="gradient-text animate-shimmer">point</span>.
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 px-2">
                <span className="text-white font-semibold">Nuqta (&#1606;&#1602;&#1591;&#1577;)</span> helps people earn universal rewards on everyday spending and always choose the smartest way to pay — online and offline.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
                <a href="#early-access" className="btn-primary text-base sm:text-lg group relative overflow-hidden">
                  <span className="relative z-10">Get Early Access</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f4d35e] to-[#c9a227] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                <button
                  onClick={() => setIsDeckOpen(true)}
                  className="btn-secondary text-base sm:text-lg group hover:border-[#c9a227] transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    View Pitch Deck
                  </span>
                </button>
              </div>
            </AnimatedSection>

            {/* Scroll indicator */}
            <AnimatedSection delay={1000}>
              <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ==================== INVESTOR SNAPSHOT ==================== */}
        <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-[#0a1628] to-[#0d1c30] border-y border-[#c9a227]/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <div className="text-center mb-6 sm:mb-8">
                <span className="inline-block px-3 sm:px-4 py-1 bg-[#c9a227]/20 border border-[#c9a227]/40 rounded-full text-[#c9a227] text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                  Investment Opportunity
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">The Opportunity at a Glance</h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {[
                { value: '$40B', label: 'UAE Addressable Market', sub: 'Annual spend', icon: '📊' },
                { value: '$500K', label: 'Raising Now', sub: 'Pre-Seed (CCD)', icon: '💰' },
                { value: '$3M-$10M', label: 'Valuation Range', sub: 'Floor to Cap', icon: '📈' },
                { value: 'First', label: 'Neutral Intelligence Layer', sub: 'in GCC payments', icon: '🏆' },
              ].map((item, idx) => (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <div className="bg-[#1a2a42]/80 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 border border-[#c9a227]/20 text-center hover:border-[#c9a227]/50 transition-all hover:scale-105">
                    <span className="text-xl sm:text-2xl mb-1 sm:mb-2 block">{item.icon}</span>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#c9a227]">{item.value}</p>
                    <p className="font-medium text-xs sm:text-sm mt-1">{item.label}</p>
                    <p className="text-[10px] sm:text-xs text-gray-500">{item.sub}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={500}>
              <div className="bg-gradient-to-r from-[#c9a227]/10 to-[#c9a227]/5 rounded-xl p-6 border border-[#c9a227]/30 text-center">
                <p className="text-lg md:text-xl">
                  <span className="text-gray-300">Nuqta is building the</span>{' '}
                  <span className="text-[#c9a227] font-bold">payment intelligence and rewards infrastructure</span>{' '}
                  <span className="text-gray-300">for the GCC — a market with</span>{' '}
                  <span className="text-white font-bold">no dominant player</span>.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ==================== ONE-LINER DEFINITION ==================== */}
        <section className="py-16 bg-[#0d1c30]">
          <div className="max-w-5xl mx-auto px-6">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  What is <span className="text-[#c9a227]">Nuqta</span>?
                </h2>
                <div className="max-w-3xl mx-auto">
                  <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-4">
                    <span className="text-[#c9a227] font-bold">Nuqta (نقطة)</span> = &quot;Point&quot; in Arabic
                  </p>
                  <div className="bg-[#1a2a42]/80 rounded-2xl p-8 border border-[#c9a227]/30">
                    <p className="text-xl md:text-2xl font-medium leading-relaxed">
                      A <span className="text-[#c9a227]">smart rewards</span> and <span className="text-[#c9a227]">payment intelligence</span> app that helps users <span className="text-white">earn universal rewards</span> on everyday spending and <span className="text-white">always choose the smartest way to pay</span>.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Three Pillars */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  emoji: "🧠",
                  title: "Payment Intelligence",
                  desc: "AI recommends the best card, wallet, or BNPL for every transaction",
                  highlight: "Save money on every purchase"
                },
                {
                  emoji: "⭐",
                  title: "Universal Rewards",
                  desc: "One points system that works across all merchants and partners",
                  highlight: "No more fragmented loyalty"
                },
                {
                  emoji: "🏪",
                  title: "Merchant Tools",
                  desc: "QR-based loyalty, visit tracking, and performance-based campaigns",
                  highlight: "Merchants own their customers"
                },
              ].map((item, idx) => (
                <AnimatedSection key={idx} delay={200 + idx * 150}>
                  <div className="bg-[#1a2a42]/50 rounded-xl p-6 border border-[#2a3a52] hover:border-[#c9a227]/50 transition-all duration-500 hover:scale-105 cursor-pointer group h-full">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.emoji}</div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#c9a227] transition-colors">{item.title}</h3>
                    <p className="text-gray-400 mb-3">{item.desc}</p>
                    <p className="text-[#c9a227] text-sm font-medium">{item.highlight}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="section-padding bg-gradient-to-b from-[#0d1c30] to-[#0a1628]">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1 bg-red-500/20 border border-red-500/40 rounded-full text-red-400 text-sm font-medium mb-4">
                  The Problem
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  Spending is digital. <span className="text-red-400">Rewards are broken.</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                  Billions in value is lost every year due to fragmentation.
                </p>
              </div>
            </AnimatedSection>

            {/* Problem Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { stat: '70%+', label: 'of offline spending', desc: 'earns zero rewards', color: 'red' },
                { stat: '5+', label: 'different loyalty apps', desc: 'average user has installed', color: 'red' },
                { stat: '$0', label: 'payment optimization', desc: 'tools for consumers', color: 'red' },
              ].map((item, idx) => (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6 text-center hover:bg-red-500/10 transition-all">
                    <p className="text-4xl md:text-5xl font-bold text-red-400 mb-2">{item.stat}</p>
                    <p className="font-medium text-white">{item.label}</p>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Problem Cards */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { icon: "😤", title: "For Users", problems: ["Rewards fragmented across 10+ programs", "No idea which card saves the most", "Points expire or lose value", "Offline spending = zero rewards"] },
                { icon: "😞", title: "For Merchants", problems: ["Pay 25-30% to marketplaces", "Don't own customer relationships", "Discount-driven, not loyalty-driven", "No affordable loyalty tools"] },
              ].map((section, idx) => (
                <AnimatedSection key={idx} delay={400 + idx * 100}>
                  <div className="bg-[#1a2a42]/50 rounded-xl p-6 border border-red-500/20 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{section.icon}</span>
                      <h3 className="text-xl font-bold text-red-400">{section.title}</h3>
                    </div>
                    <div className="space-y-3">
                      {section.problems.map((problem, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <XIcon />
                          <span className="text-gray-300">{problem}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={700}>
              <div className="bg-gradient-to-r from-red-500/20 to-red-500/5 rounded-xl p-8 border border-red-500/30 text-center">
                <p className="text-xl md:text-2xl font-medium">
                  <span className="text-red-400 font-bold">There is no neutral intelligence layer</span>{' '}
                  <span className="text-gray-300">connecting payments, rewards, and loyalty.</span>
                </p>
                <p className="text-[#c9a227] font-bold mt-4 text-lg">Until Nuqta.</p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* The Solution Section */}
        <section className="section-padding bg-[#0d1c30]">
          <div className="max-w-5xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-[#c9a227]">Nuqta</span> fixes this.
              </h2>
              <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
                One intelligent platform that unifies everything.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-5 gap-4">
              {[
                { icon: "⭐", title: "Universal Rewards", desc: "Nuqta Points" },
                { icon: "🧠", title: "Smart Pay Advisor", desc: "Best way to pay" },
                { icon: "🔥", title: "Visit Loyalty", desc: "Streak-based earning" },
                { icon: "🌐", title: "Offline + Online", desc: "Everywhere earning" },
                { icon: "🏪", title: "Merchant Tools", desc: "Performance-first" },
              ].map((item, idx) => (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <div className="bg-[#1a2a42]/50 rounded-xl p-5 border border-[#c9a227]/20 hover:border-[#c9a227]/60 transition-all duration-500 hover:scale-110 cursor-pointer group">
                    <div className="text-3xl mb-3 group-hover:animate-bounce">{item.icon}</div>
                    <h3 className="font-semibold text-sm mb-1 group-hover:text-[#c9a227] transition-colors">{item.title}</h3>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={600}>
              <div className="mt-10 bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/10 rounded-xl p-8 border border-[#c9a227]/30 hover:scale-[1.02] transition-transform duration-300">
                <p className="text-xl md:text-2xl font-medium">
                  All inside <span className="text-[#c9a227]">one intelligent platform</span>.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* How Nuqta Works Section */}
        <section id="how-it-works" className="section-padding">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How Nuqta Works</h2>
              <p className="text-gray-400 text-center mb-12">Simple. Intelligent. Rewarding.</p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {[
                { num: "1", title: "Discover & Spend", desc: "Users discover nearby cafes, salons, groceries, clinics, retail, and services." },
                { num: "2", title: "Smart Pay Advisor", desc: "Before paying, Nuqta recommends the best card, wallet, or BNPL to maximize value." },
                { num: "3", title: "Earn Nuqta Points", desc: "Users earn universal Nuqta Points on eligible purchases." },
                { num: "4", title: "Redeem & Repeat", desc: "Points are redeemed across merchants and grow with repeat visits." },
              ].map((step, idx) => (
                <StepCard key={idx} number={step.num} title={step.title} description={step.desc} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-[#0d1c30]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
              {[
                { value: 600, suffix: 'B+', prefix: '$', label: 'GCC Consumer Spending' },
                { value: 70, suffix: '%', prefix: '', label: 'Digital Payment Rate' },
                { value: 87, suffix: '%', prefix: '', label: 'Points Expire Unused' },
                { value: 3, suffix: 'x', prefix: '', label: 'BNPL YoY Growth' },
              ].map((stat, idx) => (
                <AnimatedSection key={idx} delay={idx * 150}>
                  <div className="group cursor-pointer">
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#c9a227] group-hover:scale-110 transition-transform">
                      <AnimatedCounter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                    </p>
                    <p className="text-gray-400 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">{stat.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* All Features Section */}
        <section id="features" className="section-padding">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">All Features</h2>
              <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                A complete rewards and payments intelligence platform for users and merchants.
              </p>
            </AnimatedSection>

            {/* Payment Intelligence */}
            <div className="mb-16">
              <AnimatedSection>
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <span className="text-[#c9a227]">🧠</span> Payment Intelligence
                </h3>
              </AnimatedSection>
              <div className="grid md:grid-cols-2 gap-6">
                <FeatureCard
                  icon={<BrainIcon />}
                  title="Smart Pay Advisor"
                  description="Nuqta analyzes your payment options and tells you the smartest way to pay before you pay."
                  items={[
                    "Best card recommendation",
                    "Wallet optimization (Apple Pay, etc.)",
                    "BNPL comparison (Tabby, Tamara, others)",
                    "Net savings calculation (Nuqta + bank + BNPL)"
                  ]}
                  index={0}
                />
                <AnimatedSection delay={200}>
                  <div className="card-gradient rounded-xl p-6 flex flex-col justify-center group hover:scale-[1.02] transition-transform duration-300">
                    <p className="text-gray-400 text-lg mb-4">Example:</p>
                    <div className="bg-[#0a1628] rounded-lg p-6 border border-[#c9a227]/30 group-hover:border-[#c9a227] transition-colors">
                      <p className="text-[#c9a227] font-medium text-lg">&quot;Pay with Card A + Apple Pay&quot;</p>
                      <p className="text-3xl font-bold mt-3">
                        Save AED <AnimatedCounter end={42} />
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Rewards & Loyalty */}
            <div className="mb-16">
              <AnimatedSection>
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <span className="text-[#c9a227]">🎁</span> Rewards & Loyalty
                </h3>
              </AnimatedSection>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FeatureCard
                  icon={<GiftIcon />}
                  title="Universal Nuqta Points"
                  description="One reward currency for everyday life."
                  items={["Earned on everyday spending", "Merchant-funded", "Universal across categories", "Transparent redemption"]}
                  index={0}
                />
                <FeatureCard
                  icon={<RefreshIcon />}
                  title="Visit-Based Loyalty & Streaks"
                  description="Rewards repeat visits with increasing benefits."
                  items={["Rewards repeat visits", "Monthly streak bonuses", "Tiered loyalty benefits"]}
                  index={1}
                />
                <FeatureCard
                  icon={<WalletIcon />}
                  title="Wallet & Insights"
                  description="Track all your rewards and savings in one place."
                  items={["Unified rewards wallet", "Points balance & expiry", "Monthly savings summary", "Spending & reward insights"]}
                  index={2}
                />
              </div>
            </div>

            {/* Merchant Features */}
            <div className="mb-16">
              <AnimatedSection>
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <span className="text-[#c9a227]">🏪</span> Merchant Features
                </h3>
              </AnimatedSection>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <FeatureCard icon={<StoreIcon />} title="Loyalty & QR Tools" description="QR-based earning, visit tracking, no hardware required." index={0} />
                <FeatureCard icon={<CampaignIcon />} title="Campaign Manager" description="Bonus point days, repeat visit incentives, VIP rewards." index={1} />
                <FeatureCard icon={<ChartIcon />} title="Merchant Dashboard" description="Visit frequency, loyalty performance, campaign ROI." index={2} />
                <FeatureCard icon={<CreditCardIcon />} title="Performance Pricing" description="No monthly fees. Pay only for real performance." index={3} />
              </div>
            </div>

            {/* Trust & Compliance */}
            <div>
              <AnimatedSection>
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <span className="text-[#c9a227]">🕌</span> Trust, Privacy & Compliance
                </h3>
              </AnimatedSection>
              <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  "Sharia-friendly reward structure",
                  "No interest (riba)",
                  "No gambling or speculation",
                  "Transparent reward logic",
                  "Arabic + English support",
                  "User-controlled permissions"
                ].map((item, idx) => (
                  <AnimatedSection key={idx} delay={idx * 100}>
                    <div className="bg-[#1a2a42]/50 rounded-lg p-4 border border-[#2a3a52] text-center hover:border-[#c9a227]/50 hover:scale-105 transition-all duration-300 cursor-pointer">
                      <CheckIcon />
                      <p className="text-gray-300 text-sm mt-2">{item}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who Nuqta is For Section */}
        <section id="use-cases" className="section-padding bg-[#0d1c30]">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Who Nuqta is For</h2>
              <p className="text-gray-400 text-center mb-12">Built for every stakeholder in the spending ecosystem.</p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <UseCaseCard icon={<UserIcon />} title="Everyday Users" description="Earn rewards on groceries, coffee, salons, and services." index={0} />
              <UseCaseCard icon={<BriefcaseIcon />} title="Urban Professionals" description="Optimize cards & BNPL, track savings, redeem smartly." index={1} />
              <UseCaseCard icon={<StoreIcon />} title="Local Merchants" description="Replace discounts with loyalty and repeat customers." index={2} />
              <UseCaseCard icon={<BankIcon />} title="Banks & Fintech Partners" description="Increase card & BNPL usage through intelligence." index={3} />
            </div>
          </div>
        </section>

        {/* Why Nuqta is Different */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Nuqta is Different</h2>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {["Not a discount app", "Not a delivery marketplace", "Not a bank or wallet", "Not closed loyalty"].map((item, idx) => (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <div className="flex items-center gap-3 p-4 bg-red-500/5 border border-red-500/20 rounded-lg justify-center hover:bg-red-500/10 hover:scale-105 transition-all duration-300 cursor-pointer">
                    <XIcon />
                    <span className="text-gray-300">{item}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection delay={500}>
              <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/10 rounded-xl p-8 border border-[#c9a227]/30 hover:scale-[1.02] transition-transform duration-300">
                <p className="text-xl md:text-2xl font-medium">
                  Nuqta is the <span className="text-[#c9a227]">intelligence layer</span> connecting payments, rewards, and local spending.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Competitive Positioning */}
        <section className="section-padding bg-[#0d1c30]">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Competitive Positioning</h2>
              <p className="text-gray-400 text-center mb-8">Where Nuqta sits in the payments, rewards & loyalty landscape</p>
            </AnimatedSection>

            {/* 2x2 Positioning Map */}
            <AnimatedSection delay={200}>
              <div className="relative bg-[#0a1628] rounded-2xl p-6 border border-[#2a3a52] mb-8">
                {/* Axis Labels */}
                <div className="flex justify-between text-xs text-gray-500 mb-4">
                  <span>Manual / Static</span>
                  <span className="font-medium text-gray-400">Level of Intelligence →</span>
                  <span>Smart / Intelligent</span>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {/* Top-Left: Low Intelligence × Multi-Layer */}
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5 min-h-[180px] relative group hover:border-blue-500/60 transition-all">
                    <div className="absolute top-3 left-3 text-xs text-blue-400 font-medium uppercase">Big Reach, Weak Loyalty</div>
                    <div className="flex flex-col items-center justify-center h-full pt-6">
                      <div className="flex flex-wrap gap-3 justify-center mb-3">
                        {/* Careem Logo */}
                        <div className="flex flex-col items-center group/logo">
                          <div className="w-12 h-12 rounded-xl bg-[#4cb050] flex items-center justify-center shadow-lg group-hover/logo:scale-110 transition-transform">
                            <span className="text-white font-bold text-lg">C</span>
                          </div>
                          <span className="text-[10px] text-gray-400 mt-1">Careem</span>
                        </div>
                        {/* Noon Logo */}
                        <div className="flex flex-col items-center group/logo">
                          <div className="w-12 h-12 rounded-xl bg-[#feee00] flex items-center justify-center shadow-lg group-hover/logo:scale-110 transition-transform">
                            <span className="text-black font-bold text-lg">n</span>
                          </div>
                          <span className="text-[10px] text-gray-400 mt-1">Noon</span>
                        </div>
                        {/* Talabat Logo */}
                        <div className="flex flex-col items-center group/logo">
                          <div className="w-12 h-12 rounded-xl bg-[#ff5a00] flex items-center justify-center shadow-lg group-hover/logo:scale-110 transition-transform">
                            <span className="text-white font-bold text-lg">T</span>
                          </div>
                          <span className="text-[10px] text-gray-400 mt-1">Talabat</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">Super Apps / Marketplaces</p>
                    </div>
                  </div>

                  {/* Top-Right: High Intelligence × Multi-Layer - NUQTA */}
                  <div className="bg-[#c9a227]/20 border-2 border-[#c9a227] rounded-xl p-5 min-h-[180px] relative shadow-lg shadow-[#c9a227]/20 group">
                    <div className="absolute top-3 left-3 text-xs text-[#c9a227] font-bold uppercase flex items-center gap-1">
                      <span className="animate-pulse">✨</span> New Category
                    </div>
                    <div className="flex flex-col items-center justify-center h-full pt-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden relative mb-2 group-hover:scale-110 transition-transform shadow-xl shadow-[#c9a227]/30">
                        <Image src="/nuqta-logo.png" alt="Nuqta" fill className="object-contain" />
                      </div>
                      <p className="text-[#c9a227] font-bold text-xl">NUQTA</p>
                      <p className="text-xs text-[#c9a227]/70">Neutral Intelligence Layer</p>
                    </div>
                  </div>

                  {/* Bottom-Left: Low Intelligence × Single Layer */}
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5 min-h-[180px] relative group hover:border-red-500/60 transition-all">
                    <div className="absolute top-3 left-3 text-xs text-red-400 font-medium uppercase">Easy to Copy</div>
                    <div className="flex flex-col items-center justify-center h-full pt-6">
                      <div className="flex flex-wrap gap-3 justify-center mb-3">
                        {/* Discount Apps */}
                        <div className="flex flex-col items-center group/logo">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg group-hover/logo:scale-110 transition-transform">
                            <span className="text-white text-xl">%</span>
                          </div>
                          <span className="text-[10px] text-gray-400 mt-1">Discounts</span>
                        </div>
                        {/* Coupons */}
                        <div className="flex flex-col items-center group/logo">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg group-hover/logo:scale-110 transition-transform">
                            <span className="text-white text-xl">🎟️</span>
                          </div>
                          <span className="text-[10px] text-gray-400 mt-1">Coupons</span>
                        </div>
                        {/* Cashback */}
                        <div className="flex flex-col items-center group/logo">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center shadow-lg group-hover/logo:scale-110 transition-transform">
                            <span className="text-white text-xl">💵</span>
                          </div>
                          <span className="text-[10px] text-gray-400 mt-1">Cashback</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">Static Offers</p>
                    </div>
                  </div>

                  {/* Bottom-Right: High Intelligence × Single Layer */}
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5 min-h-[180px] relative group hover:border-yellow-500/60 transition-all">
                    <div className="absolute top-3 left-3 text-xs text-yellow-400 font-medium uppercase">Strong but Narrow</div>
                    <div className="flex flex-col items-center justify-center h-full pt-6">
                      <div className="flex flex-wrap gap-3 justify-center mb-3">
                        {/* Tabby Logo */}
                        <div className="flex flex-col items-center group/logo">
                          <div className="w-12 h-12 rounded-xl bg-[#3bffc1] flex items-center justify-center shadow-lg group-hover/logo:scale-110 transition-transform">
                            <span className="text-black font-bold text-sm">tabby</span>
                          </div>
                          <span className="text-[10px] text-gray-400 mt-1">Tabby</span>
                        </div>
                        {/* Tamara Logo */}
                        <div className="flex flex-col items-center group/logo">
                          <div className="w-12 h-12 rounded-xl bg-[#1a1462] flex items-center justify-center shadow-lg group-hover/logo:scale-110 transition-transform">
                            <span className="text-[#ff6bda] font-bold text-lg">T</span>
                          </div>
                          <span className="text-[10px] text-gray-400 mt-1">Tamara</span>
                        </div>
                        {/* Bank Apps */}
                        <div className="flex flex-col items-center group/logo">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg group-hover/logo:scale-110 transition-transform">
                            <span className="text-white text-xl">🏦</span>
                          </div>
                          <span className="text-[10px] text-gray-400 mt-1">Banks</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">BNPL / Payment Only</p>
                    </div>
                  </div>
                </div>

                {/* Y-Axis Label */}
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Single Layer</span>
                  <span className="font-medium text-gray-400">↑ Scope of Value</span>
                  <span>Multi-Layer Platform</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Key Insight */}
            <AnimatedSection delay={400}>
              <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/10 rounded-xl p-6 border border-[#c9a227]/30 text-center hover:scale-[1.02] transition-transform duration-300">
                <p className="text-lg md:text-xl">
                  <span className="text-gray-400">Most players optimize one layer.</span>{' '}
                  <span className="text-[#c9a227] font-bold">Nuqta connects and optimizes all layers.</span>
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Why Now Section */}
        <section className="section-padding">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Now?</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "High Card Penetration", desc: "GCC has among the highest card usage rates globally" },
                { title: "Rapid BNPL Adoption", desc: "Tabby, Tamara, and others reshaping how people pay" },
                { title: "Offline Loyalty Gap", desc: "Daily spending at local merchants earns nothing" },
                { title: "Merchant Pressure", desc: "Margins under pressure from discounts" },
                { title: "No Neutral Layer", desc: "No platform connects payments + rewards + local today" },
              ].map((item, idx) => (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <div className="bg-[#1a2a42]/50 rounded-xl p-6 border border-[#2a3a52] hover:border-[#c9a227]/50 hover:scale-105 transition-all duration-300 cursor-pointer group">
                    <div className="w-10 h-10 bg-[#c9a227]/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#c9a227]/30 transition-all">
                      <CheckIcon />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-[#c9a227] transition-colors">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Governance & Investor Trust Section */}
        <section className="section-padding bg-[#0d1c30]">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Governance & Investor Trust</h2>
              <p className="text-gray-400 text-center mb-12">Nuqta is built with structure, not promises.</p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <DocumentIcon />, title: "Stable Jurisdiction", desc: "Incorporated in a stable, investor-friendly jurisdiction" },
                { icon: <ShieldIcon />, title: "Company-Owned IP", desc: "All intellectual property owned by the company" },
                { icon: <BankIcon />, title: "Protected Funds", desc: "Investor funds go into company accounts" },
                { icon: <BriefcaseIcon />, title: "Founder Vesting", desc: "Founder equity subject to vesting schedule" },
                { icon: <ChartIcon />, title: "Transparent Reporting", desc: "Regular updates and governance standards" },
                { icon: <TrendingUpIcon />, title: "Built to Last", desc: "Nuqta is designed to outlive the founder" },
              ].map((item, idx) => (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <div className="bg-[#1a2a42]/50 rounded-xl p-6 border border-[#2a3a52] hover:border-[#c9a227]/50 hover:scale-105 transition-all duration-300 cursor-pointer group">
                    <div className="text-[#c9a227] mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-[#c9a227] transition-colors">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Exit Strategy Section */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Exit Strategy</h2>
              <p className="text-gray-400 mb-8">Clear & Realistic</p>
              <p className="text-lg text-gray-300 mb-10">
                Nuqta is built as <span className="text-white font-semibold">infrastructure</span>, not a quick flip.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                { title: "Strategic Acquisition by Banks", desc: "Financial institutions seeking loyalty infrastructure" },
                { title: "BNPL / Fintech Players", desc: "Companies expanding into rewards and loyalty" },
                { title: "Super App Acquisition", desc: "Regional super apps consolidating services" },
                { title: "Long-term IPO", desc: "Public market optionality as infrastructure scales" },
              ].map((item, idx) => (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <div className="bg-[#1a2a42]/50 rounded-xl p-6 border border-[#c9a227]/20 text-left hover:border-[#c9a227]/60 hover:scale-105 transition-all duration-300 cursor-pointer group">
                    <h3 className="font-semibold text-lg mb-2 text-[#c9a227]">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection delay={500}>
              <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/10 rounded-xl p-6 border border-[#c9a227]/30 hover:scale-[1.02] transition-transform duration-300">
                <p className="text-lg font-medium">
                  Exits happen when Nuqta becomes <span className="text-[#c9a227]">critical infrastructure</span>.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ==================== WHY INVEST NOW ==================== */}
        <section className="section-padding bg-gradient-to-b from-[#0a1628] to-[#0d1c30]">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1 bg-green-500/20 border border-green-500/40 rounded-full text-green-400 text-sm font-medium mb-4">
                  Market Timing
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  Why Invest <span className="text-[#c9a227]">Now</span>?
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                  The window is open — and it won&apos;t stay that way.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                {
                  icon: '💳',
                  title: 'Payments Behavior Shifting',
                  desc: 'Digital payments, contactless, and mobile wallets are now mainstream post-COVID. Users are open to new payment experiences.',
                  stat: '70%+',
                  statLabel: 'Digital payment penetration in UAE'
                },
                {
                  icon: '📈',
                  title: 'BNPL Adoption Accelerating',
                  desc: 'Tabby, Tamara, and others have normalized BNPL — but there\'s no neutral comparison layer. That\'s exactly what Nuqta provides.',
                  stat: '3x',
                  statLabel: 'YoY BNPL growth in GCC'
                },
                {
                  icon: '🏪',
                  title: 'Merchants Hungry for Tools',
                  desc: 'Local merchants are losing customers to aggregators and lack affordable loyalty solutions. Nuqta gives them ownership.',
                  stat: '25-30%',
                  statLabel: 'Commission lost to marketplaces'
                },
                {
                  icon: '🏆',
                  title: 'First-Mover Advantage',
                  desc: 'No one has built the neutral intelligence layer for GCC payments. The opportunity to define the category is now.',
                  stat: '$0',
                  statLabel: 'Competition in this space'
                },
              ].map((item, idx) => (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <div className="bg-[#1a2a42]/50 rounded-xl p-6 border border-[#2a3a52] hover:border-[#c9a227]/50 transition-all h-full">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-4xl">{item.icon}</span>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-[#c9a227]">{item.stat}</p>
                        <p className="text-xs text-gray-500">{item.statLabel}</p>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={500}>
              <div className="bg-gradient-to-r from-[#c9a227]/20 via-[#c9a227]/10 to-[#c9a227]/20 rounded-xl p-8 border border-[#c9a227]/30 text-center">
                <p className="text-xl md:text-2xl font-medium mb-4">
                  <span className="text-white">The infrastructure play is available</span>{' '}
                  <span className="text-[#c9a227] font-bold">before someone else takes it.</span>
                </p>
                <button onClick={() => setIsDeckOpen(true)} className="btn-primary mt-4 group relative overflow-hidden">
                  <span className="relative z-10">See the Full Opportunity →</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f4d35e] to-[#c9a227] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Pitch Deck Section */}
        <section id="pitch-deck" className="section-padding bg-[#0d1c30]">
          <div className="max-w-5xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuqta Investor Deck</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Explore our full vision, market opportunity, execution strategy, and roadmap.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div
                onClick={() => setIsDeckOpen(true)}
                className="bg-[#1a2a42] rounded-xl p-8 border border-[#2a3a52] cursor-pointer hover:border-[#c9a227]/50 transition-all duration-500 group hover:scale-[1.02]"
              >
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {[
                    { slide: "1", title: "NUQTA", subtitle: "The Smart Rewards App", logo: true },
                    { slide: "2", title: "The Problem", subtitle: "Broken Rewards & Payments", dots: "red" },
                    { slide: "3", title: "The Solution", subtitle: "Integrated Intelligence", dots: "gold" },
                  ].map((card, idx) => (
                    <div
                      key={idx}
                      className="bg-[#0a1628] rounded-lg p-4 text-left transition-all duration-300 hover:scale-105"
                      style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                      <p className="text-xs text-gray-500 mb-2">Slide {card.slide}</p>
                      {card.logo ? (
                        <div className="w-10 h-10 relative mb-2">
                          <Image src="/nuqta-logo.png" alt="Nuqta" fill className="object-contain" />
                        </div>
                      ) : null}
                      <p className="font-semibold text-sm">{card.title}</p>
                      <p className="text-xs text-gray-400">{card.subtitle}</p>
                      {card.dots && (
                        <div className="flex gap-1 mt-2">
                          {[...Array(3)].map((_, i) => (
                            <span key={i} className={`w-2 h-2 ${card.dots === 'red' ? 'bg-red-400/50' : 'bg-[#c9a227]/50'} rounded-full`} />
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center gap-2 text-[#c9a227] group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold">View Full Deck (20 Slides)</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">Click to open interactive presentation</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <button onClick={() => setIsDeckOpen(true)} className="btn-primary group relative overflow-hidden">
                  <span className="relative z-10">View Pitch Deck</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f4d35e] to-[#c9a227] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                <a href="mailto:rejaul@nuqtaapp.com?subject=Nuqta%20Investor%20Deck%20PDF" className="btn-secondary hover:border-[#c9a227] transition-colors">
                  Download PDF
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ==================== FOR INVESTORS SECTION ==================== */}
        <section id="investors" className="section-padding bg-gradient-to-b from-[#0a1628] to-[#0d1c30]">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-2 bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-full mb-6">
                  <span className="text-[#c9a227] text-sm font-medium">For Investors</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Built as Infrastructure.<br />Structured for Scale.</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Nuqta is designed as a payments and loyalty infrastructure platform for the GCC.
                  Below is a transparent overview of the team, opportunity, and execution plan.
                </p>
              </div>
            </AnimatedSection>

            {/* Team & Founder */}
            <div className="mb-20">
              <AnimatedSection>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="w-10 h-10 bg-[#c9a227]/20 rounded-lg flex items-center justify-center text-xl">👤</span>
                  Team & Founder
                </h3>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <div className="bg-[#1a2a42]/50 rounded-2xl p-8 border border-[#2a3a52] hover:border-[#c9a227]/30 transition-all duration-500">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#c9a227] to-[#f4d35e] rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-4xl font-bold text-[#0a1628]">RK</span>
                    </div>
                    <div className="flex-1">
                      <a href="https://www.linkedin.com/in/rejaulkarim007/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 group">
                        <h4 className="text-2xl font-bold mb-1 group-hover:text-[#c9a227] transition-colors">Rejaul Karim</h4>
                        <svg className="w-5 h-5 text-[#0077b5] group-hover:text-[#00a0dc] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      </a>
                      <p className="text-[#c9a227] mb-4">Founder & CEO — Nuqta</p>
                      <ul className="space-y-2 text-gray-300 mb-6">
                        <li className="flex items-start gap-2">
                          <CheckIcon />
                          <span>Product-first founder with deep focus on <strong className="text-white">payments, rewards, and merchant ecosystems</strong></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon />
                          <span>Building Nuqta as a <strong className="text-white">long-term infrastructure platform</strong>, not a short-term consumer app</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon />
                          <span>Strong understanding of <strong className="text-white">GCC market behavior, fintech partnerships, and loyalty economics</strong></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon />
                          <span>Founder equity subject to <strong className="text-white">vesting and governance controls</strong></span>
                        </li>
                      </ul>
                      <div className="bg-[#0a1628] rounded-lg p-4 border-l-4 border-[#c9a227]">
                        <p className="text-gray-300 italic">&quot;Nuqta is built to outlive the founder — structure comes before personality.&quot;</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* The Ask */}
            <div className="mb-20">
              <AnimatedSection>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="w-10 h-10 bg-[#c9a227]/20 rounded-lg flex items-center justify-center text-xl">💰</span>
                  The Ask
                </h3>
              </AnimatedSection>

              {/* Investment Terms Grid */}
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                <AnimatedSection delay={100}>
                  <div className="bg-gradient-to-br from-[#c9a227] to-[#f4d35e] rounded-2xl p-6 text-center">
                    <p className="text-[#0a1628] text-sm uppercase tracking-wider mb-1">Raising</p>
                    <p className="text-[#0a1628] text-4xl font-bold">$500K</p>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={150}>
                  <div className="bg-[#1a2a42]/50 rounded-2xl p-6 border border-[#c9a227]/30 text-center">
                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Instrument</p>
                    <p className="text-2xl font-bold">CCD</p>
                    <p className="text-xs text-gray-500">(Convertible Note)</p>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={200}>
                  <div className="bg-[#1a2a42]/50 rounded-2xl p-6 border border-[#2a3a52] text-center">
                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Floor Valuation</p>
                    <p className="text-2xl font-bold text-[#c9a227]">$3M</p>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={250}>
                  <div className="bg-[#1a2a42]/50 rounded-2xl p-6 border border-[#2a3a52] text-center">
                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Cap Valuation</p>
                    <p className="text-2xl font-bold text-[#c9a227]">$10M</p>
                    <p className="text-xs text-gray-500">20% Discount</p>
                  </div>
                </AnimatedSection>
              </div>

              {/* Objectives */}
              <AnimatedSection delay={300}>
                <div className="bg-[#1a2a42]/50 rounded-2xl p-8 border border-[#2a3a52]">
                  <p className="text-[#c9a227] font-semibold mb-4">Objective of This Round</p>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {[
                      "Launch MVP in UAE",
                      "Secure early merchant network",
                      "Validate unit economics and repeat usage",
                      "Prepare for Seed round"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <span className="w-6 h-6 bg-[#c9a227]/20 rounded-full flex items-center justify-center text-sm text-[#c9a227]">{idx + 1}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>

            {/* Use of Funds */}
            <div className="mb-20">
              <AnimatedSection>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="w-10 h-10 bg-[#c9a227]/20 rounded-lg flex items-center justify-center text-xl">🧮</span>
                  Use of Funds
                </h3>
              </AnimatedSection>
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                {[
                  { category: "Product & Engineering", percent: 40, amount: "$200K", icon: "💻", color: "from-[#c9a227] to-[#f4d35e]" },
                  { category: "Merchant Acquisition", percent: 30, amount: "$150K", icon: "🏪", color: "from-green-500 to-green-600" },
                  { category: "Partnerships & Ops", percent: 20, amount: "$100K", icon: "🤝", color: "from-purple-500 to-purple-600" },
                  { category: "Contingency", percent: 10, amount: "$50K", icon: "🛡️", color: "from-orange-500 to-orange-600" },
                ].map((item, idx) => (
                  <AnimatedSection key={idx} delay={idx * 100}>
                    <div className="bg-[#1a2a42]/50 rounded-xl p-5 border border-[#2a3a52] hover:border-[#c9a227]/30 transition-all duration-300 text-center">
                      <span className="text-3xl mb-2 block">{item.icon}</span>
                      <p className="text-2xl font-bold text-[#c9a227] mb-1">{item.percent}%</p>
                      <p className="font-semibold text-sm mb-1">{item.category}</p>
                      <p className="text-gray-500 text-xs">{item.amount}</p>
                      <div className="mt-3 h-2 bg-[#0a1628] rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${item.percent * 2.5}%` }}
                        />
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
              <AnimatedSection delay={500}>
                <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl p-4 border border-[#c9a227]/30 text-center">
                  <p className="text-lg">
                    <span className="text-[#c9a227] font-bold">Goal:</span>{' '}
                    <span className="text-white">Reach Seed-Ready Metrics</span>
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    Demonstrate product-market fit, early traction, and clear path to scale
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Traction */}
            <div className="mb-20">
              <AnimatedSection>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="w-10 h-10 bg-[#c9a227]/20 rounded-lg flex items-center justify-center text-xl">📊</span>
                  Traction & Early Signals
                  <span className="text-sm font-normal text-gray-400 ml-2">(Pre-Launch)</span>
                </h3>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <div className="bg-[#1a2a42]/50 rounded-2xl p-8 border border-[#2a3a52]">
                  <p className="text-gray-400 mb-6">Nuqta is currently pre-launch. Early signals include:</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {[
                      { icon: "📋", text: "Early access waitlist (users & merchants)" },
                      { icon: "🏪", text: "Active discussions with local merchants for pilot programs" },
                      { icon: "🤝", text: "Partnership conversations with BNPL and fintech players" },
                      { icon: "📈", text: "Strong inbound interest after deck circulation" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 bg-[#0a1628]/50 rounded-lg">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-gray-300">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#c9a227]/10 rounded-lg p-4 border border-[#c9a227]/30">
                    <p className="text-center text-[#c9a227] font-medium">
                      Focus: validating <span className="text-white">repeat usage</span>, not vanity metrics.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Market Size */}
            <div className="mb-20">
              <AnimatedSection>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="w-10 h-10 bg-[#c9a227]/20 rounded-lg flex items-center justify-center text-xl">📈</span>
                  Market Size
                  <span className="text-sm font-normal text-gray-400 ml-2">(Realistic & Investable)</span>
                </h3>
              </AnimatedSection>
              <div className="grid md:grid-cols-2 gap-6">
                <AnimatedSection delay={100}>
                  <div className="bg-[#1a2a42]/50 rounded-2xl p-8 border border-[#2a3a52] h-full">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl">🇦🇪</span>
                      <h4 className="text-xl font-bold">Initial Market — UAE</h4>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-[#2a3a52]">
                        <span className="text-gray-400">Active card/wallet users</span>
                        <span className="text-xl font-bold">~5M</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-[#2a3a52]">
                        <span className="text-gray-400">Avg addressable spend/user/year</span>
                        <span className="text-xl font-bold">~$8,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-400">Addressable Spend</span>
                        <span className="text-2xl font-bold text-[#c9a227]">~$40B/yr</span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={200}>
                  <div className="bg-[#1a2a42]/50 rounded-2xl p-8 border border-[#2a3a52] h-full">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl">🌍</span>
                      <h4 className="text-xl font-bold">Expansion — GCC</h4>
                    </div>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckIcon />
                        <span>Same consumer behavior across KSA, Qatar, Kuwait</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckIcon />
                        <span>Larger population + higher spend</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckIcon />
                        <span>Infrastructure-first expansion</span>
                      </li>
                    </ul>
                    <div className="mt-6 bg-[#0a1628] rounded-lg p-4">
                      <p className="text-gray-400 text-sm">
                        Nuqta targets <span className="text-white font-semibold">high-frequency, everyday spending</span>, not one-time GMV.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Revenue Model */}
            <div className="mb-20">
              <AnimatedSection>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="w-10 h-10 bg-[#c9a227]/20 rounded-lg flex items-center justify-center text-xl">💸</span>
                  Revenue Model
                  <span className="text-sm font-normal text-gray-400 ml-2">(Unit Economics)</span>
                </h3>
              </AnimatedSection>
              <div className="grid md:grid-cols-2 gap-6">
                <AnimatedSection delay={100}>
                  <div className="bg-[#1a2a42]/50 rounded-2xl p-8 border border-[#2a3a52] h-full">
                    <h4 className="text-lg font-semibold text-[#c9a227] mb-4">Primary Revenue Streams</h4>
                    <div className="space-y-4">
                      {[
                        { num: "1", title: "Merchant-funded rewards", desc: "(performance-based)" },
                        { num: "2", title: "Promoted listings & campaigns", desc: "" },
                        { num: "3", title: "BNPL & fintech referral commissions", desc: "" },
                        { num: "4", title: "Premium merchant tools", desc: "(later stage)" },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="w-8 h-8 bg-[#c9a227]/20 rounded-lg flex items-center justify-center text-[#c9a227] font-bold flex-shrink-0">
                            {item.num}
                          </span>
                          <div>
                            <span className="text-white font-medium">{item.title}</span>
                            {item.desc && <span className="text-gray-400 text-sm ml-1">{item.desc}</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={200}>
                  <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-2xl p-8 border border-[#c9a227]/30 h-full">
                    <h4 className="text-lg font-semibold text-[#c9a227] mb-4">Why This Works</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { icon: "📦", text: "No inventory" },
                        { icon: "🚚", text: "No logistics" },
                        { icon: "💸", text: "No heavy discount burn" },
                        { icon: "🤝", text: "Aligned incentives" },
                      ].map((item, idx) => (
                        <div key={idx} className="bg-[#0a1628]/50 rounded-lg p-4 text-center">
                          <span className="text-2xl mb-2 block">{item.icon}</span>
                          <span className="text-gray-300 text-sm">{item.text}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-400 text-sm mt-4 text-center">
                      Aligned incentives across users, merchants, and partners
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Roadmap */}
            <div className="mb-20">
              <AnimatedSection>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="w-10 h-10 bg-[#c9a227]/20 rounded-lg flex items-center justify-center text-xl">🗺️</span>
                  Roadmap & Milestones
                </h3>
              </AnimatedSection>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    phase: "0–6 Months",
                    title: "Launch",
                    items: ["MVP launch (Dubai)", "50–100 pilot merchants", "Core Smart Pay Advisor live", "First repeat usage metrics"],
                    color: "border-blue-500",
                    bg: "bg-blue-500/10"
                  },
                  {
                    phase: "6–12 Months",
                    title: "Scale",
                    items: ["500+ merchants", "Category expansion (grocery, essentials)", "Deeper BNPL integrations", "Loyalty tiers live"],
                    color: "border-[#c9a227]",
                    bg: "bg-[#c9a227]/10"
                  },
                  {
                    phase: "12–24 Months",
                    title: "Expand",
                    items: ["Expansion beyond Dubai", "Bank partnerships", "Advanced payment intelligence", "Seed / Series A readiness"],
                    color: "border-green-500",
                    bg: "bg-green-500/10"
                  },
                ].map((phase, idx) => (
                  <AnimatedSection key={idx} delay={idx * 150}>
                    <div className={`rounded-2xl p-6 border-t-4 ${phase.color} ${phase.bg} h-full`}>
                      <p className="text-gray-400 text-sm mb-1">{phase.phase}</p>
                      <h4 className="text-xl font-bold mb-4">{phase.title}</h4>
                      <ul className="space-y-2">
                        {phase.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                            <CheckIcon />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Advisors */}
            <div className="mb-20">
              <AnimatedSection>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="w-10 h-10 bg-[#c9a227]/20 rounded-lg flex items-center justify-center text-xl">🤝</span>
                  Advisors & Partners
                  <span className="text-sm font-normal text-gray-400 ml-2">(In Progress)</span>
                </h3>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <div className="bg-[#1a2a42]/50 rounded-2xl p-8 border border-[#2a3a52]">
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    {[
                      { icon: "💳", title: "Payments & Fintech", desc: "advisors" },
                      { icon: "🏪", title: "GCC Merchant Ecosystem", desc: "advisors" },
                      { icon: "⚖️", title: "Compliance & Governance", desc: "advisors" },
                    ].map((item, idx) => (
                      <div key={idx} className="text-center p-4 bg-[#0a1628]/50 rounded-xl">
                        <span className="text-3xl mb-2 block">{item.icon}</span>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-gray-400 italic">
                    Advisory board is being built <span className="text-white">deliberately</span>, aligned with execution phases.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Governance & Investor Protection */}
            <div className="mb-20">
              <AnimatedSection>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="w-10 h-10 bg-[#c9a227]/20 rounded-lg flex items-center justify-center text-xl">🛡️</span>
                  Governance & Investor Protection
                </h3>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <div className="bg-[#1a2a42]/50 rounded-2xl p-8 border border-[#2a3a52]">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {[
                      { icon: "🏢", text: "Company incorporated in a stable jurisdiction" },
                      { icon: "💡", text: "All IP, code, and trademarks owned by the company" },
                      { icon: "📜", text: "Founder equity subject to vesting" },
                      { icon: "🏦", text: "Funds held in company accounts" },
                      { icon: "📊", text: "Regular reporting and transparency" },
                      { icon: "✅", text: "Board governance from Day 1" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 bg-[#0a1628]/50 rounded-lg">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-gray-300">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#c9a227]/10 rounded-lg p-4 border border-[#c9a227]/30">
                    <p className="text-center text-[#c9a227] font-medium">
                      Trust is created through <span className="text-white">structure</span>, not promises.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Exit Strategy */}
            <div className="mb-20">
              <AnimatedSection>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="w-10 h-10 bg-[#c9a227]/20 rounded-lg flex items-center justify-center text-xl">🚪</span>
                  Exit Strategy
                </h3>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <div className="bg-[#1a2a42]/50 rounded-2xl p-8 border border-[#2a3a52]">
                  <p className="text-gray-400 mb-6 text-center">
                    Nuqta is built as <span className="text-white font-semibold">infrastructure</span>, which creates strategic optionality.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-[#c9a227] mb-4">Likely Acquirers</h4>
                      <div className="space-y-3">
                        {[
                          { icon: "🏦", title: "Banks & Financial Institutions", desc: "Looking to modernize rewards infrastructure" },
                          { icon: "💳", title: "BNPL & Fintech Players", desc: "Seeking loyalty and merchant network expansion" },
                          { icon: "📱", title: "Super Apps & Marketplaces", desc: "Wanting to own the payment intelligence layer" },
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 bg-[#0a1628]/50 rounded-lg">
                            <span className="text-xl">{item.icon}</span>
                            <div>
                              <p className="font-medium text-white">{item.title}</p>
                              <p className="text-gray-400 text-sm">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#c9a227] mb-4">Long-Term Vision</h4>
                      <div className="bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl p-6 border border-[#c9a227]/30 h-full flex flex-col justify-center">
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <span className="w-8 h-8 bg-[#c9a227]/20 rounded-full flex items-center justify-center text-[#c9a227]">→</span>
                            <span className="text-gray-300">Regional expansion across GCC</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="w-8 h-8 bg-[#c9a227]/20 rounded-full flex items-center justify-center text-[#c9a227]">→</span>
                            <span className="text-gray-300">IPO optionality as infrastructure matures</span>
                          </div>
                        </div>
                        <div className="mt-6 pt-4 border-t border-[#c9a227]/20">
                          <p className="text-[#c9a227] font-semibold text-center">
                            Exits happen when infrastructure becomes critical.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Investor CTA */}
            <AnimatedSection>
              <div className="bg-gradient-to-r from-[#c9a227]/20 via-[#c9a227]/10 to-[#c9a227]/20 rounded-2xl p-10 border border-[#c9a227]/30 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Interested in Nuqta?</h3>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                  We&apos;re building the payments and rewards infrastructure layer for the GCC.
                  Let&apos;s discuss how you can be part of this journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
                  <button onClick={() => setIsDeckOpen(true)} className="btn-primary group relative overflow-hidden">
                    <span className="relative z-10">View Full Pitch Deck</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#f4d35e] to-[#c9a227] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                  <a href="/memo" className="btn-secondary hover:border-[#c9a227] transition-colors">
                    One-Page Memo
                  </a>
                  <a href="/data-room" className="btn-secondary hover:border-[#c9a227] transition-colors">
                    Data Room
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Investor FAQ Section - Brutal Due Diligence */}
        <section id="faq" className="section-padding bg-[#0d1c30]">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1 bg-[#c9a227]/20 border border-[#c9a227]/40 rounded-full text-[#c9a227] text-sm font-medium mb-4">
                  INVESTOR DUE DILIGENCE
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Brutal Honesty FAQ</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  50 tough questions investors ask — with honest, credible answers. No hype, no marketing speak.
                </p>
              </div>
            </AnimatedSection>

            {/* Category: Business Strategy */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
                <span className="text-2xl">🔥</span> Why You Might Fail — Business Strategy
              </h3>
              <div className="space-y-1">
                {[
                  { q: "Why isn't Nuqta just a feature Tabby builds?", a: "Tabby optimizes installments at checkout. Nuqta optimizes how, where, and why users spend across merchants and payment methods. That's a different layer. Tabby would have to become merchant-agnostic, rewards-neutral, and competitor-friendly — which conflicts with their core business. We sit above them, not inside them." },
                  { q: "Why wouldn't banks just do this themselves?", a: "Banks optimize their own cards, not the user's total outcome. Nuqta is intentionally neutral. A bank app recommending another bank's card destroys their economics. We win because neutrality is a business constraint banks cannot accept." },
                  { q: "Why won't users ignore \"another rewards app\"?", a: "Nuqta is not a rewards app first — it's a decision engine. The hook is \"How should I pay?\", not \"Here's a coupon.\" Rewards are reinforcement, not the entry point." },
                  { q: "How do you survive the chicken-and-egg problem?", a: "We start hyper-local + high frequency: One city, two categories, 50–100 merchants. Users don't need 1,000 merchants to see value; they need their daily places. We optimize depth before breadth." },
                  { q: "If Apple Pay adds \"Best Card,\" are you dead?", a: "Apple Pay can optimize within Apple's ecosystem. We optimize across banks, BNPLs, loyalty logic, and offline merchants. Also, Apple doesn't build merchant loyalty networks — that's not their business." },
                  { q: "If you earn referral fees, how are you neutral?", a: "Our recommendation engine is rule-based first, not revenue-weighted. Commercial incentives are separated from recommendation logic. Long-term trust > short-term referral revenue." },
                  { q: "What can't Etisalat Smiles replicate?", a: "They have distribution, not behavioral intelligence across payments + offline loyalty. We're building merchant-level visit data + payment optimization, not just points." },
                  { q: "Why would a bank buy you if you're agnostic?", a: "Because we increase total card usage and LTV, even if usage is shared. Banks acquire infrastructure to own the layer, not because it favors them initially." },
                  { q: "Can this scale in KSA with on-ground sales?", a: "Yes — but only after UAE proof. We intentionally validate unit economics and onboarding playbooks in Dubai before KSA. Asset-light ≠ zero sales; it means efficient sales." },
                  { q: "Why won't Careem crush you?", a: "Careem optimizes rides + food. We optimize everyday spend + payment decisions. They could partner faster than build, which makes us acquisition-relevant, not obsolete." },
                ].map((faq, idx) => (
                  <FAQItem key={`strategy-${idx}`} question={faq.q} answer={faq.a} index={idx} />
                ))}
              </div>
            </div>

            {/* Category: Tech & Product */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-2">
                <span className="text-2xl">🧠</span> Tech & Product
              </h3>
              <div className="space-y-1">
                {[
                  { q: "How does Smart Pay Advisor get card data?", a: "Phase 1: curated rules + publicly available offer data. Phase 2: partner feeds + issuer APIs. Phase 3: behavioral optimization. We don't pretend real-time perfection on day one." },
                  { q: "Is this manual or automated?", a: "Hybrid. Rules engine first → automation later. This reduces early technical risk while validating real usage." },
                  { q: "How do you verify transactions without Open Banking?", a: "We don't verify amounts initially — we verify events (visit + payment confirmation). That's sufficient for loyalty validation without regulatory exposure." },
                  { q: "QR friction in cafés?", a: "QR is fallback, not default. Primary flow is auto-detection + minimal confirmation. QR exists where POS integration isn't available." },
                  { q: "How do you prove a visit happened?", a: "Combination of: Location, time window, merchant confirmation logic, and fraud rules. We optimize accuracy over false positives." },
                  { q: "Is \"AI\" real or buzzword?", a: "Today: rules + heuristics. Next: supervised learning on payment outcomes. We don't market AI — we earn it." },
                  { q: "Fraud prevention?", a: "Visit limits, time thresholds, merchant validation rules, and anomaly detection. Fraud is manageable because rewards are merchant-funded, not cash." },
                  { q: "Who owns point liability?", a: "Merchants fund redemptions. Nuqta points are utility credits, not stored monetary value." },
                  { q: "Point inflation?", a: "Points are earn-rate controlled, not supply-free. Value is stabilized by redemption rules, not speculation." },
                  { q: "Security architecture?", a: "Minimal data storage, no card numbers, tokenized identifiers, cloud-native security stack. We deliberately avoid holding money." },
                ].map((faq, idx) => (
                  <FAQItem key={`tech-${idx}`} question={faq.q} answer={faq.a} index={idx} />
                ))}
              </div>
            </div>

            {/* Category: Merchant Pain */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
                <span className="text-2xl">🏪</span> Merchant Pain
              </h3>
              <div className="space-y-1">
                {[
                  { q: "Another device on the counter?", a: "No. Web dashboard + QR fallback. No hardware dependency." },
                  { q: "Why would merchants pay more fees?", a: "They're not paying for payments — they're paying for repeat behavior. Discounts cost money without learning. Nuqta costs money with insight." },
                  { q: "Merchant churn?", a: "Churn is real. That's why we price performance-based and focus on SMEs with repeat customers, not one-off vendors." },
                  { q: "Attribution proof?", a: "We track: First-time Nuqta user visits, repeat lift vs baseline, and campaign-linked visits. Perfect attribution isn't required — directional ROI is." },
                  { q: "POS integrations?", a: "Deferred intentionally. We scale via POS-light methods first, integrate later once leverage exists." },
                  { q: "Why would merchants allow universal points?", a: "Because universal points increase visit frequency, not price competition. Private loyalty limits customer freedom; Nuqta increases it." },
                  { q: "Sales grind?", a: "Yes — initially. That's why targets are realistic (50–100 merchants first)." },
                  { q: "Are you cannibalizing margin?", a: "We optimize incremental behavior, not blanket discounts." },
                  { q: "Race to the bottom?", a: "Controlled earn rates + visibility logic prevent bidding wars." },
                  { q: "Zero commission vs high margins?", a: "Zero payment commission. Margins come from loyalty services, not transactions." },
                ].map((faq, idx) => (
                  <FAQItem key={`merchant-${idx}`} question={faq.q} answer={faq.a} index={idx} />
                ))}
              </div>
            </div>

            {/* Category: Unit Economics & Finance */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-[#c9a227] mb-6 flex items-center gap-2">
                <span className="text-2xl">💰</span> Unit Economics & Finance
              </h3>
              <div className="space-y-1">
                {[
                  { q: "What if users transact less?", a: "Then revenue per user drops — which is why we focus on daily spend categories, not assumptions." },
                  { q: "Low CAC assumption?", a: "Because we leverage: Merchant-led acquisition, on-premise discovery, and partnerships. Not paid ads alone." },
                  { q: "Why $10M cap?", a: "Cap reflects: Platform ambition, infrastructure positioning, and strategic acquisition optionality. Not current revenue." },
                  { q: "What if $500k isn't enough?", a: "Then we pivot scope, not burn. The goal is proof, not scale." },
                  { q: "Monthly burn?", a: "Kept intentionally lean (<$40k/month early)." },
                  { q: "Is 10k users enough?", a: "Yes — if repeat usage exists. Quality > quantity." },
                  { q: "Regulatory costs?", a: "We avoid stored value regulation by design. Legal budget is included." },
                  { q: "CCD downside protection?", a: "Discount + valuation floor + pro-rata rights." },
                  { q: "Ads annoying users?", a: "Ads are optional, contextual, and merchant-funded. Not banner spam." },
                  { q: "VAT impact?", a: "VAT is applied on merchant invoices, not user rewards." },
                ].map((faq, idx) => (
                  <FAQItem key={`finance-${idx}`} question={faq.q} answer={faq.a} index={idx} />
                ))}
              </div>
            </div>

            {/* Category: Team & Execution */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-purple-400 mb-6 flex items-center gap-2">
                <span className="text-2xl">👤</span> Team & Execution
              </h3>
              <div className="space-y-1">
                {[
                  { q: "Solo founder risk?", a: "Acknowledged. That's why governance, vesting, and advisors are prioritized early." },
                  { q: "Who wrote the code?", a: "Core logic in-house. Non-critical components can be outsourced initially." },
                  { q: "Who manages finances?", a: "External accountant + structured reporting from day one." },
                  { q: "Hiring with $50k?", a: "Initial team is lean. Senior hires come post-validation." },
                  { q: "Bad leaver clause?", a: "Yes — aligned with investor protection." },
                  { q: "Local merchant access?", a: "Initial pilots leverage personal and warm network introductions." },
                  { q: "Plan B if Smart Pay fails?", a: "Nuqta becomes merchant loyalty infrastructure first. Intelligence deepens later." },
                  { q: "Advisors missing?", a: "Being finalized — intentionally not announced prematurely." },
                  { q: "Founder salary?", a: "Minimal, survival-level only. Founder risk is aligned with investor risk." },
                  { q: "Why you?", a: "Because this requires systems thinking, not hype, patience over blitzscale, and credibility over noise. Nuqta is built deliberately — that's the edge." },
                ].map((faq, idx) => (
                  <FAQItem key={`team-${idx}`} question={faq.q} answer={faq.a} index={idx} />
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <AnimatedSection>
              <div className="text-center mt-12 p-8 bg-[#1a2a42]/50 rounded-2xl border border-[#2a3a52]">
                <p className="text-gray-400 mb-4">Have more questions?</p>
                <a
                  href="mailto:rejaul@nuqtaapp.com?subject=Investor%20Question"
                  className="inline-flex items-center gap-2 text-[#c9a227] hover:text-[#f4d35e] font-medium transition-colors"
                >
                  Contact the Founder Directly →
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="early-access" className="section-padding bg-[#0d1c30] relative overflow-hidden">
          <FloatingParticles />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Every payment starts with a <span className="gradient-text animate-shimmer">point</span>.
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="text-xl text-gray-400 mb-10">
                Join the future of rewards and payments in the GCC.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
                <a href="#" className="btn-primary text-lg group relative overflow-hidden">
                  <span className="relative z-10">Get Early Access</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f4d35e] to-[#c9a227] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                <button onClick={() => setIsDeckOpen(true)} className="btn-secondary text-lg hover:border-[#c9a227] transition-colors">
                  View Pitch Deck
                </button>
                <a href="/memo" className="btn-secondary text-lg hover:border-[#c9a227] transition-colors">
                  Investor Memo
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#2a3a52] py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2 group cursor-pointer">
                <div className="w-10 h-10 relative transition-transform duration-300 group-hover:scale-110">
                  <Image src="/nuqta-logo.png" alt="Nuqta" fill className="object-contain" />
                </div>
                <span className="text-xl font-bold group-hover:text-[#c9a227] transition-colors">Nuqta</span>
              </div>
              <div className="flex gap-5 text-gray-400 text-sm flex-wrap justify-center">
                <a href="/memo" className="hover:text-[#c9a227] transition-colors relative group">
                  Memo
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c9a227] transition-all duration-300 group-hover:w-full" />
                </a>
                <a href="/data-room" className="hover:text-[#c9a227] transition-colors relative group">
                  Data Room
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c9a227] transition-all duration-300 group-hover:w-full" />
                </a>
                <a href="/terms" className="hover:text-[#c9a227] transition-colors relative group">
                  Terms
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c9a227] transition-all duration-300 group-hover:w-full" />
                </a>
                <a href="/commitment" className="hover:text-[#c9a227] transition-colors relative group">
                  Commitment
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c9a227] transition-all duration-300 group-hover:w-full" />
                </a>
                <a href="mailto:rejaul@nuqtaapp.com" className="hover:text-[#c9a227] transition-colors relative group">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c9a227] transition-all duration-300 group-hover:w-full" />
                </a>
              </div>
              <p className="text-gray-500 text-sm">
                &copy; 2024 Nuqta. Built for the GCC.
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
      `}</style>
    </PasswordProtection>
  );
}
