'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Target,
  Users,
  TrendingUp,
  Calendar,
  DollarSign,
  Megaphone,
  Instagram,
  Mail,
  MessageSquare,
  MapPin,
  Gift,
  Zap,
  Clock,
  Star,
  Coffee,
  Scissors,
  Dumbbell,
  Hotel,
  Car,
  Stethoscope,
  PawPrint,
  Shirt,
  ShoppingCart,
  Gem,
  Smartphone,
  Pill,
  ShoppingBag,
  Gamepad2,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Crown,
  Flower2,
  Plane,
  Home,
  Wrench,
  Watch,
  GraduationCap,
  Droplets,
  Briefcase,
  Heart,
  Building2,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

// =============================================
// TOP 20 NICHE CAMPAIGNS - PRIORITY VERTICALS
// =============================================

interface Campaign {
  id: string;
  name: string;
  type: 'merchant' | 'user';
  hook: string;
  thesis: string;
  channels: { channel: string; tactic: string; budget: string }[];
  creativeAssets: string[];
  messaging: { headline: string; body: string; cta: string };
  kpis: { metric: string; target: string }[];
  timeline: string;
  budget: string;
}

interface NicheData {
  rank: number;
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  whyItWins: string;
  transactionType: string;
  volume: 'High' | 'Mid' | 'Low';
  ticket: 'Low' | 'Mid' | 'High' | 'Ultra-High';
  merchantCampaigns: Campaign[];
  userCampaigns: Campaign[];
}

