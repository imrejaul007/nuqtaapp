'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Gamepad2,
  Crown,
  Globe,
  Utensils,
  Moon,
  MapPin,
  Coffee,
  Dumbbell,
  Scissors,
  ShoppingBag,
  Car,
  Plane,
  Music2,
  Film,
  Camera,
  Mic,
  Star,
  Heart,
  Users,
  TrendingUp,
  Target,
  ChevronDown,
  ChevronRight,
  Copy,
  Check,
  Instagram,
  Youtube,
  MessageCircle,
  Sparkles,
  Zap,
  Clock,
  Calendar,
  DollarSign
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

interface NicheAccount {
  id: string;
  name: string;
  handle: string;
  category: string;
  icon: React.ElementType;
  description: string;
  targetAudience: string;
  contentPillars: string[];
  postingFrequency: string;
  platforms: string[];
  contentIdeas: string[];
  hashtags: string[];
  growthTarget: string;
  monetization: string;
}

interface LanguageAccount {
  language: string;
  flag: string;
  population: string;
  handle: string;
  contentFocus: string[];
  culturalNotes: string[];
}

const nicheAccounts: NicheAccount[] = [
  {
    id: 'luxury',
    name: 'Nuqta Luxury',
    handle: '@nuqta.luxury',
    category: 'Luxury & Premium',
    icon: Crown,
    description: 'Premium dining, 5-star experiences, high-end shopping, and exclusive rewards for the discerning Dubai resident.',
    targetAudience: 'High-income professionals (30-50), expats, luxury seekers',
    contentPillars: [
      'Fine dining reviews & reservations',
      '5-star hotel experiences',
      'Luxury shopping rewards',
      'VIP member spotlights',
      'Exclusive event access'
    ],
    postingFrequency: '1-2 posts/day',
    platforms: ['Instagram', 'LinkedIn'],
    contentIdeas: [
      '"Experience AED 2,000 dinner for half price with Nuqta Gold"',
      'Dubai\'s most exclusive restaurants (and how to earn points there)',
      'VIP unboxing: What our Platinum members get',
      'Fine dining etiquette + earn while you learn',
      'Luxury spa day - total points earned revealed'
    ],
    hashtags: ['#DubaiLuxury', '#NuqtaVIP', '#LuxuryRewards', '#DubaiFineDining', '#PremiumLifestyle'],
    growthTarget: '15K followers (Year 1)',
    monetization: 'Premium merchant partnerships, sponsored luxury experiences'
  },
  {
    id: 'nightlife',
    name: 'Nuqta After Dark',
    handle: '@nuqta.nightlife',
    category: 'Night Life',
    icon: Moon,
    description: 'Dubai\'s vibrant nightlife scene - clubs, lounges, late-night dining, and entertainment.',
    targetAudience: 'Young professionals (21-35), party-goers, socialites',
    contentPillars: [
      'Best nightlife spots in Dubai',
      'Ladies night deals + points',
      'Late-night food runs',
      'Club/lounge reviews',
      'Weekend plans curated'
    ],
    postingFrequency: '1 post/day, heavy on weekends',
    platforms: ['Instagram', 'TikTok'],
    contentIdeas: [
      'Friday night sorted: Best deals + points tonight',
      'Rating Dubai\'s rooftop bars (and where to earn most)',
      'Ladies night guide: Free entry + Nuqta points',
      '3am hunger? Here\'s where to eat AND earn',
      'Weekend plans: Our picks for tonight'
    ],
    hashtags: ['#DubaiNightlife', '#DubaiNights', '#NuqtaNights', '#DubaiWeekend', '#NightOut'],
    growthTarget: '25K followers (Year 1)',
    monetization: 'Club partnerships, event promotions, table booking commissions'
  },
  {
    id: 'foodie',
    name: 'Nuqta Eats',
    handle: '@nuqta.eats',
    category: 'Food Discovery',
    icon: Utensils,
    description: 'The ultimate Dubai food guide - hidden gems, viral spots, honest reviews, and where to earn the most points.',
    targetAudience: 'Food lovers, content creators, adventurous eaters (18-45)',
    contentPillars: [
      'Restaurant reviews & ratings',
      'Hidden gems discovery',
      'Viral food trends',
      'Best value meals + points',
      'Cuisine spotlights'
    ],
    postingFrequency: '2-3 posts/day',
    platforms: ['Instagram', 'TikTok', 'YouTube'],
    contentIdeas: [
      'This hidden cafe has the best [dish] in Dubai (and it\'s on Nuqta)',
      'Eating at viral TikTok restaurant - worth the hype?',
      'AED 50 vs AED 500 [dish] - which earns more points?',
      'My honest review of [restaurant] - Hero or Trash?',
      'Best [cuisine] restaurants in Dubai ranked'
    ],
    hashtags: ['#DubaiFoodie', '#NuqtaEats', '#DubaiFood', '#FoodDiscovery', '#DubaiRestaurants'],
    growthTarget: '50K followers (Year 1)',
    monetization: 'Restaurant partnerships, food tours, sponsored reviews'
  },
  {
    id: 'gaming',
    name: 'Nuqta Gaming',
    handle: '@nuqta.gaming',
    category: 'Gaming & Esports',
    icon: Gamepad2,
    description: 'Gaming cafes, esports events, gaming lounges, and rewards for the gamer community in UAE.',
    targetAudience: 'Gamers (16-35), esports enthusiasts, tech lovers',
    contentPillars: [
      'Gaming cafe reviews',
      'Esports event coverage',
      'Gaming deals & offers',
      'Community tournaments',
      'Tech/gear reviews'
    ],
    postingFrequency: '1-2 posts/day',
    platforms: ['TikTok', 'Instagram', 'YouTube', 'Discord'],
    contentIdeas: [
      'Best gaming cafes in Dubai (ranked by points earned)',
      'We hosted a Nuqta tournament - here\'s what happened',
      'Gaming all day: How many points did I earn?',
      'Dubai Gaming Week guide + where to earn rewards',
      'New gaming cafe opened - first review!'
    ],
    hashtags: ['#DubaiGaming', '#NuqtaGaming', '#UAEGamers', '#GamingCafe', '#Esports'],
    growthTarget: '20K followers (Year 1)',
    monetization: 'Gaming cafe partnerships, tournament sponsorships, gear reviews'
  },
  {
    id: 'fitness',
    name: 'Nuqta Fit',
    handle: '@nuqta.fit',
    category: 'Fitness & Wellness',
    icon: Dumbbell,
    description: 'Gyms, fitness studios, healthy eating, wellness experiences - earn rewards while getting fit.',
    targetAudience: 'Fitness enthusiasts (20-45), health-conscious individuals',
    contentPillars: [
      'Gym & studio reviews',
      'Healthy restaurant guides',
      'Workout challenges',
      'Wellness experiences',
      'Fitness deals & memberships'
    ],
    postingFrequency: '1-2 posts/day',
    platforms: ['Instagram', 'TikTok', 'YouTube'],
    contentIdeas: [
      'Best gyms in Dubai Marina (and points you can earn)',
      'Healthy meal prep + points earned this week',
      '30-day fitness challenge: Total rewards earned',
      'Spa day recovery - treating myself with points',
      'My weekly fitness routine + Nuqta spots I visit'
    ],
    hashtags: ['#DubaiFitness', '#NuqtaFit', '#FitnessRewards', '#DubaiGym', '#HealthyDubai'],
    growthTarget: '30K followers (Year 1)',
    monetization: 'Gym partnerships, fitness brand sponsorships, wellness retreats'
  },
  {
    id: 'beauty',
    name: 'Nuqta Glow',
    handle: '@nuqta.glow',
    category: 'Beauty & Salon',
    icon: Scissors,
    description: 'Salons, spas, beauty treatments, and self-care experiences with rewards.',
    targetAudience: 'Women (18-45), beauty enthusiasts, self-care lovers',
    contentPillars: [
      'Salon & spa reviews',
      'Beauty treatment guides',
      'Self-care routines',
      'Beauty deals & offers',
      'Makeover reveals'
    ],
    postingFrequency: '1-2 posts/day',
    platforms: ['Instagram', 'TikTok'],
    contentIdeas: [
      'Best nail salons in Dubai (Nuqta verified)',
      'Full makeover day - points earned revealed',
      'Trying viral beauty treatment in Dubai',
      'Self-care Sunday routine + rewards earned',
      'Rating Dubai salons: Which gives best value?'
    ],
    hashtags: ['#DubaiBeauty', '#NuqtaGlow', '#DubaiSalon', '#SelfCareDubai', '#BeautyRewards'],
    growthTarget: '35K followers (Year 1)',
    monetization: 'Salon partnerships, beauty brand sponsorships, treatment packages'
  },
  {
    id: 'travel',
    name: 'Nuqta Wanderlust',
    handle: '@nuqta.travel',
    category: 'Travel & Staycations',
    icon: Plane,
    description: 'Staycations, hotel experiences, weekend getaways, and travel rewards in UAE.',
    targetAudience: 'Travel lovers (25-50), staycation enthusiasts, families',
    contentPillars: [
      'Hotel & resort reviews',
      'Staycation guides',
      'Weekend getaway ideas',
      'Travel rewards tips',
      'Hidden gems in UAE'
    ],
    postingFrequency: '4-5 posts/week',
    platforms: ['Instagram', 'YouTube', 'TikTok'],
    contentIdeas: [
      'Best staycation deals this month (+ points earned)',
      'Weekend in Abu Dhabi: Complete guide',
      'Rating Dubai\'s beach clubs for staycations',
      '5-star hotel for less with Nuqta rewards',
      'Road trip UAE: All the stops where you earn'
    ],
    hashtags: ['#DubaiStaycation', '#NuqtaTravel', '#UAETravel', '#WeekendGetaway', '#TravelRewards'],
    growthTarget: '20K followers (Year 1)',
    monetization: 'Hotel partnerships, travel packages, tourism board collaborations'
  },
  {
    id: 'coffee',
    name: 'Nuqta Coffee',
    handle: '@nuqta.coffee',
    category: 'Coffee & Cafes',
    icon: Coffee,
    description: 'The ultimate Dubai coffee guide - specialty cafes, coffee culture, and where to earn the most.',
    targetAudience: 'Coffee lovers, remote workers, cafe hoppers (20-40)',
    contentPillars: [
      'Cafe reviews & ratings',
      'Best work-from-cafe spots',
      'Coffee brewing tips',
      'New cafe discoveries',
      'Coffee deals & rewards'
    ],
    postingFrequency: '1-2 posts/day',
    platforms: ['Instagram', 'TikTok'],
    contentIdeas: [
      'Best cafes for remote work in Dubai (with WiFi + points)',
      'Rating specialty coffee in [area]',
      'My daily coffee routine: Points earned this month',
      'New cafe alert: First review!',
      'Comparing flat whites across Dubai'
    ],
    hashtags: ['#DubaiCoffee', '#NuqtaCoffee', '#CafeDubai', '#SpecialtyCoffee', '#CoffeeRewards'],
    growthTarget: '25K followers (Year 1)',
    monetization: 'Cafe partnerships, coffee brand sponsorships, work-from-cafe guides'
  }
];

