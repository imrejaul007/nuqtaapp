'use client';

import React, { useState } from 'react';
import {
  Smartphone,
  Download,
  UserPlus,
  QrCode,
  Coins,
  Gift,
  Bell,
  Star,
  ChevronRight,
  CheckCircle2,
  Zap,
  Heart,
  TrendingUp,
  Users,
  Target,
  Sparkles
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

export default function UserJourneyPage() {
  const [activeTab, setActiveTab] = useState<'journey' | 'onboarding' | 'engagement' | 'retention'>('journey');

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0a1628] via-[#1a2942] to-[#0a1628] border-b border-[#c9a227]/20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-center gap-3 mb-4">
            <Smartphone className="w-8 h-8 text-[#c9a227]" />
            <span className="text-[#c9a227] font-semibold">Product Design</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            User Journey & Onboarding
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            From first download to loyal advocate - every step of the Nuqta user experience
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-0 z-50 bg-[#0a1628]/95 backdrop-blur border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-2">
            {[
              { id: 'journey', label: 'Full Journey', icon: Target },
              { id: 'onboarding', label: 'Onboarding', icon: UserPlus },
              { id: 'engagement', label: 'Engagement', icon: Zap },
              { id: 'retention', label: 'Retention', icon: Heart },
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
        {activeTab === 'journey' && <JourneyTab />}
        {activeTab === 'onboarding' && <OnboardingTab />}
        {activeTab === 'engagement' && <EngagementTab />}
        {activeTab === 'retention' && <RetentionTab />}
      </div>
    </div>
  );
}

// ============================================
// JOURNEY TAB
// ============================================
function JourneyTab() {
  const journeySteps = [
    {
      phase: 'Awareness',
      icon: Sparkles,
      color: 'purple',
      touchpoints: [
        { name: 'Social Media Ad', desc: 'TikTok/Instagram showing savings' },
        { name: 'Friend Referral', desc: '"Get AED 10 free" share' },
        { name: 'Merchant Display', desc: 'QR code at checkout counter' },
        { name: 'Event Activation', desc: 'Global Village, exhibitions' },
      ],
    },
    {
      phase: 'Acquisition',
      icon: Download,
      color: 'blue',
      touchpoints: [
        { name: 'App Store Download', desc: 'iOS/Android install' },
        { name: 'Quick Signup', desc: 'Phone + OTP (30 seconds)' },
        { name: 'Welcome Bonus', desc: '100 coins credited instantly' },
        { name: 'Profile Setup', desc: 'Name, preferences (optional)' },
      ],
    },
    {
      phase: 'Activation',
      icon: Zap,
      color: 'emerald',
      touchpoints: [
        { name: 'First Transaction', desc: 'Guided to nearby merchant' },
        { name: 'QR Scan Tutorial', desc: 'How to pay with Nuqta' },
        { name: 'First Reward', desc: 'Coins earned, celebration' },
        { name: 'First Redemption', desc: 'Use coins on 2nd purchase' },
      ],
    },
    {
      phase: 'Engagement',
      icon: TrendingUp,
      color: 'amber',
      touchpoints: [
        { name: 'Push Notifications', desc: 'Nearby deals, flash offers' },
        { name: 'Weekly Challenges', desc: 'Visit 3 merchants, get bonus' },
        { name: 'Category Expansion', desc: 'Try salon after cafe' },
        { name: 'Streak Building', desc: '7-day activity bonus' },
      ],
    },
    {
      phase: 'Retention',
      icon: Heart,
      color: 'pink',
      touchpoints: [
        { name: 'Tier Progression', desc: 'Bronze → Silver → Gold' },
        { name: 'Exclusive Deals', desc: 'VIP-only merchant offers' },
        { name: 'Birthday Rewards', desc: 'Special bonus on birthday' },
        { name: 'Milestone Bonuses', desc: '100th transaction reward' },
      ],
    },
    {
      phase: 'Advocacy',
      icon: Users,
      color: 'cyan',
      touchpoints: [
        { name: 'Referral Program', desc: 'Invite friends, earn coins' },
        { name: 'Social Sharing', desc: 'Share savings achievements' },
        { name: 'Reviews', desc: 'Rate merchants, get rewards' },
        { name: 'Ambassador Program', desc: 'Top users get perks' },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {/* Journey Overview */}
      <div className="bg-gradient-to-br from-[#c9a227]/10 to-amber-500/10 border border-[#c9a227]/30 rounded-xl p-8">
        <h2 className="text-2xl font-black text-[#c9a227] mb-4">The Nuqta User Journey</h2>
        <p className="text-slate-300 mb-6">
          From first awareness to loyal advocate, every interaction is designed to deliver value
          and build habit-forming engagement.
        </p>

        <div className="grid md:grid-cols-6 gap-4">
          {journeySteps.map((step, index) => (
            <div key={step.phase} className="text-center">
              <div className={`w-12 h-12 mx-auto rounded-full bg-${step.color}-500/20 flex items-center justify-center mb-2`}>
                <step.icon className={`w-6 h-6 text-${step.color}-400`} />
              </div>
              <p className="text-sm font-bold text-white">{step.phase}</p>
              {index < 5 && (
                <ChevronRight className="w-4 h-4 text-slate-600 mx-auto mt-2 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Journey */}
      <div className="space-y-6">
        {journeySteps.map((step, index) => (
          <div key={step.phase} className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className={`w-14 h-14 rounded-full bg-${step.color}-500/20 flex items-center justify-center flex-shrink-0`}>
                <step.icon className={`w-7 h-7 text-${step.color}-400`} />
              </div>
              {index < journeySteps.length - 1 && (
                <div className={`w-0.5 h-full bg-${step.color}-500/30 mt-2`} />
              )}
            </div>
            <div className="flex-1 pb-6">
              <div className={`bg-${step.color}-500/10 border border-${step.color}-500/30 rounded-xl p-6`}>
                <h3 className={`text-xl font-black text-${step.color}-400 mb-4`}>{step.phase}</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {step.touchpoints.map((tp) => (
                    <div key={tp.name} className="bg-slate-800/50 rounded-lg p-3">
                      <p className="font-semibold text-white text-sm">{tp.name}</p>
                      <p className="text-xs text-slate-400">{tp.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Key Metrics */}
      <div className="bg-slate-800/30 rounded-xl p-8">
        <h3 className="text-xl font-black text-white mb-6">Journey Success Metrics</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { metric: 'Download → Signup', target: '>80%', desc: 'Conversion rate' },
            { metric: 'Signup → First Txn', target: '>50%', desc: 'Within 7 days' },
            { metric: 'D7 Retention', target: '>40%', desc: 'Week 1 return' },
            { metric: 'D30 Retention', target: '>25%', desc: 'Month 1 return' },
            { metric: 'Referral Rate', target: '>15%', desc: 'Users who refer' },
            { metric: 'Multi-category', target: '>40%', desc: '2+ categories' },
            { metric: 'NPS Score', target: '>50', desc: 'Promoter score' },
            { metric: 'Avg Session', target: '>3 min', desc: 'Time in app' },
          ].map((item) => (
            <div key={item.metric} className="bg-slate-700/50 rounded-lg p-4 text-center">
              <p className="text-2xl font-black text-[#c9a227]">{item.target}</p>
              <p className="text-sm font-semibold text-white">{item.metric}</p>
              <p className="text-xs text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// ONBOARDING TAB
// ============================================
function OnboardingTab() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-white mb-2">Onboarding Flow</h2>
        <p className="text-slate-400">30-second signup to first reward</p>
      </div>

      {/* Onboarding Steps */}
      <div className="grid md:grid-cols-5 gap-4">
        {[
          {
            step: 1,
            title: 'Download',
            screen: 'App Store',
            time: '~30 sec',
            details: ['App Store / Play Store', 'Small app size (~50MB)', 'Quick install'],
          },
          {
            step: 2,
            title: 'Phone Entry',
            screen: 'Welcome',
            time: '~5 sec',
            details: ['+971 auto-detect', 'Clean, simple UI', 'Privacy assurance'],
          },
          {
            step: 3,
            title: 'OTP Verify',
            screen: 'Verification',
            time: '~10 sec',
            details: ['SMS auto-read', '6-digit code', 'Resend option'],
          },
          {
            step: 4,
            title: 'Welcome Bonus',
            screen: 'Celebration',
            time: '~5 sec',
            details: ['100 coins credited', 'Confetti animation', 'Value explanation'],
          },
          {
            step: 5,
            title: 'First Action',
            screen: 'Home',
            time: '~10 sec',
            details: ['Nearby merchants', 'Tutorial tooltip', 'CTA to explore'],
          },
        ].map((item) => (
          <div key={item.step} className="bg-slate-800/50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-[#c9a227] rounded-full flex items-center justify-center text-black font-black">
                {item.step}
              </div>
              <span className="text-xs text-slate-500">{item.time}</span>
            </div>
            <h3 className="font-bold text-white mb-1">{item.title}</h3>
            <p className="text-xs text-[#c9a227] mb-3">{item.screen}</p>
            <ul className="space-y-1">
              {item.details.map((d) => (
                <li key={d} className="text-xs text-slate-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Welcome Bonus Strategy */}
      <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-xl p-8">
        <h3 className="text-xl font-black text-emerald-400 mb-6">Welcome Bonus Strategy</h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800/50 rounded-lg p-4">
            <Coins className="w-8 h-8 text-emerald-400 mb-3" />
            <h4 className="font-bold text-white mb-2">100 Welcome Coins</h4>
            <p className="text-sm text-slate-400">
              = AED 1 value. Enough for a small discount, creates first "win".
            </p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <Gift className="w-8 h-8 text-emerald-400 mb-3" />
            <h4 className="font-bold text-white mb-2">Referral Bonus</h4>
            <p className="text-sm text-slate-400">
              +100 coins if referred. Both referrer and referee get bonus.
            </p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <Target className="w-8 h-8 text-emerald-400 mb-3" />
            <h4 className="font-bold text-white mb-2">First Transaction</h4>
            <p className="text-sm text-slate-400">
              2x coins on first purchase. Encourages immediate action.
            </p>
          </div>
        </div>
      </div>

      {/* First Transaction Flow */}
      <div className="bg-slate-800/30 rounded-xl p-8">
        <h3 className="text-xl font-black text-white mb-6">First Transaction Flow</h3>

        <div className="space-y-4">
          {[
            { step: 1, title: 'Open App', desc: 'User opens Nuqta, sees nearby merchants on map/list', screen: 'Home' },
            { step: 2, title: 'Select Merchant', desc: 'Taps on merchant, sees current offers and coin rates', screen: 'Merchant Detail' },
            { step: 3, title: 'At Checkout', desc: 'Opens "Pay with Nuqta" to show QR code', screen: 'Payment' },
            { step: 4, title: 'Merchant Scans', desc: 'Cashier scans QR, enters amount, processes payment', screen: 'Processing' },
            { step: 5, title: 'Reward Credited', desc: 'Coins appear with celebration, receipt saved', screen: 'Success' },
            { step: 6, title: 'Next Action', desc: 'Prompt to visit another merchant or share', screen: 'Post-Transaction' },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-4 bg-slate-700/30 rounded-lg p-4">
              <div className="w-10 h-10 bg-[#c9a227]/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#c9a227] font-bold">{item.step}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white">{item.title}</h4>
                  <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">{item.screen}</span>
                </div>
                <p className="text-sm text-slate-400 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Onboarding Checklist */}
      <div className="bg-slate-800/30 rounded-xl p-8">
        <h3 className="text-xl font-black text-white mb-6">New User Checklist (Gamified)</h3>
        <p className="text-slate-400 mb-4">
          Users see a progress checklist encouraging them to complete key actions within first 7 days.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            { task: 'Complete profile', reward: '+20 coins', status: 'easy' },
            { task: 'Enable notifications', reward: '+10 coins', status: 'easy' },
            { task: 'Make first transaction', reward: '+50 coins', status: 'key' },
            { task: 'Visit 3 different merchants', reward: '+100 coins', status: 'challenge' },
            { task: 'Refer a friend', reward: '+100 coins', status: 'growth' },
            { task: 'Leave first review', reward: '+30 coins', status: 'engagement' },
          ].map((item) => (
            <div key={item.task} className="flex items-center justify-between bg-slate-700/50 rounded-lg p-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-slate-600" />
                <span className="text-sm text-white">{item.task}</span>
              </div>
              <span className="text-xs text-[#c9a227] font-semibold">{item.reward}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// ENGAGEMENT TAB
// ============================================
function EngagementTab() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-white mb-2">Engagement Mechanics</h2>
        <p className="text-slate-400">Keeping users active and spending</p>
      </div>

      {/* Push Notification Strategy */}
      <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/30 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <Bell className="w-8 h-8 text-blue-400" />
          <h3 className="text-xl font-black text-blue-400">Push Notification Strategy</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-white mb-4">Notification Types</h4>
            <div className="space-y-3">
              {[
                { type: 'Nearby Deals', freq: 'Location-triggered', example: '"☕ 2x coins at Costa Coffee - 200m away"' },
                { type: 'Flash Offers', freq: 'Time-limited', example: '"⚡ 3x coins for next 2 hours at Sephora"' },
                { type: 'Streak Reminder', freq: 'Daily', example: '"🔥 Keep your 5-day streak! Visit any merchant today"' },
                { type: 'Coin Expiry', freq: 'Weekly', example: '"💰 500 coins expiring in 7 days - use them!"' },
                { type: 'New Merchant', freq: 'Weekly', example: '"🆕 Tim Hortons just joined! Get 3x coins this week"' },
              ].map((notif) => (
                <div key={notif.type} className="bg-slate-800/50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-white text-sm">{notif.type}</span>
                    <span className="text-xs text-blue-400">{notif.freq}</span>
                  </div>
                  <p className="text-xs text-slate-400 italic">{notif.example}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Best Practices</h4>
            <ul className="space-y-3">
              {[
                'Max 2-3 notifications per day',
                'Personalized based on behavior',
                'Location-based relevance',
                'Clear value proposition',
                'Easy opt-out categories',
                'A/B test messaging',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Gamification Elements */}
      <div className="bg-slate-800/30 rounded-xl p-8">
        <h3 className="text-xl font-black text-white mb-6">Gamification Elements</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Streaks */}
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6">
            <h4 className="font-bold text-orange-400 mb-4">🔥 Streaks</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• 3-day streak: +10% coins</li>
              <li>• 7-day streak: +20% coins</li>
              <li>• 30-day streak: +50% coins</li>
              <li>• Streak freeze (1 per week)</li>
            </ul>
          </div>

          {/* Challenges */}
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
            <h4 className="font-bold text-purple-400 mb-4">🎯 Weekly Challenges</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• Visit 5 merchants: 200 coins</li>
              <li>• Try new category: 100 coins</li>
              <li>• Spend AED 500: 150 coins</li>
              <li>• Refer 2 friends: 300 coins</li>
            </ul>
          </div>

          {/* Achievements */}
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
            <h4 className="font-bold text-emerald-400 mb-4">🏆 Achievements</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• First Timer: 1st transaction</li>
              <li>• Explorer: 10 merchants</li>
              <li>• Big Spender: AED 5K GMV</li>
              <li>• Social Butterfly: 5 referrals</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Personalization */}
      <div className="bg-slate-800/30 rounded-xl p-8">
        <h3 className="text-xl font-black text-white mb-6">Personalization Engine</h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-[#c9a227] mb-4">Data Points Collected</h4>
            <ul className="space-y-2">
              {[
                'Transaction history & frequency',
                'Merchant categories visited',
                'Time of day preferences',
                'Location patterns',
                'Average spend per category',
                'Response to notifications',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-[#c9a227]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#c9a227] mb-4">Personalized Outputs</h4>
            <ul className="space-y-2">
              {[
                'Custom merchant recommendations',
                'Relevant push notifications',
                'Personalized home feed',
                'Category-specific challenges',
                'Optimal notification timing',
                'Tailored reward offers',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {item}
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
// RETENTION TAB
// ============================================
function RetentionTab() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-white mb-2">Retention & Loyalty</h2>
        <p className="text-slate-400">Building long-term user relationships</p>
      </div>

      {/* Tier System */}
      <div className="bg-gradient-to-br from-[#c9a227]/10 to-amber-500/10 border border-[#c9a227]/30 rounded-xl p-8">
        <h3 className="text-xl font-black text-[#c9a227] mb-6">Loyalty Tier System</h3>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            {
              tier: 'Bronze',
              color: 'orange',
              requirement: 'New Users',
              benefits: ['Base coin rate', 'Standard offers', 'Basic support'],
              icon: '🥉',
            },
            {
              tier: 'Silver',
              color: 'slate',
              requirement: 'AED 1,000 GMV',
              benefits: ['+10% coins', 'Early access deals', 'Priority support'],
              icon: '🥈',
            },
            {
              tier: 'Gold',
              color: 'amber',
              requirement: 'AED 5,000 GMV',
              benefits: ['+20% coins', 'Exclusive merchants', 'Birthday 2x bonus'],
              icon: '🥇',
            },
            {
              tier: 'Platinum',
              color: 'purple',
              requirement: 'AED 15,000 GMV',
              benefits: ['+30% coins', 'VIP experiences', 'Concierge service'],
              icon: '💎',
            },
          ].map((t) => (
            <div key={t.tier} className={`bg-${t.color}-500/10 border border-${t.color}-500/30 rounded-xl p-4`}>
              <div className="text-3xl mb-2">{t.icon}</div>
              <h4 className={`font-black text-${t.color}-400 mb-1`}>{t.tier}</h4>
              <p className="text-xs text-slate-500 mb-3">{t.requirement}</p>
              <ul className="space-y-1">
                {t.benefits.map((b) => (
                  <li key={b} className="text-xs text-slate-300 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Win-back Campaigns */}
      <div className="bg-slate-800/30 rounded-xl p-8">
        <h3 className="text-xl font-black text-white mb-6">Win-back Campaigns</h3>
        <p className="text-slate-400 mb-6">
          Automated campaigns to re-engage users who haven&apos;t transacted recently.
        </p>

        <div className="space-y-4">
          {[
            {
              trigger: '7 Days Inactive',
              action: 'Push notification',
              offer: '"We miss you! Here\'s 50 bonus coins for your next visit"',
              channel: 'Push + In-app',
            },
            {
              trigger: '14 Days Inactive',
              action: 'Email + Push',
              offer: '"2x coins on your next 3 transactions - this week only!"',
              channel: 'Email + Push',
            },
            {
              trigger: '30 Days Inactive',
              action: 'Exclusive offer',
              offer: '"VIP comeback: 3x coins + AED 10 credit for returning"',
              channel: 'SMS + Email',
            },
            {
              trigger: '60 Days Inactive',
              action: 'Last attempt',
              offer: '"Account about to expire! Claim 200 coins before they\'re gone"',
              channel: 'All channels',
            },
          ].map((campaign) => (
            <div key={campaign.trigger} className="bg-slate-700/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-white">{campaign.trigger}</span>
                <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">{campaign.channel}</span>
              </div>
              <p className="text-sm text-slate-400 italic">{campaign.offer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Special Occasions */}
      <div className="bg-slate-800/30 rounded-xl p-8">
        <h3 className="text-xl font-black text-white mb-6">Special Occasion Rewards</h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-4">
            <h4 className="font-bold text-pink-400 mb-3">🎂 Birthday</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• 2x coins all day</li>
              <li>• Free birthday treat from partner</li>
              <li>• Special badge in profile</li>
            </ul>
          </div>

          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
            <h4 className="font-bold text-emerald-400 mb-3">📅 Anniversary</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• 1-year: 500 bonus coins</li>
              <li>• 2-year: 1000 bonus coins</li>
              <li>• Exclusive anniversary badge</li>
            </ul>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
            <h4 className="font-bold text-amber-400 mb-3">🎉 Milestones</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• 50th transaction: 200 coins</li>
              <li>• 100th transaction: 500 coins</li>
              <li>• AED 10K lifetime: VIP status</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Referral Program */}
      <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-8">
        <h3 className="text-xl font-black text-cyan-400 mb-6">Referral Program</h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-white mb-4">How It Works</h4>
            <div className="space-y-3">
              {[
                { step: 1, text: 'User shares unique referral link/code' },
                { step: 2, text: 'Friend downloads & signs up with code' },
                { step: 3, text: 'Friend makes first transaction' },
                { step: 4, text: 'Both receive 100 coins reward' },
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-sm">{item.step}</span>
                  </div>
                  <span className="text-sm text-slate-300">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Tiered Referral Bonuses</h4>
            <div className="space-y-2">
              {[
                { referrals: '1-5', bonus: '100 coins each' },
                { referrals: '6-15', bonus: '150 coins each' },
                { referrals: '16-30', bonus: '200 coins each' },
                { referrals: '31+', bonus: '250 coins + Ambassador status' },
              ].map((tier) => (
                <div key={tier.referrals} className="flex justify-between items-center bg-slate-800/50 rounded-lg p-3">
                  <span className="text-sm text-white">{tier.referrals} referrals</span>
                  <span className="text-sm text-cyan-400 font-semibold">{tier.bonus}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    <GlobalFooter />
    </div>
  );
}
