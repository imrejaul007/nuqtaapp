'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Users,
  Crown,
  Settings,
  Megaphone,
  Heart,
  Calculator,
  Code,
  ChevronDown,
  ChevronRight,
  CheckCircle,
  Clock,
  AlertCircle,
  UserPlus,
  Building2,
  TrendingUp,
  Headphones,
  HandshakeIcon,
  Briefcase,
  Target,
  BarChart3,
  Shield,
  Globe,
  Zap,
  Mail,
  Phone,
  Linkedin,
  ExternalLink,
  Layers,
  Network,
  FileText,
  Palette,
  Video,
  PenTool,
  Database,
  Smartphone,
  Wallet,
  GraduationCap,
  ClipboardList,
  Scale,
  MessageSquare,
  Award
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// =============================================
// NUQTA COMPANY STRUCTURE - COMPREHENSIVE VIEW
// =============================================

interface TeamMember {
  name: string;
  role: string;
  status: 'filled' | 'hiring' | 'planned';
  priority?: 'critical' | 'high' | 'medium' | 'low';
  linkedin?: string;
  email?: string;
  description?: string;
}

interface SubTeam {
  name: string;
  icon: React.ElementType;
  color: string;
  lead?: TeamMember;
  members: TeamMember[];
  responsibilities: string[];
  kpis: string[];
}

interface CLevel {
  title: string;
  shortTitle: string;
  name: string;
  status: 'filled' | 'hiring' | 'planned';
  icon: React.ElementType;
  color: string;
  description: string;
  link: string;
  subTeams: SubTeam[];
}

