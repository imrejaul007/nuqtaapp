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
  Sparkles,
  Globe,
  Coffee,
  Wallet,
  UserPlus,
  AlertTriangle,
  Pill,
  ShoppingCart,
  Gem,
  Cpu,
  Waves
} from 'lucide-react';

/**
 * CATEGORY-SPECIFIC CAMPAIGNS - PAIN POINT TARGETED
 *
 * Each category has campaigns specifically designed to address
 * the GCC-specific pain points identified in each playbook.
 */

interface Campaign {
  id: string;
  name: string;
  type: 'merchant' | 'user';
  painPointTargeted: string;
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
  painPoints: string[];
  merchantCampaigns: Campaign[];
  userCampaigns: Campaign[];
}

// =============================================================================
// ALL 15 CATEGORY CAMPAIGNS WITH PAIN POINT TARGETING
// =============================================================================

const allCategoryCampaigns: CategoryCampaigns[] = [
  // ===================== CAFE & RESTAURANT =====================
  {
    id: 'cafe',
    name: 'Cafe & Restaurant',
    icon: Utensils,
    color: 'orange',
    playbook: '/playbook-cafe',
    painPoints: [
      '68% of customers never return after first visit',
      'Talabat/Deliveroo take 30-35% commission',
      'High rent in malls - empty seats hurt',
      'Summer exodus - 30-40% revenue drop',
      'No customer data from cash/card payments'
    ],
    merchantCampaigns: [
      {
        id: 'cafe-m1',
        name: 'Kill the One-Timer Campaign',
        type: 'merchant',
        painPointTargeted: '68% of customers never return after first visit',
        thesis: 'Target cafes frustrated with one-time visitors who never come back',
        channels: [
          { channel: 'Feet on Street', tactic: 'Visit during 2-5pm slow hours', budget: 'AED 5K/week' },
          { channel: 'Instagram DM', tactic: 'DM cafes posting about slow days', budget: 'AED 1K' },
          { channel: 'F&B WhatsApp Groups', tactic: 'Share "68% stat" in owner groups', budget: 'AED 0' }
        ],
        creativeAssets: [
          '"68% Never Return" shocking stat visual',
          'Before/After repeat customer chart',
          'Coin reward customer journey video'
        ],
        messaging: {
          headline: '68% of Your Customers Will Never Come Back',
          body: 'They tried your coffee, loved it, and... forgot you exist. Nuqta coins create a pull-back effect. Customers come back to earn and redeem. Turn 1-timers into 2.5x repeat visitors.',
          cta: 'Let me show you how to fix this in 5 minutes'
        },
        kpis: [
          { metric: 'Cafes signed/week', target: '15+' },
          { metric: 'Repeat rate improvement', target: '+40%' },
          { metric: 'Cost per merchant', target: '< AED 200' }
        ],
        timeline: 'Ongoing evergreen',
        budget: 'AED 25,000/month'
      },
      {
        id: 'cafe-m2',
        name: 'Talabat Exodus Campaign',
        type: 'merchant',
        painPointTargeted: 'Talabat/Deliveroo take 30-35% commission',
        thesis: 'Target cafes bleeding money to delivery apps with a dine-in loyalty alternative',
        channels: [
          { channel: 'LinkedIn Ads', tactic: 'Target F&B owners/managers in UAE', budget: 'AED 10K' },
          { channel: 'Restaurant Trade Shows', tactic: 'Booth at Gulfood, Hotel Show', budget: 'AED 15K' },
          { channel: 'Direct Email', tactic: 'Email restaurants on Talabat with high ratings', budget: 'AED 2K' }
        ],
        creativeAssets: [
          '"Talabat 30% vs Nuqta 15%" split-screen',
          'Margin calculator: delivery vs dine-in',
          'Video: Restaurant owner testimonial'
        ],
        messaging: {
          headline: 'Talabat Takes 30%. AND Your Customer Data.',
          body: 'Build YOUR dine-in loyal base at half the cost. Nuqta brings customers to your door, not a delivery bike. 15-20% commission AND you own the relationship forever.',
          cta: 'See how much you could save'
        },
        kpis: [
          { metric: 'Leads from delivery-heavy restaurants', target: '50/week' },
          { metric: 'Conversion rate', target: '35%' },
          { metric: 'Avg restaurant monthly GMV', target: 'AED 30K+' }
        ],
        timeline: 'Ongoing',
        budget: 'AED 30,000/month'
      },
      {
        id: 'cafe-m3',
        name: 'Empty Seats Emergency',
        type: 'merchant',
        painPointTargeted: 'High rent in malls - empty seats hurt',
        thesis: 'Target mall cafes with 2-5pm and weekday dead zones',
        channels: [
          { channel: 'Mall Management Partnership', tactic: 'Get intro to mall F&B tenants', budget: 'AED 8K' },
          { channel: 'On-site visits', tactic: 'Visit during empty hours, show the problem', budget: 'AED 4K' },
          { channel: 'Case Study Email', tactic: 'Send success stories to mall outlets', budget: 'AED 1K' }
        ],
        creativeAssets: [
          'Empty cafe photo vs packed cafe photo',
          '"Rent AED 350/sqft but 50% empty" visual',
          'Double coins off-peak feature explainer'
        ],
        messaging: {
          headline: 'You Pay Rent 24/7. Your Tables Sit Empty 40%.',
          body: 'Mall rent is AED 350-500/sqft. Every empty seat is burning money. Nuqta fills your 2-5pm dead zone with double coin incentives. Pay only when seats fill.',
          cta: 'Fill your empty tables - demo in 10 minutes'
        },
        kpis: [
          { metric: 'Mall cafes signed', target: '20/month' },
          { metric: 'Off-peak traffic increase', target: '+45%' },
          { metric: 'Avg daily empty-hour fills', target: '15+ customers' }
        ],
        timeline: 'Focus on major malls, 4-week cycles',
        budget: 'AED 15,000/month'
      },
      {
        id: 'cafe-m4',
        name: 'Summer Survival Kit',
        type: 'merchant',
        painPointTargeted: 'Summer exodus - 30-40% revenue drop June-August',
        thesis: 'Sign cafes in April-May with summer survival package',
        channels: [
          { channel: 'Pre-Summer Outreach', tactic: 'Call/visit in April with "summer solution"', budget: 'AED 5K' },
          { channel: 'Email Campaign', tactic: '"Survive Summer" themed emails', budget: 'AED 2K' },
          { channel: 'Social Ads', tactic: 'Target F&B decision-makers April-May', budget: 'AED 8K' }
        ],
        creativeAssets: [
          '"Summer is Coming" Game of Thrones style visual',
          'Double coins June-Aug campaign preview',
          'Resident targeting feature showcase'
        ],
        messaging: {
          headline: 'Summer Kills 40% of Your Revenue. Not This Year.',
          body: 'Tourists leave. But 500K+ Nuqta users stay in UAE. We target residents with double coins in summer. Keep your tables full when everyone else is empty.',
          cta: 'Get your Summer Survival Kit now'
        },
        kpis: [
          { metric: 'Pre-summer signups (Apr-May)', target: '50' },
          { metric: 'Summer revenue retention', target: '75%+' },
          { metric: 'Resident customer increase', target: '+35%' }
        ],
        timeline: 'April - May push, June-Aug execution',
        budget: 'AED 18,000/season'
      }
    ],
    userCampaigns: [
      {
        id: 'cafe-u1',
        name: 'Coffee Hunters',
        type: 'user',
        painPointTargeted: 'Cafes need new customer discovery',
        thesis: 'Target specialty coffee enthusiasts to discover and earn at independent cafes',
        channels: [
          { channel: 'Instagram Reels', tactic: 'Hidden gems cafe discovery content', budget: 'AED 12K' },
          { channel: 'Food Bloggers', tactic: '15 micro-influencers with cafe content', budget: 'AED 20K' },
          { channel: 'TikTok', tactic: 'Cafe crawl challenge with coin rewards', budget: 'AED 10K' }
        ],
        creativeAssets: [
          '"Get Paid to Discover Cafes" hero video',
          'Top 20 Hidden Cafes in Dubai carousel',
          'Cafe crawl challenge rules'
        ],
        messaging: {
          headline: 'Get Paid to Discover Dubai\'s Best Cafes',
          body: 'Earn coins at 200+ cafes. Every latte, pastry, brunch = money back. Use coins anywhere. Join 500K+ smart coffee lovers.',
          cta: 'Download Nuqta - Coffee that pays back'
        },
        kpis: [
          { metric: 'App downloads/week', target: '5K' },
          { metric: 'First cafe transaction', target: '45%' },
          { metric: 'Avg transactions/user/month', target: '8+' }
        ],
        timeline: '8-week burst',
        budget: 'AED 45,000'
      },
      {
        id: 'cafe-u2',
        name: 'Office Lunch Revolution',
        type: 'user',
        painPointTargeted: 'Fill weekday lunch slow periods',
        thesis: 'Target office workers for daily lunch habit formation',
        channels: [
          { channel: 'LinkedIn Ads', tactic: 'Target by DIFC/Downtown office buildings', budget: 'AED 15K' },
          { channel: 'Corporate Partnerships', tactic: 'HR lunch benefit program', budget: 'AED 8K' },
          { channel: 'Office Building Screens', tactic: 'Digital ads in lobbies', budget: 'AED 10K' }
        ],
        creativeAssets: [
          '"Your Lunch Break Pays You Back" office creative',
          'Map of restaurants near major office towers',
          'Weekly streak rewards visual'
        ],
        messaging: {
          headline: 'Your Daily Lunch = Daily Rewards',
          body: 'You eat out anyway. Why not earn? 50+ restaurants near your office. Lunch streaks = bonus coins. Free meals by month end.',
          cta: 'Make every lunch count'
        },
        kpis: [
          { metric: 'Office worker signups', target: '600/week' },
          { metric: 'Weekly active rate', target: '65%' },
          { metric: 'Avg lunch transactions/week', target: '3+' }
        ],
        timeline: 'Ongoing with office rotation',
        budget: 'AED 35,000/month'
      }
    ]
  },

  // ===================== SALON & SPA =====================
  {
    id: 'salon',
    name: 'Salon & Spa',
    icon: Scissors,
    color: 'pink',
    playbook: '/playbook-salon',
    painPoints: [
      'Sunday-Tuesday empty chairs',
      'Last-minute cancellations and no-shows',
      'Staff leaves and takes clients',
      'Expensive Instagram ads with no ROI',
      'Monthly revenue unpredictability'
    ],
    merchantCampaigns: [
      {
        id: 'salon-m1',
        name: 'Empty Chair Emergency',
        type: 'merchant',
        painPointTargeted: 'Sunday-Tuesday empty chairs',
        thesis: 'Visit salons on slow days, show them the empty problem, offer the solution',
        channels: [
          { channel: 'Feet on Street', tactic: 'Visit Sun-Tue at 11am when chairs are empty', budget: 'AED 4K/week' },
          { channel: 'Fresha/Booksy Data', tactic: 'Target salons with booking platform gaps', budget: 'AED 1K' },
          { channel: 'Instagram DM', tactic: 'DM salons posting "available slots"', budget: 'AED 500' }
        ],
        creativeAssets: [
          '"Empty Chairs, Full Rent" visual',
          'Sun-Tue double coins feature showcase',
          'Booking calendar improvement comparison'
        ],
        messaging: {
          headline: 'You Pay Rent 7 Days. You Earn 4.',
          body: 'That\'s 43% waste. Your Sunday chairs are empty while competitors are booked. Nuqta sends beauty lovers on YOUR slow days with double coin incentives.',
          cta: 'Fill your empty chairs - 5 min setup'
        },
        kpis: [
          { metric: 'Salons signed/week', target: '12' },
          { metric: 'Sun-Tue booking increase', target: '+50%' },
          { metric: 'Cost per salon', target: '< AED 180' }
        ],
        timeline: 'Ongoing',
        budget: 'AED 22,000/month'
      },
      {
        id: 'salon-m2',
        name: 'No-Show Killer',
        type: 'merchant',
        painPointTargeted: 'Last-minute cancellations and no-shows',
        thesis: 'Position Nuqta as no-show reduction tool through reward incentives',
        channels: [
          { channel: 'LinkedIn Articles', tactic: '"How to Cut No-Shows by 60%"', budget: 'AED 3K' },
          { channel: 'Salon Owner Events', tactic: 'Sponsor beauty industry meetups', budget: 'AED 8K' },
          { channel: 'WhatsApp Groups', tactic: 'Share no-show stats in owner communities', budget: 'AED 0' }
        ],
        creativeAssets: [
          'No-show cost calculator',
          'Reward-for-showing-up feature demo',
          'Testimonial: "60% fewer no-shows"'
        ],
        messaging: {
          headline: 'Every No-Show Costs You AED 150+',
          body: 'Clients who earn coins SHOW UP. They lose coins if they no-show. Simple psychology. Our salons see 60% fewer cancellations.',
          cta: 'Stop losing money to no-shows'
        },
        kpis: [
          { metric: 'Inbound leads', target: '25/week' },
          { metric: 'No-show reduction', target: '55%+' },
          { metric: 'Avg salon revenue impact', target: '+AED 5K/month' }
        ],
        timeline: 'Ongoing content campaign',
        budget: 'AED 15,000/month'
      },
      {
        id: 'salon-m3',
        name: 'Staff-Proof Your Clients',
        type: 'merchant',
        painPointTargeted: 'Staff leaves and takes clients with them',
        thesis: 'Position Nuqta as client retention tool - loyalty to salon, not staff',
        channels: [
          { channel: 'Direct Outreach', tactic: 'Target salons with recent staff changes', budget: 'AED 3K' },
          { channel: 'Industry Events', tactic: 'Panel on "retaining clients when staff leaves"', budget: 'AED 10K' },
          { channel: 'Case Study Marketing', tactic: 'Success story: "80% clients stayed"', budget: 'AED 2K' }
        ],
        creativeAssets: [
          '"Your Stylist Left. Your Clients Stayed." headline',
          'Data ownership benefit explainer',
          'Client relationship flowchart'
        ],
        messaging: {
          headline: 'Your Best Stylist Quit. Did 50% of Clients Leave Too?',
          body: 'With Nuqta, clients are loyal to YOUR salon, not individual staff. You own the relationship. You own the data. Staff comes and goes. Clients stay.',
          cta: 'Staff-proof your client base'
        },
        kpis: [
          { metric: 'Salons signed after staff departure', target: '8/month' },
          { metric: 'Client retention post-staff-change', target: '80%+' },
          { metric: 'Avg salon size', target: '5+ chairs' }
        ],
        timeline: 'Reactive + proactive outreach',
        budget: 'AED 18,000/month'
      }
    ],
    userCampaigns: [
      {
        id: 'salon-u1',
        name: 'Beauty Rewards Launch',
        type: 'user',
        painPointTargeted: 'Drive salon discovery and repeat visits',
        thesis: 'Target beauty-conscious women 25-45 with monthly salon habits',
        channels: [
          { channel: 'Instagram Ads', tactic: 'Beauty/skincare interest targeting', budget: 'AED 18K' },
          { channel: 'Beauty Influencers', tactic: '20 micro-influencers salon content', budget: 'AED 25K' },
          { channel: 'TikTok GRWM', tactic: '"Get Ready With Me + Earn" videos', budget: 'AED 12K' }
        ],
        creativeAssets: [
          '"Your Glow-Up, Rewarded" hero campaign',
          'Salon discovery swipe feature',
          'Monthly beauty rewards tracker'
        ],
        messaging: {
          headline: 'Your Beauty Routine = Free Beauty',
          body: 'Mani, pedi, blowout, facial - earn coins on everything. 150+ salons in Dubai. Coins = free services. Your next treatment is on us.',
          cta: 'Download Nuqta - Beauty that pays back'
        },
        kpis: [
          { metric: 'Downloads from beauty interest', target: '4K/week' },
          { metric: 'First salon booking', target: '40%' },
          { metric: 'Monthly salon transactions', target: '2+' }
        ],
        timeline: '8-week launch campaign',
        budget: 'AED 60,000'
      },
      {
        id: 'salon-u2',
        name: 'Bridal Beauty Bonanza',
        type: 'user',
        painPointTargeted: 'High-value bridal bookings',
        thesis: 'Target brides-to-be for wedding prep journey',
        channels: [
          { channel: 'Wedding Platforms', tactic: 'Partner with Bridestory, Arabia Weddings', budget: 'AED 10K' },
          { channel: 'Bridal Shows', tactic: 'Booth at wedding exhibitions', budget: 'AED 15K' },
          { channel: 'Instagram Bridal', tactic: 'Target engaged women hashtags', budget: 'AED 12K' }
        ],
        creativeAssets: [
          '"Bridal Beauty Rewards" landing page',
          'Wedding prep timeline with earning moments',
          'Bridal party group rewards'
        ],
        messaging: {
          headline: 'Wedding Prep That Pays You Back',
          body: 'Trials, appointments, the big day - earn coins on everything. Invite your bridal party, they earn too. Use coins on honeymoon shopping!',
          cta: 'Start your bridal beauty rewards'
        },
        kpis: [
          { metric: 'Bridal signups/month', target: '250' },
          { metric: 'Avg pre-wedding transactions', target: '10+' },
          { metric: 'Bridal party referrals', target: '4+ per bride' }
        ],
        timeline: 'Wedding season focus (Oct-Apr)',
        budget: 'AED 40,000/season'
      }
    ]
  },

  // ===================== GYM & FITNESS =====================
  {
    id: 'gym',
    name: 'Gym & Fitness',
    icon: Dumbbell,
    color: 'green',
    playbook: '/playbook-gym',
    painPoints: [
      'January rush then 80% quit by March',
      'High membership churn after 3 months',
      'Empty group classes at 11am and 3pm',
      'Competition from boutique studios',
      'Expensive lead generation'
    ],
    merchantCampaigns: [
      {
        id: 'gym-m1',
        name: 'January Retention Rescue',
        type: 'merchant',
        painPointTargeted: 'January rush then 80% quit by March',
        thesis: 'Sign gyms in December to help retain the January wave',
        channels: [
          { channel: 'LinkedIn Campaign', tactic: 'Target gym owners Nov-Dec', budget: 'AED 12K' },
          { channel: 'Fitness Industry Events', tactic: 'Dubai Fitness Expo presence', budget: 'AED 18K' },
          { channel: 'Direct Outreach', tactic: 'Call 200+ gyms with "January solution"', budget: 'AED 5K' }
        ],
        creativeAssets: [
          '"January Sign-ups, March Ghost Town" stat visual',
          'Member retention rewards program',
          'Visit streak feature showcase'
        ],
        messaging: {
          headline: '80% of January Sign-ups Quit by March',
          body: 'They join motivated, then disappear. Nuqta keeps them coming. Members earn coins per visit. Streak goals create habit. More visits = less churn. You pay only on active members.',
          cta: 'Be ready for January - sign up now'
        },
        kpis: [
          { metric: 'Gyms signed by Dec 31', target: '60' },
          { metric: 'January member 90-day retention', target: '+30%' },
          { metric: 'Avg gym size', target: '400+ members' }
        ],
        timeline: 'Nov-Dec push, Jan-Mar measurement',
        budget: 'AED 40,000'
      },
      {
        id: 'gym-m2',
        name: 'Empty Class Fixer',
        type: 'merchant',
        painPointTargeted: 'Empty group classes at 11am and 3pm',
        thesis: 'Target studios with underbooked mid-day classes',
        channels: [
          { channel: 'ClassPass Analysis', tactic: 'Target studios already on ClassPass', budget: 'AED 4K' },
          { channel: 'Instagram DM', tactic: 'DM studios posting class schedules with gaps', budget: 'AED 2K' },
          { channel: 'Yoga/Pilates Events', tactic: 'Sponsor wellness community events', budget: 'AED 6K' }
        ],
        creativeAssets: [
          '"Your 11am Yoga: 2 People" visual',
          'Peak vs off-peak utilization chart',
          'Double coins off-peak feature'
        ],
        messaging: {
          headline: 'Your Morning Classes Are Packed. Your 11am Is Empty.',
          body: 'Same instructors, same studio, half the attendance. Nuqta fills your mid-day with double coin incentives. Freelancers, remote workers, moms - they\'re available. They just need a reason.',
          cta: 'Fill your empty mats'
        },
        kpis: [
          { metric: 'Studios signed/month', target: '25' },
          { metric: 'Off-peak class attendance', target: '+50%' },
          { metric: 'Cost per studio', target: '< AED 200' }
        ],
        timeline: 'Ongoing',
        budget: 'AED 15,000/month'
      },
      {
        id: 'gym-m3',
        name: 'Boutique Buster',
        type: 'merchant',
        painPointTargeted: 'Competition from boutique studios',
        thesis: 'Help traditional gyms compete with trendy boutiques',
        channels: [
          { channel: 'LinkedIn', tactic: 'Target multi-branch gym managers', budget: 'AED 8K' },
          { channel: 'Fitness Conferences', tactic: 'Panel on "Competing with Boutiques"', budget: 'AED 12K' },
          { channel: 'Case Study', tactic: '"How Fitness First Uses Rewards to Compete"', budget: 'AED 3K' }
        ],
        creativeAssets: [
          'Boutique vs traditional gym comparison',
          'Multi-outlet loyalty advantage',
          'Member experience enhancement'
        ],
        messaging: {
          headline: 'Boutique Studios Steal Your Members With "Experience"',
          body: 'You can\'t match their Instagram aesthetic. But you can match their loyalty. Nuqta rewards work across ALL your locations. Boutiques can\'t do that.',
          cta: 'Beat boutiques with better rewards'
        },
        kpis: [
          { metric: 'Multi-branch gyms signed', target: '5/month' },
          { metric: 'Member churn reduction', target: '25%' },
          { metric: 'Cross-location usage', target: '+15%' }
        ],
        timeline: 'Ongoing enterprise focus',
        budget: 'AED 25,000/month'
      }
    ],
    userCampaigns: [
      {
        id: 'gym-u1',
        name: 'Resolution Revolution',
        type: 'user',
        painPointTargeted: 'January motivation wave',
        thesis: 'Capture January resolution crowd with sustained motivation rewards',
        channels: [
          { channel: 'Instagram/TikTok', tactic: 'Transformation content + rewards', budget: 'AED 25K' },
          { channel: 'Fitness Influencers', tactic: '25 trainers/fitness accounts', budget: 'AED 30K' },
          { channel: 'Google Ads', tactic: '"Gym near me" keywords January', budget: 'AED 18K' }
        ],
        creativeAssets: [
          '"This Year, Your Workout Pays You" hero',
          '30-day streak challenge visual',
          'Gym visit rewards calculator'
        ],
        messaging: {
          headline: 'This Year, Your Workout Actually Pays You',
          body: 'Earn coins every gym visit. Hit streak goals, earn bonus. Use coins for protein, gear, or anything. 100+ gyms in Dubai. Make your resolution stick.',
          cta: 'Download Nuqta - Get paid to get fit'
        },
        kpis: [
          { metric: 'January downloads', target: '12K' },
          { metric: 'First gym check-in', target: '55%' },
          { metric: '30-day streak completion', target: '25%' }
        ],
        timeline: 'Jan 1 - Feb 28 burst',
        budget: 'AED 80,000'
      },
      {
        id: 'gym-u2',
        name: 'Corporate Wellness',
        type: 'user',
        painPointTargeted: 'B2B employee acquisition channel',
        thesis: 'Partner with HR departments for employee wellness benefit',
        channels: [
          { channel: 'LinkedIn B2B', tactic: 'Target HR managers at 500+ employee companies', budget: 'AED 10K' },
          { channel: 'HR Events', tactic: 'Sponsor wellness conferences', budget: 'AED 15K' },
          { channel: 'Company Lunch & Learns', tactic: 'On-site presentations', budget: 'AED 5K' }
        ],
        creativeAssets: [
          'Corporate wellness program deck',
          'Employee engagement dashboard',
          'Company challenge feature'
        ],
        messaging: {
          headline: 'Reward Your Employees for Being Healthy',
          body: 'Nuqta Corporate: Employees earn coins at gyms, healthy cafes. Track engagement. Boost morale. Reduce healthcare costs.',
          cta: 'Book a corporate wellness demo'
        },
        kpis: [
          { metric: 'Companies signed', target: '8/month' },
          { metric: 'Avg employees enrolled', target: '150+' },
          { metric: 'Employee activation rate', target: '45%' }
        ],
        timeline: 'Ongoing B2B',
        budget: 'AED 35,000/month'
      }
    ]
  },

  // ===================== HOTELS & HOSPITALITY =====================
  {
    id: 'hotel',
    name: 'Hotels & Hospitality',
    icon: Building2,
    color: 'blue',
    playbook: '/playbook-hotel',
    painPoints: [
      'OTAs take 15-25% commission on every booking',
      'F&B outlets 80% dependent on in-house guests',
      'Spa sits empty weekdays - 60% utilization only Fri-Sat',
      'Friday brunch - 100+ hotels fighting for same customers',
      'Entertainer trained guests to expect 50% off'
    ],
    merchantCampaigns: [
      {
        id: 'hotel-m1',
        name: 'F&B Liberation Campaign',
        type: 'merchant',
        painPointTargeted: 'F&B outlets 80% dependent on in-house guests',
        thesis: 'Sign hotel restaurants/bars to attract local walk-in traffic',
        channels: [
          { channel: 'LinkedIn', tactic: 'Target Hotel F&B Directors', budget: 'AED 12K' },
          { channel: 'Hotel Industry Events', tactic: 'AHIC, ATM presence', budget: 'AED 25K' },
          { channel: 'Referral Chain', tactic: 'One property refers sister hotels', budget: 'AED 5K' }
        ],
        creativeAssets: [
          '"Beyond Hotel Guests" pitch deck',
          'Local vs in-house revenue comparison',
          'Multi-outlet (restaurant+spa+bar) case study'
        ],
        messaging: {
          headline: '80% of Your Restaurant Revenue Is In-House. That\'s a Problem.',
          body: 'When occupancy drops, F&B dies. Nuqta brings 500K+ UAE residents to your restaurant. Not tourists, not guests - LOCALS who come back monthly.',
          cta: 'See how 5-star hotels drive local F&B traffic'
        },
        kpis: [
          { metric: 'Hotels signed/month', target: '8' },
          { metric: 'Outlets per hotel', target: '3+' },
          { metric: 'Local walk-in increase', target: '+30%' }
        ],
        timeline: 'Ongoing with seasonal pushes',
        budget: 'AED 45,000/month'
      },
      {
        id: 'hotel-m2',
        name: 'Spa Weekday Rescue',
        type: 'merchant',
        painPointTargeted: 'Spa sits empty weekdays - 60% utilization only Fri-Sat',
        thesis: 'Target hotel spas with weekday traffic solution',
        channels: [
          { channel: 'Direct Outreach', tactic: 'Call Spa Managers Tue-Wed', budget: 'AED 4K' },
          { channel: 'Wellness Events', tactic: 'Partner with Dubai Wellness Festival', budget: 'AED 12K' },
          { channel: 'Instagram', tactic: 'Target spa interests in UAE', budget: 'AED 8K' }
        ],
        creativeAssets: [
          '"60% Utilization Is 40% Waste" stat visual',
          'Double coins weekday spa feature',
          'Resident targeting showcase'
        ],
        messaging: {
          headline: 'Your Spa Is Packed Sat-Sun. And Empty Mon-Thu.',
          body: 'Same therapists, same rooms, 40% sitting idle. Nuqta sends residents mid-week with double coin rewards. Fill your empty treatment rooms.',
          cta: 'Fill your weekday spa slots'
        },
        kpis: [
          { metric: 'Hotel spas signed', target: '15/month' },
          { metric: 'Weekday bookings increase', target: '+45%' },
          { metric: 'Avg spa transaction', target: 'AED 450+' }
        ],
        timeline: 'Ongoing',
        budget: 'AED 28,000/month'
      },
      {
        id: 'hotel-m3',
        name: 'Friday Brunch Differentiator',
        type: 'merchant',
        painPointTargeted: 'Friday brunch - 100+ hotels fighting for same customers',
        thesis: 'Help hotels stand out in crowded Friday brunch market',
        channels: [
          { channel: 'Brunch Blogger Network', tactic: 'Connect hotels with food influencers', budget: 'AED 10K' },
          { channel: 'Direct Outreach', tactic: 'Visit F&B managers pre-season', budget: 'AED 5K' },
          { channel: 'Competitive Intel', tactic: 'Show competitor brunch landscape', budget: 'AED 2K' }
        ],
        creativeAssets: [
          '"100 Hotels, 1 Friday" competitive visual',
          'Brunch loyalty repeat data',
          'Repeat bruncher profile'
        ],
        messaging: {
          headline: '100 Hotels Fight for Friday Brunch. How Do You Stand Out?',
          body: 'Same prices, same spreads. Different: rewards. Nuqta guests earn coins, come back monthly. We track who your brunch regulars are.',
          cta: 'Differentiate your brunch with rewards'
        },
        kpis: [
          { metric: 'Brunch venues signed', target: '25' },
          { metric: 'Repeat brunch rate', target: '+35%' },
          { metric: 'Brunch GMV tracked', target: 'AED 800K/month' }
        ],
        timeline: 'Pre-season push (Sep-Oct), ongoing',
        budget: 'AED 20,000/month'
      },
      {
        id: 'hotel-m4',
        name: 'Entertainer Antidote',
        type: 'merchant',
        painPointTargeted: 'Entertainer trained guests to expect 50% off',
        thesis: 'Position Nuqta as rate-integrity-preserving alternative to discounting',
        channels: [
          { channel: 'LinkedIn Thought Leadership', tactic: '"Death of Discount Culture" articles', budget: 'AED 5K' },
          { channel: 'Revenue Manager Events', tactic: 'Panel on rate integrity', budget: 'AED 12K' },
          { channel: 'Email to RevManagers', tactic: 'Case study on pricing preservation', budget: 'AED 3K' }
        ],
        creativeAssets: [
          '"Discount vs Cashback" psychology explainer',
          'Rate integrity preservation case study',
          'Perceived value comparison chart'
        ],
        messaging: {
          headline: 'Entertainer Trained Guests to Expect 50% Off. You\'re Still Paying.',
          body: 'Discounts destroy rate integrity. Cashback doesn\'t. Guests pay full price, earn rewards. Your ADR stays intact. Break the discount addiction.',
          cta: 'Preserve your pricing with rewards'
        },
        kpis: [
          { metric: 'Premium hotels signed', target: '10/quarter' },
          { metric: 'ADR preservation', target: '100%' },
          { metric: 'Guest satisfaction increase', target: '+15%' }
        ],
        timeline: 'Ongoing premium positioning',
        budget: 'AED 22,000/month'
      }
    ],
    userCampaigns: [
      {
        id: 'hotel-u1',
        name: 'Staycation Rewards',
        type: 'user',
        painPointTargeted: 'Drive local F&B and spa traffic',
        thesis: 'Target UAE residents for hotel F&B and spa spending',
        channels: [
          { channel: 'Instagram/Facebook', tactic: '"Staycation UAE" interest targeting', budget: 'AED 18K' },
          { channel: 'Travel Influencers', tactic: 'Local lifestyle creators', budget: 'AED 25K' },
          { channel: 'Entertainer Alternatives', tactic: 'Target Entertainer app users', budget: 'AED 12K' }
        ],
        creativeAssets: [
          '"Staycation That Pays Back" campaign',
          'Hotel F&B discovery feature',
          'Spa + brunch rewards calculator'
        ],
        messaging: {
          headline: 'Your Staycation Just Got Rewarding',
          body: 'Earn coins at hotel restaurants, spas, bars. Every brunch, every treatment = rewards. Use coins anywhere in Dubai.',
          cta: 'Download Nuqta - Staycation rewards'
        },
        kpis: [
          { metric: 'Downloads/week', target: '3.5K' },
          { metric: 'Hotel F&B transactions', target: '35%' },
          { metric: 'Avg transaction value', target: 'AED 450+' }
        ],
        timeline: 'Ongoing with weekend pushes',
        budget: 'AED 60,000/month'
      },
      {
        id: 'hotel-u2',
        name: 'Summer Pool Escape',
        type: 'user',
        painPointTargeted: 'Pool/beach day pass revenue from residents',
        thesis: 'Drive local residents to hotel pools during summer',
        channels: [
          { channel: 'Summer Campaign', tactic: 'May-Sep "Beat the Heat" messaging', budget: 'AED 22K' },
          { channel: 'Family Targeting', tactic: 'Parents with kids content', budget: 'AED 15K' },
          { channel: 'Geo-targeting', tactic: 'Push notifications near hotels', budget: 'AED 8K' }
        ],
        creativeAssets: [
          '"Pool Day, Rewarded" summer hero',
          'Best hotel pools in Dubai map',
          'Day pass + F&B bundle rewards'
        ],
        messaging: {
          headline: 'Hotel Pool. No Hotel Price.',
          body: 'Day passes at 50+ hotel pools. Earn coins on pool access, lunch by the pool, sunset drinks. Perfect summer escape. Perfect rewards.',
          cta: 'Find a pool near you'
        },
        kpis: [
          { metric: 'Pool day transactions/week', target: '600' },
          { metric: 'F&B add-on rate', target: '75%' },
          { metric: 'Summer downloads', target: '10K' }
        ],
        timeline: 'May - September',
        budget: 'AED 50,000/season'
      }
    ]
  },

  // ===================== CAR SERVICES & AUTO =====================
  {
    id: 'auto',
    name: 'Car Services & Auto',
    icon: Car,
    color: 'slate',
    playbook: '/playbook-auto',
    painPoints: [
      '5,000+ car service outlets in Dubai - brutal competition',
      '60% of car wash customers are random - just pick closest',
      'Summer heat punishes cars but customers avoid coming',
      'Premium services (ceramic, PPF) sit underutilized',
      'Fleet/company cars have no loyalty - random choices'
    ],
    merchantCampaigns: [
      {
        id: 'auto-m1',
        name: 'Random to Regular',
        type: 'merchant',
        painPointTargeted: '60% of car wash customers are random - just pick closest',
        thesis: 'Target car washes with loyalty solution to convert randoms to regulars',
        channels: [
          { channel: 'Feet on Street', tactic: 'Visit Al Quoz, Ras Al Khor clusters', budget: 'AED 4K/week' },
          { channel: 'Gas Station Partners', tactic: 'Sign car washes at ENOC/ADNOC', budget: 'AED 5K' },
          { channel: 'WhatsApp Business', tactic: 'Message car wash owners directly', budget: 'AED 500' }
        ],
        creativeAssets: [
          '"60% Random = 0% Loyal" stat visual',
          'Coin rewards customer return chart',
          'Before/After repeat rate comparison'
        ],
        messaging: {
          headline: '60% of Your Customers Just Picked the Closest Option',
          body: 'Tomorrow they\'ll pick whoever\'s closest again. Maybe not you. Nuqta coins make them drive PAST competitors to reach you. Random → Regular in 30 days.',
          cta: 'Turn randoms into regulars - 5 min setup'
        },
        kpis: [
          { metric: 'Car washes signed/month', target: '40' },
          { metric: 'Repeat customer increase', target: '+45%' },
          { metric: 'Cost per merchant', target: '< AED 120' }
        ],
        timeline: 'Cluster-by-cluster rollout',
        budget: 'AED 20,000/month'
      },
      {
        id: 'auto-m2',
        name: 'Summer Car Care Push',
        type: 'merchant',
        painPointTargeted: 'Summer heat punishes cars but customers avoid coming',
        thesis: 'Pre-sign auto shops in April with summer survival package',
        channels: [
          { channel: 'Pre-Summer Outreach', tactic: 'April blitz to auto shops', budget: 'AED 6K' },
          { channel: 'AC Service Focus', tactic: 'Target AC repair specialists', budget: 'AED 4K' },
          { channel: 'Email Campaign', tactic: '"Summer is Coming" themed outreach', budget: 'AED 2K' }
        ],
        creativeAssets: [
          '"Summer Kills Cars. Revive Your Business" visual',
          'Double coins summer services feature',
          'AC service + tint promotion bundle'
        ],
        messaging: {
          headline: 'Summer Heat Punishes Cars. But Customers Won\'t Come.',
          body: 'Cars NEED service in summer. Owners just don\'t want to leave AC. Nuqta double coins June-Aug gives them a reason. Fill your bays when everyone else is empty.',
          cta: 'Prepare for summer - sign up now'
        },
        kpis: [
          { metric: 'Pre-summer signups (Apr-May)', target: '35' },
          { metric: 'Summer traffic retention', target: '80%' },
          { metric: 'AC service bookings', target: '+60%' }
        ],
        timeline: 'April-May push, June-Aug execution',
        budget: 'AED 15,000/season'
      },
      {
        id: 'auto-m3',
        name: 'Premium Upsell Engine',
        type: 'merchant',
        painPointTargeted: 'Premium services (ceramic, PPF) sit underutilized',
        thesis: 'Sign premium detailing shops with bonus coins on high-value services',
        channels: [
          { channel: 'Car Enthusiast Events', tactic: 'Sponsor car meets, Cars & Coffee', budget: 'AED 12K' },
          { channel: 'Instagram DM', tactic: 'Target premium auto detail accounts', budget: 'AED 3K' },
          { channel: 'Referral from Car Washes', tactic: 'Basic shops refer premium', budget: 'AED 2K' }
        ],
        creativeAssets: [
          '"Premium Service, Premium Rewards" visual',
          'Ceramic coating coin bonus explainer',
          'Car enthusiast persona marketing'
        ],
        messaging: {
          headline: 'Your AED 3,000 Ceramic Coating Jobs Are Rare. Make Them Common.',
          body: 'Customers want premium. They just need a push. Bonus coins on ceramic, PPF, full detailing incentivize the upgrade. Turn wash customers into detailing customers.',
          cta: 'Partner for premium auto rewards'
        },
        kpis: [
          { metric: 'Premium shops signed', target: '15/month' },
          { metric: 'Avg service value', target: 'AED 2,000+' },
          { metric: 'Upsell from basic to premium', target: '+30%' }
        ],
        timeline: 'Ongoing',
        budget: 'AED 20,000/month'
      },
      {
        id: 'auto-m4',
        name: 'Fleet Driver Loyalty',
        type: 'merchant',
        painPointTargeted: 'Fleet/company cars have no loyalty - random choices',
        thesis: 'Target auto shops near fleet hubs with driver reward program',
        channels: [
          { channel: 'Fleet Company Partnerships', tactic: 'Partner with fleet managers', budget: 'AED 8K' },
          { channel: 'Industrial Area Focus', tactic: 'Target shops near fleet depots', budget: 'AED 5K' },
          { channel: 'Driver App Promotion', tactic: 'Promote to delivery/ride-share drivers', budget: 'AED 4K' }
        ],
        creativeAssets: [
          '"Fleet Drivers Love Rewards" campaign',
          'Driver personal coin earnings',
          'Fleet manager dashboard preview'
        ],
        messaging: {
          headline: 'Fleet Drivers Pick Random. Make Them Pick You.',
          body: 'Company car, company card - driver doesn\'t care where. Unless THEY earn. Nuqta coins go to the driver. They\'ll drive past 10 competitors to reach you.',
          cta: 'Capture fleet driver loyalty'
        },
        kpis: [
          { metric: 'Shops near fleet hubs signed', target: '20' },
          { metric: 'Fleet driver regulars', target: '500+' },
          { metric: 'Fleet revenue increase', target: '+40%' }
        ],
        timeline: 'Ongoing industrial focus',
        budget: 'AED 20,000/month'
      }
    ],
    userCampaigns: [
      {
        id: 'auto-u1',
        name: 'Car Owner Rewards',
        type: 'user',
        painPointTargeted: 'Drive consistent auto service usage',
        thesis: 'Target car owners for all auto service needs',
        channels: [
          { channel: 'Fuel Station QR', tactic: 'QR codes at ENOC/ADNOC pumps', budget: 'AED 25K' },
          { channel: 'Car Forums', tactic: 'Dubizzle, car club Facebook groups', budget: 'AED 8K' },
          { channel: 'Insurance Partnerships', tactic: 'Renewal reminder + Nuqta promo', budget: 'AED 15K' }
        ],
        creativeAssets: [
          '"Your Car Costs Money. Now It Earns." hero',
          'Annual car service rewards calculator',
          'Service reminder + rewards feature'
        ],
        messaging: {
          headline: 'Your Car Costs AED 3,000/Year in Services. Get Some Back.',
          body: 'Car wash, oil change, tires, detailing - earn coins on everything. 200+ auto service partners. Make every service count.',
          cta: 'Download Nuqta - Rewards for drivers'
        },
        kpis: [
          { metric: 'Car owner signups/month', target: '6K' },
          { metric: 'First auto transaction', target: '50%' },
          { metric: 'Annual transactions per user', target: '18+' }
        ],
        timeline: 'Ongoing',
        budget: 'AED 55,000/month'
      },
      {
        id: 'auto-u2',
        name: 'Summer Car Prep',
        type: 'user',
        painPointTargeted: 'Drive summer service bookings',
        thesis: 'Push AC, tint, and protection services in summer',
        channels: [
          { channel: 'Push Notifications', tactic: 'Weather-triggered "AC check" pushes', budget: 'AED 5K' },
          { channel: 'Email Campaign', tactic: 'Summer car prep checklist', budget: 'AED 3K' },
          { channel: 'Social Ads', tactic: '"Summer-proof your car" content', budget: 'AED 12K' }
        ],
        creativeAssets: [
          '"Beat the Heat" summer campaign',
          'AC service urgency creative',
          'Tint + ceramic protection benefits'
        ],
        messaging: {
          headline: '48°C Outside. Is Your Car Ready?',
          body: 'AC service, ceramic coating, tint upgrade - protect your car AND earn rewards. Double coins on summer services all June-August.',
          cta: 'Get summer-ready and earn'
        },
        kpis: [
          { metric: 'Summer service transactions', target: '+55%' },
          { metric: 'AC service bookings', target: '1,200' },
          { metric: 'Campaign ROI', target: '6x' }
        ],
        timeline: 'June - August',
        budget: 'AED 25,000/season'
      }
    ]
  },

  // ===================== CLINICS & MEDICAL =====================
  {
    id: 'clinic',
    name: 'Clinics & Medical',
    icon: Heart,
    color: 'teal',
    playbook: '/playbook-clinic',
    painPoints: [
      'Patients don\'t complete full treatment plans',
      'Expensive patient acquisition (AED 200-500/patient)',
      'Competition from new clinics every month',
      'Insurance patients have zero loyalty',
      'Cash patients hard to retain'
    ],
    merchantCampaigns: [
      {
        id: 'clinic-m1',
        name: 'Treatment Completion Booster',
        type: 'merchant',
        painPointTargeted: 'Patients don\'t complete full treatment plans',
        thesis: 'Sign clinics with treatment plan completion rewards',
        channels: [
          { channel: 'LinkedIn', tactic: 'Target clinic owners/managers', budget: 'AED 10K' },
          { channel: 'Healthcare Events', tactic: 'Arab Health trade show presence', budget: 'AED 20K' },
          { channel: 'Referral from Salons', tactic: 'Beauty partners refer aesthetic clinics', budget: 'AED 3K' }
        ],
        creativeAssets: [
          '"6 Sessions Prescribed, 2 Completed" stat',
          'Treatment completion reward program',
          'Patient outcome improvement case study'
        ],
        messaging: {
          headline: 'Patients Need 6 Sessions. Most Do 2.',
          body: 'They skip. They forget. They quit. Nuqta rewards completing treatment plans. Patients earn MORE for finishing. Better outcomes, better retention, better business.',
          cta: 'Improve treatment completion rates'
        },
        kpis: [
          { metric: 'Clinics signed/month', target: '15' },
          { metric: 'Treatment completion rate', target: '+35%' },
          { metric: 'Patient LTV increase', target: '+50%' }
        ],
        timeline: 'Ongoing',
        budget: 'AED 35,000/month'
      },
      {
        id: 'clinic-m2',
        name: 'Cash Patient Loyalty',
        type: 'merchant',
        painPointTargeted: 'Cash patients hard to retain',
        thesis: 'Target clinics with high cash patient ratio for loyalty program',
        channels: [
          { channel: 'Direct Outreach', tactic: 'Call aesthetic/dental/derma clinics', budget: 'AED 5K' },
          { channel: 'Instagram DM', tactic: 'Target clinics posting cash-pay promos', budget: 'AED 2K' },
          { channel: 'Clinic Owner Events', tactic: 'Sponsor medical business forums', budget: 'AED 10K' }
        ],
        creativeAssets: [
          '"Cash Patients Shop Around" visual',
          'Loyalty vs discount comparison',
          'Patient retention calculator'
        ],
        messaging: {
          headline: 'Cash Patients Are Loyal to Price. Not You.',
          body: 'They compare. They shop. They leave. Unless they have coins. Nuqta creates emotional loyalty. They\'ll pay full price to earn and redeem their coins.',
          cta: 'Lock in your cash patients'
        },
        kpis: [
          { metric: 'Cash-heavy clinics signed', target: '12/month' },
          { metric: 'Cash patient retention', target: '+40%' },
          { metric: 'Avg patient annual spend', target: 'AED 3,500+' }
        ],
        timeline: 'Ongoing',
        budget: 'AED 20,000/month'
      }
    ],
    userCampaigns: [
      {
        id: 'clinic-u1',
        name: 'Wellness Rewards',
        type: 'user',
        painPointTargeted: 'Drive clinic discovery and visits',
        thesis: 'Target health-conscious users for preventive care and aesthetics',
        channels: [
          { channel: 'Instagram', tactic: 'Wellness/beauty/health targeting', budget: 'AED 15K' },
          { channel: 'Health Influencers', tactic: 'Wellness content creators', budget: 'AED 18K' },
          { channel: 'Corporate Wellness', tactic: 'HR partnerships for health benefits', budget: 'AED 10K' }
        ],
        creativeAssets: [
          '"Invest in Health, Earn Rewards" campaign',
          'Clinic discovery by specialty',
          'Treatment rewards tracker'
        ],
        messaging: {
          headline: 'Your Health Journey, Rewarded',
          body: 'Dental, derma, physio, aesthetics - earn coins on every visit. Healthy choices = money back. 100+ clinics in Dubai.',
          cta: 'Download Nuqta - Health that pays'
        },
        kpis: [
          { metric: 'Health-focused signups', target: '2.5K/month' },
          { metric: 'Clinic transactions', target: '45%' },
          { metric: 'Avg transaction value', target: 'AED 450' }
        ],
        timeline: 'Ongoing',
        budget: 'AED 48,000/month'
      }
    ]
  },

  // ===================== PET SERVICES =====================
  {
    id: 'pet',
    name: 'Pet Services',
    icon: PawPrint,
    color: 'amber',
    playbook: '/playbook-pet',
    painPoints: [
      'Pet owners shop on convenience, not loyalty',
      'Grooming every 4-6 weeks but clients forget',
      'Vet visits only when emergency - no prevention',
      'Pet stores compete with online (Amazon, Chewy)',
      'Seasonal pet boarding underutilized'
    ],
    merchantCampaigns: [
      {
        id: 'pet-m1',
        name: 'Grooming Reminder Machine',
        type: 'merchant',
        painPointTargeted: 'Grooming every 4-6 weeks but clients forget',
        thesis: 'Sign groomers with automated reminder + reward system',
        channels: [
          { channel: 'Feet on Street', tactic: 'Visit pet grooming clusters', budget: 'AED 3K/week' },
          { channel: 'Pet Expo Presence', tactic: 'Dubai Pet Show booth', budget: 'AED 10K' },
          { channel: 'Instagram DM', tactic: 'Target pet grooming accounts', budget: 'AED 1K' }
        ],
        creativeAssets: [
          '"They Forget. We Remind." feature demo',
          'Grooming cycle rewards visual',
          'Customer lifetime value calculator'
        ],
        messaging: {
          headline: 'Dogs Need Grooming Every 4 Weeks. Owners Remember Every 8.',
          body: 'They love their pets but forget appointments. Nuqta reminds AND rewards. Regular grooming = happy pets + predictable revenue.',
          cta: 'Never lose a grooming client again'
        },
        kpis: [
          { metric: 'Groomers signed', target: '25/month' },
          { metric: 'Grooming frequency increase', target: '+40%' },
          { metric: 'Client retention', target: '85%+' }
        ],
        timeline: 'Ongoing',
        budget: 'AED 18,000/month'
      },
      {
        id: 'pet-m2',
        name: 'Vet Prevention Push',
        type: 'merchant',
        painPointTargeted: 'Vet visits only when emergency - no prevention',
        thesis: 'Sign vets with preventive care reward program',
        channels: [
          { channel: 'Veterinary Association', tactic: 'Partner with Dubai Vet Association', budget: 'AED 8K' },
          { channel: 'Direct Outreach', tactic: 'Visit top-rated vet clinics', budget: 'AED 4K' },
          { channel: 'Pet Insurance Partners', tactic: 'Bundle with pet insurance', budget: 'AED 5K' }
        ],
        creativeAssets: [
          '"Prevent Now, Save Later" pet health visual',
          'Vaccination + checkup rewards calendar',
          'Pet wellness program overview'
        ],
        messaging: {
          headline: 'Pet Owners Only Visit When It\'s an Emergency',
          body: 'Prevention is cheaper for them, profitable for you. Nuqta rewards vaccinations, checkups, dental. Turn reactive visits into proactive relationships.',
          cta: 'Build a preventive care practice'
        },
        kpis: [
          { metric: 'Vet clinics signed', target: '12/month' },
          { metric: 'Preventive visits increase', target: '+50%' },
          { metric: 'Annual visit frequency', target: '4+' }
        ],
        timeline: 'Ongoing',
        budget: 'AED 20,000/month'
      }
    ],
    userCampaigns: [
      {
        id: 'pet-u1',
        name: 'Pet Parent Rewards',
        type: 'user',
        painPointTargeted: 'Drive pet service discovery and loyalty',
        thesis: 'Target pet owners for all pet care needs',
        channels: [
          { channel: 'Pet Instagram', tactic: 'Target pet parent accounts', budget: 'AED 12K' },
          { channel: 'Pet Influencers', tactic: 'Dog mom/cat mom content creators', budget: 'AED 15K' },
          { channel: 'Pet Store Partnerships', tactic: 'In-store QR promotion', budget: 'AED 8K' }
        ],
        creativeAssets: [
          '"Pamper Your Pet, Earn Rewards" campaign',
          'Pet service discovery feature',
          'Pet wellness tracker'
        ],
        messaging: {
          headline: 'Your Fur Baby Deserves Rewards Too',
          body: 'Grooming, vet, daycare, food - earn coins on everything for your pet. 80+ pet services in Dubai. Happy pet, happy wallet.',
          cta: 'Download Nuqta - Pet parent rewards'
        },
        kpis: [
          { metric: 'Pet owner signups', target: '1.5K/month' },
          { metric: 'First pet service transaction', target: '50%' },
          { metric: 'Monthly pet transactions', target: '2+' }
        ],
        timeline: 'Ongoing',
        budget: 'AED 40,000/month'
      }
    ]
  },

  // ===================== LAUNDRY & DRY CLEANING =====================
  {
    id: 'laundry',
    name: 'Laundry & Dry Cleaning',
    icon: Shirt,
    color: 'sky',
    playbook: '/playbook-laundry',
    painPoints: [
      'Customers choose whoever is closest',
      'App-based laundry (Washmen, Justclean) stealing customers',
      'Low margins - average ticket AED 50-80',
      'Seasonal demand spikes (Eid, weddings)',
      'Cash transactions dominate - no data'
    ],
    merchantCampaigns: [
      {
        id: 'laundry-m1',
        name: 'Beat the Apps',
        type: 'merchant',
        painPointTargeted: 'App-based laundry stealing customers',
        thesis: 'Help traditional laundries compete with tech-enabled competitors',
        channels: [
          { channel: 'Feet on Street', tactic: 'Visit laundries in residential areas', budget: 'AED 3K/week' },
          { channel: 'WhatsApp Business', tactic: 'Message laundry owner groups', budget: 'AED 500' },
          { channel: 'Building Partnership', tactic: 'Partner with building management', budget: 'AED 2K' }
        ],
        creativeAssets: [
          '"Washmen Takes 30%. You Give 5%." comparison',
          'Local laundry loyalty advantage',
          'QR-based digital transformation'
        ],
        messaging: {
          headline: 'Apps Are Stealing Your Customers. Fight Back.',
          body: 'Washmen, Justclean - convenience + rewards. Now YOU can offer rewards too. Nuqta gives you the tech without the app development cost.',
          cta: 'Compete with laundry apps - 5 min setup'
        },
        kpis: [
          { metric: 'Laundries signed/month', target: '35' },
          { metric: 'Repeat customer rate', target: '+40%' },
          { metric: 'App competitor loss reduction', target: '50%' }
        ],
        timeline: 'Neighborhood-by-neighborhood',
        budget: 'AED 15,000/month'
      }
    ],
    userCampaigns: [
      {
        id: 'laundry-u1',
        name: 'Laundry Loyalty',
        type: 'user',
        painPointTargeted: 'Create habitual laundry behavior',
        thesis: 'Target professionals who use laundry services weekly',
        channels: [
          { channel: 'Residential Targeting', tactic: 'Geo-target apartment communities', budget: 'AED 10K' },
          { channel: 'Corporate Email', tactic: 'Partner with HR for employee perks', budget: 'AED 5K' },
          { channel: 'Building Partnerships', tactic: 'QR codes in apartment lobbies', budget: 'AED 8K' }
        ],
        creativeAssets: [
          '"Weekly Laundry, Weekly Rewards" visual',
          'Neighborhood laundry finder',
          'Monthly laundry savings calculator'
        ],
        messaging: {
          headline: 'You Do Laundry Every Week. Why Not Earn?',
          body: 'Dry cleaning, wash & fold, alterations - earn coins on all of it. Your local laundry, now with rewards. AED 50 in savings every month.',
          cta: 'Download Nuqta - Laundry rewards'
        },
        kpis: [
          { metric: 'Signups from residential', target: '2K/month' },
          { metric: 'Weekly laundry users', target: '35%' },
          { metric: 'Avg monthly transactions', target: '4+' }
        ],
        timeline: 'Ongoing',
        budget: 'AED 25,000/month'
      }
    ]
  },

  // ===================== SUPERMARKET =====================
  {
    id: 'supermarket',
    name: 'Supermarket',
    icon: ShoppingCart,
    color: 'emerald',
    playbook: '/playbook-supermarket',
    painPoints: [
      'Carrefour/Lulu loyalty programs dominate',
      'Online grocery (Noon, Amazon Fresh) growing fast',
      'Thin margins - 15-20% on groceries',
      'Price-sensitive customers with zero loyalty',
      'Hypermarket promotions undercut independent stores'
    ],
    merchantCampaigns: [
      {
        id: 'supermarket-m1',
        name: 'Independent Survival',
        type: 'merchant',
        painPointTargeted: 'Carrefour/Lulu loyalty programs dominate',
        thesis: 'Help independent grocers compete with chain loyalty programs',
        channels: [
          { channel: 'Feet on Street', tactic: 'Visit independent supermarkets', budget: 'AED 4K/week' },
          { channel: 'Grocery Association', tactic: 'Partner with grocery trade groups', budget: 'AED 8K' },
          { channel: 'WhatsApp Groups', tactic: 'Grocery owner community outreach', budget: 'AED 500' }
        ],
        creativeAssets: [
          '"Carrefour Has Points. You Can Too." visual',
          'Independent store loyalty advantage',
          'Customer data ownership benefit'
        ],
        messaging: {
          headline: 'Carrefour Has Loyalty Points. You Don\'t. Until Now.',
          body: 'Chains win on loyalty programs. Level the playing field. Nuqta rewards work for ANY size store. Your customers earn coins just like at Carrefour.',
          cta: 'Compete with the chains'
        },
        kpis: [
          { metric: 'Independent stores signed', target: '20/month' },
          { metric: 'Customer retention', target: '+30%' },
          { metric: 'Avg basket size', target: '+15%' }
        ],
        timeline: 'Ongoing',
        budget: 'AED 18,000/month'
      }
    ],
    userCampaigns: [
      {
        id: 'supermarket-u1',
        name: 'Grocery Rewards',
        type: 'user',
        painPointTargeted: 'Drive grocery shopping habits',
        thesis: 'Target families for regular grocery rewards',
        channels: [
          { channel: 'Family Facebook Groups', tactic: 'Dubai parent communities', budget: 'AED 10K' },
          { channel: 'Residential Geo-targeting', tactic: 'Target family neighborhoods', budget: 'AED 12K' },
          { channel: 'WhatsApp', tactic: 'Grocery deals WhatsApp broadcasts', budget: 'AED 3K' }
        ],
        creativeAssets: [
          '"Groceries You Need, Rewards You Want" visual',
          'Weekly grocery rewards calculator',
          'Neighborhood store finder'
        ],
        messaging: {
          headline: 'You Buy Groceries Every Week. Earn Every Week.',
          body: 'Your neighborhood supermarket now gives rewards. Earn coins on every trip. Use coins anywhere. Shopping just got smarter.',
          cta: 'Download Nuqta - Grocery rewards'
        },
        kpis: [
          { metric: 'Family signups', target: '3K/month' },
          { metric: 'Weekly grocery transactions', target: '2+' },
          { metric: 'Avg basket with Nuqta', target: 'AED 180+' }
        ],
        timeline: 'Ongoing',
        budget: 'AED 28,000/month'
      }
    ]
  },

  // ===================== GOLD & JEWELRY =====================
  {
    id: 'gold',
    name: 'Gold & Jewelry',
    icon: Gem,
    color: 'yellow',
    playbook: '/playbook-gold',
    painPoints: [
      'Customers buy on price - compare 10 shops',
      'Big purchases but one-time (wedding, Eid)',
      'Tourist dependence - locals buy less often',
      'Online gold (Dubai Gold, apps) growing',
      'Trust issues with new shops'
    ],
    merchantCampaigns: [
      {
        id: 'gold-m1',
        name: 'Beyond the Wedding',
        type: 'merchant',
        painPointTargeted: 'Big purchases but one-time (wedding, Eid)',
        thesis: 'Sign gold shops with year-round small purchase strategy',
        channels: [
          { channel: 'Gold Souk Visits', tactic: 'Visit Deira/Meena Bazaar shops', budget: 'AED 5K' },
          { channel: 'Jewelers Association', tactic: 'Partner with Dubai Gold Group', budget: 'AED 15K' },
          { channel: 'Mall Jewelry Stores', tactic: 'Target mall-based jewelers', budget: 'AED 8K' }
        ],
        creativeAssets: [
          '"Beyond Wedding Season" strategy deck',
          'Small purchase rewards program',
          'Gold accumulation savings plan'
        ],
        messaging: {
          headline: 'Wedding Season Ends. Your Revenue Shouldn\'t.',
          body: 'Big buys are rare. Small buys can be regular. Nuqta rewards turn occasional customers into monthly visitors. Gold savings, coin by coin.',
          cta: 'Build year-round gold loyalty'
        },
        kpis: [
          { metric: 'Gold shops signed', target: '15/month' },
          { metric: 'Non-wedding season sales', target: '+35%' },
          { metric: 'Repeat customer rate', target: '+50%' }
        ],
        timeline: 'Ongoing with seasonal pushes',
        budget: 'AED 30,000/month'
      }
    ],
    userCampaigns: [
      {
        id: 'gold-u1',
        name: 'Gold Accumulator',
        type: 'user',
        painPointTargeted: 'Drive regular gold purchases',
        thesis: 'Target gold investors with savings-style rewards',
        channels: [
          { channel: 'Gold Investment Groups', tactic: 'Facebook/WhatsApp gold investor communities', budget: 'AED 12K' },
          { channel: 'Financial Influencers', tactic: 'Investment content creators', budget: 'AED 15K' },
          { channel: 'Wedding Planning', tactic: 'Partner with wedding platforms', budget: 'AED 10K' }
        ],
        creativeAssets: [
          '"Smart Gold Buying" campaign',
          'Gold rewards accumulation tracker',
          'Wedding prep gold savings plan'
        ],
        messaging: {
          headline: 'Build Your Gold Collection, One Reward at a Time',
          body: 'Every purchase earns coins. Coins become gold credit. The smart way to accumulate gold. 50+ trusted jewelers in Dubai.',
          cta: 'Download Nuqta - Gold rewards'
        },
        kpis: [
          { metric: 'Gold investor signups', target: '1K/month' },
          { metric: 'Avg gold transaction', target: 'AED 3,500+' },
          { metric: 'Annual purchases per user', target: '3+' }
        ],
        timeline: 'Ongoing with Eid/Diwali spikes',
        budget: 'AED 40,000/month'
      }
    ]
  },

  // ===================== ELECTRONICS =====================
  {
    id: 'electronics',
    name: 'Electronics',
    icon: Cpu,
    color: 'cyan',
    playbook: '/playbook-electronics',
    painPoints: [
      'Amazon/Noon undercutting on price',
      'Customers compare prices on 5 apps before buying',
      'Big purchases but infrequent',
      'After-sales service underutilized',
      'Trade-in programs not driving traffic'
    ],
    merchantCampaigns: [
      {
        id: 'electronics-m1',
        name: 'Beat Amazon Experience',
        type: 'merchant',
        painPointTargeted: 'Amazon/Noon undercutting on price',
        thesis: 'Position rewards as experience differentiation from online',
        channels: [
          { channel: 'Mall Electronics Stores', tactic: 'Visit Sharaf DG, Jumbo, Virgin', budget: 'AED 8K' },
          { channel: 'Electronics Trade Shows', tactic: 'GITEX Shopper presence', budget: 'AED 20K' },
          { channel: 'LinkedIn', tactic: 'Target electronics retail managers', budget: 'AED 5K' }
        ],
        creativeAssets: [
          '"Amazon Has Price. You Have Experience + Rewards." visual',
          'In-store vs online comparison',
          'Service + rewards bundle strategy'
        ],
        messaging: {
          headline: 'Amazon Wins on Price. Win on Everything Else.',
          body: 'You can\'t always match online prices. But you CAN offer: in-person service + instant pickup + rewards. Combined, you win.',
          cta: 'Add rewards to your arsenal'
        },
        kpis: [
          { metric: 'Electronics stores signed', target: '12/month' },
          { metric: 'Online price-match requests', target: '-20%' },
          { metric: 'Service attachment rate', target: '+25%' }
        ],
        timeline: 'Ongoing',
        budget: 'AED 35,000/month'
      }
    ],
    userCampaigns: [
      {
        id: 'electronics-u1',
        name: 'Tech Rewards',
        type: 'user',
        painPointTargeted: 'Drive electronics purchase behavior',
        thesis: 'Target tech enthusiasts for electronics shopping',
        channels: [
          { channel: 'Tech Forums', tactic: 'Reddit, Discord tech communities', budget: 'AED 8K' },
          { channel: 'Tech YouTubers', tactic: 'UAE tech review channels', budget: 'AED 18K' },
          { channel: 'GITEX Shopper', tactic: 'Event-based signups', budget: 'AED 15K' }
        ],
        creativeAssets: [
          '"Tech Upgrades, Rewarded" campaign',
          'Electronics purchase rewards calculator',
          'Trade-in + rewards combo offer'
        ],
        messaging: {
          headline: 'Your Next Gadget Comes With Rewards',
          body: 'Phone, laptop, TV, accessories - earn coins on everything. Use coins on your next upgrade. The smart tech buyer\'s app.',
          cta: 'Download Nuqta - Tech rewards'
        },
        kpis: [
          { metric: 'Tech enthusiast signups', target: '2K/month' },
          { metric: 'Electronics transaction rate', target: '35%' },
          { metric: 'Avg transaction value', target: 'AED 1,800+' }
        ],
        timeline: 'Ongoing with GITEX spike',
        budget: 'AED 45,000/month'
      }
    ]
  },

  // ===================== PHARMACY =====================
  {
    id: 'pharmacy',
    name: 'Pharmacy',
    icon: Pill,
    color: 'red',
    playbook: '/playbook-pharmacy',
    painPoints: [
      'Online pharmacies (Life, Amazon) growing fast',
      'Low margins on medications',
      'Insurance patients have zero loyalty',
      'Customers choose nearest pharmacy',
      'OTC/wellness products underutilized'
    ],
    merchantCampaigns: [
      {
        id: 'pharmacy-m1',
        name: 'Wellness Upsell Engine',
        type: 'merchant',
        painPointTargeted: 'OTC/wellness products underutilized',
        thesis: 'Sign pharmacies with focus on OTC and wellness margins',
        channels: [
          { channel: 'Pharmacy Visits', tactic: 'Visit independent pharmacies', budget: 'AED 4K/week' },
          { channel: 'Pharmacist Association', tactic: 'Partner with pharmacy groups', budget: 'AED 10K' },
          { channel: 'WhatsApp', tactic: 'Pharmacy owner communities', budget: 'AED 500' }
        ],
        creativeAssets: [
          '"Prescriptions Pay Bills. Wellness Builds Profit." visual',
          'OTC rewards strategy deck',
          'Wellness product upsell training'
        ],
        messaging: {
          headline: 'Prescription Margins Are Thin. Wellness Margins Aren\'t.',
          body: 'Vitamins, skincare, baby products - higher margins, no insurance hassle. Nuqta drives customers to YOUR high-margin products with bonus rewards.',
          cta: 'Boost your wellness sales'
        },
        kpis: [
          { metric: 'Pharmacies signed', target: '25/month' },
          { metric: 'OTC/wellness sales increase', target: '+40%' },
          { metric: 'Avg basket size', target: '+25%' }
        ],
        timeline: 'Ongoing',
        budget: 'AED 18,000/month'
      }
    ],
    userCampaigns: [
      {
        id: 'pharmacy-u1',
        name: 'Health & Wellness Rewards',
        type: 'user',
        painPointTargeted: 'Drive pharmacy loyalty',
        thesis: 'Target health-conscious users for pharmacy rewards',
        channels: [
          { channel: 'Health Apps', tactic: 'Partner with fitness/health tracking apps', budget: 'AED 10K' },
          { channel: 'Parent Communities', tactic: 'Baby/family health targeting', budget: 'AED 12K' },
          { channel: 'Pharmacy QR', tactic: 'In-store promotion at partner pharmacies', budget: 'AED 5K' }
        ],
        creativeAssets: [
          '"Your Health, Rewarded" campaign',
          'Pharmacy discovery by specialty',
          'Monthly health savings calculator'
        ],
        messaging: {
          headline: 'Vitamins, Baby Products, Skincare - Earn on It All',
          body: 'You visit the pharmacy monthly anyway. Now earn coins on everything. Prescriptions, OTC, wellness - all rewarded.',
          cta: 'Download Nuqta - Pharmacy rewards'
        },
        kpis: [
          { metric: 'Health-focused signups', target: '2.5K/month' },
          { metric: 'Monthly pharmacy visits', target: '2+' },
          { metric: 'Avg basket with Nuqta', target: 'AED 120+' }
        ],
        timeline: 'Ongoing',
        budget: 'AED 30,000/month'
      }
    ]
  },

  // ===================== FASHION & RETAIL =====================
  {
    id: 'fashion',
    name: 'Fashion & Retail',
    icon: ShoppingBag,
    color: 'purple',
    playbook: '/playbook-fashion',
    painPoints: [
      'Mall chains dominate with loyalty programs',
      'Online fashion (Namshi, Ounass) growing',
      'Seasonal stock sitting unsold',
      'Customers compare prices across stores',
      'Independent boutiques lack discovery'
    ],
    merchantCampaigns: [
      {
        id: 'fashion-m1',
        name: 'Boutique Discovery Network',
        type: 'merchant',
        painPointTargeted: 'Independent boutiques lack discovery',
        thesis: 'Sign independent boutiques with discovery + loyalty solution',
        channels: [
          { channel: 'Boutique Visits', tactic: 'Visit Jumeirah, DIFC, Alserkal boutiques', budget: 'AED 5K' },
          { channel: 'Fashion Events', tactic: 'Fashion Forward Dubai presence', budget: 'AED 15K' },
          { channel: 'Instagram DM', tactic: 'Target boutique accounts with low engagement', budget: 'AED 2K' }
        ],
        creativeAssets: [
          '"Mall Chains Have Loyalty. Now You Do Too." visual',
          'Boutique discovery feature showcase',
          'Independent retailer success stories'
        ],
        messaging: {
          headline: 'Zara Has Points. H&M Has Points. You Don\'t. Until Now.',
          body: 'Chains win on loyalty and discovery. Level the playing field. Nuqta brings fashion lovers to YOUR boutique AND rewards them for shopping.',
          cta: 'Join the boutique rewards network'
        },
        kpis: [
          { metric: 'Boutiques signed/month', target: '20' },
          { metric: 'New customer discovery', target: '+40%' },
          { metric: 'Repeat purchase rate', target: '+35%' }
        ],
        timeline: 'Ongoing with fashion week spikes',
        budget: 'AED 25,000/month'
      }
    ],
    userCampaigns: [
      {
        id: 'fashion-u1',
        name: 'Style Rewards',
        type: 'user',
        painPointTargeted: 'Drive boutique shopping',
        thesis: 'Target fashion-conscious shoppers for boutique discovery',
        channels: [
          { channel: 'Instagram Reels', tactic: 'OOTD content with boutique tags', budget: 'AED 18K' },
          { channel: 'Fashion Influencers', tactic: '20 style micro-influencers', budget: 'AED 25K' },
          { channel: 'Pinterest', tactic: 'Style inspiration + shop links', budget: 'AED 8K' }
        ],
        creativeAssets: [
          '"Shop Local, Earn Global" campaign',
          'Boutique discovery swipe feature',
          'Fashion rewards tracker'
        ],
        messaging: {
          headline: 'Discover Hidden Fashion Gems. Earn While You Shop.',
          body: 'Skip the mall. Find unique pieces at 100+ boutiques. Earn coins on every purchase. Express your style, get rewarded.',
          cta: 'Download Nuqta - Fashion rewards'
        },
        kpis: [
          { metric: 'Fashion signups', target: '3.5K/month' },
          { metric: 'Boutique transactions', target: '40%' },
          { metric: 'Avg basket', target: 'AED 380' }
        ],
        timeline: 'Ongoing with DSF/DSS spikes',
        budget: 'AED 55,000/month'
      }
    ]
  },

  // ===================== ENTERTAINMENT =====================
  {
    id: 'entertainment',
    name: 'Entertainment',
    icon: Film,
    color: 'fuchsia',
    playbook: '/playbook-entertainment',
    painPoints: [
      'Weekday and off-peak hours empty',
      'Competition from home entertainment (Netflix)',
      'Group bookings but no repeat',
      'Family entertainment one-time visits',
      'Birthday party revenue underutilized'
    ],
    merchantCampaigns: [
      {
        id: 'entertainment-m1',
        name: 'Off-Peak Filler',
        type: 'merchant',
        painPointTargeted: 'Weekday and off-peak hours empty',
        thesis: 'Sign entertainment venues with off-peak traffic solution',
        channels: [
          { channel: 'Entertainment Hub Visits', tactic: 'Visit Dubai Mall, MOE, City Centre entertainment', budget: 'AED 6K' },
          { channel: 'Family Event Sponsors', tactic: 'Partner at family expos', budget: 'AED 12K' },
          { channel: 'Tourism Partnerships', tactic: 'Connect with DMCs', budget: 'AED 8K' }
        ],
        creativeAssets: [
          '"Weekends Packed. Weekdays Empty." visual',
          'Double coins off-peak feature',
          'Family entertainment bundle rewards'
        ],
        messaging: {
          headline: 'Your Weekend Is Booked. Your Tuesday Is Empty.',
          body: 'Same bowling lanes, same escape rooms, 50% utilization. Nuqta double coins bring families on weekdays. Freelancers, homeschoolers, shift workers - they\'re available.',
          cta: 'Fill your off-peak slots'
        },
        kpis: [
          { metric: 'Entertainment venues signed', target: '15/month' },
          { metric: 'Weekday traffic increase', target: '+50%' },
          { metric: 'Family repeat rate', target: '+40%' }
        ],
        timeline: 'Ongoing',
        budget: 'AED 30,000/month'
      }
    ],
    userCampaigns: [
      {
        id: 'entertainment-u1',
        name: 'Family Fun Rewards',
        type: 'user',
        painPointTargeted: 'Drive family entertainment repeat visits',
        thesis: 'Target parents for weekend family activities',
        channels: [
          { channel: 'Parent Facebook Groups', tactic: 'Dubai parenting communities', budget: 'AED 10K' },
          { channel: 'Family Influencers', tactic: 'Mom/dad bloggers with kids content', budget: 'AED 18K' },
          { channel: 'School Partnerships', tactic: 'Flyers in school bags', budget: 'AED 6K' }
        ],
        creativeAssets: [
          '"Weekend Plans, Rewarded" campaign',
          'Family activity discovery feature',
          'Kids activity rewards tracker'
        ],
        messaging: {
          headline: 'Family Fun Should Pay You Back',
          body: 'Movies, bowling, play areas, escape rooms - earn coins on everything. Average family spends AED 500/weekend. Now earn on every outing.',
          cta: 'Download Nuqta - Family rewards'
        },
        kpis: [
          { metric: 'Parent signups', target: '4K/month' },
          { metric: 'Weekend transactions', target: '3+ per family' },
          { metric: 'Avg weekend spend', target: 'AED 450' }
        ],
        timeline: 'Ongoing',
        budget: 'AED 38,000/month'
      }
    ]
  },

  // ===================== EVENTS & EXHIBITIONS =====================
  {
    id: 'events',
    name: 'Events & Exhibitions',
    icon: PartyPopper,
    color: 'violet',
    playbook: '/events-playbook',
    painPoints: [
      '70% of visitors just browse - don\'t buy',
      'Merchants don\'t renew if no ROI',
      'No spending data to prove value',
      'One-time visitors - no retargeting',
      'Peak hour chaos - no traffic distribution'
    ],
    merchantCampaigns: [
      {
        id: 'events-m1',
        name: 'Organizer Partnership',
        type: 'merchant',
        painPointTargeted: '70% of visitors just browse - don\'t buy',
        thesis: 'Sign event organizers with browser-to-buyer conversion',
        channels: [
          { channel: 'LinkedIn', tactic: 'Target event organizers, exhibition directors', budget: 'AED 12K' },
          { channel: 'Industry Events', tactic: 'ATM, GITEX pre-event networking', budget: 'AED 20K' },
          { channel: 'DWTC Partnership', tactic: 'Official partner for venue events', budget: 'AED 25K' }
        ],
        creativeAssets: [
          '"70% Browse. 0% Buy." problem visual',
          'Event organizer ROI calculator',
          'Merchant renewal improvement data'
        ],
        messaging: {
          headline: '70% of Event Visitors Just Browse. Your Merchants Suffer.',
          body: 'Give visitors coins they can only use on AED 500+ purchases. Browsers become buyers. Merchants make money. Merchants renew. Everyone wins.',
          cta: 'Partner for your next event'
        },
        kpis: [
          { metric: 'Events signed/quarter', target: '6' },
          { metric: 'Visitor conversion rate', target: '35%' },
          { metric: 'Merchant renewal increase', target: '+40%' }
        ],
        timeline: 'Rolling 6-month pipeline',
        budget: 'AED 60,000/quarter'
      },
      {
        id: 'events-m2',
        name: 'Exhibitor Pre-Sell',
        type: 'merchant',
        painPointTargeted: 'Merchants don\'t renew if no ROI',
        thesis: 'Sign exhibitors before events with ROI guarantee positioning',
        channels: [
          { channel: 'Exhibitor Email Lists', tactic: 'Partner with organizers for access', budget: 'AED 5K' },
          { channel: 'Pre-Event Webinars', tactic: '"Maximize Your Booth ROI" sessions', budget: 'AED 4K' },
          { channel: 'On-Site BD', tactic: 'Walk the floor Day 1', budget: 'AED 12K' }
        ],
        creativeAssets: [
          '"Your Booth Cost AED 50K. Make It Back." visual',
          'Exhibitor lead capture feature',
          'ROI tracking dashboard preview'
        ],
        messaging: {
          headline: 'Your Booth Cost AED 50K. Are You Getting Real Leads?',
          body: 'Business cards in a bowl = zero follow-up. Nuqta captures real leads with purchase intent. Visitors have to engage to unlock their coins.',
          cta: 'Get guaranteed booth ROI'
        },
        kpis: [
          { metric: 'Exhibitors signed/event', target: '35%' },
          { metric: 'Avg booth spend tracked', target: 'AED 600K' },
          { metric: 'Lead capture rate', target: '+60%' }
        ],
        timeline: '4 weeks before each event',
        budget: 'AED 25,000/event'
      }
    ],
    userCampaigns: [
      {
        id: 'events-u1',
        name: 'Event Coins Blast',
        type: 'user',
        painPointTargeted: 'Drive app downloads and spending at events',
        thesis: 'On-site user acquisition with event-specific coins',
        channels: [
          { channel: 'On-Site Booth', tactic: 'High-visibility entrance booth', budget: 'AED 30K' },
          { channel: 'Event Social Takeover', tactic: 'Sponsored posts on event pages', budget: 'AED 12K' },
          { channel: 'QR Everywhere', tactic: 'QR on maps, bags, badges', budget: 'AED 10K' }
        ],
        creativeAssets: [
          '"AED 100 Free at [Event]" hero creative',
          'Event merchant map highlight',
          'Coin expiry countdown urgency'
        ],
        messaging: {
          headline: 'You Got AED 100 Free at [Event Name]',
          body: 'Spend AED 500 at any merchant and your coins unlock. 50+ merchants inside. Coins expire when event ends. Use it or lose it!',
          cta: 'Scan to get your Event Coins'
        },
        kpis: [
          { metric: 'Downloads per event', target: '12K' },
          { metric: 'Coin unlock rate', target: '40%' },
          { metric: 'GMV per event', target: 'AED 4M+' }
        ],
        timeline: 'During each partnered event',
        budget: 'AED 55,000/event'
      },
      {
        id: 'events-u2',
        name: 'Existing User Activation',
        type: 'user',
        painPointTargeted: 'Leverage 500K+ existing user base',
        thesis: 'Push existing Nuqta users to partnered events',
        channels: [
          { channel: 'Push Notifications', tactic: '"Your coins work at [Event]" pushes', budget: 'AED 3K' },
          { channel: 'Email Campaign', tactic: 'Event preview with merchant lineup', budget: 'AED 2K' },
          { channel: 'In-App Banners', tactic: 'Event promotion in discovery tab', budget: 'AED 0' }
        ],
        creativeAssets: [
          'Event preview email template',
          'Push with coin balance reminder',
          'Merchant lineup showcase'
        ],
        messaging: {
          headline: 'Your Nuqta Coins Work at [Event Name] This Weekend',
          body: 'You have coins. They work at this event. 50+ merchants. Special event bonuses. Don\'t miss out.',
          cta: 'See what you can buy at [Event]'
        },
        kpis: [
          { metric: 'Existing users at event', target: '6K' },
          { metric: 'Avg spend per existing user', target: 'AED 450' },
          { metric: 'Push open rate', target: '18%' }
        ],
        timeline: '1 week before each event',
        budget: 'AED 8,000/event'
      }
    ]
  }
];

