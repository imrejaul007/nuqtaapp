'use client';

import React, { useState } from 'react';
import {
  Settings,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Target,
  BarChart3,
  PieChart,
  Users,
  Store,
  ArrowRight,
  Shield,
  Calendar,
  Zap,
  ChevronDown,
  ChevronRight,
  Truck,
  Package,
  Workflow,
  ClipboardCheck,
  Gauge,
  Phone,
  Headphones,
  FileText,
  Building2,
  MapPin,
  Award,
  Star,
  Rocket,
  Flag,
  Activity,
  RefreshCw,
  Database,
  Cog
} from 'lucide-react';

// ========================================
// COO COMPREHENSIVE OPERATIONS ANALYSIS
// ========================================

interface OperationalMetric {
  label: string;
  value: string;
  target?: string;
  status: 'good' | 'warning' | 'critical' | 'pending';
  note?: string;
}

interface ProcessStatus {
  name: string;
  category: string;
  status: 'complete' | 'in_progress' | 'pending';
  owner: string;
  deadline: string;
}

// Operations Snapshot
const operationsSnapshot = {
  launchDate: 'March 1, 2026',
  daysToLaunch: '23 days',
  overallReadiness: '100%',
  teamSize: '8 members',
  merchantsLive: '15 ready',
  sopsCreated: '44 documented',
  cooStatus: 'FULLY OPERATIONAL'
};

// Launch Readiness by Category
const launchReadiness = [
  { category: 'Technology & Product', completion: 100, tasks: 14, status: 'complete' },
  { category: 'Legal & Compliance', completion: 100, tasks: 11, status: 'complete' },
  { category: 'Finance & Banking', completion: 100, tasks: 9, status: 'complete' },
  { category: 'Merchant Acquisition', completion: 100, tasks: 12, status: 'complete' },
  { category: 'Marketing & Brand', completion: 100, tasks: 12, status: 'complete' },
  { category: 'Operations & Support', completion: 100, tasks: 8, status: 'complete' },
  { category: 'Team & HR', completion: 100, tasks: 8, status: 'complete' },
  { category: 'Investor Relations', completion: 100, tasks: 8, status: 'complete' }
];

// Operational KPIs
const operationalKPIs: OperationalMetric[] = [
  {
    label: 'Live Merchants',
    value: '15',
    target: '10+',
    status: 'good',
    note: 'Exceeded target - 15 merchants signed and ready'
  },
  {
    label: 'LOI Conversion Rate',
    value: '47%',
    target: '33%',
    status: 'good',
    note: '15 of 32 LOIs converted to live merchants'
  },
  {
    label: 'Onboarding Time',
    value: '<24 hours',
    target: '<48 hours',
    status: 'good',
    note: 'Streamlined process exceeding target'
  },
  {
    label: 'SOPs Documented',
    value: '44',
    target: '40+',
    status: 'good',
    note: 'All critical processes documented'
  }
];

// Support Infrastructure
const supportReadiness: OperationalMetric[] = [
  {
    label: 'Ticketing System',
    value: 'Freshdesk Live',
    target: 'Operational',
    status: 'good',
    note: 'Full ticketing system configured and tested'
  },
  {
    label: 'Merchant Support Line',
    value: 'WhatsApp Active',
    target: 'Operational',
    status: 'good',
    note: 'Dedicated business line for merchants'
  },
  {
    label: 'Response Time SLA',
    value: '<30 min',
    target: '<1 hour',
    status: 'good',
    note: 'Merchants get priority support'
  },
  {
    label: 'Knowledge Base',
    value: '50+ Articles',
    target: '25+',
    status: 'good',
    note: 'FAQ and help documentation complete'
  }
];

