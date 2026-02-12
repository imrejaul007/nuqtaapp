'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Shield, Scale, FileText, Globe, BarChart3, Users, Lock,
  ArrowRight, CheckCircle, ChevronDown, ChevronUp, Database,
  Activity, DollarSign, Zap, AlertTriangle, Settings,
  Building2, Search, Eye, Brain, Bell, Server,
  BookOpen, Fingerprint, CreditCard, Star, Clock,
  TrendingUp, Layers, Award, MapPin, Briefcase,
  Code, Monitor, HardDrive, UserCheck, Heart,
  GitBranch, Crown, Store, Package, Target, Rocket,
  Calculator, Flame, Leaf, ShoppingCart, Megaphone,
  Truck, Stethoscope, Home, Car, GraduationCap,
  ChevronRight, ArrowRightLeft, Network, Sparkles,
  PieChart, HeartHandshake
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ─── Key Stats ────────────────────────────────────────────────
const keyStats = [
  { label: 'Compliance Pillars', value: '12', suffix: 'core', color: 'text-teal-400' },
  { label: 'GCC Regulators', value: '30+', suffix: 'tracked', color: 'text-blue-400' },
  { label: 'Industry Add-ons', value: '8', suffix: 'sectors', color: 'text-amber-400' },
  { label: 'Countries', value: '6', suffix: 'GCC', color: 'text-emerald-400' },
];

// ─── 12 Core Compliance Pillars ────────────────────────────────
const compliancePillars = [
  {
    id: 'financial', name: 'Financial Compliance', arabic: 'امتثال مالي', icon: DollarSign,
    color: 'text-emerald-400', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/30',
    description: 'AML/CFT, KYC/KYB, sanctions screening, STR/SAR filing, transaction monitoring, PEP screening, and regulatory filings.',
    capabilities: ['AML/CFT compliance program', 'KYC/KYB verification workflows', 'Sanctions screening (UN, UAE, SAMA lists)', 'STR filing via goAML & SAFIRS', 'Transaction monitoring rules', 'PEP & adverse media screening', 'Risk assessment scoring', 'Record retention (5-10yr auto-archive)'],
    regulators: ['CBUAE', 'SAMA', 'CBB', 'QCB', 'CBO', 'CBK'],
    fineRange: 'AED 50K - 500M',
  },
  {
    id: 'tax', name: 'Tax & VAT', arabic: 'ضريبة', icon: FileText,
    color: 'text-blue-400', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30',
    description: 'VAT registration, returns, excise tax, corporate tax (UAE 9%), transfer pricing, and multi-jurisdiction tax calendars.',
    capabilities: ['VAT registration & threshold tracking', 'Automated quarterly VAT returns', 'Input/output tax reconciliation', 'Excise tax management', 'UAE Corporate Tax (9%) compliance', 'Transfer pricing documentation', 'Tax invoice validation (FTA format)', 'Multi-jurisdiction tax calendar'],
    regulators: ['FTA (UAE)', 'ZATCA (KSA)', 'NBR (Bahrain)', 'GTA (Qatar)'],
    fineRange: 'AED 10K - 50K per violation',
  },
  {
    id: 'data', name: 'Data & Privacy', arabic: 'خصوصية', icon: Lock,
    color: 'text-purple-400', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/30',
    description: 'UAE PDPL, KSA NDMO, GDPR, consent management, breach procedures, DPO tools, cross-border transfer assessments.',
    capabilities: ['UAE PDPL compliance dashboard', 'KSA Personal Data Protection Law', 'GDPR for EU data subjects', 'Consent management platform', 'Data breach notification (72h)', 'Data subject rights portal', 'Cross-border transfer assessments', 'Cookie consent & tracking audit', 'DPO task management', 'Data processing records'],
    regulators: ['UAE Data Office', 'NDMO (KSA)', 'PDPA (Bahrain)', 'EU DPA'],
    fineRange: 'AED 500K+',
  },
  {
    id: 'corporate', name: 'Corporate, Licensing & IP', arabic: 'تراخيص', icon: Building2,
    color: 'text-orange-400', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-500/30',
    description: 'Trade licenses, e-commerce licenses, renewals, entity management, trademark, patent, copyright, and domain protection.',
    capabilities: ['Trade license renewal alerts', 'E-commerce license tracker', 'Multi-entity management', 'Board resolution tracker', 'Visa & work permit expiry alerts', 'Trademark registration & monitoring', 'Patent & copyright portfolio', 'Domain dispute management', 'POA management', 'Annual return deadlines'],
    regulators: ['DET', 'ADDC', 'MoE', 'DMCC', 'DIFC', 'ADGM'],
    fineRange: 'AED 10K - 100K',
  },
  {
    id: 'cyber', name: 'IT & Cybersecurity', arabic: 'أمن سيبراني', icon: Shield,
    color: 'text-red-400', bgColor: 'bg-red-500/10', borderColor: 'border-red-500/30',
    description: 'SOC2, PCI-DSS, ISO 27001, penetration testing, vulnerability management, incident response, vendor security assessments.',
    capabilities: ['SOC2 Type II readiness', 'PCI-DSS Level 1 tracker', 'ISO 27001 ISMS management', 'Penetration testing scheduler', 'Vulnerability management (CVE)', 'Security policy library', 'Incident response plans', 'Access review & privilege audit', 'Vendor security assessments', 'Security awareness training'],
    regulators: ['NESA (UAE)', 'NCA (KSA)', 'PCI SSC', 'ISO'],
    fineRange: 'Varies + breach costs',
  },
  {
    id: 'labor', name: 'Labor, Health & Safety', arabic: 'عمالة وسلامة', icon: Users,
    color: 'text-cyan-400', bgColor: 'bg-cyan-500/10', borderColor: 'border-cyan-500/30',
    description: 'WPS, MOHRE, GOSI, HSE, fire safety, civil defense NOC, workplace hazards, Emiratisation/Saudization quotas.',
    capabilities: ['WPS compliance tracking', 'MOHRE labor law compliance', 'End-of-service gratuity calculator', 'GOSI contributions (KSA)', 'Fire safety certificate tracker', 'Civil Defense NOC management', 'Workplace hazard assessments', 'Emiratisation/Saudization quotas', 'Overtime & hours compliance', 'Incident reporting & RIDDOR'],
    regulators: ['MOHRE', 'GOSI', 'Civil Defense', 'OSHAD', 'SIO (Bahrain)'],
    fineRange: 'AED 5K - 100K per violation',
  },
  {
    id: 'shariah', name: 'Shariah Compliance', arabic: 'شريعة', icon: BookOpen,
    color: 'text-[#c9a227]', bgColor: 'bg-[#c9a227]/10', borderColor: 'border-[#c9a227]/30',
    description: 'Product Shariah screening, fatwa tracking, AAOIFI standards, Shariah audit, Islamic contract templates, purification tracker.',
    capabilities: ['Product Shariah screening', 'Fatwa register & tracking', 'Annual Shariah audit prep', 'AAOIFI standards checker', 'Shariah Board portal', 'Income purification tracker', 'Islamic contract templates', 'Shariah risk framework'],
    regulators: ['Shariah Board', 'AAOIFI', 'CBUAE Islamic', 'SAMA Islamic'],
    fineRange: 'Reputational + regulatory',
  },
  {
    id: 'insurance', name: 'Insurance & Risk', arabic: 'تأمين', icon: Heart,
    color: 'text-pink-400', bgColor: 'bg-pink-500/10', borderColor: 'border-pink-500/30',
    description: 'Mandatory health insurance, vehicle insurance, professional indemnity, workers comp, D&O insurance, policy renewal tracking.',
    capabilities: ['Mandatory health insurance (DHA)', 'Vehicle fleet insurance tracker', 'Professional indemnity insurance', 'Workers compensation management', 'D&O insurance for directors', 'Policy renewal auto-alerts', 'Claims management workflow', 'Insurance cost benchmarking'],
    regulators: ['IA (UAE)', 'DHA', 'CCHI (KSA)', 'CBB Insurance'],
    fineRange: 'AED 500 - 10K daily',
  },
  {
    id: 'esg', name: 'Environmental & ESG', arabic: 'بيئة', icon: Leaf,
    color: 'text-green-400', bgColor: 'bg-green-500/10', borderColor: 'border-green-500/30',
    description: 'UAE Net Zero 2050, waste management, carbon reporting, sustainability disclosures, ESG scoring, green building compliance.',
    capabilities: ['Carbon footprint calculator', 'UAE Net Zero 2050 alignment', 'Waste management compliance', 'ESG reporting framework', 'Sustainability disclosure prep', 'Green building certifications', 'Supply chain sustainability', 'Energy consumption tracking'],
    regulators: ['MOCCAE', 'EAD (Abu Dhabi)', 'Dubai Municipality', 'SEC (listed)'],
    fineRange: 'AED 10K - 500K',
  },
  {
    id: 'consumer', name: 'Consumer & Advertising', arabic: 'حماية المستهلك', icon: Megaphone,
    color: 'text-violet-400', bgColor: 'bg-violet-500/10', borderColor: 'border-violet-500/30',
    description: 'Consumer protection law, product safety, refund policies, ad content standards, influencer disclosure, digital accessibility (WCAG).',
    capabilities: ['Consumer protection compliance', 'Product recall procedures', 'Refund & warranty policies', 'Ad content standards checker', 'Influencer disclosure rules', 'Anti-spam & telemarketing', 'Digital accessibility (WCAG 2.1)', 'Pricing transparency audits'],
    regulators: ['DET Consumer', 'TDRA', 'MoE', 'Ad Standards'],
    fineRange: 'AED 10K - 200K',
  },
  {
    id: 'trade', name: 'Trade & Customs', arabic: 'جمارك', icon: Package,
    color: 'text-indigo-400', bgColor: 'bg-indigo-500/10', borderColor: 'border-indigo-500/30',
    description: 'Customs clearance, certificate of origin, trade sanctions, Free Trade Agreements, HS codes, import/export licenses.',
    capabilities: ['Customs clearance management', 'Certificate of origin tracker', 'Trade sanctions screening', 'FTA (Free Trade Agreement) utilization', 'HS code classification', 'Import/export license management', 'Dual-use goods compliance', 'Country of origin rules'],
    regulators: ['Dubai Customs', 'Abu Dhabi Customs', 'ZATCA Customs (KSA)', 'WCO'],
    fineRange: 'AED 50K - 1M + seizure',
  },
  {
    id: 'ethics', name: 'Anti-Corruption & Ethics', arabic: 'نزاهة', icon: Scale,
    color: 'text-amber-400', bgColor: 'bg-amber-500/10', borderColor: 'border-amber-500/30',
    description: 'Anti-bribery (UAE Penal Code), whistleblower programs, gifts & hospitality policy, third-party due diligence, code of conduct.',
    capabilities: ['Anti-bribery policy management', 'Whistleblower portal & protection', 'Gifts & hospitality register', 'Third-party due diligence', 'Code of conduct distribution', 'Conflict of interest declarations', 'Political contributions tracking', 'Anti-facilitation payments'],
    regulators: ['UAE Public Prosecution', 'UNCAC', 'FATF', 'OECD'],
    fineRange: 'AED 500K + imprisonment',
  },
];

