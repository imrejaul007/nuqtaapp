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
  Building2,
  Heart,
  FileText,
  ArrowRight,
  Shield,
  Workflow,
  Network,
  Database,
  Settings,
  ClipboardList,
  UserCheck,
  Phone,
  Calendar,
  Sun,
  Moon,
  Coffee,
  Bell,
  MessageSquare,
  GitBranch,
  Repeat,
  AlertTriangle,
  Trophy,
  Star,
  Lightbulb,
  BookOpen,
  Layers,
  PieChart,
  Activity,
  Gift,
  Globe,
  Mail
} from 'lucide-react';

/**
 * NUQTA OPERATIONS MANUAL
 * =======================
 * Complete startup playbook covering:
 * - Organization structure
 * - Every role with detailed tasks
 * - Daily/Weekly/Monthly rhythms
 * - Department collaboration
 * - Success metrics & accountability
 * - Culture & values
 */

// ============================================
// ORGANIZATION OVERVIEW
// ============================================
const companyOverview = {
  name: 'Nuqta',
  tagline: 'The Everyday Savings Platform for UAE',
  mission: 'Help UAE residents save money on everyday spending while helping local merchants grow through smart loyalty and rewards.',
  vision: 'Become the default savings companion for 1M+ UAE residents by 2027.',
  values: [
    { name: 'Move Fast', desc: 'Ship daily, iterate weekly, learn constantly', icon: Rocket },
    { name: 'Users First', desc: 'Every decision starts with user value', icon: Heart },
    { name: 'Data Driven', desc: 'Opinions are good, data is better', icon: BarChart3 },
    { name: 'Own Outcomes', desc: 'We own results, not just tasks', icon: Target },
    { name: 'Radical Transparency', desc: 'Share context, share numbers, share learning', icon: Globe },
  ],
  h1Goals: {
    timeline: '5 months',
    targets: [
      { metric: 'MAU', value: '10,000', current: '0' },
      { metric: 'Merchants', value: '250+', current: '0' },
      { metric: 'GMV', value: 'AED 10M', current: '0' },
      { metric: 'D30 Retention', value: '≥25%', current: 'N/A' },
      { metric: 'LTV:CAC', value: '≥10x', current: 'N/A' },
    ]
  }
};

