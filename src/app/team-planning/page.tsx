'use client';

import React, { useState } from 'react';
import {
  Users, Building2, Crown, Code, Megaphone, ShoppingCart, Headphones,
  DollarSign, BarChart3, Settings, ChevronDown, ChevronUp, Copy, Check,
  UserPlus, Briefcase, Target, Calendar, Clock, Star, TrendingUp,
  Globe, Heart, Zap, Shield, CheckCircle, AlertTriangle
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

export default function TeamPlanningPage() {
  const [expandedDept, setExpandedDept] = useState<string | null>('executive');
  const [viewMode, setViewMode] = useState<'chart' | 'list'>('chart');
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const departments = [
    {
      id: 'executive',
      name: 'Executive Team',
      icon: Crown,
      color: 'purple',
      budget: { monthly: 85000, annual: 1020000 },
      headcount: { current: 1, m3: 1, m6: 2, m12: 3 },
      roles: [
        {
          title: 'CEO / Founder',
          level: 'C-Level',
          status: 'Filled',
          salary: { min: 40000, max: 50000 },
          equity: '40-60%',
          hireBy: 'Existing',
          reports: 'Board',
          directReports: 7,
          responsibilities: [
            'Company vision and strategy',
            'Fundraising and investor relations',
            'Key partnerships and deals',
            'Executive team leadership',
            'Board management'
          ],
          requirements: [
            'Proven startup leadership',
            'UAE market experience',
            'Strong network in retail/fintech',
            'Fundraising track record'
          ]
        },
        {
          title: 'COO',
          level: 'C-Level',
          status: 'Month 9',
          salary: { min: 35000, max: 45000 },
          equity: '2-4%',
          hireBy: 'Month 9',
          reports: 'CEO',
          directReports: 4,
          responsibilities: [
            'Day-to-day operations',
            'Process optimization',
            'Team scaling and structure',
            'Vendor and partner management',
            'Operational efficiency'
          ],
          requirements: [
            '10+ years operations experience',
            'Startup scaling experience',
            'Strong process orientation',
            'People management skills'
          ]
        },
        {
          title: 'CFO (Fractional)',
          level: 'C-Level',
          status: 'Month 9',
          salary: { min: 15000, max: 25000 },
          equity: '0.5-1%',
          hireBy: 'Month 9',
          reports: 'CEO',
          directReports: 1,
          responsibilities: [
            'Financial strategy and planning',
            'Investor reporting',
            'Cash flow management',
            'Fundraising support',
            'Audit and compliance'
          ],
          requirements: [
            'Startup CFO experience',
            'UAE financial regulations',
            'Fundraising experience',
            'Part-time availability'
          ]
        }
      ]
    },
    {
      id: 'technology',
      name: 'Technology',
      icon: Code,
      color: 'blue',
      budget: { monthly: 145000, annual: 1740000 },
      headcount: { current: 0, m3: 4, m6: 6, m12: 10 },
      roles: [
        {
          title: 'CTO / Tech Lead',
          level: 'C-Level',
          status: 'Hiring Now',
          salary: { min: 30000, max: 40000 },
          equity: '3-5%',
          hireBy: 'Month 1',
          reports: 'CEO',
          directReports: 9,
          responsibilities: [
            'Technical vision and architecture',
            'Product development roadmap',
            'Engineering team leadership',
            'Technology partnerships',
            'Security and infrastructure'
          ],
          requirements: [
            '8+ years tech leadership',
            'Mobile app development',
            'Fintech/loyalty experience',
            'Team scaling experience'
          ]
        },
        {
          title: 'Senior Full-Stack Developer',
          level: 'Senior',
          status: 'Hiring Now',
          salary: { min: 20000, max: 28000 },
          equity: '0.5-1%',
          hireBy: 'Month 1',
          reports: 'CTO',
          directReports: 0,
          responsibilities: [
            'Full-stack development',
            'API design and implementation',
            'Code review and mentoring',
            'Technical documentation'
          ],
          requirements: [
            '5+ years full-stack',
            'React, Node.js, TypeScript',
            'Database expertise',
            'API development'
          ]
        },
        {
          title: 'Mobile Developer (React Native)',
          level: 'Senior',
          status: 'Hiring Now',
          salary: { min: 18000, max: 25000 },
          equity: '0.3-0.5%',
          hireBy: 'Month 1',
          reports: 'CTO',
          directReports: 0,
          responsibilities: [
            'Mobile app development',
            'iOS and Android deployment',
            'Performance optimization',
            'App store management'
          ],
          requirements: [
            '4+ years mobile dev',
            'React Native expert',
            'Published apps',
            'Performance optimization'
          ]
        },
        {
          title: 'Backend Developer',
          level: 'Mid',
          status: 'Month 3',
          salary: { min: 15000, max: 20000 },
          equity: '0.2-0.3%',
          hireBy: 'Month 3',
          reports: 'CTO',
          directReports: 0,
          responsibilities: [
            'Backend services development',
            'Database management',
            'API development',
            'Integration development'
          ],
          requirements: [
            '3+ years backend',
            'Node.js, Python, or Go',
            'Database expertise',
            'API design'
          ]
        },
        {
          title: 'QA Engineer',
          level: 'Mid',
          status: 'Month 3',
          salary: { min: 12000, max: 16000 },
          equity: '0.1-0.2%',
          hireBy: 'Month 3',
          reports: 'CTO',
          directReports: 0,
          responsibilities: [
            'Test automation',
            'Quality assurance',
            'Bug tracking',
            'Release testing'
          ],
          requirements: [
            '3+ years QA',
            'Automation experience',
            'Mobile testing',
            'CI/CD familiarity'
          ]
        },
        {
          title: 'DevOps Engineer',
          level: 'Mid-Senior',
          status: 'Month 6',
          salary: { min: 18000, max: 24000 },
          equity: '0.2-0.3%',
          hireBy: 'Month 6',
          reports: 'CTO',
          directReports: 0,
          responsibilities: [
            'Infrastructure management',
            'CI/CD pipelines',
            'Security implementation',
            'Monitoring and alerting'
          ],
          requirements: [
            '4+ years DevOps',
            'AWS/GCP expertise',
            'Kubernetes experience',
            'Security best practices'
          ]
        },
        {
          title: 'UX Designer',
          level: 'Mid-Senior',
          status: 'Month 9',
          salary: { min: 15000, max: 22000 },
          equity: '0.2-0.3%',
          hireBy: 'Month 9',
          reports: 'CTO/Product',
          directReports: 0,
          responsibilities: [
            'User experience design',
            'UI design and prototyping',
            'User research',
            'Design system maintenance'
          ],
          requirements: [
            '4+ years UX/UI',
            'Mobile app design',
            'Figma expert',
            'User research skills'
          ]
        },
        {
          title: 'Junior Developer (2)',
          level: 'Junior',
          status: 'Month 9-12',
          salary: { min: 10000, max: 14000 },
          equity: '0.1%',
          hireBy: 'Month 12',
          reports: 'Senior Devs',
          directReports: 0,
          responsibilities: [
            'Feature development',
            'Bug fixes',
            'Code maintenance',
            'Documentation'
          ],
          requirements: [
            '1-2 years experience',
            'React/Node.js basics',
            'Eager to learn',
            'Good communication'
          ]
        }
      ]
    },
    {
      id: 'marketing',
      name: 'Marketing',
      icon: Megaphone,
      color: 'pink',
      budget: { monthly: 140000, annual: 1680000 },
      headcount: { current: 0, m3: 4, m6: 7, m12: 10 },
      roles: [
        {
          title: 'CMO',
          level: 'C-Level',
          status: 'Hiring Now',
          salary: { min: 30000, max: 40000 },
          equity: '2-4%',
          hireBy: 'Month 1',
          reports: 'CEO',
          directReports: 9,
          responsibilities: [
            'Marketing strategy and vision',
            'Brand development',
            'User acquisition',
            'Marketing budget management',
            'Team leadership'
          ],
          requirements: [
            '8+ years marketing leadership',
            'App marketing experience',
            'UAE market knowledge',
            'Growth marketing expertise'
          ]
        },
        {
          title: 'Performance Marketing Lead',
          level: 'Senior',
          status: 'Hiring Now',
          salary: { min: 18000, max: 25000 },
          equity: '0.5-1%',
          hireBy: 'Month 1',
          reports: 'CMO',
          directReports: 1,
          responsibilities: [
            'Paid acquisition strategy',
            'Campaign management',
            'ROAS optimization',
            'Budget allocation'
          ],
          requirements: [
            '5+ years performance',
            'App install campaigns',
            'Meta/Google/TikTok expertise',
            'AED 100K+ budgets managed'
          ]
        },
        {
          title: 'Content & Social Lead',
          level: 'Senior',
          status: 'Hiring Now',
          salary: { min: 15000, max: 22000 },
          equity: '0.3-0.5%',
          hireBy: 'Month 1',
          reports: 'CMO',
          directReports: 2,
          responsibilities: [
            'Content strategy',
            'Social media management',
            'Community building',
            'Brand voice development'
          ],
          requirements: [
            '4+ years content/social',
            'Bilingual (Eng/Arabic)',
            'Video content skills',
            'Community management'
          ]
        },
        {
          title: 'Influencer Manager',
          level: 'Mid',
          status: 'Month 3',
          salary: { min: 12000, max: 18000 },
          equity: '0.2-0.3%',
          hireBy: 'Month 3',
          reports: 'CMO',
          directReports: 0,
          responsibilities: [
            'Influencer partnerships',
            'Campaign coordination',
            'Contract negotiation',
            'ROI tracking'
          ],
          requirements: [
            '3+ years influencer marketing',
            'UAE influencer network',
            'Negotiation skills',
            'Arabic preferred'
          ]
        },
        {
          title: 'Brand Manager',
          level: 'Mid-Senior',
          status: 'Month 5',
          salary: { min: 15000, max: 22000 },
          equity: '0.2-0.3%',
          hireBy: 'Month 5',
          reports: 'CMO',
          directReports: 1,
          responsibilities: [
            'Brand strategy',
            'Brand guidelines',
            'Agency management',
            'Brand campaigns'
          ],
          requirements: [
            '4+ years brand marketing',
            'Agency management',
            'Strategic thinking',
            'Creative direction'
          ]
        },
        {
          title: 'Community Manager',
          level: 'Mid',
          status: 'Month 5',
          salary: { min: 10000, max: 15000 },
          equity: '0.1-0.2%',
          hireBy: 'Month 5',
          reports: 'Content Lead',
          directReports: 0,
          responsibilities: [
            'Community engagement',
            'User support (social)',
            'UGC campaigns',
            'Ambassador program'
          ],
          requirements: [
            '2+ years community',
            'Arabic required',
            'Customer empathy',
            'Social native'
          ]
        },
        {
          title: 'Creative Designer',
          level: 'Mid-Senior',
          status: 'Month 7',
          salary: { min: 14000, max: 20000 },
          equity: '0.1-0.2%',
          hireBy: 'Month 7',
          reports: 'CMO/Brand',
          directReports: 0,
          responsibilities: [
            'Ad creative design',
            'Social content design',
            'Brand collateral',
            'Motion graphics'
          ],
          requirements: [
            '4+ years design',
            'Figma/Adobe expert',
            'Motion graphics',
            'Arabic typography'
          ]
        },
        {
          title: 'Marketing Coordinator',
          level: 'Junior',
          status: 'Month 3',
          salary: { min: 8000, max: 12000 },
          equity: '0.1%',
          hireBy: 'Month 3',
          reports: 'CMO',
          directReports: 0,
          responsibilities: [
            'Campaign coordination',
            'Vendor management',
            'Reporting support',
            'Admin tasks'
          ],
          requirements: [
            '1-2 years experience',
            'Organized',
            'Detail-oriented',
            'Proactive'
          ]
        },
        {
          title: 'PR Manager',
          level: 'Mid-Senior',
          status: 'Month 9',
          salary: { min: 15000, max: 22000 },
          equity: '0.2-0.3%',
          hireBy: 'Month 9',
          reports: 'CMO',
          directReports: 0,
          responsibilities: [
            'Media relations',
            'Press releases',
            'Crisis communications',
            'Thought leadership'
          ],
          requirements: [
            '4+ years PR',
            'UAE media connections',
            'Tech/startup PR',
            'Crisis experience'
          ]
        }
      ]
    },
    {
      id: 'sales',
      name: 'Sales & Business Dev',
      icon: ShoppingCart,
      color: 'green',
      budget: { monthly: 95000, annual: 1140000 },
      headcount: { current: 0, m3: 3, m6: 5, m12: 8 },
      roles: [
        {
          title: 'Sales Director',
          level: 'Director',
          status: 'Month 6',
          salary: { min: 25000, max: 35000 },
          equity: '1-2%',
          hireBy: 'Month 6',
          reports: 'CEO/COO',
          directReports: 7,
          responsibilities: [
            'Sales strategy',
            'Team leadership',
            'Key accounts',
            'Revenue targets',
            'Partnership deals'
          ],
          requirements: [
            '7+ years sales leadership',
            'B2B sales experience',
            'UAE retail connections',
            'Team building'
          ]
        },
        {
          title: 'Merchant Sales Lead',
          level: 'Senior',
          status: 'Hiring Now',
          salary: { min: 15000, max: 22000 },
          equity: '0.5-1%',
          hireBy: 'Month 1',
          reports: 'CEO (then Sales Dir)',
          directReports: 3,
          responsibilities: [
            'Merchant acquisition',
            'Sales process development',
            'Team training',
            'Pipeline management'
          ],
          requirements: [
            '4+ years B2B sales',
            'Retail/F&B connections',
            'Hunter mentality',
            'CRM proficiency'
          ]
        },
        {
          title: 'Sales Representative',
          level: 'Mid',
          status: 'Month 3',
          salary: { min: 10000, max: 15000 },
          equity: '0.1-0.2%',
          hireBy: 'Month 3',
          reports: 'Sales Lead',
          directReports: 0,
          responsibilities: [
            'Merchant outreach',
            'Sales presentations',
            'Deal closing',
            'Account setup'
          ],
          requirements: [
            '2+ years sales',
            'Good communication',
            'Target-driven',
            'Arabic preferred'
          ]
        },
        {
          title: 'Partnerships Manager',
          level: 'Mid-Senior',
          status: 'Month 9',
          salary: { min: 18000, max: 25000 },
          equity: '0.3-0.5%',
          hireBy: 'Month 9',
          reports: 'Sales Dir/CEO',
          directReports: 0,
          responsibilities: [
            'Strategic partnerships',
            'Brand deals',
            'Bank partnerships',
            'Enterprise accounts'
          ],
          requirements: [
            '5+ years BD',
            'Enterprise sales',
            'Partnership development',
            'C-level engagement'
          ]
        },
        {
          title: 'Regional Sales Manager (2)',
          level: 'Senior',
          status: 'Month 10-12',
          salary: { min: 18000, max: 24000 },
          equity: '0.2-0.3%',
          hireBy: 'Month 12',
          reports: 'Sales Director',
          directReports: 2,
          responsibilities: [
            'Regional sales targets',
            'Team management',
            'Key account management',
            'Territory expansion'
          ],
          requirements: [
            '5+ years sales',
            'Team management',
            'Regional expertise',
            'Growth mindset'
          ]
        }
      ]
    },
    {
      id: 'support',
      name: 'Customer Support',
      icon: Headphones,
      color: 'cyan',
      budget: { monthly: 55000, annual: 660000 },
      headcount: { current: 0, m3: 3, m6: 4, m12: 6 },
      roles: [
        {
          title: 'Customer Support Lead',
          level: 'Senior',
          status: 'Month 3',
          salary: { min: 12000, max: 18000 },
          equity: '0.3-0.5%',
          hireBy: 'Month 3',
          reports: 'Operations Manager',
          directReports: 5,
          responsibilities: [
            'Support team leadership',
            'Process development',
            'Quality assurance',
            'Escalation management',
            'Customer satisfaction'
          ],
          requirements: [
            '4+ years support',
            'Team leadership',
            'Bilingual',
            'App support experience'
          ]
        },
        {
          title: 'Customer Support Agent',
          level: 'Junior',
          status: 'Month 3',
          salary: { min: 6000, max: 9000 },
          equity: '0.05%',
          hireBy: 'Month 3',
          reports: 'Support Lead',
          directReports: 0,
          responsibilities: [
            'Customer inquiries',
            'Issue resolution',
            'App support',
            'Feedback collection'
          ],
          requirements: [
            '1+ year support',
            'Bilingual required',
            'Patient and empathetic',
            'Tech-savvy'
          ]
        },
        {
          title: 'Support Quality Analyst',
          level: 'Mid',
          status: 'Month 8',
          salary: { min: 10000, max: 14000 },
          equity: '0.1%',
          hireBy: 'Month 8',
          reports: 'Support Lead',
          directReports: 0,
          responsibilities: [
            'Quality monitoring',
            'CSAT tracking',
            'Training development',
            'Process improvement'
          ],
          requirements: [
            '2+ years QA',
            'Analytics skills',
            'Training experience',
            'Detail-oriented'
          ]
        }
      ]
    },
    {
      id: 'operations',
      name: 'Operations',
      icon: Settings,
      color: 'orange',
      budget: { monthly: 45000, annual: 540000 },
      headcount: { current: 0, m3: 2, m6: 3, m12: 4 },
      roles: [
        {
          title: 'Operations Manager',
          level: 'Senior',
          status: 'Hiring Now',
          salary: { min: 15000, max: 22000 },
          equity: '0.5-1%',
          hireBy: 'Month 1',
          reports: 'CEO (then COO)',
          directReports: 3,
          responsibilities: [
            'Daily operations',
            'Process development',
            'Vendor management',
            'Compliance',
            'Office management'
          ],
          requirements: [
            '5+ years operations',
            'Startup experience',
            'Process-oriented',
            'Multi-tasking ability'
          ]
        },
        {
          title: 'Operations Associate',
          level: 'Junior',
          status: 'Month 4',
          salary: { min: 7000, max: 10000 },
          equity: '0.05%',
          hireBy: 'Month 4',
          reports: 'Ops Manager',
          directReports: 0,
          responsibilities: [
            'Administrative support',
            'Data entry',
            'Coordination',
            'Documentation'
          ],
          requirements: [
            '1+ year experience',
            'Detail-oriented',
            'Excel proficiency',
            'Organized'
          ]
        },
        {
          title: 'Logistics Coordinator',
          level: 'Mid',
          status: 'Month 6',
          salary: { min: 10000, max: 14000 },
          equity: '0.1%',
          hireBy: 'Month 6',
          reports: 'Ops Manager',
          directReports: 0,
          responsibilities: [
            'Merchant onboarding logistics',
            'Material distribution',
            'Event coordination',
            'Inventory management'
          ],
          requirements: [
            '2+ years logistics',
            'UAE geography knowledge',
            'Problem-solver',
            'Reliable'
          ]
        }
      ]
    },
    {
      id: 'finance',
      name: 'Finance & HR',
      icon: DollarSign,
      color: 'yellow',
      budget: { monthly: 50000, annual: 600000 },
      headcount: { current: 0, m3: 1, m6: 2, m12: 4 },
      roles: [
        {
          title: 'Finance Manager',
          level: 'Senior',
          status: 'Month 5',
          salary: { min: 18000, max: 25000 },
          equity: '0.3-0.5%',
          hireBy: 'Month 5',
          reports: 'CEO (then CFO)',
          directReports: 1,
          responsibilities: [
            'Financial operations',
            'Budgeting and forecasting',
            'Accounts payable/receivable',
            'Reporting',
            'Audit preparation'
          ],
          requirements: [
            '5+ years finance',
            'UAE accounting standards',
            'Startup experience',
            'CPA/ACCA preferred'
          ]
        },
        {
          title: 'Accountant',
          level: 'Mid',
          status: 'Month 7',
          salary: { min: 10000, max: 15000 },
          equity: '0.1%',
          hireBy: 'Month 7',
          reports: 'Finance Manager',
          directReports: 0,
          responsibilities: [
            'Day-to-day accounting',
            'Invoicing',
            'Bank reconciliation',
            'Expense processing'
          ],
          requirements: [
            '3+ years accounting',
            'UAE experience',
            'Accounting software',
            'Attention to detail'
          ]
        },
        {
          title: 'HR Manager',
          level: 'Senior',
          status: 'Month 6',
          salary: { min: 15000, max: 22000 },
          equity: '0.3-0.5%',
          hireBy: 'Month 6',
          reports: 'CEO (then COO)',
          directReports: 1,
          responsibilities: [
            'Recruitment',
            'Onboarding',
            'Employee relations',
            'Performance management',
            'HR policies'
          ],
          requirements: [
            '5+ years HR',
            'UAE labor law',
            'Startup experience',
            'Strong interpersonal skills'
          ]
        },
        {
          title: 'Office Admin',
          level: 'Junior',
          status: 'Month 3',
          salary: { min: 6000, max: 9000 },
          equity: '0.05%',
          hireBy: 'Month 3',
          reports: 'Ops Manager',
          directReports: 0,
          responsibilities: [
            'Office management',
            'Reception',
            'Supplies ordering',
            'Visitor management'
          ],
          requirements: [
            '1+ year admin',
            'Organized',
            'Professional',
            'Bilingual preferred'
          ]
        }
      ]
    },
    {
      id: 'analytics',
      name: 'Analytics & Product',
      icon: BarChart3,
      color: 'indigo',
      budget: { monthly: 45000, annual: 540000 },
      headcount: { current: 0, m3: 0, m6: 2, m12: 3 },
      roles: [
        {
          title: 'Product Manager',
          level: 'Senior',
          status: 'Month 9',
          salary: { min: 22000, max: 30000 },
          equity: '0.5-1%',
          hireBy: 'Month 9',
          reports: 'CEO/CTO',
          directReports: 2,
          responsibilities: [
            'Product roadmap',
            'Feature prioritization',
            'User research',
            'Sprint planning',
            'Stakeholder management'
          ],
          requirements: [
            '5+ years product',
            'Mobile app PM',
            'Consumer tech',
            'Data-driven'
          ]
        },
        {
          title: 'Data Analyst',
          level: 'Mid-Senior',
          status: 'Month 6',
          salary: { min: 14000, max: 20000 },
          equity: '0.2-0.3%',
          hireBy: 'Month 6',
          reports: 'CMO/Product',
          directReports: 0,
          responsibilities: [
            'Marketing analytics',
            'Dashboard development',
            'Insights and recommendations',
            'A/B test analysis'
          ],
          requirements: [
            '3+ years analytics',
            'SQL expert',
            'BI tools',
            'Marketing analytics'
          ]
        },
        {
          title: 'Business Analyst',
          level: 'Mid',
          status: 'Month 10',
          salary: { min: 12000, max: 18000 },
          equity: '0.1-0.2%',
          hireBy: 'Month 10',
          reports: 'Product Manager',
          directReports: 0,
          responsibilities: [
            'Business requirements',
            'Process mapping',
            'Competitive analysis',
            'Reporting'
          ],
          requirements: [
            '2+ years BA',
            'Requirements gathering',
            'Strong communication',
            'Analytical mindset'
          ]
        }
      ]
    }
  ];

  const totalHeadcount = departments.reduce((sum, d) => sum + d.headcount.m12, 0);
  const totalBudget = departments.reduce((sum, d) => sum + d.budget.annual, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Header */}
      <div className="bg-gray-900/80 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-white">Team Planning & Org Chart</h1>
              </div>
              <p className="text-blue-300 ml-14">
                Complete organizational structure with 50 roles across 8 departments
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('chart')}
                className={`px-4 py-2 rounded-lg text-sm ${viewMode === 'chart' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
              >
                By Department
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-lg text-sm ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
              >
                All Roles
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800/60 rounded-xl p-4 border border-blue-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 text-sm">Total Headcount</span>
            </div>
            <p className="text-2xl font-bold text-white">{totalHeadcount} People</p>
            <p className="text-gray-400 text-xs">8 departments</p>
          </div>
          <div className="bg-gray-800/60 rounded-xl p-4 border border-green-500/30">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-green-400" />
              <span className="text-green-400 text-sm">Annual Payroll</span>
            </div>
            <p className="text-2xl font-bold text-white">AED {(totalBudget / 1000000).toFixed(1)}M</p>
            <p className="text-gray-400 text-xs">At full scale</p>
          </div>
          <div className="bg-gray-800/60 rounded-xl p-4 border border-purple-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Crown className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 text-sm">C-Level</span>
            </div>
            <p className="text-2xl font-bold text-white">5 Executives</p>
            <p className="text-gray-400 text-xs">CEO, COO, CTO, CMO, CFO</p>
          </div>
          <div className="bg-gray-800/60 rounded-xl p-4 border border-orange-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 text-orange-400" />
              <span className="text-orange-400 text-sm">ESOP Pool</span>
            </div>
            <p className="text-2xl font-bold text-white">15-20%</p>
            <p className="text-gray-400 text-xs">For team</p>
          </div>
        </div>

        {/* Department Cards */}
        {viewMode === 'chart' && (
          <div className="space-y-4">
            {departments.map((dept) => {
              const Icon = dept.icon;
              return (
                <div key={dept.id} className="bg-gray-800/40 rounded-2xl border border-blue-500/20 overflow-hidden">
                  <button
                    onClick={() => setExpandedDept(expandedDept === dept.id ? null : dept.id)}
                    className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 bg-${dept.color}-600/20 rounded-xl`}>
                        <Icon className={`w-6 h-6 text-${dept.color}-400`} />
                      </div>
                      <div className="text-left">
                        <h3 className="text-white font-semibold text-lg">{dept.name}</h3>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-gray-400">M12: {dept.headcount.m12} people</span>
                          <span className="text-green-400">AED {(dept.budget.monthly / 1000).toFixed(0)}K/mo</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="flex gap-2">
                          <span className="text-xs bg-gray-600 text-gray-200 px-2 py-1 rounded">M3: {dept.headcount.m3}</span>
                          <span className="text-xs bg-gray-600 text-gray-200 px-2 py-1 rounded">M6: {dept.headcount.m6}</span>
                          <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">M12: {dept.headcount.m12}</span>
                        </div>
                      </div>
                      {expandedDept === dept.id ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                    </div>
                  </button>

                  {expandedDept === dept.id && (
                    <div className="p-6 pt-0">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left">
                          <thead>
                            <tr className="border-b border-gray-700">
                              <th className="py-3 px-4 text-gray-400 font-medium">Role</th>
                              <th className="py-3 px-4 text-gray-400 font-medium">Level</th>
                              <th className="py-3 px-4 text-gray-400 font-medium">Status</th>
                              <th className="py-3 px-4 text-gray-400 font-medium">Salary (AED)</th>
                              <th className="py-3 px-4 text-gray-400 font-medium">Equity</th>
                              <th className="py-3 px-4 text-gray-400 font-medium">Reports To</th>
                            </tr>
                          </thead>
                          <tbody>
                            {dept.roles.map((role, idx) => (
                              <tr key={idx} className="border-b border-gray-700/50 hover:bg-gray-800/30">
                                <td className="py-3 px-4">
                                  <p className="text-white font-medium">{role.title}</p>
                                  <p className="text-gray-500 text-xs">Manages: {role.directReports}</p>
                                </td>
                                <td className="py-3 px-4">
                                  <span className={`text-xs px-2 py-1 rounded ${
                                    role.level === 'C-Level' ? 'bg-purple-600 text-white' :
                                    role.level === 'Director' ? 'bg-blue-600 text-white' :
                                    role.level === 'Senior' ? 'bg-green-600 text-white' :
                                    role.level === 'Mid' || role.level === 'Mid-Senior' ? 'bg-yellow-600 text-black' :
                                    'bg-gray-600 text-gray-200'
                                  }`}>{role.level}</span>
                                </td>
                                <td className="py-3 px-4">
                                  <span className={`text-xs px-2 py-1 rounded ${
                                    role.status === 'Filled' ? 'bg-green-600 text-white' :
                                    role.status === 'Hiring Now' ? 'bg-red-600 text-white' :
                                    'bg-gray-600 text-gray-200'
                                  }`}>{role.status}</span>
                                </td>
                                <td className="py-3 px-4 text-green-400">
                                  {role.salary.min.toLocaleString()} - {role.salary.max.toLocaleString()}
                                </td>
                                <td className="py-3 px-4 text-purple-400">{role.equity}</td>
                                <td className="py-3 px-4 text-gray-300">{role.reports}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* All Roles List View */}
        {viewMode === 'list' && (
          <div className="bg-gray-800/40 rounded-2xl border border-blue-500/20 p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-3 px-4 text-gray-400 font-medium">Role</th>
                    <th className="py-3 px-4 text-gray-400 font-medium">Department</th>
                    <th className="py-3 px-4 text-gray-400 font-medium">Level</th>
                    <th className="py-3 px-4 text-gray-400 font-medium">Hire By</th>
                    <th className="py-3 px-4 text-gray-400 font-medium">Salary (AED)</th>
                    <th className="py-3 px-4 text-gray-400 font-medium">Equity</th>
                    <th className="py-3 px-4 text-gray-400 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {departments.flatMap(dept =>
                    dept.roles.map((role, idx) => (
                      <tr key={`${dept.id}-${idx}`} className="border-b border-gray-700/50 hover:bg-gray-800/30">
                        <td className="py-3 px-4 text-white font-medium">{role.title}</td>
                        <td className="py-3 px-4 text-gray-300">{dept.name}</td>
                        <td className="py-3 px-4">
                          <span className={`text-xs px-2 py-1 rounded ${
                            role.level === 'C-Level' ? 'bg-purple-600 text-white' :
                            role.level === 'Director' ? 'bg-blue-600 text-white' :
                            role.level === 'Senior' ? 'bg-green-600 text-white' :
                            role.level === 'Mid' || role.level === 'Mid-Senior' ? 'bg-yellow-600 text-black' :
                            'bg-gray-600 text-gray-200'
                          }`}>{role.level}</span>
                        </td>
                        <td className="py-3 px-4 text-gray-300">{role.hireBy}</td>
                        <td className="py-3 px-4 text-green-400">{role.salary.min.toLocaleString()}-{role.salary.max.toLocaleString()}</td>
                        <td className="py-3 px-4 text-purple-400">{role.equity}</td>
                        <td className="py-3 px-4">
                          <span className={`text-xs px-2 py-1 rounded ${
                            role.status === 'Filled' ? 'bg-green-600 text-white' :
                            role.status === 'Hiring Now' ? 'bg-red-600 text-white' :
                            'bg-gray-600 text-gray-200'
                          }`}>{role.status}</span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Org Chart Visual */}
        <div className="mt-8 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl border border-blue-500/30 p-6">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Organization Chart (Year 1)</h3>

          {/* CEO Level */}
          <div className="flex justify-center mb-8">
            <div className="bg-purple-600 rounded-xl px-6 py-3 text-center">
              <p className="text-white font-bold">CEO</p>
              <p className="text-purple-200 text-xs">Founder</p>
            </div>
          </div>

          {/* C-Suite Level */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            <div className="bg-blue-600 rounded-xl px-4 py-2 text-center">
              <p className="text-white font-medium">CTO</p>
              <p className="text-blue-200 text-xs">10 reports</p>
            </div>
            <div className="bg-pink-600 rounded-xl px-4 py-2 text-center">
              <p className="text-white font-medium">CMO</p>
              <p className="text-pink-200 text-xs">10 reports</p>
            </div>
            <div className="bg-orange-600 rounded-xl px-4 py-2 text-center">
              <p className="text-white font-medium">COO</p>
              <p className="text-orange-200 text-xs">M9 hire</p>
            </div>
            <div className="bg-yellow-600 rounded-xl px-4 py-2 text-center">
              <p className="text-black font-medium">CFO</p>
              <p className="text-yellow-800 text-xs">Fractional</p>
            </div>
          </div>

          {/* Department Heads */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
            {departments.map(dept => (
              <div key={dept.id} className={`bg-gray-800/80 rounded-lg p-3 text-center border border-${dept.color}-500/30`}>
                <p className="text-white text-sm font-medium truncate">{dept.name}</p>
                <p className="text-gray-400 text-xs">{dept.headcount.m12} people</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <GlobalFooter />
    </div>
  );
}
