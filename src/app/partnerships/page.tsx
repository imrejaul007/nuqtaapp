'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Handshake,
  Building2,
  CreditCard,
  GraduationCap,
  Briefcase,
  Plane,
  Home,
  Car,
  Heart,
  Smartphone,
  Globe,
  Target,
  Users,
  TrendingUp,
  DollarSign,
  Gift,
  Star,
  ChevronDown,
  ChevronRight,
  CheckCircle,
  Zap,
  Crown,
  Shield,
  Award,
  Mail,
  Phone,
  Calendar,
  Package,
  Coins,
  Dumbbell,
  Ticket,
  UtensilsCrossed,
  Wallet,
  ShoppingCart,
  Landmark,
  Store,
  Scissors,
  BookOpen,
  Gem,
  Layers,
  ArrowRight
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

interface Partnership {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  description: string;
  whyPartner: string[];
  actionPlan: {
    phase1: { title: string; tasks: string[] };
    phase2: { title: string; tasks: string[] };
    phase3: { title: string; tasks: string[] };
  };
  valueForPartner: string[];
  valueForNuqta: string[];
  integrationModel: string;
  revenueModel: string;
  targetPartners: string[];
  pitchPoints: string[];
  timeline: string;
  priority: 'high' | 'medium' | 'low';
}