// =============================================================================
// PAGE COMPONENT
// =============================================================================

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

  const currentCategory = allCategoryCampaigns.find(c => c.id === selectedCategory) || allCategoryCampaigns[0];
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
              Pain Point <span className="text-purple-400">Campaigns</span>
            </h1>
            <p className="text-slate-400">Merchant + User acquisition campaigns targeting specific category pain points</p>
          </div>
        </div>
      </div>

      {/* Category Selector */}
      <div className="max-w-6xl mx-auto px-4 mb-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {allCategoryCampaigns.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-purple-500 text-white'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              <cat.icon size={14} />
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Category Header */}
      <div className="max-w-6xl mx-auto px-4 mb-6">
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center">
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

          {/* Pain Points */}
          <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
            <h4 className="text-red-400 font-semibold mb-2 flex items-center gap-2">
              <AlertTriangle size={16} />
              Key Pain Points Targeted
            </h4>
            <div className="flex flex-wrap gap-2">
              {currentCategory.painPoints.map((pain, idx) => (
                <span key={idx} className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs">
                  {pain}
                </span>
              ))}
            </div>
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

                    {/* Pain Point Badge */}
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="text-red-400" size={14} />
                      <span className="text-red-400 text-sm font-medium">Targets: {campaign.painPointTargeted}</span>
                    </div>

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
              War Room
            </Link>
            <Link href="/merchant-playbook" className="text-purple-400 text-sm hover:underline">
              Playbooks
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
