'use client';

import React, { useState } from 'react';
import {
  BookOpen,
  Clock,
  Calendar,
  DollarSign,
  Heart,
  Shield,
  Users,
  Laptop,
  MapPin,
  Coffee,
  Gift,
  AlertTriangle,
  CheckCircle,
  FileText,
  Scale,
  Zap,
  Target,
  MessageSquare,
  Lock,
  Eye,
  Ban,
  Award,
  TrendingUp,
  Phone,
  Mail,
  ChevronDown,
  ChevronRight,
  Briefcase,
  Plane,
  Baby,
  Stethoscope,
  GraduationCap,
  Coins,
  Building2,
  Globe,
  Rocket
} from 'lucide-react';

/**
 * NUQTA COMPANY POLICIES & EMPLOYEE HANDBOOK
 * ==========================================
 * Complete policy documentation for all employees
 */

interface Policy {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  sections: {
    title: string;
    content: string[];
  }[];
}

const policies: Policy[] = [
  {
    id: 'working-hours',
    title: 'Working Hours & Attendance',
    icon: Clock,
    color: 'cyan',
    sections: [
      {
        title: 'Standard Working Hours',
        content: [
          'Core hours: 10:00 AM - 4:00 PM (must be available)',
          'Flexible start: 8:00 AM - 10:00 AM',
          'Flexible end: 4:00 PM - 7:00 PM',
          'Total: 8 hours per day, 40 hours per week',
          'Lunch break: 1 hour (flexible)',
        ]
      },
      {
        title: 'Remote Work Policy',
        content: [
          'Hybrid model: 3 days office, 2 days remote (after probation)',
          'Office days: Monday, Wednesday, Thursday (recommended)',
          'Remote work requires stable internet and quiet workspace',
          'Must be reachable during core hours on remote days',
          'Full remote possible for exceptional performers (CEO approval)',
        ]
      },
      {
        title: 'Attendance',
        content: [
          'All-hands standup at 9:30 AM is mandatory (in-person or video)',
          'Notify manager before 9 AM if late or absent',
          'Track time in designated tool (currently Slack status)',
          '3+ unexcused absences = performance concern',
          'Flexibility given for personal appointments with notice',
        ]
      },
    ]
  },
  {
    id: 'leave',
    title: 'Leave & Time Off',
    icon: Calendar,
    color: 'emerald',
    sections: [
      {
        title: 'Annual Leave',
        content: [
          '22 working days per year (pro-rated first year)',
          'Accrues monthly: ~1.83 days/month',
          'Can carry forward max 5 days to next year',
          'Request at least 1 week in advance for 3+ days',
          'Public holidays per UAE calendar (approximately 10-12 days)',
        ]
      },
      {
        title: 'Sick Leave',
        content: [
          '15 days paid sick leave per year',
          'First 2 days: No documentation needed',
          '3+ days: Medical certificate required',
          'Half pay for days 16-45 (per UAE law)',
          'Notify manager as early as possible',
        ]
      },
      {
        title: 'Other Leave Types',
        content: [
          'Maternity: 60 days (45 full pay + 15 half pay per UAE law)',
          'Paternity: 5 days (Nuqta policy, more generous than required)',
          'Bereavement: 5 days for immediate family',
          'Marriage: 3 days (one-time)',
          'Hajj: 30 days unpaid (once, after 1 year)',
          'Study/Exam: 10 days per year for continuing education',
        ]
      },
      {
        title: 'Leave Request Process',
        content: [
          '1. Submit request in HR system (or email HR for now)',
          '2. Manager approval required',
          '3. Update team calendar',
          '4. Set Slack status and out-of-office',
          '5. Handover tasks before leave',
        ]
      },
    ]
  },
  {
    id: 'compensation',
    title: 'Compensation & Benefits',
    icon: DollarSign,
    color: 'amber',
    sections: [
      {
        title: 'Salary',
        content: [
          'Paid monthly on the 28th (or last working day before)',
          'Paid in AED via bank transfer',
          'Salary reviews: Annually in January',
          'Performance bonuses: Based on company and individual performance',
          'All salaries confidential - do not discuss with colleagues',
        ]
      },
      {
        title: 'Equity',
        content: [
          'Employee Stock Option Pool: 15% of company',
          'Vesting: 4 years with 1-year cliff',
          'Monthly vesting after cliff',
          'Exercise window: 10 years from grant',
          'Equity grants based on role level and performance',
        ]
      },
      {
        title: 'Benefits Package',
        content: [
          'Health Insurance: Comprehensive coverage (employee + dependents)',
          'Visa & Emirates ID: Company sponsored',
          'Annual flight allowance: AED 3,000 (after 1 year)',
          'Learning budget: AED 2,000/year for courses, books, conferences',
          'Phone allowance: AED 200/month for customer-facing roles',
          'Team lunches: 2x per week in office',
          'Coffee, snacks, beverages: Unlimited in office',
        ]
      },
      {
        title: 'End of Service',
        content: [
          'Per UAE Labor Law:',
          '- 1-5 years: 21 days salary per year',
          '- 5+ years: 30 days salary per year',
          'Calculated on basic salary',
          'Pro-rated for partial years',
          'Notice period: 1 month (both parties)',
        ]
      },
    ]
  },
  {
    id: 'performance',
    title: 'Performance & Growth',
    icon: TrendingUp,
    color: 'pink',
    sections: [
      {
        title: 'Probation Period',
        content: [
          'Duration: 3 months for all new hires',
          'Weekly 1:1s with manager during probation',
          'Clear 30/60/90 day milestones',
          'Probation review at end of month 3',
          'Can be extended once (max 6 months total)',
        ]
      },
      {
        title: 'Performance Reviews',
        content: [
          'Quarterly: Informal check-in with manager',
          'Bi-annually: Formal written review',
          'Annually: Full 360 review + compensation discussion',
          'Self-review required before each formal review',
          'Peer feedback collected for 360 reviews',
        ]
      },
      {
        title: 'Performance Ratings',
        content: [
          '5 - Exceptional: Far exceeds expectations, role model',
          '4 - Exceeds: Consistently above expectations',
          '3 - Meets: Solid performer, meets all expectations',
          '2 - Needs Improvement: Below expectations, requires plan',
          '1 - Unsatisfactory: Significant concerns, PIP required',
        ]
      },
      {
        title: 'Career Growth',
        content: [
          'Clear leveling framework (coming soon)',
          'Promotion cycles: January and July',
          'Requirements: 6+ months in current role, meets next level criteria',
          'No promotion quotas - earn it based on performance',
          'Lateral moves encouraged for learning',
        ]
      },
    ]
  },
  {
    id: 'code-of-conduct',
    title: 'Code of Conduct',
    icon: Scale,
    color: 'purple',
    sections: [
      {
        title: 'Our Values in Action',
        content: [
          'Move Fast: Ship daily, but never sacrifice quality or safety',
          'Users First: Every decision should benefit our users',
          'Data Driven: Back opinions with data, test assumptions',
          'Own Outcomes: Take responsibility for results, not just tasks',
          'Radical Transparency: Share context, admit mistakes, give feedback',
        ]
      },
      {
        title: 'Professional Behavior',
        content: [
          'Treat everyone with respect and dignity',
          'No discrimination based on gender, race, religion, nationality, age, etc.',
          'No harassment of any kind - zero tolerance policy',
          'Keep disagreements professional and constructive',
          'Represent Nuqta positively in all external interactions',
        ]
      },
      {
        title: 'Conflicts of Interest',
        content: [
          'Disclose any potential conflicts to your manager',
          'No side work with competitors',
          'No personal investments in competitors without disclosure',
          'No accepting gifts >AED 500 from vendors/partners',
          'Family/friends working at partners must be disclosed',
        ]
      },
      {
        title: 'Reporting Concerns',
        content: [
          'First: Talk to your manager if comfortable',
          'Alternative: Talk to COO or CEO directly',
          'Anonymous reporting: Coming soon via HR system',
          'No retaliation for good-faith reporting',
          'All reports investigated confidentially',
        ]
      },
    ]
  },
  {
    id: 'security',
    title: 'Security & Confidentiality',
    icon: Lock,
    color: 'red',
    sections: [
      {
        title: 'Data Security',
        content: [
          'Never share passwords or login credentials',
          'Use strong passwords (12+ chars, mixed)',
          '2FA required for all company accounts',
          'Lock your laptop when away from desk',
          'Report any security incidents immediately to Lead Engineer',
        ]
      },
      {
        title: 'Confidential Information',
        content: [
          'User data is strictly confidential - never share externally',
          'Financial information is confidential',
          'Roadmap and strategy are confidential until announced',
          'Fundraising details are strictly confidential',
          'NDA signed by all employees - breach is termination',
        ]
      },
      {
        title: 'Device Security',
        content: [
          'Company laptops must have disk encryption enabled',
          'Install only approved software',
          'Keep OS and apps updated',
          'No personal devices for company data without approval',
          'Return all devices on last working day',
        ]
      },
      {
        title: 'External Communication',
        content: [
          'No speaking to media without CEO approval',
          'Social media: OK to share company news, not internal info',
          'Investor discussions only by CEO/COO',
          'Competitor conversations: Be careful, nothing confidential',
        ]
      },
    ]
  },
  {
    id: 'expenses',
    title: 'Expenses & Reimbursement',
    icon: Coins,
    color: 'green',
    sections: [
      {
        title: 'Expense Policy',
        content: [
          'Spend company money like it\'s your own (carefully)',
          'Pre-approval required for expenses >AED 500',
          'Keep receipts for all expenses',
          'Submit expense reports within 2 weeks',
          'Reimbursement processed with next payroll',
        ]
      },
      {
        title: 'Travel Expenses',
        content: [
          'Book economy class for flights <4 hours',
          'Business class allowed for flights >6 hours (with approval)',
          'Hotels: Standard 4-star or company-approved',
          'Per diem: AED 300/day domestic, AED 500/day international',
          'Book travel through designated platform',
        ]
      },
      {
        title: 'What\'s Covered',
        content: [
          'Business travel (flights, hotels, transport)',
          'Client meals and entertainment (with receipt)',
          'Office supplies if not available',
          'Professional development (within learning budget)',
          'Team events (with pre-approval)',
        ]
      },
      {
        title: 'What\'s NOT Covered',
        content: [
          'Personal travel or extensions',
          'Alcohol (except reasonable client entertainment)',
          'Personal purchases',
          'Fines or penalties',
          'First class travel (without CEO approval)',
        ]
      },
    ]
  },
  {
    id: 'communication',
    title: 'Communication Guidelines',
    icon: MessageSquare,
    color: 'blue',
    sections: [
      {
        title: 'Communication Channels',
        content: [
          'Slack: Day-to-day communication, quick questions',
          'Email: External communication, formal internal matters',
          'Notion: Documentation, long-form content, wikis',
          'Linear: Engineering tasks and bugs',
          'Meetings: For discussions that need real-time collaboration',
        ]
      },
      {
        title: 'Slack Etiquette',
        content: [
          'Use public channels over DMs when possible (transparency)',
          'Use threads to keep channels organized',
          'Set status when away, in meetings, or focused',
          '@channel and @here sparingly - usually not needed',
          'Emojis for reactions to reduce clutter',
          'Respond within 4 hours during work hours',
        ]
      },
      {
        title: 'Meeting Culture',
        content: [
          'Every meeting needs an agenda (shared in advance)',
          'Start and end on time',
          'No meeting Wednesdays (focus time)',
          'Camera on for video calls',
          'Take notes and share action items',
          'Decline meetings without clear purpose',
        ]
      },
      {
        title: 'Documentation',
        content: [
          'Write it down - if it\'s not documented, it didn\'t happen',
          'Use Notion for all persistent documentation',
          'Keep docs updated - outdated docs are worse than none',
          'Comment on docs rather than Slacking questions',
        ]
      },
    ]
  },
  {
    id: 'equipment',
    title: 'Equipment & Tools',
    icon: Laptop,
    color: 'slate',
    sections: [
      {
        title: 'Provided Equipment',
        content: [
          'MacBook Pro (or equivalent) for all employees',
          'External monitor available on request',
          'Keyboard and mouse if needed',
          'Headset for video calls',
          'Any role-specific equipment as needed',
        ]
      },
      {
        title: 'Software & Subscriptions',
        content: [
          'All business software provided (Figma, Slack, etc.)',
          'Request new tools through your manager',
          'Use company accounts, not personal',
          'No pirated software - ever',
        ]
      },
      {
        title: 'Equipment Care',
        content: [
          'You are responsible for company equipment',
          'Report damage or loss immediately',
          'Reasonable wear and tear expected',
          'Significant damage due to negligence may be deducted',
          'Return all equipment on departure',
        ]
      },
    ]
  },
  {
    id: 'termination',
    title: 'Termination & Offboarding',
    icon: Ban,
    color: 'red',
    sections: [
      {
        title: 'Resignation Process',
        content: [
          '1 month notice period required (can be waived by company)',
          'Submit written resignation to manager and HR',
          'Complete handover documentation',
          'Knowledge transfer to successor/team',
          'Exit interview with HR',
        ]
      },
      {
        title: 'Termination by Company',
        content: [
          'Performance: After documented PIP process',
          'Misconduct: Immediate for serious violations',
          'Redundancy: With severance per UAE law',
          'Probation: Can be terminated with 14 days notice',
          'All terminations reviewed by CEO',
        ]
      },
      {
        title: 'Final Settlement',
        content: [
          'End of service gratuity per UAE law',
          'Unused annual leave paid out',
          'Any owed expenses reimbursed',
          'Final salary within 14 days of last day',
          'Experience letter provided on request',
        ]
      },
      {
        title: 'Offboarding Checklist',
        content: [
          'Return all company equipment',
          'Handover all passwords and accounts',
          'Complete exit interview',
          'Remove from all company systems',
          'Visa cancellation (if applicable)',
        ]
      },
    ]
  },
];

