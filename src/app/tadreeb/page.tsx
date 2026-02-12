'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Shield, FileText, Globe, BarChart3, Users, Lock,
  ArrowRight, CheckCircle, ChevronDown, ChevronUp,
  Activity, DollarSign, Zap, AlertTriangle, Settings,
  Building2, Search, Eye, Brain, Bell,
  BookOpen, CreditCard, Star, Clock,
  TrendingUp, Layers, Award, MapPin, Briefcase,
  Code, Monitor, UserCheck, Heart,
  Crown, Store, Package, Target, Rocket,
  Calculator, Wallet, HeartHandshake,
  Network, Sparkles, GraduationCap, Video,
  Clipboard, Play, Trophy, BarChart2
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

const keyStats = [
  { label: 'Learning Modules', value: '7', suffix: 'categories', color: 'text-purple-400' },
  { label: 'Course Library', value: '500+', suffix: 'courses', color: 'text-blue-400' },
  { label: 'Compliance Training', value: '12', suffix: 'mandatory', color: 'text-red-400' },
  { label: 'Languages', value: '2', suffix: 'AR + EN', color: 'text-emerald-400' },
];

const learningModules = [
  {
    id: 'compliance', name: 'Compliance Training', arabic: 'تدريب الامتثال', icon: Shield,
    color: 'text-red-400', bgColor: 'bg-red-500/10', borderColor: 'border-red-500/30',
    description: 'Mandatory compliance training — AML/CFT, data privacy, HSE, fire safety, anti-bribery, food safety. Linked to Amana compliance tracking.',
    capabilities: ['AML/CFT training (CBUAE/SAMA required)', 'Data privacy (PDPL/GDPR) training', 'Health & Safety (HSE/OSHAD)', 'Fire safety & evacuation drills', 'Anti-bribery & ethics', 'Food safety (HACCP basics)', 'Shariah compliance awareness', 'Cybersecurity awareness training', 'Auto-enrollment from Amana requirements', 'Completion certificates for regulators'],
  },
  {
    id: 'onboarding', name: 'Employee Onboarding', arabic: 'تأهيل', icon: UserCheck,
    color: 'text-blue-400', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30',
    description: 'Structured onboarding programs for new hires. Company culture, policies, tools, and role-specific training paths.',
    capabilities: ['Day 1 onboarding checklist', 'Company culture & values program', 'Policy acknowledgment tracking', 'Tool & system training', 'Role-specific learning paths', 'Buddy/mentor assignment', '30/60/90 day milestones', 'Tawzeef HR integration'],
  },
  {
    id: 'skills', name: 'Skill Development', arabic: 'تطوير مهارات', icon: TrendingUp,
    color: 'text-emerald-400', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/30',
    description: 'Technical and soft skill courses. Leadership, communication, project management, data analytics, coding, and more.',
    capabilities: ['Technical skill courses (100+)', 'Soft skills (leadership, communication)', 'Project management (PMP, Agile)', 'Data analytics & AI basics', 'Coding & no-code tools', 'Language courses (Arabic/English)', 'Industry-specific training', 'Skill assessment & gap analysis'],
  },
  {
    id: 'certification', name: 'Certifications', arabic: 'شهادات', icon: Award,
    color: 'text-amber-400', bgColor: 'bg-amber-500/10', borderColor: 'border-amber-500/30',
    description: 'Professional certification preparation and tracking. CPA, PMP, CISA, ACAMS, AWS, and more. Expiry alerts for recertification.',
    capabilities: ['Certification prep courses', 'Practice exams & quizzes', 'Study plan generator', 'Expiry & recertification alerts', 'CPD/CPE hour tracking', 'Budget allocation per employee', 'External exam booking support', 'Digital certificate wallet'],
  },
  {
    id: 'content', name: 'Content Creation', arabic: 'إنشاء محتوى', icon: Video,
    color: 'text-pink-400', bgColor: 'bg-pink-500/10', borderColor: 'border-pink-500/30',
    description: 'Tools for internal subject matter experts to create courses, quizzes, and learning paths. SCORM/xAPI compatible.',
    capabilities: ['Drag-and-drop course builder', 'Video hosting & streaming', 'Quiz & assessment creator', 'Learning path designer', 'SCORM/xAPI import support', 'Multilingual content tools', 'Template library (50+)', 'Analytics per course'],
  },
  {
    id: 'analytics', name: 'Learning Analytics', arabic: 'تحليلات', icon: BarChart2,
    color: 'text-cyan-400', bgColor: 'bg-cyan-500/10', borderColor: 'border-cyan-500/30',
    description: 'Dashboards for HR and managers — training completion, skill gaps, compliance readiness, and ROI tracking.',
    capabilities: ['Training completion dashboards', 'Compliance readiness score', 'Skill gap heatmaps', 'Team & department analytics', 'Time-to-competency tracking', 'Training ROI calculator', 'Manager review integration', 'Tawzeef performance sync'],
  },
  {
    id: 'gamification', name: 'Gamification & Rewards', arabic: 'ألعاب ومكافآت', icon: Trophy,
    color: 'text-[#c9a227]', bgColor: 'bg-[#c9a227]/10', borderColor: 'border-[#c9a227]/30',
    description: 'Points, badges, leaderboards, and NuqtaCoin rewards for course completion. Make learning engaging.',
    capabilities: ['Points for course completion', 'Achievement badges & levels', 'Team leaderboards', 'NuqtaCoin rewards integration', 'Learning streaks', 'Monthly challenges', 'Manager-nominated awards', 'Social sharing of achievements'],
  },
];

