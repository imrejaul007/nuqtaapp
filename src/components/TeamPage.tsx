'use client';

import React, { useState } from 'react';
import {
  Users,
  Code,
  Palette,
  Megaphone,
  TrendingUp,
  Briefcase,
  Target,
  Linkedin,
  Mail,
  ChevronRight,
  ChevronDown,
  Sparkles,
  HandshakeIcon,
  BarChart3,
  Rocket,
  CheckCircle,
  Clock,
  Zap,
  Headphones,
  DollarSign,
  Camera,
  LineChart,
  Globe,
  Building2,
  Heart,
  FileText,
  ArrowRight,
  Shield,
  Workflow,
  Network,
  Calculator,
  Scale,
  Database,
  Settings,
  ClipboardList,
  UserCheck,
  Phone,
  Layers
} from 'lucide-react';

/**
 * NUQTA COMPLETE TEAM STRUCTURE
 * =============================
 * H1 Team: Lean startup to prove the loop (~18 people)
 * Full Team: Complete org for scaling (~80+ people)
 *
 * Every role includes:
 * - Full JD with responsibilities
 * - Requirements
 * - KPIs
 * - Reporting structure
 * - Direct reports
 */

interface TeamMember {
  name: string;
  role: string;
  reportsTo: string;
  directReports?: string[];
  description: string;
  responsibilities: string[];
  requirements: string[];
  kpis: string[];
  status: 'filled' | 'hiring' | 'planned';
  priority?: 'critical' | 'high' | 'medium' | 'low';
  compensation?: string;
}

interface Department {
  name: string;
  icon: React.ElementType;
  color: string;
  description: string;
  mission: string;
  headRole: string;
  headcount: { h1: number; full: number };
  budget?: string;
  workflow: string[];
  collaboratesWith: string[];
  operationalProcedures: string[];
  roles: TeamMember[];
}

