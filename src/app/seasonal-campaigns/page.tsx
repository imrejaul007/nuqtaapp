'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Calendar,
  Sun,
  Moon,
  Gift,
  Star,
  Sparkles,
  Heart,
  ShoppingBag,
  Plane,
  Music2,
  Trophy,
  Flag,
  Zap,
  Target,
  Users,
  TrendingUp,
  DollarSign,
  ChevronDown,
  ChevronRight,
  Copy,
  Check,
  Clock,
  MapPin,
  PartyPopper,
  Cake,
  Snowflake,
  Umbrella,
  Flower2,
  Palmtree,
  GraduationCap,
  Briefcase,
  Baby,
  Gem,
  Crown
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

interface SeasonalCampaign {
  id: string;
  name: string;
  dates: string;
  icon: React.ElementType;
  color: string;
  description: string;
  targetAudience: string;
  campaignIdeas: {
    name: string;
    mechanic: string;
    reward: string;
  }[];
  contentThemes: string[];
  merchantTieIns: string[];
  budget: string;
  expectedImpact: string;
}

const seasonalCampaigns: SeasonalCampaign[] = [
  {
    id: 'ramadan',
    name: 'Ramadan & Eid',
    dates: 'March - April (varies)',
    icon: Moon,
    color: 'from-emerald-500 to-teal-600',
    description: 'The holiest month for Muslims. Focus on family, generosity, iftar gatherings, and Eid celebrations.',
    targetAudience: 'Muslim community, families, everyone celebrating',
    campaignIdeas: [
      { name: 'Iftar Points Bonus', mechanic: '2x points on all iftar dining (6-8pm)', reward: 'Double points daily' },
      { name: 'Ramadan Giving', mechanic: 'Donate points to charity, Nuqta matches', reward: 'Matched donations' },
      { name: '30 Days of Rewards', mechanic: 'Daily surprise rewards throughout Ramadan', reward: 'Different prize daily' },
      { name: 'Eid Shopping Spree', mechanic: '3x points on fashion/gifts during Eid week', reward: 'Triple points' },
      { name: 'Family Iftar Challenge', mechanic: 'Host 5 iftars at Nuqta merchants, win big', reward: 'AED 1,000 voucher' }
    ],
    contentThemes: [
      'Best iftar spots in Dubai',
      'Ramadan meal prep + points earned',
      'Eid outfit shopping hauls',
      'Family gathering content',
      'Charity and giving stories'
    ],
    merchantTieIns: [
      'Restaurants: Iftar set menus with bonus points',
      'Fashion: Eid collection launches',
      'Salons: Pre-Eid beauty packages',
      'Supermarkets: Ramadan essentials rewards',
      'Gyms: Post-iftar workout programs'
    ],
    budget: 'AED 50,000-80,000',
    expectedImpact: '+60% engagement, +40% new users'
  },
  {
    id: 'dsf',
    name: 'Dubai Shopping Festival',
    dates: 'December - January',
    icon: ShoppingBag,
    color: 'from-pink-500 to-rose-600',
    description: 'Dubai\'s biggest shopping event. Massive discounts, raffles, and entertainment across the city.',
    targetAudience: 'Shoppers, tourists, deal hunters, families',
    campaignIdeas: [
      { name: 'DSF Mega Draw', mechanic: 'Every purchase = entry to win car', reward: 'Brand new car' },
      { name: 'Shop & Win Daily', mechanic: 'Daily prizes for shoppers', reward: 'AED 500-5,000 daily' },
      { name: 'Mall Crawl Challenge', mechanic: 'Visit 10 Nuqta merchants across malls', reward: '1,000 bonus points' },
      { name: 'Tourist Welcome Bonus', mechanic: 'First purchase bonus for visitors', reward: '200 welcome points' },
      { name: 'DSF Leaderboard', mechanic: 'Top spenders win exclusive prizes', reward: 'VIP experiences' }
    ],
    contentThemes: [
      'Best DSF deals at Nuqta merchants',
      'Shopping haul videos',
      'Mall guides and itineraries',
      'Tourist tips for DSF',
      'Daily deal alerts'
    ],
    merchantTieIns: [
      'Retail: Exclusive Nuqta member discounts',
      'Malls: Cross-promotion with mall events',
      'Restaurants: Shopping break meal deals',
      'Entertainment: Post-shopping activities',
      'Hotels: Tourist packages'
    ],
    budget: 'AED 100,000-150,000',
    expectedImpact: '+100% transactions, +50% new users'
  },
  {
    id: 'summer',
    name: 'Summer Survival',
    dates: 'June - August',
    icon: Sun,
    color: 'from-orange-500 to-yellow-500',
    description: 'Hot summer months when indoor activities peak. Focus on cooling experiences and indoor entertainment.',
    targetAudience: 'Residents staying in Dubai, families, indoor activity seekers',
    campaignIdeas: [
      { name: 'Beat the Heat', mechanic: 'Bonus points at AC venues', reward: '1.5x points indoors' },
      { name: 'Summer Staycation', mechanic: 'Hotel bookings earn mega points', reward: '5x points on hotels' },
      { name: 'Cool Down Rewards', mechanic: 'Ice cream, smoothies, cold drinks bonus', reward: '2x points on cold treats' },
      { name: 'Indoor Adventure', mechanic: 'Visit 5 indoor attractions', reward: '500 bonus points' },
      { name: 'Summer Movie Marathon', mechanic: 'Cinema visits earn extra', reward: '3x points at cinemas' }
    ],
    contentThemes: [
      'Best indoor activities in Dubai',
      'Summer staycation guides',
      'Cool cafes and dessert spots',
      'Water park and pool reviews',
      'Summer survival tips'
    ],
    merchantTieIns: [
      'Malls: Indoor entertainment partnerships',
      'Hotels: Staycation packages',
      'Cinemas: Summer blockbuster promos',
      'Ice cream/dessert: Featured partners',
      'Water parks: Entry + points combo'
    ],
    budget: 'AED 40,000-60,000',
    expectedImpact: '+30% retention during slow season'
  },
  {
    id: 'national-day',
    name: 'UAE National Day',
    dates: 'December 2-3',
    icon: Flag,
    color: 'from-red-500 to-green-600',
    description: 'Celebrating the UAE\'s founding. Patriotic spirit, national pride, and special events.',
    targetAudience: 'UAE residents, Emiratis, patriotic community',
    campaignIdeas: [
      { name: '52 Points Bonus', mechanic: 'Earn 52 bonus points (UAE age)', reward: '52 free points' },
      { name: 'Emirati Business Support', mechanic: '3x points at Emirati-owned businesses', reward: 'Triple points' },
      { name: 'Heritage Trail', mechanic: 'Visit cultural spots on Nuqta', reward: 'Exclusive badge + 200 pts' },
      { name: 'National Day Giveaway', mechanic: 'Win trip to heritage sites', reward: 'Abu Dhabi experience' },
      { name: 'Flag Colors Challenge', mechanic: 'Post in UAE colors, win prizes', reward: 'Daily winners' }
    ],
    contentThemes: [
      'UAE heritage and culture',
      'Emirati business spotlights',
      'National Day celebration guides',
      'Traditional food and experiences',
      'Patriotic user content'
    ],
    merchantTieIns: [
      'Emirati restaurants: Traditional food promos',
      'Cultural venues: Heritage experiences',
      'Fashion: UAE-themed merchandise',
      'Hotels: Staycation packages',
      'All merchants: National Day decor'
    ],
    budget: 'AED 30,000-50,000',
    expectedImpact: '+45% engagement, brand loyalty boost'
  },
  {
    id: 'new-year',
    name: 'New Year & NYE',
    dates: 'December 31 - January',
    icon: PartyPopper,
    color: 'from-purple-500 to-indigo-600',
    description: 'New Year\'s Eve celebrations and fresh start energy. Resolutions, parties, and new beginnings.',
    targetAudience: 'Everyone, party-goers, resolution makers',
    campaignIdeas: [
      { name: 'NYE Party Points', mechanic: '5x points on NYE dining/events', reward: '5x points one night' },
      { name: 'New Year, New Rewards', mechanic: 'Reset bonus - start fresh with 100 points', reward: '100 free points' },
      { name: 'Resolution Rewards', mechanic: 'Set goals, earn for achieving them', reward: 'Goal-based points' },
      { name: 'Countdown Challenge', mechanic: 'Visit 10 places before midnight', reward: '1,000 points' },
      { name: 'First Purchase 2026', mechanic: 'First transaction of year = bonus', reward: '50 bonus points' }
    ],
    contentThemes: [
      'Best NYE parties and events',
      'New Year resolution tips',
      'Year in review - points earned',
      'Fresh start content',
      'January goals and plans'
    ],
    merchantTieIns: [
      'Restaurants/clubs: NYE packages',
      'Hotels: NYE staycations',
      'Gyms: January membership promos',
      'Salons: New year makeovers',
      'All: Fresh start messaging'
    ],
    budget: 'AED 60,000-80,000',
    expectedImpact: '+80% NYE transactions, strong January start'
  },
  {
    id: 'valentines',
    name: 'Valentine\'s Day',
    dates: 'February 14',
    icon: Heart,
    color: 'from-red-400 to-pink-500',
    description: 'Day of love and romance. Couples, gifts, dining experiences, and romantic gestures.',
    targetAudience: 'Couples, gift buyers, romantic planners',
    campaignIdeas: [
      { name: 'Couples Double Points', mechanic: 'Dine together, both earn double', reward: '2x points for two' },
      { name: 'Gift of Points', mechanic: 'Transfer points to loved one', reward: 'Point gifting feature' },
      { name: 'Love Story Contest', mechanic: 'Share your story, win romantic dinner', reward: 'AED 2,000 dinner' },
      { name: 'Rose Trail', mechanic: 'Visit 5 romantic spots', reward: '500 bonus points' },
      { name: 'Anti-Valentine\'s', mechanic: 'Singles earn extra on self-care', reward: '2x points on spa/treats' }
    ],
    contentThemes: [
      'Best romantic restaurants',
      'Valentine\'s gift guides',
      'Date night ideas',
      'Self-love for singles',
      'Couple goals content'
    ],
    merchantTieIns: [
      'Restaurants: Special menus',
      'Florists: Rose + points combos',
      'Jewelry: Gift purchases bonus',
      'Spas: Couples packages',
      'Hotels: Romantic staycations'
    ],
    budget: 'AED 25,000-40,000',
    expectedImpact: '+50% dining transactions'
  },
  {
    id: 'diwali',
    name: 'Diwali',
    dates: 'October - November (varies)',
    icon: Sparkles,
    color: 'from-amber-500 to-orange-600',
    description: 'Festival of lights. Celebration, sweets, shopping, and family gatherings for Indian community.',
    targetAudience: 'Indian expat community, South Asian residents',
    campaignIdeas: [
      { name: 'Festival of Points', mechanic: '3x points during Diwali week', reward: 'Triple points' },
      { name: 'Diwali Dhamaka', mechanic: 'Spin wheel for daily prizes', reward: 'Random rewards' },
      { name: 'Sweet Rewards', mechanic: 'Bonus on mithai/sweet purchases', reward: '2x on sweets' },
      { name: 'Lakshmi Bonus', mechanic: 'Gold/jewelry purchases mega points', reward: '5x on gold' },
      { name: 'Family Feast', mechanic: 'Host Diwali dinner, earn big', reward: '1,000 bonus points' }
    ],
    contentThemes: [
      'Best Indian restaurants for Diwali',
      'Diwali shopping guides',
      'Sweet shop spotlights',
      'Festival outfit ideas',
      'Decoration and celebration tips'
    ],
    merchantTieIns: [
      'Indian restaurants: Festival menus',
      'Sweet shops: Diwali boxes',
      'Jewelry: Gold promos',
      'Fashion: Ethnic wear',
      'Supermarkets: Diwali essentials'
    ],
    budget: 'AED 35,000-50,000',
    expectedImpact: '+70% Indian community engagement'
  },
  {
    id: 'back-to-school',
    name: 'Back to School',
    dates: 'August - September',
    icon: GraduationCap,
    color: 'from-blue-500 to-cyan-600',
    description: 'School season starts. Parents shopping for supplies, uniforms, and preparing for the year.',
    targetAudience: 'Parents, students, families',
    campaignIdeas: [
      { name: 'School Supply Bonus', mechanic: '2x points on school supplies', reward: 'Double points' },
      { name: 'Uniform Rewards', mechanic: 'Points on uniform purchases', reward: 'Per-item bonus' },
      { name: 'Parent Survival Kit', mechanic: 'Coffee shop bonus for tired parents', reward: 'Free coffee after 5 visits' },
      { name: 'Student Welcome', mechanic: 'Students get bonus on sign up', reward: '100 welcome points' },
      { name: 'Family Prep Challenge', mechanic: 'Complete school prep list', reward: '500 bonus points' }
    ],
    contentThemes: [
      'Back to school shopping guides',
      'Lunch box ideas',
      'Parent hacks',
      'Student deals and discounts',
      'After-school activity guides'
    ],
    merchantTieIns: [
      'Stationery stores: Supply promos',
      'Uniform shops: Partnerships',
      'Cafes: Parent morning coffee',
      'Gyms: After-school activities',
      'Tutoring: Education partnerships'
    ],
    budget: 'AED 30,000-45,000',
    expectedImpact: '+40% family segment engagement'
  },
  {
    id: 'mothers-day',
    name: 'Mother\'s Day',
    dates: 'March 21 (Arab) / May (Western)',
    icon: Flower2,
    color: 'from-pink-400 to-purple-500',
    description: 'Celebrating mothers. Gifts, pampering, brunch, and appreciation.',
    targetAudience: 'Children, partners, families celebrating moms',
    campaignIdeas: [
      { name: 'Mom\'s Day Out', mechanic: 'Spa/salon bonus for mom', reward: '3x points on pampering' },
      { name: 'Brunch for Mom', mechanic: 'Family brunch earns extra', reward: '2x points on brunch' },
      { name: 'Gift for Mom', mechanic: 'Flower/gift purchases bonus', reward: 'Per-gift bonus' },
      { name: 'Mom Appreciation', mechanic: 'Tag mom in story, win prize', reward: 'AED 500 spa voucher' },
      { name: 'Super Mom', mechanic: 'Moms earn double all day', reward: '2x for mothers' }
    ],
    contentThemes: [
      'Best brunch spots for mom',
      'Mother\'s Day gift guides',
      'Spa and pampering recommendations',
      'Mom appreciation stories',
      'Family celebration ideas'
    ],
    merchantTieIns: [
      'Spas: Mom packages',
      'Restaurants: Brunch specials',
      'Florists: Bouquet + points',
      'Salons: Makeover promos',
      'Retail: Gift suggestions'
    ],
    budget: 'AED 20,000-30,000',
    expectedImpact: '+35% female-focused merchant traffic'
  },
  {
    id: 'fathers-day',
    name: 'Father\'s Day',
    dates: 'June (3rd Sunday)',
    icon: Briefcase,
    color: 'from-slate-500 to-blue-600',
    description: 'Celebrating fathers. Gifts, experiences, and family time.',
    targetAudience: 'Children, partners, families celebrating dads',
    campaignIdeas: [
      { name: 'Dad\'s Day Off', mechanic: 'Experience-based rewards', reward: '3x on activities' },
      { name: 'Grill Master', mechanic: 'BBQ/steakhouse bonus', reward: '2x at steakhouses' },
      { name: 'Tech Dad', mechanic: 'Electronics purchases bonus', reward: 'Tech store promos' },
      { name: 'Golf/Sports', mechanic: 'Sports activity rewards', reward: 'Activity bonus' },
      { name: 'Father-Child', mechanic: 'Activities together earn more', reward: 'Bonding bonus' }
    ],
    contentThemes: [
      'Best experiences for dad',
      'Father\'s Day gift guides',
      'Dad-approved restaurants',
      'Sports and activity ideas',
      'Father appreciation stories'
    ],
    merchantTieIns: [
      'Steakhouses: Dad menus',
      'Sports venues: Activity promos',
      'Tech stores: Gift partnerships',
      'Golf/recreation: Experience packages',
      'Watch stores: Luxury gift promos'
    ],
    budget: 'AED 20,000-30,000',
    expectedImpact: '+30% male-focused merchant traffic'
  },
  {
    id: 'halloween',
    name: 'Halloween',
    dates: 'October 31',
    icon: Moon,
    color: 'from-orange-600 to-black',
    description: 'Spooky season celebrations. Costumes, parties, themed events.',
    targetAudience: 'Young adults, expats, party-goers, families',
    campaignIdeas: [
      { name: 'Trick or Treat', mechanic: 'Random bonus or penalty on purchases', reward: 'Surprise rewards' },
      { name: 'Costume Contest', mechanic: 'Best costume wins big', reward: 'AED 1,000 prize' },
      { name: 'Haunted Trail', mechanic: 'Visit spooky-themed venues', reward: '500 bonus points' },
      { name: 'Pumpkin Spice', mechanic: '2x on seasonal drinks/treats', reward: 'Double points' },
      { name: 'Scary Movie Night', mechanic: 'Cinema bonus for horror films', reward: 'Movie + snacks bonus' }
    ],
    contentThemes: [
      'Best Halloween parties in Dubai',
      'Costume ideas and where to buy',
      'Spooky-themed cafes and events',
      'Pumpkin spice everything',
      'Family-friendly Halloween activities'
    ],
    merchantTieIns: [
      'Costume shops: Party supplies',
      'Restaurants: Themed menus',
      'Bars/clubs: Party partnerships',
      'Cinemas: Horror film promos',
      'Cafes: Seasonal drinks'
    ],
    budget: 'AED 15,000-25,000',
    expectedImpact: '+25% entertainment segment'
  },
  {
    id: 'christmas',
    name: 'Christmas & Holidays',
    dates: 'December 24-25',
    icon: Gift,
    color: 'from-red-600 to-green-600',
    description: 'Holiday season celebrations. Gift giving, festive dining, and holiday spirit.',
    targetAudience: 'Christian community, Western expats, celebrators',
    campaignIdeas: [
      { name: '12 Days of Points', mechanic: 'Different reward each of 12 days', reward: 'Daily surprises' },
      { name: 'Secret Santa', mechanic: 'Gift purchases earn mystery bonus', reward: 'Random bonus 1-5x' },
      { name: 'Holiday Feast', mechanic: 'Christmas dinner mega points', reward: '3x on Dec 24-25' },
      { name: 'Gift Card Bonus', mechanic: 'Buy gift cards, earn extra', reward: '10% points back' },
      { name: 'Winter Wonderland', mechanic: 'Visit festive venues', reward: 'Badge + 300 points' }
    ],
    contentThemes: [
      'Christmas markets and events',
      'Holiday gift guides',
      'Festive dining options',
      'Christmas brunch spots',
      'Holiday decoration shopping'
    ],
    merchantTieIns: [
      'Hotels: Christmas packages',
      'Restaurants: Festive menus',
      'Retail: Gift shopping',
      'Markets: Christmas market promos',
      'Entertainment: Holiday shows'
    ],
    budget: 'AED 40,000-60,000',
    expectedImpact: '+50% holiday period transactions'
  }
];

