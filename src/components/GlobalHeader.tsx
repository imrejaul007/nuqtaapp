'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  Search,
  ChevronDown,
  Home,
  Presentation,
  TrendingUp,
  Store,
  Megaphone,
  Users,
  FileText,
  Briefcase,
  Crown,
  Handshake,
  Database,
  Settings,
  Scale,
  Target,
  Rocket,
  DollarSign,
  Map,
  BookOpen,
  Coffee,
  Scissors,
  ShoppingCart,
  Gem,
  Dumbbell,
  Building2,
  Calendar,
  Mail,
  Play,
  Film,
  MessageSquare,
  Shield,
  Heart,
  Smartphone,
  BarChart3,
  Calculator,
  CheckSquare,
  CreditCard,
  Bot,
  AlertTriangle,
  Layers
} from 'lucide-react';

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

// Consolidated navigation - 8 main categories
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
      { label: 'Investor Outreach', href: '/investor-outreach', icon: Mail },
      { label: 'Investor FAQ', href: '/investor-faq', icon: FileText },
      { label: 'Funding Documents', href: '/funding-docs', icon: Briefcase },
    ]
  },
  {
    title: 'Strategy',
    icon: Target,
    color: 'text-purple-400',
    items: [
      { label: 'Master Roadmap', href: '/master-roadmap', icon: Map },
      { label: 'GTM Strategy', href: '/gtm', icon: TrendingUp },
      { label: 'Competitor Analysis', href: '/competitor-analysis', icon: BarChart3 },
      { label: 'Execution Plan', href: '/execution-plan', icon: Target },
      { label: 'Phase 2 GTM', href: '/phase-2-gtm', icon: Calendar },
      { label: 'Phase 3 GTM', href: '/phase-3-gtm', icon: Calendar },
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
      { label: 'Sales Kit', href: '/sales-kit', icon: Briefcase },
      { label: 'SOPs', href: '/sop', icon: CheckSquare },
      { label: 'Onboarding', href: '/merchant-onboarding', icon: Users },
    ]
  },
  {
    title: 'Industries',
    icon: Building2,
    color: 'text-amber-400',
    items: [
      { label: 'Cafe Deck & Playbook', href: '/playbook-cafe', icon: Coffee },
      { label: 'Salon Deck & Playbook', href: '/playbook-salon', icon: Scissors },
      { label: 'Supermarket', href: '/playbook-supermarket', icon: ShoppingCart },
      { label: 'Gold & Jewelry', href: '/playbook-gold', icon: Gem },
      { label: 'Gym & Fitness', href: '/playbook-gym', icon: Dumbbell },
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
      { label: 'Brand Voice', href: '/brand-voice', icon: MessageSquare },
      { label: 'Campaigns', href: '/seasonal-campaigns', icon: Calendar },
      { label: 'Influencer List', href: '/influencer-list', icon: Users },
      { label: 'Press Kit', href: '/press-kit', icon: FileText },
      { label: 'Content Templates', href: '/email-templates', icon: Mail },
    ]
  },
  {
    title: 'Partnerships',
    icon: Handshake,
    color: 'text-cyan-400',
    items: [
      { label: 'Partnership Playbook', href: '/partnerships', icon: Handshake },
      { label: '4-Level Framework', href: '/partnership-framework', icon: Layers },
      { label: 'Co-Partner Program', href: '/co-partner', icon: Users },
      { label: 'Global Village', href: '/deck-gv', icon: Building2 },
      { label: 'Exhibition Deck', href: '/deck-exhibition', icon: Presentation },
    ]
  },
  {
    title: 'C-Suite',
    icon: Crown,
    color: 'text-[#c9a227]',
    items: [
      { label: 'Executive Team', href: '/executive-team', icon: Crown },
      { label: 'CEO Report', href: '/ceo-agent', icon: Bot },
      { label: 'COO Report', href: '/coo-agent', icon: Settings },
      { label: 'CFO Report', href: '/cfo-agent', icon: DollarSign },
      { label: 'CMO Report', href: '/cmo-agent', icon: Megaphone },
      { label: 'CHRO Report', href: '/chro-agent', icon: Heart },
      { label: 'Issue Resolution', href: '/issue-resolution', icon: AlertTriangle },
    ]
  },
  {
    title: 'Company',
    icon: Building2,
    color: 'text-slate-300',
    items: [
      { label: 'Team', href: '/team', icon: Users },
      { label: 'Operations', href: '/operations', icon: Settings },
      { label: 'Tasks', href: '/tasks', icon: CheckSquare },
      { label: 'Legal & Policies', href: '/policies', icon: Scale },
      { label: 'Contracts', href: '/contracts', icon: FileText },
      { label: 'HR Operations', href: '/hr-operations', icon: Heart },
    ]
  },
];

// All searchable pages
const allPages = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Dashboard', href: '/dashboard', icon: BarChart3 },
  ...navigationData.flatMap(cat => cat.items),
];

