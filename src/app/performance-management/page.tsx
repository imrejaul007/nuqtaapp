'use client';

import React, { useState } from 'react';
import {
  Target, TrendingUp, Award, Users, Calendar, CheckCircle, Star,
  BarChart3, MessageSquare, ChevronDown, ChevronUp, Copy, Check,
  Zap, Clock, Heart, BookOpen, ArrowUp, ArrowDown, Minus, Crown,
  Shield, AlertTriangle, ThumbsUp, ThumbsDown, GraduationCap
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

export default function PerformanceManagementPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>('okrs');
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const okrFramework = {
    levels: [
      {
        level: 'Company OKRs',
        owner: 'CEO + Leadership',
        cycle: 'Annual + Quarterly',
        example: {
          objective: 'Become the #1 rewards app in Dubai by user satisfaction',
          keyResults: [
            'Achieve 100K monthly active users by Q4',
            'Reach NPS score of 50+ across all user segments',
            'Grow to 500 merchant partners',
            'Achieve LTV:CAC ratio of 3:1'
          ]
        }
      },
      {
        level: 'Department OKRs',
        owner: 'Department Heads',
        cycle: 'Quarterly',
        example: {
          objective: 'Build a performance marketing engine that drives efficient growth',
          keyResults: [
            'Achieve blended CAC below AED 30 for app installs',
            'Reach 50K downloads per month',
            'Attain ROAS of 4x on paid campaigns',
            'Launch and optimize 3 new acquisition channels'
          ]
        }
      },
      {
        level: 'Team OKRs',
        owner: 'Team Leads',
        cycle: 'Quarterly',
        example: {
          objective: 'Create content that drives organic growth and engagement',
          keyResults: [
            'Grow social following to 50K across platforms',
            'Achieve average engagement rate of 5%+',
            'Produce 100 pieces of content per month',
            'Drive 20% of downloads from organic sources'
          ]
        }
      },
      {
        level: 'Individual OKRs',
        owner: 'Each Employee',
        cycle: 'Quarterly',
        example: {
          objective: 'Master paid social advertising to drive app growth',
          keyResults: [
            'Reduce CPI by 20% through creative optimization',
            'Test 50 ad variations across Meta and TikTok',
            'Achieve 95% budget utilization with positive ROAS',
            'Document learnings and share with team monthly'
          ]
        }
      }
    ],
    guidelines: [
      { rule: 'Ambitious but achievable', description: '70% achievement = success' },
      { rule: '3-5 KRs per objective', description: 'Focus over quantity' },
      { rule: 'Measurable outcomes', description: 'Numbers, not activities' },
      { rule: 'Aligned vertically', description: 'Individual → Team → Dept → Company' },
      { rule: 'Public and transparent', description: 'Everyone sees everyones OKRs' },
      { rule: 'Regular check-ins', description: 'Weekly progress updates' }
    ]
  };

  const reviewCycle = [
    {
      type: 'Weekly Check-ins',
      frequency: 'Every week',
      duration: '15-30 min',
      participants: 'Manager + Employee',
      agenda: [
        'Review OKR progress',
        'Blockers and support needed',
        'Priorities for next week',
        'Quick feedback exchange'
      ],
      owner: 'Manager'
    },
    {
      type: 'Monthly 1:1s',
      frequency: 'Monthly',
      duration: '45-60 min',
      participants: 'Manager + Employee',
      agenda: [
        'Deep-dive on OKR progress',
        'Career development discussion',
        'Feedback (both ways)',
        'Goal adjustments if needed'
      ],
      owner: 'Manager'
    },
    {
      type: 'Quarterly Reviews',
      frequency: 'Every quarter',
      duration: '60-90 min',
      participants: 'Manager + Employee + HR (optional)',
      agenda: [
        'OKR scoring and reflection',
        'Performance assessment',
        'Development plan review',
        'Next quarter OKR setting'
      ],
      owner: 'HR + Manager'
    },
    {
      type: 'Annual Reviews',
      frequency: 'Yearly',
      duration: '90-120 min',
      participants: 'Manager + Employee + HR',
      agenda: [
        'Full year performance assessment',
        'Compensation discussion',
        'Promotion consideration',
        'Career path planning',
        'Next year goal setting'
      ],
      owner: 'HR'
    }
  ];

  const ratingScale = [
    { rating: 5, label: 'Exceptional', description: 'Consistently exceeds all expectations. Role model.', percentage: '5-10%', color: 'green', icon: Star },
    { rating: 4, label: 'Exceeds', description: 'Regularly exceeds expectations in most areas.', percentage: '20-25%', color: 'blue', icon: ArrowUp },
    { rating: 3, label: 'Meets', description: 'Consistently meets all expectations. Solid performer.', percentage: '50-60%', color: 'yellow', icon: Minus },
    { rating: 2, label: 'Needs Improvement', description: 'Sometimes meets expectations. Development needed.', percentage: '10-15%', color: 'orange', icon: ArrowDown },
    { rating: 1, label: 'Unsatisfactory', description: 'Does not meet expectations. Immediate action needed.', percentage: '0-5%', color: 'red', icon: AlertTriangle }
  ];

  const competencyFramework = [
    {
      category: 'Core Values',
      competencies: [
        { name: 'Customer Obsession', description: 'Puts user/merchant needs first in decisions' },
        { name: 'Ownership', description: 'Takes responsibility, acts like an owner' },
        { name: 'Bias for Action', description: 'Moves fast, makes decisions with incomplete info' },
        { name: 'Continuous Learning', description: 'Seeks feedback, learns from mistakes' }
      ]
    },
    {
      category: 'Collaboration',
      competencies: [
        { name: 'Teamwork', description: 'Works effectively across teams' },
        { name: 'Communication', description: 'Clear, concise, and timely communication' },
        { name: 'Feedback', description: 'Gives and receives feedback constructively' },
        { name: 'Conflict Resolution', description: 'Addresses conflicts professionally' }
      ]
    },
    {
      category: 'Execution',
      competencies: [
        { name: 'Results Orientation', description: 'Delivers on commitments consistently' },
        { name: 'Quality', description: 'Maintains high standards in work' },
        { name: 'Problem Solving', description: 'Identifies and solves problems effectively' },
        { name: 'Innovation', description: 'Proposes and implements new ideas' }
      ]
    },
    {
      category: 'Leadership (Managers)',
      competencies: [
        { name: 'People Development', description: 'Grows and develops team members' },
        { name: 'Strategic Thinking', description: 'Sets clear direction and priorities' },
        { name: 'Delegation', description: 'Empowers team effectively' },
        { name: 'Decision Making', description: 'Makes timely, sound decisions' }
      ]
    }
  ];

  const developmentFramework = {
    idp: [
      { component: 'Strengths', description: 'What you do well that you should leverage' },
      { component: 'Development Areas', description: 'Skills to improve for current role' },
      { component: 'Career Goals', description: 'Where you want to be in 1-3 years' },
      { component: 'Learning Plan', description: 'Courses, projects, mentoring needed' },
      { component: 'Timeline', description: 'Milestones and check-in dates' }
    ],
    methods: [
      { method: '70% - Experience', examples: ['Stretch assignments', 'New projects', 'Job rotations', 'Increased scope'] },
      { method: '20% - Exposure', examples: ['Mentoring', 'Shadowing', 'Networking', 'Coaching'] },
      { method: '10% - Education', examples: ['Courses', 'Books', 'Workshops', 'Certifications'] }
    ],
    careerPaths: [
      { track: 'Individual Contributor', levels: ['Junior', 'Mid', 'Senior', 'Staff', 'Principal'] },
      { track: 'Management', levels: ['Lead', 'Manager', 'Director', 'VP', 'C-Level'] }
    ]
  };

  const feedbackGuidelines = {
    sbi: [
      { component: 'Situation', description: 'When/where did this happen?', example: 'In yesterdays client meeting...' },
      { component: 'Behavior', description: 'What specifically did you observe?', example: 'You interrupted the client twice...' },
      { component: 'Impact', description: 'What was the effect?', example: 'This made the client visibly frustrated and cut the meeting short.' }
    ],
    dos: [
      'Be specific with examples',
      'Focus on behavior, not personality',
      'Deliver feedback timely (within 48 hrs)',
      'Make it a two-way conversation',
      'End with clear next steps',
      'Follow up on progress'
    ],
    donts: [
      'Give vague or general feedback',
      'Attack character or personality',
      'Wait too long to deliver',
      'Make it a monologue',
      'Leave without action items',
      'Forget to follow up'
    ]
  };

  const promotionCriteria = [
    {
      level: 'Junior → Mid',
      timeframe: '12-18 months',
      criteria: [
        'Consistently meets expectations (rating 3+)',
        'Demonstrates independence in core tasks',
        'Shows growth mindset and learning',
        'Positive peer feedback'
      ]
    },
    {
      level: 'Mid → Senior',
      timeframe: '18-24 months',
      criteria: [
        'Exceeds expectations (rating 4+)',
        'Owns significant initiatives independently',
        'Mentors junior team members',
        'Cross-functional collaboration',
        'Demonstrates domain expertise'
      ]
    },
    {
      level: 'Senior → Lead',
      timeframe: '24-36 months',
      criteria: [
        'Consistently exceeds (rating 4-5)',
        'Leads projects end-to-end',
        'Influences team/org decisions',
        'Strong people skills',
        'Strategic thinking demonstrated'
      ]
    },
    {
      level: 'Lead → Manager',
      timeframe: '24-36 months',
      criteria: [
        'Ready to manage people directly',
        'Has grown other team members',
        'Budget/resource management ability',
        'Leadership potential validated',
        'Business acumen demonstrated'
      ]
    }
  ];

  const pipProcess = [
    { step: 'Identification', description: 'Manager identifies performance issue and documents', duration: 'Week 1' },
    { step: 'HR Consultation', description: 'Manager discusses with HR, reviews history', duration: 'Week 1' },
    { step: 'PIP Meeting', description: 'Manager + HR meet with employee, explain PIP', duration: 'Week 1' },
    { step: 'Written Plan', description: 'Document specific goals, support, timeline', duration: 'Week 1' },
    { step: 'Weekly Check-ins', description: 'Manager meets weekly to review progress', duration: 'Weeks 2-8' },
    { step: 'Mid-point Review', description: 'Formal review at halfway point', duration: 'Week 4' },
    { step: 'Final Assessment', description: 'Evaluate if goals met, decide outcome', duration: 'Week 8' },
    { step: 'Outcome', description: 'Continue, extend PIP, or exit conversation', duration: 'Week 8' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900">
      {/* Header */}
      <div className="bg-gray-900/80 border-b border-teal-500/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-teal-600 rounded-lg">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">Performance Management System</h1>
          </div>
          <p className="text-teal-300 ml-14">
            OKRs, reviews, feedback, development & career growth framework
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800/60 rounded-xl p-4 border border-teal-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-teal-400" />
              <span className="text-teal-400 text-sm">OKR Levels</span>
            </div>
            <p className="text-2xl font-bold text-white">4 Levels</p>
            <p className="text-gray-400 text-xs">Company to Individual</p>
          </div>
          <div className="bg-gray-800/60 rounded-xl p-4 border border-blue-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 text-sm">Review Cycle</span>
            </div>
            <p className="text-2xl font-bold text-white">Quarterly</p>
            <p className="text-gray-400 text-xs">+ Annual deep-dive</p>
          </div>
          <div className="bg-gray-800/60 rounded-xl p-4 border border-purple-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 text-sm">Rating Scale</span>
            </div>
            <p className="text-2xl font-bold text-white">1-5 Scale</p>
            <p className="text-gray-400 text-xs">With distribution</p>
          </div>
          <div className="bg-gray-800/60 rounded-xl p-4 border border-orange-500/30">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-orange-400" />
              <span className="text-orange-400 text-sm">Career Tracks</span>
            </div>
            <p className="text-2xl font-bold text-white">2 Paths</p>
            <p className="text-gray-400 text-xs">IC & Management</p>
          </div>
        </div>

        {/* OKR Framework Section */}
        <div className="bg-gray-800/40 rounded-2xl border border-teal-500/20 mb-6 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'okrs' ? null : 'okrs')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-teal-600/20 rounded-lg">
                <Target className="w-6 h-6 text-teal-400" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-semibold text-white">OKR Framework</h2>
                <p className="text-gray-400 text-sm">Objectives & Key Results - how we set and track goals</p>
              </div>
            </div>
            {expandedSection === 'okrs' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>

          {expandedSection === 'okrs' && (
            <div className="p-6 pt-0 space-y-6">
              {/* OKR Levels */}
              <div>
                <h3 className="text-white font-medium mb-4">OKR Hierarchy</h3>
                <div className="space-y-4">
                  {okrFramework.levels.map((level, idx) => (
                    <div key={idx} className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="text-teal-400 font-medium">{level.level}</h4>
                          <p className="text-gray-500 text-xs">{level.owner} • {level.cycle}</p>
                        </div>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-3">
                        <p className="text-white font-medium text-sm mb-2">Objective: {level.example.objective}</p>
                        <ul className="space-y-1">
                          {level.example.keyResults.map((kr, kridx) => (
                            <li key={kridx} className="flex items-start gap-2 text-gray-300 text-sm">
                              <span className="text-teal-400 font-medium">KR{kridx + 1}:</span>
                              {kr}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* OKR Guidelines */}
              <div>
                <h3 className="text-white font-medium mb-3">OKR Best Practices</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {okrFramework.guidelines.map((guideline, idx) => (
                    <div key={idx} className="bg-teal-900/30 border border-teal-500/30 rounded-lg p-3">
                      <p className="text-teal-400 font-medium text-sm">{guideline.rule}</p>
                      <p className="text-gray-400 text-xs">{guideline.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Review Cycle Section */}
        <div className="bg-gray-800/40 rounded-2xl border border-teal-500/20 mb-6 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'reviews' ? null : 'reviews')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600/20 rounded-lg">
                <Calendar className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-semibold text-white">Review Cycle & Check-ins</h2>
                <p className="text-gray-400 text-sm">Weekly to annual performance conversations</p>
              </div>
            </div>
            {expandedSection === 'reviews' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>

          {expandedSection === 'reviews' && (
            <div className="p-6 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reviewCycle.map((review, idx) => (
                  <div key={idx} className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-white font-medium">{review.type}</h4>
                      <span className="text-blue-400 text-sm">{review.frequency}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs mb-3">
                      <span className="text-gray-400">{review.duration}</span>
                      <span className="text-gray-400">{review.participants}</span>
                    </div>
                    <ul className="space-y-1 mb-3">
                      {review.agenda.map((item, aidx) => (
                        <li key={aidx} className="flex items-start gap-2 text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-500 text-xs">Owner: {review.owner}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Rating Scale Section */}
        <div className="bg-gray-800/40 rounded-2xl border border-teal-500/20 mb-6 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'rating' ? null : 'rating')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-600/20 rounded-lg">
                <Star className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-semibold text-white">Performance Rating Scale</h2>
                <p className="text-gray-400 text-sm">1-5 scale with target distribution</p>
              </div>
            </div>
            {expandedSection === 'rating' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>

          {expandedSection === 'rating' && (
            <div className="p-6 pt-0">
              <div className="space-y-3">
                {ratingScale.map((rating, idx) => {
                  const Icon = rating.icon;
                  return (
                    <div key={idx} className={`bg-${rating.color}-900/30 border border-${rating.color}-500/30 rounded-lg p-4 flex items-center gap-4`}>
                      <div className={`w-12 h-12 bg-${rating.color}-600 rounded-full flex items-center justify-center`}>
                        <span className="text-white text-xl font-bold">{rating.rating}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className={`w-4 h-4 text-${rating.color}-400`} />
                          <h4 className={`text-${rating.color}-400 font-medium`}>{rating.label}</h4>
                        </div>
                        <p className="text-gray-300 text-sm">{rating.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-400 text-sm">Target</p>
                        <p className="text-white font-medium">{rating.percentage}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Competency Framework Section */}
        <div className="bg-gray-800/40 rounded-2xl border border-teal-500/20 mb-6 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'competencies' ? null : 'competencies')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-600/20 rounded-lg">
                <Award className="w-6 h-6 text-orange-400" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-semibold text-white">Competency Framework</h2>
                <p className="text-gray-400 text-sm">What we evaluate beyond goals</p>
              </div>
            </div>
            {expandedSection === 'competencies' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>

          {expandedSection === 'competencies' && (
            <div className="p-6 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {competencyFramework.map((category, idx) => (
                  <div key={idx} className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                    <h4 className="text-orange-400 font-medium mb-3">{category.category}</h4>
                    <div className="space-y-2">
                      {category.competencies.map((comp, cidx) => (
                        <div key={cidx} className="bg-gray-800/50 rounded-lg p-2">
                          <p className="text-white text-sm font-medium">{comp.name}</p>
                          <p className="text-gray-400 text-xs">{comp.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Feedback Guidelines Section */}
        <div className="bg-gray-800/40 rounded-2xl border border-teal-500/20 mb-6 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'feedback' ? null : 'feedback')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-600/20 rounded-lg">
                <MessageSquare className="w-6 h-6 text-green-400" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-semibold text-white">Feedback Guidelines (SBI Model)</h2>
                <p className="text-gray-400 text-sm">How to give and receive effective feedback</p>
              </div>
            </div>
            {expandedSection === 'feedback' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>

          {expandedSection === 'feedback' && (
            <div className="p-6 pt-0 space-y-6">
              {/* SBI Model */}
              <div>
                <h3 className="text-white font-medium mb-3">SBI Feedback Model</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {feedbackGuidelines.sbi.map((item, idx) => (
                    <div key={idx} className="bg-green-900/30 border border-green-500/30 rounded-lg p-4">
                      <h4 className="text-green-400 font-medium mb-2">{item.component}</h4>
                      <p className="text-gray-300 text-sm mb-2">{item.description}</p>
                      <p className="text-gray-400 text-xs italic">"{item.example}"</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dos and Don'ts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <h4 className="text-green-400 font-medium mb-3 flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" />
                    Do's
                  </h4>
                  <ul className="space-y-2">
                    {feedbackGuidelines.dos.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                  <h4 className="text-red-400 font-medium mb-3 flex items-center gap-2">
                    <ThumbsDown className="w-4 h-4" />
                    Don'ts
                  </h4>
                  <ul className="space-y-2">
                    {feedbackGuidelines.donts.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                        <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Development Framework Section */}
        <div className="bg-gray-800/40 rounded-2xl border border-teal-500/20 mb-6 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'development' ? null : 'development')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-pink-600/20 rounded-lg">
                <GraduationCap className="w-6 h-6 text-pink-400" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-semibold text-white">Development & Career Growth</h2>
                <p className="text-gray-400 text-sm">IDPs, 70-20-10 model, career paths</p>
              </div>
            </div>
            {expandedSection === 'development' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>

          {expandedSection === 'development' && (
            <div className="p-6 pt-0 space-y-6">
              {/* IDP Components */}
              <div>
                <h3 className="text-white font-medium mb-3">Individual Development Plan (IDP)</h3>
                <div className="flex flex-wrap gap-3">
                  {developmentFramework.idp.map((item, idx) => (
                    <div key={idx} className="bg-pink-900/30 border border-pink-500/30 rounded-lg px-4 py-2">
                      <p className="text-pink-400 font-medium text-sm">{item.component}</p>
                      <p className="text-gray-400 text-xs">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 70-20-10 Model */}
              <div>
                <h3 className="text-white font-medium mb-3">70-20-10 Development Model</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {developmentFramework.methods.map((method, idx) => (
                    <div key={idx} className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                      <h4 className="text-teal-400 font-medium mb-2">{method.method}</h4>
                      <ul className="space-y-1">
                        {method.examples.map((ex, eidx) => (
                          <li key={eidx} className="text-gray-300 text-sm">• {ex}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Paths */}
              <div>
                <h3 className="text-white font-medium mb-3">Career Tracks</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {developmentFramework.careerPaths.map((path, idx) => (
                    <div key={idx} className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                      <h4 className="text-white font-medium mb-2">{path.track} Track</h4>
                      <div className="flex gap-2 flex-wrap">
                        {path.levels.map((level, lidx) => (
                          <span key={lidx} className="bg-teal-600/20 text-teal-300 px-3 py-1 rounded-full text-sm">
                            {level}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Promotion Criteria Section */}
        <div className="bg-gray-800/40 rounded-2xl border border-teal-500/20 mb-6 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'promotions' ? null : 'promotions')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-600/20 rounded-lg">
                <Crown className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-semibold text-white">Promotion Criteria</h2>
                <p className="text-gray-400 text-sm">What it takes to level up</p>
              </div>
            </div>
            {expandedSection === 'promotions' ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </button>

          {expandedSection === 'promotions' && (
            <div className="p-6 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {promotionCriteria.map((promo, idx) => (
                  <div key={idx} className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-yellow-400 font-medium">{promo.level}</h4>
                      <span className="text-gray-400 text-sm">{promo.timeframe}</span>
                    </div>
                    <ul className="space-y-2">
                      {promo.criteria.map((criterion, cidx) => (
                        <li key={cidx} className="flex items-start gap-2 text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          {criterion}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Quick Reference */}
        <div className="bg-gradient-to-r from-teal-900/50 to-blue-900/50 rounded-2xl border border-teal-500/30 p-6">
          <h3 className="text-xl font-bold text-white mb-4">🎯 Performance Quick Reference</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-teal-400 font-medium mb-2">OKR Cycle</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>Q1: Jan-Mar</li>
                <li>Q2: Apr-Jun</li>
                <li>Q3: Jul-Sep</li>
                <li>Q4: Oct-Dec</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-blue-400 font-medium mb-2">Key Dates</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>Jan: Annual review</li>
                <li>Apr: Q1 review</li>
                <li>Jul: Mid-year review</li>
                <li>Oct: Q3 review</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-purple-400 font-medium mb-2">Rating Targets</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>5 (Top): 5-10%</li>
                <li>4 (Exceeds): 20-25%</li>
                <li>3 (Meets): 50-60%</li>
                <li>1-2 (Below): 10-15%</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-orange-400 font-medium mb-2">Check-in Schedule</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>Weekly: 15-30 min</li>
                <li>Monthly: 45-60 min</li>
                <li>Quarterly: 60-90 min</li>
                <li>Annual: 90-120 min</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <GlobalFooter />
    </div>
  );
}
