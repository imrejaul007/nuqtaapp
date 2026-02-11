'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
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
  Shirt as ShirtIcon,
  ShoppingCart,
  Gem,
  Smartphone,
  Pill,
  ShoppingBag,
  Gamepad2,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// Campaign interface
interface Campaign {
  id: string;
  name: string;
  type: 'merchant' | 'user';
  painPoint: string;
  nuqtaSolution: string;
  thesis: string;
  channels: { channel: string; tactic: string; budget: string }[];
  creativeAssets: string[];
  messaging: { headline: string; body: string; cta: string };
  kpis: { metric: string; target: string }[];
  timeline: string;
  budget: string;
}

interface CategoryData {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  painPoints: { pain: string; solution: string }[];
  merchantCampaigns: Campaign[];
  userCampaigns: Campaign[];
}

// CAFE & RESTAURANT CAMPAIGNS - 10 Pain Points = 20 Campaigns
const cafeCampaigns: CategoryData = {
  id: 'cafe',
  name: 'Cafe & Restaurant',
  icon: Coffee,
  color: 'orange',
  painPoints: [
    { pain: '68% of customers never return after first visit', solution: 'Coins create pull-back effect - 2.5x repeat customers' },
    { pain: 'Instagram/TikTok influencers cost AED 500-5,000 per post', solution: 'Pay only 15-20% on actual sales' },
    { pain: 'Talabat/Deliveroo take 30-35% commission', solution: 'Build direct dine-in loyalty at 15-20%' },
    { pain: 'High rent in malls (AED 350-500/sqft)', solution: 'Fill empty seats with 500K+ Nuqta users' },
    { pain: 'Expat population turnover every 2-3 years', solution: 'Continuous new customer acquisition from Nuqta base' },
    { pain: 'Summer exodus - 30-40% revenue drop June-August', solution: 'Double coins campaigns keep traffic coming' },
    { pain: 'Ramadan timing - unpredictable iftar traffic', solution: 'Iftar targeting with special Ramadan coin bonuses' },
    { pain: 'Competition from hotel F&B and Friday brunches', solution: 'Differentiate with rewards hotels cannot match' },
    { pain: 'Staff turnover - 6-month average tenure', solution: 'YOU own customer data, relationships stay with cafe' },
    { pain: 'No customer data from cash/card payments', solution: 'QR scan captures everything - even from cash' }
  ],
  merchantCampaigns: [
    {
      id: 'cafe-m1',
      name: 'The 68% Recovery Campaign',
      type: 'merchant',
      painPoint: '68% of customers never return after first visit',
      nuqtaSolution: 'Coins create pull-back effect - customers come back to earn/redeem',
      thesis: 'Target cafes bleeding customers to competition. Show them how Nuqta coins create a psychological pull-back effect that turns one-time visitors into loyal regulars.',
      channels: [
        { channel: 'LinkedIn', tactic: 'Target F&B owners/managers with case studies showing 2.5x repeat rate', budget: 'AED 2,000' },
        { channel: 'WhatsApp', tactic: 'Direct outreach to cafe owners with retention stats', budget: 'AED 500' },
        { channel: 'In-person', tactic: 'Mall visits during slow hours to pitch managers', budget: 'AED 1,000' }
      ],
      creativeAssets: ['Before/After retention infographic', 'Video testimonial from existing cafe partner', 'ROI calculator showing revenue from repeat visits'],
      messaging: {
        headline: '68% of Your Customers Will Never Come Back. Unless...',
        body: 'Every day, 7 out of 10 customers walk out your door and never return. They try the new cafe down the street. Nuqta coins change that equation - customers who earn coins come back 2.5x more often.',
        cta: 'See How [Partner Cafe] Increased Repeat Visits by 150%'
      },
      kpis: [
        { metric: 'Cafes contacted', target: '50/week' },
        { metric: 'Demo meetings booked', target: '10/week' },
        { metric: 'Signed partners', target: '3/week' }
      ],
      timeline: 'Ongoing - Weekly targets',
      budget: 'AED 3,500/week'
    },
    {
      id: 'cafe-m2',
      name: 'Kill the Influencer Gamble',
      type: 'merchant',
      painPoint: 'Instagram/TikTok influencers cost AED 500-5,000 per post with no guaranteed ROI',
      nuqtaSolution: 'Pay only 15-20% on actual sales - zero upfront cost',
      thesis: 'Position Nuqta as the anti-influencer solution. No gambling on posts, no upfront costs - only pay when customers actually spend.',
      channels: [
        { channel: 'Instagram', tactic: 'Carousel showing influencer cost vs Nuqta cost comparison', budget: 'AED 1,500' },
        { channel: 'Email', tactic: 'Campaign to cafes who post about influencer visits', budget: 'AED 300' },
        { channel: 'Cold calling', tactic: 'Target cafes with high Instagram following but low reviews', budget: 'AED 500' }
      ],
      creativeAssets: ['Cost comparison calculator', 'Influencer post vs Nuqta ROI breakdown', 'Case study: AED 5,000 influencer vs AED 5,000 in Nuqta sales'],
      messaging: {
        headline: 'Stop Paying AED 5,000 for Instagram Posts That Bring Zero Sales',
        body: 'That influencer charged you AED 5,000. Got 10,000 likes. But how many actually came to your cafe? With Nuqta, you pay 15-20% ONLY when customers spend. Zero upfront. Zero gamble.',
        cta: 'Calculate Your Real Influencer ROI vs Nuqta'
      },
      kpis: [
        { metric: 'Influencer-heavy cafes contacted', target: '30/week' },
        { metric: 'Cost comparison demos', target: '8/week' },
        { metric: 'Conversions', target: '2/week' }
      ],
      timeline: '6-week campaign',
      budget: 'AED 2,300/week'
    },
    {
      id: 'cafe-m3',
      name: 'Escape the Aggregator Trap',
      type: 'merchant',
      painPoint: 'Talabat/Deliveroo take 30-35% commission AND own your customer data',
      nuqtaSolution: 'Build direct dine-in loyalty at 15-20% - you own the customer',
      thesis: 'Target cafes heavily dependent on delivery apps. Show them how dine-in loyalty through Nuqta costs half and builds THEIR customer database.',
      channels: [
        { channel: 'LinkedIn', tactic: 'Target restaurant owners complaining about aggregator fees', budget: 'AED 1,500' },
        { channel: 'WhatsApp Groups', tactic: 'F&B owner communities with commission comparison', budget: 'AED 300' },
        { channel: 'Trade Shows', tactic: 'Booth at F&B industry events', budget: 'AED 3,000' }
      ],
      creativeAssets: ['30% vs 15% commission visual', 'Data ownership comparison chart', 'Monthly savings calculator'],
      messaging: {
        headline: 'Talabat Takes 35% AND Your Customer Data. There Is Another Way.',
        body: 'Every delivery order costs you 30-35% AND you never see that customer again - Talabat owns them. Nuqta dine-in loyalty is 15-20%, and YOU own every customer who walks through your door.',
        cta: 'Own Your Customers, Not Talabat'
      },
      kpis: [
        { metric: 'Aggregator-dependent cafes identified', target: '40/week' },
        { metric: 'Meetings booked', target: '8/week' },
        { metric: 'Partners signed', target: '2/week' }
      ],
      timeline: 'Ongoing quarterly campaign',
      budget: 'AED 4,800/week'
    },
    {
      id: 'cafe-m4',
      name: 'Fill Empty Mall Seats',
      type: 'merchant',
      painPoint: 'High rent in malls (AED 350-500/sqft) means every empty seat hurts',
      nuqtaSolution: 'Fill empty seats with 500K+ Nuqta users discovering cafes daily',
      thesis: 'Target mall-based cafes bleeding money on rent. Position Nuqta as foot traffic generator that fills seats during slow periods.',
      channels: [
        { channel: 'Mall walk-ins', tactic: 'Visit mall cafes during slow hours (2-5pm weekdays)', budget: 'AED 1,000' },
        { channel: 'Email', tactic: 'Target mall F&B tenants with occupancy solutions', budget: 'AED 400' },
        { channel: 'Property manager partnerships', tactic: 'Partner with mall management for tenant referrals', budget: 'AED 2,000' }
      ],
      creativeAssets: ['Empty seats = lost revenue calculator', 'Peak vs off-peak traffic distribution chart', 'Mall cafe success story'],
      messaging: {
        headline: 'You Pay AED 400/sqft Whether Those Seats Are Full or Empty',
        body: 'Mall rent is AED 350-500 per square foot. Every empty chair is money bleeding. 500K+ Nuqta users are looking for their next coffee spot. Push notifications can fill those chairs in minutes.',
        cta: 'Turn Empty Seats Into Revenue'
      },
      kpis: [
        { metric: 'Mall cafes visited', target: '20/week' },
        { metric: 'Occupancy rate discussions', target: '10/week' },
        { metric: 'Partners signed', target: '2/week' }
      ],
      timeline: 'Ongoing - Focus on major malls',
      budget: 'AED 3,400/week'
    },
    {
      id: 'cafe-m5',
      name: 'Beat the Expat Exodus',
      type: 'merchant',
      painPoint: 'Expat population turnover - customers leave UAE every 2-3 years',
      nuqtaSolution: 'Continuous new customer acquisition - constant flow from Nuqta user base',
      thesis: 'Address the constant customer churn from expat departures. Position Nuqta as continuous acquisition engine that replaces leaving customers automatically.',
      channels: [
        { channel: 'LinkedIn', tactic: 'Content about expat turnover impact on F&B', budget: 'AED 1,200' },
        { channel: 'Industry events', tactic: 'Speak at F&B forums about customer retention challenges', budget: 'AED 2,000' },
        { channel: 'Email sequence', tactic: 'Educational content about the expat turnover problem', budget: 'AED 300' }
      ],
      creativeAssets: ['Expat departure impact infographic', 'Customer lifetime value by tenure', 'Acquisition funnel animation'],
      messaging: {
        headline: 'Every Month, 10% of Your Regulars Leave Dubai Forever',
        body: 'The expat cycle means constant customer churn. Your best customer today might be in London next month. Nuqta\'s 500K+ user base means new customers discover you daily - replacing every departure.',
        cta: 'Stop Losing Customers to the Airport'
      },
      kpis: [
        { metric: 'Content engagement', target: '5,000 views/week' },
        { metric: 'Inbound inquiries', target: '5/week' },
        { metric: 'Partners signed', target: '1/week' }
      ],
      timeline: '8-week awareness campaign',
      budget: 'AED 3,500/week'
    },
    {
      id: 'cafe-m6',
      name: 'Summer Survival Kit',
      type: 'merchant',
      painPoint: 'Summer exodus - 30-40% revenue drop June-August',
      nuqtaSolution: 'Double coins campaigns - residents who stay get extra incentive',
      thesis: 'Target cafes before summer slump. Offer Nuqta as summer survival strategy with double coin campaigns to maintain traffic.',
      channels: [
        { channel: 'Direct sales', tactic: 'Pre-summer outreach in April-May', budget: 'AED 1,500' },
        { channel: 'Email', tactic: 'Summer survival playbook to F&B database', budget: 'AED 400' },
        { channel: 'WhatsApp', tactic: 'Urgent messaging about summer prep', budget: 'AED 300' }
      ],
      creativeAssets: ['Summer revenue drop chart', 'Double coins campaign examples', 'Summer survival case study'],
      messaging: {
        headline: 'Summer 2024: Will You Lose 40% of Revenue Again?',
        body: 'June hits. Residents flee to Europe. Revenue drops 30-40%. This year can be different. Nuqta double coin campaigns keep the remaining residents coming to YOUR cafe, not the competition.',
        cta: 'Get Your Summer Survival Plan Now'
      },
      kpis: [
        { metric: 'Pre-summer signups', target: '15 cafes by May' },
        { metric: 'Summer campaign activations', target: '12 cafes' },
        { metric: 'Summer revenue retention', target: '20% improvement' }
      ],
      timeline: 'April-May campaign for June-August execution',
      budget: 'AED 2,200/week'
    },
    {
      id: 'cafe-m7',
      name: 'Ramadan Revenue Rescue',
      type: 'merchant',
      painPoint: 'Ramadan timing - operational challenges, unpredictable iftar traffic',
      nuqtaSolution: 'Iftar targeting - push notifications during iftar hours, special coin bonuses',
      thesis: 'Position Nuqta as Ramadan operations optimizer. Target cafes struggling with Ramadan timing and offer iftar-specific campaigns.',
      channels: [
        { channel: 'Pre-Ramadan outreach', tactic: 'Contact cafes 4-6 weeks before Ramadan', budget: 'AED 1,500' },
        { channel: 'WhatsApp', tactic: 'Ramadan prep checklist and Nuqta solution', budget: 'AED 400' },
        { channel: 'Industry groups', tactic: 'Ramadan F&B strategy content', budget: 'AED 600' }
      ],
      creativeAssets: ['Ramadan traffic pattern analysis', 'Iftar rush hour heat map', 'Suhoor opportunity guide'],
      messaging: {
        headline: 'Ramadan Traffic Is Chaos. Unless You Can Predict It.',
        body: 'Iftar rush, suhoor crowds, dead afternoons. Ramadan F&B is unpredictable. Nuqta push notifications let you target hungry users at exactly the right moment - driving traffic when you need it.',
        cta: 'Control Your Ramadan Traffic'
      },
      kpis: [
        { metric: 'Ramadan partners', target: '20 cafes' },
        { metric: 'Iftar campaigns launched', target: '15' },
        { metric: 'Ramadan revenue lift', target: '25%' }
      ],
      timeline: 'Pre-Ramadan (4 weeks before) through Eid',
      budget: 'AED 2,500/week during Ramadan'
    },
    {
      id: 'cafe-m8',
      name: 'Beat Hotel Brunches',
      type: 'merchant',
      painPoint: 'Competition from hotel F&B - hotels offer Friday brunches with entertainment',
      nuqtaSolution: 'Differentiate with rewards - hotels cannot match coin earning',
      thesis: 'Target independent cafes losing weekend traffic to hotel brunches. Position coin rewards as unique differentiator hotels cannot replicate.',
      channels: [
        { channel: 'Direct sales', tactic: 'Target cafes near major hotels', budget: 'AED 1,200' },
        { channel: 'Social media', tactic: 'Brunch alternative content campaign', budget: 'AED 800' },
        { channel: 'Email', tactic: 'Hotel competition analysis to cafe owners', budget: 'AED 300' }
      ],
      creativeAssets: ['Hotel brunch vs cafe comparison', 'Rewards advantage infographic', 'Weekend traffic recovery case study'],
      messaging: {
        headline: 'Hotels Steal Your Weekend Customers. Here\'s How to Steal Them Back.',
        body: 'Friday brunch at the hotel? AED 300+, crowded, same old. Your cafe offers better vibes - now add coin rewards hotels CAN\'T match. Create loyalty beyond the experience.',
        cta: 'Win Back Your Weekend Crowd'
      },
      kpis: [
        { metric: 'Hotel-adjacent cafes contacted', target: '25/month' },
        { metric: 'Weekend campaign activations', target: '10' },
        { metric: 'Weekend traffic increase', target: '30%' }
      ],
      timeline: 'Ongoing weekend focus',
      budget: 'AED 2,300/week'
    },
    {
      id: 'cafe-m9',
      name: 'Own Your Customer Data',
      type: 'merchant',
      painPoint: 'Staff turnover - 6-month average tenure means losing customer relationships',
      nuqtaSolution: 'YOU own customer data - relationships stay with the cafe, not staff',
      thesis: 'Address the staff turnover crisis. Position Nuqta as the solution that keeps customer relationships with the business, not departing employees.',
      channels: [
        { channel: 'LinkedIn', tactic: 'Content about staff turnover impact', budget: 'AED 1,000' },
        { channel: 'HR forums', tactic: 'Hospitality HR group outreach', budget: 'AED 500' },
        { channel: 'Direct sales', tactic: 'Target cafes with frequent staff changes', budget: 'AED 800' }
      ],
      creativeAssets: ['Staff turnover cost calculator', 'Customer data ownership diagram', 'Relationship retention framework'],
      messaging: {
        headline: 'When Your Best Barista Leaves, Do Your Regulars Follow?',
        body: 'Staff turnover in F&B: 6 months average. Every departure risks losing customers who knew them by name. With Nuqta, YOU own the customer database. Staff leave, relationships stay.',
        cta: 'Keep Your Customers When Staff Leave'
      },
      kpis: [
        { metric: 'High-turnover cafes identified', target: '30/month' },
        { metric: 'Data ownership demos', target: '10/month' },
        { metric: 'Partners signed', target: '3/month' }
      ],
      timeline: 'Ongoing quarterly campaign',
      budget: 'AED 2,300/week'
    },
    {
      id: 'cafe-m10',
      name: 'From Anonymous to Known',
      type: 'merchant',
      painPoint: 'No customer data from cash/card payments - cannot retarget or personalize',
      nuqtaSolution: 'QR scan captures everything - know who visits, when, spending patterns',
      thesis: 'Target cafes frustrated by lack of customer data. Position Nuqta as the solution that turns every transaction into a data point.',
      channels: [
        { channel: 'Tech-focused content', tactic: 'Data-driven cafe management articles', budget: 'AED 1,200' },
        { channel: 'Direct sales', tactic: 'Demo the customer analytics dashboard', budget: 'AED 1,000' },
        { channel: 'Webinars', tactic: 'Customer data workshop for cafe owners', budget: 'AED 800' }
      ],
      creativeAssets: ['Anonymous vs known customer visual', 'Data dashboard walkthrough video', 'Personalization ROI calculator'],
      messaging: {
        headline: '500 Customers Visited Today. How Many Can You Name?',
        body: 'Cash, card, tap - all anonymous. You have no idea who visits, when, or what they like. Nuqta QR scans turn every visitor into a known customer. Build your database from every transaction.',
        cta: 'Know Your Customers'
      },
      kpis: [
        { metric: 'Data dashboard demos', target: '15/month' },
        { metric: 'Analytics feature adoption', target: '80% of partners' },
        { metric: 'Retargeting campaigns launched', target: '10/month' }
      ],
      timeline: 'Ongoing - feature-focused campaign',
      budget: 'AED 3,000/week'
    }
  ],
  userCampaigns: [
    {
      id: 'cafe-u1',
      name: 'Your Favorite Cafe Rewards You Back',
      type: 'user',
      painPoint: '68% of customers never return after first visit',
      nuqtaSolution: 'Coins create pull-back effect - rewards waiting means you come back',
      thesis: 'Target users who cafe-hop without loyalty. Show them the value of earning coins at consistent locations.',
      channels: [
        { channel: 'Instagram', tactic: 'Reels showing coin accumulation at favorite spots', budget: 'AED 2,000' },
        { channel: 'Push notifications', tactic: 'Remind users of unclaimed coins at cafes', budget: 'AED 500' },
        { channel: 'In-app', tactic: 'Streak bonuses for consistent visits', budget: 'AED 300' }
      ],
      creativeAssets: ['Coin balance growth animation', 'Streak reward visuals', 'Regular customer benefits carousel'],
      messaging: {
        headline: 'Stop Cafe Hopping. Start Coin Collecting.',
        body: 'Trying a new cafe every week? Cool. But you\'re leaving rewards on the table. Find YOUR spot on Nuqta, earn coins every visit, and watch your rewards stack up.',
        cta: 'Find Your Regular Spot'
      },
      kpis: [
        { metric: 'Repeat cafe visits', target: '40% increase' },
        { metric: 'Streak activations', target: '10,000 users' },
        { metric: 'Average visits per cafe', target: '3.5 per user' }
      ],
      timeline: 'Ongoing engagement campaign',
      budget: 'AED 2,800/week'
    },
    {
      id: 'cafe-u2',
      name: 'Dine-In Pays Better',
      type: 'user',
      painPoint: 'Users paying high delivery fees on aggregator apps',
      nuqtaSolution: 'Earn coins on dine-in - delivery apps give you nothing',
      thesis: 'Convert delivery-heavy users to dine-in by showing the rewards advantage of visiting cafes directly.',
      channels: [
        { channel: 'Instagram', tactic: 'Delivery fee vs coin earnings comparison', budget: 'AED 1,500' },
        { channel: 'Push notifications', tactic: 'Rainy day? Still worth visiting for coins', budget: 'AED 400' },
        { channel: 'TikTok', tactic: 'Dine-in lifestyle content', budget: 'AED 1,200' }
      ],
      creativeAssets: ['Delivery fee calculator', 'Coin earnings vs delivery costs', 'Dine-in experience reel'],
      messaging: {
        headline: 'That AED 15 Delivery Fee Could Be AED 15 in Coins',
        body: 'Ordering in? Paying delivery + service fee + tip. Walking in? Getting coins on every dirham you spend. Dine-in rewards you. Delivery costs you.',
        cta: 'Earn Instead of Pay'
      },
      kpis: [
        { metric: 'Dine-in transaction increase', target: '25%' },
        { metric: 'First-time dine-in users', target: '5,000/month' },
        { metric: 'Delivery to dine-in converts', target: '15%' }
      ],
      timeline: '8-week conversion campaign',
      budget: 'AED 3,100/week'
    },
    {
      id: 'cafe-u3',
      name: 'Summer Stays Rewarded',
      type: 'user',
      painPoint: 'Limited cafe options during summer exodus',
      nuqtaSolution: 'Double coins during summer - rewards for those who stay',
      thesis: 'Target users staying in UAE during summer. Offer bonus rewards as incentive to keep visiting cafes.',
      channels: [
        { channel: 'Push notifications', tactic: 'Summer double coin announcements', budget: 'AED 800' },
        { channel: 'Email', tactic: 'Summer rewards newsletter', budget: 'AED 300' },
        { channel: 'Instagram', tactic: 'Summer staycation cafe crawl content', budget: 'AED 1,500' }
      ],
      creativeAssets: ['Double coin summer badge', 'Staycation cafe guide', 'Summer rewards tracker'],
      messaging: {
        headline: 'Staying for Summer? We\'re Doubling Your Rewards',
        body: 'Everyone\'s in Europe. You\'re here. We see you. This summer, every cafe visit earns DOUBLE coins. Staycation just got way more rewarding.',
        cta: 'Claim Your Double Coins'
      },
      kpis: [
        { metric: 'Summer active users', target: '80% retention' },
        { metric: 'Double coin redemptions', target: '20,000' },
        { metric: 'Summer cafe visits', target: '30% above baseline' }
      ],
      timeline: 'June-August campaign',
      budget: 'AED 2,600/week'
    },
    {
      id: 'cafe-u4',
      name: 'Ramadan Iftar Finder',
      type: 'user',
      painPoint: 'Finding good iftar spots during Ramadan rush',
      nuqtaSolution: 'Nuqta guides you to the best iftar deals with coin rewards',
      thesis: 'Position Nuqta as the Ramadan iftar companion - helping users find great spots and earn rewards.',
      channels: [
        { channel: 'Push notifications', tactic: 'Daily iftar recommendations near user', budget: 'AED 1,000' },
        { channel: 'Instagram', tactic: 'Iftar spot reviews and coin earnings', budget: 'AED 1,500' },
        { channel: 'In-app', tactic: 'Ramadan specials section', budget: 'AED 500' }
      ],
      creativeAssets: ['Iftar guide by neighborhood', 'Ramadan coin bonus calendar', 'Best iftar spots carousel'],
      messaging: {
        headline: 'Iftar in 30 Minutes. Where Are You Going?',
        body: 'The best iftar spots in Dubai, all with coin rewards. Break your fast, earn coins, repeat for 30 days. This Ramadan, every meal counts double.',
        cta: 'Find Tonight\'s Iftar Spot'
      },
      kpis: [
        { metric: 'Ramadan active users', target: '50,000' },
        { metric: 'Iftar transactions', target: '100,000' },
        { metric: 'Ramadan coin earnings', target: 'AED 500K distributed' }
      ],
      timeline: 'Ramadan month campaign',
      budget: 'AED 3,000/week'
    },
    {
      id: 'cafe-u5',
      name: 'New in Town Discovery',
      type: 'user',
      painPoint: 'New expats don\'t know where to go',
      nuqtaSolution: 'Nuqta helps you discover the best cafes while earning rewards',
      thesis: 'Target new arrivals to UAE. Position Nuqta as discovery tool for the F&B scene while earning rewards.',
      channels: [
        { channel: 'Google Ads', tactic: 'Target "best cafes Dubai" searches', budget: 'AED 2,000' },
        { channel: 'Expat groups', tactic: 'Facebook group partnerships', budget: 'AED 800' },
        { channel: 'Welcome emails', tactic: 'Partner with relocation companies', budget: 'AED 500' }
      ],
      creativeAssets: ['New in Dubai cafe guide', 'Neighborhood discovery maps', 'First month cafe crawl challenge'],
      messaging: {
        headline: 'New to Dubai? Here\'s Where the Locals Actually Go',
        body: 'Skip the tourist traps. Discover Dubai\'s best cafes and restaurants - the ones locals love. Earn coins on every visit while you explore your new city.',
        cta: 'Start Your Dubai Discovery'
      },
      kpis: [
        { metric: 'New user signups (expat segment)', target: '2,000/month' },
        { metric: 'Discovery visits', target: '10,000/month' },
        { metric: 'New user retention (30 day)', target: '60%' }
      ],
      timeline: 'Ongoing acquisition campaign',
      budget: 'AED 3,300/week'
    }
  ]
};