// Complete C-Suite Structure with Sub-Teams
const cSuiteStructure: CLevel[] = [
  {
    title: 'Chief Executive Officer',
    shortTitle: 'CEO',
    name: 'Rejaul Karim',
    status: 'filled',
    icon: Crown,
    color: 'amber',
    description: 'Vision, Strategy & Fundraising',
    link: '/ceo-report',
    subTeams: [
      {
        name: 'Executive Office',
        icon: Briefcase,
        color: 'amber',
        lead: { name: 'TBD', role: 'Chief of Staff', status: 'planned', priority: 'high' },
        members: [
          { name: 'TBD', role: 'Executive Assistant', status: 'planned', priority: 'medium' },
          { name: 'TBD', role: 'Board Secretary', status: 'planned', priority: 'low' }
        ],
        responsibilities: [
          'CEO calendar and meeting management',
          'Board meeting coordination',
          'Investor relations support',
          'Strategic initiative tracking',
          'Executive communications'
        ],
        kpis: ['CEO time optimization', 'Meeting efficiency', 'Investor response time']
      },
      {
        name: 'Strategy & Planning',
        icon: Target,
        color: 'purple',
        lead: { name: 'TBD', role: 'Head of Strategy', status: 'planned', priority: 'medium' },
        members: [
          { name: 'TBD', role: 'Strategy Analyst', status: 'planned', priority: 'low' },
          { name: 'TBD', role: 'Business Intelligence', status: 'planned', priority: 'low' }
        ],
        responsibilities: [
          'Market research and competitive analysis',
          'Strategic planning and OKR management',
          'Business model optimization',
          'M&A research and due diligence',
          'Board deck preparation'
        ],
        kpis: ['OKR achievement rate', 'Strategic initiative completion', 'Market intelligence quality']
      }
    ]
  },
  {
    title: 'Chief Technology Officer',
    shortTitle: 'CTO',
    name: 'TBD',
    status: 'filled',
    icon: Code,
    color: 'cyan',
    description: 'Product & Engineering',
    link: '/cto-report',
    subTeams: [
      {
        name: 'Product Team',
        icon: Layers,
        color: 'indigo',
        lead: { name: 'TBD', role: 'Head of Product', status: 'hiring', priority: 'critical' },
        members: [
          { name: 'TBD', role: 'Senior Product Manager', status: 'hiring', priority: 'high' },
          { name: 'TBD', role: 'Product Designer (UX)', status: 'hiring', priority: 'high' },
          { name: 'TBD', role: 'Product Analyst', status: 'planned', priority: 'medium' }
        ],
        responsibilities: [
          'Product roadmap and prioritization',
          'User research and testing',
          'Feature specification and PRDs',
          'Product analytics and insights',
          'Cross-functional coordination'
        ],
        kpis: ['Feature delivery rate', 'User satisfaction (CSAT)', 'Time-to-market']
      },
      {
        name: 'Engineering Team',
        icon: Code,
        color: 'cyan',
        lead: { name: 'TBD', role: 'Lead Full-Stack Engineer', status: 'hiring', priority: 'critical' },
        members: [
          { name: 'TBD', role: 'Senior Mobile Engineer (iOS/Android)', status: 'hiring', priority: 'high' },
          { name: 'TBD', role: 'Backend Engineer', status: 'hiring', priority: 'high' },
          { name: 'TBD', role: 'Frontend Engineer', status: 'planned', priority: 'medium' },
          { name: 'TBD', role: 'QA Engineer', status: 'planned', priority: 'medium' }
        ],
        responsibilities: [
          'App development (React Native)',
          'Backend services (Node.js/Python)',
          'Database management (PostgreSQL)',
          'API development and integrations',
          'Code quality and testing'
        ],
        kpis: ['Sprint velocity', 'Code quality score', 'Bug resolution time', 'Uptime %']
      },
      {
        name: 'Design Team',
        icon: Palette,
        color: 'pink',
        lead: { name: 'TBD', role: 'UI/UX Designer', status: 'hiring', priority: 'high' },
        members: [
          { name: 'TBD', role: 'Visual Designer', status: 'planned', priority: 'medium' },
          { name: 'TBD', role: 'Motion Designer', status: 'planned', priority: 'low' }
        ],
        responsibilities: [
          'User interface design',
          'User experience research',
          'Design system maintenance',
          'Prototyping and wireframing',
          'Brand consistency across product'
        ],
        kpis: ['Design-to-dev handoff quality', 'User testing success rate', 'Design system adoption']
      },
      {
        name: 'Data & Infrastructure',
        icon: Database,
        color: 'slate',
        lead: { name: 'TBD', role: 'DevOps Engineer', status: 'planned', priority: 'medium' },
        members: [
          { name: 'TBD', role: 'Data Engineer', status: 'planned', priority: 'medium' },
          { name: 'TBD', role: 'Security Engineer', status: 'planned', priority: 'low' }
        ],
        responsibilities: [
          'Cloud infrastructure (AWS/GCP)',
          'CI/CD pipeline management',
          'Database optimization',
          'Security and compliance',
          'Monitoring and alerting'
        ],
        kpis: ['System uptime', 'Deployment frequency', 'Security incidents']
      }
    ]
  },
  {
    title: 'Chief Operating Officer',
    shortTitle: 'COO',
    name: 'Gyandeep Bordoloi',
    status: 'filled',
    icon: Settings,
    color: 'emerald',
    description: 'Operations & Execution',
    link: '/coo-report',
    subTeams: [
      {
        name: 'Merchant Success',
        icon: HandshakeIcon,
        color: 'emerald',
        lead: { name: 'TBD', role: 'Head of Merchant Partnerships', status: 'hiring', priority: 'critical' },
        members: [
          { name: 'TBD', role: 'Merchant Success Manager', status: 'hiring', priority: 'high' },
          { name: 'TBD', role: 'Merchant Onboarding Specialist', status: 'hiring', priority: 'high' },
          { name: 'TBD', role: 'Business Development Rep', status: 'planned', priority: 'medium' },
          { name: 'TBD', role: 'Key Account Manager', status: 'planned', priority: 'medium' }
        ],
        responsibilities: [
          'Merchant acquisition and onboarding',
          'Merchant training and support',
          'Partnership negotiations',
          'Merchant retention programs',
          'Deal structure optimization'
        ],
        kpis: ['Merchants onboarded/month', 'Merchant retention rate', 'Merchant NPS', 'Revenue per merchant']
      },
      {
        name: 'Customer Support',
        icon: Headphones,
        color: 'purple',
        lead: { name: 'TBD', role: 'Customer Support Lead', status: 'planned', priority: 'high' },
        members: [
          { name: 'TBD', role: 'Support Specialist (User)', status: 'planned', priority: 'medium' },
          { name: 'TBD', role: 'Support Specialist (Merchant)', status: 'planned', priority: 'medium' },
          { name: 'TBD', role: 'Support Operations', status: 'planned', priority: 'low' }
        ],
        responsibilities: [
          'User support (in-app, email, WhatsApp)',
          'Merchant support hotline',
          'Issue resolution and escalation',
          'Knowledge base management',
          'Support quality assurance'
        ],
        kpis: ['First response time', 'Resolution time', 'Customer satisfaction (CSAT)', 'Ticket volume']
      },
      {
        name: 'Operations',
        icon: Building2,
        color: 'slate',
        lead: { name: 'TBD', role: 'Operations Manager', status: 'planned', priority: 'medium' },
        members: [
          { name: 'TBD', role: 'Office Manager', status: 'planned', priority: 'low' },
          { name: 'TBD', role: 'Facilities Coordinator', status: 'planned', priority: 'low' }
        ],
        responsibilities: [
          'Office management and facilities',
          'Vendor management',
          'Process optimization',
          'Operational reporting',
          'Cross-functional coordination'
        ],
        kpis: ['Operational efficiency', 'Process improvement initiatives', 'Cost optimization']
      },
      {
        name: 'Legal & Compliance',
        icon: Scale,
        color: 'blue',
        lead: { name: 'TBD', role: 'Legal & Compliance Manager', status: 'planned', priority: 'high' },
        members: [
          { name: 'TBD', role: 'Compliance Officer', status: 'planned', priority: 'medium' },
          { name: 'TBD', role: 'Legal Coordinator', status: 'planned', priority: 'low' }
        ],
        responsibilities: [
          'Legal documentation and contracts',
          'Regulatory compliance (CBUAE)',
          'Data privacy (PDPL)',
          'Merchant agreements',
          'Risk management'
        ],
        kpis: ['Compliance audit score', 'Contract turnaround time', 'Legal risk incidents']
      }
    ]
  },
  {
    title: 'Chief Marketing Officer',
    shortTitle: 'CMO',
    name: 'Sarbajit Bhatacharjee',
    status: 'filled',
    icon: Megaphone,
    color: 'orange',
    description: 'Marketing & Growth',
    link: '/cmo-report',
    subTeams: [
      {
        name: 'Growth Team',
        icon: TrendingUp,
        color: 'pink',
        lead: { name: 'TBD', role: 'Head of Growth', status: 'hiring', priority: 'critical' },
        members: [
          { name: 'TBD', role: 'Growth Analyst', status: 'hiring', priority: 'high' },
          { name: 'TBD', role: 'Lifecycle Marketing Manager', status: 'planned', priority: 'medium' },
          { name: 'TBD', role: 'Referral Program Manager', status: 'planned', priority: 'medium' }
        ],
        responsibilities: [
          'User acquisition strategy',
          'Retention and engagement programs',
          'Growth experimentation (A/B testing)',
          'Referral and viral loops',
          'User lifecycle optimization'
        ],
        kpis: ['MAU growth', 'D30 retention', 'Viral coefficient', 'CAC', 'LTV']
      },
      {
        name: 'Content & Social',
        icon: PenTool,
        color: 'blue',
        lead: { name: 'TBD', role: 'Content & Social Media Manager', status: 'hiring', priority: 'high' },
        members: [
          { name: 'TBD', role: 'Social Media Specialist', status: 'planned', priority: 'medium' },
          { name: 'TBD', role: 'Content Writer', status: 'planned', priority: 'medium' },
          { name: 'TBD', role: 'Community Manager', status: 'planned', priority: 'medium' }
        ],
        responsibilities: [
          'Social media strategy and execution',
          'Content creation (blog, social, email)',
          'Community management',
          'Influencer partnerships',
          'Brand voice and tone'
        ],
        kpis: ['Social engagement rate', 'Follower growth', 'Content performance', 'Share of voice']
      },
      {
        name: 'Creative Team',
        icon: Palette,
        color: 'purple',
        lead: { name: 'TBD', role: 'Creative Designer', status: 'hiring', priority: 'high' },
        members: [
          { name: 'TBD', role: 'Video Content Creator', status: 'planned', priority: 'medium' },
          { name: 'TBD', role: 'Graphic Designer', status: 'planned', priority: 'medium' },
          { name: 'TBD', role: 'Motion Graphics Designer', status: 'planned', priority: 'low' }
        ],
        responsibilities: [
          'Visual design for all channels',
          'Video production and editing',
          'Brand identity management',
          'Marketing collateral',
          'Ad creative development'
        ],
        kpis: ['Creative turnaround time', 'Ad performance (CTR)', 'Brand consistency score']
      },
      {
        name: 'Performance Marketing',
        icon: BarChart3,
        color: 'green',
        lead: { name: 'TBD', role: 'Performance Marketing Manager', status: 'planned', priority: 'high' },
        members: [
          { name: 'TBD', role: 'Paid Social Specialist', status: 'planned', priority: 'medium' },
          { name: 'TBD', role: 'SEO/ASO Specialist', status: 'planned', priority: 'medium' }
        ],
        responsibilities: [
          'Paid acquisition (Meta, Google, TikTok)',
          'Campaign optimization',
          'Budget allocation and ROAS',
          'App store optimization (ASO)',
          'Marketing analytics'
        ],
        kpis: ['ROAS', 'CPI (Cost per Install)', 'CAC', 'Campaign efficiency']
      },
      {
        name: 'PR & Communications',
        icon: MessageSquare,
        color: 'teal',
        lead: { name: 'TBD', role: 'PR & Communications Manager', status: 'planned', priority: 'medium' },
        members: [
          { name: 'TBD', role: 'PR Specialist', status: 'planned', priority: 'low' }
        ],
        responsibilities: [
          'Media relations and press releases',
          'Thought leadership positioning',
          'Crisis communications',
          'Award submissions',
          'External communications'
        ],
        kpis: ['Media mentions', 'Share of voice', 'PR value', 'Sentiment score']
      }
    ]
  },
  {
    title: 'Chief Human Resources Officer',
    shortTitle: 'CHRO',
    name: 'TBD',
    status: 'filled',
    icon: Heart,
    color: 'rose',
    description: 'People & Culture',
    link: '/chro-report',
    subTeams: [
      {
        name: 'Talent Acquisition',
        icon: UserPlus,
        color: 'violet',
        lead: { name: 'TBD', role: 'Talent Acquisition Manager', status: 'hiring', priority: 'high' },
        members: [
          { name: 'TBD', role: 'Technical Recruiter', status: 'planned', priority: 'medium' },
          { name: 'TBD', role: 'Recruiter (GTM)', status: 'planned', priority: 'medium' }
        ],
        responsibilities: [
          'Full-cycle recruiting',
          'Employer branding',
          'Candidate experience',
          'Hiring pipeline management',
          'Interview process design'
        ],
        kpis: ['Time-to-hire', 'Offer acceptance rate', 'Quality of hire', 'Hiring plan achievement']
      },
      {
        name: 'People Operations',
        icon: ClipboardList,
        color: 'pink',
        lead: { name: 'TBD', role: 'HR Operations Manager', status: 'planned', priority: 'medium' },
        members: [
          { name: 'TBD', role: 'HR Coordinator', status: 'planned', priority: 'medium' },
          { name: 'TBD', role: 'Payroll & Benefits Specialist', status: 'planned', priority: 'low' }
        ],
        responsibilities: [
          'Onboarding and offboarding',
          'Payroll and benefits administration',
          'HR systems and data',
          'Policy documentation',
          'Compliance (labor law)'
        ],
        kpis: ['Onboarding satisfaction', 'Payroll accuracy', 'HR ticket resolution time']
      },
      {
        name: 'Learning & Development',
        icon: GraduationCap,
        color: 'indigo',
        lead: { name: 'TBD', role: 'L&D Manager', status: 'planned', priority: 'medium' },
        members: [
          { name: 'TBD', role: 'Training Specialist', status: 'planned', priority: 'low' }
        ],
        responsibilities: [
          'Training program design',
          'Leadership development',
          'Skill gap analysis',
          'Career pathing',
          'Performance management'
        ],
        kpis: ['Training completion rate', 'Skill development score', 'Internal promotion rate']
      },
      {
        name: 'Culture & Engagement',
        icon: Award,
        color: 'amber',
        lead: { name: 'TBD', role: 'HR Business Partner', status: 'planned', priority: 'medium' },
        members: [
          { name: 'TBD', role: 'Culture & Events Coordinator', status: 'planned', priority: 'low' }
        ],
        responsibilities: [
          'Employee engagement programs',
          'Culture initiatives',
          'Team events and celebrations',
          'Recognition programs',
          'Employee feedback systems'
        ],
        kpis: ['eNPS', 'Employee satisfaction', 'Retention rate', 'Engagement score']
      }
    ]
  },
  {
    title: 'Chief Financial Officer',
    shortTitle: 'CFO',
    name: 'TBD',
    status: 'planned',
    icon: Calculator,
    color: 'blue',
    description: 'Finance & Treasury',
    link: '/cfo-report',
    subTeams: [
      {
        name: 'Finance Team',
        icon: Calculator,
        color: 'blue',
        lead: { name: 'TBD', role: 'Finance Manager', status: 'planned', priority: 'high' },
        members: [
          { name: 'TBD', role: 'Senior Accountant', status: 'planned', priority: 'medium' },
          { name: 'TBD', role: 'Financial Analyst', status: 'planned', priority: 'medium' },
          { name: 'TBD', role: 'Accounts Payable/Receivable', status: 'planned', priority: 'low' }
        ],
        responsibilities: [
          'Financial reporting and analysis',
          'Budgeting and forecasting',
          'Accounts payable/receivable',
          'Monthly close process',
          'Audit preparation'
        ],
        kpis: ['Reporting accuracy', 'Close time', 'Budget variance', 'Cash forecasting accuracy']
      },
      {
        name: 'Treasury & Payments',
        icon: Wallet,
        color: 'green',
        lead: { name: 'TBD', role: 'Treasury Manager', status: 'planned', priority: 'medium' },
        members: [
          { name: 'TBD', role: 'Billing & Collections Specialist', status: 'planned', priority: 'medium' },
          { name: 'TBD', role: 'Payment Operations', status: 'planned', priority: 'low' }
        ],
        responsibilities: [
          'Cash management and optimization',
          'Merchant settlements',
          'User coin redemptions',
          'Bank relationships',
          'Float management'
        ],
        kpis: ['Cash position accuracy', 'Settlement time', 'Float optimization', 'Payment error rate']
      },
      {
        name: 'FP&A',
        icon: BarChart3,
        color: 'purple',
        lead: { name: 'TBD', role: 'FP&A Manager', status: 'planned', priority: 'medium' },
        members: [
          { name: 'TBD', role: 'Business Analyst', status: 'planned', priority: 'low' }
        ],
        responsibilities: [
          'Financial modeling',
          'Scenario planning',
          'Unit economics tracking',
          'Investor reporting',
          'Strategic finance support'
        ],
        kpis: ['Model accuracy', 'LTV:CAC tracking', 'Runway forecasting', 'Investor deck quality']
      }
    ]
  }
];

