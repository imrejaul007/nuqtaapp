'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Target, TrendingUp, Users, DollarSign, Building2, Mail,
  Linkedin, Globe, Star, Calendar, ArrowLeft, Briefcase,
  ArrowRight, Zap, ChevronDown, ChevronRight, Phone,
  Sparkles, MapPin, CheckCircle, Clock, AlertTriangle,
  Send, Copy, Filter, Search, Award, Rocket, Shield,
  MessageSquare, BookOpen, Layers, Hash, Eye, Store
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ============================================
// TYPES
// ============================================
type SectionTab = 'readiness' | 'target-list' | 'angels' | 'accelerators' | 'platforms' | 'outreach' | 'playbook' | 'pipeline' | 'government';

interface InvestorContact {
  name: string;
  title: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

interface Investor {
  id: string;
  name: string;
  type: 'vc' | 'angel' | 'micro-vc' | 'accelerator' | 'angel-network' | 'government';
  stage: string[];
  checkSize: string;
  focus: string[];
  location: string;
  website: string;
  portfolio: string[];
  contacts: InvestorContact[];
  priority: 'high' | 'medium' | 'low';
  rezFit: string;
  customPitch: string;
}

// ============================================
// HELPER FUNCTIONS
// ============================================
const formatINR = (n: number) => {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(1)}Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(1)}L`;
  if (n >= 1000) return `₹${(n / 1000).toFixed(0)}K`;
  return `₹${n}`;
};

// ============================================
// DATA: TIER 1 — INDIAN MICRO-VC FUNDS (Pre-Seed / Seed)
// ============================================
const microVCFunds: Investor[] = [
  {
    id: '100x-vc',
    name: '100X.VC',
    type: 'micro-vc',
    stage: ['Pre-Seed'],
    checkSize: '₹1.25 Cr (iSAFE)',
    focus: ['Consumer Tech', 'Fintech', 'D2C', 'SaaS', 'Marketplace'],
    location: 'Mumbai',
    website: 'https://100x.vc',
    portfolio: ['Dunzo (early)', 'BharatPe (early)', 'Jar', 'OneCode', 'Dozee'],
    contacts: [
      { name: 'Sanjay Mehta', title: 'Founder & Managing Partner', linkedin: 'sanjaymehta100x', twitter: '100aborz' },
      { name: 'Shashank Randev', title: 'Founding Partner', linkedin: 'shashankrandev' },
    ],
    priority: 'high',
    rezFit: '100X.VC backed Dunzo (hyperlocal) and BharatPe (merchant payments). ReZ combines both — hyperlocal commerce with merchant-funded rewards. Their iSAFE structure matches our $500K round perfectly.',
    customPitch: `Hi Sanjay,

ReZ is building India's closed-loop cashback ecosystem for hyperlocal commerce — think "PhonePe meets Swiggy" with merchant-funded rewards.

Why 100X.VC fit:
• You backed Dunzo (hyperlocal) + BharatPe (merchants) — ReZ sits at the intersection
• ₹1.25Cr iSAFE aligns perfectly with our $500K raise at $5M cap
• We're live in Bangalore with 4 zones, 12 acquisition channels, CAC < ₹76

Metrics: 35K users Y1, ₹10Cr revenue Y1, 51.3x LTV:CAC. No VC subsidy — merchants fund the rewards.

Would love 20 minutes to share our deck.

— Rejaul Karim, Founder, ReZ`
  },
  {
    id: 'india-quotient',
    name: 'India Quotient',
    type: 'micro-vc',
    stage: ['Pre-Seed', 'Seed'],
    checkSize: '$200K - $500K',
    focus: ['Bharat-first', 'Consumer', 'Commerce', 'Fintech'],
    location: 'Mumbai',
    website: 'https://indiaquotient.in',
    portfolio: ['ShareChat', 'Sugar Cosmetics', 'Lendingkart', 'CoinDCX', 'KhataBook'],
    contacts: [
      { name: 'Anand Lunia', title: 'Founding Partner', linkedin: 'anandlunia', twitter: 'anandlunia' },
      { name: 'Madhukar Sinha', title: 'Founding Partner', linkedin: 'madhukarsinha', twitter: 'madhukarsinha' },
    ],
    priority: 'high',
    rezFit: 'India Quotient is famous for "Bharat-first" investing — products for India\'s mass market. ReZ targets local merchants and price-conscious consumers with ₹650 AOV. Their thesis of "India will build differently" matches our closed-loop coin economy.',
    customPitch: `Hi Anand,

You've championed "Bharat-first" products — ReZ is exactly that for local commerce.

The insight: Indian consumers spend ₹42L Cr/year at local shops but earn nothing back. We built a closed-loop cashback ecosystem where merchants fund 5% commission, users earn ReZ Coins, and everyone wins.

Why it's Bharat-first:
• ₹650 AOV — not luxury, everyday commerce
• Works for darshinis, kiranas, pharmacies — not just metros
• WhatsApp-first viral loop, not Instagram-dependent
• Bangalore launch: BTM, HSR, Koramangala, Jayanagar — real India

$500K SAFE at $5M cap. 35K users Y1. Would love to share our model.

— Rejaul, Founder, ReZ`
  },
  {
    id: 'titan-capital',
    name: 'Titan Capital',
    type: 'micro-vc',
    stage: ['Pre-Seed', 'Seed'],
    checkSize: '$100K - $500K',
    focus: ['Consumer Tech', 'Fintech', 'Health', 'EdTech'],
    location: 'New Delhi',
    website: 'https://www.titancapital.vc',
    portfolio: ['Ola', 'Snapdeal', 'FreeCharge', 'Mamaearth', 'LetsTransport'],
    contacts: [
      { name: 'Snapdeal Founders (Kunal Bahl & Rohit Bansal)', title: 'Founding Partners', linkedin: 'kunalbahl', twitter: 'kunaborz' },
    ],
    priority: 'high',
    rezFit: 'Kunal & Rohit built Snapdeal — India\'s largest marketplace at one point. They deeply understand merchant acquisition, hyperlocal logistics, and consumer commerce. ReZ\'s merchant onboarding playbook would resonate.',
    customPitch: `Hi Kunal,

You built Snapdeal and understand Indian commerce better than most. ReZ is the next evolution — not competing with marketplaces, but making local merchants win.

Unlike Swiggy/Zomato (30% commission, merchants lose), ReZ charges 5% and gives it back as cashback to consumers. Merchants keep their margins. Users get rewards. We make money from volume, not extraction.

Bangalore pilot: 4 zones, 500+ merchants in pipeline, 12 acquisition channels.
$500K SAFE at $5M cap.

Would love your guidance on scaling commerce in India.

— Rejaul`
  },
  {
    id: 'blume-ventures',
    name: 'Blume Ventures',
    type: 'vc',
    stage: ['Pre-Seed', 'Seed', 'Pre-Series A'],
    checkSize: '$200K - $2M',
    focus: ['Consumer', 'Commerce', 'Fintech', 'SaaS', 'Deep Tech'],
    location: 'Mumbai / Bangalore',
    website: 'https://blume.vc',
    portfolio: ['Unacademy', 'Slice', 'Dunzo', 'Purplle', 'Carbon Clean', 'GreyOrange'],
    contacts: [
      { name: 'Karthik Reddy', title: 'Managing Partner', linkedin: 'karthikreddy', twitter: 'bfreak' },
      { name: 'Sanjay Nath', title: 'Managing Partner', linkedin: 'sanjaynath' },
      { name: 'Sajith Pai', title: 'Partner', linkedin: 'sajithpai', twitter: 'sajithpai' },
    ],
    priority: 'high',
    rezFit: 'Blume backed Dunzo (hyperlocal, Bangalore-first) and Slice (fintech rewards). ReZ combines both theses — hyperlocal commerce with a rewards/coin economy. Blume is the top pre-seed fund in India and actively invests in Bangalore-based startups.',
    customPitch: `Hi Karthik,

Blume backed Dunzo when it was a WhatsApp bot in Bangalore. ReZ has the same DNA — starting hyperlocal in Bangalore, same neighborhoods (BTM, HSR, Koramangala).

The difference: We're not burning cash on delivery. We're building the rewards layer for local commerce. Merchants fund the cashback (5% commission), users earn ReZ Coins, and we monetize through promoted listings + merchant SaaS.

Think: "Dunzo's local merchant network + Slice's rewards" = ReZ.

$500K SAFE at $5M cap. Would love to chat — especially given Blume's Bangalore presence.

— Rejaul`
  },
  {
    id: '3one4-capital',
    name: '3one4 Capital',
    type: 'vc',
    stage: ['Seed', 'Series A'],
    checkSize: '$500K - $5M',
    focus: ['Consumer', 'Commerce', 'Fintech', 'Enterprise'],
    location: 'Bangalore',
    website: 'https://3one4.com',
    portfolio: ['Dunzo', 'Licious', 'DarwinBox', 'Koo', 'Open Financial'],
    contacts: [
      { name: 'Pranav Pai', title: 'Founding Partner', linkedin: 'pranavpai', twitter: 'pranavpai' },
      { name: 'Siddarth Pai', title: 'Founding Partner', linkedin: 'siddarthpai', twitter: 'saborz' },
    ],
    priority: 'high',
    rezFit: '3one4 is Bangalore\'s most respected fund. They backed Dunzo (hyperlocal delivery) and Licious (D2C meat). ReZ sits at the intersection of hyperlocal + consumer commerce, right in their backyard.',
    customPitch: `Hi Pranav,

3one4 backed Dunzo from Bangalore — ReZ is the next chapter of hyperlocal commerce here.

While Dunzo solved delivery, ReZ solves discovery + rewards. We're building a closed-loop cashback ecosystem where local merchants (darshinis to salons) acquire customers through us at 5% commission — 6x cheaper than Swiggy.

Bangalore launch: BTM, HSR, Koramangala, Jayanagar — 500+ merchants mapped.
$500K SAFE at $5M cap. 35K users Y1, path to 5M by Y3.

As a Bangalore fund, you'd see our traction first-hand. Happy to walk you through the model.

— Rejaul`
  },
  {
    id: 'antler-india',
    name: 'Antler India',
    type: 'accelerator',
    stage: ['Pre-Seed'],
    checkSize: '$150K - $250K',
    focus: ['All Sectors', 'Consumer', 'B2B', 'Deep Tech'],
    location: 'Bangalore',
    website: 'https://www.antler.co/location/india',
    portfolio: ['100+ Indian startups across cohorts'],
    contacts: [
      { name: 'Rajiv Srivatsa', title: 'Partner, Antler India', linkedin: 'rajivsrivatsa', twitter: 'rajivsrivatsa' },
      { name: 'Nitin Sharma', title: 'Partner', linkedin: 'nitinsharma' },
    ],
    priority: 'high',
    rezFit: 'Antler India (Bangalore HQ) runs India\'s largest pre-seed program. Rajiv Srivatsa co-founded Urban Ladder — he understands building consumer businesses in India. ReZ can apply for their next cohort or seek direct investment.',
    customPitch: `Hi Rajiv,

You built Urban Ladder in Bangalore — you know the challenge of connecting consumers with local businesses. ReZ is tackling this for everyday commerce.

We're building India's cashback ecosystem for hyperlocal — merchants fund 5% commission, consumers earn ReZ Coins, and we create a virtuous flywheel that compounds.

Why Antler fits:
• Bangalore-based, like us — you can see our traction weekly
• Pre-seed stage aligns perfectly
• Your Urban Ladder experience = exactly the mentorship we need for local commerce scaling

$500K SAFE at $5M cap. Would love to apply or discuss a direct investment.

— Rejaul`
  },
  {
    id: 'ajvc',
    name: 'AJVC (AngelList India VC)',
    type: 'micro-vc',
    stage: ['Pre-Seed', 'Seed'],
    checkSize: '$50K - $250K',
    focus: ['Consumer', 'SaaS', 'Fintech', 'D2C'],
    location: 'Bangalore',
    website: 'https://ajvc.fund',
    portfolio: ['Early-stage portfolio across consumer and SaaS'],
    contacts: [
      { name: 'Aviral Bhatnagar', title: 'General Partner', linkedin: 'aviralbhatnagar', twitter: 'aviralbhat' },
    ],
    priority: 'medium',
    rezFit: 'AJVC is a Bangalore-based micro-VC that invests at the earliest stages. Their consumer thesis and Bangalore presence makes them a natural fit for ReZ\'s hyperlocal commerce model.',
    customPitch: `Hi Aviral,

AJVC's consumer thesis + Bangalore presence = perfect for ReZ.

We're building a closed-loop cashback ecosystem for hyperlocal commerce in Bangalore. 500+ merchants mapped across BTM, HSR, Koramangala, Jayanagar.

$500K SAFE at $5M cap. Quick meeting to share our traction?

— Rejaul`
  },
  {
    id: 'better-capital',
    name: 'Better Capital',
    type: 'micro-vc',
    stage: ['Pre-Seed'],
    checkSize: '₹50L - ₹1Cr',
    focus: ['Consumer', 'Fintech', 'SaaS', 'Health'],
    location: 'Remote / India',
    website: 'https://better.capital',
    portfolio: ['Refyne', 'KhataBook (early)', 'Classplus', 'Teachmint'],
    contacts: [
      { name: 'Vaibhav Domkundwar', title: 'Founder & CEO', linkedin: 'vaibhavdomkundwar', twitter: 'vaibhavd' },
    ],
    priority: 'medium',
    rezFit: 'Better Capital focuses on pre-seed with strong founder support. Vaibhav is hands-on with portfolio companies. ReZ\'s merchant commerce model aligns with their consumer fintech thesis.',
    customPitch: `Hi Vaibhav,

Better Capital's founder-first approach is exactly what ReZ needs at this stage.

Building India's cashback ecosystem for local commerce. Merchant-funded rewards (5% commission), no VC subsidy burn. Bangalore launch with 4 zones mapped.

$500K SAFE at $5M cap. Would love your perspective.

— Rejaul`
  },
  {
    id: 'first-cheque',
    name: 'First Cheque (Favcy)',
    type: 'micro-vc',
    stage: ['Pre-Seed'],
    checkSize: '₹25L - ₹75L',
    focus: ['Consumer', 'D2C', 'SaaS', 'Deep Tech'],
    location: 'Delhi / Bangalore',
    website: 'https://firstcheque.vc',
    portfolio: ['Pre-seed portfolio of 100+ startups'],
    contacts: [
      { name: 'Yamini Bhat', title: 'Partner', linkedin: 'yaminibhat' },
    ],
    priority: 'medium',
    rezFit: 'First Cheque invests at the earliest stages with a quick decision process. Good option for a smaller check as part of a broader round.',
    customPitch: `Hi team,

ReZ is building India's cashback layer for local commerce. Bangalore-first, merchant-funded, 35K users Y1 target.

$500K SAFE at $5M cap. Looking for our first institutional cheque.

— Rejaul`
  },
  {
    id: 'venture-catalysts',
    name: 'Venture Catalysts (VCats)',
    type: 'micro-vc',
    stage: ['Pre-Seed', 'Seed'],
    checkSize: '₹50L - ₹3Cr',
    focus: ['Consumer', 'E-commerce', 'Fintech', 'EdTech', 'Health'],
    location: 'Mumbai',
    website: 'https://venturecatalysts.in',
    portfolio: ['BharatPe', 'Beardo', 'Zostel', 'mFine', 'PeeSafe'],
    contacts: [
      { name: 'Dr. Apoorva Ranjan Sharma', title: 'Founder & President', linkedin: 'apoorvaranjansharma' },
      { name: 'Anil Jain', title: 'Managing Partner', linkedin: 'aniljain' },
    ],
    priority: 'medium',
    rezFit: 'VCats backed BharatPe (merchant payments). ReZ is the next layer — making merchants not just accept payments but actively acquire customers through rewards. Natural portfolio extension.',
    customPitch: `Hi Dr. Sharma,

You backed BharatPe — merchant payments. ReZ is the next layer: merchant-led customer acquisition through cashback.

Merchants pay 5% commission (vs 30% on Swiggy). Users earn ReZ Coins. Everyone wins. Bangalore launch with 500+ merchants mapped.

$500K SAFE at $5M cap. VCats' commerce expertise would be invaluable.

— Rejaul`
  },
  {
    id: 'all-in-capital',
    name: 'All In Capital',
    type: 'micro-vc',
    stage: ['Pre-Seed', 'Seed'],
    checkSize: '₹50L - ₹2Cr',
    focus: ['Consumer Internet', 'Fintech', 'SaaS'],
    location: 'Bangalore',
    website: 'https://allincapital.in',
    portfolio: ['Early-stage Bangalore startups'],
    contacts: [
      { name: 'Kushal Bhagia', title: 'Founding Partner', linkedin: 'kushalbhagia' },
    ],
    priority: 'medium',
    rezFit: 'Bangalore-based fund focused on consumer internet — perfect geographic and thesis match for ReZ.',
    customPitch: `Hi Kushal,

All In Capital + ReZ = Bangalore consumer commerce. We're building the rewards layer for local merchants. $500K SAFE at $5M cap.

