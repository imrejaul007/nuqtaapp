'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Target, TrendingUp, Users, DollarSign, BarChart3, Calendar,
  CheckCircle, AlertTriangle, Clock, Zap, ChevronDown, ChevronRight,
  ArrowRight, ArrowLeft, MapPin, Megaphone, Shield,
  Share2, Smartphone, MessageSquare, Star, Award, Briefcase,
  UserPlus, Store, Instagram, Play, ShoppingCart, Gift,
  BookOpen, Filter, Activity, Layers, Sparkles,
  Search, Rocket, Hash, RefreshCw, Globe, Eye
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ============================================
// TYPES
// ============================================
type SectionTab = 'overview' | 'college-fest' | 'phases' | 'channels' | 'team' | 'playbooks' | 'funnel' | 'budget' | 'risks';

// ============================================
// DATA: ACQUISITION CHANNELS (matches parent page exactly)
// ============================================
const acquisitionChannels = [
  { channel: 'Paid Ads (Meta)', budget: 600000, cac: 300, users: 2000, color: 'bg-blue-500', icon: Instagram, strategy: 'Targeted lookalike audiences in college-dense pin codes. Dynamic creatives showing local merchant deals + cashback.', tactics: ['Lookalike audiences from early adopters', 'Dynamic product ads with merchant catalogs', 'Retargeting cart abandoners', 'Story/Reel ads with UGC'], kpis: ['CPI < ₹80', 'Install-to-order: 25%', 'ROAS > 3x'], tools: ['Meta Ads Manager', 'Segment', 'AppsFlyer'], team: 'Performance Marketing Manager', ramp: 'Start M4, scale 20%/month' },
  { channel: 'Paid Ads (Google)', budget: 500000, cac: 300, users: 1667, color: 'bg-red-500', icon: Search, strategy: 'Search ads on high-intent keywords (food delivery near me, local shopping app). UAC campaigns for app installs.', tactics: ['Brand + competitor keyword bidding', 'Universal App Campaigns', 'YouTube pre-roll for awareness', 'Shopping ads for merchant products'], kpis: ['CPI < ₹90', 'Search CTR > 8%', 'Quality Score > 7'], tools: ['Google Ads', 'Google Analytics', 'Firebase'], team: 'Performance Marketing Manager', ramp: 'Start M4, scale with Meta parity' },
  { channel: 'Campus Ambassadors', budget: 300000, cac: 67, users: 4478, color: 'bg-purple-500', icon: Award, strategy: 'Recruit top students as brand reps. Commission per signup + monthly stipend. Campus-specific promo codes.', tactics: ['Recruit 100 ambassadors across 20 colleges', 'Weekly leaderboards with prizes', 'Campus-specific referral codes', 'Ambassador-led demo sessions in hostels'], kpis: ['50+ signups/ambassador/month', 'Ambassador retention > 80%', 'Cost per signup < ₹70'], tools: ['Ambassador dashboard (custom)', 'WhatsApp groups', 'Google Sheets tracking'], team: 'Campus Ambassador Program Manager', ramp: 'M1: 20 ambassadors, M3: 50, M6: 100' },
  { channel: 'Campus Events', budget: 200000, cac: 100, users: 2000, color: 'bg-indigo-500', icon: Calendar, strategy: 'Sponsor college fests, run food courts with merchant partners, install booths with instant signup rewards.', tactics: ['Sponsor 2-3 college fests/month', 'Pop-up NuqtaCoin booths (sign up = 100 coins)', 'Food sampling events with merchant partners', 'Hackathons & tech events sponsorship'], kpis: ['200+ signups per event', 'Cost per event < ₹50K', 'Post-event order rate > 15%'], tools: ['Event management platform', 'QR code generators', 'Signup tablets'], team: 'Community Manager', ramp: 'M1: 2 events/month, M6: 5 events/month' },
  { channel: 'Merchant-Led Referrals', budget: 250000, cac: 50, users: 5000, color: 'bg-emerald-500', icon: Store, strategy: 'Merchants become acquisition channels. QR codes at checkout, table tents, bag inserts. Merchant earns coins per referred user.', tactics: ['QR code table tents at every merchant', 'Bag insert cards with first-order discount', 'Merchant leaderboard with bonus rewards', '"Scan to earn" posters in-store'], kpis: ['10+ referrals/merchant/month', 'Merchant participation > 60%', 'Referred user order rate > 40%'], tools: ['Merchant dashboard', 'QR code system', 'Reward tracking'], team: 'BizDev / Merchant Acquisition Lead', ramp: 'Scales linearly with merchant count' },
  { channel: 'User Referrals', budget: 400000, cac: 100, users: 4000, color: 'bg-green-500', icon: Share2, strategy: 'Two-sided referral: referrer gets 200 coins, new user gets 100 coins on first order. Deep link sharing via WhatsApp.', tactics: ['Deep link referral codes', '200 NuqtaCoin for referrer on friend\'s first order', '100 NuqtaCoin welcome bonus for referee', 'Referral milestone rewards (5th, 10th, 25th)'], kpis: ['Viral coefficient k > 0.3', 'Referral conversion > 30%', 'Cost per referred user < ₹100'], tools: ['Branch.io deep links', 'In-app referral UI', 'WhatsApp share API'], team: 'Growth Lead', ramp: 'Always on, amplify with campaigns monthly' },
  { channel: 'Influencer Marketing', budget: 350000, cac: 100, users: 3500, color: 'bg-pink-500', icon: Star, strategy: 'Micro-influencers (10K-100K followers) in food, lifestyle, college niches. Authentic reviews + promo codes.', tactics: ['Seed 20 micro-influencers/month with free credits', 'Exclusive promo codes per influencer', 'Instagram Reels + YouTube Shorts', 'Local food blogger partnerships per city'], kpis: ['CPI < ₹120 via influencer codes', 'Engagement rate > 4%', '500+ installs per campaign'], tools: ['Influencer CRM', 'Promo code tracking', 'Social listening tools'], team: 'Influencer Marketing Coordinator', ramp: 'Start M5, 5 influencers/month growing to 20' },
  { channel: 'Corporate Tie-ups', budget: 200000, cac: 200, users: 1000, color: 'bg-orange-500', icon: Briefcase, strategy: 'Partner with corporates for employee benefits. Bulk NuqtaCoin packages for employee rewards and meal programs.', tactics: ['HR partnership for employee meal benefits', 'Corporate welcome kits with NuqtaCoin', 'Cafeteria replacement partnerships', 'Employee referral bonus programs'], kpis: ['5+ corporate deals/quarter', '200+ employees per deal', 'Retention > 70% after 3 months'], tools: ['CRM (HubSpot)', 'Corporate dashboard', 'Bulk activation tools'], team: 'Partnership Manager', ramp: 'Start M7, 2 deals/month by M12' },
  { channel: 'SEO / Content', budget: 150000, cac: 50, users: 3000, color: 'bg-cyan-500', icon: Globe, strategy: 'Rank for "best restaurants in [city]", "food delivery [city]", "local shopping app" keywords. Blog + merchant profiles.', tactics: ['Merchant profile pages (SEO-optimized)', 'City-specific landing pages', 'Blog: "Top 10 restaurants in [area]"', 'Schema markup for local business'], kpis: ['10K organic visits/month by M6', 'Top 3 for 50+ keywords', 'Organic install rate > 5%'], tools: ['Ahrefs/SEMrush', 'WordPress/Next.js blog', 'Google Search Console'], team: 'Content & SEO Specialist', ramp: 'M1 start, compounds over time (3-6mo lag)' },
  { channel: 'App Store Optimization', budget: 100000, cac: 40, users: 2500, color: 'bg-teal-500', icon: Smartphone, strategy: 'Optimize Play Store / App Store listing. A/B test screenshots, descriptions, keywords. Drive organic discovery.', tactics: ['Keyword optimization (monthly refresh)', 'A/B test app icons and screenshots', 'Localized descriptions (Hindi, regional)', 'Review management (respond to all)'], kpis: ['Organic installs > 2K/month', 'Store conversion rate > 30%', 'Rating > 4.5 stars'], tools: ['AppTweak/Sensor Tower', 'Google Play Console A/B', 'Review management tool'], team: 'Content & SEO Specialist', ramp: 'M1 setup, ongoing monthly optimization' },
  { channel: 'Community Events', budget: 150000, cac: 75, users: 2000, color: 'bg-amber-500', icon: Users, strategy: 'Host food walks, merchant showcases, neighborhood meetups. Build community-first brand loyalty.', tactics: ['Monthly food walks in new neighborhoods', 'Merchant showcase events', '"NuqtaCoin Day" monthly flash events', 'Community WhatsApp group activations'], kpis: ['150+ attendees per event', 'Post-event signup rate > 40%', 'Community NPS > 60'], tools: ['Eventbrite/Luma', 'WhatsApp communities', 'Feedback forms'], team: 'Community Manager', ramp: 'M2 start, 3 events/month by M6' },
  { channel: 'WhatsApp Marketing', budget: 100000, cac: 25, users: 4000, color: 'bg-lime-500', icon: MessageSquare, strategy: 'Broadcast deals, merchant promos, coin balance reminders. Viral sharing via WhatsApp Status + group messages.', tactics: ['Weekly deal broadcasts to opt-in users', 'WhatsApp Status sharing rewards', 'Group deal sharing mechanics', 'Automated order updates + upsell'], kpis: ['Open rate > 70%', 'Click rate > 15%', 'CPA < ₹30'], tools: ['WhatsApp Business API', 'Wati/Interakt', 'Broadcast automation'], team: 'Growth Lead', ramp: 'M1 start, scales with user base' },
];

