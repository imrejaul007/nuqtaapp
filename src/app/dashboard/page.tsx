'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  ArrowRight,
  Star,
  Zap,
  Calculator,
  LineChart,
  Smartphone,
  Tv,
  Shirt,
  Pill,
  Gamepad2,
  ClipboardList,
  Video,
  Globe,
  UserPlus,
  Award,
  Wallet,
  Ticket,
  QrCode,
  Headphones,
  PenTool,
  MessageSquare,
  Share2,
  Bot,
  CreditCard,
  Sparkles,
  Brain,
  Eye,
  Filter,
  Beaker,
  RefreshCw,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface SubTeam {
  name: string;
  icon: React.ElementType;
  links: { label: string; href: string; icon: React.ElementType }[];
}

interface CXODepartment {
  role: string;
  name: string;
  title: string;
  agentLink: string;
  color: string;
  bgColor: string;
  borderColor: string;
  icon: React.ElementType;
  description: string;
  teams: SubTeam[];
}

// C-Suite organized departments
const cxoDepartments: CXODepartment[] = [
  {
    role: 'CEO',
    name: 'Chief Executive Officer',
    title: 'Vision & Strategy',
    agentLink: '/ceo-agent',
    color: 'text-[#c9a227]',
    bgColor: 'from-[#c9a227]/20 to-[#c9a227]/5',
    borderColor: 'border-[#c9a227]/40',
    icon: Crown,
    description: 'Overall company vision, strategy, investor relations, and executive decisions',
    teams: [
      {
        name: 'Investor Relations',
        icon: Briefcase,
        links: [
          { label: '90-Second Pitch', href: '/deck-90', icon: Rocket },
          { label: 'Full Pitch Deck', href: '/deck-kang', icon: Presentation },
          { label: 'All Decks', href: '/deck', icon: Presentation },
          { label: 'Data Room', href: '/data-room', icon: Database },
          { label: 'Investor Outreach', href: '/investor-outreach', icon: Mail },
          { label: 'Investor FAQ', href: '/investor-faq', icon: FileText },
          { label: 'VC Investment Memo', href: '/vc-investment-memo', icon: Briefcase },
          { label: 'Funding Docs', href: '/funding-docs', icon: Briefcase },
        ]
      },
      {
        name: 'Strategy & Vision',
        icon: Target,
        links: [
          { label: 'CEO Master Plan', href: '/ceo-master-plan', icon: Crown },
          { label: 'Future Ambition', href: '/future-ambition', icon: Globe },
          { label: '3-Year Plan', href: '/3-year-plan', icon: Target },
          { label: 'Master Roadmap', href: '/master-roadmap', icon: Map },
          { label: 'C-Suite Strategy', href: '/c-suite-strategy', icon: Target },
          { label: 'Issue Resolution', href: '/issue-resolution', icon: AlertTriangle },
          { label: 'Executive Team', href: '/executive-team', icon: Crown },
        ]
      },
      {
        name: 'Partnerships & BD',
        icon: Handshake,
        links: [
          { label: 'Partnership Playbook', href: '/partnerships', icon: Handshake },
          { label: '4-Level Framework', href: '/partnership-framework', icon: Layers },
          { label: 'Partnership Tiers', href: '/partnership-tiers', icon: Award },
          { label: 'Co-Partner Program', href: '/co-partner', icon: Users },
          { label: 'Global Village Deck', href: '/deck-gv', icon: Globe },
          { label: 'GV Playbook', href: '/gv-playbook', icon: BookOpen },
          { label: 'Exhibition Deck', href: '/deck-exhibition', icon: Presentation },
        ]
      },
    ]
  },
  {
    role: 'CFO',
    name: 'Chief Financial Officer',
    title: 'Finance & Legal',
    agentLink: '/cfo-agent',
    color: 'text-emerald-400',
    bgColor: 'from-emerald-500/20 to-emerald-500/5',
    borderColor: 'border-emerald-500/40',
    icon: DollarSign,
    description: 'Financial planning, investor relations, legal compliance, and revenue optimization',
    teams: [
      {
        name: 'Financial Planning',
        icon: Calculator,
        links: [
          { label: 'Financial Models', href: '/financial-models', icon: Calculator },
          { label: 'Financial Projection', href: '/financialprojection', icon: LineChart },
          { label: 'Financial Scenarios', href: '/financial-scenarios', icon: LineChart },
          { label: 'Unit Economics', href: '/unit-economics', icon: Calculator },
          { label: 'Revenue Optimization', href: '/revenue-optimization', icon: DollarSign },
          { label: 'Pricing Strategy', href: '/pricing-strategy', icon: DollarSign },
        ]
      },
      {
        name: 'Legal & Compliance',
        icon: Scale,
        links: [
          { label: 'Legal & Compliance', href: '/legal-compliance', icon: Scale },
          { label: 'License Preparation', href: '/license-preparation', icon: ClipboardList },
          { label: 'Legal Documents', href: '/legal-documents', icon: FileText },
          { label: 'Contracts', href: '/contracts', icon: FileText },
          { label: 'Policies', href: '/policies', icon: Scale },
          { label: 'Terms', href: '/terms', icon: FileText },
        ]
      },
    ]
  },
  {
    role: 'COO',
    name: 'Chief Operating Officer',
    title: 'Operations & Merchants',
    agentLink: '/coo-agent',
    color: 'text-blue-400',
    bgColor: 'from-blue-500/20 to-blue-500/5',
    borderColor: 'border-blue-500/40',
    icon: Settings,
    description: 'Day-to-day operations, merchant success, launch execution, and process optimization',
    teams: [
      {
        name: 'Merchant Operations',
        icon: Store,
        links: [
          { label: 'All 3 Engines', href: '/merchant-engines', icon: Settings },
          { label: 'Packages & Pricing', href: '/merchant-packages', icon: CreditCard },
          { label: 'Merchant Playbook', href: '/merchant-playbook', icon: BookOpen },
          { label: 'Merchant Database', href: '/merchant-database', icon: Database },
          { label: 'Merchant Pipeline', href: '/merchant-pipeline', icon: TrendingUp },
          { label: 'Merchant Acquisition', href: '/merchant-acquisition', icon: Store },
          { label: 'Merchant Onboarding', href: '/merchant-onboarding', icon: Users },
          { label: 'Sales Kit', href: '/sales-kit', icon: Briefcase },
        ]
      },
      {
        name: 'Industry Playbooks',
        icon: BookOpen,
        links: [
          { label: 'Cafe & Restaurant', href: '/playbook-cafe', icon: Coffee },
          { label: 'Salon & Spa', href: '/playbook-salon', icon: Scissors },
          { label: 'Supermarket', href: '/playbook-supermarket', icon: ShoppingCart },
          { label: 'Gold & Jewelry', href: '/playbook-gold', icon: Gem },
          { label: 'Gym & Fitness', href: '/playbook-gym', icon: Dumbbell },
          { label: 'Electronics', href: '/playbook-electronics', icon: Smartphone },
          { label: 'Pharmacy', href: '/playbook-pharmacy', icon: Pill },
          { label: 'Fashion', href: '/playbook-fashion', icon: Shirt },
          { label: 'Entertainment', href: '/playbook-entertainment', icon: Gamepad2 },
        ]
      },
      {
        name: 'Launch & Execution',
        icon: Rocket,
        links: [
          { label: 'C-Suite Operations', href: '/c-suite-operations', icon: Settings },
          { label: 'SOPs', href: '/sop', icon: CheckSquare },
          { label: 'Launch Readiness', href: '/launch-readiness', icon: CheckSquare },
          { label: 'Launch Sprint', href: '/launch-sprint', icon: Rocket },
          { label: 'Execution Plan', href: '/execution-plan', icon: Target },
          { label: 'KPI Tracking', href: '/kpi-tracking', icon: BarChart3 },
          { label: 'QR Design Specs', href: '/qr-design-specs', icon: QrCode },
          { label: 'Support Templates', href: '/support-templates', icon: Headphones },
        ]
      },
      {
        name: 'Events & Exhibitions',
        icon: Calendar,
        links: [
          { label: 'Event Master Plan', href: '/event-master-plan', icon: Calendar },
          { label: 'Event Execution', href: '/event-execution', icon: CheckSquare },
          { label: 'GV Merchants', href: '/gv-merchants', icon: Store },
          { label: 'Exhibition Merchants', href: '/exhibition-merchants', icon: Store },
        ]
      },
    ]
  },
  {
    role: 'CMO',
    name: 'Chief Marketing Officer',
    title: 'Marketing & Growth',
    agentLink: '/cmo-agent',
    color: 'text-pink-400',
    bgColor: 'from-pink-500/20 to-pink-500/5',
    borderColor: 'border-pink-500/40',
    icon: Megaphone,
    description: 'Brand, marketing, user acquisition, growth experiments, and customer intelligence',
    teams: [
      {
        name: 'Growth Intelligence',
        icon: Brain,
        links: [
          { label: 'Marketing War Room', href: '/marketing-war-room', icon: Brain },
          { label: 'Customer Intelligence', href: '/customer-intelligence', icon: Eye },
          { label: 'Competitive Intel', href: '/competitive-intel', icon: Target },
          { label: 'PMF Scoreboard', href: '/pmf-scoreboard', icon: BarChart3 },
          { label: 'Funnel Optimization', href: '/funnel-optimization', icon: Filter },
          { label: 'Growth Experiments', href: '/growth-experiments', icon: Beaker },
          { label: 'Growth Warfare', href: '/growth-warfare', icon: Target },
        ]
      },
      {
        name: 'User Acquisition',
        icon: UserPlus,
        links: [
          { label: 'User Acquisition', href: '/user-acquisition', icon: UserPlus },
          { label: 'Viral Growth', href: '/viral-growth', icon: Rocket },
          { label: 'Geographic Expansion', href: '/geographic-expansion', icon: Map },
          { label: 'Win-Back', href: '/win-back', icon: RefreshCw },
          { label: 'Influencer List', href: '/influencer-list', icon: Users },
          { label: 'Ambassador Program', href: '/ambassador-program', icon: Award },
          { label: 'Referral Program', href: '/gamification', icon: Gift },
        ]
      },
      {
        name: 'Brand & Content',
        icon: PenTool,
        links: [
          { label: 'Marketing Hub', href: '/marketing-hub', icon: Megaphone },
          { label: 'CMO Playbook', href: '/cmo-playbook', icon: BookOpen },
          { label: 'Brand Voice', href: '/brand-voice', icon: MessageSquare },
          { label: 'Content Strategy', href: '/content-strategy', icon: PenTool },
          { label: 'Content Calendar', href: '/content-calendar', icon: Calendar },
          { label: 'Press Kit', href: '/press-kit', icon: FileText },
          { label: 'Media Hub', href: '/media-hub', icon: Tv },
        ]
      },
      {
        name: 'Campaigns',
        icon: Sparkles,
        links: [
          { label: 'Marketing Execution', href: '/marketing-execution', icon: Target },
          { label: 'Merchant Campaigns', href: '/merchant-campaigns', icon: Megaphone },
          { label: 'Seasonal Campaigns', href: '/seasonal-campaigns', icon: Calendar },
          { label: 'UGC Campaigns', href: '/ugc-campaigns', icon: Share2 },
          { label: 'Big Win Campaigns', href: '/big-win-campaigns', icon: Award },
          { label: 'Offline Marketing', href: '/offline-marketing', icon: Map },
          { label: 'PR Launch', href: '/pr-launch', icon: Megaphone },
        ]
      },
      {
        name: 'Communications',
        icon: Mail,
        links: [
          { label: 'Email Templates', href: '/email-templates', icon: Mail },
          { label: 'SMS Templates', href: '/sms-templates', icon: MessageSquare },
          { label: 'App Store Copy', href: '/app-store-copy', icon: Smartphone },
          { label: 'Social Media Tracker', href: '/social-media-tracker', icon: Share2 },
          { label: 'Explainer Video', href: '/explainer-video', icon: Video },
          { label: 'Analytics Dashboard', href: '/analytics-dashboard', icon: BarChart3 },
        ]
      },
    ]
  },
  {
    role: 'CPO',
    name: 'Chief Product Officer',
    title: 'Product & Experience',
    agentLink: '/cpo-agent',
    color: 'text-purple-400',
    bgColor: 'from-purple-500/20 to-purple-500/5',
    borderColor: 'border-purple-500/40',
    icon: Sparkles,
    description: 'Product strategy, user experience, Nuqta+ membership, and customer journeys',
    teams: [
      {
        name: 'Product Strategy',
        icon: Target,
        links: [
          { label: 'GTM Strategy', href: '/gtm', icon: TrendingUp },
          { label: 'H1 GTM', href: '/h1-gtm', icon: Rocket },
          { label: 'H2 GTM', href: '/h2-gtm', icon: TrendingUp },
          { label: 'H3 GTM', href: '/h3-gtm', icon: TrendingUp },
          { label: 'Phase 2 GTM', href: '/phase-2-gtm', icon: Calendar },
          { label: 'Phase 3 GTM', href: '/phase-3-gtm', icon: Calendar },
          { label: 'Competitor Analysis', href: '/competitor-analysis', icon: BarChart3 },
        ]
      },
      {
        name: 'Products & Features',
        icon: Sparkles,
        links: [
          { label: 'Nuqta+ Membership', href: '/nuqta-plus', icon: Crown },
          { label: 'Gamification', href: '/gamification', icon: Gamepad2 },
          { label: 'User Journey', href: '/user-journey', icon: Map },
          { label: 'Customer Journeys', href: '/customer-journeys', icon: Users },
          { label: 'Business Playbook', href: '/business-playbook', icon: BookOpen },
        ]
      },
      {
        name: 'Decks & Presentations',
        icon: Presentation,
        links: [
          { label: 'University Deck', href: '/deck-university', icon: BookOpen },
          { label: 'Corporate Deck', href: '/deck-corporate', icon: Briefcase },
          { label: 'Merchant Deck', href: '/deck-merchant', icon: Store },
        ]
      },
    ]
  },
  {
    role: 'CHRO',
    name: 'Chief Human Resources Officer',
    title: 'People & Culture',
    agentLink: '/chro-agent',
    color: 'text-rose-400',
    bgColor: 'from-rose-500/20 to-rose-500/5',
    borderColor: 'border-rose-500/40',
    icon: Heart,
    description: 'Hiring, team building, culture, compensation, and employee experience',
    teams: [
      {
        name: 'Talent Acquisition',
        icon: UserPlus,
        links: [
          { label: 'CHRO Master Plan', href: '/chro-master-plan', icon: Heart },
          { label: 'Hiring Pipeline', href: '/hiring-pipeline', icon: UserPlus },
          { label: 'Hiring Playbook', href: '/hiring-playbook', icon: BookOpen },
          { label: 'Careers Page', href: '/careers', icon: Briefcase },
          { label: 'Join Us', href: '/join-us', icon: UserPlus },
        ]
      },
      {
        name: 'Team & Culture',
        icon: Users,
        links: [
          { label: 'Team & Roles', href: '/team', icon: Users },
          { label: 'Org Chart', href: '/org-chart', icon: Users },
          { label: 'Employee Handbook', href: '/employee-handbook', icon: BookOpen },
          { label: 'D&I Policy', href: '/diversity-inclusion', icon: Heart },
          { label: 'HR Operations', href: '/hr-operations', icon: Settings },
        ]
      },
      {
        name: 'Compensation & Benefits',
        icon: Wallet,
        links: [
          { label: 'Compensation Guide', href: '/compensation-guide', icon: Wallet },
          { label: 'ESOP', href: '/esop', icon: Ticket },
          { label: 'Performance Management', href: '/performance-management', icon: Award },
        ]
      },
    ]
  },
];

