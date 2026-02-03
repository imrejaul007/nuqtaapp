'use client';

import React, { useState } from 'react';
import {
  Users,
  Target,
  TrendingUp,
  Briefcase,
  ChevronRight,
  ChevronDown,
  Sparkles,
  BarChart3,
  Rocket,
  CheckCircle,
  Clock,
  Zap,
  DollarSign,
  LineChart,
  Globe,
  Building2,
  Heart,
  Shield,
  Network,
  Calculator,
  Scale,
  Settings,
  ClipboardList,
  UserCheck,
  Megaphone,
  Brain,
  Lightbulb,
  Award,
  Workflow,
  PieChart,
  Wallet,
  FileText,
  Handshake,
  Eye,
  MessageSquare,
  GraduationCap,
  ArrowUpRight,
  Crown
} from 'lucide-react';

/**
 * NUQTA EXECUTIVE LEADERSHIP TEAM
 * ================================
 * Complete C-Suite Analysis with:
 * - Full JDs and Responsibilities
 * - Strategic Analysis
 * - KPIs and Success Metrics
 * - Decision-Making Framework
 * - Cross-Functional Collaboration
 * - Leadership Style Requirements
 */

interface ExecutiveRole {
  title: string;
  name: string;
  status: 'filled' | 'hiring' | 'planned';
  icon: React.ElementType;
  color: string;
  tagline: string;
  primaryFocus: string;
  description: string;
  strategicPriorities: {
    priority: string;
    description: string;
    timeline: string;
  }[];
  responsibilities: string[];
  decisionAuthority: string[];
  kpis: {
    metric: string;
    target: string;
    frequency: string;
  }[];
  requirements: {
    experience: string[];
    skills: string[];
    traits: string[];
  };
  directReports: string[];
  reportsTo: string;
  collaboratesWith: {
    role: string;
    collaboration: string;
  }[];
  weeklySchedule: {
    day: string;
    activities: string[];
  }[];
  compensation: {
    salary: string;
    equity: string;
    bonus: string;
  };
  hiringPriority: 'critical' | 'high' | 'medium';
  nuqtaContext: string;
}

