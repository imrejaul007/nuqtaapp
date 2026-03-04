'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronRight, ChevronDown, ChevronUp, Crown, Wallet, Store, QrCode,
  Gamepad2, Bot, Globe, Gift, Star, Shield, Zap, TrendingUp, Users, Target,
  DollarSign, CreditCard, Smartphone, BarChart3, Lock, Rocket, AlertTriangle,
  Building2, Layers, CheckCircle, Award, Coins, Heart, Package, Brain,
  BadgePercent, PiggyBank, ArrowRight, Network, Briefcase, MapPin, Eye,
  ShoppingBag, Truck, Home, Car, Scale, Plane, Timer, Coffee, Scissors,
  Utensils, Search, Bell, Share2, Database, Settings, Gem, Calculator
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ─── SAFE Round Terms ───────────────────────────────────────────────
const safeTerms = {
  instrument: 'SAFE (Simple Agreement for Future Equity)',
  raise: '$500,000 USD (₹4.2 Cr)',
  valCap: '$5,000,000 USD (₹42 Cr)',
  discount: '20%',
  proRata: 'Yes — investors get pro-rata rights in next round',
  mfn: 'Yes — Most Favored Nation clause',
  conversion: 'Converts to equity at next priced round (Seed)',
  targetClose: 'Q2 2026',
};

// ─── Core Features ──────────────────────────────────────────────────
const coreFeatures = [
  { id: 'wallet', title: 'Unified Wallet', icon: Wallet, color: 'text-amber-400', desc: '4 coin types with smart debit priority: Promo → Branded → ReZ → Cash. One balance for all value.', details: ['Promo Coins (30-day expiry, used first)', 'Branded Coins (90-day, merchant-specific)', 'ReZ Coins (12-month, earned from transactions)', 'Cash Balance (no expiry, UPI top-up)'] },
  { id: 'merchants', title: 'Merchant Discovery', icon: Store, color: 'text-blue-400', desc: 'Location-based search for nearby partner merchants with real-time offers, coin-back rates, and distance.', details: ['Category filters: Food, Retail, Health, Beauty, Services', 'Map view + list view with distance sorting', 'Real-time offer badges and earn rate display', 'Reviews, ratings, and merchant profiles'] },
  { id: 'qr', title: 'QR Scan & Pay', icon: QrCode, color: 'text-emerald-400', desc: 'Scan merchant QR → auto-applies best offer → earns ReZ Coins instantly. Sub-2-second UPI transaction.', details: ['UPI-native: works with any UPI app as fallback', 'Auto coin credit after payment confirmation', 'Split payment: coins + cash in one tap', 'Transaction history with detailed breakdowns'] },
  { id: 'membership', title: 'ReZ+ Membership', icon: Crown, color: 'text-purple-400', desc: '4-tier membership: Basic (Free) → Silver (₹499/mo) → Gold (₹999/mo) → Prive (₹1,999/mo).', details: ['Basic: 1x earn rate, standard access', 'Silver: 1.5x earn, priority offers, birthday bonus', 'Gold: 2x earn, exclusive deals, free delivery', 'Prive: 3x earn, concierge, VIP events'] },
  { id: 'gamification', title: 'Gamification Hub', icon: Gamepad2, color: 'text-orange-400', desc: '50+ badges, 20 levels, daily challenges, streak bonuses, and city leaderboards.', details: ['Achievement badges across spending categories', 'Progressive levels from Newcomer to Legend', 'Daily/weekly challenges with bonus rewards', 'Leaderboards: city, friends, national'] },
  { id: 'ai', title: 'AI-R Assistant', icon: Bot, color: 'text-cyan-400', desc: 'AI-powered recommendations, spending insights, budget optimization, and smart offer alerts.', details: ['Personalized merchant recommendations', 'Spending insights: "You spent 40% more on dining"', 'Smart coupon and offer suggestions', 'NLP queries: "Best coffee deal near me?"'] },
  { id: 'bills', title: 'Bill Payments', icon: CreditCard, color: 'text-teal-400', desc: 'Pay electricity, mobile, broadband, DTH — earn ReZ Coins on every bill. 50+ biller integrations.', details: ['Jio, Airtel, BSNL, Vi recharge', 'BESCOM, BWSSB, Bangalore utilities', 'DTH, broadband, FASTag top-up', 'Auto-pay scheduling with reminders'] },
  { id: 'savings', title: 'Savings Pots', icon: PiggyBank, color: 'text-green-400', desc: 'Goal-based savings with round-ups, auto-save, and milestone rewards.', details: ['Named pots: Rent, Travel, Emergency, Gadget', 'Round-up: ₹147 purchase → ₹3 auto-saved', 'Auto-save: weekly or monthly transfers', 'Milestone rewards: bonus coins on hitting goals'] },
  { id: 'ecosystem', title: 'Cross-Ecosystem Access', icon: Globe, color: 'text-pink-400', desc: 'One ReZ account connects to ReZ OS, delivery, rides, BNPL, rentals, travel — coins work everywhere.', details: ['Single sign-on across all ecosystem apps', 'Unified coin balance usable everywhere', 'Cross-app referral bonuses', 'Deep-linking between services'] },
  { id: 'rewards', title: 'Rewards Engine', icon: Gift, color: 'text-yellow-400', desc: 'Dynamic rewards: personalized offers, flash deals, surprise drops, and referral bonuses.', details: ['ML-personalized offer feed', 'Flash deals with time-limited multipliers', 'Surprise & delight: random bonus drops', 'Referral rewards: invite friends → both earn'] },
];

// ─── ReZ OS Merchant OS Modules ─────────────────────────────────────
const bizOneModules = [
  { name: 'POS System', screens: 28, desc: 'Tablet/phone POS, QR generation, split payments, UPI, offline mode' },
  { name: 'Inventory', screens: 35, desc: 'Real-time stock, low-stock alerts, barcode scanning, supplier management' },
  { name: 'Order Management', screens: 25, desc: 'Order queue, status tracking, Swiggy/Zomato sync, delivery dispatch' },
  { name: 'CRM', screens: 20, desc: 'Auto-built customer profiles, segmentation, win-back campaigns' },
  { name: 'Marketing Engine', screens: 22, desc: 'Zero-leakage ads, targeted offers, campaign analytics, full funnel tracking' },
  { name: 'Analytics', screens: 18, desc: 'Real-time revenue, peak hours heatmap, product performance, forecasting' },
  { name: 'Financial', screens: 20, desc: 'Daily settlements, GST reports, Tally/Zoho integration, P&L generation' },
  { name: 'Staff', screens: 15, desc: 'Roles, shifts, performance tracking, attendance, permission controls' },
  { name: 'Multi-Store', screens: 12, desc: 'Centralized dashboard, per-store comparison, stock transfer, unified reporting' },
  { name: 'Integrations', screens: 15, desc: 'Swiggy/Zomato, UPI settlement, accounting software, delivery fleet' },
];

// ─── Use of Funds ───────────────────────────────────────────────────
const useOfFunds = [
  { category: 'Engineering & Product', amount: '$150K', percent: 30, color: 'bg-blue-500', details: '2 additional engineers + existing team salaries (CTO + 2 devs + designer) × 18 months' },
  { category: 'Merchant Acquisition', amount: '$120K', percent: 24, color: 'bg-emerald-500', details: '6 sales reps, merchant onboarding incentives, QR hardware, on-ground ops (CSO-led)' },
  { category: 'Marketing & Growth', amount: '$100K', percent: 20, color: 'bg-purple-500', details: 'User acquisition campaigns, referral rewards, campus ambassadors, social (CMO-led)' },
  { category: 'Operations & Team', amount: '$80K', percent: 16, color: 'bg-orange-500', details: 'CXO salaries, office (Bangalore), legal, compliance, AWS infra, CHRO-led hiring' },
  { category: 'Reserve', amount: '$50K', percent: 10, color: 'bg-slate-500', details: 'Runway buffer, unexpected costs, opportunity fund' },
];

// ─── Financial Projections (Source: ReZ 2026 Financial Model) ────────
const financials = [
  { period: 'Month 3', users: '18K', merchants: 200, gmv: '₹1.2 Cr', revenue: '₹6.8L', burn: '₹42L/mo', milestone: 'Bangalore PMF, 3 cities' },
  { period: 'Month 6', users: '68K', merchants: 750, gmv: '₹7.5 Cr', revenue: '₹42L', burn: '₹55L/mo', milestone: '8 cities, unit economics proven' },
  { period: 'Month 12', users: '269K', merchants: 3000, gmv: '₹52 Cr', revenue: '₹10 Cr', burn: '₹78L/mo', milestone: '32 cities, Year 1: ₹10 Cr rev' },
  { period: 'Year 2', users: '1.5M', merchants: 12000, gmv: '₹500 Cr', revenue: '₹153 Cr', burn: '₹1.9 Cr/mo', milestone: '120 cities, Series A raised' },
  { period: 'Year 3', users: '5M', merchants: 40000, gmv: '₹2,000 Cr', revenue: '₹602 Cr', burn: 'Profitable', milestone: 'Pan-India, ₹207.5 Cr net profit' },
];

// ─── Income Statement Summary (Source: ReZ 2026 Financial Model) ────
const incomeStatement = [
  { year: 'Year 1', revenue: '₹10.04 Cr', expenses: '₹9.43 Cr', netProfit: '₹0.61 Cr', margin: '6.07%', valuation: '$23.6M' },
  { year: 'Year 2', revenue: '₹153.4 Cr', expenses: '₹226.3 Cr', netProfit: '-₹72.9 Cr', margin: '-47.6%', valuation: '$180M' },
  { year: 'Year 3', revenue: '₹601.8 Cr', expenses: '₹394.3 Cr', netProfit: '₹207.5 Cr', margin: '34.5%', valuation: '$701M' },
];

// ─── Expense Breakdown ──────────────────────────────────────────────
const expenseBreakdown = [
  { category: 'Marketing & Ads', pct: 36, color: 'bg-purple-500' },
  { category: 'Technology & Infra', pct: 20, color: 'bg-blue-500' },
  { category: 'BizDev & Merchant Acq', pct: 19, color: 'bg-emerald-500' },
  { category: 'Team & Salaries', pct: 8, color: 'bg-orange-500' },
  { category: 'Customer Support', pct: 8, color: 'bg-cyan-500' },
  { category: 'Rent & Office', pct: 8, color: 'bg-pink-500' },
  { category: 'Buffer', pct: 1, color: 'bg-slate-500' },
];

