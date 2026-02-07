'use client';

import React, { useState } from 'react';
import {
  Play,
  Camera,
  Users,
  TrendingUp,
  Target,
  Zap,
  Instagram,
  Video,
  Megaphone,
  DollarSign,
  CheckCircle2,
  Star,
  Gift,
  Calendar,
  BarChart3
} from 'lucide-react';

export default function MediaHubPage() {
  const [activeTab, setActiveTab] = useState<'strategy' | 'influencers' | 'content' | 'campaigns' | 'metrics'>('strategy');

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0a1628] via-[#1a2942] to-[#0a1628] border-b border-[#c9a227]/20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-center gap-3 mb-4">
            <Play className="w-8 h-8 text-[#c9a227]" />
            <span className="text-[#c9a227] font-semibold">Marketing & Growth</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Media Hub Strategy
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Influencer partnerships, content strategy, and creator economy playbook for UAE market
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-0 z-50 bg-[#0a1628]/95 backdrop-blur border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-2">
            {[
              { id: 'strategy', label: 'Strategy', icon: Target },
              { id: 'influencers', label: 'Influencers', icon: Users },
              { id: 'content', label: 'Content', icon: Camera },
              { id: 'campaigns', label: 'Campaigns', icon: Megaphone },
              { id: 'metrics', label: 'Metrics', icon: BarChart3 },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-[#c9a227] text-black'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {activeTab === 'strategy' && <StrategyTab />}
        {activeTab === 'influencers' && <InfluencersTab />}
        {activeTab === 'content' && <ContentTab />}
        {activeTab === 'campaigns' && <CampaignsTab />}
        {activeTab === 'metrics' && <MetricsTab />}
      </div>
    </div>
  );
}

// ============================================
// STRATEGY TAB
// ============================================
function StrategyTab() {
  return (
    <div className="space-y-8">
      {/* Overview */}
      <div className="bg-gradient-to-br from-[#c9a227]/10 to-amber-500/10 border border-[#c9a227]/30 rounded-xl p-8">
        <h2 className="text-2xl font-black text-[#c9a227] mb-4">Media Hub Vision</h2>
        <p className="text-lg text-slate-300 mb-6">
          Build UAE&apos;s most engaged rewards community through authentic creator partnerships,
          viral content, and a self-sustaining creator economy.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800/50 rounded-lg p-4">
            <div className="text-3xl font-black text-[#c9a227] mb-2">100+</div>
            <p className="text-slate-400">Creator Partners</p>
            <p className="text-xs text-slate-500">by end of H1</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <div className="text-3xl font-black text-[#c9a227] mb-2">1M+</div>
            <p className="text-slate-400">Monthly Impressions</p>
            <p className="text-xs text-slate-500">across all channels</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <div className="text-3xl font-black text-[#c9a227] mb-2">30%</div>
            <p className="text-slate-400">Organic Acquisition</p>
            <p className="text-xs text-slate-500">from creator content</p>
          </div>
        </div>
      </div>

      {/* Channel Strategy */}
      <div className="bg-slate-800/30 rounded-xl p-8">
        <h2 className="text-2xl font-black text-white mb-6">Channel Strategy</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* TikTok */}
          <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Video className="w-8 h-8 text-pink-400" />
              <div>
                <h3 className="text-xl font-black text-pink-400">TikTok</h3>
                <p className="text-sm text-slate-400">Primary Discovery Channel</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-pink-400" />
                <span>Short-form deal reveals & reactions</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-pink-400" />
                <span>&quot;Save Money UAE&quot; trend participation</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-pink-400" />
                <span>Duet challenges with merchants</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-pink-400" />
                <span>Behind-the-scenes at partner venues</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-700">
              <p className="text-xs text-slate-500">Target: 50K followers by H1 end</p>
            </div>
          </div>

          {/* Instagram */}
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Instagram className="w-8 h-8 text-purple-400" />
              <div>
                <h3 className="text-xl font-black text-purple-400">Instagram</h3>
                <p className="text-sm text-slate-400">Community & Trust Building</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>Reels for viral reach</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>Stories for daily deals</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>Carousel posts for merchant spotlights</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>User-generated content features</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-700">
              <p className="text-xs text-slate-500">Target: 30K followers by H1 end</p>
            </div>
          </div>

          {/* YouTube */}
          <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Play className="w-8 h-8 text-red-400" />
              <div>
                <h3 className="text-xl font-black text-red-400">YouTube</h3>
                <p className="text-sm text-slate-400">Long-form & Shorts</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-red-400" />
                <span>&quot;Hidden Gems in Dubai&quot; series</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-red-400" />
                <span>Merchant interview features</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-red-400" />
                <span>Shorts for deal alerts</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-red-400" />
                <span>Tutorial & how-to content</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-700">
              <p className="text-xs text-slate-500">Target: 10K subscribers by H1 end</p>
            </div>
          </div>

          {/* Twitter/X */}
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Megaphone className="w-8 h-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-black text-blue-400">Twitter/X</h3>
                <p className="text-sm text-slate-400">Real-time & Community</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Flash deal announcements</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>UAE lifestyle conversations</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Customer success stories</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Startup journey updates</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-700">
              <p className="text-xs text-slate-500">Target: 5K followers by H1 end</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Pillars */}
      <div className="bg-slate-800/30 rounded-xl p-8">
        <h2 className="text-2xl font-black text-white mb-6">Content Pillars</h2>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            {
              title: 'Deal Discovery',
              desc: 'Showcasing best offers & hidden gems',
              percentage: '40%',
              color: 'emerald',
            },
            {
              title: 'Merchant Stories',
              desc: 'Human stories behind businesses',
              percentage: '25%',
              color: 'blue',
            },
            {
              title: 'User Success',
              desc: 'Real savings & redemption stories',
              percentage: '20%',
              color: 'purple',
            },
            {
              title: 'Education',
              desc: 'Tips, hacks & smart spending',
              percentage: '15%',
              color: 'amber',
            },
          ].map((pillar) => (
            <div key={pillar.title} className={`bg-${pillar.color}-500/10 border border-${pillar.color}-500/30 rounded-xl p-4`}>
              <div className={`text-3xl font-black text-${pillar.color}-400 mb-2`}>{pillar.percentage}</div>
              <h3 className="font-bold text-white mb-1">{pillar.title}</h3>
              <p className="text-xs text-slate-400">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// INFLUENCERS TAB
// ============================================
function InfluencersTab() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-white mb-2">Influencer Partnership Program</h2>
        <p className="text-slate-400">Multi-tier creator ecosystem for authentic promotion</p>
      </div>

      {/* Tier System */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Nano */}
        <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border-2 border-emerald-500/30 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Star className="w-8 h-8 text-emerald-400" />
            <div>
              <h3 className="text-xl font-black text-emerald-400">Nano Creators</h3>
              <p className="text-sm text-slate-400">1K - 10K followers</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-lg p-3">
              <p className="text-sm text-slate-400">Compensation</p>
              <p className="font-bold text-white">Product/Service + Coins</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-3">
              <p className="text-sm text-slate-400">Content</p>
              <p className="font-bold text-white">1-2 posts/month</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-3">
              <p className="text-sm text-slate-400">Commission</p>
              <p className="font-bold text-white">5% of referral GMV</p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-700">
            <p className="text-xs text-slate-500 mb-2">Best For:</p>
            <ul className="text-xs text-slate-400 space-y-1">
              <li>• Local food bloggers</li>
              <li>• Neighborhood influencers</li>
              <li>• Student creators</li>
            </ul>
          </div>
        </div>

        {/* Micro */}
        <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-2 border-blue-500/30 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Star className="w-8 h-8 text-blue-400" />
            <Star className="w-6 h-6 text-blue-400" />
            <div>
              <h3 className="text-xl font-black text-blue-400">Micro Creators</h3>
              <p className="text-sm text-slate-400">10K - 100K followers</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-lg p-3">
              <p className="text-sm text-slate-400">Compensation</p>
              <p className="font-bold text-white">AED 500-2,000 + Coins</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-3">
              <p className="text-sm text-slate-400">Content</p>
              <p className="font-bold text-white">2-4 posts/month</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-3">
              <p className="text-sm text-slate-400">Commission</p>
              <p className="font-bold text-white">7% of referral GMV</p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-700">
            <p className="text-xs text-slate-500 mb-2">Best For:</p>
            <ul className="text-xs text-slate-400 space-y-1">
              <li>• Lifestyle bloggers</li>
              <li>• Deal hunters</li>
              <li>• Category specialists</li>
            </ul>
          </div>
        </div>

        {/* Macro */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/30 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Star className="w-8 h-8 text-purple-400" />
            <Star className="w-7 h-7 text-purple-400" />
            <Star className="w-6 h-6 text-purple-400" />
            <div>
              <h3 className="text-xl font-black text-purple-400">Macro Creators</h3>
              <p className="text-sm text-slate-400">100K+ followers</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-lg p-3">
              <p className="text-sm text-slate-400">Compensation</p>
              <p className="font-bold text-white">AED 5,000+ + Equity</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-3">
              <p className="text-sm text-slate-400">Content</p>
              <p className="font-bold text-white">Campaign-based</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-3">
              <p className="text-sm text-slate-400">Commission</p>
              <p className="font-bold text-white">10% of referral GMV</p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-700">
            <p className="text-xs text-slate-500 mb-2">Best For:</p>
            <ul className="text-xs text-slate-400 space-y-1">
              <li>• Celebrity endorsements</li>
              <li>• Major campaigns</li>
              <li>• Brand ambassadors</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Creator Program */}
      <div className="bg-gradient-to-br from-[#c9a227]/10 to-amber-500/10 border border-[#c9a227]/30 rounded-xl p-8">
        <h3 className="text-2xl font-black text-[#c9a227] mb-6">Nuqta Creator Program</h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-white mb-4">What Creators Get</h4>
            <ul className="space-y-3">
              {[
                'Unique referral code with tracking dashboard',
                'Early access to new merchants & deals',
                'Monthly coin bonus (based on performance)',
                'Exclusive creator events & networking',
                'Co-branded content opportunities',
                'Featured placement in Nuqta app',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                  <Gift className="w-4 h-4 text-[#c9a227]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">What We Expect</h4>
            <ul className="space-y-3">
              {[
                'Authentic content (no scripted ads)',
                'Minimum monthly content commitment',
                'Honest reviews & feedback',
                'Compliance with FTC/UAE ad guidelines',
                'Engagement with community comments',
                'Timely posting per campaign briefs',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Target Creators */}
      <div className="bg-slate-800/30 rounded-xl p-8">
        <h3 className="text-xl font-black text-white mb-6">Target Creator Categories</h3>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            { category: 'Food & Dining', count: '30+', icon: '🍔' },
            { category: 'Lifestyle', count: '25+', icon: '✨' },
            { category: 'Deals & Savings', count: '20+', icon: '💰' },
            { category: 'Beauty & Fashion', count: '15+', icon: '💄' },
            { category: 'Fitness & Health', count: '10+', icon: '💪' },
            { category: 'Family & Kids', count: '10+', icon: '👨‍👩‍👧' },
            { category: 'Tech & Gadgets', count: '5+', icon: '📱' },
            { category: 'Travel & Tourism', count: '5+', icon: '✈️' },
          ].map((cat) => (
            <div key={cat.category} className="bg-slate-700/50 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">{cat.icon}</div>
              <p className="font-semibold text-white text-sm">{cat.category}</p>
              <p className="text-xs text-[#c9a227]">{cat.count} creators</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// CONTENT TAB
// ============================================
function ContentTab() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-white mb-2">Content Playbook</h2>
        <p className="text-slate-400">Templates, formats, and best practices for Nuqta content</p>
      </div>

      {/* Content Formats */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Video Content */}
        <div className="bg-slate-800/30 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Video className="w-6 h-6 text-pink-400" />
            <h3 className="text-xl font-black text-white">Video Formats</h3>
          </div>

          <div className="space-y-4">
            {[
              {
                title: 'Deal Reveal',
                duration: '15-30 sec',
                desc: 'Quick reveal of amazing deal with reaction',
                platform: 'TikTok, Reels',
              },
              {
                title: 'Merchant Spotlight',
                duration: '60-90 sec',
                desc: 'Behind-the-scenes at partner business',
                platform: 'YouTube Shorts, Reels',
              },
              {
                title: 'User Testimonial',
                duration: '30-45 sec',
                desc: 'Real user sharing savings story',
                platform: 'All platforms',
              },
              {
                title: 'How-To Tutorial',
                duration: '2-3 min',
                desc: 'Step-by-step app feature walkthrough',
                platform: 'YouTube, IGTV',
              },
              {
                title: 'Vlog Integration',
                duration: '30-60 sec segment',
                desc: 'Natural integration in creator vlogs',
                platform: 'YouTube',
              },
            ].map((format) => (
              <div key={format.title} className="bg-slate-700/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-white">{format.title}</h4>
                  <span className="text-xs text-pink-400">{format.duration}</span>
                </div>
                <p className="text-sm text-slate-400 mb-2">{format.desc}</p>
                <p className="text-xs text-slate-500">{format.platform}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Static Content */}
        <div className="bg-slate-800/30 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Camera className="w-6 h-6 text-purple-400" />
            <h3 className="text-xl font-black text-white">Static Formats</h3>
          </div>

          <div className="space-y-4">
            {[
              {
                title: 'Carousel Post',
                slides: '5-10 slides',
                desc: 'Top 10 deals this week, merchant features',
                platform: 'Instagram',
              },
              {
                title: 'Story Series',
                slides: '3-5 slides',
                desc: 'Daily deal alerts, flash offers',
                platform: 'Instagram, Facebook',
              },
              {
                title: 'Infographic',
                slides: 'Single image',
                desc: 'Savings stats, comparison charts',
                platform: 'All platforms',
              },
              {
                title: 'Meme/Relatable',
                slides: 'Single image',
                desc: 'Humor around UAE life & saving money',
                platform: 'Twitter, Instagram',
              },
              {
                title: 'Quote Card',
                slides: 'Single image',
                desc: 'User testimonials, merchant quotes',
                platform: 'All platforms',
              },
            ].map((format) => (
              <div key={format.title} className="bg-slate-700/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-white">{format.title}</h4>
                  <span className="text-xs text-purple-400">{format.slides}</span>
                </div>
                <p className="text-sm text-slate-400 mb-2">{format.desc}</p>
                <p className="text-xs text-slate-500">{format.platform}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Calendar Template */}
      <div className="bg-gradient-to-br from-[#c9a227]/10 to-amber-500/10 border border-[#c9a227]/30 rounded-xl p-8">
        <h3 className="text-xl font-black text-[#c9a227] mb-6">Weekly Content Calendar</h3>

        <div className="grid grid-cols-7 gap-2">
          {[
            { day: 'Mon', content: 'Deal of the Week', type: 'Video' },
            { day: 'Tue', content: 'Merchant Spotlight', type: 'Carousel' },
            { day: 'Wed', content: 'User Story', type: 'Video' },
            { day: 'Thu', content: 'Tips & Tricks', type: 'Infographic' },
            { day: 'Fri', content: 'Weekend Deals', type: 'Story' },
            { day: 'Sat', content: 'Community Post', type: 'Meme' },
            { day: 'Sun', content: 'Week Recap', type: 'Carousel' },
          ].map((item) => (
            <div key={item.day} className="bg-slate-800/50 rounded-lg p-3 text-center">
              <p className="text-xs text-[#c9a227] font-bold mb-2">{item.day}</p>
              <p className="text-sm text-white font-semibold">{item.content}</p>
              <p className="text-xs text-slate-500 mt-1">{item.type}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hashtag Strategy */}
      <div className="bg-slate-800/30 rounded-xl p-8">
        <h3 className="text-xl font-black text-white mb-6">Hashtag Strategy</h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold text-[#c9a227] mb-3">Brand Hashtags</h4>
            <div className="flex flex-wrap gap-2">
              {['#NuqtaApp', '#NuqtaDeals', '#NuqtaSavings', '#NuqtaRewards'].map((tag) => (
                <span key={tag} className="bg-[#c9a227]/20 text-[#c9a227] text-sm px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-[#c9a227] mb-3">UAE Hashtags</h4>
            <div className="flex flex-wrap gap-2">
              {['#DubaiDeals', '#UAELife', '#DubaiFood', '#AbuDhabi', '#UAEShopping'].map((tag) => (
                <span key={tag} className="bg-blue-500/20 text-blue-400 text-sm px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-[#c9a227] mb-3">Trend Hashtags</h4>
            <div className="flex flex-wrap gap-2">
              {['#SaveMoney', '#Cashback', '#Rewards', '#SmartShopping', '#Deals'].map((tag) => (
                <span key={tag} className="bg-purple-500/20 text-purple-400 text-sm px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// CAMPAIGNS TAB
// ============================================
function CampaignsTab() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-white mb-2">Campaign Templates</h2>
        <p className="text-slate-400">Ready-to-execute marketing campaigns</p>
      </div>

      {/* Launch Campaign */}
      <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border-2 border-emerald-500/30 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-8 h-8 text-emerald-400" />
          <div>
            <h3 className="text-2xl font-black text-emerald-400">Launch Campaign</h3>
            <p className="text-slate-400">March 1, 2026 - App Launch</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-slate-800/50 rounded-lg p-4">
            <Calendar className="w-5 h-5 text-emerald-400 mb-2" />
            <p className="text-sm text-slate-400">Duration</p>
            <p className="font-bold text-white">2 Weeks</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <DollarSign className="w-5 h-5 text-emerald-400 mb-2" />
            <p className="text-sm text-slate-400">Budget</p>
            <p className="font-bold text-white">AED 50,000</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <Target className="w-5 h-5 text-emerald-400 mb-2" />
            <p className="text-sm text-slate-400">Target</p>
            <p className="font-bold text-white">5,000 Downloads</p>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-bold text-white">Campaign Elements:</h4>
          <ul className="grid md:grid-cols-2 gap-2">
            {[
              '20 nano creators posting simultaneously',
              '5 micro creators with sponsored content',
              '1 macro creator as launch ambassador',
              'AED 100 in coins for first 1,000 users',
              'Merchant launch party content',
              'Countdown content series',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Ramadan Campaign */}
      <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border-2 border-purple-500/30 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <Star className="w-8 h-8 text-purple-400" />
          <div>
            <h3 className="text-2xl font-black text-purple-400">Ramadan Campaign</h3>
            <p className="text-slate-400">March 2026</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-slate-800/50 rounded-lg p-4">
            <Calendar className="w-5 h-5 text-purple-400 mb-2" />
            <p className="text-sm text-slate-400">Duration</p>
            <p className="font-bold text-white">30 Days</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <DollarSign className="w-5 h-5 text-purple-400 mb-2" />
            <p className="text-sm text-slate-400">Budget</p>
            <p className="font-bold text-white">AED 100,000</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <Target className="w-5 h-5 text-purple-400 mb-2" />
            <p className="text-sm text-slate-400">Target</p>
            <p className="font-bold text-white">2x GMV</p>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-bold text-white">Campaign Elements:</h4>
          <ul className="grid md:grid-cols-2 gap-2">
            {[
              'Daily Iftar deals content',
              'Suhoor spots spotlight series',
              'Family gathering deals',
              'Charity tie-in (donate coins)',
              'Eid preparation countdown',
              '3x coin rewards during Ramadan',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Referral Campaign */}
      <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/30 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <Users className="w-8 h-8 text-blue-400" />
          <div>
            <h3 className="text-2xl font-black text-blue-400">Referral Challenge</h3>
            <p className="text-slate-400">Ongoing</p>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-bold text-white">Mechanics:</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-2xl font-black text-blue-400 mb-2">100</p>
              <p className="text-sm text-white">Coins for referrer</p>
              <p className="text-xs text-slate-500">per successful referral</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-2xl font-black text-blue-400 mb-2">50</p>
              <p className="text-sm text-white">Coins for new user</p>
              <p className="text-xs text-slate-500">welcome bonus</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-2xl font-black text-blue-400 mb-2">5x</p>
              <p className="text-sm text-white">Bonus multiplier</p>
              <p className="text-xs text-slate-500">for top 10 referrers/week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// METRICS TAB
// ============================================
function MetricsTab() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-white mb-2">Media Performance Metrics</h2>
        <p className="text-slate-400">KPIs and measurement framework</p>
      </div>

      {/* KPI Dashboard */}
      <div className="bg-slate-800/30 rounded-xl p-8">
        <h3 className="text-xl font-black text-white mb-6">Core KPIs</h3>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            { metric: 'Content Reach', target: '500K/month', current: '-', color: 'blue' },
            { metric: 'Engagement Rate', target: '>5%', current: '-', color: 'purple' },
            { metric: 'Click-through Rate', target: '>2%', current: '-', color: 'emerald' },
            { metric: 'Conversion Rate', target: '>10%', current: '-', color: 'amber' },
            { metric: 'Cost per Install', target: '<AED 5', current: '-', color: 'pink' },
            { metric: 'Creator ROI', target: '5x', current: '-', color: 'cyan' },
            { metric: 'Organic Share', target: '>30%', current: '-', color: 'orange' },
            { metric: 'Brand Mentions', target: '100/day', current: '-', color: 'indigo' },
          ].map((kpi) => (
            <div key={kpi.metric} className={`bg-${kpi.color}-500/10 border border-${kpi.color}-500/30 rounded-xl p-4`}>
              <p className="text-sm text-slate-400 mb-1">{kpi.metric}</p>
              <p className={`text-2xl font-black text-${kpi.color}-400`}>{kpi.target}</p>
              <p className="text-xs text-slate-500 mt-1">Target</p>
            </div>
          ))}
        </div>
      </div>

      {/* Creator Performance */}
      <div className="bg-slate-800/30 rounded-xl p-8">
        <h3 className="text-xl font-black text-white mb-6">Creator Performance Tracking</h3>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4 text-slate-400 font-semibold">Metric</th>
                <th className="text-center py-3 px-4 text-emerald-400 font-semibold">Nano</th>
                <th className="text-center py-3 px-4 text-blue-400 font-semibold">Micro</th>
                <th className="text-center py-3 px-4 text-purple-400 font-semibold">Macro</th>
              </tr>
            </thead>
            <tbody>
              {[
                { metric: 'Avg. Reach', nano: '2K', micro: '20K', macro: '200K' },
                { metric: 'Engagement Rate', nano: '8%', micro: '5%', macro: '3%' },
                { metric: 'Cost per Post', nano: 'Free-AED 200', micro: 'AED 500-2K', macro: 'AED 5K+' },
                { metric: 'Installs per Post', nano: '5-20', micro: '50-200', macro: '500+' },
                { metric: 'Expected CPI', nano: 'AED 10-40', micro: 'AED 10-20', macro: 'AED 10-15' },
                { metric: 'Best Content Type', nano: 'Authentic reviews', micro: 'Deal reveals', macro: 'Brand stories' },
              ].map((row) => (
                <tr key={row.metric} className="border-b border-slate-800">
                  <td className="py-3 px-4 text-white font-medium">{row.metric}</td>
                  <td className="py-3 px-4 text-center text-slate-300">{row.nano}</td>
                  <td className="py-3 px-4 text-center text-slate-300">{row.micro}</td>
                  <td className="py-3 px-4 text-center text-slate-300">{row.macro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Attribution Model */}
      <div className="bg-gradient-to-br from-[#c9a227]/10 to-amber-500/10 border border-[#c9a227]/30 rounded-xl p-8">
        <h3 className="text-xl font-black text-[#c9a227] mb-6">Attribution Model</h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-white mb-4">Tracking Methods</h4>
            <ul className="space-y-3">
              {[
                'Unique referral codes per creator',
                'UTM parameters on all links',
                'Post-install survey ("How did you hear?")',
                'Promo code redemption tracking',
                'Deep link attribution (AppsFlyer/Adjust)',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#c9a227]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Attribution Windows</h4>
            <div className="space-y-3">
              <div className="bg-slate-800/50 rounded-lg p-3">
                <p className="text-sm text-slate-400">Click-through</p>
                <p className="font-bold text-white">7 days</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-3">
                <p className="text-sm text-slate-400">View-through</p>
                <p className="font-bold text-white">24 hours</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-3">
                <p className="text-sm text-slate-400">Referral Code</p>
                <p className="font-bold text-white">30 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reporting Schedule */}
      <div className="bg-slate-800/30 rounded-xl p-8">
        <h3 className="text-xl font-black text-white mb-6">Reporting Schedule</h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-700/50 rounded-lg p-4">
            <h4 className="font-bold text-white mb-2">Daily</h4>
            <ul className="text-sm text-slate-400 space-y-1">
              <li>• Content performance check</li>
              <li>• Engagement monitoring</li>
              <li>• Crisis/negative comment watch</li>
            </ul>
          </div>
          <div className="bg-slate-700/50 rounded-lg p-4">
            <h4 className="font-bold text-white mb-2">Weekly</h4>
            <ul className="text-sm text-slate-400 space-y-1">
              <li>• Creator performance review</li>
              <li>• Content calendar planning</li>
              <li>• Top performing content analysis</li>
            </ul>
          </div>
          <div className="bg-slate-700/50 rounded-lg p-4">
            <h4 className="font-bold text-white mb-2">Monthly</h4>
            <ul className="text-sm text-slate-400 space-y-1">
              <li>• Full KPI dashboard review</li>
              <li>• Creator tier evaluation</li>
              <li>• Strategy adjustment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