const partnerships: Partnership[] = [
  {
    id: 'banks',
    name: 'Bank & Credit Card Partnerships',
    icon: CreditCard,
    color: 'from-blue-500 to-indigo-600',
    description: 'Partner with UAE banks to offer co-branded rewards, credit card tie-ins, and payment integration.',
    whyPartner: [
      'Banks want to differentiate their cards with unique rewards beyond cashback',
      'Credit card spending data shows high demand for lifestyle rewards',
      'UAE banking sector is highly competitive - loyalty is a key differentiator',
      'Digital-first banks (Liv, YAP) actively seeking fintech partnerships',
      'Co-branded rewards increase card activation and transaction frequency'
    ],
    actionPlan: {
      phase1: {
        title: 'Research & Preparation (Week 1-4)',
        tasks: [
          'Map all UAE bank loyalty programs and identify gaps',
          'Analyze competitor reward integrations (Smiles, Amber)',
          'Prepare bank-specific pitch decks with ROI projections',
          'Identify decision makers (Head of Cards, Loyalty, Digital)',
          'Get warm introductions via board connections'
        ]
      },
      phase2: {
        title: 'Outreach & Negotiation (Week 5-12)',
        tasks: [
          'Schedule meetings with digital banks first (easier entry)',
          'Present API integration capabilities and timeline',
          'Negotiate revenue share model (0.1-0.3% per transaction)',
          'Draft partnership agreement with legal team',
          'Agree on pilot scope and success metrics'
        ]
      },
      phase3: {
        title: 'Integration & Launch (Week 13-24)',
        tasks: [
          'Technical integration with bank APIs',
          'QA testing with test transactions',
          'Soft launch with bank employees first',
          'Joint marketing campaign planning',
          'Full launch with cardholder communication'
        ]
      }
    },
    valueForPartner: [
      'Increase card spend and transactions',
      'Differentiate rewards offering',
      'Access to engaged customer base',
      'Data insights on spending patterns',
      'Enhanced customer stickiness'
    ],
    valueForNuqta: [
      'Built-in distribution to cardholders',
      'Payment integration capabilities',
      'Credibility and trust association',
      'Co-marketing budgets',
      'Premium user acquisition'
    ],
    integrationModel: 'API integration for automatic point earning on card transactions. Co-branded tier for cardholders.',
    revenueModel: 'Revenue share on transactions (0.1-0.3%), co-marketing fees, data insights subscription',
    targetPartners: [
      'Emirates NBD - Largest UAE bank',
      'FAB - First Abu Dhabi Bank',
      'Mashreq - Digital-first approach',
      'ADCB - Strong retail presence',
      'CBD - Commercial Bank of Dubai',
      'Liv. by Emirates NBD - Millennial focus',
      'YAP - Digital banking'
    ],
    pitchPoints: [
      'Our users transact 3x more than average',
      'High-engagement demographic (25-45)',
      'Ready API for seamless integration',
      'White-label capability available',
      'Exclusive launch partner benefits'
    ],
    timeline: 'Initial discussions: Month 3-4, Pilot: Month 6-8, Full launch: Month 10-12',
    priority: 'high'
  },
  {
    id: 'corporate',
    name: 'Corporate Rewards Programs',
    icon: Briefcase,
    color: 'from-slate-500 to-slate-700',
    description: 'Enterprise partnerships offering Nuqta as employee benefits, corporate gifting, and exclusive employee discounts at partner merchants.',
    whyPartner: [
      'Companies struggle to find meaningful employee benefits beyond salary',
      'HR teams need easy-to-implement reward solutions',
      'Free zone companies get tax benefits for employee perks',
      'High employee turnover in UAE - loyalty programs help retention',
      'Corporate gifting market is AED 2B+ annually in UAE'
    ],
    actionPlan: {
      phase1: {
        title: 'Sales Infrastructure (Week 1-4)',
        tasks: [
          'Build corporate sales deck with employee benefit ROI',
          'Create HR dashboard demo for bulk point management',
          'Identify HR heads and benefit managers in target companies',
          'Partner with HR consultancies (Bayzat, ZenHR)',
          'Prepare pricing tiers (per employee/month model)'
        ]
      },
      phase2: {
        title: 'Enterprise Sales (Week 5-16)',
        tasks: [
          'Start with tech companies and consulting firms (early adopters)',
          'Attend HR conferences and corporate events',
          'Offer free pilot for first 3 months to large corporates',
          'Create case studies from pilot companies',
          'Build referral program for HR managers'
        ]
      },
      phase3: {
        title: 'Scale & Automate (Week 17-24)',
        tasks: [
          'Self-service portal for small businesses',
          'Integration with payroll systems (SAP, Oracle)',
          'Automated onboarding for new employees',
          'Corporate gifting portal for occasions',
          'Quarterly business reviews with key accounts'
        ]
      }
    },
    valueForPartner: [
      'Enhanced employee benefits package',
      'Boost employee satisfaction & retention',
      'Exclusive discounts for employees',
      'Corporate gifting solution',
      'Expense management rewards',
      'Tax-efficient benefit structure'
    ],
    valueForNuqta: [
      'Bulk user acquisition (entire companies)',
      'Guaranteed transaction volume',
      'B2B revenue stream',
      'Enterprise credibility',
      'Referral network within companies',
      'Zero CAC employee acquisition'
    ],
    integrationModel: 'Corporate dashboard for HR, bulk point allocation, expense card linking, branded company tiers, exclusive employee discount portal.',
    revenueModel: 'Per-employee licensing (AED 10-25/month), bulk point purchases at discount, platform fee',
    targetPartners: [
      // Major UAE Corporates
      'Emirates Group (Emirates, dnata, EK Hotels)',
      'Etihad Aviation Group',
      'ADNOC (Abu Dhabi National Oil Company)',
      'DP World (Ports & Logistics)',
      'Emaar Properties',
      'DAMAC Properties',
      'Majid Al Futtaim Group',
      'Al-Futtaim Group',
      'Landmark Group',
      'Chalhoub Group',
      'Apparel Group',
      // Free Zones & Business Parks
      'DIFC (Dubai International Financial Centre)',
      'ADGM (Abu Dhabi Global Market)',
      'DMCC (Dubai Multi Commodities Centre)',
      'Dubai Silicon Oasis',
      'Dubai Internet City',
      'Dubai Media City',
      'Dubai Knowledge Park',
      'Dubai Healthcare City',
      'twofour54 Abu Dhabi',
      'JAFZA (Jebel Ali Free Zone)',
      'SAIF Zone Sharjah',
      'RAK Economic Zone',
      'Fujairah Free Zone',
      // Tech & Consulting
      'Google UAE',
      'Microsoft UAE',
      'Meta UAE',
      'Amazon UAE',
      'IBM Middle East',
      'Oracle UAE',
      'SAP UAE',
      'Accenture Middle East',
      'Deloitte Middle East',
      'PwC Middle East',
      'EY Middle East',
      'KPMG Middle East',
      'McKinsey & Company UAE',
      'BCG Middle East',
      'Bain & Company UAE',
      // Banks & Financial Services
      'Emirates NBD (staff)',
      'FAB (First Abu Dhabi Bank)',
      'Mashreq Bank',
      'ADCB (Abu Dhabi Commercial Bank)',
      'Commercial Bank of Dubai',
      'Dubai Islamic Bank',
      'Abu Dhabi Islamic Bank',
      'RAKBANK',
      'National Bank of Fujairah',
      // Government & Semi-Government
      'Dubai Government (Smart Dubai)',
      'Abu Dhabi Government',
      'RTA (Roads & Transport Authority)',
      'DEWA (Dubai Electricity & Water)',
      'ADDC (Abu Dhabi Distribution Co)',
      'Dubai Municipality',
      'Abu Dhabi Municipality',
      'Dubai Health Authority',
      'MOHAP (Ministry of Health)',
      // Hospitality & Tourism
      'Jumeirah Group',
      'Rotana Hotels',
      'Atlantis Resorts',
      'Four Seasons UAE',
      'Marriott UAE',
      'Hilton UAE',
      'Accor Hotels UAE',
      'Hyatt UAE',
      'IHG UAE',
      // Retail & E-commerce
      'Noon',
      'Amazon.ae',
      'Namshi',
      'Carrefour UAE (MAF)',
      'Lulu Group',
      'Spinneys',
      'Choithrams',
      // Telecom
      'Etisalat (e& UAE)',
      'du (Emirates Integrated)',
      // Construction & Engineering
      'Arabtec Construction',
      'ALEC Engineering',
      'Drake & Scull',
      'Consolidated Contractors',
      'Al Habtoor Group',
      // Healthcare
      'Mediclinic Middle East',
      'Aster DM Healthcare',
      'NMC Healthcare',
      'VPS Healthcare',
      'Al Zahra Hospital',
      // Education Sector Corporates
      'GEMS Education',
      'Taaleem',
      'Aldar Education',
      'Cognita Schools',
      'Nord Anglia Education',
      // Media & Entertainment
      'MBC Group',
      'Dubai Media Incorporated',
      'Image Nation Abu Dhabi',
      'Flash Entertainment',
      'Miral (Yas Island)'
    ],
    pitchPoints: [
      'Turnkey employee rewards solution',
      'Exclusive employee discount program',
      'No setup costs, quick deployment',
      'Dashboard for HR management',
      'Tax-efficient benefit structure',
      'Employees love local rewards'
    ],
    timeline: 'Sales outreach: Month 2, First corporate: Month 4, Scale: Month 6+',
    priority: 'high'
  },
  {
    id: 'universities',
    name: 'University & Student Programs',
    icon: GraduationCap,
    color: 'from-purple-500 to-pink-600',
    description: 'Partner with UAE universities for exclusive student discounts, campus merchant integration, student rewards, and youth engagement.',
    whyPartner: [
      'Universities want to improve student experience and satisfaction scores',
      'Campus merchants struggle with low footfall - need incentives',
      'Student retention is key metric for private universities',
      '200,000+ university students in UAE - untapped young market',
      'Students become lifelong users - high lifetime value'
    ],
    actionPlan: {
      phase1: {
        title: 'University Mapping (Week 1-4)',
        tasks: [
          'List all UAE universities with student population data',
          'Identify student affairs and partnership contacts',
          'Map campus merchants (cafes, bookstores, services)',
          'Create student-focused pitch deck',
          'Design student ambassador program structure'
        ]
      },
      phase2: {
        title: 'Campus Partnerships (Week 5-12)',
        tasks: [
          'Start with private universities (faster decisions)',
          'Propose exclusive student discount program',
          'Onboard campus merchants with special rates',
          'Recruit student ambassadors (20 per campus)',
          'Integrate with student ID systems'
        ]
      },
      phase3: {
        title: 'Student Activation (Week 13-20)',
        tasks: [
          'Launch campus events and competitions',
          'Create student referral challenges',
          'Partner with student clubs and organizations',
          'Offer orientation week special bonuses',
          'Build alumni transition program'
        ]
      }
    },
    valueForPartner: [
      'Enhanced student experience',
      'Campus commerce boost',
      'Alumni engagement tool',
      'Differentiation for recruitment',
      'Student loyalty and retention',
      'Exclusive student discount program'
    ],
    valueForNuqta: [
      'Young user acquisition (18-25)',
      'Campus merchant network',
      'Long-term user lifetime value',
      'Word-of-mouth among students',
      'Brand ambassadors',
      'Zero CAC student acquisition'
    ],
    integrationModel: 'Student ID integration, campus merchant onboarding, student-specific tiers, exclusive student discounts at partner merchants.',
    revenueModel: 'University licensing fee, campus merchant commissions, sponsored rewards from brands',
    targetPartners: [
      // Federal & Public Universities
      'United Arab Emirates University (Al Ain)',
      'Zayed University (Dubai & Abu Dhabi)',
      'Higher Colleges of Technology (17 campuses)',
      'Khalifa University (Abu Dhabi)',
      'University of Sharjah',
      'Ajman University',
      // Dubai Universities
      'American University in Dubai (AUD)',
      'University of Dubai',
      'Canadian University Dubai',
      'Murdoch University Dubai',
      'Heriot-Watt University Dubai',
      'Middlesex University Dubai',
      'University of Birmingham Dubai',
      'University of Wollongong Dubai',
      'SP Jain School of Global Management',
      'BITS Pilani Dubai Campus',
      'Manipal Academy Higher Education Dubai',
      'Amity University Dubai',
      'Curtin University Dubai',
      'Rochester Institute of Technology Dubai',
      'Hult International Business School Dubai',
      'Synergy University Dubai',
      'University of Balamand Dubai',
      'Islamic Azad University Dubai',
      'MODUL University Dubai',
      // Abu Dhabi Universities
      'New York University Abu Dhabi (NYUAD)',
      'Sorbonne University Abu Dhabi',
      'Paris-Sorbonne University Abu Dhabi',
      'Abu Dhabi University',
      'Al Ain University',
      'American University of Ras Al Khaimah',
      'Rabdan Academy Abu Dhabi',
      // Sharjah Universities
      'American University of Sharjah (AUS)',
      'University of Sharjah',
      'Sharjah University City',
      'Skyline University College',
      // RAK & Northern Emirates
      'American University of Ras Al Khaimah',
      'RAK Medical & Health Sciences University',
      // Specialized Institutions
      'Emirates Academy of Hospitality Management',
      'Dubai Institute of Design and Innovation',
      'Institute of Management Technology Dubai',
      'S P Jain School of Global Management',
      'Westford University College',
      'Exeed College Dubai',
      // Business Schools
      'INSEAD Abu Dhabi',
      'London Business School Dubai',
      'Manchester Business School Dubai',
      'Edinburgh Business School Dubai',
      'Cass Business School Dubai',
      // Medical Schools
      'Gulf Medical University (Ajman)',
      'Mohammed Bin Rashid University of Medicine',
      'RAK College of Medical Sciences',
      // Technical & Vocational
      'Abu Dhabi Polytechnic',
      'Fatima College of Health Sciences',
      'Dubai College of Tourism',
      'Emirates Aviation University',
      'Dubai Aeronautical College'
    ],
    pitchPoints: [
      'Complete campus rewards ecosystem',
      'Exclusive student discount program',
      'Student-friendly pricing',
      'Boosts campus F&B revenue',
      'Ready for integration',
      'Ambassador program included'
    ],
    timeline: 'University outreach: Month 3, Pilot campus: Month 5, Multi-campus: Month 8',
    priority: 'high'
  },
  {
    id: 'telecom',
    name: 'Telecom Partnerships',
    icon: Smartphone,
    color: 'from-cyan-500 to-blue-600',
    description: 'Partner with UAE telecom operators for points conversion, bill payment rewards, and distribution.',
    whyPartner: [
      'Telecom loyalty programs (Smiles) need more redemption partners',
      'Bill payment is recurring - perfect for point accumulation',
      'Telecoms have massive distribution (10M+ subscribers)',
      'Reducing churn is critical in competitive telecom market',
      'Points conversion creates new revenue stream for telecoms'
    ],
    actionPlan: {
      phase1: {
        title: 'Partnership Research (Week 1-4)',
        tasks: [
          'Analyze Etisalat Smiles and du rewards programs',
          'Identify integration points and APIs',
          'Prepare co-marketing proposal',
          'Map decision makers in loyalty departments',
          'Research existing telecom-fintech partnerships'
        ]
      },
      phase2: {
        title: 'Strategic Outreach (Week 5-16)',
        tasks: [
          'Approach Etisalat Smiles team first (larger user base)',
          'Propose bidirectional points conversion',
          'Negotiate revenue share on conversions',
          'Plan joint promotional campaigns',
          'Draft technical integration requirements'
        ]
      },
      phase3: {
        title: 'Integration & Launch (Week 17-28)',
        tasks: [
          'API integration with telecom systems',
          'Points conversion ratio finalization',
          'Staff training for customer queries',
          'Joint marketing campaign execution',
          'Monitor conversion rates and optimize'
        ]
      }
    },
    valueForPartner: [
      'Enhanced loyalty offering',
      'Reduced churn',
      'Bill payment incentives',
      'Cross-sell opportunities',
      'Data insights'
    ],
    valueForNuqta: [
      'Massive distribution (millions of subscribers)',
      'Points conversion partner',
      'Co-marketing reach',
      'Payment integration',
      'Premium positioning'
    ],
    integrationModel: 'Points conversion (Etisalat Smiles ↔ Nuqta), bill payment rewards, app integration.',
    revenueModel: 'Points conversion fees, co-marketing revenue, API licensing',
    targetPartners: [
      'Etisalat (e& UAE)',
      'du (Emirates Integrated)',
      'Virgin Mobile UAE'
    ],
    pitchPoints: [
      'Complementary loyalty ecosystem',
      'No direct competition',
      'Ready API integration',
      'Mutual benefit structure',
      'Joint marketing opportunities'
    ],
    timeline: 'Initial contact: Month 4, Partnership discussion: Month 6-8, Integration: Month 10-12',
    priority: 'medium'
  },
  {
    id: 'airlines',
    name: 'Airline & Travel Partnerships',
    icon: Plane,
    color: 'from-sky-500 to-blue-600',
    description: 'Partner with airlines for miles conversion, travel rewards, and tourist engagement.',
    whyPartner: [
      'Miles programs have low redemption rates - need more local options',
      'Emirates/Etihad frequent flyers are high-value spenders',
      'Tourist market needs local rewards from arrival',
      'Airlines want ground-level engagement beyond flights',
      'Hotel chains seek local experience partners'
    ],
    actionPlan: {
      phase1: {
        title: 'Travel Industry Research (Week 1-6)',
        tasks: [
          'Map Emirates Skywards and Etihad Guest programs',
          'Identify hotel loyalty program gaps',
          'Research tourist spending patterns in UAE',
          'Prepare travel partnership proposal',
          'Connect with travel industry contacts'
        ]
      },
      phase2: {
        title: 'Airline Outreach (Week 7-16)',
        tasks: [
          'Approach Emirates Skywards partnerships team',
          'Propose miles-to-Nuqta conversion partnership',
          'Present tourist welcome program concept',
          'Negotiate airport lounge integration',
          'Plan inflight Nuqta promotions'
        ]
      },
      phase3: {
        title: 'Tourism Integration (Week 17-24)',
        tasks: [
          'Launch tourist welcome bonus program',
          'Partner with Dubai Tourism for visitor rewards',
          'Integrate with hotel concierge services',
          'Create airport arrival experience',
          'Build travel booking rewards feature'
        ]
      }
    },
    valueForPartner: [
      'Ground-level loyalty touchpoint',
      'Increase miles program value',
      'Tourist engagement',
      'Extend brand presence',
      'Data on traveler spending'
    ],
    valueForNuqta: [
      'Premium user association',
      'Frequent flyer access',
      'Tourist market entry',
      'High-value conversions',
      'Travel industry credibility'
    ],
    integrationModel: 'Points-to-miles conversion, airport lounge access for Platinum, travel booking rewards.',
    revenueModel: 'Conversion fees (both directions), travel booking commissions, co-marketing',
    targetPartners: [
      'Emirates Skywards',
      'Etihad Guest',
      'Air Arabia',
      'flydubai',
      'Marriott Bonvoy (hotels)',
      'Hilton Honors',
      'Booking.com',
      'Dnata Travel'
    ],
    pitchPoints: [
      'Convert dormant miles to active rewards',
      'Ground engagement for travelers',
      'Tourist welcome program',
      'Mutual ecosystem benefit',
      'Premium brand alignment'
    ],
    timeline: 'Outreach: Month 6, Pilot: Month 9-10, Full integration: Month 12+',
    priority: 'medium'
  },
  {
    id: 'realestate',
    name: 'Real Estate & Property',
    icon: Home,
    color: 'from-emerald-500 to-teal-600',
    description: 'Partner with developers and property managers for resident rewards and community benefits.',
    whyPartner: [
      'Developers want to differentiate luxury properties',
      'Property managers need tenant retention tools',
      'Rent payment is recurring high-value transaction',
      'Community apps need local merchant integration',
      'Real estate is AED 100B+ market in UAE'
    ],
    actionPlan: {
      phase1: {
        title: 'Developer Mapping (Week 1-4)',
        tasks: [
          'List major developers and their property portfolios',
          'Identify property management companies',
          'Research existing resident apps (Emaar Living, etc.)',
          'Prepare developer partnership pitch',
          'Map community merchants in major developments'
        ]
      },
      phase2: {
        title: 'Developer Partnerships (Week 5-12)',
        tasks: [
          'Approach Emaar first (largest portfolio)',
          'Propose white-label resident rewards solution',
          'Negotiate rent payment integration',
          'Plan community merchant onboarding',
          'Create resident onboarding program'
        ]
      },
      phase3: {
        title: 'Community Launch (Week 13-20)',
        tasks: [
          'Onboard community merchants with special rates',
          'Launch resident welcome bonuses',
          'Create building-specific rewards tiers',
          'Integrate with property management systems',
          'Build tenant referral program'
        ]
      }
    },
    valueForPartner: [
      'Tenant retention tool',
      'Community building',
      'Differentiation from competitors',
      'Rent payment incentives',
      'Property value enhancement'
    ],
    valueForNuqta: [
      'Captive resident audience',
      'High-income users',
      'Community merchant access',
      'Recurring engagement',
      'Premium positioning'
    ],
    integrationModel: 'Building-specific rewards, rent payment points, resident-exclusive merchant deals.',
    revenueModel: 'Per-unit licensing to developers, rent payment processing fees, merchant referrals',
    targetPartners: [
      'Emaar Properties',
      'DAMAC Properties',
      'Dubai Properties',
      'Meraas',
      'Nakheel',
      'Azizi Developments',
      'Major building management companies'
    ],
    pitchPoints: [
      'Increase tenant satisfaction',
      'Reduce vacancy rates',
      'Ready for community deployment',
      'Local merchant integration',
      'White-label available'
    ],
    timeline: 'Developer outreach: Month 5, Pilot building: Month 7, Portfolio expansion: Month 10',
    priority: 'low'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Wellness',
    icon: Heart,
    color: 'from-red-500 to-pink-600',
    description: 'Partner with hospitals, clinics, pharmacies, and insurance for health-related rewards.',
    whyPartner: [
      'Pharmacies need loyalty programs to compete with e-pharmacies',
      'Hospitals want patient engagement beyond visits',
      'Wellness programs need incentive mechanisms',
      'Insurance companies want to promote preventive care',
      'Healthcare spending is AED 50B+ in UAE'
    ],
    actionPlan: {
      phase1: {
        title: 'Healthcare Mapping (Week 1-4)',
        tasks: [
          'List pharmacy chains and hospital groups',
          'Research insurance wellness programs',
          'Identify healthcare procurement contacts',
          'Prepare HIPAA-compliant integration plan',
          'Create healthcare-focused value proposition'
        ]
      },
      phase2: {
        title: 'Pharmacy Partnerships (Week 5-12)',
        tasks: [
          'Start with pharmacy chains (faster decisions)',
          'Propose prescription refill rewards',
          'Integrate with pharmacy POS systems',
          'Create wellness product promotions',
          'Launch pharmacy loyalty pilot'
        ]
      },
      phase3: {
        title: 'Hospital & Insurance (Week 13-24)',
        tasks: [
          'Approach hospital groups for check-up rewards',
          'Partner with insurance for wellness incentives',
          'Create preventive care reward programs',
          'Build health goal tracking integration',
          'Launch insurance premium rewards'
        ]
      }
    },
    valueForPartner: [
      'Patient loyalty',
      'Wellness program support',
      'Prescription adherence',
      'Check-up reminders',
      'Health data insights'
    ],
    valueForNuqta: [
      'Healthcare merchant network',
      'Insurance partnership revenue',
      'Wellness positioning',
      'High-value transactions',
      'Trust and credibility'
    ],
    integrationModel: 'Pharmacy rewards, clinic check-in points, insurance wellness bonuses, health goal achievements.',
    revenueModel: 'Insurance partnership fees, pharmacy commissions, wellness program licensing',
    targetPartners: [
      'Aster DM Healthcare',
      'Mediclinic',
      'NMC Healthcare',
      'Boots Pharmacy',
      'Life Pharmacy',
      'Daman Insurance',
      'AXA Insurance',
      'Cigna'
    ],
    pitchPoints: [
      'Support wellness initiatives',
      'Prescription reward program',
      'Health goal gamification',
      'Insurance wellness integration',
      'Pharmacy loyalty solution'
    ],
    timeline: 'Pharmacy outreach: Month 4, Hospital pilot: Month 8, Insurance: Month 10',
    priority: 'low'
  },
  {
    id: 'automotive',
    name: 'Automotive & Mobility',
    icon: Car,
    color: 'from-orange-500 to-red-600',
    description: 'Partner with car services, parking, fuel, and mobility apps for transportation rewards.',
    whyPartner: [
      'Fuel stations need loyalty to compete (ENOC vs ADNOC)',
      'Parking apps want payment integration',
      'Car service centers need reminder + reward combos',
      'Ride-hail apps seek differentiation from competitors',
      'High-frequency daily transactions (fuel, parking)'
    ],
    actionPlan: {
      phase1: {
        title: 'Mobility Mapping (Week 1-4)',
        tasks: [
          'List all fuel station networks and loyalty programs',
          'Map parking apps and RTA integrations',
          'Identify car service chain contacts',
          'Research ride-hail partnership opportunities',
          'Prepare mobility rewards proposal'
        ]
      },
      phase2: {
        title: 'Fuel & Parking (Week 5-12)',
        tasks: [
          'Approach ENOC/EPPCO for fuel rewards',
          'Integrate with mParking and parking apps',
          'Negotiate fuel discount + points combo',
          'Create parking payment rewards',
          'Launch pilot at key stations'
        ]
      },
      phase3: {
        title: 'Full Mobility (Week 13-20)',
        tasks: [
          'Partner with Careem/Uber for ride rewards',
          'Integrate car service reminders',
          'Create car wash rewards program',
          'Build roadside assistance partnerships',
          'Launch mobility super-rewards feature'
        ]
      }
    },
    valueForPartner: [
      'Customer retention',
      'Service reminder incentives',
      'Cross-sell opportunities',
      'Loyalty program enhancement',
      'Data insights'
    ],
    valueForNuqta: [
      'High-frequency touchpoints',
      'Essential service integration',
      'Male demographic reach',
      'Recurring transactions',
      'Mobility ecosystem'
    ],
    integrationModel: 'Fuel station rewards, parking payment points, car service check-in, ride-hail integration.',
    revenueModel: 'Fuel station commissions, parking app revenue share, service center partnerships',
    targetPartners: [
      'ENOC/EPPCO',
      'ADNOC',
      'Emarat',
      'RTA Parking (mParking)',
      'Careem',
      'Uber',
      'Yellow Door (car services)',
      'Al-Futtaim Motors'
    ],
    pitchPoints: [
      'Everyday driving rewards',
      'Service reminder + reward combo',
      'Parking made rewarding',
      'Fuel loyalty program',
      'Mobility super-app potential'
    ],
    timeline: 'Fuel outreach: Month 3, Parking: Month 5, Services: Month 7',
    priority: 'medium'
  },
  {
    id: 'cobranded',
    name: 'Co-Branded Products',
    icon: Package,
    color: 'from-[#c9a227] to-amber-600',
    description: 'Partner with FMCG brands, retailers, and manufacturers to include Nuqta coins inside product packaging - buy product X, get Y Nuqta coins inside.',
    whyPartner: [
      'FMCG brands need new ways to differentiate products on shelf',
      'On-pack promotions drive 15-30% sales lift',
      'Brands want digital engagement touchpoints',
      'Consumer data from redemptions is valuable',
      'Repeat purchase incentive built into product'
    ],
    actionPlan: {
      phase1: {
        title: 'FMCG Research (Week 1-4)',
        tasks: [
          'List major FMCG distributors in UAE',
          'Identify brand marketing managers',
          'Create QR code/scratch card integration specs',
          'Prepare ROI calculator for brands',
          'Design sample packaging mockups'
        ]
      },
      phase2: {
        title: 'Brand Outreach (Week 5-12)',
        tasks: [
          'Start with beverage companies (high volume)',
          'Propose pilot with limited SKUs',
          'Negotiate per-code pricing model',
          'Plan packaging integration timeline',
          'Create brand-specific landing pages'
        ]
      },
      phase3: {
        title: 'Scale Production (Week 13-24)',
        tasks: [
          'Roll out across product categories',
          'Build brand dashboard for redemption tracking',
          'Create seasonal campaign packages',
          'Expand to retail private labels',
          'Launch cross-brand promotions'
        ]
      }
    },
    valueForPartner: [
      'Instant product differentiation',
      'Increased purchase motivation',
      'Customer loyalty & repeat purchases',
      'Digital engagement touchpoint',
      'Data on customer behavior',
      'Premium positioning vs competitors'
    ],
    valueForNuqta: [
      'Zero CAC user acquisition',
      'Massive brand visibility',
      'Retail shelf presence',
      'Partnership revenue stream',
      'User onboarding at purchase point',
      'Cross-promotion opportunities'
    ],
    integrationModel: 'QR code inside packaging, scratch card with coin code, NFC tag activation, or direct app scan of product barcode.',
    revenueModel: 'Per-code activation fee (AED 0.50-2), bulk coin purchase by brands, co-marketing fees, data insights subscription',
    targetPartners: [
      // Beverages
      'Coca-Cola UAE',
      'PepsiCo UAE',
      'Red Bull UAE',
      'Masafi Water',
      'Al Ain Water',
      'Mai Dubai',
      'Lacnor Juices',
      'Almarai Juices',
      // Snacks & Food
      'Nestlé Middle East',
      'Mars UAE',
      'Mondelez (Oreo, Cadbury)',
      'Kelloggs Middle East',
      'General Mills UAE',
      'Pringles UAE',
      "Lay's (PepsiCo)",
      'Galaxy Chocolate (Mars)',
      'KitKat (Nestlé)',
      // Dairy & Fresh
      'Almarai',
      'Al Rawabi',
      'Al Ain Dairy',
      'Danone UAE',
      'Arla Foods',
      // Personal Care
      'Unilever UAE (Dove, Lifebuoy)',
      'P&G UAE (Head & Shoulders, Gillette)',
      "L'Oréal Middle East",
      'Nivea UAE',
      'Johnson & Johnson UAE',
      'Colgate-Palmolive UAE',
      // Household
      'Henkel UAE (Persil)',
      'Reckitt UAE (Dettol)',
      'SC Johnson UAE',
      // Local FMCG
      'Al Islami Foods',
      'National Food Products Co (NFPC)',
      'Gulf Food Industries',
      'Agthia Group',
      'Emirates Industries',
      // Electronics & Tech
      'Samsung UAE',
      'Apple UAE (accessories)',
      'Huawei UAE',
      'Xiaomi UAE',
      'Sony Middle East',
      'LG Electronics UAE',
      // Fashion & Accessories
      'Nike Middle East',
      'Adidas UAE',
      'Puma UAE',
      'Under Armour UAE',
      'Swatch Group UAE',
      // Retail Partners (Private Label)
      'Carrefour (MAF brands)',
      'Lulu Private Label',
      'Union Coop brands',
      'Spinneys Private Label',
      // Cosmetics
      'Sephora Middle East',
      'MAC Cosmetics',
      'Maybelline',
      'NYX Cosmetics',
      // Baby & Kids
      'Pampers (P&G)',
      'Huggies (Kimberly-Clark)',
      'Nestlé Baby Food',
      'Aptamil (Danone)',
      // Pet Products
      'Pedigree (Mars)',
      'Whiskas (Mars)',
      'Royal Canin'
    ],
    pitchPoints: [
      'Buy product X, get Y Nuqta coins inside',
      'Instant differentiation from competitors',
      'Drive repeat purchases with coin rewards',
      'Easy QR code integration',
      'Track redemption & engagement',
      'Co-marketing amplification'
    ],
    timeline: 'FMCG outreach: Month 2, Pilot products: Month 4, Scale across categories: Month 6+',
    priority: 'high'
  },
  {
    id: 'sports',
    name: 'Sports & Fitness',
    icon: Dumbbell,
    color: 'from-green-500 to-emerald-600',
    description: 'Partner with gyms, sports clubs, fitness studios, and stadiums for workout rewards and sports engagement.',
    whyPartner: [
      'Gyms have 40-60% annual churn - need retention tools',
      'Fitness chains want to gamify workouts',
      'Sports events need ticket sales boost',
      'Health-conscious users are high spenders',
      'Fitness apps lack local rewards integration'
    ],
    actionPlan: {
      phase1: {
        title: 'Fitness Mapping (Week 1-4)',
        tasks: [
          'List all gym chains and membership sizes',
          'Research fitness app partnerships',
          'Map sports event organizers',
          'Prepare gym partnership pitch',
          'Design workout tracking integration'
        ]
      },
      phase2: {
        title: 'Gym Partnerships (Week 5-12)',
        tasks: [
          'Approach GymNation first (budget-friendly focus)',
          'Propose check-in rewards program',
          'Integrate with gym access systems',
          'Create fitness challenge sponsorships',
          'Launch pilot with 2-3 gym chains'
        ]
      },
      phase3: {
        title: 'Sports Integration (Week 13-20)',
        tasks: [
          'Partner with IPL teams for fan rewards',
          'Integrate with marathon/race events',
          'Create sports venue rewards',
          'Build fitness influencer partnerships',
          'Launch sports season campaigns'
        ]
      }
    },
    valueForPartner: [
      'Member retention & engagement',
      'New member acquisition',
      'Cross-promotion with health brands',
      'Gamified fitness challenges',
      'Premium loyalty offering',
      'Data on member activity patterns'
    ],
    valueForNuqta: [
      'Health-conscious user demographic',
      'High-frequency engagement (daily workouts)',
      'Sports event integration',
      'Fitness influencer network',
      'Premium brand positioning',
      'Recurring membership transactions'
    ],
    integrationModel: 'Gym check-in rewards, class booking points, membership renewal bonuses, fitness challenge rewards, sports event ticket integration.',
    revenueModel: 'Per-member licensing, class booking commissions, event ticket revenue share, sponsored fitness challenges',
    targetPartners: [
      // Gym Chains
      'Fitness First UAE',
      'GymNation',
      'Fitness 360',
      'Gold Gym UAE',
      'UFC Gym',
      'F45 Training UAE',
      'Orangetheory Fitness',
      'Barry\'s Bootcamp Dubai',
      'Flywheel Sports',
      'Core Direction',
      // Sports Clubs
      'Dubai Sports City',
      'Al Wasl Sports Club',
      'Sharjah Sports Club',
      'Al Ain Sports Club',
      'Abu Dhabi Sports Council',
      'Dubai Sports Council',
      // Yoga & Wellness Studios
      'Yoga House Dubai',
      'The Yoga Studio',
      'Zen Yoga',
      'Breathe Pilates',
      'Exhale Pilates',
      // Sports Facilities
      'Hamdan Sports Complex',
      'Dubai World Trade Centre Sports',
      'Meydan Racecourse',
      'Dubai Autodrome',
      'Yas Marina Circuit',
      // Sports Teams & Events
      'IPL Teams (MI Emirates, Dubai Capitals)',
      'ILT20 Cricket League',
      'UAE Pro League Football',
      'Dubai Marathon',
      'Abu Dhabi Grand Prix',
      'Dubai Tennis Championships',
      'DP World Tour Golf',
      // Swimming & Aquatics
      'Hamdan Bin Mohammed Heritage Center',
      'Al Mamzar Beach Park',
      'Wild Wadi Waterpark',
      'Aquaventure Waterpark',
      // Recreation Clubs
      'Dubai Creek Golf & Yacht Club',
      'Emirates Golf Club',
      'Jumeirah Golf Estates',
      'Abu Dhabi Golf Club',
      'The Address Montgomerie'
    ],
    pitchPoints: [
      'Reward members for staying fit',
      'Gamify fitness with coin rewards',
      'Sports event ticket integration',
      'Fitness challenge sponsorships',
      'Premium health-focused demographic',
      'High engagement frequency'
    ],
    timeline: 'Gym outreach: Month 2, Pilot fitness chain: Month 4, Sports events: Month 6',
    priority: 'high'
  },
  {
    id: 'entertainment',
    name: 'Entertainment & Leisure',
    icon: Ticket,
    color: 'from-pink-500 to-rose-600',
    description: 'Partner with theme parks, cinemas, attractions, and entertainment venues for leisure rewards.',
    whyPartner: [
      'Theme parks want to increase repeat visits (avg 1.5x/year)',
      'Cinemas need loyalty as streaming grows',
      'Attractions compete for tourist spending',
      'Off-peak capacity is underutilized (weekday, summer)',
      'Annual pass holders are most valuable customers'
    ],
    actionPlan: {
      phase1: { title: 'Entertainment Mapping (Week 1-4)', tasks: ['List all theme parks and attractions', 'Map cinema chains and loyalty programs', 'Research tourist attraction patterns', 'Prepare entertainment pitch deck', 'Identify partnership contacts'] },
      phase2: { title: 'Theme Park Outreach (Week 5-12)', tasks: ['Start with Dubai Parks (multiple parks)', 'Propose visit frequency rewards', 'Integrate with ticketing systems', 'Create annual pass bonuses', 'Launch cinema partnership pilot'] },
      phase3: { title: 'Full Entertainment (Week 13-20)', tasks: ['Expand to all major attractions', 'Build tourism welcome program', 'Create family package deals', 'Partner with event venues', 'Launch entertainment super-rewards'] }
    },
    valueForPartner: [
      'Increase visit frequency',
      'Drive off-peak attendance',
      'Bundle ticket + F&B sales',
      'Build customer loyalty',
      'Premium experience differentiation',
      'Data on visitor preferences'
    ],
    valueForNuqta: [
      'Family & tourist demographic',
      'High-value transactions',
      'Weekend & holiday engagement',
      'Tourism market access',
      'Experience-based rewards',
      'Social sharing moments'
    ],
    integrationModel: 'Ticket purchase rewards, in-park spending points, annual pass bonuses, group booking incentives, experience upgrades.',
    revenueModel: 'Ticket booking commissions, in-park transaction fees, annual pass revenue share, sponsored experiences',
    targetPartners: [
      // Theme Parks
      'Dubai Parks and Resorts (Motiongate, Legoland, Bollywood Parks)',
      'IMG Worlds of Adventure',
      'Ferrari World Abu Dhabi',
      'Yas Waterworld',
      'Warner Bros. World Abu Dhabi',
      'SeaWorld Abu Dhabi',
      'Global Village',
      'Dubai Miracle Garden',
      'Dubai Butterfly Garden',
      // Cinemas
      'VOX Cinemas',
      'Reel Cinemas',
      'Novo Cinemas',
      'Roxy Cinemas',
      'Cinemacity',
      // Attractions
      'Burj Khalifa At The Top',
      'Dubai Frame',
      'Museum of the Future',
      'Ain Dubai',
      'Dubai Aquarium & Underwater Zoo',
      'The Green Planet',
      'Madame Tussauds Dubai',
      'Sky Views Dubai',
      'XLine Dubai Marina',
      'The View at The Palm',
      // Entertainment Venues
      'Topgolf Dubai',
      'iFLY Dubai',
      'Hub Zero',
      'VR Park Dubai Mall',
      'Bounce Dubai',
      'Trampo Extreme',
      'Ski Dubai',
      'Snow Abu Dhabi',
      // Concert & Event Venues
      'Coca-Cola Arena',
      'Etihad Arena',
      'Dubai Opera',
      'Dubai World Trade Centre',
      'Expo City Dubai',
      // Arcades & Gaming
      'Magic Planet',
      'Fun City',
      'Fabyland',
      'Adventure HQ',
      // Escape Rooms & Experiences
      'Escape Hunt Dubai',
      'Brain Game Dubai',
      'The Escape Game Dubai'
    ],
    pitchPoints: [
      'Reward every visit & experience',
      'Drive repeat visitation',
      'Family entertainment package deals',
      'Tourism integration',
      'Special event ticket access',
      'Annual pass loyalty program'
    ],
    timeline: 'Theme park outreach: Month 3, Cinema chains: Month 4, Attractions: Month 5',
    priority: 'high'
  },
  {
    id: 'fooddelivery',
    name: 'Food Delivery & Quick Commerce',
    icon: UtensilsCrossed,
    color: 'from-orange-500 to-red-600',
    description: 'Partner with food delivery aggregators, dark stores, and quick commerce platforms for ordering rewards.',
    whyPartner: [
      'Delivery apps have 20-30% monthly churn - need retention',
      'Order frequency is key metric for food delivery',
      'Quick commerce is fastest growing segment',
      'Restaurants want more visibility on platforms',
      'Subscription models need loyalty enhancement'
    ],
    actionPlan: {
      phase1: { title: 'Delivery Mapping (Week 1-4)', tasks: ['Analyze Talabat, Deliveroo market share', 'Map restaurant chain partnerships', 'Research quick commerce growth', 'Prepare aggregator pitch', 'Design order reward mechanics'] },
      phase2: { title: 'Platform Partnerships (Week 5-12)', tasks: ['Approach Talabat first (largest)', 'Propose order completion rewards', 'Integrate with app SDK', 'Create restaurant-specific bonuses', 'Launch pilot with select restaurants'] },
      phase3: { title: 'Scale Delivery (Week 13-20)', tasks: ['Expand to all major platforms', 'Add quick commerce integration', 'Create meal subscription rewards', 'Partner with cloud kitchens', 'Launch food festival campaigns'] }
    },
    valueForPartner: [
      'Increase order frequency',
      'Reduce customer churn',
      'Higher average order value',
      'Premium tier differentiation',
      'Cross-platform loyalty',
      'Shared customer insights'
    ],
    valueForNuqta: [
      'High-frequency transactions',
      'Young urban demographic',
      'Restaurant network access',
      'Data on food preferences',
      'Daily engagement opportunity',
      'Massive order volume'
    ],
    integrationModel: 'Order completion rewards, restaurant-specific bonuses, delivery subscription perks, quick commerce points, referral incentives.',
    revenueModel: 'Per-order commission, subscription revenue share, restaurant partnership fees, data insights',
    targetPartners: [
      // Food Delivery Platforms
      'Talabat',
      'Deliveroo UAE',
      'Careem Food',
      'Zomato UAE',
      'Uber Eats UAE',
      'Hunger Station',
      // Quick Commerce
      'Noon Minutes',
      'Talabat Mart',
      'Careem Quik',
      'Deliveroo Hop',
      'InstaShop',
      'El Grocer',
      // Cloud Kitchens
      'Kitopi',
      'Sweetheart Kitchen',
      'The Lighthouse Kitchen',
      'Kitch',
      // Meal Subscriptions
      'Kcal Extra',
      'Right Bite',
      'Eat Clean',
      'Fresh Dubai',
      'Calorie Perfect',
      // Restaurant Chains (Delivery Focus)
      'McDonald\'s UAE',
      'KFC UAE',
      'Pizza Hut UAE',
      'Subway UAE',
      'Papa John\'s UAE',
      'Hardee\'s UAE',
      'Texas Chicken UAE',
      'Popeyes UAE',
      'Five Guys UAE',
      'Shake Shack UAE',
      // Local Chains
      'Al Mallah',
      'Operation Falafel',
      'Ravi Restaurant',
      'Zaatar W Zeit',
      'Manoushe Street',
      'Salt',
      'Pickl',
      'Street Café'
    ],
    pitchPoints: [
      'Reward every order placed',
      'Integration with existing apps',
      'Restaurant-specific promotions',
      'Subscription tier enhancement',
      'High-frequency daily orders',
      'Young urban demographic'
    ],
    timeline: 'Aggregator outreach: Month 2, Cloud kitchen integration: Month 4, Restaurant chains: Month 5',
    priority: 'high'
  },
  {
    id: 'fintech',
    name: 'Fintech & Digital Wallets',
    icon: Wallet,
    color: 'from-violet-500 to-purple-600',
    description: 'Partner with BNPL providers, digital wallets, and fintech apps for payment and savings rewards.',
    whyPartner: [
      'BNPL providers need loyalty to compete (Tabby vs Tamara)',
      'Digital wallets want increased transaction volume',
      'Neobanks need differentiation from traditional banks',
      'Investment apps want to gamify savings',
      'Remittance services need customer retention'
    ],
    actionPlan: {
      phase1: { title: 'Fintech Mapping (Week 1-4)', tasks: ['List all BNPL and wallet providers', 'Research neobank features', 'Map investment platform partnerships', 'Prepare fintech pitch', 'Design transaction reward mechanics'] },
      phase2: { title: 'BNPL Partnerships (Week 5-12)', tasks: ['Approach Tabby first (largest BNPL)', 'Propose purchase completion rewards', 'Integrate with checkout SDKs', 'Create savings milestone bonuses', 'Launch wallet top-up rewards'] },
      phase3: { title: 'Scale Fintech (Week 13-20)', tasks: ['Expand to all fintech platforms', 'Add investment rewards', 'Create remittance bonuses', 'Partner with crypto platforms', 'Launch financial wellness campaigns'] }
    },
    valueForPartner: [
      'Increase transaction volume',
      'User acquisition support',
      'Differentiated rewards offering',
      'Cross-promotion opportunities',
      'Higher customer lifetime value',
      'Engagement beyond payments'
    ],
    valueForNuqta: [
      'Payment ecosystem integration',
      'BNPL user acquisition',
      'Fintech credibility',
      'Transaction data access',
      'Young digital-native users',
      'Alternative payment rails'
    ],
    integrationModel: 'BNPL purchase rewards, wallet top-up bonuses, savings milestone rewards, investment returns enhancement, referral incentives.',
    revenueModel: 'Transaction fees, BNPL commissions, referral fees, co-branded product revenue',
    targetPartners: [
      // BNPL Providers
      'Tabby',
      'Tamara',
      'Spotii',
      'Postpay',
      'Cashew',
      'Tappay',
      'Dibsy',
      // Digital Wallets
      'PayBy',
      'Payit (FAB)',
      'e& money (Etisalat Wallet)',
      'Beam Wallet',
      'NowNow Pay',
      'BOB Finance',
      // Neobanks
      'Wio Bank',
      'Zand Bank',
      'YAP',
      'Liv. (Emirates NBD)',
      'Mashreq Neo',
      // Investment Platforms
      'Sarwa',
      'StashAway UAE',
      'Baraka',
      'Saxo Bank UAE',
      'Interactive Brokers UAE',
      // Crypto Platforms
      'BitOasis',
      'Rain Financial',
      'Binance MENA',
      'CoinMena',
      // Remittance
      'UAE Exchange',
      'Al Ansari Exchange',
      'Al Rostamani Exchange',
      'Wise (TransferWise)',
      'Remitly',
      // Insurance Tech
      'YallaCompare',
      'Bayzat',
      'Democrance',
      'Aon UAE Digital'
    ],
    pitchPoints: [
      'Enhance BNPL user loyalty',
      'Wallet transaction rewards',
      'Savings milestone bonuses',
      'Cross-platform integration',
      'Young digital-first audience',
      'Financial wellness positioning'
    ],
    timeline: 'BNPL outreach: Month 2, Wallet integration: Month 4, Investment platforms: Month 6',
    priority: 'high'
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Platforms',
    icon: ShoppingCart,
    color: 'from-blue-500 to-cyan-600',
    description: 'Partner with online marketplaces and e-commerce platforms for shopping rewards.',
    whyPartner: [
      'E-commerce needs loyalty as customer acquisition costs rise',
      'Noon and Amazon compete intensely - differentiation matters',
      'Premium memberships need added value',
      'Flash sales need urgency drivers',
      'Customer reviews need incentives'
    ],
    actionPlan: {
      phase1: { title: 'E-commerce Mapping (Week 1-4)', tasks: ['List major e-commerce platforms', 'Research loyalty program gaps', 'Map category-specific platforms', 'Prepare e-commerce pitch', 'Design purchase reward mechanics'] },
      phase2: { title: 'Platform Partnerships (Week 5-12)', tasks: ['Approach Noon first (UAE-based)', 'Propose purchase completion rewards', 'Integrate with checkout flow', 'Create category-specific bonuses', 'Launch review incentive program'] },
      phase3: { title: 'Scale E-commerce (Week 13-20)', tasks: ['Expand to all major platforms', 'Add premium membership integration', 'Create flash sale point multipliers', 'Partner with niche e-commerce', 'Launch seasonal shopping campaigns'] }
    },
    valueForPartner: [
      'Increase purchase frequency',
      'Drive higher basket value',
      'Customer retention tool',
      'Premium membership enhancement',
      'Cross-category shopping incentives',
      'Competitive differentiation'
    ],
    valueForNuqta: [
      'Online shopping demographic',
      'High transaction values',
      'Category diversity exposure',
      'Tech-savvy user base',
      'E-commerce data insights',
      'Massive scale potential'
    ],
    integrationModel: 'Purchase rewards, category-specific bonuses, membership perks, flash sale incentives, review rewards, referral bonuses.',
    revenueModel: 'Commission on transactions, membership enhancement fees, sponsored category promotions, affiliate revenue',
    targetPartners: [
      // Major Marketplaces
      'Noon',
      'Amazon.ae',
      'Namshi',
      'Ounass',
      'The Luxury Closet',
      'Dubizzle/OLX',
      // Fashion E-commerce
      'Farfetch Middle East',
      '6thStreet',
      'Brands For Less Online',
      'Styli',
      'Sivvi (now Noon)',
      'Modanisa',
      // Electronics
      'Sharaf DG Online',
      'Jumbo Electronics',
      'Emax',
      'Virgin Megastore Online',
      'Xcite (Alghanim)',
      // Home & Furniture
      'Home Centre Online',
      'IKEA UAE Online',
      'Home Box',
      'Pan Emirates Online',
      'West Elm Middle East',
      'Pottery Barn Middle East',
      // Beauty & Personal Care
      'Faces (Chalhoub)',
      'Sephora Middle East Online',
      'Boots Online UAE',
      'Lifestyle Online',
      'Bath & Body Works UAE',
      // Grocery E-commerce
      'Kibsons',
      'Lulu Hypermarket Online',
      'Carrefour Online',
      'Amazon Fresh UAE',
      'Noon Daily',
      // Baby & Kids
      'Babyshop Online',
      'Mumzworld',
      'PatPat UAE',
      'First Cry UAE',
      // Sports & Outdoors
      'Sun & Sand Sports Online',
      'Go Sport Online',
      'Decathlon UAE Online',
      // Pet Supplies
      'Petzone',
      'PetShop.ae',
      'Puppies.ae'
    ],
    pitchPoints: [
      'Reward every online purchase',
      'Category-specific bonus campaigns',
      'Premium membership integration',
      'Flash sale point multipliers',
      'Review & rating incentives',
      'Cross-platform shopping rewards'
    ],
    timeline: 'Major platforms: Month 2, Category specialists: Month 4, Niche e-commerce: Month 6',
    priority: 'high'
  },
  {
    id: 'government',
    name: 'Government Services',
    icon: Landmark,
    color: 'from-slate-600 to-slate-800',
    description: 'Partner with government entities for service completion rewards and civic engagement.',
    whyPartner: [
      'UAE government prioritizes smart city and digital adoption',
      'Sustainability goals need citizen incentives (recycling, EV)',
      'Bill payments are recurring high-value transactions',
      'Government apps need engagement beyond mandatory use',
      'Civic engagement aligns with national vision'
    ],
    actionPlan: {
      phase1: { title: 'Government Research (Week 1-8)', tasks: ['Study UAE government digital strategy', 'Map Dubai Smart Government initiatives', 'Identify sustainability reward opportunities', 'Prepare government partnership proposal', 'Connect with government accelerators'] },
      phase2: { title: 'Initial Outreach (Week 9-20)', tasks: ['Approach Dubai Digital first', 'Propose bill payment rewards pilot', 'Present sustainability incentive concept', 'Explore RTA parking integration', 'Plan DEWA bill reward program'] },
      phase3: { title: 'Government Integration (Week 21-40)', tasks: ['Pilot with one government entity', 'Build government dashboard', 'Create civic engagement rewards', 'Expand to other emirates', 'Launch sustainability campaigns'] }
    },
    valueForPartner: [
      'Encourage digital adoption',
      'Service completion incentives',
      'Citizen engagement boost',
      'Smart city initiatives support',
      'Sustainability goal alignment',
      'Public service modernization'
    ],
    valueForNuqta: [
      'Entire population access',
      'Mandatory transaction integration',
      'Government credibility association',
      'High-trust partnership',
      'Recurring service transactions',
      'Strategic positioning'
    ],
    integrationModel: 'Service fee payment rewards, license renewal bonuses, visa processing incentives, utility bill payment points, fine payment processing.',
    revenueModel: 'Service integration fees, payment processing revenue, government grants for digital adoption, sustainability rewards funding',
    targetPartners: [
      // Dubai Government
      'Dubai Digital (formerly Smart Dubai)',
      'RTA Dubai (Roads & Transport Authority)',
      'DEWA (Dubai Electricity & Water)',
      'Dubai Municipality',
      'Dubai Economy & Tourism (DET)',
      'Dubai Health Authority (DHA)',
      'Dubai Land Department',
      'Dubai Courts',
      'Dubai Police',
      'GDRFA Dubai (Immigration)',
      'Knowledge & Human Development Authority',
      'Dubai Culture',
      // Abu Dhabi Government
      'Abu Dhabi Digital Authority (ADDA)',
      'Department of Municipalities & Transport',
      'Abu Dhabi Distribution Company (ADDC)',
      'Abu Dhabi Police',
      'ICP (Federal Authority for Identity)',
      'Abu Dhabi Health Services (SEHA)',
      'Abu Dhabi Housing Authority',
      'Department of Culture & Tourism',
      // Federal Government
      'MOHRE (Ministry of Human Resources)',
      'MOI (Ministry of Interior)',
      'MOHAP (Ministry of Health)',
      'Ministry of Finance',
      'Ministry of Economy',
      'Federal Tax Authority',
      'Emirates ID Authority',
      'UAE Space Agency',
      // Other Emirates
      'Sharjah Municipality',
      'Ajman Municipality',
      'RAK Municipality',
      'Fujairah Municipality',
      'Umm Al Quwain Municipality',
      // Utilities & Services
      'SEWA (Sharjah)',
      'FEWA (Federal)',
      'Etihad Water & Electricity',
      'Emirates Post',
      'Emirates Transport'
    ],
    pitchPoints: [
      'Incentivize digital service adoption',
      'Bill payment rewards program',
      'License renewal incentives',
      'Support smart city vision',
      'Sustainability aligned rewards',
      'Citizen engagement platform'
    ],
    timeline: 'Initial discussions: Month 4, Pilot service: Month 8, Expansion: Month 12',
    priority: 'medium'
  },
  {
    id: 'supermarkets',
    name: 'Supermarkets & Grocery',
    icon: Store,
    color: 'from-green-600 to-lime-600',
    description: 'Partner with supermarket chains and grocery retailers for shopping rewards and weekly essentials.',
    whyPartner: [
      'Grocery is weekly recurring transaction - high frequency',
      'Supermarkets compete intensely on loyalty (Carrefour vs Lulu)',
      'Private label products need promotion incentives',
      'Basket size increase is key metric',
      'Customer data for personalization is valuable'
    ],
    actionPlan: {
      phase1: { title: 'Grocery Mapping (Week 1-4)', tasks: ['List all supermarket chains', 'Analyze existing loyalty programs (Share, Lulu)', 'Map supplier partnership opportunities', 'Prepare supermarket pitch', 'Design receipt scanning mechanics'] },
      phase2: { title: 'Supermarket Partnerships (Week 5-12)', tasks: ['Approach Carrefour MAF first (largest)', 'Propose receipt scanning rewards', 'Integrate with POS systems', 'Create private label bonuses', 'Launch category promotions'] },
      phase3: { title: 'Scale Grocery (Week 13-20)', tasks: ['Expand to all major chains', 'Add supplier-funded rewards', 'Create weekly essential bundles', 'Partner with convenience stores', 'Launch seasonal grocery campaigns'] }
    },
    valueForPartner: [
      'Increase basket size',
      'Drive visit frequency',
      'Reduce price sensitivity',
      'Private label promotion',
      'Customer data enrichment',
      'Competitive loyalty advantage'
    ],
    valueForNuqta: [
      'Weekly essential shopping integration',
      'High-frequency transactions',
      'All demographic reach',
      'Massive transaction volume',
      'Everyday engagement',
      'Grocery data insights'
    ],
    integrationModel: 'Receipt scanning rewards, loyalty card integration, category bonus points, weekly deals, private label incentives.',
    revenueModel: 'Transaction commissions, category sponsorships, supplier-funded rewards, data monetization',
    targetPartners: [
      // Hypermarkets
      'Carrefour (Majid Al Futtaim)',
      'Lulu Hypermarket',
      'Union Coop',
      'Sharjah Coop',
      'Abu Dhabi Coop',
      'Al Ain Coop',
      'Nesto Hypermarket',
      // Premium Supermarkets
      'Spinneys',
      'Waitrose',
      'Choithrams',
      'Grandiose',
      'Organic Foods & Café',
      // Discount & Value
      'Viva Supermarket',
      'Al Maya Supermarket',
      'Fathima Supermarket',
      'West Zone Supermarket',
      'Day to Day',
      'Panda Retail (1&2)',
      // Specialty & Organic
      'Greenheart Organic Farms',
      'Ripe Market',
      'Oasis Food Market',
      'The Farm',
      'Bio-One',
      // Convenience Stores
      'Zoom (ENOC)',
      'ADNOC On The Go',
      'Emarat Fresh',
      'Emirates Coop Express',
      // Wholesale & Cash & Carry
      'Al Aweer Market',
      'Waterfront Market',
      'Deira Fish Market',
      'Fruit & Vegetable Market'
    ],
    pitchPoints: [
      'Weekly grocery rewards program',
      'Receipt scanning integration',
      'Category-specific promotions',
      'Private label incentives',
      'Basket size optimization',
      'High-frequency engagement'
    ],
    timeline: 'Major chains: Month 2, Premium stores: Month 4, Convenience: Month 5',
    priority: 'high'
  },
  {
    id: 'salons',
    name: 'Salons & Spas',
    icon: Scissors,
    color: 'from-pink-400 to-fuchsia-600',
    description: 'Partner with beauty salons, spas, and wellness centers for grooming and self-care rewards.',
    whyPartner: [
      'Salons have high no-show rates (15-25%) - need incentives',
      'Beauty services are regular recurring appointments',
      'Product sales add 20-30% to service revenue',
      'Women aged 25-45 are high-value spenders',
      'Referral is primary growth channel for salons'
    ],
    actionPlan: {
      phase1: { title: 'Beauty Mapping (Week 1-4)', tasks: ['List major salon chains', 'Map booking platforms (Fresha)', 'Research spa hotel partnerships', 'Prepare salon pitch', 'Design booking reward mechanics'] },
      phase2: { title: 'Salon Partnerships (Week 5-12)', tasks: ['Approach Tips & Toes first (largest chain)', 'Propose appointment completion rewards', 'Integrate with booking systems', 'Create product purchase bonuses', 'Launch referral incentive program'] },
      phase3: { title: 'Scale Beauty (Week 13-20)', tasks: ['Expand to all salon chains', 'Add spa partnerships', 'Create package deal bonuses', 'Partner with booking apps', 'Launch seasonal beauty campaigns'] }
    },
    valueForPartner: [
      'Increase booking frequency',
      'Reduce no-shows',
      'Upsell treatments',
      'Build customer loyalty',
      'Product purchase incentives',
      'Referral program support'
    ],
    valueForNuqta: [
      'Female demographic focus',
      'High-value transactions',
      'Regular appointment frequency',
      'Premium positioning',
      'Beauty influencer network',
      'Luxury service integration'
    ],
    integrationModel: 'Appointment booking rewards, service completion points, product purchase bonuses, package deal incentives, referral rewards.',
    revenueModel: 'Booking commissions, product sales percentage, package deal revenue share, sponsored treatments',
    targetPartners: [
      // Premium Salon Chains
      'Tips & Toes',
      'Sisters Beauty Lounge',
      'The White Room',
      'N.Bar',
      'Pastels Salon',
      'Mirrors Beauty Lounge',
      'The Dollhouse',
      'Lipstick Beauty Lounge',
      // Spa & Wellness
      'Talise Spa (Jumeirah)',
      'Anantara Spa',
      'ShuiQi Spa (Atlantis)',
      'The Spa at Address',
      'DRIFT Beach Spa',
      'Sofitel Spa',
      'CHI The Spa (Shangri-La)',
      // Men Grooming
      'Chaps & Co',
      '1847 Grooming',
      'Barber & Blade',
      'The Grooming Company',
      'ManGroomer',
      'Men Corner',
      // Budget-Friendly
      'Glamour Beauty Salon',
      'Al Anber Ladies Salon',
      'New Looks Salon',
      'Cut & Color',
      // Nail Bars
      'Nails By Nails',
      'Nail Spa',
      'The Nail Room',
      'Polished',
      // Medical Aesthetics
      'Skin & Beauty Clinic',
      'Kaya Skin Clinic',
      'CosmeSurge',
      'American Academy of Cosmetic Surgery',
      'Dubai Cosmetic Surgery',
      // Booking Platforms
      'Fresha UAE',
      'StyleSeat UAE',
      'Booksy UAE',
      'Glossy',
      'Baleen'
    ],
    pitchPoints: [
      'Reward every appointment',
      'Reduce no-show rates',
      'Product purchase incentives',
      'Package deal bonuses',
      'Premium beauty demographic',
      'Referral program integration'
    ],
    timeline: 'Salon chains: Month 2, Spas: Month 4, Booking platforms: Month 5',
    priority: 'medium'
  },
  {
    id: 'education',
    name: 'Education & Learning',
    icon: BookOpen,
    color: 'from-indigo-500 to-blue-600',
    description: 'Partner with ed-tech platforms, language schools, and professional training for learning rewards.',
    whyPartner: [
      'Course completion rates are low (10-15%) - need motivation',
      'Professionals invest in upskilling continuously',
      'Language schools have high competition',
      'Driving schools are mandatory - captive audience',
      'Ed-tech subscription needs retention incentives'
    ],
    actionPlan: {
      phase1: { title: 'Education Mapping (Week 1-4)', tasks: ['List ed-tech platforms with UAE presence', 'Map language schools and test prep centers', 'Research driving school networks', 'Prepare education pitch', 'Design course completion mechanics'] },
      phase2: { title: 'Education Partnerships (Week 5-12)', tasks: ['Approach British Council first', 'Propose course completion rewards', 'Integrate with learning platforms', 'Create certification bonuses', 'Launch study streak incentives'] },
      phase3: { title: 'Scale Education (Week 13-20)', tasks: ['Expand to all education partners', 'Add driving school integration', 'Create professional development programs', 'Partner with corporate training', 'Launch back-to-school campaigns'] }
    },
    valueForPartner: [
      'Increase course completion',
      'Boost enrollment',
      'Student engagement tool',
      'Certification incentives',
      'Referral program support',
      'Learning gamification'
    ],
    valueForNuqta: [
      'Learner demographic',
      'Professional development segment',
      'Recurring subscription revenue',
      'High-intent users',
      'Career-focused positioning',
      'Knowledge economy alignment'
    ],
    integrationModel: 'Course completion rewards, certification bonuses, study streak incentives, referral rewards, subscription renewal points.',
    revenueModel: 'Enrollment commissions, subscription revenue share, certification sponsorships, corporate training fees',
    targetPartners: [
      // Global Ed-Tech (UAE presence)
      'Coursera',
      'Udemy Business',
      'LinkedIn Learning',
      'Skillshare',
      'MasterClass',
      'edX',
      'Khan Academy',
      // Language Schools
      'British Council UAE',
      'Berlitz UAE',
      'Wall Street English',
      'ES Dubai (English Studies)',
      'Inlingua Dubai',
      'Arabic Language Center',
      'Eton Institute',
      // Test Prep
      'IDP Education',
      'Manhattan Review Dubai',
      'Kaplan Test Prep',
      'Princeton Review Dubai',
      'Magoosh',
      // Professional Training
      'PwC Academy',
      'KPMG Learning Academy',
      'Dale Carnegie UAE',
      'Franklin Covey Middle East',
      'MENA Executive Training',
      // Coding & Tech
      'Coding Blocks Dubai',
      'Le Wagon Dubai',
      'General Assembly (online)',
      'Udacity MENA',
      'DataCamp',
      // K-12 Tutoring
      'Tutorhouse',
      'MyPrivateTutor',
      'Superprof UAE',
      'Preply (online)',
      // Driving Schools
      'Emirates Driving Institute',
      'Galadari Motor Driving Centre',
      'Belhasa Driving Center',
      'Dubai Driving Center',
      'Al Ahli Driving School',
      // Music & Arts
      'Dubai Music School',
      'The Music Centre',
      'Melodica Music Academy',
      'Art Jameel',
      'Tashkeel Art Center'
    ],
    pitchPoints: [
      'Reward learning achievements',
      'Course completion incentives',
      'Certification bonuses',
      'Study streak gamification',
      'Professional development positioning',
      'Corporate training integration'
    ],
    timeline: 'Global platforms: Month 3, Language schools: Month 4, Professional training: Month 6',
    priority: 'medium'
  },
  {
    id: 'insurance',
    name: 'Insurance Partners',
    icon: Shield,
    color: 'from-teal-500 to-cyan-600',
    description: 'Partner with insurance providers for premium payment rewards and healthy behavior incentives.',
    whyPartner: [
      'Insurance premiums are annual high-value transactions',
      'Healthy behavior incentives reduce claims costs',
      'Cross-sell opportunities (motor + health)',
      'Customer retention saves acquisition costs',
      'Aggregators need differentiation'
    ],
    actionPlan: {
      phase1: { title: 'Insurance Mapping (Week 1-4)', tasks: ['List major insurers and aggregators', 'Research wellness program integrations', 'Map claims-free incentive programs', 'Prepare insurance pitch', 'Design premium payment mechanics'] },
      phase2: { title: 'Insurance Partnerships (Week 5-16)', tasks: ['Approach Daman first (largest)', 'Propose premium payment rewards', 'Integrate with wellness apps', 'Create claims-free bonuses', 'Launch motor insurance rewards'] },
      phase3: { title: 'Scale Insurance (Week 17-24)', tasks: ['Expand to all insurers', 'Add aggregator partnerships', 'Create healthy behavior tracking', 'Partner with corporate insurance', 'Launch annual renewal campaigns'] }
    },
    valueForPartner: [
      'Reduce customer churn',
      'Encourage healthy behaviors',
      'Premium payment incentives',
      'Claims reduction potential',
      'Cross-sell opportunities',
      'Customer engagement tool'
    ],
    valueForNuqta: [
      'High-value recurring transactions',
      'Annual payment cycles',
      'Premium user demographic',
      'Financial services credibility',
      'Wellness program integration',
      'Long-term customer relationships'
    ],
    integrationModel: 'Premium payment rewards, wellness activity bonuses, claims-free discounts, policy renewal incentives, referral rewards.',
    revenueModel: 'Premium payment commissions, wellness program fees, referral bonuses, co-branded product revenue',
    targetPartners: [
      // Major Insurers
      'Daman (National Health Insurance)',
      'AXA Gulf',
      'Oman Insurance',
      'Orient Insurance',
      'Dubai Insurance',
      'Abu Dhabi National Insurance (ADNIC)',
      'Emirates Insurance',
      'Noor Takaful',
      'Watania Takaful',
      // International Insurers
      'Cigna Global',
      'Allianz Care',
      'MetLife',
      'AIG MEA',
      'Zurich International',
      'Generali',
      'Aetna International',
      // Health Insurance
      'Nextcare (claims admin)',
      'MSH International',
      'Bupa Global',
      'Now Health International',
      // Motor Insurance
      'RSA Insurance',
      'Tokio Marine',
      'Al Wathba Insurance',
      'Insurance House',
      'Adamjee Insurance',
      // Insurance Aggregators
      'YallaCompare',
      'Insurancemarket.ae',
      'BuyAnyInsurance',
      'Policybazaar UAE',
      'Souqalmal',
      // Specialized
      'Takaful Emarat',
      'Islamic Arab Insurance (Salama)',
      'Al Hilal Takaful',
      'Dubai Islamic Insurance (Aman)'
    ],
    pitchPoints: [
      'Premium payment rewards',
      'Healthy behavior incentives',
      'Claims-free bonus points',
      'Policy renewal bonuses',
      'Wellness program integration',
      'Cross-sell opportunities'
    ],
    timeline: 'Major insurers: Month 4, Aggregators: Month 5, Wellness integration: Month 8',
    priority: 'medium'
  },
  {
    id: 'jewelry',
    name: 'Jewelry & Luxury',
    icon: Gem,
    color: 'from-amber-400 to-yellow-600',
    description: 'Partner with gold souks, jewelry retailers, and luxury brands for high-value purchase rewards.',
    whyPartner: [
      'Gold purchases are high-value transactions (AED 5K-50K+)',
      'Wedding season drives 40% of annual jewelry sales',
      'Tourists are major jewelry buyers in Dubai',
      'Gold saving schemes need loyalty integration',
      'Luxury watches have repeat purchase potential'
    ],
    actionPlan: {
      phase1: { title: 'Luxury Mapping (Week 1-4)', tasks: ['List major jewelry chains', 'Map gold souk merchants', 'Research luxury watch retailers', 'Prepare luxury pitch', 'Design high-value transaction rewards'] },
      phase2: { title: 'Jewelry Partnerships (Week 5-12)', tasks: ['Approach Damas first (largest chain)', 'Propose purchase rewards program', 'Integrate with gold saving schemes', 'Create wedding season campaigns', 'Launch tourist welcome bonuses'] },
      phase3: { title: 'Scale Luxury (Week 13-24)', tasks: ['Expand to gold souk merchants', 'Add luxury watch partnerships', 'Create occasion-based rewards', 'Partner with tourist shops', 'Launch Eid and Diwali campaigns'] }
    },
    valueForPartner: [
      'Drive repeat purchases',
      'Seasonal campaign support',
      'Wedding/occasion marketing',
      'Premium customer loyalty',
      'Gold investment incentives',
      'Brand differentiation'
    ],
    valueForNuqta: [
      'High-value transactions',
      'Premium user segment',
      'Gold/asset investment integration',
      'Luxury brand positioning',
      'Occasion-based engagement',
      'Tourist shopping market'
    ],
    integrationModel: 'Purchase rewards, gold saving scheme integration, occasion-based bonuses, investment rewards, repair/service points.',
    revenueModel: 'Transaction commissions, gold scheme partnerships, occasion marketing sponsorships, tourist program fees',
    targetPartners: [
      // Major Jewelry Chains
      'Damas Jewellery',
      'Joyalukkas',
      'Malabar Gold & Diamonds',
      'Kalyan Jewellers',
      'Pure Gold Jewellers',
      'Sky Jewellery',
      'Jawhara Jewellery',
      'Liali Jewellery',
      // Gold Souks
      'Dubai Gold Souk (general integration)',
      'Gold Land Trading',
      'Anjali Jewellers',
      'Kanz Jewels',
      // Luxury Watches
      'Ahmed Seddiqi & Sons',
      'Rivoli Group',
      'Paris Gallery',
      'Hour Choice',
      'Swiss Watch Store',
      // International Luxury
      'Cartier UAE',
      'Tiffany & Co. UAE',
      'Chopard UAE',
      'Bulgari UAE',
      'Van Cleef & Arpels UAE',
      'Piaget UAE',
      'IWC UAE',
      'Rolex (Authorized Dealers)',
      // Silver & Fashion Jewelry
      'Pandora UAE',
      'Swarovski UAE',
      'Tous UAE',
      'Monica Vinader',
      'Missoma',
      // Investment Gold
      'Emirates Gold',
      'Al Etihad Gold Refinery',
      'Dubai Gold & Commodities Exchange',
      'One Gram Gold (digital)',
      // Luxury Fashion
      'Level Shoes',
      'Harvey Nichols Dubai',
      'Bloomingdale\'s Dubai',
      'Galeries Lafayette Dubai',
      'The Dubai Mall Luxury Wing'
    ],
    pitchPoints: [
      'High-value purchase rewards',
      'Gold investment scheme integration',
      'Wedding season campaigns',
      'Tourist shopping incentives',
      'Luxury brand partnerships',
      'Premium customer acquisition'
    ],
    timeline: 'Major chains: Month 3, Gold souk: Month 5, Luxury brands: Month 8',
    priority: 'medium'
  },
  {
    id: 'events',
    name: 'Events & Ticketing',
    icon: Ticket,
    color: 'from-purple-500 to-violet-600',
    description: 'Partner with event platforms, ticketing services, and live experiences for entertainment rewards.',
    whyPartner: [
      'Event ticketing needs early bird sales incentives',
      'Season passes create recurring revenue opportunity',
      'VIP upgrades have high margins',
      'Event check-in creates engagement touchpoint',
      'Dubai events calendar is packed year-round'
    ],
    actionPlan: {
      phase1: { title: 'Events Mapping (Week 1-4)', tasks: ['List ticketing platforms and market share', 'Map major event organizers', 'Research sports event partnerships', 'Prepare events pitch', 'Design ticket purchase mechanics'] },
      phase2: { title: 'Ticketing Partnerships (Week 5-12)', tasks: ['Approach Platinumlist first', 'Propose ticket purchase rewards', 'Integrate with booking systems', 'Create early bird bonuses', 'Launch VIP upgrade incentives'] },
      phase3: { title: 'Scale Events (Week 13-20)', tasks: ['Expand to all ticketing platforms', 'Add sports event partnerships', 'Create season pass rewards', 'Partner with venues', 'Launch seasonal event campaigns'] }
    },
    valueForPartner: [
      'Increase ticket sales',
      'Drive early bird bookings',
      'Build event loyalty',
      'Premium experience upsells',
      'Reduce ticket resale',
      'Audience data enrichment'
    ],
    valueForNuqta: [
      'Experience-seekers demographic',
      'High-value transactions',
      'Social event engagement',
      'Entertainment positioning',
      'VIP experience access',
      'Seasonal event integration'
    ],
    integrationModel: 'Ticket purchase rewards, early bird bonuses, VIP upgrade incentives, season pass perks, event check-in points.',
    revenueModel: 'Ticket commissions, premium experience fees, sponsorship revenue, season pass partnerships',
    targetPartners: [
      // Ticketing Platforms
      'Platinumlist',
      'Dubai Calendar',
      'Virgin Tickets (Virgin Megastore)',
      'BookMyShow UAE',
      'Time Out Tickets',
      'Fever UAE',
      // Major Event Organizers
      'Done Events',
      'Flash Entertainment',
      'Louder Entertainment',
      'Blended',
      'Solutions Entertainment',
      // Music Festivals & Concerts
      'Dubai Jazz Festival',
      'RedFest DXB',
      'Sole DXB',
      'Hype Festival',
      'Elrow Dubai',
      // Sports Events
      'Dubai World Cup (horse racing)',
      'Abu Dhabi Grand Prix',
      'Dubai Tennis Championships',
      'DP World Tour Golf',
      'Dubai Marathon',
      'Ironman 70.3 Dubai',
      'Standard Chartered Marathon',
      // Cultural Events
      'Dubai Opera Events',
      'Sharjah Light Festival',
      'Abu Dhabi Art Fair',
      'Art Dubai',
      'Dubai Comedy Festival',
      'Emirates Airline Festival of Literature',
      // Food & Lifestyle Events
      'Dubai Food Festival',
      'Taste of Dubai',
      'Dubai Shopping Festival',
      'Dubai Summer Surprises',
      'Abu Dhabi Food Festival',
      // Exhibition & Trade Shows
      'Expo City Dubai Events',
      'Dubai World Trade Centre',
      'Abu Dhabi National Exhibition Centre',
      'Sharjah Expo Centre',
      // Seasonal
      'Global Village',
      'Dubai Garden Glow',
      'Winter Wonderland',
      'Mother of the Nation Festival',
      'Sheikh Zayed Heritage Festival'
    ],
    pitchPoints: [
      'Ticket purchase rewards',
      'Early bird bonus incentives',
      'VIP experience upgrades',
      'Season pass integration',
      'Event check-in points',
      'Exclusive pre-sale access'
    ],
    timeline: 'Ticketing platforms: Month 2, Event organizers: Month 4, Sports events: Month 6',
    priority: 'high'
  }
];