// ─── Competitors — Cashback & Rewards Apps ──────────────────────────
const rewardsCompetitors = [
  { name: 'CRED', val: '$3.5B', users: '13M', type: 'CC Rewards', focus: 'Credit card bill rewards for high-credit-score users (750+). Expanding into lending, UPI, wealth management.', weakness: 'CC-only (15% of India have CC), invite-only, no merchant OS, no closed-loop coins, no offline QR', rezEdge: 'ReZ serves ALL UPI users (400M+), not just CC elite. Closed-loop coins + merchant OS.' },
  { name: 'MagicPin', val: '$200M+', users: '10M', type: 'Bill Upload', focus: 'Upload bill photos → earn MagicPoints. Local merchant discovery, ONDC delivery. IPO-bound 2025-26.', weakness: 'Manual bill upload (not real-time), no POS/merchant OS, no wallet, no UPI integration, no coin types', rezEdge: 'Real-time QR → instant coins. Full ReZ OS merchant OS. 4 coin types with smart debit.' },
  { name: 'Wyld', val: '₹50 Cr', users: '100K+', type: 'Social Currency', focus: 'Social currency card — cashback based on Instagram followers (30-100%). 1000+ brand partners. Shark Tank funded.', weakness: 'Requires 1000+ IG followers, niche audience (nano-influencers), no merchant OS, no wallet, no bills', rezEdge: 'ReZ is for everyone, not just influencers. No social media required. Full ecosystem.' },
  { name: 'Cherry', val: 'Early', users: '10K+', type: 'Creator Rewards', focus: 'Buy products, post on social media, get cashback to bank account. Influencer network for brands.', weakness: 'Creator-only (tiny TAM), no merchant tools, no wallet, no UPI, revenue ₹78K/yr, very early', rezEdge: 'ReZ covers all consumers + all merchants. 7 revenue streams vs 1.' },
  { name: 'SaveSage', val: '~$10M', users: '200K+', type: 'CC Points Manager', focus: 'AI credit card assistant — manage points, miles, redemption guidance. Gift cards across 250+ brands. Shark Tank ₹4 Cr deal.', weakness: 'CC-only (same 15% TAM as CRED), no merchant side, no closed-loop, advisory not transactional', rezEdge: 'ReZ is transactional, not advisory. Earn coins on every purchase, not just CC optimization.' },
  { name: 'CashKaro', val: '$150M+', users: '12M', type: 'Online Cashback', focus: 'Online shopping cashback aggregator. Partner with 1500+ e-commerce sites. Bank withdrawal for cashback.', weakness: 'Online-only (no offline), no merchant OS, no loyalty coins, no UPI, no gamification, passive model', rezEdge: 'ReZ is offline-first with QR. Closed-loop coins vs open cashback. Merchant OS built in.' },
];

// ─── Competitors — Payment & Super Apps ─────────────────────────────
const paymentCompetitors = [
  { name: 'Paytm', val: '$4B', users: '300M+', type: 'Payments + Commerce', focus: 'UPI, wallet, merchant payments, mini-apps, insurance, lending, ticketing. Full super app.', weakness: 'Open-loop (money leaves to Google/Meta), no closed-loop coins, merchant tools are paid, losing market share to PhonePe', rezEdge: 'ReZ is closed-loop — every rupee stays. Free merchant OS vs paid. Loyalty lock-in vs none.' },
  { name: 'PhonePe', val: '$12B', users: '500M+', type: 'UPI Payments', focus: 'India\'s #1 UPI app (48% market share). Expanding into insurance, mutual funds, e-commerce.', weakness: 'Payment pipe only — no loyalty, no merchant tools, no gamification, no cashback coins', rezEdge: 'ReZ adds loyalty + merchant OS + rewards layer ON TOP of UPI. PhonePe is the rail, ReZ is the destination.' },
  { name: 'Tata Neu', val: '$5B+', users: '30M+', type: 'Super App', focus: 'Tata ecosystem: BigBasket, Croma, Air India, Taj Hotels, 1mg. NeuCoins (1 coin = ₹1). 5% earn rate.', weakness: 'Only works within Tata brands (limited merchants), no SMB merchant OS, no offline QR for local shops', rezEdge: 'ReZ works with ANY merchant (not just one brand). Full merchant OS. True local-first focus.' },
];

// ─── Competitors — Merchant Tools ───────────────────────────────────
const merchantCompetitors = [
  { name: 'Petpooja', val: '$50M+', users: '100K+ restaurants', type: 'Restaurant POS', focus: 'Leading restaurant POS — billing, KOT, inventory, Swiggy/Zomato integration. ₹10K/year.', weakness: 'Restaurant-only, paid (₹2K/mo+), no consumer app, no loyalty coins, no marketing platform', rezEdge: 'ReZ OS is FREE, works for all merchant types, includes CRM + marketing + analytics + loyalty.' },
  { name: 'DotPe', val: '$300M+', users: '10M+ merchants', type: 'QR Commerce', focus: 'QR-based ordering + payments. Partners: McDonald\'s, Starbucks, Haldiram\'s. Commission-based.', weakness: 'No consumer app, no loyalty coins, no rewards, commission-based (merchants pay per transaction)', rezEdge: 'ReZ has consumer app + merchant OS. Closed-loop coins drive repeat visits. Built-in marketing engine.' },
  { name: 'Khatabook', val: '$600M', users: '10M+ merchants', type: 'Digital Ledger', focus: 'Digital ledger for SMBs — credit/debit tracking, payment reminders, basic lending. $187M raised.', weakness: 'Ledger only — no POS, no consumer app, no loyalty, no marketing, tiny revenue (₹1.4 Cr/yr)', rezEdge: 'ReZ OS is full OS: POS + CRM + Inventory + Marketing + Analytics. Plus consumer demand from ReZ app.' },
  { name: 'OkCredit', val: '$250M', users: '5M+ merchants', type: 'Digital Ledger', focus: 'Digital ledger in 11 languages. Simple credit/debit tracking for small merchants. $85M raised.', weakness: 'Ledger only — same as Khatabook. No POS, no consumer side, no loyalty, no marketing tools', rezEdge: 'ReZ OS replaces ledger + 5 more tools. ReZ drives foot traffic that Khatabook/OkCredit cannot.' },
];

// ─── Competitors — Global Benchmarks ────────────────────────────────
const globalComps = [
  { name: 'Rakuten', country: 'Japan/US', val: '$12B', model: 'Online cashback at 3,500+ stores, browser extension, passive rewards', lesson: 'Online-only model works at scale — ReZ adds offline QR + merchant OS' },
  { name: 'Ibotta', country: 'US', val: '$3B+', model: 'Activate offers → shop → scan receipt → earn cashback on groceries', lesson: 'Receipt scanning → real-time QR is 10x better UX (no photo needed)' },
  { name: 'Fetch Rewards', country: 'US', val: '$2.5B', model: 'Scan any receipt → earn points → gift cards. 17M MAU, $110B receipts scanned', lesson: 'Universal receipt model works — ReZ upgrades to instant QR + coin economy' },
  { name: 'Shopkick', country: 'US', val: 'Acquired', model: 'Earn kicks for walking into stores, scanning barcodes, watching videos', lesson: 'In-store engagement drives foot traffic — ReZ gamification hub does same + payments' },
  { name: 'Starbucks Rewards', country: 'Global', val: 'Part of $130B', model: 'Closed-loop: earn stars → redeem at Starbucks. 34M US members. $1.6B stored value.', lesson: 'ReZ applies the Starbucks closed-loop model across ALL merchants, not just one brand' },
];

// ─── Team ───────────────────────────────────────────────────────────
const team = [
  { role: 'CEO & Product', name: 'Founder', desc: 'Full product vision. Built Nuqta (GCC version) with 31 products across 11 companies. 1,100+ screens designed. End-to-end ecosystem architect.', icon: Crown },
  { role: 'CTO', name: 'On Board', desc: 'React Native + Node.js lead. Built core wallet, QR engine, and Rabtul backbone. Shipping production app.', icon: Settings },
  { role: 'CMO', name: 'On Board', desc: 'Growth strategy, brand positioning, user acquisition campaigns, social media, and partnership development.', icon: Eye },
  { role: 'CHRO', name: 'On Board', desc: 'People ops, culture, hiring pipeline, compliance, and organizational scaling strategy.', icon: Users },
  { role: 'Chief Sales Officer', name: 'On Board', desc: 'Merchant acquisition lead. Secured 50+ LOIs. On-ground sales team management and partnership deals.', icon: Target },
  { role: 'Graphic Designer', name: 'On Board', desc: 'UI/UX design, brand assets, marketing creatives, pitch materials, and product design system.', icon: Gem },
  { role: 'Full-Stack Developers (2)', name: 'On Board', desc: 'React Native (iOS/Android) + Node.js backend + PostgreSQL + Redis. Building and shipping production code.', icon: Database },
];

// ─── Risks ──────────────────────────────────────────────────────────
const risks = [
  { risk: 'Merchant adoption slower than projected', severity: 'high', mitigation: ['Free ReZ OS POS replaces ₹2K/mo Petpooja subscription', 'On-ground sales team with incentive structure', 'Pilot with 50 merchants before scaling', 'Offer guaranteed foot traffic via ReZ Ads'] },
  { risk: 'User acquisition cost too high', severity: 'high', mitigation: ['Campus ambassador program (₹50/referral vs ₹200+ on Meta)', 'Referral loop: both parties earn ₹100 in coins', 'Organic via merchant-driven QR adoption', 'Gamification drives daily app opens (4x industry avg)'] },
  { risk: 'UPI competition from Paytm/PhonePe', severity: 'medium', mitigation: ['ReZ is NOT a payments app — it is a rewards + merchant OS', 'UPI is the payment rail, not the product', 'Neither Paytm nor PhonePe offer closed-loop coins or merchant OS', 'Differentiation: earn coins → spend coins → locked in'] },
  { risk: 'Regulatory risk (RBI digital lending / wallet rules)', severity: 'medium', mitigation: ['ReZ Coins are loyalty points, not stored value (no PPI license needed initially)', 'Cash balance via licensed banking partner', 'Legal counsel from Day 1 (Cyril Amarchand / AZB)', 'Phased approach: loyalty first, wallet later'] },
  { risk: 'Cash burn exceeds projections', severity: 'medium', mitigation: ['$50K reserve fund (10% of raise)', 'Lean team: 8-person core for 18 months', 'Revenue from Month 1 via merchant commissions', 'Break-even target: Month 15-18'] },
];

