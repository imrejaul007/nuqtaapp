'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
  Briefcase
} from 'lucide-react';

export default function MarketingPlanPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const [activeContentPillar, setActiveContentPillar] = useState('all');
  const [activeMonth, setActiveMonth] = useState('march');

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

              {/* First Transaction Offer */}
              <div className="bg-gradient-to-r from-[#c9a227]/20 to-amber-500/20 rounded-lg p-4 border border-[#c9a227]/30">
                <div className="flex items-center gap-3 mb-3">
                  <Gift className="text-[#c9a227]" size={20} />
                  <h5 className="font-bold text-[#c9a227]">First Transaction Bonus Campaign</h5>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-white mb-2">
                      "Shop & Earn AED 50 on Your First Transaction!"
                    </div>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• New user downloads app</li>
                      <li>• Makes first purchase at any partner</li>
                      <li>• Gets AED 50 bonus coins instantly</li>
                      <li>• Can use on next purchase</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-sm text-gray-400 mb-2">Ad Copy Variations:</div>
                    <div className="space-y-2">
                      {[
                        '🎁 Your first purchase = AED 50 FREE!',
                        '💰 Shop once, earn AED 50 instantly',
                        '🚀 Start with AED 50 on us!',
                        '✨ First transaction bonus: AED 50 coins',
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
                  <div className="text-gray-400 max-w-2xl mx-auto">
                    Discounts train customers to wait for sales. Branded coins bring them back
                    to YOUR store to redeem. That's the difference between a one-time sale and a loyal customer.
                  </div>
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

        {/* Content Series Tab - 4 Social Media Series */}
        {activeTab === 'series' && (
          <div className="space-y-8">
            {/* Series Overview */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-purple-500/20 rounded-xl p-6 border border-[#c9a227]/30">
              <h3 className="text-2xl font-bold text-[#c9a227] mb-4">4 Content Series Strategy</h3>
              <p className="text-gray-300 mb-6">
                Four distinct social media series designed to build brand awareness, showcase app features,
                discover local deals, and create viral engagement through interactive challenges.
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { name: 'How Much You Save', freq: '3x/week', format: 'Street Interview' },
                  { name: 'Did You Know?', freq: '2x/week', format: 'Podcast Style' },
                  { name: 'Nuqta Discovers', freq: '2x/week', format: 'Discovery Vlog' },
                  { name: 'Deal Finder Challenge', freq: '1x/week', format: 'Treasure Hunt' },
                ].map((series, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-[#c9a227] font-bold mb-1">{series.name}</div>
                    <div className="text-sm text-gray-400">{series.freq}</div>
                    <div className="text-xs text-gray-500">{series.format}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Series 1: How Much You Save */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <DollarSign className="text-green-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-400">Series 1: How Much You Save</h3>
                  <p className="text-gray-400">Family Savings Series | Street Interview Format | 3x per week</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-white mb-3">Episode Ideas (10)</h4>
                  <div className="space-y-2">
                    {[
                      'Ep 1: Family of 4 - Monthly Grocery Savings',
                      'Ep 2: Coffee Lovers - Daily Cafe Spending',
                      'Ep 3: Students - University Area Deals',
                      'Ep 4: Expat Family - School & Kids Activities',
                      'Ep 5: Young Professionals - Weekend Dining',
                      'Ep 6: Fitness Enthusiasts - Gym & Health Food',
                      'Ep 7: Foodies - Restaurant Week Challenge',
                      'Ep 8: Beauty & Wellness - Salon Savings',
                      'Ep 9: Entertainment - Movies & Activities',
                      'Ep 10: Monthly Recap - Best Savings Stories',
                    ].map((ep, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 p-2 rounded">
                        <Check size={14} className="text-green-400 flex-shrink-0" />
                        {ep}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-white mb-2">Production Requirements</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Mobile phone with good camera</li>
                      <li>• Wireless microphone for street audio</li>
                      <li>• Nuqta branded backdrop/banner</li>
                      <li>• Release forms for interviewees</li>
                      <li>• Location: Malls, supermarkets, cafes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">KPIs</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-green-500/10 p-2 rounded">
                        <div className="text-green-400 font-bold">10K+</div>
                        <div className="text-gray-400">Views/episode</div>
                      </div>
                      <div className="bg-green-500/10 p-2 rounded">
                        <div className="text-green-400 font-bold">5%+</div>
                        <div className="text-gray-400">Engagement rate</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Hashtags</h4>
                    <div className="flex flex-wrap gap-1">
                      {['#NuqtaSavings', '#UAESavings', '#FamilyBudget', '#SaveWithNuqta', '#DubaiDeals'].map((tag, idx) => (
                        <span key={idx} className="text-xs bg-[#c9a227]/20 text-[#c9a227] px-2 py-1 rounded">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Series 2: Did You Know? */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Mic className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-400">Series 2: Did You Know?</h3>
                  <p className="text-gray-400">App Features Podcast | Talk Show Style | 2x per week</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-white mb-3">Episode Ideas (10)</h4>
                  <div className="space-y-2">
                    {[
                      'Ep 1: Track All Your Cashback in One Place',
                      'Ep 2: Find Merchants Near You with Map View',
                      'Ep 3: Nuqta Coins - How They Work',
                      'Ep 4: Family Sharing - Split Rewards',
                      'Ep 5: QR Scan - Instant Cashback',
                      'Ep 6: Hidden Deals Feature',
                      'Ep 7: Savings Goals & Targets',
                      'Ep 8: Refer Friends - Earn Together',
                      'Ep 9: Notification Settings for Best Deals',
                      'Ep 10: Pro Tips from Power Users',
                    ].map((ep, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 p-2 rounded">
                        <Check size={14} className="text-blue-400 flex-shrink-0" />
                        {ep}
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

            {/* Community Building Strategy */}
            <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl p-6 border border-pink-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                  <Users className="text-pink-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-pink-400">Community Building Strategy</h3>
                  <p className="text-gray-400">Country-wise, Culture-wise, Profession-wise Communities</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {/* Country-wise Communities */}
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <Globe size={18} className="text-pink-400" />
                    Country-wise Groups
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {[
                      { name: 'Nuqta Indian Community', members: '5K target' },
                      { name: 'Nuqta Filipino Savers', members: '3K target' },
                      { name: 'Nuqta Pakistani Hub', members: '3K target' },
                      { name: 'Nuqta Arab Community', members: '4K target' },
                      { name: 'Nuqta Russian Expats', members: '2K target' },
                      { name: 'Nuqta African Network', members: '2K target' },
                    ].map((group, idx) => (
                      <li key={idx} className="flex justify-between items-center text-gray-300 bg-white/5 p-2 rounded">
                        <span>{group.name}</span>
                        <span className="text-xs text-pink-400">{group.members}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Profession-wise Communities */}
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <Briefcase size={18} className="text-pink-400" />
                    Profession-wise Groups
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {[
                      { name: 'Nuqta Healthcare Workers', members: '2K target' },
                      { name: 'Nuqta Teachers & Educators', members: '2K target' },
                      { name: 'Nuqta IT Professionals', members: '3K target' },
                      { name: 'Nuqta Hospitality Staff', members: '3K target' },
                      { name: 'Nuqta Students UAE', members: '5K target' },
                      { name: 'Nuqta Freelancers', members: '2K target' },
                    ].map((group, idx) => (
                      <li key={idx} className="flex justify-between items-center text-gray-300 bg-white/5 p-2 rounded">
                        <span>{group.name}</span>
                        <span className="text-xs text-pink-400">{group.members}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Interest-based Communities */}
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <Heart size={18} className="text-pink-400" />
                    Interest-based Groups
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {[
                      { name: 'Nuqta Foodies Dubai', members: '5K target' },
                      { name: 'Nuqta Fitness Savers', members: '2K target' },
                      { name: 'Nuqta Family Budgeters', members: '3K target' },
                      { name: 'Nuqta Beauty & Wellness', members: '2K target' },
                      { name: 'Nuqta Weekend Explorers', members: '3K target' },
                      { name: 'Nuqta Smart Shoppers', members: '4K target' },
                    ].map((group, idx) => (
                      <li key={idx} className="flex justify-between items-center text-gray-300 bg-white/5 p-2 rounded">
                        <span>{group.name}</span>
                        <span className="text-xs text-pink-400">{group.members}</span>
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
