'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Trophy,
  Car,
  Smartphone,
  Gift,
  Star,
  Zap,
  Target,
  Users,
  Calendar,
  DollarSign,
  TrendingUp,
  ChevronDown,
  ChevronRight,
  Copy,
  Check,
  Sparkles,
  Crown,
  Plane,
  Watch,
  Gem,
  Home,
  Tv,
  Laptop,
  Camera,
  Headphones,
  ShoppingBag,
  Ticket,
  MapPin,
  Clock,
  AlertCircle,
  CheckCircle,
  Share2,
  Bell,
  Award
} from 'lucide-react';

interface BigPrize {
  id: string;
  name: string;
  value: string;
  icon: React.ElementType;
  frequency: string;
  eligibility: string;
  mechanic: string;
  marketing: string[];
}

interface Campaign {
  id: string;
  name: string;
  tagline: string;
  description: string;
  duration: string;
  prizes: BigPrize[];
  howToEnter: string[];
  rules: string[];
  marketing: {
    channels: string[];
    content: string[];
    budget: string;
  };
  expectedResults: {
    metric: string;
    target: string;
  }[];
  legalNotes: string[];
}

const bigWinCampaigns: Campaign[] = [
  {
    id: 'monthly-mega',
    name: 'Monthly Mega Draw',
    tagline: 'Pay with Nuqta. Win Big.',
    description: 'Every transaction gives users entries into monthly mega prize draws. The more you spend, the more chances to win life-changing prizes.',
    duration: 'Ongoing (Monthly)',
    prizes: [
      {
        id: 'car',
        name: 'Brand New Car',
        value: 'AED 150,000+',
        icon: Car,
        frequency: 'Quarterly Grand Prize',
        eligibility: 'Min 5,000 points earned in quarter',
        mechanic: '1 entry per 100 points earned',
        marketing: ['Hero creative for all channels', 'Winner announcement video', 'Handover ceremony']
      },
      {
        id: 'iphone',
        name: 'Latest iPhone',
        value: 'AED 5,000',
        icon: Smartphone,
        frequency: 'Monthly (3 winners)',
        eligibility: 'Min 500 points earned in month',
        mechanic: '1 entry per 50 points earned',
        marketing: ['Weekly countdown posts', 'Winner spotlight stories', 'Unboxing videos']
      },
      {
        id: 'gold',
        name: 'Gold Coin (1 oz)',
        value: 'AED 8,000',
        icon: Gem,
        frequency: 'Monthly (1 winner)',
        eligibility: 'Min 1,000 points earned in month',
        mechanic: '1 entry per 100 points earned',
        marketing: ['Dubai gold heritage angle', 'Luxury lifestyle content']
      },
      {
        id: 'travel',
        name: 'Travel Voucher',
        value: 'AED 10,000',
        icon: Plane,
        frequency: 'Monthly (2 winners)',
        eligibility: 'Min 500 points earned',
        mechanic: '1 entry per 50 points',
        marketing: ['Dream destination content', 'Travel inspiration posts']
      }
    ],
    howToEnter: [
      'Download the Nuqta app and create account',
      'Make purchases at any Nuqta partner merchant',
      'Earn points on every transaction',
      'Every 50-100 points = 1 automatic entry',
      'More points = More entries = Higher chances',
      'Winners drawn on last day of each month'
    ],
    rules: [
      'Must be UAE resident (valid Emirates ID)',
      'Must be 18 years or older',
      'Points must be earned (not purchased/transferred)',
      'Winners announced within 7 days of draw',
      'Prizes non-transferable, no cash alternative',
      'Nuqta reserves right to verify all entries',
      'Employees and family members ineligible'
    ],
    marketing: {
      channels: ['Instagram', 'TikTok', 'WhatsApp', 'Push Notifications', 'In-App Banners', 'Email', 'Partner Merchant Displays'],
      content: [
        'Launch announcement video (Car reveal)',
        'Weekly "entries so far" countdown',
        'Past winner testimonials',
        'How it works explainer',
        'Live draw event (Instagram Live)',
        'Winner handover ceremony video',
        'User reaction videos'
      ],
      budget: 'AED 25,000-40,000/month (prizes + marketing)'
    },
    expectedResults: [
      { metric: 'New User Signups', target: '+150% during campaign' },
      { metric: 'Transaction Frequency', target: '+40% increase' },
      { metric: 'Average Points Earned', target: '+60% per user' },
      { metric: 'Social Media Engagement', target: '+200% reach' },
      { metric: 'App Downloads', target: '+3,000/month' }
    ],
    legalNotes: [
      'Comply with UAE raffle/prize draw regulations',
      'Register with Department of Economic Development if required',
      'Clear T&Cs on app and website',
      'Tax implications communicated to winners',
      'Insurance for high-value prizes'
    ]
  },
  {
    id: 'smart-savers',
    name: 'Smart People Use Nuqta',
    tagline: 'Smart People Use Nuqta',
    description: 'A prestige campaign positioning Nuqta users as savvy, intelligent consumers who make their money work harder.',
    duration: '3-month campaign',
    prizes: [
      {
        id: 'macbook',
        name: 'MacBook Pro',
        value: 'AED 8,000',
        icon: Laptop,
        frequency: 'Weekly (1 winner)',
        eligibility: 'Share savings story',
        mechanic: 'Best savings story wins',
        marketing: ['User-generated content', 'Before/after comparisons']
      },
      {
        id: 'airpods',
        name: 'AirPods Pro',
        value: 'AED 1,000',
        icon: Headphones,
        frequency: 'Daily (1 winner)',
        eligibility: 'Any transaction',
        mechanic: 'Random daily draw',
        marketing: ['Daily winner announcements', 'Instant gratification']
      },
      {
        id: 'shopping',
        name: 'Shopping Spree',
        value: 'AED 5,000',
        icon: ShoppingBag,
        frequency: 'Monthly (1 winner)',
        eligibility: 'Top points earner',
        mechanic: 'Leaderboard competition',
        marketing: ['Live leaderboard', 'Weekly updates']
      }
    ],
    howToEnter: [
      'Use Nuqta for all purchases',
      'Track your savings in the app',
      'Share your savings story on social media',
      'Tag @nuqta.ae and use #SmartPeopleUseNuqta',
      'Best stories featured and win prizes'
    ],
    rules: [
      'Original content only',
      'Must tag Nuqta and use hashtag',
      'Story must be verifiable in app',
      'Winners selected by engagement + creativity',
      'Content may be used for marketing'
    ],
    marketing: {
      channels: ['Instagram', 'TikTok', 'LinkedIn', 'YouTube'],
      content: [
        '"Meet the Smart Savers" video series',
        'Savings calculator tool',
        'Influencer testimonials',
        'Split-screen: With Nuqta vs Without',
        'Financial literacy tips',
        'Smart shopping hacks'
      ],
      budget: 'AED 50,000 total (prizes + production)'
    },
    expectedResults: [
      { metric: 'UGC Content Created', target: '500+ posts' },
      { metric: 'Hashtag Reach', target: '1M+ impressions' },
      { metric: 'Brand Perception', target: '+30% "smart choice" association' },
      { metric: 'Referrals', target: '+80% increase' }
    ],
    legalNotes: [
      'User content rights agreement',
      'Clear judging criteria',
      'Privacy compliance for shared content'
    ]
  },
  {
    id: 'savings-challenge',
    name: 'Calculate Your Savings Challenge',
    tagline: 'See How Much You Would Have Saved',
    description: 'Users upload their past receipts/bills to see how much they would have saved with Nuqta. Share on social media to earn cashback.',
    duration: 'Always-on campaign',
    prizes: [
      {
        id: 'cashback',
        name: 'Instant Cashback',
        value: 'Up to AED 300',
        icon: DollarSign,
        frequency: 'Per valid submission',
        eligibility: 'Upload receipt + share video',
        mechanic: 'Earn calculated savings as cashback (capped at AED 300)',
        marketing: ['Real savings, real money', 'Instant gratification']
      },
      {
        id: 'bonus',
        name: 'Viral Bonus',
        value: 'AED 500',
        icon: Share2,
        frequency: 'Weekly (top viral post)',
        eligibility: 'Most engagement on shared video',
        mechanic: 'Highest likes/shares/comments wins',
        marketing: ['Encourage creativity', 'Social proof']
      }
    ],
    howToEnter: [
      'Open Nuqta app → "Calculate Savings" feature',
      'Upload photos of past receipts (last 30 days)',
      'App calculates what you would have saved',
      'Create a video showing your potential savings',
      'Post on Instagram/TikTok with #NuqtaSavings',
      'Receive your calculated amount as Nuqta coins (up to AED 300)'
    ],
    rules: [
      'Receipts must be from Nuqta partner merchants',
      'Must be dated within last 30 days',
      'Video must clearly show savings calculation',
      'One submission per user per month',
      'Maximum cashback: AED 300',
      'Nuqta coins credited within 48 hours'
    ],
    marketing: {
      channels: ['TikTok', 'Instagram Reels', 'YouTube Shorts', 'WhatsApp'],
      content: [
        'Tutorial: How to calculate your savings',
        'Best user videos compilation',
        'Reaction videos to big savings',
        '"I could have saved HOW MUCH?!" format',
        'Before/After financial journey'
      ],
      budget: 'AED 15,000/month (cashback pool)'
    },
    expectedResults: [
      { metric: 'Video Submissions', target: '200+/month' },
      { metric: 'Organic Reach', target: '500K+ impressions' },
      { metric: 'New User Conversions', target: '30% of viewers' },
      { metric: 'Viral Videos (10K+ views)', target: '10+/month' }
    ],
    legalNotes: [
      'Receipt verification process',
      'Anti-fraud measures',
      'Clear cashback terms'
    ]
  },
  {
    id: 'luxury-experience',
    name: 'Experience Luxury at Your Fingertips',
    tagline: 'Experience Luxury at Your Fingertips',
    description: 'Premium campaign targeting aspirational users with exclusive luxury experiences and high-end rewards.',
    duration: 'Quarterly luxury draws',
    prizes: [
      {
        id: 'staycation',
        name: '5-Star Staycation',
        value: 'AED 15,000',
        icon: Home,
        frequency: 'Quarterly (1 winner)',
        eligibility: 'Gold tier members',
        mechanic: 'Points-based raffle',
        marketing: ['Luxury hotel partnership', 'Aspirational content']
      },
      {
        id: 'watch',
        name: 'Luxury Watch',
        value: 'AED 20,000',
        icon: Watch,
        frequency: 'Bi-annual (1 winner)',
        eligibility: 'Platinum tier members',
        mechanic: 'Top 100 spenders eligible',
        marketing: ['Sophistication messaging', 'Exclusive feel']
      },
      {
        id: 'dining',
        name: 'Fine Dining Experience',
        value: 'AED 3,000',
        icon: Crown,
        frequency: 'Monthly (5 winners)',
        eligibility: 'Any tier',
        mechanic: '1 entry per 200 points',
        marketing: ['Restaurant partnerships', 'Food content']
      },
      {
        id: 'spa',
        name: 'Spa & Wellness Package',
        value: 'AED 2,000',
        icon: Sparkles,
        frequency: 'Monthly (3 winners)',
        eligibility: 'Any tier',
        mechanic: '1 entry per 150 points',
        marketing: ['Self-care messaging', 'Wellness content']
      }
    ],
    howToEnter: [
      'Maintain active Nuqta membership',
      'Earn points through regular purchases',
      'Higher tiers = Better prizes access',
      'Automatic entry based on points earned',
      'VIP members get 2x entries'
    ],
    rules: [
      'Tier status determines prize eligibility',
      'Points must be earned in qualifying period',
      'Experiences must be redeemed within 6 months',
      'Non-transferable',
      'Subject to availability'
    ],
    marketing: {
      channels: ['Instagram', 'LinkedIn', 'Premium email', 'In-app exclusive section'],
      content: [
        'Luxury lifestyle photography',
        'Winner experience documentation',
        'Partner venue features',
        'VIP tier benefits explainer',
        'Aspirational brand storytelling'
      ],
      budget: 'AED 40,000/quarter (prizes + production)'
    },
    expectedResults: [
      { metric: 'Tier Upgrades', target: '+50% Gold/Platinum' },
      { metric: 'High-Value User Retention', target: '90%+' },
      { metric: 'Average Transaction Value', target: '+25%' },
      { metric: 'Premium Perception Score', target: '+40%' }
    ],
    legalNotes: [
      'Partner agreements for experiences',
      'Blackout dates clearly communicated',
      'Insurance for high-value items'
    ]
  }
];

