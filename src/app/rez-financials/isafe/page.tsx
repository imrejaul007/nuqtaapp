'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Shield, DollarSign, Users, ArrowLeft, CheckCircle,
  AlertTriangle, FileText, Copy, ChevronDown, ChevronRight,
  Scale, Briefcase, Clock, Globe, Zap
} from 'lucide-react';
import RezFooter from '@/components/RezFooter';

// ============================================
// ReZ iSAFE (India Simple Agreement for Future Equity)
// Based on 100X.VC iSAFE template adapted for ReZ terms
// ============================================

export default function ReZiSAFEPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>('overview');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const sections = [
    {
      id: 'overview',
      title: 'iSAFE Overview — What Is It?',
      icon: Shield,
      color: 'green',
      content: (
        <div className="space-y-4">
          <p className="text-sm text-slate-300 leading-relaxed">
            An <strong className="text-green-400">iSAFE (India Simple Agreement for Future Equity)</strong> is the Indian adaptation of Y Combinator&apos;s SAFE note, pioneered by <strong>100X.VC</strong> for Indian startup investments. It&apos;s a convertible instrument — <strong>not debt, not equity yet</strong> — that converts to equity at a future priced round (Series A).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-800/30 rounded-lg p-4">
              <h4 className="text-green-400 font-bold text-sm mb-2">Why iSAFE (not SAFE)?</h4>
              <div className="space-y-1 text-xs text-slate-400">
                <p>&#x2022; SAFE is US-specific legal structure</p>
                <p>&#x2022; Indian company law requires different terms</p>
                <p>&#x2022; iSAFE is structured as Compulsorily Convertible Preference Shares (CCPS)</p>
                <p>&#x2022; Compliant with Indian Companies Act 2013</p>
                <p>&#x2022; 100X.VC template is industry standard in India</p>
              </div>
            </div>
            <div className="bg-slate-800/30 rounded-lg p-4">
              <h4 className="text-blue-400 font-bold text-sm mb-2">How It Works</h4>
              <div className="space-y-1 text-xs text-slate-400">
                <p>1. Investor wires money NOW (₹20L minimum)</p>
                <p>2. No valuation negotiation — just cap + discount</p>
                <p>3. Money converts to equity at Series A</p>
                <p>4. Conversion price = LOWER of (cap / diluted shares) or (Series A price × 80%)</p>
                <p>5. Investor gets the better deal automatically</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'terms',
      title: 'ReZ iSAFE Terms',
      icon: FileText,
      color: 'orange',
      content: (
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Company', 'ReZ (Nuqta Technologies Pvt. Ltd.)', 'Registered in India'],
                  ['Instrument', 'iSAFE (Compulsorily Convertible Preference Shares)', 'Converts at Series A'],
                  ['Total Round Size', '$500,000 (₹4,15,00,000)', 'Can be filled by multiple investors'],
                  ['Valuation Cap', '$5,000,000 (₹4,15,00,000 × 10)', 'Maximum pre-money for conversion'],
                  ['Discount Rate', '20%', 'Investor gets 20% discount on Series A price'],
                  ['Minimum Investment', '₹20,00,000 ($25,000)', 'Per investor minimum'],
                  ['Pro-Rata Rights', 'Yes', 'Investor can maintain % at Series A'],
                  ['MFN (Most Favored Nation)', 'Yes', 'If better terms given later, this investor gets them too'],
                  ['Conversion Trigger', 'Equity Financing ≥ $1M', 'Series A or equivalent priced round'],
                  ['Maturity', 'None (no expiry)', 'Converts only at trigger event'],
                  ['Interest Rate', '0%', 'Not a loan — no interest accrues'],
                  ['Board Seat', 'No (Observer rights for $100K+)', 'Information rights for all investors'],
                  ['Governing Law', 'Indian law, Bangalore jurisdiction', 'Courts of Bangalore, Karnataka'],
                ].map(([term, value, note]) => (
                  <tr key={term} className="border-b border-slate-700/30">
                    <td className="px-4 py-3 text-slate-400 font-medium w-1/3">{term}</td>
                    <td className="px-4 py-3 text-white font-bold">{value}</td>
                    <td className="px-4 py-3 text-slate-500 text-xs">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: 'conversion',
      title: 'How Conversion Works (Example)',
      icon: Zap,
      color: 'purple',
      content: (
        <div className="space-y-4">
          <p className="text-sm text-slate-300">Here&apos;s exactly how your iSAFE converts at Series A:</p>

          <div className="bg-slate-800/30 rounded-xl p-5">
            <h4 className="text-purple-400 font-bold mb-3">Scenario: Series A at $20M Pre-Money</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h5 className="text-white font-semibold text-sm mb-2">Method 1: Valuation Cap</h5>
                <div className="space-y-1 text-xs text-slate-400">
                  <p>Cap: $5M</p>
                  <p>Series A pre-money: $20M</p>
                  <p>Conversion price = $5M / $20M = <strong className="text-green-400">25% of Series A price</strong></p>
                  <p>Effective valuation for iSAFE investor: $5M</p>
                  <p className="text-green-400 font-bold mt-2">Investor gets 4x more shares than Series A investors per dollar</p>
                </div>
              </div>
              <div>
                <h5 className="text-white font-semibold text-sm mb-2">Method 2: Discount</h5>
                <div className="space-y-1 text-xs text-slate-400">
                  <p>Discount: 20%</p>
                  <p>Series A price per share: ₹1,000 (example)</p>
                  <p>iSAFE conversion price: ₹1,000 × 80% = <strong className="text-green-400">₹800/share</strong></p>
                  <p className="text-green-400 font-bold mt-2">Investor pays ₹800 for shares worth ₹1,000</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-700/50">
              <p className="text-sm text-orange-400 font-bold">Result: Investor gets the BETTER of the two methods (lower price = more shares)</p>
              <p className="text-xs text-slate-400 mt-1">In this example, the cap method is better (25% of price vs 80% of price). So cap applies.</p>
            </div>
          </div>

          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-5">
            <h4 className="text-green-400 font-bold mb-3">Return Scenarios for $25K (₹20L) iSAFE Investor</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-slate-700/50">
                    <th className="text-left py-2 text-slate-400">Scenario</th>
                    <th className="text-right py-2 text-slate-400">Series A Valuation</th>
                    <th className="text-right py-2 text-slate-400">Effective Entry</th>
                    <th className="text-right py-2 text-slate-400">Year 3 Value</th>
                    <th className="text-right py-2 text-green-400">Return</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Conservative', '$15M', '$5M', '$100M', '20x ($500K)'],
                    ['Base Case', '$25M', '$5M', '$725M', '145x ($3.6M)'],
                    ['Bull Case', '$40M', '$5M', '$1B+', '200x+ ($5M+)'],
                  ].map(([scenario, seriesA, entry, y3, ret]) => (
                    <tr key={scenario} className="border-b border-slate-700/30">
                      <td className="py-2 text-white font-medium">{scenario}</td>
                      <td className="py-2 text-right text-slate-300">{seriesA}</td>
                      <td className="py-2 text-right text-slate-300">{entry}</td>
                      <td className="py-2 text-right text-purple-400">{y3}</td>
                      <td className="py-2 text-right text-green-400 font-bold">{ret}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'template',
      title: 'iSAFE Document Template',
      icon: Scale,
      color: 'blue',
      content: (
        <div className="space-y-4">
          <p className="text-sm text-slate-400">Below is the key clauses summary. Full legal document should be drafted by a startup lawyer using the 100X.VC iSAFE template.</p>

          {[
            {
              clause: '1. Definitions',
              text: `"Company" means Nuqta Technologies Private Limited (ReZ), incorporated under the Companies Act, 2013.
"Investor" means the party investing pursuant to this Agreement.
"Valuation Cap" means USD 5,000,000 (Five Million US Dollars).
"Discount Rate" means 20% (Twenty Percent).
"CCPS" means Compulsorily Convertible Preference Shares.
"Equity Financing" means a bona fide transaction with the principal purpose of raising capital, with aggregate proceeds of at least USD 1,000,000.`,
            },
            {
              clause: '2. Investment Amount',
              text: `The Investor shall invest [AMOUNT] (the "Purchase Amount") in the Company. The minimum investment amount is INR 20,00,000 (Twenty Lakhs) or USD 25,000 (Twenty-Five Thousand US Dollars).`,
            },
            {
              clause: '3. Conversion Mechanics',
              text: `Upon an Equity Financing, the Purchase Amount shall automatically convert into CCPS at a price per share equal to the LOWER of:
(a) The Valuation Cap Price: (Valuation Cap / Company Capitalization) per share; or
(b) The Discount Price: The price per share of the Equity Financing securities multiplied by (1 - Discount Rate).

The CCPS shall carry anti-dilution protection and shall rank pari passu with the Equity Financing securities upon conversion.`,
            },
            {
              clause: '4. Most Favored Nation (MFN)',
              text: `If the Company issues any subsequent iSAFE or convertible instrument with terms more favorable than this Agreement, the Investor shall have the right to amend this Agreement to incorporate such more favorable terms.`,
            },
            {
              clause: '5. Pro-Rata Rights',
              text: `The Investor shall have the right (but not obligation) to participate in the Equity Financing on a pro-rata basis, calculated based on the Investor's ownership percentage immediately after conversion of this iSAFE.`,
            },
            {
              clause: '6. Information Rights',
              text: `The Company shall provide the Investor with:
(a) Annual audited financial statements within 180 days of fiscal year end
(b) Quarterly management updates including key metrics
(c) Prompt notice of any Equity Financing, change of control, or dissolution event
Investors of INR 1,00,00,000 or more shall have board observer rights.`,
            },
            {
              clause: '7. Dissolution Event',
              text: `In the event of a dissolution, merger, or change of control before conversion, the Investor shall receive the greater of:
(a) The Purchase Amount; or
(b) The amount the Investor would receive if the iSAFE had converted at the Valuation Cap Price immediately prior to such event.`,
            },
            {
              clause: '8. Governing Law',
              text: `This Agreement shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Bangalore, Karnataka.`,
            },
          ].map(clause => (
            <div key={clause.clause} className="bg-slate-800/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-blue-400 font-bold text-sm">{clause.clause}</h4>
                <button onClick={() => handleCopy(clause.text, clause.clause)} className="flex items-center gap-1 text-xs text-green-400 hover:text-green-300">
                  {copiedText === clause.clause ? <CheckCircle size={12} /> : <Copy size={12} />}
                  {copiedText === clause.clause ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <pre className="text-xs text-slate-300 whitespace-pre-wrap font-mono leading-relaxed">{clause.text}</pre>
            </div>
          ))}

          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
            <h4 className="text-yellow-400 font-bold text-sm mb-2 flex items-center gap-2"><AlertTriangle size={14} /> Important Legal Notes</h4>
            <div className="space-y-1 text-xs text-slate-400">
              <p>&#x2022; This is a summary — get a startup lawyer to draft the full legal document</p>
              <p>&#x2022; Use the <strong>100X.VC iSAFE template</strong> as the base (download from 100x.vc/resources)</p>
              <p>&#x2022; File Form PAS-3 with ROC within 30 days of allotment</p>
              <p>&#x2022; Issue CCPS (not equity shares) for RBI compliance</p>
              <p>&#x2022; Foreign investors need RBI approval under FEMA (automatic route for most sectors)</p>
              <p>&#x2022; Recommended lawyers: Algo Legal, LawSikho, IndusLaw, Khaitan & Co</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'cap-table',
      title: 'Cap Table Impact',
      icon: Users,
      color: 'cyan',
      content: (
        <div className="space-y-4">
          <p className="text-sm text-slate-300">How the $500K iSAFE affects ownership at Series A:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-slate-800/30 rounded-xl p-5">
              <h4 className="text-cyan-400 font-bold mb-3">Pre-Series A (Today)</h4>
              <div className="space-y-2">
                {[
                  { holder: 'Founder(s)', pct: '100%', shares: '10,00,000', note: 'Common shares' },
                  { holder: 'iSAFE Investors', pct: 'TBD', shares: 'Converts at Series A', note: '$500K at $5M cap' },
                  { holder: 'ESOP Pool', pct: '10% (reserved)', shares: 'Created at Series A', note: 'Standard 10% pool' },
                ].map(row => (
                  <div key={row.holder} className="flex items-center justify-between text-sm border-b border-slate-700/30 pb-2">
                    <div>
                      <span className="text-white font-medium">{row.holder}</span>
                      <p className="text-xs text-slate-500">{row.note}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-cyan-400 font-bold">{row.pct}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/30 rounded-xl p-5">
              <h4 className="text-green-400 font-bold mb-3">Post-Series A (Projected)</h4>
              <p className="text-xs text-slate-400 mb-3">Assuming $20M Series A at $25M pre-money:</p>
              <div className="space-y-2">
                {[
                  { holder: 'Founder(s)', pct: '~62%', color: 'blue' },
                  { holder: 'Series A Investors', pct: '~20%', color: 'green' },
                  { holder: 'iSAFE Investors ($500K)', pct: '~8%', color: 'orange' },
                  { holder: 'ESOP Pool', pct: '~10%', color: 'purple' },
                ].map(row => (
                  <div key={row.holder}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white">{row.holder}</span>
                      <span className={`text-${row.color}-400 font-bold`}>{row.pct}</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2">
                      <div className={`bg-${row.color}-500 h-2 rounded-full`} style={{ width: row.pct.replace('~', '').replace('%', '') + '%' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center">
            <p className="text-green-400 font-bold text-sm">For a ₹20L ($25K) iSAFE investment → ~0.4% ownership → worth ~$2.9M at $725M Y3 valuation = <span className="text-white">145x return</span></p>
          </div>
        </div>
      ),
    },
    {
      id: 'process',
      title: 'Investment Process (Step-by-Step)',
      icon: Clock,
      color: 'emerald',
      content: (
        <div className="space-y-3">
          {[
            { step: 1, title: 'Expression of Interest', desc: 'Investor reviews deck and one-pager. Confirms interest in investing. Specifies intended amount (minimum ₹20L).', time: 'Day 1', owner: 'Investor' },
            { step: 2, title: 'Due Diligence', desc: 'Investor reviews: financial model (/rez-financials), acquisition strategy, team bios, cap table, market analysis. Questions via email/call.', time: 'Day 2-7', owner: 'Both' },
            { step: 3, title: 'iSAFE Document', desc: 'Company shares iSAFE document (this page). Investor reviews with their lawyer. Standard 100X.VC template — minimal negotiation needed.', time: 'Day 7-10', owner: 'Company' },
            { step: 4, title: 'Board Resolution', desc: 'Company passes board resolution approving iSAFE issuance and CCPS allotment.', time: 'Day 10-12', owner: 'Company' },
            { step: 5, title: 'Signing', desc: 'Both parties sign iSAFE agreement. Digital signatures (Aadhaar eSign or DocuSign) are valid.', time: 'Day 12-14', owner: 'Both' },
            { step: 6, title: 'Wire Transfer', desc: 'Investor wires purchase amount to Company bank account. Company issues receipt.', time: 'Day 14-17', owner: 'Investor' },
            { step: 7, title: 'CCPS Allotment', desc: 'Company allots CCPS to investor. Files Form PAS-3 with ROC within 30 days.', time: 'Day 17-21', owner: 'Company' },
            { step: 8, title: 'Share Certificate', desc: 'Company issues CCPS share certificate to investor. Updates cap table.', time: 'Day 21-25', owner: 'Company' },
          ].map(s => (
            <div key={s.step} className="flex gap-4 bg-slate-800/30 rounded-lg p-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-lg font-bold text-emerald-400 flex-shrink-0">{s.step}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-white font-bold text-sm">{s.title}</span>
                  <span className="text-xs text-emerald-400">{s.time}</span>
                  <span className="text-xs text-slate-500">Owner: {s.owner}</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 text-center">
            <p className="text-emerald-400 font-bold">Total time: 3-4 weeks from first conversation to money in bank</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-blue-900/40 border-b border-blue-500/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <Link href="/rez-financials/investors" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-4 text-sm">
            <ArrowLeft size={16} /> Back to Investor Strategy
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold">ReZ iSAFE Agreement</h1>
          <p className="text-slate-300 mt-1">India Simple Agreement for Future Equity &bull; $500K at $5M Cap &bull; 20% Discount</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-4">
        {sections.map(section => {
          const Icon = section.icon;
          const isExpanded = expandedSection === section.id;
          return (
            <div key={section.id} className={`bg-slate-800/50 border rounded-xl overflow-hidden ${isExpanded ? `border-${section.color}-500/30` : 'border-slate-700/50'}`}>
              <button onClick={() => setExpandedSection(isExpanded ? null : section.id)} className="w-full px-5 py-4 text-left flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon size={18} className={`text-${section.color}-400`} />
                  <span className="text-white font-bold">{section.title}</span>
                </div>
                {isExpanded ? <ChevronDown size={16} className="text-slate-400" /> : <ChevronRight size={16} className="text-slate-400" />}
              </button>
              {isExpanded && (
                <div className="px-5 pb-5 border-t border-slate-700/50 pt-4">
                  {section.content}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <RezFooter />
    </div>
  );
}