// ─── Industry Add-ons (Detailed) ────────────────────────────────
const industryAddons = [
  {
    name: 'F&B / Restaurant', icon: Store, color: 'text-orange-400', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-500/30',
    who: 'Wasil Food, BizOne F&B merchants, cloud kitchens',
    overview: 'Complete food safety and restaurant compliance covering municipality health permits, HACCP certification, food handler hygiene, cold chain monitoring, and kitchen safety inspections.',
    regulators: ['Dubai Municipality', 'Abu Dhabi QCC', 'SFDA (KSA)', 'MOH', 'Civil Defense'],
    keyRegs: [
      { reg: 'Municipality Health Permit', desc: 'Annual food establishment license — required for all F&B outlets', fine: 'AED 5K-50K + closure' },
      { reg: 'HACCP Certification', desc: 'Hazard Analysis & Critical Control Points — mandatory food safety system', fine: 'AED 10K-100K' },
      { reg: 'Food Handler Health Cards', desc: 'Annual medical fitness certificates for all food handlers', fine: 'AED 2K per worker' },
      { reg: 'Cold Chain Compliance', desc: 'Temperature monitoring for storage, transport, and display (2-8°C cold, -18°C frozen)', fine: 'AED 10K + product seizure' },
      { reg: 'Kitchen Fire Safety', desc: 'Fire suppression (Ansul), hood cleaning certification, civil defense NOC', fine: 'AED 10K-50K + closure' },
      { reg: 'Calorie Disclosure', desc: 'Menu calorie labeling — mandatory in UAE for dine-in restaurants', fine: 'AED 5K-20K' },
      { reg: 'Food Allergen Labeling', desc: '14 major allergens must be declared on menus and packaging', fine: 'AED 5K-50K' },
      { reg: 'Pest Control Records', desc: 'Monthly pest control certificates, bait station maps, fumigation logs', fine: 'AED 5K-10K' },
    ],
    capabilities: ['Municipality permit renewal alerts', 'HACCP plan builder & audit checklists', 'Food handler card expiry tracker', 'IoT cold chain temperature logging', 'Kitchen fire safety inspection scheduler', 'Calorie & allergen menu compliance', 'Pest control certificate manager', 'Surprise inspection readiness dashboard', 'Supplier food safety certifications', 'Waste disposal & grease trap logs'],
  },
  {
    name: 'Healthcare & Pharmacy', icon: Stethoscope, color: 'text-red-400', bgColor: 'bg-red-500/10', borderColor: 'border-red-500/30',
    who: 'Wasil Pharmacy, clinics, health merchants, medical suppliers',
    overview: 'End-to-end healthcare compliance covering facility licensing, practitioner credentials, medical device regulations, pharmacy controls, patient data privacy (NABIDH/Malaffi), and clinical waste management.',
    regulators: ['DHA (Dubai)', 'DOH (Abu Dhabi)', 'MOH (UAE)', 'SFDA (KSA)', 'NHRA (Bahrain)', 'MOHAP'],
    keyRegs: [
      { reg: 'Facility Licensing', desc: 'DHA/DOH/MOH facility license for clinics, pharmacies, labs — annual renewal', fine: 'AED 50K + closure' },
      { reg: 'Practitioner Licensing', desc: 'Professional license for doctors, nurses, pharmacists — credential verification', fine: 'AED 10K-100K' },
      { reg: 'Medical Device Registration', desc: 'Device registration with DHA/SFDA, UDI tracking, post-market surveillance', fine: 'AED 50K-500K' },
      { reg: 'Pharmacy Controls', desc: 'Controlled substance tracking, narcotics register, prescription validation', fine: 'AED 100K + criminal' },
      { reg: 'NABIDH/Malaffi Integration', desc: 'Patient health record sharing per Dubai/Abu Dhabi mandates', fine: 'AED 10K-50K' },
      { reg: 'Clinical Waste Management', desc: 'Biomedical waste segregation, authorized disposal contractors', fine: 'AED 10K-100K' },
      { reg: 'Insurance Authorization', desc: 'DHA/DOH insurance claims compliance, CPT coding, pre-auth rules', fine: 'Claim rejection' },
      { reg: 'Infection Control', desc: 'Sterilization logs, PPE compliance, outbreak reporting protocols', fine: 'AED 10K + closure' },
    ],
    capabilities: ['Facility license expiry dashboard', 'Practitioner credential verification', 'Medical device registration tracker', 'Controlled substance audit log', 'NABIDH/Malaffi data compliance', 'Clinical waste manifest tracking', 'Insurance claim compliance checks', 'Infection control checklists', 'CME/CPD hour tracking for staff', 'Patient consent management'],
  },
  {
    name: 'Transport & Fleet', icon: Car, color: 'text-cyan-400', bgColor: 'bg-cyan-500/10', borderColor: 'border-cyan-500/30',
    who: 'Rakab, Wasil drivers, delivery fleet, ride-hailing',
    overview: 'Fleet and transport compliance including vehicle registration, driver licensing, RTA/road safety, GPS tracking mandates, dangerous goods transport, and vehicle insurance management.',
    regulators: ['RTA (Dubai)', 'ITC (Abu Dhabi)', 'SRTA (Sharjah)', 'TGA (KSA)', 'GDT', 'Emirates Authority'],
    keyRegs: [
      { reg: 'Vehicle Registration & Mulkiya', desc: 'Annual registration renewal, insurance validity, testing certificates', fine: 'AED 500-5K per vehicle' },
      { reg: 'Driver License Compliance', desc: 'Valid professional driver license, medical fitness, points tracking', fine: 'AED 3K-10K' },
      { reg: 'RTA Operator License', desc: 'Transport activity permit for fleet operations (taxi, limousine, ride-hail)', fine: 'AED 10K-100K' },
      { reg: 'GPS Tracking Mandate', desc: 'Real-time GPS for all commercial vehicles — RTA/TGA requirement', fine: 'AED 1K-10K per vehicle' },
      { reg: 'Vehicle Safety Inspection', desc: 'Annual/bi-annual vehicle testing, emission compliance, brake testing', fine: 'AED 500-5K + impound' },
      { reg: 'Dangerous Goods Transport', desc: 'ADR compliance, hazmat placarding, driver training, emergency procedures', fine: 'AED 50K-500K' },
      { reg: 'Fleet Insurance', desc: 'Comprehensive insurance per vehicle, third-party liability minimum', fine: 'AED 500 daily per vehicle' },
      { reg: 'Tachograph & Hours', desc: 'Maximum driving hours, mandatory rest periods, digital tachograph logging', fine: 'AED 3K-10K per violation' },
    ],
    capabilities: ['Vehicle registration renewal alerts', 'Driver license & medical expiry tracker', 'RTA operator license management', 'GPS tracking compliance dashboard', 'Vehicle inspection scheduler', 'Dangerous goods checklist builder', 'Fleet insurance policy tracker', 'Driving hours & rest compliance', 'Fuel subsidy compliance (if applicable)', 'Salik/toll compliance reporting'],
  },
  {
    name: 'Real Estate & Property', icon: Home, color: 'text-blue-400', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30',
    who: 'Sakin, Ajer, property managers, developers, brokers',
    overview: 'Real estate compliance covering broker/agent licensing (RERA), Ejari tenancy contracts, escrow requirements, building safety codes, Tawtheeq, and strata management regulations.',
    regulators: ['RERA (Dubai)', 'RERA (Abu Dhabi)', 'DLD', 'ADDA', 'Municipalities', 'MOHRE'],
    keyRegs: [
      { reg: 'Broker/Agent Licensing', desc: 'RERA-registered broker/agent card, annual renewal, CPD hours', fine: 'AED 50K-1M + ban' },
      { reg: 'Ejari Registration', desc: 'All tenancy contracts must be registered in Ejari (Dubai) within 14 days', fine: 'AED 5K per contract' },
      { reg: 'Tawtheeq (Abu Dhabi)', desc: 'Abu Dhabi tenancy registration system — mandatory for all rental agreements', fine: 'AED 5K-10K' },
      { reg: 'Escrow Account', desc: 'Off-plan sales escrow (Law 8/2007 Dubai), separate account per project', fine: 'AED 1M + criminal' },
      { reg: 'Building Safety Code', desc: 'Fire safety, structural integrity, elevator maintenance, civil defense NOC', fine: 'AED 10K-500K + closure' },
      { reg: 'Strata/Owners Association', desc: 'OA formation, common area management, sinking fund — RERA mandated', fine: 'AED 10K-100K' },
      { reg: 'AML for Real Estate', desc: 'Real estate agent AML registration, client due diligence, STR filing', fine: 'AED 50K-500K' },
      { reg: 'Service Charge Compliance', desc: 'RERA-approved service charge budget, audit, owner notification', fine: 'AED 10K-50K' },
    ],
    capabilities: ['Broker/agent license renewal alerts', 'Ejari/Tawtheeq registration tracker', 'Escrow account compliance monitor', 'Building safety inspection scheduler', 'Strata management compliance', 'Real estate AML program', 'Service charge audit preparation', 'Tenant dispute documentation', 'Property handover checklists', 'Developer project compliance dashboard'],
  },
  {
    name: 'Tourism, Hospitality & Events', icon: Globe, color: 'text-violet-400', bgColor: 'bg-violet-500/10', borderColor: 'border-violet-500/30',
    who: 'Safar, Eventora, Fakhir, hotels, tour operators, event organizers',
    overview: 'Tourism and event compliance including DTCM licensing, hotel classification, event permits, crowd management, alcohol licensing, travel agent bonding, and tourist safety regulations.',
    regulators: ['DTCM (Dubai)', 'DCT (Abu Dhabi)', 'SCT (KSA)', 'MoT', 'Dubai Police', 'Civil Defense'],
    keyRegs: [
      { reg: 'Tourism Operator License', desc: 'DTCM/DCT tourism license for hotels, tour operators, travel agents', fine: 'AED 10K-100K + closure' },
      { reg: 'Hotel Classification', desc: 'Star rating compliance, periodic inspection, service standards', fine: 'AED 10K-50K + downgrade' },
      { reg: 'Event Permit', desc: 'Multi-authority event permit (DTCM, police, civil defense, municipality)', fine: 'AED 50K + event cancellation' },
      { reg: 'Crowd Management Plan', desc: 'Capacity limits, emergency exits, medical stations, security ratio', fine: 'AED 50K-500K' },
      { reg: 'Alcohol License', desc: 'Venue alcohol license, server training, age verification, Ramadan rules', fine: 'AED 50K-500K + criminal' },
      { reg: 'Tourism Dirham Fee', desc: 'Per-night room fee collection and remittance to DTCM', fine: 'AED 5K-50K' },
      { reg: 'Travel Agent Bond', desc: 'Financial guarantee/bond for travel agents — DTCM/IATA requirement', fine: 'License revocation' },
      { reg: 'Tourist Safety Standards', desc: 'Activity safety (desert safari, water sports), insurance, guide certification', fine: 'AED 10K-100K + closure' },
    ],
    capabilities: ['Tourism license renewal dashboard', 'Hotel star-rating compliance tracker', 'Multi-authority event permit workflow', 'Crowd management plan builder', 'Alcohol license & Ramadan compliance', 'Tourism Dirham fee reconciliation', 'Travel agent bond expiry alerts', 'Activity safety certification tracker', 'Guest complaint & incident logging', 'DMC/supplier compliance verification'],
  },
  {
    name: 'Education & Training', icon: GraduationCap, color: 'text-emerald-400', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/30',
    who: 'Merchant Academy, training centers, schools, e-learning platforms',
    overview: 'Education compliance covering school licensing (KHDA/ADEK), teacher credentials, curriculum approval, student data protection, training center permits, and child safeguarding policies.',
    regulators: ['KHDA (Dubai)', 'ADEK (Abu Dhabi)', 'MOE', 'QQA (Bahrain)', 'ETEC (KSA)', 'ACTVET'],
    keyRegs: [
      { reg: 'School/Institute License', desc: 'KHDA/ADEK/MOE school license or training institute permit — annual renewal', fine: 'AED 50K-500K + closure' },
      { reg: 'Teacher Licensing', desc: 'Teacher certification, background checks, qualification equivalency', fine: 'AED 10K per teacher' },
      { reg: 'Curriculum Approval', desc: 'KHDA/MOE curriculum framework compliance, textbook approval', fine: 'AED 10K-50K' },
      { reg: 'Student Data Protection', desc: 'Student records privacy, parental consent, data transfer restrictions', fine: 'AED 50K-500K' },
      { reg: 'Child Safeguarding', desc: 'Wadeema Law (UAE) child protection, mandatory reporting, staff vetting', fine: 'AED 10K-500K + criminal' },
      { reg: 'Building & Fire Safety', desc: 'School building codes, fire drills, playground safety, civil defense NOC', fine: 'AED 10K-100K + closure' },
      { reg: 'Accreditation', desc: 'International accreditation (IB, CBSE, British), quality assurance audits', fine: 'Accreditation loss' },
      { reg: 'E-Learning Compliance', desc: 'KHDA virtual school license, content standards, assessment integrity', fine: 'AED 10K-50K' },
    ],
    capabilities: ['School/institute license renewal alerts', 'Teacher credential verification & expiry', 'Curriculum compliance checklists', 'Student data privacy compliance', 'Child safeguarding policy manager', 'Fire drill & building safety scheduler', 'Accreditation readiness dashboard', 'E-learning compliance tracker', 'Parent consent management system', 'Student-teacher ratio compliance'],
  },
  {
    name: 'Logistics & Warehousing', icon: Truck, color: 'text-indigo-400', bgColor: 'bg-indigo-500/10', borderColor: 'border-indigo-500/30',
    who: 'Inventora, Wasil, warehouse operators, 3PL providers',
    overview: 'Logistics and warehouse compliance covering warehouse safety, dangerous goods storage, customs bonding, import/export licensing, cold storage regulations, and free zone-specific requirements.',
    regulators: ['Dubai Customs', 'Abu Dhabi Customs', 'ZATCA (KSA)', 'Civil Defense', 'Municipalities', 'FIRS'],
    keyRegs: [
      { reg: 'Warehouse Safety Standards', desc: 'Fire suppression, rack load limits, aisle widths, emergency exits, ventilation', fine: 'AED 10K-100K + closure' },
      { reg: 'Dangerous Goods Storage', desc: 'HAZMAT classification, segregation rules, MSDS records, spill containment', fine: 'AED 50K-500K' },
      { reg: 'Customs Bonded Warehouse', desc: 'Bonded zone compliance, inventory reconciliation, duty deferral tracking', fine: 'AED 50K-1M + bond loss' },
      { reg: 'Import/Export License', desc: 'Importer/exporter code, restricted goods permits, certificate of origin', fine: 'AED 10K-100K + seizure' },
      { reg: 'Cold Storage Regulations', desc: 'Pharmaceutical/food cold storage (2-8°C / -20°C), temperature logs', fine: 'AED 10K-50K + product seizure' },
      { reg: 'Free Zone Compliance', desc: 'JAFZA/KIZAD/DAFZA specific rules, inventory reporting, re-export docs', fine: 'AED 5K-50K + zone penalties' },
      { reg: 'Worker Safety (HSE)', desc: 'PPE requirements, forklift training, loading bay safety, heat stress', fine: 'AED 5K-50K per violation' },
      { reg: 'E-Commerce Fulfillment', desc: 'Consumer product safety, returns handling, packaging waste regulations', fine: 'AED 5K-50K' },
    ],
    capabilities: ['Warehouse safety inspection scheduler', 'Dangerous goods inventory compliance', 'Customs bonded zone reconciliation', 'Import/export license tracker', 'Cold chain temperature monitoring', 'Free zone reporting automation', 'Worker safety training tracker', 'E-commerce fulfillment compliance', 'Supplier compliance documentation', 'Inventory audit trail for customs'],
  },
  {
    name: 'Financial Services & Fintech', icon: CreditCard, color: 'text-emerald-400', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/30',
    who: 'NuqtaPay, Qist, Hawil, payment processors, lending, insurance',
    overview: 'Comprehensive fintech and financial services compliance covering CBUAE/SAMA licensing, PCI-DSS, AML programs, consumer lending regulations, payment card scheme rules, and open banking standards.',
    regulators: ['CBUAE', 'SAMA', 'DFSA (DIFC)', 'FSRA (ADGM)', 'CBB', 'PCI SSC', 'Visa/MC'],
    keyRegs: [
      { reg: 'RPSP / SVF License', desc: 'Retail Payment Service Provider or Stored Value Facility license — CBUAE', fine: 'AED 500K-10M + revocation' },
      { reg: 'PCI-DSS Level 1', desc: 'Payment Card Industry Data Security Standard — annual QSA audit, quarterly ASV scan', fine: 'Card scheme penalties + $100K/mo' },
      { reg: 'AML/CFT Program', desc: 'Full AML program: CDD/EDD, transaction monitoring, STR filing, sanctions', fine: 'AED 1M-50M + personal liability' },
      { reg: 'Consumer Lending Rules', desc: 'APR disclosure, cooling-off period, total cost of credit, debt-to-income', fine: 'AED 50K-500K + license conditions' },
      { reg: 'Card Scheme Compliance', desc: 'Visa/Mastercard operating regulations, dispute resolution, settlement timelines', fine: 'Scheme fines + de-registration' },
      { reg: 'Open Banking', desc: 'CBUAE Open Finance framework, API standards, consent management, TPP regulation', fine: 'AED 50K-500K' },
      { reg: 'Capital Adequacy', desc: 'Minimum capital requirements, liquidity ratios, reserve fund per CBUAE/SAMA', fine: 'License conditions + revocation' },
      { reg: 'Outsourcing & Cloud Policy', desc: 'CBUAE cloud guidance, material outsourcing notification, data localization', fine: 'AED 50K-1M' },
    ],
    capabilities: ['RPSP/SVF license compliance dashboard', 'PCI-DSS continuous compliance tracker', 'AML transaction monitoring rules', 'Consumer lending compliance checks', 'Card scheme operating reg tracker', 'Open banking API compliance', 'Capital adequacy reporting', 'Cloud & outsourcing compliance', 'DFSA/FSRA regulatory filing', 'Payment scheme quarterly reports'],
  },
];

