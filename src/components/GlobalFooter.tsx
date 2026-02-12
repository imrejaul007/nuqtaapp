'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home, Presentation, TrendingUp, Store, Megaphone, Crown, Handshake,
  Database, Mail, FileText, Rocket, DollarSign, Target, BookOpen, Coffee,
  Scissors, ShoppingCart, Gem, Building2, Users, Settings, Scale, Heart,
  BarChart3, Calendar, Layers, Briefcase, Map, Dumbbell, MessageSquare,
  CheckSquare, CreditCard, Bot, AlertTriangle, Search, X, Calculator,
  LineChart, Smartphone, Tv, Shirt, Pill, Gamepad2, ClipboardList, Globe,
  UserPlus, Award, Wallet, QrCode, Headphones, Share2, Sparkles, Beaker,
  RefreshCw, Zap, Brain, Filter, Eye, MapPin, HelpCircle, Play, Shield,
  Stethoscope, Landmark, GraduationCap, MessageCircle, Wheat
} from 'lucide-react';

/**
 * GLOBAL FOOTER - Complete Navigation Hub
 * Reorganized: 13 categories, balanced columns, proper grouping
 */

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

interface NavCategory {
  title: string;
  icon: React.ElementType;
  color: string;
  items: NavItem[];
}

// ─── Navigation Data (13 categories, properly organized) ────────────
const navigationData: NavCategory[] = [
  {
    title: 'Investors',
    icon: Briefcase,
    color: 'text-blue-400',
    items: [
      { label: '90-Second Pitch', href: '/deck-90', icon: Rocket },
      { label: 'Full Pitch Deck', href: '/deck-kang', icon: Presentation },
      { label: 'All Decks', href: '/deck', icon: Presentation },
      { label: 'Data Room', href: '/data-room', icon: Database },
      { label: 'Financial Models', href: '/financial-models', icon: Calculator },
      { label: 'Financial Projection', href: '/financialprojection', icon: LineChart },
      { label: 'Investor Outreach', href: '/investor-outreach', icon: Mail },
      { label: 'Investor FAQ', href: '/investor-faq', icon: FileText },
      { label: 'VC Investment Memo', href: '/vc-investment-memo', icon: Briefcase },
      { label: 'Funding Documents', href: '/funding-docs', icon: Briefcase },
    ]
  },
  {
    title: 'Strategy',
    icon: Target,
    color: 'text-purple-400',
    items: [
      { label: 'Complete Roadmap', href: '/complete-roadmap', icon: Map },
      { label: 'Master Roadmap', href: '/master-roadmap', icon: Map },
      { label: '3-Year Plan', href: '/3-year-plan', icon: Target },
      { label: 'GTM Strategy', href: '/gtm', icon: TrendingUp },
      { label: 'Competitor Analysis', href: '/competitor-analysis', icon: BarChart3 },
      { label: 'Execution Plan', href: '/execution-plan', icon: Target },
      { label: 'H1 GTM', href: '/h1-gtm', icon: Rocket },
      { label: 'H2 GTM', href: '/h2-gtm', icon: TrendingUp },
      { label: 'H3 GTM', href: '/h3-gtm', icon: TrendingUp },
      { label: 'Phase 2 GTM', href: '/phase-2-gtm', icon: Calendar },
      { label: 'Phase 3 GTM', href: '/phase-3-gtm', icon: Calendar },
      { label: 'KPI Tracking', href: '/kpi-tracking', icon: BarChart3 },
    ]
  },
  {
    title: 'User Apps',
    icon: Smartphone,
    color: 'text-emerald-400',
    items: [
      { label: 'Nuqta', href: '/nuqta', icon: Crown },
      { label: 'Nuqta+', href: '/nuqta-plus', icon: Sparkles },
      { label: 'NuqtaPay', href: '/nuqtapay', icon: CreditCard },
      { label: 'Qist', href: '/qist', icon: Wallet },
      { label: 'Hawil', href: '/hawil', icon: DollarSign },
      { label: 'Wasil', href: '/wasil', icon: ShoppingCart },
      { label: 'Safar', href: '/safar', icon: Globe },
      { label: 'Rakab', href: '/rakab', icon: MapPin },
      { label: 'Sakin', href: '/sakin', icon: Building2 },
      { label: 'Ajer', href: '/ajer', icon: Layers },
      { label: 'Fakhir', href: '/fakhir', icon: Gem },
      { label: 'Tabib', href: '/tabib', icon: Stethoscope },
      { label: 'Majlis', href: '/majlis', icon: MessageCircle },
    ]
  },
  {
    title: 'Business Tools',
    icon: Store,
    color: 'text-blue-400',
    items: [
      { label: 'BizOne', href: '/bizone', icon: Store },
      { label: 'Rabtul', href: '/rabtul', icon: Settings },
      { label: 'Adzy', href: '/adzy', icon: Megaphone },
      { label: 'Amana', href: '/amana', icon: Shield },
      { label: 'Tawzeef', href: '/tawzeef', icon: Users },
      { label: 'Daman', href: '/daman', icon: Heart },
      { label: 'Khedma', href: '/khedma', icon: Landmark },
      { label: 'Tadreeb', href: '/tadreeb', icon: GraduationCap },
      { label: 'Inventora', href: '/inventora', icon: Database },
      { label: 'Mazra', href: '/mazra', icon: Wheat },
      { label: 'Aqar', href: '/aqar', icon: Home },
      { label: 'NextaBizz', href: '/nextabizz', icon: Briefcase },
      { label: 'Eventora', href: '/eventora', icon: Calendar },
    ]
  },
  {
    title: 'Merchants',
    icon: Store,
    color: 'text-green-400',
    items: [
      { label: 'All 3 Engines', href: '/merchant-engines', icon: Settings },
      { label: 'Packages & Pricing', href: '/merchant-packages', icon: CreditCard },
      { label: 'Merchant Playbook', href: '/merchant-playbook', icon: BookOpen },
      { label: 'Merchant Database', href: '/merchant-database', icon: Database },
      { label: 'Merchant Pipeline', href: '/merchant-pipeline', icon: TrendingUp },
      { label: 'Merchant Campaigns', href: '/merchant-campaigns', icon: Megaphone },
      { label: 'Sales Kit', href: '/sales-kit', icon: Briefcase },
      { label: 'SOPs', href: '/sop', icon: CheckSquare },
      { label: 'Onboarding', href: '/merchant-onboarding', icon: Users },
      { label: 'QR Design', href: '/qr-design-specs', icon: QrCode },
      { label: 'Support Templates', href: '/support-templates', icon: Headphones },
    ]
  },
  {
    title: 'Industries',
    icon: Building2,
    color: 'text-amber-400',
    items: [
      { label: 'Cafe & Restaurant', href: '/playbook-cafe', icon: Coffee },
      { label: 'Salon & Spa', href: '/playbook-salon', icon: Scissors },
      { label: 'Supermarket', href: '/playbook-supermarket', icon: ShoppingCart },
      { label: 'Gold & Jewelry', href: '/playbook-gold', icon: Gem },
      { label: 'Gym & Fitness', href: '/playbook-gym', icon: Dumbbell },
      { label: 'Electronics', href: '/playbook-electronics', icon: Smartphone },
      { label: 'Pharmacy', href: '/playbook-pharmacy', icon: Pill },
      { label: 'Fashion', href: '/playbook-fashion', icon: Shirt },
      { label: 'Entertainment', href: '/playbook-entertainment', icon: Gamepad2 },
      { label: 'University', href: '/deck-university', icon: BookOpen },
      { label: 'Corporate', href: '/deck-corporate', icon: Briefcase },
    ]
  },
  {
    title: 'Marketing',
    icon: Megaphone,
    color: 'text-pink-400',
    items: [
      { label: 'Marketing Hub', href: '/marketing-hub', icon: Megaphone },
      { label: 'CMO Playbook', href: '/cmo-playbook', icon: BookOpen },
      { label: 'Marketing Execution', href: '/marketing-execution', icon: Target },
      { label: 'Content Calendar', href: '/content-calendar', icon: Calendar },
      { label: 'Brand Voice', href: '/brand-voice', icon: MessageSquare },
      { label: 'Seasonal Campaigns', href: '/seasonal-campaigns', icon: Calendar },
      { label: 'UGC Campaigns', href: '/ugc-campaigns', icon: Share2 },
      { label: 'Influencer List', href: '/influencer-list', icon: Users },
      { label: 'Ambassador Program', href: '/ambassador-program', icon: Award },
      { label: 'Press Kit', href: '/press-kit', icon: FileText },
      { label: 'Media Hub', href: '/media-hub', icon: Tv },
      { label: 'Analytics', href: '/analytics-dashboard', icon: BarChart3 },
      { label: 'Social Tracker', href: '/social-media-tracker', icon: TrendingUp },
      { label: 'Offline Marketing', href: '/offline-marketing', icon: Map },
    ]
  },
  {
    title: 'Partnerships',
    icon: Handshake,
    color: 'text-cyan-400',
    items: [
      { label: 'Partnership Playbook', href: '/partnerships', icon: Handshake },
      { label: '4-Level Framework', href: '/partnership-framework', icon: Layers },
      { label: 'Partnership Tiers', href: '/partnership-tiers', icon: Award },
      { label: 'Co-Partner Program', href: '/co-partner', icon: Users },
      { label: 'Global Village Deck', href: '/deck-gv', icon: Globe },
      { label: 'GV Playbook', href: '/gv-playbook', icon: BookOpen },
      { label: 'GV Merchants', href: '/gv-merchants', icon: Store },
      { label: 'Exhibition Deck', href: '/deck-exhibition', icon: Presentation },
      { label: 'Exhibition Merchants', href: '/exhibition-merchants', icon: Store },
      { label: 'Event Execution', href: '/event-execution', icon: Calendar },
      { label: '60-Event Master Plan', href: '/event-master-plan', icon: Rocket },
    ]
  },
  {
    title: 'Leadership',
    icon: Crown,
    color: 'text-[#c9a227]',
    items: [
      { label: 'Executive Team', href: '/executive-team', icon: Crown },
      { label: 'Future Ambition', href: '/future-ambition', icon: Globe },
      { label: 'C-Suite Strategy', href: '/c-suite-strategy', icon: Target },
      { label: 'C-Suite Operations', href: '/c-suite-operations', icon: Settings },
      { label: 'CEO Master Plan', href: '/ceo-master-plan', icon: Crown },
      { label: 'Legal & Compliance', href: '/legal-compliance', icon: Scale },
      { label: 'License Preparation', href: '/license-preparation', icon: ClipboardList },
      { label: 'Legal Documents', href: '/legal-documents', icon: FileText },
      { label: 'Issue Resolution', href: '/issue-resolution', icon: AlertTriangle },
      { label: 'CHRO Master Plan', href: '/chro-master-plan', icon: Heart },
    ]
  },
  {
    title: 'AI Agents',
    icon: Bot,
    color: 'text-violet-400',
    items: [
      { label: 'CEO Agent', href: '/ceo-agent', icon: Bot },
      { label: 'CEO Analysis', href: '/ceo-analysis', icon: Crown },
      { label: 'COO Agent', href: '/coo-agent', icon: Bot },
      { label: 'COO Analysis', href: '/coo-analysis', icon: Settings },
      { label: 'CFO Agent', href: '/cfo-agent', icon: Bot },
      { label: 'CFO Analysis', href: '/cfo-analysis', icon: Calculator },
      { label: 'CMO Agent', href: '/cmo-agent', icon: Bot },
      { label: 'CMO Analysis', href: '/cmo-analysis', icon: Megaphone },
      { label: 'CHRO Agent', href: '/chro-agent', icon: Bot },
      { label: 'CHRO Analysis', href: '/chro-analysis', icon: Heart },
    ]
  },
  {
    title: 'Growth',
    icon: Zap,
    color: 'text-lime-400',
    items: [
      { label: 'Marketing War Room', href: '/marketing-war-room', icon: Brain },
      { label: 'Customer Intelligence', href: '/customer-intelligence', icon: Eye },
      { label: 'Revenue Optimization', href: '/revenue-optimization', icon: DollarSign },
      { label: 'Competitive Intel', href: '/competitive-intel', icon: Target },
      { label: 'PMF Scoreboard', href: '/pmf-scoreboard', icon: BarChart3 },
      { label: 'Funnel Optimization', href: '/funnel-optimization', icon: Filter },
      { label: 'Geographic Expansion', href: '/geographic-expansion', icon: MapPin },
      { label: 'Growth Warfare', href: '/growth-warfare', icon: Target },
      { label: 'Viral Growth', href: '/viral-growth', icon: Rocket },
      { label: 'Unit Economics', href: '/unit-economics', icon: Calculator },
      { label: 'Experiments', href: '/growth-experiments', icon: Beaker },
      { label: 'Pricing Strategy', href: '/pricing-strategy', icon: DollarSign },
      { label: 'Win-Back', href: '/win-back', icon: RefreshCw },
    ]
  },
  {
    title: 'RTMN Hub',
    icon: Globe,
    color: 'text-[#c9a227]',
    items: [
      { label: 'RTMN Group', href: '/rtmn-group', icon: Building2 },
      { label: 'RTMN Ecosystem', href: '/rtmn-ecosystem', icon: Layers },
      { label: 'RTMN Dashboard', href: '/rtmn-dashboard', icon: BarChart3 },
      { label: 'Documentation', href: '/documentation', icon: BookOpen },
      { label: 'BizOne OS Spec', href: '/bizone-os', icon: Store },
      { label: 'HQ Admin Spec', href: '/hq-admin', icon: Shield },
      { label: 'Rabtul Core Spec', href: '/rabtul-core', icon: Database },
    ]
  },
  {
    title: 'Launch',
    icon: Rocket,
    color: 'text-orange-400',
    items: [
      { label: 'Launch Readiness', href: '/launch-readiness', icon: CheckSquare },
      { label: 'Launch Sprint', href: '/launch-sprint', icon: Rocket },
      { label: 'PR Launch', href: '/pr-launch', icon: Megaphone },
      { label: 'User Acquisition', href: '/user-acquisition', icon: UserPlus },
      { label: 'Merchant Acquisition', href: '/merchant-acquisition', icon: Store },
      { label: 'User Journey', href: '/user-journey', icon: Map },
      { label: 'Customer Journeys', href: '/customer-journeys', icon: Users },
      { label: 'Gamification', href: '/gamification', icon: Gamepad2 },
      { label: 'Business Playbook', href: '/business-playbook', icon: BookOpen },
    ]
  },
  {
    title: 'Company',
    icon: Building2,
    color: 'text-slate-300',
    items: [
      { label: 'About', href: '/about', icon: Building2 },
      { label: 'Why Nuqta', href: '/why-nuqta', icon: Zap },
      { label: 'Features', href: '/features', icon: Sparkles },
      { label: 'How It Works', href: '/how-it-works', icon: Play },
      { label: 'FAQ', href: '/faq', icon: HelpCircle },
      { label: 'Contact', href: '/contact', icon: Mail },
      { label: 'Team', href: '/team', icon: Users },
      { label: 'Careers', href: '/careers', icon: Briefcase },
      { label: 'Privacy', href: '/privacy', icon: Shield },
      { label: 'Terms', href: '/terms', icon: FileText },
    ]
  },
];