// SALON & SPA CAMPAIGNS - 11 Pain Points
const salonCampaigns: CategoryData = {
  id: 'salon',
  name: 'Salon & Spa',
  icon: Scissors,
  color: 'pink',
  painPoints: [
    { pain: '55% of clients never rebook', solution: 'Coins create rebooking incentive - 2x more return visits' },
    { pain: 'Beauty influencers cost AED 1,000-10,000 per post', solution: 'Pay only 15-20% on actual bookings' },
    { pain: 'Fresha/Booksy take 20-30% commission', solution: 'Half the commission at 15-20% AND own client data' },
    { pain: '5,000+ salons in Dubai - fierce competition', solution: 'Stand out with rewards - differentiate beyond service' },
    { pain: 'Expat clients leave UAE every 2-3 years', solution: 'Continuous acquisition from 500K+ users' },
    { pain: 'Staff poaching - stylists take clients when leaving', solution: 'YOU own the client database, not staff' },
    { pain: 'Mall rent pressure - AED 300-400/sqft', solution: 'Fill empty chairs with targeted notifications' },
    { pain: 'Weekend-heavy traffic - weekdays dead', solution: 'Double coins on Tue-Wed to balance traffic' },
    { pain: 'Home service apps (Glamz) sending stylists to homes', solution: 'In-salon rewards they cannot match' },
    { pain: 'Price sensitivity - clients compare on Instagram', solution: 'Compete on value, not just price' },
    { pain: 'Summer client exodus - 30% revenue drop', solution: 'Summer survival campaigns with bonus coins' }
  ],
  merchantCampaigns: [
    {
      id: 'salon-m1', name: 'The Rebooking Revolution', type: 'merchant',
      painPoint: '55% of clients never rebook after first visit',
      nuqtaSolution: 'Coins create psychological pull-back - clients return to use rewards',
      thesis: 'Target salons losing clients to competition. Show how Nuqta coins create automatic rebooking incentive.',
      channels: [
        { channel: 'Instagram', tactic: 'Target beauty business accounts with retention content', budget: 'AED 1,500' },
        { channel: 'LinkedIn', tactic: 'Salon owner networking and case studies', budget: 'AED 1,000' },
        { channel: 'Walk-ins', tactic: 'Visit salons during quiet hours (Tue-Wed)', budget: 'AED 800' }
      ],
      creativeAssets: ['Before/after rebooking rate charts', 'Client retention calculator', 'Testimonial videos'],
      messaging: { headline: 'Half Your Clients Will Never Come Back. Unless...', body: 'Every week, 55% of your clients try the new salon around the corner. Nuqta coins change that - clients who earn rewards come back 2x more often.', cta: 'See How Top Salons Keep Clients Coming Back' },
      kpis: [{ metric: 'Salons contacted', target: '40/week' }, { metric: 'Demos booked', target: '8/week' }, { metric: 'Partners signed', target: '2/week' }],
      timeline: 'Ongoing weekly targets', budget: 'AED 3,300/week'
    },
    {
      id: 'salon-m2', name: 'Kill the Influencer Gamble', type: 'merchant',
      painPoint: 'Beauty influencers cost AED 1,000-10,000 per post with no guaranteed bookings',
      nuqtaSolution: 'Pay only 15-20% on actual bookings - zero upfront risk',
      thesis: 'Position Nuqta as the anti-influencer solution for salons. No upfront costs, pay only on results.',
      channels: [
        { channel: 'Instagram', tactic: 'Cost comparison content: influencer vs Nuqta', budget: 'AED 1,200' },
        { channel: 'Email', tactic: 'Target salons with recent influencer collaborations', budget: 'AED 400' },
        { channel: 'WhatsApp', tactic: 'Direct outreach to salon owners', budget: 'AED 300' }
      ],
      creativeAssets: ['ROI comparison calculator', 'Influencer post vs actual bookings analysis', 'Success metrics dashboard'],
      messaging: { headline: 'That AED 5,000 Influencer Post Got You How Many Bookings?', body: 'Likes don\'t pay rent. Bookings do. With Nuqta, you pay 15-20% ONLY when clients actually book and pay. Zero upfront gamble.', cta: 'Calculate Your Real Marketing ROI' },
      kpis: [{ metric: 'Influencer-using salons contacted', target: '25/week' }, { metric: 'ROI demos', target: '6/week' }, { metric: 'Conversions', target: '2/week' }],
      timeline: '8-week campaign', budget: 'AED 1,900/week'
    },
    {
      id: 'salon-m3', name: 'Escape Booking App Fees', type: 'merchant',
      painPoint: 'Fresha/Booksy take 20-30% commission and own your client data',
      nuqtaSolution: 'Half the commission at 15-20% AND you keep client relationships',
      thesis: 'Target salons dependent on booking apps. Show them how Nuqta costs less and builds THEIR database.',
      channels: [
        { channel: 'LinkedIn', tactic: 'Content comparing booking platform fees', budget: 'AED 1,000' },
        { channel: 'Industry events', tactic: 'Beauty trade show presence', budget: 'AED 2,500' },
        { channel: 'Referrals', tactic: 'Partner referral program from existing salons', budget: 'AED 500' }
      ],
      creativeAssets: ['Commission comparison chart', 'Data ownership explainer', 'Monthly savings calculator'],
      messaging: { headline: 'Fresha Takes 25% AND Owns Your Clients. There\'s a Better Way.', body: 'Every booking through Fresha or Booksy costs you 20-30% AND they own your client data. Nuqta is 15-20% and YOU own every relationship.', cta: 'Own Your Clients, Not the App' },
      kpis: [{ metric: 'App-dependent salons identified', target: '50/month' }, { metric: 'Switch conversations', target: '15/month' }, { metric: 'Partners signed', target: '4/month' }],
      timeline: 'Quarterly campaign', budget: 'AED 4,000/week'
    },
    {
      id: 'salon-m4', name: 'Beat 5,000 Competitors', type: 'merchant',
      painPoint: '5,000+ salons in Dubai alone - fierce competition on every street',
      nuqtaSolution: 'Stand out with rewards - be the salon where clients earn coins',
      thesis: 'Address the massive competition. Position coin rewards as the unique differentiator that makes clients choose YOU.',
      channels: [
        { channel: 'Geographic targeting', tactic: 'Door-to-door in high-competition areas', budget: 'AED 1,500' },
        { channel: 'Social media', tactic: 'Competition differentiation content', budget: 'AED 1,000' },
        { channel: 'Local business groups', tactic: 'Beauty business networking', budget: 'AED 500' }
      ],
      creativeAssets: ['Neighborhood competition map', 'Differentiation framework', 'Client choice infographic'],
      messaging: { headline: 'There Are 5,000 Salons in Dubai. Why Should Clients Choose Yours?', body: 'Same services, same prices, same everything. Until you add coin rewards. Be the salon where clients EARN while they beautify. That\'s the difference.', cta: 'Stand Out From 5,000 Competitors' },
      kpis: [{ metric: 'High-competition areas covered', target: '10/month' }, { metric: 'Differentiation pitches', target: '30/month' }, { metric: 'Partners signed', target: '5/month' }],
      timeline: 'Ongoing geographic expansion', budget: 'AED 3,000/week'
    },
    {
      id: 'salon-m5', name: 'Replace Departing Expats', type: 'merchant',
      painPoint: 'Expat clients leave UAE every 2-3 years - constant churn',
      nuqtaSolution: 'Continuous acquisition from 500K+ users replaces departing expats automatically',
      thesis: 'Address the expat turnover reality. Position Nuqta as automatic client replacement engine.',
      channels: [
        { channel: 'LinkedIn', tactic: 'Content about expat churn impact on beauty', budget: 'AED 1,000' },
        { channel: 'Email sequence', tactic: 'Educational series on client lifecycle', budget: 'AED 400' },
        { channel: 'Webinar', tactic: 'Surviving expat turnover workshop', budget: 'AED 600' }
      ],
      creativeAssets: ['Expat cycle infographic', 'Client replacement calculator', 'Success story video'],
      messaging: { headline: 'Your Best Client Is Packing for London. Who\'s Replacing Her?', body: 'The expat cycle means constant client churn. Your regulars leave every 2-3 years. Nuqta\'s 500K+ users means new clients discover you daily.', cta: 'Never Worry About Losing Clients Again' },
      kpis: [{ metric: 'Webinar attendees', target: '100' }, { metric: 'Post-webinar demos', target: '20' }, { metric: 'Partners signed', target: '5' }],
      timeline: '6-week awareness campaign', budget: 'AED 2,000/week'
    },
    {
      id: 'salon-m6', name: 'Own Your Client Database', type: 'merchant',
      painPoint: 'Staff poaching is rampant - stylists leave and take clients with them',
      nuqtaSolution: 'YOU own the client database - stylists leave, client relationships stay',
      thesis: 'Address the staff poaching crisis. Position Nuqta as the solution that protects client relationships.',
      channels: [
        { channel: 'LinkedIn', tactic: 'Content about staff turnover and client loss', budget: 'AED 800' },
        { channel: 'HR forums', tactic: 'Beauty industry HR networking', budget: 'AED 400' },
        { channel: 'Direct sales', tactic: 'Target salons with recent staff departures', budget: 'AED 600' }
      ],
      creativeAssets: ['Data ownership diagram', 'Staff departure impact calculator', 'Client retention framework'],
      messaging: { headline: 'When Your Best Stylist Leaves, Do Your Clients Follow?', body: 'Staff poaching is brutal in beauty. But with Nuqta, YOU own the client database. Stylists can leave - your client relationships stay with the salon.', cta: 'Protect Your Client Relationships' },
      kpis: [{ metric: 'High-turnover salons identified', target: '20/month' }, { metric: 'Data ownership demos', target: '8/month' }, { metric: 'Partners signed', target: '3/month' }],
      timeline: 'Ongoing quarterly focus', budget: 'AED 1,800/week'
    },
    {
      id: 'salon-m7', name: 'Fill Empty Chairs', type: 'merchant',
      painPoint: 'Mall rent pressure - AED 300-400/sqft means empty chairs bleed money',
      nuqtaSolution: 'Fill empty chairs with targeted notifications to nearby users',
      thesis: 'Target mall-based salons struggling with occupancy. Position Nuqta as chair-filler.',
      channels: [
        { channel: 'Mall visits', tactic: 'Visit mall salons during quiet periods', budget: 'AED 1,000' },
        { channel: 'Email', tactic: 'Occupancy optimization content to mall tenants', budget: 'AED 300' },
        { channel: 'Property partnerships', tactic: 'Mall management referral deals', budget: 'AED 1,500' }
      ],
      creativeAssets: ['Empty chair cost calculator', 'Peak vs off-peak distribution', 'Push notification examples'],
      messaging: { headline: 'AED 400/sqft Whether Those Chairs Are Full or Empty', body: 'Mall rent doesn\'t stop for empty chairs. 500K+ Nuqta users nearby can fill those seats. Push notifications bring walk-ins within minutes.', cta: 'Turn Empty Chairs Into Revenue' },
      kpis: [{ metric: 'Mall salons visited', target: '15/week' }, { metric: 'Occupancy demos', target: '6/week' }, { metric: 'Partners signed', target: '2/week' }],
      timeline: 'Ongoing mall focus', budget: 'AED 2,800/week'
    },
    {
      id: 'salon-m8', name: 'Fix the Weekday Dead Zone', type: 'merchant',
      painPoint: 'Weekend-heavy traffic - weekdays are dead, Fri-Sat overbooked',
      nuqtaSolution: 'Double coins on Tue-Wed to incentivize weekday bookings',
      thesis: 'Address the weekday traffic problem. Position Nuqta as traffic balancer.',
      channels: [
        { channel: 'Direct sales', tactic: 'Target salons complaining about weekday traffic', budget: 'AED 800' },
        { channel: 'Social media', tactic: 'Weekday promotion content', budget: 'AED 600' },
        { channel: 'Email', tactic: 'Traffic optimization playbook', budget: 'AED 300' }
      ],
      creativeAssets: ['Weekly traffic distribution chart', 'Double coin campaign examples', 'Revenue balancing calculator'],
      messaging: { headline: 'Overbooked Saturdays, Empty Tuesdays. Sound Familiar?', body: 'Weekends are chaos, weekdays are crickets. Nuqta double coin campaigns on Tue-Wed shift traffic to when you need it most. Balance your week.', cta: 'Fill Your Weekday Slots' },
      kpis: [{ metric: 'Weekday campaign launches', target: '10/month' }, { metric: 'Traffic shift achieved', target: '30% weekday increase' }, { metric: 'Partners signed', target: '3/month' }],
      timeline: '8-week pilot program', budget: 'AED 1,700/week'
    },
    {
      id: 'salon-m9', name: 'Beat Home Service Apps', type: 'merchant',
      painPoint: 'Home service competition - apps like Glamz sending stylists to homes',
      nuqtaSolution: 'In-salon rewards they cannot match - coins + experience beats convenience',
      thesis: 'Target salons losing clients to home service apps. Position in-salon experience + rewards as superior.',
      channels: [
        { channel: 'Instagram', tactic: 'In-salon experience content vs home service', budget: 'AED 1,200' },
        { channel: 'Direct sales', tactic: 'Target salons in areas with heavy home service presence', budget: 'AED 800' },
        { channel: 'Email', tactic: 'Home service competition analysis', budget: 'AED 300' }
      ],
      creativeAssets: ['Salon vs home experience comparison', 'Reward advantage visuals', 'Client preference survey results'],
      messaging: { headline: 'Home Service Apps Are Stealing Your Clients. Here\'s How to Win Them Back.', body: 'Glamz sends a stylist to their home. Convenient. But you offer the full salon experience PLUS coin rewards they can\'t get at home. That\'s your edge.', cta: 'Win Back Your Home-Service Clients' },
      kpis: [{ metric: 'Home-service affected salons identified', target: '20/month' }, { metric: 'Win-back campaigns launched', target: '8/month' }, { metric: 'Client return rate', target: '25% improvement' }],
      timeline: 'Quarterly campaign', budget: 'AED 2,300/week'
    },
    {
      id: 'salon-m10', name: 'Win the Price War', type: 'merchant',
      painPoint: 'Price sensitivity - clients compare prices on Instagram before booking',
      nuqtaSolution: 'Compete on value, not just price - cashback makes your price effectively lower',
      thesis: 'Address price shopping behavior. Position Nuqta as the value differentiator.',
      channels: [
        { channel: 'Instagram', tactic: 'Value vs price content campaign', budget: 'AED 1,000' },
        { channel: 'Direct sales', tactic: 'Target premium salons losing to price shoppers', budget: 'AED 800' },
        { channel: 'Email', tactic: 'Pricing strategy content', budget: 'AED 300' }
      ],
      creativeAssets: ['Price + cashback comparison', 'Value perception framework', 'Premium positioning guide'],
      messaging: { headline: 'Clients Price-Shop on Instagram. Here\'s How to Win Without Discounting.', body: 'They screenshot your prices, compare with 10 others. Don\'t race to the bottom. Add coin rewards - your price becomes effectively lower WITHOUT destroying margins.', cta: 'Win on Value, Not Just Price' },
      kpis: [{ metric: 'Premium salons targeted', target: '15/month' }, { metric: 'Value positioning demos', target: '8/month' }, { metric: 'Partners signed', target: '2/month' }],
      timeline: 'Ongoing campaign', budget: 'AED 2,100/week'
    },
    {
      id: 'salon-m11', name: 'Summer Survival Kit', type: 'merchant',
      painPoint: 'Summer client exodus - 30% revenue drop as residents travel abroad',
      nuqtaSolution: 'Summer survival campaigns - bonus coins keep remaining residents coming',
      thesis: 'Pre-summer outreach to salons. Offer Nuqta as summer survival strategy.',
      channels: [
        { channel: 'Pre-summer outreach', tactic: 'Contact salons in April-May', budget: 'AED 1,200' },
        { channel: 'Email', tactic: 'Summer survival playbook', budget: 'AED 400' },
        { channel: 'WhatsApp', tactic: 'Urgent summer prep messaging', budget: 'AED 300' }
      ],
      creativeAssets: ['Summer revenue impact chart', 'Bonus coin campaign examples', 'Summer success case study'],
      messaging: { headline: 'Summer 2024: Ready to Lose 30% of Revenue Again?', body: 'June arrives, clients disappear to Europe. Revenue drops 30%. This year, Nuqta bonus coins keep the remaining residents coming to YOUR salon.', cta: 'Get Your Summer Survival Plan' },
      kpis: [{ metric: 'Pre-summer signups', target: '20 salons by May' }, { metric: 'Summer campaigns active', target: '15 salons' }, { metric: 'Summer revenue retention', target: '15% improvement' }],
      timeline: 'April-May for June-August', budget: 'AED 1,900/week'
    }
  ],
  userCampaigns: [
    {
      id: 'salon-u1', name: 'Your Beauty Rewards You', type: 'user',
      painPoint: '55% of clients never rebook',
      nuqtaSolution: 'Find your regular salon and earn coins every visit',
      thesis: 'Target beauty-conscious users. Show them the value of loyalty with coin rewards.',
      channels: [
        { channel: 'Instagram', tactic: 'Beauty rewards content and influencer partnerships', budget: 'AED 2,500' },
        { channel: 'TikTok', tactic: 'Transformation videos with coin earnings', budget: 'AED 1,500' },
        { channel: 'Push notifications', tactic: 'Rebooking reminders with coin incentives', budget: 'AED 500' }
      ],
      creativeAssets: ['Coin earning transformation reels', 'Loyalty reward tracker', 'Before/after with coins overlay'],
      messaging: { headline: 'Every Mani Gets You Closer to a Free Facial', body: 'Trying new salons every month? Cool. But you\'re leaving rewards on the table. Find YOUR salon, earn coins every visit, watch rewards stack up.', cta: 'Find Your Beauty Home' },
      kpis: [{ metric: 'Salon repeat visits', target: '50% increase' }, { metric: 'Beauty category transactions', target: '30,000/month' }, { metric: 'Average salon visits per user', target: '2.5/month' }],
      timeline: 'Ongoing engagement', budget: 'AED 4,500/week'
    },
    {
      id: 'salon-u2', name: 'Weekday Beauty Bonus', type: 'user',
      painPoint: 'Hard to book on weekends, salons are packed',
      nuqtaSolution: 'Double coins on weekdays - same service, better rewards',
      thesis: 'Shift user behavior to weekdays with bonus coin incentives.',
      channels: [
        { channel: 'Push notifications', tactic: 'Weekday double coin alerts', budget: 'AED 800' },
        { channel: 'Instagram', tactic: 'Weekday beauty content', budget: 'AED 1,200' },
        { channel: 'In-app', tactic: 'Weekday bonus badge on listings', budget: 'AED 300' }
      ],
      creativeAssets: ['Double coin weekday badge', 'Weekday vs weekend comparison', 'Calm salon visuals'],
      messaging: { headline: 'Saturdays Are Packed. Tuesdays Are Rewarding.', body: 'Skip the weekend crowd. Book your beauty appointments on weekdays and earn DOUBLE coins. Same service, better rewards, no waiting.', cta: 'Book a Weekday, Earn Double' },
      kpis: [{ metric: 'Weekday bookings', target: '40% increase' }, { metric: 'Double coin redemptions', target: '5,000/month' }, { metric: 'User behavior shift', target: '25% weekend to weekday' }],
      timeline: 'Ongoing', budget: 'AED 2,300/week'
    },
    {
      id: 'salon-u3', name: 'Summer Glow Up', type: 'user',
      painPoint: 'Limited salon options during summer',
      nuqtaSolution: 'Bonus coins during summer - staycation beauty rewards',
      thesis: 'Target users staying in UAE during summer with beauty rewards.',
      channels: [
        { channel: 'Push notifications', tactic: 'Summer beauty bonus alerts', budget: 'AED 700' },
        { channel: 'Instagram', tactic: 'Summer glow content', budget: 'AED 1,500' },
        { channel: 'Email', tactic: 'Summer beauty guide', budget: 'AED 300' }
      ],
      creativeAssets: ['Summer glow campaign visuals', 'Staycation beauty guide', 'Bonus coin calendar'],
      messaging: { headline: 'Staying for Summer? Your Glow Up Just Got Better.', body: 'Everyone\'s in Europe. You\'re glowing up here. Summer beauty appointments earn bonus coins. Make this your best summer look yet.', cta: 'Claim Your Summer Beauty Bonus' },
      kpis: [{ metric: 'Summer beauty transactions', target: '80% baseline retention' }, { metric: 'Summer bonus redemptions', target: '10,000' }, { metric: 'Active summer users', target: '75% retention' }],
      timeline: 'June-August', budget: 'AED 2,500/week'
    }
  ]
};

