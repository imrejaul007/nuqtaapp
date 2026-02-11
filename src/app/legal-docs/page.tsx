'use client';

import React, { useState } from 'react';
import {
  FileText,
  Shield,
  Scale,
  Users,
  Store,
  Building2,
  CheckCircle,
  AlertTriangle,
  Copy,
  Download,
  Eye,
  Edit3,
  Briefcase,
  Lock,
  Globe,
  Clock,
  DollarSign,
  UserCheck,
  Handshake,
  ScrollText,
  Gavel,
  FileCheck,
  AlertCircle
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

/**
 * NUQTA LEGAL DOCUMENTS
 * =====================
 * Comprehensive legal templates and contracts
 */

export default function LegalDocsPage() {
  const [activeTab, setActiveTab] = useState('merchant-contracts');
  const [expandedDoc, setExpandedDoc] = useState<string | null>(null);

  const tabs = [
    { id: 'merchant-contracts', label: 'Merchant Contracts', icon: Store },
    { id: 'user-agreements', label: 'User Agreements', icon: Users },
    { id: 'privacy-policy', label: 'Privacy & Data', icon: Lock },
    { id: 'employee-docs', label: 'Employee Docs', icon: Briefcase },
    { id: 'compliance', label: 'Compliance', icon: Shield },
  ];

  // Merchant Contract Templates
  const merchantContracts = [
    {
      id: 'merchant-mou',
      title: 'Merchant Partnership MoU',
      description: 'Initial memorandum of understanding for merchant partnerships',
      status: 'template',
      sections: [
        {
          title: '1. Parties',
          content: `This Memorandum of Understanding ("MoU") is entered into as of [DATE] by and between:

**Nuqta Technologies LLC** ("Nuqta"), a company incorporated under the laws of the United Arab Emirates, with its registered office at [ADDRESS], Dubai, UAE.

AND

**[MERCHANT NAME]** ("Merchant"), a company incorporated under the laws of [JURISDICTION], with its registered office at [ADDRESS].

(collectively referred to as the "Parties" and individually as a "Party")`
        },
        {
          title: '2. Purpose',
          content: `The purpose of this MoU is to establish the framework for a commercial partnership whereby:

a) Nuqta will list the Merchant on its mobile application and website ("Platform")
b) Merchant will offer exclusive cashback rewards to Nuqta users
c) Both Parties will collaborate on marketing and promotional activities
d) This MoU is non-binding and serves as a precursor to a definitive agreement`
        },
        {
          title: '3. Merchant Obligations',
          content: `The Merchant agrees to:

a) Honor all cashback offers displayed on the Nuqta Platform
b) Accept Nuqta QR code payments at point of sale
c) Train staff on Nuqta payment and reward processes
d) Provide accurate business information for Platform listing
e) Maintain quality standards consistent with Platform requirements
f) Report sales data through the Nuqta merchant dashboard
g) Pay commissions as agreed in the Commercial Terms`
        },
        {
          title: '4. Nuqta Obligations',
          content: `Nuqta agrees to:

a) List the Merchant prominently on the Platform
b) Provide merchant dashboard access for analytics and management
c) Process user transactions and manage cashback rewards
d) Provide marketing support as per agreed package
e) Handle customer support for Platform-related queries
f) Remit payments to Merchant as per agreed schedule
g) Maintain Platform security and user data protection`
        },
        {
          title: '5. Commercial Terms',
          content: `Commission Structure:
- Commission Rate: [X]% of transaction value
- User Cashback: [Y]% (funded from commission)
- Nuqta Fee: [Z]% (retained by Nuqta)

Payment Terms:
- Settlement Period: [Weekly/Bi-weekly/Monthly]
- Payment Method: Bank transfer to designated account
- Invoice: Nuqta will provide detailed transaction reports

Minimum Commitment:
- Minimum Monthly GMV: AED [AMOUNT] (if applicable)
- Exclusivity: [Yes/No] for [CATEGORY] within [RADIUS]`
        },
        {
          title: '6. Term and Termination',
          content: `a) Initial Term: This MoU shall be effective for a period of [X] months from the date of execution.

b) Renewal: The MoU shall automatically renew for successive [X]-month periods unless terminated.

c) Termination for Convenience: Either Party may terminate this MoU by providing [30] days written notice.

d) Termination for Cause: Either Party may terminate immediately upon material breach by the other Party.

e) Effect of Termination: Upon termination, all pending transactions shall be settled within [15] business days.`
        },
        {
          title: '7. Confidentiality',
          content: `Both Parties agree to maintain the confidentiality of:

a) Commercial terms and pricing
b) Proprietary business information
c) Customer data and transaction details
d) Marketing strategies and plans

This obligation shall survive termination of this MoU for a period of [2] years.`
        },
        {
          title: '8. Governing Law',
          content: `This MoU shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising shall be resolved through:

a) Good faith negotiations between the Parties
b) If unresolved, mediation administered by DIAC (Dubai International Arbitration Centre)
c) Binding arbitration in Dubai if mediation fails`
        },
        {
          title: '9. Signatures',
          content: `IN WITNESS WHEREOF, the Parties have executed this MoU as of the date first written above.

**For Nuqta Technologies LLC:**

Name: _______________________
Title: _______________________
Date: _______________________
Signature: ___________________

**For [Merchant Name]:**

Name: _______________________
Title: _______________________
Date: _______________________
Signature: ___________________`
        }
      ]
    },
    {
      id: 'service-agreement',
      title: 'Merchant Service Agreement',
      description: 'Full legally binding service agreement for merchants',
      status: 'template',
      sections: [
        {
          title: '1. Definitions',
          content: `"Commission" means the percentage of GMV payable by Merchant to Nuqta
"GMV" means Gross Merchandise Value of transactions processed through the Platform
"Platform" means the Nuqta mobile application and related services
"User" means a registered user of the Nuqta Platform
"Cashback" means the reward amount credited to Users for qualifying transactions`
        },
        {
          title: '2. Services',
          content: `Nuqta shall provide the following services:

2.1 Platform Access
- Merchant profile on Nuqta app and website
- Merchant dashboard for transaction monitoring
- QR code payment acceptance integration

2.2 Marketing Services
- Featured placement (as per package tier)
- Push notifications to relevant users
- Social media promotion (as per package tier)

2.3 Payment Processing
- Transaction processing and settlement
- Cashback calculation and distribution
- Dispute resolution support`
        },
        {
          title: '3. Fees and Payment',
          content: `3.1 Commission: Merchant shall pay Nuqta a commission of [X]% on all GMV.

3.2 Subscription Fees: [If applicable] AED [AMOUNT] per month.

3.3 Settlement: Nuqta shall settle Merchant payments within [7] business days.

3.4 Deductions: Nuqta may deduct commissions, chargebacks, and adjustments.

3.5 Taxes: All fees are exclusive of VAT. Merchant is responsible for applicable taxes.`
        },
        {
          title: '4. Merchant Responsibilities',
          content: `Merchant shall:

4.1 Honor all advertised offers and cashback rates
4.2 Maintain proper licensing for business operations
4.3 Comply with all applicable UAE laws and regulations
4.4 Not engage in fraudulent or deceptive practices
4.5 Maintain product/service quality standards
4.6 Respond to customer complaints within 48 hours
4.7 Keep Nuqta informed of business changes`
        },
        {
          title: '5. Intellectual Property',
          content: `5.1 Nuqta IP: Nuqta retains all rights to Platform, trademarks, and technology.

5.2 Merchant IP: Merchant retains all rights to its brand and content.

5.3 License: Each Party grants the other a limited license to use its marks for Platform purposes.

5.4 User Data: Transaction data belongs to Nuqta; anonymized insights may be shared with Merchant.`
        },
        {
          title: '6. Liability and Indemnification',
          content: `6.1 Limitation: Neither Party shall be liable for indirect, consequential damages.

6.2 Cap: Total liability shall not exceed fees paid in the preceding 12 months.

6.3 Indemnification: Each Party shall indemnify the other against third-party claims arising from its breach.

6.4 Insurance: Merchant shall maintain adequate business insurance.`
        }
      ]
    }
  ];

  // User Agreements
  const userAgreements = [
    {
      id: 'terms-of-service',
      title: 'Terms of Service',
      description: 'User terms and conditions for Nuqta app usage',
      lastUpdated: '2026-01-15',
      sections: [
        {
          title: '1. Acceptance of Terms',
          content: `By downloading, accessing, or using the Nuqta mobile application ("App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.

Nuqta reserves the right to modify these Terms at any time. Continued use of the App constitutes acceptance of modified Terms.`
        },
        {
          title: '2. Eligibility',
          content: `To use Nuqta, you must:
- Be at least 18 years of age
- Be a resident of the United Arab Emirates
- Have a valid mobile phone number
- Provide accurate registration information
- Not have been previously suspended from the Platform`
        },
        {
          title: '3. Account Registration',
          content: `3.1 You must register an account to use Nuqta services.
3.2 You are responsible for maintaining account security.
3.3 You must not share account credentials with others.
3.4 You must notify Nuqta immediately of unauthorized access.
3.5 Nuqta may suspend accounts for suspected fraudulent activity.`
        },
        {
          title: '4. Nuqta Coins and Rewards',
          content: `4.1 Nuqta Coins are loyalty rewards, not currency or property.
4.2 Coins have no cash value and cannot be redeemed for cash.
4.3 Coins can only be used at participating merchants.
4.4 Unused coins expire [12] months from date of earning.
4.5 Nuqta may modify coin values or expiration at any time.
4.6 Coins are non-transferable except through approved gifting features.
4.7 Fraudulently obtained coins will be forfeited without compensation.`
        },
        {
          title: '5. Transactions',
          content: `5.1 All transactions are between you and the merchant.
5.2 Nuqta is not responsible for merchant products or services.
5.3 Disputes should first be addressed with the merchant directly.
5.4 Nuqta facilitates payment but is not a party to the sale.
5.5 Refunds are processed according to merchant policies.`
        },
        {
          title: '6. Prohibited Conduct',
          content: `You agree not to:
- Use the App for illegal purposes
- Attempt to manipulate or defraud the rewards system
- Create multiple accounts to abuse promotions
- Share account access with others
- Reverse engineer or hack the App
- Use automated tools to access the App
- Engage in abusive behavior toward merchants or support`
        },
        {
          title: '7. Termination',
          content: `7.1 You may delete your account at any time through the App.
7.2 Nuqta may suspend or terminate accounts for violations.
7.3 Upon termination, all unused coins are forfeited.
7.4 Sections on liability and disputes survive termination.`
        },
        {
          title: '8. Disclaimers',
          content: `THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND.

Nuqta does not guarantee:
- Continuous, uninterrupted service
- Accuracy of merchant information
- Availability of specific rewards or offers
- Compatibility with all devices`
        },
        {
          title: '9. Limitation of Liability',
          content: `TO THE MAXIMUM EXTENT PERMITTED BY LAW:

- Nuqta shall not be liable for indirect, incidental, or consequential damages
- Total liability shall not exceed AED 500 or the value of your transactions in the preceding 12 months, whichever is less
- Nuqta is not liable for merchant actions or product quality`
        },
        {
          title: '10. Governing Law',
          content: `These Terms are governed by UAE law. Disputes shall be resolved through:
1. Informal negotiation (30 days)
2. Mediation administered by Dubai Courts
3. Binding arbitration under DIAC rules`
        }
      ]
    },
    {
      id: 'user-privacy',
      title: 'Privacy Policy',
      description: 'How we collect, use, and protect user data',
      lastUpdated: '2026-01-15',
      sections: [
        {
          title: '1. Information We Collect',
          content: `Personal Information:
- Name, email, phone number
- Date of birth (for age verification)
- Emirates ID (for verification if required)
- Profile photo (optional)

Transaction Information:
- Purchase history and amounts
- Merchant interactions
- Rewards earned and redeemed

Device Information:
- Device type and operating system
- IP address and location data
- App usage analytics`
        },
        {
          title: '2. How We Use Information',
          content: `We use your information to:
- Provide and improve our services
- Process transactions and rewards
- Send relevant offers and notifications
- Prevent fraud and ensure security
- Comply with legal requirements
- Personalize your experience
- Conduct analytics and research`
        },
        {
          title: '3. Information Sharing',
          content: `We share information with:
- Merchants (transaction data only, anonymized)
- Payment processors (for transactions)
- Analytics providers (anonymized data)
- Legal authorities (when required by law)

We DO NOT:
- Sell your personal data to third parties
- Share your data for unrelated marketing
- Provide your contact info to merchants`
        },
        {
          title: '4. Data Security',
          content: `We protect your data through:
- End-to-end encryption for transactions
- Secure data centers in compliance with UAE regulations
- Regular security audits and penetration testing
- Access controls and employee training
- Incident response procedures`
        },
        {
          title: '5. Your Rights',
          content: `You have the right to:
- Access your personal data
- Correct inaccurate information
- Delete your account and data
- Opt-out of marketing communications
- Request data portability
- Lodge complaints with regulatory authorities`
        },
        {
          title: '6. Data Retention',
          content: `We retain data for:
- Active accounts: Duration of account plus 2 years
- Transaction records: 7 years (legal requirement)
- Marketing preferences: Until you opt-out
- Deleted accounts: 30 days, then permanently deleted`
        },
        {
          title: '7. Cookies and Tracking',
          content: `We use cookies and similar technologies for:
- Session management
- Fraud prevention
- Analytics and performance
- Personalization

You can manage cookie preferences in your device settings.`
        },
        {
          title: '8. Contact Us',
          content: `For privacy inquiries:
Email: privacy@nuqta.ae
Address: [Nuqta Address], Dubai, UAE
Data Protection Officer: dpo@nuqta.ae`
        }
      ]
    }
  ];

  // Employee Documents
  const employeeDocs = [
    {
      id: 'offer-letter',
      title: 'Employment Offer Letter Template',
      description: 'Standard offer letter for new hires',
      sections: [
        {
          title: 'Offer Letter',
          content: `[DATE]

[CANDIDATE NAME]
[ADDRESS]

Dear [CANDIDATE NAME],

We are pleased to offer you the position of [JOB TITLE] at Nuqta Technologies LLC ("Company"). This letter outlines the terms of your employment.

**Position:** [JOB TITLE]
**Department:** [DEPARTMENT]
**Reporting To:** [MANAGER NAME], [MANAGER TITLE]
**Start Date:** [DATE]
**Employment Type:** [Full-time/Part-time]
**Location:** [OFFICE ADDRESS], Dubai, UAE

**Compensation:**
- Base Salary: AED [AMOUNT] per month (gross)
- Annual Salary: AED [AMOUNT] (gross)
- Payment: Monthly, by bank transfer on [DATE] of each month

**Benefits:**
- Health insurance (individual + dependents as per policy)
- Annual leave: [X] working days per year
- Sick leave: As per UAE Labour Law
- Public holidays: As per UAE calendar

**Equity (if applicable):**
- Stock Options: [NUMBER] shares
- Vesting: 4-year vesting with 1-year cliff
- Exercise Price: As per ESOP plan

**Probation Period:**
Your employment will be subject to a probationary period of [3/6] months.

**Confidentiality:**
You will be required to sign our standard Confidentiality and IP Agreement.

**Visa Sponsorship:**
[If applicable] The Company will sponsor your UAE employment visa.

Please indicate your acceptance by signing below and returning this letter by [DATE].

We look forward to welcoming you to the Nuqta team!

Sincerely,

_______________________
[HR NAME]
Head of People Operations
Nuqta Technologies LLC

**ACCEPTANCE:**

I accept the offer of employment as described above.

_______________________     _____________
[CANDIDATE NAME]            Date`
        }
      ]
    },
    {
      id: 'nda',
      title: 'Non-Disclosure Agreement',
      description: 'Confidentiality agreement for employees and contractors',
      sections: [
        {
          title: 'Confidentiality Agreement',
          content: `NON-DISCLOSURE AND CONFIDENTIALITY AGREEMENT

This Agreement is entered into as of [DATE] between:

Nuqta Technologies LLC ("Company")
AND
[EMPLOYEE/CONTRACTOR NAME] ("Recipient")

1. DEFINITION OF CONFIDENTIAL INFORMATION

"Confidential Information" includes:
- Business plans, strategies, and financial information
- Product designs, features, and roadmaps
- Source code, algorithms, and technical specifications
- Customer and user data
- Merchant information and contracts
- Marketing plans and pricing strategies
- Employee information and compensation data
- Any information marked as confidential

2. OBLIGATIONS

Recipient agrees to:
- Keep all Confidential Information strictly confidential
- Use Confidential Information only for Company purposes
- Not disclose to any third party without written consent
- Return or destroy all materials upon termination
- Notify Company immediately of any unauthorized disclosure

3. EXCLUSIONS

This Agreement does not apply to information that:
- Is publicly available through no fault of Recipient
- Was known to Recipient before disclosure
- Is received from a third party without restrictions
- Is required to be disclosed by law

4. TERM

This Agreement remains in effect:
- During employment/engagement
- For [2] years after termination

5. REMEDIES

Recipient acknowledges that breach may cause irreparable harm and agrees that Company may seek injunctive relief in addition to other remedies.

6. GOVERNING LAW

This Agreement is governed by UAE law.

SIGNED:

Company: ___________________ Date: ___________
Recipient: __________________ Date: ___________`
        }
      ]
    },
    {
      id: 'ip-agreement',
      title: 'IP Assignment Agreement',
      description: 'Intellectual property assignment for employees',
      sections: [
        {
          title: 'IP Assignment',
          content: `INTELLECTUAL PROPERTY ASSIGNMENT AGREEMENT

1. ASSIGNMENT

Employee agrees that all Intellectual Property created during employment, including but not limited to:
- Software code and applications
- Designs and user interfaces
- Inventions and processes
- Documentation and content
- Trade secrets and know-how

shall be the sole and exclusive property of the Company.

2. WORK FOR HIRE

All works created within the scope of employment are "works for hire" under applicable law.

3. FURTHER ASSURANCE

Employee agrees to execute any documents necessary to confirm Company's ownership.

4. MORAL RIGHTS

Employee waives all moral rights to the extent permitted by law.

5. PRIOR INVENTIONS

Employee has disclosed all prior inventions in Exhibit A.

6. SURVIVAL

This Agreement survives termination of employment.`
        }
      ]
    }
  ];

  // Compliance Documents
  const complianceDocs = [
    {
      id: 'aml-policy',
      title: 'Anti-Money Laundering Policy',
      description: 'AML/KYC compliance framework',
      sections: [
        {
          title: 'AML Policy Overview',
          content: `1. PURPOSE

This policy establishes Nuqta's commitment to preventing money laundering and terrorist financing in compliance with UAE Federal Law No. 20 of 2018.

2. APPLICABILITY

This policy applies to all employees, contractors, merchants, and users of the Nuqta platform.

3. RISK-BASED APPROACH

Nuqta implements a risk-based approach to AML compliance:

LOW RISK:
- Standard user accounts with normal transaction patterns
- Verified merchants with established business history
- Transactions under AED 5,000

MEDIUM RISK:
- High-volume users
- New merchants without extensive history
- Transactions between AED 5,000-25,000

HIGH RISK:
- Unusual transaction patterns
- High-value transactions over AED 25,000
- Users/merchants flagged by screening

4. KNOW YOUR CUSTOMER (KYC)

User KYC Requirements:
- Phone number verification
- Emirates ID verification (for high-value transactions)
- Address verification (for premium accounts)

Merchant KYC Requirements:
- Trade license verification
- Beneficial ownership identification
- Bank account verification
- Site visit (for high-risk categories)

5. TRANSACTION MONITORING

Nuqta monitors for:
- Unusual transaction patterns
- Rapid movement of funds
- Transactions inconsistent with user profile
- Structuring to avoid reporting thresholds

6. REPORTING

Suspicious Activity Reports (SARs) are filed with the UAE Financial Intelligence Unit (FIU) for:
- Suspected money laundering
- Terrorist financing indicators
- Fraud or unusual activity

7. RECORD KEEPING

Records maintained for 5 years:
- Customer identification documents
- Transaction records
- SAR filings and supporting documentation

8. TRAINING

All employees receive annual AML training.`
        }
      ]
    },
    {
      id: 'data-protection',
      title: 'Data Protection Policy',
      description: 'PDPL compliance and data handling procedures',
      sections: [
        {
          title: 'Data Protection Framework',
          content: `1. LEGAL BASIS

Nuqta processes personal data in compliance with:
- UAE Federal Decree-Law No. 45 of 2021 (Personal Data Protection Law)
- DIFC Data Protection Law
- Industry best practices

2. DATA PROCESSING PRINCIPLES

We adhere to:
- Lawfulness, fairness, and transparency
- Purpose limitation
- Data minimization
- Accuracy
- Storage limitation
- Integrity and confidentiality
- Accountability

3. LAWFUL BASIS FOR PROCESSING

We process data based on:
- User consent (marketing communications)
- Contract performance (service delivery)
- Legal obligations (AML compliance)
- Legitimate interests (fraud prevention)

4. DATA SUBJECT RIGHTS

We respect rights to:
- Access personal data
- Rectification of inaccurate data
- Erasure ("right to be forgotten")
- Restrict processing
- Data portability
- Object to processing

5. DATA TRANSFERS

Cross-border transfers only to jurisdictions with adequate protection or with appropriate safeguards.

6. DATA BREACH RESPONSE

In case of breach:
- Immediate containment and assessment
- Notification to authorities within 72 hours
- User notification if high risk
- Documentation and remediation

7. DATA PROTECTION OFFICER

Contact: dpo@nuqta.ae`
        }
      ]
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  const renderDocumentSection = (doc: { id: string; title: string; description: string; sections: { title: string; content: string }[] }) => (
    <div key={doc.id} className="bg-[#0a1628] rounded-xl border border-gray-800 overflow-hidden">
      <div
        className="p-6 cursor-pointer hover:bg-gray-800/30 transition-colors"
        onClick={() => setExpandedDoc(expandedDoc === doc.id ? null : doc.id)}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#c9a227]/20 rounded-xl">
              <FileText className="w-6 h-6 text-[#c9a227]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{doc.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{doc.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                copyToClipboard(doc.sections.map(s => `${s.title}\n\n${s.content}`).join('\n\n---\n\n'));
              }}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              title="Copy to clipboard"
            >
              <Copy className="w-4 h-4 text-gray-400" />
            </button>
            <div className={`transform transition-transform ${expandedDoc === doc.id ? 'rotate-180' : ''}`}>
              <Eye className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {expandedDoc === doc.id && (
        <div className="border-t border-gray-800 p-6 bg-gray-900/30">
          <div className="space-y-6">
            {doc.sections.map((section, idx) => (
              <div key={idx} className="bg-gray-800/30 rounded-lg p-4">
                <h4 className="text-[#c9a227] font-semibold mb-3">{section.title}</h4>
                <pre className="text-gray-300 text-sm whitespace-pre-wrap font-sans leading-relaxed">
                  {section.content}
                </pre>
              </div>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            <button
              onClick={() => copyToClipboard(doc.sections.map(s => `${s.title}\n\n${s.content}`).join('\n\n---\n\n'))}
              className="flex items-center gap-2 px-4 py-2 bg-[#c9a227] text-[#0a1628] rounded-lg font-medium hover:bg-[#e8c547] transition-colors"
            >
              <Copy className="w-4 h-4" />
              Copy Full Document
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a1628] via-[#1a2d4a] to-[#0a1628] border-b border-[#c9a227]/20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-[#c9a227]/20 rounded-xl">
              <Scale className="w-8 h-8 text-[#c9a227]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Legal Documents</h1>
              <p className="text-gray-400">Contracts, Agreements & Compliance Templates</p>
            </div>
          </div>

          {/* Warning */}
          <div className="mt-6 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" />
              <div>
                <p className="text-yellow-400 font-medium">Legal Disclaimer</p>
                <p className="text-gray-400 text-sm mt-1">
                  These templates are for reference only and should be reviewed by qualified legal counsel before use.
                  Laws and regulations may change; ensure compliance with current UAE regulations.
                </p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mt-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#c9a227] text-[#0a1628] font-bold'
                    : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800'
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
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Merchant Contracts Tab */}
        {activeTab === 'merchant-contracts' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Store className="w-5 h-5 text-[#c9a227]" />
                Merchant Contract Templates
              </h2>
            </div>
            {merchantContracts.map(renderDocumentSection)}
          </div>
        )}

        {/* User Agreements Tab */}
        {activeTab === 'user-agreements' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Users className="w-5 h-5 text-[#c9a227]" />
                User Agreements
              </h2>
            </div>
            {userAgreements.map(renderDocumentSection)}
          </div>
        )}

        {/* Privacy & Data Tab */}
        {activeTab === 'privacy-policy' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#c9a227]" />
                Privacy & Data Protection
              </h2>
            </div>
            {userAgreements.filter(d => d.id === 'user-privacy').map(renderDocumentSection)}

            {/* Additional Privacy Info */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/30">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                Data Protection Checklist
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Privacy policy displayed in app',
                  'Cookie consent mechanism',
                  'Data subject request process',
                  'Breach notification procedure',
                  'Data processing agreements with vendors',
                  'Regular privacy impact assessments',
                  'Employee privacy training',
                  'Data retention schedules',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Employee Docs Tab */}
        {activeTab === 'employee-docs' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#c9a227]" />
                Employee Documents
              </h2>
            </div>
            {employeeDocs.map(renderDocumentSection)}
          </div>
        )}

        {/* Compliance Tab */}
        {activeTab === 'compliance' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#c9a227]" />
                Compliance Documents
              </h2>
            </div>
            {complianceDocs.map(renderDocumentSection)}

            {/* Compliance Checklist */}
            <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-[#c9a227]" />
                Regulatory Compliance Checklist
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-[#c9a227] font-semibold mb-4">UAE Requirements</h4>
                  <ul className="space-y-3">
                    {[
                      { item: 'Trade License (DED)', status: 'required' },
                      { item: 'Payment Service Provider License', status: 'required' },
                      { item: 'AML/CFT Registration', status: 'required' },
                      { item: 'PDPL Compliance', status: 'required' },
                      { item: 'VAT Registration', status: 'required' },
                      { item: 'Consumer Protection Compliance', status: 'required' },
                    ].map((req, idx) => (
                      <li key={idx} className="flex items-center justify-between p-3 rounded-lg bg-gray-800/30">
                        <span className="text-gray-300">{req.item}</span>
                        <span className="px-2 py-1 rounded text-xs bg-red-500/20 text-red-400">
                          {req.status}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[#c9a227] font-semibold mb-4">Internal Policies</h4>
                  <ul className="space-y-3">
                    {[
                      { item: 'AML/KYC Policy', status: 'ready' },
                      { item: 'Data Protection Policy', status: 'ready' },
                      { item: 'Information Security Policy', status: 'draft' },
                      { item: 'Business Continuity Plan', status: 'draft' },
                      { item: 'Incident Response Plan', status: 'draft' },
                      { item: 'Vendor Management Policy', status: 'pending' },
                    ].map((req, idx) => (
                      <li key={idx} className="flex items-center justify-between p-3 rounded-lg bg-gray-800/30">
                        <span className="text-gray-300">{req.item}</span>
                        <span className={`px-2 py-1 rounded text-xs ${
                          req.status === 'ready' ? 'bg-green-500/20 text-green-400' :
                          req.status === 'draft' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                          {req.status}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    <GlobalFooter />
    </div>
  );
}
