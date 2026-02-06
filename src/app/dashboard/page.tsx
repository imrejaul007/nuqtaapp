'use client';

import React from 'react';
import Link from 'next/link';
import {
  Rocket,
  Presentation,
  Database,
  DollarSign,
  TrendingUp,
  Target,
  Map,
  BarChart3,
  Store,
  Settings,
  BookOpen,
  Users,
  Coffee,
  Scissors,
  ShoppingCart,
  Gem,
  Dumbbell,
  Megaphone,
  Calendar,
  Mail,
  Handshake,
  Layers,
  Building2,
  Crown,
  AlertTriangle,
  Heart,
  Scale,
  FileText,
  CheckSquare,
  Briefcase,
  Play,
  ArrowRight,
  Star,
  Zap
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

interface QuickAction {
  label: string;
  href: string;
  icon: React.ElementType;
  color: string;
  description: string;
}

interface Section {
  title: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  borderColor: string;
  links: { label: string; href: string; icon: React.ElementType }[];
}

const quickActions: QuickAction[] = [
  { label: '90-Second Pitch', href: '/deck-90', icon: Rocket, color: 'text-red-400', description: 'Quick investor pitch' },
  { label: 'Full Deck', href: '/deck-kang', icon: Presentation, color: 'text-blue-400', description: 'Complete pitch deck' },
  { label: 'Data Room', href: '/data-room', icon: Database, color: 'text-purple-400', description: 'Due diligence docs' },
  { label: 'GTM Strategy', href: '/gtm', icon: TrendingUp, color: 'text-green-400', description: 'Go-to-market plan' },
  { label: 'Marketing Hub', href: '/marketing-hub', icon: Megaphone, color: 'text-pink-400', description: 'All marketing resources' },
  { label: 'Partnership Framework', href: '/partnership-framework', icon: Layers, color: 'text-cyan-400', description: '4-level strategy' },
];

const sections: Section[] = [
  {
    title: 'Investors & Fundraising',
    icon: Briefcase,
    color: 'text-blue-400',
    bgColor: 'from-blue-500/10 to-blue-600/5',
    borderColor: 'border-blue-500/30',
    links: [
      { label: '90-Second Pitch', href: '/deck-90', icon: Rocket },
      { label: 'Full Pitch Deck', href: '/deck-kang', icon: Presentation },
      { label: 'All Decks', href: '/deck', icon: Presentation },
      { label: 'Data Room', href: '/data-room', icon: Database },
      { label: 'Financial Models', href: '/financial-models', icon: DollarSign },
      { label: 'Investor Outreach', href: '/investor-outreach', icon: Mail },
      { label: 'Investor FAQ', href: '/investor-faq', icon: FileText },
      { label: 'Funding Docs', href: '/funding-docs', icon: Briefcase },
    ]
  },
  {
    title: 'Strategy & Roadmap',
    icon: Target,
    color: 'text-purple-400',
    bgColor: 'from-purple-500/10 to-purple-600/5',
    borderColor: 'border-purple-500/30',
    links: [
      { label: 'Master Roadmap', href: '/master-roadmap', icon: Map },
      { label: 'GTM Strategy', href: '/gtm', icon: TrendingUp },
      { label: 'Competitor Analysis', href: '/competitor-analysis', icon: BarChart3 },
      { label: 'Execution Plan', href: '/execution-plan', icon: Target },
      { label: 'Phase 2 GTM', href: '/phase-2-gtm', icon: Calendar },
      { label: 'Phase 3 GTM', href: '/phase-3-gtm', icon: Calendar },
    ]
  },
  {
    title: 'Merchants & Operations',
    icon: Store,
    color: 'text-green-400',
    bgColor: 'from-green-500/10 to-green-600/5',
    borderColor: 'border-green-500/30',
    links: [
      { label: 'All 3 Engines', href: '/merchant-engines', icon: Settings },
      { label: 'Packages & Pricing', href: '/merchant-packages', icon: Store },
      { label: 'Merchant Playbook', href: '/merchant-playbook', icon: BookOpen },
      { label: 'Merchant Database', href: '/merchant-database', icon: Database },
      { label: 'Sales Kit', href: '/sales-kit', icon: Briefcase },
      { label: 'SOPs', href: '/sop', icon: CheckSquare },
      { label: 'Onboarding', href: '/merchant-onboarding', icon: Users },
    ]
  },
  {
    title: 'Industry Playbooks',
    icon: BookOpen,
    color: 'text-amber-400',
    bgColor: 'from-amber-500/10 to-amber-600/5',
    borderColor: 'border-amber-500/30',
    links: [
      { label: 'Cafe & Restaurant', href: '/playbook-cafe', icon: Coffee },
      { label: 'Salon & Spa', href: '/playbook-salon', icon: Scissors },
      { label: 'Supermarket', href: '/playbook-supermarket', icon: ShoppingCart },
      { label: 'Gold & Jewelry', href: '/playbook-gold', icon: Gem },
      { label: 'Gym & Fitness', href: '/playbook-gym', icon: Dumbbell },
      { label: 'University Deck', href: '/deck-university', icon: BookOpen },
      { label: 'Corporate Deck', href: '/deck-corporate', icon: Briefcase },
    ]
  },
  {
    title: 'Marketing & Campaigns',
    icon: Megaphone,
    color: 'text-pink-400',
    bgColor: 'from-pink-500/10 to-pink-600/5',
    borderColor: 'border-pink-500/30',
    links: [
      { label: 'Marketing Hub', href: '/marketing-hub', icon: Megaphone },
      { label: 'CMO Playbook', href: '/cmo-playbook', icon: BookOpen },
      { label: 'Brand Voice', href: '/brand-voice', icon: FileText },
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
    bgColor: 'from-cyan-500/10 to-cyan-600/5',
    borderColor: 'border-cyan-500/30',
    links: [
      { label: 'Partnership Playbook', href: '/partnerships', icon: Handshake },
      { label: '4-Level Framework', href: '/partnership-framework', icon: Layers },
      { label: 'Co-Partner Program', href: '/co-partner', icon: Users },
      { label: 'Global Village', href: '/deck-gv', icon: Building2 },
      { label: 'Exhibition Deck', href: '/deck-exhibition', icon: Presentation },
    ]
  },
  {
    title: 'C-Suite & Leadership',
    icon: Crown,
    color: 'text-[#c9a227]',
    bgColor: 'from-[#c9a227]/10 to-[#c9a227]/5',
    borderColor: 'border-[#c9a227]/30',
    links: [
      { label: 'Executive Team', href: '/executive-team', icon: Crown },
      { label: 'Issue Resolution', href: '/issue-resolution', icon: AlertTriangle },
      { label: 'CEO Report', href: '/ceo-agent', icon: Crown },
      { label: 'COO Report', href: '/coo-agent', icon: Settings },
      { label: 'CFO Report', href: '/cfo-agent', icon: DollarSign },
      { label: 'CMO Report', href: '/cmo-agent', icon: Megaphone },
      { label: 'CHRO Report', href: '/chro-agent', icon: Heart },
    ]
  },
  {
    title: 'Company & HR',
    icon: Users,
    color: 'text-slate-300',
    bgColor: 'from-slate-500/10 to-slate-600/5',
    borderColor: 'border-slate-500/30',
    links: [
      { label: 'Team & Roles', href: '/team', icon: Users },
      { label: 'Operations', href: '/operations', icon: Settings },
      { label: 'Tasks', href: '/tasks', icon: CheckSquare },
      { label: 'HR Operations', href: '/hr-operations', icon: Heart },
      { label: 'Contracts', href: '/contracts', icon: FileText },
      { label: 'Policies', href: '/policies', icon: Scale },
    ]
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/50 rounded-full mb-4">
            <Zap className="text-[#c9a227]" size={16} />
            <span className="text-[#c9a227] text-sm font-bold">Command Center</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Nuqta <span className="text-[#c9a227]">Dashboard</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Everything you need in one place. Find any document, deck, or resource instantly.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Star className="text-[#c9a227]" size={20} />
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickActions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className="group bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:border-[#c9a227]/50 hover:bg-slate-800 transition-all"
              >
                <action.icon className={`${action.color} mb-3`} size={28} />
                <h3 className="text-white font-bold text-sm mb-1">{action.label}</h3>
                <p className="text-slate-500 text-xs">{action.description}</p>
                <ArrowRight className="text-slate-600 group-hover:text-[#c9a227] mt-2 transition-colors" size={16} />
              </Link>
            ))}
          </div>
        </div>

        {/* All Sections */}
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section) => (
            <div
              key={section.title}
              className={`bg-gradient-to-br ${section.bgColor} border ${section.borderColor} rounded-2xl p-6`}
            >
              <div className="flex items-center gap-3 mb-4">
                <section.icon className={section.color} size={24} />
                <h3 className={`text-lg font-bold ${section.color}`}>{section.title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {section.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 px-3 py-2 bg-slate-900/50 hover:bg-slate-800 rounded-lg text-sm text-slate-300 hover:text-white transition-all"
                  >
                    <link.icon size={14} className="text-slate-500" />
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5 text-center">
            <div className="text-3xl font-black text-white">130+</div>
            <div className="text-blue-400 text-sm">Total Pages</div>
          </div>
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5 text-center">
            <div className="text-3xl font-black text-white">8</div>
            <div className="text-green-400 text-sm">Main Categories</div>
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-5 text-center">
            <div className="text-3xl font-black text-white">21</div>
            <div className="text-purple-400 text-sm">Partnership Types</div>
          </div>
          <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-xl p-5 text-center">
            <div className="text-3xl font-black text-white">9</div>
            <div className="text-[#c9a227] text-sm">Industry Playbooks</div>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            Use <kbd className="px-2 py-1 bg-slate-800 rounded text-xs">⌘K</kbd> or <kbd className="px-2 py-1 bg-slate-800 rounded text-xs">Ctrl+K</kbd> to search anywhere
          </p>
        </div>
      </main>

      <GlobalFooter />
    </div>
  );
}