// Complete Top 20 Niche Data with Campaigns
const top20Niches: NicheData[] = [
  // 1. Quick Service Restaurants (QSR)
  {
    rank: 1,
    id: 'qsr',
    name: 'Quick Service Restaurants (QSR)',
    icon: Coffee,
    color: 'red',
    whyItWins: 'Highest frequency; 3-5 transactions per user/week',
    transactionType: 'High Vol / Low Ticket',
    volume: 'High',
    ticket: 'Low',
    merchantCampaigns: [
      {
        id: 'qsr-m1',
        name: 'Frequency King Campaign',
        type: 'merchant',
        hook: 'Your customers eat 3-5x/week. Are you capturing that?',
        thesis: 'QSRs have the highest transaction frequency in F&B. Target franchise owners and independent QSR operators who are losing repeat customers to competitors. Show them how Nuqta coins turn occasional visitors into daily regulars.',
        channels: [
          { channel: 'LinkedIn', tactic: 'Target QSR franchise owners with frequency data', budget: 'AED 3,000' },
          { channel: 'WhatsApp', tactic: 'Direct outreach to QSR managers with ROI calculator', budget: 'AED 500' },
          { channel: 'Field Sales', tactic: 'Visit food courts and QSR clusters during lunch rush', budget: 'AED 2,000' }
        ],
        creativeAssets: ['Frequency comparison infographic', 'Video: Day in life of QSR with Nuqta', 'ROI calculator for QSR operators'],
        messaging: {
          headline: 'Your Customers Eat 5x/Week. You See Them Once.',
          body: 'With 500K+ hungry users, Nuqta brings your customers back for lunch AND dinner. Average QSR partner sees 40% increase in weekly visits.',
          cta: 'Capture Every Meal'
        },
        kpis: [{ metric: 'QSR Partners', target: '50 in 30 days' }, { metric: 'Weekly Transactions', target: '500/partner' }],
        timeline: '4 weeks',
        budget: 'AED 5,500'
      },
      {
        id: 'qsr-m2',
        name: 'Combo Upsell Machine',
        type: 'merchant',
        hook: 'Turn AED 25 orders into AED 45 combos with coin incentives',
        thesis: 'QSRs thrive on upsells. Use bonus coins on combo meals to increase average ticket size while building loyalty.',
        channels: [
          { channel: 'Email', tactic: 'Case study: How McDonalds-style upselling works with coins', budget: 'AED 500' },
          { channel: 'WhatsApp Groups', tactic: 'Share success stories in F&B owner groups', budget: 'AED 200' },
          { channel: 'Trade Shows', tactic: 'Booth at Gulf Food/HORECA events', budget: 'AED 5,000' }
        ],
        creativeAssets: ['Upsell comparison chart', 'Table tent designs for combo offers', 'Staff training video'],
        messaging: {
          headline: 'Double Your Average Order with Smart Combos',
          body: 'Bonus coins on combos = customers spend more + come back more. Simple math, massive profit.',
          cta: 'Boost Your AOV'
        },
        kpis: [{ metric: 'AOV Increase', target: '35%' }, { metric: 'Combo Attachment Rate', target: '60%' }],
        timeline: '3 weeks',
        budget: 'AED 5,700'
      }
    ],
    userCampaigns: [
      {
        id: 'qsr-u1',
        name: 'Daily Lunch Rewards',
        type: 'user',
        hook: 'Eat lunch, earn dinner. Every meal counts.',
        thesis: 'Target office workers who eat out 5x/week. Position Nuqta as the app that turns their daily lunch habit into free meals.',
        channels: [
          { channel: 'Instagram', tactic: 'Lunch break reels showing coin accumulation', budget: 'AED 5,000' },
          { channel: 'TikTok', tactic: 'POV: Me earning free dinner from my lunch habit', budget: 'AED 3,000' },
          { channel: 'Office Buildings', tactic: 'Flyers in business districts and food courts', budget: 'AED 2,000' }
        ],
        creativeAssets: ['Coin counter animation', 'Free meal calculator', 'Office worker testimonial'],
        messaging: {
          headline: 'Your Lunch Habit = Free Dinner',
          body: 'Eat where you always eat. Earn coins every time. Cash out for free meals. It is that simple.',
          cta: 'Start Earning'
        },
        kpis: [{ metric: 'App Downloads', target: '10K in 30 days' }, { metric: 'D7 Retention', target: '45%' }],
        timeline: '4 weeks',
        budget: 'AED 10,000'
      },
      {
        id: 'qsr-u2',
        name: 'Streak Rewards Challenge',
        type: 'user',
        hook: '7-day streak = 3x coins. Keep your streak alive!',
        thesis: 'Gamify daily eating habits. Users who maintain streaks become power users with 5x lifetime value.',
        channels: [
          { channel: 'Push Notifications', tactic: 'Streak reminders at 11am and 6pm', budget: 'AED 0' },
          { channel: 'In-App', tactic: 'Streak leaderboards and badges', budget: 'AED 500' },
          { channel: 'Social', tactic: 'Weekly streak champions spotlight', budget: 'AED 1,000' }
        ],
        creativeAssets: ['Streak counter UI', 'Badge collection showcase', 'Champion celebration videos'],
        messaging: {
          headline: 'Your 7-Day Streak = 3x Bonus Coins',
          body: 'Every day you eat at a Nuqta partner, your coins multiply. Day 7? Triple rewards.',
          cta: 'Start Your Streak'
        },
        kpis: [{ metric: '7-Day Streaks', target: '5,000/month' }, { metric: 'DAU/MAU', target: '40%' }],
        timeline: 'Ongoing',
        budget: 'AED 1,500'
      }
    ]
  },

  // 2. Supermarkets / Groceries
  {
    rank: 2,
    id: 'supermarket',
    name: 'Supermarkets / Groceries',
    icon: ShoppingCart,
    color: 'green',
    whyItWins: 'Essential daily spend; provides "Anchor" utility',
    transactionType: 'High Vol / Mid Ticket',
    volume: 'High',
    ticket: 'Mid',
    merchantCampaigns: [
      {
        id: 'super-m1',
        name: 'Anchor Store Strategy',
        type: 'merchant',
        hook: 'Be the reason users open Nuqta every day',
        thesis: 'Supermarkets are essential daily spend. Position Nuqta as the anchor that drives daily app opens, benefiting all merchants in the ecosystem.',
        channels: [
          { channel: 'Direct Sales', tactic: 'Target regional grocery chains (Carrefour, Lulu, Spinneys)', budget: 'AED 5,000' },
          { channel: 'LinkedIn', tactic: 'Target procurement and marketing heads', budget: 'AED 2,000' },
          { channel: 'Trade Events', tactic: 'Gulfood/retail conferences', budget: 'AED 10,000' }
        ],
        creativeAssets: ['Anchor store deck', 'Daily user engagement data', 'Co-marketing proposal'],
        messaging: {
          headline: 'Become the Anchor Store for 500K Users',
          body: 'When users earn coins on groceries, they come back weekly. Make your store their Nuqta anchor.',
          cta: 'Partner Now'
        },
        kpis: [{ metric: 'Supermarket Chains', target: '5 chains' }, { metric: 'Weekly Transactions', target: '10K' }],
        timeline: '8 weeks',
        budget: 'AED 17,000'
      },
      {
        id: 'super-m2',
        name: 'Basket Builder Campaign',
        type: 'merchant',
        hook: 'Increase basket size with coin multipliers on bulk purchases',
        thesis: 'Bonus coins on AED 200+ baskets encourage customers to consolidate shopping trips and spend more per visit.',
        channels: [
          { channel: 'Email', tactic: 'Basket size optimization case studies', budget: 'AED 500' },
          { channel: 'In-Store', tactic: 'POS displays showing bonus tiers', budget: 'AED 3,000' },
          { channel: 'WhatsApp', tactic: 'Weekly shopping tips to grocery managers', budget: 'AED 300' }
        ],
        creativeAssets: ['Bonus tier chart', 'In-store signage templates', 'Staff training materials'],
        messaging: {
          headline: 'AED 200 Basket = 2x Coins for Your Customers',
          body: 'Incentivize bigger baskets. Customers earn more, you sell more. Win-win.',
          cta: 'Increase Basket Size'
        },
        kpis: [{ metric: 'Average Basket', target: '+25%' }, { metric: 'Weekly Visits', target: '+15%' }],
        timeline: '4 weeks',
        budget: 'AED 3,800'
      }
    ],
    userCampaigns: [
      {
        id: 'super-u1',
        name: 'Weekly Shop Rewards',
        type: 'user',
        hook: 'Your weekly groceries now pay for your coffee habit',
        thesis: 'Position grocery rewards as the foundation of daily savings. Weekly shop coins can fund smaller daily purchases.',
        channels: [
          { channel: 'Instagram', tactic: 'Grocery haul reels with coin counter', budget: 'AED 4,000' },
          { channel: 'Facebook', tactic: 'Target family groups and moms communities', budget: 'AED 3,000' },
          { channel: 'Influencers', tactic: 'Mommy bloggers showing grocery savings', budget: 'AED 5,000' }
        ],
        creativeAssets: ['Weekly savings calculator', 'Grocery haul videos', 'Family savings testimonials'],
        messaging: {
          headline: 'AED 500 Groceries = Free Coffee for the Week',
          body: 'Earn coins on every grocery run. Redeem for coffee, dining, or more groceries. Your choice.',
          cta: 'Start Saving'
        },
        kpis: [{ metric: 'Grocery Users', target: '20K' }, { metric: 'Weekly Active', target: '15K' }],
        timeline: '6 weeks',
        budget: 'AED 12,000'
      }
    ]
  },

  // 3. Gold & Fine Jewellery
  {
    rank: 3,
    id: 'gold',
    name: 'Gold & Fine Jewellery',
    icon: Gem,
    color: 'amber',
    whyItWins: 'Massive GMV; Dubai is the "City of Gold"',
    transactionType: 'Low Vol / High Ticket',
    volume: 'Low',
    ticket: 'High',
    merchantCampaigns: [
      {
        id: 'gold-m1',
        name: 'City of Gold Campaign',
        type: 'merchant',
        hook: 'Dubai buys AED 30B+ in gold yearly. Capture your share.',
        thesis: 'Gold merchants in Dubai Gold Souk and malls compete fiercely. Nuqta differentiates them with rewards that bring customers back for future purchases.',
        channels: [
          { channel: 'Field Sales', tactic: 'Door-to-door in Gold Souk, Gold Land, Meena Bazaar', budget: 'AED 5,000' },
          { channel: 'WhatsApp', tactic: 'Direct outreach to jewellery store owners', budget: 'AED 500' },
          { channel: 'Trade Associations', tactic: 'Present at Dubai Gold & Jewellery Group meetings', budget: 'AED 2,000' }
        ],
        creativeAssets: ['Gold Souk success stories', 'High-ticket ROI calculator', 'Premium merchant badge design'],
        messaging: {
          headline: '10,000 Gold Shops. Stand Out with Rewards.',
          body: 'When every shop sells the same gold, rewards differentiate you. Your customers remember who gave them coins.',
          cta: 'Shine Brighter'
        },
        kpis: [{ metric: 'Gold Merchants', target: '100 in Gold Souk' }, { metric: 'Monthly GMV', target: 'AED 5M' }],
        timeline: '6 weeks',
        budget: 'AED 7,500'
      },
      {
        id: 'gold-m2',
        name: 'Wedding Season Blitz',
        type: 'merchant',
        hook: 'Capture wedding season with pre-booking coin bonuses',
        thesis: 'Wedding gold purchases are planned months ahead. Offer double coins on pre-bookings to lock in customers early.',
        channels: [
          { channel: 'Wedding Fairs', tactic: 'Booth at wedding expos with Nuqta + gold partner bundle', budget: 'AED 10,000' },
          { channel: 'Bridal Magazines', tactic: 'Advertorial on wedding gold savings', budget: 'AED 5,000' },
          { channel: 'Instagram', tactic: 'Wedding gold collection showcases with coin offers', budget: 'AED 3,000' }
        ],
        creativeAssets: ['Wedding collection lookbook', 'Pre-booking offer cards', 'Bride testimonial videos'],
        messaging: {
          headline: 'Book Your Wedding Gold. Earn Honeymoon Rewards.',
          body: 'Pre-book your wedding jewellery, earn 2x coins. Use them on your honeymoon. Perfect.',
          cta: 'Book & Earn'
        },
        kpis: [{ metric: 'Wedding Pre-bookings', target: '50/month' }, { metric: 'Average Ticket', target: 'AED 50K+' }],
        timeline: '8 weeks (seasonal)',
        budget: 'AED 18,000'
      }
    ],
    userCampaigns: [
      {
        id: 'gold-u1',
        name: 'Investment Gold Rewards',
        type: 'user',
        hook: 'Buy gold, earn gold. Your investment grows twice.',
        thesis: 'Position gold purchases as investment + rewards. Users earn coins on investment gold that can fund future purchases.',
        channels: [
          { channel: 'Instagram', tactic: 'Investment gold content with finance influencers', budget: 'AED 8,000' },
          { channel: 'YouTube', tactic: 'Gold investment guides featuring Nuqta rewards', budget: 'AED 5,000' },
          { channel: 'WhatsApp', tactic: 'Gold investment community groups', budget: 'AED 1,000' }
        ],
        creativeAssets: ['Gold + Coins dual benefit graphic', 'Investment calculator', 'Testimonial: How I funded my next gold with coins'],
        messaging: {
          headline: 'Every Gram of Gold = Coins for Your Next Purchase',
          body: 'Smart investors double their returns. Buy gold, earn coins, buy more gold. The cycle of wealth.',
          cta: 'Invest & Earn'
        },
        kpis: [{ metric: 'High-Net-Worth Users', target: '5,000' }, { metric: 'Gold Transaction GMV', target: 'AED 10M' }],
        timeline: '6 weeks',
        budget: 'AED 14,000'
      }
    ]
  },

  // 4. Specialty Coffee & Cafes
  {
    rank: 4,
    id: 'coffee',
    name: 'Specialty Coffee & Cafes',
    icon: Coffee,
    color: 'orange',
    whyItWins: 'The "Social Habit"; perfect for 5% social share bonus',
    transactionType: 'High Vol / Low Ticket',
    volume: 'High',
    ticket: 'Low',
    merchantCampaigns: [
      {
        id: 'coffee-m1',
        name: 'Third Place Strategy',
        type: 'merchant',
        hook: 'Be their third place. Home, work, your cafe.',
        thesis: 'Specialty coffee is about experience and community. Nuqta helps cafes build regulars who visit daily.',
        channels: [
          { channel: 'Instagram DM', tactic: 'Direct outreach to independent coffee shops', budget: 'AED 500' },
          { channel: 'Coffee Events', tactic: 'Sponsor Dubai Coffee Festival booth', budget: 'AED 8,000' },
          { channel: 'Field Sales', tactic: 'Visit specialty coffee clusters (Al Quoz, DIFC)', budget: 'AED 2,000' }
        ],
        creativeAssets: ['Cafe culture deck', 'Regular customer value calculator', 'Instagram-worthy Nuqta QR designs'],
        messaging: {
          headline: 'Turn Coffee Lovers into Daily Regulars',
          body: 'The average specialty coffee drinker visits 4x/week. Make sure all 4 visits are at YOUR cafe.',
          cta: 'Build Your Regulars'
        },
        kpis: [{ metric: 'Specialty Cafes', target: '100' }, { metric: 'Daily Transactions', target: '50/cafe' }],
        timeline: '4 weeks',
        budget: 'AED 10,500'
      },
      {
        id: 'coffee-m2',
        name: 'Social Share Bonus',
        type: 'merchant',
        hook: 'When customers post, you get free marketing. Pay them for it.',
        thesis: 'Specialty coffee is Instagram-driven. Activate 5% social share bonus to turn every customer into a brand ambassador.',
        channels: [
          { channel: 'Email', tactic: 'Social share bonus activation guide', budget: 'AED 300' },
          { channel: 'Training', tactic: 'Staff training on prompting social shares', budget: 'AED 1,000' },
          { channel: 'In-Cafe', tactic: 'Photo spots and hashtag prompts', budget: 'AED 2,000' }
        ],
        creativeAssets: ['Social share instructions', 'Hashtag cards', 'Photo spot design templates'],
        messaging: {
          headline: 'Every Instagram Post = Free Advertising',
          body: 'When customers share, you win. 5% bonus coins make them share more. Free marketing.',
          cta: 'Activate Social Bonus'
        },
        kpis: [{ metric: 'Social Shares', target: '1,000/week' }, { metric: 'User Generated Content', target: '500 posts/month' }],
        timeline: '2 weeks',
        budget: 'AED 3,300'
      }
    ],
    userCampaigns: [
      {
        id: 'coffee-u1',
        name: 'Coffee Ritual Rewards',
        type: 'user',
        hook: 'Your daily coffee pays for your weekend brunch',
        thesis: 'Daily coffee drinkers accumulate coins quickly. Show them how 5 coffees = 1 free brunch.',
        channels: [
          { channel: 'Instagram', tactic: 'Coffee ritual content with coin counter overlay', budget: 'AED 4,000' },
          { channel: 'TikTok', tactic: 'POV: My coffee habit funding my lifestyle', budget: 'AED 3,000' },
          { channel: 'Coffee Influencers', tactic: 'Partner with Dubai coffee bloggers', budget: 'AED 5,000' }
        ],
        creativeAssets: ['Coffee-to-brunch calculator', 'Daily coffee routine videos', 'Coin accumulation animations'],
        messaging: {
          headline: '5 Coffees = 1 Free Brunch',
          body: 'Your daily coffee habit is now your savings plan. Every sip earns coins for your next treat.',
          cta: 'Sip & Save'
        },
        kpis: [{ metric: 'Coffee App Users', target: '15K' }, { metric: 'Daily Active', target: '8K' }],
        timeline: '4 weeks',
        budget: 'AED 12,000'
      }
    ]
  },

  // 5. Perfume & Oud Shops
  {
    rank: 5,
    id: 'perfume',
    name: 'Perfume & Oud Shops',
    icon: Droplets,
    color: 'purple',
    whyItWins: 'High margins; culturally deep-rooted in UAE daily life',
    transactionType: 'Mid Vol / Mid Ticket',
    volume: 'Mid',
    ticket: 'Mid',
    merchantCampaigns: [
      {
        id: 'perfume-m1',
        name: 'Oud Heritage Campaign',
        type: 'merchant',
        hook: 'Oud is identity. Make your shop the trusted source.',
        thesis: 'Oud and perfume are cultural essentials in the UAE. Target traditional and modern perfume shops to build loyalty in a high-margin category.',
        channels: [
          { channel: 'Field Sales', tactic: 'Visit perfume souks and mall perfumeries', budget: 'AED 3,000' },
          { channel: 'WhatsApp', tactic: 'Direct outreach to perfume shop owners', budget: 'AED 500' },
          { channel: 'Cultural Events', tactic: 'Sponsor Ramadan/Eid perfume exhibitions', budget: 'AED 5,000' }
        ],
        creativeAssets: ['Heritage brand story template', 'High-margin category deck', 'Cultural occasion calendar'],
        messaging: {
          headline: 'Your Customers Buy Oud Monthly. Are They Buying from You?',
          body: 'Nuqta brings oud lovers back to YOUR shop. High margins + repeat customers = perfect business.',
          cta: 'Capture Oud Lovers'
        },
        kpis: [{ metric: 'Perfume Shops', target: '50' }, { metric: 'Monthly Repeat Rate', target: '40%' }],
        timeline: '6 weeks',
        budget: 'AED 8,500'
      },
      {
        id: 'perfume-m2',
        name: 'Ramadan Oud Rush',
        type: 'merchant',
        hook: 'Ramadan = 40% of annual oud sales. Capture it all.',
        thesis: 'Ramadan is peak season for perfume. Double coins during Ramadan drives massive traffic to partner shops.',
        channels: [
          { channel: 'Email', tactic: 'Ramadan campaign playbook for perfume partners', budget: 'AED 300' },
          { channel: 'In-Store', tactic: 'Ramadan-themed Nuqta displays', budget: 'AED 2,000' },
          { channel: 'Social', tactic: 'Ramadan oud collection showcases', budget: 'AED 3,000' }
        ],
        creativeAssets: ['Ramadan collection marketing kit', 'Double coins banners', 'Gift packaging ideas'],
        messaging: {
          headline: 'Ramadan Oud = Double Coins',
          body: 'The holy month deserves premium fragrance. Double coins on all oud purchases this Ramadan.',
          cta: 'Join Ramadan Rush'
        },
        kpis: [{ metric: 'Ramadan GMV', target: 'AED 2M' }, { metric: 'New Customers', target: '3,000' }],
        timeline: '4 weeks (seasonal)',
        budget: 'AED 5,300'
      }
    ],
    userCampaigns: [
      {
        id: 'perfume-u1',
        name: 'Signature Scent Rewards',
        type: 'user',
        hook: 'Find your signature scent. Earn rewards for smelling amazing.',
        thesis: 'Position Nuqta as the gateway to premium fragrances. Users discover new scents while earning rewards.',
        channels: [
          { channel: 'Instagram', tactic: 'Perfume discovery reels with influencers', budget: 'AED 5,000' },
          { channel: 'YouTube', tactic: 'Oud education content with perfume experts', budget: 'AED 3,000' },
          { channel: 'TikTok', tactic: 'GRWM with oud/perfume reveals', budget: 'AED 4,000' }
        ],
        creativeAssets: ['Scent discovery quiz', 'Perfume library showcase', 'Before/after transformation videos'],
        messaging: {
          headline: 'Smell Expensive. Earn Rewards.',
          body: 'Every perfume purchase earns coins. Every coin brings you closer to your next signature scent.',
          cta: 'Discover Your Scent'
        },
        kpis: [{ metric: 'Perfume Users', target: '8,000' }, { metric: 'Monthly Purchases', target: '3,000' }],
        timeline: '6 weeks',
        budget: 'AED 12,000'
      }
    ]
  },

  // 6. Dentists & Orthodontics
  {
    rank: 6,
    id: 'dental',
    name: 'Dentists & Orthodontics',
    icon: Stethoscope,
    color: 'cyan',
    whyItWins: 'High ticket ($2,000+ for aligners); BNPL is a huge hook',
    transactionType: 'Low Vol / High Ticket',
    volume: 'Low',
    ticket: 'High',
    merchantCampaigns: [
      {
        id: 'dental-m1',
        name: 'Aligner Affordability Campaign',
        type: 'merchant',
        hook: 'AED 8,000 aligners feel like AED 500 with BNPL + coins',
        thesis: 'Dental procedures are expensive. Partner with clinics to offer coins on BNPL payments, making high-ticket treatments feel affordable.',
        channels: [
          { channel: 'LinkedIn', tactic: 'Target dental clinic owners and managers', budget: 'AED 2,000' },
          { channel: 'Medical Conferences', tactic: 'Booth at dental/medical events', budget: 'AED 5,000' },
          { channel: 'Direct Sales', tactic: 'Visit dental clinics in DHCC, Healthcare City', budget: 'AED 2,000' }
        ],
        creativeAssets: ['BNPL + Coins value proposition', 'Patient affordability calculator', 'Clinic partnership deck'],
        messaging: {
          headline: 'Make AED 8,000 Aligners Feel Like AED 500',
          body: 'BNPL spreads the cost. Nuqta coins reward the purchase. Your patients say yes more often.',
          cta: 'Increase Case Acceptance'
        },
        kpis: [{ metric: 'Dental Clinics', target: '30' }, { metric: 'Aligner Conversions', target: '+25%' }],
        timeline: '8 weeks',
        budget: 'AED 9,000'
      }
    ],
    userCampaigns: [
      {
        id: 'dental-u1',
        name: 'Smile Now Pay Later',
        type: 'user',
        hook: 'Get your dream smile. Earn rewards while you pay.',
        thesis: 'Target young professionals considering cosmetic dental work. Position Nuqta as the smart way to afford and earn from dental treatments.',
        channels: [
          { channel: 'Instagram', tactic: 'Before/after smile transformations with coin counter', budget: 'AED 5,000' },
          { channel: 'TikTok', tactic: 'Aligner journey vlogs with Nuqta rewards tracking', budget: 'AED 4,000' },
          { channel: 'Google', tactic: 'Target "Invisalign Dubai", "teeth whitening Dubai" searches', budget: 'AED 3,000' }
        ],
        creativeAssets: ['Smile transformation videos', 'Payment calculator with coins', 'Testimonials from patients'],
        messaging: {
          headline: 'Your Dream Smile + Coins for Your Next Treatment',
          body: 'Get aligners on BNPL. Earn coins on every payment. Use coins for whitening, cleaning, or more.',
          cta: 'Transform Your Smile'
        },
        kpis: [{ metric: 'Dental Inquiries', target: '500/month' }, { metric: 'Aligner Sign-ups', target: '50/month' }],
        timeline: '6 weeks',
        budget: 'AED 12,000'
      }
    ]
  },

  // 7. Abaya & Modest Fashion
  {
    rank: 7,
    id: 'abaya',
    name: 'Abaya & Modest Fashion',
    icon: Shirt,
    color: 'slate',
    whyItWins: 'Massive seasonal spend (Ramadan/Eid); high social UGC',
    transactionType: 'Mid Vol / High Ticket',
    volume: 'Mid',
    ticket: 'High',
    merchantCampaigns: [
      {
        id: 'abaya-m1',
        name: 'Ramadan Collection Launch',
        type: 'merchant',
        hook: 'Ramadan is your Super Bowl. Win with early coin campaigns.',
        thesis: 'Abaya sales spike 300% during Ramadan. Help boutiques capture early shoppers with pre-Ramadan coin bonuses.',
        channels: [
          { channel: 'Field Sales', tactic: 'Visit abaya boutiques in malls and Karama', budget: 'AED 3,000' },
          { channel: 'Instagram DM', tactic: 'Direct outreach to abaya designers and boutiques', budget: 'AED 500' },
          { channel: 'Fashion Events', tactic: 'Sponsor modest fashion shows', budget: 'AED 5,000' }
        ],
        creativeAssets: ['Ramadan collection marketing kit', 'Boutique success stories', 'Social UGC examples'],
        messaging: {
          headline: 'Ramadan = 300% Sales Spike. Are You Ready?',
          body: 'Early bird coin bonuses bring shoppers to YOU before competitors. Start your Ramadan campaign now.',
          cta: 'Launch Early'
        },
        kpis: [{ metric: 'Abaya Boutiques', target: '40' }, { metric: 'Pre-Ramadan Sales', target: '+50%' }],
        timeline: '6 weeks (seasonal)',
        budget: 'AED 8,500'
      },
      {
        id: 'abaya-m2',
        name: 'Eid Outfit Campaign',
        type: 'merchant',
        hook: 'Every family needs Eid outfits. Be their first choice.',
        thesis: 'Eid shopping is family-wide. Bonus coins on family purchases (3+ items) drive larger baskets.',
        channels: [
          { channel: 'WhatsApp', tactic: 'Family bundle offer templates', budget: 'AED 500' },
          { channel: 'In-Store', tactic: 'Family package displays', budget: 'AED 2,000' },
          { channel: 'Email', tactic: 'Eid outfit planning guides', budget: 'AED 300' }
        ],
        creativeAssets: ['Family bundle pricing', 'Eid lookbook', 'Group photo opportunities'],
        messaging: {
          headline: 'Family Eid Outfits = Triple Coins',
          body: 'Dress the whole family. Earn triple coins. Make Eid shopping rewarding for everyone.',
          cta: 'Activate Family Bundles'
        },
        kpis: [{ metric: 'Family Bundles Sold', target: '200' }, { metric: 'Average Basket', target: 'AED 2,500' }],
        timeline: '4 weeks (seasonal)',
        budget: 'AED 2,800'
      }
    ],
    userCampaigns: [
      {
        id: 'abaya-u1',
        name: 'Modest Fashion Rewards',
        type: 'user',
        hook: 'Look stunning. Earn rewards. Share your style.',
        thesis: 'Modest fashion users are highly engaged on social. Activate UGC with style share bonuses.',
        channels: [
          { channel: 'Instagram', tactic: 'Modest fashion influencer partnerships', budget: 'AED 8,000' },
          { channel: 'TikTok', tactic: 'OOTD and styling videos with coin overlay', budget: 'AED 5,000' },
          { channel: 'Pinterest', tactic: 'Modest fashion inspiration boards', budget: 'AED 2,000' }
        ],
        creativeAssets: ['Style inspiration lookbooks', 'UGC contest announcements', 'Influencer unboxing videos'],
        messaging: {
          headline: 'Your Style. Your Coins. Your Rewards.',
          body: 'Every abaya, every hijab, every modest piece earns coins. Share your look, earn bonus coins.',
          cta: 'Start Styling'
        },
        kpis: [{ metric: 'Fashion Users', target: '10,000' }, { metric: 'UGC Posts', target: '1,000/month' }],
        timeline: '6 weeks',
        budget: 'AED 15,000'
      }
    ]
  },

  // 8. Tourism & Desert Safaris
  {
    rank: 8,
    id: 'tourism',
    name: 'Tourism & Desert Safaris',
    icon: Plane,
    color: 'yellow',
    whyItWins: 'High tourist transaction flow; perfect for "Event Coin"',
    transactionType: 'Mid Vol / Mid Ticket',
    volume: 'Mid',
    ticket: 'Mid',
    merchantCampaigns: [
      {
        id: 'tourism-m1',
        name: 'Tourist Experience Partner',
        type: 'merchant',
        hook: '15M tourists visit Dubai yearly. How many visit you?',
        thesis: 'Target tour operators and experience providers. Nuqta helps them stand out in a crowded market and get tourist reviews.',
        channels: [
          { channel: 'Field Sales', tactic: 'Visit tour operators in tourist areas', budget: 'AED 3,000' },
          { channel: 'Travel Agencies', tactic: 'Partnership with DMCs and travel agents', budget: 'AED 5,000' },
          { channel: 'Hotel Partnerships', tactic: 'Concierge referral programs', budget: 'AED 3,000' }
        ],
        creativeAssets: ['Tourist flow data', 'Experience rating boost case study', 'Concierge partnership deck'],
        messaging: {
          headline: '15M Tourists. How Many Know Your Safari?',
          body: 'Stand out from 1,000 safari operators. Nuqta rewards get you reviews, referrals, and repeat bookings.',
          cta: 'Capture Tourists'
        },
        kpis: [{ metric: 'Tour Operators', target: '30' }, { metric: 'Tourist Bookings', target: '500/month' }],
        timeline: '8 weeks',
        budget: 'AED 11,000'
      }
    ],
    userCampaigns: [
      {
        id: 'tourism-u1',
        name: 'Dubai Explorer Rewards',
        type: 'user',
        hook: 'Explore Dubai. Earn coins. Fund your next adventure.',
        thesis: 'Target tourists with a Dubai exploration challenge. Coins earned on experiences fund souvenirs and dining.',
        channels: [
          { channel: 'TripAdvisor', tactic: 'Partner with top-rated experiences', budget: 'AED 5,000' },
          { channel: 'Instagram', tactic: 'Dubai bucket list content', budget: 'AED 4,000' },
          { channel: 'Hotel Lobbies', tactic: 'QR displays in partner hotels', budget: 'AED 3,000' }
        ],
        creativeAssets: ['Dubai bucket list checklist', 'Experience collection badges', 'Tourist testimonial videos'],
        messaging: {
          headline: 'Explore Dubai. Earn Your Souvenirs.',
          body: 'Every safari, every cruise, every experience earns coins. Use them on gold, perfume, or more adventures.',
          cta: 'Start Exploring'
        },
        kpis: [{ metric: 'Tourist Users', target: '10,000/month' }, { metric: 'Experience Bookings', target: '3,000' }],
        timeline: '8 weeks',
        budget: 'AED 12,000'
      }
    ]
  },

  // 9. Car Rental & Limousine
  {
    rank: 9,
    id: 'carrental',
    name: 'Car Rental & Limousine',
    icon: Car,
    color: 'blue',
    whyItWins: 'Repeat monthly transactions (long-term rentals/expats)',
    transactionType: 'Low Vol / High Ticket',
    volume: 'Low',
    ticket: 'High',
    merchantCampaigns: [
      {
        id: 'carrental-m1',
        name: 'Expat Rental Lock-In',
        type: 'merchant',
        hook: 'Expats rent for 12+ months. Lock them in with loyalty coins.',
        thesis: 'Long-term car rentals are sticky. Coins on monthly payments keep renters loyal when competitors try to poach.',
        channels: [
          { channel: 'LinkedIn', tactic: 'Target car rental company owners and fleet managers', budget: 'AED 2,000' },
          { channel: 'Field Sales', tactic: 'Visit rental agencies in Al Quoz, Deira', budget: 'AED 2,500' },
          { channel: 'Expat Forums', tactic: 'Partner with Dubai expat communities', budget: 'AED 1,000' }
        ],
        creativeAssets: ['Long-term rental ROI calculator', 'Retention case study', 'Fleet partnership deck'],
        messaging: {
          headline: 'Your Renters Are 1 Month Away from Leaving',
          body: 'Monthly coin rewards make switching painful. Keep your long-term renters loyal forever.',
          cta: 'Lock In Loyalty'
        },
        kpis: [{ metric: 'Rental Companies', target: '20' }, { metric: 'Long-term Retention', target: '+30%' }],
        timeline: '6 weeks',
        budget: 'AED 5,500'
      }
    ],
    userCampaigns: [
      {
        id: 'carrental-u1',
        name: 'Monthly Rental Rewards',
        type: 'user',
        hook: 'Your monthly car payment now pays for your fuel',
        thesis: 'Position car rental coins as fuel money. Monthly renters accumulate significant coins.',
        channels: [
          { channel: 'Facebook', tactic: 'Target Dubai expat groups', budget: 'AED 3,000' },
          { channel: 'Instagram', tactic: 'Expat lifestyle content with car features', budget: 'AED 2,000' },
          { channel: 'Google', tactic: 'Target "car rental Dubai monthly" searches', budget: 'AED 3,000' }
        ],
        creativeAssets: ['Rental-to-fuel calculator', 'Expat car life videos', 'Testimonials from long-term renters'],
        messaging: {
          headline: 'AED 2,000 Rent = Free Fuel for the Month',
          body: 'Earn coins on every rental payment. Redeem for fuel, car wash, or dining. Your car pays for itself.',
          cta: 'Rent & Earn'
        },
        kpis: [{ metric: 'Rental Users', target: '3,000' }, { metric: 'Monthly Active', target: '2,500' }],
        timeline: '6 weeks',
        budget: 'AED 8,000'
      }
    ]
  },

  // 10. Salons & Barbershops
  {
    rank: 10,
    id: 'salon',
    name: 'Salons & Barbershops',
    icon: Scissors,
    color: 'pink',
    whyItWins: 'High loyalty; users return every 2-4 weeks religiously',
    transactionType: 'High Vol / Mid Ticket',
    volume: 'High',
    ticket: 'Mid',
    merchantCampaigns: [
      {
        id: 'salon-m1',
        name: 'Every 2 Weeks Campaign',
        type: 'merchant',
        hook: 'Your clients need you every 2 weeks. Make sure they come to YOU.',
        thesis: 'Salon visits are habitual. Coins reinforce the habit and prevent clients from trying competitors.',
        channels: [
          { channel: 'Field Sales', tactic: 'Visit salons in malls and residential areas', budget: 'AED 3,000' },
          { channel: 'Instagram DM', tactic: 'Direct outreach to salon owners', budget: 'AED 500' },
          { channel: 'Beauty Events', tactic: 'Booth at beauty expos and hair shows', budget: 'AED 5,000' }
        ],
        creativeAssets: ['Client retention calculator', 'Salon success stories', 'Booking reminder system demo'],
        messaging: {
          headline: 'Your Client Needs a Haircut in 2 Weeks. Where Will They Go?',
          body: 'Nuqta coins make sure they come back to YOU. Every visit reinforces loyalty.',
          cta: 'Lock In Clients'
        },
        kpis: [{ metric: 'Salons', target: '100' }, { metric: 'Return Rate', target: '85%' }],
        timeline: '6 weeks',
        budget: 'AED 8,500'
      },
      {
        id: 'salon-m2',
        name: 'Slow Day Filler',
        type: 'merchant',
        hook: 'Sunday-Tuesday empty? Fill chairs with double coins.',
        thesis: 'Salons have predictable slow days. Double coins on slow days fill empty chairs without discounting.',
        channels: [
          { channel: 'WhatsApp', tactic: 'Slow day strategy templates', budget: 'AED 300' },
          { channel: 'Email', tactic: 'Case study: How salons fill Sundays', budget: 'AED 200' },
          { channel: 'In-Salon', tactic: 'Slow day promotional materials', budget: 'AED 1,000' }
        ],
        creativeAssets: ['Slow day analysis template', 'Double coins signage', 'Booking system integration guide'],
        messaging: {
          headline: 'Empty Chairs on Sunday? Not Anymore.',
          body: 'Double coins on slow days = full chairs without discounts. Fill every slot, every day.',
          cta: 'Fill Your Slow Days'
        },
        kpis: [{ metric: 'Sunday Bookings', target: '+50%' }, { metric: 'Tuesday Bookings', target: '+40%' }],
        timeline: '3 weeks',
        budget: 'AED 1,500'
      }
    ],
    userCampaigns: [
      {
        id: 'salon-u1',
        name: 'Glow Up Rewards',
        type: 'user',
        hook: 'Your monthly glow up now pays for your next treatment',
        thesis: 'Position salon coins as self-care investment. Regular visits accumulate to free treatments.',
        channels: [
          { channel: 'Instagram', tactic: 'Transformation reels with beauty influencers', budget: 'AED 6,000' },
          { channel: 'TikTok', tactic: 'GRWM salon edition with coin counter', budget: 'AED 4,000' },
          { channel: 'Pinterest', tactic: 'Hair and beauty inspiration boards', budget: 'AED 1,000' }
        ],
        creativeAssets: ['Transformation before/after', 'Free treatment calculator', 'Beauty routine tracking'],
        messaging: {
          headline: '3 Haircuts = 1 Free Facial',
          body: 'Every salon visit earns coins. Stack them up for free treatments. Self-care that pays.',
          cta: 'Start Glowing'
        },
        kpis: [{ metric: 'Beauty Users', target: '20,000' }, { metric: 'Monthly Active', target: '15,000' }],
        timeline: '6 weeks',
        budget: 'AED 11,000'
      }
    ]
  },

  // 11. Car Servicing & Tyres
  {
    rank: 11,
    id: 'carservice',
    name: 'Car Servicing & Tyres',
    icon: Wrench,
    color: 'slate',
    whyItWins: 'Essential maintenance; high trust requirement',
    transactionType: 'Low Vol / High Ticket',
    volume: 'Low',
    ticket: 'High',
    merchantCampaigns: [
      {
        id: 'carservice-m1',
        name: 'Trust Builder Campaign',
        type: 'merchant',
        hook: 'Car owners trust reviews. Nuqta delivers verified reviews + repeat visits.',
        thesis: 'Car service is high-trust. Coins incentivize reviews and return visits, building the trust that wins new customers.',
        channels: [
          { channel: 'Field Sales', tactic: 'Visit garages and service centers', budget: 'AED 3,000' },
          { channel: 'Auto Shows', tactic: 'Booth at Dubai Motor Show', budget: 'AED 8,000' },
          { channel: 'LinkedIn', tactic: 'Target garage owners and fleet managers', budget: 'AED 2,000' }
        ],
        creativeAssets: ['Review generation case study', 'Trust signal graphics', 'Service reminder system demo'],
        messaging: {
          headline: 'Your Best Marketing? Happy Customer Reviews.',
          body: 'Coins incentivize reviews. Reviews build trust. Trust brings new customers. Simple.',
          cta: 'Build Your Reviews'
        },
        kpis: [{ metric: 'Service Centers', target: '40' }, { metric: 'Reviews Generated', target: '500/month' }],
        timeline: '8 weeks',
        budget: 'AED 13,000'
      }
    ],
    userCampaigns: [
      {
        id: 'carservice-u1',
        name: 'Maintenance Rewards',
        type: 'user',
        hook: 'Your oil change earns your next car wash free',
        thesis: 'Car maintenance is inevitable. Position coins as the silver lining that makes maintenance rewarding.',
        channels: [
          { channel: 'Facebook', tactic: 'Target car owner groups in Dubai', budget: 'AED 3,000' },
          { channel: 'Instagram', tactic: 'Car care tips with Nuqta integration', budget: 'AED 2,000' },
          { channel: 'Google', tactic: 'Target "car service Dubai" searches', budget: 'AED 3,000' }
        ],
        creativeAssets: ['Maintenance-to-reward calculator', 'Service reminder notifications', 'Car care community content'],
        messaging: {
          headline: 'AED 300 Service = Free Car Wash',
          body: 'Your car needs service anyway. Earn coins every time. Use them for washes, fuel, or dining.',
          cta: 'Service & Earn'
        },
        kpis: [{ metric: 'Car Owner Users', target: '8,000' }, { metric: 'Service Bookings', target: '2,000/month' }],
        timeline: '6 weeks',
        budget: 'AED 8,000'
      }
    ]
  },

  // 12. Pharmacies
  {
    rank: 12,
    id: 'pharmacy',
    name: 'Pharmacies',
    icon: Pill,
    color: 'teal',
    whyItWins: 'Essential high-frequency spend; universal need',
    transactionType: 'High Vol / Mid Ticket',
    volume: 'High',
    ticket: 'Mid',
    merchantCampaigns: [
      {
        id: 'pharmacy-m1',
        name: 'Health Anchor Strategy',
        type: 'merchant',
        hook: 'Everyone needs medicine. Be their pharmacy of choice.',
        thesis: 'Pharmacies are essential and frequent. Position as anchor partners that drive daily app opens.',
        channels: [
          { channel: 'Direct Sales', tactic: 'Target pharmacy chains (Aster, LuLu, Bin Sina)', budget: 'AED 5,000' },
          { channel: 'LinkedIn', tactic: 'Target pharmacy owners and regional managers', budget: 'AED 2,000' },
          { channel: 'Healthcare Events', tactic: 'Booth at pharma conferences', budget: 'AED 5,000' }
        ],
        creativeAssets: ['Anchor store value proposition', 'Health loyalty program deck', 'Prescription refill reminder demo'],
        messaging: {
          headline: 'Medicine is Monthly. Loyalty Should Be Too.',
          body: 'Patients refill monthly. Nuqta ensures they refill with YOU every single time.',
          cta: 'Become Health Anchor'
        },
        kpis: [{ metric: 'Pharmacy Chains', target: '3 major chains' }, { metric: 'Monthly Refills', target: '10K' }],
        timeline: '8 weeks',
        budget: 'AED 12,000'
      }
    ],
    userCampaigns: [
      {
        id: 'pharmacy-u1',
        name: 'Health Essentials Rewards',
        type: 'user',
        hook: 'Your vitamins pay for your skincare',
        thesis: 'Pharmacy visits are routine. Show users how health spending earns rewards for beauty and wellness.',
        channels: [
          { channel: 'Instagram', tactic: 'Wellness routine content with coin integration', budget: 'AED 4,000' },
          { channel: 'Health Blogs', tactic: 'Partner with UAE health and wellness bloggers', budget: 'AED 3,000' },
          { channel: 'Facebook', tactic: 'Target health-conscious groups', budget: 'AED 2,000' }
        ],
        creativeAssets: ['Health-to-beauty coin calculator', 'Wellness routine tracking', 'Pharmacy visit reminders'],
        messaging: {
          headline: 'Monthly Vitamins = Free Skincare Products',
          body: 'Every pharmacy purchase earns coins. Stack them for beauty products, supplements, or more.',
          cta: 'Earn While Healthy'
        },
        kpis: [{ metric: 'Pharmacy Users', target: '15,000' }, { metric: 'Monthly Active', target: '12,000' }],
        timeline: '6 weeks',
        budget: 'AED 9,000'
      }
    ]
  },

  // 13. Aesthetic Clinics (Botox/Skin)
  {
    rank: 13,
    id: 'aesthetic',
    name: 'Aesthetic Clinics (Botox/Skin)',
    icon: Heart,
    color: 'rose',
    whyItWins: 'Massive growth in Dubai; high margins for commission',
    transactionType: 'Low Vol / High Ticket',
    volume: 'Low',
    ticket: 'High',
    merchantCampaigns: [
      {
        id: 'aesthetic-m1',
        name: 'High-Margin Beauty Partner',
        type: 'merchant',
        hook: 'Botox clients spend AED 3,000+/visit. Capture repeat visits.',
        thesis: 'Aesthetic treatments are high-margin and repeat (Botox every 3-4 months). Coins ensure patients return to the same clinic.',
        channels: [
          { channel: 'LinkedIn', tactic: 'Target clinic owners and medical directors', budget: 'AED 3,000' },
          { channel: 'Medical Events', tactic: 'Booth at aesthetic medicine conferences', budget: 'AED 8,000' },
          { channel: 'Direct Sales', tactic: 'Visit clinics in JBR, DIFC, Downtown', budget: 'AED 3,000' }
        ],
        creativeAssets: ['High-margin category deck', 'Patient retention calculator', 'Clinic success stories'],
        messaging: {
          headline: 'AED 3,000 Botox. They Need It Again in 4 Months. Will They Return?',
          body: 'Nuqta coins ensure your patients come back. Every 4 months, automatically.',
          cta: 'Lock In Patients'
        },
        kpis: [{ metric: 'Aesthetic Clinics', target: '25' }, { metric: 'Patient Retention', target: '90%' }],
        timeline: '8 weeks',
        budget: 'AED 14,000'
      }
    ],
    userCampaigns: [
      {
        id: 'aesthetic-u1',
        name: 'Glow Rewards Program',
        type: 'user',
        hook: 'Your Botox pays for your next facial',
        thesis: 'Position aesthetic treatments as investments that earn back. High-value patients appreciate sophisticated rewards.',
        channels: [
          { channel: 'Instagram', tactic: 'Before/after content with luxury aesthetic influencers', budget: 'AED 10,000' },
          { channel: 'TikTok', tactic: 'Treatment journey vlogs with coin tracking', budget: 'AED 5,000' },
          { channel: 'Google', tactic: 'Target "Botox Dubai", "filler Dubai" searches', budget: 'AED 5,000' }
        ],
        creativeAssets: ['Treatment value calculator', 'Glow journey tracking', 'VIP patient testimonials'],
        messaging: {
          headline: 'Your AED 3,000 Treatment = Coins for Your Next Visit',
          body: 'Every aesthetic treatment earns premium coins. Use them for facials, skin treatments, or more.',
          cta: 'Start Your Glow Journey'
        },
        kpis: [{ metric: 'Aesthetic Users', target: '5,000' }, { metric: 'Average Transaction', target: 'AED 2,500' }],
        timeline: '8 weeks',
        budget: 'AED 20,000'
      }
    ]
  },

  // 14. Gyms & Yoga Studios
  {
    rank: 14,
    id: 'gym',
    name: 'Gyms & Yoga Studios',
    icon: Dumbbell,
    color: 'green',
    whyItWins: 'Subscription-based; creates "Nuqta Habit" consistency',
    transactionType: 'High Vol / Mid Ticket',
    volume: 'High',
    ticket: 'Mid',
    merchantCampaigns: [
      {
        id: 'gym-m1',
        name: 'Membership Retention Engine',
        type: 'merchant',
        hook: 'January sign-ups. February ghosts. March cancellations. Break the cycle.',
        thesis: 'Gyms lose 50% of members in first 3 months. Coins reward check-ins, creating habit that prevents cancellation.',
        channels: [
          { channel: 'LinkedIn', tactic: 'Target gym owners and fitness franchise managers', budget: 'AED 2,500' },
          { channel: 'Fitness Events', tactic: 'Booth at Dubai Fitness Challenge, FIBO', budget: 'AED 6,000' },
          { channel: 'Field Sales', tactic: 'Visit gyms in Marina, JLT, Downtown', budget: 'AED 2,000' }
        ],
        creativeAssets: ['Retention curve comparison', 'Check-in rewards demo', 'Member success stories'],
        messaging: {
          headline: '50% of Members Cancel by March. Stop the Bleeding.',
          body: 'Check-in coins create habit. Habit creates retention. Retention creates revenue.',
          cta: 'Keep Your Members'
        },
        kpis: [{ metric: 'Gyms', target: '50' }, { metric: 'Member Retention', target: '+25%' }],
        timeline: '8 weeks',
        budget: 'AED 10,500'
      }
    ],
    userCampaigns: [
      {
        id: 'gym-u1',
        name: 'Fitness = Free Smoothies',
        type: 'user',
        hook: 'Every workout earns coins. Every coin brings you closer to free protein.',
        thesis: 'Gamify fitness with tangible rewards. Users who see progress (coins) stay motivated.',
        channels: [
          { channel: 'Instagram', tactic: 'Fitness transformation content with coin tracking', budget: 'AED 5,000' },
          { channel: 'TikTok', tactic: 'Workout challenges with rewards', budget: 'AED 4,000' },
          { channel: 'Fitness Influencers', tactic: 'Partner with Dubai fitness influencers', budget: 'AED 6,000' }
        ],
        creativeAssets: ['Workout-to-reward calculator', 'Fitness streak badges', 'Transformation testimonials'],
        messaging: {
          headline: '10 Gym Visits = Free Protein Smoothie',
          body: 'Every check-in earns coins. Stay consistent, earn rewards. Fitness that pays.',
          cta: 'Start Earning'
        },
        kpis: [{ metric: 'Fitness Users', target: '15,000' }, { metric: 'Weekly Check-ins', target: '50,000' }],
        timeline: '6 weeks',
        budget: 'AED 15,000'
      }
    ]
  },

  // 15. Flower Shops & Gifting
  {
    rank: 15,
    id: 'flowers',
    name: 'Flower Shops & Gifting',
    icon: Flower2,
    color: 'pink',
    whyItWins: 'High emotion spend; peak transactions during fests',
    transactionType: 'Mid Vol / Mid Ticket',
    volume: 'Mid',
    ticket: 'Mid',
    merchantCampaigns: [
      {
        id: 'flowers-m1',
        name: 'Every Occasion Campaign',
        type: 'merchant',
        hook: 'Valentines, Mothers Day, Birthdays. Capture every occasion.',
        thesis: 'Flower purchases are occasion-driven. Become the default choice by rewarding every purchase.',
        channels: [
          { channel: 'Field Sales', tactic: 'Visit florists and gift shops', budget: 'AED 2,000' },
          { channel: 'Instagram DM', tactic: 'Direct outreach to flower boutiques', budget: 'AED 500' },
          { channel: 'Wedding Fairs', tactic: 'Booth at wedding expos', budget: 'AED 5,000' }
        ],
        creativeAssets: ['Occasion calendar', 'Gift shop success stories', 'Co-branded occasion campaigns'],
        messaging: {
          headline: '12 Gift-Giving Occasions/Year. Be Their Go-To.',
          body: 'From Valentines to Mothers Day to anniversaries. Nuqta makes you the default choice.',
          cta: 'Own Every Occasion'
        },
        kpis: [{ metric: 'Flower Shops', target: '30' }, { metric: 'Occasion Purchases', target: '1,000/month' }],
        timeline: '6 weeks',
        budget: 'AED 7,500'
      }
    ],
    userCampaigns: [
      {
        id: 'flowers-u1',
        name: 'Gift & Earn',
        type: 'user',
        hook: 'Send flowers, earn your next gift free',
        thesis: 'Position flower purchases as earning opportunities. Generous gifters accumulate coins quickly.',
        channels: [
          { channel: 'Instagram', tactic: 'Beautiful flower arrangement content', budget: 'AED 3,000' },
          { channel: 'Google', tactic: 'Target "flower delivery Dubai" searches', budget: 'AED 2,000' },
          { channel: 'WhatsApp', tactic: 'Occasion reminder campaigns', budget: 'AED 500' }
        ],
        creativeAssets: ['Gift-to-gift calculator', 'Occasion reminder system', 'Beautiful bouquet showcases'],
        messaging: {
          headline: '3 Bouquets = 1 Free Gift',
          body: 'Every flower you send earns coins. Be generous, get rewarded.',
          cta: 'Start Gifting'
        },
        kpis: [{ metric: 'Gifting Users', target: '5,000' }, { metric: 'Repeat Gifters', target: '60%' }],
        timeline: '4 weeks',
        budget: 'AED 5,500'
      }
    ]
  },

  // 16. Home Cleaning Services
  {
    rank: 16,
    id: 'cleaning',
    name: 'Home Cleaning Services',
    icon: Home,
    color: 'blue',
    whyItWins: 'Weekly repeat behavior; managed via the Nuqta app',
    transactionType: 'High Vol / Low Ticket',
    volume: 'High',
    ticket: 'Low',
    merchantCampaigns: [
      {
        id: 'cleaning-m1',
        name: 'Weekly Recurring Revenue',
        type: 'merchant',
        hook: 'Your customers need cleaning every week. Keep them.',
        thesis: 'Home cleaning is weekly habit. Coins ensure customers do not switch to competitors offering AED 10 less.',
        channels: [
          { channel: 'LinkedIn', tactic: 'Target cleaning company owners', budget: 'AED 1,500' },
          { channel: 'Field Sales', tactic: 'Visit home service companies', budget: 'AED 2,000' },
          { channel: 'Apps', tactic: 'Partner with cleaning booking platforms', budget: 'AED 3,000' }
        ],
        creativeAssets: ['Recurring revenue calculator', 'Customer retention case study', 'Booking integration demo'],
        messaging: {
          headline: 'Weekly Cleanings = Weekly Revenue. Keep It.',
          body: 'Coins make switching painful. Your weekly customers stay weekly forever.',
          cta: 'Lock In Weekly Revenue'
        },
        kpis: [{ metric: 'Cleaning Companies', target: '20' }, { metric: 'Weekly Bookings', target: '500' }],
        timeline: '6 weeks',
        budget: 'AED 6,500'
      }
    ],
    userCampaigns: [
      {
        id: 'cleaning-u1',
        name: 'Clean Home Rewards',
        type: 'user',
        hook: 'Your weekly cleaning earns your monthly deep clean free',
        thesis: 'Weekly cleaning users accumulate coins fast. Show them the path to free services.',
        channels: [
          { channel: 'Instagram', tactic: 'Clean home satisfaction content', budget: 'AED 2,000' },
          { channel: 'Facebook', tactic: 'Target homeowner and family groups', budget: 'AED 2,000' },
          { channel: 'Google', tactic: 'Target "home cleaning Dubai" searches', budget: 'AED 2,000' }
        ],
        creativeAssets: ['Weekly-to-monthly calculator', 'Clean home transformation videos', 'Service booking reminders'],
        messaging: {
          headline: '4 Weekly Cleans = 1 Free Deep Clean',
          body: 'Book your weekly cleaning, earn coins. Stack them for free deep cleaning.',
          cta: 'Book & Earn'
        },
        kpis: [{ metric: 'Cleaning Users', target: '8,000' }, { metric: 'Weekly Bookings', target: '3,000' }],
        timeline: '4 weeks',
        budget: 'AED 6,000'
      }
    ]
  },

  // 17. Electronic Repairs (Mobile/Laptop)
  {
    rank: 17,
    id: 'repairs',
    name: 'Electronic Repairs (Mobile/Laptop)',
    icon: Smartphone,
    color: 'violet',
    whyItWins: 'High-trust, urgent need; perfect for referral system',
    transactionType: 'Mid Vol / Mid Ticket',
    volume: 'Mid',
    ticket: 'Mid',
    merchantCampaigns: [
      {
        id: 'repairs-m1',
        name: 'Trust & Referral Engine',
        type: 'merchant',
        hook: 'Good repairs spread by word of mouth. Amplify it.',
        thesis: 'Electronic repairs are trust-based and referral-driven. Coins incentivize reviews and referrals.',
        channels: [
          { channel: 'Field Sales', tactic: 'Visit repair shops in Computer Plaza, Bur Dubai', budget: 'AED 2,000' },
          { channel: 'WhatsApp', tactic: 'Direct outreach to repair shop owners', budget: 'AED 500' },
          { channel: 'Tech Forums', tactic: 'Partner with Dubai tech communities', budget: 'AED 1,000' }
        ],
        creativeAssets: ['Referral program setup', 'Review collection automation', 'Trust badge design'],
        messaging: {
          headline: 'Great Repair + Review Request = 10 New Customers',
          body: 'Coins incentivize reviews and referrals. Your best marketing channel, amplified.',
          cta: 'Build Your Reviews'
        },
        kpis: [{ metric: 'Repair Shops', target: '30' }, { metric: 'Reviews Generated', target: '300/month' }],
        timeline: '6 weeks',
        budget: 'AED 3,500'
      }
    ],
    userCampaigns: [
      {
        id: 'repairs-u1',
        name: 'Repair & Earn',
        type: 'user',
        hook: 'Broken screen fixed + coins for your next accessory',
        thesis: 'Repairs are stressful. Position coins as the silver lining that sweetens the deal.',
        channels: [
          { channel: 'Google', tactic: 'Target "phone repair Dubai" searches', budget: 'AED 3,000' },
          { channel: 'Instagram', tactic: 'Before/after repair content', budget: 'AED 2,000' },
          { channel: 'Reddit/Forums', tactic: 'Engage in Dubai tech discussions', budget: 'AED 500' }
        ],
        creativeAssets: ['Repair cost calculator with coins', 'Accessory recommendations', 'Satisfied customer testimonials'],
        messaging: {
          headline: 'Screen Repair = Coins for a New Case',
          body: 'Every repair earns coins. Use them for accessories, future repairs, or other tech.',
          cta: 'Repair & Earn'
        },
        kpis: [{ metric: 'Repair Users', target: '5,000' }, { metric: 'Referrals', target: '500/month' }],
        timeline: '4 weeks',
        budget: 'AED 5,500'
      }
    ]
  },

  // 18. Luxury Watch Pre-owned
  {
    rank: 18,
    id: 'watches',
    name: 'Luxury Watch Pre-owned',
    icon: Watch,
    color: 'amber',
    whyItWins: 'Sky-high GMV; drives massive transaction value',
    transactionType: 'Low Vol / Ultra-High',
    volume: 'Low',
    ticket: 'Ultra-High',
    merchantCampaigns: [
      {
        id: 'watches-m1',
        name: 'Ultra-Premium Partner',
        type: 'merchant',
        hook: 'AED 50,000+ watches. AED 5,000+ in coins. Unmatched.',
        thesis: 'Pre-owned luxury watches are ultra-high ticket. Even 5-10% coins create massive value perception.',
        channels: [
          { channel: 'Direct Sales', tactic: 'Visit luxury watch dealers in DIFC, Mall of Emirates', budget: 'AED 5,000' },
          { channel: 'LinkedIn', tactic: 'Target luxury goods dealers', budget: 'AED 2,000' },
          { channel: 'Luxury Events', tactic: 'Sponsor watch collector meetups', budget: 'AED 10,000' }
        ],
        creativeAssets: ['Ultra-premium value proposition', 'Collector testimonials', 'VIP partnership terms'],
        messaging: {
          headline: 'AED 50,000 Rolex. AED 5,000 in Coins. Your Buyers Will Notice.',
          body: 'Ultra-high ticket requires ultra-high rewards. Nuqta delivers.',
          cta: 'Join Premium Partners'
        },
        kpis: [{ metric: 'Luxury Watch Dealers', target: '10' }, { metric: 'Monthly GMV', target: 'AED 5M' }],
        timeline: '8 weeks',
        budget: 'AED 17,000'
      }
    ],
    userCampaigns: [
      {
        id: 'watches-u1',
        name: 'Collector Rewards',
        type: 'user',
        hook: 'Your Rolex purchase funds your next service or strap',
        thesis: 'Watch collectors appreciate value. Position coins as investment in future watch care.',
        channels: [
          { channel: 'Instagram', tactic: 'Luxury watch content with collector influencers', budget: 'AED 10,000' },
          { channel: 'YouTube', tactic: 'Watch review and investment content', budget: 'AED 5,000' },
          { channel: 'Watch Forums', tactic: 'Engage in collector communities', budget: 'AED 2,000' }
        ],
        creativeAssets: ['Collector value proposition', 'Watch care redemption options', 'Investment + rewards calculator'],
        messaging: {
          headline: 'AED 50,000 Watch = AED 5,000 for Service & Care',
          body: 'Collectors deserve collector rewards. Use coins for service, straps, or your next timepiece.',
          cta: 'Join Collector Program'
        },
        kpis: [{ metric: 'Collector Users', target: '2,000' }, { metric: 'Average Transaction', target: 'AED 30,000' }],
        timeline: '8 weeks',
        budget: 'AED 17,000'
      }
    ]
  },

  // 19. Pet Grooming & Boarding
  {
    rank: 19,
    id: 'pet',
    name: 'Pet Grooming & Boarding',
    icon: PawPrint,
    color: 'orange',
    whyItWins: 'High-spending "Pet Parents" niche; loyal customer base',
    transactionType: 'Mid Vol / Mid Ticket',
    volume: 'Mid',
    ticket: 'Mid',
    merchantCampaigns: [
      {
        id: 'pet-m1',
        name: 'Pet Parent Loyalty',
        type: 'merchant',
        hook: 'Pet parents spend AED 1,500+/month. Are they spending with you?',
        thesis: 'Pet owners are high-spending and emotionally connected. Coins build loyalty for recurring grooming and boarding.',
        channels: [
          { channel: 'Field Sales', tactic: 'Visit pet shops and grooming salons', budget: 'AED 2,000' },
          { channel: 'Instagram DM', tactic: 'Direct outreach to pet businesses', budget: 'AED 500' },
          { channel: 'Pet Events', tactic: 'Booth at pet expos and adoption events', budget: 'AED 4,000' }
        ],
        creativeAssets: ['Pet parent spending data', 'Grooming loyalty program', 'Boarding package promotions'],
        messaging: {
          headline: 'Pet Parents Spend AED 1,500/Month. On What?',
          body: 'Grooming, food, boarding, vet. Make sure they spend it with YOU.',
          cta: 'Capture Pet Parents'
        },
        kpis: [{ metric: 'Pet Businesses', target: '25' }, { metric: 'Monthly Transactions', target: '500' }],
        timeline: '6 weeks',
        budget: 'AED 6,500'
      }
    ],
    userCampaigns: [
      {
        id: 'pet-u1',
        name: 'Pampered Pet Rewards',
        type: 'user',
        hook: 'Spoil your pet, earn treats for yourself',
        thesis: 'Pet parents love spoiling pets. Show them how pet spending earns them personal rewards too.',
        channels: [
          { channel: 'Instagram', tactic: 'Cute pet content with reward overlay', budget: 'AED 4,000' },
          { channel: 'TikTok', tactic: 'Pet grooming transformation videos', budget: 'AED 3,000' },
          { channel: 'Facebook', tactic: 'Target pet owner groups in Dubai', budget: 'AED 2,000' }
        ],
        creativeAssets: ['Pet-to-owner reward calculator', 'Grooming transformation videos', 'Pet parent testimonials'],
        messaging: {
          headline: 'Spoil Your Pet. Earn Your Coffee.',
          body: 'Every grooming, every boarding, every bag of food earns coins. Treat your pet, treat yourself.',
          cta: 'Start Earning'
        },
        kpis: [{ metric: 'Pet Parent Users', target: '8,000' }, { metric: 'Monthly Spend', target: 'AED 500K' }],
        timeline: '6 weeks',
        budget: 'AED 9,000'
      }
    ]
  },

  // 20. University Cafeterias/Bookstores
  {
    rank: 20,
    id: 'university',
    name: 'University Cafeterias/Bookstores',
    icon: GraduationCap,
    color: 'indigo',
    whyItWins: 'Massive Gen-Z onboarding; creates the 2026 user base',
    transactionType: 'High Vol / Low Ticket',
    volume: 'High',
    ticket: 'Low',
    merchantCampaigns: [
      {
        id: 'university-m1',
        name: 'Campus Takeover',
        type: 'merchant',
        hook: '50,000 students in Dubai. Capture their daily spend.',
        thesis: 'University cafeterias and bookstores have captive audience. Partner to build the next generation of Nuqta users.',
        channels: [
          { channel: 'Direct Sales', tactic: 'Pitch to university administration and F&B vendors', budget: 'AED 3,000' },
          { channel: 'Campus Events', tactic: 'Sponsor orientation and welcome weeks', budget: 'AED 5,000' },
          { channel: 'Student Unions', tactic: 'Partner with student organizations', budget: 'AED 2,000' }
        ],
        creativeAssets: ['Campus partnership deck', 'Student spending data', 'Orientation activation kit'],
        messaging: {
          headline: '50,000 Students. Daily Lunches. Daily Coffee. Daily Coins.',
          body: 'Capture the next generation of consumers. University = habit formation ground zero.',
          cta: 'Partner with Campus'
        },
        kpis: [{ metric: 'Universities', target: '10' }, { metric: 'Student Users', target: '20,000' }],
        timeline: '8 weeks',
        budget: 'AED 10,000'
      }
    ],
    userCampaigns: [
      {
        id: 'university-u1',
        name: 'Student Savings Squad',
        type: 'user',
        hook: 'Your campus lunch pays for your weekend hangout',
        thesis: 'Students are price-sensitive but spend daily. Position Nuqta as the smart way to stretch student budget.',
        channels: [
          { channel: 'Instagram', tactic: 'Student lifestyle content with savings focus', budget: 'AED 3,000' },
          { channel: 'TikTok', tactic: 'Student hacks and savings tips', budget: 'AED 4,000' },
          { channel: 'Campus Ambassadors', tactic: 'Recruit student brand ambassadors', budget: 'AED 3,000' }
        ],
        creativeAssets: ['Student savings calculator', 'Campus food tour videos', 'Ambassador recruitment kit'],
        messaging: {
          headline: 'Campus Lunch All Week = Free Weekend Dinner',
          body: 'Every campus meal earns coins. Stack them for weekend hangouts. Student life, optimized.',
          cta: 'Join the Squad'
        },
        kpis: [{ metric: 'Student Users', target: '20,000' }, { metric: 'D7 Retention', target: '50%' }],
        timeline: '6 weeks',
        budget: 'AED 10,000'
      }
    ]
  }
];