const partnershipFramework = {
  discovery: ['Market research', 'Partner identification', 'Competitor analysis', 'Value proposition development'],
  outreach: ['Executive contact mapping', 'Introduction meetings', 'Partnership deck customization', 'Initial proposal'],
  negotiation: ['Term sheet development', 'Legal review', 'Commercial alignment', 'Technical assessment'],
  implementation: ['Integration planning', 'Technical development', 'Testing & QA', 'Launch preparation'],
  launch: ['Soft launch', 'Marketing activation', 'Performance monitoring', 'Optimization']
};

export default function PartnershipsPage() {
  const [expandedPartnership, setExpandedPartnership] = useState<string>('banks');

  const priorityColors = {
    high: 'bg-red-600/30 text-red-300 border-red-500',
    medium: 'bg-amber-600/30 text-amber-300 border-amber-500',
    low: 'bg-slate-600/30 text-slate-300 border-slate-400'
  };

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Header */}
      <header className="border-b border-[#c9a227]/30 bg-[#0a1628]/95 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c9a227] to-[#e8c547] flex items-center justify-center">
                <span className="text-black font-bold text-xl">N</span>
              </div>
              <span className="text-2xl font-bold text-white">Nuqta</span>
            </Link>
            <span className="text-[#c9a227]">|</span>
            <span className="text-white font-medium">Partnership Playbook</span>
          </div>
          <Link href="/gtm" className="flex items-center gap-2 text-white hover:text-[#c9a227] transition-colors bg-white/10 px-4 py-2 rounded-lg">
            <ArrowLeft size={16} />
            <span className="text-sm font-medium">GTM Strategy</span>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 rounded-full border border-[#c9a227]/50 mb-4">
            <Handshake className="text-[#c9a227]" size={16} />
            <span className="text-[#c9a227] text-sm font-bold">Strategic Partnerships</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Partnership <span className="text-[#c9a227]">Playbook</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Strategic partnerships to accelerate growth, expand distribution, and create ecosystem value.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-blue-600/20 rounded-xl p-5 border-2 border-blue-500/50 text-center">
            <Building2 className="text-blue-400 mx-auto mb-2" size={28} />
            <div className="text-3xl font-black text-white">21</div>
            <div className="text-blue-300 text-sm font-medium">Partnership Types</div>
          </div>
          <div className="bg-green-600/20 rounded-xl p-5 border-2 border-green-500/50 text-center">
            <Users className="text-green-400 mx-auto mb-2" size={28} />
            <div className="text-3xl font-black text-white">800+</div>
            <div className="text-green-300 text-sm font-medium">Target Partners</div>
          </div>
          <div className="bg-purple-600/20 rounded-xl p-5 border-2 border-purple-500/50 text-center">
            <TrendingUp className="text-purple-400 mx-auto mb-2" size={28} />
            <div className="text-3xl font-black text-white">10x</div>
            <div className="text-purple-300 text-sm font-medium">Growth Multiplier</div>
          </div>
          <div className="bg-[#c9a227]/20 rounded-xl p-5 border-2 border-[#c9a227]/50 text-center">
            <DollarSign className="text-[#c9a227] mx-auto mb-2" size={28} />
            <div className="text-3xl font-black text-white">B2B</div>
            <div className="text-[#c9a227] text-sm font-medium">Revenue Stream</div>
          </div>
        </div>

        {/* Partnership Framework CTA */}
        <Link
          href="/partnership-framework"
          className="block mb-12 group"
        >
          <div className="bg-gradient-to-r from-emerald-600/20 via-[#c9a227]/20 via-blue-600/20 to-purple-600/20 border-2 border-[#c9a227]/50 rounded-2xl p-6 hover:border-[#c9a227] transition-all hover:scale-[1.02]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-[#c9a227] to-[#e8c547] rounded-xl">
                  <Layers className="text-black" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-3">
                    4-Level Partnership Framework
                    <span className="px-3 py-1 bg-[#c9a227]/30 border border-[#c9a227] rounded-full text-xs text-[#c9a227] font-bold">Strategic</span>
                  </h3>
                  <p className="text-slate-200 mt-1">
                    🟢 Distribution → 🟡 Merchant → 🔵 Financial → 🟣 Strategic — A structured approach to building partnerships
                  </p>
                </div>
              </div>
              <ArrowRight className="text-[#c9a227] group-hover:translate-x-2 transition-transform" size={24} />
            </div>
          </div>
        </Link>

        {/* Partnership Cards */}
        <div className="space-y-4 mb-12">
          {partnerships.map(partnership => {
            const Icon = partnership.icon;
            const isExpanded = expandedPartnership === partnership.id;

            return (
              <div key={partnership.id} className="bg-slate-800/50 rounded-xl border-2 border-slate-600/50 overflow-hidden hover:border-[#c9a227]/50 transition-all">
                <button
                  onClick={() => setExpandedPartnership(isExpanded ? '' : partnership.id)}
                  className="w-full p-5 flex items-center justify-between hover:bg-slate-700/30 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${partnership.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="text-white" size={26} />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-white">{partnership.name}</h3>
                      <p className="text-slate-300 text-sm">{partnership.targetPartners.length} target partners</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-bold border-2 ${priorityColors[partnership.priority]}`}>
                      {partnership.priority.toUpperCase()}
                    </span>
                    {isExpanded ? <ChevronDown className="text-[#c9a227]" size={24} /> : <ChevronRight className="text-white" size={24} />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="border-t-2 border-[#c9a227]/30 p-6 space-y-8 bg-slate-900/80">
                    <p className="text-white text-lg leading-relaxed bg-slate-800/50 p-4 rounded-xl border border-slate-600">{partnership.description}</p>

                    {/* Why They Will Partner */}
                    <div className="bg-gradient-to-br from-[#c9a227]/15 to-orange-600/15 rounded-xl p-6 border-2 border-[#c9a227]/50">
                      <h4 className="font-black text-[#c9a227] mb-4 flex items-center gap-2 text-lg">
                        <Target size={22} />
                        Why They Will Partner With Nuqta
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {partnership.whyPartner.map((reason, idx) => (
                          <li key={idx} className="flex items-start gap-3 bg-slate-800/80 rounded-lg p-4 border border-slate-600">
                            <CheckCircle className="text-[#c9a227] flex-shrink-0 mt-0.5" size={20} />
                            <span className="text-white text-sm font-medium">{reason}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Plan */}
                    <div className="bg-gradient-to-br from-blue-600/15 to-cyan-600/15 rounded-xl p-6 border-2 border-blue-500/50">
                      <h4 className="font-black text-blue-400 mb-6 flex items-center gap-2 text-lg">
                        <Calendar size={22} />
                        Action Plan - Step by Step
                      </h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        {Object.entries(partnership.actionPlan).map(([phase, data], idx) => (
                          <div key={phase} className="bg-slate-800/80 rounded-xl p-5 border-2 border-blue-500/30">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-black text-lg shadow-lg">
                                {idx + 1}
                              </div>
                              <h5 className="text-white font-bold text-sm">{data.title}</h5>
                            </div>
                            <ul className="space-y-3">
                              {data.tasks.map((task, tidx) => (
                                <li key={tidx} className="flex items-start gap-2 text-sm">
                                  <span className="text-blue-400 mt-1 font-bold">•</span>
                                  <span className="text-white">{task}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Value Exchange */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-600/15 rounded-xl p-5 border-2 border-green-500/50">
                        <h4 className="font-black text-green-400 mb-4 flex items-center gap-2 text-lg">
                          <Gift size={20} />
                          Value for Partner
                        </h4>
                        <ul className="space-y-3">
                          {partnership.valueForPartner.map((v, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm bg-slate-800/50 p-3 rounded-lg">
                              <CheckCircle className="text-green-400 flex-shrink-0 mt-0.5" size={18} />
                              <span className="text-white font-medium">{v}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-purple-600/15 rounded-xl p-5 border-2 border-purple-500/50">
                        <h4 className="font-black text-purple-400 mb-4 flex items-center gap-2 text-lg">
                          <Star size={20} />
                          Value for Nuqta
                        </h4>
                        <ul className="space-y-3">
                          {partnership.valueForNuqta.map((v, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm bg-slate-800/50 p-3 rounded-lg">
                              <CheckCircle className="text-purple-400 flex-shrink-0 mt-0.5" size={18} />
                              <span className="text-white font-medium">{v}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Integration & Revenue */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-slate-800 rounded-xl p-6 border-2 border-slate-600">
                        <h4 className="font-black text-[#c9a227] mb-3 text-lg">Integration Model</h4>
                        <p className="text-white text-sm leading-relaxed">{partnership.integrationModel}</p>
                      </div>
                      <div className="bg-slate-800 rounded-xl p-6 border-2 border-slate-600">
                        <h4 className="font-black text-[#c9a227] mb-3 text-lg">Revenue Model</h4>
                        <p className="text-white text-sm leading-relaxed">{partnership.revenueModel}</p>
                      </div>
                    </div>

                    {/* Target Partners */}
                    <div className="bg-slate-800 rounded-xl p-6 border-2 border-slate-600">
                      <h4 className="font-black text-white mb-4 text-lg">Target Partners ({partnership.targetPartners.length})</h4>
                      <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
                        {partnership.targetPartners.slice(0, 30).map((partner, idx) => (
                          <span key={idx} className="px-3 py-2 bg-slate-700 text-white rounded-lg text-sm border border-slate-500 hover:bg-[#c9a227]/20 hover:border-[#c9a227] transition-colors font-medium">
                            {partner}
                          </span>
                        ))}
                        {partnership.targetPartners.length > 30 && (
                          <span className="px-3 py-2 bg-[#c9a227]/30 text-[#c9a227] rounded-lg text-sm border-2 border-[#c9a227] font-bold">
                            +{partnership.targetPartners.length - 30} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Pitch Points */}
                    <div className="bg-gradient-to-br from-[#c9a227]/20 to-amber-600/20 rounded-xl p-6 border-2 border-[#c9a227]/50">
                      <h4 className="font-black text-[#c9a227] mb-4 text-lg flex items-center gap-2">
                        <Zap size={22} />
                        Key Pitch Points
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {partnership.pitchPoints.map((point, idx) => (
                          <div key={idx} className="flex items-center gap-3 bg-slate-800/80 rounded-lg p-4 border border-slate-600">
                            <Zap className="text-[#c9a227] flex-shrink-0" size={18} />
                            <span className="text-white text-sm font-medium">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="bg-cyan-600/15 rounded-xl p-6 border-2 border-cyan-500/50">
                      <h4 className="font-black text-cyan-400 mb-3 flex items-center gap-2 text-lg">
                        <Calendar size={22} />
                        Timeline
                      </h4>
                      <p className="text-white text-sm font-medium bg-slate-800/50 p-4 rounded-lg border border-slate-600">{partnership.timeline}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Partnership Framework */}
        <div className="bg-slate-800/50 rounded-xl p-8 border-2 border-slate-600">
          <h3 className="text-2xl font-black text-white mb-8 text-center">Partnership Development Framework</h3>
          <div className="grid md:grid-cols-5 gap-6">
            {Object.entries(partnershipFramework).map(([stage, steps], idx) => (
              <div key={stage} className="text-center bg-slate-800 rounded-xl p-4 border border-slate-600">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#c9a227] to-[#e8c547] flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-black font-black text-xl">{idx + 1}</span>
                </div>
                <h4 className="font-bold text-[#c9a227] capitalize mb-3 text-lg">{stage}</h4>
                <ul className="space-y-2">
                  {steps.map((step, sIdx) => (
                    <li key={sIdx} className="text-white text-sm">{step}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
    <GlobalFooter />
    </div>
  );
}
