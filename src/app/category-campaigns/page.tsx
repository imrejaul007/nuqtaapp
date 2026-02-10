'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  ArrowLeft,
  Store,
  Users,
  Utensils,
  Scissors,
  Dumbbell,
  Building2,
  Car,
  Heart,
  PawPrint,
  Shirt,
  ShoppingBag,
  Star,
  Settings,
  Stethoscope,
  Film,
  PartyPopper,
  Target,
  Zap,
  DollarSign,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Gift,
  TrendingUp,
  BarChart3,
  Megaphone,
  Camera,
  Clock,
  ChevronDown,
  ChevronRight,
  Copy,
  Play,
  Sparkles,
  Globe,
  Coffee,
  Wallet,
  UserPlus,
  Repeat,
  Bell
} from 'lucide-react';

/**
 * CATEGORY-SPECIFIC CAMPAIGNS
 *
 * Each category has:
 * 1. Merchant Acquisition Campaigns - How to sign merchants in this category
 * 2. User Acquisition Campaigns - How to bring users to merchants in this category
 */

interface Campaign {
  id: string;
  name: string;
  type: 'merchant' | 'user';
  thesis: string;
  channels: { channel: string; tactic: string; budget: string }[];
  creativeAssets: string[];
  messaging: { headline: string; body: string; cta: string };
  kpis: { metric: string; target: string }[];
  timeline: string;
  budget: string;
}

interface CategoryCampaigns {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  playbook: string;
  merchantCampaigns: Campaign[];
  userCampaigns: Campaign[];
}

