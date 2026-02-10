'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft, Shield, Scale, Users, FileText, CheckCircle2,
  AlertTriangle, Lock, Eye, ChevronRight, ArrowRight,
  Briefcase, Building2, Crown, Gavel, BookOpen, Target,
  UserCheck, Clock, DollarSign, Globe, Heart, Zap
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

export default function GroupGovernancePage() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Shield },
    { id: 'board', label: 'Board', icon: Crown },
    { id: 'policies', label: 'Policies', icon: FileText },
    { id: 'shariah', label: 'Shariah', icon: BookOpen },
    { id: 'compliance', label: 'Compliance', icon: Scale },
    { id: 'risk', label: 'Risk Management', icon: AlertTriangle },
    { id: 'ethics', label: 'Ethics', icon: Heart },
  ];

  const governanceFramework = [
    {
      level: 'Board of Directors',
      role: 'Ultimate oversight and strategic direction',
      responsibilities: [
        'Approve major strategic decisions',
        'Oversee CEO and executive performance',
        'Ensure regulatory compliance',
        'Protect shareholder interests',
      ]
    },
    {
      level: 'Board Committees',
      role: 'Specialized oversight functions',
      responsibilities: [
        'Audit Committee: Financial integrity',
        'Risk Committee: Risk management oversight',
        'Compensation Committee: Executive pay',
        'Shariah Committee: Islamic compliance',
      ]
    },
    {
      level: 'Executive Management',
      role: 'Day-to-day operations and execution',
      responsibilities: [
        'Implement board-approved strategy',
        'Manage subsidiaries and products',
        'Ensure operational excellence',
        'Report to board regularly',
      ]
    },
    {
      level: 'Subsidiary Governance',
      role: 'Product-level management',
      responsibilities: [
        'P&L ownership and accountability',
        'Product-specific compliance',
        'Operational management',
        'Report to Group COO/CFO',
      ]
    },
  ];

  const boardCommittees = [
    {
      name: 'Audit Committee',
      chair: 'Independent Director',
      members: 3,
      meetings: 'Quarterly',
      focus: [
        'Financial statement review',
        'Internal controls assessment',
        'External auditor oversight',
        'Fraud prevention',
      ]
    },
    {
      name: 'Risk Committee',
      chair: 'Independent Director',
      members: 3,
      meetings: 'Quarterly',
      focus: [
        'Enterprise risk management',
        'Cybersecurity oversight',
        'Regulatory risk monitoring',
        'Credit risk (for Qist)',
      ]
    },
    {
      name: 'Compensation Committee',
      chair: 'Chairman',
      members: 3,
      meetings: 'Bi-annual',
      focus: [
        'Executive compensation design',
        'Equity incentive programs',
        'Performance evaluation',
        'Succession planning',
      ]
    },
    {
      name: 'Shariah Supervisory Board',
      chair: 'Lead Shariah Scholar',
      members: 3,
      meetings: 'Monthly',
      focus: [
        'Product Shariah compliance',
        'Fatwa issuance',
        'Transaction review',
        'Annual Shariah audit',
      ]
    },
    {
      name: 'Nomination Committee',
      chair: 'Chairman',
      members: 3,
      meetings: 'Annual',
      focus: [
        'Board composition review',
        'Director nominations',
        'Board effectiveness',
        'Diversity considerations',
      ]
    },
  ];

  const keyPolicies = [
    {
      category: 'Corporate Governance',
      policies: [
        { name: 'Board Charter', desc: 'Defines board structure, roles, and responsibilities' },
        { name: 'Related Party Transactions', desc: 'Guidelines for conflicts of interest' },
        { name: 'Insider Trading Policy', desc: 'Prevents misuse of material non-public information' },
        { name: 'Disclosure Policy', desc: 'Ensures timely and accurate information disclosure' },
      ]
    },
    {
      category: 'Financial Controls',
      policies: [
        { name: 'Financial Reporting', desc: 'Standards for accurate financial statements' },
        { name: 'Internal Controls', desc: 'Framework for operational and financial controls' },
        { name: 'Treasury Policy', desc: 'Cash management and investment guidelines' },
        { name: 'Expense Management', desc: 'Approval thresholds and spending controls' },
      ]
    },
    {
      category: 'Risk & Compliance',
      policies: [
        { name: 'AML/CFT Policy', desc: 'Anti-money laundering and counter-terrorism financing' },
        { name: 'KYC Policy', desc: 'Know Your Customer verification standards' },
        { name: 'Data Privacy Policy', desc: 'GDPR/PDPL compliant data handling' },
        { name: 'Cybersecurity Policy', desc: 'Information security standards' },
      ]
    },
    {
      category: 'Human Resources',
      policies: [
        { name: 'Code of Conduct', desc: 'Ethical standards for all employees' },
        { name: 'Whistleblower Policy', desc: 'Protection for reporting misconduct' },
        { name: 'Diversity & Inclusion', desc: 'Commitment to diverse workforce' },
        { name: 'Anti-Harassment', desc: 'Zero tolerance for workplace harassment' },
      ]
    },
  ];

  const shariahFramework = {
    principles: [
      { principle: 'Riba-Free', desc: 'No interest-based transactions across all products' },
      { principle: 'Gharar-Free', desc: 'No excessive uncertainty or speculation' },
      { principle: 'Halal Only', desc: 'Products and services must be permissible' },
      { principle: 'Fair Dealing', desc: 'Transparent and equitable transactions' },
    ],
    products: [
      { product: 'Qist (BNPL)', model: 'Murabaha (cost-plus financing)' },
      { product: 'Hawil (Remittance)', model: 'Wakalah (agency)' },
      { product: 'Sakin (Real Estate)', model: 'Ijarah (leasing)' },
      { product: 'Nuqta+ Savings', model: 'Mudarabah (profit-sharing)' },
    ],
    audits: [
      'Annual Shariah audit by independent scholars',
      'Quarterly product compliance reviews',
      'Transaction sampling and verification',
      'Shariah non-compliance incident reporting',
    ]
  };

  const complianceFramework = [
    {
      regulator: 'CBUAE',
      license: 'Payment Service Provider',
      products: ['Nuqta', 'Qist', 'Hawil'],
      requirements: ['Capital adequacy', 'AML/CFT', 'Consumer protection', 'Reporting']
    },
    {
      regulator: 'ADGM',
      license: 'Financial Services',
      products: ['Group Holding'],
      requirements: ['Corporate governance', 'Risk management', 'Disclosure']
    },
    {
      regulator: 'RTA',
      license: 'Transport Network Company',
      products: ['Rakab'],
      requirements: ['Driver vetting', 'Vehicle standards', 'Insurance', 'Pricing']
    },
    {
      regulator: 'RERA',
      license: 'Real Estate Broker',
      products: ['Sakin'],
      requirements: ['Agent licensing', 'Escrow accounts', 'Advertising standards']
    },
    {
      regulator: 'DTCM',
      license: 'Travel Agency',
      products: ['Safar'],
      requirements: ['Bonding', 'Consumer protection', 'Advertising']
    },
  ];

  const riskCategories = [
    {
      category: 'Strategic Risk',
      risks: ['Market competition', 'Technology disruption', 'Regulatory changes'],
      mitigation: 'Diversified product portfolio, agile strategy, regulatory engagement'
    },
    {
      category: 'Operational Risk',
      risks: ['System failures', 'Fraud', 'Human error', 'Third-party failures'],
      mitigation: 'Robust IT infrastructure, fraud detection, internal controls, vendor management'
    },
    {
      category: 'Financial Risk',
      risks: ['Credit risk (Qist)', 'Liquidity risk', 'Foreign exchange'],
      mitigation: 'Credit scoring, capital buffers, hedging strategies'
    },
    {
      category: 'Compliance Risk',
      risks: ['Regulatory sanctions', 'License revocation', 'Reputational damage'],
      mitigation: 'Compliance function, regular audits, training programs'
    },
    {
      category: 'Cyber Risk',
      risks: ['Data breaches', 'Ransomware', 'DDoS attacks'],
      mitigation: 'ISO 27001 certification, penetration testing, incident response plan'
    },
    {
      category: 'Shariah Risk',
      risks: ['Non-compliant products', 'Customer trust erosion'],
      mitigation: 'Shariah board oversight, regular audits, transaction monitoring'
    },
  ];

  const ethicsCode = [
    {
      principle: 'Integrity',
      behaviors: [
        'Be honest and transparent in all dealings',
        'Keep promises and commitments',
        'Admit mistakes and learn from them',
      ]
    },
    {
      principle: 'Respect',
      behaviors: [
        'Treat everyone with dignity and fairness',
        'Value diverse perspectives',
        'Maintain professional boundaries',
      ]
    },
    {
      principle: 'Accountability',
      behaviors: [
        'Take ownership of your actions',
        'Meet deadlines and deliverables',
        'Speak up when something is wrong',
      ]
    },
    {
      principle: 'Excellence',
      behaviors: [
        'Strive for the highest quality',
        'Continuously improve and learn',
        'Set ambitious but achievable goals',
      ]
    },
    {
      principle: 'Stewardship',
      behaviors: [
        'Protect company assets and reputation',
        'Use resources responsibly',
        'Consider long-term impact of decisions',
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/group-launch-strategy" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Back to Launch Strategy</span>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold">Governance</h1>
                <p className="text-xs text-white/60">Rules & Policies</p>
              </div>
            </div>
            <Link href="/investor-outreach" className="text-sm text-[#c9a227] hover:text-[#e8c547] transition-colors flex items-center gap-1">
              <span className="hidden sm:inline">Investors</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-[#c9a227]/20" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-[#c9a227] bg-clip-text text-transparent">
                Trust Through
              </span>
              <br />
              <span className="text-white">Strong Governance</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              World-class corporate governance, Shariah compliance, and risk management
              frameworks ensuring trust and transparency at every level.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { label: 'Board Committees', value: '5' },
                { label: 'Key Policies', value: '16+' },
                { label: 'Regulators', value: '5+' },
                { label: 'Shariah Certified', value: '100%' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-xl sm:text-2xl font-bold text-blue-400">{stat.value}</p>
                  <p className="text-sm text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="border-b border-white/10 sticky top-[73px] bg-black/90 backdrop-blur-xl z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 sm:gap-2 overflow-x-auto py-2 scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-blue-500 text-white'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Governance Framework</h2>
              <p className="text-white/70">A robust four-tier governance structure ensuring
              accountability, transparency, and compliance at every level.</p>
            </div>

            <div className="space-y-4">
              {governanceFramework.map((level, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-blue-500/50 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex items-center gap-4 sm:w-1/3">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                        <span className="text-lg font-bold text-blue-400">{i + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-bold">{level.level}</h4>
                        <p className="text-sm text-white/60">{level.role}</p>
                      </div>
                    </div>
                    <div className="sm:w-2/3">
                      <div className="grid sm:grid-cols-2 gap-2">
                        {level.responsibilities.map((resp, j) => (
                          <div key={j} className="flex items-start gap-2 text-sm text-white/80">
                            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                            {resp}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-[#c9a227]/20 rounded-2xl p-6 border border-blue-500/30">
              <h3 className="text-lg font-bold mb-4">Governance Principles</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { principle: 'Transparency', desc: 'Clear and timely disclosure' },
                  { principle: 'Accountability', desc: 'Clear ownership at every level' },
                  { principle: 'Independence', desc: 'Objective oversight and review' },
                  { principle: 'Integrity', desc: 'Ethical conduct in all dealings' },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-xl text-center">
                    <p className="font-bold text-blue-400">{item.principle}</p>
                    <p className="text-sm text-white/60 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Board Tab */}
        {activeTab === 'board' && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Board Committees</h2>
              <p className="text-white/70">Specialized committees providing focused oversight
              across key governance areas.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {boardCommittees.map((committee, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-blue-500/50 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#c9a227]/20 flex items-center justify-center">
                      <Gavel className="w-5 h-5 text-[#c9a227]" />
                    </div>
                    <h4 className="font-bold">{committee.name}</h4>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/50">Chair</span>
                      <span>{committee.chair}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/50">Members</span>
                      <span>{committee.members}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/50">Meetings</span>
                      <span className="text-blue-400">{committee.meetings}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs text-white/50 mb-2">Focus Areas</p>
                    <ul className="space-y-1">
                      {committee.focus.map((item, j) => (
                        <li key={j} className="text-xs text-white/70 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-blue-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-bold mb-4">Board Meeting Cadence</h3>
              <div className="grid sm:grid-cols-4 gap-4">
                {[
                  { type: 'Full Board', frequency: 'Quarterly', duration: 'Full day' },
                  { type: 'Strategy Session', frequency: 'Annual', duration: '2 days' },
                  { type: 'Committee Meetings', frequency: 'As per charter', duration: '2-3 hours' },
                  { type: 'Emergency Meetings', frequency: 'As needed', duration: 'Ad-hoc' },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-xl text-center">
                    <p className="font-semibold text-[#c9a227]">{item.type}</p>
                    <p className="text-sm text-white/80 mt-1">{item.frequency}</p>
                    <p className="text-xs text-white/50">{item.duration}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Policies Tab */}
        {activeTab === 'policies' && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Key Policies</h2>
              <p className="text-white/70">Comprehensive policies governing all aspects
              of our operations and conduct.</p>
            </div>

            <div className="space-y-6">
              {keyPolicies.map((category, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-5 sm:p-6 border border-white/10">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#c9a227]" />
                    {category.category}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {category.policies.map((policy, j) => (
                      <div key={j} className="p-4 bg-white/5 rounded-xl">
                        <p className="font-semibold text-blue-400">{policy.name}</p>
                        <p className="text-sm text-white/60 mt-1">{policy.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Shariah Tab */}
        {activeTab === 'shariah' && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Shariah Governance</h2>
              <p className="text-white/70">100% Shariah-compliant operations overseen by
              qualified Islamic scholars.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#c9a227]/20 to-transparent rounded-2xl p-6 border border-[#c9a227]/30">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#c9a227]" />
                  Core Principles
                </h3>
                <div className="space-y-4">
                  {shariahFramework.principles.map((item, i) => (
                    <div key={i} className="p-4 bg-white/5 rounded-xl">
                      <p className="font-semibold text-[#c9a227]">{item.principle}</p>
                      <p className="text-sm text-white/70 mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl p-6 border border-blue-500/30">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-blue-400" />
                  Product Structures
                </h3>
                <div className="space-y-4">
                  {shariahFramework.products.map((item, i) => (
                    <div key={i} className="p-4 bg-white/5 rounded-xl">
                      <p className="font-semibold">{item.product}</p>
                      <p className="text-sm text-blue-400 mt-1">{item.model}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-bold mb-4">Shariah Audit Process</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {shariahFramework.audits.map((audit, i) => (
                  <div key={i} className="flex items-start gap-2 p-4 bg-white/5 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-[#c9a227] shrink-0" />
                    <p className="text-sm text-white/80">{audit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Compliance Tab */}
        {activeTab === 'compliance' && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Regulatory Compliance</h2>
              <p className="text-white/70">Multi-regulator compliance framework across
              5+ regulatory bodies.</p>
            </div>

            <div className="space-y-4">
              {complianceFramework.map((reg, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-blue-500/50 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="sm:w-1/4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                          <Building2 className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <p className="font-bold">{reg.regulator}</p>
                          <p className="text-sm text-blue-400">{reg.license}</p>
                        </div>
                      </div>
                    </div>
                    <div className="sm:w-1/4">
                      <p className="text-xs text-white/50 mb-2">Products</p>
                      <div className="flex flex-wrap gap-1">
                        {reg.products.map((product, j) => (
                          <span key={j} className="px-2 py-0.5 bg-[#c9a227]/20 rounded text-xs text-[#c9a227]">{product}</span>
                        ))}
                      </div>
                    </div>
                    <div className="sm:w-1/2">
                      <p className="text-xs text-white/50 mb-2">Key Requirements</p>
                      <div className="flex flex-wrap gap-2">
                        {reg.requirements.map((req, j) => (
                          <span key={j} className="px-2 py-1 bg-white/5 rounded text-xs">{req}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-[#c9a227]/20 rounded-2xl p-6 border border-blue-500/30">
              <h3 className="text-lg font-bold mb-4">Compliance Team</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { role: 'Chief Compliance Officer', scope: 'Group-wide oversight' },
                  { role: 'AML Officer', scope: 'Financial crime prevention' },
                  { role: 'Data Protection Officer', scope: 'Privacy compliance' },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-xl text-center">
                    <p className="font-semibold text-blue-400">{item.role}</p>
                    <p className="text-sm text-white/60 mt-1">{item.scope}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Risk Management Tab */}
        {activeTab === 'risk' && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Risk Management</h2>
              <p className="text-white/70">Enterprise-wide risk framework identifying,
              assessing, and mitigating key risks.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {riskCategories.map((category, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-orange-500/50 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-orange-400" />
                    </div>
                    <h4 className="font-bold">{category.category}</h4>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-white/50 mb-1.5">Key Risks</p>
                      <div className="flex flex-wrap gap-1">
                        {category.risks.map((risk, j) => (
                          <span key={j} className="px-2 py-0.5 bg-orange-500/20 rounded text-xs text-orange-300">{risk}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-white/50 mb-1.5">Mitigation</p>
                      <p className="text-sm text-white/70">{category.mitigation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-bold mb-4">Risk Appetite Statement</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { risk: 'Credit Risk', appetite: 'Moderate', limit: 'NPL < 3%' },
                  { risk: 'Liquidity Risk', appetite: 'Low', limit: 'LCR > 150%' },
                  { risk: 'Operational Risk', appetite: 'Low', limit: 'Zero tolerance for fraud' },
                  { risk: 'Compliance Risk', appetite: 'Very Low', limit: 'Zero regulatory breaches' },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-xl text-center">
                    <p className="font-semibold text-orange-400">{item.risk}</p>
                    <p className="text-sm text-white/80 mt-1">{item.appetite}</p>
                    <p className="text-xs text-white/50">{item.limit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Ethics Tab */}
        {activeTab === 'ethics' && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Code of Ethics</h2>
              <p className="text-white/70">The principles and behaviors that guide how
              we work and treat each other.</p>
            </div>

            <div className="grid gap-4">
              {ethicsCode.map((item, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-[#c9a227]/50 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex items-center gap-4 sm:w-1/4">
                      <div className="w-12 h-12 rounded-xl bg-[#c9a227]/20 flex items-center justify-center">
                        <Heart className="w-6 h-6 text-[#c9a227]" />
                      </div>
                      <h4 className="font-bold text-lg">{item.principle}</h4>
                    </div>
                    <div className="sm:w-3/4">
                      <ul className="space-y-2">
                        {item.behaviors.map((behavior, j) => (
                          <li key={j} className="flex items-start gap-2 text-white/80">
                            <CheckCircle2 className="w-5 h-5 text-[#c9a227] shrink-0 mt-0.5" />
                            {behavior}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-[#c9a227]/20 to-blue-500/20 rounded-2xl p-6 border border-[#c9a227]/30">
              <h3 className="text-lg font-bold mb-4">Whistleblower Protection</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { feature: 'Anonymous Reporting', desc: 'Secure channel for reporting concerns' },
                  { feature: 'No Retaliation', desc: 'Protected from any adverse action' },
                  { feature: 'Independent Review', desc: 'Investigated by Audit Committee' },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-xl">
                    <p className="font-semibold text-[#c9a227]">{item.feature}</p>
                    <p className="text-sm text-white/60 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Navigation */}
      <section className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/group-launch-strategy" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Launch Strategy</span>
            </Link>
            <Link href="/investor-outreach" className="flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-black rounded-xl font-semibold hover:bg-[#e8c547] transition-colors">
              <span>Investors</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
