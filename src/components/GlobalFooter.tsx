'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Presentation,
  TrendingUp,
  Store,
  Megaphone,
  Crown,
  Handshake,
  Database,
  Mail,
  FileText,
  Rocket,
  DollarSign,
  Target,
  BookOpen,
  Coffee,
  Scissors,
  ShoppingCart,
  Gem,
  Building2,
  Users,
  Settings,
  Scale,
  Heart,
  BarChart3,
  Calendar,
  ExternalLink,
  Layers
} from 'lucide-react';

/**
 * GLOBAL FOOTER NAVIGATION - Simplified & Organized
 * Works with GlobalHeader for complete navigation coverage
 */

interface FooterLink {
  label: string;
  href: string;
  icon: React.ElementType;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: 'Investors',
    links: [
      { label: '90-Second Pitch', href: '/deck-90', icon: Rocket },
      { label: 'Full Deck', href: '/deck-kang', icon: Presentation },
      { label: 'Data Room', href: '/data-room', icon: Database },
      { label: 'Financial Models', href: '/financial-models', icon: DollarSign },
      { label: 'Investor FAQ', href: '/investor-faq', icon: FileText },
    ]
  },
  {
    title: 'Strategy & GTM',
    links: [
      { label: 'Master Roadmap', href: '/master-roadmap', icon: Target },
      { label: 'GTM Strategy', href: '/gtm', icon: TrendingUp },
      { label: 'Competitor Analysis', href: '/competitor-analysis', icon: BarChart3 },
      { label: 'Execution Plan', href: '/execution-plan', icon: Calendar },
    ]
  },
  {
    title: 'Merchants',
    links: [
      { label: 'Merchant Engines', href: '/merchant-engines', icon: Settings },
      { label: 'Packages & Pricing', href: '/merchant-packages', icon: Store },
      { label: 'Merchant Playbook', href: '/merchant-playbook', icon: BookOpen },
      { label: 'Sales Kit', href: '/sales-kit', icon: Target },
      { label: 'SOPs', href: '/sop', icon: FileText },
    ]
  },
  {
    title: 'Industries',
    links: [
      { label: 'Cafe & Restaurant', href: '/playbook-cafe', icon: Coffee },
      { label: 'Salon & Spa', href: '/playbook-salon', icon: Scissors },
      { label: 'Supermarket', href: '/playbook-supermarket', icon: ShoppingCart },
      { label: 'Gold & Jewelry', href: '/playbook-gold', icon: Gem },
    ]
  },
  {
    title: 'Marketing',
    links: [
      { label: 'Marketing Hub', href: '/marketing-hub', icon: Megaphone },
      { label: 'CMO Playbook', href: '/cmo-playbook', icon: BookOpen },
      { label: 'Campaigns', href: '/seasonal-campaigns', icon: Calendar },
      { label: 'Influencer List', href: '/influencer-list', icon: Users },
    ]
  },
  {
    title: 'Partnerships',
    links: [
      { label: 'Partnership Playbook', href: '/partnerships', icon: Handshake },
      { label: '4-Level Framework', href: '/partnership-framework', icon: Layers },
      { label: 'Co-Partner Program', href: '/co-partner', icon: Users },
      { label: 'Global Village', href: '/deck-gv', icon: Building2 },
    ]
  },
  {
    title: 'C-Suite & Team',
    links: [
      { label: '3-Year Plan', href: '/3-year-plan', icon: Target },
      { label: 'Executive Team', href: '/executive-team', icon: Crown },
      { label: 'Issue Resolution', href: '/issue-resolution', icon: Target },
      { label: 'Team & Roles', href: '/team', icon: Users },
    ]
  },
  {
    title: 'Legal & Company',
    links: [
      { label: 'Contracts', href: '/contracts', icon: FileText },
      { label: 'Policies', href: '/policies', icon: Scale },
      { label: 'Operations', href: '/operations', icon: Settings },
      { label: 'Contact', href: '/join-us', icon: Mail },
    ]
  },
];

const quickLinks = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Pitch Deck', href: '/deck-90', icon: Rocket },
  { label: 'Data Room', href: '/data-room', icon: Database },
  { label: 'GTM', href: '/gtm', icon: TrendingUp },
  { label: 'Merchants', href: '/merchant-engines', icon: Store },
  { label: 'Marketing', href: '/marketing-hub', icon: Megaphone },
  { label: 'Partnerships', href: '/partnerships', icon: Handshake },
  { label: 'C-Suite', href: '/executive-team', icon: Crown },
];

const GlobalFooter = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <footer className="bg-[#0a1628] border-t border-[#c9a227]/30">
      {/* Quick Links Bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            <span className="text-slate-500 text-xs font-medium whitespace-nowrap">Quick:</span>
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  isActive(link.href)
                    ? 'bg-[#c9a227] text-black'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                <link.icon size={12} />
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-[#c9a227] text-xs font-bold uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`flex items-center gap-2 text-sm transition-all ${
                        isActive(link.href)
                          ? 'text-[#c9a227]'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <link.icon size={14} />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo & Copyright */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c9a227] to-[#e8c547] flex items-center justify-center">
                <span className="text-black font-black text-sm">N</span>
              </div>
              <div>
                <p className="text-white font-bold">Nuqta</p>
                <p className="text-slate-500 text-xs">Dubai&apos;s Rewards Revolution</p>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm">
              <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/policies" className="text-slate-400 hover:text-white transition-colors">
                Privacy
              </Link>
              <a
                href="mailto:hello@nuqtaapp.com"
                className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
              >
                <Mail size={14} />
                Contact
              </a>
            </div>

            {/* Year & Credit */}
            <div className="flex items-center gap-2 text-slate-500 text-xs">
              <span>© 2026 Nuqta</span>
              <span>•</span>
              <span>Made in Dubai</span>
            </div>
          </div>
        </div>
      </div>

      {/* Current Page Indicator (Floating) */}
      <div className="fixed bottom-4 left-4 z-50 hidden lg:flex items-center gap-2 bg-[#0a1628]/90 backdrop-blur border border-[#c9a227]/30 rounded-full px-3 py-2">
        <div className="w-2 h-2 rounded-full bg-[#c9a227] animate-pulse" />
        <span className="text-slate-400 text-xs">Page:</span>
        <span className="text-white text-xs font-medium">
          {pathname === '/' ? 'Home' : pathname.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
        </span>
      </div>
    </footer>
  );
};

export default GlobalFooter;
