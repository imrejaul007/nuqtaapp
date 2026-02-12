'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Shield, Scale, FileText, Globe, BarChart3, Users, Lock,
  ArrowRight, CheckCircle, ChevronDown, ChevronUp, Database,
  Activity, DollarSign, Zap, AlertTriangle, Settings,
  Building2, Search, Eye, Brain, Bell, Server,
  BookOpen, Fingerprint, CreditCard, Star, Clock,
  TrendingUp, Layers, Award, MapPin, Briefcase,
  Code, Monitor, HardDrive, UserCheck, Heart,
  GitBranch, Crown, Store, Package
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ─── Hero Stats ────────────────────────────────────────────────
const heroStats = [
  { label: 'Compliance Pillars', value: '8', color: 'text-teal-400', bg: 'bg-teal-500/10', border: 'border-teal-500/30' },
  { label: 'GCC Regulators', value: '25+', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
  { label: 'Auto-Alerts', value: '500+', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30' },
  { label: 'Countries', value: '6', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
  { label: 'RTMN Companies', value: '10', color: 'text-[#c9a227]', bg: 'bg-[#c9a227]/10', border: 'border-[#c9a227]/30' },
];

// ─── 8 Compliance Pillars ────────────────────────────────────────
const compliancePillars = [
  {
    id: 'financial',
    name: 'Financial Compliance',
    arabic: 'امتثال مالي',
    icon: DollarSign,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    description: 'AML/CFT, KYC/KYB, sanctions screening, suspicious transaction reporting, and regulatory filings for all GCC financial regulators.',
    capabilities: [
      'AML/CFT compliance program management',
      'KYC/KYB verification workflows (Emirates ID, Trade License)',
      'Sanctions screening (UN, UAE, SAMA, local lists)',
      'STR/SAR filing via goAML & SAFIRS portals',
      'Transaction monitoring rules engine',
      'PEP & adverse media screening',
      'Risk assessment scoring per customer',
      'Record retention (5-10 years auto-archive)',
    ],
    regulators: ['CBUAE', 'SAMA', 'CBB', 'QCB', 'CBO', 'CBK'],
    metric: 'AED 50K-500M fine prevention',
  },
  {
    id: 'tax',
    name: 'Tax & VAT',
    arabic: 'ضريبة',
    icon: FileText,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    description: 'VAT registration, filing, returns, excise tax, corporate tax, transfer pricing, and withholding tax across all GCC jurisdictions.',
    capabilities: [
      'VAT registration tracker (AED 375K threshold)',
      'Automated quarterly VAT return preparation',
      'Input/output tax reconciliation',
      'Excise tax management (UAE, KSA)',
      'UAE Corporate Tax (9%) compliance',
      'Transfer pricing documentation',
      'Tax invoice validation (FTA format)',
      'Multi-jurisdiction tax calendar with alerts',
    ],
    regulators: ['FTA (UAE)', 'ZATCA (KSA)', 'NBR (Bahrain)', 'GTA (Qatar)'],
    metric: '100% filing accuracy',
  },
  {
    id: 'data',
    name: 'Data & Privacy',
    arabic: 'خصوصية البيانات',
    icon: Lock,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    description: 'UAE PDPL, KSA NDMO, GDPR, consent management, data breach procedures, DPO tools, and cross-border data transfer compliance.',
    capabilities: [
      'UAE PDPL compliance dashboard',
      'KSA NDMO & Personal Data Protection Law',
      'GDPR compliance for EU data subjects',
      'Consent management platform (CMP)',
      'Data Processing Records (Article 30 GDPR)',
      'Data breach notification workflow (72h deadline)',
      'Data subject rights portal (access, deletion, portability)',
      'Cross-border data transfer impact assessments',
      'DPO appointment and task management',
      'Cookie consent and tracking audit',
    ],
    regulators: ['UAE Data Office', 'NDMO (KSA)', 'PDPA (Bahrain)', 'EU DPA'],
    metric: 'AED 500K fine prevention',
  },
  {
    id: 'corporate',
    name: 'Corporate & Licensing',
    arabic: 'تراخيص',
    icon: Building2,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    description: 'Trade licenses, e-commerce licenses, renewals, visa tracking, corporate governance, shareholder agreements, and entity management across GCC.',
    capabilities: [
      'Trade license management & renewal alerts',
      'E-commerce license tracker (TDRA, DET)',
      'Multi-entity corporate structure management',
      'Board resolution & meeting minute tracker',
      'Shareholder agreement compliance',
      'Visa & work permit expiry alerts',
      'Memorandum of Association compliance',
      'Free zone vs. mainland license comparison',
      'Power of Attorney (POA) management',
      'Annual return & financial statement deadlines',
    ],
    regulators: ['DET (Dubai)', 'ADDC (Abu Dhabi)', 'MoE (Federal)', 'DMCC', 'DIFC', 'ADGM'],
    metric: 'Zero expired licenses',
  },
  {
    id: 'cyber',
    name: 'IT & Cybersecurity',
    arabic: 'أمن سيبراني',
    icon: Shield,
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    description: 'SOC2 Type II, PCI-DSS, ISO 27001, penetration testing schedules, incident response, vulnerability management, and security policy enforcement.',
    capabilities: [
      'SOC2 Type II readiness & evidence collection',
      'PCI-DSS Level 1 compliance tracker',
      'ISO 27001 ISMS management',
      'Penetration testing schedule & findings tracker',
      'Vulnerability management (CVE tracking)',
      'Security policy library & acknowledgements',
      'Incident response plan & tabletop exercises',
      'Access review & privilege audit',
      'Vendor security assessment questionnaires',
      'Security awareness training tracker',
    ],
    regulators: ['NESA (UAE)', 'NCA (KSA)', 'PCI SSC', 'ISO'],
    metric: '100% audit readiness',
  },
  {
    id: 'labor',
    name: 'Labor & Safety',
    arabic: 'عمالة وسلامة',
    icon: Users,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
    description: 'WPS compliance, MOHRE regulations, worker safety, GOSI (KSA), visa tracking, end-of-service calculations, and workplace safety standards.',
    capabilities: [
      'WPS (Wage Protection System) compliance',
      'MOHRE labor law compliance tracker',
      'End-of-service gratuity calculator',
      'Leave balance & entitlement management',
      'GOSI contributions tracker (KSA)',
      'Workplace safety inspection scheduler',
      'Visa status & expiry management',
      'Emirates ID expiry alerts',
      'Overtime & working hours compliance',
      'Emiratisation/Saudization quota tracker',
    ],
    regulators: ['MOHRE (UAE)', 'GOSI (KSA)', 'SIO (Bahrain)', 'OSHA'],
    metric: 'Zero labor violations',
  },
  {
    id: 'shariah',
    name: 'Shariah Compliance',
    arabic: 'شريعة',
    icon: BookOpen,
    color: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    borderColor: 'border-[#c9a227]/30',
    description: 'Product Shariah compliance, fatwa tracking, annual Shariah audit management, Islamic finance standards (AAOIFI), and Shariah board governance.',
    capabilities: [
      'Product Shariah screening & approval workflow',
      'Fatwa register & tracking system',
      'Annual Shariah audit preparation',
      'AAOIFI standards compliance checker',
      'Shariah Supervisory Board portal',
      'Non-compliant income purification tracker',
      'Islamic contract templates (Murabaha, Ijara, etc.)',
      'Shariah risk assessment framework',
    ],
    regulators: ['Shariah Board', 'AAOIFI', 'CBUAE Islamic Banking', 'SAMA Islamic'],
    metric: '100% Shariah compliant',
  },
  {
    id: 'industry',
    name: 'Industry-Specific',
    arabic: 'تخصصي',
    icon: Layers,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
    description: 'Sector-specific compliance for F&B (municipality), healthcare (DHA), transport (RTA), real estate (RERA), and e-commerce (consumer protection).',
    capabilities: [
      'F&B: Municipality health permits & inspections',
      'Healthcare: DHA/DOH facility licensing',
      'Transport: RTA permits & driver compliance',
      'Real Estate: RERA broker/developer registration',
      'E-Commerce: Consumer protection law compliance',
      'Tourism: DTCM licensing for travel operators',
      'Education: KHDA/ADEK approvals',
      'Insurance: IA regulatory compliance',
    ],
    regulators: ['Dubai Municipality', 'DHA', 'RTA', 'RERA', 'DTCM'],
    metric: 'All sectors covered',
  },
];

// ─── GCC Country Coverage ────────────────────────────────────────
const gccCountries = [
  {
    country: 'UAE',
    flag: '🇦🇪',
    regulators: 12,
    keyBodies: ['CBUAE', 'FTA', 'DET', 'TDRA', 'MOHRE', 'NESA', 'UAE Data Office'],
    status: 'Full Coverage',
    color: 'text-emerald-400',
  },
  {
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    regulators: 10,
    keyBodies: ['SAMA', 'ZATCA', 'NCA', 'NDMO', 'GOSI', 'MoL'],
    status: 'Full Coverage',
    color: 'text-emerald-400',
  },
  {
    country: 'Bahrain',
    flag: '🇧🇭',
    regulators: 6,
    keyBodies: ['CBB', 'NBR', 'SIO', 'PDPA'],
    status: 'Full Coverage',
    color: 'text-emerald-400',
  },
  {
    country: 'Qatar',
    flag: '🇶🇦',
    regulators: 5,
    keyBodies: ['QCB', 'GTA', 'CRA', 'NCSA'],
    status: 'Planned',
    color: 'text-amber-400',
  },
  {
    country: 'Oman',
    flag: '🇴🇲',
    regulators: 5,
    keyBodies: ['CBO', 'Tax Authority', 'ITA'],
    status: 'Planned',
    color: 'text-amber-400',
  },
  {
    country: 'Kuwait',
    flag: '🇰🇼',
    regulators: 5,
    keyBodies: ['CBK', 'MoF', 'CITRA'],
    status: 'Planned',
    color: 'text-amber-400',
  },
];

// ─── RTMN Internal Use ────────────────────────────────────────
const rtmnCompanies = [
  { name: 'Nuqta Corporation', needs: 'PDPL, Consumer Protection, SVF License, VAT', icon: Crown, color: 'text-[#c9a227]' },
  { name: 'RTMN Finance', needs: 'CBUAE/SAMA, AML/CFT, PCI-DSS, Shariah', icon: DollarSign, color: 'text-emerald-400' },
  { name: 'BizOne', needs: 'Trade License, POS Compliance, Merchant KYB, VAT', icon: Store, color: 'text-blue-400' },
  { name: 'Wasil Apps', needs: 'Delivery Permits, F&B Health, Labor, MOHRE', icon: Package, color: 'text-orange-400' },
  { name: 'Travel Co', needs: 'DTCM, RTA, IATA, Tourism License, Safety', icon: Globe, color: 'text-cyan-400' },
  { name: 'Inventora', needs: 'Warehouse Safety, Import/Export, Customs', icon: Database, color: 'text-purple-400' },
  { name: 'NextaBizz', needs: 'B2B Marketplace, Trade, Anti-Competition', icon: Briefcase, color: 'text-pink-400' },
  { name: 'Adzy', needs: 'Ad Standards, TDRA, Consumer Protection', icon: Eye, color: 'text-red-400' },
  { name: 'Eventora', needs: 'Event Permits, Safety, Municipality, DTCM', icon: Star, color: 'text-violet-400' },
  { name: 'Rabtul', needs: 'SOC2, ISO 27001, NESA, Data Center, PCI-DSS', icon: Server, color: 'text-indigo-400' },
];

// ─── Pricing Tiers ────────────────────────────────────────
const pricingTiers = [
  {
    name: 'Starter',
    price: 'AED 199',
    period: '/month',
    target: 'Solopreneurs & SMEs',
    color: 'text-blue-400',
    borderColor: 'border-blue-500/30',
    bgColor: 'bg-blue-500/10',
    features: [
      'Tax & VAT compliance (1 entity)',
      'License & renewal tracker',
      'Deadline alerts & calendar',
      'Basic document storage (5 GB)',
      'Email support',
    ],
  },
  {
    name: 'Business',
    price: 'AED 799',
    period: '/month',
    target: 'Growing Companies',
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
    bgColor: 'bg-emerald-500/10',
    popular: true,
    features: [
      'All Starter features',
      'AML/KYC/KYB compliance',
      'Data privacy (PDPL/GDPR)',
      'Labor & WPS compliance',
      'Compliance reports & dashboards',
      'Multi-entity (up to 5)',
      'Document storage (50 GB)',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'AED 2,999',
    period: '/month',
    target: 'Large Corps & Groups',
    color: 'text-purple-400',
    borderColor: 'border-purple-500/30',
    bgColor: 'bg-purple-500/10',
    features: [
      'All Business features',
      'All 8 compliance pillars',
      'IT & Cybersecurity (SOC2, PCI)',
      'Shariah compliance',
      'Industry-specific modules',
      'Unlimited entities',
      'API access & integrations',
      'Custom workflows & automations',
      'Dedicated compliance advisor',
      'Unlimited storage',
    ],
  },
  {
    name: 'RTMN Internal',
    price: 'Custom',
    period: '',
    target: '10 RTMN Companies',
    color: 'text-[#c9a227]',
    borderColor: 'border-[#c9a227]/30',
    bgColor: 'bg-[#c9a227]/10',
    features: [
      'Full platform access',
      'Custom Rabtul integrations',
      'Cross-company compliance view',
      'Shared policy library',
      'Shariah board portal',
      'Group governance dashboard',
      'Real-time regulatory feeds',
      'Dedicated compliance team',
    ],
  },
];

// ─── Platform Features ────────────────────────────────────────
const platformFeatures = [
  {
    name: 'AI Regulatory Monitor',
    icon: Brain,
    description: 'AI-powered monitoring of regulatory changes across all 6 GCC countries. Auto-alerts when new laws, amendments, or circulars affect your business.',
  },
  {
    name: 'Compliance Calendar',
    icon: Clock,
    description: 'Unified calendar with all filing deadlines, renewal dates, audit schedules, and reporting periods. Never miss a deadline.',
  },
  {
    name: 'Document Vault',
    icon: HardDrive,
    description: 'Encrypted, tamper-proof document storage for licenses, contracts, policies, and audit evidence. Full version history and access logging.',
  },
  {
    name: 'Risk Scoring Engine',
    icon: Activity,
    description: 'Real-time compliance risk scoring across all 8 pillars. Identify gaps before regulators do. Color-coded dashboard with remediation steps.',
  },
  {
    name: 'Audit Trail',
    icon: Search,
    description: '100% immutable audit trail for every compliance action. Who did what, when, and why. Export-ready for any regulator.',
  },
  {
    name: 'Policy Library',
    icon: BookOpen,
    description: 'Pre-built GCC compliance policy templates. Customize, version, distribute, and track acknowledgments across your organization.',
  },
  {
    name: 'Workflow Automation',
    icon: Zap,
    description: 'Automated compliance workflows: KYC verification → risk scoring → approval → monitoring. Reduce manual work by 80%.',
  },
  {
    name: 'Multi-Language',
    icon: Globe,
    description: 'Full Arabic and English support. Bilingual reports, templates, and regulatory references. RTL-native interface.',
  },
  {
    name: 'Integration Hub',
    icon: GitBranch,
    description: 'Connect to accounting software (Xero, QuickBooks), HR systems (SAP, BambooHR), and government portals (goAML, FTA).',
  },
  {
    name: 'Role-Based Access',
    icon: UserCheck,
    description: 'Compliance Officer, Legal, Finance, HR, IT — each role sees only what they need. Full RBAC with audit logging.',
  },
  {
    name: 'Real-Time Dashboards',
    icon: BarChart3,
    description: 'Live compliance health score across all entities, jurisdictions, and pillars. Drill down from group-level to individual findings.',
  },
  {
    name: 'Regulator Portal',
    icon: Building2,
    description: 'Direct integration with government portals for filing, submissions, and status tracking. No more manual portal navigation.',
  },
];

// ─── Expandable Helper ────────────────────────────────────────
function Expandable({ title, children, defaultOpen = false }: {
  title: string; children: React.ReactNode; defaultOpen?: boolean;
}) {
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

// ════════════════════════════════════════════════════════════════════
// MAIN PAGE
// ════════════════════════════════════════════════════════════════════
export default function AmanaPage() {
  const [activePillar, setActivePillar] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/30 via-[#0a1628] to-emerald-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <Link href="/" className="text-teal-400 hover:text-teal-300 text-sm flex items-center gap-1 mb-6">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center">
              <Shield className="w-7 h-7 text-teal-400" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Amana <span className="text-teal-400">أمانة</span>
              </h1>
              <p className="text-slate-400 text-sm mt-1">by BizOne Technology</p>
            </div>
          </div>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-4">
            The unified compliance operating system for GCC businesses. Tax, AML, data privacy, IT security, Shariah, labor, licensing — all 8 pillars in one platform.
          </p>
          <p className="text-slate-400 mb-8">
            Built for RTMN&apos;s 10 companies internally. Now available as SaaS for every business in the GCC.
          </p>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className={`p-4 rounded-xl border ${stat.bg} ${stat.border} text-center`}>
                <div className={`text-2xl sm:text-3xl font-black ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Amana */}
      <section className="py-16 px-4 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4">Why Amana?</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            GCC compliance is fragmented across dozens of regulators, multiple languages, and 6 different jurisdictions. Most businesses use spreadsheets and lawyers. Amana replaces all of that.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: 'Before Amana',
                color: 'border-red-500/30',
                bg: 'bg-red-500/5',
                icon: AlertTriangle,
                iconColor: 'text-red-400',
                items: [
                  'Compliance scattered across spreadsheets',
                  'Missed deadlines = fines (AED 50K-500M)',
                  'Manual tracking of 25+ regulators',
                  'No visibility across entities',
                  'Expensive external consultants',
                  'Reactive — find out after the fine',
                ],
              },
              {
                title: 'With Amana',
                color: 'border-emerald-500/30',
                bg: 'bg-emerald-500/5',
                icon: CheckCircle,
                iconColor: 'text-emerald-400',
                items: [
                  'Single dashboard for all compliance',
                  'Auto-alerts 30/15/7 days before deadlines',
                  'AI monitors all regulatory changes',
                  'Group-wide compliance visibility',
                  'Built-in templates — no consultants needed',
                  'Proactive — fix before regulators flag',
                ],
              },
              {
                title: 'The Numbers',
                color: 'border-[#c9a227]/30',
                bg: 'bg-[#c9a227]/5',
                icon: TrendingUp,
                iconColor: 'text-[#c9a227]',
                items: [
                  '80% reduction in compliance effort',
                  '100% deadline compliance rate',
                  '90% faster audit preparation',
                  '60% cost savings vs. consultants',
                  '0 regulatory fines with full adoption',
                  '10x faster onboarding for new entities',
                ],
              },
            ].map((card) => (
              <div key={card.title} className={`rounded-2xl border ${card.color} ${card.bg} p-6`}>
                <div className="flex items-center gap-2 mb-4">
                  <card.icon className={`w-5 h-5 ${card.iconColor}`} />
                  <h3 className="text-lg font-bold text-white">{card.title}</h3>
                </div>
                <ul className="space-y-2">
                  {card.items.map((item, i) => (
                    <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                      <CheckCircle className={`w-4 h-4 ${card.iconColor} shrink-0 mt-0.5`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 Compliance Pillars */}
      <section className="py-16 px-4 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-2">8 Compliance Pillars</h2>
          <p className="text-slate-400 text-center mb-12">Every type of compliance your business faces — unified in one platform.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {compliancePillars.map((pillar) => {
              const Icon = pillar.icon;
              const isActive = activePillar === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(isActive ? null : pillar.id)}
                  className={`text-left rounded-2xl border p-5 transition-all ${
                    isActive
                      ? `${pillar.bgColor} ${pillar.borderColor} ring-1 ring-current`
                      : 'bg-slate-800/30 border-slate-700/50 hover:border-slate-600/50'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 rounded-xl ${pillar.bgColor} ${pillar.borderColor} border flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${pillar.color}`} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm">{pillar.name}</h3>
                      <span className="text-xs text-slate-500">{pillar.arabic}</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mb-3 line-clamp-2">{pillar.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {pillar.regulators.slice(0, 3).map((r) => (
                      <span key={r} className="text-xs px-2 py-0.5 bg-slate-700/50 rounded-full text-slate-300">{r}</span>
                    ))}
                    {pillar.regulators.length > 3 && (
                      <span className="text-xs px-2 py-0.5 bg-slate-700/50 rounded-full text-slate-400">+{pillar.regulators.length - 3}</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Detail */}
          {activePillar && (() => {
            const pillar = compliancePillars.find(p => p.id === activePillar);
            if (!pillar) return null;
            const Icon = pillar.icon;
            return (
              <div className={`mt-6 rounded-2xl border ${pillar.borderColor} ${pillar.bgColor} p-6`}>
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`w-6 h-6 ${pillar.color}`} />
                  <h3 className="text-xl font-bold text-white">{pillar.name}</h3>
                  <span className={`text-xs px-3 py-1 rounded-full ${pillar.bgColor} ${pillar.color}`}>{pillar.metric}</span>
                </div>
                <p className="text-slate-300 mb-4">{pillar.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  {pillar.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className={`w-4 h-4 ${pillar.color} shrink-0 mt-0.5`} />
                      <span className="text-sm text-slate-300">{cap}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-700/50 pt-3 mt-3">
                  <span className="text-xs text-slate-400 font-semibold">Regulators: </span>
                  {pillar.regulators.map((r) => (
                    <span key={r} className="text-xs px-2 py-0.5 bg-slate-700/50 rounded-full text-slate-300 mr-1">{r}</span>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* GCC Coverage Map */}
      <section className="py-16 px-4 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-2">GCC-Wide Coverage</h2>
          <p className="text-slate-400 text-center mb-12">One platform, 6 countries, 25+ regulatory bodies. Amana knows every regulator.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gccCountries.map((c) => (
              <div key={c.country} className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{c.flag}</span>
                    <h3 className="text-white font-bold">{c.country}</h3>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${c.color === 'text-emerald-400' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
                    {c.status}
                  </span>
                </div>
                <div className="text-xs text-slate-400 mb-2">{c.regulators} regulatory bodies tracked</div>
                <div className="flex flex-wrap gap-1">
                  {c.keyBodies.map((body) => (
                    <span key={body} className="text-xs px-2 py-0.5 bg-slate-700/50 rounded-full text-slate-300">{body}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-16 px-4 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-2">Platform Capabilities</h2>
          <p className="text-slate-400 text-center mb-12">Built-in tools that make compliance effortless, not just possible.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {platformFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.name} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 hover:border-teal-500/30 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-5 h-5 text-teal-400" />
                    <h3 className="text-white font-bold text-sm">{feature.name}</h3>
                  </div>
                  <p className="text-xs text-slate-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RTMN Internal Use */}
      <section className="py-16 px-4 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-2">Built for RTMN — Available for Everyone</h2>
          <p className="text-slate-400 text-center mb-12">Amana was born from RTMN&apos;s need to manage compliance across 10 companies and 6 countries. Now it&apos;s a product.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {rtmnCompanies.map((company) => {
              const Icon = company.icon;
              return (
                <div key={company.name} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 flex items-start gap-3">
                  <Icon className={`w-5 h-5 ${company.color} shrink-0 mt-0.5`} />
                  <div>
                    <h3 className="text-white font-bold text-sm">{company.name}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{company.needs}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Integrates */}
      <section className="py-16 px-4 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">How Amana Connects</h2>
          <div className="max-w-3xl mx-auto bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6">
            <pre className="text-xs sm:text-sm text-slate-300 overflow-x-auto whitespace-pre font-mono">{`┌─────────────────────────────────────────────┐
│              AMANA (أمانة)                   │
│  Tax │ AML │ Data │ Licenses │ IT │ Shariah │
│  Labor │ Industry-Specific                  │
└──────┬──────────────┬───────────────────────┘
       │              │
  ┌────▼────┐   ┌────▼──────┐
  │ Internal│   │ External  │
  │ (RTMN)  │   │ (SaaS)    │
  ├─────────┤   ├───────────┤
  │ BizOne  │   │ SMEs      │
  │ Finance │   │ Startups  │
  │ HQ Admin│   │ Enterprise│
  │ Rabtul  │   │ Law Firms │
  └────┬────┘   └─────┬─────┘
       │              │
  ┌────▼──────────────▼────┐
  │     Rabtul Core        │
  │  Identity │ Events │   │
  │  Audit │ Fraud │ API  │
  └────────────────────────┘
       │
  ┌────▼──────────────────┐
  │   Government Portals  │
  │ goAML │ FTA │ ZATCA │ │
  │ MOHRE │ DET │ TDRA  │ │
  └───────────────────────┘`}</pre>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-2">Pricing</h2>
          <p className="text-slate-400 text-center mb-12">From solopreneurs to enterprise groups. Compliance shouldn&apos;t cost more than the fines.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pricingTiers.map((tier) => (
              <div key={tier.name} className={`rounded-2xl border ${tier.borderColor} ${tier.bgColor} p-6 relative ${tier.popular ? 'ring-2 ring-emerald-500/50' : ''}`}>
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 bg-emerald-500 text-black rounded-full font-bold">
                    Most Popular
                  </span>
                )}
                <h3 className={`text-lg font-bold ${tier.color}`}>{tier.name}</h3>
                <div className="flex items-baseline gap-1 my-2">
                  <span className="text-3xl font-black text-white">{tier.price}</span>
                  <span className="text-sm text-slate-400">{tier.period}</span>
                </div>
                <p className="text-xs text-slate-400 mb-4">{tier.target}</p>
                <ul className="space-y-2">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                      <CheckCircle className={`w-3.5 h-3.5 ${tier.color} shrink-0 mt-0.5`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-16 px-4 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">Technical Architecture</h2>

          <Expandable title="Technology Stack" defaultOpen>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="border-b border-slate-700/50">
                  {['Layer', 'Technology', 'Purpose'].map((h) => (
                    <th key={h} className="text-left px-3 py-2 text-teal-400 font-semibold">{h}</th>
                  ))}
                </tr></thead>
                <tbody>
                  {[
                    ['Frontend', 'React / Next.js', 'Dashboard, forms, reports'],
                    ['Mobile', 'React Native', 'iOS & Android compliance app'],
                    ['Backend', 'Go (Golang)', 'Microservices, rule engine'],
                    ['Database', 'PostgreSQL 16', 'Compliance data, audit logs'],
                    ['Cache', 'Redis', 'Sessions, rule caching'],
                    ['Search', 'Elasticsearch', 'Regulatory text search, document search'],
                    ['ML/AI', 'Python + GPT-4', 'Regulatory change analysis, risk scoring'],
                    ['Storage', 'S3 + KMS', 'Encrypted document vault'],
                    ['Queue', 'Kafka', 'Event-driven compliance workflows'],
                    ['Auth', 'Rabtul Identity SSO', 'Single sign-on across RTMN'],
                    ['Hosting', 'AWS me-south-1', 'GCC-compliant data residency'],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-slate-800/50">
                      <td className="px-3 py-2 text-white font-medium">{row[0]}</td>
                      <td className="px-3 py-2 text-slate-300">{row[1]}</td>
                      <td className="px-3 py-2 text-slate-400">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Expandable>

          <Expandable title="Data Residency & Security">
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2"><Shield className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" /><span><strong className="text-white">Data Residency:</strong> All data stored in AWS me-south-1 (Bahrain). UAE/KSA data never leaves GCC region.</span></div>
              <div className="flex items-start gap-2"><Lock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" /><span><strong className="text-white">Encryption:</strong> AES-256 at rest, TLS 1.3 in transit. KYC documents use field-level encryption.</span></div>
              <div className="flex items-start gap-2"><Eye className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" /><span><strong className="text-white">Audit:</strong> 100% immutable audit trail. 7-year retention for financial records.</span></div>
              <div className="flex items-start gap-2"><Fingerprint className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" /><span><strong className="text-white">Access:</strong> MFA required. RBAC with 6 role levels. IP allowlisting for admin.</span></div>
              <div className="flex items-start gap-2"><Server className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" /><span><strong className="text-white">Compliance:</strong> Amana itself is SOC2 Type II certified and PCI-DSS compliant.</span></div>
            </div>
          </Expandable>

          <Expandable title="Rabtul Core Integration">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="border-b border-slate-700/50">
                  {['Rabtul Service', 'Amana Uses For', 'Integration'].map((h) => (
                    <th key={h} className="text-left px-3 py-2 text-teal-400 font-semibold">{h}</th>
                  ))}
                </tr></thead>
                <tbody>
                  {[
                    ['Identity & SSO', 'Single sign-on, user KYC data', 'Direct API'],
                    ['Event Bus', 'Compliance events, deadline alerts', 'Subscribe'],
                    ['Fraud & Audit', 'Transaction monitoring data, audit logs', 'Direct API'],
                    ['AIRA (AI/ML)', 'Risk scoring models, anomaly detection', 'Direct API'],
                    ['Notification Hub', 'Deadline reminders, alert escalation', 'Service Token'],
                    ['API Gateway', 'All API calls routed through', 'Standard'],
                    ['Rule Engine', 'Compliance rules evaluation', 'Direct API'],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-slate-800/50">
                      <td className="px-3 py-2 text-white font-medium">{row[0]}</td>
                      <td className="px-3 py-2 text-slate-300">{row[1]}</td>
                      <td className="px-3 py-2 text-slate-400">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Expandable>

          <Expandable title="Competitive Landscape">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="border-b border-slate-700/50">
                  {['Feature', 'Amana', 'Vanta', 'Drata', 'Sprinto', 'Manual/Consultants'].map((h) => (
                    <th key={h} className="text-left px-3 py-2 text-teal-400 font-semibold whitespace-nowrap">{h}</th>
                  ))}
                </tr></thead>
                <tbody>
                  {[
                    ['GCC Regulators', '✅ 25+', '❌', '❌', '❌', '⚠️ Varies'],
                    ['Arabic Language', '✅ Native', '❌', '❌', '❌', '⚠️ Manual'],
                    ['AML/CFT', '✅', '❌', '❌', '❌', '✅'],
                    ['VAT/Tax', '✅', '❌', '❌', '❌', '✅'],
                    ['Shariah', '✅', '❌', '❌', '❌', '⚠️ Rare'],
                    ['SOC2/PCI', '✅', '✅', '✅', '✅', '✅'],
                    ['Labor/WPS', '✅', '❌', '❌', '❌', '✅'],
                    ['Industry-Specific', '✅', '❌', '❌', '❌', '⚠️ Varies'],
                    ['Data Residency (GCC)', '✅ Bahrain', '❌ US', '❌ US', '❌ US', '✅'],
                    ['Gov Portal Integration', '✅', '❌', '❌', '❌', '⚠️ Manual'],
                    ['Starting Price', 'AED 199/mo', '$5,000/yr', '$3,000/yr', '$3,000/yr', 'AED 10K+/mo'],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-slate-800/50">
                      {row.map((cell, j) => (
                        <td key={j} className={`px-3 py-2 whitespace-nowrap ${j === 0 ? 'text-white font-medium' : cell.startsWith('✅') ? 'text-emerald-400' : cell.startsWith('❌') ? 'text-red-400' : 'text-amber-400'}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Expandable>
        </div>
      </section>

      {/* Revenue Potential */}
      <section className="py-16 px-4 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">Revenue Potential</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { year: 'Year 1', revenue: 'AED 2-5M', customers: '500-1,000', focus: 'UAE + RTMN internal', color: 'text-blue-400', border: 'border-blue-500/30', bg: 'bg-blue-500/10' },
              { year: 'Year 2', revenue: 'AED 10-20M', customers: '2,000-5,000', focus: 'UAE + KSA + Bahrain', color: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10' },
              { year: 'Year 3', revenue: 'AED 30-60M', customers: '10,000+', focus: 'Full GCC + Enterprise', color: 'text-purple-400', border: 'border-purple-500/30', bg: 'bg-purple-500/10' },
            ].map((yr) => (
              <div key={yr.year} className={`rounded-2xl border ${yr.border} ${yr.bg} p-6 text-center`}>
                <div className="text-sm text-slate-400">{yr.year}</div>
                <div className={`text-2xl font-black ${yr.color} my-2`}>{yr.revenue}</div>
                <div className="text-xs text-slate-400">{yr.customers} customers</div>
                <div className="text-xs text-slate-500 mt-1">{yr.focus}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Compliance, Simplified.</h2>
          <p className="text-slate-400 mb-8">Stop worrying about fines. Start building with confidence.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/bizone" className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-500 transition-colors">
              <Store className="w-5 h-5" /> BizOne Technology
            </Link>
            <Link href="/rabtul-core" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-500 transition-colors">
              <Code className="w-5 h-5" /> Rabtul Core Spec
            </Link>
            <Link href="/legal-compliance" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors">
              <Scale className="w-5 h-5" /> Legal Compliance
            </Link>
            <Link href="/rtmn-ecosystem" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors">
              <Layers className="w-5 h-5" /> RTMN Ecosystem
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