// ============================================
// COMPLETE ROLE BREAKDOWN WITH TASKS
// ============================================
const roles = [
  // EXECUTIVE
  {
    id: 'ceo',
    title: 'Founder & CEO',
    department: 'Executive',
    reportsTo: 'Board of Directors',
    directReports: ['COO', 'Lead Engineer', 'Head of Growth', 'Head of Merchants', 'Marketing Manager'],
    status: 'filled',
    holder: 'Rejaul Karim',
    compensation: 'Founder equity + nominal salary',
    summary: 'Ultimate owner of company vision, strategy, fundraising, and external representation.',
    dailyTasks: [
      { time: '8:00 AM', task: 'Review overnight metrics & user feedback', duration: '30 min' },
      { time: '9:00 AM', task: 'CEO/COO morning sync', duration: '30 min' },
      { time: '9:30 AM', task: 'All-hands standup (optional)', duration: '15 min' },
      { time: '10:00 AM', task: 'Deep work: Strategy, investor materials, or key decisions', duration: '2 hrs' },
      { time: '12:00 PM', task: '1:1 with a direct report (rotating)', duration: '45 min' },
      { time: '2:00 PM', task: 'External meetings: Investors, partners, media', duration: '2-3 hrs' },
      { time: '5:00 PM', task: 'Review team blockers, make decisions', duration: '30 min' },
      { time: '6:00 PM', task: 'Evening investor/network calls (as needed)', duration: '1 hr' },
    ],
    weeklyTasks: [
      { day: 'Monday', task: 'Leadership team meeting - Review OKRs, blockers, priorities', duration: '1 hr' },
      { day: 'Tuesday', task: 'Product review with Lead Engineer', duration: '1 hr' },
      { day: 'Wednesday', task: 'Growth review with Head of Growth', duration: '1 hr' },
      { day: 'Thursday', task: 'Merchant pipeline review with Head of Merchants', duration: '1 hr' },
      { day: 'Friday', task: 'All-hands demo & celebration', duration: '30 min' },
      { day: 'Friday', task: 'Weekly investor update email', duration: '1 hr' },
    ],
    monthlyTasks: [
      { task: 'Board update preparation and send', timing: 'Last week' },
      { task: 'Monthly all-hands with company metrics', timing: '1st week' },
      { task: 'Budget review with COO', timing: '1st week' },
      { task: '1:1s with all team members (skip-levels)', timing: 'Throughout' },
      { task: 'Investor relations - updates, meetings', timing: 'Ongoing' },
    ],
    kpis: [
      { metric: 'Funding raised', target: '$2M seed by H1 end' },
      { metric: 'H1 milestones', target: '5K MAU (conservative), 250 merchants' },
      { metric: 'Team eNPS', target: '>50' },
      { metric: 'Runway', target: '18+ months maintained' },
      { metric: 'Key hires', target: 'All critical roles filled Month 1' },
    ],
    decisionRights: [
      'All equity grants',
      'Hires above AED 30K/month',
      'Major strategic pivots',
      'Fundraising terms',
      'Board communications',
    ],
  },
  {
    id: 'coo',
    title: 'Co-Founder / COO',
    department: 'Executive',
    reportsTo: 'CEO',
    directReports: ['Finance/Admin', 'HR', 'Legal', 'Customer Support Lead', 'Office Operations'],
    status: 'hiring',
    priority: 'critical',
    compensation: 'AED 35-50K/month + significant equity',
    summary: 'The operator who makes things happen. Owns day-to-day execution, hiring, and operational excellence.',
    dailyTasks: [
      { time: '8:30 AM', task: 'Review operations dashboard, cash position', duration: '30 min' },
      { time: '9:00 AM', task: 'CEO/COO morning sync', duration: '30 min' },
      { time: '9:30 AM', task: 'All-hands standup - identify blockers', duration: '15 min' },
      { time: '10:00 AM', task: 'Hiring: Resume review, interviews, offers', duration: '2 hrs' },
      { time: '12:00 PM', task: 'Cross-functional blocker resolution', duration: '1 hr' },
      { time: '2:00 PM', task: 'Vendor/partner meetings', duration: '2 hrs' },
      { time: '4:00 PM', task: 'Process improvement & SOP work', duration: '1 hr' },
      { time: '5:00 PM', task: 'End-of-day ops review', duration: '30 min' },
    ],
    weeklyTasks: [
      { day: 'Monday', task: 'Leadership team meeting', duration: '1 hr' },
      { day: 'Monday', task: 'Week planning with department heads', duration: '1 hr' },
      { day: 'Tuesday', task: 'Hiring pipeline review', duration: '1 hr' },
      { day: 'Wednesday', task: 'Vendor & contract review', duration: '1 hr' },
      { day: 'Thursday', task: 'Cross-functional alignment meeting', duration: '1 hr' },
      { day: 'Friday', task: 'Ops metrics review & process audit', duration: '1 hr' },
    ],
    monthlyTasks: [
      { task: 'Budget review and reforecast', timing: '1st week' },
      { task: 'Team performance check-ins', timing: '2nd week' },
      { task: 'Process audit and improvement', timing: '3rd week' },
      { task: 'Compliance & legal review', timing: '4th week' },
    ],
    kpis: [
      { metric: 'Blocker resolution', target: '<48 hours for any blocker' },
      { metric: 'Hiring velocity', target: 'Critical roles filled in 30 days' },
      { metric: 'Team retention', target: '<10% voluntary churn' },
      { metric: 'Budget variance', target: 'Stay within 10% of plan' },
      { metric: 'SOPs', target: 'All core processes documented' },
    ],
    decisionRights: [
      'Vendor contracts up to AED 10K',
      'Hires up to AED 20K/month',
      'Process changes',
      'Office/workspace decisions',
      'Day-to-day budget allocation',
    ],
  },

  // PRODUCT & ENGINEERING
  {
    id: 'lead-engineer',
    title: 'Lead Full-Stack Engineer',
    department: 'Product & Engineering',
    reportsTo: 'CEO',
    directReports: ['Senior Mobile Engineer', 'Backend Engineer', 'UI/UX Designer'],
    status: 'hiring',
    priority: 'critical',
    compensation: 'AED 40-55K/month + significant equity',
    summary: 'Technical co-founder level. Owns entire tech stack from React Native to Node.js to AWS.',
    dailyTasks: [
      { time: '9:00 AM', task: 'Review PRs and merge queue', duration: '30 min' },
      { time: '9:30 AM', task: 'Engineering standup', duration: '15 min' },
      { time: '10:00 AM', task: 'Deep coding: Features or architecture', duration: '3 hrs' },
      { time: '1:00 PM', task: 'Code reviews', duration: '1 hr' },
      { time: '2:00 PM', task: 'Design-dev sync (if needed)', duration: '30 min' },
      { time: '2:30 PM', task: 'Deep coding continued', duration: '2.5 hrs' },
      { time: '5:00 PM', task: 'Deploy to staging, test', duration: '30 min' },
      { time: '5:30 PM', task: 'Plan tomorrow, update Linear', duration: '30 min' },
    ],
    weeklyTasks: [
      { day: 'Monday', task: 'Sprint planning (bi-weekly)', duration: '2 hrs' },
      { day: 'Tuesday', task: 'Product review with CEO', duration: '1 hr' },
      { day: 'Wednesday', task: 'Architecture review / tech debt', duration: '1 hr' },
      { day: 'Thursday', task: 'Security & performance review', duration: '1 hr' },
      { day: 'Friday', task: 'Deploy to production', duration: '1 hr' },
      { day: 'Friday', task: 'Demo at all-hands', duration: '30 min' },
      { day: 'Friday', task: 'Sprint retro (bi-weekly)', duration: '1 hr' },
    ],
    monthlyTasks: [
      { task: 'Dependency updates and security patches', timing: 'Last Friday' },
      { task: 'Performance audit and optimization', timing: '2nd week' },
      { task: 'Infrastructure cost review', timing: '1st week' },
      { task: 'Tech roadmap planning', timing: '4th week' },
    ],
    kpis: [
      { metric: 'App crash rate', target: '<0.1%' },
      { metric: 'API response time', target: '<200ms p95' },
      { metric: 'App store rating', target: '>4.5 stars' },
      { metric: 'Code review turnaround', target: '<24 hours' },
      { metric: 'Uptime', target: '99.9%' },
      { metric: 'Sprint velocity', target: 'Consistent week-over-week' },
    ],
    decisionRights: [
      'Technology stack choices',
      'Architecture decisions',
      'Code standards and review process',
      'Release schedule',
      'Engineering team hiring recommendations',
    ],
  },
  {
    id: 'senior-mobile',
    title: 'Senior Mobile Engineer',
    department: 'Product & Engineering',
    reportsTo: 'Lead Full-Stack Engineer',
    directReports: [],
    status: 'hiring',
    priority: 'high',
    compensation: 'AED 25-35K/month + equity',
    summary: 'React Native specialist building the core mobile app experience.',
    dailyTasks: [
      { time: '9:30 AM', task: 'Engineering standup', duration: '15 min' },
      { time: '9:45 AM', task: 'Review assigned tickets, plan day', duration: '15 min' },
      { time: '10:00 AM', task: 'Feature development', duration: '3 hrs' },
      { time: '1:00 PM', task: 'Code review participation', duration: '30 min' },
      { time: '1:30 PM', task: 'Design sync (as needed)', duration: '30 min' },
      { time: '2:00 PM', task: 'Feature development continued', duration: '3 hrs' },
      { time: '5:00 PM', task: 'Testing and bug fixes', duration: '30 min' },
      { time: '5:30 PM', task: 'Update tickets, push code', duration: '30 min' },
    ],
    weeklyTasks: [
      { day: 'Monday', task: 'Sprint planning participation', duration: '2 hrs' },
      { day: 'Wednesday', task: 'Design-dev sync', duration: '1 hr' },
      { day: 'Friday', task: 'Testing, bug bash', duration: '2 hrs' },
      { day: 'Friday', task: 'Demo preparation', duration: '30 min' },
    ],
    monthlyTasks: [
      { task: 'App performance profiling', timing: '2nd week' },
      { task: 'App store optimization', timing: '3rd week' },
      { task: 'React Native upgrade evaluation', timing: '4th week' },
    ],
    kpis: [
      { metric: 'Feature delivery', target: 'On-time 90%+' },
      { metric: 'Bug count', target: '<3 bugs per release' },
      { metric: 'Code coverage', target: '>80%' },
      { metric: 'App performance', target: 'Launch <3 seconds' },
    ],
    decisionRights: [
      'Mobile implementation details',
      'UI component architecture',
      'Testing strategy for mobile',
    ],
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    department: 'Product & Engineering',
    reportsTo: 'Lead Full-Stack Engineer',
    directReports: [],
    status: 'hiring',
    priority: 'high',
    compensation: 'AED 20-30K/month + equity',
    summary: 'Product designer owning entire user experience from research to shipped pixels.',
    dailyTasks: [
      { time: '9:30 AM', task: 'Review design feedback and requests', duration: '30 min' },
      { time: '10:00 AM', task: 'Deep design work in Figma', duration: '3 hrs' },
      { time: '1:00 PM', task: 'Design-dev handoff meetings', duration: '1 hr' },
      { time: '2:00 PM', task: 'User research / usability testing', duration: '2 hrs' },
      { time: '4:00 PM', task: 'Marketing design support', duration: '1 hr' },
      { time: '5:00 PM', task: 'Design system maintenance', duration: '30 min' },
    ],
    weeklyTasks: [
      { day: 'Monday', task: 'Design sprint planning', duration: '1 hr' },
      { day: 'Wednesday', task: 'Design-dev sync', duration: '1 hr' },
      { day: 'Thursday', task: 'User testing session', duration: '2 hrs' },
      { day: 'Friday', task: 'Design review with team', duration: '1 hr' },
    ],
    monthlyTasks: [
      { task: 'Design system audit', timing: '1st week' },
      { task: 'Competitor design analysis', timing: '2nd week' },
      { task: 'User research synthesis', timing: '3rd week' },
      { task: 'Design roadmap planning', timing: '4th week' },
    ],
    kpis: [
      { metric: 'Design-to-dev handoff', target: '<2 days per feature' },
      { metric: 'Usability test scores', target: '>85% task completion' },
      { metric: 'Design system coverage', target: '100% components' },
      { metric: 'Iteration speed', target: '<24hr for minor updates' },
    ],
    decisionRights: [
      'Visual design direction',
      'UX patterns and flows',
      'Design tool choices',
      'User research methodology',
    ],
  },
  {
    id: 'backend-engineer',
    title: 'Backend Engineer',
    department: 'Product & Engineering',
    reportsTo: 'Lead Full-Stack Engineer',
    directReports: [],
    status: 'planned',
    priority: 'medium',
    compensation: 'AED 18-28K/month + equity',
    summary: 'Builds APIs, database, and integrations. Works with Lead Engineer on backend systems.',
    dailyTasks: [
      { time: '9:30 AM', task: 'Engineering standup', duration: '15 min' },
      { time: '9:45 AM', task: 'Review API monitoring, errors', duration: '15 min' },
      { time: '10:00 AM', task: 'API development', duration: '3 hrs' },
      { time: '1:00 PM', task: 'Code reviews', duration: '30 min' },
      { time: '1:30 PM', task: 'Integration work', duration: '2 hrs' },
      { time: '3:30 PM', task: 'Testing and documentation', duration: '1.5 hrs' },
      { time: '5:00 PM', task: 'Deploy and monitor', duration: '30 min' },
    ],
    weeklyTasks: [
      { day: 'Monday', task: 'Sprint planning', duration: '2 hrs' },
      { day: 'Wednesday', task: 'Database optimization review', duration: '1 hr' },
      { day: 'Friday', task: 'API documentation update', duration: '1 hr' },
    ],
    monthlyTasks: [
      { task: 'Performance optimization', timing: '2nd week' },
      { task: 'Security review', timing: '3rd week' },
      { task: 'Integration health check', timing: '4th week' },
    ],
    kpis: [
      { metric: 'API uptime', target: '99.9%' },
      { metric: 'Query performance', target: '<100ms p95' },
      { metric: 'Integration success rate', target: '>99%' },
      { metric: 'Documentation coverage', target: '100%' },
    ],
    decisionRights: [
      'API design patterns',
      'Database schema changes',
      'Third-party integration choices',
    ],
  },

  // GROWTH & ANALYTICS
  {
    id: 'head-growth',
    title: 'Head of Growth',
    department: 'Growth & Analytics',
    reportsTo: 'CEO',
    directReports: ['Community Manager', 'Growth Analyst'],
    status: 'hiring',
    priority: 'critical',
    compensation: 'AED 30-45K/month + equity',
    summary: 'Owns 5K MAU goal. Architect of user acquisition and retention strategy.',
    dailyTasks: [
      { time: '8:30 AM', task: 'Review daily metrics (DAU, retention, referrals)', duration: '30 min' },
      { time: '9:00 AM', task: 'Check experiment results', duration: '30 min' },
      { time: '9:30 AM', task: 'All-hands standup', duration: '15 min' },
      { time: '10:00 AM', task: 'Growth strategy work', duration: '2 hrs' },
      { time: '12:00 PM', task: 'Experiment analysis and iteration', duration: '1 hr' },
      { time: '1:00 PM', task: 'Team 1:1s (Community, Analyst)', duration: '1 hr' },
      { time: '2:00 PM', task: 'Cross-functional collaboration', duration: '2 hrs' },
      { time: '4:00 PM', task: 'New experiment planning', duration: '1 hr' },
      { time: '5:00 PM', task: 'Update growth dashboard', duration: '30 min' },
    ],
    weeklyTasks: [
      { day: 'Monday', task: 'Growth team sync', duration: '1 hr' },
      { day: 'Tuesday', task: 'Experiment planning session', duration: '1 hr' },
      { day: 'Wednesday', task: 'Growth review with CEO', duration: '1 hr' },
      { day: 'Thursday', task: 'Cohort analysis deep-dive', duration: '2 hrs' },
      { day: 'Friday', task: 'Weekly growth report to team', duration: '1 hr' },
    ],
    monthlyTasks: [
      { task: 'Channel performance review', timing: '1st week' },
      { task: 'Referral program optimization', timing: '2nd week' },
      { task: 'User research synthesis', timing: '3rd week' },
      { task: 'Growth roadmap planning', timing: '4th week' },
    ],
    kpis: [
      { metric: 'MAU', target: '10K by H1 end' },
      { metric: 'D1 retention', target: '≥40%' },
      { metric: 'D7 retention', target: '≥30%' },
      { metric: 'D30 retention', target: '≥25%' },
      { metric: 'Referral rate', target: '≥20% of users refer' },
      { metric: 'CAC', target: '<AED 15' },
    ],
    decisionRights: [
      'Growth channel priorities',
      'Experiment design and execution',
      'Referral program mechanics',
      'Growth budget allocation',
    ],
  },
  {
    id: 'community-manager',
    title: 'Community & Ambassador Manager',
    department: 'Growth & Analytics',
    reportsTo: 'Head of Growth',
    directReports: ['Student Ambassadors (50+)'],
    status: 'hiring',
    priority: 'high',
    compensation: 'AED 12-18K/month + equity',
    summary: 'Builds grassroots growth through ambassadors, communities, and micro-influencers.',
    dailyTasks: [
      { time: '9:00 AM', task: 'Check community messages (WhatsApp, Telegram)', duration: '30 min' },
      { time: '9:30 AM', task: 'Respond to community questions', duration: '1 hr' },
      { time: '10:30 AM', task: 'Ambassador coordination', duration: '1 hr' },
      { time: '11:30 AM', task: 'Content creation for communities', duration: '1 hr' },
      { time: '1:00 PM', task: 'Influencer outreach', duration: '1 hr' },
      { time: '2:00 PM', task: 'Event planning (if applicable)', duration: '2 hrs' },
      { time: '4:00 PM', task: 'Track community metrics', duration: '30 min' },
      { time: '4:30 PM', task: 'Evening community engagement', duration: '1 hr' },
    ],
    weeklyTasks: [
      { day: 'Monday', task: 'Ambassador check-in calls', duration: '2 hrs' },
      { day: 'Tuesday', task: 'Community content planning', duration: '1 hr' },
      { day: 'Wednesday', task: 'Influencer meetings', duration: '2 hrs' },
      { day: 'Thursday', task: 'Feedback synthesis for Product', duration: '1 hr' },
      { day: 'Friday', task: 'Community metrics report', duration: '1 hr' },
      { day: 'Weekend', task: 'Community events (as scheduled)', duration: '3-4 hrs' },
    ],
    monthlyTasks: [
      { task: 'Ambassador rewards distribution', timing: '1st week' },
      { task: 'New ambassador recruitment', timing: 'Ongoing' },
      { task: 'Community health analysis', timing: '3rd week' },
      { task: 'Event ROI review', timing: '4th week' },
    ],
    kpis: [
      { metric: 'Ambassador count', target: '50+ active' },
      { metric: 'Community size', target: '5K+ members' },
      { metric: 'Engagement rate', target: '>10%' },
      { metric: 'Referrals from community', target: '2K+ users' },
      { metric: 'Community NPS', target: '>60' },
    ],
    decisionRights: [
      'Community content and tone',
      'Ambassador selection',
      'Event planning (within budget)',
      'Micro-influencer partnerships (under AED 5K)',
    ],
  },
  {
    id: 'growth-analyst',
    title: 'Growth Analyst',
    department: 'Growth & Analytics',
    reportsTo: 'Head of Growth',
    directReports: [],
    status: 'planned',
    priority: 'medium',
    compensation: 'AED 15-22K/month + equity',
    summary: 'Data wizard turning numbers into insights and experiments into learnings.',
    dailyTasks: [
      { time: '9:00 AM', task: 'Check dashboard accuracy', duration: '30 min' },
      { time: '9:30 AM', task: 'Morning metrics snapshot', duration: '30 min' },
      { time: '10:00 AM', task: 'Analysis work (cohorts, funnels)', duration: '3 hrs' },
      { time: '1:00 PM', task: 'Experiment result analysis', duration: '1 hr' },
      { time: '2:00 PM', task: 'Ad-hoc analysis requests', duration: '2 hrs' },
      { time: '4:00 PM', task: 'Dashboard maintenance', duration: '1 hr' },
      { time: '5:00 PM', task: 'Document insights', duration: '30 min' },
    ],
    weeklyTasks: [
      { day: 'Monday', task: 'Weekly metrics report', duration: '2 hrs' },
      { day: 'Tuesday', task: 'Experiment design support', duration: '1 hr' },
      { day: 'Thursday', task: 'Cohort analysis deep-dive', duration: '2 hrs' },
      { day: 'Friday', task: 'Insights presentation', duration: '1 hr' },
    ],
    monthlyTasks: [
      { task: 'LTV/CAC modeling update', timing: '1st week' },
      { task: 'Channel attribution analysis', timing: '2nd week' },
      { task: 'Retention curve analysis', timing: '3rd week' },
      { task: 'Growth model forecasting', timing: '4th week' },
    ],
    kpis: [
      { metric: 'Dashboard accuracy', target: '100%' },
      { metric: 'Reporting', target: 'On-time every week' },
      { metric: 'Experiment velocity', target: '5+ tests/month' },
      { metric: 'Actionable insights', target: '2+/week' },
    ],
    decisionRights: [
      'Analytics tool choices',
      'Dashboard design',
      'Metric definitions',
    ],
  },

  // MARKETING & BRAND
  {
    id: 'marketing-manager',
    title: 'Marketing Manager',
    department: 'Marketing & Brand',
    reportsTo: 'CEO',
    directReports: ['Content Manager', 'Creative Designer', 'Video Creator', 'Performance Marketer'],
    status: 'hiring',
    priority: 'high',
    compensation: 'AED 25-35K/month + equity',
    summary: 'Leads all marketing efforts. Owns brand strategy, campaigns, and team.',
    dailyTasks: [
      { time: '9:00 AM', task: 'Review social metrics and mentions', duration: '30 min' },
      { time: '9:30 AM', task: 'Content approval queue', duration: '30 min' },
      { time: '10:00 AM', task: 'Campaign planning and management', duration: '2 hrs' },
      { time: '12:00 PM', task: 'Team 1:1s', duration: '1 hr' },
      { time: '1:00 PM', task: 'Creative review and feedback', duration: '1 hr' },
      { time: '2:00 PM', task: 'PR and media relations', duration: '1 hr' },
      { time: '3:00 PM', task: 'Partner/brand meetings', duration: '1 hr' },
      { time: '4:00 PM', task: 'Strategy work', duration: '1 hr' },
      { time: '5:00 PM', task: 'End-of-day content review', duration: '30 min' },
    ],
    weeklyTasks: [
      { day: 'Monday', task: 'Marketing team sync', duration: '1 hr' },
      { day: 'Monday', task: 'Content calendar planning', duration: '2 hrs' },
      { day: 'Tuesday', task: 'Campaign performance review', duration: '1 hr' },
      { day: 'Wednesday', task: 'Creative brainstorm', duration: '1 hr' },
      { day: 'Thursday', task: 'PR outreach', duration: '2 hrs' },
      { day: 'Friday', task: 'Weekly marketing report', duration: '1 hr' },
    ],
    monthlyTasks: [
      { task: 'Brand health check', timing: '1st week' },
      { task: 'Competitor analysis', timing: '2nd week' },
      { task: 'Campaign ROI review', timing: '3rd week' },
      { task: 'Marketing roadmap planning', timing: '4th week' },
    ],
    kpis: [
      { metric: 'Brand awareness', target: '20% aided recall in target demo' },
      { metric: 'Marketing-sourced users', target: '30%+ of acquisitions' },
      { metric: 'Social following', target: '50K+ across platforms' },
      { metric: 'Campaign ROI', target: '>3x ROAS' },
      { metric: 'PR coverage', target: '5+ tier-1 media hits' },
    ],
    decisionRights: [
      'Brand messaging and positioning',
      'Content approval',
      'Marketing channel priorities',
      'PR strategy',
      'Marketing team hiring',
    ],
  },
  {
    id: 'content-manager',
    title: 'Content & Social Media Manager',
    department: 'Marketing & Brand',
    reportsTo: 'Marketing Manager',
    directReports: [],
    status: 'hiring',
    priority: 'high',
    compensation: 'AED 12-18K/month + equity',
    summary: 'Creates scroll-stopping content and manages all social channels.',
    dailyTasks: [
      { time: '8:00 AM', task: 'Post scheduled content', duration: '30 min' },
      { time: '9:00 AM', task: 'Respond to comments and DMs', duration: '1 hr' },
      { time: '10:00 AM', task: 'Content creation (copy, captions)', duration: '2 hrs' },
      { time: '12:00 PM', task: 'Engage with community', duration: '30 min' },
      { time: '12:30 PM', task: 'Trend monitoring', duration: '30 min' },
      { time: '1:00 PM', task: 'Content creation continued', duration: '2 hrs' },
      { time: '3:00 PM', task: 'Influencer coordination', duration: '1 hr' },
      { time: '4:00 PM', task: 'Schedule next day content', duration: '1 hr' },
      { time: '5:00 PM', task: 'Evening engagement', duration: '30 min' },
      { time: '8:00 PM', task: 'Final engagement check', duration: '15 min' },
    ],
    weeklyTasks: [
      { day: 'Monday', task: 'Content calendar finalization', duration: '2 hrs' },
      { day: 'Tuesday', task: 'Video content planning with creator', duration: '1 hr' },
      { day: 'Wednesday', task: 'UGC campaign coordination', duration: '1 hr' },
      { day: 'Thursday', task: 'Analytics review', duration: '1 hr' },
      { day: 'Friday', task: 'Next week content prep', duration: '2 hrs' },
    ],
    monthlyTasks: [
      { task: 'Content audit', timing: '1st week' },
      { task: 'Platform algorithm research', timing: '2nd week' },
      { task: 'Content strategy refinement', timing: '4th week' },
    ],
    kpis: [
      { metric: 'Follower growth', target: '5K+/month' },
      { metric: 'Engagement rate', target: '>5%' },
      { metric: 'Content output', target: '30+ posts/week' },
      { metric: 'Viral posts', target: '2+/month (>100K views)' },
      { metric: 'Response time', target: '<2 hours' },
    ],
    decisionRights: [
      'Daily content decisions',
      'Social engagement tone',
      'Content scheduling',
    ],
  },
  {
    id: 'creative-designer',
    title: 'Creative Designer',
    department: 'Marketing & Brand',
    reportsTo: 'Marketing Manager',
    directReports: [],
    status: 'hiring',
    priority: 'high',
    compensation: 'AED 12-18K/month + equity',
    summary: 'Creates all visual assets for marketing - social graphics, ads, merchant materials.',
    dailyTasks: [
      { time: '9:00 AM', task: 'Review design requests queue', duration: '30 min' },
      { time: '9:30 AM', task: 'Social media graphics (daily posts)', duration: '2 hrs' },
      { time: '11:30 AM', task: 'Campaign creative work', duration: '2 hrs' },
      { time: '1:30 PM', task: 'Marketing material updates', duration: '1 hr' },
      { time: '2:30 PM', task: 'Ad creative production', duration: '1.5 hrs' },
      { time: '4:00 PM', task: 'Revision requests', duration: '1 hr' },
      { time: '5:00 PM', task: 'Asset organization', duration: '30 min' },
    ],
    weeklyTasks: [
      { day: 'Monday', task: 'Week design planning', duration: '1 hr' },
      { day: 'Wednesday', task: 'Creative brainstorm with team', duration: '1 hr' },
      { day: 'Friday', task: 'Brand asset library update', duration: '1 hr' },
    ],
    monthlyTasks: [
      { task: 'Brand consistency audit', timing: '1st week' },
      { task: 'Template updates', timing: '3rd week' },
      { task: 'Design trend research', timing: '4th week' },
    ],
    kpis: [
      { metric: 'Creative output', target: '50+ assets/week' },
      { metric: 'Quality score', target: '<5% revision requests' },
      { metric: 'Turnaround', target: '<24h standard requests' },
      { metric: 'Brand consistency', target: '100% on-brand' },
    ],
    decisionRights: [
      'Visual execution within brand guidelines',
      'Design tools and workflow',
    ],
  },

  // MERCHANT SUCCESS
  {
    id: 'head-merchants',
    title: 'Head of Merchant Partnerships',
    department: 'Merchant Success',
    reportsTo: 'CEO',
    directReports: ['Merchant Success Manager', 'Business Development Rep'],
    status: 'hiring',
    priority: 'critical',
    compensation: 'AED 30-40K/month + equity + commission',
    summary: 'Leads merchant acquisition and relationships. Owns the 250 merchant goal.',
    dailyTasks: [
      { time: '8:30 AM', task: 'Review pipeline and deal status', duration: '30 min' },
      { time: '9:00 AM', task: 'Follow-up calls/emails to prospects', duration: '1 hr' },
      { time: '10:00 AM', task: 'Sales meetings (in-person or virtual)', duration: '3 hrs' },
      { time: '1:00 PM', task: 'Team 1:1s (Success Mgr, BD Rep)', duration: '1 hr' },
      { time: '2:00 PM', task: 'More sales meetings', duration: '2 hrs' },
      { time: '4:00 PM', task: 'Proposal and contract prep', duration: '1 hr' },
      { time: '5:00 PM', task: 'CRM update and planning', duration: '30 min' },
    ],
    weeklyTasks: [
      { day: 'Monday', task: 'Pipeline review meeting', duration: '1 hr' },
      { day: 'Tuesday', task: 'Strategy with CEO', duration: '1 hr' },
      { day: 'Wednesday', task: 'Enterprise account calls', duration: '2 hrs' },
      { day: 'Thursday', task: 'Merchant pipeline review with CEO', duration: '1 hr' },
      { day: 'Friday', task: 'Team performance review', duration: '1 hr' },
    ],
    monthlyTasks: [
      { task: 'Territory planning', timing: '1st week' },
      { task: 'Top merchant QBRs', timing: '2nd week' },
      { task: 'Commission calculation', timing: 'Last day' },
      { task: 'Merchant health analysis', timing: '3rd week' },
    ],
    kpis: [
      { metric: 'Merchants onboarded', target: '250+ by H1 end' },
      { metric: 'Merchant quality score', target: '>80%' },
      { metric: 'Deal close rate', target: '>30%' },
      { metric: 'Time to close', target: '<14 days average' },
      { metric: 'Merchant churn', target: '<5%' },
    ],
    decisionRights: [
      'Commission rates (within guidelines)',
      'Deal terms',
      'Merchant prioritization',
      'Team hiring recommendations',
    ],
  },
  {
    id: 'merchant-success-mgr',
    title: 'Merchant Success Manager',
    department: 'Merchant Success',
    reportsTo: 'Head of Merchant Partnerships',
    directReports: [],
    status: 'hiring',
    priority: 'high',
    compensation: 'AED 12-18K/month + equity',
    summary: "Owns merchant happiness post-sale. The merchant's best friend.",
    dailyTasks: [
      { time: '9:00 AM', task: 'Check merchant messages (WhatsApp)', duration: '30 min' },
      { time: '9:30 AM', task: 'New merchant onboarding calls', duration: '2 hrs' },
      { time: '11:30 AM', task: 'Merchant support tickets', duration: '1 hr' },
      { time: '12:30 PM', task: 'Merchant check-in calls', duration: '2 hrs' },
      { time: '2:30 PM', task: 'Onboarding training sessions', duration: '1 hr' },
      { time: '3:30 PM', task: 'Escalation handling', duration: '1 hr' },
      { time: '4:30 PM', task: 'Feedback documentation', duration: '30 min' },
      { time: '5:00 PM', task: 'Next day prep', duration: '30 min' },
    ],
    weeklyTasks: [
      { day: 'Monday', task: 'Merchant health score review', duration: '1 hr' },
      { day: 'Tuesday', task: 'Feedback synthesis for Product', duration: '1 hr' },
      { day: 'Wednesday', task: 'Training material updates', duration: '1 hr' },
      { day: 'Thursday', task: 'Upsell opportunity identification', duration: '1 hr' },
      { day: 'Friday', task: 'Merchant success metrics report', duration: '1 hr' },
    ],
    monthlyTasks: [
      { task: 'Merchant satisfaction surveys', timing: '1st week' },
      { task: 'Success story collection', timing: '2nd week' },
      { task: 'Churn risk analysis', timing: '3rd week' },
      { task: 'Process improvement proposals', timing: '4th week' },
    ],
    kpis: [
      { metric: 'Merchant NPS', target: '>50' },
      { metric: 'Onboarding time', target: '<24 hours' },
      { metric: 'Merchant churn', target: '<5%' },
      { metric: 'Support response', target: '<4 hours' },
      { metric: 'Merchant engagement', target: '80%+ active monthly' },
    ],
    decisionRights: [
      'Onboarding process',
      'Support prioritization',
      'Merchant training content',
    ],
  },
  {
    id: 'bd-rep',
    title: 'Business Development Rep',
    department: 'Merchant Success',
    reportsTo: 'Head of Merchant Partnerships',
    directReports: [],
    status: 'planned',
    priority: 'medium',
    compensation: 'AED 8-12K/month + equity + commission',
    summary: 'Lead generation machine. Fills the pipeline for Head of Partnerships.',
    dailyTasks: [
      { time: '9:00 AM', task: 'Review lead list and prioritize', duration: '30 min' },
      { time: '9:30 AM', task: 'Cold calling session', duration: '2 hrs' },
      { time: '11:30 AM', task: 'Email outreach', duration: '1 hr' },
      { time: '12:30 PM', task: 'Field visits (walking into shops)', duration: '2 hrs' },
      { time: '2:30 PM', task: 'Follow-up calls', duration: '1 hr' },
      { time: '3:30 PM', task: 'CRM updates', duration: '30 min' },
      { time: '4:00 PM', task: 'More outreach', duration: '1.5 hrs' },
      { time: '5:30 PM', task: 'Plan tomorrow leads', duration: '30 min' },
    ],
    weeklyTasks: [
      { day: 'Monday', task: 'Lead list building', duration: '2 hrs' },
      { day: 'Tuesday', task: 'Territory research', duration: '1 hr' },
      { day: 'Thursday', task: 'Pipeline review with Head', duration: '1 hr' },
      { day: 'Friday', task: 'Outreach metrics review', duration: '30 min' },
    ],
    monthlyTasks: [
      { task: 'Territory mapping update', timing: '1st week' },
      { task: 'Outreach script refinement', timing: '2nd week' },
      { task: 'Event support (if any)', timing: 'As needed' },
    ],
    kpis: [
      { metric: 'Leads generated', target: '100+/week' },
      { metric: 'Meetings booked', target: '20+/week' },
      { metric: 'Lead-to-meeting rate', target: '>20%' },
      { metric: 'Outreach volume', target: '50+ touches/day' },
    ],
    decisionRights: [
      'Outreach timing and approach',
      'Territory prioritization',
    ],
  },

  // OPERATIONS & FINANCE
  {
    id: 'finance-coordinator',
    title: 'Finance & Admin Coordinator',
    department: 'Operations & Finance',
    reportsTo: 'COO',
    directReports: [],
    status: 'planned',
    priority: 'medium',
    compensation: 'AED 10-15K/month + equity',
    summary: 'First finance hire. Handles bookkeeping, invoicing, expenses, office admin.',
    dailyTasks: [
      { time: '9:00 AM', task: 'Check bank accounts and cash position', duration: '30 min' },
      { time: '9:30 AM', task: 'Process invoices', duration: '1 hr' },
      { time: '10:30 AM', task: 'Expense report review', duration: '1 hr' },
      { time: '11:30 AM', task: 'Bookkeeping entries', duration: '1 hr' },
      { time: '12:30 PM', task: 'Vendor coordination', duration: '30 min' },
      { time: '1:00 PM', task: 'Office admin tasks', duration: '1 hr' },
      { time: '2:00 PM', task: 'Payroll coordination', duration: '1 hr' },
      { time: '3:00 PM', task: 'Financial reporting', duration: '1.5 hrs' },
      { time: '4:30 PM', task: 'Document filing', duration: '30 min' },
    ],
    weeklyTasks: [
      { day: 'Monday', task: 'Weekly expense review', duration: '1 hr' },
      { day: 'Wednesday', task: 'Vendor payment processing', duration: '2 hrs' },
      { day: 'Friday', task: 'Cash flow update', duration: '1 hr' },
    ],
    monthlyTasks: [
      { task: 'Monthly close', timing: 'By 5th' },
      { task: 'P&L preparation', timing: 'By 5th' },
      { task: 'Budget vs actual report', timing: '1st week' },
      { task: 'Audit prep (quarterly)', timing: '4th week' },
    ],
    kpis: [
      { metric: 'Books accuracy', target: '100%' },
      { metric: 'Payment processing', target: '<3 days' },
      { metric: 'Monthly close', target: 'By 5th of month' },
      { metric: 'Expense compliance', target: '100%' },
    ],
    decisionRights: [
      'Invoice prioritization',
      'Office supplies purchasing',
      'Expense approval (under AED 500)',
    ],
  },

  // CUSTOMER SUPPORT
  {
    id: 'support-lead',
    title: 'Customer Support Lead',
    department: 'Customer Support',
    reportsTo: 'COO',
    directReports: [],
    status: 'planned',
    priority: 'medium',
    compensation: 'AED 10-15K/month + equity',
    summary: 'First support hire. Handles all user support and builds FAQ/help center.',
    dailyTasks: [
      { time: '9:00 AM', task: 'Review overnight tickets', duration: '30 min' },
      { time: '9:30 AM', task: 'Respond to high-priority tickets', duration: '1.5 hrs' },
      { time: '11:00 AM', task: 'General ticket resolution', duration: '2 hrs' },
      { time: '1:00 PM', task: 'Escalation handling', duration: '1 hr' },
      { time: '2:00 PM', task: 'FAQ and help center updates', duration: '1 hr' },
      { time: '3:00 PM', task: 'Ticket resolution continued', duration: '1.5 hrs' },
      { time: '4:30 PM', task: 'Feedback documentation', duration: '30 min' },
      { time: '5:00 PM', task: 'End-of-day ticket review', duration: '30 min' },
      { time: '7:00 PM', task: 'Evening ticket check (remote)', duration: '30 min' },
    ],
    weeklyTasks: [
      { day: 'Monday', task: 'Top issues report to Product', duration: '1 hr' },
      { day: 'Wednesday', task: 'Support metrics review', duration: '1 hr' },
      { day: 'Friday', task: 'FAQ audit and update', duration: '1 hr' },
    ],
    monthlyTasks: [
      { task: 'CSAT analysis', timing: '1st week' },
      { task: 'Support process improvement', timing: '2nd week' },
      { task: 'Training material update', timing: '4th week' },
    ],
    kpis: [
      { metric: 'Response time', target: '<2 hours' },
      { metric: 'Resolution time', target: '<24 hours' },
      { metric: 'CSAT score', target: '>4.5/5' },
      { metric: 'Tickets handled', target: '50+/day' },
      { metric: 'Escalation rate', target: '<10%' },
    ],
    decisionRights: [
      'Ticket prioritization',
      'FAQ content',
      'Support tool configuration',
    ],
  },

  // HR / PEOPLE OPERATIONS
  {
    id: 'hr-manager',
    title: 'HR & People Operations Manager',
    department: 'HR & People',
    reportsTo: 'COO',
    directReports: ['Office Coordinator'],
    status: 'planned',
    priority: 'high',
    compensation: 'AED 15-22K/month + equity',
    summary: 'First HR hire. Owns recruiting, onboarding, culture, performance, and employee experience. Critical for scaling.',
    dailyTasks: [
      { time: '9:00 AM', task: 'Review applications and schedule interviews', duration: '1 hr' },
      { time: '10:00 AM', task: 'Conduct interviews (2-3 per day)', duration: '2 hrs' },
      { time: '12:00 PM', task: 'Onboarding tasks for new hires', duration: '1 hr' },
      { time: '1:00 PM', task: 'Employee queries and support', duration: '1 hr' },
      { time: '2:00 PM', task: 'HR admin (contracts, visas, docs)', duration: '1.5 hrs' },
      { time: '3:30 PM', task: 'Culture initiatives planning', duration: '1 hr' },
      { time: '4:30 PM', task: 'Candidate outreach and sourcing', duration: '1 hr' },
      { time: '5:30 PM', task: 'Update hiring pipeline', duration: '30 min' },
    ],
    weeklyTasks: [
      { day: 'Monday', task: 'Hiring pipeline review with COO', duration: '1 hr' },
      { day: 'Tuesday', task: 'Job posting updates', duration: '1 hr' },
      { day: 'Wednesday', task: 'New hire check-ins', duration: '1 hr' },
      { day: 'Thursday', task: 'Culture/team event planning', duration: '1 hr' },
      { day: 'Friday', task: 'Employee pulse check', duration: '30 min' },
    ],
    monthlyTasks: [
      { task: 'eNPS survey', timing: '1st week' },
      { task: 'Performance review coordination', timing: '3rd week' },
      { task: 'Compensation benchmarking', timing: '4th week' },
      { task: 'Policy review and updates', timing: '4th week' },
    ],
    kpis: [
      { metric: 'Time to hire', target: '<30 days for critical roles' },
      { metric: 'Offer acceptance rate', target: '>80%' },
      { metric: 'Employee retention', target: '>90% (first year)' },
      { metric: 'Onboarding completion', target: '100% in first week' },
      { metric: 'eNPS score', target: '>50' },
    ],
    decisionRights: [
      'Interview scheduling and process',
      'Job descriptions and postings',
      'Onboarding process',
      'Team events (within budget)',
      'HR policy recommendations',
    ],
  },
  {
    id: 'office-coordinator',
    title: 'Office & Admin Coordinator',
    department: 'HR & People',
    reportsTo: 'HR & People Operations Manager',
    directReports: [],
    status: 'planned',
    priority: 'low',
    compensation: 'AED 6-10K/month + equity',
    summary: 'Keeps the office running smoothly. Admin support, office management, and team logistics.',
    dailyTasks: [
      { time: '8:30 AM', task: 'Open office, check supplies', duration: '30 min' },
      { time: '9:00 AM', task: 'Mail and deliveries', duration: '30 min' },
      { time: '9:30 AM', task: 'Admin tasks and filing', duration: '2 hrs' },
      { time: '11:30 AM', task: 'Meeting room coordination', duration: '30 min' },
      { time: '12:00 PM', task: 'Lunch/catering coordination', duration: '30 min' },
      { time: '1:00 PM', task: 'Visitor management', duration: '1 hr' },
      { time: '2:00 PM', task: 'Travel and logistics support', duration: '1 hr' },
      { time: '3:00 PM', task: 'Document preparation', duration: '1.5 hrs' },
      { time: '4:30 PM', task: 'Supplies ordering', duration: '30 min' },
      { time: '5:00 PM', task: 'End-of-day office check', duration: '30 min' },
    ],
    weeklyTasks: [
      { day: 'Monday', task: 'Office supplies inventory', duration: '30 min' },
      { day: 'Wednesday', task: 'Team lunch coordination', duration: '1 hr' },
      { day: 'Friday', task: 'Office cleanup and organization', duration: '1 hr' },
    ],
    monthlyTasks: [
      { task: 'Office maintenance coordination', timing: '1st week' },
      { task: 'Vendor relationship management', timing: '2nd week' },
      { task: 'Budget tracking for office expenses', timing: '4th week' },
    ],
    kpis: [
      { metric: 'Office satisfaction', target: '>4.5/5' },
      { metric: 'Supply availability', target: '100%' },
      { metric: 'Admin task turnaround', target: '<24 hours' },
    ],
    decisionRights: [
      'Office supplies purchasing (under AED 500)',
      'Meeting room bookings',
      'Vendor coordination for office needs',
    ],
  },

  // LEGAL & COMPLIANCE
  {
    id: 'legal-counsel',
    title: 'Legal Counsel (Part-time/Retainer)',
    department: 'Legal & Compliance',
    reportsTo: 'COO',
    directReports: [],
    status: 'planned',
    priority: 'medium',
    compensation: 'AED 10-15K/month retainer',
    summary: 'Handles contracts, compliance, IP protection, and legal risk. Part-time/retainer initially.',
    dailyTasks: [
      { time: 'As needed', task: 'Contract review and drafting', duration: '2-4 hrs' },
      { time: 'As needed', task: 'Legal queries from team', duration: '1 hr' },
      { time: 'As needed', task: 'Compliance monitoring', duration: '1 hr' },
    ],
    weeklyTasks: [
      { day: 'Monday', task: 'Contract queue review', duration: '1 hr' },
      { day: 'Thursday', task: 'Legal status update to COO', duration: '30 min' },
    ],
    monthlyTasks: [
      { task: 'Regulatory compliance review', timing: '1st week' },
      { task: 'IP and trademark monitoring', timing: '2nd week' },
      { task: 'Policy updates', timing: '3rd week' },
      { task: 'Legal risk assessment', timing: '4th week' },
    ],
    kpis: [
      { metric: 'Contract turnaround', target: '<48 hours' },
      { metric: 'Compliance issues', target: 'Zero violations' },
      { metric: 'Legal disputes', target: 'Zero' },
    ],
    decisionRights: [
      'Contract terms and conditions',
      'Legal risk assessment',
      'Compliance requirements',
    ],
  },
];

