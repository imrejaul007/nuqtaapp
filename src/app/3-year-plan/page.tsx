'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Crown,
  Target,
  Users,
  DollarSign,
  TrendingUp,
  Building2,
  Store,
  Rocket,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Zap,
  Globe,
  Award,
  Shield,
  BarChart3,
  Briefcase,
  Clock,
  MapPin,
  ChevronDown,
  ChevronUp,
  Star,
  Heart,
  Settings,
  Megaphone,
  Handshake,
  FileText,
  AlertTriangle,
  Play,
  Flag,
  BookOpen,
  Map,
  Database
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface Milestone {
  quarter: string;
  title: string;
  metrics: string[];
  teamActions: string[];
  status: 'completed' | 'current' | 'upcoming';
}

interface YearPlan {
  year: number;
  theme: string;
  tagline: string;
  color: string;
  borderColor: string;
  bgColor: string;
  keyMetrics: { label: string; value: string; icon: React.ElementType }[];
  milestones: Milestone[];
  teamGrowth: { role: string; count: number; timing: string }[];
  keyInitiatives: string[];
  risks: string[];
}

interface TeamMember {
  role: string;
  name: string;
  status: 'filled' | 'hiring' | 'planned';
  timing: string;
  responsibilities: string[];
}

interface SOPCategory {
  name: string;
  icon: React.ElementType;
  sops: string[];
  owner: string;
}

// ============================================================================
// DATA
// ============================================================================

const visionStatement = {
  mission: "Become the #1 rewards and payment intelligence platform in the GCC",
  vision: "Every transaction in the GCC earns rewards. Every payment is optimized.",
  northStar: "5 Million MAU | 100K Merchants | AED 6B GMV by Year 5",
  values: [
    { icon: Zap, label: "Speed", description: "Move fast, ship weekly" },
    { icon: Heart, label: "Customer First", description: "Build what users need" },
    { icon: Shield, label: "Trust", description: "Security and reliability" },
    { icon: Award, label: "Excellence", description: "Best-in-class everything" },
  ]
};