const CompanyPolicies = () => {
  const [expandedPolicy, setExpandedPolicy] = useState<string | null>('working-hours');
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (policyId: string, sectionTitle: string) => {
    const key = `${policyId}-${sectionTitle}`;
    setExpandedSections(prev =>
      prev.includes(key) ? prev.filter(s => s !== key) : [...prev, key]
    );
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/30' },
      emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30' },
      amber: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30' },
      pink: { bg: 'bg-pink-500/10', text: 'text-pink-400', border: 'border-pink-500/30' },
      purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30' },
      red: { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/30' },
      green: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/30' },
      blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
      slate: { bg: 'bg-slate-500/10', text: 'text-slate-400', border: 'border-slate-500/30' },
    };
    return colors[color] || colors.slate;
  };

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Hero */}
      <section className="relative py-16 px-4 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-full px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4 text-[#c9a227]" />
            <span className="text-[#c9a227] font-medium text-sm">Employee Handbook</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            Company <span className="text-[#c9a227]">Policies</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Everything you need to know about working at Nuqta. Our policies are designed to be fair, transparent, and support your success.
          </p>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="py-8 px-4 border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg font-bold mb-4 text-center">Quick Reference</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {[
              { label: 'Working Hours', value: '8 hrs/day', icon: Clock },
              { label: 'Annual Leave', value: '22 days', icon: Calendar },
              { label: 'Sick Leave', value: '15 days', icon: Stethoscope },
              { label: 'Probation', value: '3 months', icon: Target },
              { label: 'Notice Period', value: '1 month', icon: FileText },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-3 text-center">
                <item.icon className="w-5 h-5 text-[#c9a227] mx-auto mb-1" />
                <p className="text-white font-bold">{item.value}</p>
                <p className="text-slate-500 text-xs">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {policies.map(policy => {
              const colors = getColorClasses(policy.color);
              const Icon = policy.icon;
              const isExpanded = expandedPolicy === policy.id;

              return (
                <div key={policy.id} className="bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden">
                  {/* Policy Header */}
                  <div
                    onClick={() => setExpandedPolicy(isExpanded ? null : policy.id)}
                    className={`${colors.bg} border-b ${colors.border} p-4 cursor-pointer hover:bg-opacity-80 transition-colors`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 ${colors.bg} border ${colors.border} rounded-xl flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${colors.text}`} />
                      </div>
                      <h2 className="text-lg font-bold text-white flex-1">{policy.title}</h2>
                      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </div>
                  </div>

                  {/* Policy Content */}
                  {isExpanded && (
                    <div className="p-4 space-y-4">
                      {policy.sections.map((section, sectionIndex) => {
                        const sectionKey = `${policy.id}-${section.title}`;
                        const isSectionExpanded = expandedSections.includes(sectionKey);

                        return (
                          <div key={sectionIndex} className="bg-slate-900/50 border border-slate-700 rounded-xl overflow-hidden">
                            <div
                              onClick={() => toggleSection(policy.id, section.title)}
                              className="p-3 cursor-pointer hover:bg-slate-800/50 transition-colors flex items-center justify-between"
                            >
                              <h3 className="font-medium text-white">{section.title}</h3>
                              <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${isSectionExpanded ? 'rotate-90' : ''}`} />
                            </div>
                            {isSectionExpanded && (
                              <div className="px-3 pb-3 pt-1 border-t border-slate-700">
                                <ul className="space-y-2">
                                  {section.content.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-start gap-2 text-slate-300 text-sm">
                                      <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact HR */}
      <section className="py-12 px-4 border-t border-slate-800">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-[#c9a227]/10 to-amber-500/5 border-2 border-[#c9a227]/30 rounded-2xl p-6 text-center">
            <Heart className="w-10 h-10 text-[#c9a227] mx-auto mb-4" />
            <h2 className="text-2xl font-black mb-2">Questions?</h2>
            <p className="text-slate-400 mb-4">
              If anything is unclear or you have questions about these policies, please reach out. We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:hr@nuqta.ae" className="inline-flex items-center justify-center gap-2 bg-[#c9a227] text-[#0a1628] font-bold px-6 py-3 rounded-xl hover:bg-[#d4af37] transition-colors">
                <Mail className="w-5 h-5" />
                hr@nuqta.ae
              </a>
              <a href="#" className="inline-flex items-center justify-center gap-2 bg-slate-800 text-white font-bold px-6 py-3 rounded-xl hover:bg-slate-700 transition-colors border border-slate-700">
                <MessageSquare className="w-5 h-5" />
                #hr-questions on Slack
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 px-4 border-t border-slate-800 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-500 text-sm">
            Last updated: February 2026 • Version 1.0
          </p>
          <p className="text-slate-600 text-xs mt-1">
            These policies are subject to change. Check back regularly or watch #announcements for updates.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CompanyPolicies;