// ============================================
// DATA: ACQUISITION PHASES
// ============================================
const acquisitionPhases = [
  {
    id: 'foundation', name: 'Phase 1: Foundation', period: 'M1-M3', color: 'emerald',
    channelsActive: ['Campus Ambassadors', 'WhatsApp Marketing', 'ASO', 'Merchant-Led Referrals', 'Community Events', 'SEO/Content'],
    targetUsers: 8000, budgetINR: 1500000, cacTarget: 50, cities: 1, teamSize: 4,
    milestones: ['100 campus ambassadors recruited', '50 merchants onboarded with QR codes', 'WhatsApp viral loop live (k=0.15)', 'ASO optimized — top 3 for city keywords', 'First 2,000 users acquired organically', 'Community WhatsApp group: 500+ members'],
    risks: ['Slow merchant signup in new category', 'Low campus engagement during exams/holidays', 'WhatsApp API approval delays'],
    focus: 'Prove product-market fit with cheapest organic channels. Zero paid spend. Validate referral loops.',
  },
  {
    id: 'growth', name: 'Phase 2: Growth', period: 'M4-M6', color: 'blue',
    channelsActive: ['All Phase 1 channels', 'Paid Ads (Meta)', 'Paid Ads (Google)', 'Influencer Marketing', 'User Referrals'],
    targetUsers: 15000, budgetINR: 3500000, cacTarget: 76, cities: 4, teamSize: 8,
    milestones: ['Paid ads achieving ₹300 CAC (within target)', 'First influencer campaign: 500+ installs', 'User referral loop tuned to k=0.3', 'Cities 2-4 launched successfully', 'LTV:CAC confirmed > 8x', '200 merchants live across 4 cities'],
    risks: ['Paid CAC higher than projected', 'Influencer campaigns fail to convert', 'City 2-4 launch delays', 'Team hiring bottleneck'],
    focus: 'Layer paid channels on proven organic base. Expand to 3 new cities. Hire performance marketing team.',
  },
  {
    id: 'scale', name: 'Phase 3: Scale', period: 'M7-M12', color: 'purple',
    channelsActive: ['All 12 channels active', 'Corporate tie-ups added', 'Full multi-channel attribution'],
    targetUsers: 35000, budgetINR: 8000000, cacTarget: 95, cities: 32, teamSize: 15,
    milestones: ['32 cities live', '500+ merchants onboarded', 'Corporate tie-ups: 5+ deals signed', 'Full attribution system operational', 'Blended CAC stabilized at ₹95', 'Monthly organic share > 40%'],
    risks: ['CAC inflation as channels saturate', 'Team scaling challenges across cities', 'Multi-city coordination complexity', 'Quality control in new markets'],
    focus: 'All 12 channels firing. Full attribution tracking. Aggressive city expansion to 32 cities.',
  },
  {
    id: 'expansion', name: 'Phase 4: Expansion', period: 'Year 2', color: 'orange',
    channelsActive: ['All channels at scale', 'Brand campaigns (TV pilot)', 'Performance marketing dominant', 'PR & earned media'],
    targetUsers: 1500000, budgetINR: 225000000, cacTarget: 150, cities: 120, teamSize: 35,
    milestones: ['120 cities operational', '12,000 merchants', 'National brand recognition in target demo', 'Series A funded ($20-30M)', 'TV/OOH pilot in top 5 cities', 'CAC:LTV economics proven at scale'],
    risks: ['Burn rate acceleration', 'Competition response from incumbents', 'Regulatory changes (fintech/payments)', 'Talent war for growth marketers'],
    focus: 'Series A funded. Massive geographic expansion. Brand building begins. Paid channels dominate.',
  },
  {
    id: 'dominance', name: 'Phase 5: Dominance', period: 'Year 3', color: 'amber',
    channelsActive: ['TV/OOH national campaigns', 'Heavy digital at scale', 'Brand partnerships & co-marketing', 'Full-stack marketing org'],
    targetUsers: 5000000, budgetINR: 1250000000, cacTarget: 250, cities: 300, teamSize: 50,
    milestones: ['300 cities', '40,000 merchants', 'Household name in target demographics', 'IPO-ready growth metrics', '5M MAU achieved', 'Positive unit economics at scale'],
    risks: ['Massive burn with pressure to show profitability', 'Market saturation in early cities', 'Competitor moats in Tier 2/3 cities', 'Organizational complexity'],
    focus: 'National brand. IPO-ready metrics. Full market penetration in target cities.',
  },
];

// ============================================
// DATA: TEAM ROLES
// ============================================
const teamRoles = [
  { title: 'Growth Lead', icon: Rocket, hirePhase: 'Phase 1', salary: '₹1.5-2.5L/mo', responsibilities: ['Own overall user acquisition strategy & targets', 'Manage channel mix & budget allocation', 'Set up attribution & analytics infrastructure', 'Report growth metrics to founders weekly'], kpis: ['Monthly user growth rate', 'Blended CAC', 'LTV:CAC ratio'], reportsTo: 'CEO', color: 'emerald' },
  { title: 'Campus Ambassador Program Mgr', icon: Award, hirePhase: 'Phase 1', salary: '₹60-90K/mo', responsibilities: ['Recruit & manage 100+ campus ambassadors', 'Design incentive structures & leaderboards', 'Organize campus events & activations', 'Track per-ambassador performance'], kpis: ['Ambassador count & retention', 'Signups per ambassador', 'Campus penetration rate'], reportsTo: 'Growth Lead', color: 'purple' },
  { title: 'Content & SEO Specialist', icon: Globe, hirePhase: 'Phase 1', salary: '₹50-80K/mo', responsibilities: ['SEO strategy & keyword optimization', 'App Store Optimization (ASO)', 'Blog & merchant profile content', 'Social media content calendar'], kpis: ['Organic traffic growth', 'Keyword rankings', 'Store conversion rate'], reportsTo: 'Growth Lead', color: 'cyan' },
  { title: 'BizDev / Merchant Acq Lead', icon: Store, hirePhase: 'Phase 1', salary: '₹1-1.5L/mo', responsibilities: ['Merchant onboarding & relationship management', 'Deploy QR codes & referral materials', 'Negotiate merchant partnership terms', 'Track merchant-led user acquisition'], kpis: ['Merchants onboarded/month', 'Merchant referral rate', 'Merchant retention'], reportsTo: 'CEO', color: 'emerald' },
  { title: 'Performance Marketing Mgr', icon: Target, hirePhase: 'Phase 2', salary: '₹1.2-2L/mo', responsibilities: ['Manage Meta & Google ad campaigns', 'Creative testing & optimization', 'Budget allocation across paid channels', 'Attribution & ROAS tracking'], kpis: ['Paid CPI', 'ROAS', 'Install-to-order rate'], reportsTo: 'Growth Lead', color: 'blue' },
  { title: 'Community Manager', icon: Users, hirePhase: 'Phase 2', salary: '₹40-70K/mo', responsibilities: ['Organize community events & food walks', 'Manage WhatsApp communities', 'Campus event coordination', 'User feedback collection & NPS'], kpis: ['Event attendance', 'Community size', 'Event-to-signup rate'], reportsTo: 'Growth Lead', color: 'blue' },
  { title: 'Influencer Marketing Coordinator', icon: Star, hirePhase: 'Phase 2', salary: '₹50-80K/mo', responsibilities: ['Source & manage micro-influencer relationships', 'Campaign briefs & content approval', 'Track influencer promo code performance', 'Negotiate rates & manage payments'], kpis: ['Influencer CPI', 'Engagement rate', 'Installs per campaign'], reportsTo: 'Performance Marketing Mgr', color: 'pink' },
  { title: 'Partnership Manager', icon: Briefcase, hirePhase: 'Phase 3', salary: '₹1-1.5L/mo', responsibilities: ['Corporate tie-ups for employee benefits', 'Strategic brand partnerships', 'Co-marketing campaigns', 'Revenue-share deal structuring'], kpis: ['Deals closed/quarter', 'Users per deal', 'Partnership revenue'], reportsTo: 'Growth Lead', color: 'orange' },
];

