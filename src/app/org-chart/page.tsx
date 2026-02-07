'use client';

import React, { useState } from 'react';
import {
  Users,
  Code,
  TrendingUp,
  Megaphone,
  HandshakeIcon,
  Building2,
  Headphones,
  Briefcase,
  ChevronDown,
  ChevronRight,
  CheckCircle,
  Clock,
  AlertCircle,
  Target,
  Layers,
  Globe,
  Network,
  DollarSign,
  Heart,
  Database,
  Palette,
  ArrowRight,
  User,
  UserPlus,
  Calendar
} from 'lucide-react';

// ========================================
// NUQTA ORG CHART - HORIZON-BASED STRUCTURE
// ========================================

interface TeamMember {
  name: string;
  role: string;
  status: 'filled' | 'hiring' | 'planned';
  priority?: 'critical' | 'high' | 'medium' | 'low';
  directReports?: TeamMember[];
  department?: string;
}

interface Phase {
  id: string;
  name: string;
  timeline: string;
  description: string;
  targetHeadcount: number;
  color: string;
}

// Define horizons/phases
const phases: Phase[] = [
  {
    id: 'h1',
    name: 'H1 - Launch Phase',
    timeline: 'Months 1-6',
    description: 'Lean team to prove the loop: 50K MAU, 1,500 merchants, 30% D30 retention',
    targetHeadcount: 20,
    color: 'emerald'
  },
  {
    id: 'h2',
    name: 'H2 - Growth Phase',
    timeline: 'Months 7-18',
    description: 'Scale proven model: 200K MAU, 5,000 merchants, GCC expansion',
    targetHeadcount: 45,
    color: 'blue'
  },
  {
    id: 'h3',
    name: 'H3 - Scale Phase',
    timeline: 'Months 19-36',
    description: 'Regional dominance: 1M+ MAU, 15,000+ merchants, multi-country operations',
    targetHeadcount: 80,
    color: 'purple'
  }
];

// Current H1 team structure
const h1OrgChart: TeamMember = {
  name: 'Rejaul Karim',
  role: 'Founder & CEO',
  status: 'filled',
  department: 'Executive',
  directReports: [
    {
      name: 'HIRED',
      role: 'CTO',
      status: 'filled',
      department: 'Engineering',
      directReports: [
        { name: 'Hiring', role: 'Lead Full-Stack Engineer', status: 'hiring', priority: 'critical' },
        { name: 'Hiring', role: 'Senior Mobile Engineer', status: 'hiring', priority: 'high' },
        { name: 'Hiring', role: 'UI/UX Designer', status: 'hiring', priority: 'high' },
        { name: 'Planned', role: 'Backend Engineer', status: 'planned', priority: 'medium' }
      ]
    },
    {
      name: 'HIRED',
      role: 'CHRO',
      status: 'filled',
      department: 'People',
      directReports: [
        { name: 'Planned', role: 'HR Coordinator', status: 'planned', priority: 'medium' }
      ]
    },
    {
      name: 'HIRED',
      role: 'CMO',
      status: 'filled',
      department: 'Marketing',
      directReports: [
        { name: 'Hiring', role: 'Content & Social Media Manager', status: 'hiring', priority: 'high' },
        { name: 'Hiring', role: 'Creative Designer', status: 'hiring', priority: 'high' },
        { name: 'Planned', role: 'Video Content Creator', status: 'planned', priority: 'medium' },
        { name: 'Planned', role: 'Performance Marketer', status: 'planned', priority: 'low' }
      ]
    },
    {
      name: 'Hiring',
      role: 'COO',
      status: 'hiring',
      priority: 'high',
      department: 'Operations',
      directReports: [
        { name: 'Planned', role: 'Finance & Admin Coordinator', status: 'planned', priority: 'medium' },
        { name: 'Planned', role: 'Customer Support Lead', status: 'planned', priority: 'medium' }
      ]
    },
    {
      name: 'Hiring',
      role: 'Head of Growth',
      status: 'hiring',
      priority: 'critical',
      department: 'Growth',
      directReports: [
        { name: 'Hiring', role: 'Community & Ambassador Manager', status: 'hiring', priority: 'high' },
        { name: 'Planned', role: 'Growth Analyst', status: 'planned', priority: 'medium' }
      ]
    },
    {
      name: 'Hiring',
      role: 'Head of Merchant Partnerships',
      status: 'hiring',
      priority: 'critical',
      department: 'Merchants',
      directReports: [
        { name: 'Hiring', role: 'Merchant Success Manager', status: 'hiring', priority: 'high' },
        { name: 'Hiring', role: 'Merchant Marketing Manager', status: 'hiring', priority: 'high' },
        { name: 'Planned', role: 'Business Development Rep', status: 'planned', priority: 'medium' }
      ]
    }
  ]
};

