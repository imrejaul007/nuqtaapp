'use client';

import React, { useState } from 'react';
import {
  Shield,
  Building2,
  CreditCard,
  FileCheck,
  Globe,
  CheckCircle2,
  AlertCircle,
  Clock,
  DollarSign,
  FileText,
  Scale,
  Landmark
} from 'lucide-react';

export default function LicensingPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'uae' | 'payments' | 'bnpl' | 'timeline'>('overview');

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0a1628] via-[#1a2942] to-[#0a1628] border-b border-[#c9a227]/20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-[#c9a227]" />
            <span className="text-[#c9a227] font-semibold">Legal & Compliance</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Licensing & Regulatory Framework
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            UAE business setup, payment processing compliance, and BNPL partnerships
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-0 z-50 bg-[#0a1628]/95 backdrop-blur border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-2">
            {[
              { id: 'overview', label: 'Overview', icon: Globe },
              { id: 'uae', label: 'UAE Setup', icon: Building2 },
              { id: 'payments', label: 'Payments', icon: CreditCard },
              { id: 'bnpl', label: 'BNPL', icon: DollarSign },
              { id: 'timeline', label: 'Timeline', icon: Clock },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-[#c9a227] text-black'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
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
      <div className="max-w-6xl mx-auto px-6 py-12">
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'uae' && <UAESetupTab />}
        {activeTab === 'payments' && <PaymentsTab />}
        {activeTab === 'bnpl' && <BNPLTab />}
        {activeTab === 'timeline' && <TimelineTab />}
      </div>
    </div>
  );
}

// ============================================
// OVERVIEW TAB
// ============================================
function OverviewTab() {
  return (
    <div className="space-y-8">
      {/* Executive Summary */}
      <div className="bg-gradient-to-br from-[#c9a227]/10 to-amber-500/10 border border-[#c9a227]/30 rounded-xl p-8">
        <h2 className="text-2xl font-black text-[#c9a227] mb-4">Executive Summary</h2>
        <p className="text-slate-300 mb-6">
          Nuqta operates as a loyalty and rewards platform in the UAE, requiring specific licensing
          for company formation, payment processing, and financial service partnerships.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800/50 rounded-lg p-4">
            <Building2 className="w-8 h-8 text-emerald-400 mb-3" />
            <h3 className="font-bold text-white mb-2">UAE Company</h3>
            <p className="text-sm text-slate-400">Mainland LLC or Freezone setup with appropriate trade license</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <CreditCard className="w-8 h-8 text-blue-400 mb-3" />
            <h3 className="font-bold text-white mb-2">Payment Gateway</h3>
            <p className="text-sm text-slate-400">Razorpay UAE integration for merchant settlements</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <DollarSign className="w-8 h-8 text-purple-400 mb-3" />
            <h3 className="font-bold text-white mb-2">BNPL Partners</h3>
            <p className="text-sm text-slate-400">Tabby & Tamara integration for flexible payments</p>
          </div>
        </div>
      </div>

      {/* Regulatory Landscape */}
      <div className="bg-slate-800/30 rounded-xl p-8">
        <h2 className="text-2xl font-black text-white mb-6">UAE Regulatory Landscape</h2>

        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/30">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-emerald-400">No Special License Required for Loyalty Programs</h3>
              <p className="text-sm text-slate-400 mt-1">
                Loyalty/rewards platforms are not regulated financial services in UAE. Standard commercial license sufficient.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
            <CheckCircle2 className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-blue-400">Razorpay Handles Payment Compliance</h3>
              <p className="text-sm text-slate-400 mt-1">
                As a licensed payment aggregator, Razorpay manages PCI-DSS, CBUAE regulations, and merchant settlements.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-purple-500/10 rounded-lg border border-purple-500/30">
            <CheckCircle2 className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-purple-400">BNPL Partners are Licensed</h3>
              <p className="text-sm text-slate-400 mt-1">
                Tabby and Tamara hold CBUAE consumer lending licenses. Integration is via their merchant APIs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Compliance Areas */}
      <div className="bg-slate-800/30 rounded-xl p-8">
        <h2 className="text-2xl font-black text-white mb-6">Key Compliance Areas</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#c9a227]">Data Protection</h3>
            <ul className="space-y-2">
              {[
                'PDPL (UAE Personal Data Protection Law) compliance',
                'User consent for data collection',
                'Data localization requirements',
                'Privacy policy & terms of service',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#c9a227]">Consumer Protection</h3>
            <ul className="space-y-2">
              {[
                'Clear terms for reward earning/redemption',
                'Transparent pricing (no hidden fees)',
                'Dispute resolution mechanism',
                'Refund/cancellation policies',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#c9a227]">Anti-Money Laundering</h3>
            <ul className="space-y-2">
              {[
                'KYC for high-value redemptions',
                'Transaction monitoring',
                'Suspicious activity reporting',
                'Record keeping requirements',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#c9a227]">Merchant Agreements</h3>
            <ul className="space-y-2">
              {[
                'Standard merchant service agreements',
                'Commission terms & payment schedules',
                'Data sharing & privacy clauses',
                'Termination & liability provisions',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// UAE SETUP TAB
// ============================================
function UAESetupTab() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-white mb-2">UAE Company Formation</h2>
        <p className="text-slate-400">Options for establishing Nuqta in the UAE</p>
      </div>

      {/* Comparison */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Mainland */}
        <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border-2 border-emerald-500/30 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-8 h-8 text-emerald-400" />
            <div>
              <h3 className="text-xl font-black text-emerald-400">Mainland LLC</h3>
              <p className="text-sm text-slate-400">Department of Economic Development</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-white mb-2">Advantages</h4>
              <ul className="space-y-1">
                {[
                  '100% foreign ownership (since 2021)',
                  'Trade anywhere in UAE',
                  'No restrictions on client base',
                  'Government contracts eligible',
                  'Physical office flexibility',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-2">Considerations</h4>
              <ul className="space-y-1">
                {[
                  'Requires physical office space',
                  'Local service agent may be needed',
                  'Higher setup costs',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <AlertCircle className="w-4 h-4 text-amber-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-4 mt-4">
              <p className="text-sm text-slate-400">Estimated Cost</p>
              <p className="text-2xl font-black text-emerald-400">AED 25,000 - 50,000</p>
              <p className="text-xs text-slate-500">Including license, visa, office</p>
            </div>
          </div>
        </div>

        {/* Freezone */}
        <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-2 border-blue-500/30 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Landmark className="w-8 h-8 text-blue-400" />
            <div>
              <h3 className="text-xl font-black text-blue-400">Freezone Company</h3>
              <p className="text-sm text-slate-400">DMCC, DAFZA, IFZA, etc.</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-white mb-2">Advantages</h4>
              <ul className="space-y-1">
                {[
                  '100% foreign ownership guaranteed',
                  'Zero corporate tax (many zones)',
                  'Virtual office options',
                  'Fast setup process',
                  'Easy visa processing',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-2">Considerations</h4>
              <ul className="space-y-1">
                {[
                  'May need mainland distributor',
                  'Trade within freezone limits',
                  'Annual renewal fees',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <AlertCircle className="w-4 h-4 text-amber-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-4 mt-4">
              <p className="text-sm text-slate-400">Estimated Cost</p>
              <p className="text-2xl font-black text-blue-400">AED 15,000 - 35,000</p>
              <p className="text-xs text-slate-500">Including license, visa, flexi-desk</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendation */}
      <div className="bg-gradient-to-br from-[#c9a227]/10 to-amber-500/10 border-2 border-[#c9a227]/30 rounded-xl p-6">
        <h3 className="text-xl font-black text-[#c9a227] mb-4">Recommendation: Freezone Start → Mainland Later</h3>
        <p className="text-slate-300 mb-4">
          Start with a freezone setup for speed and cost efficiency. As Nuqta scales and requires
          government contracts or broader trade access, consider mainland conversion.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-bold text-white mb-2">Recommended Zones</h4>
            <ul className="text-sm text-slate-400 space-y-1">
              <li>• IFZA (Fujairah) - Cost effective</li>
              <li>• DMCC (Dubai) - Prestige</li>
              <li>• Meydan (Dubai) - Tech focus</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-bold text-white mb-2">Trade License Type</h4>
            <ul className="text-sm text-slate-400 space-y-1">
              <li>• IT Services</li>
              <li>• Software Development</li>
              <li>• E-commerce Trading</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-bold text-white mb-2">Setup Timeline</h4>
            <ul className="text-sm text-slate-400 space-y-1">
              <li>• Application: 1 week</li>
              <li>• Approval: 1-2 weeks</li>
              <li>• Bank account: 2-4 weeks</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Required Documents */}
      <div className="bg-slate-800/30 rounded-xl p-6">
        <h3 className="text-xl font-black text-white mb-4">Required Documents</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-[#c9a227] mb-3">For Shareholders</h4>
            <ul className="space-y-2">
              {[
                'Passport copies (color, valid 6+ months)',
                'Proof of address (utility bill/bank statement)',
                'CV/Resume of directors',
                'Passport photos (white background)',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                  <FileText className="w-4 h-4 text-slate-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#c9a227] mb-3">For Company</h4>
            <ul className="space-y-2">
              {[
                'Business plan summary',
                'Proposed company names (3 options)',
                'Share structure agreement',
                'NOC from current employer (if applicable)',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                  <FileText className="w-4 h-4 text-slate-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// PAYMENTS TAB
// ============================================
function PaymentsTab() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-white mb-2">Payment Processing</h2>
        <p className="text-slate-400">Razorpay UAE integration for merchant settlements</p>
      </div>

      {/* Razorpay Overview */}
      <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-2 border-blue-500/30 rounded-xl p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
            <CreditCard className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-blue-400">Razorpay UAE</h3>
            <p className="text-slate-400">Licensed Payment Aggregator</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-bold text-white mb-2">Payment Methods</h4>
            <ul className="text-sm text-slate-400 space-y-1">
              <li>• Credit/Debit Cards</li>
              <li>• Apple Pay / Google Pay</li>
              <li>• Bank Transfers</li>
              <li>• UPI (for Indian users)</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-bold text-white mb-2">Processing Fees</h4>
            <ul className="text-sm text-slate-400 space-y-1">
              <li>• Cards: 2.5% + AED 1</li>
              <li>• Wallets: 2.0%</li>
              <li>• Bank: 1.5%</li>
              <li>• No setup fees</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-bold text-white mb-2">Settlement</h4>
            <ul className="text-sm text-slate-400 space-y-1">
              <li>• T+2 settlement cycle</li>
              <li>• Daily/Weekly options</li>
              <li>• Multi-currency support</li>
              <li>• Split payments available</li>
            </ul>
          </div>
        </div>

        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <h4 className="font-bold text-emerald-400">Why Razorpay?</h4>
          </div>
          <p className="text-sm text-slate-300">
            Razorpay handles all payment compliance (PCI-DSS, CBUAE regulations).
            Their Route API enables automated commission splits between Nuqta and merchants,
            eliminating manual settlement processes.
          </p>
        </div>
      </div>

      {/* Payment Flow */}
      <div className="bg-slate-800/30 rounded-xl p-8">
        <h3 className="text-xl font-black text-white mb-6">Payment Flow Architecture</h3>

        <div className="space-y-4">
          {[
            {
              step: 1,
              title: 'User Payment',
              desc: 'User pays at merchant via Nuqta app (QR scan or in-app)',
              color: 'blue',
            },
            {
              step: 2,
              title: 'Razorpay Processing',
              desc: 'Razorpay processes payment, validates card, handles 3DS',
              color: 'indigo',
            },
            {
              step: 3,
              title: 'Commission Split (Route API)',
              desc: 'Automatic split: Merchant receives (100% - commission), Nuqta receives commission',
              color: 'purple',
            },
            {
              step: 4,
              title: 'Settlement',
              desc: 'Funds settled to respective bank accounts within T+2',
              color: 'emerald',
            },
            {
              step: 5,
              title: 'Reward Issuance',
              desc: 'Nuqta coins credited to user wallet based on transaction',
              color: 'amber',
            },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-full bg-${item.color}-500/20 flex items-center justify-center flex-shrink-0`}>
                <span className={`text-${item.color}-400 font-black`}>{item.step}</span>
              </div>
              <div>
                <h4 className="font-bold text-white">{item.title}</h4>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Integration Requirements */}
      <div className="bg-slate-800/30 rounded-xl p-8">
        <h3 className="text-xl font-black text-white mb-6">Integration Requirements</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-[#c9a227] mb-3">Nuqta Requirements</h4>
            <ul className="space-y-2">
              {[
                'UAE trade license (any type)',
                'UAE corporate bank account',
                'Company registration documents',
                'KYC for directors/shareholders',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                  <FileCheck className="w-4 h-4 text-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#c9a227] mb-3">Merchant Requirements</h4>
            <ul className="space-y-2">
              {[
                'Valid UAE trade license',
                'Bank account details',
                'Business address verification',
                'Signed merchant agreement',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                  <FileCheck className="w-4 h-4 text-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// BNPL TAB
// ============================================
function BNPLTab() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-white mb-2">Buy Now, Pay Later Integration</h2>
        <p className="text-slate-400">Tabby & Tamara partnerships for flexible payment options</p>
      </div>

      {/* Partners Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Tabby */}
        <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border-2 border-teal-500/30 rounded-xl p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-teal-500 rounded-xl flex items-center justify-center">
              <span className="text-2xl font-black text-white">T</span>
            </div>
            <div>
              <h3 className="text-xl font-black text-teal-400">Tabby</h3>
              <p className="text-sm text-slate-400">Pay in 4 installments</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h4 className="font-bold text-white mb-2">How It Works</h4>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• Split purchases into 4 payments</li>
                <li>• 0% interest for users</li>
                <li>• Merchant pays ~5-6% fee</li>
                <li>• Instant approval at checkout</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-4">
              <h4 className="font-bold text-white mb-2">Integration Type</h4>
              <p className="text-sm text-slate-400">
                Merchant-side integration. Nuqta users select Tabby at checkout.
                Commission calculated on full transaction amount.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-4">
              <h4 className="font-bold text-white mb-2">Requirements</h4>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• Merchant must be Tabby-enabled</li>
                <li>• Min transaction: AED 50</li>
                <li>• Max transaction: AED 5,000</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tamara */}
        <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 border-2 border-pink-500/30 rounded-xl p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-pink-500 rounded-xl flex items-center justify-center">
              <span className="text-2xl font-black text-white">T</span>
            </div>
            <div>
              <h3 className="text-xl font-black text-pink-400">Tamara</h3>
              <p className="text-sm text-slate-400">Pay in 3 or Pay Later</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h4 className="font-bold text-white mb-2">How It Works</h4>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• Pay in 3 monthly installments</li>
                <li>• Or pay full amount in 30 days</li>
                <li>• Sharia-compliant option</li>
                <li>• Higher approval rates</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-4">
              <h4 className="font-bold text-white mb-2">Integration Type</h4>
              <p className="text-sm text-slate-400">
                Merchant-side integration. Tamara handles credit risk and collections.
                Merchants receive full payment upfront (minus fee).
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-4">
              <h4 className="font-bold text-white mb-2">Requirements</h4>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• Merchant must be Tamara-enabled</li>
                <li>• Min transaction: AED 100</li>
                <li>• Max transaction: AED 10,000</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Nuqta + BNPL Value */}
      <div className="bg-gradient-to-br from-[#c9a227]/10 to-amber-500/10 border-2 border-[#c9a227]/30 rounded-xl p-8">
        <h3 className="text-xl font-black text-[#c9a227] mb-4">Nuqta + BNPL Value Proposition</h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-bold text-white mb-2">For Users</h4>
            <ul className="text-sm text-slate-400 space-y-1">
              <li>• Earn coins on BNPL purchases</li>
              <li>• Flexible payment + rewards</li>
              <li>• Higher purchase power</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-bold text-white mb-2">For Merchants</h4>
            <ul className="text-sm text-slate-400 space-y-1">
              <li>• Higher average order value</li>
              <li>• Attract BNPL-preferring customers</li>
              <li>• Immediate settlement</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-bold text-white mb-2">For Nuqta</h4>
            <ul className="text-sm text-slate-400 space-y-1">
              <li>• Commission on full amount</li>
              <li>• Higher GMV per user</li>
              <li>• Differentiated offering</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Regulatory Note */}
      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-2">
          <Scale className="w-5 h-5 text-emerald-400" />
          <h4 className="font-bold text-emerald-400">Regulatory Status</h4>
        </div>
        <p className="text-sm text-slate-300">
          Both Tabby and Tamara are licensed by the UAE Central Bank (CBUAE) for consumer lending.
          Nuqta does not require any lending license as we only integrate with licensed BNPL providers.
          Users&apos; credit agreements are directly with Tabby/Tamara.
        </p>
      </div>
    </div>
  );
}

// ============================================
// TIMELINE TAB
// ============================================
function TimelineTab() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-white mb-2">Licensing Timeline</h2>
        <p className="text-slate-400">Estimated timeline for complete legal setup</p>
      </div>

      {/* Timeline */}
      <div className="space-y-6">
        {[
          {
            week: 'Week 1-2',
            title: 'Company Formation',
            tasks: [
              'Select freezone (IFZA recommended)',
              'Submit application with documents',
              'Pay license fees',
              'Receive initial approval',
            ],
            status: 'pending',
          },
          {
            week: 'Week 2-3',
            title: 'Trade License Issuance',
            tasks: [
              'Final approval from freezone',
              'Trade license issued',
              'Establishment card obtained',
              'Corporate documents attested',
            ],
            status: 'pending',
          },
          {
            week: 'Week 3-5',
            title: 'Bank Account Opening',
            tasks: [
              'Select bank (Emirates NBD, ADCB, Mashreq)',
              'Submit corporate documents',
              'Complete KYC process',
              'Account activated',
            ],
            status: 'pending',
          },
          {
            week: 'Week 4-6',
            title: 'Payment Gateway Setup',
            tasks: [
              'Apply for Razorpay UAE account',
              'Submit business verification',
              'Technical integration setup',
              'Test transactions approved',
            ],
            status: 'pending',
          },
          {
            week: 'Week 5-7',
            title: 'BNPL Partnerships',
            tasks: [
              'Apply to Tabby merchant program',
              'Apply to Tamara merchant program',
              'Complete integration testing',
              'Go live with BNPL options',
            ],
            status: 'pending',
          },
          {
            week: 'Week 6-8',
            title: 'Compliance Finalization',
            tasks: [
              'Privacy policy finalized',
              'Terms of service approved',
              'Data protection measures in place',
              'Merchant agreement templates ready',
            ],
            status: 'pending',
          },
        ].map((phase, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                phase.status === 'completed' ? 'bg-emerald-500' : 'bg-slate-700'
              }`}>
                <span className="text-white font-bold text-sm">{index + 1}</span>
              </div>
              {index < 5 && <div className="w-0.5 h-full bg-slate-700 mt-2" />}
            </div>
            <div className="flex-1 pb-8">
              <div className="bg-slate-800/50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[#c9a227] font-semibold text-sm">{phase.week}</p>
                    <h3 className="text-xl font-black text-white">{phase.title}</h3>
                  </div>
                  <Clock className="w-5 h-5 text-slate-500" />
                </div>
                <ul className="space-y-2">
                  {phase.tasks.map((task, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cost Summary */}
      <div className="bg-gradient-to-br from-[#c9a227]/10 to-amber-500/10 border-2 border-[#c9a227]/30 rounded-xl p-8">
        <h3 className="text-xl font-black text-[#c9a227] mb-6">Estimated Setup Costs</h3>

        <div className="space-y-3">
          {[
            { item: 'Freezone License (IFZA)', cost: 'AED 15,000 - 20,000' },
            { item: 'Visa Processing (2 visas)', cost: 'AED 6,000 - 8,000' },
            { item: 'Office/Flexi-desk (annual)', cost: 'AED 5,000 - 10,000' },
            { item: 'Bank Account Setup', cost: 'AED 0 - 2,000' },
            { item: 'Legal & Documentation', cost: 'AED 5,000 - 10,000' },
          ].map((row, i) => (
            <div key={i} className="flex justify-between items-center py-2 border-b border-slate-700/50">
              <span className="text-slate-300">{row.item}</span>
              <span className="text-white font-semibold">{row.cost}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-4">
            <span className="text-white font-bold text-lg">Total Estimated</span>
            <span className="text-[#c9a227] font-black text-xl">AED 31,000 - 50,000</span>
          </div>
        </div>

        <p className="text-xs text-slate-500 mt-4">
          * Costs vary by freezone, visa requirements, and service providers.
          Razorpay and BNPL integrations have no upfront costs (transaction-based fees only).
        </p>
      </div>
    </div>
  );
}
