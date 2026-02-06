'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import GlobalFooter from '@/components/GlobalFooter';
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
  Calendar
} from 'lucide-react';

interface Partnership {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  description: string;
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
    description: 'Enterprise partnerships offering Nuqta as employee benefits, corporate gifting, and expense rewards.',
    valueForPartner: [
      'Enhanced employee benefits package',
      'Boost employee satisfaction',
      'Taxable benefit optimization',
      'Corporate gifting solution',
      'Expense management rewards'
    ],
    valueForNuqta: [
      'Bulk user acquisition (entire companies)',
      'Guaranteed transaction volume',
      'B2B revenue stream',
      'Enterprise credibility',
      'Referral network within companies'
    ],
    integrationModel: 'Corporate dashboard for HR, bulk point allocation, expense card linking, branded company tiers.',
    revenueModel: 'Per-employee licensing (AED 10-25/month), bulk point purchases at discount, platform fee',
    targetPartners: [
      'DIFC companies (finance sector)',
      'Free zone businesses',
      'Tech companies (Google, Microsoft UAE)',
      'Consulting firms (Big 4)',
      'Airlines (Emirates, Etihad staff)',
      'Banks (internal programs)',
      'Government entities'
    ],
    pitchPoints: [
      'Turnkey employee rewards solution',
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
    description: 'Partner with UAE universities for student rewards, campus merchant integration, and youth engagement.',
    valueForPartner: [
      'Enhanced student experience',
      'Campus commerce boost',
      'Alumni engagement tool',
      'Differentiation for recruitment',
      'Student loyalty and retention'
    ],
    valueForNuqta: [
      'Young user acquisition (18-25)',
      'Campus merchant network',
      'Long-term user lifetime value',
      'Word-of-mouth among students',
      'Brand ambassadors'
    ],
    integrationModel: 'Student ID integration, campus merchant onboarding, student-specific tiers and rewards.',
    revenueModel: 'University licensing fee, campus merchant commissions, sponsored rewards from brands',
    targetPartners: [
      'American University of Dubai',
      'University of Dubai',
      'Heriot-Watt Dubai',
      'Murdoch University Dubai',
      'Canadian University Dubai',
      'Middlesex University Dubai',
      'BITS Pilani Dubai',
      'SP Jain Mumbai campus Dubai'
    ],
    pitchPoints: [
      'Complete campus rewards ecosystem',
      'Student-friendly pricing',
      'Boosts campus F&B revenue',
      'Ready for integration',
      'Ambassador program included'
    ],
    timeline: 'University outreach: Month 3, Pilot campus: Month 5, Multi-campus: Month 8',
    priority: 'medium'
  },
  {
    id: 'telecom',
    name: 'Telecom Partnerships',
    icon: Smartphone,
    color: 'from-cyan-500 to-blue-600',
    description: 'Partner with UAE telecom operators for points conversion, bill payment rewards, and distribution.',
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
    high: 'bg-red-500/20 text-red-400 border-red-500/30',
    medium: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    low: 'bg-slate-500/20 text-slate-400 border-slate-500/30'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950/10 to-slate-950">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c9a227] to-[#e8c547] flex items-center justify-center">
                <span className="text-black font-bold text-xl">N</span>
              </div>
              <span className="text-2xl font-bold text-white">Nuqta</span>
            </Link>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">Partnership Playbook</span>
          </div>
          <Link href="/gtm" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft size={16} />
            <span className="text-sm">GTM Strategy</span>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-500/30 mb-4">
            <Handshake className="text-blue-400" size={16} />
            <span className="text-blue-400 text-sm font-medium">Strategic Partnerships</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Partnership <span className="text-blue-400">Playbook</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Strategic partnerships to accelerate growth, expand distribution, and create ecosystem value.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-blue-500/10 rounded-xl p-5 border border-blue-500/30 text-center">
            <Building2 className="text-blue-400 mx-auto mb-2" size={24} />
            <div className="text-3xl font-bold text-blue-400">8</div>
            <div className="text-slate-400 text-sm">Partnership Types</div>
          </div>
          <div className="bg-green-500/10 rounded-xl p-5 border border-green-500/30 text-center">
            <Users className="text-green-400 mx-auto mb-2" size={24} />
            <div className="text-3xl font-bold text-green-400">50+</div>
            <div className="text-slate-400 text-sm">Target Partners</div>
          </div>
          <div className="bg-purple-500/10 rounded-xl p-5 border border-purple-500/30 text-center">
            <TrendingUp className="text-purple-400 mx-auto mb-2" size={24} />
            <div className="text-3xl font-bold text-purple-400">10x</div>
            <div className="text-slate-400 text-sm">Growth Multiplier</div>
          </div>
          <div className="bg-amber-500/10 rounded-xl p-5 border border-amber-500/30 text-center">
            <DollarSign className="text-amber-400 mx-auto mb-2" size={24} />
            <div className="text-3xl font-bold text-amber-400">B2B</div>
            <div className="text-slate-400 text-sm">Revenue Stream</div>
          </div>
        </div>

        {/* Partnership Cards */}
        <div className="space-y-4 mb-12">
          {partnerships.map(partnership => {
            const Icon = partnership.icon;
            const isExpanded = expandedPartnership === partnership.id;

            return (
              <div key={partnership.id} className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                <button
                  onClick={() => setExpandedPartnership(isExpanded ? '' : partnership.id)}
                  className="w-full p-5 flex items-center justify-between hover:bg-white/5 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${partnership.color} flex items-center justify-center`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-white">{partnership.name}</h3>
                      <p className="text-slate-400 text-sm">{partnership.targetPartners.length} target partners</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-xs border ${priorityColors[partnership.priority]}`}>
                      {partnership.priority} priority
                    </span>
                    {isExpanded ? <ChevronDown className="text-blue-400" size={20} /> : <ChevronRight className="text-slate-400" size={20} />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="border-t border-white/10 p-5 space-y-6">
                    <p className="text-slate-300">{partnership.description}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-green-400 mb-3 flex items-center gap-2">
                          <Gift size={16} />
                          Value for Partner
                        </h4>
                        <ul className="space-y-2">
                          {partnership.valueForPartner.map((v, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                              <CheckCircle className="text-green-400 flex-shrink-0 mt-0.5" size={14} />
                              {v}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-400 mb-3 flex items-center gap-2">
                          <Star size={16} />
                          Value for Nuqta
                        </h4>
                        <ul className="space-y-2">
                          {partnership.valueForNuqta.map((v, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                              <CheckCircle className="text-blue-400 flex-shrink-0 mt-0.5" size={14} />
                              {v}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-black/30 rounded-xl p-4">
                        <h4 className="font-bold text-white mb-2">Integration Model</h4>
                        <p className="text-slate-400 text-sm">{partnership.integrationModel}</p>
                      </div>
                      <div className="bg-black/30 rounded-xl p-4">
                        <h4 className="font-bold text-white mb-2">Revenue Model</h4>
                        <p className="text-slate-400 text-sm">{partnership.revenueModel}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-white mb-3">Target Partners</h4>
                      <div className="flex flex-wrap gap-2">
                        {partnership.targetPartners.map((partner, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white/10 text-slate-300 rounded-full text-sm">
                            {partner}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-[#c9a227] mb-3">Key Pitch Points</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {partnership.pitchPoints.map((point, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                            <Zap className="text-[#c9a227]" size={14} />
                            {point}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/30">
                      <h4 className="font-bold text-purple-400 mb-2 flex items-center gap-2">
                        <Calendar size={16} />
                        Timeline
                      </h4>
                      <p className="text-slate-300 text-sm">{partnership.timeline}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Partnership Framework */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-6">Partnership Development Framework</h3>
          <div className="grid md:grid-cols-5 gap-4">
            {Object.entries(partnershipFramework).map(([stage, steps], idx) => (
              <div key={stage} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">{idx + 1}</span>
                </div>
                <h4 className="font-bold text-white capitalize mb-2">{stage}</h4>
                <ul className="space-y-1">
                  {steps.map((step, sIdx) => (
                    <li key={sIdx} className="text-slate-400 text-xs">{step}</li>
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
