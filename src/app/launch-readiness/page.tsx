'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle2,
  Circle,
  Clock,
  AlertTriangle,
  XCircle,
  ChevronDown,
  ChevronRight,
  Rocket,
  Target,
  Users,
  Store,
  DollarSign,
  FileText,
  Settings,
  Shield,
  Megaphone,
  Code,
  Smartphone,
  CreditCard,
  Building2,
  Briefcase,
  BarChart3,
  HeartHandshake,
  Scale,
  UserPlus,
  Headphones,
  Package,
  Zap,
  Globe,
  Camera,
  Video,
  Mail,
  MessageCircle,
  Calendar,
  Award,
  Star,
  TrendingUp,
  PieChart,
  Wallet,
  Receipt,
  MapPin,
  Layers,
  Lock,
  Key,
  Bell,
  Send,
  ExternalLink,
  Printer,
  QrCode,
  Monitor,
  Play,
  Mic,
  Image,
  Edit,
  Trash2,
  RefreshCw,
  Download,
  Upload,
  Search,
  Filter,
  Eye,
  ThumbsUp,
  ThumbsDown,
  Flag,
  AlertCircle,
  Info,
  HelpCircle,
  BookOpen,
  GraduationCap,
  Lightbulb,
  Sparkles
} from 'lucide-react';

interface ChecklistItem {
  id: string;
  task: string;
  status: 'done' | 'in-progress' | 'pending' | 'blocked';
  owner: string;
  notes?: string;
  link?: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  blockedBy?: string;
}

interface ChecklistCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  items: ChecklistItem[];
}

