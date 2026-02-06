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
  northStar: "1 Million Monthly Active Users by Year 5",
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
    theme: "UAE Launch & Foundation",
    tagline: "Build the machine that builds the company",
    color: "text-blue-400",
    borderColor: "border-blue-500/30",
    bgColor: "from-blue-500/10 to-blue-600/5",
    keyMetrics: [
      { label: "MAU Target", value: "10,000", icon: Users },
      { label: "Merchants", value: "250", icon: Store },
      { label: "GMV", value: "AED 12M", icon: DollarSign },
      { label: "Revenue", value: "AED 960K", icon: TrendingUp },
      { label: "Team Size", value: "15-20", icon: Users },
      { label: "CAC Target", value: "<AED 15", icon: Target },
    ],
    milestones: [
      {
        quarter: "Q1 2026",
        title: "Foundation & MVP",
        metrics: ["1,000 beta users", "50 pilot merchants", "Core app live"],
        teamActions: ["Hire COO", "Hire CMO", "Complete core engineering"],
        status: "current"
      },
      {
        quarter: "Q2 2026",
        title: "Soft Launch",
        metrics: ["3,000 users", "100 merchants", "First partnerships live"],
        teamActions: ["Sales team (3 BDMs)", "Customer success hire", "Marketing specialist"],
        status: "upcoming"
      },
      {
        quarter: "Q3 2026",
        title: "Market Validation",
        metrics: ["6,000 users", "175 merchants", "Product-market fit signals"],
        teamActions: ["Engineering expansion", "Operations manager", "QA lead"],
        status: "upcoming"
      },
      {
        quarter: "Q4 2026",
        title: "Scale Ready",
        metrics: ["10,000 MAU", "250 merchants", "Series A ready"],
        teamActions: ["Full marketing team", "Partnerships lead", "Finance hire"],
        status: "upcoming"
      }
    ],
    teamGrowth: [
      { role: "CEO", count: 1, timing: "Filled" },
      { role: "COO", count: 1, timing: "Q1 2026" },
      { role: "CMO", count: 1, timing: "Q1 2026" },
      { role: "Engineering", count: 5, timing: "Q1-Q2 2026" },
      { role: "Sales/BDMs", count: 4, timing: "Q2 2026" },
      { role: "Marketing", count: 3, timing: "Q2-Q3 2026" },
      { role: "Operations", count: 2, timing: "Q3 2026" },
      { role: "Customer Success", count: 2, timing: "Q3-Q4 2026" },
    ],
    keyInitiatives: [
      "Launch beta with 50 pilot merchants across 5 industries",
      "Secure first 3 strategic partnerships (BNPL, bank, mall)",
      "Build and validate unit economics",
      "Establish brand presence in Dubai",
      "Create operational SOPs for all functions",
      "Achieve product-market fit signals",
      "Prepare Series A materials and data room",
    ],
    risks: [
      "Slow merchant adoption - mitigate with incentive programs",
      "User acquisition cost exceeds budget - focus on referrals",
      "Key hire delays - maintain pipeline, use contractors",
      "Technical debt - weekly code reviews, CI/CD pipeline",
    ]
  },
  {
    year: 2,
    theme: "UAE Dominance & GCC Entry",
    tagline: "Own Dubai, prepare for the Gulf",
    color: "text-purple-400",
    borderColor: "border-purple-500/30",
    bgColor: "from-purple-500/10 to-purple-600/5",
    keyMetrics: [
      { label: "MAU Target", value: "200,000", icon: Users },
      { label: "Merchants", value: "3,000", icon: Store },
      { label: "GMV", value: "AED 240M", icon: DollarSign },
      { label: "Revenue", value: "AED 19.2M", icon: TrendingUp },
      { label: "Team Size", value: "45-55", icon: Users },
      { label: "Markets", value: "UAE + KSA Prep", icon: Globe },
    ],
    milestones: [
      {
        quarter: "Q1 2027",
        title: "Series A Close",
        metrics: ["25,000 MAU", "500 merchants", "Series A closed"],
        teamActions: ["Double engineering", "Regional expansion team", "HR lead hire"],
        status: "upcoming"
      },
      {
        quarter: "Q2 2027",
        title: "Dubai Saturation",
        metrics: ["75,000 MAU", "1,200 merchants", "All Dubai zones covered"],
        teamActions: ["Full sales org", "Dedicated partnerships team", "Data team"],
        status: "upcoming"
      },
      {
        quarter: "Q3 2027",
        title: "Abu Dhabi + Northern Emirates",
        metrics: ["125,000 MAU", "2,000 merchants", "Full UAE coverage"],
        teamActions: ["Abu Dhabi team", "Northern Emirates rep", "Expanded support"],
        status: "upcoming"
      },
      {
        quarter: "Q4 2027",
        title: "KSA Preparation",
        metrics: ["200,000 MAU", "3,000 merchants", "KSA licensing done"],
        teamActions: ["KSA GM hired", "Riyadh office setup", "Legal & compliance"],
        status: "upcoming"
      }
    ],
    teamGrowth: [
      { role: "C-Suite", count: 5, timing: "Full team" },
      { role: "Engineering", count: 15, timing: "Q1-Q2 2027" },
      { role: "Sales/BDMs", count: 12, timing: "Throughout" },
      { role: "Marketing", count: 8, timing: "Q1-Q2 2027" },
      { role: "Operations", count: 6, timing: "Throughout" },
      { role: "Customer Success", count: 5, timing: "Q2-Q3 2027" },
      { role: "KSA Team", count: 4, timing: "Q4 2027" },
    ],
    keyInitiatives: [
      "Close Series A funding ($5-10M)",
      "Achieve 10% market penetration in Dubai",
      "Launch in Abu Dhabi and Northern Emirates",
      "Secure 5+ enterprise partnerships",
      "Build AI/ML recommendation engine",
      "Establish KSA legal entity and licensing",
      "Create playbooks for GCC expansion",
      "Achieve profitability in core business",
    ],
    risks: [
      "Series A timing - multiple term sheets, strong metrics",
      "Competition intensifies - double down on UX and partnerships",
      "UAE market slower than expected - expand verticals",
      "KSA regulatory complexity - hire local experts early",
    ]
  },
  {
    year: 3,
    theme: "GCC Expansion",
    tagline: "From UAE leader to GCC powerhouse",
    color: "text-[#c9a227]",
    borderColor: "border-[#c9a227]/30",
    bgColor: "from-[#c9a227]/10 to-[#c9a227]/5",
    keyMetrics: [
      { label: "MAU Target", value: "500,000+", icon: Users },
      { label: "Merchants", value: "7,500", icon: Store },
      { label: "GMV", value: "AED 600M", icon: DollarSign },
      { label: "Revenue", value: "AED 48M", icon: TrendingUp },
      { label: "Team Size", value: "90-110", icon: Users },
      { label: "Markets", value: "UAE + KSA + 1", icon: Globe },
    ],
    milestones: [
      {
        quarter: "Q1 2028",
        title: "KSA Launch",
        metrics: ["50,000 KSA users", "500 KSA merchants", "Riyadh + Jeddah live"],
        teamActions: ["Full KSA team (15)", "Dammam expansion", "Local partnerships"],
        status: "upcoming"
      },
      {
        quarter: "Q2 2028",
        title: "Series B Preparation",
        metrics: ["300,000 MAU total", "4,500 merchants", "Strong unit economics"],
        teamActions: ["Investor relations", "Data room update", "Board advisory"],
        status: "upcoming"
      },
      {
        quarter: "Q3 2028",
        title: "Third Market Entry",
        metrics: ["400,000 MAU", "6,000 merchants", "Qatar or Bahrain live"],
        teamActions: ["Third market GM", "Regional operations", "Localization team"],
        status: "upcoming"
      },
      {
        quarter: "Q4 2028",
        title: "Series B Close",
        metrics: ["500,000+ MAU", "7,500 merchants", "Series B closed"],
        teamActions: ["100+ employees", "Regional HQ Dubai", "GCC leadership team"],
        status: "upcoming"
      }
    ],
    teamGrowth: [
      { role: "C-Suite + VPs", count: 10, timing: "Full leadership" },
      { role: "Engineering", count: 30, timing: "Throughout" },
      { role: "Sales/BDMs", count: 25, timing: "By market" },
      { role: "Marketing", count: 15, timing: "Regional teams" },
      { role: "Operations", count: 12, timing: "Throughout" },
      { role: "Customer Success", count: 10, timing: "By market" },
      { role: "KSA + Qatar", count: 25, timing: "Q1-Q3 2028" },
    ],
    keyInitiatives: [
      "Launch and scale in KSA (Riyadh, Jeddah, Dammam)",
      "Enter third GCC market (Qatar or Bahrain)",
      "Close Series B funding ($20-30M)",
      "Build regional partnerships with major banks",
      "Launch B2B enterprise product",
      "Achieve EBITDA positive at group level",
      "Establish Dubai as regional HQ",
      "Create M&A capability for acqui-hires",
    ],
    risks: [
      "Multi-market complexity - strong local GMs, centralized tech",
      "Series B market conditions - maintain strong growth metrics",
      "Currency risk - multi-currency treasury management",
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

const financialProjections = {
  year1: { revenue: "960K", costs: "2.5M", burn: "1.54M", runway: "18 months" },
  year2: { revenue: "19.2M", costs: "15M", ebitda: "4.2M", margin: "22%" },
  year3: { revenue: "48M", costs: "35M", ebitda: "13M", margin: "27%" },
  year5: { revenue: "115.2M", gmv: "1.44B", ebitda: "57.6M", margin: "50%" }
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
                {[
                  { year: "Now", count: "3-5", color: "text-slate-400" },
                  { year: "End Y1", count: "15-20", color: "text-blue-400" },
                  { year: "End Y2", count: "45-55", color: "text-purple-400" },
                  { year: "End Y3", count: "90-110", color: "text-[#c9a227]" },
                  { year: "End Y5", count: "165+", color: "text-green-400" },
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
              <h3 className="text-2xl font-black text-white mb-6">Department Structure (Year 3)</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { dept: "Engineering", count: 30, icon: Settings, color: "text-blue-400" },
                  { dept: "Sales & BD", count: 25, icon: Target, color: "text-green-400" },
                  { dept: "Marketing", count: 15, icon: Megaphone, color: "text-pink-400" },
                  { dept: "Operations", count: 12, icon: Building2, color: "text-purple-400" },
                  { dept: "Customer Success", count: 10, icon: Heart, color: "text-red-400" },
                  { dept: "C-Suite & Leadership", count: 10, icon: Crown, color: "text-[#c9a227]" },
                  { dept: "Finance & Legal", count: 5, icon: DollarSign, color: "text-cyan-400" },
                  { dept: "HR & Admin", count: 5, icon: Users, color: "text-amber-400" },
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
            {/* Financial Summary */}
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border-2 border-green-500/30 rounded-2xl p-6">
              <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-2">
                <DollarSign className="text-green-400" size={24} />
                Financial Projections
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {/* Year 1 */}
                <div className="bg-slate-900/50 rounded-xl p-5">
                  <h4 className="text-blue-400 font-bold mb-3">Year 1</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Revenue</span>
                      <span className="text-white font-bold">AED {financialProjections.year1.revenue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Costs</span>
                      <span className="text-red-400 font-bold">AED {financialProjections.year1.costs}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Net Burn</span>
                      <span className="text-amber-400 font-bold">AED {financialProjections.year1.burn}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-slate-700">
                      <span className="text-slate-400">Runway</span>
                      <span className="text-green-400 font-bold">{financialProjections.year1.runway}</span>
                    </div>
                  </div>
                </div>

                {/* Year 2 */}
                <div className="bg-slate-900/50 rounded-xl p-5">
                  <h4 className="text-purple-400 font-bold mb-3">Year 2</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Revenue</span>
                      <span className="text-white font-bold">AED {financialProjections.year2.revenue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Costs</span>
                      <span className="text-slate-300 font-bold">AED {financialProjections.year2.costs}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">EBITDA</span>
                      <span className="text-green-400 font-bold">AED {financialProjections.year2.ebitda}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-slate-700">
                      <span className="text-slate-400">Margin</span>
                      <span className="text-green-400 font-bold">{financialProjections.year2.margin}</span>
                    </div>
                  </div>
                </div>

                {/* Year 3 */}
                <div className="bg-slate-900/50 rounded-xl p-5">
                  <h4 className="text-[#c9a227] font-bold mb-3">Year 3</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Revenue</span>
                      <span className="text-white font-bold">AED {financialProjections.year3.revenue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Costs</span>
                      <span className="text-slate-300 font-bold">AED {financialProjections.year3.costs}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">EBITDA</span>
                      <span className="text-green-400 font-bold">AED {financialProjections.year3.ebitda}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-slate-700">
                      <span className="text-slate-400">Margin</span>
                      <span className="text-green-400 font-bold">{financialProjections.year3.margin}</span>
                    </div>
                  </div>
                </div>

                {/* Year 5 Target */}
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-xl p-5 border border-green-500/30">
                  <h4 className="text-green-400 font-bold mb-3">Year 5 (Target)</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Revenue</span>
                      <span className="text-white font-bold">AED {financialProjections.year5.revenue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">GMV</span>
                      <span className="text-[#c9a227] font-bold">AED {financialProjections.year5.gmv}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">EBITDA</span>
                      <span className="text-green-400 font-bold">AED {financialProjections.year5.ebitda}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-green-500/30">
                      <span className="text-slate-400">Margin</span>
                      <span className="text-green-400 font-bold">{financialProjections.year5.margin}</span>
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
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { round: "Pre-Seed", amount: "$500K - $1M", timing: "Q1 2026", status: "Active", use: "MVP, Beta Launch, Core Team" },
                  { round: "Series A", amount: "$5M - $10M", timing: "Q4 2026 / Q1 2027", status: "Planned", use: "UAE Scale, GCC Prep, Team to 50" },
                  { round: "Series B", amount: "$20M - $30M", timing: "Q4 2028", status: "Projected", use: "GCC Expansion, 100+ Team, Profitability" },
                ].map((round) => (
                  <div key={round.round} className="bg-slate-900/50 rounded-xl p-5 border border-slate-700">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-white font-bold text-lg">{round.round}</h4>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                        round.status === 'Active' ? 'bg-[#c9a227]/20 text-[#c9a227]' :
                        round.status === 'Planned' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-slate-700 text-slate-400'
                      }`}>{round.status}</span>
                    </div>
                    <p className="text-2xl font-black text-green-400 mb-1">{round.amount}</p>
                    <p className="text-slate-400 text-sm mb-3">{round.timing}</p>
                    <p className="text-slate-500 text-sm">Use: {round.use}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Unit Economics */}
            <div className="bg-slate-800/50 rounded-2xl p-6">
              <h3 className="text-2xl font-black text-white mb-6">Unit Economics Target</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { metric: "CAC", value: "<AED 15", status: "Target" },
                  { metric: "LTV", value: ">AED 150", status: "Target" },
                  { metric: "LTV:CAC", value: ">10:1", status: "Target" },
                  { metric: "Payback", value: "<3 months", status: "Target" },
                  { metric: "Take Rate", value: "8%", status: "Model" },
                  { metric: "Gross Margin", value: ">70%", status: "Target" },
                  { metric: "Merchant Churn", value: "<5%/mo", status: "Target" },
                  { metric: "User Retention", value: ">40% M3", status: "Target" },
                ].map((item) => (
                  <div key={item.metric} className="bg-slate-900/50 rounded-xl p-4 text-center">
                    <p className="text-slate-400 text-sm">{item.metric}</p>
                    <p className="text-2xl font-black text-white">{item.value}</p>
                    <p className="text-green-400 text-xs">{item.status}</p>
                  </div>
                ))}
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
