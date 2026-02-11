'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Database, Shield, Lock, Layers, Network, Users, Wallet, Store,
  Coins, Brain, Zap, Target, Globe, ArrowRight, CheckCircle,
  AlertTriangle, Crown, Settings, BarChart3, Server, Eye,
  Key, Fingerprint, Bell, Code, Terminal, Activity, RefreshCw,
  Cloud, Cpu, GitBranch, MessageSquare, Mail, Smartphone,
  XCircle, ArrowDown, ArrowUp, ChevronDown, ChevronUp
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// Rabtul Core Systems
const rabtulSystems = [
  {
    id: 'identity',
    name: 'Identity & SSO',
    arabic: 'هوية',
    description: 'Single Sign-On across all 100+ apps. One identity, verified once, trusted everywhere.',
    icon: Fingerprint,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    features: [
      'Unified login across all apps',
      'Biometric authentication',
      'Emirates ID / KYC verification',
      'Session management',
      'Device fingerprinting',
      'Fraud scoring per user',
    ],
    metrics: ['99.99% uptime', '<100ms auth', '10M+ users'],
  },
  {
    id: 'wallet',
    name: 'Wallet Ledger',
    arabic: 'محفظة',
    description: 'THE ONLY wallet system in the ecosystem. No app can create wallet logic.',
    icon: Wallet,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    features: [
      'Nuqta Coins ledger',
      'Branded coins (merchant-specific)',
      'Promo coins (campaign-specific)',
      'Real-time balance updates',
      'Transaction history',
      'Multi-currency support',
    ],
    metrics: ['1M+ txns/day', 'ACID compliant', 'Real-time sync'],
  },
  {
    id: 'rules',
    name: 'Rule Engine',
    arabic: 'قواعد',
    description: 'Central rule engine for coins, commission, caps, eligibility. HQ writes, Rabtul enforces.',
    icon: Settings,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    features: [
      'Coin earn/burn rules',
      'Commission slabs',
      'Caps & limits',
      'Campaign eligibility',
      'Geo-fencing rules',
      'Time-based rules',
    ],
    metrics: ['10K+ active rules', '<10ms evaluation', 'Real-time updates'],
  },
  {
    id: 'events',
    name: 'Event Bus',
    arabic: 'أحداث',
    description: 'Real-time event streaming connecting all apps. Every transaction, every action, every signal.',
    icon: Activity,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    features: [
      'Exactly-once delivery',
      'Event replay capability',
      'Cross-app triggers',
      'Real-time streaming',
      'Event sourcing',
      'Audit trail',
    ],
    metrics: ['1M+ events/sec', '99.999% delivery', '<50ms latency'],
  },
  {
    id: 'analytics',
    name: 'AI & Analytics',
    arabic: 'تحليلات',
    description: 'Unified analytics and AI engine. Recommendations, predictions, fraud detection.',
    icon: Brain,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    features: [
      'Real-time dashboards',
      'ML recommendations',
      'Churn prediction',
      'Fraud detection',
      'A/B testing',
      'User segmentation',
    ],
    metrics: ['95% ML accuracy', 'Real-time insights', 'Petabyte scale'],
  },
  {
    id: 'notifications',
    name: 'Notifications Hub',
    arabic: 'إشعارات',
    description: 'Unified notification system for all channels - push, SMS, WhatsApp, email.',
    icon: Bell,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    features: [
      'Push notifications',
      'SMS gateway',
      'WhatsApp Business API',
      'Email delivery',
      'In-app messages',
      'Smart routing',
    ],
    metrics: ['100M+ msgs/day', '98% delivery', 'Multi-channel'],
  },
  {
    id: 'fraud',
    name: 'Fraud & Audit',
    arabic: 'أمان',
    description: 'Real-time fraud detection and complete audit trail for compliance.',
    icon: Shield,
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    features: [
      'ML fraud models',
      'Velocity checks',
      'Device fingerprinting',
      'IP intelligence',
      'Transaction monitoring',
      'Compliance reporting',
    ],
    metrics: ['<0.01% fraud rate', '<100ms scoring', '100% audit'],
  },
  {
    id: 'api',
    name: 'API Gateway',
    arabic: 'بوابة',
    description: 'Single entry point for all API calls. Rate limiting, auth, routing.',
    icon: GitBranch,
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
    features: [
      'Rate limiting',
      'API versioning',
      'Request routing',
      'Load balancing',
      'Circuit breaker',
      'API analytics',
    ],
    metrics: ['10M+ req/sec', '<20ms overhead', '99.99% uptime'],
  },
  {
    id: 'sdk',
    name: 'RTMN Core SDK',
    arabic: 'أدوات',
    description: 'Developer SDK for all apps. Wallet, auth, events, analytics - all in one package.',
    icon: Code,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    features: [
      'iOS & Android SDKs',
      'Web SDK',
      'React Native',
      'Flutter support',
      'Auto-updates',
      'Crash reporting',
    ],
    metrics: ['100+ integrations', '<1 day setup', 'Full docs'],
  },
];

