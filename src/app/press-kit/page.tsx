'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Download,
  FileText,
  Image,
  Palette,
  Users,
  Newspaper,
  Building2,
  Award,
  Globe,
  Calendar,
  TrendingUp,
  CheckCircle,
  Copy,
  ExternalLink,
  Star,
  Target,
  Rocket,
  Mail,
  Phone
} from 'lucide-react';

export default function PressKitPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'brand', label: 'Brand Assets', icon: Palette },
    { id: 'releases', label: 'Press Releases', icon: Newspaper },
    { id: 'team', label: 'Executive Bios', icon: Users },
    { id: 'facts', label: 'Fact Sheet', icon: Building2 },
  ];

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <header className="bg-[#0a1628]/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-gray-400 hover:text-[#c9a227] transition-colors"
              >
                <ArrowLeft size={20} />
                <span>Back</span>
              </Link>
              <div className="w-px h-6 bg-white/20" />
              <h1 className="text-xl font-bold text-[#c9a227]">Press Kit</h1>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-400">Media Resources</span>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#c9a227]/10 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#c9a227]/20 px-4 py-2 rounded-full mb-6">
            <Newspaper className="text-[#c9a227]" size={18} />
            <span className="text-[#c9a227] font-medium">Media Resources</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nuqta <span className="text-[#c9a227]">Press Kit</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Everything journalists, bloggers, and media professionals need to cover Nuqta -
            the UAE's first social rewards platform transforming how people earn and share.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 bg-[#c9a227] text-[#0a1628] px-6 py-3 rounded-lg font-semibold hover:bg-[#b08d20] transition-colors">
              <Download size={20} />
              Download Full Press Kit (ZIP)
            </button>
            <a href="mailto:press@nuqta.ae" className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors">
              <Mail size={20} />
              Media Inquiries
            </a>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="border-b border-white/10 sticky top-[73px] bg-[#0a1628]/95 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-2 py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#c9a227] text-[#0a1628]'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { label: 'Launch Date', value: 'Feb 28, 2026', icon: Calendar },
                { label: 'Target MAU', value: '5,000+', icon: Users },
                { label: 'Merchant Partners', value: '100+', icon: Building2 },
                { label: 'Valuation Cap', value: '$5M', icon: TrendingUp },
              ].map((stat, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <stat.icon className="text-[#c9a227] mx-auto mb-3" size={32} />
                  <div className="text-2xl font-bold text-[#c9a227] mb-1">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* About Nuqta */}
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-[#c9a227] mb-6">About Nuqta</h3>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg">
                  <strong className="text-white">Nuqta</strong> (نقطة, meaning "point" in Arabic) is the UAE's first social rewards platform
                  that transforms everyday purchases into shareable experiences. Unlike traditional loyalty programs where points
                  are locked to individual accounts, Nuqta allows users to earn, gift, and receive reward coins from friends and family.
                </p>
                <p>
                  Founded in 2025 and launching February 2026, Nuqta partners with 100+ UAE merchants across dining,
                  entertainment, wellness, and events. The platform bridges the gap between individual rewards and
                  social gifting, creating a new category in the $200B+ global loyalty market.
                </p>
                <p>
                  Nuqta operates on a commission-based model with three merchant engines: High-Margin (15-20% commission),
                  Low-Margin (5-8% commission), and Events (50% coin sponsorship). This sustainable revenue model aligns
                  merchant success with platform growth.
                </p>
              </div>
            </div>

            {/* Key Differentiators */}
            <div>
              <h3 className="text-2xl font-bold text-[#c9a227] mb-6">Key Differentiators</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Star,
                    title: 'Social-First Rewards',
                    description: 'Gift coins to friends and family, split bills with reward sharing, celebrate together with group rewards.',
                  },
                  {
                    icon: Target,
                    title: 'Zero-CAC Model',
                    description: 'Merchants fund rewards through commissions. Users join organically through social gifting mechanics.',
                  },
                  {
                    icon: Rocket,
                    title: 'UAE-Focused',
                    description: 'Built specifically for the UAE market with local merchant partnerships and Arabic-first design.',
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <item.icon className="text-[#c9a227] mb-4" size={32} />
                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Media Contact */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-transparent rounded-xl p-8 border border-[#c9a227]/30">
              <h3 className="text-2xl font-bold text-[#c9a227] mb-4">Media Contact</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-300 mb-4">For press inquiries, interviews, and media requests:</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="text-[#c9a227]" size={20} />
                      <a href="mailto:press@nuqta.ae" className="text-white hover:text-[#c9a227]">press@nuqta.ae</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="text-[#c9a227]" size={20} />
                      <span className="text-white">+971 XX XXX XXXX</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="text-[#c9a227]" size={20} />
                      <a href="https://nuqta.ae" className="text-white hover:text-[#c9a227]">nuqta.ae</a>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-gray-300 mb-4">Response time:</p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-500" />
                      Breaking news: Within 2 hours
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-500" />
                      Feature stories: Within 24 hours
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-500" />
                      Interview requests: Within 48 hours
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Brand Assets Tab */}
        {activeTab === 'brand' && (
          <div className="space-y-12">
            {/* Logo Downloads */}
            <div>
              <h3 className="text-2xl font-bold text-[#c9a227] mb-6">Logo Downloads</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: 'Primary Logo (Gold)', bg: 'bg-[#0a1628]', preview: 'NUQTA' },
                  { name: 'Inverse Logo (Dark)', bg: 'bg-white', preview: 'NUQTA', textColor: 'text-[#0a1628]' },
                  { name: 'Monochrome (White)', bg: 'bg-gray-600', preview: 'NUQTA' },
                ].map((logo, index) => (
                  <div key={index} className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                    <div className={`${logo.bg} p-12 flex items-center justify-center`}>
                      <span className={`text-3xl font-bold ${logo.textColor || 'text-[#c9a227]'}`}>{logo.preview}</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-3">{logo.name}</h4>
                      <div className="flex gap-2">
                        <button className="flex-1 flex items-center justify-center gap-2 bg-white/10 px-3 py-2 rounded text-sm hover:bg-white/20">
                          <Download size={14} />
                          PNG
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 bg-white/10 px-3 py-2 rounded text-sm hover:bg-white/20">
                          <Download size={14} />
                          SVG
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand Colors */}
            <div>
              <h3 className="text-2xl font-bold text-[#c9a227] mb-6">Brand Colors</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: 'Nuqta Gold', hex: '#c9a227', rgb: 'RGB(201, 162, 39)', usage: 'Primary brand color, CTAs, highlights' },
                  { name: 'Deep Blue', hex: '#0a1628', rgb: 'RGB(10, 22, 40)', usage: 'Primary background, text on light' },
                  { name: 'Light Gold', hex: '#e8d48a', rgb: 'RGB(232, 212, 138)', usage: 'Secondary highlights, gradients' },
                  { name: 'White', hex: '#FFFFFF', rgb: 'RGB(255, 255, 255)', usage: 'Text on dark backgrounds' },
                ].map((color, index) => (
                  <div key={index} className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                    <div
                      className="h-24"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">{color.name}</h4>
                      <button
                        onClick={() => copyToClipboard(color.hex, index)}
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-1"
                      >
                        {color.hex}
                        {copiedIndex === index ? <CheckCircle size={14} className="text-green-500" /> : <Copy size={14} />}
                      </button>
                      <p className="text-xs text-gray-500">{color.rgb}</p>
                      <p className="text-xs text-gray-400 mt-2">{color.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography */}
            <div>
              <h3 className="text-2xl font-bold text-[#c9a227] mb-6">Typography</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold mb-4">Primary Font</h4>
                  <div className="text-4xl font-bold mb-2">Inter</div>
                  <p className="text-gray-400 mb-4">Used for headings, body text, and UI elements</p>
                  <div className="space-y-2">
                    <p className="font-light">Light - 300</p>
                    <p className="font-normal">Regular - 400</p>
                    <p className="font-medium">Medium - 500</p>
                    <p className="font-semibold">Semibold - 600</p>
                    <p className="font-bold">Bold - 700</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold mb-4">Arabic Font</h4>
                  <div className="text-4xl font-bold mb-2" dir="rtl">نقطة</div>
                  <p className="text-gray-400 mb-4">For Arabic content and RTL layouts</p>
                  <div className="space-y-2 text-gray-300">
                    <p>• System Arabic fonts (SF Arabic, Noto Arabic)</p>
                    <p>• Right-to-left text direction</p>
                    <p>• Consistent with English styling</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Usage Guidelines */}
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-[#c9a227] mb-6">Brand Usage Guidelines</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-green-400 mb-3">✓ Do</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Use official logo files provided</li>
                    <li>• Maintain minimum clear space around logo</li>
                    <li>• Use approved brand colors only</li>
                    <li>• Reference Nuqta with proper capitalization</li>
                    <li>• Link to official website when possible</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-400 mb-3">✗ Don't</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Alter logo colors or proportions</li>
                    <li>• Place logo on busy backgrounds</li>
                    <li>• Use outdated brand assets</li>
                    <li>• Create derivative logos or marks</li>
                    <li>• Imply endorsement without permission</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Press Releases Tab */}
        {activeTab === 'releases' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-[#c9a227]">Press Releases</h3>
              <span className="text-gray-400">Latest announcements</span>
            </div>

            {/* Press Release List */}
            <div className="space-y-6">
              {[
                {
                  date: 'February 28, 2026',
                  title: 'Nuqta Launches UAE\'s First Social Rewards Platform',
                  excerpt: 'Dubai, UAE — Nuqta, the innovative social rewards platform, officially launches today with 100+ merchant partners across the UAE. The platform introduces a new way to earn, gift, and share rewards with friends and family.',
                  type: 'Launch',
                  featured: true,
                },
                {
                  date: 'February 15, 2026',
                  title: 'Nuqta Secures $400K Pre-Seed Funding at $5M Valuation',
                  excerpt: 'Dubai, UAE — Nuqta announces the successful close of its pre-seed funding round, raising $400,000 through SAFE agreements at a $5M post-money valuation cap. The funding will accelerate merchant partnerships and platform development.',
                  type: 'Funding',
                  featured: true,
                },
                {
                  date: 'January 20, 2026',
                  title: 'Nuqta Partners with 50+ Premium UAE Restaurants',
                  excerpt: 'Dubai, UAE — Nuqta expands its merchant network with partnerships across Dubai\'s dining scene, including popular venues in DIFC, JBR, and Downtown Dubai.',
                  type: 'Partnership',
                },
                {
                  date: 'December 10, 2025',
                  title: 'Nuqta Announces Event Engine for UAE Exhibitions',
                  excerpt: 'Dubai, UAE — The social rewards platform introduces its Event Engine, enabling exhibition organizers to offer coin rewards to attendees, driving engagement and return visits.',
                  type: 'Product',
                },
              ].map((release, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-6 border transition-all hover:border-[#c9a227]/50 ${
                    release.featured
                      ? 'bg-gradient-to-r from-[#c9a227]/10 to-transparent border-[#c9a227]/30'
                      : 'bg-white/5 border-white/10'
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-sm text-gray-400">{release.date}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      release.type === 'Launch' ? 'bg-green-500/20 text-green-400' :
                      release.type === 'Funding' ? 'bg-blue-500/20 text-blue-400' :
                      release.type === 'Partnership' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {release.type}
                    </span>
                    {release.featured && (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#c9a227]/20 text-[#c9a227]">
                        Featured
                      </span>
                    )}
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-white">{release.title}</h4>
                  <p className="text-gray-400 mb-4">{release.excerpt}</p>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg text-sm hover:bg-white/20">
                      <FileText size={16} />
                      Read Full Release
                    </button>
                    <button className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg text-sm hover:bg-white/20">
                      <Download size={16} />
                      Download PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Boilerplate */}
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-[#c9a227]">Company Boilerplate</h3>
                <button
                  onClick={() => copyToClipboard(`Nuqta is the UAE's first social rewards platform that transforms everyday purchases into shareable experiences. Founded in 2025, Nuqta enables users to earn, gift, and receive reward coins from friends and family across 100+ merchant partners in dining, entertainment, wellness, and events. The platform operates on a sustainable commission model, aligning merchant success with user engagement. For more information, visit nuqta.ae.`, 99)}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white"
                >
                  {copiedIndex === 99 ? <CheckCircle size={16} className="text-green-500" /> : <Copy size={16} />}
                  Copy
                </button>
              </div>
              <p className="text-gray-300 italic">
                "Nuqta is the UAE's first social rewards platform that transforms everyday purchases into shareable experiences.
                Founded in 2025, Nuqta enables users to earn, gift, and receive reward coins from friends and family across
                100+ merchant partners in dining, entertainment, wellness, and events. The platform operates on a sustainable
                commission model, aligning merchant success with user engagement. For more information, visit nuqta.ae."
              </p>
            </div>
          </div>
        )}

        {/* Executive Bios Tab */}
        {activeTab === 'team' && (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[#c9a227]">Executive Team</h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Founder 1 */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#c9a227] to-[#b08d20] rounded-xl flex items-center justify-center">
                    <Users size={32} className="text-[#0a1628]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Founder & CEO</h4>
                    <p className="text-[#c9a227]">Co-Founder</p>
                    <div className="flex gap-3 mt-2">
                      <a href="#" className="text-gray-400 hover:text-white">
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Visionary entrepreneur with deep expertise in consumer technology and the UAE market.
                  Previously built and scaled digital products serving millions of users. Passionate about
                  creating meaningful connections through technology.
                </p>
                <div className="flex gap-2">
                  <button className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded text-sm hover:bg-white/20">
                    <Download size={14} />
                    Download Headshot
                  </button>
                  <button className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded text-sm hover:bg-white/20">
                    <FileText size={14} />
                    Full Bio
                  </button>
                </div>
              </div>

              {/* Founder 2 */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#c9a227] to-[#b08d20] rounded-xl flex items-center justify-center">
                    <Users size={32} className="text-[#0a1628]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Founder & CTO</h4>
                    <p className="text-[#c9a227]">Co-Founder</p>
                    <div className="flex gap-3 mt-2">
                      <a href="#" className="text-gray-400 hover:text-white">
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Technical leader with expertise in building scalable platforms and mobile applications.
                  Background in fintech and loyalty systems. Focused on creating seamless user experiences
                  through innovative technology solutions.
                </p>
                <div className="flex gap-2">
                  <button className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded text-sm hover:bg-white/20">
                    <Download size={14} />
                    Download Headshot
                  </button>
                  <button className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded text-sm hover:bg-white/20">
                    <FileText size={14} />
                    Full Bio
                  </button>
                </div>
              </div>
            </div>

            {/* Interview Topics */}
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-[#c9a227] mb-6">Available for Interviews On</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    topic: 'UAE Startup Ecosystem',
                    points: ['Fundraising in the region', 'Building for local markets', 'Regulatory landscape'],
                  },
                  {
                    topic: 'Future of Loyalty',
                    points: ['Social rewards trends', 'Gen Z consumer behavior', 'Technology disruption'],
                  },
                  {
                    topic: 'Consumer Tech',
                    points: ['Mobile-first design', 'Gamification strategies', 'User engagement'],
                  },
                ].map((item, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-white mb-3">{item.topic}</h4>
                    <ul className="space-y-2">
                      {item.points.map((point, pIndex) => (
                        <li key={pIndex} className="flex items-center gap-2 text-gray-400">
                          <CheckCircle size={14} className="text-[#c9a227]" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Request Interview */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-transparent rounded-xl p-8 border border-[#c9a227]/30 text-center">
              <h3 className="text-xl font-bold mb-4">Request an Interview</h3>
              <p className="text-gray-300 mb-6">
                Our founders are available for podcast appearances, panel discussions, and media interviews.
              </p>
              <a
                href="mailto:press@nuqta.ae?subject=Interview Request"
                className="inline-flex items-center gap-2 bg-[#c9a227] text-[#0a1628] px-6 py-3 rounded-lg font-semibold hover:bg-[#b08d20] transition-colors"
              >
                <Mail size={20} />
                Schedule Interview
              </a>
            </div>
          </div>
        )}

        {/* Fact Sheet Tab */}
        {activeTab === 'facts' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-[#c9a227]">Company Fact Sheet</h3>
              <button className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20">
                <Download size={16} />
                Download PDF
              </button>
            </div>

            {/* Quick Facts Table */}
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <table className="w-full">
                <tbody>
                  {[
                    ['Company Name', 'Nuqta (نقطة)'],
                    ['Meaning', '"Point" in Arabic - representing reward points and connection points'],
                    ['Founded', '2025'],
                    ['Launch Date', 'February 28, 2026'],
                    ['Headquarters', 'Dubai, UAE'],
                    ['Category', 'Social Rewards / Loyalty Platform'],
                    ['Website', 'nuqta.ae'],
                    ['Target Market', 'UAE (initial), GCC (expansion)'],
                  ].map(([label, value], index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white/5' : ''}>
                      <td className="px-6 py-4 font-medium text-gray-400 w-1/3">{label}</td>
                      <td className="px-6 py-4 text-white">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Business Model */}
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-[#c9a227] mb-6">Business Model</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    engine: 'Engine A',
                    type: 'High-Margin Merchants',
                    commission: '15-20%',
                    examples: 'Premium dining, wellness, entertainment',
                  },
                  {
                    engine: 'Engine B',
                    type: 'Low-Margin Merchants',
                    commission: '5-8%',
                    examples: 'Grocery, fuel, utilities',
                  },
                  {
                    engine: 'Engine C',
                    type: 'Events & Exhibitions',
                    commission: '50% coin sponsorship',
                    examples: 'Trade shows, concerts, festivals',
                  },
                ].map((engine, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-4">
                    <div className="text-[#c9a227] font-semibold mb-2">{engine.engine}</div>
                    <div className="text-white font-medium mb-1">{engine.type}</div>
                    <div className="text-2xl font-bold text-[#c9a227] mb-2">{engine.commission}</div>
                    <div className="text-sm text-gray-400">{engine.examples}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Metrics */}
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-[#c9a227] mb-6">Key Metrics & Targets</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-white mb-4">Launch Targets (H1 2026)</h4>
                  <ul className="space-y-3">
                    {[
                      '5,000+ Monthly Active Users',
                      '100+ Merchant Partners',
                      'AED 500K+ Monthly Transaction Volume',
                      '50+ High-Margin Restaurant Partners',
                      '10+ Event Partnerships',
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-300">
                        <Target size={16} className="text-[#c9a227]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-4">Year 1 Goals</h4>
                  <ul className="space-y-3">
                    {[
                      '25,000+ Monthly Active Users',
                      '500+ Merchant Partners',
                      'AED 5M+ Monthly Transaction Volume',
                      'Break-even operations',
                      'GCC expansion planning',
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-300">
                        <Rocket size={16} className="text-[#c9a227]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Funding */}
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-[#c9a227] mb-6">Funding</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { label: 'Current Round', value: 'Pre-Seed' },
                  { label: 'Amount Raised', value: '$400,000' },
                  { label: 'Valuation Cap', value: '$5,000,000' },
                  { label: 'Instrument', value: 'SAFE (Post-Money)' },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-gray-400 text-sm mb-1">{item.label}</div>
                    <div className="text-xl font-bold text-white">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards & Recognition */}
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-[#c9a227] mb-6">Awards & Recognition</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { award: 'Dubai Future Accelerator', year: '2026', status: 'Participant' },
                  { award: 'GITEX Global Pitch', year: '2026', status: 'Selected' },
                  { award: 'UAE Startup Award', year: '2026', status: 'Nominee' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white/5 rounded-lg p-4">
                    <Award className="text-[#c9a227]" size={32} />
                    <div>
                      <div className="font-semibold text-white">{item.award}</div>
                      <div className="text-sm text-gray-400">{item.year} • {item.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Downloadable Assets */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-transparent rounded-xl p-8 border border-[#c9a227]/30">
              <h3 className="text-xl font-bold mb-6">Download All Assets</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { name: 'Full Press Kit', format: 'ZIP', size: '15 MB' },
                  { name: 'Logo Package', format: 'ZIP', size: '2 MB' },
                  { name: 'Fact Sheet', format: 'PDF', size: '500 KB' },
                  { name: 'Media Photos', format: 'ZIP', size: '25 MB' },
                ].map((asset, index) => (
                  <button
                    key={index}
                    className="flex items-center gap-3 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <Download className="text-[#c9a227]" size={20} />
                    <div className="text-left">
                      <div className="font-medium text-white">{asset.name}</div>
                      <div className="text-xs text-gray-400">{asset.format} • {asset.size}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 mt-12">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>For media inquiries: <a href="mailto:press@nuqta.ae" className="text-[#c9a227] hover:underline">press@nuqta.ae</a></p>
          <p className="mt-2">© 2026 Nuqta. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
