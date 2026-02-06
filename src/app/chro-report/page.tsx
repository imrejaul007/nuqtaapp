'use client';

import React, { useState } from 'react';
import {
  UserCircle,
  Target,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowRight,
  Users,
  Building2,
  Rocket,
  Lightbulb,
  Calendar,
  Clock,
  Flag,
  Star,
  Award,
  Globe,
  Heart,
  Zap,
  MessageSquare,
  BarChart3,
  Briefcase,
  GraduationCap,
  Coffee,
  Smile,
  HandHeart,
  Sparkles,
  Shield,
  Brain,
  UserPlus,
  UserCheck,
  Handshake,
  Gift
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

/**
 * CHRO AGENT REPORT
 *
 * AI Agent: David Okonkwo (23 years experience)
 * Background: Former CHRO at Uber MENA, built teams from 50 to 2,000+
 * Expertise: Talent Acquisition, Culture Building, High-Growth Scaling
 *
 * This is a comprehensive HR analysis and action plan for Nuqta.
 */

type SectionId = 'profile' | 'diagnosis' | 'problems' | 'solutions' | 'execution' | 'metrics';

const sections: { id: SectionId; label: string }[] = [
  { id: 'profile', label: 'Agent Profile' },
  { id: 'diagnosis', label: 'People Diagnosis' },
  { id: 'problems', label: 'Problems Identified' },
  { id: 'solutions', label: 'People Solutions' },
  { id: 'execution', label: 'Hiring Playbook' },
  { id: 'metrics', label: 'People Metrics' },
];

export default function CHROReportPage() {
  const [activeSection, setActiveSection] = useState<SectionId>('profile');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2a4a] to-[#0a1628]">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-900/50 to-teal-800/30 border-b border-teal-500/30">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-xl">
              <UserCircle size={48} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-white">CHRO People Report</h1>
                <span className="px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-sm border border-teal-500/30">
                  Agent Report
                </span>
              </div>
              <p className="text-teal-300 text-lg">AI Agent: David Okonkwo • 23 Years HR Experience</p>
              <p className="text-slate-400 mt-2">Former CHRO at Uber MENA • Scaled 50→2,000+ employees • Expert in high-growth culture</p>
            </div>
            <div className="text-right">
              <p className="text-teal-400 font-bold text-xl">NUQTA</p>
              <p className="text-slate-500 text-sm">Analysis Date: Feb 2026</p>
              <div className="mt-2 flex items-center gap-2 justify-end">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm">Report Complete</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-[#0a1628]/80 backdrop-blur-sm border-b border-white/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                  activeSection === section.id
                    ? 'bg-teal-500 text-white'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Agent Profile Section */}
        {activeSection === 'profile' && (
          <div className="space-y-8">
            {/* Agent Card */}
            <div className="bg-gradient-to-r from-teal-900/30 to-cyan-900/30 rounded-2xl border border-teal-500/30 p-8">
              <div className="flex items-start gap-6">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-5xl font-bold text-white">
                  DO
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-2">David Okonkwo</h2>
                  <p className="text-teal-400 text-lg mb-4">Chief Human Resources Officer AI Agent</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/5 rounded-lg p-3 text-center">
                      <p className="text-2xl font-bold text-teal-400">23</p>
                      <p className="text-slate-400 text-sm">Years Experience</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 text-center">
                      <p className="text-2xl font-bold text-teal-400">2,000+</p>
                      <p className="text-slate-400 text-sm">Team Built</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 text-center">
                      <p className="text-2xl font-bold text-teal-400">15</p>
                      <p className="text-slate-400 text-sm">Startups Scaled</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-xl border border-white/10 p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Award className="text-teal-400" size={20} />
                  Professional Background
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span><strong>Uber MENA CHRO (2016-2024)</strong>: Built regional team from 50 to 2,000+</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span><strong>LinkedIn Talent Solutions (2012-2016)</strong>: Led enterprise hiring strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span><strong>McKinsey & Co (2005-2012)</strong>: Org design and transformation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span><strong>Education</strong>: MBA from Stanford, Psychology from Oxford</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl border border-white/10 p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Star className="text-yellow-400" size={20} />
                  Core Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'High-Growth Hiring',
                    'Culture Architecture',
                    'Startup Leadership',
                    'Performance Systems',
                    'Compensation Design',
                    'Remote Team Building',
                    'MENA Talent Market',
                    'Equity & Inclusion',
                    'Employer Branding',
                    'Retention Strategy',
                    'Org Design',
                    'Leadership Development'
                  ].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm border border-teal-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Notable Achievements */}
            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Rocket className="text-teal-400" size={20} />
                Notable Achievements
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-lg p-4 border border-teal-500/30">
                  <div className="text-3xl font-bold text-teal-400">50→2,000</div>
                  <p className="text-slate-400 text-sm">Scaled Uber MENA in 3 years</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg p-4 border border-yellow-500/30">
                  <div className="text-3xl font-bold text-yellow-400">4.8/5.0</div>
                  <p className="text-slate-400 text-sm">Glassdoor rating achieved</p>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg p-4 border border-green-500/30">
                  <div className="text-3xl font-bold text-green-400">12%</div>
                  <p className="text-slate-400 text-sm">Annual turnover (industry: 25%)</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-4 border border-blue-500/30">
                  <div className="text-3xl font-bold text-blue-400">#1</div>
                  <p className="text-slate-400 text-sm">Best Places to Work MENA</p>
                </div>
              </div>
            </div>

            {/* Agent Message */}
            <div className="bg-gradient-to-r from-teal-900/30 to-cyan-900/30 rounded-xl border border-teal-500/30 p-6">
              <div className="flex items-start gap-4">
                <MessageSquare className="text-teal-400 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Opening Assessment - UPDATED</h4>
                  <p className="text-slate-300 leading-relaxed">
                    "Incredible progress! The founding team has been successfully built with 8 members including
                    CTO, CHRO, CMO, 2 Developers, BDA, and Graphic Designer. The product is 100% complete.
                    Now the focus shifts to: 1) Defining company culture with the new team, 2) Creating
                    compensation frameworks, 3) Building employer brand, and 4) Preparing for post-traction scaling.
                    The CHRO hire is now leading people operations and can drive these initiatives."
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* People Diagnosis Section */}
        {activeSection === 'diagnosis' && (
          <div className="space-y-8">
            {/* People Health Score */}
            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <BarChart3 className="text-teal-400" size={20} />
                People Health Scorecard
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { area: 'Team Size', score: 100, status: 'excellent', note: '8 members hired' },
                  { area: 'Hiring Pipeline', score: 90, status: 'excellent', note: 'All key roles filled' },
                  { area: 'Culture Definition', score: 40, status: 'in-progress', note: 'CHRO now defining' },
                  { area: 'Compensation', score: 50, status: 'in-progress', note: 'Framework in progress' },
                  { area: 'Employee Experience', score: 60, status: 'good', note: 'Team onboarded' },
                  { area: 'Documentation', score: 70, status: 'good', note: 'Roles clearly defined' },
                  { area: 'Performance System', score: 30, status: 'in-progress', note: 'Setting up with CHRO' },
                  { area: 'Employer Brand', score: 40, status: 'in-progress', note: 'CMO building presence' }
                ].map((item) => (
                  <div key={item.area} className="bg-white/5 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 text-sm">{item.area}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        item.status === 'excellent' ? 'bg-green-500/20 text-green-400' :
                        item.status === 'good' ? 'bg-blue-500/20 text-blue-400' :
                        item.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' :
                        item.status === 'critical' ? 'bg-red-500/20 text-red-400' :
                        'bg-orange-500/20 text-orange-400'
                      }`}>
                        {item.status.toUpperCase()}
                      </span>
                    </div>
                    <div className="flex items-end gap-2">
                      <div className="text-3xl font-bold text-white">{item.score}</div>
                      <div className="text-slate-500 text-sm mb-1">/100</div>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                      <div
                        className={`h-2 rounded-full ${
                          item.score >= 80 ? 'bg-green-500' :
                          item.score >= 60 ? 'bg-blue-500' :
                          item.score >= 40 ? 'bg-yellow-500' :
                          'bg-orange-500'
                        }`}
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                    <p className="text-slate-500 text-xs mt-2">{item.note}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-green-400 font-bold">Overall People Health: 65/100 (TEAM READY)</p>
                <p className="text-slate-400 text-sm mt-1">
                  Full founding team of 8 members hired. CHRO now building culture and HR infrastructure for March 1 launch.
                </p>
              </div>
            </div>

            {/* Current Team Analysis */}
            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Users className="text-teal-400" size={20} />
                Current Team Structure
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h5 className="text-teal-400 font-bold">Current Team (8 Members)</h5>
                  <div className="space-y-2">
                    {[
                      { role: 'C-Suite (CEO, CTO, CHRO, CMO)', count: 4, capacity: 'Complete' },
                      { role: 'Development', count: 2, capacity: 'Full stack covered' },
                      { role: 'Business Development', count: 1, capacity: 'Converting merchants' },
                      { role: 'Design', count: 1, capacity: 'Brand & content' },
                      { role: 'Operations', count: 0, capacity: 'Post-launch hire' },
                      { role: 'Support', count: 0, capacity: 'Post-launch hire' }
                    ].map((item) => (
                      <div key={item.role} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <span className="text-slate-300">{item.role}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-white font-bold">{item.count}</span>
                          <span className={`text-xs ${
                            item.capacity === 'Complete' || item.capacity.includes('covered')
                              ? 'text-green-400' : 'text-slate-500'
                          }`}>
                            {item.capacity}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h5 className="text-teal-400 font-bold">Immediate Needs Assessment</h5>
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <p className="text-green-400 font-bold mb-2">Team Complete ✓</p>
                    <p className="text-slate-400 text-sm">
                      Current: 8 people | Ready for launch phase
                    </p>
                    <p className="text-slate-400 text-sm mt-2">
                      The founders are doing the work of 8 people. This is not sustainable and explains
                      why key metrics (merchant activation, user growth) are lagging.
                    </p>
                  </div>
                  <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                    <p className="text-orange-400 font-bold mb-2">Burnout Risk</p>
                    <p className="text-slate-400 text-sm">
                      HIGH. Founders wearing too many hats leads to poor decisions, slow execution, and eventual burnout.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Gap Analysis */}
            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Brain className="text-teal-400" size={20} />
                Critical Skills Gap Analysis
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-slate-400">Skill/Function</th>
                      <th className="text-center py-3 px-4 text-slate-400">Current</th>
                      <th className="text-center py-3 px-4 text-slate-400">Needed</th>
                      <th className="text-center py-3 px-4 text-slate-400">Gap</th>
                      <th className="text-center py-3 px-4 text-slate-400">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { skill: 'Merchant Acquisition (BDA)', current: 1, needed: 1, priority: 'P0' },
                      { skill: 'Operations Manager', current: 1, needed: 1, priority: 'P0' },
                      { skill: 'Full-Stack Developer', current: 2, needed: 2, priority: 'P1' },
                      { skill: 'Content/Social Media', current: 1, needed: 1, priority: 'P1' },
                      { skill: 'Customer Support', current: 0, needed: 1, priority: 'P1' },
                      { skill: 'Data/Analytics', current: 0, needed: 1, priority: 'P2' },
                      { skill: 'Finance/Admin', current: 0.5, needed: 1, priority: 'P2' }
                    ].map((row) => (
                      <tr key={row.skill} className="border-b border-white/5">
                        <td className="py-3 px-4 text-slate-300">{row.skill}</td>
                        <td className="py-3 px-4 text-center text-red-400">{row.current}</td>
                        <td className="py-3 px-4 text-center text-green-400">{row.needed}</td>
                        <td className="py-3 px-4 text-center text-white font-bold">{row.needed - row.current}</td>
                        <td className="py-3 px-4 text-center">
                          <span className={`px-2 py-1 rounded text-xs ${
                            row.priority === 'P0' ? 'bg-red-500/20 text-red-400' :
                            row.priority === 'P1' ? 'bg-orange-500/20 text-orange-400' :
                            'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {row.priority}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Problems Identified Section */}
        {activeSection === 'problems' && (
          <div className="space-y-6">
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-400 mb-2">Critical People Problems Identified</h3>
              <p className="text-slate-400">Based on 23 years of building high-growth teams</p>
            </div>

            {/* Problem Cards */}
            {[
              {
                id: 1,
                severity: 'critical',
                title: 'Founders Doing Everything = Nothing Done Well',
                impact: 'Execution is 3-5x slower than it should be',
                details: [
                  'Founders are CEO, COO, CMO, and customer support all at once',
                  'Context-switching between roles destroys productivity',
                  'Strategic work (fundraising, partnerships) suffers from operational demands',
                  'No time for deep work on any single function',
                  'Decision quality degrades under cognitive overload'
                ],
                myTake: 'At Uber, we learned that founders should only do 2-3 things: vision, fundraising, and one core function. Everything else needs to be delegated. Right now, Nuqta founders are doing 10+ jobs poorly instead of 3 jobs excellently.'
              },
              {
                id: 2,
                severity: 'critical',
                title: 'Zero Hiring Pipeline',
                impact: 'Every hire takes 2-3 months instead of 2-3 weeks',
                details: [
                  'No job descriptions written or posted',
                  'No active sourcing or outreach happening',
                  'LinkedIn recruiter seat not utilized',
                  'No referral network being tapped',
                  'No interview process or evaluation criteria defined'
                ],
                myTake: 'Hiring is a pipeline, not an event. You should always be building candidate relationships, even when you\'re not hiring. Right now, if you decide to hire tomorrow, it will take 60+ days because you\'re starting from zero.'
              },
              {
                id: 3,
                severity: 'critical',
                title: 'No Defined Culture or Values',
                impact: 'Team alignment impossible, future hiring random',
                details: [
                  'No written mission/vision/values',
                  'No behavioral expectations documented',
                  'No understanding of "who we are" as a company',
                  'No rituals, traditions, or cultural touchpoints',
                  'Can\'t evaluate cultural fit without defined culture'
                ],
                myTake: 'Culture isn\'t ping pong tables and free lunch. It\'s "how we make decisions when no one is watching." Without defining this, you\'ll hire people who don\'t fit and be confused why.'
              },
              {
                id: 4,
                severity: 'high',
                title: 'No Compensation Framework',
                impact: 'Can\'t attract talent, risk of unfair pay',
                details: [
                  'No salary bands or benchmarking data',
                  'No equity philosophy or allocation plan',
                  'Can\'t articulate total comp package to candidates',
                  'Risk of paying below market and losing candidates',
                  'Risk of paying above market and burning cash'
                ],
                myTake: 'In UAE startup market, top talent has options. If you can\'t clearly articulate competitive comp + equity upside, you\'ll lose every candidate to a company that can.'
              },
              {
                id: 5,
                severity: 'high',
                title: 'No Employer Brand',
                impact: 'Inbound talent pipeline doesn\'t exist',
                details: [
                  'Nuqta is unknown in UAE startup/tech community',
                  'No presence at meetups, events, or conferences',
                  'No content about working at Nuqta',
                  'No Glassdoor, LinkedIn Life, or careers page',
                  'Best candidates don\'t know you exist'
                ],
                myTake: 'The best candidates don\'t apply to jobs - they get recruited. But they\'re only recruitableto companies they\'ve heard of. We need to build visibility in the talent market.'
              },
              {
                id: 6,
                severity: 'high',
                title: 'No Documentation or Processes',
                impact: 'Onboarding impossible, knowledge siloed',
                details: [
                  'No onboarding documentation',
                  'No role clarity or responsibility matrices',
                  'No standard operating procedures',
                  'All knowledge in founders\' heads',
                  'New hires will be lost and unproductive'
                ],
                myTake: 'If you hire someone tomorrow, how do they know what to do? Who explains the product? Where are the docs? You\'ll spend more time managing new hires than if you\'d documented first.'
              },
              {
                id: 7,
                severity: 'medium',
                title: 'No Performance or Feedback Systems',
                impact: 'Can\'t course-correct or develop talent',
                details: [
                  'No 1:1 meeting cadence established',
                  'No performance expectations set',
                  'No feedback culture or mechanisms',
                  'No way to identify and address underperformance',
                  'No growth paths defined for roles'
                ],
                myTake: 'Early stage, you can skip formal performance reviews. But you can\'t skip weekly 1:1s. That\'s where alignment happens.'
              },
              {
                id: 8,
                severity: 'medium',
                title: 'UAE Labor Law Compliance Gaps',
                impact: 'Legal/visa risks as you scale',
                details: [
                  'Employment contract templates may not be compliant',
                  'Visa sponsorship process not established',
                  'Gratuity calculations not planned',
                  'Leave policies may not meet legal minimums',
                  'No legal review of HR practices'
                ],
                myTake: 'UAE labor law is strict. Get this wrong and you face fines, lawsuits, or inability to hire. Needs to be fixed before scaling hiring.'
              }
            ].map((problem) => (
              <div
                key={problem.id}
                className={`bg-white/5 rounded-xl border p-6 ${
                  problem.severity === 'critical' ? 'border-red-500/30' :
                  problem.severity === 'high' ? 'border-orange-500/30' :
                  'border-yellow-500/30'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      problem.severity === 'critical' ? 'bg-red-500/20' :
                      problem.severity === 'high' ? 'bg-orange-500/20' :
                      'bg-yellow-500/20'
                    }`}>
                      <AlertTriangle className={`${
                        problem.severity === 'critical' ? 'text-red-400' :
                        problem.severity === 'high' ? 'text-orange-400' :
                        'text-yellow-400'
                      }`} size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">Problem #{problem.id}: {problem.title}</h4>
                      <p className="text-slate-400 text-sm">{problem.impact}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    problem.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                    problem.severity === 'high' ? 'bg-orange-500/20 text-orange-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {problem.severity.toUpperCase()}
                  </span>
                </div>
                <ul className="space-y-2 mb-4">
                  {problem.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-300">
                      <XCircle className="text-red-400 mt-1 flex-shrink-0" size={14} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-teal-500/10 border border-teal-500/30 rounded-lg">
                  <p className="text-teal-300 italic">
                    <strong>My Take:</strong> "{problem.myTake}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* People Solutions Section */}
        {activeSection === 'solutions' && (
          <div className="space-y-8">
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-2">Strategic People Solutions</h3>
              <p className="text-slate-400">Building the foundation for a 100+ person company</p>
            </div>

            {/* Solution 1: First 5 Hires */}
            <div className="bg-white/5 rounded-xl border border-teal-500/30 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                  <UserPlus className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Solution 1: The Critical First 5 Hires</h3>
                  <p className="text-teal-400">Hire these 5 roles in the next 30-60 days</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    priority: 'P0',
                    role: 'Merchant Success Manager',
                    why: 'Merchant activation is the #1 bottleneck. Need someone 100% focused on signing and activating merchants.',
                    profile: 'Ex-Talabat/Deliveroo account manager. 3-5 years. Owns a car. Speaks Arabic.',
                    salary: 'AED 12-15K/month + equity',
                    timeline: 'Week 1-2'
                  },
                  {
                    priority: 'P0',
                    role: 'Operations Coordinator',
                    why: 'Free founders from daily ops. Handle merchant support, user issues, logistics.',
                    profile: 'Fresh grad or 1-2 years exp. High energy. Detail-oriented. Growth mindset.',
                    salary: 'AED 6-8K/month + equity',
                    timeline: 'Week 2-3'
                  },
                  {
                    priority: 'P1',
                    role: 'Full-Stack Developer',
                    why: 'Need to ship features faster. Current technical capacity is limiting growth.',
                    profile: 'React/Node developer. 3-5 years. Can work independently. Startup experience.',
                    salary: 'AED 18-25K/month + equity',
                    timeline: 'Week 3-4'
                  },
                  {
                    priority: 'P1',
                    role: 'Content & Community Manager',
                    why: 'Marketing needs constant content. Someone to own social, content, community.',
                    profile: 'Creative. Social media native. Can write and design. UAE lifestyle experience.',
                    salary: 'AED 10-12K/month + equity',
                    timeline: 'Week 4-5'
                  },
                  {
                    priority: 'P1',
                    role: 'Part-Time Finance/Admin',
                    why: 'Bookkeeping, invoicing, compliance. Can be part-time or outsourced.',
                    profile: 'Accountant/bookkeeper. Knows UAE regulations. Can work 2-3 days/week.',
                    salary: 'AED 4-6K/month (part-time)',
                    timeline: 'Week 5-6'
                  }
                ].map((hire, idx) => (
                  <div key={hire.role} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold">
                          {idx + 1}
                        </div>
                        <div>
                          <h5 className="text-white font-bold">{hire.role}</h5>
                          <span className={`text-xs px-2 py-1 rounded ${
                            hire.priority === 'P0' ? 'bg-red-500/20 text-red-400' : 'bg-orange-500/20 text-orange-400'
                          }`}>
                            {hire.priority} - {hire.timeline}
                          </span>
                        </div>
                      </div>
                      <span className="text-green-400 font-medium">{hire.salary}</span>
                    </div>
                    <p className="text-slate-400 text-sm mb-2"><strong>Why:</strong> {hire.why}</p>
                    <p className="text-slate-400 text-sm"><strong>Profile:</strong> {hire.profile}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-4 bg-teal-500/10 border border-teal-500/30 rounded-lg">
                <h5 className="text-teal-400 font-bold mb-2">Total Monthly Cost for 5 Hires</h5>
                <p className="text-white text-2xl font-bold">AED 50-66K/month</p>
                <p className="text-slate-400 text-sm">Plus equity grants (recommend 0.25-1% each for first 5 employees)</p>
              </div>
            </div>

            {/* Solution 2: Culture & Values */}
            <div className="bg-white/5 rounded-xl border border-purple-500/30 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Heart className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Solution 2: Define Nuqta Culture & Values</h3>
                  <p className="text-purple-400">The DNA that will guide every hire and decision</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h5 className="text-purple-400 font-bold">Proposed Nuqta Values</h5>
                  {[
                    {
                      value: 'Hunt for Gold',
                      meaning: 'We relentlessly pursue opportunities and never settle for bronze',
                      behaviors: 'Take initiative, find creative solutions, don\'t wait to be told'
                    },
                    {
                      value: 'Merchants First',
                      meaning: 'Our merchants\' success is our success - we win when they win',
                      behaviors: 'Respond fast, go extra mile, understand their business'
                    },
                    {
                      value: 'Ship It',
                      meaning: 'Done is better than perfect. Bias towards action.',
                      behaviors: '80% solution today > 100% solution next month'
                    },
                    {
                      value: 'One Team, One Dream',
                      meaning: 'No silos. Everyone does whatever it takes.',
                      behaviors: 'Help others, share knowledge, celebrate together'
                    }
                  ].map((v) => (
                    <div key={v.value} className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                      <h6 className="text-white font-bold flex items-center gap-2">
                        <Star className="text-yellow-400" size={16} />
                        {v.value}
                      </h6>
                      <p className="text-slate-400 text-sm mt-1">{v.meaning}</p>
                      <p className="text-purple-300 text-xs mt-2"><strong>Behaviors:</strong> {v.behaviors}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h5 className="text-purple-400 font-bold">Cultural Rituals to Implement</h5>
                  <div className="space-y-3">
                    {[
                      { ritual: 'Weekly All-Hands', desc: '30 min Friday - wins, learnings, priorities', icon: Users },
                      { ritual: 'Daily Standup', desc: '15 min morning sync - what\'s blocked, what\'s shipping', icon: Coffee },
                      { ritual: 'Merchant Win Bell', desc: 'Ring a bell (or sound) when merchant signs', icon: Award },
                      { ritual: 'Monthly Retro', desc: 'What went well, what didn\'t, what to improve', icon: TrendingUp },
                      { ritual: 'Founder Office Hours', desc: 'Open door policy - anyone can ask anything', icon: Calendar }
                    ].map((r) => (
                      <div key={r.ritual} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                        <r.icon className="text-purple-400 flex-shrink-0" size={20} />
                        <div>
                          <p className="text-white font-medium">{r.ritual}</p>
                          <p className="text-slate-400 text-sm">{r.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Solution 3: Compensation */}
            <div className="bg-white/5 rounded-xl border border-green-500/30 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <Gift className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Solution 3: Startup-Competitive Comp Framework</h3>
                  <p className="text-green-400">Attract talent without burning runway</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <h5 className="text-green-400 font-bold mb-2">Compensation Philosophy</h5>
                  <p className="text-slate-300">
                    <strong>Cash:</strong> 75-85% of market rate (we're a startup, people accept some discount) <br />
                    <strong>Equity:</strong> Meaningful upside that closes the cash gap <br />
                    <strong>Growth:</strong> Clear path to higher roles as company scales
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-slate-400">Level</th>
                        <th className="text-center py-3 px-4 text-slate-400">Cash Range (AED/mo)</th>
                        <th className="text-center py-3 px-4 text-slate-400">Equity Range</th>
                        <th className="text-center py-3 px-4 text-slate-400">Examples</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { level: 'Junior (0-2 yrs)', cash: '5-8K', equity: '0.1-0.25%', examples: 'Ops Coord, Support' },
                        { level: 'Mid (3-5 yrs)', cash: '10-15K', equity: '0.25-0.5%', examples: 'Merchant Success, Content' },
                        { level: 'Senior (5-8 yrs)', cash: '18-25K', equity: '0.5-1.0%', examples: 'Developer, Sales Lead' },
                        { level: 'Lead (8+ yrs)', cash: '25-35K', equity: '1.0-2.0%', examples: 'Head of Eng, Head of Ops' }
                      ].map((row) => (
                        <tr key={row.level} className="border-b border-white/5">
                          <td className="py-3 px-4 text-slate-300">{row.level}</td>
                          <td className="py-3 px-4 text-center text-white font-medium">{row.cash}</td>
                          <td className="py-3 px-4 text-center text-green-400">{row.equity}</td>
                          <td className="py-3 px-4 text-center text-slate-400">{row.examples}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h5 className="text-green-400 font-bold mb-2">Equity Vesting</h5>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• 4-year vesting with 1-year cliff</li>
                      <li>• Monthly vesting after cliff</li>
                      <li>• Good leaver provisions</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h5 className="text-green-400 font-bold mb-2">Benefits (Add Later)</h5>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• Health insurance (after seed round)</li>
                      <li>• Annual bonus (after profitability)</li>
                      <li>• Learning budget (AED 2K/year)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution 4: Sourcing Strategy */}
            <div className="bg-white/5 rounded-xl border border-blue-500/30 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Solution 4: Where to Find Nuqta Talent</h3>
                  <p className="text-blue-400">UAE-specific sourcing channels that actually work</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    channel: 'LinkedIn',
                    tactic: 'Recruiter Lite ($99/mo). Search ex-Careem, Talabat, Deliveroo, Noon employees.',
                    effectiveness: 'High for mid-senior',
                    cost: 'AED 400/mo'
                  },
                  {
                    channel: 'WhatsApp Groups',
                    tactic: 'UAE Startups, Dubai Tech, F&B Professionals groups. Post job with engaging copy.',
                    effectiveness: 'High for operations',
                    cost: 'Free'
                  },
                  {
                    channel: 'Referrals',
                    tactic: 'Ask every contact: "Who\'s the best merchant sales person you know?"',
                    effectiveness: 'Highest quality',
                    cost: 'AED 1-2K bonus'
                  },
                  {
                    channel: 'University Career Fairs',
                    tactic: 'AUS, AUD, Heriot-Watt for fresh grads. Hungry, affordable, trainable.',
                    effectiveness: 'Good for junior',
                    cost: 'Time only'
                  },
                  {
                    channel: 'Competitor Poaching',
                    tactic: 'Identify top performers at Talabat/Deliveroo. Reach out on LinkedIn.',
                    effectiveness: 'High for key roles',
                    cost: 'Premium salary'
                  },
                  {
                    channel: 'Startup Communities',
                    tactic: 'Attend STEP Conference, AstroLabs events. Network with startup people.',
                    effectiveness: 'Good for culture fit',
                    cost: 'Event tickets'
                  }
                ].map((ch) => (
                  <div key={ch.channel} className="p-4 bg-white/5 rounded-lg">
                    <h5 className="text-blue-400 font-bold mb-2">{ch.channel}</h5>
                    <p className="text-slate-300 text-sm mb-2">{ch.tactic}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-green-400">{ch.effectiveness}</span>
                      <span className="text-slate-500">{ch.cost}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Hiring Playbook Section */}
        {activeSection === 'execution' && (
          <div className="space-y-8">
            <div className="bg-teal-500/10 border border-teal-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-teal-400 mb-2">30-Day Hiring Sprint Playbook</h3>
              <p className="text-slate-400">From zero to first 5 hires in 30 days</p>
            </div>

            {/* Week 1 */}
            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center">
                  <span className="text-teal-400 font-bold">W1</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Week 1: Foundation</h4>
                  <p className="text-slate-400 text-sm">Days 1-7: Build the hiring infrastructure</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    day: 'Day 1-2',
                    tasks: [
                      'Write job descriptions for all 5 roles (use templates)',
                      'Set up LinkedIn Recruiter Lite ($99/month)',
                      'Create Notion/Google Doc for candidate tracking',
                      'Define interview process (2 rounds max for speed)'
                    ]
                  },
                  {
                    day: 'Day 3-4',
                    tasks: [
                      'Post Merchant Success Manager on LinkedIn, WhatsApp groups',
                      'Send 50 outreach messages to potential candidates',
                      'Ask 10 contacts for referrals (AED 1K referral bonus)',
                      'Prepare interview questions and evaluation scorecard'
                    ]
                  },
                  {
                    day: 'Day 5-7',
                    tasks: [
                      'Screen first batch of candidates (phone screens)',
                      'Schedule first interviews for Merchant Success role',
                      'Post Operations Coordinator role',
                      'Continue sourcing for all roles in parallel'
                    ]
                  }
                ].map((block) => (
                  <div key={block.day} className="p-4 bg-white/5 rounded-lg">
                    <h5 className="text-teal-400 font-bold mb-2">{block.day}</h5>
                    <ul className="space-y-1">
                      {block.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                          <CheckCircle className="text-green-400 mt-0.5 flex-shrink-0" size={14} />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Week 2 */}
            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <span className="text-purple-400 font-bold">W2</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Week 2: First Hire</h4>
                  <p className="text-slate-400 text-sm">Days 8-14: Close first critical hire</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    day: 'Day 8-10',
                    tasks: [
                      'Interview 5-7 Merchant Success candidates',
                      'Final round interviews with top 2-3',
                      'Reference checks for finalist',
                      'Prepare and send offer letter'
                    ]
                  },
                  {
                    day: 'Day 11-12',
                    tasks: [
                      'Close Merchant Success hire (start date: Day 15)',
                      'Screen Operations Coordinator candidates',
                      'Post Developer and Content roles',
                      'Prepare onboarding materials'
                    ]
                  },
                  {
                    day: 'Day 13-14',
                    tasks: [
                      'Interview top Ops Coordinator candidates',
                      'Send 50 more outreach messages for Developer role',
                      'Attend 1 networking event to build pipeline',
                      'Create 30-60-90 day plan for first hire'
                    ]
                  }
                ].map((block) => (
                  <div key={block.day} className="p-4 bg-white/5 rounded-lg">
                    <h5 className="text-purple-400 font-bold mb-2">{block.day}</h5>
                    <ul className="space-y-1">
                      {block.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                          <CheckCircle className="text-green-400 mt-0.5 flex-shrink-0" size={14} />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Week 3-4 */}
            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-400 font-bold">W3-4</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Weeks 3-4: Build the Team</h4>
                  <p className="text-slate-400 text-sm">Days 15-30: Close remaining hires</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-lg">
                  <h5 className="text-green-400 font-bold mb-3">Week 3 Goals</h5>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 mt-0.5 flex-shrink-0" size={14} />
                      <span>Merchant Success Manager starts - begin onboarding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 mt-0.5 flex-shrink-0" size={14} />
                      <span>Close Ops Coordinator hire (start Week 4)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 mt-0.5 flex-shrink-0" size={14} />
                      <span>Final interviews for Developer role</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 mt-0.5 flex-shrink-0" size={14} />
                      <span>Screen Content/Community Manager candidates</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h5 className="text-green-400 font-bold mb-3">Week 4 Goals</h5>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 mt-0.5 flex-shrink-0" size={14} />
                      <span>Ops Coordinator starts - begin onboarding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 mt-0.5 flex-shrink-0" size={14} />
                      <span>Close Developer hire (can start Week 5-6)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 mt-0.5 flex-shrink-0" size={14} />
                      <span>Close Content Manager hire</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 mt-0.5 flex-shrink-0" size={14} />
                      <span>Engage part-time Finance/Admin resource</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 mt-0.5 flex-shrink-0" size={14} />
                      <span>Conduct first team all-hands with new members</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interview Process */}
            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <UserCheck className="text-teal-400" size={20} />
                Fast Interview Process (Max 5 Days)
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="p-4 bg-teal-500/10 border border-teal-500/30 rounded-lg text-center">
                  <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold mx-auto mb-2">1</div>
                  <h5 className="text-white font-bold">Phone Screen</h5>
                  <p className="text-slate-400 text-sm">15 min call</p>
                  <p className="text-teal-400 text-xs mt-1">Day 1</p>
                </div>
                <div className="p-4 bg-teal-500/10 border border-teal-500/30 rounded-lg text-center">
                  <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold mx-auto mb-2">2</div>
                  <h5 className="text-white font-bold">Skills Interview</h5>
                  <p className="text-slate-400 text-sm">45 min video/in-person</p>
                  <p className="text-teal-400 text-xs mt-1">Day 2-3</p>
                </div>
                <div className="p-4 bg-teal-500/10 border border-teal-500/30 rounded-lg text-center">
                  <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold mx-auto mb-2">3</div>
                  <h5 className="text-white font-bold">Founder Chat</h5>
                  <p className="text-slate-400 text-sm">30 min culture fit</p>
                  <p className="text-teal-400 text-xs mt-1">Day 3-4</p>
                </div>
                <div className="p-4 bg-teal-500/10 border border-teal-500/30 rounded-lg text-center">
                  <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold mx-auto mb-2">4</div>
                  <h5 className="text-white font-bold">Offer</h5>
                  <p className="text-slate-400 text-sm">Reference + offer</p>
                  <p className="text-teal-400 text-xs mt-1">Day 4-5</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <p className="text-yellow-400 font-bold">Speed Hiring Rule</p>
                <p className="text-slate-300 text-sm">
                  If you like someone after Round 2, move fast. Good candidates have multiple offers.
                  In UAE market, a strong candidate gets 3-5 offers within 2 weeks. If you delay, you lose.
                </p>
              </div>
            </div>

            {/* Onboarding Checklist */}
            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <GraduationCap className="text-teal-400" size={20} />
                Day 1 Onboarding Checklist
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h5 className="text-teal-400 font-bold mb-3">Before They Start</h5>
                  {[
                    'Send welcome email with first day logistics',
                    'Set up email, Slack, and tool access',
                    'Prepare laptop/equipment',
                    'Create their 30-60-90 day plan',
                    'Assign an onboarding buddy (founder)'
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 p-2 bg-white/5 rounded text-slate-300 text-sm">
                      <CheckCircle className="text-green-400 mt-0.5 flex-shrink-0" size={14} />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <h5 className="text-teal-400 font-bold mb-3">Day 1 Schedule</h5>
                  {[
                    '9:00 AM - Welcome coffee with founders',
                    '10:00 AM - Company overview & mission',
                    '11:00 AM - Product deep dive & demo',
                    '12:00 PM - Team lunch',
                    '2:00 PM - Role-specific training begins',
                    '4:00 PM - Meet key people (merchants if relevant)',
                    '5:00 PM - Q&A and first week expectations'
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 p-2 bg-white/5 rounded text-slate-300 text-sm">
                      <Clock className="text-teal-400 mt-0.5 flex-shrink-0" size={14} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* People Metrics Section */}
        {activeSection === 'metrics' && (
          <div className="space-y-8">
            <div className="bg-teal-500/10 border border-teal-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-teal-400 mb-2">People KPIs & Success Metrics</h3>
              <p className="text-slate-400">Tracking team health and hiring velocity</p>
            </div>

            {/* 30-Day Hiring Targets */}
            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-6">30-Day Hiring Targets</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { metric: 'Total Hires', target: '5', current: '0', status: 'starting' },
                  { metric: 'Candidates Sourced', target: '100+', current: '0', status: 'starting' },
                  { metric: 'Interviews Conducted', target: '25+', current: '0', status: 'starting' },
                  { metric: 'Offers Made', target: '6', current: '0', status: 'starting' },
                  { metric: 'Time to Hire (avg)', target: '14 days', current: 'N/A', status: 'pending' },
                  { metric: 'Offer Accept Rate', target: '85%', current: 'N/A', status: 'pending' },
                  { metric: 'Referral Hires', target: '2', current: '0', status: 'starting' },
                  { metric: 'Cost per Hire', target: '<AED 2K', current: 'N/A', status: 'pending' }
                ].map((item) => (
                  <div key={item.metric} className="bg-white/5 rounded-lg p-4">
                    <p className="text-slate-400 text-sm mb-1">{item.metric}</p>
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-bold text-white">{item.target}</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-slate-500 text-xs">Current: {item.current}</span>
                      <span className="text-xs px-2 py-1 bg-teal-500/20 text-teal-400 rounded">
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Health Metrics */}
            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-6">Team Health Metrics (Track Monthly)</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { metric: 'Team Size', current: '8', target: '8', icon: Users },
                  { metric: 'eNPS Score', current: 'Tracking', target: '50+', icon: Smile },
                  { metric: 'Retention Rate', current: '100%', target: '95%', icon: UserCheck },
                  { metric: '1:1 Completion', current: '50%', target: '100%', icon: MessageSquare },
                  { metric: 'Onboarding Satisfaction', current: 'In Progress', target: '4.5/5', icon: Star },
                  { metric: 'Roles Documented', current: '8/8', target: '8/8', icon: Briefcase }
                ].map((item) => (
                  <div key={item.metric} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <item.icon className="text-teal-400" size={20} />
                      <span className="text-slate-300">{item.metric}</span>
                    </div>
                    <div className="flex items-end justify-between">
                      <span className="text-2xl font-bold text-white">{item.current}</span>
                      <span className="text-teal-400 text-sm">Target: {item.target}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Org Chart Target */}
            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Building2 className="text-teal-400" size={20} />
                Target Org Chart - End of Q1 2026
              </h3>
              <div className="flex justify-center">
                <div className="space-y-4">
                  {/* Founders */}
                  <div className="flex justify-center">
                    <div className="p-4 bg-purple-500/20 border border-purple-500/30 rounded-lg text-center">
                      <p className="text-white font-bold">Founders (2)</p>
                      <p className="text-slate-400 text-sm">CEO & CTO</p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="text-slate-600 rotate-90" size={24} />
                  </div>
                  {/* Team */}
                  <div className="grid grid-cols-5 gap-4">
                    <div className="p-3 bg-teal-500/20 border border-teal-500/30 rounded-lg text-center">
                      <p className="text-white font-bold text-sm">Merchant Success</p>
                      <p className="text-teal-400 text-xs">1 person</p>
                    </div>
                    <div className="p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg text-center">
                      <p className="text-white font-bold text-sm">Developer</p>
                      <p className="text-blue-400 text-xs">1 person</p>
                    </div>
                    <div className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-center">
                      <p className="text-white font-bold text-sm">Operations</p>
                      <p className="text-green-400 text-xs">1 person</p>
                    </div>
                    <div className="p-3 bg-pink-500/20 border border-pink-500/30 rounded-lg text-center">
                      <p className="text-white font-bold text-sm">Content</p>
                      <p className="text-pink-400 text-xs">1 person</p>
                    </div>
                    <div className="p-3 bg-yellow-500/20 border border-yellow-500/30 rounded-lg text-center">
                      <p className="text-white font-bold text-sm">Finance (PT)</p>
                      <p className="text-yellow-400 text-xs">0.5 person</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-slate-400">Total Team: <span className="text-white font-bold">7.5 FTE</span> (2 founders + 5.5 hires)</p>
              </div>
            </div>

            {/* Monthly Burn from People */}
            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <BarChart3 className="text-teal-400" size={20} />
                Monthly People Cost Projection
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-slate-400">Role</th>
                      <th className="text-center py-3 px-4 text-slate-400">Monthly Cash</th>
                      <th className="text-center py-3 px-4 text-slate-400">Start Month</th>
                      <th className="text-center py-3 px-4 text-slate-400">Q1 Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { role: 'Merchant Success Manager', cash: 'AED 14K', start: 'Feb', q1: 'AED 28K' },
                      { role: 'Operations Coordinator', cash: 'AED 7K', start: 'Feb', q1: 'AED 14K' },
                      { role: 'Full-Stack Developer', cash: 'AED 22K', start: 'Mar', q1: 'AED 22K' },
                      { role: 'Content Manager', cash: 'AED 11K', start: 'Mar', q1: 'AED 11K' },
                      { role: 'Finance (Part-Time)', cash: 'AED 5K', start: 'Mar', q1: 'AED 5K' }
                    ].map((row) => (
                      <tr key={row.role} className="border-b border-white/5">
                        <td className="py-3 px-4 text-slate-300">{row.role}</td>
                        <td className="py-3 px-4 text-center text-white">{row.cash}</td>
                        <td className="py-3 px-4 text-center text-teal-400">{row.start}</td>
                        <td className="py-3 px-4 text-center text-green-400">{row.q1}</td>
                      </tr>
                    ))}
                    <tr className="bg-white/5">
                      <td className="py-3 px-4 text-white font-bold">TOTAL</td>
                      <td className="py-3 px-4 text-center text-white font-bold">AED 59K/mo (full team)</td>
                      <td className="py-3 px-4"></td>
                      <td className="py-3 px-4 text-center text-green-400 font-bold">AED 80K (Q1 total)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CHRO Commitment */}
            <div className="bg-gradient-to-r from-teal-900/30 to-cyan-900/30 rounded-xl border border-teal-500/30 p-6">
              <div className="flex items-start gap-4">
                <MessageSquare className="text-teal-400 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">My Commitment as CHRO Agent</h4>
                  <p className="text-slate-300 leading-relaxed">
                    "In 23 years of HR, I've learned that companies don't fail because of bad strategy - they fail
                    because they can't execute. And execution requires people. Right now, Nuqta has a people
                    emergency. The founders are doing heroic work, but heroes burn out. The 5 hires I've outlined
                    aren't nice-to-haves; they're survival requirements. My commitment: If you follow this playbook,
                    you'll have a functional team of 8 people by end of Q1. More importantly, you'll have the
                    culture foundation to grow to 50, then 500. The first 10 hires define everything."
                  </p>
                  <div className="mt-4 p-4 bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg">
                    <p className="text-[#c9a227] font-bold">
                      The Golden Rule of Startup Hiring: Hire slow, fire fast. But right now? Hire faster than
                      slow - because having no one is worse than having someone imperfect.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <GlobalFooter />
    </div>
  );
}