// What Rabtul Does NOT Do
const doesNotDo = [
  { item: 'UI for merchants', reason: 'BizOne handles merchant interfaces' },
  { item: 'UI for users', reason: 'Nuqta Corp handles consumer apps' },
  { item: 'Marketing creatives', reason: 'Adzy handles campaigns' },
  { item: 'POS screens', reason: 'BizOne handles point-of-sale' },
  { item: 'Standalone apps', reason: 'Rabtul is infrastructure only' },
];

// Data Flow
const dataFlow = [
  { direction: 'Consumes', items: ['Events from all 100+ apps', 'Transaction data', 'User actions', 'Merchant events'] },
  { direction: 'Produces', items: ['Wallet balances', 'Rule decisions', 'Unified analytics', 'Fraud scores', 'Recommendations'] },
];

// Tech Stack
const techStack = [
  { category: 'Core', items: ['Kubernetes', 'PostgreSQL', 'Redis', 'Kafka'] },
  { category: 'AI/ML', items: ['TensorFlow', 'PyTorch', 'Spark', 'MLflow'] },
  { category: 'APIs', items: ['GraphQL', 'gRPC', 'REST', 'WebSocket'] },
  { category: 'Cloud', items: ['AWS', 'GCP', 'Multi-region', 'Edge'] },
];

// Ownership & Investment
const ownership = {
  rtmnShare: '100%',
  outsideInvestors: '0%',
  investment: '⭐⭐⭐',
  revenue: '⭐⭐⭐⭐⭐',
  risk: '⭐⭐⭐',
  purpose: 'AWS + Stripe + Twilio + Firebase for RTMN',
};

