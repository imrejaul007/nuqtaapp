'use client';

import React, { useState } from 'react';
import {
  Handshake,
  DollarSign,
  TrendingUp,
  Users,
  Shield,
  CheckCircle2,
  Target,
  Building2,
  Percent,
  Calendar,
  ChevronRight,
  Star,
  Zap,
  BarChart3,
  Megaphone,
  QrCode,
  Store,
  Truck,
  Package,
  Coffee,
  Shirt,
  Heart,
  BadgeCheck,
  Award,
  Crown,
  MapPin,
  Globe,
  Camera,
  Play,
  MessageSquare,
  ShoppingCart
} from 'lucide-react';

export default function CoPartnerPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'model' | 'verticals' | 'marketing' | 'fleet' | 'process' | 'faq'>('overview');

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0a1628] via-[#1a2942] to-[#0a1628] border-b border-[#c9a227]/20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-center gap-3 mb-4">
            <Handshake className="w-8 h-8 text-[#c9a227]" />
            <span className="text-[#c9a227] font-semibold">Investment Opportunity</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Co-Partner Brand Program
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Invest AED 50,000 • Own 50% of a brand vertical • Build together
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="bg-[#c9a227]/20 rounded-lg px-4 py-2">
              <span className="text-[#c9a227] font-bold">AED 50,000</span>
              <span className="text-slate-400 text-sm ml-2">Investment</span>
            </div>
            <div className="bg-emerald-500/20 rounded-lg px-4 py-2">
              <span className="text-emerald-400 font-bold">50%</span>
              <span className="text-slate-400 text-sm ml-2">Equity Stake</span>
            </div>
            <div className="bg-blue-500/20 rounded-lg px-4 py-2">
              <span className="text-blue-400 font-bold">50/50</span>
              <span className="text-slate-400 text-sm ml-2">Revenue Share</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-0 z-50 bg-[#0a1628]/95 backdrop-blur border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-2">
            {[
              { id: 'overview', label: 'Overview', icon: Target },
              { id: 'model', label: 'Investment Model', icon: DollarSign },
              { id: 'verticals', label: 'Brand Verticals', icon: Building2 },
              { id: 'marketing', label: 'Marketing & Pricing', icon: Megaphone },
              { id: 'fleet', label: 'Fleet Stalls', icon: Truck },
              { id: 'process', label: 'Process', icon: Calendar },
              { id: 'faq', label: 'FAQ', icon: Shield },
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
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'model' && <ModelTab />}
        {activeTab === 'verticals' && <VerticalsTab />}
        {activeTab === 'marketing' && <MarketingTab />}
        {activeTab === 'fleet' && <FleetStallsTab />}
        {activeTab === 'process' && <ProcessTab />}
        {activeTab === 'faq' && <FAQTab />}
      </div>
    </div>
  );
}

// ============================================
// OVERVIEW TAB
// ============================================
function OverviewTab() {
  return (
    <div className="space-y-8">
      {/* Hero Box */}
      <div className="bg-gradient-to-br from-[#c9a227]/10 to-amber-500/10 border-2 border-[#c9a227]/30 rounded-2xl p-8">
        <h2 className="text-3xl font-black text-[#c9a227] mb-4">Own a Piece of UAE&apos;s Rewards Revolution</h2>
        <p className="text-lg text-slate-300 mb-6">
          The Co-Partner Brand Program allows entrepreneurs and investors to co-own a dedicated
          category vertical within the Nuqta ecosystem. You bring the industry expertise and capital;
          we bring the platform, technology, and operational support.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 text-center">
            <DollarSign className="w-10 h-10 text-[#c9a227] mx-auto mb-3" />
            <div className="text-3xl font-black text-white mb-2">AED 50K</div>
            <p className="text-slate-400">Total Investment</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 text-center">
            <Percent className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
            <div className="text-3xl font-black text-white mb-2">50%</div>
            <p className="text-slate-400">Equity Ownership</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 text-center">
            <TrendingUp className="w-10 h-10 text-blue-400 mx-auto mb-3" />
            <div className="text-3xl font-black text-white mb-2">50/50</div>
            <p className="text-slate-400">Revenue Split</p>
          </div>
        </div>
      </div>

      {/* Why Co-Partner */}
      <div className="bg-slate-800/30 rounded-xl p-8">
        <h2 className="text-2xl font-black text-white mb-6">Why Become a Co-Partner?</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: Zap,
              title: 'Turnkey Business',
              desc: 'No need to build technology, handle operations, or manage payments. Nuqta provides the complete infrastructure.',
              color: 'amber',
            },
            {
              icon: Users,
              title: 'Leverage Your Network',
              desc: 'Use your industry connections and expertise to onboard merchants in your vertical faster than competitors.',
              color: 'blue',
            },
            {
              icon: Shield,
              title: 'Category Exclusivity',
              desc: 'You get exclusive rights to your brand vertical in UAE. No other co-partner will compete in your space.',
              color: 'emerald',
            },
            {
              icon: BarChart3,
              title: 'Transparent Revenue',
              desc: 'Real-time dashboard showing transactions, commissions, and your share. Quarterly distributions guaranteed.',
              color: 'purple',
            },
          ].map((item) => (
            <div key={item.title} className={`bg-${item.color}-500/10 border border-${item.color}-500/30 rounded-xl p-6`}>
              <item.icon className={`w-8 h-8 text-${item.color}-400 mb-4`} />
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Who Should Apply */}
      <div className="bg-slate-800/30 rounded-xl p-8">
        <h2 className="text-2xl font-black text-white mb-6">Ideal Co-Partner Profile</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#c9a227]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-[#c9a227]" />
            </div>
            <h3 className="font-bold text-white mb-2">Industry Experts</h3>
            <p className="text-sm text-slate-400">
              Deep knowledge of a specific retail or service category in UAE
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#c9a227]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-[#c9a227]" />
            </div>
            <h3 className="font-bold text-white mb-2">Merchant Connections</h3>
            <p className="text-sm text-slate-400">
              Existing relationships with business owners in your target vertical
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#c9a227]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-[#c9a227]" />
            </div>
            <h3 className="font-bold text-white mb-2">Entrepreneurial Drive</h3>
            <p className="text-sm text-slate-400">
              Willingness to actively participate in growing the vertical
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MODEL TAB
// ============================================
function ModelTab() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-white mb-2">Investment & Revenue Model</h2>
        <p className="text-slate-400">Transparent economics for co-partners</p>
      </div>

      {/* Investment Structure */}
      <div className="bg-gradient-to-br from-[#c9a227]/10 to-amber-500/10 border-2 border-[#c9a227]/30 rounded-2xl p-8">
        <h3 className="text-2xl font-black text-[#c9a227] mb-6">Investment Structure</h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-white mb-4">Payment Schedule</h4>
            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400">Tranche 1 (Signing)</span>
                  <span className="text-[#c9a227] font-bold">AED 25,000</span>
                </div>
                <p className="text-xs text-slate-500">Due upon agreement execution</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400">Tranche 2 (Launch)</span>
                  <span className="text-[#c9a227] font-bold">AED 25,000</span>
                </div>
                <p className="text-xs text-slate-500">Due upon vertical launch</p>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-emerald-400 font-bold">Total Investment</span>
                  <span className="text-emerald-400 font-bold">AED 50,000</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">What You Get</h4>
            <ul className="space-y-3">
              {[
                '50% equity in the brand vertical entity',
                'Exclusive category rights in UAE',
                'Equal board representation (2+2)',
                'Full access to Nuqta platform & tools',
                'Marketing co-funding for launch',
                'Quarterly revenue distributions',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Revenue Model */}
      <div className="bg-slate-800/30 rounded-xl p-8">
        <h3 className="text-2xl font-black text-white mb-6">Revenue Model</h3>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-700/50 rounded-xl p-6">
            <h4 className="font-bold text-white mb-3">Revenue Sources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>• Merchant commissions (15-20%)</li>
              <li>• Advertising revenue</li>
              <li>• Premium merchant features</li>
              <li>• Data insights packages</li>
            </ul>
          </div>

          <div className="bg-slate-700/50 rounded-xl p-6">
            <h4 className="font-bold text-white mb-3">Revenue Split</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Nuqta</span>
                <span className="text-white font-bold">50%</span>
              </div>
              <div className="w-full bg-slate-600 rounded-full h-3">
                <div className="bg-[#c9a227] h-3 rounded-l-full" style={{ width: '50%' }}></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Co-Partner</span>
                <span className="text-[#c9a227] font-bold">50%</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-700/50 rounded-xl p-6">
            <h4 className="font-bold text-white mb-3">Distribution</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>• Quarterly distributions</li>
              <li>• Within 30 days of quarter end</li>
              <li>• Minimum: AED 1,000</li>
              <li>• Transparent reporting</li>
            </ul>
          </div>
        </div>

        {/* Example Economics */}
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
          <h4 className="font-bold text-emerald-400 mb-4">Example: Coffee & Cafe Vertical (Year 1)</h4>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-sm text-slate-400">Merchants</p>
              <p className="text-2xl font-black text-white">50</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-slate-400">Annual GMV</p>
              <p className="text-2xl font-black text-white">AED 5M</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-slate-400">Vertical Revenue (15%)</p>
              <p className="text-2xl font-black text-white">AED 750K</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-slate-400">Your Share (50%)</p>
              <p className="text-2xl font-black text-emerald-400">AED 375K</p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-4 text-center">
            *Illustrative example. Actual results depend on merchant acquisition and transaction volume.
          </p>
        </div>
      </div>

      {/* Governance */}
      <div className="bg-slate-800/30 rounded-xl p-8">
        <h3 className="text-2xl font-black text-white mb-6">Governance Structure</h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-[#c9a227] mb-4">Board Composition</h4>
            <div className="space-y-3">
              <div className="bg-slate-700/50 rounded-lg p-4">
                <p className="font-semibold text-white">2 Nuqta Representatives</p>
                <p className="text-sm text-slate-400">Platform strategy, technology decisions</p>
              </div>
              <div className="bg-[#c9a227]/10 rounded-lg p-4">
                <p className="font-semibold text-[#c9a227]">2 Co-Partner Representatives</p>
                <p className="text-sm text-slate-400">Category strategy, merchant relationships</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#c9a227] mb-4">Decision Rights</h4>
            <ul className="space-y-2">
              {[
                { decision: 'Day-to-day operations', who: 'Nuqta' },
                { decision: 'Merchant onboarding', who: 'Joint' },
                { decision: 'Marketing spend', who: 'Joint' },
                { decision: 'Major capital decisions', who: 'Unanimous' },
                { decision: 'Exit/Sale', who: 'Unanimous' },
              ].map((item) => (
                <li key={item.decision} className="flex justify-between items-center bg-slate-700/50 rounded-lg p-3">
                  <span className="text-slate-300 text-sm">{item.decision}</span>
                  <span className="text-[#c9a227] text-sm font-semibold">{item.who}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// VERTICALS TAB
// ============================================
function VerticalsTab() {
  const verticals = [
    {
      name: 'Coffee & Cafes',
      icon: '☕',
      status: 'available',
      potential: 'High',
      merchants: '200+ in UAE',
      avgTicket: 'AED 35-50',
      margin: '60-70%',
    },
    {
      name: 'Fitness & Gyms',
      icon: '💪',
      status: 'available',
      potential: 'High',
      merchants: '300+ in UAE',
      avgTicket: 'AED 200-500',
      margin: '50-60%',
    },
    {
      name: 'Beauty & Wellness',
      icon: '💄',
      status: 'available',
      potential: 'High',
      merchants: '500+ in UAE',
      avgTicket: 'AED 150-300',
      margin: '60-70%',
    },
    {
      name: 'Pet Services',
      icon: '🐕',
      status: 'available',
      potential: 'Medium',
      merchants: '100+ in UAE',
      avgTicket: 'AED 100-200',
      margin: '50-60%',
    },
    {
      name: 'Home Services',
      icon: '🏠',
      status: 'available',
      potential: 'High',
      merchants: '400+ in UAE',
      avgTicket: 'AED 200-500',
      margin: '40-50%',
    },
    {
      name: 'Auto Services',
      icon: '🚗',
      status: 'available',
      potential: 'High',
      merchants: '250+ in UAE',
      avgTicket: 'AED 300-1000',
      margin: '30-50%',
    },
    {
      name: 'Kids & Education',
      icon: '👶',
      status: 'available',
      potential: 'Medium',
      merchants: '200+ in UAE',
      avgTicket: 'AED 200-500',
      margin: '50-60%',
    },
    {
      name: 'Fashion Boutiques',
      icon: '👗',
      status: 'available',
      potential: 'High',
      merchants: '300+ in UAE',
      avgTicket: 'AED 200-500',
      margin: '50-70%',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-white mb-2">Available Brand Verticals</h2>
        <p className="text-slate-400">Choose your category and build your rewards empire</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {verticals.map((vertical) => (
          <div
            key={vertical.name}
            className={`rounded-xl p-6 border-2 transition-all hover:scale-[1.02] ${
              vertical.status === 'available'
                ? 'bg-slate-800/30 border-slate-700 hover:border-[#c9a227]/50'
                : 'bg-slate-800/10 border-slate-800 opacity-50'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{vertical.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-white">{vertical.name}</h3>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    vertical.status === 'available'
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {vertical.status === 'available' ? 'Available' : 'Taken'}
                  </span>
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                vertical.potential === 'High'
                  ? 'bg-[#c9a227]/20 text-[#c9a227]'
                  : 'bg-blue-500/20 text-blue-400'
              }`}>
                {vertical.potential} Potential
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-slate-500">Est. Merchants</p>
                <p className="text-sm font-semibold text-white">{vertical.merchants}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Avg Ticket</p>
                <p className="text-sm font-semibold text-white">{vertical.avgTicket}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Margin</p>
                <p className="text-sm font-semibold text-white">{vertical.margin}</p>
              </div>
            </div>

            {vertical.status === 'available' && (
              <button className="w-full mt-4 bg-[#c9a227]/20 text-[#c9a227] font-semibold py-2 rounded-lg hover:bg-[#c9a227]/30 transition-colors">
                Express Interest
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="bg-slate-800/30 rounded-xl p-6">
        <h3 className="font-bold text-white mb-4">Don&apos;t See Your Category?</h3>
        <p className="text-slate-400 mb-4">
          We&apos;re open to new vertical ideas. If you have deep expertise in a category not listed,
          let&apos;s discuss creating a new vertical together.
        </p>
        <a
          href="mailto:partners@nuqtaapp.com?subject=New Vertical Proposal"
          className="inline-flex items-center gap-2 text-[#c9a227] font-semibold hover:underline"
        >
          Propose a New Vertical
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

// ============================================
// MARKETING TAB - Merchant Marketing & Price Engineering
// ============================================
function MarketingTab() {
  const marketingServices = {
    online: [
      { name: 'Meta Ads', desc: 'Facebook & Instagram campaigns', icon: Globe },
      { name: 'WhatsApp Marketing', desc: 'Broadcast lists & catalogs', icon: MessageSquare },
      { name: 'Google Shopping', desc: 'Product listings & ads', icon: ShoppingCart },
      { name: 'Google My Business', desc: 'Profile optimization & SEO', icon: MapPin }
    ],
    offline: [
      { name: 'Auto Advertising', desc: 'Car wraps, taxi & rideshare ads', icon: Truck },
      { name: 'Bus Advertising', desc: 'Bus shelter & wrap campaigns', icon: Truck },
      { name: 'Gate Branding', desc: 'Society & building entrance ads', icon: Building2 }
    ],
    content: [
      { name: 'Reels & Videos', desc: 'Short-form video content', icon: Play },
      { name: 'UGC Creation', desc: 'User-generated campaigns', icon: Camera },
      { name: 'Influencer Marketing', desc: 'Barter & paid collabs', icon: Star }
    ]
  };

  const badgeLevels = [
    { level: 'Verified', color: 'blue', icon: BadgeCheck, requirements: ['Active account', 'Valid docs', '10+ transactions'] },
    { level: 'Trusted', color: 'green', icon: Award, requirements: ['3+ months active', '50+ transactions', '4.0+ rating'] },
    { level: 'Nuqta Preferred', color: 'purple', icon: Star, requirements: ['6+ months', '200+ transactions', '4.5+ rating'] },
    { level: 'Nuqta Signature', color: 'amber', icon: Crown, requirements: ['12+ months', '500+ transactions', '4.8+ rating'] }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-white mb-2">Marketing Services & Price Engineering</h2>
        <p className="text-slate-400">How we market merchants & the pricing strategy</p>
      </div>

      {/* Why We Do This */}
      <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8">
        <h3 className="text-2xl font-black text-white mb-4">Indirect Nuqta Promotion</h3>
        <p className="text-slate-300 mb-6">
          We market merchants extensively. Every merchant touchpoint becomes a Nuqta promotion.
          Users see &ldquo;Pay with Nuqta & Earn Cashback&rdquo; everywhere the merchant is advertised.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/5 rounded-lg p-4 text-center">
            <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <p className="text-white font-bold">1:20 Ratio</p>
            <p className="text-slate-400 text-sm">1 Marketing Manager per 20 merchants</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4 text-center">
            <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <p className="text-white font-bold">Merchant Funded</p>
            <p className="text-slate-400 text-sm">Merchants pay for their own ads</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4 text-center">
            <Target className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <p className="text-white font-bold">Nuqta Branded</p>
            <p className="text-slate-400 text-sm">All ads feature Nuqta integration</p>
          </div>
        </div>
      </div>

      {/* Marketing Channels */}
      <div className="bg-slate-800/30 rounded-xl p-8">
        <h3 className="text-xl font-bold text-white mb-6">Marketing Channels We Manage</h3>

        <div className="space-y-6">
          <div>
            <h4 className="text-[#c9a227] font-bold mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5" /> Online Marketing
            </h4>
            <div className="grid md:grid-cols-2 gap-3">
              {marketingServices.online.map((s, i) => (
                <div key={i} className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 flex items-center gap-3">
                  <s.icon className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-white font-medium">{s.name}</p>
                    <p className="text-slate-400 text-xs">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[#c9a227] font-bold mb-3 flex items-center gap-2">
              <Building2 className="w-5 h-5" /> Offline Marketing
            </h4>
            <div className="grid md:grid-cols-3 gap-3">
              {marketingServices.offline.map((s, i) => (
                <div key={i} className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3 flex items-center gap-3">
                  <s.icon className="w-5 h-5 text-orange-400" />
                  <div>
                    <p className="text-white font-medium">{s.name}</p>
                    <p className="text-slate-400 text-xs">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[#c9a227] font-bold mb-3 flex items-center gap-2">
              <Camera className="w-5 h-5" /> Content Creation
            </h4>
            <div className="grid md:grid-cols-3 gap-3">
              {marketingServices.content.map((s, i) => (
                <div key={i} className="bg-pink-500/10 border border-pink-500/20 rounded-lg p-3 flex items-center gap-3">
                  <s.icon className="w-5 h-5 text-pink-400" />
                  <div>
                    <p className="text-white font-medium">{s.name}</p>
                    <p className="text-slate-400 text-xs">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Price Engineering */}
      <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-8">
        <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-2">
          <Percent className="w-6 h-6 text-green-400" /> Price Engineering Strategy
        </h3>
        <p className="text-slate-300 mb-6">Airplane-model dynamic pricing to maximize brand value & Nuqta loyalty</p>

        <div className="grid md:grid-cols-4 gap-4 mb-6">
          {[
            { step: 1, action: 'Increase base price +20%', reason: 'Creates room for discounts' },
            { step: 2, action: 'Offer 20% Nuqta discount', reason: 'Users feel exclusive value' },
            { step: 3, action: 'Maintain brand value', reason: 'Higher price = premium feel' },
            { step: 4, action: 'Nuqta users stay loyal', reason: 'They get exclusive access' }
          ].map((s) => (
            <div key={s.step} className="bg-white/5 rounded-lg p-4">
              <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold mb-2">
                {s.step}
              </div>
              <p className="text-white font-medium text-sm">{s.action}</p>
              <p className="text-slate-400 text-xs">{s.reason}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 rounded-lg p-4">
          <p className="text-green-400 font-bold mb-2">Dynamic Discount Range: 5% - 30%</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400 text-sm">Low demand</span>
            <div className="flex-1 h-3 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full" />
            <span className="text-slate-400 text-sm">High demand</span>
          </div>
          <p className="text-slate-400 text-xs mt-2">Like airline pricing - discounts adjust based on demand</p>
        </div>
      </div>

      {/* Nuqta Boards */}
      <div className="bg-slate-800/30 rounded-xl p-8">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <QrCode className="w-6 h-6 text-[#c9a227]" /> Nuqta In-Store Boards
        </h3>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {[
            { type: 'QR Code Board', desc: 'QR to pay at store counter', place: 'Checkout area' },
            { type: 'Wall Sticker', desc: 'Stickers for walls/doors/windows', place: 'High visibility' },
            { type: 'Circle Board', desc: 'Outdoor circular signage', place: 'Shop entrance' }
          ].map((b, i) => (
            <div key={i} className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg p-4 text-center">
              <QrCode className="w-10 h-10 text-[#c9a227] mx-auto mb-2" />
              <p className="text-white font-bold">{b.type}</p>
              <p className="text-slate-400 text-sm">{b.desc}</p>
              <p className="text-[#c9a227] text-xs mt-1">📍 {b.place}</p>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <p className="text-slate-400 text-sm font-medium">Board Messages:</p>
          {['We Accept Nuqta', 'Pay with Nuqta & Earn Cashback Instantly', 'Use Nuqta and Get Instant Cashback'].map((msg, i) => (
            <div key={i} className="bg-[#c9a227]/10 border border-[#c9a227]/20 rounded-lg p-3">
              <p className="text-white font-medium">&ldquo;{msg}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>

      {/* Merchant Badge Levels */}
      <div className="bg-slate-800/30 rounded-xl p-8">
        <h3 className="text-xl font-bold text-white mb-6">Merchant Verification Badges</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {badgeLevels.map((badge, i) => (
            <div key={i} className={`bg-${badge.color}-500/10 border border-${badge.color}-500/30 rounded-xl p-4`}>
              <div className="flex items-center gap-2 mb-3">
                <badge.icon className={`w-6 h-6 text-${badge.color}-400`} />
                <span className={`text-${badge.color}-400 font-bold`}>{badge.level}</span>
              </div>
              <div className="space-y-1">
                {badge.requirements.map((req, j) => (
                  <div key={j} className="flex items-center gap-2 text-xs text-slate-400">
                    <CheckCircle2 className="w-3 h-3 text-green-400" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// FLEET STALLS TAB - Pop-up Sales & Product Categories
// ============================================
function FleetStallsTab() {
  const productCategories = [
    {
      category: 'Food',
      icon: '🍔',
      color: 'orange',
      types: ['Food Truck', 'Momos', 'Burgers & Sliders', 'Pizza', 'Chaat', 'Desserts', 'Homemade Pickles', 'Bakery']
    },
    {
      category: 'Drinks',
      icon: '🧋',
      color: 'cyan',
      types: ['Mocktails', 'Fresh Juice & Sugarcane', 'Coconut Water', 'Bubble Tea/Boba', 'Cold Brew Coffee', 'Energy Drinks']
    },
    {
      category: 'Fashion & Accessories',
      icon: '👗',
      color: 'pink',
      types: ['Handmade Jewelry', 'Streetwear/Oversized Tees', 'Perfumes & Attars', 'Home Fragrance', 'Organic Skincare', 'Accessories', 'Merchandise', 'Footwear']
    },
    {
      category: 'Lifestyle',
      icon: '🎁',
      color: 'purple',
      types: ['Gifting', 'Pet Care', 'Baby & Kids Essentials']
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-white mb-2">Fleet Stalls Program</h2>
        <p className="text-slate-400">Pop-up sales at malls, events, universities & societies</p>
      </div>

      {/* Sales Channels */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-xl p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-[#c9a227]/20 rounded-xl flex items-center justify-center">
              <Store className="w-6 h-6 text-[#c9a227]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Nuqta App</h3>
              <p className="text-slate-400">Primary digital sales channel</p>
            </div>
          </div>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" />All products listed in app</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" />10-15% Nuqta Coin cashback</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" />Delivery & pickup options</li>
          </ul>
        </div>

        <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
              <Truck className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Fleet Stalls</h3>
              <p className="text-slate-400">Physical pop-up presence</p>
            </div>
          </div>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" />Weekend pop-ups (Fri-Sun)</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" />Multiple locations simultaneously</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" />Accept Nuqta payments</li>
          </ul>
        </div>
      </div>

      {/* Locations */}
      <div className="bg-slate-800/30 rounded-xl p-8">
        <h3 className="text-xl font-bold text-white mb-6">Stall Locations</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { name: 'Malls', desc: 'High footfall shopping centers', icon: ShoppingCart },
            { name: 'Events', desc: 'Festivals, exhibitions, concerts', icon: Calendar },
            { name: 'Universities', desc: 'Campus food courts & events', icon: Building2 },
            { name: 'Societies', desc: 'Residential community markets', icon: Building2 }
          ].map((loc, i) => (
            <div key={i} className="bg-white/5 rounded-xl p-4 text-center">
              <loc.icon className="w-8 h-8 text-[#c9a227] mx-auto mb-2" />
              <p className="text-white font-bold">{loc.name}</p>
              <p className="text-slate-400 text-xs">{loc.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Product Categories */}
      <div className="bg-slate-800/30 rounded-xl p-8">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Package className="w-6 h-6 text-[#c9a227]" /> Co-Partner Product Categories
        </h3>
        <p className="text-slate-400 mb-6">
          We want to partner with famous influencers and young founders in these categories:
        </p>

        <div className="space-y-6">
          {productCategories.map((cat, i) => (
            <div key={i} className={`bg-${cat.color}-500/10 border border-${cat.color}-500/20 rounded-xl p-6`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{cat.icon}</span>
                <h4 className="text-xl font-bold text-white">{cat.category}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.types.map((type, j) => (
                  <span key={j} className="bg-white/10 text-slate-300 px-3 py-1 rounded-full text-sm">
                    {type}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue Model for Fleet */}
      <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-2xl p-8">
        <h3 className="text-xl font-bold text-white mb-6">Fleet Stall Revenue Model</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 rounded-lg p-4">
            <p className="text-blue-400 font-bold mb-2">For Nuqta</p>
            <p className="text-white">General Merchant + Privilege Model</p>
            <p className="text-slate-400 text-sm">0% commission for Co-Partner brands</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <p className="text-green-400 font-bold mb-2">For Users</p>
            <p className="text-white">10-15% Nuqta Coins</p>
            <p className="text-slate-400 text-sm">Exclusive access to Co-Partner products</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <p className="text-purple-400 font-bold mb-2">For Co-Partner</p>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• Nuqta investment</li>
              <li>• Office space</li>
              <li>• Marketing support</li>
              <li>• Finance & salary</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Zero CAC Strategy */}
      <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/30 rounded-2xl p-8">
        <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-2">
          🎯 Zero CAC User Acquisition Strategy
        </h3>
        <p className="text-slate-300 mb-6">
          100 influencer/founder Co-Partners = Millions of organic users at AED 0 CAC
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
            <h4 className="text-red-400 font-bold mb-3">❌ Traditional Model</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>• Pay AED 15-50 per user (ads)</li>
              <li>• One-time transaction</li>
              <li>• User forgets brand</li>
              <li>• High churn rate</li>
            </ul>
          </div>
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
            <h4 className="text-green-400 font-bold mb-3">✅ Co-Partner Model</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• AED 0 CAC</li>
              <li>• Lifetime content stream</li>
              <li>• Users follow founder journey</li>
              <li>• Deep loyalty (trust transfer)</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/5 rounded-xl p-6">
          <h4 className="text-white font-bold mb-4">The Math: 100 Influencer Co-Partners</h4>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-3xl font-black text-green-400">100</p>
              <p className="text-slate-400 text-sm">Co-Partners</p>
            </div>
            <div>
              <p className="text-3xl font-black text-blue-400">1-5M</p>
              <p className="text-slate-400 text-sm">Potential Reach</p>
            </div>
            <div>
              <p className="text-3xl font-black text-purple-400">100K+</p>
              <p className="text-slate-400 text-sm">Daily Impressions</p>
            </div>
            <div>
              <p className="text-3xl font-black text-[#c9a227]">AED 0</p>
              <p className="text-slate-400 text-sm">CAC</p>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-slate-800/50 rounded-lg p-4">
          <p className="text-slate-300 text-sm">
            <span className="text-green-400 font-bold">How it works:</span> Each founder creates daily content
            about their business journey. Every post shows Nuqta payment/QR. Their followers see Nuqta
            daily for free. 5% convert = thousands of users at AED 0 CAC. The AED 50K investment
            generates revenue anyway - marketing is a bonus!
          </p>
        </div>
      </div>

      {/* Influencer Partnership */}
      <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/30 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-black text-white mb-4">🌟 Influencer & Founder Partnerships</h3>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
          We want to partner with famous regional influencers and young entrepreneurial founders
          who can build authentic content about their business journey while selling via Nuqta.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {['Partner with famous influencers', 'Collaborate with young founders', 'Build authentic ambassadors', 'Content-first partnerships'].map((goal, i) => (
            <span key={i} className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm">
              {goal}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// PROCESS TAB
// ============================================
function ProcessTab() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-white mb-2">How to Become a Co-Partner</h2>
        <p className="text-slate-400">From application to launch in 6-8 weeks</p>
      </div>

      <div className="space-y-6">
        {[
          {
            step: 1,
            title: 'Application',
            duration: 'Week 1',
            description: 'Submit your application with background, target vertical, and investment readiness.',
            tasks: [
              'Complete online application form',
              'Share relevant industry experience',
              'Indicate preferred vertical(s)',
              'Provide proof of funds (AED 50K)',
            ],
          },
          {
            step: 2,
            title: 'Evaluation & Interview',
            duration: 'Week 2',
            description: 'Nuqta team reviews application and conducts interview to assess fit.',
            tasks: [
              'Application review by partnership team',
              'Video call with founders',
              'Discuss vertical strategy',
              'Mutual due diligence',
            ],
          },
          {
            step: 3,
            title: 'Agreement & Investment',
            duration: 'Week 3-4',
            description: 'Sign partnership agreement and make first tranche payment.',
            tasks: [
              'Review and sign Co-Partner Agreement',
              'Transfer AED 25,000 (Tranche 1)',
              'Receive onboarding materials',
              'Access to Nuqta partner portal',
            ],
          },
          {
            step: 4,
            title: 'Vertical Setup',
            duration: 'Week 4-6',
            description: 'Configure your brand vertical and prepare for merchant onboarding.',
            tasks: [
              'Define vertical branding & positioning',
              'Set up merchant dashboard',
              'Create onboarding materials',
              'Prepare marketing assets',
            ],
          },
          {
            step: 5,
            title: 'Merchant Acquisition',
            duration: 'Week 5-7',
            description: 'Onboard initial merchants leveraging your industry connections.',
            tasks: [
              'Target 10-20 launch merchants',
              'Personal outreach to contacts',
              'Merchant training sessions',
              'Test transactions',
            ],
          },
          {
            step: 6,
            title: 'Launch',
            duration: 'Week 8',
            description: 'Officially launch your vertical on the Nuqta platform.',
            tasks: [
              'Transfer AED 25,000 (Tranche 2)',
              'Marketing campaign launch',
              'Press/social media announcement',
              'Monitor initial performance',
            ],
          },
        ].map((phase, index) => (
          <div key={phase.step} className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-[#c9a227] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-black font-black text-xl">{phase.step}</span>
              </div>
              {index < 5 && <div className="w-0.5 h-full bg-[#c9a227]/30 mt-2" />}
            </div>
            <div className="flex-1 pb-6">
              <div className="bg-slate-800/50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                  <span className="text-[#c9a227] text-sm font-semibold">{phase.duration}</span>
                </div>
                <p className="text-slate-400 mb-4">{phase.description}</p>
                <div className="grid md:grid-cols-2 gap-2">
                  {phase.tasks.map((task) => (
                    <div key={task} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      {task}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-[#c9a227]/10 to-amber-500/10 border-2 border-[#c9a227]/30 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-black text-white mb-4">Ready to Apply?</h3>
        <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
          Join the next generation of retail entrepreneurs. Limited verticals available.
        </p>
        <a
          href="mailto:partners@nuqtaapp.com?subject=Co-Partner Application"
          className="inline-flex items-center gap-2 bg-[#c9a227] text-black font-bold px-8 py-4 rounded-full hover:bg-[#d4af37] transition-colors"
        >
          Start Application
          <ChevronRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}

// ============================================
// FAQ TAB
// ============================================
function FAQTab() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What exactly am I investing in?',
      answer: 'You are investing in a dedicated brand vertical/sub-entity that operates under the Nuqta ecosystem. You own 50% equity in this vertical, which includes all revenue generated from merchants in your category (e.g., Coffee & Cafes, Fitness, Beauty, etc.).',
    },
    {
      question: 'What is the minimum investment?',
      answer: 'The total investment is AED 50,000, paid in two tranches: AED 25,000 upon signing and AED 25,000 upon vertical launch. No additional capital calls are planned unless mutually agreed for expansion.',
    },
    {
      question: 'How do I make money?',
      answer: 'Revenue comes from merchant commissions (15-20% of transactions), advertising, and premium merchant features. You receive 50% of all revenue generated in your vertical, distributed quarterly.',
    },
    {
      question: 'What is my role as a Co-Partner?',
      answer: 'Your primary role is leveraging your industry expertise and connections to onboard merchants. Nuqta handles all technology, operations, payments, and customer support. You focus on strategic direction and merchant relationships.',
    },
    {
      question: 'Is the category exclusive?',
      answer: 'Yes. You get exclusive rights to your brand vertical in UAE for the duration of the partnership. Nuqta will not onboard another co-partner in the same category.',
    },
    {
      question: 'What is the lock-up period?',
      answer: 'The lock-up period is 24 months from the investment date. After this period, either party can exit with proper notice, subject to Right of First Refusal provisions.',
    },
    {
      question: 'Can I exit my investment?',
      answer: 'After the 24-month lock-up, you may sell your stake. Nuqta has Right of First Refusal on your shares. If Nuqta sells the company or your vertical, you have tag-along rights to participate.',
    },
    {
      question: 'What happens if the vertical underperforms?',
      answer: 'There are no minimum performance guarantees. However, both parties are incentivized to grow the vertical. If consistently underperforming, we work together on improvement strategies or consider vertical consolidation.',
    },
    {
      question: 'What support does Nuqta provide?',
      answer: 'Nuqta provides: complete platform infrastructure, payment processing, customer support, merchant dashboard tools, marketing co-funding, data analytics, and operational support. You never need to build technology or handle day-to-day operations.',
    },
    {
      question: 'How transparent is the revenue reporting?',
      answer: 'Completely transparent. You have 24/7 access to the partner dashboard showing real-time transactions, commission calculations, and cumulative revenue. Quarterly reports are provided 15 days before distribution.',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-white mb-2">Frequently Asked Questions</h2>
        <p className="text-slate-400">Everything you need to know about the Co-Partner program</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-slate-800/30 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors"
            >
              <span className="font-semibold text-white">{faq.question}</span>
              <ChevronRight
                className={`w-5 h-5 text-[#c9a227] transition-transform ${
                  openFaq === index ? 'rotate-90' : ''
                }`}
              />
            </button>
            {openFaq === index && (
              <div className="px-6 pb-4">
                <p className="text-slate-400">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact */}
      <div className="bg-slate-800/30 rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold text-white mb-4">Still Have Questions?</h3>
        <p className="text-slate-400 mb-6">
          Our partnership team is happy to discuss the program in detail.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="mailto:partners@nuqtaapp.com"
            className="inline-flex items-center justify-center gap-2 bg-[#c9a227] text-black font-bold px-6 py-3 rounded-full hover:bg-[#d4af37] transition-colors"
          >
            Email Us
          </a>
          <a
            href="/contracts"
            className="inline-flex items-center justify-center gap-2 border-2 border-[#c9a227] text-[#c9a227] font-bold px-6 py-3 rounded-full hover:bg-[#c9a227]/10 transition-colors"
          >
            View Contract Template
          </a>
        </div>
      </div>
    </div>
  );
}
