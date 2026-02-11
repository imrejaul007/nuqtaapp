'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft, Users, Crown, Building2, Briefcase, UserCheck,
  Star, Shield, Target, ChevronRight, Code, Palette, TrendingUp,
  Headphones, Scale, DollarSign, Globe, Megaphone, Settings,
  CheckCircle2, ArrowRight, Network, Layers, UserPlus, Truck,
  Wallet, Home, Plane, Car, Package, Store, Ticket, Cloud,
  Brain, Database, Server, Cpu, BarChart3, CreditCard, Factory,
  Boxes, Share2, Cog, HelpCircle, Phone, Mail, MessageSquare,
  Calculator, FileText, Lock, Eye, Zap, Rocket, ChevronDown, ChevronUp,
  GitBranch, Terminal, TestTube, Bug, Smartphone, Monitor, Wifi,
  AlertTriangle, Clock, Calendar, Flag, Award, Sparkles, Activity,
  RefreshCw, Search, Filter, Map, Bell, Send, Play, Pause, Circle,
  CheckCircle, XCircle, Timer, Hammer, Wrench, PieChart, LineChart
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// Rabtul Engineering Leadership - CTO-Led with Claude AI
const rabtulLeadership = [
  {
    role: 'CTO',
    name: 'TBD - Strategic Hire',
    responsibilities: ['Overall tech vision & architecture', 'Claude AI orchestration', 'Code review & quality', 'Tech culture & hiring'],
    experience: '15+ years, scaled systems to 10M+ users',
    compensation: 'AED 2-3M/yr + 5-8% equity',
    status: 'Critical Hire Y1',
    priority: 'P0',
    reportsTo: 'CEO',
    directReports: ['VP Engineering', 'VP Platform', 'VP Security', 'VP AI/ML'],
  },
  {
    role: 'CPO (Chief Product Officer)',
    name: 'TBD',
    responsibilities: ['Product strategy & roadmap', 'Feature prioritization', 'User research oversight', 'Claude AI product prompts'],
    experience: '12+ years product leadership',
    compensation: 'AED 1.5-2M/yr + 3-5% equity',
    status: 'Critical Hire Y1',
    priority: 'P0',
    reportsTo: 'CEO',
    directReports: ['Product Managers', 'Head of Design', 'UX Research'],
  },
  {
    role: 'VP Engineering',
    name: 'TBD',
    responsibilities: ['Engineering execution', 'Sprint planning & delivery', 'Team management', 'Claude AI code supervision'],
    experience: '12+ years, managed 50+ engineers',
    compensation: 'AED 1.2-1.8M/yr + 2-3% equity',
    status: 'To Hire Y1',
    priority: 'P0',
    reportsTo: 'CTO',
    directReports: ['Engineering Managers', 'Tech Leads'],
  },
  {
    role: 'VP Platform',
    name: 'TBD',
    responsibilities: ['Core infrastructure', 'API gateway & microservices', 'DevOps/SRE', 'Claude AI infrastructure prompts'],
    experience: '10+ years platform engineering',
    compensation: 'AED 1-1.5M/yr + 1-2% equity',
    status: 'To Hire Y1',
    priority: 'P0',
    reportsTo: 'CTO',
    directReports: ['Platform Engineers', 'SREs'],
  },
  {
    role: 'VP AI/ML',
    name: 'TBD',
    responsibilities: ['ML models & Claude AI integration', 'Data science', 'AI strategy', 'Model ops'],
    experience: '10+ years ML at scale',
    compensation: 'AED 1-1.5M/yr + 1-2% equity',
    status: 'To Hire Y1',
    priority: 'P0',
    reportsTo: 'CTO',
    directReports: ['ML Engineers', 'Data Scientists'],
  },
  {
    role: 'VP Security',
    name: 'TBD',
    responsibilities: ['Security architecture', 'Compliance (PCI-DSS, GDPR)', 'Claude AI security review', 'SOC operations'],
    experience: '10+ years security, fintech preferred',
    compensation: 'AED 1-1.5M/yr + 1-2% equity',
    status: 'To Hire Y1',
    priority: 'P0',
    reportsTo: 'CTO',
    directReports: ['Security Engineers', 'SOC Analysts'],
  },
  {
    role: 'VP Data',
    name: 'TBD',
    responsibilities: ['Data platform', 'BI & analytics', 'Data governance', 'Real-time processing'],
    experience: '10+ years data engineering',
    compensation: 'AED 800K-1.2M/yr + 1% equity',
    status: 'To Hire Y1',
    priority: 'P1',
    reportsTo: 'CTO',
    directReports: ['Data Engineers', 'BI Developers'],
  },
  {
    role: 'Head of Product Design',
    name: 'TBD',
    responsibilities: ['Design systems', 'UX research', 'UI design', 'Brand consistency'],
    experience: '8+ years product design',
    compensation: 'AED 600K-900K/yr + 0.5% equity',
    status: 'To Hire Y1',
    priority: 'P1',
    reportsTo: 'CPO',
    directReports: ['UX Designers', 'UI Designers'],
  },
  {
    role: 'Head of QA',
    name: 'TBD',
    responsibilities: ['Test automation', 'Claude AI test generation', 'Performance testing', 'Mobile QA'],
    experience: '8+ years QA leadership',
    compensation: 'AED 500K-750K/yr + 0.5% equity',
    status: 'To Hire Y1',
    priority: 'P1',
    reportsTo: 'VP Engineering',
    directReports: ['QA Engineers', 'Performance Testers'],
  },
];

// Claude AI Development Workflow
const claudeAIWorkflow = {
  name: 'Claude AI-Powered Development',
  description: 'All engineers use Claude AI (Claude Code) to build, test, and deploy. Managers review and approve.',
  roles: [
    {
      title: 'CTO',
      claudeUsage: 'Architecture Design',
      responsibilities: [
        'Define system architecture via Claude',
        'Review Claude-generated code for quality',
        'Set coding standards and prompts',
        'Approve major technical decisions',
      ],
      dailyTasks: [
        'Review pull requests from Claude sessions',
        'Guide engineers on Claude best practices',
        'Architect new features with Claude',
      ],
    },
    {
      title: 'CPO',
      claudeUsage: 'Product Specs & PRDs',
      responsibilities: [
        'Write product requirements with Claude',
        'Generate user stories and acceptance criteria',
        'Create feature specifications',
        'Review product deliverables',
      ],
      dailyTasks: [
        'Generate PRDs for new features',
        'Review Claude-built UI/UX',
        'Prioritize backlog with Claude analysis',
      ],
    },
    {
      title: 'Engineering Manager',
      claudeUsage: 'Sprint Planning & Code Review',
      responsibilities: [
        'Break features into Claude-friendly tasks',
        'Assign tasks to engineers + Claude',
        'Review Claude-generated code quality',
        'Ensure sprint delivery',
      ],
      dailyTasks: [
        'Morning standup with Claude progress',
        'Review PRs from Claude sessions',
        'Unblock engineers with Claude guidance',
      ],
    },
    {
      title: 'Product Manager',
      claudeUsage: 'Feature Definition & Testing',
      responsibilities: [
        'Write detailed feature specs',
        'Define acceptance criteria for Claude',
        'Test Claude-built features',
        'Manage stakeholder communication',
      ],
      dailyTasks: [
        'Create Jira tickets with Claude specs',
        'UAT testing of Claude deliverables',
        'Communicate progress to stakeholders',
      ],
    },
    {
      title: 'Software Engineer',
      claudeUsage: 'Full Code Development',
      responsibilities: [
        'Build features entirely with Claude Code',
        'Write prompts for Claude to generate code',
        'Review and refine Claude output',
        'Test and debug with Claude assistance',
      ],
      dailyTasks: [
        'Open Claude Code, describe feature',
        'Iterate on Claude-generated code',
        'Run tests with Claude',
        'Push code for review',
      ],
    },
    {
      title: 'QA Engineer',
      claudeUsage: 'Test Case Generation',
      responsibilities: [
        'Generate test cases with Claude',
        'Write automation scripts with Claude',
        'Review test coverage',
        'Report bugs with Claude analysis',
      ],
      dailyTasks: [
        'Generate test cases for new features',
        'Run automated tests',
        'Document bugs with Claude help',
      ],
    },
  ],
  workflow: [
    { step: 1, title: 'CPO → PRD', description: 'CPO uses Claude to write detailed Product Requirement Document' },
    { step: 2, title: 'PM → Tasks', description: 'PM breaks PRD into tasks with Claude-friendly specifications' },
    { step: 3, title: 'Manager → Assign', description: 'Engineering Manager assigns tasks to engineers' },
    { step: 4, title: 'Engineer → Claude Code', description: 'Engineer opens Claude Code and builds feature' },
    { step: 5, title: 'Claude → Code', description: 'Claude generates code, tests, documentation' },
    { step: 6, title: 'Engineer → Review', description: 'Engineer reviews and refines Claude output' },
    { step: 7, title: 'Manager → PR Review', description: 'Manager reviews PR for quality and standards' },
    { step: 8, title: 'QA → Test', description: 'QA uses Claude to generate and run tests' },
    { step: 9, title: 'CTO → Approve', description: 'CTO approves major features and architecture' },
    { step: 10, title: 'Deploy', description: 'Automated CI/CD deploys to production' },
  ],
};

