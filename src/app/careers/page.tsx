'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Briefcase,
  Code,
  TrendingUp,
  Megaphone,
  Store,
  Headphones,
  Heart,
  DollarSign,
  MapPin,
  Clock,
  Users,
  Zap,
  Star,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Building2,
  Rocket,
  Gift,
  GraduationCap,
  Coffee,
  Laptop,
  Target,
  ArrowRight,
  Search,
  Filter
} from 'lucide-react';

/**
 * NUQTA CAREERS PAGE
 * ==================
 * Comprehensive careers hub with all open positions
 * Organized by department and phase (H1/H2/H3)
 */

interface Role {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  level: 'entry' | 'mid' | 'senior' | 'lead' | 'executive';
  phase: 'H1' | 'H2' | 'H3';
  status: 'open' | 'urgent' | 'coming-soon';
  salary: string;
  equity: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: string[];
}

const openRoles: Role[] = [
  // EXECUTIVE - H1
  {
    id: 'coo-001',
    title: 'COO / Head of Operations',
    department: 'Executive',
    location: 'Dubai, UAE',
    type: 'full-time',
    level: 'executive',
    phase: 'H1',
    status: 'urgent',
    salary: 'AED 30-45K/month',
    equity: '5-10%',
    description: 'The operator who makes things happen. Own day-to-day execution, operational excellence, and ensure the machine runs smoothly while CEO focuses on vision and fundraising.',
    responsibilities: [
      'Own day-to-day operations across all departments',
      'Build and optimize all operational processes and SOPs',
      'Lead non-technical hiring - operations, support, sales',
      'Manage company budget, cash flow, vendor relationships',
      'Drive cross-functional alignment and remove blockers',
      'Handle key merchant/partner negotiations',
      'Build company culture on the ground',
      'Own legal, compliance, and regulatory matters'
    ],
    requirements: [
      '5+ years operations/GM leadership in startups',
      'Strong UAE/Dubai business network (critical)',
      'Experience scaling teams from 5 to 70+ people',
      'Arabic speaker strongly preferred',
      'Strong financial acumen and budget management',
      'Experience with UAE labor law'
    ],
    niceToHave: [
      'Fintech or payments industry experience',
      'Previous COO or GM role at growth-stage startup',
      'MBA or equivalent'
    ],
    benefits: ['Founding team equity', 'Leadership role', 'Shape company culture', 'High growth potential']
  },
  // ENGINEERING - H1
  {
    id: 'eng-001',
    title: 'Lead Full-Stack Engineer',
    department: 'Engineering',
    location: 'Dubai, UAE',
    type: 'full-time',
    level: 'lead',
    phase: 'H1',
    status: 'urgent',
    salary: 'AED 40-55K/month',
    equity: '3-5%',
    description: 'Technical co-founder level. Own the entire tech stack from React Native mobile app to Node.js backend to AWS infrastructure.',
    responsibilities: [
      'Own technical architecture and all tech stack decisions',
      'Lead development of React Native mobile app (iOS + Android)',
      'Build and maintain Node.js/Express backend APIs',
      'Design and optimize PostgreSQL database schema',
      'Manage AWS infrastructure (EC2, RDS, S3, Lambda)',
      'Set coding standards, review all code, enforce quality',
      'Hire and mentor engineering team'
    ],
    requirements: [
      '5+ years full-stack development experience',
      'Expert in React Native, TypeScript, Node.js',
      'Strong with PostgreSQL/MongoDB, Redis',
      'Experience with AWS or GCP at scale',
      'Led engineering team of 3+ people',
      'Startup experience strongly preferred'
    ],
    niceToHave: [
      'Payment/fintech integration experience',
      'Mobile app published on App Store and Play Store',
      'Previous technical co-founder experience'
    ],
    benefits: ['Significant equity', 'Build from scratch', 'Technical leadership', 'High impact role']
  },
  {
    id: 'eng-002',
    title: 'Senior Mobile Engineer',
    department: 'Engineering',
    location: 'Dubai, UAE (Remote OK)',
    type: 'full-time',
    level: 'senior',
    phase: 'H1',
    status: 'open',
    salary: 'AED 25-35K/month',
    equity: '0.5-1%',
    description: 'React Native specialist focused on building a buttery-smooth mobile experience.',
    responsibilities: [
      'Build and maintain React Native mobile app',
      'Implement new features from Figma designs',
      'Optimize app performance, memory, and battery usage',
      'Handle iOS and Android specific implementations',
      'Write unit and integration tests (target: 80% coverage)',
      'Participate in code reviews'
    ],
    requirements: [
      '3+ years React Native development',
      'Published apps on both App Store and Play Store',
      'TypeScript proficiency required',
      'Understanding of native iOS (Swift) and Android (Kotlin)',
      'Performance optimization experience'
    ],
    niceToHave: [
      'Push notifications and deep linking experience',
      'Testing experience (Jest, Detox)',
      'Fintech app experience'
    ],
    benefits: ['Equity participation', 'Remote flexibility', 'Cutting-edge tech stack', 'Small team impact']
  },
  {
    id: 'eng-003',
    title: 'UI/UX Designer',
    department: 'Engineering',
    location: 'Dubai, UAE',
    type: 'full-time',
    level: 'mid',
    phase: 'H1',
    status: 'open',
    salary: 'AED 20-30K/month',
    equity: '0.3-0.5%',
    description: 'Product designer who owns the entire user experience from research to shipped pixels.',
    responsibilities: [
      'Design all user interfaces - mobile app, merchant dashboard, website',
      'Create and maintain comprehensive design system in Figma',
      'Conduct user research - interviews, usability tests, surveys',
      'Build interactive prototypes for testing',
      'Collaborate closely with engineers on implementation'
    ],
    requirements: [
      '3+ years product design experience',
      'Expert in Figma (required)',
      'Strong mobile app design portfolio',
      'User research and usability testing experience',
      'Understanding of development constraints'
    ],
    niceToHave: [
      'Motion design / micro-interactions',
      'Fintech or consumer app experience',
      'Arabic design experience'
    ],
    benefits: ['Own the design system', 'Direct user impact', 'Equity participation', 'Creative freedom']
  },
  // GROWTH - H1
  {
    id: 'growth-001',
    title: 'Head of Growth',
    department: 'Growth',
    location: 'Dubai, UAE',
    type: 'full-time',
    level: 'lead',
    phase: 'H1',
    status: 'urgent',
    salary: 'AED 30-45K/month',
    equity: '2-4%',
    description: 'Owns the 50K MAU goal. Architect of user acquisition and retention strategy. Obsessed with data, experiments, and finding scalable growth loops.',
    responsibilities: [
      'Define and execute comprehensive growth strategy',
      'Own all user acquisition and retention metrics',
      'Design and continuously optimize referral program',
      'Run growth experiments and A/B tests weekly',
      'Analyze user cohorts, funnels, and behavior patterns',
      'Build habit loops and engagement features with Product'
    ],
    requirements: [
      '4+ years growth/marketing at consumer apps',
      'Proven track record: scaled user base 10x+',
      'Strong analytics: SQL, Amplitude/Mixpanel, Excel',
      'Experience with referral and viral mechanics',
      'A/B testing and experimentation experience'
    ],
    niceToHave: [
      'UAE/GCC market experience',
      'Fintech or rewards app experience',
      'Arabic speaker'
    ],
    benefits: ['Leadership role', 'Significant equity', 'Own the growth engine', 'High visibility']
  },
  {
    id: 'growth-002',
    title: 'Community & Ambassador Manager',
    department: 'Growth',
    location: 'Dubai, UAE',
    type: 'full-time',
    level: 'mid',
    phase: 'H1',
    status: 'open',
    salary: 'AED 12-18K/month',
    equity: '0.2-0.4%',
    description: 'Builds grassroots growth through student ambassadors, WhatsApp communities, and micro-influencer partnerships.',
    responsibilities: [
      'Build and manage student ambassador program (50+ ambassadors)',
      'Create and nurture WhatsApp/Telegram communities',
      'Identify and partner with micro-influencers',
      'Organize community events, meetups, and activations',
      'Gather and synthesize user feedback for Product'
    ],
    requirements: [
      '2+ years community management',
      'Strong personal social media presence',
      'University/student network in UAE (critical)',
      'Excellent communication and relationship skills'
    ],
    niceToHave: [
      'Arabic speaker',
      'Event planning experience',
      'Influencer marketing experience'
    ],
    benefits: ['Build community from scratch', 'Event access', 'Networking opportunities', 'Growth potential']
  },
  // MARKETING - H1
  {
    id: 'mkt-001',
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'Dubai, UAE',
    type: 'full-time',
    level: 'senior',
    phase: 'H1',
    status: 'open',
    salary: 'AED 25-35K/month',
    equity: '1-2%',
    description: 'Leads all marketing efforts. Owns brand strategy, campaigns, PR, and the marketing team.',
    responsibilities: [
      'Define and execute marketing strategy and calendar',
      'Plan and manage marketing budget',
      'Coordinate integrated marketing campaigns',
      'Own brand positioning, messaging, and guidelines',
      'Manage PR and media relations in UAE'
    ],
    requirements: [
      '4+ years marketing experience',
      'Consumer app or fintech marketing preferred',
      'UAE market experience (important)',
      'Strong campaign management skills'
    ],
    niceToHave: [
      'Media/PR contacts in UAE',
      'Arabic speaker',
      'Influencer marketing experience'
    ],
    benefits: ['Build the brand', 'Leadership role', 'Equity participation', 'Creative freedom']
  },
  {
    id: 'mkt-002',
    title: 'Content & Social Media Manager',
    department: 'Marketing',
    location: 'Dubai, UAE',
    type: 'full-time',
    level: 'mid',
    phase: 'H1',
    status: 'open',
    salary: 'AED 12-18K/month',
    equity: '0.2-0.3%',
    description: 'Creates scroll-stopping content and manages all social channels.',
    responsibilities: [
      'Create and manage weekly content calendar',
      'Post and engage daily on all social channels',
      'Write compelling copy for app, website, and ads',
      'Monitor social trends and jump on opportunities',
      'Respond to comments and DMs promptly'
    ],
    requirements: [
      '2+ years social media management',
      'Strong writing skills in English',
      'Instagram and TikTok native',
      'Content creation skills'
    ],
    niceToHave: [
      'Arabic writing skills',
      'Video content creation',
      'Influencer relationships'
    ],
    benefits: ['Creative freedom', 'Build following from scratch', 'High visibility', 'Trend-setting']
  },
  {
    id: 'mkt-003',
    title: 'Creative Designer',
    department: 'Marketing',
    location: 'Dubai, UAE (Remote OK)',
    type: 'full-time',
    level: 'mid',
    phase: 'H1',
    status: 'open',
    salary: 'AED 12-18K/month',
    equity: '0.2-0.3%',
    description: 'Creates all visual assets for marketing. Fast, versatile, and on-brand.',
    responsibilities: [
      'Design social media graphics daily',
      'Create marketing campaign visuals',
      'Design merchant-facing materials and decks',
      'Maintain and expand brand asset library',
      'Support ad creative production'
    ],
    requirements: [
      '2+ years graphic design experience',
      'Expert in Figma and Adobe Creative Suite',
      'Social media design experience',
      'Fast turnaround - can deliver same-day'
    ],
    niceToHave: [
      'Motion graphics / animation',
      'Video editing skills',
      'Arabic typography experience'
    ],
    benefits: ['Creative portfolio building', 'Remote flexibility', 'Diverse projects', 'Startup culture']
  },
  // MERCHANTS - H1
  {
    id: 'merch-001',
    title: 'Head of Merchant Success',
    department: 'Merchants',
    location: 'Dubai, UAE',
    type: 'full-time',
    level: 'lead',
    phase: 'H1',
    status: 'urgent',
    salary: 'AED 25-40K/month',
    equity: '1-2%',
    description: 'Owns the 1,500 merchant goal. Builds and leads the merchant acquisition and success team.',
    responsibilities: [
      'Define and execute merchant acquisition strategy',
      'Build and train merchant sales team',
      'Own merchant onboarding and activation process',
      'Develop merchant success playbooks by industry',
      'Monitor merchant health and prevent churn'
    ],
    requirements: [
      '4+ years B2B sales or partnerships',
      'Experience building sales teams',
      'Strong network in UAE F&B, retail, or services',
      'Arabic speaker strongly preferred',
      'CRM and sales process experience'
    ],
    niceToHave: [
      'Fintech or payments industry experience',
      'Previous startup experience',
      'Merchant marketing experience'
    ],
    benefits: ['Build the sales team', 'Leadership role', 'High commission potential', 'Equity upside']
  },
  {
    id: 'merch-002',
    title: 'Merchant Sales Representative',
    department: 'Merchants',
    location: 'Dubai, UAE',
    type: 'full-time',
    level: 'entry',
    phase: 'H1',
    status: 'open',
    salary: 'AED 8-12K/month + commission',
    equity: '0.1-0.2%',
    description: 'Field sales role signing up merchants and ensuring successful onboarding.',
    responsibilities: [
      'Acquire new merchants through field sales',
      'Conduct product demos and negotiations',
      'Onboard and train merchant staff',
      'Maintain merchant relationships',
      'Collect feedback and report issues'
    ],
    requirements: [
      '1+ years sales experience',
      'Excellent communication skills',
      'Arabic speaker (required)',
      'Own vehicle or willingness to travel',
      'Comfortable with mobile technology'
    ],
    niceToHave: [
      'F&B or retail industry experience',
      'Previous startup experience',
      'Existing merchant relationships'
    ],
    benefits: ['Uncapped commission', 'Field independence', 'Growth potential', 'Equity participation']
  },
  // CUSTOMER SUPPORT - H1
  {
    id: 'support-001',
    title: 'Customer Support Lead',
    department: 'Support',
    location: 'Dubai, UAE',
    type: 'full-time',
    level: 'senior',
    phase: 'H1',
    status: 'open',
    salary: 'AED 15-22K/month',
    equity: '0.3-0.5%',
    description: 'Builds and leads customer support operations. Creates the support playbook from scratch.',
    responsibilities: [
      'Set up support channels (in-app, email, WhatsApp)',
      'Create support documentation and FAQs',
      'Handle escalated customer issues',
      'Track and report support metrics',
      'Hire and train support team'
    ],
    requirements: [
      '3+ years customer support experience',
      'Experience with support tools (Zendesk, Intercom)',
      'Strong written communication',
      'Problem-solving skills',
      'Arabic speaker preferred'
    ],
    niceToHave: [
      'Fintech support experience',
      'Team leadership experience',
      'Process documentation skills'
    ],
    benefits: ['Build support from scratch', 'Leadership opportunity', 'Customer impact', 'Process ownership']
  },
  // H2 ROLES
  {
    id: 'eng-004',
    title: 'Backend Engineer',
    department: 'Engineering',
    location: 'Dubai, UAE (Remote OK)',
    type: 'full-time',
    level: 'mid',
    phase: 'H2',
    status: 'coming-soon',
    salary: 'AED 18-28K/month',
    equity: '0.2-0.4%',
    description: 'Focused on APIs, database, integrations. Works alongside Lead Engineer to build robust, scalable backend systems.',
    responsibilities: [
      'Build and maintain REST/GraphQL APIs',
      'Database design, optimization, and migrations',
      'Integrate payment gateways and third-party services',
      'Implement background jobs and queues'
    ],
    requirements: [
      '2+ years backend development',
      'Node.js or Python proficiency',
      'PostgreSQL/MongoDB experience',
      'API design best practices'
    ],
    niceToHave: [
      'Payment integration experience',
      'Experience with queues (Redis, RabbitMQ)',
      'DevOps experience'
    ],
    benefits: ['Remote flexibility', 'Technical growth', 'Equity participation', 'Scaling challenges']
  },
  {
    id: 'growth-003',
    title: 'Growth Analyst',
    department: 'Growth',
    location: 'Dubai, UAE',
    type: 'full-time',
    level: 'mid',
    phase: 'H2',
    status: 'coming-soon',
    salary: 'AED 15-22K/month',
    equity: '0.2-0.3%',
    description: 'Data wizard who turns numbers into insights and experiments into learnings.',
    responsibilities: [
      'Build and maintain growth analytics dashboards',
      'Run cohort and funnel analyses weekly',
      'Design and analyze A/B tests',
      'Model LTV, CAC, and unit economics'
    ],
    requirements: [
      '2+ years data/growth analytics',
      'SQL proficiency (required)',
      'Experience with Amplitude, Mixpanel, or similar',
      'Statistical analysis skills'
    ],
    niceToHave: [
      'Python/R for analysis',
      'Startup experience',
      'Product analytics experience'
    ],
    benefits: ['Data-driven culture', 'High visibility', 'Growth challenges', 'Cross-functional impact']
  },
  {
    id: 'mkt-004',
    title: 'Performance Marketer',
    department: 'Marketing',
    location: 'Dubai, UAE',
    type: 'full-time',
    level: 'mid',
    phase: 'H2',
    status: 'coming-soon',
    salary: 'AED 18-28K/month',
    equity: '0.2-0.4%',
    description: 'Runs paid acquisition campaigns on Meta, Google, and TikTok. GATED HIRE - only after organic channels are proven.',
    responsibilities: [
      'Plan and execute paid campaigns across channels',
      'Manage ad budgets efficiently',
      'Optimize campaigns for CAC targets',
      'A/B test ad creatives, copy, and audiences'
    ],
    requirements: [
      '2+ years performance marketing',
      'Meta, Google, TikTok ads experience',
      'Strong analytics skills',
      'Budget management experience'
    ],
    niceToHave: [
      'UAE market experience',
      'Fintech advertising experience',
      'Creative testing experience'
    ],
    benefits: ['Budget ownership', 'Data-driven role', 'Scaling challenges', 'Performance bonuses']
  },
  {
    id: 'mkt-005',
    title: 'Video Content Creator',
    department: 'Marketing',
    location: 'Dubai, UAE',
    type: 'full-time',
    level: 'entry',
    phase: 'H2',
    status: 'coming-soon',
    salary: 'AED 10-15K/month',
    equity: '0.1-0.2%',
    description: 'Creates viral short-form video content for TikTok, Reels, and YouTube Shorts.',
    responsibilities: [
      'Create 5+ short-form videos per week',
      'Film and edit TikToks and Reels',
      'Stay on top of video trends and sounds',
      'Create user testimonial videos'
    ],
    requirements: [
      '1+ years video content creation',
      'TikTok/Reels native',
      'Video editing skills (CapCut, Premiere)',
      'Creative and trend-aware'
    ],
    niceToHave: [
      'Comfortable on camera',
      'Own camera/lighting equipment',
      'Viral content track record'
    ],
    benefits: ['Creative freedom', 'Trend-setting', 'Portfolio building', 'Viral potential']
  },
  // FINANCE - H2
  {
    id: 'fin-001',
    title: 'Finance Manager',
    department: 'Finance',
    location: 'Dubai, UAE',
    type: 'full-time',
    level: 'senior',
    phase: 'H2',
    status: 'coming-soon',
    salary: 'AED 20-30K/month',
    equity: '0.3-0.5%',
    description: 'Owns all financial operations including accounting, reporting, and compliance.',
    responsibilities: [
      'Manage day-to-day financial operations',
      'Prepare monthly financial statements',
      'Handle payroll and vendor payments',
      'Support fundraising with financial models',
      'Ensure tax and regulatory compliance'
    ],
    requirements: [
      '4+ years finance/accounting experience',
      'UAE accounting standards knowledge',
      'Strong Excel/financial modeling skills',
      'Startup or tech company experience'
    ],
    niceToHave: [
      'CPA or equivalent certification',
      'Fintech industry experience',
      'Fundraising support experience'
    ],
    benefits: ['Full finance ownership', 'Growth company', 'Equity participation', 'Leadership path']
  },
];

