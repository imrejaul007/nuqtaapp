'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Target, Play, Rocket, Database, Building2, Store, Layers, Network,
  Users, DollarSign, Shield, Server, Globe, AlertTriangle, GitBranch,
  BarChart3, Scale, Trophy, ChevronDown, ChevronUp, ArrowRight,
  CheckCircle, Eye, BookOpen, Calendar, Zap, MapPin, CreditCard,
  Wallet, Settings, Heart, Star, Briefcase, Clock, Code, Brain,
  Smartphone, Package, Lock, FileText, TrendingUp, Activity
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ─── Types ──────────────────────────────────────────────────────────
interface Section {
  id: string;
  label: string;
  icon: React.ElementType;
  phase: string;
}

// ─── Sidebar Sections ───────────────────────────────────────────────
const sections: Section[] = [
  { id: 'overview', label: 'Executive Overview', icon: Target, phase: '' },
  { id: 'day-1', label: 'Day 1 — Starting Point', icon: Play, phase: 'Pre' },
  { id: 'nuqta-launch', label: 'Nuqta App Launch', icon: Rocket, phase: 'M1-5' },
  { id: 'rabtul-core', label: 'Rabtul Foundation', icon: Database, phase: 'M1-4' },
  { id: 'group-formation', label: 'RTMN Group Formation', icon: Building2, phase: 'M2-4' },
  { id: 'bizone-build', label: 'BizOne OS Build', icon: Store, phase: 'M3-7' },
  { id: 'product-sequence', label: '26 Product Launches', icon: Layers, phase: 'M1-38' },
  { id: 'company-activation', label: 'Sister Company Activation', icon: Network, phase: 'M1-25' },
  { id: 'team-scaling', label: 'Team & Squad Scaling', icon: Users, phase: 'M1-48' },
  { id: 'financial-milestones', label: 'Financial Milestones', icon: DollarSign, phase: '$$$' },
  { id: 'licensing', label: 'Licensing & Compliance', icon: Shield, phase: 'M1-40' },
  { id: 'tech-infrastructure', label: 'Tech Infrastructure', icon: Server, phase: 'M1-48' },
  { id: 'gcc-expansion', label: 'GCC Expansion', icon: Globe, phase: 'M25-38' },
  { id: 'risk-management', label: 'Risk Management', icon: AlertTriangle, phase: '' },
  { id: 'dependencies', label: 'Dependencies & Critical Path', icon: GitBranch, phase: '' },
  { id: 'kpi-dashboard', label: 'KPI Dashboard', icon: BarChart3, phase: '' },
  { id: 'governance', label: 'Governance Framework', icon: Scale, phase: '' },
  { id: 'exit-criteria', label: 'Exit Criteria & Success', icon: Trophy, phase: 'M48' },
];