const languageAccounts: LanguageAccount[] = [
  {
    language: 'Arabic',
    flag: '🇦🇪',
    population: '~30% UAE population',
    handle: '@nuqta.arabic',
    contentFocus: ['Arabic-language content', 'UAE national celebrations', 'Arabic dining', 'Family-friendly content'],
    culturalNotes: ['Right-to-left content', 'Ramadan campaigns', 'Respect for local customs', 'Family values emphasis']
  },
  {
    language: 'Hindi',
    flag: '🇮🇳',
    population: '~35% expat population',
    handle: '@nuqta.hindi',
    contentFocus: ['Indian restaurant guides', 'Diwali/Holi campaigns', 'Bollywood references', 'Cricket-related content'],
    culturalNotes: ['Festival tie-ins', 'Indian food focus', 'Bollywood trends', 'Cricket season specials']
  },
  {
    language: 'Urdu',
    flag: '🇵🇰',
    population: '~15% expat population',
    handle: '@nuqta.urdu',
    contentFocus: ['Pakistani restaurant guides', 'Eid celebrations', 'Cricket content', 'Family dining'],
    culturalNotes: ['Similar to Hindi audience', 'Different cultural references', 'Family-centric content']
  },
  {
    language: 'Filipino/Tagalog',
    flag: '🇵🇭',
    population: '~10% expat population',
    handle: '@nuqta.filipino',
    contentFocus: ['Filipino food spots', 'Remittance rewards', 'Community events', 'Budget-friendly finds'],
    culturalNotes: ['Strong community ties', 'Value-conscious', 'Social gatherings', 'OFW support']
  },
  {
    language: 'Malayalam',
    flag: '🇮🇳',
    population: '~8% expat population',
    handle: '@nuqta.malayalam',
    contentFocus: ['Kerala restaurant guides', 'Onam celebrations', 'South Indian food', 'Family content'],
    culturalNotes: ['Strong community', 'Distinct cultural identity', 'Festival celebrations']
  },
  {
    language: 'Bengali',
    flag: '🇧🇩',
    population: '~5% expat population',
    handle: '@nuqta.bangla',
    contentFocus: ['Bengali food spots', 'Community gathering places', 'Budget finds', 'Cultural events'],
    culturalNotes: ['Close-knit community', 'Food-centric culture', 'Price-conscious']
  },
  {
    language: 'Russian',
    flag: '🇷🇺',
    population: 'Growing expat community',
    handle: '@nuqta.russian',
    contentFocus: ['Luxury experiences', 'Fine dining', 'Beach clubs', 'Night life'],
    culturalNotes: ['Premium positioning', 'Luxury focus', 'High spending power']
  },
  {
    language: 'Chinese',
    flag: '🇨🇳',
    population: 'Growing business community',
    handle: '@nuqta.chinese',
    contentFocus: ['Chinese restaurants', 'Business networking spots', 'Shopping districts', 'Lunar New Year'],
    culturalNotes: ['WeChat preferred', 'Business-focused', 'Group dining culture']
  },
  {
    language: 'French',
    flag: '🇫🇷',
    population: 'European expat community',
    handle: '@nuqta.french',
    contentFocus: ['French restaurants', 'European cafes', 'Luxury shopping', 'Wine & dine'],
    culturalNotes: ['Culinary focus', 'Quality over quantity', 'Lifestyle content']
  },
  {
    language: 'Persian/Farsi',
    flag: '🇮🇷',
    population: 'Significant community',
    handle: '@nuqta.persian',
    contentFocus: ['Persian restaurants', 'Cultural events', 'Family gatherings', 'Nowruz celebrations'],
    culturalNotes: ['Family-oriented', 'Rich cultural heritage', 'Food traditions']
  }
];

