'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Users, Shield, FileText, Globe, BarChart3, Lock,
  ArrowRight, CheckCircle, ChevronDown, ChevronUp,
  Activity, DollarSign, Zap, AlertTriangle, Settings,
  Building2, Search, Eye, Brain, Bell, Server,
  BookOpen, CreditCard, Star, Clock,
  TrendingUp, Layers, Award, MapPin, Briefcase,
  Code, Monitor, UserCheck, Heart,
  Crown, Store, Package, Target, Rocket,
  Calculator, Calendar, Wallet, HeartHandshake,
  ChevronRight, Network, Sparkles, PieChart,
  ClipboardList, UserPlus, GraduationCap, Banknote,
  ArrowUpRight
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ─── Key Stats ────────────────────────────────────────────────
const keyStats = [
  { label: 'Core Modules', value: '10', suffix: 'HR modules', color: 'text-blue-400' },
  { label: 'GCC Labor Laws', value: '6', suffix: 'countries', color: 'text-emerald-400' },
  { label: 'WPS Compliant', value: '100%', suffix: 'payroll', color: 'text-amber-400' },
  { label: 'Nationalization', value: '3', suffix: 'programs', color: 'text-purple-400' },
];

// ─── 10 Core HR Modules ────────────────────────────────────────
const hrModules = [
  {
    id: 'payroll', name: 'Payroll & WPS', arabic: 'رواتب', icon: Banknote,
    color: 'text-emerald-400', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/30',
    description: 'Fully automated GCC payroll with WPS compliance, end-of-service gratuity, overtime calculations, and multi-currency support.',
    capabilities: ['WPS file generation (SIF format)', 'UAE/KSA/Bahrain payroll formulas', 'End-of-service gratuity calculator', 'Overtime & allowance engine', 'Salary advance & loan deductions', 'Multi-currency payroll (AED/SAR/BHD)', 'Pay-slip generation (Arabic + English)', 'GOSI/pension auto-deductions'],
    regulators: ['MOHRE', 'GOSI', 'SIO (Bahrain)', 'WPS Banks'],
    fineRange: 'AED 5K-50K per worker',
  },
  {
    id: 'recruitment', name: 'Recruitment & Onboarding', arabic: 'توظيف', icon: UserPlus,
    color: 'text-blue-400', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30',
    description: 'End-to-end recruitment from job posting to offer letter, with visa processing integration and onboarding workflows.',
    capabilities: ['Job posting to 10+ GCC job boards', 'Applicant tracking system (ATS)', 'AI resume screening & ranking', 'Interview scheduling & scorecards', 'Offer letter generation', 'Background & reference checks', 'Visa processing tracker', 'Digital onboarding workflow'],
    regulators: ['MOHRE', 'MoL (KSA)', 'LMRA (Bahrain)'],
    fineRange: 'AED 10K per illegal hire',
  },
  {
    id: 'leave', name: 'Leave & Attendance', arabic: 'إجازات', icon: Calendar,
    color: 'text-purple-400', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/30',
    description: 'GCC-compliant leave management with annual, sick, maternity, Hajj, and national service leave tracking, plus biometric attendance integration.',
    capabilities: ['Annual leave (30 days UAE law)', 'Sick leave (45/90 day UAE rules)', 'Maternity leave (60 days UAE)', 'Hajj leave (30 days once)', 'National service tracking (UAE)', 'Biometric & GPS attendance', 'Shift scheduling & rosters', 'Remote work policy enforcement'],
    regulators: ['MOHRE', 'MoL (KSA)', 'LMRA'],
    fineRange: 'AED 5K-20K per violation',
  },
  {
    id: 'visa', name: 'Visa & Work Permits', arabic: 'تأشيرات', icon: FileText,
    color: 'text-orange-400', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-500/30',
    description: 'Complete visa lifecycle — new applications, renewals, cancellations, status changes, medical fitness, and Emirates ID tracking.',
    capabilities: ['New visa application workflow', 'Visa renewal auto-alerts (30/60 day)', 'Cancellation & exit procedures', 'Medical fitness certificate tracking', 'Emirates ID / Iqama renewal', 'Dependent visa management', 'Visa quota monitoring', 'Status change (visit → employment)'],
    regulators: ['GDRFA', 'MOHRE', 'Jawazat (KSA)', 'NPRA (Bahrain)'],
    fineRange: 'AED 100K + deportation',
  },
  {
    id: 'nationalization', name: 'Nationalization Programs', arabic: 'توطين', icon: Award,
    color: 'text-[#c9a227]', bgColor: 'bg-[#c9a227]/10', borderColor: 'border-[#c9a227]/30',
    description: 'Track and optimize Emiratisation (UAE), Saudization (KSA), and Bahrainisation targets with real-time dashboards and gap analysis.',
    capabilities: ['Emiratisation quota tracker (2% annual increase)', 'Saudization / Nitaqat band calculator', 'Bahrainisation ratio monitoring', 'Nationalization gap analysis', 'National talent pipeline', 'Government subsidy/incentive tracking', 'Nafis program integration (UAE)', 'Quarterly compliance reports'],
    regulators: ['MOHRE (Emiratisation)', 'MoHR (Saudization)', 'LMRA (Bahrainisation)'],
    fineRange: 'AED 6K-12K/mo per missing national',
  },
  {
    id: 'performance', name: 'Performance Management', arabic: 'أداء', icon: TrendingUp,
    color: 'text-cyan-400', bgColor: 'bg-cyan-500/10', borderColor: 'border-cyan-500/30',
    description: 'Goal setting, OKRs, 360-degree reviews, and continuous feedback with AI-powered insights and performance analytics.',
    capabilities: ['Goal setting & OKR framework', '360-degree review cycles', 'Continuous feedback & 1-on-1s', 'Performance improvement plans (PIP)', 'Competency framework mapping', 'AI performance insights', 'Promotion & succession planning', 'Calibration & rating distribution'],
    regulators: ['Internal governance'],
    fineRange: 'N/A — operational',
  },
  {
    id: 'benefits', name: 'Benefits & Insurance', arabic: 'مزايا', icon: Heart,
    color: 'text-pink-400', bgColor: 'bg-pink-500/10', borderColor: 'border-pink-500/30',
    description: 'Employee benefits administration including mandatory health insurance, life insurance, education allowances, housing, and flexible benefits.',
    capabilities: ['Mandatory health insurance (DHA/DOH)', 'Group life insurance management', 'Education allowance tracking', 'Housing/transport allowances', 'Flexible benefits portal', 'Insurance claims portal', 'Benefit cost analytics', 'Open enrollment automation'],
    regulators: ['DHA', 'DOH', 'CCHI (KSA)', 'IA (UAE)'],
    fineRange: 'AED 500/day per uninsured worker',
  },
  {
    id: 'training', name: 'Learning & Development', arabic: 'تطوير', icon: GraduationCap,
    color: 'text-indigo-400', bgColor: 'bg-indigo-500/10', borderColor: 'border-indigo-500/30',
    description: 'Mandatory compliance training, skill development, and certification tracking integrated with Tadreeb corporate LMS.',
    capabilities: ['Mandatory AML/compliance training', 'HSE training & certification', 'Skill gap analysis', 'Training calendar & scheduling', 'E-learning content library', 'Certification expiry alerts', 'Training budget management', 'Integration with Tadreeb LMS'],
    regulators: ['MOHRE', 'NESA', 'OSHAD'],
    fineRange: 'AED 5K-10K per untrained staff',
  },
  {
    id: 'documents', name: 'Employee Documents', arabic: 'مستندات', icon: ClipboardList,
    color: 'text-red-400', bgColor: 'bg-red-500/10', borderColor: 'border-red-500/30',
    description: 'Secure digital vault for employee contracts, certificates, visa copies, and compliance documents with auto-expiry alerts.',
    capabilities: ['Digital employee file', 'Contract management (Arabic + English)', 'Document expiry auto-alerts', 'Attestation tracking', 'Salary certificate generation', 'NOC letter templates', 'Digital signature support', 'Bulk document requests'],
    regulators: ['MOHRE', 'Courts', 'MOFA'],
    fineRange: 'AED 5K-50K per missing doc',
  },
  {
    id: 'exit', name: 'Offboarding & Exit', arabic: 'إنهاء خدمة', icon: ArrowRight,
    color: 'text-slate-400', bgColor: 'bg-slate-500/10', borderColor: 'border-slate-500/30',
    description: 'Structured offboarding with gratuity calculation, visa cancellation, asset return, knowledge transfer, and final settlement.',
    capabilities: ['End-of-service gratuity calculator', 'Final settlement computation', 'Visa cancellation workflow', 'Asset return checklist', 'Knowledge transfer plan', 'Exit interview automation', 'Non-compete tracking', 'MOHRE termination procedures'],
    regulators: ['MOHRE', 'GDRFA', 'MoL (KSA)'],
    fineRange: 'AED 10K-100K per dispute',
  },
];