// Color mapping for badges
const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
  red: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400' },
  green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400' },
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400' },
  orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400' },
  cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400' },
  slate: { bg: 'bg-slate-500/10', border: 'border-slate-500/30', text: 'text-slate-400' },
  yellow: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', text: 'text-yellow-400' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400' },
  pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-400' },
  teal: { bg: 'bg-teal-500/10', border: 'border-teal-500/30', text: 'text-teal-400' },
  rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/30', text: 'text-rose-400' },
  violet: { bg: 'bg-violet-500/10', border: 'border-violet-500/30', text: 'text-violet-400' },
  indigo: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/30', text: 'text-indigo-400' },
};

// Volume/Ticket badge component
const VolumeBadge = ({ volume, ticket }: { volume: string; ticket: string }) => {
  const volColor = volume === 'High' ? 'text-green-400' : volume === 'Mid' ? 'text-yellow-400' : 'text-red-400';
  const ticketColor = ticket === 'Ultra-High' ? 'text-purple-400' : ticket === 'High' ? 'text-blue-400' : ticket === 'Mid' ? 'text-yellow-400' : 'text-slate-400';

  return (
    <div className="flex gap-2 text-xs">
      <span className={`px-2 py-0.5 rounded bg-white/5 ${volColor}`}>{volume} Vol</span>
      <span className={`px-2 py-0.5 rounded bg-white/5 ${ticketColor}`}>{ticket} Ticket</span>
    </div>
  );
};