const yearPlans: YearPlan[] = [
  {
    year: 1,
    theme: "UAE Blitzscale",
    tagline: "100K users, 2,500 merchants - Dominate Dubai",
    color: "text-blue-400",
    borderColor: "border-blue-500/30",
    bgColor: "from-blue-500/10 to-blue-600/5",
    keyMetrics: [
      { label: "MAU Target", value: "100,000", icon: Users },
      { label: "Merchants", value: "2,500", icon: Store },
      { label: "GMV", value: "AED 120M", icon: DollarSign },
      { label: "Revenue", value: "AED 9.6M", icon: TrendingUp },
      { label: "Team Size", value: "70", icon: Users },
      { label: "EBITDA", value: "AED 1M", icon: Target },
    ],
    milestones: [
      {
        quarter: "Q1 2026",
        title: "Aggressive Launch",
        metrics: ["25,000 users", "500 merchants", "App live", "AED 800K MRR"],
        teamActions: ["Full C-Suite hired", "20-person sales army", "Engineering 10+"],
        status: "current"
      },
      {
        quarter: "Q2 2026",
        title: "Dubai Domination",
        metrics: ["50,000 users", "1,200 merchants", "AED 1.5M MRR", "All major malls"],
        teamActions: ["50 person team", "5 bank partnerships", "PR blitz"],
        status: "upcoming"
      },
      {
        quarter: "Q3 2026",
        title: "UAE Expansion",
        metrics: ["75,000 users", "1,800 merchants", "Abu Dhabi live", "AED 2.2M MRR"],
        teamActions: ["Abu Dhabi + Sharjah teams", "Marketing machine", "B2B sales launch"],
        status: "upcoming"
      },
      {
        quarter: "Q4 2026",
        title: "Category Leader",
        metrics: ["100,000 MAU", "2,500 merchants", "AED 10M GMV/mo", "Series A ready"],
        teamActions: ["70 person team", "Regional HQ", "KSA prep begins"],
        status: "upcoming"
      }
    ],
    teamGrowth: [
      { role: "Executive", count: 2, timing: "Q1 2026" },
      { role: "Engineering", count: 4, timing: "Q1-Q2 2026" },
      { role: "Product & Design", count: 2, timing: "Q1 2026" },
      { role: "Growth & Marketing", count: 3, timing: "Q2 2026" },
      { role: "Merchant Success", count: 4, timing: "Q2-Q3 2026" },
      { role: "Customer Support", count: 2, timing: "Q3 2026" },
      { role: "Finance & Admin", count: 1, timing: "Q3 2026" },
    ],
    keyInitiatives: [
      "Launch beta with 50 pilot merchants across 5 industries",
      "Secure first 3 strategic partnerships (BNPL, bank, mall)",
      "Build and validate unit economics (16.8x LTV:CAC)",
      "Establish brand presence in Dubai",
      "Create operational SOPs for all functions",
      "Achieve product-market fit signals (D30 retention >25%)",
      "Prepare Series A materials and data room",
      "Break-even by Q4 2026",
    ],
    risks: [
      "Slow merchant adoption - mitigate with incentive programs",
      "User acquisition cost exceeds AED 30 - focus on referrals & merchant QR",
      "Key hire delays - maintain pipeline, use contractors",
      "Technical debt - weekly code reviews, CI/CD pipeline",
    ]
  },
  {
    year: 2,
    theme: "UAE + KSA Takeover",
    tagline: "500K users, 10K merchants - Two Markets Dominated",
    color: "text-purple-400",
    borderColor: "border-purple-500/30",
    bgColor: "from-purple-500/10 to-purple-600/5",
    keyMetrics: [
      { label: "MAU Target", value: "500,000", icon: Users },
      { label: "Merchants", value: "10,000", icon: Store },
      { label: "GMV", value: "AED 600M", icon: DollarSign },
      { label: "Revenue", value: "AED 48M", icon: TrendingUp },
      { label: "EBITDA", value: "AED 14.4M", icon: Target },
      { label: "Margin", value: "30%", icon: BarChart3 },
    ],
    milestones: [
      {
        quarter: "Q1 2027",
        title: "Series A Scale",
        metrics: ["150,000 MAU", "4,000 merchants", "Series A $15-25M", "AED 25M GMV/mo"],
        teamActions: ["Team to 80", "KSA legal entity", "Engineering 25+"],
        status: "upcoming"
      },
      {
        quarter: "Q2 2027",
        title: "KSA Launch",
        metrics: ["250,000 MAU", "6,000 merchants", "Riyadh + Jeddah live", "AED 40M GMV/mo"],
        teamActions: ["KSA team of 20", "Local partnerships", "Arabic-first product"],
        status: "upcoming"
      },
      {
        quarter: "Q3 2027",
        title: "Full UAE + KSA",
        metrics: ["350,000 MAU", "8,000 merchants", "All major cities", "AED 55M GMV/mo"],
        teamActions: ["Team: 100+", "Dammam + smaller cities", "B2B launch"],
        status: "upcoming"
      },
      {
        quarter: "Q4 2027",
        title: "Market Leader",
        metrics: ["500,000 MAU", "10,000 merchants", "AED 70M GMV/mo", "30% EBITDA"],
        teamActions: ["Team: 120", "Series B prep", "GCC expansion planning"],
        status: "upcoming"
      }
    ],
    teamGrowth: [
      { role: "Executive", count: 6, timing: "Full C-Suite" },
      { role: "Engineering", count: 15, timing: "Q1-Q2 2027" },
      { role: "Product & Design", count: 8, timing: "Throughout" },
      { role: "Growth & Marketing", count: 12, timing: "Q1-Q2 2027" },
      { role: "Merchant Success", count: 15, timing: "Throughout" },
      { role: "Customer Support", count: 10, timing: "Q2-Q3 2027" },
      { role: "Finance & Admin", count: 4, timing: "Q2 2027" },
    ],
    keyInitiatives: [
      "Close Series A funding ($5-10M)",
      "5x user growth: 10K → 50K MAU",
      "4x merchant growth: 250 → 1,000",
      "Achieve 60% gross margin (up from 50%)",
      "Launch in Abu Dhabi and Northern Emirates",
      "Secure 5+ enterprise partnerships",
      "Build AI/ML recommendation engine",
      "Achieve EBITDA positive (10% margin)",
    ],
    risks: [
      "Series A timing - multiple term sheets, strong metrics",
      "Competition intensifies - double down on UX and partnerships",
      "UAE market slower than expected - expand verticals",
      "Gross margin compression - optimize payment processing",
    ]
  },
  {
    year: 3,
    theme: "GCC Dominance",
    tagline: "1.5M users, 30K merchants - The GCC Platform",
    color: "text-[#c9a227]",
    borderColor: "border-[#c9a227]/30",
    bgColor: "from-[#c9a227]/10 to-[#c9a227]/5",
    keyMetrics: [
      { label: "MAU Target", value: "1,500,000", icon: Users },
      { label: "Merchants", value: "30,000", icon: Store },
      { label: "GMV", value: "AED 1.8B", icon: DollarSign },
      { label: "Revenue", value: "AED 144M", icon: TrendingUp },
      { label: "EBITDA", value: "AED 57.6M", icon: Target },
      { label: "Margin", value: "40%", icon: BarChart3 },
    ],
    milestones: [
      {
        quarter: "Q1 2028",
        title: "Series B Close",
        metrics: ["700,000 MAU", "15,000 merchants", "Series B $50-75M", "AED 100M GMV/mo"],
        teamActions: ["Team: 150", "Qatar + Bahrain licenses", "Regional HQ"],
        status: "upcoming"
      },
      {
        quarter: "Q2 2028",
        title: "Qatar + Bahrain Launch",
        metrics: ["900,000 MAU", "20,000 merchants", "4 countries live", "AED 120M GMV/mo"],
        teamActions: ["Qatar team (15)", "Bahrain team (10)", "GCC-wide marketing"],
        status: "upcoming"
      },
      {
        quarter: "Q3 2028",
        title: "Kuwait + Oman Entry",
        metrics: ["1,200,000 MAU", "25,000 merchants", "Full GCC presence", "AED 140M GMV/mo"],
        teamActions: ["Kuwait + Oman teams", "Enterprise deals", "Team: 180"],
        status: "upcoming"
      },
      {
        quarter: "Q4 2028",
        title: "GCC Champion",
        metrics: ["1,500,000 MAU", "30,000 merchants", "AED 150M GMV/mo", "40% EBITDA"],
        teamActions: ["Team: 200+", "IPO prep begins", "India/MENA expansion research"],
        status: "upcoming"
      }
    ],
    teamGrowth: [
      { role: "Executive + VPs", count: 10, timing: "Full leadership" },
      { role: "Engineering", count: 25, timing: "Throughout" },
      { role: "Product & Design", count: 12, timing: "Throughout" },
      { role: "Growth & Marketing", count: 18, timing: "Regional teams" },
      { role: "Merchant Success", count: 20, timing: "By market" },
      { role: "Customer Support", count: 15, timing: "By market" },
      { role: "Finance & Admin", count: 10, timing: "Q2 2028" },
    ],
    keyInitiatives: [
      "4x user growth: 50K → 200K MAU",
      "3x merchant growth: 1K → 3K",
      "Close Series B funding ($20-30M)",
      "Launch in KSA (Riyadh, Jeddah)",
      "Achieve 70% gross margin",
      "Build regional partnerships with major banks",
      "Launch B2B enterprise product (WaaS)",
      "Achieve 30% EBITDA margin",
    ],
    risks: [
      "Multi-market complexity - strong local GMs, centralized tech",
      "Series B market conditions - maintain strong growth metrics",
      "KSA regulatory complexity - hire local experts early",
      "Talent competition - employer branding, equity compensation",
    ]
  }
];

const leadershipTeam: TeamMember[] = [
  {
    role: "CEO",
    name: "Rejaul Karim",
    status: "filled",
    timing: "Current",
    responsibilities: ["Vision & Strategy", "Fundraising", "Board Management", "Culture", "Key Partnerships"]
  },
  {
    role: "COO",
    name: "TBH",
    status: "hiring",
    timing: "Q1 2026",
    responsibilities: ["Operations", "Merchant Relations", "SOPs", "Quality Control", "Scaling"]
  },
  {
    role: "CMO",
    name: "TBH",
    status: "hiring",
    timing: "Q1 2026",
    responsibilities: ["Brand", "User Acquisition", "Content", "Partnerships Marketing", "Analytics"]
  },
  {
    role: "CFO",
    name: "TBH",
    status: "planned",
    timing: "Q3 2026",
    responsibilities: ["Finance", "Fundraising Support", "Unit Economics", "Compliance", "Reporting"]
  },
  {
    role: "CTO",
    name: "TBH",
    status: "planned",
    timing: "Q2 2026",
    responsibilities: ["Technology", "Architecture", "Security", "AI/ML", "Engineering Team"]
  },
  {
    role: "CHRO",
    name: "TBH",
    status: "planned",
    timing: "Q4 2026",
    responsibilities: ["Talent", "Culture", "Performance", "Compensation", "Learning & Development"]
  }
];

