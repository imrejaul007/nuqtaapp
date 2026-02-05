'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import GlobalFooter from '@/components/GlobalFooter';
import {
  ArrowLeft,
  Target,
  Calendar,
  DollarSign,
  Users,
  TrendingUp,
  BarChart3,
  Megaphone,
  Instagram,
  Youtube,
  MessageCircle,
  Mail,
  Smartphone,
  Globe,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Star,
  Crown,
  Rocket,
  Play,
  Camera,
  Film,
  Share2,
  Heart,
  Award,
  Gift,
  Shield,
  Settings,
  Layers,
  PieChart,
  LineChart,
  Activity,
  Bell,
  Send,
  Hash,
  AtSign,
  Radio,
  Tv,
  Newspaper,
  Phone,
  MapPin,
  Building2,
  Store,
  Coffee,
  Utensils,
  GraduationCap,
  Briefcase,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Check,
  X,
  AlertCircle,
  Info,
  Sparkles,
  FileText,
  Clipboard,
  Eye,
  MousePointer,
  Download,
  ExternalLink
} from 'lucide-react';

export default function CMOPlaybookPage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activeWeek, setActiveWeek] = useState(1);
  const [expandedDay, setExpandedDay] = useState<string | null>(null);

  const tabs = [
    { id: 'dashboard', label: 'CMO Dashboard', icon: Activity },
    { id: 'calendar', label: '90-Day Calendar', icon: Calendar },
    { id: 'budget', label: 'Budget & ROI', icon: DollarSign },
    { id: 'channels', label: 'Channel Matrix', icon: Layers },
    { id: 'team', label: 'Team & Tools', icon: Users },
    { id: 'kpis', label: 'KPIs & Tracking', icon: BarChart3 },
    { id: 'crisis', label: 'Crisis Playbook', icon: Shield },
  ];

  // Current Marketing Status
  const currentStatus = {
    score: 18,
    areas: [
      { name: 'Brand Awareness', score: 15, target: 80, status: 'critical' },
      { name: 'Social Following', score: 0, target: 50000, status: 'critical' },
      { name: 'Content Engine', score: 25, target: 100, status: 'warning' },
      { name: 'Influencer Network', score: 0, target: 100, status: 'critical' },
      { name: 'Community Size', score: 0, target: 5000, status: 'critical' },
      { name: 'User Acquisition', score: 10, target: 10000, status: 'critical' },
    ]
  };

  // 90-Day Goals
  const ninetyDayGoals = {
    users: { current: 0, target: 25000, unit: 'users' },
    merchants: { current: 30, target: 100, unit: 'live merchants' },
    instagram: { current: 0, target: 15000, unit: 'followers' },
    tiktok: { current: 0, target: 10000, unit: 'followers' },
    influencers: { current: 0, target: 100, unit: 'active creators' },
    content: { current: 0, target: 500, unit: 'pieces created' },
    community: { current: 0, target: 3000, unit: 'WhatsApp members' },
    revenue: { current: 0, target: 50000, unit: 'AED GMV' },
  };

  // Budget Allocation (90 Days)
  const totalBudget = 75000; // AED
  const budgetAllocation = [
    { category: 'Influencer Marketing', percent: 35, amount: 26250, color: 'pink' },
    { category: 'Paid Social Ads', percent: 25, amount: 18750, color: 'blue' },
    { category: 'Content Production', percent: 15, amount: 11250, color: 'purple' },
    { category: 'Events & Activations', percent: 10, amount: 7500, color: 'green' },
    { category: 'Tools & Software', percent: 8, amount: 6000, color: 'amber' },
    { category: 'Contingency', percent: 7, amount: 5250, color: 'slate' },
  ];

  // Channel Priority Matrix
  const channelMatrix = [
    {
      channel: 'Instagram',
      priority: 1,
      effort: 'High',
      impact: 'Very High',
      cost: 'Medium',
      timeline: 'Week 1',
      owner: 'CMO + Designer',
      tactics: ['Reels (3x daily)', 'Stories (10x daily)', 'Carousel posts', 'Influencer collabs'],
      kpis: ['15K followers', '5% engagement', '500 saves/post']
    },
    {
      channel: 'TikTok',
      priority: 2,
      effort: 'High',
      impact: 'Very High',
      cost: 'Low',
      timeline: 'Week 1',
      owner: 'CMO + Content Creator',
      tactics: ['Trend hijacking', 'Duets', 'Street interviews', 'Deal reveals'],
      kpis: ['10K followers', '10% engagement', '5 viral videos']
    },
    {
      channel: 'WhatsApp Communities',
      priority: 3,
      effort: 'Medium',
      impact: 'High',
      cost: 'Free',
      timeline: 'Week 2',
      owner: 'CMO',
      tactics: ['Deal alerts', 'Exclusive offers', 'Community building', 'Feedback loops'],
      kpis: ['3K members', '40% open rate', '100 daily messages']
    },
    {
      channel: 'Influencer Network',
      priority: 4,
      effort: 'High',
      impact: 'Very High',
      cost: 'High',
      timeline: 'Week 1',
      owner: 'CMO',
      tactics: ['Nano outreach (50)', 'Micro partnerships (20)', 'Macro deals (5)', 'Affiliate codes'],
      kpis: ['100 creators', '500K reach/month', 'AED 5 CPA']
    },
    {
      channel: 'Google/Meta Ads',
      priority: 5,
      effort: 'Medium',
      impact: 'Medium',
      cost: 'High',
      timeline: 'Week 3',
      owner: 'CMO',
      tactics: ['App install campaigns', 'Retargeting', 'Lookalike audiences', 'Location targeting'],
      kpis: ['AED 8 CPI', '15% CTR', '1000 installs/week']
    },
    {
      channel: 'PR & Earned Media',
      priority: 6,
      effort: 'Medium',
      impact: 'High',
      cost: 'Low',
      timeline: 'Week 4',
      owner: 'CMO',
      tactics: ['Press releases', 'Journalist outreach', 'Founder interviews', 'Product features'],
      kpis: ['10 articles', '5 interviews', '1M impressions']
    },
    {
      channel: 'YouTube',
      priority: 7,
      effort: 'High',
      impact: 'Medium',
      cost: 'Medium',
      timeline: 'Month 2',
      owner: 'Content Creator',
      tactics: ['Hidden Gems series', 'Merchant features', 'Tutorials', 'Behind the scenes'],
      kpis: ['5K subscribers', '10K views/video', '5% CTR']
    },
    {
      channel: 'Email Marketing',
      priority: 8,
      effort: 'Low',
      impact: 'Medium',
      cost: 'Low',
      timeline: 'Week 2',
      owner: 'CMO',
      tactics: ['Welcome series (7 emails)', 'Weekly deals', 'Win-back campaigns', 'Merchant newsletters'],
      kpis: ['30% open rate', '5% CTR', '2% conversion']
    },
  ];

  // 90-Day Calendar - Week by Week
  const weeklyCalendar = [
    {
      week: 1,
      theme: 'FOUNDATION & LAUNCH',
      focus: 'Set up all channels, launch social presence, start influencer outreach',
      budget: 8000,
      days: [
        {
          day: 'Sunday',
          tasks: [
            { task: 'Create Instagram business account @nuqta.ae', owner: 'CMO', priority: 'critical', done: false },
            { task: 'Create TikTok account @nuqta.ae', owner: 'CMO', priority: 'critical', done: false },
            { task: 'Design profile pictures, bios, highlights covers', owner: 'Designer', priority: 'critical', done: false },
            { task: 'Set up Meta Business Suite', owner: 'CMO', priority: 'high', done: false },
            { task: 'Create content calendar for Week 1', owner: 'CMO', priority: 'high', done: false },
          ]
        },
        {
          day: 'Monday',
          tasks: [
            { task: 'Post first Instagram Reel (app intro)', owner: 'Designer', priority: 'critical', done: false },
            { task: 'Post first TikTok (What is Nuqta?)', owner: 'CMO', priority: 'critical', done: false },
            { task: 'Create list of 100 nano-influencers', owner: 'CMO', priority: 'high', done: false },
            { task: 'Draft influencer outreach DM template', owner: 'CMO', priority: 'high', done: false },
            { task: 'Set up Hootsuite/Buffer for scheduling', owner: 'CMO', priority: 'medium', done: false },
          ]
        },
        {
          day: 'Tuesday',
          tasks: [
            { task: 'Send DMs to first 30 nano-influencers', owner: 'CMO', priority: 'critical', done: false },
            { task: 'Post Instagram Reel (How to save with Nuqta)', owner: 'Designer', priority: 'high', done: false },
            { task: 'Post 10 Instagram Stories', owner: 'Designer', priority: 'high', done: false },
            { task: 'Create WhatsApp broadcast list', owner: 'CMO', priority: 'medium', done: false },
            { task: 'Research trending TikTok sounds', owner: 'CMO', priority: 'medium', done: false },
          ]
        },
        {
          day: 'Wednesday',
          tasks: [
            { task: 'Post TikTok with trending sound', owner: 'CMO', priority: 'high', done: false },
            { task: 'Follow up with responsive influencers', owner: 'CMO', priority: 'high', done: false },
            { task: 'Create Instagram carousel (5 ways to save)', owner: 'Designer', priority: 'high', done: false },
            { task: 'Set up WhatsApp Community "Nuqta Deals UAE"', owner: 'CMO', priority: 'high', done: false },
            { task: 'Draft first email newsletter', owner: 'CMO', priority: 'medium', done: false },
          ]
        },
        {
          day: 'Thursday',
          tasks: [
            { task: 'Sign first 5 nano-influencer deals', owner: 'CMO', priority: 'critical', done: false },
            { task: 'Post Instagram Reel (merchant feature)', owner: 'Designer', priority: 'high', done: false },
            { task: 'Create 3 TikToks for weekend posting', owner: 'CMO', priority: 'high', done: false },
            { task: 'Launch WhatsApp community invite campaign', owner: 'CMO', priority: 'high', done: false },
            { task: 'Set up Google Analytics + Adjust for tracking', owner: 'CTO', priority: 'high', done: false },
          ]
        },
        {
          day: 'Friday',
          tasks: [
            { task: 'Post "Friday Deals" content across all channels', owner: 'CMO', priority: 'high', done: false },
            { task: 'Engage with all comments/DMs (1 hour)', owner: 'CMO', priority: 'high', done: false },
            { task: 'Review Week 1 metrics and adjust', owner: 'CMO', priority: 'medium', done: false },
          ]
        },
        {
          day: 'Saturday',
          tasks: [
            { task: 'Post weekend lifestyle content', owner: 'Designer', priority: 'high', done: false },
            { task: 'Send 30 more influencer DMs', owner: 'CMO', priority: 'high', done: false },
            { task: 'Plan Week 2 content calendar', owner: 'CMO', priority: 'high', done: false },
            { task: 'Create Week 1 performance report', owner: 'CMO', priority: 'medium', done: false },
          ]
        },
      ],
      targets: {
        instagram: 500,
        tiktok: 300,
        influencers: 10,
        content: 25,
        whatsapp: 100,
      }
    },
    {
      week: 2,
      theme: 'INFLUENCER ACTIVATION',
      focus: 'First influencer posts go live, scale WhatsApp, launch paid ads pilot',
      budget: 10000,
      days: [
        {
          day: 'Sunday',
          tasks: [
            { task: 'Coordinate first 5 influencer posts', owner: 'CMO', priority: 'critical', done: false },
            { task: 'Launch Instagram Reels ads (AED 500 test)', owner: 'CMO', priority: 'high', done: false },
            { task: 'Create "Deal of the Day" content series', owner: 'Designer', priority: 'high', done: false },
            { task: 'Set up email automation (Mailchimp)', owner: 'CMO', priority: 'medium', done: false },
          ]
        },
        {
          day: 'Monday',
          tasks: [
            { task: 'Post 3 Instagram Reels', owner: 'Designer', priority: 'high', done: false },
            { task: 'Send next batch of influencer DMs (30)', owner: 'CMO', priority: 'high', done: false },
            { task: 'Create TikTok duet challenge', owner: 'CMO', priority: 'high', done: false },
            { task: 'Launch WhatsApp group #2 (Foodies)', owner: 'CMO', priority: 'medium', done: false },
          ]
        },
        {
          day: 'Tuesday',
          tasks: [
            { task: 'Review influencer post performance', owner: 'CMO', priority: 'critical', done: false },
            { task: 'Repost best UGC to main account', owner: 'Designer', priority: 'high', done: false },
            { task: 'Launch TikTok ads pilot (AED 300)', owner: 'CMO', priority: 'high', done: false },
            { task: 'Create merchant co-marketing content', owner: 'Designer', priority: 'medium', done: false },
          ]
        },
        {
          day: 'Wednesday',
          tasks: [
            { task: 'Film street interview content', owner: 'Content Creator', priority: 'high', done: false },
            { task: 'Sign 10 more influencer deals', owner: 'CMO', priority: 'high', done: false },
            { task: 'Post carousel: "This week\'s best deals"', owner: 'Designer', priority: 'high', done: false },
            { task: 'Start micro-influencer negotiations', owner: 'CMO', priority: 'medium', done: false },
          ]
        },
        {
          day: 'Thursday',
          tasks: [
            { task: 'Launch referral campaign content', owner: 'CMO', priority: 'critical', done: false },
            { task: 'Post street interview to TikTok', owner: 'CMO', priority: 'high', done: false },
            { task: 'Send first email newsletter', owner: 'CMO', priority: 'high', done: false },
            { task: 'Create Instagram Highlights (Deals, How-To, Reviews)', owner: 'Designer', priority: 'medium', done: false },
          ]
        },
        {
          day: 'Friday',
          tasks: [
            { task: 'Post "Weekend Deals" across all channels', owner: 'CMO', priority: 'high', done: false },
            { task: 'Host first WhatsApp Q&A session', owner: 'CMO', priority: 'high', done: false },
            { task: 'Review ad performance, optimize', owner: 'CMO', priority: 'high', done: false },
          ]
        },
        {
          day: 'Saturday',
          tasks: [
            { task: 'Post weekend content (brunch deals)', owner: 'Designer', priority: 'high', done: false },
            { task: 'Create Week 2 performance report', owner: 'CMO', priority: 'high', done: false },
            { task: 'Plan Week 3 big push', owner: 'CMO', priority: 'high', done: false },
          ]
        },
      ],
      targets: {
        instagram: 2000,
        tiktok: 1000,
        influencers: 25,
        content: 60,
        whatsapp: 500,
      }
    },
    {
      week: 3,
      theme: 'VIRAL PUSH',
      focus: 'Launch viral challenge, scale ads, first micro-influencer campaign',
      budget: 12000,
      days: [
        {
          day: 'Sunday',
          tasks: [
            { task: 'Launch #NuqtaSavingsChallenge on TikTok', owner: 'CMO', priority: 'critical', done: false },
            { task: 'Brief all influencers on challenge', owner: 'CMO', priority: 'critical', done: false },
            { task: 'Scale Instagram ads to AED 1,500', owner: 'CMO', priority: 'high', done: false },
            { task: 'Create challenge participation prizes', owner: 'CMO', priority: 'high', done: false },
          ]
        },
        {
          day: 'Monday',
          tasks: [
            { task: 'First micro-influencer post goes live', owner: 'CMO', priority: 'critical', done: false },
            { task: 'Post 5 challenge entries from team', owner: 'Designer', priority: 'high', done: false },
            { task: 'Launch challenge on Instagram Reels', owner: 'Designer', priority: 'high', done: false },
            { task: 'Create challenge highlight reel', owner: 'Designer', priority: 'medium', done: false },
          ]
        },
        {
          day: 'Tuesday',
          tasks: [
            { task: 'Feature best challenge entries', owner: 'CMO', priority: 'high', done: false },
            { task: 'Launch WhatsApp group #3 (Students)', owner: 'CMO', priority: 'high', done: false },
            { task: 'Create press release for challenge', owner: 'CMO', priority: 'medium', done: false },
            { task: 'Reach out to 5 journalists', owner: 'CMO', priority: 'medium', done: false },
          ]
        },
        {
          day: 'Wednesday',
          tasks: [
            { task: 'Post challenge leaderboard', owner: 'Designer', priority: 'high', done: false },
            { task: 'Film "reaction" content to entries', owner: 'CMO', priority: 'high', done: false },
            { task: 'Double down on best performing ads', owner: 'CMO', priority: 'high', done: false },
            { task: 'Start YouTube channel setup', owner: 'Content Creator', priority: 'medium', done: false },
          ]
        },
        {
          day: 'Thursday',
          tasks: [
            { task: 'Announce challenge winners', owner: 'CMO', priority: 'critical', done: false },
            { task: 'Create winner feature content', owner: 'Designer', priority: 'high', done: false },
            { task: 'Launch second micro-influencer wave', owner: 'CMO', priority: 'high', done: false },
            { task: 'Send weekly newsletter', owner: 'CMO', priority: 'medium', done: false },
          ]
        },
        {
          day: 'Friday',
          tasks: [
            { task: 'Post challenge recap content', owner: 'CMO', priority: 'high', done: false },
            { task: 'Launch weekend flash deals campaign', owner: 'CMO', priority: 'high', done: false },
            { task: 'Community celebration post', owner: 'Designer', priority: 'high', done: false },
          ]
        },
        {
          day: 'Saturday',
          tasks: [
            { task: 'Create Week 3 performance report', owner: 'CMO', priority: 'high', done: false },
            { task: 'Plan Month 2 strategy based on learnings', owner: 'CMO', priority: 'high', done: false },
            { task: 'Identify top performing content for replication', owner: 'CMO', priority: 'high', done: false },
          ]
        },
      ],
      targets: {
        instagram: 5000,
        tiktok: 3000,
        influencers: 40,
        content: 100,
        whatsapp: 1000,
      }
    },
    {
      week: 4,
      theme: 'LAUNCH EVENT',
      focus: '"Golden Week" launch event, press coverage, user milestone celebration',
      budget: 15000,
      days: [
        {
          day: 'Sunday',
          tasks: [
            { task: 'Launch "Golden Week" campaign', owner: 'CMO', priority: 'critical', done: false },
            { task: 'All influencers post coordinated content', owner: 'CMO', priority: 'critical', done: false },
            { task: 'Press release goes out', owner: 'CMO', priority: 'critical', done: false },
            { task: 'Launch double-reward promotion', owner: 'CMO', priority: 'high', done: false },
          ]
        },
        {
          day: 'Monday',
          tasks: [
            { task: 'Host mini launch event at partner cafe', owner: 'CMO', priority: 'high', done: false },
            { task: 'Live stream event on Instagram', owner: 'Designer', priority: 'high', done: false },
            { task: 'Scale all ads to maximum (AED 2,000/day)', owner: 'CMO', priority: 'high', done: false },
            { task: 'Post event content across all platforms', owner: 'Designer', priority: 'high', done: false },
          ]
        },
        {
          day: 'Tuesday',
          tasks: [
            { task: 'Feature press coverage', owner: 'CMO', priority: 'high', done: false },
            { task: 'Post user testimonial videos', owner: 'Designer', priority: 'high', done: false },
            { task: 'Launch referral bonus (Give 100, Get 100)', owner: 'CMO', priority: 'high', done: false },
            { task: 'Email blast to all users', owner: 'CMO', priority: 'medium', done: false },
          ]
        },
        {
          day: 'Wednesday',
          tasks: [
            { task: 'Celebrate 5,000 user milestone (if reached)', owner: 'CMO', priority: 'high', done: false },
            { task: 'Feature top users/savers', owner: 'Designer', priority: 'high', done: false },
            { task: 'Launch merchant spotlight series', owner: 'Designer', priority: 'medium', done: false },
            { task: 'Post behind-the-scenes content', owner: 'CMO', priority: 'medium', done: false },
          ]
        },
        {
          day: 'Thursday',
          tasks: [
            { task: 'Final push content for Golden Week', owner: 'CMO', priority: 'critical', done: false },
            { task: 'Send "Last Chance" notifications', owner: 'CMO', priority: 'high', done: false },
            { task: 'Create Month 1 recap video', owner: 'Designer', priority: 'high', done: false },
            { task: 'Plan Month 2 detailed calendar', owner: 'CMO', priority: 'high', done: false },
          ]
        },
        {
          day: 'Friday',
          tasks: [
            { task: 'Golden Week ends - thank you content', owner: 'CMO', priority: 'high', done: false },
            { task: 'Share Month 1 results with community', owner: 'CMO', priority: 'high', done: false },
            { task: 'Team celebration and retrospective', owner: 'CMO', priority: 'medium', done: false },
          ]
        },
        {
          day: 'Saturday',
          tasks: [
            { task: 'Create comprehensive Month 1 report', owner: 'CMO', priority: 'critical', done: false },
            { task: 'Analyze all channel performance', owner: 'CMO', priority: 'critical', done: false },
            { task: 'Set Month 2 targets based on learnings', owner: 'CMO', priority: 'critical', done: false },
            { task: 'Prepare board/investor update', owner: 'CMO', priority: 'high', done: false },
          ]
        },
      ],
      targets: {
        instagram: 10000,
        tiktok: 5000,
        influencers: 50,
        content: 150,
        whatsapp: 2000,
        users: 10000,
      }
    },
  ];

  // Marketing Team Structure
  const teamStructure = [
    {
      role: 'CMO',
      status: 'hired',
      responsibilities: ['Overall strategy', 'Influencer relationships', 'Budget management', 'Paid ads', 'PR'],
      hours: '50+ hrs/week',
      cost: 'Equity + AED 15K/mo'
    },
    {
      role: 'Graphic Designer',
      status: 'hired',
      responsibilities: ['Social content', 'Ad creatives', 'Brand assets', 'Video editing', 'Email design'],
      hours: '45 hrs/week',
      cost: 'AED 8K/mo'
    },
    {
      role: 'Content Creator (Part-time)',
      status: 'to_hire',
      responsibilities: ['Street interviews', 'TikTok content', 'Vlog-style videos', 'YouTube series'],
      hours: '20 hrs/week',
      cost: 'AED 4K/mo'
    },
    {
      role: 'Community Manager',
      status: 'future',
      responsibilities: ['WhatsApp groups', 'Comment responses', 'User support', 'UGC curation'],
      hours: '40 hrs/week',
      cost: 'AED 6K/mo',
      trigger: 'Hire at 5K WhatsApp members'
    },
    {
      role: 'Performance Marketing Specialist',
      status: 'future',
      responsibilities: ['Paid social ads', 'ASO', 'Analytics', 'Attribution', 'Retargeting'],
      hours: '40 hrs/week',
      cost: 'AED 10K/mo',
      trigger: 'Hire when ad spend exceeds AED 20K/mo'
    },
  ];

  // Marketing Tech Stack
  const techStack = [
    {
      category: 'Social Media Management',
      tools: [
        { name: 'Hootsuite', purpose: 'Scheduling, analytics', cost: 'AED 400/mo', priority: 'critical' },
        { name: 'Canva Pro', purpose: 'Design, templates', cost: 'AED 50/mo', priority: 'critical' },
        { name: 'CapCut', purpose: 'Video editing', cost: 'Free', priority: 'critical' },
      ]
    },
    {
      category: 'Analytics & Attribution',
      tools: [
        { name: 'Google Analytics 4', purpose: 'Web analytics', cost: 'Free', priority: 'critical' },
        { name: 'Adjust/AppsFlyer', purpose: 'Mobile attribution', cost: 'AED 1,500/mo', priority: 'critical' },
        { name: 'Mixpanel', purpose: 'Product analytics', cost: 'AED 500/mo', priority: 'high' },
      ]
    },
    {
      category: 'Email & CRM',
      tools: [
        { name: 'Mailchimp', purpose: 'Email marketing', cost: 'AED 200/mo', priority: 'high' },
        { name: 'HubSpot CRM', purpose: 'Lead management', cost: 'Free tier', priority: 'medium' },
      ]
    },
    {
      category: 'Advertising',
      tools: [
        { name: 'Meta Ads Manager', purpose: 'FB/IG ads', cost: 'Free (ad spend separate)', priority: 'critical' },
        { name: 'TikTok Ads Manager', purpose: 'TikTok ads', cost: 'Free (ad spend separate)', priority: 'critical' },
        { name: 'Google Ads', purpose: 'Search, YouTube', cost: 'Free (ad spend separate)', priority: 'high' },
      ]
    },
    {
      category: 'Influencer Management',
      tools: [
        { name: 'Notion', purpose: 'Creator database', cost: 'Free', priority: 'critical' },
        { name: 'Google Sheets', purpose: 'Tracking, reporting', cost: 'Free', priority: 'critical' },
      ]
    },
  ];

  // KPI Dashboard
  const kpiCategories = [
    {
      name: 'Acquisition',
      kpis: [
        { metric: 'New Users', target: '25,000', period: '90 days', current: '0', status: 'tracking' },
        { metric: 'Cost Per Install', target: '<AED 5', period: 'Average', current: '-', status: 'tracking' },
        { metric: 'App Store Conversion', target: '>30%', period: 'Average', current: '-', status: 'tracking' },
        { metric: 'Organic vs Paid', target: '60/40', period: '90 days', current: '-', status: 'tracking' },
      ]
    },
    {
      name: 'Social Media',
      kpis: [
        { metric: 'Instagram Followers', target: '15,000', period: '90 days', current: '0', status: 'critical' },
        { metric: 'TikTok Followers', target: '10,000', period: '90 days', current: '0', status: 'critical' },
        { metric: 'Engagement Rate', target: '>5%', period: 'Average', current: '-', status: 'tracking' },
        { metric: 'Content Pieces', target: '500', period: '90 days', current: '0', status: 'tracking' },
      ]
    },
    {
      name: 'Influencer',
      kpis: [
        { metric: 'Active Creators', target: '100', period: '90 days', current: '0', status: 'critical' },
        { metric: 'Total Reach', target: '5M', period: '90 days', current: '0', status: 'tracking' },
        { metric: 'Creator ROI', target: '>5x', period: 'Average', current: '-', status: 'tracking' },
        { metric: 'Affiliate Conversions', target: '1,000', period: '90 days', current: '0', status: 'tracking' },
      ]
    },
    {
      name: 'Community',
      kpis: [
        { metric: 'WhatsApp Members', target: '3,000', period: '90 days', current: '0', status: 'critical' },
        { metric: 'Active Community Rate', target: '>40%', period: 'Average', current: '-', status: 'tracking' },
        { metric: 'NPS Score', target: '>50', period: 'Monthly', current: '-', status: 'tracking' },
        { metric: 'Referral Rate', target: '>20%', period: 'Average', current: '-', status: 'tracking' },
      ]
    },
    {
      name: 'Business',
      kpis: [
        { metric: 'GMV via Marketing', target: 'AED 50,000', period: '90 days', current: '0', status: 'tracking' },
        { metric: 'Marketing ROI', target: '>3x', period: '90 days', current: '-', status: 'tracking' },
        { metric: 'Brand Awareness', target: '>10%', period: 'Target market', current: '-', status: 'tracking' },
        { metric: 'Share of Voice', target: '>5%', period: 'vs competitors', current: '-', status: 'tracking' },
      ]
    },
  ];

  // Crisis Communication Templates
  const crisisScenarios = [
    {
      scenario: 'App Outage / Technical Issues',
      severity: 'high',
      response: {
        immediate: 'Post on all social channels within 15 minutes acknowledging the issue',
        template: 'We are aware some users are experiencing [issue]. Our team is working on it. We will update you within [timeframe]. Sorry for the inconvenience!',
        channels: ['Instagram Stories', 'Twitter', 'WhatsApp broadcast'],
        owner: 'CMO + CTO'
      }
    },
    {
      scenario: 'Negative Viral Content',
      severity: 'high',
      response: {
        immediate: 'Do NOT delete or argue publicly. Assess validity within 1 hour.',
        template: 'We take all feedback seriously. We have DMd you to understand and resolve this personally. Thank you for giving us a chance to make it right.',
        channels: ['Direct response on platform where posted'],
        owner: 'CMO'
      }
    },
    {
      scenario: 'Merchant Complaint Public',
      severity: 'medium',
      response: {
        immediate: 'Respond within 2 hours with empathy and action',
        template: 'We are sorry to hear this. Our merchant success team is reaching out directly. We are committed to resolving this.',
        channels: ['Comment reply', 'Direct message'],
        owner: 'CMO + BDA'
      }
    },
    {
      scenario: 'User Data/Privacy Concern',
      severity: 'critical',
      response: {
        immediate: 'Legal review within 30 minutes. No public statement until approved.',
        template: '[After legal approval] User privacy is our top priority. We have investigated and [action taken]. For questions: privacy@nuqta.ae',
        channels: ['Official statement on website', 'Email to affected users'],
        owner: 'CEO + CMO + Legal'
      }
    },
    {
      scenario: 'Competitor Attack/Comparison',
      severity: 'low',
      response: {
        immediate: 'Do not engage directly. Respond with positive messaging.',
        template: 'We are focused on building the best experience for our users. Try Nuqta and see the difference!',
        channels: ['Do not post unless directly tagged'],
        owner: 'CMO'
      }
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'text-red-400 bg-red-500/20';
      case 'warning': return 'text-yellow-400 bg-yellow-500/20';
      case 'good': return 'text-green-400 bg-green-500/20';
      case 'tracking': return 'text-blue-400 bg-blue-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#0a1628] via-[#1a2942] to-[#0a1628] border-b border-[#c9a227]/20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#c9a227] mb-6 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-xl">
                <Megaphone className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-black">CMO Execution Playbook</h1>
                <p className="text-gray-400 mt-1">90-Day Marketing Masterplan - From 0 to 25,000 Users</p>
              </div>
            </div>
            <div className="hidden md:block text-right">
              <div className="text-sm text-gray-500">Marketing Health Score</div>
              <div className="text-3xl font-bold text-red-400">{currentStatus.score}/100</div>
              <div className="text-xs text-red-400">CRITICAL - Needs Immediate Action</div>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="sticky top-0 z-50 bg-[#0a1628]/95 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">

        {/* DASHBOARD TAB */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Current Status */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
                <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                  <AlertTriangle size={24} />
                  Current Marketing Status: CRITICAL
                </h3>
                <div className="space-y-3">
                  {currentStatus.areas.map((area, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-32 text-sm text-gray-400">{area.name}</div>
                      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            area.status === 'critical' ? 'bg-red-500' :
                            area.status === 'warning' ? 'bg-yellow-500' : 'bg-green-500'
                          }`}
                          style={{ width: `${area.score}%` }}
                        />
                      </div>
                      <div className="w-16 text-right text-sm font-bold text-white">{area.score}%</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl p-6 border border-green-500/30">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                  <Target size={24} />
                  90-Day Targets
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(ninetyDayGoals).map(([key, value]) => (
                    <div key={key} className="bg-white/5 rounded-lg p-3">
                      <div className="text-2xl font-bold text-white">{value.target.toLocaleString()}</div>
                      <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                      <div className="text-xs text-gray-500">{value.unit}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Week 1 Quick Actions */}
            <div className="bg-[#c9a227]/10 rounded-xl p-6 border border-[#c9a227]/30">
              <h3 className="text-xl font-bold text-[#c9a227] mb-4 flex items-center gap-2">
                <Zap size={24} />
                This Week: Priority Actions
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { action: 'Launch Instagram @nuqta.ae', deadline: 'Day 1', status: 'pending' },
                  { action: 'Launch TikTok @nuqta.ae', deadline: 'Day 1', status: 'pending' },
                  { action: 'DM 30 nano-influencers', deadline: 'Day 2-3', status: 'pending' },
                  { action: 'Sign first 10 creators', deadline: 'Day 7', status: 'pending' },
                  { action: 'Create 25 content pieces', deadline: 'Week 1', status: 'pending' },
                  { action: 'Set up WhatsApp Community', deadline: 'Day 4', status: 'pending' },
                  { action: 'Launch first ads (AED 500)', deadline: 'Day 5', status: 'pending' },
                  { action: 'Reach 500 IG followers', deadline: 'Week 1', status: 'pending' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-3 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-[#c9a227] flex items-center justify-center text-xs font-bold text-[#c9a227]">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{item.action}</p>
                      <p className="text-xs text-gray-500">{item.deadline}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Budget Overview */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <DollarSign size={24} className="text-green-400" />
                90-Day Budget: AED {totalBudget.toLocaleString()}
              </h3>
              <div className="grid md:grid-cols-6 gap-4">
                {budgetAllocation.map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className={`text-2xl font-bold ${
                      item.color === 'pink' ? 'text-pink-400' :
                      item.color === 'blue' ? 'text-blue-400' :
                      item.color === 'purple' ? 'text-purple-400' :
                      item.color === 'green' ? 'text-green-400' :
                      item.color === 'amber' ? 'text-amber-400' : 'text-slate-400'
                    }`}>
                      {item.percent}%
                    </div>
                    <div className="text-xs text-gray-400 mt-1">{item.category}</div>
                    <div className="text-sm text-white font-medium">AED {item.amount.toLocaleString()}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid md:grid-cols-4 gap-4">
              <Link href="/marketing-bible" className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-[#c9a227]/50 transition-all group">
                <FileText className="text-[#c9a227] mb-2" size={24} />
                <h4 className="font-bold text-white group-hover:text-[#c9a227]">Marketing Bible</h4>
                <p className="text-xs text-gray-400">Full content strategy</p>
              </Link>
              <Link href="/media-hub" className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-pink-500/50 transition-all group">
                <Camera className="text-pink-400 mb-2" size={24} />
                <h4 className="font-bold text-white group-hover:text-pink-400">Media Hub</h4>
                <p className="text-xs text-gray-400">Influencer strategy</p>
              </Link>
              <Link href="/campaigns" className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-blue-500/50 transition-all group">
                <Target className="text-blue-400 mb-2" size={24} />
                <h4 className="font-bold text-white group-hover:text-blue-400">Campaigns</h4>
                <p className="text-xs text-gray-400">Campaign playbooks</p>
              </Link>
              <Link href="/cmo-report" className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-purple-500/50 transition-all group">
                <BarChart3 className="text-purple-400 mb-2" size={24} />
                <h4 className="font-bold text-white group-hover:text-purple-400">CMO Report</h4>
                <p className="text-xs text-gray-400">Strategic analysis</p>
              </Link>
            </div>
          </div>
        )}

        {/* CALENDAR TAB */}
        {activeTab === 'calendar' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">90-Day Marketing Calendar</h2>
              <p className="text-gray-400">Day-by-day execution plan with tasks and owners</p>
            </div>

            {/* Week Selector */}
            <div className="flex gap-2 justify-center mb-6">
              {weeklyCalendar.map((week) => (
                <button
                  key={week.week}
                  onClick={() => setActiveWeek(week.week)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    activeWeek === week.week
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  Week {week.week}
                </button>
              ))}
              <button className="px-4 py-2 rounded-lg bg-white/5 text-gray-500">Week 5-12...</button>
            </div>

            {/* Active Week Detail */}
            {weeklyCalendar.filter(w => w.week === activeWeek).map((week) => (
              <div key={week.week} className="space-y-4">
                {/* Week Header */}
                <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl p-6 border border-pink-500/30">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-white">Week {week.week}: {week.theme}</h3>
                      <p className="text-gray-400 mt-1">{week.focus}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Week Budget</div>
                      <div className="text-2xl font-bold text-green-400">AED {week.budget.toLocaleString()}</div>
                    </div>
                  </div>

                  {/* Week Targets */}
                  <div className="grid grid-cols-5 gap-4 mt-6">
                    {Object.entries(week.targets).map(([key, value]) => (
                      <div key={key} className="bg-white/10 rounded-lg p-3 text-center">
                        <div className="text-xl font-bold text-white">{value.toLocaleString()}</div>
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Daily Tasks */}
                <div className="space-y-3">
                  {week.days.map((day, dayIdx) => (
                    <div key={dayIdx} className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                      <button
                        onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                        className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-all"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center font-bold">
                            {dayIdx + 1}
                          </div>
                          <div className="text-left">
                            <h4 className="font-bold text-white">{day.day}</h4>
                            <p className="text-sm text-gray-400">{day.tasks.length} tasks</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-sm text-gray-500">
                            {day.tasks.filter(t => t.priority === 'critical').length} critical
                          </div>
                          {expandedDay === day.day ? <ChevronUp /> : <ChevronDown />}
                        </div>
                      </button>

                      {expandedDay === day.day && (
                        <div className="p-4 pt-0 space-y-2">
                          {day.tasks.map((task, taskIdx) => (
                            <div
                              key={taskIdx}
                              className={`flex items-center gap-3 p-3 rounded-lg ${
                                task.priority === 'critical' ? 'bg-red-500/10 border border-red-500/20' :
                                task.priority === 'high' ? 'bg-amber-500/10 border border-amber-500/20' :
                                'bg-white/5 border border-white/10'
                              }`}
                            >
                              <input
                                type="checkbox"
                                className="w-5 h-5 rounded border-2 border-gray-500"
                                defaultChecked={task.done}
                              />
                              <div className="flex-1">
                                <p className="text-white text-sm">{task.task}</p>
                              </div>
                              <div className="text-xs text-gray-500 w-20">{task.owner}</div>
                              <span className={`text-xs px-2 py-1 rounded ${
                                task.priority === 'critical' ? 'bg-red-500/20 text-red-400' :
                                task.priority === 'high' ? 'bg-amber-500/20 text-amber-400' :
                                'bg-gray-500/20 text-gray-400'
                              }`}>
                                {task.priority}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* BUDGET TAB */}
        {activeTab === 'budget' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Marketing Budget & ROI Projections</h2>
              <p className="text-gray-400">90-Day allocation: AED {totalBudget.toLocaleString()}</p>
            </div>

            {/* Budget Allocation */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Budget Allocation</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {budgetAllocation.map((item, idx) => (
                  <div key={idx} className={`rounded-xl p-4 ${
                    item.color === 'pink' ? 'bg-pink-500/10 border border-pink-500/30' :
                    item.color === 'blue' ? 'bg-blue-500/10 border border-blue-500/30' :
                    item.color === 'purple' ? 'bg-purple-500/10 border border-purple-500/30' :
                    item.color === 'green' ? 'bg-green-500/10 border border-green-500/30' :
                    item.color === 'amber' ? 'bg-amber-500/10 border border-amber-500/30' :
                    'bg-slate-500/10 border border-slate-500/30'
                  }`}>
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-white">{item.category}</h4>
                      <span className={`text-2xl font-bold ${
                        item.color === 'pink' ? 'text-pink-400' :
                        item.color === 'blue' ? 'text-blue-400' :
                        item.color === 'purple' ? 'text-purple-400' :
                        item.color === 'green' ? 'text-green-400' :
                        item.color === 'amber' ? 'text-amber-400' : 'text-slate-400'
                      }`}>
                        {item.percent}%
                      </span>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">AED {item.amount.toLocaleString()}</div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          item.color === 'pink' ? 'bg-pink-500' :
                          item.color === 'blue' ? 'bg-blue-500' :
                          item.color === 'purple' ? 'bg-purple-500' :
                          item.color === 'green' ? 'bg-green-500' :
                          item.color === 'amber' ? 'bg-amber-500' : 'bg-slate-500'
                        }`}
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Breakdown */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Monthly Spend Breakdown</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-[#c9a227]">Category</th>
                      <th className="text-right py-3 px-4 text-blue-400">Month 1</th>
                      <th className="text-right py-3 px-4 text-purple-400">Month 2</th>
                      <th className="text-right py-3 px-4 text-green-400">Month 3</th>
                      <th className="text-right py-3 px-4 text-white">Total</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">Influencer Marketing</td>
                      <td className="py-3 px-4 text-right">AED 8,000</td>
                      <td className="py-3 px-4 text-right">AED 9,000</td>
                      <td className="py-3 px-4 text-right">AED 9,250</td>
                      <td className="py-3 px-4 text-right font-bold text-pink-400">AED 26,250</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">Paid Social Ads</td>
                      <td className="py-3 px-4 text-right">AED 4,000</td>
                      <td className="py-3 px-4 text-right">AED 6,000</td>
                      <td className="py-3 px-4 text-right">AED 8,750</td>
                      <td className="py-3 px-4 text-right font-bold text-blue-400">AED 18,750</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">Content Production</td>
                      <td className="py-3 px-4 text-right">AED 4,000</td>
                      <td className="py-3 px-4 text-right">AED 4,000</td>
                      <td className="py-3 px-4 text-right">AED 3,250</td>
                      <td className="py-3 px-4 text-right font-bold text-purple-400">AED 11,250</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">Events & Activations</td>
                      <td className="py-3 px-4 text-right">AED 2,000</td>
                      <td className="py-3 px-4 text-right">AED 2,500</td>
                      <td className="py-3 px-4 text-right">AED 3,000</td>
                      <td className="py-3 px-4 text-right font-bold text-green-400">AED 7,500</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">Tools & Software</td>
                      <td className="py-3 px-4 text-right">AED 2,500</td>
                      <td className="py-3 px-4 text-right">AED 2,000</td>
                      <td className="py-3 px-4 text-right">AED 1,500</td>
                      <td className="py-3 px-4 text-right font-bold text-amber-400">AED 6,000</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">Contingency</td>
                      <td className="py-3 px-4 text-right">AED 1,500</td>
                      <td className="py-3 px-4 text-right">AED 1,500</td>
                      <td className="py-3 px-4 text-right">AED 2,250</td>
                      <td className="py-3 px-4 text-right font-bold text-slate-400">AED 5,250</td>
                    </tr>
                    <tr className="bg-[#c9a227]/10">
                      <td className="py-3 px-4 font-bold text-[#c9a227]">TOTAL</td>
                      <td className="py-3 px-4 text-right font-bold text-white">AED 22,000</td>
                      <td className="py-3 px-4 text-right font-bold text-white">AED 25,000</td>
                      <td className="py-3 px-4 text-right font-bold text-white">AED 28,000</td>
                      <td className="py-3 px-4 text-right font-bold text-[#c9a227]">AED 75,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* ROI Projections */}
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-6 border border-green-500/30">
              <h3 className="text-xl font-bold text-green-400 mb-6">ROI Projections (90 Days)</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green-400">25,000</div>
                  <div className="text-sm text-gray-400">Target Users</div>
                  <div className="text-xs text-gray-500 mt-1">AED 3 CPA</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-400">AED 50K</div>
                  <div className="text-sm text-gray-400">Target GMV</div>
                  <div className="text-xs text-gray-500 mt-1">AED 2 avg per user</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-purple-400">AED 7.5K</div>
                  <div className="text-sm text-gray-400">Expected Commission</div>
                  <div className="text-xs text-gray-500 mt-1">15% of GMV</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-[#c9a227]">0.1x</div>
                  <div className="text-sm text-gray-400">90-Day ROI</div>
                  <div className="text-xs text-gray-500 mt-1">Invest in growth</div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-[#c9a227]/10 rounded-lg">
                <p className="text-sm text-gray-300">
                  <strong className="text-[#c9a227]">Note:</strong> At this stage, marketing ROI will be negative.
                  The goal is user acquisition and brand building. True ROI comes from LTV over 12-24 months
                  (expected LTV: AED 150-300 per user).
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CHANNELS TAB */}
        {activeTab === 'channels' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Channel Prioritization Matrix</h2>
              <p className="text-gray-400">Focus resources on highest-impact channels first</p>
            </div>

            <div className="space-y-4">
              {channelMatrix.map((channel, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl border overflow-hidden ${
                    channel.priority <= 2 ? 'border-green-500/30 bg-green-500/5' :
                    channel.priority <= 4 ? 'border-blue-500/30 bg-blue-500/5' :
                    channel.priority <= 6 ? 'border-amber-500/30 bg-amber-500/5' :
                    'border-white/10 bg-white/5'
                  }`}
                >
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                        channel.priority <= 2 ? 'bg-green-500 text-white' :
                        channel.priority <= 4 ? 'bg-blue-500 text-white' :
                        channel.priority <= 6 ? 'bg-amber-500 text-black' :
                        'bg-gray-500 text-white'
                      }`}>
                        {channel.priority}
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{channel.channel}</h4>
                        <p className="text-sm text-gray-400">Launch: {channel.timeline} | Owner: {channel.owner}</p>
                      </div>
                    </div>
                    <div className="flex gap-6 text-sm">
                      <div className="text-center">
                        <div className="text-xs text-gray-500">Effort</div>
                        <div className={channel.effort === 'High' ? 'text-red-400' : channel.effort === 'Medium' ? 'text-amber-400' : 'text-green-400'}>
                          {channel.effort}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-500">Impact</div>
                        <div className={channel.impact === 'Very High' ? 'text-green-400' : channel.impact === 'High' ? 'text-blue-400' : 'text-amber-400'}>
                          {channel.impact}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-500">Cost</div>
                        <div className={channel.cost === 'High' ? 'text-red-400' : channel.cost === 'Medium' ? 'text-amber-400' : 'text-green-400'}>
                          {channel.cost}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 pb-4 grid md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-3">
                      <h5 className="text-xs text-gray-500 mb-2">TACTICS</h5>
                      <div className="flex flex-wrap gap-1">
                        {channel.tactics.map((tactic, tIdx) => (
                          <span key={tIdx} className="text-xs px-2 py-1 bg-white/10 rounded text-gray-300">
                            {tactic}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <h5 className="text-xs text-gray-500 mb-2">90-DAY KPIs</h5>
                      <div className="flex flex-wrap gap-1">
                        {channel.kpis.map((kpi, kIdx) => (
                          <span key={kIdx} className="text-xs px-2 py-1 bg-[#c9a227]/20 rounded text-[#c9a227]">
                            {kpi}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TEAM TAB */}
        {activeTab === 'team' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Marketing Team & Tech Stack</h2>
              <p className="text-gray-400">Current team and tools for execution</p>
            </div>

            {/* Team Structure */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Marketing Team Structure</h3>
              <div className="space-y-4">
                {teamStructure.map((member, idx) => (
                  <div
                    key={idx}
                    className={`rounded-xl p-4 border ${
                      member.status === 'hired' ? 'bg-green-500/10 border-green-500/30' :
                      member.status === 'to_hire' ? 'bg-amber-500/10 border-amber-500/30' :
                      'bg-gray-500/10 border-gray-500/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Users className={
                          member.status === 'hired' ? 'text-green-400' :
                          member.status === 'to_hire' ? 'text-amber-400' : 'text-gray-400'
                        } size={24} />
                        <div>
                          <h4 className="font-bold text-white">{member.role}</h4>
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            member.status === 'hired' ? 'bg-green-500/20 text-green-400' :
                            member.status === 'to_hire' ? 'bg-amber-500/20 text-amber-400' :
                            'bg-gray-500/20 text-gray-400'
                          }`}>
                            {member.status === 'hired' ? '✓ Hired' :
                             member.status === 'to_hire' ? 'To Hire Now' : 'Future Hire'}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-medium">{member.cost}</div>
                        <div className="text-xs text-gray-500">{member.hours}</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {member.responsibilities.map((resp, rIdx) => (
                        <span key={rIdx} className="text-xs px-2 py-1 bg-white/10 rounded text-gray-300">
                          {resp}
                        </span>
                      ))}
                    </div>
                    {member.trigger && (
                      <div className="mt-3 text-xs text-gray-500">
                        <AlertCircle size={12} className="inline mr-1" />
                        Trigger: {member.trigger}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Marketing Tech Stack</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {techStack.map((category, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-bold text-[#c9a227] mb-3">{category.category}</h4>
                    <div className="space-y-2">
                      {category.tools.map((tool, tIdx) => (
                        <div key={tIdx} className="flex items-center justify-between p-2 bg-white/5 rounded">
                          <div>
                            <span className="text-white font-medium">{tool.name}</span>
                            <span className="text-xs text-gray-500 ml-2">{tool.purpose}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-green-400">{tool.cost}</div>
                            <span className={`text-xs px-2 py-0.5 rounded ${
                              tool.priority === 'critical' ? 'bg-red-500/20 text-red-400' :
                              tool.priority === 'high' ? 'bg-amber-500/20 text-amber-400' :
                              'bg-gray-500/20 text-gray-400'
                            }`}>
                              {tool.priority}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* KPIs TAB */}
        {activeTab === 'kpis' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">KPI Dashboard & Tracking</h2>
              <p className="text-gray-400">All marketing metrics in one view</p>
            </div>

            {kpiCategories.map((category, idx) => (
              <div key={idx} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-[#c9a227] mb-4">{category.name} KPIs</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  {category.kpis.map((kpi, kIdx) => (
                    <div key={kIdx} className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-500">{kpi.period}</span>
                        <span className={`text-xs px-2 py-0.5 rounded ${getStatusColor(kpi.status)}`}>
                          {kpi.status}
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{kpi.target}</div>
                      <div className="text-sm text-gray-400">{kpi.metric}</div>
                      <div className="text-xs text-gray-500 mt-2">Current: {kpi.current}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CRISIS TAB */}
        {activeTab === 'crisis' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Crisis Communication Playbook</h2>
              <p className="text-gray-400">Response templates for common scenarios</p>
            </div>

            <div className="space-y-4">
              {crisisScenarios.map((scenario, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl border ${
                    scenario.severity === 'critical' ? 'border-red-500/30 bg-red-500/5' :
                    scenario.severity === 'high' ? 'border-amber-500/30 bg-amber-500/5' :
                    scenario.severity === 'medium' ? 'border-yellow-500/30 bg-yellow-500/5' :
                    'border-blue-500/30 bg-blue-500/5'
                  } p-6`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Shield className={
                        scenario.severity === 'critical' ? 'text-red-400' :
                        scenario.severity === 'high' ? 'text-amber-400' :
                        scenario.severity === 'medium' ? 'text-yellow-400' : 'text-blue-400'
                      } size={24} />
                      <h4 className="font-bold text-white text-lg">{scenario.scenario}</h4>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      scenario.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                      scenario.severity === 'high' ? 'bg-amber-500/20 text-amber-400' :
                      scenario.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {scenario.severity.toUpperCase()}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-sm font-bold text-gray-400 mb-2">IMMEDIATE ACTION</h5>
                      <p className="text-white">{scenario.response.immediate}</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-gray-400 mb-2">OWNER</h5>
                      <p className="text-white">{scenario.response.owner}</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h5 className="text-sm font-bold text-gray-400 mb-2">RESPONSE TEMPLATE</h5>
                    <div className="bg-white/10 rounded-lg p-4 text-gray-300 italic">
                      "{scenario.response.template}"
                    </div>
                  </div>

                  <div className="mt-4">
                    <h5 className="text-sm font-bold text-gray-400 mb-2">CHANNELS</h5>
                    <div className="flex flex-wrap gap-2">
                      {scenario.response.channels.map((channel, cIdx) => (
                        <span key={cIdx} className="text-xs px-2 py-1 bg-white/10 rounded text-gray-300">
                          {channel}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* General Guidelines */}
            <div className="bg-[#c9a227]/10 rounded-xl p-6 border border-[#c9a227]/30">
              <h3 className="text-xl font-bold text-[#c9a227] mb-4">General Crisis Guidelines</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-white mb-2">DO</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-green-400 mt-0.5" />
                      Respond quickly (within 1 hour for high severity)
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-green-400 mt-0.5" />
                      Acknowledge the issue and show empathy
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-green-400 mt-0.5" />
                      Take the conversation to private channels
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-green-400 mt-0.5" />
                      Document everything for future reference
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-green-400 mt-0.5" />
                      Escalate to leadership for critical issues
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">DO NOT</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <X size={16} className="text-red-400 mt-0.5" />
                      Delete negative comments (unless abusive)
                    </li>
                    <li className="flex items-start gap-2">
                      <X size={16} className="text-red-400 mt-0.5" />
                      Argue publicly or get defensive
                    </li>
                    <li className="flex items-start gap-2">
                      <X size={16} className="text-red-400 mt-0.5" />
                      Make promises you cannot keep
                    </li>
                    <li className="flex items-start gap-2">
                      <X size={16} className="text-red-400 mt-0.5" />
                      Ignore the issue hoping it goes away
                    </li>
                    <li className="flex items-start gap-2">
                      <X size={16} className="text-red-400 mt-0.5" />
                      Share sensitive information publicly
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <GlobalFooter />
    </div>
  );
}
