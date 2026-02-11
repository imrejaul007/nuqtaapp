'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Crown, Sparkles, Users, Heart, Gamepad2, Brain, Target,
  Zap, Gift, Star, MessageSquare, Camera, Trophy, Medal,
  Flame, Vote, HelpCircle, Dice1, Music, Palette, BookOpen,
  Briefcase, MapPin, Bell, Share2, Coins, Network, ArrowRight,
  CheckCircle, Clock, ChevronDown, ChevronUp, TrendingUp,
  Building2, GraduationCap, Baby, Dumbbell, Shield, Globe
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';
import { NuqtaMainLogo } from '@/components/CompanyLogos';

// Nuqta Corporation App Categories
const nuqtaAppCategories = [
  {
    id: 'core-discovery',
    name: 'Core Discovery & Loyalty',
    description: 'Primary super-app and discovery engines',
    color: 'from-[#c9a227] to-amber-500',
    textColor: 'text-[#c9a227]',
    bgColor: 'bg-[#c9a227]/10',
    apps: [
      { name: 'Nuqta', arabic: 'نقطة', description: 'Primary super app, wallet UI, offers, loyalty hub', icon: Crown, status: 'built', role: 'Primary consumer hub' },
      { name: 'AI-R', arabic: 'ذكاء', description: 'AI suggestions, smart savings, "What should I buy"', icon: Brain, status: 'planned', role: 'Conversion accelerator' },
      { name: 'BuzzLoop', arabic: 'بز لوب', description: 'Short videos, UGC, earn coins for content', icon: Camera, status: 'planned', role: 'Organic growth engine' },
      { name: 'CoinHunt', arabic: 'كوين هنت', description: 'Coupons, limited-time deals, gamified discovery', icon: Coins, status: 'planned', role: 'Deal activation' },
      { name: 'LocalEdge', arabic: 'لوكال إيدج', description: 'Nearby updates, local alerts, check-ins', icon: MapPin, status: 'planned', role: 'Local stickiness' },
    ],
  },
  {
    id: 'social-community',
    name: 'Social, Community & Relationship',
    description: 'Building connections and communities',
    color: 'from-pink-500 to-rose-500',
    textColor: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    apps: [
      { name: 'VibeOut', arabic: 'فايب آوت', description: 'Nightlife discovery, events, social plans', icon: Music, status: 'planned', role: 'Lifestyle demand' },
      { name: 'Circlezy', arabic: 'سيركل زي', description: 'Interest communities, group rewards', icon: Users, status: 'planned', role: 'Retention' },
      { name: 'Hangoutzy', arabic: 'هانج آوت', description: 'Meetups, group planning', icon: Users, status: 'planned', role: 'Social graph' },
      { name: 'Campuszy', arabic: 'كامبس زي', description: 'College ecosystem, student offers', icon: GraduationCap, status: 'planned', role: 'Youth acquisition' },
      { name: 'Fanzy+', arabic: 'فان زي+', description: 'Creator fandoms, brand communities', icon: Star, status: 'planned', role: 'Creator economy' },
      { name: 'Volunzy', arabic: 'فولن زي', description: 'Volunteering, CSR rewards', icon: Heart, status: 'planned', role: 'Trust & goodwill' },
      { name: 'RoomMates', arabic: 'روم ميتس', description: 'Shared housing discovery', icon: Building2, status: 'planned', role: 'Daily utility' },
      { name: 'Datezy', arabic: 'ديت زي', description: 'Dating + activities', icon: Heart, status: 'planned', role: 'Social engagement' },
      { name: 'Familyzy', arabic: 'فاميلي زي', description: 'Family planning, kids activities', icon: Baby, status: 'planned', role: 'Household reach' },
      { name: 'Community Marketplace', arabic: 'سوق المجتمع', description: 'Local peer-to-peer exchange', icon: Share2, status: 'planned', role: 'Neighborhood commerce' },
    ],
  },
  {
    id: 'growth-utility',
    name: 'Growth, Referral & Utility',
    description: 'Cheap DAU, zero CAC, funnel into core apps',
    color: 'from-emerald-500 to-green-500',
    textColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    apps: [
      { name: 'Gigzy', arabic: 'غيغ زي', description: 'Gigs & micro-jobs', icon: Briefcase, status: 'planned', role: 'Task economy' },
      { name: 'BuzzLocal', arabic: 'بز لوكال', description: 'Local announcements & alerts', icon: Bell, status: 'planned', role: 'Hyperlocal' },
      { name: 'SkillPe', arabic: 'سكيل بي', description: 'Skill discovery & learning rewards', icon: BookOpen, status: 'planned', role: 'Education' },
      { name: 'CoinFlip', arabic: 'كوين فليب', description: 'Micro tasks → instant rewards', icon: Coins, status: 'planned', role: 'Quick engagement' },
      { name: 'Raksha+', arabic: 'رقشا+', description: 'Safety & emergency rewards', icon: Shield, status: 'planned', role: 'Trust' },
      { name: 'KarmaPoints', arabic: 'كارما', description: 'Social good → rewards', icon: Heart, status: 'planned', role: 'CSR' },
      { name: 'JobLoop', arabic: 'جوب لوب', description: 'Jobs & hiring discovery', icon: Briefcase, status: 'planned', role: 'Employment' },
      { name: 'Shop Alerts', arabic: 'شوب أليرتس', description: 'Price & deal alerts', icon: Bell, status: 'planned', role: 'Shopping' },
      { name: 'Linkzy', arabic: 'لينك زي', description: 'Referral & link-based sharing', icon: Share2, status: 'planned', role: 'Viral' },
      { name: 'ShopLoop', arabic: 'شوب لوب', description: 'Product discovery loop', icon: Sparkles, status: 'planned', role: 'Discovery' },
    ],
  },
  {
    id: 'ultra-light-viral',
    name: 'Ultra-Light / Viral / Habit Apps',
    description: 'DAU-driven, killable anytime, cheap engagement',
    color: 'from-yellow-400 to-orange-500',
    textColor: 'text-yellow-400',
    bgColor: 'bg-yellow-400/10',
    apps: [
      { name: 'Spinzy', arabic: 'سبين زي', description: 'Spin & win wheels', icon: Dice1, status: 'planned', role: 'Daily habit' },
      { name: 'Quizzy', arabic: 'كويز زي', description: 'Quizzes for rewards', icon: HelpCircle, status: 'planned', role: 'Trivia' },
      { name: 'Memezy', arabic: 'ميم زي', description: 'Meme creation & sharing', icon: Camera, status: 'planned', role: 'Viral content' },
      { name: 'SnapMission', arabic: 'سناب ميشن', description: 'Photo/video missions', icon: Camera, status: 'planned', role: 'UGC' },
      { name: 'CashDrop', arabic: 'كاش دروب', description: 'Flash rewards', icon: Gift, status: 'planned', role: 'Surprise' },
      { name: 'Trendzy', arabic: 'تريند زي', description: 'Trend discovery', icon: TrendingUp, status: 'planned', role: 'Discovery' },
      { name: 'SnapTask', arabic: 'سناب تاسك', description: 'Quick tasks', icon: Zap, status: 'planned', role: 'Micro-tasks' },
      { name: 'DealzNow', arabic: 'ديلز ناو', description: 'Flash deals', icon: Flame, status: 'planned', role: 'Urgency' },
      { name: 'CashSnap', arabic: 'كاش سناب', description: 'Scan & earn', icon: Camera, status: 'planned', role: 'Scanning' },
      { name: 'ScanEarn', arabic: 'سكان إيرن', description: 'Receipt/QR rewards', icon: Camera, status: 'planned', role: 'Receipts' },
      { name: 'BillBuddy', arabic: 'بيل بدي', description: 'Bill scan & tracking', icon: Briefcase, status: 'planned', role: 'Bills' },
      { name: 'ReceiptHero', arabic: 'ريسيت هيرو', description: 'Expense & receipt management', icon: Briefcase, status: 'planned', role: 'Tracking' },
      { name: 'Pollzy', arabic: 'بول زي', description: 'Opinion polls', icon: Vote, status: 'planned', role: 'Opinions' },
      { name: 'SurveyLoop', arabic: 'سيرفي لوب', description: 'Surveys for rewards', icon: HelpCircle, status: 'planned', role: 'Research' },
      { name: 'TriviaRush', arabic: 'تريفيا رش', description: 'Trivia games', icon: Trophy, status: 'planned', role: 'Games' },
      { name: 'LottoRush', arabic: 'لوتو رش', description: 'Lottery-style engagement', icon: Star, status: 'planned', role: 'Luck' },
      { name: 'Streakzy', arabic: 'ستريك زي', description: 'Daily streaks', icon: Flame, status: 'planned', role: 'Habits' },
      { name: 'Listzy', arabic: 'ليست زي', description: 'Lists & collections', icon: BookOpen, status: 'planned', role: 'Curation' },
    ],
  },
];