const pricingTiers = [
  { tier: 'Starter', price: 'AED 8', period: '/user/mo', target: 'SMEs (1-50)', color: 'border-slate-500', bgColor: 'bg-slate-800/30', features: ['Compliance training library', 'Onboarding templates', 'Basic analytics', 'Certificate tracking', 'Email support'], popular: false },
  { tier: 'Business', price: 'AED 18', period: '/user/mo', target: 'Growing (50-500)', color: 'border-purple-500', bgColor: 'bg-purple-500/10', features: ['All Starter features', 'Full course library (500+)', 'Skill development paths', 'Content creation tools', 'Advanced analytics', 'Gamification & rewards', 'Priority support'], popular: true },
  { tier: 'Enterprise', price: 'AED 30', period: '/user/mo', target: 'Corporates (500+)', color: 'border-indigo-500', bgColor: 'bg-indigo-500/10', features: ['All Business features', 'Custom branding', 'API & LTI integration', 'Dedicated CSM', 'Custom content development', 'SLA guarantee', 'SSO & advanced security'], popular: false },
  { tier: 'RTMN Internal', price: 'Custom', period: '', target: '10 RTMN Companies', color: 'border-[#c9a227]', bgColor: 'bg-[#c9a227]/10', features: ['Full platform for all staff', 'Amana compliance auto-enrollment', 'Tawzeef HR integration', 'Cross-company learning', 'RTMN academy content', 'NuqtaCoin reward pool'], popular: false },
];

const competitors = [
  { name: 'Tadreeb', compliance: '✅ Amana', gcc: '✅ 6', arabic: '✅', lms: '✅', gamification: '✅ NuqtaCoin', hr: '✅ Tawzeef', price: 'AED 8/user' },
  { name: 'Udemy Business', compliance: '⚠️ Generic', gcc: '❌', arabic: '❌', lms: '✅', gamification: '⚠️', hr: '❌', price: '$30/user' },
  { name: 'Coursera for Business', compliance: '❌', gcc: '❌', arabic: '❌', lms: '✅', gamification: '⚠️', hr: '❌', price: '$399/user/yr' },
  { name: 'Moodle', compliance: '❌', gcc: '⚠️', arabic: '⚠️', lms: '✅', gamification: '⚠️', hr: '❌', price: 'Open source + hosting' },
];

const financialProjections = [
  { year: 'Year 1', users: '5K', courses: '500', revenue: 1.5, market: 'RTMN + UAE SMEs' },
  { year: 'Year 2', users: '25K', courses: '1K', revenue: 8, market: 'UAE + KSA' },
  { year: 'Year 3', users: '100K+', courses: '2K+', revenue: 25, market: 'Full GCC' },
];