// Complete Executive Team Data
const executiveTeam: ExecutiveRole[] = [
  {
    title: 'Chief Executive Officer',
    name: 'Rejaul Karim',
    status: 'filled',
    icon: Crown,
    color: 'amber',
    tagline: 'Vision & Strategy Architect',
    primaryFocus: 'Company vision, fundraising, and external representation',
    description: 'The CEO is the ultimate owner of Nuqta\'s vision, strategy, and success. Responsible for setting the north star, securing funding, building the executive team, and ensuring all departments execute toward the same goals. The CEO represents Nuqta externally to investors, media, partners, and the broader ecosystem.',
    strategicPriorities: [
      {
        priority: 'Secure Series A Funding',
        description: 'Lead fundraising efforts to secure $2-5M Series A to scale Nuqta across UAE and GCC',
        timeline: 'H1 2026'
      },
      {
        priority: 'Build Executive Team',
        description: 'Recruit world-class COO, CMO, CHRO, and CFO to scale operations',
        timeline: 'Q1-Q2 2026'
      },
      {
        priority: 'Establish Strategic Partnerships',
        description: 'Secure partnerships with major banks, retailers, and government entities in UAE',
        timeline: 'Ongoing'
      },
      {
        priority: 'Define Company Culture',
        description: 'Establish Nuqta values, operating principles, and culture that attracts top talent',
        timeline: 'Q1 2026'
      },
      {
        priority: 'Board Management',
        description: 'Build and manage an effective board of directors and advisors',
        timeline: 'Ongoing'
      }
    ],
    responsibilities: [
      'Define and communicate company vision, mission, and long-term strategy',
      'Lead all fundraising efforts - pitch decks, investor meetings, term sheet negotiations',
      'Build and maintain relationships with board, investors, and key stakeholders',
      'Hire, develop, and manage the executive leadership team',
      'Set company culture, values, and operating principles',
      'Make final decisions on major strategic initiatives, pivots, and M&A',
      'Represent Nuqta externally - media interviews, conferences, keynotes',
      'Approve all senior hires (Director+) and equity grants',
      'Weekly 1:1s with all C-suite executives',
      'Monthly board updates and quarterly board meetings',
      'Crisis management and final escalation point',
      'Long-term strategic planning (3-5 year horizon)'
    ],
    decisionAuthority: [
      'Company strategy and direction',
      'Fundraising and investor relations',
      'Executive team composition and compensation',
      'Major partnerships and contracts (>AED 500K)',
      'Company pivots and strategic shifts',
      'Board composition and governance',
      'Equity grants and option pool allocation',
      'M&A and exit strategy',
      'Company values and culture initiatives',
      'Final escalation for any unresolved issue'
    ],
    kpis: [
      { metric: 'Fundraising', target: 'Series A closed by Q3 2026', frequency: 'Quarterly' },
      { metric: 'Executive Hiring', target: 'Full C-suite by Q2 2026', frequency: 'Monthly' },
      { metric: 'Company Milestones', target: '100% H1 goals achieved', frequency: 'Quarterly' },
      { metric: 'Runway', target: '18+ months always', frequency: 'Monthly' },
      { metric: 'Team eNPS', target: '>50', frequency: 'Quarterly' },
      { metric: 'Board NPS', target: '>70', frequency: 'Quarterly' },
      { metric: 'Strategic Partnerships', target: '5+ major partners/year', frequency: 'Quarterly' }
    ],
    requirements: {
      experience: [
        'Previous founder or C-level experience at growth-stage startup',
        '10+ years in leadership roles with P&L responsibility',
        'Successful fundraising track record ($5M+ raised)',
        'Experience scaling companies from seed to Series B+',
        'GCC/MENA market experience strongly preferred'
      ],
      skills: [
        'Exceptional storytelling and communication',
        'Strategic thinking and long-term planning',
        'Investor relations and board management',
        'Executive team building and development',
        'Crisis management and decision-making under pressure',
        'Public speaking and media relations'
      ],
      traits: [
        'Visionary leader who inspires teams',
        'High EQ and self-awareness',
        'Resilient and adaptable',
        'Strong ethical compass',
        'Decisive yet collaborative',
        'Growth mindset and continuous learner'
      ]
    },
    directReports: ['COO', 'CFO', 'CMO', 'CTO', 'CHRO', 'Chief of Staff'],
    reportsTo: 'Board of Directors',
    collaboratesWith: [
      { role: 'COO', collaboration: 'Daily sync on operations, execution, and blockers' },
      { role: 'CFO', collaboration: 'Weekly financial reviews, fundraising strategy' },
      { role: 'CMO', collaboration: 'Brand strategy, major campaigns, market positioning' },
      { role: 'CHRO', collaboration: 'Culture, executive hiring, organizational development' },
      { role: 'Board', collaboration: 'Monthly updates, quarterly meetings, strategic guidance' }
    ],
    weeklySchedule: [
      { day: 'Monday', activities: ['Executive team meeting (2h)', 'Individual 1:1s with C-suite', 'Investor calls'] },
      { day: 'Tuesday', activities: ['Strategy work', 'External meetings (partners, investors)', 'Media/PR'] },
      { day: 'Wednesday', activities: ['Product review', 'Customer/merchant visits', 'Team office hours'] },
      { day: 'Thursday', activities: ['Deep work (writing, planning)', 'Board/advisor calls', 'Hiring interviews'] },
      { day: 'Friday', activities: ['All-hands meeting', 'Week review with COO', 'Weekend planning'] }
    ],
    compensation: {
      salary: 'AED 50-80K/month (below market - founder mode)',
      equity: '20-30% (Founder shares)',
      bonus: 'Milestone-based tied to fundraising and growth'
    },
    hiringPriority: 'critical',
    nuqtaContext: 'As Nuqta\'s founder, the CEO has built the vision of transforming everyday spending into meaningful rewards. The immediate focus is securing Series A funding, building the executive team, and achieving H1 milestones of 10K MAU and 250+ merchants. The CEO\'s unique understanding of the UAE market and relationships with investors and partners are critical competitive advantages.'
  },
  {
    title: 'Chief Operating Officer',
    name: 'PRIORITY HIRE',
    status: 'hiring',
    icon: Settings,
    color: 'blue',
    tagline: 'Execution Excellence & Scale Engine',
    primaryFocus: 'Operational excellence, execution, and cross-functional alignment',
    description: 'The COO is the operator who makes things happen. Owns day-to-day execution across all departments, ensures the machine runs smoothly, and removes blockers so teams can focus on their work. While the CEO focuses on vision and fundraising, the COO focuses on execution and results. Critical hire for scaling from 10 to 50+ people.',
    strategicPriorities: [
      {
        priority: 'Operational Foundation',
        description: 'Build scalable processes, SOPs, and systems for all core functions',
        timeline: 'First 90 days'
      },
      {
        priority: 'Team Scaling',
        description: 'Lead non-technical hiring to grow from 15 to 50+ team members',
        timeline: 'H1-H2 2026'
      },
      {
        priority: 'Cross-Functional Alignment',
        description: 'Implement OKRs and ensure all departments execute toward company goals',
        timeline: 'First 30 days'
      },
      {
        priority: 'Vendor & Partner Management',
        description: 'Negotiate and manage relationships with key vendors and service providers',
        timeline: 'Ongoing'
      },
      {
        priority: 'Office & Infrastructure',
        description: 'Set up Dubai office, workspace, and operational infrastructure',
        timeline: 'Q1 2026'
      }
    ],
    responsibilities: [
      'Own day-to-day operations across all non-technical departments',
      'Build and optimize all operational processes, SOPs, and playbooks',
      'Lead cross-functional alignment through OKRs and weekly syncs',
      'Remove blockers and drive execution velocity across teams',
      'Manage company budget, cash flow reporting (with CFO), and vendor relationships',
      'Lead all non-technical hiring - operations, support, sales, marketing',
      'Handle key merchant and partner negotiations (with Head of Merchants)',
      'Build company culture on the ground - rituals, recognition, events',
      'Oversee legal, compliance, and regulatory matters (with Legal)',
      'Manage office/workspace, admin functions, and facilities',
      'Weekly ops review with all department heads',
      'Crisis response and operational escalations',
      'Quarterly planning and resource allocation'
    ],
    decisionAuthority: [
      'Operational processes and SOPs',
      'Non-technical hiring (up to AED 30K/month)',
      'Vendor contracts up to AED 100K',
      'Office and facilities decisions',
      'Cross-functional resource allocation',
      'Operational budget within approved limits',
      'Process changes and optimizations',
      'Escalation decisions (before CEO)',
      'Team rituals and culture initiatives',
      'Performance management (non-executive)'
    ],
    kpis: [
      { metric: 'Operational Efficiency', target: '<48hr to resolve any blocker', frequency: 'Weekly' },
      { metric: 'Hiring Velocity', target: 'All critical roles filled in 30 days', frequency: 'Monthly' },
      { metric: 'Team Retention', target: '<10% voluntary churn annually', frequency: 'Quarterly' },
      { metric: 'Budget Adherence', target: 'Within 5% of plan', frequency: 'Monthly' },
      { metric: 'Process Coverage', target: '100% core functions documented', frequency: 'Quarterly' },
      { metric: 'Team NPS', target: '>60', frequency: 'Quarterly' },
      { metric: 'OKR Achievement', target: '>80% company OKRs met', frequency: 'Quarterly' }
    ],
    requirements: {
      experience: [
        '7+ years in operations/GM leadership roles',
        'Experience scaling startups from 10 to 100+ people',
        'UAE/Dubai business network and market knowledge',
        'Experience with UAE labor law and regulations',
        'Track record of building operational excellence'
      ],
      skills: [
        'Process design and optimization',
        'Budget management and financial acumen',
        'Cross-functional leadership and alignment',
        'Vendor negotiation and management',
        'Crisis management and problem-solving',
        'Arabic fluency strongly preferred'
      ],
      traits: [
        'Hands-on operator - can work at any level',
        'Systems thinker who builds scalable processes',
        'Calm under pressure',
        'Detail-oriented yet strategic',
        'Strong EQ and people skills',
        'Relentlessly execution-focused'
      ]
    },
    directReports: ['Head of Operations', 'Head of Customer Support', 'Office Manager', 'Legal & Compliance Manager'],
    reportsTo: 'CEO',
    collaboratesWith: [
      { role: 'CEO', collaboration: 'Daily sync on priorities, blockers, and strategic decisions' },
      { role: 'CFO', collaboration: 'Weekly budget reviews, vendor payments, cash flow' },
      { role: 'CMO', collaboration: 'Campaign execution, event operations, vendor coordination' },
      { role: 'CHRO', collaboration: 'Hiring plans, onboarding, culture initiatives' },
      { role: 'CTO', collaboration: 'Technical operations, infrastructure, security' }
    ],
    weeklySchedule: [
      { day: 'Monday', activities: ['CEO sync (30m)', 'Department head 1:1s', 'Week planning'] },
      { day: 'Tuesday', activities: ['Cross-functional standup', 'Vendor meetings', 'Process reviews'] },
      { day: 'Wednesday', activities: ['Hiring interviews', 'Operations deep-dive', 'Team support'] },
      { day: 'Thursday', activities: ['Budget review with CFO', 'Partner meetings', 'Documentation'] },
      { day: 'Friday', activities: ['All-hands', 'Week retrospective', 'Next week prep'] }
    ],
    compensation: {
      salary: 'AED 35-50K/month',
      equity: '3-6%',
      bonus: 'Quarterly based on OKR achievement'
    },
    hiringPriority: 'critical',
    nuqtaContext: 'The COO is essential to scale Nuqta from founder-led operations to a professionally managed company. This role will free the CEO to focus on fundraising and strategy while ensuring flawless execution. Key focus areas include building the Dubai office, scaling the team, and establishing operational excellence before Series A.'
  },
  {
    title: 'Chief Marketing Officer',
    name: 'PRIORITY HIRE',
    status: 'hiring',
    icon: Megaphone,
    color: 'orange',
    tagline: 'Brand Builder & Growth Accelerator',
    primaryFocus: 'Brand strategy, user acquisition, and market positioning',
    description: 'The CMO owns Nuqta\'s brand, marketing strategy, and user acquisition. Responsible for building Nuqta into a household name in UAE, driving organic and paid user growth, and creating marketing that converts. Balances brand building with performance marketing for sustainable growth.',
    strategicPriorities: [
      {
        priority: 'Brand Launch',
        description: 'Execute launch campaign to establish Nuqta as the must-have savings app',
        timeline: 'Q1 2026'
      },
      {
        priority: 'User Acquisition Engine',
        description: 'Build scalable acquisition channels achieving CAC <AED 15',
        timeline: 'H1 2026'
      },
      {
        priority: 'Viral Marketing',
        description: 'Create referral and viral loops driving 30%+ of new users',
        timeline: 'Ongoing'
      },
      {
        priority: 'Media & PR',
        description: 'Establish Nuqta as thought leader in UAE fintech/savings space',
        timeline: 'Ongoing'
      },
      {
        priority: 'Marketing Team',
        description: 'Build high-performing marketing team of 8-10 people',
        timeline: 'H1 2026'
      }
    ],
    responsibilities: [
      'Define and execute comprehensive marketing strategy and annual plan',
      'Own brand positioning, messaging, and visual identity',
      'Lead user acquisition across organic, paid, and partnership channels',
      'Plan and manage marketing budget for maximum ROI',
      'Build and manage marketing team (content, creative, performance, PR)',
      'Design and optimize referral program and viral mechanics',
      'Lead PR and media relations - earned coverage and thought leadership',
      'Coordinate integrated marketing campaigns across all channels',
      'Partner with Growth on user acquisition and retention metrics',
      'Collaborate with Merchant team on co-marketing initiatives',
      'Track and report marketing ROI to executive team',
      'Stay ahead of marketing trends and competitive landscape'
    ],
    decisionAuthority: [
      'Marketing strategy and campaign direction',
      'Brand positioning and messaging',
      'Marketing budget allocation within approved limits',
      'Marketing team hiring and structure',
      'Agency and vendor selection',
      'Influencer and partnership deals (up to AED 50K)',
      'Creative direction and brand guidelines',
      'Channel mix and investment allocation',
      'Campaign launch decisions',
      'PR and media response strategy'
    ],
    kpis: [
      { metric: 'Brand Awareness', target: '30% aided recall in UAE target demo', frequency: 'Quarterly' },
      { metric: 'User Acquisition', target: '30%+ of MAU from marketing channels', frequency: 'Monthly' },
      { metric: 'Customer Acquisition Cost', target: '<AED 15 blended CAC', frequency: 'Weekly' },
      { metric: 'Social Following', target: '100K+ across platforms', frequency: 'Monthly' },
      { metric: 'Referral Rate', target: '25%+ users refer friends', frequency: 'Monthly' },
      { metric: 'Marketing ROI', target: '>4x ROAS on paid', frequency: 'Weekly' },
      { metric: 'PR Coverage', target: '10+ tier-1 media hits quarterly', frequency: 'Quarterly' }
    ],
    requirements: {
      experience: [
        '8+ years marketing experience with 3+ in leadership',
        'Consumer app or fintech marketing background',
        'UAE/GCC market experience (critical)',
        'Track record of scaling user bases 10x+',
        'Experience building marketing teams from scratch'
      ],
      skills: [
        'Brand strategy and positioning',
        'Performance marketing and CAC optimization',
        'Content and creative direction',
        'Analytics and data-driven decision making',
        'PR and media relations',
        'Arabic fluency a major plus'
      ],
      traits: [
        'Creative yet analytical',
        'Fast-moving and scrappy',
        'Strong storyteller',
        'Results-oriented with brand sensitivity',
        'Collaborative leader',
        'Trend-aware and culturally tuned in'
      ]
    },
    directReports: ['Head of Content', 'Head of Creative', 'Performance Marketing Manager', 'PR & Comms Manager', 'Social Media Manager'],
    reportsTo: 'CEO',
    collaboratesWith: [
      { role: 'CEO', collaboration: 'Brand strategy, major campaigns, investor communications' },
      { role: 'COO', collaboration: 'Campaign execution, budget management, vendor coordination' },
      { role: 'Head of Growth', collaboration: 'User acquisition strategy, referral optimization' },
      { role: 'Head of Merchants', collaboration: 'Merchant co-marketing, partnership campaigns' },
      { role: 'Product', collaboration: 'Product marketing, feature launches, in-app messaging' }
    ],
    weeklySchedule: [
      { day: 'Monday', activities: ['Marketing team standup', 'Campaign performance review', 'CEO sync'] },
      { day: 'Tuesday', activities: ['Content calendar review', 'Creative approvals', 'Agency calls'] },
      { day: 'Wednesday', activities: ['Media/PR outreach', 'Partnership meetings', 'Influencer reviews'] },
      { day: 'Thursday', activities: ['Budget review', 'A/B test analysis', 'Strategy work'] },
      { day: 'Friday', activities: ['Team 1:1s', 'Next week planning', 'Industry reading'] }
    ],
    compensation: {
      salary: 'AED 35-50K/month',
      equity: '2-4%',
      bonus: 'Quarterly based on user acquisition and brand metrics'
    },
    hiringPriority: 'high',
    nuqtaContext: 'Marketing is critical for Nuqta\'s launch success. The CMO will own the launch campaign, establish brand presence, and build user acquisition channels before organic growth kicks in. Understanding UAE\'s multicultural market and creating content that resonates with young professionals and families is key.'
  },
  {
    title: 'Chief Human Resources Officer',
    name: 'PLANNED HIRE',
    status: 'planned',
    icon: Heart,
    color: 'pink',
    tagline: 'Culture Architect & Talent Magnet',
    primaryFocus: 'Talent acquisition, culture, and organizational development',
    description: 'The CHRO owns Nuqta\'s most important asset: its people. Responsible for building a world-class team, creating a magnetic culture, and developing organizational capabilities. Partners with all executives to ensure Nuqta attracts, develops, and retains top talent.',
    strategicPriorities: [
      {
        priority: 'Talent Acquisition',
        description: 'Build recruiting engine to scale team from 15 to 80+ people',
        timeline: '2026'
      },
      {
        priority: 'Culture Definition',
        description: 'Codify and operationalize Nuqta values and culture',
        timeline: 'Q1 2026'
      },
      {
        priority: 'Performance Management',
        description: 'Implement performance review and career development framework',
        timeline: 'Q2 2026'
      },
      {
        priority: 'Compensation & Benefits',
        description: 'Design competitive compensation philosophy and ESOP program',
        timeline: 'Q1 2026'
      },
      {
        priority: 'Learning & Development',
        description: 'Create development programs for high-potential employees',
        timeline: 'H2 2026'
      }
    ],
    responsibilities: [
      'Define and execute talent acquisition strategy across all functions',
      'Build and lead recruiting function (internal + agencies)',
      'Own company culture - define values, rituals, and practices',
      'Design and implement performance management system',
      'Create compensation philosophy and salary bands',
      'Administer ESOP program and equity grants',
      'Develop employee onboarding and offboarding programs',
      'Lead organizational development and change management',
      'Handle employee relations, conflicts, and sensitive matters',
      'Ensure compliance with UAE labor law',
      'Drive diversity, equity, and inclusion initiatives',
      'Manage HR operations - payroll, benefits, HRIS'
    ],
    decisionAuthority: [
      'Hiring processes and recruiting strategy',
      'Compensation bands and salary offers (within ranges)',
      'Benefits and perks programs',
      'Performance management framework',
      'Culture initiatives and employee experience',
      'HR policies and employee handbook',
      'Training and development programs',
      'Employee relations matters (non-executive)',
      'HR technology and tools',
      'Diversity and inclusion initiatives'
    ],
    kpis: [
      { metric: 'Time to Hire', target: '<30 days for critical roles', frequency: 'Monthly' },
      { metric: 'Quality of Hire', target: '>80% meet/exceed expectations at 6 months', frequency: 'Quarterly' },
      { metric: 'Retention', target: '<15% voluntary turnover', frequency: 'Quarterly' },
      { metric: 'Employee NPS', target: '>50 eNPS', frequency: 'Quarterly' },
      { metric: 'Diversity', target: '40%+ gender diversity', frequency: 'Quarterly' },
      { metric: 'Onboarding NPS', target: '>70', frequency: 'Monthly' },
      { metric: 'L&D Hours', target: '20+ hours/employee/year', frequency: 'Annually' }
    ],
    requirements: {
      experience: [
        '8+ years HR experience with 3+ in leadership',
        'Experience scaling teams from 20 to 200+ in high-growth startups',
        'UAE labor law and visa regulations expertise',
        'ESOP administration experience',
        'Multi-cultural team experience (critical for UAE)'
      ],
      skills: [
        'Talent acquisition and employer branding',
        'Organizational development',
        'Performance management design',
        'Compensation and benefits strategy',
        'Employee relations and conflict resolution',
        'Arabic fluency preferred'
      ],
      traits: [
        'People-first mindset',
        'Culture champion',
        'Trusted advisor to executives',
        'Empathetic yet decisive',
        'Process-oriented with human touch',
        'Strong communicator'
      ]
    },
    directReports: ['Talent Acquisition Manager', 'HR Business Partner', 'L&D Manager', 'HR Operations'],
    reportsTo: 'CEO',
    collaboratesWith: [
      { role: 'CEO', collaboration: 'Culture strategy, executive hiring, organizational design' },
      { role: 'COO', collaboration: 'Hiring plans, onboarding, office culture' },
      { role: 'CFO', collaboration: 'Compensation planning, headcount budgeting, ESOP' },
      { role: 'All Department Heads', collaboration: 'Recruiting, performance management, team development' }
    ],
    weeklySchedule: [
      { day: 'Monday', activities: ['Recruiting pipeline review', 'CEO sync', 'Hiring manager meetings'] },
      { day: 'Tuesday', activities: ['Candidate interviews (executive roles)', 'ER matters', 'L&D planning'] },
      { day: 'Wednesday', activities: ['Culture initiatives', 'New hire check-ins', 'Policy work'] },
      { day: 'Thursday', activities: ['Compensation reviews', 'Performance discussions', 'ESOP admin'] },
      { day: 'Friday', activities: ['All-hands support', 'Week wrap-up', 'Team events'] }
    ],
    compensation: {
      salary: 'AED 30-45K/month',
      equity: '1.5-3%',
      bonus: 'Quarterly based on hiring, retention, and culture metrics'
    },
    hiringPriority: 'medium',
    nuqtaContext: 'As Nuqta scales rapidly, the CHRO ensures we build not just a company but a team people love being part of. Critical for establishing culture before it forms organically, building the recruiting engine for rapid scaling, and ensuring compliance with UAE labor regulations. This role becomes critical as we approach 30+ team members.'
  },
  {
    title: 'Chief Financial Officer',
    name: 'PLANNED HIRE',
    status: 'planned',
    icon: Calculator,
    color: 'green',
    tagline: 'Financial Strategist & Governance Guardian',
    primaryFocus: 'Financial strategy, fundraising support, and fiscal governance',
    description: 'The CFO owns Nuqta\'s financial health and strategy. Responsible for financial planning, investor relations support, cash management, and building the finance function. Partners with CEO on fundraising and ensures Nuqta has the financial infrastructure to scale.',
    strategicPriorities: [
      {
        priority: 'Fundraising Support',
        description: 'Build financial models and data room for Series A fundraising',
        timeline: 'Q1-Q2 2026'
      },
      {
        priority: 'Financial Infrastructure',
        description: 'Implement accounting, billing, and financial systems',
        timeline: 'Q1 2026'
      },
      {
        priority: 'Unit Economics',
        description: 'Build robust tracking for CAC, LTV, and margin metrics',
        timeline: 'Q1 2026'
      },
      {
        priority: 'Cash Management',
        description: 'Optimize cash flow and maintain 18+ months runway',
        timeline: 'Ongoing'
      },
      {
        priority: 'Governance & Compliance',
        description: 'Establish financial controls and audit readiness',
        timeline: 'H1 2026'
      }
    ],
    responsibilities: [
      'Own financial planning, budgeting, and forecasting',
      'Build and maintain financial models for fundraising',
      'Support CEO in investor relations and due diligence',
      'Manage cash flow, treasury, and banking relationships',
      'Lead accounting, bookkeeping, and financial reporting',
      'Track and report unit economics (CAC, LTV, margins)',
      'Ensure financial compliance and audit readiness',
      'Build financial controls and approval processes',
      'Manage relationships with auditors, tax advisors, and banks',
      'Oversee accounts payable, receivable, and collections',
      'Lead procurement and vendor financial negotiations',
      'Strategic financial analysis for major decisions'
    ],
    decisionAuthority: [
      'Financial policies and controls',
      'Budget allocation within approved annual plan',
      'Vendor payments and cash disbursements',
      'Banking and treasury decisions',
      'Financial tool and system selection',
      'Accounting policies and practices',
      'Audit and tax strategy',
      'Procurement approvals (within limits)',
      'Financial risk management',
      'Investor reporting and data room'
    ],
    kpis: [
      { metric: 'Cash Runway', target: '18+ months always', frequency: 'Weekly' },
      { metric: 'Budget Variance', target: '<5% from plan', frequency: 'Monthly' },
      { metric: 'Financial Close', target: '<5 business days monthly close', frequency: 'Monthly' },
      { metric: 'Fundraising Support', target: 'Data room ready in <2 weeks', frequency: 'As needed' },
      { metric: 'Unit Economics', target: 'LTV:CAC >10x', frequency: 'Monthly' },
      { metric: 'Collections', target: '<30 day average AR', frequency: 'Monthly' },
      { metric: 'Audit Readiness', target: 'Clean audit with no material findings', frequency: 'Annually' }
    ],
    requirements: {
      experience: [
        '10+ years finance experience with 3+ as CFO/VP Finance',
        'Startup experience through multiple fundraising rounds',
        'UAE/GCC financial regulations and compliance',
        'Experience scaling finance function from startup to 100+ people',
        'M&A and due diligence experience preferred'
      ],
      skills: [
        'Financial modeling and analysis',
        'Fundraising and investor relations',
        'Cash management and treasury',
        'Accounting and financial reporting (IFRS)',
        'Strategic planning and forecasting',
        'Financial systems implementation'
      ],
      traits: [
        'Strategic thinker with operational detail',
        'Excellent communicator with non-finance stakeholders',
        'Strong ethical standards',
        'Calm under pressure',
        'Business partner mindset',
        'Process-oriented and systematic'
      ]
    },
    directReports: ['Finance Manager', 'Accountant', 'Financial Analyst', 'Billing & Collections'],
    reportsTo: 'CEO',
    collaboratesWith: [
      { role: 'CEO', collaboration: 'Fundraising, investor relations, strategic planning' },
      { role: 'COO', collaboration: 'Budget management, vendor negotiations, operational efficiency' },
      { role: 'CHRO', collaboration: 'Headcount budgeting, compensation planning, ESOP' },
      { role: 'All Department Heads', collaboration: 'Departmental budgets, financial planning' },
      { role: 'Legal', collaboration: 'Contract review, compliance, corporate governance' }
    ],
    weeklySchedule: [
      { day: 'Monday', activities: ['Cash position review', 'CEO sync', 'Week financial priorities'] },
      { day: 'Tuesday', activities: ['Investor materials', 'Financial modeling', 'Bank meetings'] },
      { day: 'Wednesday', activities: ['Budget reviews with departments', 'Vendor negotiations', 'Audit work'] },
      { day: 'Thursday', activities: ['Unit economics analysis', 'Board prep', 'Strategic analysis'] },
      { day: 'Friday', activities: ['Financial close activities', 'Team 1:1s', 'Process improvements'] }
    ],
    compensation: {
      salary: 'AED 35-50K/month',
      equity: '1.5-3%',
      bonus: 'Quarterly based on financial performance and fundraising milestones'
    },
    hiringPriority: 'medium',
    nuqtaContext: 'The CFO is critical for Nuqta\'s Series A fundraising and establishing financial credibility with investors. This role ensures we have the financial infrastructure to scale, maintains runway discipline, and provides the data and models needed to raise capital. Initially, a strong Finance Manager may suffice, with full CFO hire as we approach Series A.'
  }
];