// GYM & FITNESS CAMPAIGNS - 12 Pain Points
const gymCampaigns: CategoryData = {
  id: 'gym',
  name: 'Gym & Fitness',
  icon: Dumbbell,
  color: 'emerald',
  painPoints: [
    { pain: '50% of new members quit within 3 months', solution: 'Coins = reason to keep going - 30% better retention' },
    { pain: 'ClassPass takes 30%+ and trains members to gym-hop', solution: '15-20% commission AND you keep member data' },
    { pain: 'High acquisition cost AED 200-500 per member via ads', solution: 'Pay only on actual membership - discovered by 500K+ users' },
    { pain: 'Summer exodus - 40% drop in attendance June-August', solution: 'Summer survival campaigns - double coins keep members coming' },
    { pain: 'Ramadan operational challenges - attendance drops', solution: 'Post-iftar workout targeting - push notifications for evening sessions' },
    { pain: '1,200+ gyms in Dubai - new boutique studios monthly', solution: 'Differentiate with rewards - be the gym where members earn' },
    { pain: 'Hotel gym competition - luxury hotels offer day passes', solution: 'Loyalty hotels cannot match - day passes don\'t earn coins' },
    { pain: 'Expat turnover - members leave UAE', solution: 'Continuous acquisition - new members from Nuqta replace departures' },
    { pain: 'Corporate gym deals - employees get free access elsewhere', solution: 'Personal rewards beat corporate - individual coins more valuable' },
    { pain: 'Home fitness trend - Peloton, YouTube workouts', solution: 'Rewards for showing up - can\'t earn coins on YouTube' },
    { pain: 'PT poaching - personal trainers leave and take clients', solution: 'YOU own member data - trainers leave, relationships stay' },
    { pain: 'No upsell data - don\'t know who to target for PT/supplements', solution: 'Know your members - target right people for PT, supplements, gear' }
  ],
  merchantCampaigns: [
    {
      id: 'gym-m1', name: 'Stop the 3-Month Quit', type: 'merchant',
      painPoint: '50% of new members quit within 3 months - New Year motivation dies',
      nuqtaSolution: 'Coins = reason to keep going - members don\'t abandon rewards',
      thesis: 'Target gyms bleeding members after the New Year rush. Position Nuqta as the retention solution.',
      channels: [
        { channel: 'LinkedIn', tactic: 'Content about fitness industry retention crisis', budget: 'AED 1,500' },
        { channel: 'Industry events', tactic: 'Fitness trade show presence', budget: 'AED 2,500' },
        { channel: 'Direct outreach', tactic: 'Target gyms post-January rush', budget: 'AED 1,000' }
      ],
      creativeAssets: ['Retention curve comparison', 'Member lifetime value calculator', 'Success case studies'],
      messaging: { headline: 'Half Your January Signups Will Quit by March. Unless...', body: 'New Year, new resolutions, new members. By March, half are gone. Nuqta coins give members a reason to keep showing up - they don\'t abandon earned rewards.', cta: 'Turn New Members Into Lifers' },
      kpis: [{ metric: 'Gyms contacted', target: '30/week' }, { metric: 'Retention demos', target: '8/week' }, { metric: 'Partners signed', target: '2/week' }],
      timeline: 'Focus December-February', budget: 'AED 5,000/week'
    },
    {
      id: 'gym-m2', name: 'Escape ClassPass Trap', type: 'merchant',
      painPoint: 'ClassPass takes 30%+ per class and trains members to gym-hop',
      nuqtaSolution: '15-20% commission AND you keep the member data, not ClassPass',
      thesis: 'Target studios dependent on ClassPass. Show them how to build direct loyalty.',
      channels: [
        { channel: 'LinkedIn', tactic: 'ClassPass comparison content', budget: 'AED 1,200' },
        { channel: 'Studio visits', tactic: 'Target boutique studios using ClassPass', budget: 'AED 1,000' },
        { channel: 'Email', tactic: 'Commission comparison to studio database', budget: 'AED 400' }
      ],
      creativeAssets: ['Commission comparison chart', 'Member ownership diagram', 'Direct loyalty vs aggregator'],
      messaging: { headline: 'ClassPass Takes 30%+ AND Trains Your Members to Gym-Hop.', body: 'Every ClassPass booking costs you 30%+ AND teaches members to try everywhere. Nuqta is 15-20%, and members build loyalty with YOU.', cta: 'Own Your Members, Not ClassPass' },
      kpis: [{ metric: 'ClassPass studios identified', target: '40/month' }, { metric: 'Switch conversations', target: '12/month' }, { metric: 'Partners signed', target: '3/month' }],
      timeline: 'Quarterly campaign', budget: 'AED 2,600/week'
    },
    {
      id: 'gym-m3', name: 'Kill Acquisition Costs', type: 'merchant',
      painPoint: 'High acquisition cost AED 200-500 per member via ads',
      nuqtaSolution: 'Pay only on actual membership - discovered by 500K+ users',
      thesis: 'Target gyms struggling with marketing spend. Position Nuqta as zero-upfront acquisition.',
      channels: [
        { channel: 'Performance marketing comparison', tactic: 'Content showing ad spend vs Nuqta model', budget: 'AED 1,000' },
        { channel: 'Direct sales', tactic: 'Target gyms with high ad spend', budget: 'AED 800' },
        { channel: 'Webinar', tactic: 'Fitness marketing ROI workshop', budget: 'AED 600' }
      ],
      creativeAssets: ['Acquisition cost calculator', 'Ad spend vs results analysis', 'Nuqta discovery funnel'],
      messaging: { headline: 'AED 300 Per New Member Via Ads. Zero Via Nuqta.', body: 'Facebook ads cost AED 200-500 per new member - if they even show up. Nuqta brings 500K+ users who discover you organically. Pay only when they join.', cta: 'Stop Paying to Find Members' },
      kpis: [{ metric: 'High-ad-spend gyms identified', target: '20/month' }, { metric: 'Acquisition ROI demos', target: '8/month' }, { metric: 'Partners signed', target: '2/month' }],
      timeline: 'Ongoing', budget: 'AED 2,400/week'
    },
    {
      id: 'gym-m4', name: 'Summer Survival Mode', type: 'merchant',
      painPoint: 'Summer exodus crisis - 40% drop in attendance June-August',
      nuqtaSolution: 'Summer survival campaigns - double coins keep members coming',
      thesis: 'Pre-summer outreach to gyms. Offer Nuqta as summer survival strategy.',
      channels: [
        { channel: 'Pre-summer outreach', tactic: 'Contact gyms in April-May', budget: 'AED 1,500' },
        { channel: 'Email', tactic: 'Summer survival playbook', budget: 'AED 400' },
        { channel: 'WhatsApp', tactic: 'Urgent summer prep messaging', budget: 'AED 300' }
      ],
      creativeAssets: ['Summer attendance drop chart', 'Double coins campaign examples', 'Summer retention case study'],
      messaging: { headline: 'Summer 2024: Ready for 40% Empty Classes Again?', body: 'June hits, members flee. Attendance drops 40%. Double coin campaigns keep members who stayed coming to YOUR gym instead of staying home.', cta: 'Get Your Summer Survival Plan' },
      kpis: [{ metric: 'Pre-summer signups', target: '15 gyms by May' }, { metric: 'Summer campaigns active', target: '12 gyms' }, { metric: 'Summer attendance retention', target: '20% improvement' }],
      timeline: 'April-May for June-August', budget: 'AED 2,200/week'
    },
    {
      id: 'gym-m5', name: 'Ramadan Workout Strategy', type: 'merchant',
      painPoint: 'Ramadan operational challenges - gym hours shift, attendance drops',
      nuqtaSolution: 'Post-iftar workout targeting - push notifications for evening sessions',
      thesis: 'Help gyms navigate Ramadan with targeted campaigns.',
      channels: [
        { channel: 'Pre-Ramadan outreach', tactic: 'Contact gyms 4 weeks before', budget: 'AED 1,000' },
        { channel: 'Email', tactic: 'Ramadan fitness marketing playbook', budget: 'AED 300' },
        { channel: 'Industry content', tactic: 'Ramadan gym strategy articles', budget: 'AED 500' }
      ],
      creativeAssets: ['Ramadan timing chart', 'Post-iftar campaign examples', 'Member engagement calendar'],
      messaging: { headline: 'Ramadan Is Coming. Is Your Gym Ready?', body: 'Ramadan shifts everything - timing, attendance, energy. Post-iftar workout campaigns bring members when they\'re ready to train.', cta: 'Master Ramadan Fitness Marketing' },
      kpis: [{ metric: 'Ramadan partners', target: '15 gyms' }, { metric: 'Post-iftar campaigns', target: '12 launched' }, { metric: 'Ramadan attendance', target: '15% above baseline' }],
      timeline: 'Pre-Ramadan through Eid', budget: 'AED 1,800/week'
    },
    {
      id: 'gym-m6', name: 'Stand Out From 1,200', type: 'merchant',
      painPoint: '1,200+ gyms in Dubai - new boutique studios opening monthly',
      nuqtaSolution: 'Differentiate with rewards - be the gym where members earn, not just exercise',
      thesis: 'Address massive competition. Position coin rewards as unique differentiator.',
      channels: [
        { channel: 'Geographic targeting', tactic: 'Door-to-door in gym-dense areas', budget: 'AED 1,500' },
        { channel: 'Social media', tactic: 'Competition differentiation content', budget: 'AED 1,000' },
        { channel: 'Referral program', tactic: 'Partner gym referrals', budget: 'AED 500' }
      ],
      creativeAssets: ['Gym density map', 'Differentiation framework', 'Member choice factors'],
      messaging: { headline: '1,200 Gyms in Dubai. A New Boutique Every Week. How Do You Compete?', body: 'Same equipment, same classes, same trainers everywhere. Add coin rewards - become the gym where working out PAYS you back. That\'s different.', cta: 'Stand Out From 1,200 Competitors' },
      kpis: [{ metric: 'Gym-dense areas covered', target: '8/month' }, { metric: 'Differentiation pitches', target: '25/month' }, { metric: 'Partners signed', target: '4/month' }],
      timeline: 'Ongoing', budget: 'AED 3,000/week'
    }
  ],
  userCampaigns: [
    {
      id: 'gym-u1', name: 'Workout = Rewards', type: 'user',
      painPoint: '50% quit within 3 months',
      nuqtaSolution: 'Coins give you another reason to show up',
      thesis: 'Target users who need extra motivation. Position coin rewards as workout motivation.',
      channels: [
        { channel: 'Instagram', tactic: 'Fitness motivation + rewards content', budget: 'AED 2,000' },
        { channel: 'Push notifications', tactic: 'Workout streak reminders', budget: 'AED 500' },
        { channel: 'TikTok', tactic: 'Gym transformation with coin earnings', budget: 'AED 1,500' }
      ],
      creativeAssets: ['Workout streak tracker', 'Coin milestone celebrations', 'Motivation + rewards mashup'],
      messaging: { headline: 'Can\'t Motivate Yourself? Let Coins Do It.', body: 'Some days the gym feels impossible. But knowing you\'re earning coins every visit? That\'s another reason to lace up and show up.', cta: 'Get Paid to Work Out' },
      kpis: [{ metric: 'Gym visit frequency', target: '40% increase' }, { metric: 'Workout streaks', target: '15,000 active' }, { metric: 'Member retention', target: '30% improvement' }],
      timeline: 'Ongoing', budget: 'AED 4,000/week'
    },
    {
      id: 'gym-u2', name: 'Beat the Home Workout', type: 'user',
      painPoint: 'Home fitness trend - YouTube workouts reduce gym visits',
      nuqtaSolution: 'Earn coins for showing up - YouTube doesn\'t pay you',
      thesis: 'Convert home workout users to gym-goers with rewards.',
      channels: [
        { channel: 'YouTube Ads', tactic: 'Target fitness video watchers', budget: 'AED 1,500' },
        { channel: 'Instagram', tactic: 'Gym vs home workout content', budget: 'AED 1,000' },
        { channel: 'Push notifications', tactic: 'Gym session = coins reminder', budget: 'AED 400' }
      ],
      creativeAssets: ['Home vs gym experience', 'Coin earning comparison', 'Real equipment motivation'],
      messaging: { headline: 'YouTube Doesn\'t Pay You to Work Out. Gyms Do.', body: 'Home workouts are convenient. But they don\'t earn you coins. Every gym session builds your reward balance. YouTube? Zero.', cta: 'Get Rewarded for Real Workouts' },
      kpis: [{ metric: 'Home-to-gym converts', target: '5,000/month' }, { metric: 'Gym session increase', target: '25%' }, { metric: 'Coin earning engagement', target: '60% of gym users' }],
      timeline: '8-week conversion campaign', budget: 'AED 2,900/week'
    },
    {
      id: 'gym-u3', name: 'Summer Fitness Bonus', type: 'user',
      painPoint: 'Summer heat reduces gym motivation',
      nuqtaSolution: 'Double coins during summer - extra rewards for staying active',
      thesis: 'Target users staying in UAE during summer with fitness rewards.',
      channels: [
        { channel: 'Push notifications', tactic: 'Summer double coin alerts', budget: 'AED 700' },
        { channel: 'Instagram', tactic: 'Summer body + summer rewards content', budget: 'AED 1,500' },
        { channel: 'Email', tactic: 'Summer fitness challenge', budget: 'AED 300' }
      ],
      creativeAssets: ['Summer fitness challenge graphics', 'Double coin gym badge', 'Summer body transformation'],
      messaging: { headline: 'Too Hot Outside? Perfect Weather for Gym Coins.', body: 'Summer in Dubai means AC gyms and DOUBLE coins. Stay fit, stay cool, stack rewards. Make this summer your best shape yet.', cta: 'Claim Your Summer Fitness Bonus' },
      kpis: [{ metric: 'Summer gym visits', target: '80% baseline retention' }, { metric: 'Double coin redemptions', target: '12,000' }, { metric: 'Active summer fitness users', target: '70% retention' }],
      timeline: 'June-August', budget: 'AED 2,500/week'
    }
  ]
};