// ─── GCC Labor Laws ────────────────────────────────────────
const gccLaborLaws = [
  { country: 'UAE', flag: '🇦🇪', law: 'Federal Decree-Law No. 33/2021', keyRules: ['30 days annual leave', '45+45 day sick leave', 'WPS mandatory', 'Emiratisation 2% annual', '14 public holidays', 'End-of-service: 21/30 days per year'], status: 'Full', color: 'text-emerald-400' },
  { country: 'Saudi Arabia', flag: '🇸🇦', law: 'Royal Decree M/51 Labor Law', keyRules: ['21/30 days annual leave', 'GOSI mandatory', 'Saudization / Nitaqat', 'Iqama system', '10 public holidays', 'End-of-service: half/full month'], status: 'Full', color: 'text-emerald-400' },
  { country: 'Bahrain', flag: '🇧🇭', law: 'Law No. 36/2012', keyRules: ['30 days annual leave', 'SIO mandatory', 'Bahrainisation targets', 'Flexi-work permits', '8 public holidays', 'End-of-service: half month/year'], status: 'Full', color: 'text-emerald-400' },
  { country: 'Qatar', flag: '🇶🇦', law: 'Law No. 14/2004', keyRules: ['3 weeks annual leave', 'End-of-service: 3 weeks/year', 'Minimum wage QAR 1,000', 'Worker welfare reforms'], status: 'Planned', color: 'text-amber-400' },
  { country: 'Oman', flag: '🇴🇲', law: 'Royal Decree 35/2003', keyRules: ['30 days annual leave', 'PASI social insurance', 'Omanisation targets', 'End-of-service provisions'], status: 'Planned', color: 'text-amber-400' },
  { country: 'Kuwait', flag: '🇰🇼', law: 'Law No. 6/2010', keyRules: ['30 days annual leave', 'PIFSS contributions', 'Kuwaitisation targets', 'Indemnity payment rules'], status: 'Planned', color: 'text-amber-400' },
];

