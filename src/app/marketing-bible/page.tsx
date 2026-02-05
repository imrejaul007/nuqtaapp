'use client';

import React, { useState, useEffect, Suspense, useCallback } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  ArrowLeft,
  Megaphone,
  Monitor,
  MapPin,
  Users,
  Camera,
  Calendar,
  Target,
  DollarSign,
  Check,
  Copy,
  ChevronDown,
  ChevronUp,
  Play,
  Instagram,
  Facebook,
  Youtube,
  Music2,
  MessageCircle,
  Mail,
  Smartphone,
  Radio,
  Tv,
  Newspaper,
  Building2,
  Bus,
  Car,
  Store,
  Coffee,
  ShoppingBag,
  GraduationCap,
  Plane,
  Train,
  CircleDot,
  Image,
  Video,
  FileText,
  Hash,
  Heart,
  Share2,
  TrendingUp,
  BarChart3,
  Clock,
  Zap,
  Star,
  Gift,
  Trophy,
  Sparkles,
  Globe,
  Mic,
  Film,
  Palette,
  PenTool,
  Layout,
  Eye,
  MousePointer,
  CreditCard,
  Percent,
  Type,
  Droplet,
  Square,
  Circle,
  AlertCircle,
  Shield,
  TestTube,
  Send,
  RefreshCw,
  Languages,
  Lightbulb,
  Handshake,
  AlertTriangle,
  PhoneCall,
  Repeat,
  Timer,
  Briefcase,
  Layers,
  Flag,
  Utensils,
  Scissors,
  Dumbbell,
  Stethoscope,
  ShoppingCart,
  Landmark,
  Building,
  UserPlus,
  Rocket,
  QrCode,
  Ticket,
  Music,
  Gamepad2,
  Clapperboard,
  Package,
  BadgeCheck,
  Award,
  Calculator,
  Bot,
  Headphones,
  Volume2,
  Settings
} from 'lucide-react';

// Component to handle URL params
function TabHandler({ onTabChange }: { onTabChange: (tab: string) => void }) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    const validTabs = ['overview', 'brand', 'content', 'topics', 'viral', 'online', 'offline', 'influencer', 'email', 'campaigns', 'kpis', 'templates', 'budget', 'series', 'growth', 'social', 'segments', 'brandmarketing', 'adscampaigns', 'mediahub', 'events', 'aicontent'];

    if (tabParam && validTabs.includes(tabParam)) {
      onTabChange(tabParam);
    }
  }, [searchParams, onTabChange]);

  return null;
}

