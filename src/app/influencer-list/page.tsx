'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Instagram,
  Video,
  Users,
  Star,
  Heart,
  MessageCircle,
  Search,
  Filter,
  ExternalLink,
  Copy,
  Check,
  Coffee,
  Scissors,
  Dumbbell,
  ShoppingBag,
  Utensils,
  Sparkles,
  TrendingUp,
  Target,
  DollarSign,
  MapPin,
  Globe,
  Mail,
  Phone,
  ChevronDown,
  ChevronRight,
  Crown,
  Zap,
  Award
} from 'lucide-react';

interface Influencer {
  id: string;
  name: string;
  handle: string;
  platform: 'instagram' | 'tiktok' | 'youtube' | 'multi';
  followers: string;
  engagement: string;
  category: string[];
  niche: string;
  location: string;
  tier: 'nano' | 'micro' | 'mid' | 'macro' | 'mega';
  estimatedRate: string;
  contentStyle: string;
  bestFor: string[];
  contactMethod: string;
  notes?: string;
  verified?: boolean;
  previousBrands?: string[];
}

const influencers: Influencer[] = [
  // Lifestyle & General
  {
    id: 'inf1',
    name: 'Dubai Lifestyle Blog',
    handle: '@dubailifestyleblog',
    platform: 'instagram',
    followers: '450K',
    engagement: '3.2%',
    category: ['lifestyle', 'food', 'fashion'],
    niche: 'Dubai Lifestyle & Experiences',
    location: 'Dubai Marina',
    tier: 'macro',
    estimatedRate: 'AED 8,000-15,000/post',
    contentStyle: 'High-quality photos, lifestyle stories, restaurant reviews',
    bestFor: ['Brand awareness', 'Restaurant partners', 'Lifestyle positioning'],
    contactMethod: 'DM or email: contact@dubailifestyleblog.com',
    verified: true,
    previousBrands: ['Careem', 'Noon', 'Talabat'],
    notes: 'Great for launch announcement, premium feel'
  },
  {
    id: 'inf2',
    name: 'Sasha UAE',
    handle: '@sashauae',
    platform: 'instagram',
    followers: '280K',
    engagement: '4.1%',
    category: ['lifestyle', 'travel', 'food'],
    niche: 'Expat Life in UAE',
    location: 'Downtown Dubai',
    tier: 'mid',
    estimatedRate: 'AED 5,000-8,000/post',
    contentStyle: 'Relatable expat content, hidden gems, tips',
    bestFor: ['Expat audience', 'Discovery content', 'Authentic reviews'],
    contactMethod: 'DM preferred',
    verified: true,
    previousBrands: ['Entertainer', 'Groupon'],
    notes: 'High trust factor with audience, great for explaining app'
  },
  {
    id: 'inf3',
    name: 'Ahmed Adventures',
    handle: '@ahmedadventures',
    platform: 'tiktok',
    followers: '520K',
    engagement: '8.5%',
    category: ['lifestyle', 'comedy', 'food'],
    niche: 'Dubai Comedy & Lifestyle',
    location: 'JBR',
    tier: 'macro',
    estimatedRate: 'AED 6,000-12,000/video',
    contentStyle: 'Funny skits, relatable Dubai moments, viral content',
    bestFor: ['Viral potential', 'Young audience', 'Brand recall'],
    contactMethod: 'Email: ahmed@ahmedadventures.com',
    verified: true,
    notes: 'Can create funny content about losing punch cards, earning coins'
  },

  // Food & Cafe
  {
    id: 'inf4',
    name: 'Dubai Foodie',
    handle: '@dubaifoodie',
    platform: 'instagram',
    followers: '380K',
    engagement: '3.8%',
    category: ['food', 'restaurants', 'cafes'],
    niche: 'Food Reviews & Restaurant Discovery',
    location: 'Various',
    tier: 'macro',
    estimatedRate: 'AED 6,000-10,000/post',
    contentStyle: 'Food photography, honest reviews, new openings',
    bestFor: ['Cafe partners', 'Restaurant partners', 'Food-focused campaigns'],
    contactMethod: 'Email: hello@dubaifoodie.ae',
    verified: true,
    previousBrands: ['Zomato', 'Deliveroo', 'Talabat'],
    notes: 'Perfect for cafe partner announcements'
  },
  {
    id: 'inf5',
    name: 'Coffee Culture Dubai',
    handle: '@coffeeculturedxb',
    platform: 'instagram',
    followers: '85K',
    engagement: '5.2%',
    category: ['coffee', 'cafes'],
    niche: 'Specialty Coffee Scene',
    location: 'Al Quoz, Jumeirah',
    tier: 'micro',
    estimatedRate: 'AED 1,500-3,000/post',
    contentStyle: 'Coffee art, cafe interiors, coffee education',
    bestFor: ['Coffee shops', 'Specialty cafe partners', 'Niche audience'],
    contactMethod: 'DM on Instagram',
    notes: 'Highly engaged coffee community, great for cafe launches'
  },
  {
    id: 'inf6',
    name: 'Hungry in Dubai',
    handle: '@hungryindubai',
    platform: 'tiktok',
    followers: '290K',
    engagement: '7.2%',
    category: ['food', 'restaurants'],
    niche: 'Food Reviews & Mukbang',
    location: 'Deira, Bur Dubai',
    tier: 'mid',
    estimatedRate: 'AED 4,000-7,000/video',
    contentStyle: 'Quick reviews, street food, budget eats',
    bestFor: ['Casual dining', 'Value proposition', 'Broad appeal'],
    contactMethod: 'DM or email via bio',
    notes: 'Great for showing value of earning coins on everyday food'
  },

  // Beauty & Salon
  {
    id: 'inf7',
    name: 'Beauty by Farah',
    handle: '@beautybyfarah',
    platform: 'instagram',
    followers: '220K',
    engagement: '4.5%',
    category: ['beauty', 'salon', 'skincare'],
    niche: 'Beauty Tutorials & Salon Reviews',
    location: 'Dubai Marina',
    tier: 'mid',
    estimatedRate: 'AED 4,000-7,000/post',
    contentStyle: 'Before/after, tutorials, honest reviews',
    bestFor: ['Salon partners', 'Beauty brands', 'Female audience'],
    contactMethod: 'Email: beautybyfarah@gmail.com',
    verified: true,
    previousBrands: ['Sephora', 'Faces', 'Sisters Beauty'],
    notes: 'Perfect for salon partner content'
  },
  {
    id: 'inf8',
    name: 'Nails Dubai',
    handle: '@nailsdubai',
    platform: 'instagram',
    followers: '45K',
    engagement: '6.8%',
    category: ['beauty', 'nails', 'salon'],
    niche: 'Nail Art & Salon',
    location: 'JLT',
    tier: 'nano',
    estimatedRate: 'AED 800-1,500/post',
    contentStyle: 'Nail art close-ups, salon tours, tips',
    bestFor: ['Nail salons', 'Beauty services', 'Niche targeting'],
    contactMethod: 'DM on Instagram',
    notes: 'Very engaged local audience, affordable'
  },
  {
    id: 'inf9',
    name: 'Glam Squad UAE',
    handle: '@glamsquaduae',
    platform: 'multi',
    followers: '180K',
    engagement: '5.1%',
    category: ['beauty', 'fashion', 'lifestyle'],
    niche: 'Glam & Fashion',
    location: 'Downtown Dubai',
    tier: 'mid',
    estimatedRate: 'AED 3,500-6,000/post',
    contentStyle: 'Glam looks, event prep, luxury beauty',
    bestFor: ['Premium salons', 'High-end positioning', 'Fashion crossover'],
    contactMethod: 'Management: talent@uaeinfluencers.com',
    notes: 'Good for premium salon partners'
  },

  // Fitness & Gym
  {
    id: 'inf10',
    name: 'Fitness First Dubai',
    handle: '@fitnessfirstdxb',
    platform: 'instagram',
    followers: '95K',
    engagement: '4.8%',
    category: ['fitness', 'gym', 'health'],
    niche: 'Fitness Motivation & Workouts',
    location: 'Dubai Sports City',
    tier: 'micro',
    estimatedRate: 'AED 2,000-4,000/post',
    contentStyle: 'Workout videos, transformation stories, tips',
    bestFor: ['Gym partners', 'Health-focused', 'Motivation content'],
    contactMethod: 'DM or WhatsApp in bio',
    previousBrands: ['Fitness First', 'GymNation'],
    notes: 'Great for gym partner announcements'
  },
  {
    id: 'inf11',
    name: 'Dubai Fitness Bro',
    handle: '@dubaifitnessbro',
    platform: 'tiktok',
    followers: '340K',
    engagement: '9.2%',
    category: ['fitness', 'comedy', 'lifestyle'],
    niche: 'Gym Humor & Fitness',
    location: 'Marina',
    tier: 'mid',
    estimatedRate: 'AED 4,500-8,000/video',
    contentStyle: 'Gym comedy, relatable fitness content, POVs',
    bestFor: ['Viral gym content', 'Male audience', 'Entertainment'],
    contactMethod: 'Email in TikTok bio',
    notes: 'Can create funny content about earning coins at gym'
  },
  {
    id: 'inf12',
    name: 'Yoga with Sara',
    handle: '@yogawithsara',
    platform: 'instagram',
    followers: '65K',
    engagement: '5.5%',
    category: ['fitness', 'wellness', 'yoga'],
    niche: 'Yoga & Wellness',
    location: 'Al Quoz',
    tier: 'micro',
    estimatedRate: 'AED 1,500-3,000/post',
    contentStyle: 'Yoga poses, wellness tips, studio reviews',
    bestFor: ['Yoga studios', 'Wellness partners', 'Female wellness audience'],
    contactMethod: 'DM on Instagram',
    notes: 'Perfect for wellness/yoga studio partners'
  },

  // Fashion & Shopping
  {
    id: 'inf13',
    name: 'Style by Mira',
    handle: '@stylebymira',
    platform: 'instagram',
    followers: '310K',
    engagement: '3.9%',
    category: ['fashion', 'shopping', 'lifestyle'],
    niche: 'Fashion & Style',
    location: 'Dubai Mall area',
    tier: 'mid',
    estimatedRate: 'AED 5,000-9,000/post',
    contentStyle: 'Outfit of the day, shopping hauls, style tips',
    bestFor: ['Fashion retail partners', 'Mall stores', 'Style positioning'],
    contactMethod: 'Email: hello@stylebymira.com',
    verified: true,
    previousBrands: ['Namshi', 'Ounass', 'Level Shoes'],
    notes: 'Great for fashion retail partners'
  },
  {
    id: 'inf14',
    name: 'Dubai Shopping Deals',
    handle: '@dubaishoppingdeals',
    platform: 'instagram',
    followers: '125K',
    engagement: '4.2%',
    category: ['shopping', 'deals', 'lifestyle'],
    niche: 'Shopping Deals & Discounts',
    location: 'Various Malls',
    tier: 'micro',
    estimatedRate: 'AED 2,500-4,500/post',
    contentStyle: 'Deal alerts, sale coverage, shopping tips',
    bestFor: ['Value messaging', 'Deal-seekers', 'Retail partners'],
    contactMethod: 'DM preferred',
    notes: 'Perfect audience for Nuqta value proposition'
  },

  // Local Micro-Influencers (Cost-Effective)
  {
    id: 'inf15',
    name: 'JBR Local',
    handle: '@jbrlocal',
    platform: 'instagram',
    followers: '28K',
    engagement: '7.5%',
    category: ['lifestyle', 'local', 'food'],
    niche: 'JBR Community',
    location: 'JBR',
    tier: 'nano',
    estimatedRate: 'AED 500-1,000/post',
    contentStyle: 'Local recommendations, community events, hidden gems',
    bestFor: ['JBR partners', 'Local targeting', 'Community feel'],
    contactMethod: 'DM on Instagram',
    notes: 'Very affordable, hyper-local influence for JBR area merchants'
  },
  {
    id: 'inf16',
    name: 'Marina Mum',
    handle: '@marinamum',
    platform: 'instagram',
    followers: '42K',
    engagement: '6.2%',
    category: ['lifestyle', 'family', 'food'],
    niche: 'Family Life in Marina',
    location: 'Dubai Marina',
    tier: 'nano',
    estimatedRate: 'AED 700-1,200/post',
    contentStyle: 'Family-friendly spots, kid activities, local tips',
    bestFor: ['Family-friendly partners', 'Marina area', 'Parent audience'],
    contactMethod: 'DM or email in bio',
    notes: 'Great for family-friendly cafe/restaurant partners'
  },
  {
    id: 'inf17',
    name: 'Downtown Diaries',
    handle: '@downtowndiaries',
    platform: 'instagram',
    followers: '35K',
    engagement: '6.8%',
    category: ['lifestyle', 'food', 'events'],
    niche: 'Downtown Dubai Life',
    location: 'Downtown Dubai',
    tier: 'nano',
    estimatedRate: 'AED 600-1,100/post',
    contentStyle: 'Downtown spots, events, lifestyle',
    bestFor: ['Downtown partners', 'Event coverage', 'Premium audience'],
    contactMethod: 'DM on Instagram',
    notes: 'Affordable option for Downtown area merchants'
  },

  // Arabic Content Creators
  {
    id: 'inf18',
    name: 'Emirati Foodie',
    handle: '@emiratifoodie',
    platform: 'instagram',
    followers: '195K',
    engagement: '4.3%',
    category: ['food', 'arabic', 'lifestyle'],
    niche: 'Arabic Food & Culture',
    location: 'Jumeirah',
    tier: 'mid',
    estimatedRate: 'AED 4,000-7,000/post',
    contentStyle: 'Arabic food, local culture, Emirati spots',
    bestFor: ['Emirati audience', 'Arabic restaurants', 'Cultural positioning'],
    contactMethod: 'Email: contact@emiratifoodie.ae',
    verified: true,
    notes: 'Important for Arabic-speaking audience reach'
  },
  {
    id: 'inf19',
    name: 'Dubai Fashionista',
    handle: '@dubaifashionista_ar',
    platform: 'instagram',
    followers: '240K',
    engagement: '3.7%',
    category: ['fashion', 'arabic', 'beauty'],
    niche: 'Arabic Fashion & Beauty',
    location: 'Dubai',
    tier: 'mid',
    estimatedRate: 'AED 4,500-8,000/post',
    contentStyle: 'Modest fashion, beauty, Arabic content',
    bestFor: ['Arabic female audience', 'Modest fashion', 'Beauty/salon partners'],
    contactMethod: 'Management: arabictalent@gmail.com',
    notes: 'Key for Arabic female demographic'
  },

  // TikTok Rising Stars
  {
    id: 'inf20',
    name: 'DXB Vibes',
    handle: '@dxbvibes',
    platform: 'tiktok',
    followers: '180K',
    engagement: '11.2%',
    category: ['lifestyle', 'comedy', 'trends'],
    niche: 'Dubai Trends & Vibes',
    location: 'Various',
    tier: 'micro',
    estimatedRate: 'AED 2,500-5,000/video',
    contentStyle: 'Trending sounds, Dubai content, quick clips',
    bestFor: ['Viral potential', 'Gen Z audience', 'Trend riding'],
    contactMethod: 'DM on TikTok',
    notes: 'Good for quick viral content, affordable'
  },
  {
    id: 'inf21',
    name: 'UAE Life Hacks',
    handle: '@uaelifehacks',
    platform: 'tiktok',
    followers: '145K',
    engagement: '9.8%',
    category: ['tips', 'lifestyle', 'hacks'],
    niche: 'UAE Life Tips & Hacks',
    location: 'Dubai',
    tier: 'micro',
    estimatedRate: 'AED 2,000-4,000/video',
    contentStyle: 'Life hacks, money tips, Dubai secrets',
    bestFor: ['Educational content', 'Value proposition', 'How-to content'],
    contactMethod: 'Email in bio',
    notes: 'Perfect for "how to save with Nuqta" style content'
  },

  // Multi-Platform Mega Influencers
  {
    id: 'inf22',
    name: 'Khalid Al Ameri',
    handle: '@khalidalameri',
    platform: 'multi',
    followers: '3.2M',
    engagement: '2.8%',
    category: ['lifestyle', 'family', 'motivation'],
    niche: 'Family & Inspiration',
    location: 'UAE',
    tier: 'mega',
    estimatedRate: 'AED 50,000-100,000/post',
    contentStyle: 'Family content, motivational, authentic stories',
    bestFor: ['Major brand awareness', 'Trust building', 'Premium campaigns'],
    contactMethod: 'Management only: talent@fameagency.ae',
    verified: true,
    previousBrands: ['Etisalat', 'Emirates', 'Careem'],
    notes: 'Big investment but massive reach and trust'
  },
  {
    id: 'inf23',
    name: 'Mo Vlogs',
    handle: '@movlogs',
    platform: 'multi',
    followers: '12M',
    engagement: '1.9%',
    category: ['lifestyle', 'cars', 'luxury'],
    niche: 'Luxury Lifestyle',
    location: 'Dubai',
    tier: 'mega',
    estimatedRate: 'AED 80,000-150,000/post',
    contentStyle: 'Luxury lifestyle, cars, experiences',
    bestFor: ['Massive reach', 'Brand awareness', 'Luxury positioning'],
    contactMethod: 'Management: momanagement@gmail.com',
    verified: true,
    notes: 'Very expensive but huge reach, for major launch moment'
  }
];