// ─── Pricing ────────────────────────────────────────
const pricingTiers = [
  { tier: 'Starter', price: 'AED 15', period: '/employee/mo', target: 'SMEs (1-50 employees)', color: 'border-slate-500', bgColor: 'bg-slate-800/30', features: ['Payroll & WPS', 'Leave & attendance', 'Employee documents', 'Visa expiry alerts', 'Basic reports'], popular: false },
  { tier: 'Business', price: 'AED 29', period: '/employee/mo', target: 'Growing Companies (50-500)', color: 'border-blue-500', bgColor: 'bg-blue-500/10', features: ['All Starter features', 'Recruitment & ATS', 'Performance management', 'Benefits administration', 'Nationalization tracker', 'Training management', 'Advanced analytics'], popular: true },
  { tier: 'Enterprise', price: 'AED 49', period: '/employee/mo', target: 'Corporates (500+)', color: 'border-purple-500', bgColor: 'bg-purple-500/10', features: ['All Business features', 'Multi-entity/country', 'Custom workflows', 'API & integrations', 'Succession planning', 'Dedicated HRBP support', 'SLA guarantee'], popular: false },
  { tier: 'RTMN Internal', price: 'Custom', period: '', target: '10 RTMN Companies', color: 'border-[#c9a227]', bgColor: 'bg-[#c9a227]/10', features: ['Full platform access', 'Cross-company analytics', 'Rabtul SSO integration', 'Shared policy library', 'Group-level dashboards', 'Centralized visa processing'], popular: false },
];

// ─── Competitors ────────────────────────────────────────
const competitors = [
  { name: 'Tawzeef', wps: '✅', gcc: '✅ 6', arabic: '✅', emiratisation: '✅', gratuity: '✅', gosi: '✅', ats: '✅', perf: '✅', price: 'AED 15/ee' },
  { name: 'BambooHR', wps: '❌', gcc: '❌', arabic: '❌', emiratisation: '❌', gratuity: '❌', gosi: '❌', ats: '✅', perf: '✅', price: '$6/ee' },
  { name: 'Bayzat', wps: '✅', gcc: '⚠️ UAE', arabic: '⚠️', emiratisation: '⚠️', gratuity: '✅', gosi: '❌', ats: '❌', perf: '❌', price: 'AED 15/ee' },
  { name: 'ZenHR', wps: '✅', gcc: '✅ 4', arabic: '✅', emiratisation: '✅', gratuity: '✅', gosi: '✅', ats: '⚠️', perf: '⚠️', price: '$3/ee' },
  { name: 'Darwinbox', wps: '❌', gcc: '⚠️', arabic: '❌', emiratisation: '❌', gratuity: '❌', gosi: '❌', ats: '✅', perf: '✅', price: '$5/ee' },
];

// ─── Financials ────────────────────────────────────────
const financialProjections = [
  { year: 'Year 1', customers: '200-500', employees: '15K', revenue: 3, market: 'UAE + RTMN internal' },
  { year: 'Year 2', customers: '1K-3K', employees: '80K', revenue: 18, market: 'UAE + KSA + Bahrain' },
  { year: 'Year 3', customers: '5K+', employees: '250K+', revenue: 55, market: 'Full GCC' },
];

// ─── Roadmap ────────────────────────────────────────
const roadmapPhases = [
  { phase: 'Phase 1', title: 'Foundation', timeline: 'Q3 2026', color: 'border-blue-500', bgColor: 'bg-blue-500/10',
    milestones: ['Core payroll + WPS engine', 'Leave & attendance module', 'Employee documents vault', 'RTMN internal deployment (10 companies)', 'UAE labor law engine', 'Arabic + English UI'] },
  { phase: 'Phase 2', title: 'Full HR Suite', timeline: 'Q4 2026', color: 'border-purple-500', bgColor: 'bg-purple-500/10',
    milestones: ['Recruitment & ATS module', 'Performance management', 'Benefits & insurance admin', 'Nationalization tracker (Emiratisation)', 'Training & L&D module', 'Public SaaS launch'] },
  { phase: 'Phase 3', title: 'GCC Expansion', timeline: 'Q1-Q2 2027', color: 'border-emerald-500', bgColor: 'bg-emerald-500/10',
    milestones: ['KSA labor law + GOSI + Saudization', 'Bahrain labor law + SIO', 'Multi-entity / multi-country', 'Government portal integrations', 'API marketplace', 'Target 1,000 customers'] },
  { phase: 'Phase 4', title: 'Market Leadership', timeline: 'H2 2027-2028', color: 'border-[#c9a227]', bgColor: 'bg-[#c9a227]/10',
    milestones: ['Full 6-country GCC coverage', 'AI workforce planning', 'Org design & restructuring tools', 'White-label for enterprises', 'Daman insurance integration', '250K+ employees managed'] },
];

// ─── Risks ────────────────────────────────────────
const risks = [
  { risk: 'Labor law changes across 6 GCC countries', severity: 'high', mitigation: ['Dedicated legal team per jurisdiction', 'AI regulatory change monitor', 'Quarterly law update cycles', 'Partnership with GCC labor law firms'] },
  { risk: 'WPS bank integration complexity', severity: 'high', mitigation: ['Pre-built SIF file generators', 'Bank API partnerships (10+ banks)', 'Fallback manual upload option', 'WPS validation engine before submission'] },
  { risk: 'Competition from established GCC HR players', severity: 'medium', mitigation: ['Deeper GCC compliance (Amana integration)', 'BizOne merchant distribution channel', 'Full ecosystem synergies (Daman, Tadreeb)', 'Price leadership at AED 15/employee'] },
  { risk: 'Data sensitivity — employee personal data', severity: 'critical', mitigation: ['SOC2 + ISO 27001 certified', 'GCC data residency (AWS Bahrain)', 'Field-level encryption for PII', 'Annual penetration testing + VAPT'] },
];