const roadmapPhases = [
  { phase: 'Phase 1', title: 'Foundation', timeline: 'Q3 2026', color: 'border-purple-500', bgColor: 'bg-purple-500/10', milestones: ['Compliance training library (12 mandatory)', 'RTMN internal deployment', 'Amana auto-enrollment integration', 'Onboarding program builder', 'Arabic + English content', 'Basic LMS platform'] },
  { phase: 'Phase 2', title: 'Full LMS', timeline: 'Q4 2026', color: 'border-blue-500', bgColor: 'bg-blue-500/10', milestones: ['Skill development library (500+ courses)', 'Certification tracking & prep', 'Content creation tools', 'Gamification & NuqtaCoin', 'Tawzeef HR integration', 'Public SaaS launch'] },
  { phase: 'Phase 3', title: 'Scale', timeline: 'Q1-Q2 2027', color: 'border-emerald-500', bgColor: 'bg-emerald-500/10', milestones: ['KSA compliance training (SAMA, NCA)', 'Advanced analytics dashboard', 'Mobile learning app', 'API & LTI integrations', 'Enterprise tier launch', '25K active learners'] },
  { phase: 'Phase 4', title: 'Learning Ecosystem', timeline: 'H2 2027-2028', color: 'border-[#c9a227]', bgColor: 'bg-[#c9a227]/10', milestones: ['AI learning path recommendations', 'Marketplace for external trainers', 'VR/AR training experiences', 'Full GCC compliance library', 'White-label for enterprises', '100K+ active learners'] },
];

const risks = [
  { risk: 'Content quality and relevance for GCC market', severity: 'high', mitigation: ['Partner with GCC subject matter experts', 'Arabic-native content creation', 'Quarterly content review cycle', 'User feedback-driven updates'] },
  { risk: 'Low engagement — employees see training as burden', severity: 'high', mitigation: ['Gamification (points, badges, leaderboards)', 'NuqtaCoin real rewards for completion', 'Micro-learning (5-10 min modules)', 'Manager-driven accountability'] },
  { risk: 'Competition from global LMS platforms', severity: 'medium', mitigation: ['GCC compliance training (unique)', 'Arabic-native content (unique)', 'Amana + Tawzeef integration moat', 'Price leadership (AED 8 vs $30)'] },
  { risk: 'Regulatory changes require rapid content updates', severity: 'medium', mitigation: ['Amana regulatory change feed', 'Dedicated legal content team', 'Community-sourced updates', 'Version control for all courses'] },
];

const rtmnCompanies = [
  { name: 'All RTMN (500+ Staff)', needs: 'Mandatory compliance training, onboarding, skill development', icon: Crown, color: 'text-[#c9a227]' },
  { name: 'RTMN Finance', needs: 'AML/CFT certification, Shariah compliance training', icon: DollarSign, color: 'text-emerald-400' },
  { name: 'BizOne', needs: 'Merchant training programs, product knowledge', icon: Store, color: 'text-blue-400' },
  { name: 'Wasil Apps', needs: 'Driver safety training, food handling certification', icon: Package, color: 'text-orange-400' },
  { name: 'Rabtul', needs: 'Engineering upskilling, security awareness, DevOps', icon: Settings, color: 'text-indigo-400' },
  { name: 'Amana', needs: 'Compliance training content, auto-enrollment triggers', icon: Shield, color: 'text-teal-400' },
];

const corporateStructure = { parentCompany: 'BizOne Technology', entity: 'Tadreeb Learning Solutions', ownership: '100% owned by BizOne (RTMN Group)', type: 'EdTech — Corporate Learning & Compliance', regulator: 'Self-regulated (SaaS) — delivers mandated training content' };