// Total counts
const totalApps = nuqtaAppCategories.reduce((sum, cat) => sum + cat.apps.length, 0);
const builtApps = nuqtaAppCategories.reduce((sum, cat) => sum + cat.apps.filter(a => a.status === 'built').length, 0);

// Ownership
const ownership = {
  rtmnShare: '80%',
  foundersEsop: '20%',
  investment: '⭐ Low',
  revenue: '⭐⭐⭐⭐⭐',
  risk: '⭐⭐ Low',
};

// What Nuqta Corp Controls
const controls = ['Consumer UX', 'Loyalty experience', 'Discovery logic', 'Engagement loops'];
const doesNotOwn = ['Wallet ledger', 'Merchant data', 'Pricing logic'];

export default function NuqtaCorpPage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('core-discovery');

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0a1628] via-[#c9a227]/10 to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Link href="/rtmn-group" className="inline-flex items-center gap-2 text-[#c9a227] hover:text-[#f4d35e] mb-4 text-sm">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to RTMN Group
          </Link>

          <div className="flex items-center gap-4 sm:gap-6 mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20">
              <NuqtaMainLogo size={80} />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white">
                Nuqta <span className="text-[#c9a227]">Corporation</span>
              </h1>
              <p className="text-[#c9a227] text-lg">نقطة • User Entry, Discovery, Engagement, Loyalty</p>
            </div>
          </div>

          <p className="text-slate-300 text-lg max-w-3xl mb-8">
            Controls consumer UX, loyalty experience, discovery logic, and engagement loops.
            {totalApps} apps across 4 categories. The ecosystem glue that acquires and retains users.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
            <div className="bg-[#c9a227]/10 rounded-xl p-4 text-center border border-[#c9a227]/30">
              <div className="text-2xl font-bold text-[#c9a227]">{totalApps}</div>
              <div className="text-xs text-slate-400">Total Apps</div>
            </div>
            <div className="bg-emerald-500/10 rounded-xl p-4 text-center border border-emerald-500/30">
              <div className="text-2xl font-bold text-emerald-400">{builtApps}</div>
              <div className="text-xs text-slate-400">Built</div>
            </div>
            <div className="bg-blue-500/10 rounded-xl p-4 text-center border border-blue-500/30">
              <div className="text-2xl font-bold text-blue-400">{ownership.rtmnShare}</div>
              <div className="text-xs text-slate-400">RTMN Share</div>
            </div>
            <div className="bg-purple-500/10 rounded-xl p-4 text-center border border-purple-500/30">
              <div className="text-2xl font-bold text-purple-400">{ownership.foundersEsop}</div>
              <div className="text-xs text-slate-400">Founders/ESOP</div>
            </div>
            <div className="bg-pink-500/10 rounded-xl p-4 text-center border border-pink-500/30">
              <div className="text-lg font-bold text-pink-400">{ownership.revenue}</div>
              <div className="text-xs text-slate-400">Revenue</div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls Section */}
      <section className="bg-slate-800/30 border-b border-slate-700/50 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/30">
              <h3 className="text-emerald-400 font-bold mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Controls
              </h3>
              <div className="flex flex-wrap gap-2">
                {controls.map((item, i) => (
                  <span key={i} className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/30">
              <h3 className="text-red-400 font-bold mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5" /> Does NOT Own
              </h3>
              <div className="flex flex-wrap gap-2">
                {doesNotOwn.map((item, i) => (
                  <span key={i} className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="space-y-4 sm:space-y-6">
          {nuqtaAppCategories.map((category) => (
            <div
              key={category.id}
              className={`${category.bgColor} border-2 rounded-xl overflow-hidden`}
              style={{ borderColor: category.textColor.includes('c9a227') ? '#c9a227' : category.textColor.includes('pink') ? '#ec4899' : category.textColor.includes('emerald') ? '#10b981' : '#eab308' }}
            >
              <button
                onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                className="w-full p-4 sm:p-6 flex items-center justify-between text-left"
              >
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className={`text-base sm:text-lg font-bold ${category.textColor}`}>
                      {category.name}
                    </h3>
                    <span className="bg-slate-900/50 px-2 py-0.5 rounded text-xs text-slate-300">
                      {category.apps.length} apps
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm">{category.description}</p>
                </div>
                {expandedCategory === category.id ? (
                  <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>

              {expandedCategory === category.id && (
                <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {category.apps.map((app, i) => (
                      <div key={i} className={`bg-slate-900/50 rounded-xl p-4 border ${app.status === 'built' ? 'border-emerald-500/50' : 'border-slate-700/50'}`}>
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-8 h-8 rounded-lg ${category.bgColor} flex items-center justify-center`}>
                            <app.icon className={`w-4 h-4 ${category.textColor}`} />
                          </div>
                          <div>
                            <h4 className="text-white font-bold text-sm">{app.name}</h4>
                            <span className="text-slate-500 text-xs">{app.arabic}</span>
                          </div>
                        </div>
                        <p className="text-slate-400 text-xs mb-2">{app.description}</p>
                        <div className="flex items-center justify-between">
                          <span className={`text-xs px-2 py-0.5 rounded ${category.bgColor} ${category.textColor}`}>
                            {app.role}
                          </span>
                          {app.status === 'built' ? (
                            <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">Built</span>
                          ) : (
                            <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">Planned</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Data Flow */}
        <div className="mt-8 bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Network className="w-5 h-5 text-[#c9a227]" /> Data Flow
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-blue-400 font-bold mb-2">Consumes</h4>
              <ul className="space-y-1 text-sm text-slate-400">
                <li>• Wallet ← Rabtul</li>
                <li>• Merchants ← BizOne</li>
                <li>• Campaigns ← Adzy</li>
              </ul>
            </div>
            <div>
              <h4 className="text-emerald-400 font-bold mb-2">Produces</h4>
              <ul className="space-y-1 text-sm text-slate-400">
                <li>• DAU (Daily Active Users)</li>
                <li>• Referrals</li>
                <li>• Intent data</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Navigation */}
      <section className="bg-slate-800/30 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rtmn-group" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors">
              <Network className="w-5 h-5" /> RTMN Group
            </Link>
            <Link href="/nuqta-plus" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227]/20 text-[#c9a227] border border-[#c9a227] rounded-xl font-bold hover:bg-[#c9a227]/30 transition-colors">
              <Crown className="w-5 h-5" /> Nuqta+ App
            </Link>
            <Link href="/gamification" className="inline-flex items-center gap-2 px-6 py-3 bg-pink-500/20 text-pink-400 border border-pink-500 rounded-xl font-bold hover:bg-pink-500/30 transition-colors">
              <Gamepad2 className="w-5 h-5" /> Gamification
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
