'use client';

import React, { useState } from 'react';
import {
  Users, Briefcase, DollarSign, Calendar, CheckCircle, Star,
  Target, TrendingUp, Clock, FileText, Award, UserPlus, Search,
  ChevronDown, ChevronUp, Copy, Check, AlertTriangle, Zap,
  Building, GraduationCap, Globe, Heart
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

export default function HiringPlaybookPage() {
  const [expandedRole, setExpandedRole] = useState<string | null>('performance');
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const hiringSequence = [
    { phase: 'Pre-Launch (Month 1-2)', roles: ['Performance Marketing Lead', 'Content & Social Lead'], priority: 'Critical', budget: '35-45K/month' },
    { phase: 'Launch (Month 3-4)', roles: ['Influencer Manager', 'Marketing Coordinator'], priority: 'High', budget: '25-35K/month' },
    { phase: 'Growth (Month 5-6)', roles: ['Brand Manager', 'Community Manager'], priority: 'Medium', budget: '30-40K/month' },
    { phase: 'Scale (Month 7-12)', roles: ['Data Analyst', 'Creative Designer', 'PR Specialist'], priority: 'Medium', budget: '40-55K/month' }
  ];

  const roles = [
    {
      id: 'performance',
      title: 'Performance Marketing Lead',
      level: 'Senior',
      salaryRange: { min: 18000, max: 25000 },
      timing: 'Pre-Launch (Critical)',
      reports: 'CMO',
      manages: 'Performance team (future)',
      overview: 'Own all paid acquisition channels including Meta, Google, TikTok, Snapchat. Drive app downloads and merchant sign-ups through data-driven campaigns.',
      requirements: [
        '5+ years performance marketing experience',
        'Managed budgets of AED 100K+/month',
        'Expert in Meta Business Suite, Google Ads',
        'Experience with app install campaigns',
        'Strong analytical skills, SQL preferred',
        'MENA/GCC market experience preferred'
      ],
      responsibilities: [
        'Plan and execute paid media strategy across all channels',
        'Manage monthly ad spend of AED 50-150K',
        'Achieve target CAC of <AED 15 for app downloads',
        'Build and optimize conversion funnels',
        'A/B test creatives, audiences, and landing pages',
        'Weekly performance reporting to CMO',
        'Collaborate with creative team on ad assets'
      ],
      kpis: ['CAC < AED 15', 'ROAS > 3x', '50K downloads/month', 'CVR > 5%'],
      interviewFocus: ['Campaign case studies', 'Budget management examples', 'Attribution knowledge', 'Tool proficiency test'],
      redFlags: ['No app experience', 'Only B2B background', 'Cannot explain attribution', 'No budget proof']
    },
    {
      id: 'content',
      title: 'Content & Social Media Lead',
      level: 'Senior',
      salaryRange: { min: 15000, max: 22000 },
      timing: 'Pre-Launch (Critical)',
      reports: 'CMO',
      manages: 'Content team, freelancers',
      overview: 'Lead all organic content strategy and social media presence. Build community and drive engagement across Instagram, TikTok, Twitter, and LinkedIn.',
      requirements: [
        '4+ years content/social media experience',
        'Proven track record growing social accounts',
        'Strong copywriting skills (English & Arabic)',
        'Video content creation experience',
        'Understanding of UAE social landscape',
        'Experience with social tools (Later, Sprout, etc.)'
      ],
      responsibilities: [
        'Develop content calendar and strategy',
        'Create and curate engaging content daily',
        'Grow social following to 50K+ in 6 months',
        'Manage community engagement and responses',
        'Coordinate with influencer manager',
        'Track and report on engagement metrics',
        'Stay on top of social trends and adapt'
      ],
      kpis: ['50K followers in 6 months', 'Engagement rate > 5%', '3+ posts/day', 'Response time < 2 hours'],
      interviewFocus: ['Portfolio review', 'Content strategy presentation', 'Arabic writing test', 'Trend awareness'],
      redFlags: ['No Arabic capability', 'Low personal engagement', 'No video experience', 'Cannot show growth metrics']
    },
    {
      id: 'influencer',
      title: 'Influencer Marketing Manager',
      level: 'Mid',
      salaryRange: { min: 12000, max: 18000 },
      timing: 'Launch (High)',
      reports: 'CMO',
      manages: 'Influencer relationships',
      overview: 'Build and manage influencer partnerships across micro to macro tiers. Drive authentic content creation and measurable app downloads through influencer campaigns.',
      requirements: [
        '3+ years influencer marketing experience',
        'Existing network of UAE influencers',
        'Negotiation and contract skills',
        'Understanding of influencer metrics and fraud',
        'Budget management experience',
        'Arabic speaker preferred'
      ],
      responsibilities: [
        'Identify and vet influencers across all tiers',
        'Negotiate rates and contracts',
        'Manage monthly influencer budget of AED 30K+',
        'Coordinate content creation and posting schedules',
        'Track ROI per influencer and campaign',
        'Build long-term ambassador relationships',
        'Handle influencer gifting and events'
      ],
      kpis: ['30+ active influencers', 'Cost per acquisition < AED 20', 'Engagement rate > 8%', '20K downloads via influencers'],
      interviewFocus: ['Influencer contact list', 'Negotiation role-play', 'Fraud detection knowledge', 'ROI tracking methods'],
      redFlags: ['No UAE network', 'Cannot verify past results', 'No contract experience', 'Overpromises reach']
    },
    {
      id: 'coordinator',
      title: 'Marketing Coordinator',
      level: 'Junior',
      salaryRange: { min: 8000, max: 12000 },
      timing: 'Launch (High)',
      reports: 'CMO / Marketing Leads',
      manages: 'N/A',
      overview: 'Support all marketing functions with coordination, scheduling, and administrative tasks. Keep projects on track and ensure smooth team operations.',
      requirements: [
        '1-2 years marketing experience',
        'Strong organizational skills',
        'Proficient in Google Suite, project tools',
        'Excellent communication skills',
        'Attention to detail',
        'Proactive and self-motivated'
      ],
      responsibilities: [
        'Manage marketing calendar and deadlines',
        'Coordinate with vendors and agencies',
        'Handle purchase orders and invoices',
        'Schedule meetings and prepare agendas',
        'Maintain asset library and documentation',
        'Support event logistics',
        'Compile weekly reports'
      ],
      kpis: ['100% deadline adherence', 'Zero missed meetings', 'PO processing < 24 hours', 'Team satisfaction'],
      interviewFocus: ['Organizational skills test', 'Scenario-based questions', 'Tool proficiency', 'Communication style'],
      redFlags: ['Disorganized resume', 'Late to interview', 'Cannot multitask', 'Passive attitude']
    },
    {
      id: 'brand',
      title: 'Brand Manager',
      level: 'Mid-Senior',
      salaryRange: { min: 15000, max: 22000 },
      timing: 'Growth (Month 5-6)',
      reports: 'CMO',
      manages: 'Brand guidelines, agency',
      overview: 'Own brand strategy, positioning, and consistency across all touchpoints. Drive brand awareness and perception through strategic initiatives.',
      requirements: [
        '4+ years brand marketing experience',
        'Experience building or relaunching brands',
        'Strong strategic thinking',
        'Creative brief writing skills',
        'Agency management experience',
        'Consumer insights background'
      ],
      responsibilities: [
        'Develop and maintain brand guidelines',
        'Lead brand awareness campaigns',
        'Manage creative agency relationship',
        'Conduct brand tracking research',
        'Ensure brand consistency across channels',
        'Plan and execute brand partnerships',
        'Drive brand positioning evolution'
      ],
      kpis: ['Brand awareness > 40%', 'Brand recall > 25%', 'NPS > 50', 'Consistency score > 90%'],
      interviewFocus: ['Brand strategy case', 'Creative brief writing', 'Agency management stories', 'Consumer insight examples'],
      redFlags: ['No strategic thinking', 'Only tactical experience', 'Cannot articulate brand value', 'Poor presentation skills']
    },
    {
      id: 'community',
      title: 'Community Manager',
      level: 'Mid',
      salaryRange: { min: 10000, max: 15000 },
      timing: 'Growth (Month 5-6)',
      reports: 'Content Lead',
      manages: 'Community moderators',
      overview: 'Build and nurture the Nuqta user community. Drive engagement, handle support escalations, and turn users into brand advocates.',
      requirements: [
        '2-3 years community management experience',
        'Experience with loyalty/rewards programs preferred',
        'Strong customer empathy',
        'Conflict resolution skills',
        'Social media native',
        'Arabic speaker required'
      ],
      responsibilities: [
        'Engage with users across all platforms',
        'Respond to comments and DMs promptly',
        'Identify and nurture brand advocates',
        'Escalate issues to support/product teams',
        'Create user-generated content campaigns',
        'Build community engagement programs',
        'Monitor sentiment and feedback'
      ],
      kpis: ['Response time < 1 hour', 'Sentiment score > 80%', '100 active advocates', 'UGC posts > 500/month'],
      interviewFocus: ['Conflict scenarios', 'Community building examples', 'Arabic communication test', 'Platform knowledge'],
      redFlags: ['Poor response time in test', 'Defensive attitude', 'No Arabic', 'Cannot handle criticism']
    },
    {
      id: 'analyst',
      title: 'Marketing Data Analyst',
      level: 'Mid',
      salaryRange: { min: 14000, max: 20000 },
      timing: 'Scale (Month 7-8)',
      reports: 'CMO',
      manages: 'Analytics tools, dashboards',
      overview: 'Own marketing analytics, attribution, and insights. Turn data into actionable recommendations that improve marketing ROI.',
      requirements: [
        '3+ years marketing analytics experience',
        'Strong SQL and Excel skills',
        'Experience with BI tools (Tableau, Looker)',
        'Understanding of attribution models',
        'Statistical analysis background',
        'App analytics experience (Amplitude, Firebase)'
      ],
      responsibilities: [
        'Build and maintain marketing dashboards',
        'Conduct campaign performance analysis',
        'Develop attribution models',
        'Provide weekly insights and recommendations',
        'Forecast marketing outcomes',
        'A/B test analysis and recommendations',
        'Customer segmentation analysis'
      ],
      kpis: ['Dashboard accuracy > 99%', 'Insights → action rate > 70%', 'Forecast accuracy > 85%', 'Report delivery 100%'],
      interviewFocus: ['SQL test', 'Dashboard portfolio', 'Case study presentation', 'Tool proficiency'],
      redFlags: ['Cannot write SQL', 'No visualization skills', 'No marketing context', 'Only descriptive, no prescriptive']
    },
    {
      id: 'creative',
      title: 'Senior Creative Designer',
      level: 'Senior',
      salaryRange: { min: 14000, max: 20000 },
      timing: 'Scale (Month 7-8)',
      reports: 'CMO / Brand Manager',
      manages: 'Junior designers, freelancers',
      overview: 'Lead visual design for all marketing materials including ads, social content, and brand collateral. Ensure design excellence and efficiency.',
      requirements: [
        '4+ years design experience',
        'Expert in Figma, Adobe Creative Suite',
        'Motion graphics/video editing skills',
        'Strong portfolio with digital focus',
        'Understanding of performance design',
        'Arabic typography experience preferred'
      ],
      responsibilities: [
        'Create high-performing ad creatives',
        'Design social media content',
        'Develop brand collateral and templates',
        'Create motion graphics for ads',
        'Manage design asset library',
        'Collaborate with performance team on iterations',
        'Mentor junior designers'
      ],
      kpis: ['Creative output > 50 assets/week', 'A/B test win rate > 60%', 'Brand consistency 100%', 'Turnaround < 48 hours'],
      interviewFocus: ['Portfolio deep-dive', 'Design challenge', 'Tool proficiency test', 'Iteration speed'],
      redFlags: ['Weak portfolio', 'No digital experience', 'Slow turnaround', 'Cannot take feedback']
    }
  ];

  const interviewProcess = [
    { stage: 'Application Review', duration: '1-2 days', owner: 'HR', description: 'Screen resumes, check basic requirements' },
    { stage: 'Phone Screen', duration: '30 min', owner: 'HR', description: 'Culture fit, salary expectations, availability' },
    { stage: 'Skills Assessment', duration: '1-2 hours', owner: 'Hiring Manager', description: 'Role-specific test or case study' },
    { stage: 'First Interview', duration: '1 hour', owner: 'CMO', description: 'Technical depth, experience verification' },
    { stage: 'Second Interview', duration: '1 hour', owner: 'CEO + CMO', description: 'Culture, leadership, strategic thinking' },
    { stage: 'Reference Check', duration: '2-3 days', owner: 'HR', description: 'Verify 2-3 professional references' },
    { stage: 'Offer', duration: '1-2 days', owner: 'HR + CMO', description: 'Extend offer, negotiate if needed' }
  ];

  const salaryBenchmarks = [
    { role: 'CMO', junior: '-', mid: '-', senior: '35-50K', notes: 'Equity consideration for senior' },
    { role: 'Performance Lead', junior: '-', mid: '15-18K', senior: '18-25K', notes: 'Bonus tied to ROAS' },
    { role: 'Content Lead', junior: '10-12K', mid: '12-18K', senior: '18-22K', notes: 'Portfolio quality matters' },
    { role: 'Brand Manager', junior: '-', mid: '12-15K', senior: '15-22K', notes: 'Agency experience valued' },
    { role: 'Influencer Manager', junior: '8-10K', mid: '12-15K', senior: '15-18K', notes: 'Network is key asset' },
    { role: 'Community Manager', junior: '6-8K', mid: '10-12K', senior: '12-15K', notes: 'Arabic required' },
    { role: 'Data Analyst', junior: '10-12K', mid: '14-17K', senior: '17-20K', notes: 'SQL test mandatory' },
    { role: 'Creative Designer', junior: '8-10K', mid: '12-15K', senior: '15-20K', notes: 'Portfolio is everything' },
    { role: 'Coordinator', junior: '6-8K', mid: '8-12K', senior: '-', notes: 'Growth potential key' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Header */}
      <div className="bg-gray-900/80 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">Marketing Hiring Playbook</h1>
          </div>
          <p className="text-blue-300 ml-14">
            Job descriptions, salary bands, interview process & hiring sequence
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800/60 rounded-xl p-4 border border-blue-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 text-sm">Total Roles</span>
            </div>
            <p className="text-2xl font-bold text-white">8 Positions</p>
            <p className="text-gray-400 text-xs">Phased hiring plan</p>
          </div>
          <div className="bg-gray-800/60 rounded-xl p-4 border border-green-500/30">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-green-400" />
              <span className="text-green-400 text-sm">Monthly Payroll</span>
            </div>
            <p className="text-2xl font-bold text-white">130-175K</p>
            <p className="text-gray-400 text-xs">Full team at scale</p>
          </div>
          <div className="bg-gray-800/60 rounded-xl p-4 border border-purple-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 text-sm">Hiring Timeline</span>
            </div>
            <p className="text-2xl font-bold text-white">12 Months</p>
            <p className="text-gray-400 text-xs">4 phases</p>
          </div>
          <div className="bg-gray-800/60 rounded-xl p-4 border border-orange-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-orange-400" />
              <span className="text-orange-400 text-sm">Time to Hire</span>
            </div>
            <p className="text-2xl font-bold text-white">3-4 Weeks</p>
            <p className="text-gray-400 text-xs">Average per role</p>
          </div>
        </div>

        {/* Hiring Sequence */}
        <div className="bg-gray-800/40 rounded-2xl border border-blue-500/20 p-6 mb-6">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-400" />
            Hiring Sequence & Timeline
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {hiringSequence.map((phase, idx) => (
              <div key={idx} className={`rounded-xl p-4 border-l-4 ${
                phase.priority === 'Critical' ? 'bg-red-900/20 border-red-500' :
                phase.priority === 'High' ? 'bg-orange-900/20 border-orange-500' :
                'bg-blue-900/20 border-blue-500'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs px-2 py-1 rounded ${
                    phase.priority === 'Critical' ? 'bg-red-600 text-white' :
                    phase.priority === 'High' ? 'bg-orange-600 text-white' :
                    'bg-blue-600 text-white'
                  }`}>{phase.priority}</span>
                  <span className="text-gray-400 text-xs">{phase.budget}</span>
                </div>
                <h3 className="text-white font-medium mb-2">{phase.phase}</h3>
                <ul className="space-y-1">
                  {phase.roles.map((role, ridx) => (
                    <li key={ridx} className="flex items-center gap-2 text-gray-300 text-sm">
                      <UserPlus className="w-3 h-3 text-blue-400" />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Salary Benchmarks */}
        <div className="bg-gray-800/40 rounded-2xl border border-blue-500/20 p-6 mb-6">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-green-400" />
            UAE Marketing Salary Benchmarks (AED/month)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-3 px-4 text-gray-400 font-medium">Role</th>
                  <th className="py-3 px-4 text-gray-400 font-medium">Junior (0-2 yrs)</th>
                  <th className="py-3 px-4 text-gray-400 font-medium">Mid (3-5 yrs)</th>
                  <th className="py-3 px-4 text-gray-400 font-medium">Senior (5+ yrs)</th>
                  <th className="py-3 px-4 text-gray-400 font-medium">Notes</th>
                </tr>
              </thead>
              <tbody>
                {salaryBenchmarks.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-700/50 hover:bg-gray-800/30">
                    <td className="py-3 px-4 text-white font-medium">{row.role}</td>
                    <td className="py-3 px-4 text-gray-300">{row.junior}</td>
                    <td className="py-3 px-4 text-gray-300">{row.mid}</td>
                    <td className="py-3 px-4 text-green-400">{row.senior}</td>
                    <td className="py-3 px-4 text-gray-400 text-sm">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            * Salaries based on Dubai market rates for tech/fintech companies. Add 10-20% for exceptional candidates.
            Housing allowance, visa, and insurance are additional.
          </p>
        </div>

        {/* Detailed Role Cards */}
        <div className="space-y-4 mb-6">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-purple-400" />
            Detailed Job Descriptions
          </h2>

          {roles.map((role) => (
            <div key={role.id} className="bg-gray-800/40 rounded-2xl border border-blue-500/20 overflow-hidden">
              <button
                onClick={() => setExpandedRole(expandedRole === role.id ? null : role.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${
                    role.level === 'Senior' ? 'bg-purple-600/20' :
                    role.level === 'Mid' || role.level === 'Mid-Senior' ? 'bg-blue-600/20' :
                    'bg-green-600/20'
                  }`}>
                    <Briefcase className={`w-5 h-5 ${
                      role.level === 'Senior' ? 'text-purple-400' :
                      role.level === 'Mid' || role.level === 'Mid-Senior' ? 'text-blue-400' :
                      'text-green-400'
                    }`} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-medium">{role.title}</h3>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-gray-400">{role.level}</span>
                      <span className="text-green-400">AED {role.salaryRange.min.toLocaleString()}-{role.salaryRange.max.toLocaleString()}</span>
                      <span className="text-purple-400">{role.timing}</span>
                    </div>
                  </div>
                </div>
                {expandedRole === role.id ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
              </button>

              {expandedRole === role.id && (
                <div className="p-6 pt-0 space-y-6">
                  {/* Overview */}
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <p className="text-gray-300">{role.overview}</p>
                    <div className="flex items-center gap-4 mt-3 text-sm">
                      <span className="text-gray-400">Reports to: <span className="text-white">{role.reports}</span></span>
                      <span className="text-gray-400">Manages: <span className="text-white">{role.manages}</span></span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Requirements */}
                    <div>
                      <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        Requirements
                      </h4>
                      <ul className="space-y-2">
                        {role.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                        <Target className="w-4 h-4 text-blue-400" />
                        Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {role.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></div>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* KPIs */}
                  <div>
                    <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-purple-400" />
                      Key Performance Indicators
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {role.kpis.map((kpi, idx) => (
                        <span key={idx} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                          {kpi}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Interview Focus */}
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                      <h4 className="text-blue-400 font-medium mb-2 flex items-center gap-2">
                        <Search className="w-4 h-4" />
                        Interview Focus Areas
                      </h4>
                      <ul className="space-y-1">
                        {role.interviewFocus.map((focus, idx) => (
                          <li key={idx} className="text-gray-300 text-sm">• {focus}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Red Flags */}
                    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                      <h4 className="text-red-400 font-medium mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        Red Flags to Watch
                      </h4>
                      <ul className="space-y-1">
                        {role.redFlags.map((flag, idx) => (
                          <li key={idx} className="text-gray-300 text-sm">• {flag}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Copy JD Button */}
                  <button
                    onClick={() => copyToClipboard(`
${role.title}
${role.level} Level | AED ${role.salaryRange.min.toLocaleString()}-${role.salaryRange.max.toLocaleString()}/month

About the Role:
${role.overview}

Reports to: ${role.reports}
Manages: ${role.manages}

Requirements:
${role.requirements.map(r => `• ${r}`).join('\n')}

Responsibilities:
${role.responsibilities.map(r => `• ${r}`).join('\n')}

KPIs:
${role.kpis.map(k => `• ${k}`).join('\n')}
                    `, role.id)}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    {copiedItem === role.id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    {copiedItem === role.id ? 'Copied!' : 'Copy Job Description'}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Interview Process */}
        <div className="bg-gray-800/40 rounded-2xl border border-blue-500/20 p-6 mb-6">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-orange-400" />
            Standard Interview Process
          </h2>
          <div className="space-y-3">
            {interviewProcess.map((stage, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-gray-900/50 rounded-lg p-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-white font-medium">{stage.stage}</span>
                    <span className="text-blue-400 text-sm">{stage.duration}</span>
                    <span className="text-gray-400 text-sm">Owner: {stage.owner}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sourcing Channels */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl border border-blue-500/30 p-6">
          <h3 className="text-xl font-bold text-white mb-4">🎯 Recommended Sourcing Channels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-blue-400 font-medium mb-2">LinkedIn</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Premium job posts</li>
                <li>• Direct outreach</li>
                <li>• Company page followers</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-green-400 font-medium mb-2">Local Job Boards</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Bayt.com</li>
                <li>• GulfTalent</li>
                <li>• Naukrigulf</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-purple-400 font-medium mb-2">Referrals</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• AED 5K referral bonus</li>
                <li>• Team network</li>
                <li>• Industry contacts</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-orange-400 font-medium mb-2">Agencies</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Senior roles only</li>
                <li>• 15-20% fee typical</li>
                <li>• 90-day guarantee</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <GlobalFooter />
    </div>
  );
}
