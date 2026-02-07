'use client';

import React, { useState } from 'react';
import {
  FileText,
  Download,
  Building2,
  Users,
  Calendar,
  Shield,
  CheckCircle2,
  AlertTriangle,
  Handshake,
  Briefcase,
  Copy,
  Check
} from 'lucide-react';

export default function ContractsPage() {
  const [activeTab, setActiveTab] = useState<'merchant-a' | 'merchant-b' | 'merchant-c' | 'corporate' | 'copartner'>('merchant-a');
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const copyToClipboard = (text: string, section: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0a1628] via-[#1a2942] to-[#0a1628] border-b border-[#c9a227]/20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-8 h-8 text-[#c9a227]" />
            <span className="text-[#c9a227] font-semibold">Legal Templates</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            MoU & Contract Templates
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Ready-to-use agreement templates for merchants, corporate partners, and co-partner brands
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-0 z-50 bg-[#0a1628]/95 backdrop-blur border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-2">
            {[
              { id: 'merchant-a', label: 'Engine A', icon: Building2, color: 'emerald' },
              { id: 'merchant-b', label: 'Engine B', icon: Building2, color: 'blue' },
              { id: 'merchant-c', label: 'Engine C', icon: Calendar, color: 'purple' },
              { id: 'corporate', label: 'Corporate', icon: Briefcase, color: 'amber' },
              { id: 'copartner', label: 'Co-Partner', icon: Handshake, color: 'pink' },
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
        {activeTab === 'merchant-a' && <MerchantATemplate copyToClipboard={copyToClipboard} copiedSection={copiedSection} />}
        {activeTab === 'merchant-b' && <MerchantBTemplate copyToClipboard={copyToClipboard} copiedSection={copiedSection} />}
        {activeTab === 'merchant-c' && <MerchantCTemplate copyToClipboard={copyToClipboard} copiedSection={copiedSection} />}
        {activeTab === 'corporate' && <CorporateTemplate copyToClipboard={copyToClipboard} copiedSection={copiedSection} />}
        {activeTab === 'copartner' && <CoPartnerTemplate copyToClipboard={copyToClipboard} copiedSection={copiedSection} />}
      </div>
    </div>
  );
}

interface TemplateProps {
  copyToClipboard: (text: string, section: string) => void;
  copiedSection: string | null;
}

// ============================================
// MERCHANT A TEMPLATE (High-Margin)
// ============================================
function MerchantATemplate({ copyToClipboard, copiedSection }: TemplateProps) {
  const fullContract = `MERCHANT PARTNER AGREEMENT - ENGINE A (HIGH-MARGIN)

This Merchant Partner Agreement ("Agreement") is entered into as of [DATE] ("Effective Date")

BETWEEN:

NUQTA TECHNOLOGIES LLC
[Freezone Address]
United Arab Emirates
("Nuqta" or "Platform")

AND:

[MERCHANT LEGAL NAME]
Trade License No: [LICENSE NUMBER]
Address: [MERCHANT ADDRESS]
United Arab Emirates
("Merchant" or "Partner")

RECITALS:

A. Nuqta operates a mobile loyalty and rewards platform enabling consumers to earn and redeem rewards at participating merchants in the UAE.

B. Merchant operates a [BUSINESS TYPE] business and wishes to participate in the Nuqta platform to increase customer acquisition, engagement, and retention.

C. The parties wish to establish the terms under which Merchant will participate in the Nuqta platform.

NOW, THEREFORE, the parties agree as follows:

1. DEFINITIONS

1.1 "Commission" means the percentage of Qualifying Transaction value payable by Merchant to Nuqta.
1.2 "Nuqta Coins" means the virtual reward currency issued by Nuqta to users.
1.3 "Qualifying Transaction" means any purchase made by a Nuqta user at Merchant's premises using the Nuqta app.
1.4 "GMV" means Gross Merchandise Value, the total value of transactions processed.

2. PARTNERSHIP TERMS

2.1 Commission Structure:
   - Standard Rate: [15-20]% of Qualifying Transaction value
   - Breakdown: [X]% Nuqta platform fee, [Y]% user rewards pool, [Z]% marketing fund

2.2 Package Selection: [SELECT ONE]
   □ STARTER (FREE) - 20% commission, basic features
   □ GROWTH (AED 999/month) - 18% commission, CRM tools
   □ PREMIUM (AED 2,499/month) - 16% commission, full features
   □ ENTERPRISE (AED 4,999/month) - 15% commission, dedicated support

2.3 Minimum Commitment: None required for Starter package.

3. MERCHANT OBLIGATIONS

3.1 Honor all Nuqta user transactions and reward redemptions.
3.2 Display Nuqta promotional materials at point of sale.
3.3 Provide accurate transaction data through POS integration or manual entry.
3.4 Maintain service quality standards consistent with Nuqta brand values.
3.5 Not discriminate against Nuqta users versus other customers.

4. NUQTA OBLIGATIONS

4.1 Provide access to merchant dashboard and analytics.
4.2 Process user payments and settle merchant funds within T+2 days.
4.3 Promote Merchant on Nuqta platform and marketing channels.
4.4 Provide technical support for platform integration.
4.5 Issue Nuqta Coins to users for Qualifying Transactions.

5. PAYMENT TERMS

5.1 Settlement: Nuqta will remit (100% - Commission) of Qualifying Transaction value to Merchant.
5.2 Settlement Cycle: T+2 business days via bank transfer.
5.3 Invoicing: Monthly statements provided by 5th of following month.
5.4 Currency: All amounts in UAE Dirhams (AED).

6. TERM AND TERMINATION

6.1 Initial Term: 12 months from Effective Date.
6.2 Renewal: Auto-renewal for successive 12-month periods unless terminated.
6.3 Termination for Convenience: Either party may terminate with 30 days written notice.
6.4 Termination for Cause: Immediate termination for material breach, fraud, or illegal activity.

7. DATA PROTECTION

7.1 Both parties shall comply with UAE Personal Data Protection Law (PDPL).
7.2 Nuqta may share anonymized, aggregated transaction data with Merchant.
7.3 Merchant shall not use user data for purposes outside this Agreement.

8. INTELLECTUAL PROPERTY

8.1 Each party retains ownership of its pre-existing intellectual property.
8.2 Merchant grants Nuqta license to use Merchant's logo and name for promotional purposes.
8.3 Nuqta grants Merchant license to use Nuqta branding per brand guidelines.

9. LIMITATION OF LIABILITY

9.1 Neither party shall be liable for indirect, consequential, or punitive damages.
9.2 Total liability shall not exceed fees paid/received in preceding 12 months.

10. GOVERNING LAW

10.1 This Agreement shall be governed by the laws of the United Arab Emirates.
10.2 Disputes shall be resolved through arbitration in Dubai, UAE.

11. GENERAL PROVISIONS

11.1 Entire Agreement: This Agreement constitutes the entire understanding between the parties.
11.2 Amendments: Modifications must be in writing and signed by both parties.
11.3 Assignment: Neither party may assign without prior written consent.
11.4 Notices: All notices shall be in writing to the addresses above.

IN WITNESS WHEREOF, the parties have executed this Agreement as of the Effective Date.

FOR NUQTA TECHNOLOGIES LLC:

_____________________________
Name: [AUTHORIZED SIGNATORY]
Title: [TITLE]
Date: _______________

FOR [MERCHANT LEGAL NAME]:

_____________________________
Name: [AUTHORIZED SIGNATORY]
Title: [TITLE]
Date: _______________

Trade License No: _______________

SCHEDULE A: COMMERCIAL TERMS

Commission Rate: ______%
Package Selected: _______________
Monthly Fee: AED _______________
Effective Date: _______________
Locations Covered: _______________`;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-white mb-2">Engine A: High-Margin Merchant Agreement</h2>
          <p className="text-slate-400">For F&B, Salons, Entertainment, Boutiques (40-70% margin)</p>
        </div>
        <button
          onClick={() => copyToClipboard(fullContract, 'full-a')}
          className="flex items-center gap-2 px-4 py-2 bg-[#c9a227] text-black font-semibold rounded-lg hover:bg-[#d4af37] transition-colors"
        >
          {copiedSection === 'full-a' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copiedSection === 'full-a' ? 'Copied!' : 'Copy Full Contract'}
        </button>
      </div>

      {/* Key Terms Summary */}
      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
        <h3 className="text-lg font-bold text-emerald-400 mb-4">Key Terms Summary</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-slate-800/50 rounded-lg p-3">
            <p className="text-xs text-slate-400">Commission</p>
            <p className="text-lg font-bold text-white">15-20%</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-3">
            <p className="text-xs text-slate-400">Settlement</p>
            <p className="text-lg font-bold text-white">T+2 Days</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-3">
            <p className="text-xs text-slate-400">Initial Term</p>
            <p className="text-lg font-bold text-white">12 Months</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-3">
            <p className="text-xs text-slate-400">Notice Period</p>
            <p className="text-lg font-bold text-white">30 Days</p>
          </div>
        </div>
      </div>

      {/* Contract Preview */}
      <div className="bg-slate-800/30 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white">Contract Preview</h3>
          <Download className="w-5 h-5 text-slate-400" />
        </div>
        <div className="bg-slate-900 rounded-lg p-6 max-h-[600px] overflow-y-auto">
          <pre className="text-sm text-slate-300 whitespace-pre-wrap font-mono">
            {fullContract}
          </pre>
        </div>
      </div>

      {/* Usage Notes */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 mt-1" />
          <div>
            <h4 className="font-bold text-amber-400 mb-2">Important Notes</h4>
            <ul className="text-sm text-slate-300 space-y-1">
              <li>• Replace all [BRACKETED] placeholders with actual information</li>
              <li>• Have legal counsel review before signing</li>
              <li>• Ensure trade license covers the business activities</li>
              <li>• Keep signed copies for both parties</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MERCHANT B TEMPLATE (Low-Margin)
// ============================================
function MerchantBTemplate({ copyToClipboard, copiedSection }: TemplateProps) {
  const fullContract = `MERCHANT PARTNER AGREEMENT - ENGINE B (LOW-MARGIN)

This Merchant Partner Agreement ("Agreement") is entered into as of [DATE] ("Effective Date")

BETWEEN:

NUQTA TECHNOLOGIES LLC
[Freezone Address]
United Arab Emirates
("Nuqta" or "Platform")

AND:

[MERCHANT LEGAL NAME]
Trade License No: [LICENSE NUMBER]
Address: [MERCHANT ADDRESS]
United Arab Emirates
("Merchant" or "Partner")

RECITALS:

A. Nuqta operates a mobile loyalty and rewards platform in the UAE.
B. Merchant operates a [BUSINESS TYPE: Supermarket/Electronics/Gold/Pharmacy] business with industry-standard margins.
C. The parties wish to establish partnership terms optimized for low-margin retail operations.

1. PARTNERSHIP TERMS

1.1 Commission Structure (Low-Margin Optimized):
   - Standard Rate: [5-8]% of Qualifying Transaction value
   - Breakdown: [X]% Nuqta platform fee, [Y]% user rewards pool

1.2 This reduced commission reflects:
   - Lower merchant margins (8-20%)
   - Higher transaction volumes
   - Essential category positioning

2. MERCHANT CATEGORY

□ Supermarkets & Hypermarkets
□ Electronics & Appliances
□ Gold & Jewelry
□ Pharmacy & Health
□ Grocery & Essentials
□ Other: _______________

3. VOLUME INCENTIVES

3.1 Monthly GMV Tiers:
   - AED 0 - 100,000: Standard rate
   - AED 100,001 - 500,000: 0.5% reduction
   - AED 500,001+: 1% reduction (floor rate applies)

3.2 Floor Rate: Commission shall not fall below [4]%.

4. MERCHANT OBLIGATIONS

4.1 Honor all Nuqta transactions at all checkout points.
4.2 Train staff on Nuqta payment acceptance.
4.3 Integrate POS system with Nuqta platform.
4.4 Display Nuqta acceptance signage.
4.5 Participate in minimum 2 promotional campaigns annually.

5. NUQTA OBLIGATIONS

5.1 Provide POS integration support.
5.2 Process settlements within T+2 business days.
5.3 Feature Merchant in "Essentials" category of app.
5.4 Provide transaction analytics and insights.

6. PAYMENT TERMS

6.1 Settlement: (100% - Commission) of transaction value.
6.2 Settlement Cycle: T+2 business days.
6.3 Minimum Payout: AED 500 (smaller amounts roll over).
6.4 Reconciliation: Weekly transaction reports provided.

7. TERM AND TERMINATION

7.1 Initial Term: 12 months from Effective Date.
7.2 Renewal: Auto-renewal unless terminated with 30 days notice.
7.3 Early Termination Fee: None if volume commitments met.

8. DATA AND ANALYTICS

8.1 Nuqta provides:
   - Daily transaction summaries
   - Customer demographics (anonymized)
   - Peak shopping time analysis
   - Basket size trends

9. GOVERNING LAW

This Agreement shall be governed by UAE law. Disputes resolved through Dubai arbitration.

SIGNATURES:

FOR NUQTA TECHNOLOGIES LLC:
_____________________________
Name: [AUTHORIZED SIGNATORY]
Date: _______________

FOR [MERCHANT LEGAL NAME]:
_____________________________
Name: [AUTHORIZED SIGNATORY]
Date: _______________

SCHEDULE A: COMMERCIAL TERMS

Commission Rate: ______%
Merchant Category: _______________
Estimated Monthly GMV: AED _______________
Number of Locations: _______________
POS System: _______________`;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-white mb-2">Engine B: Low-Margin Merchant Agreement</h2>
          <p className="text-slate-400">For Supermarkets, Electronics, Gold, Pharmacy (8-20% margin)</p>
        </div>
        <button
          onClick={() => copyToClipboard(fullContract, 'full-b')}
          className="flex items-center gap-2 px-4 py-2 bg-[#c9a227] text-black font-semibold rounded-lg hover:bg-[#d4af37] transition-colors"
        >
          {copiedSection === 'full-b' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copiedSection === 'full-b' ? 'Copied!' : 'Copy Full Contract'}
        </button>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
        <h3 className="text-lg font-bold text-blue-400 mb-4">Key Terms Summary</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-slate-800/50 rounded-lg p-3">
            <p className="text-xs text-slate-400">Commission</p>
            <p className="text-lg font-bold text-white">5-8%</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-3">
            <p className="text-xs text-slate-400">Volume Discount</p>
            <p className="text-lg font-bold text-white">Up to 1%</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-3">
            <p className="text-xs text-slate-400">Floor Rate</p>
            <p className="text-lg font-bold text-white">4%</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-3">
            <p className="text-xs text-slate-400">Min Payout</p>
            <p className="text-lg font-bold text-white">AED 500</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-800/30 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white">Contract Preview</h3>
          <Download className="w-5 h-5 text-slate-400" />
        </div>
        <div className="bg-slate-900 rounded-lg p-6 max-h-[600px] overflow-y-auto">
          <pre className="text-sm text-slate-300 whitespace-pre-wrap font-mono">
            {fullContract}
          </pre>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MERCHANT C TEMPLATE (Events)
// ============================================
function MerchantCTemplate({ copyToClipboard, copiedSection }: TemplateProps) {
  const fullContract = `EVENT PARTNERSHIP AGREEMENT - ENGINE C

This Event Partnership Agreement ("Agreement") is entered into as of [DATE]

BETWEEN:

NUQTA TECHNOLOGIES LLC
[Freezone Address], UAE
("Nuqta")

AND:

[EVENT ORGANIZER NAME]
Trade License No: [LICENSE NUMBER]
("Event Partner")

REGARDING:

Event Name: [EVENT NAME]
Event Dates: [START DATE] to [END DATE]
Location: [VENUE]
Expected Attendance: [NUMBER] visitors

1. PARTNERSHIP MODEL

1.1 Coin Distribution Model:
   - Nuqta provides [X] coins per event visitor
   - Visitors receive coins upon check-in via Nuqta app
   - Coins redeemable at participating event vendors

1.2 Financial Arrangement:
   Option A: □ Revenue Share ([X]% of vendor transactions)
   Option B: □ Flat Fee (AED [AMOUNT] for coin sponsorship)
   Option C: □ Hybrid (AED [BASE] + [X]% of transactions)

2. NUQTA DELIVERABLES

2.1 Pre-Event:
   - Custom event landing page in Nuqta app
   - Social media promotion (min. 3 posts)
   - Push notifications to UAE user base
   - QR code check-in system setup

2.2 During Event:
   - On-site technical support
   - Real-time transaction monitoring
   - User acquisition booth (optional)
   - Gamification features (spin wheel, challenges)

2.3 Post-Event:
   - Transaction analytics report
   - User acquisition metrics
   - Vendor performance breakdown

3. EVENT PARTNER DELIVERABLES

3.1 Nuqta branding at event entrance
3.2 Dedicated booth space (min. 3x3m)
3.3 Logo placement in event marketing
3.4 Vendor onboarding coordination
3.5 Check-in integration at entry points

4. VENDOR PARTICIPATION

4.1 Minimum [X] vendors must participate
4.2 Vendor commission: [10-15]% during event
4.3 Event Partner assists with vendor onboarding
4.4 Vendors receive same-day settlement

5. USER ACQUISITION

5.1 Target: [X] new Nuqta user registrations
5.2 Incentive: [X] bonus coins for new signups
5.3 Event Partner promotes Nuqta download

6. EXCLUSIVITY

6.1 Nuqta is exclusive loyalty/rewards partner for the event
6.2 No competing loyalty programs permitted
6.3 Exclusivity limited to event dates only

7. FINANCIAL TERMS

7.1 Upfront Payment: AED [AMOUNT] due before event
7.2 Performance Payment: [X]% of GMV, settled within 14 days post-event
7.3 Minimum Guarantee: AED [AMOUNT] (if applicable)

8. CANCELLATION

8.1 Event cancellation: Full refund of upfront payments
8.2 Nuqta withdrawal: [30] days notice required
8.3 Force majeure provisions apply

9. DATA SHARING

9.1 Nuqta shares:
   - Total transactions processed
   - Popular vendors/categories
   - Peak activity times

9.2 Event Partner receives:
   - Anonymized visitor insights
   - Spending pattern analysis

10. TERM

This Agreement covers the specified event dates only. Future events require separate agreements.

SIGNATURES:

FOR NUQTA TECHNOLOGIES LLC:
_____________________________
Date: _______________

FOR [EVENT PARTNER]:
_____________________________
Date: _______________

SCHEDULE A: EVENT DETAILS

Event Name: _______________
Dates: _______________
Venue: _______________
Expected Visitors: _______________
Participating Vendors: _______________
Coins Per Visitor: _______________
Total Coin Budget: _______________`;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-white mb-2">Engine C: Event Partnership Agreement</h2>
          <p className="text-slate-400">For Exhibitions, Festivals, Corporate Events</p>
        </div>
        <button
          onClick={() => copyToClipboard(fullContract, 'full-c')}
          className="flex items-center gap-2 px-4 py-2 bg-[#c9a227] text-black font-semibold rounded-lg hover:bg-[#d4af37] transition-colors"
        >
          {copiedSection === 'full-c' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copiedSection === 'full-c' ? 'Copied!' : 'Copy Full Contract'}
        </button>
      </div>

      <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
        <h3 className="text-lg font-bold text-purple-400 mb-4">Key Terms Summary</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-slate-800/50 rounded-lg p-3">
            <p className="text-xs text-slate-400">Model</p>
            <p className="text-lg font-bold text-white">Coin Distribution</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-3">
            <p className="text-xs text-slate-400">Vendor Commission</p>
            <p className="text-lg font-bold text-white">10-15%</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-3">
            <p className="text-xs text-slate-400">Settlement</p>
            <p className="text-lg font-bold text-white">Same Day</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-3">
            <p className="text-xs text-slate-400">Exclusivity</p>
            <p className="text-lg font-bold text-white">Event Period</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-800/30 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white">Contract Preview</h3>
          <Download className="w-5 h-5 text-slate-400" />
        </div>
        <div className="bg-slate-900 rounded-lg p-6 max-h-[600px] overflow-y-auto">
          <pre className="text-sm text-slate-300 whitespace-pre-wrap font-mono">
            {fullContract}
          </pre>
        </div>
      </div>
    </div>
  );
}

// ============================================
// CORPORATE TEMPLATE
// ============================================
function CorporateTemplate({ copyToClipboard, copiedSection }: TemplateProps) {
  const fullContract = `CORPORATE REWARDS PARTNERSHIP AGREEMENT

This Corporate Partnership Agreement ("Agreement") is entered into as of [DATE]

BETWEEN:

NUQTA TECHNOLOGIES LLC
("Nuqta")

AND:

[CORPORATE NAME]
("Corporate Partner")

1. PROGRAM OVERVIEW

Corporate Partner wishes to implement Nuqta as an employee rewards and recognition platform for its workforce.

Employee Count: [NUMBER]
Locations: [UAE/GCC]

2. PARTNERSHIP MODELS

Option A: □ EMPLOYEE REWARDS PROGRAM
- Nuqta coins as employee incentives
- Monthly coin allocation per employee
- Redemption at 1,000+ UAE merchants

Option B: □ CORPORATE GIFTING
- Bulk coin purchases for gifting
- Customized digital gift cards
- Special occasions & milestones

Option C: □ WHITE-LABEL SOLUTION (Enterprise)
- Custom-branded rewards platform
- Integration with HR systems
- Dedicated account management

3. PRICING

3.1 Employee Rewards Program:
   - Per Employee Fee: AED [X]/month
   - Minimum commitment: [100] employees
   - Annual contract with monthly billing

3.2 Coin Purchases:
   - 1 Coin = AED 0.01 face value
   - Bulk discount: 10%+ at 100,000 coins
   - Corporate discount: 15%+ at 500,000 coins

3.3 White-Label:
   - Setup Fee: AED [X]
   - Monthly Platform Fee: AED [X]
   - Transaction Fee: [X]%

4. NUQTA DELIVERABLES

4.1 Dedicated corporate portal
4.2 Employee onboarding support
4.3 Monthly usage reports
4.4 Quarterly business reviews
4.5 24/7 support for employees

5. CORPORATE PARTNER OBLIGATIONS

5.1 Promote program internally
5.2 Provide employee data for onboarding
5.3 Designate program administrator
5.4 Meet minimum volume commitments

6. DATA PROTECTION

6.1 Employee data handled per UAE PDPL
6.2 Data used only for program administration
6.3 No third-party data sharing without consent

7. TERM

7.1 Initial Term: 12 months
7.2 Renewal: Annual auto-renewal
7.3 Termination: 60 days written notice

8. PAYMENT TERMS

8.1 Monthly invoicing, NET 30
8.2 Late payment: 1.5% monthly interest
8.3 Annual prepay discount: 10%

SIGNATURES:

FOR NUQTA TECHNOLOGIES LLC:
_____________________________
Date: _______________

FOR [CORPORATE PARTNER]:
_____________________________
Date: _______________

SCHEDULE A: PROGRAM DETAILS

Program Type: _______________
Employee Count: _______________
Monthly Coin Allocation: _______________
Monthly Fee: AED _______________
Start Date: _______________`;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-white mb-2">Corporate Partnership Agreement</h2>
          <p className="text-slate-400">For Employee Rewards & Corporate Gifting Programs</p>
        </div>
        <button
          onClick={() => copyToClipboard(fullContract, 'full-corp')}
          className="flex items-center gap-2 px-4 py-2 bg-[#c9a227] text-black font-semibold rounded-lg hover:bg-[#d4af37] transition-colors"
        >
          {copiedSection === 'full-corp' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copiedSection === 'full-corp' ? 'Copied!' : 'Copy Full Contract'}
        </button>
      </div>

      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
        <h3 className="text-lg font-bold text-amber-400 mb-4">Program Options</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-bold text-white mb-2">Employee Rewards</h4>
            <p className="text-sm text-slate-400">Monthly coin allocation for recognition & incentives</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-bold text-white mb-2">Corporate Gifting</h4>
            <p className="text-sm text-slate-400">Bulk coins for milestones & special occasions</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-bold text-white mb-2">White-Label</h4>
            <p className="text-sm text-slate-400">Custom-branded platform for enterprise</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-800/30 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white">Contract Preview</h3>
          <Download className="w-5 h-5 text-slate-400" />
        </div>
        <div className="bg-slate-900 rounded-lg p-6 max-h-[600px] overflow-y-auto">
          <pre className="text-sm text-slate-300 whitespace-pre-wrap font-mono">
            {fullContract}
          </pre>
        </div>
      </div>
    </div>
  );
}

// ============================================
// CO-PARTNER TEMPLATE
// ============================================
function CoPartnerTemplate({ copyToClipboard, copiedSection }: TemplateProps) {
  const fullContract = `CO-PARTNER BRAND INVESTMENT AGREEMENT

This Co-Partner Brand Agreement ("Agreement") is entered into as of [DATE]

BETWEEN:

NUQTA TECHNOLOGIES LLC
("Nuqta")

AND:

[BRAND/INVESTOR NAME]
("Co-Partner")

RECITALS:

A. Nuqta has developed a loyalty and rewards platform in the UAE.
B. Co-Partner wishes to invest in and partner with Nuqta for a dedicated brand vertical.
C. This Agreement establishes the equity investment and partnership terms.

1. INVESTMENT TERMS

1.1 Investment Amount: AED 50,000 (Fifty Thousand Dirhams)

1.2 Equity Stake: 50% of the dedicated brand vertical/sub-entity

1.3 Structure: Joint venture or subsidiary focused on [VERTICAL]

1.4 Payment Schedule:
   - 50% upon signing: AED 25,000
   - 50% upon launch: AED 25,000

2. BRAND VERTICAL

2.1 Dedicated Vertical: [SPECIFY - e.g., "Coffee & Cafe", "Fitness", "Fashion"]

2.2 Scope:
   - Exclusive category management
   - Dedicated merchant onboarding
   - Category-specific marketing
   - Revenue from vertical transactions

3. REVENUE SHARING

3.1 Revenue from vertical transactions split:
   - Nuqta: 50%
   - Co-Partner: 50%

3.2 Revenue includes:
   - Merchant commissions
   - Advertising revenue
   - Data insights revenue

3.3 Distributions: Quarterly, within 30 days of quarter end

4. GOVERNANCE

4.1 Board: 2 members from each party
4.2 Major decisions require unanimous consent:
   - Capital calls
   - New merchant categories
   - Exit/sale decisions

4.3 Day-to-day operations managed by Nuqta

5. CO-PARTNER OBLIGATIONS

5.1 Contribute industry expertise and connections
5.2 Assist with merchant acquisition in vertical
5.3 Participate in strategic planning
5.4 Promote vertical through owned channels

6. NUQTA OBLIGATIONS

6.1 Provide platform infrastructure
6.2 Handle technical operations
6.3 Process payments and settlements
6.4 Provide quarterly financial reports

7. EXCLUSIVITY

7.1 Nuqta grants Co-Partner exclusive rights to the vertical in UAE
7.2 Co-Partner may not invest in competing platforms
7.3 Exclusivity term: 24 months, renewable

8. EXIT PROVISIONS

8.1 Lock-up Period: 24 months from investment date
8.2 Right of First Refusal: Each party has ROFR on other's stake
8.3 Tag-Along Rights: Co-Partner may join any Nuqta sale
8.4 Drag-Along Rights: Majority can compel sale if >$50M offer

9. INTELLECTUAL PROPERTY

9.1 Nuqta retains all platform IP
9.2 Co-Partner contributes vertical branding
9.3 Joint ownership of vertical-specific developments

10. TERM

10.1 Initial Term: 36 months
10.2 Renewal: Mutual agreement required
10.3 Termination: Material breach with 60-day cure period

11. REPRESENTATIONS

11.1 Each party has authority to enter this Agreement
11.2 No conflicts with existing obligations
11.3 Compliance with applicable laws

12. GOVERNING LAW

UAE law governs. Disputes resolved through Dubai arbitration.

SIGNATURES:

FOR NUQTA TECHNOLOGIES LLC:
_____________________________
Name: _______________
Title: _______________
Date: _______________

FOR [CO-PARTNER]:
_____________________________
Name: _______________
Title: _______________
Date: _______________

SCHEDULE A: INVESTMENT DETAILS

Investment Amount: AED 50,000
Equity Percentage: 50%
Brand Vertical: _______________
First Payment Due: _______________
Launch Target Date: _______________

SCHEDULE B: REVENUE SHARING

Nuqta Share: 50%
Co-Partner Share: 50%
Distribution Frequency: Quarterly
Minimum Distribution: AED 1,000`;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-white mb-2">Co-Partner Brand Investment Agreement</h2>
          <p className="text-slate-400">AED 50,000 investment for 50% equity in brand vertical</p>
        </div>
        <button
          onClick={() => copyToClipboard(fullContract, 'full-copartner')}
          className="flex items-center gap-2 px-4 py-2 bg-[#c9a227] text-black font-semibold rounded-lg hover:bg-[#d4af37] transition-colors"
        >
          {copiedSection === 'full-copartner' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copiedSection === 'full-copartner' ? 'Copied!' : 'Copy Full Contract'}
        </button>
      </div>

      <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-6">
        <h3 className="text-lg font-bold text-pink-400 mb-4">Investment Summary</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-slate-800/50 rounded-lg p-3">
            <p className="text-xs text-slate-400">Investment</p>
            <p className="text-lg font-bold text-white">AED 50,000</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-3">
            <p className="text-xs text-slate-400">Equity</p>
            <p className="text-lg font-bold text-white">50%</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-3">
            <p className="text-xs text-slate-400">Revenue Share</p>
            <p className="text-lg font-bold text-white">50/50</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-3">
            <p className="text-xs text-slate-400">Lock-up</p>
            <p className="text-lg font-bold text-white">24 Months</p>
          </div>
        </div>
      </div>

      {/* Potential Verticals */}
      <div className="bg-slate-800/30 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">Potential Brand Verticals</h3>
        <div className="grid md:grid-cols-4 gap-3">
          {[
            'Coffee & Cafes',
            'Fitness & Gyms',
            'Fashion & Apparel',
            'Beauty & Wellness',
            'Home Services',
            'Auto & Transport',
            'Pet Services',
            'Education & Learning',
          ].map((vertical) => (
            <div key={vertical} className="bg-slate-700/50 rounded-lg p-3 text-center">
              <p className="text-sm text-slate-300">{vertical}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-800/30 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white">Contract Preview</h3>
          <Download className="w-5 h-5 text-slate-400" />
        </div>
        <div className="bg-slate-900 rounded-lg p-6 max-h-[600px] overflow-y-auto">
          <pre className="text-sm text-slate-300 whitespace-pre-wrap font-mono">
            {fullContract}
          </pre>
        </div>
      </div>
    </div>
  );
}
