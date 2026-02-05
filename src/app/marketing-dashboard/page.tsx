'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Target,
  Calendar,
  Users,
  Store,
  TrendingUp,
  DollarSign,
  CheckCircle2,
  Clock,
  AlertTriangle,
  ChevronRight,
  Rocket,
  Zap,
  BarChart3,
  Megaphone,
  Instagram,
  MessageCircle,
  Mail,
  Video,
  Trophy,
  Flag,
  Play,
  Pause,
  RefreshCw,
  Eye,
  Star,
  Gift,
  MapPin,
  Building2,
  Smartphone,
  Globe,
  Heart,
  Share2,
  Layers,
  Settings,
  FileText,
  ExternalLink,
  ArrowUpRight,
  Circle,
  AlertCircle
} from 'lucide-react';

export default function MarketingDashboardPage() {
  const [activePhase, setActivePhase] = useState<'pre-launch' | 'launch' | 'growth'>('pre-launch');

  // Launch countdown
  const launchDate = new Date('2026-03-01');
  const today = new Date();
  const daysToLaunch = Math.ceil((launchDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  // Current sprint metrics
  const sprintMetrics = {
    day: 1,
    totalDays: 14,
    merchants: { current: 0, target: 10 },
    users: { current: 0, target: 100 },
    transactions: { current: 0, target: 50 },
    content: { current: 0, target: 20 }
  };

  // Quick action cards
  const quickActions = [
    {
      title: '14-Day Launch Sprint',
      description: 'Day-by-day execution plan to launch',
      icon: Rocket,
      href: '/launch-sprint',
      status: 'active',
      progress: 7,
      color: 'red'
    },
    {
      title: 'First 10 Merchants',
      description: 'Restaurant-first acquisition playbook',
      icon: Store,
      href: '/merchant-acquisition',
      status: 'active',
      progress: 0,
      color: 'blue'
    },
    {
      title: 'First 100 Users',
      description: 'Founder circle + beta user strategy',
      icon: Users,
      href: '/user-acquisition',
      status: 'pending',
      progress: 0,
      color: 'green'
    },
    {
      title: 'Content Calendar',
      description: 'What to post, when, where',
      icon: Calendar,
      href: '/marketing-bible?tab=content',
      status: 'ready',
      progress: 100,
      color: 'purple'
    }
  ];

  // Marketing channels with status
  const channels = [
    { name: 'Instagram', icon: Instagram, status: 'not_started', followers: 0, target: 15000, priority: 1 },
    { name: 'TikTok', icon: Video, status: 'not_started', followers: 0, target: 10000, priority: 2 },
    { name: 'WhatsApp', icon: MessageCircle, status: 'not_started', members: 0, target: 3000, priority: 3 },
    { name: 'Influencers', icon: Star, status: 'not_started', active: 0, target: 100, priority: 1 },
  ];

  // Today's tasks
  const todayTasks = [
    { task: 'Visit 3 restaurants in Business Bay', owner: 'CEO + BDA', status: 'pending', priority: 'high' },
    { task: 'Create Instagram account @nuqta.ae', owner: 'CMO', status: 'pending', priority: 'high' },
    { task: 'Invite 20 friends/family to Founders List', owner: 'All Team', status: 'pending', priority: 'high' },
    { task: 'Design first 5 social media posts', owner: 'Designer', status: 'pending', priority: 'medium' },
    { task: 'Setup Hootsuite/Buffer account', owner: 'CMO', status: 'pending', priority: 'medium' },
  ];

  // Marketing plan sections
  const planSections = [
    {
      category: 'STRATEGY',
      items: [
        { name: 'Brand Guidelines', href: '/marketing-bible?tab=brand', status: 'complete', icon: Target },
        { name: 'Target Audience', href: '/marketing-bible?tab=segments', status: 'complete', icon: Users },
        { name: 'Channel Strategy', href: '/marketing-bible?tab=overview', status: 'complete', icon: Layers },
        { name: 'Budget Allocation', href: '/marketing-bible?tab=budget', status: 'complete', icon: DollarSign },
      ]
    },
    {
      category: 'CONTENT',
      items: [
        { name: 'Content Series (4 Series)', href: '/marketing-bible?tab=series', status: 'complete', icon: Video },
        { name: '200+ Topic Ideas', href: '/marketing-bible?tab=topics', status: 'complete', icon: FileText },
        { name: 'Viral Hooks Library', href: '/marketing-bible?tab=viral', status: 'complete', icon: Zap },
        { name: 'Content Calendar', href: '/marketing-bible?tab=content', status: 'complete', icon: Calendar },
      ]
    },
    {
      category: 'CHANNELS',
      items: [
        { name: 'Online Ads (Meta, Google)', href: '/marketing-bible?tab=online', status: 'complete', icon: Globe },
        { name: 'Offline Ads (OOH, Print)', href: '/marketing-bible?tab=offline', status: 'complete', icon: MapPin },
        { name: 'Influencer Marketing', href: '/marketing-bible?tab=influencer', status: 'complete', icon: Star },
        { name: 'Email Marketing', href: '/marketing-bible?tab=email', status: 'complete', icon: Mail },
      ]
    },
    {
      category: 'CAMPAIGNS',
      items: [
        { name: 'Ad Campaigns', href: '/marketing-bible?tab=adscampaigns', status: 'complete', icon: Megaphone },
        { name: 'Brand Marketing', href: '/marketing-bible?tab=brandmarketing', status: 'complete', icon: Building2 },
        { name: 'Events & Markets', href: '/marketing-bible?tab=events', status: 'complete', icon: Trophy },
        { name: 'Media Hub', href: '/marketing-bible?tab=mediahub', status: 'complete', icon: Play },
      ]
    },
    {
      category: 'COMMUNITY',
      items: [
        { name: 'Social & Community', href: '/marketing-bible?tab=social', status: 'complete', icon: Heart },
        { name: 'Growth Playbook', href: '/marketing-bible?tab=growth', status: 'complete', icon: TrendingUp },
        { name: 'Segmented Acquisition', href: '/marketing-bible?tab=segments', status: 'complete', icon: Layers },
        { name: 'KPIs & Testing', href: '/marketing-bible?tab=kpis', status: 'complete', icon: BarChart3 },
      ]
    },
    {
      category: 'EXECUTION',
      items: [
        { name: 'CMO 90-Day Playbook', href: '/cmo-playbook', status: 'complete', icon: Rocket },
        { name: 'Merchant Playbook', href: '/merchant-playbook', status: 'complete', icon: Store },
        { name: 'Sales Kit', href: '/sales-kit', status: 'complete', icon: FileText },
        { name: 'Templates', href: '/marketing-bible?tab=templates', status: 'complete', icon: FileText },
      ]
    }
  ];

  // Critical issues to solve
  const criticalIssues = [
    { issue: 'Zero live merchants', solution: 'CEO + BDA visit 3 restaurants daily', deadline: '7 days', owner: 'CEO' },
    { issue: 'Zero app users', solution: 'Launch Founders List (100 invites)', deadline: '5 days', owner: 'All Team' },
    { issue: 'No social presence', solution: 'Create IG + TikTok accounts today', deadline: '1 day', owner: 'CMO' },
    { issue: 'No proof points', solution: 'Get 50 transactions for case study', deadline: '14 days', owner: 'CEO' },
    { issue: 'No retention strategy', solution: 'Map Day 1-7 user experience', deadline: '7 days', owner: 'CTO' },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <header className="bg-[#0a1628]/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                <ArrowLeft size={24} />
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-[#c9a227]">Marketing Command Center</h1>
                <p className="text-gray-400 text-sm">Launch Date: March 1, 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-gray-400">Days to Launch</div>
                <div className="text-3xl font-bold text-red-400">{daysToLaunch}</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Launch Countdown Banner */}
        <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-6 border border-red-500/30 mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
                <Rocket className="text-red-400" size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">14-Day Launch Sprint</h2>
                <p className="text-gray-400">Day {sprintMetrics.day} of {sprintMetrics.totalDays} | Focus: Get First 10 Merchants + 100 Users</p>
              </div>
            </div>
            <Link
              href="/launch-sprint"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-colors"
            >
              View Sprint Plan
              <ChevronRight size={20} />
            </Link>
          </div>

          {/* Sprint Progress */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">Merchants</span>
                <Store size={16} className="text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-white">{sprintMetrics.merchants.current}/{sprintMetrics.merchants.target}</div>
              <div className="h-2 bg-white/10 rounded-full mt-2">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: `${(sprintMetrics.merchants.current / sprintMetrics.merchants.target) * 100}%` }}></div>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">Users</span>
                <Users size={16} className="text-green-400" />
              </div>
              <div className="text-2xl font-bold text-white">{sprintMetrics.users.current}/{sprintMetrics.users.target}</div>
              <div className="h-2 bg-white/10 rounded-full mt-2">
                <div className="h-full bg-green-500 rounded-full" style={{ width: `${(sprintMetrics.users.current / sprintMetrics.users.target) * 100}%` }}></div>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">Transactions</span>
                <DollarSign size={16} className="text-[#c9a227]" />
              </div>
              <div className="text-2xl font-bold text-white">{sprintMetrics.transactions.current}/{sprintMetrics.transactions.target}</div>
              <div className="h-2 bg-white/10 rounded-full mt-2">
                <div className="h-full bg-[#c9a227] rounded-full" style={{ width: `${(sprintMetrics.transactions.current / sprintMetrics.transactions.target) * 100}%` }}></div>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">Content</span>
                <Video size={16} className="text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-white">{sprintMetrics.content.current}/{sprintMetrics.content.target}</div>
              <div className="h-2 bg-white/10 rounded-full mt-2">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: `${(sprintMetrics.content.current / sprintMetrics.content.target) * 100}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {quickActions.map((action, idx) => (
            <Link
              key={idx}
              href={action.href}
              className={`bg-white/5 rounded-xl p-5 border border-white/10 hover:border-${action.color}-500/50 transition-all group`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`w-12 h-12 rounded-lg bg-${action.color}-500/20 flex items-center justify-center`}>
                  <action.icon className={`text-${action.color}-400`} size={24} />
                </div>
                {action.status === 'active' && (
                  <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full flex items-center gap-1">
                    <Circle size={6} className="fill-red-400" />
                    Active
                  </span>
                )}
                {action.status === 'ready' && (
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Ready</span>
                )}
                {action.status === 'pending' && (
                  <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">Pending</span>
                )}
              </div>
              <h3 className="font-bold text-white mb-1 group-hover:text-[#c9a227] transition-colors">{action.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{action.description}</p>
              {action.progress > 0 && action.progress < 100 && (
                <div className="h-1.5 bg-white/10 rounded-full">
                  <div className={`h-full bg-${action.color}-500 rounded-full`} style={{ width: `${action.progress}%` }}></div>
                </div>
              )}
            </Link>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Today's Tasks */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Tasks */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Flag className="text-red-400" size={24} />
                  Today&apos;s Priority Tasks
                </h3>
                <span className="text-sm text-gray-400">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</span>
              </div>
              <div className="space-y-3">
                {todayTasks.map((task, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-4 p-4 rounded-lg ${
                      task.priority === 'high' ? 'bg-red-500/10 border border-red-500/30' : 'bg-white/5'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 cursor-pointer ${
                      task.status === 'done' ? 'bg-green-500 border-green-500' : 'border-gray-500'
                    }`}>
                      {task.status === 'done' && <CheckCircle2 size={20} className="text-white" />}
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium">{task.task}</div>
                      <div className="text-gray-400 text-sm">Owner: {task.owner}</div>
                    </div>
                    {task.priority === 'high' && (
                      <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">HIGH</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Critical Issues */}
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-6 border border-yellow-500/30">
              <h3 className="text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
                <AlertTriangle size={24} />
                Critical Issues to Solve
              </h3>
              <div className="space-y-3">
                {criticalIssues.map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="text-red-400 font-bold">{item.issue}</div>
                      <span className="text-xs text-gray-400">{item.deadline}</span>
                    </div>
                    <div className="text-gray-300 text-sm mb-1">{item.solution}</div>
                    <div className="text-xs text-[#c9a227]">Owner: {item.owner}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Channel Status */}
          <div className="space-y-6">
            {/* Channel Status */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <BarChart3 className="text-purple-400" size={24} />
                Channel Status
              </h3>
              <div className="space-y-4">
                {channels.map((channel, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <channel.icon size={20} className="text-[#c9a227]" />
                        <span className="text-white font-medium">{channel.name}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded ${
                        channel.status === 'active' ? 'bg-green-500/20 text-green-400' :
                        channel.status === 'setup' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {channel.status === 'not_started' ? 'Not Started' : channel.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Current: {channel.followers || channel.members || channel.active || 0}</span>
                      <span className="text-gray-400">Target: {channel.target.toLocaleString()}</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full mt-2">
                      <div className="h-full bg-[#c9a227] rounded-full" style={{ width: '0%' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-b from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl p-6 border border-[#c9a227]/30">
              <h3 className="text-lg font-bold text-[#c9a227] mb-4">90-Day Targets</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Users</span>
                  <span className="text-white font-bold">25,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Merchants</span>
                  <span className="text-white font-bold">100+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">GMV</span>
                  <span className="text-white font-bold">AED 50,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Budget</span>
                  <span className="text-white font-bold">AED 75,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marketing Plan Sections Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Complete Marketing Plan</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {planSections.map((section, idx) => (
              <div key={idx} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-sm font-bold text-[#c9a227] mb-4 tracking-wider">{section.category}</h3>
                <div className="space-y-2">
                  {section.items.map((item, itemIdx) => (
                    <Link
                      key={itemIdx}
                      href={item.href}
                      className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <item.icon size={18} className="text-gray-400 group-hover:text-[#c9a227]" />
                        <span className="text-white text-sm">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.status === 'complete' && (
                          <CheckCircle2 size={16} className="text-green-400" />
                        )}
                        <ChevronRight size={16} className="text-gray-500 group-hover:text-[#c9a227]" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="bg-gradient-to-r from-[#c9a227]/20 to-purple-500/20 rounded-2xl p-6 border border-[#c9a227]/30">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Ready to Execute?</h3>
              <p className="text-gray-400">Stop planning. Start shipping. The market will tell you what to do next.</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/launch-sprint"
                className="bg-[#c9a227] hover:bg-[#b8922a] text-black px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-colors"
              >
                <Rocket size={20} />
                Start 14-Day Sprint
              </Link>
              <Link
                href="/issue-resolution"
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-colors"
              >
                <AlertTriangle size={20} />
                View All Issues
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 mt-12">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>Marketing Command Center | Nuqta 2026</p>
        </div>
      </footer>
    </div>
  );
}