// HOTELS & HOSPITALITY CAMPAIGNS - 12 Pain Points
const hotelCampaigns: CategoryData = {
  id: 'hotel',
  name: 'Hotels & Hospitality',
  icon: Hotel,
  color: 'blue',
  painPoints: [
    { pain: 'OTAs take 15-25% commission on every room booking', solution: '15-20% on F&B/spa only - not rooms, you own guest relationship' },
    { pain: 'No guest relationship after checkout - OTAs own customer data', solution: 'Build direct database - guests scan QR, you own their data forever' },
    { pain: 'F&B outlets 80% dependent on in-house guests', solution: '500K+ locals discovering your restaurant - 25% increase in walk-ins' },
    { pain: 'Spa sits empty weekdays - 60% utilization only Fri-Sat', solution: 'Double coins on Tue-Wed - fill slow slots, 40% better utilization' },
    { pain: '700+ hotels in Dubai - fierce competition', solution: 'Stand out with rewards - be the hotel where guests earn coins' },
    { pain: 'Summer occupancy drops 20-30%', solution: 'Local F&B traffic - residents spend on dining even when tourists leave' },
    { pain: 'Friday brunch competition - 100+ hotels fighting for same customers', solution: 'Target food enthusiasts - push notifications to brunch lovers' },
    { pain: 'Pool/beach day pass revenue untapped', solution: 'Pool/beach campaigns - promote to local residents' },
    { pain: 'Entertainer app trained guests to expect 50% off', solution: 'Cashback preserves pricing - no discounts, maintain rate integrity' },
    { pain: 'Repeat guest rate below 20% for non-chain hotels', solution: 'Multi-outlet loyalty - coins across restaurant, spa, bar drives returns' },
    { pain: 'Corporate travel contracts squeeze margins', solution: 'Target leisure travelers - higher margin guests through Nuqta' },
    { pain: 'Guest acquisition cost AED 100-300 per booking', solution: 'Pay only on F&B spend - no acquisition cost upfront' }
  ],
  merchantCampaigns: [
    {
      id: 'hotel-m1', name: 'Break Free From OTAs', type: 'merchant',
      painPoint: 'OTAs take 15-25% commission on every room booking',
      nuqtaSolution: 'Nuqta is 15-20% on F&B/spa only - not rooms, and you own the relationship',
      thesis: 'Target hotels bleeding to Booking.com/Expedia. Position Nuqta as F&B loyalty without OTA pain.',
      channels: [
        { channel: 'Hotel management events', tactic: 'Presence at hospitality conferences', budget: 'AED 3,000' },
        { channel: 'LinkedIn', tactic: 'Content about OTA dependency', budget: 'AED 1,500' },
        { channel: 'Direct outreach', tactic: 'Target independent hotels', budget: 'AED 1,000' }
      ],
      creativeAssets: ['OTA commission breakdown', 'Nuqta model comparison', 'Guest ownership diagram'],
      messaging: { headline: 'Booking.com Takes 25% AND Owns Your Guests. There\'s Another Way.', body: 'Every OTA booking costs you 15-25% AND you never see that guest again. Nuqta works on F&B at 15-20%, and YOU own every guest relationship.', cta: 'Own Your Guests, Not the OTAs' },
      kpis: [{ metric: 'Hotels contacted', target: '20/month' }, { metric: 'F&B loyalty demos', target: '8/month' }, { metric: 'Partners signed', target: '3/month' }],
      timeline: 'Ongoing', budget: 'AED 5,500/week'
    },
    {
      id: 'hotel-m2', name: 'Fill Empty Restaurant Seats', type: 'merchant',
      painPoint: 'F&B outlets 80% dependent on in-house guests - locals don\'t come',
      nuqtaSolution: '500K+ locals discovering your restaurant - 25% increase in walk-ins',
      thesis: 'Target hotel F&B directors. Position Nuqta as local traffic driver.',
      channels: [
        { channel: 'F&B director outreach', tactic: 'Direct contact with hotel F&B heads', budget: 'AED 1,500' },
        { channel: 'LinkedIn', tactic: 'Hotel F&B challenges content', budget: 'AED 800' },
        { channel: 'Industry events', tactic: 'F&B networking events', budget: 'AED 1,200' }
      ],
      creativeAssets: ['Local vs in-house traffic analysis', 'Walk-in increase case study', 'Push notification examples'],
      messaging: { headline: 'Your Hotel Restaurant Is 80% Empty Because Locals Don\'t Know It Exists.', body: '500K+ Dubai residents looking for their next dinner spot. Push notifications can fill those empty tables with locals who live 5 minutes away.', cta: 'Bring Locals to Your Restaurant' },
      kpis: [{ metric: 'Hotel F&B contacts', target: '15/month' }, { metric: 'Local traffic demos', target: '6/month' }, { metric: 'Partners signed', target: '2/month' }],
      timeline: 'Ongoing', budget: 'AED 3,500/week'
    },
    {
      id: 'hotel-m3', name: 'Fill Weekday Spa', type: 'merchant',
      painPoint: 'Spa sits empty weekdays - 60% utilization only Fri-Sat',
      nuqtaSolution: 'Double coins on Tue-Wed fills slow slots - 40% better utilization',
      thesis: 'Target hotel spa directors with occupancy optimization.',
      channels: [
        { channel: 'Spa director outreach', tactic: 'Direct contact with spa managers', budget: 'AED 1,000' },
        { channel: 'Email', tactic: 'Spa occupancy optimization content', budget: 'AED 400' },
        { channel: 'Industry groups', tactic: 'Spa management forums', budget: 'AED 500' }
      ],
      creativeAssets: ['Weekly utilization chart', 'Double coin campaign examples', 'Occupancy improvement case study'],
      messaging: { headline: 'Your Spa Is 60% Full on Weekdays. Here\'s How to Fix That.', body: 'Saturdays packed, Tuesdays empty. Double coin campaigns shift traffic to weekdays - same service, better rewards, 40% better utilization.', cta: 'Fill Your Weekday Spa Slots' },
      kpis: [{ metric: 'Spa directors contacted', target: '10/month' }, { metric: 'Weekday campaigns launched', target: '6' }, { metric: 'Utilization improvement', target: '40%' }],
      timeline: '8-week pilot', budget: 'AED 1,900/week'
    },
    {
      id: 'hotel-m4', name: 'Win the Brunch War', type: 'merchant',
      painPoint: 'Friday brunch competition - 100+ hotels fighting for same customers',
      nuqtaSolution: 'Target food enthusiasts - push notifications to brunch lovers',
      thesis: 'Help hotels differentiate their Friday brunch offering.',
      channels: [
        { channel: 'F&B outreach', tactic: 'Target hotels with popular brunches', budget: 'AED 1,200' },
        { channel: 'Social media', tactic: 'Brunch content campaign', budget: 'AED 1,000' },
        { channel: 'Influencer partnerships', tactic: 'Food blogger brunch reviews', budget: 'AED 800' }
      ],
      creativeAssets: ['Brunch comparison guide', 'Coin earning at brunch', 'Friday brunch discovery'],
      messaging: { headline: '100+ Hotels. One Friday. Your Brunch Better Stand Out.', body: 'Friday brunch is brutal competition. Add coin rewards and targeted push notifications to brunch lovers. Stand out from the crowd.', cta: 'Win the Friday Brunch War' },
      kpis: [{ metric: 'Brunch venues targeted', target: '20' }, { metric: 'Friday campaigns active', target: '12' }, { metric: 'Brunch traffic increase', target: '25%' }],
      timeline: 'Friday-focused campaign', budget: 'AED 3,000/week'
    },
    {
      id: 'hotel-m5', name: 'Beat Entertainer Pricing', type: 'merchant',
      painPoint: 'Entertainer app trained guests to expect 50% off - destroys margins',
      nuqtaSolution: 'Cashback preserves pricing - no discounts, maintain rate integrity',
      thesis: 'Position Nuqta as alternative to Entertainer that preserves margins.',
      channels: [
        { channel: 'Revenue management outreach', tactic: 'Target hotels frustrated with Entertainer', budget: 'AED 1,500' },
        { channel: 'LinkedIn', tactic: 'Content about discount culture damage', budget: 'AED 800' },
        { channel: 'Industry events', tactic: 'Revenue management conferences', budget: 'AED 1,200' }
      ],
      creativeAssets: ['Discount vs cashback margin comparison', 'Rate integrity framework', 'Entertainer alternative pitch'],
      messaging: { headline: 'Entertainer Trained Guests to Expect 50% Off. Nuqta Undoes That.', body: 'BOGO discounts destroy margins and devalue your brand. Cashback rewards feel generous to guests while maintaining your rates. Preserve your pricing power.', cta: 'Protect Your Rate Integrity' },
      kpis: [{ metric: 'Entertainer-heavy hotels contacted', target: '15/month' }, { metric: 'Rate integrity demos', target: '6/month' }, { metric: 'Partners signed', target: '2/month' }],
      timeline: 'Ongoing', budget: 'AED 3,500/week'
    }
  ],
  userCampaigns: [
    {
      id: 'hotel-u1', name: 'Staycation Rewards', type: 'user',
      painPoint: 'Hotel experiences feel expensive',
      nuqtaSolution: 'Earn coins on hotel dining, spa, brunch - make staycations rewarding',
      thesis: 'Target Dubai residents for staycation experiences.',
      channels: [
        { channel: 'Instagram', tactic: 'Staycation content with coin earnings', budget: 'AED 2,500' },
        { channel: 'Push notifications', tactic: 'Weekend staycation deals', budget: 'AED 600' },
        { channel: 'Email', tactic: 'Monthly staycation guide', budget: 'AED 400' }
      ],
      creativeAssets: ['Staycation rewards guide', 'Hotel experience carousel', 'Coin earning breakdown'],
      messaging: { headline: 'Staycation Just Got More Rewarding.', body: 'Brunch, pool day, spa treatment - every hotel experience earns coins. Make your Dubai staycation pay you back.', cta: 'Discover Rewarding Staycations' },
      kpis: [{ metric: 'Hotel transactions', target: '20,000/month' }, { metric: 'Staycation bookings', target: '5,000/month' }, { metric: 'Average hotel spend', target: 'AED 400' }],
      timeline: 'Ongoing', budget: 'AED 3,500/week'
    },
    {
      id: 'hotel-u2', name: 'Friday Brunch Finder', type: 'user',
      painPoint: 'Too many brunch options, hard to choose',
      nuqtaSolution: 'Discover the best brunches AND earn coins on every one',
      thesis: 'Position Nuqta as the Friday brunch discovery platform.',
      channels: [
        { channel: 'Instagram', tactic: 'Friday brunch reviews and rankings', budget: 'AED 1,500' },
        { channel: 'Push notifications', tactic: 'Thursday night brunch recommendations', budget: 'AED 500' },
        { channel: 'In-app', tactic: 'Brunch discovery section', budget: 'AED 300' }
      ],
      creativeAssets: ['Best brunches guide', 'Brunch earning calculator', 'Friday brunch carousel'],
      messaging: { headline: 'This Friday: Brunch + Coins.', body: '100+ brunches in Dubai. We\'ll help you find the perfect one - and earn coins while you feast. Friday just got better.', cta: 'Find Your Friday Brunch' },
      kpis: [{ metric: 'Friday brunch transactions', target: '8,000/month' }, { metric: 'Brunch discovery clicks', target: '50,000/month' }, { metric: 'Average brunch spend', target: 'AED 350' }],
      timeline: 'Friday-focused', budget: 'AED 2,300/week'
    }
  ]
};

