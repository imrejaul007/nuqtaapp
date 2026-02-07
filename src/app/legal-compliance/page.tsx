'use client';

import React, { useState } from 'react';
import {
  Scale,
  FileCheck,
  Shield,
  Building2,
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign,
  Users,
  FileText,
  Globe,
  Lock,
  CreditCard,
  Landmark,
  Award,
  ArrowRight,
  Calendar,
  Target,
  ChevronDown,
  ChevronRight,
  Briefcase,
  BookOpen,
  AlertCircle,
  Zap
} from 'lucide-react';

/**
 * LEGAL & COMPLIANCE PAGE
 *
 * Comprehensive legal framework for Nuqta under CFO oversight
 * All licenses, regulatory requirements, and compliance steps
 *
 * CFO is responsible for: Legal, Finance, Compliance, Risk Management
 */

// License Requirements Data
const licenses = [
  {
    id: 'trade-license',
    name: 'Dubai Trade License (DED)',
    category: 'Business Registration',
    authority: 'Department of Economy & Tourism (DET)',
    status: 'required',
    priority: 'critical',
    timeline: '3-5 business days',
    cost: 'AED 12,900 - 15,000',
    description: 'Primary business license to operate in Dubai mainland. Required for all commercial activities.',
    requirements: [
      'Valid Emirates ID for all partners/managers',
      'Passport copies for all shareholders',
      'Detailed business plan',
      'Memorandum of Association (MOA)',
      'Initial Approval Certificate',
      'Ejari (tenancy contract) for office space',
      'Bank statements showing sufficient funds'
    ],
    steps: [
      { step: 1, action: 'Choose trade name and get initial approval', duration: '1 day' },
      { step: 2, action: 'Prepare MOA and company documents', duration: '2-3 days' },
      { step: 3, action: 'Secure office space and Ejari', duration: '1-2 weeks' },
      { step: 4, action: 'Submit application to DET', duration: '1 day' },
      { step: 5, action: 'Pay fees and receive license', duration: '1-2 days' }
    ],
    nuqtaStatus: 'in_progress',
    notes: 'Nuqta Technology L.L.C. - E-commerce and technology services'
  },
  {
    id: 'ecommerce-license',
    name: 'E-Commerce License',
    category: 'Digital Operations',
    authority: 'DET + TDRA',
    status: 'required',
    priority: 'critical',
    timeline: '5-7 business days',
    cost: 'Included in Trade License + AED 2,000 TDRA NOC',
    description: 'Required for operating online platforms, mobile apps, and digital marketplaces.',
    requirements: [
      'Active Dubai Trade License',
      'TDRA No Objection Certificate (NOC)',
      'Website/App details and URLs',
      'Payment gateway integration plans',
      'Data protection compliance documentation',
      'Terms of service and privacy policy'
    ],
    steps: [
      { step: 1, action: 'Obtain Trade License first', duration: 'Prerequisite' },
      { step: 2, action: 'Apply for TDRA NOC online', duration: '2-3 days' },
      { step: 3, action: 'Submit e-commerce activity application', duration: '1 day' },
      { step: 4, action: 'Technical review of platform', duration: '2-3 days' },
      { step: 5, action: 'Receive e-commerce endorsement', duration: '1 day' }
    ],
    nuqtaStatus: 'pending',
    notes: 'Federal Decree-Law No. 14 of 2023 governs e-commerce in UAE'
  },
  {
    id: 'loyalty-program',
    name: 'Loyalty Program Registration',
    category: 'Consumer Protection',
    authority: 'DET Consumer Protection',
    status: 'recommended',
    priority: 'high',
    timeline: '7-14 business days',
    cost: 'AED 5,000 - 10,000',
    description: 'Registration for consumer loyalty and rewards programs. Required for points-based systems.',
    requirements: [
      'Program terms and conditions',
      'Points earning and redemption rules',
      'Consumer protection disclosures',
      'Data handling procedures',
      'Expiry and forfeiture policies',
      'Partner merchant agreements'
    ],
    steps: [
      { step: 1, action: 'Draft loyalty program T&Cs', duration: '1 week' },
      { step: 2, action: 'Legal review of consumer disclosures', duration: '3-5 days' },
      { step: 3, action: 'Submit registration application', duration: '1 day' },
      { step: 4, action: 'DET review and approval', duration: '1-2 weeks' },
      { step: 5, action: 'Publish approved terms', duration: '1 day' }
    ],
    nuqtaStatus: 'pending',
    notes: 'UAE Loyalty Programs Market: $817.6M by 2029'
  },
  {
    id: 'payment-facilitator',
    name: 'Payment Facilitator License',
    category: 'Financial Services',
    authority: 'CBUAE (Central Bank of UAE)',
    status: 'conditional',
    priority: 'high',
    timeline: '3-6 months',
    cost: 'AED 2M - 10M capital + AED 100,000 application',
    description: 'Required if Nuqta processes payments directly. Can be avoided by using licensed PSP partners.',
    requirements: [
      'Minimum paid-up capital (AED 2M-10M)',
      'AML/CFT compliance framework',
      'IT security and data protection',
      'Risk management policies',
      'Business continuity plan',
      'Qualified compliance officer',
      'External audit reports'
    ],
    steps: [
      { step: 1, action: 'Engage CBUAE-approved consultant', duration: '1-2 weeks' },
      { step: 2, action: 'Prepare compliance documentation', duration: '2-3 months' },
      { step: 3, action: 'Submit license application', duration: '1 week' },
      { step: 4, action: 'CBUAE review and due diligence', duration: '2-3 months' },
      { step: 5, action: 'Approval and operational launch', duration: '1 month' }
    ],
    nuqtaStatus: 'not_required',
    notes: 'Nuqta uses licensed PSP partners (Stripe, Checkout.com) - no direct payment processing license needed initially'
  },
  {
    id: 'data-protection',
    name: 'PDPL Compliance',
    category: 'Data Privacy',
    authority: 'UAE Data Office',
    status: 'required',
    priority: 'critical',
    timeline: 'Ongoing',
    cost: 'AED 50,000 - 100,000 (implementation)',
    description: 'Personal Data Protection Law (PDPL) compliance. Mandatory for all businesses handling customer data.',
    requirements: [
      'Data Protection Officer (DPO) appointment',
      'Privacy policy and notices',
      'Consent management system',
      'Data processing records',
      'Data breach notification procedures',
      'Cross-border transfer safeguards',
      'Data subject rights procedures'
    ],
    steps: [
      { step: 1, action: 'Conduct data audit and mapping', duration: '2-3 weeks' },
      { step: 2, action: 'Appoint Data Protection Officer', duration: '1 week' },
      { step: 3, action: 'Implement privacy policies', duration: '2-3 weeks' },
      { step: 4, action: 'Set up consent management', duration: '1-2 weeks' },
      { step: 5, action: 'Staff training and documentation', duration: 'Ongoing' }
    ],
    nuqtaStatus: 'in_progress',
    notes: 'Non-compliance fines: up to AED 500,000'
  },
  {
    id: 'vat-registration',
    name: 'VAT Registration',
    category: 'Taxation',
    authority: 'Federal Tax Authority (FTA)',
    status: 'required',
    priority: 'critical',
    timeline: '5-10 business days',
    cost: 'Free registration',
    description: 'Mandatory VAT registration for businesses with turnover exceeding AED 375,000.',
    requirements: [
      'Trade License copy',
      'Emirates ID of authorized signatory',
      'Bank account details',
      'Expected turnover projections',
      'Business activities description',
      'Accounting system setup'
    ],
    steps: [
      { step: 1, action: 'Set up FTA e-Services account', duration: '1 day' },
      { step: 2, action: 'Prepare required documents', duration: '1-2 days' },
      { step: 3, action: 'Submit VAT registration online', duration: '1 day' },
      { step: 4, action: 'FTA review and verification', duration: '3-5 days' },
      { step: 5, action: 'Receive TRN and start filing', duration: '1 day' }
    ],
    nuqtaStatus: 'pending',
    notes: 'VAT rate: 5%. Quarterly filing required.'
  },
  {
    id: 'aml-compliance',
    name: 'AML/CFT Compliance',
    category: 'Financial Crime',
    authority: 'CBUAE + Financial Intelligence Unit',
    status: 'required',
    priority: 'critical',
    timeline: 'Ongoing',
    cost: 'AED 30,000 - 50,000 (implementation)',
    description: 'Anti-Money Laundering and Counter-Terrorism Financing compliance program.',
    requirements: [
      'AML/CFT policy and procedures',
      'Customer Due Diligence (CDD) framework',
      'Enhanced Due Diligence for high-risk',
      'Transaction monitoring system',
      'Suspicious Activity Reporting (SAR)',
      'Sanctions screening',
      'Staff training program'
    ],
    steps: [
      { step: 1, action: 'Develop AML/CFT policies', duration: '2-3 weeks' },
      { step: 2, action: 'Implement KYC/CDD procedures', duration: '2-3 weeks' },
      { step: 3, action: 'Set up transaction monitoring', duration: '2-4 weeks' },
      { step: 4, action: 'Train staff and compliance team', duration: '1 week' },
      { step: 5, action: 'Regular audits and updates', duration: 'Ongoing' }
    ],
    nuqtaStatus: 'in_progress',
    notes: 'Penalties for non-compliance: AED 50,000 - 500,000,000'
  },
  {
    id: 'trademark',
    name: 'Trademark Registration',
    category: 'Intellectual Property',
    authority: 'Ministry of Economy',
    status: 'recommended',
    priority: 'medium',
    timeline: '6-12 months',
    cost: 'AED 6,000 - 10,000 per class',
    description: 'Protection of Nuqta brand, logo, and related intellectual property.',
    requirements: [
      'Trade License copy',
      'Logo in high resolution',
      'List of goods/services (Nice Classification)',
      'Power of Attorney (if using agent)',
      'Priority claim documents (if applicable)'
    ],
    steps: [
      { step: 1, action: 'Conduct trademark search', duration: '1-2 weeks' },
      { step: 2, action: 'File trademark application', duration: '1 day' },
      { step: 3, action: 'Examination by Ministry', duration: '2-3 months' },
      { step: 4, action: 'Publication period (objections)', duration: '30 days' },
      { step: 5, action: 'Registration certificate issued', duration: '1-2 months' }
    ],
    nuqtaStatus: 'pending',
    notes: 'File in Classes 9 (software), 35 (advertising/loyalty), 36 (financial services)'
  }
];