// ─── GCC Coverage ────────────────────────────────────────
const gccCountries = [
  { country: 'UAE', flag: '🇦🇪', regulators: 15, bodies: ['CBUAE', 'FTA', 'DET', 'TDRA', 'MOHRE', 'NESA', 'UAE Data Office', 'Civil Defense', 'MOCCAE'], status: 'Full', color: 'text-emerald-400' },
  { country: 'Saudi Arabia', flag: '🇸🇦', regulators: 12, bodies: ['SAMA', 'ZATCA', 'NCA', 'NDMO', 'GOSI', 'MoL', 'SFDA', 'CMA'], status: 'Full', color: 'text-emerald-400' },
  { country: 'Bahrain', flag: '🇧🇭', regulators: 8, bodies: ['CBB', 'NBR', 'SIO', 'PDPA', 'LMRA'], status: 'Full', color: 'text-emerald-400' },
  { country: 'Qatar', flag: '🇶🇦', regulators: 7, bodies: ['QCB', 'GTA', 'CRA', 'NCSA', 'MoL'], status: 'Planned', color: 'text-amber-400' },
  { country: 'Oman', flag: '🇴🇲', regulators: 6, bodies: ['CBO', 'Tax Authority', 'ITA', 'ROP'], status: 'Planned', color: 'text-amber-400' },
  { country: 'Kuwait', flag: '🇰🇼', regulators: 6, bodies: ['CBK', 'MoF', 'CITRA', 'PAM'], status: 'Planned', color: 'text-amber-400' },
];