// All category campaigns data
const categoryCampaigns: CategoryCampaigns[] = [
  {
    id: 'cafe',
    name: 'Cafe & Restaurant',
    icon: Utensils,
    color: 'orange',
    playbook: '/playbook-cafe',
    merchantCampaigns: [
      {
        id: 'cafe-m1',
        name: 'F&B District Blitz',
        type: 'merchant',
        thesis: 'Walk door-to-door in high-density F&B areas (JBR, DIFC, Downtown) to sign 20+ cafes per day',
        channels: [
          { channel: 'Feet on Street', tactic: '2-person BD team per district', budget: 'AED 5K/week' },
          { channel: 'WhatsApp Business', tactic: 'Pre-warm via cafe WhatsApp groups', budget: 'AED 500' },
          { channel: 'Google Maps List', tactic: 'Target 4+ star cafes in area', budget: 'AED 0' }
        ],
        creativeAssets: [
          '1-page "Empty Tables to Full House" flyer',
          'iPad with live demo account',
          'QR code stickers (print 100 per visit)',
          'Before/After case study card'
        ],
        messaging: {
          headline: 'Fill Your 2-5pm Empty Tables',
          body: '68% of cafe customers never return. Nuqta brings them back with coin rewards. You only pay 15% on new sales - less than Talabat.',
          cta: 'Let me show you a 3-minute demo. Takes 10 minutes to go live.'
        },
        kpis: [
          { metric: 'Cafes visited per day', target: '30+' },
          { metric: 'Sign-up rate', target: '25%+' },
          { metric: 'Cost per merchant', target: '< AED 200' }
        ],
        timeline: '4 weeks per district, then move to next',
        budget: 'AED 25,000/month'
      },
      {
        id: 'cafe-m2',
        name: 'Talabat Refugee Campaign',
        type: 'merchant',
        thesis: 'Target cafes frustrated with 30%+ delivery commissions - offer dine-in loyalty alternative',
        channels: [
          { channel: 'LinkedIn Ads', tactic: 'Target F&B owners/managers', budget: 'AED 8K' },
          { channel: 'Instagram DMs', tactic: 'DM cafes posting about delivery struggles', budget: 'AED 2K' },
          { channel: 'F&B WhatsApp Groups', tactic: 'Share testimonials in owner groups', budget: 'AED 0' }
        ],
        creativeAssets: [
          '"Talabat Takes 30%, Nuqta Takes 15%" comparison visual',
          'ROI calculator showing dine-in vs delivery margins',
          'Video testimonial from converted cafe owner'
        ],
        messaging: {
          headline: 'Stop Giving 30% to Talabat',
          body: 'Build your OWN loyal customer base. Nuqta brings dine-in customers for half the commission, and YOU own the data.',
          cta: 'Book a 15-min call to see your potential savings'
        },
        kpis: [
          { metric: 'Leads generated', target: '50/week' },
          { metric: 'Demo-to-sign rate', target: '40%' },
          { metric: 'CAC', target: '< AED 300' }
        ],
        timeline: 'Ongoing evergreen campaign',
        budget: 'AED 15,000/month'
      }
    ],
    userCampaigns: [
      {
        id: 'cafe-u1',
        name: 'Coffee Hunters Launch',
        type: 'user',
        thesis: 'Target specialty coffee enthusiasts to discover and earn at independent cafes',
        channels: [
          { channel: 'Instagram Reels', tactic: 'Cafe discovery reels with coin overlay', budget: 'AED 10K' },
          { channel: 'Food Bloggers', tactic: '10 micro-influencers (5K-20K followers)', budget: 'AED 15K' },
          { channel: 'Google Ads', tactic: '"Best cafes near me" keywords', budget: 'AED 8K' }
        ],
        creativeAssets: [
          '"Discover & Earn" cafe crawl video',
          'Top 10 Hidden Cafes in Dubai carousel',
          'Coffee lovers persona targeting'
        ],
        messaging: {
          headline: 'Get Paid to Discover New Cafes',
          body: 'Earn coins at 200+ cafes in Dubai. Every latte, every pastry = money back. Use coins at ANY Nuqta merchant.',
          cta: 'Download Nuqta - Your coffee just got cheaper'
        },
        kpis: [
          { metric: 'App downloads', target: '5K/week' },
          { metric: 'First cafe transaction', target: '40%' },
          { metric: 'CAC', target: '< AED 15' }
        ],
        timeline: '8-week burst campaign',
        budget: 'AED 35,000'
      },
      {
        id: 'cafe-u2',
        name: 'Office Lunch Crowd',
        type: 'user',
        thesis: 'Target office workers in DIFC/Downtown for daily lunch habit',
        channels: [
          { channel: 'LinkedIn Ads', tactic: 'Target by office building/company', budget: 'AED 12K' },
          { channel: 'Office Elevator Screens', tactic: 'Digital ads in DIFC towers', budget: 'AED 8K' },
          { channel: 'Corporate WhatsApp', tactic: 'HR partnership for employee benefits', budget: 'AED 3K' }
        ],
        creativeAssets: [
          '"Your Lunch Break, Rewarded" office-focused creative',
          'Map of nearby participating cafes',
          'Weekly lunch rewards tracker'
        ],
        messaging: {
          headline: 'Your Daily Lunch = Daily Rewards',
          body: 'Eating out anyway? Earn coins on every lunch. 50+ restaurants near your office. Redeem for free meals.',
          cta: 'Scan to see restaurants near your office'
        },
        kpis: [
          { metric: 'Office worker signups', target: '500/week' },
          { metric: 'Weekly active users', target: '60%' },
          { metric: 'Avg transactions/user', target: '3+/week' }
        ],
        timeline: 'Ongoing with office rotation',
        budget: 'AED 25,000/month'
      }
    ]
  },
  {
    id: 'salon',
    name: 'Salon & Spa',
    icon: Scissors,
    color: 'pink',
    playbook: '/playbook-salon',
    merchantCampaigns: [
      {
        id: 'salon-m1',
        name: 'Beauty District Sweep',
        type: 'merchant',
        thesis: 'Target salons in beauty-dense areas (JLT, Marina, Jumeirah) with empty Sunday-Tuesday slots',
        channels: [
          { channel: 'Feet on Street', tactic: 'Visit during slow hours (Sun-Tue 10am)', budget: 'AED 4K/week' },
          { channel: 'Instagram DM', tactic: 'DM salons with low engagement posts', budget: 'AED 1K' },
          { channel: 'Fresha/Booksy Lists', tactic: 'Target salons using booking platforms', budget: 'AED 0' }
        ],
        creativeAssets: [
          '"Fill Your Empty Chairs" visual with calendar',
          'Before/After booking rate comparison',
          'Beauty rewards program explainer'
        ],
        messaging: {
          headline: 'Your Sunday Chairs Are Empty',
          body: 'You pay rent 7 days, but only earn 4. Nuqta sends clients on YOUR slow days. Pay only when they book.',
          cta: 'Let me show you how in 5 minutes'
        },
        kpis: [
          { metric: 'Salons visited/day', target: '25+' },
          { metric: 'Sign-up rate', target: '30%' },
          { metric: 'Cost per merchant', target: '< AED 180' }
        ],
        timeline: '3 weeks per area',
        budget: 'AED 20,000/month'
      },
      {
        id: 'salon-m2',
        name: 'Staff Retention Hook',
        type: 'merchant',
        thesis: 'Position Nuqta as client retention tool when staff leaves - salon keeps customers',
        channels: [
          { channel: 'LinkedIn Articles', tactic: '"Stop Losing Clients When Staff Quits"', budget: 'AED 3K' },
          { channel: 'Salon Owner Events', tactic: 'Sponsor beauty industry meetups', budget: 'AED 10K' },
          { channel: 'Direct Outreach', tactic: 'Target salons with recent staff changes', budget: 'AED 2K' }
        ],
        creativeAssets: [
          'Case study: Salon retained 80% of clients after stylist left',
          '"Your Clients, Not Your Staff\'s" messaging',
          'Data ownership benefits infographic'
        ],
        messaging: {
          headline: 'Your Stylist Left. Your Clients Stayed.',
          body: 'With Nuqta, clients are loyal to YOUR salon, not to the staff. Own the relationship. Keep the data forever.',
          cta: 'Never lose a client to staff turnover again'
        },
        kpis: [
          { metric: 'Inbound leads', target: '20/week' },
          { metric: 'Close rate', target: '35%' },
          { metric: 'Avg salon size', target: '5+ chairs' }
        ],
        timeline: 'Ongoing content campaign',
        budget: 'AED 18,000/month'
      }
    ],
    userCampaigns: [
      {
        id: 'salon-u1',
        name: 'Pamper Points Launch',
        type: 'user',
        thesis: 'Target beauty-conscious women 25-45 who book monthly salon services',
        channels: [
          { channel: 'Instagram Ads', tactic: 'Target beauty/skincare interests', budget: 'AED 15K' },
          { channel: 'Beauty Influencers', tactic: '15 micro-influencers with salon content', budget: 'AED 20K' },
          { channel: 'TikTok', tactic: '"Get Ready With Me + Earn" videos', budget: 'AED 10K' }
        ],
        creativeAssets: [
          '"Your Glow-Up, Rewarded" campaign',
          'Salon discovery feature showcase',
          'Monthly beauty rewards tracker'
        ],
        messaging: {
          headline: 'Your Beauty Routine = Free Beauty',
          body: 'Earn coins on every mani, pedi, blowout. 150+ salons in Dubai. Coins = free services or use anywhere.',
          cta: 'Download Nuqta - Beauty that pays you back'
        },
        kpis: [
          { metric: 'Downloads from beauty interest', target: '3K/week' },
          { metric: 'First salon booking', target: '35%' },
          { metric: '30-day retention', target: '45%' }
        ],
        timeline: '6-week launch campaign',
        budget: 'AED 50,000'
      },
      {
        id: 'salon-u2',
        name: 'Bridal Party Blitz',
        type: 'user',
        thesis: 'Target brides-to-be and bridal party members for high-value salon bookings',
        channels: [
          { channel: 'Wedding Platforms', tactic: 'Partner with Bridestory, Arabia Weddings', budget: 'AED 8K' },
          { channel: 'Bridal Instagram', tactic: 'Target engaged women hashtags', budget: 'AED 12K' },
          { channel: 'Bridal Shows', tactic: 'Booth at wedding exhibitions', budget: 'AED 15K' }
        ],
        creativeAssets: [
          '"Bridal Beauty Rewards" dedicated landing page',
          'Bridal party group rewards explainer',
          'Wedding prep timeline with earning moments'
        ],
        messaging: {
          headline: 'Wedding Prep That Pays You Back',
          body: 'Trials, appointments, the big day - earn coins on everything. Your bridal party earns too. Use coins on honeymoon!',
          cta: 'Start earning for your special day'
        },
        kpis: [
          { metric: 'Bridal signups', target: '200/month' },
          { metric: 'Avg bridal party size', target: '5+' },
          { metric: 'Pre-wedding transactions', target: '8+' }
        ],
        timeline: 'Peak wedding season focus (Oct-Apr)',
        budget: 'AED 40,000/season'
      }
    ]
  },
  {
    id: 'gym',
    name: 'Gym & Fitness',
    icon: Dumbbell,
    color: 'green',
    playbook: '/playbook-gym',
    merchantCampaigns: [
      {
        id: 'gym-m1',
        name: 'January Rush Rescue',
        type: 'merchant',
        thesis: 'Sign gyms in December to help them retain the January wave of new members',
        channels: [
          { channel: 'LinkedIn Campaign', tactic: 'Target gym owners/managers Nov-Dec', budget: 'AED 10K' },
          { channel: 'Fitness Industry Events', tactic: 'Sponsor/speak at fitness expos', budget: 'AED 15K' },
          { channel: 'Direct Outreach', tactic: 'Email + phone to 200+ gyms', budget: 'AED 3K' }
        ],
        creativeAssets: [
          '"January Sign-ups, December Churn" data visual',
          'Member retention playbook',
          'ROI calculator for member LTV'
        ],
        messaging: {
          headline: '80% of January Members Quit by March',
          body: 'Nuqta keeps them coming. Members earn coins per visit. More visits = more habit = less churn. You pay only on active members.',
          cta: 'Get ready for January - demo takes 10 minutes'
        },
        kpis: [
          { metric: 'Gyms signed by Dec 31', target: '50+' },
          { metric: 'January member retention', target: '+25%' },
          { metric: 'Avg gym size', target: '500+ members' }
        ],
        timeline: 'Oct-Dec push, Jan measurement',
        budget: 'AED 30,000'
      },
      {
        id: 'gym-m2',
        name: 'Empty Class Filler',
        type: 'merchant',
        thesis: 'Target gyms/studios with underbooked group classes - fill 11am and 3pm slots',
        channels: [
          { channel: 'ClassPass Partnership', tactic: 'Target studios already on ClassPass', budget: 'AED 5K' },
          { channel: 'Instagram DM', tactic: 'DM studios posting empty class photos', budget: 'AED 2K' },
          { channel: 'Referral from Other Merchants', tactic: 'Ask cafe partners for gym referrals', budget: 'AED 1K' }
        ],
        creativeAssets: [
          '"Your 11am Yoga Class Has 2 People" visual',
          'Peak vs off-peak utilization chart',
          'Double coins on slow classes feature'
        ],
        messaging: {
          headline: 'Your Classes Are Ready. Where Are the Members?',
          body: 'Nuqta fills your off-peak classes with double coin incentives. Pay only when they show up.',
          cta: 'Let us fill your empty mats'
        },
        kpis: [
          { metric: 'Studios signed', target: '30/month' },
          { metric: 'Off-peak class increase', target: '+40%' },
          { metric: 'Cost per studio', target: '< AED 250' }
        ],
        timeline: 'Ongoing',
        budget: 'AED 12,000/month'
      }
    ],
    userCampaigns: [
      {
        id: 'gym-u1',
        name: 'Fitness Resolution Boost',
        type: 'user',
        thesis: 'Target New Year resolution crowd with gym rewards to maintain motivation',
        channels: [
          { channel: 'Instagram/TikTok', tactic: 'Fitness transformation content', budget: 'AED 20K' },
          { channel: 'Fitness Influencers', tactic: '20 trainers/fitness accounts', budget: 'AED 25K' },
          { channel: 'Google Ads', tactic: '"Gym near me" January keywords', budget: 'AED 15K' }
        ],
        creativeAssets: [
          '"Get Fit, Get Paid" January campaign',
          'Gym visit streak rewards visual',
          '30-day challenge with coin milestones'
        ],
        messaging: {
          headline: 'This Year, Your Workout Pays You',
          body: 'Earn coins every gym visit. Hit streak goals, earn bonus. Use coins for protein, gear, or anything. 100+ gyms in Dubai.',
          cta: 'Download Nuqta - Make your resolution stick'
        },
        kpis: [
          { metric: 'January downloads', target: '10K' },
          { metric: 'First gym check-in', target: '50%' },
          { metric: '30-day streak completion', target: '20%' }
        ],
        timeline: 'Jan 1 - Feb 28 burst',
        budget: 'AED 65,000'
      },
      {
        id: 'gym-u2',
        name: 'Corporate Wellness Partner',
        type: 'user',
        thesis: 'Partner with HR departments to offer Nuqta as employee wellness benefit',
        channels: [
          { channel: 'LinkedIn B2B', tactic: 'Target HR managers at large companies', budget: 'AED 8K' },
          { channel: 'HR Events', tactic: 'Sponsor wellness/benefits conferences', budget: 'AED 12K' },
          { channel: 'Company Presentations', tactic: 'Lunch & learn sessions', budget: 'AED 5K' }
        ],
        creativeAssets: [
          'Corporate wellness program brochure',
          'Employee engagement dashboard preview',
          'Company challenge feature showcase'
        ],
        messaging: {
          headline: 'Reward Your Team for Being Healthy',
          body: 'Nuqta Corporate: Employees earn coins at gyms, healthy cafes, wellness providers. Track engagement. Boost morale.',
          cta: 'Book a corporate demo'
        },
        kpis: [
          { metric: 'Companies signed', target: '10/month' },
          { metric: 'Avg employees per company', target: '200+' },
          { metric: 'Employee activation rate', target: '40%' }
        ],
        timeline: 'Ongoing B2B',
        budget: 'AED 28,000/month'
      }
    ]
  },
  {
    id: 'hotel',
    name: 'Hotels & Hospitality',
    icon: Building2,
    color: 'blue',
    playbook: '/playbook-hotel',
    merchantCampaigns: [
      {
        id: 'hotel-m1',
        name: 'Hotel F&B Liberation',
        type: 'merchant',
        thesis: 'Sign hotel restaurants/bars/spas to get local traffic beyond hotel guests',
        channels: [
          { channel: 'LinkedIn', tactic: 'Target F&B directors, Spa managers', budget: 'AED 10K' },
          { channel: 'Hotel Industry Events', tactic: 'AHIC, ATM trade shows', budget: 'AED 20K' },
          { channel: 'Referral Chain', tactic: 'One hotel refers sister properties', budget: 'AED 5K' }
        ],
        creativeAssets: [
          '"Beyond Hotel Guests" pitch deck',
          'Local vs in-house revenue comparison',
          'Multi-outlet loyalty program overview'
        ],
        messaging: {
          headline: 'Your Restaurant Deserves More Than Hotel Guests',
          body: '80% of hotel F&B revenue is in-house. Nuqta brings 500K+ locals to your restaurant, spa, bar. Keep your rate integrity - no discounts.',
          cta: 'See how 5-star hotels use Nuqta for F&B'
        },
        kpis: [
          { metric: 'Hotels signed', target: '10/month' },
          { metric: 'Outlets per hotel', target: '3+' },
          { metric: 'Local traffic increase', target: '+25%' }
        ],
        timeline: 'Ongoing with seasonal pushes',
        budget: 'AED 40,000/month'
      },
      {
        id: 'hotel-m2',
        name: 'Friday Brunch Rescue',
        type: 'merchant',
        thesis: 'Help hotels compete in crowded Friday brunch market with loyalty differentiation',
        channels: [
          { channel: 'Direct Outreach', tactic: 'Call/visit hotel F&B managers', budget: 'AED 5K' },
          { channel: 'Brunch Blogger Intros', tactic: 'Connect hotels with food influencers', budget: 'AED 8K' },
          { channel: 'Competitor Analysis', tactic: 'Show hotels their brunch competition', budget: 'AED 0' }
        ],
        creativeAssets: [
          '"100 Hotels, 1 Friday" competitive landscape',
          'Brunch loyalty program showcase',
          'Repeat brunch customer data'
        ],
        messaging: {
          headline: '100 Hotels Fight for Friday Brunch',
          body: 'Stand out with rewards. Guests earn coins, come back monthly. We track spend, you see who your brunch regulars are.',
          cta: 'Differentiate your brunch - demo in 15 minutes'
        },
        kpis: [
          { metric: 'Brunch venues signed', target: '20' },
          { metric: 'Repeat brunch rate', target: '+30%' },
          { metric: 'Brunch GMV tracked', target: 'AED 500K/month' }
        ],
        timeline: 'Pre-season push (Sep-Oct)',
        budget: 'AED 15,000'
      }
    ],
    userCampaigns: [
      {
        id: 'hotel-u1',
        name: 'Staycation Rewards',
        type: 'user',
        thesis: 'Target UAE residents for staycation spending at hotel F&B and spa',
        channels: [
          { channel: 'Instagram/Facebook', tactic: 'Target "staycation UAE" interests', budget: 'AED 15K' },
          { channel: 'Travel Influencers', tactic: 'Local travel/lifestyle creators', budget: 'AED 20K' },
          { channel: 'Entertainer Alternatives', tactic: 'Target Entertainer app users', budget: 'AED 10K' }
        ],
        creativeAssets: [
          '"Staycation That Pays Back" campaign',
          'Hotel F&B discovery feature',
          'Spa day rewards calculator'
        ],
        messaging: {
          headline: 'Your Staycation Just Got Better',
          body: 'Earn coins at hotel restaurants, spas, bars. Every brunch, every spa day = rewards. Use coins anywhere in Dubai.',
          cta: 'Download Nuqta - Elevate your staycation'
        },
        kpis: [
          { metric: 'Downloads', target: '4K/week' },
          { metric: 'Hotel F&B transactions', target: '30%' },
          { metric: 'Avg transaction value', target: 'AED 400+' }
        ],
        timeline: 'Ongoing with weekend pushes',
        budget: 'AED 50,000/month'
      },
      {
        id: 'hotel-u2',
        name: 'Pool Day Pass Push',
        type: 'user',
        thesis: 'Drive local residents to hotel pools/beaches during summer',
        channels: [
          { channel: 'Summer Campaign', tactic: 'May-Sep "Beat the Heat" messaging', budget: 'AED 20K' },
          { channel: 'Family Targeting', tactic: 'Parents with kids content', budget: 'AED 15K' },
          { channel: 'Geo-targeting', tactic: 'Push notifications near hotels', budget: 'AED 5K' }
        ],
        creativeAssets: [
          '"Pool Day, Rewarded" summer campaign',
          'Best hotel pools in Dubai map',
          'Day pass + F&B combo rewards'
        ],
        messaging: {
          headline: 'Hotel Pool Day Without the Room Price',
          body: 'Day passes at 50+ hotels. Earn coins on pool access, lunch, drinks. Perfect summer escape, perfect rewards.',
          cta: 'Find a pool near you and start earning'
        },
        kpis: [
          { metric: 'Pool day transactions', target: '500/week' },
          { metric: 'F&B add-on rate', target: '70%' },
          { metric: 'Summer campaign downloads', target: '8K' }
        ],
        timeline: 'May - September',
        budget: 'AED 45,000/season'
      }
    ]
  },
  {
    id: 'auto',
    name: 'Car Services & Auto',
    icon: Car,
    color: 'slate',
    playbook: '/playbook-auto',
    merchantCampaigns: [
      {
        id: 'auto-m1',
        name: 'Car Wash Cluster Takeover',
        type: 'merchant',
        thesis: 'Sign 10+ car washes in each industrial area cluster for network density',
        channels: [
          { channel: 'Feet on Street', tactic: 'Visit Al Quoz, Ras Al Khor clusters', budget: 'AED 4K/week' },
          { channel: 'Fleet Manager Outreach', tactic: 'Partner car washes get fleet referrals', budget: 'AED 2K' },
          { channel: 'Gas Station Partnerships', tactic: 'Sign car washes at ENOC/ADNOC', budget: 'AED 5K' }
        ],
        creativeAssets: [
          '"Turn Random Customers into Regulars" flyer',
          'Fleet partnership program overview',
          'Summer campaign pre-sell deck'
        ],
        messaging: {
          headline: '60% of Your Customers Are Random',
          body: 'They pick whoever is closest. Nuqta makes them pick YOU every time. Coins create loyalty. No loyalty cards, no stamps.',
          cta: 'Make every wash count - 5-minute setup'
        },
        kpis: [
          { metric: 'Car washes per cluster', target: '10+' },
          { metric: 'Repeat customer increase', target: '+35%' },
          { metric: 'Cost per merchant', target: '< AED 150' }
        ],
        timeline: '2 weeks per industrial cluster',
        budget: 'AED 15,000/month'
      },
      {
        id: 'auto-m2',
        name: 'Premium Services Upsell',
        type: 'merchant',
        thesis: 'Sign auto detailing, ceramic coating, PPF shops with bonus coins on premium services',
        channels: [
          { channel: 'Instagram DM', tactic: 'Target premium auto content creators', budget: 'AED 3K' },
          { channel: 'Car Club Partnerships', tactic: 'Sponsor car meet events', budget: 'AED 10K' },
          { channel: 'Referral from Car Washes', tactic: 'Basic car wash refers premium', budget: 'AED 2K' }
        ],
        creativeAssets: [
          'Premium detailing showcase',
          '"Upgrade Your Service, Upgrade Your Rewards" visual',
          'Car enthusiast persona marketing'
        ],
        messaging: {
          headline: 'Premium Service Deserves Premium Rewards',
          body: 'Ceramic coating, PPF, full detailing - customers earn bonus coins on high-value services. They\'ll upgrade more often.',
          cta: 'Partner with Nuqta for premium auto'
        },
        kpis: [
          { metric: 'Premium shops signed', target: '20/month' },
          { metric: 'Avg service value', target: 'AED 1,500+' },
          { metric: 'Repeat for premium', target: '+25%' }
        ],
        timeline: 'Ongoing',
        budget: 'AED 18,000/month'
      }
    ],
    userCampaigns: [
      {
        id: 'auto-u1',
        name: 'Car Owner Rewards',
        type: 'user',
        thesis: 'Target car owners through registration data, insurance renewals, fuel stations',
        channels: [
          { channel: 'ENOC/ADNOC Partnership', tactic: 'QR codes at fuel stations', budget: 'AED 20K' },
          { channel: 'RTA/Insurance Data', tactic: 'Partner for registration reminders', budget: 'AED 15K' },
          { channel: 'Car Forums', tactic: 'Dubizzle, car club Facebook groups', budget: 'AED 5K' }
        ],
        creativeAssets: [
          '"Own a Car? Earn on Every Service" campaign',
          'Service reminder + rewards feature',
          'Annual car expense rewards calculator'
        ],
        messaging: {
          headline: 'Your Car Costs Money. Now It Earns It Back.',
          body: 'Car wash, oil change, tires, detailing - earn coins on everything. Average car owner spends AED 3,000/year. Make it count.',
          cta: 'Download Nuqta - Rewards for drivers'
        },
        kpis: [
          { metric: 'Car owner signups', target: '5K/month' },
          { metric: 'First auto transaction', target: '45%' },
          { metric: 'Annual transactions per user', target: '15+' }
        ],
        timeline: 'Ongoing',
        budget: 'AED 45,000/month'
      },
      {
        id: 'auto-u2',
        name: 'Summer Car Care Campaign',
        type: 'user',
        thesis: 'Push AC service, tint, and protection services during summer months',
        channels: [
          { channel: 'Push Notifications', tactic: 'Geo + weather triggered pushes', budget: 'AED 5K' },
          { channel: 'Email Campaign', tactic: 'Summer car prep checklist', budget: 'AED 2K' },
          { channel: 'Social Ads', tactic: '"Summer-proof your car" content', budget: 'AED 10K' }
        ],
        creativeAssets: [
          '"Beat the Heat" summer campaign',
          'AC service reminder creative',
          'Ceramic coating benefits video'
        ],
        messaging: {
          headline: 'Your Car Hates Summer Too',
          body: 'AC service, ceramic coating, tint - protect your car AND earn rewards. Double coins on summer services all June-August.',
          cta: 'Get your car summer-ready and earn'
        },
        kpis: [
          { metric: 'Summer service transactions', target: '+50%' },
          { metric: 'AC service bookings', target: '1,000' },
          { metric: 'Campaign ROI', target: '5x' }
        ],
        timeline: 'June - August',
        budget: 'AED 20,000/season'
      }
    ]
  },
  {
    id: 'events',
    name: 'Events & Exhibitions',
    icon: PartyPopper,
    color: 'violet',
    playbook: '/events-playbook',
    merchantCampaigns: [
      {
        id: 'events-m1',
        name: 'Event Organizer Outreach',
        type: 'merchant',
        thesis: 'Sign event organizers 3-6 months before their events for proper integration',
        channels: [
          { channel: 'LinkedIn', tactic: 'Target event organizers, exhibition directors', budget: 'AED 10K' },
          { channel: 'Industry Events', tactic: 'ATM, GITEX pre-event networking', budget: 'AED 15K' },
          { channel: 'DWTC Partnership', tactic: 'Official partner for venue events', budget: 'AED 20K' }
        ],
        creativeAssets: [
          '"Turn Browsers into Buyers" event deck',
          'Event organizer ROI calculator',
          'Case study from previous events'
        ],
        messaging: {
          headline: '70% of Event Visitors Just Browse',
          body: 'Nuqta gives visitors coins they can only use if they spend AED 500+. Merchants make money. Merchants renew. You win.',
          cta: 'Partner for your next event - 2-week setup'
        },
        kpis: [
          { metric: 'Events signed per quarter', target: '5+' },
          { metric: 'Merchants per event', target: '50+' },
          { metric: 'Organizer revenue share', target: '10%' }
        ],
        timeline: 'Rolling 6-month pipeline',
        budget: 'AED 50,000/quarter'
      },
      {
        id: 'events-m2',
        name: 'Exhibitor Pre-Sell',
        type: 'merchant',
        thesis: 'Sign exhibitors before events - they\'re captive audience with booth investment',
        channels: [
          { channel: 'Exhibitor Email Lists', tactic: 'Partner with event organizers for access', budget: 'AED 5K' },
          { channel: 'Pre-Event Webinars', tactic: '"Maximize Your Booth ROI" sessions', budget: 'AED 3K' },
          { channel: 'On-Site Team', tactic: 'BD team walks the floor Day 1', budget: 'AED 10K' }
        ],
        creativeAssets: [
          'Exhibitor ROI pitch deck',
          '"Your Booth Cost AED 50K - Make It Back" visual',
          'Lead capture + rewards feature'
        ],
        messaging: {
          headline: 'Your Booth Cost AED 50K. Get Real ROI.',
          body: 'Exhibitors using Nuqta see 3x more qualified leads. Visitors HAVE to engage - their coins depend on it.',
          cta: 'Book a 10-minute pre-event demo'
        },
        kpis: [
          { metric: 'Exhibitors signed per event', target: '30%' },
          { metric: 'Avg booth spend tracked', target: 'AED 500K' },
          { metric: 'Lead capture rate', target: '+50%' }
        ],
        timeline: '4 weeks before each event',
        budget: 'AED 20,000/event'
      }
    ],
    userCampaigns: [
      {
        id: 'events-u1',
        name: 'Event Coins Launch',
        type: 'user',
        thesis: 'Drive app downloads at events through event-specific coins',
        channels: [
          { channel: 'On-Site Booth', tactic: 'High-visibility Nuqta booth at entrance', budget: 'AED 25K' },
          { channel: 'Event Social Takeover', tactic: 'Sponsored posts on event social', budget: 'AED 10K' },
          { channel: 'QR Everywhere', tactic: 'QR on event maps, bags, badges', budget: 'AED 8K' }
        ],
        creativeAssets: [
          '"AED 100 Free - Just for Visiting" event creative',
          'Event map with Nuqta merchant highlights',
          'Countdown to coin expiry urgency messaging'
        ],
        messaging: {
          headline: 'You Got AED 100 Free at [Event Name]',
          body: 'Spend AED 500 at any merchant and your coins unlock. 50+ merchants inside. Coins expire when event ends. Use it or lose it!',
          cta: 'Scan to get your Event Coins'
        },
        kpis: [
          { metric: 'Downloads per event', target: '10K+' },
          { metric: 'Coin unlock rate', target: '35%' },
          { metric: 'GMV per event', target: 'AED 3M+' }
        ],
        timeline: 'During each partnered event',
        budget: 'AED 50,000/event'
      },
      {
        id: 'events-u2',
        name: 'Existing User Event Push',
        type: 'user',
        thesis: 'Push existing Nuqta users to attend partnered events',
        channels: [
          { channel: 'Push Notifications', tactic: '"Use your coins at [Event]" pushes', budget: 'AED 2K' },
          { channel: 'Email Campaign', tactic: 'Event preview with merchant list', budget: 'AED 1K' },
          { channel: 'In-App Banners', tactic: 'Event promotion in discovery tab', budget: 'AED 0' }
        ],
        creativeAssets: [
          'Event preview email template',
          'Push notification with coin balance reminder',
          'Merchant lineup showcase'
        ],
        messaging: {
          headline: 'Your Nuqta Coins Work at [Event Name]',
          body: '500K Nuqta users with coins in their wallet. 50+ merchants at [Event]. Spend your coins this weekend.',
          cta: 'See what you can buy at [Event]'
        },
        kpis: [
          { metric: 'Existing users at event', target: '5K+' },
          { metric: 'Avg spend per existing user', target: 'AED 400' },
          { metric: 'Push open rate', target: '15%' }
        ],
        timeline: '1 week before each event',
        budget: 'AED 5,000/event'
      }
    ]
  }
];

