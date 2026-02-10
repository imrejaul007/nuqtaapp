'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
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
  ChevronDown,
  ChevronUp,
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
  Circle,
  Palette,
  Hash,
  Monitor,
  Camera,
  Film,
  Mic,
  Radio,
  Ticket,
  QrCode,
  BadgeCheck,
  Calculator,
  Package,
  Briefcase,
  Phone,
  PenTool,
  Image,
  Bot
} from 'lucide-react';
import MarketingNav from '@/components/MarketingNav';

export default function MarketingDashboardPage() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'bible' | 'strategy' | 'content' | 'channels' | 'campaigns' | 'community' | 'execution'>('dashboard');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Launch countdown
  const launchDate = new Date('2026-03-01');
  const today = new Date();
  const daysToLaunch = Math.ceil((launchDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  // Sprint metrics
  const sprintMetrics = {
    day: 1,
    totalDays: 14,
    merchants: { current: 0, target: 10 },
    users: { current: 0, target: 100 },
    transactions: { current: 0, target: 50 },
    content: { current: 0, target: 20 }
  };

  // Main navigation tabs
  const mainTabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Target },
    { id: 'bible', label: 'Marketing Bible', icon: FileText },
    { id: 'strategy', label: 'Strategy', icon: Layers },
    { id: 'content', label: 'Content', icon: Video },
    { id: 'channels', label: 'Channels', icon: Globe },
    { id: 'campaigns', label: 'Campaigns', icon: Megaphone },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'execution', label: 'Execution', icon: Rocket },
  ];

  // All Marketing Bible sections (21 tabs)
  const marketingBibleSections = [
    { id: 'overview', name: 'Overview', icon: Target, desc: 'Complete marketing strategy overview', color: 'blue' },
    { id: 'brand', name: 'Brand Guidelines', icon: Palette, desc: 'Logo, colors, typography, voice', color: 'purple' },
    { id: 'segments', name: 'Segmented Acquisition', icon: Layers, desc: 'Community, profession, merchant targeting', color: 'green' },
    { id: 'content', name: 'Content Calendar', icon: Calendar, desc: 'Weekly and monthly content plan', color: 'orange' },
    { id: 'series', name: 'Content Series', icon: Film, desc: 'Dubai Budget, Nuqta Insider, Discovery, Deal Finder, Culture', color: 'red' },
    { id: 'topics', name: '200+ Topics', icon: Hash, desc: 'Ready-to-use content topic ideas', color: 'pink' },
    { id: 'viral', name: 'Viral Hooks', icon: Zap, desc: 'Proven hooks library for engagement', color: 'yellow' },
    { id: 'social', name: 'Social & Community', icon: MessageCircle, desc: 'Social media and community strategy', color: 'blue' },
    { id: 'online', name: 'Online Ads', icon: Monitor, desc: 'Meta, Google, TikTok ad strategies', color: 'blue' },
    { id: 'offline', name: 'Offline Ads', icon: MapPin, desc: 'Auto, bus, gate, elevator ads', color: 'green' },
    { id: 'influencer', name: 'Influencers', icon: Star, desc: 'Nano, micro, macro influencer strategy', color: 'yellow' },
    { id: 'email', name: 'Email Marketing', icon: Mail, desc: 'Automation and campaign sequences', color: 'blue' },
    { id: 'campaigns', name: 'Campaigns', icon: Megaphone, desc: 'User and merchant campaign ideas', color: 'red' },
    { id: 'adscampaigns', name: 'Ad Campaigns', icon: Rocket, desc: 'Win Big, Calculate Savings, Cash Hunting', color: 'red' },
    { id: 'brandmarketing', name: 'Brand Marketing', icon: Building2, desc: 'Price engineering, QR codes, badges', color: 'purple' },
    { id: 'mediahub', name: 'Media Hub', icon: Play, desc: 'Short films, sports, podcasts, multi-language', color: 'pink' },
    { id: 'events', name: 'Events & Markets', icon: Ticket, desc: 'Flea markets, signature events, competitions', color: 'orange' },
    { id: 'aicontent', name: 'AI Content', icon: Bot, desc: 'Multi-language AI podcast network (20 languages)', color: 'purple' },
    { id: 'kpis', name: 'KPIs & Testing', icon: BarChart3, desc: 'Metrics, A/B testing, analytics', color: 'blue' },
    { id: 'templates', name: 'Templates', icon: FileText, desc: 'Ready-to-use content templates', color: 'gray' },
    { id: 'budget', name: 'Budget', icon: DollarSign, desc: 'AED 75K allocation across channels', color: 'green' },
    { id: 'growth', name: 'Growth Playbook', icon: TrendingUp, desc: 'Scaling strategies and tactics', color: 'blue' },
  ];

  // Today's priority tasks
  const todayTasks = [
    { task: 'Visit 3 restaurants in Business Bay', owner: 'CEO + BDA', status: 'pending', priority: 'critical' },
    { task: 'Create Instagram account @nuqta.ae', owner: 'CMO', status: 'pending', priority: 'critical' },
    { task: 'Invite 20 friends/family to Founders List', owner: 'All Team', status: 'pending', priority: 'high' },
    { task: 'Design first 5 social media posts', owner: 'Designer', status: 'pending', priority: 'high' },
    { task: 'Setup Hootsuite/Buffer account', owner: 'CMO', status: 'pending', priority: 'medium' },
  ];

  // Critical issues
  const criticalIssues = [
    { issue: 'Zero live merchants', solution: 'CEO + BDA visit 3 restaurants daily', deadline: '7 days', owner: 'CEO', status: 'red' },
    { issue: 'Zero app users', solution: 'Launch Founders List (100 invites)', deadline: '5 days', owner: 'All Team', status: 'red' },
    { issue: 'No social presence', solution: 'Create IG + TikTok accounts today', deadline: '1 day', owner: 'CMO', status: 'red' },
    { issue: 'No proof points', solution: 'Get 50 transactions for case study', deadline: '14 days', owner: 'CEO', status: 'yellow' },
    { issue: 'No retention strategy', solution: 'Map Day 1-7 user experience', deadline: '7 days', owner: 'CTO', status: 'yellow' },
  ];

  // Channel status
  const channels = [
    { name: 'Instagram', icon: Instagram, status: 'not_started', current: 0, target: 15000, priority: 1 },
    { name: 'TikTok', icon: Video, status: 'not_started', current: 0, target: 10000, priority: 2 },
    { name: 'WhatsApp', icon: MessageCircle, status: 'not_started', current: 0, target: 3000, priority: 3 },
    { name: 'Influencers', icon: Star, status: 'not_started', current: 0, target: 100, priority: 1 },
    { name: 'Email', icon: Mail, status: 'not_started', current: 0, target: 5000, priority: 4 },
    { name: 'YouTube', icon: Play, status: 'not_started', current: 0, target: 5000, priority: 5 },
  ];

  // Strategy sections with links to marketing-bible
  const strategySections = [
    {
      title: 'Brand & Identity',
      icon: Palette,
      color: 'purple',
      items: [
        { name: 'Brand Guidelines', href: '/marketing-bible?tab=brand', desc: 'Colors, fonts, logo usage', status: 'complete' },
        { name: 'Brand Voice & Tone', href: '/marketing-bible?tab=brand', desc: 'How we communicate', status: 'complete' },
        { name: 'Visual Identity', href: '/marketing-bible?tab=brand', desc: 'Design system', status: 'complete' },
      ]
    },
    {
      title: 'Target Audience',
      icon: Users,
      color: 'blue',
      items: [
        { name: 'User Segments', href: '/marketing-bible?tab=segments', desc: 'Who we target', status: 'complete' },
        { name: 'Community Acquisition', href: '/marketing-bible?tab=segments', desc: 'Indian, Filipino, Pakistani, Arab', status: 'complete' },
        { name: 'Profession Acquisition', href: '/marketing-bible?tab=segments', desc: 'Students, Healthcare, IT', status: 'complete' },
        { name: 'Merchant Categories', href: '/marketing-bible?tab=segments', desc: 'F&B, Salons, Gyms, Retail', status: 'complete' },
      ]
    },
    {
      title: 'Budget & ROI',
      icon: DollarSign,
      color: 'green',
      items: [
        { name: 'Budget Allocation', href: '/marketing-bible?tab=budget', desc: 'AED 75K / 90 days', status: 'complete' },
        { name: 'Channel Spend', href: '/cmo-playbook', desc: 'Where money goes', status: 'complete' },
        { name: 'ROI Projections', href: '/cmo-playbook', desc: 'Expected returns', status: 'complete' },
      ]
    },
  ];

  // Content sections
  const contentSections = [
    {
      title: 'Content Series',
      icon: Film,
      color: 'red',
      items: [
        { name: 'Series 1: Dubai Family Budget', href: '/marketing-bible?tab=series', desc: 'Street interviews about savings', status: 'complete' },
        { name: 'Series 2: Nuqta Insider', href: '/marketing-bible?tab=series', desc: 'App features podcast style', status: 'complete' },
        { name: 'Series 3: Nuqta Discovers', href: '/marketing-bible?tab=series', desc: 'Location & deals discovery', status: 'complete' },
        { name: 'Series 4: Deal Finder Challenge', href: '/marketing-bible?tab=series', desc: 'Hide Nuqta coin card treasure hunt', status: 'complete' },
        { name: 'Series 5: Culture Discovery', href: '/marketing-bible?tab=series', desc: 'Best of each nationality in UAE', status: 'complete' },
      ]
    },
    {
      title: 'Content Calendar',
      icon: Calendar,
      color: 'orange',
      items: [
        { name: 'Weekly Schedule', href: '/marketing-bible?tab=content', desc: 'What to post each day', status: 'complete' },
        { name: 'Monthly Themes', href: '/marketing-bible?tab=content', desc: 'Monthly focus areas', status: 'complete' },
        { name: '90-Day Calendar', href: '/cmo-playbook', desc: 'Full calendar with tasks', status: 'complete' },
      ]
    },
    {
      title: 'Content Assets',
      icon: Image,
      color: 'pink',
      items: [
        { name: '200+ Topic Ideas', href: '/marketing-bible?tab=topics', desc: 'Content topic library', status: 'complete' },
        { name: 'Viral Hooks Library', href: '/marketing-bible?tab=viral', desc: 'Proven hooks that work', status: 'complete' },
        { name: 'Templates', href: '/marketing-bible?tab=templates', desc: 'Ready-to-use templates', status: 'complete' },
      ]
    },
  ];

  // Channel sections
  const channelSections = [
    {
      title: 'Social Media',
      icon: Instagram,
      color: 'pink',
      items: [
        { name: 'Instagram Strategy', href: '/marketing-bible?tab=social', desc: 'Main account + niche accounts', status: 'complete' },
        { name: 'TikTok Strategy', href: '/marketing-bible?tab=social', desc: 'Viral content approach', status: 'complete' },
        { name: 'YouTube Strategy', href: '/marketing-bible?tab=social', desc: 'Long-form content', status: 'complete' },
        { name: 'Multi-Account Strategy', href: '/marketing-bible?tab=mediahub', desc: 'Niche + language accounts', status: 'complete' },
      ]
    },
    {
      title: 'Paid Advertising',
      icon: Monitor,
      color: 'blue',
      items: [
        { name: 'Meta Ads (FB/IG)', href: '/marketing-bible?tab=online', desc: 'Facebook & Instagram ads', status: 'complete' },
        { name: 'Google Ads', href: '/marketing-bible?tab=online', desc: 'Search & shopping ads', status: 'complete' },
        { name: 'TikTok Ads', href: '/marketing-bible?tab=online', desc: 'Short-form video ads', status: 'complete' },
        { name: 'Offline Ads', href: '/marketing-bible?tab=offline', desc: 'Auto, bus, gate ads', status: 'complete' },
      ]
    },
    {
      title: 'Direct Channels',
      icon: MessageCircle,
      color: 'green',
      items: [
        { name: 'WhatsApp Marketing', href: '/marketing-bible?tab=brandmarketing', desc: 'Broadcast & groups', status: 'complete' },
        { name: 'Email Marketing', href: '/marketing-bible?tab=email', desc: 'Automation & campaigns', status: 'complete' },
        { name: 'Push Notifications', href: '/marketing-bible?tab=email', desc: 'App engagement', status: 'complete' },
      ]
    },
    {
      title: 'Influencer Marketing',
      icon: Star,
      color: 'yellow',
      items: [
        { name: 'Influencer Strategy', href: '/marketing-bible?tab=influencer', desc: 'Nano, micro, macro tiers', status: 'complete' },
        { name: 'Barter Deals', href: '/marketing-bible?tab=influencer', desc: 'Exchange for cashback', status: 'complete' },
        { name: 'Paid Collaborations', href: '/marketing-bible?tab=influencer', desc: 'Sponsored content', status: 'complete' },
        { name: 'Ambassador Program', href: '/marketing-bible?tab=influencer', desc: 'Long-term partners', status: 'complete' },
      ]
    },
  ];

  // Campaign sections
  const campaignSections = [
    {
      title: 'User Campaigns',
      icon: Users,
      color: 'green',
      items: [
        { name: 'Win Big Campaign', href: '/marketing-bible?tab=adscampaigns', desc: 'Car, iPhone, cash prizes', status: 'complete' },
        { name: 'Calculate Savings', href: '/marketing-bible?tab=adscampaigns', desc: 'Upload bills, see savings', status: 'complete' },
        { name: 'Smart People Use Nuqta', href: '/marketing-bible?tab=adscampaigns', desc: 'Positioning campaign', status: 'complete' },
        { name: 'Cash Hunting', href: '/marketing-bible?tab=adscampaigns', desc: 'Gamified treasure hunt', status: 'complete' },
      ]
    },
    {
      title: 'Merchant Campaigns',
      icon: Store,
      color: 'blue',
      items: [
        { name: 'Increase Revenue', href: '/marketing-bible?tab=adscampaigns', desc: 'No upfront cost pitch', status: 'complete' },
        { name: 'Increase AOV', href: '/marketing-bible?tab=adscampaigns', desc: 'Higher order value', status: 'complete' },
        { name: 'Reach Audience', href: '/marketing-bible?tab=adscampaigns', desc: 'New customer acquisition', status: 'complete' },
      ]
    },
    {
      title: 'Brand Marketing',
      icon: Building2,
      color: 'purple',
      items: [
        { name: 'Price Engineering', href: '/marketing-bible?tab=brandmarketing', desc: '20% strategy', status: 'complete' },
        { name: 'Nuqta Board & QR', href: '/marketing-bible?tab=brandmarketing', desc: 'In-store materials', status: 'complete' },
        { name: 'Merchant Badges', href: '/marketing-bible?tab=brandmarketing', desc: 'Verified to Signature levels', status: 'complete' },
        { name: 'Google My Business', href: '/marketing-bible?tab=brandmarketing', desc: 'Store optimization', status: 'complete' },
      ]
    },
  ];

  // Community sections
  const communitySections = [
    {
      title: 'Community Building',
      icon: Heart,
      color: 'red',
      items: [
        { name: 'WhatsApp Groups', href: '/marketing-bible?tab=mediahub', desc: 'Dubai Deals, College Offers, Girls Gang', status: 'complete' },
        { name: 'Phased Approach', href: '/marketing-bible?tab=social', desc: 'Start 3, then expand', status: 'complete' },
        { name: 'Community Management', href: '/marketing-bible?tab=social', desc: 'Rules and engagement', status: 'complete' },
      ]
    },
    {
      title: 'Events & Activations',
      icon: Ticket,
      color: 'orange',
      items: [
        { name: 'Flea Markets', href: '/marketing-bible?tab=events', desc: 'Nuqta-only payment events', status: 'complete' },
        { name: 'Signature Events', href: '/marketing-bible?tab=events', desc: 'Music, sports, comedy nights', status: 'complete' },
        { name: 'Monthly Events Calendar', href: '/marketing-bible?tab=events', desc: '12 months planned', status: 'complete' },
        { name: 'Competitions', href: '/marketing-bible?tab=events', desc: 'Singing, dance, quiz, sports', status: 'complete' },
      ]
    },
    {
      title: 'Media Hub',
      icon: Play,
      color: 'purple',
      items: [
        { name: 'Short Films', href: '/marketing-bible?tab=mediahub', desc: 'Entertainment content', status: 'complete' },
        { name: 'Sports Content', href: '/marketing-bible?tab=mediahub', desc: 'Football, cricket, gaming', status: 'complete' },
        { name: 'Podcasts', href: '/marketing-bible?tab=mediahub', desc: 'Marketing case studies', status: 'complete' },
        { name: 'Multi-Language', href: '/marketing-bible?tab=mediahub', desc: '20 language accounts', status: 'complete' },
      ]
    },
  ];

  // Execution sections
  const executionSections = [
    {
      title: 'Step-by-Step Guide',
      icon: FileText,
      color: 'purple',
      items: [
        { name: 'Full Execution Guide', href: '/marketing-execution', desc: 'Complete step-by-step plan', status: 'active' },
        { name: 'Optimized Team Structure', href: '/marketing-execution', desc: '3-8 person teams', status: 'active' },
        { name: 'Phase 1-3 Breakdown', href: '/marketing-execution', desc: 'Week-by-week tasks', status: 'active' },
        { name: 'Daily Routines', href: '/marketing-execution', desc: 'What to do every day', status: 'active' },
      ]
    },
    {
      title: 'Launch Execution',
      icon: Rocket,
      color: 'red',
      items: [
        { name: '14-Day Launch Sprint', href: '/launch-sprint', desc: 'Day-by-day tasks', status: 'active' },
        { name: 'First 100 Users', href: '/user-acquisition', desc: 'Founders circle strategy', status: 'active' },
        { name: 'First 10 Merchants', href: '/merchant-acquisition', desc: 'Restaurant-first approach', status: 'active' },
      ]
    },
    {
      title: '90-Day Execution',
      icon: Calendar,
      color: 'blue',
      items: [
        { name: 'CMO 90-Day Playbook', href: '/cmo-playbook', desc: 'Week-by-week plan', status: 'complete' },
        { name: 'Team Structure', href: '/cmo-playbook', desc: 'Who does what', status: 'complete' },
        { name: 'Tech Stack', href: '/cmo-playbook', desc: 'Tools to use', status: 'complete' },
        { name: 'Crisis Playbook', href: '/cmo-playbook', desc: 'When things go wrong', status: 'complete' },
      ]
    },
    {
      title: 'Merchant Operations',
      icon: Store,
      color: 'green',
      items: [
        { name: 'Merchant Playbook', href: '/merchant-playbook', desc: 'Full operations guide', status: 'complete' },
        { name: 'Category Playbooks', href: '/merchant-playbook', desc: 'F&B, Salon, Gym specific', status: 'complete' },
        { name: 'Onboarding Journey', href: '/merchant-playbook', desc: '5-phase process', status: 'complete' },
        { name: 'Reporting System', href: '/merchant-playbook', desc: 'Monthly report cards', status: 'complete' },
      ]
    },
    {
      title: 'KPIs & Tracking',
      icon: BarChart3,
      color: 'yellow',
      items: [
        { name: 'KPI Dashboard', href: '/marketing-bible?tab=kpis', desc: 'What to measure', status: 'complete' },
        { name: 'A/B Testing', href: '/marketing-bible?tab=kpis', desc: 'Test frameworks', status: 'complete' },
        { name: 'Growth Playbook', href: '/marketing-bible?tab=growth', desc: 'Scale strategies', status: 'complete' },
      ]
    },
  ];

  const renderSectionGrid = (sections: typeof strategySections) => (
    <div className="space-y-6">
      {sections.map((section, idx) => (
        <div key={idx} className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === section.title ? null : section.title)}
            className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                section.color === 'red' ? 'bg-red-500/20' :
                section.color === 'blue' ? 'bg-blue-500/20' :
                section.color === 'green' ? 'bg-green-500/20' :
                section.color === 'yellow' ? 'bg-yellow-500/20' :
                section.color === 'purple' ? 'bg-purple-500/20' :
                section.color === 'pink' ? 'bg-pink-500/20' :
                'bg-orange-500/20'
              }`}>
                <section.icon size={20} className={
                  section.color === 'red' ? 'text-red-400' :
                  section.color === 'blue' ? 'text-blue-400' :
                  section.color === 'green' ? 'text-green-400' :
                  section.color === 'yellow' ? 'text-yellow-400' :
                  section.color === 'purple' ? 'text-purple-400' :
                  section.color === 'pink' ? 'text-pink-400' :
                  'text-orange-400'
                } />
              </div>
              <div className="text-left">
                <div className="text-white font-bold">{section.title}</div>
                <div className="text-gray-400 text-sm">{section.items.length} items</div>
              </div>
            </div>
            {expandedSection === section.title ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
          </button>
          {expandedSection === section.title && (
            <div className="border-t border-white/10 p-4 space-y-2">
              {section.items.map((item, itemIdx) => (
                <Link
                  key={itemIdx}
                  href={item.href}
                  className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div>
                    <div className="text-white font-medium group-hover:text-[#c9a227]">{item.name}</div>
                    <div className="text-gray-400 text-sm">{item.desc}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.status === 'complete' && <CheckCircle2 size={16} className="text-green-400" />}
                    {item.status === 'active' && <Circle size={16} className="text-red-400 fill-red-400 animate-pulse" />}
                    <ChevronRight size={16} className="text-gray-500 group-hover:text-[#c9a227]" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Unified Marketing Navigation */}
      <MarketingNav currentPage="dashboard" />

      {/* Header */}
      <header className="bg-[#0a1628]/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-[#c9a227]">Marketing Command Center</h1>
              <p className="text-gray-400 text-sm">Everything you need to launch Nuqta</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-right">
                <div className="text-sm text-gray-400">Launch Date</div>
                <div className="text-lg font-bold text-white">March 1, 2026</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-400">Days Left</div>
                <div className="text-3xl font-bold text-red-400">{daysToLaunch}</div>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-1 overflow-x-auto pb-2">
            {mainTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-[#c9a227] text-black'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Sprint Banner */}
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-6 border border-red-500/30">
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
                  View Sprint
                  <ChevronRight size={20} />
                </Link>
              </div>

              {/* Progress */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {[
                  { label: 'Merchants', current: sprintMetrics.merchants.current, target: sprintMetrics.merchants.target, icon: Store, color: 'blue' },
                  { label: 'Users', current: sprintMetrics.users.current, target: sprintMetrics.users.target, icon: Users, color: 'green' },
                  { label: 'Transactions', current: sprintMetrics.transactions.current, target: sprintMetrics.transactions.target, icon: DollarSign, color: 'yellow' },
                  { label: 'Content', current: sprintMetrics.content.current, target: sprintMetrics.content.target, icon: Video, color: 'purple' },
                ].map((metric, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">{metric.label}</span>
                      <metric.icon size={16} className={`text-${metric.color}-400`} />
                    </div>
                    <div className="text-2xl font-bold text-white">{metric.current}/{metric.target}</div>
                    <div className="h-2 bg-white/10 rounded-full mt-2">
                      <div className={`h-full bg-${metric.color}-500 rounded-full`} style={{ width: `${(metric.current / metric.target) * 100}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { title: '14-Day Sprint', href: '/launch-sprint', icon: Rocket, color: 'red', desc: 'Day-by-day execution' },
                { title: 'First 10 Merchants', href: '/merchant-acquisition', icon: Store, color: 'blue', desc: 'Restaurant-first sales' },
                { title: 'First 100 Users', href: '/user-acquisition', icon: Users, color: 'green', desc: 'Founders circle' },
                { title: 'Full Marketing Plan', href: '/marketing-bible', icon: FileText, color: 'purple', desc: '21 detailed sections' },
              ].map((action, idx) => (
                <Link
                  key={idx}
                  href={action.href}
                  className={`bg-${action.color}-500/10 rounded-xl p-5 border border-${action.color}-500/30 hover:border-${action.color}-500/50 transition-all group`}
                >
                  <action.icon className={`text-${action.color}-400 mb-3`} size={28} />
                  <div className="text-white font-bold group-hover:text-[#c9a227]">{action.title}</div>
                  <div className="text-gray-400 text-sm">{action.desc}</div>
                </Link>
              ))}
            </div>

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-6">
                {/* Today's Tasks */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Flag className="text-red-400" size={24} />
                    Today&apos;s Priority Tasks
                  </h3>
                  <div className="space-y-3">
                    {todayTasks.map((task, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-4 p-4 rounded-lg ${
                          task.priority === 'critical' ? 'bg-red-500/10 border border-red-500/30' :
                          task.priority === 'high' ? 'bg-orange-500/10 border border-orange-500/30' :
                          'bg-white/5'
                        }`}
                      >
                        <div className="w-6 h-6 rounded-full border-2 border-gray-500 flex-shrink-0"></div>
                        <div className="flex-1">
                          <div className="text-white font-medium">{task.task}</div>
                          <div className="text-gray-400 text-sm">Owner: {task.owner}</div>
                        </div>
                        {task.priority === 'critical' && <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">CRITICAL</span>}
                        {task.priority === 'high' && <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">HIGH</span>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Critical Issues */}
                <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-500/30">
                  <h3 className="text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
                    <AlertTriangle size={24} />
                    Critical Issues to Solve
                  </h3>
                  <div className="space-y-3">
                    {criticalIssues.map((item, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className={`font-bold ${item.status === 'red' ? 'text-red-400' : 'text-yellow-400'}`}>{item.issue}</div>
                          <span className="text-xs text-gray-400">{item.deadline}</span>
                        </div>
                        <div className="text-gray-300 text-sm mb-1">{item.solution}</div>
                        <div className="text-xs text-[#c9a227]">Owner: {item.owner}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Channel Status */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <BarChart3 className="text-purple-400" size={20} />
                    Channel Status
                  </h3>
                  <div className="space-y-3">
                    {channels.map((channel, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <channel.icon size={16} className="text-[#c9a227]" />
                            <span className="text-white text-sm font-medium">{channel.name}</span>
                          </div>
                          <span className="text-xs bg-gray-500/20 text-gray-400 px-2 py-0.5 rounded">Not Started</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">0</span>
                          <span className="text-gray-500">{channel.target.toLocaleString()}</span>
                        </div>
                        <div className="h-1 bg-white/10 rounded-full mt-1">
                          <div className="h-full bg-[#c9a227] rounded-full" style={{ width: '0%' }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 90-Day Targets */}
                <div className="bg-gradient-to-b from-[#c9a227]/20 to-transparent rounded-xl p-6 border border-[#c9a227]/30">
                  <h3 className="text-lg font-bold text-[#c9a227] mb-4">90-Day Targets</h3>
                  <div className="space-y-3">
                    {[
                      { label: 'Users', value: '25,000' },
                      { label: 'Merchants', value: '100+' },
                      { label: 'GMV', value: 'AED 50,000' },
                      { label: 'Budget', value: 'AED 75,000' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-gray-400">{item.label}</span>
                        <span className="text-white font-bold">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Marketing Bible Tab - All 21 Sections */}
        {activeTab === 'bible' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-purple-500/20 rounded-xl p-6 border border-[#c9a227]/30 mb-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">Marketing Bible - Complete Plan</h2>
                  <p className="text-gray-400">All 21 sections of your comprehensive marketing strategy</p>
                </div>
                <Link
                  href="/marketing-bible"
                  className="bg-[#c9a227] hover:bg-[#b8922a] text-black px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-colors"
                >
                  <ExternalLink size={20} />
                  Open Full Bible
                </Link>
              </div>
            </div>

            {/* Bible Sections Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {marketingBibleSections.map((section) => (
                <Link
                  key={section.id}
                  href={`/marketing-bible?tab=${section.id}`}
                  className={`bg-white/5 rounded-xl p-5 border border-white/10 hover:border-[#c9a227]/50 transition-all group`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      section.color === 'red' ? 'bg-red-500/20' :
                      section.color === 'blue' ? 'bg-blue-500/20' :
                      section.color === 'green' ? 'bg-green-500/20' :
                      section.color === 'yellow' ? 'bg-yellow-500/20' :
                      section.color === 'purple' ? 'bg-purple-500/20' :
                      section.color === 'pink' ? 'bg-pink-500/20' :
                      section.color === 'orange' ? 'bg-orange-500/20' :
                      'bg-gray-500/20'
                    }`}>
                      <section.icon size={24} className={
                        section.color === 'red' ? 'text-red-400' :
                        section.color === 'blue' ? 'text-blue-400' :
                        section.color === 'green' ? 'text-green-400' :
                        section.color === 'yellow' ? 'text-yellow-400' :
                        section.color === 'purple' ? 'text-purple-400' :
                        section.color === 'pink' ? 'text-pink-400' :
                        section.color === 'orange' ? 'text-orange-400' :
                        'text-gray-400'
                      } />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-bold group-hover:text-[#c9a227] transition-colors">{section.name}</div>
                      <div className="text-gray-400 text-sm mt-1">{section.desc}</div>
                    </div>
                    <ChevronRight size={20} className="text-gray-500 group-hover:text-[#c9a227] flex-shrink-0" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Quick Links to Related Pages */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 mt-8">
              <h3 className="text-lg font-bold text-white mb-4">Related Playbooks & Guides</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { name: 'CMO 90-Day Playbook', href: '/cmo-playbook', icon: Calendar, desc: 'Week-by-week execution' },
                  { name: 'Merchant Playbook', href: '/merchant-playbook', icon: Store, desc: 'Merchant operations guide' },
                  { name: 'CMO Agent Report', href: '/cmo-report', icon: FileText, desc: 'AI marketing analysis' },
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                  >
                    <item.icon size={20} className="text-[#c9a227]" />
                    <div>
                      <div className="text-white font-medium group-hover:text-[#c9a227]">{item.name}</div>
                      <div className="text-gray-400 text-xs">{item.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Strategy Tab */}
        {activeTab === 'strategy' && (
          <div className="space-y-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-6">
              <h2 className="text-xl font-bold text-white mb-2">Strategy & Planning</h2>
              <p className="text-gray-400">Brand identity, target audience, and budget allocation</p>
            </div>
            {renderSectionGrid(strategySections)}
          </div>
        )}

        {/* Content Tab */}
        {activeTab === 'content' && (
          <div className="space-y-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-6">
              <h2 className="text-xl font-bold text-white mb-2">Content Strategy</h2>
              <p className="text-gray-400">Content series, calendar, and creative assets</p>
            </div>
            {renderSectionGrid(contentSections)}
          </div>
        )}

        {/* Channels Tab */}
        {activeTab === 'channels' && (
          <div className="space-y-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-6">
              <h2 className="text-xl font-bold text-white mb-2">Marketing Channels</h2>
              <p className="text-gray-400">Social media, paid ads, and direct marketing</p>
            </div>
            {renderSectionGrid(channelSections)}
          </div>
        )}

        {/* Campaigns Tab */}
        {activeTab === 'campaigns' && (
          <div className="space-y-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-6">
              <h2 className="text-xl font-bold text-white mb-2">Campaigns & Promotions</h2>
              <p className="text-gray-400">User campaigns, merchant campaigns, and brand marketing</p>
            </div>
            {renderSectionGrid(campaignSections)}
          </div>
        )}

        {/* Community Tab */}
        {activeTab === 'community' && (
          <div className="space-y-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-6">
              <h2 className="text-xl font-bold text-white mb-2">Community & Events</h2>
              <p className="text-gray-400">Community building, events, and media hub</p>
            </div>
            {renderSectionGrid(communitySections)}
          </div>
        )}

        {/* Execution Tab */}
        {activeTab === 'execution' && (
          <div className="space-y-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-6">
              <h2 className="text-xl font-bold text-white mb-2">Execution & Operations</h2>
              <p className="text-gray-400">Launch sprint, playbooks, and KPIs</p>
            </div>
            {renderSectionGrid(executionSections)}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-8 bg-gradient-to-r from-[#c9a227]/20 to-purple-500/20 rounded-2xl p-6 border border-[#c9a227]/30">
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
                Start Sprint
              </Link>
              <Link
                href="/marketing-bible"
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-colors"
              >
                <FileText size={20} />
                Full Plan
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