const tierColors: Record<string, { bg: string; text: string; border: string }> = {
  nano: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/30' },
  micro: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
  mid: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30' },
  macro: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30' },
  mega: { bg: 'bg-pink-500/10', text: 'text-pink-400', border: 'border-pink-500/30' },
};

const tierInfo = {
  nano: { label: 'Nano', range: '1K-10K', icon: Users },
  micro: { label: 'Micro', range: '10K-100K', icon: Star },
  mid: { label: 'Mid-Tier', range: '100K-500K', icon: TrendingUp },
  macro: { label: 'Macro', range: '500K-1M', icon: Award },
  mega: { label: 'Mega', range: '1M+', icon: Crown },
};

const categoryIcons: Record<string, React.ElementType> = {
  lifestyle: Sparkles,
  food: Utensils,
  coffee: Coffee,
  cafes: Coffee,
  beauty: Scissors,
  salon: Scissors,
  fitness: Dumbbell,
  gym: Dumbbell,
  fashion: ShoppingBag,
  shopping: ShoppingBag,
};

export default function InfluencerListPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTier, setSelectedTier] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedInfluencer, setExpandedInfluencer] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ['all', 'lifestyle', 'food', 'beauty', 'fitness', 'fashion', 'arabic'];
  const tiers = ['all', 'nano', 'micro', 'mid', 'macro', 'mega'];

  const filteredInfluencers = influencers.filter(inf => {
    const matchesSearch = inf.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inf.handle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inf.niche.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTier = selectedTier === 'all' || inf.tier === selectedTier;
    const matchesCategory = selectedCategory === 'all' || inf.category.includes(selectedCategory);
    return matchesSearch && matchesTier && matchesCategory;
  });

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
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
            <span className="text-slate-400">Influencer Partnership List</span>
          </div>
          <Link
            href="/media-hub"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="text-sm">Media Hub</span>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 rounded-full border border-pink-500/30 mb-4">
            <Star className="text-pink-400" size={16} />
            <span className="text-pink-400 text-sm font-medium">Influencer Marketing</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">UAE Influencer Database</h1>
          <p className="text-slate-400">Curated list of influencers for Nuqta partnerships</p>
        </div>

        {/* Tier Overview */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {Object.entries(tierInfo).map(([tier, info]) => {
            const colors = tierColors[tier];
            const Icon = info.icon;
            const count = influencers.filter(i => i.tier === tier).length;
            return (
              <div
                key={tier}
                className={`${colors.bg} rounded-xl p-4 border ${colors.border} text-center cursor-pointer transition-all hover:scale-105`}
                onClick={() => setSelectedTier(tier === selectedTier ? 'all' : tier)}
              >
                <Icon className={`${colors.text} mx-auto mb-2`} size={24} />
                <div className="text-lg font-bold text-white">{info.label}</div>
                <div className="text-slate-400 text-xs">{info.range} followers</div>
                <div className={`${colors.text} text-sm mt-1`}>{count} influencers</div>
              </div>
            );
          })}
        </div>

        {/* Search and Filters */}
        <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search by name, handle, or niche..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-black/30 rounded-lg border border-white/10 text-white placeholder:text-slate-500 focus:border-[#c9a227]/50 focus:outline-none"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-black/30 rounded-lg border border-white/10 text-white focus:border-[#c9a227]/50 focus:outline-none"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat} className="bg-slate-900">
                    {cat === 'all' ? 'All Categories' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
              <select
                value={selectedTier}
                onChange={(e) => setSelectedTier(e.target.value)}
                className="px-4 py-2 bg-black/30 rounded-lg border border-white/10 text-white focus:border-[#c9a227]/50 focus:outline-none"
              >
                {tiers.map(tier => (
                  <option key={tier} value={tier} className="bg-slate-900">
                    {tier === 'all' ? 'All Tiers' : tierInfo[tier as keyof typeof tierInfo]?.label || tier}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 text-slate-400 text-sm">
          Showing {filteredInfluencers.length} influencers
        </div>

        {/* Influencer Cards */}
        <div className="space-y-4">
          {filteredInfluencers.map(influencer => {
            const colors = tierColors[influencer.tier];
            const isExpanded = expandedInfluencer === influencer.id;

            return (
              <div
                key={influencer.id}
                className={`rounded-xl border ${colors.border} overflow-hidden`}
              >
                <button
                  onClick={() => setExpandedInfluencer(isExpanded ? null : influencer.id)}
                  className={`w-full p-4 flex items-center justify-between ${colors.bg} hover:bg-white/5 transition-all text-left`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-full ${colors.bg} border-2 ${colors.border} flex items-center justify-center`}>
                      {influencer.platform === 'instagram' && <Instagram className={colors.text} size={24} />}
                      {influencer.platform === 'tiktok' && <Video className={colors.text} size={24} />}
                      {influencer.platform === 'multi' && <Globe className={colors.text} size={24} />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-white font-bold">{influencer.name}</h3>
                        {influencer.verified && (
                          <span className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                            <Check className="text-white" size={10} />
                          </span>
                        )}
                      </div>
                      <p className="text-slate-400 text-sm">{influencer.handle}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`px-2 py-0.5 text-xs rounded ${colors.bg} ${colors.text} border ${colors.border}`}>
                          {tierInfo[influencer.tier].label}
                        </span>
                        <span className="text-slate-500 text-xs">{influencer.followers} followers</span>
                        <span className="text-green-400 text-xs">{influencer.engagement} engagement</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right hidden md:block">
                      <div className="text-white font-medium">{influencer.estimatedRate}</div>
                      <div className="text-slate-400 text-xs">{influencer.location}</div>
                    </div>
                    <ChevronRight className={`${colors.text} transition-transform ${isExpanded ? 'rotate-90' : ''}`} size={20} />
                  </div>
                </button>

                {isExpanded && (
                  <div className="p-4 border-t border-white/10 bg-black/20 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Left Column */}
                      <div className="space-y-4">
                        <div>
                          <span className="text-slate-400 text-sm font-medium">Niche</span>
                          <p className="text-white">{influencer.niche}</p>
                        </div>
                        <div>
                          <span className="text-slate-400 text-sm font-medium">Content Style</span>
                          <p className="text-slate-300 text-sm">{influencer.contentStyle}</p>
                        </div>
                        <div>
                          <span className="text-slate-400 text-sm font-medium">Categories</span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {influencer.category.map(cat => (
                              <span key={cat} className="px-2 py-1 bg-white/5 text-slate-300 rounded text-xs">
                                {cat}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-4">
                        <div>
                          <span className="text-slate-400 text-sm font-medium">Best For</span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {influencer.bestFor.map(use => (
                              <span key={use} className={`px-2 py-1 ${colors.bg} ${colors.text} rounded text-xs`}>
                                {use}
                              </span>
                            ))}
                          </div>
                        </div>
                        {influencer.previousBrands && (
                          <div>
                            <span className="text-slate-400 text-sm font-medium">Previous Brand Work</span>
                            <p className="text-slate-300 text-sm">{influencer.previousBrands.join(', ')}</p>
                          </div>
                        )}
                        <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/30">
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-green-400 text-xs font-bold uppercase">Contact</span>
                              <p className="text-white text-sm">{influencer.contactMethod}</p>
                            </div>
                            <button
                              onClick={() => copyToClipboard(influencer.contactMethod, influencer.id)}
                              className="p-2 bg-white/10 rounded-lg hover:bg-white/20"
                            >
                              {copiedId === influencer.id ? (
                                <Check className="text-green-400" size={16} />
                              ) : (
                                <Copy className="text-slate-400" size={16} />
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {influencer.notes && (
                      <div className="bg-amber-500/10 rounded-lg p-3 border border-amber-500/30">
                        <span className="text-amber-400 text-xs font-bold uppercase">Notes</span>
                        <p className="text-slate-300 text-sm mt-1">{influencer.notes}</p>
                      </div>
                    )}

                    {/* Stats Row */}
                    <div className="flex items-center gap-6 pt-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="text-slate-400" size={16} />
                        <span className="text-white">{influencer.followers}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Heart className="text-slate-400" size={16} />
                        <span className="text-green-400">{influencer.engagement}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="text-slate-400" size={16} />
                        <span className="text-white">{influencer.estimatedRate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="text-slate-400" size={16} />
                        <span className="text-slate-300">{influencer.location}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredInfluencers.length === 0 && (
          <div className="text-center py-12">
            <Users className="text-slate-500 mx-auto mb-4" size={48} />
            <p className="text-slate-400">No influencers found matching your criteria</p>
          </div>
        )}

        {/* Budget Guide */}
        <div className="mt-12 bg-gradient-to-r from-[#c9a227]/20 to-amber-500/20 rounded-xl p-6 border border-[#c9a227]/30">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <DollarSign className="text-[#c9a227]" size={20} />
            Influencer Budget Guide
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/20 rounded-lg p-4">
              <h4 className="text-green-400 font-bold mb-2">Budget-Friendly (AED 5K-15K)</h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• 5-10 nano/micro influencers</li>
                <li>• Great for local area targeting</li>
                <li>• Higher engagement rates</li>
                <li>• Authentic, relatable content</li>
              </ul>
            </div>
            <div className="bg-black/20 rounded-lg p-4">
              <h4 className="text-purple-400 font-bold mb-2">Mid-Range (AED 20K-50K)</h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• 3-5 mid-tier influencers</li>
                <li>• Broader reach</li>
                <li>• Professional content quality</li>
                <li>• Good for launch campaign</li>
              </ul>
            </div>
            <div className="bg-black/20 rounded-lg p-4">
              <h4 className="text-pink-400 font-bold mb-2">Premium (AED 50K+)</h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• 1-2 macro/mega influencers</li>
                <li>• Massive brand awareness</li>
                <li>• High trust factor</li>
                <li>• For major announcements</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Outreach Template */}
        <div className="mt-8 bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Mail className="text-[#c9a227]" size={20} />
            Outreach Template
          </h3>
          <div className="bg-black/30 rounded-lg p-4 relative">
            <button
              onClick={() => copyToClipboard(`Hi [Name],

I'm reaching out from Nuqta - Dubai's new rewards app launching soon!

We love your content about [their niche] and think you'd be a perfect partner.

Nuqta helps your followers earn rewards at 100+ Dubai locations. We'd love to collaborate on:
• Sponsored content showing how the app works
• Exclusive referral code for your audience
• Long-term ambassador partnership

Interested in learning more? I'd love to send you more details.

Best,
[Your Name]
Nuqta Partnerships`, 'outreach')}
              className="absolute top-2 right-2 p-2 bg-white/10 rounded-lg hover:bg-white/20"
            >
              {copiedId === 'outreach' ? <Check className="text-green-400" size={16} /> : <Copy className="text-slate-400" size={16} />}
            </button>
            <pre className="text-slate-300 text-sm whitespace-pre-wrap font-sans pr-10">
{`Hi [Name],

I'm reaching out from Nuqta - Dubai's new rewards app launching soon!

We love your content about [their niche] and think you'd be a perfect partner.

Nuqta helps your followers earn rewards at 100+ Dubai locations. We'd love to collaborate on:
• Sponsored content showing how the app works
• Exclusive referral code for your audience
• Long-term ambassador partnership

Interested in learning more? I'd love to send you more details.

Best,
[Your Name]
Nuqta Partnerships`}
            </pre>
          </div>
        </div>
      </main>
    </div>
  );
}