const launchChecklist: ChecklistCategory[] = [
  {
    id: 'tech',
    name: 'Technology & Product',
    icon: Code,
    color: 'blue',
    items: [
      { id: 't1', task: 'Mobile App Development (iOS & Android)', status: 'done', owner: 'Tech Team', priority: 'critical', notes: 'App ready for testing' },
      { id: 't2', task: 'Merchant Dashboard Development', status: 'done', owner: 'Tech Team', priority: 'critical', notes: 'Dashboard complete' },
      { id: 't3', task: 'Admin Portal Development', status: 'done', owner: 'Tech Team', priority: 'critical', notes: 'Admin panel ready' },
      { id: 't4', task: 'Payment Gateway Integration', status: 'in-progress', owner: 'Tech Team', priority: 'critical', notes: 'Integration with payment provider ongoing' },
      { id: 't5', task: 'POS Integration Development', status: 'in-progress', owner: 'Tech Team', priority: 'critical', notes: 'Testing with POS systems' },
      { id: 't6', task: 'QR Code Generation System', status: 'done', owner: 'Tech Team', priority: 'high', notes: 'Dynamic QR system ready' },
      { id: 't7', task: 'Push Notification System', status: 'done', owner: 'Tech Team', priority: 'high' },
      { id: 't8', task: 'Analytics & Reporting Dashboard', status: 'done', owner: 'Tech Team', priority: 'high' },
      { id: 't9', task: 'User Testing (Beta)', status: 'pending', owner: 'Tech Team', priority: 'critical', blockedBy: 'Payment integration' },
      { id: 't10', task: 'App Store Submission (iOS)', status: 'pending', owner: 'Tech Team', priority: 'critical', blockedBy: 'Beta testing' },
      { id: 't11', task: 'Play Store Submission (Android)', status: 'pending', owner: 'Tech Team', priority: 'critical', blockedBy: 'Beta testing' },
      { id: 't12', task: 'Security Audit & Penetration Testing', status: 'pending', owner: 'Tech Team', priority: 'critical' },
      { id: 't13', task: 'Load Testing & Performance Optimization', status: 'pending', owner: 'Tech Team', priority: 'high' },
      { id: 't14', task: 'Backup & Disaster Recovery Setup', status: 'pending', owner: 'Tech Team', priority: 'high' },
    ]
  },
  {
    id: 'legal',
    name: 'Legal & Compliance',
    icon: Scale,
    color: 'purple',
    items: [
      { id: 'l1', task: 'Trade License (Dubai)', status: 'done', owner: 'Legal', priority: 'critical', notes: 'Active license obtained' },
      { id: 'l2', task: 'Payment Service Provider License', status: 'pending', owner: 'Legal', priority: 'critical', notes: 'Check if PSP license needed or can operate under partner' },
      { id: 'l3', task: 'Data Protection Compliance (UAE PDPL)', status: 'pending', owner: 'Legal', priority: 'critical' },
      { id: 'l4', task: 'Terms of Service (User)', status: 'done', owner: 'Legal', priority: 'critical', link: '/terms' },
      { id: 'l5', task: 'Privacy Policy', status: 'done', owner: 'Legal', priority: 'critical' },
      { id: 'l6', task: 'Merchant Agreement Template', status: 'done', owner: 'Legal', priority: 'critical', link: '/contracts' },
      { id: 'l7', task: 'Employee Contracts', status: 'done', owner: 'Legal/HR', priority: 'high' },
      { id: 'l8', task: 'NDA Templates', status: 'done', owner: 'Legal', priority: 'medium' },
      { id: 'l9', task: 'Insurance (General Liability)', status: 'pending', owner: 'Legal', priority: 'high' },
      { id: 'l10', task: 'Insurance (Cyber Liability)', status: 'pending', owner: 'Legal', priority: 'high' },
      { id: 'l11', task: 'Trademark Registration (Nuqta)', status: 'pending', owner: 'Legal', priority: 'medium' },
    ]
  },
  {
    id: 'finance',
    name: 'Finance & Banking',
    icon: DollarSign,
    color: 'green',
    items: [
      { id: 'f1', task: 'Corporate Bank Account', status: 'done', owner: 'Finance', priority: 'critical' },
      { id: 'f2', task: 'Payment Gateway Account', status: 'in-progress', owner: 'Finance', priority: 'critical' },
      { id: 'f3', task: 'Merchant Payout System Setup', status: 'pending', owner: 'Finance', priority: 'critical', blockedBy: 'Payment gateway' },
      { id: 'f4', task: 'Accounting Software Setup', status: 'done', owner: 'Finance', priority: 'high' },
      { id: 'f5', task: 'VAT Registration', status: 'done', owner: 'Finance', priority: 'critical' },
      { id: 'f6', task: 'Invoice Templates', status: 'done', owner: 'Finance', priority: 'high' },
      { id: 'f7', task: 'Financial Controls & Approval Matrix', status: 'done', owner: 'Finance', priority: 'high' },
      { id: 'f8', task: 'Cashback/Coin Liability Tracking System', status: 'pending', owner: 'Finance', priority: 'high' },
      { id: 'f9', task: 'Merchant Settlement SOP', status: 'done', owner: 'Finance', priority: 'high', link: '/sop' },
    ]
  },
  {
    id: 'merchant',
    name: 'Merchant Acquisition',
    icon: Store,
    color: 'amber',
    items: [
      { id: 'm1', task: 'Merchant Pitch Decks (All Categories)', status: 'done', owner: 'Sales', priority: 'critical', link: '/merchant-playbook', notes: '9 category decks ready' },
      { id: 'm2', task: 'Category Playbooks (All 9)', status: 'done', owner: 'Sales', priority: 'critical', link: '/merchant-playbook', notes: 'Cafe, Salon, Gym, etc.' },
      { id: 'm3', task: 'Merchant Onboarding Flow', status: 'done', owner: 'Operations', priority: 'critical', link: '/merchant-onboarding' },
      { id: 'm4', task: 'Sales SOPs', status: 'done', owner: 'Sales', priority: 'high', link: '/sop' },
      { id: 'm5', task: 'Merchant Campaign Library', status: 'done', owner: 'Marketing', priority: 'high', link: '/merchant-campaigns' },
      { id: 'm6', task: 'Objection Handling Scripts', status: 'done', owner: 'Sales', priority: 'high', notes: 'In playbooks' },
      { id: 'm7', task: 'ROI Calculator Tool', status: 'done', owner: 'Sales', priority: 'high', notes: 'In playbooks' },
      { id: 'm8', task: 'CRM Setup (Lead Tracking)', status: 'pending', owner: 'Sales', priority: 'high', notes: 'Need to select and setup CRM' },
      { id: 'm9', task: 'First 10 Merchant Pipeline', status: 'done', owner: 'Sales', priority: 'critical', link: '/merchant-pipeline', notes: '12 priority merchants identified' },
      { id: 'm10', task: 'Pilot Merchants Signed (Minimum 5)', status: 'pending', owner: 'Sales', priority: 'critical', blockedBy: 'App ready for demo' },
      { id: 'm11', task: 'QR Standees & Marketing Materials', status: 'done', owner: 'Operations', priority: 'high', link: '/qr-design-specs', notes: 'Full specs ready for print' },
      { id: 'm12', task: 'Merchant Training Materials', status: 'done', owner: 'Operations', priority: 'high', link: '/sop' },
    ]
  },
  {
    id: 'marketing',
    name: 'Marketing & Brand',
    icon: Megaphone,
    color: 'pink',
    items: [
      { id: 'mk1', task: 'Brand Identity (Logo, Colors, Fonts)', status: 'done', owner: 'Marketing', priority: 'critical' },
      { id: 'mk2', task: 'Website (Landing Page)', status: 'done', owner: 'Marketing', priority: 'critical', link: '/' },
      { id: 'mk3', task: 'Marketing Bible/Strategy', status: 'done', owner: 'Marketing', priority: 'high', link: '/marketing-bible' },
      { id: 'mk4', task: 'Social Media Accounts Setup', status: 'pending', owner: 'Marketing', priority: 'high', notes: 'Instagram, TikTok, LinkedIn, Facebook' },
      { id: 'mk5', task: 'Content Calendar (Launch Month)', status: 'done', owner: 'Marketing', priority: 'high', link: '/content-calendar', notes: '30-day calendar ready' },
      { id: 'mk6', task: 'Launch Campaign Creative', status: 'done', owner: 'Marketing', priority: 'high', link: '/merchant-campaigns', notes: '18 campaigns ready' },
      { id: 'mk7', task: 'Influencer Partnership List', status: 'done', owner: 'Marketing', priority: 'medium', link: '/influencer-list', notes: '23 UAE influencers listed' },
      { id: 'mk8', task: 'PR Launch Plan', status: 'done', owner: 'Marketing', priority: 'medium', link: '/pr-launch', notes: 'Full PR strategy ready' },
      { id: 'mk9', task: 'App Store Screenshots & Description', status: 'done', owner: 'Marketing', priority: 'high', link: '/app-store-copy', notes: 'iOS & Android copy ready' },
      { id: 'mk10', task: 'Explainer Video Script', status: 'done', owner: 'Marketing', priority: 'medium', link: '/explainer-video', notes: '3 video scripts + storyboards' },
      { id: 'mk11', task: 'Email Marketing Templates', status: 'done', owner: 'Marketing', priority: 'medium', link: '/email-templates', notes: '20+ email templates ready' },
      { id: 'mk12', task: 'SMS Marketing Templates', status: 'done', owner: 'Marketing', priority: 'medium', link: '/sms-templates', notes: '25+ SMS templates ready' },
    ]
  },
  {
    id: 'operations',
    name: 'Operations & Support',
    icon: Settings,
    color: 'cyan',
    items: [
      { id: 'o1', task: 'All SOPs Created (44 SOPs)', status: 'done', owner: 'Operations', priority: 'critical', link: '/sop' },
      { id: 'o2', task: 'Operations Manual', status: 'done', owner: 'Operations', priority: 'high', link: '/operations' },
      { id: 'o3', task: 'Customer Support System Setup', status: 'pending', owner: 'Operations', priority: 'high', notes: 'Zendesk/Freshdesk/WhatsApp Business' },
      { id: 'o4', task: 'Support Response Templates', status: 'done', owner: 'Operations', priority: 'medium', link: '/support-templates', notes: '25+ templates ready' },
      { id: 'o5', task: 'Escalation Matrix Defined', status: 'done', owner: 'Operations', priority: 'high', notes: 'In SOPs' },
      { id: 'o6', task: 'Office/Workspace Setup', status: 'pending', owner: 'Operations', priority: 'medium' },
      { id: 'o7', task: 'Vendor Relationships (Print, Photo, etc)', status: 'pending', owner: 'Operations', priority: 'medium' },
      { id: 'o8', task: 'Courier/Logistics Partner', status: 'pending', owner: 'Operations', priority: 'low', notes: 'For material delivery' },
    ]
  },
  {
    id: 'hr',
    name: 'Team & HR',
    icon: Users,
    color: 'indigo',
    items: [
      { id: 'h1', task: 'Core Team Hired', status: 'in-progress', owner: 'HR', priority: 'critical', notes: 'Key roles filled' },
      { id: 'h2', task: 'Sales Team (Min 2)', status: 'pending', owner: 'HR', priority: 'critical' },
      { id: 'h3', task: 'Marketing Manager', status: 'pending', owner: 'HR', priority: 'high' },
      { id: 'h4', task: 'Operations/Support Person', status: 'pending', owner: 'HR', priority: 'high' },
      { id: 'h5', task: 'Employee Handbook', status: 'done', owner: 'HR', priority: 'medium', link: '/policies' },
      { id: 'h6', task: 'ESOP Plan Documented', status: 'done', owner: 'HR', priority: 'medium', link: '/esop' },
      { id: 'h7', task: 'Payroll System Setup', status: 'pending', owner: 'HR/Finance', priority: 'high' },
      { id: 'h8', task: 'Team Training (Product, Process)', status: 'pending', owner: 'HR', priority: 'high', blockedBy: 'Team hired' },
    ]
  },
  {
    id: 'investor',
    name: 'Investor Relations',
    icon: Briefcase,
    color: 'emerald',
    items: [
      { id: 'i1', task: 'Pitch Deck (Multiple Versions)', status: 'done', owner: 'Founders', priority: 'critical', link: '/deck-90' },
      { id: 'i2', task: 'Investment Memo', status: 'done', owner: 'Founders', priority: 'high', link: '/memo' },
      { id: 'i3', task: 'Financial Projections', status: 'done', owner: 'Finance', priority: 'high', link: '/financialprojection' },
      { id: 'i4', task: 'Data Room Setup', status: 'done', owner: 'Founders', priority: 'high', link: '/data-room' },
      { id: 'i5', task: 'Investor Outreach List', status: 'done', owner: 'Founders', priority: 'high', link: '/investor-outreach' },
      { id: 'i6', task: 'SAFE/Terms Sheet Ready', status: 'done', owner: 'Legal', priority: 'high', link: '/funding-docs' },
      { id: 'i7', task: 'Cap Table Updated', status: 'done', owner: 'Finance', priority: 'high' },
      { id: 'i8', task: 'Investor FAQ', status: 'done', owner: 'Founders', priority: 'medium', link: '/investor-faq' },
    ]
  },
];

