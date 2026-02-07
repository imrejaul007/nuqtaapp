'use client';

import React, { useState } from 'react';
import {
  FileText,
  Shield,
  Lock,
  Scale,
  Users,
  Building2,
  CheckCircle,
  Copy,
  Download,
  Eye,
  ChevronDown,
  ChevronRight,
  AlertCircle,
  Briefcase,
  CreditCard,
  Globe,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Edit,
  Printer
} from 'lucide-react';

/**
 * LEGAL DOCUMENTS PAGE
 *
 * All ready-to-use legal documents for Nuqta
 * MOA, Privacy Policy, Terms of Service, AML Policy, etc.
 */

// Document Templates
const legalDocuments = [
  {
    id: 'moa',
    title: 'Memorandum of Association (MOA)',
    category: 'Company Formation',
    status: 'draft',
    lastUpdated: 'Feb 7, 2026',
    description: 'Foundation document for Nuqta Technology L.L.C. establishing the company structure and governance.',
    content: `MEMORANDUM OF ASSOCIATION
OF
NUQTA TECHNOLOGY L.L.C.

═══════════════════════════════════════════════════════════════════

ARTICLE 1: COMPANY NAME
The name of the Company shall be "NUQTA TECHNOLOGY L.L.C." (hereinafter referred to as "the Company").

ARTICLE 2: HEAD OFFICE
The head office of the Company shall be located in the Emirate of Dubai, United Arab Emirates. The Company may establish branches, agencies, or representative offices within or outside the UAE, subject to applicable laws and regulations.

ARTICLE 3: OBJECTIVES AND ACTIVITIES
The Company is established to engage in the following activities:

Primary Activities:
1. E-Commerce Portal Services
2. Technology Services and Solutions
3. Mobile Application Development and Operation
4. Loyalty and Rewards Program Management
5. Digital Marketing Services
6. Payment Facilitation Services (through licensed partners)
7. Data Analytics and Business Intelligence Services

The Company may engage in any other lawful commercial activities related to its primary objectives.

ARTICLE 4: DURATION
The Company shall be established for an unlimited duration, commencing from the date of its registration in the Commercial Register.

ARTICLE 5: SHARE CAPITAL
The authorized share capital of the Company shall be THREE HUNDRED THOUSAND UAE DIRHAMS (AED 300,000), divided into 300 shares of AED 1,000 each.

The capital is fully subscribed and paid as follows:

┌─────────────────────────┬─────────────┬─────────────┬───────────────┐
│ Shareholder Name        │ Nationality │ No. Shares  │ Capital (AED) │
├─────────────────────────┼─────────────┼─────────────┼───────────────┤
│ Rejaul Karim            │ Indian      │ 300         │ 300,000       │
├─────────────────────────┼─────────────┼─────────────┼───────────────┤
│ TOTAL                   │             │ 300         │ 300,000       │
└─────────────────────────┴─────────────┴─────────────┴───────────────┘

ARTICLE 6: MANAGEMENT
The Company shall be managed by:

Managing Director / CEO: Rejaul Karim
- Full authority to represent the Company
- Authority to sign on behalf of the Company
- Authority to enter into contracts and agreements
- Authority to open and operate bank accounts
- Authority to appoint and dismiss employees

ARTICLE 7: FINANCIAL YEAR
The financial year of the Company shall commence on January 1st and end on December 31st of each year. The first financial year shall commence from the date of registration.

ARTICLE 8: PROFIT AND LOSS DISTRIBUTION
Profits and losses shall be distributed among the shareholders in proportion to their respective shareholdings after:
- Setting aside the legal reserve as required by law
- Payment of all taxes and obligations
- Any other reserves as determined by shareholders

ARTICLE 9: TRANSFER OF SHARES
Transfer of shares shall be subject to:
- Written consent of all shareholders
- Compliance with applicable UAE laws
- Right of first refusal to existing shareholders
- Proper documentation and registration

ARTICLE 10: DISSOLUTION AND LIQUIDATION
The Company may be dissolved:
- By unanimous resolution of shareholders
- Upon occurrence of events specified by law
- By court order

Upon dissolution, the Company shall be liquidated in accordance with UAE Commercial Companies Law.

ARTICLE 11: DISPUTE RESOLUTION
Any disputes arising from this Memorandum shall be resolved through:
1. Amicable negotiation between parties
2. Mediation through Dubai Chamber of Commerce
3. Arbitration under Dubai International Arbitration Centre (DIAC) rules
4. Courts of Dubai, UAE as final resort

ARTICLE 12: GOVERNING LAW
This Memorandum shall be governed by and construed in accordance with the laws of the United Arab Emirates and the Emirate of Dubai.

ARTICLE 13: AMENDMENTS
This Memorandum may be amended by written resolution of shareholders holding at least 75% of the share capital, subject to applicable legal requirements.

═══════════════════════════════════════════════════════════════════

SIGNATURES

Shareholder: ___________________________
Name: Rejaul Karim
Date: _________________________________
Place: Dubai, UAE

Witness 1: ____________________________
Name: ________________________________
Emirates ID: __________________________

Witness 2: ____________________________
Name: ________________________________
Emirates ID: __________________________

═══════════════════════════════════════════════════════════════════

NOTARIZATION

Notarized before me on this ______ day of _____________, 2026
At Dubai Courts, United Arab Emirates

Notary Public: _________________________
Stamp and Seal:


═══════════════════════════════════════════════════════════════════`
  },
  {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    category: 'Data Protection',
    status: 'draft',
    lastUpdated: 'Feb 7, 2026',
    description: 'PDPL-compliant privacy policy for Nuqta app and website users.',
    content: `NUQTA PRIVACY POLICY

Last Updated: February 7, 2026
Effective Date: March 1, 2026

═══════════════════════════════════════════════════════════════════

1. INTRODUCTION

Welcome to Nuqta ("we," "our," or "us"). This Privacy Policy explains how Nuqta Technology L.L.C., a company registered in Dubai, UAE, collects, uses, discloses, and protects your personal information when you use our mobile application, website, and services (collectively, the "Services").

We are committed to protecting your privacy in compliance with the UAE Personal Data Protection Law (PDPL), Federal Decree-Law No. 45 of 2021, and its implementing regulations.

By using our Services, you agree to the collection and use of information in accordance with this Privacy Policy.

═══════════════════════════════════════════════════════════════════

2. DATA CONTROLLER

Nuqta Technology L.L.C.
[Office Address]
Dubai, United Arab Emirates
Email: privacy@nuqta.io
Phone: +971 XX XXX XXXX

Data Protection Officer: [DPO Name]
Email: dpo@nuqta.io

═══════════════════════════════════════════════════════════════════

3. PERSONAL DATA WE COLLECT

3.1 Information You Provide Directly:

Account Information:
• Full name
• Email address
• Phone number
• Date of birth (optional)
• Profile photo (optional)
• Preferred language

Payment Information:
• Card details (processed securely by our payment partners)
• Bank account information (for cashback redemption)
• Billing address

3.2 Information Collected Automatically:

Device Information:
• Device type and model
• Operating system and version
• Unique device identifiers
• IP address
• Browser type (for web users)

Usage Information:
• Features used and actions taken
• Search queries
• Merchant interactions
• Transaction history
• Points earned and redeemed
• Time, frequency, and duration of use

Location Information:
• With your consent, we collect precise location to show nearby merchants
• You can disable location access in your device settings

3.3 Information from Third Parties:

• Merchant transaction data (purchases, amounts)
• Payment processor verification data
• Social media profile (if you choose to connect)

═══════════════════════════════════════════════════════════════════

4. HOW WE USE YOUR PERSONAL DATA

4.1 To Provide Our Services:
• Create and manage your account
• Process transactions and rewards
• Show personalized merchant offers
• Enable points earning and redemption
• Provide customer support

4.2 Legal Basis for Processing:
• Performance of contract (providing our Services)
• Legitimate interests (improving Services, fraud prevention)
• Consent (marketing communications, location data)
• Legal obligation (regulatory compliance, tax reporting)

4.3 To Improve Our Services:
• Analyze usage patterns and trends
• Develop new features and products
• Personalize your experience
• Conduct research and analytics

4.4 For Safety and Security:
• Detect and prevent fraud
• Enforce our Terms of Service
• Protect our users and merchants
• Comply with legal obligations

4.5 For Communications:
• Send service-related notifications
• Provide customer support
• Send marketing messages (with your consent)
• Notify you of offers and promotions

═══════════════════════════════════════════════════════════════════

5. DATA SHARING AND DISCLOSURE

5.1 We Share Data With:

Merchant Partners:
• Basic profile for personalized offers
• Transaction history with that merchant only
• Points balance (for redemption)

Service Providers:
• Payment processors (Stripe, Checkout.com)
• Cloud hosting (AWS, GCP)
• Analytics providers (Mixpanel, Firebase)
• Customer support platforms (Zendesk)
• Email service providers (SendGrid)

5.2 Legal Requirements:
We may disclose your information if required by:
• UAE law or regulations
• Court order or legal process
• Government or regulatory authority requests
• Protection of our rights or safety

5.3 Business Transfers:
In the event of a merger, acquisition, or sale of assets, your information may be transferred. We will notify you of any such change.

5.4 We Do NOT:
• Sell your personal data to third parties
• Share data for purposes unrelated to our Services
• Provide data to advertisers without consent

═══════════════════════════════════════════════════════════════════

6. DATA RETENTION

We retain your personal data for:

Active Accounts: Duration of your account plus 5 years
Transaction Records: 7 years (as required by UAE law)
Marketing Data: Until you withdraw consent
Support Records: 3 years after resolution
Analytics Data: 2 years in identifiable form

You may request deletion of your data subject to legal retention requirements.

═══════════════════════════════════════════════════════════════════

7. YOUR RIGHTS (Under UAE PDPL)

You have the right to:

7.1 Access: Request a copy of your personal data
7.2 Rectification: Correct inaccurate or incomplete data
7.3 Erasure: Request deletion of your data
7.4 Restriction: Limit how we use your data
7.5 Portability: Receive your data in a structured format
7.6 Object: Object to certain processing activities
7.7 Withdraw Consent: Withdraw previously given consent

To exercise your rights, contact us at:
Email: privacy@nuqta.io
In-App: Settings > Privacy > Data Rights Request

We will respond within 30 days of receiving your request.

═══════════════════════════════════════════════════════════════════

8. DATA SECURITY

We implement appropriate technical and organizational measures:

Technical Measures:
• Encryption of data in transit (TLS 1.3)
• Encryption of data at rest (AES-256)
• Secure authentication and access controls
• Regular security assessments and penetration testing
• Intrusion detection and monitoring

Organizational Measures:
• Employee background checks and training
• Access on need-to-know basis only
• Regular security awareness programs
• Incident response procedures
• Third-party vendor assessments

═══════════════════════════════════════════════════════════════════

9. INTERNATIONAL DATA TRANSFERS

Your data may be transferred to and processed in countries outside the UAE. We ensure adequate protection through:

• Standard Contractual Clauses
• Adequacy assessments
• Binding Corporate Rules (where applicable)

Primary data processing locations:
• UAE (primary)
• European Union (backup)
• United States (for certain service providers)

═══════════════════════════════════════════════════════════════════

10. COOKIES AND TRACKING

Our website uses cookies and similar technologies:

Essential Cookies: Required for website functionality
Analytics Cookies: Help us understand usage (Google Analytics)
Marketing Cookies: Enable personalized advertising (with consent)

You can manage cookie preferences through:
• Browser settings
• Our cookie consent banner
• In-app privacy settings

═══════════════════════════════════════════════════════════════════

11. CHILDREN'S PRIVACY

Our Services are not intended for users under 18 years of age. We do not knowingly collect data from children. If you believe a child has provided us with personal data, please contact us immediately.

═══════════════════════════════════════════════════════════════════

12. CHANGES TO THIS POLICY

We may update this Privacy Policy from time to time. We will notify you of material changes by:
• Email notification
• In-app notification
• Prominent notice on our website

Your continued use after changes constitutes acceptance of the updated policy.

═══════════════════════════════════════════════════════════════════

13. CONTACT US

For privacy-related inquiries:

Nuqta Technology L.L.C.
[Office Address]
Dubai, UAE

Privacy Team: privacy@nuqta.io
DPO: dpo@nuqta.io
Phone: +971 XX XXX XXXX

For complaints, you may also contact:
UAE Data Office
[Contact information when published]

═══════════════════════════════════════════════════════════════════

© 2026 Nuqta Technology L.L.C. All rights reserved.`
  },
  {
    id: 'terms-of-service',
    title: 'Terms of Service',
    category: 'User Agreement',
    status: 'draft',
    lastUpdated: 'Feb 7, 2026',
    description: 'User terms and conditions for using Nuqta app and services.',
    content: `NUQTA TERMS OF SERVICE

Last Updated: February 7, 2026
Effective Date: March 1, 2026

═══════════════════════════════════════════════════════════════════

1. INTRODUCTION AND ACCEPTANCE

Welcome to Nuqta! These Terms of Service ("Terms") govern your use of the Nuqta mobile application, website, and related services (collectively, the "Services") provided by Nuqta Technology L.L.C. ("Nuqta," "we," "our," or "us").

By creating an account or using our Services, you agree to be bound by these Terms. If you do not agree, please do not use our Services.

═══════════════════════════════════════════════════════════════════

2. DEFINITIONS

"Account" means your registered Nuqta user account.
"Merchant" means a business partner offering deals through Nuqta.
"Points" means Nuqta reward points earned through transactions.
"User" or "you" means any person using our Services.
"Transaction" means a purchase made through Nuqta at a Merchant.

═══════════════════════════════════════════════════════════════════

3. ELIGIBILITY

To use our Services, you must:
• Be at least 18 years old
• Be a resident of the UAE or authorized to use financial services in the UAE
• Have a valid email address and phone number
• Not be prohibited from using our Services by any applicable law

═══════════════════════════════════════════════════════════════════

4. ACCOUNT REGISTRATION

4.1 Account Creation:
To access full features, you must create an account by providing:
• Your full legal name
• Valid email address
• Phone number
• Any other required information

4.2 Account Security:
You are responsible for:
• Maintaining the confidentiality of your login credentials
• All activities that occur under your account
• Notifying us immediately of any unauthorized access
• Using strong, unique passwords

4.3 One Account Per Person:
You may only maintain one active Nuqta account. Creating multiple accounts may result in termination of all accounts.

═══════════════════════════════════════════════════════════════════

5. NUQTA POINTS PROGRAM

5.1 Earning Points:
• Points are earned on eligible transactions at participating Merchants
• Earning rates vary by Merchant and may change without notice
• Points are credited after transaction verification (typically 24-72 hours)
• Some transactions may not qualify for points (e.g., refunds, certain categories)

5.2 Points Value:
• 1 Nuqta Point = AED 0.01 (1 fils)
• 100 Points = AED 1.00
• Minimum redemption: 1,000 Points (AED 10)

5.3 Points Expiration:
• Points expire 24 months after the date they were earned
• Account inactivity for 12+ months may result in points expiration
• We will notify you before points expire

5.4 Points Restrictions:
• Points have no cash value and cannot be sold
• Points are non-transferable between accounts
• Points cannot be purchased
• Nuqta reserves the right to adjust points for errors or fraud

5.5 Points Redemption:
• Points can be redeemed at participating Merchants
• Points can be converted to cash (subject to minimum thresholds)
• Redemption is subject to availability and Merchant participation

═══════════════════════════════════════════════════════════════════

6. USER CONDUCT

You agree NOT to:
• Provide false or misleading information
• Use the Services for fraudulent purposes
• Attempt to manipulate points earnings
• Create fake transactions or accounts
• Violate any applicable laws or regulations
• Interfere with or disrupt the Services
• Reverse engineer or hack our systems
• Use automated bots or scripts
• Abuse our referral program
• Harass other users or Merchants

═══════════════════════════════════════════════════════════════════

7. PAYMENT AND TRANSACTIONS

7.1 Payment Processing:
• Payments are processed by our licensed payment partners
• We do not store your full payment card details
• You are responsible for all charges made through your account

7.2 Refunds:
• Refunds are handled by the Merchant according to their policies
• Points earned on refunded transactions will be reversed
• Cash back may be clawed back for refunded transactions

7.3 Disputes:
• For transaction disputes, contact the Merchant first
• For points-related issues, contact Nuqta support
• We will investigate and respond within 14 business days

═══════════════════════════════════════════════════════════════════

8. MERCHANT RELATIONSHIPS

8.1 Independent Merchants:
• Merchants are independent businesses, not Nuqta employees or agents
• Nuqta is not responsible for Merchant products, services, or conduct
• Deal terms are set by Merchants and subject to their conditions

8.2 Merchant Issues:
• Product quality complaints should be directed to Merchants
• Nuqta may assist in facilitating resolution but has no obligation
• Merchant participation may change at any time

═══════════════════════════════════════════════════════════════════

9. INTELLECTUAL PROPERTY

9.1 Our Rights:
• Nuqta name, logo, and branding are our trademarks
• App design, code, and content are our copyrighted property
• You may not use our intellectual property without permission

9.2 User Content:
• You retain rights to content you submit (reviews, photos)
• You grant us a license to use, display, and distribute such content
• You are responsible for ensuring you have rights to share content

═══════════════════════════════════════════════════════════════════

10. DISCLAIMERS

THE SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND.

We do not warrant that:
• The Services will be uninterrupted or error-free
• All information will be accurate or complete
• The Services will meet your specific requirements
• All deals and offers will be available

TO THE MAXIMUM EXTENT PERMITTED BY UAE LAW, WE DISCLAIM ALL IMPLIED WARRANTIES INCLUDING MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

═══════════════════════════════════════════════════════════════════

11. LIMITATION OF LIABILITY

TO THE MAXIMUM EXTENT PERMITTED BY UAE LAW:

• Our total liability is limited to the amount you paid us in the 12 months preceding the claim
• We are not liable for indirect, incidental, or consequential damages
• We are not liable for Merchant actions or product quality
• We are not liable for unauthorized access to your account if you failed to protect your credentials

═══════════════════════════════════════════════════════════════════

12. INDEMNIFICATION

You agree to indemnify and hold harmless Nuqta, its officers, directors, employees, and agents from any claims, losses, or damages arising from:
• Your use of the Services
• Your violation of these Terms
• Your violation of any third-party rights

═══════════════════════════════════════════════════════════════════

13. TERMINATION

13.1 By You:
You may close your account at any time by contacting support or through app settings. Unused points may be forfeited upon closure.

13.2 By Us:
We may suspend or terminate your account for:
• Violation of these Terms
• Fraudulent or suspicious activity
• Extended inactivity (12+ months)
• Legal or regulatory requirements

13.3 Effect of Termination:
• Access to Services will be revoked
• Unused points may be forfeited
• Outstanding obligations remain binding
• Provisions that should survive will continue

═══════════════════════════════════════════════════════════════════

14. DISPUTE RESOLUTION

14.1 Informal Resolution:
Before filing any claim, you agree to contact us and attempt to resolve the dispute informally for at least 30 days.

14.2 Governing Law:
These Terms are governed by the laws of the UAE and the Emirate of Dubai.

14.3 Arbitration:
Disputes shall be resolved through binding arbitration under the rules of the Dubai International Arbitration Centre (DIAC), except that you may bring claims in small claims court if eligible.

14.4 Jurisdiction:
The courts of Dubai, UAE shall have exclusive jurisdiction for any matters not subject to arbitration.

═══════════════════════════════════════════════════════════════════

15. GENERAL PROVISIONS

15.1 Entire Agreement:
These Terms, together with our Privacy Policy, constitute the entire agreement between you and Nuqta.

15.2 Severability:
If any provision is found unenforceable, the remaining provisions will continue in effect.

15.3 Waiver:
Our failure to enforce any provision does not constitute a waiver of that provision.

15.4 Assignment:
You may not assign your rights under these Terms. We may assign our rights to any affiliate or successor.

15.5 Modifications:
We may modify these Terms at any time. We will notify you of material changes. Continued use after changes constitutes acceptance.

═══════════════════════════════════════════════════════════════════

16. CONTACT INFORMATION

Nuqta Technology L.L.C.
[Office Address]
Dubai, United Arab Emirates

General Inquiries: support@nuqta.io
Legal Inquiries: legal@nuqta.io
Phone: +971 XX XXX XXXX

═══════════════════════════════════════════════════════════════════

By using Nuqta, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.

© 2026 Nuqta Technology L.L.C. All rights reserved.`
  },
  {
    id: 'aml-policy',
    title: 'AML/CFT Policy',
    category: 'Compliance',
    status: 'draft',
    lastUpdated: 'Feb 7, 2026',
    description: 'Anti-Money Laundering and Counter-Terrorism Financing policy for internal use.',
    content: `NUQTA TECHNOLOGY L.L.C.
ANTI-MONEY LAUNDERING AND COUNTER-TERRORISM FINANCING
(AML/CFT) POLICY

Version: 1.0
Effective Date: March 1, 2026
Owner: CFO / Compliance Officer
Classification: Internal - Confidential

═══════════════════════════════════════════════════════════════════

1. INTRODUCTION AND PURPOSE

1.1 Purpose
This Anti-Money Laundering and Counter-Terrorism Financing (AML/CFT) Policy establishes the framework, principles, and procedures that Nuqta Technology L.L.C. ("Nuqta" or "the Company") follows to prevent money laundering, terrorism financing, and other financial crimes.

1.2 Scope
This policy applies to:
• All employees, officers, and directors
• All contractors and service providers
• All business operations and transactions
• All customers (Users and Merchants)

1.3 Regulatory Framework
This policy is designed to comply with:
• UAE Federal Law No. 20 of 2018 on Anti-Money Laundering
• UAE Cabinet Resolution No. 10 of 2019
• CBUAE regulations and guidance
• FATF Recommendations

═══════════════════════════════════════════════════════════════════

2. GOVERNANCE AND RESPONSIBILITIES

2.1 Board of Directors / Management
• Ultimate responsibility for AML/CFT compliance
• Approval of AML/CFT policies and procedures
• Allocation of adequate resources
• Regular review of compliance effectiveness

2.2 Money Laundering Reporting Officer (MLRO)
Name: [To be appointed]
Responsibilities:
• Oversee AML/CFT program implementation
• Receive and investigate internal suspicious activity reports
• File Suspicious Activity Reports (SARs) with UAE FIU
• Ensure staff training and awareness
• Maintain records and documentation
• Report to senior management and board

2.3 Compliance Team
• Conduct customer due diligence
• Monitor transactions for suspicious activity
• Maintain AML/CFT documentation
• Support MLRO in investigations

2.4 All Employees
• Understand and follow AML/CFT procedures
• Report suspicious activity to MLRO
• Complete required training
• Maintain confidentiality of AML matters

═══════════════════════════════════════════════════════════════════

3. CUSTOMER DUE DILIGENCE (CDD)

3.1 Risk-Based Approach
Nuqta adopts a risk-based approach to CDD, with measures proportionate to the identified risks.

3.2 Customer Identification (KYC)

For Individual Users:
• Full legal name (as per Emirates ID/Passport)
• Date of birth
• Nationality
• Emirates ID or Passport number
• Residential address
• Phone number and email
• Verification through ID document and selfie

For Merchants (Business Accounts):
• Company name and trade license number
• Legal structure and ownership
• Registered address
• Beneficial owner identification (25%+ ownership)
• Authorized representatives
• Trade license and MOA copies

3.3 Verification Requirements

Standard CDD:
• ID document verification (automated + manual review)
• Phone number verification (OTP)
• Email verification
• Sanctions screening

Enhanced Due Diligence (EDD) Required For:
• Politically Exposed Persons (PEPs)
• High-risk jurisdictions (per FATF/UAE lists)
• Complex ownership structures
• High transaction volumes
• Unusual business activities

3.4 Ongoing Due Diligence
• Regular review of customer information
• Transaction monitoring
• Periodic re-verification
• Updated sanctions screening

═══════════════════════════════════════════════════════════════════

4. RISK ASSESSMENT

4.1 Customer Risk Factors

HIGH RISK:
• PEPs and their relatives/associates
• Customers from high-risk countries
• Cash-intensive businesses
• Unusual transaction patterns
• Adverse media mentions

MEDIUM RISK:
• Non-face-to-face customers
• Customers with complex structures
• Higher-value transactions

LOW RISK:
• Standard retail customers
• Low-value transactions
• Long-term customers with established patterns

4.2 Product/Service Risk Factors
• Points/rewards programs: Medium (potential for manipulation)
• Cash back: Medium (potential for laundering)
• Merchant payments: Low-Medium

4.3 Geographic Risk Factors
• UAE: Standard
• GCC countries: Standard
• FATF high-risk jurisdictions: Enhanced measures required

═══════════════════════════════════════════════════════════════════

5. TRANSACTION MONITORING

5.1 Monitoring Approach
Nuqta implements transaction monitoring through:
• Automated rule-based alerts (via payment processor)
• Manual review of flagged transactions
• Periodic account reviews

5.2 Red Flags / Suspicious Indicators

Transaction Red Flags:
• Transactions inconsistent with customer profile
• Rapid accumulation of points
• Multiple accounts with same device/IP
• Transactions just below reporting thresholds
• Unusual patterns (same amounts, same times)
• Transactions with high-risk countries

Customer Red Flags:
• Reluctance to provide information
• False or inconsistent information
• Frequent changes to account details
• Multiple failed verification attempts
• Association with sanctioned persons

5.3 Alert Investigation
All alerts must be:
• Reviewed within 24 hours
• Investigated within 5 business days
• Documented with decision and rationale
• Escalated to MLRO if SAR required

═══════════════════════════════════════════════════════════════════

6. SUSPICIOUS ACTIVITY REPORTING (SAR)

6.1 Internal Reporting
• All employees must report suspicious activity to MLRO
• Reports can be verbal or written
• No threshold - report any suspicion
• Reporter identity is confidential

6.2 SAR Filing
• MLRO determines if SAR is required
• SAR filed via goAML system to UAE FIU
• Filing within 24 hours of decision
• No disclosure to customer (tipping off prohibited)

6.3 Record Keeping
• All SARs and supporting documents retained
• Minimum 5 years retention
• Secure storage with restricted access

═══════════════════════════════════════════════════════════════════

7. SANCTIONS SCREENING

7.1 Screening Requirements
All customers and transactions screened against:
• UAE Local Terrorist List
• UN Security Council Consolidated List
• OFAC SDN List
• EU Consolidated List
• Other applicable sanctions lists

7.2 Screening Process
• Real-time screening at onboarding
• Daily batch screening of customer base
• Transaction screening for cross-border payments
• Screening of merchants and partners

7.3 Match Handling
• Potential matches escalated immediately
• False positives documented and cleared
• True matches result in account blocking
• Immediate reporting to authorities

═══════════════════════════════════════════════════════════════════

8. RECORD KEEPING

8.1 Retention Periods
• Customer identification records: 5 years after relationship ends
• Transaction records: 5 years from transaction date
• SAR records: 5 years from filing
• Training records: Duration of employment + 3 years

8.2 Record Requirements
• Accurate and complete
• Readily retrievable
• Securely stored
• Protected from unauthorized access

═══════════════════════════════════════════════════════════════════

9. TRAINING AND AWARENESS

9.1 Training Requirements
• All new employees: Within 30 days of joining
• All staff: Annual refresher training
• Compliance team: Quarterly specialized training
• MLRO: External professional development

9.2 Training Content
• Overview of ML/TF risks
• Legal and regulatory requirements
• Internal policies and procedures
• Red flags and suspicious indicators
• Reporting obligations
• Case studies

9.3 Training Records
• Attendance records maintained
• Competency assessments required
• Remedial training for failures

═══════════════════════════════════════════════════════════════════

10. INDEPENDENT TESTING AND AUDIT

10.1 Internal Review
• Quarterly self-assessments
• Annual independent testing

10.2 External Audit
• Annual AML/CFT audit by independent party
• Findings reported to management
• Remediation tracked to completion

═══════════════════════════════════════════════════════════════════

11. POLICY REVIEW AND UPDATES

This policy will be reviewed:
• Annually at minimum
• Upon significant regulatory changes
• After significant incidents
• Upon material business changes

═══════════════════════════════════════════════════════════════════

APPROVAL

This policy is approved by:

Name: Rejaul Karim
Title: CEO
Signature: _________________________
Date: _____________________________

MLRO Acknowledgment:

Name: [MLRO Name]
Title: Money Laundering Reporting Officer
Signature: _________________________
Date: _____________________________

═══════════════════════════════════════════════════════════════════

APPENDICES

Appendix A: High-Risk Country List (per FATF)
Appendix B: SAR Filing Procedures
Appendix C: Customer Risk Rating Matrix
Appendix D: Training Materials
Appendix E: Sanctions List Sources

═══════════════════════════════════════════════════════════════════

DOCUMENT CONTROL

Version: 1.0
Created: February 7, 2026
Next Review: February 2027
Classification: Internal - Confidential`
  },
  {
    id: 'merchant-agreement',
    title: 'Merchant Partner Agreement',
    category: 'Commercial',
    status: 'draft',
    lastUpdated: 'Feb 7, 2026',
    description: 'Standard agreement template for onboarding merchant partners.',
    content: `NUQTA MERCHANT PARTNER AGREEMENT

This Merchant Partner Agreement ("Agreement") is entered into as of [DATE] ("Effective Date")

BETWEEN:

NUQTA TECHNOLOGY L.L.C.
A limited liability company registered in Dubai, UAE
Trade License No.: [Number]
Address: [Address]
("Nuqta" or "Platform")

AND:

[MERCHANT LEGAL NAME]
[Trade License Number]
[Address]
("Merchant" or "Partner")

Collectively referred to as the "Parties" and individually as a "Party".

═══════════════════════════════════════════════════════════════════

1. DEFINITIONS

1.1 "Nuqta App" means the mobile application and website operated by Nuqta.
1.2 "Nuqta Points" means the loyalty points issued to Users.
1.3 "User" means a registered user of the Nuqta App.
1.4 "Eligible Transaction" means a purchase at Merchant that qualifies for points.
1.5 "Commission" means the fee paid by Merchant to Nuqta per transaction.
1.6 "Dashboard" means the Merchant management portal.

═══════════════════════════════════════════════════════════════════

2. SERVICES

2.1 Nuqta shall:
• List Merchant on the Nuqta App
• Process User transactions and award points
• Provide Merchant dashboard access
• Handle User support for Nuqta-related issues
• Market the Merchant to Nuqta Users

2.2 Merchant shall:
• Accept Nuqta as a valid payment/reward method
• Honor advertised offers and deals
• Display Nuqta signage at point of sale
• Train staff on Nuqta processes
• Maintain service quality standards

═══════════════════════════════════════════════════════════════════

3. COMMERCIAL TERMS

3.1 Commission Structure:

Standard Commission: [X]% of Eligible Transaction value
Promotional Commission: [Y]% during promotional periods

3.2 Payment Terms:
• Settlement: Within [14/30] days of transaction
• Payment method: Bank transfer to Merchant account
• Currency: UAE Dirhams (AED)
• Minimum payout threshold: AED [100]

3.3 Points Redemption:
• Users may redeem points at Merchant
• Merchant receives face value of redeemed points
• Redemption settled per payment terms above

═══════════════════════════════════════════════════════════════════

4. MERCHANT OBLIGATIONS

4.1 Operational Requirements:
• Accept all Nuqta Users without discrimination
• Process transactions accurately and promptly
• Maintain POS integration (if applicable)
• Update business hours and information
• Respond to customer inquiries within 24 hours

4.2 Compliance Requirements:
• Maintain valid trade license
• Comply with all applicable UAE laws
• Adhere to Nuqta brand guidelines
• Not engage in fraudulent activities
• Protect User data per privacy laws

4.3 Exclusivity:
This Agreement is [non-exclusive / exclusive for category in area].

═══════════════════════════════════════════════════════════════════

5. INTELLECTUAL PROPERTY

5.1 Nuqta grants Merchant a limited, non-exclusive license to use Nuqta trademarks solely for purposes of this Agreement.

5.2 Merchant grants Nuqta license to use Merchant name, logo, and images for marketing on the Nuqta App and promotional materials.

5.3 Neither Party acquires ownership of the other Party's intellectual property.

═══════════════════════════════════════════════════════════════════

6. DATA PROTECTION

6.1 Each Party shall comply with applicable data protection laws.

6.2 Nuqta shall provide Merchant with aggregated, anonymized data only.

6.3 Merchant shall not:
• Collect additional User data beyond transaction needs
• Share User data with third parties
• Use data for purposes outside this Agreement

═══════════════════════════════════════════════════════════════════

7. TERM AND TERMINATION

7.1 Initial Term: [12] months from Effective Date.

7.2 Renewal: Automatically renews for successive [12]-month periods unless either Party provides [30] days written notice.

7.3 Termination for Cause: Either Party may terminate immediately upon:
• Material breach not cured within [14] days of notice
• Insolvency or bankruptcy of other Party
• Fraudulent activity by other Party

7.4 Effect of Termination:
• Merchant listing removed from Nuqta App
• Outstanding payments settled within [30] days
• Confidentiality obligations survive

═══════════════════════════════════════════════════════════════════

8. REPRESENTATIONS AND WARRANTIES

8.1 Each Party represents and warrants that:
• It has authority to enter this Agreement
• It holds all necessary licenses and permits
• It will comply with all applicable laws
• Performance will not violate any other agreement

8.2 Nuqta further warrants:
• The Nuqta App will be available with reasonable uptime
• User data will be handled in accordance with privacy laws

8.3 Merchant further warrants:
• Products/services meet applicable safety standards
• Advertised offers are genuine and honored
• Staff are trained to handle Nuqta transactions

═══════════════════════════════════════════════════════════════════

9. LIMITATION OF LIABILITY

9.1 NEITHER PARTY SHALL BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.

9.2 NUQTA'S TOTAL LIABILITY SHALL NOT EXCEED THE TOTAL COMMISSION PAID IN THE [12] MONTHS PRECEDING THE CLAIM.

9.3 Limitations do not apply to:
• Gross negligence or willful misconduct
• Breach of confidentiality
• Intellectual property infringement
• Indemnification obligations

═══════════════════════════════════════════════════════════════════

10. INDEMNIFICATION

10.1 Merchant shall indemnify Nuqta against claims arising from:
• Merchant products or services
• Merchant's breach of this Agreement
• Merchant's violation of laws

10.2 Nuqta shall indemnify Merchant against claims arising from:
• Nuqta App operation
• Nuqta's breach of this Agreement
• Nuqta's violation of laws

═══════════════════════════════════════════════════════════════════

11. CONFIDENTIALITY

11.1 "Confidential Information" includes business terms, customer data, and proprietary information.

11.2 Obligations:
• Protect Confidential Information with reasonable care
• Use only for purposes of this Agreement
• Not disclose to third parties without consent
• Obligations survive termination for [3] years

═══════════════════════════════════════════════════════════════════

12. DISPUTE RESOLUTION

12.1 Governing Law: Laws of UAE and Emirate of Dubai.

12.2 Dispute Resolution:
• First, good faith negotiation for [30] days
• Then, mediation through Dubai Chamber
• Finally, arbitration under DIAC rules

12.3 Venue: Dubai, UAE.

═══════════════════════════════════════════════════════════════════

13. GENERAL PROVISIONS

13.1 Entire Agreement: This Agreement constitutes the entire agreement between Parties.

13.2 Amendment: Modifications require written agreement.

13.3 Assignment: Neither Party may assign without consent.

13.4 Notices: Written notices to addresses above.

13.5 Force Majeure: Neither Party liable for events beyond reasonable control.

13.6 Severability: Invalid provisions severed; remainder continues.

13.7 Waiver: Failure to enforce is not a waiver.

═══════════════════════════════════════════════════════════════════

IN WITNESS WHEREOF, the Parties have executed this Agreement:

NUQTA TECHNOLOGY L.L.C.

Signature: _________________________
Name: Rejaul Karim
Title: CEO
Date: _____________________________

[MERCHANT NAME]

Signature: _________________________
Name: ____________________________
Title: ____________________________
Date: _____________________________

═══════════════════════════════════════════════════════════════════

SCHEDULE A: COMMISSION RATES
SCHEDULE B: PROMOTIONAL TERMS
SCHEDULE C: BRAND GUIDELINES
SCHEDULE D: TECHNICAL INTEGRATION SPECIFICATIONS`
  },
  {
    id: 'employee-contract',
    title: 'Employment Contract Template',
    category: 'HR',
    status: 'draft',
    lastUpdated: 'Feb 7, 2026',
    description: 'MOHRE-compliant employment contract template for UAE employees.',
    content: `EMPLOYMENT CONTRACT
عقد عمل

Contract No.: [NQ-EMP-XXXX]
رقم العقد

═══════════════════════════════════════════════════════════════════

This Employment Contract is made on [DATE] between:

EMPLOYER:
Nuqta Technology L.L.C.
Trade License No.: [Number]
Address: [Address], Dubai, UAE
Represented by: Rejaul Karim, CEO
("the Company" or "Employer")

AND

EMPLOYEE:
Name: [Full Legal Name]
Passport No.: [Number]
Nationality: [Country]
UAE Visa No.: [Number]
Emirates ID: [Number]
Address: [Address]
("the Employee")

═══════════════════════════════════════════════════════════════════

ARTICLE 1: POSITION AND DUTIES

1.1 Job Title: [Position]
1.2 Department: [Department]
1.3 Reports to: [Manager Title]
1.4 Location: Dubai, UAE

1.5 The Employee shall perform duties as described in the attached Job Description and such other duties as may be reasonably assigned.

═══════════════════════════════════════════════════════════════════

ARTICLE 2: CONTRACT TYPE AND TERM

2.1 Contract Type: ☐ Limited (Fixed Term) / ☐ Unlimited

2.2 If Limited:
    Start Date: [Date]
    End Date: [Date]
    Duration: [X] months/years

2.3 Probation Period: [3/6] months from Start Date

═══════════════════════════════════════════════════════════════════

ARTICLE 3: COMPENSATION

3.1 Basic Salary: AED [Amount] per month
3.2 Housing Allowance: AED [Amount] per month
3.3 Transportation Allowance: AED [Amount] per month
3.4 Other Allowances: [Details]

3.5 Total Monthly Package: AED [Total] per month

3.6 Payment: Salary paid monthly via WPS (Wage Protection System)
3.7 Currency: UAE Dirhams (AED)

═══════════════════════════════════════════════════════════════════

ARTICLE 4: WORKING HOURS

4.1 Standard Hours: [48] hours per week
4.2 Working Days: Sunday to Thursday
4.3 Daily Hours: [8] hours (9:00 AM - 6:00 PM with 1-hour break)
4.4 During Ramadan: Reduced by 2 hours per day

4.5 Overtime: Paid at 125% (normal days) or 150% (holidays) of hourly rate, subject to prior approval.

═══════════════════════════════════════════════════════════════════

ARTICLE 5: LEAVE ENTITLEMENTS

5.1 Annual Leave: [30] calendar days per year (accrued monthly)
5.2 Sick Leave:
    - First 15 days: Full pay
    - Next 30 days: Half pay
    - Thereafter: Unpaid (up to 45 days total)

5.3 Maternity Leave: [60] days (45 full pay + 15 half pay)
5.4 Paternity Leave: [5] days
5.5 Public Holidays: As per UAE Government announcements
5.6 Hajj Leave: [30] days unpaid (once during employment)

═══════════════════════════════════════════════════════════════════

ARTICLE 6: BENEFITS

6.1 Medical Insurance: Provided as per UAE law (Employee + dependents per policy)
6.2 Annual Air Ticket: [Economy class to home country / Cash equivalent]
6.3 End of Service Gratuity: As per UAE Labour Law
6.4 Other Benefits: [ESOP eligibility, training, etc.]

═══════════════════════════════════════════════════════════════════

ARTICLE 7: EMPLOYEE OBLIGATIONS

The Employee agrees to:
7.1 Perform duties diligently and professionally
7.2 Follow Company policies and procedures
7.3 Maintain confidentiality of Company information
7.4 Not engage in competing business activities
7.5 Return all Company property upon termination
7.6 Comply with UAE laws and regulations

═══════════════════════════════════════════════════════════════════

ARTICLE 8: CONFIDENTIALITY

8.1 The Employee shall keep confidential all Company information including but not limited to: trade secrets, customer data, business strategies, financial information, and technical data.

8.2 This obligation continues for [2] years after termination.

═══════════════════════════════════════════════════════════════════

ARTICLE 9: INTELLECTUAL PROPERTY

9.1 All work product, inventions, and intellectual property created during employment belong to the Company.

9.2 The Employee assigns all rights to such intellectual property to the Company.

═══════════════════════════════════════════════════════════════════

ARTICLE 10: NON-COMPETE

10.1 During employment and for [6] months after termination, the Employee shall not:
    - Work for a direct competitor in the UAE
    - Solicit Company customers or employees
    - Start a competing business

10.2 Geographic Scope: UAE
10.3 Compensation for non-compete: [If applicable]

═══════════════════════════════════════════════════════════════════

ARTICLE 11: TERMINATION

11.1 During Probation: Either party may terminate with [14] days notice.

11.2 After Probation:
    - Limited Contract: [1-3] months notice or compensation
    - Unlimited Contract: [30-90] days notice based on service length

11.3 Immediate Termination: For gross misconduct as per UAE Labour Law Article 120.

11.4 End of Service Gratuity: Calculated per UAE Labour Law.

═══════════════════════════════════════════════════════════════════

ARTICLE 12: DISPUTE RESOLUTION

12.1 Disputes shall first be resolved through internal HR processes.
12.2 Unresolved disputes may be referred to MOHRE.
12.3 This contract is governed by UAE Federal Labour Law.

═══════════════════════════════════════════════════════════════════

ARTICLE 13: GENERAL PROVISIONS

13.1 This contract supersedes all prior agreements.
13.2 Amendments require written agreement.
13.3 If any provision is invalid, remaining provisions continue.
13.4 Arabic translation shall prevail in case of discrepancy.

═══════════════════════════════════════════════════════════════════

SIGNATURES

EMPLOYER:
Nuqta Technology L.L.C.

Signature: _________________________
Name: Rejaul Karim
Title: CEO
Date: _____________________________
Stamp:

EMPLOYEE:

Signature: _________________________
Name: ____________________________
Date: _____________________________
Passport No.: ______________________

═══════════════════════════════════════════════════════════════════

ATTACHMENTS:
☐ Job Description
☐ Company Policies Acknowledgment
☐ NDA
☐ IP Assignment Agreement
☐ ESOP Grant Letter (if applicable)`
  },
  {
    id: 'data-processing',
    title: 'Data Processing Agreement',
    category: 'Data Protection',
    status: 'draft',
    lastUpdated: 'Feb 7, 2026',
    description: 'Agreement with third-party processors handling personal data.',
    content: `DATA PROCESSING AGREEMENT

This Data Processing Agreement ("DPA") forms part of the agreement between:

DATA CONTROLLER:
Nuqta Technology L.L.C.
[Address]
Dubai, UAE
("Controller")

AND

DATA PROCESSOR:
[Processor Name]
[Address]
("Processor")

═══════════════════════════════════════════════════════════════════

1. DEFINITIONS

"Personal Data" means any information relating to an identified or identifiable natural person processed under this Agreement.

"Processing" means any operation performed on Personal Data (collection, storage, use, disclosure, deletion, etc.).

"Data Subject" means the individual to whom Personal Data relates.

"PDPL" means UAE Federal Decree-Law No. 45 of 2021.

═══════════════════════════════════════════════════════════════════

2. SCOPE OF PROCESSING

2.1 Subject Matter: [Description of services]
2.2 Duration: Duration of the main agreement
2.3 Nature and Purpose: [Purpose of processing]
2.4 Types of Personal Data: [List categories]
2.5 Categories of Data Subjects: [Users, Merchants, Employees]

═══════════════════════════════════════════════════════════════════

3. PROCESSOR OBLIGATIONS

The Processor shall:
3.1 Process Personal Data only on documented instructions from Controller
3.2 Ensure personnel are bound by confidentiality
3.3 Implement appropriate security measures
3.4 Not engage sub-processors without prior written authorization
3.5 Assist Controller in responding to Data Subject requests
3.6 Assist Controller with breach notification and impact assessments
3.7 Delete or return Personal Data upon termination
3.8 Provide information to demonstrate compliance

═══════════════════════════════════════════════════════════════════

4. SECURITY MEASURES

Processor shall implement:
• Encryption of Personal Data in transit and at rest
• Access controls and authentication
• Regular security testing
• Incident response procedures
• Employee security training
• Physical security measures

═══════════════════════════════════════════════════════════════════

5. DATA BREACH NOTIFICATION

5.1 Processor shall notify Controller without undue delay (within 24 hours) upon becoming aware of a Personal Data breach.

5.2 Notification shall include:
• Nature of breach
• Categories and number of Data Subjects affected
• Likely consequences
• Measures taken to address the breach

═══════════════════════════════════════════════════════════════════

6. SUB-PROCESSING

6.1 Processor may only engage sub-processors with Controller's prior written authorization.

6.2 Approved sub-processors:
[List or reference to maintained list]

6.3 Processor shall impose equivalent data protection obligations on sub-processors.

═══════════════════════════════════════════════════════════════════

7. INTERNATIONAL TRANSFERS

7.1 Processor may only transfer Personal Data outside UAE with Controller's authorization and appropriate safeguards.

7.2 Approved transfer mechanisms:
• Standard Contractual Clauses
• Adequacy decisions
• Other lawful mechanisms

═══════════════════════════════════════════════════════════════════

8. AUDIT RIGHTS

8.1 Processor shall make available all information necessary to demonstrate compliance.

8.2 Controller may conduct audits with reasonable notice.

═══════════════════════════════════════════════════════════════════

9. LIABILITY

9.1 Processor shall be liable for damages caused by processing in breach of this DPA.

9.2 Liability is subject to limitations in the main agreement.

═══════════════════════════════════════════════════════════════════

10. TERM AND TERMINATION

10.1 This DPA is effective for the duration of the main agreement.

10.2 Upon termination, Processor shall delete or return all Personal Data.

═══════════════════════════════════════════════════════════════════

SIGNATURES

CONTROLLER: Nuqta Technology L.L.C.
Signature: _________________________
Name: Rejaul Karim
Title: CEO
Date: _____________________________

PROCESSOR: [Name]
Signature: _________________________
Name: ____________________________
Title: ____________________________
Date: _____________________________

═══════════════════════════════════════════════════════════════════

ANNEX 1: DESCRIPTION OF PROCESSING
ANNEX 2: TECHNICAL AND ORGANIZATIONAL MEASURES
ANNEX 3: LIST OF APPROVED SUB-PROCESSORS`
  },
  {
    id: 'security-measures',
    title: 'Security Measures Document',
    category: 'Security & Compliance',
    status: 'draft',
    lastUpdated: 'Feb 7, 2026',
    description: 'Comprehensive security measures and technical safeguards implemented by Nuqta.',
    content: `NUQTA TECHNOLOGY L.L.C.
SECURITY MEASURES DOCUMENT

Version: 1.0
Classification: CONFIDENTIAL
Last Updated: February 7, 2026

═══════════════════════════════════════════════════════════════════

1. EXECUTIVE SUMMARY

This document outlines the technical and organizational security measures implemented by Nuqta Technology L.L.C. ("Nuqta") to protect user data, ensure platform integrity, and maintain compliance with UAE data protection regulations (PDPL) and industry best practices.

═══════════════════════════════════════════════════════════════════

2. ORGANIZATIONAL SECURITY

2.1 Security Governance
• Chief Technology Officer (CTO) responsible for security oversight
• Security reviews conducted quarterly
• Annual third-party security audits
• Security incident response team established

2.2 Personnel Security
• Background checks for all employees with data access
• Mandatory security awareness training (annual)
• Confidentiality agreements signed by all personnel
• Role-based access control (RBAC) implemented
• Immediate access revocation upon termination

2.3 Security Policies
• Information Security Policy
• Acceptable Use Policy
• Data Classification Policy
• Incident Response Policy
• Business Continuity Plan
• Disaster Recovery Plan

═══════════════════════════════════════════════════════════════════

3. TECHNICAL SECURITY MEASURES

3.1 Data Encryption

AT REST:
• AES-256 encryption for all stored data
• Encrypted database storage (AWS RDS encryption)
• Encrypted file storage (AWS S3 server-side encryption)
• Encryption keys managed via AWS KMS
• Key rotation every 12 months

IN TRANSIT:
• TLS 1.3 for all API communications
• HTTPS enforced for all web traffic (HSTS enabled)
• Certificate pinning in mobile applications
• Secure WebSocket connections for real-time features

3.2 Access Control

AUTHENTICATION:
• Multi-factor authentication (MFA) for admin access
• OAuth 2.0 / JWT token-based authentication for users
• Secure password requirements (minimum 8 characters, complexity rules)
• Account lockout after 5 failed attempts
• Session timeout after 30 minutes of inactivity

AUTHORIZATION:
• Role-based access control (RBAC)
• Principle of least privilege
• Separate production and development environments
• Admin actions logged and audited

3.3 Network Security
• AWS Virtual Private Cloud (VPC) isolation
• Web Application Firewall (WAF) protection
• DDoS protection via AWS Shield
• Intrusion detection systems (IDS)
• Network segmentation between services
• Private subnets for databases
• Bastion hosts for secure access

3.4 Application Security

SECURE DEVELOPMENT:
• Secure coding guidelines followed
• OWASP Top 10 vulnerability testing
• Static code analysis (SAST) in CI/CD pipeline
• Dependency vulnerability scanning
• Code review requirements for all changes

PROTECTION MEASURES:
• Input validation and sanitization
• SQL injection prevention (parameterized queries)
• XSS protection (Content Security Policy)
• CSRF token protection
• Rate limiting on APIs
• Request size limits

3.5 Infrastructure Security
• Cloud infrastructure on AWS (UAE region where available)
• Automated security patching
• Container security scanning
• Infrastructure as Code (IaC) for consistent deployments
• Immutable infrastructure approach
• Secrets management via AWS Secrets Manager

═══════════════════════════════════════════════════════════════════

4. DATA PROTECTION

4.1 Personal Data Handling
• Data minimization principle applied
• Pseudonymization of sensitive data
• Tokenization of payment data (no card storage)
• Data retention policies enforced
• Secure data deletion procedures

4.2 Data Classification
┌──────────────────┬─────────────────────────────────────────────┐
│ Classification   │ Examples                                    │
├──────────────────┼─────────────────────────────────────────────┤
│ CONFIDENTIAL     │ User PII, transaction data, API keys        │
│ INTERNAL         │ Business metrics, internal docs             │
│ PUBLIC           │ Marketing materials, public website         │
└──────────────────┴─────────────────────────────────────────────┘

4.3 Third-Party Data Processing
• Data processing agreements with all vendors
• Security assessments before vendor engagement
• Approved vendor list maintained
• No data sharing without explicit consent

═══════════════════════════════════════════════════════════════════

5. MONITORING & LOGGING

5.1 Logging
• Centralized log management (AWS CloudWatch)
• Application logs retained for 12 months
• Security logs retained for 24 months
• Audit trails for all admin actions
• Log integrity monitoring

5.2 Monitoring
• 24/7 infrastructure monitoring
• Real-time alerting for security events
• Anomaly detection for unusual patterns
• Performance monitoring and alerting
• Uptime monitoring (99.9% SLA target)

5.3 Logged Events Include:
• User authentication attempts
• Access to sensitive data
• Administrative actions
• API requests and responses
• System errors and exceptions
• Security events

═══════════════════════════════════════════════════════════════════

6. INCIDENT RESPONSE

6.1 Incident Classification
┌──────────────┬────────────────────────────────────────────────┐
│ Severity     │ Description                                    │
├──────────────┼────────────────────────────────────────────────┤
│ CRITICAL     │ Data breach, system compromise                 │
│ HIGH         │ Security vulnerability exploited               │
│ MEDIUM       │ Potential security issue identified            │
│ LOW          │ Minor security concern                         │
└──────────────┴────────────────────────────────────────────────┘

6.2 Response Procedures
1. DETECTION: Automated alerts or manual identification
2. ASSESSMENT: Severity classification within 1 hour
3. CONTAINMENT: Immediate action to limit impact
4. ERADICATION: Remove threat from environment
5. RECOVERY: Restore normal operations
6. LESSONS LEARNED: Post-incident review

6.3 Notification
• TDRA notification within 72 hours for data breaches
• User notification if personal data affected
• CEO and CTO immediately notified for Critical/High
• Incident reports documented and retained

═══════════════════════════════════════════════════════════════════

7. BUSINESS CONTINUITY

7.1 Backup Strategy
• Automated daily backups
• Point-in-time recovery capability
• Cross-region backup replication
• Monthly backup restoration testing
• 30-day backup retention

7.2 Disaster Recovery
• Recovery Time Objective (RTO): 4 hours
• Recovery Point Objective (RPO): 1 hour
• Multi-AZ deployment for high availability
• Documented DR procedures
• Annual DR testing

═══════════════════════════════════════════════════════════════════

8. PHYSICAL SECURITY

8.1 Cloud Provider (AWS)
• SOC 2 Type II certified
• ISO 27001 certified
• Physical access controls
• 24/7 security monitoring
• Environmental controls

8.2 Office Security
• Access control to office premises
• Visitor registration
• Clean desk policy
• Secure document disposal
• Device encryption required

═══════════════════════════════════════════════════════════════════

9. COMPLIANCE

9.1 Regulatory Compliance
• UAE PDPL (Federal Decree-Law No. 45 of 2021)
• CBUAE regulations (payment processing)
• PCI-DSS (via payment processor)
• Apple App Store & Google Play policies

9.2 Security Certifications (Planned)
• ISO 27001 (target: Year 2)
• SOC 2 Type II (target: Year 2)
• PCI-DSS Level 4 (via processor)

═══════════════════════════════════════════════════════════════════

10. SECURITY CONTACTS

Security Team: security@nuqtaapp.com
Data Protection: privacy@nuqtaapp.com
Incident Reporting: security@nuqtaapp.com

Responsible Disclosure Program:
We encourage responsible disclosure of security vulnerabilities.
Contact: security@nuqtaapp.com
Response Time: Within 48 hours

═══════════════════════════════════════════════════════════════════

Document Owner: Chief Technology Officer
Review Frequency: Quarterly
Next Review: May 2026

═══════════════════════════════════════════════════════════════════

APPENDIX A: SECURITY ARCHITECTURE DIAGRAM (Separate Document)
APPENDIX B: VENDOR SECURITY ASSESSMENTS (Separate Document)
APPENDIX C: PENETRATION TEST RESULTS (Separate Document)`
  },
  {
    id: 'cookie-policy',
    title: 'Cookie Policy',
    category: 'User Policies',
    status: 'draft',
    lastUpdated: 'Feb 7, 2026',
    description: 'Policy explaining use of cookies and similar technologies on Nuqta platforms.',
    content: `NUQTA COOKIE POLICY

Last Updated: February 7, 2026
Effective Date: [Launch Date]

═══════════════════════════════════════════════════════════════════

1. INTRODUCTION

This Cookie Policy explains how Nuqta Technology L.L.C. ("Nuqta," "we," "us," or "our") uses cookies and similar tracking technologies when you visit our website at www.nuqtaapp.com or use our mobile application (collectively, the "Platform").

This policy should be read together with our Privacy Policy, which provides detailed information about how we process your personal data.

═══════════════════════════════════════════════════════════════════

2. WHAT ARE COOKIES?

Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently and provide information to the site owners.

Similar technologies include:
• Web beacons (pixel tags)
• Local storage
• Mobile device identifiers
• Software development kits (SDKs)

═══════════════════════════════════════════════════════════════════

3. TYPES OF COOKIES WE USE

3.1 STRICTLY NECESSARY COOKIES
These cookies are essential for the Platform to function. You cannot opt out of these cookies.

┌─────────────────────┬─────────────────────────────────────────┐
│ Cookie Name         │ Purpose                                 │
├─────────────────────┼─────────────────────────────────────────┤
│ session_id          │ Maintains your login session            │
│ csrf_token          │ Security - prevents cross-site attacks  │
│ cookie_consent      │ Stores your cookie preferences          │
│ device_id           │ Device identification for security      │
└─────────────────────┴─────────────────────────────────────────┘

3.2 PERFORMANCE COOKIES
These cookies help us understand how visitors use our Platform.

┌─────────────────────┬─────────────────────────────────────────┐
│ Cookie Name         │ Purpose                                 │
├─────────────────────┼─────────────────────────────────────────┤
│ _ga                 │ Google Analytics - visitor statistics   │
│ _gid                │ Google Analytics - session tracking     │
│ analytics_session   │ Internal analytics                      │
└─────────────────────┴─────────────────────────────────────────┘

3.3 FUNCTIONALITY COOKIES
These cookies remember your preferences and choices.

┌─────────────────────┬─────────────────────────────────────────┐
│ Cookie Name         │ Purpose                                 │
├─────────────────────┼─────────────────────────────────────────┤
│ language            │ Stores your language preference         │
│ user_preferences    │ Remembers display settings              │
│ recent_merchants    │ Recently viewed merchants               │
└─────────────────────┴─────────────────────────────────────────┘

3.4 MARKETING COOKIES
These cookies are used for advertising and retargeting.

┌─────────────────────┬─────────────────────────────────────────┐
│ Cookie Name         │ Purpose                                 │
├─────────────────────┼─────────────────────────────────────────┤
│ _fbp                │ Facebook Pixel - ad targeting           │
│ _gcl_au             │ Google Ads conversion tracking          │
│ snapchat_pixel      │ Snapchat ad measurement                 │
│ tiktok_pixel        │ TikTok ad measurement                   │
└─────────────────────┴─────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════

4. COOKIE RETENTION

┌─────────────────────┬─────────────────────────────────────────┐
│ Cookie Type         │ Retention Period                        │
├─────────────────────┼─────────────────────────────────────────┤
│ Session Cookies     │ Deleted when you close your browser     │
│ Persistent Cookies  │ Up to 24 months                         │
│ Analytics Cookies   │ 26 months                               │
│ Marketing Cookies   │ 12 months                               │
└─────────────────────┴─────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════

5. MOBILE APP TRACKING

Our mobile application uses:
• Device identifiers (IDFA for iOS, GAID for Android)
• Mobile analytics SDKs
• Push notification tokens
• Location data (with your permission)

You can control these through your device settings:
• iOS: Settings > Privacy > Tracking
• Android: Settings > Privacy > Ads

═══════════════════════════════════════════════════════════════════

6. MANAGING COOKIES

6.1 Cookie Consent Banner
When you first visit our Platform, you will see a cookie consent banner allowing you to accept or customize cookie preferences.

6.2 Browser Settings
You can control cookies through your browser settings:

• Chrome: Settings > Privacy and security > Cookies
• Safari: Preferences > Privacy > Cookies
• Firefox: Options > Privacy & Security > Cookies
• Edge: Settings > Privacy > Cookies

Note: Blocking all cookies may affect Platform functionality.

6.3 Opt-Out Links
• Google Analytics: https://tools.google.com/dlpage/gaoptout
• Facebook: https://www.facebook.com/settings?tab=ads
• Google Ads: https://adssettings.google.com

═══════════════════════════════════════════════════════════════════

7. THIRD-PARTY COOKIES

We use services from third parties who may set their own cookies:

┌─────────────────────┬─────────────────────────────────────────┐
│ Provider            │ Purpose                                 │
├─────────────────────┼─────────────────────────────────────────┤
│ Google Analytics    │ Website analytics                       │
│ Facebook            │ Social features and advertising         │
│ Google Ads          │ Advertising                             │
│ Snapchat            │ Advertising                             │
│ TikTok              │ Advertising                             │
│ Hotjar              │ User experience analytics               │
│ Intercom            │ Customer support chat                   │
└─────────────────────┴─────────────────────────────────────────┘

These third parties have their own privacy policies governing their use of cookies.

═══════════════════════════════════════════════════════════════════

8. DO NOT TRACK

Some browsers have a "Do Not Track" (DNT) feature. We currently do not respond to DNT signals, but you can use the cookie management options described above.

═══════════════════════════════════════════════════════════════════

9. UPDATES TO THIS POLICY

We may update this Cookie Policy from time to time. The "Last Updated" date at the top indicates when changes were made. Continued use of the Platform after changes constitutes acceptance.

═══════════════════════════════════════════════════════════════════

10. CONTACT US

For questions about this Cookie Policy:

Nuqta Technology L.L.C.
Email: privacy@nuqtaapp.com
Website: www.nuqtaapp.com/privacy

Data Protection Officer: privacy@nuqtaapp.com`
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable Use Policy',
    category: 'User Policies',
    status: 'draft',
    lastUpdated: 'Feb 7, 2026',
    description: 'Policy governing acceptable use of the Nuqta platform by users and merchants.',
    content: `NUQTA ACCEPTABLE USE POLICY

Last Updated: February 7, 2026
Effective Date: [Launch Date]

═══════════════════════════════════════════════════════════════════

1. INTRODUCTION

This Acceptable Use Policy ("AUP") governs your use of the Nuqta platform, mobile application, and related services (collectively, the "Platform"). By using the Platform, you agree to comply with this AUP.

This policy applies to all users, including individual users, merchant partners, and any third parties accessing the Platform.

═══════════════════════════════════════════════════════════════════

2. PROHIBITED ACTIVITIES

You agree NOT to use the Platform to:

2.1 FRAUDULENT ACTIVITIES
✗ Create fake accounts or multiple accounts for point manipulation
✗ Submit fraudulent transactions or false receipts
✗ Manipulate the points system through unauthorized means
✗ Engage in collusion with merchants to generate fake points
✗ Use bots, scripts, or automated tools to game the system
✗ Attempt to redeem points you did not legitimately earn

2.2 ILLEGAL ACTIVITIES
✗ Violate any applicable laws or regulations (UAE or otherwise)
✗ Facilitate money laundering or terrorist financing
✗ Process transactions for illegal goods or services
✗ Evade taxes or regulatory requirements
✗ Engage in any form of corruption or bribery

2.3 HARMFUL CONTENT
✗ Post or share content that is offensive, defamatory, or discriminatory
✗ Upload malware, viruses, or malicious code
✗ Share content that promotes violence or illegal activities
✗ Infringe on intellectual property rights
✗ Share another person's personal information without consent

2.4 SECURITY VIOLATIONS
✗ Attempt to gain unauthorized access to accounts or systems
✗ Probe, scan, or test vulnerabilities without authorization
✗ Interfere with or disrupt the Platform's operation
✗ Bypass security measures or authentication
✗ Collect user data without authorization

2.5 SPAM AND ABUSE
✗ Send unsolicited messages to other users
✗ Use the Platform for unauthorized advertising
✗ Create fake reviews or ratings
✗ Harass, threaten, or abuse other users
✗ Impersonate other users or Nuqta staff

═══════════════════════════════════════════════════════════════════

3. MERCHANT-SPECIFIC RULES

Merchant partners additionally agree NOT to:

3.1 POINT MANIPULATION
✗ Issue points without genuine transactions
✗ Inflate transaction amounts for point benefits
✗ Collude with users for fraudulent point generation
✗ Fail to honor legitimate point redemptions

3.2 BUSINESS PRACTICES
✗ Misrepresent products, services, or pricing
✗ Engage in discriminatory practices
✗ Violate consumer protection laws
✗ Use customer data for unauthorized purposes
✗ Operate without required licenses

3.3 QUALITY STANDARDS
✗ Provide materially different goods than advertised
✗ Refuse service to legitimate customers
✗ Fail to maintain minimum service standards
✗ Engage in price gouging or unfair practices

═══════════════════════════════════════════════════════════════════

4. PERMITTED USE

You MAY use the Platform to:

✓ Create one personal account per individual
✓ Earn points through legitimate transactions
✓ Redeem points according to program rules
✓ Discover and engage with merchant partners
✓ Share your genuine experiences and reviews
✓ Participate in promotions and campaigns
✓ Refer friends (one referral per unique individual)
✓ Contact customer support for assistance

═══════════════════════════════════════════════════════════════════

5. ENFORCEMENT

5.1 MONITORING
Nuqta reserves the right to monitor Platform activity to ensure compliance with this AUP. This includes automated fraud detection systems.

5.2 INVESTIGATION
We may investigate suspected violations and cooperate with law enforcement when required.

5.3 CONSEQUENCES
Violations of this AUP may result in:

┌─────────────────────┬─────────────────────────────────────────┐
│ Violation Level     │ Potential Action                        │
├─────────────────────┼─────────────────────────────────────────┤
│ Minor               │ Warning, education                      │
│ Moderate            │ Points forfeiture, temporary suspension │
│ Severe              │ Permanent ban, legal action             │
│ Criminal            │ Reporting to authorities                │
└─────────────────────┴─────────────────────────────────────────┘

5.4 APPEALS
If you believe action was taken in error, you may appeal by contacting compliance@nuqtaapp.com within 14 days.

═══════════════════════════════════════════════════════════════════

6. REPORTING VIOLATIONS

If you become aware of any violation of this AUP, please report it to:

Email: abuse@nuqtaapp.com
In-App: Settings > Report a Problem > Policy Violation

All reports are reviewed, and reporters may remain anonymous.

═══════════════════════════════════════════════════════════════════

7. UPDATES

We may update this AUP from time to time. Material changes will be communicated via email or in-app notification. Continued use after changes constitutes acceptance.

═══════════════════════════════════════════════════════════════════

8. CONTACT

For questions about this policy:

Nuqta Technology L.L.C.
Email: compliance@nuqtaapp.com
Website: www.nuqtaapp.com`
  },
  {
    id: 'refund-policy',
    title: 'Points & Refund Policy',
    category: 'User Policies',
    status: 'draft',
    lastUpdated: 'Feb 7, 2026',
    description: 'Policy covering Nuqta points, redemptions, refunds, and related terms.',
    content: `NUQTA POINTS & REFUND POLICY

Last Updated: February 7, 2026
Effective Date: [Launch Date]

═══════════════════════════════════════════════════════════════════

1. INTRODUCTION

This Points & Refund Policy explains how Nuqta points work, including earning, redemption, expiration, and our refund procedures. By participating in the Nuqta rewards program, you agree to these terms.

═══════════════════════════════════════════════════════════════════

2. NUQTA POINTS OVERVIEW

2.1 WHAT ARE NUQTA POINTS?
Nuqta points are loyalty rewards earned through qualifying purchases at participating merchants. Points have no cash value and cannot be exchanged for currency.

2.2 POINT VALUE
• 1 Nuqta Point = 0.01 AED in redemption value
• 100 Points = 1 AED redemption value
• Points are promotional credits, not currency

═══════════════════════════════════════════════════════════════════

3. EARNING POINTS

3.1 STANDARD EARNING
• Base rate: 1% of transaction value (1 point per 1 AED spent)
• Bonus points may apply during promotions
• Earning rate may vary by merchant and tier

3.2 EARNING REQUIREMENTS
✓ Transaction at participating merchant
✓ QR code scanned or card linked transaction
✓ Receipt validated (if required)
✓ Account in good standing
✓ Transaction above minimum threshold (5 AED)

3.3 WHEN POINTS ARE CREDITED
• Standard transactions: Within 24 hours
• Large transactions (>1000 AED): Within 72 hours
• Points are "pending" until transaction is confirmed

3.4 TRANSACTIONS THAT DO NOT EARN POINTS
✗ Cash advances or financial transactions
✗ Gift card purchases
✗ Utility payments
✗ Government fees and fines
✗ Gambling transactions
✗ Refunded transactions
✗ Fraudulent transactions

═══════════════════════════════════════════════════════════════════

4. REDEMPTION

4.1 MINIMUM REDEMPTION
• Minimum points for redemption: 500 points (5 AED value)
• Maximum redemption per transaction: 50% of transaction value

4.2 HOW TO REDEEM
1. Select "Redeem Points" in the app
2. Choose participating merchant
3. Select redemption amount
4. Show QR code to merchant
5. Redemption confirmed instantly

4.3 REDEMPTION RESTRICTIONS
• Only at participating redemption merchants
• Cannot be combined with certain promotions
• Subject to merchant acceptance
• Redemptions are final

═══════════════════════════════════════════════════════════════════

5. POINT EXPIRATION

5.1 STANDARD EXPIRATION
• Points expire 24 months after earning
• Expiration date shown in app for each batch

5.2 ACTIVITY EXTENSION
• Account activity extends expiration
• Qualifying activity: earn or redeem points
• Extension: 24 months from last activity

5.3 ACCOUNT INACTIVITY
• Warning at 18 months of inactivity
• Final reminder at 23 months
• Points forfeited at 24 months

5.4 EXCEPTIONS
• Promotional/bonus points may have shorter expiration
• Expiration terms stated at time of earning

═══════════════════════════════════════════════════════════════════

6. REFUNDS FOR PURCHASES

6.1 MERCHANT REFUNDS
When you receive a refund from a merchant:
• Points earned from that transaction will be deducted
• Deduction occurs within 72 hours of refund
• You will be notified of the adjustment

6.2 IF POINTS ALREADY REDEEMED
If you received a refund for a transaction and have already redeemed those points:
• Points will be deducted from your balance
• If balance is insufficient, balance may go negative
• Negative balance must be restored before future redemptions

═══════════════════════════════════════════════════════════════════

7. PREMIUM MEMBERSHIP REFUNDS

7.1 NUQTA PREMIUM/VIP SUBSCRIPTIONS
• Monthly subscriptions: No refunds for partial months
• Annual subscriptions: Pro-rated refund for unused months (minus 30% admin fee)
• Refund requests within 7 days: Full refund available
• Benefits used: Deducted from refund value

7.2 HOW TO REQUEST
Email: support@nuqtaapp.com
Subject: "Premium Refund Request"
Include: Account email, subscription date, reason

═══════════════════════════════════════════════════════════════════

8. DISPUTED TRANSACTIONS

8.1 MISSING POINTS
If you believe you should have received points:
1. Check transaction history in app
2. Wait 72 hours for processing
3. Submit dispute with proof of purchase
4. Resolution within 14 business days

8.2 REQUIRED DOCUMENTATION
• Original receipt (photo or scan)
• Date and time of transaction
• Merchant name and location
• Transaction amount

8.3 DISPUTE RESOLUTION
• Valid claims: Points credited within 7 days
• Invalid claims: Explanation provided
• Appeals: Escalate to compliance@nuqtaapp.com

═══════════════════════════════════════════════════════════════════

9. POINT FORFEITURE

Points may be forfeited without compensation if:

• Account terminated for Terms of Service violation
• Fraudulent activity detected
• Points earned through manipulation or abuse
• Account holder deceased (unless transferred to heir)
• Account abandoned for 24+ months

═══════════════════════════════════════════════════════════════════

10. PROGRAM CHANGES

10.1 MODIFICATIONS
Nuqta reserves the right to modify the points program, including:
• Point earning rates
• Redemption values
• Expiration terms
• Participating merchants

10.2 NOTICE
• Material changes: 30 days advance notice
• Emergency changes: Immediate with explanation
• Notice via: Email and in-app notification

10.3 POINT PROTECTION
Points earned before program changes remain valid under original terms for 90 days after notification.

═══════════════════════════════════════════════════════════════════

11. CONTACT US

For points or refund inquiries:

Customer Support:
Email: support@nuqtaapp.com
In-App: Settings > Help > Contact Support
Response Time: Within 24 hours

Disputes/Escalations:
Email: disputes@nuqtaapp.com
Response Time: Within 72 hours

═══════════════════════════════════════════════════════════════════

Nuqta Technology L.L.C.
Dubai, United Arab Emirates
www.nuqtaapp.com`
  },
  {
    id: 'nda-template',
    title: 'Non-Disclosure Agreement (NDA)',
    category: 'Business Contracts',
    status: 'draft',
    lastUpdated: 'Feb 7, 2026',
    description: 'Template NDA for employees, contractors, and business discussions.',
    content: `NON-DISCLOSURE AGREEMENT

This Non-Disclosure Agreement ("Agreement") is entered into as of _____________ ("Effective Date")

BETWEEN:

NUQTA TECHNOLOGY L.L.C.
A limited liability company registered in Dubai, UAE
Trade License No: [Number]
Address: [Address], Dubai, UAE
("Disclosing Party" or "Nuqta")

AND:

[RECIPIENT NAME]
[Company/Individual]
[Address]
("Receiving Party")

Collectively referred to as the "Parties" and individually as a "Party."

═══════════════════════════════════════════════════════════════════

RECITALS

WHEREAS, Nuqta possesses certain confidential and proprietary information relating to its business, technology, and operations;

WHEREAS, the Receiving Party desires to receive certain Confidential Information for the purpose of [PURPOSE - e.g., "evaluating a potential business relationship," "providing services," "employment discussions"];

NOW, THEREFORE, in consideration of the mutual covenants contained herein, the Parties agree as follows:

═══════════════════════════════════════════════════════════════════

1. DEFINITION OF CONFIDENTIAL INFORMATION

1.1 "Confidential Information" means any and all information disclosed by Nuqta to the Receiving Party, whether orally, in writing, or by any other means, that is:

(a) Marked as "Confidential," "Proprietary," or similar designation; or
(b) By its nature would reasonably be understood to be confidential; or
(c) Disclosed under circumstances indicating its confidential nature.

1.2 Confidential Information includes, but is not limited to:
• Business plans, strategies, and roadmaps
• Financial information, projections, and models
• Technology, source code, and algorithms
• Product plans and features
• Customer and merchant data
• Marketing strategies and analytics
• Pricing and revenue models
• Investor presentations and term sheets
• Employee and compensation information
• Trade secrets and know-how
• Any information relating to the Nuqta platform

═══════════════════════════════════════════════════════════════════

2. EXCLUSIONS

2.1 Confidential Information does not include information that:

(a) Was publicly known at the time of disclosure;
(b) Becomes publicly known through no fault of the Receiving Party;
(c) Was in the Receiving Party's possession before disclosure, as evidenced by written records;
(d) Is independently developed by the Receiving Party without use of Confidential Information;
(e) Is rightfully obtained from a third party without breach of any confidentiality obligation.

═══════════════════════════════════════════════════════════════════

3. OBLIGATIONS

3.1 The Receiving Party agrees to:

(a) Hold all Confidential Information in strict confidence;
(b) Use Confidential Information only for the Purpose stated above;
(c) Not disclose Confidential Information to any third party without prior written consent;
(d) Limit internal disclosure to employees/contractors with a need to know;
(e) Ensure all recipients are bound by confidentiality obligations at least as protective as this Agreement;
(f) Protect Confidential Information with at least the same degree of care used to protect its own confidential information, but no less than reasonable care;
(g) Promptly notify Nuqta of any unauthorized disclosure or use.

═══════════════════════════════════════════════════════════════════

4. PERMITTED DISCLOSURES

4.1 The Receiving Party may disclose Confidential Information if required by law, regulation, or court order, provided that:

(a) Prompt written notice is given to Nuqta (where legally permitted);
(b) Reasonable assistance is provided to Nuqta to seek a protective order;
(c) Only the minimum necessary information is disclosed.

═══════════════════════════════════════════════════════════════════

5. OWNERSHIP

5.1 All Confidential Information remains the sole property of Nuqta.

5.2 No license or rights to any intellectual property are granted under this Agreement.

5.3 The Receiving Party acquires no rights to use Confidential Information except as expressly permitted.

═══════════════════════════════════════════════════════════════════

6. RETURN OR DESTRUCTION

6.1 Upon Nuqta's request or termination of this Agreement, the Receiving Party shall:

(a) Promptly return all Confidential Information and copies; OR
(b) Destroy all Confidential Information and certify destruction in writing.

6.2 Notwithstanding the above, the Receiving Party may retain copies as required by law or internal backup procedures, subject to ongoing confidentiality obligations.

═══════════════════════════════════════════════════════════════════

7. TERM AND TERMINATION

7.1 This Agreement is effective from the Effective Date and continues for [TERM - e.g., "2 years"] unless terminated earlier.

7.2 Either Party may terminate this Agreement with 30 days written notice.

7.3 Confidentiality obligations survive termination for a period of [SURVIVAL PERIOD - e.g., "5 years"] from the date of disclosure.

7.4 For trade secrets, obligations continue for as long as the information remains a trade secret.

═══════════════════════════════════════════════════════════════════

8. REMEDIES

8.1 The Receiving Party acknowledges that breach of this Agreement may cause irreparable harm for which monetary damages are inadequate.

8.2 Nuqta shall be entitled to seek injunctive relief, specific performance, and other equitable remedies without the need to post bond.

8.3 Such remedies are in addition to any other remedies available at law or in equity.

═══════════════════════════════════════════════════════════════════

9. NO WARRANTY

9.1 Confidential Information is provided "AS IS" without warranty of any kind.

9.2 Nuqta makes no representations regarding accuracy, completeness, or fitness for any purpose.

═══════════════════════════════════════════════════════════════════

10. NO OBLIGATION

10.1 This Agreement does not obligate either Party to:
(a) Enter into any further agreement;
(b) Proceed with any transaction or relationship;
(c) Disclose any particular information.

═══════════════════════════════════════════════════════════════════

11. GENERAL PROVISIONS

11.1 Governing Law: This Agreement shall be governed by the laws of the United Arab Emirates, without regard to conflicts of law principles.

11.2 Jurisdiction: The courts of Dubai, UAE shall have exclusive jurisdiction over any disputes arising from this Agreement.

11.3 Entire Agreement: This Agreement constitutes the entire agreement regarding Confidential Information and supersedes all prior negotiations and understandings.

11.4 Amendment: This Agreement may only be amended in writing signed by both Parties.

11.5 Assignment: The Receiving Party may not assign this Agreement without Nuqta's prior written consent.

11.6 Severability: If any provision is found unenforceable, the remaining provisions shall continue in effect.

11.7 Waiver: Failure to enforce any provision does not constitute a waiver of that provision.

11.8 Counterparts: This Agreement may be executed in counterparts, each of which shall be deemed an original.

═══════════════════════════════════════════════════════════════════

IN WITNESS WHEREOF, the Parties have executed this Agreement as of the Effective Date.

NUQTA TECHNOLOGY L.L.C.

Signature: _________________________
Name: Rejaul Karim
Title: CEO
Date: _____________________________

[RECEIVING PARTY]

Signature: _________________________
Name: ____________________________
Title: ____________________________
Date: _____________________________

═══════════════════════════════════════════════════════════════════

SCHEDULE A: DESCRIPTION OF PURPOSE
[Describe the specific purpose for which Confidential Information is being disclosed]

SCHEDULE B: SPECIFIC CONFIDENTIAL INFORMATION
[If applicable, list specific categories or items of Confidential Information covered]`
  },
  {
    id: 'ip-assignment',
    title: 'Intellectual Property Assignment',
    category: 'Employment',
    status: 'draft',
    lastUpdated: 'Feb 7, 2026',
    description: 'Agreement assigning IP rights from employees/contractors to the company.',
    content: `INTELLECTUAL PROPERTY ASSIGNMENT AGREEMENT

This Intellectual Property Assignment Agreement ("Agreement") is entered into as of _____________ ("Effective Date")

BETWEEN:

NUQTA TECHNOLOGY L.L.C.
Trade License No: [Number]
Address: Dubai, UAE
("Company")

AND:

[ASSIGNOR NAME]
Emirates ID: [Number]
Address: [Address]
("Assignor")

═══════════════════════════════════════════════════════════════════

RECITALS

WHEREAS, the Assignor is [an employee of / a contractor providing services to] the Company;

WHEREAS, the Assignor may create, develop, or contribute to intellectual property during the course of their [employment / engagement];

WHEREAS, the Parties wish to clarify ownership of such intellectual property;

NOW, THEREFORE, in consideration of [the Assignor's employment / the fees paid for services] and other good and valuable consideration, the Parties agree as follows:

═══════════════════════════════════════════════════════════════════

1. DEFINITIONS

1.1 "Intellectual Property" or "IP" means all intellectual property rights, including:
• Patents and patent applications
• Copyrights and moral rights
• Trademarks and service marks
• Trade secrets and know-how
• Designs (registered and unregistered)
• Database rights
• Domain names
• All other proprietary rights

1.2 "Work Product" means all works, inventions, developments, improvements, designs, code, documentation, and other materials created, developed, or contributed to by the Assignor:
(a) During the course of [employment / engagement] with the Company;
(b) Using Company resources, facilities, or information;
(c) Relating to Company business or actual/anticipated products; or
(d) Resulting from tasks assigned by the Company.

═══════════════════════════════════════════════════════════════════

2. ASSIGNMENT OF INTELLECTUAL PROPERTY

2.1 Present Assignment
The Assignor hereby irrevocably assigns, transfers, and conveys to the Company all right, title, and interest in and to:
(a) All Work Product;
(b) All Intellectual Property in the Work Product; and
(c) All claims for damages by reason of past, present, or future infringement.

2.2 Future Assignment
The Assignor agrees to promptly disclose and assign all future Work Product to the Company as it is created.

2.3 Scope
This assignment includes all rights worldwide, for the full term of protection, including all renewals and extensions.

═══════════════════════════════════════════════════════════════════

3. MORAL RIGHTS

3.1 To the extent permitted by law, the Assignor waives all moral rights in the Work Product, including:
(a) Right of attribution;
(b) Right of integrity;
(c) Right to object to derogatory treatment.

3.2 The Assignor consents to the Company's use, modification, and exploitation of Work Product without attribution.

═══════════════════════════════════════════════════════════════════

4. WORK FOR HIRE

4.1 To the extent applicable, all Work Product shall be considered "work made for hire" as defined by applicable law.

4.2 If any Work Product does not qualify as work for hire, it is hereby assigned to the Company under Section 2.

═══════════════════════════════════════════════════════════════════

5. FURTHER ASSURANCES

5.1 The Assignor agrees to:
(a) Execute any documents necessary to perfect, register, or enforce the Company's IP rights;
(b) Provide reasonable assistance in any IP-related proceedings;
(c) Not challenge the Company's ownership of Work Product.

5.2 Power of Attorney
The Assignor hereby irrevocably appoints the Company as attorney-in-fact to execute any documents if the Assignor is unavailable, unwilling, or unable to do so.

═══════════════════════════════════════════════════════════════════

6. PRIOR INVENTIONS

6.1 The Assignor has disclosed in Schedule A all prior inventions, works, or IP that:
(a) Were created before this Agreement; and
(b) Are relevant to the Company's business.

6.2 Such prior IP is excluded from this Agreement, provided it is listed in Schedule A.

6.3 If no items are listed, the Assignor represents there is no prior IP to exclude.

═══════════════════════════════════════════════════════════════════

7. NO LICENSE BACK

7.1 The Assignor retains no rights to use Work Product except as authorized by the Company.

7.2 Any permitted use is subject to the Company's prior written consent.

═══════════════════════════════════════════════════════════════════

8. CONFIDENTIALITY

8.1 All Work Product is Confidential Information of the Company.

8.2 The Assignor agrees to maintain confidentiality in accordance with [the Employment Agreement / NDA / Contractor Agreement].

═══════════════════════════════════════════════════════════════════

9. REPRESENTATIONS AND WARRANTIES

9.1 The Assignor represents and warrants that:
(a) The Assignor has full right and authority to enter into this Agreement;
(b) Work Product is original and does not infringe third-party rights;
(c) No prior assignment or encumbrance of Work Product exists;
(d) All prior IP is disclosed in Schedule A.

═══════════════════════════════════════════════════════════════════

10. TERM

10.1 This Agreement is effective from the Effective Date and continues throughout the Assignor's [employment / engagement] and indefinitely thereafter for Work Product created during that period.

═══════════════════════════════════════════════════════════════════

11. GENERAL PROVISIONS

11.1 Governing Law: UAE law governs this Agreement.

11.2 Jurisdiction: Dubai courts have exclusive jurisdiction.

11.3 Entire Agreement: This Agreement constitutes the entire agreement on this subject matter.

11.4 Amendment: Amendments must be in writing and signed by both Parties.

11.5 Severability: Invalid provisions shall be modified to the minimum extent necessary.

11.6 Counterparts: This Agreement may be executed in counterparts.

═══════════════════════════════════════════════════════════════════

IN WITNESS WHEREOF, the Parties have executed this Agreement as of the Effective Date.

NUQTA TECHNOLOGY L.L.C.

Signature: _________________________
Name: Rejaul Karim
Title: CEO
Date: _____________________________

ASSIGNOR

Signature: _________________________
Name: ____________________________
Date: _____________________________

═══════════════════════════════════════════════════════════════════

SCHEDULE A: PRIOR INVENTIONS

The following prior inventions, works, or IP created before this Agreement are excluded:

1. ________________________________________________________________
   Description: ___________________________________________________
   Date Created: __________________________________________________

2. ________________________________________________________________
   Description: ___________________________________________________
   Date Created: __________________________________________________

3. ________________________________________________________________
   Description: ___________________________________________________
   Date Created: __________________________________________________

☐ Check here if no prior inventions to disclose

Assignor Initials: _______`
  },
  {
    id: 'service-level',
    title: 'Service Level Agreement (SLA)',
    category: 'Business Contracts',
    status: 'draft',
    lastUpdated: 'Feb 7, 2026',
    description: 'SLA template for merchant partners defining service standards.',
    content: `SERVICE LEVEL AGREEMENT

Between Nuqta Technology L.L.C. and Merchant Partners

Version: 1.0
Effective Date: [Date]

═══════════════════════════════════════════════════════════════════

1. INTRODUCTION

This Service Level Agreement ("SLA") defines the service standards, responsibilities, and metrics for the Nuqta platform as provided to merchant partners ("Merchants").

This SLA is incorporated into and forms part of the Merchant Partner Agreement.

═══════════════════════════════════════════════════════════════════

2. SERVICE DESCRIPTION

Nuqta provides the following services to Merchants:

2.1 CORE SERVICES
• Merchant Portal (web dashboard)
• QR Code generation and management
• Transaction processing
• Points issuance system
• Analytics and reporting
• Customer support

2.2 OPTIONAL SERVICES
• Premium analytics package
• Marketing campaign tools
• Custom integrations (API)
• Dedicated account management

═══════════════════════════════════════════════════════════════════

3. SERVICE AVAILABILITY

3.1 UPTIME COMMITMENT

┌─────────────────────┬─────────────┬────────────────────────────┐
│ Service             │ Target      │ Maximum Downtime/Month     │
├─────────────────────┼─────────────┼────────────────────────────┤
│ Transaction System  │ 99.9%       │ 43 minutes                 │
│ Merchant Portal     │ 99.5%       │ 3.6 hours                  │
│ API Services        │ 99.9%       │ 43 minutes                 │
│ Analytics Dashboard │ 99.0%       │ 7.3 hours                  │
└─────────────────────┴─────────────┴────────────────────────────┘

3.2 MEASUREMENT PERIOD
• Uptime calculated on a monthly basis
• Measured from 00:00 to 23:59 UTC on each day

3.3 EXCLUSIONS
The following are excluded from uptime calculations:
• Scheduled maintenance (with 48-hour notice)
• Emergency maintenance for security issues
• Force majeure events
• Issues caused by Merchant's equipment or connectivity
• Third-party service failures beyond Nuqta's control

═══════════════════════════════════════════════════════════════════

4. PERFORMANCE METRICS

4.1 TRANSACTION PROCESSING

┌─────────────────────────────┬─────────────────────────────────┐
│ Metric                      │ Target                          │
├─────────────────────────────┼─────────────────────────────────┤
│ QR scan to confirmation     │ < 3 seconds (95th percentile)   │
│ Points credit to user       │ < 24 hours                      │
│ Transaction recording       │ Real-time                       │
│ Receipt validation          │ < 2 minutes                     │
└─────────────────────────────┴─────────────────────────────────┘

4.2 PORTAL PERFORMANCE

┌─────────────────────────────┬─────────────────────────────────┐
│ Metric                      │ Target                          │
├─────────────────────────────┼─────────────────────────────────┤
│ Page load time              │ < 3 seconds                     │
│ Report generation           │ < 30 seconds                    │
│ Dashboard refresh           │ < 5 seconds                     │
│ Export functionality        │ < 60 seconds                    │
└─────────────────────────────┴─────────────────────────────────┘

═══════════════════════════════════════════════════════════════════

5. SUPPORT SERVICES

5.1 SUPPORT CHANNELS

┌─────────────────────┬─────────────────────────────────────────┐
│ Channel             │ Availability                            │
├─────────────────────┼─────────────────────────────────────────┤
│ Email Support       │ 24/7 (response within SLA)              │
│ Phone Support       │ 9 AM - 9 PM GST (Sun-Thu)               │
│ In-Portal Chat      │ 9 AM - 6 PM GST (Sun-Thu)               │
│ Emergency Hotline   │ 24/7 (critical issues only)             │
└─────────────────────┴─────────────────────────────────────────┘

5.2 RESPONSE TIME TARGETS

┌───────────────┬──────────────────────┬───────────────────────┐
│ Priority      │ First Response       │ Resolution Target     │
├───────────────┼──────────────────────┼───────────────────────┤
│ CRITICAL      │ 30 minutes           │ 4 hours               │
│ HIGH          │ 2 hours              │ 24 hours              │
│ MEDIUM        │ 8 hours              │ 72 hours              │
│ LOW           │ 24 hours             │ 7 business days       │
└───────────────┴──────────────────────┴───────────────────────┘

5.3 PRIORITY DEFINITIONS

CRITICAL: System down, unable to process transactions
HIGH: Major functionality impaired, significant business impact
MEDIUM: Partial functionality issue, workaround available
LOW: Minor issue, cosmetic, feature request

═══════════════════════════════════════════════════════════════════

6. DATA AND REPORTING

6.1 DATA AVAILABILITY
• Transaction data: Real-time
• Analytics data: Updated every 4 hours
• Historical reports: Available for 24 months
• Data export: CSV, Excel, PDF formats

6.2 REPORTING
• Monthly performance reports by email
• Real-time dashboard access
• Custom report builder (Premium tier)

═══════════════════════════════════════════════════════════════════

7. MAINTENANCE

7.1 SCHEDULED MAINTENANCE
• Preferred window: 2 AM - 6 AM GST
• Minimum notice: 48 hours
• Maximum duration: 4 hours
• Frequency: Maximum once per week

7.2 EMERGENCY MAINTENANCE
• For security or critical issues
• Notice: As soon as possible
• Post-incident report within 48 hours

═══════════════════════════════════════════════════════════════════

8. SERVICE CREDITS

8.1 ELIGIBILITY
Service credits apply when Nuqta fails to meet SLA targets due to causes within its control.

8.2 CREDIT SCHEDULE

┌─────────────────────────────┬─────────────────────────────────┐
│ Monthly Uptime              │ Credit (% of monthly fee)       │
├─────────────────────────────┼─────────────────────────────────┤
│ 99.0% - 99.89%              │ 10%                             │
│ 98.0% - 98.99%              │ 20%                             │
│ 95.0% - 97.99%              │ 30%                             │
│ Below 95.0%                 │ 50%                             │
└─────────────────────────────┴─────────────────────────────────┘

8.3 CREDIT PROCESS
• Request within 30 days of incident
• Submit via merchants@nuqtaapp.com
• Credit applied to next invoice
• Maximum credit: 50% of monthly fee

═══════════════════════════════════════════════════════════════════

9. MERCHANT RESPONSIBILITIES

9.1 The Merchant agrees to:
• Maintain adequate internet connectivity
• Train staff on QR code procedures
• Keep Merchant Portal credentials secure
• Report issues promptly
• Provide accurate business information
• Comply with operating procedures

═══════════════════════════════════════════════════════════════════

10. ESCALATION PROCESS

10.1 ESCALATION LEVELS

Level 1: Support Team
Email: support@nuqtaapp.com

Level 2: Support Manager
Email: escalations@nuqtaapp.com
Trigger: Unresolved after 24 hours

Level 3: Head of Merchants
Email: merchants@nuqtaapp.com
Trigger: Unresolved after 72 hours

Level 4: Executive Team
Email: executive@nuqtaapp.com
Trigger: Critical business impact

═══════════════════════════════════════════════════════════════════

11. REVIEW AND UPDATES

11.1 This SLA is reviewed quarterly.

11.2 Changes will be communicated 30 days in advance.

11.3 Continued use after changes constitutes acceptance.

═══════════════════════════════════════════════════════════════════

CONTACT INFORMATION

Merchant Support: merchants@nuqtaapp.com
Technical Support: support@nuqtaapp.com
Emergency Hotline: [Phone Number]

Nuqta Technology L.L.C.
Dubai, UAE
www.nuqtaapp.com`
  }
];