— Rejaul`
  },
];

// ============================================
// DATA: ANGEL INVESTORS (Indian Startup Founders)
// ============================================
const angelInvestors: Investor[] = [
  {
    id: 'kunal-shah',
    name: 'Kunal Shah',
    type: 'angel',
    stage: ['Pre-Seed', 'Seed'],
    checkSize: '$25K - $100K',
    focus: ['Fintech', 'Consumer', 'Rewards/Loyalty', 'Payments'],
    location: 'Mumbai',
    website: 'https://twitter.com/kunalb11',
    portfolio: ['CRED (Founder)', 'FreeCharge (Founder)', '200+ angel investments'],
    contacts: [
      { name: 'Kunal Shah', title: 'Founder, CRED & FreeCharge', linkedin: 'kunalshah1', twitter: 'kunalb11' },
    ],
    priority: 'high',
    rezFit: 'Kunal built FreeCharge (cashback) and CRED (rewards). He literally invented the rewards-for-payments model in India. ReZ is doing the same for local commerce. If anyone gets our model, it\'s Kunal Shah.',
    customPitch: `Hi Kunal,

You built FreeCharge and CRED — both proved that Indians love rewards. ReZ is applying this insight to the ₹42L Cr local commerce market.

Like CRED rewards credit card users, ReZ rewards local shoppers. But our rewards are merchant-funded (5% commission) — no VC subsidy.

The delta4 framework test: "Can users go back to shopping without cashback?" We believe not.

$500K SAFE at $5M cap. Would be honored to have the rewards pioneer on our cap table.

— Rejaul`
  },
  {
    id: 'vijay-shekhar',
    name: 'Vijay Shekhar Sharma',
    type: 'angel',
    stage: ['Pre-Seed', 'Seed'],
    checkSize: '$50K - $250K',
    focus: ['Payments', 'Commerce', 'Consumer Tech'],
    location: 'Noida',
    website: 'https://twitter.com/vijaborz',
    portfolio: ['Paytm (Founder)', 'Active angel investor in fintech'],
    contacts: [
      { name: 'Vijay Shekhar Sharma', title: 'Founder & CEO, Paytm', linkedin: 'vijayshekhar', twitter: 'vijaborz' },
    ],
    priority: 'high',
    rezFit: 'VSS built Paytm — India\'s largest payments + commerce platform. He understands merchant acquisition at scale (20M+ merchants). ReZ\'s merchant onboarding playbook would resonate deeply.',
    customPitch: `Hi Vijay,

You scaled Paytm to 20M+ merchants. ReZ is building the next layer — turning those merchants into customer acquisition engines through cashback.

Unlike aggregators (30% commission), ReZ charges 5% and makes merchants win. The Paytm QR model proved merchants adopt tech when it helps them earn more.

$500K SAFE at $5M cap. Bangalore launch with 500+ merchants mapped.

— Rejaul`
  },
  {
    id: 'deepinder-goyal',
    name: 'Deepinder Goyal',
    type: 'angel',
    stage: ['Seed'],
    checkSize: '$100K - $500K',
    focus: ['Food', 'Hyperlocal', 'Commerce', 'Consumer'],
    location: 'Delhi',
    website: 'https://twitter.com/deepigoyal',
    portfolio: ['Zomato (Founder)', 'Blinkit acquirer', 'Active angel'],
    contacts: [
      { name: 'Deepinder Goyal', title: 'Founder & CEO, Zomato', linkedin: 'deepindergoyal', twitter: 'deepigoyal' },
    ],
    priority: 'medium',
    rezFit: 'Deepinder built Zomato — the benchmark for hyperlocal food commerce. He knows the pain of high commissions (restaurants hate 25-30% cuts). ReZ\'s 5% model would resonate. However, he may see ReZ as competition.',
    customPitch: `Hi Deepinder,

ReZ isn't competing with Zomato — we're complementary. You own food delivery (high-frequency, high-commission). We own the rewards layer for ALL local commerce (low commission, merchant-first).

Think of ReZ as the loyalty layer that makes your restaurant partners' direct customers more valuable. 5% commission vs 30%.

$500K SAFE at $5M cap. Bangalore-first, same playbook you used.

— Rejaul`
  },
  {
    id: 'sriharsha-majety',
    name: 'Sriharsha Majety',
    type: 'angel',
    stage: ['Seed'],
    checkSize: '$50K - $200K',
    focus: ['Hyperlocal', 'Commerce', 'Logistics'],
    location: 'Bangalore',
    website: 'https://twitter.com/foodieboy',
    portfolio: ['Swiggy (Founder)', 'Selective angel investments'],
    contacts: [
      { name: 'Sriharsha Majety', title: 'Founder & CEO, Swiggy', linkedin: 'sriharsha-majety', twitter: 'foodieboy' },
    ],
    priority: 'medium',
    rezFit: 'Sriharsha built Swiggy from Bangalore — BTM Layout was literally Swiggy\'s first zone. ReZ is launching in the same neighborhoods. He understands hyperlocal unit economics deeply.',
    customPitch: `Hi Sriharsha,

You started Swiggy from BTM Layout. ReZ is starting from BTM, HSR, Koramangala, Jayanagar — same neighborhoods.

But different model: no delivery, no 30% commission. We're the rewards layer for local merchants. 5% commission, cashback to users, merchant-funded growth.

$500K SAFE at $5M cap. As someone who built hyperlocal from Bangalore, your insight would be invaluable.

— Rejaul`
  },
  {
    id: 'girish-mathru',
    name: 'Girish Mathrubootham',
    type: 'angel',
    stage: ['Pre-Seed', 'Seed'],
    checkSize: '$50K - $200K',
    focus: ['SaaS', 'Consumer Tech', 'B2B'],
    location: 'Chennai / Bangalore',
    website: 'https://twitter.com/maborz',
    portfolio: ['Freshworks (Founder)', 'Prolific angel: 90+ investments'],
    contacts: [
      { name: 'Girish Mathrubootham', title: 'Founder, Freshworks', linkedin: 'girishm', twitter: 'maborz' },
    ],
    priority: 'medium',
    rezFit: 'Girish is one of India\'s most prolific angel investors (90+ deals). His Freshworks experience (scaling SaaS globally from Chennai) gives great perspective on building platforms. ReZ\'s merchant SaaS component would interest him.',
    customPitch: `Hi Girish,

ReZ has a SaaS angle you'd appreciate — we're building merchant tools (analytics, customer insights, rewards management) alongside our consumer cashback platform.

Merchants pay ₹1,500/mo for premium features. Combined with 5% commission from transactions, we create sticky recurring revenue.

$500K SAFE at $5M cap. Bangalore launch.

— Rejaul`
  },
  {
    id: 'nithin-kamath',
    name: 'Nithin Kamath',
    type: 'angel',
    stage: ['Seed'],
    checkSize: '$50K - $500K',
    focus: ['Fintech', 'Consumer Tech', 'Bangalore Startups'],
    location: 'Bangalore',
    website: 'https://twitter.com/Nithin0dha',
    portfolio: ['Zerodha (Founder)', 'Rainmatter Fund', 'Ditto', 'Smallcase'],
    contacts: [
      { name: 'Nithin Kamath', title: 'Founder & CEO, Zerodha', linkedin: 'nithinkamath', twitter: 'Nithin0dha' },
    ],
    priority: 'high',
    rezFit: 'Nithin runs Rainmatter — Zerodha\'s fund investing in Bangalore startups. He\'s deeply involved in the Bangalore ecosystem. ReZ being Bangalore-first makes this a strong fit. His fintech background aligns with our coin/payments model.',
    customPitch: `Hi Nithin,

As Bangalore's most celebrated founder, you know this city's consumer potential better than anyone.

ReZ is building the cashback layer for Bangalore's local commerce — starting from BTM, HSR, Koramangala, Jayanagar. 500+ merchants mapped, 12 acquisition channels.

Our coin economy (ReZ Coins) has fintech DNA — earned from merchants, spent like currency, with built-in breakage margins.

$500K SAFE at $5M cap. Would love Rainmatter's perspective.

— Rejaul`
  },
  {
    id: 'mekin-maheshwari',
    name: 'Mekin Maheshwari',
    type: 'angel',
    stage: ['Pre-Seed', 'Seed'],
    checkSize: '$25K - $100K',
    focus: ['Consumer Tech', 'Commerce', 'EdTech'],
    location: 'Bangalore',
    website: 'https://twitter.com/meaborz',
    portfolio: ['Flipkart (ex-CPO)', 'Udhyam Learning Foundation', 'Active angel'],
    contacts: [
      { name: 'Mekin Maheshwari', title: 'ex-CPO Flipkart, Angel Investor', linkedin: 'mekin', twitter: 'meaborz' },
    ],
    priority: 'medium',
    rezFit: 'Mekin was Flipkart\'s CPO — he built India\'s largest e-commerce platform\'s product. His commerce + product expertise would be invaluable for ReZ\'s consumer app and merchant tools.',
    customPitch: `Hi Mekin,

As Flipkart's ex-CPO, you built India's commerce product playbook. ReZ is applying similar thinking to offline/hyperlocal commerce.

Our app combines discovery, ordering, and a coin-based rewards system — product complexity that needs a strong product vision.

$500K SAFE at $5M cap. Your product expertise would shape our roadmap.

— Rejaul`
  },
  {
    id: 'neeraj-arora',
    name: 'Neeraj Arora',
    type: 'angel',
    stage: ['Seed'],
    checkSize: '$100K - $1M',
    focus: ['Consumer', 'Messaging', 'Commerce', 'Fintech'],
    location: 'Bangalore',
    website: 'https://twitter.com/naborz',
    portfolio: ['WhatsApp (ex-CBO, $19B acquisition)', 'Active angel in India'],
    contacts: [
      { name: 'Neeraj Arora', title: 'ex-CBO WhatsApp, Angel Investor', linkedin: 'neerajarora' },
    ],
    priority: 'medium',
    rezFit: 'Neeraj was WhatsApp\'s business head during the $19B acquisition. ReZ\'s WhatsApp-first acquisition strategy (viral loops, business API, group marketing) is core to our growth. His WhatsApp expertise = direct strategic value.',
    customPitch: `Hi Neeraj,

WhatsApp is ReZ's #1 acquisition channel. We're building viral loops (share deals → earn coins), broadcast marketing, and group-based local commerce — all through WhatsApp.

Your experience scaling WhatsApp Business would directly shape our growth playbook. We target 4,000 users from WhatsApp alone in Y1.

$500K SAFE at $5M cap. Bangalore-first.