// Quick Actions
const quickActions = [
  { label: '90-Second Pitch', href: '/deck-90', icon: Rocket, color: 'text-red-400', description: 'Quick investor pitch' },
  { label: 'Data Room', href: '/data-room', icon: Database, color: 'text-purple-400', description: 'Due diligence docs' },
  { label: 'Marketing War Room', href: '/marketing-war-room', icon: Brain, color: 'text-pink-400', description: 'Campaign intelligence' },
  { label: 'Issue Resolution', href: '/issue-resolution', icon: AlertTriangle, color: 'text-amber-400', description: 'Track & fix issues' },
  { label: 'Merchant Database', href: '/merchant-database', icon: Store, color: 'text-green-400', description: '500+ merchants' },
  { label: 'Customer Intelligence', href: '/customer-intelligence', icon: Eye, color: 'text-cyan-400', description: 'User insights' },
];

export default function DashboardPage() {
  const [expandedDepts, setExpandedDepts] = useState<string[]>(['CEO', 'CMO']);

  const toggleDept = (role: string) => {
    setExpandedDepts(prev =>
      prev.includes(role) ? prev.filter(r => r !== role) : [...prev, role]
    );
  };

  const expandAll = () => setExpandedDepts(cxoDepartments.map(d => d.role));
  const collapseAll = () => setExpandedDepts([]);

  return (
    <div className="min-h-screen bg-[#0a1628]">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Hero */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex justify-center mb-4 sm:mb-6">
            <Image
              src="/images/nuqta-logo.png"
              alt="Nuqta"
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20"
            />
          </div>
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#c9a227]/20 border border-[#c9a227]/50 rounded-full mb-3 sm:mb-4">
            <Zap className="text-[#c9a227]" size={14} />
            <span className="text-[#c9a227] text-xs sm:text-sm font-bold">C-Suite Command Center</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4">
            Nuqta <span className="text-[#c9a227]">Dashboard</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto px-4">
            Organized by department. Find resources by the executive team who owns them.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
            <Star className="text-[#c9a227]" size={18} />
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {quickActions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className="group bg-slate-800/50 border border-slate-700 rounded-xl p-3 sm:p-4 hover:border-[#c9a227]/50 hover:bg-slate-800 transition-all"
              >
                <action.icon className={`${action.color} mb-2 sm:mb-3`} size={24} />
                <h3 className="text-white font-bold text-xs sm:text-sm mb-0.5 sm:mb-1 line-clamp-1">{action.label}</h3>
                <p className="text-slate-500 text-[10px] sm:text-xs line-clamp-2">{action.description}</p>
                <ArrowRight className="text-slate-600 group-hover:text-[#c9a227] mt-1.5 sm:mt-2 transition-colors" size={14} />
              </Link>
            ))}
          </div>
        </div>

        {/* Expand/Collapse Controls */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <Crown className="text-[#c9a227]" size={20} />
            Executive Departments
          </h2>
          <div className="flex gap-2">
            <button
              onClick={expandAll}
              className="px-3 py-1.5 text-xs sm:text-sm bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition-all"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-3 py-1.5 text-xs sm:text-sm bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition-all"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* C-Suite Departments */}
        <div className="space-y-4">
          {cxoDepartments.map((dept) => (
            <div
              key={dept.role}
              className={`bg-gradient-to-br ${dept.bgColor} border ${dept.borderColor} rounded-xl sm:rounded-2xl overflow-hidden`}
            >
              {/* Department Header */}
              <div
                className="p-4 sm:p-6 cursor-pointer flex items-center justify-between"
                onClick={() => toggleDept(dept.role)}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`p-2 sm:p-3 rounded-xl bg-slate-900/50 ${dept.color}`}>
                    <dept.icon size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className={`text-lg sm:text-xl font-black ${dept.color}`}>{dept.role}</span>
                      <span className="text-slate-400 text-sm sm:text-base font-medium hidden sm:block">
                        {dept.title}
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs sm:text-sm mt-0.5 line-clamp-1">{dept.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Link
                    href={dept.agentLink}
                    onClick={(e) => e.stopPropagation()}
                    className={`flex items-center gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-slate-900/50 hover:bg-slate-800 transition-all ${dept.color}`}
                  >
                    <Bot size={14} />
                    <span className="text-xs sm:text-sm font-medium hidden sm:block">AI Agent</span>
                  </Link>
                  {expandedDepts.includes(dept.role) ? (
                    <ChevronUp className="text-slate-400" size={20} />
                  ) : (
                    <ChevronDown className="text-slate-400" size={20} />
                  )}
                </div>
              </div>

              {/* Department Teams */}
              {expandedDepts.includes(dept.role) && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {dept.teams.map((team) => (
                      <div key={team.name} className="bg-slate-900/50 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <team.icon className={dept.color} size={16} />
                          <h4 className={`text-sm font-bold ${dept.color}`}>{team.name}</h4>
                        </div>
                        <div className="space-y-1">
                          {team.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs sm:text-sm text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all"
                            >
                              <link.icon size={12} className="text-slate-500 flex-shrink-0" />
                              <span className="truncate">{link.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-xl p-3 sm:p-5 text-center">
            <div className="text-2xl sm:text-3xl font-black text-white">6</div>
            <div className="text-[#c9a227] text-xs sm:text-sm">C-Suite Executives</div>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-3 sm:p-5 text-center">
            <div className="text-2xl sm:text-3xl font-black text-white">22</div>
            <div className="text-blue-400 text-xs sm:text-sm">Department Teams</div>
          </div>
          <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-3 sm:p-5 text-center">
            <div className="text-2xl sm:text-3xl font-black text-white">170+</div>
            <div className="text-pink-400 text-xs sm:text-sm">Total Pages</div>
          </div>
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3 sm:p-5 text-center">
            <div className="text-2xl sm:text-3xl font-black text-white">6</div>
            <div className="text-emerald-400 text-xs sm:text-sm">AI Agents</div>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-slate-500 text-xs sm:text-sm">
            Use <kbd className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-slate-800 rounded text-[10px] sm:text-xs">⌘K</kbd> or <kbd className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-slate-800 rounded text-[10px] sm:text-xs">Ctrl+K</kbd> to search anywhere
          </p>
        </div>
      </main>
    </div>
  );
}
