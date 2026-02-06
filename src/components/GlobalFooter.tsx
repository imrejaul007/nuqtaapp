'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronUp,
  ChevronDown,
  FileText,
  Presentation,
  TrendingUp,
  Map,
  Users,
  Building2,
  Target,
  Calendar,
  DollarSign,
  Rocket,
  Briefcase,
  Database,
  CreditCard,
  FileCheck,
  Home,
  Menu,
  X,
  Store,
  BookOpen,
  Coins,
  Settings,
  Scale,
  Heart,
  CheckSquare,
  Shield,
  Play,
  Handshake,
  Crown,
  Calculator,
  Mail,
  Swords,
  Megaphone,
  UserCircle,
  Bot,
  AlertTriangle,
  Smartphone,
  MessageSquare
} from 'lucide-react';

/**
 * GLOBAL FOOTER NAVIGATION
 *
 * Comprehensive footer with access to all pages and docs
 * Brand colors: #c9a227 (gold), #0a1628 (dark blue)
 */

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  description?: string;
}

interface NavCategory {
  title: string;
  items: NavItem[];
}

const navigationData: NavCategory[] = [
  {
    title: 'Investors',
    items: [
      { label: '90-Second Pitch', href: '/deck-90', icon: Rocket, description: 'Quick investor pitch' },
      { label: 'Full Deck', href: '/deck-kang', icon: Presentation, description: 'Comprehensive pitch' },
      { label: 'Final Deck', href: '/deck-final', icon: Presentation, description: 'Final pitch version' },
      { label: 'New Deck', href: '/deck-new', icon: Presentation, description: 'Latest deck' },
      { label: 'Investment Memo', href: '/memo', icon: Briefcase, description: 'Investor memo' },
      { label: 'Data Room', href: '/data-room', icon: Database, description: 'Due diligence docs' },
      { label: 'Financial Projections', href: '/financialprojection', icon: DollarSign, description: 'Forecasts' },
      { label: 'Financial Models', href: '/financial-models', icon: Calculator, description: 'P&L & unit economics' },
      { label: 'Investor Outreach', href: '/investor-outreach', icon: Mail, description: 'Target list & templates' },
      { label: 'Investor FAQ', href: '/investor-faq', icon: FileText, description: 'Common questions' },
      { label: 'Commitment', href: '/commitment', icon: FileCheck, description: 'Investment terms' },
      { label: 'Funding Documents', href: '/funding-docs', icon: Briefcase, description: 'Cap table, SAFE, LOIs' },
    ]
  },
  {
    title: 'Strategy',
    items: [
      { label: 'Master Roadmap', href: '/master-roadmap', icon: Map, description: 'Product roadmap' },
      { label: 'GTM Strategy', href: '/gtm', icon: TrendingUp, description: 'Go-to-market' },
      { label: 'Competitor Analysis', href: '/competitor-analysis', icon: Swords, description: 'Threats & defense' },
      { label: 'Execution Plan', href: '/execution-plan', icon: Target, description: 'Implementation' },
      { label: 'H1 GTM', href: '/h1-gtm', icon: Target, description: 'Horizon 1' },
      { label: 'H2 GTM', href: '/h2-gtm', icon: Target, description: 'Horizon 2 GTM' },
      { label: 'H2 Strategy', href: '/h2-strategy', icon: TrendingUp, description: 'Horizon 2' },
      { label: 'H3 GTM', href: '/h3-gtm', icon: Target, description: 'Horizon 3 GTM' },
      { label: 'H3 Infrastructure', href: '/h3-infrastructure', icon: Building2, description: 'Horizon 3' },
      { label: 'Phase 2', href: '/phase-2', icon: Calendar, description: 'Phase 2 plan' },
      { label: 'Phase 2 GTM', href: '/phase-2-gtm', icon: Calendar, description: 'Phase 2 GTM' },
      { label: 'Phase 3', href: '/phase-3', icon: Calendar, description: 'Phase 3 plan' },
      { label: 'Phase 3 GTM', href: '/phase-3-gtm', icon: Calendar, description: 'Phase 3 GTM' },
    ]
  },
  {
    title: 'Merchants',
    items: [
      { label: 'All 3 Engines', href: '/merchant-engines', icon: Settings, description: 'Engine overview' },
      { label: 'Packages & Pricing', href: '/merchant-packages', icon: CreditCard, description: 'Pricing plans' },
      { label: 'Partnership Tiers', href: '/partnership-tiers', icon: TrendingUp, description: 'Tier comparison' },
      { label: 'Engine A (High-Margin)', href: '/deck-merchant', icon: Store, description: 'Cafes, salons' },
      { label: 'Engine B (Low-Margin)', href: '/deck-merchant-b', icon: Building2, description: 'Electronics, grocery' },
      { label: 'Business Playbook', href: '/business-playbook', icon: FileText, description: 'Execution guide' },
      { label: 'Sales Kit', href: '/sales-kit', icon: Briefcase, description: 'Scripts & objections' },
      { label: 'Merchant Playbook', href: '/merchant-playbook', icon: Target, description: 'Full operations guide' },
      { label: 'Merchant Database', href: '/merchant-database', icon: Database, description: 'All merchants' },
      { label: 'Merchant Card', href: '/merchant-card', icon: CreditCard, description: 'Merchant benefits' },
      { label: 'Merchant Info', href: '/merchant-info', icon: FileText, description: 'Merchant details' },
      { label: 'SOPs', href: '/sop', icon: CheckSquare, description: 'Standard procedures' },
      { label: 'Merchant Onboarding', href: '/merchant-onboarding', icon: Users, description: 'Onboarding flow' },
    ]
  },
  {
    title: 'Industry Decks',
    items: [
      { label: 'Cafes & Restaurants', href: '/deck-cafe', icon: Store, description: 'F&B pitch' },
      { label: 'Salons & Spas', href: '/deck-salon', icon: Users, description: 'Beauty pitch' },
      { label: 'Supermarkets', href: '/deck-supermarket', icon: Building2, description: 'Grocery pitch' },
      { label: 'Gold & Jewelry', href: '/deck-gold', icon: DollarSign, description: 'Jewelry pitch' },
      { label: 'Universities', href: '/deck-university', icon: BookOpen, description: 'Student pitch' },
      { label: 'Corporate', href: '/deck-corporate', icon: Briefcase, description: 'Employee rewards' },
    ]
  },
  {
    title: 'Events & Partnerships',
    items: [
      { label: 'Global Village Deck', href: '/deck-gv', icon: Building2, description: 'GV partnership' },
      { label: 'GV Playbook', href: '/gv-playbook', icon: Target, description: 'GV sales guide' },
      { label: 'GV Merchants', href: '/gv-merchants', icon: Store, description: 'GV merchant list' },
      { label: 'Exhibition Deck', href: '/deck-exhibition', icon: Calendar, description: 'Event pitch' },
      { label: 'Exhibition Merchants', href: '/exhibition-merchants', icon: Store, description: 'Event merchants' },
      { label: 'Co-Partner Program', href: '/co-partner', icon: Handshake, description: 'Brand partnership' },
      { label: 'Partnership Playbook', href: '/partnerships', icon: Handshake, description: '8 partnership types' },
    ]
  },
  {
    title: 'Marketing Hub',
    items: [
      { label: '⭐ Marketing Hub', href: '/marketing-hub', icon: Megaphone, description: 'START HERE - All resources' },
      { label: 'CMO Playbook', href: '/cmo-playbook', icon: Crown, description: '90-day master plan' },
      { label: 'Brand Voice Guide', href: '/brand-voice', icon: MessageSquare, description: 'Tone & messaging' },
      { label: 'Customer Journeys', href: '/customer-journeys', icon: Map, description: '6 persona maps' },
    ]
  },
  {
    title: 'Launch & Execution',
    items: [
      { label: '14-Day Launch Sprint', href: '/launch-sprint', icon: Rocket, description: 'Day-by-day plan' },
      { label: 'Execution Guide', href: '/marketing-execution', icon: CheckSquare, description: 'Step-by-step' },
      { label: 'PR Launch Plan', href: '/pr-launch', icon: Megaphone, description: 'Media strategy' },
      { label: 'First 100 Users', href: '/user-acquisition', icon: Users, description: 'User acquisition' },
      { label: 'First 10 Merchants', href: '/merchant-acquisition', icon: Store, description: 'Merchant sales' },
    ]
  },
  {
    title: 'Content & Templates',
    items: [
      { label: 'Content Strategy', href: '/content-strategy', icon: TrendingUp, description: '18-month plan' },
      { label: 'Content Calendar', href: '/content-calendar', icon: Calendar, description: '30-day schedule' },
      { label: 'Email Templates', href: '/email-templates', icon: Mail, description: '20+ templates' },
      { label: 'SMS Templates', href: '/sms-templates', icon: MessageSquare, description: '25+ templates' },
      { label: 'App Store Copy', href: '/app-store-copy', icon: Smartphone, description: 'iOS & Android' },
      { label: 'Explainer Video', href: '/explainer-video', icon: Play, description: 'Video scripts' },
    ]
  },
  {
    title: 'Campaigns',
    items: [
      { label: 'Seasonal Campaigns', href: '/seasonal-campaigns', icon: Calendar, description: '12 UAE campaigns' },
      { label: 'Big Win Campaigns', href: '/big-win-campaigns', icon: Target, description: 'Car, iPhone prizes' },
      { label: 'UGC Campaigns', href: '/ugc-campaigns', icon: Play, description: 'Video challenges' },
      { label: 'Merchant Campaigns', href: '/merchant-campaigns', icon: Store, description: 'Acquisition campaigns' },
      { label: 'Gamification', href: '/gamification', icon: Target, description: 'Tiers & badges' },
    ]
  },
  {
    title: 'Channels & Media',
    items: [
      { label: 'Media Hub', href: '/media-hub', icon: Play, description: 'Influencer strategy' },
      { label: 'Influencer List', href: '/influencer-list', icon: Users, description: 'UAE influencers' },
      { label: 'Press Kit', href: '/press-kit', icon: FileText, description: 'Media assets' },
      { label: 'Niche Content', href: '/niche-content', icon: Target, description: 'Category accounts' },
      { label: 'Media Properties', href: '/media-properties', icon: Play, description: 'Podcasts & IP' },
      { label: 'Agency Pages', href: '/agency-pages', icon: Store, description: 'Landing pages' },
    ]
  },
  {
    title: 'Legal & Compliance',
    items: [
      { label: 'Legal Documents', href: '/legal-docs', icon: Scale, description: 'Contracts & templates' },
      { label: 'Licensing', href: '/licensing', icon: Shield, description: 'UAE compliance' },
      { label: 'Contracts', href: '/contracts', icon: FileText, description: 'MoU templates' },
      { label: 'Policies', href: '/policies', icon: Scale, description: 'Employee handbook' },
      { label: 'Terms', href: '/terms', icon: FileText, description: 'Terms of service' },
      { label: 'Crisis Communication', href: '/crisis-communication', icon: AlertTriangle, description: 'Crisis playbook' },
    ]
  },
  {
    title: 'Agent Reports',
    items: [
      { label: 'C-Suite Operations', href: '/c-suite-operations', icon: Settings, description: 'Operating manuals & MoM' },
      { label: 'CEO Master Plan', href: '/ceo-master-plan', icon: Crown, description: 'Execution playbook' },
      { label: 'Issue Resolution', href: '/issue-resolution', icon: AlertTriangle, description: 'Solve all issues' },
      { label: 'CEO Report', href: '/ceo-report', icon: Crown, description: 'Vision & strategy' },
      { label: 'COO Report', href: '/coo-report', icon: Settings, description: 'Operations' },
      { label: 'CMO Report', href: '/cmo-report', icon: Megaphone, description: 'Marketing' },
      { label: 'CHRO Report', href: '/chro-report', icon: UserCircle, description: 'People' },
      { label: 'CFO Report', href: '/cfo-report', icon: Calculator, description: 'Finance' },
    ]
  },
  {
    title: 'Product',
    items: [
      { label: 'Nuqta Card', href: '/card', icon: CreditCard, description: 'User card' },
      { label: 'User Journey', href: '/user-journey', icon: Map, description: 'Onboarding flow' },
      { label: 'Dashboard Preview', href: '/dashboard-preview', icon: Settings, description: 'UI designs' },
      { label: 'Landing Page V1', href: '/landing-v1', icon: Home, description: 'Website v1' },
      { label: 'Analytics Dashboard', href: '/analytics-dashboard', icon: TrendingUp, description: 'KPI specs' },
    ]
  },
  {
    title: 'Company',
    items: [
      { label: 'Home', href: '/', icon: Home, description: 'Landing page' },
      { label: 'Executive Team', href: '/executive-team', icon: Crown, description: 'C-Suite analysis' },
      { label: 'C-Suite Strategy', href: '/c-suite-strategy', icon: Target, description: 'Strategic plan' },
      { label: 'Executive Issues', href: '/executive-issues', icon: Target, description: 'Critical analysis' },
      { label: 'Team', href: '/team', icon: Users, description: 'Our team' },
      { label: 'Join Us', href: '/join-us', icon: Users, description: 'CTO recruitment' },
      { label: 'Operations', href: '/operations', icon: Settings, description: 'Operations manual' },
      { label: 'Support Templates', href: '/support-templates', icon: Mail, description: 'Response templates' },
      { label: 'Merchant Pipeline', href: '/merchant-pipeline', icon: Target, description: 'First 10 merchants' },
      { label: 'QR Design Specs', href: '/qr-design-specs', icon: FileText, description: 'Print materials' },
      { label: 'Launch Readiness', href: '/launch-readiness', icon: Rocket, description: 'Gap analysis' },
      { label: 'ESOP', href: '/esop', icon: Coins, description: 'Equity options' },
      { label: 'Task List', href: '/tasks', icon: CheckSquare, description: 'Project tracker' },
    ]
  }
];