// Sprint Structure with Claude AI
const sprintStructure = [
  {
    sprint: 1,
    name: 'Foundation & BizOne Core',
    duration: '2 weeks',
    priority: '🥇 First Priority',
    claudeTasks: [
      { task: 'API Gateway Setup', assignee: 'Platform Squad', claudePrompt: 'Build NestJS API gateway with rate limiting, auth middleware, request validation', status: 'todo' },
      { task: 'Auth Service (SSO)', assignee: 'Platform Squad', claudePrompt: 'Create OAuth2/OIDC auth service with JWT, refresh tokens, session management', status: 'todo' },
      { task: 'BizOne POS Core', assignee: 'BizOne Squad', claudePrompt: 'Build React POS with cart, checkout, receipt printing using Electron', status: 'todo' },
      { task: 'Nuqta App Shell', assignee: 'Mobile Squad', claudePrompt: 'Create React Native app shell with navigation, theming, deep links', status: 'todo' },
      { task: 'Design System', assignee: 'Design Squad', claudePrompt: 'Build Figma components and React component library with Storybook', status: 'todo' },
      { task: 'Test Framework', assignee: 'QA Squad', claudePrompt: 'Setup Playwright, Jest, CI integration for all repos', status: 'todo' },
    ],
  },
  {
    sprint: 2,
    name: 'Wallet & Payments Core',
    duration: '2 weeks',
    priority: '🥇 First Priority',
    claudeTasks: [
      { task: 'User Service', assignee: 'Platform Squad', claudePrompt: 'Build user CRUD, profiles, preferences with PostgreSQL', status: 'todo' },
      { task: 'Wallet Core', assignee: 'Wallet Squad', claudePrompt: 'Create wallet with balance management, transactions, double-entry ledger', status: 'todo' },
      { task: 'Payment Gateway', assignee: 'Payments Squad', claudePrompt: 'Build PCI-compliant payment gateway with card tokenization, 3DS', status: 'todo' },
      { task: 'BizOne Inventory', assignee: 'BizOne Squad', claudePrompt: 'Add inventory management with stock tracking, variants, alerts', status: 'todo' },
      { task: 'Nuqta Auth Flows', assignee: 'Mobile Squad', claudePrompt: 'Implement login, signup, OTP verification, biometrics in app', status: 'todo' },
      { task: 'Nuqta Wallet UI', assignee: 'Mobile Squad', claudePrompt: 'Build wallet balance, transaction history, coins display UI', status: 'todo' },
    ],
  },
  {
    sprint: 3,
    name: 'BizOne Complete + Qist/Hawil Start',
    duration: '2 weeks',
    priority: '🥇🥈 First + Second Priority',
    claudeTasks: [
      { task: 'Coin Types Engine', assignee: 'Wallet Squad', claudePrompt: 'Create platform coins, branded coins, promo coins with rules engine', status: 'todo' },
      { task: 'BizOne CRM', assignee: 'BizOne Squad', claudePrompt: 'Build customer database, segments, purchase history tracking', status: 'todo' },
      { task: 'BizOne Reporting', assignee: 'BizOne Squad', claudePrompt: 'Create sales reports, inventory reports, daily summaries', status: 'todo' },
      { task: 'Qist Credit Scoring', assignee: 'Qist Squad', claudePrompt: 'Build ML credit scoring model with feature engineering, model training', status: 'todo' },
      { task: 'Hawil FX Engine', assignee: 'Hawil Squad', claudePrompt: 'Create real-time FX engine matching Google rates with corridor management', status: 'todo' },
      { task: 'Nuqta Merchant Discovery', assignee: 'Mobile Squad', claudePrompt: 'Build merchant browse, search, maps, categories UI', status: 'todo' },
    ],
  },
  {
    sprint: 4,
    name: 'Qist BNPL + Hawil Transfer',
    duration: '2 weeks',
    priority: '🥈 Second Priority',
    claudeTasks: [
      { task: 'BNPL Core', assignee: 'Qist Squad', claudePrompt: 'Build installment plans engine with 3/6/12 month options', status: 'todo' },
      { task: 'BizOne Qist Widget', assignee: 'BizOne Squad', claudePrompt: 'Integrate Qist BNPL at POS checkout flow', status: 'todo' },
      { task: 'Hawil KYC/AML', assignee: 'Hawil Squad', claudePrompt: 'Implement document verification, sanctions check, compliance', status: 'todo' },
      { task: 'Hawil Beneficiary', assignee: 'Hawil Squad', claudePrompt: 'Create beneficiary management with save recipients, validation', status: 'todo' },
      { task: 'Nuqta QR Pay', assignee: 'Mobile Squad', claudePrompt: 'Build QR scan and pay flow with merchant detection', status: 'todo' },
      { task: 'Payment Methods', assignee: 'Payments Squad', claudePrompt: 'Add Apple Pay, Google Pay, bank transfer support', status: 'todo' },
    ],
  },
  {
    sprint: 5,
    name: 'Full Integration + Wasil Start',
    duration: '2 weeks',
    priority: '🥈🥉 Second + Third Priority',
    claudeTasks: [
      { task: 'Qist Virtual Card', assignee: 'Qist Squad', claudePrompt: 'Create virtual card issuance for anywhere BNPL', status: 'todo' },
      { task: 'Qist Collections', assignee: 'Qist Squad', claudePrompt: 'Build auto-debit, payment reminders, late fee engine', status: 'todo' },
      { task: 'Hawil Transfer Flow', assignee: 'Hawil Squad', claudePrompt: 'Create send money flow with payout partner integrations', status: 'todo' },
      { task: 'Nuqta Hawil Integration', assignee: 'Mobile Squad', claudePrompt: 'Add send money section in Nuqta app with Hawil', status: 'todo' },
      { task: 'Wasil Order Management', assignee: 'Wasil Squad', claudePrompt: 'Build order lifecycle, status tracking, merchant integration', status: 'todo' },
      { task: 'Wasil Rider App', assignee: 'Wasil Squad', claudePrompt: 'Create React Native rider app with assignment, navigation', status: 'todo' },
    ],
  },
  {
    sprint: 6,
    name: 'Wasil Complete + Gamification',
    duration: '2 weeks',
    priority: '🥉 Third Priority',
    claudeTasks: [
      { task: 'Wasil Routing Engine', assignee: 'Wasil Squad', claudePrompt: 'Build optimal route calculation, order batching algorithm', status: 'todo' },
      { task: 'Wasil Real-time Tracking', assignee: 'Wasil Squad', claudePrompt: 'Implement WebSocket tracking with ETA calculation', status: 'todo' },
      { task: 'Qist Dashboard', assignee: 'Qist Squad', claudePrompt: 'Create merchant Qist reporting and settlement dashboard', status: 'todo' },
      { task: 'Hawil Card Top-up', assignee: 'Hawil Squad', claudePrompt: 'Add card top-up from remittance flow', status: 'todo' },
      { task: 'Nuqta Gamification', assignee: 'Mobile Squad', claudePrompt: 'Build badges, levels, challenges, leaderboard system', status: 'todo' },
      { task: 'BizOne Multi-store', assignee: 'BizOne Squad', claudePrompt: 'Add chain management, centralized control for multi-store', status: 'todo' },
    ],
  },
  {
    sprint: 7,
    name: 'Sakin + Ajer Start',
    duration: '2 weeks',
    priority: '4️⃣ Fourth Priority',
    claudeTasks: [
      { task: 'Wasil Dispatch', assignee: 'Wasil Squad', claudePrompt: 'Build auto-assignment algorithm, load balancing for riders', status: 'todo' },
      { task: 'Sakin Property Listings', assignee: 'Sakin Squad', claudePrompt: 'Create property listing management with search, filters', status: 'todo' },
      { task: 'Ajer Vehicle Catalog', assignee: 'Ajer Squad', claudePrompt: 'Build car listings with availability, pricing engine', status: 'todo' },
      { task: 'Nuqta Wasil UI', assignee: 'Mobile Squad', claudePrompt: 'Add delivery ordering section in Nuqta consumer app', status: 'todo' },
      { task: 'All Product Integration', assignee: 'Platform Squad', claudePrompt: 'Ensure all services communicate via event bus', status: 'todo' },
    ],
  },
  {
    sprint: 8,
    name: 'Sakin + Ajer Finance',
    duration: '2 weeks',
    priority: '4️⃣ Fourth Priority',
    claudeTasks: [
      { task: 'Sakin Rent Finance', assignee: 'Sakin Squad', claudePrompt: 'Build cheque splitting, monthly rent payment engine', status: 'todo' },
      { task: 'Sakin Tenant App', assignee: 'Sakin Squad', claudePrompt: 'Create tenant application with credit check flow', status: 'todo' },
      { task: 'Ajer Subscription', assignee: 'Ajer Squad', claudePrompt: 'Build monthly vehicle subscription plans engine', status: 'todo' },
      { task: 'Ajer Credit Check', assignee: 'Ajer Squad', claudePrompt: 'Integrate with Qist credit model for eligibility', status: 'todo' },
      { task: 'Wasil Consumer UI', assignee: 'Wasil Squad', claudePrompt: 'Complete in-app delivery experience in Nuqta', status: 'todo' },
    ],
  },
];

// Manager Responsibilities
const managerResponsibilities = [
  {
    role: 'Engineering Manager',
    directReports: '8-12 engineers',
    claudeOversight: true,
    responsibilities: [
      'Break down features into Claude-friendly tasks',
      'Review all Claude-generated code before merge',
      'Ensure coding standards are followed',
      'Unblock engineers when Claude needs guidance',
      'Run daily standups, track sprint velocity',
      'Report progress to VP Engineering',
    ],
    kpis: ['Sprint velocity', 'Code quality score', 'Bug escape rate', 'Team satisfaction'],
  },
  {
    role: 'Product Manager',
    directReports: '2-3 products',
    claudeOversight: true,
    responsibilities: [
      'Write detailed PRDs with Claude assistance',
      'Define acceptance criteria for each feature',
      'UAT test all Claude-built features',
      'Manage stakeholder expectations',
      'Prioritize backlog based on business value',
      'Report to CPO on product metrics',
    ],
    kpis: ['Feature adoption', 'User satisfaction', 'Time to market', 'Feature completion rate'],
  },
  {
    role: 'Tech Lead',
    directReports: '4-6 engineers',
    claudeOversight: true,
    responsibilities: [
      'Design technical solutions with Claude',
      'Review Claude architecture decisions',
      'Mentor engineers on Claude best practices',
      'Ensure code quality and performance',
      'Own technical debt reduction',
      'Coordinate with other squads',
    ],
    kpis: ['System uptime', 'API latency', 'Technical debt score', 'Knowledge sharing'],
  },
];

// Reusable Tech Components - Maximum Code Reuse Across 100+ Apps
const reusableComponents = [
  {
    category: 'Core Services',
    icon: Server,
    color: 'text-purple-400',
    components: [
      { name: 'Auth Service (SSO)', usedBy: ['Nuqta App', 'BizOne', 'Wasil', 'Sakin', 'Hawil', 'Qist', 'All Apps'], reuse: '100%' },
      { name: 'User Service', usedBy: ['All Apps'], reuse: '100%' },
      { name: 'Notification Service', usedBy: ['All Apps'], reuse: '100%' },
      { name: 'File Storage Service', usedBy: ['All Apps'], reuse: '100%' },
      { name: 'API Gateway', usedBy: ['All Apps'], reuse: '100%' },
      { name: 'Event Bus', usedBy: ['All Apps'], reuse: '100%' },
    ],
  },
  {
    category: 'Wallet & Payments',
    icon: Wallet,
    color: 'text-[#c9a227]',
    components: [
      { name: 'Wallet Core', usedBy: ['Nuqta', 'BizOne', 'Qist', 'Hawil', 'Wasil', 'Sakin'], reuse: '95%' },
      { name: 'Payment Gateway', usedBy: ['All Transactional Apps'], reuse: '100%' },
      { name: 'Coin/Loyalty Engine', usedBy: ['Nuqta', 'BizOne', 'Wasil', 'Sakin', 'Safar'], reuse: '90%' },
      { name: 'Settlement Engine', usedBy: ['BizOne', 'Qist', 'Hawil', 'Wasil'], reuse: '85%' },
    ],
  },
  {
    category: 'Mobile SDKs',
    icon: Smartphone,
    color: 'text-emerald-400',
    components: [
      { name: 'RN Core Shell', usedBy: ['Nuqta App', 'Wasil App', 'Rider App', 'Driver App'], reuse: '80%' },
      { name: 'Auth SDK', usedBy: ['All Mobile Apps'], reuse: '100%' },
      { name: 'Payment SDK', usedBy: ['All Mobile Apps'], reuse: '95%' },
      { name: 'Maps/Location SDK', usedBy: ['Wasil', 'Rakab', 'Safar'], reuse: '90%' },
      { name: 'Push Notification SDK', usedBy: ['All Mobile Apps'], reuse: '100%' },
    ],
  },
  {
    category: 'Merchant Tools',
    icon: Store,
    color: 'text-teal-400',
    components: [
      { name: 'Merchant Portal Base', usedBy: ['BizOne', 'Wasil Merchant', 'Sakin Landlord'], reuse: '75%' },
      { name: 'KYB/Onboarding', usedBy: ['BizOne', 'Hawil Agent', 'Wasil Restaurant'], reuse: '85%' },
      { name: 'Reporting Framework', usedBy: ['All Merchant Portals'], reuse: '90%' },
      { name: 'CRM Module', usedBy: ['BizOne', 'Wasil', 'Sakin'], reuse: '80%' },
    ],
  },
  {
    category: 'AI/ML Models',
    icon: Brain,
    color: 'text-pink-400',
    components: [
      { name: 'Credit Scoring', usedBy: ['Qist', 'Sakin Rent Finance'], reuse: '90%' },
      { name: 'Fraud Detection', usedBy: ['All Payment Apps'], reuse: '100%' },
      { name: 'Recommendation Engine', usedBy: ['Nuqta', 'Wasil', 'Safar'], reuse: '85%' },
      { name: 'Dynamic Pricing', usedBy: ['Wasil', 'Rakab', 'Safar'], reuse: '90%' },
    ],
  },
  {
    category: 'Infrastructure',
    icon: Cloud,
    color: 'text-blue-400',
    components: [
      { name: 'K8s Helm Charts', usedBy: ['All Services'], reuse: '100%' },
      { name: 'CI/CD Pipelines', usedBy: ['All Repos'], reuse: '100%' },
      { name: 'Monitoring Stack', usedBy: ['All Services'], reuse: '100%' },
      { name: 'Logging/Tracing', usedBy: ['All Services'], reuse: '100%' },
    ],
  },
];