// ─── Pricing ────────────────────────────────────────
const pricingTiers = [
  {
    tier: 'Starter', price: 'AED 199', period: '/month', target: 'Solopreneurs & SMEs',
    color: 'border-slate-500', bgColor: 'bg-slate-800/30',
    features: ['Tax & VAT (1 entity)', 'License & renewal tracker', 'Deadline alerts & calendar', '5 GB document vault', 'Email support'],
    popular: false,
  },
  {
    tier: 'Business', price: 'AED 799', period: '/month', target: 'Growing Companies',
    color: 'border-teal-500', bgColor: 'bg-teal-500/10',
    features: ['All Starter features', 'AML/KYC/KYB compliance', 'Data privacy (PDPL/GDPR)', 'Labor, HSE & fire safety', 'Insurance tracker', 'Multi-entity (up to 5)', '50 GB vault + reports', 'Priority support'],
    popular: true,
  },
  {
    tier: 'Enterprise', price: 'AED 2,999', period: '/month', target: 'Groups & Corporates',
    color: 'border-purple-500', bgColor: 'bg-purple-500/10',
    features: ['All 12 compliance pillars', 'IT/Cyber (SOC2, PCI-DSS)', 'Shariah + ESG compliance', 'Anti-corruption & ethics', 'Trade & customs', 'Industry add-ons', 'Unlimited entities + API', 'Dedicated compliance advisor'],
    popular: false,
  },
  {
    tier: 'RTMN Internal', price: 'Custom', period: '', target: '10 RTMN Companies',
    color: 'border-[#c9a227]', bgColor: 'bg-[#c9a227]/10',
    features: ['Full platform + all add-ons', 'Rabtul Core integrations', 'Cross-company dashboard', 'Shared policy library', 'Shariah board portal', 'Group governance view', 'Real-time regulatory feeds', 'Dedicated team'],
    popular: false,
  },
];