// Team Readiness
const teamReadiness = [
  { role: 'CEO/Founder', name: 'Rejaul Karim', status: 'FILLED', focus: 'Vision, Strategy, Fundraising' },
  { role: 'CTO', name: 'Deep Tednu Kuri', status: 'FILLED', focus: 'Product, Technology, Engineering' },
  { role: 'CMO', name: 'Sarbajit Bhatacharjee', status: 'FILLED', focus: 'Marketing, Growth, Brand' },
  { role: 'CHRO', name: 'Filled', status: 'FILLED', focus: 'People, Culture, HR' },
  { role: 'COO', name: 'Gyandeep Bordoloi', status: 'FILLED', focus: 'Operations, Execution, Scale' },
  { role: 'Head of Merchants', name: 'Filled', status: 'FILLED', focus: 'Merchant Success, Sales' },
  { role: 'Customer Support Lead', name: 'Filled', status: 'FILLED', focus: 'Support, Escalations' },
  { role: 'Finance Officer', name: 'Filled', status: 'FILLED', focus: 'Finance, Admin, Compliance' }
];

// Process Workflows
const processWorkflows = [
  { name: 'Merchant Onboarding', steps: 5, avgTime: '24 hours', automated: '80%', status: 'optimized' },
  { name: 'User Support Ticket', steps: 4, avgTime: '2 hours', automated: '60%', status: 'optimized' },
  { name: 'Payment Processing', steps: 3, avgTime: 'Real-time', automated: '100%', status: 'optimized' },
  { name: 'Merchant Payout', steps: 4, avgTime: '48 hours', automated: '90%', status: 'optimized' },
  { name: 'Issue Escalation', steps: 3, avgTime: '30 min', automated: '40%', status: 'optimized' },
  { name: 'QR Code Generation', steps: 2, avgTime: 'Instant', automated: '100%', status: 'optimized' }
];

// Geographic Coverage
const geographicCoverage = [
  { area: 'Dubai Marina', merchants: 5, target: 5, density: 'HIGH', status: 'complete' },
  { area: 'JBR', merchants: 4, target: 3, density: 'HIGH', status: 'complete' },
  { area: 'Downtown Dubai', merchants: 3, target: 2, density: 'HIGH', status: 'complete' },
  { area: 'Business Bay', merchants: 2, target: 2, density: 'MEDIUM', status: 'complete' },
  { area: 'DIFC', merchants: 1, target: 1, density: 'MEDIUM', status: 'complete' }
];

// Infrastructure Status
const infrastructureStatus = [
  { system: 'Payment Gateway', status: 'LIVE', uptime: '99.9%', provider: 'Integrated' },
  { system: 'POS Integration', status: 'LIVE', uptime: '99.9%', provider: 'Ready' },
  { system: 'Mobile Apps', status: 'LIVE', uptime: '99.9%', provider: 'iOS/Android' },
  { system: 'Merchant Dashboard', status: 'LIVE', uptime: '99.9%', provider: 'Web Portal' },
  { system: 'Analytics Platform', status: 'LIVE', uptime: '99.9%', provider: 'Firebase/Amplitude' },
  { system: 'Support System', status: 'LIVE', uptime: '99.9%', provider: 'Freshdesk' }
];

// Operations Strengths
const operationsStrengths = [
  'All 44 SOPs documented and tested',
  '15 merchants signed, trained, and ready for launch',
  '8-member core team hired and aligned',
  'Support infrastructure fully operational',
  'Payment gateway integrated and tested',
  'Geographic density achieved in 3 key areas',
  '5-step merchant onboarding optimized to <24 hours',
  'Operations runbook complete for Day 1',
  'All escalation paths defined and tested',
  'Vendor relationships established',
  'Quality assurance protocols in place',
  'Real-time monitoring and alerting configured'
];

// All Risks Mitigated
const operationalRisks = [
  {
    risk: 'LOI to Live Merchant Conversion',
    probability: 'LOW',
    impact: 'HIGH',
    mitigation: 'RESOLVED: 47% conversion achieved (15/32), exceeds 33% target',
    status: 'resolved'
  },
  {
    risk: 'Support Infrastructure Not Ready',
    probability: 'LOW',
    impact: 'HIGH',
    mitigation: 'RESOLVED: Freshdesk + WhatsApp + KB operational, <30 min response SLA',
    status: 'resolved'
  },
  {
    risk: 'Payment Gateway Integration',
    probability: 'LOW',
    impact: 'CRITICAL',
    mitigation: 'RESOLVED: Full integration complete, end-to-end testing passed',
    status: 'resolved'
  },
  {
    risk: 'Merchant Training Not Complete',
    probability: 'LOW',
    impact: 'MEDIUM',
    mitigation: 'RESOLVED: All 15 merchants trained, training kit distributed',
    status: 'resolved'
  },
  {
    risk: 'Geographic Density Not Achieved',
    probability: 'LOW',
    impact: 'HIGH',
    mitigation: 'RESOLVED: 5+ merchants in Marina, 4 in JBR, 3 in Downtown',
    status: 'resolved'
  },
  {
    risk: 'Day 1 Operations Readiness',
    probability: 'LOW',
    impact: 'CRITICAL',
    mitigation: 'RESOLVED: Operations runbook complete, team on-call, monitoring live',
    status: 'resolved'
  }
];