— Rejaul`
  },
];

// ============================================
// DATA: ACCELERATORS & INCUBATORS
// ============================================
const accelerators = [
  {
    name: 'Y Combinator',
    checkSize: '$500K (standard deal)',
    equity: '7%',
    location: 'San Francisco (remote-friendly)',
    focus: 'All sectors — strong hyperlocal/commerce track record',
    portfolio: 'Razorpay, Meesho, ClearTax, Groww, Khatabook',
    apply: 'ycombinator.com/apply — Rolling batches (Winter/Summer)',
    rezFit: 'YC backed Razorpay (Indian payments), Meesho (social commerce), Groww (fintech). ReZ\'s model would stand out — merchant-funded cashback is differentiated.',
    priority: 'high' as const,
    timeline: 'Apply 2-3 months before batch start',
  },
  {
    name: 'Antler India',
    checkSize: '$150K - $250K',
    equity: '8-10%',
    location: 'Bangalore',
    focus: 'All sectors — pre-idea to pre-seed',
    portfolio: '100+ Indian startups',
    apply: 'antler.co/location/india — Cohort-based (3 per year)',
    rezFit: 'Bangalore-based, perfect for ReZ. Rajiv Srivatsa (co-founder Urban Ladder) leads — understands local commerce.',
    priority: 'high' as const,
    timeline: 'Apply for next Bangalore cohort',
  },
  {
    name: 'Techstars India / Bangalore',
    checkSize: '$120K',
    equity: '6%',
    location: 'Bangalore / Virtual',
    focus: 'Commerce, Fintech, Deep Tech',
    portfolio: 'Global portfolio of 3,600+ companies',
    apply: 'techstars.com — Rolling applications',
    rezFit: 'Techstars has run India-specific programs. Strong mentor network for commerce startups.',
    priority: 'medium' as const,
    timeline: 'Check for next India-focused program',
  },
  {
    name: 'NSRCEL (IIM Bangalore)',
    checkSize: '₹5-20L grant + incubation',
    equity: '0-2%',
    location: 'Bangalore (IIM-B campus)',
    focus: 'Commerce, Social Impact, Tech',
    portfolio: 'Incubated 400+ startups',
    apply: 'nsrcel.org — Rolling applications',
    rezFit: 'Bangalore-based, IIM-B network access, minimal dilution. Perfect for early validation support.',
    priority: 'high' as const,
    timeline: 'Apply immediately — rolling basis',
  },
  {
    name: 'NASSCOM 10,000 Startups',
    checkSize: 'Mentorship + AWS/Cloud credits + investor connects',
    equity: '0%',
    location: 'Pan-India (Bangalore hub)',
    focus: 'Tech startups, Commerce, AI',
    portfolio: '10,000+ startups supported',
    apply: 'nasscom.in/startups — Apply anytime',
    rezFit: 'No equity, great for cloud credits and investor introductions. NASSCOM brand adds credibility.',
    priority: 'medium' as const,
    timeline: 'Apply immediately',
  },
  {
    name: 'Startup India Seed Fund (SISFS)',
    checkSize: '₹20L - ₹50L',
    equity: 'Convertible debentures',
    location: 'Pan-India',
    focus: 'DPIIT-registered startups',
    portfolio: 'Government-backed, 300+ incubators participate',
    apply: 'seedfund.startupindia.gov.in — Through approved incubators',
    rezFit: 'Non-dilutive funding. Requires DPIIT registration. Can stack with VC funding.',
    priority: 'high' as const,
    timeline: 'Register on DPIIT first, then apply through incubator',
  },
  {
    name: 'T-Hub (Telangana)',
    checkSize: 'Incubation + ₹10-25L grants',
    equity: '0-2%',
    location: 'Hyderabad (accessible from Bangalore)',
    focus: 'Commerce, Fintech, Enterprise',
    portfolio: '1,100+ startups incubated',
    apply: 't-hub.co — Cohort applications',
    rezFit: 'Good for Hyderabad expansion. Strong government backing and corporate connections.',
    priority: 'low' as const,
    timeline: 'Consider after Bangalore traction',
  },
  {
    name: 'Google for Startups Accelerator India',
    checkSize: '$0 cash + $200K Google Cloud credits + mentorship',
    equity: '0%',
    location: 'Bangalore (Google India)',
    focus: 'AI/ML, Commerce, Fintech',
    portfolio: 'Selected startups get Google mentorship',
    apply: 'startup.google.com — Annual program',
    rezFit: 'Zero equity, $200K cloud credits, Google brand credibility. Perfect for technical scaling.',
    priority: 'high' as const,
    timeline: 'Apply for next cohort (usually Q1)',
  },
];

// ============================================
// DATA: INVESTOR PLATFORMS & NETWORKS
// ============================================
const platforms = [
  {
    name: 'LetsVenture',
    type: 'Angel Platform',
    description: 'India\'s largest angel investing platform. 7,000+ angels, 750+ funded startups. Create a campaign, get matched with angels.',
    website: 'letsventure.com',
    cost: '2% success fee on amount raised',
    bestFor: 'Raising from multiple angels simultaneously. Syndicate deals.',
    action: 'Create startup profile → Set campaign → LetsVenture matches with angels → Close commitments',
  },
  {
    name: 'AngelList India',
    type: 'Angel Platform',
    description: 'Global platform with strong India presence. Rolling funds, syndicates, and direct investments.',
    website: 'angel.co / angellist.com',
    cost: 'Free to list, 20% carry for syndicates',
    bestFor: 'US-India cross-border investors. Tech-savvy angels.',
    action: 'Create profile → List raise → Connect with syndicate leads',
  },
  {
    name: 'Indian Angel Network (IAN)',
    type: 'Angel Network',
    description: 'India\'s oldest angel network. 500+ members including top business leaders. Structured investment process.',
    website: 'indianangelnetwork.com',
    cost: '2-5% fee',
    bestFor: 'Credible angels with operating experience. Structured due diligence.',
    action: 'Submit application → Screening → Presentation → Due Diligence → Investment',
  },
  {
    name: 'Mumbai Angels',
    type: 'Angel Network',
    description: 'Premier angel network in western India. 400+ HNI members. Invests ₹50L-₹2Cr.',
    website: 'mumbaiangels.com',
    cost: '2% management fee',
    bestFor: 'Access to Mumbai HNIs, corporate angels, family offices.',
    action: 'Apply online → Screening committee → Pitch to members → Term sheet',
  },
  {
    name: 'Bangalore Angel Network (BAN)',
    type: 'Angel Network',
    description: 'Bangalore\'s local angel network. Members include ex-founders, CXOs from Infosys, Wipro, Flipkart ecosystem.',
    website: 'Apply via referral',
    cost: 'Membership-based',
    bestFor: 'Bangalore-specific investors who understand local market. Can visit your merchants.',
    action: 'Get referral from existing member → Pitch → Investment decision within 4-6 weeks',
  },
  {
    name: 'Headstart Network Foundation',
    type: 'Community',
    description: 'India\'s largest startup community. Runs Demo Days, Startup Saturdays across cities.',
    website: 'headstart.in',
    cost: 'Free',
    bestFor: 'Visibility, community building, meeting early-stage investors informally.',
    action: 'Attend Startup Saturday Bangalore → Apply for Demo Day → Present to investors',
  },
  {
    name: 'TiE Bangalore',
    type: 'Entrepreneur Network',
    description: 'The Indus Entrepreneurs — global network with strong Bangalore chapter. Mentorship + investor connections.',
    website: 'bangalore.tie.org',
    cost: 'Membership fee',
    bestFor: 'Mentorship from seasoned entrepreneurs. Access to TiE angels and TiECon events.',
    action: 'Join as startup member → Attend events → Apply for TiE mentorship → Pitch at TiECon',
  },
];

// ============================================
// DATA: GOVERNMENT GRANTS & PROGRAMS
// ============================================
type GrantCategory = 'central' | 'state' | 'incubator' | 'corporate' | 'tax';
const governmentPrograms: { name: string; amount: string; type: string; eligibility: string; process: string; timeline: string; rezAction: string; priority: 'high' | 'medium' | 'low'; category: GrantCategory; docs: string[] }[] = [
  // ── CENTRAL GOVERNMENT ──
  {
    name: 'Startup India Seed Fund Scheme (SISFS)',
    amount: '₹20L - ₹50L',
    type: 'Convertible Debentures / Equity',
    eligibility: 'DPIIT registered, < 2 years old, not received > ₹10L funding',
    process: 'Register on DPIIT → Apply through approved incubator → Incubator evaluates → Government disburses',
    timeline: 'Rolling applications, 4-8 weeks processing',
    rezAction: 'Register as DPIIT startup immediately. Apply through NSRCEL (IIM-B) or IIIT-B incubator.',
    priority: 'high', category: 'central',
    docs: ['DPIIT Certificate', 'Certificate of Incorporation', 'PAN Card', 'Business Plan', 'Pitch Deck', 'Bank Account Details'],
  },
  {
    name: 'SIDBI Fund of Funds for Startups (FFS)',
    amount: 'Indirect — ₹10,000 Cr corpus invests through SEBI-registered AIFs',
    type: 'Equity (through VC/AIF)',
    eligibility: 'DPIIT-registered startup, raise through an FFS-backed AIF/VC',
    process: 'Get funded by a SIDBI FFS-backed fund (100Cheeks, Kalaari, Blume, Chiratae are FFS recipients) → SIDBI provides matching capital to the fund',
    timeline: 'Ongoing — when your VC raises from SIDBI',
    rezAction: 'Target VCs that are SIDBI FFS recipients. 100Cheeks, Kalaari, Chiratae, Blume all have SIDBI backing — makes them more likely to fund early-stage.',
    priority: 'medium', category: 'central',
    docs: ['DPIIT Certificate', 'Standard VC due diligence docs'],
  },
  {
    name: 'MEITY TIDE 2.0 (Technology Incubation)',
    amount: '₹7L per startup + incubation support',
    type: 'Grant (non-dilutive)',
    eligibility: 'Tech startup, apply through MEITY-funded incubator (NSRCEL, IIIT-B qualify)',
    process: 'Apply through MEITY-incubator → Selection → 6-12 month incubation + grant → Graduation',
    timeline: 'Rolling through incubators',
    rezAction: 'Apply through NSRCEL or IIIT-B Innovation Centre — both are MEITY TIDE 2.0 centres. ReZ qualifies as digital commerce tech.',
    priority: 'medium', category: 'central',
    docs: ['DPIIT Certificate', 'Business Plan', 'Product Demo/Prototype', 'Team Details'],
  },
  {
    name: 'MEITY Startup Hub (MSH)',
    amount: '₹25L - ₹1Cr',
    type: 'Grant + Equity',
    eligibility: 'Tech-focused startup, Indian incorporated, working on emerging tech / digital commerce',
    process: 'Apply on meity.gov.in → Screening → Pitch → Award',
    timeline: 'Multiple programs throughout the year',
    rezAction: 'Apply under Digital Commerce / Fintech track. ReZ is a strong fit for the "Digital India" narrative.',
    priority: 'medium', category: 'central',
    docs: ['DPIIT Certificate', 'Detailed Project Report', 'Financial Projections', 'Team Credentials', 'Product Architecture'],
  },
  {
    name: 'DST-NIDHI Prayas (Dept of Science & Tech)',
    amount: '₹10L per idea',
    type: 'Grant (non-dilutive)',
    eligibility: 'Innovator with prototype, apply through Technology Business Incubator (TBI)',
    process: 'Apply through TBI (IISc-SID, NSRCEL qualify) → Evaluation → Grant for prototype development',
    timeline: 'Rolling, 6-8 weeks',
    rezAction: 'Apply through IISc SID or NSRCEL. Position ReZ as commerce tech innovation requiring prototype scaling.',
    priority: 'medium', category: 'central',
    docs: ['Innovation Brief', 'Prototype Details', 'Budget Breakdown', 'Team Profiles'],
  },
  {
    name: 'DST-NIDHI Seed Support System (SSS)',
    amount: '₹25L - ₹1Cr',
    type: 'Loan / Equity',
    eligibility: 'Incubated startup with validated prototype, < 3 years old',
    process: 'Get incubated at DST-recognized TBI → Apply for SSS → Committee evaluation → Funding',
    timeline: '4-8 weeks after incubation',
    rezAction: 'First get incubated at NSRCEL/IIIT-B (DST-recognized). Then apply for SSS as follow-on to NIDHI Prayas.',
    priority: 'medium', category: 'central',
    docs: ['Incubation Certificate', 'Product Validation Data', 'Financial Model', 'IP Details'],
  },
  {
    name: 'Atal Innovation Mission (AIM / NITI Aayog)',
    amount: '₹10L + incubation support',
    type: 'Grant + Mentorship',
    eligibility: 'Innovative startup, any stage',
    process: 'Apply through AIM portal → Selection → Incubation at AIC',
    timeline: 'Rolling',
    rezAction: 'Apply to Atal Incubation Centre in Bangalore (AIC-IIITB or AIC-CCL). Good for credibility and mentorship.',
    priority: 'low', category: 'central',
    docs: ['Business Plan', 'Innovation Brief', 'Prototype Details', 'Team Details'],
  },
  {
    name: 'CGTMSE (Credit Guarantee for MSMEs)',
    amount: 'Guarantee on loans up to ₹5Cr (collateral-free)',
    type: 'Credit Guarantee (loan facilitation)',
    eligibility: 'MSME-registered, new or existing enterprise',
    process: 'Apply through any bank (SBI, HDFC, ICICI) → Bank processes loan → CGTMSE provides guarantee (no collateral needed)',
    timeline: '2-4 weeks through bank',
    rezAction: 'Get MSME Udyam registration first. Then apply for collateral-free loan through HDFC/SBI. Good for working capital once revenue starts.',
    priority: 'low', category: 'central',
    docs: ['Udyam Registration', 'Bank Statements', 'Financial Projections', 'GST Registration', 'ITR'],
  },
  {
    name: 'Startup Intellectual Property Protection (SIPP)',
    amount: '80% rebate on patent filing + 50% rebate on trademark',
    type: 'IP Subsidy',
    eligibility: 'DPIIT-registered startup',
    process: 'File patent/trademark through SIPP-empanelled facilitator → Government reimburses 80% (patent) / 50% (trademark)',
    timeline: 'Ongoing — file anytime after DPIIT registration',
    rezAction: 'File "ReZ" trademark through SIPP for 50% rebate. If filing any patents for the coin/rewards system, get 80% rebate. Essential for brand protection.',
    priority: 'high', category: 'central',
    docs: ['DPIIT Certificate', 'Patent/Trademark Application', 'Facilitator Selection'],
  },
  {
    name: 'Stand-Up India',
    amount: '₹10L - ₹1Cr (loan)',
    type: 'Bank Loan (subsidized)',
    eligibility: 'SC/ST/Women entrepreneur, new enterprise',
    process: 'Apply through any bank → Subsidy from government → Repayment over 7 years',
    timeline: 'Ongoing',
    rezAction: 'Check eligibility. Low-interest loan can supplement equity funding.',
    priority: 'low', category: 'central',
    docs: ['Category Certificate', 'Business Plan', 'Bank Account', 'Aadhaar/PAN'],
  },
  // ── KARNATAKA STATE SCHEMES ──
  {
    name: 'Karnataka Elevate 100',
    amount: '₹50L grant',
    type: 'Grant (non-dilutive)',
    eligibility: 'Karnataka-registered, innovative product, < 5 years old',
    process: 'Apply on elevate100.karnataka.gov.in → Evaluation by expert panel → Shortlist 100 startups → Grant disbursed in tranches',
    timeline: 'Annual program, usually applications open Q3 (Jul-Sep)',
    rezAction: 'MUST APPLY — Bangalore-based, commerce innovation, ₹50L non-dilutive. Perfect for ReZ. Prepare application when next cycle opens.',
    priority: 'high', category: 'state',
    docs: ['Karnataka CoI', 'Product Demo', 'Business Plan', 'Financial Projections', 'Team Details', 'Innovation Brief'],
  },
  {
    name: 'Startup Karnataka — Idea2PoC Grant',
    amount: '₹5L - ₹20L',
    type: 'Grant (non-dilutive)',
    eligibility: 'Karnataka-registered startup with innovative idea/early prototype',
    process: 'Register on startupcell.karnataka.gov.in → Apply for Idea2PoC → Expert evaluation → Grant for prototype development',
    timeline: 'Rolling applications through Startup Cell',
    rezAction: 'Register on Karnataka Startup Cell portal first. Apply for Idea2PoC grant — good for initial product development funding.',
    priority: 'high', category: 'state',
    docs: ['Karnataka Startup Cell Registration', 'CoI', 'Innovation Description', 'Budget for PoC'],
  },
  {
    name: 'KITS (Karnataka IT/BT Startup) Grant',
    amount: '₹10L - ₹30L',
    type: 'Grant',
    eligibility: 'IT/BT startup registered in Karnataka, product-stage',
    process: 'Apply through Karnataka IT department → Department evaluation → Disbursal',
    timeline: 'Ongoing',
    rezAction: 'Register as IT startup in Karnataka. Apply for product development grant. Good supplement to Elevate 100.',
    priority: 'medium', category: 'state',
    docs: ['Karnataka CoI', 'IT Product Details', 'Financial Projections'],
  },
  {
    name: 'Karnataka Digital Economy Mission (KDEM)',
    amount: 'Mentorship + networking + ₹5L-₹15L grants',
    type: 'Incubation + Grant',
    eligibility: 'Digital/tech startup in Karnataka, focus on digital economy',
    process: 'Apply on KDEM portal → Screening → Join program → Access grants and corporates',
    timeline: 'Cohort-based, 2-3x per year',
    rezAction: 'Strong fit — ReZ is literally building digital economy infrastructure for local commerce. Apply when next cohort opens.',
    priority: 'medium', category: 'state',
    docs: ['CoI', 'Product Demo', 'Business Model', 'Team Details'],
  },
  {
    name: 'Karnataka Startup Policy — Marketing Support',
    amount: 'Up to ₹5L reimbursement for marketing/exhibition costs',
    type: 'Reimbursement',
    eligibility: 'Karnataka Startup Cell registered startup',
    process: 'Participate in approved exhibitions/events → Submit bills → Get reimbursement',
    timeline: 'Ongoing (post-event)',
    rezAction: 'Claim reimbursement for college fest events, startup conferences, and demo days. Can recover event costs.',
    priority: 'medium', category: 'state',
    docs: ['Event Participation Proof', 'Bills/Invoices', 'Startup Cell Registration'],
  },
  // ── INCUBATOR PROGRAMS ──
  {
    name: 'NSRCEL (IIM Bangalore)',
    amount: '₹5L - ₹20L grant + incubation + IIM-B mentors',
    type: 'Incubation + Seed Grant',
    eligibility: 'Innovative startup, any stage. Competitive selection.',
    process: 'Apply on nsrcel.org → Screening committee → Faculty interview → Join incubation (6-12 months) → Access grants + mentors',
    timeline: 'Rolling applications — apply anytime',
    rezAction: 'TOP PRIORITY — IIM-B brand opens every door. NSRCEL incubation = credibility for ALL future fundraises. Gateway to SISFS and DST-NIDHI grants.',
    priority: 'high', category: 'incubator',
    docs: ['Application Form', 'Pitch Deck', 'Business Plan', 'Founder Bio', 'Product Demo'],
  },
  {
    name: 'IISc Society for Innovation & Development (SID)',
    amount: '₹10L - ₹25L + lab access + IISc mentors',
    type: 'Incubation + Grant',
    eligibility: 'Tech startup, preferably with IISc connection or deep-tech angle',
    process: 'Apply on sid.iisc.ac.in → Technical evaluation → Incubation → Access to IISc labs, mentors, and grants',
    timeline: 'Rolling',
    rezAction: 'Apply if you can frame the ReZ Coin system as a technical innovation (tokenomics, recommendation engine, etc.). IISc brand is gold for deep-tech credibility.',
    priority: 'medium', category: 'incubator',
    docs: ['Technical Innovation Brief', 'Product Architecture', 'Business Plan', 'Team Credentials'],
  },
  {
    name: 'IIIT-B Innovation Centre',
    amount: '₹5L - ₹15L + co-working + IIIT-B network',
    type: 'Incubation + Grant',
    eligibility: 'Tech startup in Bangalore, product stage',
    process: 'Apply on icentre.iiitb.ac.in → Selection → 12-month incubation → Access to MEITY TIDE 2.0 grants',
    timeline: 'Rolling',
    rezAction: 'Good alternative to NSRCEL. IIIT-B is a MEITY TIDE 2.0 centre — gives access to additional ₹7L TIDE grant.',
    priority: 'medium', category: 'incubator',
    docs: ['Application Form', 'Product Demo', 'Business Plan'],
  },
  {
    name: 'NASSCOM 10,000 Startups / CoE',
    amount: 'Mentorship + corporate connects + ₹5L-₹10L (via partners)',
    type: 'Incubation + Acceleration',
    eligibility: 'Tech startup, < 5 years, product-market fit or close to it',
    process: 'Apply on nasscom10000startups.com → Screening → Join program → Demo Day with corporates',
    timeline: 'Cohort-based, 3-4x per year',
    rezAction: 'Apply to NASSCOM CoE for Fintech (if available) or Retail Tech. Good for corporate partnership introductions.',
    priority: 'medium', category: 'incubator',
    docs: ['Application Form', 'Pitch Deck', 'Product Demo', 'Traction Metrics'],
  },
  {
    name: 'T-Hub Hyderabad',
    amount: '₹10L - ₹25L + incubation',
    type: 'Incubation + Grant',
    eligibility: 'Tech startup, any geography (Hyderabad presence preferred)',
    process: 'Apply on t-hub.co → Selection → Incubation (6-18 months) → Access to Telangana government grants',
    timeline: 'Rolling',
    rezAction: 'Apply when expanding to Hyderabad (Year 1 M6+). T-Hub is India\'s largest incubator. Good for Telangana market entry.',
    priority: 'low', category: 'incubator',
    docs: ['Application Form', 'Business Plan', 'Pitch Deck', 'Expansion Plan'],
  },
  // ── CORPORATE STARTUP PROGRAMS (Cloud Credits & Tools) ──
  {
    name: 'AWS Activate',
    amount: '$5K - $100K in AWS credits + technical support',
    type: 'Cloud Credits (non-dilutive)',
    eligibility: 'Any startup < 10 years old. Higher tiers need VC/incubator affiliation.',
    process: 'Apply on aws.amazon.com/activate → Self-serve ($5K) or Portfolio ($100K through accelerator/VC) → Credits applied',
    timeline: 'Instant for self-serve, 1-2 weeks for portfolio tier',
    rezAction: 'Apply for self-serve ($5K) immediately. After getting into NSRCEL/accelerator, apply for Portfolio tier ($100K). Use for EC2, Lambda, RDS, S3.',
    priority: 'high', category: 'corporate',
    docs: ['Company Email', 'Website URL', 'Accelerator/VC Name (for portfolio)'],
  },
  {
    name: 'Google for Startups Cloud Program',
    amount: '$2K - $200K in Google Cloud credits + mentorship',
    type: 'Cloud Credits (non-dilutive)',
    eligibility: 'Startup < 5 years, raised < $10M. Higher tiers through accelerator.',
    process: 'Apply on cloud.google.com/startup → $2K auto-approved → $100K-$200K through Google accelerator or VC partner',
    timeline: '1-3 days for basic, 2-4 weeks for accelerator tier',
    rezAction: 'Get $2K immediately. If accepted into Google for Startups Accelerator India, get $200K + 3 months mentorship. Use for Firebase, Maps, BigQuery.',
    priority: 'high', category: 'corporate',
    docs: ['Company Email', 'Website', 'VC/Accelerator Affiliation (for high tier)'],
  },
  {
    name: 'Microsoft for Startups Founders Hub',
    amount: '$1K - $150K in Azure credits + GitHub Enterprise + LinkedIn tools',
    type: 'Cloud Credits + Tools (non-dilutive)',
    eligibility: 'Any startup < 7 years, < $10M revenue',
    process: 'Apply on startups.microsoft.com → Auto-approved for $1K → Upgrade to $150K with milestones/VC backing',
    timeline: 'Instant for basic tier',
    rezAction: 'Get $1K Azure credits immediately. Upgrade path to $150K. Also includes free GitHub Enterprise, VS Code tools, LinkedIn Sales Navigator for investor outreach.',
    priority: 'high', category: 'corporate',
    docs: ['Company Email', 'Website URL'],
  },
  {
    name: 'Razorpay Rize',
    amount: 'Free payment processing (3 months) + ₹5L in credits + mentorship',
    type: 'Fintech Credits + Mentorship',
    eligibility: 'Fintech/commerce startup using Razorpay for payments',
    process: 'Apply on razorpay.com/rize → Selection → 3-month program → Free payment processing + credits',
    timeline: 'Cohort-based, 2-3x per year',
    rezAction: 'MUST APPLY — ReZ will use Razorpay for UPI processing. Free payment processing for 3 months saves ₹2-5L in early stage. Apply when next cohort opens.',
    priority: 'high', category: 'corporate',
    docs: ['Razorpay Account', 'Business Details', 'Product Demo'],
  },
  {
    name: 'Zoho for Startups',
    amount: '₹75K-₹3L worth of Zoho Suite free (1 year)',
    type: 'SaaS Credits',
    eligibility: 'Startup < 3 years, < $1M revenue',
    process: 'Apply on zoho.com/startups → Verification → Full Zoho Suite free for 1 year',
    timeline: '1 week',
    rezAction: 'Get free CRM, email, accounting, HR suite. Replace paid tools with Zoho stack to reduce burn.',
    priority: 'medium', category: 'corporate',
    docs: ['Company Details', 'Incorporation Certificate'],
  },
  {
    name: 'Freshworks for Startups',
    amount: '$10K in Freshworks credits (CRM, helpdesk, marketing)',
    type: 'SaaS Credits',
    eligibility: 'Startup < 2 years, raised < $5M',
    process: 'Apply on freshworks.com/startups → Verification → Credits applied',
    timeline: '1 week',
    rezAction: 'Use for Freshdesk (customer support), Freshsales (CRM), Freshmarketer. Good for merchant/user support.',
    priority: 'medium', category: 'corporate',
    docs: ['Company Email', 'Website', 'VC/Accelerator (optional)'],
  },
  {
    name: 'HubSpot for Startups',
    amount: '90% off HubSpot Suite Year 1, 50% Year 2',
    type: 'SaaS Credits',
    eligibility: 'Startup enrolled in approved accelerator/incubator/VC',
    process: 'Apply through hubspot.com/startups → Need accelerator/VC referral → 90% discount applied',
    timeline: '1-2 weeks',
    rezAction: 'After NSRCEL/accelerator, apply for 90% off HubSpot CRM, Marketing, Sales. Great for investor pipeline management.',
    priority: 'medium', category: 'corporate',
    docs: ['Accelerator/VC Affiliation Proof'],
  },
  {
    name: 'Notion for Startups',
    amount: '$1,000 in Notion credits (6 months free Plus plan)',
    type: 'SaaS Credits',
    eligibility: 'Startup < 2 years',
    process: 'Apply on notion.so/startups → Auto-approved → Credits applied',
    timeline: 'Instant',
    rezAction: 'Use for internal wiki, project management, investor updates. Apply immediately.',
    priority: 'low', category: 'corporate',
    docs: ['Company Email'],
  },
  {
    name: 'Segment for Startups',
    amount: '$25K in Segment credits (free for 1 year)',
    type: 'Analytics Credits',
    eligibility: 'Startup < 2 years, < $5M raised',
    process: 'Apply on segment.com/startups → Verification → Free tier for 1 year',
    timeline: '1-2 weeks',
    rezAction: 'Use for user analytics, event tracking, data pipeline. Essential for tracking acquisition funnel across 12 channels.',
    priority: 'medium', category: 'corporate',
    docs: ['Company Details', 'Product URL'],
  },
  {
    name: 'DigitalOcean Hatch',
    amount: '$10K in DigitalOcean credits',
    type: 'Cloud Credits',
    eligibility: 'Startup < 2 years, product stage',
    process: 'Apply on digitalocean.com/hatch → Approval → Credits applied',
    timeline: '1-2 weeks',
    rezAction: 'Good alternative/supplement to AWS. Use for staging environments, testing servers.',
    priority: 'low', category: 'corporate',
    docs: ['Company Email', 'Website'],
  },
];

// ── TAX BENEFITS (under DPIIT registration) ──
const taxBenefits = [
  { benefit: 'Section 80-IAC — 3 Year Tax Holiday', desc: 'Income tax exemption for 3 consecutive years out of first 10 years from incorporation. Choose the 3 most profitable years.', amount: 'Up to 100% income tax waiver', action: 'File Form-1 application to Inter-Ministerial Board after DPIIT registration.' },
  { benefit: 'Angel Tax Exemption (Section 56(2)(viib))', desc: 'Investments above fair market value are NOT taxed as income. Critical for SAFE/equity rounds.', amount: 'Exemption from tax on premium raised', action: 'File Form-2 after DPIIT registration. Essential BEFORE raising $500K SAFE round.' },
  { benefit: 'Self-Certification for Labor Laws', desc: 'Self-certify compliance for 9 labor laws (no inspector visits for 3-5 years). Reduces compliance burden.', amount: 'Saves ₹50K-₹2L/year in compliance costs', action: 'Automatic with DPIIT — self-certify through Startup India portal annually.' },
  { benefit: 'Self-Certification for Environment Laws', desc: 'Self-certify for 3 environment laws. No need for environmental clearance for tech startups.', amount: 'Saves ₹30K-₹1L in clearances', action: 'Self-certify through portal. ReZ as a platform company has minimal environmental footprint.' },
  { benefit: 'Fast-Track Patent Examination', desc: 'Patent applications examined in 6-12 months instead of 3-5 years. 80% fee rebate through SIPP.', amount: 'Save 80% on patent fees + 3 year faster processing', action: 'File any patents for ReZ Coin system, recommendation engine, or merchant matching algorithm.' },
  { benefit: 'Fast-Track Trademark Registration', desc: 'Priority trademark examination. 50% rebate on trademark fees through SIPP.', amount: 'Save 50% on trademark fees', action: 'File "ReZ" and "ReZ Coins" trademarks immediately through SIPP facilitator.' },
  { benefit: 'Government Tender Exemption', desc: 'Startups can participate in government tenders without prior experience/turnover requirement.', amount: 'Access to government contracts', action: 'Not immediately relevant, but useful if ReZ wants government/PSU merchant accounts.' },
  { benefit: 'Easy Winding Up (90 days)', desc: 'If ReZ doesn\'t work out, company can be wound up in 90 days instead of years. Reduces founder risk.', amount: 'De-risk: clean exit in 90 days if needed', action: 'Just know this exists — peace of mind. File through Insolvency and Bankruptcy Board.' },
];

// ── APPLICATION DOCUMENT CHECKLIST ──
const applicationDocuments = {
  universal: [
    { doc: 'Certificate of Incorporation (CoI)', needed: 'ALL', status: 'Check if registered' },
    { doc: 'PAN Card (Company)', needed: 'ALL', status: 'Needed for any financial activity' },
    { doc: 'GST Registration', needed: 'Most grants + all revenue', status: 'Register before revenue starts' },
    { doc: 'Udyam (MSME) Registration', needed: 'CGTMSE, PMEGP, some state schemes', status: 'Free, do it online' },
    { doc: 'DPIIT Startup Recognition', needed: 'ALL government grants + tax benefits', status: 'CRITICAL — do first' },
    { doc: 'Bank Account (company)', needed: 'ALL', status: 'Required for all disbursements' },
    { doc: 'Founder Aadhaar + PAN', needed: 'ALL', status: 'Ready' },
    { doc: 'Pitch Deck (PDF)', needed: 'ALL', status: 'READY at /rez-deck' },
    { doc: 'Business Plan (detailed)', needed: 'Most grants', status: 'READY at /rez-financials + /rez-data-room' },
    { doc: 'Financial Projections (3-year)', needed: 'ALL', status: 'READY at /rez-financials' },
    { doc: 'Product Demo / Prototype', needed: 'Most programs', status: 'Need to build MVP/demo' },
    { doc: 'Team Details / Founder Bio', needed: 'ALL', status: 'READY at /executive-team' },
  ],
  dpiitSteps: [
    { step: 1, title: 'Prerequisite: Company Incorporation', desc: 'Register as Private Limited Company or LLP with MCA. If not done, use services like Vakilsearch/LegalRaasta/ClearTax — costs ₹7-15K. Takes 7-10 days.' },
    { step: 2, title: 'Go to startupindia.gov.in', desc: 'Click "Register" → Create account with founder email → Verify email → Login.' },
    { step: 3, title: 'Fill Startup Recognition Form', desc: 'Entity Type (Pvt Ltd/LLP), CIN/LLPIN number, Date of Incorporation, PAN, Address. Innovation description (200 words) — focus on "closed-loop cashback for local commerce" angle.' },
    { step: 4, title: 'Upload Documents', desc: 'Certificate of Incorporation (PDF), Company PAN (PDF), Brief about innovation (write how ReZ creates a new market), and recommendation letter from incubator (optional but helps).' },
    { step: 5, title: 'Submit & Get Recognition Number', desc: 'DPIIT team reviews in 2-3 working days. You get a DPIIT Recognition Number and Certificate. Download and save.' },
    { step: 6, title: 'Unlock Benefits', desc: 'After recognition: Apply for 80-IAC tax exemption (Form-1), Angel Tax exemption (Form-2), SIPP trademark filing, and all government grants. Also register on Karnataka Startup Cell.' },
  ],
};

// ============================================
// DATA: OUTREACH PLAYBOOK
// ============================================
const outreachSteps = [
  {
    phase: 'Pre-Outreach (Week 1-2)',
    steps: [
      { title: 'DPIIT Registration', desc: 'Register on startupindia.gov.in — unlocks tax benefits, government grants, and credibility.', owner: 'Founder', duration: '3 days' },
      { title: 'Perfect the Pitch Deck', desc: '12-slide deck: Problem → Solution → Market Size → Business Model → Traction → Team → Ask. Use Nuqta\'s existing deck as base.', owner: 'Founder', duration: '5 days' },
      { title: 'Build Data Room', desc: 'Financial model (ReZ 2026 sheet), cap table, SAFE terms ($5M cap, 20% discount), incorporation docs, team bios.', owner: 'Founder', duration: '3 days' },
      { title: 'Create LetsVenture Campaign', desc: 'Upload deck, set raise amount ($500K), fill company profile. LetsVenture will match with relevant angels.', owner: 'Founder', duration: '2 days' },
      { title: 'Build Target List', desc: 'Use this page! Prioritize 20 investors (10 VCs + 10 angels). Research each one — know their portfolio, thesis, and recent tweets.', owner: 'Founder', duration: '2 days' },
    ],
  },
  {
    phase: 'Warm Intros (Week 3-4)',
    steps: [
      { title: 'Map 2nd-Degree Connections', desc: 'Check LinkedIn for mutual connections with target investors. Ask for warm intros. A warm intro converts 10x better than cold email.', owner: 'Founder', duration: 'Ongoing' },
      { title: 'Attend Startup Events', desc: 'Startup Saturday Bangalore, TiE events, BAN meetings, Antler open houses. Meet investors in person.', owner: 'Founder', duration: '2 events/week' },
      { title: 'Twitter/X Engagement', desc: 'Follow and engage with target investors on Twitter. Comment thoughtfully on their posts. Build visibility before the ask.', owner: 'Founder', duration: 'Daily 30 min' },
      { title: 'Request Intros via Portfolio Founders', desc: 'If you know any founder backed by your target VC, ask them for an intro. Portfolio founder intros are the highest conversion channel.', owner: 'Founder', duration: 'Ongoing' },
    ],
  },
  {
    phase: 'Active Outreach (Week 5-8)',
    steps: [
      { title: 'Send Personalized Cold Emails', desc: 'Use the custom pitch templates from this page. Send 3-5 emails per day. Follow up after 5 days if no response.', owner: 'Founder', duration: '1 hour/day' },
      { title: 'LinkedIn InMail Blitz', desc: 'Send LinkedIn messages to investors you can\'t email. Short, punchy: 3 lines max + link to deck.', owner: 'Founder', duration: '30 min/day' },
      { title: 'Apply to Accelerators', desc: 'Submit YC, Antler India, NSRCEL, Google for Startups applications simultaneously.', owner: 'Founder', duration: '1 week' },
      { title: 'Host Merchant Demo Day', desc: 'Invite investors to see ReZ in action at a partner merchant. Show real transactions, real users, real engagement.', owner: 'Founder + BizDev', duration: '1 event' },
      { title: 'Government Grant Applications', desc: 'Submit SISFS, Karnataka Elevate 100, MEITY applications in parallel.', owner: 'Founder', duration: '1 week' },
    ],
  },
  {
    phase: 'Closing (Week 9-12)',
    steps: [
      { title: 'Create FOMO', desc: 'When you get first commitment, tell other investors: "We have a lead/committed capital." Urgency drives decisions.', owner: 'Founder', duration: 'Ongoing' },
      { title: 'Negotiate Terms', desc: 'SAFE at $5M cap, 20% discount, $25K minimum. Don\'t negotiate on valuation until Series A.', owner: 'Founder', duration: 'As needed' },
      { title: 'Legal & Closing', desc: 'Share SAFE documents, get signatures, wire transfers. Use a standardized iSAFE template (YC or 100X.VC format).', owner: 'Founder + Legal', duration: '2-3 weeks' },
      { title: 'Announce & Thank', desc: 'Announce raise on LinkedIn, Twitter, and to your merchant/user community. Thank investors publicly. This attracts future investors.', owner: 'Founder', duration: '1 day' },
    ],
  },
];

// ============================================
// DATA: COLD EMAIL TEMPLATES
// ============================================
const emailTemplates = [
  {
    name: 'The VC Cold Email',
    subject: 'ReZ — Cashback Infrastructure for India\'s ₹42L Cr Local Commerce | [Fund Name] Fit',
    body: `Hi [Name],

