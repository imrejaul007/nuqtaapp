'use client';

import React, { useState } from 'react';
import GlobalFooter from '@/components/GlobalFooter';
import {
  Users,
  Building2,
  Mail,
  Globe,
  Linkedin,
  Target,
  TrendingUp,
  CheckCircle,
  Clock,
  Star,
  Calendar,
  Send,
  Copy,
  Filter,
  Search,
  MapPin,
  Briefcase,
  ArrowRight,
  Zap,
  Heart,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Phone,
  Twitter,
  DollarSign,
  Sparkles
} from 'lucide-react';

/**
 * NUQTA INVESTOR OUTREACH - COMPREHENSIVE DATABASE
 * =================================================
 * 100+ investors with contact details, alignment strategies, and custom emails
 */

interface Contact {
  name: string;
  title: string;
  linkedin?: string;
  email?: string;
  phone?: string;
  twitter?: string;
}

interface Investor {
  id: string;
  name: string;
  type: 'vc' | 'angel' | 'family-office' | 'corporate' | 'accelerator' | 'government';
  stage: string[];
  checkSize: string;
  focus: string[];
  location: string;
  website: string;
  portfolio: string[];
  contacts: Contact[];
  status: 'target' | 'contacted' | 'meeting' | 'passed' | 'interested';
  priority: 'high' | 'medium' | 'low';
  notes?: string;
  alignment: string;
  customEmail: string;
}