export default function TadreebPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [expandedRisk, setExpandedRisk] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: GraduationCap },
    { id: 'modules', label: '7 Modules', icon: Layers },
    { id: 'pricing', label: 'Pricing', icon: DollarSign },
    { id: 'rtmn', label: 'RTMN Internal', icon: Network },
    { id: 'financials', label: 'Financials', icon: BarChart3 },
    { id: 'roadmap', label: 'Roadmap', icon: Rocket },
    { id: 'competition', label: 'Competition', icon: Target },
    { id: 'risks', label: 'Risks', icon: AlertTriangle },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628]">
      <div className="bg-gradient-to-br from-[#0a1628] via-[#1a2d4a] to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Link href="/bizone" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-4 text-sm"><ArrowRight className="w-4 h-4 rotate-180" /> Back to BizOne</Link>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-lg shadow-purple-500/20"><GraduationCap className="w-7 h-7 sm:w-10 sm:h-10 text-white" /></div>
                <div><h1 className="text-3xl sm:text-5xl font-black text-white">Tadreeb <span className="text-purple-400">تدريب</span></h1><p className="text-purple-400 text-sm sm:text-lg font-medium">Learn. Comply. Grow.</p></div>
              </div>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mb-4">The <span className="text-purple-400 font-medium">GCC corporate learning platform</span>. Mandatory compliance training, skill development, and certifications — <span className="text-amber-400 font-medium">Arabic-native</span>, <span className="text-[#c9a227] font-medium">Amana-integrated</span>.</p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#c9a227]/20 border border-[#c9a227]/50 rounded-full"><HeartHandshake className="w-4 h-4 text-[#c9a227]" /><span className="text-[#c9a227] text-xs sm:text-sm font-medium">A BizOne Technology Product</span></div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">{keyStats.map((stat, i) => (<div key={i} className="bg-slate-800/50 rounded-xl p-3 sm:p-4 border border-slate-700/50 text-center min-w-[120px]"><div className={`text-xl sm:text-2xl font-bold ${stat.color}`}>{stat.value}</div><div className="text-[10px] sm:text-xs text-slate-400">{stat.suffix}</div><div className="text-[10px] sm:text-xs text-slate-500 mt-1">{stat.label}</div></div>))}</div>
          </div>
          <div className="mt-8 bg-gradient-to-r from-purple-500/20 to-violet-500/10 rounded-xl p-4 sm:p-6 border border-purple-500/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div><div className="flex items-center gap-2 mb-2"><Zap className="w-5 h-5 text-purple-400" /><span className="text-lg font-bold text-white">The Core Promise</span></div><p className="text-xl sm:text-2xl font-bold text-white"><span className="text-purple-400">Compliance automated.</span> Skills <span className="text-emerald-400">measurable.</span></p></div>
              <div className="flex gap-3"><div className="bg-slate-900/50 rounded-lg p-3 text-center"><div className="text-2xl font-bold text-purple-400">500+</div><div className="text-xs text-slate-400">Courses</div></div><div className="bg-slate-900/50 rounded-lg p-3 text-center"><div className="text-2xl font-bold text-[#c9a227]">12</div><div className="text-xs text-slate-400">Mandatory</div></div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-40 bg-[#0a1628]/95 backdrop-blur-sm border-b border-slate-700/50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex overflow-x-auto py-2 gap-1 sm:gap-2 scrollbar-hide">{tabs.map((tab) => (<button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${activeTab === tab.id ? 'bg-purple-500 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}><tab.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />{tab.label}</button>))}</div></div></div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (<div className="space-y-8"><div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50"><h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-purple-400" /> Executive Summary</h2><p className="text-slate-300"><strong className="text-white">Tadreeb</strong> (تدريب — &quot;training&quot;) is the GCC&apos;s corporate learning platform. It combines <strong className="text-red-400">mandatory compliance training</strong> (AML, HSE, data privacy, fire safety — auto-enrolled from Amana), <strong className="text-purple-400">skill development</strong> (500+ courses), and <strong className="text-amber-400">certification tracking</strong> into one platform. Arabic-native, integrated with <strong className="text-blue-400">Tawzeef</strong> HR, and rewards learners with <strong className="text-[#c9a227]">NuqtaCoin</strong>.</p></div><div className="bg-gradient-to-r from-purple-500/10 to-violet-500/5 rounded-xl p-6 border border-purple-500/30"><h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Building2 className="w-5 h-5 text-purple-400" /> Corporate Structure</h2><div className="grid grid-cols-1 sm:grid-cols-2 gap-6"><div className="space-y-3">{[['Parent Company', corporateStructure.parentCompany], ['Entity Name', corporateStructure.entity], ['Ownership', corporateStructure.ownership]].map(([l, v]) => (<div key={l} className="flex justify-between py-2 border-b border-slate-700/50"><span className="text-slate-400">{l}</span><span className="text-white font-medium text-sm text-right">{v}</span></div>))}</div><div className="space-y-3">{[['Product Type', corporateStructure.type], ['Regulation', corporateStructure.regulator], ['Integration', 'Amana + Tawzeef + NuqtaCoin']].map(([l, v]) => (<div key={l} className="flex justify-between py-2 border-b border-slate-700/50"><span className="text-slate-400">{l}</span><span className="text-white font-medium text-right text-sm">{v}</span></div>))}</div></div></div></div>)}

        {activeTab === 'modules' && (<div className="space-y-8"><div className="bg-gradient-to-r from-purple-500/10 to-violet-500/5 rounded-xl p-6 border border-purple-500/30"><h2 className="text-xl font-bold text-white mb-2">7 Learning Modules</h2><p className="text-slate-400">From mandatory compliance to gamified skill development — everything your workforce needs.</p></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{learningModules.map((mod) => { const Icon = mod.icon; const isActive = activeModule === mod.id; return (<button key={mod.id} onClick={() => setActiveModule(isActive ? null : mod.id)} className={`text-left rounded-xl border p-5 transition-all ${isActive ? `${mod.bgColor} ${mod.borderColor} ring-1 ring-current` : 'bg-slate-800/30 border-slate-700/50 hover:border-slate-600/50'}`}><div className="flex items-center gap-3 mb-2"><div className={`w-10 h-10 rounded-xl ${mod.bgColor} ${mod.borderColor} border flex items-center justify-center`}><Icon className={`w-5 h-5 ${mod.color}`} /></div><div><h3 className="text-white font-bold text-sm">{mod.name}</h3><span className="text-xs text-slate-500">{mod.arabic}</span></div></div><p className="text-xs text-slate-400 line-clamp-2">{mod.description}</p></button>); })}</div>{activeModule && (() => { const mod = learningModules.find(m => m.id === activeModule); if (!mod) return null; const Icon = mod.icon; return (<div className={`rounded-xl border ${mod.borderColor} ${mod.bgColor} p-6`}><div className="flex items-center gap-3 mb-4"><Icon className={`w-6 h-6 ${mod.color}`} /><h3 className="text-xl font-bold text-white">{mod.name}</h3></div><p className="text-slate-300 mb-4">{mod.description}</p><div className="grid grid-cols-1 sm:grid-cols-2 gap-2">{mod.capabilities.map((cap, i) => (<div key={i} className="flex items-start gap-2"><CheckCircle className={`w-4 h-4 ${mod.color} shrink-0 mt-0.5`} /><span className="text-sm text-slate-300">{cap}</span></div>))}</div></div>); })()}</div>)}

        {activeTab === 'pricing' && (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">{pricingTiers.map((tier) => (<div key={tier.tier} className={`rounded-xl border ${tier.color} ${tier.bgColor} p-6 relative ${tier.popular ? 'ring-2 ring-purple-500/50' : ''}`}>{tier.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 bg-purple-500 text-white rounded-full font-bold">Most Popular</span>}<h3 className="text-lg font-bold text-white">{tier.tier}</h3><div className="flex items-baseline gap-1 my-2"><span className="text-3xl font-black text-white">{tier.price}</span><span className="text-sm text-slate-400">{tier.period}</span></div><p className="text-xs text-slate-400 mb-4">{tier.target}</p><ul className="space-y-2">{tier.features.map((f, i) => (<li key={i} className="text-xs text-slate-300 flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />{f}</li>))}</ul></div>))}</div>)}

        {activeTab === 'rtmn' && (<div className="space-y-8"><div className="bg-gradient-to-r from-[#c9a227]/20 to-yellow-500/10 rounded-xl p-6 border-2 border-[#c9a227]"><h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><Network className="w-5 h-5 text-[#c9a227]" /> RTMN Academy</h2><p className="text-slate-300">Tadreeb powers the RTMN Academy — centralized learning for all 10 companies. Compliance training auto-enrolled from Amana, onboarding synced with Tawzeef, and NuqtaCoin rewards for top learners.</p></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{rtmnCompanies.map((c) => { const Icon = c.icon; return (<div key={c.name} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 flex items-start gap-3"><Icon className={`w-5 h-5 ${c.color} shrink-0 mt-0.5`} /><div><h3 className="text-white font-bold text-sm">{c.name}</h3><p className="text-xs text-slate-400 mt-0.5">{c.needs}</p></div></div>); })}</div></div>)}

        {activeTab === 'financials' && (<div className="space-y-8"><div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50"><h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><BarChart3 className="w-5 h-5 text-purple-400" /> Financial Projections</h2><div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700/50">{['Year', 'Active Users', 'Courses', 'Revenue (AED M)', 'Market'].map((h) => (<th key={h} className="text-left px-3 py-2 text-purple-400 font-semibold">{h}</th>))}</tr></thead><tbody>{financialProjections.map((fp) => (<tr key={fp.year} className="border-b border-slate-800/50"><td className="px-3 py-3 text-white font-medium">{fp.year}</td><td className="px-3 py-3 text-slate-300">{fp.users}</td><td className="px-3 py-3 text-slate-300">{fp.courses}</td><td className="px-3 py-3 text-emerald-400 font-bold">{fp.revenue}M</td><td className="px-3 py-3 text-slate-400">{fp.market}</td></tr>))}</tbody></table></div></div><div className="grid grid-cols-2 lg:grid-cols-4 gap-3">{[{ label: 'Corporate Training', value: '$5B+', sub: 'GCC annual spend' }, { label: 'Digital LMS', value: '$800M', sub: 'GCC market by 2027' }, { label: 'Mandatory Training', value: '100%', sub: 'AML required for financial' }, { label: 'Growth', value: '25%', sub: 'EdTech CAGR MENA' }].map((m) => (<div key={m.label} className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50"><div className="text-2xl font-bold text-white">{m.value}</div><div className="text-xs text-slate-400 mt-1">{m.sub}</div><div className="text-xs text-slate-500 mt-1">{m.label}</div></div>))}</div></div>)}

        {activeTab === 'roadmap' && (<div className="space-y-6">{roadmapPhases.map((phase) => (<div key={phase.phase} className={`${phase.bgColor} rounded-xl p-6 border-2 ${phase.color}`}><div className="flex items-center justify-between mb-4"><div><span className="text-xs text-slate-400">{phase.phase}</span><h3 className="text-lg font-bold text-white">{phase.title}</h3></div><span className="text-sm text-slate-300 font-medium">{phase.timeline}</span></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-2">{phase.milestones.map((m, i) => (<div key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" /><span className="text-sm text-slate-300">{m}</span></div>))}</div></div>))}</div>)}

        {activeTab === 'competition' && (<div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50"><h2 className="text-xl font-bold text-white mb-4">Competitive Comparison</h2><div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700/50">{['', 'Compliance', 'GCC', 'Arabic', 'LMS', 'Gamification', 'HR Integ.', 'Price'].map((h) => (<th key={h} className="text-left px-2 py-2 text-purple-400 font-semibold whitespace-nowrap text-xs">{h}</th>))}</tr></thead><tbody>{competitors.map((c) => (<tr key={c.name} className={`border-b border-slate-800/50 ${c.name === 'Tadreeb' ? 'bg-purple-500/10' : ''}`}><td className="px-2 py-2 text-white font-bold whitespace-nowrap">{c.name}</td>{[c.compliance, c.gcc, c.arabic, c.lms, c.gamification, c.hr, c.price].map((val, j) => (<td key={j} className={`px-2 py-2 whitespace-nowrap text-xs ${val.startsWith('✅') ? 'text-emerald-400' : val.startsWith('❌') ? 'text-red-400' : 'text-amber-400'}`}>{val}</td>))}</tr>))}</tbody></table></div></div>)}

        {activeTab === 'risks' && (<div className="space-y-4">{risks.map((r) => (<div key={r.risk} className="bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden"><button onClick={() => setExpandedRisk(expandedRisk === r.risk ? null : r.risk)} className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-800/50 transition-colors"><div className="flex items-center gap-3"><span className={`px-2 py-0.5 rounded text-xs font-bold ${r.severity === 'critical' ? 'bg-red-500/20 text-red-400' : r.severity === 'high' ? 'bg-orange-500/20 text-orange-400' : 'bg-amber-500/20 text-amber-400'}`}>{r.severity.toUpperCase()}</span><span className="text-white font-medium text-sm">{r.risk}</span></div>{expandedRisk === r.risk ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}</button>{expandedRisk === r.risk && (<div className="px-5 pb-4"><div className="space-y-2">{r.mitigation.map((m, i) => (<div key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><span className="text-sm text-slate-300">{m}</span></div>))}</div></div>)}</div>))}</div>)}
      </main>

      <section className="py-12 px-4 border-t border-slate-800/50"><div className="max-w-4xl mx-auto text-center"><h2 className="text-2xl font-bold text-white mb-4">Learn. Comply. Grow.</h2><p className="text-slate-400 mb-8">7 modules. 500+ courses. Compliance automated. Arabic-native.</p><div className="flex flex-wrap justify-center gap-4"><Link href="/tawzeef" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 transition-colors"><Users className="w-5 h-5" /> Tawzeef HR</Link><Link href="/amana" className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-500 transition-colors"><Shield className="w-5 h-5" /> Amana Compliance</Link><Link href="/bizone" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-500 transition-colors"><Store className="w-5 h-5" /> BizOne Technology</Link></div></div></section>
      <GlobalFooter />
    </div>
  );
}