const weeklyPrizes = [
  { name: 'AirPods Pro', value: 'AED 1,000', icon: Headphones, frequency: '3/week' },
  { name: 'Mall Gift Cards', value: 'AED 500', icon: ShoppingBag, frequency: '5/week' },
  { name: 'Cinema Tickets', value: 'AED 200', icon: Ticket, frequency: '10/week' },
  { name: 'Restaurant Vouchers', value: 'AED 300', icon: Gift, frequency: '10/week' },
  { name: 'Spa Vouchers', value: 'AED 400', icon: Sparkles, frequency: '5/week' },
  { name: 'Fitness Memberships', value: 'AED 500', icon: Trophy, frequency: '3/week' }
];

export default function BigWinCampaignsPage() {
  const [expandedCampaign, setExpandedCampaign] = useState<string>('monthly-mega');
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  const copyToClipboard = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates({ ...copiedStates, [id]: true });
    setTimeout(() => setCopiedStates(prev => ({ ...prev, [id]: false })), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950">
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
            <span className="text-slate-400">Big Win Campaigns</span>
          </div>
          <Link href="/campaigns" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft size={16} />
            <span className="text-sm">All Campaigns</span>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#c9a227]/20 to-purple-500/20 rounded-full border border-[#c9a227]/30 mb-4">
            <Trophy className="text-[#c9a227]" size={16} />
            <span className="text-[#c9a227] text-sm font-medium">Mega Prize Campaigns</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pay with Nuqta. <span className="text-[#c9a227]">Win Big.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Turn everyday purchases into life-changing wins. Cars, iPhones, gold, travel, and more.
          </p>
        </div>

        {/* Prize Showcase */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Car, name: 'Cars', value: 'AED 150K+', color: 'from-red-500 to-orange-500' },
            { icon: Smartphone, name: 'iPhones', value: 'Monthly', color: 'from-blue-500 to-cyan-500' },
            { icon: Gem, name: 'Gold', value: 'AED 8K', color: 'from-[#c9a227] to-amber-400' },
            { icon: Plane, name: 'Travel', value: 'AED 10K', color: 'from-purple-500 to-pink-500' }
          ].map((prize, idx) => (
            <div key={idx} className="relative overflow-hidden rounded-xl p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-[#c9a227]/50 transition-all group">
              <div className={`absolute inset-0 bg-gradient-to-br ${prize.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
              <prize.icon className="text-white mb-3" size={32} />
              <h3 className="text-lg font-bold text-white">{prize.name}</h3>
              <p className="text-[#c9a227] font-medium">{prize.value}</p>
            </div>
          ))}
        </div>

        {/* Campaign Details */}
        <div className="space-y-6 mb-12">
          {bigWinCampaigns.map(campaign => (
            <div key={campaign.id} className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              {/* Campaign Header */}
              <button
                onClick={() => setExpandedCampaign(expandedCampaign === campaign.id ? '' : campaign.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c9a227] to-amber-600 flex items-center justify-center">
                    <Trophy className="text-white" size={24} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white">{campaign.name}</h3>
                    <p className="text-[#c9a227] font-medium">"{campaign.tagline}"</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                    {campaign.duration}
                  </span>
                  {expandedCampaign === campaign.id ? (
                    <ChevronDown className="text-[#c9a227]" size={24} />
                  ) : (
                    <ChevronRight className="text-slate-400" size={24} />
                  )}
                </div>
              </button>

              {/* Expanded Content */}
              {expandedCampaign === campaign.id && (
                <div className="border-t border-white/10 p-6 space-y-8">
                  {/* Description */}
                  <div>
                    <p className="text-slate-300 text-lg">{campaign.description}</p>
                  </div>

                  {/* Prizes Grid */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Gift className="text-[#c9a227]" size={20} />
                      Prizes
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {campaign.prizes.map(prize => {
                        const Icon = prize.icon;
                        return (
                          <div key={prize.id} className="bg-black/30 rounded-xl p-5 border border-white/10">
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 rounded-lg bg-[#c9a227]/20 flex items-center justify-center flex-shrink-0">
                                <Icon className="text-[#c9a227]" size={24} />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                  <h5 className="font-bold text-white">{prize.name}</h5>
                                  <span className="text-[#c9a227] font-bold">{prize.value}</span>
                                </div>
                                <p className="text-slate-400 text-sm mb-2">{prize.frequency}</p>
                                <div className="space-y-1 text-sm">
                                  <p className="text-slate-500"><span className="text-slate-400">Eligibility:</span> {prize.eligibility}</p>
                                  <p className="text-slate-500"><span className="text-slate-400">Mechanic:</span> {prize.mechanic}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* How to Enter */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <CheckCircle className="text-green-400" size={20} />
                        How to Enter
                      </h4>
                      <ol className="space-y-3">
                        {campaign.howToEnter.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                              {idx + 1}
                            </span>
                            <span className="text-slate-300">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <AlertCircle className="text-amber-400" size={20} />
                        Rules & Terms
                      </h4>
                      <ul className="space-y-2">
                        {campaign.rules.map((rule, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-400 text-sm">
                            <span className="text-amber-400">•</span>
                            {rule}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Marketing Plan */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Target className="text-purple-400" size={20} />
                      Marketing Plan
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/30">
                        <h5 className="font-bold text-purple-300 mb-2">Channels</h5>
                        <div className="flex flex-wrap gap-1">
                          {campaign.marketing.channels.map((ch, idx) => (
                            <span key={idx} className="px-2 py-0.5 bg-white/10 text-slate-300 rounded text-xs">
                              {ch}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/30">
                        <h5 className="font-bold text-purple-300 mb-2">Content Ideas</h5>
                        <ul className="space-y-1">
                          {campaign.marketing.content.slice(0, 4).map((c, idx) => (
                            <li key={idx} className="text-slate-400 text-xs flex items-center gap-1">
                              <Sparkles size={10} className="text-purple-400" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/30">
                        <h5 className="font-bold text-purple-300 mb-2">Budget</h5>
                        <p className="text-2xl font-bold text-white">{campaign.marketing.budget}</p>
                      </div>
                    </div>
                  </div>

                  {/* Expected Results */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <TrendingUp className="text-green-400" size={20} />
                      Expected Results
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {campaign.expectedResults.map((result, idx) => (
                        <div key={idx} className="bg-green-500/10 rounded-xl p-4 border border-green-500/30 text-center">
                          <p className="text-2xl font-bold text-green-400">{result.target}</p>
                          <p className="text-slate-400 text-sm">{result.metric}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Copy Tagline Button */}
                  <div className="flex gap-4">
                    <button
                      onClick={() => copyToClipboard(campaign.id, campaign.tagline)}
                      className="flex items-center gap-2 px-4 py-2 bg-[#c9a227] text-black rounded-lg hover:bg-[#e8c547] transition-colors font-medium"
                    >
                      {copiedStates[campaign.id] ? <Check size={16} /> : <Copy size={16} />}
                      {copiedStates[campaign.id] ? 'Copied!' : 'Copy Tagline'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Weekly Prizes */}
        <div className="bg-gradient-to-r from-[#c9a227]/10 to-purple-500/10 rounded-xl p-6 border border-[#c9a227]/30 mb-12">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Calendar className="text-[#c9a227]" size={24} />
            Weekly Instant Win Prizes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {weeklyPrizes.map((prize, idx) => {
              const Icon = prize.icon;
              return (
                <div key={idx} className="bg-black/30 rounded-xl p-4 text-center border border-white/10">
                  <Icon className="text-[#c9a227] mx-auto mb-2" size={24} />
                  <h4 className="text-white font-medium text-sm">{prize.name}</h4>
                  <p className="text-[#c9a227] font-bold">{prize.value}</p>
                  <p className="text-slate-500 text-xs">{prize.frequency}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Implementation Checklist */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4">Implementation Checklist</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-slate-300 mb-3">Legal Requirements</h4>
              <ul className="space-y-2">
                {[
                  'Register with DED for prize draws',
                  'Draft comprehensive T&Cs',
                  'Insurance for high-value prizes',
                  'Winner verification process',
                  'Tax advisory for winners'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-400 text-sm">
                    <CheckCircle className="text-green-400 flex-shrink-0" size={14} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-300 mb-3">Technical Setup</h4>
              <ul className="space-y-2">
                {[
                  'Entry tracking system',
                  'Random draw algorithm',
                  'Winner notification automation',
                  'Leaderboard display',
                  'Analytics dashboard'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-400 text-sm">
                    <CheckCircle className="text-blue-400 flex-shrink-0" size={14} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