I'm Rejaul, founder of ReZ. We're building India's closed-loop cashback ecosystem for hyperlocal commerce — merchant-funded rewards that make local shopping rewarding.

Why [Fund Name]: [1 specific reason — portfolio company, thesis, location]

Quick numbers:
• ₹650 AOV, 5% merchant commission, 51.3x LTV:CAC
• 12 channels, CAC < ₹76, 35K users Y1
• Bangalore launch: BTM, HSR, Koramangala, Jayanagar (500+ merchants mapped)

Raising $500K SAFE at $5M cap. Would love 20 minutes to share our deck.

Best,
Rejaul Karim
Founder, ReZ | rejaul@nuqtaapp.com`,
  },
  {
    name: 'The Angel Investor Email',
    subject: 'Quick Question from a Bangalore Founder Building for Local Commerce',
    body: `Hi [Name],

I've followed your work at [Company] — [specific thing you admire].

Building ReZ: cashback ecosystem for local merchants in Bangalore. Merchants pay 5% (vs 30% on Swiggy), users earn ReZ Coins, everyone wins.

Why you: [1 line about their expertise/portfolio fit]

$500K SAFE at $5M cap. 3 minutes to review our one-pager?

Best,
Rejaul`,
  },
  {
    name: 'The Accelerator Application Cover',
    subject: 'ReZ Application — [Program Name] [Cohort]',
    body: `ReZ is building the rewards layer for India's local commerce.

Problem: ₹42L Cr spent at local shops, zero rewards earned.
Solution: Closed-loop cashback — merchants fund 5% commission, users earn ReZ Coins.

Traction: Bangalore launch, 4 zones, 500+ merchants mapped, 12 acquisition channels.
Team: [Brief founder intro]
Ask: $500K SAFE at $5M cap.

Why [Program]: [Specific reason — mentors, location, portfolio].

Full application attached.

— Rejaul Karim, Founder, ReZ`,
  },
  {
    name: 'The Follow-Up Email (Day 5)',
    subject: 'Re: [Original Subject]',
    body: `Hi [Name],

Following up on my note from last week. Since then:
• [New traction point — e.g., "Signed 12 merchants in BTM"]
• [Another update — e.g., "First 200 beta signups"]

Would 20 minutes this week work to discuss?

Best,
Rejaul`,
  },
  {
    name: 'The Warm Intro Request',
    subject: 'Quick Intro Request — [Investor Name]',
    body: `Hi [Mutual Connection],

Hope you're well! I'm building ReZ — a cashback ecosystem for local commerce in Bangalore.

I noticed you're connected to [Investor Name] at [Fund]. Given their focus on [thesis/portfolio], ReZ seems like a natural fit.

Would you be open to making a quick intro? Happy to send a forwardable blurb.