// ─── Competitors ────────────────────────────────────────
const competitors = [
  { name: 'Amana', gcc: '✅ 30+', arabic: '✅ Native', aml: '✅', tax: '✅', shariah: '✅', soc2: '✅', labor: '✅', esg: '✅', fire: '✅', customs: '✅', data: '✅ Bahrain', price: 'AED 199/mo' },
  { name: 'Vanta', gcc: '❌', arabic: '❌', aml: '❌', tax: '❌', shariah: '❌', soc2: '✅', labor: '❌', esg: '❌', fire: '❌', customs: '❌', data: '❌ US', price: '$5K/yr' },
  { name: 'Drata', gcc: '❌', arabic: '❌', aml: '❌', tax: '❌', shariah: '❌', soc2: '✅', labor: '❌', esg: '❌', fire: '❌', customs: '❌', data: '❌ US', price: '$3K/yr' },
  { name: 'Sprinto', gcc: '❌', arabic: '❌', aml: '❌', tax: '❌', shariah: '❌', soc2: '✅', labor: '❌', esg: '❌', fire: '❌', customs: '❌', data: '❌ US', price: '$3K/yr' },
  { name: 'Consultants', gcc: '⚠️', arabic: '⚠️', aml: '✅', tax: '✅', shariah: '⚠️', soc2: '✅', labor: '✅', esg: '⚠️', fire: '✅', customs: '✅', data: '✅', price: 'AED 10K+/mo' },
];

// ─── RTMN Internal Use ────────────────────────────────────────
const rtmnCompanies = [
  { name: 'Nuqta Corporation', needs: 'PDPL, Consumer Protection, SVF License, VAT', icon: Crown, color: 'text-[#c9a227]' },
  { name: 'RTMN Finance', needs: 'CBUAE/SAMA, AML/CFT, PCI-DSS, Shariah', icon: DollarSign, color: 'text-emerald-400' },
  { name: 'BizOne', needs: 'Trade License, POS, Merchant KYB, VAT', icon: Store, color: 'text-blue-400' },
  { name: 'Wasil Apps', needs: 'Delivery, F&B Health, Labor, Fleet, MOHRE', icon: Package, color: 'text-orange-400' },
  { name: 'Travel Co', needs: 'DTCM, RTA, IATA, Tourism License, Safety', icon: Globe, color: 'text-cyan-400' },
  { name: 'Inventora', needs: 'Warehouse Safety, Import/Export, Customs', icon: Database, color: 'text-purple-400' },
  { name: 'NextaBizz', needs: 'B2B Marketplace, Trade, Anti-Competition', icon: Briefcase, color: 'text-pink-400' },
  { name: 'Adzy', needs: 'Ad Standards, TDRA, Consumer Protection', icon: Eye, color: 'text-red-400' },
  { name: 'Eventora', needs: 'Event Permits, Civil Defense, DTCM', icon: Star, color: 'text-violet-400' },
  { name: 'Rabtul', needs: 'SOC2, ISO 27001, NESA, PCI-DSS', icon: Server, color: 'text-indigo-400' },
];

// ─── Financial Projections ────────────────────────────────────
const financialProjections = [
  { year: 'Year 1', customers: '500-1K', revenue: 2.5, market: 'UAE + RTMN internal', merchants: 0 },
  { year: 'Year 2', customers: '2K-5K', revenue: 12, market: 'UAE + KSA + Bahrain', merchants: 200 },
  { year: 'Year 3', customers: '10K+', revenue: 40, market: 'Full GCC + Enterprise', merchants: 1000 },
];

// ─── Roadmap ────────────────────────────────────────
const roadmapPhases = [
  { phase: 'Phase 1', title: 'Foundation', timeline: 'Q3 2026', color: 'border-teal-500', bgColor: 'bg-teal-500/10',
    milestones: ['Build core platform (Tax, Licensing, Calendar)', 'Internal deployment for 10 RTMN companies', 'UAE regulatory database (15 bodies)', 'Document vault + audit trail', 'Arabic + English UI', 'AI regulatory monitor MVP'] },
  { phase: 'Phase 2', title: 'Full Compliance', timeline: 'Q4 2026', color: 'border-blue-500', bgColor: 'bg-blue-500/10',
    milestones: ['Launch all 12 core pillars', 'AML/KYC module + goAML integration', 'Fire Safety & Civil Defense module', 'Insurance tracker + ESG basics', 'Public SaaS launch (Starter + Business)', 'Onboard 500 external customers'] },
  { phase: 'Phase 3', title: 'GCC Expansion', timeline: 'Q1-Q2 2027', color: 'border-purple-500', bgColor: 'bg-purple-500/10',
    milestones: ['Add KSA regulators (SAMA, ZATCA, NCA)', 'Add Bahrain regulators (CBB, NBR)', 'Industry add-ons (F&B, Healthcare, Fleet)', 'Enterprise tier + API access', 'Government portal integrations', 'Reach 2,000 customers'] },
  { phase: 'Phase 4', title: 'Market Leadership', timeline: 'H2 2027-2028', color: 'border-[#c9a227]', bgColor: 'bg-[#c9a227]/10',
    milestones: ['Full 6-country GCC coverage', 'All 8 industry add-ons', 'AI-powered compliance advisor', 'Marketplace for compliance consultants', 'White-label for large enterprises', 'Target 10,000+ customers, AED 40M+ revenue'] },
];

// ─── Risks ────────────────────────────────────────
const risks = [
  { risk: 'Regulatory changes outpace platform updates', severity: 'high',
    mitigation: ['AI monitors 30+ regulatory websites daily', 'Dedicated legal team for each jurisdiction', 'Community-reported changes', 'Quarterly compliance audits'] },
  { risk: 'Low adoption — businesses prefer consultants', severity: 'high',
    mitigation: ['Free tier for basic compliance', 'RTMN 10 companies as proof-of-concept', 'Partner with law firms (reseller model)', 'ROI calculator showing cost savings'] },
  { risk: 'Data breach of sensitive compliance data', severity: 'critical',
    mitigation: ['SOC2 + PCI-DSS certified platform', 'AES-256 encryption, field-level for KYC', 'GCC data residency (AWS Bahrain)', 'Annual penetration testing'] },
  { risk: 'Competition from global players entering GCC', severity: 'medium',
    mitigation: ['Deep GCC regulatory knowledge moat', 'Arabic-native advantage', 'Shariah + local compliance (unique)', 'BizOne merchant distribution channel'] },
];

// ─── Platform Features ────────────────────────────────────────
const platformFeatures = [
  { icon: Brain, title: 'AI Regulatory Monitor', desc: 'AI scans 30+ government websites daily for new laws, amendments, and circulars affecting your business.' },
  { icon: Clock, title: 'Compliance Calendar', desc: 'Unified calendar with all deadlines, renewals, audits. Auto-alerts at 30/15/7 days before due.' },
  { icon: HardDrive, title: 'Document Vault', desc: 'Encrypted, tamper-proof storage for licenses, contracts, policies. Full version history.' },
  { icon: Activity, title: 'Risk Scoring Engine', desc: 'Real-time compliance risk score across all 12 pillars. Color-coded dashboard with remediation steps.' },
  { icon: Search, title: 'Audit Trail', desc: '100% immutable audit trail. Who, what, when. Export-ready for any regulator.' },
  { icon: BookOpen, title: 'Policy Library', desc: '200+ GCC compliance policy templates. Customize, version, distribute, track acknowledgments.' },
  { icon: Zap, title: 'Workflow Automation', desc: 'Automated workflows: KYC → risk score → approval → monitoring. 80% less manual work.' },
  { icon: Globe, title: 'Arabic + English', desc: 'Full bilingual support. RTL-native interface. Bilingual reports and regulatory references.' },
  { icon: GitBranch, title: 'Integration Hub', desc: 'Connect to Xero, QuickBooks, SAP, BambooHR, and government portals (goAML, FTA, MOHRE).' },
  { icon: UserCheck, title: 'Role-Based Access', desc: 'Compliance Officer, Legal, Finance, HR, IT — each sees only what they need. Full RBAC.' },
  { icon: BarChart3, title: 'Live Dashboards', desc: 'Compliance health score across all entities, jurisdictions, and pillars. Group-level to finding-level.' },
  { icon: Building2, title: 'Regulator Portal', desc: 'Direct integration with government filing portals. Submit, track status, receive approvals.' },
];

// ─── Corporate Structure ────────────────────────────────────
const corporateStructure = {
  parentCompany: 'BizOne Technology',
  entity: 'Amana Compliance Solutions',
  ownership: '100% owned by BizOne (RTMN Group)',
  type: 'B2B SaaS — Compliance Operating System',
  regulator: 'Self-regulated (SaaS) — serves regulated clients',
};