// Component
const LegalDocumentsPage = () => {
  const [selectedDoc, setSelectedDoc] = useState<string | null>('moa');
  const [showPreview, setShowPreview] = useState(false);

  const currentDoc = legalDocuments.find(d => d.id === selectedDoc);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Legal Documents</h1>
              <p className="text-purple-100 text-sm sm:text-lg mt-1">Ready-to-Use Templates & Policies</p>
            </div>
          </div>
          <p className="text-purple-100 max-w-3xl text-sm sm:text-base">
            Complete legal document templates prepared for Nuqta. Review, customize, and use
            for company formation, compliance, and operations.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-2">
              <span className="text-2xl font-black text-white">{legalDocuments.length}</span>
              <span className="text-purple-200 ml-2 text-sm">Documents</span>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-2">
              <span className="text-2xl font-black text-white">
                {legalDocuments.filter(d => d.status === 'draft').length}
              </span>
              <span className="text-purple-200 ml-2 text-sm">Ready for Review</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Document List */}
          <div className="lg:col-span-1 space-y-2">
            <h3 className="text-sm font-bold text-slate-400 uppercase mb-4">Documents</h3>
            {legalDocuments.map((doc) => (
              <button
                key={doc.id}
                onClick={() => setSelectedDoc(doc.id)}
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  selectedDoc === doc.id
                    ? 'bg-purple-500/20 border border-purple-500/50'
                    : 'bg-slate-800/50 hover:bg-slate-700/50 border border-transparent'
                }`}
              >
                <p className={`font-medium ${selectedDoc === doc.id ? 'text-purple-400' : 'text-white'}`}>
                  {doc.title}
                </p>
                <p className="text-xs text-slate-400 mt-1">{doc.category}</p>
              </button>
            ))}
          </div>

          {/* Document Preview */}
          <div className="lg:col-span-3">
            {currentDoc && (
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
                {/* Document Header */}
                <div className="p-4 sm:p-6 border-b border-slate-700">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white">{currentDoc.title}</h2>
                      <p className="text-slate-400 mt-1">{currentDoc.description}</p>
                      <div className="flex flex-wrap gap-3 mt-3 text-sm">
                        <span className="text-slate-500 flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Updated: {currentDoc.lastUpdated}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                          currentDoc.status === 'final' ? 'bg-green-500/20 text-green-400' :
                          currentDoc.status === 'draft' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-slate-500/20 text-slate-400'
                        }`}>
                          {currentDoc.status.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => copyToClipboard(currentDoc.content)}
                        className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                        title="Copy to clipboard"
                      >
                        <Copy className="w-5 h-5 text-slate-300" />
                      </button>
                      <button
                        onClick={() => window.print()}
                        className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                        title="Print"
                      >
                        <Printer className="w-5 h-5 text-slate-300" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Document Content */}
                <div className="p-4 sm:p-6 max-h-[70vh] overflow-y-auto">
                  <pre className="whitespace-pre-wrap font-mono text-sm text-slate-300 leading-relaxed">
                    {currentDoc.content}
                  </pre>
                </div>

                {/* Document Footer */}
                <div className="p-4 sm:p-6 border-t border-slate-700 bg-slate-900/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-yellow-400">
                      <AlertCircle className="w-4 h-4" />
                      <span>This is a template. Review with legal counsel before use.</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(currentDoc.content)}
                      className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                    >
                      <Copy className="w-4 h-4" />
                      Copy Document
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-8 bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-yellow-400 mb-2">Legal Disclaimer</h3>
              <p className="text-slate-300 text-sm">
                These documents are templates prepared for Nuqta Technology L.L.C. They should be reviewed
                and customized by qualified legal counsel before use. Nuqta is not providing legal advice.
                Laws and regulations change frequently - ensure compliance with current UAE law.
              </p>
              <p className="text-slate-400 text-sm mt-2">
                Recommended: Engage a UAE-licensed law firm for document finalization, especially for
                MOA (requires notarization), employment contracts (MOHRE templates may be required),
                and any customer-facing legal documents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalDocumentsPage;