// Color mappings for Tailwind
const colorClasses: Record<string, { bg: string; border: string; text: string; light: string }> = {
  amber: { bg: 'bg-amber-500', border: 'border-amber-500', text: 'text-amber-500', light: 'bg-amber-500/10' },
  blue: { bg: 'bg-blue-500', border: 'border-blue-500', text: 'text-blue-500', light: 'bg-blue-500/10' },
  orange: { bg: 'bg-orange-500', border: 'border-orange-500', text: 'text-orange-500', light: 'bg-orange-500/10' },
  pink: { bg: 'bg-pink-500', border: 'border-pink-500', text: 'text-pink-500', light: 'bg-pink-500/10' },
  green: { bg: 'bg-green-500', border: 'border-green-500', text: 'text-green-500', light: 'bg-green-500/10' },
};

const ExecutiveTeam = () => {
  const [selectedRole, setSelectedRole] = useState<ExecutiveRole | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'structure', label: 'Org Structure', icon: Network },
    { id: 'dynamics', label: 'Team Dynamics', icon: Users },
    { id: 'hiring', label: 'Hiring Plan', icon: UserCheck },
    { id: 'analysis', label: 'Strategic Analysis', icon: Brain },
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Executive Summary */}
      <div className="bg-gradient-to-r from-[#0a1628] to-[#1a2d4a] rounded-2xl p-8 border border-[#c9a227]/20">
        <div className="flex items-center gap-3 mb-6">
          <Crown className="w-8 h-8 text-[#c9a227]" />
          <h2 className="text-2xl font-bold text-white">Executive Leadership Team</h2>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Nuqta's C-suite is designed to balance vision with execution, growth with governance, and speed with sustainability.
          The team structure reflects a modern startup approach: lean at the top, with clear ownership and accountability.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {executiveTeam.map((exec) => {
            const colors = colorClasses[exec.color];
            return (
              <div
                key={exec.title}
                onClick={() => setSelectedRole(exec)}
                className={`p-4 rounded-xl border cursor-pointer transition-all hover:scale-105 ${
                  exec.status === 'filled' ? 'bg-green-500/10 border-green-500/30' :
                  exec.status === 'hiring' ? 'bg-[#c9a227]/10 border-[#c9a227]/30' :
                  'bg-gray-500/10 border-gray-500/30'
                }`}
              >
                <exec.icon className={`w-8 h-8 ${colors.text} mb-2`} />
                <p className="text-white font-semibold text-sm">{exec.title.split(' ').slice(-1)[0]}</p>
                <p className={`text-xs mt-1 ${
                  exec.status === 'filled' ? 'text-green-400' :
                  exec.status === 'hiring' ? 'text-[#c9a227]' :
                  'text-gray-400'
                }`}>
                  {exec.status === 'filled' ? 'Filled' : exec.status === 'hiring' ? 'Hiring Now' : 'Planned'}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Role Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {executiveTeam.map((exec) => {
          const colors = colorClasses[exec.color];
          return (
            <div
              key={exec.title}
              onClick={() => setSelectedRole(exec)}
              className="bg-[#0a1628] rounded-xl border border-gray-800 p-6 hover:border-[#c9a227]/50 transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${colors.light}`}>
                  <exec.icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  exec.status === 'filled' ? 'bg-green-500/20 text-green-400' :
                  exec.status === 'hiring' ? 'bg-[#c9a227]/20 text-[#c9a227]' :
                  'bg-gray-500/20 text-gray-400'
                }`}>
                  {exec.status === 'filled' ? 'Filled' : exec.status === 'hiring' ? 'Hiring Now' : 'Planned'}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">{exec.title}</h3>
              <p className={`text-sm ${colors.text} mb-3`}>{exec.tagline}</p>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{exec.primaryFocus}</p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                <div>
                  <p className="text-xs text-gray-500">Name</p>
                  <p className="text-white font-medium">{exec.name}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-[#c9a227] transition-colors" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Key Metrics */}
      <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-[#c9a227]" />
          Executive Team Metrics
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-4xl font-bold text-green-400">1</p>
            <p className="text-gray-400 text-sm">Roles Filled</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-[#c9a227]">2</p>
            <p className="text-gray-400 text-sm">Actively Hiring</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-400">2</p>
            <p className="text-gray-400 text-sm">Planned Hires</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-white">5</p>
            <p className="text-gray-400 text-sm">Total C-Suite</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderOrgStructure = () => (
    <div className="space-y-8">
      {/* Org Chart Visual */}
      <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-8">
        <h3 className="text-xl font-bold text-white mb-8 text-center">Executive Organizational Structure</h3>

        {/* CEO at top */}
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-r from-[#c9a227] to-[#e8c547] text-[#0a1628] px-6 py-4 rounded-xl font-bold text-center">
            <Crown className="w-6 h-6 mx-auto mb-2" />
            <p className="font-bold">CEO</p>
            <p className="text-sm opacity-80">Rejaul Karim</p>
          </div>
        </div>

        {/* Connecting line */}
        <div className="flex justify-center mb-4">
          <div className="w-0.5 h-8 bg-gray-700"></div>
        </div>

        {/* Horizontal connector */}
        <div className="flex justify-center mb-4">
          <div className="w-3/4 h-0.5 bg-gray-700"></div>
        </div>

        {/* C-Suite Row */}
        <div className="grid grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { title: 'COO', icon: Settings, color: 'blue', status: 'hiring' },
            { title: 'CMO', icon: Megaphone, color: 'orange', status: 'hiring' },
            { title: 'CHRO', icon: Heart, color: 'pink', status: 'planned' },
            { title: 'CFO', icon: Calculator, color: 'green', status: 'planned' },
          ].map((role) => {
            const colors = colorClasses[role.color];
            return (
              <div key={role.title} className="text-center">
                <div className="w-0.5 h-4 bg-gray-700 mx-auto mb-2"></div>
                <div className={`p-4 rounded-xl border ${
                  role.status === 'hiring' ? 'border-[#c9a227]/50 bg-[#c9a227]/5' : 'border-gray-700 bg-gray-800/30'
                }`}>
                  <role.icon className={`w-6 h-6 mx-auto mb-2 ${colors.text}`} />
                  <p className="text-white font-bold">{role.title}</p>
                  <p className={`text-xs mt-1 ${
                    role.status === 'hiring' ? 'text-[#c9a227]' : 'text-gray-500'
                  }`}>
                    {role.status === 'hiring' ? 'Hiring' : 'Planned'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reporting Structure */}
      <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
        <h3 className="text-xl font-bold text-white mb-6">Reporting Structure</h3>
        <div className="space-y-4">
          {executiveTeam.map((exec) => {
            const colors = colorClasses[exec.color];
            return (
              <div key={exec.title} className="flex items-center gap-4 p-4 rounded-lg bg-gray-800/30">
                <exec.icon className={`w-6 h-6 ${colors.text}`} />
                <div className="flex-1">
                  <p className="text-white font-medium">{exec.title}</p>
                  <p className="text-gray-500 text-sm">Reports to: {exec.reportsTo}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-sm">Direct Reports:</p>
                  <p className="text-[#c9a227] text-sm">{exec.directReports.length} roles</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Direct Reports Detail */}
      <div className="grid md:grid-cols-2 gap-6">
        {executiveTeam.map((exec) => {
          const colors = colorClasses[exec.color];
          return (
            <div key={exec.title} className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
              <div className="flex items-center gap-3 mb-4">
                <exec.icon className={`w-5 h-5 ${colors.text}`} />
                <h4 className="text-lg font-bold text-white">{exec.title} Direct Reports</h4>
              </div>
              <ul className="space-y-2">
                {exec.directReports.map((report, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                    <ChevronRight className="w-4 h-4 text-gray-600" />
                    {report}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderTeamDynamics = () => (
    <div className="space-y-8">
      {/* Collaboration Matrix */}
      <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Network className="w-5 h-5 text-[#c9a227]" />
          Executive Collaboration Matrix
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left p-3 text-gray-400">Role</th>
                <th className="text-left p-3 text-gray-400">Primary Collaborations</th>
              </tr>
            </thead>
            <tbody>
              {executiveTeam.map((exec) => {
                const colors = colorClasses[exec.color];
                return (
                  <tr key={exec.title} className="border-b border-gray-800">
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <exec.icon className={`w-4 h-4 ${colors.text}`} />
                        <span className="text-white font-medium">{exec.title.split(' ').slice(-1)[0]}</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex flex-wrap gap-2">
                        {exec.collaboratesWith.slice(0, 3).map((collab, idx) => (
                          <span key={idx} className="px-2 py-1 rounded bg-gray-800 text-gray-300 text-xs">
                            {collab.role}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Meeting Cadence */}
      <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Clock className="w-5 h-5 text-[#c9a227]" />
          Executive Meeting Cadence
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-gradient-to-r from-[#c9a227]/10 to-transparent border border-[#c9a227]/20">
              <p className="text-[#c9a227] font-bold mb-2">Daily</p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• CEO/COO Sync (30 min)</li>
                <li>• Department standups</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20">
              <p className="text-blue-400 font-bold mb-2">Weekly</p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Executive Team Meeting (2 hrs)</li>
                <li>• All-Hands (30 min)</li>
                <li>• CEO 1:1s with C-Suite</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20">
              <p className="text-green-400 font-bold mb-2">Monthly</p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Board Update Prep</li>
                <li>• Financial Review</li>
                <li>• Strategic Planning</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20">
              <p className="text-purple-400 font-bold mb-2">Quarterly</p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Board Meeting</li>
                <li>• OKR Review & Planning</li>
                <li>• Strategy Offsite</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Decision Framework */}
      <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Scale className="w-5 h-5 text-[#c9a227]" />
          Decision-Making Framework
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/5">
            <p className="text-green-400 font-bold mb-3">CEO Decisions</p>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Company strategy & pivots</li>
              <li>• Fundraising & investors</li>
              <li>• Executive hiring</li>
              <li>• Major partnerships (&gt;AED 500K)</li>
              <li>• Board matters</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border border-blue-500/30 bg-blue-500/5">
            <p className="text-blue-400 font-bold mb-3">COO Decisions</p>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Operational processes</li>
              <li>• Non-exec hiring (up to AED 30K)</li>
              <li>• Vendor contracts (up to AED 100K)</li>
              <li>• Cross-functional resources</li>
              <li>• Office & facilities</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border border-[#c9a227]/30 bg-[#c9a227]/5">
            <p className="text-[#c9a227] font-bold mb-3">Department Head Decisions</p>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Team-level tactics</li>
              <li>• Budget within allocation</li>
              <li>• Hiring within headcount</li>
              <li>• Tools & processes</li>
              <li>• Day-to-day operations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderHiringPlan = () => (
    <div className="space-y-8">
      {/* Hiring Priority */}
      <div className="bg-gradient-to-r from-[#0a1628] to-[#1a2d4a] rounded-2xl p-8 border border-[#c9a227]/20">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Rocket className="w-5 h-5 text-[#c9a227]" />
          Executive Hiring Priority
        </h3>
        <div className="space-y-4">
          {executiveTeam
            .filter(e => e.status !== 'filled')
            .sort((a, b) => {
              const priority = { critical: 0, high: 1, medium: 2 };
              return priority[a.hiringPriority] - priority[b.hiringPriority];
            })
            .map((exec, idx) => {
              const colors = colorClasses[exec.color];
              return (
                <div key={exec.title} className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/30">
                  <div className="w-10 h-10 rounded-full bg-[#c9a227]/20 flex items-center justify-center text-[#c9a227] font-bold">
                    #{idx + 1}
                  </div>
                  <exec.icon className={`w-6 h-6 ${colors.text}`} />
                  <div className="flex-1">
                    <p className="text-white font-bold">{exec.title}</p>
                    <p className="text-gray-400 text-sm">{exec.tagline}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    exec.hiringPriority === 'critical' ? 'bg-red-500/20 text-red-400' :
                    exec.hiringPriority === 'high' ? 'bg-[#c9a227]/20 text-[#c9a227]' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {exec.hiringPriority.charAt(0).toUpperCase() + exec.hiringPriority.slice(1)}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    exec.status === 'hiring' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {exec.status === 'hiring' ? 'Hiring Now' : 'Planned'}
                  </span>
                </div>
              );
            })}
        </div>
      </div>

      {/* Compensation Overview */}
      <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Wallet className="w-5 h-5 text-[#c9a227]" />
          Executive Compensation Overview
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left p-3 text-gray-400">Role</th>
                <th className="text-left p-3 text-gray-400">Base Salary</th>
                <th className="text-left p-3 text-gray-400">Equity</th>
                <th className="text-left p-3 text-gray-400">Bonus</th>
              </tr>
            </thead>
            <tbody>
              {executiveTeam.map((exec) => {
                const colors = colorClasses[exec.color];
                return (
                  <tr key={exec.title} className="border-b border-gray-800">
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <exec.icon className={`w-4 h-4 ${colors.text}`} />
                        <span className="text-white font-medium">{exec.title.split(' ').slice(-1)[0]}</span>
                      </div>
                    </td>
                    <td className="p-3 text-gray-300">{exec.compensation.salary}</td>
                    <td className="p-3 text-[#c9a227]">{exec.compensation.equity}</td>
                    <td className="p-3 text-gray-300">{exec.compensation.bonus}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Hiring Timeline */}
      <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Clock className="w-5 h-5 text-[#c9a227]" />
          Hiring Timeline
        </h3>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700"></div>
          <div className="space-y-6">
            {[
              { quarter: 'Q1 2026', roles: ['COO', 'CMO'], status: 'In Progress' },
              { quarter: 'Q2 2026', roles: ['CHRO', 'CFO'], status: 'Planned' },
              { quarter: 'Q3 2026', roles: ['CTO (Co-Founder)'], status: 'Critical' },
            ].map((phase, idx) => (
              <div key={phase.quarter} className="flex items-start gap-6 relative">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-sm font-bold z-10 ${
                  idx === 0 ? 'bg-[#c9a227] text-[#0a1628]' : 'bg-gray-800 text-gray-400'
                }`}>
                  {phase.quarter}
                </div>
                <div className="flex-1 pt-2">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {phase.roles.map((role) => (
                      <span key={role} className="px-3 py-1 rounded-full bg-gray-800 text-white text-sm">
                        {role}
                      </span>
                    ))}
                  </div>
                  <p className={`text-sm ${
                    phase.status === 'In Progress' ? 'text-green-400' :
                    phase.status === 'Critical' ? 'text-red-400' :
                    'text-gray-400'
                  }`}>{phase.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderStrategicAnalysis = () => (
    <div className="space-y-8">
      {/* Strategic Priorities by Role */}
      <div className="bg-gradient-to-r from-[#0a1628] to-[#1a2d4a] rounded-2xl p-8 border border-[#c9a227]/20">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Target className="w-5 h-5 text-[#c9a227]" />
          2026 Strategic Priorities by Executive
        </h3>
        <div className="space-y-6">
          {executiveTeam.map((exec) => {
            const colors = colorClasses[exec.color];
            return (
              <div key={exec.title} className="border-b border-gray-700 pb-6 last:border-0">
                <div className="flex items-center gap-3 mb-4">
                  <exec.icon className={`w-6 h-6 ${colors.text}`} />
                  <h4 className="text-lg font-bold text-white">{exec.title}</h4>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {exec.strategicPriorities.slice(0, 3).map((priority, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-gray-800/30">
                      <p className="text-white font-medium text-sm">{priority.priority}</p>
                      <p className="text-[#c9a227] text-xs mt-1">{priority.timeline}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Critical Success Factors */}
      <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-[#c9a227]" />
          Critical Success Factors
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
            <p className="text-green-400 font-bold mb-3">Strengths</p>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Founder-led with deep market insight</li>
              <li>• Lean structure enables fast decisions</li>
              <li>• Clear ownership and accountability</li>
              <li>• Competitive compensation + equity</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-[#c9a227]/10 border border-[#c9a227]/30">
            <p className="text-[#c9a227] font-bold mb-3">Opportunities</p>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Build world-class team from scratch</li>
              <li>• Shape culture early</li>
              <li>• Attract talent with equity upside</li>
              <li>• Create best-in-class processes</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30">
            <p className="text-red-400 font-bold mb-3">Risks</p>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Key person dependency on CEO</li>
              <li>• Hiring timeline pressure</li>
              <li>• Cash constraints on compensation</li>
              <li>• UAE talent market competition</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30">
            <p className="text-blue-400 font-bold mb-3">Mitigations</p>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Prioritize COO hire to distribute load</li>
              <li>• Use recruiters for critical roles</li>
              <li>• Offer competitive equity packages</li>
              <li>• Build strong employer brand</li>
            </ul>
          </div>
        </div>
      </div>

      {/* KPI Dashboard Summary */}
      <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <LineChart className="w-5 h-5 text-[#c9a227]" />
          Executive KPI Dashboard
        </h3>
        <div className="space-y-4">
          {executiveTeam.map((exec) => {
            const colors = colorClasses[exec.color];
            return (
              <div key={exec.title} className="p-4 rounded-lg bg-gray-800/30">
                <div className="flex items-center gap-3 mb-3">
                  <exec.icon className={`w-5 h-5 ${colors.text}`} />
                  <p className="text-white font-bold">{exec.title.split(' ').slice(-1)[0]} KPIs</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {exec.kpis.slice(0, 4).map((kpi, idx) => (
                    <div key={idx} className="p-2 rounded bg-gray-900/50">
                      <p className="text-gray-400 text-xs">{kpi.metric}</p>
                      <p className="text-white text-sm font-medium">{kpi.target}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Nuqta Context Summary */}
      <div className="bg-gradient-to-r from-[#c9a227]/10 to-transparent rounded-xl border border-[#c9a227]/30 p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#c9a227]" />
          Why This Structure for Nuqta
        </h3>
        <div className="text-gray-300 space-y-4">
          <p>
            This executive team structure is designed specifically for Nuqta's stage and goals:
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
              <span><strong className="text-white">CEO + COO combo</strong> - Allows founder to focus on vision and fundraising while COO drives execution</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
              <span><strong className="text-white">CMO priority</strong> - Launch marketing is critical for user acquisition; this can't wait</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
              <span><strong className="text-white">CHRO + CFO phased</strong> - These roles become critical at 30+ team size; hire as we scale</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
              <span><strong className="text-white">CTO as co-founder</strong> - Tech leadership needs skin in the game; seeking technical co-founder</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderRoleDetail = (role: ExecutiveRole) => {
    const colors = colorClasses[role.color];
    return (
      <div className="space-y-6">
        {/* Back button */}
        <button
          onClick={() => setSelectedRole(null)}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ChevronRight className="w-4 h-4 rotate-180" />
          Back to Overview
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-[#0a1628] to-[#1a2d4a] rounded-2xl p-8 border border-[#c9a227]/20">
          <div className="flex items-start gap-6">
            <div className={`p-4 rounded-xl ${colors.light}`}>
              <role.icon className={`w-10 h-10 ${colors.text}`} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold text-white">{role.title}</h2>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  role.status === 'filled' ? 'bg-green-500/20 text-green-400' :
                  role.status === 'hiring' ? 'bg-[#c9a227]/20 text-[#c9a227]' :
                  'bg-gray-500/20 text-gray-400'
                }`}>
                  {role.status === 'filled' ? 'Filled' : role.status === 'hiring' ? 'Hiring Now' : 'Planned'}
                </span>
              </div>
              <p className={`text-lg ${colors.text} mb-2`}>{role.tagline}</p>
              <p className="text-gray-400">{role.name}</p>
            </div>
          </div>
          <p className="text-gray-300 mt-6 leading-relaxed">{role.description}</p>
        </div>

        {/* Nuqta Context */}
        <div className="bg-gradient-to-r from-[#c9a227]/10 to-transparent rounded-xl border border-[#c9a227]/30 p-6">
          <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#c9a227]" />
            Nuqta Context
          </h3>
          <p className="text-gray-300">{role.nuqtaContext}</p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Strategic Priorities */}
          <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-[#c9a227]" />
              Strategic Priorities
            </h3>
            <div className="space-y-3">
              {role.strategicPriorities.map((priority, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-gray-800/30">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-white font-medium">{priority.priority}</p>
                    <span className="text-[#c9a227] text-xs">{priority.timeline}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{priority.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* KPIs */}
          <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-[#c9a227]" />
              Key Performance Indicators
            </h3>
            <div className="space-y-3">
              {role.kpis.map((kpi, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-gray-800/30">
                  <div>
                    <p className="text-white font-medium">{kpi.metric}</p>
                    <p className="text-gray-500 text-xs">{kpi.frequency}</p>
                  </div>
                  <span className="text-[#c9a227] font-medium">{kpi.target}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-[#c9a227]" />
            Key Responsibilities
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {role.responsibilities.map((resp, idx) => (
              <div key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                <span>{resp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Decision Authority */}
        <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-[#c9a227]" />
            Decision Authority
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {role.decisionAuthority.map((decision, idx) => (
              <div key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                <Zap className="w-4 h-4 text-[#c9a227] mt-0.5 shrink-0" />
                <span>{decision}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#c9a227]" />
              Experience
            </h3>
            <ul className="space-y-2">
              {role.requirements.experience.map((exp, idx) => (
                <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-gray-600 mt-0.5 shrink-0" />
                  {exp}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-[#c9a227]" />
              Skills
            </h3>
            <ul className="space-y-2">
              {role.requirements.skills.map((skill, idx) => (
                <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-gray-600 mt-0.5 shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#c9a227]" />
              Traits
            </h3>
            <ul className="space-y-2">
              {role.requirements.traits.map((trait, idx) => (
                <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-gray-600 mt-0.5 shrink-0" />
                  {trait}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Collaboration & Schedule */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Collaboration */}
          <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Handshake className="w-5 h-5 text-[#c9a227]" />
              Key Collaborations
            </h3>
            <div className="space-y-3">
              {role.collaboratesWith.map((collab, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-gray-800/30">
                  <p className="text-white font-medium">{collab.role}</p>
                  <p className="text-gray-400 text-sm">{collab.collaboration}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Schedule */}
          <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#c9a227]" />
              Typical Weekly Schedule
            </h3>
            <div className="space-y-3">
              {role.weeklySchedule.map((day, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-gray-800/30">
                  <p className="text-white font-medium">{day.day}</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {day.activities.map((activity, aidx) => (
                      <span key={aidx} className="text-gray-400 text-xs px-2 py-0.5 rounded bg-gray-900">
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compensation */}
        <div className="bg-gradient-to-r from-[#0a1628] to-[#1a2d4a] rounded-xl border border-gray-800 p-6">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Wallet className="w-5 h-5 text-[#c9a227]" />
            Compensation Package
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">Base Salary</p>
              <p className="text-white text-xl font-bold">{role.compensation.salary}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">Equity</p>
              <p className="text-[#c9a227] text-xl font-bold">{role.compensation.equity}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">Bonus Structure</p>
              <p className="text-white text-sm">{role.compensation.bonus}</p>
            </div>
          </div>
        </div>

        {/* Reporting Structure */}
        <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Network className="w-5 h-5 text-[#c9a227]" />
            Reporting Structure
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Reports To</p>
              <p className="text-white font-medium">{role.reportsTo}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Direct Reports ({role.directReports.length})</p>
              <div className="flex flex-wrap gap-2">
                {role.directReports.map((report, idx) => (
                  <span key={idx} className="px-2 py-1 rounded bg-gray-800 text-gray-300 text-sm">
                    {report}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1628] to-[#0d1e36] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#c9a227] to-[#e8c547] flex items-center justify-center">
              <Crown className="w-6 h-6 text-[#0a1628]" />
            </div>
            <h1 className="text-4xl font-bold text-white">Executive Leadership Team</h1>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Complete C-Suite analysis with responsibilities, KPIs, requirements, and strategic priorities
          </p>
        </div>

        {/* Show role detail if selected */}
        {selectedRole ? (
          renderRoleDetail(selectedRole)
        ) : (
          <>
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#c9a227] text-[#0a1628] font-bold'
                      : 'bg-gray-800 text-gray-400 hover:text-white'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'structure' && renderOrgStructure()}
            {activeTab === 'dynamics' && renderTeamDynamics()}
            {activeTab === 'hiring' && renderHiringPlan()}
            {activeTab === 'analysis' && renderStrategicAnalysis()}
          </>
        )}
      </div>
    </div>
  );
};

export default ExecutiveTeam;
