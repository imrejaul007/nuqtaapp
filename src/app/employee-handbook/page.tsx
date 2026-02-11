'use client';

import React, { useState } from 'react';
import {
  Book,
  FileText,
  Shield,
  Heart,
  DollarSign,
  Clock,
  Users,
  Laptop,
  Coffee,
  Plane,
  GraduationCap,
  Home,
  MessageSquare,
  AlertTriangle,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Star,
  Briefcase,
  Calendar,
  Globe,
  Zap,
  Target,
  Award,
  MapPin,
  Phone,
  Mail,
  Building2,
  Sparkles,
  Scale,
  UserCheck,
  Workflow,
  Lock,
  Eye,
  Bell,
  HeartHandshake
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ========================================
// NUQTA EMPLOYEE HANDBOOK HUB
// ========================================

interface Section {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  description: string;
  subsections: Subsection[];
}

interface Subsection {
  title: string;
  content: string[];
}

const handbookSections: Section[] = [
  {
    id: 'welcome',
    title: 'Welcome to Nuqta',
    icon: Sparkles,
    color: 'amber',
    description: 'Our mission, vision, values, and what makes Nuqta special.',
    subsections: [
      {
        title: 'Our Mission',
        content: [
          'Nuqta exists to make every transaction rewarding. We\'re building the smartest way to pay and earn rewards in the GCC.',
          'We believe everyone deserves to get value from their everyday spending, whether buying coffee or groceries.',
          'Our goal: 50K MAU by H1, scaling to 1M+ users across the GCC.'
        ]
      },
      {
        title: 'Our Values',
        content: [
          'Move Fast: We ship weekly, iterate daily, and learn constantly.',
          'User Obsessed: Every decision starts with "How does this help our users?"',
          'Data Driven: We measure everything and let data guide our decisions.',
          'One Team: No silos, no politics. We succeed and fail together.',
          'Own It: Take initiative, be accountable, and see things through.'
        ]
      },
      {
        title: 'Company History',
        content: [
          'Founded in 2025 by Rejaul Karim with a vision to revolutionize loyalty in the GCC.',
          'Secured seed funding in early 2026 to build our founding team.',
          'Currently in H1 launch phase with 20 team members targeted (4 filled, 10 hiring, 6 planned).',
          'Headquartered in Dubai, UAE with plans for GCC expansion.'
        ]
      }
    ]
  },
  {
    id: 'employment',
    title: 'Employment Policies',
    icon: Briefcase,
    color: 'blue',
    description: 'Everything about your employment at Nuqta.',
    subsections: [
      {
        title: 'Employment Types',
        content: [
          'Full-Time: Standard 40-hour work week with full benefits.',
          'Part-Time: Reduced hours with pro-rated benefits.',
          'Contract: Project-based engagement with defined scope.',
          'Internship: 3-6 month learning-focused programs.'
        ]
      },
      {
        title: 'Probation Period',
        content: [
          'All new employees have a 3-month probation period.',
          'During probation, either party may terminate with 1 week notice.',
          'Performance reviews at 30, 60, and 90 days.',
          'Successful completion leads to full employee status.'
        ]
      },
      {
        title: 'Working Hours',
        content: [
          'Standard hours: Sunday-Thursday, 9 AM - 6 PM (Gulf Standard Time).',
          'Flexible start time: Arrive between 8-10 AM.',
          '1-hour lunch break (typically 1-2 PM).',
          'Remote work days available based on role and manager approval.',
          'No expectation to work weekends unless for critical launches.'
        ]
      },
      {
        title: 'Notice Period',
        content: [
          'Post-probation notice period: 30 days.',
          'Senior roles (Director+): 60 days.',
          'Garden leave may be applied at company discretion.',
          'Exit interviews conducted by HR for all departures.'
        ]
      }
    ]
  },
  {
    id: 'compensation',
    title: 'Compensation & Equity',
    icon: DollarSign,
    color: 'emerald',
    description: 'How we pay and reward our team.',
    subsections: [
      {
        title: 'Salary Philosophy',
        content: [
          'We aim to pay at the 65th percentile of UAE market rates.',
          'Salaries reviewed annually in January.',
          'Performance-based increases ranging from 5-15%.',
          'Market adjustments made when significantly below benchmarks.'
        ]
      },
      {
        title: 'Equity Program',
        content: [
          'All full-time employees receive equity grants.',
          'Standard vesting: 4 years with 1-year cliff.',
          'Equity is tied to role level and company stage.',
          'Details in your offer letter and equity agreement.',
          'Refresher grants for high performers.'
        ]
      },
      {
        title: 'Bonuses',
        content: [
          'Annual performance bonus: Up to 15% of base salary.',
          'Spot bonuses for exceptional contributions.',
          'Referral bonuses: AED 5,000 for successful hires.',
          'Milestone bonuses for hitting company OKRs.'
        ]
      },
      {
        title: 'Pay Schedule',
        content: [
          'Salary paid monthly on the 25th.',
          'If 25th falls on weekend/holiday, paid on prior business day.',
          'Direct deposit to UAE bank account.',
          'Pay slips available in HR system by the 20th.'
        ]
      }
    ]
  },
  {
    id: 'benefits',
    title: 'Benefits & Perks',
    icon: Heart,
    color: 'rose',
    description: 'The extras that make Nuqta a great place to work.',
    subsections: [
      {
        title: 'Health Insurance',
        content: [
          'Comprehensive medical insurance from day 1.',
          'Coverage includes hospitalization, outpatient, and dental.',
          'Spouse and dependents coverage available.',
          'Annual health checkup included.',
          'Mental health support and counseling covered.'
        ]
      },
      {
        title: 'Time Off',
        content: [
          'Annual Leave: 22 working days per year.',
          'Sick Leave: 10 days per year (with medical certificate after 2 days).',
          'Maternity Leave: 60 days fully paid.',
          'Paternity Leave: 5 days fully paid.',
          'Compassionate Leave: 3 days for immediate family bereavement.',
          'Hajj/Pilgrimage Leave: 30 days unpaid (once per employment).'
        ]
      },
      {
        title: 'Learning & Development',
        content: [
          'AED 5,000 annual learning budget per employee.',
          'Conference attendance (1 per year minimum).',
          'Online course subscriptions (Udemy, Coursera, etc.).',
          'Internal knowledge sharing sessions.',
          'Mentorship program for junior team members.'
        ]
      },
      {
        title: 'Office Perks',
        content: [
          'Free lunch on office days.',
          'Unlimited snacks and beverages.',
          'Standing desks and ergonomic chairs.',
          'Latest MacBook Pro for all employees.',
          'Monthly team social events.',
          'Annual company offsite/retreat.'
        ]
      },
      {
        title: 'Remote Work',
        content: [
          'Hybrid model: 3 days office, 2 days remote.',
          'Home office setup allowance: AED 2,000 one-time.',
          'Monthly internet reimbursement: AED 200.',
          'Flexibility during Ramadan and extreme weather.'
        ]
      }
    ]
  },
  {
    id: 'leave',
    title: 'Leave Policies',
    icon: Calendar,
    color: 'cyan',
    description: 'All about taking time off.',
    subsections: [
      {
        title: 'Requesting Leave',
        content: [
          'Submit requests through HR system at least 2 weeks in advance.',
          'Manager approval required for all leave.',
          'Peak periods (launches, holidays) may have restrictions.',
          'Emergency leave approved retroactively with documentation.'
        ]
      },
      {
        title: 'Public Holidays',
        content: [
          'All UAE public holidays observed (approximately 13 days).',
          'Eid al-Fitr: 3-4 days.',
          'Eid al-Adha: 3-4 days.',
          'UAE National Day: 2 days.',
          'New Year\'s Day: 1 day.',
          'Additional holidays as announced by government.'
        ]
      },
      {
        title: 'Carryover & Encashment',
        content: [
          'Up to 5 days annual leave may be carried to next year.',
          'Carried leave must be used by March 31.',
          'No encashment of unused leave except upon termination.',
          'Sick leave does not carry over.'
        ]
      }
    ]
  },
  {
    id: 'conduct',
    title: 'Code of Conduct',
    icon: Scale,
    color: 'purple',
    description: 'How we expect everyone to behave at Nuqta.',
    subsections: [
      {
        title: 'Professional Standards',
        content: [
          'Treat all colleagues, partners, and users with respect.',
          'Be punctual for meetings and commitments.',
          'Communicate openly and honestly.',
          'Take ownership of your work and mistakes.',
          'Collaborate across teams without ego.'
        ]
      },
      {
        title: 'Prohibited Conduct',
        content: [
          'Harassment or discrimination of any kind.',
          'Bullying, intimidation, or threatening behavior.',
          'Theft, fraud, or misuse of company resources.',
          'Substance abuse that affects work performance.',
          'Sharing confidential information externally.',
          'Conflicts of interest without disclosure.'
        ]
      },
      {
        title: 'Social Media',
        content: [
          'Be mindful that you represent Nuqta online.',
          'Don\'t share confidential company information.',
          'Be respectful even in personal opinions.',
          'Report any brand impersonation you encounter.',
          'Refer media inquiries to Marketing team.'
        ]
      },
      {
        title: 'Dress Code',
        content: [
          'Smart casual in the office.',
          'No formal dress code - be comfortable but presentable.',
          'Business formal for investor/client meetings.',
          'Nuqta branded swag encouraged!'
        ]
      }
    ]
  },
  {
    id: 'security',
    title: 'Security & Confidentiality',
    icon: Lock,
    color: 'slate',
    description: 'Protecting company and user data.',
    subsections: [
      {
        title: 'Data Security',
        content: [
          'All work devices must have encryption enabled.',
          'Use company-provided password manager.',
          'Enable 2FA on all work accounts.',
          'Report any security incidents immediately.',
          'Lock your screen when away from desk.'
        ]
      },
      {
        title: 'Confidential Information',
        content: [
          'NDA signed by all employees.',
          'Don\'t discuss work in public places.',
          'Be careful with screen sharing in public.',
          'Use encrypted channels for sensitive data.',
          'Shred physical documents when disposing.'
        ]
      },
      {
        title: 'User Data',
        content: [
          'User data is sacred - treat it with utmost care.',
          'Access user data only when necessary for your job.',
          'Never share user data externally.',
          'Follow GDPR and local data protection laws.',
          'Report any data breaches immediately.'
        ]
      }
    ]
  },
  {
    id: 'performance',
    title: 'Performance & Growth',
    icon: Target,
    color: 'orange',
    description: 'How we measure and develop talent.',
    subsections: [
      {
        title: 'Performance Reviews',
        content: [
          'Formal reviews conducted twice yearly (January & July).',
          'Self-assessment + manager assessment + peer feedback.',
          'Calibration sessions ensure fairness across teams.',
          'Results tied to compensation and promotion decisions.',
          'Continuous feedback encouraged throughout the year.'
        ]
      },
      {
        title: 'Career Levels',
        content: [
          'Individual Contributor: IC1 (Junior) → IC2 (Mid) → IC3 (Senior) → IC4 (Staff) → IC5 (Principal)',
          'Management: M1 (Manager) → M2 (Senior Manager) → M3 (Director) → M4 (VP) → M5 (C-Level)',
          'Clear expectations documented for each level.',
          'Promotion based on demonstrated performance at next level.'
        ]
      },
      {
        title: 'Development Plans',
        content: [
          'Each employee has an Individual Development Plan (IDP).',
          'IDPs reviewed quarterly with manager.',
          'Focus on both skills and career aspirations.',
          'Learning budget allocated based on IDP goals.'
        ]
      }
    ]
  },
  {
    id: 'reporting',
    title: 'Reporting & Grievances',
    icon: MessageSquare,
    color: 'pink',
    description: 'How to raise concerns and get help.',
    subsections: [
      {
        title: 'Raising Concerns',
        content: [
          'First option: Talk to your direct manager.',
          'Alternative: Skip-level to manager\'s manager.',
          'HR is always available for sensitive issues.',
          'Anonymous reporting form available on intranet.',
          'No retaliation for good-faith reports.'
        ]
      },
      {
        title: 'Grievance Process',
        content: [
          'Step 1: Informal resolution with manager (5 days).',
          'Step 2: Formal complaint to HR (10 days investigation).',
          'Step 3: Appeal to senior leadership (final decision in 15 days).',
          'Documentation maintained throughout.',
          'External mediation available if needed.'
        ]
      },
      {
        title: 'Whistleblower Protection',
        content: [
          'Report illegal or unethical behavior confidentially.',
          'Protection from retaliation guaranteed.',
          'Investigations conducted by independent party.',
          'Serious violations reported to authorities as required.'
        ]
      }
    ]
  }
];

const quickLinks = [
  { title: 'Request Leave', href: '#leave', icon: Calendar },
  { title: 'Benefits Overview', href: '#benefits', icon: Heart },
  { title: 'Report a Concern', href: '#reporting', icon: MessageSquare },
  { title: 'D&I Policy', href: '/diversity-inclusion', icon: Users },
  { title: 'Org Chart', href: '/org-chart', icon: Building2 },
  { title: 'Careers', href: '/careers', icon: Briefcase }
];

export default function EmployeeHandbookPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>('welcome');
  const [expandedSubsection, setExpandedSubsection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#c9a227]/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-[#c9a227]/10 px-4 py-2 rounded-full mb-4 sm:mb-6">
              <Book className="w-4 h-4 sm:w-5 sm:h-5 text-[#c9a227]" />
              <span className="text-[#c9a227] font-medium text-sm sm:text-base">Employee Handbook</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Everything You Need<br />to Know at Nuqta
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
              Your comprehensive guide to policies, benefits, and how we work together
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.title}
                  href={link.href}
                  className="bg-white/5 rounded-xl p-3 text-center border border-white/10 hover:bg-white/10 transition-all"
                >
                  <Icon className="w-5 h-5 text-[#c9a227] mx-auto mb-2" />
                  <span className="text-white text-xs sm:text-sm font-medium">{link.title}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Handbook Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="space-y-4">
          {handbookSections.map((section) => {
            const Icon = section.icon;
            const isExpanded = expandedSection === section.id;

            return (
              <div
                key={section.id}
                id={section.id}
                className="bg-white/5 rounded-xl border border-white/10 overflow-hidden"
              >
                {/* Section Header */}
                <button
                  onClick={() => setExpandedSection(isExpanded ? null : section.id)}
                  className="w-full p-4 sm:p-6 flex items-start gap-4 text-left hover:bg-white/5 transition-all"
                >
                  <div className={`p-3 rounded-xl bg-${section.color}-500/20 flex-shrink-0`}>
                    <Icon className={`w-6 h-6 text-${section.color}-400`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg sm:text-xl font-semibold text-white mb-1">{section.title}</h2>
                    <p className="text-white/60 text-sm">{section.description}</p>
                  </div>
                  {isExpanded ? (
                    <ChevronDown className="w-5 h-5 text-white/40 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-white/40 flex-shrink-0" />
                  )}
                </button>

                {/* Section Content */}
                {isExpanded && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-white/10">
                    <div className="pt-4 space-y-4">
                      {section.subsections.map((subsection, subIndex) => {
                        const subKey = `${section.id}-${subIndex}`;
                        const isSubExpanded = expandedSubsection === subKey;

                        return (
                          <div
                            key={subKey}
                            className="bg-white/5 rounded-lg border border-white/10 overflow-hidden"
                          >
                            <button
                              onClick={() => setExpandedSubsection(isSubExpanded ? null : subKey)}
                              className="w-full p-4 flex items-center justify-between text-left hover:bg-white/5 transition-all"
                            >
                              <h3 className="font-medium text-white">{subsection.title}</h3>
                              {isSubExpanded ? (
                                <ChevronDown className="w-4 h-4 text-white/40" />
                              ) : (
                                <ChevronRight className="w-4 h-4 text-white/40" />
                              )}
                            </button>

                            {isSubExpanded && (
                              <div className="px-4 pb-4 border-t border-white/10 pt-4">
                                <ul className="space-y-2">
                                  {subsection.content.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-start gap-2">
                                      <CheckCircle className="w-4 h-4 text-[#c9a227] mt-0.5 flex-shrink-0" />
                                      <span className="text-white/70 text-sm">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Important Contacts */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="bg-gradient-to-r from-[#c9a227]/10 to-emerald-500/10 rounded-xl border border-[#c9a227]/20 p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Phone className="w-6 h-6 text-[#c9a227]" />
            Important Contacts
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="font-medium text-white mb-1">HR & People</div>
              <div className="text-white/60 text-sm">CHRO</div>
              <div className="text-[#c9a227] text-sm mt-2">hr@nuqta.ae</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="font-medium text-white mb-1">IT Support</div>
              <div className="text-white/60 text-sm">Technical issues & equipment</div>
              <div className="text-[#c9a227] text-sm mt-2">it@nuqta.ae</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="font-medium text-white mb-1">Finance</div>
              <div className="text-white/60 text-sm">Payroll & expenses</div>
              <div className="text-[#c9a227] text-sm mt-2">finance@nuqta.ae</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <div>
                <div className="font-medium text-white mb-1">Emergency / After Hours</div>
                <p className="text-white/60 text-sm">
                  For urgent matters outside business hours, contact your manager or the on-call team lead via the emergency Slack channel #urgent-help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Version Info */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="text-center text-white/40 text-sm">
          <p>Employee Handbook v2.0 | Last Updated: February 2026</p>
          <p>Questions? Contact HR at hr@nuqta.ae</p>
        </div>
      </section>
    <GlobalFooter />
    </div>
  );
}
