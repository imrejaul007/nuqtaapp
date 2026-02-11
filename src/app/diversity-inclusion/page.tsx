'use client';

import React from 'react';
import {
  Heart,
  Users,
  Globe,
  Shield,
  Star,
  Target,
  CheckCircle,
  Award,
  Sparkles,
  HandHeart,
  Scale,
  UserCheck,
  Accessibility,
  Languages,
  Calendar,
  TrendingUp,
  MessageSquare,
  BookOpen,
  Lightbulb,
  Handshake
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ========================================
// NUQTA DIVERSITY & INCLUSION POLICY
// ========================================

const diPillars = [
  {
    title: 'Equal Opportunity',
    icon: Scale,
    color: 'amber',
    description: 'We hire, promote, and reward based on merit, skills, and potential - nothing else.',
    commitments: [
      'Blind resume screening for initial applications',
      'Structured interviews with standardized questions',
      'Diverse hiring panels for all positions',
      'Regular pay equity audits',
      'Transparent promotion criteria'
    ]
  },
  {
    title: 'Inclusive Culture',
    icon: Heart,
    color: 'rose',
    description: 'Everyone belongs at Nuqta. We celebrate differences and create space for all voices.',
    commitments: [
      'Psychological safety as a core value',
      'Zero tolerance for discrimination or harassment',
      'Employee resource groups (ERGs)',
      'Regular team-building across departments',
      'Inclusive language guidelines'
    ]
  },
  {
    title: 'Accessibility',
    icon: Accessibility,
    color: 'blue',
    description: 'We design our workplace, products, and processes to be accessible to everyone.',
    commitments: [
      'Accessible office facilities',
      'Flexible work arrangements',
      'Assistive technology support',
      'Accessible digital tools and platforms',
      'Accommodations process for all employees'
    ]
  },
  {
    title: 'Global Mindset',
    icon: Globe,
    color: 'emerald',
    description: 'Building for the GCC means embracing the region\'s incredible diversity.',
    commitments: [
      'Multi-language support (Arabic, English, Hindi, Urdu)',
      'Cultural awareness training',
      'Religious observance flexibility',
      'Diverse holiday calendar',
      'Local community engagement'
    ]
  }
];

const diversityStats = [
  { label: 'Women in Leadership', current: '33%', target: '40%', progress: 82 },
  { label: 'International Team Members', current: '75%', target: '80%', progress: 94 },
  { label: 'Women in Tech Roles', current: '30%', target: '35%', progress: 86 },
  { label: 'Local (Emirati) Talent', current: '10%', target: '15%', progress: 67 }
];

const initiatives = [
  {
    title: 'Women in Fintech Program',
    description: 'Mentorship, training, and career development specifically for women in our tech and finance teams.',
    status: 'active',
    icon: Award
  },
  {
    title: 'University Partnerships',
    description: 'Internship programs with UAE universities focusing on underrepresented groups in tech.',
    status: 'active',
    icon: BookOpen
  },
  {
    title: 'Emiratization Initiative',
    description: 'Dedicated track for hiring and developing Emirati talent across all departments.',
    status: 'active',
    icon: Target
  },
  {
    title: 'Accessibility Audit',
    description: 'Comprehensive review of our products and workplace for accessibility improvements.',
    status: 'planned',
    icon: Accessibility
  },
  {
    title: 'Cultural Celebration Calendar',
    description: 'Recognizing and celebrating the diverse cultural and religious holidays of our team.',
    status: 'active',
    icon: Calendar
  },
  {
    title: 'Bias Training',
    description: 'Mandatory unconscious bias training for all hiring managers and team leads.',
    status: 'active',
    icon: Lightbulb
  }
];

const values = [
  {
    title: 'Respect for All',
    description: 'Every person deserves dignity and respect, regardless of their background, identity, or beliefs.'
  },
  {
    title: 'Continuous Learning',
    description: 'We commit to ongoing education about diversity, equity, and inclusion topics.'
  },
  {
    title: 'Speak Up Culture',
    description: 'Everyone is encouraged and empowered to voice concerns without fear of retaliation.'
  },
  {
    title: 'Accountability',
    description: 'Leaders are measured on their commitment to building diverse and inclusive teams.'
  }
];

export default function DiversityInclusionPage() {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-500/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-rose-500/10 px-4 py-2 rounded-full mb-4 sm:mb-6">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400" />
              <span className="text-rose-400 font-medium text-sm sm:text-base">Diversity & Inclusion</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Building a Team That<br />Reflects Our World
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
              At Nuqta, we believe that diverse perspectives drive innovation. We&apos;re committed to creating an inclusive environment where everyone can thrive and do their best work.
            </p>
          </div>

          {/* Commitment Statement */}
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-rose-500/10 to-[#c9a227]/10 rounded-2xl border border-rose-500/20 p-6 sm:p-8 text-center">
            <Shield className="w-12 h-12 text-rose-400 mx-auto mb-4" />
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Our Commitment</h2>
            <p className="text-white/80 leading-relaxed">
              Nuqta is committed to providing equal employment opportunities to all employees and applicants without regard to race, color, religion, sex, national origin, age, disability, sexual orientation, gender identity, or any other protected characteristic. We strive to create a workplace that celebrates diversity, promotes equity, and fosters a sense of belonging for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* D&I Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
          Our D&I Pillars
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {diPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`bg-white/5 rounded-2xl border border-${pillar.color}-500/20 p-6 sm:p-8 hover:bg-white/10 transition-all`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-${pillar.color}-500/20`}>
                    <Icon className={`w-6 h-6 text-${pillar.color}-400`} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{pillar.title}</h3>
                    <p className="text-white/60">{pillar.description}</p>
                  </div>
                </div>

                <div className="space-y-2 mt-4 pt-4 border-t border-white/10">
                  {pillar.commitments.map((commitment, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70 text-sm">{commitment}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Diversity Metrics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="bg-white/5 rounded-2xl border border-white/10 p-6 sm:p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Diversity Goals & Progress</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We hold ourselves accountable by tracking and sharing our diversity metrics. Here&apos;s where we stand and where we&apos;re headed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {diversityStats.map((stat) => (
              <div key={stat.label} className="bg-white/5 rounded-xl p-4 sm:p-6">
                <div className="text-white/60 text-sm mb-2">{stat.label}</div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl sm:text-3xl font-bold text-white">{stat.current}</span>
                  <span className="text-white/40 text-sm">/ {stat.target} target</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#c9a227] to-emerald-500 rounded-full transition-all"
                    style={{ width: `${stat.progress}%` }}
                  />
                </div>
                <div className="text-right text-xs text-white/40 mt-1">{stat.progress}% to goal</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
          Inclusive Values
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all text-center"
            >
              <div className="w-10 h-10 rounded-full bg-[#c9a227]/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-[#c9a227] font-bold">{index + 1}</span>
              </div>
              <h3 className="font-semibold text-white mb-2">{value.title}</h3>
              <p className="text-white/60 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Initiatives */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
          Active Initiatives
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {initiatives.map((initiative) => {
            const Icon = initiative.icon;
            return (
              <div
                key={initiative.title}
                className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="p-2 rounded-lg bg-[#c9a227]/20">
                    <Icon className="w-5 h-5 text-[#c9a227]" />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    initiative.status === 'active'
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {initiative.status === 'active' ? 'Active' : 'Planned'}
                  </span>
                </div>
                <h3 className="font-semibold text-white mb-2">{initiative.title}</h3>
                <p className="text-white/60 text-sm">{initiative.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Reporting & Accountability */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="bg-gradient-to-r from-[#c9a227]/10 to-rose-500/10 rounded-2xl border border-[#c9a227]/20 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-[#c9a227]" />
                Speak Up
              </h2>
              <p className="text-white/70 mb-6">
                If you experience or witness any behavior that violates our D&I commitments, we encourage you to speak up. You can report concerns through multiple channels:
              </p>
              <ul className="space-y-3">
                {[
                  'Direct conversation with your manager',
                  'CHRO (Chief Human Resources Officer)',
                  'Anonymous feedback form',
                  'External ethics hotline (coming soon)'
                ].map((channel, index) => (
                  <li key={index} className="flex items-center gap-2 text-white/60">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    {channel}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <UserCheck className="w-6 h-6 text-rose-400" />
                Zero Retaliation Policy
              </h2>
              <p className="text-white/70 mb-6">
                Nuqta has a strict zero-retaliation policy. Anyone who reports concerns in good faith is protected from any form of retaliation. We investigate all reports thoroughly and confidentially.
              </p>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-sm text-white/60">
                  <strong className="text-white">Policy Owner:</strong> CHRO<br />
                  <strong className="text-white">Last Updated:</strong> February 2026<br />
                  <strong className="text-white">Review Cycle:</strong> Annual
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GCC Cultural Context */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="bg-white/5 rounded-2xl border border-white/10 p-6 sm:p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <Globe className="w-8 h-8 text-emerald-400" />
              Embracing GCC Diversity
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              The GCC is home to people from over 200 nationalities. We embrace this diversity and design our workplace to be welcoming to all.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <Languages className="w-8 h-8 text-[#c9a227] mx-auto mb-2" />
              <div className="font-semibold text-white mb-1">Multi-language</div>
              <div className="text-white/60 text-sm">Arabic, English, Hindi, Urdu support</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <Calendar className="w-8 h-8 text-[#c9a227] mx-auto mb-2" />
              <div className="font-semibold text-white mb-1">Flexible Holidays</div>
              <div className="text-white/60 text-sm">Respect for religious observances</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <Handshake className="w-8 h-8 text-[#c9a227] mx-auto mb-2" />
              <div className="font-semibold text-white mb-1">Cultural Awareness</div>
              <div className="text-white/60 text-sm">Training for all team members</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <HandHeart className="w-8 h-8 text-[#c9a227] mx-auto mb-2" />
              <div className="font-semibold text-white mb-1">Community Focus</div>
              <div className="text-white/60 text-sm">Local community engagement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="bg-gradient-to-r from-rose-500/20 to-[#c9a227]/20 rounded-2xl border border-rose-500/30 p-8 sm:p-12 text-center">
          <Sparkles className="w-12 h-12 text-rose-400 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Join Our Diverse Team
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-6">
            We&apos;re building something special at Nuqta, and we want people from all backgrounds to be part of our journey. Check out our open positions and find your place in our team.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/careers"
              className="inline-flex items-center gap-2 bg-[#c9a227] hover:bg-[#d4af37] text-black px-6 py-3 rounded-xl font-semibold transition-all"
            >
              View Open Roles
              <TrendingUp className="w-4 h-4" />
            </a>
            <a
              href="/org-chart"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all"
            >
              Meet Our Team
              <Users className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    <GlobalFooter />
    </div>
  );
}