// ============================================
// DEPARTMENT COLLABORATION MATRIX
// ============================================
const collaborationMatrix = [
  {
    from: 'Product & Engineering',
    collaborations: [
      { to: 'Growth', frequency: 'Daily', purpose: 'A/B tests, feature experiments, tracking implementation' },
      { to: 'Marketing', frequency: 'Weekly', purpose: 'Landing pages, campaign tech needs, tracking' },
      { to: 'Merchant Success', frequency: 'Weekly', purpose: 'Dashboard features, merchant tool requests' },
      { to: 'Support', frequency: 'Daily', purpose: 'Bug reports, feature requests, issue resolution' },
    ]
  },
  {
    from: 'Growth & Analytics',
    collaborations: [
      { to: 'Product & Engineering', frequency: 'Daily', purpose: 'Experiment implementation, data instrumentation' },
      { to: 'Marketing', frequency: 'Daily', purpose: 'Campaign coordination, attribution' },
      { to: 'Merchant Success', frequency: 'Weekly', purpose: 'Merchant-driven acquisition campaigns' },
    ]
  },
  {
    from: 'Marketing & Brand',
    collaborations: [
      { to: 'Growth', frequency: 'Daily', purpose: 'User acquisition campaigns, content coordination' },
      { to: 'Product & Engineering', frequency: 'Weekly', purpose: 'Feature launches, website updates' },
      { to: 'Merchant Success', frequency: 'Weekly', purpose: 'Co-marketing with merchants, case studies' },
    ]
  },
  {
    from: 'Merchant Success',
    collaborations: [
      { to: 'Product & Engineering', frequency: 'Weekly', purpose: 'Feature requests, bug reports' },
      { to: 'Marketing', frequency: 'Weekly', purpose: 'Co-marketing, merchant stories' },
      { to: 'Growth', frequency: 'Weekly', purpose: 'Merchant-driven user acquisition' },
    ]
  },
  {
    from: 'Operations & Finance',
    collaborations: [
      { to: 'All Departments', frequency: 'Weekly', purpose: 'Budget, expenses, compliance' },
      { to: 'Executive', frequency: 'Weekly', purpose: 'Financial reporting, planning' },
    ]
  },
  {
    from: 'Customer Support',
    collaborations: [
      { to: 'Product & Engineering', frequency: 'Daily', purpose: 'Bug escalation, feature requests' },
      { to: 'Growth', frequency: 'Weekly', purpose: 'User feedback, NPS insights' },
      { to: 'Merchant Success', frequency: 'As needed', purpose: 'Merchant support overflow' },
    ]
  },
  {
    from: 'HR & People',
    collaborations: [
      { to: 'All Departments', frequency: 'Ongoing', purpose: 'Hiring, onboarding, performance management' },
      { to: 'Executive', frequency: 'Weekly', purpose: 'Hiring pipeline, culture initiatives' },
      { to: 'Finance', frequency: 'Monthly', purpose: 'Payroll, benefits, compensation' },
    ]
  },
  {
    from: 'Legal & Compliance',
    collaborations: [
      { to: 'Executive', frequency: 'Weekly', purpose: 'Contracts, risk assessment' },
      { to: 'Merchant Success', frequency: 'As needed', purpose: 'Merchant agreements' },
      { to: 'HR', frequency: 'As needed', purpose: 'Employment contracts, policies' },
      { to: 'Finance', frequency: 'As needed', purpose: 'Financial compliance' },
    ]
  },
];