const sopCategories: SOPCategory[] = [
  {
    name: "Merchant Operations",
    icon: Store,
    sops: ["Onboarding Flow", "QR Setup", "Training Protocol", "Support Escalation", "Performance Reviews"],
    owner: "COO"
  },
  {
    name: "User Acquisition",
    icon: Users,
    sops: ["Campaign Launch", "Influencer Engagement", "Referral Program", "Event Activations", "Partnership Integration"],
    owner: "CMO"
  },
  {
    name: "Quality Assurance",
    icon: Shield,
    sops: ["Code Review", "Testing Protocol", "Release Management", "Incident Response", "Security Audits"],
    owner: "CTO"
  },
  {
    name: "Finance & Compliance",
    icon: DollarSign,
    sops: ["Invoice Processing", "Merchant Payouts", "Financial Reporting", "Tax Compliance", "Audit Preparation"],
    owner: "CFO"
  },
  {
    name: "Customer Success",
    icon: Heart,
    sops: ["Ticket Handling", "Escalation Matrix", "Feedback Collection", "NPS Surveys", "User Education"],
    owner: "COO"
  },
  {
    name: "Partnerships",
    icon: Handshake,
    sops: ["Partner Outreach", "Contract Negotiation", "Integration Planning", "Co-Marketing", "Performance Tracking"],
    owner: "CEO"
  }
];

// AGGRESSIVE DOMINATION TARGETS - Capture every merchant in the region
// UAE: 200K+ SMEs, Dubai: 50K+ retail, GCC Total: 500K+ merchants
// Vision: Become the payment rails for ALL GCC transactions
const financialProjections = {
  year1: {
    mau: "100,000", merchants: "2,500", gmv: "120M", revenue: "9.6M",
    cogs: "3.84M", grossProfit: "5.76M", opex: "4.8M", ebitda: "0.96M",
    grossMargin: "60%", ebitdaMargin: "10%"
  },
  year2: {
    mau: "500,000", merchants: "10,000", gmv: "600M", revenue: "48M",
    cogs: "14.4M", grossProfit: "33.6M", opex: "19.2M", ebitda: "14.4M",
    grossMargin: "70%", ebitdaMargin: "30%"
  },
  year3: {
    mau: "1,500,000", merchants: "30,000", gmv: "1.8B", revenue: "144M",
    cogs: "36M", grossProfit: "108M", opex: "50.4M", ebitda: "57.6M",
    grossMargin: "75%", ebitdaMargin: "40%"
  },
  year4: {
    mau: "3,000,000", merchants: "60,000", gmv: "3.6B", revenue: "288M",
    cogs: "57.6M", grossProfit: "230.4M", opex: "86.4M", ebitda: "144M",
    grossMargin: "80%", ebitdaMargin: "50%"
  },
  year5: {
    mau: "5,000,000", merchants: "100,000", gmv: "6B", revenue: "480M",
    cogs: "72M", grossProfit: "408M", opex: "120M", ebitda: "288M",
    grossMargin: "85%", ebitdaMargin: "60%"
  }
};

// Revenue streams breakdown (% of total revenue)
const revenueStreams = {
  merchantCommissions: { pct: 70, desc: "5-12% of transaction value" },
  subscriptionFees: { pct: 15, desc: "AED 199-999/month per merchant" },
  premiumFeatures: { pct: 10, desc: "AED 29/month user premium" },
  dataInsights: { pct: 5, desc: "B2B data partnerships" }
};

// Unit economics
// Take rate varies by engine: Engine A (F&B/Lifestyle) = 15%, Engine B (Retail/Grocery) = 5%
// Blended 8% assumes weighted mix: ~40% Engine A, ~60% Engine B
const unitEconomics = {
  userCAC: "AED 5-30 blended",
  userLTV: "AED 504",
  ltvCacRatio: "16.8x",
  paybackPeriod: "<2 months",
  avgTransactions: "1.3/month",
  avgTransactionValue: "AED 75",
  monthlyGMVPerUser: "AED 100",
  annualGMVPerUser: "AED 1,200",
  merchantCAC: "AED 200",
  merchantLTV: "AED 4,800",
  merchantChurn: "5%/month",
  takeRate: "8% blended (5-15% by engine)"
};

const qualityFramework = [
  {
    category: "Product Quality",
    icon: Zap,
    metrics: ["App crash rate <0.1%", "Load time <2s", "NPS >50", "Feature adoption >60%"],
    owner: "CTO"
  },
  {
    category: "Merchant Quality",
    icon: Store,
    metrics: ["Onboarding <24hrs", "Active rate >80%", "Churn <5%/month", "NPS >60"],
    owner: "COO"
  },
  {
    category: "User Experience",
    icon: Heart,
    metrics: ["DAU/MAU >30%", "Transactions/user >4/month", "Referral rate >15%", "Support resolution <4hrs"],
    owner: "CMO"
  },
  {
    category: "Operations",
    icon: Settings,
    metrics: ["SOP compliance 100%", "Incident response <1hr", "Documentation current", "Training completion 100%"],
    owner: "COO"
  }
];

// ============================================================================
// COMPONENT
// ============================================================================