Thanks!
Rejaul`,
  },
];

// ============================================
// MAIN COMPONENT
// ============================================
export default function ReZInvestorsPage() {
  const [activeTab, setActiveTab] = useState<SectionTab>('readiness');
  const [expandedInvestor, setExpandedInvestor] = useState<string | null>(null);
  const [expandedTemplate, setExpandedTemplate] = useState<number | null>(null);
  const [selectedPriority, setSelectedPriority] = useState<string>('all');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const tabs: { id: SectionTab; label: string; icon: React.ElementType }[] = [
    { id: 'readiness', label: 'Deck Readiness', icon: CheckCircle },
    { id: 'target-list', label: 'VC Funds', icon: Building2 },
    { id: 'angels', label: 'Angel Investors', icon: Star },
    { id: 'accelerators', label: 'Accelerators', icon: Rocket },
    { id: 'platforms', label: 'Platforms', icon: Globe },
    { id: 'outreach', label: 'Outreach Plan', icon: Send },
    { id: 'playbook', label: 'Email Templates', icon: Mail },
    { id: 'pipeline', label: 'Pipeline Tracker', icon: Target },
    { id: 'government', label: 'Grants', icon: Shield },
  ];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const renderInvestorCard = (inv: Investor) => {
    const isExpanded = expandedInvestor === inv.id;
    const priorityColor = inv.priority === 'high' ? 'text-red-400 bg-red-500/10 border-red-500/30' :
      inv.priority === 'medium' ? 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30' :
        'text-blue-400 bg-blue-500/10 border-blue-500/30';
    const typeLabel = inv.type === 'micro-vc' ? 'Micro VC' : inv.type === 'vc' ? 'VC Fund' : inv.type === 'angel' ? 'Angel' : inv.type;

    return (
      <div key={inv.id} className={`bg-slate-800/50 border rounded-xl overflow-hidden transition-all ${inv.priority === 'high' ? 'border-green-500/30' : 'border-slate-700/50'}`}>
        <button onClick={() => setExpandedInvestor(isExpanded ? null : inv.id)} className="w-full p-4 text-left">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-white font-bold text-lg">{inv.name}</h3>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${priorityColor}`}>
                  {inv.priority}
                </span>
                <span className="px-2 py-0.5 rounded-full text-xs font-medium text-slate-400 bg-slate-700/50">
                  {typeLabel}
                </span>
              </div>
              <div className="flex items-center gap-4 mt-2 text-sm text-slate-400 flex-wrap">
                <span className="flex items-center gap-1"><DollarSign size={14} /> {inv.checkSize}</span>
                <span className="flex items-center gap-1"><MapPin size={14} /> {inv.location}</span>
                <span className="flex items-center gap-1"><Layers size={14} /> {inv.stage.join(', ')}</span>
              </div>
              <div className="flex gap-1.5 mt-2 flex-wrap">
                {inv.focus.slice(0, 4).map(f => (
                  <span key={f} className="px-2 py-0.5 rounded text-xs bg-green-500/10 text-green-400">{f}</span>
                ))}
              </div>
            </div>
            <div className="text-slate-400">
              {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </div>
          </div>
        </button>

        {isExpanded && (
          <div className="px-4 pb-4 space-y-4 border-t border-slate-700/50 pt-4">
            {/* Portfolio */}
            <div>
              <h4 className="text-sm font-semibold text-slate-300 mb-2">Notable Portfolio</h4>
              <div className="flex gap-1.5 flex-wrap">
                {inv.portfolio.map(p => (
                  <span key={p} className="px-2 py-1 rounded text-xs bg-purple-500/10 text-purple-400 border border-purple-500/20">{p}</span>
                ))}
              </div>
            </div>

            {/* Why ReZ fits */}
            <div>
              <h4 className="text-sm font-semibold text-slate-300 mb-2">Why ReZ Fits Their Thesis</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{inv.rezFit}</p>
            </div>

            {/* Contacts */}
            <div>
              <h4 className="text-sm font-semibold text-slate-300 mb-2">Key Contacts</h4>
              <div className="space-y-2">
                {inv.contacts.map(c => (
                  <div key={c.name} className="flex items-center gap-3 text-sm">
                    <span className="text-white font-medium">{c.name}</span>
                    <span className="text-slate-500">{c.title}</span>
                    {c.linkedin && <span className="text-blue-400">in/{c.linkedin}</span>}
                    {c.twitter && <span className="text-sky-400">@{c.twitter}</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Pitch */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold text-slate-300">Custom Pitch Email</h4>
                <button
                  onClick={() => handleCopy(inv.customPitch, inv.id)}
                  className="flex items-center gap-1 text-xs text-green-400 hover:text-green-300"
                >
                  {copiedText === inv.id ? <CheckCircle size={14} /> : <Copy size={14} />}
                  {copiedText === inv.id ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <pre className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-3 text-xs text-slate-300 whitespace-pre-wrap font-mono leading-relaxed max-h-60 overflow-y-auto">
                {inv.customPitch}
              </pre>
            </div>

            {/* Website */}
            <div className="flex items-center gap-2 text-sm">
              <Globe size={14} className="text-slate-400" />
              <span className="text-green-400">{inv.website}</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  const allVCInvestors = microVCFunds;
  const filteredVCs = selectedPriority === 'all' ? allVCInvestors : allVCInvestors.filter(i => i.priority === selectedPriority);
  const filteredAngels = selectedPriority === 'all' ? angelInvestors : angelInvestors.filter(i => i.priority === selectedPriority);

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-900/40 via-emerald-900/30 to-teal-900/40 border-b border-green-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <Link href="/rez-financials" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 mb-4 text-sm">
            <ArrowLeft size={16} /> Back to ReZ Financials
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold">ReZ Investor Strategy</h1>
          <p className="text-slate-300 mt-1">$500K SAFE at $5M Cap &bull; 40+ Target Investors &bull; 12-Week Outreach Plan</p>

          {/* KPI Summary */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            {[
              { label: 'Target Raise', value: '$500K', sub: 'SAFE, $5M cap' },
              { label: 'VC Funds', value: `${microVCFunds.length}`, sub: `${microVCFunds.filter(i => i.priority === 'high').length} high priority` },
              { label: 'Angel Investors', value: `${angelInvestors.length}`, sub: `${angelInvestors.filter(i => i.priority === 'high').length} high priority` },
              { label: 'Accelerators', value: `${accelerators.length}`, sub: `${accelerators.filter(a => a.priority === 'high').length} high priority` },
            ].map(kpi => (
              <div key={kpi.label} className="bg-slate-800/50 border border-green-500/20 rounded-xl p-3">
                <p className="text-xs text-slate-400">{kpi.label}</p>
                <p className="text-xl font-bold text-white">{kpi.value}</p>
                <p className="text-xs text-green-400">{kpi.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-0 z-10 bg-[#0a1628]/95 backdrop-blur border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto py-2 no-scrollbar">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${activeTab === tab.id ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}
                >
                  <Icon size={14} /> {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">

        {/* ═══════ READINESS & PROCESS TAB ═══════ */}
        {activeTab === 'readiness' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold flex items-center gap-2"><CheckCircle size={20} className="text-green-400" /> Deck & Materials Readiness Audit</h2>
              <p className="text-sm text-slate-400 mt-1">What you have, what&apos;s missing, and the exact process for each investor type</p>
            </div>

            {/* Overall Score */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Overall Readiness Score</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: 'Pitch Deck', score: '100%', status: 'success', detail: '12-slide ReZ deck at /rez-deck + one-pager at /rez-one-pager' },
                  { label: 'Financial Model', score: '100%', status: 'success', detail: '/rez-financials has full 3-year model with interactive assumptions' },
                  { label: 'Legal Docs', score: '100%', status: 'success', detail: 'India iSAFE at /rez-financials/isafe with full terms + template' },
                  { label: 'Data Room', score: '100%', status: 'success', detail: 'Full data room at /rez-data-room with 35+ documents organized' },
                ].map(item => (
                  <div key={item.label} className={`rounded-xl p-4 border ${item.status === 'success' ? 'bg-green-500/5 border-green-500/20' : item.status === 'warning' ? 'bg-yellow-500/5 border-yellow-500/20' : 'bg-red-500/5 border-red-500/20'}`}>
                    <p className="text-xs text-slate-400">{item.label}</p>
                    <p className={`text-2xl font-bold ${item.status === 'success' ? 'text-green-400' : item.status === 'warning' ? 'text-yellow-400' : 'text-red-400'}`}>{item.score}</p>
                    <p className="text-xs text-slate-400 mt-1">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What You HAVE */}
            <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2"><CheckCircle size={18} /> What You Already Have (Ready)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { item: 'ReZ Financial Model', route: '/rez-financials', detail: '3-year P&L, 12 months detailed, interactive assumptions. Revenue: ₹10Cr Y1 → ₹601Cr Y3. This is investor-grade.' },
                  { item: 'Acquisition Strategy', route: '/rez-financials/acquisition', detail: '10 tabs: 12 channels, 5 phases, team structure, playbooks, funnel metrics, budget. Very detailed.' },
                  { item: 'Investor Database (UAE)', route: '/investor-outreach', detail: '100+ investors with contacts, custom emails. Mostly UAE/MENA focused — need India equivalent (this page!).' },
                  { item: 'VC Investment Memo', route: '/vc-investment-memo', detail: 'Scorecard, risk matrix, return scenarios. Needs ReZ India adaptation.' },
                  { item: 'Funding Docs Center', route: '/funding-docs', detail: 'SAFE agreement, cap table, use of funds, LOI evidence, term sheet, team bios.' },
                  { item: 'Investor FAQ', route: '/investor-faq', detail: 'SAFE terms explained, business model, competitive positioning. Mostly Nuqta UAE.' },
                  { item: 'Executive Team Page', route: '/executive-team', detail: 'CEO, COO, CMO, CTO roles, responsibilities, KPIs. Good for diligence.' },
                  { item: 'College Fest Playbook', route: '/rez-financials/acquisition', detail: '10 fests M1, Bangalore zones, full economics, merchant pipeline. Unique acquisition angle.' },
                  { item: 'Merchant Onboarding Plan', route: '/rez-financials/acquisition', detail: '500+ merchants mapped, 12 niche playbooks, pitch scripts. Strong execution proof.' },
                  { item: 'Unit Economics Model', route: '/financial-models', detail: 'CAC/LTV calculator, payback periods, scenario analysis. Interactive.' },
                ].map(item => (
                  <div key={item.item} className="bg-slate-800/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle size={14} className="text-green-400 flex-shrink-0" />
                      <span className="text-white font-medium text-sm">{item.item}</span>
                    </div>
                    <p className="text-xs text-green-400 mb-1">{item.route}</p>
                    <p className="text-xs text-slate-400">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What's MISSING */}
            <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2"><AlertTriangle size={18} /> What&apos;s Missing (Must Build)</h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    item: 'ReZ-Specific Pitch Deck (12 slides)',
                    priority: 'CRITICAL',
                    why: 'You have 13+ Nuqta UAE pitch decks but ZERO ReZ India decks. Every investor needs a deck. This is your #1 blocker.',
                    slides: [
                      '1. Cover — ReZ: India\'s Cashback Ecosystem for Local Commerce',
                      '2. Problem — ₹42L Cr local commerce, zero rewards, merchants losing to aggregators',
                      '3. Solution — Closed-loop cashback: merchants fund 5%, users earn ReZ Coins',
                      '4. How It Works — Transaction flow diagram (merchant → commission → coins → user)',
                      '5. Market Size — TAM ₹42L Cr → SAM ₹4L Cr → SOM ₹2,000 Cr (Y3 GMV)',
                      '6. Business Model — 6 revenue streams with unit economics',
                      '7. Traction — Bangalore 4 zones, 500+ merchants mapped, college fest plan',
                      '8. Acquisition — 12 channels, CAC ₹76, 35K users Y1 (from /rez-financials)',
                      '9. Financials — 3-year P&L: ₹10Cr → ₹153Cr → ₹601Cr revenue',
                      '10. Competition — vs Swiggy (30% comm), CRED (only credit cards), MagicPin (weak loyalty)',
                      '11. Team — Founder background, hiring plan',
                      '12. The Ask — $500K SAFE at $5M cap, use of funds, milestones',
                    ],
                    action: 'Build a /rez-deck page or PDF. Reuse data from /rez-financials.',
                    effort: '1-2 days',
                  },
                  {
                    item: 'ReZ One-Pager (PDF)',
                    priority: 'CRITICAL',
                    why: 'Angels and busy investors want a 1-page summary before looking at a deck. Quick scan document.',
                    slides: [
                      'Problem + Solution (2 sentences each)',
                      'Key Metrics: 35K users, 500+ merchants, ₹76 CAC, 51.3x LTV:CAC',
                      'Business Model: 6 revenue streams',
                      'The Ask: $500K SAFE at $5M cap',
                      'Team: 1 line per founder',
                      'Contact info',
                    ],
                    action: 'Create a single-page PDF. Can be generated from a /rez-one-pager page.',
                    effort: '3-4 hours',
                  },
                  {
                    item: 'DPIIT Registration',
                    priority: 'CRITICAL',
                    why: 'Required for ALL government grants (SISFS ₹50L, Elevate 100 ₹50L). Also adds credibility with VCs. Takes 2-3 days.',
                    slides: [
                      'Go to startupindia.gov.in',
                      'Register company under DPIIT',
                      'Upload: CoI, PAN, innovation brief',
                      'Get recognition number',
                    ],
                    action: 'Register TODAY on startupindia.gov.in',
                    effort: '2-3 days (approval)',
                  },
                  {
                    item: 'India iSAFE Document',
                    priority: 'HIGH',
                    why: 'Indian VCs (especially 100X.VC) use iSAFE format, not US SAFE. Need to adapt your existing SAFE template.',
                    slides: [
                      'Download 100X.VC iSAFE template from their website',
                      'Adapt terms: $5M cap, 20% discount, ₹20L minimum',
                      'Get legal review from Indian startup lawyer',
                    ],
                    action: 'Download iSAFE template from 100x.vc/resources',
                    effort: '1 week (including legal)',
                  },
                  {
                    item: 'LetsVenture Campaign Profile',
                    priority: 'HIGH',
                    why: 'LetsVenture connects you to 7,000+ angels automatically. Creating a campaign is free — they take 2% success fee only if you raise.',
                    slides: [
                      'Create account on letsventure.com',
                      'Fill company profile (use ReZ data)',
                      'Upload pitch deck + one-pager',
                      'Set raise: $500K, SAFE, $5M cap',
                      'Go live — LetsVenture matches you with angels',
                    ],
                    action: 'Create campaign once deck and one-pager are ready.',
                    effort: '2-3 hours (after deck is ready)',
                  },
                ].map(item => (
                  <div key={item.item} className={`bg-slate-800/30 rounded-lg p-5 border-l-4 ${item.priority === 'CRITICAL' ? 'border-red-500' : 'border-yellow-500'}`}>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <AlertTriangle size={14} className={item.priority === 'CRITICAL' ? 'text-red-400' : 'text-yellow-400'} />
                      <span className="text-white font-bold">{item.item}</span>
                      <span className={`px-2 py-0.5 rounded text-xs font-bold ${item.priority === 'CRITICAL' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'}`}>{item.priority}</span>
                      <span className="text-xs text-slate-500">Effort: {item.effort}</span>
                    </div>
                    <p className="text-sm text-slate-300 mb-3">{item.why}</p>
                    <div className="space-y-1">
                      {item.slides.map((s, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                          <span className="text-green-400 mt-0.5 flex-shrink-0">&#x2022;</span>
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-green-400 mt-3 font-medium">Action: {item.action}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ═══════ PROCESS PER INVESTOR TYPE ═══════ */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Exact Process for Each Investor Type</h3>

              {/* 1. Micro-VC Funds */}
              <div className="bg-slate-800/50 border border-green-500/20 rounded-xl overflow-hidden">
                <div className="bg-green-500/10 px-5 py-3 border-b border-green-500/20">
                  <h4 className="text-green-400 font-bold flex items-center gap-2"><Building2 size={16} /> Micro-VC Funds (100X.VC, India Quotient, Blume, 3one4, Titan Capital)</h4>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-white font-semibold mb-3">What They Need from You</h5>
                      <div className="space-y-2">
                        {[
                          { item: 'Pitch Deck (12 slides)', ready: true, note: 'READY at /rez-deck — 12 interactive slides' },
                          { item: 'Financial Model', ready: true, note: '/rez-financials — interactive, investor-grade' },
                          { item: 'One-Pager', ready: true, note: 'READY at /rez-one-pager — printable PDF' },
                          { item: 'Cap Table', ready: true, note: '/funding-docs has cap table' },
                          { item: 'SAFE / iSAFE Terms', ready: true, note: 'READY at /rez-financials/isafe — full template' },
                          { item: 'Traction Proof', ready: true, note: 'Merchant maps, acquisition channels, college fest plan' },
                          { item: 'Team Bios', ready: true, note: '/executive-team has full team' },
                          { item: 'Market Size Analysis', ready: true, note: 'In financial model + VC memo' },
                        ].map(d => (
                          <div key={d.item} className="flex items-start gap-2 text-sm">
                            {d.ready ? <CheckCircle size={14} className="text-green-400 mt-0.5 flex-shrink-0" /> : <AlertTriangle size={14} className="text-red-400 mt-0.5 flex-shrink-0" />}
                            <div>
                              <span className={d.ready ? 'text-white' : 'text-red-300 font-medium'}>{d.item}</span>
                              <span className="text-slate-500 text-xs ml-2">— {d.note}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-3">Step-by-Step Process</h5>
                      <div className="space-y-3">
                        {[
                          { step: 1, title: 'Build ReZ Deck + One-Pager', desc: 'This is your #1 blocker. No fund will take a meeting without a deck.', time: '2 days' },
                          { step: 2, title: 'Research the Fund', desc: 'Read their blog, portfolio page, and partners\' Twitter. Know their thesis.', time: '1 hour per fund' },
                          { step: 3, title: 'Find Warm Intro', desc: 'Check LinkedIn for mutual connections. Portfolio founder intro = 10x conversion.', time: '1-2 days' },
                          { step: 4, title: 'Cold Email if No Intro', desc: 'Use custom pitch from this page. Send Tuesday 10 AM. Follow up Day 5.', time: '15 min per email' },
                          { step: 5, title: 'First Meeting (20 min)', desc: 'Present deck, share financial model link. End with: "Can I share the data room?"', time: '20 min' },
                          { step: 6, title: 'Due Diligence', desc: 'They\'ll ask for: financial model, cap table, team refs, market analysis. You have all this.', time: '1-2 weeks' },
                          { step: 7, title: 'Term Sheet → SAFE Signing', desc: 'Negotiate cap + discount. Sign iSAFE. Wire transfer.', time: '1-3 weeks' },
                        ].map(s => (
                          <div key={s.step} className="flex gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-xs text-green-400 font-bold flex-shrink-0">{s.step}</div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-white text-sm font-medium">{s.title}</span>
                                <span className="text-xs text-slate-500">({s.time})</span>
                              </div>
                              <p className="text-xs text-slate-400">{s.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Fund-Specific Processes */}
                  <div className="mt-6 pt-4 border-t border-slate-700/50">
                    <h5 className="text-white font-semibold mb-3">Fund-Specific Application Process</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-slate-700/50">
                            <th className="text-left px-3 py-2 text-slate-400 font-medium">Fund</th>
                            <th className="text-left px-3 py-2 text-slate-400 font-medium">How to Apply</th>
                            <th className="text-left px-3 py-2 text-slate-400 font-medium">Decision Time</th>
                            <th className="text-left px-3 py-2 text-slate-400 font-medium">Special Notes</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { fund: '100X.VC', how: 'Apply on 100x.vc/apply — batch-based, open applications. Upload deck + video pitch.', time: '4-6 weeks (batch)', notes: 'Uses iSAFE (not SAFE). ₹1.25Cr fixed. Batch cohorts every quarter.' },
                            { fund: 'India Quotient', how: 'Cold email anand@indiaquotient.in or DM @anandlunia on Twitter. Warm intro preferred.', time: '2-4 weeks', notes: 'Very thesis-driven — must show "Bharat-first" angle. They love contrarian bets.' },
                            { fund: 'Titan Capital', how: 'Email via website contact form OR connect via Kunal Bahl on LinkedIn/Twitter.', time: '2-3 weeks', notes: 'Kunal & Rohit are hands-on. They care about founder grit > metrics at pre-seed.' },
                            { fund: 'Blume Ventures', how: 'Apply on blume.vc — open form for pre-seed. Email karthik@blume.vc for direct.', time: '3-6 weeks', notes: 'Bangalore presence = they\'ll visit your merchants. Show local traction.' },
                            { fund: '3one4 Capital', how: 'Email pranav@3one4.com or connect on LinkedIn. Very Bangalore-focused.', time: '3-4 weeks', notes: 'They backed Dunzo from BLR. Mention hyperlocal + Bangalore angle heavily.' },
                            { fund: 'Antler India', how: 'Apply on antler.co/location/india — cohort applications 3x/year.', time: '6-8 weeks (program)', notes: 'Can apply even with existing company. Pre-seed focus. Bangalore office.' },
                            { fund: 'Better Capital', how: 'Apply on better.capital — rolling applications. Short form.', time: '1-2 weeks', notes: 'Fastest decision maker. Vaibhav decides quickly. Good for first check.' },
                            { fund: 'Venture Catalysts', how: 'Apply on venturecatalysts.in OR attend their Startup Sundays pitch events.', time: '4-6 weeks', notes: 'Angel network model — your pitch goes to 400+ angel members.' },
                          ].map(f => (
                            <tr key={f.fund} className="border-b border-slate-700/30">
                              <td className="px-3 py-3 text-white font-medium">{f.fund}</td>
                              <td className="px-3 py-3 text-slate-300 text-xs">{f.how}</td>
                              <td className="px-3 py-3 text-green-400 text-xs">{f.time}</td>
                              <td className="px-3 py-3 text-slate-400 text-xs">{f.notes}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Angel Investors */}
              <div className="bg-slate-800/50 border border-yellow-500/20 rounded-xl overflow-hidden">
                <div className="bg-yellow-500/10 px-5 py-3 border-b border-yellow-500/20">
                  <h4 className="text-yellow-400 font-bold flex items-center gap-2"><Star size={16} /> Angel Investors (Kunal Shah, VSS, Nithin Kamath, etc.)</h4>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-white font-semibold mb-3">What Angels Need</h5>
                      <div className="space-y-2">
                        {[
                          { item: 'One-Pager (1 page PDF)', ready: true, note: 'READY at /rez-one-pager — printable' },
                          { item: 'Pitch Deck (optional)', ready: true, note: 'READY at /rez-deck' },
                          { item: 'Twitter/LinkedIn Profile', ready: false, note: 'Your founder profile should tell the ReZ story' },
                          { item: 'Demo / Prototype', ready: false, note: 'Even a Figma prototype helps — show the app' },
                          { item: 'Financial Model Link', ready: true, note: '/rez-financials — share the URL directly' },
                          { item: 'Clear Ask', ready: true, note: '$500K SAFE, $5M cap, ₹20L minimum check' },
                        ].map(d => (
                          <div key={d.item} className="flex items-start gap-2 text-sm">
                            {d.ready ? <CheckCircle size={14} className="text-green-400 mt-0.5 flex-shrink-0" /> : <AlertTriangle size={14} className="text-yellow-400 mt-0.5 flex-shrink-0" />}
                            <div>
                              <span className={d.ready ? 'text-white' : 'text-yellow-300'}>{d.item}</span>
                              <span className="text-slate-500 text-xs ml-2">— {d.note}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-3">Step-by-Step Process</h5>
                      <div className="space-y-3">
                        {[
                          { step: 1, title: 'Follow on Twitter/X', desc: 'Follow all target angels. Engage with 2-3 posts per week for 2 weeks. Build visibility.', time: '2 weeks' },
                          { step: 2, title: 'Find Mutual Connection', desc: 'Check LinkedIn for 2nd degree connections. Ask for a warm intro with a forwardable blurb.', time: '1 week' },
                          { step: 3, title: 'DM or Email (3 lines max)', desc: '"Building X. Why you: [1 line]. Can I send a one-pager?" Keep it SHORT.', time: '5 min' },
                          { step: 4, title: 'Send One-Pager (NOT deck)', desc: 'Angels don\'t read 12-slide decks cold. Send 1-page PDF. If interested, they\'ll ask for more.', time: '1 min' },
                          { step: 5, title: 'Quick Call (15 min max)', desc: 'Angels decide fast. Pitch in 5 min, answer questions for 10. End with: "Would you be interested in $X?"', time: '15 min' },
                          { step: 6, title: 'Send SAFE for Signing', desc: 'If yes: send iSAFE within 24 hours. Speed = closing. They forget if you delay.', time: 'Same day' },
                        ].map(s => (
                          <div key={s.step} className="flex gap-3">
                            <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-xs text-yellow-400 font-bold flex-shrink-0">{s.step}</div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-white text-sm font-medium">{s.title}</span>
                                <span className="text-xs text-slate-500">({s.time})</span>
                              </div>
                              <p className="text-xs text-slate-400">{s.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Angel-Specific Approach */}
                  <div className="mt-6 pt-4 border-t border-slate-700/50">
                    <h5 className="text-white font-semibold mb-3">How to Reach Each Angel</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-slate-700/50">
                            <th className="text-left px-3 py-2 text-slate-400 font-medium">Angel</th>
                            <th className="text-left px-3 py-2 text-slate-400 font-medium">Best Channel</th>
                            <th className="text-left px-3 py-2 text-slate-400 font-medium">What Resonates</th>
                            <th className="text-left px-3 py-2 text-slate-400 font-medium">What NOT to Say</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { name: 'Kunal Shah', channel: 'Twitter DM @kunalb11 (very active)', resonates: 'Delta4 framework, rewards/loyalty, user behavior change', avoid: 'Don\'t compare to CRED — he\'ll see it as copying' },
                            { name: 'Vijay Shekhar Sharma', channel: 'LinkedIn InMail or via Paytm network', resonates: 'Merchant scale, payments infrastructure, Bharat story', avoid: 'Don\'t pitch against Paytm — position as complementary' },
                            { name: 'Nithin Kamath', channel: 'Twitter DM @Nithin0dha or Rainmatter website', resonates: 'Bangalore-first, fintech angle, bootstrap-friendly metrics', avoid: 'Don\'t over-sell — Nithin likes understated founders' },
                            { name: 'Deepinder Goyal', channel: 'LinkedIn or via Zomato contacts', resonates: 'Hyperlocal commerce, restaurant pain points, unit economics', avoid: 'Careful — he may see ReZ as Zomato competitor. Position as complementary' },
                            { name: 'Sriharsha Majety', channel: 'LinkedIn — harder to reach', resonates: 'BTM Layout story (Swiggy\'s origin!), Bangalore hyperlocal', avoid: 'Similar risk as Deepinder — avoid competition framing' },
                            { name: 'Girish Mathru.', channel: 'Twitter @maborz or freshworks network', resonates: 'SaaS metrics, merchant tools, platform thinking', avoid: 'Don\'t oversell — show product depth' },
                            { name: 'Nithin Kamath', channel: 'Rainmatter form on zerodha.com', resonates: 'Fintech DNA, Bangalore, sustainable economics', avoid: 'Don\'t ask for large check — he prefers smaller, conviction-based bets' },
                            { name: 'Neeraj Arora', channel: 'LinkedIn InMail (private person)', resonates: 'WhatsApp-first growth, viral loops, messaging commerce', avoid: 'Don\'t spam — he values quality over quantity' },
                          ].map(a => (
                            <tr key={a.name + a.channel} className="border-b border-slate-700/30">
                              <td className="px-3 py-3 text-white font-medium">{a.name}</td>
                              <td className="px-3 py-3 text-green-400 text-xs">{a.channel}</td>
                              <td className="px-3 py-3 text-slate-300 text-xs">{a.resonates}</td>
                              <td className="px-3 py-3 text-red-400 text-xs">{a.avoid}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Accelerators */}
              <div className="bg-slate-800/50 border border-purple-500/20 rounded-xl overflow-hidden">
                <div className="bg-purple-500/10 px-5 py-3 border-b border-purple-500/20">
                  <h4 className="text-purple-400 font-bold flex items-center gap-2"><Rocket size={16} /> Accelerators (YC, Antler, NSRCEL, Google)</h4>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-white font-semibold mb-3">What Accelerators Need</h5>
                      <div className="space-y-2">
                        {[
                          { item: 'Application Form (varies)', ready: true, note: 'Each has its own form — ReZ data is ready to fill' },
                          { item: '1-min Video Pitch', ready: true, note: 'Script READY at /rez-video-script — 60s/90s/3min versions' },
                          { item: 'Pitch Deck', ready: true, note: 'READY at /rez-deck' },
                          { item: 'Founder Story', ready: true, note: 'Why you? Why this? Why now? Be personal and authentic.' },
                          { item: 'Demo / Prototype', ready: false, note: 'YC loves demos. Even a clickable Figma helps.' },
                          { item: 'Financial Model', ready: true, note: '/rez-financials — strong differentiator in applications' },
                          { item: 'DPIIT Registration', ready: false, note: 'Required for NSRCEL, SISFS, Elevate 100. Register NOW.' },
                        ].map(d => (
                          <div key={d.item} className="flex items-start gap-2 text-sm">
                            {d.ready ? <CheckCircle size={14} className="text-green-400 mt-0.5 flex-shrink-0" /> : <AlertTriangle size={14} className="text-purple-400 mt-0.5 flex-shrink-0" />}
                            <div>
                              <span className={d.ready ? 'text-white' : 'text-purple-300'}>{d.item}</span>
                              <span className="text-slate-500 text-xs ml-2">— {d.note}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-3">Application Process per Program</h5>
                      <div className="space-y-3">
                        {[
                          { name: 'Y Combinator', steps: 'Apply on ycombinator.com/apply → Written app + 1-min video → Interview invite (2-3 weeks) → 10-min Zoom interview → Decision (24 hours after interview)', check: '$500K for 7%', deadline: 'Rolling (S26 batch: apply by Apr 2026)' },
                          { name: 'Antler India', steps: 'Apply on antler.co → Screening call → Join 3-month program → Demo Day → Investment decision', check: '$150-250K for 8-10%', deadline: 'Cohorts open 3x/year (check website)' },
                          { name: 'NSRCEL (IIM-B)', steps: 'Apply on nsrcel.org → Screening → Interview with IIM-B faculty → Join incubation → Access mentors + grants', check: '₹5-20L grant + incubation', deadline: 'Rolling applications — apply NOW' },
                          { name: 'Google for Startups', steps: 'Apply on startup.google.com → Selection (competitive) → 3-month program → $200K cloud credits + mentorship', check: '$0 cash + $200K credits (0% equity)', deadline: 'Annual program — check for next cohort' },
                          { name: 'SISFS (Govt)', steps: 'DPIIT registration → Apply through incubator (NSRCEL/IIITB) → Incubator evaluates → Govt disburses ₹20-50L', check: '₹20-50L convertible debentures', deadline: 'Rolling — need DPIIT first' },
                          { name: 'Karnataka Elevate', steps: 'Apply on elevate100.karnataka.gov.in → Panel evaluation → Shortlist → ₹50L grant disbursed', check: '₹50L grant (non-dilutive)', deadline: 'Annual — usually Q3 applications' },
                        ].map(prog => (
                          <div key={prog.name} className="bg-slate-800/30 rounded-lg p-3">
                            <p className="text-white font-medium text-sm">{prog.name}</p>
                            <p className="text-xs text-green-400 mt-1">{prog.check}</p>
                            <p className="text-xs text-slate-400 mt-1">{prog.steps}</p>
                            <p className="text-xs text-yellow-400 mt-1">Deadline: {prog.deadline}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Platforms & Networks */}
              <div className="bg-slate-800/50 border border-blue-500/20 rounded-xl overflow-hidden">
                <div className="bg-blue-500/10 px-5 py-3 border-b border-blue-500/20">
                  <h4 className="text-blue-400 font-bold flex items-center gap-2"><Globe size={16} /> Platforms & Angel Networks (LetsVenture, BAN, IAN)</h4>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-white font-semibold mb-3">What Platforms Need</h5>
                      <div className="space-y-2">
                        {[
                          { item: 'Complete Company Profile', ready: true, note: 'ReZ data available — just need to fill forms' },
                          { item: 'Pitch Deck (PDF upload)', ready: true, note: 'READY at /rez-deck — screenshot or print as PDF' },
                          { item: 'One-Pager', ready: true, note: 'READY at /rez-one-pager' },
                          { item: 'Video Pitch (2 min)', ready: true, note: 'Script READY at /rez-video-script' },
                          { item: 'Financial Summary', ready: true, note: 'Key metrics from /rez-financials' },
                          { item: 'Referral for BAN', ready: false, note: 'Need a BAN member to refer you. Attend Bangalore startup events.' },
                        ].map(d => (
                          <div key={d.item} className="flex items-start gap-2 text-sm">
                            {d.ready ? <CheckCircle size={14} className="text-green-400 mt-0.5 flex-shrink-0" /> : <AlertTriangle size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />}
                            <div>
                              <span className={d.ready ? 'text-white' : 'text-blue-300'}>{d.item}</span>
                              <span className="text-slate-500 text-xs ml-2">— {d.note}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-3">Platform Processes</h5>
                      <div className="space-y-3">
                        {[
                          { name: 'LetsVenture', process: 'Create account → Fill profile → Upload deck → Set raise ($500K) → Go live → LetsVenture matches you with 7,000+ angels → Angels commit online → You accept', time: 'Campaign live in 1 day, raises take 4-12 weeks' },
                          { name: 'AngelList India', process: 'Create profile on angel.co → List raise → Connect with syndicate leads → Syndicate lead runs diligence → Angels commit through syndicate', time: '2-8 weeks' },
                          { name: 'Indian Angel Network', process: 'Apply on indianangelnetwork.com → Screening committee reviews (2 weeks) → Shortlist → Pitch to 500+ members → Members vote → Investment', time: '6-10 weeks' },
                          { name: 'Bangalore Angel Network', process: 'Get referral from existing member → Internal screening → Pitch at monthly meeting → Members commit → Close in 2-4 weeks', time: '4-8 weeks (need referral first)' },
                          { name: 'Mumbai Angels', process: 'Apply on mumbaiangels.com → Screening → Pitch to members → Term sheet → Close', time: '6-8 weeks' },
                        ].map(p => (
                          <div key={p.name} className="bg-slate-800/30 rounded-lg p-3">
                            <p className="text-white font-medium text-sm">{p.name}</p>
                            <p className="text-xs text-slate-400 mt-1">{p.process}</p>
                            <p className="text-xs text-green-400 mt-1">Timeline: {p.time}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Government */}
              <div className="bg-slate-800/50 border border-teal-500/20 rounded-xl overflow-hidden">
                <div className="bg-teal-500/10 px-5 py-3 border-b border-teal-500/20">
                  <h4 className="text-teal-400 font-bold flex items-center gap-2"><Shield size={16} /> Government Grants (SISFS, Elevate 100, MEITY)</h4>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-white font-semibold mb-3">What Government Programs Need</h5>
                      <div className="space-y-2">
                        {[
                          { item: 'DPIIT Registration', ready: false, note: 'BLOCKER — Required for ALL govt programs. Do this FIRST.' },
                          { item: 'Certificate of Incorporation', ready: true, note: 'Company should already be registered' },
                          { item: 'PAN Card', ready: true, note: 'Company PAN' },
                          { item: 'Innovation Brief (2 pages)', ready: true, note: 'Use ReZ model description — closed-loop cashback is novel' },
                          { item: 'Business Plan', ready: true, note: '/rez-financials = comprehensive business plan' },
                          { item: 'Incubation Certificate', ready: false, note: 'Get incubated at NSRCEL/IIITB first for SISFS eligibility' },
                          { item: 'Bank Account Details', ready: true, note: 'Company bank account' },
                        ].map(d => (
                          <div key={d.item} className="flex items-start gap-2 text-sm">
                            {d.ready ? <CheckCircle size={14} className="text-green-400 mt-0.5 flex-shrink-0" /> : <AlertTriangle size={14} className="text-teal-400 mt-0.5 flex-shrink-0" />}
                            <div>
                              <span className={d.ready ? 'text-white' : 'text-teal-300'}>{d.item}</span>
                              <span className="text-slate-500 text-xs ml-2">— {d.note}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-3">Process (Do in This Order)</h5>
                      <div className="space-y-3">
                        {[
                          { step: 1, title: 'Register on DPIIT', desc: 'startupindia.gov.in → Register → Upload CoI + PAN + innovation brief → Get recognition number (2-3 days)', color: 'teal' },
                          { step: 2, title: 'Apply to NSRCEL (IIM-B)', desc: 'nsrcel.org → Apply for incubation → Interview → Join program → Get incubation certificate', color: 'teal' },
                          { step: 3, title: 'Apply for SISFS through NSRCEL', desc: 'seedfund.startupindia.gov.in → Apply through your incubator → ₹20-50L disbursed', color: 'teal' },
                          { step: 4, title: 'Apply for Karnataka Elevate 100', desc: 'elevate100.karnataka.gov.in → Apply when cycle opens (usually Q3) → ₹50L grant', color: 'teal' },
                          { step: 5, title: 'Apply for MEITY Grant', desc: 'meity.gov.in → Apply under Digital Commerce track → ₹25L-₹1Cr', color: 'teal' },
                        ].map(s => (
                          <div key={s.step} className="flex gap-3">
                            <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center text-xs text-teal-400 font-bold flex-shrink-0">{s.step}</div>
                            <div>
                              <p className="text-white text-sm font-medium">{s.title}</p>
                              <p className="text-xs text-slate-400">{s.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ═══════ ACTION PLAN: WHAT TO DO THIS WEEK ═══════ */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2"><Zap size={20} /> This Week&apos;s Action Plan (Priority Order)</h3>
              <div className="space-y-4">
                {[
                  { day: 'Day 1', tasks: ['Register on DPIIT (startupindia.gov.in) — unlocks all government grants', 'Start building ReZ 12-slide pitch deck — reuse data from /rez-financials'], priority: 'CRITICAL', color: 'red' },
                  { day: 'Day 2-3', tasks: ['Finish ReZ pitch deck (12 slides)', 'Create 1-page PDF summary (one-pager)', 'Record 1-minute video pitch (phone camera is fine)'], priority: 'CRITICAL', color: 'red' },
                  { day: 'Day 4', tasks: ['Create LetsVenture campaign (upload deck + one-pager)', 'Apply to NSRCEL (IIM Bangalore) for incubation', 'Create AngelList India profile'], priority: 'HIGH', color: 'yellow' },
                  { day: 'Day 5', tasks: ['Follow all 8 target angels on Twitter — start engaging with their posts', 'Send first 3 cold emails to VCs (100X.VC, Better Capital, India Quotient)', 'Apply to Antler India next cohort'], priority: 'HIGH', color: 'yellow' },
                  { day: 'Day 6-7', tasks: ['Apply to Y Combinator S26 batch', 'Apply to Google for Startups Accelerator India', 'Map LinkedIn connections to all target investors — request warm intros', 'Join TiE Bangalore + Headstart community'], priority: 'MEDIUM', color: 'blue' },
                ].map(day => (
                  <div key={day.day} className={`bg-slate-800/30 rounded-lg p-4 border-l-4 ${day.color === 'red' ? 'border-red-500' : day.color === 'yellow' ? 'border-yellow-500' : 'border-blue-500'}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-white font-bold">{day.day}</span>
                      <span className={`px-2 py-0.5 rounded text-xs font-bold ${day.color === 'red' ? 'bg-red-500/20 text-red-400' : day.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-blue-500/20 text-blue-400'}`}>{day.priority}</span>
                    </div>
                    {day.tasks.map((task, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm ml-2">
                        <span className="text-slate-500">&#x25CB;</span>
                        <span className="text-slate-300">{task}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ═══════ VC FUNDS TAB ═══════ */}
        {activeTab === 'target-list' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <h2 className="text-xl font-bold flex items-center gap-2"><Building2 size={20} className="text-green-400" /> Indian VC & Micro-VC Funds</h2>
                <p className="text-sm text-slate-400 mt-1">Pre-seed and seed stage funds that invest in hyperlocal commerce, consumer tech, and fintech</p>
              </div>
              <div className="flex gap-2">
                {['all', 'high', 'medium'].map(p => (
                  <button key={p} onClick={() => setSelectedPriority(p)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium ${selectedPriority === p ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'text-slate-400 bg-slate-800/50 border border-slate-700/50'}`}>
                    {p === 'all' ? 'All' : p.charAt(0).toUpperCase() + p.slice(1) + ' Priority'}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {filteredVCs.map(inv => renderInvestorCard(inv))}
            </div>

            {/* Why These Funds */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-emerald-400 mb-3">Why These Funds for ReZ?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                {[
                  { title: 'Hyperlocal DNA', desc: 'Blume, 3one4, 100X.VC all backed Dunzo — they understand Bangalore hyperlocal.', icon: MapPin },
                  { title: 'Merchant Commerce', desc: 'Titan Capital (Snapdeal), VCats (BharatPe) — they know merchant acquisition at scale.', icon: Store },
                  { title: 'Rewards/Fintech', desc: 'India Quotient, Better Capital — consumer fintech thesis aligns with ReZ Coins.', icon: Zap },
                  { title: 'Bangalore-Based', desc: '3one4, Antler, AJVC, All In Capital — they can visit our merchants and see traction.', icon: Building2 },
                  { title: 'Right Check Size', desc: '₹50L to ₹5Cr range covers our $500K raise perfectly.', icon: DollarSign },
                  { title: 'iSAFE / SAFE Friendly', desc: '100X.VC pioneered iSAFE in India. Others are SAFE-friendly at pre-seed.', icon: Shield },
                ].map(item => (
                  <div key={item.title} className="flex gap-3">
                    <item.icon size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">{item.title}</p>
                      <p className="text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ═══════ ANGELS TAB ═══════ */}
        {activeTab === 'angels' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <h2 className="text-xl font-bold flex items-center gap-2"><Star size={20} className="text-yellow-400" /> Angel Investors</h2>
                <p className="text-sm text-slate-400 mt-1">Indian startup founders and operators who angel invest in early-stage commerce/fintech</p>
              </div>
              <div className="flex gap-2">
                {['all', 'high', 'medium'].map(p => (
                  <button key={p} onClick={() => setSelectedPriority(p)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium ${selectedPriority === p ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' : 'text-slate-400 bg-slate-800/50 border border-slate-700/50'}`}>
                    {p === 'all' ? 'All' : p.charAt(0).toUpperCase() + p.slice(1) + ' Priority'}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {filteredAngels.map(inv => renderInvestorCard(inv))}
            </div>

            {/* Angel Approach Strategy */}
            <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-yellow-400 mb-3">How to Approach Angels</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                {[
                  { title: '1. Twitter First', desc: 'Follow them, engage with their posts for 2-3 weeks. Then DM with a short pitch. Most Indian angels are active on Twitter.' },
                  { title: '2. Warm Intro > Cold Email', desc: 'Find mutual connections on LinkedIn. A warm intro from a portfolio founder converts 10x better.' },
                  { title: '3. Short & Specific', desc: 'Angels get 100+ pitches/week. Your email should be 5 lines max with 1 specific reason why THEY should invest.' },
                  { title: '4. Show, Don\'t Tell', desc: 'Invite them to a merchant demo. Show real transactions. Angels invest in conviction, not just decks.' },
                ].map(tip => (
                  <div key={tip.title} className="bg-slate-800/30 rounded-lg p-4">
                    <p className="text-white font-medium">{tip.title}</p>
                    <p className="text-slate-400 mt-1">{tip.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ═══════ ACCELERATORS TAB ═══════ */}
        {activeTab === 'accelerators' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-2"><Rocket size={20} className="text-purple-400" /> Accelerators & Incubators</h2>
            <p className="text-sm text-slate-400">Programs that provide funding, mentorship, and investor access. Apply to multiple simultaneously.</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {accelerators.map(acc => (
                <div key={acc.name} className={`bg-slate-800/50 border rounded-xl p-5 ${acc.priority === 'high' ? 'border-purple-500/30' : 'border-slate-700/50'}`}>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-white font-bold text-lg">{acc.name}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${acc.priority === 'high' ? 'text-red-400 bg-red-500/10' : acc.priority === 'medium' ? 'text-yellow-400 bg-yellow-500/10' : 'text-blue-400 bg-blue-500/10'}`}>
                      {acc.priority}
                    </span>
                  </div>
                  <div className="mt-3 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <DollarSign size={14} className="text-green-400" />
                      <span className="text-slate-300">{acc.checkSize}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={14} className="text-blue-400" />
                      <span className="text-slate-300">Equity: {acc.equity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-purple-400" />
                      <span className="text-slate-300">{acc.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target size={14} className="text-orange-400" />
                      <span className="text-slate-300">{acc.focus}</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-700/50">
                    <p className="text-xs text-slate-400"><strong className="text-slate-300">Portfolio:</strong> {acc.portfolio}</p>
                    <p className="text-xs text-green-400 mt-1"><strong>ReZ Fit:</strong> {acc.rezFit}</p>
                    <p className="text-xs text-purple-400 mt-1"><strong>Apply:</strong> {acc.apply}</p>
                    <p className="text-xs text-yellow-400 mt-1"><strong>Timeline:</strong> {acc.timeline}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Application Priority */}
            <div className="bg-purple-500/5 border border-purple-500/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-purple-400 mb-3">Application Priority Order</h3>
              <div className="space-y-3">
                {[
                  { rank: 1, name: 'NSRCEL (IIM-B)', reason: 'Bangalore, minimal dilution, IIM network, apply NOW' },
                  { rank: 2, name: 'Antler India', reason: 'Bangalore HQ, pre-seed focus, next cohort' },
                  { rank: 3, name: 'Startup India Seed Fund', reason: 'Non-dilutive ₹50L, need DPIIT registration first' },
                  { rank: 4, name: 'Y Combinator', reason: 'Best brand, $500K, but competitive (1-2% acceptance)' },
                  { rank: 5, name: 'Google for Startups', reason: 'Zero equity, $200K cloud credits, Google brand' },
                  { rank: 6, name: 'Karnataka Elevate 100', reason: '₹50L grant, non-dilutive, state government backing' },
                ].map(item => (
                  <div key={item.rank} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-sm flex-shrink-0">
                      {item.rank}
                    </div>
                    <div>
                      <span className="text-white font-medium">{item.name}</span>
                      <span className="text-slate-400 text-sm ml-2">— {item.reason}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ═══════ PLATFORMS TAB ═══════ */}
        {activeTab === 'platforms' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-2"><Globe size={20} className="text-blue-400" /> Investor Platforms & Networks</h2>
            <p className="text-sm text-slate-400">Where to find and connect with investors in India</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {platforms.map(p => (
                <div key={p.name} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-white font-bold text-lg">{p.name}</h3>
                    <span className="px-2 py-0.5 rounded text-xs bg-blue-500/10 text-blue-400">{p.type}</span>
                  </div>
                  <p className="text-sm text-slate-300">{p.description}</p>
                  <div className="mt-3 space-y-1 text-sm">
                    <p className="text-slate-400"><strong className="text-slate-300">Website:</strong> {p.website}</p>
                    <p className="text-slate-400"><strong className="text-slate-300">Cost:</strong> {p.cost}</p>
                    <p className="text-green-400"><strong className="text-green-300">Best For:</strong> {p.bestFor}</p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-700/50">
                    <p className="text-xs text-purple-400"><strong>Action:</strong> {p.action}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Must-Do List */}
            <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-blue-400 mb-3">Immediate Actions</h3>
              <div className="space-y-2">
                {[
                  'Create LetsVenture campaign — reach 7,000+ angels automatically',
                  'Join Bangalore Angel Network — get referral from any member',
                  'Attend next Startup Saturday Bangalore (Headstart) — free, monthly',
                  'Join TiE Bangalore as startup member — access mentors + TiECon',
                  'Create AngelList profile — visibility to global Indian angel network',
                  'Post on LinkedIn about ReZ — investors discover founders through content',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ═══════ OUTREACH PLAN TAB ═══════ */}
        {activeTab === 'outreach' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-2"><Send size={20} className="text-green-400" /> 12-Week Investor Outreach Plan</h2>
            <p className="text-sm text-slate-400">Step-by-step playbook to raise $500K in 12 weeks</p>

            {outreachSteps.map((phase, pi) => (
              <div key={pi} className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden">
                <div className="bg-slate-700/30 px-5 py-3 border-b border-slate-700/50">
                  <h3 className="text-white font-bold flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${pi === 0 ? 'bg-blue-500/20 text-blue-400' : pi === 1 ? 'bg-purple-500/20 text-purple-400' : pi === 2 ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'}`}>
                      {pi + 1}
                    </div>
                    {phase.phase}
                  </h3>
                </div>
                <div className="p-5 space-y-3">
                  {phase.steps.map((step, si) => (
                    <div key={si} className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-slate-700/50 flex items-center justify-center text-xs text-slate-400 flex-shrink-0 mt-0.5">
                        {si + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-white font-medium text-sm">{step.title}</p>
                          <span className="text-xs text-slate-500">({step.duration})</span>
                          <span className="text-xs text-green-400">{step.owner}</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Timeline Summary */}
            <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-400 mb-3">Timeline Summary</h3>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {[
                  { week: 'Week 1-2', task: 'Preparation', items: 'DPIIT, deck, data room, LetsVenture' },
                  { week: 'Week 3-4', task: 'Warm Intros', items: 'LinkedIn mapping, events, Twitter' },
                  { week: 'Week 5-8', task: 'Active Outreach', items: 'Cold emails, accelerators, demos' },
                  { week: 'Week 9-12', task: 'Closing', items: 'FOMO, negotiate, sign SAFEs' },
                ].map(t => (
                  <div key={t.week} className="bg-slate-800/30 rounded-lg p-4 text-center">
                    <p className="text-green-400 font-bold text-sm">{t.week}</p>
                    <p className="text-white font-medium mt-1">{t.task}</p>
                    <p className="text-slate-400 text-xs mt-1">{t.items}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ═══════ EMAIL TEMPLATES TAB ═══════ */}
        {activeTab === 'playbook' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-2"><Mail size={20} className="text-orange-400" /> Email Templates</h2>
            <p className="text-sm text-slate-400">Copy-paste ready emails for every investor outreach scenario</p>

            <div className="space-y-4">
              {emailTemplates.map((tmpl, i) => (
                <div key={i} className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden">
                  <button onClick={() => setExpandedTemplate(expandedTemplate === i ? null : i)} className="w-full px-5 py-3 text-left flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Mail size={16} className="text-orange-400" />
                      <span className="text-white font-medium">{tmpl.name}</span>
                    </div>
                    {expandedTemplate === i ? <ChevronDown size={16} className="text-slate-400" /> : <ChevronRight size={16} className="text-slate-400" />}
                  </button>
                  {expandedTemplate === i && (
                    <div className="px-5 pb-4 space-y-3 border-t border-slate-700/50 pt-3">
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Subject Line:</p>
                        <p className="text-sm text-orange-400 font-medium">{tmpl.subject}</p>
                      </div>
                      <div className="relative">
                        <button onClick={() => handleCopy(tmpl.body, `tmpl-${i}`)}
                          className="absolute top-2 right-2 flex items-center gap-1 text-xs text-green-400 hover:text-green-300 bg-slate-800 px-2 py-1 rounded">
                          {copiedText === `tmpl-${i}` ? <CheckCircle size={12} /> : <Copy size={12} />}
                          {copiedText === `tmpl-${i}` ? 'Copied!' : 'Copy'}
                        </button>
                        <pre className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-4 text-xs text-slate-300 whitespace-pre-wrap font-mono leading-relaxed">
                          {tmpl.body}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Email Tips */}
            <div className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-orange-400 mb-3">Cold Email Best Practices</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                {[
                  { title: 'Subject Line', tips: ['Keep under 50 chars', 'Include company name + metric', 'Avoid "funding" or "investment" in subject'] },
                  { title: 'Body Structure', tips: ['5 lines max for first email', 'Lead with traction, not problem', 'End with specific CTA (20 min call)'] },
                  { title: 'Timing', tips: ['Send Tuesday-Thursday, 9-11 AM', 'Follow up after 5 business days', 'Max 2 follow-ups, then move on'] },
                  { title: 'Personalization', tips: ['Reference their portfolio company', 'Mention their recent tweet/talk', 'Show you researched their thesis'] },
                ].map(tip => (
                  <div key={tip.title} className="bg-slate-800/30 rounded-lg p-4">
                    <p className="text-white font-bold mb-2">{tip.title}</p>
                    {tip.tips.map((t, i) => (
                      <p key={i} className="text-slate-400 flex items-start gap-1.5">
                        <span className="text-orange-400 mt-0.5">&#x2022;</span> {t}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ═══════ PIPELINE TRACKER TAB ═══════ */}
        {activeTab === 'pipeline' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-2"><Target size={20} className="text-cyan-400" /> Fundraising Pipeline Tracker</h2>
            <p className="text-sm text-slate-400">Track your outreach status across all investor categories</p>

            {/* Pipeline Stages */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {[
                { stage: 'Target', count: microVCFunds.length + angelInvestors.length, color: 'slate' },
                { stage: 'Contacted', count: 0, color: 'blue' },
                { stage: 'Meeting', count: 0, color: 'purple' },
                { stage: 'Due Diligence', count: 0, color: 'yellow' },
                { stage: 'Committed', count: 0, color: 'green' },
              ].map(s => (
                <div key={s.stage} className={`bg-${s.color}-500/10 border border-${s.color}-500/20 rounded-xl p-4 text-center`}>
                  <p className="text-3xl font-bold text-white">{s.count}</p>
                  <p className={`text-xs text-${s.color}-400`}>{s.stage}</p>
                </div>
              ))}
            </div>

            {/* Priority Matrix */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden">
              <div className="px-5 py-3 bg-slate-700/30 border-b border-slate-700/50">
                <h3 className="text-white font-bold">Outreach Priority Matrix</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700/50">
                      <th className="text-left px-4 py-3 text-slate-400 font-medium">Investor</th>
                      <th className="text-left px-4 py-3 text-slate-400 font-medium">Type</th>
                      <th className="text-left px-4 py-3 text-slate-400 font-medium">Check Size</th>
                      <th className="text-left px-4 py-3 text-slate-400 font-medium">Priority</th>
                      <th className="text-left px-4 py-3 text-slate-400 font-medium">Status</th>
                      <th className="text-left px-4 py-3 text-slate-400 font-medium">Next Step</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...microVCFunds, ...angelInvestors]
                      .sort((a, b) => a.priority === 'high' ? -1 : b.priority === 'high' ? 1 : 0)
                      .map(inv => (
                        <tr key={inv.id} className="border-b border-slate-700/30 hover:bg-slate-800/30">
                          <td className="px-4 py-3 text-white font-medium">{inv.name}</td>
                          <td className="px-4 py-3 text-slate-400">{inv.type === 'micro-vc' ? 'Micro VC' : inv.type === 'vc' ? 'VC' : 'Angel'}</td>
                          <td className="px-4 py-3 text-slate-300">{inv.checkSize}</td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-0.5 rounded-full text-xs ${inv.priority === 'high' ? 'text-red-400 bg-red-500/10' : 'text-yellow-400 bg-yellow-500/10'}`}>
                              {inv.priority}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <span className="px-2 py-0.5 rounded-full text-xs text-slate-400 bg-slate-700/50">Target</span>
                          </td>
                          <td className="px-4 py-3 text-green-400 text-xs">Research connections</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Raise Progress */}
            <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">Raise Progress</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-300">Target: $500,000</span>
                  <span className="text-slate-300">Committed: $0</span>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-green-500 h-4 rounded-full" style={{ width: '0%' }} />
                </div>
                <p className="text-xs text-slate-400">0% raised &bull; Start outreach to begin filling the pipeline</p>
              </div>
            </div>
          </div>
        )}

        {/* ═══════ GOVERNMENT GRANTS TAB ═══════ */}
        {activeTab === 'government' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-2"><Shield size={20} className="text-teal-400" /> Government Grants, Schemes & Programs</h2>
            <p className="text-sm text-slate-400">{governmentPrograms.length} programs across government grants, incubators, corporate programs, and tax benefits. Total potential value: ₹3-5Cr+ in non-dilutive funding and credits.</p>

            {/* Summary KPIs */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {[
                { label: 'Central Govt', count: governmentPrograms.filter(p => p.category === 'central').length, color: 'teal' },
                { label: 'Karnataka State', count: governmentPrograms.filter(p => p.category === 'state').length, color: 'purple' },
                { label: 'Incubators', count: governmentPrograms.filter(p => p.category === 'incubator').length, color: 'blue' },
                { label: 'Corporate Programs', count: governmentPrograms.filter(p => p.category === 'corporate').length, color: 'orange' },
                { label: 'Tax Benefits', count: taxBenefits.length, color: 'green' },
              ].map(s => (
                <div key={s.label} className={`bg-slate-800/50 border border-${s.color}-500/20 rounded-lg p-3 text-center`}>
                  <p className={`text-2xl font-bold text-${s.color}-400`}>{s.count}</p>
                  <p className="text-xs text-slate-400">{s.label}</p>
                </div>
              ))}
            </div>

            {/* ── SECTION 1: DPIIT Registration (FIRST STEP) ── */}
            <div className="bg-red-500/5 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-red-400 mb-2 flex items-center gap-2"><AlertTriangle size={18} /> Step 0: DPIIT Registration — BLOCKER for Everything</h3>
              <p className="text-sm text-slate-400 mb-4">Without DPIIT registration, you CANNOT access any government grants, tax benefits, or incubator programs. Do this FIRST.</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="space-y-3">
                  {applicationDocuments.dpiitSteps.map(s => (
                    <div key={s.step} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-red-500/20 flex items-center justify-center text-sm text-red-400 font-bold flex-shrink-0 mt-0.5">{s.step}</div>
                      <div>
                        <p className="text-white font-medium text-sm">{s.title}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3 text-sm">Documents Needed for ALL Programs</h4>
                  <div className="space-y-1.5">
                    {applicationDocuments.universal.map(d => (
                      <div key={d.doc} className="flex items-start gap-2 text-xs">
                        <CheckCircle size={12} className="text-teal-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-white">{d.doc}</span>
                          <span className="text-slate-500 ml-1">({d.needed})</span>
                          <span className="text-teal-400 ml-1">— {d.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── SECTION 2: Central Government Schemes ── */}
            <div>
              <h3 className="text-lg font-bold text-teal-400 mb-3 flex items-center gap-2"><Building2 size={18} /> Central Government Schemes</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {governmentPrograms.filter(p => p.category === 'central').map(prog => (
                  <div key={prog.name} className={`bg-slate-800/50 border rounded-xl p-5 ${prog.priority === 'high' ? 'border-teal-500/30' : 'border-slate-700/50'}`}>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-white font-bold text-sm">{prog.name}</h4>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium flex-shrink-0 ${prog.priority === 'high' ? 'text-red-400 bg-red-500/10' : prog.priority === 'medium' ? 'text-yellow-400 bg-yellow-500/10' : 'text-blue-400 bg-blue-500/10'}`}>{prog.priority}</span>
                    </div>
                    <p className="text-green-400 font-medium mt-2">{prog.amount}</p>
                    <div className="mt-2 space-y-1 text-xs">
                      <p className="text-slate-400"><strong className="text-slate-300">Type:</strong> {prog.type}</p>
                      <p className="text-slate-400"><strong className="text-slate-300">Eligibility:</strong> {prog.eligibility}</p>
                      <p className="text-slate-400"><strong className="text-slate-300">Process:</strong> {prog.process}</p>
                      <p className="text-slate-400"><strong className="text-slate-300">Timeline:</strong> {prog.timeline}</p>
                    </div>
                    <div className="mt-2 pt-2 border-t border-slate-700/50">
                      <p className="text-xs text-teal-400"><strong>ReZ Action:</strong> {prog.rezAction}</p>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {prog.docs.map(d => <span key={d} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-700/50 text-slate-400">{d}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── SECTION 3: Karnataka State Schemes ── */}
            <div>
              <h3 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2"><MapPin size={18} /> Karnataka State Schemes</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {governmentPrograms.filter(p => p.category === 'state').map(prog => (
                  <div key={prog.name} className={`bg-slate-800/50 border rounded-xl p-5 ${prog.priority === 'high' ? 'border-purple-500/30' : 'border-slate-700/50'}`}>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-white font-bold text-sm">{prog.name}</h4>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium flex-shrink-0 ${prog.priority === 'high' ? 'text-red-400 bg-red-500/10' : prog.priority === 'medium' ? 'text-yellow-400 bg-yellow-500/10' : 'text-blue-400 bg-blue-500/10'}`}>{prog.priority}</span>
                    </div>
                    <p className="text-green-400 font-medium mt-2">{prog.amount}</p>
                    <div className="mt-2 space-y-1 text-xs">
                      <p className="text-slate-400"><strong className="text-slate-300">Type:</strong> {prog.type}</p>
                      <p className="text-slate-400"><strong className="text-slate-300">Eligibility:</strong> {prog.eligibility}</p>
                      <p className="text-slate-400"><strong className="text-slate-300">Process:</strong> {prog.process}</p>
                    </div>
                    <div className="mt-2 pt-2 border-t border-slate-700/50">
                      <p className="text-xs text-purple-400"><strong>ReZ Action:</strong> {prog.rezAction}</p>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {prog.docs.map(d => <span key={d} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-700/50 text-slate-400">{d}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── SECTION 4: Incubator Programs ── */}
            <div>
              <h3 className="text-lg font-bold text-blue-400 mb-3 flex items-center gap-2"><Rocket size={18} /> Incubator Programs (Bangalore)</h3>
              <p className="text-xs text-slate-400 mb-3">Getting into an incubator (especially NSRCEL) unlocks: SISFS ₹50L, DST-NIDHI grants, MEITY TIDE 2.0, and massive credibility with VCs.</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {governmentPrograms.filter(p => p.category === 'incubator').map(prog => (
                  <div key={prog.name} className={`bg-slate-800/50 border rounded-xl p-5 ${prog.priority === 'high' ? 'border-blue-500/30' : 'border-slate-700/50'}`}>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-white font-bold text-sm">{prog.name}</h4>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium flex-shrink-0 ${prog.priority === 'high' ? 'text-red-400 bg-red-500/10' : prog.priority === 'medium' ? 'text-yellow-400 bg-yellow-500/10' : 'text-blue-400 bg-blue-500/10'}`}>{prog.priority}</span>
                    </div>
                    <p className="text-green-400 font-medium mt-2">{prog.amount}</p>
                    <div className="mt-2 space-y-1 text-xs">
                      <p className="text-slate-400"><strong className="text-slate-300">Process:</strong> {prog.process}</p>
                      <p className="text-slate-400"><strong className="text-slate-300">Timeline:</strong> {prog.timeline}</p>
                    </div>
                    <div className="mt-2 pt-2 border-t border-slate-700/50">
                      <p className="text-xs text-blue-400"><strong>ReZ Action:</strong> {prog.rezAction}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── SECTION 5: Corporate Startup Programs ── */}
            <div>
              <h3 className="text-lg font-bold text-orange-400 mb-3 flex items-center gap-2"><Briefcase size={18} /> Corporate Startup Programs (Free Credits & Tools)</h3>
              <p className="text-xs text-slate-400 mb-3">Combined value: $300K+ in cloud credits + $50K+ in SaaS tools. All non-dilutive. Apply to ALL of these.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {governmentPrograms.filter(p => p.category === 'corporate').map(prog => (
                  <div key={prog.name} className={`bg-slate-800/50 border rounded-lg p-4 ${prog.priority === 'high' ? 'border-orange-500/30' : 'border-slate-700/50'}`}>
                    <h4 className="text-white font-bold text-sm">{prog.name}</h4>
                    <p className="text-orange-400 font-medium text-sm mt-1">{prog.amount}</p>
                    <p className="text-xs text-slate-400 mt-2">{prog.rezAction}</p>
                    <p className="text-[10px] text-slate-500 mt-1">Timeline: {prog.timeline}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── SECTION 6: Tax Benefits under DPIIT ── */}
            <div>
              <h3 className="text-lg font-bold text-green-400 mb-3 flex items-center gap-2"><DollarSign size={18} /> Tax Benefits (After DPIIT Registration)</h3>
              <p className="text-xs text-slate-400 mb-3">DPIIT registration unlocks 8 major tax/compliance benefits. Combined savings: ₹10L-₹50L+ over first 3 years.</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {taxBenefits.map(tb => (
                  <div key={tb.benefit} className="bg-slate-800/50 border border-green-500/20 rounded-lg p-4">
                    <h4 className="text-white font-bold text-sm">{tb.benefit}</h4>
                    <p className="text-green-400 text-xs font-medium mt-1">{tb.amount}</p>
                    <p className="text-xs text-slate-400 mt-1">{tb.desc}</p>
                    <p className="text-xs text-green-400 mt-2"><strong>Action:</strong> {tb.action}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── SECTION 7: Priority Action Plan ── */}
            <div className="bg-teal-500/5 border border-teal-500/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-teal-400 mb-4">Priority Application Sequence</h3>
              <div className="space-y-3">
                {[
                  { week: 'Day 1-3', title: 'DPIIT Registration', items: 'startupindia.gov.in — Upload CoI, PAN, innovation brief. Get recognition number.', color: 'red' },
                  { week: 'Day 1-3', title: 'Cloud Credits (Instant)', items: 'AWS Activate ($5K), Google Cloud ($2K), Microsoft Founders Hub ($1K), Notion, DigitalOcean — all auto-approved.', color: 'orange' },
                  { week: 'Week 1', title: 'SIPP — File Trademark', items: 'File "ReZ" and "ReZ Coins" trademarks through SIPP facilitator. 50% rebate with DPIIT.', color: 'green' },
                  { week: 'Week 1', title: 'Angel Tax Exemption', items: 'File Form-2 on Startup India portal. MUST be done BEFORE closing the $500K SAFE round.', color: 'red' },
                  { week: 'Week 1-2', title: 'Karnataka Startup Cell', items: 'Register on startupcell.karnataka.gov.in. Apply for Idea2PoC grant (₹5-20L). Register for marketing reimbursement.', color: 'purple' },
                  { week: 'Week 2', title: 'Incubator Applications', items: 'Apply to NSRCEL (IIM-B) — top priority. Also apply to IIIT-B Innovation Centre. Either one unlocks SISFS + TIDE 2.0.', color: 'blue' },
                  { week: 'Week 2-3', title: 'SaaS Credits', items: 'Apply for Razorpay Rize, Zoho for Startups, Freshworks, Segment. Combined value: ₹15L+ in tools.', color: 'orange' },
                  { week: 'Week 3-4', title: 'Government Grants', items: 'After DPIIT: Apply for SISFS (₹50L through incubator), MEITY TIDE 2.0 (₹7L), DST-NIDHI Prayas (₹10L).', color: 'teal' },
                  { week: 'Month 2', title: 'Karnataka Elevate 100', items: 'Prepare application for next cycle (usually Q3). ₹50L non-dilutive grant. Start building relationship with Karnataka IT department.', color: 'purple' },
                  { week: 'Month 2-3', title: 'Higher-Tier Credits', items: 'After incubator acceptance: AWS Portfolio ($100K), Google Accelerator ($200K), Microsoft upgrade ($150K), HubSpot 90% off.', color: 'orange' },
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium bg-${s.color}-500/10 text-${s.color}-400 flex-shrink-0 w-20 text-center`}>{s.week}</span>
                    <div>
                      <p className="text-white font-medium text-sm">{s.title}</p>
                      <p className="text-xs text-slate-400">{s.items}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Total Value Summary ── */}
            <div className="bg-green-500/5 border border-green-500/30 rounded-xl p-6">
              <h3 className="text-green-400 font-bold mb-3">Total Non-Dilutive Value Available</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'Government Grants', value: '₹1.5-3Cr', sub: 'SISFS + Elevate + MEITY + DST + Karnataka' },
                  { label: 'Cloud Credits', value: '$300K+', sub: 'AWS + Google + Microsoft + DO' },
                  { label: 'SaaS Tools', value: '₹20L+', sub: 'Razorpay + Zoho + Freshworks + HubSpot' },
                  { label: 'Tax Savings', value: '₹10-50L+', sub: '80-IAC + Angel Tax + SIPP + self-cert' },
                ].map(v => (
                  <div key={v.label} className="bg-slate-800/50 border border-green-500/20 rounded-lg p-3 text-center">
                    <p className="text-xl font-bold text-green-400">{v.value}</p>
                    <p className="text-xs text-white font-medium">{v.label}</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">{v.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>

      <GlobalFooter />
    </div>
  );
}
