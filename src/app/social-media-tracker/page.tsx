'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Instagram,
  Video,
  Linkedin,
  MessageCircle,
  Mail,
  Users,
  TrendingUp,
  Target,
  Calendar,
  CheckCircle2,
  Circle,
  Clock,
  BarChart3,
  Zap,
  Star,
  Heart,
  Share2,
  Eye,
  UserPlus,
  DollarSign,
  Megaphone,
  ChevronRight,
  AlertCircle,
  Crown,
  Sparkles
} from 'lucide-react';

/**
 * SOCIAL MEDIA TRACKER
 * Real-time tracking of all social media activities and KPIs
 */

// Platform metrics
const platformMetrics = [
  {
    platform: 'Instagram',
    icon: Instagram,
    color: 'pink',
    handle: '@NuqtaApp',
    status: 'pending',
    current: { followers: 0, posts: 0, engagement: 0 },
    week1Target: { followers: 500, posts: 7, engagement: 5 },
    month1Target: { followers: 5000, posts: 30, engagement: 8 },
    month3Target: { followers: 15000, posts: 90, engagement: 10 },
  },
  {
    platform: 'TikTok',
    icon: Video,
    color: 'cyan',
    handle: '@NuqtaApp',
    status: 'pending',
    current: { followers: 0, posts: 0, engagement: 0 },
    week1Target: { followers: 300, posts: 5, engagement: 8 },
    month1Target: { followers: 3000, posts: 20, engagement: 12 },
    month3Target: { followers: 10000, posts: 60, engagement: 15 },
  },
  {
    platform: 'LinkedIn',
    icon: Linkedin,
    color: 'blue',
    handle: 'Nuqta',
    status: 'pending',
    current: { followers: 0, posts: 0, engagement: 0 },
    week1Target: { followers: 100, posts: 3, engagement: 3 },
    month1Target: { followers: 500, posts: 12, engagement: 4 },
    month3Target: { followers: 3000, posts: 36, engagement: 5 },
  },
  {
    platform: 'WhatsApp',
    icon: MessageCircle,
    color: 'green',
    handle: 'Nuqta Business',
    status: 'pending',
    current: { followers: 0, posts: 0, engagement: 0 },
    week1Target: { followers: 200, posts: 5, engagement: 40 },
    month1Target: { followers: 2000, posts: 12, engagement: 50 },
    month3Target: { followers: 10000, posts: 36, engagement: 60 },
  },
];