// Compliance Timeline
const complianceTimeline = [
  {
    phase: 'Phase 1: Foundation',
    target: 'February 2026',
    status: 'in_progress',
    items: [
      { task: 'Dubai Trade License (DET)', status: 'in_progress', owner: 'CFO' },
      { task: 'Company bank account opening', status: 'in_progress', owner: 'CFO' },
      { task: 'Office lease (Ejari)', status: 'completed', owner: 'COO' },
      { task: 'Employee visa processing', status: 'in_progress', owner: 'CHRO' }
    ]
  },
  {
    phase: 'Phase 2: Digital Operations',
    target: 'February 2026',
    status: 'pending',
    items: [
      { task: 'E-Commerce License (TDRA NOC)', status: 'pending', owner: 'CFO' },
      { task: 'Privacy Policy & Terms of Service', status: 'in_progress', owner: 'Legal' },
      { task: 'PDPL compliance implementation', status: 'in_progress', owner: 'CTO' },
      { task: 'Payment gateway integration (Stripe)', status: 'completed', owner: 'CTO' }
    ]
  },
  {
    phase: 'Phase 3: Financial Compliance',
    target: 'March 2026',
    status: 'pending',
    items: [
      { task: 'VAT registration (FTA)', status: 'pending', owner: 'CFO' },
      { task: 'AML/CFT framework setup', status: 'in_progress', owner: 'CFO' },
      { task: 'Accounting system (Xero/QuickBooks)', status: 'pending', owner: 'CFO' },
      { task: 'External auditor engagement', status: 'pending', owner: 'CFO' }
    ]
  },
  {
    phase: 'Phase 4: Launch Readiness',
    target: 'March 1, 2026',
    status: 'pending',
    items: [
      { task: 'Loyalty program T&Cs finalized', status: 'pending', owner: 'Legal' },
      { task: 'Consumer protection disclosures', status: 'pending', owner: 'CMO' },
      { task: 'Merchant agreements standardized', status: 'in_progress', owner: 'COO' },
      { task: 'Insurance policies in place', status: 'pending', owner: 'CFO' }
    ]
  },
  {
    phase: 'Phase 5: Post-Launch',
    target: 'Q2 2026',
    status: 'pending',
    items: [
      { task: 'Trademark registration filing', status: 'pending', owner: 'CFO' },
      { task: 'First VAT filing', status: 'pending', owner: 'CFO' },
      { task: 'Quarterly compliance audit', status: 'pending', owner: 'CFO' },
      { task: 'CBUAE sandbox application (if needed)', status: 'pending', owner: 'CFO' }
    ]
  }
];