const departments = [
  { name: 'All', icon: Users, color: 'slate' },
  { name: 'Executive', icon: Briefcase, color: 'amber' },
  { name: 'Engineering', icon: Code, color: 'cyan' },
  { name: 'Growth', icon: TrendingUp, color: 'pink' },
  { name: 'Marketing', icon: Megaphone, color: 'orange' },
  { name: 'Merchants', icon: Store, color: 'emerald' },
  { name: 'Support', icon: Headphones, color: 'purple' },
  { name: 'Finance', icon: DollarSign, color: 'green' },
];

const benefits = [
  { icon: Gift, title: 'Equity Participation', description: 'Every team member gets equity in the company' },
  { icon: Laptop, title: 'Remote Flexibility', description: 'Hybrid work for most roles, full remote for some' },
  { icon: GraduationCap, title: 'Learning Budget', description: 'AED 5,000/year for courses and conferences' },
  { icon: Heart, title: 'Health Insurance', description: 'Comprehensive medical coverage for you and family' },
  { icon: Coffee, title: 'Free Meals', description: 'Daily lunch and unlimited snacks at the office' },
  { icon: Rocket, title: 'High Growth', description: 'Join a rocket ship with massive upside potential' },
];

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedPhase, setSelectedPhase] = useState<'all' | 'H1' | 'H2' | 'H3'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedRole, setExpandedRole] = useState<string | null>(null);

  const filteredRoles = openRoles.filter(role => {
    const matchesDept = selectedDept === 'All' || role.department === selectedDept;
    const matchesPhase = selectedPhase === 'all' || role.phase === selectedPhase;
    const matchesSearch = role.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          role.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesPhase && matchesSearch;
  });

  const urgentCount = openRoles.filter(r => r.status === 'urgent').length;
  const openCount = openRoles.filter(r => r.status === 'open').length;

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0a1628] via-[#1a2d4a] to-[#0a1628] border-b border-[#c9a227]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/40 rounded-full">
              <Zap className="text-[#c9a227]" size={16} />
              <span className="text-[#c9a227] text-sm font-bold">We&apos;re Hiring!</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
              Join the <span className="text-[#c9a227]">Rewards Revolution</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              Build the future of payments and loyalty in the GCC. We&apos;re looking for ambitious builders who want to create something extraordinary.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="flex items-center gap-2 text-red-400">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <span className="font-bold">{urgentCount} Urgent Hires</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="font-bold">{openCount} Open Positions</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin size={16} />
                <span>Dubai, UAE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="border-b border-white/10 py-12 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-8">Why Join Nuqta?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#c9a227]/20 flex items-center justify-center">
                  <benefit.icon className="text-[#c9a227]" size={24} />
                </div>
                <h3 className="font-bold text-white text-sm mb-1">{benefit.title}</h3>
                <p className="text-xs text-slate-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-14 sm:top-16 z-30 bg-[#0a1628]/95 backdrop-blur-xl border-b border-white/10 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input
                type="text"
                placeholder="Search roles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-[#c9a227]/50"
              />
            </div>

            {/* Department Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
              {departments.map((dept) => (
                <button
                  key={dept.name}
                  onClick={() => setSelectedDept(dept.name)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    selectedDept === dept.name
                      ? 'bg-[#c9a227] text-black'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <dept.icon size={16} />
                  {dept.name}
                </button>
              ))}
            </div>

            {/* Phase Filter */}
            <div className="flex gap-2">
              {['all', 'H1', 'H2', 'H3'].map((phase) => (
                <button
                  key={phase}
                  onClick={() => setSelectedPhase(phase as typeof selectedPhase)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedPhase === phase
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {phase === 'all' ? 'All Phases' : phase}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-slate-400">
            Showing <span className="text-white font-bold">{filteredRoles.length}</span> positions
          </p>
        </div>

        <div className="space-y-4">
          {filteredRoles.map((role) => (
            <div
              key={role.id}
              className={`bg-white/5 border rounded-xl overflow-hidden transition-all ${
                role.status === 'urgent' ? 'border-red-500/50' : 'border-white/10'
              }`}
            >
              {/* Role Header */}
              <button
                onClick={() => setExpandedRole(expandedRole === role.id ? null : role.id)}
                className="w-full p-4 sm:p-6 flex items-center gap-4 text-left hover:bg-white/5 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">{role.title}</h3>
                    {role.status === 'urgent' && (
                      <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-xs font-bold rounded-full">
                        URGENT
                      </span>
                    )}
                    {role.status === 'coming-soon' && (
                      <span className="px-2 py-0.5 bg-slate-500/20 text-slate-400 text-xs font-bold rounded-full">
                        {role.phase}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
                    <span className="flex items-center gap-1">
                      <Building2 size={14} />
                      {role.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {role.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign size={14} />
                      {role.salary}
                    </span>
                    {role.equity && (
                      <span className="flex items-center gap-1 text-[#c9a227]">
                        <Star size={14} />
                        {role.equity} equity
                      </span>
                    )}
                  </div>
                </div>
                {expandedRole === role.id ? (
                  <ChevronDown className="text-slate-400 flex-shrink-0" size={24} />
                ) : (
                  <ChevronRight className="text-slate-400 flex-shrink-0" size={24} />
                )}
              </button>

              {/* Expanded Details */}
              {expandedRole === role.id && (
                <div className="px-4 sm:px-6 pb-6 border-t border-white/10 pt-4">
                  <p className="text-slate-300 mb-6">{role.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Responsibilities */}
                    <div>
                      <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                        <Target size={16} className="text-[#c9a227]" />
                        Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {role.responsibilities.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                            <CheckCircle size={14} className="text-green-400 mt-1 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Requirements */}
                    <div>
                      <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                        <CheckCircle size={16} className="text-blue-400" />
                        Requirements
                      </h4>
                      <ul className="space-y-2">
                        {role.requirements.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {role.niceToHave.length > 0 && (
                        <>
                          <h4 className="font-bold text-white mt-4 mb-3 text-sm">Nice to Have</h4>
                          <ul className="space-y-1">
                            {role.niceToHave.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {role.benefits.map((benefit, idx) => (
                        <span key={idx} className="px-2 py-1 bg-[#c9a227]/10 text-[#c9a227] text-xs rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`mailto:careers@nuqtaapp.com?subject=Application: ${role.title}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-black font-bold rounded-lg hover:bg-[#e8c547] transition-colors"
                    >
                      Apply Now
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredRoles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">No positions match your filters.</p>
            <button
              onClick={() => { setSelectedDept('All'); setSelectedPhase('all'); setSearchQuery(''); }}
              className="mt-4 text-[#c9a227] hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#c9a227]/20 to-amber-500/20 border-t border-[#c9a227]/30 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Don&apos;t See Your Role?</h2>
          <p className="text-slate-300 mb-6">
            We&apos;re always looking for exceptional talent. Send us your resume and let us know how you can contribute.
          </p>
          <a
            href="mailto:careers@nuqtaapp.com?subject=General Application"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#c9a227] text-black font-bold rounded-xl hover:bg-[#e8c547] transition-colors"
          >
            Send Your Resume
            <ArrowRight size={20} />
          </a>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-center">
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/team" className="text-slate-400 hover:text-[#c9a227] transition-colors">
            View Full Team Structure →
          </Link>
          <Link href="/compensation-guide" className="text-slate-400 hover:text-[#c9a227] transition-colors">
            Compensation & Benefits →
          </Link>
          <Link href="/esop" className="text-slate-400 hover:text-[#c9a227] transition-colors">
            Equity (ESOP) Guide →
          </Link>
          <Link href="/hr-operations" className="text-slate-400 hover:text-[#c9a227] transition-colors">
            HR Operations →
          </Link>
        </div>
      </div>
    </div>
  );
}
