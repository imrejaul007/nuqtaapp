'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Database, Shield, Network, Users, Wallet, Store,
  Coins, Brain, Zap, Globe, ArrowRight, CheckCircle,
  AlertTriangle, Settings, BarChart3, Server, Eye,
  Fingerprint, Bell, Code, Terminal, Activity,
  Cloud, GitBranch, Smartphone,
  XCircle, ChevronDown, ChevronUp, DollarSign,
  ArrowUpRight, TrendingUp, CreditCard,
  LayoutGrid, ChevronRight, Package,
  Briefcase
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ─── Hero Stats ────────────────────────────────────────────────
const heroStats = [
  { label: 'RTMN Ownership', value: '100%', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30' },
  { label: 'Core Systems', value: '9', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
  { label: 'Apps Connected', value: '100+', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
  { label: 'Events/Sec', value: '1M+', color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30' },
  { label: 'Platform Uptime', value: '99.99%', color: 'text-[#c9a227]', bg: 'bg-[#c9a227]/10', border: 'border-[#c9a227]/30' },
];

// ─── Core Systems (9) ────────────────────────────────────────
const coreSystems = [
  {
    id: 'identity',
    name: 'Identity & SSO',
    arabic: 'هوية',
    icon: Fingerprint,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    description: 'Single Sign-On across all 100+ apps. One identity, verified once, trusted everywhere in the RTMN ecosystem.',
    capabilities: [
      'Unified login across all apps',
      'Biometric authentication (Face ID, Touch ID)',
      'Emirates ID / KYC verification',
      'Session management & device fingerprinting',
      'Fraud scoring per user',
      'OAuth 2.0 / OpenID Connect',
    ],
    metric: '99.99% uptime',
  },
  {
    id: 'wallet',
    name: 'Wallet Ledger',
    arabic: 'محفظة',
    icon: Wallet,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    description: 'THE ONLY wallet system in the ecosystem. No app can create wallet logic. Single source of truth for all balances.',
    capabilities: [
      'Nuqta Coins ledger (earn, burn, transfer)',
      'Branded coins (merchant-specific)',
      'Promo coins (campaign-specific)',
      'Real-time balance updates (ACID compliant)',
      'Complete transaction history & audit',
      'Multi-currency support (AED, SAR, BHD)',
    ],
    metric: '1M+ txns/day',
  },
  {
    id: 'rules',
    name: 'Rule Engine',
    arabic: 'قواعد',
    icon: Settings,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    description: 'Central rule engine for coins, commission, caps, eligibility. HQ writes rules, Rabtul enforces them across all apps.',
    capabilities: [
      'Coin earn/burn rules per category',
      'Commission slabs per merchant tier',
      'Caps & limits (daily, weekly, monthly)',
      'Campaign eligibility rules',
      'Geo-fencing and time-based rules',
      'Real-time rule evaluation (<10ms)',
    ],
    metric: '10K+ active rules',
  },
  {
    id: 'events',
    name: 'Event Bus',
    arabic: 'أحداث',
    icon: Activity,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    description: 'Real-time event streaming connecting all apps. Every transaction, every action, every signal flows through Rabtul.',
    capabilities: [
      'Exactly-once delivery guarantee',
      'Event replay capability for debugging',
      'Cross-app triggers and workflows',
      'Real-time streaming (Kafka-based)',
      'Event sourcing for full audit trail',
      'Dead letter queue for failed events',
    ],
    metric: '1M+ events/sec',
  },
  {
    id: 'analytics',
    name: 'AI & Analytics',
    arabic: 'تحليلات',
    icon: Brain,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
    description: 'Unified analytics and AI engine serving all apps. Recommendations, predictions, fraud detection, and segmentation.',
    capabilities: [
      'Real-time analytics dashboards',
      'ML-powered recommendations',
      'Churn prediction models',
      'Fraud detection (ML + rules)',
      'A/B testing framework',
      'User segmentation engine',
    ],
    metric: '95% ML accuracy',
  },
  {
    id: 'notifications',
    name: 'Notifications Hub',
    arabic: 'إشعارات',
    icon: Bell,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
    description: 'Unified notification system for all channels. Push, SMS, WhatsApp, email — all routed intelligently.',
    capabilities: [
      'Push notifications (iOS, Android, Web)',
      'SMS gateway (multi-provider failover)',
      'WhatsApp Business API integration',
      'Email delivery (transactional & marketing)',
      'In-app messages and banners',
      'Smart routing (channel preference per user)',
    ],
    metric: '100M+ msgs/day',
  },
  {
    id: 'fraud',
    name: 'Fraud & Audit',
    arabic: 'أمان',
    icon: Shield,
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    description: 'Real-time fraud detection and complete audit trail for compliance. Every transaction scored, every action logged.',
    capabilities: [
      'ML fraud models (real-time scoring)',
      'Velocity checks (amount, frequency)',
      'Device fingerprinting & IP intelligence',
      'Transaction monitoring & alerts',
      'Compliance reporting (CBUAE, SAMA)',
      'Complete audit trail (100% coverage)',
    ],
    metric: '<0.01% fraud rate',
  },
  {
    id: 'api',
    name: 'API Gateway',
    arabic: 'بوابة',
    icon: GitBranch,
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/30',
    description: 'Single entry point for all API calls. Rate limiting, authentication, routing, and load balancing at scale.',
    capabilities: [
      'Rate limiting per app & per user',
      'API versioning (v1, v2, v3)',
      'Intelligent request routing',
      'Auto-scaling load balancing',
      'Circuit breaker pattern',
      'API analytics & monitoring',
    ],
    metric: '10M+ req/sec',
  },
  {
    id: 'sdk',
    name: 'RTMN Core SDK',
    arabic: 'أدوات',
    icon: Code,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/30',
    description: 'Developer SDK for all apps. Wallet, auth, events, analytics — all in one package. Build once, run everywhere.',
    capabilities: [
      'iOS & Android native SDKs',
      'Web SDK (React, Vue, Angular)',
      'React Native & Flutter support',
      'Auto-updates with backward compat',
      'Crash reporting & diagnostics',
      'Full documentation & playground',
    ],
    metric: '100+ integrations',
  },
];

// ─── How It Works Steps ────────────────────────────────────────
const howItWorksSteps = [
  {
    step: 1,
    title: 'App Sends Event',
    description: 'Any RTMN app (Nuqta, Wasil, Rakab, etc.) triggers an action — a transaction, login, coin earn, or user event.',
    icon: Zap,
    color: 'text-purple-400',
  },
  {
    step: 2,
    title: 'API Gateway Routes',
    description: 'The request hits the API Gateway which authenticates, rate-limits, and routes it to the correct Rabtul service.',
    icon: GitBranch,
    color: 'text-blue-400',
  },
  {
    step: 3,
    title: 'Rules Evaluate',
    description: 'The Rule Engine evaluates the action against 10K+ active rules: eligibility, caps, commission slabs, geo-fences.',
    icon: Settings,
    color: 'text-orange-400',
  },
  {
    step: 4,
    title: 'Wallet Updates',
    description: 'If coins are earned/burned, the Wallet Ledger updates balances atomically with ACID guarantees.',
    icon: Wallet,
    color: 'text-emerald-400',
  },
  {
    step: 5,
    title: 'Event Bus Broadcasts',
    description: 'The Event Bus publishes the result to all interested apps. Cross-app triggers fire automatically.',
    icon: Activity,
    color: 'text-pink-400',
  },
  {
    step: 6,
    title: 'AI Learns & Notifies',
    description: 'Analytics captures the data for ML models. Notifications Hub sends confirmations via the optimal channel.',
    icon: Brain,
    color: 'text-cyan-400',
  },
];

// ─── What Rabtul Does NOT Do ────────────────────────────────────
const doesNotDo = [
  { item: 'UI for merchants', reason: 'BizOne handles merchant interfaces', icon: Store },
  { item: 'UI for users', reason: 'Nuqta Corp handles consumer apps', icon: Users },
  { item: 'Marketing creatives', reason: 'Adzy handles campaigns & ads', icon: Eye },
  { item: 'POS screens', reason: 'BizOne handles point-of-sale', icon: Terminal },
  { item: 'Standalone apps', reason: 'Rabtul is infrastructure only', icon: Smartphone },
  { item: 'Direct revenue', reason: 'Rabtul is a cost center, not revenue', icon: DollarSign },
];

// ─── Pricing / Cost Model ─────────────────────────────────────
const costModel = [
  {
    name: 'Internal Platform',
    price: 'Cost Center',
    period: 'fully funded by RTMN',
    description: 'Rabtul is 100% owned by RTMN Holding and does not charge external customers. Its value is enabling the entire ecosystem.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    highlight: false,
    features: [
      'All RTMN apps use Rabtul free of charge',
      'Cost allocated across ecosystem companies',
      'Infrastructure cost: ~2M AED/yr',
      'Engineering team: ~5M AED/yr',
      'Cloud hosting: ~1.5M AED/yr',
      'Total TCO: ~8.5M AED/yr',
      'Enables ~200M+ AED ecosystem revenue',
      '23x return on infrastructure investment',
    ],
  },
  {
    name: 'Future: PaaS Offering',
    price: 'TBD',
    period: 'Phase 4+',
    description: 'In Phase 4, Rabtul may offer its infrastructure as a Platform-as-a-Service to external companies building super-apps.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    highlight: true,
    features: [
      'Identity & SSO as a service',
      'Wallet ledger for loyalty programs',
      'Rule engine for business logic',
      'Event bus for microservices',
      'Notification hub for multi-channel',
      'AI/ML platform for recommendations',
      'API management & gateway',
      'Estimated pricing: $5K-50K/mo per customer',
    ],
  },
  {
    name: 'Future: Data Insights',
    price: 'TBD',
    period: 'Phase 4+',
    description: 'Anonymized, aggregated market intelligence derived from ecosystem data for enterprise customers.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    highlight: false,
    features: [
      'Consumer spending patterns by category',
      'Merchant performance benchmarks',
      'Market trend reports (monthly)',
      'Custom research for enterprise clients',
      'Anonymized & GDPR/PDPL compliant',
      'API access for data feeds',
      'Dashboard for self-service analytics',
      'Estimated pricing: $2K-20K/mo',
    ],
  },
];

// ─── Unit Economics (Ecosystem Value) ──────────────────────────
const unitEconomics = [
  { metric: 'Total Infrastructure Cost', value: '8.5M AED/yr', description: 'Annual cost of running Rabtul including engineering, cloud, and operations', icon: Server, color: 'text-purple-400' },
  { metric: 'Ecosystem Revenue Enabled', value: '200M+ AED/yr', description: 'Total revenue across all RTMN apps that depends on Rabtul infrastructure', icon: TrendingUp, color: 'text-emerald-400' },
  { metric: 'ROI on Infrastructure', value: '23x', description: 'Every 1 AED invested in Rabtul enables 23 AED of ecosystem revenue', icon: BarChart3, color: 'text-blue-400' },
  { metric: 'Cost per Transaction', value: '0.003 AED', description: 'Marginal cost per event processed through the Rabtul platform', icon: Coins, color: 'text-orange-400' },
  { metric: 'Apps Onboarded/Month', value: '5-8', description: 'New RTMN apps connecting to Rabtul infrastructure each month', icon: Package, color: 'text-pink-400' },
  { metric: 'Engineer Productivity', value: '3x faster', description: 'Apps built 3x faster using Rabtul SDKs vs building from scratch', icon: Zap, color: 'text-cyan-400' },
];

// ─── Revenue Potential (Future PaaS) ──────────────────────────
const revenueStreams = [
  {
    stream: 'PaaS Subscriptions',
    description: 'Monthly subscriptions from external companies using Rabtul infrastructure (Phase 4+)',
    percentage: '50%',
    icon: Cloud,
    color: 'text-purple-400',
    projected: '15M AED/yr at 50 enterprise clients',
  },
  {
    stream: 'Data Intelligence',
    description: 'Anonymized market data, consumer insights, and trend reports for enterprise clients',
    percentage: '25%',
    icon: Brain,
    color: 'text-blue-400',
    projected: '7.5M AED/yr',
  },
  {
    stream: 'API Transaction Fees',
    description: 'Usage-based fees for high-volume API calls beyond included tiers',
    percentage: '15%',
    icon: GitBranch,
    color: 'text-emerald-400',
    projected: '4.5M AED/yr',
  },
  {
    stream: 'Custom Integrations',
    description: 'Professional services for custom integration, migration, and consulting',
    percentage: '10%',
    icon: Code,
    color: 'text-orange-400',
    projected: '3M AED/yr',
  },
];

// ─── Tech Stack ───────────────────────────────────────────────
const techStack = [
  { category: 'Compute', items: ['Kubernetes', 'Docker', 'Istio', 'Helm'], color: 'text-blue-400' },
  { category: 'Databases', items: ['PostgreSQL', 'Redis', 'MongoDB', 'ClickHouse'], color: 'text-emerald-400' },
  { category: 'Streaming', items: ['Kafka', 'Flink', 'Debezium', 'Pulsar'], color: 'text-orange-400' },
  { category: 'AI/ML', items: ['TensorFlow', 'PyTorch', 'Spark', 'MLflow'], color: 'text-pink-400' },
  { category: 'APIs', items: ['GraphQL', 'gRPC', 'REST', 'WebSocket'], color: 'text-purple-400' },
  { category: 'Cloud', items: ['AWS', 'GCP', 'Multi-region', 'Edge CDN'], color: 'text-cyan-400' },
  { category: 'Security', items: ['Vault', 'OPA', 'mTLS', 'WAF'], color: 'text-red-400' },
  { category: 'Observability', items: ['Datadog', 'Grafana', 'PagerDuty', 'Sentry'], color: 'text-yellow-400' },
];

// ─── Market Opportunity (PaaS) ─────────────────────────────────
const marketData = {
  tam: '$2B+',
  tamLabel: 'MENA PaaS & Super-App Infra',
  segments: [
    { name: 'Loyalty & Wallet Platforms', size: '$600M', share: '30%', color: 'bg-purple-500' },
    { name: 'Identity & Auth Services', size: '$400M', share: '20%', color: 'bg-blue-500' },
    { name: 'Event Streaming & Messaging', size: '$360M', share: '18%', color: 'bg-orange-500' },
    { name: 'AI/ML Platform Services', size: '$380M', share: '19%', color: 'bg-pink-500' },
    { name: 'API Management', size: '$260M', share: '13%', color: 'bg-emerald-500' },
  ],
  growth: '28% CAGR',
  drivers: [
    'Super-app trend expanding across MENA, Africa, and Southeast Asia',
    'Companies need loyalty/wallet infrastructure without building from scratch',
    'Rising demand for Arabic-first, MENA-compliant identity solutions',
    'Cost of building proprietary infrastructure pushing adoption of PaaS',
  ],
};

// ─── Comparable Platforms ────────────────────────────────────────
const comparables = [
  {
    name: 'Twilio',
    strengths: 'Best-in-class messaging APIs, massive scale, developer-first',
    weaknesses: 'No wallet/loyalty, no rule engine, Western-focused',
    pricing: 'Usage-based ($0.0075/msg)',
  },
  {
    name: 'Firebase (Google)',
    strengths: 'Free tier, auth & analytics, massive ecosystem',
    weaknesses: 'No wallet, no MENA focus, vendor lock-in, limited ML',
    pricing: 'Free tier + usage-based',
  },
  {
    name: 'Stripe',
    strengths: 'Best payment infra, developer experience, global coverage',
    weaknesses: 'Payments only, no loyalty/wallet, limited MENA gateway support',
    pricing: '2.9% + $0.30/txn',
  },
];

const competitiveAdvantages = [
  'Full-stack super-app infrastructure: identity + wallet + rules + events + AI in one platform',
  'MENA-native: Arabic-first, Emirates ID/KYC, CBUAE/SAMA compliant',
  'Battle-tested at scale: already powering 100+ apps and 1M+ events/sec',
  'Unified wallet & loyalty: no competitor offers coins + BNPL + remittance in one ledger',
  'Rule engine that no PaaS offers: campaign eligibility, commission slabs, geo-fencing',
  'Cost advantage: 23x ROI proven internally before offering externally',
];

// ─── Ecosystem Connections ────────────────────────────────────────
const ecosystemConnections = [
  {
    app: 'Nuqta (Loyalty)',
    description: 'Wallet balances, coin earn/burn rules, tier management, and redemption logic all powered by Rabtul.',
    type: 'Core Dependency',
    color: 'text-[#c9a227]',
    icon: Coins,
  },
  {
    app: 'NuqtaPay (Payments)',
    description: 'Transaction processing, fraud scoring, balance checks, and settlement all routed through Rabtul.',
    type: 'Core Dependency',
    color: 'text-teal-400',
    icon: CreditCard,
  },
  {
    app: 'All Consumer Apps',
    description: 'Rakab, Safar, Wasil, Eventora, Ajer — all use Rabtul SSO, wallet, events, and notifications.',
    type: 'Infrastructure',
    color: 'text-blue-400',
    icon: Smartphone,
  },
  {
    app: 'All Merchant Apps',
    description: 'BizOne, Inventora, NextaBizz — all sync through Rabtul event bus and use the rule engine.',
    type: 'Infrastructure',
    color: 'text-emerald-400',
    icon: Store,
  },
  {
    app: 'Adzy (Advertising)',
    description: 'Campaign targeting, user segmentation, and analytics data all sourced from Rabtul AI engine.',
    type: 'Data Provider',
    color: 'text-pink-400',
    icon: Eye,
  },
  {
    app: 'Hawil (Remittance)',
    description: 'Cross-border compliance, KYC verification, and transaction monitoring powered by Rabtul.',
    type: 'Compliance',
    color: 'text-orange-400',
    icon: Globe,
  },
];


const controls = [
  'Core API gateway & orchestration',
  'Identity management (Nuqta ID / KYC)',
  'Microservices infrastructure',
  'Data mesh & inter-app communication',
  'Developer portal & SDK',
  'Security & encryption layer',
  'Multi-tenant architecture',
  'GCC data residency compliance',
];

const doesNotOwn = [
  { item: 'Consumer-facing products', reason: 'Managed by Nuqta, Wasil, etc.' },
  { item: 'Payment processing', reason: 'Managed by NuqtaPay' },
  { item: 'Business logic per product', reason: 'Managed by each RTMN product' },
  { item: 'Content moderation', reason: 'Managed by Majlis' },
  { item: 'Compliance rules engine', reason: 'Managed by Amana' },
  { item: 'Government portal connectors', reason: 'Managed by Khedma' },
  { item: 'Marketing & ads', reason: 'Managed by Adzy' },
  { item: 'Customer support', reason: 'Managed by each product team' },
];

export default function RabtulPage() {
  const [expandedSystem, setExpandedSystem] = useState<string | null>('identity');
  const [activeTab, setActiveTab] = useState<'systems' | 'economics' | 'market' | 'deck'>('systems');

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <div className="bg-gradient-to-br from-[#0a1628] via-purple-900/20 to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <Link href="/rtmn-group" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-6 text-sm">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to RTMN Group
          </Link>

          <div className="flex items-center gap-4 sm:gap-6 mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-xl shadow-purple-500/30">
              <Database className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                  Rabtul <span className="text-purple-400">Technologies</span>
                </h1>
                <span className="bg-red-500/20 text-red-400 text-xs sm:text-sm px-3 py-1 rounded-full font-bold border border-red-500/50">
                  MOST CRITICAL
                </span>
              </div>
              <p className="text-purple-400 text-lg sm:text-xl font-semibold mt-1">
                ربطل &bull; Core OS &bull; Single Source of Truth
              </p>
            </div>
          </div>

          <p className="text-slate-300 text-lg max-w-3xl mb-8">
            The brain, memory, and law of the entire RTMN ecosystem. Every app depends on Rabtul for
            identity, wallet, rules, events, analytics, and notifications. No sister company can create
            wallet logic, change rules, or store final balances. 100% owned by RTMN Holding.
          </p>

          {/* Critical Warning */}
          <div className="bg-red-500/10 border-2 border-red-500/50 rounded-xl p-4 sm:p-5 mb-8">
            <h3 className="text-sm font-bold text-red-400 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> NO SISTER COMPANY CAN:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-slate-900/50 rounded-lg p-3 border border-red-500/30 text-center">
                <XCircle className="w-6 h-6 text-red-400 mx-auto mb-1" />
                <span className="text-white font-bold text-sm">Create wallet logic</span>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-3 border border-red-500/30 text-center">
                <XCircle className="w-6 h-6 text-red-400 mx-auto mb-1" />
                <span className="text-white font-bold text-sm">Change rules</span>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-3 border border-red-500/30 text-center">
                <XCircle className="w-6 h-6 text-red-400 mx-auto mb-1" />
                <span className="text-white font-bold text-sm">Store final balances</span>
              </div>
            </div>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {heroStats.map((stat, i) => (
              <div key={i} className={`${stat.bg} rounded-xl p-4 text-center border ${stat.border}`}>
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════ TAB NAVIGATION ═══════════════ */}

      {/* Controls / Does NOT Own */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-emerald-500/5 rounded-xl p-6 border border-emerald-500/30">
            <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> What Rabtul Controls</h3>
            <div className="space-y-2">{controls.map((c, i) => (<div key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><span className="text-sm text-slate-300">{c}</span></div>))}</div>
          </div>
          <div className="bg-orange-500/5 rounded-xl p-6 border border-orange-500/30">
            <h3 className="text-lg font-bold text-orange-400 mb-4 flex items-center gap-2"><ArrowRight className="w-5 h-5" /> Does NOT Own</h3>
            <div className="space-y-2">{doesNotOwn.map((d, i) => (<div key={i} className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" /><span className="text-sm text-slate-300"><span className="text-white font-medium">{d.item}</span> \u2192 {d.reason}</span></div>))}</div>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-700/50 bg-slate-900/30 sticky top-0 z-10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0 overflow-x-auto">
            {[
              { key: 'systems' as const, label: 'Core Systems', icon: LayoutGrid },
              { key: 'economics' as const, label: 'Economics & Value', icon: DollarSign },
              { key: 'market' as const, label: 'Future PaaS Market', icon: Globe },
              { key: 'deck' as const, label: 'Pitch Deck', icon: Briefcase },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-5 py-4 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.key
                    ? 'border-purple-400 text-purple-400'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* ═══════════════ SYSTEMS TAB ═══════════════ */}
        {activeTab === 'systems' && (
          <>
            {/* Connection Diagram */}
            <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30 text-center mb-8">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center justify-center gap-2">
                <Network className="w-5 h-5 text-purple-400" />
                ALL APPS &rarr; Rabtul &rarr; ALL TRUTH
              </h2>
              <p className="text-slate-400 text-sm mb-4">Every app in the ecosystem connects to Rabtul for:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {['Identity', 'Wallet', 'Rules', 'Events', 'Analytics', 'Notifications', 'Fraud', 'APIs', 'SDK'].map((item, i) => (
                  <span key={i} className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* 9 Core Systems */}
            <h2 className="text-2xl font-bold text-white mb-2">9 Core Systems</h2>
            <p className="text-slate-400 mb-8">The backbone of the entire RTMN ecosystem. Each system is a single source of truth.</p>

            <div className="space-y-4">
              {coreSystems.map((system) => (
                <div
                  key={system.id}
                  className={`${system.bgColor} border ${system.borderColor} rounded-xl overflow-hidden transition-all`}
                >
                  <button
                    onClick={() => setExpandedSystem(expandedSystem === system.id ? null : system.id)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`w-12 h-12 rounded-xl ${system.bgColor} flex items-center justify-center border ${system.borderColor}`}>
                        <system.icon className={`w-6 h-6 ${system.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className={`text-base sm:text-lg font-bold ${system.color}`}>
                            {system.name}
                          </h3>
                          <span className="text-slate-500 text-xs">{system.arabic}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${system.bgColor} ${system.color} border ${system.borderColor}`}>
                            {system.metric}
                          </span>
                        </div>
                        <p className="text-slate-400 text-sm mt-0.5 line-clamp-1">{system.description}</p>
                      </div>
                    </div>
                    {expandedSystem === system.id ? (
                      <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0 ml-2" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 ml-2" />
                    )}
                  </button>

                  {expandedSystem === system.id && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-5">
                      <p className="text-slate-300 text-sm mb-4">{system.description}</p>
                      <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                        <h4 className="text-white font-bold mb-3 text-sm">Capabilities</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {system.capabilities.map((cap, i) => (
                            <div key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                              <CheckCircle className={`w-4 h-4 ${system.color} flex-shrink-0`} />
                              {cap}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* How It Works */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-2">How It Works</h2>
              <p className="text-slate-400 mb-8">Six steps showing how every action flows through Rabtul.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {howItWorksSteps.map((step) => (
                  <div key={step.step} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 relative">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-lg border border-purple-500/30">
                        {step.step}
                      </div>
                      <step.icon className={`w-6 h-6 ${step.color}`} />
                    </div>
                    <h4 className={`font-bold ${step.color} mb-2`}>{step.title}</h4>
                    <p className="text-slate-400 text-sm">{step.description}</p>
                    {step.step < 6 && (
                      <ChevronRight className="absolute top-5 right-4 w-4 h-4 text-slate-600 hidden lg:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* What Rabtul Does NOT Do */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-2">What Rabtul Does NOT Do</h2>
              <p className="text-slate-400 mb-6">Clear boundaries keep the architecture clean.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {doesNotDo.map((item, i) => (
                  <div key={i} className="bg-red-500/5 rounded-xl p-4 border border-red-500/20">
                    <div className="flex items-center gap-3 mb-2">
                      <item.icon className="w-5 h-5 text-red-400" />
                      <span className="text-white font-bold text-sm">{item.item}</span>
                    </div>
                    <p className="text-slate-400 text-sm">{item.reason}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-2">Tech Stack</h2>
              <p className="text-slate-400 mb-6">Enterprise-grade infrastructure built for scale.</p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {techStack.map((stack, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                    <h4 className={`${stack.color} font-bold text-sm mb-3`}>{stack.category}</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {stack.items.map((item, j) => (
                        <span key={j} className="text-xs bg-slate-900/50 px-2 py-1 rounded text-slate-300 border border-slate-700/50">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ecosystem Connections */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-2">Ecosystem Connections</h2>
              <p className="text-slate-400 mb-6">Every RTMN app depends on Rabtul. Here&apos;s how they connect.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ecosystemConnections.map((connection, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-900/50 flex items-center justify-center">
                        <connection.icon className={`w-5 h-5 ${connection.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className={`font-bold ${connection.color}`}>{connection.app}</h4>
                          <span className="text-xs px-2 py-0.5 rounded bg-slate-700/50 text-slate-400">
                            {connection.type}
                          </span>
                        </div>
                        <p className="text-slate-400 text-sm">{connection.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ═══════════════ ECONOMICS & VALUE TAB ═══════════════ */}
        {activeTab === 'economics' && (
          <>
            {/* Cost Model */}
            <h2 className="text-2xl font-bold text-white mb-2">Cost & Value Model</h2>
            <p className="text-slate-400 mb-8">Rabtul is a cost center today, with massive PaaS potential in Phase 4+.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {costModel.map((tier, i) => (
                <div
                  key={i}
                  className={`rounded-xl p-6 border-2 ${tier.highlight ? 'border-blue-500 ring-2 ring-blue-500/20' : `${tier.border} border`} ${tier.bg} relative`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      FUTURE OPPORTUNITY
                    </div>
                  )}
                  <h3 className={`text-xl font-bold ${tier.color} mb-1`}>{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-black text-white">{tier.price}</span>
                    <span className="text-slate-400 text-sm">{tier.period}</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-5">{tier.description}</p>
                  <ul className="space-y-2">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-300 text-sm">
                        <CheckCircle className={`w-4 h-4 ${tier.color} flex-shrink-0 mt-0.5`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Unit Economics */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-2">Ecosystem Value Metrics</h2>
              <p className="text-slate-400 mb-8">The measurable impact of Rabtul on the entire RTMN ecosystem.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {unitEconomics.map((item, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                    <item.icon className={`w-8 h-8 ${item.color} mb-3`} />
                    <div className={`text-2xl font-bold ${item.color} mb-1`}>{item.value}</div>
                    <h4 className="text-white font-bold text-sm mb-1">{item.metric}</h4>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Future Revenue Model */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-2">Future Revenue Model (Phase 4+)</h2>
              <p className="text-slate-400 mb-8">When Rabtul opens as a PaaS, four revenue streams emerge.</p>

              <div className="space-y-4">
                {revenueStreams.map((stream, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-900/50 flex items-center justify-center flex-shrink-0">
                        <stream.icon className={`w-6 h-6 ${stream.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className={`font-bold ${stream.color}`}>{stream.stream}</h4>
                          <span className={`text-lg font-bold ${stream.color}`}>{stream.percentage}</span>
                        </div>
                        <p className="text-slate-400 text-sm mb-2">{stream.description}</p>
                        <div className="flex items-center gap-2">
                          <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400 text-xs font-medium">{stream.projected}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 h-2 bg-slate-900/50 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${stream.color.replace('text-', 'bg-').replace('-400', '-500')}`}
                        style={{ width: stream.percentage }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Total Projected Revenue */}
              <div className="mt-6 bg-purple-500/10 rounded-xl p-6 border border-purple-500/30 text-center">
                <div className="text-sm text-slate-400 mb-1">Total Projected PaaS Revenue (Phase 4+)</div>
                <div className="text-3xl font-black text-purple-400">30M AED/yr</div>
                <div className="text-xs text-slate-500 mt-1">at 50 enterprise clients with full product suite adoption</div>
              </div>
            </div>
          </>
        )}

        {/* ═══════════════ FUTURE PaaS MARKET TAB ═══════════════ */}
        {activeTab === 'market' && (
          <>
            {/* Market Opportunity */}
            <h2 className="text-2xl font-bold text-white mb-2">PaaS Market Opportunity</h2>
            <p className="text-slate-400 mb-8">Super-app infrastructure is a massive, growing market that Rabtul is uniquely positioned to serve.</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30 text-center lg:col-span-1">
                <div className="text-sm text-slate-400 mb-2">Total Addressable Market</div>
                <div className="text-4xl font-black text-purple-400">{marketData.tam}</div>
                <div className="text-sm text-purple-400/70 mt-1">{marketData.tamLabel}</div>
                <div className="mt-4 pt-4 border-t border-purple-500/20">
                  <div className="text-sm text-slate-400">Annual Growth</div>
                  <div className="text-2xl font-bold text-emerald-400">{marketData.growth}</div>
                </div>
              </div>

              <div className="lg:col-span-2 bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <h4 className="text-white font-bold mb-4">Market Segments</h4>
                <div className="space-y-3">
                  {marketData.segments.map((seg, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-slate-300 text-sm">{seg.name}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-slate-400 text-sm">{seg.size}</span>
                          <span className="text-white font-bold text-sm w-10 text-right">{seg.share}</span>
                        </div>
                      </div>
                      <div className="h-2 bg-slate-900/50 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${seg.color}`} style={{ width: seg.share }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Market Drivers */}
            <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-500/30 mb-12">
              <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" /> Key Market Drivers
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {marketData.drivers.map((driver, i) => (
                  <div key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                    <ArrowUpRight className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    {driver}
                  </div>
                ))}
              </div>
            </div>

            {/* Comparable Platforms */}
            <h2 className="text-2xl font-bold text-white mb-2">Comparable Platforms</h2>
            <p className="text-slate-400 mb-8">Rabtul combines capabilities that today require 3-5 separate vendors.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {comparables.map((comp, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                  <h4 className="text-white font-bold mb-1">{comp.name}</h4>
                  <div className="text-xs text-slate-500 mb-3">{comp.pricing}</div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs font-semibold text-emerald-400 mb-1">Strengths</div>
                      <p className="text-slate-400 text-sm">{comp.strengths}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-red-400 mb-1">Weaknesses</div>
                      <p className="text-slate-400 text-sm">{comp.weaknesses}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Our Advantages */}
            <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30">
              <h4 className="text-purple-400 font-bold mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5" /> Rabtul Competitive Advantages
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {competitiveAdvantages.map((adv, i) => (
                  <div key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    {adv}
                  </div>
                ))}
              </div>
            </div>

            {/* Rabtul = AWS + Stripe + Twilio + Firebase */}
            <div className="mt-8 bg-purple-500/10 rounded-xl p-6 border-2 border-purple-500/50 text-center">
              <h3 className="text-lg font-bold text-white mb-3">Think of Rabtul as:</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {['AWS (Compute)', 'Stripe (Payments)', 'Twilio (Messaging)', 'Firebase (Auth)', 'Segment (Analytics)'].map((item, i) => (
                  <span key={i} className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-purple-400 font-bold text-lg mt-4">...all built for MENA super-apps, in one unified platform.</p>
            </div>
          </>
        )}

        {/* ═══════════════ PITCH DECK TAB ═══════════════ */}
        {activeTab === 'deck' && (
          <div className="space-y-8">
            {/* Investment Thesis */}
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-500/5 rounded-2xl p-6 border border-purple-500/30">
              <h2 className="text-2xl font-bold text-white mb-2">Investment Thesis</h2>
              <p className="text-slate-300 leading-relaxed">Rabtul is the silent backbone that makes an entire super-app ecosystem possible. Every transaction, every login, every coin earned flows through Rabtul. At 8.5M AED cost enabling 600M+ AED in ecosystem revenue, it is the highest-leverage investment in the entire RTMN portfolio with a clear path to 20M+ AED direct PaaS revenue.</p>
            </div>

            {/* Market Opportunity */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Market Opportunity</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'TAM', value: '$5B+', detail: 'GCC Enterprise Infrastructure' },
                  { label: 'SAM', value: '$2B', detail: 'MENA PaaS & Super-App Infra' },
                  { label: 'SOM', value: '$20M', detail: 'Year 3 PaaS License Revenue' },
                ].map(m => (
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
                {[
                  { title: 'Full-Stack Super-App Infra', desc: 'Identity + wallet + rules + events + AI in one platform. Competitors offer 1-2 pieces max.' },
                  { title: 'MENA-Native Compliance', desc: 'Arabic-first, Emirates ID/KYC, CBUAE/SAMA compliant out of the box.' },
                  { title: 'Battle-Tested at Scale', desc: 'Already powering 100+ apps and 1M+ events/sec before opening as PaaS.' },
                  { title: 'Unified Wallet + Loyalty', desc: 'No competitor offers coins + branded rewards + BNPL + remittance in one ledger.' },
                  { title: 'Central Rule Engine', desc: 'Commission slabs, campaign eligibility, geo-fencing — no PaaS offers this.' },
                  { title: '70x Proven ROI', desc: '8.5M AED cost enables 600M+ ecosystem revenue. Proven internally first.' },
                ].map(d => (
                  <div key={d.title} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <div><span className="text-white font-semibold text-sm">{d.title}</span><span className="text-slate-400 text-sm"> — {d.desc}</span></div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3-Year Financial Projections */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">3-Year Financial Projections</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-slate-700/50">
                    {['Year', 'Total Cost', 'Direct Revenue', 'Ecosystem Rev Enabled', 'ROI'].map(h => (
                      <th key={h} className="text-left px-3 py-2 text-purple-400 font-semibold">{h}</th>
                    ))}
                  </tr></thead>
                  <tbody>
                    {[
                      { year: 'Year 1', cost: '8.5M AED', rev: '0', enabled: '150M AED', roi: '18x' },
                      { year: 'Year 2', cost: '12M AED', rev: '0', enabled: '400M AED', roi: '33x' },
                      { year: 'Year 3', cost: '15M AED', rev: '20M AED', enabled: '600M+ AED', roi: '70x+' },
                    ].map(r => (
                      <tr key={r.year} className="border-b border-slate-800/50">
                        <td className="px-3 py-3 text-white font-medium">{r.year}</td>
                        <td className="px-3 py-3 text-red-400">{r.cost}</td>
                        <td className="px-3 py-3 text-emerald-400 font-bold">{r.rev}</td>
                        <td className="px-3 py-3 text-blue-400">{r.enabled}</td>
                        <td className="px-3 py-3 text-[#c9a227] font-bold">{r.roi}</td>
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
                {[
                  { name: 'Stripe', val: '$50B', model: 'Payment infrastructure' },
                  { name: 'Plaid', val: '$13B', model: 'Financial data connectivity' },
                  { name: 'Twilio', val: '$10B', model: 'Communication APIs' },
                  { name: 'Auth0/Okta', val: '$6B', model: 'Identity platform' },
                ].map(c => (
                  <div key={c.name} className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 text-center">
                    <div className="text-white font-bold">{c.name}</div>
                    <div className="text-purple-400 text-lg font-black mt-1">{c.val}</div>
                    <div className="text-xs text-slate-500 mt-1">{c.model}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Unicorn Path */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <ArrowUpRight className="w-5 h-5 text-purple-400" /> Unicorn Path
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { stage: 'Phase 1', metric: '30+ apps', timeline: 'Q4 2026', val: '~$100M' },
                  { stage: 'Phase 2', metric: '75+ apps, PaaS prep', timeline: 'Q4 2027', val: '~$500M' },
                  { stage: 'Phase 3', metric: '100+ apps, 50 PaaS clients', timeline: 'Q4 2028', val: '~$1B+' },
                  { stage: 'Phase 4', metric: 'GCC standard infra', timeline: '2029+', val: '~$3-5B' },
                ].map(s => (
                  <div key={s.stage} className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/30 text-center">
                    <div className="text-xs text-purple-400 font-bold">{s.stage}</div>
                    <div className="text-white font-bold text-sm mt-1">{s.metric}</div>
                    <div className="text-lg font-black text-purple-400 mt-1">{s.val}</div>
                    <div className="text-xs text-slate-500 mt-1">{s.timeline}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RTMN Ecosystem Multiplier */}
            <div className="bg-gradient-to-r from-[#c9a227]/10 to-transparent rounded-xl p-6 border border-[#c9a227]/30">
              <h3 className="text-lg font-bold text-[#c9a227] mb-3">RTMN Ecosystem Multiplier</h3>
              <p className="text-slate-300 text-sm mb-4">Rabtul&apos;s value extends far beyond its direct revenue — it is the force multiplier for the entire RTMN ecosystem.</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  '70x ROI on Infrastructure',
                  'Zero marginal cost per app',
                  'Switching cost moat',
                  'PaaS is pure upside',
                ].map(s => (
                  <div key={s} className="bg-[#c9a227]/10 rounded-lg px-3 py-2 text-center">
                    <span className="text-[#c9a227] text-xs font-medium">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ═══════════════ NAVIGATION ═══════════════ */}
      <section className="bg-slate-800/30 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rtmn-group" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors">
              <Network className="w-5 h-5" /> RTMN Group
            </Link>
            <Link href="/bizone" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-400 transition-colors">
              <Store className="w-5 h-5" /> BizOne Merchants
            </Link>
            <Link href="/rabtul-tech" className="inline-flex items-center gap-2 px-6 py-3 bg-violet-500 text-white rounded-xl font-bold hover:bg-violet-400 transition-colors">
              <Code className="w-5 h-5" /> Rabtul Tech Team
            </Link>
            <Link href="/ai-infrastructure" className="inline-flex items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-xl font-bold hover:bg-pink-400 transition-colors">
              <Brain className="w-5 h-5" /> AI Infrastructure
            </Link>
          </div>
        </div>
      </section>

      {/* Link to Full Rabtul Core Specification */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/30 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-2">Rabtul Core — Full Technical Specification</h3>
            <p className="text-slate-400 mb-4">9 core services — complete API specs, database schemas, event contracts, and security standards for developers.</p>
            <Link href="/rabtul-core" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-500 transition-colors">
              <Code className="w-5 h-5" /> View Full Spec <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