// Regulatory Bodies
const regulatoryBodies = [
  {
    name: 'Department of Economy & Tourism (DET)',
    role: 'Business licensing and trade permits',
    relevance: 'Trade License, E-Commerce License',
    contact: 'www.dubaidet.gov.ae',
    icon: Building2
  },
  {
    name: 'Central Bank of UAE (CBUAE)',
    role: 'Financial services regulation, payment systems',
    relevance: 'Payment facilitation, AML compliance',
    contact: 'www.centralbank.ae',
    icon: Landmark
  },
  {
    name: 'TDRA',
    role: 'Telecom and digital services regulation',
    relevance: 'E-Commerce NOC, app store compliance',
    contact: 'www.tdra.gov.ae',
    icon: Globe
  },
  {
    name: 'Federal Tax Authority (FTA)',
    role: 'VAT and corporate tax administration',
    relevance: 'VAT registration, tax compliance',
    contact: 'www.tax.gov.ae',
    icon: DollarSign
  },
  {
    name: 'UAE Data Office',
    role: 'Personal data protection oversight',
    relevance: 'PDPL compliance, data handling',
    contact: 'UAE Data Office',
    icon: Lock
  },
  {
    name: 'Ministry of Economy',
    role: 'Intellectual property, consumer protection',
    relevance: 'Trademark, consumer rights',
    contact: 'www.moec.gov.ae',
    icon: Shield
  }
];

