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
  Star,
  MapPin,
  Building2,
  Globe,
  Heart,
  Layers,
  Settings,
  FileText,
  Circle,
  Palette,
  Hash,
  Monitor,
  Film,
  Ticket,
  Bot,
  Briefcase,
  Phone,
  PenTool,
  Image,
  CheckSquare,
  UserPlus,
  Headphones,
  Camera,
  Edit3,
  Share2,
  Smartphone,
  Coffee,
  Car,
  Mic
} from 'lucide-react';

export default function MarketingExecutionPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'team' | 'phase1' | 'phase2' | 'phase3' | 'daily' | 'tools'>('overview');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Target },
    { id: 'team', label: 'Team Structure', icon: Users },
    { id: 'phase1', label: 'Phase 1 (Week 1-2)', icon: Rocket },
    { id: 'phase2', label: 'Phase 2 (Week 3-4)', icon: TrendingUp },
    { id: 'phase3', label: 'Phase 3 (Month 2-3)', icon: Trophy },
    { id: 'daily', label: 'Daily Routines', icon: Calendar },
    { id: 'tools', label: 'Tools & Budget', icon: Settings },
  ];

  // Optimized Team Structure
  const teamStructure = {
    minimum: {
      title: 'Minimum Viable Team (3 People)',
      cost: 'AED 25,000-35,000/month',
      members: [
        {
          role: 'Marketing Lead / CMO',
          salary: 'AED 12,000-15,000',
          responsibilities: [
            'Overall marketing strategy',
            'Content calendar management',
            'Influencer partnerships',
            'Ad campaign management',
            'Analytics & reporting',
            'Team coordination'
          ],
          skills: ['Digital marketing', 'Social media', 'Analytics', 'Leadership'],
          hoursPerWeek: 50
        },
        {
          role: 'Content Creator',
          salary: 'AED 8,000-10,000',
          responsibilities: [
            'Video content creation (Reels, TikTok)',
            'Graphic design for posts',
            'Photography for merchants',
            'Story creation',
            'Content editing'
          ],
          skills: ['Video editing', 'Canva/Photoshop', 'Photography', 'Copywriting'],
          hoursPerWeek: 45
        },
        {
          role: 'Community Manager',
          salary: 'AED 6,000-8,000',
          responsibilities: [
            'Social media posting',
            'Comment & DM responses',
            'WhatsApp group management',
            'User engagement',
            'Basic customer support'
          ],
          skills: ['Communication', 'Social media', 'Customer service', 'Arabic/Hindi'],
          hoursPerWeek: 45
        }
      ]
    },
    optimal: {
      title: 'Optimal Team (5 People)',
      cost: 'AED 45,000-60,000/month',
      members: [
        {
          role: 'Marketing Lead / CMO',
          salary: 'AED 15,000-18,000',
          responsibilities: [
            'Strategy & planning',
            'Team management',
            'Influencer relationships',
            'Partnership deals',
            'Budget management'
          ],
          skills: ['Marketing strategy', 'Leadership', 'Negotiation'],
          hoursPerWeek: 50
        },
        {
          role: 'Performance Marketer',
          salary: 'AED 10,000-12,000',
          responsibilities: [
            'Meta Ads management',
            'Google Ads',
            'TikTok Ads',
            'A/B testing',
            'ROI optimization'
          ],
          skills: ['Paid advertising', 'Analytics', 'Data analysis'],
          hoursPerWeek: 45
        },
        {
          role: 'Content Creator (Video)',
          salary: 'AED 8,000-10,000',
          responsibilities: [
            'Video shooting',
            'Reels & TikTok creation',
            'YouTube content',
            'Merchant videos'
          ],
          skills: ['Video production', 'Editing', 'Storytelling'],
          hoursPerWeek: 45
        },
        {
          role: 'Graphic Designer',
          salary: 'AED 7,000-9,000',
          responsibilities: [
            'Social media graphics',
            'Marketing materials',
            'Merchant collateral',
            'Brand consistency'
          ],
          skills: ['Photoshop', 'Illustrator', 'Canva', 'Figma'],
          hoursPerWeek: 45
        },
        {
          role: 'Community Manager',
          salary: 'AED 6,000-8,000',
          responsibilities: [
            'All social channels',
            'WhatsApp communities',
            'User engagement',
            'Support escalation'
          ],
          skills: ['Communication', 'Multilingual', 'Patience'],
          hoursPerWeek: 45
        }
      ]
    },
    growth: {
      title: 'Growth Team (8+ People)',
      cost: 'AED 80,000-100,000/month',
      members: [
        { role: 'CMO', salary: 'AED 20,000-25,000', focus: 'Strategy & leadership' },
        { role: 'Performance Marketer', salary: 'AED 12,000-15,000', focus: 'Paid acquisition' },
        { role: 'SEO/ASO Specialist', salary: 'AED 8,000-10,000', focus: 'Organic growth' },
        { role: 'Video Producer', salary: 'AED 10,000-12,000', focus: 'Video content' },
        { role: 'Graphic Designer', salary: 'AED 8,000-10,000', focus: 'Visual assets' },
        { role: 'Copywriter', salary: 'AED 7,000-9,000', focus: 'All copy' },
        { role: 'Community Lead', salary: 'AED 8,000-10,000', focus: 'Community management' },
        { role: 'Community Associate', salary: 'AED 5,000-6,000', focus: 'Support & engagement' }
      ]
    }
  };

  // Phase 1: Pre-Launch (Week 1-2)
  const phase1Tasks = [
    {
      week: 'Week 1: Foundation',
      days: [
        {
          day: 'Day 1-2',
          title: 'Account Setup',
          tasks: [
            { task: 'Create Instagram @nuqta.ae', owner: 'CMO', time: '2 hours', priority: 'critical' },
            { task: 'Create TikTok @nuqta.ae', owner: 'CMO', time: '1 hour', priority: 'critical' },
            { task: 'Setup Facebook Page', owner: 'CMO', time: '1 hour', priority: 'high' },
            { task: 'Create YouTube channel', owner: 'Content Creator', time: '2 hours', priority: 'medium' },
            { task: 'Setup Hootsuite/Buffer', owner: 'Community Manager', time: '2 hours', priority: 'high' },
            { task: 'Create WhatsApp Business', owner: 'Community Manager', time: '1 hour', priority: 'high' }
          ]
        },
        {
          day: 'Day 3-4',
          title: 'Brand Assets',
          tasks: [
            { task: 'Create 20 branded post templates', owner: 'Designer', time: '6 hours', priority: 'critical' },
            { task: 'Design profile pictures & covers', owner: 'Designer', time: '3 hours', priority: 'critical' },
            { task: 'Create story highlight covers', owner: 'Designer', time: '2 hours', priority: 'high' },
            { task: 'Design merchant onboarding kit', owner: 'Designer', time: '4 hours', priority: 'high' },
            { task: 'Setup Canva brand kit', owner: 'Designer', time: '2 hours', priority: 'medium' }
          ]
        },
        {
          day: 'Day 5-7',
          title: 'Content Batch',
          tasks: [
            { task: 'Write 30 post captions', owner: 'CMO', time: '4 hours', priority: 'critical' },
            { task: 'Create 15 Reels scripts', owner: 'Content Creator', time: '3 hours', priority: 'critical' },
            { task: 'Shoot 10 Reels', owner: 'Content Creator', time: '8 hours', priority: 'critical' },
            { task: 'Edit all Reels', owner: 'Content Creator', time: '6 hours', priority: 'critical' },
            { task: 'Design 30 static posts', owner: 'Designer', time: '8 hours', priority: 'high' },
            { task: 'Schedule first 2 weeks content', owner: 'Community Manager', time: '3 hours', priority: 'high' }
          ]
        }
      ]
    },
    {
      week: 'Week 2: Merchant Acquisition',
      days: [
        {
          day: 'Day 8-10',
          title: 'Merchant Outreach',
          tasks: [
            { task: 'List 50 target restaurants', owner: 'CMO', time: '3 hours', priority: 'critical' },
            { task: 'Visit 5 restaurants/day (15 total)', owner: 'CEO + BDA', time: '4 hours/day', priority: 'critical' },
            { task: 'Create merchant pitch video', owner: 'Content Creator', time: '4 hours', priority: 'high' },
            { task: 'Design merchant sales deck', owner: 'Designer', time: '4 hours', priority: 'high' },
            { task: 'Setup merchant WhatsApp group', owner: 'Community Manager', time: '1 hour', priority: 'medium' }
          ]
        },
        {
          day: 'Day 11-12',
          title: 'User Pre-Launch',
          tasks: [
            { task: 'Create Founders Circle landing page', owner: 'CMO', time: '4 hours', priority: 'critical' },
            { task: 'Design referral cards', owner: 'Designer', time: '2 hours', priority: 'high' },
            { task: 'Team invites 50 friends each', owner: 'All Team', time: '2 hours', priority: 'critical' },
            { task: 'Send Founders Circle emails', owner: 'Community Manager', time: '2 hours', priority: 'high' },
            { task: 'Create launch countdown posts', owner: 'Designer', time: '3 hours', priority: 'high' }
          ]
        },
        {
          day: 'Day 13-14',
          title: 'Influencer Outreach',
          tasks: [
            { task: 'List 100 micro-influencers', owner: 'CMO', time: '4 hours', priority: 'high' },
            { task: 'Send 50 DMs for barter deals', owner: 'Community Manager', time: '3 hours', priority: 'high' },
            { task: 'Create influencer media kit', owner: 'Designer', time: '3 hours', priority: 'medium' },
            { task: 'Draft influencer contracts', owner: 'CMO', time: '2 hours', priority: 'medium' },
            { task: 'Schedule 5 influencer meetings', owner: 'CMO', time: '2 hours', priority: 'high' }
          ]
        }
      ]
    }
  ];

  // Phase 2: Launch (Week 3-4)
  const phase2Tasks = [
    {
      week: 'Week 3: Soft Launch',
      focus: 'First 100 users + 10 merchants',
      tasks: [
        { task: 'Launch app to Founders Circle', owner: 'CEO', priority: 'critical' },
        { task: 'Post launch announcement', owner: 'CMO', priority: 'critical' },
        { task: 'Send launch emails', owner: 'Community Manager', priority: 'critical' },
        { task: 'Go live on social media', owner: 'All Marketing', priority: 'critical' },
        { task: 'First influencer posts go live', owner: 'CMO', priority: 'high' },
        { task: 'Monitor & respond to all comments', owner: 'Community Manager', priority: 'critical' },
        { task: 'Collect first user testimonials', owner: 'Content Creator', priority: 'high' },
        { task: 'Create user-generated content', owner: 'Content Creator', priority: 'high' },
        { task: 'Start WhatsApp Deals group', owner: 'Community Manager', priority: 'high' },
        { task: 'Daily analytics review', owner: 'CMO', priority: 'high' }
      ]
    },
    {
      week: 'Week 4: Scale Acquisition',
      focus: 'Reach 500 users + 25 merchants',
      tasks: [
        { task: 'Launch Meta Ads (AED 5,000 budget)', owner: 'Performance Marketer', priority: 'critical' },
        { task: 'Launch TikTok Ads (AED 2,000)', owner: 'Performance Marketer', priority: 'high' },
        { task: 'Onboard 3 paid influencers', owner: 'CMO', priority: 'high' },
        { task: 'Create first case study', owner: 'Content Creator', priority: 'high' },
        { task: 'Start daily posting (3x/day)', owner: 'Community Manager', priority: 'critical' },
        { task: 'Launch referral contest', owner: 'CMO', priority: 'high' },
        { task: 'Merchant success stories', owner: 'Content Creator', priority: 'medium' },
        { task: 'A/B test ad creatives', owner: 'Performance Marketer', priority: 'high' },
        { task: 'Optimize based on data', owner: 'CMO', priority: 'critical' }
      ]
    }
  ];

  // Phase 3: Growth (Month 2-3)
  const phase3Tasks = {
    month2: {
      title: 'Month 2: Accelerate Growth',
      targets: { users: '2,500', merchants: '50', gmv: 'AED 25,000' },
      focus: [
        'Scale winning ad creatives',
        'Expand influencer network to 50',
        'Launch 3 WhatsApp communities',
        'Start offline marketing',
        'Launch AI podcast content',
        'First flea market event'
      ]
    },
    month3: {
      title: 'Month 3: Market Dominance',
      targets: { users: '10,000', merchants: '100', gmv: 'AED 100,000' },
      focus: [
        'Expand to new categories (Salons, Gyms)',
        'Launch university campaigns',
        'Start TV/Radio ads',
        'Signature event sponsorship',
        'Press coverage push',
        'Corporate partnerships'
      ]
    }
  };

  // Daily Routines
  const dailyRoutines = {
    cmo: {
      role: 'CMO / Marketing Lead',
      schedule: [
        { time: '8:00 AM', task: 'Review overnight metrics & comments', duration: '30 min' },
        { time: '8:30 AM', task: 'Team standup meeting', duration: '15 min' },
        { time: '9:00 AM', task: 'Influencer outreach & follow-ups', duration: '1 hour' },
        { time: '10:00 AM', task: 'Content review & approvals', duration: '1 hour' },
        { time: '11:00 AM', task: 'Ad performance review', duration: '30 min' },
        { time: '11:30 AM', task: 'Strategy work / planning', duration: '1.5 hours' },
        { time: '1:00 PM', task: 'Lunch break', duration: '1 hour' },
        { time: '2:00 PM', task: 'Merchant visits / meetings', duration: '2 hours' },
        { time: '4:00 PM', task: 'Partnership negotiations', duration: '1 hour' },
        { time: '5:00 PM', task: 'Content calendar for next week', duration: '1 hour' },
        { time: '6:00 PM', task: 'End of day review & next day prep', duration: '30 min' }
      ]
    },
    contentCreator: {
      role: 'Content Creator',
      schedule: [
        { time: '8:00 AM', task: 'Check trending content & sounds', duration: '30 min' },
        { time: '8:30 AM', task: 'Team standup', duration: '15 min' },
        { time: '9:00 AM', task: 'Script writing for day\'s content', duration: '1 hour' },
        { time: '10:00 AM', task: 'Video shooting session', duration: '3 hours' },
        { time: '1:00 PM', task: 'Lunch break', duration: '1 hour' },
        { time: '2:00 PM', task: 'Video editing', duration: '3 hours' },
        { time: '5:00 PM', task: 'Thumbnail & caption creation', duration: '1 hour' },
        { time: '6:00 PM', task: 'Upload & schedule content', duration: '30 min' }
      ]
    },
    communityManager: {
      role: 'Community Manager',
      schedule: [
        { time: '8:00 AM', task: 'Respond to overnight DMs & comments', duration: '1 hour' },
        { time: '9:00 AM', task: 'Team standup', duration: '15 min' },
        { time: '9:15 AM', task: 'Post morning content', duration: '30 min' },
        { time: '10:00 AM', task: 'Engage with community', duration: '2 hours' },
        { time: '12:00 PM', task: 'Post lunch content', duration: '30 min' },
        { time: '12:30 PM', task: 'WhatsApp group management', duration: '1 hour' },
        { time: '1:30 PM', task: 'Lunch break', duration: '1 hour' },
        { time: '2:30 PM', task: 'Influencer comment engagement', duration: '1 hour' },
        { time: '3:30 PM', task: 'User testimonial collection', duration: '1 hour' },
        { time: '4:30 PM', task: 'Post evening content', duration: '30 min' },
        { time: '5:00 PM', task: 'Respond to all pending DMs', duration: '1 hour' },
        { time: '6:00 PM', task: 'Schedule next day stories', duration: '30 min' }
      ]
    }
  };

  // Tools & Budget
  const toolsAndBudget = {
    tools: [
      { category: 'Social Media', tools: [
        { name: 'Hootsuite/Buffer', cost: 'AED 200/mo', purpose: 'Scheduling & analytics' },
        { name: 'Later', cost: 'AED 75/mo', purpose: 'Visual planning' },
        { name: 'Sprout Social', cost: 'AED 400/mo', purpose: 'Enterprise analytics' }
      ]},
      { category: 'Design', tools: [
        { name: 'Canva Pro', cost: 'AED 50/mo', purpose: 'Graphics & templates' },
        { name: 'Adobe Creative Cloud', cost: 'AED 250/mo', purpose: 'Professional design' },
        { name: 'Figma', cost: 'Free/AED 50/mo', purpose: 'UI/UX design' }
      ]},
      { category: 'Video', tools: [
        { name: 'CapCut', cost: 'Free', purpose: 'Mobile video editing' },
        { name: 'Premiere Pro', cost: 'AED 100/mo', purpose: 'Professional editing' },
        { name: 'DaVinci Resolve', cost: 'Free', purpose: 'Color grading' }
      ]},
      { category: 'AI Content', tools: [
        { name: 'ChatGPT Plus', cost: 'AED 75/mo', purpose: 'Script writing' },
        { name: 'ElevenLabs', cost: 'AED 100/mo', purpose: 'AI voiceovers' },
        { name: 'Midjourney', cost: 'AED 40/mo', purpose: 'AI images' }
      ]},
      { category: 'Analytics', tools: [
        { name: 'Google Analytics', cost: 'Free', purpose: 'Website analytics' },
        { name: 'Meta Business Suite', cost: 'Free', purpose: 'Social analytics' },
        { name: 'Mixpanel', cost: 'Free tier', purpose: 'App analytics' }
      ]},
      { category: 'Ads', tools: [
        { name: 'Meta Ads Manager', cost: 'Free', purpose: 'FB/IG ads' },
        { name: 'Google Ads', cost: 'Free', purpose: 'Search ads' },
        { name: 'TikTok Ads Manager', cost: 'Free', purpose: 'TikTok ads' }
      ]}
    ],
    budget: {
      month1: {
        total: 'AED 25,000',
        breakdown: [
          { item: 'Meta Ads (FB/IG)', amount: 'AED 8,000', percentage: 32 },
          { item: 'TikTok Ads', amount: 'AED 4,000', percentage: 16 },
          { item: 'Influencer Barter', amount: 'AED 0', percentage: 0 },
          { item: 'Influencer Paid', amount: 'AED 5,000', percentage: 20 },
          { item: 'Content Production', amount: 'AED 3,000', percentage: 12 },
          { item: 'Tools & Software', amount: 'AED 2,000', percentage: 8 },
          { item: 'Events/Activations', amount: 'AED 2,000', percentage: 8 },
          { item: 'Contingency', amount: 'AED 1,000', percentage: 4 }
        ]
      },
      month2: {
        total: 'AED 35,000',
        breakdown: [
          { item: 'Meta Ads', amount: 'AED 12,000', percentage: 34 },
          { item: 'TikTok Ads', amount: 'AED 6,000', percentage: 17 },
          { item: 'Google Ads', amount: 'AED 3,000', percentage: 9 },
          { item: 'Influencer Paid', amount: 'AED 8,000', percentage: 23 },
          { item: 'Content Production', amount: 'AED 3,000', percentage: 9 },
          { item: 'Flea Market Event', amount: 'AED 2,000', percentage: 5 },
          { item: 'Tools', amount: 'AED 1,000', percentage: 3 }
        ]
      },
      month3: {
        total: 'AED 50,000',
        breakdown: [
          { item: 'Meta Ads', amount: 'AED 15,000', percentage: 30 },
          { item: 'TikTok Ads', amount: 'AED 8,000', percentage: 16 },
          { item: 'Google Ads', amount: 'AED 5,000', percentage: 10 },
          { item: 'Influencer Paid', amount: 'AED 10,000', percentage: 20 },
          { item: 'Offline Ads', amount: 'AED 5,000', percentage: 10 },
          { item: 'Events', amount: 'AED 5,000', percentage: 10 },
          { item: 'Content & Tools', amount: 'AED 2,000', percentage: 4 }
        ]
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <header className="bg-[#0a1628]/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Link href="/marketing-dashboard" className="text-gray-400 hover:text-white transition-colors">
                <ArrowLeft size={24} />
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-[#c9a227]">Marketing Execution Guide</h1>
                <p className="text-gray-400 text-sm">Step-by-step implementation with optimized team</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/marketing-dashboard"
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors"
              >
                <Target size={16} />
                Dashboard
              </Link>
              <Link
                href="/marketing-bible"
                className="bg-[#c9a227] hover:bg-[#b8922a] text-black px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors"
              >
                <FileText size={16} />
                Full Bible
              </Link>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-1 overflow-x-auto pb-2">
            {tabs.map((tab) => (
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
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Summary Banner */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-purple-500/20 rounded-2xl p-6 border border-[#c9a227]/30">
              <h2 className="text-2xl font-bold text-white mb-4">90-Day Marketing Execution Summary</h2>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-[#c9a227]">3-5</div>
                  <div className="text-gray-400 text-sm">Team Members</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green-400">AED 75K</div>
                  <div className="text-gray-400 text-sm">Total Budget</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-400">25,000</div>
                  <div className="text-gray-400 text-sm">Target Users</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-purple-400">100+</div>
                  <div className="text-gray-400 text-sm">Target Merchants</div>
                </div>
              </div>
            </div>

            {/* Phase Overview */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <Rocket className="text-red-400" size={28} />
                  <div>
                    <h3 className="text-xl font-bold text-white">Phase 1</h3>
                    <p className="text-gray-400">Week 1-2: Foundation</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-red-400" /> Setup all social accounts</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-red-400" /> Create 2 weeks content</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-red-400" /> Sign 10 merchants</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-red-400" /> Get 100 Founders Circle</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-red-400" /> Secure 10 influencers</li>
                </ul>
              </div>

              <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="text-blue-400" size={28} />
                  <div>
                    <h3 className="text-xl font-bold text-white">Phase 2</h3>
                    <p className="text-gray-400">Week 3-4: Launch</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-400" /> Soft launch to Founders</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-400" /> Start paid ads</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-400" /> Daily content posting</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-400" /> Reach 500 users</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-400" /> 25 merchants live</li>
                </ul>
              </div>

              <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <Trophy className="text-purple-400" size={28} />
                  <div>
                    <h3 className="text-xl font-bold text-white">Phase 3</h3>
                    <p className="text-gray-400">Month 2-3: Growth</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-purple-400" /> Scale to 10,000 users</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-purple-400" /> 100+ merchants</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-purple-400" /> Launch AI podcasts</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-purple-400" /> First signature event</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-purple-400" /> Press coverage</li>
                </ul>
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4">Quick Access</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { label: 'Team Structure', tab: 'team', icon: Users, color: 'blue' },
                  { label: 'Phase 1 Tasks', tab: 'phase1', icon: Rocket, color: 'red' },
                  { label: 'Daily Routines', tab: 'daily', icon: Calendar, color: 'green' },
                  { label: 'Budget & Tools', tab: 'tools', icon: Settings, color: 'purple' },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(item.tab as typeof activeTab)}
                    className={`p-4 rounded-lg bg-${item.color}-500/10 border border-${item.color}-500/30 hover:bg-${item.color}-500/20 transition-colors text-left`}
                  >
                    <item.icon className={`text-${item.color}-400 mb-2`} size={24} />
                    <div className="text-white font-medium">{item.label}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Team Structure Tab */}
        {activeTab === 'team' && (
          <div className="space-y-8">
            {/* Minimum Team */}
            <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-white">{teamStructure.minimum.title}</h2>
                  <p className="text-green-400 font-medium">{teamStructure.minimum.cost}</p>
                </div>
                <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-lg font-bold">RECOMMENDED START</div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {teamStructure.minimum.members.map((member, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-white font-bold">{member.role}</div>
                      <div className="text-[#c9a227] text-sm">{member.salary}</div>
                    </div>
                    <div className="text-gray-400 text-xs mb-3">{member.hoursPerWeek} hours/week</div>
                    <div className="mb-3">
                      <div className="text-gray-500 text-xs uppercase mb-1">Responsibilities</div>
                      <ul className="text-gray-300 text-sm space-y-1">
                        {member.responsibilities.map((r, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 size={12} className="text-green-400 mt-1 flex-shrink-0" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs uppercase mb-1">Skills Required</div>
                      <div className="flex flex-wrap gap-1">
                        {member.skills.map((s, i) => (
                          <span key={i} className="bg-white/10 text-gray-300 px-2 py-0.5 rounded text-xs">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Optimal Team */}
            <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/30">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-white">{teamStructure.optimal.title}</h2>
                  <p className="text-blue-400 font-medium">{teamStructure.optimal.cost}</p>
                </div>
                <div className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg font-bold">MONTH 2+</div>
              </div>
              <div className="grid md:grid-cols-5 gap-4">
                {teamStructure.optimal.members.map((member, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4">
                    <div className="text-white font-bold text-sm mb-1">{member.role}</div>
                    <div className="text-[#c9a227] text-xs mb-2">{member.salary}</div>
                    <ul className="text-gray-400 text-xs space-y-1">
                      {member.responsibilities.slice(0, 3).map((r, i) => (
                        <li key={i}>• {r}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Growth Team */}
            <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-white">{teamStructure.growth.title}</h2>
                  <p className="text-purple-400 font-medium">{teamStructure.growth.cost}</p>
                </div>
                <div className="bg-purple-500/20 text-purple-400 px-4 py-2 rounded-lg font-bold">SCALE PHASE</div>
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                {teamStructure.growth.members.map((member, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-3">
                    <div className="text-white font-medium text-sm">{member.role}</div>
                    <div className="text-[#c9a227] text-xs">{member.salary}</div>
                    <div className="text-gray-400 text-xs mt-1">{member.focus}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hiring Priority */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4">Hiring Priority Order</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { order: 1, role: 'Marketing Lead', when: 'Day 1' },
                  { order: 2, role: 'Content Creator', when: 'Day 1' },
                  { order: 3, role: 'Community Manager', when: 'Week 1' },
                  { order: 4, role: 'Graphic Designer', when: 'Week 2' },
                  { order: 5, role: 'Performance Marketer', when: 'Week 3' },
                  { order: 6, role: 'SEO Specialist', when: 'Month 2' },
                  { order: 7, role: 'Copywriter', when: 'Month 2' },
                  { order: 8, role: 'Community Associate', when: 'Month 3' },
                ].map((item) => (
                  <div key={item.order} className="bg-white/10 rounded-lg px-4 py-2 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#c9a227]/20 flex items-center justify-center text-[#c9a227] font-bold">{item.order}</div>
                    <div>
                      <div className="text-white text-sm font-medium">{item.role}</div>
                      <div className="text-gray-400 text-xs">{item.when}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Phase 1 Tab */}
        {activeTab === 'phase1' && (
          <div className="space-y-8">
            {phase1Tasks.map((week, weekIdx) => (
              <div key={weekIdx} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h2 className="text-xl font-bold text-[#c9a227] mb-6">{week.week}</h2>
                <div className="space-y-6">
                  {week.days.map((day, dayIdx) => (
                    <div key={dayIdx} className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-[#c9a227]/20 text-[#c9a227] px-3 py-1 rounded font-bold text-sm">{day.day}</div>
                        <div className="text-white font-medium">{day.title}</div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-3">
                        {day.tasks.map((task, taskIdx) => (
                          <div key={taskIdx} className={`rounded-lg p-3 flex items-start gap-3 ${
                            task.priority === 'critical' ? 'bg-red-500/10 border border-red-500/30' :
                            task.priority === 'high' ? 'bg-orange-500/10 border border-orange-500/30' :
                            'bg-white/5'
                          }`}>
                            <CheckSquare size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                            <div className="flex-1">
                              <div className="text-white text-sm">{task.task}</div>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-gray-400 text-xs">Owner: {task.owner}</span>
                                <span className="text-gray-500 text-xs">• {task.time}</span>
                              </div>
                            </div>
                            {task.priority === 'critical' && <span className="text-red-400 text-xs">CRITICAL</span>}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Phase 2 Tab */}
        {activeTab === 'phase2' && (
          <div className="space-y-8">
            {phase2Tasks.map((week, idx) => (
              <div key={idx} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-[#c9a227]">{week.week}</h2>
                  <div className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg text-sm font-medium">{week.focus}</div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {week.tasks.map((task, taskIdx) => (
                    <div key={taskIdx} className={`rounded-lg p-4 flex items-start gap-3 ${
                      task.priority === 'critical' ? 'bg-red-500/10 border border-red-500/30' :
                      'bg-white/5'
                    }`}>
                      <CheckSquare size={18} className="text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-white">{task.task}</div>
                        <div className="text-gray-400 text-sm">Owner: {task.owner}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Phase 3 Tab */}
        {activeTab === 'phase3' && (
          <div className="space-y-8">
            {[phase3Tasks.month2, phase3Tasks.month3].map((month, idx) => (
              <div key={idx} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-[#c9a227]">{month.title}</h2>
                  <div className="flex gap-3">
                    <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded text-sm">{month.targets.users} users</div>
                    <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded text-sm">{month.targets.merchants} merchants</div>
                    <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded text-sm">{month.targets.gmv} GMV</div>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {month.focus.map((item, focusIdx) => (
                    <div key={focusIdx} className="bg-white/5 rounded-lg p-4 flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-[#c9a227]" />
                      <span className="text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Daily Routines Tab */}
        {activeTab === 'daily' && (
          <div className="space-y-8">
            {Object.values(dailyRoutines).map((routine, idx) => (
              <div key={idx} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h2 className="text-xl font-bold text-[#c9a227] mb-6">{routine.role}</h2>
                <div className="space-y-2">
                  {routine.schedule.map((item, schedIdx) => (
                    <div key={schedIdx} className="flex items-center gap-4 bg-white/5 rounded-lg p-3">
                      <div className="text-[#c9a227] font-mono text-sm w-20">{item.time}</div>
                      <div className="flex-1 text-white">{item.task}</div>
                      <div className="text-gray-400 text-sm">{item.duration}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tools & Budget Tab */}
        {activeTab === 'tools' && (
          <div className="space-y-8">
            {/* Tools */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h2 className="text-xl font-bold text-[#c9a227] mb-6">Essential Tools</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {toolsAndBudget.tools.map((category, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-white font-bold mb-3">{category.category}</h3>
                    <div className="space-y-2">
                      {category.tools.map((tool, toolIdx) => (
                        <div key={toolIdx} className="flex items-center justify-between">
                          <div>
                            <div className="text-white text-sm">{tool.name}</div>
                            <div className="text-gray-400 text-xs">{tool.purpose}</div>
                          </div>
                          <div className="text-[#c9a227] text-sm">{tool.cost}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { month: 'Month 1', data: toolsAndBudget.budget.month1, color: 'red' },
                { month: 'Month 2', data: toolsAndBudget.budget.month2, color: 'blue' },
                { month: 'Month 3', data: toolsAndBudget.budget.month3, color: 'purple' },
              ].map((item, idx) => (
                <div key={idx} className={`bg-${item.color}-500/10 rounded-xl p-6 border border-${item.color}-500/30`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-bold">{item.month}</h3>
                    <div className={`text-${item.color}-400 font-bold`}>{item.data.total}</div>
                  </div>
                  <div className="space-y-2">
                    {item.data.breakdown.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">{b.item}</span>
                        <span className="text-white">{b.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 bg-gradient-to-r from-[#c9a227]/20 to-purple-500/20 rounded-2xl p-6 border border-[#c9a227]/30">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Ready to Execute?</h3>
              <p className="text-gray-400">Start with Phase 1 today. The market waits for no one.</p>
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
                href="/marketing-dashboard"
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-colors"
              >
                <Target size={20} />
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
