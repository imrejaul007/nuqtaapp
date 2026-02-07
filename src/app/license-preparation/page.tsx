'use client';

import React, { useState } from 'react';
import {
  FileCheck,
  Building2,
  CheckCircle,
  Clock,
  DollarSign,
  Users,
  FileText,
  Globe,
  Lock,
  CreditCard,
  Landmark,
  ArrowRight,
  Calendar,
  Download,
  AlertCircle,
  ChevronDown,
  ChevronRight,
  Briefcase,
  Shield,
  Phone,
  Mail,
  MapPin,
  User,
  Printer,
  ExternalLink,
  Copy,
  CheckSquare,
  Square,
  Zap,
  Scale,
  Receipt,
  Banknote,
  Building,
  Stamp,
  PenTool,
  Camera,
  Folder,
  ClipboardList
} from 'lucide-react';

/**
 * LICENSE PREPARATION PAGE
 *
 * Complete preparation checklists, document requirements, and forms
 * for all licenses required to operate Nuqta in UAE
 */

// Company Information (to be used across all applications)
const companyInfo = {
  legal: {
    name: 'Nuqta Technology L.L.C.',
    tradeName: 'NUQTA',
    type: 'Limited Liability Company (L.L.C.)',
    jurisdiction: 'Dubai, UAE (Mainland)',
    activities: [
      'E-Commerce Portal',
      'Technology Services',
      'Loyalty & Rewards Programs',
      'Mobile Application Services',
      'Digital Marketing Services'
    ],
    shareCapital: 'AED 300,000',
    financialYear: 'January - December'
  },
  shareholders: [
    { name: 'Rejaul Karim', nationality: 'Indian', share: '100%', role: 'Founder & CEO' }
  ],
  management: [
    { name: 'Rejaul Karim', role: 'CEO & Managing Director', emiratesId: 'Required', passport: 'Required' },
    { name: 'Deep Tednu Kuri', role: 'CTO', emiratesId: 'Required', passport: 'Required' },
    { name: 'Sarbajit Bhatacharjee', role: 'CMO', emiratesId: 'Required', passport: 'Required' },
    { name: 'Gyandeep Bordoloi', role: 'COO', emiratesId: 'Required', passport: 'Required' }
  ],
  address: {
    office: 'To be finalized',
    emirate: 'Dubai',
    area: 'Business Bay / DIFC Area',
    poBox: 'To be assigned'
  },
  contact: {
    phone: '+971 XX XXX XXXX',
    email: 'legal@nuqta.io',
    website: 'www.nuqta.io'
  }
};