const GlobalFooter = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 max-h-[80vh] overflow-y-auto bg-[#0a1628] border-t-2 border-[#c9a227]/30 rounded-t-3xl">
            {/* Mobile Menu Header */}
            <div className="sticky top-0 bg-[#0a1628] border-b border-white/10 p-4 flex items-center justify-between">
              <h2 className="text-[#c9a227] font-bold text-lg">Navigation</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20"
              >
                <X size={20} className="text-white" />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="p-4 space-y-6">
              {navigationData.map((category, catIdx) => (
                <div key={catIdx}>
                  <h3 className="text-[#c9a227] text-xs font-bold uppercase tracking-wider mb-3">{category.title}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {category.items.map((item, itemIdx) => (
                      <Link
                        key={itemIdx}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-2 p-3 rounded-xl transition-all ${
                          isActive(item.href)
                            ? 'bg-[#c9a227]/20 text-[#c9a227] border border-[#c9a227]/30'
                            : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-transparent'
                        }`}
                      >
                        <item.icon size={16} className="flex-shrink-0" />
                        <span className="text-xs font-medium truncate">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Brand Bar */}
            <div className="sticky bottom-0 bg-[#0a1628] border-t border-white/10 p-4">
              <div className="flex items-center justify-between">
                <p className="text-[#c9a227] text-sm font-bold tracking-wider">NUQTA</p>
                <p className="text-slate-500 text-xs">The Everyday Savings Platform</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-[#0a1628]/95 backdrop-blur-2xl border-t-2 border-[#c9a227]/30">

          {/* Expanded Navigation - Desktop */}
          {isExpanded && (
            <div className="hidden md:block border-b border-white/10 max-h-[60vh] overflow-y-auto">
              <div className="max-w-7xl mx-auto px-6 py-6">
                <div className="grid grid-cols-4 lg:grid-cols-7 gap-6">
                  {navigationData.map((category, catIdx) => (
                    <div key={catIdx}>
                      <h3 className="text-[#c9a227] text-xs font-bold uppercase tracking-wider mb-3">{category.title}</h3>
                      <ul className="space-y-1">
                        {category.items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <Link
                              href={item.href}
                              className={`flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm transition-all ${
                                isActive(item.href)
                                  ? 'bg-[#c9a227]/20 text-[#c9a227]'
                                  : 'text-slate-400 hover:text-white hover:bg-white/5'
                              }`}
                            >
                              <item.icon size={14} className="flex-shrink-0" />
                              <span className="truncate">{item.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Quick Links Bar - Desktop */}
          <div className="hidden md:block border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-2">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'Tasks', href: '/tasks' },
                  { label: '⭐ Marketing Hub', href: '/marketing-hub' },
                  { label: '90s Deck', href: '/deck-90' },
                  { label: 'Full Deck', href: '/deck-kang' },
                  { label: 'GV Deck', href: '/deck-gv' },
                  { label: 'Roadmap', href: '/master-roadmap' },
                  { label: 'GTM', href: '/gtm' },
                  { label: 'Financials', href: '/financialprojection' },
                  { label: 'Data Room', href: '/data-room' },
                  { label: 'Merchants', href: '/merchant-database' },
                  { label: 'Operations', href: '/operations' },
                  { label: 'SOPs', href: '/sop' },
                ].map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                      isActive(link.href)
                        ? 'bg-[#c9a227] text-[#0a1628]'
                        : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Main Footer Bar */}
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              {/* Left: Brand + Expand Button (Desktop) */}
              <div className="flex items-center gap-4">
                <Link href="/" className="text-[#c9a227] text-lg font-black tracking-wider hover:opacity-80 transition-opacity">
                  NUQTA
                </Link>

                {/* Desktop Expand Button */}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
                >
                  <span className="text-xs font-medium">{isExpanded ? 'Less' : 'All Pages'}</span>
                  {isExpanded ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
                </button>
              </div>

              {/* Center: Current Page Indicator */}
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full">
                <div className="w-2 h-2 rounded-full bg-[#c9a227] animate-pulse" />
                <p className="text-slate-400 text-xs">
                  {pathname === '/' ? 'Home' : pathname.replace('/', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </p>
              </div>

              {/* Right: Actions */}
              <div className="flex items-center gap-3">
                {/* Quick Nav - Desktop */}
                <div className="hidden lg:flex items-center gap-2">
                  <Link
                    href="/deck-90"
                    className={`p-2 rounded-full transition-all ${
                      isActive('/deck-90') ? 'bg-[#c9a227] text-[#0a1628]' : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                    }`}
                    title="90-Second Deck"
                  >
                    <Rocket size={18} />
                  </Link>
                  <Link
                    href="/deck-kang"
                    className={`p-2 rounded-full transition-all ${
                      isActive('/deck-kang') ? 'bg-[#c9a227] text-[#0a1628]' : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                    }`}
                    title="Full Deck"
                  >
                    <Presentation size={18} />
                  </Link>
                  <Link
                    href="/deck-gv"
                    className={`p-2 rounded-full transition-all ${
                      isActive('/deck-gv') ? 'bg-[#c9a227] text-[#0a1628]' : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                    }`}
                    title="GV Partnership Deck"
                  >
                    <Building2 size={18} />
                  </Link>
                  <Link
                    href="/deck-exhibition"
                    className={`p-2 rounded-full transition-all ${
                      isActive('/deck-exhibition') ? 'bg-[#c9a227] text-[#0a1628]' : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                    }`}
                    title="Exhibition Deck"
                  >
                    <Calendar size={18} />
                  </Link>
                  <Link
                    href="/data-room"
                    className={`p-2 rounded-full transition-all ${
                      isActive('/data-room') ? 'bg-[#c9a227] text-[#0a1628]' : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                    }`}
                    title="Data Room"
                  >
                    <Database size={18} />
                  </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="md:hidden p-2 rounded-full bg-gradient-to-r from-[#c9a227] to-[#d4b03f] text-white shadow-lg"
                >
                  <Menu size={20} />
                </button>

                {/* Year Badge */}
                <div className="hidden sm:block px-3 py-1 bg-white/5 rounded-full">
                  <p className="text-slate-500 text-xs">2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Spacer to prevent content from being hidden behind footer */}
      <div className="h-24 md:h-28" />

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default GlobalFooter;