// CAR SERVICES & AUTO CAMPAIGNS - 11 Pain Points
const autoCampaigns: CategoryData = {
  id: 'auto',
  name: 'Car Services & Auto',
  icon: Car,
  color: 'slate',
  painPoints: [
    { pain: '5,000+ car service outlets in Dubai - brutal competition', solution: 'Stand out with rewards - be the car wash where customers earn coins' },
    { pain: 'Customers forget service schedules - oil changes, tire rotation', solution: 'Automated reminders - push notifications sent automatically' },
    { pain: '60% of car wash customers are random - pick the closest one', solution: 'Turn random into regulars - 2.5x more visits through coin rewards' },
    { pain: 'Summer heat punishes cars but drives customers away', solution: 'Double coins campaigns - keep traffic coming despite the heat' },
    { pain: 'Cash transactions dominate - 40% cash, no customer data', solution: 'QR scan captures everything - build database from every transaction' },
    { pain: 'Premium services sit empty - ceramic coating, PPF underutilized', solution: 'Bonus coins on ceramic/PPF - incentivize upgrade to deluxe' },
    { pain: 'WhatsApp groups undercut pricing - underground operators', solution: 'Compete on value, not price - cashback makes you effectively cheaper' },
    { pain: 'Company cars lack loyalty - drivers pick random places', solution: 'Fleet driver rewards - coins make drivers choose you consistently' },
    { pain: 'Ramadan traffic drops - operational hours shift', solution: 'Pre-Eid car prep campaigns - target car prep before holiday' },
    { pain: 'Staff turnover - workers leave, take customer relationships', solution: 'YOU own customer data - workers leave, relationships stay' },
    { pain: 'Aggregator apps (Careem) take commission and own customer', solution: 'Own your customer - 15-20% and YOU keep the data' }
  ],
  merchantCampaigns: [
    {
      id: 'auto-m1', name: 'Beat 5,000 Competitors', type: 'merchant',
      painPoint: '5,000+ car service outlets in Dubai - brutal competition every kilometer',
      nuqtaSolution: 'Stand out with rewards - be the car wash where customers earn coins',
      thesis: 'Address massive competition in car services. Position coin rewards as differentiator.',
      channels: [
        { channel: 'Geographic targeting', tactic: 'Door-to-door in auto service areas', budget: 'AED 1,500' },
        { channel: 'LinkedIn', tactic: 'Car service business content', budget: 'AED 800' },
        { channel: 'Trade associations', tactic: 'Auto service industry groups', budget: 'AED 500' }
      ],
      creativeAssets: ['Competition density map', 'Differentiation framework', 'Customer choice factors'],
      messaging: { headline: '5,000 Car Washes in Dubai. Why Should Customers Choose Yours?', body: 'Same service, same prices, same everything. Until you add coin rewards. Be the car wash where customers EARN while they clean. That\'s the difference.', cta: 'Stand Out From 5,000 Competitors' },
      kpis: [{ metric: 'Auto service areas covered', target: '10/month' }, { metric: 'Differentiation pitches', target: '40/month' }, { metric: 'Partners signed', target: '6/month' }],
      timeline: 'Ongoing geographic expansion', budget: 'AED 2,800/week'
    },
    {
      id: 'auto-m2', name: 'Never Forget an Oil Change', type: 'merchant',
      painPoint: 'Customers forget service schedules - oil changes, tire rotation, AC service',
      nuqtaSolution: 'Automated reminders - oil change due? Push notification sent automatically',
      thesis: 'Position Nuqta as service reminder system for auto businesses.',
      channels: [
        { channel: 'Direct sales', tactic: 'Target full-service auto centers', budget: 'AED 1,200' },
        { channel: 'Email', tactic: 'Service reminder technology content', budget: 'AED 400' },
        { channel: 'Industry groups', tactic: 'Auto service forums', budget: 'AED 400' }
      ],
      creativeAssets: ['Service reminder flow diagram', 'Customer retention stats', 'Reminder notification examples'],
      messaging: { headline: 'Customers Forget Oil Changes. Their App Doesn\'t.', body: 'Most customers forget their 10,000km service. Nuqta sends automatic reminders based on service history. You never lose a service appointment again.', cta: 'Never Lose a Service Booking' },
      kpis: [{ metric: 'Service centers contacted', target: '25/month' }, { metric: 'Reminder system demos', target: '10/month' }, { metric: 'Partners signed', target: '3/month' }],
      timeline: 'Ongoing', budget: 'AED 2,000/week'
    },
    {
      id: 'auto-m3', name: 'Random to Regular', type: 'merchant',
      painPoint: '60% of car wash customers are random - just pick the closest one',
      nuqtaSolution: 'Turn random into regulars - 2.5x more visits through coin rewards',
      thesis: 'Target car washes with high random traffic. Position Nuqta as loyalty builder.',
      channels: [
        { channel: 'Car wash visits', tactic: 'Visit busy car wash locations', budget: 'AED 1,000' },
        { channel: 'WhatsApp', tactic: 'Direct outreach to car wash owners', budget: 'AED 300' },
        { channel: 'Referrals', tactic: 'Existing partner referrals', budget: 'AED 400' }
      ],
      creativeAssets: ['Random vs regular customer value', 'Loyalty conversion funnel', 'Repeat visit increase data'],
      messaging: { headline: '60% of Your Customers Will Never Come Back. They Just Picked the Closest One.', body: 'Random car wash customers have zero loyalty. Nuqta coins create a reason to return - they\'re not going to the other place when they\'ve got coins with you.', cta: 'Convert Random to Regular' },
      kpis: [{ metric: 'High-traffic car washes identified', target: '30/month' }, { metric: 'Loyalty demos', target: '12/month' }, { metric: 'Partners signed', target: '4/month' }],
      timeline: 'Ongoing', budget: 'AED 1,700/week'
    },
    {
      id: 'auto-m4', name: 'Premium Upsell Engine', type: 'merchant',
      painPoint: 'Premium services sit empty - ceramic coating, PPF underutilized',
      nuqtaSolution: 'Bonus coins on ceramic/PPF - incentivize upgrade from basic to deluxe',
      thesis: 'Help auto services sell more premium services through coin incentives.',
      channels: [
        { channel: 'Premium service providers', tactic: 'Target detailing and ceramic coating specialists', budget: 'AED 1,200' },
        { channel: 'Email', tactic: 'Upsell strategy content', budget: 'AED 400' },
        { channel: 'Industry content', tactic: 'Premium service marketing guides', budget: 'AED 400' }
      ],
      creativeAssets: ['Premium service margin analysis', 'Bonus coin upsell examples', 'Customer upgrade journey'],
      messaging: { headline: 'Ceramic Coating Sits Empty While You Do Basic Washes All Day.', body: 'Premium services have the best margins but the hardest sell. Bonus coins on PPF and ceramic coating incentivize customers to upgrade. Higher ticket, more coins, everyone wins.', cta: 'Fill Your Premium Service Slots' },
      kpis: [{ metric: 'Premium service providers contacted', target: '15/month' }, { metric: 'Upsell campaigns launched', target: '8' }, { metric: 'Premium service increase', target: '30%' }],
      timeline: '8-week pilot', budget: 'AED 2,000/week'
    },
    {
      id: 'auto-m5', name: 'Fleet Driver Loyalty', type: 'merchant',
      painPoint: 'Company cars lack loyalty - drivers pick random places',
      nuqtaSolution: 'Fleet driver rewards - coins make drivers choose you consistently',
      thesis: 'Target auto services near business districts. Capture fleet driver loyalty.',
      channels: [
        { channel: 'Business district targeting', tactic: 'Target auto services near office areas', budget: 'AED 1,200' },
        { channel: 'Fleet manager outreach', tactic: 'Corporate fleet partnerships', budget: 'AED 800' },
        { channel: 'Driver incentives', tactic: 'Fleet driver reward programs', budget: 'AED 500' }
      ],
      creativeAssets: ['Fleet driver reward program', 'Corporate partnership pitch', 'Driver loyalty data'],
      messaging: { headline: 'Company Car Drivers Pick Random Places. Until You Pay Them Not To.', body: 'Fleet drivers have no loyalty - they\'re spending company money. Give them personal coins and watch them choose YOUR car wash every single time.', cta: 'Win Fleet Driver Loyalty' },
      kpis: [{ metric: 'Fleet accounts targeted', target: '20/month' }, { metric: 'Driver programs launched', target: '10' }, { metric: 'Fleet transaction increase', target: '40%' }],
      timeline: 'Quarterly', budget: 'AED 2,500/week'
    }
  ],
  userCampaigns: [
    {
      id: 'auto-u1', name: 'Car Care Pays Back', type: 'user',
      painPoint: 'Car maintenance feels like a pure expense',
      nuqtaSolution: 'Earn coins on every car wash, oil change, and service',
      thesis: 'Target car owners. Position car care as reward-earning activity.',
      channels: [
        { channel: 'Instagram', tactic: 'Car care + rewards content', budget: 'AED 1,500' },
        { channel: 'Push notifications', tactic: 'Service reminders with coin incentives', budget: 'AED 500' },
        { channel: 'Partner locations', tactic: 'In-store promotion at auto services', budget: 'AED 400' }
      ],
      creativeAssets: ['Car care coin calculator', 'Annual earnings projection', 'Clean car + coins visual'],
      messaging: { headline: 'Your Car Wash Just Paid You Back.', body: 'Every car wash, every oil change, every service earns coins. That maintenance you have to do anyway? Now it rewards you.', cta: 'Earn on Every Car Service' },
      kpis: [{ metric: 'Auto transactions', target: '30,000/month' }, { metric: 'Repeat auto visits', target: '60% rate' }, { metric: 'Average auto spend', target: 'AED 120' }],
      timeline: 'Ongoing', budget: 'AED 2,400/week'
    },
    {
      id: 'auto-u2', name: 'Summer Car Survival', type: 'user',
      painPoint: 'Summer heat damages cars - need more frequent care',
      nuqtaSolution: 'Double coins on summer car care - protect your car, earn more',
      thesis: 'Target car owners during summer for increased care.',
      channels: [
        { channel: 'Push notifications', tactic: 'Summer car care reminders', budget: 'AED 600' },
        { channel: 'Instagram', tactic: 'Summer car care tips + rewards', budget: 'AED 1,200' },
        { channel: 'Email', tactic: 'Summer car protection guide', budget: 'AED 300' }
      ],
      creativeAssets: ['Summer car care checklist', 'Double coin summer badge', 'Heat damage prevention guide'],
      messaging: { headline: 'Dubai Summer Destroys Cars. Nuqta Rewards You for Protecting Yours.', body: 'AC service, tint check, interior protection - summer car care is essential. This season, earn double coins on everything that keeps your car alive.', cta: 'Protect Your Car, Earn Double' },
      kpis: [{ metric: 'Summer auto transactions', target: '40% increase' }, { metric: 'Double coin redemptions', target: '8,000' }, { metric: 'Summer car care adoption', target: '50% of users' }],
      timeline: 'June-August', budget: 'AED 2,100/week'
    }
  ]
};

// Remaining categories with essential campaigns
const clinicCampaigns: CategoryData = {
  id: 'clinic', name: 'Clinics & Medical', icon: Stethoscope, color: 'teal',
  painPoints: [
    { pain: '4,000+ private clinics in Dubai - fierce competition', solution: 'Stand out with rewards - patients earn on every visit' },
    { pain: '15% no-show rate - costs AED 500+ per empty slot', solution: '40% reduction - automated reminders + patients don\'t want to lose coins' },
    { pain: 'Insurance patients = low margins', solution: 'Attract cash-paying patients - 500K+ users preferring cash' },
    { pain: 'Patients skip follow-ups', solution: 'Automated checkup reminders - never forgotten' },
    { pain: 'Google/Instagram ads cost AED 100+ per lead', solution: 'Pay only 12-18% on actual visits' }
  ],
  merchantCampaigns: [
    { id: 'clinic-m1', name: 'Reduce No-Shows', type: 'merchant', painPoint: '15% no-show rate costs AED 500+ per empty appointment', nuqtaSolution: '40% reduction through automated reminders + coin incentives', thesis: 'Target clinics with high no-show rates. Position Nuqta as attendance optimizer.', channels: [{ channel: 'Healthcare events', tactic: 'Medical practice conferences', budget: 'AED 2,000' }, { channel: 'LinkedIn', tactic: 'Clinic management content', budget: 'AED 1,000' }], creativeAssets: ['No-show cost calculator', 'Reminder system demo', 'Attendance improvement stats'], messaging: { headline: 'Every No-Show Costs You AED 500+. Cut Them by 40%.', body: 'Patients forget appointments. Nuqta reminders + coin incentives cut no-shows by 40%. Fill those empty slots.', cta: 'Stop Losing Money to No-Shows' }, kpis: [{ metric: 'Clinics contacted', target: '20/month' }, { metric: 'No-show reduction', target: '40%' }], timeline: 'Ongoing', budget: 'AED 3,000/week' }
  ],
  userCampaigns: [
    { id: 'clinic-u1', name: 'Health Checkups Rewarded', type: 'user', painPoint: 'People skip regular checkups', nuqtaSolution: 'Earn coins on dental cleanings, eye exams, health checkups', thesis: 'Incentivize preventive health through rewards.', channels: [{ channel: 'Push notifications', tactic: 'Health checkup reminders', budget: 'AED 800' }, { channel: 'Instagram', tactic: 'Preventive health content', budget: 'AED 1,200' }], creativeAssets: ['Health checkup guide', 'Coin earning on health', 'Annual checkup calendar'], messaging: { headline: 'Your Annual Checkup Just Got More Rewarding.', body: 'Dental cleaning, eye exam, health checkup - all the things you should do anyway now earn you coins.', cta: 'Book Your Checkup, Earn Coins' }, kpis: [{ metric: 'Health transactions', target: '15,000/month' }, { metric: 'Checkup bookings', target: '5,000/month' }], timeline: 'Ongoing', budget: 'AED 2,000/week' }
  ]
};