// License Preparation Data
const licensePreparations = [
  {
    id: 'trade-license',
    name: 'Dubai Trade License (DED)',
    authority: 'Department of Economy & Tourism (DET)',
    priority: 'CRITICAL',
    estimatedCost: 'AED 12,900 - 15,000',
    timeline: '3-5 business days',
    status: 'in_progress',
    portalUrl: 'https://eservices.dubaided.gov.ae',
    documents: [
      {
        category: 'Shareholder Documents',
        items: [
          { name: 'Passport Copy (all shareholders)', required: true, status: 'ready', notes: 'Color copy, valid for 6+ months' },
          { name: 'Emirates ID (if UAE resident)', required: true, status: 'ready', notes: 'Front and back, clear copy' },
          { name: 'Passport-size Photos (6 copies)', required: true, status: 'pending', notes: 'White background, recent' },
          { name: 'Entry Stamp / Visa Copy', required: true, status: 'ready', notes: 'For non-residents' },
          { name: 'No Objection Certificate (if employed)', required: false, status: 'not_needed', notes: 'From current employer' }
        ]
      },
      {
        category: 'Company Formation Documents',
        items: [
          { name: 'Initial Approval Certificate', required: true, status: 'pending', notes: 'From DET portal' },
          { name: 'Memorandum of Association (MOA)', required: true, status: 'in_progress', notes: 'Notarized, Arabic + English' },
          { name: 'Trade Name Reservation', required: true, status: 'pending', notes: '"NUQTA TECHNOLOGY L.L.C."' },
          { name: 'Business Activity Selection', required: true, status: 'ready', notes: 'E-Commerce Portal, Technology Services' },
          { name: 'Share Capital Proof', required: true, status: 'pending', notes: 'Bank statement showing AED 300,000' }
        ]
      },
      {
        category: 'Office/Location Documents',
        items: [
          { name: 'Ejari (Tenancy Contract)', required: true, status: 'pending', notes: 'Registered with Dubai Land Department' },
          { name: 'Title Deed (if owned)', required: false, status: 'not_needed', notes: 'If purchasing office space' },
          { name: 'Office Location Map', required: true, status: 'pending', notes: 'Google Maps screenshot acceptable' },
          { name: 'Landlord NOC', required: false, status: 'not_needed', notes: 'If sub-leasing' }
        ]
      }
    ],
    steps: [
      { step: 1, title: 'Trade Name Reservation', description: 'Reserve "NUQTA TECHNOLOGY L.L.C." on DET portal', duration: '1 day', status: 'pending', cost: 'AED 620' },
      { step: 2, title: 'Initial Approval', description: 'Get initial approval for business activities', duration: '1 day', status: 'pending', cost: 'AED 120' },
      { step: 3, title: 'Draft MOA', description: 'Prepare Memorandum of Association with lawyer', duration: '2-3 days', status: 'in_progress', cost: 'AED 2,000-5,000' },
      { step: 4, title: 'Notarize MOA', description: 'Notarize MOA at Dubai Courts', duration: '1 day', status: 'pending', cost: 'AED 500-1,000' },
      { step: 5, title: 'Secure Office', description: 'Sign lease and register Ejari', duration: '1-2 weeks', status: 'pending', cost: 'AED 15,000-50,000/year' },
      { step: 6, title: 'Submit Application', description: 'Submit all documents to DET', duration: '1 day', status: 'pending', cost: 'AED 10,000-12,000' },
      { step: 7, title: 'Receive License', description: 'Collect trade license certificate', duration: '1-2 days', status: 'pending', cost: 'Included' }
    ],
    forms: [
      { name: 'DET Application Form', url: 'https://eservices.dubaided.gov.ae', type: 'Online' },
      { name: 'MOA Template', url: '#', type: 'PDF' },
      { name: 'Partner Information Form', url: '#', type: 'PDF' }
    ],
    contacts: [
      { name: 'DET Customer Service', phone: '600 545454', email: 'info@dubaidet.ae' },
      { name: 'Dubai Courts (Notarization)', phone: '04 334 7777', email: 'info@dc.gov.ae' }
    ]
  },
  {
    id: 'ecommerce-license',
    name: 'E-Commerce License & TDRA NOC',
    authority: 'DET + Telecom & Digital Regulatory Authority',
    priority: 'CRITICAL',
    estimatedCost: 'AED 2,000 - 3,000',
    timeline: '5-7 business days',
    status: 'pending',
    portalUrl: 'https://www.tdra.gov.ae',
    prerequisite: 'Dubai Trade License',
    documents: [
      {
        category: 'Business Documents',
        items: [
          { name: 'Trade License Copy', required: true, status: 'pending', notes: 'Valid Dubai Trade License' },
          { name: 'MOA Copy', required: true, status: 'pending', notes: 'Showing e-commerce activity' },
          { name: 'Manager Passport & Emirates ID', required: true, status: 'ready', notes: 'Authorized signatory' }
        ]
      },
      {
        category: 'Platform Information',
        items: [
          { name: 'Website/App Details', required: true, status: 'ready', notes: 'Domain: nuqta.io, App: Nuqta' },
          { name: 'Platform Description', required: true, status: 'ready', notes: 'Loyalty & rewards platform description' },
          { name: 'Business Model Document', required: true, status: 'ready', notes: 'How platform operates' },
          { name: 'Terms of Service (Draft)', required: true, status: 'in_progress', notes: 'For website/app' },
          { name: 'Privacy Policy (Draft)', required: true, status: 'in_progress', notes: 'PDPL compliant' }
        ]
      },
      {
        category: 'Technical Requirements',
        items: [
          { name: 'SSL Certificate', required: true, status: 'ready', notes: 'HTTPS enabled' },
          { name: 'Payment Gateway Agreement', required: true, status: 'ready', notes: 'Stripe/Checkout.com' },
          { name: 'Data Hosting Location', required: true, status: 'ready', notes: 'UAE/approved jurisdiction' },
          { name: 'Security Measures Document', required: true, status: 'in_progress', notes: 'Data protection measures' }
        ]
      }
    ],
    steps: [
      { step: 1, title: 'Obtain Trade License', description: 'Complete trade license first', duration: 'Prerequisite', status: 'pending', cost: 'See above' },
      { step: 2, title: 'Prepare Platform Docs', description: 'Website details, business model, T&Cs', duration: '2-3 days', status: 'in_progress', cost: 'Internal' },
      { step: 3, title: 'Apply for TDRA NOC', description: 'Submit online at TDRA portal', duration: '1 day', status: 'pending', cost: 'AED 1,000' },
      { step: 4, title: 'TDRA Review', description: 'Authority reviews application', duration: '2-3 days', status: 'pending', cost: 'Included' },
      { step: 5, title: 'Add E-Commerce Activity', description: 'Add activity to trade license at DET', duration: '1 day', status: 'pending', cost: 'AED 1,000-2,000' },
      { step: 6, title: 'Receive Endorsement', description: 'E-commerce endorsement on license', duration: '1 day', status: 'pending', cost: 'Included' }
    ],
    forms: [
      { name: 'TDRA NOC Application', url: 'https://www.tdra.gov.ae/en/services.aspx', type: 'Online' },
      { name: 'E-Commerce Activity Form', url: 'https://eservices.dubaided.gov.ae', type: 'Online' }
    ],
    contacts: [
      { name: 'TDRA Customer Care', phone: '800 12', email: 'customercare@tdra.gov.ae' }
    ]
  },
  {
    id: 'vat-registration',
    name: 'VAT Registration',
    authority: 'Federal Tax Authority (FTA)',
    priority: 'CRITICAL',
    estimatedCost: 'Free',
    timeline: '5-10 business days',
    status: 'pending',
    portalUrl: 'https://tax.gov.ae',
    prerequisite: 'Dubai Trade License',
    documents: [
      {
        category: 'Business Documents',
        items: [
          { name: 'Trade License Copy', required: true, status: 'pending', notes: 'Valid and active' },
          { name: 'MOA/Articles of Association', required: true, status: 'pending', notes: 'Company formation docs' },
          { name: 'Passport of Authorized Signatory', required: true, status: 'ready', notes: 'CEO passport' },
          { name: 'Emirates ID of Signatory', required: true, status: 'ready', notes: 'Valid Emirates ID' }
        ]
      },
      {
        category: 'Financial Information',
        items: [
          { name: 'Bank Account Details', required: true, status: 'pending', notes: 'Corporate bank account' },
          { name: 'Expected Annual Turnover', required: true, status: 'ready', notes: 'Projected revenue' },
          { name: 'Financial Year Details', required: true, status: 'ready', notes: 'Jan-Dec' },
          { name: 'Import/Export Status', required: true, status: 'ready', notes: 'N/A initially' }
        ]
      },
      {
        category: 'Business Details',
        items: [
          { name: 'Business Activities Description', required: true, status: 'ready', notes: 'E-commerce, loyalty platform' },
          { name: 'GCC Activity (if any)', required: false, status: 'not_needed', notes: 'Cross-border transactions' },
          { name: 'Branch/Subsidiary Info', required: false, status: 'not_needed', notes: 'If applicable' }
        ]
      }
    ],
    steps: [
      { step: 1, title: 'Create FTA Account', description: 'Register at tax.gov.ae e-Services', duration: '1 day', status: 'pending', cost: 'Free' },
      { step: 2, title: 'Complete Registration Form', description: 'Fill VAT registration details', duration: '1 day', status: 'pending', cost: 'Free' },
      { step: 3, title: 'Upload Documents', description: 'Submit all required documents', duration: '1 day', status: 'pending', cost: 'Free' },
      { step: 4, title: 'FTA Review', description: 'Authority reviews application', duration: '3-5 days', status: 'pending', cost: 'Free' },
      { step: 5, title: 'Receive TRN', description: 'Get Tax Registration Number', duration: '1-2 days', status: 'pending', cost: 'Free' },
      { step: 6, title: 'Set Up VAT Accounting', description: 'Configure accounting system', duration: '1 day', status: 'pending', cost: 'AED 500-2,000' }
    ],
    forms: [
      { name: 'VAT Registration Form', url: 'https://tax.gov.ae/en/taxes/vat.aspx', type: 'Online' },
      { name: 'FTA e-Services Portal', url: 'https://eservices.tax.gov.ae', type: 'Online' }
    ],
    contacts: [
      { name: 'FTA Call Center', phone: '600 599 994', email: 'taxpayer.services@tax.gov.ae' }
    ],
    notes: [
      'Mandatory when turnover exceeds AED 375,000',
      'Voluntary registration allowed at AED 187,500+',
      'VAT rate: 5%',
      'Quarterly filing required'
    ]
  },
  {
    id: 'pdpl-compliance',
    name: 'PDPL Compliance (Data Protection)',
    authority: 'UAE Data Office',
    priority: 'CRITICAL',
    estimatedCost: 'AED 50,000 - 100,000',
    timeline: 'Ongoing',
    status: 'in_progress',
    portalUrl: 'https://www.uaecabinet.ae',
    documents: [
      {
        category: 'Policies & Procedures',
        items: [
          { name: 'Privacy Policy', required: true, status: 'in_progress', notes: 'For website and app' },
          { name: 'Data Protection Policy', required: true, status: 'in_progress', notes: 'Internal policy document' },
          { name: 'Cookie Policy', required: true, status: 'pending', notes: 'Cookie consent mechanism' },
          { name: 'Data Retention Policy', required: true, status: 'pending', notes: 'How long data is kept' },
          { name: 'Data Breach Response Plan', required: true, status: 'pending', notes: '72-hour notification requirement' }
        ]
      },
      {
        category: 'Technical Documentation',
        items: [
          { name: 'Data Processing Records (ROPA)', required: true, status: 'pending', notes: 'What data, why, how' },
          { name: 'Data Flow Mapping', required: true, status: 'pending', notes: 'How data moves in system' },
          { name: 'Security Measures Document', required: true, status: 'in_progress', notes: 'Encryption, access controls' },
          { name: 'Vendor/Processor Agreements', required: true, status: 'pending', notes: 'With Stripe, AWS, etc.' },
          { name: 'Cross-Border Transfer Assessment', required: true, status: 'pending', notes: 'For data outside UAE' }
        ]
      },
      {
        category: 'Operational Requirements',
        items: [
          { name: 'DPO Appointment Letter', required: true, status: 'pending', notes: 'Data Protection Officer' },
          { name: 'Staff Training Records', required: true, status: 'pending', notes: 'PDPL awareness training' },
          { name: 'Consent Management System', required: true, status: 'in_progress', notes: 'For app/website' },
          { name: 'Data Subject Rights Procedures', required: true, status: 'pending', notes: 'Access, delete, port requests' }
        ]
      }
    ],
    steps: [
      { step: 1, title: 'Data Audit', description: 'Map all personal data collected', duration: '2 weeks', status: 'in_progress', cost: 'AED 10,000-20,000' },
      { step: 2, title: 'Gap Analysis', description: 'Identify compliance gaps', duration: '1 week', status: 'pending', cost: 'Included' },
      { step: 3, title: 'Draft Policies', description: 'Create all required policies', duration: '2-3 weeks', status: 'in_progress', cost: 'AED 15,000-25,000' },
      { step: 4, title: 'Appoint DPO', description: 'Designate Data Protection Officer', duration: '1 week', status: 'pending', cost: 'Internal/External' },
      { step: 5, title: 'Implement Controls', description: 'Technical and organizational measures', duration: '2-4 weeks', status: 'pending', cost: 'AED 20,000-40,000' },
      { step: 6, title: 'Staff Training', description: 'Train all employees on PDPL', duration: 'Ongoing', status: 'pending', cost: 'AED 5,000-10,000' },
      { step: 7, title: 'Continuous Monitoring', description: 'Regular audits and updates', duration: 'Ongoing', status: 'pending', cost: 'AED 10,000/quarter' }
    ],
    forms: [
      { name: 'ROPA Template', url: '#', type: 'Excel' },
      { name: 'DPIA Template', url: '#', type: 'Word' },
      { name: 'Consent Form Template', url: '#', type: 'PDF' }
    ],
    contacts: [
      { name: 'UAE Data Office', phone: 'TBD', email: 'TBD' }
    ],
    notes: [
      'Non-compliance fines: up to AED 500,000',
      'Data breach must be reported within 72 hours',
      'Cross-border transfers require adequate protection',
      'Applies to all personal data of UAE residents'
    ]
  },
  {
    id: 'aml-compliance',
    name: 'AML/CFT Compliance',
    authority: 'CBUAE + Financial Intelligence Unit',
    priority: 'CRITICAL',
    estimatedCost: 'AED 30,000 - 50,000',
    timeline: 'Ongoing',
    status: 'in_progress',
    portalUrl: 'https://www.centralbank.ae',
    documents: [
      {
        category: 'Policies & Procedures',
        items: [
          { name: 'AML/CFT Policy', required: true, status: 'in_progress', notes: 'Comprehensive policy document' },
          { name: 'KYC/CDD Procedures', required: true, status: 'in_progress', notes: 'Customer due diligence steps' },
          { name: 'EDD Procedures', required: true, status: 'pending', notes: 'Enhanced due diligence for high-risk' },
          { name: 'Sanctions Screening Policy', required: true, status: 'pending', notes: 'OFAC, UN, local sanctions' },
          { name: 'SAR Filing Procedures', required: true, status: 'pending', notes: 'Suspicious Activity Reports' }
        ]
      },
      {
        category: 'Risk Assessment',
        items: [
          { name: 'Business Risk Assessment', required: true, status: 'in_progress', notes: 'ML/TF risk evaluation' },
          { name: 'Customer Risk Rating Model', required: true, status: 'pending', notes: 'Low/Medium/High risk' },
          { name: 'Product Risk Assessment', required: true, status: 'pending', notes: 'Loyalty points, cashback risks' },
          { name: 'Geographic Risk Assessment', required: true, status: 'pending', notes: 'Countries of operation' }
        ]
      },
      {
        category: 'Operational Requirements',
        items: [
          { name: 'MLRO Appointment', required: true, status: 'pending', notes: 'Money Laundering Reporting Officer' },
          { name: 'Transaction Monitoring System', required: true, status: 'in_progress', notes: 'Via PSP (Stripe)' },
          { name: 'Staff Training Program', required: true, status: 'pending', notes: 'Annual AML training' },
          { name: 'Record Keeping Procedures', required: true, status: 'pending', notes: '5-year retention' }
        ]
      }
    ],
    steps: [
      { step: 1, title: 'Risk Assessment', description: 'Conduct ML/TF risk assessment', duration: '2 weeks', status: 'in_progress', cost: 'AED 10,000-15,000' },
      { step: 2, title: 'Draft Policies', description: 'Create AML/CFT policy suite', duration: '2-3 weeks', status: 'in_progress', cost: 'AED 10,000-20,000' },
      { step: 3, title: 'Appoint MLRO', description: 'Designate Compliance Officer', duration: '1 week', status: 'pending', cost: 'Internal' },
      { step: 4, title: 'Implement KYC', description: 'Set up customer verification', duration: '2 weeks', status: 'in_progress', cost: 'AED 5,000-10,000' },
      { step: 5, title: 'Transaction Monitoring', description: 'Configure monitoring rules', duration: '2 weeks', status: 'pending', cost: 'Via PSP' },
      { step: 6, title: 'Staff Training', description: 'Train all relevant staff', duration: 'Ongoing', status: 'pending', cost: 'AED 3,000-5,000' },
      { step: 7, title: 'Annual Audit', description: 'Independent AML audit', duration: 'Annual', status: 'pending', cost: 'AED 15,000-25,000' }
    ],
    forms: [
      { name: 'SAR Form', url: 'https://www.centralbank.ae', type: 'Online' },
      { name: 'goAML Registration', url: 'https://www.goaml.ae', type: 'Online' }
    ],
    contacts: [
      { name: 'CBUAE Compliance', phone: '02 691 5000', email: 'compliance@cbuae.gov.ae' },
      { name: 'UAE FIU', phone: '02 681 7212', email: 'info@uaefiu.gov.ae' }
    ],
    notes: [
      'Penalties for non-compliance: AED 50,000 - 500,000,000',
      'SAR filing is mandatory for suspicious transactions',
      'Using licensed PSP (Stripe) covers most requirements',
      'Still need internal policies and training'
    ]
  },
  {
    id: 'bank-account',
    name: 'Corporate Bank Account',
    authority: 'UAE Banks (ENBD, ADCB, FAB, etc.)',
    priority: 'CRITICAL',
    estimatedCost: 'AED 5,000 - 15,000 minimum balance',
    timeline: '2-4 weeks',
    status: 'pending',
    portalUrl: 'Various',
    prerequisite: 'Dubai Trade License',
    documents: [
      {
        category: 'Company Documents',
        items: [
          { name: 'Trade License (Original)', required: true, status: 'pending', notes: 'Must be valid' },
          { name: 'MOA (Notarized Original)', required: true, status: 'pending', notes: 'Arabic version' },
          { name: 'Certificate of Incorporation', required: true, status: 'pending', notes: 'If applicable' },
          { name: 'Board Resolution', required: true, status: 'pending', notes: 'Authorizing account opening' },
          { name: 'Power of Attorney', required: false, status: 'not_needed', notes: 'If signatory is different' }
        ]
      },
      {
        category: 'Shareholder/Director Documents',
        items: [
          { name: 'Passport (All shareholders)', required: true, status: 'ready', notes: 'Valid for 6+ months' },
          { name: 'Emirates ID (All shareholders)', required: true, status: 'ready', notes: 'If UAE resident' },
          { name: 'Visa Copy (All shareholders)', required: true, status: 'ready', notes: 'If UAE resident' },
          { name: 'Proof of Address', required: true, status: 'pending', notes: 'Utility bill or bank statement' },
          { name: 'Source of Funds Declaration', required: true, status: 'pending', notes: 'Origin of initial capital' }
        ]
      },
      {
        category: 'Business Information',
        items: [
          { name: 'Business Plan', required: true, status: 'ready', notes: 'Overview of operations' },
          { name: 'Expected Transaction Volume', required: true, status: 'ready', notes: 'Monthly estimates' },
          { name: 'Major Customers/Suppliers', required: true, status: 'ready', notes: 'If known' },
          { name: 'Website/App Information', required: true, status: 'ready', notes: 'nuqta.io details' }
        ]
      }
    ],
    steps: [
      { step: 1, title: 'Choose Bank', description: 'Compare Emirates NBD, FAB, ADCB', duration: '1-2 days', status: 'pending', cost: 'Free' },
      { step: 2, title: 'Initial Meeting', description: 'Meet relationship manager', duration: '1 day', status: 'pending', cost: 'Free' },
      { step: 3, title: 'Submit Application', description: 'Complete forms and submit docs', duration: '1 day', status: 'pending', cost: 'Free' },
      { step: 4, title: 'Due Diligence', description: 'Bank conducts KYC/AML checks', duration: '1-2 weeks', status: 'pending', cost: 'Free' },
      { step: 5, title: 'Account Approval', description: 'Receive approval notification', duration: '3-5 days', status: 'pending', cost: 'Free' },
      { step: 6, title: 'Initial Deposit', description: 'Deposit minimum balance', duration: '1 day', status: 'pending', cost: 'AED 5,000-15,000' },
      { step: 7, title: 'Activate Services', description: 'Online banking, cards, etc.', duration: '2-3 days', status: 'pending', cost: 'Varies' }
    ],
    forms: [
      { name: 'ENBD Business Account', url: 'https://www.emiratesnbd.com/en/business-banking', type: 'Online' },
      { name: 'FAB Business Account', url: 'https://www.bankfab.com/en-ae/business', type: 'Online' },
      { name: 'ADCB Business Account', url: 'https://www.adcb.com/en/business', type: 'Online' }
    ],
    contacts: [
      { name: 'Emirates NBD Business', phone: '600 540 000', email: 'businessbanking@emiratesnbd.com' },
      { name: 'FAB Business', phone: '600 525 500', email: 'business@bankfab.com' },
      { name: 'ADCB Business', phone: '800 2030', email: 'business@adcb.com' }
    ],
    notes: [
      'Fintech companies face stricter due diligence',
      'Having a clear business plan helps approval',
      'Consider neo-banks like Wio for faster setup',
      'Maintain minimum balance to avoid fees'
    ]
  },
  {
    id: 'trademark',
    name: 'Trademark Registration',
    authority: 'Ministry of Economy',
    priority: 'MEDIUM',
    estimatedCost: 'AED 6,000 - 10,000 per class',
    timeline: '6-12 months',
    status: 'pending',
    portalUrl: 'https://www.moec.gov.ae',
    documents: [
      {
        category: 'Applicant Documents',
        items: [
          { name: 'Trade License Copy', required: true, status: 'pending', notes: 'Valid license' },
          { name: 'Power of Attorney', required: true, status: 'pending', notes: 'If using trademark agent' },
          { name: 'Applicant ID/Passport', required: true, status: 'ready', notes: 'Company representative' }
        ]
      },
      {
        category: 'Trademark Materials',
        items: [
          { name: 'Logo (High Resolution)', required: true, status: 'ready', notes: 'JPEG/PNG, 300 DPI' },
          { name: 'Logo (Black & White)', required: true, status: 'ready', notes: 'For formal registration' },
          { name: 'Wordmark "NUQTA"', required: true, status: 'ready', notes: 'Text-only version' },
          { name: 'List of Goods/Services', required: true, status: 'ready', notes: 'Nice Classification' }
        ]
      }
    ],
    steps: [
      { step: 1, title: 'Trademark Search', description: 'Check for existing similar marks', duration: '1-2 weeks', status: 'pending', cost: 'AED 500-1,000' },
      { step: 2, title: 'Prepare Application', description: 'Complete forms and materials', duration: '2-3 days', status: 'pending', cost: 'Internal' },
      { step: 3, title: 'File Application', description: 'Submit to Ministry of Economy', duration: '1 day', status: 'pending', cost: 'AED 5,000-6,000' },
      { step: 4, title: 'Examination', description: 'Ministry reviews application', duration: '2-3 months', status: 'pending', cost: 'Included' },
      { step: 5, title: 'Publication', description: 'Published in official gazette', duration: '30 days', status: 'pending', cost: 'AED 500' },
      { step: 6, title: 'Opposition Period', description: 'Third parties can object', duration: '30 days', status: 'pending', cost: 'N/A' },
      { step: 7, title: 'Registration', description: 'Receive trademark certificate', duration: '1-2 months', status: 'pending', cost: 'AED 500' }
    ],
    forms: [
      { name: 'Trademark Application Form', url: 'https://www.moec.gov.ae/en/services', type: 'Online' }
    ],
    contacts: [
      { name: 'MOE Intellectual Property', phone: '800 665', email: 'info@economy.ae' }
    ],
    notes: [
      'File in Classes 9 (software), 35 (advertising), 36 (financial)',
      'Protection lasts 10 years, renewable',
      'Can file internationally via Madrid Protocol later',
      'Consider hiring trademark agent for smoother process'
    ]
  },
  {
    id: 'employee-visas',
    name: 'Employee Visas & Work Permits',
    authority: 'MOHRE + ICP + GDRFA',
    priority: 'HIGH',
    estimatedCost: 'AED 5,000 - 8,000 per employee',
    timeline: '2-4 weeks per employee',
    status: 'pending',
    portalUrl: 'https://www.mohre.gov.ae',
    prerequisite: 'Dubai Trade License',
    documents: [
      {
        category: 'Company Documents',
        items: [
          { name: 'Trade License', required: true, status: 'pending', notes: 'Valid license' },
          { name: 'Establishment Card', required: true, status: 'pending', notes: 'From MOHRE' },
          { name: 'Immigration Card', required: true, status: 'pending', notes: 'From GDRFA' },
          { name: 'Tenancy Contract (Ejari)', required: true, status: 'pending', notes: 'Registered office' }
        ]
      },
      {
        category: 'Employee Documents',
        items: [
          { name: 'Passport (Original)', required: true, status: 'varies', notes: '6+ months validity' },
          { name: 'Passport Photos', required: true, status: 'varies', notes: 'White background' },
          { name: 'Educational Certificates', required: true, status: 'varies', notes: 'Attested if from abroad' },
          { name: 'Employment Contract', required: true, status: 'pending', notes: 'MOHRE template' },
          { name: 'Job Offer Letter', required: true, status: 'pending', notes: 'Company letterhead' }
        ]
      }
    ],
    steps: [
      { step: 1, title: 'Get Establishment Card', description: 'Register company with MOHRE', duration: '3-5 days', status: 'pending', cost: 'AED 2,000' },
      { step: 2, title: 'Get Immigration Card', description: 'Register with GDRFA', duration: '3-5 days', status: 'pending', cost: 'AED 1,000' },
      { step: 3, title: 'Apply Work Permit', description: 'Submit employee work permit', duration: '3-5 days', status: 'pending', cost: 'AED 2,000-3,000' },
      { step: 4, title: 'Entry Permit', description: 'Get entry permit for employee', duration: '2-3 days', status: 'pending', cost: 'AED 500' },
      { step: 5, title: 'Medical Test', description: 'Employee takes medical exam', duration: '1-2 days', status: 'pending', cost: 'AED 300' },
      { step: 6, title: 'Emirates ID', description: 'Apply for Emirates ID', duration: '5-7 days', status: 'pending', cost: 'AED 370' },
      { step: 7, title: 'Visa Stamping', description: 'Stamp visa in passport', duration: '2-3 days', status: 'pending', cost: 'AED 500' }
    ],
    forms: [
      { name: 'MOHRE Portal', url: 'https://www.mohre.gov.ae', type: 'Online' },
      { name: 'ICP Portal', url: 'https://smartservices.icp.gov.ae', type: 'Online' },
      { name: 'GDRFA Portal', url: 'https://gdrfad.gov.ae', type: 'Online' }
    ],
    contacts: [
      { name: 'MOHRE Call Center', phone: '800 60', email: 'info@mohre.gov.ae' },
      { name: 'GDRFA Dubai', phone: '8005111', email: 'info@gdrfad.gov.ae' }
    ],
    notes: [
      'Need minimum 1 visa quota per AED 15,000 rent',
      'Quota can be increased with higher rent',
      'Golden Visa available for key employees',
      'Medical insurance mandatory before visa'
    ]
  }
];

