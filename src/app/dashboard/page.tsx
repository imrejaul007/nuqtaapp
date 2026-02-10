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
  MapPin,
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
  ChevronUp,
  Gift,
  FileCheck,
  TrendingDown,
  Search,
  Radio,
  Mic,
  ImageIcon,
  Folder,
  Shield,
  Lock,
  GraduationCap,
  Utensils,
  LayoutGrid,
  Play,
  FlaskConical,
  Puzzle,
  Flag,
  Box,
  Clock,
  Phone,
  HelpCircle,
  Home
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

// C-Suite organized departments - ALL 174 PAGES
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
        name: 'Pitch Decks',
        icon: Presentation,
        links: [
          { label: '90-Second Pitch', href: '/deck-90', icon: Rocket },
          { label: 'Full Pitch Deck', href: '/deck-kang', icon: Presentation },
          { label: 'Final Deck', href: '/deck-final', icon: Presentation },
          { label: 'New Deck', href: '/deck-new', icon: Presentation },
          { label: 'All Decks', href: '/deck', icon: Folder },
        ]
      },
      {
        name: 'Investor Relations',
        icon: Briefcase,
        links: [
          { label: 'Data Room', href: '/data-room', icon: Database },
          { label: 'Investor Outreach', href: '/investor-outreach', icon: Mail },
          { label: 'Investor FAQ', href: '/investor-faq', icon: FileText },
          { label: 'VC Investment Memo', href: '/vc-investment-memo', icon: Briefcase },
          { label: 'Funding Docs', href: '/funding-docs', icon: FileText },
          { label: 'Investment Memo', href: '/memo', icon: FileText },
        ]
      },
      {
        name: 'CEO Reports',
        icon: FileText,
        links: [
          { label: 'CEO Master Plan', href: '/ceo-master-plan', icon: Crown },
          { label: 'CEO Report', href: '/ceo-report', icon: FileText },
          { label: 'CEO Analysis', href: '/ceo-analysis', icon: BarChart3 },
        ]
      },
      {
        name: 'Strategy & Vision',
        icon: Target,
        links: [
          { label: 'Future Ambition', href: '/future-ambition', icon: Globe },
          { label: '3-Year Plan', href: '/3-year-plan', icon: Target },
          { label: 'Master Roadmap', href: '/master-roadmap', icon: Map },
          { label: 'C-Suite Strategy', href: '/c-suite-strategy', icon: Target },
          { label: 'Commitment', href: '/commitment', icon: CheckSquare },
        ]
      },
      {
        name: 'Issue Tracking',
        icon: AlertTriangle,
        links: [
          { label: 'Issue Resolution', href: '/issue-resolution', icon: AlertTriangle },
          { label: 'Executive Issues', href: '/executive-issues', icon: AlertTriangle },
        ]
      },
      {
        name: 'Organization',
        icon: Users,
        links: [
          { label: 'Company Structure', href: '/company-structure', icon: Users },
          { label: 'Executive Team', href: '/executive-team', icon: Crown },
          { label: 'Org Chart', href: '/org-chart', icon: Users },
          { label: 'Team Page', href: '/team', icon: Users },
        ]
      },
      {
        name: 'Partnerships',
        icon: Handshake,
        links: [
          { label: 'Partnership Playbook', href: '/partnerships', icon: Handshake },
          { label: '4-Level Framework', href: '/partnership-framework', icon: Layers },
          { label: 'Partnership Tiers', href: '/partnership-tiers', icon: Award },
          { label: 'Co-Partner Program', href: '/co-partner', icon: Users },
        ]
      },
      {
        name: 'Exhibition Decks',
        icon: Globe,
        links: [
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
        name: 'CFO Reports',
        icon: FileText,
        links: [
          { label: 'CFO Report', href: '/cfo-report', icon: FileText },
          { label: 'CFO Analysis', href: '/cfo-analysis', icon: BarChart3 },
        ]
      },
      {
        name: 'Financial Models',
        icon: Calculator,
        links: [
          { label: 'Financial Models', href: '/financial-models', icon: Calculator },
          { label: 'Financial Projection', href: '/financialprojection', icon: LineChart },
          { label: 'Financial Scenarios', href: '/financial-scenarios', icon: LineChart },
          { label: 'Unit Economics', href: '/unit-economics', icon: Calculator },
        ]
      },
      {
        name: 'Revenue & Pricing',
        icon: DollarSign,
        links: [
          { label: 'Revenue Optimization', href: '/revenue-optimization', icon: DollarSign },
          { label: 'Pricing Strategy', href: '/pricing-strategy', icon: DollarSign },
        ]
      },
      {
        name: 'Legal Compliance',
        icon: Scale,
        links: [
          { label: 'Legal & Compliance', href: '/legal-compliance', icon: Scale },
          { label: 'License Preparation', href: '/license-preparation', icon: ClipboardList },
          { label: 'Licensing', href: '/licensing', icon: FileCheck },
        ]
      },
      {
        name: 'Legal Documents',
        icon: FileText,
        links: [
          { label: 'Legal Documents', href: '/legal-documents', icon: FileText },
          { label: 'Legal Docs', href: '/legal-docs', icon: FileText },
          { label: 'Contracts', href: '/contracts', icon: FileText },
        ]
      },
      {
        name: 'Policies & Terms',
        icon: Shield,
        links: [
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
        name: 'COO Reports',
        icon: FileText,
        links: [
          { label: 'COO Report', href: '/coo-report', icon: FileText },
          { label: 'COO Analysis', href: '/coo-analysis', icon: BarChart3 },
          { label: 'C-Suite Operations', href: '/c-suite-operations', icon: Settings },
        ]
      },
      {
        name: 'Merchant Strategy',
        icon: Store,
        links: [
          { label: 'All 3 Engines', href: '/merchant-engines', icon: Settings },
          { label: 'Packages & Pricing', href: '/merchant-packages', icon: CreditCard },
          { label: 'Merchant Playbook', href: '/merchant-playbook', icon: BookOpen },
          { label: 'Sales Kit', href: '/sales-kit', icon: Briefcase },
        ]
      },
      {
        name: 'Merchant Pipeline',
        icon: TrendingUp,
        links: [
          { label: 'Merchant Database', href: '/merchant-database', icon: Database },
          { label: 'Merchant Pipeline', href: '/merchant-pipeline', icon: TrendingUp },
          { label: 'Merchant Acquisition', href: '/merchant-acquisition', icon: Store },
          { label: 'Merchant Onboarding', href: '/merchant-onboarding', icon: Users },
        ]
      },
      {
        name: 'Merchant Assets',
        icon: CreditCard,
        links: [
          { label: 'Merchant Info', href: '/merchant-info', icon: FileText },
          { label: 'Merchant Card', href: '/merchant-card', icon: CreditCard },
          { label: 'Vendor Directory', href: '/vendor-directory', icon: Building2 },
        ]
      },
      {
        name: 'Playbooks - F&B',
        icon: Coffee,
        links: [
          { label: 'Cafe & Restaurant', href: '/playbook-cafe', icon: Coffee },
          { label: 'Supermarket', href: '/playbook-supermarket', icon: ShoppingCart },
        ]
      },
      {
        name: 'Playbooks - Wellness',
        icon: Scissors,
        links: [
          { label: 'Salon & Spa', href: '/playbook-salon', icon: Scissors },
          { label: 'Gym & Fitness', href: '/playbook-gym', icon: Dumbbell },
          { label: 'Clinic & Healthcare', href: '/playbook-clinic', icon: Briefcase },
          { label: 'Pharmacy', href: '/playbook-pharmacy', icon: Pill },
        ]
      },
      {
        name: 'Playbooks - Retail',
        icon: ShoppingCart,
        links: [
          { label: 'Gold & Jewelry', href: '/playbook-gold', icon: Gem },
          { label: 'Electronics', href: '/playbook-electronics', icon: Smartphone },
          { label: 'Fashion', href: '/playbook-fashion', icon: Shirt },
        ]
      },
      {
        name: 'Playbooks - Services',
        icon: Settings,
        links: [
          { label: 'Hotels & Hospitality', href: '/playbook-hotel', icon: Building2 },
          { label: 'Auto & Car Services', href: '/playbook-auto', icon: Settings },
          { label: 'Laundry', href: '/playbook-laundry', icon: Shirt },
        ]
      },
      {
        name: 'Playbooks - Other',
        icon: Briefcase,
        links: [
          { label: 'Pet Services', href: '/playbook-pet', icon: Briefcase },
          { label: 'Entertainment', href: '/playbook-entertainment', icon: Gamepad2 },
          { label: 'Events Playbook', href: '/events-playbook', icon: Calendar },
        ]
      },
      {
        name: 'Industry Decks',
        icon: Presentation,
        links: [
          { label: 'Cafe Deck', href: '/deck-cafe', icon: Coffee },
          { label: 'Salon Deck', href: '/deck-salon', icon: Scissors },
          { label: 'Supermarket Deck', href: '/deck-supermarket', icon: ShoppingCart },
          { label: 'Gold Deck', href: '/deck-gold', icon: Gem },
        ]
      },
      {
        name: 'Launch Planning',
        icon: Rocket,
        links: [
          { label: 'Launch Readiness', href: '/launch-readiness', icon: CheckSquare },
          { label: 'Launch Sprint', href: '/launch-sprint', icon: Rocket },
          { label: 'Execution Plan', href: '/execution-plan', icon: Target },
          { label: 'Execution Extended', href: '/execution-plan-extended', icon: Target },
        ]
      },
      {
        name: 'Operations',
        icon: Settings,
        links: [
          { label: 'Operations', href: '/operations', icon: Settings },
          { label: 'SOPs', href: '/sop', icon: CheckSquare },
          { label: 'Tasks', href: '/tasks', icon: CheckSquare },
        ]
      },
      {
        name: 'Support & Tools',
        icon: Headphones,
        links: [
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
        name: 'CMO Reports',
        icon: FileText,
        links: [
          { label: 'CMO Report', href: '/cmo-report', icon: FileText },
          { label: 'CMO Analysis', href: '/cmo-analysis', icon: BarChart3 },
          { label: 'CMO Operations', href: '/cmo-operations', icon: Settings },
        ]
      },
      {
        name: 'Marketing Strategy',
        icon: Brain,
        links: [
          { label: 'Marketing War Room', href: '/marketing-war-room', icon: Brain },
          { label: 'Marketing Hub', href: '/marketing-hub', icon: Megaphone },
          { label: 'CMO Playbook', href: '/cmo-playbook', icon: BookOpen },
          { label: 'Marketing Bible', href: '/marketing-bible', icon: BookOpen },
        ]
      },
      {
        name: 'Growth Intelligence',
        icon: Eye,
        links: [
          { label: 'Customer Intelligence', href: '/customer-intelligence', icon: Eye },
          { label: 'Competitive Intel', href: '/competitive-intel', icon: Target },
          { label: 'PMF Scoreboard', href: '/pmf-scoreboard', icon: BarChart3 },
        ]
      },
      {
        name: 'Growth Experiments',
        icon: Beaker,
        links: [
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
          { label: 'Geographic Expansion', href: '/geographic-expansion', icon: MapPin },
          { label: 'Win-Back', href: '/win-back', icon: RefreshCw },
        ]
      },
      {
        name: 'Influencer & Ambassador',
        icon: Award,
        links: [
          { label: 'Influencer List', href: '/influencer-list', icon: Users },
          { label: 'Ambassador Program', href: '/ambassador-program', icon: Award },
          { label: 'Gamification', href: '/gamification', icon: Gamepad2 },
        ]
      },
      {
        name: 'Brand & Voice',
        icon: MessageSquare,
        links: [
          { label: 'Brand Voice', href: '/brand-voice', icon: MessageSquare },
          { label: 'Press Kit', href: '/press-kit', icon: FileText },
          { label: 'Media Hub', href: '/media-hub', icon: Tv },
          { label: 'Media Properties', href: '/media-properties', icon: ImageIcon },
        ]
      },
      {
        name: 'Content',
        icon: PenTool,
        links: [
          { label: 'Content Strategy', href: '/content-strategy', icon: PenTool },
          { label: 'Content Calendar', href: '/content-calendar', icon: Calendar },
          { label: 'Niche Content', href: '/niche-content', icon: PenTool },
        ]
      },
      {
        name: 'Priority Campaigns',
        icon: Crown,
        links: [
          { label: 'Top 20 Niche Campaigns', href: '/top-20-campaigns', icon: Crown },
          { label: 'Category Campaigns', href: '/category-campaigns', icon: Target },
          { label: 'Big Win Campaigns', href: '/big-win-campaigns', icon: Award },
        ]
      },
      {
        name: 'Merchant Campaigns',
        icon: Store,
        links: [
          { label: 'Merchant Campaigns', href: '/merchant-campaigns', icon: Megaphone },
          { label: 'Seasonal Campaigns', href: '/seasonal-campaigns', icon: Calendar },
          { label: 'UGC Campaigns', href: '/ugc-campaigns', icon: Share2 },
        ]
      },
      {
        name: 'Campaign Execution',
        icon: Target,
        links: [
          { label: 'Sales Calendar', href: '/sales-calendar', icon: Calendar },
          { label: 'Marketing Execution', href: '/marketing-execution', icon: Target },
          { label: 'All Campaigns', href: '/campaigns', icon: Megaphone },
          { label: 'Offline Marketing', href: '/offline-marketing', icon: MapPin },
        ]
      },
      {
        name: 'PR & Crisis',
        icon: AlertTriangle,
        links: [
          { label: 'PR Launch', href: '/pr-launch', icon: Megaphone },
          { label: 'Crisis Communication', href: '/crisis-communication', icon: AlertTriangle },
        ]
      },
      {
        name: 'Communications',
        icon: Mail,
        links: [
          { label: 'Email Templates', href: '/email-templates', icon: Mail },
          { label: 'SMS Templates', href: '/sms-templates', icon: Phone },
          { label: 'App Store Copy', href: '/app-store-copy', icon: Smartphone },
        ]
      },
      {
        name: 'Analytics & Tracking',
        icon: BarChart3,
        links: [
          { label: 'Social Media Tracker', href: '/social-media-tracker', icon: Share2 },
          { label: 'Explainer Video', href: '/explainer-video', icon: Video },
          { label: 'Analytics Dashboard', href: '/analytics-dashboard', icon: BarChart3 },
          { label: 'Marketing Dashboard', href: '/marketing-dashboard', icon: LayoutGrid },
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
        name: 'GTM Overview',
        icon: TrendingUp,
        links: [
          { label: 'GTM Strategy', href: '/gtm', icon: TrendingUp },
          { label: 'H1 GTM', href: '/h1-gtm', icon: Rocket },
        ]
      },
      {
        name: 'H2 Strategy',
        icon: Target,
        links: [
          { label: 'H2 GTM', href: '/h2-gtm', icon: TrendingUp },
          { label: 'H2 Strategy', href: '/h2-strategy', icon: Target },
        ]
      },
      {
        name: 'H3 Strategy',
        icon: Settings,
        links: [
          { label: 'H3 GTM', href: '/h3-gtm', icon: TrendingUp },
          { label: 'H3 Infrastructure', href: '/h3-infrastructure', icon: Settings },
        ]
      },
      {
        name: 'Phase Planning',
        icon: Calendar,
        links: [
          { label: 'Phase 2', href: '/phase-2', icon: Calendar },
          { label: 'Phase 2 GTM', href: '/phase-2-gtm', icon: Calendar },
          { label: 'Phase 3', href: '/phase-3', icon: Calendar },
          { label: 'Phase 3 GTM', href: '/phase-3-gtm', icon: Calendar },
        ]
      },
      {
        name: 'Product Analysis',
        icon: Search,
        links: [
          { label: 'Competitor Analysis', href: '/competitor-analysis', icon: Search },
        ]
      },
      {
        name: 'Core Products',
        icon: Sparkles,
        links: [
          { label: 'Nuqta+ Membership', href: '/nuqta-plus', icon: Crown },
          { label: 'Sakin Rent', href: '/sakin', icon: Home },
          { label: 'Qist BNPL', href: '/qist', icon: Wallet },
          { label: 'Nuqta Card', href: '/card', icon: CreditCard },
          { label: 'Gamification', href: '/gamification', icon: Gamepad2 },
        ]
      },
      {
        name: 'User Experience',
        icon: Map,
        links: [
          { label: 'User Journey', href: '/user-journey', icon: Map },
          { label: 'Customer Journeys', href: '/customer-journeys', icon: Users },
          { label: 'Business Playbook', href: '/business-playbook', icon: BookOpen },
        ]
      },
      {
        name: 'Product Decks',
        icon: Presentation,
        links: [
          { label: 'University Deck', href: '/deck-university', icon: GraduationCap },
          { label: 'Corporate Deck', href: '/deck-corporate', icon: Building2 },
          { label: 'Merchant Deck', href: '/deck-merchant', icon: Store },
          { label: 'Merchant Deck B', href: '/deck-merchant-b', icon: Store },
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
        name: 'CHRO Reports',
        icon: FileText,
        links: [
          { label: 'CHRO Master Plan', href: '/chro-master-plan', icon: Heart },
          { label: 'CHRO Report', href: '/chro-report', icon: FileText },
          { label: 'CHRO Analysis', href: '/chro-analysis', icon: BarChart3 },
        ]
      },
      {
        name: 'Hiring',
        icon: UserPlus,
        links: [
          { label: 'Hiring Pipeline', href: '/hiring-pipeline', icon: UserPlus },
          { label: 'Hiring Playbook', href: '/hiring-playbook', icon: BookOpen },
        ]
      },
      {
        name: 'Careers',
        icon: Briefcase,
        links: [
          { label: 'Careers Page', href: '/careers', icon: Briefcase },
          { label: 'Join Us', href: '/join-us', icon: UserPlus },
        ]
      },
      {
        name: 'Team Structure',
        icon: Users,
        links: [
          { label: 'Team & Roles', href: '/team', icon: Users },
          { label: 'Org Chart', href: '/org-chart', icon: Users },
        ]
      },
      {
        name: 'Culture & Policies',
        icon: Heart,
        links: [
          { label: 'Employee Handbook', href: '/employee-handbook', icon: BookOpen },
          { label: 'D&I Policy', href: '/diversity-inclusion', icon: Heart },
          { label: 'HR Operations', href: '/hr-operations', icon: Settings },
        ]
      },
      {
        name: 'Compensation',
        icon: Wallet,
        links: [
          { label: 'Compensation Guide', href: '/compensation-guide', icon: Wallet },
          { label: 'ESOP', href: '/esop', icon: Ticket },
        ]
      },
      {
        name: 'Performance',
        icon: Award,
        links: [
          { label: 'Performance Management', href: '/performance-management', icon: Award },
        ]
      },
    ]
  },
];

// Marketing Hub Pages
const marketingHubPages = [
  { label: 'Command Center', href: '/marketing-dashboard', icon: LayoutGrid, desc: 'Daily execution & tracking' },
  { label: 'Marketing Bible', href: '/marketing-bible', icon: BookOpen, desc: '21 strategy sections' },
  { label: 'War Room', href: '/marketing-war-room', icon: Brain, desc: 'Campaign analysis' },
];

// Other pages (landing, agency, etc.)
const otherPages = [
  { label: 'Landing Page', href: '/landing-v1', icon: Globe },
  { label: 'Agency Pages', href: '/agency-pages', icon: Building2 },
  { label: 'About', href: '/about', icon: Building2 },
  { label: 'Why Nuqta', href: '/why-nuqta', icon: Zap },
  { label: 'Features', href: '/features', icon: Sparkles },
  { label: 'How It Works', href: '/how-it-works', icon: Play },
  { label: 'FAQ', href: '/faq', icon: HelpCircle },
  { label: 'Contact', href: '/contact', icon: Mail },
  { label: 'Privacy', href: '/privacy', icon: Shield },
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

        {/* Marketing Hub */}
        <div className="mt-8 sm:mt-10">
          <h3 className="text-sm font-bold text-[#c9a227] mb-3 flex items-center gap-2">
            <Megaphone size={16} />
            Marketing Hub
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {marketingHubPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-[#c9a227]/10 to-purple-500/10 border border-[#c9a227]/30 rounded-xl hover:border-[#c9a227]/60 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#c9a227]/20 flex items-center justify-center">
                  <page.icon size={20} className="text-[#c9a227]" />
                </div>
                <div>
                  <div className="text-white font-medium group-hover:text-[#c9a227] transition-colors">{page.label}</div>
                  <div className="text-slate-500 text-xs">{page.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Other Pages */}
        <div className="mt-8 sm:mt-10">
          <h3 className="text-sm font-bold text-slate-400 mb-3 flex items-center gap-2">
            <Globe size={16} />
            Other Pages
          </h3>
          <div className="flex flex-wrap gap-2">
            {otherPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="flex items-center gap-2 px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-slate-400 hover:text-white hover:border-slate-600 transition-all"
              >
                <page.icon size={14} />
                {page.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
          <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-xl p-3 sm:p-5 text-center">
            <div className="text-2xl sm:text-3xl font-black text-white">6</div>
            <div className="text-[#c9a227] text-xs sm:text-sm">C-Suite Executives</div>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-3 sm:p-5 text-center">
            <div className="text-2xl sm:text-3xl font-black text-white">55+</div>
            <div className="text-blue-400 text-xs sm:text-sm">Sub-Teams</div>
          </div>
          <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-3 sm:p-5 text-center">
            <div className="text-2xl sm:text-3xl font-black text-white">180+</div>
            <div className="text-pink-400 text-xs sm:text-sm">Total Pages</div>
          </div>
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3 sm:p-5 text-center">
            <div className="text-2xl sm:text-3xl font-black text-white">6</div>
            <div className="text-emerald-400 text-xs sm:text-sm">AI Agents</div>
          </div>
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-3 sm:p-5 text-center">
            <div className="text-2xl sm:text-3xl font-black text-white">15</div>
            <div className="text-orange-400 text-xs sm:text-sm">Industry Playbooks</div>
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