const petCampaigns: CategoryData = {
  id: 'pet', name: 'Pet Services', icon: PawPrint, color: 'amber',
  painPoints: [
    { pain: 'Pet owners forget grooming schedules', solution: 'Automated reminders every 4-6 weeks' },
    { pain: 'Mobile groomers steal customers', solution: 'In-store rewards they can\'t match' },
    { pain: 'Summer pet travel crisis - pet hotels empty', solution: 'Staycation campaigns - target residents who stay' }
  ],
  merchantCampaigns: [
    { id: 'pet-m1', name: 'Grooming Reminders', type: 'merchant', painPoint: 'Pet owners forget grooming schedules - dogs go 8+ weeks without grooming', nuqtaSolution: 'Automated reminders every 4-6 weeks sent automatically', thesis: 'Help pet groomers maintain regular customer visits.', channels: [{ channel: 'Pet industry events', tactic: 'Pet grooming conferences', budget: 'AED 1,500' }, { channel: 'Direct outreach', tactic: 'Visit pet grooming locations', budget: 'AED 800' }], creativeAssets: ['Grooming schedule reminder', 'Customer retention data', 'App notification examples'], messaging: { headline: 'Pet Owners Forget Grooming. Their App Doesn\'t.', body: 'Automatic reminders every 4-6 weeks bring pets back for regular grooming. Never lose a customer to forgetfulness.', cta: 'Never Lose a Grooming Appointment' }, kpis: [{ metric: 'Groomers contacted', target: '15/month' }, { metric: 'Reminder adoption', target: '80%' }], timeline: 'Ongoing', budget: 'AED 2,300/week' }
  ],
  userCampaigns: [
    { id: 'pet-u1', name: 'Pampered Pets, Rewarded Owners', type: 'user', painPoint: 'Pet care is expensive', nuqtaSolution: 'Earn coins on grooming, vet visits, pet supplies', thesis: 'Target pet owners for regular care rewards.', channels: [{ channel: 'Instagram', tactic: 'Pet content with rewards', budget: 'AED 1,500' }, { channel: 'Push notifications', tactic: 'Grooming reminders', budget: 'AED 500' }], creativeAssets: ['Pet care coin guide', 'Grooming rewards tracker', 'Happy pet visuals'], messaging: { headline: 'Your Fur Baby Deserves Pampering. You Deserve Rewards.', body: 'Every grooming session, every vet visit, every bag of premium food earns coins. Spoil your pet, reward yourself.', cta: 'Earn on Pet Care' }, kpis: [{ metric: 'Pet transactions', target: '10,000/month' }, { metric: 'Repeat pet visits', target: '70%' }], timeline: 'Ongoing', budget: 'AED 2,000/week' }
  ]
};

const laundryCampaigns: CategoryData = {
  id: 'laundry', name: 'Laundry & Dry Cleaning', icon: ShirtIcon, color: 'cyan',
  painPoints: [
    { pain: 'Washmen/Laundryheap taking 20-30% AND stealing customers', solution: 'Only 10-15% commission AND you keep relationships' },
    { pain: '2,000+ laundries in Dubai - zero differentiation', solution: 'Coins ARE the differentiator' },
    { pain: 'Price war to the bottom', solution: 'Compete on value, not price' }
  ],
  merchantCampaigns: [
    { id: 'laundry-m1', name: 'Beat Delivery Apps', type: 'merchant', painPoint: 'Washmen/Laundryheap take 20-30% and steal your customers', nuqtaSolution: 'Only 10-15% commission AND you keep customer relationships', thesis: 'Target laundries dependent on delivery apps.', channels: [{ channel: 'Door-to-door', tactic: 'Visit neighborhood laundries', budget: 'AED 1,000' }, { channel: 'WhatsApp', tactic: 'Direct owner outreach', budget: 'AED 300' }], creativeAssets: ['Commission comparison', 'Customer ownership diagram'], messaging: { headline: 'Washmen Takes 25% AND Your Customers. There\'s a Better Way.', body: 'Delivery apps cost you 20-30% AND own the relationship. Nuqta is 10-15% and YOU own every customer.', cta: 'Own Your Laundry Customers' }, kpis: [{ metric: 'Laundries contacted', target: '30/month' }, { metric: 'Partners signed', target: '5/month' }], timeline: 'Ongoing', budget: 'AED 1,300/week' }
  ],
  userCampaigns: [
    { id: 'laundry-u1', name: 'Clean Clothes, Coin Rewards', type: 'user', painPoint: 'Laundry is a necessary expense', nuqtaSolution: 'Earn coins on dry cleaning, laundry, alterations', thesis: 'Target regular laundry users.', channels: [{ channel: 'Push notifications', tactic: 'Weekly laundry reminders', budget: 'AED 400' }, { channel: 'In-app', tactic: 'Laundry discovery', budget: 'AED 300' }], creativeAssets: ['Laundry coin calculator', 'Weekly savings projection'], messaging: { headline: 'That Weekly Laundry Run Just Got Rewarding.', body: 'Dry cleaning, laundry, alterations - everything you need done anyway now earns coins.', cta: 'Earn on Laundry' }, kpis: [{ metric: 'Laundry transactions', target: '20,000/month' }], timeline: 'Ongoing', budget: 'AED 700/week' }
  ]
};

const supermarketCampaigns: CategoryData = {
  id: 'supermarket', name: 'Supermarkets & Grocery', icon: ShoppingCart, color: 'green',
  painPoints: [
    { pain: 'Talabat Mart/Noon Minutes killing walk-ins', solution: 'Coins make in-store worth it' },
    { pain: 'Thin margins 15-25%', solution: 'BRANDS fund the rewards - zero cost to store' },
    { pain: 'Customer loyalty = price only', solution: 'Coins create switching cost' }
  ],
  merchantCampaigns: [
    { id: 'super-m1', name: 'Beat Quick Commerce', type: 'merchant', painPoint: 'Talabat Mart/Noon Minutes killing walk-ins with 15-minute delivery', nuqtaSolution: 'Coins make in-store shopping worth it - quick commerce can\'t offer rewards', thesis: 'Help supermarkets compete against quick commerce.', channels: [{ channel: 'Supermarket visits', tactic: 'Target neighborhood grocery stores', budget: 'AED 1,200' }, { channel: 'Industry groups', tactic: 'Grocery retail associations', budget: 'AED 600' }], creativeAssets: ['Quick commerce competition analysis', 'In-store advantage framework'], messaging: { headline: 'Noon Minutes Delivers in 15. You Deliver Rewards.', body: 'Quick commerce is fast but rewards-free. In-store shopping with Nuqta earns coins they can\'t match.', cta: 'Win Back Your Walk-Ins' }, kpis: [{ metric: 'Supermarkets contacted', target: '20/month' }, { metric: 'Partners signed', target: '4/month' }], timeline: 'Ongoing', budget: 'AED 1,800/week' }
  ],
  userCampaigns: [
    { id: 'super-u1', name: 'Grocery Shopping Rewards', type: 'user', painPoint: 'Grocery shopping is routine expense', nuqtaSolution: 'Earn coins on every grocery trip', thesis: 'Target regular grocery shoppers.', channels: [{ channel: 'Push notifications', tactic: 'Weekly shopping reminders', budget: 'AED 500' }, { channel: 'In-app', tactic: 'Grocery store discovery', budget: 'AED 300' }], creativeAssets: ['Weekly grocery savings', 'Shopping coin calculator'], messaging: { headline: 'Your Weekly Grocery Run Now Earns Rewards.', body: 'Every trip to the supermarket earns coins. Those groceries you buy anyway? Now they pay you back.', cta: 'Shop and Earn' }, kpis: [{ metric: 'Grocery transactions', target: '50,000/month' }], timeline: 'Ongoing', budget: 'AED 800/week' }
  ]
};

const goldCampaigns: CategoryData = {
  id: 'gold', name: 'Gold & Jewelry', icon: Gem, color: 'yellow',
  painPoints: [
    { pain: 'Paper-thin margins 8-12%', solution: 'Only 5-8% commission - sustainable for gold' },
    { pain: '300+ gold shops in Gold Souk - brutal competition', solution: 'Stand out with rewards' },
    { pain: 'Seasonal dependency - festivals or dead', solution: 'Diwali/Eid campaigns with bonus coins' }
  ],
  merchantCampaigns: [
    { id: 'gold-m1', name: 'Festival Season Boost', type: 'merchant', painPoint: 'Seasonal dependency - Diwali, Eid, wedding season or dead', nuqtaSolution: 'Diwali/Eid campaigns with bonus coins boost traffic', thesis: 'Help jewelry stores maximize festival seasons.', channels: [{ channel: 'Gold Souk visits', tactic: 'Door-to-door in jewelry districts', budget: 'AED 1,500' }, { channel: 'Festival campaigns', tactic: 'Pre-Diwali/Eid outreach', budget: 'AED 1,000' }], creativeAssets: ['Festival campaign calendar', 'Bonus coin examples'], messaging: { headline: 'Diwali Rush Is Great. But What About the Other 10 Months?', body: 'Festival seasons are packed, but they don\'t last. Nuqta coins bring customers year-round, not just during Diwali.', cta: 'Get Year-Round Gold Traffic' }, kpis: [{ metric: 'Jewelry stores contacted', target: '15/month' }, { metric: 'Festival campaigns', target: '10' }], timeline: 'Festival-focused', budget: 'AED 2,500/week' }
  ],
  userCampaigns: [
    { id: 'gold-u1', name: 'Gold Rewards', type: 'user', painPoint: 'Gold purchases are major investments', nuqtaSolution: 'Earn coins on gold and jewelry purchases', thesis: 'Target gold buyers.', channels: [{ channel: 'Festival campaigns', tactic: 'Diwali/Eid gold promotions', budget: 'AED 1,500' }, { channel: 'Instagram', tactic: 'Jewelry content', budget: 'AED 1,000' }], creativeAssets: ['Gold purchase rewards', 'Festival buying guide'], messaging: { headline: 'That Gold Purchase Just Got More Golden.', body: 'Buying gold for Diwali? Eid? Wedding? Earn coins on every purchase. Big investment, bigger rewards.', cta: 'Earn on Gold' }, kpis: [{ metric: 'Gold transactions', target: '5,000/month' }], timeline: 'Festival-focused', budget: 'AED 2,500/week' }
  ]
};

const electronicsCampaigns: CategoryData = {
  id: 'electronics', name: 'Electronics & Tech', icon: Smartphone, color: 'indigo',
  painPoints: [
    { pain: 'Amazon/Noon crushing retail', solution: 'In-store rewards online can\'t match' },
    { pain: 'Paper-thin margins 5-15%', solution: 'Only 5-8% commission' },
    { pain: 'DSF/Gitex conditioning - wait for festivals', solution: 'Bonus coins drive traffic NOW' }
  ],
  merchantCampaigns: [
    { id: 'elec-m1', name: 'Beat Online Retail', type: 'merchant', painPoint: 'Amazon/Noon crushing retail with same-day delivery and better prices', nuqtaSolution: 'In-store rewards that online can\'t match - coins close the deal', thesis: 'Help electronics stores compete against online.', channels: [{ channel: 'Computer Plaza visits', tactic: 'Door-to-door in electronics districts', budget: 'AED 1,200' }, { channel: 'Industry events', tactic: 'Tech retail conferences', budget: 'AED 800' }], creativeAssets: ['Online vs in-store comparison', 'Coin closing technique'], messaging: { headline: 'Customers Check Amazon While Standing in Your Store. Here\'s How to Win.', body: 'They\'re price-checking on their phone. Add coin rewards and close the deal - that\'s value Amazon can\'t match.', cta: 'Win Against Online' }, kpis: [{ metric: 'Electronics stores contacted', target: '20/month' }, { metric: 'Partners signed', target: '4/month' }], timeline: 'Ongoing', budget: 'AED 2,000/week' }
  ],
  userCampaigns: [
    { id: 'elec-u1', name: 'Tech Purchases Rewarded', type: 'user', painPoint: 'Electronics are expensive', nuqtaSolution: 'Earn coins on phones, laptops, accessories', thesis: 'Target tech buyers.', channels: [{ channel: 'Push notifications', tactic: 'New product launch alerts', budget: 'AED 600' }, { channel: 'Instagram', tactic: 'Tech reviews with rewards', budget: 'AED 1,000' }], creativeAssets: ['Tech purchase rewards', 'Upgrade cycle guide'], messaging: { headline: 'That New iPhone Just Got Better.', body: 'Buying tech? Earn coins on every gadget, accessory, and upgrade. Your next purchase pays back.', cta: 'Earn on Tech' }, kpis: [{ metric: 'Electronics transactions', target: '15,000/month' }], timeline: 'Ongoing', budget: 'AED 1,600/week' }
  ]
};

const pharmacyCampaigns: CategoryData = {
  id: 'pharmacy', name: 'Pharmacy & Health', icon: Pill, color: 'red',
  painPoints: [
    { pain: 'Aster/Life chains dominate - 70% market share', solution: 'Coins differentiate YOUR pharmacy' },
    { pain: 'Regulated prescription margins', solution: 'Only 5-8% commission - sustainable' },
    { pain: 'Wellness/supplements need push to sell', solution: 'Bonus coins on high-margin products' }
  ],
  merchantCampaigns: [
    { id: 'pharm-m1', name: 'Differentiate From Chains', type: 'merchant', painPoint: 'Aster/Life/BinSina chains dominate with 70% market share', nuqtaSolution: 'Coins differentiate YOUR pharmacy - rewards chains can\'t match locally', thesis: 'Help independent pharmacies compete.', channels: [{ channel: 'Pharmacy visits', tactic: 'Target independent pharmacies', budget: 'AED 1,000' }, { channel: 'Healthcare events', tactic: 'Pharmacy conferences', budget: 'AED 800' }], creativeAssets: ['Chain vs independent comparison', 'Local loyalty advantage'], messaging: { headline: 'Aster Has 200 Locations. You Have Coin Rewards.', body: 'You can\'t out-location the chains. But you can out-reward them. Coins create loyalty they can\'t match.', cta: 'Beat the Chains With Rewards' }, kpis: [{ metric: 'Independent pharmacies contacted', target: '15/month' }, { metric: 'Partners signed', target: '3/month' }], timeline: 'Ongoing', budget: 'AED 1,800/week' }
  ],
  userCampaigns: [
    { id: 'pharm-u1', name: 'Health Rewards', type: 'user', painPoint: 'Pharmacy visits are health necessities', nuqtaSolution: 'Earn coins on prescriptions, supplements, wellness', thesis: 'Target regular pharmacy customers.', channels: [{ channel: 'Push notifications', tactic: 'Refill reminders', budget: 'AED 500' }, { channel: 'In-app', tactic: 'Pharmacy discovery', budget: 'AED 300' }], creativeAssets: ['Pharmacy coin guide', 'Refill reminder system'], messaging: { headline: 'Your Prescriptions Now Earn Rewards.', body: 'Every pharmacy visit, every refill, every vitamin earns coins. Health expenses that pay you back.', cta: 'Earn on Health' }, kpis: [{ metric: 'Pharmacy transactions', target: '25,000/month' }], timeline: 'Ongoing', budget: 'AED 800/week' }
  ]
};

const fashionCampaigns: CategoryData = {
  id: 'fashion', name: 'Fashion & Apparel', icon: ShoppingBag, color: 'rose',
  painPoints: [
    { pain: 'Namshi/Ounass taking over - online grew 300% post-COVID', solution: 'In-store rewards online can\'t match' },
    { pain: 'DSF/Eid sale conditioning - wait for 70% off', solution: 'Bonus coins drive traffic NOW' },
    { pain: 'Seasonal inventory pressure', solution: 'Double coins on last season stock' }
  ],
  merchantCampaigns: [
    { id: 'fash-m1', name: 'Beat Online Fashion', type: 'merchant', painPoint: 'Namshi/Ounass/Amazon taking over - online fashion grew 300% post-COVID', nuqtaSolution: 'In-store rewards that online shopping can\'t match', thesis: 'Help fashion stores compete against online.', channels: [{ channel: 'Mall visits', tactic: 'Target fashion boutiques', budget: 'AED 1,500' }, { channel: 'Fashion events', tactic: 'Retail fashion networking', budget: 'AED 1,000' }], creativeAssets: ['Online vs in-store experience', 'Try-on + rewards advantage'], messaging: { headline: 'Namshi Is Convenient. But They Can\'t Offer Coin Rewards.', body: 'Online shopping is easy. But in-store means trying before buying AND earning coins. That\'s the difference.', cta: 'Win Fashion Shoppers Back' }, kpis: [{ metric: 'Fashion stores contacted', target: '25/month' }, { metric: 'Partners signed', target: '5/month' }], timeline: 'Ongoing', budget: 'AED 2,500/week' }
  ],
  userCampaigns: [
    { id: 'fash-u1', name: 'Fashion Rewards', type: 'user', painPoint: 'Fashion shopping is about style and deals', nuqtaSolution: 'Earn coins on every fashion purchase', thesis: 'Target fashion shoppers.', channels: [{ channel: 'Instagram', tactic: 'Fashion content with rewards', budget: 'AED 2,000' }, { channel: 'Push notifications', tactic: 'New collection alerts', budget: 'AED 500' }], creativeAssets: ['Fashion coin guide', 'Style rewards tracker'], messaging: { headline: 'Look Good. Earn Coins.', body: 'Every outfit, every accessory, every fashion purchase earns rewards. Style that pays back.', cta: 'Shop Fashion, Earn Coins' }, kpis: [{ metric: 'Fashion transactions', target: '30,000/month' }], timeline: 'Ongoing', budget: 'AED 2,500/week' }
  ]
};