// Urgent Action Items
const urgentActions = [
  { task: 'Finalize office location (Ejari)', deadline: 'Feb 10, 2026', owner: 'COO', status: 'in_progress' },
  { task: 'Complete MOA drafting with lawyer', deadline: 'Feb 12, 2026', owner: 'CFO', status: 'in_progress' },
  { task: 'Collect passport photos from all partners', deadline: 'Feb 8, 2026', owner: 'CHRO', status: 'pending' },
  { task: 'Prepare source of funds documentation', deadline: 'Feb 15, 2026', owner: 'CFO', status: 'pending' },
  { task: 'Draft Privacy Policy and Terms', deadline: 'Feb 20, 2026', owner: 'CTO', status: 'in_progress' },
  { task: 'Contact banks for account opening', deadline: 'Feb 12, 2026', owner: 'CFO', status: 'pending' }
];

const LicensePreparationPage = () => {
  const [expandedLicense, setExpandedLicense] = useState<string | null>('trade-license');
  const [activeSection, setActiveSection] = useState<'docs' | 'steps' | 'contacts'>('docs');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ready': return 'bg-green-500/20 text-green-400';
      case 'in_progress': return 'bg-blue-500/20 text-blue-400';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400';
      case 'not_needed': return 'bg-slate-500/20 text-slate-400';
      default: return 'bg-slate-500/20 text-slate-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ready': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'in_progress': return <Clock className="w-4 h-4 text-blue-400" />;
      case 'pending': return <Square className="w-4 h-4 text-yellow-400" />;
      case 'not_needed': return <CheckSquare className="w-4 h-4 text-slate-400" />;
      default: return <Square className="w-4 h-4 text-slate-400" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'CRITICAL': return 'bg-red-500 text-white';
      case 'HIGH': return 'bg-orange-500 text-white';
      case 'MEDIUM': return 'bg-yellow-500 text-black';
      default: return 'bg-slate-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <ClipboardList className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">License Preparation</h1>
              <p className="text-blue-100 text-sm sm:text-lg mt-1">Complete Checklists & Requirements</p>
            </div>
          </div>
          <p className="text-blue-100 max-w-3xl text-sm sm:text-base">
            Everything you need to prepare for each license. Documents, step-by-step processes,
            forms, and contact information all in one place.
          </p>

          {/* Company Info Summary */}
          <div className="mt-6 bg-white/10 backdrop-blur rounded-xl p-4 sm:p-6">
            <h3 className="font-bold text-white mb-3">Company Information</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-blue-200">Legal Name</p>
                <p className="font-bold text-white">{companyInfo.legal.name}</p>
              </div>
              <div>
                <p className="text-blue-200">Type</p>
                <p className="font-bold text-white">{companyInfo.legal.type}</p>
              </div>
              <div>
                <p className="text-blue-200">Jurisdiction</p>
                <p className="font-bold text-white">{companyInfo.legal.jurisdiction}</p>
              </div>
              <div>
                <p className="text-blue-200">Share Capital</p>
                <p className="font-bold text-white">{companyInfo.legal.shareCapital}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Urgent Actions */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 sm:p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="w-5 h-5 text-red-400" />
            <h2 className="font-bold text-red-400">Urgent Action Items</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {urgentActions.map((action, idx) => (
              <div key={idx} className="bg-slate-900/50 rounded-lg p-3 flex items-start gap-3">
                {getStatusIcon(action.status)}
                <div className="flex-1">
                  <p className="text-sm text-white font-medium">{action.task}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-red-400">{action.deadline}</span>
                    <span className="text-xs text-slate-500">• {action.owner}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* License Sections */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">License Requirements</h2>

        <div className="space-y-4">
          {licensePreparations.map((license) => (
            <div
              key={license.id}
              className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() => setExpandedLicense(expandedLicense === license.id ? null : license.id)}
                className="w-full p-4 sm:p-6 flex items-start justify-between text-left hover:bg-slate-700/30 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">{license.name}</h3>
                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${getPriorityColor(license.priority)}`}>
                      {license.priority}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${getStatusColor(license.status)}`}>
                      {license.status.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm">{license.authority}</p>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm">
                    <span className="text-slate-500 flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {license.timeline}
                    </span>
                    <span className="text-blue-400 font-medium flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      {license.estimatedCost}
                    </span>
                    {license.prerequisite && (
                      <span className="text-orange-400 text-xs flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        Requires: {license.prerequisite}
                      </span>
                    )}
                  </div>
                </div>
                {expandedLicense === license.id ? (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>

              {/* Expanded Content */}
              {expandedLicense === license.id && (
                <div className="border-t border-slate-700">
                  {/* Section Tabs */}
                  <div className="flex border-b border-slate-700">
                    {[
                      { id: 'docs', label: 'Documents', icon: FileText },
                      { id: 'steps', label: 'Steps', icon: ArrowRight },
                      { id: 'contacts', label: 'Contacts', icon: Phone }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveSection(tab.id as typeof activeSection)}
                        className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                          activeSection === tab.id
                            ? 'text-blue-400 border-b-2 border-blue-400 bg-blue-500/10'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        <tab.icon className="w-4 h-4" />
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  <div className="p-4 sm:p-6">
                    {/* Documents Section */}
                    {activeSection === 'docs' && (
                      <div className="space-y-6">
                        {license.documents.map((category, catIdx) => (
                          <div key={catIdx}>
                            <h4 className="text-blue-400 font-bold mb-3 flex items-center gap-2">
                              <Folder className="w-4 h-4" />
                              {category.category}
                            </h4>
                            <div className="space-y-2">
                              {category.items.map((item, itemIdx) => (
                                <div
                                  key={itemIdx}
                                  className={`flex items-start gap-3 p-3 rounded-lg ${
                                    item.status === 'ready' ? 'bg-green-500/10' :
                                    item.status === 'in_progress' ? 'bg-blue-500/10' :
                                    item.status === 'pending' ? 'bg-yellow-500/10' :
                                    'bg-slate-700/30'
                                  }`}
                                >
                                  {getStatusIcon(item.status)}
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                      <span className="text-white font-medium text-sm">{item.name}</span>
                                      {item.required && (
                                        <span className="text-xs text-red-400">*Required</span>
                                      )}
                                    </div>
                                    <p className="text-xs text-slate-400 mt-1">{item.notes}</p>
                                  </div>
                                  <span className={`px-2 py-0.5 rounded text-xs ${getStatusColor(item.status)}`}>
                                    {item.status.replace('_', ' ')}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Steps Section */}
                    {activeSection === 'steps' && (
                      <div className="space-y-4">
                        {license.steps.map((step) => (
                          <div
                            key={step.step}
                            className={`flex items-start gap-4 p-4 rounded-lg ${
                              step.status === 'completed' ? 'bg-green-500/10' :
                              step.status === 'in_progress' ? 'bg-blue-500/10' :
                              'bg-slate-700/30'
                            }`}
                          >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                              step.status === 'completed' ? 'bg-green-500' :
                              step.status === 'in_progress' ? 'bg-blue-500' :
                              'bg-slate-600'
                            }`}>
                              {step.status === 'completed' ? (
                                <CheckCircle className="w-5 h-5 text-white" />
                              ) : (
                                <span className="text-white font-bold text-sm">{step.step}</span>
                              )}
                            </div>
                            <div className="flex-1">
                              <h5 className="font-bold text-white">{step.title}</h5>
                              <p className="text-sm text-slate-400 mt-1">{step.description}</p>
                              <div className="flex items-center gap-4 mt-2">
                                <span className="text-xs text-slate-500 flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {step.duration}
                                </span>
                                <span className="text-xs text-blue-400 font-medium">
                                  {step.cost}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Contacts Section */}
                    {activeSection === 'contacts' && (
                      <div className="space-y-4">
                        {/* Portal Link */}
                        {license.portalUrl && (
                          <a
                            href={license.portalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-4 bg-blue-500/10 rounded-lg border border-blue-500/30 hover:bg-blue-500/20 transition-colors"
                          >
                            <Globe className="w-5 h-5 text-blue-400" />
                            <div className="flex-1">
                              <p className="font-medium text-white">Official Portal</p>
                              <p className="text-sm text-blue-400">{license.portalUrl}</p>
                            </div>
                            <ExternalLink className="w-4 h-4 text-blue-400" />
                          </a>
                        )}

                        {/* Contacts */}
                        {license.contacts && license.contacts.map((contact, idx) => (
                          <div key={idx} className="bg-slate-700/30 rounded-lg p-4">
                            <p className="font-medium text-white mb-2">{contact.name}</p>
                            <div className="space-y-1">
                              <p className="text-sm text-slate-400 flex items-center gap-2">
                                <Phone className="w-4 h-4" />
                                {contact.phone}
                              </p>
                              <p className="text-sm text-slate-400 flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                {contact.email}
                              </p>
                            </div>
                          </div>
                        ))}

                        {/* Forms */}
                        {license.forms && license.forms.length > 0 && (
                          <div>
                            <h4 className="text-blue-400 font-bold mb-3 flex items-center gap-2">
                              <Download className="w-4 h-4" />
                              Forms & Applications
                            </h4>
                            <div className="space-y-2">
                              {license.forms.map((form, idx) => (
                                <a
                                  key={idx}
                                  href={form.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors"
                                >
                                  <span className="text-white text-sm">{form.name}</span>
                                  <span className="text-xs text-slate-400 px-2 py-1 bg-slate-600 rounded">
                                    {form.type}
                                  </span>
                                </a>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Notes */}
                        {license.notes && license.notes.length > 0 && (
                          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                            <h4 className="text-yellow-400 font-bold mb-2 flex items-center gap-2">
                              <AlertCircle className="w-4 h-4" />
                              Important Notes
                            </h4>
                            <ul className="space-y-1">
                              {license.notes.map((note, idx) => (
                                <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                                  <span className="text-yellow-400">•</span>
                                  {note}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <div className="mt-8 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl p-6 border border-blue-500/30">
          <h3 className="font-bold text-white text-lg mb-4">Total Estimated Costs (Pre-Launch)</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-900/50 rounded-lg p-4 text-center">
              <p className="text-2xl font-black text-blue-400">AED 93,000</p>
              <p className="text-sm text-slate-400">Licensing & Setup</p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4 text-center">
              <p className="text-2xl font-black text-blue-400">AED 50,000</p>
              <p className="text-sm text-slate-400">Office & Ejari</p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4 text-center">
              <p className="text-2xl font-black text-blue-400">AED 40,000</p>
              <p className="text-sm text-slate-400">Visas (5 employees)</p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4 text-center">
              <p className="text-2xl font-black text-white">AED 183,000</p>
              <p className="text-sm text-blue-400 font-medium">Total Pre-Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LicensePreparationPage;