// ============================================
// DATA: PLAYBOOKS
// ============================================
const playbooks = [
  {
    id: 'campus', name: 'Campus Ambassador Program', icon: Award, color: 'purple',
    steps: [
      { step: 1, title: 'Scout & Recruit', description: 'Identify top students via college societies, LinkedIn, Instagram. Target student council members, food bloggers, and tech club leads. Application form with social proof questions.', duration: 'Week 1-2' },
      { step: 2, title: 'Select & Onboard', description: 'Select top 20% of applicants. 2-hour virtual onboarding: product demo, referral code setup, content guidelines, WhatsApp group. Provide starter kit: T-shirt, stickers, 500 NuqtaCoins.', duration: 'Week 2-3' },
      { step: 3, title: 'Activate & Train', description: 'First mission: get 10 signups in week 1. Training on: WhatsApp status sharing, hostel room demos, canteen table campaigns. Daily tips in ambassador WhatsApp group.', duration: 'Week 3-4' },
      { step: 4, title: 'Gamify & Compete', description: 'Weekly leaderboards with prizes (₹500-2000 cash). Monthly "Ambassador of the Month" with special perks. Milestone badges: Bronze (25), Silver (50), Gold (100), Diamond (200) signups.', duration: 'Ongoing' },
      { step: 5, title: 'Scale & Replicate', description: 'Top ambassadors become City Leads managing 5-10 ambassadors. Replicate playbook to new colleges. Ambassador referral: recruit another ambassador = ₹500 bonus. Target: 100 ambassadors by M3.', duration: 'M2-M6' },
    ],
    kpis: ['50+ signups/ambassador/month', 'Ambassador retention > 80%', 'CAC < ₹70'], budget: '₹3L/month', owner: 'Campus Ambassador Program Manager',
  },
  {
    id: 'merchant-referral', name: 'Merchant-Led Referral', icon: Store, color: 'emerald',
    steps: [
      { step: 1, title: 'Merchant Onboarding', description: 'Sign up merchant on Nuqta platform. Set up their store profile, menu/catalog, and payment integration. Explain the referral program: earn 50 NuqtaCoins per referred customer.', duration: 'Day 1' },
      { step: 2, title: 'Deploy Referral Materials', description: 'Install QR code table tents at billing counter. Bag insert cards with "Download Nuqta, get ₹100 off". Window stickers with Nuqta branding. Train staff to mention the app at checkout.', duration: 'Day 2-3' },
      { step: 3, title: 'Incentivize & Track', description: 'Merchant dashboard showing referral count & earnings. Monthly bonus for top-referring merchants (₹5K for 100+ referrals). Leaderboard visible to all merchants.', duration: 'Ongoing' },
      { step: 4, title: 'Optimize Conversion', description: 'A/B test QR code placements (counter vs table vs door). Test different offers (₹100 off vs 200 coins vs free delivery). Track which merchants drive highest-quality users (repeat orders).', duration: 'M2-M3' },
      { step: 5, title: 'Scale to New Merchants', description: 'Use data to identify merchant profiles that drive most referrals. Prioritize similar merchants for onboarding. Create merchant referral: existing merchant refers new merchant = ₹2K bonus.', duration: 'M3-M6' },
    ],
    kpis: ['10+ referrals/merchant/month', 'Referred user 1st order rate > 40%', 'Merchant participation > 60%'], budget: '₹2.5L/month', owner: 'BizDev / Merchant Acquisition Lead',
  },
  {
    id: 'whatsapp', name: 'WhatsApp Viral Loop', icon: MessageSquare, color: 'lime',
    steps: [
      { step: 1, title: 'Seed Initial Users', description: 'Get first 500 users from campus + merchant channels. Ensure they have WhatsApp share buttons prominently in app. Every order confirmation includes "Share & earn 50 coins".', duration: 'M1' },
      { step: 2, title: 'Build Share Mechanics', description: 'Implement: share order receipt (with merchant branding), share deal/offer, share referral link. Each share = 20 NuqtaCoins. Deep links that open directly in app or redirect to store.', duration: 'M1-M2' },
      { step: 3, title: 'Broadcast Campaigns', description: 'Weekly deal broadcasts via WhatsApp Business API to opted-in users. Personalized: "Your favorite merchant [name] has a new offer!" Format: image + 2-line text + CTA button.', duration: 'M2 ongoing' },
      { step: 4, title: 'Group & Status Virality', description: 'Encourage WhatsApp Status sharing: "Share to Status, screenshot & send = 100 coins". Create shareable content: deal graphics, coin balance brags, order milestone celebrations.', duration: 'M2-M3' },
      { step: 5, title: 'Measure & Iterate', description: 'Track: messages sent, opened, clicked, installed, ordered. Optimize send times (11am, 6pm best). A/B test message formats. Kill underperforming templates. Target viral coefficient k > 0.3.', duration: 'Ongoing' },
    ],
    kpis: ['Open rate > 70%', 'Viral coefficient k > 0.3', 'CPA < ₹30'], budget: '₹1L/month', owner: 'Growth Lead',
  },
  {
    id: 'paid-ads', name: 'Paid Ads Scaling', icon: Target, color: 'blue',
    steps: [
      { step: 1, title: 'Foundation Setup', description: 'Install tracking SDKs (AppsFlyer/Adjust). Set up Meta pixel, Google conversion tracking. Create initial audiences: college students 18-25, food delivery users, local shopping interest. Budget: ₹50K for testing.', duration: 'M4 Week 1' },
      { step: 2, title: 'Creative Testing', description: 'Launch 10 ad variants across 3 formats (static, video, carousel). Test hooks: cashback angle, local merchant angle, savings angle, community angle. Run for 5 days each, ₹5K per variant. Kill bottom 70%.', duration: 'M4 Week 2-3' },
      { step: 3, title: 'Winner Scaling', description: 'Take top 3 creatives, scale budget 2x every 3 days (₹5K → ₹10K → ₹20K → ₹40K). Monitor CPI daily — if CPI rises >20%, pause and refresh creative. Build lookalike audiences from converters.', duration: 'M4-M5' },
      { step: 4, title: 'Geo Expansion', description: 'Replicate winning campaigns in new cities. Localize: city name in ad, local merchant images, regional language variants. Each city gets ₹30K test budget before full rollout.', duration: 'M5-M6' },
      { step: 5, title: 'Advanced Optimization', description: 'Implement value-based optimization (optimize for first order, not just install). Retargeting: installed-but-not-ordered users. Dynamic ads showing nearby merchants. Budget allocation by city ROI.', duration: 'M6-M12' },
    ],
    kpis: ['CPI < ₹80 (Meta), < ₹90 (Google)', 'Install-to-order > 25%', 'ROAS > 3x'], budget: '₹11L/month (Meta ₹6L + Google ₹5L)', owner: 'Performance Marketing Manager',
  },
  {
    id: 'city-launch', name: 'City Launch Playbook', icon: MapPin, color: 'orange',
    steps: [
      { step: 1, title: 'City Scouting (T-4 weeks)', description: 'Identify target city based on: college density, merchant density, competitor presence, population 18-30. Visit city, map top 5 commercial areas, identify 20 potential merchant partners.', duration: '1 week' },
      { step: 2, title: 'Pre-Launch Setup (T-3 weeks)', description: 'Sign 15-20 merchants (minimum viable supply). Recruit 5-10 campus ambassadors. Set up local WhatsApp community. Create city-specific ASO & SEO pages. Pre-register 200+ users via landing page.', duration: '2 weeks' },
      { step: 3, title: 'Launch Week (T-0)', description: 'Blast WhatsApp broadcast to pre-registered users. Campus ambassador activation (all ambassadors go live simultaneously). Launch week offer: 2x NuqtaCoins on every order. Local influencer posts go live. Goal: 500 orders in week 1.', duration: '1 week' },
      { step: 4, title: 'Stabilization (T+1 to T+4 weeks)', description: 'Monitor order volume daily. Add 10 more merchants. Run community event (food walk). Activate paid ads if organic traction confirmed. Target: 200 DAU by week 4.', duration: '4 weeks' },
      { step: 5, title: 'Handoff & Growth (T+5 weeks)', description: 'City reaches self-sustaining metrics: 200+ DAU, 30+ active merchants, positive word-of-mouth. Hand off to regional manager. Growth Lead focuses on next city. Playbook documented for replication.', duration: '1 week' },
    ],
    kpis: ['500 orders in launch week', '200 DAU by week 4', '30+ active merchants', 'Self-sustaining by week 5'], budget: '₹2-3L per city launch', owner: 'Growth Lead + BizDev Lead',
  },
  {
    id: 'college-fest', name: 'College Business Fest', icon: ShoppingCart, color: 'amber',
    steps: [
      { step: 1, title: 'Partner 20 Student Businesses', description: 'Identify 20 student entrepreneurs from the college (food stalls, chai, juice, accessories, printing, snacks, etc.). Offer ₹10K each as 50-50 partnership investment to open a stall at the fest. Total investment: ₹2L per event.', duration: 'T-2 weeks' },
      { step: 2, title: 'Set Up Stall Economics', description: 'Each stall sets MRP minimum ₹200. COGS per item = ₹50 (covered from the ₹10K investment pool = 200 transactions capacity). Student businesses keep all profit above COGS. 15% cashback in ReZ Coins on every purchase.', duration: 'T-1 week' },
      { step: 3, title: 'Distribute Free ₹100 ReZ Coins', description: 'Every attending student gets FREE ₹100 ReZ Coins (event-only). They MUST download the app and create account to receive coins. Coins are valid only at fest stalls, creating urgency to spend. This is your zero-CAC user acquisition.', duration: 'Event day' },
      { step: 4, title: 'Run the Fest', description: 'Students browse 20 stalls, spend ₹100 cash + ₹100 ReZ Coins per purchase (₹200 MRP). Student business gets ₹100 cash + settlement from ReZ for coins. COGS ₹50 comes from the ₹10K pool. Everyone earns 15% cashback (₹30 ReZ Coins) for future orders.', duration: '1-2 days' },
      { step: 5, title: 'Post-Fest Conversion', description: 'All students now have the app, a completed transaction history, and ₹30 cashback coins. Push notification within 48h: "Your ₹30 ReZ Coins expire in 7 days — use them at any Nuqta merchant!" Convert event users into platform users.', duration: 'T+1 week' },
      { step: 6, title: 'Scale: 2 Fests/Month Across Cities', description: 'Replicate playbook at 2 colleges per month. Each fest = 500-1000 real transacting users at near-zero CAC. Student businesses become micro-merchants on the platform. Top performers get ongoing partnership.', duration: 'Ongoing' },
    ],
    kpis: ['500+ transacting users per fest', 'CAC < ₹10 (effectively near-zero)', '20 student businesses activated', '30%+ post-fest retention'], budget: '₹2L per fest (₹10K × 20 businesses)', owner: 'Campus Ambassador Program Manager + BizDev Lead',
  },
];

// ============================================
// DATA: FUNNEL STAGES
// ============================================
const funnelStages = [
  { stage: 'Awareness', icon: Eye, usersIn: 100000, conversionRate: 30, color: 'blue', optimizations: ['Increase ad impressions & reach', 'Influencer brand awareness campaigns', 'Campus visibility events'] },
  { stage: 'App Store View', icon: Smartphone, usersIn: 30000, conversionRate: 40, color: 'indigo', optimizations: ['Optimize app store screenshots', 'A/B test app icon', 'Improve ratings & reviews'] },
  { stage: 'Install', icon: Play, usersIn: 12000, conversionRate: 60, color: 'purple', optimizations: ['Reduce app size', 'Faster onboarding flow', 'Clear value prop on first screen'] },
  { stage: 'Signup', icon: UserPlus, usersIn: 7200, conversionRate: 50, color: 'violet', optimizations: ['Social login (Google/phone)', 'Skip optional fields', 'Show NuqtaCoin welcome bonus'] },
  { stage: 'First Order', icon: DollarSign, usersIn: 3600, conversionRate: 70, color: 'emerald', optimizations: ['New user discount/free delivery', 'Curated first-time recommendations', 'Push notification within 24h'] },
  { stage: 'Coins Earned', icon: Zap, usersIn: 2520, conversionRate: 80, color: 'yellow', optimizations: ['Prominent coin balance display', 'Coin earning animation', 'Push: "You earned X coins!"'] },
  { stage: 'Repeat Order', icon: RefreshCw, usersIn: 2016, conversionRate: 75, color: 'orange', optimizations: ['Reorder button', 'Personalized recommendations', 'Time-based push notifications'] },
  { stage: 'Weekly Active', icon: Activity, usersIn: 1512, conversionRate: 40, color: 'rose', optimizations: ['Weekly deals & flash sales', 'New merchant alerts', 'Coin expiry urgency'] },
  { stage: 'Referrer', icon: Share2, usersIn: 605, conversionRate: 100, color: 'lime', optimizations: ['Prominent share buttons post-order', 'Referral milestone rewards', 'Social proof: "X friends joined"'] },
];

// ============================================
// DATA: MONTHLY BUDGET (M1-M12)
// ============================================
const monthlyBudget = [
  { month: 'M1', campus: 100000, whatsapp: 30000, aso: 50000, merchantRef: 50000, community: 30000, seo: 50000, meta: 0, google: 0, influencer: 0, referral: 50000, corporate: 0, total: 360000 },
  { month: 'M2', campus: 150000, whatsapp: 40000, aso: 30000, merchantRef: 80000, community: 50000, seo: 50000, meta: 0, google: 0, influencer: 0, referral: 80000, corporate: 0, total: 480000 },
  { month: 'M3', campus: 200000, whatsapp: 50000, aso: 30000, merchantRef: 100000, community: 60000, seo: 60000, meta: 0, google: 0, influencer: 0, referral: 100000, corporate: 0, total: 600000 },
  { month: 'M4', campus: 250000, whatsapp: 60000, aso: 30000, merchantRef: 120000, community: 60000, seo: 60000, meta: 200000, google: 150000, influencer: 100000, referral: 150000, corporate: 0, total: 1180000 },
  { month: 'M5', campus: 250000, whatsapp: 70000, aso: 30000, merchantRef: 150000, community: 70000, seo: 70000, meta: 350000, google: 250000, influencer: 150000, referral: 200000, corporate: 0, total: 1590000 },
  { month: 'M6', campus: 300000, whatsapp: 80000, aso: 30000, merchantRef: 180000, community: 80000, seo: 80000, meta: 500000, google: 400000, influencer: 200000, referral: 250000, corporate: 0, total: 2100000 },
  { month: 'M7', campus: 300000, whatsapp: 100000, aso: 40000, merchantRef: 200000, community: 100000, seo: 80000, meta: 600000, google: 500000, influencer: 250000, referral: 300000, corporate: 100000, total: 2570000 },
  { month: 'M8', campus: 300000, whatsapp: 100000, aso: 40000, merchantRef: 250000, community: 120000, seo: 100000, meta: 650000, google: 500000, influencer: 300000, referral: 350000, corporate: 100000, total: 2810000 },
  { month: 'M9', campus: 350000, whatsapp: 120000, aso: 40000, merchantRef: 280000, community: 130000, seo: 100000, meta: 700000, google: 550000, influencer: 350000, referral: 400000, corporate: 150000, total: 3170000 },
  { month: 'M10', campus: 350000, whatsapp: 130000, aso: 40000, merchantRef: 300000, community: 150000, seo: 120000, meta: 750000, google: 600000, influencer: 350000, referral: 400000, corporate: 150000, total: 3340000 },
  { month: 'M11', campus: 400000, whatsapp: 150000, aso: 40000, merchantRef: 320000, community: 150000, seo: 130000, meta: 800000, google: 600000, influencer: 400000, referral: 450000, corporate: 200000, total: 3640000 },
  { month: 'M12', campus: 400000, whatsapp: 150000, aso: 40000, merchantRef: 350000, community: 160000, seo: 140000, meta: 850000, google: 650000, influencer: 400000, referral: 500000, corporate: 200000, total: 3840000 },
];