// ─── Expandable Component ───────────────────────────────────────────
function Expandable({ title, children, defaultOpen = false, icon: Icon, color = 'text-[#c9a227]' }: {
  title: string; children: React.ReactNode; defaultOpen?: boolean; icon?: React.ElementType; color?: string;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-slate-700/50 rounded-xl overflow-hidden mb-4">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 bg-slate-800/50 hover:bg-slate-800/80 transition-colors text-left">
        <div className="flex items-center gap-3">
          {Icon && <Icon className={`w-5 h-5 ${color}`} />}
          <span className="font-semibold text-white">{title}</span>
        </div>
        {open ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
      </button>
      {open && <div className="px-5 py-4 bg-slate-900/30">{children}</div>}
    </div>
  );
}

// ─── Table Component ────────────────────────────────────────────────
function DocTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-700/50">
            {headers.map((h, i) => (
              <th key={i} className="text-left px-3 py-2 text-[#c9a227] font-semibold whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30">
              {row.map((cell, j) => (
                <td key={j} className={`px-3 py-2 ${j === 0 ? 'text-white font-medium' : 'text-slate-300'} whitespace-nowrap`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Code Block ─────────────────────────────────────────────────────
function CodeBlock({ title, code }: { title?: string; code: string }) {
  return (
    <div className="mb-4">
      {title && <div className="text-xs font-semibold text-[#c9a227] mb-1 uppercase tracking-wider">{title}</div>}
      <pre className="bg-slate-900 border border-slate-700/50 rounded-lg p-4 text-sm text-slate-300 overflow-x-auto whitespace-pre">{code}</pre>
    </div>
  );
}

function Badge({ text, color = 'bg-[#c9a227]/20 text-[#c9a227]' }: { text: string; color?: string }) {
  return <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${color}`}>{text}</span>;
}

function InfoBox({ type = 'info', children }: { type?: 'info' | 'warning' | 'action'; children: React.ReactNode }) {
  const styles = {
    info: 'bg-blue-500/10 border-blue-500/30 text-blue-300',
    warning: 'bg-amber-500/10 border-amber-500/30 text-amber-300',
    action: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
  };
  const icons = { info: Eye, warning: AlertTriangle, action: CheckCircle };
  const Icon = icons[type];
  return (
    <div className={`flex gap-3 p-4 rounded-xl border ${styles[type]} mb-4`}>
      <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
      <div className="text-sm">{children}</div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION 1: EXECUTIVE OVERVIEW
// ════════════════════════════════════════════════════════════════════
function OverviewSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Executive Overview</h2>
      <p className="text-slate-400 mb-6">The ONE definitive page — from Day 1 to exit-ready in 48 months.</p>

      <InfoBox type="action">
        <strong>Execution Order:</strong> 1) Launch Nuqta App → 2) Form RTMN Group → 3) Build BizOne OS → 4) All sister companies & products per priority
      </InfoBox>

      <CodeBlock title="48-Month Journey" code={`
Day 1          Month 5        Month 8        Month 16       Month 24       Month 38       Month 48
  │               │              │              │              │              │              │
  ▼               ▼              ▼              ▼              ▼              ▼              ▼
┌─────┐     ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
│START│────▶│  NUQTA   │─▶│ FINTECH  │─▶│ COMMERCE │─▶│UAE MATURE│─▶│GCC SCALE │─▶│EXIT-READY│
│5 ppl│     │  50K MAU │  │ Qist+Pay │  │Wasil+Safar│  │500K MAU │  │ 2M MAU   │  │ 5M MAU  │
│$200K│     │1.5K merch│  │ $500K MRR│  │$2M MRR   │  │$8M MRR  │  │$25M MRR  │  │$60M MRR │
└─────┘     └──────────┘  └──────────┘  └──────────┘  └──────────┘  └──────────┘  └──────────┘
`} />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Products', value: '26', sub: 'Across 11 companies', color: 'text-emerald-400' },
          { label: 'Countries', value: '6', sub: 'Full GCC coverage', color: 'text-blue-400' },
          { label: 'Target MAU', value: '5M', sub: 'By Month 48', color: 'text-purple-400' },
          { label: 'Exit Target', value: '$2-3B', sub: '8-10x revenue', color: 'text-[#c9a227]' },
        ].map((s, i) => (
          <div key={i} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-white text-sm font-medium">{s.label}</p>
            <p className="text-slate-500 text-xs">{s.sub}</p>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-bold text-white mb-3">The 4 Macro Phases</h3>
      <DocTable
        headers={['Phase', 'Timeline', 'Focus', 'Products Live', 'MAU Target', 'Revenue Target']}
        rows={[
          ['Phase 1: UAE Foundation', 'Month 1-24', 'Launch Nuqta → Build ecosystem', '16 products', '500K MAU', '$8M MRR'],
          ['Phase 2: GCC Expansion', 'Month 25-38', 'KSA → Qatar → Full GCC', '22 products', '2M MAU', '$25M MRR'],
          ['Phase 3: Scale & Optimize', 'Month 39-44', 'All products, profitability', '26 products', '4M MAU', '$45M MRR'],
          ['Phase 4: Exit Ready', 'Month 45-48', 'IPO / acquisition prep', '26 products', '5M MAU', '$60M MRR'],
        ]}
      />

      <h3 className="text-lg font-bold text-white mb-3 mt-6">How This Page Connects</h3>
      <DocTable
        headers={['Deep-Dive Page', 'What It Covers', 'Link']}
        rows={[
          ['Master Roadmap', 'Horizons H1/H2/H3 framework, KPI gates', '/master-roadmap'],
          ['3-Year Plan', 'Financial model, P&L, team structure', '/3-year-plan'],
          ['Execution Plan', 'H1 2026 tactical plan, commercial models', '/execution-plan'],
          ['Group Launch Strategy', 'Product sequencing, marketing channels', '/group-launch-strategy'],
          ['Rabtul Tech', 'Sprint breakdown, squad structure', '/rabtul-tech'],
          ['RTMN Group', 'Company structure, governance rules', '/rtmn-group'],
          ['BizOne OS Spec', '219 merchant screens, full spec', '/bizone-os'],
          ['HQ Admin Spec', '224 admin screens, full spec', '/hq-admin'],
          ['Rabtul Core Spec', '9 core services, API schemas', '/rabtul-core'],
        ]}
      />
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION 2: DAY 1 — STARTING POINT
// ════════════════════════════════════════════════════════════════════
function Day1Section() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Day 1 — The Starting Point</h2>
      <p className="text-slate-400 mb-6">Current state and the first 30 days of execution.</p>

      <InfoBox type="info">
        <strong>Date:</strong> March 2026 | <strong>Team:</strong> 5 Founders | <strong>Capital:</strong> $200K (Tranche 1 of $400K Pre-Seed)
      </InfoBox>

      <h3 className="text-lg font-bold text-white mb-3">Assets on Day 1</h3>
      <DocTable
        headers={['Asset', 'Status', 'Details']}
        rows={[
          ['Founding Team', '5 people', 'CEO, CTO (interim), 3 engineers'],
          ['Capital', '$200K', 'Tranche 1 of $400K pre-seed, 8-month runway at $25K/mo burn'],
          ['Codebase', '241 pages', 'Next.js app with full product specs, roadmaps, documentation'],
          ['Product Specs', 'Complete', 'BizOne OS (219 screens), HQ Admin (224 screens), Rabtul Core (9 services)'],
          ['Business Plan', 'Complete', 'GTM, financial models, pitch decks, legal frameworks'],
          ['Domain & Brand', 'Secured', 'nuqtaapp.com, brand identity, Arabic naming'],
        ]}
      />

      <h3 className="text-lg font-bold text-white mb-3 mt-6">Pre-Launch Checklist (Week 1-4)</h3>
      <Expandable title="Legal & Corporate (Week 1-2)" icon={FileText} color="text-blue-400" defaultOpen>
        <DocTable
          headers={['Task', 'Owner', 'Timeline', 'Cost']}
          rows={[
            ['Register RTMN Digital Holding LLC', 'CEO', 'Week 1', 'AED 15,000'],
            ['Register Nuqta Corporation LLC', 'CEO', 'Week 1', 'AED 12,000'],
            ['Open corporate bank accounts (ENBD/FAB)', 'CEO', 'Week 1-2', 'AED 5,000'],
            ['File trademark applications (Nuqta, NuqtaPay)', 'Legal', 'Week 2', 'AED 8,000'],
            ['Draft founder agreements & ESOP pool (15%)', 'Legal', 'Week 2', 'AED 10,000'],
            ['Setup accounting (Xero/QuickBooks)', 'CEO', 'Week 2', 'AED 500/mo'],
          ]}
        />
      </Expandable>

      <Expandable title="Technology Setup (Week 1-3)" icon={Server} color="text-purple-400">
        <DocTable
          headers={['Task', 'Owner', 'Timeline', 'Cost']}
          rows={[
            ['AWS/GCP account + CI/CD pipeline', 'CTO', 'Week 1', '$500/mo'],
            ['GitHub org + branch protection', 'CTO', 'Week 1', '$44/mo'],
            ['React Native project scaffold (Nuqta app)', 'Mobile Lead', 'Week 1-2', '-'],
            ['Rabtul Core: Auth + Wallet services', 'Backend Lead', 'Week 1-3', '-'],
            ['PostgreSQL + Redis + Event bus setup', 'Backend Lead', 'Week 2', '$200/mo'],
            ['Monitoring: Datadog + Sentry', 'CTO', 'Week 2', '$100/mo'],
            ['Design system in Figma', 'Designer', 'Week 2-3', '$15/mo'],
          ]}
        />
      </Expandable>

      <Expandable title="Team & Hiring (Week 2-4)" icon={Users} color="text-emerald-400">
        <DocTable
          headers={['Role', 'Priority', 'Salary Range (AED/mo)', 'Hire By']}
          rows={[
            ['CTO (full-time)', 'P0 — Critical', '35,000-50,000 + 3-5% equity', 'Month 2'],
            ['Senior Mobile Engineer', 'P0 — Critical', '25,000-35,000', 'Week 3'],
            ['Senior Backend Engineer', 'P0 — Critical', '25,000-35,000', 'Week 3'],
            ['UI/UX Designer', 'P1 — High', '15,000-25,000', 'Week 4'],
            ['QA Engineer', 'P1 — High', '12,000-18,000', 'Month 2'],
          ]}
        />
      </Expandable>

      <Expandable title="Merchant Pipeline (Week 2-4)" icon={Store} color="text-amber-400">
        <DocTable
          headers={['Activity', 'Target', 'Owner', 'Timeline']}
          rows={[
            ['Sign LOIs with 100 launch merchants', '100 LOIs', 'CEO + BD', 'Week 2-4'],
            ['Identify 10 anchor merchants (premium brands)', '10 anchors', 'CEO', 'Week 2-3'],
            ['Create merchant onboarding kit', '1 kit', 'Marketing', 'Week 3'],
            ['Setup merchant support WhatsApp', '1 channel', 'Operations', 'Week 2'],
            ['Negotiate first 50 merchant deals', '50 signed', 'BD Team', 'Week 3-4'],
          ]}
        />
      </Expandable>

      <h3 className="text-lg font-bold text-white mb-3 mt-6">Week 1-4 Sprint Plan</h3>
      <DocTable
        headers={['Week', 'Engineering', 'Business', 'Milestone']}
        rows={[
          ['Week 1', 'Infra setup, Rabtul Auth service', 'Company registration, bank accounts', 'Foundation laid'],
          ['Week 2', 'Nuqta app scaffold, wallet service', 'First 20 merchant LOIs, hiring pipeline', 'Code flows'],
          ['Week 3', 'QR scan flow, merchant discovery', '50 merchant LOIs, design system', 'Core features'],
          ['Week 4', 'Coin earning/redeeming, POS prototype', '100 merchant LOIs, CTO hired', 'MVP alpha ready'],
        ]}
      />
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION 3: NUQTA APP LAUNCH
// ════════════════════════════════════════════════════════════════════
function NuqtaLaunchSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Nuqta App Launch — Month 1-5</h2>
      <p className="text-slate-400 mb-6">The consumer app launches FIRST. Get users, prove traction, unlock everything else.</p>

      <InfoBox type="warning">
        <strong>Why Nuqta First?</strong> Consumer traction is the foundation. Without users, merchants won&apos;t join. Without merchants, no GMV. Without GMV, no revenue. Nuqta is the entry point.
      </InfoBox>

      <h3 className="text-lg font-bold text-white mb-3">MVP Scope (Launch Day Features)</h3>
      <DocTable
        headers={['Feature', 'Description', 'Priority', 'Sprint']}
        rows={[
          ['QR Scan & Pay', 'Scan merchant QR → earn NuqtaCoins instantly', 'P0', 'Sprint 1-2'],
          ['Merchant Discovery', 'Browse nearby merchants by category, location', 'P0', 'Sprint 2-3'],
          ['Wallet (4 Coin Types)', 'NuqtaCoin, BrandCoin, BoostCoin, GiftCoin', 'P0', 'Sprint 1-3'],
          ['User Profile & Auth', 'Phone OTP signup, profile setup, KYC lite', 'P0', 'Sprint 1'],
          ['Reward Redemption', 'Spend coins at any merchant (universal liquidity)', 'P0', 'Sprint 3-4'],
          ['Referral System', 'Invite friends → both earn 50 NuqtaCoins', 'P1', 'Sprint 3'],
          ['Push Notifications', 'Nearby deals, coin expiry, new merchants', 'P1', 'Sprint 4'],
          ['Social Sharing', 'Share deals to earn 5% social bonus', 'P1', 'Sprint 4-5'],
          ['Nuqta+ Membership', 'AED 9.99/mo → 2x coins, early access', 'P2', 'Sprint 5'],
        ]}
      />

      <h3 className="text-lg font-bold text-white mb-3 mt-6">Launch Timeline</h3>
      <DocTable
        headers={['Month', 'Milestone', 'Users', 'Merchants', 'Key Action']}
        rows={[
          ['M1', 'Alpha (internal)', '50 testers', '10 beta merchants', 'Core flow testing'],
          ['M2', 'Closed Beta', '500 users', '50 merchants', 'Invite-only, bug hunting'],
          ['M3', 'Public Launch', '5,000 users', '200 merchants', 'App Store + Play Store live'],
          ['M4', 'Growth Sprint', '20,000 users', '800 merchants', 'Referral program, events'],
          ['M5', 'H1 Gate', '50,000 MAU', '1,500 merchants', 'KPI gate → unlock Seed funding'],
        ]}
      />

      <h3 className="text-lg font-bold text-white mb-3 mt-6">User Acquisition Strategy</h3>
      <DocTable
        headers={['Channel', 'Budget %', 'Target CAC', 'M1-5 Users', 'Strategy']}
        rows={[
          ['Referral Program', '20%', 'AED 5', '15,000', '50 coins per referral, viral loop'],
          ['Social Media Ads', '25%', 'AED 12', '10,000', 'Instagram/TikTok: Dubai lifestyle'],
          ['Merchant Cross-Promo', '15%', 'AED 3', '8,000', 'QR table tents, receipt promos'],
          ['Events & Activations', '20%', 'AED 15', '7,000', 'Mall activations, food festivals'],
          ['Influencer Marketing', '10%', 'AED 10', '5,000', '50 micro-influencers, unboxing'],
          ['Organic/ASO', '10%', 'AED 0', '5,000', 'App store optimization, SEO'],
        ]}
      />

      <h3 className="text-lg font-bold text-white mb-3 mt-6">30/60/90-Day Goals</h3>
      <Expandable title="Day 30: Product-Market Signal" icon={Target} color="text-emerald-400" defaultOpen>
        <ul className="space-y-2 text-slate-300 text-sm">
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" /> 5,000 downloads, 2,000 active users</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" /> 200 merchants onboarded, 50 active weekly</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" /> 30% Day-7 retention rate</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" /> 3+ transactions per active user per week</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" /> App rating ≥ 4.2 stars</li>
        </ul>
      </Expandable>

      <Expandable title="Day 60: Growth Signal" icon={TrendingUp} color="text-blue-400">
        <ul className="space-y-2 text-slate-300 text-sm">
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" /> 20,000 MAU, 8,000 DAU</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" /> 800 merchants, 300 active weekly</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" /> 25% D30 retention rate</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" /> AED 5M monthly GMV through platform</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" /> Referral coefficient ≥ 1.2 (viral)</li>
        </ul>
      </Expandable>

      <Expandable title="Day 90: Market Signal (H1 KPI Gate)" icon={Rocket} color="text-purple-400">
        <ul className="space-y-2 text-slate-300 text-sm">
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" /> 50,000 MAU, 15,000 DAU</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" /> 1,500 merchants, 500 active weekly</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" /> 30% D30 retention, 15% D90 retention</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" /> AED 30M cumulative GMV</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" /> $50K MRR (first revenue)</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" /> → UNLOCKS: Seed funding ($2M), H2 products (Qist, Hawil)</li>
        </ul>
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION 4: RABTUL CORE
// ════════════════════════════════════════════════════════════════════
function RabtulCoreSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Rabtul Core — Silent Foundation</h2>
      <p className="text-slate-400 mb-6">The brain and backbone of the entire ecosystem. Runs silently behind Nuqta from Day 1.</p>

      <InfoBox type="warning">
        <strong>4 Non-Negotiable Rules:</strong><br />
        1. No app owns wallet — all wallet logic in Rabtul only<br />
        2. No app owns merchants — all merchant data in BizOne only<br />
        3. No company bypasses Rabtul — every transaction flows through Rabtul<br />
        4. Rabtul is single source of truth for identity, wallet, rules, events
      </InfoBox>

      <h3 className="text-lg font-bold text-white mb-3">9 Core Services — Build Timeline</h3>
      <DocTable
        headers={['Service', 'Sprint', 'Month', 'Depends On', 'Apps It Unlocks']}
        rows={[
          ['Identity & SSO', 'Sprint 1', 'M1', 'None', 'ALL apps (every app needs auth)'],
          ['Wallet Ledger', 'Sprint 1', 'M1', 'Identity', 'Nuqta, NuqtaPay, all coin flows'],
          ['Event Bus', 'Sprint 1-2', 'M1-2', 'None', 'ALL apps (real-time events)'],
          ['API Gateway', 'Sprint 2', 'M2', 'Identity', 'ALL external-facing apps'],
          ['Rule Engine', 'Sprint 3', 'M3', 'Event Bus', 'BizOne, HQ Admin (dynamic rules)'],
          ['AI & Analytics (AIRA)', 'Sprint 3-4', 'M3-4', 'Event Bus, Wallet', 'Nuqta (recommendations), Adzy'],
          ['Notification Hub', 'Sprint 4', 'M4', 'Event Bus, Identity', 'ALL apps (push, SMS, email)'],
          ['Fraud & Audit', 'Sprint 4', 'M4', 'Event Bus, Wallet', 'NuqtaPay, Qist, Hawil'],
          ['RTMN Core SDK', 'Sprint 2-4', 'M2-4', 'All above', 'SDK for all 26 products to integrate'],
        ]}
      />

      <CodeBlock title="Architecture" code={`
┌─────────────────────────────────────────────────────────┐
│                    API GATEWAY                           │
│              (rate limiting, auth, routing)               │
├──────┬──────┬──────┬──────┬──────┬──────┬──────┬────────┤
│ SSO  │Wallet│Rules │Events│ AIRA │Notify│Fraud │  SDK   │
│      │Ledger│Engine│ Bus  │  AI  │ Hub  │Audit │        │
├──────┴──────┴──────┴──────┴──────┴──────┴──────┴────────┤
│                  PostgreSQL + Redis                       │
│              (partitioned, multi-tenant)                  │
└─────────────────────────────────────────────────────────┘
              ▲               ▲               ▲
         Nuqta App       BizOne OS        HQ Admin
         (consumer)      (merchant)       (operator)
`} />

      <h3 className="text-lg font-bold text-white mb-3 mt-6">SDK Integration Timeline</h3>
      <DocTable
        headers={['Product', 'Integrates SDK', 'Services Used', 'Month']}
        rows={[
          ['Nuqta App', 'M1', 'Auth, Wallet, Events, Notifications', 'M1'],
          ['BizOne OS', 'M3', 'Auth, Wallet, Rules, Events, Analytics', 'M3'],
          ['NuqtaPay', 'M4', 'Auth, Wallet, Fraud, Events', 'M4'],
          ['Qist', 'M6', 'Auth, Wallet, Rules, Fraud, Analytics', 'M6'],
          ['Hawil', 'M8', 'Auth, Wallet, Fraud, Events', 'M8'],
          ['Adzy', 'M8', 'Auth, Analytics (AIRA), Events', 'M8'],
          ['Wasil', 'M10', 'Auth, Wallet, Events, Notifications', 'M10'],
          ['All remaining', 'M10-38', 'Full SDK (all 9 services)', 'M10-38'],
        ]}
      />

      <div className="mt-6 p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
        <p className="text-purple-300 text-sm"><strong>Deep Dive:</strong> See <Link href="/rabtul-core" className="text-[#c9a227] underline">Rabtul Core Spec</Link> for complete API schemas, database models, event definitions, and error codes for all 9 services.</p>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION 5: RTMN GROUP FORMATION
// ════════════════════════════════════════════════════════════════════
function GroupFormationSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">RTMN Group Formation — Month 2-4</h2>
      <p className="text-slate-400 mb-6">After Nuqta app is in motion, formalize the holding company and subsidiaries.</p>

      <InfoBox type="info">
        <strong>Why Month 2-4?</strong> Nuqta launches under Nuqta Corporation (registered Day 1). The broader RTMN Group structure gets formalized once the product is live and we need separate entities for fintech licensing, merchant ops, etc.
      </InfoBox>

      <h3 className="text-lg font-bold text-white mb-3">11 Companies — Formation Timeline</h3>
      <DocTable
        headers={['Company', 'Arabic', 'Formation', 'License Type', 'Initial Capital', 'First Product']}
        rows={[
          ['Nuqta Corporation', 'نقطة', 'Day 1 (M1)', 'DED Commercial', 'AED 100,000', 'Nuqta App'],
          ['RTMN Digital Holding', 'ر.ت.م.ن', 'Month 2', 'DED Holding', 'AED 500,000', 'HQ (governance)'],
          ['Rabtul Technologies', 'ربطول', 'Month 2', 'DED Technology', 'AED 150,000', 'Rabtul Core'],
          ['BizOne Technologies', 'بيزون', 'Month 3', 'DED Technology', 'AED 100,000', 'BizOne OS'],
          ['RTMN Finance', 'ر.ت.م.ن المالية', 'Month 4', 'CBUAE PSP + Credit', 'AED 2,000,000', 'NuqtaPay'],
          ['Adzy Media Network', 'أدزي', 'Month 6', 'DED Media', 'AED 50,000', 'Adzy'],
          ['Wasil Apps', 'وصل', 'Month 8', 'DED Technology', 'AED 100,000', 'Wasil Hub'],
          ['Travel, Trek & Experience', 'سفر', 'Month 10', 'Tourism Authority', 'AED 100,000', 'Safar'],
          ['Eventora+', 'إيفنتورا', 'Month 14', 'DED Events', 'AED 50,000', 'Eventora'],
          ['NextaBizz Marketplaces', 'نكستابيز', 'Month 20', 'DED Commercial', 'AED 100,000', 'NextaBizz'],
          ['Inventora', 'إنفنتورا', 'Month 20', 'DED Technology', 'AED 100,000', 'Inventora'],
        ]}
      />

      <h3 className="text-lg font-bold text-white mb-3 mt-6">Corporate Hierarchy</h3>
      <CodeBlock title="RTMN Group Structure" code={`
                    ┌──────────────────────┐
                    │  RTMN Digital Holding │  ← Level 0: Government
                    │  (HQ — Rules & Gov)   │
                    └──────────┬───────────┘
                               │
          ┌────────────────────┼────────────────────┐
          │                    │                     │
  ┌───────▼──────┐   ┌───────▼──────┐    ┌────────▼──────┐
  │   Rabtul     │   │    Nuqta     │    │  BizOne Tech  │  ← Level 1-2
  │Technologies  │   │ Corporation  │    │  (Merchants)  │
  │  (Core OS)   │   │ (Consumers)  │    │               │
  └──────────────┘   └──────────────┘    └───────────────┘
          │                    │                     │
  ┌───────┴───────────────────┴─────────────────────┴──────┐
  │                                                         │
  │  RTMN Finance │ Wasil Apps │ Travel Co │ Adzy │ Others │  ← Level 2-3
  └─────────────────────────────────────────────────────────┘
`} />

      <h3 className="text-lg font-bold text-white mb-3 mt-6">CBUAE Licensing (Critical Path for Fintech)</h3>
      <Expandable title="Financial Licenses Timeline" icon={CreditCard} color="text-emerald-400" defaultOpen>
        <DocTable
          headers={['License', 'Authority', 'Apply', 'Approval (Est.)', 'Cost', 'Required For']}
          rows={[
            ['Payment Service Provider', 'CBUAE', 'Month 3', 'Month 6-8', 'AED 100K+', 'NuqtaPay wallet'],
            ['Consumer Credit', 'CBUAE', 'Month 4', 'Month 8-10', 'AED 200K+', 'Qist BNPL'],
            ['Remittance / Money Transfer', 'CBUAE', 'Month 4', 'Month 8-10', 'AED 150K+', 'Hawil transfers'],
            ['Insurance Broker', 'Insurance Authority', 'Month 8', 'Month 12-14', 'AED 50K+', 'Daman marketplace'],
            ['Travel Agency', 'Tourism Authority', 'Month 8', 'Month 10', 'AED 30K+', 'Safar bookings'],
          ]}
        />
        <InfoBox type="warning">
          <strong>Mitigation:</strong> While CBUAE licenses are pending (6-8 month process), partner with licensed fintech providers (e.g., Magnati, Network International) as interim payment rails. Switch to own license once approved.
        </InfoBox>
      </Expandable>

      <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
        <p className="text-blue-300 text-sm"><strong>Deep Dive:</strong> See <Link href="/rtmn-group" className="text-[#c9a227] underline">RTMN Group</Link> for complete governance rules, what each company controls vs. does NOT control.</p>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION 6: BIZONE OS BUILD
// ════════════════════════════════════════════════════════════════════
function BizOneBuildSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">BizOne Merchant OS — Month 3-7</h2>
      <p className="text-slate-400 mb-6">The merchant backbone. No app in the ecosystem can bypass BizOne for merchant operations.</p>

      <InfoBox type="action">
        <strong>219 screens</strong> across 21 categories. This is the most complex product in the ecosystem. It powers every merchant interaction for all 26 products.
      </InfoBox>

      <h3 className="text-lg font-bold text-white mb-3">Build Phases</h3>
      <DocTable
        headers={['Phase', 'Month', 'Screens', 'Key Deliverables', 'Merchants']}
        rows={[
          ['MVP Core', 'M3-4', '45 screens', 'POS, basic inventory, merchant signup, dashboard', '50 beta'],
          ['Growth Features', 'M4-5', '+60 screens', 'CRM, orders, offers, staff management', '500'],
          ['Full Platform', 'M5-6', '+70 screens', 'Payments, shipping, compliance, reporting', '1,000'],
          ['Advanced', 'M6-7', '+44 screens', 'Kitchen ops, dynamic pricing, loyalty builder, integrations', '1,500'],
        ]}
      />

      <h3 className="text-lg font-bold text-white mb-3 mt-6">21 Module Categories</h3>
      <DocTable
        headers={['#', 'Category', 'Screens', 'Sprint', 'Priority']}
        rows={[
          ['1', 'Auth & Onboarding', '3', 'Sprint 1', 'P0'],
          ['2', 'Dashboard & Analytics', '6', 'Sprint 1-2', 'P0'],
          ['3', 'POS & Transactions', '7 (13 variants)', 'Sprint 1-2', 'P0'],
          ['4', 'Orders', '3', 'Sprint 2', 'P0'],
          ['5', 'Inventory', '10', 'Sprint 2-3', 'P0'],
          ['6', 'Customer Management', '8', 'Sprint 3', 'P1'],
          ['7', 'Financial Management', '6', 'Sprint 3-4', 'P1'],
          ['8', 'Offers & Promotions', '10', 'Sprint 4', 'P1'],
          ['9', 'Marketing', '5', 'Sprint 4', 'P1'],
          ['10', 'Kitchen & Restaurant Ops', '10', 'Sprint 5', 'P1'],
          ['11', 'Pricing & Revenue', '8', 'Sprint 5', 'P2'],
          ['12', 'Loyalty & Rewards', '11', 'Sprint 5-6', 'P1'],
          ['13', 'Staff Management', '9', 'Sprint 4', 'P1'],
          ['14', 'Payments & Settlements', '11', 'Sprint 3-4', 'P0'],
          ['15', 'Shipping & Delivery', '7', 'Sprint 6', 'P2'],
          ['16', 'Compliance & Tax', '7', 'Sprint 5', 'P1'],
          ['17', 'Vendor & Supplier', '8', 'Sprint 6', 'P2'],
          ['18', 'Reports', '12', 'Sprint 4-5', 'P1'],
          ['19', 'Digital Marketing', '5', 'Sprint 6', 'P2'],
          ['20', 'Integrations', '9', 'Sprint 6-7', 'P2'],
          ['21', 'Settings & Profile', '2', 'Sprint 1', 'P0'],
        ]}
      />

      <h3 className="text-lg font-bold text-white mb-3 mt-6">Merchant Revenue Model</h3>
      <Expandable title="3 Commercial Engines" icon={DollarSign} color="text-emerald-400" defaultOpen>
        <DocTable
          headers={['Engine', 'Commission', 'Nuqta Revenue', 'Coins to User', 'Target Verticals']}
          rows={[
            ['Engine A (Growth)', '15% total', '5%', '5% + 5% social bonus', 'F&B, salons, fitness, boutiques'],
            ['Engine B (Volume)', '5% total', '3%', '2% coins', 'Grocery, supermarkets, gold chains'],
            ['Engine C (Premium)', '8-12% custom', '4-6%', '4-6% coins', 'Luxury, hotels, high-margin'],
          ]}
        />
      </Expandable>

      <h3 className="text-lg font-bold text-white mb-3 mt-6">BizOne Merchant Tiers</h3>
      <DocTable
        headers={['Tier', 'Price', 'POS Terminals', 'Staff Accounts', 'Features']}
        rows={[
          ['Starter (Free)', 'AED 0/mo', '1', '2', 'Basic POS, inventory, dashboard'],
          ['Growth', 'AED 199/mo', '3', '10', '+ CRM, offers, reports, multi-location'],
          ['Pro', 'AED 499/mo', '10', 'Unlimited', '+ Kitchen ops, loyalty builder, API access'],
          ['Enterprise', 'Custom', 'Unlimited', 'Unlimited', '+ White-label, dedicated support, SLA'],
        ]}
      />

      <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
        <p className="text-blue-300 text-sm"><strong>Deep Dive:</strong> See <Link href="/bizone-os" className="text-[#c9a227] underline">BizOne OS Spec</Link> for complete screen inventory, data models, API endpoints, and permission matrix for all 219 screens.</p>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// PLACEHOLDER — remaining sections defined below
// ════════════════════════════════════════════════════════════════════

// ════════════════════════════════════════════════════════════════════
// SECTION 7: 26 PRODUCT LAUNCH SEQUENCE
// ════════════════════════════════════════════════════════════════════
function ProductSequenceSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">26 Product Launches — Dual Track</h2>
      <p className="text-slate-400 mb-6">User-side and merchant-side products launch in parallel, one by one.</p>

      <InfoBox type="action">
        <strong>Dual-Track Strategy:</strong> We push TWO parallel tracks simultaneously — user-facing products (consumer apps) and merchant-facing products (business tools). This ensures both sides of the marketplace grow together.
      </InfoBox>

      <CodeBlock title="Dual-Track Launch Sequence" code={`
MONTH   USER SIDE (Consumer)              MERCHANT SIDE (Business)
─────   ─────────────────────             ─────────────────────────
M1      Nuqta App (loyalty)               ─ (building BizOne)
M2      Nuqta+ Membership                 ─ (building BizOne)
M3      ─                                 BizOne OS (POS MVP)
M4      NuqtaPay (wallet)                 Amana (compliance)
M6      Qist (BNPL)                       Tawzeef (HR)
M8      Hawil (remittance)                Adzy (ads platform)
M10     Wasil (delivery)                  Tadreeb (learning)
M12     Safar (travel)                    Daman (insurance)
M14     Rakab (rides)                     Khedma (gov services)
M16     Tabib (healthcare)                Inventora (supply chain)
M18     Majlis (community)                Eventora (events)
M20     Fakhir (luxury)                   NextaBizz (B2B marketplace)
M22     Sakin (rent finance)              Mazra (agritech)
M24     Ajer (rentals)                    Aqar (property)
`} />

      <h3 className="text-lg font-bold text-white mb-3 mt-6">Wave 1 — Foundation (Month 1-8)</h3>
      <DocTable
        headers={['Product', 'Side', 'Parent Company', 'Month', 'Dependencies', 'Revenue Model', 'Team']}
        rows={[
          ['Nuqta', 'User', 'Nuqta Corp', 'M1', 'Rabtul Auth+Wallet', 'Commission (5-15%)', '12 eng'],
          ['Nuqta+', 'User', 'Nuqta Corp', 'M2', 'Nuqta App', 'Subscription AED 9.99/mo', '2 eng'],
          ['BizOne', 'Merchant', 'BizOne Tech', 'M3', 'Rabtul Core', 'SaaS AED 0-499/mo', '14 eng'],
          ['NuqtaPay', 'User', 'RTMN Finance', 'M4', 'Rabtul Wallet+Fraud', 'Transaction fees 1.5%', '6 eng'],
          ['Amana', 'Merchant', 'BizOne Tech', 'M4', 'BizOne, Rabtul Rules', 'SaaS AED 199-999/mo', '4 eng'],
          ['Qist', 'User', 'RTMN Finance', 'M6', 'NuqtaPay, CBUAE license', 'Merchant fee 3-5%', '8 eng'],
          ['Tawzeef', 'Merchant', 'BizOne Tech', 'M6', 'BizOne, Rabtul Auth', 'SaaS AED 15-49/emp/mo', '4 eng'],
          ['Hawil', 'User', 'RTMN Finance', 'M8', 'NuqtaPay, CBUAE license', 'FX markup 0.5%', '6 eng'],
          ['Adzy', 'Merchant', 'Adzy Media', 'M8', 'Nuqta (3+ apps live)', 'CPC/CPM ads', '6 eng'],
        ]}
      />

      <h3 className="text-lg font-bold text-white mb-3 mt-6">Wave 2 — Growth (Month 9-16)</h3>
      <DocTable
        headers={['Product', 'Side', 'Parent Company', 'Month', 'Dependencies', 'Code Reuse']}
        rows={[
          ['Wasil', 'User', 'Wasil Apps', 'M10', 'BizOne merchants, NuqtaPay', 'New build'],
          ['Tadreeb', 'Merchant', 'BizOne Tech', 'M10', 'BizOne, Amana, Tawzeef', '60% from BizOne'],
          ['Safar', 'User', 'Travel Co', 'M12', 'NuqtaPay, Tourism license', 'New build'],
          ['Daman', 'Merchant', 'RTMN Finance', 'M12', 'NuqtaPay, Insurance license', '40% from Qist'],
          ['Rakab', 'User', 'Travel Co', 'M14', 'Wasil routing engine', '70% from Wasil'],
          ['Khedma', 'Merchant', 'Nuqta Corp', 'M14', 'NuqtaPay, Gov API integrations', 'New build'],
          ['Tabib', 'User', 'Wasil Apps', 'M16', 'NuqtaPay, Health Ministry approval', '50% from Wasil'],
          ['Inventora', 'Merchant', 'Inventora', 'M16', 'BizOne supply chain', '55% from BizOne'],
        ]}
      />

      <h3 className="text-lg font-bold text-white mb-3 mt-6">Wave 3 — Expansion (Month 17-24)</h3>
      <DocTable
        headers={['Product', 'Side', 'Parent Company', 'Month', 'Dependencies', 'Code Reuse']}
        rows={[
          ['Majlis', 'User', 'Nuqta Corp', 'M18', 'Nuqta (500K+ users)', '40% from Nuqta'],
          ['Eventora', 'Merchant', 'Eventora+', 'M18', 'NuqtaPay, Adzy', '30% from BizOne'],
          ['Fakhir', 'User', 'Travel Co', 'M20', 'Safar, NuqtaPay', '60% from Safar'],
          ['NextaBizz', 'Merchant', 'NextaBizz', 'M20', 'BizOne, Inventora', '65% from BizOne'],
          ['Sakin', 'User', 'Nuqta Corp', 'M22', 'Qist credit model', '90% from Qist'],
          ['Mazra', 'Merchant', 'Inventora', 'M22', 'Inventora, Wasil logistics', '70% from Inventora'],
          ['Ajer', 'User', 'Nuqta Corp', 'M24', 'Qist credit model', '85% from Qist'],
          ['Aqar', 'Merchant', 'Nuqta Corp', 'M24', 'Sakin, Qist, Daman', '75% from Sakin'],
        ]}
      />

      <h3 className="text-lg font-bold text-white mb-3 mt-6">Wave 4 — GCC Rollout (Month 25-38)</h3>
      <InfoBox type="info">
        All 26 products are live in UAE by Month 24. Wave 4 focuses on rolling them out across KSA, Qatar, Bahrain, Kuwait, and Oman — starting with the highest-traction products first.
      </InfoBox>
      <DocTable
        headers={['Priority', 'Products for GCC', 'KSA Launch', 'Qatar', 'Full GCC']}
        rows={[
          ['1st', 'Nuqta + NuqtaPay + BizOne', 'M25', 'M28', 'M34'],
          ['2nd', 'Qist + Hawil', 'M26', 'M29', 'M35'],
          ['3rd', 'Wasil + Rakab', 'M27', 'M30', 'M36'],
          ['4th', 'Safar + Adzy + Amana', 'M28', 'M31', 'M37'],
          ['5th', 'All remaining products', 'M30', 'M33', 'M38'],
        ]}
      />
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION 8: SISTER COMPANY ACTIVATION
// ════════════════════════════════════════════════════════════════════
function CompanyActivationSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Sister Company Activation</h2>
      <p className="text-slate-400 mb-6">Legal formation vs operational activation — when each company goes live.</p>

      <InfoBox type="info">
        <strong>Key Distinction:</strong> A company is &quot;formed&quot; when legally registered. It&apos;s &quot;activated&quot; when its first product goes live with real users/merchants. Formation happens early; activation is gated by product readiness.
      </InfoBox>

      <DocTable
        headers={['Company', 'Legal Formation', 'First Product Live', 'Initial Team', 'M12 Revenue', 'M24 Revenue']}
        rows={[
          ['Nuqta Corporation', 'Month 1', 'Month 1 (Nuqta App)', '12 people', '$300K MRR', '$3M MRR'],
          ['Rabtul Technologies', 'Month 2', 'Month 1 (Core SDK)', '8 people', '(internal infra)', '(internal infra)'],
          ['BizOne Technologies', 'Month 3', 'Month 3 (BizOne OS)', '14 people', '$150K MRR', '$1.5M MRR'],
          ['RTMN Finance', 'Month 4', 'Month 4 (NuqtaPay)', '10 people', '$200K MRR', '$2M MRR'],
          ['Adzy Media Network', 'Month 6', 'Month 8 (Adzy)', '6 people', '$50K MRR', '$500K MRR'],
          ['Wasil Apps', 'Month 8', 'Month 10 (Wasil Hub)', '8 people', '$30K MRR', '$400K MRR'],
          ['Travel, Trek & Experience', 'Month 10', 'Month 12 (Safar)', '6 people', '$20K MRR', '$300K MRR'],
          ['Eventora+', 'Month 14', 'Month 18 (Eventora)', '4 people', '-', '$100K MRR'],
          ['NextaBizz Marketplaces', 'Month 20', 'Month 20 (NextaBizz)', '4 people', '-', '$80K MRR'],
          ['Inventora', 'Month 16', 'Month 16 (Inventora)', '4 people', '-', '$120K MRR'],
          ['RTMN Digital Holding', 'Month 2', 'Month 2 (HQ Admin)', '3 people', '(governance)', '(governance)'],
        ]}
      />

      <h3 className="text-lg font-bold text-white mb-3 mt-6">Activation Criteria Per Company</h3>
      <Expandable title="What triggers company activation?" icon={Zap} color="text-emerald-400" defaultOpen>
        <DocTable
          headers={['Company', 'Gate 1 (Legal)', 'Gate 2 (Product)', 'Gate 3 (Revenue)', 'Gate 4 (Scale)']}
          rows={[
            ['Nuqta Corp', 'DED license', 'Nuqta app live', '$50K MRR', '100K MAU'],
            ['RTMN Finance', 'CBUAE PSP license', 'NuqtaPay live', '$100K MRR', '50K wallets'],
            ['BizOne Tech', 'DED license', 'BizOne POS live', '$50K MRR', '500 merchants'],
            ['Wasil Apps', 'DED license', 'Wasil Hub live', '$20K MRR', '10K orders/mo'],
            ['Travel Co', 'Tourism license', 'Safar live', '$20K MRR', '1K bookings/mo'],
            ['Adzy Media', 'DED Media license', 'Adzy platform live', '$30K MRR', '100 ad campaigns'],
          ]}
        />
      </Expandable>

      <h3 className="text-lg font-bold text-white mb-3 mt-6">Revenue Contribution by Company (Month 24)</h3>
      <div className="space-y-3 mb-6">
        {[
          { name: 'Nuqta Corporation', pct: 38, color: 'bg-[#c9a227]', rev: '$3M MRR' },
          { name: 'RTMN Finance', pct: 25, color: 'bg-emerald-500', rev: '$2M MRR' },
          { name: 'BizOne Technologies', pct: 19, color: 'bg-blue-500', rev: '$1.5M MRR' },
          { name: 'Adzy Media', pct: 6, color: 'bg-pink-500', rev: '$500K MRR' },
          { name: 'Wasil Apps', pct: 5, color: 'bg-orange-500', rev: '$400K MRR' },
          { name: 'Travel Co', pct: 4, color: 'bg-cyan-500', rev: '$300K MRR' },
          { name: 'Others', pct: 3, color: 'bg-slate-500', rev: '$300K MRR' },
        ].map((c, i) => (
          <div key={i}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-white">{c.name}</span>
              <span className="text-slate-400">{c.rev} ({c.pct}%)</span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className={`h-full ${c.color} rounded-full`} style={{ width: `${c.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION 9: TEAM & SQUAD SCALING
// ════════════════════════════════════════════════════════════════════
function TeamScalingSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Team & Squad Scaling</h2>
      <p className="text-slate-400 mb-6">From 5 founders to 650+ professionals across 48 months.</p>

      <h3 className="text-lg font-bold text-white mb-3">Headcount Growth</h3>
      <DocTable
        headers={['Phase', 'Timeframe', 'Headcount', 'Eng Team', 'Biz Team', 'Monthly Payroll']}
        rows={[
          ['Founding', 'Day 1', '5', '3', '2', 'AED 100K'],
          ['MVP Build', 'M1-3', '15', '10', '5', 'AED 350K'],
          ['Launch & Grow', 'M3-6', '35', '22', '13', 'AED 800K'],
          ['H2 Products', 'M6-12', '60', '38', '22', 'AED 1.5M'],
          ['Scale UAE', 'M12-24', '150', '90', '60', 'AED 4M'],
          ['GCC Expansion', 'M24-38', '350', '200', '150', 'AED 10M'],
          ['Exit Ready', 'M38-48', '650', '350', '300', 'AED 20M'],
        ]}
      />

      <h3 className="text-lg font-bold text-white mb-3 mt-6">Key C-Suite Hires</h3>
      <DocTable
        headers={['Role', 'Hire Month', 'Salary (AED/mo)', 'Equity', 'Why This Timing']}
        rows={[
          ['CTO', 'Month 2', '40,000-50,000', '3-5%', 'Architecture decisions before scale'],
          ['CPO', 'Month 3', '35,000-45,000', '2-3%', 'Product roadmap ownership'],
          ['VP Engineering', 'Month 4', '30,000-40,000', '1-2%', 'Squad management as team grows'],
          ['CFO', 'Month 6', '40,000-50,000', '2-3%', 'Seed round management, CBUAE compliance'],
          ['CMO', 'Month 8', '35,000-45,000', '1-2%', 'Growth marketing at scale'],
          ['COO', 'Month 12', '40,000-50,000', '2-3%', 'Operations complexity at 10 products'],
          ['CHRO', 'Month 18', '30,000-40,000', '0.5-1%', 'Talent scaling for 150+ people'],
          ['General Counsel', 'Month 20', '35,000-45,000', '0.5-1%', 'GCC expansion legal complexity'],
        ]}
      />

      <h3 className="text-lg font-bold text-white mb-3 mt-6">Engineering Squads</h3>
      <Expandable title="Phase 1 Squads (M1-12)" icon={Code} color="text-blue-400" defaultOpen>
        <DocTable
          headers={['Squad', 'Engineers', 'Formed', 'Owns', 'Lead Hire']}
          rows={[
            ['Core Platform', '4-6', 'M1', 'Rabtul Core, API Gateway, SDK', 'Backend Principal'],
            ['BizOne Merchant', '6-8', 'M1', 'BizOne OS, POS, merchant portal', 'Fullstack Lead'],
            ['Nuqta Consumer', '5-7', 'M1', 'Nuqta app, wallet, discovery', 'Mobile Lead'],
            ['Payments', '4-6', 'M4', 'NuqtaPay, Qist, Hawil', 'Fintech Lead'],
            ['Data & AI', '3-4', 'M6', 'AIRA, analytics, recommendations', 'ML Engineer'],
            ['QA & DevOps', '3-4', 'M2', 'Testing, CI/CD, monitoring', 'QA Lead'],
          ]}
        />
      </Expandable>

      <Expandable title="Phase 2 Squads (M12-24)" icon={Code} color="text-purple-400">
        <DocTable
          headers={['Squad', 'Engineers', 'Formed', 'Owns']}
          rows={[
            ['Wasil Delivery', '5-7', 'M8', 'Wasil Hub, rider app, routing'],
            ['Travel & Mobility', '5-7', 'M10', 'Safar, Rakab, Fakhir'],
            ['Enterprise Products', '4-6', 'M10', 'Amana, Tawzeef, Tadreeb, Khedma'],
            ['Growth & Ads', '4-5', 'M8', 'Adzy, campaigns, referrals'],
            ['Community', '3-4', 'M16', 'Majlis, Eventora, social features'],
            ['Supply Chain', '3-4', 'M14', 'Inventora, Mazra, NextaBizz'],
          ]}
        />
      </Expandable>

      <h3 className="text-lg font-bold text-white mb-3 mt-6">ESOP Allocation</h3>
      <DocTable
        headers={['Pool', 'Allocation', 'Vesting', 'Cliff', 'Recipients']}
        rows={[
          ['Founding Pool', '60-70%', 'Day 1 (vested)', '-', '5 founders'],
          ['C-Suite Pool', '10-15%', '4 years', '1 year', 'CTO, CPO, CFO, CMO, COO'],
          ['Employee Pool', '10-15%', '4 years', '1 year', 'All employees (eng heavy)'],
          ['Advisor Pool', '2-3%', '2 years', '6 months', 'Industry advisors'],
          ['Future Hires', '5%', 'Reserved', '-', 'Series A+ key hires'],
        ]}
      />
    </div>
  );
}
// ════════════════════════════════════════════════════════════════════
// SECTION 10: FINANCIAL MILESTONES
// ════════════════════════════════════════════════════════════════════
function FinancialMilestonesSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Financial Milestones</h2>
      <p className="text-slate-400 mb-6">From $200K pre-seed to $60M MRR in 48 months.</p>

      <h3 className="text-lg font-bold text-white mb-3">Funding Rounds</h3>
      <DocTable
        headers={['Round', 'Month', 'Amount', 'Pre-Money Val', 'Dilution', 'Use of Funds', 'Gate']}
        rows={[
          ['Pre-Seed T1', 'M0', '$200K', '$1.5M', '12%', 'MVP build, first 5 hires', 'Founding team'],
          ['Pre-Seed T2', 'M3', '$200K', '$2M', '8%', 'Launch marketing, 10 more hires', '5K users, 200 merchants'],
          ['Seed', 'M6-8', '$2M', '$10M', '17%', 'H2 products, 40 hires, CBUAE', '50K MAU, $50K MRR'],
          ['Series A', 'M12-14', '$10M', '$50M', '17%', 'Scale UAE, 10+ products', '250K MAU, $500K MRR'],
          ['Series B', 'M20-22', '$30M', '$150M', '17%', 'UAE maturity, GCC prep', '500K MAU, $4M MRR'],
          ['Series C', 'M32-36', '$80M', '$400M', '17%', 'Full GCC expansion', '2M MAU, $25M MRR'],
          ['Series D (opt)', 'M42-48', '$150M', '$1B+', '12%', 'Exit prep, profitability', '4M MAU, $45M MRR'],
        ]}
      />

      <h3 className="text-lg font-bold text-white mb-3 mt-6">Revenue Growth</h3>
      <DocTable
        headers={['Month', 'MRR', 'ARR', 'GMV/mo', 'Products Live', 'Revenue Streams']}
        rows={[
          ['M3', '$10K', '$120K', 'AED 5M', '3', 'Merchant commissions'],
          ['M6', '$50K', '$600K', 'AED 30M', '6', '+ BNPL fees, wallet fees'],
          ['M12', '$500K', '$6M', 'AED 100M', '10', '+ SaaS subs, remittance, ads'],
          ['M18', '$2M', '$24M', 'AED 200M', '16', '+ Travel commissions, delivery fees'],
          ['M24', '$8M', '$96M', 'AED 500M', '26', 'All revenue streams active'],
          ['M36', '$25M', '$300M', 'AED 1.5B', '26 (6 countries)', 'GCC multiplier'],
          ['M48', '$60M', '$720M', 'AED 3B+', '26 (6 countries)', 'Full scale + profitability'],
        ]}
      />

      <h3 className="text-lg font-bold text-white mb-3 mt-6">Burn Rate & Runway</h3>
      <DocTable
        headers={['Phase', 'Monthly Burn', 'Cash In', 'Runway', 'Break-Even?']}
        rows={[
          ['M1-3 (MVP)', '$25K/mo', '$200K pre-seed', '8 months', 'No'],
          ['M3-6 (Launch)', '$60K/mo', '+$200K T2', '6 months', 'No'],
          ['M6-12 (Growth)', '$200K/mo', '+$2M seed', '12 months', 'No'],
          ['M12-20 (Scale)', '$500K/mo', '+$10M Series A', '20 months', 'No'],
          ['M20-30 (Mature)', '$1M/mo', '+$30M Series B', '30 months', 'Approaching'],
          ['M30+ (Profitable)', '$1.5M/mo', 'Revenue > burn', 'Infinite', 'YES (M30 EBITDA positive)'],
        ]}
      />

      <h3 className="text-lg font-bold text-white mb-3 mt-6">Revenue Streams Breakdown (M24)</h3>
      <Expandable title="7 Revenue Streams" icon={DollarSign} color="text-emerald-400" defaultOpen>
        <DocTable
          headers={['Stream', '% of Revenue', 'Products', 'Margin']}
          rows={[
            ['Merchant Commissions', '35%', 'Nuqta, BizOne', '85%'],
            ['Transaction Fees', '20%', 'NuqtaPay, Qist, Hawil', '60%'],
            ['SaaS Subscriptions', '15%', 'BizOne, Amana, Tawzeef, Tadreeb', '90%'],
            ['Advertising', '10%', 'Adzy, in-app promotions', '75%'],
            ['Delivery Fees', '8%', 'Wasil, Rakab', '25%'],
            ['Travel Commissions', '7%', 'Safar, Fakhir', '70%'],
            ['Premium Memberships', '5%', 'Nuqta+, Fakhir VIP', '95%'],
          ]}
        />
      </Expandable>

      <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
        <p className="text-emerald-300 text-sm"><strong>Deep Dive:</strong> See <Link href="/3-year-plan" className="text-[#c9a227] underline">3-Year Plan</Link> for full P&L projections, unit economics (LTV:CAC 16.8x), and detailed financial model.</p>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION 11: LICENSING & COMPLIANCE
// ════════════════════════════════════════════════════════════════════
function LicensingSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Licensing & Compliance</h2>
      <p className="text-slate-400 mb-6">15+ licenses across 6 GCC countries — the regulatory roadmap.</p>

      <h3 className="text-lg font-bold text-white mb-3">UAE Licenses (Phase 1)</h3>
      <DocTable
        headers={['License', 'Authority', 'Apply', 'Approval', 'Cost (AED)', 'Required For']}
        rows={[
          ['DED Commercial License', 'Dubai Economy', 'M1', 'M1 (2 weeks)', '15,000', 'Nuqta Corp operations'],
          ['DED Holding License', 'Dubai Economy', 'M2', 'M2 (2 weeks)', '25,000', 'RTMN Digital Holding'],
          ['DED Technology License', 'Dubai Economy', 'M2-3', 'M2-3', '15,000 each', 'Rabtul, BizOne Tech'],
          ['Payment Service Provider', 'CBUAE', 'M3', 'M6-8', '100,000+', 'NuqtaPay wallet'],
          ['Consumer Credit License', 'CBUAE', 'M4', 'M8-10', '200,000+', 'Qist BNPL'],
          ['Remittance License', 'CBUAE', 'M4', 'M8-10', '150,000+', 'Hawil transfers'],
          ['Insurance Broker License', 'Insurance Authority', 'M8', 'M12-14', '50,000+', 'Daman marketplace'],
          ['Tourism Authority License', 'DTCM', 'M8', 'M10', '30,000', 'Safar travel bookings'],
          ['Media License', 'NMC/Dubai Media', 'M6', 'M6', '20,000', 'Adzy ad network'],
          ['Health Facility License', 'DHA/MOH', 'M12', 'M14-16', '50,000+', 'Tabib healthcare'],
        ]}
      />

      <h3 className="text-lg font-bold text-white mb-3 mt-6">GCC Expansion Licenses (Phase 2)</h3>
      <DocTable
        headers={['Country', 'Financial Regulator', 'Apply', 'Timeline', 'Key Requirements']}
        rows={[
          ['Saudi Arabia', 'SAMA', 'M22', 'M25-28', 'Local entity, AML/KYC, data residency'],
          ['Qatar', 'QCB', 'M26', 'M28-30', 'QFC license, local partner'],
          ['Bahrain', 'CBB', 'M28', 'M30-32', 'Fintech sandbox → full license'],
          ['Kuwait', 'CBK', 'M30', 'M32-34', 'Local entity, CMA approval'],
          ['Oman', 'CBO', 'M32', 'M34-36', 'Local entity, CMA approval'],
        ]}
      />

      <h3 className="text-lg font-bold text-white mb-3 mt-6">Certifications Timeline</h3>
      <DocTable
        headers={['Certification', 'Target Date', 'Cost', 'Scope', 'Renewal']}
        rows={[
          ['PCI-DSS Level 2', 'Month 6', '$30K', 'Payment processing', 'Annual'],
          ['ISO 27001', 'Month 12', '$50K', 'Information security', 'Annual audit'],
          ['ISO 9001', 'Month 18', '$30K', 'Quality management', 'Annual audit'],
          ['SOC 2 Type II', 'Month 14', '$40K', 'Cloud security', 'Annual'],
          ['GDPR Compliance', 'Month 24', '$20K', 'EU data (if applicable)', 'Ongoing'],
        ]}
      />

      <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl">
        <p className="text-amber-300 text-sm"><strong>Deep Dive:</strong> See <Link href="/amana" className="text-[#c9a227] underline">Amana Compliance OS</Link> for 12 compliance pillars and 8 industry-specific regulatory frameworks.</p>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION 12: TECH INFRASTRUCTURE
// ════════════════════════════════════════════════════════════════════
function TechInfraSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Technology Infrastructure</h2>
      <p className="text-slate-400 mb-6">From monolith to multi-region — infrastructure evolution across 48 months.</p>

      <h3 className="text-lg font-bold text-white mb-3">Tech Maturity Stages</h3>
      <DocTable
        headers={['Stage', 'Timeline', 'Architecture', 'Infra Cost/mo', 'Scale']}
        rows={[
          ['MVP', 'M1-6', 'Monolith + 3 microservices, single DB', '$2K', '50K users'],
          ['Growth', 'M7-12', '12 microservices, K8s, CI/CD, Redis', '$15K', '250K users'],
          ['Scale', 'M13-24', '25+ services, multi-AZ, CDN, ML pipeline', '$60K', '500K users'],
          ['Multi-Region', 'M25-38', 'GCC regions, data residency, edge compute', '$200K', '2M users'],
          ['Global', 'M39-48', 'Global CDN, auto-scaling, disaster recovery', '$400K', '5M users'],
        ]}
      />

      <h3 className="text-lg font-bold text-white mb-3 mt-6">Tech Stack</h3>
      <Expandable title="Core Technology Choices" icon={Server} color="text-purple-400" defaultOpen>
        <DocTable
          headers={['Layer', 'Technology', 'Why', 'Alternative']}
          rows={[
            ['Mobile Apps', 'React Native', 'Cross-platform, 70% code share', 'Flutter'],
            ['Web Frontend', 'Next.js 14 + Tailwind', 'SSR, static export, fast iteration', 'Remix'],
            ['API Layer', 'Node.js + TypeScript', 'Full-stack JS, async I/O', 'Go, Rust'],
            ['Database', 'PostgreSQL (Supabase)', 'ACID, JSON, full-text search', 'MySQL'],
            ['Cache', 'Redis Cluster', 'Session, rate-limit, real-time', 'Memcached'],
            ['Event Bus', 'Apache Kafka', 'Ordered events, replay, scale', 'RabbitMQ'],
            ['Search', 'Elasticsearch', 'Merchant/product discovery', 'Meilisearch'],
            ['Object Storage', 'AWS S3 + CloudFront', 'Images, receipts, documents', 'GCS'],
            ['ML/AI', 'Python + FastAPI + AIRA', 'Recommendations, fraud, analytics', 'SageMaker'],
            ['Monitoring', 'Datadog + Sentry + PagerDuty', 'APM, errors, alerting', 'New Relic'],
            ['CI/CD', 'GitHub Actions + ArgoCD', 'GitOps, auto-deploy', 'Jenkins'],
            ['Container', 'Docker + Kubernetes (EKS)', 'Orchestration, scaling', 'ECS'],
          ]}
        />
      </Expandable>

      <h3 className="text-lg font-bold text-white mb-3 mt-6">Major Technical Milestones</h3>
      <DocTable
        headers={['Month', 'Milestone', 'Impact']}
        rows={[
          ['M2', 'Rabtul Core SDK v1.0 released', 'All apps can integrate auth + wallet'],
          ['M6', 'PCI-DSS compliance achieved', 'Can process payments directly'],
          ['M8', 'Kafka event bus production-ready', 'Real-time cross-app events'],
          ['M12', 'AIRA AI engine v1.0', 'Personalized recommendations live'],
          ['M12', 'Major refactor: monolith → microservices complete', 'Independent deployment per service'],
          ['M18', 'Offline-first SDK for BizOne', 'POS works without internet'],
          ['M24', 'Multi-region infrastructure ready', 'GCC data residency compliance'],
          ['M36', 'Auto-scaling handles 10x traffic spikes', 'Flash sale / Ramadan ready'],
        ]}
      />
    </div>
  );
}
// ════════════════════════════════════════════════════════════════════
// SECTION 13: GCC EXPANSION
// ════════════════════════════════════════════════════════════════════
function GccExpansionSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">GCC Expansion — Month 25-38</h2>
      <p className="text-slate-400 mb-6">UAE first, then country by country across the Gulf.</p>

      <InfoBox type="info">
        <strong>Strategy:</strong> UAE is fully mature by Month 24 (500K MAU, 10K merchants, 26 products). Then we expand to KSA first (largest GCC market), followed by smaller markets in parallel.
      </InfoBox>

      <h3 className="text-lg font-bold text-white mb-3">Country-by-Country Timeline</h3>
      <DocTable
        headers={['Country', 'Population', 'Launch Month', 'First Products', 'M12 Target', 'M24 Target']}
        rows={[
          ['UAE', '10M', 'M1 (live)', 'All 26', '250K MAU', '500K MAU'],
          ['Saudi Arabia (KSA)', '36M', 'M25', 'Nuqta, BizOne, NuqtaPay, Qist', '200K MAU', '800K MAU'],
          ['Qatar', '3M', 'M28', 'Nuqta, BizOne, NuqtaPay', '50K MAU', '150K MAU'],
          ['Bahrain', '1.5M', 'M32', 'Nuqta, BizOne, NuqtaPay', '30K MAU', '80K MAU'],
          ['Kuwait', '4.5M', 'M34', 'Nuqta, BizOne, NuqtaPay, Qist', '50K MAU', '150K MAU'],
          ['Oman', '5M', 'M36', 'Nuqta, BizOne, NuqtaPay', '40K MAU', '120K MAU'],
        ]}
      />

      <h3 className="text-lg font-bold text-white mb-3 mt-6">Per-Country Launch Checklist</h3>
      <Expandable title="KSA Launch Plan (Month 25)" icon={Globe} color="text-emerald-400" defaultOpen>
        <DocTable
          headers={['Category', 'Requirement', 'Status', 'Lead Time']}
          rows={[
            ['Legal', 'Register Saudi entity (LLC)', 'Start M22', '3 months'],
            ['Licensing', 'SAMA PSP license', 'Start M22', '4-6 months'],
            ['Banking', 'Open SAR corporate accounts', 'Start M23', '2 months'],
            ['Team', 'Hire Country Manager + 5 BD reps', 'Start M23', '2 months'],
            ['Merchants', 'Sign 500 Saudi merchants', 'Start M23', '3 months'],
            ['Localization', 'Saudi Arabic dialect, SAR currency, STC/mada', 'Start M22', '3 months'],
            ['Infrastructure', 'Saudi data residency (AWS Bahrain region)', 'Start M23', '1 month'],
            ['Marketing', '$500K launch budget, Saudi influencers', 'Start M24', '1 month'],
          ]}
        />
      </Expandable>

      <h3 className="text-lg font-bold text-white mb-3 mt-6">Localization Requirements</h3>
      <DocTable
        headers={['Country', 'Language', 'Currency', 'Payment Methods', 'Key Adaptations']}
        rows={[
          ['UAE', 'Arabic/English', 'AED', 'Cards, Apple Pay, ENBD', 'Base product'],
          ['KSA', 'Arabic (Saudi)', 'SAR', 'mada, STC Pay, Apple Pay', 'Saudization quotas, ZATCA e-invoicing'],
          ['Qatar', 'Arabic (Qatari)', 'QAR', 'NAPS, cards', 'QFC regulations'],
          ['Bahrain', 'Arabic/English', 'BHD', 'BenefitPay, cards', 'Regulatory sandbox friendly'],
          ['Kuwait', 'Arabic (Kuwaiti)', 'KWD', 'KNET, cards', 'CMA approvals'],
          ['Oman', 'Arabic (Omani)', 'OMR', 'thawani, cards', 'CBO regulations'],
        ]}
      />
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION 14: RISK MANAGEMENT
// ════════════════════════════════════════════════════════════════════
function RiskManagementSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Risk Management</h2>
      <p className="text-slate-400 mb-6">Phase-by-phase risk matrix with mitigations and contingencies.</p>

      <Expandable title="MVP Phase Risks (M1-6)" icon={AlertTriangle} color="text-red-400" defaultOpen>
        <DocTable
          headers={['Risk', 'Impact', 'Probability', 'Mitigation', 'Contingency']}
          rows={[
            ['CTO hire delayed', 'High', 'Medium', 'Interim fractional CTO from Day 1', 'CEO acts as tech lead temporarily'],
            ['Merchant cold start', 'Critical', 'Medium', '100 pre-signed LOIs before launch', 'Subsidize first 200 merchants (0% commission M1-3)'],
            ['User CAC exceeds AED 20', 'High', 'Medium', 'Referral-first strategy (AED 5 CAC)', 'Shift budget to organic/partnerships'],
            ['Technical debt from speed', 'Medium', 'High', 'Code review + CI/CD from Day 1', 'Dedicated refactor sprint every M6'],
            ['Competitor copies model', 'Medium', 'Low', '26-product moat is hard to replicate', 'Speed to market advantage'],
          ]}
        />
      </Expandable>

      <Expandable title="Growth Phase Risks (M6-12)" icon={AlertTriangle} color="text-amber-400">
        <DocTable
          headers={['Risk', 'Impact', 'Probability', 'Mitigation', 'Contingency']}
          rows={[
            ['CBUAE license delayed', 'Critical', 'High', 'Apply M3, partner with licensed provider interim', 'Use Magnati/NI as payment rails'],
            ['Burn rate exceeds runway', 'Critical', 'Medium', 'Monthly burn tracking, seed round at M6', 'Pre-arranged bridge round ($500K)'],
            ['D30 retention below 25%', 'High', 'Medium', 'Gamification, push notifications, daily rewards', 'Pivot coin mechanics, add sticky features'],
            ['Fraud spike on NuqtaPay', 'High', 'Medium', 'ML fraud detection from Day 1', 'Manual review queue, transaction limits'],
            ['Key engineer leaves', 'High', 'Medium', 'Competitive ESOP, 1-year cliff vesting', 'Knowledge docs, pair programming culture'],
          ]}
        />
      </Expandable>

      <Expandable title="Scale Phase Risks (M12-24)" icon={AlertTriangle} color="text-orange-400">
        <DocTable
          headers={['Risk', 'Impact', 'Probability', 'Mitigation', 'Contingency']}
          rows={[
            ['Merchant churn exceeds 5%/mo', 'High', 'Medium', 'Dedicated merchant success team', 'Rev share increase, premium support'],
            ['Infrastructure scaling issues', 'High', 'Medium', 'Load testing every sprint, auto-scaling', 'Emergency scaling playbook'],
            ['Product quality drops at speed', 'Medium', 'High', 'QA gates, feature flags, staged rollouts', 'Rollback procedures, incident response'],
            ['Regulatory changes in UAE', 'Medium', 'Low', 'Legal team monitors, Amana compliance OS', 'Adapt within 30-day compliance window'],
            ['Series A doesn&apos;t close at target', 'High', 'Low', 'Multiple investor pipeline, strong metrics', 'Accept lower valuation or bridge round'],
          ]}
        />
      </Expandable>

      <Expandable title="GCC Expansion Risks (M25-38)" icon={AlertTriangle} color="text-purple-400">
        <DocTable
          headers={['Risk', 'Impact', 'Probability', 'Mitigation', 'Contingency']}
          rows={[
            ['SAMA license blocked', 'Critical', 'Medium', 'Early application M22, local legal counsel', 'Partner with Saudi licensed entity'],
            ['GTM fails in KSA', 'High', 'Medium', 'Qatar as test market first (M28)', 'Reduce KSA burn, focus on profitable UAE'],
            ['Currency risk (multi-currency)', 'Medium', 'Medium', 'Hawil FX engine handles all currencies', 'Hedge major exposures'],
            ['Data residency compliance', 'High', 'Low', 'AWS region per country from M24', 'Comply within 90-day window'],
            ['Cultural misfit of product', 'Medium', 'Medium', 'Local country managers, user research', 'Customize features per market'],
          ]}
        />
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION 15: DEPENDENCIES & CRITICAL PATH
// ════════════════════════════════════════════════════════════════════
function DependenciesSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Dependencies & Critical Path</h2>
      <p className="text-slate-400 mb-6">What depends on what — and what must never be skipped.</p>

      <CodeBlock title="Dependency Tree" code={`
                         RABTUL CORE (M1)
                    ┌─────────┼─────────┐
                    │         │         │
               NUQTA APP  BIZONE OS  HQ ADMIN
                 (M1)       (M3)      (M3)
                    │         │
            ┌───────┼────┐    │
            │       │    │    │
        NuqtaPay  Nuqta+ │  Amana   Tawzeef
          (M4)    (M2)   │  (M4)     (M6)
            │             │
     ┌──────┼──────┐     Adzy (M8)
     │      │      │
   QIST   HAWIL  Wasil ─────── Rakab (M14) [70% reuse]
   (M6)   (M8)  (M10)
     │      │
     │   TravoPay ── Safar (M12) ── Fakhir (M20)
     │   [100% reuse]
     │
  ┌──┴───┐
 Sakin  Ajer    [90% reuse from Qist credit model]
 (M22)  (M24)
`} />

      <h3 className="text-lg font-bold text-white mb-3 mt-6">Code Reuse Map</h3>
      <DocTable
        headers={['Source Product', 'Target Product', 'Reuse %', 'What&apos;s Reused', 'What&apos;s New']}
        rows={[
          ['Qist (BNPL)', 'Sakin (rent finance)', '90%', 'Credit scoring, KYC, installment engine', 'Property-specific UX'],
          ['Qist (BNPL)', 'Ajer (rental marketplace)', '85%', 'Credit scoring, payment plans', 'Vehicle catalog, fleet mgmt'],
          ['Wasil (delivery)', 'Rakab (rides)', '70%', 'Routing engine, rider app, dispatch', 'Passenger UX, pricing model'],
          ['Hawil (remittance)', 'TravoPay (travel wallet)', '100%', 'FX engine, transfer flow, KYC', 'Travel-specific branding'],
          ['Safar (travel)', 'Fakhir (luxury)', '60%', 'Booking engine, payment flow', 'Concierge layer, VIP features'],
          ['BizOne (merchant)', 'Amana (compliance)', '40%', 'Merchant auth, dashboard shell', 'Compliance modules, audit'],
          ['BizOne (merchant)', 'Tawzeef (HR)', '35%', 'Auth, dashboard, settings', 'HR modules, WPS integration'],
          ['Inventora (supply)', 'Mazra (agritech)', '70%', 'Inventory, logistics, tracking', 'Farm-specific, cold chain'],
          ['BizOne (merchant)', 'NextaBizz (B2B)', '65%', 'Merchant portal, orders, payments', 'B2B catalog, wholesale pricing'],
          ['Nuqta (loyalty)', 'Majlis (community)', '40%', 'User auth, profiles, discovery', 'Social features, forums'],
        ]}
      />

      <h3 className="text-lg font-bold text-white mb-3 mt-6">Critical Path (Cannot Delay)</h3>
      <InfoBox type="warning">
        Any delay in these milestones cascades across the entire roadmap:
      </InfoBox>
      <DocTable
        headers={['Milestone', 'Must-Have By', 'Blocks', 'If Delayed']}
        rows={[
          ['Rabtul Auth + Wallet live', 'M1', 'ALL products', 'Nothing can launch'],
          ['BizOne POS MVP live', 'M3', 'Merchant operations for all apps', '2-month cascade delay'],
          ['CBUAE PSP license', 'M8', 'NuqtaPay, Qist, Hawil (own rails)', 'Use interim partner (Magnati)'],
          ['50K MAU achieved', 'M5', 'Seed funding round', 'Runway risk — need bridge'],
          ['250K MAU achieved', 'M12', 'Series A round', 'Delayed hiring, product timeline'],
          ['Multi-region infra ready', 'M24', 'GCC expansion (data residency)', '3-month delay on KSA launch'],
        ]}
      />
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION 16: KPI DASHBOARD
// ════════════════════════════════════════════════════════════════════
function KpiDashboardSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">KPI Dashboard by Phase</h2>
      <p className="text-slate-400 mb-6">Phase-by-phase targets and KPI gates for progression.</p>

      <h3 className="text-lg font-bold text-white mb-3">Master KPI Table</h3>
      <DocTable
        headers={['KPI', 'H1 (M5)', 'H2 (M8)', 'H3 (M24)', 'GCC (M38)', 'Exit (M48)']}
        rows={[
          ['MAU', '50K', '250K', '500K', '2M', '5M'],
          ['DAU', '15K', '75K', '150K', '600K', '1.5M'],
          ['Merchants', '1,500', '5,000', '10,000', '30,000', '60,000'],
          ['Products Live', '3', '6', '26', '26 (6 countries)', '26 (6 countries)'],
          ['MRR', '$50K', '$500K', '$8M', '$25M', '$60M'],
          ['GMV/month', 'AED 30M', 'AED 100M', 'AED 500M', 'AED 1.5B', 'AED 3B+'],
          ['D30 Retention', '30%', '32%', '35%', '35%', '38%'],
          ['D90 Retention', '15%', '18%', '22%', '25%', '28%'],
          ['NPS', '40+', '45+', '50+', '55+', '60+'],
          ['Team Size', '35', '60', '150', '350', '650'],
          ['EBITDA', '-100%', '-60%', '-10%', '+15%', '+30%'],
          ['LTV:CAC', '5x', '8x', '12x', '15x', '17x'],
        ]}
      />

      <h3 className="text-lg font-bold text-white mb-3 mt-6">KPI Gates (Must Pass to Progress)</h3>
      <Expandable title="Gate Rules — What happens if we miss?" icon={AlertTriangle} color="text-amber-400" defaultOpen>
        <DocTable
          headers={['Gate', 'Trigger KPIs', 'If PASS', 'If FAIL']}
          rows={[
            ['H1 → H2', '50K MAU + 30% D30 + 1.5K merchants', 'Launch Qist, Hawil, raise Seed', 'Extend H1 by 2 months, focus retention'],
            ['H2 → H3', '250K MAU + $500K MRR + 5K merchants', 'Launch 10+ products, raise Series A', 'Reduce burn, focus unit economics'],
            ['H3 → GCC', '500K MAU + $8M MRR + 30% EBITDA path', 'Expand to KSA, raise Series B/C', 'Stay UAE-only, reach profitability first'],
            ['GCC → Exit', '2M MAU + $25M MRR + 6 countries', 'Prepare IPO/acquisition', 'Optimize GCC, delay exit by 12 months'],
          ]}
        />
      </Expandable>

      <h3 className="text-lg font-bold text-white mb-3 mt-6">Per-Product KPIs (Month 12 Targets)</h3>
      <DocTable
        headers={['Product', 'Primary KPI', 'Target', 'Secondary KPI', 'Target']}
        rows={[
          ['Nuqta App', 'MAU', '250K', 'D30 Retention', '32%'],
          ['NuqtaPay', 'Active Wallets', '100K', 'TPV/month', 'AED 50M'],
          ['BizOne', 'Active Merchants', '3,000', 'MRR', '$150K'],
          ['Qist', 'Active Loans', '5,000', 'Default Rate', '<2%'],
          ['Hawil', 'Transfers/month', '10,000', 'Avg Transfer', 'AED 2,000'],
          ['Adzy', 'Active Campaigns', '100', 'Ad Revenue', '$50K/mo'],
          ['Wasil', 'Orders/month', '20,000', 'Avg Order Value', 'AED 80'],
          ['Safar', 'Bookings/month', '1,000', 'Avg Booking', 'AED 3,000'],
        ]}
      />
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION 17: GOVERNANCE FRAMEWORK
// ════════════════════════════════════════════════════════════════════
function GovernanceSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Governance Framework</h2>
      <p className="text-slate-400 mb-6">Non-negotiable rules, decision framework, and authority structure.</p>

      <InfoBox type="warning">
        <strong>4 LOCKED Rules (Cannot be changed by any subsidiary):</strong>
      </InfoBox>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {[
          { rule: 'No app owns wallet', desc: 'All wallet logic lives in Rabtul ONLY. No subsidiary can build its own wallet.', icon: Wallet, color: 'text-emerald-400' },
          { rule: 'No app owns merchants', desc: 'All merchant data lives in BizOne ONLY. No subsidiary can create separate merchant records.', icon: Store, color: 'text-blue-400' },
          { rule: 'No company bypasses Rabtul', desc: 'Every transaction flows through Rabtul event bus. No direct DB access allowed.', icon: Database, color: 'text-purple-400' },
          { rule: 'Rabtul is single source of truth', desc: 'Identity, wallet, rules, events — all truth lives in Rabtul. Apps are views.', icon: Lock, color: 'text-red-400' },
        ].map((r, i) => (
          <div key={i} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <r.icon className={`w-5 h-5 ${r.color}`} />
              <span className="text-white font-bold text-sm">{r.rule}</span>
            </div>
            <p className="text-slate-400 text-xs">{r.desc}</p>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-bold text-white mb-3">RTMN HQ Authority</h3>
      <DocTable
        headers={['Authority', 'Owner', 'Scope', 'Frequency']}
        rows={[
          ['Coin rate changes', 'HQ Rule Engine', 'NuqtaCoin earn/burn rates across all apps', 'Monthly review'],
          ['Commission slab changes', 'HQ + BizOne', 'Engine A/B/C rates for merchants', 'Quarterly review'],
          ['Capital allocation', 'HQ Board', 'Budget distribution across 11 companies', 'Quarterly'],
          ['Kill switches', 'HQ Admin (Level 100)', 'Disable any app, merchant, user, feature', 'Emergency only'],
          ['New company formation', 'HQ Board + CEO', 'Register new subsidiary', 'As needed'],
          ['GCC country entry', 'HQ Board + CEO', 'Legal, licensing, launch approval', 'Strategic decision'],
          ['Risk appetite settings', 'HQ + CFO', 'Credit limits, fraud thresholds, exposure', 'Monthly'],
        ]}
      />

      <h3 className="text-lg font-bold text-white mb-3 mt-6">Decision Framework</h3>
      <DocTable
        headers={['Decision Type', 'Owner', 'Approval Needed', 'Escalation']}
        rows={[
          ['Product feature launch', 'CPO', 'PM sign-off', 'CPO → CEO'],
          ['Tech architecture change', 'CTO', 'VP Eng sign-off', 'CTO → CEO'],
          ['Spend > AED 50K', 'CFO', 'CEO approval', 'CFO → Board'],
          ['Hiring (IC level)', 'Hiring Manager', 'VP approval', 'HR → C-Suite'],
          ['Hiring (C-Suite)', 'CEO', 'Board approval', 'CEO → Board'],
          ['Market expansion', 'CEO', 'Board approval', 'CEO → Board → Investors'],
          ['Funding round', 'CEO + CFO', 'Board approval', 'Board → Shareholders'],
          ['Emergency (outage)', 'On-call engineer', 'CTO notified', 'CTO → CEO → Board'],
        ]}
      />

      <h3 className="text-lg font-bold text-white mb-3 mt-6">Board Meetings</h3>
      <DocTable
        headers={['Meeting', 'Frequency', 'Attendees', 'Agenda']}
        rows={[
          ['RTMN HQ Board', 'Monthly', 'CEO, C-Suite, Investors', 'Strategy, financials, KPIs, risks'],
          ['Company Boards', 'Quarterly', 'Company CEO, HQ rep, Leads', 'Company KPIs, budget, roadmap'],
          ['Investor Update', 'Quarterly', 'CEO, CFO, Lead investors', 'Metrics, burn, fundraising, milestones'],
          ['All-Hands', 'Monthly', 'All employees', 'Company updates, wins, culture'],
          ['Sprint Review', 'Bi-weekly', 'Engineering + Product', 'Demo, retrospective, next sprint'],
        ]}
      />

      <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
        <p className="text-blue-300 text-sm"><strong>Deep Dive:</strong> See <Link href="/rtmn-group" className="text-[#c9a227] underline">RTMN Group</Link> for complete governance rules per company, what each controls vs. does NOT control.</p>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION 18: EXIT CRITERIA & SUCCESS
// ════════════════════════════════════════════════════════════════════
function ExitCriteriaSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Exit Criteria & Success Definition</h2>
      <p className="text-slate-400 mb-6">What &quot;exit-ready&quot; means and the path to $2-3B valuation.</p>

      <h3 className="text-lg font-bold text-white mb-3">Exit-Ready Checklist (Month 48)</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {[
          { metric: '5M MAU', target: 'Across 6 GCC countries', icon: Users, color: 'text-emerald-400' },
          { metric: '60,000 merchants', target: 'Active, transacting monthly', icon: Store, color: 'text-blue-400' },
          { metric: 'AED 3B+ GMV', target: 'Annual gross merchandise value', icon: TrendingUp, color: 'text-purple-400' },
          { metric: '$60M+ MRR', target: '$720M annualized revenue', icon: DollarSign, color: 'text-[#c9a227]' },
          { metric: '30%+ EBITDA', target: 'Profitable and growing', icon: BarChart3, color: 'text-green-400' },
          { metric: '26 products live', target: 'Full ecosystem operational', icon: Layers, color: 'text-pink-400' },
          { metric: '6 countries', target: 'UAE, KSA, Qatar, Bahrain, Kuwait, Oman', icon: Globe, color: 'text-cyan-400' },
          { metric: '650+ team', target: 'World-class professionals', icon: Users, color: 'text-amber-400' },
        ].map((m, i) => (
          <div key={i} className="flex items-center gap-3 bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
            <m.icon className={`w-6 h-6 ${m.color} flex-shrink-0`} />
            <div>
              <p className="text-white font-bold text-sm">{m.metric}</p>
              <p className="text-slate-400 text-xs">{m.target}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-bold text-white mb-3">Exit Options</h3>
      <DocTable
        headers={['Option', 'Likelihood', 'Valuation Range', 'Timeline', 'Buyer Profile']}
        rows={[
          ['IPO (DFM/ADX)', '30%', '$2-3B', 'M48-54', 'Public markets (Dubai/Abu Dhabi exchange)'],
          ['IPO (International)', '15%', '$3-5B', 'M48-60', 'NASDAQ, London, Saudi Tadawul'],
          ['Strategic Acquisition', '35%', '$2-4B', 'M42-48', 'Careem/Uber, Noon, Talabat/Delivery Hero'],
          ['PE Buyout', '15%', '$1.5-2.5B', 'M42-48', 'Growth equity (General Atlantic, Warburg)'],
          ['Continue & Grow', '5%', 'N/A', 'Beyond M48', 'Founders choose to keep building'],
        ]}
      />

      <h3 className="text-lg font-bold text-white mb-3 mt-6">Valuation Framework</h3>
      <Expandable title="How we get to $2-3B" icon={Trophy} color="text-[#c9a227]" defaultOpen>
        <DocTable
          headers={['Metric', 'Value', 'Multiple', 'Implied Valuation']}
          rows={[
            ['Revenue ($720M ARR)', '$720M', '4-5x', '$2.9-3.6B'],
            ['GMV (AED 3B = $820M)', '$820M', '2-3x', '$1.6-2.5B'],
            ['MAU (5M users)', '5M', '$400-600/user', '$2-3B'],
            ['EBITDA ($216M at 30%)', '$216M', '12-15x', '$2.6-3.2B'],
          ]}
        />
        <InfoBox type="info">
          <strong>Comparable Exits:</strong> Careem acquired by Uber for $3.1B (2019). Souq acquired by Amazon for $580M (2017). Noon valued at $1B+ (2022). Our multi-product super-app model with fintech revenue commands premium multiples.
        </InfoBox>
      </Expandable>

      <h3 className="text-lg font-bold text-white mb-3 mt-6">Founder Outcomes (Post-Dilution)</h3>
      <DocTable
        headers={['Stakeholder', 'Ownership at Exit', 'Value at $2.5B', 'Notes']}
        rows={[
          ['Founding Team (5)', '~35-40%', '$875M-1B', 'After 5 rounds of dilution'],
          ['Early Employees (ESOP)', '~8-10%', '$200-250M', '~50 key employees'],
          ['Pre-Seed Investors', '~12%', '$300M', '$400K invested → 750x return'],
          ['Seed Investors', '~10%', '$250M', '$2M invested → 125x return'],
          ['Series A-D Investors', '~30-35%', '$750-875M', '$270M invested → 3-4x'],
        ]}
      />

      <div className="mt-6 p-4 bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-xl">
        <h4 className="text-[#c9a227] font-bold mb-2">The Legacy Vision</h4>
        <ul className="space-y-1 text-slate-300 text-sm">
          <li>• #1 super-app in the GCC — 5M+ users, 60K+ merchants</li>
          <li>• Financial inclusion for underbanked populations across 6 countries</li>
          <li>• 5,000+ direct jobs created, 50,000+ gig economy workers</li>
          <li>• Technology leadership in MENA — built from Dubai for the world</li>
          <li>• 26 products solving real problems across loyalty, fintech, commerce, travel, and healthcare</li>
        </ul>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// MAIN PAGE COMPONENT
// ════════════════════════════════════════════════════════════════════
export default function CompleteRoadmapPage() {
  const [activeSection, setActiveSection] = useState('overview');

  const sectionComponents: Record<string, React.ReactNode> = {
    'overview': <OverviewSection />,
    'day-1': <Day1Section />,
    'nuqta-launch': <NuqtaLaunchSection />,
    'rabtul-core': <RabtulCoreSection />,
    'group-formation': <GroupFormationSection />,
    'bizone-build': <BizOneBuildSection />,
    'product-sequence': <ProductSequenceSection />,
    'company-activation': <CompanyActivationSection />,
    'team-scaling': <TeamScalingSection />,
    'financial-milestones': <FinancialMilestonesSection />,
    'licensing': <LicensingSection />,
    'tech-infrastructure': <TechInfraSection />,
    'gcc-expansion': <GccExpansionSection />,
    'risk-management': <RiskManagementSection />,
    'dependencies': <DependenciesSection />,
    'kpi-dashboard': <KpiDashboardSection />,
    'governance': <GovernanceSection />,
    'exit-criteria': <ExitCriteriaSection />,
  };

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#0d1d3a] to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/master-roadmap" className="inline-flex items-center gap-2 text-[#c9a227] hover:text-[#f4d35e] mb-4 text-sm">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Master Roadmap
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-[#c9a227]/20 flex items-center justify-center">
              <Target className="w-6 h-6 text-[#c9a227]" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">Complete Execution Roadmap</h1>
              <p className="text-slate-400 text-sm mt-1">Day 1 to Exit-Ready — The definitive 48-month blueprint</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge text="26 Products" color="bg-emerald-500/20 text-emerald-400" />
            <Badge text="11 Companies" color="bg-blue-500/20 text-blue-400" />
            <Badge text="6 Countries" color="bg-purple-500/20 text-purple-400" />
            <Badge text="48 Months" color="bg-amber-500/20 text-amber-400" />
            <Badge text="$2-3B Exit" color="bg-[#c9a227]/20 text-[#c9a227]" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Mobile: horizontal scroll */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:hidden overflow-x-auto -mx-4 px-4 pb-4">
              <div className="flex gap-2 min-w-max">
                {sections.map(s => {
                  const Icon = s.icon;
                  const isActive = activeSection === s.id;
                  return (
                    <button key={s.id} onClick={() => setActiveSection(s.id)} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${isActive ? 'bg-[#c9a227] text-black' : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50'}`}>
                      <Icon size={14} />
                      {s.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Desktop: vertical sidebar */}
            <nav className="hidden lg:block sticky top-20 space-y-1 max-h-[calc(100vh-120px)] overflow-y-auto">
              {sections.map(s => {
                const Icon = s.icon;
                const isActive = activeSection === s.id;
                return (
                  <button key={s.id} onClick={() => { setActiveSection(s.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg ${isActive ? 'bg-[#c9a227]/20 text-[#c9a227] border-l-2 border-[#c9a227]' : 'text-slate-400 hover:text-white hover:bg-slate-700/50 border-l-2 border-transparent'}`}>
                    <Icon size={18} />
                    <span className="truncate">{s.label}</span>
                    {s.phase && <span className={`ml-auto text-xs px-1.5 py-0.5 rounded flex-shrink-0 ${isActive ? 'bg-[#c9a227]/30 text-[#c9a227]' : 'bg-slate-800 text-slate-500'}`}>{s.phase}</span>}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Content Area */}
          <main className="flex-1 min-w-0">
            {sectionComponents[activeSection]}
          </main>
        </div>
      </div>

      {/* Bottom Nav */}
      <section className="bg-slate-800/30 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/master-roadmap" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors">
              <Target className="w-5 h-5" /> Master Roadmap
            </Link>
            <Link href="/3-year-plan" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors">
              <Calendar className="w-5 h-5" /> 3-Year Plan
            </Link>
            <Link href="/execution-plan" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors">
              <Rocket className="w-5 h-5" /> Execution Plan
            </Link>
            <Link href="/rtmn-group" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors">
              <Building2 className="w-5 h-5" /> RTMN Group
            </Link>
            <Link href="/rabtul-tech" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors">
              <Code className="w-5 h-5" /> Rabtul Tech
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