// Status badge component
const StatusBadge = ({ status, priority }: { status: string; priority?: string }) => {
  if (status === 'filled') {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
        <CheckCircle className="w-3 h-3" /> Active
      </span>
    );
  }
  if (status === 'hiring') {
    if (priority === 'critical') {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-red-500/20 text-red-400 border border-red-500/30 animate-pulse">
          <AlertCircle className="w-3 h-3" /> Critical
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-amber-500/20 text-amber-400 border border-amber-500/30">
        <UserPlus className="w-3 h-3" /> Hiring
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-slate-500/20 text-slate-400 border border-slate-500/30">
      <Clock className="w-3 h-3" /> Planned
    </span>
  );
};

// Sub-team card component
const SubTeamCard = ({ team, isExpanded, onToggle }: { team: SubTeam; isExpanded: boolean; onToggle: () => void }) => {
  const Icon = team.icon;
  const colorClasses: Record<string, string> = {
    amber: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    cyan: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
    emerald: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    orange: 'bg-orange-500/10 border-orange-500/30 text-orange-400',
    rose: 'bg-rose-500/10 border-rose-500/30 text-rose-400',
    blue: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    purple: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
    pink: 'bg-pink-500/10 border-pink-500/30 text-pink-400',
    indigo: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400',
    slate: 'bg-slate-500/10 border-slate-500/30 text-slate-400',
    green: 'bg-green-500/10 border-green-500/30 text-green-400',
    teal: 'bg-teal-500/10 border-teal-500/30 text-teal-400',
    violet: 'bg-violet-500/10 border-violet-500/30 text-violet-400'
  };

  const totalMembers = (team.lead ? 1 : 0) + team.members.length;
  const filledCount = [team.lead, ...team.members].filter(m => m?.status === 'filled').length;
  const hiringCount = [team.lead, ...team.members].filter(m => m?.status === 'hiring').length;

  return (
    <div className={`rounded-xl border ${colorClasses[team.color] || colorClasses.slate}`}>
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors rounded-xl"
      >
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorClasses[team.color] || colorClasses.slate}`}>
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold text-white">{team.name}</h4>
            <p className="text-xs text-slate-400">
              {filledCount}/{totalMembers} filled
              {hiringCount > 0 && <span className="text-amber-400"> ({hiringCount} hiring)</span>}
            </p>
          </div>
        </div>
        {isExpanded ? <ChevronDown className="w-5 h-5 text-slate-400" /> : <ChevronRight className="w-5 h-5 text-slate-400" />}
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 space-y-4">
          {/* Team Lead */}
          {team.lead && (
            <div className="bg-white/5 rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-slate-500 uppercase tracking-wider">Team Lead</span>
                <StatusBadge status={team.lead.status} priority={team.lead.priority} />
              </div>
              <p className="font-medium text-white">{team.lead.role}</p>
              {team.lead.status === 'filled' && <p className="text-sm text-slate-400">{team.lead.name}</p>}
            </div>
          )}

          {/* Team Members */}
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Team Members</p>
            <div className="space-y-2">
              {team.members.map((member, idx) => (
                <div key={idx} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                  <div>
                    <p className="text-sm text-white">{member.role}</p>
                    {member.status === 'filled' && <p className="text-xs text-slate-400">{member.name}</p>}
                  </div>
                  <StatusBadge status={member.status} priority={member.priority} />
                </div>
              ))}
            </div>
          </div>

          {/* Responsibilities */}
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Key Responsibilities</p>
            <ul className="space-y-1">
              {team.responsibilities.slice(0, 3).map((resp, idx) => (
                <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                  <CheckCircle className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                  {resp}
                </li>
              ))}
            </ul>
          </div>

          {/* KPIs */}
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Key Metrics</p>
            <div className="flex flex-wrap gap-2">
              {team.kpis.map((kpi, idx) => (
                <span key={idx} className="text-xs px-2 py-1 bg-white/5 rounded text-slate-300">
                  {kpi}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// C-Level Section Component
const CLevelSection = ({ cLevel }: { cLevel: CLevel }) => {
  const [expandedTeams, setExpandedTeams] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = cLevel.icon;

  const colorClasses: Record<string, string> = {
    amber: 'from-amber-500/20 to-amber-500/5 border-amber-500/30',
    cyan: 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/30',
    emerald: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/30',
    orange: 'from-orange-500/20 to-orange-500/5 border-orange-500/30',
    rose: 'from-rose-500/20 to-rose-500/5 border-rose-500/30',
    blue: 'from-blue-500/20 to-blue-500/5 border-blue-500/30'
  };

  const iconColorClasses: Record<string, string> = {
    amber: 'text-amber-400 bg-amber-500/20',
    cyan: 'text-cyan-400 bg-cyan-500/20',
    emerald: 'text-emerald-400 bg-emerald-500/20',
    orange: 'text-orange-400 bg-orange-500/20',
    rose: 'text-rose-400 bg-rose-500/20',
    blue: 'text-blue-400 bg-blue-500/20'
  };

  const toggleTeam = (teamName: string) => {
    setExpandedTeams(prev =>
      prev.includes(teamName)
        ? prev.filter(t => t !== teamName)
        : [...prev, teamName]
    );
  };

  // Calculate totals
  const totalMembers = cLevel.subTeams.reduce((acc, team) => {
    return acc + (team.lead ? 1 : 0) + team.members.length;
  }, 0);

  const filledCount = cLevel.subTeams.reduce((acc, team) => {
    const teamFilled = [team.lead, ...team.members].filter(m => m?.status === 'filled').length;
    return acc + teamFilled;
  }, 0);

  const hiringCount = cLevel.subTeams.reduce((acc, team) => {
    const teamHiring = [team.lead, ...team.members].filter(m => m?.status === 'hiring').length;
    return acc + teamHiring;
  }, 0);

  return (
    <div className={`rounded-2xl border bg-gradient-to-br ${colorClasses[cLevel.color]} overflow-hidden`}>
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${iconColorClasses[cLevel.color]}`}>
            <Icon className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-xl font-bold text-white">{cLevel.shortTitle}</h3>
              <StatusBadge status={cLevel.status} />
            </div>
            <p className="text-slate-400">{cLevel.description}</p>
            <p className="text-sm text-white/60 mt-1">
              {cLevel.status === 'filled' ? cLevel.name : 'Position Open'} • {cLevel.subTeams.length} sub-teams • {filledCount}/{totalMembers} roles filled
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href={cLevel.link}
            onClick={(e) => e.stopPropagation()}
            className="text-sm px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors flex items-center gap-1"
          >
            View Report <ExternalLink className="w-3 h-3" />
          </Link>
          {isExpanded ? <ChevronDown className="w-6 h-6 text-slate-400" /> : <ChevronRight className="w-6 h-6 text-slate-400" />}
        </div>
      </button>

      {/* Sub-teams */}
      {isExpanded && (
        <div className="px-6 pb-6">
          <div className="mb-4 p-3 bg-white/5 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm">
              <span className="text-slate-400">
                <span className="text-emerald-400 font-bold">{filledCount}</span> Active
              </span>
              <span className="text-slate-400">
                <span className="text-amber-400 font-bold">{hiringCount}</span> Hiring
              </span>
              <span className="text-slate-400">
                <span className="text-slate-500 font-bold">{totalMembers - filledCount - hiringCount}</span> Planned
              </span>
            </div>
          </div>
          <div className="grid gap-4">
            {cLevel.subTeams.map((team) => (
              <SubTeamCard
                key={team.name}
                team={team}
                isExpanded={expandedTeams.includes(team.name)}
                onToggle={() => toggleTeam(team.name)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function CompanyStructurePage() {
  const [view, setView] = useState<'hierarchy' | 'summary'>('hierarchy');

  // Calculate overall stats
  const totalTeams = cSuiteStructure.reduce((acc, c) => acc + c.subTeams.length, 0);
  const totalRoles = cSuiteStructure.reduce((acc, c) => {
    return acc + c.subTeams.reduce((teamAcc, team) => {
      return teamAcc + (team.lead ? 1 : 0) + team.members.length;
    }, 0);
  }, 0) + cSuiteStructure.length; // Add C-suite roles

  const filledRoles = cSuiteStructure.filter(c => c.status === 'filled').length +
    cSuiteStructure.reduce((acc, c) => {
      return acc + c.subTeams.reduce((teamAcc, team) => {
        return teamAcc + [team.lead, ...team.members].filter(m => m?.status === 'filled').length;
      }, 0);
    }, 0);

  const hiringRoles = cSuiteStructure.filter(c => c.status === 'hiring').length +
    cSuiteStructure.reduce((acc, c) => {
      return acc + c.subTeams.reduce((teamAcc, team) => {
        return teamAcc + [team.lead, ...team.members].filter(m => m?.status === 'hiring').length;
      }, 0);
    }, 0);

  const criticalHires = cSuiteStructure.reduce((acc, c) => {
    return acc + c.subTeams.reduce((teamAcc, team) => {
      return teamAcc + [team.lead, ...team.members].filter(m => m?.priority === 'critical').length;
    }, 0);
  }, 0);

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Header */}
      <header className="bg-[#0d1c30] border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/data-room" className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <ArrowLeft className="w-5 h-5 text-slate-400" />
              </Link>
              <div>
                <h1 className="text-xl font-bold text-white">Company Structure</h1>
                <p className="text-sm text-slate-400">Complete organizational hierarchy</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setView('hierarchy')}
                className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  view === 'hierarchy' ? 'bg-[#c9a227] text-white' : 'bg-white/10 text-slate-400 hover:bg-white/20'
                }`}
              >
                Hierarchy View
              </button>
              <button
                onClick={() => setView('summary')}
                className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  view === 'summary' ? 'bg-[#c9a227] text-white' : 'bg-white/10 text-slate-400 hover:bg-white/20'
                }`}
              >
                Summary View
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <p className="text-3xl font-bold text-white">{cSuiteStructure.length}</p>
            <p className="text-sm text-slate-400">C-Suite Roles</p>
          </div>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <p className="text-3xl font-bold text-white">{totalTeams}</p>
            <p className="text-sm text-slate-400">Sub-Teams</p>
          </div>
          <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/30">
            <p className="text-3xl font-bold text-emerald-400">{filledRoles}</p>
            <p className="text-sm text-slate-400">Filled Roles</p>
          </div>
          <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/30">
            <p className="text-3xl font-bold text-amber-400">{hiringRoles}</p>
            <p className="text-sm text-slate-400">Hiring Now</p>
          </div>
          <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/30">
            <p className="text-3xl font-bold text-red-400">{criticalHires}</p>
            <p className="text-sm text-slate-400">Critical Hires</p>
          </div>
        </div>

        {view === 'hierarchy' ? (
          <>
            {/* CEO at top */}
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-2 border-amber-500/40 rounded-2xl p-6">
                <div className="flex items-center gap-4 justify-center">
                  <div className="w-16 h-16 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <Crown className="w-8 h-8 text-amber-400" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <h2 className="text-2xl font-bold text-white">Rejaul Karim</h2>
                      <StatusBadge status="filled" />
                    </div>
                    <p className="text-amber-400 font-medium">Founder & CEO</p>
                    <p className="text-sm text-slate-400">Vision, Strategy & Fundraising</p>
                  </div>
                </div>
                <Link
                  href="/ceo-report"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 transition-colors"
                >
                  View CEO Report <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Connecting line */}
            <div className="flex justify-center mb-4">
              <div className="w-px h-8 bg-white/20"></div>
            </div>

            {/* Horizontal line connecting all C-suite */}
            <div className="flex justify-center mb-4">
              <div className="w-4/5 h-px bg-white/20"></div>
            </div>

            {/* C-Suite Cards */}
            <div className="space-y-6">
              {cSuiteStructure.slice(1).map((cLevel) => (
                <CLevelSection key={cLevel.shortTitle} cLevel={cLevel} />
              ))}
            </div>
          </>
        ) : (
          /* Summary View */
          <div className="space-y-6">
            <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Organization Summary</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Department</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-slate-400">Leader</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-slate-400">Sub-Teams</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-slate-400">Total Roles</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-slate-400">Filled</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-slate-400">Hiring</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-slate-400">Report</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cSuiteStructure.map((cLevel) => {
                      const Icon = cLevel.icon;
                      const roles = cLevel.subTeams.reduce((acc, team) => acc + (team.lead ? 1 : 0) + team.members.length, 0);
                      const filled = cLevel.subTeams.reduce((acc, team) =>
                        acc + [team.lead, ...team.members].filter(m => m?.status === 'filled').length, 0);
                      const hiring = cLevel.subTeams.reduce((acc, team) =>
                        acc + [team.lead, ...team.members].filter(m => m?.status === 'hiring').length, 0);

                      return (
                        <tr key={cLevel.shortTitle} className="border-b border-white/5 hover:bg-white/5">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <Icon className={`w-5 h-5 text-${cLevel.color}-400`} />
                              <div>
                                <p className="font-medium text-white">{cLevel.shortTitle}</p>
                                <p className="text-xs text-slate-400">{cLevel.description}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-center">
                            <div className="flex items-center justify-center gap-2">
                              <span className="text-white text-sm">
                                {cLevel.status === 'filled' ? cLevel.name : 'TBD'}
                              </span>
                              <StatusBadge status={cLevel.status} />
                            </div>
                          </td>
                          <td className="py-3 px-4 text-center text-white">{cLevel.subTeams.length}</td>
                          <td className="py-3 px-4 text-center text-white">{roles}</td>
                          <td className="py-3 px-4 text-center text-emerald-400">{filled}</td>
                          <td className="py-3 px-4 text-center text-amber-400">{hiring}</td>
                          <td className="py-3 px-4 text-center">
                            <Link
                              href={cLevel.link}
                              className="text-[#c9a227] hover:text-amber-300 text-sm"
                            >
                              View →
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Critical Hires */}
            <div className="bg-red-500/10 rounded-2xl border border-red-500/30 p-6">
              <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" /> Critical Hires Needed
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cSuiteStructure.flatMap(c =>
                  c.subTeams.flatMap(team =>
                    [team.lead, ...team.members]
                      .filter(m => m?.priority === 'critical')
                      .map(m => ({ ...m, department: c.shortTitle, team: team.name }))
                  )
                ).map((hire, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4">
                    <p className="font-medium text-white">{hire?.role}</p>
                    <p className="text-sm text-slate-400">{hire?.department} → {hire?.team}</p>
                    <Link href="/careers" className="text-xs text-red-400 hover:text-red-300 mt-2 inline-block">
                      Apply Now →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Quick Links */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <Link
            href="/org-chart"
            className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors flex items-center gap-3"
          >
            <Network className="w-8 h-8 text-[#c9a227]" />
            <div>
              <p className="font-medium text-white">Visual Org Chart</p>
              <p className="text-sm text-slate-400">Interactive tree view</p>
            </div>
          </Link>
          <Link
            href="/executive-team"
            className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors flex items-center gap-3"
          >
            <Crown className="w-8 h-8 text-amber-400" />
            <div>
              <p className="font-medium text-white">Executive Team</p>
              <p className="text-sm text-slate-400">Full C-Suite profiles</p>
            </div>
          </Link>
          <Link
            href="/careers"
            className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors flex items-center gap-3"
          >
            <UserPlus className="w-8 h-8 text-emerald-400" />
            <div>
              <p className="font-medium text-white">Open Positions</p>
              <p className="text-sm text-slate-400">Join the team</p>
            </div>
          </Link>
        </div>

        {/* Footer */}
        <p className="text-center text-slate-600 text-xs mt-12">
          Company Structure v1.0 • Last Updated: February 2026
        </p>
      </main>
    <GlobalFooter />
    </div>
  );
}
