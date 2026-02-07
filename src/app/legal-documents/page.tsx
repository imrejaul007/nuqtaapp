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
  },
  {
    id: 'shareholder-resolution',
    title: 'Shareholder Resolution Template',
    category: 'Corporate Governance',
    status: 'draft',
    lastUpdated: 'Feb 7, 2026',
    description: 'Template for shareholder resolutions for major company decisions.',
    content: `SHAREHOLDER RESOLUTION
NUQTA TECHNOLOGY L.L.C.

Resolution No: [SR-2026-XXX]
Date: _______________

═══════════════════════════════════════════════════════════════════

WRITTEN RESOLUTION OF THE SOLE SHAREHOLDER / SHAREHOLDERS
OF
NUQTA TECHNOLOGY L.L.C.
(Trade License No: [Number])

═══════════════════════════════════════════════════════════════════

The undersigned, being [the sole shareholder / all the shareholders] of Nuqta Technology L.L.C. (the "Company"), hereby adopt the following resolution(s) effective as of the date set forth above:

═══════════════════════════════════════════════════════════════════

RESOLUTION 1: [TITLE - e.g., APPOINTMENT OF MANAGER]

WHEREAS, [background/reason for resolution];

NOW, THEREFORE, BE IT RESOLVED THAT:

1.1 [Specific resolution detail]
1.2 [Additional detail if needed]
1.3 [Further detail if needed]

═══════════════════════════════════════════════════════════════════

RESOLUTION 2: [TITLE - e.g., CAPITAL INCREASE]

WHEREAS, [background/reason];

NOW, THEREFORE, BE IT RESOLVED THAT:

2.1 [Specific resolution detail]
2.2 [Additional detail if needed]

═══════════════════════════════════════════════════════════════════

GENERAL AUTHORIZATIONS

BE IT FURTHER RESOLVED THAT:

• The Manager(s) of the Company are authorized to take all actions necessary to implement the above resolution(s);

• The Manager(s) are authorized to execute any documents, certificates, or filings required to give effect to the above resolution(s);

• Any actions taken prior to this resolution that are consistent with the above are hereby ratified and approved.

═══════════════════════════════════════════════════════════════════

SHAREHOLDER SIGNATURES

Shareholder: Rejaul Karim
Share Percentage: 100%
Signature: _________________________
Date: _____________________________

[If multiple shareholders, add signature blocks for each]

═══════════════════════════════════════════════════════════════════

COMMON RESOLUTION TYPES - TEMPLATES

─────────────────────────────────────────────────────────────────

A. APPOINTMENT OF MANAGER/DIRECTOR

RESOLVED THAT [Name], holding [Nationality] passport number [Number], is hereby appointed as [Title] of the Company, effective [Date], with the following authorities:
• [List specific authorities]
• [Banking authority]
• [Signing authority]

─────────────────────────────────────────────────────────────────

B. BANK ACCOUNT OPENING

RESOLVED THAT the Company shall open a corporate bank account with [Bank Name], and that the following individuals are authorized signatories:
• [Name 1] - [Single/Joint] signatory authority
• [Name 2] - [Single/Joint] signatory authority

Transaction limits:
• Single signature up to: AED [Amount]
• Dual signature required above: AED [Amount]

─────────────────────────────────────────────────────────────────

C. CAPITAL INCREASE

RESOLVED THAT the authorized share capital of the Company shall be increased from AED [Current Amount] to AED [New Amount], and that such increase shall be:
• Contributed by [Shareholder Name]: AED [Amount]
• In the form of: [Cash/Kind/Retained Earnings]
• The MOA shall be amended accordingly

─────────────────────────────────────────────────────────────────

D. SHARE TRANSFER

RESOLVED THAT [Transferor Name] shall transfer [Number] shares ([Percentage]%) to [Transferee Name] for a consideration of AED [Amount], subject to:
• Completion of share transfer documentation
• Amendment of MOA
• Regulatory approvals

─────────────────────────────────────────────────────────────────

E. APPROVAL OF INVESTMENT/FUNDING

RESOLVED THAT the Company is authorized to:
• Accept investment of AED/USD [Amount] from [Investor Name]
• Issue [Type of instrument - e.g., SAFE, Convertible Note, Equity]
• Terms as per the attached term sheet dated [Date]
• The CEO is authorized to negotiate and execute final documents

─────────────────────────────────────────────────────────────────

F. APPROVAL OF MAJOR CONTRACT

RESOLVED THAT the Company is authorized to enter into a [Type] agreement with [Party Name] for [Purpose], with a value of approximately AED [Amount], substantially in the form reviewed by the shareholders.

─────────────────────────────────────────────────────────────────

G. APPROVAL OF EMPLOYEE STOCK OPTION PLAN (ESOP)

RESOLVED THAT an Employee Stock Option Plan is hereby established, reserving [Percentage]% of the Company's fully diluted equity for employee grants, pursuant to the terms of the ESOP document dated [Date].

═══════════════════════════════════════════════════════════════════

CERTIFICATION

I, the undersigned, being the [Manager/Secretary] of Nuqta Technology L.L.C., hereby certify that:

1. The above is a true and correct copy of the resolution(s) duly adopted by the shareholder(s) of the Company;
2. The resolution(s) remain in full force and effect as of the date hereof;
3. The resolution(s) have not been amended, modified, or rescinded.

Certified By: _________________________
Name: Rejaul Karim
Title: CEO & Manager
Date: _____________________________
Company Stamp: [Affix]`
  },
  {
    id: 'board-resolution',
    title: 'Board/Manager Resolution Template',
    category: 'Corporate Governance',
    status: 'draft',
    lastUpdated: 'Feb 7, 2026',
    description: 'Template for management/board resolutions for operational decisions.',
    content: `MANAGER'S RESOLUTION
NUQTA TECHNOLOGY L.L.C.

Resolution No: [MR-2026-XXX]
Date: _______________

═══════════════════════════════════════════════════════════════════

RESOLUTION OF THE MANAGER(S) OF
NUQTA TECHNOLOGY L.L.C.
(Trade License No: [Number])

═══════════════════════════════════════════════════════════════════

A meeting of the Manager(s) of Nuqta Technology L.L.C. (the "Company") was duly held on [Date] at [Time] at [Location / Via Video Conference].

PRESENT:
• Rejaul Karim - CEO & Manager (Chairman)
• [Other managers if applicable]

QUORUM:
A quorum being present, the following resolutions were unanimously adopted:

═══════════════════════════════════════════════════════════════════

RESOLUTION 1: [TITLE]

IT IS RESOLVED THAT:

[Resolution details]

═══════════════════════════════════════════════════════════════════

RESOLUTION 2: [TITLE]

IT IS RESOLVED THAT:

[Resolution details]

═══════════════════════════════════════════════════════════════════

GENERAL AUTHORITIES

IT IS FURTHER RESOLVED THAT:

• The CEO is authorized to execute all documents necessary to implement the above resolutions;
• Any officer of the Company is authorized to certify copies of this resolution;
• Actions taken in furtherance of this resolution prior to its formal adoption are ratified.

═══════════════════════════════════════════════════════════════════

ADJOURNMENT

There being no further business, the meeting was adjourned.

═══════════════════════════════════════════════════════════════════

SIGNATURES

Chairman:
Signature: _________________________
Name: Rejaul Karim
Title: CEO & Manager
Date: _____________________________

[Additional Manager Signatures if applicable]

═══════════════════════════════════════════════════════════════════

COMMON OPERATIONAL RESOLUTIONS

─────────────────────────────────────────────────────────────────

A. HIRING KEY EMPLOYEE

RESOLVED THAT [Name] is hereby employed as [Title] of the Company, effective [Date], with:
• Base Salary: AED [Amount] per annum
• Probation Period: [X] months
• Benefits: As per Employee Handbook
• ESOP Grant: [Number] options (if applicable)

The CEO is authorized to execute the employment contract.

─────────────────────────────────────────────────────────────────

B. VENDOR/SUPPLIER AGREEMENT

RESOLVED THAT the Company is authorized to enter into an agreement with [Vendor Name] for [Services/Products] at an estimated cost of AED [Amount] per [month/year/project].

─────────────────────────────────────────────────────────────────

C. OFFICE LEASE

RESOLVED THAT the Company shall enter into a lease agreement for office space at [Location], for a term of [X] years, at a rent of AED [Amount] per annum, plus applicable fees and deposits.

─────────────────────────────────────────────────────────────────

D. TECHNOLOGY/SOFTWARE PURCHASE

RESOLVED THAT the Company is authorized to purchase/subscribe to [Software/Service] from [Provider] at an annual cost of USD/AED [Amount], for use in the Company's operations.

─────────────────────────────────────────────────────────────────

E. MARKETING CAMPAIGN APPROVAL

RESOLVED THAT a marketing budget of AED [Amount] is approved for [Campaign Name/Period], to be managed by the CMO in accordance with the marketing plan presented.

─────────────────────────────────────────────────────────────────

F. DELEGATION OF AUTHORITY

RESOLVED THAT [Name], [Title], is hereby delegated the following authorities:
• Execute contracts up to AED [Amount]
• Approve expenses up to AED [Amount]
• Represent the Company in [specific matters]

Subject to the overall supervision of the CEO.

─────────────────────────────────────────────────────────────────

G. POLICY ADOPTION

RESOLVED THAT the [Policy Name] dated [Date], as presented to the Manager(s), is hereby adopted as an official policy of the Company, effective [Date].

═══════════════════════════════════════════════════════════════════

CERTIFICATION

This is to certify that the above resolutions were duly adopted at a properly convened meeting of the Manager(s) of Nuqta Technology L.L.C. and remain in full force and effect.

Company Stamp: [Affix]`
  },
  {
    id: 'power-of-attorney',
    title: 'Power of Attorney (POA)',
    category: 'Corporate Governance',
    status: 'draft',
    lastUpdated: 'Feb 7, 2026',
    description: 'General and specific POA templates for company representation.',
    content: `POWER OF ATTORNEY

═══════════════════════════════════════════════════════════════════

GENERAL POWER OF ATTORNEY

Know all persons by these presents that:

NUQTA TECHNOLOGY L.L.C.
Trade License No: [Number]
Registered Address: Dubai, UAE
(hereinafter "the Principal" or "the Company")

Represented by its Manager: Rejaul Karim

HEREBY APPOINTS:

[ATTORNEY NAME]
Nationality: [Nationality]
Passport No: [Number]
Emirates ID: [Number]
Address: [Address]
(hereinafter "the Attorney")

═══════════════════════════════════════════════════════════════════

SCOPE OF AUTHORITY

The Attorney is authorized to act on behalf of the Company in the following matters:

☐ GENERAL AUTHORITY (Check all that apply)

[ ] Full authority to represent the Company in all matters
[ ] Limited authority as specified below

☐ SPECIFIC AUTHORITIES:

GOVERNMENT & REGULATORY:
[ ] Represent the Company before DET (Department of Economy & Tourism)
[ ] Represent the Company before MOHRE (Ministry of Human Resources)
[ ] Represent the Company before Immigration authorities
[ ] Apply for, renew, and amend trade license
[ ] Apply for, renew, and cancel employee visas
[ ] Submit applications to TDRA (Telecommunications Authority)
[ ] Represent before Federal Tax Authority (FTA)
[ ] Represent before any UAE government department

BANKING:
[ ] Open bank accounts
[ ] Operate existing bank accounts
[ ] Sign checks up to AED [Amount]
[ ] Request bank facilities and loans
[ ] Access safe deposit boxes
[ ] Close bank accounts

LEGAL & CONTRACTS:
[ ] Sign contracts on behalf of the Company up to AED [Amount]
[ ] Appear before courts on behalf of the Company
[ ] Engage lawyers and legal representatives
[ ] File and respond to legal claims
[ ] Sign settlement agreements

PROPERTY & ASSETS:
[ ] Sign tenancy contracts (Ejari)
[ ] Purchase or sell company assets
[ ] Manage company properties

EMPLOYMENT:
[ ] Sign employment contracts
[ ] Terminate employment contracts
[ ] Represent in labor disputes

═══════════════════════════════════════════════════════════════════

DURATION

This Power of Attorney shall be effective from [Start Date] and shall:

[ ] Remain valid until revoked in writing
[ ] Expire on [End Date]
[ ] Be valid for one (1) year from the date of notarization

═══════════════════════════════════════════════════════════════════

LIMITATIONS

The Attorney is NOT authorized to:
• Transfer shares or ownership of the Company
• Amend the Memorandum of Association
• Sell or dispose of the entire business
• Bind the Company to obligations exceeding AED [Amount]
• [Add specific limitations]

═══════════════════════════════════════════════════════════════════

SUBSTITUTION

The Attorney:

[ ] May NOT delegate or substitute this authority
[ ] May delegate to [Specific person(s)]
[ ] May delegate at their discretion

═══════════════════════════════════════════════════════════════════

REVOCATION

This Power of Attorney may be revoked at any time by written notice from the Principal to the Attorney. Such revocation shall be effective upon:
• Written notice to the Attorney, and
• Notification to relevant third parties who have relied on this POA

═══════════════════════════════════════════════════════════════════

PRINCIPAL'S DECLARATION

I, the undersigned, acting as Manager of Nuqta Technology L.L.C., declare that:

1. I have the authority to grant this Power of Attorney on behalf of the Company;
2. This POA is granted in accordance with the Company's Memorandum of Association;
3. A shareholder resolution authorizing this POA was passed on [Date] (if required);
4. The Attorney named herein is authorized to act within the scope defined above.

═══════════════════════════════════════════════════════════════════

SIGNATURES

PRINCIPAL:
Nuqta Technology L.L.C.

Signature: _________________________
Name: Rejaul Karim
Title: CEO & Manager
Date: _____________________________
Company Stamp: [Affix]

ATTORNEY (Acceptance):

I, [Attorney Name], hereby accept this appointment and agree to act in accordance with the authorities and limitations set forth herein.

Signature: _________________________
Date: _____________________________

═══════════════════════════════════════════════════════════════════

NOTARIZATION

[Space for notary public attestation]

Notary Public: _________________________
Seal: [Notary Seal]
Date: _____________________________
Place: Dubai, UAE

═══════════════════════════════════════════════════════════════════

ATTESTATION (If required for use outside UAE)

Ministry of Foreign Affairs: _________________________
Embassy/Consulate: _________________________

═══════════════════════════════════════════════════════════════════

NOTE: This document should be executed in Arabic for official use in UAE government departments. An English translation may be attached.`
  },
  {
    id: 'bank-documents',
    title: 'Bank Account Opening Documents',
    category: 'Banking & Finance',
    status: 'draft',
    lastUpdated: 'Feb 7, 2026',
    description: 'Complete package of documents required for corporate bank account opening.',
    content: `CORPORATE BANK ACCOUNT OPENING PACKAGE
NUQTA TECHNOLOGY L.L.C.

═══════════════════════════════════════════════════════════════════

1. DOCUMENT CHECKLIST FOR BANK ACCOUNT OPENING

Required documents for opening a corporate bank account in UAE:

COMPANY DOCUMENTS:
☐ Trade License (certified copy)
☐ Certificate of Incorporation
☐ Memorandum of Association (certified copy)
☐ Share Certificate(s)
☐ Certificate of Good Standing (if older than 1 year)
☐ Shareholder Resolution authorizing account opening
☐ Manager Resolution authorizing signatories

SHAREHOLDER DOCUMENTS:
☐ Passport copies (all shareholders)
☐ Emirates ID copies (all shareholders resident in UAE)
☐ Proof of address (utility bill / bank statement)
☐ Source of funds documentation

SIGNATORY DOCUMENTS:
☐ Passport copies (all signatories)
☐ Emirates ID copies (all signatories)
☐ Board/Manager Resolution appointing signatories
☐ Specimen signature cards

BUSINESS INFORMATION:
☐ Business plan / Company profile
☐ Expected transaction volumes
☐ Major customers / suppliers
☐ Website information

═══════════════════════════════════════════════════════════════════

2. SHAREHOLDER RESOLUTION - BANK ACCOUNT

SHAREHOLDER RESOLUTION
NUQTA TECHNOLOGY L.L.C.

Resolution No: SR-2026-BANK
Date: _______________

RESOLVED THAT:

1. The Company shall open a corporate current account with [BANK NAME], Dubai Branch.

2. The following individuals are appointed as authorized signatories:

   a) Rejaul Karim (CEO)
      - Authority: Single signatory for all transactions
      - Emirates ID: [Number]
      - Passport: [Number]

   b) [Name] ([Title])
      - Authority: Joint signatory with any other signatory
      - Emirates ID: [Number]
      - Passport: [Number]

3. Signing Mandate:
   - Transactions up to AED 100,000: Single signature (Rejaul Karim)
   - Transactions above AED 100,000: Any two signatories jointly
   - International transfers: Any two signatories jointly

4. The authorized signatories may:
   - Deposit and withdraw funds
   - Issue checks and demand drafts
   - Request bank statements and certificates
   - Operate internet/mobile banking
   - Apply for additional banking facilities
   - Close accounts (with shareholder approval)

5. This resolution supersedes any previous banking resolutions.

SHAREHOLDER:
Signature: _________________________
Name: Rejaul Karim
Shareholding: 100%
Date: _____________________________

═══════════════════════════════════════════════════════════════════

3. COMPANY PROFILE FOR BANKS

COMPANY PROFILE

Company Name: Nuqta Technology L.L.C.
Trade Name: NUQTA
License Number: [Number]
Date of Incorporation: [Date]

BUSINESS OVERVIEW:
Nuqta is a technology company operating a rewards and loyalty platform connecting consumers with merchants in the UAE. Users earn points through everyday purchases and redeem them for rewards.

BUSINESS MODEL:
• B2B: Merchant subscription fees for platform access
• Commission: Percentage of transaction value
• Advertising: Targeted promotional placements

EXPECTED MONTHLY TRANSACTIONS:

Year 1 Projections:
┌─────────────────────────┬─────────────────────────────────────┐
│ Transaction Type        │ Monthly Volume (AED)                │
├─────────────────────────┼─────────────────────────────────────┤
│ Incoming - Investment   │ 500,000 - 2,000,000 (periodic)      │
│ Incoming - Revenue      │ 50,000 - 200,000                    │
│ Outgoing - Salaries     │ 150,000 - 300,000                   │
│ Outgoing - Vendors      │ 50,000 - 150,000                    │
│ Outgoing - Marketing    │ 50,000 - 200,000                    │
└─────────────────────────┴─────────────────────────────────────┘

MAJOR ANTICIPATED CUSTOMERS:
• Retail merchants (restaurants, cafes, retail stores)
• E-commerce platforms
• Corporate partners

MAJOR ANTICIPATED SUPPLIERS:
• AWS (cloud services)
• Marketing agencies
• Technology vendors
• Office landlord

SOURCE OF FUNDS:
• Initial capital: Founder investment
• Operational funds: Revenue from operations
• Growth capital: Venture capital investment

INTERNATIONAL TRANSACTIONS:
• Incoming: Potential international investor funds
• Outgoing: Technology service providers (AWS, software)

═══════════════════════════════════════════════════════════════════

4. ACCOUNT OPERATING INSTRUCTIONS

STANDING INSTRUCTIONS

Account Name: NUQTA TECHNOLOGY L.L.C.
Account Number: [To be assigned]

1. GENERAL INSTRUCTIONS
   - Maintain minimum balance as per bank requirements
   - All correspondence to: legal@nuqta.io
   - Statements: Monthly by email
   - Checkbook: Issue upon request

2. PAYMENT INSTRUCTIONS

   Salary Payments:
   - Process via WPS (Wage Protection System)
   - Authorized by: CEO or CFO
   - Day: 28th of each month

   Vendor Payments:
   - Standard payment terms: 30 days
   - Authorized by: Per signing mandate

   International Transfers:
   - Currency: USD, EUR, GBP, INR
   - Purpose: Service payments, technology subscriptions

3. INTERNET BANKING
   - Activate for authorized signatories
   - Transaction limits: Per signing mandate
   - Alerts: All transactions above AED 10,000

4. ADDITIONAL SERVICES REQUESTED
   - Corporate credit card (for CEO)
   - Foreign currency account (USD)
   - Trade finance facilities (future)

═══════════════════════════════════════════════════════════════════

5. SPECIMEN SIGNATURE CARD

NUQTA TECHNOLOGY L.L.C.
SPECIMEN SIGNATURE CARD

Account Number: _______________

Signatory 1:
Name: Rejaul Karim
Designation: CEO
Signature: _______________  _______________  _______________
           (Sign three times)

Signatory 2:
Name: _______________
Designation: _______________
Signature: _______________  _______________  _______________

Signatory 3:
Name: _______________
Designation: _______________
Signature: _______________  _______________  _______________

Verified By: _______________
Date: _______________
Company Stamp: [Affix]

═══════════════════════════════════════════════════════════════════

BANK CONTACT INFORMATION

Recommended Banks for Startups in UAE:
• Emirates NBD - Business Banking
• RAKBANK - Business Plus Account
• Mashreq Bank - Neo Biz
• Commercial Bank of Dubai - Business Account
• First Abu Dhabi Bank - Business Account

Note: Account opening typically takes 2-4 weeks. Some banks may request additional documentation or interviews.`
  },
  {
    id: 'safe-agreement',
    title: 'SAFE Agreement (Investor)',
    category: 'Investment Documents',
    status: 'draft',
    lastUpdated: 'Feb 7, 2026',
    description: 'Simple Agreement for Future Equity for angel/seed investors.',
    content: `SIMPLE AGREEMENT FOR FUTURE EQUITY (SAFE)

THIS CERTIFIES THAT in exchange for the payment by [INVESTOR NAME] (the "Investor") of [AMOUNT] (the "Purchase Amount") on or about [DATE], Nuqta Technology L.L.C., a limited liability company organized under the laws of the United Arab Emirates (the "Company"), issues to the Investor the right to certain shares of the Company's equity, subject to the terms set forth below.

═══════════════════════════════════════════════════════════════════

1. EVENTS

(a) Equity Financing
If there is an Equity Financing before the termination of this SAFE, on the initial closing of such Equity Financing, this SAFE will automatically convert into the number of shares of Safe Preferred Stock equal to the Purchase Amount divided by the Conversion Price.

In connection with the automatic conversion of this SAFE into shares of Safe Preferred Stock, the Investor will execute and deliver to the Company all of the transaction documents related to the Equity Financing.

(b) Liquidity Event
If there is a Liquidity Event before the termination of this SAFE, this SAFE will automatically be entitled to receive a portion of Proceeds equal to the greater of:
(i) the Purchase Amount; or
(ii) the amount payable on the number of shares of Common Stock equal to the Purchase Amount divided by the Liquidity Price.

(c) Dissolution Event
If there is a Dissolution Event before the termination of this SAFE, the Investor will be entitled to receive a portion of Proceeds equal to the Purchase Amount, due and payable to the Investor immediately prior to, or concurrent with, the consummation of the Dissolution Event.

═══════════════════════════════════════════════════════════════════

2. DEFINITIONS

"Conversion Price" means the price per share equal to:

[ ] Option 1 - Valuation Cap Only:
    The Valuation Cap divided by the Company Capitalization.

[ ] Option 2 - Discount Only:
    The price per share of the Standard Preferred Stock sold in the Equity Financing multiplied by the Discount Rate.

[ ] Option 3 - Valuation Cap and Discount (whichever results in lower price):
    The lower of:
    (a) the Valuation Cap divided by the Company Capitalization; or
    (b) the price per share of the Standard Preferred Stock sold in the Equity Financing multiplied by the Discount Rate.

"Valuation Cap" means USD [AMOUNT].

"Discount Rate" means [PERCENTAGE]% (e.g., 80% = 20% discount).

"Company Capitalization" means the sum of:
(a) all shares of capital stock issued and outstanding immediately prior to the Equity Financing;
(b) all shares of capital stock issuable upon conversion of outstanding convertible securities;
(c) all shares reserved for issuance under equity incentive plans.

"Equity Financing" means a bona fide transaction or series of transactions with the principal purpose of raising capital, pursuant to which the Company issues and sells Preferred Stock at a fixed valuation.

"Liquidity Event" means a Change of Control or an Initial Public Offering.

"Liquidity Price" means the price per share equal to:
The Valuation Cap divided by the Liquidity Capitalization.

"Safe Preferred Stock" means shares of Preferred Stock issued to Investor in an Equity Financing with identical rights, privileges, preferences and restrictions as the Standard Preferred Stock, except that the per share liquidation preference and conversion price shall be equal to the Conversion Price.

═══════════════════════════════════════════════════════════════════

3. COMPANY REPRESENTATIONS

The Company represents and warrants that:

(a) The Company is duly organized and validly existing under the laws of the UAE.

(b) The execution and delivery of this SAFE has been duly authorized by the Company.

(c) This SAFE constitutes a valid and binding obligation of the Company.

(d) The performance of this SAFE does not violate any existing agreement to which the Company is a party.

═══════════════════════════════════════════════════════════════════

4. INVESTOR REPRESENTATIONS

The Investor represents and warrants that:

(a) The Investor has full legal capacity to enter into this SAFE.

(b) The Investor is an accredited investor as defined under applicable law.

(c) The Investor is acquiring this SAFE for investment purposes only, not with a view to resale.

(d) The Investor understands that this SAFE involves substantial risk and that the Investor could lose the entire investment.

(e) The Investor has had an opportunity to ask questions and receive answers concerning the Company.

═══════════════════════════════════════════════════════════════════

5. MISCELLANEOUS

(a) Information Rights
As long as this SAFE is outstanding, the Company shall provide the Investor with:
• Annual financial statements (within 120 days of year end)
• Quarterly financial updates (within 45 days of quarter end)
• Notice of any Equity Financing, Liquidity Event, or Dissolution Event

(b) Pro-Rata Rights
The Investor shall have the right to participate in future Equity Financings on a pro-rata basis, calculated based on the Investor's ownership percentage.

(c) MFN (Most Favored Nation)
If the Company issues any future SAFEs with more favorable terms (lower valuation cap, higher discount), the Investor may elect to adopt those terms.

(d) Amendments
This SAFE may only be amended with the written consent of both the Company and the Investor.

(e) Governing Law
This SAFE shall be governed by the laws of the United Arab Emirates, without regard to conflicts of law principles.

(f) Dispute Resolution
Any dispute arising from this SAFE shall be resolved by arbitration in Dubai under DIAC rules.

(g) No Employment Rights
This SAFE does not entitle the Investor to any employment, management, or directorship rights.

═══════════════════════════════════════════════════════════════════

6. SIGNATURES

IN WITNESS WHEREOF, the undersigned have caused this SAFE to be duly executed.

COMPANY:
Nuqta Technology L.L.C.

Signature: _________________________
Name: Rejaul Karim
Title: CEO
Date: _____________________________

INVESTOR:
[Investor Name]

Signature: _________________________
Name: _____________________________
Title (if entity): _____________________________
Date: _____________________________

═══════════════════════════════════════════════════════════════════

SCHEDULE A: INVESTMENT DETAILS

Investor Name: ___________________________
Investor Address: ___________________________
Investor Email: ___________________________
Investment Amount: USD ___________________________
Valuation Cap: USD ___________________________
Discount Rate: ___________________________%
Date of Investment: ___________________________
Wire Transfer Details: [Attached]`
  },
  {
    id: 'convertible-note',
    title: 'Convertible Note Agreement',
    category: 'Investment Documents',
    status: 'draft',
    lastUpdated: 'Feb 7, 2026',
    description: 'Convertible promissory note for early-stage investment.',
    content: `CONVERTIBLE PROMISSORY NOTE

Principal Amount: USD [AMOUNT]
Issue Date: [DATE]
Maturity Date: [DATE - typically 18-24 months from issue]

═══════════════════════════════════════════════════════════════════

FOR VALUE RECEIVED, Nuqta Technology L.L.C., a limited liability company organized under the laws of the United Arab Emirates (the "Company"), promises to pay to [INVESTOR NAME] (the "Holder"), or its assigns, the principal sum of [AMOUNT] UNITED STATES DOLLARS (USD [AMOUNT]), together with accrued interest, subject to the terms and conditions set forth herein.

═══════════════════════════════════════════════════════════════════

1. INTEREST

1.1 Interest Rate
This Note shall bear interest at a rate of [X]% per annum (the "Interest Rate"), calculated on a 365-day year basis.

1.2 Accrual
Interest shall accrue from the Issue Date and shall be compounded annually.

1.3 Payment
Accrued interest shall be payable only upon conversion or repayment of this Note.

═══════════════════════════════════════════════════════════════════

2. CONVERSION

2.1 Automatic Conversion - Qualified Financing
Upon the closing of a Qualified Financing, the outstanding principal and accrued interest of this Note shall automatically convert into shares of the equity securities issued in such Qualified Financing at the Conversion Price.

"Qualified Financing" means an equity financing in which the Company raises at least USD [AMOUNT - e.g., $1,000,000] in gross proceeds (excluding conversion of this Note and any other convertible securities).

2.2 Conversion Price
The Conversion Price shall be the lower of:
(a) [DISCOUNT]% of the price per share paid by investors in the Qualified Financing (the "Discount Price"); or
(b) The price per share derived from dividing the Valuation Cap by the Company's fully diluted capitalization immediately prior to the Qualified Financing (the "Cap Price").

"Valuation Cap" means USD [AMOUNT].

2.3 Optional Conversion - Non-Qualified Financing
If the Company raises equity financing that does not constitute a Qualified Financing, the Holder may elect to convert this Note at the Cap Price.

2.4 Optional Conversion at Maturity
If this Note has not been converted by the Maturity Date, the Holder may elect to:
(a) Convert the outstanding principal and accrued interest at the Cap Price; or
(b) Demand repayment of the outstanding principal and accrued interest.

2.5 Conversion upon Change of Control
Upon a Change of Control, the Holder may elect to:
(a) Convert at the Cap Price immediately prior to such Change of Control; or
(b) Receive repayment of [1.5x / 2x] the outstanding principal plus accrued interest.

═══════════════════════════════════════════════════════════════════

3. REPAYMENT

3.1 Maturity
Unless earlier converted, the outstanding principal and accrued interest shall be due and payable on the Maturity Date.

3.2 Prepayment
The Company may not prepay this Note without the Holder's written consent.

3.3 No Demand
The Holder may not demand repayment before the Maturity Date except as provided in Section 2.5 or upon an Event of Default.

═══════════════════════════════════════════════════════════════════

4. EVENTS OF DEFAULT

The following shall constitute Events of Default:

4.1 Failure to pay any amount due under this Note within 10 days of the due date;

4.2 Breach of any material covenant or representation that remains uncured for 30 days after notice;

4.3 Bankruptcy, insolvency, or dissolution of the Company;

4.4 Sale of all or substantially all of the Company's assets without consent.

Upon an Event of Default, the Holder may declare all amounts immediately due and payable.

═══════════════════════════════════════════════════════════════════

5. REPRESENTATIONS AND WARRANTIES

5.1 Company Representations
The Company represents and warrants that:
(a) It is duly organized and in good standing;
(b) It has the authority to enter into this Note;
(c) This Note is a valid and binding obligation;
(d) No consent or approval is required for execution.

5.2 Holder Representations
The Holder represents and warrants that:
(a) The Holder is an accredited investor;
(b) The Holder is acquiring this Note for investment purposes;
(c) The Holder understands the risks of this investment;
(d) The Holder has had opportunity to conduct due diligence.

═══════════════════════════════════════════════════════════════════

6. COVENANTS

While this Note is outstanding, the Company agrees to:

6.1 Provide quarterly financial updates to the Holder;

6.2 Maintain adequate insurance;

6.3 Comply with all applicable laws;

6.4 Not incur additional indebtedness that is senior to this Note without consent;

6.5 Not pay dividends or make distributions without consent;

6.6 Notify the Holder of any material adverse change.

═══════════════════════════════════════════════════════════════════

7. MISCELLANEOUS

7.1 Amendments
This Note may only be amended with written consent of both parties.

7.2 Waiver
No waiver shall be effective unless in writing.

7.3 Notices
All notices shall be in writing to the addresses set forth below.

7.4 Governing Law
This Note shall be governed by the laws of the UAE.

7.5 Dispute Resolution
Disputes shall be resolved by arbitration in Dubai under DIAC rules.

7.6 Successors
This Note shall bind and benefit the parties and their successors and assigns.

7.7 Severability
If any provision is invalid, the remaining provisions shall continue in effect.

═══════════════════════════════════════════════════════════════════

8. SIGNATURES

IN WITNESS WHEREOF, the Company has executed this Convertible Promissory Note as of the Issue Date.

COMPANY:
Nuqta Technology L.L.C.

Signature: _________________________
Name: Rejaul Karim
Title: CEO
Date: _____________________________

ACKNOWLEDGED AND AGREED:
HOLDER:

Signature: _________________________
Name: _____________________________
Address: _________________________
Email: _________________________
Date: _____________________________

═══════════════════════════════════════════════════════════════════

SCHEDULE OF KEY TERMS

Principal Amount: USD _______________
Interest Rate: _______________% per annum
Maturity Date: _______________ (__ months from Issue Date)
Valuation Cap: USD _______________
Discount Rate: _______________%
Qualified Financing Threshold: USD _______________`
  },
  {
    id: 'compliance-declaration',
    title: 'Compliance Declaration Forms',
    category: 'Regulatory Compliance',
    status: 'draft',
    lastUpdated: 'Feb 7, 2026',
    description: 'Various compliance declarations required for UAE regulations.',
    content: `COMPLIANCE DECLARATION FORMS
NUQTA TECHNOLOGY L.L.C.

═══════════════════════════════════════════════════════════════════

FORM 1: BENEFICIAL OWNERSHIP DECLARATION
(Required for AML/CFT Compliance)

═══════════════════════════════════════════════════════════════════

DECLARATION OF BENEFICIAL OWNERSHIP

I, the undersigned, being the [Manager / Authorized Representative] of Nuqta Technology L.L.C. (Trade License No: [Number]), hereby declare and confirm the following:

1. BENEFICIAL OWNERS

The following individuals are the beneficial owners of the Company, each owning or controlling more than 25% of the shares or voting rights:

┌─────────────────────┬─────────────┬────────────┬───────────────┐
│ Name                │ Nationality │ Ownership  │ ID Number     │
├─────────────────────┼─────────────┼────────────┼───────────────┤
│ Rejaul Karim        │ Indian      │ 100%       │ [Emirates ID] │
├─────────────────────┼─────────────┼────────────┼───────────────┤
│                     │             │            │               │
└─────────────────────┴─────────────┴────────────┴───────────────┘

2. CONTROL STRUCTURE

[ ] The Company is directly owned by the individuals listed above
[ ] The Company is owned through intermediate entities (structure attached)

3. NO HIDDEN OWNERSHIP

I confirm that:
• The beneficial ownership information provided is complete and accurate
• There are no nominee arrangements or hidden ownership structures
• No other person exercises control over the Company through any means

4. POLITICALLY EXPOSED PERSONS (PEP)

[ ] None of the beneficial owners are Politically Exposed Persons
[ ] The following beneficial owner(s) are PEPs: _______________

5. SOURCE OF FUNDS

The source of funds for the beneficial owners is:
[ ] Employment income
[ ] Business profits
[ ] Inheritance
[ ] Investment returns
[ ] Other: _______________

6. UNDERTAKING

I undertake to notify the relevant authorities within 15 days of any change in beneficial ownership.

Declared by:
Signature: _________________________
Name: Rejaul Karim
Position: CEO & Manager
Date: _____________________________
Company Stamp: [Affix]

═══════════════════════════════════════════════════════════════════

FORM 2: PDPL COMPLIANCE DECLARATION
(Personal Data Protection Law)

═══════════════════════════════════════════════════════════════════

DECLARATION OF PDPL COMPLIANCE

Company: Nuqta Technology L.L.C.
Trade License: [Number]
Date: _______________

I hereby declare that Nuqta Technology L.L.C. has implemented the following measures to comply with UAE Federal Decree-Law No. 45 of 2021 (Personal Data Protection Law):

1. DATA GOVERNANCE
[ ] Appointed a Data Protection Officer or responsible person
   Name: _______________
   Email: privacy@nuqtaapp.com

[ ] Established data processing policies and procedures
[ ] Maintains records of processing activities
[ ] Implemented data classification system

2. LEGAL BASIS FOR PROCESSING
[ ] Identified legal basis for all personal data processing activities
[ ] Documented purposes for data collection
[ ] Implemented consent management mechanisms

3. DATA SUBJECT RIGHTS
[ ] Established procedures for handling data subject requests
[ ] Can respond to requests within required timeframes
[ ] Provides transparent privacy notices

4. DATA SECURITY
[ ] Implemented appropriate technical security measures
[ ] Implemented organizational security measures
[ ] Maintains data breach response procedures
[ ] Conducts regular security assessments

5. THIRD-PARTY MANAGEMENT
[ ] Uses approved data processing agreements with processors
[ ] Assesses third-party security before engagement
[ ] Maintains list of sub-processors

6. CROSS-BORDER TRANSFERS
[ ] Data is processed only within UAE
[ ] Data transferred internationally with appropriate safeguards:
    _______________

7. TRAINING
[ ] Staff trained on data protection obligations
[ ] Training conducted: [Date]
[ ] Training to be repeated: [Frequency]

I confirm that the above information is accurate and that the Company is committed to ongoing PDPL compliance.

Signed:
Signature: _________________________
Name: Rejaul Karim
Position: CEO
Date: _____________________________

═══════════════════════════════════════════════════════════════════

FORM 3: VAT COMPLIANCE DECLARATION
(Federal Tax Authority)

═══════════════════════════════════════════════════════════════════

VAT COMPLIANCE DECLARATION

Tax Registration Number (TRN): [Number]
Tax Period: _______________

I, the undersigned, being the authorized representative of Nuqta Technology L.L.C., hereby declare that:

1. All VAT returns filed for the above period are complete and accurate
2. All VAT collected has been properly accounted for
3. All input VAT claimed is supported by valid tax invoices
4. Records are maintained as required under the Tax Procedures Law
5. The company is in compliance with all VAT obligations

Declared by:
Signature: _________________________
Name: _______________
Position: _______________
Date: _____________________________

═══════════════════════════════════════════════════════════════════

FORM 4: AML/CFT COMPLIANCE ATTESTATION

═══════════════════════════════════════════════════════════════════

AML/CFT COMPLIANCE ATTESTATION

I, Rejaul Karim, CEO of Nuqta Technology L.L.C., hereby attest that:

1. The Company has adopted and implemented an AML/CFT policy in accordance with UAE laws and regulations.

2. The policy includes:
   [ ] Customer Due Diligence (CDD) procedures
   [ ] Enhanced Due Diligence (EDD) for high-risk customers
   [ ] Transaction monitoring procedures
   [ ] Suspicious Activity Report (SAR) filing procedures
   [ ] Record-keeping requirements
   [ ] Employee training program

3. The Company has appointed a Compliance Officer:
   Name: _______________
   Contact: compliance@nuqtaapp.com

4. No transactions have been processed that the Company knows or suspects to be related to money laundering or terrorist financing.

5. The Company will report any suspicious activities to the UAE Financial Intelligence Unit (FIU) as required.

Signature: _________________________
Name: Rejaul Karim
Position: CEO
Date: _____________________________
Company Stamp: [Affix]

═══════════════════════════════════════════════════════════════════

FORM 5: SANCTIONS COMPLIANCE DECLARATION

═══════════════════════════════════════════════════════════════════

SANCTIONS COMPLIANCE DECLARATION

Nuqta Technology L.L.C. hereby declares that:

1. The Company does not engage in business with any individuals, entities, or countries subject to:
   • UN Security Council Sanctions
   • UAE Local Terrorist List
   • US OFAC Sanctions (to the extent applicable)
   • EU Sanctions (to the extent applicable)

2. The Company screens all:
   [ ] Customers
   [ ] Merchants
   [ ] Vendors
   [ ] Business partners

   Against applicable sanctions lists before onboarding.

3. The Company will immediately terminate any relationship if a party is found to be sanctioned.

4. The Company does not facilitate transactions that would violate applicable sanctions laws.

Declared by:
Signature: _________________________
Name: Rejaul Karim
Position: CEO
Date: _____________________________`
  },
  {
    id: 'visa-documents',
    title: 'Employee Visa Application Documents',
    category: 'Employment & Immigration',
    status: 'draft',
    lastUpdated: 'Feb 7, 2026',
    description: 'Complete documentation package for employee visa applications.',
    content: `EMPLOYEE VISA APPLICATION PACKAGE
NUQTA TECHNOLOGY L.L.C.

═══════════════════════════════════════════════════════════════════

1. VISA APPLICATION CHECKLIST

For each employee visa application, prepare the following:

FROM COMPANY:
☐ Trade License (certified copy)
☐ Immigration Card copy
☐ Establishment Card copy
☐ Company Memorandum of Association
☐ Office Ejari (tenancy contract)
☐ Job Offer Letter (signed)
☐ Employment Contract (MOHRE standard form)
☐ Company authorization letter

FROM EMPLOYEE:
☐ Passport copy (valid 6+ months, color copy)
☐ Passport-size photos (white background, 4 copies)
☐ Educational certificates (attested)
☐ Previous UAE visa copy (if applicable)
☐ Police clearance certificate (some categories)
☐ Medical fitness test results (after entry)
☐ Emirates ID application (after visa stamping)

═══════════════════════════════════════════════════════════════════

2. JOB OFFER LETTER TEMPLATE

[On Company Letterhead]

Date: _______________

OFFER OF EMPLOYMENT

Dear [EMPLOYEE NAME],

We are pleased to offer you the position of [JOB TITLE] at Nuqta Technology L.L.C. subject to the following terms:

1. POSITION
   Title: [Job Title]
   Department: [Department]
   Reporting to: [Manager Name/Title]
   Start Date: [Date]

2. COMPENSATION
   Basic Salary: AED [Amount] per month
   Housing Allowance: AED [Amount] per month
   Transportation Allowance: AED [Amount] per month
   Total Monthly Package: AED [Amount]

3. BENEFITS
   • Annual leave: 30 calendar days
   • Sick leave: As per UAE Labor Law
   • Health insurance: Provided by Company
   • Air ticket: Annual return ticket to home country
   • End of service: As per UAE Labor Law

4. PROBATION
   Duration: 6 months
   Notice during probation: 14 days

5. WORKING HOURS
   Sunday to Thursday: 9:00 AM to 6:00 PM
   Friday/Saturday: Off

6. VISA SPONSORSHIP
   The Company will sponsor your UAE employment visa.
   All visa and Emirates ID costs will be borne by the Company.

7. CONDITIONS
   This offer is contingent upon:
   • Successful background verification
   • Medical fitness clearance
   • Valid travel documents
   • Educational certificate attestation

Please sign below to accept this offer. This letter is valid for 14 days.

For Nuqta Technology L.L.C.:

Signature: _________________________
Name: Rejaul Karim
Title: CEO
Date: _____________________________

ACCEPTANCE

I, [Employee Name], accept this offer of employment and the terms outlined above.

Signature: _________________________
Date: _____________________________

═══════════════════════════════════════════════════════════════════

3. EMPLOYMENT CONTRACT (MOHRE FORMAT - KEY TERMS)

Note: Use the official MOHRE standard employment contract. Key terms to specify:

CONTRACT TYPE:
[ ] Unlimited (standard)
[ ] Limited (fixed term): _____ years

SALARY BREAKDOWN (AED per month):
Basic Salary: _______________
Housing Allowance: _______________
Transportation: _______________
Other Allowances: _______________
TOTAL: _______________

WORKING HOURS:
Normal: 8 hours per day, 48 hours per week
Ramadan: 6 hours per day

LEAVE ENTITLEMENTS:
Annual Leave: 30 days after 1 year (2 days per month before)
Sick Leave: As per Labor Law (15 days full, 30 days half, 45 unpaid)
Maternity Leave: 60 days (45 full pay + 15 half pay)

NOTICE PERIOD:
During Probation: 14 days
After Probation: 30 days

END OF SERVICE GRATUITY:
• 21 days salary per year for first 5 years
• 30 days salary per year after 5 years
• Maximum: 2 years total salary

═══════════════════════════════════════════════════════════════════

4. COMPANY AUTHORIZATION LETTER

[On Company Letterhead]

Date: _______________
To: General Directorate of Residency and Foreigners Affairs (GDRFA) - Dubai

Subject: Authorization for Employee Visa Processing

Dear Sir/Madam,

We, Nuqta Technology L.L.C. (Trade License No: [Number]), hereby authorize and request the processing of an employment visa for the following individual:

EMPLOYEE DETAILS:
Full Name: _______________
Nationality: _______________
Passport Number: _______________
Passport Expiry: _______________
Position: _______________
Monthly Salary: AED _______________

AUTHORIZATION:
We confirm that:
1. The above individual has been offered employment at our company
2. We take full responsibility for the employee during their stay in UAE
3. All visa and Emirates ID costs will be borne by the company
4. The employment contract has been approved by MOHRE

We request you to kindly process the employment visa at your earliest convenience.

Sincerely,

Signature: _________________________
Name: Rejaul Karim
Title: CEO
Company Stamp: [Affix]

Contact: legal@nuqta.io
Phone: [Number]

═══════════════════════════════════════════════════════════════════

5. SALARY CERTIFICATE

[On Company Letterhead]

Date: _______________

TO WHOM IT MAY CONCERN

SALARY CERTIFICATE

This is to certify that [EMPLOYEE NAME], holding passport number [Number], is employed with Nuqta Technology L.L.C. since [Date] in the capacity of [Job Title].

Their current monthly compensation is as follows:

Basic Salary:           AED _______________
Housing Allowance:      AED _______________
Transportation:         AED _______________
Other Allowances:       AED _______________
─────────────────────────────────────────
Total Monthly Salary:   AED _______________

Annual Package:         AED _______________

This certificate is issued upon the employee's request for [Purpose: Bank Account / Visa / Other].

For Nuqta Technology L.L.C.:

Signature: _________________________
Name: _______________
Title: HR Manager / CEO
Date: _____________________________
Company Stamp: [Affix]

═══════════════════════════════════════════════════════════════════

6. NO OBJECTION CERTIFICATE (NOC)

[On Company Letterhead]

Date: _______________

NO OBJECTION CERTIFICATE

This is to certify that Nuqta Technology L.L.C. has no objection to our employee:

Name: _______________
Position: _______________
Passport No: _______________
Visa No: _______________

For the following purpose:

[ ] Opening a personal bank account
[ ] Applying for a driving license
[ ] Sponsoring dependents
[ ] Part-time work (specify): _______________
[ ] Travel to [Country] from [Date] to [Date]
[ ] Other: _______________

This NOC is valid for [30 / 60 / 90] days from the date of issue.

For Nuqta Technology L.L.C.:

Signature: _________________________
Name: _______________
Title: _______________
Date: _____________________________
Company Stamp: [Affix]

═══════════════════════════════════════════════════════════════════

VISA PROCESSING CONTACTS

GDRFA Dubai: 800 5111
MOHRE: 80060
SEHA (Medical): 800 50
ICP (Emirates ID): 600 522222

Online Portals:
• MOHRE: www.mohre.gov.ae
• ICP: www.icp.gov.ae
• GDRFA: www.gdrfad.gov.ae

Typical Timeline:
• Entry Permit: 2-3 working days
• Status Change: 3-5 working days
• Medical Test: 1-2 days
• Emirates ID: 5-7 working days
• Visa Stamping: 2-3 working days`
  },
  {
    id: 'insurance-requirements',
    title: 'Insurance Requirements & Coverage',
    category: 'Risk Management',
    status: 'draft',
    lastUpdated: 'Feb 7, 2026',
    description: 'Complete insurance requirements and coverage specifications for Nuqta.',
    content: `NUQTA TECHNOLOGY L.L.C.
INSURANCE REQUIREMENTS & COVERAGE DOCUMENT

═══════════════════════════════════════════════════════════════════

1. MANDATORY INSURANCE

1.1 EMPLOYEE HEALTH INSURANCE (DHA Requirement)
Status: REQUIRED before visa processing
Provider: [To be selected]
Coverage: Essential Benefits Plan (EBP) minimum

Required Coverage:
• In-patient hospitalization
• Out-patient services
• Emergency services
• Maternity (where applicable)
• Chronic disease management
• Preventive care

Employees to Cover:
┌─────────────────────────┬─────────────────────────────────────┐
│ Name                    │ Position                            │
├─────────────────────────┼─────────────────────────────────────┤
│ Rejaul Karim            │ CEO                                 │
│ Deep Tednu Kuri         │ CTO                                 │
│ Sarbajit Bhatacharjee   │ CMO                                 │
│ Gyandeep Bordoloi       │ COO                                 │
│ [Additional employees]  │ [Positions]                         │
└─────────────────────────┴─────────────────────────────────────┘

Estimated Annual Premium: AED 2,000 - 5,000 per employee
Total (8 employees): AED 16,000 - 40,000 per year

Recommended Providers:
• Daman (National Health Insurance Company)
• Oman Insurance
• AXA Gulf
• MetLife
• ADNIC

═══════════════════════════════════════════════════════════════════

2. RECOMMENDED BUSINESS INSURANCE

2.1 PROFESSIONAL INDEMNITY / ERRORS & OMISSIONS
Purpose: Protects against claims of negligence in professional services
Coverage Amount: AED 1,000,000 - 5,000,000
Annual Premium: AED 5,000 - 15,000

Covers:
• Errors in app functionality causing user loss
• Data breach claims
• Failure to deliver promised services
• Negligent advice or recommendations

2.2 CYBER LIABILITY INSURANCE
Purpose: Protection against cyber incidents and data breaches
Coverage Amount: AED 2,000,000 - 10,000,000
Annual Premium: AED 10,000 - 30,000

Covers:
• Data breach response costs
• Notification expenses
• Credit monitoring for affected users
• Legal defense costs
• Regulatory fines and penalties
• Business interruption from cyber events
• Ransomware payments (where legal)
• Forensic investigation costs

CRITICAL for Nuqta given:
• Personal data of 50,000+ users (target)
• Transaction data
• Payment processing involvement

2.3 DIRECTORS & OFFICERS (D&O) LIABILITY
Purpose: Protects executives from personal liability
Coverage Amount: AED 1,000,000 - 5,000,000
Annual Premium: AED 8,000 - 25,000

Covers:
• Wrongful acts in management capacity
• Breach of fiduciary duty claims
• Regulatory investigations
• Employment practices claims
• Investor lawsuits

Recommended before Series A funding.

2.4 GENERAL LIABILITY / PUBLIC LIABILITY
Purpose: Third-party injury or property damage
Coverage Amount: AED 500,000 - 2,000,000
Annual Premium: AED 3,000 - 8,000

Covers:
• Bodily injury claims
• Property damage
• Personal injury (libel, slander)
• Office visitor injuries

2.5 OFFICE CONTENTS / PROPERTY INSURANCE
Purpose: Protect office equipment and contents
Coverage Amount: Based on asset value
Annual Premium: AED 1,000 - 5,000

Covers:
• Computers and equipment
• Furniture
• Fire and flood damage
• Theft
• Natural disasters

═══════════════════════════════════════════════════════════════════

3. INSURANCE PRIORITY MATRIX

┌──────────────────────────┬──────────────┬─────────────────────┐
│ Insurance Type           │ Priority     │ Timeline            │
├──────────────────────────┼──────────────┼─────────────────────┤
│ Employee Health          │ MANDATORY    │ Before visa         │
│ Cyber Liability          │ CRITICAL     │ Before launch       │
│ Professional Indemnity   │ HIGH         │ Before launch       │
│ D&O Liability            │ HIGH         │ Before Series A     │
│ General Liability        │ MEDIUM       │ Before office       │
│ Office Contents          │ MEDIUM       │ After office setup  │
└──────────────────────────┴──────────────┴─────────────────────┘

═══════════════════════════════════════════════════════════════════

4. INSURANCE BROKER CONTACTS

Recommended Insurance Brokers in UAE:

1. Marsh Emirates
   Contact: +971 4 212 4500
   Email: dubai@marsh.com
   Specialty: Tech companies, cyber

2. Aon UAE
   Contact: +971 4 363 4555
   Email: dubai@aon.ae
   Specialty: Startups, D&O

3. Willis Towers Watson
   Contact: +971 4 436 1000
   Email: dubai@willistowerswatson.com
   Specialty: Professional indemnity

4. Lockton MENA
   Contact: +971 4 399 2377
   Email: dubai@lockton.com
   Specialty: SME packages

═══════════════════════════════════════════════════════════════════

5. INSURANCE APPLICATION REQUIREMENTS

Documents needed for insurance applications:

COMPANY DOCUMENTS:
☐ Trade License
☐ Certificate of Incorporation
☐ Company profile / business description
☐ Financial statements (if available)
☐ Revenue projections
☐ Employee list

TECHNICAL INFORMATION (for Cyber Insurance):
☐ IT infrastructure overview
☐ Data protection measures
☐ Security certifications (if any)
☐ Previous incidents (if any)
☐ Third-party security audit results

CLAIMS HISTORY:
☐ Previous insurance policies
☐ Claims made in past 5 years
☐ Pending claims or litigation

═══════════════════════════════════════════════════════════════════

6. ANNUAL INSURANCE BUDGET ESTIMATE

Year 1 (Launch Phase):
┌──────────────────────────┬─────────────────────────────────────┐
│ Insurance Type           │ Estimated Annual Premium (AED)      │
├──────────────────────────┼─────────────────────────────────────┤
│ Employee Health (8)      │ 24,000 - 40,000                     │
│ Cyber Liability          │ 15,000 - 25,000                     │
│ Professional Indemnity   │ 8,000 - 12,000                      │
│ General Liability        │ 5,000 - 8,000                       │
├──────────────────────────┼─────────────────────────────────────┤
│ TOTAL YEAR 1             │ 52,000 - 85,000                     │
└──────────────────────────┴─────────────────────────────────────┘

Year 2 (Post Series A):
Add D&O Liability: +15,000 - 25,000
Increased limits: +20% across policies`
  },
  {
    id: 'trademark-registration',
    title: 'Trademark Registration Package',
    category: 'Intellectual Property',
    status: 'draft',
    lastUpdated: 'Feb 7, 2026',
    description: 'Complete trademark registration documents and process for UAE and GCC.',
    content: `NUQTA TRADEMARK REGISTRATION PACKAGE

═══════════════════════════════════════════════════════════════════

1. TRADEMARK OVERVIEW

Marks to Register:
┌─────────────────────────┬─────────────────────────────────────┐
│ Mark                    │ Type                                │
├─────────────────────────┼─────────────────────────────────────┤
│ NUQTA                   │ Word Mark (Arabic & English)        │
│ نقطة                    │ Arabic Word Mark                    │
│ [Logo]                  │ Device Mark (Logo)                  │
│ NUQTA + Logo            │ Combined Mark                       │
└─────────────────────────┴─────────────────────────────────────┘

Classes to Register (Nice Classification):
• Class 9: Mobile applications, software
• Class 35: Advertising, business services, loyalty programs
• Class 36: Financial services, payment processing
• Class 42: Technology services, SaaS

═══════════════════════════════════════════════════════════════════

2. UAE TRADEMARK REGISTRATION

Filing Authority: Ministry of Economy (MoE) - UAE
Online Portal: https://www.economy.gov.ae

STEP-BY-STEP PROCESS:

Step 1: Trademark Search
• Search UAE trademark database
• Check for similar/identical marks
• Cost: AED 50 - 100 (online search)
• Recommended: Professional search (AED 500-1,000)

Step 2: Application Preparation
Documents Required:
☐ Trademark application form
☐ Clear representation of the mark (JPEG/PNG)
☐ Power of Attorney (if using agent)
☐ Trade License copy
☐ List of goods/services
☐ Priority document (if claiming priority)

Step 3: File Application
• Submit online or through agent
• Pay filing fees

Step 4: Examination
• Examiner reviews application
• May raise objections
• Timeline: 2-4 months

Step 5: Publication
• Published in Official Gazette
• 30-day opposition period
• Publication fee applies

Step 6: Registration
• If no opposition, certificate issued
• Timeline: 6-12 months total

Step 7: Renewal
• Every 10 years from filing date
• 6-month grace period with penalty

═══════════════════════════════════════════════════════════════════

3. UAE TRADEMARK FEES (2026)

┌─────────────────────────────────┬─────────────────────────────┐
│ Fee Type                        │ Amount (AED)                │
├─────────────────────────────────┼─────────────────────────────┤
│ Filing fee (per class)          │ 1,000                       │
│ Examination fee (per class)     │ 400                         │
│ Publication fee                 │ 3,000                       │
│ Registration fee                │ 1,000                       │
│ Agent/Attorney fees             │ 3,000 - 5,000               │
├─────────────────────────────────┼─────────────────────────────┤
│ TOTAL (per class)               │ 8,400 - 10,400              │
│ TOTAL (4 classes)               │ 33,600 - 41,600             │
└─────────────────────────────────┴─────────────────────────────┘

═══════════════════════════════════════════════════════════════════

4. GCC TRADEMARK REGISTRATION

Options:
A) Individual Filing in Each GCC Country
B) GCC Trademark (Single Application)

GCC TRADEMARK (Recommended):
• Single application covers all 6 GCC countries
• Filed through Saudi Patent Office (SAIP)
• Cost-effective for regional protection

GCC Member States:
• Saudi Arabia
• UAE
• Kuwait
• Bahrain
• Qatar
• Oman

GCC Trademark Fees (approximate):
Filing: SAR 10,000 per class
Total with agent: SAR 30,000 - 50,000 (4 classes)

═══════════════════════════════════════════════════════════════════

5. TRADEMARK APPLICATION FORM

TRADEMARK APPLICATION
Ministry of Economy - UAE

Applicant Information:
Company Name: Nuqta Technology L.L.C.
Trade License No: [Number]
Address: [Office Address], Dubai, UAE
Phone: [Number]
Email: legal@nuqtaapp.com

Representative (if any):
Agent Name: [Trademark Agent Name]
Agent License: [Number]
POA Date: [Date]

Mark Details:
Mark Type: [ ] Word [ ] Device [ ] Combined
Mark: NUQTA / نقطة
Colors Claimed: Gold (#c9a227), Dark Blue (#0a1628)
Description: The mark consists of the word "NUQTA" in stylized letters with a dot motif

Classes Applied For:
[ ] Class 9: Computer software; mobile applications for rewards and loyalty programs; downloadable software for managing customer loyalty programs
[ ] Class 35: Advertising services; business management; loyalty program management; customer relationship management services
[ ] Class 36: Financial services; payment processing services; electronic funds transfer
[ ] Class 42: Software as a service (SaaS); platform as a service (PaaS); cloud computing services

Priority Claim: [ ] Yes [ ] No
Priority Country: _______________
Priority Date: _______________
Priority Number: _______________

Declaration:
I/We declare that the above information is true and correct, and that I/we are entitled to use and register the trademark.

Signature: _________________________
Name: Rejaul Karim
Title: CEO
Date: _____________________________
Company Stamp: [Affix]

═══════════════════════════════════════════════════════════════════

6. POWER OF ATTORNEY FOR TRADEMARK AGENT

POWER OF ATTORNEY

We, Nuqta Technology L.L.C., a company organized under the laws of UAE, hereby appoint:

[TRADEMARK AGENT NAME]
License No: [Number]
Address: [Address]

As our lawful attorney to:
• File trademark applications in our name
• Prosecute applications through registration
• Respond to official actions and objections
• Renew trademark registrations
• Take any necessary action to protect our trademark rights

This Power of Attorney is valid for all trademark matters in [UAE / GCC Countries].

For Nuqta Technology L.L.C.:
Signature: _________________________
Name: Rejaul Karim
Title: CEO
Date: _____________________________
Company Stamp: [Affix]

[Notarization and legalization required for some countries]

═══════════════════════════════════════════════════════════════════

7. TRADEMARK AGENTS - RECOMMENDED

UAE:
1. Al Tamimi & Company
   Contact: +971 4 364 1641
   Specialty: Full-service IP

2. Cedar White Bradley
   Contact: +971 4 381 6888
   Specialty: Trademark prosecution

3. Rouse
   Contact: +971 4 365 3001
   Specialty: Tech IP

4. Saba IP
   Contact: +971 4 327 8470
   Specialty: GCC coverage

═══════════════════════════════════════════════════════════════════

8. TRADEMARK MONITORING & ENFORCEMENT

Post-Registration Actions:
• Monitor for infringing applications
• Watch service subscription (AED 1,000-2,000/year)
• Domain name monitoring
• Social media monitoring

Enforcement Actions (if needed):
• Cease and desist letters
• Opposition proceedings
• Cancellation actions
• Civil litigation
• Criminal complaints (for counterfeiting)`
  },
  {
    id: 'office-lease',
    title: 'Office Lease Agreement Template',
    category: 'Property & Facilities',
    status: 'draft',
    lastUpdated: 'Feb 7, 2026',
    description: 'Template lease agreement for office space in Dubai.',
    content: `OFFICE LEASE AGREEMENT

This Lease Agreement ("Agreement") is made on _______________

BETWEEN:

LANDLORD:
[Landlord Name]
[Company/Individual]
[Address]
(hereinafter "Landlord")

AND:

TENANT:
Nuqta Technology L.L.C.
Trade License No: [Number]
Represented by: Rejaul Karim, CEO
(hereinafter "Tenant")

═══════════════════════════════════════════════════════════════════

1. PREMISES

1.1 The Landlord agrees to lease to the Tenant the following premises:

Property Type: Office Space
Building Name: _______________
Unit Number: _______________
Floor: _______________
Area: _______________ sq. ft. / sq. m.
Location: _______________
Emirate: Dubai, UAE

1.2 The premises shall be used exclusively for general office purposes consistent with the Tenant's trade license activities.

═══════════════════════════════════════════════════════════════════

2. TERM

2.1 Lease Term: _______________ year(s)
2.2 Commencement Date: _______________
2.3 Expiry Date: _______________
2.4 Renewal: Subject to mutual agreement and market rent adjustment

═══════════════════════════════════════════════════════════════════

3. RENT

3.1 Annual Rent: AED _______________
3.2 Payment Schedule:
    [ ] One payment (full year)
    [ ] Two payments (semi-annual)
    [ ] Four payments (quarterly)
    [ ] Twelve payments (monthly)

3.3 Payment Dates: _______________
3.4 Payment Method: [ ] Cheque [ ] Bank Transfer

3.5 Post-dated cheques to be provided:
    Cheque 1: AED _______________ dated _______________
    Cheque 2: AED _______________ dated _______________
    [Additional as needed]

═══════════════════════════════════════════════════════════════════

4. SECURITY DEPOSIT

4.1 Amount: AED _______________ (typically 5% of annual rent)
4.2 Purpose: Security for performance of Tenant's obligations
4.3 Return: Within 30 days of lease end, less deductions for damages
4.4 No Interest: Deposit is non-interest bearing

═══════════════════════════════════════════════════════════════════

5. SERVICE CHARGES

5.1 Annual Service Charge: AED _______________
5.2 Includes: Building maintenance, common areas, security, cleaning
5.3 Payment: [ ] Included in rent [ ] Separate payment
5.4 Adjustments: Subject to annual review

═══════════════════════════════════════════════════════════════════

6. UTILITIES

6.1 Electricity: [ ] Tenant [ ] Landlord [ ] Included
6.2 Water: [ ] Tenant [ ] Landlord [ ] Included
6.3 Internet: Tenant's responsibility
6.4 DEWA Account: To be registered in Tenant's name

═══════════════════════════════════════════════════════════════════

7. LANDLORD'S OBLIGATIONS

The Landlord shall:
7.1 Deliver premises in good condition
7.2 Maintain structural elements of the building
7.3 Provide access to common areas
7.4 Ensure building code compliance
7.5 Maintain building insurance
7.6 Provide parking spaces: _______________ (if applicable)

═══════════════════════════════════════════════════════════════════

8. TENANT'S OBLIGATIONS

The Tenant shall:
8.1 Pay rent and service charges on time
8.2 Maintain premises in good condition
8.3 Not make structural alterations without consent
8.4 Not assign or sublet without consent
8.5 Comply with building rules
8.6 Obtain necessary permits and licenses
8.7 Maintain contents insurance
8.8 Return premises in original condition (normal wear excepted)

═══════════════════════════════════════════════════════════════════

9. FIT-OUT

9.1 Tenant may fit-out premises subject to:
    • Landlord's prior written approval
    • Building management guidelines
    • Civil defense requirements
    • Municipality approvals

9.2 Fit-out period: _______________ days (rent-free if applicable)
9.3 Reinstatement: [ ] Required [ ] Not required upon expiry

═══════════════════════════════════════════════════════════════════

10. EJARI REGISTRATION

10.1 This Agreement shall be registered with Ejari (Dubai Land Department)
10.2 Registration fee: Tenant's responsibility
10.3 Timeline: Within 30 days of signing
10.4 Required for: Trade license, visa processing

═══════════════════════════════════════════════════════════════════

11. TERMINATION

11.1 Expiry: Agreement terminates on Expiry Date unless renewed
11.2 Early Termination by Tenant:
     • [X] months written notice required
     • Early termination fee: [X] months rent

11.3 Termination by Landlord:
     • 12 months notice for personal use (per Dubai law)
     • Immediate for material breach (after cure period)

11.4 Upon Termination:
     • Vacate premises
     • Return keys
     • Clear all dues
     • Remove belongings

═══════════════════════════════════════════════════════════════════

12. DISPUTE RESOLUTION

12.1 Governing Law: Laws of Dubai, UAE
12.2 Jurisdiction: Rental Disputes Center (RDC), Dubai
12.3 Mediation: Parties agree to attempt mediation before litigation

═══════════════════════════════════════════════════════════════════

13. GENERAL PROVISIONS

13.1 Entire Agreement: This constitutes the entire agreement
13.2 Amendments: Must be in writing signed by both parties
13.3 Notices: In writing to addresses above
13.4 Severability: Invalid provisions do not affect others

═══════════════════════════════════════════════════════════════════

SIGNATURES

LANDLORD:
Signature: _________________________
Name: _______________
Title: _______________
Date: _______________

TENANT:
Nuqta Technology L.L.C.
Signature: _________________________
Name: Rejaul Karim
Title: CEO
Date: _______________
Company Stamp: [Affix]

═══════════════════════════════════════════════════════════════════

ATTACHMENTS:
☐ Floor plan
☐ Building rules
☐ Landlord's trade license
☐ Title deed / ownership proof
☐ Tenant's trade license
☐ Post-dated cheques`
  },
  {
    id: 'vendor-agreement',
    title: 'Vendor/Supplier Agreement',
    category: 'Business Contracts',
    status: 'draft',
    lastUpdated: 'Feb 7, 2026',
    description: 'Template agreement for engaging vendors and service providers.',
    content: `VENDOR/SUPPLIER AGREEMENT

This Agreement ("Agreement") is entered into as of _______________

BETWEEN:

NUQTA TECHNOLOGY L.L.C.
Trade License No: [Number]
Address: Dubai, UAE
("Company" or "Client")

AND:

[VENDOR NAME]
[Registration/License No]
Address: _______________
("Vendor" or "Supplier")

═══════════════════════════════════════════════════════════════════

1. SERVICES / PRODUCTS

1.1 The Vendor agrees to provide the following:

[ ] PRODUCTS:
Description: _______________
Specifications: _______________
Quantity: _______________

[ ] SERVICES:
Description: _______________
Scope of Work: _______________
Deliverables: _______________

1.2 Detailed specifications are set forth in Schedule A.

═══════════════════════════════════════════════════════════════════

2. TERM

2.1 Effective Date: _______________
2.2 Term: [ ] One-time [ ] ___ months [ ] ___ year(s)
2.3 Renewal: [ ] Automatic [ ] Mutual agreement
2.4 Termination Notice: ___ days written notice

═══════════════════════════════════════════════════════════════════

3. PRICING AND PAYMENT

3.1 Total Price / Rate:
[ ] Fixed Price: AED/USD _______________
[ ] Hourly Rate: AED/USD _______________ per hour
[ ] Monthly Retainer: AED/USD _______________ per month
[ ] Per Unit: AED/USD _______________ per _______________

3.2 Payment Terms:
[ ] Net 30 days from invoice
[ ] Net 60 days from invoice
[ ] Upon delivery
[ ] Milestone-based (see Schedule B)
[ ] Advance: ___% upfront, ___% on completion

3.3 Payment Method: [ ] Bank Transfer [ ] Cheque
3.4 Currency: [ ] AED [ ] USD
3.5 Late Payment: ___% per month on overdue amounts

3.6 Invoicing:
• Submit invoices to: finance@nuqtaapp.com
• Include: PO number, description, bank details

═══════════════════════════════════════════════════════════════════

4. DELIVERY

4.1 Delivery Date(s): _______________
4.2 Delivery Location: _______________
4.3 Shipping Terms: [ ] FOB Origin [ ] FOB Destination [ ] N/A
4.4 Risk of Loss: Passes upon delivery and acceptance

4.5 Acceptance:
• Company has ___ days to inspect and accept
• Rejection must be in writing with reasons
• Vendor shall remedy defects within ___ days

═══════════════════════════════════════════════════════════════════

5. WARRANTIES

5.1 Vendor warrants that:
(a) Products/services will conform to specifications
(b) Products/services will be free from defects
(c) Products/services will be fit for intended purpose
(d) Vendor has right to provide products/services
(e) Products/services do not infringe third-party IP
(f) Vendor will comply with all applicable laws

5.2 Warranty Period: ___ months from acceptance

5.3 Warranty Remedy: Repair, replace, or refund at Company's option

═══════════════════════════════════════════════════════════════════

6. INTELLECTUAL PROPERTY

6.1 Pre-Existing IP: Each party retains its pre-existing IP.

6.2 Work Product: All work product created specifically for Company shall be Company's property.

6.3 License Grant: Vendor grants Company a perpetual, royalty-free license to use any Vendor IP incorporated in deliverables.

═══════════════════════════════════════════════════════════════════

7. CONFIDENTIALITY

7.1 Both parties agree to maintain confidentiality of all non-public information shared under this Agreement.

7.2 Obligations continue for 3 years after termination.

7.3 Standard carve-outs for public information, independent development, and legally required disclosures apply.

═══════════════════════════════════════════════════════════════════

8. DATA PROTECTION

8.1 If Vendor processes personal data on Company's behalf:
(a) Vendor shall comply with UAE PDPL
(b) Vendor shall sign a Data Processing Agreement
(c) Vendor shall implement appropriate security measures
(d) Vendor shall not transfer data without consent

═══════════════════════════════════════════════════════════════════

9. INSURANCE

9.1 Vendor shall maintain:
(a) General liability insurance: AED _______________
(b) Professional indemnity (if applicable): AED _______________
(c) Worker's compensation (as required by law)

9.2 Evidence of insurance upon request.

═══════════════════════════════════════════════════════════════════

10. INDEMNIFICATION

10.1 Vendor shall indemnify Company against claims arising from:
(a) Vendor's breach of this Agreement
(b) Vendor's negligence or willful misconduct
(c) Vendor's violation of law
(d) IP infringement claims related to deliverables

═══════════════════════════════════════════════════════════════════

11. LIMITATION OF LIABILITY

11.1 Neither party shall be liable for indirect, incidental, or consequential damages.

11.2 Maximum liability: Total fees paid/payable in the 12 months preceding the claim.

11.3 Exclusions: Indemnification, confidentiality breach, gross negligence do not have liability caps.

═══════════════════════════════════════════════════════════════════

12. TERMINATION

12.1 For Convenience: Either party may terminate with ___ days written notice.

12.2 For Cause: Immediate termination for material breach uncured after ___ days notice.

12.3 Effect: Upon termination:
(a) Payment for work completed
(b) Return of confidential information
(c) Transition assistance (if applicable)

═══════════════════════════════════════════════════════════════════

13. GENERAL PROVISIONS

13.1 Independent Contractor: Vendor is an independent contractor, not an employee.

13.2 Assignment: No assignment without written consent.

13.3 Subcontracting: Not permitted without written consent.

13.4 Force Majeure: Neither party liable for delays due to events beyond reasonable control.

13.5 Governing Law: Laws of the UAE.

13.6 Dispute Resolution: DIAC Arbitration in Dubai.

13.7 Entire Agreement: This Agreement supersedes all prior negotiations.

13.8 Amendments: Must be in writing signed by both parties.

═══════════════════════════════════════════════════════════════════

SIGNATURES

COMPANY:
Nuqta Technology L.L.C.

Signature: _________________________
Name: Rejaul Karim
Title: CEO
Date: _______________
Company Stamp: [Affix]

VENDOR:
[Vendor Name]

Signature: _________________________
Name: _______________
Title: _______________
Date: _______________
Company Stamp: [Affix]

═══════════════════════════════════════════════════════════════════

SCHEDULE A: SPECIFICATIONS
[Detailed product/service specifications]

SCHEDULE B: PAYMENT MILESTONES
[If applicable]

SCHEDULE C: KEY PERSONNEL
[If applicable]`
  },
  {
    id: 'due-diligence',
    title: 'Due Diligence Checklist (Investor)',
    category: 'Investment Documents',
    status: 'draft',
    lastUpdated: 'Feb 7, 2026',
    description: 'Complete due diligence checklist for investor fundraising.',
    content: `NUQTA TECHNOLOGY L.L.C.
INVESTOR DUE DILIGENCE CHECKLIST

Prepared for: [Investor Name]
Date: _______________
Version: 1.0

═══════════════════════════════════════════════════════════════════

1. CORPORATE DOCUMENTS

1.1 Formation Documents
☐ Trade License (current)
☐ Certificate of Incorporation
☐ Memorandum of Association (MOA)
☐ Amendments to MOA (if any)
☐ Certificate of Good Standing

1.2 Corporate Governance
☐ Shareholder resolutions
☐ Board/Manager resolutions
☐ Shareholder register
☐ Share certificates
☐ Share transfer documents (if any)
☐ Organizational chart

1.3 Ownership Structure
☐ Cap table (fully diluted)
☐ ESOP/option pool details
☐ Convertible securities outstanding
☐ Side letters or special rights
☐ Beneficial ownership declaration

═══════════════════════════════════════════════════════════════════

2. FINANCIAL INFORMATION

2.1 Historical Financials
☐ Financial statements (audited if available)
   - Year 1: _______________
   - Year 2: _______________
☐ Management accounts (current YTD)
☐ Bank statements (12 months)
☐ Tax returns filed

2.2 Financial Projections
☐ 3-5 year financial model
☐ Key assumptions documented
☐ Revenue projections
☐ Unit economics
☐ Burn rate analysis
☐ Runway calculation

2.3 Current Financial Position
☐ Cash position
☐ Accounts receivable aging
☐ Accounts payable
☐ Outstanding debt/loans
☐ Contingent liabilities

═══════════════════════════════════════════════════════════════════

3. BUSINESS & OPERATIONS

3.1 Business Model
☐ Pitch deck (current)
☐ Business plan
☐ Go-to-market strategy
☐ Competitive analysis
☐ Market sizing
☐ Customer acquisition strategy

3.2 Product/Technology
☐ Product roadmap
☐ Technology architecture overview
☐ IP portfolio (patents, trademarks)
☐ Source code ownership
☐ Third-party technology dependencies
☐ Security audit reports

3.3 Customers/Merchants
☐ Customer/merchant list
☐ Key account details
☐ Revenue concentration
☐ Churn metrics
☐ Customer acquisition cost (CAC)
☐ Lifetime value (LTV)
☐ NPS/satisfaction scores

3.4 Key Metrics
☐ User metrics (MAU, DAU, growth)
☐ Transaction metrics
☐ Engagement metrics
☐ Revenue metrics
☐ KPI dashboard

═══════════════════════════════════════════════════════════════════

4. LEGAL & COMPLIANCE

4.1 Contracts
☐ Material contracts list
☐ Merchant agreements (template + key deals)
☐ Vendor/supplier agreements
☐ Partnership agreements
☐ Technology licenses

4.2 Intellectual Property
☐ Trademark registrations/applications
☐ Domain name ownership
☐ IP assignment agreements
☐ Open source license compliance
☐ Third-party IP licenses

4.3 Regulatory & Compliance
☐ Licenses and permits required
☐ PDPL compliance documentation
☐ AML/CFT policy and compliance
☐ Consumer protection compliance
☐ CBUAE regulatory status
☐ Data processing agreements

4.4 Litigation
☐ Pending litigation list
☐ Threatened claims
☐ Past significant disputes
☐ Regulatory investigations

═══════════════════════════════════════════════════════════════════

5. EMPLOYMENT & TEAM

5.1 Team Structure
☐ Org chart
☐ Executive team bios
☐ Key personnel list
☐ Employee headcount by function
☐ Contractor list

5.2 Employment Documents
☐ Employment contract templates
☐ Key employee contracts
☐ Non-compete/non-solicit agreements
☐ IP assignment agreements
☐ ESOP plan and grants

5.3 HR Policies
☐ Employee handbook
☐ Compensation structure
☐ Benefits summary
☐ Pending HR issues

═══════════════════════════════════════════════════════════════════

6. INSURANCE & RISK

6.1 Insurance
☐ Insurance policies summary
   - General liability
   - D&O
   - Cyber liability
   - Professional indemnity
   - Employee health
☐ Claims history

6.2 Risk Factors
☐ Key risk register
☐ Business continuity plan
☐ Disaster recovery plan

═══════════════════════════════════════════════════════════════════

7. TECHNOLOGY & SECURITY

7.1 Technical Documentation
☐ System architecture diagram
☐ Infrastructure overview
☐ Database schema (high-level)
☐ API documentation
☐ Third-party integrations

7.2 Security
☐ Security policy
☐ Penetration test results
☐ SOC 2 / ISO 27001 status
☐ Incident response plan
☐ Data backup procedures
☐ Access control documentation

7.3 Development
☐ Development process documentation
☐ Code repository access (for technical DD)
☐ Test coverage metrics
☐ Deployment procedures

═══════════════════════════════════════════════════════════════════

8. DATA ROOM STRUCTURE

Recommended folder structure:

📁 1. Corporate
   📁 1.1 Formation Documents
   📁 1.2 Governance
   📁 1.3 Cap Table

📁 2. Financial
   📁 2.1 Historical
   📁 2.2 Projections
   📁 2.3 Current Position

📁 3. Business
   📁 3.1 Pitch Materials
   📁 3.2 Product
   📁 3.3 Metrics

📁 4. Legal
   📁 4.1 Contracts
   📁 4.2 IP
   📁 4.3 Compliance
   📁 4.4 Litigation

📁 5. Team
   📁 5.1 Org Structure
   📁 5.2 Employment
   📁 5.3 ESOP

📁 6. Insurance & Risk

📁 7. Technology
   📁 7.1 Architecture
   📁 7.2 Security
   📁 7.3 Development

═══════════════════════════════════════════════════════════════════

9. DOCUMENT STATUS TRACKER

┌──────────────────────────┬──────────┬────────────┬─────────────┐
│ Document                 │ Status   │ Owner      │ Notes       │
├──────────────────────────┼──────────┼────────────┼─────────────┤
│ Trade License            │ Ready    │ CEO        │             │
│ MOA                      │ Ready    │ Legal      │             │
│ Cap Table                │ Ready    │ CEO        │             │
│ Financial Statements     │ Pending  │ CFO        │ Q1 2026     │
│ Financial Model          │ Ready    │ CFO        │             │
│ Pitch Deck               │ Ready    │ CEO        │             │
│ Merchant Agreements      │ Ready    │ COO        │             │
│ Employee Contracts       │ Ready    │ HR         │             │
│ Security Audit           │ Pending  │ CTO        │ Schedule    │
│ [Add more rows]          │          │            │             │
└──────────────────────────┴──────────┴────────────┴─────────────┘

═══════════════════════════════════════════════════════════════════

10. DD CONTACT POINTS

CEO: Rejaul Karim - rejaul@nuqtaapp.com
CFO: [Name] - finance@nuqtaapp.com
CTO: Deep Tednu Kuri - tech@nuqtaapp.com
Legal: legal@nuqtaapp.com

Data Room Access: [Link to be provided]
Access expires: [Date]`
  },
  {
    id: 'board-meeting-minutes',
    title: 'Board/Manager Meeting Minutes',
    category: 'Corporate Governance',
    status: 'draft',
    lastUpdated: 'Feb 7, 2026',
    description: 'Template for recording meeting minutes and decisions.',
    content: `MINUTES OF MEETING
NUQTA TECHNOLOGY L.L.C.

═══════════════════════════════════════════════════════════════════

MEETING DETAILS

Meeting Type: [ ] Manager's Meeting [ ] Shareholder Meeting
Meeting No: _______________
Date: _______________
Time: _______________ to _______________
Location: [ ] Dubai Office [ ] Video Conference

═══════════════════════════════════════════════════════════════════

ATTENDEES

Present:
☐ Rejaul Karim - CEO & Manager (Chair)
☐ Deep Tednu Kuri - CTO
☐ Sarbajit Bhatacharjee - CMO
☐ Gyandeep Bordoloi - COO
☐ _______________
☐ _______________

Absent with Apologies:
☐ _______________

Guests/Invitees:
☐ _______________

Quorum: [ ] Yes [ ] No

═══════════════════════════════════════════════════════════════════

AGENDA

1. Opening and Quorum
2. Approval of Previous Minutes
3. _______________
4. _______________
5. _______________
6. Any Other Business
7. Date of Next Meeting
8. Adjournment

═══════════════════════════════════════════════════════════════════

MINUTES

1. OPENING AND QUORUM

The meeting was called to order at _______________ by Rejaul Karim.
A quorum was confirmed present.

─────────────────────────────────────────────────────────────────

2. APPROVAL OF PREVIOUS MINUTES

Minutes of the meeting dated _______________ were reviewed.

RESOLUTION: The minutes were approved as presented.
Proposed by: _______________
Seconded by: _______________
Vote: [ ] Unanimous [ ] Majority

─────────────────────────────────────────────────────────────────

3. [AGENDA ITEM]

Discussion:
_______________________________________________________________
_______________________________________________________________
_______________________________________________________________

RESOLUTION: _______________________________________________
Proposed by: _______________
Seconded by: _______________
Vote: [ ] Unanimous [ ] Majority [ ] Opposed: _______________

Action Items:
┌─────────────────────────┬─────────────┬─────────────────────────┐
│ Action                  │ Responsible │ Due Date                │
├─────────────────────────┼─────────────┼─────────────────────────┤
│                         │             │                         │
│                         │             │                         │
└─────────────────────────┴─────────────┴─────────────────────────┘

─────────────────────────────────────────────────────────────────

4. [AGENDA ITEM]

Discussion:
_______________________________________________________________
_______________________________________________________________

RESOLUTION: _______________________________________________
Vote: [ ] Unanimous [ ] Majority

Action Items:
┌─────────────────────────┬─────────────┬─────────────────────────┐
│ Action                  │ Responsible │ Due Date                │
├─────────────────────────┼─────────────┼─────────────────────────┤
│                         │             │                         │
└─────────────────────────┴─────────────┴─────────────────────────┘

─────────────────────────────────────────────────────────────────

5. FINANCIAL UPDATE

[If applicable]

Revenue YTD: AED _______________
Expenses YTD: AED _______________
Cash Position: AED _______________
Runway: _______________ months

─────────────────────────────────────────────────────────────────

6. ANY OTHER BUSINESS

_______________________________________________________________
_______________________________________________________________

─────────────────────────────────────────────────────────────────

7. DATE OF NEXT MEETING

The next meeting will be held on _______________ at _______________.

─────────────────────────────────────────────────────────────────

8. ADJOURNMENT

There being no further business, the meeting was adjourned at _______________.

═══════════════════════════════════════════════════════════════════

ACTION ITEMS SUMMARY

┌────┬─────────────────────────┬─────────────┬───────────┬────────┐
│ #  │ Action                  │ Responsible │ Due Date  │ Status │
├────┼─────────────────────────┼─────────────┼───────────┼────────┤
│ 1  │                         │             │           │        │
│ 2  │                         │             │           │        │
│ 3  │                         │             │           │        │
│ 4  │                         │             │           │        │
│ 5  │                         │             │           │        │
└────┴─────────────────────────┴─────────────┴───────────┴────────┘

═══════════════════════════════════════════════════════════════════

SIGNATURES

Minutes Prepared By:
Signature: _________________________
Name: _______________
Title: _______________
Date: _______________

Approved By (Chair):
Signature: _________________________
Name: Rejaul Karim
Title: CEO & Manager
Date: _______________

═══════════════════════════════════════════════════════════════════

ATTACHMENTS
☐ Presentation slides
☐ Financial reports
☐ Proposals reviewed
☐ Other: _______________`
  },
  {
    id: 'termination-letter',
    title: 'Employment Termination Documents',
    category: 'Employment',
    status: 'draft',
    lastUpdated: 'Feb 7, 2026',
    description: 'Templates for employment termination, resignation, and exit process.',
    content: `EMPLOYMENT TERMINATION DOCUMENTS

═══════════════════════════════════════════════════════════════════

DOCUMENT 1: TERMINATION LETTER (BY EMPLOYER)

[On Company Letterhead]

Date: _______________

To:
[Employee Name]
[Address]

Subject: Termination of Employment

Dear [Employee Name],

This letter serves as formal notice of the termination of your employment with Nuqta Technology L.L.C., effective _______________.

1. REASON FOR TERMINATION

[ ] End of probation period - performance not meeting requirements
[ ] Redundancy / Position elimination
[ ] Business restructuring
[ ] Performance issues (after documented improvement plan)
[ ] Misconduct
[ ] Mutual agreement
[ ] Contract completion (fixed-term)

2. LAST WORKING DAY

Your last working day will be: _______________

[ ] You are required to work during the notice period
[ ] You are placed on garden leave during the notice period
[ ] Payment in lieu of notice will be provided

3. FINAL SETTLEMENT

Your final settlement will include:

Basic salary (pro-rated): AED _______________
Accrued annual leave (___ days): AED _______________
Notice period payment: AED _______________
End of service gratuity: AED _______________
Other allowances: AED _______________
Deductions: AED _______________
─────────────────────────────────────────
TOTAL: AED _______________

Payment will be made within 14 days of your last working day.

4. EXIT REQUIREMENTS

Please complete the following before your last day:
☐ Return company laptop and equipment
☐ Return access cards and keys
☐ Complete knowledge transfer
☐ Submit final reports
☐ Return any company property
☐ Exit interview

5. VISA CANCELLATION

[ ] Your visa will be cancelled. You have 30 days to transfer or exit UAE.
[ ] Company will assist with visa transfer if you have a new employer.

Required for visa cancellation:
☐ Original passport
☐ Emirates ID
☐ Last salary certificate

6. REFERENCES

[ ] Company will provide a reference upon request
[ ] Experience certificate will be provided

7. CONFIDENTIALITY

Your obligations under the confidentiality agreement remain in effect.

8. NON-COMPETE

[If applicable] Your non-compete obligations per your employment contract remain in effect for ___ months.

We wish you success in your future endeavors.

Sincerely,

Signature: _________________________
Name: _______________
Title: _______________
Date: _______________

ACKNOWLEDGMENT:

I acknowledge receipt of this termination letter.

Employee Signature: _________________________
Name: _______________
Date: _______________

═══════════════════════════════════════════════════════════════════

DOCUMENT 2: RESIGNATION ACCEPTANCE LETTER

[On Company Letterhead]

Date: _______________

To:
[Employee Name]
[Position]

Subject: Acceptance of Resignation

Dear [Employee Name],

This letter confirms receipt and acceptance of your resignation letter dated _______________.

1. LAST WORKING DAY

Your last working day will be: _______________

Notice period required: ___ days
Notice period served: ___ days
[ ] Full notice served
[ ] Early release granted
[ ] Payment in lieu of notice deducted

2. FINAL SETTLEMENT

[Same structure as termination letter]

3. EXIT REQUIREMENTS

[Same structure as termination letter]

4. APPRECIATION

We appreciate your contributions during your time at Nuqta and wish you success in your future career.

Sincerely,

Signature: _________________________
Name: _______________
Title: HR Manager / CEO
Date: _______________

═══════════════════════════════════════════════════════════════════

DOCUMENT 3: EXPERIENCE CERTIFICATE

[On Company Letterhead]

Date: _______________

TO WHOM IT MAY CONCERN

EXPERIENCE CERTIFICATE

This is to certify that [EMPLOYEE NAME], holding passport number [Number], was employed with Nuqta Technology L.L.C. from _______________ to _______________.

Position(s) held:
• [Job Title] (From ___ to ___)
• [Previous Title if promoted] (From ___ to ___)

During their employment, [he/she] was responsible for:
• [Key responsibility 1]
• [Key responsibility 2]
• [Key responsibility 3]

[He/She] left the company due to [resignation / end of contract / mutual agreement].

We found [him/her] to be [positive attributes - e.g., dedicated, professional, reliable].

We wish [him/her] success in future endeavors.

For Nuqta Technology L.L.C.:

Signature: _________________________
Name: _______________
Title: HR Manager / CEO
Date: _______________
Company Stamp: [Affix]

═══════════════════════════════════════════════════════════════════

DOCUMENT 4: END OF SERVICE GRATUITY CALCULATION

EMPLOYEE DETAILS:
Name: _______________
Position: _______________
Start Date: _______________
End Date: _______________
Total Service: ___ years, ___ months

SALARY (Last drawn):
Basic Salary: AED _______________

CALCULATION:

For first 5 years of service:
21 days x (Basic Salary ÷ 30) x ___ years = AED _______________

For years after 5:
30 days x (Basic Salary ÷ 30) x ___ years = AED _______________

TOTAL GRATUITY: AED _______________

Deductions (if applicable):
[ ] Prorated for partial year: _______________
[ ] Resignation before 1 year: No gratuity
[ ] Resignation 1-3 years: 1/3 of calculated amount
[ ] Resignation 3-5 years: 2/3 of calculated amount
[ ] Resignation after 5 years: Full amount
[ ] Termination: Full amount

FINAL GRATUITY PAYABLE: AED _______________

Calculated by: _______________
Verified by: _______________
Date: _______________

═══════════════════════════════════════════════════════════════════

DOCUMENT 5: EXIT INTERVIEW FORM

Employee Name: _______________
Position: _______________
Department: _______________
Manager: _______________
Exit Date: _______________

1. Why are you leaving?
[ ] Better opportunity
[ ] Career change
[ ] Compensation
[ ] Work-life balance
[ ] Management issues
[ ] Relocation
[ ] Personal reasons
[ ] Other: _______________

2. What did you enjoy most about working here?
_______________________________________________________________

3. What could be improved?
_______________________________________________________________

4. How was your relationship with your manager?
[ ] Excellent [ ] Good [ ] Fair [ ] Poor
Comments: _______________

5. Would you recommend Nuqta as an employer?
[ ] Yes [ ] No [ ] Maybe
Comments: _______________

6. Would you consider returning in the future?
[ ] Yes [ ] No [ ] Maybe

7. Any suggestions for the company?
_______________________________________________________________

Conducted by: _______________
Date: _______________

═══════════════════════════════════════════════════════════════════

EXIT CHECKLIST

Employee: _______________ Date: _______________

☐ Resignation/termination letter signed
☐ Exit interview completed
☐ Knowledge transfer completed
☐ Laptop returned (Asset #: ___)
☐ Mobile phone returned (if company)
☐ Access cards returned
☐ Keys returned
☐ Company credit card cancelled
☐ Email access revoked
☐ System access revoked
☐ Final paycheck processed
☐ Experience certificate issued
☐ Visa cancellation initiated
☐ Emirates ID returned to employee

HR Sign-off: _______________
IT Sign-off: _______________
Finance Sign-off: _______________
Manager Sign-off: _______________`
  },
  {
    id: 'website-legal',
    title: 'Website Legal Pages',
    category: 'Digital Policies',
    status: 'draft',
    lastUpdated: 'Feb 7, 2026',
    description: 'Legal pages for Nuqta website - Disclaimer, Copyright, Accessibility.',
    content: `NUQTA WEBSITE LEGAL PAGES

═══════════════════════════════════════════════════════════════════

PAGE 1: WEBSITE DISCLAIMER

DISCLAIMER

Last Updated: February 7, 2026

The information provided on the Nuqta website (www.nuqtaapp.com) and mobile application is for general informational purposes only.

1. NO WARRANTIES
All information is provided "as is" without warranty of any kind. Nuqta makes no representations or warranties about the accuracy, reliability, or completeness of the content.

2. NOT PROFESSIONAL ADVICE
The content does not constitute financial, legal, or professional advice. Users should consult appropriate professionals for specific guidance.

3. THIRD-PARTY LINKS
Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or accuracy of external sites.

4. POINTS PROGRAM
Information about the Nuqta points program is subject to our Terms of Service. Points values, earning rates, and redemption terms may change without notice.

5. FORWARD-LOOKING STATEMENTS
Any projections or forward-looking statements are based on current expectations and involve risks and uncertainties. Actual results may differ.

6. MERCHANT INFORMATION
Information about merchant partners is provided for convenience. Nuqta does not guarantee merchant availability, pricing, or service quality.

7. LIMITATION OF LIABILITY
Nuqta shall not be liable for any damages arising from the use of this website or reliance on its content.

8. CHANGES
We reserve the right to modify this disclaimer at any time.

Contact: legal@nuqtaapp.com

═══════════════════════════════════════════════════════════════════

PAGE 2: COPYRIGHT NOTICE

COPYRIGHT NOTICE

© 2026 Nuqta Technology L.L.C. All Rights Reserved.

1. OWNERSHIP
All content on this website, including but not limited to text, graphics, logos, icons, images, audio clips, video clips, data compilations, and software, is the property of Nuqta Technology L.L.C. or its content suppliers and is protected by UAE and international copyright laws.

2. TRADEMARKS
"NUQTA," "نقطة," the Nuqta logo, and related marks are trademarks of Nuqta Technology L.L.C. Use of these trademarks without express written permission is prohibited.

3. PERMITTED USE
You may:
• View and print content for personal, non-commercial use
• Share links to our website
• Quote brief excerpts with proper attribution

4. PROHIBITED USE
You may not:
• Reproduce, distribute, or republish content without permission
• Modify or create derivative works
• Use content for commercial purposes without a license
• Remove copyright or trademark notices
• Frame or embed our content without permission

5. USER-GENERATED CONTENT
By submitting content to Nuqta (reviews, feedback, etc.), you grant us a non-exclusive, royalty-free license to use, reproduce, and display such content.

6. DMCA / TAKEDOWN REQUESTS
If you believe content infringes your copyright, contact:
Email: legal@nuqtaapp.com
Subject: Copyright Infringement Notice

Include:
• Description of the copyrighted work
• Location of the allegedly infringing content
• Your contact information
• Statement of good faith belief
• Statement of accuracy under penalty of perjury
• Your signature

7. CONTACT
For licensing inquiries: legal@nuqtaapp.com

═══════════════════════════════════════════════════════════════════

PAGE 3: ACCESSIBILITY STATEMENT

ACCESSIBILITY STATEMENT

Nuqta Technology L.L.C. is committed to ensuring digital accessibility for people with disabilities.

1. OUR COMMITMENT
We strive to make our website and mobile application accessible to all users, regardless of ability or technology used.

2. ACCESSIBILITY STANDARDS
We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.

3. ACCESSIBILITY FEATURES
Our platforms include:
• Alternative text for images
• Keyboard navigation support
• Screen reader compatibility
• Resizable text
• Sufficient color contrast
• Clear navigation structure
• Form labels and instructions

4. MOBILE ACCESSIBILITY
Our mobile app is designed to work with:
• VoiceOver (iOS)
• TalkBack (Android)
• Dynamic Type / Font scaling
• Reduced Motion settings

5. ONGOING EFFORTS
We continuously work to improve accessibility by:
• Regular accessibility audits
• User feedback integration
• Staff training on accessibility
• Testing with assistive technologies

6. KNOWN LIMITATIONS
We are actively working to address:
• [List any known accessibility issues]
• [Expected resolution timeline]

7. FEEDBACK
If you encounter accessibility barriers or have suggestions:

Email: accessibility@nuqtaapp.com
Phone: [Number]

Please provide:
• Description of the issue
• Page/feature affected
• Assistive technology used (if any)
• Your contact information

We aim to respond within 3 business days.

8. THIRD-PARTY CONTENT
Some third-party content or features may not be fully accessible. We work with our partners to improve accessibility.

9. ALTERNATIVE FORMATS
If you need information in an alternative format, please contact us.

Last reviewed: February 7, 2026
Next review: August 2026

═══════════════════════════════════════════════════════════════════

PAGE 4: SOCIAL MEDIA POLICY (External-facing)

SOCIAL MEDIA GUIDELINES

For Nuqta's Official Social Media Channels

1. OUR CHANNELS
Official Nuqta accounts:
• Instagram: @nuqtaapp
• TikTok: @nuqtaapp
• Twitter/X: @nuqtaapp
• LinkedIn: Nuqta Technology
• Facebook: Nuqtaapp

2. ENGAGEMENT POLICY
• We aim to respond to comments and messages within 24 hours
• Responses during business hours (Sun-Thu, 9 AM-6 PM GST)
• For urgent issues, contact support@nuqtaapp.com

3. COMMUNITY GUIDELINES
We welcome constructive feedback but may remove:
• Spam or commercial solicitation
• Offensive, discriminatory, or hateful content
• Personal attacks or harassment
• False or misleading information
• Content violating others' privacy
• Illegal content

4. USER CONTENT
By tagging us or using #Nuqta, you grant us permission to share your content. We will credit the original creator.

5. PROMOTIONS
Official promotions are announced through our verified channels. Be wary of fake accounts or scams.

6. OPINIONS
Views expressed by Nuqta team members on personal accounts are their own and do not represent official company positions.

7. REPORT ISSUES
To report fake accounts or concerning content:
Email: social@nuqtaapp.com`
  },
  {
    id: 'app-store-policies',
    title: 'App Store Compliance Documents',
    category: 'Digital Policies',
    status: 'draft',
    lastUpdated: 'Feb 7, 2026',
    description: 'Privacy policy and terms formatted for App Store and Play Store requirements.',
    content: `APP STORE COMPLIANCE DOCUMENTS

═══════════════════════════════════════════════════════════════════

DOCUMENT 1: APP STORE PRIVACY LABEL DATA

Apple App Store Privacy Details:

DATA LINKED TO YOU:
┌─────────────────────────┬─────────────────────────────────────┐
│ Data Type               │ Purpose                             │
├─────────────────────────┼─────────────────────────────────────┤
│ Contact Info            │                                     │
│ - Email Address         │ Account, App Functionality          │
│ - Phone Number          │ Account, App Functionality          │
│ - Name                  │ Account, Personalization            │
├─────────────────────────┼─────────────────────────────────────┤
│ Identifiers             │                                     │
│ - User ID               │ Account, Analytics                  │
│ - Device ID             │ Analytics, Fraud Prevention         │
├─────────────────────────┼─────────────────────────────────────┤
│ Location                │                                     │
│ - Coarse Location       │ App Functionality (nearby merchants)│
├─────────────────────────┼─────────────────────────────────────┤
│ Usage Data              │                                     │
│ - Product Interaction   │ Analytics, Personalization          │
├─────────────────────────┼─────────────────────────────────────┤
│ Purchases               │                                     │
│ - Purchase History      │ App Functionality, Analytics        │
├─────────────────────────┼─────────────────────────────────────┤
│ Financial Info          │                                     │
│ - Payment Info          │ App Functionality (linked cards)    │
└─────────────────────────┴─────────────────────────────────────┘

DATA USED TO TRACK YOU:
☐ Device ID (for ad attribution only with consent)

DATA NOT COLLECTED:
• Health & Fitness
• Sensitive Info
• Contacts (address book)
• Browsing History
• Search History

═══════════════════════════════════════════════════════════════════

DOCUMENT 2: GOOGLE PLAY DATA SAFETY

Data Safety Form Responses:

DOES YOUR APP COLLECT OR SHARE USER DATA?
Yes

DATA TYPES COLLECTED:
┌─────────────────────────┬───────────┬───────────┬─────────────┐
│ Data Type               │ Collected │ Shared    │ Purpose     │
├─────────────────────────┼───────────┼───────────┼─────────────┤
│ Name                    │ Yes       │ No        │ Account     │
│ Email                   │ Yes       │ No        │ Account     │
│ Phone                   │ Yes       │ No        │ Account     │
│ Approximate location    │ Yes       │ No        │ Features    │
│ Purchase history        │ Yes       │ No        │ Features    │
│ App interactions        │ Yes       │ No        │ Analytics   │
│ Crash logs              │ Yes       │ No        │ App support │
│ Device IDs              │ Yes       │ No        │ Analytics   │
└─────────────────────────┴───────────┴───────────┴─────────────┘

SECURITY PRACTICES:
☑ Data is encrypted in transit
☑ You can request that data be deleted
☑ Data is transferred securely

DATA DELETION:
Users can request account and data deletion through:
• In-app: Settings > Account > Delete Account
• Email: privacy@nuqtaapp.com

═══════════════════════════════════════════════════════════════════

DOCUMENT 3: MOBILE APP PRIVACY POLICY (SHORT FORM)

NUQTA PRIVACY POLICY

This policy explains how we handle your data.

WHAT WE COLLECT:
• Account info (name, email, phone)
• Transaction history
• App usage data
• Device information
• Location (with permission)

WHY WE COLLECT IT:
• To provide the rewards service
• To show nearby merchants
• To improve the app
• To prevent fraud

WHO WE SHARE WITH:
• Merchants (only your transaction at their store)
• Analytics providers (anonymized data)
• Payment processors (for card linking)
• Legal authorities (if required by law)

YOUR RIGHTS:
• Access your data
• Correct your data
• Delete your account
• Opt out of marketing
• Withdraw consent

DATA SECURITY:
• Encryption in transit and at rest
• Secure servers in UAE
• Regular security audits

CONTACT US:
privacy@nuqtaapp.com

Full Privacy Policy: www.nuqtaapp.com/privacy
Last Updated: February 7, 2026

═══════════════════════════════════════════════════════════════════

DOCUMENT 4: APP STORE LISTING COMPLIANCE

Required Disclosures in App Description:

1. SUBSCRIPTION DISCLOSURE (if applicable):
"Nuqta Premium subscription unlocks exclusive rewards and benefits. Subscriptions are charged monthly/annually to your iTunes/Play Store account. Auto-renewal may be turned off in Account Settings. No cancellation of current subscription during active period."

2. IN-APP PURCHASES:
"This app offers in-app purchases for premium features."

3. AGE RATING JUSTIFICATION:
• Age Rating: 4+ (iOS) / Everyone (Android)
• No mature content
• No violence
• No gambling mechanics (points are not redeemable for cash)

4. PERMISSIONS EXPLANATION:
• Location: To show nearby merchants and offers
• Camera: To scan QR codes at merchants
• Notifications: To alert you about points and offers
• Photos: To upload profile picture or receipts

5. THIRD-PARTY SERVICES:
• Firebase Analytics
• Google Maps
• Payment gateways

6. SUPPORT URL:
www.nuqtaapp.com/support

7. PRIVACY POLICY URL:
www.nuqtaapp.com/privacy

8. TERMS OF SERVICE URL:
www.nuqtaapp.com/terms

═══════════════════════════════════════════════════════════════════

DOCUMENT 5: ACCOUNT DELETION INSTRUCTIONS

(Required by Apple App Store)

HOW TO DELETE YOUR NUQTA ACCOUNT

Option 1: In-App Deletion
1. Open the Nuqta app
2. Go to Settings (gear icon)
3. Tap "Account"
4. Tap "Delete Account"
5. Confirm your password
6. Tap "Permanently Delete"
7. Your account will be deleted within 7 days

Option 2: Email Request
1. Send email to: privacy@nuqtaapp.com
2. Subject: "Account Deletion Request"
3. Include: Your registered email address
4. We will process within 7 days

WHAT GETS DELETED:
• Your profile information
• Transaction history
• Points balance (will be forfeited)
• Preferences and settings
• Linked payment methods

WHAT WE RETAIN:
• Transaction records (for legal/tax compliance) - anonymized
• Aggregated analytics data (cannot identify you)

IMPORTANT:
• Points cannot be recovered after deletion
• Pending redemptions will be cancelled
• You can create a new account with the same email after 30 days

QUESTIONS?
Contact: privacy@nuqtaapp.com`
  },
  {
    id: 'pdpl-ropa',
    title: 'PDPL - Record of Processing Activities (ROPA)',
    category: 'Data Protection',
    status: 'draft',
    lastUpdated: 'Feb 8, 2026',
    description: 'Required record of all personal data processing activities under UAE PDPL.',
    content: `RECORD OF PROCESSING ACTIVITIES (ROPA)
NUQTA TECHNOLOGY L.L.C.

Article 7 - UAE PDPL Compliance
Version: 1.0
Last Updated: _______________
Maintained By: Data Protection Officer

═══════════════════════════════════════════════════════════════════

1. CONTROLLER INFORMATION

Organization: Nuqta Technology L.L.C.
Trade License: [Number]
Address: Dubai, UAE
Contact: privacy@nuqtaapp.com
DPO: [Name/Role]
DPO Contact: dpo@nuqtaapp.com

═══════════════════════════════════════════════════════════════════

2. PROCESSING ACTIVITY REGISTER

─────────────────────────────────────────────────────────────────
ACTIVITY 1: USER REGISTRATION & ACCOUNT MANAGEMENT
─────────────────────────────────────────────────────────────────

Reference ID: PA-001
Department: Product / Engineering
Process Owner: CTO

Purpose of Processing:
• Create and manage user accounts
• Enable login and authentication
• Provide platform services

Legal Basis: Contract performance (Article 5.1)

Categories of Data Subjects:
• App users (consumers)

Categories of Personal Data:
• Name
• Email address
• Phone number
• Password (hashed)
• Profile photo (optional)
• Device identifiers

Retention Period: Duration of account + 2 years

Recipients:
• Internal: Product, Engineering, Support teams
• External: AWS (hosting), Firebase (auth)

International Transfers:
• AWS servers in UAE / Bahrain region
• Firebase (US) - Standard Contractual Clauses in place

Security Measures:
• Encryption at rest (AES-256)
• Encryption in transit (TLS 1.3)
• Access controls (role-based)
• MFA for admin access

─────────────────────────────────────────────────────────────────
ACTIVITY 2: TRANSACTION PROCESSING
─────────────────────────────────────────────────────────────────

Reference ID: PA-002
Department: Product / Finance
Process Owner: CFO

Purpose of Processing:
• Record user transactions at merchants
• Calculate and award points
• Enable transaction history

Legal Basis: Contract performance

Categories of Data Subjects:
• App users (consumers)
• Merchants

Categories of Personal Data:
• Transaction amount
• Date/time
• Merchant details
• Points earned
• Payment method (last 4 digits only)

Retention Period: 7 years (tax/legal compliance)

Recipients:
• Internal: Finance, Product teams
• External: Payment processors (Stripe), Merchants (limited)

International Transfers:
• Stripe (US) - Standard Contractual Clauses

Security Measures:
• PCI-DSS compliant payment processing
• Tokenization of card data
• Transaction logs encrypted

─────────────────────────────────────────────────────────────────
ACTIVITY 3: MARKETING & COMMUNICATIONS
─────────────────────────────────────────────────────────────────

Reference ID: PA-003
Department: Marketing
Process Owner: CMO

Purpose of Processing:
• Send promotional offers
• Push notifications
• Email marketing
• Personalized recommendations

Legal Basis: Consent (explicit opt-in)

Categories of Data Subjects:
• App users who opted in

Categories of Personal Data:
• Name
• Email address
• Push notification tokens
• Marketing preferences
• Engagement history

Retention Period: Until consent withdrawn + 30 days

Recipients:
• Internal: Marketing team
• External: Email service provider, Push notification service

International Transfers:
• Email provider (with adequate safeguards)

Security Measures:
• Consent records maintained
• Unsubscribe mechanism
• Preference center

─────────────────────────────────────────────────────────────────
ACTIVITY 4: CUSTOMER SUPPORT
─────────────────────────────────────────────────────────────────

Reference ID: PA-004
Department: Operations / Support
Process Owner: COO

Purpose of Processing:
• Respond to inquiries
• Resolve issues
• Maintain support history

Legal Basis: Contract performance, Legitimate interest

Categories of Data Subjects:
• Users, Merchants with support queries

Categories of Personal Data:
• Contact information
• Support ticket content
• Communication history
• Account details (as needed)

Retention Period: 3 years from ticket closure

Recipients:
• Internal: Support team
• External: Support platform (Intercom/Zendesk)

Security Measures:
• Access restricted to support staff
• Ticket data encrypted

─────────────────────────────────────────────────────────────────
ACTIVITY 5: ANALYTICS & IMPROVEMENT
─────────────────────────────────────────────────────────────────

Reference ID: PA-005
Department: Product / Data
Process Owner: CTO

Purpose of Processing:
• Improve app performance
• Understand user behavior
• Develop new features

Legal Basis: Legitimate interest

Categories of Data Subjects:
• All app users

Categories of Personal Data:
• Device information
• App usage patterns
• Feature interactions
• Crash logs
• Performance metrics

Retention Period: 26 months (aggregated indefinitely)

Recipients:
• Internal: Product, Engineering teams
• External: Analytics providers (Firebase, Mixpanel)

Security Measures:
• Data anonymization where possible
• Aggregation for reporting
• No individual tracking without consent

─────────────────────────────────────────────────────────────────
ACTIVITY 6: MERCHANT MANAGEMENT
─────────────────────────────────────────────────────────────────

Reference ID: PA-006
Department: Operations / Sales
Process Owner: COO

Purpose of Processing:
• Onboard merchant partners
• Manage merchant accounts
• Process merchant payments

Legal Basis: Contract performance

Categories of Data Subjects:
• Merchant representatives
• Business owners

Categories of Personal Data:
• Contact person name
• Business email/phone
• Trade license details
• Bank account details
• Business address

Retention Period: Duration of partnership + 7 years

Recipients:
• Internal: Sales, Finance, Operations
• External: Banking partners

Security Measures:
• Secure merchant portal
• Document encryption
• Access controls

─────────────────────────────────────────────────────────────────
ACTIVITY 7: EMPLOYEE DATA
─────────────────────────────────────────────────────────────────

Reference ID: PA-007
Department: HR
Process Owner: CHRO

Purpose of Processing:
• Employment administration
• Payroll processing
• Visa/immigration

Legal Basis: Contract performance, Legal obligation

Categories of Data Subjects:
• Employees, Contractors

Categories of Personal Data:
• Full name
• Emirates ID / Passport
• Contact details
• Salary information
• Bank details
• Performance records

Retention Period: Employment + 7 years

Recipients:
• Internal: HR, Finance
• External: MOHRE, Banks, Insurance

Security Measures:
• HR system access controls
• Encrypted storage
• Need-to-know access

═══════════════════════════════════════════════════════════════════

3. SUMMARY TABLE

┌─────────┬──────────────────────┬─────────────────┬──────────────┐
│ Ref     │ Activity             │ Legal Basis     │ Retention    │
├─────────┼──────────────────────┼─────────────────┼──────────────┤
│ PA-001  │ User Registration    │ Contract        │ Account + 2y │
│ PA-002  │ Transactions         │ Contract        │ 7 years      │
│ PA-003  │ Marketing            │ Consent         │ Until revoke │
│ PA-004  │ Customer Support     │ Contract/LI     │ 3 years      │
│ PA-005  │ Analytics            │ Legitimate Int  │ 26 months    │
│ PA-006  │ Merchant Mgmt        │ Contract        │ +7 years     │
│ PA-007  │ Employee Data        │ Contract/Legal  │ +7 years     │
└─────────┴──────────────────────┴─────────────────┴──────────────┘

═══════════════════════════════════════════════════════════════════

4. REVIEW & MAINTENANCE

This ROPA shall be:
• Reviewed quarterly
• Updated when new processing activities are added
• Updated when existing activities change
• Available to supervisory authority upon request

Last Review: _______________
Next Review: _______________
Approved By: _______________`
  },
  {
    id: 'pdpl-dpia',
    title: 'PDPL - Data Protection Impact Assessment (DPIA)',
    category: 'Data Protection',
    status: 'draft',
    lastUpdated: 'Feb 8, 2026',
    description: 'DPIA template for high-risk processing activities under UAE PDPL.',
    content: `DATA PROTECTION IMPACT ASSESSMENT (DPIA)
NUQTA TECHNOLOGY L.L.C.

Article 8 - UAE PDPL Compliance

═══════════════════════════════════════════════════════════════════

PART A: ASSESSMENT INFORMATION

Project/Processing Name: _______________
Assessment Date: _______________
Prepared By: _______________
Process Owner: _______________
DPO Review Date: _______________

═══════════════════════════════════════════════════════════════════

PART B: NEED FOR DPIA

A DPIA is required when processing is likely to result in HIGH RISK to individuals.

Does the processing involve any of the following?
[ ] Systematic and extensive profiling with significant effects
[ ] Large-scale processing of sensitive data
[ ] Large-scale, systematic monitoring of public areas
[ ] Automated decision-making with legal/significant effects
[ ] Processing of children's data at scale
[ ] Processing that could result in physical harm
[ ] Combination of data sets from different sources
[ ] Use of new technologies

If ANY box is checked, a full DPIA is recommended.

═══════════════════════════════════════════════════════════════════

PART C: PROCESSING DESCRIPTION

1. NATURE OF PROCESSING

What will you do with the personal data?
_______________________________________________________________
_______________________________________________________________

How will data be collected?
_______________________________________________________________

How will data be stored?
_______________________________________________________________

Who will have access?
_______________________________________________________________

2. SCOPE OF PROCESSING

Categories of data subjects: _______________
Approximate number of data subjects: _______________
Categories of personal data: _______________
Geographic scope: _______________
Duration of processing: _______________

3. CONTEXT OF PROCESSING

Relationship with data subjects: _______________
Level of control data subjects have: _______________
Data subjects' expectations: _______________
Prior experience with this processing: _______________

4. PURPOSE OF PROCESSING

Why are you processing the data?
_______________________________________________________________

What is the intended outcome?
_______________________________________________________________

Benefits to the organization: _______________
Benefits to data subjects: _______________

═══════════════════════════════════════════════════════════════════

PART D: NECESSITY & PROPORTIONALITY

1. LEGAL BASIS

What is the legal basis for processing?
[ ] Consent
[ ] Contract performance
[ ] Legal obligation
[ ] Vital interests
[ ] Public interest
[ ] Legitimate interests

If Legitimate Interests, describe: _______________

2. NECESSITY

Is the processing necessary for the stated purpose?
[ ] Yes - cannot achieve purpose otherwise
[ ] Partially - alternatives exist but less effective
[ ] No - alternatives available

Explain: _______________

3. PROPORTIONALITY

Is the amount of data collected proportionate?
[ ] Yes - minimum necessary
[ ] No - collecting more than needed

Actions to minimize data: _______________

4. DATA QUALITY

How will you ensure data accuracy? _______________
How can data subjects update their data? _______________

5. DATA RETENTION

How long will data be kept? _______________
Justification for retention period: _______________
Process for deletion: _______________

═══════════════════════════════════════════════════════════════════

PART E: RISK ASSESSMENT

For each risk, assess:
• LIKELIHOOD: Low (1), Medium (2), High (3)
• SEVERITY: Low (1), Medium (2), High (3)
• RISK LEVEL: L x S = Score

─────────────────────────────────────────────────────────────────
RISK 1: Unauthorized Access
─────────────────────────────────────────────────────────────────
Description: Third party gains access to personal data
Likelihood: [ ] Low [ ] Medium [ ] High
Severity: [ ] Low [ ] Medium [ ] High
Risk Level: _______________

Current Controls:
_______________________________________________________________

Additional Controls Needed:
_______________________________________________________________

─────────────────────────────────────────────────────────────────
RISK 2: Data Breach
─────────────────────────────────────────────────────────────────
Description: Personal data exposed due to security incident
Likelihood: [ ] Low [ ] Medium [ ] High
Severity: [ ] Low [ ] Medium [ ] High
Risk Level: _______________

Current Controls:
_______________________________________________________________

Additional Controls Needed:
_______________________________________________________________

─────────────────────────────────────────────────────────────────
RISK 3: Excessive Data Collection
─────────────────────────────────────────────────────────────────
Description: More data collected than necessary
Likelihood: [ ] Low [ ] Medium [ ] High
Severity: [ ] Low [ ] Medium [ ] High
Risk Level: _______________

Current Controls:
_______________________________________________________________

Additional Controls Needed:
_______________________________________________________________

─────────────────────────────────────────────────────────────────
RISK 4: Inaccurate Data
─────────────────────────────────────────────────────────────────
Description: Personal data is incorrect or outdated
Likelihood: [ ] Low [ ] Medium [ ] High
Severity: [ ] Low [ ] Medium [ ] High
Risk Level: _______________

Current Controls:
_______________________________________________________________

Additional Controls Needed:
_______________________________________________________________

─────────────────────────────────────────────────────────────────
RISK 5: Non-compliance with Data Subject Rights
─────────────────────────────────────────────────────────────────
Description: Failure to respond to access/deletion requests
Likelihood: [ ] Low [ ] Medium [ ] High
Severity: [ ] Low [ ] Medium [ ] High
Risk Level: _______________

Current Controls:
_______________________________________________________________

Additional Controls Needed:
_______________________________________________________________

═══════════════════════════════════════════════════════════════════

PART F: RISK MITIGATION

┌─────────────────────────┬──────────┬───────────────┬───────────┐
│ Risk                    │ Level    │ Mitigation    │ Residual  │
├─────────────────────────┼──────────┼───────────────┼───────────┤
│                         │          │               │           │
│                         │          │               │           │
│                         │          │               │           │
└─────────────────────────┴──────────┴───────────────┴───────────┘

═══════════════════════════════════════════════════════════════════

PART G: APPROVAL

OVERALL RISK ASSESSMENT:
[ ] Low - Processing may proceed
[ ] Medium - Processing may proceed with controls
[ ] High - Processing requires additional approval
[ ] Very High - Consider consulting supervisory authority

DPO REVIEW:
Comments: _______________________________________________________________

Recommendation: [ ] Approve [ ] Conditional Approval [ ] Reject

DPO Signature: _________________________
Date: _______________

PROCESS OWNER SIGN-OFF:
I confirm the mitigations will be implemented.

Signature: _________________________
Date: _______________

EXECUTIVE APPROVAL (if required):
Signature: _________________________
Name: _______________
Date: _______________

═══════════════════════════════════════════════════════════════════

PART H: REVIEW

This DPIA will be reviewed:
[ ] Annually
[ ] When processing changes materially
[ ] When new risks are identified
[ ] Following an incident

Next Review Date: _______________`
  },
  {
    id: 'data-breach-plan',
    title: 'Data Breach Response Plan',
    category: 'Data Protection',
    status: 'draft',
    lastUpdated: 'Feb 8, 2026',
    description: 'Incident response plan for personal data breaches under UAE PDPL.',
    content: `DATA BREACH RESPONSE PLAN
NUQTA TECHNOLOGY L.L.C.

Article 18 - UAE PDPL Compliance
Version: 1.0

═══════════════════════════════════════════════════════════════════

1. PURPOSE & SCOPE

This plan establishes procedures for detecting, responding to, and recovering from personal data breaches in compliance with UAE PDPL requirements.

Scope:
• All personal data processed by Nuqta
• All employees, contractors, and third-party processors
• All systems, applications, and databases

PDPL Requirement: Report to UAE Data Office within 72 hours.

═══════════════════════════════════════════════════════════════════

2. BREACH RESPONSE TEAM

┌─────────────────────────┬─────────────────┬──────────────────────┐
│ Role                    │ Name            │ Contact              │
├─────────────────────────┼─────────────────┼──────────────────────┤
│ Incident Commander      │ CEO             │ [Phone]              │
│ Data Protection Officer │ [DPO Name]      │ dpo@nuqtaapp.com     │
│ Technical Lead          │ CTO             │ [Phone]              │
│ Legal Counsel           │ [Lawyer]        │ [Phone]              │
│ Communications Lead     │ CMO             │ [Phone]              │
│ HR Lead                 │ CHRO            │ [Phone]              │
└─────────────────────────┴─────────────────┴──────────────────────┘

24/7 Emergency: [Phone Number]
Email: security@nuqtaapp.com

═══════════════════════════════════════════════════════════════════

3. WHAT IS A DATA BREACH?

A personal data breach is:
• Unauthorized access to personal data
• Unauthorized disclosure of personal data
• Loss of personal data
• Destruction of personal data (unauthorized)
• Alteration of personal data (unauthorized)

Examples:
• Hacker gains access to user database
• Employee sends data to wrong recipient
• Laptop with unencrypted data stolen
• Ransomware encrypts database
• Cloud misconfiguration exposes data
• Insider theft of customer data

═══════════════════════════════════════════════════════════════════

4. BREACH SEVERITY LEVELS

┌──────────────┬─────────────────────────────────────────────────┐
│ Level        │ Description                                     │
├──────────────┼─────────────────────────────────────────────────┤
│ CRITICAL     │ - Large-scale breach (>10,000 records)          │
│              │ - Sensitive data (financial, health)            │
│              │ - High risk of harm to individuals              │
│              │ - Regulatory notification required              │
├──────────────┼─────────────────────────────────────────────────┤
│ HIGH         │ - Medium-scale breach (1,000-10,000 records)    │
│              │ - Personal data with some sensitivity           │
│              │ - Moderate risk of harm                         │
├──────────────┼─────────────────────────────────────────────────┤
│ MEDIUM       │ - Small-scale breach (<1,000 records)           │
│              │ - Basic personal data only                      │
│              │ - Low risk of harm                              │
├──────────────┼─────────────────────────────────────────────────┤
│ LOW          │ - Minimal data affected                         │
│              │ - Encrypted data or quick containment           │
│              │ - No harm expected                              │
└──────────────┴─────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════

5. RESPONSE PHASES

─────────────────────────────────────────────────────────────────
PHASE 1: DETECTION & REPORTING (0-1 Hour)
─────────────────────────────────────────────────────────────────

Anyone who detects or suspects a breach must:

1. IMMEDIATELY report to:
   • Security team: security@nuqtaapp.com
   • DPO: dpo@nuqtaapp.com
   • Phone: [Emergency Number]

2. DO NOT:
   • Attempt to investigate alone
   • Modify or delete evidence
   • Discuss externally
   • Shut down systems (unless instructed)

3. DOCUMENT:
   • Time of discovery
   • How discovered
   • Initial observations
   • Systems/data affected (if known)

─────────────────────────────────────────────────────────────────
PHASE 2: INITIAL ASSESSMENT (1-4 Hours)
─────────────────────────────────────────────────────────────────

DPO + Technical Lead will:

1. Confirm if breach occurred
2. Identify:
   • What data is affected?
   • How many records?
   • Who is affected?
   • How did it happen?
   • Is it ongoing?

3. Assign severity level
4. Activate Breach Response Team if MEDIUM+
5. Document findings

ASSESSMENT CHECKLIST:
☐ Type of data compromised
☐ Number of individuals affected
☐ Geographic scope
☐ Attack vector/cause
☐ Systems affected
☐ Evidence of exfiltration
☐ Ongoing access

─────────────────────────────────────────────────────────────────
PHASE 3: CONTAINMENT (Immediate)
─────────────────────────────────────────────────────────────────

Technical Lead will:

1. Stop ongoing breach:
   ☐ Revoke compromised credentials
   ☐ Isolate affected systems
   ☐ Block suspicious IPs
   ☐ Disable compromised accounts

2. Preserve evidence:
   ☐ Create system images
   ☐ Preserve logs
   ☐ Document timeline
   ☐ Secure physical evidence

3. Prevent spread:
   ☐ Check for lateral movement
   ☐ Verify backup integrity
   ☐ Monitor for additional indicators

─────────────────────────────────────────────────────────────────
PHASE 4: NOTIFICATION (Within 72 Hours)
─────────────────────────────────────────────────────────────────

A. REGULATORY NOTIFICATION (if required)

Notify UAE Data Office if breach:
• Poses risk to individuals' rights
• Involves sensitive data
• Is large-scale
• Involves cross-border data

Notification must include:
☐ Nature of the breach
☐ Categories and number affected
☐ Name and contact of DPO
☐ Likely consequences
☐ Measures taken/proposed

Submit via: [UAE Data Office Portal]
Deadline: 72 hours from awareness

B. INDIVIDUAL NOTIFICATION (if required)

Notify affected individuals if:
• High risk to their rights and freedoms
• Direct communication possible

Notification must include:
☐ Description of breach
☐ DPO contact details
☐ Likely consequences
☐ Measures taken
☐ Recommendations for protection

Method: Email, in-app notification, SMS

C. OTHER NOTIFICATIONS

Consider notifying:
☐ Law enforcement (if criminal)
☐ Cyber insurance provider
☐ Payment processor (if payment data)
☐ Affected business partners
☐ Board of directors

─────────────────────────────────────────────────────────────────
PHASE 5: ERADICATION & RECOVERY
─────────────────────────────────────────────────────────────────

Technical Lead will:

1. Remove threat:
   ☐ Eliminate malware
   ☐ Close vulnerabilities
   ☐ Reset all credentials
   ☐ Patch affected systems

2. Restore systems:
   ☐ Restore from clean backups
   ☐ Verify system integrity
   ☐ Re-enable services gradually
   ☐ Enhanced monitoring

3. Validate security:
   ☐ Penetration testing
   ☐ Vulnerability scan
   ☐ Security configuration review

─────────────────────────────────────────────────────────────────
PHASE 6: POST-INCIDENT (Within 30 Days)
─────────────────────────────────────────────────────────────────

1. ROOT CAUSE ANALYSIS
   • What failed?
   • How could it have been prevented?
   • What controls were bypassed?

2. LESSONS LEARNED MEETING
   • All stakeholders present
   • Document findings
   • Identify improvements

3. POST-INCIDENT REPORT
   • Executive summary
   • Timeline
   • Impact assessment
   • Response evaluation
   • Recommendations

4. IMPLEMENT IMPROVEMENTS
   • Update policies
   • Enhance controls
   • Additional training
   • Update this plan

═══════════════════════════════════════════════════════════════════

6. BREACH REGISTER

All breaches must be documented:

┌──────────┬────────────┬────────────┬──────────────┬────────────┐
│ Ref      │ Date       │ Type       │ Records      │ Notified   │
├──────────┼────────────┼────────────┼──────────────┼────────────┤
│          │            │            │              │            │
└──────────┴────────────┴────────────┴──────────────┴────────────┘

Maintain records for minimum 5 years.

═══════════════════════════════════════════════════════════════════

7. COMMUNICATION TEMPLATES

INTERNAL NOTIFICATION:
Subject: [CONFIDENTIAL] Security Incident - [Date]

A potential data security incident has been detected.
Status: [Investigating / Contained / Resolved]
Impact: [Brief description]
Actions: [What staff should do/not do]
Next update: [Time]

Contact: security@nuqtaapp.com

─────────────────────────────────────────────────────────────────

AFFECTED INDIVIDUAL NOTIFICATION:
Subject: Important Information About Your Nuqta Account

Dear [Name],

We are writing to inform you of a data security incident that may have affected your personal information.

What happened: [Description]
When: [Date]
Data affected: [Categories]
What we're doing: [Actions taken]
What you can do: [Recommendations]

We apologize for any concern this may cause. If you have questions, please contact privacy@nuqtaapp.com.

Sincerely,
Nuqta Security Team

═══════════════════════════════════════════════════════════════════

8. TESTING & TRAINING

This plan shall be:
• Tested annually via tabletop exercise
• Updated after each incident
• Included in employee security training
• Reviewed with key vendors

Last Test: _______________
Next Test: _______________

Approved by: _______________
Date: _______________`
  },
  {
    id: 'dpo-appointment',
    title: 'Data Protection Officer Appointment',
    category: 'Data Protection',
    status: 'draft',
    lastUpdated: 'Feb 8, 2026',
    description: 'DPO appointment letter and role description under UAE PDPL.',
    content: `DATA PROTECTION OFFICER APPOINTMENT

═══════════════════════════════════════════════════════════════════

DOCUMENT 1: DPO APPOINTMENT LETTER

[On Company Letterhead]

Date: _______________

To: [DPO Name]
[Position/Department]

Subject: Appointment as Data Protection Officer

Dear [Name],

Following the requirements of UAE Federal Decree-Law No. 45 of 2021 (Personal Data Protection Law), we are pleased to appoint you as the Data Protection Officer (DPO) of Nuqta Technology L.L.C., effective [Date].

1. APPOINTMENT DETAILS

Position: Data Protection Officer
Reports to: CEO (for administrative purposes)
Independence: DPO reports directly to highest management on DPO matters
Term: Indefinite (subject to review)

2. RESPONSIBILITIES

As DPO, you will be responsible for:

A. COMPLIANCE MONITORING
• Monitor compliance with UAE PDPL
• Conduct regular data protection audits
• Review data processing activities
• Maintain the Record of Processing Activities (ROPA)

B. ADVISORY ROLE
• Advise management on data protection obligations
• Provide guidance on Data Protection Impact Assessments (DPIAs)
• Review data protection clauses in contracts
• Advise on privacy by design implementation

C. TRAINING & AWARENESS
• Develop and deliver data protection training
• Raise awareness among employees
• Create data protection guidelines and procedures

D. DATA SUBJECT REQUESTS
• Receive and manage data subject access requests
• Ensure timely response to rights requests
• Maintain records of requests and responses

E. REGULATORY LIAISON
• Serve as contact point for UAE Data Office
• Manage regulatory communications
• Coordinate breach notifications

F. INCIDENT RESPONSE
• Lead data breach response
• Coordinate breach investigations
• Ensure timely regulatory notifications

3. AUTHORITY

You are granted authority to:
• Access all personal data and processing operations
• Access all relevant departments and systems
• Report directly to the CEO on DPO matters
• Allocate resources for data protection activities
• Engage external expertise when necessary

4. INDEPENDENCE

As per PDPL requirements:
• You shall not receive instructions regarding the exercise of DPO tasks
• You shall not be dismissed or penalized for performing DPO duties
• You may raise concerns directly to the CEO/Board
• Conflicts of interest must be avoided

5. RESOURCES

The Company will provide:
• Time allocation: [X%] of your working time
• Budget for training and certifications
• Access to legal advice when needed
• Administrative support as required

6. CONTACT INFORMATION

Your DPO contact details for publication:
Email: dpo@nuqtaapp.com
Address: [Company Address]

These details will be:
• Published on our website
• Included in our privacy policy
• Provided to the UAE Data Office
• Communicated to employees

7. CONFIDENTIALITY

You must maintain confidentiality regarding:
• Personal data accessed in your role
• Security vulnerabilities discovered
• Individual complaints received
• Ongoing investigations

8. ACCEPTANCE

Please sign below to confirm your acceptance of this appointment.

For Nuqta Technology L.L.C.:

Signature: _________________________
Name: Rejaul Karim
Title: CEO
Date: _______________

ACCEPTANCE:

I accept the appointment as Data Protection Officer and confirm my understanding of the responsibilities outlined above.

Signature: _________________________
Name: _______________
Date: _______________

═══════════════════════════════════════════════════════════════════

DOCUMENT 2: DPO JOB DESCRIPTION

POSITION: Data Protection Officer
DEPARTMENT: Legal & Compliance
REPORTS TO: CEO
LOCATION: Dubai, UAE

PURPOSE:
Ensure Nuqta Technology L.L.C. complies with UAE PDPL and data protection best practices, protect the privacy rights of data subjects, and minimize data protection risks.

KEY RESPONSIBILITIES:

1. Compliance (40%)
• Develop and maintain data protection policies
• Monitor processing activities for compliance
• Conduct privacy audits and assessments
• Maintain ROPA and documentation
• Review new projects for privacy implications

2. Advisory (25%)
• Advise on DPIAs for high-risk processing
• Review data sharing arrangements
• Provide guidance on lawful processing
• Support privacy by design implementation
• Review third-party contracts for data protection

3. Operations (20%)
• Manage data subject requests (access, deletion, etc.)
• Coordinate data breach response
• Handle privacy complaints
• Liaise with regulatory authorities
• Manage vendor data protection assessments

4. Training (15%)
• Develop training programs
• Conduct awareness sessions
• Create guidelines and toolkits
• Update materials for regulatory changes

QUALIFICATIONS:

Required:
• Degree in law, IT, or related field
• 3+ years data protection/privacy experience
• Knowledge of UAE PDPL
• Understanding of information security principles
• Excellent communication skills
• Arabic language proficiency (preferred)

Preferred:
• CIPP/E, CIPP/A, or CIPM certification
• Experience with GDPR compliance
• Experience in technology/fintech sector
• Legal qualification

SKILLS:
• Strong analytical abilities
• Attention to detail
• Ability to work independently
• Stakeholder management
• Report writing
• Project management

═══════════════════════════════════════════════════════════════════

DOCUMENT 3: DPO NOTIFICATION TO REGULATOR

[To be submitted to UAE Data Office]

NOTIFICATION OF DATA PROTECTION OFFICER APPOINTMENT

Controller Details:
Organization: Nuqta Technology L.L.C.
Trade License: [Number]
Address: Dubai, UAE
Industry: Technology / E-Commerce

DPO Details:
Name: _______________
Email: dpo@nuqtaapp.com
Phone: _______________
Qualifications: _______________
Appointment Date: _______________

Confirmation:
☐ DPO has been provided with adequate resources
☐ DPO has direct access to senior management
☐ DPO operates independently
☐ Contact details published on website

Submitted by:
Name: Rejaul Karim
Position: CEO
Date: _______________
Signature: _________________________`
  },
  {
    id: 'aml-kyc-procedures',
    title: 'AML - KYC/CDD Procedures',
    category: 'Compliance',
    status: 'draft',
    lastUpdated: 'Feb 8, 2026',
    description: 'Know Your Customer and Customer Due Diligence procedures for AML compliance.',
    content: `KNOW YOUR CUSTOMER (KYC) / CUSTOMER DUE DILIGENCE (CDD)
PROCEDURES MANUAL

NUQTA TECHNOLOGY L.L.C.
Version: 1.0

═══════════════════════════════════════════════════════════════════

1. OVERVIEW

This document establishes KYC/CDD procedures for Nuqta in compliance with:
• UAE Federal Decree-Law No. 20 of 2018 (AML Law)
• CBUAE Regulations
• FATF Recommendations

═══════════════════════════════════════════════════════════════════

2. CUSTOMER RISK CATEGORIES

2.1 RISK CLASSIFICATION

┌──────────────┬─────────────────────────────────────────────────┐
│ Risk Level   │ Characteristics                                 │
├──────────────┼─────────────────────────────────────────────────┤
│ LOW          │ - UAE residents with verified Emirates ID       │
│              │ - Low transaction volumes                       │
│              │ - Standard consumer transactions                │
├──────────────┼─────────────────────────────────────────────────┤
│ MEDIUM       │ - GCC residents                                 │
│              │ - Moderate transaction volumes                  │
│              │ - Business accounts (small merchants)           │
├──────────────┼─────────────────────────────────────────────────┤
│ HIGH         │ - Non-GCC residents                             │
│              │ - High transaction volumes                      │
│              │ - PEPs or associates                            │
│              │ - High-risk countries                           │
│              │ - Unusual activity patterns                     │
└──────────────┴─────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════

3. USER ONBOARDING - KYC PROCEDURES

3.1 SIMPLIFIED DUE DILIGENCE (SDD) - Low Risk

Applicable to: Standard app users with basic features

Required Information:
☐ Full name
☐ Email address
☐ Phone number (verified via OTP)
☐ Date of birth (age verification)

Verification Method:
• Phone verification via OTP
• Email verification via link
• Age confirmation (18+)

Daily Transaction Limit: AED 1,000
Monthly Limit: AED 5,000
Features: Basic points earning, standard rewards

─────────────────────────────────────────────────────────────────

3.2 STANDARD DUE DILIGENCE (CDD) - Medium Risk

Applicable to: Users wanting higher limits or card linking

Required Information:
☐ Full legal name (as per ID)
☐ Date of birth
☐ Nationality
☐ Emirates ID number
☐ Residential address

Verification Method:
• Emirates ID verification (via ICP integration or document upload)
• Selfie with ID (liveness check)
• Address verification (Emirates ID address or utility bill)

Verification Criteria:
• Name matches across documents
• Photo matches selfie
• ID is valid (not expired)
• No signs of tampering

Daily Transaction Limit: AED 10,000
Monthly Limit: AED 50,000
Features: Card linking, higher redemptions, premium offers

─────────────────────────────────────────────────────────────────

3.3 ENHANCED DUE DILIGENCE (EDD) - High Risk

Applicable to: High-value users, PEPs, high-risk indicators

Required Information:
All CDD requirements plus:
☐ Proof of income / Source of funds
☐ Employer details
☐ Purpose of account
☐ Expected transaction pattern

Additional Verification:
• Source of funds documentation
• Additional identity documents (passport)
• Professional reference (for high-value merchants)
• Enhanced screening against sanctions lists
• Management approval required

Ongoing Monitoring:
• Transaction monitoring with lower thresholds
• Periodic review (every 6 months)
• Relationship manager assigned

═══════════════════════════════════════════════════════════════════

4. MERCHANT ONBOARDING - KYC PROCEDURES

4.1 REQUIRED DOCUMENTS

Business Documents:
☐ Trade License (valid, clear copy)
☐ Memorandum of Association
☐ Certificate of Incorporation (if applicable)
☐ Chamber of Commerce membership (if applicable)

Owner/Director Documents:
☐ Passport copies (all owners with >25% stake)
☐ Emirates ID (all UAE-based owners)
☐ Proof of address
☐ Visa copy (if applicable)

Business Information:
☐ Business description
☐ Website/social media
☐ Expected transaction volumes
☐ Physical location(s)
☐ Bank account details

4.2 VERIFICATION STEPS

Step 1: Document Collection
• Collect all required documents via secure portal
• Check document validity and clarity

Step 2: Identity Verification
• Verify owner identity against documents
• Screen against sanctions lists
• PEP screening for owners/directors

Step 3: Business Verification
• Verify trade license with DET
• Physical location verification (for tier 2+)
• Website/social media verification
• Bank account verification

Step 4: Risk Assessment
• Assign risk rating
• Determine appropriate limits
• Document assessment rationale

Step 5: Approval
• Operations team approval (standard)
• Compliance approval (medium/high risk)
• CEO approval (high-risk cases)

═══════════════════════════════════════════════════════════════════

5. SANCTIONS SCREENING

5.1 SCREENING REQUIREMENTS

All users and merchants must be screened against:
• UN Security Council Sanctions Lists
• UAE Local Terrorist List
• OFAC SDN List (for US nexus)
• EU Sanctions (for EU nexus)
• Other relevant sanctions lists

5.2 SCREENING TRIGGERS

Initial Screening:
• At onboarding
• Before account activation

Ongoing Screening:
• Daily batch screening against updated lists
• When customer information changes
• When new sanctions are published

5.3 MATCH HANDLING

Potential Match:
1. Account placed on hold
2. Enhanced verification conducted
3. Compliance Officer review
4. True match: Reject and report
5. False positive: Document and release

═══════════════════════════════════════════════════════════════════

6. PEP (POLITICALLY EXPOSED PERSONS) SCREENING

6.1 PEP DEFINITION

Politically Exposed Persons include:
• Heads of state/government
• Senior politicians
• Senior government officials
• Judicial/military leaders
• Senior executives of state-owned enterprises
• Senior political party officials
• Family members of above
• Close associates of above

6.2 PEP PROCEDURES

Identification:
• Screen at onboarding
• Self-declaration during registration
• Ongoing screening updates

If PEP Identified:
1. Automatic EDD required
2. Senior management approval for onboarding
3. Source of wealth verification
4. Enhanced ongoing monitoring
5. Annual relationship review

═══════════════════════════════════════════════════════════════════

7. ONGOING MONITORING

7.1 TRANSACTION MONITORING

Automated alerts for:
• Transactions exceeding user profile
• Multiple transactions just below thresholds
• Unusual geographic patterns
• Rapid points earning/redemption
• Dormant account suddenly active

7.2 PERIODIC REVIEWS

Low Risk: Every 3 years
Medium Risk: Every 2 years
High Risk: Annually

Review Includes:
• Verify information still current
• Check for adverse media
• Sanctions/PEP rescreening
• Transaction pattern analysis
• Risk rating reassessment

═══════════════════════════════════════════════════════════════════

8. RECORD KEEPING

Maintain records for minimum 5 years after relationship end:
• Customer identification documents
• Verification records
• Transaction records
• Correspondence
• Risk assessments
• SAR filings

═══════════════════════════════════════════════════════════════════

9. RED FLAGS

Watch for these indicators:
• Reluctance to provide information
• Inconsistent information
• Unusual transaction patterns
• Structuring (breaking up transactions)
• Connections to high-risk jurisdictions
• Adverse media coverage
• Mismatched business type and transactions
• Rapid velocity of points earning
• Multiple accounts with same identifiers

═══════════════════════════════════════════════════════════════════

10. ESCALATION

All concerns should be escalated to:

Level 1: Operations Team
• Resolve standard verification issues

Level 2: Compliance Officer
• Complex cases
• Potential sanctions matches
• PEP determinations

Level 3: MLRO
• SAR decisions
• High-risk approvals
• Regulatory communications

Level 4: CEO
• Relationship terminations
• Policy exceptions
• Significant risk decisions`
  },
  {
    id: 'aml-sar-procedures',
    title: 'AML - SAR Filing Procedures',
    category: 'Compliance',
    status: 'draft',
    lastUpdated: 'Feb 8, 2026',
    description: 'Suspicious Activity Report (SAR) filing procedures for UAE compliance.',
    content: `SUSPICIOUS ACTIVITY REPORT (SAR) FILING PROCEDURES

NUQTA TECHNOLOGY L.L.C.
MLRO Manual - Section 5

═══════════════════════════════════════════════════════════════════

1. OVERVIEW

This document establishes procedures for identifying, investigating, and reporting suspicious activities to the UAE Financial Intelligence Unit (FIU) via the goAML system.

Regulatory Basis:
• Federal Decree-Law No. 20 of 2018
• Cabinet Decision No. 10 of 2019
• CBUAE Guidelines

═══════════════════════════════════════════════════════════════════

2. WHEN TO FILE A SAR

2.1 MANDATORY REPORTING

A SAR MUST be filed when:
• Reasonable grounds exist to suspect funds are proceeds of crime
• There is suspicion of money laundering
• There is suspicion of terrorist financing
• Customer behavior is inconsistent with their profile
• Transaction has no apparent economic purpose

2.2 EXAMPLES OF SUSPICIOUS ACTIVITY

Transaction-Based:
• Transactions inconsistent with customer profile
• Structuring to avoid thresholds
• Rapid movement of funds (in and out quickly)
• Transactions with high-risk jurisdictions
• Multiple accounts used unusually
• Large cash transactions (for cash-accepting merchants)

Behavior-Based:
• Reluctance to provide information
• False or inconsistent information
• Attempts to avoid record-keeping
• Excessive concern about reporting
• Unusual interest in internal controls

Account-Based:
• Dormant account suddenly active
• Account used by others
• Multiple accounts with similar characteristics
• Business transactions inconsistent with stated purpose

Platform-Specific (Nuqta):
• Rapid points accumulation through fraudulent transactions
• Collusion between user and merchant
• Points earned at rates impossible through normal activity
• Redemption patterns suggesting fraud
• Multiple accounts linked to same individual

═══════════════════════════════════════════════════════════════════

3. SAR PROCESS FLOW

┌─────────────────────────────────────────────────────────────────┐
│  DETECTION                                                       │
│  • Automated alert triggered                                     │
│  • Employee observation                                          │
│  • External tip-off                                              │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  INTERNAL REPORT                                                 │
│  • Employee completes Internal Suspicious Activity Report        │
│  • Submit to Compliance within 24 hours                          │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  COMPLIANCE REVIEW                                               │
│  • Gather additional information                                 │
│  • Review account history                                        │
│  • Document analysis                                             │
│  • Determine if reportable                                       │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  MLRO DECISION                                                   │
│  • Review compliance analysis                                    │
│  • Make filing decision                                          │
│  • Approve SAR content if filing                                 │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│  goAML SUBMISSION                                                │
│  • MLRO files via goAML portal                                   │
│  • Retain confirmation                                           │
│  • Log in SAR register                                           │
└─────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════

4. INTERNAL SUSPICIOUS ACTIVITY REPORT

Complete this form for any suspicious activity:

─────────────────────────────────────────────────────────────────
INTERNAL SAR FORM
─────────────────────────────────────────────────────────────────

Report Number: ISAR-[YYYY]-[XXX]
Date: _______________
Reported By: _______________
Department: _______________

SUBJECT INFORMATION:

[ ] User [ ] Merchant [ ] Other

Name: _______________
Account ID: _______________
Emirates ID/Passport: _______________
Phone: _______________
Email: _______________
Account Status: [ ] Active [ ] Suspended [ ] Closed

SUSPICIOUS ACTIVITY DETAILS:

Date(s) of activity: _______________
Description of activity:
_______________________________________________________________
_______________________________________________________________
_______________________________________________________________

Why is this suspicious?
_______________________________________________________________
_______________________________________________________________

Transactions involved:
┌────────────┬─────────────┬────────────┬────────────────────────┐
│ Date       │ Amount      │ Type       │ Details                │
├────────────┼─────────────┼────────────┼────────────────────────┤
│            │             │            │                        │
│            │             │            │                        │
│            │             │            │                        │
└────────────┴─────────────┴────────────┴────────────────────────┘

Supporting documents attached:
☐ Transaction records
☐ Account history
☐ Communication records
☐ KYC documents
☐ Other: _______________

Reporter Signature: _________________________
Date: _______________

─────────────────────────────────────────────────────────────────
COMPLIANCE REVIEW (To be completed by Compliance)
─────────────────────────────────────────────────────────────────

Reviewed By: _______________
Date: _______________

Additional investigation conducted:
_______________________________________________________________

Recommendation:
[ ] File SAR - Sufficient grounds for suspicion
[ ] No SAR - Explained activity, document rationale
[ ] Need more information from: _______________

Rationale:
_______________________________________________________________

Signature: _________________________

─────────────────────────────────────────────────────────────────
MLRO DECISION
─────────────────────────────────────────────────────────────────

Decision: [ ] File SAR [ ] Do Not File

If not filing, rationale:
_______________________________________________________________

If filing:
goAML Reference: _______________
Filing Date: _______________

MLRO Signature: _________________________
Date: _______________

═══════════════════════════════════════════════════════════════════

5. goAML FILING GUIDE

5.1 ACCESS

Portal: https://www.goaml.ae
Login: [MLRO Credentials]
Support: goAML helpdesk

5.2 SAR CONTENT REQUIREMENTS

The SAR must include:
• Subject identification details
• Description of suspicious activity
• Why it is suspicious
• Relevant dates
• Amounts involved
• Supporting documentation
• Reporting entity details

5.3 FILING TIMELINE

• File as soon as suspicion is formed
• Maximum: Within 3 working days of suspicion
• Immediate: If related to terrorism financing

5.4 SUPPLEMENTAL REPORTS

If additional information becomes available:
• File supplemental SAR referencing original
• Update timeline
• Add new details

═══════════════════════════════════════════════════════════════════

6. TIPPING OFF PROHIBITION

CRITICAL: It is a criminal offense to:
• Inform the subject that a SAR has been filed
• Inform anyone that might tip off the subject
• Disclose that an investigation is underway

Penalties: Imprisonment and/or fines

Permitted:
• Discussing with legal counsel
• Sharing with other compliance staff (need-to-know)
• Responding to FIU inquiries

═══════════════════════════════════════════════════════════════════

7. RECORD KEEPING

Maintain for minimum 5 years:
• Copy of all SARs filed
• Supporting documentation
• Internal reports (filed and not filed)
• Decision rationale
• FIU correspondence

Location: Secure, restricted access
Format: Electronic and/or hard copy

═══════════════════════════════════════════════════════════════════

8. SAR REGISTER

Maintain a register of all SARs:

┌─────────┬───────────┬──────────┬──────────┬─────────┬──────────┐
│ Ref     │ Date      │ Subject  │ Activity │ Status  │ goAML #  │
├─────────┼───────────┼──────────┼──────────┼─────────┼──────────┤
│         │           │          │          │         │          │
└─────────┴───────────┴──────────┴──────────┴─────────┴──────────┘

═══════════════════════════════════════════════════════════════════

9. MLRO RESPONSIBILITIES

The MLRO must:
• Review all internal reports promptly
• Make filing decisions within 3 days
• Maintain the SAR register
• Respond to FIU inquiries
• Report statistics to management
• Train staff on suspicious activity
• Conduct periodic quality reviews

═══════════════════════════════════════════════════════════════════

10. QUALITY METRICS

Track and report:
• Number of internal reports received
• Number of SARs filed
• Average time to file
• FIU feedback received
• Staff training completion

Report to: CEO, Board (quarterly)`
  },
  {
    id: 'mlro-appointment',
    title: 'MLRO Appointment Letter',
    category: 'Compliance',
    status: 'draft',
    lastUpdated: 'Feb 8, 2026',
    description: 'Money Laundering Reporting Officer appointment under UAE AML regulations.',
    content: `MONEY LAUNDERING REPORTING OFFICER (MLRO)
APPOINTMENT LETTER

═══════════════════════════════════════════════════════════════════

[On Company Letterhead]

Date: _______________

To: [MLRO Name]
[Position/Department]

Subject: Appointment as Money Laundering Reporting Officer (MLRO)

Dear [Name],

In accordance with Federal Decree-Law No. 20 of 2018 and Cabinet Decision No. 10 of 2019, we are pleased to appoint you as the Money Laundering Reporting Officer (MLRO) of Nuqta Technology L.L.C., effective [Date].

═══════════════════════════════════════════════════════════════════

1. APPOINTMENT DETAILS

Position: Money Laundering Reporting Officer (MLRO)
Also known as: Compliance Officer
Department: Legal & Compliance
Reports to: CEO
Location: Dubai, UAE

Note: This may be a dual role with other compliance functions or a dedicated role depending on company size.

═══════════════════════════════════════════════════════════════════

2. KEY RESPONSIBILITIES

A. SUSPICIOUS ACTIVITY REPORTING
• Receive internal suspicious activity reports
• Investigate and assess reports
• Decide on SAR filings to FIU
• File SARs via goAML portal
• Maintain SAR records and register

B. COMPLIANCE PROGRAM
• Develop and maintain AML/CFT policies
• Implement KYC/CDD procedures
• Conduct AML risk assessments
• Monitor transaction patterns
• Ensure regulatory compliance

C. TRAINING & AWARENESS
• Design AML training program
• Conduct staff training sessions
• Raise AML awareness
• Update training for regulatory changes

D. REGULATORY LIAISON
• Primary contact for FIU
• Respond to regulatory inquiries
• Submit required reports
• Attend regulatory briefings

E. REPORTING TO MANAGEMENT
• Report AML statistics to CEO/Board
• Escalate significant issues
• Recommend policy changes
• Report on compliance status

═══════════════════════════════════════════════════════════════════

3. AUTHORITY

As MLRO, you are granted authority to:
• Access all transaction data and records
• Access customer files and KYC documents
• Request information from any department
• Suspend suspicious transactions
• Escalate matters directly to CEO
• Engage external expertise when needed
• File SARs without requiring approval

═══════════════════════════════════════════════════════════════════

4. INDEPENDENCE

• You may not be prevented from performing MLRO duties
• You may not be penalized for good-faith reporting
• You have direct access to the CEO and Board
• You operate independently in SAR decisions

═══════════════════════════════════════════════════════════════════

5. RESOURCES

The Company will provide:
• Time allocation: [Percentage/Hours] for MLRO duties
• Access to compliance tools and systems
• Budget for training and certifications
• goAML access credentials
• External legal/compliance support as needed

═══════════════════════════════════════════════════════════════════

6. QUALIFICATIONS

You have been selected based on your:
• Knowledge of AML/CFT regulations
• Understanding of our business operations
• Seniority and authority within the organization
• Integrity and independence
• Relevant qualifications/experience

Required Training:
☐ goAML system training
☐ UAE AML Law training
☐ CBUAE requirements training
☐ Annual refresher training

═══════════════════════════════════════════════════════════════════

7. CONFIDENTIALITY

You must maintain strict confidentiality regarding:
• SAR filings and content
• Ongoing investigations
• FIU communications
• Internal suspicious activity reports

Breach of confidentiality (tipping off) is a criminal offense.

═══════════════════════════════════════════════════════════════════

8. NOTIFICATION

Your appointment will be notified to:
☐ CBUAE (if required for our license type)
☐ Senior Management
☐ Board of Directors
☐ Relevant staff

═══════════════════════════════════════════════════════════════════

9. CONTACT DETAILS

Your official MLRO contact information:
Email: compliance@nuqtaapp.com
Phone: [Direct Line]

This information will be:
• Communicated to all staff
• Used for regulatory correspondence
• Available for FIU contact

═══════════════════════════════════════════════════════════════════

10. TERM AND REVIEW

Term: Indefinite (until resignation or removal)
Review: Annual performance review
Succession: Deputy MLRO to be designated

═══════════════════════════════════════════════════════════════════

SIGNATURES

For Nuqta Technology L.L.C.:

Signature: _________________________
Name: Rejaul Karim
Title: CEO
Date: _______________

ACCEPTANCE:

I accept the appointment as MLRO and confirm my understanding of the responsibilities and obligations outlined above.

Signature: _________________________
Name: _______________
Date: _______________

═══════════════════════════════════════════════════════════════════

APPENDIX: MLRO DECLARATION

I, [MLRO Name], hereby declare that:

1. I have read and understood the UAE AML/CFT laws and regulations.

2. I have the necessary knowledge and experience to perform the MLRO role.

3. I commit to:
   • Fulfilling all MLRO responsibilities diligently
   • Maintaining confidentiality of all sensitive information
   • Filing SARs promptly when required
   • Reporting to management as required
   • Staying updated on regulatory changes
   • Acting with integrity and independence

4. I have no conflicts of interest that would prevent me from performing this role effectively.

5. I will immediately notify the CEO if any circumstances arise that may affect my ability to perform this role.

Signature: _________________________
Name: _______________
Date: _______________

═══════════════════════════════════════════════════════════════════

NOTIFICATION TO REGULATOR (if required)

[Template for regulatory notification]

To: [Relevant Authority]

Subject: Notification of MLRO Appointment

We hereby notify you that [MLRO Name] has been appointed as the Money Laundering Reporting Officer of Nuqta Technology L.L.C., effective [Date].

Contact Details:
Name: _______________
Position: MLRO
Email: compliance@nuqtaapp.com
Phone: _______________

Submitted by:
Name: Rejaul Karim
Position: CEO
Date: _______________
Signature: _________________________

Company Stamp: [Affix]`
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