// Additional categories with shorter campaigns
const additionalCategories: CategoryCampaigns[] = [
  {
    id: 'clinic',
    name: 'Clinics & Medical',
    icon: Heart,
    color: 'teal',
    playbook: '/playbook-clinic',
    merchantCampaigns: [
      {
        id: 'clinic-m1',
        name: 'Aesthetic Clinic Blitz',
        type: 'merchant',
        thesis: 'Sign dental, derma, and aesthetic clinics with high repeat potential',
        channels: [
          { channel: 'LinkedIn', tactic: 'Target clinic owners/managers', budget: 'AED 8K' },
          { channel: 'Healthcare Events', tactic: 'Arab Health trade show presence', budget: 'AED 15K' },
          { channel: 'Referral from Salons', tactic: 'Salon partners refer clinics', budget: 'AED 2K' }
        ],
        creativeAssets: [
          'Clinic patient retention deck',
          'Treatment package loyalty program',
          'Before/after retention stats'
        ],
        messaging: {
          headline: 'Your Patients Need 6 Sessions. Most Do 2.',
          body: 'Nuqta rewards completing treatment plans. Patients earn more for finishing. You see better results. Everyone wins.',
          cta: 'Improve treatment completion rates'
        },
        kpis: [
          { metric: 'Clinics signed', target: '20/month' },
          { metric: 'Treatment completion rate', target: '+30%' },
          { metric: 'Avg patient LTV', target: 'AED 3,000+' }
        ],
        timeline: 'Ongoing',
        budget: 'AED 28,000/month'
      }
    ],
    userCampaigns: [
      {
        id: 'clinic-u1',
        name: 'Wellness Rewards',
        type: 'user',
        thesis: 'Target health-conscious users for preventive care and aesthetics',
        channels: [
          { channel: 'Instagram', tactic: 'Wellness/beauty interests targeting', budget: 'AED 12K' },
          { channel: 'Health Influencers', tactic: 'Wellness content creators', budget: 'AED 15K' },
          { channel: 'Corporate Wellness', tactic: 'Partner with HR for health benefits', budget: 'AED 8K' }
        ],
        creativeAssets: [
          '"Invest in Health, Earn Rewards" campaign',
          'Clinic discovery feature',
          'Treatment rewards tracker'
        ],
        messaging: {
          headline: 'Your Health Journey, Rewarded',
          body: 'Dental, derma, physio, aesthetics - earn coins on every visit. Healthy choices = money back.',
          cta: 'Download Nuqta - Health that pays'
        },
        kpis: [
          { metric: 'Health-focused signups', target: '2K/month' },
          { metric: 'Clinic transactions', target: '40%' },
          { metric: 'Avg transaction value', target: 'AED 400' }
        ],
        timeline: 'Ongoing',
        budget: 'AED 40,000/month'
      }
    ]
  },
  {
    id: 'fashion',
    name: 'Fashion & Retail',
    icon: ShoppingBag,
    color: 'purple',
    playbook: '/playbook-fashion',
    merchantCampaigns: [
      {
        id: 'fashion-m1',
        name: 'Boutique Network',
        type: 'merchant',
        thesis: 'Sign independent boutiques competing against mall chains',
        channels: [
          { channel: 'Feet on Street', tactic: 'Visit boutiques in Jumeirah, DIFC', budget: 'AED 5K' },
          { channel: 'Fashion Events', tactic: 'Partner with Fashion Forward', budget: 'AED 12K' },
          { channel: 'Instagram DM', tactic: 'DM boutiques with low engagement', budget: 'AED 2K' }
        ],
        creativeAssets: [
          '"Compete with Malls" boutique pitch',
          'Customer data ownership visual',
          'Repeat shopper program overview'
        ],
        messaging: {
          headline: 'Mall Chains Have Loyalty. You Don\'t.',
          body: 'Level the playing field. Nuqta brings fashion lovers to independent boutiques. Own your customer data.',
          cta: 'Build boutique loyalty in 10 minutes'
        },
        kpis: [
          { metric: 'Boutiques signed', target: '30/month' },
          { metric: 'Repeat customer rate', target: '+40%' },
          { metric: 'Avg basket size', target: 'AED 400+' }
        ],
        timeline: 'Ongoing',
        budget: 'AED 22,000/month'
      }
    ],
    userCampaigns: [
      {
        id: 'fashion-u1',
        name: 'Style Rewards',
        type: 'user',
        thesis: 'Target fashion-conscious shoppers for boutique discovery',
        channels: [
          { channel: 'Instagram Reels', tactic: 'OOTD content with boutique tags', budget: 'AED 15K' },
          { channel: 'Fashion Influencers', tactic: '15 style micro-influencers', budget: 'AED 20K' },
          { channel: 'Pinterest', tactic: 'Style inspiration + shop links', budget: 'AED 5K' }
        ],
        creativeAssets: [
          '"Shop Local, Earn Global" campaign',
          'Boutique discovery feature',
          'Fashion rewards tracker'
        ],
        messaging: {
          headline: 'Discover Hidden Fashion Gems',
          body: 'Skip the mall. Find unique pieces at 100+ boutiques. Earn coins on every purchase.',
          cta: 'Download Nuqta - Fashion that rewards'
        },
        kpis: [
          { metric: 'Fashion interest signups', target: '3K/month' },
          { metric: 'Boutique transactions', target: '35%' },
          { metric: 'Avg basket', target: 'AED 350' }
        ],
        timeline: 'Ongoing with seasonal spikes',
        budget: 'AED 45,000/month'
      }
    ]
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    icon: Film,
    color: 'fuchsia',
    playbook: '/playbook-entertainment',
    merchantCampaigns: [
      {
        id: 'entertainment-m1',
        name: 'Experience Venues',
        type: 'merchant',
        thesis: 'Sign entertainment venues - escape rooms, bowling, karting, etc.',
        channels: [
          { channel: 'Direct Outreach', tactic: 'Visit entertainment hubs', budget: 'AED 4K' },
          { channel: 'Tourism Partnerships', tactic: 'Connect with DTG, DMC', budget: 'AED 10K' },
          { channel: 'Family Event Sponsors', tactic: 'Partner at family expos', budget: 'AED 8K' }
        ],
        creativeAssets: [
          'Family entertainment pitch deck',
          'Weekend traffic optimization',
          'Group booking rewards program'
        ],
        messaging: {
          headline: 'Weekday Lanes Are Empty',
          body: 'Nuqta fills off-peak with double coin incentives. Families earn more on weekdays. You maximize capacity.',
          cta: 'Fill your slow slots with Nuqta'
        },
        kpis: [
          { metric: 'Venues signed', target: '15/month' },
          { metric: 'Off-peak increase', target: '+45%' },
          { metric: 'Family repeat rate', target: '+35%' }
        ],
        timeline: 'Ongoing',
        budget: 'AED 25,000/month'
      }
    ],
    userCampaigns: [
      {
        id: 'entertainment-u1',
        name: 'Family Fun Rewards',
        type: 'user',
        thesis: 'Target parents for family entertainment spending',
        channels: [
          { channel: 'Parent Facebook Groups', tactic: 'Dubai parenting communities', budget: 'AED 8K' },
          { channel: 'Family Influencers', tactic: 'Mom/dad bloggers with kids content', budget: 'AED 15K' },
          { channel: 'School Partnerships', tactic: 'Flyers in school bags', budget: 'AED 5K' }
        ],
        creativeAssets: [
          '"Weekend Plans, Rewarded" campaign',
          'Family activity discovery',
          'Kids activity tracker'
        ],
        messaging: {
          headline: 'Family Fun Should Pay You Back',
          body: 'Movies, bowling, play areas - earn coins on everything. Average family spends AED 500/weekend. Make it count.',
          cta: 'Download Nuqta - Family rewards'
        },
        kpis: [
          { metric: 'Parent signups', target: '4K/month' },
          { metric: 'Weekend transactions', target: '3+/family' },
          { metric: 'Avg weekend spend', target: 'AED 400' }
        ],
        timeline: 'Ongoing',
        budget: 'AED 32,000/month'
      }
    ]
  }
];