// ─── Milestones ─────────────────────────────────────────────────────
const milestones = [
  { phase: 'Phase 1: Build', timeline: 'Q2-Q3 2026', items: ['Core app (React Native) — wallet, QR, discovery', 'ReZ OS merchant POS (tablet/phone)', 'UPI integration via Razorpay/Cashfree', 'Onboard 50 pilot merchants (Koramangala, Indiranagar)', '5,000 beta users'], color: 'border-blue-500/50', bg: 'bg-blue-500/10' },
  { phase: 'Phase 2: Validate', timeline: 'Q4 2026', items: ['500 merchants across Bangalore', '25K users with 5K MAU', 'Launch ReZ+ membership (4 tiers)', 'Gamification hub live (badges, streaks)', 'Prove unit economics: LTV > 3x CAC'], color: 'border-emerald-500/50', bg: 'bg-emerald-500/10' },
  { phase: 'Phase 3: Scale', timeline: 'Q1-Q2 2027', items: ['5,000 merchants, 200K users', 'Expand to Mumbai, Delhi, Hyderabad, Pune (Wave 1)', 'Bill payments + savings pots', 'AI-R recommendation engine + ReZ Ads', 'Raise Series A ($20-30M at $150-250M)'], color: 'border-purple-500/50', bg: 'bg-purple-500/10' },
  { phase: 'Phase 4: Dominate', timeline: 'Q3 2027+', items: ['15,000+ merchants, 750K+ users across 10+ cities', 'Wave 2: Chennai, Kolkata, Ahmedabad, Jaipur, Kochi, Chandigarh', 'Launch delivery (Wasil India) + BNPL (Qist India)', 'Pan-India market dominance', 'Bridge to Nuqta GCC corridor'], color: 'border-amber-500/50', bg: 'bg-amber-500/10' },
];

// ─── Comparable Exits ───────────────────────────────────────────────
const comparables = [
  { name: 'CRED', val: '$3.5B', stage: 'Series E', model: 'CC rewards → fintech platform, 13M users', relevance: 'Same "reward spending" thesis — ReZ serves 26x larger UPI base' },
  { name: 'MagicPin', val: '$200M+', stage: 'IPO-bound', model: 'Bill upload cashback, 10M users, EBITDA near breakeven', relevance: 'Direct comp — ReZ adds real-time QR + merchant OS + closed-loop' },
  { name: 'Razorpay', val: '$7.5B', stage: 'Series F', model: 'Payment infra powering 300M+ transactions', relevance: 'ReZ builds on top of payment rails, adds commerce + loyalty' },
  { name: 'Khatabook', val: '$600M', stage: 'Series C', model: 'Digital ledger for 10M+ merchants, $187M raised', relevance: 'ReZ ReZ OS replaces ledger + 5 more tools. Consumer demand built in.' },
  { name: 'Tata Neu', val: '$5B+', stage: 'Tata Group', model: 'Super app: BigBasket, Croma, Taj — NeuCoins ecosystem', relevance: 'Single-brand ecosystem. ReZ works with ANY merchant, not just Tata.' },
  { name: 'Fetch (US)', val: '$2.5B', stage: 'Series D', model: 'Receipt scanning → points. 17M MAU, $110B receipts', relevance: 'ReZ upgrades receipt model to instant QR + coin economy in India' },
];