// ============================================
// COMPANY RHYTHMS
// ============================================
const companyRhythms = {
  daily: [
    { time: '9:30 AM', meeting: 'All-Hands Standup', duration: '15 min', participants: 'Everyone', purpose: 'Quick updates, blockers, wins' },
  ],
  weekly: [
    { day: 'Monday', time: '10:00 AM', meeting: 'Leadership Sync', duration: '1 hr', participants: 'CEO, COO, Dept Heads', purpose: 'OKRs, blockers, priorities' },
    { day: 'Monday', time: '2:00 PM', meeting: 'Sprint Planning', duration: '2 hrs', participants: 'Engineering', purpose: 'Plan sprint work (bi-weekly)' },
    { day: 'Tuesday', time: '10:00 AM', meeting: 'Product Review', duration: '1 hr', participants: 'CEO, Lead Engineer, Designer', purpose: 'Product decisions, roadmap' },
    { day: 'Wednesday', time: '10:00 AM', meeting: 'Growth Review', duration: '1 hr', participants: 'CEO, Head of Growth', purpose: 'Metrics, experiments' },
    { day: 'Wednesday', time: '2:00 PM', meeting: 'Design-Dev Sync', duration: '1 hr', participants: 'Eng + Design', purpose: 'Handoffs, feedback' },
    { day: 'Thursday', time: '10:00 AM', meeting: 'Merchant Review', duration: '1 hr', participants: 'CEO, Head of Merchants', purpose: 'Pipeline, deals' },
    { day: 'Friday', time: '4:00 PM', meeting: 'All-Hands Demo', duration: '30 min', participants: 'Everyone', purpose: 'Show work, celebrate' },
    { day: 'Friday', time: '4:30 PM', meeting: 'Sprint Retro', duration: '1 hr', participants: 'Engineering', purpose: 'What worked, improve (bi-weekly)' },
  ],
  monthly: [
    { timing: '1st Monday', meeting: 'All-Hands Monthly', duration: '1 hr', participants: 'Everyone', purpose: 'Company metrics, roadmap, Q&A' },
    { timing: '1st Week', meeting: 'Budget Review', duration: '1 hr', participants: 'CEO, COO, Finance', purpose: 'Budget vs actual, reforecast' },
    { timing: '3rd Week', meeting: 'Board Prep', duration: '2 hrs', participants: 'CEO, COO', purpose: 'Prepare board update' },
  ],
  quarterly: [
    { timing: 'End of Quarter', meeting: 'Board Meeting', duration: '2 hrs', participants: 'Board, CEO, COO', purpose: 'Company review, strategy' },
    { timing: 'Start of Quarter', meeting: 'OKR Planning', duration: '4 hrs', participants: 'Leadership', purpose: 'Set quarterly OKRs' },
    { timing: 'Mid-Quarter', meeting: 'Performance Reviews', duration: 'Ongoing', participants: 'Managers + Reports', purpose: '1:1 performance discussions' },
  ],
};