const gamerContent = [
  { name: 'Gully Cricket', emoji: '🏏', description: 'Street cricket tournaments, local cricket clubs' },
  { name: 'Carrom', emoji: '🎯', description: 'Carrom tournaments, cafe competitions' },
  { name: 'Badminton', emoji: '🏸', description: 'Badminton clubs, weekend leagues' },
  { name: 'Padel', emoji: '🎾', description: 'Padel courts, growing Dubai sport' },
  { name: 'Futsal', emoji: '⚽', description: 'Indoor football leagues, tournaments' },
  { name: 'E-Gaming', emoji: '🎮', description: 'FIFA, PUBG, Fortnite tournaments' },
  { name: 'Board Games', emoji: '🎲', description: 'Board game cafes, game nights' },
  { name: 'Pool/Billiards', emoji: '🎱', description: 'Pool halls, tournaments' }
];

export default function NicheContentPage() {
  const [expandedNiche, setExpandedNiche] = useState<string>('foodie');
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  const copyToClipboard = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates({ ...copiedStates, [id]: true });
    setTimeout(() => setCopiedStates(prev => ({ ...prev, [id]: false })), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950/10 to-slate-950">
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
            <span className="text-slate-400">Niche Content Strategy</span>
          </div>
          <Link href="/content-strategy" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft size={16} />
            <span className="text-sm">Content Strategy</span>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-500/30 mb-4">
            <Target className="text-blue-400" size={16} />
            <span className="text-blue-400 text-sm font-medium">Niche Account Strategy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            One Niche. <span className="text-blue-400">One Account.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Dominate each vertical with dedicated accounts. Targeted content = higher engagement = lower CAC.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-blue-500/10 rounded-xl p-5 border border-blue-500/30 text-center">
            <Target className="text-blue-400 mx-auto mb-2" size={24} />
            <div className="text-3xl font-bold text-blue-400">8</div>
            <div className="text-slate-400 text-sm">Niche Accounts</div>
          </div>
          <div className="bg-purple-500/10 rounded-xl p-5 border border-purple-500/30 text-center">
            <Globe className="text-purple-400 mx-auto mb-2" size={24} />
            <div className="text-3xl font-bold text-purple-400">10</div>
            <div className="text-slate-400 text-sm">Languages</div>
          </div>
          <div className="bg-green-500/10 rounded-xl p-5 border border-green-500/30 text-center">
            <Gamepad2 className="text-green-400 mx-auto mb-2" size={24} />
            <div className="text-3xl font-bold text-green-400">8</div>
            <div className="text-slate-400 text-sm">Gaming Verticals</div>
          </div>
          <div className="bg-amber-500/10 rounded-xl p-5 border border-amber-500/30 text-center">
            <Users className="text-amber-400 mx-auto mb-2" size={24} />
            <div className="text-3xl font-bold text-amber-400">200K+</div>
            <div className="text-slate-400 text-sm">Target Followers</div>
          </div>
        </div>

        {/* Niche Accounts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Star className="text-[#c9a227]" size={24} />
            Niche Account Strategy
          </h2>
          <div className="space-y-4">
            {nicheAccounts.map(account => {
              const Icon = account.icon;
              const isExpanded = expandedNiche === account.id;

              return (
                <div key={account.id} className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                  <button
                    onClick={() => setExpandedNiche(isExpanded ? '' : account.id)}
                    className="w-full p-5 flex items-center justify-between hover:bg-white/5 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                        <Icon className="text-white" size={24} />
                      </div>
                      <div className="text-left">
                        <h3 className="text-lg font-bold text-white">{account.name}</h3>
                        <p className="text-blue-400 text-sm">{account.handle}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="hidden md:block px-3 py-1 bg-white/10 text-slate-300 rounded-full text-sm">
                        {account.category}
                      </span>
                      <span className="hidden md:block text-slate-400 text-sm">{account.growthTarget}</span>
                      {isExpanded ? <ChevronDown className="text-blue-400" size={20} /> : <ChevronRight className="text-slate-400" size={20} />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="border-t border-white/10 p-5 space-y-6">
                      <p className="text-slate-300">{account.description}</p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold text-white mb-3">Target Audience</h4>
                          <p className="text-slate-400 text-sm">{account.targetAudience}</p>

                          <h4 className="font-bold text-white mt-4 mb-3">Content Pillars</h4>
                          <ul className="space-y-2">
                            {account.contentPillars.map((pillar, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                                <Sparkles className="text-blue-400 flex-shrink-0" size={12} />
                                {pillar}
                              </li>
                            ))}
                          </ul>

                          <h4 className="font-bold text-white mt-4 mb-3">Platforms & Frequency</h4>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {account.platforms.map((p, idx) => (
                              <span key={idx} className="px-2 py-1 bg-white/10 text-slate-300 rounded text-xs">{p}</span>
                            ))}
                          </div>
                          <p className="text-slate-400 text-sm">{account.postingFrequency}</p>
                        </div>

                        <div>
                          <h4 className="font-bold text-white mb-3">Content Ideas</h4>
                          <ul className="space-y-2">
                            {account.contentIdeas.map((idea, idx) => (
                              <li key={idx} className="text-slate-400 text-sm flex items-start gap-2">
                                <span className="text-blue-400">•</span>
                                {idea}
                              </li>
                            ))}
                          </ul>

                          <h4 className="font-bold text-white mt-4 mb-3">Hashtags</h4>
                          <div className="flex flex-wrap gap-2">
                            {account.hashtags.map((tag, idx) => (
                              <button
                                key={idx}
                                onClick={() => copyToClipboard(`tag-${account.id}-${idx}`, tag)}
                                className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs hover:bg-blue-500/30 transition-colors"
                              >
                                {tag}
                              </button>
                            ))}
                          </div>

                          <h4 className="font-bold text-white mt-4 mb-3">Monetization</h4>
                          <p className="text-slate-400 text-sm">{account.monetization}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Multi-Language Strategy */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Globe className="text-purple-400" size={24} />
            Multi-Language Account Strategy
          </h2>
          <p className="text-slate-400 mb-6">
            Dubai is home to 200+ nationalities. Reach each community in their language for maximum engagement and trust.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {languageAccounts.map((lang, idx) => (
              <div key={idx} className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-purple-500/30 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{lang.flag}</span>
                  <div>
                    <h3 className="font-bold text-white">{lang.language}</h3>
                    <p className="text-purple-400 text-sm">{lang.handle}</p>
                  </div>
                </div>
                <p className="text-slate-500 text-xs mb-3">{lang.population}</p>

                <div className="mb-3">
                  <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Content Focus</h4>
                  <ul className="space-y-1">
                    {lang.contentFocus.map((focus, fIdx) => (
                      <li key={fIdx} className="text-slate-300 text-xs flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-purple-400" />
                        {focus}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Cultural Notes</h4>
                  <ul className="space-y-1">
                    {lang.culturalNotes.map((note, nIdx) => (
                      <li key={nIdx} className="text-slate-400 text-xs flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-slate-500" />
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gaming Content Strategy */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Gamepad2 className="text-green-400" size={24} />
            Gaming & Sports Content Verticals
          </h2>
          <p className="text-slate-400 mb-6">
            Cover both digital gaming and traditional sports/games popular in the UAE community.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gamerContent.map((game, idx) => (
              <div key={idx} className="bg-green-500/10 rounded-xl p-5 border border-green-500/30 text-center hover:bg-green-500/20 transition-all">
                <span className="text-4xl mb-3 block">{game.emoji}</span>
                <h3 className="font-bold text-white mb-1">{game.name}</h3>
                <p className="text-slate-400 text-xs">{game.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-green-500/10 rounded-xl p-6 border border-green-500/30">
            <h3 className="font-bold text-white mb-4">Gaming Content Ideas</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Nuqta-sponsored gaming tournaments</li>
                <li>• Best gaming cafes ranked by points earned</li>
                <li>• Stream highlights from Nuqta partner locations</li>
                <li>• Pro gamer tips + where they play in Dubai</li>
              </ul>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Weekend cricket/futsal league sponsorships</li>
                <li>• Gaming setup tours at partner cafes</li>
                <li>• eSports event coverage</li>
                <li>• Community challenges with Nuqta rewards</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-6">Launch Timeline</h3>
          <div className="space-y-4">
            {[
              { phase: 'Phase 1 (Month 1-3)', accounts: '@nuqta.eats, @nuqta.coffee, @nuqta.arabic', status: 'Start with highest volume niches' },
              { phase: 'Phase 2 (Month 4-6)', accounts: '@nuqta.nightlife, @nuqta.fit, @nuqta.hindi', status: 'Expand to lifestyle + major expat community' },
              { phase: 'Phase 3 (Month 7-9)', accounts: '@nuqta.luxury, @nuqta.glow, @nuqta.gaming', status: 'Premium segments + youth appeal' },
              { phase: 'Phase 4 (Month 10-12)', accounts: 'Remaining language accounts', status: 'Full multi-language coverage' }
            ].map((phase, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-white/5 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-[#c9a227] flex items-center justify-center text-black font-bold flex-shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-bold text-white">{phase.phase}</h4>
                  <p className="text-[#c9a227] text-sm">{phase.accounts}</p>
                  <p className="text-slate-400 text-sm">{phase.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    <GlobalFooter />
    </div>
  );
}
