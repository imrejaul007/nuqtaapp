'use client';

import React, { useState } from 'react';
import {
  Users,
  Search,
  Filter,
  UserPlus,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
  Calendar,
  Mail,
  Phone,
  Linkedin,
  MessageSquare,
  ArrowRight,
  Target,
  TrendingUp,
  Briefcase,
  Code,
  Megaphone,
  HandshakeIcon,
  Building2,
  ChevronDown,
  ChevronRight,
  Star,
  ThumbsUp,
  ThumbsDown,
  Play,
  Pause,
  BarChart3,
  FileText,
  Video,
  UserCheck,
  AlertTriangle
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ========================================
// NUQTA HIRING PIPELINE TRACKER
// ========================================

type CandidateStatus = 'sourced' | 'screening' | 'interview' | 'technical' | 'final' | 'offer' | 'hired' | 'rejected' | 'withdrawn';
type Priority = 'critical' | 'high' | 'medium' | 'low';

interface Candidate {
  id: string;
  name: string;
  email: string;
  phone?: string;
  linkedin?: string;
  role: string;
  department: string;
  status: CandidateStatus;
  priority: Priority;
  source: string;
  appliedDate: string;
  lastActivity: string;
  notes: string;
  score?: number;
  interviewer?: string;
}

interface OpenRole {
  id: string;
  title: string;
  department: string;
  priority: Priority;
  status: 'open' | 'paused' | 'filled';
  targetHireDate: string;
  candidatesInPipeline: number;
  daysOpen: number;
  hiringManager: string;
}

// Hiring pipeline stages
const stages = [
  { id: 'sourced', name: 'Sourced', icon: UserPlus, color: 'slate' },
  { id: 'screening', name: 'Screening', icon: Search, color: 'blue' },
  { id: 'interview', name: 'Interview', icon: Video, color: 'cyan' },
  { id: 'technical', name: 'Technical', icon: Code, color: 'purple' },
  { id: 'final', name: 'Final Round', icon: Target, color: 'orange' },
  { id: 'offer', name: 'Offer', icon: FileText, color: 'amber' },
  { id: 'hired', name: 'Hired', icon: CheckCircle, color: 'emerald' }
];

// Current open roles
const openRoles: OpenRole[] = [
  {
    id: '1',
    title: 'Lead Full-Stack Engineer',
    department: 'Engineering',
    priority: 'critical',
    status: 'open',
    targetHireDate: '2026-03-15',
    candidatesInPipeline: 8,
    daysOpen: 21,
    hiringManager: 'CTO'
  },
  {
    id: '2',
    title: 'Head of Growth',
    department: 'Growth',
    priority: 'critical',
    status: 'open',
    targetHireDate: '2026-03-01',
    candidatesInPipeline: 5,
    daysOpen: 28,
    hiringManager: 'CEO'
  },
  {
    id: '3',
    title: 'Head of Merchant Partnerships',
    department: 'Merchants',
    priority: 'critical',
    status: 'open',
    targetHireDate: '2026-03-01',
    candidatesInPipeline: 6,
    daysOpen: 28,
    hiringManager: 'CEO'
  },
  {
    id: '4',
    title: 'COO / Head of Operations',
    department: 'Operations',
    priority: 'high',
    status: 'open',
    targetHireDate: '2026-04-01',
    candidatesInPipeline: 4,
    daysOpen: 14,
    hiringManager: 'CEO'
  },
  {
    id: '5',
    title: 'Senior Mobile Engineer',
    department: 'Engineering',
    priority: 'high',
    status: 'open',
    targetHireDate: '2026-03-15',
    candidatesInPipeline: 12,
    daysOpen: 21,
    hiringManager: 'CTO'
  },
  {
    id: '6',
    title: 'UI/UX Designer',
    department: 'Engineering',
    priority: 'high',
    status: 'open',
    targetHireDate: '2026-03-15',
    candidatesInPipeline: 15,
    daysOpen: 21,
    hiringManager: 'CTO'
  },
  {
    id: '7',
    title: 'Community & Ambassador Manager',
    department: 'Growth',
    priority: 'high',
    status: 'open',
    targetHireDate: '2026-03-15',
    candidatesInPipeline: 9,
    daysOpen: 14,
    hiringManager: 'Head of Growth'
  },
  {
    id: '8',
    title: 'Content & Social Media Manager',
    department: 'Marketing',
    priority: 'high',
    status: 'open',
    targetHireDate: '2026-03-01',
    candidatesInPipeline: 18,
    daysOpen: 7,
    hiringManager: 'CMO'
  },
  {
    id: '9',
    title: 'Creative Designer',
    department: 'Marketing',
    priority: 'high',
    status: 'open',
    targetHireDate: '2026-03-01',
    candidatesInPipeline: 22,
    daysOpen: 7,
    hiringManager: 'CMO'
  },
  {
    id: '10',
    title: 'Merchant Success Manager',
    department: 'Merchants',
    priority: 'high',
    status: 'open',
    targetHireDate: '2026-03-15',
    candidatesInPipeline: 7,
    daysOpen: 14,
    hiringManager: 'Head of Merchants'
  },
  {
    id: '11',
    title: 'Merchant Marketing Manager',
    department: 'Merchants',
    priority: 'high',
    status: 'open',
    targetHireDate: '2026-03-15',
    candidatesInPipeline: 11,
    daysOpen: 14,
    hiringManager: 'Head of Merchants'
  }
];

// Sample candidates in pipeline
const candidates: Candidate[] = [
  {
    id: '1',
    name: 'Ahmed Al-Hassan',
    email: 'ahmed@example.com',
    phone: '+971 50 XXX XXXX',
    role: 'Lead Full-Stack Engineer',
    department: 'Engineering',
    status: 'technical',
    priority: 'critical',
    source: 'LinkedIn',
    appliedDate: '2026-01-20',
    lastActivity: '2026-02-06',
    notes: 'Strong React Native experience. Previous fintech background at Tabby.',
    score: 85,
    interviewer: 'CTO'
  },
  {
    id: '2',
    name: 'Sara Mohammed',
    email: 'sara@example.com',
    role: 'Head of Growth',
    department: 'Growth',
    status: 'final',
    priority: 'critical',
    source: 'Referral',
    appliedDate: '2026-01-15',
    lastActivity: '2026-02-05',
    notes: 'Former Head of Growth at Careem. Excellent track record.',
    score: 92,
    interviewer: 'CEO'
  },
  {
    id: '3',
    name: 'Omar Khalid',
    email: 'omar@example.com',
    role: 'Head of Merchant Partnerships',
    department: 'Merchants',
    status: 'interview',
    priority: 'critical',
    source: 'Direct Apply',
    appliedDate: '2026-01-25',
    lastActivity: '2026-02-04',
    notes: 'Strong F&B network in Dubai. Previously at Talabat.',
    score: 78,
    interviewer: 'CEO'
  },
  {
    id: '4',
    name: 'Fatima Rashid',
    email: 'fatima@example.com',
    role: 'Senior Mobile Engineer',
    department: 'Engineering',
    status: 'technical',
    priority: 'high',
    source: 'LinkedIn',
    appliedDate: '2026-01-28',
    lastActivity: '2026-02-06',
    notes: 'Published 3 apps on App Store. Strong RN skills.',
    score: 80
  },
  {
    id: '5',
    name: 'Khalil Nasser',
    email: 'khalil@example.com',
    role: 'UI/UX Designer',
    department: 'Engineering',
    status: 'screening',
    priority: 'high',
    source: 'Portfolio Site',
    appliedDate: '2026-02-01',
    lastActivity: '2026-02-05',
    notes: 'Beautiful portfolio. Fintech experience at Tap Payments.',
    score: 75
  },
  {
    id: '6',
    name: 'Layla Hassan',
    email: 'layla@example.com',
    role: 'Content & Social Media Manager',
    department: 'Marketing',
    status: 'offer',
    priority: 'high',
    source: 'Instagram DM',
    appliedDate: '2026-01-22',
    lastActivity: '2026-02-06',
    notes: 'Viral TikTok creator. Strong personal brand.',
    score: 88
  },
  {
    id: '7',
    name: 'Mohammad Ali',
    email: 'moh@example.com',
    role: 'COO / Head of Operations',
    department: 'Operations',
    status: 'screening',
    priority: 'high',
    source: 'Executive Search',
    appliedDate: '2026-02-03',
    lastActivity: '2026-02-06',
    notes: 'Former VP Ops at Noon. Excellent operational experience.',
    score: 82
  }
];

// Hiring metrics
const hiringMetrics = {
  totalOpenRoles: 11,
  criticalRoles: 3,
  candidatesInPipeline: 117,
  avgTimeToHire: 28,
  offerAcceptanceRate: 85,
  sourceBreakdown: [
    { source: 'LinkedIn', percentage: 35 },
    { source: 'Referrals', percentage: 28 },
    { source: 'Direct Apply', percentage: 20 },
    { source: 'Agencies', percentage: 12 },
    { source: 'Other', percentage: 5 }
  ]
};

const getPriorityColor = (priority: Priority) => {
  switch (priority) {
    case 'critical': return 'text-red-400 bg-red-500/20';
    case 'high': return 'text-[#c9a227] bg-[#c9a227]/20';
    case 'medium': return 'text-blue-400 bg-blue-500/20';
    case 'low': return 'text-slate-400 bg-slate-500/20';
  }
};

const getStatusColor = (status: CandidateStatus) => {
  switch (status) {
    case 'sourced': return 'bg-slate-500';
    case 'screening': return 'bg-blue-500';
    case 'interview': return 'bg-cyan-500';
    case 'technical': return 'bg-purple-500';
    case 'final': return 'bg-orange-500';
    case 'offer': return 'bg-amber-500';
    case 'hired': return 'bg-emerald-500';
    case 'rejected': return 'bg-red-500';
    case 'withdrawn': return 'bg-gray-500';
  }
};

export default function HiringPipelinePage() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [selectedPriority, setSelectedPriority] = useState<string>('all');
  const [view, setView] = useState<'roles' | 'pipeline' | 'candidates'>('roles');
  const [expandedRole, setExpandedRole] = useState<string | null>(null);

  const departments = ['all', 'Engineering', 'Growth', 'Marketing', 'Merchants', 'Operations'];

  const filteredRoles = openRoles.filter(role => {
    if (selectedDepartment !== 'all' && role.department !== selectedDepartment) return false;
    if (selectedPriority !== 'all' && role.priority !== selectedPriority) return false;
    return true;
  });

  const filteredCandidates = candidates.filter(c => {
    if (selectedDepartment !== 'all' && c.department !== selectedDepartment) return false;
    if (selectedPriority !== 'all' && c.priority !== selectedPriority) return false;
    return true;
  });

  // Count candidates by stage
  const stageCounts = stages.map(stage => ({
    ...stage,
    count: filteredCandidates.filter(c => c.status === stage.id).length
  }));

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#c9a227]/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-[#c9a227]/10 px-4 py-2 rounded-full mb-4 sm:mb-6">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#c9a227]" />
              <span className="text-[#c9a227] font-medium text-sm sm:text-base">Hiring Pipeline</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Talent Acquisition Tracker
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
              Track, manage, and optimize our hiring pipeline to build a world-class team
            </p>
          </div>

          {/* Metrics Overview */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-white">{hiringMetrics.totalOpenRoles}</div>
              <div className="text-white/60 text-sm">Open Roles</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center border border-red-500/20">
              <div className="text-2xl sm:text-3xl font-bold text-red-400">{hiringMetrics.criticalRoles}</div>
              <div className="text-white/60 text-sm">Critical Hires</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-[#c9a227]">{hiringMetrics.candidatesInPipeline}</div>
              <div className="text-white/60 text-sm">In Pipeline</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400">{hiringMetrics.offerAcceptanceRate}%</div>
              <div className="text-white/60 text-sm">Offer Accept Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and View Toggle */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          {/* View Toggle */}
          <div className="flex gap-2">
            {[
              { id: 'roles', label: 'Open Roles', icon: Briefcase },
              { id: 'pipeline', label: 'Pipeline', icon: BarChart3 },
              { id: 'candidates', label: 'Candidates', icon: Users }
            ].map((v) => (
              <button
                key={v.id}
                onClick={() => setView(v.id as any)}
                className={`px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  view === v.id
                    ? 'bg-[#c9a227] text-black'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <v.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{v.label}</span>
              </button>
            ))}
          </div>

          {/* Filters */}
          <div className="flex gap-2 flex-wrap">
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#c9a227]"
            >
              {departments.map(dept => (
                <option key={dept} value={dept} className="bg-[#0a1628]">
                  {dept === 'all' ? 'All Departments' : dept}
                </option>
              ))}
            </select>

            <select
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#c9a227]"
            >
              <option value="all" className="bg-[#0a1628]">All Priorities</option>
              <option value="critical" className="bg-[#0a1628]">Critical</option>
              <option value="high" className="bg-[#0a1628]">High</option>
              <option value="medium" className="bg-[#0a1628]">Medium</option>
            </select>
          </div>
        </div>
      </section>

      {/* Open Roles View */}
      {view === 'roles' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="space-y-4">
            {filteredRoles.map((role) => (
              <div
                key={role.id}
                className="bg-white/5 rounded-xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedRole(expandedRole === role.id ? null : role.id)}
                  className="w-full p-4 sm:p-6 text-left hover:bg-white/5 transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg ${getPriorityColor(role.priority)}`}>
                        {role.priority === 'critical' ? (
                          <AlertCircle className="w-5 h-5" />
                        ) : (
                          <Briefcase className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{role.title}</h3>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-white/60">
                          <span>{role.department}</span>
                          <span className="text-white/30">|</span>
                          <span>Target: {role.targetHireDate}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right hidden sm:block">
                        <div className="text-white font-medium">{role.candidatesInPipeline} candidates</div>
                        <div className="text-white/40 text-sm">{role.daysOpen} days open</div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(role.priority)}`}>
                        {role.priority.charAt(0).toUpperCase() + role.priority.slice(1)}
                      </span>
                      {expandedRole === role.id ? (
                        <ChevronDown className="w-5 h-5 text-white/40" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-white/40" />
                      )}
                    </div>
                  </div>
                </button>

                {expandedRole === role.id && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-white/10 pt-4">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-white/40 text-xs mb-1">Hiring Manager</div>
                        <div className="text-white text-sm font-medium">{role.hiringManager}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-white/40 text-xs mb-1">Status</div>
                        <div className="flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full ${role.status === 'open' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                          <span className="text-white text-sm font-medium capitalize">{role.status}</span>
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-white/40 text-xs mb-1">Target Date</div>
                        <div className="text-white text-sm font-medium">{role.targetHireDate}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-white/40 text-xs mb-1">Days Open</div>
                        <div className={`text-sm font-medium ${role.daysOpen > 30 ? 'text-red-400' : 'text-white'}`}>
                          {role.daysOpen} days
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <a
                        href={`/careers#${role.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-flex items-center gap-1.5 bg-[#c9a227] hover:bg-[#d4af37] text-black px-3 py-1.5 rounded-lg text-sm font-medium transition-all"
                      >
                        View Job Description
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <button className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg text-sm transition-all">
                        <UserPlus className="w-3.5 h-3.5" />
                        Add Candidate
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Pipeline View */}
      {view === 'pipeline' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="bg-white/5 rounded-xl border border-white/10 p-4 sm:p-6">
            <h2 className="text-lg font-semibold text-white mb-6">Hiring Pipeline Stages</h2>

            {/* Pipeline visualization */}
            <div className="overflow-x-auto">
              <div className="flex gap-2 sm:gap-4 min-w-max pb-4">
                {stageCounts.map((stage, index) => {
                  const Icon = stage.icon;
                  return (
                    <div key={stage.id} className="flex-1 min-w-[120px] sm:min-w-[150px]">
                      <div className={`bg-${stage.color}-500/10 rounded-xl p-4 border border-${stage.color}-500/20 h-full`}>
                        <div className="flex items-center justify-between mb-3">
                          <Icon className={`w-5 h-5 text-${stage.color}-400`} />
                          {index < stageCounts.length - 1 && (
                            <ArrowRight className="w-4 h-4 text-white/20" />
                          )}
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stage.count}</div>
                        <div className="text-white/60 text-xs sm:text-sm">{stage.name}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Candidates by stage */}
            <div className="mt-8 space-y-6">
              {stages.filter(s => filteredCandidates.some(c => c.status === s.id)).map((stage) => {
                const stageCandidates = filteredCandidates.filter(c => c.status === stage.id);
                const Icon = stage.icon;

                return (
                  <div key={stage.id}>
                    <h3 className="text-sm font-medium text-white/60 mb-3 flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      {stage.name} ({stageCandidates.length})
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {stageCandidates.map((candidate) => (
                        <div
                          key={candidate.id}
                          className="bg-white/5 rounded-lg p-3 border border-white/10 hover:bg-white/10 transition-all"
                        >
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div>
                              <h4 className="font-medium text-white text-sm">{candidate.name}</h4>
                              <p className="text-white/60 text-xs">{candidate.role}</p>
                            </div>
                            {candidate.score && (
                              <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                                candidate.score >= 85 ? 'bg-emerald-500/20 text-emerald-400' :
                                candidate.score >= 70 ? 'bg-[#c9a227]/20 text-[#c9a227]' :
                                'bg-slate-500/20 text-slate-400'
                              }`}>
                                {candidate.score}%
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-white/40">
                            <span>via {candidate.source}</span>
                            <span className="text-white/20">|</span>
                            <span>Last: {candidate.lastActivity}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Candidates View */}
      {view === 'candidates' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
            {/* Table header */}
            <div className="hidden sm:grid grid-cols-12 gap-4 p-4 bg-white/5 border-b border-white/10 text-xs font-medium text-white/60 uppercase tracking-wider">
              <div className="col-span-3">Candidate</div>
              <div className="col-span-3">Role</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-1">Score</div>
              <div className="col-span-2">Source</div>
              <div className="col-span-1">Priority</div>
            </div>

            {/* Candidates list */}
            <div className="divide-y divide-white/10">
              {filteredCandidates.map((candidate) => (
                <div
                  key={candidate.id}
                  className="p-4 hover:bg-white/5 transition-all"
                >
                  <div className="sm:grid sm:grid-cols-12 sm:gap-4 sm:items-center space-y-2 sm:space-y-0">
                    {/* Candidate info */}
                    <div className="col-span-3">
                      <div className="font-medium text-white">{candidate.name}</div>
                      <div className="text-white/40 text-sm">{candidate.email}</div>
                    </div>

                    {/* Role */}
                    <div className="col-span-3">
                      <div className="text-white text-sm">{candidate.role}</div>
                      <div className="text-white/40 text-xs">{candidate.department}</div>
                    </div>

                    {/* Status */}
                    <div className="col-span-2">
                      <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium ${
                        candidate.status === 'hired' ? 'bg-emerald-500/20 text-emerald-400' :
                        candidate.status === 'offer' ? 'bg-amber-500/20 text-amber-400' :
                        candidate.status === 'final' ? 'bg-orange-500/20 text-orange-400' :
                        candidate.status === 'technical' ? 'bg-purple-500/20 text-purple-400' :
                        candidate.status === 'interview' ? 'bg-cyan-500/20 text-cyan-400' :
                        'bg-slate-500/20 text-slate-400'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${getStatusColor(candidate.status)}`} />
                        {candidate.status.charAt(0).toUpperCase() + candidate.status.slice(1)}
                      </span>
                    </div>

                    {/* Score */}
                    <div className="col-span-1">
                      {candidate.score ? (
                        <span className={`text-sm font-medium ${
                          candidate.score >= 85 ? 'text-emerald-400' :
                          candidate.score >= 70 ? 'text-[#c9a227]' :
                          'text-white/60'
                        }`}>
                          {candidate.score}%
                        </span>
                      ) : (
                        <span className="text-white/30 text-sm">-</span>
                      )}
                    </div>

                    {/* Source */}
                    <div className="col-span-2">
                      <span className="text-white/60 text-sm">{candidate.source}</span>
                    </div>

                    {/* Priority */}
                    <div className="col-span-1">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${getPriorityColor(candidate.priority)}`}>
                        {candidate.priority.charAt(0).toUpperCase() + candidate.priority.slice(1)}
                      </span>
                    </div>
                  </div>

                  {/* Notes */}
                  {candidate.notes && (
                    <div className="mt-2 pt-2 border-t border-white/5">
                      <p className="text-white/40 text-sm">{candidate.notes}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Source Analytics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white/5 rounded-xl border border-white/10 p-6">
          <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#c9a227]" />
            Candidate Source Analytics
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {hiringMetrics.sourceBreakdown.map((source) => (
              <div key={source.source} className="bg-white/5 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{source.source}</span>
                  <span className="text-[#c9a227] font-bold">{source.percentage}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#c9a227] rounded-full transition-all"
                    style={{ width: `${source.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Goals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-[#c9a227]/10 to-emerald-500/10 rounded-xl border border-[#c9a227]/20 p-6">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-[#c9a227]" />
            H1 Hiring Goals
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/60 text-sm">Total Hires Needed</span>
                <span className="text-white font-bold">18</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/60 text-sm">Currently Filled</span>
                <span className="text-emerald-400 font-bold">4</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '22%' }} />
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/60 text-sm">Avg. Time to Hire Target</span>
                <span className="text-white font-bold">30 days</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/60 text-sm">Current Average</span>
                <span className={`font-bold ${hiringMetrics.avgTimeToHire <= 30 ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {hiringMetrics.avgTimeToHire} days
                </span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '93%' }} />
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/60 text-sm">Offer Accept Target</span>
                <span className="text-white font-bold">80%</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/60 text-sm">Current Rate</span>
                <span className="text-emerald-400 font-bold">{hiringMetrics.offerAcceptanceRate}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '100%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    <GlobalFooter />
    </div>
  );
}