// ============================================
// COMPONENT
// ============================================
const NuqtaOperationsManual = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'roles' | 'collaboration' | 'rhythms' | 'metrics'>('overview');
  const [selectedRole, setSelectedRole] = useState<typeof roles[0] | null>(null);
  const [expandedDept, setExpandedDept] = useState<string | null>(null);

  const departments = [...new Set(roles.map(r => r.department))];
  const criticalHires = roles.filter(r => r.priority === 'critical');
  const hiringRoles = roles.filter(r => r.status === 'hiring');

  const getDeptIcon = (dept: string) => {
    const icons: Record<string, React.ElementType> = {
      'Executive': Briefcase,
      'Product & Engineering': Code,
      'Growth & Analytics': TrendingUp,
      'Marketing & Brand': Megaphone,
      'Merchant Success': HandshakeIcon,
      'Operations & Finance': Building2,
      'Customer Support': Headphones,
    };
    return icons[dept] || Users;
  };

  const getDeptColor = (dept: string) => {
    const colors: Record<string, string> = {
      'Executive': 'amber',
      'Product & Engineering': 'cyan',
      'Growth & Analytics': 'pink',
      'Marketing & Brand': 'orange',
      'Merchant Success': 'emerald',
      'Operations & Finance': 'slate',
      'Customer Support': 'purple',
    };
    return colors[dept] || 'slate';
  };

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Hero */}
      <section className="relative py-16 px-4 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-full px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4 text-[#c9a227]" />
            <span className="text-[#c9a227] font-medium text-sm">Complete Operations Manual</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            How <span className="text-[#c9a227]">Nuqta</span> Works
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Complete playbook: Every role, every task, every meeting. Everything you need to build the best startup in UAE.
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-0 z-40 bg-[#0a1628]/95 backdrop-blur-sm border-b border-slate-800 py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {[
              { id: 'overview', label: 'Overview', icon: Layers },
              { id: 'roles', label: 'All Roles & Tasks', icon: Users },
              { id: 'collaboration', label: 'Collaboration', icon: Network },
              { id: 'rhythms', label: 'Company Rhythms', icon: Calendar },
              { id: 'metrics', label: 'Success Metrics', icon: Target },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#c9a227] text-[#0a1628]'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className="space-y-12">
              {/* Mission & Vision */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Rocket className="w-5 h-5 text-[#c9a227]" />
                    <h2 className="text-xl font-bold">Mission</h2>
                  </div>
                  <p className="text-slate-300">{companyOverview.mission}</p>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-[#c9a227]" />
                    <h2 className="text-xl font-bold">Vision</h2>
                  </div>
                  <p className="text-slate-300">{companyOverview.vision}</p>
                </div>
              </div>

              {/* Values */}
              <div>
                <h2 className="text-2xl font-black mb-6 text-center">Our <span className="text-[#c9a227]">Values</span></h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {companyOverview.values.map((value, i) => (
                    <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center">
                      <value.icon className="w-8 h-8 text-[#c9a227] mx-auto mb-2" />
                      <h3 className="font-bold text-white mb-1">{value.name}</h3>
                      <p className="text-slate-400 text-xs">{value.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* H1 Goals */}
              <div className="bg-gradient-to-r from-[#c9a227]/10 to-amber-500/5 border border-[#c9a227]/30 rounded-2xl p-6">
                <h2 className="text-2xl font-black mb-6 text-center">H1 Goals <span className="text-slate-400">({companyOverview.h1Goals.timeline})</span></h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {companyOverview.h1Goals.targets.map((goal, i) => (
                    <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center">
                      <p className="text-2xl font-black text-[#c9a227]">{goal.value}</p>
                      <p className="text-white font-medium text-sm">{goal.metric}</p>
                      <p className="text-slate-500 text-xs">Current: {goal.current}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center">
                  <p className="text-3xl font-black text-white">{roles.length}</p>
                  <p className="text-slate-400 text-sm">Total Roles Defined</p>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-center">
                  <p className="text-3xl font-black text-red-400">{criticalHires.length}</p>
                  <p className="text-slate-400 text-sm">Critical Hires</p>
                </div>
                <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-xl p-4 text-center">
                  <p className="text-3xl font-black text-[#c9a227]">{hiringRoles.length}</p>
                  <p className="text-slate-400 text-sm">Hiring Now</p>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-center">
                  <p className="text-3xl font-black text-emerald-400">{departments.length}</p>
                  <p className="text-slate-400 text-sm">Departments</p>
                </div>
              </div>

              {/* Critical Hires */}
              <div>
                <h2 className="text-2xl font-black mb-6 text-center">
                  <span className="text-red-400">Critical</span> Month 1 Hires
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {criticalHires.map((role, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectedRole(role)}
                      className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 cursor-pointer hover:bg-red-500/20 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-4 h-4 text-red-400 animate-pulse" />
                        <span className="text-red-400 text-xs font-bold">CRITICAL</span>
                      </div>
                      <h3 className="font-bold text-white">{role.title}</h3>
                      <p className="text-slate-400 text-xs">{role.department}</p>
                      <p className="text-emerald-400 text-xs mt-2">{role.compensation}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ROLES TAB */}
          {activeTab === 'roles' && (
            <div className="space-y-6">
              <p className="text-slate-400 text-center mb-8">
                Click any role to see complete daily/weekly/monthly tasks, KPIs, and decision rights.
              </p>
              {departments.map(dept => {
                const deptRoles = roles.filter(r => r.department === dept);
                const Icon = getDeptIcon(dept);
                const color = getDeptColor(dept);
                const isExpanded = expandedDept === dept;

                return (
                  <div key={dept} className="bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden">
                    <div
                      onClick={() => setExpandedDept(isExpanded ? null : dept)}
                      className={`bg-${color}-500/10 border-b border-${color}-500/30 p-4 cursor-pointer hover:bg-${color}-500/20 transition-colors`}
                      style={{
                        backgroundColor: `var(--${color}-bg, rgba(100,116,139,0.1))`,
                        borderColor: `var(--${color}-border, rgba(100,116,139,0.3))`
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#c9a227]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white">{dept}</h3>
                          <p className="text-slate-400 text-sm">{deptRoles.length} roles</p>
                        </div>
                        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="p-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          {deptRoles.map((role, i) => (
                            <div
                              key={i}
                              onClick={() => setSelectedRole(role)}
                              className={`bg-slate-800/50 border rounded-xl p-4 cursor-pointer hover:bg-slate-700/50 transition-colors ${
                                role.priority === 'critical'
                                  ? 'border-red-500/50'
                                  : role.status === 'hiring'
                                  ? 'border-[#c9a227]/30'
                                  : 'border-slate-700'
                              }`}
                            >
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="font-bold text-white">{role.title}</h4>
                                {role.priority === 'critical' && (
                                  <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-xs rounded-full">Critical</span>
                                )}
                                {role.status === 'hiring' && role.priority !== 'critical' && (
                                  <span className="px-2 py-0.5 bg-[#c9a227]/20 text-[#c9a227] text-xs rounded-full">Hiring</span>
                                )}
                                {role.status === 'filled' && (
                                  <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">Filled</span>
                                )}
                                {role.status === 'planned' && (
                                  <span className="px-2 py-0.5 bg-slate-500/20 text-slate-400 text-xs rounded-full">Planned</span>
                                )}
                              </div>
                              <p className="text-slate-400 text-xs mb-2">Reports to: {role.reportsTo}</p>
                              <p className="text-slate-500 text-xs line-clamp-2">{role.summary}</p>
                              {role.compensation && (
                                <p className="text-emerald-400 text-xs mt-2">{role.compensation}</p>
                              )}
                              <div className="flex items-center gap-1 text-[#c9a227] text-xs mt-3 font-medium">
                                <FileText className="w-3 h-3" />
                                View Full Schedule & KPIs
                                <ChevronRight className="w-3 h-3" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* COLLABORATION TAB */}
          {activeTab === 'collaboration' && (
            <div className="space-y-8">
              <p className="text-slate-400 text-center">
                How departments work together to achieve company goals.
              </p>
              {collaborationMatrix.map((item, i) => (
                <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {React.createElement(getDeptIcon(item.from), { className: 'w-6 h-6 text-[#c9a227]' })}
                    <h3 className="text-xl font-bold text-white">{item.from}</h3>
                  </div>
                  <div className="space-y-3">
                    {item.collaborations.map((collab, j) => (
                      <div key={j} className="flex items-center gap-4 bg-slate-900/50 rounded-xl p-3">
                        <ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-white">{collab.to}</span>
                            <span className={`px-2 py-0.5 rounded-full text-xs ${
                              collab.frequency === 'Daily' ? 'bg-emerald-500/20 text-emerald-400' :
                              collab.frequency === 'Weekly' ? 'bg-cyan-500/20 text-cyan-400' :
                              'bg-slate-500/20 text-slate-400'
                            }`}>
                              {collab.frequency}
                            </span>
                          </div>
                          <p className="text-slate-400 text-sm">{collab.purpose}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* RHYTHMS TAB */}
          {activeTab === 'rhythms' && (
            <div className="space-y-8">
              {/* Daily */}
              <div className="bg-slate-800/50 border border-emerald-500/30 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sun className="w-5 h-5 text-emerald-400" />
                  <h2 className="text-xl font-bold">Daily Rhythm</h2>
                </div>
                {companyRhythms.daily.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-900/50 rounded-xl p-4">
                    <div className="text-emerald-400 font-mono text-sm w-20">{item.time}</div>
                    <div className="flex-1">
                      <p className="font-medium text-white">{item.meeting}</p>
                      <p className="text-slate-400 text-sm">{item.purpose}</p>
                    </div>
                    <div className="text-slate-500 text-sm">{item.duration}</div>
                    <div className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-400">{item.participants}</div>
                  </div>
                ))}
              </div>

              {/* Weekly */}
              <div className="bg-slate-800/50 border border-cyan-500/30 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  <h2 className="text-xl font-bold">Weekly Rhythm</h2>
                </div>
                <div className="space-y-2">
                  {companyRhythms.weekly.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-slate-900/50 rounded-xl p-3">
                      <div className="text-cyan-400 font-medium text-sm w-24">{item.day}</div>
                      <div className="text-slate-400 font-mono text-sm w-20">{item.time}</div>
                      <div className="flex-1">
                        <p className="font-medium text-white text-sm">{item.meeting}</p>
                        <p className="text-slate-500 text-xs">{item.purpose}</p>
                      </div>
                      <div className="text-slate-500 text-xs">{item.duration}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Monthly */}
              <div className="bg-slate-800/50 border border-[#c9a227]/30 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Repeat className="w-5 h-5 text-[#c9a227]" />
                  <h2 className="text-xl font-bold">Monthly Rhythm</h2>
                </div>
                <div className="space-y-2">
                  {companyRhythms.monthly.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-slate-900/50 rounded-xl p-3">
                      <div className="text-[#c9a227] font-medium text-sm w-24">{item.timing}</div>
                      <div className="flex-1">
                        <p className="font-medium text-white text-sm">{item.meeting}</p>
                        <p className="text-slate-500 text-xs">{item.purpose}</p>
                      </div>
                      <div className="text-slate-500 text-xs">{item.duration}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quarterly */}
              <div className="bg-slate-800/50 border border-purple-500/30 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <PieChart className="w-5 h-5 text-purple-400" />
                  <h2 className="text-xl font-bold">Quarterly Rhythm</h2>
                </div>
                <div className="space-y-2">
                  {companyRhythms.quarterly.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-slate-900/50 rounded-xl p-3">
                      <div className="text-purple-400 font-medium text-sm w-32">{item.timing}</div>
                      <div className="flex-1">
                        <p className="font-medium text-white text-sm">{item.meeting}</p>
                        <p className="text-slate-500 text-xs">{item.purpose}</p>
                      </div>
                      <div className="text-slate-500 text-xs">{item.duration}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* METRICS TAB */}
          {activeTab === 'metrics' && (
            <div className="space-y-8">
              <p className="text-slate-400 text-center mb-8">
                Key success metrics by department. Every team knows exactly what success looks like.
              </p>
              {departments.map(dept => {
                const deptRoles = roles.filter(r => r.department === dept);
                const Icon = getDeptIcon(dept);
                const allKpis = deptRoles.flatMap(r => r.kpis.map(k => ({ ...k, role: r.title })));

                return (
                  <div key={dept} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <Icon className="w-6 h-6 text-[#c9a227]" />
                      <h3 className="text-xl font-bold text-white">{dept}</h3>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {allKpis.slice(0, 9).map((kpi, j) => (
                        <div key={j} className="bg-slate-900/50 border border-slate-700 rounded-xl p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <Target className="w-3 h-3 text-[#c9a227]" />
                            <p className="text-white font-medium text-sm">{kpi.metric}</p>
                          </div>
                          <p className="text-[#c9a227] font-bold">{kpi.target}</p>
                          <p className="text-slate-500 text-xs">{kpi.role}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Role Detail Modal */}
      {selectedRole && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedRole(null)}>
          <div className="bg-[#0f1d32] border border-slate-700 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            {/* Header */}
            <div className="p-6 border-b border-slate-700 sticky top-0 bg-[#0f1d32]">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-black text-white mb-1">{selectedRole.title}</h2>
                  <p className="text-slate-400">{selectedRole.department} • Reports to: <span className="text-[#c9a227]">{selectedRole.reportsTo}</span></p>
                  {selectedRole.compensation && <p className="text-emerald-400 text-sm mt-1">{selectedRole.compensation}</p>}
                </div>
                {selectedRole.priority === 'critical' && (
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-bold animate-pulse">CRITICAL HIRE</span>
                )}
              </div>
            </div>

            <div className="p-6 space-y-8">
              {/* Summary */}
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Overview</h3>
                <p className="text-slate-300">{selectedRole.summary}</p>
              </div>

              {/* Direct Reports */}
              {selectedRole.directReports.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Direct Reports</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedRole.directReports.map((report, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm">{report}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Daily Tasks */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sun className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-lg font-bold text-white">Daily Schedule</h3>
                </div>
                <div className="space-y-2">
                  {selectedRole.dailyTasks.map((task, i) => (
                    <div key={i} className="flex items-center gap-4 bg-slate-800/50 rounded-lg p-3">
                      <span className="text-emerald-400 font-mono text-sm w-20">{task.time}</span>
                      <span className="text-white flex-1">{task.task}</span>
                      <span className="text-slate-500 text-sm">{task.duration}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly Tasks */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-lg font-bold text-white">Weekly Tasks</h3>
                </div>
                <div className="space-y-2">
                  {selectedRole.weeklyTasks.map((task, i) => (
                    <div key={i} className="flex items-center gap-4 bg-slate-800/50 rounded-lg p-3">
                      <span className="text-cyan-400 font-medium w-24">{task.day}</span>
                      <span className="text-white flex-1">{task.task}</span>
                      <span className="text-slate-500 text-sm">{task.duration}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Monthly Tasks */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Repeat className="w-5 h-5 text-[#c9a227]" />
                  <h3 className="text-lg font-bold text-white">Monthly Tasks</h3>
                </div>
                <div className="space-y-2">
                  {selectedRole.monthlyTasks.map((task, i) => (
                    <div key={i} className="flex items-center gap-4 bg-slate-800/50 rounded-lg p-3">
                      <span className="text-[#c9a227] font-medium w-24">{task.timing}</span>
                      <span className="text-white flex-1">{task.task}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* KPIs */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-5 h-5 text-pink-400" />
                  <h3 className="text-lg font-bold text-white">Key Performance Indicators</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedRole.kpis.map((kpi, i) => (
                    <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-lg p-3">
                      <p className="text-white font-medium">{kpi.metric}</p>
                      <p className="text-[#c9a227] font-bold">{kpi.target}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decision Rights */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-purple-400" />
                  <h3 className="text-lg font-bold text-white">Decision Rights</h3>
                </div>
                <ul className="space-y-2">
                  {selectedRole.decisionRights.map((right, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      {right}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Apply Button */}
              {selectedRole.status === 'hiring' && (
                <a
                  href="mailto:careers@nuqta.ae"
                  className="block w-full bg-[#c9a227] text-[#0a1628] font-bold py-4 rounded-xl text-center hover:bg-[#d4af37] transition-colors"
                >
                  Apply for this Role
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <section className="py-12 px-4 border-t border-slate-800 bg-slate-900/50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-[#c9a227] rounded-lg flex items-center justify-center">
              <span className="text-[#0a1628] font-black text-sm">N</span>
            </div>
            <span className="text-xl font-black text-white">Nuqta Operations Manual</span>
          </div>
          <p className="text-slate-500 text-sm">Building the best startup in UAE - one process at a time</p>
          <p className="text-slate-600 text-xs mt-2">© 2026 Nuqta</p>
        </div>
      </section>
    </div>
  );
};

export default NuqtaOperationsManual;