const monthlyThemes = [
  { month: 'January', theme: 'New Year Resolution', focus: 'Gyms, healthy eating, fresh starts' },
  { month: 'February', theme: 'Love Month', focus: 'Valentine\'s, couple activities' },
  { month: 'March', theme: 'Ramadan Prep / Spring', focus: 'Iftar planning, spring activities' },
  { month: 'April', theme: 'Eid Celebrations', focus: 'Shopping, family, celebrations' },
  { month: 'May', theme: 'Mother\'s Day / Summer Prep', focus: 'Gifts, travel planning' },
  { month: 'June', theme: 'Summer Kickoff / Father\'s Day', focus: 'Indoor activities, staycations' },
  { month: 'July', theme: 'Peak Summer', focus: 'Survival mode, cool experiences' },
  { month: 'August', theme: 'Back to School', focus: 'Families, school prep' },
  { month: 'September', theme: 'Fall Return', focus: 'People returning, new season' },
  { month: 'October', theme: 'Diwali / Halloween', focus: 'Festivals, celebrations' },
  { month: 'November', theme: 'Pre-Holiday / Black Friday', focus: 'Shopping, deals' },
  { month: 'December', theme: 'Mega Month', focus: 'DSF, National Day, Christmas, NYE' }
];

export default function SeasonalCampaignsPage() {
  const [expandedCampaign, setExpandedCampaign] = useState<string>('ramadan');
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  const copyToClipboard = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates({ ...copiedStates, [id]: true });
    setTimeout(() => setCopiedStates(prev => ({ ...prev, [id]: false })), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
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
            <span className="text-slate-400">Seasonal Campaigns</span>
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
            <Calendar className="text-[#c9a227]" size={16} />
            <span className="text-[#c9a227] text-sm font-medium">Year-Round Campaign Calendar</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Seasonal <span className="text-[#c9a227]">Campaign Calendar</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            12 major campaigns throughout the year. Never miss a moment to engage users and drive transactions.
          </p>
        </div>

        {/* Monthly Overview */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6">Monthly Themes at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {monthlyThemes.map((item, idx) => (
              <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-[#c9a227]/30 transition-all">
                <h3 className="font-bold text-white text-sm">{item.month}</h3>
                <p className="text-[#c9a227] text-xs mt-1">{item.theme}</p>
                <p className="text-slate-500 text-xs mt-1">{item.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Campaign Cards */}
        <div className="space-y-4">
          {seasonalCampaigns.map(campaign => {
            const Icon = campaign.icon;
            const isExpanded = expandedCampaign === campaign.id;

            return (
              <div key={campaign.id} className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                <button
                  onClick={() => setExpandedCampaign(isExpanded ? '' : campaign.id)}
                  className="w-full p-5 flex items-center justify-between hover:bg-white/5 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${campaign.color} flex items-center justify-center`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-white">{campaign.name}</h3>
                      <p className="text-slate-400 text-sm">{campaign.dates}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="hidden md:block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                      {campaign.expectedImpact}
                    </span>
                    {isExpanded ? <ChevronDown className="text-[#c9a227]" size={20} /> : <ChevronRight className="text-slate-400" size={20} />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="border-t border-white/10 p-5 space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-slate-300 mb-4">{campaign.description}</p>
                        <p className="text-sm"><span className="text-slate-500">Target:</span> <span className="text-slate-300">{campaign.targetAudience}</span></p>
                        <p className="text-sm mt-2"><span className="text-slate-500">Budget:</span> <span className="text-[#c9a227]">{campaign.budget}</span></p>
                      </div>

                      <div>
                        <h4 className="font-bold text-white mb-3">Content Themes</h4>
                        <ul className="space-y-1">
                          {campaign.contentThemes.map((theme, idx) => (
                            <li key={idx} className="text-slate-400 text-sm flex items-center gap-2">
                              <Sparkles className="text-[#c9a227]" size={12} />
                              {theme}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Campaign Ideas */}
                    <div>
                      <h4 className="font-bold text-white mb-4">Campaign Ideas</h4>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {campaign.campaignIdeas.map((idea, idx) => (
                          <div key={idx} className="bg-black/30 rounded-xl p-4 border border-white/10">
                            <h5 className="font-bold text-white mb-2">{idea.name}</h5>
                            <p className="text-slate-400 text-sm mb-2">{idea.mechanic}</p>
                            <div className="flex items-center gap-2 text-[#c9a227] text-sm">
                              <Gift size={14} />
                              {idea.reward}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Merchant Tie-Ins */}
                    <div>
                      <h4 className="font-bold text-white mb-3">Merchant Tie-Ins</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {campaign.merchantTieIns.map((tieIn, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                            <Target className="text-green-400" size={14} />
                            {tieIn}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
    <GlobalFooter />
    </div>
  );
}