const entertainmentCampaigns: CategoryData = {
  id: 'entertainment', name: 'Entertainment & Leisure', icon: Gamepad2, color: 'violet',
  painPoints: [
    { pain: 'Weekend packed, weekdays dead - 80% revenue in 2 days', solution: 'Double coins on Tue-Wed balance traffic' },
    { pain: 'Netflix/Disney+ killing cinema', solution: 'Coins make leaving home worth it' },
    { pain: 'Entertainer BOGO conditioning', solution: 'Cashback preserves pricing' }
  ],
  merchantCampaigns: [
    { id: 'ent-m1', name: 'Fix Weekday Dead Zone', type: 'merchant', painPoint: 'Weekend packed, weekdays dead - 80% of revenue in just 2 days', nuqtaSolution: 'Double coins on Tue-Wed incentivize weekday visits', thesis: 'Help entertainment venues balance weekly traffic.', channels: [{ channel: 'Venue visits', tactic: 'Target entertainment venues', budget: 'AED 1,500' }, { channel: 'Mall partnerships', tactic: 'Entertainment district outreach', budget: 'AED 1,000' }], creativeAssets: ['Weekly traffic analysis', 'Double coin campaign examples'], messaging: { headline: '80% of Revenue in 2 Days. What About the Other 5?', body: 'Weekends are packed, weekdays are empty. Double coin campaigns shift traffic to when you need it most.', cta: 'Fill Your Weekdays' }, kpis: [{ metric: 'Entertainment venues contacted', target: '15/month' }, { metric: 'Weekday increase', target: '35%' }], timeline: 'Ongoing', budget: 'AED 2,500/week' }
  ],
  userCampaigns: [
    { id: 'ent-u1', name: 'Fun That Pays', type: 'user', painPoint: 'Entertainment is discretionary spending', nuqtaSolution: 'Earn coins on movies, games, activities', thesis: 'Target entertainment seekers.', channels: [{ channel: 'Instagram', tactic: 'Entertainment content with rewards', budget: 'AED 1,500' }, { channel: 'Push notifications', tactic: 'Weekend activity suggestions', budget: 'AED 500' }], creativeAssets: ['Entertainment coin guide', 'Weekend activity discovery'], messaging: { headline: 'Movies, Games, Fun - All Earning You Coins.', body: 'Every entertainment activity earns rewards. Have fun AND get paid back for it.', cta: 'Earn on Fun' }, kpis: [{ metric: 'Entertainment transactions', target: '20,000/month' }], timeline: 'Ongoing', budget: 'AED 2,000/week' }
  ]
};

// EVENTS & EXHIBITIONS - Comprehensive Campaigns for Global Village, GITEX, Concerts, etc.
const eventsCampaigns: CategoryData = {
  id: 'events', name: 'Events & Exhibitions', icon: CalendarDays, color: 'purple',
  painPoints: [
    // Event Organizer Pain Points
    { pain: '70% of visitors just browse - don\'t make purchases', solution: 'Coins create spending incentive - minimum AED 300-500 to unlock' },
    { pain: 'Merchants don\'t renew if they don\'t make money', solution: 'Proven sales data makes renewal easy' },
    { pain: 'No spending data - can\'t prove ROI to sponsors', solution: 'Real-time dashboard tracks everything' },
    { pain: 'One-time visitors - no retargeting after event', solution: 'All visitors become Nuqta users forever' },
    { pain: 'Low average spend - AED 50-100 vs AED 500+ potential', solution: 'Coin unlock threshold guarantees higher basket' },
    { pain: 'F&B competition with nearby malls', solution: 'Event-only coins work only at event merchants' },
    { pain: 'Peak hour chaos - no off-peak incentives', solution: 'Double coins during slow hours distribute traffic' },
    { pain: 'Sponsor ROI questions - can\'t quantify value', solution: 'Co-branded coins with tracked engagement' },
    { pain: 'Staff theft concerns - cash handling issues', solution: 'App-based logging with full audit trail' },
    { pain: 'Weather dependency - outdoor events lose visitors', solution: 'Push notifications + bonus coins for bad weather days' },
    // Merchant Pain Points at Events
    { pain: 'High booth fees AED 50K-500K - uncertain ROI', solution: 'Pay only 5-8% on sales, no upfront cost' },
    { pain: 'Tire-kickers collect brochures but don\'t buy', solution: 'AED 500 minimum spend motivates real purchases' },
    { pain: 'No lead capture - can\'t follow up', solution: 'Every customer logged with phone, email, purchase history' },
    { pain: 'Competition from neighboring booths', solution: 'Bonus coins differentiate your booth' },
    { pain: 'Post-event silence - can\'t re-engage visitors', solution: 'Push notifications reach customers after event ends' }
  ],
  merchantCampaigns: [
    // EVENT ORGANIZER CAMPAIGNS (targeting Global Village, GITEX, ATM, etc.)
    {
      id: 'event-org-1', name: 'Convert Browsers to Buyers', type: 'merchant',
      painPoint: '70% of visitors just browse - don\'t make purchases at exhibitor booths',
      nuqtaSolution: 'Coins create spending incentive - visitors MUST spend AED 300-500 to unlock their coins',
      thesis: 'Target major event organizers like Global Village, DWTC (GITEX, ATM, Gulfood). Show them how Nuqta guarantees visitor spending.',
      channels: [
        { channel: 'Executive outreach', tactic: 'Direct meetings with Global Village, DWTC leadership', budget: 'AED 5,000' },
        { channel: 'Case study content', tactic: 'Create mock ROI projections for their visitor numbers', budget: 'AED 2,000' },
        { channel: 'Industry conferences', tactic: 'MICE industry events presentation', budget: 'AED 3,000' }
      ],
      creativeAssets: ['Browser to buyer conversion funnel', 'Minimum spend unlock system demo', 'Global Village visitor projection', 'Merchant revenue increase calculator'],
      messaging: { headline: '7 Million Visitors. 70% Leave Without Spending. That\'s 5 Million Lost Customers.', body: 'Global Village sees 7M+ visitors per season. 70% browse without buying. Nuqta Event Coins require AED 500 minimum spend to unlock - converting browsers into guaranteed spenders. Your merchants make money. They renew next year.', cta: 'See How Nuqta Transforms Visitor Spending' },
      kpis: [{ metric: 'Major event organizers contacted', target: '5/quarter' }, { metric: 'Event partnerships signed', target: '2/year' }, { metric: 'Browser to buyer conversion', target: '40%' }],
      timeline: 'Year-round - events have different seasons', budget: 'AED 10,000/week during pitch periods'
    },
    {
      id: 'event-org-2', name: 'Merchant Renewal Guarantee', type: 'merchant',
      painPoint: 'Merchants don\'t renew - if they don\'t make money, they won\'t come back next year',
      nuqtaSolution: 'Proven sales data shows exactly how much Nuqta drove, making renewal pitch easy',
      thesis: 'Address the biggest event organizer fear - losing exhibitors. Position Nuqta as merchant success guarantee.',
      channels: [
        { channel: 'Event organizer meetings', tactic: 'Present merchant retention strategy', budget: 'AED 3,000' },
        { channel: 'Merchant success stories', tactic: 'Document before/after case studies', budget: 'AED 2,000' },
        { channel: 'Industry content', tactic: 'Publish research on event merchant retention', budget: 'AED 1,500' }
      ],
      creativeAssets: ['Merchant ROI dashboard demo', 'Year-over-year renewal rate comparison', 'Exhibitor satisfaction survey template', 'Revenue attribution report'],
      messaging: { headline: 'Your Merchants Made Money. Watch Them Line Up for Next Year.', body: 'When merchants see their Nuqta dashboard showing exactly how much they earned, renewal becomes automatic. "I made AED 200K through Nuqta visitors" beats any sales pitch.', cta: 'Guarantee Merchant Renewals' },
      kpis: [{ metric: 'Merchant retention rate', target: '85% vs industry 60%' }, { metric: 'Renewal conversations initiated by merchants', target: '50%' }],
      timeline: 'Post-event follow-up period', budget: 'AED 6,500/week'
    },
    {
      id: 'event-org-3', name: 'Sponsor ROI Dashboard', type: 'merchant',
      painPoint: 'Sponsor ROI questions - can\'t quantify brand exposure value',
      nuqtaSolution: 'Co-branded coins with tracked engagement - sponsors see exactly what they got',
      thesis: 'Help event organizers win and retain sponsors with quantifiable ROI data.',
      channels: [
        { channel: 'Sponsor acquisition deck', tactic: 'Create Nuqta sponsor package for events', budget: 'AED 3,000' },
        { channel: 'Brand partnerships', tactic: 'Approach FMCG brands for event coin sponsorship', budget: 'AED 4,000' },
        { channel: 'Industry content', tactic: 'Publish sponsor ROI research', budget: 'AED 1,500' }
      ],
      creativeAssets: ['Co-branded coin examples', 'Sponsor engagement dashboard', 'Brand recall study template', 'CPE (cost per engagement) calculator'],
      messaging: { headline: 'Your Sponsors Want Numbers. Give Them a Dashboard.', body: '"Coca-Cola Event Coins" - every time a visitor earns or spends, they engage with the brand. Track impressions, redemptions, and purchases. Sponsors see exactly what they paid for.', cta: 'Quantify Sponsor ROI' },
      kpis: [{ metric: 'Sponsor packages sold', target: 'AED 500K/event' }, { metric: 'Sponsor renewal rate', target: '90%' }, { metric: 'CPE reduction', target: '40% vs traditional sponsorship' }],
      timeline: 'Pre-event sponsor acquisition period', budget: 'AED 8,500/week'
    },
    {
      id: 'event-org-4', name: 'Build Your Visitor Database', type: 'merchant',
      painPoint: 'One-time visitors - no way to retarget or re-engage after event ends',
      nuqtaSolution: 'All visitors become Nuqta users - retarget for next year\'s event, sponsor products, partner offers',
      thesis: 'Position Nuqta as database builder for events. Visitors become owned audience.',
      channels: [
        { channel: 'Event organizer meetings', tactic: 'Database growth strategy presentation', budget: 'AED 2,500' },
        { channel: 'Data monetization content', tactic: 'Show value of visitor database', budget: 'AED 1,500' },
        { channel: 'Case studies', tactic: 'Demonstrate retargeting success', budget: 'AED 1,000' }
      ],
      creativeAssets: ['Visitor database growth projection', 'Retargeting campaign examples', 'Data monetization opportunities', 'Next-year ticket sales funnel'],
      messaging: { headline: 'This Year\'s Visitors Are Next Year\'s Pre-Sales.', body: '7 million visitors become 7 million Nuqta users. Push notification: "Global Village 2026 tickets on sale - here\'s 50 bonus coins." Watch pre-sales explode.', cta: 'Own Your Visitor Database' },
      kpis: [{ metric: 'Visitor database capture rate', target: '80%' }, { metric: 'Next-year ticket pre-sales', target: '30% from database' }, { metric: 'Sponsor retargeting revenue', target: 'AED 1M+/event' }],
      timeline: 'During and post-event', budget: 'AED 5,000/week'
    },
    {
      id: 'event-org-5', name: 'Traffic Distribution Control', type: 'merchant',
      painPoint: 'Peak hour chaos - no way to incentivize off-peak visits',
      nuqtaSolution: 'Double coins during slow hours (2-5pm weekdays) distributes visitor traffic evenly',
      thesis: 'Help event organizers manage crowd flow and improve visitor experience.',
      channels: [
        { channel: 'Operations meetings', tactic: 'Present traffic management solution', budget: 'AED 2,000' },
        { channel: 'Crowd management content', tactic: 'Publish traffic distribution case study', budget: 'AED 1,200' },
        { channel: 'Technology demos', tactic: 'Show real-time traffic shifting capability', budget: 'AED 1,500' }
      ],
      creativeAssets: ['Hourly traffic heat map', 'Double coin campaign examples', 'Queue time reduction data', 'Visitor satisfaction improvement'],
      messaging: { headline: 'Friday 7PM: Chaos. Tuesday 3PM: Double Coins.', body: 'Push notifications shift traffic: "Visiting now? Earn DOUBLE coins until 5pm!" Reduce Friday evening crushes. Fill weekday afternoons. Better experience for everyone.', cta: 'Control Your Event Traffic' },
      kpis: [{ metric: 'Off-peak traffic increase', target: '40%' }, { metric: 'Peak hour reduction', target: '25%' }, { metric: 'Visitor satisfaction', target: '15% improvement' }],
      timeline: 'During event operations', budget: 'AED 4,700/week'
    },
    {
      id: 'event-org-6', name: 'Weather-Proof Your Event', type: 'merchant',
      painPoint: 'Weather dependency - outdoor events lose visitors in summer heat or rain',
      nuqtaSolution: 'Push notifications with bonus coins incentivize visits during bad weather or slow periods',
      thesis: 'Help outdoor events (Global Village, food festivals) manage weather impact.',
      channels: [
        { channel: 'Outdoor event targeting', tactic: 'Focus on Global Village, food festivals, markets', budget: 'AED 2,000' },
        { channel: 'Weather strategy content', tactic: 'Publish weather mitigation playbook', budget: 'AED 1,000' },
        { channel: 'Real-time demos', tactic: 'Show weather-triggered notification system', budget: 'AED 1,500' }
      ],
      creativeAssets: ['Weather bonus coin system', 'Rain day campaign examples', 'Hot afternoon incentive program', 'Attendance recovery data'],
      messaging: { headline: '40°C Outside? 3X Coins Inside.', body: 'Hot summer afternoon killing attendance? Push notification: "Beat the heat, earn 3X coins today only!" Weather-triggered campaigns rescue slow days.', cta: 'Weather-Proof Your Revenue' },
      kpis: [{ metric: 'Bad weather day recovery', target: '50% normal attendance' }, { metric: 'Weather campaign response rate', target: '30%' }, { metric: 'Revenue stabilization', target: '20% less variance' }],
      timeline: 'Weather-dependent periods', budget: 'AED 4,500/week'
    },
    // EXHIBITOR/MERCHANT CAMPAIGNS (targeting businesses that participate in events)
    {
      id: 'event-merch-1', name: 'Justify Your Booth Investment', type: 'merchant',
      painPoint: 'High booth fees AED 50K-500K with uncertain ROI',
      nuqtaSolution: 'Pay only 5-8% on actual sales through Nuqta - no upfront cost, pay when you earn',
      thesis: 'Target businesses considering event participation. Reduce their risk with performance-based model.',
      channels: [
        { channel: 'Exhibitor lists', tactic: 'Target businesses on past exhibitor lists', budget: 'AED 2,500' },
        { channel: 'Trade associations', tactic: 'Partner with industry associations', budget: 'AED 1,500' },
        { channel: 'LinkedIn', tactic: 'Target marketing managers of potential exhibitors', budget: 'AED 1,000' }
      ],
      creativeAssets: ['Booth ROI calculator', 'Pay-per-sale vs upfront comparison', 'Success story from similar exhibitor', 'Commission structure explanation'],
      messaging: { headline: 'AED 100K Booth Fee. Zero Sales Guarantee. Until Now.', body: 'GITEX booth: AED 100K upfront. Nuqta: 5-8% only when you sell. No sales? No fee. Turn uncertain booth investment into guaranteed ROI.', cta: 'Only Pay When You Sell' },
      kpis: [{ metric: 'Exhibitors onboarded', target: '50/major event' }, { metric: 'Average exhibitor sales', target: 'AED 150K' }, { metric: 'Exhibitor satisfaction', target: '90%' }],
      timeline: 'Pre-event exhibitor acquisition', budget: 'AED 5,000/week'
    },
    {
      id: 'event-merch-2', name: 'Kill the Tire-Kickers', type: 'merchant',
      painPoint: 'Visitors collect brochures but don\'t buy - tire-kickers everywhere',
      nuqtaSolution: 'AED 500 minimum spend threshold means visitors are motivated to buy, not just browse',
      thesis: 'Address exhibitor frustration with non-buying visitors. Position Nuqta as quality visitor filter.',
      channels: [
        { channel: 'Exhibitor outreach', tactic: 'Target frustrated past exhibitors', budget: 'AED 2,000' },
        { channel: 'Testimonials', tactic: 'Collect and share exhibitor success stories', budget: 'AED 1,000' },
        { channel: 'Event organizer partnership', tactic: 'Co-promote with event organizers', budget: 'AED 1,500' }
      ],
      creativeAssets: ['Tire-kicker vs buyer conversion', 'Minimum spend motivation diagram', 'Exhibitor testimonial videos', 'Before/after sales comparison'],
      messaging: { headline: 'Stop Handing Out 5,000 Brochures. Start Making 500 Sales.', body: 'Every Nuqta visitor needs to spend AED 500 to unlock their coins. They\'re not browsing - they\'re buying. Your booth becomes a sales machine, not a brochure stand.', cta: 'Convert Browsers to Buyers' },
      kpis: [{ metric: 'Visitor-to-buyer conversion', target: '40% vs 10% baseline' }, { metric: 'Average transaction value', target: 'AED 800' }, { metric: 'Brochure-to-sale ratio', target: '1:5 vs 1:100' }],
      timeline: 'During events', budget: 'AED 4,500/week'
    },
    {
      id: 'event-merch-3', name: 'Capture Every Lead', type: 'merchant',
      painPoint: 'No lead capture - can\'t follow up with interested visitors after event',
      nuqtaSolution: 'Every customer logged with phone, email, purchase history - your database forever',
      thesis: 'Address post-event follow-up challenge. Nuqta as lead capture system.',
      channels: [
        { channel: 'B2B exhibitor focus', tactic: 'Target B2B companies at trade shows', budget: 'AED 2,500' },
        { channel: 'CRM integration content', tactic: 'Show data export capabilities', budget: 'AED 1,000' },
        { channel: 'Follow-up success stories', tactic: 'Document post-event conversion rates', budget: 'AED 1,000' }
      ],
      creativeAssets: ['Lead capture flow diagram', 'CRM export demonstration', 'Follow-up email templates', 'Post-event conversion funnel'],
      messaging: { headline: 'Every GITEX Visitor Who Bought From You Is Now in Your CRM.', body: 'Name, email, phone, what they bought, how much they spent. Export to your CRM. Send follow-up offers. Turn event visitors into year-round customers.', cta: 'Capture Every Lead' },
      kpis: [{ metric: 'Lead capture rate', target: '100% of buyers' }, { metric: 'Post-event follow-up conversion', target: '20%' }, { metric: 'Customer lifetime value', target: '3x event purchase' }],
      timeline: 'During and post-event', budget: 'AED 4,500/week'
    },
    {
      id: 'event-merch-4', name: 'Stand Out From Neighbor Booths', type: 'merchant',
      painPoint: 'Competition from neighboring booths - similar products, no differentiation',
      nuqtaSolution: 'Bonus coins for your booth differentiate you from competitors',
      thesis: 'Help exhibitors win traffic from competing booths at the same event.',
      channels: [
        { channel: 'Pre-event outreach', tactic: 'Contact exhibitors before event starts', budget: 'AED 1,500' },
        { channel: 'Event floor presence', tactic: 'On-site exhibitor sign-up team', budget: 'AED 2,000' },
        { channel: 'Competitive content', tactic: 'Show booth traffic comparison data', budget: 'AED 800' }
      ],
      creativeAssets: ['Bonus coin booth signage', 'Traffic flow comparison', 'Competitive advantage framework', 'Booth differentiation guide'],
      messaging: { headline: '50 Food Stalls. Only YOURS Offers Bonus Coins.', body: 'Your neighbor sells the same thing. But visitors see YOUR sign: "Earn 3X Coins Here!" Guess which booth gets the traffic. Differentiate with rewards.', cta: 'Win More Booth Traffic' },
      kpis: [{ metric: 'Booth traffic increase', target: '50% vs neighbors' }, { metric: 'Bonus coin redemptions', target: '1,000/day' }, { metric: 'Competitive win rate', target: '70%' }],
      timeline: 'During events', budget: 'AED 4,300/week'
    },
    {
      id: 'event-merch-5', name: 'Post-Event Customer Engagement', type: 'merchant',
      painPoint: 'Post-event silence - can\'t re-engage visitors after event ends',
      nuqtaSolution: 'Push notifications reach your event customers year-round',
      thesis: 'Turn event visitors into year-round customers for exhibitors.',
      channels: [
        { channel: 'Post-event follow-up', tactic: 'Contact exhibitors after event', budget: 'AED 1,500' },
        { channel: 'Retention content', tactic: 'Publish visitor retention playbook', budget: 'AED 1,000' },
        { channel: 'Year-round engagement demos', tactic: 'Show ongoing customer engagement', budget: 'AED 1,000' }
      ],
      creativeAssets: ['Post-event campaign examples', 'Customer journey from event to store', 'Push notification templates', 'Year-round engagement calendar'],
      messaging: { headline: 'GITEX Ended. Your Customer Relationship Just Started.', body: '3 months after GITEX: "Remember that laptop you loved? It\'s 20% off + double coins this weekend." Turn event browsers into store customers.', cta: 'Keep Customers Year-Round' },
      kpis: [{ metric: 'Post-event engagement rate', target: '25%' }, { metric: 'Event-to-store conversion', target: '15%' }, { metric: 'Customer lifetime extension', target: '12 months' }],
      timeline: 'Post-event', budget: 'AED 3,500/week'
    }
  ],
  userCampaigns: [
    // USER ACQUISITION CAMPAIGNS FOR EVENTS
    {
      id: 'event-u1', name: 'Global Village Season Launch', type: 'user',
      painPoint: 'Users don\'t know about coin earning opportunities at events',
      nuqtaSolution: 'Discover all events where you can earn coins - Global Village, GITEX, concerts, exhibitions',
      thesis: 'Drive massive user engagement during Global Village season (Nov-Apr) and major events.',
      channels: [
        { channel: 'Push notifications', tactic: 'Event launch announcements to all users', budget: 'AED 3,000' },
        { channel: 'Instagram', tactic: 'Global Village content and influencer partnerships', budget: 'AED 5,000' },
        { channel: 'TikTok', tactic: 'Event experience videos with coin earning', budget: 'AED 3,000' },
        { channel: 'Email', tactic: 'Event guide and coin earning tips', budget: 'AED 500' }
      ],
      creativeAssets: ['Global Village coin guide', 'Event season calendar', 'Pavilion-by-pavilion earning guide', 'Best coin earning spots at GV'],
      messaging: { headline: 'Global Village Is Open. Your Coins Are Waiting.', body: 'Every pavilion. Every food stall. Every shop. All earning you coins. This season, make Global Village pay you back. AED 100 in Event Coins with entry - unlock with AED 500 spend.', cta: 'Start Earning at Global Village' },
      kpis: [{ metric: 'Event transactions', target: '500,000/season' }, { metric: 'Average event spend', target: 'AED 600' }, { metric: 'Event coin redemptions', target: 'AED 5M distributed' }],
      timeline: 'Global Village season (Nov-Apr)', budget: 'AED 11,500/week'
    },
    {
      id: 'event-u2', name: 'GITEX Tech Shopping', type: 'user',
      painPoint: 'Users want deals on electronics at GITEX',
      nuqtaSolution: 'Earn coins on every GITEX purchase - tech shopping that pays back',
      thesis: 'Drive user traffic to GITEX and tech exhibitions.',
      channels: [
        { channel: 'Push notifications', tactic: 'GITEX deal alerts with coin bonuses', budget: 'AED 2,000' },
        { channel: 'Instagram', tactic: 'Tech deals content', budget: 'AED 2,500' },
        { channel: 'In-app', tactic: 'GITEX exhibitor listings with coin rates', budget: 'AED 500' }
      ],
      creativeAssets: ['GITEX coin guide', 'Best tech deals with coins', 'Exhibitor coin rate comparison', 'Electronics earning calculator'],
      messaging: { headline: 'GITEX Deals + Nuqta Coins = Maximum Savings.', body: 'That laptop is already 30% off. Add coin earnings and it\'s basically free money. Every AED spent at GITEX earns coins. Stack the savings.', cta: 'Shop GITEX, Earn Coins' },
      kpis: [{ metric: 'GITEX transactions', target: '50,000' }, { metric: 'Average GITEX spend', target: 'AED 2,000' }, { metric: 'Electronics coins distributed', target: 'AED 1M' }],
      timeline: 'GITEX period (October)', budget: 'AED 5,000/week'
    },
    {
      id: 'event-u3', name: 'Concert & Festival Rewards', type: 'user',
      painPoint: 'Concert and festival experiences are expensive',
      nuqtaSolution: 'Earn coins on F&B and merchandise at concerts - entertainment that rewards',
      thesis: 'Target music lovers and festival-goers for coin earning on entertainment spending.',
      channels: [
        { channel: 'Event partnerships', tactic: 'On-site promotion at concerts', budget: 'AED 3,000' },
        { channel: 'Instagram', tactic: 'Concert experience content', budget: 'AED 2,000' },
        { channel: 'Push notifications', tactic: 'Concert-day coin bonus alerts', budget: 'AED 800' }
      ],
      creativeAssets: ['Concert coin earning guide', 'Festival rewards tracker', 'F&B coin locations at venues', 'Merchandise coin earning'],
      messaging: { headline: 'The Concert Is Amazing. The Coins Make It Better.', body: 'That AED 50 beer? Now it\'s earning you coins. That band t-shirt? More coins. Every purchase at concerts and festivals rewards you. Party smarter.', cta: 'Earn at Every Concert' },
      kpis: [{ metric: 'Concert transactions', target: '20,000/major event' }, { metric: 'Average concert spend', target: 'AED 300' }, { metric: 'Entertainment coins distributed', target: 'AED 500K/event' }],
      timeline: 'Concert and festival season', budget: 'AED 5,800/week'
    },
    {
      id: 'event-u4', name: 'Exhibition Discovery', type: 'user',
      painPoint: 'Users don\'t know which exhibitions are coin-earning',
      nuqtaSolution: 'Discover all exhibitions with Nuqta merchants - art, food, travel, and more',
      thesis: 'Drive user traffic to trade exhibitions and consumer shows.',
      channels: [
        { channel: 'In-app', tactic: 'Exhibition discovery section with dates', budget: 'AED 800' },
        { channel: 'Push notifications', tactic: 'Upcoming exhibition alerts', budget: 'AED 600' },
        { channel: 'Email', tactic: 'Monthly exhibition guide', budget: 'AED 300' }
      ],
      creativeAssets: ['Exhibition calendar', 'Nuqta merchant exhibitor list', 'Best finds at each exhibition', 'Coin earning breakdown by show'],
      messaging: { headline: 'Every Exhibition. Every Merchant. All Earning Coins.', body: 'Arabian Travel Market, Gulfood, Art Dubai - every major exhibition has Nuqta merchants. Discover amazing products AND earn coins while you explore.', cta: 'Explore Exhibitions' },
      kpis: [{ metric: 'Exhibition transactions', target: '30,000/quarter' }, { metric: 'Exhibition discovery clicks', target: '100,000/quarter' }, { metric: 'Average exhibition spend', target: 'AED 500' }],
      timeline: 'Year-round', budget: 'AED 1,700/week'
    },
    {
      id: 'event-u5', name: 'Seasonal Event Guide', type: 'user',
      painPoint: 'Users miss out on seasonal events with coin earning',
      nuqtaSolution: 'Complete guide to Ramadan tents, DSF events, Diwali markets with coin rewards',
      thesis: 'Target users during seasonal festivals and events.',
      channels: [
        { channel: 'Push notifications', tactic: 'Seasonal event launch alerts', budget: 'AED 1,000' },
        { channel: 'Instagram', tactic: 'Seasonal content (DSF, Ramadan, Diwali)', budget: 'AED 2,000' },
        { channel: 'In-app', tactic: 'Seasonal events section', budget: 'AED 500' }
      ],
      creativeAssets: ['Ramadan tent coin guide', 'DSF shopping rewards', 'Diwali market earning guide', 'Seasonal bonus coin calendar'],
      messaging: { headline: 'Ramadan. DSF. Diwali. Every Season Earns.', body: 'Iftar at a Ramadan tent? Coins. DSF shopping? More coins. Diwali gold shopping? Even more coins. Every seasonal celebration rewards you.', cta: 'Earn on Every Season' },
      kpis: [{ metric: 'Seasonal event transactions', target: '200,000/year' }, { metric: 'Seasonal bonus redemptions', target: 'AED 2M distributed' }, { metric: 'Seasonal engagement', target: '60% of users' }],
      timeline: 'Seasonal peaks (Ramadan, DSF, Diwali)', budget: 'AED 3,500/week'
    }
  ]
};