// Weekly action items
const weeklyActions = [
  // Week 1 - Setup & Launch
  {
    week: 1,
    title: 'Setup & Launch',
    tasks: [
      { id: 'w1t1', task: 'Create Instagram @NuqtaApp account', status: 'pending', platform: 'Instagram', priority: 'P0' },
      { id: 'w1t2', task: 'Create TikTok @NuqtaApp account', status: 'pending', platform: 'TikTok', priority: 'P0' },
      { id: 'w1t3', task: 'Create LinkedIn company page', status: 'pending', platform: 'LinkedIn', priority: 'P0' },
      { id: 'w1t4', task: 'Set up WhatsApp Business', status: 'pending', platform: 'WhatsApp', priority: 'P0' },
      { id: 'w1t5', task: 'Design profile photos & highlight covers', status: 'pending', platform: 'All', priority: 'P0' },
      { id: 'w1t6', task: 'Write bio & link in bio setup', status: 'pending', platform: 'All', priority: 'P0' },
      { id: 'w1t7', task: 'Create niche accounts (@NuqtaFood, @NuqtaBeauty)', status: 'pending', platform: 'Instagram', priority: 'P1' },
      { id: 'w1t8', task: 'Batch create 20 content pieces', status: 'pending', platform: 'All', priority: 'P0' },
      { id: 'w1t9', task: 'Send 10 nano influencer DMs', status: 'pending', platform: 'Instagram', priority: 'P0' },
      { id: 'w1t10', task: 'Post launch announcement', status: 'pending', platform: 'All', priority: 'P0' },
    ],
  },
  // Week 2 - Content Push
  {
    week: 2,
    title: 'Content Push',
    tasks: [
      { id: 'w2t1', task: 'Post 7 Reels (1/day)', status: 'pending', platform: 'Instagram', priority: 'P0' },
      { id: 'w2t2', task: 'Post 5 TikToks', status: 'pending', platform: 'TikTok', priority: 'P0' },
      { id: 'w2t3', task: 'Post 3 LinkedIn articles', status: 'pending', platform: 'LinkedIn', priority: 'P1' },
      { id: 'w2t4', task: 'Send 5 micro influencer DMs', status: 'pending', platform: 'Instagram', priority: 'P0' },
      { id: 'w2t5', task: 'First influencer post goes live', status: 'pending', platform: 'Instagram', priority: 'P0' },
      { id: 'w2t6', task: 'Create 4 WhatsApp communities', status: 'pending', platform: 'WhatsApp', priority: 'P1' },
      { id: 'w2t7', task: 'Launch #NuqtaSavingsChallenge', status: 'pending', platform: 'TikTok', priority: 'P1' },
      { id: 'w2t8', task: 'Respond to all DMs & comments', status: 'pending', platform: 'All', priority: 'P0' },
    ],
  },
  // Week 3 - Growth Push
  {
    week: 3,
    title: 'Growth Push',
    tasks: [
      { id: 'w3t1', task: 'Activate paid ads (AED 500 test)', status: 'pending', platform: 'Instagram', priority: 'P1' },
      { id: 'w3t2', task: 'Post 3 merchant spotlights', status: 'pending', platform: 'Instagram', priority: 'P0' },
      { id: 'w3t3', task: 'Create UGC compilation reel', status: 'pending', platform: 'Instagram', priority: 'P1' },
      { id: 'w3t4', task: 'Send 3 mid-tier influencer DMs', status: 'pending', platform: 'Instagram', priority: 'P1' },
      { id: 'w3t5', task: 'WhatsApp broadcast to 500+ members', status: 'pending', platform: 'WhatsApp', priority: 'P0' },
      { id: 'w3t6', task: 'Hit 1,000 Instagram followers', status: 'pending', platform: 'Instagram', priority: 'P0' },
      { id: 'w3t7', task: 'Post founder story video', status: 'pending', platform: 'All', priority: 'P1' },
    ],
  },
  // Week 4 - Momentum
  {
    week: 4,
    title: 'Momentum Building',
    tasks: [
      { id: 'w4t1', task: 'Golden Week campaign (7 days of rewards)', status: 'pending', platform: 'All', priority: 'P0' },
      { id: 'w4t2', task: 'Coordinate 5+ influencer posts same week', status: 'pending', platform: 'Instagram', priority: 'P0' },
      { id: 'w4t3', task: 'Scale paid ads to AED 1,000', status: 'pending', platform: 'Instagram', priority: 'P1' },
      { id: 'w4t4', task: 'Month 1 performance report', status: 'pending', platform: 'All', priority: 'P0' },
      { id: 'w4t5', task: 'Hit 3,000 total followers across platforms', status: 'pending', platform: 'All', priority: 'P0' },
      { id: 'w4t6', task: 'Collect 10 testimonial videos', status: 'pending', platform: 'Instagram', priority: 'P1' },
    ],
  },
];

// Influencer pipeline
const influencerPipeline = [
  { stage: 'DM Sent', count: 0, target: 30, color: 'gray' },
  { stage: 'Responded', count: 0, target: 15, color: 'yellow' },
  { stage: 'Negotiating', count: 0, target: 10, color: 'blue' },
  { stage: 'Confirmed', count: 0, target: 8, color: 'purple' },
  { stage: 'Posted', count: 0, target: 5, color: 'green' },
];

// Content calendar - Week 1
const week1Content = [
  { day: 'Mon', date: 'Launch Day', platform: 'IG + TikTok', type: 'Reel', content: 'Nuqta Launch Announcement', status: 'pending', time: '12:00 PM' },
  { day: 'Mon', date: 'Launch Day', platform: 'LinkedIn', type: 'Post', content: 'Company Launch Post', status: 'pending', time: '10:00 AM' },
  { day: 'Tue', date: 'Day 2', platform: 'IG Stories', type: 'Story', content: 'Founder Introduction', status: 'pending', time: '11:00 AM' },
  { day: 'Tue', date: 'Day 2', platform: 'TikTok', type: 'Video', content: 'How Nuqta Works (15 sec)', status: 'pending', time: '7:00 PM' },
  { day: 'Wed', date: 'Day 3', platform: 'IG + TikTok', type: 'Reel', content: 'How to Earn Cashback Tutorial', status: 'pending', time: '12:00 PM' },
  { day: 'Thu', date: 'Day 4', platform: 'IG Feed', type: 'Post', content: 'First Merchant Partner Spotlight', status: 'pending', time: '6:00 PM' },
  { day: 'Thu', date: 'Day 4', platform: 'WhatsApp', type: 'Broadcast', content: 'Waitlist Exclusive Access', status: 'pending', time: '2:00 PM' },
  { day: 'Fri', date: 'Day 5', platform: 'IG + TikTok', type: 'Reel', content: '#NuqtaSavingsChallenge Launch', status: 'pending', time: '7:00 PM' },
  { day: 'Sat', date: 'Day 6', platform: 'IG Stories', type: 'Story', content: 'Weekend Deals Preview', status: 'pending', time: '11:00 AM' },
  { day: 'Sun', date: 'Day 7', platform: 'IG Feed', type: 'Carousel', content: 'Top 5 Reasons to Join Nuqta', status: 'pending', time: '5:00 PM' },
];

