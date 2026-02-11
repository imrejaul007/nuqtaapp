'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle2,
  Circle,
  Clock,
  Users,
  Store,
  DollarSign,
  Rocket,
  Calendar,
  Target,
  Phone,
  MessageCircle,
  Instagram,
  Video,
  Mail,
  Star,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Flag,
  MapPin,
  Camera,
  FileText,
  Smartphone,
  Gift,
  Share2,
  TrendingUp,
  BarChart3,
  Zap
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

export default function LaunchSprintPage() {
  const [expandedDay, setExpandedDay] = useState<number | null>(1);

  // Sprint Overview
  const sprintGoals = {
    merchants: { target: 10, current: 0, label: 'Live Merchants' },
    users: { target: 100, current: 0, label: 'Beta Users' },
    transactions: { target: 50, current: 0, label: 'Transactions' },
    content: { target: 20, current: 0, label: 'Content Pieces' },
    proofPoints: { target: 1, current: 0, label: 'Case Study' }
  };

  // 14-Day Plan
  const sprintDays = [
    {
      day: 1,
      date: 'Feb 15',
      theme: 'FOUNDATION DAY',
      focus: 'Setup & First Merchant Visit',
      color: 'red',
      tasks: [
        { task: 'Create Instagram account @nuqta.ae', owner: 'CMO', time: '30 min', priority: 'critical', status: 'pending' },
        { task: 'Create TikTok account @nuqta.ae', owner: 'CMO', time: '30 min', priority: 'critical', status: 'pending' },
        { task: 'Visit 3 restaurants in Business Bay', owner: 'CEO + BDA', time: '4 hours', priority: 'critical', status: 'pending' },
        { task: 'Send Founders List invites to 20 people', owner: 'All Team', time: '1 hour', priority: 'high', status: 'pending' },
        { task: 'Setup WhatsApp broadcast list', owner: 'CMO', time: '30 min', priority: 'high', status: 'pending' },
        { task: 'Design profile banners & bios', owner: 'Designer', time: '2 hours', priority: 'high', status: 'pending' },
      ],
      targets: { merchants: 0, users: 20, content: 2 },
      tips: 'Focus on ONE thing: Get your first merchant interested. Everything else is secondary.'
    },
    {
      day: 2,
      date: 'Feb 16',
      theme: 'MERCHANT PUSH',
      focus: 'Close First Merchant + Content Start',
      color: 'red',
      tasks: [
        { task: 'Follow up with yesterday\'s restaurant visits', owner: 'CEO', time: '1 hour', priority: 'critical', status: 'pending' },
        { task: 'Visit 3 new restaurants (Al Barsha area)', owner: 'BDA', time: '4 hours', priority: 'critical', status: 'pending' },
        { task: 'Post first Instagram story (Behind the scenes)', owner: 'CMO', time: '30 min', priority: 'high', status: 'pending' },
        { task: 'Send Founders List invites to 30 more people', owner: 'All Team', time: '1 hour', priority: 'high', status: 'pending' },
        { task: 'Create first 3 social media post designs', owner: 'Designer', time: '3 hours', priority: 'high', status: 'pending' },
        { task: 'DM 10 nano-influencers for interest', owner: 'CMO', time: '1 hour', priority: 'medium', status: 'pending' },
      ],
      targets: { merchants: 1, users: 50, content: 5 },
      tips: 'The first merchant is the hardest. Once you have one, use them as social proof for others.'
    },
    {
      day: 3,
      date: 'Feb 17',
      theme: 'FIRST TRANSACTION',
      focus: 'First Live Merchant + First Transaction',
      color: 'red',
      tasks: [
        { task: 'Onboard first merchant (full setup)', owner: 'CEO + CTO', time: '3 hours', priority: 'critical', status: 'pending' },
        { task: 'Process FIRST real transaction', owner: 'CEO', time: '1 hour', priority: 'critical', status: 'pending' },
        { task: 'Record video of first transaction', owner: 'CMO', time: '30 min', priority: 'critical', status: 'pending' },
        { task: 'Visit 3 more restaurants', owner: 'BDA', time: '4 hours', priority: 'high', status: 'pending' },
        { task: 'Post first Reel (First merchant announcement)', owner: 'CMO', time: '1 hour', priority: 'high', status: 'pending' },
        { task: 'Founders List reaches 50 members', owner: 'All Team', time: 'Ongoing', priority: 'high', status: 'pending' },
      ],
      targets: { merchants: 1, users: 50, content: 8 },
      tips: 'CELEBRATE the first transaction! Share it everywhere. This is your proof of concept.'
    },
    {
      day: 4,
      date: 'Feb 18',
      theme: 'MOMENTUM',
      focus: 'Second Merchant + User Activation',
      color: 'orange',
      tasks: [
        { task: 'Close second merchant', owner: 'CEO', time: '2 hours', priority: 'critical', status: 'pending' },
        { task: 'Call 10 Founders List members personally', owner: 'CEO', time: '2 hours', priority: 'high', status: 'pending' },
        { task: 'Visit 5 restaurants (Deira area)', owner: 'BDA', time: '5 hours', priority: 'high', status: 'pending' },
        { task: 'Post daily content (3 stories + 1 post)', owner: 'CMO', time: '2 hours', priority: 'high', status: 'pending' },
        { task: 'First influencer confirms collaboration', owner: 'CMO', time: '1 hour', priority: 'medium', status: 'pending' },
        { task: 'Setup basic email automation', owner: 'CMO', time: '2 hours', priority: 'medium', status: 'pending' },
      ],
      targets: { merchants: 2, users: 60, content: 12 },
      tips: 'Personal calls convert better than messages. Call your early users, ask for feedback.'
    },
    {
      day: 5,
      date: 'Feb 19',
      theme: 'SCALE PREP',
      focus: 'Third Merchant + Content System',
      color: 'orange',
      tasks: [
        { task: 'Close third merchant', owner: 'CEO + BDA', time: '3 hours', priority: 'critical', status: 'pending' },
        { task: 'Create content batch (10 posts for next week)', owner: 'Designer + CMO', time: '4 hours', priority: 'high', status: 'pending' },
        { task: 'Launch first TikTok video', owner: 'CMO', time: '1 hour', priority: 'high', status: 'pending' },
        { task: 'Founders List reaches 70 members', owner: 'All Team', time: 'Ongoing', priority: 'high', status: 'pending' },
        { task: 'Create merchant case study template', owner: 'CMO', time: '2 hours', priority: 'medium', status: 'pending' },
        { task: 'Setup Hootsuite for scheduling', owner: 'CMO', time: '1 hour', priority: 'medium', status: 'pending' },
      ],
      targets: { merchants: 3, users: 70, content: 15 },
      tips: 'Start documenting everything. Every merchant story becomes content. Every transaction becomes proof.'
    },
    {
      day: 6,
      date: 'Feb 20',
      theme: 'USER FOCUS',
      focus: 'First 10 Active Users + Fourth Merchant',
      color: 'orange',
      tasks: [
        { task: 'Get 10 users to complete first transaction', owner: 'CEO', time: '3 hours', priority: 'critical', status: 'pending' },
        { task: 'Close fourth merchant', owner: 'BDA', time: '4 hours', priority: 'high', status: 'pending' },
        { task: 'Interview first 3 users (video testimonials)', owner: 'CMO', time: '2 hours', priority: 'high', status: 'pending' },
        { task: 'Post user testimonial content', owner: 'CMO', time: '1 hour', priority: 'high', status: 'pending' },
        { task: 'WhatsApp group reaches 100 members', owner: 'CMO', time: 'Ongoing', priority: 'medium', status: 'pending' },
        { task: 'First influencer posts about Nuqta', owner: 'CMO', time: '1 hour', priority: 'medium', status: 'pending' },
      ],
      targets: { merchants: 4, users: 80, content: 18 },
      tips: 'User testimonials are GOLD. Even 30-second phone videos work. Authenticity beats production value.'
    },
    {
      day: 7,
      date: 'Feb 21',
      theme: 'WEEK 1 REVIEW',
      focus: 'Analyze + Adjust + Push to 5 Merchants',
      color: 'yellow',
      tasks: [
        { task: 'Team standup: Week 1 review (1 hour)', owner: 'All Team', time: '1 hour', priority: 'critical', status: 'pending' },
        { task: 'Close fifth merchant', owner: 'CEO + BDA', time: '3 hours', priority: 'critical', status: 'pending' },
        { task: 'Analyze: What worked? What did not?', owner: 'CEO', time: '1 hour', priority: 'high', status: 'pending' },
        { task: 'Founders List reaches 100 members', owner: 'All Team', time: 'Ongoing', priority: 'high', status: 'pending' },
        { task: 'Create Week 1 case study draft', owner: 'CMO', time: '2 hours', priority: 'high', status: 'pending' },
        { task: 'Adjust Week 2 plan based on learnings', owner: 'CEO', time: '1 hour', priority: 'medium', status: 'pending' },
      ],
      targets: { merchants: 5, users: 100, content: 20 },
      tips: 'Halfway point! You should have 5 merchants and 100 users. If not, double down on what is working.'
    },
    {
      day: 8,
      date: 'Feb 22',
      theme: 'WEEK 2 START',
      focus: 'Scale Merchant Acquisition',
      color: 'green',
      tasks: [
        { task: 'Close merchants 6 and 7', owner: 'CEO + BDA', time: '5 hours', priority: 'critical', status: 'pending' },
        { task: 'Launch referral program for users', owner: 'CTO', time: '2 hours', priority: 'high', status: 'pending' },
        { task: 'Brief 5 more influencers', owner: 'CMO', time: '2 hours', priority: 'high', status: 'pending' },
        { task: 'Start daily content posting rhythm', owner: 'CMO', time: 'Ongoing', priority: 'high', status: 'pending' },
        { task: 'Create merchant referral incentive', owner: 'CEO', time: '1 hour', priority: 'medium', status: 'pending' },
        { task: 'First paid ad test (AED 200)', owner: 'CMO', time: '1 hour', priority: 'medium', status: 'pending' },
      ],
      targets: { merchants: 7, users: 120, content: 25 },
      tips: 'Week 2 is about systems. You have proven the model works. Now systematize what is working.'
    },
    {
      day: 9,
      date: 'Feb 23',
      theme: 'PROOF POINTS',
      focus: 'Create Case Study + Close More',
      color: 'green',
      tasks: [
        { task: 'Close merchant 8', owner: 'BDA', time: '4 hours', priority: 'high', status: 'pending' },
        { task: 'Create first merchant case study (video)', owner: 'CMO', time: '3 hours', priority: 'critical', status: 'pending' },
        { task: 'Reach 20 transactions', owner: 'CEO', time: '2 hours', priority: 'high', status: 'pending' },
        { task: 'Post case study across all channels', owner: 'CMO', time: '1 hour', priority: 'high', status: 'pending' },
        { task: 'Users reach 150', owner: 'All Team', time: 'Ongoing', priority: 'high', status: 'pending' },
        { task: 'Analyze ad performance, adjust', owner: 'CMO', time: '1 hour', priority: 'medium', status: 'pending' },
      ],
      targets: { merchants: 8, users: 150, content: 28 },
      tips: 'The case study is your most powerful sales tool. Use it in every merchant pitch from now on.'
    },
    {
      day: 10,
      date: 'Feb 24',
      theme: 'COMMUNITY',
      focus: 'Build User Community',
      color: 'green',
      tasks: [
        { task: 'Close merchant 9', owner: 'CEO + BDA', time: '4 hours', priority: 'high', status: 'pending' },
        { task: 'Host first WhatsApp Q&A session', owner: 'CEO', time: '1 hour', priority: 'high', status: 'pending' },
        { task: 'Launch user challenge/contest', owner: 'CMO', time: '2 hours', priority: 'high', status: 'pending' },
        { task: 'Reach 30 transactions', owner: 'CEO', time: '2 hours', priority: 'high', status: 'pending' },
        { task: 'Get 5 user video testimonials', owner: 'CMO', time: '2 hours', priority: 'medium', status: 'pending' },
        { task: 'Start planning launch event', owner: 'CMO', time: '1 hour', priority: 'medium', status: 'pending' },
      ],
      targets: { merchants: 9, users: 180, content: 32 },
      tips: 'Community is your moat. Engaged users become ambassadors. Talk to them directly.'
    },
    {
      day: 11,
      date: 'Feb 25',
      theme: 'CLOSE THE 10',
      focus: 'Hit 10 Merchant Target',
      color: 'blue',
      tasks: [
        { task: 'CLOSE MERCHANT #10', owner: 'CEO + BDA', time: '4 hours', priority: 'critical', status: 'pending' },
        { task: 'Celebrate with team! (Quick lunch)', owner: 'All Team', time: '1 hour', priority: 'high', status: 'pending' },
        { task: 'Post "10 merchants" milestone content', owner: 'CMO', time: '1 hour', priority: 'high', status: 'pending' },
        { task: 'Reach 40 transactions', owner: 'CEO', time: '2 hours', priority: 'high', status: 'pending' },
        { task: 'Press release draft for launch', owner: 'CMO', time: '2 hours', priority: 'medium', status: 'pending' },
        { task: 'Users reach 200', owner: 'All Team', time: 'Ongoing', priority: 'high', status: 'pending' },
      ],
      targets: { merchants: 10, users: 200, content: 35 },
      tips: '10 merchants is a MAJOR milestone. You now have a network. Celebrate, then keep pushing.'
    },
    {
      day: 12,
      date: 'Feb 26',
      theme: 'LAUNCH PREP',
      focus: 'Prepare for Public Launch',
      color: 'blue',
      tasks: [
        { task: 'Finalize launch campaign creative', owner: 'Designer + CMO', time: '4 hours', priority: 'critical', status: 'pending' },
        { task: 'Close merchants 11-12 (bonus)', owner: 'CEO + BDA', time: '4 hours', priority: 'high', status: 'pending' },
        { task: 'Reach 50 transactions', owner: 'CEO', time: '2 hours', priority: 'high', status: 'pending' },
        { task: 'Brief all influencers for launch day', owner: 'CMO', time: '2 hours', priority: 'high', status: 'pending' },
        { task: 'Test all systems under load', owner: 'CTO', time: '2 hours', priority: 'high', status: 'pending' },
        { task: 'Prepare launch day timeline', owner: 'CEO', time: '1 hour', priority: 'medium', status: 'pending' },
      ],
      targets: { merchants: 12, users: 230, content: 38 },
      tips: 'Launch day is about coordination. Everyone knows their role. Practice the sequence.'
    },
    {
      day: 13,
      date: 'Feb 27',
      theme: 'FINAL PREP',
      focus: 'Everything Ready for March 1',
      color: 'purple',
      tasks: [
        { task: 'Final launch checklist review', owner: 'CEO', time: '2 hours', priority: 'critical', status: 'pending' },
        { task: 'Schedule all launch day posts', owner: 'CMO', time: '2 hours', priority: 'critical', status: 'pending' },
        { task: 'Confirm all influencer posts for launch', owner: 'CMO', time: '1 hour', priority: 'high', status: 'pending' },
        { task: 'Email pre-launch to Founders List', owner: 'CMO', time: '30 min', priority: 'high', status: 'pending' },
        { task: 'Final case study published', owner: 'CMO', time: '2 hours', priority: 'high', status: 'pending' },
        { task: 'Team dinner / alignment session', owner: 'All Team', time: '2 hours', priority: 'medium', status: 'pending' },
      ],
      targets: { merchants: 12, users: 250, content: 42 },
      tips: 'Rest before launch. Tomorrow is preparation. Day after is LAUNCH.'
    },
    {
      day: 14,
      date: 'Feb 28',
      theme: 'LAUNCH EVE',
      focus: 'Final Checks + Rest',
      color: 'purple',
      tasks: [
        { task: 'Final system check with CTO', owner: 'CEO + CTO', time: '1 hour', priority: 'critical', status: 'pending' },
        { task: 'Confirm launch day war room setup', owner: 'CEO', time: '30 min', priority: 'high', status: 'pending' },
        { task: 'Send "launching tomorrow" teaser', owner: 'CMO', time: '30 min', priority: 'high', status: 'pending' },
        { task: 'Prepare customer support templates', owner: 'CMO', time: '1 hour', priority: 'medium', status: 'pending' },
        { task: 'Early night for the team', owner: 'All Team', time: '-', priority: 'high', status: 'pending' },
        { task: 'LAUNCH DAY: March 1, 2026', owner: '-', time: '-', priority: 'celebration', status: 'pending' },
      ],
      targets: { merchants: 12, users: 250, content: 45 },
      tips: 'You have done the work. Tomorrow, you launch. Trust your preparation. Execute with confidence.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <header className="bg-[#0a1628]/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/marketing-dashboard" className="text-gray-400 hover:text-white transition-colors">
                <ArrowLeft size={24} />
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-red-400">14-Day Launch Sprint</h1>
                <p className="text-gray-400 text-sm">Feb 15 - Feb 28, 2026 | Launch: March 1</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-gray-400">Sprint Day</div>
                <div className="text-3xl font-bold text-red-400">1/14</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Sprint Goals */}
        <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-6 border border-red-500/30 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Sprint Goals: What We Must Achieve</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(sprintGoals).map(([key, goal]) => (
              <div key={key} className="bg-white/5 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-white mb-1">{goal.target}</div>
                <div className="text-gray-400 text-sm">{goal.label}</div>
                <div className="text-xs text-gray-500 mt-2">Current: {goal.current}</div>
              </div>
            ))}
          </div>
        </div>

        {/* The Rules */}
        <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-500/30 mb-8">
          <h3 className="text-lg font-bold text-yellow-400 mb-3 flex items-center gap-2">
            <AlertTriangle size={20} />
            Sprint Rules - Non-Negotiable
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-lg p-3">
              <div className="text-white font-bold mb-1">No New Features</div>
              <div className="text-gray-400 text-sm">Ship what you have. Fix bugs only.</div>
            </div>
            <div className="bg-white/5 rounded-lg p-3">
              <div className="text-white font-bold mb-1">Daily Standup</div>
              <div className="text-gray-400 text-sm">15 min every morning. No exceptions.</div>
            </div>
            <div className="bg-white/5 rounded-lg p-3">
              <div className="text-white font-bold mb-1">Document Everything</div>
              <div className="text-gray-400 text-sm">Every merchant story = content.</div>
            </div>
          </div>
        </div>

        {/* Day-by-Day Plan */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-4">Day-by-Day Execution Plan</h2>

          {sprintDays.map((day) => (
            <div
              key={day.day}
              className={`bg-white/5 rounded-xl border transition-all ${
                expandedDay === day.day ? 'border-[#c9a227]' : 'border-white/10'
              }`}
            >
              {/* Day Header */}
              <button
                onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                className="w-full p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg ${
                    day.color === 'red' ? 'bg-red-500/20 text-red-400' :
                    day.color === 'orange' ? 'bg-orange-500/20 text-orange-400' :
                    day.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' :
                    day.color === 'green' ? 'bg-green-500/20 text-green-400' :
                    day.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    D{day.day}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white">{day.theme}</span>
                      <span className="text-gray-500">|</span>
                      <span className="text-gray-400 text-sm">{day.date}</span>
                    </div>
                    <div className="text-gray-400 text-sm">{day.focus}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden md:flex items-center gap-3 text-sm">
                    <span className="text-blue-400"><Store size={14} className="inline mr-1" />{day.targets.merchants}</span>
                    <span className="text-green-400"><Users size={14} className="inline mr-1" />{day.targets.users}</span>
                    <span className="text-purple-400"><Video size={14} className="inline mr-1" />{day.targets.content}</span>
                  </div>
                  {expandedDay === day.day ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
                </div>
              </button>

              {/* Day Content */}
              {expandedDay === day.day && (
                <div className="px-4 pb-4 border-t border-white/10">
                  {/* Tip */}
                  <div className="bg-[#c9a227]/10 rounded-lg p-3 my-4 border border-[#c9a227]/30">
                    <div className="text-[#c9a227] text-sm font-medium flex items-center gap-2">
                      <Zap size={16} />
                      {day.tips}
                    </div>
                  </div>

                  {/* Tasks */}
                  <div className="space-y-2">
                    {day.tasks.map((task, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-3 p-3 rounded-lg ${
                          task.priority === 'critical' ? 'bg-red-500/10 border border-red-500/30' :
                          task.priority === 'high' ? 'bg-orange-500/10 border border-orange-500/30' :
                          task.priority === 'celebration' ? 'bg-green-500/10 border border-green-500/30' :
                          'bg-white/5'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 ${
                          task.status === 'done' ? 'bg-green-500 border-green-500' : 'border-gray-500'
                        }`}>
                          {task.status === 'done' && <CheckCircle2 size={16} className="text-white" />}
                        </div>
                        <div className="flex-1">
                          <div className="text-white text-sm">{task.task}</div>
                          <div className="text-gray-500 text-xs">Owner: {task.owner} | Time: {task.time}</div>
                        </div>
                        {task.priority === 'critical' && (
                          <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">CRITICAL</span>
                        )}
                        {task.priority === 'high' && (
                          <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">HIGH</span>
                        )}
                        {task.priority === 'celebration' && (
                          <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">LAUNCH!</span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Day Targets */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-6 text-sm">
                      <span className="text-gray-400">End of Day Targets:</span>
                      <span className="text-blue-400"><Store size={14} className="inline mr-1" />{day.targets.merchants} merchants</span>
                      <span className="text-green-400"><Users size={14} className="inline mr-1" />{day.targets.users} users</span>
                      <span className="text-purple-400"><Video size={14} className="inline mr-1" />{day.targets.content} content</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 bg-gradient-to-r from-[#c9a227]/20 to-green-500/20 rounded-2xl p-6 border border-[#c9a227]/30">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Ready to Start?</h3>
              <p className="text-gray-400">Day 1 starts NOW. Open the first day and start executing.</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/marketing-dashboard"
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-colors"
              >
                Back to Dashboard
              </Link>
              <button
                onClick={() => setExpandedDay(1)}
                className="bg-[#c9a227] hover:bg-[#b8922a] text-black px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-colors"
              >
                <Rocket size={20} />
                Start Day 1
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 mt-12">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>14-Day Launch Sprint | Nuqta 2026</p>
        </div>
      </footer>
    <GlobalFooter />
    </div>
  );
}