// ============================================
// DATA: RISKS
// ============================================
const risks = [
  { risk: 'CAC Inflation', severity: 'high' as const, probability: '70%', impact: 'Blended CAC rises to ₹150+ in Y1, breaking unit economics. LTV:CAC drops below 5x.', mitigation: ['Maintain 40%+ organic channel share', 'Invest heavily in referral loops (lowest CAC)', 'A/B test creatives weekly to fight ad fatigue', 'Diversify across 12 channels — never >30% on one'], contingency: 'Shift budget entirely to organic (campus, WhatsApp, merchant referrals) and pause all paid until fundamentals stabilize.' },
  { risk: 'Channel Saturation', severity: 'high' as const, probability: '60%', impact: 'Campus ambassadors and WhatsApp marketing reach ceiling. Growth stalls in existing cities.', mitigation: ['Plan for city expansion to unlock new audiences', 'Rotate creative formats every 2 weeks', 'Layer new channels before old ones plateau', 'Geographic diversification across 32 cities'], contingency: 'Accelerate city launches to access fresh audiences. Pivot to paid-first acquisition in saturated markets.' },
  { risk: 'WhatsApp Policy Changes', severity: 'medium' as const, probability: '40%', impact: 'WhatsApp restricts bulk messaging or changes Business API pricing. Lose cheapest channel (₹25 CAC).', mitigation: ['Build owned notification channels (push, email, SMS)', 'Stay compliant with WhatsApp Business policies', 'Diversify messaging: Telegram, Instagram DMs', 'Never rely >15% of acquisition on WhatsApp alone'], contingency: 'Shift WhatsApp budget to push notifications + in-app referrals. Use WhatsApp only for 1:1 support.' },
  { risk: 'Competition for Merchants', severity: 'medium' as const, probability: '50%', impact: 'Swiggy/Zomato offer exclusive deals. Merchants hesitate to list on Nuqta. Supply side crunch.', mitigation: ['Offer lower commission rate (5% vs 25-30%)', 'Emphasize hyperlocal non-food categories they don\'t serve', 'Lock merchants with 6-month partnerships + guaranteed exposure', 'Build merchant loyalty via NuqtaCoin rewards for them'], contingency: 'Pivot to merchant categories competitors ignore (kiranas, pharmacies, local services). Go deeper, not broader.' },
  { risk: 'Talent Acquisition', severity: 'medium' as const, probability: '45%', impact: 'Can\'t hire growth marketers fast enough. Team scaling from 4 to 15 takes longer than planned.', mitigation: ['Start hiring pipeline in Phase 1 for Phase 2 roles', 'Offer ESOPs to compensate below-market salary', 'Use freelancers for influencer & content roles initially', 'Build internal training program for junior hires'], contingency: 'Use agency support (paid ads, influencer management) as bridge. Hire for 80% fit and train the remaining 20%.' },
  { risk: 'Regulatory Changes', severity: 'low' as const, probability: '20%', impact: 'New regulations on digital payments, cashback programs, or data privacy affect NuqtaCoin or user data collection.', mitigation: ['Stay ahead of RBI digital payment guidelines', 'Ensure DPDP Act compliance from day 1', 'Legal counsel review of all incentive structures', 'Keep NuqtaCoin as loyalty points, not currency'], contingency: 'Restructure NuqtaCoin as pure discount mechanism if regulatory issues arise. Adjust cashback to comply with new rules.' },
  { risk: 'Burn Rate Acceleration', severity: 'high' as const, probability: '55%', impact: 'Multi-city expansion + paid ads + team scaling burns through pre-seed faster than planned. Runway drops below 6 months.', mitigation: ['Monthly burn rate review with hard caps per channel', 'Kill channels with CAC > 2x target within 30 days', 'Phase city launches — don\'t launch 10 cities simultaneously', 'Maintain 9-month runway at all times'], contingency: 'Cut team to core 4, pause all paid acquisition, focus on 2-3 highest-performing organic channels until bridge funding secured.' },
  { risk: 'Multi-City Coordination', severity: 'medium' as const, probability: '50%', impact: 'Quality drops in new cities. Merchant onboarding too slow. City launches fail to hit 200 DAU targets.', mitigation: ['Standardized city launch playbook (see Playbooks tab)', 'Regional managers with P&L ownership', 'Weekly city-level performance reviews', 'Minimum viable supply (15 merchants) before launch'], contingency: 'Pause expansion, consolidate existing cities to profitability. Only launch new cities when current cities hit DAU targets.' },
];

// ============================================
// HELPERS
// ============================================
function formatINR(num: number): string {
  if (Math.abs(num) >= 10000000) return `₹${(num / 10000000).toFixed(1)} Cr`;
  if (Math.abs(num) >= 100000) return `₹${(num / 100000).toFixed(1)} L`;
  if (Math.abs(num) >= 1000) return `₹${(num / 1000).toFixed(0)}K`;
  return `₹${num.toLocaleString('en-IN')}`;
}

function formatNum(num: number): string {
  if (num >= 10000000) return `${(num / 10000000).toFixed(1)} Cr`;
  if (num >= 100000) return `${(num / 100000).toFixed(1)}L`;
  if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
  return num.toLocaleString('en-IN');
}

