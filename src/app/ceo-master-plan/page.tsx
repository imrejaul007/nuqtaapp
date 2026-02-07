'use client';

import React, { useState } from 'react';
import {
  Crown,
  Target,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowRight,
  DollarSign,
  Users,
  Building2,
  Rocket,
  Shield,
  Lightbulb,
  Calendar,
  Clock,
  Flag,
  Star,
  Award,
  Briefcase,
  Globe,
  Heart,
  Zap,
  Eye,
  MessageSquare,
  FileText,
  BarChart3,
  PieChart,
  Phone,
  Mail,
  MapPin,
  Handshake,
  Settings,
  Play,
  ChevronRight,
  ChevronDown,
  Store,
  Megaphone,
  UserCircle,
  Calculator,
  Timer,
  TrendingDown,
  Percent
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

/**
 * CEO MASTER PLAN & EXECUTION ROADMAP
 * ===================================
 * Created: February 6, 2026
 * Launch Date: March 1, 2026 (23 days)
 *
 * This is the definitive CEO playbook for Nuqta's launch and growth.
 */

type SectionId = 'executive' | 'situation' | 'priorities' | 'week-by-week' | 'metrics' | 'risks';

const sections = [
  { id: 'executive', label: 'Executive Summary', icon: Crown },
  { id: 'situation', label: 'Current Situation', icon: Eye },
  { id: 'priorities', label: 'Top 10 Priorities', icon: Target },
  { id: 'week-by-week', label: 'Week-by-Week Plan', icon: Calendar },
  { id: 'metrics', label: 'Success Metrics', icon: BarChart3 },
  { id: 'risks', label: 'Risks & Mitigation', icon: Shield },
];

export default function CEOMasterPlanPage() {
  const [activeSection, setActiveSection] = useState<SectionId>('executive');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const daysToLaunch = 23;
  const launchDate = 'March 1, 2026';

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2a4a] to-[#0a1628]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#c9a227]/30 to-[#c9a227]/10 border-b border-[#c9a227]/30">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#c9a227] to-[#8B7355] flex items-center justify-center shadow-xl">
              <Crown size={48} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-white">CEO Master Plan</h1>
                <span className="px-3 py-1 bg-[#c9a227]/20 text-[#c9a227] rounded-full text-sm border border-[#c9a227]/30">
                  Launch Countdown
                </span>
              </div>
              <p className="text-[#c9a227] text-lg">Nuqta Launch & Growth Execution Roadmap</p>
              <p className="text-slate-400 mt-2">Definitive playbook for March 1, 2026 launch and beyond</p>
            </div>
            <div className="text-right">
              <div className="bg-[#c9a227]/20 rounded-xl p-4 border border-[#c9a227]/30">
                <p className="text-slate-400 text-sm">Days to Launch</p>
                <p className="text-5xl font-bold text-[#c9a227]">{daysToLaunch}</p>
                <p className="text-white text-sm mt-1">{launchDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-[#0a1628]/80 backdrop-blur-sm border-b border-white/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id as SectionId)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
                  activeSection === section.id
                    ? 'bg-[#c9a227]/20 text-[#c9a227] border border-[#c9a227]/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <section.icon size={16} />
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 pb-32">
        {activeSection === 'executive' && <ExecutiveSummary />}
        {activeSection === 'situation' && <CurrentSituation />}
        {activeSection === 'priorities' && <TopPriorities />}
        {activeSection === 'week-by-week' && <WeekByWeekPlan />}
        {activeSection === 'metrics' && <SuccessMetrics />}
        {activeSection === 'risks' && <RisksAndMitigation />}
      </div>

      <GlobalFooter />
    </div>
  );
}

function ExecutiveSummary() {
  return (
    <div className="space-y-8">
      {/* CEO Message */}
      <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/10 rounded-2xl p-8 border border-[#c9a227]/30">
        <div className="flex items-start gap-4">
          <Crown size={32} className="text-[#c9a227] flex-shrink-0" />
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">CEO Executive Summary</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              After comprehensive analysis of our entire operation, we are in an exceptional position for launch.
              Product is 100% complete, team of 8 is hired, and March 1 launch date is set. We have moved from
              "preparation mode" to "execution mode."
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-[#c9a227]">The next 23 days will define our first year.</strong> Three things matter:
              (1) Close at least one investor before launch, (2) Convert 10+ LOIs to live merchants,
              (3) Build Founders Circle to 100 users for Day 1 traction.
            </p>
          </div>
        </div>
      </div>

      {/* Key Stats Grid */}
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { label: 'Product Status', value: '100%', subtitle: 'Complete', color: 'green', icon: CheckCircle },
          { label: 'Team Size', value: '8', subtitle: 'Members', color: 'green', icon: Users },
          { label: 'Days to Launch', value: '23', subtitle: 'March 1, 2026', color: 'yellow', icon: Calendar },
          { label: 'LOIs Signed', value: '32', subtitle: 'Ready to convert', color: 'blue', icon: Store },
        ].map((stat, idx) => (
          <div key={idx} className={`p-6 rounded-xl border ${
            stat.color === 'green' ? 'bg-green-500/10 border-green-500/30' :
            stat.color === 'yellow' ? 'bg-yellow-500/10 border-yellow-500/30' :
            'bg-blue-500/10 border-blue-500/30'
          }`}>
            <stat.icon size={24} className={
              stat.color === 'green' ? 'text-green-400' :
              stat.color === 'yellow' ? 'text-yellow-400' : 'text-blue-400'
            } />
            <p className="text-4xl font-bold text-white mt-2">{stat.value}</p>
            <p className="text-slate-400 text-sm">{stat.label}</p>
            <p className={`text-sm mt-1 ${
              stat.color === 'green' ? 'text-green-400' :
              stat.color === 'yellow' ? 'text-yellow-400' : 'text-blue-400'
            }`}>{stat.subtitle}</p>
          </div>
        ))}
      </div>

      {/* The Mission */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <Target size={24} className="text-[#c9a227]" />
          The Mission
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-[#c9a227] font-bold mb-2">What We're Building</p>
            <p className="text-slate-300 leading-relaxed">
              Nuqta is the UAE's first universal loyalty platform that bridges social content + physical commerce.
              Users earn cashback (Nuqta Coins) at any merchant, plus bonus rewards for sharing on social media.
              Merchants pay only on actual sales - a true performance marketing model.
            </p>
          </div>
          <div>
            <p className="text-[#c9a227] font-bold mb-2">Why Now</p>
            <p className="text-slate-300 leading-relaxed">
              95% of offline spending in UAE gets zero rewards. Merchants waste 25% of revenue on Instagram ads
              with zero attribution. We solve both problems with a single platform. First-mover window: 18 months
              before Careem/Noon can copy without cannibalizing their own business.
            </p>
          </div>
        </div>
      </div>

      {/* Business Model Summary */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Zap className="text-yellow-400" size={20} />
            Engine A: High-Margin (15%)
          </h4>
          <p className="text-slate-400 text-sm mb-4">Cafes, Restaurants, Salons, Fitness</p>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Nuqta Revenue</span>
              <span className="text-[#c9a227]">5%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">User Cashback</span>
              <span className="text-green-400">5%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Social Bonus (if shared)</span>
              <span className="text-blue-400">5%</span>
            </div>
          </div>
        </div>

        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Store className="text-blue-400" size={20} />
            Engine B: Low-Margin (5%)
          </h4>
          <p className="text-slate-400 text-sm mb-4">Grocery, Supermarkets, Gold</p>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Nuqta Revenue</span>
              <span className="text-[#c9a227]">3%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">User Cashback</span>
              <span className="text-green-400">2%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">+ Brand Coins</span>
              <span className="text-purple-400">3-5%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Unit Economics */}
      <div className="bg-gradient-to-r from-green-500/10 to-green-500/5 rounded-2xl p-8 border border-green-500/30">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <DollarSign size={24} className="text-green-400" />
          Unit Economics (Validated)
        </h3>
        <div className="grid md:grid-cols-5 gap-6">
          {[
            { metric: 'LTV:CAC', value: '16.8x', target: '10x+', status: 'excellent' },
            { metric: 'LTV', value: 'AED 504', target: 'AED 300+', status: 'excellent' },
            { metric: 'CAC', value: 'AED 30', target: 'AED 50', status: 'good' },
            { metric: 'AOV', value: 'AED 100', target: 'AED 80+', status: 'good' },
            { metric: 'Take Rate', value: '8%', target: '5-15%', status: 'optimal' },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <p className="text-3xl font-bold text-white">{item.value}</p>
              <p className="text-[#c9a227] font-medium">{item.metric}</p>
              <p className="text-slate-500 text-xs mt-1">Target: {item.target}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CurrentSituation() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-[#c9a227]/10 to-[#c9a227]/5 rounded-2xl p-8 border border-[#c9a227]/30">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Eye size={28} className="text-[#c9a227]" />
          Current Situation Analysis
        </h2>
        <p className="text-slate-300 text-lg">
          Comprehensive assessment of where Nuqta stands as of February 6, 2026 - 23 days before launch.
        </p>
      </div>

      {/* Scorecard */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Company Readiness Scorecard</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {[
              { area: 'Product Development', score: 100, status: 'COMPLETE', color: 'green' },
              { area: 'Team Hired', score: 100, status: '8 Members', color: 'green' },
              { area: 'Business Model', score: 95, status: 'Validated', color: 'green' },
              { area: 'Marketing Strategy', score: 90, status: 'Bible Complete', color: 'green' },
              { area: 'Launch Readiness', score: 85, status: 'March 1 Set', color: 'green' },
              { area: 'Investor Pipeline', score: 75, status: '50+ Targets', color: 'blue' },
              { area: 'LOI Conversion', score: 30, status: 'In Progress', color: 'yellow' },
              { area: 'Funding Closed', score: 0, status: 'Not Yet', color: 'red' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-40 text-slate-300 text-sm">{item.area}</div>
                <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      item.color === 'green' ? 'bg-green-500' :
                      item.color === 'blue' ? 'bg-blue-500' :
                      item.color === 'yellow' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${item.score}%` }}
                  />
                </div>
                <div className={`w-28 text-sm font-medium ${
                  item.color === 'green' ? 'text-green-400' :
                  item.color === 'blue' ? 'text-blue-400' :
                  item.color === 'yellow' ? 'text-yellow-400' : 'text-red-400'
                }`}>
                  {item.status}
                </div>
              </div>
            ))}
          </div>
          <div className="p-6 bg-[#c9a227]/10 rounded-xl border border-[#c9a227]/30">
            <h4 className="text-[#c9a227] font-bold mb-4">Overall Assessment</h4>
            <div className="flex items-center gap-4 mb-4">
              <div className="text-6xl font-bold text-[#c9a227]">A</div>
              <div>
                <p className="text-white font-medium text-lg">Launch Ready</p>
                <p className="text-slate-400">Focus: Funding + Merchant Activation</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm">
              Exceptional progress. All foundational elements in place. Now entering execution phase.
              Critical path: Convert LOIs and close funding within 30 days.
            </p>
          </div>
        </div>
      </div>

      {/* Team Structure */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <Users size={24} className="text-[#c9a227]" />
          Current Team (8 Members)
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { role: 'CEO', name: 'Founder', focus: 'Strategy, Fundraising, Partnerships', icon: Crown, color: 'yellow' },
            { role: 'CTO', name: 'Hired', focus: 'Product, Technology, Engineering', icon: Settings, color: 'blue' },
            { role: 'CMO', name: 'Hired', focus: 'Marketing, Brand, Growth', icon: Megaphone, color: 'pink' },
            { role: 'CHRO', name: 'Hired', focus: 'People, Culture, HR', icon: UserCircle, color: 'teal' },
            { role: 'Developer 1', name: 'Hired', focus: 'Frontend Development', icon: Settings, color: 'purple' },
            { role: 'Developer 2', name: 'Hired', focus: 'Backend Development', icon: Settings, color: 'purple' },
            { role: 'BDA', name: 'Hired', focus: 'Merchant Acquisition', icon: Handshake, color: 'green' },
            { role: 'Designer', name: 'Hired', focus: 'UI/UX, Brand Assets', icon: Star, color: 'orange' },
          ].map((member, idx) => (
            <div key={idx} className={`p-4 rounded-xl border ${
              member.color === 'yellow' ? 'bg-yellow-500/10 border-yellow-500/30' :
              member.color === 'blue' ? 'bg-blue-500/10 border-blue-500/30' :
              member.color === 'pink' ? 'bg-pink-500/10 border-pink-500/30' :
              member.color === 'teal' ? 'bg-teal-500/10 border-teal-500/30' :
              member.color === 'purple' ? 'bg-purple-500/10 border-purple-500/30' :
              member.color === 'green' ? 'bg-green-500/10 border-green-500/30' :
              'bg-orange-500/10 border-orange-500/30'
            }`}>
              <member.icon size={20} className={
                member.color === 'yellow' ? 'text-yellow-400' :
                member.color === 'blue' ? 'text-blue-400' :
                member.color === 'pink' ? 'text-pink-400' :
                member.color === 'teal' ? 'text-teal-400' :
                member.color === 'purple' ? 'text-purple-400' :
                member.color === 'green' ? 'text-green-400' : 'text-orange-400'
              } />
              <p className="text-white font-bold mt-2">{member.role}</p>
              <p className="text-slate-500 text-xs">{member.name}</p>
              <p className="text-slate-400 text-xs mt-1">{member.focus}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What's Done vs What's Needed */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/30">
          <h3 className="text-green-400 font-bold text-lg mb-4 flex items-center gap-2">
            <CheckCircle size={20} />
            Completed
          </h3>
          <ul className="space-y-3">
            {[
              'Product 100% complete and ready for launch',
              'Full team of 8 members hired',
              'Marketing Bible with 21 sections complete',
              'Financial models and projections done',
              '32 merchant LOIs signed',
              'Investor materials (5+ deck versions) ready',
              '50+ investor pipeline identified',
              'March 1 launch date publicly committed',
            ].map((item, idx) => (
              <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                <CheckCircle size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-yellow-500/10 rounded-2xl p-6 border border-yellow-500/30">
          <h3 className="text-yellow-400 font-bold text-lg mb-4 flex items-center gap-2">
            <Clock size={20} />
            Critical Path (23 Days)
          </h3>
          <ul className="space-y-3">
            {[
              'Convert 10+ LOIs to live merchants',
              'Build Founders Circle to 100 users',
              'Close at least 1 investor (AED 500K+)',
              'Set up support infrastructure (WhatsApp, email)',
              'Execute 14-day pre-launch marketing campaign',
              'Complete merchant training for first 10',
              'Run beta test with 50 users',
              'Prepare launch day operations runbook',
            ].map((item, idx) => (
              <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                <ArrowRight size={14} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function TopPriorities() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-[#c9a227]/10 to-[#c9a227]/5 rounded-2xl p-8 border border-[#c9a227]/30">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Target size={28} className="text-[#c9a227]" />
          Top 10 Priorities for the Next 30 Days
        </h2>
        <p className="text-slate-300 text-lg">
          Ranked by impact and urgency. Execute in order. No deviations.
        </p>
      </div>

      <div className="space-y-4">
        {[
          {
            rank: 1,
            title: 'Convert 10+ LOIs to Live Merchants',
            owner: 'BDA + CEO',
            deadline: 'Feb 28',
            why: 'Launch without merchants = failed launch. Users need places to transact.',
            how: [
              'BDA calls each LOI merchant personally TODAY',
              'Send contracts within 24 hours of call',
              'Offer 30-day fee waiver for first merchants',
              'Complete onboarding in single 1-hour session',
              'Target: 5 by Feb 15, 10 by Feb 28'
            ],
            metric: '10+ live merchants by launch',
            severity: 'critical'
          },
          {
            rank: 2,
            title: 'Close First Investor ($500K+)',
            owner: 'CEO',
            deadline: 'Mar 15',
            why: 'Creates momentum, validates company, funds growth.',
            how: [
              'Identify top 5 warm investors from pipeline',
              'Schedule meetings for next 2 weeks',
              'Prepare "closing" deck (not pitch, close)',
              'Offer early-bird terms (25% discount)',
              'Create urgency: "Closing round by March 15"'
            ],
            metric: 'AED 2M+ committed by Mar 15',
            severity: 'critical'
          },
          {
            rank: 3,
            title: 'Build Founders Circle to 100 Users',
            owner: 'CMO',
            deadline: 'Mar 1',
            why: 'Day 1 traction proves product-market fit.',
            how: [
              'Launch waitlist landing page',
              'Personal invites from all team members (10 each = 80)',
              'WhatsApp group for early adopters',
              'Exclusive benefits: 2x cashback for 30 days',
              'Referral incentive: Invite 3 friends = AED 50 bonus'
            ],
            metric: '100 users signed up before launch',
            severity: 'high'
          },
          {
            rank: 4,
            title: 'Execute 14-Day Pre-Launch Campaign',
            owner: 'CMO + Designer',
            deadline: 'Feb 15 - Mar 1',
            why: 'Build anticipation, create buzz, generate signups.',
            how: [
              'Launch Instagram/TikTok accounts',
              'Daily content: countdown, merchant reveals, team stories',
              'Partner with 5 micro-influencers',
              'Run "Founding Users" exclusive access campaign',
              'Email drip to waitlist with launch updates'
            ],
            metric: '1K followers, 100 signups',
            severity: 'high'
          },
          {
            rank: 5,
            title: 'Set Up Support Infrastructure',
            owner: 'CHRO',
            deadline: 'Feb 25',
            why: 'First issues on launch day need immediate response.',
            how: [
              'Set up WhatsApp Business account',
              'Create support@nuqta.ae email',
              'Document top 20 FAQ responses',
              'Set up Freshdesk free tier for ticketing',
              'Define SLAs: 1 hour merchant, 2 hour user'
            ],
            metric: 'Support infrastructure ready',
            severity: 'high'
          },
          {
            rank: 6,
            title: 'Complete Merchant Training for First 10',
            owner: 'COO/BDA',
            deadline: 'Feb 28',
            why: 'Untrained staff = failed transactions = bad user experience.',
            how: [
              'Create 30-minute training video',
              'Print QR code tent cards for each merchant',
              'Visit each merchant for in-person training',
              'Do test transaction at each location',
              'Leave quick-reference guide with staff'
            ],
            metric: 'All 10 merchants trained',
            severity: 'medium'
          },
          {
            rank: 7,
            title: 'Run Beta Test with 50 Users',
            owner: 'CTO + CEO',
            deadline: 'Feb 20 - Feb 28',
            why: 'Find bugs before public launch.',
            how: [
              'Invite 50 friends/family as beta testers',
              'Each must complete at least 1 transaction',
              'Collect feedback via short survey',
              'Fix critical bugs within 24 hours',
              'NPS target: 40+'
            ],
            metric: '50 beta users, 50 transactions',
            severity: 'medium'
          },
          {
            rank: 8,
            title: 'Prepare Launch Day Operations Runbook',
            owner: 'COO/CHRO',
            deadline: 'Feb 28',
            why: 'Launch day chaos kills companies. Be prepared.',
            how: [
              'Document on-call schedule for March 1',
              'Create escalation matrix for issues',
              'Set up real-time monitoring dashboard',
              'Prepare rollback plan if critical failures',
              'Schedule war room for 6 AM - 10 PM'
            ],
            metric: 'Runbook complete, team aligned',
            severity: 'medium'
          },
          {
            rank: 9,
            title: 'Geographic Density: Marina, JBR, Downtown',
            owner: 'BDA',
            deadline: 'Ongoing',
            why: 'Users need 5+ nearby merchants to see value.',
            how: [
              'Prioritize LOIs in these 3 areas',
              'Marina: 5 merchants',
              'JBR: 3 merchants',
              'Downtown: 2 merchants',
              'Create walking-distance merchant clusters'
            ],
            metric: '10 merchants across 3 areas',
            severity: 'medium'
          },
          {
            rank: 10,
            title: 'Define Post-Launch Growth Playbook',
            owner: 'CEO + CMO',
            deadline: 'Mar 5',
            why: 'Day 1 is just the beginning. Need momentum plan.',
            how: [
              'Week 1: Rapid issue resolution, 100 transactions',
              'Week 2: 500 users, 10 more merchants',
              'Week 3: First revenue milestone (AED 10K GMV)',
              'Week 4: Investor update with traction data',
              'Month 2: Scale to 1,000 users'
            ],
            metric: 'Playbook documented',
            severity: 'low'
          },
        ].map((priority) => (
          <div key={priority.rank} className={`rounded-2xl p-6 border ${
            priority.severity === 'critical' ? 'bg-red-500/10 border-red-500/30' :
            priority.severity === 'high' ? 'bg-yellow-500/10 border-yellow-500/30' :
            'bg-blue-500/10 border-blue-500/30'
          }`}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${
                  priority.severity === 'critical' ? 'bg-red-500 text-white' :
                  priority.severity === 'high' ? 'bg-yellow-500 text-black' :
                  'bg-blue-500 text-white'
                }`}>
                  {priority.rank}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{priority.title}</h3>
                  <p className="text-slate-400 text-sm">Owner: {priority.owner} | Deadline: {priority.deadline}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                priority.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                priority.severity === 'high' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-blue-500/20 text-blue-400'
              }`}>
                {priority.severity.toUpperCase()}
              </span>
            </div>

            <p className="text-slate-300 text-sm mb-4 p-3 bg-white/5 rounded-lg">
              <strong>Why:</strong> {priority.why}
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-[#c9a227] font-medium text-sm mb-2">How to Execute:</p>
                <ul className="space-y-1">
                  {priority.how.map((step, idx) => (
                    <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                      <ChevronRight size={12} className="text-[#c9a227] mt-1 flex-shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-end">
                <div className="p-4 bg-white/5 rounded-xl w-full">
                  <p className="text-slate-400 text-xs">Success Metric</p>
                  <p className="text-white font-bold">{priority.metric}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WeekByWeekPlan() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-[#c9a227]/10 to-[#c9a227]/5 rounded-2xl p-8 border border-[#c9a227]/30">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Calendar size={28} className="text-[#c9a227]" />
          Week-by-Week Execution Plan
        </h2>
        <p className="text-slate-300 text-lg">
          Detailed breakdown from Feb 6 to March 15 (5 weeks). Each week has specific deliverables.
        </p>
      </div>

      <div className="grid gap-6">
        {[
          {
            week: 'Week 1',
            dates: 'Feb 6 - Feb 12',
            theme: 'Merchant Activation Sprint',
            kpi: '5 merchants signed, 50 Founders Circle',
            tasks: [
              { task: 'BDA calls all 32 LOI merchants', owner: 'BDA', status: 'priority' },
              { task: 'Send contracts to top 10', owner: 'BDA', status: 'priority' },
              { task: 'CEO investor meetings (3)', owner: 'CEO', status: 'priority' },
              { task: 'Launch Founders Circle signup', owner: 'CMO', status: 'priority' },
              { task: 'Set up social media accounts', owner: 'CMO', status: 'normal' },
              { task: 'Set up WhatsApp Business', owner: 'CHRO', status: 'normal' },
            ]
          },
          {
            week: 'Week 2',
            dates: 'Feb 13 - Feb 19',
            theme: 'Beta Launch & Testing',
            kpi: '10 merchants signed, beta test started',
            tasks: [
              { task: 'Sign remaining 5 merchants', owner: 'BDA', status: 'priority' },
              { task: 'Launch beta with 50 users', owner: 'CTO', status: 'priority' },
              { task: 'Begin merchant onboarding visits', owner: 'BDA', status: 'priority' },
              { task: 'Start 14-day pre-launch campaign', owner: 'CMO', status: 'priority' },
              { task: 'CEO investor meetings (3 more)', owner: 'CEO', status: 'normal' },
              { task: 'Complete support FAQ docs', owner: 'CHRO', status: 'normal' },
            ]
          },
          {
            week: 'Week 3',
            dates: 'Feb 20 - Feb 26',
            theme: 'Final Preparations',
            kpi: '10 merchants live, 100 Founders Circle',
            tasks: [
              { task: 'Complete all merchant training', owner: 'BDA', status: 'priority' },
              { task: 'Fix all beta bugs', owner: 'CTO', status: 'priority' },
              { task: 'Finalize launch day runbook', owner: 'CHRO', status: 'priority' },
              { task: 'Ramp up social content', owner: 'CMO', status: 'normal' },
              { task: 'Send investor term sheets', owner: 'CEO', status: 'normal' },
              { task: 'Test all payment flows', owner: 'CTO', status: 'priority' },
            ]
          },
          {
            week: 'Week 4',
            dates: 'Feb 27 - Mar 5',
            theme: 'LAUNCH WEEK',
            kpi: 'March 1 launch, 200 users, 100 transactions',
            tasks: [
              { task: 'Final system check (Feb 28)', owner: 'CTO', status: 'priority' },
              { task: 'Launch day war room (Mar 1)', owner: 'All', status: 'priority' },
              { task: 'Monitor metrics hourly', owner: 'CEO', status: 'priority' },
              { task: 'Push social announcement', owner: 'CMO', status: 'priority' },
              { task: 'On-call support coverage', owner: 'CHRO', status: 'priority' },
              { task: 'Rapid bug fixes if needed', owner: 'CTO', status: 'priority' },
            ]
          },
          {
            week: 'Week 5',
            dates: 'Mar 6 - Mar 15',
            theme: 'Post-Launch Growth',
            kpi: '500 users, AED 10K GMV, funding close',
            tasks: [
              { task: 'Close first investor', owner: 'CEO', status: 'priority' },
              { task: 'Onboard 10 more merchants', owner: 'BDA', status: 'priority' },
              { task: 'Scale to 500 users', owner: 'CMO', status: 'priority' },
              { task: 'First merchant success stories', owner: 'CMO', status: 'normal' },
              { task: 'Investor update with traction', owner: 'CEO', status: 'normal' },
              { task: 'Hire first support agent', owner: 'CHRO', status: 'normal' },
            ]
          },
        ].map((week, idx) => (
          <div key={idx} className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-[#c9a227]/20 text-[#c9a227] rounded-lg font-bold">
                    {week.week}
                  </span>
                  <span className="text-slate-400 text-sm">{week.dates}</span>
                </div>
                <h3 className="text-white font-bold text-xl mt-2">{week.theme}</h3>
              </div>
              <div className="text-right">
                <p className="text-slate-400 text-xs">Week KPI</p>
                <p className="text-[#c9a227] font-medium">{week.kpi}</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {week.tasks.map((task, tIdx) => (
                <div key={tIdx} className={`p-3 rounded-lg ${
                  task.status === 'priority' ? 'bg-[#c9a227]/10 border border-[#c9a227]/30' : 'bg-white/5'
                }`}>
                  <p className="text-white text-sm font-medium">{task.task}</p>
                  <p className="text-slate-500 text-xs mt-1">Owner: {task.owner}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SuccessMetrics() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-[#c9a227]/10 to-[#c9a227]/5 rounded-2xl p-8 border border-[#c9a227]/30">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <BarChart3 size={28} className="text-[#c9a227]" />
          Success Metrics Dashboard
        </h2>
        <p className="text-slate-300 text-lg">
          These are the KPIs that matter. Track daily. Report weekly.
        </p>
      </div>

      {/* Launch Day Metrics */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Launch Day (March 1) Targets</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { metric: 'Live Merchants', target: '10+', current: '0', status: 'pending' },
            { metric: 'Founders Circle', target: '100', current: '0', status: 'pending' },
            { metric: 'Day 1 Transactions', target: '50+', current: '-', status: 'pending' },
            { metric: 'Day 1 GMV', target: 'AED 5K+', current: '-', status: 'pending' },
          ].map((kpi, idx) => (
            <div key={idx} className="p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
              <p className="text-slate-400 text-sm">{kpi.metric}</p>
              <div className="flex items-end gap-2 mt-1">
                <span className="text-3xl font-bold text-white">{kpi.target}</span>
              </div>
              <p className="text-yellow-400 text-xs mt-2">Target</p>
            </div>
          ))}
        </div>
      </div>

      {/* 30-Day Metrics */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">30-Day Targets (March 1-30)</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { metric: 'Active Users', target: '1,000', color: 'green' },
            { metric: 'Live Merchants', target: '25+', color: 'blue' },
            { metric: 'Total Transactions', target: '500+', color: 'purple' },
            { metric: 'GMV', target: 'AED 50K+', color: 'yellow' },
            { metric: 'D30 Retention', target: '30%+', color: 'green' },
            { metric: 'NPS Score', target: '40+', color: 'blue' },
            { metric: 'Social Shares', target: '100+', color: 'pink' },
            { metric: 'Funding Closed', target: 'AED 2M+', color: 'yellow' },
          ].map((kpi, idx) => (
            <div key={idx} className={`p-4 rounded-xl border ${
              kpi.color === 'green' ? 'bg-green-500/10 border-green-500/30' :
              kpi.color === 'blue' ? 'bg-blue-500/10 border-blue-500/30' :
              kpi.color === 'purple' ? 'bg-purple-500/10 border-purple-500/30' :
              kpi.color === 'pink' ? 'bg-pink-500/10 border-pink-500/30' :
              'bg-yellow-500/10 border-yellow-500/30'
            }`}>
              <p className="text-slate-400 text-sm">{kpi.metric}</p>
              <p className="text-3xl font-bold text-white mt-1">{kpi.target}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 90-Day Milestones */}
      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">90-Day Milestones (Q2 2026)</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              period: 'Month 1 (Mar)',
              milestones: [
                { item: '1,000 active users', critical: true },
                { item: '25 merchants live', critical: true },
                { item: 'AED 50K GMV', critical: false },
                { item: 'SAFE round closed', critical: true },
              ]
            },
            {
              period: 'Month 2 (Apr)',
              milestones: [
                { item: '5,000 active users', critical: true },
                { item: '50 merchants live', critical: true },
                { item: 'AED 200K GMV', critical: false },
                { item: 'Team to 12 people', critical: false },
              ]
            },
            {
              period: 'Month 3 (May)',
              milestones: [
                { item: '15,000 active users', critical: true },
                { item: '250 merchants live', critical: true },
                { item: 'AED 1M GMV', critical: false },
                { item: 'Series A prep started', critical: false },
              ]
            },
          ].map((period, idx) => (
            <div key={idx} className="p-6 bg-white/5 rounded-xl">
              <h4 className="text-[#c9a227] font-bold text-lg mb-4">{period.period}</h4>
              <div className="space-y-3">
                {period.milestones.map((milestone, mIdx) => (
                  <div key={mIdx} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      milestone.critical ? 'bg-[#c9a227]' : 'bg-white/20'
                    }`}>
                      <CheckCircle size={12} className="text-white" />
                    </div>
                    <span className={milestone.critical ? 'text-white font-medium' : 'text-slate-400'}>
                      {milestone.item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RisksAndMitigation() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-red-500/10 to-red-500/5 rounded-2xl p-8 border border-red-500/30">
        <h2 className="text-2xl font-bold text-red-400 mb-4 flex items-center gap-3">
          <Shield size={28} />
          Risk Assessment & Mitigation
        </h2>
        <p className="text-slate-300 text-lg">
          Top risks to monitor and contingency plans for each.
        </p>
      </div>

      <div className="space-y-6">
        {[
          {
            risk: 'Merchant Activation Fails (<5 live by launch)',
            probability: 30,
            impact: 9,
            mitigation: [
              'Offer 60-day fee waiver instead of 30',
              'CEO personally visits top 5 LOIs',
              'Guarantee minimum AED 10K in new customers or refund',
              'Focus on chains (1 contract = 10 locations)'
            ],
            contingency: 'Delay public launch by 1 week, do soft launch with 5 merchants'
          },
          {
            risk: 'Funding Round Doesn\'t Close by March 15',
            probability: 35,
            impact: 8,
            mitigation: [
              'Parallel track 10 investors (not just 5)',
              'Accept lower valuation for speed',
              'Consider SAFE notes for faster close',
              'Have bridge financing ready from angels'
            ],
            contingency: 'Bootstrap for 60 more days, prove traction, then raise at higher valuation'
          },
          {
            risk: 'Low User Retention (<20% D7)',
            probability: 40,
            impact: 7,
            mitigation: [
              'Daily push notifications with personalized offers',
              'Expiring coins (use in 7 days or lose)',
              'Gamification: daily streaks = bonus coins',
              'Increase cashback temporarily (10% → 15%)'
            ],
            contingency: 'Focus on merchant value (B2B) while fixing consumer retention'
          },
          {
            risk: 'Social Share Rate is Low (<10%)',
            probability: 50,
            impact: 5,
            mitigation: [
              'Make sharing easier (pre-written captions)',
              'Increase social bonus from 5% to 7%',
              'Add contest: best post wins AED 1,000',
              'Feature top posts in app'
            ],
            contingency: 'Pivot to referral-only model (no social requirement)'
          },
          {
            risk: 'Technical Issues on Launch Day',
            probability: 25,
            impact: 8,
            mitigation: [
              'Full load testing before launch',
              'Staged rollout (100 users, then 500, then all)',
              'CTO on-call 6 AM - midnight March 1',
              'Rollback plan documented'
            ],
            contingency: 'Immediately pause signups, fix issues, apologize with bonus coins'
          },
          {
            risk: 'Careem/Noon Announces Competing Product',
            probability: 20,
            impact: 6,
            mitigation: [
              'Speed is our moat - launch fast, iterate faster',
              'Focus on merchant relationships they can\'t replicate',
              'Build social layer they can\'t copy (owned ecosystem conflict)',
              'Lock in exclusive merchant deals'
            ],
            contingency: 'Differentiate on merchant success, not user acquisition'
          },
        ].map((risk, idx) => (
          <div key={idx} className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-white font-bold text-lg">{risk.risk}</h3>
              <div className="flex gap-4">
                <div className="text-center">
                  <p className="text-slate-500 text-xs">Probability</p>
                  <p className={`font-bold ${risk.probability >= 40 ? 'text-red-400' : 'text-yellow-400'}`}>
                    {risk.probability}%
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-slate-500 text-xs">Impact</p>
                  <p className={`font-bold ${risk.impact >= 8 ? 'text-red-400' : 'text-yellow-400'}`}>
                    {risk.impact}/10
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-green-400 font-medium text-sm mb-2">Mitigation Actions:</p>
                <ul className="space-y-2">
                  {risk.mitigation.map((action, aIdx) => (
                    <li key={aIdx} className="text-slate-300 text-sm flex items-start gap-2">
                      <Shield size={12} className="text-green-400 mt-1 flex-shrink-0" />
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
                <p className="text-yellow-400 font-medium text-sm mb-2">Contingency Plan:</p>
                <p className="text-slate-300 text-sm">{risk.contingency}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CEO Commitment */}
      <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/10 rounded-2xl p-8 border border-[#c9a227]/30">
        <div className="flex items-start gap-4">
          <Crown size={32} className="text-[#c9a227] flex-shrink-0" />
          <div>
            <h3 className="text-[#c9a227] font-bold text-xl mb-3">CEO Commitment</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              "This plan represents 23 days of focused execution. Every task has an owner. Every metric has a target.
              Every risk has a mitigation. There are no excuses - only results.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              March 1 is not just a launch date. It's a statement. We're ready to prove that Nuqta is the future
              of loyalty in the UAE. The foundation is built. The team is hired. The market is waiting.
            </p>
            <p className="text-white font-bold text-lg">
              Now we execute."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