// Department configurations
const departments = [
  { id: 'executive', name: 'Executive & Leadership', icon: Briefcase, color: 'amber', h1: 5, h2: 6, h3: 8 },
  { id: 'engineering', name: 'Product & Engineering', icon: Code, color: 'cyan', h1: 4, h2: 10, h3: 15 },
  { id: 'growth', name: 'Growth & Analytics', icon: TrendingUp, color: 'pink', h1: 3, h2: 8, h3: 12 },
  { id: 'marketing', name: 'Marketing & Brand', icon: Megaphone, color: 'orange', h1: 4, h2: 10, h3: 15 },
  { id: 'merchants', name: 'Merchant Success', icon: HandshakeIcon, color: 'emerald', h1: 4, h2: 12, h3: 18 },
  { id: 'operations', name: 'Operations & Finance', icon: Building2, color: 'slate', h1: 1, h2: 5, h3: 8 },
  { id: 'support', name: 'Customer Support', icon: Headphones, color: 'purple', h1: 1, h2: 4, h3: 8 }
];

const getStatusColor = (status: TeamMember['status'], priority?: string) => {
  if (status === 'filled') return 'bg-emerald-500';
  if (status === 'hiring') {
    if (priority === 'critical') return 'bg-red-500 animate-pulse';
    return 'bg-[#c9a227]';
  }
  return 'bg-slate-500';
};