export default function ThreeYearPlanPage() {
  const [expandedYear, setExpandedYear] = useState<number | null>(1);
  const [activeTab, setActiveTab] = useState<'timeline' | 'team' | 'sop' | 'finance' | 'quality'>('timeline');

  const toggleYear = (year: number) => {
    setExpandedYear(expandedYear === year ? null : year);
  };

  return (
    <div className="min-h-screen bg-[#0a1628]">
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/50 rounded-full mb-4">
            <Crown className="text-[#c9a227]" size={16} />
            <span className="text-[#c9a227] text-sm font-bold">G-SUITE BOARD DOCUMENT</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            3-Year <span className="text-[#c9a227]">Domination</span> Plan
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-6">
            The complete execution roadmap to become the #1 rewards platform in the GCC.
            Every quarter. Every hire. Every milestone.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg">
              <Target className="text-blue-400" size={18} />
              <span className="text-white font-medium">Year 5: 1M MAU</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg">
              <DollarSign className="text-green-400" size={18} />
              <span className="text-white font-medium">AED 115M Revenue</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-lg">
              <Globe className="text-purple-400" size={18} />
              <span className="text-white font-medium">Full GCC Coverage</span>
            </div>
          </div>
        </div>

        {/* Vision Box */}
        <div className="bg-gradient-to-br from-[#c9a227]/10 to-[#c9a227]/5 border-2 border-[#c9a227]/30 rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-2">
                <Star className="text-[#c9a227]" size={24} />
                Our Mission
              </h2>
              <p className="text-lg text-slate-300 mb-4">{visionStatement.mission}</p>
              <h3 className="text-xl font-bold text-white mb-2">Vision</h3>
              <p className="text-slate-400 mb-4">{visionStatement.vision}</p>
              <div className="flex items-center gap-3 p-4 bg-[#c9a227]/20 rounded-xl">
                <Target className="text-[#c9a227]" size={28} />
                <div>
                  <p className="text-[#c9a227] text-sm font-medium">NORTH STAR METRIC</p>
                  <p className="text-white font-black text-xl">{visionStatement.northStar}</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-black text-white mb-4">Core Values</h2>
              <div className="grid grid-cols-2 gap-4">
                {visionStatement.values.map((value) => (
                  <div key={value.label} className="bg-slate-900/50 rounded-xl p-4">
                    <value.icon className="text-[#c9a227] mb-2" size={24} />
                    <h4 className="text-white font-bold">{value.label}</h4>
                    <p className="text-slate-400 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'timeline', label: 'Execution Timeline', icon: Calendar },
            { id: 'team', label: 'Team Growth', icon: Users },
            { id: 'sop', label: 'SOPs & Quality', icon: FileText },
            { id: 'finance', label: 'Financial Plan', icon: DollarSign },
            { id: 'quality', label: 'Quality Framework', icon: Shield },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-[#c9a227] text-black'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <tab.icon size={18} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Timeline Tab */}
        {activeTab === 'timeline' && (
          <div className="space-y-6">
            {yearPlans.map((yearPlan) => (
              <div
                key={yearPlan.year}
                className={`bg-gradient-to-br ${yearPlan.bgColor} border-2 ${yearPlan.borderColor} rounded-2xl overflow-hidden`}
              >
                {/* Year Header */}
                <button
                  onClick={() => toggleYear(yearPlan.year)}
                  className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-xl bg-slate-900/50 flex items-center justify-center`}>
                      <span className={`text-3xl font-black ${yearPlan.color}`}>Y{yearPlan.year}</span>
                    </div>
                    <div className="text-left">
                      <h3 className={`text-2xl font-black ${yearPlan.color}`}>
                        Year {yearPlan.year}: {yearPlan.theme}
                      </h3>
                      <p className="text-slate-400">{yearPlan.tagline}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="hidden md:flex gap-3">
                      {yearPlan.keyMetrics.slice(0, 3).map((metric) => (
                        <div key={metric.label} className="text-center px-3">
                          <p className="text-white font-black">{metric.value}</p>
                          <p className="text-slate-500 text-xs">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                    {expandedYear === yearPlan.year ? (
                      <ChevronUp className="text-slate-400" size={24} />
                    ) : (
                      <ChevronDown className="text-slate-400" size={24} />
                    )}
                  </div>
                </button>

                {/* Expanded Content */}
                {expandedYear === yearPlan.year && (
                  <div className="border-t border-white/10 p-6">
                    {/* Key Metrics Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
                      {yearPlan.keyMetrics.map((metric) => (
                        <div key={metric.label} className="bg-slate-900/50 rounded-xl p-4 text-center">
                          <metric.icon className={yearPlan.color} size={24} />
                          <p className="text-2xl font-black text-white mt-2">{metric.value}</p>
                          <p className="text-slate-400 text-sm">{metric.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Quarterly Milestones */}
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Calendar className={yearPlan.color} size={20} />
                      Quarterly Milestones
                    </h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                      {yearPlan.milestones.map((milestone, idx) => (
                        <div
                          key={idx}
                          className={`bg-slate-900/50 rounded-xl p-4 border ${
                            milestone.status === 'current'
                              ? 'border-[#c9a227]'
                              : milestone.status === 'completed'
                              ? 'border-green-500/30'
                              : 'border-slate-700'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <span className={`text-sm font-bold ${yearPlan.color}`}>{milestone.quarter}</span>
                            {milestone.status === 'current' && (
                              <span className="px-2 py-0.5 bg-[#c9a227] text-black text-xs font-bold rounded-full">NOW</span>
                            )}
                            {milestone.status === 'completed' && (
                              <CheckCircle2 className="text-green-500" size={16} />
                            )}
                          </div>
                          <h5 className="text-white font-bold mb-2">{milestone.title}</h5>
                          <div className="space-y-2">
                            <div>
                              <p className="text-slate-500 text-xs mb-1">Metrics:</p>
                              <ul className="space-y-1">
                                {milestone.metrics.map((m, i) => (
                                  <li key={i} className="text-slate-300 text-sm flex items-center gap-1">
                                    <CheckCircle2 size={12} className="text-green-500" />
                                    {m}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="text-slate-500 text-xs mb-1">Team Actions:</p>
                              <ul className="space-y-1">
                                {milestone.teamActions.map((t, i) => (
                                  <li key={i} className="text-slate-400 text-sm flex items-center gap-1">
                                    <Users size={12} className="text-blue-400" />
                                    {t}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Key Initiatives & Risks */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                          <Rocket className={yearPlan.color} size={20} />
                          Key Initiatives
                        </h4>
                        <ul className="space-y-2">
                          {yearPlan.keyInitiatives.map((initiative, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-slate-300">
                              <Play className="text-green-500 mt-1 flex-shrink-0" size={14} />
                              <span>{initiative}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                          <AlertTriangle className="text-amber-400" size={20} />
                          Risks & Mitigations
                        </h4>
                        <ul className="space-y-2">
                          {yearPlan.risks.map((risk, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-slate-400">
                              <Shield className="text-amber-400 mt-1 flex-shrink-0" size={14} />
                              <span>{risk}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Team Growth for this year */}
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Users className={yearPlan.color} size={20} />
                        Team Growth - Year {yearPlan.year}
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {yearPlan.teamGrowth.map((growth, idx) => (
                          <div key={idx} className="bg-slate-800/50 rounded-lg px-4 py-2 flex items-center gap-2">
                            <span className="text-white font-bold">{growth.count}x</span>
                            <span className="text-slate-300">{growth.role}</span>
                            <span className="text-slate-500 text-sm">({growth.timing})</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Team Tab */}
        {activeTab === 'team' && (
          <div className="space-y-8">
            {/* Leadership Team */}
            <div className="bg-gradient-to-br from-[#c9a227]/10 to-[#c9a227]/5 border-2 border-[#c9a227]/30 rounded-2xl p-6">
              <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-2">
                <Crown className="text-[#c9a227]" size={24} />
                C-Suite Leadership
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {leadershipTeam.map((member) => (
                  <div
                    key={member.role}
                    className={`bg-slate-900/50 rounded-xl p-5 border ${
                      member.status === 'filled'
                        ? 'border-green-500/30'
                        : member.status === 'hiring'
                        ? 'border-[#c9a227]/30'
                        : 'border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-white font-bold text-lg">{member.role}</h4>
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                          member.status === 'filled'
                            ? 'bg-green-500/20 text-green-400'
                            : member.status === 'hiring'
                            ? 'bg-[#c9a227]/20 text-[#c9a227]'
                            : 'bg-slate-700 text-slate-400'
                        }`}
                      >
                        {member.status === 'filled' ? 'FILLED' : member.status === 'hiring' ? 'HIRING NOW' : 'PLANNED'}
                      </span>
                    </div>
                    <p className="text-slate-300 font-medium mb-1">{member.name}</p>
                    <p className="text-slate-500 text-sm mb-3">{member.timing}</p>
                    <div className="space-y-1">
                      {member.responsibilities.map((resp, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-400">
                          <CheckCircle2 size={12} className="text-[#c9a227]" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Growth Timeline */}
            <div className="bg-slate-800/50 rounded-2xl p-6">
              <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-2">
                <TrendingUp className="text-purple-400" size={24} />
                Headcount Growth Projection
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {/* Headcount aligned with Financial Models - aggressive scaling for 5M users / AED 480M revenue target */}
                {[
                  { year: "Now", count: "3-5", color: "text-slate-400" },
                  { year: "End Y1", count: "70", color: "text-blue-400" },
                  { year: "End Y2", count: "160", color: "text-purple-400" },
                  { year: "End Y3", count: "270", color: "text-[#c9a227]" },
                  { year: "End Y5", count: "650", color: "text-green-400" },
                ].map((item) => (
                  <div key={item.year} className="text-center p-4 bg-slate-900/50 rounded-xl">
                    <p className="text-slate-400 text-sm">{item.year}</p>
                    <p className={`text-3xl font-black ${item.color}`}>{item.count}</p>
                    <p className="text-slate-500 text-xs">Employees</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Department Breakdown */}
            <div className="bg-slate-800/50 rounded-2xl p-6">
              {/* Department breakdown aligned with 270 total headcount for Year 3 */}
              <h3 className="text-2xl font-black text-white mb-6">Department Structure (Year 3) - Total: 270</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { dept: "Engineering & Product", count: 80, icon: Settings, color: "text-blue-400" },
                  { dept: "Merchant Success", count: 60, icon: Target, color: "text-green-400" },
                  { dept: "Growth & Marketing", count: 35, icon: Megaphone, color: "text-pink-400" },
                  { dept: "Customer Support", count: 40, icon: Heart, color: "text-red-400" },
                  { dept: "Operations", count: 25, icon: Building2, color: "text-purple-400" },
                  { dept: "Data & Analytics", count: 15, icon: Crown, color: "text-[#c9a227]" },
                  { dept: "Finance & Admin", count: 10, icon: DollarSign, color: "text-cyan-400" },
                  { dept: "HR & Leadership", count: 5, icon: Users, color: "text-amber-400" },
                ].map((dept) => (
                  <div key={dept.dept} className="bg-slate-900/50 rounded-xl p-4">
                    <dept.icon className={dept.color} size={24} />
                    <p className="text-2xl font-black text-white mt-2">{dept.count}</p>
                    <p className="text-slate-400 text-sm">{dept.dept}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SOP Tab */}
        {activeTab === 'sop' && (
          <div className="space-y-8">
            <div className="bg-slate-800/50 rounded-2xl p-6">
              <h3 className="text-2xl font-black text-white mb-2">Standard Operating Procedures</h3>
              <p className="text-slate-400 mb-6">Every function runs on documented, repeatable processes.</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sopCategories.map((category) => (
                  <div key={category.name} className="bg-slate-900/50 rounded-xl p-5 border border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <category.icon className="text-[#c9a227]" size={24} />
                        <h4 className="text-white font-bold">{category.name}</h4>
                      </div>
                      <span className="text-slate-500 text-xs">Owner: {category.owner}</span>
                    </div>
                    <ul className="space-y-2">
                      {category.sops.map((sop, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                          <FileText size={12} className="text-slate-500" />
                          <span>{sop}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* SOP Governance */}
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/30 rounded-2xl p-6">
              <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-2">
                <Shield className="text-green-400" size={24} />
                SOP Governance
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { label: "Review Cycle", value: "Monthly", icon: Calendar },
                  { label: "Compliance Target", value: "100%", icon: Target },
                  { label: "Documentation", value: "Notion + Video", icon: FileText },
                  { label: "Training", value: "Onboarding + Ongoing", icon: BookOpen },
                ].map((item) => (
                  <div key={item.label} className="bg-slate-900/50 rounded-xl p-4 text-center">
                    <item.icon className="text-green-400 mx-auto mb-2" size={24} />
                    <p className="text-white font-bold">{item.value}</p>
                    <p className="text-slate-400 text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Finance Tab */}
        {activeTab === 'finance' && (
          <div className="space-y-8">
            {/* 5-Year P&L Projections */}
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border-2 border-green-500/30 rounded-2xl p-6">
              <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-2">
                <DollarSign className="text-green-400" size={24} />
                5-Year Financial Projections (Base Case)
              </h3>

              {/* Comprehensive Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left text-slate-400 py-3 px-2">Metric</th>
                      <th className="text-right text-blue-400 py-3 px-2">Year 1</th>
                      <th className="text-right text-purple-400 py-3 px-2">Year 2</th>
                      <th className="text-right text-[#c9a227] py-3 px-2">Year 3</th>
                      <th className="text-right text-cyan-400 py-3 px-2">Year 4</th>
                      <th className="text-right text-green-400 py-3 px-2">Year 5</th>
                    </tr>
                  </thead>
                  <tbody className="text-white">
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-2 text-slate-400">MAU</td>
                      <td className="py-2 px-2 text-right font-bold">{financialProjections.year1.mau}</td>
                      <td className="py-2 px-2 text-right font-bold">{financialProjections.year2.mau}</td>
                      <td className="py-2 px-2 text-right font-bold">{financialProjections.year3.mau}</td>
                      <td className="py-2 px-2 text-right font-bold">{financialProjections.year4.mau}</td>
                      <td className="py-2 px-2 text-right font-bold">{financialProjections.year5.mau}</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-2 text-slate-400">Merchants</td>
                      <td className="py-2 px-2 text-right">{financialProjections.year1.merchants}</td>
                      <td className="py-2 px-2 text-right">{financialProjections.year2.merchants}</td>
                      <td className="py-2 px-2 text-right">{financialProjections.year3.merchants}</td>
                      <td className="py-2 px-2 text-right">{financialProjections.year4.merchants}</td>
                      <td className="py-2 px-2 text-right">{financialProjections.year5.merchants}</td>
                    </tr>
                    <tr className="border-b border-slate-800 bg-slate-800/30">
                      <td className="py-2 px-2 text-[#c9a227] font-bold">GMV</td>
                      <td className="py-2 px-2 text-right font-bold">AED {financialProjections.year1.gmv}</td>
                      <td className="py-2 px-2 text-right font-bold">AED {financialProjections.year2.gmv}</td>
                      <td className="py-2 px-2 text-right font-bold">AED {financialProjections.year3.gmv}</td>
                      <td className="py-2 px-2 text-right font-bold">AED {financialProjections.year4.gmv}</td>
                      <td className="py-2 px-2 text-right font-bold">AED {financialProjections.year5.gmv}</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-2 text-slate-400">Revenue</td>
                      <td className="py-2 px-2 text-right">AED {financialProjections.year1.revenue}</td>
                      <td className="py-2 px-2 text-right">AED {financialProjections.year2.revenue}</td>
                      <td className="py-2 px-2 text-right">AED {financialProjections.year3.revenue}</td>
                      <td className="py-2 px-2 text-right">AED {financialProjections.year4.revenue}</td>
                      <td className="py-2 px-2 text-right">AED {financialProjections.year5.revenue}</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-2 text-slate-400">COGS</td>
                      <td className="py-2 px-2 text-right text-red-400">AED {financialProjections.year1.cogs}</td>
                      <td className="py-2 px-2 text-right text-red-400">AED {financialProjections.year2.cogs}</td>
                      <td className="py-2 px-2 text-right text-red-400">AED {financialProjections.year3.cogs}</td>
                      <td className="py-2 px-2 text-right text-red-400">AED {financialProjections.year4.cogs}</td>
                      <td className="py-2 px-2 text-right text-red-400">AED {financialProjections.year5.cogs}</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-2 text-slate-400">Gross Profit</td>
                      <td className="py-2 px-2 text-right">AED {financialProjections.year1.grossProfit}</td>
                      <td className="py-2 px-2 text-right">AED {financialProjections.year2.grossProfit}</td>
                      <td className="py-2 px-2 text-right">AED {financialProjections.year3.grossProfit}</td>
                      <td className="py-2 px-2 text-right">AED {financialProjections.year4.grossProfit}</td>
                      <td className="py-2 px-2 text-right">AED {financialProjections.year5.grossProfit}</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-2 text-slate-400">OpEx</td>
                      <td className="py-2 px-2 text-right text-amber-400">AED {financialProjections.year1.opex}</td>
                      <td className="py-2 px-2 text-right text-amber-400">AED {financialProjections.year2.opex}</td>
                      <td className="py-2 px-2 text-right text-amber-400">AED {financialProjections.year3.opex}</td>
                      <td className="py-2 px-2 text-right text-amber-400">AED {financialProjections.year4.opex}</td>
                      <td className="py-2 px-2 text-right text-amber-400">AED {financialProjections.year5.opex}</td>
                    </tr>
                    <tr className="border-b border-slate-800 bg-green-500/10">
                      <td className="py-2 px-2 text-green-400 font-bold">EBITDA</td>
                      <td className="py-2 px-2 text-right font-bold text-red-400">AED {financialProjections.year1.ebitda}</td>
                      <td className="py-2 px-2 text-right font-bold text-green-400">AED {financialProjections.year2.ebitda}</td>
                      <td className="py-2 px-2 text-right font-bold text-green-400">AED {financialProjections.year3.ebitda}</td>
                      <td className="py-2 px-2 text-right font-bold text-green-400">AED {financialProjections.year4.ebitda}</td>
                      <td className="py-2 px-2 text-right font-bold text-green-400">AED {financialProjections.year5.ebitda}</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2 px-2 text-slate-400">Gross Margin</td>
                      <td className="py-2 px-2 text-right">{financialProjections.year1.grossMargin}</td>
                      <td className="py-2 px-2 text-right">{financialProjections.year2.grossMargin}</td>
                      <td className="py-2 px-2 text-right">{financialProjections.year3.grossMargin}</td>
                      <td className="py-2 px-2 text-right">{financialProjections.year4.grossMargin}</td>
                      <td className="py-2 px-2 text-right">{financialProjections.year5.grossMargin}</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2 text-slate-400">EBITDA Margin</td>
                      <td className="py-2 px-2 text-right text-red-400">{financialProjections.year1.ebitdaMargin}</td>
                      <td className="py-2 px-2 text-right text-green-400">{financialProjections.year2.ebitdaMargin}</td>
                      <td className="py-2 px-2 text-right text-green-400">{financialProjections.year3.ebitdaMargin}</td>
                      <td className="py-2 px-2 text-right text-green-400">{financialProjections.year4.ebitdaMargin}</td>
                      <td className="py-2 px-2 text-right text-green-400">{financialProjections.year5.ebitdaMargin}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Growth Multipliers */}
              <div className="mt-6 grid grid-cols-4 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <p className="text-slate-400 text-xs">Y1→Y2 Growth</p>
                  <p className="text-2xl font-black text-blue-400">5x</p>
                  <p className="text-slate-500 text-xs">Users</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <p className="text-slate-400 text-xs">Y2→Y3 Growth</p>
                  <p className="text-2xl font-black text-purple-400">4x</p>
                  <p className="text-slate-500 text-xs">Users</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <p className="text-slate-400 text-xs">Y3→Y4 Growth</p>
                  <p className="text-2xl font-black text-[#c9a227]">2.5x</p>
                  <p className="text-slate-500 text-xs">Users</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <p className="text-slate-400 text-xs">Y4→Y5 Growth</p>
                  <p className="text-2xl font-black text-green-400">2x</p>
                  <p className="text-slate-500 text-xs">Users</p>
                </div>
              </div>
            </div>

            {/* Revenue Streams Breakdown */}
            <div className="bg-slate-800/50 rounded-2xl p-6">
              <h3 className="text-2xl font-black text-white mb-6">Revenue Streams (Year 5 Breakdown)</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-400 font-bold">Merchant Commissions</span>
                    <span className="text-2xl font-black text-white">{revenueStreams.merchantCommissions.pct}%</span>
                  </div>
                  <p className="text-slate-400 text-sm">{revenueStreams.merchantCommissions.desc}</p>
                  <p className="text-blue-400 font-bold mt-2">AED 80.6M</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-purple-400 font-bold">Subscription Fees</span>
                    <span className="text-2xl font-black text-white">{revenueStreams.subscriptionFees.pct}%</span>
                  </div>
                  <p className="text-slate-400 text-sm">{revenueStreams.subscriptionFees.desc}</p>
                  <p className="text-purple-400 font-bold mt-2">AED 17.3M</p>
                </div>
                <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-pink-400 font-bold">Premium Features</span>
                    <span className="text-2xl font-black text-white">{revenueStreams.premiumFeatures.pct}%</span>
                  </div>
                  <p className="text-slate-400 text-sm">{revenueStreams.premiumFeatures.desc}</p>
                  <p className="text-pink-400 font-bold mt-2">AED 11.5M</p>
                </div>
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cyan-400 font-bold">Data & Insights</span>
                    <span className="text-2xl font-black text-white">{revenueStreams.dataInsights.pct}%</span>
                  </div>
                  <p className="text-slate-400 text-sm">{revenueStreams.dataInsights.desc}</p>
                  <p className="text-cyan-400 font-bold mt-2">AED 5.8M</p>
                </div>
              </div>
            </div>

            {/* Unit Economics */}
            <div className="bg-slate-800/50 rounded-2xl p-6">
              <h3 className="text-2xl font-black text-white mb-6">Proven Unit Economics</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* User Economics */}
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
                  <h4 className="text-blue-400 font-bold mb-4 flex items-center gap-2">
                    <Users size={20} /> User Unit Economics
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <p className="text-slate-400 text-xs">CAC (Blended)</p>
                      <p className="text-xl font-black text-white">{unitEconomics.userCAC}</p>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <p className="text-slate-400 text-xs">LTV</p>
                      <p className="text-xl font-black text-white">{unitEconomics.userLTV}</p>
                    </div>
                    <div className="bg-green-500/20 rounded-lg p-3">
                      <p className="text-green-400 text-xs">LTV:CAC Ratio</p>
                      <p className="text-xl font-black text-green-400">{unitEconomics.ltvCacRatio}</p>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <p className="text-slate-400 text-xs">Payback</p>
                      <p className="text-xl font-black text-white">{unitEconomics.paybackPeriod}</p>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <p className="text-slate-400 text-xs">Avg Transactions</p>
                      <p className="text-xl font-black text-white">{unitEconomics.avgTransactions}</p>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <p className="text-slate-400 text-xs">Avg Order Value</p>
                      <p className="text-xl font-black text-white">{unitEconomics.avgTransactionValue}</p>
                    </div>
                    <div className="bg-[#c9a227]/20 rounded-lg p-3">
                      <p className="text-[#c9a227] text-xs">Monthly GMV/User</p>
                      <p className="text-xl font-black text-[#c9a227]">{unitEconomics.monthlyGMVPerUser}</p>
                    </div>
                    <div className="bg-[#c9a227]/20 rounded-lg p-3">
                      <p className="text-[#c9a227] text-xs">Annual GMV/User</p>
                      <p className="text-xl font-black text-[#c9a227]">{unitEconomics.annualGMVPerUser}</p>
                    </div>
                  </div>
                </div>

                {/* Merchant Economics */}
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
                  <h4 className="text-green-400 font-bold mb-4 flex items-center gap-2">
                    <Store size={20} /> Merchant Unit Economics
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <p className="text-slate-400 text-xs">CAC per Merchant</p>
                      <p className="text-xl font-black text-white">{unitEconomics.merchantCAC}</p>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <p className="text-slate-400 text-xs">LTV per Merchant</p>
                      <p className="text-xl font-black text-white">{unitEconomics.merchantLTV}</p>
                    </div>
                    <div className="bg-green-500/20 rounded-lg p-3">
                      <p className="text-green-400 text-xs">LTV:CAC Ratio</p>
                      <p className="text-xl font-black text-green-400">24x</p>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <p className="text-slate-400 text-xs">Churn Rate</p>
                      <p className="text-xl font-black text-white">{unitEconomics.merchantChurn}</p>
                    </div>
                    <div className="bg-[#c9a227]/20 rounded-lg p-3 col-span-2">
                      <p className="text-[#c9a227] text-xs">Blended Take Rate</p>
                      <p className="text-2xl font-black text-[#c9a227]">{unitEconomics.takeRate}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Funding Rounds */}
            <div className="bg-slate-800/50 rounded-2xl p-6">
              <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-2">
                <Briefcase className="text-blue-400" size={24} />
                Funding Roadmap
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { round: "Pre-Seed/SAFE", amount: "$400K", timing: "Q1 2026", status: "Active", use: "Launch, 50K MAU, 1,500 merchants", valuation: "$5M cap" },
                  { round: "Seed", amount: "$2-3M", timing: "Q4 2026", status: "Planned", use: "Scale to 100K MAU, 2,500 merchants", valuation: "$20-30M" },
                  { round: "Series A", amount: "$15-25M", timing: "Q2 2027", status: "Projected", use: "500K MAU, KSA expansion, Team to 120", valuation: "$80-120M" },
                  { round: "Series B", amount: "$50-75M", timing: "Q2 2028", status: "Vision", use: "1.5M MAU, Full GCC, Team to 270", valuation: "$300-500M" },
                ].map((round) => (
                  <div key={round.round} className="bg-slate-900/50 rounded-xl p-5 border border-slate-700">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-white font-bold">{round.round}</h4>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                        round.status === 'Active' ? 'bg-[#c9a227]/20 text-[#c9a227]' :
                        round.status === 'Planned' ? 'bg-blue-500/20 text-blue-400' :
                        round.status === 'Projected' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-slate-700 text-slate-400'
                      }`}>{round.status}</span>
                    </div>
                    <p className="text-2xl font-black text-green-400 mb-1">{round.amount}</p>
                    <p className="text-slate-400 text-sm mb-1">{round.timing}</p>
                    <p className="text-[#c9a227] text-xs mb-2">{round.valuation}</p>
                    <p className="text-slate-500 text-xs">{round.use}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Scenario Analysis */}
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/30 rounded-2xl p-6">
              <h3 className="text-2xl font-black text-white mb-6">Year 5 Scenario Analysis</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-slate-900/50 rounded-xl p-5 border border-amber-500/30">
                  <h4 className="text-amber-400 font-bold mb-3">Conservative (0.7x)</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between"><span className="text-slate-400">Users</span><span className="text-white font-bold">3,500,000</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Revenue</span><span className="text-white font-bold">AED 336M</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">EBITDA</span><span className="text-amber-400 font-bold">AED 202M</span></div>
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-5 border border-green-500/30">
                  <h4 className="text-green-400 font-bold mb-3">Base Case (1.0x)</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between"><span className="text-slate-400">Users</span><span className="text-white font-bold">5,000,000</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Revenue</span><span className="text-white font-bold">AED 480M</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">EBITDA</span><span className="text-green-400 font-bold">AED 288M</span></div>
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-5 border border-blue-500/30">
                  <h4 className="text-blue-400 font-bold mb-3">Optimistic (1.3x)</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between"><span className="text-slate-400">Users</span><span className="text-white font-bold">6,500,000</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Revenue</span><span className="text-white font-bold">AED 624M</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">EBITDA</span><span className="text-blue-400 font-bold">AED 374M</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quality Tab */}
        {activeTab === 'quality' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-2 border-purple-500/30 rounded-2xl p-6">
              <h3 className="text-2xl font-black text-white mb-2 flex items-center gap-2">
                <Shield className="text-purple-400" size={24} />
                Quality Assurance Framework
              </h3>
              <p className="text-slate-400 mb-6">Measurable quality metrics for every function.</p>
              <div className="grid md:grid-cols-2 gap-4">
                {qualityFramework.map((category) => (
                  <div key={category.category} className="bg-slate-900/50 rounded-xl p-5 border border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <category.icon className="text-purple-400" size={24} />
                        <h4 className="text-white font-bold">{category.category}</h4>
                      </div>
                      <span className="text-slate-500 text-xs">Owner: {category.owner}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {category.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 size={14} className="text-green-500" />
                          <span className="text-slate-300">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Rituals */}
            <div className="bg-slate-800/50 rounded-2xl p-6">
              <h3 className="text-2xl font-black text-white mb-6">Quality Rituals</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { ritual: "Daily Standups", frequency: "Daily", participants: "All Teams", purpose: "Blockers, Progress" },
                  { ritual: "Sprint Reviews", frequency: "Bi-weekly", participants: "Product + Eng", purpose: "Demo, Feedback" },
                  { ritual: "QBRs", frequency: "Quarterly", participants: "Leadership", purpose: "Strategy, Metrics" },
                  { ritual: "Code Reviews", frequency: "Every PR", participants: "Engineering", purpose: "Quality, Learning" },
                  { ritual: "Customer Calls", frequency: "Weekly", participants: "Product + CS", purpose: "Feedback Loop" },
                  { ritual: "Incident Reviews", frequency: "Post-Incident", participants: "Relevant Teams", purpose: "Learn, Prevent" },
                ].map((ritual) => (
                  <div key={ritual.ritual} className="bg-slate-900/50 rounded-xl p-4">
                    <h5 className="text-white font-bold mb-2">{ritual.ritual}</h5>
                    <div className="space-y-1 text-sm">
                      <p className="text-slate-400"><span className="text-slate-500">Frequency:</span> {ritual.frequency}</p>
                      <p className="text-slate-400"><span className="text-slate-500">Who:</span> {ritual.participants}</p>
                      <p className="text-slate-400"><span className="text-slate-500">Purpose:</span> {ritual.purpose}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/10 border-2 border-[#c9a227]/50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-black text-white mb-4">Ready to Execute</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            This plan is our commitment. Every quarter has clear milestones. Every role has defined responsibilities.
            Every metric is tracked. Let&apos;s dominate the GCC.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/executive-team"
              className="flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-black font-bold rounded-xl hover:bg-[#e8c547] transition-colors"
            >
              <Crown size={20} />
              View Executive Team
            </Link>
            <Link
              href="/master-roadmap"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-colors border border-slate-700"
            >
              <Map size={20} />
              Master Roadmap
            </Link>
            <Link
              href="/data-room"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-colors border border-slate-700"
            >
              <Database size={20} />
              Data Room
            </Link>
          </div>
        </div>

        {/* Document Info */}
        <div className="mt-8 text-center text-slate-500 text-sm">
          <p>3-Year Domination Plan • G-Suite Board Document • Nuqta</p>
          <p>Last Updated: February 2026 • Confidential</p>
        </div>
      </main>

      <GlobalFooter />
    </div>
  );
}