// ─── RTMN Companies ────────────────────────────────────────
const rtmnCompanies = [
  { name: 'Nuqta Corporation', needs: 'Payroll, visa tracking, Emiratisation for 50+ staff', icon: Crown, color: 'text-[#c9a227]' },
  { name: 'RTMN Finance', needs: 'CBUAE staff compliance, GOSI for KSA entity', icon: DollarSign, color: 'text-emerald-400' },
  { name: 'BizOne', needs: 'Tech team payroll, contractor management, WPS', icon: Store, color: 'text-blue-400' },
  { name: 'Wasil Apps', needs: 'Driver/rider HR, gig worker classification, benefits', icon: Package, color: 'text-orange-400' },
  { name: 'Travel Co', needs: 'Multi-branch HR, tourism staff licensing, seasonal workers', icon: Globe, color: 'text-cyan-400' },
  { name: 'Inventora', needs: 'Warehouse staff HSE, shift management, blue-collar HR', icon: Server, color: 'text-purple-400' },
  { name: 'NextaBizz', needs: 'Sales team commissions, performance tracking', icon: Briefcase, color: 'text-pink-400' },
  { name: 'Adzy', needs: 'Creative team management, freelancer contracts', icon: Eye, color: 'text-red-400' },
  { name: 'Eventora', needs: 'Event staff rostering, temporary worker permits', icon: Star, color: 'text-violet-400' },
  { name: 'Rabtul', needs: 'Engineering team OKRs, L&D budgets, visa processing', icon: Settings, color: 'text-indigo-400' },
];

// ─── Platform Features ────────────────────────────────────────
const platformFeatures = [
  { icon: Brain, title: 'AI Workforce Analytics', desc: 'Predict attrition, optimize headcount, identify skill gaps. AI-powered workforce planning.' },
  { icon: Lock, title: 'GCC Data Residency', desc: 'All employee data in AWS Bahrain. PII encrypted at field level. SOC2 certified.' },
  { icon: Globe, title: 'Arabic + English', desc: 'Full RTL support. Bilingual contracts, payslips, letters, and government forms.' },
  { icon: Activity, title: 'Real-time Dashboards', desc: 'Headcount, cost-per-hire, attrition rate, nationalization progress — all in real-time.' },
  { icon: Zap, title: 'Workflow Automation', desc: 'Automated approval chains for leave, expense, visa, promotion. 70% less manual HR work.' },
  { icon: Monitor, title: 'Employee Self-Service', desc: 'Mobile app for payslips, leave requests, document requests, attendance, and benefits.' },
];

// ─── Corporate Structure ────────────────────────────────────
const corporateStructure = {
  parentCompany: 'BizOne Technology',
  entity: 'Tawzeef HR Solutions',
  ownership: '100% owned by BizOne (RTMN Group)',
  type: 'B2B SaaS — HR & Workforce Management',
  regulator: 'Self-regulated (SaaS) — helps clients comply with MOHRE/GOSI',
};