export default function RabtulPage() {
  const [expandedSystem, setExpandedSystem] = useState<string | null>('identity');

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0a1628] via-purple-900/20 to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Link href="/rtmn-group" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-4 text-sm">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to RTMN Group
          </Link>

          <div className="flex items-center gap-4 sm:gap-6 mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-xl shadow-purple-500/30">
              <Database className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-3xl sm:text-4xl font-black text-white">
                  Rabtul <span className="text-purple-400">Technologies</span>
                </h1>
                <span className="bg-red-500/20 text-red-400 text-xs sm:text-sm px-3 py-1 rounded-full font-bold border border-red-500/50">
                  MOST IMPORTANT COMPANY
                </span>
              </div>
              <p className="text-purple-400 text-lg">ربطل • Core OS • Single Source of Truth</p>
            </div>
          </div>

          <p className="text-slate-300 text-lg max-w-3xl mb-8">
            The brain, memory, and law of the entire RTMN ecosystem. Every app depends on Rabtul.
            No sister company can create wallet logic, change rules, or store final balances.
            100% owned by RTMN Holding.
          </p>

          {/* Critical Warning */}
          <div className="bg-red-500/10 border-2 border-red-500 rounded-xl p-4 sm:p-6 mb-8">
            <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> NO SISTER COMPANY CAN:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-900/50 rounded-lg p-4 border border-red-500/30 text-center">
                <XCircle className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <span className="text-white font-bold">Create wallet logic</span>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-red-500/30 text-center">
                <XCircle className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <span className="text-white font-bold">Change rules</span>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-red-500/30 text-center">
                <XCircle className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <span className="text-white font-bold">Store final balances</span>
              </div>
            </div>
          </div>

          {/* Ownership Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
            <div className="bg-purple-500/10 rounded-xl p-4 text-center border border-purple-500/30">
              <div className="text-2xl font-bold text-purple-400">{ownership.rtmnShare}</div>
              <div className="text-xs text-slate-400">RTMN Ownership</div>
            </div>
            <div className="bg-emerald-500/10 rounded-xl p-4 text-center border border-emerald-500/30">
              <div className="text-2xl font-bold text-emerald-400">9</div>
              <div className="text-xs text-slate-400">Core Systems</div>
            </div>
            <div className="bg-blue-500/10 rounded-xl p-4 text-center border border-blue-500/30">
              <div className="text-2xl font-bold text-blue-400">100+</div>
              <div className="text-xs text-slate-400">Apps Connected</div>
            </div>
            <div className="bg-orange-500/10 rounded-xl p-4 text-center border border-orange-500/30">
              <div className="text-2xl font-bold text-orange-400">1M+</div>
              <div className="text-xs text-slate-400">Events/Sec</div>
            </div>
            <div className="bg-[#c9a227]/10 rounded-xl p-4 text-center border border-[#c9a227]/30">
              <div className="text-2xl font-bold text-[#c9a227]">{ownership.revenue}</div>
              <div className="text-xs text-slate-400">Revenue Potential</div>
            </div>
          </div>
        </div>
      </div>

      {/* Connection Diagram */}
      <section className="bg-slate-800/30 border-b border-slate-700/50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8 flex items-center justify-center gap-2">
            <Network className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
            ALL APPS → Rabtul → ALL TRUTH
          </h2>
          <div className="max-w-2xl mx-auto bg-purple-500/10 rounded-xl p-6 border-2 border-purple-500 text-center">
            <p className="text-lg text-white mb-4">Every app in the ecosystem connects to Rabtul for:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Identity', 'Wallet', 'Rules', 'Events', 'Analytics', 'Notifications'].map((item, i) => (
                <span key={i} className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <h2 className="text-xl font-bold text-white mb-6">Core Systems</h2>
        <div className="space-y-4 sm:space-y-6">
          {rabtulSystems.map((system) => (
            <div
              key={system.id}
              className={`${system.bgColor} border-2 rounded-xl overflow-hidden`}
              style={{ borderColor: system.color.includes('blue') ? '#3b82f6' : system.color.includes('emerald') ? '#10b981' : system.color.includes('purple') ? '#a855f7' : system.color.includes('orange') ? '#f97316' : system.color.includes('pink') ? '#ec4899' : system.color.includes('cyan') ? '#06b6d4' : system.color.includes('red') ? '#ef4444' : system.color.includes('indigo') ? '#6366f1' : '#eab308' }}
            >
              <button
                onClick={() => setExpandedSystem(expandedSystem === system.id ? null : system.id)}
                className="w-full p-4 sm:p-6 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${system.bgColor} flex items-center justify-center`}>
                    <system.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${system.color}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className={`text-base sm:text-lg font-bold ${system.color}`}>
                        {system.name}
                      </h3>
                      <span className="text-slate-500 text-xs sm:text-sm">{system.arabic}</span>
                    </div>
                    <p className="text-slate-400 text-xs sm:text-sm line-clamp-1">{system.description}</p>
                  </div>
                </div>
                {expandedSystem === system.id ? (
                  <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>

              {expandedSystem === system.id && (
                <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                  <p className="text-slate-300 mb-4">{system.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                      <h4 className="text-white font-bold mb-3">Features</h4>
                      <ul className="space-y-1">
                        {system.features.map((feature, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                            <CheckCircle className={`w-4 h-4 ${system.color} flex-shrink-0`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                      <h4 className="text-white font-bold mb-3">Metrics</h4>
                      <div className="flex flex-wrap gap-2">
                        {system.metrics.map((metric, i) => (
                          <span key={i} className={`text-sm px-3 py-1 rounded-lg ${system.bgColor} ${system.color} border border-current`}>
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* What Rabtul Does NOT Do */}
        <div className="mt-8 bg-red-500/10 rounded-xl p-6 border-2 border-red-500">
          <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
            <XCircle className="w-5 h-5" /> What Rabtul Does NOT Do
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {doesNotDo.map((item, i) => (
              <div key={i} className="bg-slate-900/50 rounded-lg p-3 border border-red-500/30">
                <span className="text-white font-bold text-sm">{item.item}</span>
                <p className="text-slate-400 text-xs mt-1">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-8 bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Server className="w-5 h-5 text-purple-400" /> Tech Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((stack, i) => (
              <div key={i}>
                <h4 className="text-purple-400 font-bold text-sm mb-2">{stack.category}</h4>
                <div className="flex flex-wrap gap-1">
                  {stack.items.map((item, j) => (
                    <span key={j} className="text-xs bg-slate-900/50 px-2 py-1 rounded text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Navigation */}
      <section className="bg-slate-800/30 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rtmn-group" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors">
              <Network className="w-5 h-5" /> RTMN Group
            </Link>
            <Link href="/bizone" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-400 transition-colors">
              <Store className="w-5 h-5" /> BizOne Merchants
            </Link>
            <Link href="/ai-infrastructure" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-xl font-bold hover:bg-purple-400 transition-colors">
              <Brain className="w-5 h-5" /> AI Infrastructure
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