// ===========================================
// H1 LEAN TEAM - Complete with Full JDs
// ===========================================
const h1Team: Department[] = [
  {
    name: 'Executive & Leadership',
    icon: Briefcase,
    color: 'amber',
    description: 'Vision, strategy, and company direction',
    mission: 'Set company direction, secure funding, build culture, and ensure all teams hit H1 goals: 5K MAU (conservative), 250 merchants minimum.',
    headRole: 'CEO',
    headcount: { h1: 2, full: 6 },
    budget: '30% of total (salaries + fundraising)',
    workflow: [
      'Daily: CEO/COO sync (30 min)',
      'Weekly: Leadership team meeting (1 hr)',
      'Weekly: All-hands standup (15 min)',
      'Monthly: Board update prep',
      'Quarterly: Board meeting & strategy review'
    ],
    collaboratesWith: ['All Departments - Executive oversight'],
    operationalProcedures: [
      'CEO approves all hires above AED 20K/month',
      'COO reviews all vendor contracts > AED 10K',
      'Weekly OKR tracking in Notion',
      'Monthly budget review with Finance',
      'Quarterly performance reviews for department heads'
    ],
    roles: [
      {
        name: 'Rejaul Karim',
        role: 'Founder & CEO',
        reportsTo: 'Board of Directors',
        directReports: ['COO', 'Lead Engineer', 'Head of Growth', 'Head of Merchants', 'Marketing Manager'],
        description: 'Ultimate owner of company vision, strategy, fundraising, and external representation. Sets the north star and ensures all teams are rowing in the same direction.',
        responsibilities: [
          'Define and communicate company vision, mission, and strategy',
          'Lead all fundraising efforts - pitch deck, investor meetings, term sheet negotiation',
          'Build and maintain relationships with board and key investors',
          'Hire and develop executive/leadership team',
          'Set company culture, values, and operating principles',
          'Make final decisions on major strategic initiatives and pivots',
          'Represent Nuqta externally - media, conferences, key partnerships',
          'Weekly 1:1s with all direct reports',
          'Approve all equity grants and senior hires'
        ],
        requirements: [
          'Proven startup founder or C-level experience',
          'Strong network in UAE/GCC tech and investment ecosystem',
          'Previous fundraising experience ($1M+ raised)',
          'Product and technical background preferred',
          'Excellent storytelling and communication skills',
          'High EQ and ability to inspire teams'
        ],
        kpis: [
          'Co-founder/CTO hire: Within 90 days of funding',
          'H1 milestones: 5K MAU (conservative), 250 merchants, 25% D30',
          'Tranche 2 unlock: 10 merchants, 1K MAU, CTO hired',
          'Team eNPS score: >50',
          'Runway: Maintain 12+ months on $200K Tranche 1'
        ],
        status: 'filled',
        compensation: 'Founder equity + nominal salary'
      },
      {
        name: 'PRIORITY HIRE',
        role: 'Co-Founder / CTO',
        reportsTo: 'CEO',
        directReports: ['Engineering Team', 'Product Design', 'DevOps'],
        description: 'MANDATORY HIRE within 90 days of funding. Technical co-founder with fintech/payments experience to lead product development and ensure technical excellence. This is a Tranche 2 release condition. → Apply at /join-us',
        responsibilities: [
          'Own entire technical architecture and product roadmap',
          'Lead development of mobile app (React Native) and backend (Node.js)',
          'Build and scale engineering team from 2 to 10+ engineers',
          'Ensure platform security, scalability, and 99.9% uptime',
          'Drive technical due diligence for future funding rounds',
          'Integrate payment systems and merchant POS solutions',
          'Partner with CEO on product strategy and prioritization',
          'Own technical hiring - senior engineers, DevOps, QA',
          'Set engineering culture, coding standards, and processes',
          'Weekly technical reviews and architecture discussions'
        ],
        requirements: [
          '7+ years engineering with 3+ years in fintech/payments',
          'Expert in React Native, TypeScript, Node.js, PostgreSQL',
          'Experience building consumer mobile apps at scale (100K+ users)',
          'Led engineering teams of 5+ people',
          'Previous startup experience (founder or early employee)',
          'UAE residency or willingness to relocate immediately',
          'Arabic speaker a plus for merchant integrations'
        ],
        kpis: [
          'Onboarding: Join within 90 days of funding close',
          'MVP delivery: Launch by Feb 28, 2026',
          'Engineering team: Scale to 4+ by Month 3',
          'Platform uptime: 99.9%',
          'Release velocity: 2+ releases per week'
        ],
        status: 'hiring',
        priority: 'critical',
        compensation: '15-25% equity + AED 40-60K/month (negotiable for right candidate)'
      },
      {
        name: 'Hiring',
        role: 'COO / Head of Operations',
        reportsTo: 'CEO',
        directReports: ['Operations', 'Finance/Admin', 'HR', 'Legal', 'Customer Support Lead'],
        description: 'The operator who makes things happen. Owns day-to-day execution, operational excellence, hiring, and ensures the machine runs smoothly while CEO focuses on vision and fundraising.',
        responsibilities: [
          'Own day-to-day operations across all departments',
          'Build and optimize all operational processes and SOPs',
          'Lead non-technical hiring - operations, support, sales',
          'Manage company budget, cash flow, vendor relationships',
          'Drive cross-functional alignment and remove blockers',
          'Handle key merchant/partner negotiations alongside Head of Merchants',
          'Build company culture on the ground - rituals, recognition, team events',
          'Own legal, compliance, and regulatory matters',
          'Manage office/workspace and admin functions',
          'Weekly ops review with all department heads'
        ],
        requirements: [
          '5+ years operations/GM leadership in startups',
          'Strong UAE/Dubai business network (critical)',
          'Experience scaling teams from 5 to 50+ people',
          'Arabic speaker strongly preferred',
          'Hands-on operator - can work across all functions',
          'Strong financial acumen and budget management',
          'Experience with UAE labor law and company formation'
        ],
        kpis: [
          'Operational efficiency: <48hr to resolve any blocker',
          'Hiring velocity: All critical roles filled in 30 days',
          'Team retention: <10% voluntary churn',
          'Budget: Stay within 10% of plan',
          'Process: SOPs documented for all core functions'
        ],
        status: 'hiring',
        priority: 'high',
        compensation: 'AED 30-45K/month + equity (5-10%)'
      },
    ]
  },
  {
    name: 'Product & Engineering',
    icon: Code,
    color: 'cyan',
    description: 'Building the product users love',
    mission: 'Build a world-class mobile app and merchant platform with <0.1% crash rate, <200ms response times, and features that create daily habit loops.',
    headRole: 'Lead Full-Stack Engineer',
    headcount: { h1: 4, full: 15 },
    budget: '25% of total',
    workflow: [
      'Daily: Engineering standup 9:30 AM (15 min)',
      'Daily: Code reviews before merge',
      'Bi-weekly: Sprint planning (2 hrs)',
      'Bi-weekly: Sprint retro (1 hr)',
      'Weekly: Design-dev sync (1 hr)',
      'Weekly: Tech debt review (30 min)'
    ],
    collaboratesWith: [
      'Growth - Feature experiments & A/B tests',
      'Marketing - Landing pages & campaigns',
      'Merchant Success - Dashboard features',
      'Customer Support - Bug reports & fixes'
    ],
    operationalProcedures: [
      'All PRs require 1 code review before merge',
      'Deploy to staging daily, production 2x/week',
      'Hotfixes can bypass PR for P0 bugs (post-review within 24h)',
      'All features require Figma designs before dev',
      'Performance budgets: App launch <3s, API <200ms',
      'Security review required for payment/auth changes',
      'Weekly dependency updates on Fridays'
    ],
    roles: [
      {
        name: 'Hiring',
        role: 'Lead Full-Stack Engineer',
        reportsTo: 'CEO',
        directReports: ['Senior Mobile Engineer', 'Backend Engineer', 'UI/UX Designer'],
        description: 'Technical co-founder level. Owns the entire tech stack from React Native mobile app to Node.js backend to AWS infrastructure. Sets technical vision and coding standards.',
        responsibilities: [
          'Own technical architecture and all tech stack decisions',
          'Lead development of React Native mobile app (iOS + Android)',
          'Build and maintain Node.js/Express backend APIs',
          'Design and optimize PostgreSQL database schema',
          'Manage AWS infrastructure (EC2, RDS, S3, Lambda)',
          'Set coding standards, review all code, enforce quality',
          'Hire and mentor engineering team',
          'Ensure 99.9% uptime and <200ms API response times',
          'Own security, data protection, and GDPR compliance',
          'Integrate payment gateways (Stripe, local UAE options)',
          'Weekly architecture discussions and tech debt planning'
        ],
        requirements: [
          '5+ years full-stack development experience',
          'Expert in React Native, TypeScript, Node.js',
          'Strong with PostgreSQL/MongoDB, Redis',
          'Experience with AWS or GCP at scale',
          'Led engineering team of 3+ people',
          'Startup experience strongly preferred',
          'Payment/fintech integration experience a plus',
          'Mobile app published on App Store and Play Store'
        ],
        kpis: [
          'App crash rate: <0.1%',
          'API response time: <200ms p95',
          'App store rating: >4.5 stars',
          'Sprint velocity: Consistent week-over-week',
          'Code review turnaround: <24 hours',
          'Security incidents: Zero',
          'Uptime: 99.9%'
        ],
        status: 'hiring',
        priority: 'critical',
        compensation: 'AED 40-55K/month + significant equity'
      },
      {
        name: 'Hiring',
        role: 'Senior Mobile Engineer',
        reportsTo: 'Lead Full-Stack Engineer',
        description: 'React Native specialist focused on building a buttery-smooth mobile experience. Partners with Lead Engineer on architecture but owns mobile implementation.',
        responsibilities: [
          'Build and maintain React Native mobile app',
          'Implement new features from Figma designs',
          'Optimize app performance, memory, and battery usage',
          'Handle iOS and Android specific implementations',
          'Implement push notifications, deep linking, app clips',
          'Write unit and integration tests (target: 80% coverage)',
          'Participate in code reviews',
          'Debug and fix production issues quickly',
          'Work closely with designer on animations/interactions',
          'Stay current on React Native best practices'
        ],
        requirements: [
          '3+ years React Native development',
          'Published apps on both App Store and Play Store',
          'TypeScript proficiency required',
          'Understanding of native iOS (Swift) and Android (Kotlin)',
          'Experience with push notifications, deep linking',
          'Performance optimization experience',
          'Testing experience (Jest, Detox)'
        ],
        kpis: [
          'Feature delivery: On-time 90%+',
          'Bug count: <3 bugs per release',
          'Code coverage: >80%',
          'App store rating: >4.5 stars',
          'Performance: App launch <3 seconds'
        ],
        status: 'hiring',
        priority: 'high',
        compensation: 'AED 25-35K/month + equity'
      },
      {
        name: 'Hiring',
        role: 'UI/UX Designer',
        reportsTo: 'Lead Full-Stack Engineer',
        description: 'Product designer who owns the entire user experience from research to shipped pixels. Creates designs that are both beautiful and drive engagement/retention.',
        responsibilities: [
          'Design all user interfaces - mobile app, merchant dashboard, website',
          'Create and maintain comprehensive design system in Figma',
          'Conduct user research - interviews, usability tests, surveys',
          'Build interactive prototypes for testing',
          'Collaborate closely with engineers on implementation',
          'Design marketing materials, social graphics, decks',
          'Ensure brand consistency across all touchpoints',
          'Analyze user behavior data to inform design decisions',
          'A/B test design variations with Growth team'
        ],
        requirements: [
          '3+ years product design experience',
          'Expert in Figma (required)',
          'Strong mobile app design portfolio',
          'User research and usability testing experience',
          'Understanding of development constraints',
          'Motion design / micro-interactions a plus',
          'Can work fast and iterate quickly'
        ],
        kpis: [
          'Design-to-dev handoff: <2 days per feature',
          'Usability test scores: >85% task completion',
          'Design system: 100% component coverage',
          'User satisfaction: >4.5/5 on design surveys',
          'Iteration speed: <24hr for minor updates'
        ],
        status: 'hiring',
        priority: 'high',
        compensation: 'AED 20-30K/month + equity'
      },
      {
        name: 'Planned',
        role: 'Backend Engineer',
        reportsTo: 'Lead Full-Stack Engineer',
        description: 'Focused on APIs, database, integrations. Works alongside Lead Engineer to build robust, scalable backend systems.',
        responsibilities: [
          'Build and maintain REST/GraphQL APIs',
          'Database design, optimization, and migrations',
          'Integrate payment gateways and third-party services',
          'Implement background jobs, queues, and cron tasks',
          'Write comprehensive API documentation',
          'Performance monitoring and optimization',
          'Build admin tools and internal dashboards',
          'Handle data migrations and ETL'
        ],
        requirements: [
          '2+ years backend development',
          'Node.js or Python proficiency',
          'PostgreSQL/MongoDB experience',
          'API design best practices',
          'Payment integration experience a plus',
          'Experience with queues (Redis, RabbitMQ)'
        ],
        kpis: [
          'API uptime: 99.9%',
          'Query performance: <100ms p95',
          'Integration success rate: >99%',
          'Documentation: 100% endpoint coverage'
        ],
        status: 'planned',
        priority: 'medium',
        compensation: 'AED 18-28K/month + equity'
      },
    ]
  },
  {
    name: 'Growth & Analytics',
    icon: TrendingUp,
    color: 'pink',
    description: 'Driving user acquisition and retention',
    mission: 'Acquire 5K MAU with ≥25% D30 retention and LTV:CAC ≥10x through viral loops, community, and organic channels. Be ruthlessly data-driven.',
    headRole: 'Head of Growth',
    headcount: { h1: 3, full: 10 },
    budget: '15% of total',
    workflow: [
      'Daily: Metrics review (DAU, retention, referrals) - 15 min',
      'Daily: Check experiment results',
      'Weekly: Growth team sync (1 hr)',
      'Weekly: Experiment planning session',
      'Bi-weekly: Cohort analysis deep-dive',
      'Monthly: Channel performance review'
    ],
    collaboratesWith: [
      'Engineering - Feature experiments, A/B tests',
      'Marketing - Campaign coordination',
      'Product - Retention features',
      'Data - Analytics infrastructure'
    ],
    operationalProcedures: [
      'All experiments documented in experiment tracker',
      'Minimum 1 week runtime for A/B tests',
      '95% confidence required for significance',
      'Weekly growth metrics shared with all-hands',
      'Referral program changes require CEO approval',
      'Community guidelines documented and enforced'
    ],
    roles: [
      {
        name: 'Hiring',
        role: 'Head of Growth',
        reportsTo: 'CEO',
        directReports: ['Community Manager', 'Growth Analyst'],
        description: 'Owns the 5K MAU goal. Architect of user acquisition and retention strategy. Obsessed with data, experiments, and finding scalable growth loops.',
        responsibilities: [
          'Define and execute comprehensive growth strategy',
          'Own all user acquisition and retention metrics',
          'Design and continuously optimize referral program',
          'Run growth experiments and A/B tests weekly',
          'Analyze user cohorts, funnels, and behavior patterns',
          'Build habit loops and engagement features with Product',
          'Manage growth budget and optimize CAC',
          'Report growth metrics to leadership weekly',
          'Identify and scale winning channels',
          'Build growth team and processes'
        ],
        requirements: [
          '4+ years growth/marketing at consumer apps',
          'Proven track record: scaled user base 10x+',
          'Strong analytics: SQL, Amplitude/Mixpanel, Excel',
          'Experience with referral and viral mechanics',
          'UAE/GCC market experience preferred',
          'A/B testing and experimentation experience',
          'Can move fast and iterate quickly'
        ],
        kpis: [
          'MAU: 10K by H1 end',
          'D1 retention: ≥40%',
          'D7 retention: ≥30%',
          'D30 retention: ≥25%',
          'Referral rate: ≥20% of users refer',
          'CAC: <AED 15',
          'LTV:CAC: ≥10x'
        ],
        status: 'hiring',
        priority: 'critical',
        compensation: 'AED 30-45K/month + equity'
      },
      {
        name: 'Hiring',
        role: 'Community & Ambassador Manager',
        reportsTo: 'Head of Growth',
        description: 'Builds grassroots growth through student ambassadors, WhatsApp communities, and micro-influencer partnerships. The voice of Nuqta in the community.',
        responsibilities: [
          'Build and manage student ambassador program (50+ ambassadors)',
          'Create and nurture WhatsApp/Telegram communities',
          'Identify and partner with micro-influencers (10K-100K followers)',
          'Organize community events, meetups, and activations',
          'Gather and synthesize user feedback for Product',
          'Create community content and drive engagement',
          'Track community growth and referral metrics',
          'Manage ambassador rewards and recognition',
          'Respond to community questions and concerns'
        ],
        requirements: [
          '2+ years community management',
          'Strong personal social media presence',
          'University/student network in UAE (critical)',
          'Excellent communication and relationship skills',
          'Arabic speaker preferred',
          'Event planning experience a plus',
          'Energetic and can work evenings/weekends for events'
        ],
        kpis: [
          'Ambassador count: 50+ active',
          'Community size: 5K+ members',
          'Engagement rate: >10%',
          'Referrals from community: 2K+ users',
          'NPS from community: >60'
        ],
        status: 'hiring',
        priority: 'high',
        compensation: 'AED 12-18K/month + equity'
      },
      {
        name: 'Planned',
        role: 'Growth Analyst',
        reportsTo: 'Head of Growth',
        description: 'Data wizard who turns numbers into insights and experiments into learnings. Builds dashboards and analyses that drive growth decisions.',
        responsibilities: [
          'Build and maintain growth analytics dashboards',
          'Run cohort and funnel analyses weekly',
          'Design and analyze A/B tests with statistical rigor',
          'Track and report key growth metrics',
          'Identify optimization opportunities in data',
          'Support data-driven decision making across teams',
          'Document experiment results and learnings',
          'Model LTV, CAC, and unit economics'
        ],
        requirements: [
          '2+ years data/growth analytics',
          'SQL proficiency (required)',
          'Experience with Amplitude, Mixpanel, or similar',
          'Statistical analysis skills',
          'Clear communication of insights to non-technical folks',
          'Python/R for analysis a plus'
        ],
        kpis: [
          'Dashboard accuracy: 100%',
          'Reporting: On-time every week',
          'Experiment velocity: 5+ tests/month',
          'Insights: 2+ actionable insights/week'
        ],
        status: 'planned',
        priority: 'medium',
        compensation: 'AED 15-22K/month + equity'
      },
    ]
  },
  {
    name: 'Marketing & Brand',
    icon: Megaphone,
    color: 'orange',
    description: 'Building the Nuqta brand',
    mission: 'Build Nuqta into the most recognized savings brand in UAE. Drive organic user acquisition through compelling content, viral campaigns, and strong brand identity.',
    headRole: 'Marketing Manager',
    headcount: { h1: 5, full: 15 },
    budget: '15% of total',
    workflow: [
      'Daily: Social media posting schedule',
      'Daily: Engagement and DM responses',
      'Weekly: Content calendar planning (2 hrs)',
      'Weekly: Creative review session',
      'Bi-weekly: Campaign performance review',
      'Monthly: Brand health check and competitor analysis'
    ],
    collaboratesWith: [
      'Growth - User acquisition campaigns',
      'Merchant Success - Co-marketing with merchants',
      'Product - Feature launch campaigns',
      'Engineering - Landing pages and web'
    ],
    operationalProcedures: [
      'All public content reviewed before posting',
      'Brand guidelines followed for all materials',
      'Social posts scheduled 1 week in advance',
      'Influencer contracts reviewed by Legal',
      'Campaign briefs required for all major initiatives',
      'Monthly content audit and performance review'
    ],
    roles: [
      {
        name: 'Hiring',
        role: 'Marketing Manager',
        reportsTo: 'CEO',
        directReports: ['Content Manager', 'Creative Designer', 'Video Creator', 'Performance Marketer'],
        description: 'Leads all marketing efforts. Owns brand strategy, campaigns, PR, and the marketing team. Balances brand building with performance.',
        responsibilities: [
          'Define and execute marketing strategy and calendar',
          'Plan and manage marketing budget (efficient with every dirham)',
          'Coordinate integrated marketing campaigns',
          'Own brand positioning, messaging, and guidelines',
          'Manage PR and media relations in UAE',
          'Plan offline events, activations, and partnerships',
          'Build brand partnerships with complementary companies',
          'Track and report marketing ROI to leadership',
          'Hire and manage marketing team',
          'Coordinate with Growth on user acquisition'
        ],
        requirements: [
          '4+ years marketing experience',
          'Consumer app or fintech marketing preferred',
          'UAE market experience (important)',
          'Strong campaign management skills',
          'Budget management experience',
          'Media/PR contacts in UAE a plus',
          'Both brand and performance mindset'
        ],
        kpis: [
          'Brand awareness: 20% aided recall in target demo',
          'Marketing-sourced users: 30%+ of acquisitions',
          'Social following: 50K+ across platforms',
          'Campaign ROI: >3x ROAS',
          'PR coverage: 5+ tier-1 media hits'
        ],
        status: 'hiring',
        priority: 'high',
        compensation: 'AED 25-35K/month + equity'
      },
      {
        name: 'Hiring',
        role: 'Content & Social Media Manager',
        reportsTo: 'Marketing Manager',
        description: 'Creates scroll-stopping content and manages all social channels. Makes Nuqta the brand everyone talks about on Instagram and TikTok.',
        responsibilities: [
          'Create and manage weekly content calendar',
          'Post and engage daily on all social channels',
          'Write compelling copy for app, website, and ads',
          'Coordinate user-generated content campaigns',
          'Monitor social trends and jump on opportunities',
          'Respond to comments and DMs promptly',
          'Track social media metrics and optimize',
          'Collaborate with influencers on content',
          'Manage social media tools and scheduling'
        ],
        requirements: [
          '2+ years social media management',
          'Strong writing skills in English (Arabic a big plus)',
          'Instagram and TikTok native - understands algorithms',
          'Content creation skills (basic photo/video)',
          'Community engagement experience',
          'Can work fast and react to trends'
        ],
        kpis: [
          'Follower growth: 5K+/month',
          'Engagement rate: >5%',
          'Content output: 30+ posts/week',
          'Viral posts: 2+/month (>100K views)',
          'Response time: <2 hours'
        ],
        status: 'hiring',
        priority: 'high',
        compensation: 'AED 12-18K/month + equity'
      },
      {
        name: 'Hiring',
        role: 'Creative Designer',
        reportsTo: 'Marketing Manager',
        description: 'Creates all visual assets for marketing. From social graphics to ad creatives to merchant materials. Fast, versatile, and on-brand.',
        responsibilities: [
          'Design social media graphics daily',
          'Create marketing campaign visuals',
          'Design merchant-facing materials and decks',
          'Maintain and expand brand asset library',
          'Support ad creative production for paid campaigns',
          'Design email templates and newsletters',
          'Create presentation decks for partnerships',
          'Collaborate with Video Creator on thumbnails/graphics'
        ],
        requirements: [
          '2+ years graphic design experience',
          'Expert in Figma and Adobe Creative Suite',
          'Social media design experience (knows what performs)',
          'Motion graphics / animation a plus',
          'Fast turnaround - can deliver same-day',
          'Portfolio showing variety of work'
        ],
        kpis: [
          'Creative output: 50+ assets/week',
          'Quality score: <5% revision requests',
          'Turnaround: <24h for standard requests',
          'Brand consistency: 100% on-brand'
        ],
        status: 'hiring',
        priority: 'high',
        compensation: 'AED 12-18K/month + equity'
      },
      {
        name: 'Planned',
        role: 'Video Content Creator',
        reportsTo: 'Marketing Manager',
        description: 'Creates viral short-form video content for TikTok, Reels, and YouTube Shorts. Can film, edit, and be on camera.',
        responsibilities: [
          'Create 5+ short-form videos per week',
          'Film and edit TikToks and Reels',
          'Stay on top of video trends and sounds',
          'Create user testimonial and success story videos',
          'Produce app tutorial and how-to videos',
          'Collaborate with influencers on content',
          'Manage video content calendar with Content Manager'
        ],
        requirements: [
          '1+ years video content creation',
          'TikTok/Reels native - understands what goes viral',
          'Video editing skills (CapCut, Premiere)',
          'Comfortable on camera a plus',
          'Creative and trend-aware',
          'Own camera/lighting equipment preferred'
        ],
        kpis: [
          'Video output: 20+ videos/week',
          'Average views: >10K per video',
          'Viral videos: 5+/month (>100K views)',
          'Engagement: >5% average'
        ],
        status: 'planned',
        priority: 'medium',
        compensation: 'AED 10-15K/month + equity'
      },
      {
        name: 'Planned',
        role: 'Performance Marketer',
        reportsTo: 'Marketing Manager',
        description: 'Runs paid acquisition campaigns on Meta, Google, and TikTok. GATED HIRE - only after organic channels are proven.',
        responsibilities: [
          'Plan and execute paid campaigns across channels',
          'Manage ad budgets efficiently (every dirham counts)',
          'Optimize campaigns for CAC targets',
          'A/B test ad creatives, copy, and audiences',
          'Track and report ROAS daily',
          'Coordinate with Creative on ad assets',
          'Scale winning campaigns, kill losers fast'
        ],
        requirements: [
          '2+ years performance marketing',
          'Meta, Google, TikTok ads certification/experience',
          'Strong analytics skills',
          'Budget management experience',
          'Creative testing experience',
          'UAE market experience preferred'
        ],
        kpis: [
          'CAC: <AED 20 blended',
          'ROAS: >3x',
          'Conversion rate: >3%',
          'Budget utilization: 95%+'
        ],
        status: 'planned',
        priority: 'low',
        compensation: 'AED 15-22K/month + equity'
      },
    ]
  },
  {
    name: 'Merchant Success',
    icon: HandshakeIcon,
    color: 'emerald',
    description: 'Acquiring and delighting 250+ merchants',
    mission: 'Onboard 250+ quality merchants with <5% churn. Create a compelling offer ecosystem that drives user engagement and transaction volume. Each Merchant Marketing Manager handles 15-20 businesses.',
    headRole: 'Head of Merchant Partnerships',
    headcount: { h1: 4, full: 15 },
    budget: '12% of total',
    workflow: [
      'Daily: Merchant outreach and follow-ups',
      'Daily: Respond to merchant inquiries <4 hours',
      'Weekly: Pipeline review (1 hr)',
      'Weekly: New merchant onboarding sessions',
      'Monthly: Merchant success check-ins',
      'Quarterly: Merchant feedback surveys'
    ],
    collaboratesWith: [
      'Product - Merchant dashboard features',
      'Marketing - Co-marketing campaigns',
      'Engineering - POS/tech integrations',
      'Growth - Merchant-driven user acquisition'
    ],
    operationalProcedures: [
      'Merchant onboarding: Same-day activation goal',
      'All merchant contracts use standard template',
      'Commission rates require CEO approval if non-standard',
      'Merchant health score tracked weekly',
      'Escalation path: Success Mgr → Head → COO',
      'Quarterly business reviews with top merchants'
    ],
    roles: [
      {
        name: 'Hiring',
        role: 'Head of Merchant Partnerships',
        reportsTo: 'CEO',
        directReports: ['Merchant Success Manager', 'Business Development Rep', 'Merchant Marketing Managers'],
        description: 'Leads merchant acquisition and relationships. Owns the 250 merchant goal. Manages team of Merchant Marketing Managers (each handling 15-20 businesses). Needs strong F&B and retail network in Dubai.',
        responsibilities: [
          'Define merchant acquisition strategy and targets',
          'Build and manage merchant pipeline in CRM',
          'Close key merchant partnerships personally',
          'Negotiate partnership terms and commission rates',
          'Set merchant success standards and playbooks',
          'Build relationships with chains and enterprise accounts',
          'Report merchant metrics to leadership weekly',
          'Hire and lead merchant team',
          'Develop merchant value proposition and pitch materials',
          'Coordinate with Marketing on merchant campaigns'
        ],
        requirements: [
          '5+ years B2B sales/partnerships experience',
          'Strong F&B/retail network in Dubai (critical)',
          'Proven deal closing track record',
          'Relationship management excellence',
          'Arabic speaker strongly preferred',
          'Experience with marketplace or loyalty businesses',
          'Hunter mentality - loves closing deals'
        ],
        kpis: [
          'Merchants onboarded: 250+ by H1 end',
          'Merchant quality: >80% score',
          'Deal close rate: >30%',
          'Time to close: <14 days average',
          'Merchant churn: <5%'
        ],
        status: 'hiring',
        priority: 'critical',
        compensation: 'AED 30-40K/month + equity + commission'
      },
      {
        name: 'Hiring',
        role: 'Merchant Success Manager',
        reportsTo: 'Head of Merchant Partnerships',
        description: "Owns merchant happiness post-sale. From onboarding to ongoing support to retention. The merchant's best friend.",
        responsibilities: [
          'Onboard new merchants (setup, training, first offer)',
          'Provide ongoing merchant support via WhatsApp/phone',
          'Monitor merchant health and engagement weekly',
          'Handle merchant escalations and complaints',
          'Gather and relay merchant feedback to Product',
          'Run monthly merchant success check-ins',
          'Create merchant training materials and guides',
          'Identify upsell opportunities (premium features)',
          'Celebrate merchant wins and success stories'
        ],
        requirements: [
          '2+ years account/customer success experience',
          'Excellent communication and empathy',
          'Problem-solving ability',
          'Patience with less tech-savvy merchants',
          'Arabic speaker preferred',
          'Available for occasional evening/weekend support'
        ],
        kpis: [
          'Merchant NPS: >50',
          'Onboarding time: <24 hours',
          'Merchant churn: <5%',
          'Support response: <4 hours',
          'Merchant engagement: 80%+ active monthly'
        ],
        status: 'hiring',
        priority: 'high',
        compensation: 'AED 12-18K/month + equity'
      },
      {
        name: 'Planned',
        role: 'Business Development Rep',
        reportsTo: 'Head of Merchant Partnerships',
        description: 'Lead generation machine. Cold outreach, warm intros, event networking. Fills the pipeline for Head of Partnerships to close.',
        responsibilities: [
          'Generate merchant leads through outreach',
          'Qualify merchant prospects (right fit, right size)',
          'Book meetings for Head of Partnerships',
          'Maintain CRM with accurate pipeline data',
          'Follow up on inbound leads same-day',
          'Support at merchant events and activations',
          'Research and map target merchant territories',
          'Track outreach metrics and optimize'
        ],
        requirements: [
          '1+ years sales/BD experience',
          'Cold outreach experience (phone, email, in-person)',
          'CRM proficiency (HubSpot, Salesforce)',
          'Resilience and persistence',
          'Arabic speaker a plus',
          'Comfortable walking into shops to pitch'
        ],
        kpis: [
          'Leads generated: 100+/week',
          'Meetings booked: 20+/week',
          'Lead-to-meeting: >20%',
          'Outreach volume: 50+ touches/day'
        ],
        status: 'planned',
        priority: 'medium',
        compensation: 'AED 8-12K/month + equity + commission'
      },
      {
        name: 'Hiring',
        role: 'Merchant Marketing Manager',
        reportsTo: 'Head of Merchant Partnerships',
        directReports: ['Assigned Merchant Accounts (15-20 businesses)'],
        description: 'Dedicated marketing manager assigned to 15-20 merchant businesses. Handles all marketing execution including online ads, offline materials, content creation, price engineering, and Nuqta branding at each store. Number of merchants per manager varies by package tier.',
        responsibilities: [
          // Online Marketing
          'Manage Meta ads (Facebook/Instagram) for assigned merchants',
          'Run WhatsApp marketing campaigns for merchant promotions',
          'Setup and manage Google Shopping campaigns',
          'Update and optimize Google My Business pages for all merchants',
          'Create and manage store URLs with "Pay via Nuqta & earn cashback" messaging',
          'Design and maintain merchant store pages on Nuqta platform',
          // Offline Marketing
          'Coordinate auto advertising (car wraps, taxi ads)',
          'Manage bus advertising placements',
          'Setup gate advertising at relevant venues',
          // Content Creation
          'Create Instagram/TikTok Reels for merchant promotions',
          'Design and schedule social media posts',
          'Coordinate UGC (User Generated Content) campaigns',
          'Manage influencer marketing - both barter and paid partnerships',
          // Price Engineering
          'Implement dynamic pricing strategy (increase base price by 20%)',
          'Configure Nuqta discounts to maintain perceived 20% savings',
          'Monitor demand and adjust discounts (airplane model pricing)',
          'Ensure price changes increase brand value perception',
          // Nuqta Branding at Store
          'Install Nuqta Board with QR code for in-store payments',
          'Place "We Accept Nuqta" stickers on walls, doors, windows',
          'Setup circle boards outside shop entrance',
          'Ensure all branding says: "Pay with Nuqta & Earn cashback instantly"'
        ],
        requirements: [
          '3+ years marketing experience with SMB clients',
          'Hands-on experience with Meta Ads Manager and Google Ads',
          'Content creation skills (basic video editing, graphic design)',
          'Understanding of price psychology and promotions',
          'Strong client relationship management',
          'Arabic speaker preferred for merchant communication',
          'Can manage multiple accounts simultaneously',
          'Comfortable visiting stores for branding setup'
        ],
        kpis: [
          'Merchants managed: 15-20 active accounts',
          'Merchant satisfaction: >4.5/5 rating',
          'Transaction growth: 20%+ MoM per merchant',
          'Content output: 10+ posts/reels per merchant/month',
          'Store branding compliance: 100% of merchants branded',
          'Ad ROAS: >3x for paid campaigns',
          'Google My Business: All merchants optimized and verified'
        ],
        status: 'hiring',
        priority: 'high',
        compensation: 'AED 15-22K/month + equity + performance bonus'
      },
    ]
  },
  {
    name: 'Operations & Finance',
    icon: Building2,
    color: 'slate',
    description: 'Keeping the machine running',
    mission: 'Ensure operational excellence, financial health, and compliance. Build the foundation for scale.',
    headRole: 'COO (owns Operations)',
    headcount: { h1: 1, full: 8 },
    budget: '5% of total',
    workflow: [
      'Daily: Cash position and payment processing',
      'Weekly: Vendor/invoice processing',
      'Weekly: Expense report reviews',
      'Monthly: Financial close and reporting',
      'Monthly: Budget vs actual review',
      'Quarterly: Audit prep and compliance check'
    ],
    collaboratesWith: [
      'All departments - Budget and expenses',
      'Leadership - Financial planning',
      'Legal - Contracts and compliance'
    ],
    operationalProcedures: [
      'All expenses >AED 1K require manager approval',
      'All expenses >AED 10K require COO approval',
      'Vendor payments processed weekly on Wednesday',
      'Monthly P&L shared with leadership by 5th',
      'Receipts required for all expense claims',
      'Quarterly financial review with board'
    ],
    roles: [
      {
        name: 'Planned',
        role: 'Finance & Admin Coordinator',
        reportsTo: 'COO',
        description: 'First finance hire. Handles bookkeeping, invoicing, expense tracking, and office admin. Jack of all trades for ops.',
        responsibilities: [
          'Manage bookkeeping and accounting records',
          'Process invoices and vendor payments',
          'Track expenses and employee reimbursements',
          'Prepare monthly financial reports',
          'Manage bank accounts and cash flow',
          'Handle payroll coordination with provider',
          'Manage office operations and supplies',
          'Support visa and labor documentation',
          'Coordinate with external accountant/auditor'
        ],
        requirements: [
          '2+ years finance/admin experience',
          'Bookkeeping/accounting knowledge',
          'Excel proficiency (required)',
          'Experience with accounting software (Xero, QuickBooks)',
          'Organized and detail-oriented',
          'UAE business experience preferred'
        ],
        kpis: [
          'Books accuracy: 100%',
          'Payment processing: <3 days',
          'Monthly close: By 5th of month',
          'Expense compliance: 100%',
          'Zero audit findings'
        ],
        status: 'planned',
        priority: 'medium',
        compensation: 'AED 10-15K/month + equity'
      },
    ]
  },
  {
    name: 'Customer Support',
    icon: Headphones,
    color: 'purple',
    description: 'Delighting users with fast support',
    mission: 'Turn every support interaction into a positive experience. <2 hour response time, >4.5 CSAT. Turn frustrated users into advocates.',
    headRole: 'Customer Support Lead',
    headcount: { h1: 1, full: 6 },
    budget: '5% of total',
    workflow: [
      'Continuous: Monitor support channels',
      'Target: Respond to all tickets within 2 hours',
      'Immediately: Escalate critical issues to Engineering',
      'Daily: Support metrics review',
      'Weekly: Feedback synthesis for Product',
      'Weekly: FAQ and help center updates'
    ],
    collaboratesWith: [
      'Product - Bug reports, feature requests',
      'Engineering - Technical issue resolution',
      'Merchant Success - Merchant support overflow',
      'Growth - User feedback loop'
    ],
    operationalProcedures: [
      'First response within 2 hours',
      'P0 issues (app down, payment failed) - immediate escalation',
      'P1 issues (feature broken) - 4 hour resolution',
      'P2 issues (questions, how-to) - 24 hour resolution',
      'All tickets logged in support system',
      'Weekly top issues report to Product'
    ],
    roles: [
      {
        name: 'Planned',
        role: 'Customer Support Lead',
        reportsTo: 'COO',
        description: 'First support hire. Handles all user support via chat and email. Documents issues, builds FAQ, and turns complaints into improvements.',
        responsibilities: [
          'Respond to user inquiries via in-app chat, email',
          'Resolve user issues and complaints with empathy',
          'Handle escalations and edge cases',
          'Document common issues and solutions',
          'Build and maintain FAQ and help center',
          'Synthesize feedback weekly for Product team',
          'Monitor support metrics and quality',
          'Train future support team members',
          'Identify opportunities for self-service'
        ],
        requirements: [
          '2+ years customer support experience',
          'Excellent written communication',
          'Problem-solving mindset',
          'Patience and empathy in abundance',
          'English and Arabic fluency (required)',
          'Experience with support tools (Intercom, Zendesk)',
          'Can work some evening/weekend hours'
        ],
        kpis: [
          'Response time: <2 hours',
          'Resolution time: <24 hours',
          'CSAT score: >4.5/5',
          'Tickets handled: 50+/day',
          'Escalation rate: <10%'
        ],
        status: 'planned',
        priority: 'medium',
        compensation: 'AED 10-15K/month + equity'
      },
    ]
  },
];