// COO Verdict
const cooVerdict = {
  overallScore: 100,
  readiness: 'LAUNCH READY',
  recommendation: 'EXECUTE LAUNCH',
  achievements: [
    'All 82 launch readiness tasks complete (100%)',
    '15 merchants signed and trained (150% of target)',
    'All 44 SOPs documented and operational',
    'Support infrastructure live with <30 min SLA',
    'Payment gateway fully integrated and tested',
    'Geographic density achieved in 5 key areas',
    '8-member core team hired and aligned',
    'Operations runbook complete for Day 1',
    'All 6 operational risks mitigated',
    'Real-time monitoring and alerting configured'
  ]
};

// Section component
const Section = ({
  title,
  icon: Icon,
  children,
  defaultOpen = false
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/30 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-[#c9a227]" />
          <h2 className="text-lg font-semibold text-white">{title}</h2>
        </div>
        {isOpen ? (
          <ChevronDown className="w-5 h-5 text-slate-400" />
        ) : (
          <ChevronRight className="w-5 h-5 text-slate-400" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 border-t border-slate-700/50">
          {children}
        </div>
      )}
    </div>
  );
};

export default function COOAnalysisPage() {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#c9a227]/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Settings className="w-4 h-4" />
              COO Strategic Analysis
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Chief Operating Officer <span className="text-[#c9a227]">Analysis</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Comprehensive operations review, launch readiness, and execution assessment
            </p>
          </div>

          {/* Operations Scorecard */}
          <div className="bg-gradient-to-r from-blue-500/20 to-[#c9a227]/20 rounded-2xl p-6 sm:p-8 border border-blue-500/30 mb-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-semibold text-white mb-2">Operations Readiness Score</h3>
                <p className="text-slate-400">Based on launch tasks, processes, team, and infrastructure</p>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-5xl sm:text-6xl font-bold text-[#c9a227]">{cooVerdict.overallScore}</div>
                  <div className="text-slate-400 text-sm">/100</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{cooVerdict.readiness}</div>
                  <div className="text-slate-400 text-sm">Recommendation: {cooVerdict.recommendation}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
              <Calendar className="w-6 h-6 text-[#c9a227] mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{operationsSnapshot.launchDate}</div>
              <div className="text-sm text-slate-400">Launch Date</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
              <Store className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{operationsSnapshot.merchantsLive}</div>
              <div className="text-sm text-slate-400">Merchants Ready</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
              <Users className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{operationsSnapshot.teamSize}</div>
              <div className="text-sm text-slate-400">Team Size</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
              <ClipboardCheck className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{operationsSnapshot.sopsCreated}</div>
              <div className="text-sm text-slate-400">SOPs Complete</div>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-6">

        {/* Launch Readiness */}
        <Section title="Launch Readiness by Category" icon={Rocket} defaultOpen={true}>
          <div className="pt-4 space-y-4">
            {launchReadiness.map((category, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">{category.category}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 text-sm">{category.tasks} tasks</span>
                    <span className="text-green-400 font-bold">{category.completion}%</span>
                  </div>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500"
                    style={{ width: `${category.completion}%` }}
                  />
                </div>
              </div>
            ))}
            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <div className="flex items-center gap-2 text-green-400 font-medium">
                <CheckCircle className="w-5 h-5" />
                All 82 Launch Tasks Complete - 100% Ready
              </div>
            </div>
          </div>
        </Section>

        {/* Operational KPIs */}
        <Section title="Operational KPIs" icon={Gauge}>
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {operationalKPIs.map((kpi, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">{kpi.label}</span>
                  <span className="px-2 py-1 rounded text-xs bg-green-500/20 text-green-400">
                    EXCEEDS TARGET
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-white">{kpi.value}</span>
                  <span className="text-slate-500 text-sm">Target: {kpi.target}</span>
                </div>
                {kpi.note && (
                  <div className="text-xs text-green-400 mt-2">{kpi.note}</div>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* Support Infrastructure */}
        <Section title="Support Infrastructure" icon={Headphones}>
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {supportReadiness.map((item, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-sm">{item.label}</span>
                  <span className="px-2 py-1 rounded text-xs bg-green-500/20 text-green-400">
                    OPERATIONAL
                  </span>
                </div>
                <div className="text-xl font-bold text-white mb-1">{item.value}</div>
                {item.note && (
                  <div className="text-xs text-slate-500">{item.note}</div>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* Team Readiness */}
        <Section title="Team Readiness" icon={Users}>
          <div className="pt-4 overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="text-left text-slate-400 text-sm border-b border-slate-700/50">
                  <th className="pb-3">Role</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Focus Area</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {teamReadiness.map((member, index) => (
                  <tr key={index} className="border-t border-slate-700/50">
                    <td className="py-3 font-medium">{member.role}</td>
                    <td className="py-3">
                      <span className="px-2 py-1 rounded text-xs bg-green-500/20 text-green-400">
                        {member.status}
                      </span>
                    </td>
                    <td className="py-3 text-slate-400">{member.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <div className="flex items-center gap-2 text-green-400 font-medium">
                <CheckCircle className="w-5 h-5" />
                Full C-Suite + Core Team Hired and Aligned
              </div>
            </div>
          </div>
        </Section>

        {/* Process Workflows */}
        <Section title="Process Workflows" icon={Workflow}>
          <div className="pt-4 overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="text-left text-slate-400 text-sm border-b border-slate-700/50">
                  <th className="pb-3">Process</th>
                  <th className="pb-3">Steps</th>
                  <th className="pb-3">Avg Time</th>
                  <th className="pb-3">Automation</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {processWorkflows.map((process, index) => (
                  <tr key={index} className="border-t border-slate-700/50">
                    <td className="py-3 font-medium">{process.name}</td>
                    <td className="py-3">{process.steps} steps</td>
                    <td className="py-3 text-[#c9a227]">{process.avgTime}</td>
                    <td className="py-3">{process.automated}</td>
                    <td className="py-3">
                      <span className="px-2 py-1 rounded text-xs bg-green-500/20 text-green-400">
                        OPTIMIZED
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Geographic Coverage */}
        <Section title="Geographic Coverage" icon={MapPin}>
          <div className="pt-4 overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="text-left text-slate-400 text-sm border-b border-slate-700/50">
                  <th className="pb-3">Area</th>
                  <th className="pb-3">Merchants</th>
                  <th className="pb-3">Target</th>
                  <th className="pb-3">Density</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {geographicCoverage.map((area, index) => (
                  <tr key={index} className="border-t border-slate-700/50">
                    <td className="py-3 font-medium">{area.area}</td>
                    <td className="py-3 text-[#c9a227] font-bold">{area.merchants}</td>
                    <td className="py-3 text-slate-400">{area.target}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded text-xs ${
                        area.density === 'HIGH' ? 'bg-green-500/20 text-green-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {area.density}
                      </span>
                    </td>
                    <td className="py-3">
                      <span className="px-2 py-1 rounded text-xs bg-green-500/20 text-green-400">
                        COMPLETE
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <div className="flex items-center gap-2 text-green-400 font-medium">
                <CheckCircle className="w-5 h-5" />
                Geographic Density Achieved - Users will have 5+ nearby merchants
              </div>
            </div>
          </div>
        </Section>

        {/* Infrastructure Status */}
        <Section title="Infrastructure Status" icon={Database}>
          <div className="pt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {infrastructureStatus.map((system, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">{system.system}</span>
                  <span className="px-2 py-1 rounded text-xs bg-green-500/20 text-green-400">
                    {system.status}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Uptime: {system.uptime}</span>
                  <span className="text-slate-500">{system.provider}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Operations Strengths */}
        <Section title="Operations Strengths" icon={Star}>
          <div className="pt-4">
            <div className="grid sm:grid-cols-2 gap-3">
              {operationsStrengths.map((strength, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{strength}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Risk Assessment */}
        <Section title="Risk Assessment (All Mitigated)" icon={Shield}>
          <div className="pt-4 space-y-4">
            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg mb-4">
              <div className="flex items-center gap-2 text-green-400 font-medium">
                <CheckCircle className="w-5 h-5" />
                All 6 Operational Risks Have Been Fully Mitigated
              </div>
            </div>
            {operationalRisks.map((risk, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-4 border-l-4 border-green-500">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">{risk.risk}</span>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 rounded text-xs bg-green-500/20 text-green-400">
                      {risk.probability} PROB
                    </span>
                    <span className="px-2 py-1 rounded text-xs bg-green-500/20 text-green-400">
                      RESOLVED
                    </span>
                  </div>
                </div>
                <div className="text-sm text-green-400">
                  {risk.mitigation}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* COO Verdict */}
        <Section title="COO Verdict & Recommendations" icon={Flag} defaultOpen={true}>
          <div className="pt-4">
            <div className="bg-gradient-to-r from-[#c9a227]/30 to-green-500/30 rounded-lg p-6 border border-[#c9a227]/50 mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 bg-[#c9a227]/30 rounded-full flex items-center justify-center border-4 border-[#c9a227]">
                  <span className="text-3xl font-bold text-[#c9a227]">100</span>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#c9a227]">{cooVerdict.recommendation}</div>
                  <div className="text-white text-lg">Operations 100% ready - all systems go</div>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="text-center bg-slate-900/50 rounded-lg p-3">
                  <div className="text-sm text-slate-400 mb-1">Readiness Score</div>
                  <div className="text-2xl font-bold text-[#c9a227]">{cooVerdict.overallScore}/100</div>
                </div>
                <div className="text-center bg-slate-900/50 rounded-lg p-3">
                  <div className="text-sm text-slate-400 mb-1">Status</div>
                  <div className="text-2xl font-bold text-green-400">{cooVerdict.readiness}</div>
                </div>
                <div className="text-center bg-slate-900/50 rounded-lg p-3">
                  <div className="text-sm text-slate-400 mb-1">Blockers</div>
                  <div className="text-2xl font-bold text-green-400">ZERO</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-lg p-6">
              <h4 className="text-green-400 font-medium mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Achievements Unlocked (All Complete)
              </h4>
              <ul className="grid sm:grid-cols-2 gap-3">
                {cooVerdict.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-slate-300 text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 p-4 bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg">
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-[#c9a227] flex-shrink-0" />
                <div>
                  <div className="text-[#c9a227] font-medium mb-1">COO Execution Declaration</div>
                  <p className="text-slate-300 text-sm">
                    &ldquo;Operations is not about planning - it&apos;s about execution. Every SOP tested. Every merchant trained.
                    Every system live. Every risk mitigated. 15 merchants ready to transact on Day 1.
                    This is what operational excellence looks like. We don&apos;t just launch - we launch flawlessly.&rdquo;
                  </p>
                  <p className="text-[#c9a227] text-sm mt-2 font-medium">— Gyandeep Bordoloi, COO (22 years exp, Careem COO, 10K+ partners scaled)</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-blue-500/20 to-[#c9a227]/20 rounded-xl p-6 sm:p-8 border border-blue-500/30 text-center">
          <Settings className="w-12 h-12 text-[#c9a227] mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Operations Strategy Complete</h3>
          <p className="text-slate-400 mb-4">
            This COO analysis covers launch readiness, processes, team, infrastructure, and Day 1 execution.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-[#c9a227]/20 text-[#c9a227] rounded-lg text-sm font-medium">
              15 Merchants Ready
            </span>
            <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-medium">
              44 SOPs Complete
            </span>
            <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg text-sm font-medium">
              100/100 PERFECT SCORE
            </span>
            <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg text-sm font-medium">
              8-Member Team
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
