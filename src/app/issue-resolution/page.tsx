'use client';

import React, { useState } from 'react';
import {
  AlertTriangle,
  CheckCircle,
  Clock,
  Target,
  Users,
  DollarSign,
  Megaphone,
  Settings,
  Crown,
  ArrowRight,
  Calendar,
  Flag,
  Zap,
  Shield,
  Rocket,
  Building2,
  UserPlus,
  TrendingUp,
  BarChart3,
  FileText,
  Phone,
  Mail,
  Globe,
  Star,
  XCircle,
  Play,
  Pause,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Wrench,
  Timer,
  Award
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

/**
 * ISSUE RESOLUTION TRACKER
 * ========================
 * Consolidated view of all C-Suite Agent issues with actionable solutions
 */

type Priority = 'critical' | 'high' | 'medium' | 'low';
type Status = 'not_started' | 'in_progress' | 'blocked' | 'completed';
type Department = 'ceo' | 'coo' | 'cmo' | 'chro' | 'cfo';

interface Issue {
  id: string;
  title: string;
  description: string;
  department: Department;
  priority: Priority;
  status: Status;
  deadline: string;
  owner: string;
  solution: string[];
  metrics: string[];
  dependencies?: string[];
  blockers?: string[];
}

export default function IssueResolutionPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'by-department' | 'by-priority' | 'action-plan'>('overview');
  const [selectedDepartment, setSelectedDepartment] = useState<Department | 'all'>('all');
  const [expandedIssue, setExpandedIssue] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Executive Overview', icon: BarChart3 },
    { id: 'by-department', label: 'By Department', icon: Building2 },
    { id: 'by-priority', label: 'By Priority', icon: Flag },
    { id: 'action-plan', label: '30-Day Action Plan', icon: Calendar },
  ];

  // Consolidated Issues from All C-Suite Reports
  const issues: Issue[] = [
    // ============================================
    // CEO ISSUES (Strategic/Vision)
    // ============================================
    {
      id: 'ceo-1',
      title: 'Product Development - MVP COMPLETE',
      description: 'Product is fully ready and built. Ready for testing and launch.',
      department: 'ceo',
      priority: 'critical',
      status: 'completed',
      deadline: 'Feb 15, 2026',
      owner: 'CTO + Dev Team',
      solution: [
        '✅ MVP scope defined and executed',
        '✅ All core features completed (search, QR, coins, merchant listing)',
        '✅ Development team delivered on time',
        '✅ Product ready for beta testing',
        '→ Next: Launch beta testing with real users'
      ],
      metrics: [
        'MVP feature completion: 100%',
        'Product status: Ready for launch',
        'Critical bugs: Being addressed in testing'
      ]
    },
    {
      id: 'ceo-2',
      title: 'Zero User Traction - No Validation',
      description: 'Despite months of work, there are 0 active users. The business model remains unvalidated.',
      department: 'ceo',
      priority: 'critical',
      status: 'not_started',
      deadline: 'March 1, 2026',
      owner: 'Founder',
      solution: [
        'Launch to 50 beta users immediately after MVP',
        'Friends & family beta (controlled launch)',
        'Measure: Do users come back? Do they transact?',
        'Get 10 merchants live before full launch',
        'Target: 100 users, 50 transactions in first week'
      ],
      metrics: [
        'Beta users signed up',
        'D1, D7 retention rates',
        'Transactions completed',
        'NPS from beta users'
      ],
      dependencies: ['ceo-1']
    },
    {
      id: 'ceo-3',
      title: 'Preparation Paralysis - Over-Documentation',
      description: '98% documentation score but 25% product completion. Too much planning, not enough doing.',
      department: 'ceo',
      priority: 'high',
      status: 'in_progress',
      deadline: 'Immediate',
      owner: 'Founder',
      solution: [
        'STOP creating new documents and decks',
        'Freeze all planning activities for 30 days',
        'Redirect 100% energy to shipping product',
        'Only document learnings from real user feedback',
        'Set "no new slides" rule until launch'
      ],
      metrics: [
        'Hours spent on docs vs product',
        'Documents created (target: 0)',
        'Features shipped per week'
      ]
    },
    {
      id: 'ceo-4',
      title: 'Unfunded Status - No Runway Extension',
      description: 'Currently bootstrapped with limited runway. Need to close pre-seed to extend runway.',
      department: 'ceo',
      priority: 'high',
      status: 'in_progress',
      deadline: 'Mar 31, 2026',
      owner: 'Founder',
      solution: [
        'Target 3-5 angel investors for quick $100K bridge',
        'Launch beta first to show traction before full raise',
        'Use traction data to improve valuation',
        'Parallel track: Investor outreach while building',
        'Apply to 3 accelerators as backup funding'
      ],
      metrics: [
        'Investor meetings scheduled',
        'Term sheets received',
        'Cash runway in months'
      ],
      dependencies: ['ceo-2']
    },

    // ============================================
    // COO ISSUES (Operations)
    // ============================================
    {
      id: 'coo-1',
      title: 'Merchant Conversion - BDA NOW EXECUTING',
      description: '32 LOIs signed. BDA now actively converting to live merchants with product ready.',
      department: 'coo',
      priority: 'critical',
      status: 'in_progress',
      deadline: 'Feb 10, 2026',
      owner: 'BDA + Founder',
      solution: [
        'Pick 10 best LOI merchants for pilot',
        'BDA to call each personally - schedule onboarding',
        'Send contracts within 24 hours of call',
        'Offer launch incentives (waived fees for 30 days)',
        'Complete onboarding in single 1-hour session',
        'Go live same day as onboarding'
      ],
      metrics: [
        'Contracts sent',
        'Contracts signed',
        'Merchants live',
        'First transaction per merchant'
      ],
      dependencies: ['ceo-1']
    },
    {
      id: 'coo-2',
      title: 'Payment Integration - COMPLETE',
      description: 'Payment system integrated as part of full product completion.',
      department: 'coo',
      priority: 'critical',
      status: 'completed',
      deadline: 'Feb 12, 2026',
      owner: 'CTO + Dev Team',
      solution: [
        '✅ Payment integration completed',
        '✅ QR-to-payment flow implemented',
        '✅ Core payment features ready',
        '→ Next: Test with real transactions',
        '→ Monitor payment failure rates post-launch'
      ],
      metrics: [
        'Payment integration: 100%',
        'Test transactions: Ready to test',
        'Payment failure rate: Monitor post-launch'
      ]
    },
    {
      id: 'coo-3',
      title: 'No Support Infrastructure',
      description: 'No customer support system for merchants or users when issues arise.',
      department: 'coo',
      priority: 'high',
      status: 'not_started',
      deadline: 'Feb 20, 2026',
      owner: 'Founder',
      solution: [
        'Set up WhatsApp Business for support',
        'Create support@nuqta email',
        'Document top 10 expected issues + responses',
        'Founder handles all support for first 100 users',
        'Add in-app chat using Intercom/Crisp free tier'
      ],
      metrics: [
        'Average response time',
        'Issue resolution rate',
        'Support tickets per user'
      ],
      dependencies: ['ceo-2']
    },
    {
      id: 'coo-4',
      title: 'Team Capacity - FULLY STAFFED',
      description: 'Full team hired: CTO, CHRO, CMO, 2 Developers, BDA, and Graphic Designer.',
      department: 'coo',
      priority: 'high',
      status: 'completed',
      deadline: 'Mar 15, 2026',
      owner: 'Founder',
      solution: [
        '✅ CTO hired - Technical leadership in place',
        '✅ CHRO hired - People operations covered',
        '✅ CMO hired - Marketing leadership in place',
        '✅ 2 Developers hired - Dev capacity scaled',
        '✅ BDA hired - Business development active',
        '✅ Graphic Designer hired - Design capacity ready'
      ],
      metrics: [
        'Key hires made: 7 team members',
        'Team capacity: 100%',
        'All critical roles filled'
      ],
      dependencies: ['chro-1']
    },

    // ============================================
    // CMO ISSUES (Marketing)
    // ============================================
    {
      id: 'cmo-1',
      title: 'Brand Awareness Campaign - READY TO LAUNCH',
      description: 'CMO and Graphic Designer hired. Ready to execute brand awareness strategy.',
      department: 'cmo',
      priority: 'high',
      status: 'in_progress',
      deadline: 'Mar 1, 2026',
      owner: 'CMO + Graphic Designer',
      solution: [
        'Create Instagram + TikTok accounts (launch week)',
        'Post 3x daily for 30 days (user tips, merchant features)',
        'Launch in-app referral program (give 50, get 50 coins)',
        'Partner with 5 micro-influencers (1K-10K followers)',
        'Create "Nuqta Founding Users" exclusive group'
      ],
      metrics: [
        'Social media followers',
        'Post engagement rate',
        'Referral signups',
        'Brand search volume'
      ],
      dependencies: ['ceo-2']
    },
    {
      id: 'cmo-2',
      title: 'No Viral Mechanics - Zero Organic Growth',
      description: 'No referral program, no shareability, no reason for users to spread the word.',
      department: 'cmo',
      priority: 'high',
      status: 'not_started',
      deadline: 'Feb 25, 2026',
      owner: 'Product + Marketing',
      solution: [
        'Implement referral program: Refer friend, both get 50 coins',
        'Add share buttons to every transaction',
        'Create "I saved X at Y" shareable receipts',
        'Gamify with leaderboards (top savers)',
        'Launch "First 1000 users" badge/status'
      ],
      metrics: [
        'Referral rate (referrals per user)',
        'Viral coefficient (K-factor)',
        'Organic vs paid acquisition %'
      ],
      dependencies: ['ceo-1']
    },
    {
      id: 'cmo-3',
      title: 'Influencer Strategy - READY TO EXECUTE',
      description: 'CMO to lead influencer outreach strategy with designer support for content.',
      department: 'cmo',
      priority: 'medium',
      status: 'in_progress',
      deadline: 'Mar 15, 2026',
      owner: 'CMO + Designer',
      solution: [
        'Identify 20 UAE food/lifestyle micro-influencers',
        'Offer free Nuqta coins (AED 500 value) for posts',
        'Create influencer affiliate program (earn per signup)',
        'Target university student influencers (cheap, high reach)',
        'Partner with 1 mid-tier influencer for launch'
      ],
      metrics: [
        'Influencer partnerships signed',
        'Signups from influencer codes',
        'Cost per acquisition via influencers'
      ],
      dependencies: ['cmo-1']
    },
    {
      id: 'cmo-4',
      title: 'Community Building - PLANNED',
      description: 'CMO to build Nuqta user community post-launch.',
      department: 'cmo',
      priority: 'medium',
      status: 'not_started',
      deadline: 'Mar 30, 2026',
      owner: 'CMO',
      solution: [
        'Create "Nuqta Savers" WhatsApp community',
        'Launch weekly "Deal of the Week" content',
        'Host monthly "Nuqta Meetup" at partner cafe',
        'Create user-generated content campaign',
        'Build email newsletter with saving tips'
      ],
      metrics: [
        'Community members',
        'Community engagement rate',
        'User-generated content pieces',
        'Event attendance'
      ],
      dependencies: ['cmo-1']
    },

    // ============================================
    // CHRO ISSUES (People/HR)
    // ============================================
    {
      id: 'chro-1',
      title: 'CTO Hired - COMPLETE',
      description: 'Technical leadership secured. CTO is now leading the development team.',
      department: 'chro',
      priority: 'critical',
      status: 'completed',
      deadline: 'March 1, 2026',
      owner: 'Founder',
      solution: [
        '✅ CTO hired and onboarded',
        '✅ Technical leadership in place',
        '✅ Leading development team (2 developers)',
        '✅ Product development completed under CTO leadership',
        '→ Next: Scale team as needed post-launch'
      ],
      metrics: [
        'CTO: Hired ✓',
        'Technical team: 3 members (CTO + 2 devs)',
        'Product: 100% complete'
      ]
    },
    {
      id: 'chro-2',
      title: 'Hiring Pipeline - ALL KEY ROLES FILLED',
      description: 'Successfully hired full founding team: CTO, CHRO, CMO, 2 Developers, BDA, Graphic Designer.',
      department: 'chro',
      priority: 'high',
      status: 'completed',
      deadline: 'Mar 1, 2026',
      owner: 'Founder + CHRO',
      solution: [
        '✅ CTO hired - Technical leadership',
        '✅ CHRO hired - People & operations',
        '✅ CMO hired - Marketing & growth',
        '✅ 2 Developers hired - Engineering capacity',
        '✅ BDA hired - Business development',
        '✅ Graphic Designer hired - Creative capacity',
        '→ Next: Build bench for scaling post-traction'
      ],
      metrics: [
        'Total team members: 8 (including founder)',
        'Key roles filled: 100%',
        'Offer acceptance rate: Successful'
      ]
    },
    {
      id: 'chro-3',
      title: 'Culture Definition - CHRO TO LEAD',
      description: 'CHRO to define company values and culture with full team now in place.',
      department: 'chro',
      priority: 'medium',
      status: 'in_progress',
      deadline: 'Mar 15, 2026',
      owner: 'CHRO + Founder',
      solution: [
        'Define 5 core values (Ship Fast, User First, etc.)',
        'Write 1-page culture document',
        'Create simple onboarding checklist',
        'Set up weekly team all-hands (8 members now)',
        'Document decision-making process'
      ],
      metrics: [
        'Values defined and documented',
        'Onboarding satisfaction score',
        'Employee alignment survey'
      ]
    },
    {
      id: 'chro-4',
      title: 'Compensation Framework - CHRO TO FORMALIZE',
      description: 'CHRO to create formal compensation structure for current and future hires.',
      department: 'chro',
      priority: 'medium',
      status: 'in_progress',
      deadline: 'Mar 30, 2026',
      owner: 'CHRO + Founder',
      solution: [
        'Research UAE startup salary benchmarks',
        'Create simple salary bands for all 8 roles',
        'Define ESOP pool (15-20% typical)',
        'Document vesting schedule (4-year, 1-year cliff)',
        'List basic benefits (health insurance, remote flexibility)'
      ],
      metrics: [
        'Compensation framework documented',
        'Offer competitiveness vs market',
        'Team satisfaction with comp'
      ],
      dependencies: ['cfo-3']
    },

    // ============================================
    // CFO ISSUES (Finance)
    // ============================================
    {
      id: 'cfo-1',
      title: 'No Financial Controls - No Proper Accounting',
      description: 'No P&L, no cash flow tracking, no financial statements. Flying blind on finances.',
      department: 'cfo',
      priority: 'critical',
      status: 'not_started',
      deadline: 'Feb 20, 2026',
      owner: 'Founder',
      solution: [
        'Set up QuickBooks or Xero account TODAY',
        'Connect all bank accounts and cards',
        'Categorize last 3 months of expenses',
        'Create monthly P&L template',
        'Schedule monthly finance review'
      ],
      metrics: [
        'Books up to date (Y/N)',
        'Monthly close completed',
        'Cash balance accuracy'
      ]
    },
    {
      id: 'cfo-2',
      title: 'Unit Economics Not Measured',
      description: 'LTV, CAC, and other unit economics are theoretical, not measured from real data.',
      department: 'cfo',
      priority: 'high',
      status: 'not_started',
      deadline: 'Mar 15, 2026',
      owner: 'Founder',
      solution: [
        'Set up analytics to track acquisition cost',
        'Define LTV calculation methodology',
        'Create unit economics dashboard',
        'Track: CAC, LTV, LTV:CAC, payback period',
        'Update weekly with real transaction data'
      ],
      metrics: [
        'Real CAC (not projected)',
        'Real LTV (not projected)',
        'Real LTV:CAC ratio',
        'Payback period in months'
      ],
      dependencies: ['ceo-2']
    },
    {
      id: 'cfo-3',
      title: 'No Financial Model for Fundraising',
      description: 'No 3-year financial projections, no scenario modeling, not investor-ready.',
      department: 'cfo',
      priority: 'high',
      status: 'not_started',
      deadline: 'Mar 1, 2026',
      owner: 'Founder',
      solution: [
        'Build 3-year financial model in Google Sheets',
        'Include: Revenue, costs, headcount, cash flow',
        'Create 3 scenarios: Conservative, Base, Optimistic',
        'Model path to profitability',
        'Prepare use of funds breakdown'
      ],
      metrics: [
        'Financial model completed',
        'Scenarios modeled',
        'Investor questions answered'
      ]
    },
    {
      id: 'cfo-4',
      title: 'Cash Runway Unclear - No Forecasting',
      description: 'Don\'t know exactly how many months of runway remain or burn rate.',
      department: 'cfo',
      priority: 'high',
      status: 'not_started',
      deadline: 'Feb 15, 2026',
      owner: 'Founder',
      solution: [
        'Calculate exact current cash position',
        'List all monthly expenses (fixed + variable)',
        'Calculate monthly burn rate',
        'Project runway: Cash ÷ Monthly Burn',
        'Set "runway alert" at 3 months remaining'
      ],
      metrics: [
        'Cash position (exact)',
        'Monthly burn rate',
        'Runway in months',
        'Burn rate trend'
      ]
    },
    {
      id: 'cfo-5',
      title: 'Not Investor Ready - Missing Data Room',
      description: 'No organized data room for due diligence. Would fail investor scrutiny.',
      department: 'cfo',
      priority: 'medium',
      status: 'not_started',
      deadline: 'Mar 15, 2026',
      owner: 'Founder',
      solution: [
        'Create Notion or Google Drive data room',
        'Organize: Financials, Legal, Product, Team sections',
        'Upload: Cap table, incorporation docs, contracts',
        'Add: Pitch deck, financial model, metrics dashboard',
        'Keep updated weekly'
      ],
      metrics: [
        'Data room completeness %',
        'Documents organized',
        'Time to share with investors'
      ],
      dependencies: ['cfo-1', 'cfo-3']
    }
  ];

  const departments = [
    { id: 'ceo', label: 'CEO (Strategy)', icon: Crown, color: 'purple' },
    { id: 'coo', label: 'COO (Operations)', icon: Settings, color: 'blue' },
    { id: 'cmo', label: 'CMO (Marketing)', icon: Megaphone, color: 'pink' },
    { id: 'chro', label: 'CHRO (People)', icon: Users, color: 'teal' },
    { id: 'cfo', label: 'CFO (Finance)', icon: DollarSign, color: 'emerald' },
  ];

  const getPriorityColor = (priority: Priority) => {
    const colors = {
      critical: 'bg-red-500/20 text-red-400 border-red-500/30',
      high: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      low: 'bg-green-500/20 text-green-400 border-green-500/30',
    };
    return colors[priority];
  };

  const getStatusColor = (status: Status) => {
    const colors = {
      not_started: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
      in_progress: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      blocked: 'bg-red-500/20 text-red-400 border-red-500/30',
      completed: 'bg-green-500/20 text-green-400 border-green-500/30',
    };
    return colors[status];
  };

  const getStatusIcon = (status: Status) => {
    const icons = {
      not_started: Clock,
      in_progress: Play,
      blocked: Pause,
      completed: CheckCircle,
    };
    return icons[status];
  };

  const getDeptColor = (dept: Department) => {
    const colors = {
      ceo: 'purple',
      coo: 'blue',
      cmo: 'pink',
      chro: 'teal',
      cfo: 'emerald',
    };
    return colors[dept];
  };

  const filteredIssues = selectedDepartment === 'all'
    ? issues
    : issues.filter(i => i.department === selectedDepartment);

  const criticalIssues = issues.filter(i => i.priority === 'critical');
  const inProgressIssues = issues.filter(i => i.status === 'in_progress');
  const completedIssues = issues.filter(i => i.status === 'completed');

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a1628] via-[#1a2d4a] to-[#0a1628] border-b border-[#c9a227]/20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-500/20 rounded-xl">
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Issue Resolution Tracker</h1>
                <p className="text-gray-400">C-Suite Agent Issues → Actionable Solutions</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[#c9a227] font-bold text-xl">{issues.length} Issues</p>
              <p className="text-gray-400 text-sm">{criticalIssues.length} Critical • {inProgressIssues.length} In Progress</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
            {departments.map(dept => {
              const deptIssues = issues.filter(i => i.department === dept.id as Department);
              const critical = deptIssues.filter(i => i.priority === 'critical').length;
              return (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDepartment(dept.id as Department)}
                  className={`p-3 rounded-xl border transition-all ${
                    selectedDepartment === dept.id
                      ? `bg-${dept.color}-500/20 border-${dept.color}-500/50`
                      : 'bg-gray-800/30 border-gray-700 hover:bg-gray-800/50'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <dept.icon className={`w-4 h-4 text-${dept.color}-400`} />
                    <span className="text-sm font-medium text-white">{dept.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-white">{deptIssues.length}</span>
                    {critical > 0 && (
                      <span className="text-xs px-2 py-0.5 rounded bg-red-500/20 text-red-400">
                        {critical} critical
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#c9a227] text-[#0a1628] font-bold'
                    : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Critical Issues Alert */}
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                {criticalIssues.length} Critical Issues Require Immediate Action
              </h3>
              <div className="space-y-3">
                {criticalIssues.map(issue => (
                  <div key={issue.id} className="flex items-center justify-between p-3 bg-red-500/10 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-red-400 font-mono text-sm">{issue.id.toUpperCase()}</span>
                      <span className="text-white">{issue.title}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 text-sm">{issue.deadline}</span>
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(issue.status)}`}>
                        {issue.status.replace('_', ' ')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Summary */}
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-gray-800/30 rounded-xl p-4 text-center">
                <Clock className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-3xl font-bold text-white">{issues.filter(i => i.status === 'not_started').length}</p>
                <p className="text-gray-400 text-sm">Not Started</p>
              </div>
              <div className="bg-blue-500/10 rounded-xl p-4 text-center border border-blue-500/30">
                <Play className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-3xl font-bold text-blue-400">{inProgressIssues.length}</p>
                <p className="text-gray-400 text-sm">In Progress</p>
              </div>
              <div className="bg-red-500/10 rounded-xl p-4 text-center border border-red-500/30">
                <Pause className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <p className="text-3xl font-bold text-red-400">{issues.filter(i => i.status === 'blocked').length}</p>
                <p className="text-gray-400 text-sm">Blocked</p>
              </div>
              <div className="bg-green-500/10 rounded-xl p-4 text-center border border-green-500/30">
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-3xl font-bold text-green-400">{completedIssues.length}</p>
                <p className="text-gray-400 text-sm">Completed</p>
              </div>
            </div>

            {/* Top 5 Priority Actions */}
            <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#c9a227] mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Top 5 Actions This Week - LAUNCH PHASE
              </h3>
              <div className="space-y-4">
                {[
                  { action: 'Complete beta testing with team', owner: 'CTO + Dev Team', deadline: 'This week' },
                  { action: 'Convert 10 LOIs to live merchants', owner: 'BDA + Founder', deadline: 'Feb 10' },
                  { action: 'Launch social media presence (IG, TikTok)', owner: 'CMO + Designer', deadline: 'Feb 8' },
                  { action: 'Set up financial tracking (QuickBooks)', owner: 'Founder', deadline: 'Feb 15' },
                  { action: 'Onboard first 50 beta users', owner: 'Full Team', deadline: 'Feb 12' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-[#c9a227] flex items-center justify-center text-[#0a1628] font-bold">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{item.action}</p>
                      <p className="text-gray-400 text-sm">Owner: {item.owner}</p>
                    </div>
                    <span className="text-[#c9a227] text-sm">{item.deadline}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* By Department Tab */}
        {activeTab === 'by-department' && (
          <div className="space-y-6">
            {/* Department Filter */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setSelectedDepartment('all')}
                className={`px-4 py-2 rounded-lg ${
                  selectedDepartment === 'all'
                    ? 'bg-[#c9a227] text-[#0a1628] font-bold'
                    : 'bg-gray-800/50 text-gray-400 hover:text-white'
                }`}
              >
                All Departments
              </button>
              {departments.map(dept => (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDepartment(dept.id as Department)}
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                    selectedDepartment === dept.id
                      ? 'bg-[#c9a227] text-[#0a1628] font-bold'
                      : 'bg-gray-800/50 text-gray-400 hover:text-white'
                  }`}
                >
                  <dept.icon className="w-4 h-4" />
                  {dept.label}
                </button>
              ))}
            </div>

            {/* Issue Cards */}
            <div className="space-y-4">
              {filteredIssues.map(issue => {
                const isExpanded = expandedIssue === issue.id;
                const StatusIcon = getStatusIcon(issue.status);
                const deptInfo = departments.find(d => d.id === issue.department);

                return (
                  <div key={issue.id} className="bg-gray-800/30 rounded-xl border border-gray-700 overflow-hidden">
                    <div
                      className="p-4 cursor-pointer hover:bg-gray-800/50 transition-colors"
                      onClick={() => setExpandedIssue(isExpanded ? null : issue.id)}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3 flex-1">
                          <div className={`p-2 rounded-lg bg-${getDeptColor(issue.department)}-500/20`}>
                            {deptInfo && <deptInfo.icon className={`w-5 h-5 text-${getDeptColor(issue.department)}-400`} />}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-gray-500 font-mono text-sm">{issue.id.toUpperCase()}</span>
                              <span className={`px-2 py-0.5 rounded text-xs border ${getPriorityColor(issue.priority)}`}>
                                {issue.priority}
                              </span>
                              <span className={`px-2 py-0.5 rounded text-xs border ${getStatusColor(issue.status)}`}>
                                {issue.status.replace('_', ' ')}
                              </span>
                            </div>
                            <h4 className="text-white font-medium">{issue.title}</h4>
                            <p className="text-gray-400 text-sm mt-1">{issue.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <p className="text-gray-400 text-sm">{issue.deadline}</p>
                            <p className="text-gray-500 text-xs">{issue.owner}</p>
                          </div>
                          {isExpanded ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                        </div>
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="border-t border-gray-700 p-4 bg-gray-900/30 space-y-4">
                        {/* Solution Steps */}
                        <div>
                          <h5 className="text-[#c9a227] font-medium mb-2 flex items-center gap-2">
                            <Wrench className="w-4 h-4" /> Solution Steps
                          </h5>
                          <div className="space-y-2">
                            {issue.solution.map((step, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                                <span className="w-5 h-5 rounded-full bg-[#c9a227]/20 text-[#c9a227] flex items-center justify-center text-xs shrink-0">
                                  {idx + 1}
                                </span>
                                {step}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Metrics */}
                        <div>
                          <h5 className="text-blue-400 font-medium mb-2 flex items-center gap-2">
                            <BarChart3 className="w-4 h-4" /> Success Metrics
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {issue.metrics.map((metric, idx) => (
                              <span key={idx} className="px-2 py-1 bg-blue-500/10 text-blue-300 rounded text-sm">
                                {metric}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Dependencies */}
                        {issue.dependencies && issue.dependencies.length > 0 && (
                          <div>
                            <h5 className="text-orange-400 font-medium mb-2 flex items-center gap-2">
                              <RefreshCw className="w-4 h-4" /> Dependencies
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {issue.dependencies.map((dep, idx) => (
                                <span key={idx} className="px-2 py-1 bg-orange-500/10 text-orange-300 rounded text-sm font-mono">
                                  {dep.toUpperCase()}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* By Priority Tab */}
        {activeTab === 'by-priority' && (
          <div className="space-y-8">
            {/* Critical */}
            <div>
              <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5" /> Critical Priority ({criticalIssues.length})
              </h3>
              <div className="space-y-3">
                {criticalIssues.map(issue => (
                  <div key={issue.id} className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-red-400">{issue.id.toUpperCase()}</span>
                        <span className="text-white font-medium">{issue.title}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{issue.deadline}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{issue.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* High */}
            <div>
              <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" /> High Priority ({issues.filter(i => i.priority === 'high').length})
              </h3>
              <div className="space-y-3">
                {issues.filter(i => i.priority === 'high').map(issue => (
                  <div key={issue.id} className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-orange-400">{issue.id.toUpperCase()}</span>
                        <span className="text-white font-medium">{issue.title}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{issue.deadline}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{issue.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Medium */}
            <div>
              <h3 className="text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
                <Flag className="w-5 h-5" /> Medium Priority ({issues.filter(i => i.priority === 'medium').length})
              </h3>
              <div className="space-y-3">
                {issues.filter(i => i.priority === 'medium').map(issue => (
                  <div key={issue.id} className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-yellow-400">{issue.id.toUpperCase()}</span>
                        <span className="text-white font-medium">{issue.title}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{issue.deadline}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{issue.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Action Plan Tab */}
        {activeTab === 'action-plan' && (
          <div className="space-y-8">
            {/* Week 1 */}
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl border border-green-500/30 p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5" /> Week 1: Feb 4-10 (TESTING & SOFT LAUNCH)
              </h3>
              <p className="text-gray-400 mb-4">Focus: Beta Testing + Merchant Conversion + Marketing Setup</p>
              <div className="space-y-3">
                {[
                  { task: '✅ Product complete - Begin internal testing', owner: 'CTO + Devs', dept: 'ceo', done: true },
                  { task: 'Deploy beta to TestFlight/Play Store', owner: 'CTO', dept: 'ceo', done: false },
                  { task: 'Call top 10 LOI merchants, schedule onboarding', owner: 'BDA + Founder', dept: 'coo', done: false },
                  { task: 'Send contracts to 10 merchants', owner: 'BDA', dept: 'coo', done: false },
                  { task: 'Launch Instagram + TikTok accounts', owner: 'CMO + Designer', dept: 'cmo', done: false },
                  { task: 'Create first week of social content', owner: 'Designer + CMO', dept: 'cmo', done: false },
                  { task: 'Set up QuickBooks and connect bank accounts', owner: 'Founder', dept: 'cfo', done: false },
                ].map((item, idx) => (
                  <div key={idx} className={`flex items-center gap-3 p-3 rounded-lg ${item.done ? 'bg-green-500/10' : 'bg-white/5'}`}>
                    <input type="checkbox" className="w-5 h-5 rounded border-gray-600" defaultChecked={item.done} />
                    <div className="flex-1">
                      <p className={item.done ? 'text-green-400' : 'text-white'}>{item.task}</p>
                      <p className="text-gray-500 text-sm">Owner: {item.owner}</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-400">{item.dept.toUpperCase()}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Week 2 */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/30 p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5" /> Week 2: Feb 11-17 (PUBLIC BETA)
              </h3>
              <p className="text-gray-400 mb-4">Focus: Launch Public Beta + First Transactions</p>
              <div className="space-y-3">
                {[
                  { task: 'Go live with first 5 merchants', owner: 'BDA + Founder', dept: 'coo' },
                  { task: 'Invite 50 beta users (friends/family)', owner: 'Full Team', dept: 'ceo' },
                  { task: 'Complete 10 test transactions', owner: 'CTO + Devs', dept: 'coo' },
                  { task: 'Set up WhatsApp support channel', owner: 'CHRO', dept: 'coo' },
                  { task: 'Launch first influencer partnerships', owner: 'CMO', dept: 'cmo' },
                  { task: 'Calculate exact cash runway', owner: 'Founder', dept: 'cfo' },
                  { task: 'Post daily on social media', owner: 'CMO + Designer', dept: 'cmo' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <input type="checkbox" className="w-5 h-5 rounded border-gray-600" />
                    <div className="flex-1">
                      <p className="text-white">{item.task}</p>
                      <p className="text-gray-500 text-sm">Owner: {item.owner}</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-400">{item.dept.toUpperCase()}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Week 3 */}
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/30 p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5" /> Week 3: Feb 18-24 (SCALE)
              </h3>
              <p className="text-gray-400 mb-4">Focus: Scale Merchants + User Growth + Viral Mechanics</p>
              <div className="space-y-3">
                {[
                  { task: 'Onboard remaining 22 LOI merchants', owner: 'BDA', dept: 'coo' },
                  { task: 'Reach 200 active users', owner: 'CMO + Full Team', dept: 'ceo' },
                  { task: 'Implement referral program in app', owner: 'CTO + Devs', dept: 'cmo' },
                  { task: 'Define company values & culture doc', owner: 'CHRO + Founder', dept: 'chro' },
                  { task: 'Start measuring real unit economics', owner: 'Founder', dept: 'cfo' },
                  { task: 'Create P&L from first 2 weeks data', owner: 'Founder', dept: 'cfo' },
                  { task: 'Run paid social ads pilot (AED 500)', owner: 'CMO + Designer', dept: 'cmo' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <input type="checkbox" className="w-5 h-5 rounded border-gray-600" />
                    <div className="flex-1">
                      <p className="text-white">{item.task}</p>
                      <p className="text-gray-500 text-sm">Owner: {item.owner}</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-400">{item.dept.toUpperCase()}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Week 4 */}
            <div className="bg-gradient-to-r from-[#c9a227]/10 to-yellow-500/10 rounded-xl border border-[#c9a227]/30 p-6">
              <h3 className="text-xl font-bold text-[#c9a227] mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5" /> Week 4: Feb 25-Mar 3 (PROVE & FUNDRAISE)
              </h3>
              <p className="text-gray-400 mb-4">Focus: Prove Unit Economics + Prepare Pre-Seed Raise</p>
              <div className="space-y-3">
                {[
                  { task: 'Reach 500 users, 100 transactions', owner: 'Full Team', dept: 'ceo' },
                  { task: 'Have 30+ live merchants', owner: 'BDA', dept: 'coo' },
                  { task: 'Document team structure & roles', owner: 'CHRO', dept: 'chro' },
                  { task: 'Complete 3-year financial model', owner: 'Founder', dept: 'cfo' },
                  { task: 'Update pitch deck with real traction', owner: 'Founder + Designer', dept: 'ceo' },
                  { task: 'Schedule 10 investor meetings', owner: 'Founder', dept: 'ceo' },
                  { task: 'Build data room for due diligence', owner: 'Founder', dept: 'cfo' },
                  { task: 'Launch Nuqta Savers WhatsApp community', owner: 'CMO', dept: 'cmo' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <input type="checkbox" className="w-5 h-5 rounded border-gray-600" />
                    <div className="flex-1">
                      <p className="text-white">{item.task}</p>
                      <p className="text-gray-500 text-sm">Owner: {item.owner}</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-400">{item.dept.toUpperCase()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <GlobalFooter />
    </div>
  );
}