// ===========================================
// FULL TEAM STRUCTURE (H2/H3 Scaling)
// ===========================================
const fullTeam: Department[] = [
  {
    name: 'Executive Leadership',
    icon: Briefcase,
    color: 'amber',
    description: 'C-Suite and senior leadership',
    mission: 'Scale Nuqta to 1M+ users across UAE and GCC while building a world-class organization.',
    headRole: 'CEO',
    headcount: { h1: 2, full: 6 },
    workflow: ['Weekly exec sync', 'Monthly board prep', 'Quarterly strategy review'],
    collaboratesWith: ['All Departments'],
    operationalProcedures: ['C-suite alignment', 'Board management', 'Strategic planning'],
    roles: [
      { name: 'Filled', role: 'Founder & CEO', reportsTo: 'Board', directReports: ['C-Suite'], description: 'Vision, fundraising, board', responsibilities: ['Strategy', 'Fundraising', 'Culture'], requirements: ['Founder experience'], kpis: ['Revenue', 'Funding', 'Team'], status: 'filled' },
      { name: 'TBD', role: 'Co-Founder / COO', reportsTo: 'CEO', description: 'Operations & scaling', responsibilities: ['Operations', 'Hiring', 'Process'], requirements: ['Ops experience'], kpis: ['Efficiency', 'Retention'], status: 'hiring', priority: 'critical' },
      { name: 'TBD', role: 'CTO', reportsTo: 'CEO', description: 'Technical vision & architecture', responsibilities: ['Tech strategy', 'Architecture', 'Engineering org'], requirements: ['10+ years eng'], kpis: ['Uptime', 'Velocity'], status: 'planned', priority: 'high' },
      { name: 'TBD', role: 'CFO', reportsTo: 'CEO', description: 'Finance, fundraising support, FP&A', responsibilities: ['Finance', 'Fundraising', 'Compliance'], requirements: ['Finance leader'], kpis: ['Cash flow', 'Runway'], status: 'planned', priority: 'medium' },
      { name: 'TBD', role: 'CMO', reportsTo: 'CEO', description: 'Marketing & brand at scale', responsibilities: ['Brand', 'Marketing', 'PR'], requirements: ['Marketing leader'], kpis: ['Awareness', 'CAC'], status: 'planned', priority: 'medium' },
      { name: 'TBD', role: 'Chief Revenue Officer', reportsTo: 'CEO', description: 'All revenue streams', responsibilities: ['Revenue', 'Sales', 'Partnerships'], requirements: ['Revenue leader'], kpis: ['GMV', 'Revenue'], status: 'planned', priority: 'low' },
    ]
  },
  {
    name: 'Engineering',
    icon: Code,
    color: 'cyan',
    description: 'Full engineering organization',
    mission: 'Build and scale world-class technology infrastructure.',
    headRole: 'CTO → VP Engineering',
    headcount: { h1: 4, full: 15 },
    workflow: ['Agile sprints', 'Code reviews', 'Architecture reviews'],
    collaboratesWith: ['Product', 'Data', 'DevOps'],
    operationalProcedures: ['CI/CD', 'Code quality gates', 'On-call rotation'],
    roles: [
      { name: 'TBD', role: 'VP of Engineering', reportsTo: 'CTO', description: 'Engineering leadership', responsibilities: ['Team building', 'Process', 'Delivery'], requirements: ['10+ years'], kpis: ['Velocity', 'Quality'], status: 'planned', priority: 'high' },
      { name: 'TBD', role: 'Lead Full-Stack Engineer', reportsTo: 'VP Eng', description: 'Technical lead', responsibilities: ['Architecture', 'Coding', 'Reviews'], requirements: ['5+ years'], kpis: ['Quality', 'Speed'], status: 'hiring', priority: 'critical' },
      { name: 'TBD', role: 'Senior Backend Engineer', reportsTo: 'Lead Eng', description: 'Backend systems', responsibilities: ['APIs', 'Database', 'Scale'], requirements: ['4+ years'], kpis: ['Uptime', 'Performance'], status: 'planned', priority: 'high' },
      { name: 'TBD', role: 'Backend Engineer', reportsTo: 'Senior Backend', description: 'Backend development', responsibilities: ['APIs', 'Features'], requirements: ['2+ years'], kpis: ['Features shipped'], status: 'planned', priority: 'medium' },
      { name: 'TBD', role: 'Senior Mobile Engineer', reportsTo: 'Lead Eng', description: 'Mobile lead', responsibilities: ['RN app', 'Performance'], requirements: ['4+ years RN'], kpis: ['App rating', 'Crashes'], status: 'hiring', priority: 'high' },
      { name: 'TBD', role: 'Mobile Engineer', reportsTo: 'Senior Mobile', description: 'Mobile development', responsibilities: ['Features', 'Testing'], requirements: ['2+ years RN'], kpis: ['Features', 'Bugs'], status: 'planned', priority: 'medium' },
      { name: 'TBD', role: 'Frontend Engineer', reportsTo: 'Lead Eng', description: 'Web development', responsibilities: ['Dashboard', 'Website'], requirements: ['3+ years React'], kpis: ['Performance', 'UX'], status: 'planned', priority: 'medium' },
      { name: 'TBD', role: 'DevOps Engineer', reportsTo: 'VP Eng', description: 'Infrastructure & CI/CD', responsibilities: ['AWS', 'CI/CD', 'Monitoring'], requirements: ['3+ years DevOps'], kpis: ['Uptime', 'Deploy frequency'], status: 'planned', priority: 'medium' },
      { name: 'TBD', role: 'QA Engineer', reportsTo: 'VP Eng', description: 'Quality assurance', responsibilities: ['Testing', 'Automation'], requirements: ['2+ years QA'], kpis: ['Bug escape rate'], status: 'planned', priority: 'low' },
    ]
  },
  {
    name: 'Product & Design',
    icon: Palette,
    color: 'pink',
    description: 'Product management and design',
    mission: 'Build products users love through deep understanding of user needs.',
    headRole: 'Head of Product',
    headcount: { h1: 1, full: 6 },
    workflow: ['Discovery', 'Design', 'Delivery', 'Iteration'],
    collaboratesWith: ['Engineering', 'Growth', 'Data'],
    operationalProcedures: ['User research', 'PRDs', 'Design reviews'],
    roles: [
      { name: 'TBD', role: 'Head of Product', reportsTo: 'CEO', description: 'Product vision & roadmap', responsibilities: ['Strategy', 'Roadmap', 'Team'], requirements: ['5+ years PM'], kpis: ['Feature adoption', 'NPS'], status: 'planned', priority: 'high' },
      { name: 'TBD', role: 'Senior Product Manager', reportsTo: 'Head of Product', description: 'Consumer product', responsibilities: ['Features', 'Research', 'Delivery'], requirements: ['3+ years PM'], kpis: ['Velocity', 'Impact'], status: 'planned', priority: 'medium' },
      { name: 'TBD', role: 'Product Manager - Merchant', reportsTo: 'Head of Product', description: 'Merchant product', responsibilities: ['Dashboard', 'Tools'], requirements: ['2+ years PM'], kpis: ['Merchant NPS'], status: 'planned', priority: 'medium' },
      { name: 'TBD', role: 'Lead UI/UX Designer', reportsTo: 'Head of Product', description: 'Design leadership', responsibilities: ['Design system', 'Team', 'Strategy'], requirements: ['5+ years design'], kpis: ['Design quality'], status: 'hiring', priority: 'high' },
      { name: 'TBD', role: 'UI/UX Designer', reportsTo: 'Lead Designer', description: 'Product design', responsibilities: ['UI design', 'Prototypes'], requirements: ['3+ years'], kpis: ['Delivery', 'Quality'], status: 'planned', priority: 'medium' },
      { name: 'TBD', role: 'UX Researcher', reportsTo: 'Head of Product', description: 'User research', responsibilities: ['Research', 'Insights'], requirements: ['2+ years'], kpis: ['Insights/month'], status: 'planned', priority: 'low' },
    ]
  },
  {
    name: 'Data & Analytics',
    icon: Database,
    color: 'blue',
    description: 'Data infrastructure and insights',
    mission: 'Make Nuqta a data-driven organization with best-in-class analytics.',
    headRole: 'Head of Data',
    headcount: { h1: 1, full: 5 },
    workflow: ['Pipeline monitoring', 'Dashboard updates', 'Analysis requests'],
    collaboratesWith: ['Growth', 'Product', 'Engineering', 'Finance'],
    operationalProcedures: ['Data quality checks', 'Dashboard SLAs', 'Request prioritization'],
    roles: [
      { name: 'TBD', role: 'Head of Data', reportsTo: 'CTO', description: 'Data strategy & team', responsibilities: ['Data infrastructure', 'Analytics', 'ML'], requirements: ['5+ years data'], kpis: ['Data quality', 'Adoption'], status: 'planned', priority: 'medium' },
      { name: 'TBD', role: 'Data Engineer', reportsTo: 'Head of Data', description: 'Data pipelines', responsibilities: ['ETL', 'Warehouse'], requirements: ['3+ years'], kpis: ['Pipeline uptime'], status: 'planned', priority: 'medium' },
      { name: 'TBD', role: 'Data Analyst', reportsTo: 'Head of Data', description: 'Business analytics', responsibilities: ['Dashboards', 'Reports'], requirements: ['2+ years'], kpis: ['Insights delivered'], status: 'planned', priority: 'medium' },
      { name: 'TBD', role: 'Data Scientist', reportsTo: 'Head of Data', description: 'ML & personalization', responsibilities: ['Models', 'Recommendations'], requirements: ['3+ years ML'], kpis: ['Model performance'], status: 'planned', priority: 'low' },
    ]
  },
  {
    name: 'Finance & Legal',
    icon: DollarSign,
    color: 'green',
    description: 'Financial health and compliance',
    mission: 'Ensure financial excellence and full regulatory compliance.',
    headRole: 'CFO → Head of Finance',
    headcount: { h1: 1, full: 6 },
    workflow: ['Daily cash', 'Weekly AP/AR', 'Monthly close', 'Quarterly reporting'],
    collaboratesWith: ['All departments', 'Board', 'Auditors'],
    operationalProcedures: ['Approval limits', 'Expense policies', 'Audit prep'],
    roles: [
      { name: 'TBD', role: 'Head of Finance', reportsTo: 'CFO', description: 'Financial operations', responsibilities: ['Accounting', 'FP&A', 'Treasury'], requirements: ['5+ years finance'], kpis: ['Accuracy', 'Close time'], status: 'planned', priority: 'high' },
      { name: 'TBD', role: 'Finance Manager', reportsTo: 'Head of Finance', description: 'Day-to-day finance', responsibilities: ['Bookkeeping', 'Reports'], requirements: ['3+ years'], kpis: ['Accuracy', 'Timeliness'], status: 'planned', priority: 'medium' },
      { name: 'TBD', role: 'Accountant', reportsTo: 'Finance Manager', description: 'Accounting', responsibilities: ['AP/AR', 'Reconciliation'], requirements: ['2+ years'], kpis: ['Accuracy'], status: 'planned', priority: 'medium' },
      { name: 'TBD', role: 'Legal Counsel', reportsTo: 'COO', description: 'Legal matters', responsibilities: ['Contracts', 'Compliance', 'IP'], requirements: ['5+ years legal'], kpis: ['Contract TAT', 'Risk'], status: 'planned', priority: 'medium' },
      { name: 'TBD', role: 'Compliance Officer', reportsTo: 'Legal Counsel', description: 'Regulatory compliance', responsibilities: ['GDPR', 'UAE regulations'], requirements: ['3+ years'], kpis: ['Zero violations'], status: 'planned', priority: 'low' },
    ]
  },
  {
    name: 'People & Culture',
    icon: Heart,
    color: 'rose',
    description: 'Team building and culture',
    mission: 'Build a world-class team and culture that attracts top talent.',
    headRole: 'Head of People',
    headcount: { h1: 0, full: 4 },
    workflow: ['Recruiting pipeline', 'Onboarding', 'Performance cycles', 'Culture initiatives'],
    collaboratesWith: ['All departments', 'Leadership'],
    operationalProcedures: ['Hiring process', 'Onboarding checklist', 'Performance reviews'],
    roles: [
      { name: 'TBD', role: 'Head of People', reportsTo: 'COO', description: 'HR strategy', responsibilities: ['Culture', 'Talent', 'Policies'], requirements: ['5+ years HR'], kpis: ['eNPS', 'Retention'], status: 'planned', priority: 'medium' },
      { name: 'TBD', role: 'Talent Acquisition Manager', reportsTo: 'Head of People', description: 'Recruiting', responsibilities: ['Sourcing', 'Interviews', 'Offers'], requirements: ['3+ years'], kpis: ['Time to hire', 'Quality'], status: 'planned', priority: 'medium' },
      { name: 'TBD', role: 'HR Manager', reportsTo: 'Head of People', description: 'HR operations', responsibilities: ['Policies', 'Benefits', 'Compliance'], requirements: ['3+ years HR'], kpis: ['Compliance', 'Satisfaction'], status: 'planned', priority: 'medium' },
      { name: 'TBD', role: 'People Operations Specialist', reportsTo: 'HR Manager', description: 'HR admin', responsibilities: ['Onboarding', 'Admin', 'Events'], requirements: ['2+ years'], kpis: ['Process efficiency'], status: 'planned', priority: 'low' },
    ]
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; text: string; border: string; light: string }> = {
    amber: { bg: 'bg-amber-500', text: 'text-amber-400', border: 'border-amber-500/30', light: 'bg-amber-500/10' },
    cyan: { bg: 'bg-cyan-500', text: 'text-cyan-400', border: 'border-cyan-500/30', light: 'bg-cyan-500/10' },
    pink: { bg: 'bg-pink-500', text: 'text-pink-400', border: 'border-pink-500/30', light: 'bg-pink-500/10' },
    orange: { bg: 'bg-orange-500', text: 'text-orange-400', border: 'border-orange-500/30', light: 'bg-orange-500/10' },
    emerald: { bg: 'bg-emerald-500', text: 'text-emerald-400', border: 'border-emerald-500/30', light: 'bg-emerald-500/10' },
    blue: { bg: 'bg-blue-500', text: 'text-blue-400', border: 'border-blue-500/30', light: 'bg-blue-500/10' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-400', border: 'border-purple-500/30', light: 'bg-purple-500/10' },
    slate: { bg: 'bg-slate-500', text: 'text-slate-400', border: 'border-slate-500/30', light: 'bg-slate-500/10' },
    green: { bg: 'bg-green-500', text: 'text-green-400', border: 'border-green-500/30', light: 'bg-green-500/10' },
    rose: { bg: 'bg-rose-500', text: 'text-rose-400', border: 'border-rose-500/30', light: 'bg-rose-500/10' },
  };
  return colors[color] || colors.amber;
};

const getStatusBadge = (status: TeamMember['status'], priority?: TeamMember['priority']) => {
  switch (status) {
    case 'filled':
      return <span className="px-2 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Active</span>;
    case 'hiring':
      return <span className={`px-2 py-1 rounded-full text-xs font-medium border ${priority === 'critical' ? 'bg-red-500/20 text-red-400 border-red-500/30 animate-pulse' : 'bg-[#c9a227]/20 text-[#c9a227] border-[#c9a227]/30'}`}>{priority === 'critical' ? 'Critical Hire' : 'Hiring'}</span>;
    case 'planned':
      return <span className="px-2 py-1 rounded-full text-xs font-medium bg-slate-500/20 text-slate-400 border border-slate-500/30">Planned</span>;
  }
};

// Role Detail Modal
const RoleDetailCard = ({ role, onClose }: { role: TeamMember; onClose: () => void }) => (
  <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
    <div className="bg-[#0f1d32] border border-slate-700 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
      <div className="p-6 border-b border-slate-700">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-black text-white mb-1">{role.role}</h2>
            <p className="text-slate-400">Reports to: <span className="text-[#c9a227]">{role.reportsTo}</span></p>
            {role.compensation && <p className="text-emerald-400 text-sm mt-1">{role.compensation}</p>}
          </div>
          {getStatusBadge(role.status, role.priority)}
        </div>
      </div>
      <div className="p-6 space-y-6">
        <div>
          <h3 className="text-lg font-bold text-white mb-2">Overview</h3>
          <p className="text-slate-300">{role.description}</p>
        </div>
        {role.directReports && role.directReports.length > 0 && (
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Direct Reports</h3>
            <div className="flex flex-wrap gap-2">
              {role.directReports.map((report, i) => (
                <span key={i} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm">{report}</span>
              ))}
            </div>
          </div>
        )}
        <div>
          <h3 className="text-lg font-bold text-white mb-2">Responsibilities</h3>
          <ul className="space-y-2">
            {role.responsibilities.map((resp, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                {resp}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-2">Requirements</h3>
          <ul className="space-y-2">
            {role.requirements.map((req, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                <Target className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                {req}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-2">Key Performance Indicators</h3>
          <div className="grid grid-cols-2 gap-2">
            {role.kpis.map((kpi, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-sm text-slate-300">
                <BarChart3 className="w-4 h-4 text-[#c9a227] inline mr-2" />{kpi}
              </div>
            ))}
          </div>
        </div>
        {role.status === 'hiring' && (
          <a href="mailto:careers@nuqta.ae" className="block w-full bg-[#c9a227] text-[#0a1628] font-bold py-4 rounded-xl text-center hover:bg-[#d4af37] transition-colors">
            Apply for this Role
          </a>
        )}
      </div>
    </div>
  </div>
);

const TeamPage = () => {
  const [selectedRole, setSelectedRole] = useState<TeamMember | null>(null);
  const [expandedDept, setExpandedDept] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'h1' | 'full'>('h1');

  const currentTeam = viewMode === 'h1' ? h1Team : fullTeam;
  const totalRoles = currentTeam.reduce((acc, dept) => acc + dept.roles.length, 0);
  const filledRoles = currentTeam.reduce((acc, dept) => acc + dept.roles.filter(r => r.status === 'filled').length, 0);
  const hiringRoles = currentTeam.reduce((acc, dept) => acc + dept.roles.filter(r => r.status === 'hiring').length, 0);
  const criticalRoles = currentTeam.reduce((acc, dept) => acc + dept.roles.filter(r => r.priority === 'critical').length, 0);

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4 text-[#c9a227]" />
            <span className="text-[#c9a227] font-medium text-sm">Complete Team Structure + Full JDs</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            The <span className="text-[#c9a227]">People</span> Behind Nuqta
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            {viewMode === 'h1' ? 'H1 lean team to prove the loop: 5K MAU, 250 merchants, AED 10M GMV.' : 'Full organization for scaling across UAE and GCC.'}
            <br />Click any role for complete JD with responsibilities, requirements, and KPIs.
          </p>

          {/* View Toggle */}
          <div className="flex justify-center gap-4 mb-8">
            <button onClick={() => setViewMode('h1')} className={`px-6 py-3 rounded-xl font-bold transition-all ${viewMode === 'h1' ? 'bg-[#c9a227] text-[#0a1628]' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
              <div className="flex items-center gap-2"><Rocket className="w-5 h-5" /><span>H1 Team (~18)</span></div>
            </button>
            <button onClick={() => setViewMode('full')} className={`px-6 py-3 rounded-xl font-bold transition-all ${viewMode === 'full' ? 'bg-[#c9a227] text-[#0a1628]' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
              <div className="flex items-center gap-2"><Users className="w-5 h-5" /><span>Full Team (~80)</span></div>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-5">
              <p className="text-3xl font-black text-white">{totalRoles}</p>
              <p className="text-slate-400 text-sm">Total Roles</p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-5">
              <p className="text-3xl font-black text-emerald-400">{filledRoles}</p>
              <p className="text-slate-400 text-sm">Filled</p>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-5">
              <p className="text-3xl font-black text-red-400">{criticalRoles}</p>
              <p className="text-slate-400 text-sm">Critical</p>
            </div>
            <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-2xl p-5">
              <p className="text-3xl font-black text-[#c9a227]">{hiringRoles}</p>
              <p className="text-slate-400 text-sm">Hiring Now</p>
            </div>
          </div>
        </div>
      </section>

      {/* Org Chart */}
      <section className="py-12 px-4 border-y border-slate-800 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <Network className="w-5 h-5 text-[#c9a227]" />
              <h2 className="text-2xl font-black">Organization Hierarchy</h2>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#c9a227]/20 border-2 border-[#c9a227] rounded-xl px-6 py-3 mb-2">
              <p className="font-bold text-[#c9a227]">CEO</p>
              <p className="text-xs text-slate-400">Rejaul Karim</p>
            </div>
            <div className="w-px h-6 bg-slate-600" />
            <div className="flex items-start justify-center gap-4 md:gap-8 flex-wrap">
              {(viewMode === 'h1' ? [
                { role: 'COO', status: 'hiring', reports: ['Ops', 'Finance', 'HR', 'Support'] },
                { role: 'Lead Engineer', status: 'hiring', reports: ['Mobile', 'Backend', 'Design'] },
                { role: 'Head of Growth', status: 'hiring', reports: ['Community', 'Analyst'] },
                { role: 'Head of Merchants', status: 'hiring', reports: ['Success', 'BD'] },
                { role: 'Marketing Mgr', status: 'hiring', reports: ['Content', 'Creative', 'Video'] },
              ] : [
                { role: 'COO', status: 'hiring', reports: ['Ops', 'HR', 'Finance'] },
                { role: 'CTO', status: 'planned', reports: ['Eng', 'Data'] },
                { role: 'CFO', status: 'planned', reports: ['Finance'] },
                { role: 'CMO', status: 'planned', reports: ['Marketing', 'Growth'] },
                { role: 'CRO', status: 'planned', reports: ['Sales', 'Merchants'] },
              ]).map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-px h-6 bg-slate-600" />
                  <div className={`${item.status === 'hiring' ? 'bg-red-500/10 border-red-500/50' : 'bg-slate-800'} border rounded-lg px-3 py-2 text-center`}>
                    <p className="font-bold text-white text-xs">{item.role}</p>
                    <p className="text-[10px] text-red-400">{item.status === 'hiring' ? 'Hiring' : 'Planned'}</p>
                  </div>
                  <div className="w-px h-3 bg-slate-700" />
                  <div className="flex gap-1 flex-wrap justify-center">
                    {item.reports.map((r, j) => (
                      <div key={j} className="bg-slate-800/50 border border-slate-700 rounded px-2 py-0.5 text-[10px] text-slate-400">{r}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* H1 Goals */}
      {viewMode === 'h1' && (
        <section className="py-8 px-4 border-b border-slate-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-black text-[#c9a227]">H1 Goals (~5 Months)</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { label: 'MAU', value: '10K', icon: Users },
                { label: 'Merchants', value: '250+', icon: HandshakeIcon },
                { label: 'GMV', value: 'AED 10M', icon: BarChart3 },
                { label: 'D30 Retention', value: '≥25%', icon: Target },
                { label: 'LTV:CAC', value: '≥10x', icon: TrendingUp },
              ].map((goal, i) => (
                <div key={i} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                  <goal.icon className="w-6 h-6 text-[#c9a227] mx-auto mb-2" />
                  <p className="text-2xl font-black text-white">{goal.value}</p>
                  <p className="text-xs text-slate-400">{goal.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Merchant Team Scaling - 1 Team per 15-20 Merchants */}
      <section className="py-12 px-4 border-b border-slate-800 bg-emerald-500/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-4">
              <HandshakeIcon className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 font-medium text-sm">Merchant Team Scaling Formula</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black mb-2">
              <span className="text-emerald-400">1 Team</span> per <span className="text-[#c9a227]">15-20 Merchants</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our merchant success model ensures high-touch support. Each pod handles 15-20 merchants for quality relationships, fast response, and low churn.
            </p>
          </div>

          {/* Scaling Table */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden mb-8">
            <div className="grid grid-cols-5 text-center border-b border-slate-700 bg-slate-800">
              <div className="p-3 border-r border-slate-700">
                <p className="text-xs text-slate-400">Merchants</p>
              </div>
              <div className="p-3 border-r border-slate-700">
                <p className="text-xs text-slate-400">Success Teams</p>
              </div>
              <div className="p-3 border-r border-slate-700">
                <p className="text-xs text-slate-400">BD Reps</p>
              </div>
              <div className="p-3 border-r border-slate-700">
                <p className="text-xs text-slate-400">Total Merchant Staff</p>
              </div>
              <div className="p-3">
                <p className="text-xs text-slate-400">Phase</p>
              </div>
            </div>
            {[
              { merchants: '50', teams: '3', bd: '1', total: '5', phase: 'H1 Start', highlight: false },
              { merchants: '100', teams: '5-6', bd: '2', total: '9', phase: 'H1 Mid', highlight: false },
              { merchants: '250', teams: '13-15', bd: '3', total: '19', phase: 'H1 End', highlight: true },
              { merchants: '500', teams: '25-30', bd: '5', total: '38', phase: 'H2', highlight: false },
              { merchants: '1,000', teams: '50-60', bd: '8', total: '72', phase: 'H3', highlight: false },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-5 text-center ${row.highlight ? 'bg-[#c9a227]/10' : ''} ${i < 4 ? 'border-b border-slate-700' : ''}`}>
                <div className="p-3 border-r border-slate-700">
                  <p className={`font-bold ${row.highlight ? 'text-[#c9a227]' : 'text-white'}`}>{row.merchants}</p>
                </div>
                <div className="p-3 border-r border-slate-700">
                  <p className="text-emerald-400 font-medium">{row.teams}</p>
                </div>
                <div className="p-3 border-r border-slate-700">
                  <p className="text-cyan-400">{row.bd}</p>
                </div>
                <div className="p-3 border-r border-slate-700">
                  <p className="text-white font-bold">{row.total}</p>
                </div>
                <div className="p-3">
                  <span className={`px-2 py-1 rounded-full text-xs ${row.highlight ? 'bg-[#c9a227]/20 text-[#c9a227]' : 'bg-slate-700 text-slate-400'}`}>{row.phase}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pod Structure */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 border border-emerald-500/30 rounded-2xl p-6">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                <UserCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Success Manager</h3>
              <p className="text-slate-400 text-sm mb-3">Owns 15-20 merchants each. Handles onboarding, training, ongoing support, and retention.</p>
              <div className="space-y-1 text-xs text-slate-500">
                <p>• Onboard new merchants same-day</p>
                <p>• Weekly check-ins with top performers</p>
                <p>• Monthly reviews with all merchants</p>
                <p>• Response time: &lt;4 hours</p>
              </div>
            </div>
            <div className="bg-slate-800/50 border border-cyan-500/30 rounded-2xl p-6">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">BD Rep</h3>
              <p className="text-slate-400 text-sm mb-3">Generates leads and books meetings for Head of Merchants. Fills the pipeline continuously.</p>
              <div className="space-y-1 text-xs text-slate-500">
                <p>• 50+ outreach touches/day</p>
                <p>• 20+ meetings booked/week</p>
                <p>• Territory mapping</p>
                <p>• Event support</p>
              </div>
            </div>
            <div className="bg-slate-800/50 border border-[#c9a227]/30 rounded-2xl p-6">
              <div className="w-12 h-12 bg-[#c9a227]/20 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#c9a227]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Head of Merchants</h3>
              <p className="text-slate-400 text-sm mb-3">Closes key deals, manages team, sets strategy. Owns the 250 merchant H1 target.</p>
              <div className="space-y-1 text-xs text-slate-500">
                <p>• Close 30%+ of qualified leads</p>
                <p>• Negotiate enterprise deals</p>
                <p>• Team coaching & hiring</p>
                <p>• Churn &lt;5%</p>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="mt-8 bg-slate-900/50 border border-slate-700 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4 text-center">Why 15-20 Merchants per Team?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { metric: '<4 hrs', label: 'Response Time', desc: 'Fast support builds trust' },
                { metric: '<5%', label: 'Churn Rate', desc: 'High touch = low churn' },
                { metric: '>50', label: 'Merchant NPS', desc: 'Happy merchants refer' },
                { metric: '80%+', label: 'Monthly Active', desc: 'Engaged merchants drive GMV' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-black text-[#c9a227]">{item.metric}</p>
                  <p className="text-white font-medium text-sm">{item.label}</p>
                  <p className="text-slate-500 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Departments, <span className="text-[#c9a227]">Workflows</span> & Roles
            </h2>
            <p className="text-slate-400">Click department for workflow & procedures. Click role for full JD.</p>
          </div>
          <div className="space-y-6">
            {currentTeam.map((dept, deptIndex) => {
              const colors = getColorClasses(dept.color);
              const Icon = dept.icon;
              const isExpanded = expandedDept === dept.name;
              return (
                <div key={deptIndex} className="bg-slate-800/30 border border-slate-700/50 rounded-3xl overflow-hidden">
                  <div className={`${colors.light} border-b ${colors.border} p-5 cursor-pointer hover:bg-opacity-80 transition-colors`} onClick={() => setExpandedDept(isExpanded ? null : dept.name)}>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${colors.light} border ${colors.border} rounded-xl flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-black text-white">{dept.name}</h3>
                        <p className="text-slate-400 text-sm">{dept.mission}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors.light} ${colors.text} border ${colors.border}`}>{dept.roles.length} roles</span>
                        {dept.budget && <span className="px-3 py-1 rounded-full text-xs bg-slate-800 text-slate-400 border border-slate-700 hidden md:block">{dept.budget}</span>}
                        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </div>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="p-5 bg-slate-900/50 border-b border-slate-700">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Workflow className="w-5 h-5 text-[#c9a227]" />
                            <h4 className="font-bold text-white">Workflow</h4>
                          </div>
                          <ul className="space-y-1">
                            {dept.workflow.map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                                <ArrowRight className="w-3 h-3 text-slate-500" />{item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Users className="w-5 h-5 text-cyan-400" />
                            <h4 className="font-bold text-white">Collaborates With</h4>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {dept.collaboratesWith.map((c, i) => (
                              <span key={i} className="px-2 py-0.5 bg-slate-800 text-slate-300 rounded-full text-xs border border-slate-700">{c}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <ClipboardList className="w-5 h-5 text-emerald-400" />
                            <h4 className="font-bold text-white">Procedures</h4>
                          </div>
                          <ul className="space-y-1">
                            {dept.operationalProcedures.slice(0, 4).map((p, i) => (
                              <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                                <CheckCircle className="w-3 h-3 text-emerald-400" />{p}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="p-5">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {dept.roles.map((role, roleIndex) => (
                        <div
                          key={roleIndex}
                          onClick={() => setSelectedRole(role)}
                          className={`bg-slate-800/50 border rounded-xl p-4 transition-all cursor-pointer hover:scale-[1.02] ${
                            role.priority === 'critical' ? 'border-red-500/50 ring-1 ring-red-500/20' :
                            role.status === 'hiring' ? 'border-[#c9a227]/30 hover:border-[#c9a227]/50' :
                            'border-slate-700/50 hover:border-slate-600'
                          }`}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-base font-bold text-white">{role.role}</h4>
                            {getStatusBadge(role.status, role.priority)}
                          </div>
                          <p className="text-slate-400 text-xs mb-1">Reports to: {role.reportsTo}</p>
                          <p className="text-slate-500 text-xs line-clamp-2">{role.description}</p>
                          {role.compensation && <p className="text-emerald-400 text-xs mt-2">{role.compensation}</p>}
                          <div className="flex items-center gap-1 text-[#c9a227] text-xs mt-2 font-medium">
                            <FileText className="w-3 h-3" />View Full JD <ChevronRight className="w-3 h-3" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 px-4 border-t border-slate-800 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4">How <span className="text-[#c9a227]">We Work</span></h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: 'Daily Rhythms', color: 'cyan', items: ['9:30 AM standup (15 min)', 'Async Slack updates', 'Deep work blocks protected', 'EOD progress updates'] },
              { icon: BarChart3, title: 'Weekly Cadence', color: 'emerald', items: ['Monday: Week planning', 'Wednesday: Cross-team sync', 'Friday: Demo & retro', 'Metrics review every week'] },
              { icon: Settings, title: 'Tools We Use', color: 'blue', items: ['Slack - Communication', 'Notion - Docs & wikis', 'Linear - Task tracking', 'Figma - Design'] },
              { icon: Shield, title: 'Our Values', color: 'amber', items: ['Move fast, ship daily', 'Data over opinions', 'Users first, always', 'Own outcomes, not tasks'] },
            ].map((item, i) => {
              const colors = getColorClasses(item.color);
              return (
                <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
                  <div className={`w-12 h-12 ${colors.light} rounded-xl flex items-center justify-center mb-4`}>
                    <item.icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <ul className="space-y-2 text-sm text-slate-400">
                    {item.items.map((li, j) => <li key={j}>• {li}</li>)}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hiring Timeline */}
      {viewMode === 'h1' && (
        <section className="py-16 px-4 border-t border-slate-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black mb-4">H1 <span className="text-[#c9a227]">Hiring Timeline</span></h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { phase: 'Month 1 - Critical', color: 'red', roles: ['Co-Founder / COO', 'Lead Full-Stack Engineer', 'Head of Growth', 'Head of Merchant Partnerships'] },
                { phase: 'Month 2-3 - High Priority', color: 'amber', roles: ['Senior Mobile Engineer', 'UI/UX Designer', 'Marketing Manager', 'Content & Social Media Manager', 'Creative Designer', 'Community Manager', 'Merchant Success Manager'] },
                { phase: 'Month 4-5 - As Needed', color: 'slate', roles: ['Backend Engineer', 'Growth Analyst', 'Video Content Creator', 'Performance Marketer', 'BD Rep', 'Customer Support Lead', 'Finance Coordinator'] },
              ].map((phase, i) => (
                <div key={i} className={`bg-${phase.color}-500/10 border border-${phase.color}-500/30 rounded-2xl p-6`} style={{ backgroundColor: phase.color === 'red' ? 'rgba(239,68,68,0.1)' : phase.color === 'amber' ? 'rgba(201,162,39,0.1)' : 'rgba(100,116,139,0.1)', borderColor: phase.color === 'red' ? 'rgba(239,68,68,0.3)' : phase.color === 'amber' ? 'rgba(201,162,39,0.3)' : 'rgba(100,116,139,0.3)' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5" style={{ color: phase.color === 'red' ? '#f87171' : phase.color === 'amber' ? '#c9a227' : '#94a3b8' }} />
                    <span className="font-bold" style={{ color: phase.color === 'red' ? '#f87171' : phase.color === 'amber' ? '#c9a227' : '#94a3b8' }}>{phase.phase}</span>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {phase.roles.map((r, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" style={{ color: phase.color === 'red' ? '#f87171' : phase.color === 'amber' ? '#c9a227' : '#94a3b8' }} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#c9a227]/20 to-amber-500/10 border-2 border-[#c9a227]/50 rounded-3xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 bg-[#c9a227]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-[#c9a227]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">Ready to <span className="text-[#c9a227]">Join Us</span>?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              We're hiring {hiringRoles} roles ({criticalRoles} critical). Join the founding team building the future of savings in UAE.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:careers@nuqta.ae" className="inline-flex items-center justify-center gap-2 bg-[#c9a227] text-[#0a1628] font-bold px-8 py-4 rounded-xl hover:bg-[#d4af37] transition-colors">
                <Mail className="w-5 h-5" />careers@nuqta.ae
              </a>
              <a href="https://linkedin.com/company/nuqta-ae" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-slate-800 text-white font-bold px-8 py-4 rounded-xl hover:bg-slate-700 transition-colors border border-slate-700">
                <Linkedin className="w-5 h-5" />LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 px-4 border-t border-slate-800 bg-slate-900/50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-[#c9a227] rounded-lg flex items-center justify-center">
              <span className="text-[#0a1628] font-black text-sm">N</span>
            </div>
            <span className="text-xl font-black text-white">Nuqta</span>
          </div>
          <p className="text-slate-500 text-sm">The Everyday Savings Platform for UAE</p>
          <p className="text-slate-600 text-xs mt-2">© 2026 Nuqta</p>
        </div>
      </section>

      {/* Modal */}
      {selectedRole && <RoleDetailCard role={selectedRole} onClose={() => setSelectedRole(null)} />}
    </div>
  );
};

export default TeamPage;