export default function InvestorOutreachPage() {
  const [activeTab, setActiveTab] = useState('target-list');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedPriority, setSelectedPriority] = useState<string>('all');
  const [expandedInvestor, setExpandedInvestor] = useState<string | null>(null);
  const [copiedTemplate, setCopiedTemplate] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'target-list', label: 'All Investors', icon: Target },
    { id: 'competitor-investors', label: 'Competitor Investors', icon: Zap },
    { id: 'templates', label: 'Email Templates', icon: Mail },
    { id: 'pipeline', label: 'Pipeline', icon: TrendingUp },
    { id: 'playbook', label: 'Playbook', icon: Briefcase },
  ];

  // COMPREHENSIVE INVESTOR DATABASE
  const investors: Investor[] = [
    // ============================================
    // TIER 1: UAE VENTURE CAPITAL FUNDS
    // ============================================
    {
      id: 'beco-capital',
      name: 'BECO Capital',
      type: 'vc',
      stage: ['Seed', 'Series A'],
      checkSize: '$500K - $5M',
      focus: ['Fintech', 'E-commerce', 'Consumer Tech', 'SaaS'],
      location: 'Dubai, UAE',
      website: 'https://beco.capital',
      portfolio: ['Careem', 'Kitopi', 'Swvl', 'Fetchr', 'Property Finder'],
      contacts: [
        { name: 'Dany Farha', title: 'Co-Founder & CEO', linkedin: 'danyfarha', email: 'dany@beco.capital', twitter: 'daborz' },
        { name: 'Amir Farha', title: 'Co-Founder & Managing Partner', linkedin: 'amirfarha', email: 'amir@beco.capital' },
        { name: 'Yousef Hammad', title: 'Principal', linkedin: 'yousefhammad', email: 'yousef@beco.capital' }
      ],
      status: 'target',
      priority: 'high',
      notes: 'Top-tier MENA VC. Backed Careem ($3.1B exit). Strong fintech and consumer tech focus. Active in early-stage.',
      alignment: 'BECO invested in Careem which had loyalty features. Nuqta\'s rewards-led commerce aligns with their consumer fintech thesis. Their portfolio company Kitopi (cloud kitchens) could be a merchant partner.',
      customEmail: `Subject: Nuqta - Rewards Infrastructure for UAE Retail | BECO Intro

Hi Dany,

I'm Rejaul, founder of Nuqta. Given BECO's success with Careem and focus on consumer fintech, I wanted to share what we're building.

**The Opportunity:** UAE consumers spend AED 180B annually on local services but earn nothing back. We're building the rewards layer for offline commerce - think "Careem Pay meets The Entertainer."

**Why Now:**
- 32 signed merchant LOIs (cafes, salons across Dubai Marina, Downtown)
- Launching March 1, 2026
- 16.8x LTV:CAC ratio (merchant-funded, no VC subsidy burn)

**The BECO Fit:**
- Careem proved UAE consumers adopt rewards/loyalty
- Kitopi and your F&B portfolio could be launch partners
- We're targeting the $45B GCC local services market

Raising $400K pre-seed on $5M cap SAFE. Would love 20 minutes to share our deck and discuss how BECO's network could accelerate our merchant acquisition.

Best,
Rejaul Karim
Founder, Nuqta
rejaul@nuqtapp.com | +971-XX-XXX-XXXX`
    },
    {
      id: 'nuwa-capital',
      name: 'Nuwa Capital',
      type: 'vc',
      stage: ['Seed', 'Series A', 'Series B'],
      checkSize: '$1M - $15M',
      focus: ['Fintech', 'Payments', 'Logistics', 'Healthcare'],
      location: 'Abu Dhabi, UAE',
      website: 'https://nuwa.capital',
      portfolio: ['Tamara', 'Tabby', 'Sary', 'Trukker', 'Floward'],
      contacts: [
        { name: 'Khaled Talhouni', title: 'Managing Partner', linkedin: 'khaledtalhouni', email: 'khaled@nuwa.capital' },
        { name: 'Sarah Abu Risheh', title: 'Partner', linkedin: 'sarahaburisheh', email: 'sarah@nuwa.capital' },
        { name: 'Stephanie Nour Prince', title: 'Principal', linkedin: 'stephanienourprince', email: 'stephanie@nuwa.capital' }
      ],
      status: 'target',
      priority: 'high',
      notes: 'Backed Tamara ($1B valuation) and Tabby. Deep fintech expertise. Very active in MENA payments.',
      alignment: 'Nuwa\'s Tamara and Tabby investments show they understand payment/rewards infrastructure. Nuqta is the rewards layer that complements BNPL - users earn coins on every purchase regardless of payment method.',
      customEmail: `Subject: Nuqta - The Rewards Layer for GCC Commerce | Nuwa Capital

Hi Khaled,

Congratulations on Tamara's continued growth - you've proven GCC consumers want better payment experiences. I'm building the next layer: rewards.

**Nuqta = Rewards infrastructure for offline commerce**

While Tamara/Tabby solve "how to pay," Nuqta solves "why to return." Users earn 5-10% cashback at any partner merchant, creating a loyalty network effect.

**Traction:**
- 32 signed merchant LOIs
- Launching March 1, 2026 in Dubai
- 16.8x LTV:CAC (merchant-funded model)

**Nuwa Synergy:**
- Tamara/Tabby merchants could offer Nuqta coins as additional incentive
- Same SMB merchant segment you understand deeply
- Rewards + BNPL = complete commerce stack

We're raising $400K pre-seed. Would love to discuss how Nuqta fits Nuwa's fintech thesis.

Best,
Rejaul Karim
Founder, Nuqta`
    },
    {
      id: 'shorooq-partners',
      name: 'Shorooq Partners',
      type: 'vc',
      stage: ['Pre-Seed', 'Seed', 'Series A'],
      checkSize: '$200K - $3M',
      focus: ['Fintech', 'E-commerce', 'Proptech', 'Consumer'],
      location: 'Abu Dhabi, UAE',
      website: 'https://shorooq.com',
      portfolio: ['Sary', 'Trukker', 'Rain', 'Telda', 'Lucky'],
      contacts: [
        { name: 'Shane Shin', title: 'Managing Partner', linkedin: 'shaneshin', email: 'shane@shorooq.com', twitter: 'shaneshin' },
        { name: 'Mahmoud Adi', title: 'General Partner', linkedin: 'mahmoudadi', email: 'mahmoud@shorooq.com' },
        { name: 'Sonia Gokhale', title: 'Principal', linkedin: 'soniagokhale', email: 'sonia@shorooq.com' }
      ],
      status: 'target',
      priority: 'high',
      notes: 'Very active early-stage investor. Strong operational support. Good fit for pre-seed/seed.',
      alignment: 'Shorooq backs consumer fintech (Rain, Telda). Nuqta\'s offline rewards complements their portfolio - users can earn Nuqta coins and cash out via neobanks like Rain.',
      customEmail: `Subject: Nuqta Pre-Seed | Offline Rewards for UAE (Shorooq Fit)

Hi Shane,

Love what you've built at Shorooq - Rain and Telda show you get consumer fintech. I'm building the rewards layer that complements digital banking.

**Nuqta = Search. Save. Earn.**
Users search for local businesses (cafes, salons, gyms), earn 5-10% cashback on purchases. Simple QR scan, instant coins.

**Why Shorooq:**
- Rain users could redeem Nuqta coins directly
- Same UAE young professional demographic
- Pre-seed stage is your sweet spot

**Traction:**
- 32 merchant LOIs signed
- Launching March 1, 2026
- AED 30 blended CAC, AED 504 LTV (16.8x ratio)

Raising $400K on $5M cap. Shorooq's early-stage expertise + merchant network would accelerate our launch.

20 minutes this week?

Best,
Rejaul`
    },
    {
      id: 'global-ventures',
      name: 'Global Ventures',
      type: 'vc',
      stage: ['Seed', 'Series A', 'Series B'],
      checkSize: '$500K - $10M',
      focus: ['Fintech', 'Healthcare', 'E-commerce', 'Mobility'],
      location: 'Dubai, UAE',
      website: 'https://global.vc',
      portfolio: ['Vezeeta', 'Eyewa', 'Mumzworld', 'Trella', 'MaxAB'],
      contacts: [
        { name: 'Noor Sweid', title: 'Founder & General Partner', linkedin: 'noorsweid', email: 'noor@global.vc', twitter: 'naborz' },
        { name: 'Basil Moftah', title: 'General Partner', linkedin: 'basilmoftah', email: 'basil@global.vc' },
        { name: 'Laura Gonzalez', title: 'Principal', linkedin: 'lauragonzalez', email: 'laura@global.vc' }
      ],
      status: 'target',
      priority: 'high',
      notes: 'Strong consumer and marketplace focus. Noor is very active in UAE startup ecosystem.',
      alignment: 'Global Ventures backs consumer marketplaces (Mumzworld, Eyewa). Nuqta is a marketplace connecting consumers to merchants via rewards - similar two-sided network dynamics.',
      customEmail: `Subject: Nuqta - Consumer Rewards Marketplace | Global Ventures

Hi Noor,

Your work with Mumzworld and Eyewa shows Global Ventures understands UAE consumer marketplaces. I'm building the rewards marketplace for local services.

**Nuqta = Two-sided rewards network**
- Consumers: Search for businesses, earn 5-10% cashback
- Merchants: Pay 15% commission only on sales (vs AED 200+ Google Ads CAC)

**Why This Works:**
- 32 signed merchant LOIs (supply locked)
- Launching March 1, 2026
- $45B GCC serviceable market

**Global Ventures Fit:**
- Marketplace model you know well
- Consumer behavior change expertise
- Your Eyewa/Mumzworld merchants could cross-list

Raising $400K pre-seed. Would value your perspective on consumer marketplace growth in UAE.

Best,
Rejaul Karim
Founder, Nuqta`
    },
    {
      id: 'wamda-capital',
      name: 'Wamda Capital',
      type: 'vc',
      stage: ['Seed', 'Series A', 'Series B'],
      checkSize: '$500K - $10M',
      focus: ['Tech', 'Consumer', 'Fintech', 'Logistics'],
      location: 'Dubai, UAE',
      website: 'https://wamda.com/capital',
      portfolio: ['Carriage', 'Instashop', 'Bayzat', 'POSRocket', 'Fetchr'],
      contacts: [
        { name: 'Fadi Ghandour', title: 'Executive Chairman', linkedin: 'fadighandour', email: 'fadi@wamda.com' },
        { name: 'Khaled Talhouni', title: 'Partner', linkedin: 'khaledtalhouni' },
        { name: 'Omar Christidis', title: 'Managing Partner', linkedin: 'omarchristidis', email: 'omar@wamda.com' }
      ],
      status: 'target',
      priority: 'high',
      notes: 'Established MENA VC. Fadi founded Aramex. Strong SMB and consumer portfolio.',
      alignment: 'Wamda\'s POSRocket (merchant POS) and Carriage (food delivery) show they understand merchant tech. Nuqta adds the loyalty layer to their merchant ecosystem.',
      customEmail: `Subject: Nuqta - Loyalty Layer for Wamda's Merchant Ecosystem

Hi Fadi,

Wamda's POSRocket and Carriage investments show deep understanding of UAE merchant needs. I'm building the missing loyalty layer.

**Problem:** Small merchants can't compete with Noon/Careem on customer acquisition. Google Ads costs AED 200+ per customer.

**Nuqta Solution:** Merchants list on our rewards platform, pay 15% only on sales. Users discover them while searching "coffee near me" and earn instant cashback.

**Wamda Synergy:**
- POSRocket merchants could integrate Nuqta loyalty
- Carriage restaurants could offer Nuqta coins for dine-in
- Same SMB segment, complementary solutions

**Traction:** 32 signed LOIs, launching March 1.

Raising $400K. Would love to discuss how Nuqta fits Wamda's merchant ecosystem thesis.

Best,
Rejaul`
    },
    {
      id: 'mevp',
      name: 'Middle East Venture Partners (MEVP)',
      type: 'vc',
      stage: ['Seed', 'Series A', 'Series B'],
      checkSize: '$500K - $8M',
      focus: ['Fintech', 'E-commerce', 'SaaS', 'Healthcare'],
      location: 'Dubai, UAE / Beirut',
      website: 'https://mevp.com',
      portfolio: ['Anghami', 'Fadel Partners', 'Lamsa', 'Shiphero'],
      contacts: [
        { name: 'Walid Hanna', title: 'Managing Partner', linkedin: 'walidhanna', email: 'walid@mevp.com' },
        { name: 'Rabih Khoury', title: 'Managing Partner', linkedin: 'rabihkhoury', email: 'rabih@mevp.com' }
      ],
      status: 'target',
      priority: 'medium',
      notes: 'One of oldest MENA VCs. Backed Anghami (first Arab tech SPAC). Consumer tech expertise.',
      alignment: 'MEVP backed Anghami - they understand consumer subscription/engagement models. Nuqta\'s daily rewards habit is similar engagement loop.',
      customEmail: `Subject: Nuqta - Daily Rewards Habit for UAE Consumers | MEVP

Hi Walid,

MEVP's Anghami investment shows you understand building daily consumer habits in MENA. I'm building the daily savings habit.

**Nuqta = Search-first rewards platform**
Users search "coffee near me" → see cashback offers → earn 5-10% back on purchases. 6x monthly transaction frequency (vs 2-3x competitors).

**Consumer Engagement:**
- Search intent = habit formation
- Daily use case (food, coffee, services)
- Gamified coins system

**Traction:** 32 merchants, launching March 1, 16.8x LTV:CAC.

Raising $400K pre-seed. Would value MEVP's consumer engagement expertise.

Best,
Rejaul`
    },
    {
      id: 'flat6labs-uae',
      name: 'Flat6Labs UAE',
      type: 'accelerator',
      stage: ['Pre-Seed', 'Seed'],
      checkSize: '$50K - $150K',
      focus: ['Tech', 'Fintech', 'Consumer', 'E-commerce'],
      location: 'Abu Dhabi, UAE',
      website: 'https://flat6labs.com',
      portfolio: ['500+ startups regionally', 'Instabug', 'Elmenus'],
      contacts: [
        { name: 'Ryaan Sharif', title: 'Managing Director UAE', linkedin: 'ryaansharif', email: 'ryaan@flat6labs.com' },
        { name: 'Ramez El-Serafy', title: 'CEO', linkedin: 'ramelserafy', email: 'ramez@flat6labs.com' }
      ],
      status: 'target',
      priority: 'medium',
      notes: 'Leading MENA accelerator. Good for early validation and network.',
      alignment: 'Flat6Labs provides structured support and corporate connections. Their Abu Dhabi program could help with government/enterprise merchant partnerships.',
      customEmail: `Subject: Nuqta for Flat6Labs Abu Dhabi Cycle

Hi Ryaan,

I'm building Nuqta - the rewards platform for UAE offline commerce. With 32 signed merchant LOIs and March 1 launch, we're looking for strategic accelerator support.

**Why Flat6Labs:**
- Abu Dhabi corporate connections for enterprise merchants
- Structured go-to-market support
- Regional expansion expertise

**What We Bring:**
- Validated merchant demand (32 LOIs)
- Clear unit economics (16.8x LTV:CAC)
- Ready to launch MVP

Is Nuqta a fit for your upcoming cycle? Happy to share our deck.

Best,
Rejaul`
    },
    {
      id: 'hub71',
      name: 'Hub71',
      type: 'government',
      stage: ['Seed', 'Series A'],
      checkSize: 'Incentives + $100K-500K',
      focus: ['Tech', 'Fintech', 'AI', 'Climate'],
      location: 'Abu Dhabi, UAE',
      website: 'https://hub71.com',
      portfolio: ['500+ startups', 'Various tech companies'],
      contacts: [
        { name: 'Ahmad Ali Alwan', title: 'CEO', linkedin: 'ahmadalialwan', email: 'info@hub71.com' },
        { name: 'Arameh Haghighi', title: 'Head of Programs', linkedin: 'aramehhaghighi', email: 'programs@hub71.com' }
      ],
      status: 'target',
      priority: 'medium',
      notes: 'Government-backed Abu Dhabi tech ecosystem. Offers housing, cloud credits, and funding.',
      alignment: 'Hub71 provides operational support + Abu Dhabi market access. Could help with ADNOC, Mubadala merchant partnerships.',
      customEmail: `Subject: Nuqta Application - Fintech/Consumer Tech

Hi Hub71 Team,

I'm applying with Nuqta - a rewards platform for UAE offline commerce.

**Quick Stats:**
- 32 signed merchant LOIs
- Launching March 1, 2026
- $45B GCC target market

**Hub71 Value:**
- Abu Dhabi expansion (we're starting Dubai)
- Enterprise merchant connections
- Operational support during scale

**What We Need:**
- Incentive package for Abu Dhabi setup
- Introductions to Abu Dhabi F&B/retail groups
- Cloud credits for infrastructure

Happy to share full application materials.

Best,
Rejaul Karim
Founder, Nuqta`
    },

    // ============================================
    // TIER 2: REGIONAL MENA VCs
    // ============================================
    {
      id: 'venture-souq',
      name: 'VentureSouq',
      type: 'vc',
      stage: ['Seed', 'Series A'],
      checkSize: '$250K - $2M',
      focus: ['Fintech', 'E-commerce', 'SaaS'],
      location: 'Dubai, UAE',
      website: 'https://venturesouq.com',
      portfolio: ['Sarwa', 'Baraka', 'NymCard', 'Ziina'],
      contacts: [
        { name: 'Sonia Weymuller', title: 'Co-Founder & Managing Partner', linkedin: 'soniaweymuller', email: 'sonia@venturesouq.com' },
        { name: 'Suneel Gokhale', title: 'Co-Founder & Managing Partner', linkedin: 'suneelgokhale', email: 'suneel@venturesouq.com' }
      ],
      status: 'target',
      priority: 'high',
      notes: 'Strong fintech focus. Backed Sarwa, Baraka, NymCard. Very active in UAE.',
      alignment: 'VentureSouq\'s fintech portfolio (Sarwa, Baraka) targets same young UAE professional. Nuqta adds rewards to their users\' daily spending.',
      customEmail: `Subject: Nuqta - Rewards Layer for UAE Fintech Users | VentureSouq

Hi Sonia,

VentureSouq's fintech portfolio (Sarwa, Baraka, Ziina) targets the UAE young professional saving/investing. I'm building what they do with their daily spending.

**Nuqta = 5-10% cashback on offline purchases**
Your Sarwa users save for the future. Nuqta helps them save on today's coffee, lunch, haircuts.

**Synergy:**
- Sarwa/Baraka users are our target demographic
- Ziina payments could integrate Nuqta coins
- Same "smart money" positioning

**Traction:** 32 merchants, March 1 launch, 16.8x LTV:CAC.

Raising $400K. Would love to discuss portfolio synergies.

Best,
Rejaul`
    },
    {
      id: 'plus-vc',
      name: 'Plus VC (Oman Tech Fund)',
      type: 'vc',
      stage: ['Seed', 'Series A'],
      checkSize: '$500K - $3M',
      focus: ['Tech', 'Fintech', 'E-commerce'],
      location: 'Muscat, Oman',
      website: 'https://plusvc.com',
      portfolio: ['Regional startups'],
      contacts: [
        { name: 'Jamil Al Lawati', title: 'Managing Partner', linkedin: 'jamilallawati', email: 'jamil@plusvc.com' }
      ],
      status: 'target',
      priority: 'medium',
      notes: 'Oman sovereign tech fund. Good for GCC expansion.',
      alignment: 'Plus VC can help Nuqta expand to Oman market. Same merchant categories (cafes, salons) exist across GCC.',
      customEmail: `Subject: Nuqta - UAE Launch → Oman Expansion | Plus VC

Hi Jamil,

I'm building Nuqta - rewards platform for offline commerce. Launching UAE March 1, with GCC expansion planned for 2027.

**Oman Opportunity:**
- Same merchant categories (cafes, salons, retail)
- Similar consumer behavior to UAE
- Plus VC's local expertise = faster Oman entry

**Current Traction:** 32 UAE merchants, 16.8x LTV:CAC.

Would love to discuss how Plus VC could support our GCC expansion thesis.

Best,
Rejaul`
    },
    {
      id: 'sawari-ventures',
      name: 'Sawari Ventures',
      type: 'vc',
      stage: ['Seed', 'Series A', 'Series B'],
      checkSize: '$500K - $5M',
      focus: ['Tech', 'Fintech', 'Education', 'Healthcare'],
      location: 'Cairo, Egypt / Dubai',
      website: 'https://sawariventures.com',
      portfolio: ['Swvl', 'Instabug', 'Elmenus', 'Paymob'],
      contacts: [
        { name: 'Ahmed El Alfi', title: 'Chairman', linkedin: 'ahmadelalfi', email: 'ahmed@sawariventures.com' },
        { name: 'Hany Al-Sonbaty', title: 'Managing Partner', linkedin: 'hanyalsonbaty', email: 'hany@sawariventures.com' }
      ],
      status: 'target',
      priority: 'medium',
      notes: 'Pioneer MENA VC. Backed Swvl, Paymob. Strong fintech thesis.',
      alignment: 'Sawari backed Paymob (payments) and Elmenus (F&B discovery). Nuqta combines both - discovery with payments/rewards.',
      customEmail: `Subject: Nuqta - Discovery + Rewards (Elmenus meets Paymob) | Sawari

Hi Hany,

Sawari's Elmenus and Paymob investments show you understand F&B discovery and payments. Nuqta combines both.

**Nuqta = Search for businesses + Earn cashback**
Think Elmenus discovery with Paymob-style merchant monetization, plus consumer rewards.

**UAE Focus First:**
- 32 merchants signed
- March 1 launch
- GCC expansion planned

Would value Sawari's MENA scaling expertise.

Best,
Rejaul`
    },
    {
      id: 'algebra-ventures',
      name: 'Algebra Ventures',
      type: 'vc',
      stage: ['Seed', 'Series A'],
      checkSize: '$500K - $3M',
      focus: ['Tech', 'Fintech', 'Consumer', 'B2B'],
      location: 'Cairo, Egypt',
      website: 'https://algebraventures.com',
      portfolio: ['Swvl', 'Paymob', 'Halan', 'MoneyFellows'],
      contacts: [
        { name: 'Karim Hussein', title: 'Managing Partner', linkedin: 'karimhussein', email: 'karim@algebraventures.com' },
        { name: 'Tarek Assaad', title: 'Managing Partner', linkedin: 'tarekassaad', email: 'tarek@algebraventures.com' }
      ],
      status: 'target',
      priority: 'medium',
      notes: 'Strong fintech focus. MoneyFellows shows interest in savings/rewards.',
      alignment: 'Algebra backed MoneyFellows (social savings). Nuqta is individual savings through cashback - complementary thesis.',
      customEmail: `Subject: Nuqta - Individual Savings via Cashback | Algebra Ventures

Hi Karim,

Algebra's MoneyFellows investment shows you believe in helping MENA consumers save. Nuqta does it through instant cashback.

**MoneyFellows = Save together**
**Nuqta = Save on every purchase**

Both serve the "smart saver" consumer. 32 UAE merchants signed, launching March 1.

Would love to discuss the savings/rewards thesis.

Best,
Rejaul`
    },

    // ============================================
    // TIER 3: ANGEL INVESTORS & NETWORKS
    // ============================================
    {
      id: 'dubai-angel-investors',
      name: 'Dubai Angel Investors (DAI)',
      type: 'angel',
      stage: ['Pre-Seed', 'Seed'],
      checkSize: '$25K - $250K',
      focus: ['Tech', 'Consumer', 'Fintech', 'E-commerce'],
      location: 'Dubai, UAE',
      website: 'https://dubaiangelinvestors.com',
      portfolio: ['50+ UAE startups'],
      contacts: [
        { name: 'DAI Network', title: 'Angel Network', email: 'info@dubaiangelinvestors.com' },
        { name: 'Various Members', title: 'Individual Angels', linkedin: '' }
      ],
      status: 'target',
      priority: 'high',
      notes: 'Active UAE angel network. Good for initial syndicate.',
      alignment: 'DAI members are often successful entrepreneurs who understand consumer behavior. Individual angels can also open merchant doors.',
      customEmail: `Subject: Nuqta Pitch - UAE Rewards Platform | DAI Network

Dear DAI Network,

I'm seeking angel investment for Nuqta - the rewards platform for UAE offline commerce.

**Opportunity:** $45B GCC market, no unified loyalty solution
**Traction:** 32 signed merchant LOIs, launching March 1
**Ask:** Part of $400K round, $25K-100K checks welcome

**Why Angels:**
- Local market expertise
- Merchant introductions
- Quick decision-making

Happy to present at your next pitch event or meet individually.

Best,
Rejaul Karim
Founder, Nuqta`
    },
    {
      id: 'mena-angels',
      name: 'MENA Angels',
      type: 'angel',
      stage: ['Pre-Seed', 'Seed'],
      checkSize: '$50K - $500K',
      focus: ['Tech', 'E-commerce', 'Fintech'],
      location: 'UAE/Regional',
      website: 'https://menaangels.com',
      portfolio: ['Regional startups'],
      contacts: [
        { name: 'MENA Angels Network', title: 'Angel Network', email: 'contact@menaangels.com' }
      ],
      status: 'target',
      priority: 'medium',
      notes: 'Regional angel network with strong UAE presence.',
      alignment: 'MENA Angels provide regional perspective and cross-border merchant connections.',
      customEmail: `Subject: Nuqta - GCC Rewards Platform | MENA Angels

Hi MENA Angels team,

Building Nuqta - rewards platform starting UAE, expanding GCC. Looking for angels with regional merchant connections.

**UAE Launch:** March 1, 2026
**Traction:** 32 merchants, 16.8x LTV:CAC
**GCC Vision:** Qatar, KSA by 2027

Seeking $400K, angel checks of $50K-200K.

Interested in presenting to your network.

Best,
Rejaul`
    },
    {
      id: 'hisham-al-gurg',
      name: 'Hisham Al Gurg (Individual Angel)',
      type: 'angel',
      stage: ['Pre-Seed', 'Seed'],
      checkSize: '$50K - $500K',
      focus: ['Tech', 'Consumer', 'Retail'],
      location: 'Dubai, UAE',
      website: 'N/A',
      portfolio: ['Personal investments'],
      contacts: [
        { name: 'Hisham Al Gurg', title: 'CEO, Seed Group', linkedin: 'hishamalgurg', twitter: 'haborz' }
      ],
      status: 'target',
      priority: 'high',
      notes: 'CEO of Seed Group (brings global brands to UAE). Deep retail connections.',
      alignment: 'Hisham brings international brands to UAE. Could connect Nuqta with retail chains looking for loyalty solutions.',
      customEmail: `Subject: Nuqta - Loyalty Solution for UAE Retail | Angel Investment

Hi Hisham,

Given Seed Group's work bringing global retail to UAE, I wanted to share Nuqta - we're building the loyalty infrastructure these brands need.

**The Gap:** International brands entering UAE lack local loyalty programs. Nuqta provides plug-and-play rewards.

**Traction:** 32 local merchants signed, launching March 1.

**Your Value:** Introductions to Seed Group's retail portfolio could accelerate our enterprise tier.

Would love 20 minutes to discuss.

Best,
Rejaul`
    },
    {
      id: 'fadi-ghandour-angel',
      name: 'Fadi Ghandour (Individual Angel)',
      type: 'angel',
      stage: ['Seed', 'Series A'],
      checkSize: '$100K - $1M',
      focus: ['Tech', 'Logistics', 'Consumer'],
      location: 'Dubai, UAE',
      website: 'N/A',
      portfolio: ['Aramex founder', 'Wamda investments'],
      contacts: [
        { name: 'Fadi Ghandour', title: 'Founder, Aramex', linkedin: 'fadighandour', twitter: 'faaborz' }
      ],
      status: 'target',
      priority: 'high',
      notes: 'Aramex founder. Pioneer entrepreneur. Active angel investor.',
      alignment: 'Fadi understands building regional platforms. Aramex\'s merchant network could be Nuqta partners.',
      customEmail: `Subject: Nuqta - Building the Aramex of Loyalty | Angel Investment

Hi Fadi,

You built Aramex into a regional logistics champion. I'm building the regional loyalty champion.

**Nuqta = Unified rewards across GCC merchants**
Just as Aramex connected regional logistics, Nuqta connects regional loyalty.

**Traction:** 32 UAE merchants, expanding GCC.

**Your Insight:** Would value your perspective on regional scaling. Also, Aramex's SMB merchants could benefit from Nuqta loyalty.

20 minutes to discuss?

Best,
Rejaul`
    },

    // ============================================
    // TIER 4: FAMILY OFFICES
    // ============================================
    {
      id: 'al-futtaim-group',
      name: 'Al-Futtaim Group',
      type: 'family-office',
      stage: ['Series A', 'Series B'],
      checkSize: '$5M - $50M',
      focus: ['Retail Tech', 'Fintech', 'E-commerce', 'Mobility'],
      location: 'Dubai, UAE',
      website: 'https://alfuttaim.com',
      portfolio: ['Strategic investments', 'Retailo', 'Various'],
      contacts: [
        { name: 'Al-Futtaim Investment Team', title: 'Corporate Development', email: 'investments@alfuttaim.com' },
        { name: 'Omar Al Futtaim', title: 'Vice Chairman', linkedin: 'omaralfuttaim' }
      ],
      status: 'target',
      priority: 'high',
      notes: 'Major UAE conglomerate. Owns IKEA, Toyota UAE, ACE Hardware. Massive retail footprint.',
      alignment: 'Al-Futtaim owns 200+ retail stores in UAE. Nuqta could power their cross-brand loyalty program, replacing fragmented individual programs.',
      customEmail: `Subject: Nuqta - Unified Loyalty for Al-Futtaim Retail Portfolio

Dear Al-Futtaim Investment Team,

Al-Futtaim's 200+ retail outlets (IKEA, ACE, Toyota) each run separate loyalty programs. I'm proposing a unified solution.

**Nuqta = Cross-brand rewards platform**
Customers earn coins at any Al-Futtaim property, redeem anywhere. Drives cross-shopping within your portfolio.

**Pilot Proposal:**
- Start with 5 Al-Futtaim brands
- Integrate with existing POS
- Measure cross-brand purchase lift

Currently raising $400K. Open to strategic investment + pilot partnership.

Best,
Rejaul Karim
Founder, Nuqta`
    },
    {
      id: 'majid-al-futtaim',
      name: 'Majid Al Futtaim Ventures',
      type: 'corporate',
      stage: ['Seed', 'Series A', 'Series B'],
      checkSize: '$1M - $15M',
      focus: ['Retail Tech', 'Fintech', 'Consumer Tech', 'Proptech'],
      location: 'Dubai, UAE',
      website: 'https://majidalfuttaim.com',
      portfolio: ['Retailo', 'Beam', 'Various retail tech'],
      contacts: [
        { name: 'MAF Ventures Team', title: 'Investment Team', email: 'ventures@maf.ae' },
        { name: 'Joe Abi Akar', title: 'Chief Corporate Development Officer', linkedin: 'joeabiakar' }
      ],
      status: 'target',
      priority: 'high',
      notes: 'Owns Mall of the Emirates, Carrefour MENA, City Centre. Runs SHARE loyalty.',
      alignment: 'MAF runs SHARE loyalty program but it\'s limited to MAF properties. Nuqta could be the "open SHARE" - rewards across ALL merchants, with MAF as anchor partner.',
      customEmail: `Subject: Nuqta + SHARE = Open Loyalty Ecosystem | MAF Ventures

Dear MAF Ventures Team,

SHARE is a great loyalty program - but limited to MAF properties. What if customers could earn SHARE-like rewards everywhere?

**Nuqta = Open rewards network**
We're building what SHARE could become - cross-merchant loyalty. MAF could be our anchor partner, with customers earning at independents and redeeming at Carrefour/Mall of Emirates.

**Strategic Value:**
- Drives traffic to MAF properties
- Captures data on off-property spending
- Extends SHARE's reach without diluting brand

Currently raising $400K. Open to strategic investment + partnership discussion.

Best,
Rejaul`
    },
    {
      id: 'al-ghurair-investment',
      name: 'Al Ghurair Investment',
      type: 'family-office',
      stage: ['Series A', 'Series B'],
      checkSize: '$5M - $30M',
      focus: ['Retail', 'F&B', 'Consumer', 'Real Estate'],
      location: 'Dubai, UAE',
      website: 'https://alghurair.com',
      portfolio: ['Al Ghurair Centre', 'Various F&B brands'],
      contacts: [
        { name: 'Al Ghurair Investment Team', title: 'Investment', email: 'invest@alghurair.com' },
        { name: 'Majid Saif Al Ghurair', title: 'CEO', linkedin: 'majidghurair' }
      ],
      status: 'target',
      priority: 'medium',
      notes: 'Owns Al Ghurair Centre (major mall), flour milling, various F&B.',
      alignment: 'Al Ghurair Centre mall tenants could be Nuqta merchants. Cross-mall loyalty drives foot traffic.',
      customEmail: `Subject: Nuqta - Loyalty Program for Al Ghurair Centre Tenants

Dear Al Ghurair Investment Team,

Al Ghurair Centre has 100+ retail tenants. Currently, each runs separate loyalty (or none). I'm proposing unified mall rewards.

**Nuqta = Cross-tenant loyalty**
Shoppers earn coins at any Al Ghurair tenant, driving cross-shopping and repeat visits.

**Pilot:** Start with 10 tenants, measure foot traffic lift.

Raising $400K. Open to strategic partnership.

Best,
Rejaul`
    },
    {
      id: 'chalhoub-group',
      name: 'Chalhoub Group',
      type: 'family-office',
      stage: ['Seed', 'Series A', 'Series B'],
      checkSize: '$1M - $20M',
      focus: ['Retail Tech', 'Luxury', 'E-commerce', 'Consumer'],
      location: 'Dubai, UAE',
      website: 'https://chalhoubgroup.com',
      portfolio: ['Level Shoes', 'Faces', 'Tanagra', 'Luxury brands'],
      contacts: [
        { name: 'Chalhoub Ventures', title: 'Investment Team', email: 'ventures@chalhoub.com' },
        { name: 'Patrick Chalhoub', title: 'Co-CEO', linkedin: 'patrickchalhoub' },
        { name: 'Anthony Chalhoub', title: 'Co-CEO', linkedin: 'anthonychalhoub' }
      ],
      status: 'target',
      priority: 'medium',
      notes: 'Largest luxury retailer in Middle East. Operates 650+ stores.',
      alignment: 'Chalhoub operates 650+ stores across luxury brands. Premium loyalty tier could target their high-value customers.',
      customEmail: `Subject: Nuqta Premium - Loyalty for Chalhoub's Luxury Customers

Dear Chalhoub Ventures,

Chalhoub's 650+ luxury stores serve UAE's highest-value consumers. They expect premium rewards.

**Nuqta Premium = Luxury-tier rewards**
- Higher cashback rates (10-15%)
- VIP experiences
- Exclusive merchant access

**Strategic Value:**
- Data on luxury consumer behavior
- Cross-brand shopping insights
- Retention in competitive market

Currently raising $400K. Open to discussing premium tier partnership.

Best,
Rejaul`
    },

    // ============================================
    // TIER 5: CORPORATE VCs & STRATEGIC INVESTORS
    // ============================================
    {
      id: 'adq',
      name: 'ADQ',
      type: 'government',
      stage: ['Series A', 'Series B', 'Growth'],
      checkSize: '$10M - $500M',
      focus: ['Tech', 'Healthcare', 'F&B', 'Consumer'],
      location: 'Abu Dhabi, UAE',
      website: 'https://adq.ae',
      portfolio: ['ADNOC Distribution', 'Etisalat', 'Various'],
      contacts: [
        { name: 'ADQ Investment Team', title: 'Investment', email: 'investments@adq.ae' }
      ],
      status: 'target',
      priority: 'low',
      notes: 'Abu Dhabi sovereign wealth fund. Very large checks, usually Series B+.',
      alignment: 'ADQ owns ADNOC petrol stations (500+), which could be Nuqta merchants. Future strategic investor.',
      customEmail: `Subject: Nuqta - Consumer Loyalty Platform for ADQ Portfolio

Dear ADQ Investment Team,

Introducing Nuqta for future consideration. We're building rewards infrastructure for UAE retail.

**ADQ Portfolio Fit:**
- ADNOC Distribution: 500+ petrol stations could offer Nuqta loyalty
- Etisalat: Telecom rewards integration

Currently pre-seed, but flagging for Series A/B consideration. Happy to share progress updates.

Best,
Rejaul`
    },
    {
      id: 'emirates-nbd-ventures',
      name: 'Emirates NBD Ventures',
      type: 'corporate',
      stage: ['Seed', 'Series A'],
      checkSize: '$1M - $10M',
      focus: ['Fintech', 'Payments', 'Banking Tech'],
      location: 'Dubai, UAE',
      website: 'https://emiratesnbd.com',
      portfolio: ['Fintech startups'],
      contacts: [
        { name: 'ENBD Ventures Team', title: 'Venture Team', email: 'ventures@emiratesnbd.com' }
      ],
      status: 'target',
      priority: 'high',
      notes: 'Largest UAE bank. Has fintech investment arm.',
      alignment: 'ENBD credit card customers could earn Nuqta coins as additional rewards. Banking API integration for redemptions.',
      customEmail: `Subject: Nuqta - Rewards Layer for ENBD Cards

Dear ENBD Ventures Team,

ENBD credit cards offer 1-2% cashback. Nuqta offers 5-10% at partner merchants. Together = unbeatable value.

**Integration Concept:**
- ENBD cardholders auto-enrolled in Nuqta
- Bonus coins for using ENBD cards at Nuqta merchants
- Redemption via ENBD banking app

**Win-Win:**
- ENBD: Card differentiation
- Nuqta: Distribution through ENBD's 4M+ customers

Currently raising $400K. Open to strategic partnership discussion.

Best,
Rejaul`
    },
    {
      id: 'mashreq-neo',
      name: 'Mashreq NeoBiz',
      type: 'corporate',
      stage: ['Seed', 'Series A'],
      checkSize: '$500K - $5M',
      focus: ['Fintech', 'SMB Tech', 'Payments'],
      location: 'Dubai, UAE',
      website: 'https://mashreq.com',
      portfolio: ['Fintech investments'],
      contacts: [
        { name: 'Mashreq Innovation Team', title: 'Innovation', email: 'innovation@mashreq.com' }
      ],
      status: 'target',
      priority: 'medium',
      notes: 'Mashreq has Neo digital banking and SMB focus.',
      alignment: 'Mashreq\'s SMB banking clients are our target merchants. Partnership could bundle Nuqta with business accounts.',
      customEmail: `Subject: Nuqta + Mashreq NeoBiz = SMB Growth Package

Dear Mashreq Innovation Team,

Mashreq's SMB clients need customers. Nuqta delivers them.

**Bundle Concept:**
- Mashreq SMB account includes Nuqta merchant listing
- Nuqta users discover and spend at Mashreq clients
- Mashreq captures more transaction volume

Currently raising $400K. Open to strategic discussion.

Best,
Rejaul`
    },
    {
      id: 'etisalat-digital',
      name: 'e& enterprise (Etisalat)',
      type: 'corporate',
      stage: ['Series A', 'Series B'],
      checkSize: '$5M - $50M',
      focus: ['Tech', 'Fintech', 'Digital Services'],
      location: 'Abu Dhabi, UAE',
      website: 'https://eand.com',
      portfolio: ['Various digital investments'],
      contacts: [
        { name: 'e& Ventures Team', title: 'Investment', email: 'ventures@etisalat.ae' }
      ],
      status: 'target',
      priority: 'medium',
      notes: 'UAE telecom giant. Has digital services arm.',
      alignment: 'Etisalat Smiles rewards program competes but is telco-focused. Nuqta could white-label or partner.',
      customEmail: `Subject: Nuqta - Merchant Rewards to Complement Smiles

Dear e& Ventures Team,

Etisalat Smiles is great for telco rewards. Nuqta extends rewards to everyday merchants.

**Partnership Concept:**
- Smiles users earn Nuqta coins at partner merchants
- Unified rewards experience
- e& captures offline commerce data

Currently raising $400K. Series A partnership discussion welcome.

Best,
Rejaul`
    },

    // ============================================
    // TIER 6: INTERNATIONAL VCs WITH MENA PRESENCE
    // ============================================
    {
      id: '500-global',
      name: '500 Global (formerly 500 Startups)',
      type: 'vc',
      stage: ['Pre-Seed', 'Seed'],
      checkSize: '$150K - $500K',
      focus: ['Tech', 'Fintech', 'Consumer', 'B2B'],
      location: 'Global / MENA',
      website: 'https://500.co',
      portfolio: ['Careem', 'JadoPado', 'Fetchr', 'Various'],
      contacts: [
        { name: 'Sharif El-Badawi', title: 'Partner, MENA', linkedin: 'sharifelbadawi', email: 'sharif@500.co' },
        { name: '500 MENA Team', title: 'Investment Team', email: 'mena@500.co' }
      ],
      status: 'target',
      priority: 'medium',
      notes: 'Global accelerator/VC with strong MENA presence. Early Careem investor.',
      alignment: '500 Global\'s brand adds credibility. Their portfolio network provides warm intros to other investors.',
      customEmail: `Subject: Nuqta - UAE Rewards Platform | 500 Global MENA

Hi Sharif,

500 was early in Careem - another consumer platform that changed UAE behavior. Nuqta is doing the same for rewards.

**The Thesis:**
- UAE has no unified offline rewards (like Rakuten/Honey for local services)
- We're building it: Search, Save, Earn

**Traction:** 32 merchants, March 1 launch, 16.8x LTV:CAC.

Would love to be part of the 500 MENA portfolio.

Best,
Rejaul`
    },
    {
      id: 'y-combinator',
      name: 'Y Combinator',
      type: 'accelerator',
      stage: ['Pre-Seed', 'Seed'],
      checkSize: '$500K (SAFE)',
      focus: ['Tech', 'All Sectors'],
      location: 'San Francisco / Global',
      website: 'https://ycombinator.com',
      portfolio: ['Stripe', 'Airbnb', 'DoorDash', 'Rappi'],
      contacts: [
        { name: 'YC Applications', title: 'Applications Team', email: 'apply@ycombinator.com' }
      ],
      status: 'target',
      priority: 'medium',
      notes: 'Top global accelerator. MENA companies have been accepted.',
      alignment: 'YC provides best-in-class network and credibility. Rappi (LatAm super-app) in portfolio shows interest in regional commerce platforms.',
      customEmail: `Subject: YC Application - Nuqta (Rakuten for GCC)

Dear YC Team,

Applying with Nuqta - the rewards platform for GCC offline commerce.

**One-Liner:** Search for local businesses, earn 5-10% cashback.

**Why YC:**
- Global best practices for marketplace growth
- Network for GCC expansion
- Credibility for enterprise merchants

**Traction:** 32 merchants, launching March 1, $45B TAM.

Full application submitted via portal.

Best,
Rejaul`
    },
    {
      id: 'plug-play-mena',
      name: 'Plug and Play MENA',
      type: 'accelerator',
      stage: ['Pre-Seed', 'Seed'],
      checkSize: '$50K - $250K',
      focus: ['Fintech', 'Retail Tech', 'Mobility', 'Smart Cities'],
      location: 'Abu Dhabi, UAE',
      website: 'https://plugandplaytechcenter.com/mena',
      portfolio: ['Various MENA startups'],
      contacts: [
        { name: 'Plug and Play MENA Team', title: 'Programs', email: 'mena@pnptc.com' },
        { name: 'Saeed Al Dhaheri', title: 'Managing Director MENA', linkedin: 'saeeddhaheri' }
      ],
      status: 'target',
      priority: 'medium',
      notes: 'Corporate accelerator with strong retail/fintech vertical.',
      alignment: 'Plug and Play\'s corporate partners include major retailers who could be Nuqta merchants.',
      customEmail: `Subject: Nuqta for Plug and Play Retail/Fintech Batch

Hi Plug and Play MENA Team,

Applying for your Retail Tech vertical with Nuqta - rewards platform for offline commerce.

**Corporate Partner Fit:**
- Your retail partners need loyalty solutions
- We provide turnkey rewards infrastructure
- Pilot opportunities with your network

**Traction:** 32 merchants, March 1 launch.

Interested in upcoming batch + corporate intros.

Best,
Rejaul`
    },
    {
      id: 'techstars-mena',
      name: 'Techstars',
      type: 'accelerator',
      stage: ['Pre-Seed', 'Seed'],
      checkSize: '$120K',
      focus: ['Tech', 'All Sectors'],
      location: 'Global',
      website: 'https://techstars.com',
      portfolio: ['Sendgrid', 'ClassPass', 'Various'],
      contacts: [
        { name: 'Techstars Applications', title: 'Applications', email: 'apply@techstars.com' }
      ],
      status: 'target',
      priority: 'low',
      notes: 'Global accelerator. Has run MENA programs.',
      alignment: 'Techstars network and mentorship valuable for scaling.',
      customEmail: `Subject: Techstars Application - Nuqta (GCC Rewards Platform)

Dear Techstars Team,

Applying with Nuqta for consideration in relevant programs.

**Quick Stats:**
- GCC rewards platform
- 32 merchants, March 1 launch
- $45B market

Will submit full application via portal.

Best,
Rejaul`
    },
    {
      id: 'svb-capital',
      name: 'Silicon Valley Bank / SVB Capital',
      type: 'vc',
      stage: ['Seed', 'Series A'],
      checkSize: '$500K - $5M',
      focus: ['Tech', 'Fintech', 'SaaS'],
      location: 'US / Global',
      website: 'https://svb.com',
      portfolio: ['Various tech companies'],
      contacts: [
        { name: 'SVB VC Relations', title: 'VC Relations', email: 'vcrelations@svb.com' }
      ],
      status: 'target',
      priority: 'low',
      notes: 'Tech-focused bank with VC arm. Good for future banking relationship.',
      alignment: 'SVB relationship valuable for US banking as Nuqta grows.',
      customEmail: `Subject: Nuqta - GCC Fintech Introduction

Dear SVB Team,

Introducing Nuqta - rewards platform for GCC commerce. Currently raising pre-seed, planning US expansion by 2028.

Would appreciate being on your radar for future banking relationship and potential Series A participation.

Best,
Rejaul`
    },

    // ============================================
    // TIER 7: ADDITIONAL STRATEGIC ANGELS
    // ============================================
    {
      id: 'mudassir-sheikha',
      name: 'Mudassir Sheikha (Careem Founder)',
      type: 'angel',
      stage: ['Seed', 'Series A'],
      checkSize: '$100K - $1M',
      focus: ['Consumer Tech', 'Mobility', 'Fintech'],
      location: 'Dubai, UAE',
      website: 'N/A',
      portfolio: ['Careem founder', 'Active angel'],
      contacts: [
        { name: 'Mudassir Sheikha', title: 'Founder, Careem', linkedin: 'mudassir', twitter: 'mudassirz' }
      ],
      status: 'target',
      priority: 'high',
      notes: 'Careem co-founder. Sold to Uber for $3.1B. Very active angel investor.',
      alignment: 'Mudassir built UAE\'s biggest consumer platform. His insights on consumer behavior and scaling would be invaluable.',
      customEmail: `Subject: Nuqta - Building the Rewards Layer You Missed at Careem

Hi Mudassir,

You built Careem into a regional super-app. The one feature that was always tricky: loyalty across merchants. That's what I'm building.

**Nuqta = Cross-merchant rewards**
Users earn at any partner merchant, not just one brand. The network effect Careem had with drivers, but for loyalty.

**Why Your Input Matters:**
- You understand UAE consumer behavior
- Careem's merchant network could have used this
- Your brand opens doors

Currently raising $400K. Would value 30 minutes of your perspective.

Best,
Rejaul`
    },
    {
      id: 'magnus-olsson',
      name: 'Magnus Olsson (Careem Co-Founder)',
      type: 'angel',
      stage: ['Seed', 'Series A'],
      checkSize: '$100K - $500K',
      focus: ['Consumer Tech', 'Fintech'],
      location: 'Dubai, UAE',
      website: 'N/A',
      portfolio: ['Careem co-founder', 'Active angel'],
      contacts: [
        { name: 'Magnus Olsson', title: 'Co-Founder, Careem', linkedin: 'magnusolsson', twitter: 'magnuscareem' }
      ],
      status: 'target',
      priority: 'high',
      notes: 'Careem co-founder (operations). Now active angel investor.',
      alignment: 'Magnus scaled Careem operations. His expertise in UAE market operations would accelerate Nuqta\'s merchant onboarding.',
      customEmail: `Subject: Nuqta - Need Careem-Style Ops Expertise | Angel Investment

Hi Magnus,

You scaled Careem's UAE operations from 0 to millions of rides. I need similar ops expertise for Nuqta's merchant network.

**The Challenge:** Onboard 500+ merchants in Year 1
**Careem Parallel:** Driver onboarding at scale

Would your operational experience + angel check help us crack this?

Currently raising $400K.

Best,
Rejaul`
    },
    {
      id: 'ronaldo-mouchawar',
      name: 'Ronaldo Mouchawar (Souq/Amazon Founder)',
      type: 'angel',
      stage: ['Seed', 'Series A'],
      checkSize: '$200K - $2M',
      focus: ['E-commerce', 'Consumer Tech', 'Retail Tech'],
      location: 'Dubai, UAE',
      website: 'N/A',
      portfolio: ['Souq founder (sold to Amazon)', 'Active angel'],
      contacts: [
        { name: 'Ronaldo Mouchawar', title: 'Founder, Souq.com', linkedin: 'ronaldomouchawar' }
      ],
      status: 'target',
      priority: 'high',
      notes: 'Founded Souq.com, sold to Amazon for $580M. Understands UAE e-commerce deeply.',
      alignment: 'Ronaldo built UAE\'s e-commerce champion. Nuqta is the offline commerce equivalent. His merchant relationships would be gold.',
      customEmail: `Subject: Nuqta - The "Souq" for Offline Rewards | Angel Investment

Hi Ronaldo,

You built Souq into the online shopping champion. I'm building the offline rewards champion.

**Souq = Best place to buy online**
**Nuqta = Best place to save offline**

Same thesis: aggregate fragmented market, provide superior experience.

**Your Value:**
- UAE merchant relationships
- E-commerce mindset for offline
- Brand credibility

Currently raising $400K. Would love your perspective.

Best,
Rejaul`
    },
    {
      id: 'sami-ahmed',
      name: 'Sami Ahmed (The Entertainer Exec)',
      type: 'angel',
      stage: ['Pre-Seed', 'Seed'],
      checkSize: '$25K - $100K',
      focus: ['Consumer', 'Loyalty', 'F&B'],
      location: 'Dubai, UAE',
      website: 'N/A',
      portfolio: ['The Entertainer background'],
      contacts: [
        { name: 'Former Entertainer Executives', title: 'Various', linkedin: '' }
      ],
      status: 'target',
      priority: 'medium',
      notes: 'Former Entertainer executives understand UAE loyalty market.',
      alignment: 'Entertainer proved UAE loyalty market ($100M+ exit). Former execs understand what worked and what didn\'t.',
      customEmail: `Subject: Nuqta - Learning from Entertainer's Success

Hi,

I'm building Nuqta - next-generation UAE rewards platform. Given your Entertainer experience, would value your insights.

**Entertainer Gaps We're Solving:**
- Subscription friction → Free platform
- Coupon redemption → Instant cashback
- Limited merchants → Open network

Would love 20 minutes to learn from your experience.

Best,
Rejaul`
    },

    // ============================================
    // TIER 8: SAUDI/GCC EXPANSION INVESTORS
    // ============================================
    {
      id: 'stv',
      name: 'STV (Saudi Technology Ventures)',
      type: 'vc',
      stage: ['Seed', 'Series A', 'Series B'],
      checkSize: '$1M - $20M',
      focus: ['Tech', 'Fintech', 'Consumer'],
      location: 'Riyadh, Saudi Arabia',
      website: 'https://stv.vc',
      portfolio: ['Foodics', 'Trukker', 'Careem', 'Various'],
      contacts: [
        { name: 'Abdulrahman Tarabzouni', title: 'CEO & Managing Partner', linkedin: 'tarabzouni', email: 'abdulrahman@stv.vc' },
        { name: 'Waleed Alballaa', title: 'Partner', linkedin: 'waleedalballaa', email: 'waleed@stv.vc' }
      ],
      status: 'target',
      priority: 'medium',
      notes: '$500M Saudi tech fund. Backed Foodics (F&B POS). Good for KSA expansion.',
      alignment: 'STV\'s Foodics investment shows interest in F&B merchant tech. Nuqta adds loyalty layer. Good for KSA Phase 2.',
      customEmail: `Subject: Nuqta - UAE → KSA Rewards Expansion | STV

Hi Abdulrahman,

STV's Foodics investment shows you understand F&B merchant needs. I'm building the loyalty layer.

**Nuqta = Rewards for Foodics merchants (and beyond)**
Users discover restaurants, earn cashback. Merchants pay only on sales.

**KSA Expansion:**
- UAE launch March 2026
- KSA entry planned 2027
- STV could accelerate KSA timeline

Currently raising $400K pre-seed. Would love to discuss KSA market thesis.

Best,
Rejaul`
    },
    {
      id: 'impact46',
      name: 'Impact46',
      type: 'vc',
      stage: ['Seed', 'Series A'],
      checkSize: '$500K - $5M',
      focus: ['Tech', 'Fintech', 'Healthcare'],
      location: 'Riyadh, Saudi Arabia',
      website: 'https://impact46.com',
      portfolio: ['Saudi startups', 'Regional expansion'],
      contacts: [
        { name: 'Abdullah Alshalahi', title: 'Managing Partner', linkedin: 'alshalahi', email: 'abdullah@impact46.com' }
      ],
      status: 'target',
      priority: 'medium',
      notes: 'Active Saudi VC. Good for KSA market entry.',
      alignment: 'Impact46 helps UAE startups enter Saudi market. Key for Nuqta Phase 2.',
      customEmail: `Subject: Nuqta KSA Expansion | Impact46

Hi Abdullah,

Building Nuqta - rewards platform launching UAE March 2026, targeting KSA by 2027.

**Impact46 Value:**
- KSA market entry expertise
- Local merchant introductions
- Regulatory navigation

Currently raising $400K pre-seed. Would value KSA expansion discussion.

Best,
Rejaul`
    },
    {
      id: 'qf-capital',
      name: 'Qatar Financial Centre (QFC)',
      type: 'government',
      stage: ['Seed', 'Series A'],
      checkSize: 'Incentives + Co-investment',
      focus: ['Fintech', 'Tech'],
      location: 'Doha, Qatar',
      website: 'https://qfc.qa',
      portfolio: ['Qatar-based startups'],
      contacts: [
        { name: 'QFC Authority', title: 'Investment Promotion', email: 'info@qfc.qa' }
      ],
      status: 'target',
      priority: 'low',
      notes: 'Qatar incentives for fintech. Good for Qatar expansion.',
      alignment: 'QFC provides Qatar market entry support. Relevant for Phase 2 GCC expansion.',
      customEmail: `Subject: Nuqta - Qatar Market Entry Inquiry

Dear QFC Team,

I'm building Nuqta - rewards platform launching UAE, with Qatar expansion planned for 2027.

**Qatar Interest:**
- Similar merchant categories
- QFC fintech incentives
- World Cup tourism legacy

Would appreciate information on fintech entry requirements.

Best,
Rejaul`
    },

    // ============================================
    // TIER 9: DIRECT COMPETITOR INVESTORS (Loyalty/Rewards)
    // ============================================
    {
      id: 'entertainer-investors',
      name: 'The Entertainer Investors (Abraaj, Various)',
      type: 'vc',
      stage: ['Series A', 'Series B', 'Growth'],
      checkSize: '$5M - $50M',
      focus: ['Consumer', 'Loyalty', 'Subscriptions'],
      location: 'Dubai, UAE',
      website: 'N/A',
      portfolio: ['The Entertainer ($100M+ exit)'],
      contacts: [
        { name: 'Donna Benton', title: 'Founder, The Entertainer', linkedin: 'donnabenton' },
        { name: 'Former Abraaj Partners', title: 'Now at various funds', linkedin: '' }
      ],
      status: 'target',
      priority: 'high',
      notes: 'Entertainer investors saw $100M+ exit in UAE loyalty. They understand the market and will recognize Nuqta as next-gen solution.',
      alignment: 'These investors already validated UAE loyalty market with Entertainer exit. Nuqta is the evolution: free (no subscription), instant (no coupons), cashback (not BOGO).',
      customEmail: `Subject: Nuqta - The Next Evolution of UAE Loyalty (Post-Entertainer)

Hi,

You backed The Entertainer and saw the UAE loyalty market validated with a $100M+ exit. I'm building what comes next.

**Entertainer Limitations Nuqta Solves:**
- Subscription friction → Free platform
- Coupon redemption complexity → Instant QR cashback
- Limited merchant network → Open platform anyone can join

**Why Now:**
- 32 merchants signed, launching March 1
- 16.8x LTV:CAC (sustainable unit economics)
- Same UAE market you know well

Would love to share how we're evolving the loyalty playbook you helped create.

Best,
Rejaul Karim
Founder, Nuqta`
    },
    {
      id: 'smiles-etisalat-investors',
      name: 'Etisalat (Smiles Parent)',
      type: 'corporate',
      stage: ['Series A', 'Series B'],
      checkSize: '$5M - $30M',
      focus: ['Loyalty', 'Telecom', 'Consumer'],
      location: 'Abu Dhabi, UAE',
      website: 'https://eand.com',
      portfolio: ['Smiles (rewards platform)'],
      contacts: [
        { name: 'e& Ventures', title: 'Corporate Ventures', email: 'ventures@etisalat.ae' },
        { name: 'Smiles Leadership', title: 'Via e& Enterprise', linkedin: '' }
      ],
      status: 'target',
      priority: 'medium',
      notes: 'Etisalat owns Smiles rewards. They understand loyalty but are telco-focused. Nuqta could partner or they could invest to expand beyond telco.',
      alignment: 'Smiles validates telecom companies want loyalty. Nuqta is merchant-agnostic loyalty that could white-label for Smiles or become acquisition target.',
      customEmail: `Subject: Nuqta - Merchant Loyalty Layer to Complement Smiles

Dear e& Ventures,

Smiles excels at telecom rewards. Nuqta extends that to everyday merchant transactions.

**Complementary Value:**
- Smiles users could earn Nuqta coins at 500+ merchants
- Cross-promotion: Smiles points ↔ Nuqta coins
- Data on off-telco spending behavior

**Our Traction:** 32 merchants, March 1 launch.

Open to strategic partnership or investment discussion.

Best,
Rejaul`
    },
    {
      id: 'fazaa-investors',
      name: 'Fazaa (Government of Dubai)',
      type: 'government',
      stage: ['Growth'],
      checkSize: 'Strategic Investment',
      focus: ['Loyalty', 'Government Services', 'Employee Benefits'],
      location: 'Dubai, UAE',
      website: 'https://fazaa.ae',
      portfolio: ['Fazaa card program'],
      contacts: [
        { name: 'Fazaa Management', title: 'Dubai Government', email: 'info@fazaa.ae' }
      ],
      status: 'target',
      priority: 'low',
      notes: 'Government employee discount program. Different model but same market. Could be partner or they could refer us.',
      alignment: 'Fazaa serves government employees only. Nuqta serves everyone. Partnership could extend Fazaa benefits to family members via Nuqta.',
      customEmail: `Subject: Nuqta - Extending Fazaa-Style Benefits to All UAE Residents

Dear Fazaa Team,

Fazaa provides excellent benefits to government employees. Nuqta aims to provide similar value to all UAE residents.

**Partnership Concept:**
- Fazaa members get premium Nuqta tier
- Nuqta merchants could join Fazaa network
- Shared infrastructure reduces costs

Interested in exploring synergies.

Best,
Rejaul`
    },
    {
      id: 'honey-paypal-investors',
      name: 'PayPal (Honey Acquirer) / Accel / Index',
      type: 'vc',
      stage: ['Seed', 'Series A', 'Series B'],
      checkSize: '$1M - $50M',
      focus: ['Fintech', 'Consumer', 'E-commerce'],
      location: 'Global',
      website: 'https://accel.com / https://indexventures.com',
      portfolio: ['Honey ($4B exit to PayPal)', 'Rakuten', 'Various'],
      contacts: [
        { name: 'Accel Partners', title: 'VC Fund', email: 'info@accel.com', linkedin: 'accel' },
        { name: 'Index Ventures', title: 'VC Fund', email: 'info@indexventures.com', linkedin: 'indexventures' }
      ],
      status: 'target',
      priority: 'medium',
      notes: 'Backed Honey which sold to PayPal for $4B. They understand cashback/rewards at scale.',
      alignment: 'Honey proved online cashback is a $4B business. Nuqta is Honey for offline - untapped and larger market in GCC.',
      customEmail: `Subject: Nuqta - "Honey for Offline" in GCC ($4B Playbook Applied)

Hi,

You backed Honey to a $4B PayPal exit. I'm applying the same playbook to offline commerce in GCC.

**Honey = Online cashback**
**Nuqta = Offline cashback**

The offline market is 3x larger and completely unaddressed in GCC.

**Traction:** 32 merchants, March 1 launch, $45B TAM.

Would love to discuss the GCC offline rewards opportunity.

Best,
Rejaul`
    },
    {
      id: 'rakuten-investors',
      name: 'Rakuten Capital / Rakuten Investors',
      type: 'corporate',
      stage: ['Series A', 'Series B'],
      checkSize: '$5M - $50M',
      focus: ['E-commerce', 'Loyalty', 'Fintech'],
      location: 'Tokyo, Japan / Global',
      website: 'https://global.rakuten.com',
      portfolio: ['Rakuten ecosystem', 'Ebates'],
      contacts: [
        { name: 'Rakuten Capital', title: 'Corporate VC', email: 'capital@mail.rakuten.com' }
      ],
      status: 'target',
      priority: 'low',
      notes: 'Rakuten built a $15B rewards ecosystem. They understand loyalty deeply.',
      alignment: 'Rakuten is the gold standard for rewards ecosystems. Nuqta is building Rakuten for GCC. They might want regional expansion.',
      customEmail: `Subject: Nuqta - Building "Rakuten for GCC" Rewards Ecosystem

Dear Rakuten Capital,

Rakuten built the world's premier rewards ecosystem. I'm building the GCC equivalent.

**GCC Opportunity:**
- $150B TAM, no unified rewards player
- Fragmented loyalty (50+ programs)
- Consumer demand proven by Entertainer ($100M exit)

**Nuqta Model:** Rakuten-style cashback for offline merchants.

Interested in strategic investment or licensing discussion.

Best,
Rejaul`
    },

    // ============================================
    // TIER 10: POS & PAYMENT COMPANY INVESTORS
    // ============================================
    {
      id: 'foodics-investors',
      name: 'Foodics Investors (STV, Sanabil, Endeavor)',
      type: 'vc',
      stage: ['Series A', 'Series B', 'Growth'],
      checkSize: '$5M - $50M',
      focus: ['F&B Tech', 'POS', 'Payments', 'SaaS'],
      location: 'Riyadh / Dubai',
      website: 'https://stv.vc / https://sanabil.com',
      portfolio: ['Foodics ($170M raised)', 'Restaurant tech'],
      contacts: [
        { name: 'Abdulrahman Tarabzouni', title: 'CEO, STV', linkedin: 'tarabzouni', email: 'abdulrahman@stv.vc' },
        { name: 'Sanabil Investments', title: 'PIF Subsidiary', email: 'info@sanabil.com' }
      ],
      status: 'target',
      priority: 'high',
      notes: 'Foodics raised $170M+ for F&B POS. Investors understand merchant tech deeply.',
      alignment: 'Foodics merchants are EXACTLY our target. Their investors understand F&B merchant needs. Nuqta adds loyalty layer to Foodics ecosystem.',
      customEmail: `Subject: Nuqta - Loyalty Layer for Foodics Merchants (STV Portfolio Fit)

Hi Abdulrahman,

STV backed Foodics because you understand F&B merchant needs. I'm building the loyalty layer those merchants need.

**Foodics Synergy:**
- Foodics handles POS & payments
- Nuqta handles loyalty & rewards
- Same 30,000+ merchant segment

**Nuqta Traction:** 32 merchants signed, mostly F&B. March 1 launch.

Would love to discuss how Nuqta fits the Foodics ecosystem thesis.

Best,
Rejaul`
    },
    {
      id: 'posrocket-investors',
      name: 'POSRocket Investors (Wamda, MEVP)',
      type: 'vc',
      stage: ['Seed', 'Series A'],
      checkSize: '$500K - $5M',
      focus: ['POS', 'Retail Tech', 'SMB'],
      location: 'Dubai, UAE',
      website: 'https://wamda.com',
      portfolio: ['POSRocket', 'Retail tech'],
      contacts: [
        { name: 'Wamda Capital', title: 'VC Fund', email: 'invest@wamda.com' },
        { name: 'MEVP', title: 'VC Fund', email: 'info@mevp.com' }
      ],
      status: 'target',
      priority: 'high',
      notes: 'POSRocket provides cloud POS. Investors understand UAE SMB retail.',
      alignment: 'POSRocket merchants need loyalty programs but don\'t have resources. Nuqta provides turnkey loyalty for POSRocket\'s SMB base.',
      customEmail: `Subject: Nuqta - Loyalty Module for POSRocket Merchants

Hi Wamda Team,

POSRocket solves the POS problem for UAE SMBs. But those merchants still lack loyalty solutions. Enter Nuqta.

**Integration Concept:**
- POSRocket handles transactions
- Nuqta handles rewards/loyalty
- Same SMB merchant base

**Our Traction:** 32 merchants, March 1 launch.

Would love to discuss POSRocket integration and investment.

Best,
Rejaul`
    },
    {
      id: 'lightspeed-investors',
      name: 'Lightspeed POS Investors (Caisse de dépôt, Accel)',
      type: 'vc',
      stage: ['Series B', 'Growth'],
      checkSize: '$10M - $100M',
      focus: ['POS', 'Restaurant Tech', 'Retail Tech'],
      location: 'Montreal / Global',
      website: 'https://lightspeedhq.com',
      portfolio: ['Lightspeed ($6B+ valuation)'],
      contacts: [
        { name: 'Lightspeed Ventures', title: 'Corporate Development', email: 'ventures@lightspeedhq.com' }
      ],
      status: 'target',
      priority: 'low',
      notes: 'Lightspeed is global POS leader. They have MENA customers and might want loyalty add-on.',
      alignment: 'Lightspeed has UAE restaurant customers. Nuqta could be their loyalty partner for MENA region.',
      customEmail: `Subject: Nuqta - Loyalty Partner for Lightspeed MENA Merchants

Dear Lightspeed Ventures,

Lightspeed serves MENA restaurants but doesn't have regional loyalty solution. Nuqta provides that.

**Partnership Value:**
- Loyalty add-on for Lightspeed MENA customers
- Regional expertise you don't have internally
- Revenue share on loyalty transactions

Interested in partnership or strategic investment.

Best,
Rejaul`
    },
    {
      id: 'square-block-investors',
      name: 'Square/Block Investors (Khosla, Sequoia)',
      type: 'vc',
      stage: ['Series A', 'Growth'],
      checkSize: '$5M - $100M',
      focus: ['Payments', 'POS', 'Fintech', 'SMB'],
      location: 'San Francisco / Global',
      website: 'https://khoslaventures.com / https://sequoia.com',
      portfolio: ['Square/Block ($40B+)', 'Stripe', 'Payments'],
      contacts: [
        { name: 'Khosla Ventures', title: 'VC Fund', email: 'info@khoslaventures.com' },
        { name: 'Sequoia Capital', title: 'VC Fund', email: 'info@sequoiacap.com' }
      ],
      status: 'target',
      priority: 'low',
      notes: 'Square investors understand SMB commerce deeply. Cash App has rewards features.',
      alignment: 'Square proved SMB payments is huge. Nuqta is the rewards layer Square doesn\'t have in MENA.',
      customEmail: `Subject: Nuqta - "Square Loyalty" for MENA ($45B Market)

Hi,

You backed Square to $40B+ because you saw SMB commerce opportunity. MENA is the next frontier.

**Nuqta = Rewards infrastructure for MENA SMBs**

Same thesis: help small merchants compete with big chains via technology.

**Traction:** 32 merchants, March 1 launch.

Would love to discuss MENA SMB opportunity.

Best,
Rejaul`
    },
    {
      id: 'paymob-investors',
      name: 'Paymob Investors (A15, Helios, PayPal)',
      type: 'vc',
      stage: ['Series A', 'Series B'],
      checkSize: '$5M - $50M',
      focus: ['Payments', 'Fintech', 'SMB'],
      location: 'Cairo / Dubai',
      website: 'https://paymob.com',
      portfolio: ['Paymob ($50M+ raised)'],
      contacts: [
        { name: 'PayPal Ventures', title: 'Corporate VC', email: 'ventures@paypal.com' },
        { name: 'A15', title: 'Egyptian VC', email: 'info@a15.com' }
      ],
      status: 'target',
      priority: 'medium',
      notes: 'Paymob processes payments for MENA merchants. PayPal invested. They understand merchant needs.',
      alignment: 'Paymob handles payments, Nuqta handles loyalty. Natural integration for their merchant base.',
      customEmail: `Subject: Nuqta - Loyalty Layer for Paymob Merchants

Hi,

You invested in Paymob because you understand MENA merchant payments. I'm building the loyalty layer.

**Paymob + Nuqta:**
- Paymob processes transactions
- Nuqta provides rewards on those transactions
- Merchants get complete commerce stack

**Traction:** 32 merchants, March 1 launch.

Interested in integration and investment discussion.

Best,
Rejaul`
    },
    {
      id: 'tabby-tamara-investors',
      name: 'Tabby/Tamara Investors (STV, Sequoia, Checkout)',
      type: 'vc',
      stage: ['Series A', 'Series B', 'Growth'],
      checkSize: '$10M - $100M',
      focus: ['BNPL', 'Payments', 'Fintech'],
      location: 'Dubai / Riyadh',
      website: 'https://stv.vc',
      portfolio: ['Tabby ($2B valuation)', 'Tamara ($1B valuation)'],
      contacts: [
        { name: 'Sequoia India/SEA', title: 'VC Fund', linkedin: 'sequoiaindia' },
        { name: 'Checkout.com Ventures', title: 'Corporate VC', email: 'ventures@checkout.com' }
      ],
      status: 'target',
      priority: 'high',
      notes: 'Backed both MENA BNPL unicorns. Deep understanding of consumer finance and merchant relationships.',
      alignment: 'BNPL solves "how to pay", Nuqta solves "why to return". Same merchants, complementary value prop.',
      customEmail: `Subject: Nuqta - Rewards Layer for Tabby/Tamara Merchants

Hi,

You backed Tabby and Tamara to unicorn status. Those merchants now need the next layer: loyalty.

**BNPL + Nuqta:**
- BNPL: "Pay in 4, interest-free"
- Nuqta: "Earn 5-10% back every time"
- Combined: Unbeatable value proposition

**Same Merchants:** Your portfolio companies' merchants are our target.

Would love to discuss the loyalty opportunity for BNPL merchants.

Best,
Rejaul`
    },

    // ============================================
    // TIER 11: INVENTORY & RETAIL TECH INVESTORS
    // ============================================
    {
      id: 'sary-investors',
      name: 'Sary Investors (Sanabil, STV, VentureSouq)',
      type: 'vc',
      stage: ['Series A', 'Series B'],
      checkSize: '$5M - $100M',
      focus: ['B2B', 'Inventory', 'F&B Supply Chain'],
      location: 'Riyadh / Dubai',
      website: 'https://sary.com',
      portfolio: ['Sary ($312M raised)', 'B2B commerce'],
      contacts: [
        { name: 'Sanabil Investments', title: 'PIF Subsidiary', email: 'info@sanabil.com' },
        { name: 'VentureSouq', title: 'VC Fund', email: 'info@venturesouq.com' }
      ],
      status: 'target',
      priority: 'high',
      notes: 'Sary is B2B marketplace for restaurants/groceries. $312M raised. Investors understand F&B supply chain.',
      alignment: 'Sary supplies restaurants/groceries. Those same merchants need customers. Nuqta brings customers, Sary supplies inventory.',
      customEmail: `Subject: Nuqta - Customer Acquisition for Sary Merchants

Hi,

You backed Sary to supply restaurants and groceries. Those merchants have another problem: customer acquisition. That's what Nuqta solves.

**Sary + Nuqta:**
- Sary: Supplies inventory to merchants
- Nuqta: Supplies customers to merchants
- Complete merchant success stack

**Traction:** 32 F&B merchants signed.

Would love to discuss synergies.

Best,
Rejaul`
    },
    {
      id: 'retailo-investors',
      name: 'Retailo Investors (Tiger Global, Shorooq)',
      type: 'vc',
      stage: ['Series A', 'Series B'],
      checkSize: '$10M - $100M',
      focus: ['B2B', 'Retail Tech', 'Inventory'],
      location: 'Dubai / Pakistan',
      website: 'https://retailo.co',
      portfolio: ['Retailo ($36M raised)', 'B2B retail'],
      contacts: [
        { name: 'Tiger Global', title: 'VC Fund', email: 'info@tigerglobal.com' },
        { name: 'Shorooq Partners', title: 'VC Fund', email: 'info@shorooq.com' }
      ],
      status: 'target',
      priority: 'medium',
      notes: 'B2B platform for kiranas/small retailers. Investors understand small retailer needs.',
      alignment: 'Retailo serves small retailers who need both inventory (Retailo) and customers (Nuqta).',
      customEmail: `Subject: Nuqta - Customer Layer for Retailo's Small Retailers

Hi,

You backed Retailo to solve inventory for small retailers. They also need customers. Nuqta provides that.

**Retailo + Nuqta:**
- Retailo: B2B inventory
- Nuqta: B2C customer acquisition
- Both serve same small retailer

Interested in exploring synergies.

Best,
Rejaul`
    },
    {
      id: 'cartlow-investors',
      name: 'Cartlow/Kifal Investors (Regional VCs)',
      type: 'vc',
      stage: ['Seed', 'Series A'],
      checkSize: '$1M - $10M',
      focus: ['Recommerce', 'Retail Tech', 'Sustainability'],
      location: 'Dubai, UAE',
      website: 'Various',
      portfolio: ['Cartlow', 'Re-commerce platforms'],
      contacts: [
        { name: 'Cartlow Team', title: 'Recommerce', linkedin: 'cartlow' }
      ],
      status: 'target',
      priority: 'low',
      notes: 'Recommerce/resale platforms. Understanding of consumer value-seeking behavior.',
      alignment: 'Recommerce and rewards both target value-conscious consumers. Similar customer psychology.',
      customEmail: `Subject: Nuqta - Rewards for Value-Conscious UAE Consumers

Hi,

You invested in recommerce because UAE consumers want value. Nuqta provides value on everyday purchases.

**Same Consumer:** Value-seeking, smart spenders
**Different Approach:** Cashback vs resale

Would love to discuss the value-conscious consumer opportunity.

Best,
Rejaul`
    },

    // ============================================
    // TIER 12: E-COMMERCE & MARKETPLACE INVESTORS
    // ============================================
    {
      id: 'noon-investors',
      name: 'Noon Investors (PIF, Emaar)',
      type: 'family-office',
      stage: ['Growth'],
      checkSize: '$50M - $500M',
      focus: ['E-commerce', 'Retail', 'Consumer'],
      location: 'Dubai / Riyadh',
      website: 'https://noon.com',
      portfolio: ['Noon ($1B+ invested)'],
      contacts: [
        { name: 'Noon Corporate Development', title: 'Strategy Team', email: 'partners@noon.com' },
        { name: 'Mohamed Alabbar', title: 'Founder', linkedin: 'mohamedalabar' }
      ],
      status: 'target',
      priority: 'medium',
      notes: 'Noon is UAE e-commerce champion. $1B+ invested. They might want offline loyalty play.',
      alignment: 'Noon dominates online. Nuqta complements with offline loyalty. Users could earn Noon credits at offline merchants.',
      customEmail: `Subject: Nuqta - Offline Loyalty Extension for Noon Ecosystem

Dear Noon Strategy Team,

Noon dominates online commerce. Nuqta can extend your ecosystem to offline.

**Concept:**
- Noon customers earn rewards at offline merchants
- Offline earnings redeemable on Noon
- Drive Noon usage through offline touchpoints

**Our Traction:** 32 merchants, March 1 launch.

Interested in strategic partnership or investment discussion.

Best,
Rejaul`
    },
    {
      id: 'amazon-mena-investors',
      name: 'Amazon MENA (Souq Acquisition)',
      type: 'corporate',
      stage: ['Growth'],
      checkSize: '$10M - $100M+',
      focus: ['E-commerce', 'Logistics', 'Consumer'],
      location: 'Dubai, UAE',
      website: 'https://amazon.ae',
      portfolio: ['Amazon MENA', 'Souq.com ($580M acquisition)'],
      contacts: [
        { name: 'Amazon MENA', title: 'Corporate Development', email: 'mena-partners@amazon.com' }
      ],
      status: 'target',
      priority: 'low',
      notes: 'Amazon acquired Souq for $580M. They understand MENA e-commerce but lack offline presence.',
      alignment: 'Amazon has no offline loyalty in MENA. Nuqta could be their offline rewards partner.',
      customEmail: `Subject: Nuqta - Offline Rewards Partner for Amazon MENA

Dear Amazon MENA Team,

Amazon dominates online but offline commerce remains fragmented in UAE. Nuqta bridges that gap.

**Partnership Concept:**
- Amazon customers earn Nuqta coins at offline merchants
- Redeem coins as Amazon credits
- Drives Amazon usage from offline touchpoints

Interested in exploring strategic partnership.

Best,
Rejaul`
    },
    {
      id: 'careem-uber-investors',
      name: 'Careem Investors (Now Uber)',
      type: 'corporate',
      stage: ['Seed', 'Series A', 'Growth'],
      checkSize: '$1M - $50M',
      focus: ['Super App', 'Mobility', 'Fintech', 'Consumer'],
      location: 'Dubai, UAE',
      website: 'https://careem.com',
      portfolio: ['Careem ($3.1B exit to Uber)'],
      contacts: [
        { name: 'Careem (Uber)', title: 'Corporate Development', email: 'partnerships@careem.com' },
        { name: 'Pre-acquisition investors', title: 'Various funds', linkedin: '' }
      ],
      status: 'target',
      priority: 'high',
      notes: 'Careem investors saw $3.1B exit. They understand UAE consumer tech deeply.',
      alignment: 'Careem proved UAE consumers adopt rewards. Careem Pay has loyalty features. Nuqta extends that to all merchants.',
      customEmail: `Subject: Nuqta - Extending Careem's Rewards Model to All Merchants

Hi,

You invested in Careem and saw $3.1B exit. Careem proved UAE consumers love rewards. Nuqta extends that model.

**Careem = Rewards within Careem ecosystem**
**Nuqta = Rewards across ALL merchants**

Same consumer psychology, broader application.

**Traction:** 32 merchants, March 1 launch.

Would love to discuss the UAE rewards opportunity.

Best,
Rejaul`
    },
    {
      id: 'namshi-investors',
      name: 'Namshi Investors (Rocket Internet, Emaar)',
      type: 'vc',
      stage: ['Series A', 'Series B'],
      checkSize: '$5M - $50M',
      focus: ['E-commerce', 'Fashion', 'Consumer'],
      location: 'Dubai, UAE',
      website: 'N/A (Acquired by Noon)',
      portfolio: ['Namshi ($51M investment)'],
      contacts: [
        { name: 'Former Namshi investors', title: 'Various', linkedin: '' }
      ],
      status: 'target',
      priority: 'low',
      notes: 'Namshi sold to Noon. Investors understand UAE e-commerce.',
      alignment: 'Fashion e-commerce investors might see opportunity in offline fashion retail rewards.',
      customEmail: `Subject: Nuqta - Offline Fashion Retail Rewards

Hi,

You invested in Namshi for fashion e-commerce. The offline fashion market is 3x larger and has no loyalty solution.

**Nuqta = Rewards for offline shopping**

Fashion boutiques are part of our merchant mix.

Would love to discuss the opportunity.

Best,
Rejaul`
    },

    // ============================================
    // TIER 13: COUPON & DISCOUNT PLATFORM INVESTORS
    // ============================================
    {
      id: 'groupon-mena-investors',
      name: 'Groupon MENA Investors',
      type: 'vc',
      stage: ['Series A', 'Series B'],
      checkSize: '$5M - $30M',
      focus: ['Deals', 'Coupons', 'Local Commerce'],
      location: 'Dubai / Chicago',
      website: 'https://groupon.ae',
      portfolio: ['Groupon (peaked at $16B market cap)'],
      contacts: [
        { name: 'Groupon Corporate', title: 'Corporate Development', email: 'partners@groupon.com' }
      ],
      status: 'target',
      priority: 'medium',
      notes: 'Groupon pioneered local deals but model faded. Investors learned what works and what doesn\'t.',
      alignment: 'Groupon failed because deals were one-time. Nuqta\'s cashback is repeatable. Same market, better model.',
      customEmail: `Subject: Nuqta - What Groupon Should Have Been (Repeatable Rewards)

Hi,

Groupon pioneered local commerce deals but the model wasn't sustainable. Nuqta fixes that.

**Groupon Problem:** One-time deals, no repeat behavior
**Nuqta Solution:** Ongoing cashback, habit-forming

Same local commerce market, sustainable model.

**Traction:** 32 merchants, March 1 launch.

Would love to discuss the evolved local commerce opportunity.

Best,
Rejaul`
    },
    {
      id: 'cobone-investors',
      name: 'Cobone Investors (Tiger Global)',
      type: 'vc',
      stage: ['Series A', 'Series B'],
      checkSize: '$5M - $30M',
      focus: ['Deals', 'E-commerce', 'Local Commerce'],
      location: 'Dubai, UAE',
      website: 'https://cobone.com',
      portfolio: ['Cobone (early MENA daily deals)'],
      contacts: [
        { name: 'Tiger Global', title: 'VC Fund (historical)', email: 'info@tigerglobal.com' }
      ],
      status: 'target',
      priority: 'low',
      notes: 'Cobone was early MENA daily deals. Tiger Global invested. Market educated but model evolved.',
      alignment: 'Cobone investors learned MENA local commerce. Nuqta is the evolved model with better retention.',
      customEmail: `Subject: Nuqta - MENA Local Commerce, Evolved

Hi,

You invested in Cobone during the daily deals era. The MENA local commerce market has evolved. So have we.

**Then:** Daily deals, one-time transactions
**Now:** Cashback rewards, ongoing engagement

**Nuqta Traction:** 32 merchants, 16.8x LTV:CAC.

Would love to discuss the evolved opportunity.

Best,
Rejaul`
    },
    {
      id: 'wecashback-investors',
      name: 'Cashback Platform Investors (Various)',
      type: 'vc',
      stage: ['Seed', 'Series A'],
      checkSize: '$1M - $20M',
      focus: ['Cashback', 'Affiliate', 'E-commerce'],
      location: 'Global',
      website: 'Various',
      portfolio: ['TopCashback', 'Rakuten', 'Ibotta'],
      contacts: [
        { name: 'Cashback platform investors', title: 'Various', linkedin: '' }
      ],
      status: 'target',
      priority: 'medium',
      notes: 'Investors who backed online cashback platforms understand the model.',
      alignment: 'Online cashback is proven ($4B Honey exit). Offline cashback is next, especially in cash-heavy markets like MENA.',
      customEmail: `Subject: Nuqta - Offline Cashback for Cash-Heavy MENA Market

Hi,

You've invested in online cashback. The offline opportunity is larger, especially in cash-heavy markets.

**MENA Reality:**
- 60% of retail is cash-based
- Online cashback doesn't work for offline
- Nuqta bridges that gap

**Traction:** 32 merchants, March 1 launch.

Would love to discuss offline cashback opportunity.

Best,
Rejaul`
    },

    // ============================================
    // TIER 14: ADDITIONAL LOYALTY TECH INVESTORS
    // ============================================
    {
      id: 'yext-investors',
      name: 'Yext/Loyalty Tech Investors (IVP, Insight)',
      type: 'vc',
      stage: ['Series B', 'Growth'],
      checkSize: '$20M - $100M',
      focus: ['Local Search', 'SMB Tech', 'Location'],
      location: 'New York / Global',
      website: 'https://yext.com',
      portfolio: ['Yext ($1B+)', 'Local commerce tech'],
      contacts: [
        { name: 'IVP', title: 'VC Fund', email: 'info@ivp.com' },
        { name: 'Insight Partners', title: 'VC Fund', email: 'info@insightpartners.com' }
      ],
      status: 'target',
      priority: 'low',
      notes: 'Yext powers local business discovery. Investors understand local search and SMB needs.',
      alignment: 'Yext does local search, Nuqta adds rewards on top. Both help local businesses get discovered and retain customers.',
      customEmail: `Subject: Nuqta - Rewards Layer for Local Business Discovery

Hi,

You backed Yext for local business discovery. Nuqta adds the rewards layer that makes discovery actionable.

**Yext:** "Find local businesses"
**Nuqta:** "Find and SAVE at local businesses"

Same SMB market, complementary value.

Would love to discuss local commerce opportunity in MENA.

Best,
Rejaul`
    },
    {
      id: 'fivestars-investors',
      name: 'Fivestars/Loyalty SaaS Investors',
      type: 'vc',
      stage: ['Series A', 'Series B'],
      checkSize: '$5M - $50M',
      focus: ['Loyalty SaaS', 'SMB Tech', 'Retail Tech'],
      location: 'San Francisco',
      website: 'https://fivestars.com',
      portfolio: ['Fivestars (acquired by SumUp)', 'Belly', 'Loyalty SaaS'],
      contacts: [
        { name: 'Former Fivestars investors', title: 'Various VCs', linkedin: '' }
      ],
      status: 'target',
      priority: 'medium',
      notes: 'Fivestars built SMB loyalty and sold to SumUp. Investors understand the space.',
      alignment: 'Fivestars was US SMB loyalty. Nuqta is MENA version with network effects (cross-merchant rewards).',
      customEmail: `Subject: Nuqta - "Fivestars for MENA" with Network Effects

Hi,

You backed Fivestars and saw the SMB loyalty opportunity. I'm building the MENA version with a twist: network effects.

**Fivestars:** Single-merchant loyalty
**Nuqta:** Cross-merchant rewards network

Users earn everywhere, creating stickiness no single merchant can.

**Traction:** 32 merchants, March 1 launch.

Would love to discuss MENA loyalty opportunity.

Best,
Rejaul`
    },
    {
      id: 'punchh-investors',
      name: 'Punchh Investors (Sapphire, Cervin)',
      type: 'vc',
      stage: ['Series A', 'Series B'],
      checkSize: '$5M - $30M',
      focus: ['Restaurant Tech', 'Loyalty', 'Marketing'],
      location: 'San Francisco',
      website: 'https://punchh.com',
      portfolio: ['Punchh (acquired by PAR)'],
      contacts: [
        { name: 'Sapphire Ventures', title: 'VC Fund', email: 'info@sapphireventures.com' }
      ],
      status: 'target',
      priority: 'medium',
      notes: 'Punchh built restaurant loyalty platform. Acquired by PAR Technology.',
      alignment: 'Punchh serves large chains. Nuqta serves independents who can\'t afford Punchh but need loyalty.',
      customEmail: `Subject: Nuqta - "Punchh for Independent Restaurants" in MENA

Hi,

You backed Punchh for restaurant loyalty. I'm building loyalty for the restaurants Punchh doesn't serve: independents.

**Punchh:** Enterprise chains with big budgets
**Nuqta:** SMB restaurants with zero budget

**Traction:** 32 independent F&B merchants, March 1 launch.

Would love to discuss the SMB restaurant loyalty opportunity.

Best,
Rejaul`
    },
    {
      id: 'thanx-investors',
      name: 'Thanx Investors (Sequoia Scout)',
      type: 'vc',
      stage: ['Seed', 'Series A'],
      checkSize: '$1M - $15M',
      focus: ['Restaurant Loyalty', 'Consumer'],
      location: 'San Francisco',
      website: 'https://thanx.com',
      portfolio: ['Thanx'],
      contacts: [
        { name: 'Thanx investors', title: 'Various', linkedin: '' }
      ],
      status: 'target',
      priority: 'low',
      notes: 'Thanx is restaurant loyalty focused. Investors understand F&B loyalty deeply.',
      alignment: 'Thanx model works for US. Nuqta adapts for MENA with QR-first (cash-friendly) approach.',
      customEmail: `Subject: Nuqta - Restaurant Loyalty for Cash-Heavy MENA

Hi,

You understand restaurant loyalty from Thanx. MENA is different: 60% cash transactions, different consumer behavior.

**Nuqta = Thanx model adapted for MENA:**
- QR-based (works with cash)
- Multi-merchant (network effects)
- Mobile-first (high smartphone penetration)

Would love to discuss MENA F&B loyalty opportunity.

Best,
Rejaul`
    }
  ];

  // Continue with the rest of the component...
  const outreachTemplates = [
    {
      id: 'cold-vc-intro',
      title: 'Cold Email - VC Fund',
      category: 'VC Funds',
      subject: 'Nuqta - Rewards Infrastructure for GCC Commerce | [Fund Name]',
      body: `Hi [First Name],

I'm Rejaul, founder of Nuqta. Given [Fund Name]'s investments in [relevant portfolio company], I wanted to share what we're building.

**The Problem:** GCC consumers spend $150B annually on local services but earn nothing back. Meanwhile, merchants struggle with 40-60% churn and AED 200+ Google Ads CAC.

**Nuqta = Search. Save. Earn.**
- Users search for businesses, see cashback offers, earn 5-10% back
- Merchants pay 15% commission only on completed sales
- QR-based system works with any payment method

**Traction:**
- 32 signed merchant LOIs (Dubai Marina, Downtown, JBR)
- Launching March 1, 2026
- 16.8x LTV:CAC ratio (merchant-funded, no VC subsidy burn)

**The [Fund Name] Fit:**
- [Specific portfolio synergy]
- [Relevant thesis alignment]
- [Geographic/stage fit]

We're raising $400K pre-seed on $5M cap SAFE with 20% discount. Would love 20 minutes to share our deck.

Best,
Rejaul Karim
Founder, Nuqta
rejaul@nuqtapp.com | +971-XX-XXX-XXXX`,
      tips: [
        'Research fund thesis and portfolio before sending',
        'Mention specific portfolio company synergies',
        'Keep under 250 words',
        'Send Tuesday-Thursday, 9-11 AM Dubai time'
      ]
    },
    {
      id: 'cold-angel-intro',
      title: 'Cold Email - Angel Investor',
      category: 'Angels',
      subject: 'Quick Intro: Nuqta - UAE Rewards Platform',
      body: `Hi [First Name],

Saw your investment in [company/background]. I'm building something in similar territory.

**Nuqta = 5-10% cashback on everyday purchases**

Think "Honey for offline" - users search for cafes/salons/gyms and earn instant rewards.

**Quick Stats:**
- 32 merchants signed
- March 1 launch
- 16.8x LTV:CAC

Raising $400K, taking $25K-100K angel checks. Would value 15 minutes to share more.

Best,
Rejaul`,
      tips: [
        'Angels appreciate brevity',
        'Lead with their background/interests',
        'Smaller ask (15 mins vs 30)',
        'Mention check size range'
      ]
    },
    {
      id: 'cold-corporate-intro',
      title: 'Cold Email - Corporate/Strategic',
      category: 'Corporate',
      subject: 'Partnership + Investment Opportunity: Nuqta Rewards Platform',
      body: `Dear [Company] Investment/Partnership Team,

I'm reaching out regarding a strategic opportunity that aligns with [Company]'s retail/consumer interests.

**Nuqta Overview:**
We're building the rewards infrastructure for GCC offline commerce - a platform where consumers earn cashback at partner merchants.

**Strategic Value for [Company]:**
1. [Specific synergy with their business]
2. Consumer behavior data across merchant categories
3. Loyalty solution for [their portfolio/properties]

**Pilot Proposal:**
- Start with [X] [Company] locations
- Measure customer acquisition and repeat purchase lift
- Expand based on results

**Investment Opportunity:**
Currently raising $400K pre-seed. Open to strategic investment alongside pilot partnership.

Would welcome a call to discuss mutual opportunities.

Best regards,
Rejaul Karim
Founder & CEO, Nuqta
rejaul@nuqtapp.com`,
      tips: [
        'Corporate emails should be more formal',
        'Lead with strategic value, not just investment',
        'Propose specific pilot/partnership',
        'Multiple stakeholders may read'
      ]
    },
    {
      id: 'warm-intro-request',
      title: 'Warm Intro Request',
      category: 'Warm Intros',
      subject: 'Intro Request: Nuqta → [Investor Name]',
      body: `Hi [Connector Name],

Hope you're well! I noticed you're connected to [Investor Name] at [Fund] and wanted to ask for an introduction.

**Quick context on Nuqta:**
We're building rewards infrastructure for GCC retail - users search for businesses and earn 5-10% cashback.

**Why [Fund] is a fit:**
- They invested in [similar company]
- [Investor Name] focuses on [relevant area]
- Our stage/geography matches their thesis

**Our traction:**
- 32 signed merchant LOIs
- Launching March 1, 2026
- Raising $400K pre-seed

Would you feel comfortable making an introduction? Here's a forwardable blurb:

---
"Hi [Investor], introducing Rejaul Karim, founder of Nuqta. They're building a cashback platform for GCC offline commerce - 32 merchants signed, launching March 1. Given your interest in [area], thought this might be relevant. I'll let Rejaul share more directly."
---

Thanks for considering!
Rejaul`,
      tips: [
        'Make it easy with forwardable blurb',
        'Explain specific fund fit',
        'Keep ask simple and specific',
        'Follow up once in 5-7 days'
      ]
    },
    {
      id: 'follow-up-1',
      title: 'Follow-Up Email #1',
      category: 'Follow-Ups',
      subject: 'Re: Nuqta - Quick Update',
      body: `Hi [First Name],

Following up on my email from [X days ago]. I know inboxes get busy.

**Quick update since then:**
- [New traction point 1]
- [New traction point 2]

Still would love 20 minutes to share our deck. If now isn't right, happy to circle back after our March 1 launch with live data.

Best,
Rejaul`,
      tips: [
        'Wait 5-7 days before first follow-up',
        'Add new information',
        'Offer alternative timing',
        'Keep very short'
      ]
    },
    {
      id: 'follow-up-2',
      title: 'Follow-Up Email #2 (Final)',
      category: 'Follow-Ups',
      subject: 'Re: Nuqta - Last Follow Up',
      body: `Hi [First Name],

Last follow-up - I know timing may not be right.

**We're launching March 1.** If you'd like to see live traction data instead of projections, I'll send an update in February.

Either way, appreciate you reading this far.

Best,
Rejaul`,
      tips: [
        'Wait 7-10 days after first follow-up',
        'Acknowledge this is final outreach',
        'Offer to reconnect with data',
        'Maximum 2-3 follow-ups total'
      ]
    },
    {
      id: 'post-meeting-followup',
      title: 'Post-Meeting Follow-Up',
      category: 'Post-Meeting',
      subject: 'Thanks + Nuqta Materials',
      body: `Hi [First Name],

Thanks for the great conversation today. Really appreciated your questions about [specific topic].

As promised, here are the materials:
1. **Pitch Deck:** [Link]
2. **Financial Model:** [Link]
3. **Data Room:** [Link]

**Key points from our discussion:**
- [Point 1 they raised + your response]
- [Point 2 they raised + your response]

**Next Steps:**
- [Whatever was agreed]

Please let me know if you need anything else. Happy to schedule a follow-up with [partner/team member] if helpful.

Best,
Rejaul`,
      tips: [
        'Send within 2 hours of meeting',
        'Reference specific discussion points',
        'Include all promised materials',
        'Confirm next steps clearly'
      ]
    },
    {
      id: 'monthly-update',
      title: 'Monthly Investor Update',
      category: 'Updates',
      subject: 'Nuqta Update - [Month Year]',
      body: `Hi [First Name],

Monthly update on Nuqta:

**Highlights:**
🚀 [Key milestone 1]
📈 [Key milestone 2]
🏪 [Key milestone 3]

**Key Metrics:**
- Users: [X]
- Merchants: [X]
- GMV: AED [X]
- D30 Retention: [X]%

**Challenges:**
- [Honest challenge 1]
- [How we're addressing it]

**Help Needed:**
- Intros to [specific ask]
- Advice on [specific challenge]

**What's Next:**
- [Upcoming milestone 1]
- [Upcoming milestone 2]

Thanks for your continued interest!
Rejaul`,
      tips: [
        'Send monthly to all warm contacts',
        'Lead with wins, be honest about challenges',
        'Include specific asks',
        'Keep scannable with bullets'
      ]
    }
  ];

  const copyTemplate = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTemplate(id);
    setTimeout(() => setCopiedTemplate(null), 2000);
  };

  const filteredInvestors = investors.filter(inv => {
    if (selectedType !== 'all' && inv.type !== selectedType) return false;
    if (selectedStatus !== 'all' && inv.status !== selectedStatus) return false;
    if (selectedPriority !== 'all' && inv.priority !== selectedPriority) return false;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return inv.name.toLowerCase().includes(query) ||
             inv.focus.some(f => f.toLowerCase().includes(query)) ||
             inv.location.toLowerCase().includes(query);
    }
    return true;
  });

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      'interested': 'bg-green-500/20 text-green-400 border-green-500/30',
      'meeting': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'contacted': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      'passed': 'bg-red-500/20 text-red-400 border-red-500/30',
      'target': 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    };
    return colors[status] || colors['target'];
  };

  const getPriorityColor = (priority: string) => {
    const colors: Record<string, string> = {
      'high': 'text-red-400',
      'medium': 'text-yellow-400',
      'low': 'text-gray-400'
    };
    return colors[priority] || colors['low'];
  };

  const getTypeIcon = (type: string) => {
    const icons: Record<string, typeof Building2> = {
      'vc': Building2,
      'angel': Users,
      'family-office': Heart,
      'corporate': Briefcase,
      'accelerator': Zap,
      'government': Building2
    };
    return icons[type] || Building2;
  };

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      'vc': 'VC Fund',
      'angel': 'Angel',
      'family-office': 'Family Office',
      'corporate': 'Corporate VC',
      'accelerator': 'Accelerator',
      'government': 'Government'
    };
    return labels[type] || type;
  };

  const investorStats = {
    total: investors.length,
    highPriority: investors.filter(i => i.priority === 'high').length,
    byType: {
      vc: investors.filter(i => i.type === 'vc').length,
      angel: investors.filter(i => i.type === 'angel').length,
      familyOffice: investors.filter(i => i.type === 'family-office').length,
      corporate: investors.filter(i => i.type === 'corporate').length,
      accelerator: investors.filter(i => i.type === 'accelerator').length,
      government: investors.filter(i => i.type === 'government').length
    }
  };

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a1628] via-[#1a2d4a] to-[#0a1628] border-b border-[#c9a227]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 sm:mb-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 bg-[#c9a227]/20 rounded-lg sm:rounded-xl">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-[#c9a227]" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">Investor Outreach Database</h1>
                <p className="text-xs sm:text-sm text-gray-400">{investors.length} Investors • Contact Details • Custom Emails</p>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-[#c9a227] font-bold text-lg sm:text-xl">$400K Round</p>
              <p className="text-gray-400 text-xs sm:text-sm">$5M Cap • 20% Discount</p>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="bg-gray-800/50 rounded-lg p-2 sm:p-3 text-center">
              <p className="text-lg sm:text-2xl font-bold text-white">{investorStats.total}</p>
              <p className="text-[10px] sm:text-xs text-gray-400">Total</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-2 sm:p-3 text-center">
              <p className="text-lg sm:text-2xl font-bold text-red-400">{investorStats.highPriority}</p>
              <p className="text-[10px] sm:text-xs text-gray-400">High Priority</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-2 sm:p-3 text-center">
              <p className="text-lg sm:text-2xl font-bold text-blue-400">{investorStats.byType.vc}</p>
              <p className="text-[10px] sm:text-xs text-gray-400">VC Funds</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-2 sm:p-3 text-center hidden sm:block">
              <p className="text-lg sm:text-2xl font-bold text-purple-400">{investorStats.byType.angel}</p>
              <p className="text-[10px] sm:text-xs text-gray-400">Angels</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-2 sm:p-3 text-center hidden lg:block">
              <p className="text-lg sm:text-2xl font-bold text-pink-400">{investorStats.byType.familyOffice}</p>
              <p className="text-[10px] sm:text-xs text-gray-400">Family Offices</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-2 sm:p-3 text-center hidden lg:block">
              <p className="text-lg sm:text-2xl font-bold text-green-400">{investorStats.byType.corporate}</p>
              <p className="text-[10px] sm:text-xs text-gray-400">Corporate VC</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-2 sm:p-3 text-center hidden lg:block">
              <p className="text-lg sm:text-2xl font-bold text-yellow-400">{investorStats.byType.accelerator + investorStats.byType.government}</p>
              <p className="text-[10px] sm:text-xs text-gray-400">Accelerators</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 overflow-x-auto pb-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all text-xs sm:text-sm whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-[#c9a227] text-[#0a1628] font-bold'
                    : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                <tab.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Target List Tab */}
        {activeTab === 'target-list' && (
          <div className="space-y-6">
            {/* Filters */}
            <div className="bg-gray-800/30 rounded-xl p-4">
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex-1 min-w-[200px]">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search investors, focus areas, locations..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-gray-400" />
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white"
                  >
                    <option value="all">All Types</option>
                    <option value="vc">VC Funds</option>
                    <option value="angel">Angels</option>
                    <option value="family-office">Family Offices</option>
                    <option value="corporate">Corporate VC</option>
                    <option value="accelerator">Accelerators</option>
                    <option value="government">Government</option>
                  </select>
                  <select
                    value={selectedPriority}
                    onChange={(e) => setSelectedPriority(e.target.value)}
                    className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white"
                  >
                    <option value="all">All Priority</option>
                    <option value="high">High Priority</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white"
                  >
                    <option value="all">All Status</option>
                    <option value="target">Target</option>
                    <option value="contacted">Contacted</option>
                    <option value="meeting">In Meetings</option>
                    <option value="interested">Interested</option>
                    <option value="passed">Passed</option>
                  </select>
                </div>
              </div>
              <p className="text-gray-500 text-sm mt-3">Showing {filteredInvestors.length} of {investors.length} investors</p>
            </div>

            {/* Investor Cards */}
            <div className="space-y-4">
              {filteredInvestors.map((investor) => {
                const TypeIcon = getTypeIcon(investor.type);
                const isExpanded = expandedInvestor === investor.id;

                return (
                  <div key={investor.id} className="bg-[#0a1628] rounded-xl border border-gray-800 overflow-hidden">
                    <div
                      className="p-5 cursor-pointer hover:bg-gray-800/30 transition-colors"
                      onClick={() => setExpandedInvestor(isExpanded ? null : investor.id)}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="p-3 bg-gray-800 rounded-xl shrink-0">
                            <TypeIcon className="w-6 h-6 text-[#c9a227]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 flex-wrap">
                              <h3 className="text-lg font-bold text-white">{investor.name}</h3>
                              <Star className={`w-4 h-4 ${getPriorityColor(investor.priority)}`} />
                              <span className={`px-2 py-0.5 rounded text-xs font-medium border ${getStatusColor(investor.status)}`}>
                                {investor.status}
                              </span>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 mt-1 text-sm">
                              <span className="text-gray-500">{getTypeLabel(investor.type)}</span>
                              <span className="text-gray-600">•</span>
                              <span className="text-gray-400 flex items-center gap-1">
                                <MapPin className="w-3 h-3" /> {investor.location}
                              </span>
                              <span className="text-gray-600">•</span>
                              <span className="text-[#c9a227]">{investor.checkSize}</span>
                            </div>
                            <div className="flex flex-wrap gap-1.5 mt-2">
                              {investor.focus.slice(0, 4).map((f, idx) => (
                                <span key={idx} className="px-2 py-0.5 rounded bg-gray-800 text-gray-400 text-xs">
                                  {f}
                                </span>
                              ))}
                              {investor.stage.map((s, idx) => (
                                <span key={idx} className="px-2 py-0.5 rounded bg-[#c9a227]/20 text-[#c9a227] text-xs">
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="shrink-0">
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-gray-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="border-t border-gray-800 bg-gray-900/30">
                        {/* Contacts Section */}
                        <div className="p-5 border-b border-gray-800">
                          <h4 className="text-sm font-semibold text-[#c9a227] mb-3 flex items-center gap-2">
                            <Users className="w-4 h-4" /> Key Contacts
                          </h4>
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {investor.contacts.map((contact, idx) => (
                              <div key={idx} className="p-3 rounded-lg bg-gray-800/50 space-y-2">
                                <div>
                                  <p className="text-white font-medium">{contact.name}</p>
                                  <p className="text-gray-500 text-sm">{contact.title}</p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {contact.email && (
                                    <a
                                      href={`mailto:${contact.email}`}
                                      className="flex items-center gap-1 px-2 py-1 rounded bg-blue-500/20 text-blue-400 text-xs hover:bg-blue-500/30"
                                    >
                                      <Mail className="w-3 h-3" /> {contact.email}
                                    </a>
                                  )}
                                  {contact.linkedin && (
                                    <a
                                      href={`https://linkedin.com/in/${contact.linkedin}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-1 px-2 py-1 rounded bg-blue-500/20 text-blue-400 text-xs hover:bg-blue-500/30"
                                    >
                                      <Linkedin className="w-3 h-3" /> LinkedIn
                                    </a>
                                  )}
                                  {contact.twitter && (
                                    <a
                                      href={`https://twitter.com/${contact.twitter}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-1 px-2 py-1 rounded bg-gray-700 text-gray-300 text-xs hover:bg-gray-600"
                                    >
                                      <Twitter className="w-3 h-3" /> @{contact.twitter}
                                    </a>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Alignment & Portfolio */}
                        <div className="p-5 border-b border-gray-800 grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-sm font-semibold text-[#c9a227] mb-2 flex items-center gap-2">
                              <Target className="w-4 h-4" /> Why This Investor (Alignment)
                            </h4>
                            <p className="text-gray-300 text-sm leading-relaxed">{investor.alignment}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-[#c9a227] mb-2 flex items-center gap-2">
                              <Briefcase className="w-4 h-4" /> Notable Portfolio
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {investor.portfolio.map((company, idx) => (
                                <span key={idx} className="px-2 py-1 rounded bg-gray-800 text-gray-300 text-sm">
                                  {company}
                                </span>
                              ))}
                            </div>
                            {investor.notes && (
                              <p className="text-gray-500 text-sm mt-3 italic">{investor.notes}</p>
                            )}
                          </div>
                        </div>

                        {/* Custom Email */}
                        <div className="p-5">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-sm font-semibold text-[#c9a227] flex items-center gap-2">
                              <Mail className="w-4 h-4" /> Custom Email Draft
                            </h4>
                            <button
                              onClick={() => copyTemplate(investor.customEmail, investor.id)}
                              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                                copiedTemplate === investor.id
                                  ? 'bg-green-500 text-white'
                                  : 'bg-[#c9a227] text-[#0a1628] hover:bg-[#e8c547]'
                              }`}
                            >
                              {copiedTemplate === investor.id ? (
                                <>
                                  <CheckCircle className="w-3 h-3" /> Copied!
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3" /> Copy Email
                                </>
                              )}
                            </button>
                          </div>
                          <pre className="text-gray-300 text-sm whitespace-pre-wrap font-sans leading-relaxed bg-gray-800/50 rounded-lg p-4 max-h-[300px] overflow-y-auto">
                            {investor.customEmail}
                          </pre>
                        </div>

                        {/* Actions */}
                        <div className="p-5 pt-0 flex flex-wrap gap-3">
                          <a
                            href={investor.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-sm hover:bg-gray-700 transition-colors"
                          >
                            <Globe className="w-4 h-4" /> Website
                          </a>
                          {investor.contacts[0]?.email && (
                            <a
                              href={`mailto:${investor.contacts[0].email}`}
                              className="flex items-center gap-2 px-4 py-2 bg-[#c9a227] text-[#0a1628] rounded-lg text-sm font-medium hover:bg-[#e8c547] transition-colors"
                            >
                              <Send className="w-4 h-4" /> Send Email
                            </a>
                          )}
                          {investor.contacts[0]?.linkedin && (
                            <a
                              href={`https://linkedin.com/in/${investor.contacts[0].linkedin}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
                            >
                              <Linkedin className="w-4 h-4" /> Connect
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Competitor Investors Tab */}
        {activeTab === 'competitor-investors' && (
          <div className="space-y-6">
            {/* Intro */}
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-400" />
                Competitor Investors - Smart Outreach Strategy
              </h3>
              <p className="text-gray-300 mb-4">
                These investors backed companies in adjacent spaces (loyalty, POS, payments, e-commerce, coupons). They already understand the market and will recognize Nuqta's value proposition faster.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <p className="text-purple-400 font-bold text-lg">{investors.filter(i => i.id.includes('entertainer') || i.id.includes('smiles') || i.id.includes('fazaa') || i.id.includes('honey') || i.id.includes('rakuten')).length}</p>
                  <p className="text-gray-400 text-sm">Direct Competitors (Loyalty/Rewards)</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <p className="text-blue-400 font-bold text-lg">{investors.filter(i => i.id.includes('foodics') || i.id.includes('posrocket') || i.id.includes('lightspeed') || i.id.includes('square') || i.id.includes('paymob') || i.id.includes('tabby') || i.id.includes('tamara')).length}</p>
                  <p className="text-gray-400 text-sm">POS & Payments</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <p className="text-green-400 font-bold text-lg">{investors.filter(i => i.id.includes('noon') || i.id.includes('amazon') || i.id.includes('careem') || i.id.includes('namshi') || i.id.includes('groupon') || i.id.includes('cobone') || i.id.includes('sary') || i.id.includes('retailo')).length}</p>
                  <p className="text-gray-400 text-sm">E-commerce & Retail Tech</p>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-8">
              {/* Direct Competitors - Loyalty */}
              <div>
                <h4 className="text-lg font-bold text-purple-400 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5" /> Direct Competitor Investors (Loyalty/Rewards/Coupons)
                </h4>
                <p className="text-gray-400 text-sm mb-4">Investors who backed The Entertainer, Smiles, Honey, Rakuten, Groupon, etc. They've validated the loyalty market.</p>
                <div className="space-y-3">
                  {investors.filter(i =>
                    i.id.includes('entertainer') || i.id.includes('smiles') || i.id.includes('fazaa') ||
                    i.id.includes('honey') || i.id.includes('rakuten') || i.id.includes('groupon') ||
                    i.id.includes('cobone') || i.id.includes('cashback') || i.id.includes('yext') ||
                    i.id.includes('fivestars') || i.id.includes('punchh') || i.id.includes('thanx')
                  ).map(investor => (
                    <div key={investor.id} className="bg-gray-800/30 rounded-lg p-4 border border-purple-500/20">
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="font-bold text-white">{investor.name}</h5>
                          <p className="text-gray-400 text-sm">{investor.portfolio.join(', ')}</p>
                          <p className="text-purple-300 text-sm mt-2">{investor.alignment.substring(0, 150)}...</p>
                        </div>
                        <button
                          onClick={() => copyTemplate(investor.customEmail, investor.id)}
                          className={`px-3 py-1.5 rounded text-xs font-medium ${
                            copiedTemplate === investor.id ? 'bg-green-500 text-white' : 'bg-purple-500/20 text-purple-400 hover:bg-purple-500/30'
                          }`}
                        >
                          {copiedTemplate === investor.id ? 'Copied!' : 'Copy Email'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* POS & Payments */}
              <div>
                <h4 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5" /> POS & Payment Company Investors
                </h4>
                <p className="text-gray-400 text-sm mb-4">Investors who backed Foodics, POSRocket, Square, Paymob, Tabby, Tamara. They understand merchant tech.</p>
                <div className="space-y-3">
                  {investors.filter(i =>
                    i.id.includes('foodics') || i.id.includes('posrocket') || i.id.includes('lightspeed') ||
                    i.id.includes('square') || i.id.includes('paymob') || i.id.includes('tabby') || i.id.includes('tamara')
                  ).map(investor => (
                    <div key={investor.id} className="bg-gray-800/30 rounded-lg p-4 border border-blue-500/20">
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="font-bold text-white">{investor.name}</h5>
                          <p className="text-gray-400 text-sm">{investor.portfolio.join(', ')}</p>
                          <p className="text-blue-300 text-sm mt-2">{investor.alignment.substring(0, 150)}...</p>
                        </div>
                        <button
                          onClick={() => copyTemplate(investor.customEmail, investor.id)}
                          className={`px-3 py-1.5 rounded text-xs font-medium ${
                            copiedTemplate === investor.id ? 'bg-green-500 text-white' : 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30'
                          }`}
                        >
                          {copiedTemplate === investor.id ? 'Copied!' : 'Copy Email'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* E-commerce & Retail Tech */}
              <div>
                <h4 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" /> E-commerce & Retail Tech Investors
                </h4>
                <p className="text-gray-400 text-sm mb-4">Investors who backed Noon, Amazon/Souq, Careem, Sary, Retailo. They understand MENA commerce.</p>
                <div className="space-y-3">
                  {investors.filter(i =>
                    i.id.includes('noon') || i.id.includes('amazon') || i.id.includes('careem') ||
                    i.id.includes('namshi') || i.id.includes('sary') || i.id.includes('retailo') || i.id.includes('cartlow')
                  ).map(investor => (
                    <div key={investor.id} className="bg-gray-800/30 rounded-lg p-4 border border-green-500/20">
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="font-bold text-white">{investor.name}</h5>
                          <p className="text-gray-400 text-sm">{investor.portfolio.join(', ')}</p>
                          <p className="text-green-300 text-sm mt-2">{investor.alignment.substring(0, 150)}...</p>
                        </div>
                        <button
                          onClick={() => copyTemplate(investor.customEmail, investor.id)}
                          className={`px-3 py-1.5 rounded text-xs font-medium ${
                            copiedTemplate === investor.id ? 'bg-green-500 text-white' : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                          }`}
                        >
                          {copiedTemplate === investor.id ? 'Copied!' : 'Copy Email'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Strategy Tips */}
            <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-[#c9a227] mb-4">Why Target Competitor Investors?</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">They Understand the Market</p>
                    <p className="text-gray-400 text-sm">No need to explain loyalty/rewards basics - they get it.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Portfolio Synergies</p>
                    <p className="text-gray-400 text-sm">Their portfolio companies could be Nuqta partners/merchants.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Faster Due Diligence</p>
                    <p className="text-gray-400 text-sm">They know the competitive landscape and unit economics.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Strategic Value-Add</p>
                    <p className="text-gray-400 text-sm">They can connect you with merchant partnerships.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Templates Tab */}
        {activeTab === 'templates' && (
          <div className="space-y-6">
            <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#c9a227] mt-0.5" />
                <div>
                  <p className="text-white font-medium">Pro Tip: Personalize Every Email</p>
                  <p className="text-gray-400 text-sm">These templates are starting points. Always customize with specific references to the investor's portfolio, thesis, and recent activity.</p>
                </div>
              </div>
            </div>

            {outreachTemplates.map((template) => (
              <div key={template.id} className="bg-[#0a1628] rounded-xl border border-gray-800 overflow-hidden">
                <div className="p-5 border-b border-gray-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded bg-[#c9a227]/20 text-[#c9a227] text-xs">{template.category}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white">{template.title}</h3>
                      <p className="text-gray-400 text-sm mt-1">Subject: {template.subject}</p>
                    </div>
                    <button
                      onClick={() => copyTemplate(`Subject: ${template.subject}\n\n${template.body}`, template.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        copiedTemplate === template.id
                          ? 'bg-green-500 text-white'
                          : 'bg-[#c9a227] text-[#0a1628] hover:bg-[#e8c547]'
                      }`}
                    >
                      {copiedTemplate === template.id ? (
                        <>
                          <CheckCircle className="w-4 h-4" /> Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" /> Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <pre className="text-gray-300 text-sm whitespace-pre-wrap font-sans leading-relaxed bg-gray-800/30 rounded-lg p-4">
                    {template.body}
                  </pre>

                  {template.tips && (
                    <div className="mt-4 p-4 rounded-lg bg-blue-500/10 border border-blue-500/30">
                      <h4 className="text-blue-400 font-semibold text-sm mb-2">Tips for This Template</h4>
                      <ul className="space-y-1">
                        {template.tips.map((tip, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                            <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pipeline Tab */}
        {activeTab === 'pipeline' && (
          <div className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {['target', 'contacted', 'meeting', 'interested', 'passed'].map((status) => {
                const statusInvestors = investors.filter(i => i.status === status);
                return (
                  <div key={status} className="bg-gray-800/30 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-white capitalize">{status}</h3>
                      <span className={`px-2 py-0.5 rounded text-xs ${getStatusColor(status)}`}>
                        {statusInvestors.length}
                      </span>
                    </div>
                    <div className="space-y-2 max-h-[400px] overflow-y-auto">
                      {statusInvestors.slice(0, 10).map((inv) => (
                        <div key={inv.id} className="p-3 rounded-lg bg-gray-900/50 border border-gray-700">
                          <p className="text-white text-sm font-medium truncate">{inv.name}</p>
                          <p className="text-gray-500 text-xs">{inv.checkSize}</p>
                        </div>
                      ))}
                      {statusInvestors.length > 10 && (
                        <p className="text-gray-500 text-sm text-center">+{statusInvestors.length - 10} more</p>
                      )}
                      {statusInvestors.length === 0 && (
                        <p className="text-gray-600 text-sm text-center py-4">No investors</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pipeline Stats */}
            <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-bold mb-4">Pipeline Metrics</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-white">{investors.length}</p>
                  <p className="text-gray-400 text-sm">Total Targets</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-yellow-400">
                    {Math.round((investors.filter(i => i.status !== 'target').length / investors.length) * 100)}%
                  </p>
                  <p className="text-gray-400 text-sm">Contact Rate Target</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-400">20%</p>
                  <p className="text-gray-400 text-sm">Meeting Rate Target</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-green-400">5%</p>
                  <p className="text-gray-400 text-sm">Close Rate Target</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Playbook Tab */}
        {activeTab === 'playbook' && (
          <div className="space-y-8">
            {/* Outreach Process */}
            <div className="bg-gradient-to-r from-[#0a1628] to-[#1a2d4a] rounded-2xl p-8 border border-[#c9a227]/20">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#c9a227]" />
                Investor Outreach Playbook
              </h3>
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  { step: '1', title: 'Research', desc: 'Deep dive on thesis, portfolio, contacts', icon: Search },
                  { step: '2', title: 'Warm Intro', desc: 'Find mutual connections first', icon: Users },
                  { step: '3', title: 'Outreach', desc: 'Personalized email with custom pitch', icon: Mail },
                  { step: '4', title: 'Meeting', desc: '30-min intro call, share materials', icon: Calendar },
                  { step: '5', title: 'Close', desc: 'Follow up, answer questions, close', icon: ArrowRight },
                ].map((step) => (
                  <div key={step.step} className="text-center">
                    <div className="w-12 h-12 bg-[#c9a227]/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-[#c9a227]" />
                    </div>
                    <div className="w-8 h-8 bg-[#c9a227] rounded-full mx-auto mb-2 flex items-center justify-center text-[#0a1628] font-bold text-sm">
                      {step.step}
                    </div>
                    <h4 className="font-semibold text-white">{step.title}</h4>
                    <p className="text-gray-400 text-xs mt-1">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Do's and Don'ts */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
                <h4 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" /> Do's
                </h4>
                <ul className="space-y-3">
                  {[
                    'Research investor thoroughly before outreach',
                    'Personalize every email with specific references',
                    'Lead with traction and metrics, not vision',
                    'Follow up 2-3 times max, then move on',
                    'Send monthly updates even to those who passed',
                    'Ask for feedback after rejections',
                    'Build relationships before you need to raise'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
                <h4 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" /> Don'ts
                </h4>
                <ul className="space-y-3">
                  {[
                    'Send generic mass emails',
                    'Pitch investors outside your stage/sector',
                    'Attach deck in first cold email',
                    'Follow up more than 3 times',
                    'Badmouth competitors or other investors',
                    'Exaggerate metrics or make false claims',
                    'Be pushy or aggressive'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                      <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Timing */}
            <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#c9a227]" /> Timing & Cadence
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-[#c9a227] font-semibold mb-2">Best Days/Times</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Tuesday-Thursday</li>
                    <li>• 9-11 AM or 2-4 PM Dubai time</li>
                    <li>• Avoid Mondays and Fridays</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[#c9a227] font-semibold mb-2">Follow-Up Cadence</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• 1st follow-up: 5-7 days</li>
                    <li>• 2nd follow-up: 7-10 days</li>
                    <li>• After 3x: Move to nurture list</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[#c9a227] font-semibold mb-2">Timeline</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Start 4-6 months before needed</li>
                    <li>• Expect 2-4 months to close</li>
                    <li>• 50 targets → 10 meetings → 1-2 terms</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <GlobalFooter />
    </div>
  );
}