const getStatusBadge = (status: TeamMember['status'], priority?: string) => {
  if (status === 'filled') {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400">
        <CheckCircle className="w-3 h-3" /> Active
      </span>
    );
  }
  if (status === 'hiring') {
    if (priority === 'critical') {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-red-500/20 text-red-400 animate-pulse">
          <AlertCircle className="w-3 h-3" /> Critical
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-[#c9a227]/20 text-[#c9a227]">
        <UserPlus className="w-3 h-3" /> Hiring
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-slate-500/20 text-slate-400">
      <Clock className="w-3 h-3" /> Planned
    </span>
  );
};

const OrgNode = ({ member, level = 0, isLast = false }: { member: TeamMember; level?: number; isLast?: boolean }) => {
  const [expanded, setExpanded] = useState(level < 2);
  const hasReports = member.directReports && member.directReports.length > 0;

  return (
    <div className={`relative ${level > 0 ? 'ml-6 sm:ml-8' : ''}`}>
      {/* Connection line */}
      {level > 0 && (
        <div className="absolute left-0 top-0 w-6 sm:w-8 h-6 border-l-2 border-b-2 border-white/10 -translate-x-6 sm:-translate-x-8" />
      )}

      {/* Node */}
      <div
        className={`relative bg-white/5 rounded-lg border border-white/10 p-3 sm:p-4 mb-3 hover:bg-white/10 transition-all ${hasReports ? 'cursor-pointer' : ''}`}
        onClick={() => hasReports && setExpanded(!expanded)}
      >
        <div className="flex items-start gap-3">
          {/* Status indicator */}
          <div className={`w-3 h-3 rounded-full mt-1.5 ${getStatusColor(member.status, member.priority)}`} />

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h4 className="font-semibold text-white text-sm sm:text-base">
                {member.status === 'filled' ? member.name : member.role}
              </h4>
              {getStatusBadge(member.status, member.priority)}
            </div>
            {member.status === 'filled' && (
              <p className="text-white/60 text-xs sm:text-sm">{member.role}</p>
            )}
            {hasReports && (
              <p className="text-white/40 text-xs mt-1">
                {member.directReports!.length} direct report{member.directReports!.length !== 1 ? 's' : ''}
              </p>
            )}
          </div>

          {hasReports && (
            <button className="text-white/40 hover:text-white/60 p-1">
              {expanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
          )}
        </div>
      </div>

      {/* Children */}
      {hasReports && expanded && (
        <div className="relative">
          {/* Vertical connection line */}
          <div className="absolute left-3 top-0 bottom-6 w-px bg-white/10" />

          {member.directReports!.map((report, index) => (
            <OrgNode
              key={`${report.role}-${index}`}
              member={report}
              level={level + 1}
              isLast={index === member.directReports!.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function OrgChartPage() {
  const [selectedPhase, setSelectedPhase] = useState<string>('h1');
  const [view, setView] = useState<'tree' | 'departments'>('tree');

  // Calculate current stats
  const filledCount = 4; // CEO, CTO, CHRO, CMO
  const hiringCount = 10;
  const plannedCount = 6;
  const totalH1 = 20;

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#c9a227]/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-[#c9a227]/10 px-4 py-2 rounded-full mb-4 sm:mb-6">
              <Network className="w-4 h-4 sm:w-5 sm:h-5 text-[#c9a227]" />
              <span className="text-[#c9a227] font-medium text-sm sm:text-base">Organization Structure</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Nuqta Team Structure
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
              Building a world-class team to revolutionize rewards and payments in the GCC
            </p>
          </div>

          {/* Current Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8 sm:mb-12">
            <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400">{filledCount}</div>
              <div className="text-white/60 text-sm">Filled</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-[#c9a227]">{hiringCount}</div>
              <div className="text-white/60 text-sm">Hiring</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-slate-400">{plannedCount}</div>
              <div className="text-white/60 text-sm">Planned</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-white">{totalH1}</div>
              <div className="text-white/60 text-sm">H1 Target</div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase Selector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-white/5 rounded-xl border border-white/10 p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#c9a227]" />
            Growth Horizons
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {phases.map((phase) => (
              <button
                key={phase.id}
                onClick={() => setSelectedPhase(phase.id)}
                className={`p-4 rounded-xl border transition-all text-left ${
                  selectedPhase === phase.id
                    ? 'bg-[#c9a227]/20 border-[#c9a227]/50'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm font-medium ${
                    phase.color === 'emerald' ? 'text-emerald-400' :
                    phase.color === 'blue' ? 'text-blue-400' : 'text-purple-400'
                  }`}>
                    {phase.timeline}
                  </span>
                  <span className="text-white/60 text-sm">{phase.targetHeadcount} people</span>
                </div>
                <h3 className="font-semibold text-white mb-1">{phase.name}</h3>
                <p className="text-white/50 text-sm line-clamp-2">{phase.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* View Toggle */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex gap-2">
          <button
            onClick={() => setView('tree')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              view === 'tree'
                ? 'bg-[#c9a227] text-black'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <Network className="w-4 h-4 inline mr-2" />
            Org Tree
          </button>
          <button
            onClick={() => setView('departments')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              view === 'departments'
                ? 'bg-[#c9a227] text-black'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <Building2 className="w-4 h-4 inline mr-2" />
            Departments
          </button>
        </div>
      </section>

      {/* Org Chart View */}
      {view === 'tree' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="bg-white/5 rounded-xl border border-white/10 p-4 sm:p-6 lg:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg sm:text-xl font-semibold text-white">
                {selectedPhase === 'h1' ? 'H1 Launch Team' : selectedPhase === 'h2' ? 'H2 Growth Team' : 'H3 Scale Team'}
              </h2>
              <div className="flex items-center gap-4 text-xs sm:text-sm">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-white/60">Filled</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#c9a227]" />
                  <span className="text-white/60">Hiring</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                  <span className="text-white/60">Planned</span>
                </span>
              </div>
            </div>

            {selectedPhase === 'h1' && <OrgNode member={h1OrgChart} />}

            {selectedPhase === 'h2' && (
              <div className="text-center py-12">
                <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">H2 Team Structure</h3>
                <p className="text-white/60 max-w-md mx-auto mb-4">
                  H2 expands the H1 structure with additional hires across all departments to support 200K MAU and GCC expansion.
                </p>
                <div className="inline-flex items-center gap-2 text-blue-400">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Months 7-18</span>
                </div>
              </div>
            )}

            {selectedPhase === 'h3' && (
              <div className="text-center py-12">
                <Target className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">H3 Team Structure</h3>
                <p className="text-white/60 max-w-md mx-auto mb-4">
                  Full organizational scale with 80+ team members, regional offices, and specialized sub-teams for 1M+ MAU.
                </p>
                <div className="inline-flex items-center gap-2 text-purple-400">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Months 19-36</span>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Departments View */}
      {view === 'departments' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {departments.map((dept) => {
              const Icon = dept.icon;
              const headcount = selectedPhase === 'h1' ? dept.h1 : selectedPhase === 'h2' ? dept.h2 : dept.h3;

              return (
                <div
                  key={dept.id}
                  className="bg-white/5 rounded-xl border border-white/10 p-4 sm:p-6 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-${dept.color}-500/20`}>
                      <Icon className={`w-6 h-6 text-${dept.color}-400`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-1">{dept.name}</h3>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-white/60">
                          <Users className="w-4 h-4 inline mr-1" />
                          {headcount} {selectedPhase.toUpperCase()} Headcount
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Growth projection */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex justify-between text-xs text-white/40 mb-2">
                      <span>Team Growth</span>
                      <span>H1 → H3</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-medium">{dept.h1}</span>
                      <ArrowRight className="w-3 h-3 text-white/40" />
                      <span className="text-blue-400 font-medium">{dept.h2}</span>
                      <ArrowRight className="w-3 h-3 text-white/40" />
                      <span className="text-purple-400 font-medium">{dept.h3}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Hiring Priority Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-red-500/10 to-[#c9a227]/10 rounded-xl border border-red-500/20 p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <AlertCircle className="w-6 h-6 text-red-400" />
            Critical Hiring Priorities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { role: 'Lead Full-Stack Engineer', dept: 'Engineering', reason: 'Technical foundation & architecture' },
              { role: 'Head of Growth', dept: 'Growth', reason: 'User acquisition & retention strategy' },
              { role: 'Head of Merchant Partnerships', dept: 'Merchants', reason: 'Merchant network development' }
            ].map((hire, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-4 border border-red-500/20">
                <div className="flex items-start gap-3">
                  <span className="bg-red-500/20 text-red-400 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="font-semibold text-white">{hire.role}</h4>
                    <p className="text-white/60 text-sm">{hire.dept}</p>
                    <p className="text-white/40 text-xs mt-1">{hire.reason}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <a
              href="/careers"
              className="inline-flex items-center gap-2 bg-[#c9a227] hover:bg-[#d4af37] text-black px-6 py-3 rounded-xl font-semibold transition-all"
            >
              View All Open Roles
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Briefcase className="w-6 h-6 text-[#c9a227]" />
          Current Executive Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { name: 'Rejaul Karim', role: 'Founder & CEO', status: 'filled', focus: 'Vision, Fundraising, Strategy' },
            { name: 'CTO', role: 'Chief Technology Officer', status: 'filled', focus: 'Product, Engineering, Tech Vision' },
            { name: 'CHRO', role: 'Chief Human Resources Officer', status: 'filled', focus: 'Team, Culture, Hiring' },
            { name: 'CMO', role: 'Chief Marketing Officer', status: 'filled', focus: 'Brand, Marketing, Social' }
          ].map((exec, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#c9a227]/10 to-transparent rounded-xl border border-[#c9a227]/20 p-6 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#c9a227]/20 flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-[#c9a227]" />
              </div>
              <h3 className="font-semibold text-white mb-1">{exec.name}</h3>
              <p className="text-[#c9a227] text-sm mb-2">{exec.role}</p>
              <p className="text-white/50 text-xs">{exec.focus}</p>
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400 mt-3">
                <CheckCircle className="w-3 h-3" /> Active
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Team Culture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white/5 rounded-xl border border-white/10 p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Heart className="w-6 h-6 text-rose-400" />
            Team Culture & Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Move Fast', desc: 'Ship weekly, iterate daily' },
              { title: 'User Obsessed', desc: 'Every decision starts with the user' },
              { title: 'Data Driven', desc: 'Measure everything, optimize constantly' },
              { title: 'One Team', desc: 'No silos, shared success' }
            ].map((value, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-4 text-center">
                <h4 className="font-semibold text-white mb-1">{value.title}</h4>
                <p className="text-white/60 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
