'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Trophy,
  Star,
  Zap,
  Target,
  Award,
  Crown,
  Medal,
  Flame,
  Gift,
  Users,
  TrendingUp,
  BarChart3,
  Calendar,
  Clock,
  CheckCircle,
  Lock,
  Unlock,
  ChevronRight,
  Sparkles,
  Heart,
  Coffee,
  ShoppingBag,
  Dumbbell,
  Scissors,
  Utensils,
  MapPin,
  Bell,
  Share2,
  Camera,
  MessageCircle,
  ThumbsUp
} from 'lucide-react';

interface Tier {
  name: string;
  icon: React.ElementType;
  color: string;
  pointsRequired: number;
  benefits: string[];
  multiplier: string;
  exclusive: string[];
}

interface Badge {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
  requirement: string;
  points: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

interface Challenge {
  name: string;
  description: string;
  duration: string;
  reward: string;
  type: 'daily' | 'weekly' | 'monthly' | 'special';
}

const tiers: Tier[] = [
  {
    name: 'Bronze',
    icon: Medal,
    color: 'from-amber-700 to-amber-900',
    pointsRequired: 0,
    benefits: [
      'Earn 1 point per AED spent',
      'Access to basic rewards',
      'Birthday bonus (50 points)',
      'Weekly deals access'
    ],
    multiplier: '1x',
    exclusive: []
  },
  {
    name: 'Silver',
    icon: Star,
    color: 'from-slate-400 to-slate-600',
    pointsRequired: 1000,
    benefits: [
      'Earn 1.25 points per AED spent',
      'Access to all rewards',
      'Birthday bonus (100 points)',
      'Early access to flash sales',
      'Priority customer support'
    ],
    multiplier: '1.25x',
    exclusive: ['Silver-only monthly prizes', 'Exclusive merchant deals']
  },
  {
    name: 'Gold',
    icon: Trophy,
    color: 'from-[#c9a227] to-amber-600',
    pointsRequired: 5000,
    benefits: [
      'Earn 1.5 points per AED spent',
      'All rewards + Gold exclusives',
      'Birthday bonus (200 points)',
      'First access to new merchants',
      'Dedicated account manager',
      'Monthly bonus points drop'
    ],
    multiplier: '1.5x',
    exclusive: ['Gold lounge access', 'VIP events', 'Free delivery on partner orders']
  },
  {
    name: 'Platinum',
    icon: Crown,
    color: 'from-purple-500 to-indigo-600',
    pointsRequired: 15000,
    benefits: [
      'Earn 2x points per AED spent',
      'All rewards + Platinum exclusives',
      'Birthday bonus (500 points)',
      'Concierge service',
      'Annual Platinum gift',
      'Partner event invitations',
      'Points never expire'
    ],
    multiplier: '2x',
    exclusive: ['Luxury experience access', 'Platinum-only giveaways', 'Annual VIP dinner', 'Airport lounge access']
  }
];

const badges: Badge[] = [
  // Activity Badges
  { id: 'first-scan', name: 'First Steps', icon: Zap, description: 'Made your first purchase', requirement: 'Complete 1 transaction', points: 50, rarity: 'common' },
  { id: 'regular', name: 'Regular', icon: Coffee, description: 'A familiar face', requirement: 'Visit same merchant 5 times', points: 100, rarity: 'common' },
  { id: 'explorer', name: 'Explorer', icon: MapPin, description: 'Trying new places', requirement: 'Visit 10 different merchants', points: 150, rarity: 'rare' },
  { id: 'adventurer', name: 'Adventurer', icon: MapPin, description: 'Dubai discovery master', requirement: 'Visit 50 different merchants', points: 500, rarity: 'epic' },

  // Streak Badges
  { id: 'streak-3', name: 'Hot Streak', icon: Flame, description: '3 days in a row!', requirement: 'Visit 3 consecutive days', points: 75, rarity: 'common' },
  { id: 'streak-7', name: 'Week Warrior', icon: Flame, description: 'A full week of earning', requirement: 'Visit 7 consecutive days', points: 200, rarity: 'rare' },
  { id: 'streak-30', name: 'Monthly Master', icon: Flame, description: 'Unstoppable!', requirement: 'Visit 30 consecutive days', points: 1000, rarity: 'legendary' },

  // Category Badges
  { id: 'coffee-lover', name: 'Coffee Addict', icon: Coffee, description: 'Fueled by caffeine', requirement: '25 cafe visits', points: 200, rarity: 'rare' },
  { id: 'foodie', name: 'Foodie', icon: Utensils, description: 'Living to eat', requirement: '25 restaurant visits', points: 200, rarity: 'rare' },
  { id: 'fitness-fan', name: 'Fitness Fanatic', icon: Dumbbell, description: 'Gains on gains', requirement: '20 gym check-ins', points: 200, rarity: 'rare' },
  { id: 'glam', name: 'Glam Squad', icon: Scissors, description: 'Always looking fresh', requirement: '15 salon visits', points: 200, rarity: 'rare' },
  { id: 'shopaholic', name: 'Shopaholic', icon: ShoppingBag, description: 'Retail therapy expert', requirement: '30 retail purchases', points: 200, rarity: 'rare' },

  // Social Badges
  { id: 'referrer', name: 'Connector', icon: Users, description: 'Spreading the word', requirement: 'Refer 1 friend', points: 100, rarity: 'common' },
  { id: 'influencer', name: 'Influencer', icon: Share2, description: 'People listen to you', requirement: 'Refer 10 friends', points: 500, rarity: 'epic' },
  { id: 'ambassador', name: 'Ambassador', icon: Crown, description: 'Nuqta royalty', requirement: 'Refer 25 friends', points: 1500, rarity: 'legendary' },

  // Special Badges
  { id: 'early-bird', name: 'Early Bird', icon: Clock, description: 'Morning person', requirement: '10 purchases before 9am', points: 150, rarity: 'rare' },
  { id: 'night-owl', name: 'Night Owl', icon: Clock, description: 'Late night rewards', requirement: '10 purchases after 10pm', points: 150, rarity: 'rare' },
  { id: 'weekend-warrior', name: 'Weekend Warrior', icon: Calendar, description: 'Living for the weekend', requirement: '20 weekend purchases', points: 200, rarity: 'rare' },
  { id: 'big-spender', name: 'High Roller', icon: Trophy, description: 'Going all in', requirement: 'Single purchase over AED 1,000', points: 300, rarity: 'epic' },
  { id: 'centurion', name: 'Centurion', icon: Award, description: '100 and counting', requirement: '100 total transactions', points: 1000, rarity: 'legendary' }
];

const challenges: Challenge[] = [
  // Daily Challenges
  { name: 'Daily Double', description: 'Make 2 purchases today', duration: '24 hours', reward: '25 bonus points', type: 'daily' },
  { name: 'Morning Boost', description: 'Purchase before 10am', duration: '24 hours', reward: '15 bonus points', type: 'daily' },
  { name: 'Try Something New', description: 'Visit a new merchant', duration: '24 hours', reward: '30 bonus points', type: 'daily' },

  // Weekly Challenges
  { name: 'Week Explorer', description: 'Visit 5 different merchants', duration: '7 days', reward: '100 bonus points', type: 'weekly' },
  { name: 'Category Hopper', description: 'Purchase from 3 different categories', duration: '7 days', reward: '75 bonus points', type: 'weekly' },
  { name: 'Social Butterfly', description: 'Share a purchase on social media', duration: '7 days', reward: '50 bonus points', type: 'weekly' },
  { name: 'Streak Starter', description: 'Maintain a 5-day streak', duration: '7 days', reward: '150 bonus points', type: 'weekly' },

  // Monthly Challenges
  { name: 'Monthly Marathon', description: 'Make 20 purchases this month', duration: '30 days', reward: '500 bonus points', type: 'monthly' },
  { name: 'Big Saver', description: 'Earn 1,000 points this month', duration: '30 days', reward: '200 bonus points', type: 'monthly' },
  { name: 'Review Champion', description: 'Leave 10 merchant reviews', duration: '30 days', reward: '300 bonus points', type: 'monthly' },
  { name: 'Referral King', description: 'Refer 3 friends who make purchases', duration: '30 days', reward: '500 bonus points', type: 'monthly' },

  // Special Challenges
  { name: 'Ramadan Rush', description: 'Visit 10 iftar spots during Ramadan', duration: 'Ramadan month', reward: '750 bonus points', type: 'special' },
  { name: 'DSF Champion', description: 'Earn 2,000 points during DSF', duration: 'DSF period', reward: '1,000 bonus points', type: 'special' },
  { name: 'Summer Survivor', description: 'Stay active with 15 visits in summer', duration: 'Jun-Aug', reward: '600 bonus points', type: 'special' }
];

const streakRewards = [
  { days: 3, reward: '50 bonus points', badge: 'Hot Streak' },
  { days: 7, reward: '150 bonus points + free coffee', badge: 'Week Warrior' },
  { days: 14, reward: '300 bonus points', badge: null },
  { days: 21, reward: '500 bonus points + mystery reward', badge: null },
  { days: 30, reward: '1,000 bonus points + 2x multiplier (1 day)', badge: 'Monthly Master' },
  { days: 60, reward: '2,500 bonus points + exclusive badge', badge: 'Dedication' },
  { days: 90, reward: '5,000 bonus points + VIP experience', badge: 'Legend' }
];

const leaderboardCategories = [
  { name: 'Top Earners', description: 'Most points earned this month', prize: 'AED 1,000 + VIP status' },
  { name: 'Most Active', description: 'Most transactions this month', prize: 'AED 500 + exclusive badge' },
  { name: 'Best Referrer', description: 'Most successful referrals', prize: 'AED 750 + ambassador status' },
  { name: 'Streak Leaders', description: 'Longest active streak', prize: 'AED 500 + streak protection' },
  { name: 'Explorer of the Month', description: 'Most unique merchants visited', prize: 'AED 500 + discovery badge' }
];

export default function GamificationPage() {
  const [activeTab, setActiveTab] = useState<'tiers' | 'badges' | 'challenges' | 'streaks' | 'leaderboards'>('tiers');

  const rarityColors = {
    common: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
    rare: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    epic: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    legendary: 'bg-[#c9a227]/20 text-[#c9a227] border-[#c9a227]/30'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/10 to-slate-950">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c9a227] to-[#e8c547] flex items-center justify-center">
                <span className="text-black font-bold text-xl">N</span>
              </div>
              <span className="text-2xl font-bold text-white">Nuqta</span>
            </Link>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">Gamification System</span>
          </div>
          <Link href="/master-roadmap" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft size={16} />
            <span className="text-sm">Roadmap</span>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 mb-4">
            <Trophy className="text-purple-400" size={16} />
            <span className="text-purple-400 text-sm font-medium">Game Mechanics</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Gamification <span className="text-purple-400">System Design</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Tiers, badges, streaks, challenges, and leaderboards. Turn earning rewards into an addictive game.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {[
            { id: 'tiers', label: 'Tier System', icon: Crown },
            { id: 'badges', label: 'Badges', icon: Award },
            { id: 'challenges', label: 'Challenges', icon: Target },
            { id: 'streaks', label: 'Streaks', icon: Flame },
            { id: 'leaderboards', label: 'Leaderboards', icon: BarChart3 }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-purple-500 text-white'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tier System */}
        {activeTab === 'tiers' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tiers.map((tier, idx) => {
                const Icon = tier.icon;
                return (
                  <div key={idx} className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                    <div className={`bg-gradient-to-r ${tier.color} p-6 text-center`}>
                      <Icon className="text-white mx-auto mb-2" size={40} />
                      <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                      <p className="text-white/80">{tier.pointsRequired.toLocaleString()}+ points</p>
                      <div className="mt-2 inline-block px-3 py-1 bg-white/20 rounded-full text-white text-sm font-bold">
                        {tier.multiplier} Points
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="font-bold text-white mb-3">Benefits</h4>
                      <ul className="space-y-2 mb-4">
                        {tier.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 text-slate-300 text-sm">
                            <CheckCircle className="text-green-400 flex-shrink-0 mt-0.5" size={14} />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      {tier.exclusive.length > 0 && (
                        <>
                          <h4 className="font-bold text-[#c9a227] mb-2 text-sm">Exclusive Perks</h4>
                          <ul className="space-y-1">
                            {tier.exclusive.map((ex, eIdx) => (
                              <li key={eIdx} className="flex items-center gap-2 text-[#c9a227] text-xs">
                                <Star size={10} />
                                {ex}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Tier Progression */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Tier Progression Rules</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-green-400 mb-2">Earning Tiers</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Points accumulated in rolling 12-month period</li>
                    <li>• Tier status updates in real-time</li>
                    <li>• Bonus points count toward tier progress</li>
                    <li>• Referral points count at 50%</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-amber-400 mb-2">Maintaining Tiers</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Status valid for 12 months after earning</li>
                    <li>• Grace period of 3 months if points drop</li>
                    <li>• Tier protection available with activity</li>
                    <li>• Annual review with 30-day notice before downgrade</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Badges */}
        {activeTab === 'badges' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {badges.map(badge => {
                const Icon = badge.icon;
                return (
                  <div key={badge.id} className={`rounded-xl p-4 border ${rarityColors[badge.rarity]}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center`}>
                        <Icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm">{badge.name}</h4>
                        <span className="text-xs capitalize">{badge.rarity}</span>
                      </div>
                    </div>
                    <p className="text-slate-400 text-xs mb-2">{badge.description}</p>
                    <p className="text-slate-500 text-xs mb-2">{badge.requirement}</p>
                    <div className="flex items-center gap-1 text-[#c9a227] text-xs font-bold">
                      <Star size={12} />
                      +{badge.points} points
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Badge Rarity System</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { rarity: 'Common', color: 'bg-slate-500', percent: '60%', desc: 'Easy to earn, great for beginners' },
                  { rarity: 'Rare', color: 'bg-blue-500', percent: '25%', desc: 'Requires dedication' },
                  { rarity: 'Epic', color: 'bg-purple-500', percent: '12%', desc: 'Significant achievement' },
                  { rarity: 'Legendary', color: 'bg-[#c9a227]', percent: '3%', desc: 'Elite status' }
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className={`w-12 h-12 ${item.color} rounded-xl mx-auto mb-2`} />
                    <h4 className="font-bold text-white">{item.rarity}</h4>
                    <p className="text-slate-400 text-sm">{item.percent} of users</p>
                    <p className="text-slate-500 text-xs mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Challenges */}
        {activeTab === 'challenges' && (
          <div className="space-y-6">
            {['daily', 'weekly', 'monthly', 'special'].map(type => (
              <div key={type}>
                <h3 className="text-lg font-bold text-white mb-4 capitalize flex items-center gap-2">
                  <Target className={type === 'special' ? 'text-[#c9a227]' : 'text-purple-400'} size={20} />
                  {type} Challenges
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {challenges.filter(c => c.type === type).map((challenge, idx) => (
                    <div key={idx} className="bg-white/5 rounded-xl p-5 border border-white/10">
                      <h4 className="font-bold text-white mb-1">{challenge.name}</h4>
                      <p className="text-slate-400 text-sm mb-3">{challenge.description}</p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500 flex items-center gap-1">
                          <Clock size={12} />
                          {challenge.duration}
                        </span>
                        <span className="text-green-400 font-bold">{challenge.reward}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Streaks */}
        {activeTab === 'streaks' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-500/30">
              <div className="flex items-center gap-4 mb-6">
                <Flame className="text-orange-400" size={40} />
                <div>
                  <h3 className="text-2xl font-bold text-white">Streak System</h3>
                  <p className="text-slate-400">Visit any Nuqta merchant daily to build your streak</p>
                </div>
              </div>

              <div className="space-y-4">
                {streakRewards.map((streak, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-black/30 rounded-xl">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-white">{streak.days}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white">{streak.days} Day Streak</h4>
                      <p className="text-green-400 text-sm">{streak.reward}</p>
                      {streak.badge && (
                        <span className="text-[#c9a227] text-xs flex items-center gap-1 mt-1">
                          <Award size={12} />
                          Unlocks "{streak.badge}" badge
                        </span>
                      )}
                    </div>
                    <ChevronRight className="text-slate-500" size={20} />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Streak Rules</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-green-400 mb-2">Building Streaks</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Any purchase counts as a day</li>
                    <li>• Resets at midnight local time</li>
                    <li>• Multiple purchases same day = 1 day</li>
                    <li>• Streak counter visible in app</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-400 mb-2">Streak Protection</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• 1 free "freeze" per month</li>
                    <li>• Gold members: 2 freezes/month</li>
                    <li>• Platinum: Unlimited freezes</li>
                    <li>• Purchase freeze for 100 points</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Leaderboards */}
        {activeTab === 'leaderboards' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {leaderboardCategories.map((board, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c9a227] to-amber-600 flex items-center justify-center">
                      <Trophy className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{board.name}</h3>
                      <p className="text-slate-400 text-sm">{board.description}</p>
                    </div>
                  </div>
                  <div className="bg-[#c9a227]/10 rounded-lg p-3 border border-[#c9a227]/30">
                    <span className="text-xs text-slate-400">Monthly Prize</span>
                    <p className="text-[#c9a227] font-bold">{board.prize}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Leaderboard Rules</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-purple-400 mb-2">Competition Period</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Monthly reset on 1st</li>
                    <li>• Winners announced by 5th</li>
                    <li>• Prizes distributed by 10th</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-400 mb-2">Fair Play</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Anti-gaming measures</li>
                    <li>• Transaction verification</li>
                    <li>• One account per person</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-green-400 mb-2">Visibility</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Top 100 displayed</li>
                    <li>• Your rank always visible</li>
                    <li>• Friend rankings</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