export default function GlobalHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter pages based on search
  const filteredPages = allPages.filter(page =>
    page.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  // Get current page name
  const getCurrentPageName = () => {
    const page = allPages.find(p => p.href === pathname);
    return page?.label || 'Nuqta';
  };

  return (
    <>
      {/* Main Header */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-[#0a1628]/95 backdrop-blur-xl border-b border-[#c9a227]/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#c9a227] to-[#e8c547] flex items-center justify-center">
                <span className="text-black font-black text-lg">N</span>
              </div>
              <span className="text-xl font-bold text-white hidden sm:block">Nuqta</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
              {navigationData.map((category) => (
                <div key={category.title} className="relative">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === category.title ? null : category.title)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeDropdown === category.title
                        ? 'bg-[#c9a227]/20 text-[#c9a227]'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <category.icon size={16} className={category.color} />
                    <span>{category.title}</span>
                    <ChevronDown size={14} className={`transition-transform ${activeDropdown === category.title ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown */}
                  {activeDropdown === category.title && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-[#0a1628] border border-[#c9a227]/30 rounded-xl shadow-2xl py-2 z-50">
                      {category.items.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-all ${
                              isActive
                                ? 'bg-[#c9a227]/20 text-[#c9a227]'
                                : 'text-slate-300 hover:bg-white/5 hover:text-white'
                            }`}
                          >
                            <item.icon size={16} />
                            <span>{item.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2">
              {/* Search Button */}
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-400 hover:text-white hover:border-[#c9a227]/50 transition-all"
              >
                <Search size={16} />
                <span className="hidden sm:block text-sm">Search</span>
                <kbd className="hidden md:block text-xs bg-white/10 px-1.5 py-0.5 rounded">⌘K</kbd>
              </button>

              {/* Quick Links */}
              <Link
                href="/deck-90"
                className="hidden md:flex items-center gap-1.5 px-3 py-2 bg-[#c9a227]/20 border border-[#c9a227]/50 rounded-lg text-[#c9a227] hover:bg-[#c9a227]/30 transition-all text-sm font-medium"
              >
                <Rocket size={16} />
                <span>Pitch Deck</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-all"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Current Page Indicator (Mobile) */}
        <div className="lg:hidden border-t border-white/5 px-4 py-2 bg-slate-900/50">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 rounded-full bg-[#c9a227] animate-pulse" />
            <span className="text-slate-400">Current:</span>
            <span className="text-white font-medium">{getCurrentPageName()}</span>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
          <div className="w-full max-w-2xl bg-[#0a1628] border border-[#c9a227]/30 rounded-2xl shadow-2xl overflow-hidden">
            {/* Search Input */}
            <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10">
              <Search className="text-[#c9a227]" size={20} />
              <input
                ref={searchRef}
                type="text"
                placeholder="Search pages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-white text-lg placeholder:text-slate-500 outline-none"
              />
              <button
                onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                className="text-slate-400 hover:text-white text-sm"
              >
                ESC
              </button>
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto py-2">
              {filteredPages.length > 0 ? (
                filteredPages.slice(0, 10).map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                    className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-[#c9a227]/10 hover:text-white transition-all"
                  >
                    <page.icon size={18} className="text-[#c9a227]" />
                    <span>{page.label}</span>
                    <span className="ml-auto text-xs text-slate-500">{page.href}</span>
                  </Link>
                ))
              ) : (
                <div className="px-4 py-8 text-center text-slate-500">
                  No pages found for &ldquo;{searchQuery}&rdquo;
                </div>
              )}
            </div>

            {/* Quick Categories */}
            {!searchQuery && (
              <div className="border-t border-white/10 px-4 py-3">
                <p className="text-xs text-slate-500 mb-2">Quick Access</p>
                <div className="flex flex-wrap gap-2">
                  {navigationData.slice(0, 4).map((cat) => (
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[90] bg-[#0a1628] pt-28 overflow-y-auto lg:hidden">
          <div className="px-4 pb-8 space-y-4">
            {/* Search in Mobile */}
            <button
              onClick={() => { setMobileMenuOpen(false); setSearchOpen(true); }}
              className="w-full flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-slate-400"
            >
              <Search size={18} />
              <span>Search pages...</span>
            </button>

            {/* Categories */}
            {navigationData.map((category) => (
              <div key={category.title} className="bg-slate-800/30 rounded-xl overflow-hidden">
                <div className={`flex items-center gap-3 px-4 py-3 border-b border-white/5 ${category.color}`}>
                  <category.icon size={20} />
                  <span className="font-bold">{category.title}</span>
                </div>
                <div className="p-2">
                  {category.items.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                          isActive
                            ? 'bg-[#c9a227]/20 text-[#c9a227]'
                            : 'text-slate-300 hover:bg-white/5'
                        }`}
                      >
                        <item.icon size={16} />
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              <Link
                href="/deck-90"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-[#c9a227] rounded-xl text-black font-bold"
              >
                <Rocket size={18} />
                <span>Pitch Deck</span>
              </Link>
              <Link
                href="/data-room"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white font-bold"
              >
                <Database size={18} />
                <span>Data Room</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-16" />
    </>
  );
}