// Legal Documents Checklist
const legalDocuments = [
  { name: 'Memorandum of Association (MOA)', status: 'completed', owner: 'CFO' },
  { name: 'Shareholder Agreement', status: 'completed', owner: 'CFO' },
  { name: 'SAFE Agreements (Investors)', status: 'ready', owner: 'CFO' },
  { name: 'Employment Contracts', status: 'completed', owner: 'CHRO' },
  { name: 'ESOP Documentation', status: 'completed', owner: 'CFO' },
  { name: 'Terms of Service (Users)', status: 'in_progress', owner: 'Legal' },
  { name: 'Privacy Policy', status: 'in_progress', owner: 'Legal' },
  { name: 'Merchant Partner Agreement', status: 'in_progress', owner: 'COO' },
  { name: 'NDA Template', status: 'completed', owner: 'Legal' },
  { name: 'IP Assignment Agreements', status: 'completed', owner: 'CTO' },
  { name: 'Data Processing Agreement', status: 'pending', owner: 'Legal' },
  { name: 'Cookie Policy', status: 'pending', owner: 'Legal' }
];

// Risk Register
const legalRisks = [
  {
    risk: 'Operating without proper E-Commerce license',
    severity: 'critical',
    likelihood: 'low',
    mitigation: 'TDRA NOC application in progress, using licensed partners',
    owner: 'CFO'
  },
  {
    risk: 'PDPL non-compliance (data breach)',
    severity: 'high',
    likelihood: 'medium',
    mitigation: 'Implementing data protection framework, DPO appointment planned',
    owner: 'CTO'
  },
  {
    risk: 'AML/CFT violations',
    severity: 'critical',
    likelihood: 'low',
    mitigation: 'Using licensed PSP with built-in compliance, KYC procedures in place',
    owner: 'CFO'
  },
  {
    risk: 'Consumer protection complaints',
    severity: 'medium',
    likelihood: 'medium',
    mitigation: 'Clear T&Cs, transparent points policy, responsive support team',
    owner: 'CMO'
  },
  {
    risk: 'Trademark infringement claims',
    severity: 'medium',
    likelihood: 'low',
    mitigation: 'Trademark search completed, registration pending',
    owner: 'CFO'
  }
];