// All searchable pages
const allPages = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Dashboard', href: '/dashboard', icon: BarChart3 },
  ...navigationData.flatMap(cat => cat.items),
];

const quickLinks = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Dashboard', href: '/dashboard', icon: BarChart3 },
  { label: 'Roadmap', href: '/complete-roadmap', icon: Map },
  { label: 'Pitch Deck', href: '/deck-90', icon: Rocket },
  { label: 'Data Room', href: '/data-room', icon: Database },
  { label: 'RTMN Group', href: '/rtmn-group', icon: Globe },
  { label: 'Products', href: '/nuqta', icon: Crown },
  { label: 'GTM', href: '/gtm', icon: TrendingUp },
  { label: 'Merchants', href: '/merchant-engines', icon: Store },
  { label: 'Marketing', href: '/marketing-hub', icon: Megaphone },
  { label: 'C-Suite', href: '/executive-team', icon: Crown },
  { label: 'Launch', href: '/launch-readiness', icon: Rocket },
];

const GlobalFooter = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);

  // Filter pages based on search
  const filteredPages = allPages.filter(page =>
    page.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [searchOpen]);

  // Keyboard shortcut for search (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setSearchQuery('');
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-start justify-center pt-12 sm:pt-20 px-3 sm:px-4">
          <div className="w-full max-w-2xl bg-[#0a1628] border border-[#c9a227]/30 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
            {/* Search Input */}
            <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 sm:py-4 border-b border-white/10">
              <Search className="text-[#c9a227]" size={18} />
              <input
                ref={searchRef}
                type="text"
                placeholder="Search 242+ pages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-white text-base sm:text-lg placeholder:text-slate-500 outline-none"
              />
              <button
                onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                className="text-slate-400 hover:text-white text-xs sm:text-sm flex items-center gap-1"
              >
                <X size={14} />
                <span className="hidden sm:inline">ESC</span>
              </button>
            </div>

            {/* Search Results */}
            <div className="max-h-64 sm:max-h-96 overflow-y-auto py-2">
              {filteredPages.length > 0 ? (
                filteredPages.slice(0, 15).map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                    className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 text-slate-300 hover:bg-[#c9a227]/10 hover:text-white transition-all"
                  >
                    <page.icon size={16} className="text-[#c9a227] flex-shrink-0" />
                    <span className="text-sm sm:text-base truncate">{page.label}</span>
                    <span className="ml-auto text-[10px] sm:text-xs text-slate-500 hidden sm:block">{page.href}</span>
                  </Link>
                ))
              ) : (
                <div className="px-4 py-6 sm:py-8 text-center text-slate-500 text-sm">
                  No pages found for &ldquo;{searchQuery}&rdquo;
                </div>
              )}
            </div>

            {/* Quick Categories */}
            {!searchQuery && (
              <div className="border-t border-white/10 px-4 py-3">
                <p className="text-xs text-slate-500 mb-2">Browse by Category</p>
                <div className="flex flex-wrap gap-2">
                  {navigationData.slice(0, 6).map((cat) => (
                    <button
                      key={cat.title}
                      onClick={() => setSearchQuery(cat.title.toLowerCase())}
                      className={`flex items-center gap-1.5 px-2.5 py-1.5 bg-white/5 rounded-lg text-xs ${cat.color} hover:bg-white/10 transition-all`}
                    >
                      <cat.icon size={12} />
                      <span>{cat.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <footer className="bg-[#0a1628] border-t border-[#c9a227]/30">
        {/* Search Bar */}
        <div className="border-b border-white/10 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
            <button
              onClick={() => setSearchOpen(true)}
              className="w-full flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-slate-400 hover:text-white hover:border-[#c9a227]/50 transition-all text-sm sm:text-base"
            >
              <Search size={16} />
              <span>Search 242+ pages...</span>
              <kbd className="text-[10px] sm:text-xs bg-white/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded ml-1 sm:ml-2 hidden sm:block">Cmd+K</kbd>
            </button>
          </div>
        </div>

        {/* Quick Links Bar */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-3">
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-hide pb-1">
              <span className="text-slate-500 text-[10px] sm:text-xs font-medium whitespace-nowrap">Quick:</span>
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium whitespace-nowrap transition-all ${
                    isActive(link.href)
                      ? 'bg-[#c9a227] text-black'
                      : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <link.icon size={10} className="sm:w-3 sm:h-3" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer Grid - 14 Categories in 7 columns */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-6 sm:py-8 lg:py-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 lg:gap-8">
            {navigationData.map((category) => (
              <div key={category.title}>
                <h4 className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2 sm:mb-4 flex items-center gap-1.5 sm:gap-2 ${category.color}`}>
                  <category.icon size={12} />
                  {category.title}
                </h4>
                <ul className="space-y-1 sm:space-y-2">
                  {category.items.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-sm transition-all ${
                          isActive(link.href)
                            ? 'text-[#c9a227]'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        <link.icon size={10} className="flex-shrink-0" />
                        <span className="truncate">{link.label}</span>
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
          <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              {/* Logo & Copyright */}
              <div className="flex items-center gap-2 sm:gap-3">
                <Link href="/dashboard" className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#c9a227] to-[#e8c547] flex items-center justify-center">
                    <span className="text-black font-black text-sm sm:text-lg">N</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm sm:text-lg">Nuqta</p>
                    <p className="text-slate-500 text-[10px] sm:text-xs">Dubai&apos;s Rewards Revolution</p>
                  </div>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-slate-500">
                <span>26 Products</span>
                <span>•</span>
                <span>242+ Pages</span>
                <span>•</span>
                <span>11 Companies</span>
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
                <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms
                </Link>
                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy
                </Link>
                <a
                  href="mailto:hello@nuqtaapp.com"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <Mail size={12} />
                  Contact
                </a>
              </div>

              {/* Year & Credit */}
              <div className="flex items-center gap-1.5 sm:gap-2 text-slate-500 text-[10px] sm:text-xs">
                <span>© 2026 Nuqta</span>
                <span>•</span>
                <span>Made in Dubai</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default GlobalFooter;
