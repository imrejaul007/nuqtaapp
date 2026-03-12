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
import RezFooter from '@/components/RezFooter';

// ============================================
// TYPES
// ============================================
type SectionTab = 'overview' | 'college-fest' | 'merchant-plan' | 'phases' | 'channels' | 'team' | 'playbooks' | 'funnel' | 'budget' | 'risks';

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
      { step: 1, title: 'Partner 20 Student Businesses', description: 'Identify 20 student entrepreneurs from the college (food stalls, chai, juice, accessories, printing, snacks, etc.). Offer ₹10K each as 50-50 partnership investment to open a stall at the fest. Total investment: ₹2L per event. Launch locations: BTM, HSR, Koramangala, Jayanagar.', duration: 'T-2 weeks' },
      { step: 2, title: 'Set Up Stall Economics', description: 'Each stall sets MRP minimum ₹200. COGS per item = ₹50 (covered from the ₹10K investment pool = 200 transactions capacity). Student businesses keep all profit above COGS. 15% cashback in ReZ Coins on every purchase.', duration: 'T-1 week' },
      { step: 3, title: 'Distribute Free ₹100 ReZ Coins', description: 'Every attending student gets FREE ₹100 ReZ Coins (event-only). They MUST download the app and create account to receive coins. Coins are valid only at fest stalls, creating urgency to spend. This is your zero-CAC user acquisition.', duration: 'Event day' },
      { step: 4, title: 'Run the Fest', description: 'Students browse 20 stalls, spend ₹100 cash + ₹100 ReZ Coins per purchase (₹200 MRP). Student business gets ₹100 cash + settlement from ReZ for coins. COGS ₹50 comes from the ₹10K pool. Everyone earns 15% cashback (₹30 ReZ Coins) for future orders.', duration: '1-2 days' },
      { step: 5, title: 'Onboard Businesses Online', description: 'Post-fest, onboard student businesses as permanent merchants on the Nuqta app. They already have a product, pricing, and customer base. Set up their online store profile, menu, and delivery radius. Target: 30%+ of fest businesses continue selling online.', duration: 'T+1-3 days' },
      { step: 6, title: 'Post-Fest User Conversion', description: 'All students now have the app, a completed transaction history, and ₹30 cashback coins. Push notification within 48h: "Your favorite fest seller is now on the app — order again!" Users can reorder from the same businesses online.', duration: 'T+1 week' },
      { step: 7, title: 'Scale: 10 Fests M1, Grow Monthly', description: '10 fests across BTM, HSR, Koramangala, Jayanagar in M1 alone = 5,000+ users + 200 businesses (60+ go online). Each fest = 500 real transacting users at near-zero CAC. Expand to more Bangalore zones M2-M3, then new cities.', duration: 'Ongoing' },
    ],
    kpis: ['500+ transacting users per fest', 'CAC < ₹10 (effectively near-zero)', '10 fests in M1 = 5,000 users', '30%+ businesses continue online', 'M1: 200 merchants, 60+ online'], budget: '₹25L/month (10 fests × ₹2.5L)', owner: 'Campus Ambassador Program Manager + BizDev Lead',
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
    { id: 'merchant-plan' as SectionTab, label: 'Merchant Plan', icon: Store },
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
                  <p className="text-slate-300 text-xs mt-2 leading-relaxed">Partner with 20 student businesses at college fests. Invest ₹10K each (50-50 partnership). Students get real business experience, customers get free ₹100 ReZ Coins, and Nuqta gets real transacting users — everyone wins. Post-fest, student businesses continue selling online through the app as permanent merchants.</p>
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
                    'Real entrepreneurship experience with real revenue',
                    'Continue selling ONLINE through the app after fest',
                    'Become permanent merchant on the platform — ongoing income',
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
                    '20 student businesses become ONLINE merchants post-fest',
                    'Solves both supply (merchants) AND demand (users) in one event',
                    'Brand presence + buzz on campus',
                    '10 fests/month in M1 = 5,000 users + 200 merchants from day one',
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

            {/* Bangalore Launch Plan */}
            <div className="bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10 rounded-xl p-5 border border-blue-500/30">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2"><MapPin size={16} className="text-blue-400" /> M1 Launch: 10 Fests Across 4 Bangalore Zones</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                {[
                  { zone: 'BTM Layout', fests: 3, colleges: 'Christ, Jyoti Nivas, St. Joseph\'s area', color: 'blue' },
                  { zone: 'HSR Layout', fests: 2, colleges: 'Tech hubs, PG clusters, startup crowd', color: 'emerald' },
                  { zone: 'Koramangala', fests: 3, colleges: 'BMS, National, St. John\'s area', color: 'purple' },
                  { zone: 'Jayanagar', fests: 2, colleges: 'Residential density, Jain Univ area', color: 'orange' },
                ].map(z => (
                  <div key={z.zone} className={`bg-${z.color}-500/10 rounded-lg p-3 border border-${z.color}-500/30`}>
                    <p className={`text-${z.color}-400 font-bold text-sm`}>{z.zone}</p>
                    <p className="text-white text-lg font-bold">{z.fests} fests</p>
                    <p className="text-slate-500 text-[10px] mt-1">{z.colleges}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'M1 Total Fests', value: '10', color: 'text-amber-400' },
                  { label: 'M1 Users', value: '5,000+', color: 'text-emerald-400' },
                  { label: 'M1 Merchants', value: '200', color: 'text-blue-400' },
                  { label: 'M1 Investment', value: '₹25L', color: 'text-orange-400' },
                ].map(s => (
                  <div key={s.label} className="bg-white/5 rounded-lg p-3 text-center">
                    <p className={`${s.color} font-bold text-lg`}>{s.value}</p>
                    <p className="text-slate-500 text-[10px]">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fest → Online Merchant Pipeline */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2"><Store size={16} className="text-amber-400" /> Fest → Online Merchant Pipeline</h3>
              <p className="text-slate-300 text-xs mb-4">Student businesses don&apos;t end at the fest — they continue selling online through the Nuqta app as permanent merchants. The fest is just the launchpad.</p>
              <div className="flex flex-col sm:flex-row items-center gap-3 justify-center mb-4">
                {[
                  { label: 'Fest Stall', sub: '₹10K investment, sell at fest', color: 'amber' },
                  { label: 'Prove Product', sub: '200 sales, real demand data', color: 'emerald' },
                  { label: 'Go Online', sub: 'Listed on Nuqta app next day', color: 'blue' },
                  { label: 'Grow Business', sub: 'Serve entire campus online', color: 'purple' },
                  { label: 'Expand', sub: 'Multi-campus delivery, full merchant', color: 'orange' },
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
              <div className="bg-amber-500/5 rounded-lg p-3 border border-amber-500/20">
                <p className="text-amber-400 text-xs font-bold">Why this is powerful:</p>
                <p className="text-slate-300 text-[10px] mt-1">10 fests in M1 = 200 student businesses. Even if 30% continue online = 60 new merchants on the platform — all with proven products and existing customer base. This solves the chicken-and-egg supply problem.</p>
              </div>
            </div>

            {/* Scale Plan */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2"><TrendingUp size={16} className="text-amber-400" /> Scale Plan: 10 Fests in M1, Grow From There</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead className="bg-white/5">
                    <tr>
                      {['Period', 'Fests/Month', 'Users/Month', 'Monthly Spend', 'Cumulative Users', 'New Merchants', 'Online Merchants (30% conv.)'].map(h => (
                        <th key={h} className="text-left px-3 py-2 text-amber-400 font-semibold whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { period: 'M1', fests: 10, users: 5000, spend: '₹25L', cumUsers: '5,000', merchants: 200, onlineMerchants: 60 },
                      { period: 'M2', fests: 10, users: 5000, spend: '₹25L', cumUsers: '10,000', merchants: 200, onlineMerchants: 120 },
                      { period: 'M3', fests: 12, users: 6000, spend: '₹30L', cumUsers: '16,000', merchants: 240, onlineMerchants: 192 },
                      { period: 'M4-M6', fests: 15, users: 7500, spend: '₹37.5L', cumUsers: '38,500', merchants: 300, onlineMerchants: 462 },
                      { period: 'M7-M12', fests: 20, users: 10000, spend: '₹50L', cumUsers: '98,500', merchants: 400, onlineMerchants: 1182 },
                      { period: 'Year 2', fests: 30, users: 15000, spend: '₹75L', cumUsers: '2,78,500', merchants: 600, onlineMerchants: 3342 },
                      { period: 'Year 3', fests: 50, users: 25000, spend: '₹1.25Cr', cumUsers: '5,78,500', merchants: 1000, onlineMerchants: 6342 },
                    ].map(row => (
                      <tr key={row.period} className="border-t border-white/5 hover:bg-white/5">
                        <td className="px-3 py-2 text-white font-bold">{row.period}</td>
                        <td className="px-3 py-2 text-slate-300">{row.fests}</td>
                        <td className="px-3 py-2 text-emerald-400 font-bold">{formatNum(row.users)}</td>
                        <td className="px-3 py-2 text-orange-400">{row.spend}</td>
                        <td className="px-3 py-2 text-blue-400 font-bold">{row.cumUsers}</td>
                        <td className="px-3 py-2 text-amber-400">{row.merchants}</td>
                        <td className="px-3 py-2 text-purple-400 font-bold">{row.onlineMerchants}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[10px] text-slate-500 mt-3">BTM, HSR, Koramangala, Jayanagar first. Expand to other Bangalore zones M2-M3, then new cities M4+. Student businesses continue selling online through the app — the fest is just their launchpad.</p>
            </div>

            {/* Post-Fest Retention Strategy */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2"><RefreshCw size={16} className="text-emerald-400" /> Post-Fest Retention Flywheel</h3>
              <div className="flex flex-col sm:flex-row items-center gap-3 justify-center flex-wrap">
                {[
                  { label: 'Fest Purchase', sub: '₹200 MRP, ₹100 paid', color: 'amber' },
                  { label: '₹30 Cashback', sub: 'ReZ Coins earned', color: 'emerald' },
                  { label: '48h Push', sub: '"Coins expiring!"', color: 'blue' },
                  { label: 'Order Online', sub: 'Same seller, now on the app', color: 'purple' },
                  { label: 'Habit Loop', sub: 'Reorder from fav sellers', color: 'orange' },
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
                { label: 'M1: 10 Fests', value: '₹25L', sub: 'BTM, HSR, Koramangala, Jayanagar', color: 'text-orange-400', border: 'border-orange-500/30 bg-orange-500/5' },
                { label: 'M1 Users', value: '5,000+', sub: 'Real transactions from day one', color: 'text-emerald-400', border: 'border-emerald-500/30 bg-emerald-500/5' },
                { label: 'M1 Merchants', value: '200', sub: '60+ continue online on the app', color: 'text-purple-400', border: 'border-purple-500/30 bg-purple-500/5' },
                { label: 'Effective CAC', value: '< ₹10', sub: 'vs ₹76 blended for other channels', color: 'text-amber-400', border: 'border-amber-500/30 bg-amber-500/5' },
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

        {/* ═══════ MERCHANT PLAN TAB ═══════ */}
        {activeTab === 'merchant-plan' && (
          <div className="space-y-6">
            {/* Hero */}
            <div className="bg-gradient-to-r from-emerald-500/20 via-green-500/10 to-emerald-500/20 border border-emerald-500/30 rounded-xl p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shrink-0">
                  <Store size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">Merchant Onboarding Plan — Bangalore</h2>
                  <p className="text-emerald-400 text-sm font-medium mt-1">BTM Layout &bull; HSR Layout &bull; Koramangala &bull; Jayanagar</p>
                  <p className="text-slate-300 text-xs mt-2 leading-relaxed">Systematic onboarding of local merchants + brand stores across 4 high-density Bangalore zones. Target: 500+ merchants in M1-M3 covering food, retail, services, and daily essentials.</p>
                </div>
              </div>
            </div>

            {/* Zone Overview KPIs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: 'Target Zones', value: '4', sub: 'BTM, HSR, Koramangala, Jayanagar', color: 'text-emerald-400', border: 'border-emerald-500/30 bg-emerald-500/5' },
                { label: 'M1-M3 Target', value: '500+', sub: 'Merchants onboarded', color: 'text-blue-400', border: 'border-blue-500/30 bg-blue-500/5' },
                { label: 'Brand Stores', value: '100+', sub: 'National & regional chains', color: 'text-purple-400', border: 'border-purple-500/30 bg-purple-500/5' },
                { label: 'Commission', value: '5%', sub: 'vs 25-30% on Swiggy/Zomato', color: 'text-orange-400', border: 'border-orange-500/30 bg-orange-500/5' },
              ].map(kpi => (
                <div key={kpi.label} className={`rounded-xl p-4 border ${kpi.border}`}>
                  <span className="text-slate-400 text-xs">{kpi.label}</span>
                  <p className={`text-xl sm:text-2xl font-bold ${kpi.color}`}>{kpi.value}</p>
                  <p className="text-[10px] text-slate-500 mt-1">{kpi.sub}</p>
                </div>
              ))}
            </div>

            {/* Zone-wise Merchant Map */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* BTM Layout */}
              <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                <div className="px-4 py-3 bg-blue-500/10 border-b border-blue-500/30">
                  <h3 className="text-blue-400 font-bold flex items-center gap-2"><MapPin size={16} /> BTM Layout</h3>
                  <p className="text-slate-400 text-[10px] mt-1">High-density residential + commercial. College crowd (Christ, Jyoti Nivas). Heavy food delivery market.</p>
                </div>
                <div className="p-4 space-y-3">
                  {[
                    { category: 'Food & Beverage', count: '40+', stores: ['Domino\'s', 'KFC', 'Subway', 'McDonald\'s', 'Chai Point', 'Third Wave Coffee', 'Starbucks', 'Burger King', 'Behrouz Biryani', 'Mojo Pizza', 'Local biryani joints', 'Darshinis (10+)', 'Juice shops', 'Bakeries', 'Sweet shops'], color: 'orange' },
                    { category: 'Grocery & Daily Needs', count: '25+', stores: ['Reliance Fresh', 'More Supermarket', 'BigBasket pickup', 'DMart', 'Local kiranas (15+)', 'Fruit & vegetable vendors', 'Milk booths (Nandini/Amul)'], color: 'emerald' },
                    { category: 'Pharmacy & Health', count: '10+', stores: ['Apollo Pharmacy', 'MedPlus', 'PharmEasy pickup', 'Netmeds pickup', 'Local medical shops (5+)'], color: 'red' },
                    { category: 'Fashion & Lifestyle', count: '15+', stores: ['Max Fashion', 'Pantaloons', 'Westside', 'Lifestyle', 'Local boutiques', 'Saree shops', 'Footwear stores', 'Accessory shops'], color: 'pink' },
                    { category: 'Services', count: '15+', stores: ['Naturals Salon', 'Green Trends', 'Local salons (5+)', 'Laundry services', 'Xerox/printing shops', 'Mobile repair', 'Key cutting', 'Tailors'], color: 'cyan' },
                    { category: 'Electronics & Mobile', count: '10+', stores: ['Croma', 'Reliance Digital', 'Samsung Store', 'Local mobile shops (5+)', 'Laptop repair shops'], color: 'blue' },
                  ].map(cat => (
                    <div key={cat.category}>
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-${cat.color}-400 text-xs font-bold`}>{cat.category}</span>
                        <span className="text-slate-500 text-[10px]">{cat.count} stores</span>
                      </div>
                      <p className="text-slate-300 text-[10px] leading-relaxed">{cat.stores.join(' • ')}</p>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-white/5">
                    <p className="text-white text-xs font-bold">BTM Target: 120+ merchants</p>
                  </div>
                </div>
              </div>

              {/* HSR Layout */}
              <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                <div className="px-4 py-3 bg-emerald-500/10 border-b border-emerald-500/30">
                  <h3 className="text-emerald-400 font-bold flex items-center gap-2"><MapPin size={16} /> HSR Layout</h3>
                  <p className="text-slate-400 text-[10px] mt-1">Startup hub, tech professionals, PG/apartment clusters. High-spending young demographic.</p>
                </div>
                <div className="p-4 space-y-3">
                  {[
                    { category: 'Food & Beverage', count: '45+', stores: ['Starbucks', 'Third Wave Coffee', 'Blue Tokai', 'Toit (nearby)', 'Truffles', 'Meghana Foods', 'Empire', 'McDonald\'s', 'Pizza Hut', 'Baskin Robbins', 'Natural Ice Cream', 'Local cafes (10+)', 'Cloud kitchens (15+)', 'Health food stores'], color: 'orange' },
                    { category: 'Grocery & Daily Needs', count: '20+', stores: ['Zepto/Blinkit dark stores', 'Star Market', 'Namdhari\'s Fresh', 'Local supermarkets (5+)', 'Organic stores', 'Fruit vendors', 'Kiranas (10+)'], color: 'emerald' },
                    { category: 'Pharmacy & Health', count: '8+', stores: ['Apollo Pharmacy', 'MedPlus', 'Wellness Forever', 'Local pharmacies (4+)', 'Gym supplements store'], color: 'red' },
                    { category: 'Fashion & Lifestyle', count: '12+', stores: ['FabIndia', 'Allen Solly', 'Van Heusen', 'Local boutiques (5+)', 'Sneaker stores', 'Thrift shops'], color: 'pink' },
                    { category: 'Services', count: '12+', stores: ['Urban Company partners', 'Monsoon Salon', 'Local salons', 'Dry cleaning', 'Pet shops & grooming', 'Co-working cafes', 'EV charging'], color: 'cyan' },
                    { category: 'Fitness & Wellness', count: '8+', stores: ['Cult.fit', 'Gold\'s Gym', 'Local yoga studios', 'CrossFit boxes', 'Sports shops', 'Supplement stores'], color: 'violet' },
                  ].map(cat => (
                    <div key={cat.category}>
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-${cat.color}-400 text-xs font-bold`}>{cat.category}</span>
                        <span className="text-slate-500 text-[10px]">{cat.count} stores</span>
                      </div>
                      <p className="text-slate-300 text-[10px] leading-relaxed">{cat.stores.join(' • ')}</p>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-white/5">
                    <p className="text-white text-xs font-bold">HSR Target: 100+ merchants</p>
                  </div>
                </div>
              </div>

              {/* Koramangala */}
              <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                <div className="px-4 py-3 bg-purple-500/10 border-b border-purple-500/30">
                  <h3 className="text-purple-400 font-bold flex items-center gap-2"><MapPin size={16} /> Koramangala</h3>
                  <p className="text-slate-400 text-[10px] mt-1">Bangalore&apos;s most vibrant commercial hub. Startup capital of India. Dense food & retail scene. BMS College.</p>
                </div>
                <div className="p-4 space-y-3">
                  {[
                    { category: 'Food & Beverage', count: '60+', stores: ['Toit Brewpub', 'Truffles', 'Meghana Foods', 'Empire Restaurant', 'Vidyarthi Bhavan (nearby)', 'Starbucks (2)', 'Third Wave Coffee', 'KFC', 'McDonald\'s', 'Domino\'s', 'Behrouz Biryani', 'Faasos', 'Local biryani (10+)', 'Street food stalls (15+)', 'Dessert parlours', 'Juice bars', 'Pubs & bars (20+)'], color: 'orange' },
                    { category: 'Grocery & Daily Needs', count: '20+', stores: ['Big Bazaar', 'Reliance Fresh', 'Spencer\'s', 'Nilgiris', 'Local kiranas (10+)', 'Organic stores', 'Fresh meat & fish shops'], color: 'emerald' },
                    { category: 'Pharmacy & Health', count: '10+', stores: ['Apollo Pharmacy (2)', 'MedPlus', '1mg pickup', 'Local pharmacies (5+)', 'Ayurvedic stores'], color: 'red' },
                    { category: 'Fashion & Lifestyle', count: '20+', stores: ['Zara (Forum Mall nearby)', 'H&M', 'Pantaloons', 'Max', 'Nike', 'Adidas', 'Puma', 'Local boutiques (8+)', 'Jewelry shops', 'Watch stores'], color: 'pink' },
                    { category: 'Electronics', count: '12+', stores: ['Croma', 'Reliance Digital', 'iStore (Apple)', 'Samsung Experience', 'Mi Store', 'Local mobile shops (5+)', 'Gaming cafes'], color: 'blue' },
                    { category: 'Services', count: '15+', stores: ['Looks Salon', 'Toni & Guy', 'Naturals', 'Laundry chains (3+)', 'Pet shops (3+)', 'Bookstores', 'Stationery shops', 'Printing/xerox', 'Coworking spaces'], color: 'cyan' },
                  ].map(cat => (
                    <div key={cat.category}>
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-${cat.color}-400 text-xs font-bold`}>{cat.category}</span>
                        <span className="text-slate-500 text-[10px]">{cat.count} stores</span>
                      </div>
                      <p className="text-slate-300 text-[10px] leading-relaxed">{cat.stores.join(' • ')}</p>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-white/5">
                    <p className="text-white text-xs font-bold">Koramangala Target: 150+ merchants</p>
                  </div>
                </div>
              </div>

              {/* Jayanagar */}
              <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                <div className="px-4 py-3 bg-orange-500/10 border-b border-orange-500/30">
                  <h3 className="text-orange-400 font-bold flex items-center gap-2"><MapPin size={16} /> Jayanagar</h3>
                  <p className="text-slate-400 text-[10px] mt-1">Established residential hub. Strong local business community. Family-oriented. Jayanagar 4th Block commercial hub.</p>
                </div>
                <div className="p-4 space-y-3">
                  {[
                    { category: 'Food & Beverage', count: '35+', stores: ['MTR (iconic)', 'Vidyarthi Bhavan', 'Brahmin\'s Coffee Bar', 'CTR (Shri Sagar)', 'Maiyas', 'Domino\'s', 'KFC', 'Local darshinis (10+)', 'Bakeries (Sri Krishna, Iyengar\'s)', 'Sweet shops (5+)', 'Juice centres', 'Chat stalls'], color: 'orange' },
                    { category: 'Grocery & Daily Needs', count: '25+', stores: ['Namdhari\'s Fresh', 'Nilgiris', 'HyperCity', 'Ratnadeep', 'Local kiranas (15+)', 'Flower shops', 'Vegetable markets', 'Milk booths'], color: 'emerald' },
                    { category: 'Pharmacy & Health', count: '8+', stores: ['Apollo Pharmacy', 'MedPlus', 'SastaSundar', 'Local pharmacies (4+)', 'Ayurveda shops'], color: 'red' },
                    { category: 'Fashion & Lifestyle', count: '25+', stores: ['Jayanagar Shopping Complex', 'Max Fashion', 'Pantaloons', 'Reliance Trends', 'Saree emporiums (5+)', 'Silk stores (Nalli, Mysore Silk)', 'Jewelry (Tanishq, Joyalukkas)', 'Local boutiques (8+)'], color: 'pink' },
                    { category: 'Services', count: '12+', stores: ['Green Trends', 'Naturals Salon', 'Local salons (5+)', 'Tailors (5+)', 'Laundry services', 'Photo studios', 'Flower decorators'], color: 'cyan' },
                    { category: 'Books & Education', count: '8+', stores: ['Sapna Book House', 'Gangarams', 'Local stationery shops', 'Coaching centres', 'Art supplies', 'Musical instrument shops'], color: 'indigo' },
                  ].map(cat => (
                    <div key={cat.category}>
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-${cat.color}-400 text-xs font-bold`}>{cat.category}</span>
                        <span className="text-slate-500 text-[10px]">{cat.count} stores</span>
                      </div>
                      <p className="text-slate-300 text-[10px] leading-relaxed">{cat.stores.join(' • ')}</p>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-white/5">
                    <p className="text-white text-xs font-bold">Jayanagar Target: 130+ merchants</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Store Priority List */}
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <div className="px-5 py-4 border-b border-white/5">
                <h3 className="text-lg font-bold text-white flex items-center gap-2"><Award size={18} className="text-purple-400" /> Priority Brand Stores — Onboard First</h3>
                <p className="text-slate-400 text-xs mt-1">National & regional chains with multiple outlets across all 4 zones. Sign one deal → onboard all locations.</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead className="bg-white/5">
                    <tr>
                      {['Brand', 'Category', 'Outlets in 4 Zones', 'Why Priority', 'Pitch Angle'].map(h => (
                        <th key={h} className="text-left px-4 py-2.5 text-purple-400 font-semibold whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { brand: 'Domino\'s Pizza', category: 'QSR', outlets: '4-6', why: 'Highest delivery volume, tech-savvy ops', pitch: 'Additional order channel at 5% vs 25% on Swiggy' },
                      { brand: 'McDonald\'s', category: 'QSR', outlets: '3-4', why: 'Massive student customer base', pitch: 'Reach college crowd directly via NuqtaCoin deals' },
                      { brand: 'KFC', category: 'QSR', outlets: '3-4', why: 'High AOV, popular with target demo', pitch: 'Cashback-driven repeat orders, lower commission' },
                      { brand: 'Starbucks', category: 'Cafe', outlets: '3-5', why: 'Premium brand, high-spend users', pitch: 'NuqtaCoin loyalty on top of Stars — double rewards' },
                      { brand: 'Third Wave Coffee', category: 'Cafe', outlets: '4-6', why: 'Fastest-growing cafe chain in BLR', pitch: 'Drive footfall via coin redemption, not discounting' },
                      { brand: 'Meghana Foods', category: 'Restaurant', outlets: '3-4', why: 'Bangalore\'s #1 biryani brand, massive volume', pitch: '5% commission vs 30%+ food aggregators' },
                      { brand: 'Empire Restaurant', category: 'Restaurant', outlets: '4+', why: 'Iconic BLR brand, late-night crowd', pitch: 'Capture late-night orders from PG/hostel crowd' },
                      { brand: 'Apollo Pharmacy', category: 'Pharmacy', outlets: '6-8', why: 'Highest density pharmacy chain', pitch: 'Medicine delivery + health essentials + coin rewards' },
                      { brand: 'Reliance Fresh/Smart', category: 'Grocery', outlets: '4-6', why: 'Daily essentials = daily transactions', pitch: 'Drive daily active users via grocery coin cashback' },
                      { brand: 'More Supermarket', category: 'Grocery', outlets: '3-5', why: 'Neighborhood grocery presence', pitch: 'Loyalty layer (NuqtaCoin) without cannibalizing margins' },
                      { brand: 'Naturals/Green Trends', category: 'Salon', outlets: '4-6', why: 'High-value recurring service', pitch: 'Coin-based booking, cashback drives rebooking' },
                      { brand: 'Croma / Reliance Digital', category: 'Electronics', outlets: '2-3', why: 'High AOV transactions', pitch: '5% on ₹10K+ purchases = ₹500+ per transaction' },
                      { brand: 'Max / Pantaloons', category: 'Fashion', outlets: '3-4', why: 'Affordable fashion, high footfall', pitch: 'ReZ Coins as in-store loyalty, drive app installs' },
                      { brand: 'Tanishq / Joyalukkas', category: 'Jewelry', outlets: '2-3', why: 'Ultra-high AOV (₹5K-50K+)', pitch: 'Even 2% cashback on jewelry = massive coin earning' },
                      { brand: 'Cult.fit', category: 'Fitness', outlets: '2-3', why: 'Subscription model, engaged user base', pitch: 'Coin rewards for gym check-ins, cross-sell food' },
                      { brand: 'Chai Point', category: 'Beverage', outlets: '4-6', why: 'Low AOV but daily frequency', pitch: 'Daily chai → daily NuqtaCoin habit, highest retention' },
                    ].map(b => (
                      <tr key={b.brand} className="border-t border-white/5 hover:bg-white/5">
                        <td className="px-4 py-2.5 text-white font-bold">{b.brand}</td>
                        <td className="px-4 py-2.5 text-slate-300">{b.category}</td>
                        <td className="px-4 py-2.5 text-blue-400 text-center">{b.outlets}</td>
                        <td className="px-4 py-2.5 text-slate-300">{b.why}</td>
                        <td className="px-4 py-2.5 text-emerald-400">{b.pitch}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Local Merchant Categories */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2"><Layers size={16} className="text-amber-400" /> Local Merchant Categories — The Long Tail</h3>
              <p className="text-slate-400 text-xs mb-4">Brand stores get you credibility. Local merchants get you volume. Target 70% local, 30% brand mix.</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { category: 'Darshinis & Tiffin Centres', count: '50+', why: 'Daily breakfast habit, ₹50-150 AOV, highest frequency', target: '30+ in M1', color: 'orange' },
                  { category: 'Local Kiranas', count: '60+', why: 'Daily essentials, every lane has one, instant adoption', target: '40+ in M1', color: 'emerald' },
                  { category: 'Street Food & Chaat', count: '30+', why: 'Low price point drives trial, very popular with students', target: '15+ in M1', color: 'yellow' },
                  { category: 'Bakeries & Sweet Shops', count: '25+', why: 'Festival & celebration purchases, gift orders', target: '15+ in M1', color: 'pink' },
                  { category: 'Fruit & Vegetable Vendors', count: '40+', why: 'Daily purchase, high retention, every neighborhood', target: '20+ in M1', color: 'lime' },
                  { category: 'Local Salons & Parlours', count: '30+', why: 'Recurring monthly service, strong loyalty', target: '15+ in M1', color: 'cyan' },
                  { category: 'Tailors & Alteration Shops', count: '15+', why: 'Trusted local business, word-of-mouth referrals', target: '8+ in M2', color: 'indigo' },
                  { category: 'Mobile & Repair Shops', count: '20+', why: 'Essential service, high trust value', target: '10+ in M2', color: 'blue' },
                  { category: 'Xerox & Printing Shops', count: '15+', why: 'Student essential near every college', target: '10+ in M1', color: 'violet' },
                  { category: 'Laundry & Dry Cleaning', count: '15+', why: 'Recurring service, PG crowd dependency', target: '8+ in M1', color: 'teal' },
                  { category: 'Pet Shops & Grooming', count: '10+', why: 'High-value recurring, passionate customer base', target: '5+ in M2', color: 'amber' },
                  { category: 'Flower & Gift Shops', count: '10+', why: 'Occasion-based, high margins, quick delivery', target: '5+ in M2', color: 'rose' },
                ].map(cat => (
                  <div key={cat.category} className={`bg-${cat.color}-500/5 rounded-lg p-3 border border-${cat.color}-500/20`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-${cat.color}-400 text-xs font-bold`}>{cat.category}</span>
                      <span className="text-slate-500 text-[10px]">{cat.count} across 4 zones</span>
                    </div>
                    <p className="text-slate-300 text-[10px]">{cat.why}</p>
                    <p className={`text-${cat.color}-400 text-[10px] font-bold mt-1`}>Target: {cat.target}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Onboarding Playbook */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2"><BookOpen size={16} className="text-blue-400" /> Merchant Onboarding Playbook</h3>
              <div className="space-y-3">
                {[
                  { step: 1, title: 'Zone Mapping & List Building', description: 'Walk every main road and cross-street in BTM, HSR, Koramangala, Jayanagar. Google Maps scraping for all listed businesses. Build master spreadsheet: business name, category, address, phone, owner name, footfall estimate.', duration: 'Week 1', color: 'blue' },
                  { step: 2, title: 'Prioritize & Segment', description: 'Rank merchants by: (1) daily footfall, (2) student proximity, (3) brand recognition, (4) category diversity. Tier 1: Brand stores (sign central deal). Tier 2: High-traffic locals (darshinis, kiranas). Tier 3: Long-tail services.', duration: 'Week 1', color: 'purple' },
                  { step: 3, title: 'Brand Store Outreach', description: 'Approach brand store managers/regional heads. Pitch: "5% commission vs 25-30% on Swiggy/Zomato. NuqtaCoin drives repeat visits. Zero listing fee for first 3 months." Sign MoU covering all outlets in the zone. Target: 15-20 brand deals.', duration: 'Week 2-3', color: 'emerald' },
                  { step: 4, title: 'Local Merchant Door-to-Door', description: 'BizDev team visits 20 merchants/day per person. Pitch: show app demo, explain commission (5%), show NuqtaCoin benefit (customers keep coming back). Offer first-month zero commission. Collect menu/catalog, photos, bank details on-spot.', duration: 'Week 2-4', color: 'orange' },
                  { step: 5, title: 'Onboarding & Setup', description: 'Same-day digital onboarding: store profile, product catalog with photos, pricing, delivery radius (if applicable). Install QR code table tent for in-store payments. Train staff on order acceptance (2-minute training). Go live within 24h of signup.', duration: 'Ongoing', color: 'amber' },
                  { step: 6, title: 'Activate & First Transaction', description: 'Send first customer within 48h of listing (use campus ambassadors or free coin offers). Ensure merchant completes at least 5 orders in first week. Call merchant on Day 3 and Day 7 for feedback. Fix any issues immediately.', duration: 'Per merchant', color: 'cyan' },
                  { step: 7, title: 'Merchant Success & Retention', description: 'Weekly merchant dashboard SMS: orders, revenue, new customers. Monthly merchant meetup (zone-wise). Feature top merchants in app ("Trending near you"). Merchant referral: refer another merchant = ₹2K bonus.', duration: 'Ongoing', color: 'lime' },
                ].map(s => (
                  <div key={s.step} className={`flex items-start gap-3 p-3 rounded-lg bg-${s.color}-500/5 border border-${s.color}-500/20`}>
                    <div className={`w-7 h-7 rounded-full bg-${s.color}-500/20 flex items-center justify-center shrink-0`}>
                      <span className={`text-${s.color}-400 text-xs font-bold`}>{s.step}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-0.5">
                        <p className="text-white font-bold text-xs">{s.title}</p>
                        <span className="text-slate-500 text-[10px] flex items-center gap-1"><Clock size={8} />{s.duration}</span>
                      </div>
                      <p className="text-slate-300 text-[10px] leading-relaxed">{s.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Onboarding Timeline */}
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <div className="px-5 py-4 border-b border-white/5">
                <h3 className="text-sm font-bold text-white flex items-center gap-2"><Calendar size={16} className="text-orange-400" /> Merchant Onboarding Timeline — M1 to M6</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead className="bg-white/5">
                    <tr>
                      {['Month', 'BTM', 'HSR', 'Koramangala', 'Jayanagar', 'Total', 'Cumulative', 'From Fests'].map(h => (
                        <th key={h} className="text-right px-3 py-2 text-orange-400 font-semibold whitespace-nowrap first:text-left">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { month: 'M1', btm: 30, hsr: 25, kora: 40, jaya: 30, total: 125, cum: 125, fests: 60 },
                      { month: 'M2', btm: 25, hsr: 20, kora: 30, jaya: 25, total: 100, cum: 225, fests: 60 },
                      { month: 'M3', btm: 25, hsr: 20, kora: 30, jaya: 25, total: 100, cum: 325, fests: 72 },
                      { month: 'M4', btm: 15, hsr: 15, kora: 20, jaya: 15, total: 65, cum: 390, fests: 90 },
                      { month: 'M5', btm: 15, hsr: 12, kora: 18, jaya: 15, total: 60, cum: 450, fests: 90 },
                      { month: 'M6', btm: 10, hsr: 10, kora: 15, jaya: 10, total: 45, cum: 495, fests: 90 },
                    ].map(row => (
                      <tr key={row.month} className="border-t border-white/5 hover:bg-white/5">
                        <td className="px-3 py-2 text-white font-bold">{row.month}</td>
                        <td className="px-3 py-2 text-right text-blue-400">{row.btm}</td>
                        <td className="px-3 py-2 text-right text-emerald-400">{row.hsr}</td>
                        <td className="px-3 py-2 text-right text-purple-400">{row.kora}</td>
                        <td className="px-3 py-2 text-right text-orange-400">{row.jaya}</td>
                        <td className="px-3 py-2 text-right text-white font-bold">{row.total}</td>
                        <td className="px-3 py-2 text-right text-amber-400 font-bold">{row.cum}</td>
                        <td className="px-3 py-2 text-right text-lime-400">+{row.fests}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-white/5 border-t border-white/10">
                    <tr>
                      <td className="px-3 py-2 text-white font-bold">M6 Total</td>
                      <td className="px-3 py-2 text-right text-blue-400 font-bold">120</td>
                      <td className="px-3 py-2 text-right text-emerald-400 font-bold">102</td>
                      <td className="px-3 py-2 text-right text-purple-400 font-bold">153</td>
                      <td className="px-3 py-2 text-right text-orange-400 font-bold">120</td>
                      <td className="px-3 py-2 text-right text-white font-bold">495</td>
                      <td className="px-3 py-2 text-right text-amber-400 font-bold">495</td>
                      <td className="px-3 py-2 text-right text-lime-400 font-bold">+462</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="px-5 py-3 bg-lime-500/5 border-t border-lime-500/20">
                <p className="text-lime-400 text-xs font-bold">Total by M6: 495 direct + 462 from College Fests = 957 merchants</p>
                <p className="text-slate-500 text-[10px]">Fest merchants who continue online are counted separately. Combined merchant supply covers all 4 zones comprehensively.</p>
              </div>
            </div>

            {/* Merchant Pitch: Why Join Nuqta */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2"><Megaphone size={16} className="text-emerald-400" /> The Merchant Pitch — Why Join Nuqta</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-emerald-400 text-xs font-bold">vs Swiggy/Zomato</h4>
                  {[
                    { us: '5% commission', them: '25-30% commission' },
                    { us: 'Customer data shared', them: 'Customer data hidden' },
                    { us: 'NuqtaCoin drives repeat visits', them: 'Discounting erodes brand' },
                    { us: 'Zero listing fee (first 3 months)', them: '₹10K+ onboarding fees' },
                    { us: 'Direct customer relationship', them: 'Platform owns the customer' },
                  ].map(row => (
                    <div key={row.us} className="flex gap-2 text-[10px]">
                      <div className="flex-1 bg-emerald-500/10 rounded px-2 py-1 text-emerald-400">
                        <CheckCircle size={8} className="inline mr-1" />{row.us}
                      </div>
                      <div className="flex-1 bg-red-500/10 rounded px-2 py-1 text-red-400">
                        <AlertTriangle size={8} className="inline mr-1" />{row.them}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <h4 className="text-blue-400 text-xs font-bold">Key Selling Points</h4>
                  {[
                    'Customers earn NuqtaCoins → come back again and again',
                    'See who your customers are — age, frequency, preferences',
                    'Promoted listing option to boost visibility (optional)',
                    'Business subscription (₹1,500/mo) for premium dashboard',
                    'B2B buying through the platform at wholesale prices',
                    'Get featured in college fest events — free foot traffic',
                    'Community events bring new customers to your door',
                  ].map(p => (
                    <p key={p} className="text-slate-300 text-[10px] flex items-start gap-1.5">
                      <ChevronRight size={8} className="text-blue-400 mt-0.5 shrink-0" />{p}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* BizDev Team for Merchant Onboarding */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2"><Users size={16} className="text-blue-400" /> Merchant Onboarding Team</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { role: 'BizDev Lead', count: 1, zone: 'All zones', tasks: 'Strategy, brand deals, team management', hire: 'M1 Day 1', color: 'emerald' },
                  { role: 'Zone BizDev Rep', count: 4, zone: '1 per zone', tasks: '20 merchant visits/day, onboarding, QR setup', hire: 'M1 Week 1', color: 'blue' },
                  { role: 'Merchant Success Mgr', count: 1, zone: 'All zones', tasks: 'Merchant retention, issue resolution, upsell', hire: 'M2', color: 'purple' },
                  { role: 'Catalog & Content', count: 1, zone: 'All zones', tasks: 'Product photos, menu digitization, store profiles', hire: 'M1 Week 2', color: 'orange' },
                ].map(r => (
                  <div key={r.role} className={`bg-${r.color}-500/10 rounded-lg p-3 border border-${r.color}-500/30`}>
                    <p className={`text-${r.color}-400 font-bold text-sm`}>{r.role}</p>
                    <p className="text-white text-lg font-bold">{r.count} {r.count > 1 ? 'people' : 'person'}</p>
                    <p className="text-slate-400 text-[10px] mt-1">{r.zone}</p>
                    <p className="text-slate-300 text-[10px]">{r.tasks}</p>
                    <p className="text-slate-500 text-[10px] mt-1">Hire: {r.hire}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 bg-blue-500/5 rounded-lg p-3 border border-blue-500/20">
                <p className="text-blue-400 text-xs font-bold">M1 team: 7 people</p>
                <p className="text-slate-400 text-[10px]">1 BizDev Lead + 4 Zone Reps + 1 Catalog person + 1 Merchant Success Manager (M2). Each zone rep targets 20 merchants/day = 80 visits/day across 4 zones. At 30% conversion = 24 new merchants/day = 500+ in M1.</p>
              </div>
            </div>

            {/* ══════ NICHE PLAYBOOKS ══════ */}
            <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-amber-500/10 border border-amber-500/30 rounded-xl p-4">
              <p className="text-amber-400 font-bold flex items-center gap-2"><BookOpen size={18} /> Niche-by-Niche Merchant Playbooks</p>
              <p className="text-slate-300 text-sm mt-1">Every niche has different pain points and motivations. Here&apos;s exactly why each type of merchant should join and how to pitch them.</p>
            </div>

            {/* QSR / Fast Food Chains */}
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <div className="px-4 py-3 bg-red-500/10 border-b border-red-500/30 flex items-center justify-between">
                <h4 className="text-red-400 font-bold text-sm flex items-center gap-2"><Store size={14} /> QSR & Fast Food Chains</h4>
                <span className="text-slate-500 text-[10px]">Domino&apos;s, KFC, McDonald&apos;s, Burger King, Subway</span>
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <p className="text-xs font-bold text-red-400 mb-1">Their Pain Points</p>
                  <div className="space-y-1">
                    {['Swiggy/Zomato take 25-30% commission — kills margins on ₹200-500 orders', 'Platform owns the customer — brand has zero direct relationship', 'Forced to run deep discounts to stay visible on aggregator listings', 'Delivery partner quality issues they can\'t control', 'Zero customer data — don\'t know who orders, how often, or preferences'].map(p => (
                      <p key={p} className="text-slate-300 text-[10px] flex items-start gap-1.5"><AlertTriangle size={8} className="text-red-400 mt-0.5 shrink-0" />{p}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-emerald-400 mb-1">Why Join Nuqta</p>
                  <div className="space-y-1">
                    {['5% commission vs 25-30% = save ₹40-60 per order on a ₹200 order', 'NuqtaCoin cashback brings customers BACK without discounting your brand', 'Full customer data: who they are, order frequency, preferences', 'Direct customer relationship — build your own loyal base', 'College crowd is their #1 demographic — we deliver them directly'].map(p => (
                      <p key={p} className="text-slate-300 text-[10px] flex items-start gap-1.5"><CheckCircle size={8} className="text-emerald-400 mt-0.5 shrink-0" />{p}</p>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <p className="text-xs font-bold text-white mb-1">The Pitch (30 seconds)</p>
                  <p className="text-amber-400 text-[10px] italic leading-relaxed">&quot;You&apos;re paying Swiggy 25-30% per order. We charge 5%. Your ₹300 McChicken meal — Swiggy takes ₹75, we take ₹15. That&apos;s ₹60 saved per order. Plus, our NuqtaCoin cashback means the same customer orders again without you paying for ads. You get the customer data. You build the relationship. We just bring them to you.&quot;</p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-emerald-500/10 rounded-lg p-2 text-center"><p className="text-emerald-400 font-bold text-sm">₹60</p><p className="text-slate-500 text-[10px]">saved/order vs Swiggy</p></div>
                  <div className="bg-blue-500/10 rounded-lg p-2 text-center"><p className="text-blue-400 font-bold text-sm">3x</p><p className="text-slate-500 text-[10px]">more margin per order</p></div>
                  <div className="bg-purple-500/10 rounded-lg p-2 text-center"><p className="text-purple-400 font-bold text-sm">15%</p><p className="text-slate-500 text-[10px]">cashback drives repeat</p></div>
                </div>
                <div>
                  <p className="text-xs font-bold text-yellow-400 mb-1">Objection Handling</p>
                  <div className="space-y-1">
                    {[
                      { obj: '"We already have Swiggy/Zomato"', answer: 'Great — keep them. We\'re not replacing, we\'re adding a cheaper channel. Same kitchen, extra orders at 5x better margins.' },
                      { obj: '"You don\'t have enough users yet"', answer: 'We\'re launching with 10 college fests this month — 5,000+ students getting the app. Your store will be one of the first they see.' },
                      { obj: '"Our corporate won\'t approve"', answer: 'We sign zone-level MoUs — no corporate approval needed for a pilot. Zero listing fee for 3 months. Zero risk.' },
                    ].map(o => (
                      <div key={o.obj} className="bg-yellow-500/5 rounded p-2 border border-yellow-500/10">
                        <p className="text-yellow-400 text-[10px] font-bold">{o.obj}</p>
                        <p className="text-slate-300 text-[10px]">{o.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Cafes */}
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <div className="px-4 py-3 bg-amber-500/10 border-b border-amber-500/30 flex items-center justify-between">
                <h4 className="text-amber-400 font-bold text-sm flex items-center gap-2"><Store size={14} /> Cafes & Coffee Chains</h4>
                <span className="text-slate-500 text-[10px]">Starbucks, Third Wave, Blue Tokai, Chai Point</span>
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <p className="text-xs font-bold text-red-400 mb-1">Their Pain Points</p>
                  <div className="space-y-1">
                    {['Footfall depends on location — slow days hurt badly', 'Existing loyalty programs (Starbucks Stars) have low redemption outside their ecosystem', 'Dine-in focused — missing delivery/takeaway revenue', 'High rent in prime locations (Koramangala, HSR) means every empty seat is a loss', 'Student crowd comes once for Instagram, rarely returns without incentive'].map(p => (
                      <p key={p} className="text-slate-300 text-[10px] flex items-start gap-1.5"><AlertTriangle size={8} className="text-red-400 mt-0.5 shrink-0" />{p}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-emerald-400 mb-1">Why Join Nuqta</p>
                  <div className="space-y-1">
                    {['NuqtaCoin cashback STACKS with their existing loyalty — double reward for customers', 'Drive repeat visits: "You have ₹45 NuqtaCoins at Third Wave" push notifications', 'Chai Point: ₹30-50 AOV = daily frequency = highest NuqtaCoin earning velocity', 'Pre-order feature reduces wait time — students love this', 'Featured in college fests = massive brand visibility for free'].map(p => (
                      <p key={p} className="text-slate-300 text-[10px] flex items-start gap-1.5"><CheckCircle size={8} className="text-emerald-400 mt-0.5 shrink-0" />{p}</p>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <p className="text-xs font-bold text-white mb-1">The Pitch (30 seconds)</p>
                  <p className="text-amber-400 text-[10px] italic leading-relaxed">&quot;Your average customer comes 2x a month. With NuqtaCoin cashback, we push that to 4-5x. A ₹300 coffee order earns ₹45 in coins — that&apos;s a free coffee every 7 visits. The student literally gets a notification: &apos;You have enough coins for a free latte at [your cafe].&apos; They walk in. No discount on your end — the coins are our cost. You get a full-price customer.&quot;</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-yellow-400 mb-1">Objection Handling</p>
                  <div className="space-y-1">
                    {[
                      { obj: '"We already have our own loyalty program"', answer: 'NuqtaCoin stacks on TOP of yours. Customer earns your Stars AND NuqtaCoins. Double reason to visit you over the cafe next door.' },
                      { obj: '"Coffee is a walk-in business, we don\'t need an app"', answer: 'Exactly — we drive walk-ins. Student gets a push: "₹45 coins expiring, nearest cafe: [your name, 200m away]." That\'s a free customer at your door.' },
                    ].map(o => (
                      <div key={o.obj} className="bg-yellow-500/5 rounded p-2 border border-yellow-500/10">
                        <p className="text-yellow-400 text-[10px] font-bold">{o.obj}</p>
                        <p className="text-slate-300 text-[10px]">{o.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Darshinis & Tiffin Centres */}
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <div className="px-4 py-3 bg-orange-500/10 border-b border-orange-500/30 flex items-center justify-between">
                <h4 className="text-orange-400 font-bold text-sm flex items-center gap-2"><Store size={14} /> Darshinis & Tiffin Centres</h4>
                <span className="text-slate-500 text-[10px]">50+ across 4 zones — highest frequency category</span>
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <p className="text-xs font-bold text-red-400 mb-1">Their Pain Points</p>
                  <div className="space-y-1">
                    {['Zero online presence — no website, no Google listing, no social media', 'Cash-only business = no customer tracking, no reorder data', 'Competition from 10 other darshinis within 500m radius', 'Can\'t do delivery — no staff, no packaging, no logistics', 'Younger crowd shifting to Swiggy/Zomato for convenience over walking 2 min'].map(p => (
                      <p key={p} className="text-slate-300 text-[10px] flex items-start gap-1.5"><AlertTriangle size={8} className="text-red-400 mt-0.5 shrink-0" />{p}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-emerald-400 mb-1">Why Join Nuqta</p>
                  <div className="space-y-1">
                    {['Get discovered online — students find you on the app instead of Googling "breakfast near me"', 'QR code payment = now you know who your regulars are', 'NuqtaCoin makes YOUR darshini the default choice vs the 10 others nearby', 'Daily idli-dosa habit (₹60-100) = coins add up fast = unbreakable loyalty', 'No delivery needed — just in-store payments with coin cashback', 'Free Google-style listing: menu, photos, hours, rating — we set it all up for you'].map(p => (
                      <p key={p} className="text-slate-300 text-[10px] flex items-start gap-1.5"><CheckCircle size={8} className="text-emerald-400 mt-0.5 shrink-0" />{p}</p>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <p className="text-xs font-bold text-white mb-1">The Pitch (in Kannada-friendly simple English)</p>
                  <p className="text-amber-400 text-[10px] italic leading-relaxed">&quot;Uncle, your idli is the best in BTM. But the students don&apos;t know that — they open Swiggy and order from whoever is on top. We put you on OUR app for free. Student scans your QR, pays normally, but earns coins. Next time they want breakfast, our app tells them: &apos;You have ₹15 coins at [your darshini].&apos; They come to YOU, not the one next door. Zero cost to you. We just put this QR tent on your counter.&quot;</p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-emerald-500/10 rounded-lg p-2 text-center"><p className="text-emerald-400 font-bold text-sm">₹0</p><p className="text-slate-500 text-[10px]">cost to merchant</p></div>
                  <div className="bg-blue-500/10 rounded-lg p-2 text-center"><p className="text-blue-400 font-bold text-sm">Daily</p><p className="text-slate-500 text-[10px]">visit frequency</p></div>
                  <div className="bg-purple-500/10 rounded-lg p-2 text-center"><p className="text-purple-400 font-bold text-sm">2 min</p><p className="text-slate-500 text-[10px]">onboarding time</p></div>
                </div>
              </div>
            </div>

            {/* Kiranas / Local Grocery */}
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <div className="px-4 py-3 bg-emerald-500/10 border-b border-emerald-500/30 flex items-center justify-between">
                <h4 className="text-emerald-400 font-bold text-sm flex items-center gap-2"><Store size={14} /> Kiranas & Local Grocery</h4>
                <span className="text-slate-500 text-[10px]">60+ stores — daily essentials, highest retention</span>
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <p className="text-xs font-bold text-red-400 mb-1">Their Pain Points</p>
                  <div className="space-y-1">
                    {['Losing customers to Zepto, Blinkit, BigBasket — 10-minute delivery is killing walk-ins', 'Udhari (credit) system = ₹50K-2L stuck in unpaid tabs', 'No way to send offers or reminders to regular customers', 'Inventory management is manual — frequent stockouts', 'Young renters/PG residents default to apps instead of discovering local kirana'].map(p => (
                      <p key={p} className="text-slate-300 text-[10px] flex items-start gap-1.5"><AlertTriangle size={8} className="text-red-400 mt-0.5 shrink-0" />{p}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-emerald-400 mb-1">Why Join Nuqta</p>
                  <div className="space-y-1">
                    {['NuqtaCoin loyalty = your customers CHOOSE you over Zepto because they have coins with you', 'Digital payments = end udhari problem forever — every transaction tracked', 'Push notifications: "Your kirana has fresh vegetables today" — re-engage dormant customers', 'B2B buying through Nuqta platform = wholesale prices, better margins', 'Student PG crowd (our core users) will discover you on the app', 'We help digitize your inventory — free catalog setup with photos'].map(p => (
                      <p key={p} className="text-slate-300 text-[10px] flex items-start gap-1.5"><CheckCircle size={8} className="text-emerald-400 mt-0.5 shrink-0" />{p}</p>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <p className="text-xs font-bold text-white mb-1">The Pitch (30 seconds)</p>
                  <p className="text-amber-400 text-[10px] italic leading-relaxed">&quot;Bhaiya, your customers are ordering from Zepto now. Why? Because it&apos;s on their phone. We put YOUR shop on their phone too. When they buy ₹500 groceries from you, they earn ₹75 in NuqtaCoins. Next time they need milk at 10pm, our app says: &apos;You have ₹75 coins at [your shop], 100m away.&apos; They come to you, not Zepto. Plus, no more udhari — everything digital. And we can get you wholesale prices through our B2B network.&quot;</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-yellow-400 mb-1">Objection Handling</p>
                  <div className="space-y-1">
                    {[
                      { obj: '"My customers are old people, they don\'t use apps"', answer: 'Your OLD customers will stay. We bring you NEW customers — the PG students and young renters who currently use Zepto. That\'s incremental revenue, not replacement.' },
                      { obj: '"I don\'t want to pay commission"', answer: 'First 3 months: zero commission. After that, 5% only on orders that come THROUGH the app — your walk-in customers pay normally, zero cut. We only charge on new business we bring you.' },
                    ].map(o => (
                      <div key={o.obj} className="bg-yellow-500/5 rounded p-2 border border-yellow-500/10">
                        <p className="text-yellow-400 text-[10px] font-bold">{o.obj}</p>
                        <p className="text-slate-300 text-[10px]">{o.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Pharmacies */}
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <div className="px-4 py-3 bg-red-500/10 border-b border-red-500/30 flex items-center justify-between">
                <h4 className="text-red-400 font-bold text-sm flex items-center gap-2"><Store size={14} /> Pharmacies & Health Stores</h4>
                <span className="text-slate-500 text-[10px]">Apollo, MedPlus, local pharmacies — essential + recurring</span>
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <p className="text-xs font-bold text-red-400 mb-1">Their Pain Points</p>
                  <div className="space-y-1">
                    {['PharmEasy, 1mg, Netmeds offering 20-25% discounts — impossible to match', 'Medicine is a grudge purchase — zero loyalty, people go wherever is cheapest', 'No way to remind patients about refills or recurring prescriptions', 'Late-night/emergency demand but no discovery channel', 'Health supplements margin is good but hard to cross-sell in-store'].map(p => (
                      <p key={p} className="text-slate-300 text-[10px] flex items-start gap-1.5"><AlertTriangle size={8} className="text-red-400 mt-0.5 shrink-0" />{p}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-emerald-400 mb-1">Why Join Nuqta</p>
                  <div className="space-y-1">
                    {['NuqtaCoin cashback = price-competitive WITHOUT discounting. ₹500 medicine = ₹75 coins', 'Refill reminders: "Your monthly medicines at [pharmacy] — order now, use ₹75 coins"', 'Late-night discovery: nearest open pharmacy on the app', 'Cross-sell supplements, health products with coin rewards', 'Prescription upload feature drives repeat: same pharmacy, same pharmacist'].map(p => (
                      <p key={p} className="text-slate-300 text-[10px] flex items-start gap-1.5"><CheckCircle size={8} className="text-emerald-400 mt-0.5 shrink-0" />{p}</p>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <p className="text-xs font-bold text-white mb-1">The Pitch (30 seconds)</p>
                  <p className="text-amber-400 text-[10px] italic leading-relaxed">&quot;PharmEasy gives 25% discount, right? You can&apos;t match that. But here&apos;s what you CAN do: when someone buys ₹500 medicine from you, they earn ₹75 NuqtaCoins. Next month, same prescription — our app reminds them: &apos;Your medicines are due. ₹75 coins waiting at [your pharmacy].&apos; They come to you. Not PharmEasy. And you didn&apos;t discount a single rupee — the coins are on us.&quot;</p>
                </div>
              </div>
            </div>

            {/* Salons & Beauty */}
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <div className="px-4 py-3 bg-pink-500/10 border-b border-pink-500/30 flex items-center justify-between">
                <h4 className="text-pink-400 font-bold text-sm flex items-center gap-2"><Store size={14} /> Salons & Beauty Services</h4>
                <span className="text-slate-500 text-[10px]">Naturals, Green Trends, local salons — high-value recurring</span>
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <p className="text-xs font-bold text-red-400 mb-1">Their Pain Points</p>
                  <div className="space-y-1">
                    {['Urban Company eating market with at-home services at lower prices', 'No-shows: 20-30% appointments are missed, wasting time slots', 'Customer switches salons for ₹50 discount — zero loyalty', 'Walk-ins are unpredictable — some days packed, some days empty', 'Hard to upsell premium services (keratin, spa) to regulars'].map(p => (
                      <p key={p} className="text-slate-300 text-[10px] flex items-start gap-1.5"><AlertTriangle size={8} className="text-red-400 mt-0.5 shrink-0" />{p}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-emerald-400 mb-1">Why Join Nuqta</p>
                  <div className="space-y-1">
                    {['₹800 haircut = ₹120 NuqtaCoins = powerful lock-in for monthly visits', 'Coin balance creates switching cost: "I have ₹400 coins at this salon, why go elsewhere?"', 'Push notifications for rebooking: "It\'s been 4 weeks since your last haircut — ₹120 coins waiting"', 'Premium service upsell: "Use your coins toward a spa treatment — only ₹200 more"', 'Pre-booking through app reduces no-shows'].map(p => (
                      <p key={p} className="text-slate-300 text-[10px] flex items-start gap-1.5"><CheckCircle size={8} className="text-emerald-400 mt-0.5 shrink-0" />{p}</p>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <p className="text-xs font-bold text-white mb-1">The Pitch (30 seconds)</p>
                  <p className="text-amber-400 text-[10px] italic leading-relaxed">&quot;Your customer gets a ₹800 haircut every month. Urban Company charges ₹500 for the same at home. You can&apos;t cut prices. But with NuqtaCoin, that ₹800 haircut earns ₹120 in coins. After 3 visits, they have ₹360 — that&apos;s a free facial. They&apos;d never switch because they have coins with YOU. Plus, we send them a reminder every 4 weeks. You stop losing customers to Urban Company, and you fill empty slots.&quot;</p>
                </div>
              </div>
            </div>

            {/* Fashion & Lifestyle */}
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <div className="px-4 py-3 bg-pink-500/10 border-b border-pink-500/30 flex items-center justify-between">
                <h4 className="text-pink-400 font-bold text-sm flex items-center gap-2"><Store size={14} /> Fashion & Lifestyle Stores</h4>
                <span className="text-slate-500 text-[10px]">Max, Pantaloons, local boutiques, jewelry — high AOV</span>
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <p className="text-xs font-bold text-red-400 mb-1">Their Pain Points</p>
                  <div className="space-y-1">
                    {['Myntra/Ajio/Amazon offering 40-70% discounts — foot traffic declining', 'End-of-season sales is the only time they get real volume', 'No way to re-engage someone who browsed in-store but didn\'t buy', 'Jewelry stores: ₹10K+ purchases but customer shops around for weeks before deciding', 'Local boutiques: zero discoverability against big brands'].map(p => (
                      <p key={p} className="text-slate-300 text-[10px] flex items-start gap-1.5"><AlertTriangle size={8} className="text-red-400 mt-0.5 shrink-0" />{p}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-emerald-400 mb-1">Why Join Nuqta</p>
                  <div className="space-y-1">
                    {['High AOV = massive coin earning: ₹2,000 kurta = ₹300 coins, ₹10K jewelry = ₹1,500 coins', 'Coins create reason to come BACK to store instead of browsing Myntra', 'Local boutiques get discovered by 5,000+ new users in their area', 'Festival season: NuqtaCoin deals drive footfall without heavy discounting', 'Cross-sell: earn coins on clothing, spend at cafe next door = ecosystem stickiness'].map(p => (
                      <p key={p} className="text-slate-300 text-[10px] flex items-start gap-1.5"><CheckCircle size={8} className="text-emerald-400 mt-0.5 shrink-0" />{p}</p>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <p className="text-xs font-bold text-white mb-1">The Pitch (30 seconds)</p>
                  <p className="text-amber-400 text-[10px] italic leading-relaxed">&quot;A customer buys a ₹2,000 kurta from you. They earn ₹300 NuqtaCoins. They can spend those coins at ANY Nuqta merchant — or save them for their next purchase with you. Either way, they&apos;re locked into the ecosystem that includes YOUR store. Myntra can&apos;t do that. And for your Tanishq-level jewelry purchases — ₹10K = ₹1,500 coins. That&apos;s real money. Customer will think twice before going to the competitor.&quot;</p>
                </div>
              </div>
            </div>

            {/* Grocery Chains */}
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <div className="px-4 py-3 bg-green-500/10 border-b border-green-500/30 flex items-center justify-between">
                <h4 className="text-green-400 font-bold text-sm flex items-center gap-2"><Store size={14} /> Grocery Chains & Supermarkets</h4>
                <span className="text-slate-500 text-[10px]">Reliance Fresh, More, Namdhari&apos;s, Nilgiris</span>
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <p className="text-xs font-bold text-red-400 mb-1">Their Pain Points</p>
                  <div className="space-y-1">
                    {['Zepto/Blinkit 10-min delivery stealing weekly grocery trips', 'Own loyalty cards (More Card, Reliance One) have low engagement', 'Can\'t target specific customer segments with offers', 'Weekend rush but weekday footfall is low', 'Fresh produce wastage on slow days'].map(p => (
                      <p key={p} className="text-slate-300 text-[10px] flex items-start gap-1.5"><AlertTriangle size={8} className="text-red-400 mt-0.5 shrink-0" />{p}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-emerald-400 mb-1">Why Join Nuqta</p>
                  <div className="space-y-1">
                    {['NuqtaCoin STACKS with their existing loyalty card — double rewards', 'Weekly grocery ₹2,000 = ₹300 coins. Monthly: ₹1,200 coins = significant wallet', 'Weekday push: "Fresh vegetables arrived at [store] — use your ₹300 coins"', 'Daily essentials = daily transactions = highest NuqtaCoin velocity', 'We drive the young PG/apartment crowd who default to Zepto back to your store'].map(p => (
                      <p key={p} className="text-slate-300 text-[10px] flex items-start gap-1.5"><CheckCircle size={8} className="text-emerald-400 mt-0.5 shrink-0" />{p}</p>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <p className="text-xs font-bold text-white mb-1">The Pitch (30 seconds)</p>
                  <p className="text-amber-400 text-[10px] italic leading-relaxed">&quot;Your More Card gives 2% cashback. We add 15% NuqtaCoin on top. Customer spends ₹2,000 weekly grocery — that&apos;s ₹300 coins per week, ₹1,200/month. They won&apos;t switch to Zepto because ₹1,200 in coins is real money sitting with you. We also push notifications on slow days — &apos;Fresh stock at More HSR, use your coins.&apos; You fill weekday gaps without discounting.&quot;</p>
                </div>
              </div>
            </div>

            {/* Electronics */}
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <div className="px-4 py-3 bg-blue-500/10 border-b border-blue-500/30 flex items-center justify-between">
                <h4 className="text-blue-400 font-bold text-sm flex items-center gap-2"><Store size={14} /> Electronics & Mobile</h4>
                <span className="text-slate-500 text-[10px]">Croma, Reliance Digital, Samsung, local shops</span>
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <p className="text-xs font-bold text-red-400 mb-1">Their Pain Points</p>
                  <div className="space-y-1">
                    {['Amazon/Flipkart price matching makes it hard to compete on price', 'Showrooming: customers try in-store, buy online for ₹500 less', 'Accessories (cases, chargers) have best margins but customers buy on Amazon', 'Repair services are hidden gem but no discovery channel', 'One-time purchase — customers don\'t return for years'].map(p => (
                      <p key={p} className="text-slate-300 text-[10px] flex items-start gap-1.5"><AlertTriangle size={8} className="text-red-400 mt-0.5 shrink-0" />{p}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-emerald-400 mb-1">Why Join Nuqta</p>
                  <div className="space-y-1">
                    {['₹15,000 phone = ₹2,250 NuqtaCoins — beats any Amazon cashback', 'Coins spent across ecosystem = customer uses coins at cafes/food, not just electronics', 'Anti-showrooming: "Buy in-store, earn ₹2,250 coins usable everywhere"', 'Accessories upsell: "Your coin balance covers a free case with this phone"', 'Repair services: students need screen repair → discover your shop on the app'].map(p => (
                      <p key={p} className="text-slate-300 text-[10px] flex items-start gap-1.5"><CheckCircle size={8} className="text-emerald-400 mt-0.5 shrink-0" />{p}</p>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <p className="text-xs font-bold text-white mb-1">The Pitch (30 seconds)</p>
                  <p className="text-amber-400 text-[10px] italic leading-relaxed">&quot;Customer walks in, tries the phone, then says &apos;I&apos;ll check Amazon.&apos; You&apos;ve lost them. With Nuqta: ₹15,000 phone = ₹2,250 in NuqtaCoins. That&apos;s ₹2,250 they can use at ANY merchant — coffee, food, grocery, salon. Amazon can&apos;t do that. The customer saves more by buying from YOU because the coins work everywhere in their daily life.&quot;</p>
                </div>
              </div>
            </div>

            {/* Fruit & Vegetable Vendors */}
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <div className="px-4 py-3 bg-lime-500/10 border-b border-lime-500/30 flex items-center justify-between">
                <h4 className="text-lime-400 font-bold text-sm flex items-center gap-2"><Store size={14} /> Fruit & Vegetable Vendors</h4>
                <span className="text-slate-500 text-[10px]">40+ across zones — daily frequency, hyper-local</span>
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <p className="text-xs font-bold text-red-400 mb-1">Their Pain Points</p>
                  <div className="space-y-1">
                    {['BigBasket/Zepto Fresh taking their regular customers', 'Perishable goods = daily pressure to sell everything', 'Cash-only, no digital presence, invisible to new residents', 'No way to communicate "today\'s fresh arrivals" to customers'].map(p => (
                      <p key={p} className="text-slate-300 text-[10px] flex items-start gap-1.5"><AlertTriangle size={8} className="text-red-400 mt-0.5 shrink-0" />{p}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-emerald-400 mb-1">Why Join Nuqta</p>
                  <div className="space-y-1">
                    {['Daily ₹100-200 purchases = coins build fast = unbeatable daily habit', 'Digital payment via QR = track customers, end cash-only limitation', '"Fresh stock today" push to nearby users = sell perishables faster', 'New PG residents discover you on app instead of ordering BigBasket', 'Zero cost, zero commission on walk-in QR payments — just the loyalty layer'].map(p => (
                      <p key={p} className="text-slate-300 text-[10px] flex items-start gap-1.5"><CheckCircle size={8} className="text-emerald-400 mt-0.5 shrink-0" />{p}</p>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <p className="text-xs font-bold text-white mb-1">The Pitch (30 seconds)</p>
                  <p className="text-amber-400 text-[10px] italic leading-relaxed">&quot;Anna, students in your lane are ordering vegetables from BigBasket. They don&apos;t even know you&apos;re here. We put your shop on our app — when they search &apos;vegetables near me,&apos; YOUR cart shows up. They scan QR, pay normally, earn coins. Tomorrow they buy fruit from you because they have coins with you. BigBasket can&apos;t match that — they&apos;re 30 minutes away, you&apos;re 30 seconds away.&quot;</p>
                </div>
              </div>
            </div>

            {/* Street Food & Chaat */}
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <div className="px-4 py-3 bg-yellow-500/10 border-b border-yellow-500/30 flex items-center justify-between">
                <h4 className="text-yellow-400 font-bold text-sm flex items-center gap-2"><Store size={14} /> Street Food, Chaat & Bakeries</h4>
                <span className="text-slate-500 text-[10px]">Pani puri, chaat, bakeries, sweet shops — impulse + celebration</span>
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <p className="text-xs font-bold text-red-400 mb-1">Their Pain Points</p>
                  <div className="space-y-1">
                    {['Entirely walk-in dependent — rain, weekday = zero customers', 'No way to build customer base beyond word-of-mouth', 'Bakeries: festival orders go to big brands (Monginis, Theobroma), not local', 'Sweet shops: seasonal peaks (Diwali, weddings) but dead rest of the year', 'Zero online presence — don\'t even have a Google Maps listing'].map(p => (
                      <p key={p} className="text-slate-300 text-[10px] flex items-start gap-1.5"><AlertTriangle size={8} className="text-red-400 mt-0.5 shrink-0" />{p}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-emerald-400 mb-1">Why Join Nuqta</p>
                  <div className="space-y-1">
                    {['Low price (₹50-150) = perfect for coin redemption — students use coins here first', 'Impulse purchase: "₹40 pani puri, you have ₹30 coins — pay just ₹10!" push notification', 'Festival pre-orders through app: Diwali sweets, birthday cakes — capture ahead of big brands', 'Student crowd LOVES street food — we deliver this exact audience', 'Photo-worthy food + NuqtaCoin = Instagram sharing = free marketing'].map(p => (
                      <p key={p} className="text-slate-300 text-[10px] flex items-start gap-1.5"><CheckCircle size={8} className="text-emerald-400 mt-0.5 shrink-0" />{p}</p>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <p className="text-xs font-bold text-white mb-1">The Pitch (30 seconds)</p>
                  <p className="text-amber-400 text-[10px] italic leading-relaxed">&quot;Your pani puri is famous in BTM. But the new students in the PG next door? They don&apos;t know you exist. Our app shows them: &apos;Best pani puri 200m away — ₹40, you have ₹30 coins, pay just ₹10.&apos; They come running. And next time they want chaat, they come to you because they keep earning coins. It&apos;s like having a loyalty card, but better — and it costs you nothing.&quot;</p>
                </div>
              </div>
            </div>

            {/* Services: Laundry, Tailors, Repair */}
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <div className="px-4 py-3 bg-cyan-500/10 border-b border-cyan-500/30 flex items-center justify-between">
                <h4 className="text-cyan-400 font-bold text-sm flex items-center gap-2"><Store size={14} /> Services: Laundry, Tailors, Repair, Printing</h4>
                <span className="text-slate-500 text-[10px]">Essential services — high trust, recurring need</span>
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <p className="text-xs font-bold text-red-400 mb-1">Their Pain Points</p>
                  <div className="space-y-1">
                    {['Laundry: apps like UClean, Tumbledry stealing PG crowd', 'Tailors: seasonal (Diwali, wedding) but dead otherwise', 'Mobile repair: customers go wherever Google shows first, no loyalty', 'Printing/xerox: declining usage but essential near colleges', 'All rely on physical visibility — if not on main road, invisible'].map(p => (
                      <p key={p} className="text-slate-300 text-[10px] flex items-start gap-1.5"><AlertTriangle size={8} className="text-red-400 mt-0.5 shrink-0" />{p}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-emerald-400 mb-1">Why Join Nuqta</p>
                  <div className="space-y-1">
                    {['Laundry: recurring weekly service = coins lock customer in permanently', 'Tailors: "Your alteration is ready — earn coins when you pick up" notification', 'Mobile repair: students URGENTLY need this — "nearest repair shop" search = you', 'Printing: college students need this daily — be the first result near every college', 'All services: discovery by 5,000+ new users who just moved to the area'].map(p => (
                      <p key={p} className="text-slate-300 text-[10px] flex items-start gap-1.5"><CheckCircle size={8} className="text-emerald-400 mt-0.5 shrink-0" />{p}</p>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <p className="text-xs font-bold text-white mb-1">The Pitch (universal for services)</p>
                  <p className="text-amber-400 text-[10px] italic leading-relaxed">&quot;Every month, 200 new students move into PGs in BTM/HSR. They need laundry, tailoring, phone repair, printing — but they don&apos;t know who&apos;s good. They Google or ask their PG owner. Now imagine they open Nuqta and see: &apos;Best laundry service, 150m away, 4.8 stars, ₹50 coins waiting.&apos; That&apos;s your shop. Every new batch of students = new customers for you, forever. And coins mean they never switch.&quot;</p>
                </div>
              </div>
            </div>

            {/* Fitness & Wellness */}
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <div className="px-4 py-3 bg-violet-500/10 border-b border-violet-500/30 flex items-center justify-between">
                <h4 className="text-violet-400 font-bold text-sm flex items-center gap-2"><Store size={14} /> Fitness, Gyms & Wellness</h4>
                <span className="text-slate-500 text-[10px]">Cult.fit, Gold&apos;s Gym, yoga studios, supplement stores</span>
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <p className="text-xs font-bold text-red-400 mb-1">Their Pain Points</p>
                  <div className="space-y-1">
                    {['High customer churn — 60% of gym members quit within 3 months', 'Cult.fit undercutting with ₹500/month pass across multiple activities', 'Supplement stores: Amazon/HealthKart price-matching', 'Hard to convert trial members into annual subscriptions', 'Yoga/CrossFit studios: small, niche — struggle with discovery'].map(p => (
                      <p key={p} className="text-slate-300 text-[10px] flex items-start gap-1.5"><AlertTriangle size={8} className="text-red-400 mt-0.5 shrink-0" />{p}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-emerald-400 mb-1">Why Join Nuqta</p>
                  <div className="space-y-1">
                    {['₹3,000 monthly gym = ₹450 coins. After 3 months: ₹1,350 coins — too much to leave', 'Cross-sell: gym members earn coins → spend at health food stores, supplement shops', 'Check-in rewards: earn bonus coins for showing up — gamifies consistency', 'Yoga/CrossFit: get discovered by health-conscious young professionals in HSR/Koramangala', 'Supplement stores: coins compete with Amazon discounts without cutting YOUR margin'].map(p => (
                      <p key={p} className="text-slate-300 text-[10px] flex items-start gap-1.5"><CheckCircle size={8} className="text-emerald-400 mt-0.5 shrink-0" />{p}</p>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <p className="text-xs font-bold text-white mb-1">The Pitch (30 seconds)</p>
                  <p className="text-amber-400 text-[10px] italic leading-relaxed">&quot;60% of your members quit in 3 months. Why? No switching cost. With NuqtaCoin, a ₹3,000/month member earns ₹450 coins per month. After 3 months, they have ₹1,350 in coins usable at cafes, restaurants, grocery — everywhere they go daily. Quitting your gym means losing ₹1,350 in real purchasing power. That&apos;s a retention tool no other gym has.&quot;</p>
                </div>
              </div>
            </div>

            {/* Summary: The Core Pitch Framework */}
            <div className="bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-purple-500/10 rounded-xl p-5 border border-purple-500/30">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2"><Megaphone size={16} className="text-purple-400" /> The Universal Pitch Framework</h3>
              <p className="text-slate-400 text-xs mb-3">Every niche pitch follows this 4-step formula:</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { step: '1. Name the Enemy', desc: 'Swiggy takes 25%. Amazon undercuts you. Zepto steals your walk-ins. PharmEasy discounts 20%.', color: 'red' },
                  { step: '2. Show the Alternative', desc: '5% commission. NuqtaCoin cashback. Zero discounting. Customer data is YOURS.', color: 'emerald' },
                  { step: '3. Do the Math', desc: '₹X purchase = ₹Y coins. That\'s Z free visits. Your customer never leaves.', color: 'blue' },
                  { step: '4. Remove the Risk', desc: 'Zero listing fee for 3 months. Zero commission on walk-ins. We set everything up.', color: 'amber' },
                ].map(s => (
                  <div key={s.step} className={`bg-${s.color}-500/10 rounded-lg p-3 border border-${s.color}-500/30`}>
                    <p className={`text-${s.color}-400 font-bold text-xs mb-1`}>{s.step}</p>
                    <p className="text-slate-300 text-[10px]">{s.desc}</p>
                  </div>
                ))}
              </div>
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

      <RezFooter />
    </div>
  );
}