// Campaign Card Component
const CampaignCard = ({ campaign, color }: { campaign: Campaign; color: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const colors = colorClasses[color] || colorClasses.slate;

  return (
    <div className={`rounded-xl border ${colors.border} ${colors.bg} overflow-hidden`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className={`px-2 py-0.5 rounded text-xs ${campaign.type === 'merchant' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400'}`}>
              {campaign.type === 'merchant' ? 'Merchant' : 'User'}
            </span>
            <span className="text-xs text-slate-500">{campaign.timeline}</span>
          </div>
          <h4 className="font-semibold text-white">{campaign.name}</h4>
          <p className="text-sm text-slate-400 mt-1">{campaign.hook}</p>
        </div>
        {isExpanded ? <ChevronDown className="w-5 h-5 text-slate-400" /> : <ChevronRight className="w-5 h-5 text-slate-400" />}
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 space-y-4 border-t border-white/10">
          {/* Thesis */}
          <div className="pt-4">
            <h5 className="text-xs font-medium text-slate-500 uppercase mb-2">Campaign Thesis</h5>
            <p className="text-sm text-slate-300">{campaign.thesis}</p>
          </div>

          {/* Channels */}
          <div>
            <h5 className="text-xs font-medium text-slate-500 uppercase mb-2">Channels & Tactics</h5>
            <div className="space-y-2">
              {campaign.channels.map((ch, idx) => (
                <div key={idx} className="flex items-center justify-between text-sm bg-white/5 rounded-lg p-2">
                  <div>
                    <span className={`font-medium ${colors.text}`}>{ch.channel}</span>
                    <p className="text-slate-400 text-xs">{ch.tactic}</p>
                  </div>
                  <span className="text-slate-500 text-xs">{ch.budget}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Messaging */}
          <div>
            <h5 className="text-xs font-medium text-slate-500 uppercase mb-2">Messaging</h5>
            <div className="bg-white/5 rounded-lg p-3 space-y-2">
              <p className={`font-semibold ${colors.text}`}>{campaign.messaging.headline}</p>
              <p className="text-sm text-slate-300">{campaign.messaging.body}</p>
              <p className="text-sm font-medium text-white">CTA: {campaign.messaging.cta}</p>
            </div>
          </div>

          {/* Creative Assets */}
          <div>
            <h5 className="text-xs font-medium text-slate-500 uppercase mb-2">Creative Assets</h5>
            <div className="flex flex-wrap gap-2">
              {campaign.creativeAssets.map((asset, idx) => (
                <span key={idx} className="text-xs px-2 py-1 bg-white/5 rounded text-slate-400">
                  {asset}
                </span>
              ))}
            </div>
          </div>

          {/* KPIs */}
          <div>
            <h5 className="text-xs font-medium text-slate-500 uppercase mb-2">KPIs</h5>
            <div className="grid grid-cols-2 gap-2">
              {campaign.kpis.map((kpi, idx) => (
                <div key={idx} className="bg-white/5 rounded-lg p-2">
                  <p className="text-xs text-slate-500">{kpi.metric}</p>
                  <p className={`font-semibold ${colors.text}`}>{kpi.target}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Budget */}
          <div className="flex items-center justify-between pt-2 border-t border-white/10">
            <span className="text-sm text-slate-400">Total Budget</span>
            <span className={`font-bold ${colors.text}`}>{campaign.budget}</span>
          </div>
        </div>
      )}
    </div>
  );
};

// Niche Section Component
const NicheSection = ({ niche }: { niche: NicheData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = niche.icon;
  const colors = colorClasses[niche.color] || colorClasses.slate;
  const totalCampaigns = niche.merchantCampaigns.length + niche.userCampaigns.length;

  return (
    <div className={`rounded-2xl border ${colors.border} overflow-hidden`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full p-5 text-left flex items-center justify-between hover:bg-white/5 transition-colors ${colors.bg}`}
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <span className={`text-2xl font-black ${colors.text}`}>#{niche.rank}</span>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colors.bg} border ${colors.border}`}>
              <Icon className={`w-6 h-6 ${colors.text}`} />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white text-lg">{niche.name}</h3>
            <p className="text-sm text-slate-400 mt-1">{niche.whyItWins}</p>
            <div className="mt-2 flex items-center gap-3">
              <VolumeBadge volume={niche.volume} ticket={niche.ticket} />
              <span className="text-xs text-slate-500">{totalCampaigns} campaigns ready</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-xs text-slate-500">Merchant</p>
            <p className={`font-bold ${colors.text}`}>{niche.merchantCampaigns.length}</p>
          </div>
          <div className="text-right hidden sm:block">
            <p className="text-xs text-slate-500">User</p>
            <p className={`font-bold ${colors.text}`}>{niche.userCampaigns.length}</p>
          </div>
          {isExpanded ? <ChevronDown className="w-6 h-6 text-slate-400" /> : <ChevronRight className="w-6 h-6 text-slate-400" />}
        </div>
      </button>

      {isExpanded && (
        <div className="p-5 space-y-6 bg-[#0d1c30]">
          {/* Merchant Campaigns */}
          {niche.merchantCampaigns.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-emerald-400 mb-3 flex items-center gap-2">
                <Building2 className="w-4 h-4" /> Merchant Acquisition Campaigns
              </h4>
              <div className="space-y-3">
                {niche.merchantCampaigns.map((campaign) => (
                  <CampaignCard key={campaign.id} campaign={campaign} color={niche.color} />
                ))}
              </div>
            </div>
          )}

          {/* User Campaigns */}
          {niche.userCampaigns.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-blue-400 mb-3 flex items-center gap-2">
                <Users className="w-4 h-4" /> User Acquisition Campaigns
              </h4>
              <div className="space-y-3">
                {niche.userCampaigns.map((campaign) => (
                  <CampaignCard key={campaign.id} campaign={campaign} color={niche.color} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default function Top20CampaignsPage() {
  const [expandAll, setExpandAll] = useState(false);

  // Calculate totals
  const totalMerchantCampaigns = top20Niches.reduce((acc, n) => acc + n.merchantCampaigns.length, 0);
  const totalUserCampaigns = top20Niches.reduce((acc, n) => acc + n.userCampaigns.length, 0);
  const totalCampaigns = totalMerchantCampaigns + totalUserCampaigns;

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Header */}
      <header className="bg-[#0d1c30] border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <ArrowLeft className="w-5 h-5 text-slate-400" />
              </Link>
              <div>
                <h1 className="text-xl font-bold text-white">Top 20 Niche Campaigns</h1>
                <p className="text-sm text-slate-400">Priority verticals with full campaign playbooks</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/category-campaigns"
                className="px-3 py-1.5 text-sm bg-white/10 hover:bg-white/20 rounded-lg text-slate-300 transition-colors"
              >
                All Category Campaigns
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-xl p-4 text-center">
            <p className="text-3xl font-black text-white">{top20Niches.length}</p>
            <p className="text-sm text-[#c9a227]">Priority Niches</p>
          </div>
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-center">
            <p className="text-3xl font-black text-white">{totalMerchantCampaigns}</p>
            <p className="text-sm text-emerald-400">Merchant Campaigns</p>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-center">
            <p className="text-3xl font-black text-white">{totalUserCampaigns}</p>
            <p className="text-sm text-blue-400">User Campaigns</p>
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 text-center">
            <p className="text-3xl font-black text-white">{totalCampaigns}</p>
            <p className="text-sm text-purple-400">Total Campaigns</p>
          </div>
        </div>

        {/* Legend */}
        <div className="bg-white/5 rounded-xl p-4 mb-8">
          <h3 className="text-sm font-medium text-white mb-3">Volume & Ticket Guide</h3>
          <div className="flex flex-wrap gap-4 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span className="text-slate-400">High Volume = 3-5 transactions/user/week</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="text-slate-400">Mid Volume = 1-2 transactions/user/month</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="text-slate-400">Low Volume = Occasional/seasonal</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-purple-500"></span>
              <span className="text-slate-400">Ultra-High Ticket = AED 10,000+</span>
            </div>
          </div>
        </div>

        {/* Niche List */}
        <div className="space-y-4">
          {top20Niches.map((niche) => (
            <NicheSection key={niche.id} niche={niche} />
          ))}
        </div>

        {/* Footer */}
        <p className="text-center text-slate-600 text-xs mt-12">
          Top 20 Niche Campaigns v1.0 • {totalCampaigns} Campaigns Ready • Last Updated: February 2026
        </p>
      </main>
    </div>
  );
}