// Estimated Costs
const legalCosts = {
  immediate: [
    { item: 'Trade License (DET)', cost: 15000, currency: 'AED' },
    { item: 'E-Commerce endorsement + TDRA', cost: 3000, currency: 'AED' },
    { item: 'Office setup (Ejari deposit)', cost: 25000, currency: 'AED' },
    { item: 'Legal counsel retainer (6 months)', cost: 30000, currency: 'AED' },
    { item: 'Compliance consultant', cost: 20000, currency: 'AED' }
  ],
  quarterly: [
    { item: 'External audit fees', cost: 15000, currency: 'AED' },
    { item: 'Legal advisory', cost: 10000, currency: 'AED' },
    { item: 'Compliance monitoring tools', cost: 5000, currency: 'AED' }
  ],
  annual: [
    { item: 'Trade License renewal', cost: 12000, currency: 'AED' },
    { item: 'Insurance (liability, D&O)', cost: 25000, currency: 'AED' },
    { item: 'Trademark maintenance', cost: 3000, currency: 'AED' }
  ]
};

// Component
const LegalCompliancePage = () => {
  const [activeTab, setActiveTab] = useState<'licenses' | 'timeline' | 'documents' | 'risks' | 'costs'>('licenses');
  const [expandedLicense, setExpandedLicense] = useState<string | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'in_progress': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'not_required': return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
      case 'ready': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'text-red-400';
      case 'high': return 'text-orange-400';
      case 'medium': return 'text-yellow-400';
      default: return 'text-slate-400';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Scale className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Legal & Compliance</h1>
              <p className="text-emerald-100 text-sm sm:text-lg mt-1">Under CFO Oversight • Nuqta Technology L.L.C.</p>
            </div>
          </div>
          <p className="text-emerald-100 max-w-3xl text-sm sm:text-base">
            Comprehensive legal framework covering all licenses, regulatory requirements, and compliance
            steps needed to operate Nuqta in the UAE. All legal matters report to the CFO.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
            {[
              { label: 'Total Licenses', value: licenses.length, icon: FileCheck },
              { label: 'In Progress', value: licenses.filter(l => l.nuqtaStatus === 'in_progress').length, icon: Clock },
              { label: 'Completed', value: licenses.filter(l => l.nuqtaStatus === 'completed').length + 1, icon: CheckCircle },
              { label: 'Regulators', value: regulatoryBodies.length, icon: Landmark }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur rounded-lg p-3 sm:p-4">
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-200 mb-2" />
                <p className="text-2xl sm:text-3xl font-black text-white">{stat.value}</p>
                <p className="text-xs sm:text-sm text-emerald-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            {[
              { id: 'licenses', label: 'Licenses', icon: FileCheck },
              { id: 'timeline', label: 'Timeline', icon: Calendar },
              { id: 'documents', label: 'Documents', icon: FileText },
              { id: 'risks', label: 'Risks', icon: AlertTriangle },
              { id: 'costs', label: 'Costs', icon: DollarSign }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-emerald-500 text-emerald-400'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
        {/* Licenses Tab */}
        {activeTab === 'licenses' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Required Licenses & Registrations</h2>
              <div className="text-sm text-slate-400">
                Total est. cost: <span className="text-emerald-400 font-bold">AED 93,000+</span>
              </div>
            </div>

            {licenses.map((license) => (
              <div
                key={license.id}
                className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedLicense(expandedLicense === license.id ? null : license.id)}
                  className="w-full p-4 sm:p-6 flex items-start justify-between text-left"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-white">{license.name}</h3>
                      <span className={`px-2 py-0.5 rounded text-xs font-medium border ${getStatusColor(license.nuqtaStatus)}`}>
                        {license.nuqtaStatus.replace('_', ' ').toUpperCase()}
                      </span>
                      <span className={`text-xs font-bold ${getPriorityColor(license.priority)}`}>
                        {license.priority.toUpperCase()} PRIORITY
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm mb-2">{license.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="text-slate-500">
                        <Building2 className="w-4 h-4 inline mr-1" />
                        {license.authority}
                      </span>
                      <span className="text-slate-500">
                        <Clock className="w-4 h-4 inline mr-1" />
                        {license.timeline}
                      </span>
                      <span className="text-emerald-400 font-medium">
                        <DollarSign className="w-4 h-4 inline mr-1" />
                        {license.cost}
                      </span>
                    </div>
                  </div>
                  {expandedLicense === license.id ? (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                {expandedLicense === license.id && (
                  <div className="px-4 sm:px-6 pb-6 border-t border-slate-700 pt-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Requirements */}
                      <div>
                        <h4 className="text-emerald-400 font-bold mb-3 flex items-center gap-2">
                          <FileCheck className="w-4 h-4" />
                          Requirements
                        </h4>
                        <ul className="space-y-2">
                          {license.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                              <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Steps */}
                      <div>
                        <h4 className="text-emerald-400 font-bold mb-3 flex items-center gap-2">
                          <ArrowRight className="w-4 h-4" />
                          Step-by-Step Process
                        </h4>
                        <div className="space-y-3">
                          {license.steps.map((step) => (
                            <div key={step.step} className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold flex-shrink-0">
                                {step.step}
                              </div>
                              <div className="flex-1">
                                <p className="text-sm text-slate-300">{step.action}</p>
                                <p className="text-xs text-slate-500">{step.duration}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {license.notes && (
                      <div className="mt-4 p-3 bg-slate-900/50 rounded-lg border border-slate-600">
                        <p className="text-sm text-slate-400">
                          <strong className="text-emerald-400">Note:</strong> {license.notes}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Regulatory Bodies */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-white mb-4">Key Regulatory Bodies</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {regulatoryBodies.map((body, idx) => (
                  <div key={idx} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                    <div className="flex items-center gap-3 mb-2">
                      <body.icon className="w-6 h-6 text-emerald-400" />
                      <h4 className="font-bold text-white text-sm">{body.name}</h4>
                    </div>
                    <p className="text-xs text-slate-400 mb-2">{body.role}</p>
                    <p className="text-xs text-emerald-400">{body.relevance}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Timeline Tab */}
        {activeTab === 'timeline' && (
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Compliance Timeline</h2>

            {complianceTimeline.map((phase, phaseIdx) => (
              <div key={phaseIdx} className="bg-slate-800/50 rounded-xl border border-slate-700 p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      phase.status === 'completed' ? 'bg-green-500' :
                      phase.status === 'in_progress' ? 'bg-blue-500' : 'bg-slate-600'
                    }`}>
                      {phase.status === 'completed' ? (
                        <CheckCircle className="w-5 h-5 text-white" />
                      ) : phase.status === 'in_progress' ? (
                        <Clock className="w-5 h-5 text-white" />
                      ) : (
                        <span className="text-white font-bold text-sm">{phaseIdx + 1}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{phase.phase}</h3>
                      <p className="text-sm text-slate-400">Target: {phase.target}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(phase.status)}`}>
                    {phase.status.replace('_', ' ').toUpperCase()}
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {phase.items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-slate-900/50 rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        {item.status === 'completed' ? (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        ) : item.status === 'in_progress' ? (
                          <Clock className="w-4 h-4 text-blue-400" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border-2 border-slate-500" />
                        )}
                        <span className="text-sm text-slate-300">{item.task}</span>
                      </div>
                      <span className="text-xs text-slate-500">{item.owner}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Documents Tab */}
        {activeTab === 'documents' && (
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Legal Documents Checklist</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {legalDocuments.map((doc, idx) => (
                <div key={idx} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {doc.status === 'completed' ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : doc.status === 'in_progress' ? (
                      <Clock className="w-5 h-5 text-blue-400" />
                    ) : doc.status === 'ready' ? (
                      <Award className="w-5 h-5 text-purple-400" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-slate-500" />
                    )}
                    <div>
                      <p className="text-sm font-medium text-white">{doc.name}</p>
                      <p className="text-xs text-slate-500">Owner: {doc.owner}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(doc.status)}`}>
                    {doc.status.replace('_', ' ').toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Risks Tab */}
        {activeTab === 'risks' && (
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Legal Risk Register</h2>

            <div className="space-y-4">
              {legalRisks.map((risk, idx) => (
                <div key={idx} className="bg-slate-800/50 rounded-xl border border-slate-700 p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className={`w-5 h-5 ${
                        risk.severity === 'critical' ? 'text-red-400' :
                        risk.severity === 'high' ? 'text-orange-400' :
                        'text-yellow-400'
                      }`} />
                      <div>
                        <h3 className="font-bold text-white">{risk.risk}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`px-2 py-0.5 rounded text-xs font-medium ${getSeverityColor(risk.severity)} text-white`}>
                            {risk.severity.toUpperCase()}
                          </span>
                          <span className="text-xs text-slate-400">
                            Likelihood: {risk.likelihood}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-slate-500">Owner: {risk.owner}</span>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-3 mt-3">
                    <p className="text-sm text-slate-300">
                      <strong className="text-emerald-400">Mitigation:</strong> {risk.mitigation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Costs Tab */}
        {activeTab === 'costs' && (
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Legal & Compliance Costs</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Immediate Costs */}
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-red-400" />
                  <h3 className="font-bold text-white">Immediate (Pre-Launch)</h3>
                </div>
                <div className="space-y-3">
                  {legalCosts.immediate.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">{item.item}</span>
                      <span className="text-sm font-bold text-white">{item.currency} {item.cost.toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="border-t border-slate-600 pt-3 mt-3">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white">Total</span>
                      <span className="font-bold text-emerald-400">
                        AED {legalCosts.immediate.reduce((a, b) => a + b.cost, 0).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quarterly Costs */}
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <h3 className="font-bold text-white">Quarterly Recurring</h3>
                </div>
                <div className="space-y-3">
                  {legalCosts.quarterly.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">{item.item}</span>
                      <span className="text-sm font-bold text-white">{item.currency} {item.cost.toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="border-t border-slate-600 pt-3 mt-3">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white">Per Quarter</span>
                      <span className="font-bold text-blue-400">
                        AED {legalCosts.quarterly.reduce((a, b) => a + b.cost, 0).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Annual Costs */}
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-green-400" />
                  <h3 className="font-bold text-white">Annual Recurring</h3>
                </div>
                <div className="space-y-3">
                  {legalCosts.annual.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">{item.item}</span>
                      <span className="text-sm font-bold text-white">{item.currency} {item.cost.toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="border-t border-slate-600 pt-3 mt-3">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white">Per Year</span>
                      <span className="font-bold text-green-400">
                        AED {legalCosts.annual.reduce((a, b) => a + b.cost, 0).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Summary */}
            <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl p-6 border border-emerald-500/30">
              <h3 className="font-bold text-white text-lg mb-4">Year 1 Legal & Compliance Budget</h3>
              <div className="grid sm:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-black text-white">AED 93,000</p>
                  <p className="text-sm text-slate-400">Immediate Setup</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-black text-white">AED 120,000</p>
                  <p className="text-sm text-slate-400">Quarterly (×4)</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-black text-white">AED 40,000</p>
                  <p className="text-sm text-slate-400">Annual</p>
                </div>
                <div className="text-center bg-emerald-500/20 rounded-lg p-2">
                  <p className="text-3xl font-black text-emerald-400">AED 253,000</p>
                  <p className="text-sm text-emerald-200">Total Year 1</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CFO Oversight Note */}
        <div className="mt-8 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl p-6 border border-emerald-500/30">
          <div className="flex items-start gap-4">
            <Briefcase className="w-8 h-8 text-emerald-400 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-white text-lg mb-2">CFO Legal Oversight</h3>
              <p className="text-slate-300 text-sm mb-4">
                All legal and compliance matters at Nuqta are under the CFO's oversight. This includes licensing,
                regulatory compliance, risk management, contracts, and legal counsel coordination. The CFO
                reports to the CEO on all legal matters and ensures the company operates within UAE regulatory frameworks.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-medium">Licensing</span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-medium">Compliance</span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-medium">Risk Management</span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-medium">Contracts</span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-medium">Insurance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sources */}
        <div className="mt-8 p-4 bg-slate-800/30 rounded-lg border border-slate-700">
          <h4 className="text-sm font-bold text-slate-400 mb-2">Sources & References</h4>
          <div className="text-xs text-slate-500 space-y-1">
            <p>• <a href="https://www.dubaidet.gov.ae/en/licences-and-permits" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">Dubai DET - Licences & Permits</a></p>
            <p>• <a href="https://practiceguides.chambers.com/practice-guides/fintech-2025/uae/trends-and-developments" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">Chambers - Fintech 2025 UAE</a></p>
            <p>• <a href="https://www.centralbank.ae" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">Central Bank of UAE (CBUAE)</a></p>
            <p>• <a href="https://paycompliance.com/2025/04/11/uae-fintech-licensing-how-startups-can-ensure-regulatory-compliance-in-2025/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">UAE Fintech Licensing Guide 2025</a></p>
            <p>• <a href="https://iclg.com/practice-areas/fintech-laws-and-regulations/united-arab-emirates" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">ICLG - Fintech Laws UAE</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalCompliancePage;