// Engineering Squads - Correct Priority Order
// PRIORITY: 1) BizOne + Nuqta App → 2) Qist + Hawil → 3) Wasil → 4) Sakin + Ajer
const engineeringSquads = [
  // ═══════════════════════════════════════════════════════════════════
  // PRIORITY 1: BizOne (Merchant OS) + Nuqta App (Consumer Super App)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'bizone-pos',
    name: '🥇 BizOne Merchant OS Squad',
    phase: 1,
    priority: 'P0',
    priorityOrder: 1,
    headcount: { current: 0, target: 14 },
    lead: 'Lead Full-stack Engineer',
    description: 'FIRST PRIORITY - Merchant POS, inventory, CRM - powers all merchant interactions',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Electron', 'React Native'],
    color: 'from-teal-500 to-cyan-600',
    textColor: 'text-teal-400',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500',
    members: [
      { role: 'Lead Full-stack Engineer', count: 1, priority: 'P0' },
      { role: 'Senior Full-stack Engineer', count: 3, priority: 'P0' },
      { role: 'Frontend Engineer', count: 4, priority: 'P0' },
      { role: 'Backend Engineer', count: 3, priority: 'P0' },
      { role: 'Mobile Engineer (Merchant App)', count: 2, priority: 'P0' },
      { role: 'QA Engineer', count: 1, priority: 'P0' },
    ],
    deliverables: [
      { name: 'POS Core', priority: 'P0', sprint: 1, status: 'todo', description: 'Cart, checkout, receipt printing' },
      { name: 'Merchant Onboarding', priority: 'P0', sprint: 1, status: 'todo', description: 'Self-service signup, KYB' },
      { name: 'Inventory Management', priority: 'P0', sprint: 2, status: 'todo', description: 'Stock tracking, alerts, variants' },
      { name: 'Payment Integration', priority: 'P0', sprint: 2, status: 'todo', description: 'NuqtaPay, card, QR at POS' },
      { name: 'CRM Module', priority: 'P0', sprint: 3, status: 'todo', description: 'Customer database, segments' },
      { name: 'Reporting Dashboard', priority: 'P0', sprint: 3, status: 'todo', description: 'Sales, inventory reports' },
      { name: 'Nuqta Loyalty Integration', priority: 'P0', sprint: 4, status: 'todo', description: 'Earn/burn coins at POS' },
      { name: 'Qist Integration', priority: 'P0', sprint: 4, status: 'todo', description: 'BNPL option at checkout' },
      { name: 'Staff Management', priority: 'P1', sprint: 5, status: 'todo', description: 'Shifts, permissions, payroll' },
      { name: 'Multi-store Support', priority: 'P1', sprint: 5, status: 'todo', description: 'Chain management, centralized control' },
      { name: 'Offline Mode', priority: 'P1', sprint: 6, status: 'todo', description: 'Work offline, sync when connected' },
    ],
  },
  {
    id: 'mobile-consumer',
    name: '🥇 Nuqta Consumer App Squad',
    phase: 1,
    priority: 'P0',
    priorityOrder: 1,
    headcount: { current: 0, target: 12 },
    lead: 'Lead Mobile Engineer',
    description: 'FIRST PRIORITY - Nuqta consumer super app (iOS + Android)',
    techStack: ['React Native', 'TypeScript', 'Redux', 'Firebase'],
    color: 'from-emerald-500 to-green-600',
    textColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500',
    members: [
      { role: 'Lead Mobile Engineer', count: 1, priority: 'P0' },
      { role: 'Senior React Native Engineer', count: 3, priority: 'P0' },
      { role: 'React Native Engineer', count: 5, priority: 'P0' },
      { role: 'iOS Engineer (Native)', count: 1, priority: 'P0' },
      { role: 'Android Engineer (Native)', count: 1, priority: 'P0' },
      { role: 'Mobile QA', count: 1, priority: 'P0' },
    ],
    deliverables: [
      { name: 'App Shell & Navigation', priority: 'P0', sprint: 1, status: 'todo', description: 'Core navigation, theming, deep links' },
      { name: 'Auth Flows', priority: 'P0', sprint: 1, status: 'todo', description: 'Login, signup, OTP, biometrics' },
      { name: 'Wallet UI', priority: 'P0', sprint: 2, status: 'todo', description: 'Balance, transactions, coins' },
      { name: 'Merchant Discovery', priority: 'P0', sprint: 2, status: 'todo', description: 'Browse, search, maps, categories' },
      { name: 'QR Scan & Pay', priority: 'P0', sprint: 3, status: 'todo', description: 'Scan merchant QR, payment flow' },
      { name: 'Nuqta+ Membership', priority: 'P0', sprint: 3, status: 'todo', description: 'Subscription, benefits, tier display' },
      { name: 'Qist In-App', priority: 'P0', sprint: 4, status: 'todo', description: 'BNPL checkout integration' },
      { name: 'Hawil Send Money', priority: 'P0', sprint: 4, status: 'todo', description: 'Remittance flow in app' },
      { name: 'Gamification Module', priority: 'P0', sprint: 5, status: 'todo', description: 'Badges, levels, challenges, leaderboard' },
      { name: 'Push Notifications', priority: 'P1', sprint: 5, status: 'todo', description: 'FCM integration, in-app messages' },
      { name: 'Offline Mode', priority: 'P1', sprint: 6, status: 'todo', description: 'Cached data, offline QR display' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════════
  // CORE PLATFORM - Enables everything (runs parallel with Priority 1)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'core-platform',
    name: 'Core Platform Squad',
    phase: 1,
    priority: 'P0',
    priorityOrder: 0,
    headcount: { current: 0, target: 12 },
    lead: 'Principal Engineer',
    description: 'Foundation infrastructure that powers ALL apps - reusable across ecosystem',
    techStack: ['Node.js/NestJS', 'PostgreSQL', 'Redis', 'Kubernetes', 'Terraform'],
    color: 'from-purple-500 to-violet-600',
    textColor: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500',
    members: [
      { role: 'Principal Engineer', count: 1, priority: 'P0' },
      { role: 'Senior Backend Engineer', count: 3, priority: 'P0' },
      { role: 'Backend Engineer', count: 4, priority: 'P0' },
      { role: 'DevOps Engineer', count: 2, priority: 'P0' },
      { role: 'SRE', count: 2, priority: 'P0' },
    ],
    deliverables: [
      { name: 'API Gateway', priority: 'P0', sprint: 1, status: 'todo', description: 'Central API gateway with rate limiting, auth - REUSED BY ALL' },
      { name: 'Auth Service (SSO)', priority: 'P0', sprint: 1, status: 'todo', description: 'OAuth2/OIDC, JWT, session management - SINGLE AUTH FOR ALL' },
      { name: 'User Service', priority: 'P0', sprint: 2, status: 'todo', description: 'User CRUD, profiles, preferences - SHARED USER BASE' },
      { name: 'Notification Service', priority: 'P0', sprint: 2, status: 'todo', description: 'Push, SMS, Email, WhatsApp - ALL APPS USE THIS' },
      { name: 'Event Bus', priority: 'P0', sprint: 2, status: 'todo', description: 'Redis Pub/Sub, event-driven architecture' },
      { name: 'File Storage Service', priority: 'P0', sprint: 3, status: 'todo', description: 'S3-compatible, image processing' },
      { name: 'Audit Log Service', priority: 'P1', sprint: 3, status: 'todo', description: 'Activity logging, compliance trails' },
      { name: 'Config Service', priority: 'P1', sprint: 4, status: 'todo', description: 'Feature flags, dynamic config' },
    ],
  },
  {
    id: 'nuqta-wallet',
    name: 'Nuqta Wallet Squad',
    phase: 1,
    priority: 'P0',
    priorityOrder: 0,
    headcount: { current: 0, target: 10 },
    lead: 'Senior Backend Engineer',
    description: 'Core wallet & loyalty engine - reused by BizOne, Qist, Hawil, Wasil',
    techStack: ['Node.js', 'PostgreSQL', 'Redis', 'Kafka'],
    color: 'from-[#c9a227] to-amber-600',
    textColor: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    borderColor: 'border-[#c9a227]',
    members: [
      { role: 'Senior Backend Engineer', count: 2, priority: 'P0' },
      { role: 'Backend Engineer', count: 4, priority: 'P0' },
      { role: 'QA Engineer', count: 2, priority: 'P0' },
      { role: 'Data Engineer', count: 2, priority: 'P1' },
    ],
    deliverables: [
      { name: 'Wallet Core', priority: 'P0', sprint: 1, status: 'todo', description: 'Balance management, transactions, ledger' },
      { name: 'Coin Types Engine', priority: 'P0', sprint: 2, status: 'todo', description: 'Platform coins, branded coins, promo coins' },
      { name: 'Earn Rules Engine', priority: 'P0', sprint: 3, status: 'todo', description: 'Configurable earn rules per merchant/category' },
      { name: 'Burn/Redeem Engine', priority: 'P0', sprint: 3, status: 'todo', description: 'Redemption flows, merchant settlement' },
      { name: 'Coin Liability System', priority: 'P0', sprint: 4, status: 'todo', description: 'Expiry, breakage, liability tracking' },
      { name: 'Merchant Wallet Integration', priority: 'P0', sprint: 4, status: 'todo', description: 'B2B wallet for merchants' },
      { name: 'Coin Analytics Dashboard', priority: 'P1', sprint: 5, status: 'todo', description: 'Earn/burn analytics, cohorts' },
    ],
  },
  {
    id: 'payments',
    name: 'Payments Squad',
    phase: 1,
    priority: 'P0',
    priorityOrder: 0,
    headcount: { current: 0, target: 12 },
    lead: 'Principal Engineer',
    description: 'NuqtaPay - reused by ALL transactional apps (BizOne, Qist, Hawil, Wasil)',
    techStack: ['Go', 'PostgreSQL', 'Kafka', 'HSM', 'PCI-DSS'],
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500',
    members: [
      { role: 'Principal Engineer', count: 1, priority: 'P0' },
      { role: 'Senior Backend Engineer', count: 3, priority: 'P0' },
      { role: 'Backend Engineer', count: 4, priority: 'P0' },
      { role: 'Security Engineer', count: 2, priority: 'P0' },
      { role: 'QA Engineer', count: 2, priority: 'P0' },
    ],
    deliverables: [
      { name: 'Payment Gateway Core', priority: 'P0', sprint: 1, status: 'todo', description: 'Card tokenization, 3DS, PCI compliant' },
      { name: 'Merchant Onboarding', priority: 'P0', sprint: 2, status: 'todo', description: 'KYB, merchant accounts, MDR config' },
      { name: 'Transaction Processing', priority: 'P0', sprint: 2, status: 'todo', description: 'Auth, capture, refund, void' },
      { name: 'Settlement Engine', priority: 'P0', sprint: 3, status: 'todo', description: 'T+1 settlements, reconciliation' },
      { name: 'Fraud Detection', priority: 'P0', sprint: 3, status: 'todo', description: 'Rules engine, ML-based fraud scoring' },
      { name: 'Payment Methods', priority: 'P0', sprint: 4, status: 'todo', description: 'Apple Pay, Google Pay, bank transfers' },
      { name: 'POS Integration SDK', priority: 'P0', sprint: 4, status: 'todo', description: 'SDK for BizOne POS devices' },
      { name: 'Hawil Card Integration', priority: 'P0', sprint: 5, status: 'todo', description: 'Prepaid card issuance, top-up' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════════
  // PRIORITY 2: Qist (BNPL) + Hawil (Remittance)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'qist-bnpl',
    name: '🥈 Qist BNPL Squad',
    phase: 1,
    priority: 'P0',
    priorityOrder: 2,
    headcount: { current: 0, target: 10 },
    lead: 'Senior Backend Engineer',
    description: 'SECOND PRIORITY - Buy Now Pay Later engine - integrates with BizOne & Nuqta',
    techStack: ['Node.js', 'PostgreSQL', 'ML Models', 'Kafka'],
    color: 'from-violet-500 to-purple-600',
    textColor: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500',
    members: [
      { role: 'Senior Backend Engineer', count: 2, priority: 'P0' },
      { role: 'Backend Engineer', count: 3, priority: 'P0' },
      { role: 'ML Engineer', count: 2, priority: 'P0' },
      { role: 'Data Analyst', count: 1, priority: 'P0' },
      { role: 'QA Engineer', count: 2, priority: 'P0' },
    ],
    deliverables: [
      { name: 'Credit Scoring Engine', priority: 'P0', sprint: 3, status: 'todo', description: 'ML-based credit scoring, limit assignment' },
      { name: 'BNPL Core', priority: 'P0', sprint: 3, status: 'todo', description: 'Installment plans, 3/6/12 months' },
      { name: 'BizOne Checkout Widget', priority: 'P0', sprint: 4, status: 'todo', description: 'Qist at POS checkout' },
      { name: 'Nuqta App Integration', priority: 'P0', sprint: 4, status: 'todo', description: 'Qist in consumer app' },
      { name: 'Collections Engine', priority: 'P0', sprint: 5, status: 'todo', description: 'Auto-debit, reminders, late fees' },
      { name: 'Virtual Card (Qist Card)', priority: 'P0', sprint: 5, status: 'todo', description: 'Virtual card for anywhere BNPL' },
      { name: 'Merchant Qist Dashboard', priority: 'P1', sprint: 6, status: 'todo', description: 'Merchant reporting, settlements' },
      { name: 'Risk Monitoring', priority: 'P1', sprint: 6, status: 'todo', description: 'Portfolio health, early warning' },
    ],
  },
  {
    id: 'hawil-remittance',
    name: '🥈 Hawil Remittance Squad',
    phase: 1,
    priority: 'P0',
    priorityOrder: 2,
    headcount: { current: 0, target: 12 },
    lead: 'Principal Engineer',
    description: 'SECOND PRIORITY - Cross-border remittance at Google rate',
    techStack: ['Go', 'PostgreSQL', 'FX APIs', 'SWIFT', 'Kafka'],
    color: 'from-cyan-500 to-teal-600',
    textColor: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500',
    members: [
      { role: 'Principal Engineer', count: 1, priority: 'P0' },
      { role: 'Senior Backend Engineer', count: 3, priority: 'P0' },
      { role: 'Backend Engineer', count: 4, priority: 'P0' },
      { role: 'Compliance Engineer', count: 2, priority: 'P0' },
      { role: 'QA Engineer', count: 2, priority: 'P0' },
    ],
    deliverables: [
      { name: 'FX Engine', priority: 'P0', sprint: 3, status: 'todo', description: 'Real-time rates, Google rate matching' },
      { name: 'Corridor Management', priority: 'P0', sprint: 3, status: 'todo', description: 'UAE→India, UAE→PH, etc.' },
      { name: 'KYC/AML Integration', priority: 'P0', sprint: 4, status: 'todo', description: 'Document verification, sanctions check' },
      { name: 'Beneficiary Management', priority: 'P0', sprint: 4, status: 'todo', description: 'Save recipients, validation' },
      { name: 'Transfer Processing', priority: 'P0', sprint: 5, status: 'todo', description: 'Send flow, status tracking' },
      { name: 'Payout Partners', priority: 'P0', sprint: 5, status: 'todo', description: 'Bank, wallet, cash pickup APIs' },
      { name: 'Nuqta App Integration', priority: 'P0', sprint: 5, status: 'todo', description: 'Send money from Nuqta app' },
      { name: 'Hawil Card Top-up', priority: 'P0', sprint: 6, status: 'todo', description: 'Card top-up from remittance' },
      { name: 'Agent Network', priority: 'P1', sprint: 6, status: 'todo', description: 'Cash-in points management' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════════
  // PRIORITY 3: Wasil (Delivery Super App)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'wasil-delivery',
    name: '🥉 Wasil Delivery Squad',
    phase: 1,
    priority: 'P0',
    priorityOrder: 3,
    headcount: { current: 0, target: 15 },
    lead: 'Principal Engineer',
    description: 'THIRD PRIORITY - Quick commerce, delivery, rider management',
    techStack: ['Go', 'PostgreSQL', 'Redis', 'Maps API', 'WebSockets'],
    color: 'from-orange-500 to-amber-600',
    textColor: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500',
    members: [
      { role: 'Principal Engineer', count: 1, priority: 'P0' },
      { role: 'Senior Backend Engineer', count: 3, priority: 'P0' },
      { role: 'Backend Engineer', count: 5, priority: 'P0' },
      { role: 'Mobile Engineer (Rider App)', count: 3, priority: 'P0' },
      { role: 'QA Engineer', count: 2, priority: 'P0' },
      { role: 'SRE', count: 1, priority: 'P1' },
    ],
    deliverables: [
      { name: 'Order Management', priority: 'P0', sprint: 5, status: 'todo', description: 'Order lifecycle, status tracking' },
      { name: 'Rider App (React Native)', priority: 'P0', sprint: 5, status: 'todo', description: 'Assignment, navigation, delivery - REUSES mobile SDK' },
      { name: 'Routing Engine', priority: 'P0', sprint: 6, status: 'todo', description: 'Optimal route calculation, batching' },
      { name: 'Real-time Tracking', priority: 'P0', sprint: 6, status: 'todo', description: 'WebSocket tracking, ETA' },
      { name: 'Dispatch Algorithm', priority: 'P0', sprint: 7, status: 'todo', description: 'Auto-assignment, load balancing' },
      { name: 'Merchant Integration', priority: 'P0', sprint: 7, status: 'todo', description: 'Restaurant/grocery/pharmacy APIs' },
      { name: 'Consumer Delivery UI', priority: 'P0', sprint: 8, status: 'todo', description: 'In Nuqta app - REUSES app shell' },
      { name: 'Nuqta Pay Integration', priority: 'P0', sprint: 8, status: 'todo', description: 'Payment + coins at checkout' },
      { name: 'Fleet Management', priority: 'P1', sprint: 9, status: 'todo', description: 'Vehicle tracking, maintenance' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════════
  // PRIORITY 4: Sakin (Rent Finance) + Ajer (Vehicle Leasing)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'sakin-rental',
    name: '4️⃣ Sakin Rent Finance Squad',
    phase: 1,
    priority: 'P1',
    priorityOrder: 4,
    headcount: { current: 0, target: 10 },
    lead: 'Senior Backend Engineer',
    description: 'FOURTH PRIORITY - Rent financing, property management',
    techStack: ['Node.js', 'PostgreSQL', 'ML Models'],
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500',
    members: [
      { role: 'Senior Backend Engineer', count: 2, priority: 'P0' },
      { role: 'Backend Engineer', count: 3, priority: 'P0' },
      { role: 'Frontend Engineer', count: 3, priority: 'P0' },
      { role: 'Mobile Engineer', count: 1, priority: 'P1' },
      { role: 'QA Engineer', count: 1, priority: 'P1' },
    ],
    deliverables: [
      { name: 'Property Listings', priority: 'P0', sprint: 7, status: 'todo', description: 'Listing management, search' },
      { name: 'Rent Financing Engine', priority: 'P0', sprint: 8, status: 'todo', description: 'Cheque splitting, monthly payments - REUSES credit scoring' },
      { name: 'Tenant Application', priority: 'P0', sprint: 8, status: 'todo', description: 'Credit check, approval flow - REUSES Qist models' },
      { name: 'Landlord Portal', priority: 'P0', sprint: 9, status: 'todo', description: 'Property management - REUSES merchant portal base' },
      { name: 'Nuqta App Integration', priority: 'P0', sprint: 9, status: 'todo', description: 'Find & rent in Nuqta app' },
      { name: 'NuqtaPay Integration', priority: 'P0', sprint: 10, status: 'todo', description: 'Pay rent, earn coins' },
      { name: 'Short-stay Module', priority: 'P1', sprint: 11, status: 'todo', description: 'Airbnb-style short rentals' },
    ],
  },
  {
    id: 'ajer-leasing',
    name: '4️⃣ Ajer Vehicle Leasing Squad',
    phase: 1,
    priority: 'P1',
    priorityOrder: 4,
    headcount: { current: 0, target: 8 },
    lead: 'Senior Backend Engineer',
    description: 'FOURTH PRIORITY - Vehicle leasing & subscription',
    techStack: ['Node.js', 'PostgreSQL', 'React Native'],
    color: 'from-lime-500 to-green-600',
    textColor: 'text-lime-400',
    bgColor: 'bg-lime-500/10',
    borderColor: 'border-lime-500',
    members: [
      { role: 'Senior Backend Engineer', count: 2, priority: 'P0' },
      { role: 'Backend Engineer', count: 2, priority: 'P0' },
      { role: 'Frontend Engineer', count: 2, priority: 'P0' },
      { role: 'Mobile Engineer', count: 1, priority: 'P1' },
      { role: 'QA Engineer', count: 1, priority: 'P1' },
    ],
    deliverables: [
      { name: 'Vehicle Catalog', priority: 'P0', sprint: 7, status: 'todo', description: 'Car listings, availability' },
      { name: 'Subscription Engine', priority: 'P0', sprint: 8, status: 'todo', description: 'Monthly subscription plans' },
      { name: 'Credit Assessment', priority: 'P0', sprint: 8, status: 'todo', description: 'Eligibility check - REUSES Qist credit model' },
      { name: 'Booking Flow', priority: 'P0', sprint: 9, status: 'todo', description: 'Reserve, pay, schedule pickup' },
      { name: 'Nuqta App Integration', priority: 'P0', sprint: 9, status: 'todo', description: 'Lease from Nuqta app' },
      { name: 'Fleet Partner Portal', priority: 'P1', sprint: 10, status: 'todo', description: 'For car dealers - REUSES merchant portal' },
      { name: 'Insurance Integration', priority: 'P1', sprint: 10, status: 'todo', description: 'Bundle insurance' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════════
  // PHASE 2: Additional Products (After 9 Core Products)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'travel-safar',
    name: 'Safar Travel Squad',
    phase: 2,
    priority: 'P2',
    priorityOrder: 5,
    headcount: { current: 0, target: 10 },
    lead: 'Senior Backend Engineer',
    description: 'OTA platform - flights, hotels, experiences (after core 9)',
    techStack: ['Node.js', 'PostgreSQL', 'GDS APIs', 'Redis'],
    color: 'from-sky-500 to-blue-600',
    textColor: 'text-sky-400',
    bgColor: 'bg-sky-500/10',
    borderColor: 'border-sky-500',
    members: [
      { role: 'Senior Backend Engineer', count: 2, priority: 'P2' },
      { role: 'Backend Engineer', count: 4, priority: 'P2' },
      { role: 'Frontend Engineer', count: 2, priority: 'P2' },
      { role: 'Mobile Engineer', count: 1, priority: 'P2' },
      { role: 'QA Engineer', count: 1, priority: 'P2' },
    ],
    deliverables: [
      { name: 'Flight Search', priority: 'P2', sprint: 10, status: 'todo', description: 'GDS integration, fare comparison' },
      { name: 'Hotel Search', priority: 'P2', sprint: 11, status: 'todo', description: 'Aggregator integration' },
      { name: 'Booking Engine', priority: 'P2', sprint: 12, status: 'todo', description: 'Unified booking flow' },
      { name: 'Payment + Qist', priority: 'P2', sprint: 12, status: 'todo', description: 'Pay now or split - REUSES payment/Qist' },
    ],
  },
  {
    id: 'rakab-mobility',
    name: 'Rakab Mobility Squad',
    phase: 2,
    priority: 'P2',
    priorityOrder: 5,
    headcount: { current: 0, target: 12 },
    lead: 'Principal Engineer',
    description: 'Ride-hailing platform (after core 9)',
    techStack: ['Go', 'PostgreSQL', 'Redis', 'Maps API', 'WebSockets'],
    color: 'from-yellow-500 to-amber-600',
    textColor: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500',
    members: [
      { role: 'Principal Engineer', count: 1, priority: 'P2' },
      { role: 'Senior Backend Engineer', count: 2, priority: 'P2' },
      { role: 'Backend Engineer', count: 4, priority: 'P2' },
      { role: 'Mobile Engineer (Driver)', count: 2, priority: 'P2' },
      { role: 'Mobile Engineer (Passenger)', count: 2, priority: 'P2' },
      { role: 'QA Engineer', count: 1, priority: 'P2' },
    ],
    deliverables: [
      { name: 'Ride Request Flow', priority: 'P2', sprint: 10, status: 'todo', description: 'Request, match, accept' },
      { name: 'Driver App', priority: 'P2', sprint: 10, status: 'todo', description: 'Go online, navigation - REUSES Wasil rider patterns' },
      { name: 'Matching Algorithm', priority: 'P2', sprint: 11, status: 'todo', description: 'Nearest driver, surge pricing' },
      { name: 'Trip Management', priority: 'P2', sprint: 12, status: 'todo', description: 'Start, tracking, complete' },
    ],
  },
  // ═══════════════════════════════════════════════════════════════════
  // SUPPORTING SQUADS (Run parallel throughout)
  // ═══════════════════════════════════════════════════════════════════
  {
    id: 'merchant-portal',
    name: 'Merchant Portal Squad',
    phase: 1,
    priority: 'P0',
    priorityOrder: 0,
    headcount: { current: 0, target: 8 },
    lead: 'Senior Full-stack Engineer',
    description: 'Merchant dashboard - REUSED by BizOne, Wasil, Sakin, Ajer',
    techStack: ['Next.js', 'React', 'Node.js', 'PostgreSQL'],
    color: 'from-rose-500 to-red-600',
    textColor: 'text-rose-400',
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500',
    members: [
      { role: 'Senior Full-stack Engineer', count: 2, priority: 'P0' },
      { role: 'Frontend Engineer', count: 3, priority: 'P0' },
      { role: 'Backend Engineer', count: 2, priority: 'P0' },
      { role: 'QA Engineer', count: 1, priority: 'P0' },
    ],
    deliverables: [
      { name: 'Portal Shell & Auth', priority: 'P0', sprint: 1, status: 'todo', description: 'Base portal, SSO integration' },
      { name: 'Dashboard Home', priority: 'P0', sprint: 2, status: 'todo', description: 'Overview, key metrics - REUSABLE' },
      { name: 'Transaction Reports', priority: 'P0', sprint: 3, status: 'todo', description: 'Reports framework - REUSABLE' },
      { name: 'Settlement Reports', priority: 'P0', sprint: 3, status: 'todo', description: 'Payout tracking - REUSABLE' },
      { name: 'Offer Management', priority: 'P1', sprint: 4, status: 'todo', description: 'Create offers, campaigns' },
      { name: 'Staff Management', priority: 'P1', sprint: 5, status: 'todo', description: 'Add staff, permissions' },
      { name: 'Analytics Dashboard', priority: 'P1', sprint: 6, status: 'todo', description: 'Customer insights, cohorts' },
    ],
  },
  {
    id: 'data-platform',
    name: 'Data Platform Squad',
    phase: 1,
    priority: 'P0',
    priorityOrder: 0,
    headcount: { current: 0, target: 10 },
    lead: 'Principal Data Engineer',
    description: 'Data warehouse, ETL, analytics - powers ALL products',
    techStack: ['Snowflake/BigQuery', 'Apache Spark', 'Airflow', 'dbt', 'Kafka'],
    color: 'from-amber-500 to-orange-600',
    textColor: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500',
    members: [
      { role: 'Principal Data Engineer', count: 1, priority: 'P0' },
      { role: 'Senior Data Engineer', count: 2, priority: 'P0' },
      { role: 'Data Engineer', count: 3, priority: 'P0' },
      { role: 'BI Developer', count: 2, priority: 'P1' },
      { role: 'Data Analyst', count: 2, priority: 'P1' },
    ],
    deliverables: [
      { name: 'Data Lake Setup', priority: 'P0', sprint: 1, status: 'todo', description: 'S3/GCS, raw data ingestion' },
      { name: 'Data Warehouse', priority: 'P0', sprint: 2, status: 'todo', description: 'Star schema, dimensional models' },
      { name: 'ETL Pipelines', priority: 'P0', sprint: 2, status: 'todo', description: 'Airflow DAGs, incremental loads' },
      { name: 'Real-time Streaming', priority: 'P0', sprint: 3, status: 'todo', description: 'Kafka→Flink→Warehouse' },
      { name: 'BI Dashboard (Internal)', priority: 'P1', sprint: 4, status: 'todo', description: 'Metabase/Looker setup' },
      { name: 'Data Quality Framework', priority: 'P1', sprint: 4, status: 'todo', description: 'Great Expectations, alerts' },
      { name: 'Self-serve Analytics', priority: 'P2', sprint: 6, status: 'todo', description: 'Semantic layer, ad-hoc queries' },
    ],
  },
  {
    id: 'security',
    name: 'Security Squad',
    phase: 1,
    priority: 'P0',
    priorityOrder: 0,
    headcount: { current: 0, target: 10 },
    lead: 'Principal Security Engineer',
    description: 'Security, compliance, fraud prevention - protects ALL apps',
    techStack: ['SIEM', 'WAF', 'HSM', 'Vault', 'SOC tools'],
    color: 'from-red-500 to-rose-600',
    textColor: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500',
    members: [
      { role: 'Principal Security Engineer', count: 1, priority: 'P0' },
      { role: 'Senior Security Engineer', count: 2, priority: 'P0' },
      { role: 'Security Engineer', count: 3, priority: 'P0' },
      { role: 'SOC Analyst', count: 2, priority: 'P1' },
      { role: 'Penetration Tester', count: 2, priority: 'P1' },
    ],
    deliverables: [
      { name: 'Security Architecture', priority: 'P0', sprint: 1, status: 'todo', description: 'Zero trust, network segmentation' },
      { name: 'PCI-DSS Compliance', priority: 'P0', sprint: 2, status: 'todo', description: 'Cardholder data protection' },
      { name: 'SIEM Setup', priority: 'P0', sprint: 2, status: 'todo', description: 'Log aggregation, threat detection' },
      { name: 'WAF & DDoS Protection', priority: 'P0', sprint: 3, status: 'todo', description: 'CloudFlare/AWS WAF rules' },
      { name: 'Secrets Management', priority: 'P0', sprint: 3, status: 'todo', description: 'HashiCorp Vault, key rotation' },
      { name: 'SOC Operations', priority: 'P1', sprint: 4, status: 'todo', description: '24/7 monitoring, incident response' },
      { name: 'Bug Bounty Program', priority: 'P2', sprint: 6, status: 'todo', description: 'HackerOne/Bugcrowd program' },
    ],
  },
  {
    id: 'ai-ml',
    name: 'AI/ML Squad',
    phase: 1,
    priority: 'P0',
    priorityOrder: 0,
    headcount: { current: 0, target: 15 },
    lead: 'Principal ML Engineer',
    description: 'AI models - REUSED across Qist, Sakin, Wasil, Rakab, Fraud',
    techStack: ['Python', 'PyTorch', 'TensorFlow', 'MLflow', 'Kubernetes'],
    color: 'from-pink-500 to-rose-600',
    textColor: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500',
    members: [
      { role: 'Principal ML Engineer', count: 1, priority: 'P0' },
      { role: 'Senior ML Engineer', count: 3, priority: 'P0' },
      { role: 'ML Engineer', count: 5, priority: 'P0' },
      { role: 'Data Scientist', count: 4, priority: 'P1' },
      { role: 'MLOps Engineer', count: 2, priority: 'P1' },
    ],
    deliverables: [
      { name: 'Credit Scoring Model', priority: 'P0', sprint: 2, status: 'todo', description: 'BNPL risk - REUSED by Qist, Sakin, Ajer' },
      { name: 'Fraud Detection Model', priority: 'P0', sprint: 3, status: 'todo', description: 'Transaction anomaly - ALL PAYMENTS' },
      { name: 'Recommendation Engine', priority: 'P0', sprint: 5, status: 'todo', description: 'Merchant, offer recs - REUSED' },
      { name: 'Churn Prediction', priority: 'P1', sprint: 6, status: 'todo', description: 'User retention signals' },
      { name: 'Dynamic Pricing', priority: 'P1', sprint: 8, status: 'todo', description: 'Surge for Wasil/Rakab' },
      { name: 'Demand Forecasting', priority: 'P2', sprint: 9, status: 'todo', description: 'Inventory prediction' },
      { name: 'NLP - Chat/Search', priority: 'P2', sprint: 10, status: 'todo', description: 'Chatbot, semantic search' },
      { name: 'Computer Vision', priority: 'P3', sprint: 12, status: 'todo', description: 'Document OCR, ID verification' },
    ],
  },
  {
    id: 'qa-automation',
    name: 'QA & Automation Squad',
    phase: 1,
    priority: 'P0',
    priorityOrder: 0,
    headcount: { current: 0, target: 12 },
    lead: 'Lead QA Engineer',
    description: 'Test automation, quality - SHARED test frameworks',
    techStack: ['Playwright', 'Appium', 'Jest', 'k6', 'Postman'],
    color: 'from-indigo-500 to-violet-600',
    textColor: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500',
    members: [
      { role: 'Lead QA Engineer', count: 1, priority: 'P0' },
      { role: 'Senior QA Engineer', count: 2, priority: 'P0' },
      { role: 'QA Automation Engineer', count: 4, priority: 'P0' },
      { role: 'Mobile QA Engineer', count: 2, priority: 'P0' },
      { role: 'Performance Test Engineer', count: 2, priority: 'P1' },
      { role: 'Manual QA', count: 1, priority: 'P2' },
    ],
    deliverables: [
      { name: 'Test Framework Setup', priority: 'P0', sprint: 1, status: 'todo', description: 'Playwright, CI integration' },
      { name: 'API Test Suite', priority: 'P0', sprint: 2, status: 'todo', description: 'All service API tests' },
      { name: 'E2E Test Suite', priority: 'P0', sprint: 3, status: 'todo', description: 'Critical user journeys' },
      { name: 'Mobile Test Automation', priority: 'P0', sprint: 5, status: 'todo', description: 'Appium, device farm' },
      { name: 'Performance Testing', priority: 'P1', sprint: 6, status: 'todo', description: 'Load testing, k6 scripts' },
      { name: 'Chaos Engineering', priority: 'P2', sprint: 8, status: 'todo', description: 'Resilience testing' },
    ],
  },
  {
    id: 'product-design',
    name: 'Product Design Squad',
    phase: 1,
    priority: 'P0',
    priorityOrder: 0,
    headcount: { current: 0, target: 10 },
    lead: 'Lead Product Designer',
    description: 'UX/UI for all products - SHARED design system',
    techStack: ['Figma', 'Framer', 'Storybook', 'React'],
    color: 'from-fuchsia-500 to-pink-600',
    textColor: 'text-fuchsia-400',
    bgColor: 'bg-fuchsia-500/10',
    borderColor: 'border-fuchsia-500',
    members: [
      { role: 'Lead Product Designer', count: 1, priority: 'P0' },
      { role: 'Senior UX Designer', count: 2, priority: 'P0' },
      { role: 'UI Designer', count: 3, priority: 'P0' },
      { role: 'UX Researcher', count: 1, priority: 'P0' },
      { role: 'Motion Designer', count: 1, priority: 'P1' },
      { role: 'Design System Engineer', count: 2, priority: 'P0' },
    ],
    deliverables: [
      { name: 'Design System', priority: 'P0', sprint: 1, status: 'todo', description: 'Components, tokens - REUSED BY ALL' },
      { name: 'Nuqta App Design', priority: 'P0', sprint: 2, status: 'todo', description: 'Consumer app UI/UX' },
      { name: 'BizOne POS Design', priority: 'P0', sprint: 2, status: 'todo', description: 'Merchant POS UI/UX' },
      { name: 'Merchant Portal Design', priority: 'P0', sprint: 3, status: 'todo', description: 'Dashboard UI - REUSABLE' },
      { name: 'Brand Guidelines', priority: 'P0', sprint: 4, status: 'todo', description: 'All sub-brands' },
      { name: 'User Research', priority: 'P1', sprint: 5, status: 'todo', description: 'Research framework' },
      { name: 'Prototype Library', priority: 'P2', sprint: 6, status: 'todo', description: 'Reusable prototypes' },
    ],
  },
];

// Development Phases - CORRECT PRIORITY ORDER
// 1) BizOne + Nuqta → 2) Qist + Hawil → 3) Wasil → 4) Sakin + Ajer → 5) Others
const developmentPhases = [
  {
    phase: 1,
    name: 'Core 9 Products',
    timeline: 'Month 1-10',
    focus: '🥇 BizOne + Nuqta App → 🥈 Qist + Hawil → 🥉 Wasil → 4️⃣ Sakin + Ajer',
    squads: ['bizone-pos', 'mobile-consumer', 'core-platform', 'nuqta-wallet', 'payments', 'qist-bnpl', 'hawil-remittance', 'wasil-delivery', 'sakin-rental', 'ajer-leasing', 'merchant-portal', 'data-platform', 'security', 'ai-ml', 'qa-automation', 'product-design'],
    headcount: 170,
    milestones: [
      { month: 1, milestone: '🥇 Core Platform + BizOne POS Core + Nuqta App Shell' },
      { month: 2, milestone: '🥇 BizOne Inventory + Nuqta Wallet UI + Payment Gateway' },
      { month: 3, milestone: '🥇 BizOne full POS + Nuqta App Beta + 🥈 Qist/Hawil start' },
      { month: 4, milestone: '🥈 Qist BNPL at BizOne + Hawil FX Engine' },
      { month: 5, milestone: '🥈 Qist + Hawil integration in Nuqta App + 🥉 Wasil start' },
      { month: 6, milestone: '🥉 Wasil Order Management + Rider App' },
      { month: 7, milestone: '🥉 Wasil fully live + 4️⃣ Sakin + Ajer start' },
      { month: 8, milestone: '4️⃣ Sakin Rent Finance + Ajer Vehicle Catalog' },
      { month: 9, milestone: '4️⃣ Sakin + Ajer booking flows' },
      { month: 10, milestone: '✅ All 9 Core Products LIVE' },
    ],
    color: 'border-emerald-500 bg-emerald-500/10',
    textColor: 'text-emerald-400',
  },
  {
    phase: 2,
    name: 'Additional Products',
    timeline: 'Month 11-14',
    focus: 'Safar Travel, Rakab Mobility - one by one after core 9',
    squads: ['travel-safar', 'rakab-mobility'],
    headcount: 200,
    milestones: [
      { month: 11, milestone: 'Safar flight + hotel search' },
      { month: 12, milestone: 'Safar booking engine + Qist integration' },
      { month: 13, milestone: 'Rakab ride-hailing MVP' },
      { month: 14, milestone: 'Rakab fully live' },
    ],
    color: 'border-blue-500 bg-blue-500/10',
    textColor: 'text-blue-400',
  },
  {
    phase: 3,
    name: 'Scale & Expand',
    timeline: 'Month 15-20',
    focus: 'Adzy, Inventora, NextaBizz, Eventora, GCC expansion',
    squads: [],
    headcount: 350,
    milestones: [
      { month: 15, milestone: 'Adzy ad platform live' },
      { month: 16, milestone: 'Inventora warehouse mgmt' },
      { month: 18, milestone: 'NextaBizz B2B marketplace' },
      { month: 20, milestone: 'Full GCC launch' },
    ],
    color: 'border-purple-500 bg-purple-500/10',
    textColor: 'text-purple-400',
  },
];

// Priority Legend
const priorityConfig = {
  'P0': { label: 'Critical', color: 'bg-red-500 text-white', description: 'Must have for launch' },
  'P1': { label: 'High', color: 'bg-orange-500 text-white', description: 'Important for full product' },
  'P2': { label: 'Medium', color: 'bg-yellow-500 text-black', description: 'Nice to have' },
  'P3': { label: 'Low', color: 'bg-slate-500 text-white', description: 'Future enhancement' },
};

// Tech Stack Categories
const techStackCategories = [
  {
    category: 'Backend',
    icon: Server,
    technologies: ['Node.js/NestJS', 'Go', 'PostgreSQL 15', 'Redis 7', 'Kafka', 'gRPC'],
  },
  {
    category: 'Frontend',
    icon: Monitor,
    technologies: ['React 18', 'Next.js 14', 'TypeScript', 'TailwindCSS', 'Zustand'],
  },
  {
    category: 'Mobile',
    icon: Smartphone,
    technologies: ['React Native', 'Swift (iOS)', 'Kotlin (Android)', 'Expo'],
  },
  {
    category: 'Data',
    icon: Database,
    technologies: ['Snowflake', 'Apache Spark', 'Airflow', 'dbt', 'Metabase'],
  },
  {
    category: 'AI/ML',
    icon: Brain,
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'MLflow', 'Vertex AI'],
  },
  {
    category: 'Infrastructure',
    icon: Cloud,
    technologies: ['AWS/GCP', 'Kubernetes', 'Terraform', 'ArgoCD', 'Prometheus'],
  },
];

export default function RabtulTechPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSquad, setExpandedSquad] = useState<string | null>(null);
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Network },
    { id: 'ai-team', label: 'AI + Team', icon: Brain },
    { id: 'priority', label: 'Priority Order', icon: Flag },
    { id: 'sprints', label: 'Sprints', icon: Calendar },
    { id: 'squads', label: 'Squads', icon: Users },
    { id: 'reusable', label: 'Reusable Tech', icon: Share2 },
    { id: 'roadmap', label: 'Roadmap', icon: Map },
    { id: 'hiring', label: 'Hiring Plan', icon: UserPlus },
    { id: 'stack', label: 'Tech Stack', icon: Code },
  ];

  const getTotalHeadcount = () => engineeringSquads.reduce((acc, s) => acc + s.headcount.target, 0);
  const getTotalTasks = () => engineeringSquads.reduce((acc, s) => acc + s.deliverables.length, 0);
  const getP0Tasks = () => engineeringSquads.reduce((acc, s) => acc + s.deliverables.filter(d => d.priority === 'P0').length, 0);

  const filteredSquads = selectedPhase
    ? engineeringSquads.filter(s => s.phase === selectedPhase)
    : engineeringSquads;

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0a1628] via-[#1a2d4a] to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex items-center gap-2 mb-6">
            <Link
              href="/rtmn-team-structure"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Team Structure</span>
            </Link>
          </div>

          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full mb-4">
              <Cloud className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-bold">Rabtul رابطول</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Tech <span className="text-purple-400">Team</span> & Tasks
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Complete engineering organization with squads, deliverables, and priority-wise task breakdown.
              Building solid tech infrastructure for 100+ apps across 10 companies.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
              <div className="text-2xl font-bold text-purple-400">{engineeringSquads.length}</div>
              <div className="text-xs text-slate-400">Engineering Squads</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
              <div className="text-2xl font-bold text-emerald-400">{getTotalHeadcount()}</div>
              <div className="text-xs text-slate-400">Total Engineers</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
              <div className="text-2xl font-bold text-blue-400">{getTotalTasks()}</div>
              <div className="text-xs text-slate-400">Total Tasks</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
              <div className="text-2xl font-bold text-red-400">{getP0Tasks()}</div>
              <div className="text-xs text-slate-400">P0 Critical</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
              <div className="text-2xl font-bold text-[#c9a227]">20</div>
              <div className="text-xs text-slate-400">Month Roadmap</div>
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
                    ? 'bg-purple-500 text-white'
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
            {/* Leadership */}
            <div className="bg-gradient-to-r from-purple-500/20 to-violet-500/10 rounded-xl p-6 border-2 border-purple-500">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Crown className="w-5 h-5 text-purple-400" />
                Rabtul Tech Leadership
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {rabtulLeadership.slice(0, 4).map((leader, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-purple-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs px-2 py-0.5 rounded font-bold ${priorityConfig[leader.priority as keyof typeof priorityConfig].color}`}>
                        {leader.priority}
                      </span>
                      <span className="text-xs text-blue-400">{leader.status}</span>
                    </div>
                    <h3 className="text-white font-bold">{leader.role}</h3>
                    <p className="text-xs text-slate-400 mt-1">{leader.experience}</p>
                    <p className="text-xs text-emerald-400 mt-2">{leader.compensation}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Phase Overview */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-[#c9a227]" />
                Development Phases
              </h3>
              <div className="space-y-4">
                {developmentPhases.map((phase, i) => (
                  <div key={i} className={`rounded-xl p-5 border-2 ${phase.color}`}>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className={`text-2xl font-black ${phase.textColor}`}>Phase {phase.phase}</span>
                          <span className="text-white font-bold">{phase.name}</span>
                        </div>
                        <p className="text-slate-400 text-sm">{phase.timeline}</p>
                      </div>
                      <div className={`text-xl font-bold ${phase.textColor}`}>{phase.headcount} Engineers</div>
                    </div>
                    <p className="text-slate-300 mb-4">{phase.focus}</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.milestones.slice(0, 3).map((m, j) => (
                        <span key={j} className="text-xs bg-slate-900/50 px-3 py-1 rounded-full text-slate-300">
                          M{m.month}: {m.milestone}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Priority Legend */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(priorityConfig).map(([key, config]) => (
                <div key={key} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${config.color}`}>{key}</span>
                    <span className="text-white font-medium">{config.label}</span>
                  </div>
                  <p className="text-xs text-slate-400">{config.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AI + Team Tab */}
        {activeTab === 'ai-team' && (
          <div className="space-y-8">
            {/* Hero Banner */}
            <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/10 rounded-xl p-6 border-2 border-pink-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white">Claude AI-Powered Development</h2>
                  <p className="text-slate-300">All teams use Claude AI (Claude Code) to build everything</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-black text-pink-400">100%</div>
                  <div className="text-xs text-slate-400">AI-Assisted Code</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-black text-purple-400">3x</div>
                  <div className="text-xs text-slate-400">Faster Development</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-black text-blue-400">CTO</div>
                  <div className="text-xs text-slate-400">Led Architecture</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-black text-emerald-400">CPO</div>
                  <div className="text-xs text-slate-400">Product Owner</div>
                </div>
              </div>
            </div>

            {/* Leadership Hierarchy */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Crown className="w-5 h-5 text-[#c9a227]" />
                Leadership Hierarchy (CTO-Led)
              </h3>

              {/* CEO Level */}
              <div className="flex justify-center mb-6">
                <div className="bg-[#c9a227]/20 rounded-xl p-4 border-2 border-[#c9a227] text-center w-64">
                  <div className="text-[#c9a227] font-black text-lg">CEO</div>
                  <div className="text-xs text-slate-400">Overall Vision</div>
                </div>
              </div>

              <div className="flex justify-center mb-4">
                <div className="w-0.5 h-8 bg-slate-600"></div>
              </div>

              {/* CTO + CPO Level */}
              <div className="flex justify-center gap-8 mb-6">
                <div className="bg-purple-500/20 rounded-xl p-4 border-2 border-purple-500 text-center w-56">
                  <div className="text-purple-400 font-black text-lg">CTO</div>
                  <div className="text-xs text-slate-400">Tech Vision & Architecture</div>
                  <div className="text-xs text-pink-400 mt-1">Claude AI Orchestration</div>
                </div>
                <div className="bg-blue-500/20 rounded-xl p-4 border-2 border-blue-500 text-center w-56">
                  <div className="text-blue-400 font-black text-lg">CPO</div>
                  <div className="text-xs text-slate-400">Product Strategy</div>
                  <div className="text-xs text-pink-400 mt-1">Claude AI Product Prompts</div>
                </div>
              </div>

              <div className="flex justify-center mb-4">
                <div className="w-0.5 h-8 bg-slate-600"></div>
              </div>

              {/* VP Level */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {[
                  { title: 'VP Engineering', color: 'emerald', report: 'to CTO' },
                  { title: 'VP Platform', color: 'cyan', report: 'to CTO' },
                  { title: 'VP AI/ML', color: 'pink', report: 'to CTO' },
                  { title: 'VP Security', color: 'red', report: 'to CTO' },
                ].map((vp, i) => (
                  <div key={i} className={`bg-${vp.color}-500/20 rounded-lg p-3 border border-${vp.color}-500/50 text-center`}>
                    <div className={`text-${vp.color}-400 font-bold text-sm`}>{vp.title}</div>
                    <div className="text-xs text-slate-500">{vp.report}</div>
                  </div>
                ))}
              </div>

              {/* Manager Level */}
              <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                {['Eng Manager', 'Product Manager', 'Tech Lead', 'QA Lead', 'Design Lead', 'Data Lead'].map((role, i) => (
                  <div key={i} className="bg-slate-700/50 rounded-lg p-2 text-center">
                    <div className="text-slate-300 font-medium text-xs">{role}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Claude AI Workflow */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-pink-400" />
                Claude AI Development Workflow
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {claudeAIWorkflow.workflow.slice(0, 10).map((step, i) => (
                  <div key={i} className="relative">
                    <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/50 h-full">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 text-xs font-bold flex items-center justify-center">
                          {step.step}
                        </span>
                        <span className="text-pink-400 font-bold text-xs">{step.title}</span>
                      </div>
                      <p className="text-xs text-slate-400">{step.description}</p>
                    </div>
                    {i < 9 && i !== 4 && (
                      <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                        <ChevronRight className="w-4 h-4 text-pink-500/50" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Role-Based Claude Usage */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                How Each Role Uses Claude AI
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {claudeAIWorkflow.roles.map((role, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-white font-bold">{role.title}</h4>
                      <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-0.5 rounded">
                        {role.claudeUsage}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {role.responsibilities.slice(0, 3).map((resp, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-slate-300">{resp}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-700/50">
                      <p className="text-xs text-slate-500 mb-1">Daily Tasks:</p>
                      <div className="flex flex-wrap gap-1">
                        {role.dailyTasks.map((task, k) => (
                          <span key={k} className="text-xs bg-slate-800 px-2 py-0.5 rounded text-slate-400">
                            {task.length > 25 ? task.substring(0, 25) + '...' : task}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Manager Responsibilities */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-emerald-400" />
                Manager Responsibilities & Claude Oversight
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {managerResponsibilities.map((mgr, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-white font-bold">{mgr.role}</h4>
                      {mgr.claudeOversight && (
                        <Brain className="w-4 h-4 text-pink-400" />
                      )}
                    </div>
                    <div className="text-xs text-slate-400 mb-3">
                      Manages: {mgr.directReports}
                    </div>
                    <div className="space-y-2 mb-4">
                      {mgr.responsibilities.slice(0, 4).map((resp, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <ChevronRight className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-slate-300">{resp}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-3 border-t border-slate-700/50">
                      <p className="text-xs text-slate-500 mb-2">KPIs:</p>
                      <div className="flex flex-wrap gap-1">
                        {mgr.kpis.map((kpi, k) => (
                          <span key={k} className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">
                            {kpi}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Sprints Tab */}
        {activeTab === 'sprints' && (
          <div className="space-y-8">
            {/* Sprint Overview */}
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/10 rounded-xl p-6 border-2 border-blue-500">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-blue-400" />
                Sprint Schedule with Claude AI Tasks
              </h2>
              <p className="text-slate-300 mb-4">
                Each sprint is 2 weeks. Engineers use Claude Code to build features. Managers review and approve.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-black text-blue-400">{sprintStructure.length}</div>
                  <div className="text-xs text-slate-400">Total Sprints (Phase 1)</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-black text-emerald-400">
                    {sprintStructure.reduce((acc, s) => acc + s.claudeTasks.length, 0)}
                  </div>
                  <div className="text-xs text-slate-400">Claude Tasks</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-black text-purple-400">2 weeks</div>
                  <div className="text-xs text-slate-400">Per Sprint</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-black text-pink-400">100%</div>
                  <div className="text-xs text-slate-400">AI-Assisted</div>
                </div>
              </div>
            </div>

            {/* Sprint Cards */}
            <div className="space-y-6">
              {sprintStructure.map((sprint, i) => (
                <div key={i} className="bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden">
                  <div className="bg-slate-800/50 p-4 border-b border-slate-700/50">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 font-black flex items-center justify-center">
                          S{sprint.sprint}
                        </span>
                        <div>
                          <h3 className="text-white font-bold">{sprint.name}</h3>
                          <span className="text-xs text-slate-400">{sprint.duration}</span>
                        </div>
                      </div>
                      <span className="text-sm">{sprint.priority}</span>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {sprint.claudeTasks.map((task, j) => (
                        <div key={j} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Code className="w-4 h-4 text-pink-400" />
                              <span className="text-white font-medium text-sm">{task.task}</span>
                            </div>
                            <span className="text-xs bg-slate-800 px-2 py-0.5 rounded text-slate-400">
                              {task.assignee.replace(' Squad', '')}
                            </span>
                          </div>
                          <div className="bg-pink-500/10 rounded p-2 border border-pink-500/30">
                            <p className="text-xs text-pink-300">
                              <span className="text-pink-400 font-bold">Claude Prompt: </span>
                              {task.claudePrompt}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Priority Order Tab */}
        {activeTab === 'priority' && (
          <div className="space-y-8">
            {/* Priority Visual */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-purple-500/10 rounded-xl p-6 border-2 border-[#c9a227]">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Flag className="w-6 h-6 text-[#c9a227]" />
                Development Priority Order
              </h2>
              <p className="text-slate-300 mb-6">
                We will finish all 9 core products first, then add products one by one. Maximum tech reuse across all apps.
              </p>

              {/* Priority Cards */}
              <div className="space-y-4">
                {/* Priority 1 */}
                <div className="bg-teal-500/20 rounded-xl p-6 border-2 border-teal-500">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">🥇</span>
                    <div>
                      <h3 className="text-2xl font-black text-teal-400">FIRST PRIORITY</h3>
                      <p className="text-slate-300">BizOne (Merchant OS) + Nuqta App (Consumer)</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-900/50 rounded-lg p-4">
                      <h4 className="text-teal-400 font-bold mb-2 flex items-center gap-2">
                        <Store className="w-5 h-5" /> BizOne
                      </h4>
                      <p className="text-sm text-slate-300">Merchant POS, inventory, CRM - the B2B foundation</p>
                      <div className="mt-2 text-xs text-slate-400">Sprint 1-6 • 14 engineers</div>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-4">
                      <h4 className="text-emerald-400 font-bold mb-2 flex items-center gap-2">
                        <Smartphone className="w-5 h-5" /> Nuqta App
                      </h4>
                      <p className="text-sm text-slate-300">Consumer super app - wallet, discovery, payments</p>
                      <div className="mt-2 text-xs text-slate-400">Sprint 1-6 • 12 engineers</div>
                    </div>
                  </div>
                </div>

                {/* Priority 2 */}
                <div className="bg-violet-500/20 rounded-xl p-6 border-2 border-violet-500">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">🥈</span>
                    <div>
                      <h3 className="text-2xl font-black text-violet-400">SECOND PRIORITY</h3>
                      <p className="text-slate-300">Qist (BNPL) + Hawil (Remittance)</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-900/50 rounded-lg p-4">
                      <h4 className="text-violet-400 font-bold mb-2 flex items-center gap-2">
                        <CreditCard className="w-5 h-5" /> Qist
                      </h4>
                      <p className="text-sm text-slate-300">Buy Now Pay Later - credit scoring, installments</p>
                      <div className="mt-2 text-xs text-slate-400">Sprint 3-6 • 10 engineers</div>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-4">
                      <h4 className="text-cyan-400 font-bold mb-2 flex items-center gap-2">
                        <Send className="w-5 h-5" /> Hawil
                      </h4>
                      <p className="text-sm text-slate-300">Cross-border remittance at Google rates</p>
                      <div className="mt-2 text-xs text-slate-400">Sprint 3-6 • 12 engineers</div>
                    </div>
                  </div>
                </div>

                {/* Priority 3 */}
                <div className="bg-orange-500/20 rounded-xl p-6 border-2 border-orange-500">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">🥉</span>
                    <div>
                      <h3 className="text-2xl font-black text-orange-400">THIRD PRIORITY</h3>
                      <p className="text-slate-300">Wasil (Quick Commerce & Delivery)</p>
                    </div>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <h4 className="text-orange-400 font-bold mb-2 flex items-center gap-2">
                      <Truck className="w-5 h-5" /> Wasil
                    </h4>
                    <p className="text-sm text-slate-300">Quick commerce, food delivery, rider management, real-time tracking</p>
                    <div className="mt-2 text-xs text-slate-400">Sprint 5-9 • 15 engineers</div>
                  </div>
                </div>

                {/* Priority 4 */}
                <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-500">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">4️⃣</span>
                    <div>
                      <h3 className="text-2xl font-black text-green-400">FOURTH PRIORITY</h3>
                      <p className="text-slate-300">Sakin (Rent Finance) + Ajer (Vehicle Leasing)</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-900/50 rounded-lg p-4">
                      <h4 className="text-green-400 font-bold mb-2 flex items-center gap-2">
                        <Home className="w-5 h-5" /> Sakin
                      </h4>
                      <p className="text-sm text-slate-300">Rent financing, cheque splitting, property management</p>
                      <div className="mt-2 text-xs text-slate-400">Sprint 7-11 • 10 engineers</div>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-4">
                      <h4 className="text-lime-400 font-bold mb-2 flex items-center gap-2">
                        <Car className="w-5 h-5" /> Ajer
                      </h4>
                      <p className="text-sm text-slate-300">Vehicle leasing, subscription, fleet management</p>
                      <div className="mt-2 text-xs text-slate-400">Sprint 7-10 • 8 engineers</div>
                    </div>
                  </div>
                </div>

                {/* After Core 9 */}
                <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">5️⃣+</span>
                    <div>
                      <h3 className="text-xl font-bold text-slate-300">AFTER CORE 9 PRODUCTS</h3>
                      <p className="text-slate-400">One by one, based on priority</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-sky-500/20 text-sky-400 rounded-full text-sm">Safar (Travel)</span>
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">Rakab (Mobility)</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Adzy (Ads)</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Inventora</span>
                    <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm">NextaBizz</span>
                    <span className="px-3 py-1 bg-rose-500/20 text-rose-400 rounded-full text-sm">Eventora</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 9 Core Products Summary */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-emerald-400" />
                9 Core Products - Finish First
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-9 gap-2">
                {['BizOne', 'Nuqta', 'Qist', 'Hawil', 'Wasil', 'Sakin', 'Ajer', 'Nuqta+', 'NuqtaPay'].map((product, i) => (
                  <div key={i} className="bg-emerald-500/20 rounded-lg p-3 text-center border border-emerald-500/50">
                    <span className="text-emerald-400 font-bold text-sm">{product}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-400 text-sm mt-4">
                All 9 products share the same core infrastructure, auth, wallet, and payment systems. Maximum code reuse.
              </p>
            </div>
          </div>
        )}

        {/* Reusable Tech Tab */}
        {activeTab === 'reusable' && (
          <div className="space-y-8">
            {/* Intro */}
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/10 rounded-xl p-6 border-2 border-purple-500">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Share2 className="w-6 h-6 text-purple-400" />
                Maximum Tech Reuse Strategy
              </h2>
              <p className="text-slate-300 mb-4">
                We build once, reuse everywhere. Single source of truth for each domain. All 100+ apps share the same core components.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-black text-emerald-400">85%</div>
                  <div className="text-xs text-slate-400">Avg Code Reuse</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-black text-blue-400">30+</div>
                  <div className="text-xs text-slate-400">Shared Components</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-black text-purple-400">1</div>
                  <div className="text-xs text-slate-400">Auth System</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-black text-[#c9a227]">1</div>
                  <div className="text-xs text-slate-400">Payment Gateway</div>
                </div>
              </div>
            </div>

            {/* Reusable Components by Category */}
            <div className="space-y-6">
              {reusableComponents.map((category, i) => (
                <div key={i} className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
                  <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${category.color}`}>
                    <category.icon className="w-5 h-5" />
                    {category.category}
                  </h3>
                  <div className="space-y-3">
                    {category.components.map((comp, j) => (
                      <div key={j} className="bg-slate-900/50 rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
                        <div className="flex-1">
                          <h4 className="text-white font-medium">{comp.name}</h4>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {comp.usedBy.slice(0, 5).map((app, k) => (
                              <span key={k} className="text-xs bg-slate-800 px-2 py-0.5 rounded text-slate-400">
                                {app}
                              </span>
                            ))}
                            {comp.usedBy.length > 5 && (
                              <span className="text-xs bg-purple-500/20 px-2 py-0.5 rounded text-purple-400">
                                +{comp.usedBy.length - 5} more
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-emerald-500 rounded-full"
                              style={{ width: comp.reuse }}
                            ></div>
                          </div>
                          <span className="text-emerald-400 font-bold text-sm w-12">{comp.reuse}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Architecture Diagram */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-400" />
                Shared Architecture
              </h3>
              <div className="space-y-4">
                {/* Layer 1: Apps */}
                <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
                  <div className="text-xs text-blue-400 font-bold mb-2">CONSUMER & MERCHANT APPS</div>
                  <div className="flex flex-wrap gap-2">
                    {['Nuqta App', 'BizOne POS', 'Wasil App', 'Rider App', 'Safar App', 'Rakab App'].map((app, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-sm">{app}</span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <ChevronDown className="w-6 h-6 text-slate-500" />
                </div>

                {/* Layer 2: SDKs */}
                <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/30">
                  <div className="text-xs text-purple-400 font-bold mb-2">SHARED SDKs & LIBRARIES</div>
                  <div className="flex flex-wrap gap-2">
                    {['Auth SDK', 'Payment SDK', 'Location SDK', 'Push SDK', 'Analytics SDK'].map((sdk, i) => (
                      <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-lg text-sm">{sdk}</span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <ChevronDown className="w-6 h-6 text-slate-500" />
                </div>

                {/* Layer 3: Core Services */}
                <div className="bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/30">
                  <div className="text-xs text-emerald-400 font-bold mb-2">CORE SERVICES (Single Source of Truth)</div>
                  <div className="flex flex-wrap gap-2">
                    {['Auth Service', 'User Service', 'Wallet Service', 'Payment Gateway', 'Notification Service', 'File Service'].map((svc, i) => (
                      <span key={i} className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-lg text-sm">{svc}</span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <ChevronDown className="w-6 h-6 text-slate-500" />
                </div>

                {/* Layer 4: Infrastructure */}
                <div className="bg-[#c9a227]/10 rounded-lg p-4 border border-[#c9a227]/30">
                  <div className="text-xs text-[#c9a227] font-bold mb-2">SHARED INFRASTRUCTURE</div>
                  <div className="flex flex-wrap gap-2">
                    {['Kubernetes', 'PostgreSQL', 'Redis', 'Kafka', 'Monitoring', 'CI/CD'].map((infra, i) => (
                      <span key={i} className="px-3 py-1 bg-[#c9a227]/20 text-[#c9a227] rounded-lg text-sm">{infra}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Squads Tab */}
        {activeTab === 'squads' && (
          <div className="space-y-6">
            {/* Phase Filter */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setSelectedPhase(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedPhase === null ? 'bg-purple-500 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                All Phases
              </button>
              {[1, 2, 3].map((phase) => (
                <button
                  key={phase}
                  onClick={() => setSelectedPhase(phase)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedPhase === phase ? 'bg-purple-500 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  Phase {phase}
                </button>
              ))}
            </div>

            {filteredSquads.map((squad) => (
              <div
                key={squad.id}
                className={`${squad.bgColor} rounded-xl border-2 ${squad.borderColor} overflow-hidden`}
              >
                <button
                  onClick={() => setExpandedSquad(expandedSquad === squad.id ? null : squad.id)}
                  className="w-full p-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${squad.color} flex items-center justify-center`}>
                      <Code className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className={`text-lg font-bold ${squad.textColor}`}>{squad.name}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded font-bold ${priorityConfig[squad.priority as keyof typeof priorityConfig].color}`}>
                          {squad.priority}
                        </span>
                        <span className="text-xs bg-slate-800 px-2 py-0.5 rounded text-slate-400">
                          Phase {squad.phase}
                        </span>
                      </div>
                      <p className="text-sm text-slate-400">{squad.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                      <div className="text-slate-400 text-xs">Target Headcount</div>
                      <div className={`font-bold ${squad.textColor}`}>{squad.headcount.target} engineers</div>
                    </div>
                    {expandedSquad === squad.id ? (
                      <ChevronUp className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </button>

                {expandedSquad === squad.id && (
                  <div className="p-5 pt-0 border-t border-slate-700/50 mt-2 space-y-6">
                    {/* Tech Stack */}
                    <div>
                      <p className="text-xs text-slate-500 mb-2">Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {squad.techStack.map((tech, j) => (
                          <span key={j} className={`px-3 py-1 ${squad.bgColor} border ${squad.borderColor} rounded-full text-sm ${squad.textColor}`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Team Members */}
                    <div>
                      <p className="text-xs text-slate-500 mb-2">Team Composition ({squad.headcount.target} total)</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        {squad.members.map((member, j) => (
                          <div key={j} className="bg-slate-900/50 rounded-lg p-3 flex items-center justify-between">
                            <span className="text-white text-sm">{member.role}</span>
                            <div className="flex items-center gap-2">
                              <span className={`text-xs px-1.5 py-0.5 rounded ${priorityConfig[member.priority as keyof typeof priorityConfig].color}`}>
                                {member.priority}
                              </span>
                              <span className={`font-bold ${squad.textColor}`}>×{member.count}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <p className="text-xs text-slate-500 mb-2">Deliverables ({squad.deliverables.length} tasks)</p>
                      <div className="space-y-2">
                        {squad.deliverables.map((task, j) => (
                          <div key={j} className="bg-slate-900/50 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className={`text-xs px-1.5 py-0.5 rounded font-bold ${priorityConfig[task.priority as keyof typeof priorityConfig].color}`}>
                                  {task.priority}
                                </span>
                                <span className="text-white font-medium">{task.name}</span>
                              </div>
                              <p className="text-xs text-slate-400">{task.description}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-400">
                                Sprint {task.sprint}
                              </span>
                              <Circle className="w-4 h-4 text-slate-500" />
                            </div>
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

        {/* All Tasks Tab */}
        {activeTab === 'tasks' && (
          <div className="space-y-8">
            {/* Priority Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(priorityConfig).map(([priority, config]) => {
                const count = engineeringSquads.reduce((acc, s) =>
                  acc + s.deliverables.filter(d => d.priority === priority).length, 0
                );
                return (
                  <div key={priority} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-0.5 rounded text-xs font-bold ${config.color}`}>{priority}</span>
                      <span className="text-2xl font-bold text-white">{count}</span>
                    </div>
                    <p className="text-xs text-slate-400">{config.label} Priority Tasks</p>
                  </div>
                );
              })}
            </div>

            {/* Tasks by Sprint */}
            {[1, 2, 3, 4, 5, 6].map((sprint) => {
              const sprintTasks = engineeringSquads.flatMap(s =>
                s.deliverables.filter(d => d.sprint === sprint).map(d => ({ ...d, squad: s.name, squadColor: s.textColor }))
              );
              if (sprintTasks.length === 0) return null;

              return (
                <div key={sprint} className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    Sprint {sprint} (Week {(sprint - 1) * 2 + 1}-{sprint * 2})
                    <span className="text-sm font-normal text-slate-400">• {sprintTasks.length} tasks</span>
                  </h3>
                  <div className="space-y-2">
                    {sprintTasks
                      .sort((a, b) => a.priority.localeCompare(b.priority))
                      .map((task, i) => (
                        <div key={i} className="bg-slate-900/50 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center gap-3">
                          <div className="flex items-center gap-2">
                            <span className={`text-xs px-2 py-0.5 rounded font-bold ${priorityConfig[task.priority as keyof typeof priorityConfig].color}`}>
                              {task.priority}
                            </span>
                            <Circle className="w-4 h-4 text-slate-500" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-white font-medium">{task.name}</span>
                              <span className={`text-xs ${task.squadColor}`}>({task.squad})</span>
                            </div>
                            <p className="text-xs text-slate-400">{task.description}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              );
            })}

            {/* Phase 2 Tasks */}
            <div className="bg-blue-500/10 rounded-xl p-6 border-2 border-blue-500">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-blue-400" />
                Phase 2 Tasks (Month 7-12)
              </h3>
              <div className="space-y-2">
                {engineeringSquads
                  .filter(s => s.phase === 2)
                  .flatMap(s => s.deliverables.map(d => ({ ...d, squad: s.name, squadColor: s.textColor })))
                  .sort((a, b) => a.priority.localeCompare(b.priority))
                  .map((task, i) => (
                    <div key={i} className="bg-slate-900/50 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center gap-3">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-0.5 rounded font-bold ${priorityConfig[task.priority as keyof typeof priorityConfig].color}`}>
                          {task.priority}
                        </span>
                        <span className="text-xs bg-slate-800 px-2 py-0.5 rounded text-slate-400">
                          Sprint {task.sprint}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-white font-medium">{task.name}</span>
                          <span className={`text-xs ${task.squadColor}`}>({task.squad})</span>
                        </div>
                        <p className="text-xs text-slate-400">{task.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* Roadmap Tab */}
        {activeTab === 'roadmap' && (
          <div className="space-y-8">
            {developmentPhases.map((phase, i) => (
              <div key={i} className={`rounded-xl p-6 border-2 ${phase.color}`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className={`text-3xl font-black ${phase.textColor}`}>Phase {phase.phase}</span>
                      <span className="text-xl font-bold text-white">{phase.name}</span>
                    </div>
                    <p className="text-slate-400">{phase.timeline}</p>
                  </div>
                  <div className={`text-2xl font-bold ${phase.textColor}`}>{phase.headcount} Engineers</div>
                </div>

                <p className="text-slate-300 mb-6">{phase.focus}</p>

                {/* Milestones Timeline */}
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-700"></div>
                  <div className="space-y-4">
                    {phase.milestones.map((m, j) => (
                      <div key={j} className="flex items-start gap-4 ml-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          j === 0 ? 'bg-emerald-500' : 'bg-slate-700'
                        } -ml-4 z-10`}>
                          {j === 0 ? <CheckCircle className="w-4 h-4 text-white" /> : <Circle className="w-4 h-4 text-slate-400" />}
                        </div>
                        <div className="flex-1 bg-slate-900/50 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`font-bold ${phase.textColor}`}>Month {m.month}</span>
                            <span className="text-slate-500">•</span>
                            <span className="text-white">{m.milestone}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Squads in this phase */}
                {phase.squads.length > 0 && (
                  <div className="mt-6">
                    <p className="text-xs text-slate-500 mb-2">Squads Active</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.squads.map((squadId, j) => {
                        const squad = engineeringSquads.find(s => s.id === squadId);
                        if (!squad) return null;
                        return (
                          <span key={j} className={`px-3 py-1 ${squad.bgColor} border ${squad.borderColor} rounded-full text-sm ${squad.textColor}`}>
                            {squad.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Hiring Plan Tab */}
        {activeTab === 'hiring' && (
          <div className="space-y-8">
            {/* Leadership Hiring */}
            <div className="bg-gradient-to-r from-purple-500/20 to-violet-500/10 rounded-xl p-6 border-2 border-purple-500">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Crown className="w-5 h-5 text-purple-400" />
                Leadership Hiring (Priority Order)
              </h2>
              <div className="space-y-3">
                {rabtulLeadership.map((leader, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className={`text-xs px-2 py-1 rounded font-bold ${priorityConfig[leader.priority as keyof typeof priorityConfig].color}`}>
                        {leader.priority}
                      </span>
                      <div>
                        <h3 className="text-white font-bold">{leader.role}</h3>
                        <p className="text-xs text-slate-400">{leader.responsibilities.slice(0, 2).join(', ')}</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <span className="text-xs text-slate-400">{leader.experience}</span>
                      <span className="text-emerald-400 font-medium">{leader.compensation}</span>
                      <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">{leader.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Squad Hiring by Phase */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <UserPlus className="w-5 h-5 text-emerald-400" />
                Squad Hiring Summary
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-slate-400">Squad</th>
                      <th className="text-center py-3 px-4 text-slate-400">Priority</th>
                      <th className="text-center py-3 px-4 text-slate-400">Phase</th>
                      <th className="text-center py-3 px-4 text-slate-400">Target</th>
                      <th className="text-left py-3 px-4 text-slate-400">Key Roles</th>
                    </tr>
                  </thead>
                  <tbody>
                    {engineeringSquads
                      .sort((a, b) => a.priority.localeCompare(b.priority))
                      .map((squad, i) => (
                        <tr key={i} className="border-b border-slate-700/50 hover:bg-slate-800/30">
                          <td className="py-3 px-4">
                            <span className={`font-medium ${squad.textColor}`}>{squad.name}</span>
                          </td>
                          <td className="py-3 px-4 text-center">
                            <span className={`text-xs px-2 py-0.5 rounded font-bold ${priorityConfig[squad.priority as keyof typeof priorityConfig].color}`}>
                              {squad.priority}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-center text-slate-300">Phase {squad.phase}</td>
                          <td className="py-3 px-4 text-center">
                            <span className={`font-bold ${squad.textColor}`}>{squad.headcount.target}</span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex flex-wrap gap-1">
                              {squad.members.filter(m => m.priority === 'P0').slice(0, 2).map((m, j) => (
                                <span key={j} className="text-xs bg-slate-800 px-2 py-0.5 rounded text-slate-300">
                                  {m.role} ×{m.count}
                                </span>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-purple-500/10">
                      <td className="py-3 px-4 font-bold text-white" colSpan={3}>TOTAL</td>
                      <td className="py-3 px-4 text-center font-bold text-purple-400">{getTotalHeadcount()}</td>
                      <td className="py-3 px-4"></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            {/* Hiring Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-emerald-500/10 rounded-xl p-6 border-2 border-emerald-500">
                <h4 className="text-emerald-400 font-bold mb-4">Month 1-3</h4>
                <div className="text-3xl font-black text-white mb-2">60</div>
                <p className="text-slate-400 text-sm mb-4">Priority hires</p>
                <div className="space-y-2 text-sm text-slate-300">
                  <div>• CTO + VP Engineering</div>
                  <div>• Core Platform Squad (12)</div>
                  <div>• Payments Squad (12)</div>
                  <div>• Security + QA leads</div>
                </div>
              </div>
              <div className="bg-blue-500/10 rounded-xl p-6 border-2 border-blue-500">
                <h4 className="text-blue-400 font-bold mb-4">Month 4-6</h4>
                <div className="text-3xl font-black text-white mb-2">60</div>
                <p className="text-slate-400 text-sm mb-4">Scaling Phase 1</p>
                <div className="space-y-2 text-sm text-slate-300">
                  <div>• Mobile Squad (10)</div>
                  <div>• Wallet + BNPL (20)</div>
                  <div>• Hawil Squad (12)</div>
                  <div>• Data + AI/ML (18)</div>
                </div>
              </div>
              <div className="bg-purple-500/10 rounded-xl p-6 border-2 border-purple-500">
                <h4 className="text-purple-400 font-bold mb-4">Month 7-12</h4>
                <div className="text-3xl font-black text-white mb-2">80</div>
                <p className="text-slate-400 text-sm mb-4">Phase 2 expansion</p>
                <div className="space-y-2 text-sm text-slate-300">
                  <div>• Wasil Delivery (15)</div>
                  <div>• BizOne POS (10)</div>
                  <div>• Sakin + Travel (18)</div>
                  <div>• Rakab Mobility (12)</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tech Stack Tab */}
        {activeTab === 'stack' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-purple-500/10 rounded-xl p-6 border-2 border-[#c9a227]">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-[#c9a227]" />
                Technology Stack
              </h2>
              <p className="text-slate-300">
                Modern, scalable tech stack designed for 100+ apps and millions of users.
                Polyglot persistence, microservices architecture, event-driven design.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {techStackCategories.map((cat, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <cat.icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <h3 className="text-white font-bold">{cat.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.technologies.map((tech, j) => (
                      <span key={j} className="text-sm bg-slate-900/50 px-3 py-1 rounded-full text-slate-300 border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Architecture Principles */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-400" />
                Architecture Principles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Single Source of Truth', desc: 'Each domain has one owner. Wallet owned by Nuqta, no logic duplication.' },
                  { title: 'Event-Driven Architecture', desc: 'Redis Pub/Sub + Kafka for async communication between services.' },
                  { title: 'API-First Design', desc: 'All apps are clients. Backend services expose clean REST + gRPC APIs.' },
                  { title: 'Killable Architecture', desc: 'Any app can be launched/removed without affecting others.' },
                  { title: 'Polyglot Persistence', desc: 'PostgreSQL for ACID, MongoDB for logs, Redis for cache, ES for search.' },
                  { title: 'Zero Trust Security', desc: 'Every request authenticated, encrypted, logged. PCI-DSS compliant.' },
                ].map((principle, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-4">
                    <h4 className="text-white font-bold mb-1">{principle.title}</h4>
                    <p className="text-sm text-slate-400">{principle.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-purple-500/20 to-[#c9a227]/10 border-t border-b border-purple-500/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Building Solid Tech for 100+ Apps
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-6">
            {getTotalHeadcount()} engineers, {engineeringSquads.length} squads, {getTotalTasks()} deliverables.
            One unified platform powering the entire RTMN ecosystem.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/rtmn-team-structure"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-xl text-white font-medium hover:bg-slate-700 transition-colors"
            >
              <Users className="w-5 h-5" />
              View Full Team Structure
            </Link>
            <Link
              href="/rtmn-dashboard"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl text-white font-bold text-lg hover:opacity-90 transition-opacity"
            >
              <Network className="w-6 h-6" />
              RTMN Dashboard
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