// Calculate stats
const calculateStats = () => {
  let total = 0;
  let done = 0;
  let inProgress = 0;
  let pending = 0;
  let blocked = 0;
  let critical = 0;
  let criticalDone = 0;

  launchChecklist.forEach(category => {
    category.items.forEach(item => {
      total++;
      if (item.status === 'done') done++;
      if (item.status === 'in-progress') inProgress++;
      if (item.status === 'pending') pending++;
      if (item.status === 'blocked') blocked++;
      if (item.priority === 'critical') {
        critical++;
        if (item.status === 'done') criticalDone++;
      }
    });
  });

  return { total, done, inProgress, pending, blocked, critical, criticalDone };
};

const StatusIcon = ({ status }: { status: string }) => {
  switch (status) {
    case 'done':
      return <CheckCircle2 className="text-green-400" size={18} />;
    case 'in-progress':
      return <Clock className="text-amber-400" size={18} />;
    case 'pending':
      return <Circle className="text-slate-400" size={18} />;
    case 'blocked':
      return <XCircle className="text-red-400" size={18} />;
    default:
      return <Circle className="text-slate-400" size={18} />;
  }
};

const PriorityBadge = ({ priority }: { priority: string }) => {
  const colors: Record<string, string> = {
    critical: 'bg-red-500/20 text-red-400 border-red-500/30',
    high: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    medium: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    low: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
  };

  return (
    <span className={`px-2 py-0.5 text-xs font-medium rounded border ${colors[priority]}`}>
      {priority}
    </span>
  );
};

