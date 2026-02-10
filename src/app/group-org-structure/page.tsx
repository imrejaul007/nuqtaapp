'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft, Users, Crown, Building2, Briefcase, UserCheck,
  Star, Shield, Target, ChevronRight, Code, Palette, TrendingUp,
  Headphones, Scale, DollarSign, Globe, Megaphone, Settings,
  CheckCircle2, ArrowRight, Network, Layers, UserPlus
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

export default function GroupOrgStructurePage() {
  const [activeTab, setActiveTab] = useState('leadership');

  const tabs = [
    { id: 'leadership', label: 'Leadership', icon: Crown },
    { id: 'csuites', label: 'C-Suite', icon: Briefcase },
    { id: 'departments', label: 'Departments', icon: Building2 },
    { id: 'subsidiaries', label: 'Subsidiaries', icon: Layers },
    { id: 'hiring', label: 'Hiring Plan', icon: UserPlus },
    { id: 'culture', label: 'Culture', icon: Star },
  ];

  const boardOfDirectors = [
    {
      role: 'Chairman',
      name: 'TBD - Strategic Hire',
      background: 'Former CEO of major GCC bank or tech company',
      responsibilities: ['Board leadership', 'Strategic direction', 'Investor relations'],
      equity: '2-3%'
    },
    {
      role: 'Founder & CEO',
      name: 'Founder',
      background: 'Visionary entrepreneur leading the Nuqta ecosystem',
      responsibilities: ['Company vision', 'Product strategy', 'Team leadership', 'Fundraising'],
      equity: '25-35%'
    },
    {
      role: 'Independent Director',
      name: 'TBD - Islamic Finance Expert',
      background: 'Former Shariah board member of major Islamic bank',
      responsibilities: ['Shariah compliance oversight', 'Islamic finance strategy'],
      equity: '0.5-1%'
    },
    {
      role: 'Independent Director',
      name: 'TBD - Tech Industry Veteran',
      background: 'Former CTO/CPO of major tech company',
      responsibilities: ['Technology strategy', 'Product oversight'],
      equity: '0.5-1%'
    },
    {
      role: 'Investor Director',
      name: 'Lead Investor Representative',
      background: 'Partner at lead VC/PE firm',
      responsibilities: ['Investor interests', 'Governance', 'Strategic guidance'],
      equity: 'Investor allocation'
    },
  ];

  const cSuiteTeam = [
    {
      role: 'Chief Executive Officer (CEO)',
      reports: 'Board of Directors',
      responsibilities: [
        'Overall company strategy and vision',
        'Investor relations and fundraising',
        'Public company representation',
        'Team culture and leadership'
      ],
      requirements: 'Serial entrepreneur or senior executive with fintech/super-app experience',
      compensation: '2.5M AED + 5-8% equity'
    },
    {
      role: 'Chief Operating Officer (COO)',
      reports: 'CEO',
      responsibilities: [
        'Day-to-day operations across all subsidiaries',
        'Cross-functional coordination',
        'Process optimization and scaling',
        'Vendor and partner management'
      ],
      requirements: 'Operations leader from major tech company with GCC experience',
      compensation: '1.8M AED + 2-3% equity'
    },
    {
      role: 'Chief Financial Officer (CFO)',
      reports: 'CEO',
      responsibilities: [
        'Financial planning and analysis',
        'Fundraising and investor relations',
        'Regulatory financial compliance',
        'Treasury and capital allocation'
      ],
      requirements: 'CFO experience at growth-stage fintech, Big 4 background preferred',
      compensation: '1.8M AED + 2-3% equity'
    },
    {
      role: 'Chief Technology Officer (CTO)',
      reports: 'CEO',
      responsibilities: [
        'Technology strategy and architecture',
        'Engineering team leadership',
        'Platform scalability and security',
        'Innovation and R&D'
      ],
      requirements: 'Engineering leader from major tech company, super-app experience preferred',
      compensation: '2M AED + 3-4% equity'
    },
    {
      role: 'Chief Product Officer (CPO)',
      reports: 'CEO',
      responsibilities: [
        'Product vision across all 10 products',
        'User experience strategy',
        'Product-market fit optimization',
        'Feature prioritization'
      ],
      requirements: 'Product leader with consumer app experience at scale',
      compensation: '1.8M AED + 2-3% equity'
    },
    {
      role: 'Chief Marketing Officer (CMO)',
      reports: 'CEO',
      responsibilities: [
        'Brand strategy and positioning',
        'User acquisition and growth',
        'Marketing across all products',
        'PR and communications'
      ],
      requirements: 'Marketing leader with consumer brand experience in GCC',
      compensation: '1.5M AED + 1.5-2% equity'
    },
    {
      role: 'Chief Compliance Officer (CCO)',
      reports: 'CEO & Board',
      responsibilities: [
        'Regulatory compliance across all licenses',
        'Shariah compliance and certification',
        'Risk management',
        'AML/KYC frameworks'
      ],
      requirements: 'Compliance executive from regulated financial institution',
      compensation: '1.5M AED + 1-2% equity'
    },
    {
      role: 'Chief People Officer (CPO)',
      reports: 'CEO',
      responsibilities: [
        'Talent acquisition and retention',
        'Company culture and values',
        'Compensation and benefits',
        'Learning and development'
      ],
      requirements: 'HR leader from high-growth tech company',
      compensation: '1.2M AED + 1-1.5% equity'
    },
  ];

  const departments = [
    {
      name: 'Engineering',
      head: 'CTO',
      teams: ['Platform', 'Mobile', 'Backend', 'Data', 'Security', 'DevOps', 'QA'],
      headcount: { year1: 50, year3: 200, year5: 500 },
      icon: Code
    },
    {
      name: 'Product',
      head: 'CPO',
      teams: ['Core Product', 'Growth', 'Design', 'UX Research', 'Analytics'],
      headcount: { year1: 20, year3: 80, year5: 200 },
      icon: Palette
    },
    {
      name: 'Marketing',
      head: 'CMO',
      teams: ['Brand', 'Performance', 'Content', 'Social', 'PR', 'Partnerships'],
      headcount: { year1: 15, year3: 60, year5: 150 },
      icon: Megaphone
    },
    {
      name: 'Operations',
      head: 'COO',
      teams: ['Customer Ops', 'Merchant Ops', 'Logistics', 'Supply Chain'],
      headcount: { year1: 30, year3: 150, year5: 400 },
      icon: Settings
    },
    {
      name: 'Finance',
      head: 'CFO',
      teams: ['Accounting', 'FP&A', 'Treasury', 'Tax', 'Investor Relations'],
      headcount: { year1: 10, year3: 40, year5: 100 },
      icon: DollarSign
    },
    {
      name: 'Compliance & Legal',
      head: 'CCO',
      teams: ['Regulatory', 'Shariah', 'Legal', 'Risk', 'AML'],
      headcount: { year1: 10, year3: 35, year5: 80 },
      icon: Scale
    },
    {
      name: 'Customer Experience',
      head: 'COO',
      teams: ['Support', 'Success', 'Training', 'Quality'],
      headcount: { year1: 40, year3: 200, year5: 600 },
      icon: Headphones
    },
    {
      name: 'Business Development',
      head: 'CEO',
      teams: ['Strategic Partnerships', 'Enterprise Sales', 'Government'],
      headcount: { year1: 10, year3: 40, year5: 100 },
      icon: TrendingUp
    },
  ];

  const subsidiaryLeaders = [
    { company: 'Nuqta Financial Services', products: ['Nuqta', 'Qist', 'Hawil'], ceo: 'GM Financial Services', headcount: 150 },
    { company: 'Nuqta Lifestyle Co.', products: ['Nuqta+', 'Fakhir'], ceo: 'GM Lifestyle', headcount: 50 },
    { company: 'Nuqta PropTech', products: ['Sakin'], ceo: 'GM PropTech', headcount: 80 },
    { company: 'Nuqta Mobility', products: ['Rakab', 'Wasil'], ceo: 'GM Mobility', headcount: 200 },
    { company: 'Nuqta Travel', products: ['Safar'], ceo: 'GM Travel', headcount: 60 },
    { company: 'Nuqta Marketplace', products: ['Ajer'], ceo: 'GM Marketplace', headcount: 40 },
  ];

  const hiringPlan = [
    { phase: 'Seed (Y1)', total: 50, engineering: 20, product: 8, ops: 12, other: 10 },
    { phase: 'Series A (Y1-2)', total: 150, engineering: 60, product: 25, ops: 40, other: 25 },
    { phase: 'Series B (Y2-3)', total: 400, engineering: 150, product: 60, ops: 120, other: 70 },
    { phase: 'Series C (Y3-4)', total: 800, engineering: 300, product: 100, ops: 280, other: 120 },
    { phase: 'Series D+ (Y4-5)', total: 1500, engineering: 500, product: 200, ops: 550, other: 250 },
  ];

  const cultureValues = [
    {
      value: 'User Obsession',
      arabic: 'هوس العميل',
      description: 'Every decision starts with the user. We build for their success.',
      behaviors: ['Customer-first decisions', 'Regular user research', 'Fast feedback loops']
    },
    {
      value: 'Ownership Mindset',
      arabic: 'عقلية الملكية',
      description: 'Act like an owner. Take responsibility for outcomes.',
      behaviors: ['End-to-end accountability', 'Proactive problem solving', 'Long-term thinking']
    },
    {
      value: 'Bias for Action',
      arabic: 'انحياز للعمل',
      description: 'Move fast, learn faster. Speed is a competitive advantage.',
      behaviors: ['Quick decisions', 'Fail fast, learn faster', 'Ship early and iterate']
    },
    {
      value: 'Trust & Transparency',
      arabic: 'الثقة والشفافية',
      description: 'Be open, be honest, be trustworthy in all interactions.',
      behaviors: ['Open communication', 'Honest feedback', 'Shariah-compliant always']
    },
    {
      value: 'Excellence Together',
      arabic: 'التميز معاً',
      description: 'High standards, delivered as one unified team.',
      behaviors: ['Cross-team collaboration', 'Raise the bar', 'Celebrate wins together']
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/group-master-plan" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Back to Master Plan</span>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold">Organization</h1>
                <p className="text-xs text-white/60">Structure & Team</p>
              </div>
            </div>
            <Link href="/group-launch-strategy" className="text-sm text-[#c9a227] hover:text-[#e8c547] transition-colors flex items-center gap-1">
              <span className="hidden sm:inline">Launch Strategy</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-[#c9a227]/20" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-[#c9a227] bg-clip-text text-transparent">
                World-Class Team
              </span>
              <br />
              <span className="text-white">Building the Future</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              1,500+ talented individuals across 6 countries, united by a mission to
              build the world's leading Islamic super-app ecosystem.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { label: 'Team Size (Y5)', value: '1,500+' },
                { label: 'Countries', value: '6' },
                { label: 'C-Suite', value: '8' },
                { label: 'Subsidiaries', value: '6' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-xl sm:text-2xl font-bold text-purple-400">{stat.value}</p>
                  <p className="text-sm text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="border-b border-white/10 sticky top-[73px] bg-black/90 backdrop-blur-xl z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 sm:gap-2 overflow-x-auto py-2 scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-purple-500 text-white'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

        {/* Leadership Tab */}
        {activeTab === 'leadership' && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Board of Directors</h2>
              <p className="text-white/70">World-class governance with diverse expertise in
              technology, finance, and Islamic banking.</p>
            </div>

            <div className="grid gap-4">
              {boardOfDirectors.map((member, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-purple-500/50 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shrink-0">
                        <Crown className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{member.role}</h3>
                        <p className="text-purple-400">{member.name}</p>
                        <p className="text-sm text-white/60">{member.background}</p>
                      </div>
                    </div>
                    <div className="sm:ml-auto flex flex-col sm:items-end gap-2">
                      <span className="px-3 py-1 bg-[#c9a227]/20 rounded-full text-sm text-[#c9a227]">
                        Equity: {member.equity}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {member.responsibilities.map((resp, j) => (
                      <span key={j} className="px-3 py-1 bg-white/5 rounded-lg text-sm text-white/70">{resp}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-[#c9a227]/20 rounded-2xl p-6 border border-purple-500/30">
              <h3 className="text-lg font-bold mb-4">Advisory Board</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: 'Shariah Advisor', expertise: 'Islamic finance & Fiqh' },
                  { title: 'Tech Advisor', expertise: 'Super-app architecture' },
                  { title: 'Regulatory Advisor', expertise: 'GCC financial regulations' },
                  { title: 'Growth Advisor', expertise: 'Consumer fintech scaling' },
                ].map((advisor, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-xl">
                    <p className="font-semibold text-purple-400">{advisor.title}</p>
                    <p className="text-sm text-white/60">{advisor.expertise}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* C-Suite Tab */}
        {activeTab === 'csuites' && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Executive Leadership</h2>
              <p className="text-white/70">8 C-suite executives leading our mission to build
              the world's largest Islamic super-app.</p>
            </div>

            <div className="grid gap-4">
              {cSuiteTeam.map((exec, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-purple-500/50 transition-all">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                    <div className="flex items-center gap-4 lg:w-1/3">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#c9a227] to-[#e8c547] flex items-center justify-center shrink-0">
                        <Briefcase className="w-7 h-7 text-black" />
                      </div>
                      <div>
                        <h3 className="font-bold">{exec.role}</h3>
                        <p className="text-sm text-white/60">Reports to: {exec.reports}</p>
                      </div>
                    </div>
                    <div className="lg:w-1/3">
                      <p className="text-sm text-white/50 mb-2">Key Responsibilities</p>
                      <ul className="space-y-1">
                        {exec.responsibilities.map((resp, j) => (
                          <li key={j} className="text-sm text-white/80 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#c9a227] shrink-0 mt-0.5" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="lg:w-1/3 lg:text-right">
                      <p className="text-sm text-white/50 mb-1">Requirements</p>
                      <p className="text-sm text-white/80 mb-3">{exec.requirements}</p>
                      <span className="inline-block px-3 py-1 bg-[#c9a227]/20 rounded-full text-sm text-[#c9a227]">
                        {exec.compensation}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-bold mb-4">Total C-Suite Compensation</h3>
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-2xl font-bold text-[#c9a227]">14M AED</p>
                  <p className="text-sm text-white/60">Total Base Salary</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-2xl font-bold text-purple-400">18-25%</p>
                  <p className="text-sm text-white/60">Total Equity Pool</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <p className="text-2xl font-bold text-emerald-400">4 Years</p>
                  <p className="text-sm text-white/60">Standard Vesting</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Departments Tab */}
        {activeTab === 'departments' && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Organizational Departments</h2>
              <p className="text-white/70">8 core departments powering the entire ecosystem,
              with clear ownership and growth trajectories.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {departments.map((dept, i) => {
                const Icon = dept.icon;
                return (
                  <div key={i} className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-purple-500/50 transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-bold">{dept.name}</h4>
                        <p className="text-sm text-white/60">Reports to: {dept.head}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {dept.teams.map((team, j) => (
                        <span key={j} className="px-2 py-0.5 bg-white/10 rounded text-xs">{team}</span>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2 bg-white/5 rounded-lg">
                        <p className="text-lg font-bold text-[#c9a227]">{dept.headcount.year1}</p>
                        <p className="text-xs text-white/50">Year 1</p>
                      </div>
                      <div className="p-2 bg-white/5 rounded-lg">
                        <p className="text-lg font-bold text-purple-400">{dept.headcount.year3}</p>
                        <p className="text-xs text-white/50">Year 3</p>
                      </div>
                      <div className="p-2 bg-white/5 rounded-lg">
                        <p className="text-lg font-bold text-emerald-400">{dept.headcount.year5}</p>
                        <p className="text-xs text-white/50">Year 5</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Subsidiaries Tab */}
        {activeTab === 'subsidiaries' && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Subsidiary Companies</h2>
              <p className="text-white/70">6 operating companies under Nuqta Group Holding,
              each with dedicated leadership and P&L ownership.</p>
            </div>

            <div className="grid gap-4">
              {subsidiaryLeaders.map((sub, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-[#c9a227]/50 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#c9a227] to-[#e8c547] flex items-center justify-center">
                        <Building2 className="w-7 h-7 text-black" />
                      </div>
                      <div>
                        <h4 className="font-bold">{sub.company}</h4>
                        <p className="text-sm text-white/60">Led by: {sub.ceo}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:ml-auto">
                      {sub.products.map((product, j) => (
                        <span key={j} className="px-3 py-1 bg-[#c9a227]/20 rounded-full text-sm text-[#c9a227]">{product}</span>
                      ))}
                    </div>
                    <div className="sm:text-right">
                      <p className="text-lg font-bold">{sub.headcount}</p>
                      <p className="text-xs text-white/50">Employees</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-[#c9a227]/20 to-purple-500/20 rounded-2xl p-6 border border-[#c9a227]/30">
              <h3 className="text-lg font-bold mb-4">Subsidiary Leadership Structure</h3>
              <div className="space-y-4">
                <p className="text-white/80">Each subsidiary operates with:</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { title: 'General Manager', desc: 'P&L ownership, strategy' },
                    { title: 'Head of Product', desc: 'Product roadmap, UX' },
                    { title: 'Head of Ops', desc: 'Day-to-day operations' },
                    { title: 'Head of Growth', desc: 'User acquisition, revenue' },
                  ].map((role, i) => (
                    <div key={i} className="p-4 bg-white/5 rounded-xl">
                      <p className="font-semibold text-[#c9a227]">{role.title}</p>
                      <p className="text-sm text-white/60">{role.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Hiring Plan Tab */}
        {activeTab === 'hiring' && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Hiring Roadmap</h2>
              <p className="text-white/70">Scaling from 50 to 1,500+ employees across
              5 years, aligned with funding milestones.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-white/60 font-medium">Phase</th>
                    <th className="text-center py-3 px-4 text-white/60 font-medium">Total</th>
                    <th className="text-center py-3 px-4 text-white/60 font-medium">Engineering</th>
                    <th className="text-center py-3 px-4 text-white/60 font-medium">Product</th>
                    <th className="text-center py-3 px-4 text-white/60 font-medium">Operations</th>
                    <th className="text-center py-3 px-4 text-white/60 font-medium">Other</th>
                  </tr>
                </thead>
                <tbody>
                  {hiringPlan.map((phase, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                      <td className="py-4 px-4 font-medium">{phase.phase}</td>
                      <td className="py-4 px-4 text-center text-[#c9a227] font-bold">{phase.total}</td>
                      <td className="py-4 px-4 text-center">{phase.engineering}</td>
                      <td className="py-4 px-4 text-center">{phase.product}</td>
                      <td className="py-4 px-4 text-center">{phase.ops}</td>
                      <td className="py-4 px-4 text-center">{phase.other}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: 'Key Hiring Markets', locations: ['UAE', 'Saudi Arabia', 'Egypt', 'India', 'Pakistan', 'Jordan'] },
                { title: 'Priority Roles Y1', roles: ['Senior Engineers', 'Product Managers', 'Compliance Officers', 'Data Scientists'] },
                { title: 'Recruiting Channels', channels: ['LinkedIn', 'Referrals', 'Tech events', 'University partnerships'] },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-5 border border-white/10">
                  <h4 className="font-bold mb-3">{item.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {(item.locations || item.roles || item.channels || []).map((tag, j) => (
                      <span key={j} className="px-2 py-1 bg-white/10 rounded text-sm">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Culture Tab */}
        {activeTab === 'culture' && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Culture & Values</h2>
              <p className="text-white/70">The guiding principles that define how we work,
              make decisions, and treat each other.</p>
            </div>

            <div className="grid gap-4">
              {cultureValues.map((value, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-[#c9a227]/50 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex items-center gap-4 sm:w-1/3">
                      <div className="w-12 h-12 rounded-xl bg-[#c9a227]/20 flex items-center justify-center">
                        <Star className="w-6 h-6 text-[#c9a227]" />
                      </div>
                      <div>
                        <h4 className="font-bold">{value.value}</h4>
                        <p className="text-sm text-[#c9a227]">{value.arabic}</p>
                      </div>
                    </div>
                    <div className="sm:w-1/3">
                      <p className="text-white/80">{value.description}</p>
                    </div>
                    <div className="sm:w-1/3">
                      <p className="text-sm text-white/50 mb-2">Key Behaviors</p>
                      <ul className="space-y-1">
                        {value.behaviors.map((behavior, j) => (
                          <li key={j} className="text-sm text-white/70 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            {behavior}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-[#c9a227]/20 rounded-2xl p-6 border border-purple-500/30">
              <h3 className="text-lg font-bold mb-4">Employee Benefits</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { benefit: 'Competitive Equity', desc: 'ESOP for all employees' },
                  { benefit: 'Health Coverage', desc: 'Comprehensive family insurance' },
                  { benefit: 'Flexible Work', desc: 'Hybrid and remote options' },
                  { benefit: 'Learning Budget', desc: '10K AED annual development' },
                  { benefit: 'Paid Leave', desc: '30 days annual + parental' },
                  { benefit: 'Wellness Program', desc: 'Gym, mental health support' },
                  { benefit: 'Team Events', desc: 'Quarterly offsites and socials' },
                  { benefit: 'Relocation Support', desc: 'Visa and housing assistance' },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-xl">
                    <p className="font-semibold text-purple-400">{item.benefit}</p>
                    <p className="text-sm text-white/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Navigation */}
      <section className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/group-master-plan" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Master Plan</span>
            </Link>
            <Link href="/group-launch-strategy" className="flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-black rounded-xl font-semibold hover:bg-[#e8c547] transition-colors">
              <span>Launch Strategy</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
