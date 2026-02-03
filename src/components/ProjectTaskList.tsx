'use client';

import React, { useState } from 'react';
import {
  CheckCircle,
  Circle,
  Clock,
  AlertTriangle,
  Rocket,
  Users,
  Building2,
  Code,
  FileText,
  Target,
  TrendingUp,
  Shield,
  Smartphone,
  Globe,
  DollarSign,
  ChevronDown,
  ChevronRight,
  Star,
  Zap,
  Calendar,
  BarChart3,
  MessageSquare,
  Settings,
  Database,
  Lock,
  Briefcase,
  Award
} from 'lucide-react';

/**
 * NUQTA PROJECT TASK LIST
 * Complete checklist of everything needed to launch
 */

type TaskStatus = 'completed' | 'in-progress' | 'pending' | 'blocked';
type TaskPriority = 'critical' | 'high' | 'medium' | 'low';

interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignee?: string;
  dueDate?: string;
  subtasks?: Task[];
}

interface TaskCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  tasks: Task[];
  progress: number;
}

// ============================================
// TASK CATEGORIES
// ============================================

const taskCategories: TaskCategory[] = [
  {
    id: 'product-development',
    title: 'Product Development',
    icon: <Code className="w-6 h-6" />,
    description: 'Core app development and features',
    progress: 15,
    tasks: [
      {
        id: 'pd-1',
        title: 'Mobile App Development',
        status: 'in-progress',
        priority: 'critical',
        subtasks: [
          { id: 'pd-1-1', title: 'User authentication & onboarding flow', status: 'pending', priority: 'critical' },
          { id: 'pd-1-2', title: 'Card linking integration (Open Banking API)', status: 'pending', priority: 'critical' },
          { id: 'pd-1-3', title: 'Transaction tracking & categorization', status: 'pending', priority: 'critical' },
          { id: 'pd-1-4', title: 'Points/Nuqta earning engine', status: 'pending', priority: 'critical' },
          { id: 'pd-1-5', title: 'Smart Pay recommendation algorithm', status: 'pending', priority: 'high' },
          { id: 'pd-1-6', title: 'Merchant discovery & search', status: 'pending', priority: 'high' },
          { id: 'pd-1-7', title: 'QR code scanning for in-store rewards', status: 'pending', priority: 'high' },
          { id: 'pd-1-8', title: 'Push notifications system', status: 'pending', priority: 'medium' },
          { id: 'pd-1-9', title: 'Rewards redemption flow', status: 'pending', priority: 'high' },
          { id: 'pd-1-10', title: 'User profile & settings', status: 'pending', priority: 'medium' },
        ]
      },
      {
        id: 'pd-2',
        title: 'Merchant Dashboard',
        status: 'pending',
        priority: 'critical',
        subtasks: [
          { id: 'pd-2-1', title: 'Merchant registration & onboarding', status: 'pending', priority: 'critical' },
          { id: 'pd-2-2', title: 'Campaign creation & management', status: 'pending', priority: 'high' },
          { id: 'pd-2-3', title: 'Analytics dashboard (visits, redemptions)', status: 'pending', priority: 'high' },
          { id: 'pd-2-4', title: 'Customer insights & demographics', status: 'pending', priority: 'medium' },
          { id: 'pd-2-5', title: 'Billing & subscription management', status: 'pending', priority: 'high' },
          { id: 'pd-2-6', title: 'Staff access & permissions', status: 'pending', priority: 'medium' },
        ]
      },
      {
        id: 'pd-3',
        title: 'Admin Dashboard',
        status: 'pending',
        priority: 'high',
        subtasks: [
          { id: 'pd-3-1', title: 'User management system', status: 'pending', priority: 'high' },
          { id: 'pd-3-2', title: 'Merchant approval workflow', status: 'pending', priority: 'high' },
          { id: 'pd-3-3', title: 'Points economy monitoring', status: 'pending', priority: 'high' },
          { id: 'pd-3-4', title: 'System-wide analytics', status: 'pending', priority: 'medium' },
          { id: 'pd-3-5', title: 'Content management system', status: 'pending', priority: 'medium' },
          { id: 'pd-3-6', title: 'Support ticket management', status: 'pending', priority: 'medium' },
        ]
      },
      {
        id: 'pd-4',
        title: 'Backend Infrastructure',
        status: 'pending',
        priority: 'critical',
        subtasks: [
          { id: 'pd-4-1', title: 'Database schema design & setup', status: 'pending', priority: 'critical' },
          { id: 'pd-4-2', title: 'API architecture & documentation', status: 'pending', priority: 'critical' },
          { id: 'pd-4-3', title: 'Authentication service (OAuth, JWT)', status: 'pending', priority: 'critical' },
          { id: 'pd-4-4', title: 'Payment processing integration', status: 'pending', priority: 'critical' },
          { id: 'pd-4-5', title: 'Points calculation engine', status: 'pending', priority: 'critical' },
          { id: 'pd-4-6', title: 'Real-time notifications service', status: 'pending', priority: 'high' },
          { id: 'pd-4-7', title: 'Data analytics pipeline', status: 'pending', priority: 'medium' },
          { id: 'pd-4-8', title: 'CDN & asset optimization', status: 'pending', priority: 'medium' },
        ]
      }
    ]
  },
  {
    id: 'business-development',
    title: 'Business Development',
    icon: <Briefcase className="w-6 h-6" />,
    description: 'Partnerships, merchants, and growth',
    progress: 35,
    tasks: [
      {
        id: 'bd-1',
        title: 'Merchant Acquisition (H1 Target: 50)',
        status: 'in-progress',
        priority: 'critical',
        subtasks: [
          { id: 'bd-1-1', title: 'Finalize merchant pitch deck', status: 'completed', priority: 'critical' },
          { id: 'bd-1-2', title: 'Create vertical-specific decks (Cafe, Salon, Gold, Supermarket)', status: 'completed', priority: 'high' },
          { id: 'bd-1-3', title: 'Build merchant database (200+ prospects)', status: 'completed', priority: 'high' },
          { id: 'bd-1-4', title: 'Outreach to 50 restaurants/cafes', status: 'in-progress', priority: 'critical' },
          { id: 'bd-1-5', title: 'Outreach to 30 salons/spas', status: 'pending', priority: 'high' },
          { id: 'bd-1-6', title: 'Outreach to 20 retail stores', status: 'pending', priority: 'high' },
          { id: 'bd-1-7', title: 'Sign LOIs with 50 merchants', status: 'pending', priority: 'critical' },
          { id: 'bd-1-8', title: 'Convert 25 to paid subscriptions', status: 'pending', priority: 'high' },
        ]
      },
      {
        id: 'bd-2',
        title: 'Strategic Partnerships',
        status: 'in-progress',
        priority: 'high',
        subtasks: [
          { id: 'bd-2-1', title: 'Golden Ventures partnership deck', status: 'completed', priority: 'high' },
          { id: 'bd-2-2', title: 'Exhibition partnership deck', status: 'completed', priority: 'high' },
          { id: 'bd-2-3', title: 'Approach 3 mall groups', status: 'pending', priority: 'high' },
          { id: 'bd-2-4', title: 'Partner with 2 event organizers', status: 'pending', priority: 'medium' },
          { id: 'bd-2-5', title: 'Banking/fintech partnership discussions', status: 'pending', priority: 'high' },
          { id: 'bd-2-6', title: 'Corporate rewards program partnerships', status: 'pending', priority: 'medium' },
        ]
      },
      {
        id: 'bd-3',
        title: 'Engine A Partnership',
        status: 'in-progress',
        priority: 'high',
        subtasks: [
          { id: 'bd-3-1', title: 'Create Engine A merchant deck', status: 'completed', priority: 'high' },
          { id: 'bd-3-2', title: 'Create Engine A info page', status: 'completed', priority: 'high' },
          { id: 'bd-3-3', title: 'Onboard 20 Engine A merchants', status: 'pending', priority: 'high' },
          { id: 'bd-3-4', title: 'Launch joint marketing campaign', status: 'pending', priority: 'medium' },
        ]
      }
    ]
  },
  {
    id: 'fundraising',
    title: 'Fundraising & Investment',
    icon: <DollarSign className="w-6 h-6" />,
    description: 'Investor relations and capital raising',
    progress: 40,
    tasks: [
      {
        id: 'fr-1',
        title: 'Pre-Seed Preparation',
        status: 'in-progress',
        priority: 'critical',
        subtasks: [
          { id: 'fr-1-1', title: 'Complete investor pitch deck', status: 'completed', priority: 'critical' },
          { id: 'fr-1-2', title: 'Financial projections model', status: 'completed', priority: 'critical' },
          { id: 'fr-1-3', title: 'Investment memo', status: 'completed', priority: 'high' },
          { id: 'fr-1-4', title: 'Data room setup', status: 'completed', priority: 'high' },
          { id: 'fr-1-5', title: 'Cap table documentation', status: 'completed', priority: 'high' },
          { id: 'fr-1-6', title: 'ESOP structure documentation', status: 'completed', priority: 'high' },
          { id: 'fr-1-7', title: 'Term sheet preparation', status: 'pending', priority: 'high' },
        ]
      },
      {
        id: 'fr-2',
        title: 'Investor Outreach',
        status: 'pending',
        priority: 'high',
        subtasks: [
          { id: 'fr-2-1', title: 'Build investor target list (50 investors)', status: 'pending', priority: 'high' },
          { id: 'fr-2-2', title: 'Warm introductions via network', status: 'pending', priority: 'high' },
          { id: 'fr-2-3', title: 'Apply to accelerators (Y Combinator, 500 Global)', status: 'pending', priority: 'medium' },
          { id: 'fr-2-4', title: 'Pitch to 20 angel investors', status: 'pending', priority: 'high' },
          { id: 'fr-2-5', title: 'Pitch to 10 VCs', status: 'pending', priority: 'medium' },
          { id: 'fr-2-6', title: 'Follow-up & due diligence support', status: 'pending', priority: 'high' },
        ]
      }
    ]
  },
  {
    id: 'legal-compliance',
    title: 'Legal & Compliance',
    icon: <Shield className="w-6 h-6" />,
    description: 'Legal setup and regulatory compliance',
    progress: 20,
    tasks: [
      {
        id: 'lc-1',
        title: 'Company Formation',
        status: 'in-progress',
        priority: 'critical',
        subtasks: [
          { id: 'lc-1-1', title: 'UAE company registration (DMCC/DIFC)', status: 'pending', priority: 'critical' },
          { id: 'lc-1-2', title: 'Trade license acquisition', status: 'pending', priority: 'critical' },
          { id: 'lc-1-3', title: 'Corporate bank account setup', status: 'pending', priority: 'critical' },
          { id: 'lc-1-4', title: 'Shareholder agreements', status: 'pending', priority: 'high' },
          { id: 'lc-1-5', title: 'ESOP legal documentation', status: 'pending', priority: 'high' },
        ]
      },
      {
        id: 'lc-2',
        title: 'Regulatory Compliance',
        status: 'pending',
        priority: 'high',
        subtasks: [
          { id: 'lc-2-1', title: 'Data protection policy (UAE PDPL)', status: 'pending', priority: 'high' },
          { id: 'lc-2-2', title: 'User terms of service', status: 'completed', priority: 'high' },
          { id: 'lc-2-3', title: 'Privacy policy', status: 'pending', priority: 'high' },
          { id: 'lc-2-4', title: 'Merchant agreement template', status: 'pending', priority: 'high' },
          { id: 'lc-2-5', title: 'AML/KYC compliance framework', status: 'pending', priority: 'high' },
          { id: 'lc-2-6', title: 'Payment services licensing (if required)', status: 'pending', priority: 'medium' },
        ]
      }
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing & Branding',
    icon: <TrendingUp className="w-6 h-6" />,
    description: 'Brand building and user acquisition',
    progress: 25,
    tasks: [
      {
        id: 'mk-1',
        title: 'Brand Development',
        status: 'in-progress',
        priority: 'high',
        subtasks: [
          { id: 'mk-1-1', title: 'Brand guidelines document', status: 'in-progress', priority: 'high' },
          { id: 'mk-1-2', title: 'Logo variations & assets', status: 'completed', priority: 'high' },
          { id: 'mk-1-3', title: 'Marketing website', status: 'completed', priority: 'high' },
          { id: 'mk-1-4', title: 'App Store assets & screenshots', status: 'pending', priority: 'medium' },
          { id: 'mk-1-5', title: 'Social media profiles setup', status: 'pending', priority: 'medium' },
          { id: 'mk-1-6', title: 'Press kit preparation', status: 'pending', priority: 'low' },
        ]
      },
      {
        id: 'mk-2',
        title: 'Pre-Launch Marketing',
        status: 'pending',
        priority: 'high',
        subtasks: [
          { id: 'mk-2-1', title: 'Waitlist landing page', status: 'pending', priority: 'high' },
          { id: 'mk-2-2', title: 'Content marketing plan', status: 'pending', priority: 'medium' },
          { id: 'mk-2-3', title: 'Influencer partnership strategy', status: 'pending', priority: 'medium' },
          { id: 'mk-2-4', title: 'Launch PR strategy', status: 'pending', priority: 'medium' },
          { id: 'mk-2-5', title: 'Referral program design', status: 'pending', priority: 'high' },
        ]
      }
    ]
  },
  {
    id: 'team-operations',
    title: 'Team & Operations',
    icon: <Users className="w-6 h-6" />,
    description: 'Hiring and internal operations',
    progress: 45,
    tasks: [
      {
        id: 'to-1',
        title: 'Documentation',
        status: 'in-progress',
        priority: 'high',
        subtasks: [
          { id: 'to-1-1', title: 'Company policies document', status: 'completed', priority: 'high' },
          { id: 'to-1-2', title: 'Operations manual', status: 'completed', priority: 'high' },
          { id: 'to-1-3', title: 'ESOP documentation', status: 'completed', priority: 'high' },
          { id: 'to-1-4', title: 'Team page with roles', status: 'completed', priority: 'medium' },
          { id: 'to-1-5', title: 'Onboarding checklist for new hires', status: 'pending', priority: 'medium' },
        ]
      },
      {
        id: 'to-2',
        title: 'Hiring Plan (H1)',
        status: 'pending',
        priority: 'high',
        subtasks: [
          { id: 'to-2-1', title: 'Technical Co-Founder / Lead Engineer', status: 'pending', priority: 'critical' },
          { id: 'to-2-2', title: 'UI/UX Designer (Part-time/Contract)', status: 'pending', priority: 'high' },
          { id: 'to-2-3', title: 'Business Development Manager', status: 'pending', priority: 'high' },
          { id: 'to-2-4', title: 'Marketing Manager', status: 'pending', priority: 'medium' },
          { id: 'to-2-5', title: 'Customer Success (Post-launch)', status: 'pending', priority: 'low' },
        ]
      },
      {
        id: 'to-3',
        title: 'Tools & Systems',
        status: 'in-progress',
        priority: 'medium',
        subtasks: [
          { id: 'to-3-1', title: 'Project management tool (Linear/Notion)', status: 'pending', priority: 'medium' },
          { id: 'to-3-2', title: 'Communication (Slack workspace)', status: 'pending', priority: 'medium' },
          { id: 'to-3-3', title: 'Version control (GitHub org)', status: 'completed', priority: 'high' },
          { id: 'to-3-4', title: 'Design tools (Figma workspace)', status: 'pending', priority: 'medium' },
          { id: 'to-3-5', title: 'CRM for merchant management', status: 'pending', priority: 'high' },
        ]
      }
    ]
  },
  {
    id: 'pitch-materials',
    title: 'Pitch & Sales Materials',
    icon: <FileText className="w-6 h-6" />,
    description: 'Decks, presentations, and collateral',
    progress: 85,
    tasks: [
      {
        id: 'pm-1',
        title: 'Investor Materials',
        status: 'completed',
        priority: 'critical',
        subtasks: [
          { id: 'pm-1-1', title: 'Main investor pitch deck', status: 'completed', priority: 'critical' },
          { id: 'pm-1-2', title: '90-second pitch deck', status: 'completed', priority: 'high' },
          { id: 'pm-1-3', title: 'Investment memo', status: 'completed', priority: 'high' },
          { id: 'pm-1-4', title: 'Financial projections', status: 'completed', priority: 'high' },
          { id: 'pm-1-5', title: 'Data room', status: 'completed', priority: 'high' },
        ]
      },
      {
        id: 'pm-2',
        title: 'Merchant Materials',
        status: 'completed',
        priority: 'high',
        subtasks: [
          { id: 'pm-2-1', title: 'General merchant pitch deck', status: 'completed', priority: 'high' },
          { id: 'pm-2-2', title: 'Cafe/Restaurant specific deck', status: 'completed', priority: 'high' },
          { id: 'pm-2-3', title: 'Salon/Spa specific deck', status: 'completed', priority: 'high' },
          { id: 'pm-2-4', title: 'Gold/Jewelry specific deck', status: 'completed', priority: 'high' },
          { id: 'pm-2-5', title: 'Supermarket specific deck', status: 'completed', priority: 'high' },
          { id: 'pm-2-6', title: 'Merchant info page', status: 'completed', priority: 'medium' },
        ]
      },
      {
        id: 'pm-3',
        title: 'Partnership Materials',
        status: 'completed',
        priority: 'high',
        subtasks: [
          { id: 'pm-3-1', title: 'Golden Ventures deck', status: 'completed', priority: 'high' },
          { id: 'pm-3-2', title: 'Exhibition deck', status: 'completed', priority: 'high' },
          { id: 'pm-3-3', title: 'Engine A merchant deck', status: 'completed', priority: 'high' },
          { id: 'pm-3-4', title: 'Corporate partnership one-pager', status: 'pending', priority: 'medium' },
        ]
      }
    ]
  },
  {
    id: 'website-cleanup',
    title: 'Website & Technical Cleanup',
    icon: <Settings className="w-6 h-6" />,
    description: 'Code quality and maintenance',
    progress: 60,
    tasks: [
      {
        id: 'wc-1',
        title: 'Code Organization',
        status: 'in-progress',
        priority: 'medium',
        subtasks: [
          { id: 'wc-1-1', title: 'Remove backup files (-backup.tsx)', status: 'pending', priority: 'medium' },
          { id: 'wc-1-2', title: 'Consolidate duplicate components', status: 'pending', priority: 'medium' },
          { id: 'wc-1-3', title: 'Break large components into modules', status: 'pending', priority: 'low' },
          { id: 'wc-1-4', title: 'Add TypeScript strict types', status: 'pending', priority: 'low' },
        ]
      },
      {
        id: 'wc-2',
        title: 'Performance & SEO',
        status: 'pending',
        priority: 'medium',
        subtasks: [
          { id: 'wc-2-1', title: 'Image optimization', status: 'pending', priority: 'medium' },
          { id: 'wc-2-2', title: 'Meta tags for all pages', status: 'pending', priority: 'medium' },
          { id: 'wc-2-3', title: 'Sitemap generation', status: 'pending', priority: 'low' },
          { id: 'wc-2-4', title: 'Google Analytics setup', status: 'pending', priority: 'medium' },
        ]
      }
    ]
  }
];

// ============================================
// MILESTONE TIMELINE
// ============================================

const milestones = [
  {
    id: 'm1',
    title: 'Foundation Complete',
    target: 'Month 1',
    status: 'in-progress',
    items: [
      'Company registration',
      'Core team formation',
      'All pitch decks ready',
      'First 10 merchant LOIs'
    ]
  },
  {
    id: 'm2',
    title: 'MVP Development',
    target: 'Month 2-3',
    status: 'pending',
    items: [
      'Mobile app MVP',
      'Merchant dashboard MVP',
      '50 merchants onboarded',
      'Pre-seed funding closed'
    ]
  },
  {
    id: 'm3',
    title: 'Soft Launch',
    target: 'Month 4',
    status: 'pending',
    items: [
      'Beta launch with 1000 users',
      '25 active merchants',
      'Payment integration live',
      'Marketing campaign start'
    ]
  },
  {
    id: 'm4',
    title: 'Public Launch',
    target: 'Month 5-6',
    status: 'pending',
    items: [
      '10,000 users',
      '100 merchants',
      'Series A preparation',
      'GCC expansion planning'
    ]
  }
];

// ============================================
// COMPONENT
// ============================================

export default function ProjectTaskList() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(
    taskCategories.map(c => c.id)
  );
  const [expandedTasks, setExpandedTasks] = useState<string[]>([]);
  const [filterStatus, setFilterStatus] = useState<TaskStatus | 'all'>('all');
  const [filterPriority, setFilterPriority] = useState<TaskPriority | 'all'>('all');

  const toggleCategory = (id: string) => {
    setExpandedCategories(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const toggleTask = (id: string) => {
    setExpandedTasks(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const getStatusIcon = (status: TaskStatus) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-amber-500" />;
      case 'blocked':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      default:
        return <Circle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: TaskStatus) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-amber-100 text-amber-800';
      case 'blocked':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: TaskPriority) => {
    switch (priority) {
      case 'critical':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'high':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const calculateOverallProgress = () => {
    let total = 0;
    let completed = 0;
    taskCategories.forEach(category => {
      category.tasks.forEach(task => {
        if (task.subtasks) {
          task.subtasks.forEach(subtask => {
            total++;
            if (subtask.status === 'completed') completed++;
          });
        } else {
          total++;
          if (task.status === 'completed') completed++;
        }
      });
    });
    return Math.round((completed / total) * 100);
  };

  const getTaskStats = () => {
    let total = 0;
    let completed = 0;
    let inProgress = 0;
    let pending = 0;

    taskCategories.forEach(category => {
      category.tasks.forEach(task => {
        if (task.subtasks) {
          task.subtasks.forEach(subtask => {
            total++;
            if (subtask.status === 'completed') completed++;
            else if (subtask.status === 'in-progress') inProgress++;
            else pending++;
          });
        } else {
          total++;
          if (task.status === 'completed') completed++;
          else if (task.status === 'in-progress') inProgress++;
          else pending++;
        }
      });
    });

    return { total, completed, inProgress, pending };
  };

  const stats = getTaskStats();
  const overallProgress = calculateOverallProgress();

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#0a1628] to-[#1a2d4a] border-b border-[#c9a227]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-[#c9a227] rounded-xl flex items-center justify-center">
              <Target className="w-7 h-7 text-[#0a1628]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Nuqta Project Task List</h1>
              <p className="text-gray-400">Complete checklist for launch</p>
            </div>
          </div>

          {/* Overall Progress */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6">
            <div className="md:col-span-2 bg-[#0d2137] rounded-xl p-6 border border-[#c9a227]/20">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Overall Progress</span>
                <span className="text-2xl font-bold text-[#c9a227]">{overallProgress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-[#c9a227] to-[#e5c76b] h-3 rounded-full transition-all duration-500"
                  style={{ width: `${overallProgress}%` }}
                />
              </div>
            </div>

            <div className="bg-[#0d2137] rounded-xl p-4 border border-[#c9a227]/20 text-center">
              <div className="text-3xl font-bold text-white">{stats.total}</div>
              <div className="text-gray-400 text-sm">Total Tasks</div>
            </div>

            <div className="bg-[#0d2137] rounded-xl p-4 border border-green-500/20 text-center">
              <div className="text-3xl font-bold text-green-500">{stats.completed}</div>
              <div className="text-gray-400 text-sm">Completed</div>
            </div>

            <div className="bg-[#0d2137] rounded-xl p-4 border border-amber-500/20 text-center">
              <div className="text-3xl font-bold text-amber-500">{stats.inProgress}</div>
              <div className="text-gray-400 text-sm">In Progress</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Milestones */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Rocket className="w-6 h-6 text-[#c9a227]" />
            Launch Milestones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.id}
                className={`bg-[#0d2137] rounded-xl p-6 border ${
                  milestone.status === 'in-progress'
                    ? 'border-[#c9a227]'
                    : 'border-gray-700'
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    milestone.status === 'completed'
                      ? 'bg-green-500'
                      : milestone.status === 'in-progress'
                      ? 'bg-[#c9a227]'
                      : 'bg-gray-600'
                  }`}>
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{milestone.target}</span>
                </div>
                <h3 className="text-white font-semibold mb-3">{milestone.title}</h3>
                <ul className="space-y-2">
                  {milestone.items.map((item, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-[#c9a227] mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Filters */}
        <section className="mb-6 flex flex-wrap gap-4">
          <div>
            <label className="text-gray-400 text-sm block mb-1">Filter by Status</label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as TaskStatus | 'all')}
              className="bg-[#0d2137] text-white rounded-lg px-4 py-2 border border-gray-700 focus:border-[#c9a227] focus:outline-none"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="blocked">Blocked</option>
            </select>
          </div>
          <div>
            <label className="text-gray-400 text-sm block mb-1">Filter by Priority</label>
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value as TaskPriority | 'all')}
              className="bg-[#0d2137] text-white rounded-lg px-4 py-2 border border-gray-700 focus:border-[#c9a227] focus:outline-none"
            >
              <option value="all">All Priorities</option>
              <option value="critical">Critical</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </section>

        {/* Task Categories */}
        <section className="space-y-6">
          {taskCategories.map(category => (
            <div
              key={category.id}
              className="bg-[#0d2137] rounded-xl border border-gray-700 overflow-hidden"
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#0a1628]/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#c9a227]/10 rounded-lg flex items-center justify-center text-[#c9a227]">
                    {category.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-semibold">{category.title}</h3>
                    <p className="text-gray-400 text-sm">{category.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right mr-4">
                    <div className="text-[#c9a227] font-semibold">{category.progress}%</div>
                    <div className="w-24 bg-gray-700 rounded-full h-2 mt-1">
                      <div
                        className="bg-[#c9a227] h-2 rounded-full"
                        style={{ width: `${category.progress}%` }}
                      />
                    </div>
                  </div>
                  {expandedCategories.includes(category.id) ? (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              {/* Category Tasks */}
              {expandedCategories.includes(category.id) && (
                <div className="border-t border-gray-700">
                  {category.tasks.map(task => {
                    const filteredSubtasks = task.subtasks?.filter(st => {
                      const statusMatch = filterStatus === 'all' || st.status === filterStatus;
                      const priorityMatch = filterPriority === 'all' || st.priority === filterPriority;
                      return statusMatch && priorityMatch;
                    });

                    // Skip if no matching subtasks
                    if (filterStatus !== 'all' || filterPriority !== 'all') {
                      if (task.subtasks && filteredSubtasks?.length === 0) return null;
                      if (!task.subtasks) {
                        const statusMatch = filterStatus === 'all' || task.status === filterStatus;
                        const priorityMatch = filterPriority === 'all' || task.priority === filterPriority;
                        if (!statusMatch || !priorityMatch) return null;
                      }
                    }

                    return (
                      <div key={task.id} className="border-b border-gray-700/50 last:border-b-0">
                        {/* Task Header */}
                        <button
                          onClick={() => task.subtasks && toggleTask(task.id)}
                          className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#0a1628]/30 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            {getStatusIcon(task.status)}
                            <span className="text-white">{task.title}</span>
                            <span className={`text-xs px-2 py-1 rounded-full border ${getPriorityColor(task.priority)}`}>
                              {task.priority}
                            </span>
                          </div>
                          {task.subtasks && (
                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                              <span>
                                {filteredSubtasks?.filter(s => s.status === 'completed').length || 0}/
                                {filteredSubtasks?.length || 0}
                              </span>
                              {expandedTasks.includes(task.id) ? (
                                <ChevronDown className="w-4 h-4" />
                              ) : (
                                <ChevronRight className="w-4 h-4" />
                              )}
                            </div>
                          )}
                        </button>

                        {/* Subtasks */}
                        {task.subtasks && expandedTasks.includes(task.id) && (
                          <div className="bg-[#0a1628]/50 px-6 py-2">
                            {filteredSubtasks?.map(subtask => (
                              <div
                                key={subtask.id}
                                className="py-3 flex items-center justify-between border-b border-gray-700/30 last:border-b-0"
                              >
                                <div className="flex items-center gap-3">
                                  {getStatusIcon(subtask.status)}
                                  <span className={`${
                                    subtask.status === 'completed' ? 'text-gray-500 line-through' : 'text-gray-300'
                                  }`}>
                                    {subtask.title}
                                  </span>
                                </div>
                                <span className={`text-xs px-2 py-1 rounded-full border ${getPriorityColor(subtask.priority)}`}>
                                  {subtask.priority}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Quick Actions */}
        <section className="mt-12 bg-gradient-to-r from-[#c9a227]/10 to-[#c9a227]/5 rounded-xl p-6 border border-[#c9a227]/20">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#c9a227]" />
            Priority Actions This Week
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#0a1628] rounded-lg p-4">
              <div className="flex items-center gap-2 text-red-400 mb-2">
                <AlertTriangle className="w-4 h-4" />
                <span className="font-semibold">Critical</span>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Hire Technical Co-Founder</li>
                <li>• Complete UAE company registration</li>
                <li>• Sign first 10 merchant LOIs</li>
              </ul>
            </div>
            <div className="bg-[#0a1628] rounded-lg p-4">
              <div className="flex items-center gap-2 text-orange-400 mb-2">
                <Star className="w-4 h-4" />
                <span className="font-semibold">High Priority</span>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Start merchant outreach campaign</li>
                <li>• Finalize investor target list</li>
                <li>• Set up CRM system</li>
              </ul>
            </div>
            <div className="bg-[#0a1628] rounded-lg p-4">
              <div className="flex items-center gap-2 text-blue-400 mb-2">
                <Calendar className="w-4 h-4" />
                <span className="font-semibold">This Month</span>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Complete brand guidelines</li>
                <li>• Launch waitlist page</li>
                <li>• Begin angel investor outreach</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a1628] border-t border-gray-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              Last updated: {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex gap-4">
              <a href="/operations" className="text-[#c9a227] hover:text-[#e5c76b] text-sm">
                Operations Manual
              </a>
              <a href="/team" className="text-[#c9a227] hover:text-[#e5c76b] text-sm">
                Team
              </a>
              <a href="/esop" className="text-[#c9a227] hover:text-[#e5c76b] text-sm">
                ESOP
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