// Combine all categories
const allCategories = [...categoryCampaigns, ...additionalCategories];

export default function CategoryCampaignsPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'cafe');
  const [activeTab, setActiveTab] = useState<'merchant' | 'user'>('merchant');
  const [expandedCampaign, setExpandedCampaign] = useState<string | null>(null);

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const currentCategory = allCategories.find(c => c.id === selectedCategory) || allCategories[0];
  const campaigns = activeTab === 'merchant' ? currentCategory.merchantCampaigns : currentCategory.userCampaigns;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Header */}
      <div className="bg-gradient-to-b from-purple-500/20 to-transparent">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Link href="/merchant-playbook" className="inline-flex items-center gap-2 text-slate-400 hover:text-purple-400 mb-6 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Playbooks</span>
          </Link>
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">
              Category <span className="text-purple-400">Campaigns</span>
            </h1>
            <p className="text-slate-400">Merchant acquisition + User acquisition campaigns by category</p>
          </div>
        </div>
      </div>

      {/* Category Selector */}
      <div className="max-w-6xl mx-auto px-4 mb-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {allCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-purple-500 text-white'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              <cat.icon size={16} />
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Category Header */}
      <div className="max-w-6xl mx-auto px-4 mb-6">
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center`}>
                <currentCategory.icon className="text-purple-400" size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{currentCategory.name}</h2>
                <p className="text-slate-400 text-sm">
                  {currentCategory.merchantCampaigns.length} merchant + {currentCategory.userCampaigns.length} user campaigns
                </p>
              </div>
            </div>
            <Link
              href={currentCategory.playbook}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-600 transition-colors"
            >
              View Full Playbook
            </Link>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto px-4 mb-6">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('merchant')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
              activeTab === 'merchant'
                ? 'bg-emerald-500 text-white'
                : 'bg-white/5 text-slate-300 hover:bg-white/10'
            }`}
          >
            <Store size={18} />
            Merchant Acquisition ({currentCategory.merchantCampaigns.length})
          </button>
          <button
            onClick={() => setActiveTab('user')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
              activeTab === 'user'
                ? 'bg-blue-500 text-white'
                : 'bg-white/5 text-slate-300 hover:bg-white/10'
            }`}
          >
            <Users size={18} />
            User Acquisition ({currentCategory.userCampaigns.length})
          </button>
        </div>
      </div>

      {/* Campaign Cards */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="space-y-4">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className={`bg-white/5 rounded-2xl border overflow-hidden transition-all ${
                activeTab === 'merchant' ? 'border-emerald-500/30' : 'border-blue-500/30'
              }`}
            >
              {/* Campaign Header */}
              <button
                onClick={() => setExpandedCampaign(expandedCampaign === campaign.id ? null : campaign.id)}
                className="w-full p-6 text-left hover:bg-white/5 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        activeTab === 'merchant'
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {activeTab === 'merchant' ? 'MERCHANT' : 'USER'}
                      </span>
                      <span className="text-slate-500 text-sm">{campaign.id}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{campaign.name}</h3>
                    <p className="text-slate-400 text-sm">{campaign.thesis}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-purple-400 font-bold">{campaign.budget}</p>
                      <p className="text-slate-500 text-xs">Budget</p>
                    </div>
                    {expandedCampaign === campaign.id ? (
                      <ChevronDown className="text-slate-400" size={24} />
                    ) : (
                      <ChevronRight className="text-slate-400" size={24} />
                    )}
                  </div>
                </div>
              </button>

              {/* Expanded Content */}
              {expandedCampaign === campaign.id && (
                <div className="px-6 pb-6 border-t border-white/10 pt-4 space-y-6">
                  {/* Channels */}
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Megaphone className="text-purple-400" size={16} />
                      Channels & Tactics
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {campaign.channels.map((ch, idx) => (
                        <div key={idx} className="bg-white/5 rounded-lg p-3">
                          <p className="text-white font-medium text-sm">{ch.channel}</p>
                          <p className="text-slate-400 text-xs mb-2">{ch.tactic}</p>
                          <p className="text-purple-400 text-xs font-semibold">{ch.budget}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Creative Assets */}
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Camera className="text-amber-400" size={16} />
                      Creative Assets Needed
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {campaign.creativeAssets.map((asset, idx) => (
                        <span key={idx} className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-sm">
                          {asset}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Messaging */}
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <MessageSquare className="text-green-400" size={16} />
                      Core Messaging
                    </h4>
                    <div className="bg-gradient-to-r from-green-500/10 to-transparent rounded-xl p-4 border border-green-500/20">
                      <div className="space-y-3">
                        <div>
                          <p className="text-green-400 text-xs font-semibold mb-1">HEADLINE</p>
                          <p className="text-white font-bold text-lg">{campaign.messaging.headline}</p>
                          <button
                            onClick={() => copyToClipboard(campaign.messaging.headline)}
                            className="text-slate-500 hover:text-green-400 mt-1"
                          >
                            <Copy size={14} />
                          </button>
                        </div>
                        <div>
                          <p className="text-green-400 text-xs font-semibold mb-1">BODY</p>
                          <p className="text-slate-300 text-sm">{campaign.messaging.body}</p>
                        </div>
                        <div>
                          <p className="text-green-400 text-xs font-semibold mb-1">CTA</p>
                          <p className="text-white font-medium">{campaign.messaging.cta}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* KPIs */}
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <BarChart3 className="text-blue-400" size={16} />
                      Success Metrics
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {campaign.kpis.map((kpi, idx) => (
                        <div key={idx} className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
                          <p className="text-slate-400 text-xs mb-1">{kpi.metric}</p>
                          <p className="text-blue-400 font-bold text-lg">{kpi.target}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <Clock className="text-slate-400" size={16} />
                      <span className="text-slate-400 text-sm">Timeline:</span>
                      <span className="text-white text-sm font-medium">{campaign.timeline}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0a1628]/95 backdrop-blur-xl border-t border-white/10 py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-slate-400 text-sm">Quick Links:</span>
            <Link href="/marketing-war-room" className="text-purple-400 text-sm hover:underline">
              Marketing War Room
            </Link>
            <Link href="/merchant-playbook" className="text-purple-400 text-sm hover:underline">
              All Playbooks
            </Link>
          </div>
          <div className="text-slate-500 text-xs">
            {currentCategory.name} • {campaigns.length} {activeTab} campaigns
          </div>
        </div>
      </div>
    </div>
  );
}