// ============================================
// MAIN PAGE
// ============================================
export default function AcquisitionStrategyPage() {
  const [activeTab, setActiveTab] = useState<SectionTab>('overview');
  const [expandedPhases, setExpandedPhases] = useState<Record<string, boolean>>({ foundation: true });
  const [expandedChannels, setExpandedChannels] = useState<Record<string, boolean>>({});
  const [activePlaybook, setActivePlaybook] = useState('campus');

  const totalBudgetY1 = monthlyBudget.reduce((s, m) => s + m.total, 0);
  const totalUsersAllChannels = acquisitionChannels.reduce((s, c) => s + c.users, 0);

  const tabs = [
    { id: 'overview' as SectionTab, label: 'Overview', icon: BarChart3 },
    { id: 'college-fest' as SectionTab, label: 'College Fest', icon: ShoppingCart },
    { id: 'phases' as SectionTab, label: 'Phases', icon: Calendar },
    { id: 'channels' as SectionTab, label: 'Channels', icon: Target },
    { id: 'team' as SectionTab, label: 'Team', icon: Users },
    { id: 'playbooks' as SectionTab, label: 'Playbooks', icon: BookOpen },
    { id: 'funnel' as SectionTab, label: 'Funnel', icon: Filter },
    { id: 'budget' as SectionTab, label: 'Budget', icon: DollarSign },
    { id: 'risks' as SectionTab, label: 'Risks', icon: AlertTriangle },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* ═══════ HEADER ═══════ */}
      <div className="bg-gradient-to-r from-[#0a1628] via-purple-900/20 to-[#0a1628] border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex items-center gap-3 sm:gap-4 mb-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
              <Target size={24} className="text-white sm:hidden" />
              <Target size={32} className="text-white hidden sm:block" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">Acquisition Strategy</h1>
              <p className="text-slate-400 text-sm sm:text-base">5-Phase Roadmap &bull; 12 Channels &bull; 35K to 5M Users</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm flex-wrap">
            <Link href="/rez-financials" className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full border border-orange-500/30 hover:bg-orange-500/30 transition-colors flex items-center gap-1">
              <ArrowLeft size={14} /> ReZ Financials
            </Link>
            <div className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30 flex items-center gap-1">
              <Target size={14} /> Acquisition Deep-Dive
            </div>
            <div className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
              Source: ReZ 2026 Financial Model
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ STICKY TAB NAV ═══════ */}
      <div className="sticky top-0 bg-[#0a1628]/95 backdrop-blur-xl border-b border-white/10 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon size={14} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══════ CONTENT ═══════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">

        {/* ═══════ OVERVIEW TAB ═══════ */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
              <p className="text-purple-400 font-bold flex items-center gap-2"><Rocket size={18} /> Acquisition Overview</p>
              <p className="text-slate-300 text-sm mt-1">Complete user acquisition strategy from 0 to 5M users across 3 years. 12 channels, 5 phases, blended CAC starting at ₹76.</p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {[
                { label: 'Y1 Target Users', value: '35K', sub: 'Organic-first strategy', color: 'text-emerald-400', border: 'border-emerald-500/30 bg-emerald-500/5' },
                { label: 'Y2 Target Users', value: '1.5M', sub: 'Series A fueled expansion', color: 'text-blue-400', border: 'border-blue-500/30 bg-blue-500/5' },
                { label: 'Y3 Target Users', value: '5M', sub: 'National brand play', color: 'text-orange-400', border: 'border-orange-500/30 bg-orange-500/5' },
                { label: 'Active Channels', value: '12', sub: 'Diversified mix', color: 'text-purple-400', border: 'border-purple-500/30 bg-purple-500/5' },
                { label: 'Blended CAC (Y1)', value: '₹76', sub: 'Organic channels dominate', color: 'text-emerald-400', border: 'border-emerald-500/30 bg-emerald-500/5' },
                { label: 'Cheapest Channel', value: '₹25', sub: 'WhatsApp Marketing', color: 'text-lime-400', border: 'border-lime-500/30 bg-lime-500/5' },
                { label: 'Y1 Acq Budget', value: formatINR(totalBudgetY1), sub: 'Across all channels', color: 'text-yellow-400', border: 'border-yellow-500/30 bg-yellow-500/5' },
                { label: 'Cities (Y1→Y3)', value: '1→300', sub: '32 by M12, 120 Y2, 300 Y3', color: 'text-cyan-400', border: 'border-cyan-500/30 bg-cyan-500/5' },
              ].map(kpi => (
                <div key={kpi.label} className={`rounded-xl p-4 border ${kpi.border}`}>
                  <span className="text-slate-400 text-xs">{kpi.label}</span>
                  <p className={`text-xl sm:text-2xl font-bold ${kpi.color}`}>{kpi.value}</p>
                  <p className="text-[10px] text-slate-500 mt-1">{kpi.sub}</p>
                </div>
              ))}
            </div>

            {/* CAC Progression */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><TrendingUp size={18} className="text-orange-400" /> CAC Escalation Curve</h3>
              <div className="grid sm:grid-cols-4 gap-3">
                {[
                  { period: 'M1-M6', cac: 76, channels: 'Campus, WhatsApp, ASO, merchant referrals', color: 'emerald' },
                  { period: 'M7-M12', cac: 95, channels: 'Adding Meta/Google paid, influencers', color: 'blue' },
                  { period: 'Year 2', cac: 150, channels: 'Mostly paid at scale, brand campaigns', color: 'orange' },
                  { period: 'Year 3', cac: 250, channels: 'National brand, TV/OOH, heavy digital', color: 'red' },
                ].map(c => (
                  <div key={c.period} className={`rounded-lg p-4 bg-${c.color}-500/10 border border-${c.color}-500/30`}>
                    <p className={`text-${c.color}-400 font-bold text-lg`}>₹{c.cac}</p>
                    <p className="text-white text-sm font-medium">{c.period}</p>
                    <p className="text-slate-400 text-xs mt-1">{c.channels}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Channel Mix */}
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { group: 'Organic Channels', channels: acquisitionChannels.filter(c => ['Campus Ambassadors', 'SEO / Content', 'App Store Optimization', 'WhatsApp Marketing'].includes(c.channel)), color: 'emerald' },
                { group: 'Paid Channels', channels: acquisitionChannels.filter(c => ['Paid Ads (Meta)', 'Paid Ads (Google)', 'Influencer Marketing'].includes(c.channel)), color: 'blue' },
                { group: 'Referral & Events', channels: acquisitionChannels.filter(c => ['Merchant-Led Referrals', 'User Referrals', 'Campus Events', 'Community Events', 'Corporate Tie-ups'].includes(c.channel)), color: 'purple' },
              ].map(g => {
                const totalUsers = g.channels.reduce((s, c) => s + c.users, 0);
                const totalBudget = g.channels.reduce((s, c) => s + c.budget, 0);
                const avgCac = Math.round(totalBudget / totalUsers);
                return (
                  <div key={g.group} className={`bg-${g.color}-500/10 rounded-xl p-5 border border-${g.color}-500/30`}>
                    <h4 className={`text-sm font-bold text-${g.color}-400 mb-3`}>{g.group}</h4>
                    <div className="flex justify-between mb-3">
                      <div><p className="text-white text-lg font-bold">{formatNum(totalUsers)}</p><p className="text-slate-500 text-xs">users/mo</p></div>
                      <div className="text-right"><p className={`text-${g.color}-400 text-lg font-bold`}>₹{avgCac}</p><p className="text-slate-500 text-xs">avg CAC</p></div>
                    </div>
                    <div className="space-y-1.5">
                      {g.channels.map(ch => (
                        <div key={ch.channel} className="flex justify-between text-xs">
                          <span className="text-slate-300">{ch.channel}</span>
                          <span className={`text-${g.color}-400 font-medium`}>₹{ch.cac}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ═══════ COLLEGE FEST TAB ═══════ */}
        {activeTab === 'college-fest' && (
          <div className="space-y-6">
            {/* Hero Banner */}
            <div className="bg-gradient-to-r from-amber-500/20 via-orange-500/10 to-amber-500/20 border border-amber-500/30 rounded-xl p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shrink-0">
                  <ShoppingCart size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">College Business Fest</h2>
                  <p className="text-amber-400 text-sm font-medium mt-1">Near-Zero CAC Acquisition Through Student Entrepreneurship</p>
                  <p className="text-slate-300 text-xs mt-2 leading-relaxed">Partner with 20 student businesses at college fests. Invest ₹10K each (50-50 partnership). Students get real business experience, customers get free ₹100 ReZ Coins, and Nuqta gets real transacting users — everyone wins.</p>
                </div>
              </div>
            </div>

            {/* The Model — Visual Flow */}
            <div className="bg-white/5 rounded-xl p-5 sm:p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2"><Sparkles size={18} className="text-amber-400" /> How It Works — The Win-Win-Win Model</h3>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/30 text-center">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-2">
                    <Store size={20} className="text-amber-400" />
                  </div>
                  <p className="text-amber-400 font-bold text-sm">20 Student Businesses</p>
                  <p className="text-slate-400 text-xs mt-1">Get ₹10K each to open stalls</p>
                  <p className="text-slate-500 text-[10px] mt-1">50-50 partnership with ReZ</p>
                </div>
                <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/30 text-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-2">
                    <Gift size={20} className="text-emerald-400" />
                  </div>
                  <p className="text-emerald-400 font-bold text-sm">Free ₹100 ReZ Coins</p>
                  <p className="text-slate-400 text-xs mt-1">Every student gets coins</p>
                  <p className="text-slate-500 text-[10px] mt-1">Must download app to receive</p>
                </div>
                <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/30 text-center">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-2">
                    <Rocket size={20} className="text-purple-400" />
                  </div>
                  <p className="text-purple-400 font-bold text-sm">Real Transactions</p>
                  <p className="text-slate-400 text-xs mt-1">Not just signups — actual orders</p>
                  <p className="text-slate-500 text-[10px] mt-1">500-1000 users per fest</p>
                </div>
              </div>

              {/* Transaction Flow */}
              <div className="bg-slate-800/50 rounded-xl p-4 sm:p-5">
                <h4 className="text-sm font-bold text-white mb-3">Transaction Flow — Single Purchase (₹200 MRP)</h4>
                <div className="space-y-2">
                  {[
                    { step: '1', label: 'Student pays', value: '₹100 cash + ₹100 ReZ Coins', note: 'Uses free event coins', color: 'blue' },
                    { step: '2', label: 'COGS deducted', value: '₹50', note: 'From ₹10K investment pool', color: 'red' },
                    { step: '3', label: 'Cashback earned', value: '₹30 ReZ Coins (15%)', note: 'Brings user back to platform', color: 'emerald' },
                    { step: '4', label: 'Student business profit', value: '₹100 cash received', note: 'After ₹50 COGS = ₹50 net profit', color: 'amber' },
                    { step: '5', label: 'ReZ cost per user', value: '₹100 (coin subsidy)', note: 'But got a REAL transacting user', color: 'purple' },
                  ].map(item => (
                    <div key={item.step} className={`flex items-center gap-3 p-2.5 rounded-lg bg-${item.color}-500/5 border border-${item.color}-500/20`}>
                      <div className={`w-6 h-6 rounded-full bg-${item.color}-500/20 flex items-center justify-center shrink-0`}>
                        <span className={`text-${item.color}-400 text-xs font-bold`}>{item.step}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-slate-400 text-xs">{item.label}</span>
                      </div>
                      <div className="text-right shrink-0">
                        <p className={`text-${item.color}-400 font-bold text-sm`}>{item.value}</p>
                        <p className="text-slate-500 text-[10px]">{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Unit Economics Breakdown */}
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <div className="px-5 py-4 border-b border-white/5">
                <h3 className="text-lg font-bold text-white flex items-center gap-2"><DollarSign size={18} className="text-emerald-400" /> Per-Fest Unit Economics</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="text-left px-4 py-3 text-slate-400 font-semibold text-xs">Line Item</th>
                      <th className="text-right px-4 py-3 text-slate-400 font-semibold text-xs">Amount</th>
                      <th className="text-left px-4 py-3 text-slate-400 font-semibold text-xs">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { item: 'Investment (20 businesses × ₹10K)', amount: '₹2,00,000', notes: '50-50 partnership capital', type: 'cost' },
                      { item: 'COGS capacity (₹10K ÷ ₹50)', amount: '200 txns/stall', notes: 'Each business can serve 200 customers', type: 'neutral' },
                      { item: 'Total transaction capacity', amount: '4,000 txns', notes: '20 stalls × 200 transactions', type: 'neutral' },
                      { item: 'Free ReZ Coins (500 students × ₹100)', amount: '₹50,000', notes: 'Coin subsidy — the acquisition cost', type: 'cost' },
                      { item: 'Total ReZ spend per fest', amount: '₹2,50,000', notes: '₹2L investment + ₹50K coins', type: 'cost' },
                      { item: 'Transacting users acquired', amount: '500+', notes: 'Real purchases, not just signups', type: 'revenue' },
                      { item: 'Effective CAC', amount: '< ₹10', notes: '₹50K coins ÷ 500+ users (investment is recoverable)', type: 'revenue' },
                      { item: 'GMV generated', amount: '₹1,00,000+', notes: '500 users × ₹200 MRP', type: 'revenue' },
                      { item: 'Cashback coins distributed', amount: '₹15,000', notes: '500 × ₹30 — drives post-fest retention', type: 'neutral' },
                      { item: 'Student business total profit', amount: '₹25,000+', notes: '500 × ₹50 net profit per transaction', type: 'revenue' },
                    ].map(row => (
                      <tr key={row.item} className="border-t border-white/5 hover:bg-white/5">
                        <td className="px-4 py-2.5 text-white text-xs">{row.item}</td>
                        <td className={`px-4 py-2.5 text-right font-bold text-xs ${row.type === 'cost' ? 'text-red-400' : row.type === 'revenue' ? 'text-emerald-400' : 'text-slate-300'}`}>{row.amount}</td>
                        <td className="px-4 py-2.5 text-slate-500 text-xs">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Why This Works — 4 Stakeholders */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-amber-500/10 rounded-xl p-5 border border-amber-500/30">
                <h4 className="text-sm font-bold text-amber-400 mb-3 flex items-center gap-2"><Store size={14} /> Student Business Wins</h4>
                <div className="space-y-1.5">
                  {[
                    'Zero risk — COGS covered by ReZ investment',
                    'Keep all profit above ₹50 COGS',
                    '₹50 profit per ₹200 sale (25% margin)',
                    '₹10K investment covers 200 transactions',
                    'Real entrepreneurship experience',
                    'Become micro-merchant on Nuqta platform post-fest',
                  ].map(w => (
                    <p key={w} className="text-slate-300 text-xs flex items-start gap-1.5"><CheckCircle size={10} className="text-amber-400 mt-0.5 shrink-0" />{w}</p>
                  ))}
                </div>
              </div>
              <div className="bg-emerald-500/10 rounded-xl p-5 border border-emerald-500/30">
                <h4 className="text-sm font-bold text-emerald-400 mb-3 flex items-center gap-2"><Users size={14} /> Student Customer Wins</h4>
                <div className="space-y-1.5">
                  {[
                    'Free ₹100 to spend at 20 stalls',
                    'Pay only ₹100 for ₹200 worth of goods',
                    'Earn 15% cashback (₹30) for future use',
                    'Discover new student businesses',
                    'Fun event experience with friends',
                    'App installed with transaction history — ready to reuse',
                  ].map(w => (
                    <p key={w} className="text-slate-300 text-xs flex items-start gap-1.5"><CheckCircle size={10} className="text-emerald-400 mt-0.5 shrink-0" />{w}</p>
                  ))}
                </div>
              </div>
              <div className="bg-purple-500/10 rounded-xl p-5 border border-purple-500/30">
                <h4 className="text-sm font-bold text-purple-400 mb-3 flex items-center gap-2"><Rocket size={14} /> ReZ / Nuqta Wins</h4>
                <div className="space-y-1.5">
                  {[
                    'CAC effectively < ₹10 (near zero)',
                    '500+ REAL transacting users per fest (not just signups)',
                    'Users have completed a real purchase — highest quality',
                    '₹30 cashback coins drive post-fest retention',
                    '20 student businesses become micro-merchants',
                    'Brand presence + buzz on campus',
                    '₹10K investment is recoverable (COGS pool, not a grant)',
                  ].map(w => (
                    <p key={w} className="text-slate-300 text-xs flex items-start gap-1.5"><CheckCircle size={10} className="text-purple-400 mt-0.5 shrink-0" />{w}</p>
                  ))}
                </div>
              </div>
              <div className="bg-blue-500/10 rounded-xl p-5 border border-blue-500/30">
                <h4 className="text-sm font-bold text-blue-400 mb-3 flex items-center gap-2"><Award size={14} /> College Wins</h4>
                <div className="space-y-1.5">
                  {[
                    'Entrepreneurship event for students (great optics)',
                    'Zero cost to the college',
                    'Students learn real business skills',
                    'Attractive event for placements branding',
                    'Can tie into E-Cell / business club activities',
                  ].map(w => (
                    <p key={w} className="text-slate-300 text-xs flex items-start gap-1.5"><CheckCircle size={10} className="text-blue-400 mt-0.5 shrink-0" />{w}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Scale Plan */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2"><TrendingUp size={16} className="text-amber-400" /> Scale Plan: 2 Fests/Month</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead className="bg-white/5">
                    <tr>
                      {['Period', 'Fests/Month', 'Users/Month', 'Monthly Spend', 'Cumulative Users', 'Businesses Activated'].map(h => (
                        <th key={h} className="text-left px-3 py-2 text-amber-400 font-semibold whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { period: 'M1-M3', fests: 1, users: 500, spend: '₹2.5L', cumUsers: '1,500', businesses: 60 },
                      { period: 'M4-M6', fests: 2, users: 1000, spend: '₹5L', cumUsers: '4,500', businesses: 180 },
                      { period: 'M7-M12', fests: 3, users: 1500, spend: '₹7.5L', cumUsers: '13,500', businesses: 540 },
                      { period: 'Year 2', fests: 5, users: 2500, spend: '₹12.5L', cumUsers: '43,500', businesses: 1740 },
                      { period: 'Year 3', fests: 10, users: 5000, spend: '₹25L', cumUsers: '103,500', businesses: 4140 },
                    ].map(row => (
                      <tr key={row.period} className="border-t border-white/5 hover:bg-white/5">
                        <td className="px-3 py-2 text-white font-bold">{row.period}</td>
                        <td className="px-3 py-2 text-slate-300">{row.fests}</td>
                        <td className="px-3 py-2 text-emerald-400 font-bold">{formatNum(row.users)}</td>
                        <td className="px-3 py-2 text-orange-400">{row.spend}</td>
                        <td className="px-3 py-2 text-blue-400 font-bold">{row.cumUsers}</td>
                        <td className="px-3 py-2 text-amber-400">{row.businesses}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[10px] text-slate-500 mt-3">Student businesses from fests become micro-merchants on Nuqta platform, creating a self-reinforcing supply-side flywheel.</p>
            </div>

            {/* Post-Fest Retention Strategy */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2"><RefreshCw size={16} className="text-emerald-400" /> Post-Fest Retention Flywheel</h3>
              <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
                {[
                  { label: 'Fest Purchase', sub: '₹200 MRP, ₹100 paid', color: 'amber' },
                  { label: '₹30 Cashback', sub: 'ReZ Coins earned', color: 'emerald' },
                  { label: '48h Push', sub: '"Coins expiring!"', color: 'blue' },
                  { label: '2nd Order', sub: 'At any Nuqta merchant', color: 'purple' },
                  { label: 'More Coins', sub: 'Habit loop begins', color: 'orange' },
                ].map((step, i) => (
                  <React.Fragment key={step.label}>
                    <div className={`bg-${step.color}-500/10 rounded-lg p-3 border border-${step.color}-500/30 text-center min-w-[120px]`}>
                      <p className={`text-${step.color}-400 font-bold text-xs`}>{step.label}</p>
                      <p className="text-slate-500 text-[10px]">{step.sub}</p>
                    </div>
                    {i < 4 && <ArrowRight size={16} className="text-slate-600 shrink-0 rotate-90 sm:rotate-0" />}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: 'Investment/Fest', value: '₹2.5L', sub: '₹2L businesses + ₹50K coins', color: 'text-orange-400', border: 'border-orange-500/30 bg-orange-500/5' },
                { label: 'Effective CAC', value: '< ₹10', sub: 'Coin cost ÷ transacting users', color: 'text-emerald-400', border: 'border-emerald-500/30 bg-emerald-500/5' },
                { label: 'Users/Fest', value: '500+', sub: 'Real transactions, not just signups', color: 'text-purple-400', border: 'border-purple-500/30 bg-purple-500/5' },
                { label: 'Business Profit', value: '₹50/sale', sub: '₹100 cash - ₹50 COGS', color: 'text-amber-400', border: 'border-amber-500/30 bg-amber-500/5' },
              ].map(kpi => (
                <div key={kpi.label} className={`rounded-xl p-4 border ${kpi.border}`}>
                  <span className="text-slate-400 text-xs">{kpi.label}</span>
                  <p className={`text-xl sm:text-2xl font-bold ${kpi.color}`}>{kpi.value}</p>
                  <p className="text-[10px] text-slate-500 mt-1">{kpi.sub}</p>
                </div>
              ))}
            </div>

            {/* Comparison vs Traditional CAC */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-sm font-bold text-white mb-4">College Fest CAC vs Other Channels</h3>
              <div className="space-y-2">
                {[
                  { channel: 'College Business Fest', cac: 10, width: 4, color: 'amber', highlight: true },
                  { channel: 'WhatsApp Marketing', cac: 25, width: 10, color: 'lime', highlight: false },
                  { channel: 'App Store Optimization', cac: 40, width: 16, color: 'teal', highlight: false },
                  { channel: 'Merchant-Led Referrals', cac: 50, width: 20, color: 'emerald', highlight: false },
                  { channel: 'Campus Ambassadors', cac: 67, width: 27, color: 'purple', highlight: false },
                  { channel: 'Campus Events', cac: 100, width: 40, color: 'indigo', highlight: false },
                  { channel: 'User Referrals', cac: 100, width: 40, color: 'green', highlight: false },
                  { channel: 'Paid Ads (Meta)', cac: 300, width: 100, color: 'blue', highlight: false },
                ].map(ch => (
                  <div key={ch.channel} className="flex items-center gap-3">
                    <div className="w-36 sm:w-44 shrink-0 text-right">
                      <span className={`text-xs ${ch.highlight ? 'text-amber-400 font-bold' : 'text-slate-400'}`}>{ch.channel}</span>
                    </div>
                    <div className="flex-1">
                      <div className={`bg-${ch.color}-500/40 rounded-r h-5 flex items-center px-2 ${ch.highlight ? 'ring-1 ring-amber-400/50' : ''}`} style={{ width: `${Math.max(ch.width, 8)}%` }}>
                        <span className="text-white text-[10px] font-bold">₹{ch.cac}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-slate-500 mt-3">College Business Fest achieves the lowest CAC of any channel because users complete real transactions — not just installs.</p>
            </div>
          </div>
        )}

        {/* ═══════ PHASES TAB ═══════ */}
        {activeTab === 'phases' && (
          <div className="space-y-6">
            <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-xl p-4">
              <p className="text-indigo-400 font-bold flex items-center gap-2"><Calendar size={18} /> 5-Phase Acquisition Roadmap</p>
              <p className="text-slate-300 text-sm mt-1">From organic-first foundation to national dominance. Each phase builds on the previous, layering new channels as CAC economics are proven.</p>
            </div>

            {/* Phase Timeline Summary */}
            <div className="flex flex-wrap gap-2">
              {acquisitionPhases.map(p => (
                <button key={p.id} onClick={() => setExpandedPhases(prev => ({ ...prev, [p.id]: !prev[p.id] }))}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                    expandedPhases[p.id] ? `bg-${p.color}-500/20 text-${p.color}-400 border-${p.color}-500/30` : 'bg-white/5 text-slate-400 border-white/10 hover:bg-white/10'
                  }`}>
                  {p.period}
                </button>
              ))}
            </div>

            {/* Phase Cards */}
            {acquisitionPhases.map(phase => (
              <div key={phase.id} className={`bg-white/5 rounded-xl border border-white/10 overflow-hidden`}>
                <button onClick={() => setExpandedPhases(prev => ({ ...prev, [phase.id]: !prev[phase.id] }))}
                  className="w-full px-5 py-4 flex items-center justify-between hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full bg-${phase.color}-500`} />
                    <div className="text-left">
                      <p className="text-white font-bold">{phase.name}</p>
                      <p className="text-slate-400 text-xs">{phase.period} &bull; {phase.cities} {phase.cities === 1 ? 'city' : 'cities'} &bull; Team of {phase.teamSize}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center gap-4">
                      <div className="text-right"><p className={`text-${phase.color}-400 font-bold`}>{formatNum(phase.targetUsers)}</p><p className="text-slate-500 text-[10px]">users</p></div>
                      <div className="text-right"><p className="text-slate-300 font-bold">{formatINR(phase.budgetINR)}</p><p className="text-slate-500 text-[10px]">budget</p></div>
                      <div className="text-right"><p className="text-orange-400 font-bold">₹{phase.cacTarget}</p><p className="text-slate-500 text-[10px]">CAC target</p></div>
                    </div>
                    {expandedPhases[phase.id] ? <ChevronDown size={18} className="text-slate-400" /> : <ChevronRight size={18} className="text-slate-400" />}
                  </div>
                </button>
                {expandedPhases[phase.id] && (
                  <div className="px-5 pb-5 border-t border-white/5">
                    {/* Mobile stats */}
                    <div className="grid grid-cols-3 gap-3 sm:hidden mt-4 mb-4">
                      <div className={`text-center p-2 rounded-lg bg-${phase.color}-500/10`}><p className={`text-${phase.color}-400 font-bold`}>{formatNum(phase.targetUsers)}</p><p className="text-slate-500 text-[10px]">users</p></div>
                      <div className="text-center p-2 rounded-lg bg-white/5"><p className="text-slate-300 font-bold text-sm">{formatINR(phase.budgetINR)}</p><p className="text-slate-500 text-[10px]">budget</p></div>
                      <div className="text-center p-2 rounded-lg bg-orange-500/10"><p className="text-orange-400 font-bold">₹{phase.cacTarget}</p><p className="text-slate-500 text-[10px]">CAC</p></div>
                    </div>

                    <p className="text-slate-300 text-sm mt-4 mb-4 italic">{phase.focus}</p>

                    <div className="grid sm:grid-cols-3 gap-4">
                      <div>
                        <h4 className="text-xs font-bold text-purple-400 mb-2 flex items-center gap-1"><Target size={12} /> Active Channels</h4>
                        <div className="space-y-1">
                          {phase.channelsActive.map(ch => (
                            <p key={ch} className="text-slate-300 text-xs flex items-center gap-1.5"><ChevronRight size={10} className="text-purple-400" />{ch}</p>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-emerald-400 mb-2 flex items-center gap-1"><CheckCircle size={12} /> Key Milestones</h4>
                        <div className="space-y-1">
                          {phase.milestones.map(m => (
                            <p key={m} className="text-slate-300 text-xs flex items-start gap-1.5"><CheckCircle size={10} className="text-emerald-400 mt-0.5 shrink-0" />{m}</p>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-red-400 mb-2 flex items-center gap-1"><AlertTriangle size={12} /> Risks</h4>
                        <div className="space-y-1">
                          {phase.risks.map(r => (
                            <p key={r} className="text-slate-300 text-xs flex items-start gap-1.5"><AlertTriangle size={10} className="text-red-400 mt-0.5 shrink-0" />{r}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ═══════ CHANNELS TAB ═══════ */}
        {activeTab === 'channels' && (
          <div className="space-y-6">
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
              <p className="text-purple-400 font-bold flex items-center gap-2"><Target size={18} /> 12 Acquisition Channels — Deep Dive</p>
              <p className="text-slate-300 text-sm mt-1">
                Total monthly budget: {formatINR(acquisitionChannels.reduce((s, c) => s + c.budget, 0))} &bull; {formatNum(totalUsersAllChannels)} users/month &bull; Blended CAC ₹{Math.round(acquisitionChannels.reduce((s, c) => s + c.budget, 0) / totalUsersAllChannels)}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {acquisitionChannels.map(ch => {
                const Icon = ch.icon;
                const pctTotal = ((ch.users / totalUsersAllChannels) * 100).toFixed(1);
                const isExpanded = expandedChannels[ch.channel];
                return (
                  <div key={ch.channel} className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                    <button onClick={() => setExpandedChannels(prev => ({ ...prev, [ch.channel]: !prev[ch.channel] }))}
                      className="w-full p-4 flex items-start justify-between hover:bg-white/5 transition-colors text-left">
                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-lg ${ch.color}/20 flex items-center justify-center shrink-0`}>
                          <Icon size={16} className="text-white" />
                        </div>
                        <div>
                          <p className="text-white font-bold text-sm">{ch.channel}</p>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-orange-400 text-xs font-bold">₹{ch.cac} CAC</span>
                            <span className="text-blue-400 text-xs">{formatNum(ch.users)}/mo</span>
                            <span className="text-slate-500 text-xs">{pctTotal}%</span>
                          </div>
                        </div>
                      </div>
                      {isExpanded ? <ChevronDown size={14} className="text-slate-400 mt-1" /> : <ChevronRight size={14} className="text-slate-400 mt-1" />}
                    </button>
                    {isExpanded && (
                      <div className="px-4 pb-4 border-t border-white/5 space-y-3">
                        <div className="mt-3">
                          <p className="text-xs font-bold text-purple-400 mb-1">Strategy</p>
                          <p className="text-slate-300 text-xs">{ch.strategy}</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-blue-400 mb-1">Tactics</p>
                          {ch.tactics.map(t => (
                            <p key={t} className="text-slate-300 text-xs flex items-start gap-1.5 mb-0.5"><ChevronRight size={10} className="text-blue-400 mt-0.5 shrink-0" />{t}</p>
                          ))}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-emerald-400 mb-1">KPIs</p>
                          {ch.kpis.map(k => (
                            <p key={k} className="text-slate-300 text-xs flex items-start gap-1.5 mb-0.5"><CheckCircle size={10} className="text-emerald-400 mt-0.5 shrink-0" />{k}</p>
                          ))}
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div><span className="text-slate-500">Budget:</span> <span className="text-white">{formatINR(ch.budget)}/mo</span></div>
                          <div><span className="text-slate-500">Team:</span> <span className="text-white">{ch.team}</span></div>
                          <div><span className="text-slate-500">Tools:</span> <span className="text-slate-300">{ch.tools.join(', ')}</span></div>
                          <div><span className="text-slate-500">Ramp:</span> <span className="text-slate-300">{ch.ramp}</span></div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ═══════ TEAM TAB ═══════ */}
        {activeTab === 'team' && (
          <div className="space-y-6">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
              <p className="text-blue-400 font-bold flex items-center gap-2"><Users size={18} /> Acquisition Team Structure</p>
              <p className="text-slate-300 text-sm mt-1">Scaling from 4 people (Phase 1) to 50+ (Year 3). Hire ahead of need — recruit Phase 2 roles during Phase 1.</p>
            </div>

            {/* Team Scaling Timeline */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-sm font-bold text-white mb-4">Team Size by Phase</h3>
              <div className="flex items-center justify-between gap-2 overflow-x-auto">
                {acquisitionPhases.map((p, i) => (
                  <React.Fragment key={p.id}>
                    <div className="text-center flex-shrink-0">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-${p.color}-500/20 border-2 border-${p.color}-500/50 flex items-center justify-center mx-auto`}>
                        <span className={`text-${p.color}-400 font-bold text-lg`}>{p.teamSize}</span>
                      </div>
                      <p className="text-slate-400 text-xs mt-1.5">{p.period}</p>
                      <p className="text-slate-500 text-[10px]">{p.name.split(': ')[1]}</p>
                    </div>
                    {i < acquisitionPhases.length - 1 && <ArrowRight size={16} className="text-slate-600 shrink-0" />}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Role Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {teamRoles.map(role => {
                const Icon = role.icon;
                return (
                  <div key={role.title} className="bg-white/5 rounded-xl p-5 border border-white/10">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg bg-${role.color}-500/20 flex items-center justify-center shrink-0`}>
                        <Icon size={18} className={`text-${role.color}-400`} />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">{role.title}</p>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full bg-${role.color}-500/20 text-${role.color}-400 border border-${role.color}-500/30`}>{role.hirePhase}</span>
                      </div>
                    </div>
                    <p className="text-orange-400 text-xs font-bold mb-2">{role.salary}</p>
                    <div className="space-y-1 mb-3">
                      {role.responsibilities.map(r => (
                        <p key={r} className="text-slate-300 text-xs flex items-start gap-1.5"><ChevronRight size={10} className="text-slate-500 mt-0.5 shrink-0" />{r}</p>
                      ))}
                    </div>
                    <div className="border-t border-white/5 pt-2">
                      <p className="text-slate-500 text-[10px] mb-1">KPIs:</p>
                      {role.kpis.map(k => (
                        <p key={k} className="text-emerald-400 text-[10px]">&bull; {k}</p>
                      ))}
                      <p className="text-slate-500 text-[10px] mt-1">Reports to: <span className="text-slate-300">{role.reportsTo}</span></p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Hiring Timeline Table */}
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-white/5">
                    <tr>
                      {['Phase', 'New Hires', 'Total Team', 'Monthly Payroll'].map(h => (
                        <th key={h} className="text-left px-4 py-3 text-blue-400 font-semibold text-xs whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { phase: 'Phase 1 (M1-M3)', hires: 'Growth Lead, Campus Mgr, SEO Specialist, BizDev Lead', total: 4, payroll: '₹3.5-5L' },
                      { phase: 'Phase 2 (M4-M6)', hires: '+ Performance Mktg, Community Mgr, Influencer Coordinator, +1 BizDev', total: 8, payroll: '₹7-10L' },
                      { phase: 'Phase 3 (M7-M12)', hires: '+ Partnership Mgr, 2 Regional Mgrs, 2 Campus Leads, 2 BizDev reps', total: 15, payroll: '₹14-20L' },
                      { phase: 'Phase 4 (Year 2)', hires: '+ Brand Mgr, Data Analyst, 10 City Mgrs, 5 BizDev, Creative team', total: 35, payroll: '₹40-55L' },
                      { phase: 'Phase 5 (Year 3)', hires: '+ VP Growth, Media Buyer team, PR, Regional VPs', total: 50, payroll: '₹70-100L' },
                    ].map(row => (
                      <tr key={row.phase} className="border-t border-white/5 hover:bg-white/5">
                        <td className="px-4 py-2.5 text-white font-medium text-xs">{row.phase}</td>
                        <td className="px-4 py-2.5 text-slate-300 text-xs">{row.hires}</td>
                        <td className="px-4 py-2.5 text-blue-400 font-bold">{row.total}</td>
                        <td className="px-4 py-2.5 text-orange-400 font-bold text-xs">{row.payroll}/mo</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ═══════ PLAYBOOKS TAB ═══════ */}
        {activeTab === 'playbooks' && (
          <div className="space-y-6">
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
              <p className="text-emerald-400 font-bold flex items-center gap-2"><BookOpen size={18} /> Acquisition Playbooks</p>
              <p className="text-slate-300 text-sm mt-1">Step-by-step execution guides for the 5 most critical acquisition strategies. Each playbook is battle-tested and replicable.</p>
            </div>

            {/* Playbook Selector */}
            <div className="flex gap-2 flex-wrap">
              {playbooks.map(pb => {
                const Icon = pb.icon;
                return (
                  <button key={pb.id} onClick={() => setActivePlaybook(pb.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      activePlaybook === pb.id
                        ? `bg-${pb.color}-500/20 text-${pb.color}-400 border border-${pb.color}-500/30`
                        : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'
                    }`}>
                    <Icon size={14} /> {pb.name}
                  </button>
                );
              })}
            </div>

            {/* Active Playbook */}
            {playbooks.filter(pb => pb.id === activePlaybook).map(pb => {
              const Icon = pb.icon;
              return (
                <div key={pb.id} className="space-y-4">
                  <div className={`flex items-center gap-3 mb-2`}>
                    <div className={`w-10 h-10 rounded-lg bg-${pb.color}-500/20 flex items-center justify-center`}>
                      <Icon size={20} className={`text-${pb.color}-400`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{pb.name}</h3>
                      <p className="text-slate-400 text-xs">Owner: {pb.owner} &bull; Budget: {pb.budget}</p>
                    </div>
                  </div>

                  {/* Steps */}
                  {pb.steps.map(step => (
                    <div key={step.step} className={`bg-white/5 rounded-xl p-4 border-l-4 border-${pb.color}-500 border-t border-r border-b border-t-white/10 border-r-white/10 border-b-white/10`}>
                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-full bg-${pb.color}-500/20 flex items-center justify-center shrink-0`}>
                          <span className={`text-${pb.color}-400 font-bold text-sm`}>{step.step}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-white font-bold text-sm">{step.title}</p>
                            <span className="text-slate-500 text-xs flex items-center gap-1"><Clock size={10} />{step.duration}</span>
                          </div>
                          <p className="text-slate-300 text-xs leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Playbook KPIs */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="text-xs font-bold text-emerald-400 mb-2">Success KPIs</h4>
                    <div className="flex flex-wrap gap-2">
                      {pb.kpis.map(k => (
                        <span key={k} className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/30">{k}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ═══════ FUNNEL TAB ═══════ */}
        {activeTab === 'funnel' && (
          <div className="space-y-6">
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4">
              <p className="text-cyan-400 font-bold flex items-center gap-2"><Filter size={18} /> Acquisition Funnel & Metrics</p>
              <p className="text-slate-300 text-sm mt-1">10-stage funnel from awareness to referral. Based on 100K monthly impressions baseline. Optimize conversion at each stage.</p>
            </div>

            {/* Funnel Visualization */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10 space-y-2">
              {funnelStages.map((stage, i) => {
                const Icon = stage.icon;
                const widthPct = Math.max(15, (stage.usersIn / funnelStages[0].usersIn) * 100);
                return (
                  <div key={stage.stage} className="flex items-center gap-3">
                    <div className="w-28 sm:w-36 shrink-0 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <Icon size={14} className={`text-${stage.color}-400`} />
                        <span className="text-xs text-slate-300">{stage.stage}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className={`bg-${stage.color}-500/30 rounded-r-lg h-8 flex items-center px-3 transition-all`} style={{ width: `${widthPct}%` }}>
                        <span className="text-white text-xs font-bold">{formatNum(stage.usersIn)}</span>
                      </div>
                    </div>
                    <div className="w-16 text-right shrink-0">
                      {i < funnelStages.length - 1 && (
                        <span className={`text-${stage.color}-400 text-xs font-bold`}>{stage.conversionRate}%</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Per-Stage Optimizations */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {funnelStages.map(stage => {
                const Icon = stage.icon;
                return (
                  <div key={stage.stage} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={14} className={`text-${stage.color}-400`} />
                      <span className="text-white text-xs font-bold">{stage.stage}</span>
                      <span className={`text-${stage.color}-400 text-xs ml-auto`}>{stage.conversionRate}% conv.</span>
                    </div>
                    {stage.optimizations.map(o => (
                      <p key={o} className="text-slate-300 text-[10px] flex items-start gap-1 mb-0.5">
                        <Zap size={8} className={`text-${stage.color}-400 mt-0.5 shrink-0`} />{o}
                      </p>
                    ))}
                  </div>
                );
              })}
            </div>

            {/* Tracking Framework */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2"><Activity size={16} className="text-cyan-400" /> Tracking Framework</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-bold text-emerald-400 mb-2">Weekly Metrics</h4>
                  {['New installs by channel', 'Install-to-signup conversion', 'First order rate (within 7 days)', 'CAC by channel', 'Referral coefficient (k-factor)', 'WhatsApp message open/click rates'].map(m => (
                    <p key={m} className="text-slate-300 text-xs flex items-center gap-1.5 mb-1"><CheckCircle size={10} className="text-emerald-400" />{m}</p>
                  ))}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-blue-400 mb-2">Monthly Metrics</h4>
                  {['Blended CAC trend', 'LTV:CAC ratio by cohort', 'Organic vs paid split', 'Channel ROI ranking', 'City-level performance', 'Budget vs actual spend'].map(m => (
                    <p key={m} className="text-slate-300 text-xs flex items-center gap-1.5 mb-1"><CheckCircle size={10} className="text-blue-400" />{m}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══════ BUDGET TAB ═══════ */}
        {activeTab === 'budget' && (
          <div className="space-y-6">
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
              <p className="text-yellow-400 font-bold flex items-center gap-2"><DollarSign size={18} /> Budget Allocation & Spend Plan</p>
              <p className="text-slate-300 text-sm mt-1">Year 1 total acquisition budget: {formatINR(totalBudgetY1)}. Monthly breakdown across all 12 channels.</p>
            </div>

            {/* Monthly Budget Table */}
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="text-left px-3 py-2 text-yellow-400 font-semibold whitespace-nowrap sticky left-0 bg-slate-900/90">Month</th>
                      <th className="text-right px-3 py-2 text-purple-400 font-semibold whitespace-nowrap">Campus</th>
                      <th className="text-right px-3 py-2 text-lime-400 font-semibold whitespace-nowrap">WhatsApp</th>
                      <th className="text-right px-3 py-2 text-teal-400 font-semibold whitespace-nowrap">ASO</th>
                      <th className="text-right px-3 py-2 text-emerald-400 font-semibold whitespace-nowrap">Merchant</th>
                      <th className="text-right px-3 py-2 text-amber-400 font-semibold whitespace-nowrap">Community</th>
                      <th className="text-right px-3 py-2 text-cyan-400 font-semibold whitespace-nowrap">SEO</th>
                      <th className="text-right px-3 py-2 text-blue-400 font-semibold whitespace-nowrap">Meta</th>
                      <th className="text-right px-3 py-2 text-red-400 font-semibold whitespace-nowrap">Google</th>
                      <th className="text-right px-3 py-2 text-pink-400 font-semibold whitespace-nowrap">Influencer</th>
                      <th className="text-right px-3 py-2 text-green-400 font-semibold whitespace-nowrap">Referral</th>
                      <th className="text-right px-3 py-2 text-orange-400 font-semibold whitespace-nowrap">Corp</th>
                      <th className="text-right px-3 py-2 text-white font-bold whitespace-nowrap">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {monthlyBudget.map(row => (
                      <tr key={row.month} className="border-t border-white/5 hover:bg-white/5">
                        <td className="px-3 py-2 text-white font-bold sticky left-0 bg-[#0a1628]">{row.month}</td>
                        <td className="px-3 py-2 text-right text-slate-300">{row.campus > 0 ? formatINR(row.campus) : '-'}</td>
                        <td className="px-3 py-2 text-right text-slate-300">{row.whatsapp > 0 ? formatINR(row.whatsapp) : '-'}</td>
                        <td className="px-3 py-2 text-right text-slate-300">{row.aso > 0 ? formatINR(row.aso) : '-'}</td>
                        <td className="px-3 py-2 text-right text-slate-300">{row.merchantRef > 0 ? formatINR(row.merchantRef) : '-'}</td>
                        <td className="px-3 py-2 text-right text-slate-300">{row.community > 0 ? formatINR(row.community) : '-'}</td>
                        <td className="px-3 py-2 text-right text-slate-300">{row.seo > 0 ? formatINR(row.seo) : '-'}</td>
                        <td className="px-3 py-2 text-right text-blue-400">{row.meta > 0 ? formatINR(row.meta) : '-'}</td>
                        <td className="px-3 py-2 text-right text-red-400">{row.google > 0 ? formatINR(row.google) : '-'}</td>
                        <td className="px-3 py-2 text-right text-slate-300">{row.influencer > 0 ? formatINR(row.influencer) : '-'}</td>
                        <td className="px-3 py-2 text-right text-slate-300">{row.referral > 0 ? formatINR(row.referral) : '-'}</td>
                        <td className="px-3 py-2 text-right text-slate-300">{row.corporate > 0 ? formatINR(row.corporate) : '-'}</td>
                        <td className="px-3 py-2 text-right text-white font-bold">{formatINR(row.total)}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-white/5 border-t border-white/10">
                    <tr>
                      <td className="px-3 py-2 text-white font-bold sticky left-0 bg-slate-800">TOTAL</td>
                      <td className="px-3 py-2 text-right text-purple-400 font-bold">{formatINR(monthlyBudget.reduce((s, m) => s + m.campus, 0))}</td>
                      <td className="px-3 py-2 text-right text-lime-400 font-bold">{formatINR(monthlyBudget.reduce((s, m) => s + m.whatsapp, 0))}</td>
                      <td className="px-3 py-2 text-right text-teal-400 font-bold">{formatINR(monthlyBudget.reduce((s, m) => s + m.aso, 0))}</td>
                      <td className="px-3 py-2 text-right text-emerald-400 font-bold">{formatINR(monthlyBudget.reduce((s, m) => s + m.merchantRef, 0))}</td>
                      <td className="px-3 py-2 text-right text-amber-400 font-bold">{formatINR(monthlyBudget.reduce((s, m) => s + m.community, 0))}</td>
                      <td className="px-3 py-2 text-right text-cyan-400 font-bold">{formatINR(monthlyBudget.reduce((s, m) => s + m.seo, 0))}</td>
                      <td className="px-3 py-2 text-right text-blue-400 font-bold">{formatINR(monthlyBudget.reduce((s, m) => s + m.meta, 0))}</td>
                      <td className="px-3 py-2 text-right text-red-400 font-bold">{formatINR(monthlyBudget.reduce((s, m) => s + m.google, 0))}</td>
                      <td className="px-3 py-2 text-right text-pink-400 font-bold">{formatINR(monthlyBudget.reduce((s, m) => s + m.influencer, 0))}</td>
                      <td className="px-3 py-2 text-right text-green-400 font-bold">{formatINR(monthlyBudget.reduce((s, m) => s + m.referral, 0))}</td>
                      <td className="px-3 py-2 text-right text-orange-400 font-bold">{formatINR(monthlyBudget.reduce((s, m) => s + m.corporate, 0))}</td>
                      <td className="px-3 py-2 text-right text-yellow-400 font-bold">{formatINR(totalBudgetY1)}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            {/* Budget Shift: Organic vs Paid */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-sm font-bold text-white mb-4">Organic vs Paid Split by Phase</h3>
              <div className="space-y-3">
                {[
                  { phase: 'M1-M3 (Foundation)', organic: 85, paid: 15 },
                  { phase: 'M4-M6 (Growth)', organic: 45, paid: 55 },
                  { phase: 'M7-M12 (Scale)', organic: 35, paid: 65 },
                  { phase: 'Year 2 (Expansion)', organic: 20, paid: 80 },
                  { phase: 'Year 3 (Dominance)', organic: 15, paid: 85 },
                ].map(row => (
                  <div key={row.phase}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300">{row.phase}</span>
                      <span className="text-slate-500">{row.organic}% organic / {row.paid}% paid</span>
                    </div>
                    <div className="flex h-4 rounded-full overflow-hidden">
                      <div className="bg-emerald-500/60 transition-all" style={{ width: `${row.organic}%` }} />
                      <div className="bg-blue-500/60 transition-all" style={{ width: `${row.paid}%` }} />
                    </div>
                  </div>
                ))}
                <div className="flex items-center gap-4 mt-2 text-xs">
                  <span className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-emerald-500/60" /> Organic</span>
                  <span className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-blue-500/60" /> Paid</span>
                </div>
              </div>
            </div>

            {/* ROI Targets & Kill Criteria */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-emerald-500/10 rounded-xl p-5 border border-emerald-500/30">
                <h4 className="text-sm font-bold text-emerald-400 mb-3 flex items-center gap-1"><TrendingUp size={14} /> Scale (ROI &gt; 3x)</h4>
                {acquisitionChannels.filter(c => c.cac <= 75).map(ch => (
                  <div key={ch.channel} className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">{ch.channel}</span>
                    <span className="text-emerald-400 font-bold">₹{ch.cac}</span>
                  </div>
                ))}
                <p className="text-[10px] text-slate-500 mt-2">Increase budget aggressively. These are your money channels.</p>
              </div>
              <div className="bg-yellow-500/10 rounded-xl p-5 border border-yellow-500/30">
                <h4 className="text-sm font-bold text-yellow-400 mb-3 flex items-center gap-1"><Activity size={14} /> Monitor (ROI 1-3x)</h4>
                {acquisitionChannels.filter(c => c.cac > 75 && c.cac <= 150).map(ch => (
                  <div key={ch.channel} className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">{ch.channel}</span>
                    <span className="text-yellow-400 font-bold">₹{ch.cac}</span>
                  </div>
                ))}
                <p className="text-[10px] text-slate-500 mt-2">Optimize before scaling. Test creative variants weekly.</p>
              </div>
              <div className="bg-red-500/10 rounded-xl p-5 border border-red-500/30">
                <h4 className="text-sm font-bold text-red-400 mb-3 flex items-center gap-1"><AlertTriangle size={14} /> Watch (ROI &lt; 1x)</h4>
                {acquisitionChannels.filter(c => c.cac > 150).map(ch => (
                  <div key={ch.channel} className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">{ch.channel}</span>
                    <span className="text-red-400 font-bold">₹{ch.cac}</span>
                  </div>
                ))}
                <p className="text-[10px] text-slate-500 mt-2">Kill if CAC doesn&apos;t improve within 30 days. Reallocate budget.</p>
              </div>
            </div>
          </div>
        )}

        {/* ═══════ RISKS TAB ═══════ */}
        {activeTab === 'risks' && (
          <div className="space-y-6">
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
              <p className="text-red-400 font-bold flex items-center gap-2"><Shield size={18} /> Risks & Mitigation</p>
              <p className="text-slate-300 text-sm mt-1">8 key acquisition risks ranked by severity. Each has specific mitigation strategies and contingency plans.</p>
            </div>

            {/* Risk Summary */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/30 text-center">
                <p className="text-red-400 text-2xl font-bold">{risks.filter(r => r.severity === 'high').length}</p>
                <p className="text-slate-400 text-xs">High Severity</p>
              </div>
              <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/30 text-center">
                <p className="text-yellow-400 text-2xl font-bold">{risks.filter(r => r.severity === 'medium').length}</p>
                <p className="text-slate-400 text-xs">Medium Severity</p>
              </div>
              <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/30 text-center">
                <p className="text-blue-400 text-2xl font-bold">{risks.filter(r => r.severity === 'low').length}</p>
                <p className="text-slate-400 text-xs">Low Severity</p>
              </div>
            </div>

            {/* Risk Cards */}
            <div className="space-y-4">
              {risks.map(risk => {
                const borderColor = risk.severity === 'high' ? 'border-red-500' : risk.severity === 'medium' ? 'border-yellow-500' : 'border-blue-500';
                const badgeColor = risk.severity === 'high' ? 'bg-red-500/20 text-red-400 border-red-500/30' : risk.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' : 'bg-blue-500/20 text-blue-400 border-blue-500/30';
                return (
                  <div key={risk.risk} className={`bg-white/5 rounded-xl p-5 border-l-4 ${borderColor} border-t border-r border-b border-t-white/10 border-r-white/10 border-b-white/10`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <AlertTriangle size={16} className={risk.severity === 'high' ? 'text-red-400' : risk.severity === 'medium' ? 'text-yellow-400' : 'text-blue-400'} />
                        <h4 className="text-white font-bold">{risk.risk}</h4>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${badgeColor}`}>{risk.severity.toUpperCase()}</span>
                        <span className="text-slate-500 text-xs">P: {risk.probability}</span>
                      </div>
                    </div>
                    <p className="text-slate-300 text-sm mb-3">{risk.impact}</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-bold text-emerald-400 mb-1.5">Mitigation Strategies</p>
                        {risk.mitigation.map(m => (
                          <p key={m} className="text-slate-300 text-xs flex items-start gap-1.5 mb-1"><Shield size={10} className="text-emerald-400 mt-0.5 shrink-0" />{m}</p>
                        ))}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-orange-400 mb-1.5">Contingency Plan</p>
                        <p className="text-slate-300 text-xs leading-relaxed">{risk.contingency}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>

      <GlobalFooter />
    </div>
  );
}