// ─── Expandable Helper ────────────────────────────────────────
function Expandable({ title, children, defaultOpen = false }: {
  title: string; children: React.ReactNode; defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-slate-700/50 rounded-xl overflow-hidden mb-4">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 bg-slate-800/50 hover:bg-slate-800/80 transition-colors text-left">
        <span className="font-semibold text-white">{title}</span>
        {open ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
      </button>
      {open && <div className="px-5 py-4 bg-slate-900/30">{children}</div>}
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// MAIN PAGE
// ════════════════════════════════════════════════════════════════════
export default function AmanaPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [activePillar, setActivePillar] = useState<string | null>(null);
  const [expandedRisk, setExpandedRisk] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Shield },
    { id: 'pillars', label: '12 Pillars', icon: Layers },
    { id: 'industry', label: 'Industry Add-ons', icon: Briefcase },
    { id: 'gcc', label: 'GCC Coverage', icon: Globe },
    { id: 'platform', label: 'Platform', icon: Monitor },
    { id: 'pricing', label: 'Pricing', icon: DollarSign },
    { id: 'rtmn', label: 'RTMN Internal', icon: Network },
    { id: 'financials', label: 'Financials', icon: BarChart3 },
    { id: 'roadmap', label: 'Roadmap', icon: Rocket },
    { id: 'competition', label: 'Competition', icon: Users },
    { id: 'risks', label: 'Risks', icon: AlertTriangle },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0a1628] via-[#1a2d4a] to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Link href="/bizone" className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 mb-4 text-sm">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to BizOne
          </Link>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-teal-500/20">
                  <Shield className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-5xl font-black text-white">
                    Amana <span className="text-teal-400">أمانة</span>
                  </h1>
                  <p className="text-teal-400 text-sm sm:text-lg font-medium">Compliance, Simplified.</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mb-4">
                The unified <span className="text-teal-400 font-medium">compliance operating system</span> for GCC businesses.
                12 compliance pillars, 30+ regulators, 6 countries — all in <span className="text-[#c9a227] font-medium">one platform</span>.
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#c9a227]/20 border border-[#c9a227]/50 rounded-full">
                <HeartHandshake className="w-4 h-4 text-[#c9a227]" />
                <span className="text-[#c9a227] text-xs sm:text-sm font-medium">A BizOne Technology Product</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {keyStats.map((stat, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-3 sm:p-4 border border-slate-700/50 text-center min-w-[120px]">
                  <div className={`text-xl sm:text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">{stat.suffix}</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Value Banner */}
          <div className="mt-8 bg-gradient-to-r from-teal-500/20 to-emerald-500/10 rounded-xl p-4 sm:p-6 border border-teal-500/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-teal-400" />
                  <span className="text-lg font-bold text-white">The Core Promise</span>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-white">
                  <span className="text-teal-400">Never miss a deadline.</span> Never face a <span className="text-red-400">preventable fine.</span>
                </p>
              </div>
              <div className="flex gap-3">
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-teal-400">12</div>
                  <div className="text-xs text-slate-400">Pillars</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-[#c9a227]">30+</div>
                  <div className="text-xs text-slate-400">Regulators</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-[#0a1628]/95 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-2 gap-1 sm:gap-2 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-teal-500 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <tab.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Executive Summary */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-teal-400" /> Executive Summary
              </h2>
              <p className="text-slate-300">
                <strong className="text-white">Amana</strong> (أمانة — &quot;trust&quot; in Arabic) is a unified compliance operating system built for GCC businesses.
                It covers <strong className="text-teal-400">12 core compliance pillars</strong> — from AML/CFT and tax to fire safety, ESG, and Shariah — plus
                <strong className="text-amber-400"> 8 industry-specific add-ons</strong>. Born from <strong className="text-[#c9a227]">RTMN&apos;s</strong> need to
                manage compliance across 10 sister companies and 6 GCC countries, Amana is now available as SaaS for every business in the region.
              </p>
            </div>

            {/* How It Works */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">How It Works</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {[
                  { step: 1, icon: Building2, title: 'Setup', desc: 'Add your entities, jurisdictions, and sectors' },
                  { step: 2, icon: Search, title: 'Scan', desc: 'Amana scans for all applicable regulations' },
                  { step: 3, icon: Activity, title: 'Score', desc: 'Risk scoring across all 12 pillars' },
                  { step: 4, icon: Bell, title: 'Alert', desc: 'Auto-alerts for deadlines & changes' },
                  { step: 5, icon: CheckCircle, title: 'Comply', desc: 'File, track, and prove compliance' },
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50 text-center">
                      <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center mx-auto mb-3">
                        <item.icon className="w-5 h-5 text-teal-400" />
                      </div>
                      <div className="text-xs text-teal-400 mb-1">Step {item.step}</div>
                      <div className="text-sm font-bold text-white">{item.title}</div>
                      <div className="text-xs text-slate-400 mt-1">{item.desc}</div>
                    </div>
                    {i < 4 && <ChevronRight className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-600" size={20} />}
                  </div>
                ))}
              </div>
            </div>

            {/* Corporate Structure */}
            <div className="bg-gradient-to-r from-teal-500/10 to-emerald-500/5 rounded-xl p-6 border border-teal-500/30">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-teal-400" /> Corporate Structure
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  {[
                    ['Parent Company', corporateStructure.parentCompany],
                    ['Entity Name', corporateStructure.entity],
                    ['Ownership', corporateStructure.ownership],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-400">{label}</span>
                      <span className="text-white font-medium">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {[
                    ['Product Type', corporateStructure.type],
                    ['Regulation', corporateStructure.regulator],
                    ['Integration', 'Rabtul Core + BizOne'],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-400">{label}</span>
                      <span className="text-white font-medium text-right text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Before vs After */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  <h3 className="text-lg font-bold text-white">Before Amana</h3>
                </div>
                <ul className="space-y-2">
                  {['Compliance in spreadsheets & emails', 'Missed deadlines = fines (AED 50K-500M)', 'Manual tracking of 30+ regulators', 'No fire safety / civil defense tracking', 'No ESG or anti-corruption programs', 'AED 10K+/mo on external consultants'].map((item, i) => (
                    <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-lg font-bold text-white">With Amana</h3>
                </div>
                <ul className="space-y-2">
                  {['Single dashboard for all 12 pillars', 'Auto-alerts 30/15/7 days before deadlines', 'AI monitors all regulatory changes daily', 'Fire safety + civil defense + ESG built-in', 'Anti-corruption & whistleblower portal', '80% cost savings, 90% faster audits'].map((item, i) => (
                    <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Architecture */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">System Architecture</h3>
              <pre className="text-xs sm:text-sm text-slate-300 overflow-x-auto whitespace-pre font-mono bg-slate-950 rounded-lg p-4 border border-slate-700/50">{`┌─────────────────────────────────────────────┐
│              AMANA (أمانة)                   │
│  12 Core Pillars + 8 Industry Add-ons       │
│  Tax│AML│Data│License│IT│Labor│Shariah│      │
│  Insurance│ESG│Consumer│Trade│Ethics         │
└──────┬──────────────┬───────────────────────┘
       │              │
  ┌────▼────┐   ┌────▼──────┐
  │ Internal│   │ External  │
  │ (RTMN)  │   │ (SaaS)    │
  ├─────────┤   ├───────────┤
  │ BizOne  │   │ SMEs      │
  │ Finance │   │ Startups  │
  │ HQ Admin│   │ Enterprise│
  │ All 10  │   │ Law Firms │
  └────┬────┘   └─────┬─────┘
       │              │
  ┌────▼──────────────▼────┐
  │     Rabtul Core        │
  │ Identity│Events│Audit  │
  │ Fraud│AIRA│Gateway     │
  └────────────────────────┘
       │
  ┌────▼──────────────────┐
  │   Government Portals  │
  │ goAML│FTA│ZATCA│MOHRE │
  │ DET│TDRA│Civil Defense│
  └───────────────────────┘`}</pre>
            </div>
          </div>
        )}

        {/* 12 Pillars Tab */}
        {activeTab === 'pillars' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-teal-500/10 to-emerald-500/5 rounded-xl p-6 border border-teal-500/30">
              <h2 className="text-xl font-bold text-white mb-2">12 Core Compliance Pillars</h2>
              <p className="text-slate-400">Every type of compliance your business faces — unified in one platform. Click any pillar to see full capabilities.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {compliancePillars.map((pillar) => {
                const Icon = pillar.icon;
                const isActive = activePillar === pillar.id;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillar(isActive ? null : pillar.id)}
                    className={`text-left rounded-xl border p-5 transition-all ${
                      isActive ? `${pillar.bgColor} ${pillar.borderColor} ring-1 ring-current` : 'bg-slate-800/30 border-slate-700/50 hover:border-slate-600/50'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-xl ${pillar.bgColor} ${pillar.borderColor} border flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${pillar.color}`} />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-sm">{pillar.name}</h3>
                        <span className="text-xs text-slate-500">{pillar.arabic}</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 mb-3 line-clamp-2">{pillar.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {pillar.regulators.slice(0, 2).map((r) => (
                          <span key={r} className="text-xs px-2 py-0.5 bg-slate-700/50 rounded-full text-slate-300">{r}</span>
                        ))}
                        {pillar.regulators.length > 2 && (
                          <span className="text-xs px-2 py-0.5 bg-slate-700/50 rounded-full text-slate-400">+{pillar.regulators.length - 2}</span>
                        )}
                      </div>
                      <span className="text-xs text-red-400">{pillar.fineRange}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {activePillar && (() => {
              const pillar = compliancePillars.find(p => p.id === activePillar);
              if (!pillar) return null;
              const Icon = pillar.icon;
              return (
                <div className={`rounded-xl border ${pillar.borderColor} ${pillar.bgColor} p-6`}>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className={`w-6 h-6 ${pillar.color}`} />
                    <h3 className="text-xl font-bold text-white">{pillar.name}</h3>
                    <span className="text-xs px-3 py-1 bg-red-500/20 text-red-400 rounded-full">Fine risk: {pillar.fineRange}</span>
                  </div>
                  <p className="text-slate-300 mb-4">{pillar.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                    {pillar.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className={`w-4 h-4 ${pillar.color} shrink-0 mt-0.5`} />
                        <span className="text-sm text-slate-300">{cap}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-slate-700/50 pt-3">
                    <span className="text-xs text-slate-400 font-semibold">Regulators: </span>
                    {pillar.regulators.map((r) => (
                      <span key={r} className="text-xs px-2 py-0.5 bg-slate-700/50 rounded-full text-slate-300 mr-1">{r}</span>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Industry Add-ons Tab */}
        {activeTab === 'industry' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/5 rounded-xl p-6 border border-amber-500/30">
              <h2 className="text-xl font-bold text-white mb-2">8 Industry-Specific Compliance Add-ons</h2>
              <p className="text-slate-400">Sector-specific compliance modules that extend the 12 core pillars. Each add-on includes regulations, capabilities, and regulator coverage for that industry. Available on Enterprise and RTMN Internal tiers.</p>
            </div>

            {/* Industry Grid Overview */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {industryAddons.map((addon) => {
                const Icon = addon.icon;
                return (
                  <button
                    key={addon.name}
                    onClick={() => {
                      const el = document.getElementById(`industry-${addon.name.replace(/[^a-zA-Z]/g, '')}`);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className={`${addon.bgColor} border ${addon.borderColor} rounded-xl p-4 text-center hover:ring-1 hover:ring-current transition-all`}
                  >
                    <Icon className={`w-6 h-6 ${addon.color} mx-auto mb-2`} />
                    <div className="text-white font-bold text-xs sm:text-sm">{addon.name}</div>
                    <div className="text-xs text-slate-400 mt-1">{addon.keyRegs.length} regulations</div>
                  </button>
                );
              })}
            </div>

            {/* Detailed Industry Sections */}
            {industryAddons.map((addon) => {
              const Icon = addon.icon;
              return (
                <div key={addon.name} id={`industry-${addon.name.replace(/[^a-zA-Z]/g, '')}`} className={`rounded-xl border-2 ${addon.borderColor} ${addon.bgColor} overflow-hidden`}>
                  {/* Industry Header */}
                  <div className="p-6 border-b border-slate-700/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 rounded-xl ${addon.bgColor} border ${addon.borderColor} flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${addon.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{addon.name}</h3>
                        <div className="text-xs text-slate-400 mt-0.5">Used by: <span className="text-slate-300">{addon.who}</span></div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-300">{addon.overview}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {addon.regulators.map((r) => (
                        <span key={r} className="text-xs px-2.5 py-1 bg-slate-700/50 rounded-full text-slate-300">{r}</span>
                      ))}
                    </div>
                  </div>

                  {/* Key Regulations Table */}
                  <div className="p-6 border-b border-slate-700/30">
                    <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-amber-400" /> Key Regulations & Fines
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-slate-700/50">
                            <th className="text-left px-3 py-2 text-amber-400 font-semibold text-xs">Regulation</th>
                            <th className="text-left px-3 py-2 text-amber-400 font-semibold text-xs">Description</th>
                            <th className="text-left px-3 py-2 text-red-400 font-semibold text-xs whitespace-nowrap">Fine Risk</th>
                          </tr>
                        </thead>
                        <tbody>
                          {addon.keyRegs.map((kr) => (
                            <tr key={kr.reg} className="border-b border-slate-800/30">
                              <td className="px-3 py-2 text-white font-medium text-xs whitespace-nowrap">{kr.reg}</td>
                              <td className="px-3 py-2 text-slate-400 text-xs">{kr.desc}</td>
                              <td className="px-3 py-2 text-red-400 text-xs whitespace-nowrap">{kr.fine}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Amana Capabilities */}
                  <div className="p-6">
                    <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className={`w-4 h-4 ${addon.color}`} /> Amana Capabilities for {addon.name}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {addon.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className={`w-4 h-4 ${addon.color} shrink-0 mt-0.5`} />
                          <span className="text-xs text-slate-300">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* GCC Coverage Tab */}
        {activeTab === 'gcc' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/5 rounded-xl p-6 border border-blue-500/30">
              <h2 className="text-xl font-bold text-white mb-2">GCC-Wide Coverage</h2>
              <p className="text-slate-400">One platform, 6 countries, 30+ regulatory bodies. Amana knows every regulator in the region.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {gccCountries.map((c) => (
                <div key={c.country} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{c.flag}</span>
                      <h3 className="text-white font-bold">{c.country}</h3>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${c.color === 'text-emerald-400' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
                      {c.status}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 mb-2">{c.regulators} regulatory bodies tracked</div>
                  <div className="flex flex-wrap gap-1">
                    {c.bodies.map((body) => (
                      <span key={body} className="text-xs px-2 py-0.5 bg-slate-700/50 rounded-full text-slate-300">{body}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Platform Tab */}
        {activeTab === 'platform' && (
          <div className="space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-2">Platform Capabilities</h2>
              <p className="text-slate-400 mb-6">Built-in tools that make compliance effortless.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {platformFeatures.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div key={f.title} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                      <Icon className="w-5 h-5 text-teal-400 mb-2" />
                      <h4 className="text-white font-bold text-sm mb-1">{f.title}</h4>
                      <p className="text-xs text-slate-400">{f.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <Expandable title="Technology Stack" defaultOpen>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-slate-700/50">
                    {['Layer', 'Technology', 'Purpose'].map((h) => (<th key={h} className="text-left px-3 py-2 text-teal-400 font-semibold">{h}</th>))}
                  </tr></thead>
                  <tbody>
                    {[
                      ['Frontend', 'React / Next.js', 'Dashboard, forms, reports'],
                      ['Mobile', 'React Native', 'iOS & Android compliance app'],
                      ['Backend', 'Go (Golang)', 'Microservices, rule engine'],
                      ['Database', 'PostgreSQL 16', 'Compliance data, audit logs'],
                      ['ML/AI', 'Python + GPT-4', 'Regulatory change analysis'],
                      ['Storage', 'S3 + KMS', 'Encrypted document vault'],
                      ['Auth', 'Rabtul Identity SSO', 'Single sign-on'],
                      ['Hosting', 'AWS me-south-1', 'GCC data residency'],
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-slate-800/50">
                        <td className="px-3 py-2 text-white font-medium">{row[0]}</td>
                        <td className="px-3 py-2 text-slate-300">{row[1]}</td>
                        <td className="px-3 py-2 text-slate-400">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Expandable>

            <Expandable title="Data Residency & Security">
              <div className="space-y-3 text-sm text-slate-300">
                {[
                  ['Data Residency', 'All data in AWS me-south-1 (Bahrain). UAE/KSA data never leaves GCC.'],
                  ['Encryption', 'AES-256 at rest, TLS 1.3 in transit. KYC docs field-level encrypted.'],
                  ['Audit', '100% immutable audit trail. 7-year retention for financial records.'],
                  ['Access', 'MFA required. RBAC with 6 role levels. IP allowlisting for admin.'],
                  ['Certification', 'SOC2 Type II certified. PCI-DSS compliant platform.'],
                ].map(([title, desc]) => (
                  <div key={title} className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">{title}:</strong> {desc}</span>
                  </div>
                ))}
              </div>
            </Expandable>
          </div>
        )}

        {/* Pricing Tab */}
        {activeTab === 'pricing' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {pricingTiers.map((tier) => (
                <div key={tier.tier} className={`rounded-xl border ${tier.color} ${tier.bgColor} p-6 relative ${tier.popular ? 'ring-2 ring-teal-500/50' : ''}`}>
                  {tier.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 bg-teal-500 text-black rounded-full font-bold">Most Popular</span>
                  )}
                  <h3 className="text-lg font-bold text-white">{tier.tier}</h3>
                  <div className="flex items-baseline gap-1 my-2">
                    <span className="text-3xl font-black text-white">{tier.price}</span>
                    <span className="text-sm text-slate-400">{tier.period}</span>
                  </div>
                  <p className="text-xs text-slate-400 mb-4">{tier.target}</p>
                  <ul className="space-y-2">
                    {tier.features.map((f, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />{f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RTMN Internal Tab */}
        {activeTab === 'rtmn' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-yellow-500/10 rounded-xl p-6 border-2 border-[#c9a227]">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Network className="w-5 h-5 text-[#c9a227]" /> Built for RTMN — Available for Everyone
              </h2>
              <p className="text-slate-300">Amana was born from RTMN&apos;s need to manage compliance across 10 companies in 6 countries. Each company has unique regulatory requirements.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {rtmnCompanies.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.name} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 flex items-start gap-3">
                    <Icon className={`w-5 h-5 ${c.color} shrink-0 mt-0.5`} />
                    <div>
                      <h3 className="text-white font-bold text-sm">{c.name}</h3>
                      <p className="text-xs text-slate-400 mt-0.5">{c.needs}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Financials Tab */}
        {activeTab === 'financials' && (
          <div className="space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-teal-400" /> Financial Projections
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-slate-700/50">
                    {['Year', 'Customers', 'Revenue (AED M)', 'Market'].map((h) => (
                      <th key={h} className="text-left px-3 py-2 text-teal-400 font-semibold">{h}</th>
                    ))}
                  </tr></thead>
                  <tbody>
                    {financialProjections.map((fp) => (
                      <tr key={fp.year} className="border-b border-slate-800/50">
                        <td className="px-3 py-3 text-white font-medium">{fp.year}</td>
                        <td className="px-3 py-3 text-slate-300">{fp.customers}</td>
                        <td className="px-3 py-3 text-emerald-400 font-bold">{fp.revenue}M</td>
                        <td className="px-3 py-3 text-slate-400">{fp.market}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Revenue Streams</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { source: 'SaaS Subscriptions', share: '70%', desc: 'Monthly/annual plans across 4 tiers' },
                  { source: 'Industry Add-ons', share: '15%', desc: 'Sector modules (AED 99-499/mo each)' },
                  { source: 'Professional Services', share: '10%', desc: 'Implementation, training, custom workflows' },
                  { source: 'API & White-label', share: '5%', desc: 'Enterprise API access, reseller program' },
                ].map((s) => (
                  <div key={s.source} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="text-2xl font-bold text-teal-400">{s.share}</div>
                    <div className="text-white font-bold text-sm mt-1">{s.source}</div>
                    <div className="text-xs text-slate-400 mt-1">{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Market Opportunity</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { label: 'GCC Businesses', value: '3M+', sub: 'Total addressable' },
                  { label: 'Compliance Spend', value: '2B+', sub: 'AED annually in GCC' },
                  { label: 'Digital Penetration', value: '<5%', sub: 'Currently using software' },
                  { label: 'Growth Rate', value: '35%', sub: 'RegTech CAGR in MENA' },
                ].map((m) => (
                  <div key={m.label} className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50">
                    <div className="text-2xl font-bold text-white">{m.value}</div>
                    <div className="text-xs text-slate-400 mt-1">{m.sub}</div>
                    <div className="text-xs text-slate-500 mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Roadmap Tab */}
        {activeTab === 'roadmap' && (
          <div className="space-y-6">
            {roadmapPhases.map((phase) => (
              <div key={phase.phase} className={`${phase.bgColor} rounded-xl p-6 border-2 ${phase.color}`}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs text-slate-400">{phase.phase}</span>
                    <h3 className="text-lg font-bold text-white">{phase.title}</h3>
                  </div>
                  <span className="text-sm text-slate-300 font-medium">{phase.timeline}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {phase.milestones.map((m, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-300">{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Competition Tab */}
        {activeTab === 'competition' && (
          <div className="space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4">Competitive Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-slate-700/50">
                    {['', 'GCC Regs', 'Arabic', 'AML', 'Tax', 'Shariah', 'SOC2', 'Labor', 'ESG', 'Fire', 'Customs', 'Data Loc', 'Price'].map((h) => (
                      <th key={h} className="text-left px-2 py-2 text-teal-400 font-semibold whitespace-nowrap text-xs">{h}</th>
                    ))}
                  </tr></thead>
                  <tbody>
                    {competitors.map((c) => (
                      <tr key={c.name} className={`border-b border-slate-800/50 ${c.name === 'Amana' ? 'bg-teal-500/10' : ''}`}>
                        <td className="px-2 py-2 text-white font-bold whitespace-nowrap">{c.name}</td>
                        {[c.gcc, c.arabic, c.aml, c.tax, c.shariah, c.soc2, c.labor, c.esg, c.fire, c.customs, c.data, c.price].map((val, j) => (
                          <td key={j} className={`px-2 py-2 whitespace-nowrap text-xs ${val.startsWith('✅') ? 'text-emerald-400' : val.startsWith('❌') ? 'text-red-400' : 'text-amber-400'}`}>
                            {val}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-500/10 to-emerald-500/5 rounded-xl p-6 border border-teal-500/30">
              <h3 className="text-lg font-bold text-white mb-4">Amana&apos;s Unfair Advantages</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { title: 'GCC-Native', desc: 'Built for GCC from day 1. 30+ local regulators, Arabic-native, Shariah compliance — no Western competitor has this.' },
                  { title: 'RTMN Distribution', desc: 'BizOne merchants get Amana built-in. 10 RTMN companies as proof-of-concept. Instant credibility.' },
                  { title: 'Full Stack', desc: 'Not just IT compliance (SOC2). All 12 pillars: tax, AML, fire safety, ESG, anti-corruption — one platform.' },
                  { title: 'Data Residency', desc: 'All data in GCC (AWS Bahrain). Western competitors store data in US/EU — non-compliant for many GCC businesses.' },
                ].map((a) => (
                  <div key={a.title} className="bg-slate-900/50 rounded-xl p-4 border border-teal-500/20">
                    <h4 className="text-white font-bold text-sm mb-1">{a.title}</h4>
                    <p className="text-xs text-slate-400">{a.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Risks Tab */}
        {activeTab === 'risks' && (
          <div className="space-y-4">
            {risks.map((r) => (
              <div key={r.risk} className="bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden">
                <button
                  onClick={() => setExpandedRisk(expandedRisk === r.risk ? null : r.risk)}
                  className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                      r.severity === 'critical' ? 'bg-red-500/20 text-red-400' : r.severity === 'high' ? 'bg-orange-500/20 text-orange-400' : 'bg-amber-500/20 text-amber-400'
                    }`}>{r.severity.toUpperCase()}</span>
                    <span className="text-white font-medium text-sm">{r.risk}</span>
                  </div>
                  {expandedRisk === r.risk ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>
                {expandedRisk === r.risk && (
                  <div className="px-5 pb-4">
                    <div className="space-y-2">
                      {r.mitigation.map((m, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-300">{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>

      {/* CTA Section */}
      <section className="py-12 px-4 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Compliance, Simplified.</h2>
          <p className="text-slate-400 mb-8">12 pillars. 30+ regulators. 6 countries. One platform.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/bizone" className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-500 transition-colors">
              <Store className="w-5 h-5" /> BizOne Technology
            </Link>
            <Link href="/rabtul-core" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-500 transition-colors">
              <Code className="w-5 h-5" /> Rabtul Core
            </Link>
            <Link href="/legal-compliance" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors">
              <Scale className="w-5 h-5" /> Legal Compliance
            </Link>
            <Link href="/rtmn-ecosystem" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors">
              <Layers className="w-5 h-5" /> RTMN Ecosystem
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