export default function RezPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedRisk, setExpandedRisk] = useState<string | null>(null);
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  const slides = [
    { id: 'cover', label: 'Cover' },
    { id: 'problem', label: 'Problem' },
    { id: 'solution', label: 'Solution' },
    { id: 'product', label: 'Product' },
    { id: 'merchant', label: 'Merchant ROI' },
    { id: 'market', label: 'Market' },
    { id: 'moat', label: 'Why We Win' },
    { id: 'model', label: 'Business Model' },
    { id: 'traction', label: 'Traction' },
    { id: 'competition', label: 'Competition' },
    { id: 'financials', label: 'Financials' },
    { id: 'team', label: 'Team' },
    { id: 'milestones', label: 'Milestones' },
    { id: 'funds', label: 'Use of Funds' },
    { id: 'risks', label: 'Risks' },
    { id: 'ask', label: 'The Ask' },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Slide Navigation */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-slate-800/90 backdrop-blur rounded-full px-4 py-2 flex items-center gap-1.5 max-w-[95vw] overflow-x-auto scrollbar-hide">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className={`shrink-0 transition-all rounded-full ${
              currentSlide === index ? 'bg-orange-500 w-8 h-3' : 'bg-slate-600 hover:bg-slate-500 w-3 h-3'
            }`}
            title={slide.label}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="fixed bottom-8 right-8 z-50 flex gap-2">
        {currentSlide > 0 && (
          <button onClick={() => setCurrentSlide(currentSlide - 1)} className="w-12 h-12 rounded-full bg-slate-800/90 backdrop-blur text-white flex items-center justify-center hover:bg-slate-700 transition-colors">
            <ArrowRight className="w-5 h-5 rotate-180" />
          </button>
        )}
        {currentSlide < slides.length - 1 && (
          <button onClick={() => setCurrentSlide(currentSlide + 1)} className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-400 transition-colors">
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Slide Counter */}
      <div className="fixed bottom-8 left-8 z-50 bg-slate-800/90 backdrop-blur rounded-full px-4 py-2 text-sm text-slate-400">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SLIDE 1: COVER */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      {currentSlide === 0 && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] via-[#1a2942] to-orange-900/20 p-6 sm:p-8">
          <div className="max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 px-4 py-2 rounded-full mb-6">
              <Rocket className="w-5 h-5 text-orange-400" />
              <span className="text-orange-400 font-semibold text-sm">SAFE Round — Pre-Seed</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-4">
              <span className="text-orange-400">ReZ</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 mb-2">रेज़ — The Merchant Growth Engine</p>
            <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Free Merchant OS + Closed-Loop Loyalty
              <br />
              <span className="text-orange-400 font-bold">More sales. Lower CAC. Higher AOV. Loyal customers.</span>
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10">
              {[
                { label: 'Raising', value: '$500K', sub: 'SAFE Note' },
                { label: 'Val Cap', value: '$5M', sub: 'Post-Money' },
                { label: 'Discount', value: '20%', sub: 'To Next Round' },
                { label: 'Target', value: 'Q2 2026', sub: 'Close' },
              ].map(s => (
                <div key={s.label} className="bg-slate-800/50 rounded-xl p-4 px-6 min-w-[100px]">
                  <div className="text-2xl sm:text-3xl font-black text-orange-400">{s.value}</div>
                  <div className="text-slate-400 text-xs">{s.sub}</div>
                  <div className="text-slate-500 text-[10px] mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['Merchant-First', 'Free OS + Loyalty', 'Pan-India in 2 Years', 'UPI-Native'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-slate-800/50 rounded-full text-xs text-slate-300 border border-slate-700/50">{tag}</span>
              ))}
            </div>

            <button onClick={() => setCurrentSlide(1)} className="inline-flex items-center gap-2 bg-orange-500 text-white font-bold px-8 py-4 rounded-full hover:bg-orange-400 transition-colors">
              See the Opportunity <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SLIDE 2: PROBLEM */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      {currentSlide === 1 && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-red-900/20 p-6 sm:p-8">
          <div className="max-w-5xl w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 text-center">
              The <span className="text-red-400">Merchant Problem</span>
            </h2>
            <p className="text-slate-400 text-center mb-10 max-w-2xl mx-auto">India&apos;s 63M merchants are bleeding money on customer acquisition with zero loyalty, zero repeat, and zero tools to fix it.</p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                { icon: Target, stat: '₹500-2K', title: 'Sky-High CAC', desc: 'Merchants spend ₹500-2,000 per customer on Google & Meta ads with zero tracking. Money leaves the ecosystem. No idea which ad brought which customer. Pure waste.', metric: 'Cost per new customer' },
                { icon: Heart, stat: '80%', title: 'Customers Never Return', desc: '80% of first-time customers never come back. No loyalty program, no reason to return, no follow-up. Merchants acquire the same customer over and over.', metric: 'First-timers who never return' },
                { icon: ShoppingBag, stat: 'Flat', title: 'AOV Stuck at Baseline', desc: 'No upselling tools, no membership incentives, no bundle offers, no spend thresholds. Average order value stays flat month after month. Leaving money on the table.', metric: 'Average Order Value growth' },
                { icon: DollarSign, stat: '₹9K+/mo', title: 'Paying for 6 Disconnected Tools', desc: 'POS (₹2K) + CRM (₹1.2K) + Accounting (₹800) + Google Ads (₹5K+) + WhatsApp + Excel. None of them talk to each other. No single view of the business.', metric: 'Spent on disconnected SaaS' },
              ].map(p => (
                <div key={p.title} className="bg-slate-800/30 rounded-xl p-6 border border-red-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                      <p.icon className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-red-400">{p.stat}</div>
                      <div className="text-[10px] text-slate-500">{p.metric}</div>
                    </div>
                  </div>
                  <h3 className="text-white font-bold mb-2">{p.title}</h3>
                  <p className="text-slate-400 text-sm">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
              <p className="text-lg text-white font-bold mb-3 text-center">The Vicious Cycle</p>
              <div className="flex flex-wrap items-center justify-center gap-2 text-sm mb-4">
                {[
                  { text: 'High CAC', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
                  { text: '→' },
                  { text: 'Customer visits once', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
                  { text: '→' },
                  { text: 'No loyalty', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
                  { text: '→' },
                  { text: 'Never returns', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
                  { text: '→' },
                  { text: 'Spend more on ads', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
                  { text: '→' },
                  { text: 'Repeat forever', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
                ].map((step, i) => (
                  step.color ? (
                    <span key={i} className={`px-3 py-1.5 rounded-lg border font-medium ${step.color}`}>{step.text}</span>
                  ) : (
                    <span key={i} className="text-slate-500 font-bold">{step.text}</span>
                  )
                ))}
              </div>
              <p className="text-slate-300 text-center text-sm">Merchants need a <strong className="text-orange-400">free OS that brings customers back</strong>, <strong className="text-emerald-400">increases basket size</strong>, and <strong className="text-blue-400">costs nothing</strong>.</p>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SLIDE 3: SOLUTION */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      {currentSlide === 2 && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] to-emerald-900/20 p-6 sm:p-8">
          <div className="max-w-5xl w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 text-center">
              How ReZ <span className="text-emerald-400">Grows Your Sales</span>
            </h2>
            <p className="text-slate-400 text-center mb-10 max-w-2xl mx-auto">4 metrics that matter to every merchant — and exactly how ReZ moves each one.</p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                {
                  icon: TrendingUp, color: 'emerald', metric: 'Increase Sales', impact: '+20-35%',
                  impactLabel: 'monthly revenue',
                  points: [
                    'ReZ Coins drive foot traffic — users come TO your store to spend coins',
                    'ReZ push notifications target nearby users with personalized offers',
                    'Gamification challenges: "Visit 3 cafes this week → bonus coins"',
                    'Cross-sell from other ecosystem apps (delivery, rides, bills)',
                  ],
                },
                {
                  icon: Target, color: 'blue', metric: 'Reduce CAC', impact: '60-70%',
                  impactLabel: 'lower acquisition cost',
                  points: [
                    'Merchant QR at checkout = free user acquisition (₹0 CAC)',
                    'Every customer refers friends for coins — viral loop built in',
                    'ReZ Ads replace Google/Meta: closed-loop, fully tracked, zero leakage',
                    'Cost drops from ₹500-2,000 → ₹50-150 per new customer',
                  ],
                },
                {
                  icon: ShoppingBag, color: 'purple', metric: 'Increase AOV', impact: '+15-30%',
                  impactLabel: 'higher basket size',
                  points: [
                    'Membership tiers incentivize bigger orders (2x-3x coin earn rates)',
                    'Spend thresholds: "Spend ₹500 → earn 2x coins" pushes basket up',
                    'Upsell prompts at POS: "Add ₹80 more to earn bonus coins"',
                    'Bundle offers via ReZ Ads — merchant sets combos, ReZ promotes them',
                  ],
                },
                {
                  icon: Heart, color: 'orange', metric: 'Boost Repeat Rate', impact: '2-3x',
                  impactLabel: 'more visits per customer',
                  points: [
                    'Expiring coins (30/90-day) create urgency to return and spend',
                    'CRM auto-sends win-back campaigns: "You haven\'t visited in 7 days"',
                    'Streaks & challenges: "Visit 5 times → unlock Gold badge"',
                    'Branded Coins lock customers to YOUR store specifically',
                  ],
                },
              ].map(s => (
                <div key={s.metric} className={`bg-${s.color === 'emerald' ? 'emerald' : s.color === 'blue' ? 'blue' : s.color === 'purple' ? 'purple' : 'orange'}-500/5 rounded-xl p-6 border border-${s.color === 'emerald' ? 'emerald' : s.color === 'blue' ? 'blue' : s.color === 'purple' ? 'purple' : 'orange'}-500/30`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-${s.color === 'emerald' ? 'emerald' : s.color === 'blue' ? 'blue' : s.color === 'purple' ? 'purple' : 'orange'}-500/10 border border-${s.color === 'emerald' ? 'emerald' : s.color === 'blue' ? 'blue' : s.color === 'purple' ? 'purple' : 'orange'}-500/30 flex items-center justify-center`}>
                        <s.icon className={`w-5 h-5 text-${s.color === 'emerald' ? 'emerald' : s.color === 'blue' ? 'blue' : s.color === 'purple' ? 'purple' : 'orange'}-400`} />
                      </div>
                      <h3 className="text-white font-bold">{s.metric}</h3>
                    </div>
                    <div className="text-right">
                      <div className={`text-xl font-black text-${s.color === 'emerald' ? 'emerald' : s.color === 'blue' ? 'blue' : s.color === 'purple' ? 'purple' : 'orange'}-400`}>{s.impact}</div>
                      <div className="text-[10px] text-slate-500">{s.impactLabel}</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {s.points.map((point, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className={`w-4 h-4 text-${s.color === 'emerald' ? 'emerald' : s.color === 'blue' ? 'blue' : s.color === 'purple' ? 'purple' : 'orange'}-400 shrink-0 mt-0.5`} />
                        <span className="text-sm text-slate-300">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-800/30 rounded-xl p-6 border border-emerald-500/30">
              <h3 className="text-lg font-bold text-white mb-4 text-center">The Virtuous Cycle</h3>
              <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
                {[
                  { text: 'Merchant joins free', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
                  { text: '→' },
                  { text: 'QR at checkout', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
                  { text: '→' },
                  { text: 'Customers earn coins', color: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
                  { text: '→' },
                  { text: 'Coins expire → return', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
                  { text: '→' },
                  { text: 'More sales + data', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
                  { text: '→' },
                  { text: 'Smarter ReZ campaigns', color: 'bg-pink-500/20 text-pink-400 border-pink-500/30' },
                ].map((step, i) => (
                  step.color ? (
                    <span key={i} className={`px-3 py-1.5 rounded-lg border font-medium ${step.color}`}>{step.text}</span>
                  ) : (
                    <span key={i} className="text-slate-500 font-bold">{step.text}</span>
                  )
                ))}
              </div>
              <p className="text-center text-emerald-400 text-xs font-bold mt-4">Every customer who pays → earns coins → comes back. The merchant wins on every loop.</p>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SLIDE 4: PRODUCT — 10 Core Features */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      {currentSlide === 3 && (
        <div className="min-h-screen bg-gradient-to-br from-[#0a1628] to-[#1a2942] p-6 sm:p-8 pt-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-2 text-center">
              10 Core <span className="text-orange-400">Features</span>
            </h2>
            <p className="text-slate-400 text-center mb-8">354 screens designed. 500+ API endpoints. 60+ database tables.</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {coreFeatures.map(f => {
                const isExpanded = expandedFeature === f.id;
                return (
                  <button key={f.id} onClick={() => setExpandedFeature(isExpanded ? null : f.id)} className="text-left bg-slate-800/30 rounded-xl p-5 border border-slate-700/50 hover:border-slate-600/50 transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <f.icon className={`w-6 h-6 ${f.color}`} />
                      <h3 className="text-white font-bold text-sm">{f.title}</h3>
                    </div>
                    <p className="text-xs text-slate-400 mb-2">{f.desc}</p>
                    {isExpanded && (
                      <div className="space-y-1 mt-3 pt-3 border-t border-slate-700/50">
                        {f.details.map((d, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle className={`w-3.5 h-3.5 ${f.color} shrink-0 mt-0.5`} />
                            <span className="text-xs text-slate-300">{d}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: 'User Screens', value: '354', sub: '213 + 141 Prive' },
                { label: 'API Endpoints', value: '500+', sub: 'RESTful' },
                { label: 'Database Tables', value: '60+', sub: 'PostgreSQL + MongoDB' },
                { label: 'Coin Types', value: '4', sub: 'Smart debit priority' },
              ].map(s => (
                <div key={s.label} className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50">
                  <div className="text-xl font-black text-orange-400">{s.value}</div>
                  <div className="text-[10px] text-slate-500">{s.sub}</div>
                  <div className="text-xs text-slate-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SLIDE 5: MERCHANT OS (ReZ OS) */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      {currentSlide === 4 && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] to-blue-900/20 p-6 sm:p-8">
          <div className="max-w-5xl w-full">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-2 text-center">
              Merchant <span className="text-blue-400">ROI — Before vs After</span>
            </h2>
            <p className="text-slate-400 text-center mb-8">Concrete numbers for a typical Bangalore cafe/restaurant using ReZ + ReZ OS.</p>

            {/* Before vs After Comparison */}
            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-500/5 rounded-xl p-6 border border-red-500/30">
                <h3 className="text-lg font-bold text-red-400 mb-4 text-center">Before ReZ</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Customers/day', value: '100', icon: Users },
                    { label: 'Average Order Value', value: '₹350', icon: ShoppingBag },
                    { label: 'Repeat Rate', value: '15%', icon: Heart },
                    { label: 'CAC (Google/Meta)', value: '₹1,200', icon: Target },
                    { label: 'Tools Cost', value: '₹9,000/mo', icon: Settings },
                    { label: 'Monthly Revenue', value: '₹10.5L', icon: DollarSign },
                  ].map(item => (
                    <div key={item.label} className="flex items-center justify-between py-2 border-b border-slate-700/30">
                      <div className="flex items-center gap-2">
                        <item.icon className="w-4 h-4 text-red-400" />
                        <span className="text-sm text-slate-400">{item.label}</span>
                      </div>
                      <span className="text-white font-bold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-emerald-500/5 rounded-xl p-6 border border-emerald-500/30">
                <h3 className="text-lg font-bold text-emerald-400 mb-4 text-center">After ReZ (Month 6)</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Customers/day', value: '135', change: '+35%', icon: Users },
                    { label: 'Average Order Value', value: '₹450', change: '+29%', icon: ShoppingBag },
                    { label: 'Repeat Rate', value: '45%', change: '3x', icon: Heart },
                    { label: 'CAC (via ReZ Ads)', value: '₹120', change: '-90%', icon: Target },
                    { label: 'Tools Cost', value: '₹0', change: 'FREE', icon: Settings },
                    { label: 'Monthly Revenue', value: '₹18.2L', change: '+73%', icon: DollarSign },
                  ].map(item => (
                    <div key={item.label} className="flex items-center justify-between py-2 border-b border-slate-700/30">
                      <div className="flex items-center gap-2">
                        <item.icon className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-slate-300">{item.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-bold">{item.value}</span>
                        <span className="text-xs px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">{item.change}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* How Each Metric Moves */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-orange-500/30 mb-8">
              <h3 className="text-lg font-bold text-white mb-4 text-center">How Coins & Loyalty Drive Each Metric</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { metric: 'Sales +35%', how: 'Coin-holding users actively seek out ReZ merchants. Push notifications drive foot traffic. Nearby users see "₹50 coins at this cafe" on the app.', color: 'text-emerald-400' },
                  { metric: 'CAC -90%', how: 'QR at checkout = ₹0 acquisition. Each customer refers 2-3 friends for coin bonuses. ReZ Ad campaigns cost 60-70% less than Google with full tracking.', color: 'text-blue-400' },
                  { metric: 'AOV +29%', how: 'Spend ₹500 → earn 2x coins. Gold/Prive members earn 2-3x, so they order more. POS upsell: "Add ₹80 more for bonus coins." Bundle offers via ReZ Ads.', color: 'text-purple-400' },
                  { metric: 'Repeat 3x', how: 'Promo Coins expire in 30 days — "use it or lose it." Win-back SMS: "Your ₹120 coins expire in 3 days." Streaks: "5th visit = double coins." Branded Coins lock to your store.', color: 'text-orange-400' },
                ].map(m => (
                  <div key={m.metric} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                    <div className={`font-bold text-sm ${m.color} mb-2`}>{m.metric}</div>
                    <p className="text-xs text-slate-300">{m.how}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ReZ OS Replaces */}
            <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/30 mb-6">
              <h3 className="text-lg font-bold text-white mb-4">ReZ OS: Free OS That Replaces 6 Paid Tools</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { tool: 'Petpooja / POSist', cost: '₹2,000/mo', module: 'POS System' },
                  { tool: 'Zoho CRM', cost: '₹1,200/mo', module: 'CRM' },
                  { tool: 'Tally / Zoho Books', cost: '₹800/mo', module: 'Financial' },
                  { tool: 'Google Ads', cost: '₹5,000+/mo', module: 'ReZ Marketing' },
                  { tool: 'WhatsApp Business', cost: 'Free but manual', module: 'Order Management' },
                  { tool: 'Excel Spreadsheets', cost: 'Error-prone', module: 'Analytics + Inventory' },
                ].map(r => (
                  <div key={r.tool} className="flex items-center gap-3 bg-slate-900/50 rounded-lg p-3">
                    <div className="text-center min-w-[60px]">
                      <div className="text-xs text-red-400 line-through">{r.cost}</div>
                      <div className="text-xs text-emerald-400 font-bold">FREE</div>
                    </div>
                    <div>
                      <div className="text-xs text-white font-medium">{r.tool}</div>
                      <div className="text-[10px] text-slate-500">→ {r.module}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-emerald-400 text-sm font-bold mt-4">₹9,000+/month saved + ₹7.7L/month MORE revenue = merchant ROI from Day 1</p>
            </div>

            <div className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50 text-center">
              <p className="text-slate-300 text-sm"><strong className="text-white">Lock-in Effect:</strong> Once a merchant&apos;s billing, inventory, customers, and credit history live in ReZ OS — <strong className="text-orange-400">they never leave</strong>. Switching cost is infinite.</p>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SLIDE 6: MARKET */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      {currentSlide === 5 && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] to-purple-900/20 p-6 sm:p-8">
          <div className="max-w-5xl w-full">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-2 text-center">
              <span className="text-purple-400">Market</span> Opportunity
            </h2>
            <p className="text-slate-400 text-center mb-10">India is the world&apos;s largest digital payments market. 50% of global digital transactions happen on UPI.</p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { label: 'TAM', value: '$10T', detail: 'India Digital Payments by 2026 (BCG)', color: 'text-purple-400' },
                { label: 'SAM', value: '$8.88B', detail: 'Cashback & Rewards App Market 2025', color: 'text-blue-400' },
                { label: 'SOM', value: '₹1,500 Cr', detail: 'Year 2 GMV — 10+ Cities Across India', color: 'text-orange-400' },
              ].map(m => (
                <div key={m.label} className="bg-slate-800/30 rounded-xl p-5 text-center border border-slate-700/50">
                  <div className="text-xs text-slate-400 font-bold">{m.label}</div>
                  <div className={`text-2xl sm:text-3xl font-black mt-1 ${m.color}`}>{m.value}</div>
                  <div className="text-xs text-slate-500 mt-2">{m.detail}</div>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
              {[
                { stat: '228B', label: 'UPI Transactions (2025)', icon: Zap },
                { stat: '400M+', label: 'UPI Users Today', icon: Users },
                { stat: '1B', label: 'Daily UPI Target (2027)', icon: TrendingUp },
                { stat: '65%', label: 'Digital Payments by 2026', icon: Smartphone },
                { stat: '63M', label: 'SMBs in India', icon: Store },
                { stat: '1.4B', label: 'India Population', icon: MapPin },
                { stat: '60%+', label: 'Smartphone Penetration', icon: Globe },
                { stat: '10+', label: 'Target Cities by Year 2', icon: DollarSign },
              ].map(s => (
                <div key={s.label} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50 flex items-center gap-3">
                  <s.icon className="w-5 h-5 text-purple-400 shrink-0" />
                  <div>
                    <div className="text-lg font-black text-white">{s.stat}</div>
                    <div className="text-[10px] text-slate-400">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30 mb-6">
              <h3 className="text-lg font-bold text-white mb-3">Launch City: Bangalore</h3>
              <p className="text-sm text-slate-400 mb-3">India&apos;s tech capital — highest ARPU, densest merchant ecosystem, UPI-native population. Perfect to prove the model before scaling nationally.</p>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  'Highest ARPU per user in India',
                  'Dense merchant corridors (Koramangala, HSR, Indiranagar)',
                  'UPI-native — already scan-and-pay daily',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-500/30">
              <h3 className="text-lg font-bold text-white mb-3">2-Year Pan-India Expansion</h3>
              <p className="text-sm text-slate-400 mb-4">Bangalore proves the model → replicate city-by-city. Target: present in most major Indian cities within 24 months.</p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { phase: 'Q2-Q4 2026', label: 'Launch', cities: 'Bangalore', merchants: '500+', color: 'text-blue-400' },
                  { phase: 'Q1-Q2 2027', label: 'Wave 1', cities: 'Mumbai, Delhi, Hyderabad, Pune', merchants: '5,000+', color: 'text-emerald-400' },
                  { phase: 'Q3-Q4 2027', label: 'Wave 2', cities: 'Chennai, Kolkata, Ahmedabad, Jaipur, Kochi, Chandigarh +', merchants: '15,000+', color: 'text-amber-400' },
                ].map((w, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="text-xs text-slate-500">{w.phase}</div>
                    <div className={`text-sm font-bold ${w.color} mt-1`}>{w.label}</div>
                    <div className="text-white text-sm font-medium mt-2">{w.cities}</div>
                    <div className="text-xs text-slate-400 mt-1">{w.merchants} merchants</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SLIDE 7: WHY WE WIN (MOAT) */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      {currentSlide === 6 && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] to-amber-900/20 p-6 sm:p-8">
          <div className="max-w-5xl w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 text-center">
              Why We <span className="text-orange-400">Win</span>
            </h2>
            <p className="text-slate-400 text-center mb-10 max-w-2xl mx-auto">6 structural moats that make ReZ extremely hard to replicate — and impossible to leave once adopted.</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {[
                { icon: Lock, color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30', title: 'Closed-Loop Lock-In', desc: 'ReZ Coins only work inside ReZ. Every rupee earned stays in the ecosystem. Money never leaks to Google, Meta, or Paytm. Once a user has coins, they MUST come back to spend them.' },
                { icon: Store, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30', title: 'Free ReZ OS = Infinite Switching Cost', desc: 'Once a merchant\'s POS, inventory, CRM, customer data, and credit history live in ReZ OS — they never leave. Replacing 6 integrated tools is impossible. And it\'s free.' },
                { icon: QrCode, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', title: 'QR = Zero-CAC Acquisition', desc: 'Every merchant checkout counter becomes a free user acquisition channel. Customer scans QR to pay → downloads ReZ → earns coins. No ad spend needed. Each merchant recruits users for you.' },
                { icon: Timer, color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/30', title: 'Expiring Coins = Forced Repeat', desc: 'Promo Coins expire in 30 days. Branded Coins in 90 days. Users MUST return and spend before expiry. This creates predictable, recurring foot traffic that no discount coupon can match.' },
                { icon: Network, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30', title: 'Two-Sided Network Effect', desc: 'More merchants = more places to earn coins. More coins = more users join. More users = more merchants want in. This flywheel accelerates with every merchant added. Winner takes all.' },
                { icon: Brain, color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', title: 'Data Moat', desc: 'Every transaction teaches us: what users buy, where, when, how often. This makes ReZ Ads targeting smarter over time. New entrants start with zero data. We compound daily.' },
              ].map(m => (
                <div key={m.title} className={`${m.bg} rounded-xl p-6 border ${m.border}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl ${m.bg} border ${m.border} flex items-center justify-center`}>
                      <m.icon className={`w-5 h-5 ${m.color}`} />
                    </div>
                    <h3 className="text-white font-bold text-sm">{m.title}</h3>
                  </div>
                  <p className="text-slate-300 text-sm">{m.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-slate-800/30 rounded-xl p-6 border border-orange-500/30">
              <h3 className="text-lg font-bold text-white mb-4 text-center">Why Competitors Can&apos;t Copy This</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { comp: 'Paytm / PhonePe', why: 'Open-loop payment pipes. Money leaves their ecosystem instantly. No coin lock-in, no merchant OS, no loyalty engine.' },
                  { comp: 'CRED', why: 'CC-only (15% of India). No merchant tools. No QR at checkout. No closed-loop coins. Cannot serve the UPI-native 400M.' },
                  { comp: 'MagicPin', why: 'Manual bill uploads (not real-time). No POS, no CRM, no integrated merchant OS. Cannot lock merchants in.' },
                  { comp: 'Petpooja / Khatabook', why: 'Merchant tools only — no consumer app, no loyalty coins, no foot traffic generation. Half the flywheel missing.' },
                ].map(c => (
                  <div key={c.comp} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                    <div className="text-orange-400 font-bold text-sm mb-1">{c.comp}</div>
                    <p className="text-xs text-slate-400">{c.why}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-orange-400 text-sm font-bold mt-4">ReZ is the only player combining closed-loop coins + free merchant OS + UPI-native + gamification. Nobody has all four.</p>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SLIDE 8: BUSINESS MODEL */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      {currentSlide === 7 && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] to-emerald-900/20 p-6 sm:p-8">
          <div className="max-w-5xl w-full">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-2 text-center">
              <span className="text-emerald-400">Business</span> Model
            </h2>
            <p className="text-slate-400 text-center mb-10">7 revenue streams. Revenue from Day 1. Break-even by Month 15-18.</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                { stream: 'Merchant Commission', rev: '5-15%', desc: 'Per-transaction commission on every sale through ReZ', icon: DollarSign, color: 'text-emerald-400' },
                { stream: 'ReZ+ Membership', rev: '₹499-1,999/mo', desc: 'Premium tiers: Silver, Gold, Prive — earn multipliers + exclusive perks', icon: Crown, color: 'text-purple-400' },
                { stream: 'ReZ Ad Campaigns', rev: '₹5-50K/campaign', desc: 'Closed-loop merchant advertising — zero leakage, full ROI tracking', icon: Eye, color: 'text-blue-400' },
                { stream: 'Coin Breakage', rev: '15-25%', desc: 'Unused/expired coins — industry standard loyalty revenue', icon: Coins, color: 'text-amber-400' },
                { stream: 'Bill Pay Commission', rev: '0.5-2%', desc: 'Utility, telecom, DTH bill payment commissions', icon: CreditCard, color: 'text-cyan-400' },
                { stream: 'Data Insights', rev: '₹10K+/mo', desc: 'Anonymized merchant analytics sold to brands and FMCG', icon: BarChart3, color: 'text-pink-400' },
                { stream: 'ReZ OS Premium', rev: '₹999-4,999/mo', desc: 'Advanced merchant tools: multi-store, advanced analytics, priority support', icon: Store, color: 'text-orange-400' },
              ].map(s => (
                <div key={s.stream} className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50">
                  <div className="flex items-center gap-2 mb-2">
                    <s.icon className={`w-5 h-5 ${s.color}`} />
                    <h3 className="text-white font-bold text-sm">{s.stream}</h3>
                  </div>
                  <div className={`text-lg font-black ${s.color} mb-1`}>{s.rev}</div>
                  <p className="text-xs text-slate-400">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-500/30">
              <h3 className="text-lg font-bold text-white mb-3">Unit Economics (Target at Scale)</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { metric: 'CAC', value: '₹80-120', sub: 'Referral + organic' },
                  { metric: 'LTV', value: '₹2,000-4,000', sub: '24-month horizon' },
                  { metric: 'LTV:CAC', value: '17-42x', sub: 'Industry: 3-5x' },
                  { metric: 'Payback', value: '45-60 days', sub: 'Industry: 6-12 months' },
                ].map(u => (
                  <div key={u.metric} className="text-center bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="text-xs text-emerald-400 font-bold">{u.metric}</div>
                    <div className="text-xl font-black text-white mt-1">{u.value}</div>
                    <div className="text-[10px] text-slate-500 mt-1">{u.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SLIDE 8: TRACTION / WHAT'S BUILT */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      {currentSlide === 8 && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] to-amber-900/20 p-6 sm:p-8">
          <div className="max-w-5xl w-full">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-2 text-center">
              Traction — <span className="text-amber-400">Ready to Launch</span>
            </h2>
            <p className="text-slate-400 text-center mb-10">This isn&apos;t a slide deck with no product. The app is built, tested, and launching. 50+ merchant LOIs secured.</p>

            <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-500/30 mb-8">
              <h3 className="text-lg font-bold text-emerald-400 mb-4 text-center">Launch-Ready Milestones</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { metric: 'App', label: 'Built & Testing', desc: 'Core ReZ app built, in testing phase, ready for market launch', color: 'text-emerald-400', icon: '🚀' },
                  { metric: '50+', label: 'Merchant LOIs', desc: 'Letters of Intent secured from local merchants — committed to join at launch', color: 'text-orange-400', icon: '📋' },
                  { metric: '7', label: 'Team Members', desc: 'Full CXO team (CEO, CTO, CMO, CHRO, CSO) + 2 developers + designer', color: 'text-blue-400', icon: '👥' },
                  { metric: 'Live', label: 'Product Demo', desc: 'Working app with QR scan, wallet, merchant dashboard — not just mockups', color: 'text-purple-400', icon: '📱' },
                ].map(t => (
                  <div key={t.label} className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/50 text-center">
                    <div className="text-3xl mb-2">{t.icon}</div>
                    <div className={`text-2xl font-black ${t.color}`}>{t.metric}</div>
                    <h3 className="text-white font-bold text-sm mt-1">{t.label}</h3>
                    <p className="text-xs text-slate-400 mt-2">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                { metric: '1,100+', label: 'Screens Designed', desc: 'Complete UI/UX across user app, merchant OS, and admin panel', color: 'text-orange-400' },
                { metric: '500+', label: 'API Endpoints', desc: 'Full RESTful API architecture documented and implemented', color: 'text-blue-400' },
                { metric: '60+', label: 'Database Tables', desc: 'PostgreSQL + MongoDB + Redis + Elasticsearch — production-ready', color: 'text-emerald-400' },
                { metric: '31', label: 'Products Designed', desc: 'Full ecosystem: Nuqta/ReZ + ReZ OS + 29 vertical apps', color: 'text-purple-400' },
                { metric: '11', label: 'Companies Structured', desc: 'Corporate hierarchy, ownership, and regulatory mapping done', color: 'text-cyan-400' },
                { metric: '740+', label: 'Pages Built', desc: 'Product pages, pitch decks, documentation — all live on web', color: 'text-pink-400' },
              ].map(t => (
                <div key={t.label} className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50">
                  <div className={`text-3xl font-black ${t.color}`}>{t.metric}</div>
                  <h3 className="text-white font-bold text-sm mt-1">{t.label}</h3>
                  <p className="text-xs text-slate-400 mt-1">{t.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-amber-500/10 rounded-xl p-6 border border-amber-500/30 mb-6">
              <h3 className="text-lg font-bold text-white mb-3">GCC Version (Nuqta) — Proven Blueprint</h3>
              <p className="text-slate-300 text-sm mb-4">ReZ is the Indian adaptation of <strong className="text-amber-400">Nuqta</strong>, the GCC version designed with 31 products across 11 companies. The entire product architecture, coin system, membership tiers, and merchant OS have been battle-tested in design across the UAE, Saudi Arabia, and 4 other GCC markets.</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'GCC Products', value: '31' },
                  { label: 'Companies', value: '11' },
                  { label: 'GCC Countries', value: '6' },
                  { label: 'GMV Potential', value: '6B+ AED' },
                ].map(g => (
                  <div key={g.label} className="bg-slate-900/50 rounded-lg p-3 text-center">
                    <div className="text-lg font-black text-amber-400">{g.value}</div>
                    <div className="text-[10px] text-slate-400">{g.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50 text-center">
              <p className="text-slate-300 text-sm"><strong className="text-white">What $500K buys:</strong> Not a concept — it buys <strong className="text-orange-400">scale for a product that already exists</strong>. From 50 merchants to 5,000+. From Bangalore beta to pan-India expansion.</p>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SLIDE 9: COMPETITION */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      {currentSlide === 9 && (
        <div className="min-h-screen bg-gradient-to-br from-[#0a1628] to-red-900/20 p-6 sm:p-8 pt-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-2 text-center">
              Competitive <span className="text-red-400">Landscape</span>
            </h2>
            <p className="text-slate-400 text-center mb-8">17 competitors analyzed across 4 categories. Nobody combines closed-loop rewards + merchant OS + UPI-native.</p>

            {/* Category 1: Cashback & Rewards Apps */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-orange-400 mb-3 flex items-center gap-2"><Gift className="w-5 h-5" /> Cashback & Rewards Apps</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {rewardsCompetitors.map(c => (
                  <div key={c.name} className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <h4 className="text-white font-bold text-sm">{c.name}</h4>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-700 text-slate-300">{c.val}</span>
                      </div>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400">{c.users}</span>
                    </div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-400 mb-2 inline-block">{c.type}</span>
                    <p className="text-[10px] text-slate-400 mb-2">{c.focus}</p>
                    <div className="border-t border-slate-700/30 pt-2 mt-2 space-y-1">
                      <div><span className="text-[10px] text-red-400 font-bold">Gap: </span><span className="text-[10px] text-slate-400">{c.weakness}</span></div>
                      <div><span className="text-[10px] text-emerald-400 font-bold">ReZ: </span><span className="text-[10px] text-slate-300">{c.rezEdge}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 2: Payment & Super Apps */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-blue-400 mb-3 flex items-center gap-2"><Smartphone className="w-5 h-5" /> Payment & Super Apps</h3>
              <div className="grid sm:grid-cols-3 gap-3">
                {paymentCompetitors.map(c => (
                  <div key={c.name} className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <h4 className="text-white font-bold text-sm">{c.name}</h4>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-700 text-slate-300">{c.val}</span>
                      </div>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400">{c.users}</span>
                    </div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 mb-2 inline-block">{c.type}</span>
                    <p className="text-[10px] text-slate-400 mb-2">{c.focus}</p>
                    <div className="border-t border-slate-700/30 pt-2 mt-2 space-y-1">
                      <div><span className="text-[10px] text-red-400 font-bold">Gap: </span><span className="text-[10px] text-slate-400">{c.weakness}</span></div>
                      <div><span className="text-[10px] text-emerald-400 font-bold">ReZ: </span><span className="text-[10px] text-slate-300">{c.rezEdge}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 3: Merchant Tools */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-emerald-400 mb-3 flex items-center gap-2"><Store className="w-5 h-5" /> Merchant Tools</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {merchantCompetitors.map(c => (
                  <div key={c.name} className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-bold text-sm">{c.name}</h4>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-700 text-slate-300">{c.val}</span>
                    </div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 mb-2 inline-block">{c.type}</span>
                    <p className="text-[10px] text-slate-400 mb-2">{c.focus}</p>
                    <div className="border-t border-slate-700/30 pt-2 mt-2 space-y-1">
                      <div><span className="text-[10px] text-red-400 font-bold">Gap: </span><span className="text-[10px] text-slate-400">{c.weakness}</span></div>
                      <div><span className="text-[10px] text-emerald-400 font-bold">ReZ: </span><span className="text-[10px] text-slate-300">{c.rezEdge}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 4: Global Benchmarks */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2"><Globe className="w-5 h-5" /> Global Benchmarks</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {globalComps.map(g => (
                  <div key={g.name} className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-white font-bold text-sm">{g.name}</h4>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-700 text-slate-300">{g.country}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-400">{g.val}</span>
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-400 mb-1">{g.model}</p>
                    <p className="text-[10px] text-orange-400"><strong>ReZ Lesson:</strong> {g.lesson}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Master Feature Comparison Table */}
            <div className="bg-slate-800/30 rounded-xl p-5 border border-orange-500/30">
              <h3 className="text-lg font-bold text-white mb-4 text-center">Master Feature Comparison</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-[10px] sm:text-xs">
                  <thead>
                    <tr className="border-b border-slate-700/50">
                      {['Feature', 'ReZ', 'CRED', 'MagicPin', 'Wyld', 'SaveSage', 'CashKaro', 'Paytm', 'PhonePe', 'Tata Neu', 'Petpooja', 'Khatabook'].map(h => (
                        <th key={h} className={`text-left px-1.5 py-2 font-semibold whitespace-nowrap ${h === 'ReZ' ? 'text-orange-400' : 'text-slate-500'}`}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Closed-Loop Coins',  '✅ 4 types', '❌', '⚠️ Points', '❌ Cashback', '❌', '❌', '❌', '❌', '✅ NeuCoin', '❌', '❌'],
                      ['Free Merchant OS',   '✅ 222 screens', '❌', '❌', '❌', '❌', '❌', '⚠️ Paid', '❌', '❌', '⚠️ ₹10K/yr', '⚠️ Ledger'],
                      ['UPI-Native',         '✅', '❌ CC', '❌', '❌', '❌ CC', '❌', '✅', '✅', '✅', '❌', '⚠️ Basic'],
                      ['QR Scan & Earn',     '✅ Instant', '❌', '❌ Bill photo', '❌', '❌', '❌', '❌', '❌', '❌', '❌', '❌'],
                      ['Gamification',       '✅ 50+ badges', '⚠️', '⚠️ Quests', '✅ Tiers', '❌', '❌', '❌', '❌', '❌', '❌', '❌'],
                      ['AI Assistant',       '✅ AI-R', '✅', '❌', '❌', '✅ Savvy', '❌', '⚠️', '❌', '❌', '❌', '❌'],
                      ['Bill Payments',      '✅ + coins', '✅ CC', '❌', '❌', '✅', '❌', '✅', '✅', '✅', '❌', '❌'],
                      ['Merchant CRM',       '✅ Full', '❌', '⚠️ Basic', '❌', '❌', '❌', '⚠️', '❌', '❌', '⚠️', '❌'],
                      ['Membership Tiers',   '✅ 4 tiers', '✅ Mint', '❌', '✅ Score', '❌', '❌', '⚠️ First', '❌', '✅ NeuPass', '❌', '❌'],
                      ['Consumer App',       '✅', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '❌', '❌'],
                      ['Merchant App',       '✅ ReZ OS', '❌', '✅ Basic', '❌', '❌', '❌', '✅', '❌', '❌', '✅', '✅'],
                      ['Works Offline',      '✅', '❌', '❌', '❌', '❌', '❌', '✅', '❌', '❌', '⚠️', '✅'],
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-slate-800/50">
                        {row.map((cell, j) => (
                          <td key={j} className={`px-1.5 py-1.5 whitespace-nowrap ${
                            j === 0 ? 'text-white font-medium' :
                            cell.startsWith('✅') ? 'text-emerald-400' :
                            cell.startsWith('❌') ? 'text-red-400' : 'text-amber-400'
                          }`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-center text-slate-500 text-[10px] mt-3">ReZ is the only player with ✅ across all 12 features — consumer app + merchant OS + closed-loop + UPI + gamification + AI</p>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SLIDE 10: FINANCIALS */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      {currentSlide === 10 && (
        <div className="min-h-screen bg-gradient-to-br from-[#0a1628] to-emerald-900/20 p-6 sm:p-8 pt-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-2 text-center">
              Financial <span className="text-emerald-400">Projections</span>
            </h2>
            <p className="text-slate-400 text-center mb-8">3-year model. Year 1 profitable. Year 3: ₹600 Cr revenue, $701M valuation.</p>

            {/* Income Statement Summary */}
            <div className="bg-slate-800/30 rounded-xl p-5 border border-emerald-500/30 mb-6">
              <h3 className="text-sm font-bold text-emerald-400 mb-3">3-Year Income Statement</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700/50">
                      {['', 'Revenue', 'Expenses', 'Net Profit', 'Margin', 'Valuation'].map(h => (
                        <th key={h} className="text-left px-3 py-2 text-emerald-400 font-semibold whitespace-nowrap text-xs">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {incomeStatement.map(row => (
                      <tr key={row.year} className="border-b border-slate-800/50">
                        <td className="px-3 py-2.5 text-white font-bold whitespace-nowrap">{row.year}</td>
                        <td className="px-3 py-2.5 text-emerald-400 font-bold">{row.revenue}</td>
                        <td className="px-3 py-2.5 text-red-400">{row.expenses}</td>
                        <td className={`px-3 py-2.5 font-bold ${row.netProfit.startsWith('-') ? 'text-red-400' : 'text-emerald-400'}`}>{row.netProfit}</td>
                        <td className={`px-3 py-2.5 font-bold ${row.margin.startsWith('-') ? 'text-red-400' : 'text-emerald-400'}`}>{row.margin}</td>
                        <td className="px-3 py-2.5 text-amber-400 font-bold">{row.valuation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Growth Trajectory */}
            <div className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50 mb-6">
              <h3 className="text-sm font-bold text-blue-400 mb-3">Growth Trajectory</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700/50">
                      {['Period', 'Users', 'Merchants', 'GMV', 'Revenue', 'Burn', 'Milestone'].map(h => (
                        <th key={h} className="text-left px-2 py-2 text-blue-400 font-semibold whitespace-nowrap text-xs">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {financials.map(f => (
                      <tr key={f.period} className="border-b border-slate-800/50">
                        <td className="px-2 py-2 text-white font-bold whitespace-nowrap text-xs">{f.period}</td>
                        <td className="px-2 py-2 text-slate-300 text-xs">{f.users}</td>
                        <td className="px-2 py-2 text-slate-300 text-xs">{f.merchants.toLocaleString()}</td>
                        <td className="px-2 py-2 text-blue-400 font-bold text-xs">{f.gmv}</td>
                        <td className="px-2 py-2 text-emerald-400 font-bold text-xs">{f.revenue}</td>
                        <td className="px-2 py-2 text-red-400 text-xs">{f.burn}</td>
                        <td className="px-2 py-2 text-slate-400 text-[10px]">{f.milestone}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {/* Unit Economics */}
              <div className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50">
                <h3 className="text-sm font-bold text-white mb-3">Unit Economics</h3>
                <div className="space-y-2">
                  {[
                    { label: 'AOV', value: '₹650' },
                    { label: 'ARPU', value: '₹5,814/yr' },
                    { label: 'CAC (Blended)', value: '₹76' },
                    { label: 'CAM (Merchant)', value: '₹1,000' },
                    { label: 'Active Rate', value: '30%' },
                    { label: 'User Churn', value: '5%/mo' },
                  ].map(r => (
                    <div key={r.label} className="flex justify-between py-0.5">
                      <span className="text-slate-400 text-xs">{r.label}</span>
                      <span className="text-white font-bold text-xs">{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expense Split */}
              <div className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50">
                <h3 className="text-sm font-bold text-white mb-3">Expense Allocation</h3>
                <div className="space-y-2">
                  {expenseBreakdown.map(e => (
                    <div key={e.category} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${e.color} shrink-0`} />
                      <span className="text-slate-400 text-xs flex-1">{e.category}</span>
                      <span className="text-white font-bold text-xs">{e.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Revenue Streams */}
              <div className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50">
                <h3 className="text-sm font-bold text-white mb-3">Revenue per Active User/Mo</h3>
                <div className="space-y-2">
                  {[
                    { stream: 'Commission (5%)', value: '₹162.50' },
                    { stream: 'Promoted Sales (5%)', value: '₹65' },
                    { stream: 'Business Sub', value: '₹1,500/mo' },
                    { stream: 'Affiliate', value: '₹10' },
                    { stream: 'User Sub (ReZ+)', value: '₹49/mo' },
                    { stream: 'B2B Buying', value: '₹500' },
                  ].map(r => (
                    <div key={r.stream} className="flex justify-between py-0.5">
                      <span className="text-slate-400 text-xs">{r.stream}</span>
                      <span className="text-emerald-400 font-bold text-xs">{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50">
                <h3 className="text-sm font-bold text-white mb-3">Runway & Path to Series A</h3>
                <div className="space-y-2">
                  {[
                    { label: 'SAFE Raise', value: '$500K (₹4.2 Cr)' },
                    { label: 'Phase 1 Budget', value: '₹50L (₹8.3L/mo)' },
                    { label: 'Phase 2 Budget', value: '₹33L (₹11L/mo)' },
                    { label: 'Year 1 Profit', value: '₹61L (6.07% margin)' },
                    { label: 'Series A Target', value: '$20-30M at $150-250M' },
                  ].map(r => (
                    <div key={r.label} className="flex justify-between py-0.5">
                      <span className="text-slate-400 text-xs">{r.label}</span>
                      <span className="text-white font-bold text-xs">{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-emerald-500/10 rounded-xl p-5 border border-emerald-500/30">
                <h3 className="text-sm font-bold text-white mb-3">Investor Return Scenario</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Entry (SAFE)', value: '$5M cap', sub: '$500K → 10%' },
                    { label: 'Year 1', value: '$23.6M', sub: '4.7x paper' },
                    { label: 'Year 2', value: '$180M', sub: '36x paper' },
                    { label: 'Year 3', value: '$701M', sub: '140x paper' },
                  ].map(r => (
                    <div key={r.label} className="text-center bg-slate-900/50 rounded-lg p-3 border border-slate-700/50">
                      <div className="text-[10px] text-emerald-400 font-bold">{r.label}</div>
                      <div className="text-sm font-black text-white mt-0.5">{r.value}</div>
                      <div className="text-[9px] text-slate-500 mt-0.5">{r.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link href="/rez-financials" className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors text-sm font-bold">
                <Calculator className="w-4 h-4" />
                View Full Interactive Financial Model
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SLIDE 11: TEAM */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      {currentSlide === 11 && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] to-blue-900/20 p-6 sm:p-8">
          <div className="max-w-5xl w-full">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-2 text-center">
              The <span className="text-blue-400">Team</span>
            </h2>
            <p className="text-slate-400 text-center mb-10">7-person core team already in place. CXO leadership + engineering + design. Shipping product.</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {team.map(t => (
                <div key={t.role} className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                      <t.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm">{t.role}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${t.name === 'Founder' ? 'bg-orange-500/20 text-orange-400' : 'bg-emerald-500/20 text-emerald-400'}`}>{t.name === 'Founder' ? 'Founder' : 'Active'}</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300">{t.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-500/30">
                <h3 className="text-lg font-bold text-white mb-3">Team Strength</h3>
                <div className="space-y-2">
                  {[
                    '7-person core team — all active and building',
                    'Full CXO suite: CEO, CTO, CMO, CHRO, CSO',
                    '2 full-stack developers shipping production code',
                    'Dedicated graphic designer for brand + product UI',
                    'App built, tested, and ready for market launch',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/30">
                <h3 className="text-lg font-bold text-white mb-3">Planned Hires (With $500K)</h3>
                <div className="space-y-2">
                  {[
                    '2 more full-stack engineers (Month 2-3)',
                    '6 on-ground merchant sales reps (Month 3)',
                    'Campus ambassadors for user acquisition',
                    'Customer support team (Month 6)',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50 text-center">
              <p className="text-slate-300 text-sm"><strong className="text-white">Advisory Board:</strong> Seeking advisors with expertise in <strong className="text-orange-400">Indian fintech regulation (RBI/NPCI)</strong>, <strong className="text-emerald-400">merchant acquisition at scale</strong>, and <strong className="text-blue-400">loyalty program design</strong>.</p>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SLIDE 12: MILESTONES */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      {currentSlide === 12 && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] to-purple-900/20 p-6 sm:p-8">
          <div className="max-w-5xl w-full">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-2 text-center">
              <span className="text-purple-400">Milestones</span> & Roadmap
            </h2>
            <p className="text-slate-400 text-center mb-10">4 phases. 24 months to Bangalore dominance. Series A by Month 18.</p>

            <div className="space-y-4 mb-8">
              {milestones.map(m => (
                <div key={m.phase} className={`${m.bg} rounded-xl p-6 border ${m.color}`}>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">{m.phase}</h3>
                    </div>
                    <span className="text-sm text-slate-300 font-medium bg-slate-900/50 px-3 py-1 rounded-full">{m.timeline}</span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {m.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-lg font-bold text-white mb-3">Key Decision Points</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { point: 'Month 6', decision: 'PMF validated?', action: 'If yes → accelerate merchant acquisition. If no → pivot offer mechanics.' },
                  { point: 'Month 12', decision: 'Unit economics work?', action: 'If yes → begin Series A prep. If no → reduce burn, focus on contribution margin.' },
                  { point: 'Month 18', decision: 'Scale or bridge?', action: 'If metrics hit → raise Series A ($20-30M). If close → raise bridge ($2-5M).' },
                ].map(d => (
                  <div key={d.point} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                    <div className="text-purple-400 font-bold text-sm">{d.point}</div>
                    <div className="text-white font-bold text-sm mt-1">{d.decision}</div>
                    <p className="text-xs text-slate-400 mt-2">{d.action}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SLIDE 13: USE OF FUNDS */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      {currentSlide === 13 && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] to-orange-900/20 p-6 sm:p-8">
          <div className="max-w-5xl w-full">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-2 text-center">
              Use of <span className="text-orange-400">Funds</span>
            </h2>
            <p className="text-slate-400 text-center mb-10">$500,000 allocation. 18-20 months of runway. Every dollar mapped.</p>

            <div className="space-y-3 mb-8">
              {useOfFunds.map(f => (
                <div key={f.category} className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${f.color}`} />
                      <h3 className="text-white font-bold">{f.category}</h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl font-black text-orange-400">{f.amount}</span>
                      <span className="text-sm text-slate-400">({f.percent}%)</span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-900/50 rounded-full h-2 mb-2">
                    <div className={`h-2 rounded-full ${f.color}`} style={{ width: `${f.percent}%` }} />
                  </div>
                  <p className="text-xs text-slate-400">{f.details}</p>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-orange-500/10 rounded-xl p-6 border border-orange-500/30">
                <h3 className="text-lg font-bold text-white mb-3">Capital Efficiency</h3>
                <div className="space-y-2">
                  {[
                    '7-person team already in place — no hiring delay',
                    'App built — $500K goes to scale, not build',
                    'No fancy office — co-working space in Koramangala',
                    'AWS startup credits for first 12 months of infra',
                    'Revenue from Day 1 of launch (50+ merchants ready)',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-bold text-white mb-3">Burn Trajectory</h3>
                <div className="space-y-3">
                  {[
                    { month: 'Month 1-3', burn: '₹30L/mo', desc: 'Launch + 50 LOI merchants live + sales reps' },
                    { month: 'Month 4-6', burn: '₹38L/mo', desc: '+ Marketing push + user acquisition' },
                    { month: 'Month 7-12', burn: '₹42L/mo', desc: '+ 2 more engineers + growth campaigns' },
                    { month: 'Month 13-18', burn: '₹48L/mo', desc: '+ Revenue offsets (target: break-even)' },
                  ].map(b => (
                    <div key={b.month} className="flex justify-between items-center py-1 border-b border-slate-700/30">
                      <div>
                        <span className="text-white text-sm font-medium">{b.month}</span>
                        <span className="text-xs text-slate-400 ml-2">{b.desc}</span>
                      </div>
                      <span className="text-red-400 font-bold text-sm">{b.burn}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SLIDE 14: RISKS */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      {currentSlide === 14 && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] to-red-900/10 p-6 sm:p-8">
          <div className="max-w-5xl w-full">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-2 text-center">
              <span className="text-red-400">Risks</span> & Mitigations
            </h2>
            <p className="text-slate-400 text-center mb-10">We are transparent about risks. Every risk has a concrete mitigation plan.</p>

            <div className="space-y-3">
              {risks.map(r => (
                <div key={r.risk} className="bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden">
                  <button onClick={() => setExpandedRisk(expandedRisk === r.risk ? null : r.risk)} className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-center gap-3 text-left">
                      <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                        r.severity === 'high' ? 'bg-red-500/20 text-red-400' : 'bg-orange-500/20 text-orange-400'
                      }`}>{r.severity.toUpperCase()}</span>
                      <span className="text-white font-medium text-sm">{r.risk}</span>
                    </div>
                    {expandedRisk === r.risk ? <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                  </button>
                  {expandedRisk === r.risk && (
                    <div className="px-5 pb-4">
                      <div className="space-y-2">
                        {r.mitigation.map((m, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-300">{m}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SLIDE 15: THE ASK */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      {currentSlide === 15 && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] via-orange-900/20 to-[#0a1628] p-6 sm:p-8">
          <div className="max-w-5xl w-full">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-orange-500/20 px-4 py-2 rounded-full mb-6">
                <Rocket className="w-5 h-5 text-orange-400" />
                <span className="text-orange-400 font-semibold text-sm">The Ask</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
                $500K SAFE at <span className="text-orange-400">$5M Cap</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">Join us in building India&apos;s first closed-loop cashback ecosystem — where every rupee earns, every merchant grows, and nothing leaks.</p>
            </div>

            <div className="bg-slate-800/30 rounded-xl p-6 border border-orange-500/30 mb-8">
              <h3 className="text-lg font-bold text-white mb-4 text-center">SAFE Terms</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {Object.entries(safeTerms).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-slate-700/30">
                    <span className="text-slate-400 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="text-white font-bold text-sm text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50 mb-8">
              <h3 className="text-lg font-bold text-white mb-4 text-center">Comparable Companies & Exits</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {comparables.map(c => (
                  <div key={c.name} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-bold">{c.name}</span>
                      <span className="text-emerald-400 font-black">{c.val}</span>
                    </div>
                    <div className="text-xs text-slate-400 mb-1">{c.model}</div>
                    <div className="text-xs text-orange-400">{c.relevance}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                { label: 'Your $500K Buys', items: ['Scale a product that already exists', '50 → 2,000 merchants in 18 months', '7-person team already executing', '50+ LOIs ready to convert at launch', 'Series A ready by Month 18'] },
                { label: 'What Makes ReZ Different', items: ['Closed-loop (money never leaves)', 'Free merchant OS (infinite switching cost)', 'UPI-native (400M user base)', 'GCC blueprint proven (31 products)', 'App built + 50+ LOIs (not just a deck)'] },
                { label: 'Why Now', items: ['UPI at 228B transactions/year', 'No closed-loop player in India', 'SMBs desperate for free tools', 'App ready, team hired, LOIs signed', 'Digital payments 65% by 2026'] },
              ].map(col => (
                <div key={col.label} className="bg-slate-800/30 rounded-xl p-5 border border-slate-700/50">
                  <h4 className="text-orange-400 font-bold text-sm mb-3">{col.label}</h4>
                  <div className="space-y-2">
                    {col.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-2xl p-8 border border-orange-500/30">
                <p className="text-2xl font-black text-white mb-2">ReZ — Reward Every Zone</p>
                <p className="text-slate-300 mb-6">India&apos;s Closed-Loop Cashback + Merchant OS</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/nuqta" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-400 transition-colors">
                    <Globe className="w-5 h-5" /> See Nuqta (GCC Version)
                  </Link>
                  <Link href="/documentation" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors">
                    <Database className="w-5 h-5" /> Technical Documentation
                  </Link>
                  <Link href="/rtmn-ecosystem" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600 transition-colors">
                    <Network className="w-5 h-5" /> Full Ecosystem (31 Products)
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <GlobalFooter />
    </div>
  );
}