export default function MarketingPlanPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const [activeContentPillar, setActiveContentPillar] = useState('all');
  const [activeMonth, setActiveMonth] = useState('march');

  // Memoized callback for tab changes from URL
  const handleTabChange = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Target },
    { id: 'brand', label: 'Brand Guidelines', icon: Palette },
    { id: 'content', label: 'Content Calendar', icon: Calendar },
    { id: 'topics', label: '200+ Topics', icon: Hash },
    { id: 'viral', label: 'Viral Hooks', icon: Zap },
    { id: 'online', label: 'Online Ads', icon: Monitor },
    { id: 'offline', label: 'Offline Ads', icon: MapPin },
    { id: 'influencer', label: 'Influencers', icon: Users },
    { id: 'email', label: 'Email Marketing', icon: Mail },
    { id: 'campaigns', label: 'Campaigns', icon: Megaphone },
    { id: 'kpis', label: 'KPIs & Testing', icon: BarChart3 },
    { id: 'templates', label: 'Templates', icon: FileText },
    { id: 'budget', label: 'Budget', icon: DollarSign },
    { id: 'series', label: 'Content Series', icon: Film },
    { id: 'growth', label: 'Growth Playbook', icon: TrendingUp },
    { id: 'social', label: 'Social & Community', icon: MessageCircle },
    { id: 'segments', label: 'Segmented Acquisition', icon: Layers },
    { id: 'brandmarketing', label: 'Brand Marketing', icon: Building2 },
    { id: 'adscampaigns', label: 'Ad Campaigns', icon: Rocket },
    { id: 'mediahub', label: 'Media Hub', icon: Video },
    { id: 'events', label: 'Events & Markets', icon: Trophy },
    { id: 'aicontent', label: 'AI Content', icon: Bot },
  ];

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Brand Colors
  const brandColors = {
    primary: { name: 'Nuqta Gold', hex: '#c9a227', rgb: '201, 162, 39', usage: 'Primary brand color, CTAs, highlights' },
    secondary: { name: 'Deep Navy', hex: '#0a1628', rgb: '10, 22, 40', usage: 'Background, text, headers' },
    accent1: { name: 'Royal Blue', hex: '#1e40af', rgb: '30, 64, 175', usage: 'Links, secondary actions' },
    accent2: { name: 'Success Green', hex: '#22c55e', rgb: '34, 197, 94', usage: 'Success states, confirmations' },
    accent3: { name: 'Alert Red', hex: '#ef4444', rgb: '239, 68, 68', usage: 'Errors, urgent notices' },
    neutral1: { name: 'Light Gray', hex: '#f3f4f6', rgb: '243, 244, 246', usage: 'Light backgrounds' },
    neutral2: { name: 'Medium Gray', hex: '#9ca3af', rgb: '156, 163, 175', usage: 'Secondary text, borders' },
  };

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* URL Tab Handler */}
      <Suspense fallback={null}>
        <TabHandler onTabChange={handleTabChange} />
      </Suspense>

      {/* Header */}
      <header className="bg-[#0a1628]/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-[#c9a227] transition-colors">
                <ArrowLeft size={20} />
                <span>Back</span>
              </Link>
              <div className="w-px h-6 bg-white/20" />
              <h1 className="text-xl font-bold text-[#c9a227]">Marketing Plan</h1>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Clock size={16} />
              <span>Launch: Feb 28, 2026</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 px-4 bg-gradient-to-b from-[#c9a227]/10 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#c9a227]/20 px-4 py-2 rounded-full mb-4">
            <Megaphone className="text-[#c9a227]" size={18} />
            <span className="text-[#c9a227] font-medium">Complete Marketing Playbook</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Marketing <span className="text-[#c9a227]">Plan</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to execute Nuqta's marketing: brand guidelines, online ads, offline campaigns,
            influencer partnerships, content calendar, and budget allocation.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="border-b border-white/10 sticky top-[73px] bg-[#0a1628]/95 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-1 py-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all text-sm ${
                  activeTab === tab.id
                    ? 'bg-[#c9a227] text-[#0a1628]'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Marketing Goals */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-[#c9a227] mb-6">H1 Marketing Goals</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { metric: '5,000', label: 'MAU Target', sub: 'Monthly Active Users' },
                  { metric: '<AED 5', label: 'Blended CAC', sub: 'Cost per acquisition' },
                  { metric: '100+', label: 'Merchants', sub: 'Partner stores' },
                  { metric: '25%', label: 'D30 Retention', sub: 'Monthly retention' },
                ].map((goal, idx) => (
                  <div key={idx} className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-3xl font-bold text-[#c9a227]">{goal.metric}</div>
                    <div className="font-medium">{goal.label}</div>
                    <div className="text-xs text-gray-500">{goal.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Marketing Mix Overview */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Online Ads',
                  icon: Monitor,
                  budget: '40%',
                  channels: ['Meta (FB/IG)', 'Google Ads', 'TikTok Ads', 'Snapchat'],
                  cardClass: 'bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-blue-500/30',
                  iconClass: 'text-blue-400',
                  dotClass: 'bg-blue-400',
                },
                {
                  title: 'Offline Ads',
                  icon: MapPin,
                  budget: '20%',
                  channels: ['Metro Stations', 'Bus Ads', 'Mall Kiosks', 'Flyers'],
                  cardClass: 'bg-gradient-to-br from-green-500/20 to-green-500/5 border-green-500/30',
                  iconClass: 'text-green-400',
                  dotClass: 'bg-green-400',
                },
                {
                  title: 'Influencer Marketing',
                  icon: Users,
                  budget: '25%',
                  channels: ['Nano (1K-10K)', 'Micro (10K-100K)', 'Macro (100K+)', 'Celebrities'],
                  cardClass: 'bg-gradient-to-br from-pink-500/20 to-pink-500/5 border-pink-500/30',
                  iconClass: 'text-pink-400',
                  dotClass: 'bg-pink-400',
                },
                {
                  title: 'Content Production',
                  icon: Camera,
                  budget: '10%',
                  channels: ['Reels/TikToks', 'Static Posts', 'Stories', 'UGC'],
                  cardClass: 'bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-purple-500/30',
                  iconClass: 'text-purple-400',
                  dotClass: 'bg-purple-400',
                },
                {
                  title: 'PR & Events',
                  icon: Newspaper,
                  budget: '5%',
                  channels: ['Press Releases', 'Launch Event', 'Media Outreach', 'Partnerships'],
                  cardClass: 'bg-gradient-to-br from-orange-500/20 to-orange-500/5 border-orange-500/30',
                  iconClass: 'text-orange-400',
                  dotClass: 'bg-orange-400',
                },
                {
                  title: 'Community',
                  icon: MessageCircle,
                  budget: '0%',
                  channels: ['WhatsApp Groups', 'Telegram', 'Discord', 'Facebook Groups'],
                  cardClass: 'bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border-cyan-500/30',
                  iconClass: 'text-cyan-400',
                  dotClass: 'bg-cyan-400',
                },
              ].map((channel, idx) => (
                <div key={idx} className={`${channel.cardClass} rounded-xl p-6 border`}>
                  <div className="flex items-center justify-between mb-4">
                    <channel.icon className={channel.iconClass} size={28} />
                    <span className={`${channel.iconClass} font-bold`}>{channel.budget}</span>
                  </div>
                  <h4 className="font-bold mb-2">{channel.title}</h4>
                  <ul className="space-y-1">
                    {channel.channels.map((c, cIdx) => (
                      <li key={cIdx} className="text-sm text-gray-400 flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 ${channel.dotClass} rounded-full`} />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Key Messages */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-[#c9a227] mb-4">Core Brand Messages</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Primary Taglines</h4>
                  <ul className="space-y-2">
                    {[
                      'Pay with Nuqta & Earn Cashback Instantly',
                      'Smart People Use Nuqta',
                      'Save More, Share More',
                      'Your Everyday Savings Platform',
                    ].map((tagline, idx) => (
                      <li key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <span className="text-gray-300">"{tagline}"</span>
                        <button
                          onClick={() => copyToClipboard(tagline, idx)}
                          className="text-gray-500 hover:text-[#c9a227]"
                        >
                          {copiedIndex === idx ? <Check size={16} /> : <Copy size={16} />}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Value Propositions</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-[#c9a227] mt-0.5" />
                      <span><strong className="text-white">Instant Cashback:</strong> Get rewards immediately, not points that expire</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-[#c9a227] mt-0.5" />
                      <span><strong className="text-white">Social Gifting:</strong> Share your rewards with friends and family</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-[#c9a227] mt-0.5" />
                      <span><strong className="text-white">100+ Partners:</strong> Use at cafes, restaurants, salons, and more</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-[#c9a227] mt-0.5" />
                      <span><strong className="text-white">UAE-Focused:</strong> Built for Dubai and the Emirates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Brand Guidelines Tab */}
        {activeTab === 'brand' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Brand <span className="text-[#c9a227]">Guidelines</span></h3>
              <p className="text-gray-400">Official brand standards for all marketing materials</p>
            </div>

            {/* Logo Guidelines */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Layout className="text-[#c9a227]" size={24} />
                <h4 className="text-lg font-bold">Logo Usage</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium mb-4 text-[#c9a227]">Primary Logo</h5>
                  <div className="bg-[#0a1628] border border-white/20 rounded-xl p-8 flex items-center justify-center mb-4">
                    <div className="text-4xl font-bold">
                      <span className="text-[#c9a227]">Nuqta</span>
                    </div>
                  </div>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-green-400 mt-1" />
                      <span>Use on dark backgrounds (#0a1628)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-green-400 mt-1" />
                      <span>Minimum size: 80px width for digital</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-green-400 mt-1" />
                      <span>Clear space: Equal to height of "N"</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-4 text-[#c9a227]">Logo Variations</h5>
                  <div className="space-y-4">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-center justify-center">
                      <div className="text-3xl font-bold text-[#0a1628]">Nuqta</div>
                    </div>
                    <div className="bg-[#c9a227] rounded-xl p-6 flex items-center justify-center">
                      <div className="text-3xl font-bold text-[#0a1628]">Nuqta</div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">Light version for dark backgrounds, dark version for light backgrounds</p>
                </div>
              </div>

              {/* Logo Don'ts */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h5 className="font-medium mb-4 text-red-400 flex items-center gap-2">
                  <AlertCircle size={16} />
                  Logo Don'ts
                </h5>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { issue: 'Don\'t stretch', desc: 'Maintain aspect ratio' },
                    { issue: 'Don\'t rotate', desc: 'Keep logo upright' },
                    { issue: 'Don\'t add effects', desc: 'No shadows, gradients' },
                    { issue: 'Don\'t change colors', desc: 'Use approved colors only' },
                  ].map((dont, idx) => (
                    <div key={idx} className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-center">
                      <div className="text-sm font-medium text-red-400">{dont.issue}</div>
                      <div className="text-xs text-gray-500">{dont.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Color Palette */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Droplet className="text-[#c9a227]" size={24} />
                <h4 className="text-lg font-bold">Color Palette</h4>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(brandColors).map(([key, color], idx) => (
                  <div key={key} className="bg-white/5 rounded-xl overflow-hidden">
                    <div
                      className="h-24 flex items-end p-3"
                      style={{ backgroundColor: color.hex }}
                    >
                      <span className={`text-xs font-mono ${color.hex === '#0a1628' || color.hex === '#1e40af' ? 'text-white' : 'text-black'}`}>
                        {color.hex}
                      </span>
                    </div>
                    <div className="p-4">
                      <div className="font-medium text-sm">{color.name}</div>
                      <div className="text-xs text-gray-500 mt-1">RGB: {color.rgb}</div>
                      <div className="text-xs text-gray-400 mt-2">{color.usage}</div>
                      <button
                        onClick={() => copyToClipboard(color.hex, idx + 500)}
                        className="mt-2 text-xs text-[#c9a227] hover:underline flex items-center gap-1"
                      >
                        {copiedIndex === idx + 500 ? <Check size={12} /> : <Copy size={12} />}
                        Copy hex
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Color Usage Rules */}
              <div className="mt-6 p-4 bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg">
                <h5 className="font-medium text-[#c9a227] mb-2">Color Usage Rules</h5>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• <strong>Nuqta Gold (#c9a227)</strong> should be used for all CTAs, buttons, and key highlights</li>
                  <li>• <strong>Deep Navy (#0a1628)</strong> is the primary background - maintains premium feel</li>
                  <li>• Never use more than 3 colors in a single piece of creative</li>
                  <li>• Gold should appear in every marketing material for brand consistency</li>
                </ul>
              </div>
            </div>

            {/* Typography */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Type className="text-[#c9a227]" size={24} />
                <h4 className="text-lg font-bold">Typography</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium mb-4 text-[#c9a227]">Primary Font: Inter</h5>
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-4xl font-bold mb-2">Aa Bb Cc 123</div>
                      <div className="text-sm text-gray-500">Bold (700) - Headlines, CTAs</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-semibold mb-2">Aa Bb Cc 123</div>
                      <div className="text-sm text-gray-500">Semi-Bold (600) - Subheadings</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-lg mb-2">Aa Bb Cc 123</div>
                      <div className="text-sm text-gray-500">Regular (400) - Body text</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-4 text-[#c9a227]">Type Scale</h5>
                  <div className="space-y-3">
                    {[
                      { name: 'Display', size: '48-64px', use: 'Hero headlines only' },
                      { name: 'H1', size: '36-40px', use: 'Page titles' },
                      { name: 'H2', size: '28-32px', use: 'Section headers' },
                      { name: 'H3', size: '20-24px', use: 'Subsection headers' },
                      { name: 'Body Large', size: '18px', use: 'Lead paragraphs' },
                      { name: 'Body', size: '16px', use: 'Default body text' },
                      { name: 'Small', size: '14px', use: 'Captions, labels' },
                      { name: 'Tiny', size: '12px', use: 'Legal, footnotes' },
                    ].map((type, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                        <div>
                          <span className="font-medium">{type.name}</span>
                          <span className="text-xs text-gray-500 ml-2">{type.size}</span>
                        </div>
                        <span className="text-xs text-gray-400">{type.use}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Style */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Image className="text-[#c9a227]" size={24} />
                <h4 className="text-lg font-bold">Visual Style</h4>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <h5 className="font-medium mb-3 text-[#c9a227]">Photography</h5>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• Bright, warm lighting</li>
                    <li>• Diverse UAE demographics</li>
                    <li>• Authentic moments, not staged</li>
                    <li>• Focus on payment/savings moments</li>
                    <li>• Show real merchants & locations</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h5 className="font-medium mb-3 text-[#c9a227]">Graphics & Icons</h5>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• Line icons, 2px stroke weight</li>
                    <li>• Rounded corners (8-16px radius)</li>
                    <li>• Subtle gradients okay</li>
                    <li>• Gold accents on key elements</li>
                    <li>• Clean, minimal compositions</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h5 className="font-medium mb-3 text-[#c9a227]">UI Elements</h5>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• Buttons: Rounded, gold fill</li>
                    <li>• Cards: Dark bg, subtle border</li>
                    <li>• Shadows: Soft, barely visible</li>
                    <li>• Animations: Smooth, 300ms</li>
                    <li>• Spacing: 8px grid system</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* UI/UX Guidelines */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Smartphone className="text-[#c9a227]" size={24} />
                <h4 className="text-lg font-bold">UI/UX Guidelines</h4>
              </div>

              {/* App Screens Overview */}
              <div className="mb-8">
                <h5 className="font-medium mb-4 text-[#c9a227]">Core App Screens</h5>
                <div className="grid md:grid-cols-5 gap-4">
                  {[
                    { screen: 'Home', desc: 'Balance, nearby merchants, quick actions', icon: '🏠' },
                    { screen: 'Explore', desc: 'Browse merchants, categories, deals', icon: '🔍' },
                    { screen: 'Scan & Pay', desc: 'QR scanner, payment flow', icon: '📱' },
                    { screen: 'Wallet', desc: 'Coins, transactions, gifting', icon: '💰' },
                    { screen: 'Profile', desc: 'Settings, history, referrals', icon: '👤' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-4 text-center">
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <div className="font-medium text-sm">{item.screen}</div>
                      <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Component Library */}
              <div className="mb-8">
                <h5 className="font-medium mb-4 text-[#c9a227]">Component Specifications</h5>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Buttons */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <h6 className="font-medium mb-3 flex items-center gap-2">
                      <MousePointer size={16} className="text-[#c9a227]" />
                      Buttons
                    </h6>
                    <div className="space-y-3">
                      <div className="flex items-center gap-4">
                        <button className="bg-[#c9a227] text-[#0a1628] px-6 py-3 rounded-xl font-semibold">Primary</button>
                        <div className="text-xs text-gray-400">
                          <p>bg: #c9a227, text: #0a1628</p>
                          <p>radius: 12px, padding: 12px 24px</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <button className="border-2 border-[#c9a227] text-[#c9a227] px-6 py-3 rounded-xl font-semibold">Secondary</button>
                        <div className="text-xs text-gray-400">
                          <p>border: 2px #c9a227, text: #c9a227</p>
                          <p>radius: 12px, transparent bg</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <button className="bg-white/10 text-white px-6 py-3 rounded-xl font-medium">Tertiary</button>
                        <div className="text-xs text-gray-400">
                          <p>bg: white/10, text: white</p>
                          <p>For less important actions</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cards */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <h6 className="font-medium mb-3 flex items-center gap-2">
                      <Square size={16} className="text-[#c9a227]" />
                      Cards
                    </h6>
                    <div className="space-y-3">
                      <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#c9a227]/20 rounded-lg flex items-center justify-center">
                            <Store size={20} className="text-[#c9a227]" />
                          </div>
                          <div>
                            <div className="font-medium">Merchant Card</div>
                            <div className="text-xs text-gray-500">15% cashback</div>
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-400">
                        <p>bg: white/5, border: white/10</p>
                        <p>radius: 12px, padding: 16px</p>
                        <p>icon container: 40x40px, radius: 8px</p>
                      </div>
                    </div>
                  </div>

                  {/* Input Fields */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <h6 className="font-medium mb-3 flex items-center gap-2">
                      <PenTool size={16} className="text-[#c9a227]" />
                      Input Fields
                    </h6>
                    <div className="space-y-3">
                      <div>
                        <label className="text-xs text-gray-400 mb-1 block">Email Address</label>
                        <div className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-gray-500">
                          you@example.com
                        </div>
                      </div>
                      <div className="text-xs text-gray-400">
                        <p>bg: white/5, border: white/20</p>
                        <p>focus border: #c9a227</p>
                        <p>radius: 12px, height: 48px</p>
                      </div>
                    </div>
                  </div>

                  {/* Badges & Tags */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <h6 className="font-medium mb-3 flex items-center gap-2">
                      <Star size={16} className="text-[#c9a227]" />
                      Badges & Tags
                    </h6>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-[#c9a227] text-[#0a1628] text-xs px-3 py-1 rounded-full font-medium">20% OFF</span>
                        <span className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full">Active</span>
                        <span className="bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full">New</span>
                        <span className="bg-purple-500/20 text-purple-400 text-xs px-3 py-1 rounded-full">VIP</span>
                      </div>
                      <div className="text-xs text-gray-400">
                        <p>Primary: gold bg, dark text</p>
                        <p>Status: color/20 bg, color text</p>
                        <p>radius: full (9999px), padding: 4px 12px</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Patterns */}
              <div className="mb-8">
                <h5 className="font-medium mb-4 text-[#c9a227]">Navigation & Layout</h5>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h6 className="font-medium mb-2">Bottom Navigation</h6>
                    <div className="bg-[#0a1628] border border-white/10 rounded-xl p-3 flex justify-around">
                      {['🏠', '🔍', '📱', '💰', '👤'].map((icon, idx) => (
                        <div key={idx} className={`text-center ${idx === 2 ? 'text-[#c9a227]' : 'text-gray-500'}`}>
                          <div className="text-xl">{icon}</div>
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-gray-400 mt-2">
                      <p>5 tabs, center scan prominent</p>
                      <p>Active: gold, Inactive: gray-500</p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h6 className="font-medium mb-2">Header Style</h6>
                    <div className="bg-[#0a1628] border border-white/10 rounded-xl p-3">
                      <div className="flex items-center justify-between">
                        <ArrowLeft size={20} className="text-gray-400" />
                        <span className="font-semibold">Screen Title</span>
                        <div className="w-5" />
                      </div>
                    </div>
                    <div className="text-xs text-gray-400 mt-2">
                      <p>Height: 56px, centered title</p>
                      <p>Back arrow left, actions right</p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h6 className="font-medium mb-2">Modal/Bottom Sheet</h6>
                    <div className="bg-white/10 border border-white/10 rounded-t-2xl p-4">
                      <div className="w-10 h-1 bg-gray-500 rounded-full mx-auto mb-3" />
                      <div className="text-sm font-medium text-center">Sheet Title</div>
                    </div>
                    <div className="text-xs text-gray-400 mt-2">
                      <p>Top radius: 24px, drag handle</p>
                      <p>Max height: 90% screen</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacing & Grid */}
              <div className="mb-8">
                <h5 className="font-medium mb-4 text-[#c9a227]">Spacing System</h5>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h6 className="font-medium mb-3">8px Grid</h6>
                    <div className="flex items-end gap-2 mb-4">
                      {[4, 8, 12, 16, 20, 24, 32, 40, 48].map((size, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                          <div
                            className="bg-[#c9a227]"
                            style={{ width: `${Math.min(size, 48)}px`, height: `${Math.min(size, 48)}px` }}
                          />
                          <span className="text-xs text-gray-500 mt-1">{size}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-gray-400">
                      <p>Base unit: 8px</p>
                      <p>Common: 8, 16, 24, 32, 48px</p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h6 className="font-medium mb-3">Container Padding</h6>
                    <ul className="text-sm text-gray-400 space-y-2">
                      <li className="flex justify-between">
                        <span>Screen horizontal</span>
                        <span className="text-[#c9a227]">16px</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Card internal</span>
                        <span className="text-[#c9a227]">16px</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Section gap</span>
                        <span className="text-[#c9a227]">24px</span>
                      </li>
                      <li className="flex justify-between">
                        <span>List item gap</span>
                        <span className="text-[#c9a227]">12px</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Interaction States */}
              <div className="mb-8">
                <h5 className="font-medium mb-4 text-[#c9a227]">Interaction States</h5>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { state: 'Default', bg: 'bg-[#c9a227]', desc: 'Normal state' },
                    { state: 'Hover', bg: 'bg-[#d4ad2e]', desc: 'Slightly lighter' },
                    { state: 'Pressed', bg: 'bg-[#a88820]', desc: 'Slightly darker' },
                    { state: 'Disabled', bg: 'bg-gray-600', desc: 'Gray, 50% opacity' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-4 text-center">
                      <div className={`${item.bg} w-full py-3 rounded-xl mb-2`}>
                        <span className="text-[#0a1628] font-medium">{item.state}</span>
                      </div>
                      <div className="text-xs text-gray-400">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Animation Guidelines */}
              <div className="mb-8">
                <h5 className="font-medium mb-4 text-[#c9a227]">Animation Guidelines</h5>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h6 className="font-medium mb-2">Duration</h6>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>Micro: 150ms (hover, focus)</li>
                      <li>Short: 200ms (toggles, fades)</li>
                      <li>Medium: 300ms (modals, slides)</li>
                      <li>Long: 500ms (page transitions)</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h6 className="font-medium mb-2">Easing</h6>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>Default: ease-out</li>
                      <li>Enter: ease-out</li>
                      <li>Exit: ease-in</li>
                      <li>Bounce: cubic-bezier</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h6 className="font-medium mb-2">Feedback</h6>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>Button press: scale(0.98)</li>
                      <li>Success: green checkmark</li>
                      <li>Error: shake + red highlight</li>
                      <li>Loading: gold spinner</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Accessibility */}
              <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg p-4">
                <h5 className="font-medium text-[#c9a227] mb-3">Accessibility Requirements</h5>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                  <ul className="space-y-1">
                    <li>• Minimum touch target: 44x44px</li>
                    <li>• Color contrast: 4.5:1 minimum</li>
                    <li>• Font size: 14px minimum</li>
                    <li>• Focus indicators: visible outline</li>
                  </ul>
                  <ul className="space-y-1">
                    <li>• Screen reader labels on all buttons</li>
                    <li>• Support for system font scaling</li>
                    <li>• Dark mode as default</li>
                    <li>• Haptic feedback on actions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Voice & Tone */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Mic className="text-[#c9a227]" size={24} />
                <h4 className="text-lg font-bold">Voice & Tone</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium mb-4 text-green-400">We Are</h5>
                  <div className="space-y-3">
                    {[
                      { trait: 'Friendly', desc: 'Approachable, like talking to a smart friend' },
                      { trait: 'Confident', desc: 'We know our product delivers value' },
                      { trait: 'Clear', desc: 'Simple words, no jargon' },
                      { trait: 'Empowering', desc: 'Help users feel smart about saving' },
                      { trait: 'Local', desc: 'UAE-focused, culturally aware' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg">
                        <Check size={16} className="text-green-400 mt-0.5" />
                        <div>
                          <span className="font-medium text-green-400">{item.trait}</span>
                          <span className="text-gray-400"> - {item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-4 text-red-400">We Are Not</h5>
                  <div className="space-y-3">
                    {[
                      { trait: 'Pushy', desc: 'No aggressive sales tactics' },
                      { trait: 'Corporate', desc: 'Avoid stiff, formal language' },
                      { trait: 'Complicated', desc: 'No financial jargon or buzzwords' },
                      { trait: 'Desperate', desc: 'No fake urgency or FOMO' },
                      { trait: 'Generic', desc: 'Not "yet another app"' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-red-500/10 rounded-lg">
                        <AlertCircle size={16} className="text-red-400 mt-0.5" />
                        <div>
                          <span className="font-medium text-red-400">{item.trait}</span>
                          <span className="text-gray-400"> - {item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sample Copy */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <h5 className="font-medium mb-4">Sample Copy Examples</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    <div className="text-xs text-green-400 mb-2">DO write like this:</div>
                    <p className="text-gray-300">"Get cashback instantly when you pay. No points, no waiting - real money back in your pocket."</p>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <div className="text-xs text-red-400 mb-2">DON'T write like this:</div>
                    <p className="text-gray-300">"Leverage our innovative rewards ecosystem to optimize your consumer spending patterns!"</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Brand Guidelines */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-purple-500/20 rounded-xl p-6 border border-[#c9a227]/30">
              <h4 className="text-lg font-bold mb-4">Social Media Brand Standards</h4>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { platform: 'Instagram', avatar: 'Gold logo on navy', bio: 'Save more. Share more. 💰', handle: '@nuqta.ae' },
                  { platform: 'TikTok', avatar: 'Gold logo on navy', bio: 'Making Dubai cheaper ✨', handle: '@nuqta.ae' },
                  { platform: 'Twitter/X', avatar: 'Gold logo on navy', bio: 'UAE\'s social rewards app', handle: '@NuqtaApp' },
                  { platform: 'LinkedIn', avatar: 'Gold logo on white', bio: 'The future of loyalty', handle: 'Nuqta' },
                ].map((social, idx) => (
                  <div key={idx} className="bg-white/10 rounded-lg p-4">
                    <div className="font-medium text-[#c9a227] mb-2">{social.platform}</div>
                    <ul className="text-xs text-gray-400 space-y-1">
                      <li><strong>Avatar:</strong> {social.avatar}</li>
                      <li><strong>Bio:</strong> {social.bio}</li>
                      <li><strong>Handle:</strong> {social.handle}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Asset Checklist */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-bold text-[#c9a227] mb-4">Brand Asset Checklist</h4>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { category: 'Logos', items: ['Primary logo (SVG, PNG)', 'White version', 'App icon (all sizes)', 'Favicon'] },
                  { category: 'Templates', items: ['Instagram post', 'Instagram story', 'TikTok thumbnail', 'Email header'] },
                  { category: 'Marketing', items: ['Pitch deck template', 'Flyer template', 'Business card', 'QR standee'] },
                ].map((group, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4">
                    <h5 className="font-medium mb-3">{group.category}</h5>
                    <ul className="space-y-2">
                      {group.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-center gap-2 text-sm text-gray-400">
                          <Square size={12} className="text-[#c9a227]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Online Ads Tab */}
        {activeTab === 'online' && (
          <div className="space-y-8">
            {/* Brand Guidelines Reminder */}
            <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <Palette className="text-[#c9a227] flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-[#c9a227]">Brand Guidelines for Online Ads</h4>
                  <ul className="text-sm text-gray-400 mt-2 space-y-1">
                    <li>• <strong>Colors:</strong> Always use Nuqta Gold (#c9a227) for CTAs, Navy (#0a1628) for backgrounds</li>
                    <li>• <strong>Logo:</strong> Include Nuqta logo in corner, minimum 10% of ad width</li>
                    <li>• <strong>Typography:</strong> Inter font, Bold for headlines, Regular for body</li>
                    <li>• <strong>Imagery:</strong> Bright, diverse UAE audience, authentic moments</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Meta Ads */}
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <button
                onClick={() => setExpandedSection(expandedSection === 'meta' ? null : 'meta')}
                className="w-full flex items-center justify-between p-6 hover:bg-white/5"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    <Facebook className="text-blue-400" size={24} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold">Meta Ads (Facebook & Instagram)</h3>
                    <p className="text-sm text-gray-400">Primary paid acquisition channel</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[#c9a227] font-bold">30% of budget</span>
                  {expandedSection === 'meta' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>
              {expandedSection === 'meta' && (
                <div className="p-6 border-t border-white/10 space-y-6">
                  {/* Creative Specs */}
                  <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-[#c9a227] mb-3">Meta Ads Brand Specs</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <strong className="text-white">Feed Video/Image:</strong>
                        <ul className="text-gray-400 mt-1">
                          <li>• 1080x1080px (1:1)</li>
                          <li>• Logo top-left corner</li>
                          <li>• Gold CTA button</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-white">Stories/Reels:</strong>
                        <ul className="text-gray-400 mt-1">
                          <li>• 1080x1920px (9:16)</li>
                          <li>• Logo at top, CTA at bottom</li>
                          <li>• Safe zone: 250px margins</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-white">Text Overlay:</strong>
                        <ul className="text-gray-400 mt-1">
                          <li>• Max 20% of image</li>
                          <li>• Inter Bold for headlines</li>
                          <li>• White or Gold text only</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Campaign Structure */}
                  <div>
                    <h4 className="font-semibold text-[#c9a227] mb-4">Campaign Structure</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        {
                          name: 'Awareness',
                          objective: 'Brand Awareness',
                          audience: 'Broad UAE, 18-45',
                          budget: 'AED 2,000/mo',
                          creative: 'Video ads, brand intro',
                        },
                        {
                          name: 'Consideration',
                          objective: 'App Installs',
                          audience: 'Lookalike 1-3%',
                          budget: 'AED 5,000/mo',
                          creative: 'Carousel, benefits focus',
                        },
                        {
                          name: 'Conversion',
                          objective: 'App Events',
                          audience: 'Retargeting, Engaged',
                          budget: 'AED 3,000/mo',
                          creative: 'Offer-specific, urgency',
                        },
                      ].map((campaign, idx) => (
                        <div key={idx} className="bg-white/5 rounded-lg p-4">
                          <div className="text-blue-400 font-semibold mb-2">{campaign.name}</div>
                          <ul className="space-y-1 text-sm text-gray-400">
                            <li><strong>Objective:</strong> {campaign.objective}</li>
                            <li><strong>Audience:</strong> {campaign.audience}</li>
                            <li><strong>Budget:</strong> {campaign.budget}</li>
                            <li><strong>Creative:</strong> {campaign.creative}</li>
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Audience Targeting */}
                  <div>
                    <h4 className="font-semibold text-[#c9a227] mb-4">Audience Targeting</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-lg p-4">
                        <h5 className="font-medium mb-2">Demographics</h5>
                        <ul className="text-sm text-gray-400 space-y-1">
                          <li>• Age: 18-45 (primary: 25-35)</li>
                          <li>• Location: Dubai, Abu Dhabi, Sharjah</li>
                          <li>• Language: English, Arabic, Hindi</li>
                          <li>• Income: Middle to High</li>
                        </ul>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <h5 className="font-medium mb-2">Interests</h5>
                        <ul className="text-sm text-gray-400 space-y-1">
                          <li>• Online shopping, Deals & Discounts</li>
                          <li>• Food & Dining, Coffee lovers</li>
                          <li>• Beauty & Wellness, Fitness</li>
                          <li>• Finance apps, Cashback apps</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Ad Formats */}
                  <div>
                    <h4 className="font-semibold text-[#c9a227] mb-4">Ad Formats & Specs</h4>
                    <div className="grid md:grid-cols-4 gap-4">
                      {[
                        { format: 'Feed Video', size: '1080x1080 / 1080x1920', duration: '15-30 sec' },
                        { format: 'Stories', size: '1080x1920', duration: '15 sec max' },
                        { format: 'Reels', size: '1080x1920', duration: '15-60 sec' },
                        { format: 'Carousel', size: '1080x1080', duration: '2-10 cards' },
                      ].map((ad, idx) => (
                        <div key={idx} className="bg-white/5 rounded-lg p-3 text-center">
                          <div className="font-medium text-sm">{ad.format}</div>
                          <div className="text-xs text-gray-500">{ad.size}</div>
                          <div className="text-xs text-blue-400">{ad.duration}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sample Ad Copy */}
                  <div>
                    <h4 className="font-semibold text-[#c9a227] mb-4">Sample Ad Copy</h4>
                    <div className="space-y-3">
                      {[
                        {
                          headline: 'Get 20% Cashback on Every Order',
                          body: 'Join 5,000+ smart shoppers in Dubai. Pay with Nuqta at 100+ cafes, restaurants & salons. Download free today!',
                          cta: 'Install Now',
                        },
                        {
                          headline: 'Your Coffee Just Got 20% Cheaper',
                          body: 'Why pay full price? Nuqta gives you instant cashback at your favorite cafes. No points, no waiting - real money back.',
                          cta: 'Get the App',
                        },
                      ].map((ad, idx) => (
                        <div key={idx} className="bg-white/5 rounded-lg p-4">
                          <div className="font-semibold text-white mb-1">{ad.headline}</div>
                          <div className="text-sm text-gray-400 mb-2">{ad.body}</div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">CTA: {ad.cta}</span>
                            <button onClick={() => copyToClipboard(`${ad.headline}\n\n${ad.body}`, idx + 100)} className="text-gray-500 hover:text-[#c9a227]">
                              {copiedIndex === idx + 100 ? <Check size={14} /> : <Copy size={14} />}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Google Ads */}
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <button
                onClick={() => setExpandedSection(expandedSection === 'google' ? null : 'google')}
                className="w-full flex items-center justify-between p-6 hover:bg-white/5"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-red-500/20 rounded-xl">
                    <Globe className="text-red-400" size={24} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold">Google Ads</h3>
                    <p className="text-sm text-gray-400">Search, Display, YouTube, App Campaigns</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[#c9a227] font-bold">25% of budget</span>
                  {expandedSection === 'google' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>
              {expandedSection === 'google' && (
                <div className="p-6 border-t border-white/10 space-y-6">
                  {/* Brand Specs for Google */}
                  <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-[#c9a227] mb-3">Google Ads Brand Specs</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <strong className="text-white">Display Ads:</strong>
                        <ul className="text-gray-400 mt-1">
                          <li>• Sizes: 300x250, 336x280, 728x90, 320x100</li>
                          <li>• Navy background, gold CTA</li>
                          <li>• Logo visible on all sizes</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-white">YouTube:</strong>
                        <ul className="text-gray-400 mt-1">
                          <li>• 1920x1080px (16:9)</li>
                          <li>• Logo watermark bottom-right</li>
                          <li>• Gold end card with CTA</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-white">Search Ads:</strong>
                        <ul className="text-gray-400 mt-1">
                          <li>• Use "Nuqta" in headlines</li>
                          <li>• Include "instant cashback"</li>
                          <li>• Dubai/UAE location terms</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Campaign Types */}
                  <div>
                    <h4 className="font-semibold text-[#c9a227] mb-4">Campaign Types</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        {
                          type: 'App Campaign (UAC)',
                          budget: 'AED 4,000/mo',
                          goal: 'App installs & in-app actions',
                          targeting: 'Machine learning optimized',
                        },
                        {
                          type: 'Search Ads',
                          budget: 'AED 2,000/mo',
                          goal: 'High-intent users',
                          targeting: 'Keywords: "cashback Dubai", "rewards app UAE"',
                        },
                        {
                          type: 'YouTube Ads',
                          budget: 'AED 1,500/mo',
                          goal: 'Brand awareness',
                          targeting: 'In-stream, bumper ads',
                        },
                        {
                          type: 'Display Network',
                          budget: 'AED 500/mo',
                          goal: 'Retargeting',
                          targeting: 'Website & app visitors',
                        },
                      ].map((campaign, idx) => (
                        <div key={idx} className="bg-white/5 rounded-lg p-4">
                          <div className="text-red-400 font-semibold mb-2">{campaign.type}</div>
                          <ul className="space-y-1 text-sm text-gray-400">
                            <li><strong>Budget:</strong> {campaign.budget}</li>
                            <li><strong>Goal:</strong> {campaign.goal}</li>
                            <li><strong>Targeting:</strong> {campaign.targeting}</li>
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Keywords */}
                  <div>
                    <h4 className="font-semibold text-[#c9a227] mb-4">Target Keywords</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'cashback app dubai', 'rewards app uae', 'save money dubai',
                        'restaurant deals dubai', 'cafe discounts uae', 'loyalty app',
                        'instant cashback', 'best deals dubai', 'food offers dubai',
                        'salon discount dubai', 'entertainment deals', 'nuqta app'
                      ].map((keyword, idx) => (
                        <span key={idx} className="px-3 py-1 bg-red-500/10 text-red-400 rounded-full text-sm">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* TikTok Ads */}
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <button
                onClick={() => setExpandedSection(expandedSection === 'tiktok' ? null : 'tiktok')}
                className="w-full flex items-center justify-between p-6 hover:bg-white/5"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-pink-500/20 rounded-xl">
                    <Music2 className="text-pink-400" size={24} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold">TikTok Ads</h3>
                    <p className="text-sm text-gray-400">Gen Z & Millennial focus</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[#c9a227] font-bold">10% of budget</span>
                  {expandedSection === 'tiktok' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>
              {expandedSection === 'tiktok' && (
                <div className="p-6 border-t border-white/10 space-y-6">
                  {/* TikTok Brand Specs */}
                  <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-[#c9a227] mb-3">TikTok Brand Specs</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-white">Video Requirements:</strong>
                        <ul className="text-gray-400 mt-1">
                          <li>• 1080x1920px (9:16) vertical only</li>
                          <li>• Native, authentic feel (not polished)</li>
                          <li>• Logo can be subtle or watermark</li>
                          <li>• Gold text overlays for key messages</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-white">Content Style:</strong>
                        <ul className="text-gray-400 mt-1">
                          <li>• Hook in first 3 seconds</li>
                          <li>• Trending sounds OK</li>
                          <li>• UGC-style performs best</li>
                          <li>• End with clear CTA</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-[#c9a227] mb-4">Ad Formats</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li className="flex items-start gap-2">
                          <Play size={14} className="text-pink-400 mt-1" />
                          <span><strong>In-Feed Ads:</strong> Native video ads in For You page</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Sparkles size={14} className="text-pink-400 mt-1" />
                          <span><strong>Spark Ads:</strong> Boost organic creator content</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Hash size={14} className="text-pink-400 mt-1" />
                          <span><strong>Hashtag Challenge:</strong> #NuqtaSavings challenge</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#c9a227] mb-4">Creative Guidelines</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Hook in first 3 seconds</li>
                        <li>• Native, authentic feel (not polished ads)</li>
                        <li>• Trending sounds and music</li>
                        <li>• UGC-style content performs best</li>
                        <li>• Vertical 9:16 format only</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Snapchat */}
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <button
                onClick={() => setExpandedSection(expandedSection === 'snap' ? null : 'snap')}
                className="w-full flex items-center justify-between p-6 hover:bg-white/5"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-yellow-500/20 rounded-xl">
                    <Camera className="text-yellow-400" size={24} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold">Snapchat Ads</h3>
                    <p className="text-sm text-gray-400">High engagement in UAE/GCC</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[#c9a227] font-bold">5% of budget</span>
                  {expandedSection === 'snap' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>
              {expandedSection === 'snap' && (
                <div className="p-6 border-t border-white/10">
                  {/* Snapchat Brand Specs */}
                  <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-[#c9a227] mb-3">Snapchat Brand Specs</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• <strong>Size:</strong> 1080x1920px (9:16)</li>
                      <li>• <strong>Duration:</strong> 3-10 seconds recommended</li>
                      <li>• <strong>Safe Zone:</strong> Keep key elements away from bottom 150px</li>
                      <li>• <strong>Audio:</strong> On by default, design for sound-on experience</li>
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-medium mb-2 text-yellow-400">Snap Ads</h5>
                      <p className="text-sm text-gray-400">Full-screen video ads between stories</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-medium mb-2 text-yellow-400">Story Ads</h5>
                      <p className="text-sm text-gray-400">Branded tile in Discover section</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-medium mb-2 text-yellow-400">AR Lenses</h5>
                      <p className="text-sm text-gray-400">Interactive branded filters (future)</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Offline Ads Tab */}
        {activeTab === 'offline' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Offline <span className="text-[#c9a227]">Advertising</span></h3>
              <p className="text-gray-400">Physical touchpoints across Dubai</p>
            </div>

            {/* Brand Guidelines Reminder */}
            <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <Palette className="text-[#c9a227] flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-[#c9a227]">Brand Guidelines for Offline Materials</h4>
                  <ul className="text-sm text-gray-400 mt-2 space-y-1">
                    <li>• <strong>Print Colors:</strong> Use CMYK: Gold (C:15 M:30 Y:90 K:0), Navy (C:95 M:85 Y:45 K:55)</li>
                    <li>• <strong>Minimum Logo Size:</strong> 25mm width for print materials</li>
                    <li>• <strong>QR Codes:</strong> Always include white quiet zone, minimum 2cm x 2cm</li>
                    <li>• <strong>Paper:</strong> Use matte or soft-touch lamination for premium feel</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Metro & Transport */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Train className="text-blue-400" size={28} />
                  <h4 className="text-lg font-bold">Metro & Transport</h4>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 mb-4">
                  <p className="text-xs text-blue-400"><strong>Brand Specs:</strong> High-contrast designs for quick viewing. Bold headlines, minimal text. QR code must be 10cm+ for scanning from distance.</p>
                </div>
                <ul className="space-y-3">
                  {[
                    { location: 'Metro Station Screens', cost: 'AED 15,000/mo', reach: '500K+ daily' },
                    { location: 'Metro Platform Pillars', cost: 'AED 8,000/mo', reach: '300K+ daily' },
                    { location: 'RTA Bus Wraps', cost: 'AED 5,000/bus/mo', reach: '50K+ per bus' },
                    { location: 'Taxi Back Screens', cost: 'AED 500/taxi/mo', reach: '10K+ per taxi' },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div>
                        <div className="font-medium">{item.location}</div>
                        <div className="text-xs text-gray-500">{item.reach}</div>
                      </div>
                      <span className="text-sm text-blue-400">{item.cost}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mall & Retail */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="text-purple-400" size={28} />
                  <h4 className="text-lg font-bold">Mall & Retail</h4>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3 mb-4">
                  <p className="text-xs text-purple-400"><strong>Brand Specs:</strong> Premium finish materials. Match mall aesthetic standards. Include app store logos and download CTA.</p>
                </div>
                <ul className="space-y-3">
                  {[
                    { location: 'Mall Digital Screens', cost: 'AED 10,000/mo', reach: '200K+ weekly' },
                    { location: 'Elevator Screens', cost: 'AED 3,000/mo', reach: '50K+ weekly' },
                    { location: 'Food Court Table Ads', cost: 'AED 2,000/mo', reach: '100K+ weekly' },
                    { location: 'Parking Lot Banners', cost: 'AED 1,500/mo', reach: '50K+ weekly' },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div>
                        <div className="font-medium">{item.location}</div>
                        <div className="text-xs text-gray-500">{item.reach}</div>
                      </div>
                      <span className="text-sm text-purple-400">{item.cost}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Print & Flyers */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="text-orange-400" size={28} />
                  <h4 className="text-lg font-bold">Print & Flyers</h4>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-3 mb-4">
                  <p className="text-xs text-orange-400"><strong>Brand Specs:</strong> A5 or A6 size. 300gsm card stock. Matte lamination. Double-sided with QR code prominent on front.</p>
                </div>
                <ul className="space-y-3">
                  {[
                    { location: 'Flyer Distribution (10K)', cost: 'AED 2,000', reach: '10K households' },
                    { location: 'Partner Store Checkout', cost: 'AED 0 (partner)', reach: 'All transactions' },
                    { location: 'University Notice Boards', cost: 'AED 500/uni', reach: '5K+ students' },
                    { location: 'Gym/Salon Displays', cost: 'AED 0 (partner)', reach: '1K+ per location' },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div>
                        <div className="font-medium">{item.location}</div>
                        <div className="text-xs text-gray-500">{item.reach}</div>
                      </div>
                      <span className="text-sm text-orange-400">{item.cost}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Events & Activations */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Trophy className="text-green-400" size={28} />
                  <h4 className="text-lg font-bold">Events & Activations</h4>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 mb-4">
                  <p className="text-xs text-green-400"><strong>Brand Specs:</strong> Booth design in navy with gold accents. Staff in branded polo shirts. Roll-up banners, tablecloth, and iPad stands all branded.</p>
                </div>
                <ul className="space-y-3">
                  {[
                    { location: 'Global Village Booth', cost: 'AED 50,000/season', reach: '100K+ visitors' },
                    { location: 'University Fairs', cost: 'AED 2,000/event', reach: '2K+ students' },
                    { location: 'Food Festivals', cost: 'AED 5,000/event', reach: '10K+ visitors' },
                    { location: 'Launch Party', cost: 'AED 20,000', reach: '500 influencers/VIPs' },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div>
                        <div className="font-medium">{item.location}</div>
                        <div className="text-xs text-gray-500">{item.reach}</div>
                      </div>
                      <span className="text-sm text-green-400">{item.cost}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Partner Store Branding */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-purple-500/20 rounded-xl p-6 border border-[#c9a227]/30">
              <h4 className="text-lg font-bold mb-4">Partner Store Branding (FREE)</h4>
              <div className="bg-white/10 rounded-lg p-4 mb-4">
                <h5 className="font-medium text-[#c9a227] mb-2">In-Store Branding Kit Specs</h5>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• <strong>QR Board:</strong> A4 size, 5mm forex board, wall-mounted or counter stand</li>
                  <li>• <strong>Wall Sticker:</strong> Vinyl, 15cm diameter, "We Accept Nuqta"</li>
                  <li>• <strong>Table Tent:</strong> A6 size, 300gsm, matte lamination, bi-fold</li>
                  <li>• <strong>Outdoor Circle:</strong> 30cm diameter, weatherproof vinyl</li>
                </ul>
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { item: 'QR Payment Board', desc: '"Scan to Pay & Earn"' },
                  { item: 'Wall Stickers', desc: '"We Accept Nuqta"' },
                  { item: 'Table Tents', desc: 'Counter displays' },
                  { item: 'Outdoor Circle', desc: 'Shop entrance signage' },
                ].map((brand, idx) => (
                  <div key={idx} className="bg-white/10 rounded-lg p-4 text-center">
                    <Store className="mx-auto text-[#c9a227] mb-2" size={24} />
                    <div className="font-medium text-sm">{brand.item}</div>
                    <div className="text-xs text-gray-500">{brand.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Influencer Tab */}
        {activeTab === 'influencer' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Influencer <span className="text-[#c9a227]">Marketing</span></h3>
              <p className="text-gray-400">Tiered creator partnerships for authentic reach</p>
            </div>

            {/* Brand Guidelines for Influencers */}
            <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <Palette className="text-[#c9a227] flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-[#c9a227]">Brand Guidelines for Influencer Content</h4>
                  <ul className="text-sm text-gray-400 mt-2 space-y-1">
                    <li>• <strong>Pronunciation:</strong> "Nook-ta" (Arabic for "point/dot")</li>
                    <li>• <strong>Key phrase:</strong> Always say "instant cashback" not "points" or "rewards"</li>
                    <li>• <strong>App screens:</strong> Show the gold & navy UI when featuring the app</li>
                    <li>• <strong>Hashtags:</strong> Must include #Nuqta and #PayWithNuqta</li>
                    <li>• <strong>Disclosure:</strong> Must include #ad or #sponsored per UAE regulations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Influencer Tiers */}
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  tier: 'Nano',
                  followers: '1K - 10K',
                  cost: 'Barter only',
                  engagement: '5-10%',
                  quantity: '50+ creators',
                  deliverables: '1 Reel + 2 Stories',
                  benefits: 'High engagement, authentic feel, cost-effective',
                  cardClass: 'bg-gradient-to-br from-green-500/20 to-green-500/5 border-green-500/30',
                  textClass: 'text-green-400',
                },
                {
                  tier: 'Micro',
                  followers: '10K - 100K',
                  cost: 'AED 500-2,000',
                  engagement: '3-5%',
                  quantity: '20+ creators',
                  deliverables: '1 Reel + 3 Stories + Feed Post',
                  benefits: 'Niche authority, strong trust, good reach',
                  cardClass: 'bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-blue-500/30',
                  textClass: 'text-blue-400',
                },
                {
                  tier: 'Macro',
                  followers: '100K - 500K',
                  cost: 'AED 2,000-10,000',
                  engagement: '2-3%',
                  quantity: '5-10 creators',
                  deliverables: 'Full campaign package',
                  benefits: 'Mass awareness, brand credibility',
                  cardClass: 'bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-purple-500/30',
                  textClass: 'text-purple-400',
                },
                {
                  tier: 'Mega/Celebrity',
                  followers: '500K+',
                  cost: 'AED 10,000+',
                  engagement: '1-2%',
                  quantity: '1-2 creators',
                  deliverables: 'Brand ambassador',
                  benefits: 'Massive reach, PR value',
                  cardClass: 'bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-amber-500/30',
                  textClass: 'text-amber-400',
                },
              ].map((tier, idx) => (
                <div key={idx} className={`${tier.cardClass} rounded-xl p-6 border`}>
                  <div className={`${tier.textClass} font-bold text-lg mb-1`}>{tier.tier}</div>
                  <div className="text-sm text-gray-400 mb-4">{tier.followers} followers</div>
                  <ul className="space-y-2 text-sm">
                    <li><strong className="text-gray-300">Cost:</strong> <span className="text-gray-400">{tier.cost}</span></li>
                    <li><strong className="text-gray-300">Engagement:</strong> <span className="text-gray-400">{tier.engagement}</span></li>
                    <li><strong className="text-gray-300">Target:</strong> <span className="text-gray-400">{tier.quantity}</span></li>
                    <li><strong className="text-gray-300">Deliverables:</strong> <span className="text-gray-400">{tier.deliverables}</span></li>
                  </ul>
                  <div className={`mt-4 text-xs ${tier.textClass}`}>{tier.benefits}</div>
                </div>
              ))}
            </div>

            {/* Influencer Categories */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-bold text-[#c9a227] mb-4">Target Influencer Categories</h4>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { category: 'Food & Dining', icon: Coffee, examples: 'Food bloggers, restaurant reviewers' },
                  { category: 'Lifestyle', icon: Heart, examples: 'Daily life, Dubai living, expat life' },
                  { category: 'Beauty & Fashion', icon: Sparkles, examples: 'Makeup artists, stylists' },
                  { category: 'Fitness & Wellness', icon: Zap, examples: 'Gym trainers, yoga instructors' },
                  { category: 'Finance & Deals', icon: DollarSign, examples: 'Money saving tips, deal hunters' },
                  { category: 'Family & Parenting', icon: Users, examples: 'Moms, family activities' },
                ].map((cat, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                    <cat.icon className="text-[#c9a227]" size={20} />
                    <div>
                      <div className="font-medium">{cat.category}</div>
                      <div className="text-xs text-gray-500">{cat.examples}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Campaign Brief Template */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-bold text-[#c9a227] mb-4">Campaign Brief Template</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium mb-2">Key Messages</h5>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Mention "instant cashback" (not points)</li>
                      <li>• Show the app and QR payment flow</li>
                      <li>• Highlight the savings amount</li>
                      <li>• Include download CTA</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Required Hashtags</h5>
                    <div className="flex flex-wrap gap-2">
                      {['#Nuqta', '#NuqtaSavings', '#PayWithNuqta', '#DubaiDeals', '#CashbackDubai'].map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-[#c9a227]/20 text-[#c9a227] rounded text-xs">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Brand Assets to Provide</h5>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Logo files (PNG with transparency)</li>
                      <li>• App screenshots</li>
                      <li>• Color codes (#c9a227, #0a1628)</li>
                      <li>• Sample captions</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium mb-2 text-green-400">Do's</h5>
                    <ul className="text-sm text-green-400 space-y-1">
                      <li>✓ Authentic, personal experience</li>
                      <li>✓ Show real transaction at partner</li>
                      <li>✓ Natural integration</li>
                      <li>✓ Disclose partnership (#ad)</li>
                      <li>✓ Tag @nuqta.ae</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2 text-red-400">Don'ts</h5>
                    <ul className="text-sm text-red-400 space-y-1">
                      <li>✗ Script reading</li>
                      <li>✗ Fake enthusiasm</li>
                      <li>✗ Competitor mentions</li>
                      <li>✗ Misleading claims</li>
                      <li>✗ Alter logo or brand colors</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Content Calendar Tab - COMPREHENSIVE */}
        {activeTab === 'content' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Content <span className="text-[#c9a227]">Calendar</span></h3>
              <p className="text-gray-400">Complete 6-month content strategy with daily posting schedule</p>
            </div>

            {/* Month Selector */}
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {[
                { id: 'march', label: 'March 2026', theme: 'Launch Month' },
                { id: 'april', label: 'April 2026', theme: 'Ramadan/Eid' },
                { id: 'may', label: 'May 2026', theme: 'Growth Phase' },
                { id: 'june', label: 'June 2026', theme: 'Summer Push' },
                { id: 'july', label: 'July 2026', theme: 'Engagement' },
                { id: 'august', label: 'August 2026', theme: 'Scale' },
              ].map((month) => (
                <button
                  key={month.id}
                  onClick={() => setActiveMonth(month.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeMonth === month.id
                      ? 'bg-[#c9a227] text-[#0a1628]'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  <div>{month.label}</div>
                  <div className="text-xs opacity-70">{month.theme}</div>
                </button>
              ))}
            </div>

            {/* Content Pillars Overview */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-bold text-[#c9a227] mb-4">6 Content Pillars Strategy</h4>
              <div className="grid md:grid-cols-6 gap-4">
                {[
                  { pillar: 'Educational', pct: '25%', color: 'blue', icon: GraduationCap, examples: 'Money tips, app guides, savings hacks' },
                  { pillar: 'Promotional', pct: '20%', color: 'green', icon: Gift, examples: 'Deals, new partners, offers' },
                  { pillar: 'Entertainment', pct: '20%', color: 'pink', icon: Sparkles, examples: 'Memes, trends, relatable content' },
                  { pillar: 'Social Proof', pct: '15%', color: 'amber', icon: Star, examples: 'Reviews, testimonials, UGC' },
                  { pillar: 'Community', pct: '10%', color: 'purple', icon: Users, examples: 'User features, polls, Q&A' },
                  { pillar: 'Behind Scenes', pct: '10%', color: 'cyan', icon: Film, examples: 'Team, culture, building Nuqta' },
                ].map((p, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4 text-center border border-white/10 hover:border-[#c9a227]/50 transition-colors cursor-pointer">
                    <p.icon className="mx-auto text-[#c9a227] mb-2" size={24} />
                    <div className="font-bold text-sm">{p.pillar}</div>
                    <div className="text-[#c9a227] font-semibold text-lg">{p.pct}</div>
                    <div className="text-xs text-gray-500 mt-1">{p.examples}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* March 2026 - Launch Month Calendar */}
            {activeMonth === 'march' && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-[#c9a227]/20 to-purple-500/20 rounded-xl p-6 border border-[#c9a227]/30">
                  <h4 className="text-xl font-bold mb-2">March 2026: <span className="text-[#c9a227]">LAUNCH MONTH</span></h4>
                  <p className="text-gray-400">Focus: Brand awareness, app downloads, first transactions. Goal: 1,000 users</p>
                </div>

                {/* Week 1: Feb 28 - Mar 6 */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#c9a227]/20 text-[#c9a227] px-3 py-1 rounded-full text-sm font-bold">WEEK 1</div>
                    <span className="text-gray-400">Feb 28 - Mar 6 | Theme: LAUNCH BLITZ</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-2 px-2 w-20">Day</th>
                          <th className="text-left py-2 px-2">Instagram Feed</th>
                          <th className="text-left py-2 px-2">Reels/TikTok</th>
                          <th className="text-left py-2 px-2">Stories</th>
                          <th className="text-left py-2 px-2">Twitter/X</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-400">
                        <tr className="border-b border-white/5">
                          <td className="py-3 px-2 font-medium text-[#c9a227]">Sat 28</td>
                          <td className="py-3 px-2">"We're LIVE!" announcement carousel</td>
                          <td className="py-3 px-2">Launch reveal video with confetti</td>
                          <td className="py-3 px-2">Countdown + behind scenes</td>
                          <td className="py-3 px-2">Launch thread + pinned tweet</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-3 px-2 font-medium text-white">Sun 1</td>
                          <td className="py-3 px-2">"How Nuqta works" infographic</td>
                          <td className="py-3 px-2">POV: First time using Nuqta</td>
                          <td className="py-3 px-2">App walkthrough</td>
                          <td className="py-3 px-2">Feature highlight tweets</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-3 px-2 font-medium text-white">Mon 2</td>
                          <td className="py-3 px-2">Partner spotlight #1</td>
                          <td className="py-3 px-2">"Watch me save AED 50" at cafe</td>
                          <td className="py-3 px-2">Poll: Favorite coffee spot?</td>
                          <td className="py-3 px-2">Partner announcement</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-3 px-2 font-medium text-white">Tue 3</td>
                          <td className="py-3 px-2">"5 reasons to download Nuqta"</td>
                          <td className="py-3 px-2">Trending sound + savings flex</td>
                          <td className="py-3 px-2">Q&A: Ask us anything</td>
                          <td className="py-3 px-2">Benefits thread</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-3 px-2 font-medium text-white">Wed 4</td>
                          <td className="py-3 px-2">Referral program launch</td>
                          <td className="py-3 px-2">"Give AED 10, Get AED 10" explainer</td>
                          <td className="py-3 px-2">Share your referral link tutorial</td>
                          <td className="py-3 px-2">Referral tips</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-3 px-2 font-medium text-white">Thu 5</td>
                          <td className="py-3 px-2">User testimonial #1</td>
                          <td className="py-3 px-2">First user savings reveal</td>
                          <td className="py-3 px-2">Repost UGC</td>
                          <td className="py-3 px-2">User shoutout</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-2 font-medium text-white">Fri 6</td>
                          <td className="py-3 px-2">Weekend deals roundup</td>
                          <td className="py-3 px-2">"My weekend plans with Nuqta"</td>
                          <td className="py-3 px-2">Weekend poll + deals</td>
                          <td className="py-3 px-2">Meme: Friday savings mood</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Week 2: Mar 7-13 */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-bold">WEEK 2</div>
                    <span className="text-gray-400">Mar 7-13 | Theme: EDUCATION & VALUE</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-2 px-2 w-20">Day</th>
                          <th className="text-left py-2 px-2">Instagram Feed</th>
                          <th className="text-left py-2 px-2">Reels/TikTok</th>
                          <th className="text-left py-2 px-2">Stories</th>
                          <th className="text-left py-2 px-2">Twitter/X</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-400">
                        <tr className="border-b border-white/5">
                          <td className="py-3 px-2 font-medium text-white">Sat 7</td>
                          <td className="py-3 px-2">"How to maximize cashback" carousel</td>
                          <td className="py-3 px-2">Money saving hacks part 1</td>
                          <td className="py-3 px-2">Weekly savings goal challenge</td>
                          <td className="py-3 px-2">Tips thread</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-3 px-2 font-medium text-white">Sun 8</td>
                          <td className="py-3 px-2">Partner spotlight #2 (salon)</td>
                          <td className="py-3 px-2">Salon visit + cashback reveal</td>
                          <td className="py-3 px-2">Beauty deals of the week</td>
                          <td className="py-3 px-2">Partner feature</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-3 px-2 font-medium text-white">Mon 9</td>
                          <td className="py-3 px-2">"Nuqta vs Credit Card rewards" comparison</td>
                          <td className="py-3 px-2">POV: 2% vs 10% cashback</td>
                          <td className="py-3 px-2">Poll: How much you save monthly?</td>
                          <td className="py-3 px-2">Comparison stats</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-3 px-2 font-medium text-white">Tue 10</td>
                          <td className="py-3 px-2">"Gift coins to friends" tutorial</td>
                          <td className="py-3 px-2">Surprising my friend with coins</td>
                          <td className="py-3 px-2">Gifting feature walkthrough</td>
                          <td className="py-3 px-2">Gift feature announcement</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-3 px-2 font-medium text-white">Wed 11</td>
                          <td className="py-3 px-2">User success story #2</td>
                          <td className="py-3 px-2">"I saved AED 200 this week"</td>
                          <td className="py-3 px-2">UGC reposts</td>
                          <td className="py-3 px-2">User testimonial</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-3 px-2 font-medium text-white">Thu 12</td>
                          <td className="py-3 px-2">"Best cafes with Nuqta" guide</td>
                          <td className="py-3 px-2">Cafe hop challenge</td>
                          <td className="py-3 px-2">Rate these cafes</td>
                          <td className="py-3 px-2">Cafe recommendations</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-2 font-medium text-white">Fri 13</td>
                          <td className="py-3 px-2">Meme: "When you see 10% cashback"</td>
                          <td className="py-3 px-2">Relatable savings content</td>
                          <td className="py-3 px-2">Friday vibes + deals</td>
                          <td className="py-3 px-2">Friday meme</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Week 3 & 4 Summary */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-bold">WEEK 3</div>
                      <span className="text-gray-400">Mar 14-20 | Theme: SOCIAL PROOF</span>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Daily user testimonials & UGC</li>
                      <li>• "Week 2 savings reveal" compilation</li>
                      <li>• Influencer collaboration posts</li>
                      <li>• Partner reviews & ratings</li>
                      <li>• Community milestones (500 users!)</li>
                      <li>• "Real people, real savings" campaign</li>
                      <li>• Behind-the-scenes: Building Nuqta</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-bold">WEEK 4</div>
                      <span className="text-gray-400">Mar 21-31 | Theme: RAMADAN PREP</span>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Ramadan countdown content</li>
                      <li>• "Iftar deals coming soon" teasers</li>
                      <li>• Gift coins for Ramadan giving</li>
                      <li>• Month 1 community celebration</li>
                      <li>• Top savers leaderboard</li>
                      <li>• March recap: Total savings</li>
                      <li>• Preview: April Ramadan specials</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* April 2026 - Ramadan/Eid */}
            {activeMonth === 'april' && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-500/30">
                  <h4 className="text-xl font-bold mb-2">April 2026: <span className="text-green-400">RAMADAN & EID</span></h4>
                  <p className="text-gray-400">Focus: Iftar deals, charity gifting, Eid celebrations. Goal: 2,500 users</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h5 className="font-bold text-[#c9a227] mb-4">Ramadan Content Themes</h5>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                        <div><strong className="text-white">Iftar Deals:</strong> <span className="text-gray-400">Daily partner iftar specials, best iftar spots with cashback</span></div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                        <div><strong className="text-white">Suhoor Savings:</strong> <span className="text-gray-400">Late night cafe deals, 24hr restaurant partners</span></div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                        <div><strong className="text-white">Charity Gifting:</strong> <span className="text-gray-400">Gift coins to those in need, Zakat-friendly messaging</span></div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                        <div><strong className="text-white">Family Moments:</strong> <span className="text-gray-400">Group dining deals, family-friendly partners</span></div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                        <div><strong className="text-white">Ramadan Countdown:</strong> <span className="text-gray-400">Daily tips, daily deals, community countdown</span></div>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h5 className="font-bold text-[#c9a227] mb-4">Eid Content Themes</h5>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                        <div><strong className="text-white">Eid Mubarak:</strong> <span className="text-gray-400">Celebration posts, community wishes</span></div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                        <div><strong className="text-white">Eid Shopping:</strong> <span className="text-gray-400">Fashion, jewelry, gifts with cashback</span></div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                        <div><strong className="text-white">Eid Gifting:</strong> <span className="text-gray-400">"Send Eid coins to family" campaign</span></div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                        <div><strong className="text-white">Eid Brunch:</strong> <span className="text-gray-400">Best Eid brunch spots, cafe deals</span></div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                        <div><strong className="text-white">Post-Eid:</strong> <span className="text-gray-400">Back to routine savings, weekly recap</span></div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Sample Ramadan Week */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h5 className="font-bold text-[#c9a227] mb-4">Sample Ramadan Week Schedule</h5>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-2 px-2">Time</th>
                          <th className="text-left py-2 px-2">Content Type</th>
                          <th className="text-left py-2 px-2">Platform</th>
                          <th className="text-left py-2 px-2">Example</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-400">
                        <tr className="border-b border-white/5">
                          <td className="py-3 px-2 font-medium text-white">5:00 PM</td>
                          <td className="py-3 px-2">Iftar Countdown</td>
                          <td className="py-3 px-2">Stories</td>
                          <td className="py-3 px-2">"2 hours to Iftar! Here's today's top deal..."</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-3 px-2 font-medium text-white">6:30 PM</td>
                          <td className="py-3 px-2">Iftar Partner Feature</td>
                          <td className="py-3 px-2">Feed + Reel</td>
                          <td className="py-3 px-2">Restaurant spotlight with iftar buffet deal</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-3 px-2 font-medium text-white">9:00 PM</td>
                          <td className="py-3 px-2">Evening Entertainment</td>
                          <td className="py-3 px-2">TikTok</td>
                          <td className="py-3 px-2">Relatable Ramadan content, trending sounds</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-3 px-2 font-medium text-white">11:00 PM</td>
                          <td className="py-3 px-2">Late Night Deals</td>
                          <td className="py-3 px-2">Stories</td>
                          <td className="py-3 px-2">24hr cafe partners, dessert spots</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-2 font-medium text-white">3:00 AM</td>
                          <td className="py-3 px-2">Suhoor Reminder</td>
                          <td className="py-3 px-2">Stories</td>
                          <td className="py-3 px-2">"Suhoor time! Get cashback at these spots"</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* May 2026 - Growth */}
            {activeMonth === 'may' && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl p-6 border border-blue-500/30">
                  <h4 className="text-xl font-bold mb-2">May 2026: <span className="text-blue-400">GROWTH PHASE</span></h4>
                  <p className="text-gray-400">Focus: User acquisition, merchant expansion, viral campaigns. Goal: 3,500 users</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h5 className="font-bold text-[#c9a227] mb-4">May Campaign Themes</h5>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { week: 'Week 1', theme: 'Referral Challenge', desc: 'Top referrers win AED 1000' },
                      { week: 'Week 2', theme: 'Partner Marathon', desc: '10 new partners in 10 days' },
                      { week: 'Week 3', theme: 'Savings Olympics', desc: 'Who can save the most?' },
                      { week: 'Week 4', theme: 'Summer Preview', desc: 'Beach, brunch, beauty deals' },
                    ].map((w, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-4">
                        <div className="text-blue-400 font-bold text-sm">{w.week}</div>
                        <div className="font-medium mt-1">{w.theme}</div>
                        <div className="text-xs text-gray-500">{w.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* June/July/August summaries */}
            {(activeMonth === 'june' || activeMonth === 'july' || activeMonth === 'august') && (
              <div className="space-y-6">
                <div className={`bg-gradient-to-r ${activeMonth === 'june' ? 'from-orange-500/20 to-red-500/20 border-orange-500/30' : activeMonth === 'july' ? 'from-purple-500/20 to-pink-500/20 border-purple-500/30' : 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30'} rounded-xl p-6 border`}>
                  <h4 className="text-xl font-bold mb-2">
                    {activeMonth === 'june' && <>June 2026: <span className="text-orange-400">SUMMER PUSH</span></>}
                    {activeMonth === 'july' && <>July 2026: <span className="text-purple-400">ENGAGEMENT</span></>}
                    {activeMonth === 'august' && <>August 2026: <span className="text-emerald-400">SCALE</span></>}
                  </h4>
                  <p className="text-gray-400">
                    {activeMonth === 'june' && 'Focus: Summer activities, travel, entertainment. Goal: 4,000 users'}
                    {activeMonth === 'july' && 'Focus: Community building, loyalty, retention. Goal: 4,500 users'}
                    {activeMonth === 'august' && 'Focus: Back to school, Q3 prep, scaling. Goal: 5,000 users'}
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h5 className="font-bold text-[#c9a227] mb-4">Monthly Focus Areas</h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    {activeMonth === 'june' && (
                      <>
                        <div className="p-4 bg-white/5 rounded-lg">
                          <h6 className="font-medium mb-2">Summer Activities</h6>
                          <ul className="text-sm text-gray-400 space-y-1">
                            <li>• Beach club partnerships</li>
                            <li>• Water park deals</li>
                            <li>• Summer staycation offers</li>
                            <li>• Ice cream & cold drinks promos</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-white/5 rounded-lg">
                          <h6 className="font-medium mb-2">Content Focus</h6>
                          <ul className="text-sm text-gray-400 space-y-1">
                            <li>• "Beat the Heat" savings tips</li>
                            <li>• Indoor activity guides</li>
                            <li>• Summer budget planning</li>
                            <li>• Travel savings hacks</li>
                          </ul>
                        </div>
                      </>
                    )}
                    {activeMonth === 'july' && (
                      <>
                        <div className="p-4 bg-white/5 rounded-lg">
                          <h6 className="font-medium mb-2">Engagement Campaigns</h6>
                          <ul className="text-sm text-gray-400 space-y-1">
                            <li>• User-generated content week</li>
                            <li>• Ambassador program launch</li>
                            <li>• Community challenges</li>
                            <li>• Loyalty tier reveals</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-white/5 rounded-lg">
                          <h6 className="font-medium mb-2">Retention Focus</h6>
                          <ul className="text-sm text-gray-400 space-y-1">
                            <li>• Win-back campaigns</li>
                            <li>• Streak rewards</li>
                            <li>• VIP early access</li>
                            <li>• Feedback collection</li>
                          </ul>
                        </div>
                      </>
                    )}
                    {activeMonth === 'august' && (
                      <>
                        <div className="p-4 bg-white/5 rounded-lg">
                          <h6 className="font-medium mb-2">Back to School</h6>
                          <ul className="text-sm text-gray-400 space-y-1">
                            <li>• Student discount partners</li>
                            <li>• University campus activation</li>
                            <li>• School supply cashback</li>
                            <li>• Parent savings guides</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-white/5 rounded-lg">
                          <h6 className="font-medium mb-2">Scale Preparation</h6>
                          <ul className="text-sm text-gray-400 space-y-1">
                            <li>• H1 success recap</li>
                            <li>• Q3/Q4 campaign preview</li>
                            <li>• DSF early prep</li>
                            <li>• 5K user celebration</li>
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Daily Posting Schedule */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-bold text-[#c9a227] mb-4">Daily Posting Schedule (All Months)</h4>
              <div className="grid md:grid-cols-7 gap-4">
                {[
                  { day: 'Monday', theme: 'Money Monday', content: 'Financial tips, savings hacks, budgeting', color: 'blue' },
                  { day: 'Tuesday', theme: 'Tutorial Tuesday', content: 'App guides, how-to, features', color: 'green' },
                  { day: 'Wednesday', theme: 'Partner Wednesday', content: 'Merchant spotlights, new partners', color: 'purple' },
                  { day: 'Thursday', theme: 'Throwback Thursday', content: 'User stories, success reveals', color: 'amber' },
                  { day: 'Friday', theme: 'Fun Friday', content: 'Memes, trends, entertainment', color: 'pink' },
                  { day: 'Saturday', theme: 'Savings Saturday', content: 'Weekly deals, cashback roundup', color: 'emerald' },
                  { day: 'Sunday', theme: 'Community Sunday', content: 'UGC, polls, Q&A, features', color: 'cyan' },
                ].map((d, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-3 text-center">
                    <div className={`text-${d.color}-400 font-bold text-sm`}>{d.day}</div>
                    <div className="text-white text-xs font-medium mt-1">{d.theme}</div>
                    <div className="text-gray-500 text-xs mt-1">{d.content}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Platform Posting Times */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-bold text-[#c9a227] mb-4">Optimal Posting Times (UAE)</h4>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { platform: 'Instagram', times: ['7-8 AM', '12-1 PM', '7-9 PM'], best: '7 PM', icon: Instagram },
                  { platform: 'TikTok', times: ['12 PM', '3 PM', '7-10 PM'], best: '8 PM', icon: Music2 },
                  { platform: 'Twitter/X', times: ['8 AM', '12 PM', '5 PM', '9 PM'], best: '12 PM', icon: MessageCircle },
                  { platform: 'YouTube', times: ['2-4 PM', '8-10 PM'], best: '3 PM', icon: Youtube },
                ].map((p, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <p.icon size={20} className="text-[#c9a227]" />
                      <span className="font-medium">{p.platform}</span>
                    </div>
                    <div className="text-xs text-gray-400 space-y-1">
                      {p.times.map((t, i) => <div key={i}>• {t}</div>)}
                    </div>
                    <div className="mt-2 text-xs bg-[#c9a227]/20 text-[#c9a227] px-2 py-1 rounded inline-block">Best: {p.best}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 200+ Topics Tab */}
        {activeTab === 'topics' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">200+ Content <span className="text-[#c9a227]">Topics</span></h3>
              <p className="text-gray-400">Categorized content ideas for every platform and occasion</p>
            </div>

            {/* Filter by Category */}
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { id: 'all', label: 'All Topics' },
                { id: 'savings', label: 'Savings & Money' },
                { id: 'partners', label: 'Partner Content' },
                { id: 'lifestyle', label: 'Lifestyle' },
                { id: 'tutorials', label: 'Tutorials' },
                { id: 'trends', label: 'Trends & Viral' },
                { id: 'seasonal', label: 'Seasonal' },
                { id: 'ugc', label: 'UGC Prompts' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveContentPillar(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeContentPillar === cat.id
                      ? 'bg-[#c9a227] text-[#0a1628]'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* SAVINGS & MONEY CONTENT (30 Topics) */}
            {(activeContentPillar === 'all' || activeContentPillar === 'savings') && (
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <DollarSign className="text-green-400" size={20} />
                  </div>
                  <h4 className="text-lg font-bold">Savings & Money Content</h4>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">30 Topics</span>
                </div>
                <div className="grid md:grid-cols-3 gap-3">
                  {[
                    'How much I saved this month with Nuqta',
                    '5 ways to maximize your Nuqta cashback',
                    'My AED 1000 savings challenge with Nuqta',
                    'Nuqta vs credit card rewards comparison',
                    'How to save AED 500/month without trying',
                    'The math behind 10% cashback vs 2%',
                    'Monthly savings reveal (screen recording)',
                    'How I funded my vacation with cashback',
                    'Savings hacks for Dubai expats',
                    'Turn your daily coffee into savings',
                    'Why I stopped chasing bank rewards',
                    'The psychology of instant vs delayed rewards',
                    'How couples can double their savings',
                    'Student budget hacks with Nuqta',
                    'From zero savings to AED 200/month',
                    'Best high-cashback categories to focus on',
                    'Weekend spending turned into savings',
                    'The 30-day Nuqta savings challenge',
                    'How families save AED 2000/month',
                    'Smart money moves in Dubai',
                    'Turning dining out into smart spending',
                    'My cashback reached 4 figures',
                    'Financial literacy through cashback',
                    'The compound effect of small savings',
                    'Why I switched from paper coupons',
                    'Salary day savings strategy',
                    'How to track your Nuqta earnings',
                    'Emergency fund through cashback',
                    'The broke-to-savings transformation',
                    'Your coffee money is working for you',
                  ].map((topic, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                      <span className="text-sm text-gray-300">{topic}</span>
                      <button onClick={() => copyToClipboard(topic, idx)} className="text-gray-500 hover:text-[#c9a227]">
                        {copiedIndex === idx ? <Check size={14} /> : <Copy size={14} />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PARTNER CONTENT (30 Topics) */}
            {(activeContentPillar === 'all' || activeContentPillar === 'partners') && (
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Store className="text-purple-400" size={20} />
                  </div>
                  <h4 className="text-lg font-bold">Partner Content</h4>
                  <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">30 Topics</span>
                </div>
                <div className="grid md:grid-cols-3 gap-3">
                  {[
                    'Rating my favorite Nuqta partners',
                    'Best cafes with Nuqta in Dubai Marina',
                    'Hidden gems: Partners you didn\'t know about',
                    'Partner tour: Behind the scenes at [Name]',
                    'Top 10 brunch spots with cashback',
                    'Salon with the best Nuqta deals',
                    'My honest review of [Partner Name]',
                    'Best date night restaurants with cashback',
                    'Gym partners that give you gains + savings',
                    'New partner alert: Welcome [Name]!',
                    'Partner staff reactions to Nuqta users',
                    'The owner\'s story: Why they joined Nuqta',
                    'Best dessert spots with cashback',
                    'Comparing 3 cafes with Nuqta deals',
                    'Partner of the week spotlight',
                    'Fast food vs fancy dining cashback',
                    'Best late-night partners open 24/7',
                    'Family-friendly partners guide',
                    'Pet-friendly cafes with Nuqta',
                    'Best JBR partners for tourists',
                    'Downtown Dubai partner guide',
                    'Al Barsha hidden partner gems',
                    'Business Bay lunch spot partners',
                    'Jumeirah partners for special occasions',
                    'Partners with the highest cashback',
                    'Rooftop partners with a view',
                    'Beach club partners guide',
                    'Spa day: Which partner to choose?',
                    'Barbershops with Nuqta in Dubai',
                    'Partners open during Ramadan',
                  ].map((topic, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                      <span className="text-sm text-gray-300">{topic}</span>
                      <button onClick={() => copyToClipboard(topic, idx + 100)} className="text-gray-500 hover:text-[#c9a227]">
                        {copiedIndex === idx + 100 ? <Check size={14} /> : <Copy size={14} />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* LIFESTYLE CONTENT (30 Topics) */}
            {(activeContentPillar === 'all' || activeContentPillar === 'lifestyle') && (
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-pink-500/20 rounded-lg">
                    <Heart className="text-pink-400" size={20} />
                  </div>
                  <h4 className="text-lg font-bold">Lifestyle Content</h4>
                  <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">30 Topics</span>
                </div>
                <div className="grid md:grid-cols-3 gap-3">
                  {[
                    'A day in my life using Nuqta',
                    'My morning coffee routine with cashback',
                    'Date night: Where I take my partner',
                    'Sunday brunch made affordable',
                    'How I plan my week around deals',
                    'The Dubai lifestyle on a budget',
                    'Girls night out with cashback',
                    'Guys night: Sports bar with savings',
                    'Birthday celebration guide',
                    'Anniversary dinner ideas with Nuqta',
                    'Self-care day: Spa + salon + savings',
                    'Work from cafe: Best spots with WiFi',
                    'Weekend adventures in Dubai',
                    'Staycation planning with cashback',
                    'How I balance lifestyle and savings',
                    'Exploring new neighborhoods with Nuqta',
                    'My Dubai bucket list with cashback',
                    'First dates made affordable',
                    'Group dinner split with savings',
                    'Solo dining: Best spots for one',
                    'Rainy day activities with cashback',
                    'Summer survival: Indoor activities',
                    'Ramadan iftar planning guide',
                    'Eid celebration ideas',
                    'Friday brunch culture in Dubai',
                    'Evening strolls + coffee spots',
                    'Sunset viewing spots with deals',
                    'Networking over coffee with savings',
                    'Pet parent lifestyle with Nuqta',
                    'Fitness lifestyle: Gym + healthy eats',
                  ].map((topic, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                      <span className="text-sm text-gray-300">{topic}</span>
                      <button onClick={() => copyToClipboard(topic, idx + 200)} className="text-gray-500 hover:text-[#c9a227]">
                        {copiedIndex === idx + 200 ? <Check size={14} /> : <Copy size={14} />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TUTORIALS & HOW-TO (30 Topics) */}
            {(activeContentPillar === 'all' || activeContentPillar === 'tutorials') && (
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <GraduationCap className="text-blue-400" size={20} />
                  </div>
                  <h4 className="text-lg font-bold">Tutorials & How-To</h4>
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">30 Topics</span>
                </div>
                <div className="grid md:grid-cols-3 gap-3">
                  {[
                    'How to download and setup Nuqta',
                    'Complete app walkthrough for beginners',
                    'How to find partners near you',
                    'How to scan QR and earn cashback',
                    'Setting up your referral link',
                    'How to gift coins to friends',
                    'Understanding your savings dashboard',
                    'How to split bills with Nuqta',
                    'Claiming your welcome bonus',
                    'How to redeem your coins',
                    'Notification settings for best deals',
                    'How to leave reviews for partners',
                    'Adding favorite partners',
                    'How to share your savings flex',
                    'Setting savings goals in app',
                    'How referral rewards work',
                    'Understanding cashback tiers',
                    'How to maximize birthday rewards',
                    'Using filters to find partners',
                    'How streak rewards work',
                    'Troubleshooting: Payment not showing',
                    'How to contact support',
                    'Privacy settings walkthrough',
                    'How to update your profile',
                    'Understanding transaction history',
                    'How to earn bonus coins',
                    'Partner tier benefits explained',
                    'How to become a VIP user',
                    'Export your savings report',
                    'Pro tips from power users',
                  ].map((topic, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                      <span className="text-sm text-gray-300">{topic}</span>
                      <button onClick={() => copyToClipboard(topic, idx + 300)} className="text-gray-500 hover:text-[#c9a227]">
                        {copiedIndex === idx + 300 ? <Check size={14} /> : <Copy size={14} />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TRENDS & VIRAL (30 Topics) */}
            {(activeContentPillar === 'all' || activeContentPillar === 'trends') && (
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-cyan-500/20 rounded-lg">
                    <TrendingUp className="text-cyan-400" size={20} />
                  </div>
                  <h4 className="text-lg font-bold">Trends & Viral Content</h4>
                  <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">30 Topics</span>
                </div>
                <div className="grid md:grid-cols-3 gap-3">
                  {[
                    'POV: You discover instant cashback',
                    'POV: Friend introduces you to Nuqta',
                    'POV: Bank sees your Nuqta savings',
                    'POV: Your credit card feels replaced',
                    'That moment when cashback hits',
                    'Me explaining Nuqta to my parents',
                    'How it started vs how it\'s going',
                    'Types of Nuqta users',
                    'Dubai problems that Nuqta solves',
                    'When your friend says "that\'s expensive"',
                    'The face your wallet makes',
                    'Dubai salary vs Dubai lifestyle (fixed)',
                    'Things that just make sense: Nuqta',
                    'Normalize getting cashback on everything',
                    'Plot twist: You\'re actually saving money',
                    'Nobody: Me checking my Nuqta balance',
                    'First reaction using Nuqta',
                    'Surprising my friend with coins',
                    'When you realize you\'ve been paying full price',
                    'Dubai residents in 2026 be like',
                    'Gen Z discovering Nuqta',
                    'Millennials and their savings apps',
                    'Smart money moves in Dubai starter pack',
                    'How to tell if someone uses Nuqta',
                    'Red flag: They don\'t use Nuqta',
                    'Green flag: They split bill with Nuqta',
                    'POV: You find out every purchase gives cashback',
                    'The Nuqta effect on your spending',
                    'When cashback is your personality',
                    'Dubai inflation got nothing on us',
                  ].map((topic, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                      <span className="text-sm text-gray-300">{topic}</span>
                      <button onClick={() => copyToClipboard(topic, idx + 400)} className="text-gray-500 hover:text-[#c9a227]">
                        {copiedIndex === idx + 400 ? <Check size={14} /> : <Copy size={14} />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SEASONAL CONTENT (30 Topics) */}
            {(activeContentPillar === 'all' || activeContentPillar === 'seasonal') && (
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-amber-500/20 rounded-lg">
                    <Calendar className="text-amber-400" size={20} />
                  </div>
                  <h4 className="text-lg font-bold">Seasonal & Event Content</h4>
                  <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded-full">30 Topics</span>
                </div>
                <div className="grid md:grid-cols-3 gap-3">
                  {[
                    'Ramadan iftar deals guide',
                    'Suhoor spots with cashback',
                    'Eid gift ideas with savings',
                    'Eid brunch recommendations',
                    'UAE National Day celebrations',
                    'DSF shopping with cashback',
                    'New Year\'s Eve deals',
                    'Valentine\'s Day date ideas',
                    'Mother\'s Day gift guide',
                    'Father\'s Day celebration ideas',
                    'Summer survival deals',
                    'Back to school savings',
                    'Winter staycation deals',
                    'Christmas & holiday deals',
                    'Global Village partner guide',
                    'Dubai Expo anniversary events',
                    'Art Dubai partners',
                    'Dubai Food Festival spots',
                    'Diwali celebration guide',
                    'Chinese New Year deals',
                    'Holi celebration spots',
                    'Easter brunch deals',
                    'World Cup viewing parties',
                    'F1 weekend deals',
                    'Cricket match viewing spots',
                    'Tennis tournament specials',
                    'Marathon day fuel spots',
                    'Fitness challenge partners',
                    'Mental health awareness deals',
                    'Earth Day eco-friendly partners',
                  ].map((topic, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                      <span className="text-sm text-gray-300">{topic}</span>
                      <button onClick={() => copyToClipboard(topic, idx + 500)} className="text-gray-500 hover:text-[#c9a227]">
                        {copiedIndex === idx + 500 ? <Check size={14} /> : <Copy size={14} />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* UGC PROMPTS (20 Topics) */}
            {(activeContentPillar === 'all' || activeContentPillar === 'ugc') && (
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-500/20 rounded-lg">
                    <Video className="text-orange-400" size={20} />
                  </div>
                  <h4 className="text-lg font-bold">UGC Prompts & Challenges</h4>
                  <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full">20 Topics</span>
                </div>
                <div className="grid md:grid-cols-3 gap-3">
                  {[
                    '#NuqtaSavingsChallenge - Show your monthly savings',
                    '#MyNuqtaSpot - Tag your favorite partner',
                    '#NuqtaFirstTimer - Film your first transaction',
                    '#GiftAFriend - Send coins and record reaction',
                    '#CashbackReveal - Monthly savings screenshot',
                    '#NuqtaDate - Romantic dinner with cashback',
                    '#BrunchWithNuqta - Weekend brunch content',
                    '#NuqtaReview - Honest partner review',
                    '#SplitTheBill - Group dining with savings',
                    '#HiddenGem - Discover unknown partners',
                    '#NuqtaTour - Partner visit vlog',
                    '#BeforeAfter - Life before/after Nuqta',
                    '#SavingsGoals - What you\'re saving for',
                    '#NuqtaHack - Share your best tip',
                    '#WeekendSavings - Weekend spending diary',
                    '#ReferralWins - Celebrate referral success',
                    '#NuqtaRoutine - Daily cashback routine',
                    '#BestDealEver - Your biggest cashback',
                    '#NuqtaFamily - How family uses app',
                    '#SmartSpender - Financial tips with Nuqta',
                  ].map((topic, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                      <span className="text-sm text-gray-300">{topic}</span>
                      <button onClick={() => copyToClipboard(topic, idx + 600)} className="text-gray-500 hover:text-[#c9a227]">
                        {copiedIndex === idx + 600 ? <Check size={14} /> : <Copy size={14} />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Hashtag Strategy */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-purple-500/20 rounded-xl p-6 border border-[#c9a227]/30">
              <h4 className="text-lg font-bold mb-4">Hashtag Strategy</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h5 className="font-medium text-[#c9a227] mb-3">Primary Brand Hashtags</h5>
                  <div className="flex flex-wrap gap-2">
                    {['#Nuqta', '#PayWithNuqta', '#NuqtaApp', '#NuqtaDubai', '#NuqtaSavings'].map((tag, idx) => (
                      <span key={idx} className="text-xs bg-[#c9a227]/20 text-[#c9a227] px-2 py-1 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-medium text-[#c9a227] mb-3">Campaign Hashtags</h5>
                  <div className="flex flex-wrap gap-2">
                    {['#SmartPeopleUseNuqta', '#SaveMoreShareMore', '#InstantCashback', '#NuqtaChallenge', '#NuqtaRewards'].map((tag, idx) => (
                      <span key={idx} className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-medium text-[#c9a227] mb-3">Discovery Hashtags</h5>
                  <div className="flex flex-wrap gap-2">
                    {['#DubaiDeals', '#UAESavings', '#DubaiLife', '#DubaiFoodie', '#DubaiCafes', '#DubaiExpat', '#UAELife'].map((tag, idx) => (
                      <span key={idx} className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Templates */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-bold text-[#c9a227] mb-4">Caption Templates</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <h5 className="font-medium mb-3">Savings Post Template</h5>
                  <div className="text-sm text-gray-400 bg-black/20 rounded p-3 font-mono">
                    <p>Just saved AED [X] at [Partner Name]! <span className="text-[#c9a227]">✨</span></p>
                    <p className="mt-2">This is my [Xth] transaction this month and I've already earned [X] coins back.</p>
                    <p className="mt-2">If you're not using @NuqtaApp, you're literally leaving money on the table <span className="text-[#c9a227]">💰</span></p>
                    <p className="mt-2">Download link in bio!</p>
                    <p className="mt-2 text-[#c9a227]">#Nuqta #PayWithNuqta #DubaiDeals #Cashback</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h5 className="font-medium mb-3">Partner Feature Template</h5>
                  <div className="text-sm text-gray-400 bg-black/20 rounded p-3 font-mono">
                    <p>Partner Spotlight: [Partner Name] <span className="text-[#c9a227]">🏆</span></p>
                    <p className="mt-2"><span className="text-[#c9a227]">📍</span> Location: [Area]</p>
                    <p><span className="text-[#c9a227]">💰</span> Cashback: [X]%</p>
                    <p><span className="text-[#c9a227]">⭐</span> Must try: [Item]</p>
                    <p className="mt-2">Have you visited yet? Drop a <span className="text-[#c9a227]">🔥</span> if you have!</p>
                    <p className="mt-2 text-[#c9a227]">#Nuqta #DubaiCafes #DubaiFoodie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Campaigns Tab */}
        {activeTab === 'campaigns' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Campaign <span className="text-[#c9a227]">Playbook</span></h3>
              <p className="text-gray-400">Ready-to-execute campaigns with full briefs</p>
            </div>

            {/* Launch Campaign */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-amber-500/20 rounded-xl p-6 border border-[#c9a227]/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-[#c9a227]/20 rounded-xl">
                  <Zap className="text-[#c9a227]" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Campaign 1: Launch Blitz</h4>
                  <p className="text-sm text-gray-400">Feb 28 - Mar 14, 2026 | Goal: 1,000 downloads</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h5 className="font-medium text-[#c9a227] mb-2">Channels</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Instagram (Reels focus)</li>
                    <li>• TikTok (Native content)</li>
                    <li>• 10 Nano influencers</li>
                    <li>• Partner QR codes</li>
                    <li>• WhatsApp groups</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-[#c9a227] mb-2">Creative Assets</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• "We're LIVE!" announcement video</li>
                    <li>• App demo walkthrough</li>
                    <li>• Partner introduction carousel</li>
                    <li>• First user testimonials</li>
                    <li>• Referral explainer</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-[#c9a227] mb-2">Budget</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Content production: AED 5,000</li>
                    <li>• Influencer barter: AED 0</li>
                    <li>• Paid ads: AED 5,000</li>
                    <li>• <strong className="text-white">Total: AED 10,000</strong></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Referral Campaign */}
            <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl p-6 border border-blue-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <Users className="text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Campaign 2: Refer-a-Friend Challenge</h4>
                  <p className="text-sm text-gray-400">Ongoing | Goal: 2x user base through referrals</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h5 className="font-medium text-blue-400 mb-2">Mechanics</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Give AED 10, Get AED 10</li>
                    <li>• Weekly leaderboard prizes</li>
                    <li>• Milestone bonuses (5/10/25)</li>
                    <li>• Top referrer of month: AED 1,000</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-blue-400 mb-2">Content</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• "How to share your link" tutorial</li>
                    <li>• Leaderboard updates</li>
                    <li>• Winner spotlights</li>
                    <li>• Referral success stories</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-blue-400 mb-2">Promotion</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• In-app notifications</li>
                    <li>• Email reminders</li>
                    <li>• Social countdowns</li>
                    <li>• WhatsApp broadcasts</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Ramadan Campaign */}
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <Star className="text-green-400" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Campaign 3: Ramadan Rewards</h4>
                  <p className="text-sm text-gray-400">April 2026 | Goal: 500 new users, 2x transactions</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h5 className="font-medium text-green-400 mb-2">Special Offers</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Double cashback on iftar (6-8 PM)</li>
                    <li>• Charity gifting feature</li>
                    <li>• Ramadan partner bundle</li>
                    <li>• Daily spin-to-win</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-green-400 mb-2">Content Series</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• "30 Days of Iftar Deals"</li>
                    <li>• Suhoor spot guide</li>
                    <li>• Eid shopping guide</li>
                    <li>• Community giving stories</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-green-400 mb-2">Influencer Brief</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• 5 food influencers</li>
                    <li>• Iftar visit content</li>
                    <li>• "My Nuqta savings this Ramadan"</li>
                    <li>• Eid gifting content</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* UGC Campaign */}
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-orange-500/20 rounded-xl">
                  <Video className="text-orange-400" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Campaign 4: #NuqtaSavingsChallenge</h4>
                  <p className="text-sm text-gray-400">Ongoing | Goal: 100+ UGC pieces/month</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h5 className="font-medium text-orange-400 mb-2">Challenge Rules</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Show your Nuqta savings screen</li>
                    <li>• Tag @NuqtaApp + #NuqtaSavingsChallenge</li>
                    <li>• Share what you're saving for</li>
                    <li>• Best posts win AED 100 bonus</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-orange-400 mb-2">Prizes</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Weekly: AED 100 bonus coins</li>
                    <li>• Monthly: AED 500 cash</li>
                    <li>• Quarterly: iPhone giveaway</li>
                    <li>• Featured on Nuqta page</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-orange-400 mb-2">Amplification</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Repost best content</li>
                    <li>• Create compilation reels</li>
                    <li>• Feature in ads</li>
                    <li>• Send to influencers</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* More Campaigns Summary */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="font-bold text-[#c9a227] mb-4">Campaign 5: Partner Takeovers</h4>
                <p className="text-sm text-gray-400 mb-3">Weekly partner takes over Nuqta social accounts</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Behind-the-scenes at partner location</li>
                  <li>• Staff picks and recommendations</li>
                  <li>• Exclusive deal announcement</li>
                  <li>• Q&A with owner/chef</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="font-bold text-[#c9a227] mb-4">Campaign 6: Savings Calculator</h4>
                <p className="text-sm text-gray-400 mb-3">Interactive tool showing potential savings</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Upload spending data</li>
                  <li>• See what you could have saved</li>
                  <li>• Personalized partner recommendations</li>
                  <li>• Share results on social</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="font-bold text-[#c9a227] mb-4">Campaign 7: University Ambassadors</h4>
                <p className="text-sm text-gray-400 mb-3">Student reps at major UAE universities</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• 1 ambassador per university</li>
                  <li>• AED 500/month + commission</li>
                  <li>• Campus events & signups</li>
                  <li>• Student-specific content</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="font-bold text-[#c9a227] mb-4">Campaign 8: Milestone Celebrations</h4>
                <p className="text-sm text-gray-400 mb-3">Celebrate community achievements together</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• 1,000 users party</li>
                  <li>• AED 100K total savings milestone</li>
                  <li>• 100 partners celebration</li>
                  <li>• User anniversary rewards</li>
                </ul>
              </div>
            </div>

            {/* Co-Branded Campaign Templates */}
            <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-xl p-6 border border-purple-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500/20 rounded-xl">
                  <Handshake className="text-purple-400" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Co-Branded Campaign Templates</h4>
                  <p className="text-sm text-gray-400">Ready-to-use templates for merchant partnerships</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {[
                  { template: '[Shop] is giving [X]% OFF on Nuqta!', example: 'Karak House is giving 15% OFF on Nuqta!', color: 'purple' },
                  { template: '[Shop] is now available in Nuqta app', example: 'Milano Cafe is now available in Nuqta app', color: 'blue' },
                  { template: 'Get [X]% cashback at [Shop] on Nuqta', example: 'Get 10% cashback at Fresh Mart on Nuqta', color: 'green' },
                  { template: 'Shop [Category] from Nuqta', example: 'Shop Groceries from Nuqta', color: 'orange' },
                  { template: 'Book [Service] from Nuqta', example: 'Book Salon Services from Nuqta', color: 'pink' },
                  { template: 'Get [X] FREE of [Y] from Nuqta', example: 'Get 1 FREE Coffee of 5 from Nuqta', color: 'yellow' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4">
                    <div className="text-xs text-gray-500 mb-2">Template:</div>
                    <div className="text-white font-medium mb-3 p-2 bg-white/5 rounded border border-white/10">
                      {item.template}
                    </div>
                    <div className="text-xs text-gray-500 mb-1">Example:</div>
                    <div className={`text-sm p-2 rounded ${
                      item.color === 'purple' ? 'bg-purple-500/20 text-purple-300' :
                      item.color === 'blue' ? 'bg-blue-500/20 text-blue-300' :
                      item.color === 'green' ? 'bg-green-500/20 text-green-300' :
                      item.color === 'orange' ? 'bg-orange-500/20 text-orange-300' :
                      item.color === 'pink' ? 'bg-pink-500/20 text-pink-300' :
                      'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {item.example}
                    </div>
                  </div>
                ))}
              </div>

              {/* First Transaction Offer - SIMPLIFIED */}
              <div className="bg-gradient-to-r from-[#c9a227]/20 to-amber-500/20 rounded-lg p-4 border border-[#c9a227]/30">
                <div className="flex items-center gap-3 mb-3">
                  <Gift className="text-[#c9a227]" size={20} />
                  <h5 className="font-bold text-[#c9a227]">First Transaction Campaign (Simplified)</h5>
                </div>

                {/* The One Clear Message */}
                <div className="bg-white/10 rounded-lg p-4 mb-4 text-center border border-[#c9a227]/50">
                  <div className="text-xs text-[#c9a227] uppercase tracking-wider mb-2">One Clear Message</div>
                  <div className="text-3xl font-bold text-white mb-2">
                    "Your first coffee is on us. Literally."
                  </div>
                  <div className="text-gray-400 text-sm">
                    Simple, memorable, easy to explain. No complicated offers.
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h6 className="font-medium text-white mb-2">How It Works</h6>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>1. Download Nuqta app</li>
                      <li>2. Make your first purchase anywhere</li>
                      <li>3. Get AED 50 bonus coins instantly</li>
                      <li>4. Use them on your next visit</li>
                    </ul>
                    <div className="mt-3 p-2 bg-green-500/10 rounded text-sm text-green-400">
                      Result: First coffee paid by Nuqta. Second coffee = loyal customer.
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-sm text-gray-400 mb-2">Simple Ad Copy (use these):</div>
                    <div className="space-y-2">
                      {[
                        '"Your first coffee is on us"',
                        '"We\'ll pay for your first purchase"',
                        '"AED 50 waiting for you. Just shop once."',
                        '"Free money. First transaction. Done."',
                      ].map((copy, idx) => (
                        <div key={idx} className="text-sm text-white bg-white/5 p-2 rounded">
                          {copy}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Merchant Value Proposition */}
            <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl p-6 border border-green-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <Store className="text-green-400" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Merchant Messaging Strategy</h4>
                  <p className="text-sm text-gray-400">How to pitch Nuqta to merchants</p>
                </div>
              </div>

              {/* Key Message */}
              <div className="bg-white/10 rounded-xl p-6 mb-6 border-2 border-green-500/50">
                <div className="text-center">
                  <div className="text-xs text-green-400 uppercase tracking-wider mb-2">The Key Message</div>
                  <div className="text-2xl font-bold text-white mb-4">
                    "Don't Give Discounts. Give YOUR Branded Coins. Build Loyalty."
                  </div>
                  <div className="text-[#c9a227] font-medium mb-3">
                    One-liner for BDA: "Discounts create bargain hunters. Branded coins create loyal customers."
                  </div>
                  <div className="text-gray-400 max-w-2xl mx-auto">
                    Discounts train customers to wait for sales. Branded coins bring them back
                    to YOUR store to redeem. That's the difference between a one-time sale and a loyal customer.
                  </div>
                </div>
              </div>

              {/* Story-Based Examples (more powerful than templates) */}
              <div className="bg-white/5 rounded-lg p-4 mb-6">
                <h5 className="font-bold text-white mb-3">Story-Based Merchant Content (Better than Templates)</h5>
                <p className="text-gray-400 text-sm mb-4">Stories beat templates. Use these narrative approaches:</p>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    {
                      weak: '"X Shop on Nuqta"',
                      strong: '"Ahmed\'s cafe was struggling with one-time customers. Then he switched from 10% discounts to branded coins. Now 40% return within 7 days."',
                      type: 'Transformation Story'
                    },
                    {
                      weak: '"Get X% cashback"',
                      strong: '"What if your morning karak earned you enough for a free one every week? That\'s not a discount - that\'s a coffee subscription you didn\'t know you had."',
                      type: 'Reframe Story'
                    },
                    {
                      weak: '"Shop X from Nuqta"',
                      strong: '"This salon owner stopped giving discounts. Her customers didn\'t complain - they started coming MORE often. Here\'s what she did differently..."',
                      type: 'Curiosity Story'
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/5 p-3 rounded">
                      <div className="text-xs text-red-400 line-through mb-2">Weak: {item.weak}</div>
                      <div className="text-sm text-green-300 mb-2">Strong: {item.strong}</div>
                      <div className="text-xs text-[#c9a227]">{item.type}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Discount vs Coins Comparison */}
                <div className="bg-white/5 rounded-lg p-4">
                  <h5 className="font-bold text-white mb-4">Discounts vs Branded Coins</h5>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-red-500/10 p-3 rounded">
                        <div className="text-red-400 font-medium mb-2">❌ Traditional Discount</div>
                        <ul className="text-gray-400 space-y-1 text-xs">
                          <li>• Customer saves 10%</li>
                          <li>• No reason to return</li>
                          <li>• Trains to wait for sales</li>
                          <li>• No data capture</li>
                          <li>• One-time transaction</li>
                        </ul>
                      </div>
                      <div className="bg-green-500/10 p-3 rounded">
                        <div className="text-green-400 font-medium mb-2">✅ Nuqta Branded Coins</div>
                        <ul className="text-gray-400 space-y-1 text-xs">
                          <li>• Customer earns YOUR coins</li>
                          <li>• Must return to redeem</li>
                          <li>• Builds habit & loyalty</li>
                          <li>• Full customer data</li>
                          <li>• Repeat transactions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Merchant Pitch Script */}
                <div className="bg-white/5 rounded-lg p-4">
                  <h5 className="font-bold text-white mb-4">Pitch Script for BDA</h5>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white/5 p-3 rounded">
                      <div className="text-[#c9a227] font-medium mb-1">Opening:</div>
                      <div className="text-gray-300 italic">
                        "What if instead of giving 10% discount that anyone can copy, you give customers
                        YOUR branded coins that only work at YOUR store?"
                      </div>
                    </div>
                    <div className="bg-white/5 p-3 rounded">
                      <div className="text-[#c9a227] font-medium mb-1">Value Prop:</div>
                      <div className="text-gray-300 italic">
                        "When they earn 'Milano Coins' or 'Fresh Mart Points', they HAVE to come back
                        to you to use them. That's not a discount - that's a loyalty program."
                      </div>
                    </div>
                    <div className="bg-white/5 p-3 rounded">
                      <div className="text-[#c9a227] font-medium mb-1">Close:</div>
                      <div className="text-gray-300 italic">
                        "Same cost as a discount, but now they're YOUR repeat customers, not
                        one-time bargain hunters. Plus, you get all their purchase data."
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Merchant Benefits List */}
              <div className="mt-6 grid md:grid-cols-4 gap-4">
                {[
                  { benefit: 'Customer Returns', detail: '3x more likely to return', icon: '🔄' },
                  { benefit: 'Brand Recognition', detail: 'YOUR name, YOUR coins', icon: '🏷️' },
                  { benefit: 'Data Ownership', detail: 'Full customer insights', icon: '📊' },
                  { benefit: 'Zero Effort', detail: 'Nuqta handles everything', icon: '✨' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="text-white font-medium">{item.benefit}</div>
                    <div className="text-xs text-gray-400">{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}


        {/* Viral Hooks Tab */}
        {activeTab === 'viral' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Viral <span className="text-[#c9a227]">Hooks & Openers</span></h3>
              <p className="text-gray-400">Proven hooks to stop the scroll and drive engagement</p>
            </div>

            {/* TikTok Hooks */}
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-6 border border-cyan-500/30">
              <div className="flex items-center gap-3 mb-4">
                <Music2 className="text-cyan-400" size={24} />
                <h4 className="text-lg font-bold">TikTok Hooks (First 3 Seconds)</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { hook: '"I just saved AED 200 and I need to tell you how..."', type: 'Savings Reveal' },
                  { hook: '"POV: You find out every purchase gives you cashback"', type: 'POV' },
                  { hook: '"This app is the reason I can afford brunch every weekend"', type: 'Lifestyle' },
                  { hook: '"Nobody talks about this money hack in Dubai..."', type: 'Secret' },
                  { hook: '"Wait, you guys are still paying full price?"', type: 'Disbelief' },
                  { hook: '"I\'m actually mad nobody told me about this sooner"', type: 'FOMO' },
                  { hook: '"Let me show you how to turn your coffee into savings"', type: 'Tutorial' },
                  { hook: '"Dubai is expensive but what if I told you..."', type: 'Problem-Solution' },
                  { hook: '"Here\'s what AED 50 of cashback looks like in one week"', type: 'Proof' },
                  { hook: '"The math isn\'t mathing with other apps, but Nuqta..."', type: 'Comparison' },
                  { hook: '"Story time: How I funded my vacation with cashback"', type: 'Story' },
                  { hook: '"Things in Dubai that just make sense: Nuqta"', type: 'Trend' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start justify-between p-3 bg-white/5 rounded-lg">
                    <div>
                      <span className="text-sm text-gray-300">{item.hook}</span>
                      <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded ml-2">{item.type}</span>
                    </div>
                    <button onClick={() => copyToClipboard(item.hook, idx + 700)} className="text-gray-500 hover:text-[#c9a227] ml-2">
                      {copiedIndex === idx + 700 ? <Check size={14} /> : <Copy size={14} />}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Instagram Reels Hooks */}
            <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-xl p-6 border border-pink-500/30">
              <div className="flex items-center gap-3 mb-4">
                <Instagram className="text-pink-400" size={24} />
                <h4 className="text-lg font-bold">Instagram Reels Hooks</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { hook: '"STOP scrolling if you live in Dubai"', type: 'Pattern Interrupt' },
                  { hook: '"This changed how I spend money in UAE"', type: 'Transformation' },
                  { hook: '"3 cafes that give you 10% back every time"', type: 'List' },
                  { hook: '"My honest review after 30 days of using Nuqta"', type: 'Review' },
                  { hook: '"The app that your wallet will thank you for"', type: 'Benefit' },
                  { hook: '"I tried the viral cashback app everyone\'s talking about"', type: 'Test' },
                  { hook: '"Watch me save AED 45 in real-time"', type: 'Demo' },
                  { hook: '"If you eat out in Dubai, you NEED this"', type: 'Direct' },
                  { hook: '"My AED 500 savings breakdown this month"', type: 'Results' },
                  { hook: '"Rating my favorite Nuqta partners out of 10"', type: 'Rating' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start justify-between p-3 bg-white/5 rounded-lg">
                    <div>
                      <span className="text-sm text-gray-300">{item.hook}</span>
                      <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-0.5 rounded ml-2">{item.type}</span>
                    </div>
                    <button onClick={() => copyToClipboard(item.hook, idx + 750)} className="text-gray-500 hover:text-[#c9a227] ml-2">
                      {copiedIndex === idx + 750 ? <Check size={14} /> : <Copy size={14} />}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Caption Hooks */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-bold text-[#c9a227] mb-4">Caption Opening Lines</h4>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  'Unpopular opinion: Paying full price in Dubai is a choice.',
                  'The secret to affording Dubai lifestyle? It\'s not what you think.',
                  'I used to think cashback apps were a scam. Then I tried Nuqta.',
                  'Your credit card gives you 2%. Nuqta gives you 10%. Do the math.',
                  'Hot take: Smart people in Dubai use Nuqta.',
                  'Storytime: How I turned my daily coffee habit into actual savings.',
                  'Can we normalize talking about money saving apps?',
                  'This is your sign to stop leaving money on the table.',
                  'Controversial: You don\'t need to cut spending. You need to spend smarter.',
                  'Real talk: I\'ve saved more in 3 months than I expected in a year.',
                  'Remember when I said I\'d never use a rewards app? Yeah...',
                  'Fun fact: Every time you eat out without Nuqta, you lose money.',
                ].map((hook, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-sm text-gray-300">{hook}</span>
                    <button onClick={() => copyToClipboard(hook, idx + 800)} className="text-gray-500 hover:text-[#c9a227] ml-2">
                      {copiedIndex === idx + 800 ? <Check size={14} /> : <Copy size={14} />}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Arabic Hooks */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-amber-500/20 rounded-xl p-6 border border-[#c9a227]/30">
              <div className="flex items-center gap-3 mb-4">
                <Languages className="text-[#c9a227]" size={24} />
                <h4 className="text-lg font-bold">Arabic Hooks (العربية)</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { arabic: 'وفرت ٢٠٠ درهم اليوم بس... لازم أقولكم كيف', english: 'I saved AED 200 today... I have to tell you how' },
                  { arabic: 'ليش تدفع السعر الكامل وأنت تقدر توفر؟', english: 'Why pay full price when you can save?' },
                  { arabic: 'أسرار التوفير في دبي اللي ما حد يقولك عنها', english: 'Dubai saving secrets no one tells you' },
                  { arabic: 'كل مرة تطلب قهوة، ترجعلك فلوس', english: 'Every time you order coffee, you get money back' },
                  { arabic: 'التطبيق اللي غير طريقة صرفي في الإمارات', english: 'The app that changed how I spend in UAE' },
                  { arabic: 'جربت تطبيق نقطة لمدة شهر والنتيجة...', english: 'I tried Nuqta app for a month and the result...' },
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-white/5 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-white font-medium text-right" dir="rtl">{item.arabic}</p>
                        <p className="text-xs text-gray-500 mt-1">{item.english}</p>
                      </div>
                      <button onClick={() => copyToClipboard(item.arabic, idx + 850)} className="text-gray-500 hover:text-[#c9a227] ml-2">
                        {copiedIndex === idx + 850 ? <Check size={14} /> : <Copy size={14} />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Repurposing */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <RefreshCw className="text-[#c9a227]" size={24} />
                <h4 className="text-lg font-bold">Content Repurposing Strategy</h4>
                <span className="text-xs bg-[#c9a227]/20 text-[#c9a227] px-2 py-1 rounded-full">1 → 10 Method</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">Turn 1 piece of content into 10 across platforms</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 px-2">#</th>
                      <th className="text-left py-2 px-2">Original</th>
                      <th className="text-left py-2 px-2">Repurposed Into</th>
                      <th className="text-left py-2 px-2">Platform</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-400">
                    <tr className="border-b border-white/5"><td className="py-2 px-2">1</td><td className="py-2 px-2 text-white">Partner visit video (2 min)</td><td className="py-2 px-2">Full video</td><td className="py-2 px-2">YouTube</td></tr>
                    <tr className="border-b border-white/5"><td className="py-2 px-2">2</td><td className="py-2 px-2">↳</td><td className="py-2 px-2">60-sec highlight reel</td><td className="py-2 px-2">Instagram Reel</td></tr>
                    <tr className="border-b border-white/5"><td className="py-2 px-2">3</td><td className="py-2 px-2">↳</td><td className="py-2 px-2">30-sec teaser</td><td className="py-2 px-2">TikTok</td></tr>
                    <tr className="border-b border-white/5"><td className="py-2 px-2">4</td><td className="py-2 px-2">↳</td><td className="py-2 px-2">15-sec vertical clip</td><td className="py-2 px-2">YouTube Shorts</td></tr>
                    <tr className="border-b border-white/5"><td className="py-2 px-2">5</td><td className="py-2 px-2">↳</td><td className="py-2 px-2">Photo carousel (5 slides)</td><td className="py-2 px-2">Instagram Feed</td></tr>
                    <tr className="border-b border-white/5"><td className="py-2 px-2">6</td><td className="py-2 px-2">↳</td><td className="py-2 px-2">Quote graphic</td><td className="py-2 px-2">Twitter/X</td></tr>
                    <tr className="border-b border-white/5"><td className="py-2 px-2">7</td><td className="py-2 px-2">↳</td><td className="py-2 px-2">Stories (6-8 frames)</td><td className="py-2 px-2">IG Stories</td></tr>
                    <tr className="border-b border-white/5"><td className="py-2 px-2">8</td><td className="py-2 px-2">↳</td><td className="py-2 px-2">Blog post</td><td className="py-2 px-2">Website</td></tr>
                    <tr className="border-b border-white/5"><td className="py-2 px-2">9</td><td className="py-2 px-2">↳</td><td className="py-2 px-2">Email newsletter feature</td><td className="py-2 px-2">Email</td></tr>
                    <tr><td className="py-2 px-2">10</td><td className="py-2 px-2">↳</td><td className="py-2 px-2">WhatsApp broadcast message</td><td className="py-2 px-2">WhatsApp</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Email Marketing Tab */}
        {activeTab === 'email' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Email <span className="text-[#c9a227]">Marketing</span></h3>
              <p className="text-gray-400">Automated sequences and triggered emails</p>
            </div>

            {/* Welcome Sequence */}
            <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl p-6 border border-blue-500/30">
              <div className="flex items-center gap-3 mb-4">
                <Send className="text-blue-400" size={24} />
                <h4 className="text-lg font-bold">Welcome Email Sequence (7 Days)</h4>
              </div>
              <div className="space-y-4">
                {[
                  { day: 'Day 0', subject: 'Welcome to Nuqta! Here\'s your AED 25 bonus 🎉', content: 'Thank them, explain how to claim bonus, show 3 top partners', cta: 'Claim Your Bonus' },
                  { day: 'Day 1', subject: 'Your first cashback is waiting...', content: 'Remind about bonus, show nearest partners, explain QR process', cta: 'Find Partners Near You' },
                  { day: 'Day 3', subject: 'How Sarah saved AED 500 in her first month', content: 'User success story, social proof, tips to maximize', cta: 'Start Saving Today' },
                  { day: 'Day 5', subject: 'Did you know? You can gift coins to friends!', content: 'Explain gifting feature, referral program, earn more', cta: 'Gift Coins Now' },
                  { day: 'Day 7', subject: 'Your weekly savings report 📊', content: 'Show savings (even if 0), missed opportunities, encouragement', cta: 'See Your Dashboard' },
                ].map((email, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs font-bold">{email.day}</span>
                      <span className="font-medium text-white">{email.subject}</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">{email.content}</p>
                    <span className="text-xs bg-[#c9a227]/20 text-[#c9a227] px-2 py-1 rounded">CTA: {email.cta}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Transaction Triggers */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-bold text-[#c9a227] mb-4">Transaction-Triggered Emails</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { trigger: 'First Transaction', subject: 'You did it! AED X earned 🎉', timing: 'Immediate' },
                  { trigger: '5th Transaction', subject: 'You\'re on fire! 5 transactions complete', timing: 'Immediate' },
                  { trigger: 'AED 100 Total Saved', subject: 'Milestone: AED 100 saved! What\'s next?', timing: 'Immediate' },
                  { trigger: 'No activity 7 days', subject: 'We miss you! Here\'s what you\'re missing', timing: '7 days inactive' },
                  { trigger: 'No activity 14 days', subject: 'Exclusive: 2x cashback this weekend only', timing: '14 days inactive' },
                  { trigger: 'Birthday', subject: 'Happy Birthday! 🎂 AED 50 bonus inside', timing: 'On birthday' },
                  { trigger: 'Referral Success', subject: 'Your friend joined! AED 10 added', timing: 'Immediate' },
                  { trigger: 'New Partner Launch', subject: '[Name] just joined Nuqta - X% cashback!', timing: 'Launch day' },
                ].map((email, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-white">{email.trigger}</span>
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">{email.timing}</span>
                    </div>
                    <p className="text-sm text-gray-400">{email.subject}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Re-engagement Sequence */}
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-500/30">
              <div className="flex items-center gap-3 mb-4">
                <RefreshCw className="text-orange-400" size={24} />
                <h4 className="text-lg font-bold">Re-engagement Sequence (Win-Back)</h4>
              </div>
              <div className="space-y-4">
                {[
                  { day: 'Day 14', subject: 'We noticed you haven\'t been around...', offer: 'Show missed savings opportunities' },
                  { day: 'Day 21', subject: 'Here\'s AED 20 to come back!', offer: 'Limited-time bonus coins' },
                  { day: 'Day 30', subject: 'Last chance: Your bonus expires tomorrow', offer: 'Urgency + FOMO' },
                  { day: 'Day 45', subject: 'What went wrong? Quick survey (2 mins)', offer: 'Feedback request + incentive' },
                ].map((email, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white/5 rounded-lg p-4">
                    <span className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-xs font-bold whitespace-nowrap">{email.day}</span>
                    <div className="flex-1">
                      <p className="text-sm text-white font-medium">{email.subject}</p>
                      <p className="text-xs text-gray-500">{email.offer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Email Best Practices */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-bold text-[#c9a227] mb-4">Email Best Practices</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h5 className="font-medium mb-2">Subject Line Rules</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Keep under 50 characters</li>
                    <li>• Use numbers (AED X saved)</li>
                    <li>• Add 1 emoji max</li>
                    <li>• Create urgency when relevant</li>
                    <li>• A/B test every subject</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Send Times (UAE)</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• <strong>Best:</strong> Thu 10 AM</li>
                    <li>• <strong>Good:</strong> Tue 8 PM</li>
                    <li>• <strong>Avoid:</strong> Friday PM</li>
                    <li>• <strong>Ramadan:</strong> After Iftar</li>
                    <li>• <strong>Weekend:</strong> Sat 11 AM</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">KPI Targets</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Open rate: &gt;25%</li>
                    <li>• Click rate: &gt;5%</li>
                    <li>• Unsubscribe: &lt;0.5%</li>
                    <li>• Welcome sequence: &gt;40% open</li>
                    <li>• Transactional: &gt;60% open</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* KPIs & Testing Tab */}
        {activeTab === 'kpis' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">KPIs & <span className="text-[#c9a227]">A/B Testing</span></h3>
              <p className="text-gray-400">Track performance and optimize campaigns</p>
            </div>

            {/* Weekly KPI Dashboard */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-purple-500/20 rounded-xl p-6 border border-[#c9a227]/30">
              <h4 className="text-lg font-bold mb-4">Weekly KPI Dashboard</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 px-2">Metric</th>
                      <th className="text-right py-2 px-2">Target</th>
                      <th className="text-right py-2 px-2">Good</th>
                      <th className="text-right py-2 px-2">Great</th>
                      <th className="text-left py-2 px-2">How to Improve</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-400">
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-2 font-medium text-white">New Users/Week</td>
                      <td className="py-3 px-2 text-right">200</td>
                      <td className="py-3 px-2 text-right text-green-400">300</td>
                      <td className="py-3 px-2 text-right text-[#c9a227]">500+</td>
                      <td className="py-3 px-2">Increase ad spend, add influencers</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-2 font-medium text-white">Cost per Install</td>
                      <td className="py-3 px-2 text-right">AED 5</td>
                      <td className="py-3 px-2 text-right text-green-400">AED 3</td>
                      <td className="py-3 px-2 text-right text-[#c9a227]">&lt;AED 2</td>
                      <td className="py-3 px-2">Better targeting, organic channels</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-2 font-medium text-white">Social Engagement Rate</td>
                      <td className="py-3 px-2 text-right">3%</td>
                      <td className="py-3 px-2 text-right text-green-400">5%</td>
                      <td className="py-3 px-2 text-right text-[#c9a227]">8%+</td>
                      <td className="py-3 px-2">Better hooks, more UGC, trends</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-2 font-medium text-white">Website Click Rate</td>
                      <td className="py-3 px-2 text-right">2%</td>
                      <td className="py-3 px-2 text-right text-green-400">4%</td>
                      <td className="py-3 px-2 text-right text-[#c9a227]">6%+</td>
                      <td className="py-3 px-2">Stronger CTAs, better landing page</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-2 font-medium text-white">Referral Rate</td>
                      <td className="py-3 px-2 text-right">10%</td>
                      <td className="py-3 px-2 text-right text-green-400">20%</td>
                      <td className="py-3 px-2 text-right text-[#c9a227]">30%+</td>
                      <td className="py-3 px-2">Better incentives, easier sharing</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-2 font-medium text-white">Email Open Rate</td>
                      <td className="py-3 px-2 text-right">20%</td>
                      <td className="py-3 px-2 text-right text-green-400">30%</td>
                      <td className="py-3 px-2 text-right text-[#c9a227]">40%+</td>
                      <td className="py-3 px-2">Better subject lines, segmentation</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-medium text-white">D30 Retention</td>
                      <td className="py-3 px-2 text-right">20%</td>
                      <td className="py-3 px-2 text-right text-green-400">25%</td>
                      <td className="py-3 px-2 text-right text-[#c9a227]">35%+</td>
                      <td className="py-3 px-2">Better onboarding, engagement loops</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* A/B Testing Framework */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <TestTube className="text-[#c9a227]" size={24} />
                <h4 className="text-lg font-bold">A/B Testing Framework</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-[#c9a227] mb-3">What to Test</h5>
                  <ul className="space-y-3 text-sm">
                    {[
                      { element: 'Headlines', examples: '"Get 10% back" vs "Save AED 50"' },
                      { element: 'CTA Buttons', examples: '"Download Now" vs "Start Saving"' },
                      { element: 'Visuals', examples: 'Product shots vs lifestyle images' },
                      { element: 'Social Proof', examples: 'User count vs savings amount' },
                      { element: 'Offers', examples: 'AED bonus vs % cashback' },
                      { element: 'Audiences', examples: 'Foodies vs deal hunters' },
                    ].map((test, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check size={14} className="text-[#c9a227] mt-1" />
                        <div>
                          <span className="text-white font-medium">{test.element}:</span>
                          <span className="text-gray-400 ml-1">{test.examples}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-[#c9a227] mb-3">Testing Rules</h5>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-[#c9a227]/20 rounded-full flex items-center justify-center flex-shrink-0 text-[#c9a227] text-xs">1</div>
                      <span>Test ONE variable at a time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-[#c9a227]/20 rounded-full flex items-center justify-center flex-shrink-0 text-[#c9a227] text-xs">2</div>
                      <span>Minimum 1,000 impressions per variant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-[#c9a227]/20 rounded-full flex items-center justify-center flex-shrink-0 text-[#c9a227] text-xs">3</div>
                      <span>Run for minimum 7 days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-[#c9a227]/20 rounded-full flex items-center justify-center flex-shrink-0 text-[#c9a227] text-xs">4</div>
                      <span>95% confidence before declaring winner</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-[#c9a227]/20 rounded-full flex items-center justify-center flex-shrink-0 text-[#c9a227] text-xs">5</div>
                      <span>Document results in testing log</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Competitor Analysis */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="text-[#c9a227]" size={24} />
                <h4 className="text-lg font-bold">Competitor Messaging Analysis</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 px-2">Competitor</th>
                      <th className="text-left py-2 px-2">Their Message</th>
                      <th className="text-left py-2 px-2">Nuqta Counter-Position</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-400">
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-2 font-medium text-white">Entertainer</td>
                      <td className="py-3 px-2">"Buy 1 Get 1 Free"</td>
                      <td className="py-3 px-2 text-[#c9a227]">"Why buy a subscription when cashback is free?"</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-2 font-medium text-white">Smiles</td>
                      <td className="py-3 px-2">"Points on everything"</td>
                      <td className="py-3 px-2 text-[#c9a227]">"Real money, not points that expire"</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-2 font-medium text-white">Credit Cards</td>
                      <td className="py-3 px-2">"2% cashback"</td>
                      <td className="py-3 px-2 text-[#c9a227]">"10% cashback. 5x your card rewards"</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-2 font-medium text-white">Careem Pay</td>
                      <td className="py-3 px-2">"Rewards on rides"</td>
                      <td className="py-3 px-2 text-[#c9a227]">"Rewards on EVERYTHING you buy locally"</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-medium text-white">Noon</td>
                      <td className="py-3 px-2">"Online deals"</td>
                      <td className="py-3 px-2 text-[#c9a227]">"Rewards where you actually spend: offline"</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Crisis Communication */}
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl p-6 border border-red-500/30">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="text-red-400" size={24} />
                <h4 className="text-lg font-bold">Crisis Communication Plan</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-red-400 mb-3">Scenario Responses</h5>
                  <ul className="space-y-3 text-sm">
                    {[
                      { crisis: 'App Down', response: 'Acknowledge within 15 min, update every 30 min until resolved' },
                      { crisis: 'Negative Review Viral', response: 'Respond publicly within 1 hour, take offline to resolve' },
                      { crisis: 'Partner Complaint', response: 'Direct outreach within 2 hours, offer compensation if valid' },
                      { crisis: 'Data Concern', response: 'Immediate CEO statement, link to privacy policy' },
                    ].map((item, idx) => (
                      <li key={idx} className="bg-white/5 rounded-lg p-3">
                        <span className="text-white font-medium">{item.crisis}:</span>
                        <p className="text-gray-400 mt-1">{item.response}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-red-400 mb-3">Response Templates</h5>
                  <div className="bg-white/5 rounded-lg p-4 text-sm">
                    <p className="text-gray-300 font-medium mb-2">Standard Complaint Response:</p>
                    <p className="text-gray-400 italic">"Hi [Name], we're really sorry to hear about your experience. This isn't the standard we hold ourselves to. We've DMed you to resolve this personally. Thank you for giving us the chance to make it right."</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 text-sm mt-3">
                    <p className="text-gray-300 font-medium mb-2">App Issue Response:</p>
                    <p className="text-gray-400 italic">"We're aware some users are experiencing [issue]. Our team is actively working on it. We'll update you as soon as it's resolved. Sorry for any inconvenience!"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Templates Tab */}
        {activeTab === 'templates' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Ready-to-Use <span className="text-[#c9a227]">Templates</span></h3>
              <p className="text-gray-400">Influencer outreach, partner materials, and more</p>
            </div>

            {/* Influencer Outreach */}
            <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-xl p-6 border border-pink-500/30">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-pink-400" size={24} />
                <h4 className="text-lg font-bold">Influencer Outreach Templates</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <h5 className="font-medium text-pink-400 mb-3">Instagram DM (Nano)</h5>
                  <div className="text-sm text-gray-300 bg-black/20 rounded p-3 font-mono">
                    <p>Hey [Name]! 👋</p>
                    <p className="mt-2">Love your content about [topic]! We're Nuqta, a new cashback app launching in Dubai.</p>
                    <p className="mt-2">Would love to collab - free meals at partner restaurants + exclusive first access to the app.</p>
                    <p className="mt-2">Interested? 🙌</p>
                  </div>
                  <button onClick={() => copyToClipboard("Hey [Name]! 👋\n\nLove your content about [topic]! We're Nuqta, a new cashback app launching in Dubai.\n\nWould love to collab - free meals at partner restaurants + exclusive first access to the app.\n\nInterested? 🙌", 900)} className="mt-3 text-xs text-[#c9a227] hover:underline flex items-center gap-1">
                    <Copy size={12} /> Copy Template
                  </button>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h5 className="font-medium text-pink-400 mb-3">Email (Micro/Macro)</h5>
                  <div className="text-sm text-gray-300 bg-black/20 rounded p-3 font-mono">
                    <p><strong>Subject:</strong> Collab Opportunity - Nuqta x [Name]</p>
                    <p className="mt-2">Hi [Name],</p>
                    <p className="mt-2">I'm [Your Name] from Nuqta, the new cashback app helping people save 10% on everyday purchases in Dubai.</p>
                    <p className="mt-2">Your audience aligns perfectly with our mission. We'd love to discuss a paid partnership (AED [X]) + performance bonus.</p>
                    <p className="mt-2">Quick call this week?</p>
                    <p className="mt-2">Best,<br/>[Name]</p>
                  </div>
                  <button onClick={() => copyToClipboard("Subject: Collab Opportunity - Nuqta x [Name]\n\nHi [Name],\n\nI'm [Your Name] from Nuqta, the new cashback app helping people save 10% on everyday purchases in Dubai.\n\nYour audience aligns perfectly with our mission. We'd love to discuss a paid partnership (AED [X]) + performance bonus.\n\nQuick call this week?\n\nBest,\n[Name]", 901)} className="mt-3 text-xs text-[#c9a227] hover:underline flex items-center gap-1">
                    <Copy size={12} /> Copy Template
                  </button>
                </div>
              </div>
            </div>

            {/* Partner Co-Marketing */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Handshake className="text-[#c9a227]" size={24} />
                <h4 className="text-lg font-bold">Partner Co-Marketing Kit</h4>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h5 className="font-medium mb-3">Social Post for Partners</h5>
                  <div className="text-sm text-gray-300 bg-black/20 rounded p-3 font-mono text-xs">
                    <p>🎉 Exciting news! We've partnered with @NuqtaApp!</p>
                    <p className="mt-2">Now you can earn [X]% cashback every time you visit us.</p>
                    <p className="mt-2">Download Nuqta, scan our QR, and start saving! 💰</p>
                    <p className="mt-2">#Nuqta #[YourBrand] #DubaiDeals</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h5 className="font-medium mb-3">SMS Template for Partners</h5>
                  <div className="text-sm text-gray-300 bg-black/20 rounded p-3 font-mono text-xs">
                    <p>[Brand] x Nuqta: Get [X]% cashback on your next visit! Download Nuqta app, show QR at checkout. Valid till [date]. T&C apply.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h5 className="font-medium mb-3">Email Newsletter Blurb</h5>
                  <div className="text-sm text-gray-300 bg-black/20 rounded p-3 font-mono text-xs">
                    <p><strong>NEW: Earn Cashback with Nuqta!</strong></p>
                    <p className="mt-1">We've partnered with Nuqta to reward our loyal customers. Download the app and get [X]% back on every visit!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Press & Media */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Newspaper className="text-[#c9a227]" size={24} />
                <h4 className="text-lg font-bold">Press & Media Templates</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <h5 className="font-medium text-[#c9a227] mb-3">Press Release Boilerplate</h5>
                  <div className="text-sm text-gray-300 bg-black/20 rounded p-3">
                    <p><strong>About Nuqta</strong></p>
                    <p className="mt-2">Nuqta is a UAE-based rewards platform that gives users instant cashback on everyday offline purchases. Founded in 2024, Nuqta partners with local cafes, restaurants, salons, and retailers to offer 5-10% cashback with zero subscription fees. The company's mission is to make smart spending accessible to everyone in the UAE.</p>
                    <p className="mt-2"><strong>Media Contact:</strong> press@nuqta.app</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h5 className="font-medium text-[#c9a227] mb-3">Founder Quote Bank</h5>
                  <ul className="text-sm text-gray-400 space-y-3">
                    <li>"We built Nuqta because we believe saving money shouldn't require a subscription or complicated points system."</li>
                    <li>"Our goal is simple: help people save money every time they spend, at places they already love."</li>
                    <li>"Dubai is expensive, but it doesn't have to feel that way. Nuqta is here to change that."</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Customer Service Scripts */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <PhoneCall className="text-[#c9a227]" size={24} />
                <h4 className="text-lg font-bold">Customer Response Templates</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { scenario: 'Cashback not showing', response: 'Hi! Cashback can take up to 24 hours to appear. If it\'s been longer, please share your receipt and transaction date, and we\'ll investigate right away!' },
                  { scenario: 'How to refer friends', response: 'Great question! Go to Profile → Referral → Share your unique link. When your friend makes their first transaction, you both get AED 10!' },
                  { scenario: 'Partner not accepting', response: 'Sorry about that! Some staff may be new to Nuqta. Please show them the merchant dashboard or have them call us at [number]. We\'ll sort it out!' },
                  { scenario: 'Feature request', response: 'Love the feedback! I\'ve shared this with our product team. We\'re always improving based on user suggestions. Thanks for helping us get better!' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4">
                    <h5 className="font-medium text-white mb-2">{item.scenario}</h5>
                    <p className="text-sm text-gray-400">{item.response}</p>
                    <button onClick={() => copyToClipboard(item.response, idx + 950)} className="mt-2 text-xs text-[#c9a227] hover:underline flex items-center gap-1">
                      <Copy size={12} /> Copy
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Budget Tab */}
        {activeTab === 'budget' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Marketing <span className="text-[#c9a227]">Budget</span></h3>
              <p className="text-gray-400">H1 2026 allocation (from $200K Tranche 1)</p>
            </div>

            {/* Budget Overview */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="grid md:grid-cols-4 gap-6 mb-6">
                <div className="text-center p-4 bg-[#c9a227]/20 rounded-lg border border-[#c9a227]/30">
                  <div className="text-3xl font-bold text-[#c9a227]">AED 150K</div>
                  <div className="text-sm">Total Marketing Budget</div>
                  <div className="text-xs text-gray-500">~$40K / 20% of Tranche 1</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">AED 25K</div>
                  <div className="text-sm">Monthly Spend</div>
                  <div className="text-xs text-gray-500">6 months avg</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">&lt;AED 5</div>
                  <div className="text-sm">Target CAC</div>
                  <div className="text-xs text-gray-500">Blended cost</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400">5,000</div>
                  <div className="text-sm">Target Users</div>
                  <div className="text-xs text-gray-500">MAU by H1 end</div>
                </div>
              </div>
            </div>

            {/* Budget Breakdown */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-bold text-[#c9a227] mb-4">Budget Allocation</h4>
              <div className="space-y-4">
                {[
                  { category: 'Online Ads (Meta, Google, TikTok)', amount: 60000, pct: 40, barClass: 'bg-blue-500' },
                  { category: 'Influencer Marketing', amount: 37500, pct: 25, barClass: 'bg-pink-500' },
                  { category: 'Offline Ads & Events', amount: 30000, pct: 20, barClass: 'bg-green-500' },
                  { category: 'Content Production', amount: 15000, pct: 10, barClass: 'bg-purple-500' },
                  { category: 'PR & Misc', amount: 7500, pct: 5, barClass: 'bg-orange-500' },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">{item.category}</span>
                      <span className="text-sm font-medium">AED {item.amount.toLocaleString()} ({item.pct}%)</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className={`${item.barClass} h-2 rounded-full`}
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Breakdown */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-bold text-[#c9a227] mb-4">Monthly Spend Plan</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-2">Month</th>
                      <th className="text-right py-3 px-2">Online</th>
                      <th className="text-right py-3 px-2">Influencer</th>
                      <th className="text-right py-3 px-2">Offline</th>
                      <th className="text-right py-3 px-2">Content</th>
                      <th className="text-right py-3 px-2">Total</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-400">
                    {[
                      { month: 'Jan (Pre-launch)', online: 5000, influencer: 10000, offline: 2000, content: 5000 },
                      { month: 'Feb (Launch)', online: 15000, influencer: 10000, offline: 10000, content: 5000 },
                      { month: 'Mar', online: 12000, influencer: 7500, offline: 5000, content: 2500 },
                      { month: 'Apr', online: 10000, influencer: 5000, offline: 5000, content: 1500 },
                      { month: 'May', online: 10000, influencer: 3000, offline: 5000, content: 500 },
                      { month: 'Jun', online: 8000, influencer: 2000, offline: 3000, content: 500 },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-white/5">
                        <td className="py-3 px-2 font-medium text-white">{row.month}</td>
                        <td className="py-3 px-2 text-right">AED {row.online.toLocaleString()}</td>
                        <td className="py-3 px-2 text-right">AED {row.influencer.toLocaleString()}</td>
                        <td className="py-3 px-2 text-right">AED {row.offline.toLocaleString()}</td>
                        <td className="py-3 px-2 text-right">AED {row.content.toLocaleString()}</td>
                        <td className="py-3 px-2 text-right font-medium text-[#c9a227]">
                          AED {(row.online + row.influencer + row.offline + row.content).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ROI Targets */}
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-500/30">
              <h4 className="text-lg font-bold mb-4">ROI Targets</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">3x</div>
                  <div className="text-sm">ROAS Target</div>
                  <div className="text-xs text-gray-500">Return on Ad Spend</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">AED 30</div>
                  <div className="text-sm">LTV Target</div>
                  <div className="text-xs text-gray-500">Lifetime Value per User</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">6:1</div>
                  <div className="text-sm">LTV:CAC Ratio</div>
                  <div className="text-xs text-gray-500">Healthy unit economics</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Content Series Tab - 5 Social Media Series */}
        {activeTab === 'series' && (
          <div className="space-y-8">
            {/* Series Overview - Refined */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-purple-500/20 rounded-xl p-6 border border-[#c9a227]/30">
              <h3 className="text-2xl font-bold text-[#c9a227] mb-2">5 Content Series Strategy</h3>
              <p className="text-gray-400 text-sm mb-4">Refined from rough ideas into strategic content pillars</p>
              <div className="grid md:grid-cols-5 gap-3">
                {[
                  { name: 'Dubai Family Budget', freq: '3x/week', format: 'Street Interview', why: 'Relatable, emotional, shareable' },
                  { name: 'Nuqta Insider', freq: '2x/week', format: '60-sec Tips', why: 'Educational, builds product knowledge' },
                  { name: 'Hidden Gems UAE', freq: '2x/week', format: 'Discovery Vlog', why: 'Travel content, showcases merchants' },
                  { name: 'Nuqta Treasure Hunt', freq: '1x/week', format: 'Gamified Challenge', why: 'Viral potential, drives engagement' },
                  { name: 'Taste of Home', freq: '1x/week', format: 'Culture Series', why: 'Targets communities, high share rate' },
                ].map((series, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-3 text-center">
                    <div className="text-[#c9a227] font-bold text-sm mb-1">{series.name}</div>
                    <div className="text-xs text-gray-400">{series.freq}</div>
                    <div className="text-xs text-gray-500 mt-1">{series.format}</div>
                    <div className="text-xs text-green-400/70 mt-2 italic">{series.why}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Series 1: Dubai Family Budget (refined from "How Much You Save") */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <DollarSign className="text-green-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-400">Series 1: Dubai Family Budget</h3>
                  <p className="text-gray-400 text-sm">Real families share monthly costs, we show savings potential | 3x/week</p>
                </div>
              </div>

              {/* The Hook */}
              <div className="bg-green-500/10 rounded-lg p-4 mb-6 border border-green-500/30">
                <div className="text-xs text-green-400 uppercase tracking-wider mb-1">The Hook</div>
                <div className="text-white font-medium">
                  "We ask real Dubai families: How much do you spend monthly? Then we show them exactly how much they could save with Nuqta."
                </div>
                <div className="text-gray-400 text-sm mt-2">
                  Why it works: People love seeing real numbers. It's relatable, emotional, and highly shareable.
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-white mb-3">Episode Concepts</h4>
                  <div className="space-y-2">
                    {[
                      { title: 'The Grocery Family', desc: 'Family of 4 spends AED 3,500/month on groceries' },
                      { title: 'The Coffee Addict', desc: 'Young professional - AED 900/month on coffee' },
                      { title: 'The University Student', desc: 'Student budget breakdown in Knowledge Village' },
                      { title: 'The New Parents', desc: 'Baby expenses that add up fast' },
                      { title: 'The Foodie Couple', desc: 'Date nights costing AED 2,000/month' },
                      { title: 'The Fitness Journey', desc: 'Gym, supplements, healthy food costs' },
                      { title: 'The Weekend Warriors', desc: 'Entertainment & activities budget' },
                      { title: 'The Beauty Budget', desc: 'Salon visits, skincare, self-care' },
                    ].map((ep, idx) => (
                      <div key={idx} className="bg-white/5 p-2 rounded">
                        <div className="text-sm text-white font-medium">{ep.title}</div>
                        <div className="text-xs text-gray-400">{ep.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-white mb-2">Video Format (60-90 sec)</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>1. Hook: "How much do you spend on [X] monthly?"</li>
                      <li>2. Street interview: Real person shares their number</li>
                      <li>3. Calculator overlay: Show potential savings with Nuqta</li>
                      <li>4. Reaction shot: Their face when they see the savings</li>
                      <li>5. CTA: "Download Nuqta. Start saving today."</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Target KPIs</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-green-500/10 p-2 rounded">
                        <div className="text-green-400 font-bold">15K+</div>
                        <div className="text-gray-400">Views/episode</div>
                      </div>
                      <div className="bg-green-500/10 p-2 rounded">
                        <div className="text-green-400 font-bold">8%+</div>
                        <div className="text-gray-400">Share rate</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Hashtags</h4>
                    <div className="flex flex-wrap gap-1">
                      {['#DubaiBudget', '#UAEFamilies', '#MoneySavingTips', '#DubaiLife', '#NuqtaSavings'].map((tag, idx) => (
                        <span key={idx} className="text-xs bg-[#c9a227]/20 text-[#c9a227] px-2 py-1 rounded">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Series 2: Nuqta Insider (refined from "Did You Know") */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Mic className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-400">Series 2: Nuqta Insider</h3>
                  <p className="text-gray-400 text-sm">Quick 60-sec tips about hidden app features | 2x/week</p>
                </div>
              </div>

              {/* The Hook */}
              <div className="bg-blue-500/10 rounded-lg p-4 mb-6 border border-blue-500/30">
                <div className="text-xs text-blue-400 uppercase tracking-wider mb-1">The Hook</div>
                <div className="text-white font-medium">
                  "Did you know you can [feature] with Nuqta? Here's how in 60 seconds..."
                </div>
                <div className="text-gray-400 text-sm mt-2">
                  Why it works: Educational content builds product knowledge. Users discover features they didn't know existed.
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-white mb-3">Episode Concepts</h4>
                  <div className="space-y-2">
                    {[
                      { tip: 'Track all your cashback in one dashboard', hook: 'Stop checking multiple apps' },
                      { tip: 'Find the nearest deals with map view', hook: 'Never miss a deal nearby' },
                      { tip: 'Stack coins from multiple purchases', hook: 'Your coins never expire' },
                      { tip: 'Share rewards with family members', hook: 'Family savings multiplied' },
                      { tip: 'Get notified when your favorite shop has deals', hook: 'Be first to know' },
                      { tip: 'Set savings goals and track progress', hook: 'Gamify your savings' },
                      { tip: 'Refer friends and both earn AED 10', hook: 'Literally free money' },
                      { tip: 'See your total lifetime savings', hook: 'The number that motivates' },
                    ].map((ep, idx) => (
                      <div key={idx} className="bg-white/5 p-2 rounded">
                        <div className="text-sm text-white font-medium">{ep.tip}</div>
                        <div className="text-xs text-blue-400">Hook: "{ep.hook}"</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-white mb-2">Production Requirements</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Ring light setup for consistent lighting</li>
                      <li>• Quality microphone (podcast style)</li>
                      <li>• Screen recording for app demos</li>
                      <li>• Branded intro/outro animations</li>
                      <li>• Cozy studio corner setup</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">KPIs</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-blue-500/10 p-2 rounded">
                        <div className="text-blue-400 font-bold">5K+</div>
                        <div className="text-gray-400">Views/episode</div>
                      </div>
                      <div className="bg-blue-500/10 p-2 rounded">
                        <div className="text-blue-400 font-bold">100+</div>
                        <div className="text-gray-400">App downloads</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Hashtags</h4>
                    <div className="flex flex-wrap gap-1">
                      {['#DidYouKnow', '#NuqtaTips', '#AppHacks', '#SaveSmart', '#NuqtaFeatures'].map((tag, idx) => (
                        <span key={idx} className="text-xs bg-[#c9a227]/20 text-[#c9a227] px-2 py-1 rounded">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Series 3: Nuqta Discovers */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <MapPin className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-400">Series 3: Nuqta Discovers</h3>
                  <p className="text-gray-400">Location & Deals Discovery | Vlog Style | 2x per week</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-white mb-3">Episode Ideas (10)</h4>
                  <div className="space-y-2">
                    {[
                      'Ep 1: Dubai Marina - Hidden Cafe Gems',
                      'Ep 2: Al Quoz - Art District Food Scene',
                      'Ep 3: JBR - Beach Day on a Budget',
                      'Ep 4: Mall of Emirates - Best Value Finds',
                      'Ep 5: Deira - Traditional Market Deals',
                      'Ep 6: Business Bay - Lunch Spots Under AED 30',
                      'Ep 7: Jumeirah - Brunch Without Breaking Bank',
                      'Ep 8: Silicon Oasis - Student-Friendly Spots',
                      'Ep 9: Downtown - Date Night Deals',
                      'Ep 10: Global Village - Festival Savings Guide',
                    ].map((ep, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 p-2 rounded">
                        <Check size={14} className="text-purple-400 flex-shrink-0" />
                        {ep}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-white mb-2">Production Requirements</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Gimbal for smooth walking shots</li>
                      <li>• Wide-angle lens for location shots</li>
                      <li>• Portable battery pack</li>
                      <li>• Location permissions from merchants</li>
                      <li>• Transportation for location hopping</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">KPIs</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-purple-500/10 p-2 rounded">
                        <div className="text-purple-400 font-bold">15K+</div>
                        <div className="text-gray-400">Views/episode</div>
                      </div>
                      <div className="bg-purple-500/10 p-2 rounded">
                        <div className="text-purple-400 font-bold">500+</div>
                        <div className="text-gray-400">Saves/shares</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Hashtags</h4>
                    <div className="flex flex-wrap gap-1">
                      {['#NuqtaDiscovers', '#DubaiHiddenGems', '#UAEFoodie', '#DubaiOnBudget', '#ExploreDubai'].map((tag, idx) => (
                        <span key={idx} className="text-xs bg-[#c9a227]/20 text-[#c9a227] px-2 py-1 rounded">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Series 4: Deal Finder Challenge */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#c9a227]/20 flex items-center justify-center">
                  <Trophy className="text-[#c9a227]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#c9a227]">Series 4: Deal Finder Challenge</h3>
                  <p className="text-gray-400">Hide & Seek Coin Card | Treasure Hunt | 1x per week</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-white mb-3">Episode Ideas (10)</h4>
                  <div className="space-y-2">
                    {[
                      'Ep 1: Mall of Emirates - First Card Hunt!',
                      'Ep 2: Dubai Mall - Level Up the Stakes',
                      'Ep 3: JBR Beach - Outdoor Challenge',
                      'Ep 4: Global Village - Festival Hunt',
                      'Ep 5: Citywalk - Urban Treasure',
                      'Ep 6: Ibn Battuta Mall - History Hunt',
                      'Ep 7: La Mer - Beach Day Prize',
                      'Ep 8: Al Seef - Heritage Area Search',
                      'Ep 9: Dragon Mart - Mega Mall Mission',
                      'Ep 10: Grand Finale - AED 1000 Card!',
                    ].map((ep, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 p-2 rounded">
                        <Check size={14} className="text-[#c9a227] flex-shrink-0" />
                        {ep}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-white mb-2">How It Works</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>1. Hide Nuqta coin card at location</li>
                      <li>2. Post clues on social media</li>
                      <li>3. First finder wins the card value</li>
                      <li>4. Winner must have Nuqta app installed</li>
                      <li>5. Document the reveal for content</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">KPIs</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-[#c9a227]/10 p-2 rounded">
                        <div className="text-[#c9a227] font-bold">50K+</div>
                        <div className="text-gray-400">Views/episode</div>
                      </div>
                      <div className="bg-[#c9a227]/10 p-2 rounded">
                        <div className="text-[#c9a227] font-bold">1000+</div>
                        <div className="text-gray-400">New followers</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Hashtags</h4>
                    <div className="flex flex-wrap gap-1">
                      {['#NuqtaChallenge', '#DealFinder', '#TreasureHunt', '#WinWithNuqta', '#NuqtaCoinCard'].map((tag, idx) => (
                        <span key={idx} className="text-xs bg-[#c9a227]/20 text-[#c9a227] px-2 py-1 rounded">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Weekly Content Calendar */}
            <div className="bg-gradient-to-r from-[#c9a227]/10 to-blue-500/10 rounded-xl p-6 border border-[#c9a227]/30">
              <h3 className="text-xl font-bold text-[#c9a227] mb-6">Weekly Content Calendar</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-2 text-gray-400">Day</th>
                      <th className="text-left py-3 px-2 text-gray-400">Series</th>
                      <th className="text-left py-3 px-2 text-gray-400">Platform</th>
                      <th className="text-left py-3 px-2 text-gray-400">Time</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-2 font-medium">Sunday</td>
                      <td className="py-3 px-2"><span className="text-green-400">How Much You Save</span></td>
                      <td className="py-3 px-2">Instagram Reels, TikTok</td>
                      <td className="py-3 px-2">7:00 PM</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-2 font-medium">Monday</td>
                      <td className="py-3 px-2"><span className="text-blue-400">Did You Know?</span></td>
                      <td className="py-3 px-2">Instagram, YouTube Shorts</td>
                      <td className="py-3 px-2">12:00 PM</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-2 font-medium">Tuesday</td>
                      <td className="py-3 px-2"><span className="text-purple-400">Nuqta Discovers</span></td>
                      <td className="py-3 px-2">Instagram Reels, TikTok</td>
                      <td className="py-3 px-2">6:00 PM</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-2 font-medium">Wednesday</td>
                      <td className="py-3 px-2"><span className="text-green-400">How Much You Save</span></td>
                      <td className="py-3 px-2">Instagram Reels, TikTok</td>
                      <td className="py-3 px-2">7:00 PM</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-2 font-medium">Thursday</td>
                      <td className="py-3 px-2"><span className="text-blue-400">Did You Know?</span></td>
                      <td className="py-3 px-2">Instagram, YouTube Shorts</td>
                      <td className="py-3 px-2">12:00 PM</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-2 font-medium">Friday</td>
                      <td className="py-3 px-2"><span className="text-[#c9a227]">Deal Finder Challenge</span></td>
                      <td className="py-3 px-2">All Platforms</td>
                      <td className="py-3 px-2">10:00 AM</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-2 font-medium">Saturday</td>
                      <td className="py-3 px-2">
                        <span className="text-green-400">Savings</span> + <span className="text-purple-400">Discovers</span>
                      </td>
                      <td className="py-3 px-2">Instagram Reels, TikTok</td>
                      <td className="py-3 px-2">5:00 PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-500 text-xs mt-4">Total: 8 posts per week across all series</p>
            </div>

            {/* Launch Checklist */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Series Launch Checklist</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-[#c9a227] mb-3">Pre-Launch (Week 1)</h4>
                  <div className="space-y-2">
                    {[
                      'Create dedicated Instagram account',
                      'Create TikTok account',
                      'Design series thumbnails & branding',
                      'Write first 4 scripts (one per series)',
                      'Scout first 3 locations',
                      'Order Nuqta coin cards for giveaways',
                      'Set up content calendar in scheduling tool',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-5 h-5 rounded border border-gray-600 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#c9a227] mb-3">Launch Week (Week 2)</h4>
                  <div className="space-y-2">
                    {[
                      'Post teaser announcing all 4 series',
                      'Launch "How Much You Save" Ep 1',
                      'Launch "Did You Know?" Ep 1',
                      'Launch "Nuqta Discovers" Ep 1',
                      'Announce first Deal Finder Challenge',
                      'Engage with all comments within 1 hour',
                      'Track metrics daily and adjust',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-5 h-5 rounded border border-gray-600 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Series 5: Regional Culture Discovery */}
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl p-6 border border-orange-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <Globe className="text-orange-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-orange-400">Series 5: Culture Discovery in UAE</h3>
                  <p className="text-gray-400">Discover Best of Each Culture | 1x per week per culture</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6">
                UAE is home to 200+ nationalities. This series celebrates each community by discovering
                the best restaurants, shops, and experiences from their culture - all with Nuqta deals!
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { culture: 'Indian', flag: '🇮🇳', episodes: [
                    'Best Indian Street Food in Karama',
                    'Authentic South Indian in Bur Dubai',
                    'Indian Grocery Stores with Nuqta Deals',
                    'Bollywood Night Spots on Budget',
                    'Festival Special: Diwali Shopping Guide'
                  ]},
                  { culture: 'Filipino', flag: '🇵🇭', episodes: [
                    'Filipino Restaurants in Al Rigga',
                    'Jollibee vs Local - Taste Test',
                    'Filipino Grocery Stores',
                    'Karaoke Nights with Nuqta',
                    'Fiesta Weekend Deals'
                  ]},
                  { culture: 'Pakistani', flag: '🇵🇰', episodes: [
                    'Best Biryani Spots in Dubai',
                    'Pakistani Sweets & Desserts',
                    'Cricket Viewing Cafes',
                    'Meena Bazaar Hidden Gems',
                    'Eid Shopping Guide'
                  ]},
                  { culture: 'Arab', flag: '🇦🇪', episodes: [
                    'Best Shawarma Spots',
                    'Lebanese Fine Dining on Budget',
                    'Egyptian Street Food',
                    'Jordanian Mansaf Experience',
                    'Ramadan Iftar Deals'
                  ]},
                  { culture: 'Russian/CIS', flag: '🇷🇺', episodes: [
                    'Russian Restaurants in JBR',
                    'Eastern European Grocery Stores',
                    'Spa & Wellness Russian Style',
                    'New Year Celebrations',
                    'Beach Clubs Popular with CIS'
                  ]},
                  { culture: 'African', flag: '🌍', episodes: [
                    'Ethiopian Coffee Culture',
                    'Nigerian Jollof Rice Battle',
                    'South African Braai Spots',
                    'African Hair Salons & Beauty',
                    'African Grocery Discoveries'
                  ]},
                  { culture: 'Chinese', flag: '🇨🇳', episodes: [
                    'Authentic Chinese in Dragon Mart',
                    'Dim Sum Deals',
                    'Chinese New Year Specials',
                    'Hot Pot Restaurants',
                    'Chinese Supermarket Tour'
                  ]},
                  { culture: 'British/European', flag: '🇬🇧', episodes: [
                    'British Pubs with Deals',
                    'French Bakeries & Cafes',
                    'Italian Family Restaurants',
                    'German Brunch Spots',
                    'European Grocery Stores'
                  ]},
                  { culture: 'Latin American', flag: '🌎', episodes: [
                    'Mexican Restaurants in Dubai',
                    'Brazilian BBQ Spots',
                    'Colombian Coffee Houses',
                    'Salsa Night Venues',
                    'Latin Grocery Finds'
                  ]},
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                      <span className="text-2xl">{item.flag}</span>
                      {item.culture}
                    </h4>
                    <ul className="space-y-1">
                      {item.episodes.map((ep, epIdx) => (
                        <li key={epIdx} className="text-xs text-gray-400 flex items-start gap-1">
                          <span className="text-orange-400">•</span> {ep}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-bold text-orange-400 mb-2">Why This Works</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• UAE = 200+ nationalities, each is a micro-community</li>
                    <li>• People LOVE content about their culture</li>
                    <li>• High share rate within community groups</li>
                    <li>• Builds merchant partnerships in niche areas</li>
                    <li>• Creates loyal community segments</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-bold text-orange-400 mb-2">Hashtag Strategy</h4>
                  <div className="flex flex-wrap gap-1">
                    {['#NuqtaDiscovers', '#IndianInDubai', '#FilipinoUAE', '#PakistaniDubai', '#ArabFood', '#RussianDubai', '#AfricanInUAE', '#ChineseFood', '#ExpatLife', '#DubaiCommunity'].map((tag, idx) => (
                      <span key={idx} className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Community Building Strategy - PHASED APPROACH */}
            <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl p-6 border border-pink-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                  <Users className="text-pink-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-pink-400">Community Building Strategy</h3>
                  <p className="text-gray-400">Phased approach: Don't build everything at once</p>
                </div>
              </div>

              {/* Phased Approach - KEY INSIGHT */}
              <div className="bg-white/10 rounded-lg p-4 mb-6 border border-pink-500/30">
                <div className="text-xs text-pink-400 uppercase tracking-wider mb-2">Strategic Insight</div>
                <div className="text-white font-medium mb-2">Don't launch 20 communities at once. Start with 2-3, prove it works, then expand.</div>
                <div className="text-gray-400 text-sm">Each community needs active management. Better to have 3 thriving groups than 10 dead ones.</div>
              </div>

              {/* Phase 1, 2, 3 */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                  <div className="text-green-400 font-bold mb-2">Phase 1: Launch (0-1K users)</div>
                  <div className="text-xs text-gray-400 mb-3">Start with 3 communities max</div>
                  <ul className="space-y-2 text-sm">
                    {[
                      { name: 'Nuqta Foodies Dubai', why: 'Interest-based, high engagement' },
                      { name: 'Nuqta Indian Community', why: 'Largest expat group in UAE' },
                      { name: 'Nuqta Students UAE', why: 'High engagement, low CAC' },
                    ].map((group, idx) => (
                      <li key={idx} className="bg-white/5 p-2 rounded">
                        <div className="text-white text-sm">{group.name}</div>
                        <div className="text-xs text-green-400">{group.why}</div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
                  <div className="text-blue-400 font-bold mb-2">Phase 2: Scale (1K-5K users)</div>
                  <div className="text-xs text-gray-400 mb-3">Add profession-based groups</div>
                  <ul className="space-y-2 text-sm">
                    {[
                      { name: 'Nuqta Healthcare Workers', why: 'Hospital cafeterias as partners' },
                      { name: 'Nuqta Teachers & Educators', why: 'School area merchants' },
                      { name: 'Nuqta IT Professionals', why: 'Tech parks, cafes' },
                    ].map((group, idx) => (
                      <li key={idx} className="bg-white/5 p-2 rounded">
                        <div className="text-white text-sm">{group.name}</div>
                        <div className="text-xs text-blue-400">{group.why}</div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/30">
                  <div className="text-purple-400 font-bold mb-2">Phase 3: Expand (5K+ users)</div>
                  <div className="text-xs text-gray-400 mb-3">Country-wise communities</div>
                  <ul className="space-y-2 text-sm">
                    {[
                      { name: 'Nuqta Filipino Savers', why: '2nd largest expat group' },
                      { name: 'Nuqta Pakistani Hub', why: 'Deira, Karama merchants' },
                      { name: 'Nuqta Arab Community', why: 'Local Emirati focus' },
                    ].map((group, idx) => (
                      <li key={idx} className="bg-white/5 p-2 rounded">
                        <div className="text-white text-sm">{group.name}</div>
                        <div className="text-xs text-purple-400">{group.why}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Community Platforms */}
              <div className="bg-white/5 rounded-lg p-4 mb-6">
                <h4 className="font-bold text-white mb-3">Platform Strategy</h4>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { platform: 'WhatsApp Groups', icon: '💬', use: 'Primary community hub', limit: '256 per group, create multiple' },
                    { platform: 'Telegram Channels', icon: '📢', use: 'Broadcast deals', limit: 'Unlimited subscribers' },
                    { platform: 'Facebook Groups', icon: '👥', use: 'Discussion & UGC', limit: 'Good for older demographics' },
                    { platform: 'Discord Server', icon: '🎮', use: 'Tech-savvy users', limit: 'IT professionals, gamers' },
                  ].map((item, idx) => (
                    <div key={idx} className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <div className="text-white font-medium text-sm">{item.platform}</div>
                      <div className="text-xs text-gray-400">{item.use}</div>
                      <div className="text-xs text-pink-400 mt-1">{item.limit}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Monthly Community Events */}
            <div className="bg-gradient-to-r from-[#c9a227]/10 to-amber-500/10 rounded-xl p-6 border border-[#c9a227]/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#c9a227]/20 flex items-center justify-center">
                  <Calendar className="text-[#c9a227]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#c9a227]">Monthly Community Events</h3>
                  <p className="text-gray-400">One event per month to bring Nuqta users together</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-bold text-white mb-3">Event Calendar (Year 1)</h4>
                  <div className="space-y-2">
                    {[
                      { month: 'Feb', event: 'Launch Party - Founding Users Meetup', venue: 'Partner Cafe' },
                      { month: 'Mar', event: 'Nuqta Savers Brunch (Ramadan prep)', venue: 'Restaurant Partner' },
                      { month: 'Apr', event: 'Eid Celebration Meetup', venue: 'Mall Partner' },
                      { month: 'May', event: 'Nuqta Fitness Challenge Finale', venue: 'Gym Partner' },
                      { month: 'Jun', event: 'Summer Savings Workshop', venue: 'Co-working Space' },
                      { month: 'Jul', event: 'Kids Summer Camp Partner Event', venue: 'Activity Center' },
                      { month: 'Aug', event: 'Back to School Savings Fair', venue: 'Mall Partner' },
                      { month: 'Sep', event: 'Foodie Festival Crawl', venue: 'Multiple Restaurants' },
                      { month: 'Oct', event: 'Diwali Celebration Night', venue: 'Indian Restaurant' },
                      { month: 'Nov', event: 'Filipino Community Fiesta', venue: 'Filipino Restaurant' },
                      { month: 'Dec', event: 'Year End Celebration Party', venue: 'Premium Venue' },
                      { month: 'Jan', event: 'New Year Savings Resolution', venue: 'Partner Cafe' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm bg-white/5 p-2 rounded">
                        <span className="text-[#c9a227] font-bold w-10">{item.month}</span>
                        <span className="text-white flex-1">{item.event}</span>
                        <span className="text-gray-500 text-xs">{item.venue}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-bold text-[#c9a227] mb-3">Event Format</h4>
                    <ul className="text-sm text-gray-400 space-y-2">
                      <li className="flex items-start gap-2">
                        <Check size={14} className="text-[#c9a227] mt-1 flex-shrink-0" />
                        <span><strong className="text-white">Free entry</strong> for Nuqta app users</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={14} className="text-[#c9a227] mt-1 flex-shrink-0" />
                        <span><strong className="text-white">Exclusive deals</strong> from venue partner</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={14} className="text-[#c9a227] mt-1 flex-shrink-0" />
                        <span><strong className="text-white">Nuqta coin giveaways</strong> at every event</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={14} className="text-[#c9a227] mt-1 flex-shrink-0" />
                        <span><strong className="text-white">User testimonials</strong> recorded for content</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={14} className="text-[#c9a227] mt-1 flex-shrink-0" />
                        <span><strong className="text-white">Photo booth</strong> with Nuqta branding</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-bold text-[#c9a227] mb-3">Event KPIs</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { metric: '50+', label: 'Attendees/event' },
                        { metric: '20+', label: 'New signups' },
                        { metric: '10+', label: 'UGC posts' },
                        { metric: '1', label: 'Merchant partner' },
                      ].map((kpi, idx) => (
                        <div key={idx} className="text-center bg-[#c9a227]/10 p-2 rounded">
                          <div className="text-[#c9a227] font-bold text-lg">{kpi.metric}</div>
                          <div className="text-gray-400 text-xs">{kpi.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-bold text-[#c9a227] mb-3">Budget per Event</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-gray-300">
                        <span>Venue (partner - free/discounted)</span>
                        <span className="text-green-400">AED 0-500</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Nuqta coin giveaways</span>
                        <span>AED 500</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Photo booth & branding</span>
                        <span>AED 300</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Refreshments top-up</span>
                        <span>AED 200</span>
                      </div>
                      <div className="flex justify-between text-white font-bold border-t border-white/10 pt-2 mt-2">
                        <span>Total per event</span>
                        <span className="text-[#c9a227]">AED 1,000-1,500</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Growth Playbook Tab - Expert Marketing Strategy */}
        {activeTab === 'growth' && (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-xl p-8 border border-emerald-500/30">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 px-4 py-2 rounded-full mb-4">
                  <TrendingUp className="text-emerald-400" size={18} />
                  <span className="text-emerald-400 font-medium">Expert Growth Strategy</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">The Nuqta Growth Playbook</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Built by analyzing 50+ successful UAE apps. This isn't theory—it's a battle-tested playbook
                  for going from 0 to 10,000 users in the first 90 days.
                </p>
              </div>

              {/* The Big Insight */}
              <div className="bg-white/10 rounded-lg p-6 border border-emerald-500/50">
                <div className="text-xs text-emerald-400 uppercase tracking-wider mb-2">The Core Insight</div>
                <div className="text-xl font-bold text-white mb-3">
                  "Users don't download apps. They solve problems. Lead with the problem, not the product."
                </div>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400">✗</div>
                    <div className="text-sm text-gray-400 mt-1">"Download Nuqta for cashback"</div>
                    <div className="text-xs text-red-400">Product-first (weak)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">~</div>
                    <div className="text-sm text-gray-400 mt-1">"Save money on your daily coffee"</div>
                    <div className="text-xs text-yellow-400">Benefit-first (better)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">✓</div>
                    <div className="text-sm text-gray-400 mt-1">"Spending AED 900/month on coffee? Get 10% back"</div>
                    <div className="text-xs text-green-400">Problem-first (best)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 30-Day Launch Playbook */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#c9a227]/20 flex items-center justify-center">
                  <Calendar className="text-[#c9a227]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#c9a227]">30-Day Launch Playbook</h3>
                  <p className="text-gray-400 text-sm">Day-by-day actions from launch to 1,000 users</p>
                </div>
              </div>

              {/* Week by Week */}
              <div className="space-y-6">
                {/* Week 1: Foundation */}
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-5 border border-green-500/30">
                  <h4 className="text-lg font-bold text-green-400 mb-1">Week 1: Foundation</h4>
                  <p className="text-gray-400 text-sm mb-4">Goal: 100 users (friends, family, warm network)</p>
                  <div className="grid md:grid-cols-7 gap-2">
                    {[
                      { day: 'D1', tasks: ['Launch social accounts', 'Post announcement', 'Personal outreach to 50 people'] },
                      { day: 'D2', tasks: ['App Store live', 'WhatsApp broadcast', 'Team installs + reviews'] },
                      { day: 'D3', tasks: ['First merchant QR live', 'Document first transaction', 'Post celebration video'] },
                      { day: 'D4', tasks: ['Respond to all DMs', 'Fix Day 1-3 bugs', 'Call 10 users for feedback'] },
                      { day: 'D5', tasks: ['Second batch merchants', 'Student group outreach', 'Create first UGC request'] },
                      { day: 'D6', tasks: ['Micro-influencer DMs', 'Coffee shop partnerships', 'Friday prayer timing post'] },
                      { day: 'D7', tasks: ['Week 1 metrics review', 'Adjust messaging', 'Plan Week 2'] },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-3">
                        <div className="text-green-400 font-bold text-sm mb-2">{item.day}</div>
                        <ul className="text-xs text-gray-400 space-y-1">
                          {item.tasks.map((task, tIdx) => (
                            <li key={tIdx}>• {task}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Week 2: Traction */}
                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg p-5 border border-blue-500/30">
                  <h4 className="text-lg font-bold text-blue-400 mb-1">Week 2: Traction</h4>
                  <p className="text-gray-400 text-sm mb-4">Goal: 300 users (expand beyond warm network)</p>
                  <div className="grid md:grid-cols-7 gap-2">
                    {[
                      { day: 'D8', tasks: ['Launch referral program', 'First paid post', 'University visit scheduled'] },
                      { day: 'D9', tasks: ['First influencer post', '5 merchants QR active', 'Email list started'] },
                      { day: 'D10', tasks: ['WhatsApp community launch', 'Second content series', 'Merchant co-post'] },
                      { day: 'D11', tasks: ['University table setup', 'Flyer distribution', 'Student ambassador signup'] },
                      { day: 'D12', tasks: ['First treasure hunt', 'Push notification test', 'Review aggregation'] },
                      { day: 'D13', tasks: ['Metro ad exploration', 'Weekend content batch', 'Merchant testimonial'] },
                      { day: 'D14', tasks: ['Week 2 metrics', 'CAC calculation', 'Double down on winners'] },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-3">
                        <div className="text-blue-400 font-bold text-sm mb-2">{item.day}</div>
                        <ul className="text-xs text-gray-400 space-y-1">
                          {item.tasks.map((task, tIdx) => (
                            <li key={tIdx}>• {task}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Week 3: Scale */}
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-5 border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-400 mb-1">Week 3: Scale</h4>
                  <p className="text-gray-400 text-sm mb-4">Goal: 600 users (viral loops activated)</p>
                  <div className="grid md:grid-cols-7 gap-2">
                    {[
                      { day: 'D15', tasks: ['10 ambassadors active', 'Second influencer wave', 'Community event planned'] },
                      { day: 'D16', tasks: ['15 merchants live', 'Area-specific campaign', 'PR outreach started'] },
                      { day: 'D17', tasks: ['First community meetup', 'UGC contest launch', 'Feature in blog/podcast'] },
                      { day: 'D18', tasks: ['Corporate outreach', 'Gym/salon partnerships', 'Retention campaign'] },
                      { day: 'D19', tasks: ['Second treasure hunt', 'TikTok viral attempt', 'Merchant spotlight series'] },
                      { day: 'D20', tasks: ['University expansion', 'Weekend warrior push', 'Merchant referral program'] },
                      { day: 'D21', tasks: ['Week 3 metrics', 'Identify viral content', 'Scale what works'] },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-3">
                        <div className="text-purple-400 font-bold text-sm mb-2">{item.day}</div>
                        <ul className="text-xs text-gray-400 space-y-1">
                          {item.tasks.map((task, tIdx) => (
                            <li key={tIdx}>• {task}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Week 4: Optimize */}
                <div className="bg-gradient-to-r from-[#c9a227]/10 to-amber-500/10 rounded-lg p-5 border border-[#c9a227]/30">
                  <h4 className="text-lg font-bold text-[#c9a227] mb-1">Week 4: Optimize</h4>
                  <p className="text-gray-400 text-sm mb-4">Goal: 1,000 users (sustainable growth engine)</p>
                  <div className="grid md:grid-cols-7 gap-2">
                    {[
                      { day: 'D22', tasks: ['30 merchants milestone', 'CAC analysis complete', 'Top channel identified'] },
                      { day: 'D23', tasks: ['Ambassador competition', 'Merchant success stories', 'Retention analysis'] },
                      { day: 'D24', tasks: ['Paid ads test (AED 500)', 'Second community meetup', 'Press coverage push'] },
                      { day: 'D25', tasks: ['Corporate pilot secured', 'Neighborhood expansion', 'Win-back campaign'] },
                      { day: 'D26', tasks: ['1,000 user milestone', 'Celebration content', 'Team reward'] },
                      { day: 'D27', tasks: ['Month-end analysis', 'Best content compiled', 'Month 2 planning'] },
                      { day: 'D28-30', tasks: ['Documentation', 'Process optimization', 'Scale preparation'] },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-3">
                        <div className="text-[#c9a227] font-bold text-sm mb-2">{item.day}</div>
                        <ul className="text-xs text-gray-400 space-y-1">
                          {item.tasks.map((task, tIdx) => (
                            <li key={tIdx}>• {task}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Viral Growth Mechanics */}
            <div className="bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-xl p-6 border border-pink-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                  <Zap className="text-pink-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-pink-400">Viral Growth Mechanics</h3>
                  <p className="text-gray-400 text-sm">Built-in features that make users bring more users</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Referral Program */}
                <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                  <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                    <Gift size={18} className="text-pink-400" />
                    Referral Program: "Give 50, Get 50"
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-pink-500/10 rounded-lg p-3">
                      <div className="text-pink-400 text-sm font-medium mb-1">How It Works</div>
                      <ul className="text-xs text-gray-400 space-y-1">
                        <li>• You share your unique link</li>
                        <li>• Friend downloads & makes first purchase</li>
                        <li>• You BOTH get 50 Nuqta coins (AED 5 value)</li>
                        <li>• No limit on referrals</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-white text-sm font-medium mb-1">Why 50 Coins?</div>
                      <ul className="text-xs text-gray-400 space-y-1">
                        <li>• AED 5 value = meaningful but not expensive</li>
                        <li>• CAC equivalent: AED 5 (vs AED 30 paid ads)</li>
                        <li>• Requires action (first purchase) = quality users</li>
                      </ul>
                    </div>
                    <div className="bg-green-500/10 rounded-lg p-3">
                      <div className="text-green-400 text-sm font-medium">Target: K-Factor 1.2</div>
                      <div className="text-xs text-gray-400">Every 10 users bring 12 more users (viral growth)</div>
                    </div>
                  </div>
                </div>

                {/* Gamification */}
                <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                  <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                    <Trophy size={18} className="text-[#c9a227]" />
                    Gamification: Savings Leaderboard
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-[#c9a227]/10 rounded-lg p-3">
                      <div className="text-[#c9a227] text-sm font-medium mb-1">Weekly Leaderboard</div>
                      <ul className="text-xs text-gray-400 space-y-1">
                        <li>• Top 10 savers of the week</li>
                        <li>• #1 gets 500 bonus coins (AED 50)</li>
                        <li>• #2-5 get 100 bonus coins each</li>
                        <li>• Everyone in top 10 gets badge</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-white text-sm font-medium mb-1">Achievement Badges</div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {['First Purchase', '5 Transactions', '10 Merchants', 'AED 100 Saved', 'Referral Champion', 'Community Star'].map((badge, idx) => (
                          <span key={idx} className="text-xs bg-[#c9a227]/20 text-[#c9a227] px-2 py-1 rounded">{badge}</span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-purple-500/10 rounded-lg p-3">
                      <div className="text-purple-400 text-sm font-medium">Why Gamification?</div>
                      <div className="text-xs text-gray-400">People will spend AED 100 to save AED 10 if it means winning</div>
                    </div>
                  </div>
                </div>

                {/* Social Proof Triggers */}
                <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                  <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                    <Users size={18} className="text-blue-400" />
                    Social Proof Triggers
                  </h4>
                  <div className="space-y-3">
                    {[
                      { trigger: 'After 1st transaction', message: '"You just joined 500+ Dubai savers!"' },
                      { trigger: 'After saving AED 50', message: '"Share your savings milestone?"', share: true },
                      { trigger: 'After 5 transactions', message: '"You are in the top 20% of Nuqta users!"' },
                      { trigger: 'After referring 1', message: '"You could have earned AED 50 more..."', fomo: true },
                      { trigger: 'Near merchant', message: '"12 people saved here today"' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-white/5 p-2 rounded">
                        <div className="w-24 text-xs text-gray-500">{item.trigger}</div>
                        <div className="text-sm text-white flex-1">{item.message}</div>
                        {item.share && <Share2 size={14} className="text-blue-400" />}
                        {item.fomo && <AlertCircle size={14} className="text-amber-400" />}
                      </div>
                    ))}
                  </div>
                </div>

                {/* FOMO Mechanics */}
                <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                  <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                    <AlertTriangle size={18} className="text-amber-400" />
                    FOMO (Fear of Missing Out)
                  </h4>
                  <div className="space-y-3">
                    {[
                      { tactic: 'Limited-Time Deals', example: '"This cafe: 15% cashback ONLY next 2 hours"' },
                      { tactic: 'Expiring Coins', example: '"100 coins expire in 7 days - use them!"' },
                      { tactic: 'Flash Sales', example: '"Double cashback Friday: 12PM-2PM only"' },
                      { tactic: 'Low Stock Alert', example: '"Only 5 slots left for this exclusive deal"' },
                      { tactic: 'Social Activity', example: '"Your friend just saved AED 25 at this cafe"' },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-amber-500/10 rounded p-3">
                        <div className="text-amber-400 text-xs font-medium">{item.tactic}</div>
                        <div className="text-sm text-white mt-1">{item.example}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Guerrilla Marketing - UAE Specific */}
            <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-xl p-6 border border-orange-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <Lightbulb className="text-orange-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-orange-400">Guerrilla Marketing: UAE Edition</h3>
                  <p className="text-gray-400 text-sm">Low-cost, high-impact tactics specific to Dubai culture</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    title: 'The Coffee Shop Hack',
                    cost: 'AED 0',
                    impact: 'High',
                    desc: 'Partner with 1 cafe. Put Nuqta QR on every table. Offer staff AED 5 per signup they generate.',
                    why: 'Captive audience + social proof of seeing others scan'
                  },
                  {
                    title: 'University Takeover',
                    cost: 'AED 200',
                    impact: 'Very High',
                    desc: 'Set up table at university cafeteria. Give first 50 students AED 10 free coins. They become ambassadors.',
                    why: 'Students talk. A lot. And they are budget-conscious.'
                  },
                  {
                    title: 'Gym Mirror Stickers',
                    cost: 'AED 50',
                    impact: 'Medium',
                    desc: 'Partner with gym. Small sticker on mirror: "Save on post-workout smoothies" with QR.',
                    why: 'People look at mirrors. Every. Single. Rep.'
                  },
                  {
                    title: 'Parking Lot Flyers',
                    cost: 'AED 100',
                    impact: 'Medium',
                    desc: 'Flyers under windshield wipers at mall parking. "You spent AED X inside. Could have saved Y."',
                    why: 'Direct targeting of people who just spent money'
                  },
                  {
                    title: 'Elevator Pitch Cards',
                    cost: 'AED 20',
                    impact: 'Low-Med',
                    desc: 'Business cards with QR in elevator buttons areas of residential towers.',
                    why: 'Captive audience, 30-60 seconds of attention'
                  },
                  {
                    title: 'Food Delivery Insert',
                    cost: 'AED 0',
                    impact: 'High',
                    desc: 'Partner with merchant: Insert Nuqta flyer in every food delivery bag.',
                    why: 'Reaches people already spending on food'
                  },
                  {
                    title: 'Salon Waiting Area',
                    cost: 'AED 0',
                    impact: 'High',
                    desc: 'QR code in salon waiting area. Women wait 15-30 mins with phone in hand.',
                    why: 'Long dwell time + phone already in hand'
                  },
                  {
                    title: 'Metro WiFi Landing',
                    cost: 'AED 500',
                    impact: 'Very High',
                    desc: 'Sponsor free WiFi at metro stations. Landing page = Nuqta download.',
                    why: '1M+ daily metro riders, 15-min captive commute'
                  },
                  {
                    title: 'Community WhatsApp Drop',
                    cost: 'AED 0',
                    impact: 'Very High',
                    desc: 'Join 20 existing community groups (Indian, Filipino, etc). Share value, not spam.',
                    why: 'Direct access to targeted communities'
                  },
                ].map((tactic, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-bold text-white text-sm">{tactic.title}</h5>
                      <div className="flex gap-2">
                        <span className={`text-xs px-2 py-0.5 rounded ${tactic.cost === 'AED 0' ? 'bg-green-500/20 text-green-400' : 'bg-amber-500/20 text-amber-400'}`}>
                          {tactic.cost}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mb-2">{tactic.desc}</p>
                    <div className="text-xs text-orange-400 italic">💡 {tactic.why}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ambassador Program */}
            <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-xl p-6 border border-violet-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center">
                  <Star className="text-violet-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-violet-400">Student Ambassador Program</h3>
                  <p className="text-gray-400 text-sm">Turn students into your sales force</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-white mb-4">Program Structure</h4>
                  <div className="space-y-3">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-violet-400 font-medium mb-2">Tier 1: Starter (0-25 signups)</div>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>• AED 5 per verified signup</li>
                        <li>• Free Nuqta coins (100 to start)</li>
                        <li>• Ambassador badge on profile</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-purple-400 font-medium mb-2">Tier 2: Champion (25-100 signups)</div>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>• AED 7 per verified signup</li>
                        <li>• Nuqta merch (t-shirt, bag)</li>
                        <li>• Exclusive deals unlocked</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-[#c9a227] font-medium mb-2">Tier 3: Legend (100+ signups)</div>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>• AED 10 per verified signup</li>
                        <li>• Internship opportunity</li>
                        <li>• LinkedIn recommendation</li>
                        <li>• Cash bonus at milestones</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-bold text-white mb-3">Target Universities</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { name: 'American University Dubai', students: '~3,000' },
                        { name: 'University of Dubai', students: '~2,500' },
                        { name: 'Heriot-Watt Dubai', students: '~4,000' },
                        { name: 'Middlesex Dubai', students: '~3,500' },
                        { name: 'BITS Pilani Dubai', students: '~2,000' },
                        { name: 'Manipal Dubai', students: '~2,500' },
                        { name: 'SP Jain', students: '~1,500' },
                        { name: 'Amity Dubai', students: '~2,000' },
                      ].map((uni, idx) => (
                        <div key={idx} className="bg-white/5 p-2 rounded text-center">
                          <div className="text-sm text-white">{uni.name}</div>
                          <div className="text-xs text-violet-400">{uni.students}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 text-center text-sm text-gray-400">
                      Total addressable: <span className="text-violet-400 font-bold">~20,000+ students</span>
                    </div>
                  </div>

                  <div className="bg-violet-500/10 rounded-lg p-4 border border-violet-500/30">
                    <h4 className="font-bold text-violet-400 mb-2">Ambassador Toolkit</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Unique referral link + QR code</li>
                      <li>• Digital flyers (Instagram stories)</li>
                      <li>• Printed flyers (50 per ambassador)</li>
                      <li>• Script for pitching friends</li>
                      <li>• WhatsApp broadcast template</li>
                      <li>• Weekly competition updates</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Ambassador Economics */}
              <div className="mt-6 bg-white/10 rounded-lg p-4 border border-violet-500/50">
                <h4 className="font-bold text-white mb-3">Ambassador Unit Economics</h4>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-violet-400">AED 25-30</div>
                    <div className="text-sm text-gray-400">CAC via Ambassadors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">AED 504</div>
                    <div className="text-sm text-gray-400">12-month LTV</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#c9a227]">16.8x</div>
                    <div className="text-sm text-gray-400">LTV:CAC Ratio</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">&lt;1 month</div>
                    <div className="text-sm text-gray-400">Payback Period</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Merchant-Driven Growth */}
            <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-xl p-6 border border-emerald-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Store className="text-emerald-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-emerald-400">Merchant-Driven Growth</h3>
                  <p className="text-gray-400 text-sm">How merchants become your best acquisition channel</p>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4 mb-6 border border-emerald-500/50">
                <div className="text-xs text-emerald-400 uppercase tracking-wider mb-2">The Flywheel</div>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-300 flex-wrap">
                  <span>More Users</span>
                  <span className="text-emerald-400">→</span>
                  <span>Merchants Want In</span>
                  <span className="text-emerald-400">→</span>
                  <span>Better Deals</span>
                  <span className="text-emerald-400">→</span>
                  <span>More Users</span>
                  <span className="text-emerald-400">→</span>
                  <span className="text-[#c9a227]">∞ Growth Loop</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-white mb-4">Merchant Acquisition Tools</h4>
                  <div className="space-y-3">
                    {[
                      {
                        tool: 'QR Table Tents',
                        desc: 'Every table has Nuqta QR. Every customer exposed.',
                        install: 'Free for merchants, we print and deliver'
                      },
                      {
                        tool: 'Counter Standee',
                        desc: '"Pay with any method. Scan here for cashback."',
                        install: 'A5 size acrylic stand provided free'
                      },
                      {
                        tool: 'Window Sticker',
                        desc: '"We are on Nuqta" badge builds credibility.',
                        install: 'Premium sticker, signals quality merchant'
                      },
                      {
                        tool: 'Receipt Insert',
                        desc: 'Flyer with every receipt. Drives downloads.',
                        install: 'Merchant adds to receipt printer tray'
                      },
                      {
                        tool: 'Staff Incentive',
                        desc: 'Staff earns AED 2 per signup they generate.',
                        install: 'Tracked via unique staff codes'
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div className="text-emerald-400 font-medium">{item.tool}</div>
                        </div>
                        <div className="text-sm text-gray-400 mt-1">{item.desc}</div>
                        <div className="text-xs text-gray-500 mt-1 italic">Install: {item.install}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-bold text-white mb-3">Merchant Co-Marketing</h4>
                    <ul className="text-sm text-gray-400 space-y-2">
                      <li className="flex items-start gap-2">
                        <Check size={14} className="text-emerald-400 mt-1" />
                        <span><strong className="text-white">Joint social posts:</strong> We create, they share</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={14} className="text-emerald-400 mt-1" />
                        <span><strong className="text-white">Featured merchant spotlight:</strong> Free PR for them</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={14} className="text-emerald-400 mt-1" />
                        <span><strong className="text-white">Special event deals:</strong> Flash sales together</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={14} className="text-emerald-400 mt-1" />
                        <span><strong className="text-white">Review aggregation:</strong> Build their online reputation</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/30">
                    <h4 className="font-bold text-emerald-400 mb-2">Merchant Referral Program</h4>
                    <p className="text-sm text-gray-400 mb-2">
                      Existing merchants refer new merchants. Both get:
                    </p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• 2 weeks zero commission</li>
                      <li>• Featured placement in app</li>
                      <li>• Social media spotlight post</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-bold text-white mb-2">Expected CAC from Merchants</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Merchant QR installations</span>
                      <span className="text-emerald-400 font-bold">AED 10-15/user</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">
                      Lowest CAC channel. Merchant bears no cost, we get quality users.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Psychology-Based Messaging */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <Target className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-400">Psychology-Based Messaging</h3>
                  <p className="text-gray-400 text-sm">Behavioral triggers that drive action</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Pain Points */}
                <div className="bg-white/5 rounded-lg p-5">
                  <h4 className="font-bold text-red-400 mb-4 flex items-center gap-2">
                    <AlertTriangle size={18} />
                    Pain Point Messaging
                  </h4>
                  <div className="space-y-3">
                    {[
                      {
                        pain: 'Lost money',
                        weak: 'Save money with Nuqta',
                        strong: 'You left AED 200 on the table last month. Stop losing money.',
                        trigger: 'Loss aversion'
                      },
                      {
                        pain: 'Wasted effort',
                        weak: 'Easy cashback app',
                        strong: '15 different loyalty apps? One app. All your savings.',
                        trigger: 'Simplification'
                      },
                      {
                        pain: 'Missing out',
                        weak: 'Join Nuqta today',
                        strong: 'Your neighbors saved AED 3,000 this month. Did you?',
                        trigger: 'Social proof'
                      },
                      {
                        pain: 'Feeling stupid',
                        weak: 'Smart savings',
                        strong: 'Still paying full price? Smart people don\'t.',
                        trigger: 'Identity'
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-cyan-400 font-medium text-sm">{item.pain}</span>
                          <span className="text-xs text-gray-500 bg-white/10 px-2 py-0.5 rounded">{item.trigger}</span>
                        </div>
                        <div className="text-xs text-red-400 line-through mb-1">{item.weak}</div>
                        <div className="text-sm text-white">{item.strong}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Emotional Triggers */}
                <div className="bg-white/5 rounded-lg p-5">
                  <h4 className="font-bold text-green-400 mb-4 flex items-center gap-2">
                    <Heart size={18} />
                    Emotional Triggers
                  </h4>
                  <div className="space-y-3">
                    {[
                      {
                        emotion: 'Pride',
                        message: '"I saved AED 500 this month" - Share your win',
                        when: 'After milestone reached'
                      },
                      {
                        emotion: 'Fear',
                        message: '"Your coins expire in 3 days - use them!"',
                        when: 'Coins about to expire'
                      },
                      {
                        emotion: 'Greed',
                        message: '"Double cashback for the next 2 hours only"',
                        when: 'Flash sale'
                      },
                      {
                        emotion: 'Belonging',
                        message: '"Join 5,000 Dubai savers"',
                        when: 'Signup page'
                      },
                      {
                        emotion: 'Guilt',
                        message: '"You could have saved AED 50 this week"',
                        when: 'Re-engagement'
                      },
                      {
                        emotion: 'Curiosity',
                        message: '"See what others are saving on"',
                        when: 'Explore page'
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-white/5 p-2 rounded">
                        <div className="w-16 text-xs text-green-400 font-medium">{item.emotion}</div>
                        <div className="flex-1 text-sm text-white">{item.message}</div>
                        <div className="text-xs text-gray-500">{item.when}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* A/B Test Ideas */}
              <div className="mt-6 bg-white/5 rounded-lg p-5">
                <h4 className="font-bold text-white mb-4">A/B Test Headlines (Run These Week 1)</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    {
                      version: 'A: Problem-first',
                      headline: 'Stop leaving money behind',
                      subhead: 'Get 5-10% back on every purchase'
                    },
                    {
                      version: 'B: Benefit-first',
                      headline: 'Instant cashback, any purchase',
                      subhead: 'Join 5,000+ Dubai savers'
                    },
                    {
                      version: 'C: Social proof',
                      headline: 'Smart people use Nuqta',
                      subhead: 'AED 50,000+ saved by Dubai residents'
                    },
                  ].map((test, idx) => (
                    <div key={idx} className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/30">
                      <div className="text-cyan-400 text-xs font-medium mb-2">{test.version}</div>
                      <div className="text-white font-bold mb-1">{test.headline}</div>
                      <div className="text-sm text-gray-400">{test.subhead}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Channel Priority Matrix */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-[#c9a227] mb-6">Channel Priority Matrix</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-2 text-gray-400">Channel</th>
                      <th className="text-left py-3 px-2 text-gray-400">CAC</th>
                      <th className="text-left py-3 px-2 text-gray-400">Volume</th>
                      <th className="text-left py-3 px-2 text-gray-400">Quality</th>
                      <th className="text-left py-3 px-2 text-gray-400">Priority</th>
                      <th className="text-left py-3 px-2 text-gray-400">When</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    {[
                      { channel: 'Merchant QR', cac: 'AED 10-15', volume: 'Medium', quality: 'Highest', priority: '🟢 P0', when: 'Day 1' },
                      { channel: 'Word of Mouth', cac: 'AED 0', volume: 'Low', quality: 'Highest', priority: '🟢 P0', when: 'Always' },
                      { channel: 'Referral Program', cac: 'AED 5', volume: 'High', quality: 'High', priority: '🟢 P0', when: 'Day 8' },
                      { channel: 'Student Ambassadors', cac: 'AED 25-30', volume: 'High', quality: 'Medium', priority: '🟡 P1', when: 'Week 2' },
                      { channel: 'Micro-Influencers', cac: 'AED 40-50', volume: 'Medium', quality: 'Medium', priority: '🟡 P1', when: 'Week 2' },
                      { channel: 'Community Groups', cac: 'AED 5-10', volume: 'Medium', quality: 'High', priority: '🟡 P1', when: 'Week 2' },
                      { channel: 'Meta Ads', cac: 'AED 60-80', volume: 'Very High', quality: 'Low', priority: '🟠 P2', when: 'Month 2' },
                      { channel: 'Google Ads', cac: 'AED 80-100', volume: 'Medium', quality: 'High', priority: '🟠 P2', when: 'Month 2' },
                      { channel: 'TikTok Ads', cac: 'AED 50-70', volume: 'High', quality: 'Low', priority: '🟠 P2', when: 'Month 2' },
                      { channel: 'PR/Press', cac: 'AED 0-500', volume: 'Low', quality: 'High', priority: '🔴 P3', when: 'Month 3' },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-white/5">
                        <td className="py-3 px-2 font-medium text-white">{row.channel}</td>
                        <td className="py-3 px-2">{row.cac}</td>
                        <td className="py-3 px-2">{row.volume}</td>
                        <td className="py-3 px-2">{row.quality}</td>
                        <td className="py-3 px-2">{row.priority}</td>
                        <td className="py-3 px-2 text-gray-500">{row.when}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-xs text-gray-500">
                P0 = Launch immediately | P1 = Within first month | P2 = After 1,000 users | P3 = After 5,000 users
              </div>
            </div>

            {/* Success Metrics Dashboard */}
            <div className="bg-gradient-to-r from-[#c9a227]/10 to-amber-500/10 rounded-xl p-6 border border-[#c9a227]/30">
              <h3 className="text-xl font-bold text-[#c9a227] mb-6">Growth Success Metrics</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { metric: 'Day 7', users: '100', transactions: '50', merchants: '5', viral: '0.8' },
                  { metric: 'Day 14', users: '300', transactions: '200', merchants: '10', viral: '1.0' },
                  { metric: 'Day 21', users: '600', transactions: '500', merchants: '20', viral: '1.1' },
                  { metric: 'Day 30', users: '1,000', transactions: '1,000', merchants: '30', viral: '1.2' },
                ].map((target, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4">
                    <div className="text-[#c9a227] font-bold text-lg mb-3">{target.metric}</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Users</span>
                        <span className="text-white font-medium">{target.users}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Transactions</span>
                        <span className="text-white font-medium">{target.transactions}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Merchants</span>
                        <span className="text-white font-medium">{target.merchants}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">K-Factor</span>
                        <span className={`font-medium ${parseFloat(target.viral) >= 1 ? 'text-green-400' : 'text-yellow-400'}`}>{target.viral}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center text-sm text-gray-400">
                K-Factor ≥1.0 means viral growth (each user brings at least 1 more user)
              </div>
            </div>

          </div>
        )}

        {/* Social & Community Tab - Multiple Accounts Strategy */}
        {activeTab === 'social' && (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl p-8 border border-pink-500/30">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-pink-500/20 px-4 py-2 rounded-full mb-4">
                  <MessageCircle className="text-pink-400" size={18} />
                  <span className="text-pink-400 font-medium">Multi-Account Strategy</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Social Accounts & Community Plan</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Different accounts for different purposes. Each account targets a specific audience
                  and serves a unique role in the marketing funnel.
                </p>
              </div>

              {/* The Strategy */}
              <div className="bg-white/10 rounded-lg p-6 border border-pink-500/50">
                <div className="text-xs text-pink-400 uppercase tracking-wider mb-2">The Multi-Account Strategy</div>
                <div className="text-xl font-bold text-white mb-3">
                  "One brand, multiple voices. Each account speaks to a different audience."
                </div>
                <div className="grid md:grid-cols-3 gap-4 mt-4 text-sm">
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-pink-400 font-bold">Main Brand Account</div>
                    <div className="text-gray-400">Official announcements, brand building, trust</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-purple-400 font-bold">Content Series Accounts</div>
                    <div className="text-gray-400">Niche content, specific audience, viral potential</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-blue-400 font-bold">Community Groups</div>
                    <div className="text-gray-400">Direct engagement, deals, word-of-mouth</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram Accounts Strategy */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Instagram className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Instagram Accounts (4 Total)</h3>
                  <p className="text-gray-400 text-sm">Different accounts for different purposes</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Main Brand Account */}
                <div className="bg-gradient-to-br from-[#c9a227]/20 to-amber-500/10 rounded-lg p-5 border border-[#c9a227]/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#c9a227] flex items-center justify-center text-[#0a1628] font-bold text-sm">N</div>
                    <div>
                      <div className="text-[#c9a227] font-bold">@nuqta.ae</div>
                      <div className="text-xs text-gray-400">Main Brand Account</div>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-gray-400">Purpose:</div>
                      <div className="text-white">Official brand voice, announcements, partnerships, trust building</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Content:</div>
                      <ul className="text-gray-300 space-y-1 mt-1">
                        <li>• New merchant announcements</li>
                        <li>• User milestones & celebrations</li>
                        <li>• Feature updates & app tips</li>
                        <li>• Partnership announcements</li>
                        <li>• Team & behind-the-scenes</li>
                      </ul>
                    </div>
                    <div className="flex gap-4">
                      <div><span className="text-gray-400">Frequency:</span> <span className="text-[#c9a227]">1x/day</span></div>
                      <div><span className="text-gray-400">Tone:</span> <span className="text-[#c9a227]">Professional</span></div>
                    </div>
                  </div>
                </div>

                {/* Dubai Budget Account */}
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-lg p-5 border border-green-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm">💰</div>
                    <div>
                      <div className="text-green-400 font-bold">@dubaibudget</div>
                      <div className="text-xs text-gray-400">Dubai Family Budget Series</div>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-gray-400">Purpose:</div>
                      <div className="text-white">Street interviews about money, savings content, relatable finance</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Content:</div>
                      <ul className="text-gray-300 space-y-1 mt-1">
                        <li>• "How much do you spend monthly?"</li>
                        <li>• Real family budget breakdowns</li>
                        <li>• Savings tips & hacks</li>
                        <li>• Cost comparison content</li>
                        <li>• Reaction videos to prices</li>
                      </ul>
                    </div>
                    <div className="flex gap-4">
                      <div><span className="text-gray-400">Frequency:</span> <span className="text-green-400">3x/week</span></div>
                      <div><span className="text-gray-400">Tone:</span> <span className="text-green-400">Casual, fun</span></div>
                    </div>
                  </div>
                </div>

                {/* Hidden Gems Account */}
                <div className="bg-gradient-to-br from-purple-500/20 to-violet-500/10 rounded-lg p-5 border border-purple-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-sm">📍</div>
                    <div>
                      <div className="text-purple-400 font-bold">@hiddengems.dubai</div>
                      <div className="text-xs text-gray-400">Discovery & Locations Series</div>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-gray-400">Purpose:</div>
                      <div className="text-white">Discover hidden spots, cafes, restaurants, experiences in Dubai</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Content:</div>
                      <ul className="text-gray-300 space-y-1 mt-1">
                        <li>• "Did you know this exists?"</li>
                        <li>• Hidden cafes & restaurants</li>
                        <li>• Area-by-area guides</li>
                        <li>• Budget-friendly experiences</li>
                        <li>• Before/after transformation</li>
                      </ul>
                    </div>
                    <div className="flex gap-4">
                      <div><span className="text-gray-400">Frequency:</span> <span className="text-purple-400">2x/week</span></div>
                      <div><span className="text-gray-400">Tone:</span> <span className="text-purple-400">Explorer</span></div>
                    </div>
                  </div>
                </div>

                {/* Culture Account */}
                <div className="bg-gradient-to-br from-orange-500/20 to-red-500/10 rounded-lg p-5 border border-orange-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm">🌍</div>
                    <div>
                      <div className="text-orange-400 font-bold">@tasteofhome.uae</div>
                      <div className="text-xs text-gray-400">Culture Discovery Series</div>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-gray-400">Purpose:</div>
                      <div className="text-white">Celebrate each community in UAE - Indian, Filipino, Pakistani, etc.</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Content:</div>
                      <ul className="text-gray-300 space-y-1 mt-1">
                        <li>• Best Indian food in Dubai</li>
                        <li>• Filipino community spots</li>
                        <li>• Pakistani restaurants guide</li>
                        <li>• Cultural celebrations & festivals</li>
                        <li>• Community stories & features</li>
                      </ul>
                    </div>
                    <div className="flex gap-4">
                      <div><span className="text-gray-400">Frequency:</span> <span className="text-orange-400">1x/week</span></div>
                      <div><span className="text-gray-400">Tone:</span> <span className="text-orange-400">Warm, community</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TikTok Accounts Strategy */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center border-2 border-cyan-400">
                  <Music2 className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">TikTok Accounts (3 Total)</h3>
                  <p className="text-gray-400 text-sm">Viral content with different angles</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {/* Main TikTok */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#c9a227] flex items-center justify-center text-[#0a1628] font-bold text-xs">N</div>
                    <div className="text-[#c9a227] font-bold text-sm">@nuqta.ae</div>
                  </div>
                  <div className="text-xs text-gray-400 mb-2">Main Brand</div>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• App demos & tutorials</li>
                    <li>• User testimonials</li>
                    <li>• Trending sound remixes</li>
                    <li>• Brand challenges</li>
                  </ul>
                  <div className="mt-3 text-xs"><span className="text-gray-400">Post:</span> <span className="text-white">Daily</span></div>
                </div>

                {/* Street Interview TikTok */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xs">💰</div>
                    <div className="text-green-400 font-bold text-sm">@dubaiprices</div>
                  </div>
                  <div className="text-xs text-gray-400 mb-2">Street Interviews</div>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• "How much is your rent?"</li>
                    <li>• Price reactions</li>
                    <li>• Budget breakdowns</li>
                    <li>• Savings reveals</li>
                  </ul>
                  <div className="mt-3 text-xs"><span className="text-gray-400">Post:</span> <span className="text-white">3x/week</span></div>
                </div>

                {/* Challenge TikTok */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#c9a227] flex items-center justify-center text-[#0a1628] font-bold text-xs">🏆</div>
                    <div className="text-[#c9a227] font-bold text-sm">@nuqtahunt</div>
                  </div>
                  <div className="text-xs text-gray-400 mb-2">Treasure Hunt Series</div>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• Hidden coin card hunts</li>
                    <li>• Challenge clues</li>
                    <li>• Winner reveals</li>
                    <li>• Prize giveaways</li>
                  </ul>
                  <div className="mt-3 text-xs"><span className="text-gray-400">Post:</span> <span className="text-white">1x/week</span></div>
                </div>
              </div>
            </div>

            {/* YouTube Strategy */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
                  <Youtube className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">YouTube (1 Channel + Shorts)</h3>
                  <p className="text-gray-400 text-sm">Long-form trust building + Shorts for reach</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-bold text-red-400 mb-3">Nuqta UAE (Main Channel)</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div><strong className="text-white">Long-form (5-15 min):</strong></div>
                    <ul className="space-y-1 ml-4">
                      <li>• Complete app walkthrough</li>
                      <li>• Monthly savings challenges</li>
                      <li>• Merchant feature documentaries</li>
                      <li>• "I tried saving for 30 days"</li>
                      <li>• Community stories deep dives</li>
                    </ul>
                  </div>
                  <div className="mt-3 text-xs"><span className="text-gray-400">Frequency:</span> <span className="text-red-400">1x/week</span></div>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-bold text-red-400 mb-3">YouTube Shorts Strategy</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div><strong className="text-white">Repurpose from:</strong></div>
                    <ul className="space-y-1 ml-4">
                      <li>• TikTok best performers</li>
                      <li>• Instagram Reels clips</li>
                      <li>• Street interview highlights</li>
                      <li>• Quick tips (under 60 sec)</li>
                      <li>• Merchant spotlights</li>
                    </ul>
                  </div>
                  <div className="mt-3 text-xs"><span className="text-gray-400">Frequency:</span> <span className="text-red-400">Daily</span></div>
                </div>
              </div>
            </div>

            {/* WhatsApp Communities */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-400">WhatsApp Communities (6 Groups)</h3>
                  <p className="text-gray-400 text-sm">Direct engagement, deals, word-of-mouth growth</p>
                </div>
              </div>

              {/* Launch Order */}
              <div className="bg-white/10 rounded-lg p-4 mb-6 border border-green-500/50">
                <div className="text-xs text-green-400 uppercase tracking-wider mb-2">Launch Order Strategy</div>
                <div className="text-white font-medium">Start with 3 groups, add 1 new group every 2 weeks based on demand.</div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {/* Phase 1 Groups */}
                {[
                  {
                    name: 'Nuqta Deals UAE 🔥',
                    purpose: 'Daily deals, flash sales, exclusive offers',
                    audience: 'All users wanting deals',
                    phase: 1,
                    rules: ['No spam', 'Deals only', 'Admin posts only'],
                    posts: 'Admin posts 3x/day',
                    color: 'green'
                  },
                  {
                    name: 'Nuqta Foodies Dubai 🍽️',
                    purpose: 'F&B recommendations, restaurant reviews, food deals',
                    audience: 'Food lovers, dining out crowd',
                    phase: 1,
                    rules: ['Food content only', 'Share your finds', 'Be helpful'],
                    posts: 'Community + Admin posts',
                    color: 'green'
                  },
                  {
                    name: 'Nuqta Students UAE 📚',
                    purpose: 'Student-friendly deals, budget tips, campus meetups',
                    audience: 'University students',
                    phase: 1,
                    rules: ['Student verified', 'Share student hacks', 'Help each other'],
                    posts: 'Community + Ambassador posts',
                    color: 'green'
                  },
                  {
                    name: 'Nuqta Indian Community 🇮🇳',
                    purpose: 'Indian restaurants, cultural events, community deals',
                    audience: 'Indian expats in UAE',
                    phase: 2,
                    rules: ['Respect all', 'Indian-focused content', 'Festival updates'],
                    posts: 'Community-driven',
                    color: 'blue'
                  },
                  {
                    name: 'Nuqta Filipino Hub 🇵🇭',
                    purpose: 'Filipino restaurants, OFW deals, community events',
                    audience: 'Filipino community in UAE',
                    phase: 2,
                    rules: ['Kabayan support', 'Share deals', 'Community events'],
                    posts: 'Community-driven',
                    color: 'blue'
                  },
                  {
                    name: 'Nuqta VIP Savers 👑',
                    purpose: 'Top savers, exclusive early access, feedback group',
                    audience: 'Power users (top 100 savers)',
                    phase: 3,
                    rules: ['Invite only', 'Feedback welcome', 'Early access'],
                    posts: 'Exclusive content',
                    color: 'purple'
                  },
                ].map((group, idx) => (
                  <div key={idx} className={`bg-white/5 rounded-lg p-4 border ${
                    group.color === 'green' ? 'border-green-500/30' :
                    group.color === 'blue' ? 'border-blue-500/30' : 'border-purple-500/30'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className={`text-sm font-bold ${
                        group.color === 'green' ? 'text-green-400' :
                        group.color === 'blue' ? 'text-blue-400' : 'text-purple-400'
                      }`}>{group.name}</div>
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        group.phase === 1 ? 'bg-green-500/20 text-green-400' :
                        group.phase === 2 ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'
                      }`}>Phase {group.phase}</span>
                    </div>
                    <div className="text-xs text-gray-400 mb-2">{group.purpose}</div>
                    <div className="text-xs text-gray-500 mb-2">Audience: {group.audience}</div>
                    <div className="text-xs text-gray-500">Posts: {group.posts}</div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Management */}
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-bold text-white mb-3">WhatsApp Management Rules</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-green-400 font-medium mb-2">Do's</div>
                    <ul className="text-gray-400 space-y-1 text-xs">
                      <li>✓ Post deals at fixed times (9AM, 1PM, 7PM)</li>
                      <li>✓ Respond to questions within 1 hour</li>
                      <li>✓ Welcome new members personally</li>
                      <li>✓ Share exclusive deals first</li>
                      <li>✓ Celebrate community wins</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-red-400 font-medium mb-2">Don'ts</div>
                    <ul className="text-gray-400 space-y-1 text-xs">
                      <li>✗ Post more than 5x/day</li>
                      <li>✗ Ignore member messages</li>
                      <li>✗ Allow spam or self-promotion</li>
                      <li>✗ Share same content across all groups</li>
                      <li>✗ Let group go inactive (3+ days silent)</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-[#c9a227] font-medium mb-2">Engagement Tactics</div>
                    <ul className="text-gray-400 space-y-1 text-xs">
                      <li>• Weekly polls ("Best cafe this week?")</li>
                      <li>• Member spotlights (top saver of week)</li>
                      <li>• Flash deal countdowns</li>
                      <li>• Ask for recommendations</li>
                      <li>• Share user-submitted photos</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Telegram Channels */}
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-blue-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                  <Send className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-400">Telegram Channels (2 Channels)</h3>
                  <p className="text-gray-400 text-sm">Broadcast-only for deals and announcements</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-bold text-blue-400 mb-3">Nuqta Deals (Broadcast)</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• <strong>Purpose:</strong> One-way deal announcements</li>
                    <li>• <strong>Content:</strong> Flash sales, new merchants, limited offers</li>
                    <li>• <strong>Frequency:</strong> 2-3 posts/day max</li>
                    <li>• <strong>Advantage:</strong> Unlimited subscribers, no 256 limit</li>
                    <li>• <strong>Link:</strong> t.me/nuqtadeals</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-bold text-blue-400 mb-3">Nuqta Alerts (Urgent)</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• <strong>Purpose:</strong> Time-sensitive notifications only</li>
                    <li>• <strong>Content:</strong> Flash deals expiring soon, events today</li>
                    <li>• <strong>Frequency:</strong> 1 post/day max (only urgent)</li>
                    <li>• <strong>Advantage:</strong> High open rate, notifications enabled</li>
                    <li>• <strong>Link:</strong> t.me/nuqtaalerts</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cross-Platform Content Calendar */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-[#c9a227] mb-6">Weekly Cross-Platform Calendar</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 px-2 text-gray-400">Day</th>
                      <th className="text-left py-2 px-2 text-gray-400">@nuqta.ae (IG)</th>
                      <th className="text-left py-2 px-2 text-gray-400">@dubaibudget (IG)</th>
                      <th className="text-left py-2 px-2 text-gray-400">TikTok</th>
                      <th className="text-left py-2 px-2 text-gray-400">WhatsApp</th>
                      <th className="text-left py-2 px-2 text-gray-400">Telegram</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    {[
                      { day: 'Sunday', main: 'Week recap + new merchants', budget: 'Street interview', tiktok: 'Budget interview', whatsapp: 'Week deals preview', telegram: 'Weekly summary' },
                      { day: 'Monday', main: 'Money Monday tip', budget: '-', tiktok: 'Quick tip', whatsapp: 'Morning deal', telegram: 'Flash deal' },
                      { day: 'Tuesday', main: 'Merchant spotlight', budget: 'Cost comparison', tiktok: 'POV money', whatsapp: 'F&B deal', telegram: '-' },
                      { day: 'Wednesday', main: 'App feature', budget: '-', tiktok: 'Tutorial', whatsapp: 'Midweek deal', telegram: 'Flash deal' },
                      { day: 'Thursday', main: 'User story', budget: 'Family budget', tiktok: 'Street interview', whatsapp: 'Weekend preview', telegram: '-' },
                      { day: 'Friday', main: 'Weekend deals', budget: '-', tiktok: 'Treasure hunt', whatsapp: 'Flash deals 🔥', telegram: 'Weekend deals' },
                      { day: 'Saturday', main: 'Community post', budget: 'Savings reveal', tiktok: 'Hunt winner', whatsapp: 'Community poll', telegram: '-' },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-white/5">
                        <td className="py-2 px-2 font-medium text-white">{row.day}</td>
                        <td className="py-2 px-2">{row.main}</td>
                        <td className="py-2 px-2">{row.budget}</td>
                        <td className="py-2 px-2">{row.tiktok}</td>
                        <td className="py-2 px-2">{row.whatsapp}</td>
                        <td className="py-2 px-2">{row.telegram}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Account Management Summary */}
            <div className="bg-gradient-to-r from-[#c9a227]/10 to-amber-500/10 rounded-xl p-6 border border-[#c9a227]/30">
              <h3 className="text-xl font-bold text-[#c9a227] mb-6">Account Summary & Resources</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-white mb-3">Total Accounts to Manage</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between p-2 bg-white/5 rounded">
                      <span className="text-gray-400">Instagram</span>
                      <span className="text-white font-bold">4 accounts</span>
                    </div>
                    <div className="flex justify-between p-2 bg-white/5 rounded">
                      <span className="text-gray-400">TikTok</span>
                      <span className="text-white font-bold">3 accounts</span>
                    </div>
                    <div className="flex justify-between p-2 bg-white/5 rounded">
                      <span className="text-gray-400">YouTube</span>
                      <span className="text-white font-bold">1 channel</span>
                    </div>
                    <div className="flex justify-between p-2 bg-white/5 rounded">
                      <span className="text-gray-400">WhatsApp Groups</span>
                      <span className="text-white font-bold">6 groups (phased)</span>
                    </div>
                    <div className="flex justify-between p-2 bg-white/5 rounded">
                      <span className="text-gray-400">Telegram Channels</span>
                      <span className="text-white font-bold">2 channels</span>
                    </div>
                    <div className="flex justify-between p-2 bg-[#c9a227]/20 rounded border border-[#c9a227]/30">
                      <span className="text-[#c9a227]">Total</span>
                      <span className="text-[#c9a227] font-bold">16 accounts/groups</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-3">Team Required</h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-[#c9a227] font-medium">CMO</div>
                      <div className="text-gray-400 text-xs">Strategy, main accounts, influencer outreach</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-[#c9a227] font-medium">Graphic Designer</div>
                      <div className="text-gray-400 text-xs">Visual content, templates, video editing</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-[#c9a227] font-medium">Content Creator (Part-time)</div>
                      <div className="text-gray-400 text-xs">Street interviews, vlog content - hire freelance</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-[#c9a227] font-medium">Community Manager (Future)</div>
                      <div className="text-gray-400 text-xs">WhatsApp/Telegram management - hire at 5K users</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Launch Priority */}
              <div className="mt-6 bg-white/10 rounded-lg p-4 border border-[#c9a227]/50">
                <h4 className="font-bold text-[#c9a227] mb-3">Launch Priority Order</h4>
                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">Week 1</div>
                    <ul className="text-xs text-gray-400 mt-2 space-y-1">
                      <li>@nuqta.ae (IG + TikTok)</li>
                      <li>WhatsApp Deals group</li>
                      <li>Telegram Deals channel</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">Week 2</div>
                    <ul className="text-xs text-gray-400 mt-2 space-y-1">
                      <li>@dubaibudget (IG)</li>
                      <li>@dubaiprices (TikTok)</li>
                      <li>WhatsApp Foodies group</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">Week 3</div>
                    <ul className="text-xs text-gray-400 mt-2 space-y-1">
                      <li>@hiddengems.dubai (IG)</li>
                      <li>WhatsApp Students group</li>
                      <li>YouTube channel</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#c9a227]">Week 4+</div>
                    <ul className="text-xs text-gray-400 mt-2 space-y-1">
                      <li>@tasteofhome.uae (IG)</li>
                      <li>Community WhatsApp groups</li>
                      <li>VIP group (at 1K users)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Segmented Acquisition Tab - Different Strategies for Different Target Groups */}
        {activeTab === 'segments' && (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-xl p-8 border border-indigo-500/30">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-indigo-500/20 px-4 py-2 rounded-full mb-4">
                  <Layers className="text-indigo-400" size={18} />
                  <span className="text-indigo-400 font-medium">Hyper-Targeted Acquisition</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Segmented Acquisition Playbook</h3>
                <p className="text-gray-400 max-w-3xl mx-auto">
                  UAE is the world's most diverse market - 200+ nationalities. One message doesn't fit all.
                  This playbook gives you specific channels, messaging, content, and tactics for each segment.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <Globe className="text-green-400 mx-auto mb-2" size={28} />
                  <div className="text-2xl font-bold text-white">8</div>
                  <div className="text-sm text-gray-400">Community Segments</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <Briefcase className="text-blue-400 mx-auto mb-2" size={28} />
                  <div className="text-2xl font-bold text-white">6</div>
                  <div className="text-sm text-gray-400">Profession Segments</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <Store className="text-purple-400 mx-auto mb-2" size={28} />
                  <div className="text-2xl font-bold text-white">7</div>
                  <div className="text-sm text-gray-400">Merchant Categories</div>
                </div>
              </div>
            </div>

            {/* SECTION 1: COMMUNITY-BASED ACQUISITION */}
            <div className="bg-gradient-to-br from-[#0a1628] to-[#1a2a4a] rounded-xl p-8 border border-[#c9a227]/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <Globe className="text-green-400" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Community-Based Acquisition</h3>
                  <p className="text-gray-400">Different strategies for UAE's major expat communities</p>
                </div>
              </div>

              {/* Indian Community */}
              <div className="mb-8 bg-orange-500/10 rounded-xl p-6 border border-orange-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <Flag className="text-orange-400" size={24} />
                  <h4 className="text-xl font-bold text-orange-400">🇮🇳 Indian Community (3.5M+ in UAE)</h4>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                      <MessageCircle size={16} className="text-green-400" />
                      Channels
                    </h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• WhatsApp groups (primary)</li>
                      <li>• Instagram (@nuqta.india.uae)</li>
                      <li>• YouTube (Hindi content)</li>
                      <li>• ShareChat & Moj</li>
                      <li>• Indian supermarkets</li>
                      <li>• Temple/Gurudwara boards</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                      <Mic size={16} className="text-blue-400" />
                      Messaging Hooks
                    </h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• "Paisa wasool deals" (Value for money)</li>
                      <li>• "Ghar jaisa khana, Dubai mein"</li>
                      <li>• "Savings = More remittance home"</li>
                      <li>• "Desi deals for desi people"</li>
                      <li>• Festival-based: Diwali, Holi, Eid</li>
                      <li>• Cricket season tie-ins (IPL, WC)</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                      <Film size={16} className="text-purple-400" />
                      Content Strategy
                    </h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Hindi/Hinglish captions</li>
                      <li>• South Indian food features</li>
                      <li>• "Karol Bagh in Karama" series</li>
                      <li>• Price comparisons (India vs UAE)</li>
                      <li>• Worker hostel deals</li>
                      <li>• Family dining features</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                      <Target size={16} className="text-red-400" />
                      Acquisition Tactics
                    </h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Lulu/Nesto/Al Maya partnerships</li>
                      <li>• Blue-collar area flyering</li>
                      <li>• Indian restaurant promos</li>
                      <li>• Auto-driver referral program</li>
                      <li>• Community event sponsorship</li>
                      <li>• Indian newspaper ads (Gulf News)</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 bg-orange-500/20 rounded-lg p-3">
                  <p className="text-sm text-orange-300">
                    <strong>Key Insight:</strong> Indian community is highly price-sensitive and values family deals.
                    WhatsApp is king - one viral deal can spread through 50+ groups in a day. Focus on Karama, Bur Dubai,
                    Deira, Sharjah for maximum penetration.
                  </p>
                </div>
              </div>

              {/* Filipino Community */}
              <div className="mb-8 bg-blue-500/10 rounded-xl p-6 border border-blue-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <Flag className="text-blue-400" size={24} />
                  <h4 className="text-xl font-bold text-blue-400">🇵🇭 Filipino Community (700K+ in UAE)</h4>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                      <MessageCircle size={16} className="text-green-400" />
                      Channels
                    </h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Facebook Groups (PRIMARY)</li>
                      <li>• TikTok (huge reach)</li>
                      <li>• Viber communities</li>
                      <li>• Filipino Times</li>
                      <li>• OWWA/POLO events</li>
                      <li>• Church communities</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                      <Mic size={16} className="text-blue-400" />
                      Messaging Hooks
                    </h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• "Sulit na deals!" (Worth it!)</li>
                      <li>• "Tipid tips para sa pamilya"</li>
                      <li>• "Padala savings" (Remittance)</li>
                      <li>• "Kababayan deals"</li>
                      <li>• Fiesta season promos</li>
                      <li>• "Masarap at mura" (Tasty & cheap)</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                      <Film size={16} className="text-purple-400" />
                      Content Strategy
                    </h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Tagalog/Taglish content</li>
                      <li>• Filipino resto features</li>
                      <li>• "Pinoy in Dubai" series</li>
                      <li>• Jollibee/Chowking alternatives</li>
                      <li>• Karaoke venue deals</li>
                      <li>• Salo-salo (gathering) spots</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                      <Target size={16} className="text-red-400" />
                      Acquisition Tactics
                    </h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Facebook group partnerships</li>
                      <li>• Nurse/hospital referrals</li>
                      <li>• Filipino mall activations</li>
                      <li>• Sunday church flyers</li>
                      <li>• Balikbayan box shops</li>
                      <li>• OFW community leaders</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 bg-blue-500/20 rounded-lg p-3">
                  <p className="text-sm text-blue-300">
                    <strong>Key Insight:</strong> Filipinos are the MOST social media active community in UAE.
                    Facebook is essential (not optional). They love sharing deals and are extremely loyal to brands
                    that speak their language. Satwa, Al Rigga, Karama are hotspots.
                  </p>
                </div>
              </div>

              {/* Pakistani Community */}
              <div className="mb-8 bg-green-500/10 rounded-xl p-6 border border-green-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <Flag className="text-green-400" size={24} />
                  <h4 className="text-xl font-bold text-green-400">🇵🇰 Pakistani Community (1.5M+ in UAE)</h4>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                      <MessageCircle size={16} className="text-green-400" />
                      Channels
                    </h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• WhatsApp groups</li>
                      <li>• YouTube (Urdu content)</li>
                      <li>• TikTok Pakistan</li>
                      <li>• Khaleej Times Urdu</li>
                      <li>• Mosque community boards</li>
                      <li>• Pakistani restaurants</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                      <Mic size={16} className="text-blue-400" />
                      Messaging Hooks
                    </h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• "Zabardast savings"</li>
                      <li>• "Desi deals, firangi prices"</li>
                      <li>• "Biryani se lekar chai tak"</li>
                      <li>• Family iftar specials</li>
                      <li>• Cricket match screenings</li>
                      <li>• "Apna paisa, apni marzi"</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                      <Film size={16} className="text-purple-400" />
                      Content Strategy
                    </h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Urdu captions & voiceover</li>
                      <li>• Pakistani food trails</li>
                      <li>• "Mini Pakistan in UAE"</li>
                      <li>• Karachi street food finds</li>
                      <li>• BBQ & tikka deals</li>
                      <li>• Ramadan suhoor spots</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                      <Target size={16} className="text-red-400" />
                      Acquisition Tactics
                    </h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Pakistani supermarket flyers</li>
                      <li>• Auto showroom partnerships</li>
                      <li>• Pakistani restaurant deals</li>
                      <li>• Labor camp activations</li>
                      <li>• Jumma (Friday) flyers</li>
                      <li>• Pakistani business events</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 bg-green-500/20 rounded-lg p-3">
                  <p className="text-sm text-green-300">
                    <strong>Key Insight:</strong> Pakistani community overlaps heavily with Indian community in preferences
                    but responds better to Urdu content. Strong word-of-mouth culture. Focus on Sharjah Industrial Area,
                    Al Quoz, and Deira for blue-collar; JLT, Marina for professionals.
                  </p>
                </div>
              </div>

              {/* Arab Community */}
              <div className="mb-8 bg-[#c9a227]/10 rounded-xl p-6 border border-[#c9a227]/30">
                <div className="flex items-center gap-3 mb-4">
                  <Flag className="text-[#c9a227]" size={24} />
                  <h4 className="text-xl font-bold text-[#c9a227]">🇦🇪 Arab Community (Emirati + Arab Expats)</h4>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                      <MessageCircle size={16} className="text-green-400" />
                      Channels
                    </h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Snapchat (PRIMARY)</li>
                      <li>• Instagram (Arabic)</li>
                      <li>• Twitter/X (Arabic)</li>
                      <li>• TikTok Arabic</li>
                      <li>• Majlis gatherings</li>
                      <li>• Local influencers</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                      <Mic size={16} className="text-blue-400" />
                      Messaging Hooks
                    </h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• "عروض حصرية" (Exclusive offers)</li>
                      <li>• Quality over price messaging</li>
                      <li>• Family & gathering focus</li>
                      <li>• Premium experience emphasis</li>
                      <li>• Ramadan & Eid specials</li>
                      <li>• "Made for UAE" positioning</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                      <Film size={16} className="text-purple-400" />
                      Content Strategy
                    </h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Arabic-first content</li>
                      <li>• Emirati cuisine features</li>
                      <li>• Family restaurant reviews</li>
                      <li>• Hidden Emirati gems</li>
                      <li>• Heritage area deals</li>
                      <li>• VIP/exclusive tone</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                      <Target size={16} className="text-red-400" />
                      Acquisition Tactics
                    </h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Arabic influencer collabs</li>
                      <li>• Government entity partnerships</li>
                      <li>• University activations</li>
                      <li>• Premium mall activations</li>
                      <li>• Ramadan tent sponsorships</li>
                      <li>• Ladies-only events</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 bg-[#c9a227]/20 rounded-lg p-3">
                  <p className="text-sm text-[#c9a227]">
                    <strong>Key Insight:</strong> Arabs (especially Emiratis) prefer quality and exclusivity messaging over
                    discount messaging. Never position as "cheap" - position as "smart" or "exclusive." Snapchat is the
                    dominant platform. Family gatherings are key decision moments.
                  </p>
                </div>
              </div>

              {/* Russian/CIS Community */}
              <div className="mb-8 bg-red-500/10 rounded-xl p-6 border border-red-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <Flag className="text-red-400" size={24} />
                  <h4 className="text-xl font-bold text-red-400">🇷🇺 Russian/CIS Community (Growing Fast)</h4>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                      <MessageCircle size={16} className="text-green-400" />
                      Channels
                    </h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Telegram (PRIMARY)</li>
                      <li>• VK (VKontakte)</li>
                      <li>• Instagram Russian</li>
                      <li>• Russian radio stations</li>
                      <li>• Russian supermarkets</li>
                      <li>• Russian schools/clubs</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                      <Mic size={16} className="text-blue-400" />
                      Messaging Hooks
                    </h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• "Скидки для своих" (Discounts for us)</li>
                      <li>• Quality European standards</li>
                      <li>• "Как дома" (Like home)</li>
                      <li>• Lifestyle upgrade focus</li>
                      <li>• New Year & holidays</li>
                      <li>• Russian cuisine finds</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                      <Film size={16} className="text-purple-400" />
                      Content Strategy
                    </h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Russian captions/voiceover</li>
                      <li>• European restaurant features</li>
                      <li>• Beach club deals</li>
                      <li>• Brunch culture content</li>
                      <li>• Spa & wellness deals</li>
                      <li>• JBR/Marina lifestyle</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                      <Target size={16} className="text-red-400" />
                      Acquisition Tactics
                    </h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Telegram channel partnerships</li>
                      <li>• Russian events sponsorship</li>
                      <li>• Beach club activations</li>
                      <li>• Russian beauty salons</li>
                      <li>• Dubai Marina focus</li>
                      <li>• Real estate partnerships</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 bg-red-500/20 rounded-lg p-3">
                  <p className="text-sm text-red-300">
                    <strong>Key Insight:</strong> Russian community has grown 5x since 2022. They're concentrated in
                    JBR, Marina, Business Bay. Higher spending power - focus on lifestyle and quality, not budget.
                    Telegram is essential - many have 50+ active group chats.
                  </p>
                </div>
              </div>

              {/* Other Communities - Compact */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* African Community */}
                <div className="bg-yellow-500/10 rounded-xl p-5 border border-yellow-500/30">
                  <h4 className="text-lg font-bold text-yellow-400 mb-3">🌍 African Community</h4>
                  <div className="text-sm text-gray-300 space-y-2">
                    <p><strong>Channels:</strong> WhatsApp, Facebook, Community events</p>
                    <p><strong>Hotspots:</strong> Deira, Naif, Dragon Mart</p>
                    <p><strong>Hooks:</strong> Family deals, hometown food, community gatherings</p>
                    <p><strong>Key:</strong> Word-of-mouth is everything. One community leader = 500 users</p>
                  </div>
                </div>

                {/* Chinese Community */}
                <div className="bg-red-600/10 rounded-xl p-5 border border-red-600/30">
                  <h4 className="text-lg font-bold text-red-400 mb-3">🇨🇳 Chinese Community</h4>
                  <div className="text-sm text-gray-300 space-y-2">
                    <p><strong>Channels:</strong> WeChat (PRIMARY), Xiaohongshu, Douyin</p>
                    <p><strong>Hotspots:</strong> Dragon Mart, JLT, Discovery Gardens</p>
                    <p><strong>Hooks:</strong> Chinese restaurant deals, business networking</p>
                    <p><strong>Key:</strong> Need WeChat mini-program eventually. Very insular community.</p>
                  </div>
                </div>

                {/* British/Western Community */}
                <div className="bg-blue-600/10 rounded-xl p-5 border border-blue-600/30">
                  <h4 className="text-lg font-bold text-blue-400 mb-3">🇬🇧 British/Western Expats</h4>
                  <div className="text-sm text-gray-300 space-y-2">
                    <p><strong>Channels:</strong> Instagram, LinkedIn, Entertainer competitor</p>
                    <p><strong>Hotspots:</strong> Marina, JBR, Springs, Ranches</p>
                    <p><strong>Hooks:</strong> Brunch deals, ladies' nights, family activities</p>
                    <p><strong>Key:</strong> They already use Entertainer. Beat them on UX & merchant variety.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 2: PROFESSION-BASED ACQUISITION */}
            <div className="bg-gradient-to-br from-[#0a1628] to-[#1a2a4a] rounded-xl p-8 border border-blue-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <Briefcase className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Profession-Based Acquisition</h3>
                  <p className="text-gray-400">Tailored strategies for different job sectors</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Students */}
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="text-purple-400" size={24} />
                    <h4 className="text-xl font-bold text-purple-400">🎓 Students (University & College)</h4>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-white mb-2">Channels</h5>
                      <p className="text-sm text-gray-300">Instagram, TikTok, University WhatsApp groups, Campus ambassadors, Snapchat</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-2">Messaging</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• "Broke student? Not anymore 💰"</li>
                        <li>• "Eat like a king on a student budget"</li>
                        <li>• "Free food hack every student needs"</li>
                        <li>• "Your allowance just doubled"</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-2">Acquisition Tactics</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Campus ambassador program (paid in credits)</li>
                        <li>• University orientation sponsorship</li>
                        <li>• Student ID verification = extra rewards</li>
                        <li>• Exam season "brain food" deals</li>
                        <li>• Study café partnerships</li>
                      </ul>
                    </div>
                    <div className="bg-purple-500/20 rounded-lg p-3">
                      <p className="text-xs text-purple-300">
                        <strong>Target Unis:</strong> AUS, UAEU, AUD, Heriot-Watt, Middlesex, University of Dubai,
                        Manipal, Bits Pilani, Amity
                      </p>
                    </div>
                  </div>
                </div>

                {/* Healthcare Workers */}
                <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Stethoscope className="text-green-400" size={24} />
                    <h4 className="text-xl font-bold text-green-400">🏥 Healthcare Workers</h4>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-white mb-2">Channels</h5>
                      <p className="text-sm text-gray-300">Hospital WhatsApp groups, DHA/DOH communities, Nursing associations, LinkedIn Healthcare UAE</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-2">Messaging</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• "You save lives. We save you money."</li>
                        <li>• "Healthcare heroes deserve deals"</li>
                        <li>• "Night shift? 24/7 deals for you"</li>
                        <li>• "Your break just got better"</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-2">Acquisition Tactics</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Hospital cafeteria partnerships</li>
                        <li>• Nurse referral program (they're networked!)</li>
                        <li>• DHA license verification = VIP tier</li>
                        <li>• Night shift meal deal partnerships</li>
                        <li>• Healthcare worker appreciation days</li>
                      </ul>
                    </div>
                    <div className="bg-green-500/20 rounded-lg p-3">
                      <p className="text-xs text-green-300">
                        <strong>Target Hospitals:</strong> Cleveland Clinic, Mediclinic, NMC, Aster, Al Zahra,
                        Burjeel, Saudi German, Thumbay
                      </p>
                    </div>
                  </div>
                </div>

                {/* IT/Tech Professionals */}
                <div className="bg-cyan-500/10 rounded-xl p-6 border border-cyan-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Monitor className="text-cyan-400" size={24} />
                    <h4 className="text-xl font-bold text-cyan-400">💻 IT & Tech Professionals</h4>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-white mb-2">Channels</h5>
                      <p className="text-sm text-gray-300">LinkedIn, Twitter/X, Discord, Tech meetup groups, Reddit UAE, Product Hunt</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-2">Messaging</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• "Finally, an app that doesn't suck"</li>
                        <li>• "Optimized savings. No bloat."</li>
                        <li>• "Built by devs who get it"</li>
                        <li>• "Your ROI on lunch just improved"</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-2">Acquisition Tactics</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Tech meetup sponsorship (AWS, Google Dev)</li>
                        <li>• Free zone office activations (DMCC, DWTC)</li>
                        <li>• Startup ecosystem partnerships</li>
                        <li>• Developer-focused landing page</li>
                        <li>• API access for early adopters</li>
                      </ul>
                    </div>
                    <div className="bg-cyan-500/20 rounded-lg p-3">
                      <p className="text-xs text-cyan-300">
                        <strong>Target Areas:</strong> DIFC, Dubai Internet City, Dubai Silicon Oasis,
                        Knowledge Village, DTEC, Area 2071
                      </p>
                    </div>
                  </div>
                </div>

                {/* Teachers & Educators */}
                <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="text-yellow-400" size={24} />
                    <h4 className="text-xl font-bold text-yellow-400">👩‍🏫 Teachers & Educators</h4>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-white mb-2">Channels</h5>
                      <p className="text-sm text-gray-300">Teacher WhatsApp groups, KHDA communities, School parent networks, Education conferences</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-2">Messaging</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• "Teachers deserve treats too"</li>
                        <li>• "Your salary, maximized"</li>
                        <li>• "After-school rewards"</li>
                        <li>• "Teacher's pet prices"</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-2">Acquisition Tactics</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• School staff room flyers</li>
                        <li>• Teacher appreciation week promos</li>
                        <li>• Education conference booths</li>
                        <li>• Parent network referrals</li>
                        <li>• Summer break travel deals</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-500/20 rounded-lg p-3">
                      <p className="text-xs text-yellow-300">
                        <strong>Target Schools:</strong> GEMS network, Taaleem, Aldar Education,
                        Brighton College, Dubai College, JESS
                      </p>
                    </div>
                  </div>
                </div>

                {/* Blue Collar Workers */}
                <div className="bg-orange-500/10 rounded-xl p-6 border border-orange-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Building className="text-orange-400" size={24} />
                    <h4 className="text-xl font-bold text-orange-400">🔧 Blue Collar Workers</h4>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-white mb-2">Channels</h5>
                      <p className="text-sm text-gray-300">Labor camp activations, Salary day flyering, Indian/Pakistani grocery stores, Bus stops</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-2">Messaging</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• "More money to send home"</li>
                        <li>• "Stretch your dirhams"</li>
                        <li>• "Friday treat for less"</li>
                        <li>• Simple, visual, multilingual</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-2">Acquisition Tactics</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Labor camp WiFi partnerships</li>
                        <li>• Salary day (25th-1st) blitzes</li>
                        <li>• Friday afternoon activations</li>
                        <li>• Exchange house partnerships</li>
                        <li>• Group deal features</li>
                      </ul>
                    </div>
                    <div className="bg-orange-500/20 rounded-lg p-3">
                      <p className="text-xs text-orange-300">
                        <strong>Target Areas:</strong> Sonapur, Al Quoz Industrial, Jebel Ali,
                        Sharjah Industrial Area, Ajman Industrial
                      </p>
                    </div>
                  </div>
                </div>

                {/* Real Estate & Sales */}
                <div className="bg-[#c9a227]/10 rounded-xl p-6 border border-[#c9a227]/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Landmark className="text-[#c9a227]" size={24} />
                    <h4 className="text-xl font-bold text-[#c9a227]">🏢 Real Estate & Sales Pros</h4>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-white mb-2">Channels</h5>
                      <p className="text-sm text-gray-300">LinkedIn, Agent WhatsApp groups, Property exhibitions, Real estate office visits</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-2">Messaging</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• "Close deals over great meals"</li>
                        <li>• "Client meeting? We've got you"</li>
                        <li>• "Commission earned = treats deserved"</li>
                        <li>• "Network smarter, not harder"</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-2">Acquisition Tactics</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Agency office partnerships</li>
                        <li>• Client entertainment deals</li>
                        <li>• Cityscape exhibition presence</li>
                        <li>• B2B referral program</li>
                        <li>• Co-branded client gifts</li>
                      </ul>
                    </div>
                    <div className="bg-[#c9a227]/20 rounded-lg p-3">
                      <p className="text-xs text-[#c9a227]">
                        <strong>Target Agencies:</strong> Emaar, DAMAC, Betterhomes, Allsopp & Allsopp,
                        Haus & Haus, Driven Properties
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 3: MERCHANT CATEGORY ACQUISITION */}
            <div className="bg-gradient-to-br from-[#0a1628] to-[#1a2a4a] rounded-xl p-8 border border-purple-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <Store className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Merchant Category Acquisition</h3>
                  <p className="text-gray-400">Different pitch & approach for each merchant type</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* F&B Restaurants */}
                <div className="bg-red-500/10 rounded-xl p-5 border border-red-500/30">
                  <div className="flex items-center gap-2 mb-4">
                    <Utensils className="text-red-400" size={22} />
                    <h4 className="text-lg font-bold text-red-400">🍽️ F&B / Restaurants</h4>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <h5 className="font-semibold text-white">Pain Points</h5>
                      <p className="text-gray-400">Empty tables 2-5pm, weekday slowness, new customer acquisition cost</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">Value Prop</h5>
                      <p className="text-gray-400">"Fill empty seats during slow hours. You set the terms."</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">Pitch Approach</h5>
                      <ul className="text-gray-400 space-y-1">
                        <li>• Walk-in during slow hours</li>
                        <li>• Show competitor deals nearby</li>
                        <li>• Offer time-limited promos</li>
                        <li>• Start with weekday lunch deals</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">Ideal Deal Structure</h5>
                      <p className="text-gray-400">20-30% off, 2-5pm only, dine-in only, min spend AED 50</p>
                    </div>
                  </div>
                </div>

                {/* Salons & Spas */}
                <div className="bg-pink-500/10 rounded-xl p-5 border border-pink-500/30">
                  <div className="flex items-center gap-2 mb-4">
                    <Scissors className="text-pink-400" size={22} />
                    <h4 className="text-lg font-bold text-pink-400">💇 Salons & Spas</h4>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <h5 className="font-semibold text-white">Pain Points</h5>
                      <p className="text-gray-400">Sunday-Tuesday empty, last-minute cancellations, new client acquisition</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">Value Prop</h5>
                      <p className="text-gray-400">"Turn no-shows into paid appointments. Guaranteed new clients."</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">Pitch Approach</h5>
                      <ul className="text-gray-400 space-y-1">
                        <li>• Target owners, not front desk</li>
                        <li>• Offer free trial period</li>
                        <li>• Focus on weekday slots</li>
                        <li>• Show Instagram reach potential</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">Ideal Deal Structure</h5>
                      <p className="text-gray-400">25% off Sun-Tue, specific services only, booking required</p>
                    </div>
                  </div>
                </div>

                {/* Gyms & Fitness */}
                <div className="bg-green-500/10 rounded-xl p-5 border border-green-500/30">
                  <div className="flex items-center gap-2 mb-4">
                    <Dumbbell className="text-green-400" size={22} />
                    <h4 className="text-lg font-bold text-green-400">🏋️ Gyms & Fitness</h4>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <h5 className="font-semibold text-white">Pain Points</h5>
                      <p className="text-gray-400">January rush then dropoff, membership churn, class fill rates</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">Value Prop</h5>
                      <p className="text-gray-400">"Fill empty class slots. Convert trial users to members."</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">Pitch Approach</h5>
                      <ul className="text-gray-400 space-y-1">
                        <li>• Focus on boutique studios</li>
                        <li>• Offer class pass deals</li>
                        <li>• Target post-Jan slowdown</li>
                        <li>• Co-market healthy lifestyle</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">Ideal Deal Structure</h5>
                      <p className="text-gray-400">Free trial class, 20% off first month, off-peak hours</p>
                    </div>
                  </div>
                </div>

                {/* Healthcare & Clinics */}
                <div className="bg-blue-500/10 rounded-xl p-5 border border-blue-500/30">
                  <div className="flex items-center gap-2 mb-4">
                    <Stethoscope className="text-blue-400" size={22} />
                    <h4 className="text-lg font-bold text-blue-400">🏥 Healthcare & Clinics</h4>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <h5 className="font-semibold text-white">Pain Points</h5>
                      <p className="text-gray-400">Cash-pay patient acquisition, insurance dependency, elective procedure promotion</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">Value Prop</h5>
                      <p className="text-gray-400">"Attract cash-pay patients. Promote elective services legally."</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">Pitch Approach</h5>
                      <ul className="text-gray-400 space-y-1">
                        <li>• Focus on dental, optical, derma</li>
                        <li>• Checkup/screening packages</li>
                        <li>• Respect medical advertising laws</li>
                        <li>• Partner on wellness content</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">Ideal Deal Structure</h5>
                      <p className="text-gray-400">Package deals (cleaning + checkup), screening discounts</p>
                    </div>
                  </div>
                </div>

                {/* Retail & Shopping */}
                <div className="bg-purple-500/10 rounded-xl p-5 border border-purple-500/30">
                  <div className="flex items-center gap-2 mb-4">
                    <ShoppingCart className="text-purple-400" size={22} />
                    <h4 className="text-lg font-bold text-purple-400">🛍️ Retail & Shopping</h4>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <h5 className="font-semibold text-white">Pain Points</h5>
                      <p className="text-gray-400">Online competition, footfall decline, inventory clearance</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">Value Prop</h5>
                      <p className="text-gray-400">"Drive footfall. Clear inventory. Beat online competition."</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">Pitch Approach</h5>
                      <ul className="text-gray-400 space-y-1">
                        <li>• Target independent boutiques</li>
                        <li>• Seasonal clearance partnerships</li>
                        <li>• Exclusive in-store only deals</li>
                        <li>• Co-create limited offers</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">Ideal Deal Structure</h5>
                      <p className="text-gray-400">In-store only, min spend, specific categories</p>
                    </div>
                  </div>
                </div>

                {/* Entertainment & Activities */}
                <div className="bg-[#c9a227]/10 rounded-xl p-5 border border-[#c9a227]/30">
                  <div className="flex items-center gap-2 mb-4">
                    <Film className="text-[#c9a227]" size={22} />
                    <h4 className="text-lg font-bold text-[#c9a227]">🎢 Entertainment & Activities</h4>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <h5 className="font-semibold text-white">Pain Points</h5>
                      <p className="text-gray-400">Weekday emptiness, summer slowdown, group booking dependency</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">Value Prop</h5>
                      <p className="text-gray-400">"Fill weekday slots. Attract families. Drive repeat visits."</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">Pitch Approach</h5>
                      <ul className="text-gray-400 space-y-1">
                        <li>• Target escape rooms, bowling, karting</li>
                        <li>• Family package deals</li>
                        <li>• Birthday party partnerships</li>
                        <li>• Summer campaign tie-ins</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">Ideal Deal Structure</h5>
                      <p className="text-gray-400">Weekday discounts, family bundles, birthday freebies</p>
                    </div>
                  </div>
                </div>

                {/* Coffee Shops & Cafés */}
                <div className="bg-amber-500/10 rounded-xl p-5 border border-amber-500/30">
                  <div className="flex items-center gap-2 mb-4">
                    <Coffee className="text-amber-400" size={22} />
                    <h4 className="text-lg font-bold text-amber-400">☕ Coffee Shops & Cafés</h4>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <h5 className="font-semibold text-white">Pain Points</h5>
                      <p className="text-gray-400">Post-morning lull, differentiation from Starbucks, student market</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">Value Prop</h5>
                      <p className="text-gray-400">"Become the local favorite. Fill afternoon tables."</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">Pitch Approach</h5>
                      <ul className="text-gray-400 space-y-1">
                        <li>• Independent cafés first</li>
                        <li>• Study spot positioning</li>
                        <li>• Afternoon happy hour concept</li>
                        <li>• Instagram-worthy content collab</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">Ideal Deal Structure</h5>
                      <p className="text-gray-400">2-5pm specials, combo deals, loyalty program</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Merchant Acquisition Priorities */}
              <div className="mt-8 bg-white/5 rounded-xl p-6 border border-white/20">
                <h4 className="text-xl font-bold text-white mb-4">Merchant Acquisition Priorities</h4>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">Phase 1</div>
                    <div className="text-sm text-gray-400">Launch (Month 1-2)</div>
                    <ul className="text-sm text-white mt-3 space-y-1">
                      <li>• F&B (50 merchants)</li>
                      <li>• Cafés (30 merchants)</li>
                      <li>• Quick wins only</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">Phase 2</div>
                    <div className="text-sm text-gray-400">Growth (Month 3-4)</div>
                    <ul className="text-sm text-white mt-3 space-y-1">
                      <li>• Salons (40 merchants)</li>
                      <li>• Gyms (20 merchants)</li>
                      <li>• Entertainment (15)</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">Phase 3</div>
                    <div className="text-sm text-gray-400">Scale (Month 5-6)</div>
                    <ul className="text-sm text-white mt-3 space-y-1">
                      <li>• Healthcare (25)</li>
                      <li>• Retail (30)</li>
                      <li>• Premium dining (20)</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#c9a227] mb-2">Phase 4</div>
                    <div className="text-sm text-gray-400">Dominate (Month 7+)</div>
                    <ul className="text-sm text-white mt-3 space-y-1">
                      <li>• Chain partnerships</li>
                      <li>• Exclusive deals</li>
                      <li>• Category leaders</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 4: ACQUISITION TRACKING MATRIX */}
            <div className="bg-gradient-to-br from-[#0a1628] to-[#1a2a4a] rounded-xl p-8 border border-[#c9a227]/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#c9a227]/20 p-3 rounded-lg">
                  <BarChart3 className="text-[#c9a227]" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Segment Performance Tracking</h3>
                  <p className="text-gray-400">How to measure success across segments</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-[#c9a227]">Segment</th>
                      <th className="text-left py-3 px-4 text-[#c9a227]">Primary KPI</th>
                      <th className="text-left py-3 px-4 text-[#c9a227]">Target CAC</th>
                      <th className="text-left py-3 px-4 text-[#c9a227]">Expected LTV</th>
                      <th className="text-left py-3 px-4 text-[#c9a227]">Viral Coefficient</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Indian Community</td>
                      <td className="py-3 px-4">WhatsApp group joins</td>
                      <td className="py-3 px-4 text-green-400">AED 2-5</td>
                      <td className="py-3 px-4">AED 150+</td>
                      <td className="py-3 px-4 text-green-400">1.5-2.0</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Filipino Community</td>
                      <td className="py-3 px-4">Facebook group shares</td>
                      <td className="py-3 px-4 text-green-400">AED 3-6</td>
                      <td className="py-3 px-4">AED 180+</td>
                      <td className="py-3 px-4 text-green-400">1.8-2.5</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Arab Community</td>
                      <td className="py-3 px-4">App downloads</td>
                      <td className="py-3 px-4 text-yellow-400">AED 8-15</td>
                      <td className="py-3 px-4">AED 300+</td>
                      <td className="py-3 px-4">1.2-1.5</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Students</td>
                      <td className="py-3 px-4">Campus sign-ups</td>
                      <td className="py-3 px-4 text-green-400">AED 1-3</td>
                      <td className="py-3 px-4">AED 80</td>
                      <td className="py-3 px-4 text-green-400">2.0-3.0</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Healthcare Workers</td>
                      <td className="py-3 px-4">Referral rate</td>
                      <td className="py-3 px-4 text-yellow-400">AED 5-10</td>
                      <td className="py-3 px-4">AED 250+</td>
                      <td className="py-3 px-4 text-green-400">1.6-2.0</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">F&B Merchants</td>
                      <td className="py-3 px-4">Monthly active deals</td>
                      <td className="py-3 px-4 text-yellow-400">AED 50-100</td>
                      <td className="py-3 px-4">AED 2,000+</td>
                      <td className="py-3 px-4">1.3-1.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                  <h5 className="font-bold text-green-400 mb-2">High-Viral Segments</h5>
                  <p className="text-sm text-gray-400">Students, Filipino, Indian communities have highest viral coefficients. Invest heavily in referral mechanics for these groups.</p>
                </div>
                <div className="bg-[#c9a227]/10 rounded-lg p-4 border border-[#c9a227]/30">
                  <h5 className="font-bold text-[#c9a227] mb-2">High-LTV Segments</h5>
                  <p className="text-sm text-gray-400">Arab community and merchants have highest lifetime value. Worth higher acquisition cost for long-term revenue.</p>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
                  <h5 className="font-bold text-blue-400 mb-2">Quick-Win Segments</h5>
                  <p className="text-sm text-gray-400">Students and Indian community offer lowest CAC. Perfect for launch phase volume and social proof building.</p>
                </div>
              </div>
            </div>

            {/* Implementation Checklist */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/20">
              <h4 className="text-xl font-bold text-white mb-4">Implementation Checklist</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-[#c9a227] mb-3">Before Launch</h5>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 border border-gray-500 rounded mt-0.5"></div>
                      <span>Create segment-specific landing pages (Arabic, Hindi, Tagalog)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 border border-gray-500 rounded mt-0.5"></div>
                      <span>Prepare community-specific WhatsApp/Telegram groups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 border border-gray-500 rounded mt-0.5"></div>
                      <span>Design merchant pitch decks for each category</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 border border-gray-500 rounded mt-0.5"></div>
                      <span>Set up tracking UTMs for each segment campaign</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-[#c9a227] mb-3">Week 1-2</h5>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 border border-gray-500 rounded mt-0.5"></div>
                      <span>Launch Indian community campaign (WhatsApp groups)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 border border-gray-500 rounded mt-0.5"></div>
                      <span>Activate student ambassador program at 3 universities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 border border-gray-500 rounded mt-0.5"></div>
                      <span>Onboard 20 F&B merchants in Karama/Bur Dubai</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 border border-gray-500 rounded mt-0.5"></div>
                      <span>Launch Filipino Facebook group campaign</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Brand Marketing Services Tab */}
        {activeTab === 'brandmarketing' && (
          <div className="space-y-8">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-purple-500/20 rounded-2xl p-8 border border-[#c9a227]/30">
              <h2 className="text-3xl font-bold text-white mb-4">Brand Marketing by Nuqta</h2>
              <p className="text-xl text-gray-300 mb-4">Marketing & Business Development Services for Merchants</p>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-[#c9a227] font-bold mb-2">Why We Do This</div>
                <p className="text-gray-300">Indirectly promote Nuqta via merchants. When merchants succeed, Nuqta wins. We become their marketing partner, not just a payment app.</p>
              </div>
            </div>

            {/* Marketing Manager Structure */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-[#c9a227] mb-6 flex items-center gap-2">
                <Users size={24} />
                Marketing Manager Structure
              </h3>
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 border border-blue-500/30">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-blue-400">1 Manager : 20 Merchants</div>
                  <p className="text-gray-400 mt-2">Each marketing manager handles 20 business accounts</p>
                </div>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { role: 'Account Management', tasks: 'Weekly check-ins, performance reviews' },
                    { role: 'Campaign Planning', tasks: 'Monthly campaign calendar' },
                    { role: 'Content Coordination', tasks: 'Ensure content delivery' },
                    { role: 'ROI Reporting', tasks: 'Monthly performance reports' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-4 text-center">
                      <div className="text-white font-bold text-sm mb-2">{item.role}</div>
                      <div className="text-gray-400 text-xs">{item.tasks}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Online Marketing Services */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
                <Monitor size={24} />
                Online Marketing Services
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-lg p-4 border border-blue-500/30">
                    <div className="flex items-center gap-3 mb-3">
                      <Facebook className="text-blue-400" size={24} />
                      <div className="text-white font-bold">Meta Ads</div>
                    </div>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Facebook & Instagram campaigns</li>
                      <li>• Targeted local audience</li>
                      <li>• Retargeting website visitors</li>
                      <li>• Lookalike audience creation</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-r from-green-600/20 to-green-400/20 rounded-lg p-4 border border-green-500/30">
                    <div className="flex items-center gap-3 mb-3">
                      <MessageCircle className="text-green-400" size={24} />
                      <div className="text-white font-bold">WhatsApp Marketing</div>
                    </div>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Broadcast campaigns</li>
                      <li>• Catalog sharing</li>
                      <li>• Customer engagement</li>
                      <li>• Order updates & promotions</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-red-600/20 to-orange-400/20 rounded-lg p-4 border border-red-500/30">
                    <div className="flex items-center gap-3 mb-3">
                      <ShoppingCart className="text-red-400" size={24} />
                      <div className="text-white font-bold">Google Shopping</div>
                    </div>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Product listing ads</li>
                      <li>• Shopping campaigns</li>
                      <li>• Local inventory ads</li>
                      <li>• Performance Max campaigns</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 rounded-lg p-4 border border-yellow-500/30">
                    <div className="flex items-center gap-3 mb-3">
                      <MapPin className="text-yellow-400" size={24} />
                      <div className="text-white font-bold">Google My Business</div>
                    </div>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Profile optimization</li>
                      <li>• Store URL update</li>
                      <li>• "Pay via Nuqta & earn cashback" badge</li>
                      <li>• Review management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Offline Marketing Services */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-purple-400 mb-6 flex items-center gap-2">
                <MapPin size={24} />
                Offline Marketing Services
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { type: 'Auto Ads', icon: '🚗', desc: 'Taxi & ride-share branding', cost: 'AED 500-2000/month' },
                  { type: 'Bus Ads', icon: '🚌', desc: 'Bus shelter & bus body ads', cost: 'AED 3000-10000/month' },
                  { type: 'Gate Ads', icon: '🚧', desc: 'Building & community gates', cost: 'AED 1000-5000/month' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <div className="text-white font-bold mb-1">{item.type}</div>
                    <div className="text-gray-400 text-sm mb-2">{item.desc}</div>
                    <div className="text-purple-400 text-xs">{item.cost}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Services */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-pink-400 mb-6 flex items-center gap-2">
                <Camera size={24} />
                Content Creation Services
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { type: 'Reels', desc: '15-60 sec videos', freq: '4x/month', icon: Video },
                  { type: 'Posts', desc: 'Static graphics', freq: '8x/month', icon: Image },
                  { type: 'UGC', desc: 'User-generated content', freq: 'Ongoing', icon: Users },
                  { type: 'Influencer', desc: 'Barter & paid collabs', freq: '2x/month', icon: Star },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-b from-pink-500/10 to-purple-500/10 rounded-lg p-4 border border-pink-500/30">
                    <item.icon className="text-pink-400 mb-3" size={28} />
                    <div className="text-white font-bold mb-1">{item.type}</div>
                    <div className="text-gray-400 text-sm">{item.desc}</div>
                    <div className="text-pink-400 text-xs mt-2">{item.freq}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Engineering Strategy */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-orange-500/20 rounded-xl p-6 border border-[#c9a227]/30">
              <h3 className="text-xl font-bold text-[#c9a227] mb-6 flex items-center gap-2">
                <DollarSign size={24} />
                Price Engineering Strategy
              </h3>
              <div className="bg-white/10 rounded-lg p-6 mb-6">
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-white mb-2">The 20% Strategy</div>
                  <p className="text-gray-400">Increase perceived value while maintaining margins</p>
                </div>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">📈</div>
                    <div className="text-white font-bold">Step 1</div>
                    <div className="text-gray-400 text-sm">Update menu prices +20%</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">🎁</div>
                    <div className="text-white font-bold">Step 2</div>
                    <div className="text-gray-400 text-sm">Offer 20% Nuqta discount</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">⭐</div>
                    <div className="text-white font-bold">Step 3</div>
                    <div className="text-gray-400 text-sm">Brand value increases</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">🔁</div>
                    <div className="text-white font-bold">Step 4</div>
                    <div className="text-gray-400 text-sm">Nuqta users stay loyal</div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
                <div className="text-blue-400 font-bold mb-2">Dynamic Pricing (Airline Model)</div>
                <p className="text-gray-400 text-sm">Based on demand, discount can increase or decrease. Peak hours = lower discount. Off-peak = higher discount. Creates urgency and optimizes revenue.</p>
              </div>
            </div>

            {/* Nuqta Board & Materials */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
                <QrCode size={24} />
                Nuqta Board & In-Store Materials
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-white mb-4">Physical Materials</h4>
                  <div className="space-y-3">
                    {[
                      { item: 'QR Code Stand', desc: 'Pay at store via Nuqta', placement: 'Counter/Checkout' },
                      { item: 'Wall Sticker', desc: 'We Accept Nuqta', placement: 'Door/Window' },
                      { item: 'Circle Board', desc: 'Outdoor store signage', placement: 'Outside shop' },
                      { item: 'Table Tent', desc: 'Scan & pay with Nuqta', placement: 'Tables/Counter' },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-3 flex items-center justify-between">
                        <div>
                          <div className="text-white font-medium">{item.item}</div>
                          <div className="text-gray-400 text-xs">{item.desc}</div>
                        </div>
                        <div className="text-cyan-400 text-xs">{item.placement}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-4">Message Variations</h4>
                  <div className="space-y-3">
                    {[
                      'We Accept Nuqta',
                      'Pay with Nuqta & Earn Cashback Instantly',
                      'Use Nuqta and Get Instant Cashback',
                      'Nuqta Accepted Here - Save on Every Purchase',
                    ].map((msg, idx) => (
                      <div key={idx} className="bg-[#c9a227]/10 rounded-lg p-3 border border-[#c9a227]/30">
                        <div className="text-[#c9a227] font-medium text-sm">{msg}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Merchant Verified Badge Levels */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-500/30">
              <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
                <BadgeCheck size={24} />
                Merchant Verified Badge Levels
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { level: 'Verified', color: 'text-gray-400', bg: 'bg-gray-500/20', border: 'border-gray-500/30', req: 'Completed onboarding', benefits: 'Basic badge, listed in app' },
                  { level: 'Trusted', color: 'text-blue-400', bg: 'bg-blue-500/20', border: 'border-blue-500/30', req: '50+ transactions, 4+ rating', benefits: 'Trust badge, priority support' },
                  { level: 'Nuqta Preferred', color: 'text-purple-400', bg: 'bg-purple-500/20', border: 'border-purple-500/30', req: '200+ transactions, top 20%', benefits: 'Featured placement, marketing support' },
                  { level: 'Nuqta Signature', color: 'text-[#c9a227]', bg: 'bg-[#c9a227]/20', border: 'border-[#c9a227]/30', req: 'Exclusive partnership', benefits: 'Premium features, co-branded campaigns' },
                ].map((badge, idx) => (
                  <div key={idx} className={`${badge.bg} rounded-lg p-4 border ${badge.border}`}>
                    <div className={`${badge.color} font-bold text-lg mb-3 flex items-center gap-2`}>
                      <BadgeCheck size={20} />
                      {badge.level}
                    </div>
                    <div className="space-y-2">
                      <div>
                        <div className="text-xs text-gray-500 uppercase">Requirements</div>
                        <div className="text-gray-300 text-sm">{badge.req}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 uppercase">Benefits</div>
                        <div className="text-gray-300 text-sm">{badge.benefits}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Ad Campaigns Tab */}
        {activeTab === 'adscampaigns' && (
          <div className="space-y-8">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-8 border border-red-500/30">
              <h2 className="text-3xl font-bold text-white mb-4">Ad Campaigns Strategy</h2>
              <p className="text-xl text-gray-300">Complete campaign playbook for merchant and user acquisition</p>
            </div>

            {/* Merchant Campaigns */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-2">
                <Store size={24} />
                Merchant Acquisition Campaigns
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { headline: 'Increase Your Revenue', subtext: 'With No Upfront Cost', hook: 'Zero investment, pure profit', cta: 'Join Free Today' },
                  { headline: 'Increase Your AOV', subtext: 'Average Order Value +30%', hook: 'Customers spend more with cashback', cta: 'Learn How' },
                  { headline: 'Reach Your Audience', subtext: 'Target Local Customers', hook: 'We bring customers to your door', cta: 'Get Started' },
                ].map((campaign, idx) => (
                  <div key={idx} className="bg-gradient-to-b from-blue-500/10 to-purple-500/10 rounded-lg p-5 border border-blue-500/30">
                    <div className="text-blue-400 font-bold text-lg mb-1">{campaign.headline}</div>
                    <div className="text-white mb-3">{campaign.subtext}</div>
                    <div className="text-gray-400 text-sm mb-4">Hook: {campaign.hook}</div>
                    <div className="bg-[#c9a227] text-black text-center py-2 rounded font-bold text-sm">{campaign.cta}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* User Acquisition Campaigns */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
                <Users size={24} />
                User Acquisition Campaigns
              </h3>

              {/* Win Big Campaign */}
              <div className="bg-gradient-to-r from-[#c9a227]/20 to-yellow-500/20 rounded-lg p-6 border border-[#c9a227]/30 mb-6">
                <div className="text-[#c9a227] font-bold text-xl mb-4">Pay with Nuqta & Win Big!</div>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { prize: 'Car', value: 'AED 150,000', freq: 'Yearly Grand Prize' },
                    { prize: 'iPhone 16 Pro', value: 'AED 5,000', freq: 'Monthly Draw' },
                    { prize: 'AED 10,000 Cash', value: 'Direct Credit', freq: 'Weekly Draw' },
                    { prize: 'Free Shopping', value: 'AED 1,000', freq: 'Daily Winner' },
                  ].map((prize, idx) => (
                    <div key={idx} className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-3xl mb-2">{idx === 0 ? '🚗' : idx === 1 ? '📱' : idx === 2 ? '💰' : '🛍️'}</div>
                      <div className="text-white font-bold">{prize.prize}</div>
                      <div className="text-[#c9a227] text-sm">{prize.value}</div>
                      <div className="text-gray-400 text-xs mt-1">{prize.freq}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Calculate Savings Campaign */}
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-6 border border-green-500/30 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calculator className="text-green-400" size={28} />
                  <div>
                    <div className="text-green-400 font-bold text-xl">Calculate Your Savings</div>
                    <div className="text-gray-400">Upload bills, see how much you could have saved</div>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-white font-bold mb-2">Step 1: Upload</div>
                    <div className="text-gray-400 text-sm">Upload your bills on the app</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-white font-bold mb-2">Step 2: Calculate</div>
                    <div className="text-gray-400 text-sm">See how much you would have saved with Nuqta</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-white font-bold mb-2">Step 3: Earn</div>
                    <div className="text-gray-400 text-sm">Share video on social media & earn cashback (Max AED 300)</div>
                  </div>
                </div>
              </div>

              {/* Smart People Campaign */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-6 border border-purple-500/30">
                  <div className="text-purple-400 font-bold text-xl mb-3">Smart People Use Nuqta</div>
                  <p className="text-gray-400 mb-4">Position Nuqta as the smart choice for savvy shoppers</p>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Testimonials from professionals</li>
                    <li>• Savings calculations in ads</li>
                    <li>• Before/after spending comparisons</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg p-6 border border-orange-500/30">
                  <div className="text-orange-400 font-bold text-xl mb-3">Nuqta Cash Hunting</div>
                  <p className="text-gray-400 mb-4">Gamified treasure hunt for cashback</p>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Hidden QR codes at partner locations</li>
                    <li>• Scan to win instant cashback</li>
                    <li>• Leaderboard for top hunters</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Additional Campaign Ideas */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-pink-400 mb-6 flex items-center gap-2">
                <Sparkles size={24} />
                Special Campaign Concepts
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { name: 'Co-Partner Packaging', desc: 'Nuqta branding on partner product packaging', type: 'Awareness' },
                  { name: 'Street Signaling', desc: 'Street teams with Nuqta branded materials', type: 'Activation' },
                  { name: '15% First Order', desc: 'Experience luxury at your fingertips', type: 'Conversion' },
                  { name: 'Singing Competition', desc: 'Nuqta Got Talent - win Nuqta coins', type: 'Engagement' },
                  { name: 'Dance Challenge', desc: 'TikTok dance challenge with prizes', type: 'Viral' },
                  { name: 'Quiz Nights', desc: 'Trivia at partner venues', type: 'Community' },
                  { name: 'Sports Tournaments', desc: 'Sponsor local cricket, football', type: 'Sponsorship' },
                  { name: 'Social Experiments', desc: 'Give winner Nuqta coin - viral content', type: 'Content' },
                  { name: 'Tech Reviews', desc: 'Partner with tech influencers', type: 'Influencer' },
                ].map((campaign, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-white font-bold">{campaign.name}</div>
                      <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded">{campaign.type}</span>
                    </div>
                    <div className="text-gray-400 text-sm">{campaign.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Media Hub Tab */}
        {activeTab === 'mediahub' && (
          <div className="space-y-8">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
              <h2 className="text-3xl font-bold text-white mb-4">Media Hub Strategy</h2>
              <p className="text-xl text-gray-300">Content production across entertainment, sports, and lifestyle verticals</p>
            </div>

            {/* Short Films & Entertainment */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
                <Clapperboard size={24} />
                Short Films & Entertainment
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { type: 'Short Films', content: 'Drama, comedy, slice of life', freq: '2x/month' },
                  { type: 'Story Lab', content: 'AI-generated stories, superhero, animals', freq: '4x/month' },
                  { type: 'Indian Cartoons', content: 'Animated podcast style', freq: '2x/month' },
                  { type: 'Business Series', content: 'Entrepreneur interviews', freq: '1x/week' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-red-500/10 rounded-lg p-4 border border-red-500/30">
                    <div className="text-red-400 font-bold mb-2">{item.type}</div>
                    <div className="text-gray-400 text-sm mb-2">{item.content}</div>
                    <div className="text-xs text-gray-500">{item.freq}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sports Content */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
                <Trophy size={24} />
                Sports Content
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-white mb-4">News & Analysis</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {['Football', 'Cricket', 'WWE', 'Kabaddi'].map((sport, idx) => (
                      <div key={idx} className="bg-green-500/10 rounded-lg p-3 text-center border border-green-500/30">
                        <div className="text-green-400 font-bold">{sport}</div>
                        <div className="text-gray-400 text-xs">News, analysis, facts</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-4">Community Games</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {['Gully Cricket', 'Carrom', 'Badminton', 'Padel', 'Footsal', 'Gaming'].map((game, idx) => (
                      <div key={idx} className="bg-blue-500/10 rounded-lg p-3 text-center border border-blue-500/30">
                        <div className="text-blue-400 font-bold text-sm">{game}</div>
                        <div className="text-gray-400 text-xs">Local tournaments</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Podcast & IP Content */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-purple-400 mb-6 flex items-center gap-2">
                <Mic size={24} />
                Podcast & IP Content
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-purple-500/10 rounded-lg p-5 border border-purple-500/30">
                  <div className="text-purple-400 font-bold text-lg mb-3">Podcasts</div>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• Marketing Case Studies</li>
                    <li>• Business Interviews</li>
                    <li>• AI-generated content (20 languages)</li>
                    <li>• Tech Reviews</li>
                  </ul>
                </div>
                <div className="bg-pink-500/10 rounded-lg p-5 border border-pink-500/30">
                  <div className="text-pink-400 font-bold text-lg mb-3">Music & Parody</div>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• Music video parodies</li>
                    <li>• Trending sound remixes</li>
                    <li>• Original jingles</li>
                    <li>• Cultural music content</li>
                  </ul>
                </div>
                <div className="bg-orange-500/10 rounded-lg p-5 border border-orange-500/30">
                  <div className="text-orange-400 font-bold text-lg mb-3">Meme & Viral</div>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• AI meme style content</li>
                    <li>• Viral explanation hooks</li>
                    <li>• Trending topic takes</li>
                    <li>• Food content & reviews</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Social Media Account Strategy */}
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-blue-500/30">
              <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-2">
                <Instagram size={24} />
                Multi-Account Social Strategy
              </h3>
              <div className="bg-white/10 rounded-lg p-4 mb-6">
                <div className="text-white font-bold mb-2">Strategy: One Account Per Niche</div>
                <p className="text-gray-400 text-sm">Create dedicated accounts for each content vertical to maximize engagement and reach specific audiences.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-white mb-3">Niche-Based Accounts</h4>
                  <div className="space-y-2">
                    {[
                      '@NuqtaFoodies - Food deals & reviews',
                      '@NuqtaSavers - Budget tips & savings',
                      '@NuqtaBeauty - Salon & spa deals',
                      '@NuqtaSports - Sports news & events',
                      '@NuqtaMemes - Viral meme content',
                      '@NuqtaDeals - Daily deals alerts',
                    ].map((account, idx) => (
                      <div key={idx} className="bg-white/5 rounded p-2 text-sm text-gray-300">{account}</div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-3">Language-Based Accounts</h4>
                  <div className="space-y-2">
                    {[
                      '@NuqtaHindi - Hindi content',
                      '@NuqtaUrdu - Urdu content',
                      '@NuqtaArabic - Arabic content',
                      '@NuqtaFilipino - Tagalog content',
                      '@NuqtaMalayalam - Malayalam content',
                      '@NuqtaTamil - Tamil content',
                    ].map((account, idx) => (
                      <div key={idx} className="bg-white/5 rounded p-2 text-sm text-gray-300">{account}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Types */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-cyan-400 mb-6">Content Production Matrix</h3>
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  { type: 'Photo', formats: 'Static posts, carousels', icon: Image },
                  { type: 'Video', formats: 'Reels, stories, long-form', icon: Video },
                  { type: 'Reviews', formats: 'Product & merchant reviews', icon: Star },
                  { type: 'UGC', formats: 'User-generated content', icon: Users },
                  { type: 'Hero or Trash', formats: 'Product verdict series', icon: Trophy },
                ].map((content, idx) => (
                  <div key={idx} className="bg-cyan-500/10 rounded-lg p-4 text-center border border-cyan-500/30">
                    <content.icon className="text-cyan-400 mx-auto mb-2" size={28} />
                    <div className="text-white font-bold">{content.type}</div>
                    <div className="text-gray-400 text-xs mt-1">{content.formats}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Groups Strategy */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-500/30">
              <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
                <MessageCircle size={24} />
                WhatsApp Community Groups
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { name: 'Dubai Deals', desc: 'Daily deal alerts', members: 'Target: 5K' },
                  { name: 'College Offers', desc: 'Student discounts', members: 'Target: 3K' },
                  { name: 'Night Life', desc: 'Club & bar deals', members: 'Target: 2K' },
                  { name: 'Girls Gang', desc: 'Beauty & salon deals', members: 'Target: 3K' },
                ].map((group, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-green-400 font-bold mb-1">{group.name}</div>
                    <div className="text-gray-400 text-sm">{group.desc}</div>
                    <div className="text-xs text-green-400/70 mt-2">{group.members}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Events & Markets Tab */}
        {activeTab === 'events' && (
          <div className="space-y-8">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-amber-500/20 rounded-2xl p-8 border border-[#c9a227]/30">
              <h2 className="text-3xl font-bold text-white mb-4">Events & Flea Markets</h2>
              <p className="text-xl text-gray-300">Offline activation through markets, events, and signature experiences</p>
            </div>

            {/* Flea Market Strategy */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-orange-400 mb-6 flex items-center gap-2">
                <Store size={24} />
                Nuqta Flea Market
              </h3>
              <div className="bg-orange-500/10 rounded-lg p-4 mb-6 border border-orange-500/30">
                <div className="text-orange-400 font-bold text-lg mb-2">Goal: Nuqta Adoption</div>
                <p className="text-gray-400">Create physical marketplaces where Nuqta is the primary payment method, driving app downloads and transactions.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-white mb-4">Locations</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { loc: 'Mall', icon: '🏬' },
                      { loc: 'Society', icon: '🏘️' },
                      { loc: 'Hall', icon: '🎪' },
                      { loc: 'College', icon: '🎓' },
                      { loc: 'Park', icon: '🌳' },
                      { loc: 'Beach', icon: '🏖️' },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-3 flex items-center gap-2">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-white">{item.loc}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-4">Rules & Structure</h4>
                  <div className="space-y-3">
                    <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/30">
                      <div className="text-green-400 font-bold">Nuqta Payment Only</div>
                      <div className="text-gray-400 text-sm">50% off + Cashback for Nuqta users</div>
                    </div>
                    <div className="bg-red-500/10 rounded-lg p-3 border border-red-500/30">
                      <div className="text-red-400 font-bold">Other Payment = No Discount</div>
                      <div className="text-gray-400 text-sm">Creates strong incentive to download</div>
                    </div>
                    <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/30">
                      <div className="text-blue-400 font-bold">Commission Model</div>
                      <div className="text-gray-400 text-sm">Merchants register with commission structure</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Signature Events */}
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-purple-400 mb-6 flex items-center gap-2">
                <Ticket size={24} />
                Signature Events (Monthly)
              </h3>
              <div className="bg-white/10 rounded-lg p-4 mb-6">
                <div className="text-white font-bold mb-2">Event Booking Strategy</div>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                    <div className="text-purple-400 font-bold">20% Off</div>
                    <div className="text-gray-400 text-sm">On ticket price</div>
                  </div>
                  <div className="bg-[#c9a227]/20 rounded-lg p-3 text-center">
                    <div className="text-[#c9a227] font-bold">30% Cashback</div>
                    <div className="text-gray-400 text-sm">In Nuqta Coin</div>
                  </div>
                  <div className="bg-pink-500/20 rounded-lg p-3 text-center">
                    <div className="text-pink-400 font-bold">10% Brand Coin</div>
                    <div className="text-gray-400 text-sm">Available at event</div>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { event: 'Music Night', icon: '🎵', desc: 'Live performances, DJ nights' },
                  { event: 'Sports Screening', icon: '⚽', desc: 'Match viewing parties' },
                  { event: 'Stand-up Comedy', icon: '🎤', desc: 'Local & international comics' },
                  { event: 'College Sports Fest', icon: '🏆', desc: 'University tournaments' },
                ].map((event, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-4xl mb-3">{event.icon}</div>
                    <div className="text-white font-bold mb-1">{event.event}</div>
                    <div className="text-gray-400 text-sm">{event.desc}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-[#c9a227]/10 rounded-lg p-4 border border-[#c9a227]/30">
                <div className="text-[#c9a227] font-bold text-center">Ticket Booking Only Via Nuqta App</div>
                <p className="text-gray-400 text-sm text-center mt-2">Creates exclusive access and drives app downloads</p>
              </div>
            </div>

            {/* Event Calendar */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-[#c9a227] mb-6 flex items-center gap-2">
                <Calendar size={24} />
                Annual Event Calendar
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { month: 'February', event: 'Launch Celebration Night', type: 'Music' },
                  { month: 'March', event: 'Ramadan Iftar Experience', type: 'Cultural' },
                  { month: 'April', event: 'IPL Screening Party', type: 'Sports' },
                  { month: 'May', event: 'Stand-up Comedy Night', type: 'Comedy' },
                  { month: 'June', event: 'Summer Beach Party', type: 'Music' },
                  { month: 'July', event: 'Gaming Tournament', type: 'Sports' },
                  { month: 'August', event: 'Back to School Fest', type: 'College' },
                  { month: 'September', event: 'Football Season Opener', type: 'Sports' },
                  { month: 'October', event: 'Diwali Celebration', type: 'Cultural' },
                  { month: 'November', event: 'Filipino Fiesta', type: 'Cultural' },
                  { month: 'December', event: 'Year End Gala', type: 'Music' },
                  { month: 'January', event: 'New Year Health Fest', type: 'Wellness' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4 flex items-center gap-4">
                    <div className="text-[#c9a227] font-bold w-24">{item.month}</div>
                    <div className="flex-1">
                      <div className="text-white font-medium">{item.event}</div>
                      <div className="text-gray-400 text-xs">{item.type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Competition Events */}
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-6 border border-green-500/30">
              <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
                <Trophy size={24} />
                Competition Events
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { comp: 'Singing Competition', prize: 'AED 5,000 Nuqta Coins', participants: '100+' },
                  { comp: 'Dance Challenge', prize: 'AED 3,000 Nuqta Coins', participants: '200+' },
                  { comp: 'Quiz Night', prize: 'AED 2,000 Nuqta Coins', participants: '50 teams' },
                  { comp: 'Gully Cricket', prize: 'AED 10,000 Nuqta Coins', participants: '16 teams' },
                  { comp: 'Gaming Tournament', prize: 'AED 5,000 Nuqta Coins', participants: '64 players' },
                  { comp: 'Food Challenge', prize: 'AED 1,000 Nuqta Coins', participants: '20 contestants' },
                ].map((comp, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4">
                    <div className="text-white font-bold mb-2">{comp.comp}</div>
                    <div className="flex items-center justify-between">
                      <div className="text-[#c9a227] text-sm">{comp.prize}</div>
                      <div className="text-gray-400 text-xs">{comp.participants}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* AI Content Tab */}
        {activeTab === 'aicontent' && (
          <div className="space-y-8">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-6 border border-purple-500/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <Bot className="text-purple-400" size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">AI-Generated Podcast Content</h2>
                  <p className="text-gray-400">Multi-language, niche-specific podcast-style content to promote Nuqta</p>
                </div>
              </div>
              <div className="grid md:grid-cols-4 gap-4 mt-6">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-purple-400">20+</div>
                  <div className="text-gray-400 text-sm">Languages</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-400">50+</div>
                  <div className="text-gray-400 text-sm">Niche Topics</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green-400">500+</div>
                  <div className="text-gray-400 text-sm">Episodes/Month</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-[#c9a227]">24/7</div>
                  <div className="text-gray-400 text-sm">Content Generation</div>
                </div>
              </div>
            </div>

            {/* AI Content Strategy */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-[#c9a227] mb-6 flex items-center gap-2">
                <Lightbulb size={24} />
                AI Podcast Content Strategy
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/30">
                    <div className="text-purple-400 font-bold mb-2">Direct Promotion Content</div>
                    <ul className="text-gray-400 text-sm space-y-2">
                      <li>• "How Nuqta saves UAE families AED 500/month"</li>
                      <li>• "Nuqta vs competitors - why we're different"</li>
                      <li>• "Meet the Nuqta team - founders story"</li>
                      <li>• "Step-by-step: Getting 30% cashback at restaurants"</li>
                      <li>• "Why 1000+ merchants chose Nuqta"</li>
                    </ul>
                  </div>
                  <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
                    <div className="text-blue-400 font-bold mb-2">Indirect Promotion Content</div>
                    <ul className="text-gray-400 text-sm space-y-2">
                      <li>• "Best ways to save money in Dubai 2026"</li>
                      <li>• "Hidden gems: cheap eats in UAE"</li>
                      <li>• "Smart shopping tips for expats"</li>
                      <li>• "How to stretch your salary in UAE"</li>
                      <li>• "Monthly budget planning for UAE residents"</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                    <div className="text-green-400 font-bold mb-2">Educational Content</div>
                    <ul className="text-gray-400 text-sm space-y-2">
                      <li>• "Understanding cashback apps in UAE"</li>
                      <li>• "Loyalty programs decoded"</li>
                      <li>• "Smart dining: maximize restaurant rewards"</li>
                      <li>• "Salon savings: beauty on a budget"</li>
                      <li>• "Grocery hacks for UAE families"</li>
                    </ul>
                  </div>
                  <div className="bg-orange-500/10 rounded-lg p-4 border border-orange-500/30">
                    <div className="text-orange-400 font-bold mb-2">Community Stories</div>
                    <ul className="text-gray-400 text-sm space-y-2">
                      <li>• "Indian expat saves AED 2000/month with Nuqta"</li>
                      <li>• "Filipino family's smart shopping journey"</li>
                      <li>• "Pakistani community's favorite Nuqta deals"</li>
                      <li>• "Arab family traditions and modern savings"</li>
                      <li>• "Student life: surviving Dubai on budget"</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Language-Specific Podcasts */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-[#c9a227] mb-6 flex items-center gap-2">
                <Languages size={24} />
                Multi-Language Podcast Channels
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { lang: 'Hindi', flag: '🇮🇳', channel: 'Nuqta Hindi', topics: 'Bollywood, cricket, desi deals', audience: '1.5M Indians in UAE' },
                  { lang: 'Malayalam', flag: '🇮🇳', channel: 'Nuqta Malayalam', topics: 'Kerala community, gold, restaurants', audience: '800K Malayalis' },
                  { lang: 'Tamil', flag: '🇮🇳', channel: 'Nuqta Tamil', topics: 'South Indian food, culture, savings', audience: '500K Tamils' },
                  { lang: 'Telugu', flag: '🇮🇳', channel: 'Nuqta Telugu', topics: 'Tech community, IT savings tips', audience: '400K Telugu speakers' },
                  { lang: 'Tagalog', flag: '🇵🇭', channel: 'Nuqta Filipino', topics: 'OFW savings, remittance, kabayan deals', audience: '700K Filipinos' },
                  { lang: 'Urdu', flag: '🇵🇰', channel: 'Nuqta Urdu', topics: 'Halal deals, family savings, Pakistani food', audience: '1.2M Pakistanis' },
                  { lang: 'Arabic', flag: '🇦🇪', channel: 'Nuqta Arabic', topics: 'Local culture, Emirati deals, Arabic lifestyle', audience: '1M Arabs' },
                  { lang: 'Bengali', flag: '🇧🇩', channel: 'Nuqta Bangla', topics: 'Bangladeshi community, worker savings', audience: '400K Bangladeshis' },
                  { lang: 'Nepali', flag: '🇳🇵', channel: 'Nuqta Nepali', topics: 'Worker community, budget tips', audience: '300K Nepalis' },
                  { lang: 'Sinhala', flag: '🇱🇰', channel: 'Nuqta Sinhala', topics: 'Sri Lankan deals, community events', audience: '200K Sri Lankans' },
                  { lang: 'English', flag: '🇬🇧', channel: 'Nuqta Global', topics: 'Western expats, professionals, lifestyle', audience: '500K Western expats' },
                  { lang: 'Russian', flag: '🇷🇺', channel: 'Nuqta Russian', topics: 'CIS community, luxury deals', audience: '100K Russians' },
                  { lang: 'Chinese', flag: '🇨🇳', channel: 'Nuqta Chinese', topics: 'Business community, trading tips', audience: '200K Chinese' },
                  { lang: 'French', flag: '🇫🇷', channel: 'Nuqta French', topics: 'African French speakers, lifestyle', audience: '150K French speakers' },
                  { lang: 'Persian', flag: '🇮🇷', channel: 'Nuqta Farsi', topics: 'Iranian community, gold, restaurants', audience: '400K Iranians' },
                  { lang: 'Turkish', flag: '🇹🇷', channel: 'Nuqta Turkish', topics: 'Turkish business, food, culture', audience: '50K Turks' },
                ].map((lang, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{lang.flag}</span>
                      <div className="text-white font-bold">{lang.lang}</div>
                    </div>
                    <div className="text-[#c9a227] text-sm font-medium mb-1">{lang.channel}</div>
                    <div className="text-gray-400 text-xs mb-2">{lang.topics}</div>
                    <div className="text-gray-500 text-xs">{lang.audience}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Niche Podcast Categories */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-[#c9a227] mb-6 flex items-center gap-2">
                <Headphones size={24} />
                Niche Podcast Categories
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    category: 'Food & Dining',
                    icon: '🍽️',
                    color: 'red',
                    topics: [
                      'Best cheap eats in Dubai',
                      'Restaurant reviews with savings tips',
                      'Hidden food gems under AED 30',
                      'Cuisine guides by nationality',
                      'Meal prep savings vs eating out'
                    ]
                  },
                  {
                    category: 'Beauty & Wellness',
                    icon: '💅',
                    color: 'pink',
                    topics: [
                      'Salon savings secrets',
                      'Spa deals in UAE',
                      'Beauty on a budget',
                      'Gym membership hacks',
                      'Self-care without overspending'
                    ]
                  },
                  {
                    category: 'Shopping & Retail',
                    icon: '🛍️',
                    color: 'blue',
                    topics: [
                      'Mall shopping savings',
                      'Best time to shop in UAE',
                      'Electronics deals decoded',
                      'Seasonal sale strategies',
                      'Brand vs quality savings'
                    ]
                  },
                  {
                    category: 'Family & Kids',
                    icon: '👨‍👩‍👧‍👦',
                    color: 'green',
                    topics: [
                      'Family outing savings',
                      'Kids activities on budget',
                      'School supplies deals',
                      'Family dining specials',
                      'Entertainment for less'
                    ]
                  },
                  {
                    category: 'Students & Youth',
                    icon: '🎓',
                    color: 'yellow',
                    topics: [
                      'Student budget survival guide',
                      'University area deals',
                      'Part-time job + savings',
                      'Textbook and supplies savings',
                      'Social life on a budget'
                    ]
                  },
                  {
                    category: 'Professional Life',
                    icon: '💼',
                    color: 'purple',
                    topics: [
                      'Office lunch savings',
                      'Business casual on budget',
                      'Networking without overspending',
                      'Work commute savings',
                      'Professional development deals'
                    ]
                  },
                  {
                    category: 'Healthcare',
                    icon: '🏥',
                    color: 'teal',
                    topics: [
                      'Medical savings tips',
                      'Pharmacy deals in UAE',
                      'Insurance optimization',
                      'Wellness checkup savings',
                      'Mental health resources'
                    ]
                  },
                  {
                    category: 'Entertainment',
                    icon: '🎬',
                    color: 'orange',
                    topics: [
                      'Movie deals and offers',
                      'Concert and event savings',
                      'Weekend activities on budget',
                      'Theme park hacks',
                      'Staycation deals'
                    ]
                  },
                  {
                    category: 'Travel & Transport',
                    icon: '✈️',
                    color: 'cyan',
                    topics: [
                      'Road trip savings UAE',
                      'Public transport hacks',
                      'Fuel savings tips',
                      'Weekend getaway deals',
                      'Airport and travel savings'
                    ]
                  },
                ].map((niche, idx) => (
                  <div key={idx} className={`bg-${niche.color}-500/10 rounded-lg p-4 border border-${niche.color}-500/20`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{niche.icon}</span>
                      <div className="text-white font-bold">{niche.category}</div>
                    </div>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {niche.topics.map((topic, topicIdx) => (
                        <li key={topicIdx} className="flex items-start gap-2">
                          <span className="text-[#c9a227]">•</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Production Pipeline */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-[#c9a227] mb-6 flex items-center gap-2">
                <RefreshCw size={24} />
                AI Content Production Pipeline
              </h3>
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  { step: 1, title: 'Topic Selection', desc: 'AI analyzes trending topics in each community', icon: Lightbulb },
                  { step: 2, title: 'Script Generation', desc: 'ChatGPT/Claude creates podcast scripts', icon: FileText },
                  { step: 3, title: 'Voice Synthesis', desc: 'ElevenLabs generates native voices', icon: Volume2 },
                  { step: 4, title: 'Audio Production', desc: 'AI adds music, effects, and mastering', icon: Headphones },
                  { step: 5, title: 'Distribution', desc: 'Auto-publish to all podcast platforms', icon: Share2 },
                ].map((step) => (
                  <div key={step.step} className="bg-white/5 rounded-lg p-4 text-center relative">
                    <div className="w-10 h-10 rounded-full bg-[#c9a227]/20 flex items-center justify-center mx-auto mb-3">
                      <step.icon className="text-[#c9a227]" size={20} />
                    </div>
                    <div className="text-[#c9a227] font-bold mb-1">Step {step.step}</div>
                    <div className="text-white font-medium text-sm mb-1">{step.title}</div>
                    <div className="text-gray-400 text-xs">{step.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Episode Formats */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-[#c9a227] mb-6 flex items-center gap-2">
                <Mic size={24} />
                Podcast Episode Formats
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    format: 'Quick Tips',
                    duration: '3-5 min',
                    style: 'Single host, rapid-fire tips',
                    example: '"5 ways to save at restaurants today"',
                    frequency: 'Daily'
                  },
                  {
                    format: 'Deep Dives',
                    duration: '15-20 min',
                    style: 'Detailed exploration of one topic',
                    example: '"Complete guide to grocery savings in UAE"',
                    frequency: '2x/week'
                  },
                  {
                    format: 'Conversations',
                    duration: '25-30 min',
                    style: 'Two AI hosts discussing topics',
                    example: '"Our favorite deals this month"',
                    frequency: 'Weekly'
                  },
                  {
                    format: 'Community Stories',
                    duration: '10-15 min',
                    style: 'Dramatized user success stories',
                    example: '"How Priya saved AED 3000 for her wedding"',
                    frequency: '2x/week'
                  },
                  {
                    format: 'News & Updates',
                    duration: '5-8 min',
                    style: 'Latest deals, new merchants, app updates',
                    example: '"This week in Nuqta: 15 new restaurants"',
                    frequency: 'Daily'
                  },
                  {
                    format: 'Expert Advice',
                    duration: '20-25 min',
                    style: 'Financial tips and money management',
                    example: '"Budgeting 101 for UAE expats"',
                    frequency: 'Weekly'
                  },
                  {
                    format: 'Culture Corner',
                    duration: '15-20 min',
                    style: 'Cultural events, festivals, traditions',
                    example: '"Celebrating Diwali on a budget in Dubai"',
                    frequency: 'Weekly'
                  },
                  {
                    format: 'Q&A Sessions',
                    duration: '10-15 min',
                    style: 'Answering common user questions',
                    example: '"You asked: How does Nuqta Coin work?"',
                    frequency: '3x/week'
                  },
                ].map((format, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4">
                    <div className="text-white font-bold mb-2">{format.format}</div>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock size={14} className="text-[#c9a227]" />
                      <span className="text-gray-400 text-sm">{format.duration}</span>
                    </div>
                    <div className="text-gray-400 text-sm mb-2">{format.style}</div>
                    <div className="text-[#c9a227] text-xs italic mb-2">"{format.example}"</div>
                    <div className="bg-purple-500/20 text-purple-400 text-xs px-2 py-1 rounded inline-block">{format.frequency}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Distribution Platforms */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-[#c9a227] mb-6 flex items-center gap-2">
                <Globe size={24} />
                Distribution Platforms
              </h3>
              <div className="grid md:grid-cols-6 gap-4">
                {[
                  { platform: 'Spotify', icon: '🎵', priority: 'Primary', reach: 'Global' },
                  { platform: 'Apple Podcasts', icon: '🎧', priority: 'Primary', reach: 'Global' },
                  { platform: 'YouTube', icon: '📺', priority: 'Primary', reach: 'Global' },
                  { platform: 'Google Podcasts', icon: '🔊', priority: 'Primary', reach: 'Global' },
                  { platform: 'Amazon Music', icon: '🎶', priority: 'Secondary', reach: 'Global' },
                  { platform: 'SoundCloud', icon: '☁️', priority: 'Secondary', reach: 'Creators' },
                  { platform: 'Gaana', icon: '🇮🇳', priority: 'Regional', reach: 'India' },
                  { platform: 'JioSaavn', icon: '🇮🇳', priority: 'Regional', reach: 'India' },
                  { platform: 'Anghami', icon: '🇦🇪', priority: 'Regional', reach: 'MENA' },
                  { platform: 'TikTok', icon: '📱', priority: 'Clips', reach: 'Youth' },
                  { platform: 'Instagram Reels', icon: '📸', priority: 'Clips', reach: 'All' },
                  { platform: 'WhatsApp Status', icon: '💬', priority: 'Viral', reach: 'Direct' },
                ].map((platform, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-3 text-center">
                    <div className="text-2xl mb-2">{platform.icon}</div>
                    <div className="text-white font-medium text-sm">{platform.platform}</div>
                    <div className="text-[#c9a227] text-xs">{platform.priority}</div>
                    <div className="text-gray-500 text-xs">{platform.reach}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Scripts */}
            <div className="bg-gradient-to-r from-[#c9a227]/10 to-purple-500/10 rounded-xl p-6 border border-[#c9a227]/30">
              <h3 className="text-xl font-bold text-[#c9a227] mb-6 flex items-center gap-2">
                <FileText size={24} />
                Sample AI Podcast Scripts
              </h3>
              <div className="space-y-6">
                {/* Hindi Script Example */}
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">🇮🇳</span>
                    <div className="text-white font-bold">Hindi Episode: "Dubai mein paisa kaise bachaye"</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4 text-sm">
                    <p className="text-gray-300 italic mb-4">
                      "Namaste doston! Aaj hum baat karenge Dubai mein paise bachane ke 5 secret tips ke baare mein.
                      Kya aap jaante hain ki ek average Indian family Dubai mein mahine ke 2000-3000 dirhams bcha sakti hai sirf smart shopping se?
                      <br/><br/>
                      Tip number 1: Cashback apps ka use karein. Nuqta jaisi apps aapko restaurants mein 30% tak cashback deti hain.
                      Sochiye - agar aap hafte mein 200 dirhams khaane pe kharchte hain, toh aap 60 dirhams bcha sakte hain!
                      <br/><br/>
                      [Continues with savings tips, naturally mentioning Nuqta benefits...]"
                    </p>
                    <div className="text-[#c9a227] text-xs">Duration: 8 minutes | Format: Quick Tips | Nuqta Mentions: 4</div>
                  </div>
                </div>

                {/* Tagalog Script Example */}
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">🇵🇭</span>
                    <div className="text-white font-bold">Tagalog Episode: "Paano mag-ipon sa Dubai bilang OFW"</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4 text-sm">
                    <p className="text-gray-300 italic mb-4">
                      "Magandang araw mga kabayan! Alam niyo ba na maraming OFW ang nakaka-save ng hanggang 1000 dirhams kada buwan gamit ang mga simpleng tips na ito?
                      <br/><br/>
                      Una, gamitin ang cashback apps para sa lahat ng binibili mo. Halimbawa, kung kumakain ka sa restaurant at gumamit ng Nuqta app, makakakuha ka ng 30% cashback sa bill mo!
                      <br/><br/>
                      Pangalawa, hintayin ang sale seasons. Sa Dubai, ang pinakamagandang oras para mamili ay tuwing DSF at DSS...
                      <br/><br/>
                      [Continues with practical OFW savings advice, naturally integrating Nuqta]"
                    </p>
                    <div className="text-[#c9a227] text-xs">Duration: 12 minutes | Format: Deep Dive | Nuqta Mentions: 5</div>
                  </div>
                </div>

                {/* Arabic Script Example */}
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">🇦🇪</span>
                    <div className="text-white font-bold">Arabic Episode: "كيف توفر المال في الإمارات"</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4 text-sm">
                    <p className="text-gray-300 italic mb-4">
                      "مرحباً بكم! اليوم سنتحدث عن أفضل طرق التوفير في الإمارات. هل تعلم أن العائلة الإماراتية يمكنها توفير آلاف الدراهم سنوياً؟
                      <br/><br/>
                      أولاً، استخدم تطبيقات الكاشباك مثل نقطة. عند الشراء من المطاعم والمحلات، تحصل على 30% كاشباك!
                      <br/><br/>
                      [Continues with UAE-specific savings tips...]"
                    </p>
                    <div className="text-[#c9a227] text-xs">Duration: 10 minutes | Format: Tips | Nuqta Mentions: 3</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Calendar */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-[#c9a227] mb-6 flex items-center gap-2">
                <Calendar size={24} />
                Weekly AI Podcast Production Schedule
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-gray-400">Day</th>
                      <th className="text-left py-3 px-4 text-gray-400">Hindi</th>
                      <th className="text-left py-3 px-4 text-gray-400">Tagalog</th>
                      <th className="text-left py-3 px-4 text-gray-400">Arabic</th>
                      <th className="text-left py-3 px-4 text-gray-400">Urdu</th>
                      <th className="text-left py-3 px-4 text-gray-400">English</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { day: 'Monday', hindi: 'Quick Tips', tagalog: 'OFW Savings', arabic: 'عروض الأسبوع', urdu: 'Budget Tips', english: 'Deal Alerts' },
                      { day: 'Tuesday', hindi: 'Restaurant Guide', tagalog: 'Kabayan Stories', arabic: 'مطاعم جديدة', urdu: 'Food Deals', english: 'Dining Out' },
                      { day: 'Wednesday', hindi: 'Deep Dive', tagalog: 'Deep Dive', arabic: 'تعمق', urdu: 'Deep Dive', english: 'Deep Dive' },
                      { day: 'Thursday', hindi: 'User Stories', tagalog: 'User Stories', arabic: 'قصص المستخدمين', urdu: 'User Stories', english: 'User Stories' },
                      { day: 'Friday', hindi: 'Weekend Deals', tagalog: 'Weekend Plans', arabic: 'عروض نهاية الأسبوع', urdu: 'Weekend Deals', english: 'Weekend Guide' },
                      { day: 'Saturday', hindi: 'Shopping Tips', tagalog: 'Shopping Tips', arabic: 'نصائح التسوق', urdu: 'Shopping Guide', english: 'Shopping Tips' },
                      { day: 'Sunday', hindi: 'Week Recap', tagalog: 'Week Recap', arabic: 'ملخص الأسبوع', urdu: 'Week Recap', english: 'Week Recap' },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-white/5">
                        <td className="py-3 px-4 text-white font-medium">{row.day}</td>
                        <td className="py-3 px-4 text-gray-400">{row.hindi}</td>
                        <td className="py-3 px-4 text-gray-400">{row.tagalog}</td>
                        <td className="py-3 px-4 text-gray-400">{row.arabic}</td>
                        <td className="py-3 px-4 text-gray-400">{row.urdu}</td>
                        <td className="py-3 px-4 text-gray-400">{row.english}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-center text-gray-400 text-sm">
                Total: 35 episodes per week × 20 languages = <span className="text-[#c9a227] font-bold">700 podcast episodes weekly</span>
              </div>
            </div>

            {/* Tools & Technology */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-[#c9a227] mb-6 flex items-center gap-2">
                <Settings size={24} />
                AI Tools & Technology Stack
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { tool: 'ChatGPT-4/Claude', use: 'Script generation', cost: 'API usage' },
                  { tool: 'ElevenLabs', use: 'Voice synthesis (20+ languages)', cost: '$99/mo' },
                  { tool: 'Descript', use: 'Audio editing & production', cost: '$24/mo' },
                  { tool: 'Podbean/Anchor', use: 'Podcast hosting & distribution', cost: '$9/mo' },
                  { tool: 'Canva Pro', use: 'Podcast artwork & thumbnails', cost: '$12/mo' },
                  { tool: 'Zapier', use: 'Automation & scheduling', cost: '$20/mo' },
                  { tool: 'Google Cloud TTS', use: 'Backup voice synthesis', cost: 'Pay per use' },
                  { tool: 'Whisper API', use: 'Transcription for SEO', cost: 'Pay per use' },
                ].map((tool, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4">
                    <div className="text-white font-bold">{tool.tool}</div>
                    <div className="text-gray-400 text-sm">{tool.use}</div>
                    <div className="text-[#c9a227] text-xs mt-2">{tool.cost}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-[#c9a227]/10 rounded-lg p-4 border border-[#c9a227]/30">
                <div className="text-center">
                  <div className="text-[#c9a227] font-bold text-lg">Estimated Monthly Cost: AED 800-1200</div>
                  <div className="text-gray-400 text-sm">For 500+ podcast episodes across 20 languages</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-purple-500/20 to-[#c9a227]/20 rounded-xl p-6 border border-purple-500/30 text-center">
              <Bot className="text-purple-400 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-white mb-2">Ready to Launch AI Podcast Network?</h3>
              <p className="text-gray-400 mb-4">Reach millions of UAE residents in their native language with automated, scalable content</p>
              <div className="flex items-center justify-center gap-4">
                <div className="bg-purple-500/20 text-purple-400 px-4 py-2 rounded-lg text-sm">20 Languages</div>
                <div className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg text-sm">500+ Episodes/Month</div>
                <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-lg text-sm">100% Automated</div>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 mt-12">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>Marketing Plan | Nuqta 2026</p>
        </div>
      </footer>
    </div>
  );
}