// KPI targets
const kpiTargets = [
  { metric: 'New Users from Social', week1: 100, month1: 1000, month3: 5000, current: 0 },
  { metric: 'Total Followers (All Platforms)', week1: 1000, month1: 8000, month3: 30000, current: 0 },
  { metric: 'Engagement Rate', week1: '5%', month1: '6%', month3: '8%', current: '0%' },
  { metric: 'Content Pieces Published', week1: 15, month1: 60, month3: 180, current: 0 },
  { metric: 'Influencer Posts Live', week1: 3, month1: 15, month3: 50, current: 0 },
  { metric: 'Waitlist Signups via Social', week1: 200, month1: 2000, month3: 10000, current: 0 },
];

export default function SocialMediaTrackerPage() {
  const [activeWeek, setActiveWeek] = useState(1);
  const [viewMode, setViewMode] = useState<'overview' | 'tasks' | 'content' | 'influencers' | 'kpis'>('overview');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-500/20';
      case 'in-progress': return 'text-yellow-400 bg-yellow-500/20';
      case 'pending': return 'text-gray-400 bg-gray-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'P0': return 'bg-red-500/20 text-red-400';
      case 'P1': return 'bg-yellow-500/20 text-yellow-400';
      case 'P2': return 'bg-blue-500/20 text-blue-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const currentWeekTasks = weeklyActions.find(w => w.week === activeWeek)?.tasks || [];
  const completedTasks = currentWeekTasks.filter(t => t.status === 'completed').length;
  const totalTasks = currentWeekTasks.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2a4a] to-[#0a1628]">
      {/* Header */}
      <header className="bg-[#0a1628]/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link href="/marketing-dashboard" className="text-gray-400 hover:text-white transition-colors">
                <ArrowLeft size={24} />
              </Link>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <Megaphone className="text-pink-400" size={24} />
                  Social Media Tracker
                </h1>
                <p className="text-gray-400 text-sm">Real-time campaign & KPI tracking</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/5 rounded-lg px-4 py-2">
                <div className="text-xs text-gray-400">Week {activeWeek} Progress</div>
                <div className="text-lg font-bold text-white">{completedTasks}/{totalTasks} tasks</div>
              </div>
              <div className={`px-3 py-2 rounded-lg ${completedTasks === 0 ? 'bg-red-500/20 text-red-400' : completedTasks === totalTasks ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                {completedTasks === 0 ? 'Not Started' : completedTasks === totalTasks ? 'Complete!' : 'In Progress'}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-[#0a1628]/80 backdrop-blur-sm border-b border-white/10 sticky top-[72px] sm:top-[88px] z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-2">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'tasks', label: 'Weekly Tasks', icon: CheckCircle2 },
              { id: 'content', label: 'Content Calendar', icon: Calendar },
              { id: 'influencers', label: 'Influencer Pipeline', icon: Users },
              { id: 'kpis', label: 'KPI Dashboard', icon: Target },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setViewMode(tab.id as typeof viewMode)}
                className={`px-3 sm:px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all flex items-center gap-2 text-sm ${
                  viewMode === tab.id
                    ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <tab.icon size={16} />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
        {/* Overview */}
        {viewMode === 'overview' && (
          <div className="space-y-6">
            {/* Platform Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {platformMetrics.map((platform) => (
                <div
                  key={platform.platform}
                  className={`bg-white/5 rounded-xl p-5 border transition-all hover:bg-white/10 ${
                    platform.status === 'active' ? 'border-green-500/30' : 'border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      platform.color === 'pink' ? 'bg-pink-500/20 text-pink-400' :
                      platform.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' :
                      platform.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      <platform.icon size={24} />
                    </div>
                    <div>
                      <div className="text-white font-bold">{platform.platform}</div>
                      <div className="text-gray-400 text-sm">{platform.handle}</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Followers</span>
                      <span className="text-white font-bold">{platform.current.followers} / {platform.week1Target.followers}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          platform.color === 'pink' ? 'bg-pink-500' :
                          platform.color === 'cyan' ? 'bg-cyan-500' :
                          platform.color === 'blue' ? 'bg-blue-500' :
                          'bg-green-500'
                        }`}
                        style={{ width: `${Math.min((platform.current.followers / platform.week1Target.followers) * 100, 100)}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Posts: {platform.current.posts}/{platform.week1Target.posts}</span>
                      <span>Eng: {platform.current.engagement}%/{platform.week1Target.engagement}%</span>
                    </div>
                  </div>

                  <div className={`mt-4 px-3 py-2 rounded-lg text-center text-sm ${
                    platform.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {platform.status === 'active' ? '● Active' : '○ Setup Pending'}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-pink-500/20 to-pink-500/5 rounded-xl p-4 border border-pink-500/30">
                <div className="text-gray-400 text-sm mb-1">Total Followers</div>
                <div className="text-2xl font-bold text-white">0</div>
                <div className="text-pink-400 text-sm">Target: 1,000 (Week 1)</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 rounded-xl p-4 border border-cyan-500/30">
                <div className="text-gray-400 text-sm mb-1">Content Published</div>
                <div className="text-2xl font-bold text-white">0</div>
                <div className="text-cyan-400 text-sm">Target: 15 (Week 1)</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-xl p-4 border border-purple-500/30">
                <div className="text-gray-400 text-sm mb-1">Influencer Posts</div>
                <div className="text-2xl font-bold text-white">0</div>
                <div className="text-purple-400 text-sm">Target: 5 (Week 1)</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-xl p-4 border border-green-500/30">
                <div className="text-gray-400 text-sm mb-1">Signups from Social</div>
                <div className="text-2xl font-bold text-white">0</div>
                <div className="text-green-400 text-sm">Target: 200 (Week 1)</div>
              </div>
            </div>

            {/* Influencer Pipeline Quick View */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Users className="text-purple-400" size={20} />
                Influencer Pipeline
              </h3>
              <div className="flex items-center justify-between">
                {influencerPipeline.map((stage, idx) => (
                  <React.Fragment key={idx}>
                    <div className="text-center flex-1">
                      <div className={`w-14 h-14 rounded-full mx-auto mb-2 flex items-center justify-center font-bold text-lg ${
                        stage.color === 'green' ? 'bg-green-500/20 text-green-400 border-2 border-green-500/50' :
                        stage.color === 'purple' ? 'bg-purple-500/20 text-purple-400 border-2 border-purple-500/50' :
                        stage.color === 'blue' ? 'bg-blue-500/20 text-blue-400 border-2 border-blue-500/50' :
                        stage.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400 border-2 border-yellow-500/50' :
                        'bg-gray-500/20 text-gray-400 border-2 border-gray-500/50'
                      }`}>
                        {stage.count}
                      </div>
                      <div className="text-white text-sm font-medium">{stage.stage}</div>
                      <div className="text-gray-500 text-xs">/{stage.target}</div>
                    </div>
                    {idx < influencerPipeline.length - 1 && (
                      <ChevronRight className="text-gray-600 flex-shrink-0" size={20} />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* This Week's Priority Actions */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="text-yellow-400" size={20} />
                This Week&apos;s Priority Actions
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {currentWeekTasks.filter(t => t.priority === 'P0').slice(0, 6).map((task) => (
                  <div
                    key={task.id}
                    className={`flex items-center gap-3 p-3 rounded-lg bg-white/5 border ${
                      task.status === 'completed' ? 'border-green-500/30' : 'border-white/10'
                    }`}
                  >
                    {task.status === 'completed' ? (
                      <CheckCircle2 className="text-green-400 flex-shrink-0" size={20} />
                    ) : (
                      <Circle className="text-gray-400 flex-shrink-0" size={20} />
                    )}
                    <div className="flex-1">
                      <div className={`text-sm ${task.status === 'completed' ? 'text-gray-400 line-through' : 'text-white'}`}>
                        {task.task}
                      </div>
                      <div className="text-xs text-gray-500">{task.platform}</div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Weekly Tasks */}
        {viewMode === 'tasks' && (
          <div className="space-y-6">
            {/* Week Selector */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {weeklyActions.map((week) => (
                <button
                  key={week.week}
                  onClick={() => setActiveWeek(week.week)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                    activeWeek === week.week
                      ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30'
                      : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  Week {week.week}: {week.title}
                </button>
              ))}
            </div>

            {/* Tasks List */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">
                  Week {activeWeek}: {weeklyActions.find(w => w.week === activeWeek)?.title}
                </h3>
                <div className="text-sm text-gray-400">
                  {completedTasks}/{totalTasks} completed
                </div>
              </div>

              <div className="space-y-3">
                {currentWeekTasks.map((task) => (
                  <div
                    key={task.id}
                    className={`flex items-center gap-4 p-4 rounded-lg bg-white/5 border transition-all ${
                      task.status === 'completed' ? 'border-green-500/30 bg-green-500/5' :
                      task.status === 'in-progress' ? 'border-yellow-500/30 bg-yellow-500/5' :
                      'border-white/10'
                    }`}
                  >
                    <button className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      task.status === 'completed' ? 'bg-green-500 border-green-500' :
                      'border-gray-500 hover:border-green-500'
                    }`}>
                      {task.status === 'completed' && <CheckCircle2 className="text-white" size={14} />}
                    </button>
                    <div className="flex-1">
                      <div className={`font-medium ${task.status === 'completed' ? 'text-gray-400 line-through' : 'text-white'}`}>
                        {task.task}
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${
                      task.platform === 'Instagram' ? 'bg-pink-500/20 text-pink-400' :
                      task.platform === 'TikTok' ? 'bg-cyan-500/20 text-cyan-400' :
                      task.platform === 'LinkedIn' ? 'bg-blue-500/20 text-blue-400' :
                      task.platform === 'WhatsApp' ? 'bg-green-500/20 text-green-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {task.platform}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Content Calendar */}
        {viewMode === 'content' && (
          <div className="space-y-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Calendar className="text-[#c9a227]" size={24} />
                Week 1 Content Calendar
              </h3>

              <div className="space-y-3">
                {week1Content.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-lg bg-white/5 border ${
                      item.status === 'completed' ? 'border-green-500/30' : 'border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3 sm:w-32">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold ${
                        item.day === 'Mon' ? 'bg-red-500/20 text-red-400' :
                        item.day === 'Tue' ? 'bg-orange-500/20 text-orange-400' :
                        item.day === 'Wed' ? 'bg-yellow-500/20 text-yellow-400' :
                        item.day === 'Thu' ? 'bg-green-500/20 text-green-400' :
                        item.day === 'Fri' ? 'bg-blue-500/20 text-blue-400' :
                        item.day === 'Sat' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-pink-500/20 text-pink-400'
                      }`}>
                        {item.day}
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">{item.date}</div>
                        <div className="text-gray-500 text-xs">{item.time}</div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="text-white font-medium">{item.content}</div>
                      <div className="text-gray-400 text-sm">{item.type}</div>
                    </div>

                    <span className={`text-xs px-3 py-1 rounded-full ${
                      item.platform.includes('IG') ? 'bg-pink-500/20 text-pink-400' :
                      item.platform.includes('TikTok') ? 'bg-cyan-500/20 text-cyan-400' :
                      item.platform.includes('LinkedIn') ? 'bg-blue-500/20 text-blue-400' :
                      item.platform.includes('WhatsApp') ? 'bg-green-500/20 text-green-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {item.platform}
                    </span>

                    <span className={`text-xs px-3 py-1 rounded-full ${getStatusColor(item.status)}`}>
                      {item.status === 'completed' ? 'Posted' : 'Pending'}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Link
                  href="/content-calendar"
                  className="inline-flex items-center gap-2 bg-[#c9a227] hover:bg-[#b8911f] text-black px-6 py-3 rounded-lg font-bold transition-colors"
                >
                  <Calendar size={18} />
                  View Full 30-Day Calendar
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Influencer Pipeline */}
        {viewMode === 'influencers' && (
          <div className="space-y-6">
            {/* Pipeline Funnel */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Users className="text-purple-400" size={24} />
                Influencer Pipeline
              </h3>

              <div className="flex items-center justify-between mb-8">
                {influencerPipeline.map((stage, idx) => (
                  <React.Fragment key={idx}>
                    <div className="text-center flex-1">
                      <div className={`w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center font-bold text-2xl ${
                        stage.color === 'green' ? 'bg-green-500/20 text-green-400 border-2 border-green-500/50' :
                        stage.color === 'purple' ? 'bg-purple-500/20 text-purple-400 border-2 border-purple-500/50' :
                        stage.color === 'blue' ? 'bg-blue-500/20 text-blue-400 border-2 border-blue-500/50' :
                        stage.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400 border-2 border-yellow-500/50' :
                        'bg-gray-500/20 text-gray-400 border-2 border-gray-500/50'
                      }`}>
                        {stage.count}
                      </div>
                      <div className="text-white font-bold">{stage.stage}</div>
                      <div className="text-gray-500 text-sm">Target: {stage.target}</div>
                    </div>
                    {idx < influencerPipeline.length - 1 && (
                      <ChevronRight className="text-gray-600 flex-shrink-0" size={28} />
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="bg-[#c9a227]/10 rounded-lg p-4 border border-[#c9a227]/30">
                <div className="text-[#c9a227] font-bold mb-2">Week 1 Target</div>
                <div className="text-gray-300 text-sm">
                  Send 30 DMs → Get 15 responses → Negotiate 10 → Confirm 8 → Get 5 posts live
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/influencer-list"
                className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30 hover:bg-purple-500/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Users className="text-purple-400" size={24} />
                  <span className="text-white font-bold">Influencer Database</span>
                </div>
                <p className="text-gray-400 text-sm">23 curated influencers + 50 nano signed. View DM templates.</p>
              </Link>

              <Link
                href="/campaigns"
                className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl p-6 border border-cyan-500/30 hover:bg-cyan-500/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="text-cyan-400" size={24} />
                  <span className="text-white font-bold">Campaign Templates</span>
                </div>
                <p className="text-gray-400 text-sm">Ready-to-use campaign briefs for influencer collaborations.</p>
              </Link>
            </div>
          </div>
        )}

        {/* KPI Dashboard */}
        {viewMode === 'kpis' && (
          <div className="space-y-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Target className="text-[#c9a227]" size={24} />
                KPI Targets vs Actuals
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-gray-400 text-sm">
                      <th className="pb-4 pr-4">Metric</th>
                      <th className="pb-4 px-4 text-center">Current</th>
                      <th className="pb-4 px-4 text-center">Week 1</th>
                      <th className="pb-4 px-4 text-center">Month 1</th>
                      <th className="pb-4 px-4 text-center">Month 3</th>
                      <th className="pb-4 pl-4 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {kpiTargets.map((kpi, idx) => (
                      <tr key={idx} className="border-t border-white/5">
                        <td className="py-4 pr-4 text-white font-medium">{kpi.metric}</td>
                        <td className="py-4 px-4 text-center">
                          <span className="text-2xl font-bold text-white">{kpi.current}</span>
                        </td>
                        <td className="py-4 px-4 text-center text-gray-400">{kpi.week1}</td>
                        <td className="py-4 px-4 text-center text-gray-400">{kpi.month1}</td>
                        <td className="py-4 px-4 text-center text-gray-400">{kpi.month3}</td>
                        <td className="py-4 pl-4 text-center">
                          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs ${
                            kpi.current >= kpi.week1 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                          }`}>
                            {kpi.current >= kpi.week1 ? (
                              <>
                                <CheckCircle2 size={12} />
                                On Track
                              </>
                            ) : (
                              <>
                                <AlertCircle size={12} />
                                Behind
                              </>
                            )}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Performance Summary */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-xl p-5 border border-green-500/30">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="text-green-400" size={20} />
                  <span className="text-green-400 font-bold">Strengths</span>
                </div>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Content calendar ready</li>
                  <li>• 50 nano influencers signed</li>
                  <li>• DM templates prepared</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 rounded-xl p-5 border border-yellow-500/30">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="text-yellow-400" size={20} />
                  <span className="text-yellow-400 font-bold">Needs Attention</span>
                </div>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Social accounts not created yet</li>
                  <li>• No content published</li>
                  <li>• Influencer DMs not sent</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-xl p-5 border border-blue-500/30">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="text-blue-400" size={20} />
                  <span className="text-blue-400 font-bold">Next Actions</span>
                </div>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Create IG & TikTok accounts</li>
                  <li>• Batch create 20 content pieces</li>
                  <li>• Send first 10 influencer DMs</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