export default function LaunchReadinessPage() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['tech', 'merchant']);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const stats = calculateStats();

  const toggleCategory = (id: string) => {
    setExpandedCategories(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400' },
    green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400' },
    amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400' },
    purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400' },
    pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-400' },
    cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400' },
    indigo: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/30', text: 'text-indigo-400' },
    emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400' },
  };

  const filterItems = (items: ChecklistItem[]) => {
    if (filterStatus === 'all') return items;
    return items.filter(item => item.status === filterStatus);
  };

  const getCategoryProgress = (category: ChecklistCategory) => {
    const done = category.items.filter(i => i.status === 'done').length;
    return Math.round((done / category.items.length) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c9a227] to-[#e8c547] flex items-center justify-center">
                <span className="text-black font-bold text-xl">N</span>
              </div>
              <span className="text-2xl font-bold text-white">Nuqta</span>
            </Link>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">Launch Readiness Tracker</span>
          </div>
          <Link
            href="/tasks"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="text-sm">Tasks</span>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Launch Readiness Tracker</h1>
          <p className="text-slate-400">Complete gap analysis for Nuqta launch</p>
        </div>

        {/* Overall Progress */}
        <div className="bg-gradient-to-r from-[#c9a227]/20 to-amber-500/20 rounded-xl p-6 border border-[#c9a227]/30 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Overall Launch Readiness</h2>
              <p className="text-slate-400">Tech ready, payment integration in progress</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#c9a227]">{Math.round((stats.done / stats.total) * 100)}%</div>
                <div className="text-slate-400 text-sm">Complete</div>
              </div>
              <div className="w-px h-16 bg-white/10" />
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">{stats.done}</div>
                <div className="text-slate-400 text-sm">of {stats.total} tasks</div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="h-4 bg-black/30 rounded-full overflow-hidden">
              <div className="h-full flex">
                <div
                  className="bg-green-500 transition-all"
                  style={{ width: `${(stats.done / stats.total) * 100}%` }}
                />
                <div
                  className="bg-amber-500 transition-all"
                  style={{ width: `${(stats.inProgress / stats.total) * 100}%` }}
                />
              </div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500" /> Done ({stats.done})</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500" /> In Progress ({stats.inProgress})</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-500" /> Pending ({stats.pending})</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/30 text-center">
            <CheckCircle2 className="text-green-400 mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-green-400">{stats.done}</div>
            <div className="text-slate-400 text-xs">Completed</div>
          </div>
          <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/30 text-center">
            <Clock className="text-amber-400 mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-amber-400">{stats.inProgress}</div>
            <div className="text-slate-400 text-xs">In Progress</div>
          </div>
          <div className="bg-slate-500/10 rounded-xl p-4 border border-slate-500/30 text-center">
            <Circle className="text-slate-400 mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-slate-400">{stats.pending}</div>
            <div className="text-slate-400 text-xs">Pending</div>
          </div>
          <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/30 text-center">
            <AlertTriangle className="text-red-400 mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-red-400">{stats.critical}</div>
            <div className="text-slate-400 text-xs">Critical Items</div>
          </div>
          <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/30 text-center">
            <Target className="text-purple-400 mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-purple-400">{stats.criticalDone}/{stats.critical}</div>
            <div className="text-slate-400 text-xs">Critical Done</div>
          </div>
        </div>

        {/* Key Blockers */}
        <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30 mb-8">
          <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
            <AlertTriangle size={20} /> Key Blockers & Dependencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-black/20 rounded-lg p-4">
              <h4 className="text-white font-bold mb-2">Payment Gateway Integration</h4>
              <p className="text-slate-400 text-sm mb-2">Currently in progress. Blocks:</p>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Beta testing with real transactions</li>
                <li>• Merchant payout system</li>
                <li>• App store submission</li>
              </ul>
            </div>
            <div className="bg-black/20 rounded-lg p-4">
              <h4 className="text-white font-bold mb-2">Pilot Merchants</h4>
              <p className="text-slate-400 text-sm mb-2">Need minimum 5 signed before launch. Blocks:</p>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Real-world testing</li>
                <li>• Case studies & testimonials</li>
                <li>• Launch marketing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Filter */}
        <div className="flex gap-2 mb-6">
          {['all', 'done', 'in-progress', 'pending'].map(status => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filterStatus === status
                  ? 'bg-[#c9a227] text-black'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10'
              }`}
            >
              {status === 'all' ? 'All' : status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Checklist Categories */}
        <div className="space-y-4">
          {launchChecklist.map(category => {
            const colors = colorClasses[category.color] || colorClasses.blue;
            const filteredItems = filterItems(category.items);
            const progress = getCategoryProgress(category);

            if (filteredItems.length === 0 && filterStatus !== 'all') return null;

            return (
              <div key={category.id} className={`rounded-xl border ${colors.border} overflow-hidden`}>
                <button
                  onClick={() => toggleCategory(category.id)}
                  className={`w-full p-4 flex items-center justify-between ${colors.bg} hover:bg-white/5 transition-all`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center`}>
                      <category.icon className={colors.text} size={20} />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-white">{category.name}</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-black/30 rounded-full overflow-hidden">
                          <div className={`h-full ${progress === 100 ? 'bg-green-500' : 'bg-amber-500'}`} style={{ width: `${progress}%` }} />
                        </div>
                        <span className="text-slate-400 text-sm">{progress}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 text-sm">
                      {category.items.filter(i => i.status === 'done').length}/{category.items.length}
                    </span>
                    {expandedCategories.includes(category.id) ? (
                      <ChevronDown className={colors.text} size={20} />
                    ) : (
                      <ChevronRight className={colors.text} size={20} />
                    )}
                  </div>
                </button>

                {expandedCategories.includes(category.id) && (
                  <div className="p-4 border-t border-white/10 space-y-2">
                    {filteredItems.map(item => (
                      <div key={item.id} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                        <StatusIcon status={item.status} />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className={`text-sm ${item.status === 'done' ? 'text-slate-400 line-through' : 'text-white'}`}>
                              {item.task}
                            </span>
                            <PriorityBadge priority={item.priority} />
                          </div>
                          {(item.notes || item.blockedBy) && (
                            <div className="flex items-center gap-2 mt-1">
                              {item.notes && (
                                <span className="text-xs text-slate-500">{item.notes}</span>
                              )}
                              {item.blockedBy && (
                                <span className="text-xs text-red-400 flex items-center gap-1">
                                  <AlertCircle size={10} /> Blocked by: {item.blockedBy}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                        <span className="text-xs text-slate-500">{item.owner}</span>
                        {item.link && (
                          <Link href={item.link} className="text-[#c9a227] hover:text-[#e8c547]">
                            <ExternalLink size={14} />
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* What's Complete Summary */}
        <div className="mt-12 bg-green-500/10 rounded-xl p-6 border border-green-500/30">
          <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <CheckCircle2 size={20} /> What's Already Complete
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/20 rounded-lg p-4">
              <h4 className="text-white font-bold mb-2">Documentation (100%)</h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• 106+ pages of documentation</li>
                <li>• 44 SOPs across 14 categories</li>
                <li>• 9 category playbooks</li>
                <li>• 18 acquisition campaigns</li>
              </ul>
            </div>
            <div className="bg-black/20 rounded-lg p-4">
              <h4 className="text-white font-bold mb-2">Investor Materials (100%)</h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Multiple pitch deck versions</li>
                <li>• Financial projections</li>
                <li>• Data room complete</li>
                <li>• SAFE & terms ready</li>
              </ul>
            </div>
            <div className="bg-black/20 rounded-lg p-4">
              <h4 className="text-white font-bold mb-2">Tech Product (90%)</h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Mobile app developed</li>
                <li>• Merchant dashboard ready</li>
                <li>• Admin portal complete</li>
                <li>• Payment integration in progress</li>
              </ul>
            </div>
          </div>
        </div>

        {/* What's Needed to Launch */}
        <div className="mt-8 bg-amber-500/10 rounded-xl p-6 border border-amber-500/30">
          <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
            <Rocket size={20} /> Critical Path to Launch
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-black font-bold flex-shrink-0">1</div>
              <div>
                <h4 className="text-white font-bold">Complete Payment Integration</h4>
                <p className="text-slate-400 text-sm">Finish integration, test all payment flows, setup merchant payouts</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-black font-bold flex-shrink-0">2</div>
              <div>
                <h4 className="text-white font-bold">Sign 5 Pilot Merchants</h4>
                <p className="text-slate-400 text-sm">Target: 2 cafes, 1 salon, 1 restaurant, 1 gym in Dubai Marina/JBR</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-black font-bold flex-shrink-0">3</div>
              <div>
                <h4 className="text-white font-bold">Beta Test with Real Users</h4>
                <p className="text-slate-400 text-sm">Run 2-week beta with 50-100 users, fix bugs, optimize flows</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-black font-bold flex-shrink-0">4</div>
              <div>
                <h4 className="text-white font-bold">Setup Marketing Channels</h4>
                <p className="text-slate-400 text-sm">Social media accounts, email marketing, influencer partnerships</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-black font-bold flex-shrink-0">5</div>
              <div>
                <h4 className="text-white font-bold">Launch!</h4>
                <p className="text-slate-400 text-sm">Submit to app stores, PR push, influencer campaign, paid ads</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4">Quick Access</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'SOPs', href: '/sop', icon: FileText },
              { name: 'Merchant Campaigns', href: '/merchant-campaigns', icon: Target },
              { name: 'Data Room', href: '/data-room', icon: Briefcase },
              { name: 'Marketing Bible', href: '/marketing-bible', icon: BookOpen },
            ].map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all"
              >
                <link.icon className="text-[#c9a227]" size={20} />
                <span className="text-white text-sm">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
