'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Megaphone, Target, Users, Calendar, Mail, MessageSquare, Play, FileText,
  Rocket, TrendingUp, Clock, CheckCircle, ArrowRight, Star, Zap, Eye,
  Smartphone, Globe, Crown, Gift, Store, Mic, Camera, PenTool, BarChart3,
  AlertTriangle, Heart, Map, Layers, BookOpen, ChevronRight, ExternalLink
} from 'lucide-react';

interface ResourceCard {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  priority: 'essential' | 'important' | 'reference';
  timeToRead: string;
  tags: string[];
}

interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  resources: { label: string; href: string }[];
  duration: string;
}

export default function MarketingHubPage() {
  const [activePhase, setActivePhase] = useState<'pre-launch' | 'launch' | 'growth' | 'scale'>('pre-launch');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const phases = [
    { id: 'pre-launch', label: 'Pre-Launch', icon: <Rocket className="w-4 h-4" />, color: 'from-orange-500 to-red-500' },
    { id: 'launch', label: 'Launch Week', icon: <Zap className="w-4 h-4" />, color: 'from-green-500 to-emerald-500' },
    { id: 'growth', label: 'Growth Phase', icon: <TrendingUp className="w-4 h-4" />, color: 'from-blue-500 to-cyan-500' },
    { id: 'scale', label: 'Scale & Optimize', icon: <BarChart3 className="w-4 h-4" />, color: 'from-purple-500 to-pink-500' }
  ];

  const quickStartGuide: WorkflowStep[] = [
    {
      step: 1,
      title: 'Understand the Strategy',
      description: 'Read the core strategy documents to understand Nuqta\'s positioning and GTM approach',
      resources: [
        { label: 'CMO Playbook (Start Here)', href: '/cmo-playbook' },
        { label: 'GTM Strategy', href: '/gtm' },
        { label: 'Brand Voice Guide', href: '/brand-voice' }
      ],
      duration: '2-3 hours'
    },
    {
      step: 2,
      title: 'Know Your Audience',
      description: 'Deep dive into customer personas, journeys, and how they interact with Nuqta',
      resources: [
        { label: 'Customer Journey Maps', href: '/customer-journeys' },
        { label: 'User Acquisition Strategy', href: '/user-acquisition' }
      ],
      duration: '1-2 hours'
    },
    {
      step: 3,
      title: 'Plan Your Content',
      description: 'Set up your content calendar and understand the content strategy',
      resources: [
        { label: 'Content Strategy', href: '/content-strategy' },
        { label: 'Content Calendar', href: '/content-calendar' },
        { label: 'Seasonal Campaigns', href: '/seasonal-campaigns' }
      ],
      duration: '2-3 hours'
    },
    {
      step: 4,
      title: 'Prepare Assets & Templates',
      description: 'Get all your communication templates ready for execution',
      resources: [
        { label: 'Email Templates', href: '/email-templates' },
        { label: 'SMS Templates', href: '/sms-templates' },
        { label: 'App Store Copy', href: '/app-store-copy' }
      ],
      duration: '1-2 hours'
    },
    {
      step: 5,
      title: 'Execute Launch Sprint',
      description: 'Follow the day-by-day launch execution plan',
      resources: [
        { label: '14-Day Launch Sprint', href: '/launch-sprint' },
        { label: 'Marketing Execution Guide', href: '/marketing-execution' },
        { label: 'PR Launch Plan', href: '/pr-launch' }
      ],
      duration: 'Ongoing'
    }
  ];

  const resourceCategories = [
    { id: 'all', label: 'All Resources', count: 25 },
    { id: 'strategy', label: 'Strategy', count: 5 },
    { id: 'content', label: 'Content', count: 6 },
    { id: 'campaigns', label: 'Campaigns', count: 5 },
    { id: 'templates', label: 'Templates', count: 4 },
    { id: 'channels', label: 'Channels', count: 5 }
  ];

  const allResources: ResourceCard[] = [
    // Strategy
    {
      title: 'CMO Playbook',
      description: 'Complete 90-day marketing plan with priorities, budgets, and KPIs. START HERE.',
      href: '/cmo-playbook',
      icon: <Crown className="w-5 h-5" />,
      priority: 'essential',
      timeToRead: '30 min',
      tags: ['strategy']
    },
    {
      title: 'GTM Strategy',
      description: 'Go-to-market strategy including positioning, channels, and launch approach.',
      href: '/gtm',
      icon: <Target className="w-5 h-5" />,
      priority: 'essential',
      timeToRead: '25 min',
      tags: ['strategy']
    },
    {
      title: 'Brand Voice Guide',
      description: 'How Nuqta speaks: tone, messaging principles, and communication examples.',
      href: '/brand-voice',
      icon: <MessageSquare className="w-5 h-5" />,
      priority: 'essential',
      timeToRead: '20 min',
      tags: ['strategy', 'content']
    },
    {
      title: 'Customer Journey Maps',
      description: '6 detailed persona journeys with touchpoints, pain points, and opportunities.',
      href: '/customer-journeys',
      icon: <Map className="w-5 h-5" />,
      priority: 'essential',
      timeToRead: '25 min',
      tags: ['strategy']
    },
    {
      title: 'Competitor Analysis',
      description: 'Deep dive into UAE competitors, their strategies, and our differentiation.',
      href: '/competitor-analysis',
      icon: <Eye className="w-5 h-5" />,
      priority: 'important',
      timeToRead: '20 min',
      tags: ['strategy']
    },

    // Content
    {
      title: 'Content Strategy',
      description: '18-month content plan with themes, formats, and channel distribution.',
      href: '/content-strategy',
      icon: <PenTool className="w-5 h-5" />,
      priority: 'essential',
      timeToRead: '25 min',
      tags: ['content']
    },
    {
      title: 'Content Calendar',
      description: '30-day social media calendar with ready-to-post content ideas.',
      href: '/content-calendar',
      icon: <Calendar className="w-5 h-5" />,
      priority: 'essential',
      timeToRead: '15 min',
      tags: ['content']
    },
    {
      title: 'Niche Content Accounts',
      description: '8 niche Instagram accounts strategy for targeted audience building.',
      href: '/niche-content',
      icon: <Layers className="w-5 h-5" />,
      priority: 'important',
      timeToRead: '20 min',
      tags: ['content', 'channels']
    },
    {
      title: 'Media Properties',
      description: 'Podcasts, shows, and owned media IP for brand building.',
      href: '/media-properties',
      icon: <Mic className="w-5 h-5" />,
      priority: 'reference',
      timeToRead: '20 min',
      tags: ['content', 'channels']
    },
    {
      title: 'Explainer Video Scripts',
      description: 'Video scripts for app explainers, merchant pitches, and social content.',
      href: '/explainer-video',
      icon: <Play className="w-5 h-5" />,
      priority: 'important',
      timeToRead: '15 min',
      tags: ['content']
    },
    {
      title: 'App Store Copy',
      description: 'iOS and Android store listings, screenshots, and ASO strategy.',
      href: '/app-store-copy',
      icon: <Smartphone className="w-5 h-5" />,
      priority: 'essential',
      timeToRead: '10 min',
      tags: ['content']
    },

    // Campaigns
    {
      title: 'Seasonal Campaigns',
      description: '12 UAE seasonal campaigns (Ramadan, DSF, National Day, etc.) with mechanics.',
      href: '/seasonal-campaigns',
      icon: <Calendar className="w-5 h-5" />,
      priority: 'essential',
      timeToRead: '25 min',
      tags: ['campaigns']
    },
    {
      title: 'Big Win Campaigns',
      description: 'High-impact prize campaigns: Win a Car, iPhone, Gold giveaways.',
      href: '/big-win-campaigns',
      icon: <Gift className="w-5 h-5" />,
      priority: 'important',
      timeToRead: '20 min',
      tags: ['campaigns']
    },
    {
      title: 'UGC Campaigns',
      description: 'User-generated content campaigns and video challenge formats.',
      href: '/ugc-campaigns',
      icon: <Camera className="w-5 h-5" />,
      priority: 'important',
      timeToRead: '15 min',
      tags: ['campaigns']
    },
    {
      title: 'Merchant Campaigns',
      description: '18 industry-specific merchant acquisition campaigns.',
      href: '/merchant-campaigns',
      icon: <Store className="w-5 h-5" />,
      priority: 'important',
      timeToRead: '20 min',
      tags: ['campaigns']
    },
    {
      title: 'Gamification System',
      description: 'Tiers, badges, challenges, and streaks to drive engagement.',
      href: '/gamification',
      icon: <Star className="w-5 h-5" />,
      priority: 'important',
      timeToRead: '20 min',
      tags: ['campaigns']
    },

    // Templates
    {
      title: 'Email Templates',
      description: '20+ ready-to-use email templates for every user lifecycle stage.',
      href: '/email-templates',
      icon: <Mail className="w-5 h-5" />,
      priority: 'essential',
      timeToRead: '15 min',
      tags: ['templates']
    },
    {
      title: 'SMS Templates',
      description: '25+ SMS templates for notifications, promotions, and re-engagement.',
      href: '/sms-templates',
      icon: <MessageSquare className="w-5 h-5" />,
      priority: 'essential',
      timeToRead: '10 min',
      tags: ['templates']
    },
    {
      title: 'Support Templates',
      description: 'Customer service response templates for common scenarios.',
      href: '/support-templates',
      icon: <Heart className="w-5 h-5" />,
      priority: 'important',
      timeToRead: '15 min',
      tags: ['templates']
    },
    {
      title: 'Crisis Communication',
      description: 'Crisis response playbook with templates for emergencies.',
      href: '/crisis-communication',
      icon: <AlertTriangle className="w-5 h-5" />,
      priority: 'reference',
      timeToRead: '25 min',
      tags: ['templates']
    },

    // Channels
    {
      title: 'Influencer List',
      description: 'Curated list of UAE influencers with contact info and rates.',
      href: '/influencer-list',
      icon: <Users className="w-5 h-5" />,
      priority: 'important',
      timeToRead: '15 min',
      tags: ['channels']
    },
    {
      title: 'Media Hub',
      description: 'Influencer strategy, partnership tiers, and collaboration playbook.',
      href: '/media-hub',
      icon: <Globe className="w-5 h-5" />,
      priority: 'important',
      timeToRead: '20 min',
      tags: ['channels']
    },
    {
      title: 'Press Kit',
      description: 'Media assets, press releases, and journalist talking points.',
      href: '/press-kit',
      icon: <FileText className="w-5 h-5" />,
      priority: 'important',
      timeToRead: '10 min',
      tags: ['channels']
    },
    {
      title: 'PR Launch Plan',
      description: 'Day-by-day PR strategy for launch with media outreach timeline.',
      href: '/pr-launch',
      icon: <Megaphone className="w-5 h-5" />,
      priority: 'essential',
      timeToRead: '15 min',
      tags: ['channels']
    },
    {
      title: 'Agency Landing Pages',
      description: 'Industry-specific landing pages for targeted campaigns.',
      href: '/agency-pages',
      icon: <Layers className="w-5 h-5" />,
      priority: 'reference',
      timeToRead: '15 min',
      tags: ['channels']
    }
  ];

  const phaseResources = {
    'pre-launch': [
      { title: 'CMO Playbook', href: '/cmo-playbook', description: 'Your 90-day marketing bible' },
      { title: 'Brand Voice Guide', href: '/brand-voice', description: 'Establish consistent messaging' },
      { title: 'Content Strategy', href: '/content-strategy', description: 'Plan your content approach' },
      { title: 'App Store Copy', href: '/app-store-copy', description: 'Optimize store listings' },
      { title: 'Email Templates', href: '/email-templates', description: 'Prepare all templates' },
      { title: 'Influencer List', href: '/influencer-list', description: 'Build influencer relationships' }
    ],
    'launch': [
      { title: '14-Day Launch Sprint', href: '/launch-sprint', description: 'Day-by-day execution plan' },
      { title: 'Marketing Execution', href: '/marketing-execution', description: 'Step-by-step guide' },
      { title: 'PR Launch Plan', href: '/pr-launch', description: 'Media outreach strategy' },
      { title: 'First 100 Users', href: '/user-acquisition', description: 'Initial user acquisition' },
      { title: 'Press Kit', href: '/press-kit', description: 'Media assets ready' },
      { title: 'Content Calendar', href: '/content-calendar', description: 'Execute daily content' }
    ],
    'growth': [
      { title: 'Customer Journeys', href: '/customer-journeys', description: 'Optimize user experience' },
      { title: 'Seasonal Campaigns', href: '/seasonal-campaigns', description: 'Plan seasonal pushes' },
      { title: 'Big Win Campaigns', href: '/big-win-campaigns', description: 'Drive viral growth' },
      { title: 'UGC Campaigns', href: '/ugc-campaigns', description: 'User-generated content' },
      { title: 'Gamification', href: '/gamification', description: 'Increase engagement' },
      { title: 'Niche Content', href: '/niche-content', description: 'Targeted audience building' }
    ],
    'scale': [
      { title: 'Analytics Dashboard', href: '/analytics-dashboard', description: 'Track all KPIs' },
      { title: 'Media Properties', href: '/media-properties', description: 'Build owned media' },
      { title: 'Competitor Analysis', href: '/competitor-analysis', description: 'Stay ahead of competition' },
      { title: 'Partnership Playbook', href: '/partnerships', description: 'Strategic partnerships' },
      { title: 'Merchant Campaigns', href: '/merchant-campaigns', description: 'Expand merchant base' },
      { title: 'Crisis Communication', href: '/crisis-communication', description: 'Be prepared for anything' }
    ]
  };

  const filteredResources = activeCategory === 'all'
    ? allResources
    : allResources.filter(r => r.tags.includes(activeCategory));

  const priorityColors = {
    essential: 'bg-red-500/20 text-red-400 border-red-500/30',
    important: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    reference: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Megaphone className="w-10 h-10" />
            <h1 className="text-4xl font-bold">Marketing Command Center</h1>
          </div>
          <p className="text-xl text-purple-100 max-w-3xl mb-6">
            Your single source of truth for all marketing resources. Follow the workflow, access templates, and execute campaigns with confidence.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-purple-200 text-sm">Total Resources:</span>
              <span className="text-white font-bold ml-2">25+ Documents</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-purple-200 text-sm">Templates:</span>
              <span className="text-white font-bold ml-2">50+ Ready-to-Use</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-purple-200 text-sm">Campaigns:</span>
              <span className="text-white font-bold ml-2">30+ Playbooks</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Quick Start Guide */}
        <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-2xl border border-amber-500/30 p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-amber-500 p-2 rounded-lg">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">New Here? Start With This Workflow</h2>
              <p className="text-slate-400">Follow these 5 steps to get up to speed quickly</p>
            </div>
          </div>

          <div className="space-y-4">
            {quickStartGuide.map((step, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                      <span className="text-slate-400 text-sm flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-slate-400 mb-4">{step.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.resources.map((resource, rIdx) => (
                        <Link
                          key={rIdx}
                          href={resource.href}
                          className="inline-flex items-center gap-2 bg-slate-700/50 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                        >
                          {resource.label}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phase-Based Navigation */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Resources by Phase</h2>
          <p className="text-slate-400 mb-6">Select your current phase to see the most relevant resources</p>

          {/* Phase Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {phases.map(phase => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id as typeof activePhase)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                  activePhase === phase.id
                    ? `bg-gradient-to-r ${phase.color} text-white shadow-lg`
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {phase.icon}
                {phase.label}
              </button>
            ))}
          </div>

          {/* Phase Resources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {phaseResources[activePhase].map((resource, idx) => (
              <Link
                key={idx}
                href={resource.href}
                className="bg-slate-800/50 hover:bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-slate-600 transition-all group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-white font-semibold mb-1 group-hover:text-purple-400 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-slate-400 text-sm">{resource.description}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-purple-400 transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All Resources by Category */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">All Marketing Resources</h2>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-6">
            {resourceCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>

          {/* Priority Legend */}
          <div className="flex flex-wrap gap-4 mb-6 text-sm">
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 rounded border ${priorityColors.essential}`}>Essential</span>
              <span className="text-slate-500">Must read first</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 rounded border ${priorityColors.important}`}>Important</span>
              <span className="text-slate-500">Read when relevant</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 rounded border ${priorityColors.reference}`}>Reference</span>
              <span className="text-slate-500">Use as needed</span>
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredResources.map((resource, idx) => (
              <Link
                key={idx}
                href={resource.href}
                className="bg-slate-800/50 hover:bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-purple-500/50 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-slate-700 p-3 rounded-lg text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    {resource.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-white font-semibold group-hover:text-purple-400 transition-colors">
                        {resource.title}
                      </h3>
                      <span className={`px-2 py-0.5 rounded text-xs border flex-shrink-0 ${priorityColors[resource.priority]}`}>
                        {resource.priority}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm mb-3 line-clamp-2">{resource.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {resource.timeToRead}
                      </span>
                      <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Access Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <Link
            href="/marketing-dashboard"
            className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 hover:from-blue-600/30 hover:to-cyan-600/30 rounded-xl p-6 border border-blue-500/30 transition-all"
          >
            <BarChart3 className="w-8 h-8 text-blue-400 mb-3" />
            <h3 className="text-white font-semibold mb-1">Marketing Dashboard</h3>
            <p className="text-slate-400 text-sm">Real-time campaign metrics</p>
          </Link>

          <Link
            href="/analytics-dashboard"
            className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 rounded-xl p-6 border border-purple-500/30 transition-all"
          >
            <TrendingUp className="w-8 h-8 text-purple-400 mb-3" />
            <h3 className="text-white font-semibold mb-1">Analytics Specs</h3>
            <p className="text-slate-400 text-sm">KPIs and tracking guide</p>
          </Link>

          <Link
            href="/launch-sprint"
            className="bg-gradient-to-br from-orange-600/20 to-red-600/20 hover:from-orange-600/30 hover:to-red-600/30 rounded-xl p-6 border border-orange-500/30 transition-all"
          >
            <Rocket className="w-8 h-8 text-orange-400 mb-3" />
            <h3 className="text-white font-semibold mb-1">14-Day Sprint</h3>
            <p className="text-slate-400 text-sm">Launch execution plan</p>
          </Link>

          <Link
            href="/cmo-playbook"
            className="bg-gradient-to-br from-amber-600/20 to-yellow-600/20 hover:from-amber-600/30 hover:to-yellow-600/30 rounded-xl p-6 border border-amber-500/30 transition-all"
          >
            <Crown className="w-8 h-8 text-amber-400 mb-3" />
            <h3 className="text-white font-semibold mb-1">CMO Playbook</h3>
            <p className="text-slate-400 text-sm">90-day marketing bible</p>
          </Link>
        </div>

        {/* Help Section */}
        <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-8">
          <h2 className="text-xl font-bold text-white mb-4">Need Help?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-white font-medium mb-2">First Day?</h3>
              <p className="text-slate-400 text-sm mb-3">
                Start with the Quick Start Workflow above. Read CMO Playbook first, then Brand Voice Guide.
              </p>
              <Link href="/cmo-playbook" className="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-1">
                Go to CMO Playbook <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2">Planning a Campaign?</h3>
              <p className="text-slate-400 text-sm mb-3">
                Check Seasonal Campaigns for timing, then use Email/SMS Templates for execution.
              </p>
              <Link href="/seasonal-campaigns" className="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-1">
                View Campaign Calendar <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2">Creating Content?</h3>
              <p className="text-slate-400 text-sm mb-3">
                Use Content Calendar for daily posts, Brand Voice for tone, and Templates for messaging.
              </p>
              <Link href="/content-calendar" className="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-1">
                Open Content Calendar <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