const allCategories: CategoryData[] = [
  cafeCampaigns, salonCampaigns, gymCampaigns, hotelCampaigns, autoCampaigns,
  clinicCampaigns, petCampaigns, laundryCampaigns, supermarketCampaigns,
  goldCampaigns, electronicsCampaigns, pharmacyCampaigns, fashionCampaigns,
  entertainmentCampaigns, eventsCampaigns
];

function CategoryCampaignsContent() {
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

  const CampaignCard = ({ campaign }: { campaign: Campaign }) => {
    const isExpanded = expandedCampaign === campaign.id;

    return (
      <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
        <button
          onClick={() => setExpandedCampaign(isExpanded ? null : campaign.id)}
          className="w-full p-4 flex items-start justify-between hover:bg-white/5 transition-colors"
        >
          <div className="flex-1 text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                campaign.type === 'merchant' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'
              }`}>
                {campaign.type === 'merchant' ? 'Merchant Acquisition' : 'User Acquisition'}
              </span>
            </div>
            <h3 className="text-white font-bold mb-1">{campaign.name}</h3>
            <p className="text-red-400 text-sm mb-1">Pain: {campaign.painPoint}</p>
            <p className="text-emerald-400 text-sm">Solution: {campaign.nuqtaSolution}</p>
          </div>
          {isExpanded ? <ChevronDown className="text-slate-400" /> : <ChevronRight className="text-slate-400" />}
        </button>

        {isExpanded && (
          <div className="px-4 pb-4 border-t border-white/10 pt-4 space-y-4">
            {/* Thesis */}
            <div>
              <h4 className="text-slate-400 text-xs font-semibold uppercase mb-2">Campaign Thesis</h4>
              <p className="text-slate-300 text-sm">{campaign.thesis}</p>
            </div>

            {/* Channels */}
            <div>
              <h4 className="text-slate-400 text-xs font-semibold uppercase mb-2">Channels & Tactics</h4>
              <div className="space-y-2">
                {campaign.channels.map((ch, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white font-semibold text-sm">{ch.channel}</span>
                      <span className="text-emerald-400 text-xs">{ch.budget}</span>
                    </div>
                    <p className="text-slate-400 text-xs">{ch.tactic}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Creative Assets */}
            <div>
              <h4 className="text-slate-400 text-xs font-semibold uppercase mb-2">Creative Assets Needed</h4>
              <div className="flex flex-wrap gap-2">
                {campaign.creativeAssets.map((asset, idx) => (
                  <span key={idx} className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full">
                    {asset}
                  </span>
                ))}
              </div>
            </div>

            {/* Messaging */}
            <div>
              <h4 className="text-slate-400 text-xs font-semibold uppercase mb-2">Key Messaging</h4>
              <div className="bg-white/5 rounded-lg p-3 space-y-2">
                <p className="text-white font-bold text-sm">&quot;{campaign.messaging.headline}&quot;</p>
                <p className="text-slate-300 text-xs">{campaign.messaging.body}</p>
                <p className="text-emerald-400 text-sm font-semibold">CTA: {campaign.messaging.cta}</p>
              </div>
            </div>

            {/* KPIs */}
            <div>
              <h4 className="text-slate-400 text-xs font-semibold uppercase mb-2">Success KPIs</h4>
              <div className="grid grid-cols-3 gap-2">
                {campaign.kpis.map((kpi, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-2 text-center">
                    <p className="text-emerald-400 font-bold text-sm">{kpi.target}</p>
                    <p className="text-slate-500 text-xs">{kpi.metric}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline & Budget */}
            <div className="flex gap-4">
              <div className="flex-1 bg-white/5 rounded-lg p-3">
                <h4 className="text-slate-400 text-xs font-semibold uppercase mb-1">Timeline</h4>
                <p className="text-white text-sm">{campaign.timeline}</p>
              </div>
              <div className="flex-1 bg-white/5 rounded-lg p-3">
                <h4 className="text-slate-400 text-xs font-semibold uppercase mb-1">Budget</h4>
                <p className="text-emerald-400 text-sm font-bold">{campaign.budget}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Header */}
      <div className={`bg-gradient-to-b from-${currentCategory.color}-500/20 to-transparent`}>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Link href="/merchant-playbook" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Playbooks</span>
          </Link>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
              <Target className="text-emerald-400" size={16} />
              <span className="text-emerald-400 text-sm font-medium">Pain-Point Targeted Campaigns</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">
              <span className={`text-${currentCategory.color}-400`}>{currentCategory.name}</span> Campaigns
            </h1>
            <p className="text-slate-400">1 Campaign per Pain Point = Maximum Impact</p>
          </div>
        </div>
      </div>

      {/* Pain Points Summary */}
      <div className="max-w-4xl mx-auto px-4 mb-6">
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <h3 className="text-white font-bold mb-3 flex items-center gap-2">
            <Sparkles className="text-yellow-400" size={18} />
            {currentCategory.painPoints.length} Pain Points = {currentCategory.merchantCampaigns.length + currentCategory.userCampaigns.length} Targeted Campaigns
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {currentCategory.painPoints.slice(0, 6).map((pp, idx) => (
              <div key={idx} className="bg-white/5 rounded-lg p-2">
                <p className="text-red-400 text-xs mb-1">❌ {pp.pain}</p>
                <p className="text-emerald-400 text-xs">✓ {pp.solution}</p>
              </div>
            ))}
          </div>
          {currentCategory.painPoints.length > 6 && (
            <p className="text-slate-500 text-xs mt-2 text-center">+ {currentCategory.painPoints.length - 6} more pain points addressed</p>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-4xl mx-auto px-4 mb-6">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('merchant')}
            className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-colors ${
              activeTab === 'merchant'
                ? 'bg-blue-500 text-white'
                : 'bg-white/5 text-slate-400 hover:bg-white/10'
            }`}
          >
            <Users className="inline mr-2" size={18} />
            Merchant Acquisition ({currentCategory.merchantCampaigns.length})
          </button>
          <button
            onClick={() => setActiveTab('user')}
            className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-colors ${
              activeTab === 'user'
                ? 'bg-purple-500 text-white'
                : 'bg-white/5 text-slate-400 hover:bg-white/10'
            }`}
          >
            <Target className="inline mr-2" size={18} />
            User Acquisition ({currentCategory.userCampaigns.length})
          </button>
        </div>
      </div>

      {/* Campaigns List */}
      <div className="max-w-4xl mx-auto px-4 pb-32">
        <div className="space-y-4">
          {campaigns.map(campaign => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>

        <p className="text-center text-slate-600 text-xs mt-8">
          {currentCategory.name} Campaigns • {currentCategory.merchantCampaigns.length + currentCategory.userCampaigns.length} Total Campaigns
        </p>
      </div>
    </div>
  );
}

// Loading fallback for Suspense
function LoadingFallback() {
  return (
    <div className="min-h-screen bg-[#0a1628] flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-slate-400">Loading campaigns...</p>
      </div>
    <GlobalFooter />
    </div>
  );
}

export default function CategoryCampaignsPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <CategoryCampaignsContent />
    </Suspense>
  );
}