// ─── Expandable Helper ────────────────────────────────────────
function Expandable({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-slate-700/50 rounded-xl overflow-hidden mb-4">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 bg-slate-800/50 hover:bg-slate-800/80 transition-colors text-left">
        <span className="font-semibold text-white">{title}</span>
        {open ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
      </button>
      {open && <div className="px-5 py-4 bg-slate-900/30">{children}</div>}
    </div>
  );
}

// ════════════════════════════════════════════════════════════════
export default function TawzeefPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [expandedRisk, setExpandedRisk] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Users },
    { id: 'modules', label: '10 Modules', icon: Layers },
    { id: 'gcc', label: 'GCC Labor Laws', icon: Globe },
    { id: 'platform', label: 'Platform', icon: Monitor },
    { id: 'pricing', label: 'Pricing', icon: DollarSign },
    { id: 'rtmn', label: 'RTMN Internal', icon: Network },
    { id: 'financials', label: 'Financials', icon: BarChart3 },
    { id: 'roadmap', label: 'Roadmap', icon: Rocket },
    { id: 'competition', label: 'Competition', icon: Target },
    { id: 'risks', label: 'Risks', icon: AlertTriangle },
    { id: 'deck', label: 'Pitch Deck', icon: Briefcase },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0a1628] via-[#1a2d4a] to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Link href="/bizone" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-4 text-sm">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to BizOne
          </Link>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Users className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-5xl font-black text-white">Tawzeef <span className="text-blue-400">توظيف</span></h1>
                  <p className="text-blue-400 text-sm sm:text-lg font-medium">HR & Workforce, GCC-Ready.</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mb-4">
                The <span className="text-blue-400 font-medium">complete HR operating system</span> for GCC businesses.
                Payroll, WPS, recruitment, visa, nationalization — all <span className="text-[#c9a227] font-medium">GCC labor law compliant</span>.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#c9a227]/20 border border-[#c9a227]/50 rounded-full">
                <HeartHandshake className="w-4 h-4 text-[#c9a227]" />
                <span className="text-[#c9a227] text-xs sm:text-sm font-medium">A BizOne Technology Product</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {keyStats.map((stat, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-3 sm:p-4 border border-slate-700/50 text-center min-w-[120px]">
                  <div className={`text-xl sm:text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">{stat.suffix}</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 bg-gradient-to-r from-blue-500/20 to-indigo-500/10 rounded-xl p-4 sm:p-6 border border-blue-500/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2"><Zap className="w-5 h-5 text-blue-400" /><span className="text-lg font-bold text-white">The Core Promise</span></div>
                <p className="text-xl sm:text-2xl font-bold text-white"><span className="text-blue-400">WPS in 1 click.</span> Zero <span className="text-red-400">MOHRE fines.</span></p>
              </div>
              <div className="flex gap-3">
                <div className="bg-slate-900/50 rounded-lg p-3 text-center"><div className="text-2xl font-bold text-blue-400">10</div><div className="text-xs text-slate-400">Modules</div></div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center"><div className="text-2xl font-bold text-[#c9a227]">6</div><div className="text-xs text-slate-400">Countries</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-0 z-40 bg-[#0a1628]/95 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-2 gap-1 sm:gap-2 scrollbar-hide">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${activeTab === tab.id ? 'bg-blue-500 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}>
                <tab.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />{tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-blue-400" /> Executive Summary</h2>
              <p className="text-slate-300"><strong className="text-white">Tawzeef</strong> (توظيف — &quot;employment&quot;) is a unified HR operating system built for GCC businesses. It covers <strong className="text-blue-400">10 core HR modules</strong> — from WPS-compliant payroll and visa management to Emiratisation tracking — designed for the unique labor laws of <strong className="text-amber-400">6 GCC countries</strong>. Born from <strong className="text-[#c9a227]">RTMN&apos;s</strong> need to manage 500+ employees across 10 companies.</p>
            </div>
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/5 rounded-xl p-6 border border-blue-500/30">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Building2 className="w-5 h-5 text-blue-400" /> Corporate Structure</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">{[['Parent Company', corporateStructure.parentCompany], ['Entity Name', corporateStructure.entity], ['Ownership', corporateStructure.ownership]].map(([l, v]) => (<div key={l} className="flex justify-between py-2 border-b border-slate-700/50"><span className="text-slate-400">{l}</span><span className="text-white font-medium">{v}</span></div>))}</div>
                <div className="space-y-3">{[['Product Type', corporateStructure.type], ['Regulation', corporateStructure.regulator], ['Integration', 'Rabtul Core + Amana + Daman']].map(([l, v]) => (<div key={l} className="flex justify-between py-2 border-b border-slate-700/50"><span className="text-slate-400">{l}</span><span className="text-white font-medium text-right text-sm">{v}</span></div>))}</div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-6">
                <div className="flex items-center gap-2 mb-4"><AlertTriangle className="w-5 h-5 text-red-400" /><h3 className="text-lg font-bold text-white">Before Tawzeef</h3></div>
                <ul className="space-y-2">{['HR in Excel spreadsheets', 'WPS files created manually every month', 'Visa expiry missed = AED 100K+ fines', 'Emiratisation tracked in emails', 'Gratuity miscalculations = lawsuits', 'No real-time headcount visibility'].map((item, i) => (<li key={i} className="text-sm text-slate-300 flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />{item}</li>))}</ul>
              </div>
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-6">
                <div className="flex items-center gap-2 mb-4"><CheckCircle className="w-5 h-5 text-emerald-400" /><h3 className="text-lg font-bold text-white">With Tawzeef</h3></div>
                <ul className="space-y-2">{['WPS file generated in 1 click', 'Auto-alerts 30/60 days before visa expiry', 'Emiratisation dashboard with gap analysis', 'Gratuity calculated to the dirham', 'Employee self-service mobile app', 'Real-time analytics across all entities'].map((item, i) => (<li key={i} className="text-sm text-slate-300 flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />{item}</li>))}</ul>
              </div>
            </div>
          </div>
        )}

        {/* 10 Modules */}
        {activeTab === 'modules' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/5 rounded-xl p-6 border border-blue-500/30">
              <h2 className="text-xl font-bold text-white mb-2">10 Core HR Modules</h2>
              <p className="text-slate-400">Everything you need to hire, pay, manage, develop, and offboard employees — compliant with GCC labor laws.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {hrModules.map((mod) => {
                const Icon = mod.icon;
                const isActive = activeModule === mod.id;
                return (
                  <button key={mod.id} onClick={() => setActiveModule(isActive ? null : mod.id)} className={`text-left rounded-xl border p-5 transition-all ${isActive ? `${mod.bgColor} ${mod.borderColor} ring-1 ring-current` : 'bg-slate-800/30 border-slate-700/50 hover:border-slate-600/50'}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-xl ${mod.bgColor} ${mod.borderColor} border flex items-center justify-center`}><Icon className={`w-5 h-5 ${mod.color}`} /></div>
                      <div><h3 className="text-white font-bold text-sm">{mod.name}</h3><span className="text-xs text-slate-500">{mod.arabic}</span></div>
                    </div>
                    <p className="text-xs text-slate-400 mb-3 line-clamp-2">{mod.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">{mod.regulators.slice(0, 2).map((r) => (<span key={r} className="text-xs px-2 py-0.5 bg-slate-700/50 rounded-full text-slate-300">{r}</span>))}{mod.regulators.length > 2 && <span className="text-xs px-2 py-0.5 bg-slate-700/50 rounded-full text-slate-400">+{mod.regulators.length - 2}</span>}</div>
                      <span className="text-xs text-red-400">{mod.fineRange}</span>
                    </div>
                  </button>
                );
              })}
            </div>
            {activeModule && (() => {
              const mod = hrModules.find(m => m.id === activeModule);
              if (!mod) return null;
              const Icon = mod.icon;
              return (
                <div className={`rounded-xl border ${mod.borderColor} ${mod.bgColor} p-6`}>
                  <div className="flex items-center gap-3 mb-4"><Icon className={`w-6 h-6 ${mod.color}`} /><h3 className="text-xl font-bold text-white">{mod.name}</h3><span className="text-xs px-3 py-1 bg-red-500/20 text-red-400 rounded-full">Fine risk: {mod.fineRange}</span></div>
                  <p className="text-slate-300 mb-4">{mod.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">{mod.capabilities.map((cap, i) => (<div key={i} className="flex items-start gap-2"><CheckCircle className={`w-4 h-4 ${mod.color} shrink-0 mt-0.5`} /><span className="text-sm text-slate-300">{cap}</span></div>))}</div>
                  <div className="border-t border-slate-700/50 pt-3"><span className="text-xs text-slate-400 font-semibold">Regulators: </span>{mod.regulators.map((r) => (<span key={r} className="text-xs px-2 py-0.5 bg-slate-700/50 rounded-full text-slate-300 mr-1">{r}</span>))}</div>
                </div>
              );
            })()}
          </div>
        )}

        {/* GCC Labor Laws */}
        {activeTab === 'gcc' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/5 rounded-xl p-6 border border-emerald-500/30">
              <h2 className="text-xl font-bold text-white mb-2">GCC Labor Law Coverage</h2>
              <p className="text-slate-400">Every country has different labor laws, leave entitlements, social insurance, and nationalization programs. Tawzeef knows them all.</p>
            </div>
            <div className="space-y-4">
              {gccLaborLaws.map((c) => (
                <Expandable key={c.country} title={`${c.flag} ${c.country} — ${c.law}`} defaultOpen={c.country === 'UAE'}>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${c.color === 'text-emerald-400' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>{c.status}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {c.keyRules.map((rule, i) => (<div key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" /><span className="text-sm text-slate-300">{rule}</span></div>))}
                    </div>
                  </div>
                </Expandable>
              ))}
            </div>
          </div>
        )}

        {/* Platform */}
        {activeTab === 'platform' && (
          <div className="space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-2">Platform Capabilities</h2>
              <p className="text-slate-400 mb-6">Built-in tools that make HR management effortless across the GCC.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {platformFeatures.map((f) => { const Icon = f.icon; return (
                  <div key={f.title} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50"><Icon className="w-5 h-5 text-blue-400 mb-2" /><h4 className="text-white font-bold text-sm mb-1">{f.title}</h4><p className="text-xs text-slate-400">{f.desc}</p></div>
                ); })}
              </div>
            </div>
            <Expandable title="Integration Ecosystem" defaultOpen>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {[
                  { name: 'WPS Banks', desc: 'All UAE/KSA WPS partner banks' },
                  { name: 'MOHRE', desc: 'Labor contract registration' },
                  { name: 'GDRFA', desc: 'Visa & residency processing' },
                  { name: 'GOSI', desc: 'KSA social insurance' },
                  { name: 'Amana', desc: 'Labor compliance automation' },
                  { name: 'Daman', desc: 'Employee insurance management' },
                  { name: 'Tadreeb', desc: 'Training & certification' },
                  { name: 'BizOne', desc: 'Merchant staff management' },
                ].map((i) => (<div key={i.name} className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/50"><div className="text-white font-bold text-xs">{i.name}</div><div className="text-xs text-slate-400 mt-0.5">{i.desc}</div></div>))}
              </div>
            </Expandable>
          </div>
        )}

        {/* Pricing */}
        {activeTab === 'pricing' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pricingTiers.map((tier) => (
              <div key={tier.tier} className={`rounded-xl border ${tier.color} ${tier.bgColor} p-6 relative ${tier.popular ? 'ring-2 ring-blue-500/50' : ''}`}>
                {tier.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 bg-blue-500 text-black rounded-full font-bold">Most Popular</span>}
                <h3 className="text-lg font-bold text-white">{tier.tier}</h3>
                <div className="flex items-baseline gap-1 my-2"><span className="text-3xl font-black text-white">{tier.price}</span><span className="text-sm text-slate-400">{tier.period}</span></div>
                <p className="text-xs text-slate-400 mb-4">{tier.target}</p>
                <ul className="space-y-2">{tier.features.map((f, i) => (<li key={i} className="text-xs text-slate-300 flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />{f}</li>))}</ul>
              </div>
            ))}
          </div>
        )}

        {/* RTMN Internal */}
        {activeTab === 'rtmn' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-yellow-500/10 rounded-xl p-6 border-2 border-[#c9a227]">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><Network className="w-5 h-5 text-[#c9a227]" /> Built for RTMN — Available for Everyone</h2>
              <p className="text-slate-300">Tawzeef was born from RTMN&apos;s need to manage 500+ employees across 10 companies, with different labor laws, visa types, and nationalization requirements.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{rtmnCompanies.map((c) => { const Icon = c.icon; return (<div key={c.name} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 flex items-start gap-3"><Icon className={`w-5 h-5 ${c.color} shrink-0 mt-0.5`} /><div><h3 className="text-white font-bold text-sm">{c.name}</h3><p className="text-xs text-slate-400 mt-0.5">{c.needs}</p></div></div>); })}</div>
          </div>
        )}

        {/* Financials */}
        {activeTab === 'financials' && (
          <div className="space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><BarChart3 className="w-5 h-5 text-blue-400" /> Financial Projections</h2>
              <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700/50">{['Year', 'Customers', 'Employees Managed', 'Revenue (AED M)', 'Market'].map((h) => (<th key={h} className="text-left px-3 py-2 text-blue-400 font-semibold">{h}</th>))}</tr></thead><tbody>{financialProjections.map((fp) => (<tr key={fp.year} className="border-b border-slate-800/50"><td className="px-3 py-3 text-white font-medium">{fp.year}</td><td className="px-3 py-3 text-slate-300">{fp.customers}</td><td className="px-3 py-3 text-slate-300">{fp.employees}</td><td className="px-3 py-3 text-emerald-400 font-bold">{fp.revenue}M</td><td className="px-3 py-3 text-slate-400">{fp.market}</td></tr>))}</tbody></table></div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[{ label: 'GCC Workforce', value: '15M+', sub: 'Private sector employees' }, { label: 'HR Tech Spend', value: '$1.2B', sub: 'GCC annually' }, { label: 'Digital Penetration', value: '<15%', sub: 'Using HR software' }, { label: 'Growth Rate', value: '28%', sub: 'HR SaaS CAGR in MENA' }].map((m) => (
                <div key={m.label} className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50"><div className="text-2xl font-bold text-white">{m.value}</div><div className="text-xs text-slate-400 mt-1">{m.sub}</div><div className="text-xs text-slate-500 mt-1">{m.label}</div></div>
              ))}
            </div>
          </div>
        )}

        {/* Roadmap */}
        {activeTab === 'roadmap' && (
          <div className="space-y-6">{roadmapPhases.map((phase) => (
            <div key={phase.phase} className={`${phase.bgColor} rounded-xl p-6 border-2 ${phase.color}`}>
              <div className="flex items-center justify-between mb-4"><div><span className="text-xs text-slate-400">{phase.phase}</span><h3 className="text-lg font-bold text-white">{phase.title}</h3></div><span className="text-sm text-slate-300 font-medium">{phase.timeline}</span></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">{phase.milestones.map((m, i) => (<div key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" /><span className="text-sm text-slate-300">{m}</span></div>))}</div>
            </div>
          ))}</div>
        )}

        {/* Competition */}
        {activeTab === 'competition' && (
          <div className="space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4">Competitive Comparison</h2>
              <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700/50">{['', 'WPS', 'GCC', 'Arabic', 'Emiratisation', 'Gratuity', 'GOSI', 'ATS', 'Perf Mgmt', 'Price'].map((h) => (<th key={h} className="text-left px-2 py-2 text-blue-400 font-semibold whitespace-nowrap text-xs">{h}</th>))}</tr></thead><tbody>{competitors.map((c) => (<tr key={c.name} className={`border-b border-slate-800/50 ${c.name === 'Tawzeef' ? 'bg-blue-500/10' : ''}`}><td className="px-2 py-2 text-white font-bold whitespace-nowrap">{c.name}</td>{[c.wps, c.gcc, c.arabic, c.emiratisation, c.gratuity, c.gosi, c.ats, c.perf, c.price].map((val, j) => (<td key={j} className={`px-2 py-2 whitespace-nowrap text-xs ${val.startsWith('✅') ? 'text-emerald-400' : val.startsWith('❌') ? 'text-red-400' : 'text-amber-400'}`}>{val}</td>))}</tr>))}</tbody></table></div>
            </div>
          </div>
        )}

        {/* Risks */}
        {activeTab === 'risks' && (
          <div className="space-y-4">{risks.map((r) => (
            <div key={r.risk} className="bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden">
              <button onClick={() => setExpandedRisk(expandedRisk === r.risk ? null : r.risk)} className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-800/50 transition-colors">
                <div className="flex items-center gap-3"><span className={`px-2 py-0.5 rounded text-xs font-bold ${r.severity === 'critical' ? 'bg-red-500/20 text-red-400' : r.severity === 'high' ? 'bg-orange-500/20 text-orange-400' : 'bg-amber-500/20 text-amber-400'}`}>{r.severity.toUpperCase()}</span><span className="text-white font-medium text-sm">{r.risk}</span></div>
                {expandedRisk === r.risk ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>
              {expandedRisk === r.risk && (<div className="px-5 pb-4"><div className="space-y-2">{r.mitigation.map((m, i) => (<div key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><span className="text-sm text-slate-300">{m}</span></div>))}</div></div>)}
            </div>
          ))}</div>
        )}

        {/* Pitch Deck */}
        {activeTab === 'deck' && (
          <div className="space-y-8">
            {/* Investment Thesis */}
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-500/5 rounded-2xl p-6 border border-blue-500/30">
              <h2 className="text-2xl font-bold text-white mb-2">Investment Thesis</h2>
              <p className="text-slate-300 leading-relaxed">Tawzeef is not a job board — it is a hire-to-work operating system. From AI matching to visa processing to payroll enrollment, no platform in the GCC (or globally) closes the loop from job post to first paycheck. LinkedIn proved recruitment platforms can reach $26B. Tawzeef brings that model to the fastest-growing labor market on earth — with full government and payroll integration that LinkedIn, Bayt, and Indeed cannot replicate.</p>
            </div>
            {/* TAM/SAM/SOM */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Market Opportunity</h3>
              <div className="grid grid-cols-3 gap-4">
                {[{label:'TAM',value:'$2B+',detail:'UAE Recruitment Market (2026)'},{label:'SAM',value:'$600M',detail:'Digital Recruitment & HR Tech Segment'},{label:'SOM',value:'$60M',detail:'Year 3 Tawzeef Revenue Target'}].map(m=>(
                  <div key={m.label} className="bg-slate-800/30 rounded-xl p-4 text-center border border-slate-700/50">
                    <div className="text-xs text-slate-400">{m.label}</div>
                    <div className="text-2xl font-black text-white mt-1">{m.value}</div>
                    <div className="text-xs text-slate-500 mt-1">{m.detail}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Key Differentiators */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Key Differentiators</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[{title:'AI Talent Matching',desc:'ML-powered scoring ranks applicants by skills, experience, cultural fit, and visa eligibility — time-to-hire from 45 days to 12'},{title:'Khedma Visa Pipeline',desc:'New hires auto-trigger visa applications via Khedma. Work permits, medical fitness, Emirates ID — all tracked in one dashboard'},{title:'BizOne Payroll Sync',desc:'Accepted offers auto-create employee records in BizOne payroll. WPS-ready from day one. Zero re-entry'},{title:'GCC Nationalization Aware',desc:'Emiratisation, Saudization, and Bahrainisation quotas baked into every job posting. Auto-flag non-compliant hires'},{title:'Skills Assessment Engine',desc:'Built-in coding tests, psychometric assessments, and Arabic/English proficiency exams — no third-party tools needed'}].map(d=>(
                  <div key={d.title} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5"/>
                    <div><div className="text-white font-medium text-sm">{d.title}</div>
                    <div className="text-xs text-slate-400">{d.desc}</div></div>
                  </div>
                ))}
              </div>
            </div>
            {/* 3-Year Financials */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Financial Projections</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-slate-700/50">
                    {['Year','Revenue','Costs','Net Profit'].map(h=><th key={h} className="text-left px-3 py-2 text-[#c9a227] font-semibold">{h}</th>)}
                  </tr></thead>
                  <tbody>
                    {[{y:'Year 1',r:'AED 5M',c:'AED 3.5M',n:'AED 1.5M'},{y:'Year 2',r:'AED 20M',c:'AED 10M',n:'AED 10M'},{y:'Year 3',r:'AED 60M',c:'AED 24M',n:'AED 36M'}].map(row=>(
                      <tr key={row.y} className="border-b border-slate-800/50">
                        <td className="px-3 py-3 text-white font-medium">{row.y}</td>
                        <td className="px-3 py-3 text-emerald-400">{row.r}</td>
                        <td className="px-3 py-3 text-red-400">{row.c}</td>
                        <td className="px-3 py-3 text-[#c9a227] font-bold">{row.n}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Comparable Companies */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Comparable Companies</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[{name:'LinkedIn',val:'$26B',market:'Microsoft acquisition'},{name:'Indeed',val:'$20B+',market:'Recruit Holdings implied'},{name:'Seek',val:'$5B',market:'Regional job marketplace'},{name:'ZipRecruiter',val:'$2B+',market:'AI-powered job matching'}].map(c=>(
                  <div key={c.name} className="bg-slate-800/30 rounded-xl p-4 text-center border border-slate-700/50">
                    <div className="text-white font-bold">{c.name}</div>
                    <div className="text-2xl font-black text-[#c9a227] mt-1">{c.val}</div>
                    <div className="text-xs text-slate-500 mt-1">{c.market}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Unicorn Path */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><ArrowUpRight className="w-5 h-5"/> Unicorn Path</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[{stage:'5K placements',val:'~$25M',rev:'5M AED',time:'Q4 2026'},{stage:'20K placements',val:'~$100M',rev:'20M AED',time:'Q4 2027'},{stage:'50K placements',val:'~$300M',rev:'60M AED',time:'Q4 2028'},{stage:'200K+ placements',val:'~$1B+',rev:'250M+ AED',time:'2029+'}].map((ms,i)=>(
                  <div key={ms.stage} className={`rounded-xl p-4 text-center border ${i===3?'bg-[#c9a227]/10 border-[#c9a227]/40':'bg-slate-900/50 border-slate-700/50'}`}>
                    <div className={`text-xl font-bold ${i===3?'text-[#c9a227]':'text-white'}`}>{ms.val}</div>
                    <div className="text-xs text-slate-400 mt-1">{ms.stage}</div>
                    <div className="text-xs text-slate-500">{ms.time}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* RTMN Multiplier */}
            <div className="bg-gradient-to-r from-[#c9a227]/10 to-transparent rounded-xl p-6 border border-[#c9a227]/30">
              <h3 className="text-lg font-bold text-[#c9a227] mb-3">RTMN Ecosystem Multiplier</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[{s:'BizOne merchant pipeline',d:'100K+ BizOne merchants are employers — each is a warm lead for Tawzeef subscriptions'},{s:'Khedma visa lock-in',d:'Once employers process visas through Tawzeef to Khedma, switching costs become extreme'},{s:'BizOne payroll integration',d:'Auto-enroll hires into payroll. Employers using Tawzeef + BizOne never need a separate ATS'},{s:'Data moat',d:'Recruitment + visa + payroll data = unmatched employer intelligence no competitor has'},{s:'Adzy recruitment marketing',d:'Job postings promoted via Adzy ad network reach passive candidates competitors cannot access'},{s:'RTMN seed customers',d:'10 RTMN companies hiring immediately — instant traction and case studies'}].map(s=>(
                  <div key={s.s} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#c9a227] shrink-0 mt-0.5"/>
                    <div><div className="text-white font-medium text-xs">{s.s}</div><div className="text-xs text-slate-500">{s.d}</div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <section className="py-12 px-4 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">HR & Workforce, GCC-Ready.</h2>
          <p className="text-slate-400 mb-8">10 modules. 6 countries. WPS compliant. One platform.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/bizone" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 transition-colors"><Store className="w-5 h-5" /> BizOne Technology</Link>
            <Link href="/amana" className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-500 transition-colors"><Shield className="w-5 h-5" /> Amana Compliance</Link>
            <Link href="/daman" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-500 transition-colors"><Heart className="w-5 h-5" /> Daman Insurance</Link>
          </div>
        </div>
      </section>
      <GlobalFooter />
    </div>
  );
}
