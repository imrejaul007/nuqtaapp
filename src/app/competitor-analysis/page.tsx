'use client';

import React, { useState } from 'react';
import GlobalFooter from '@/components/GlobalFooter';
import {
  Target,
  Shield,
  Zap,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Users,
  Store,
  CreditCard,
  Smartphone,
  Globe,
  DollarSign,
  Award,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Swords,
  Eye,
  Lock,
  Rocket,
  Crown,
  Star,
  Building2,
  Percent,
  Gift,
  Coins,
  Network
} from 'lucide-react';

/**
 * NUQTA COMPETITOR ANALYSIS
 * =========================
 * Comprehensive competitive landscape, threats, and counter-strategies
 */

interface Competitor {
  id: string;
  name: string;
  logo: string;
  type: 'direct' | 'indirect' | 'potential';
  category: string;
  description: string;
  founded: string;
  funding: string;
  users: string;
  merchants: string;
  model: string;
  strengths: string[];
  weaknesses: string[];
  threats: string[];
  ourAdvantage: string[];
  overlap: number; // 0-100 percentage
  threatLevel: 'high' | 'medium' | 'low';
}

export default function CompetitorAnalysisPage() {
  const [activeTab, setActiveTab] = useState('landscape');
  const [expandedCompetitor, setExpandedCompetitor] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<string>('all');

  const tabs = [
    { id: 'landscape', label: 'Competitive Landscape', icon: Eye },
    { id: 'threats', label: 'Threats & Risks', icon: AlertTriangle },
    { id: 'defense', label: 'Defense Strategy', icon: Shield },
    { id: 'moat', label: 'Our Moat', icon: Lock },
    { id: 'playbook', label: '90-Day Playbook', icon: Target },
    { id: 'intel', label: 'Competitive Intel', icon: Eye },
  ];

  // Competitors Data
  const competitors: Competitor[] = [
    // DIRECT COMPETITORS
    {
      id: 'entertainer',
      name: 'The Entertainer',
      logo: '🎭',
      type: 'direct',
      category: 'Discount/Voucher App',
      description: 'Buy-one-get-one-free voucher platform acquired for $100M. Market leader in UAE discount space.',
      founded: '2001',
      funding: 'Acquired by Inspire Brands (~$100M)',
      users: '1M+ subscribers',
      merchants: '10,000+',
      model: 'Annual subscription (AED 495/year) for BOGO vouchers',
      strengths: [
        'Massive brand recognition in UAE',
        'Proven market validation ($100M exit)',
        'Large merchant network',
        'Strong corporate partnerships',
        'Multi-platform (app, physical book)'
      ],
      weaknesses: [
        'Upfront annual payment barrier',
        'Vouchers feel transactional, not rewarding',
        'No real-time cashback or coins',
        'Limited engagement between purchases',
        'Merchants see it as discount, not loyalty',
        'No viral/social mechanics'
      ],
      threats: [
        'Could pivot to cashback model',
        'Brand trust gives them distribution advantage',
        'Could acquire or copy Nuqta features',
        'Corporate relationships with same merchants'
      ],
      ourAdvantage: [
        'Zero upfront cost vs AED 495/year',
        'Earn on EVERY purchase, not just BOGO',
        'Gamified engagement (streaks, tiers)',
        'Social features (gifting, splitting)',
        'Merchants see us as loyalty, not discount',
        'Modern app experience'
      ],
      overlap: 70,
      threatLevel: 'high'
    },
    {
      id: 'smiles',
      name: 'Smiles UAE (Etisalat)',
      logo: '😊',
      type: 'direct',
      category: 'Telecom Rewards Program',
      description: 'Etisalat\'s rewards program offering discounts and deals to subscribers.',
      founded: '2015',
      funding: 'Backed by Etisalat (Telco giant)',
      users: '2M+ Etisalat subscribers',
      merchants: '5,000+',
      model: 'Points from Etisalat spend, redeemable for deals',
      strengths: [
        'Massive existing user base (Etisalat customers)',
        'Deep pockets for marketing',
        'Bundled with telecom services',
        'Trusted brand',
        'F&B and retail partnerships'
      ],
      weaknesses: [
        'Tied to Etisalat ecosystem only',
        'Points system is confusing',
        'Low engagement outside bill payments',
        'Not focused on daily spending',
        'Corporate/slow to innovate'
      ],
      threats: [
        'Could expand beyond Etisalat users',
        'Could offer cashback to compete',
        'Large marketing budget',
        'Telco bundling advantage'
      ],
      ourAdvantage: [
        'Open to everyone, not tied to telco',
        'Simple cashback vs confusing points',
        'Daily engagement focus',
        'Faster innovation cycle',
        'Better merchant value proposition'
      ],
      overlap: 50,
      threatLevel: 'medium'
    },
    {
      id: 'fazaa',
      name: 'Fazaa / Esaad',
      logo: '🏛️',
      type: 'direct',
      category: 'Government Employee Benefits',
      description: 'Government employee discount programs offering exclusive deals.',
      founded: '2012',
      funding: 'Government-backed',
      users: '500K+ government employees',
      merchants: '3,000+',
      model: 'Free for government employees, merchants pay listing fee',
      strengths: [
        'Captive audience (government workers)',
        'Free for users',
        'Strong institutional backing',
        'Premium merchant relationships'
      ],
      weaknesses: [
        'Limited to government employees only',
        'Discount-based, not rewards-based',
        'Basic technology/UX',
        'No engagement mechanics',
        'Static deals, not personalized'
      ],
      threats: [
        'Could open to private sector',
        'Strong merchant relationships',
        'Government backing gives credibility'
      ],
      ourAdvantage: [
        'Open to ALL UAE residents',
        'Modern, engaging experience',
        'Cashback rewards, not just discounts',
        'Personalization and gamification',
        'Social features'
      ],
      overlap: 30,
      threatLevel: 'low'
    },
    // INDIRECT COMPETITORS
    {
      id: 'tabby',
      name: 'Tabby',
      logo: '🐱',
      type: 'indirect',
      category: 'Buy Now Pay Later (BNPL)',
      description: 'Leading BNPL platform in GCC. Raised $200M+. Different model but competes for transaction share.',
      founded: '2019',
      funding: '$200M+ (Series C)',
      users: '5M+ users',
      merchants: '20,000+',
      model: 'BNPL - split payments, merchant pays fee',
      strengths: [
        'Massive funding and growth',
        'Strong brand in UAE',
        'Checkout integration',
        'Large merchant network',
        'Consumer payment habit'
      ],
      weaknesses: [
        'Different value prop (credit vs rewards)',
        'No loyalty/rewards focus',
        'Debt-based model has regulatory risk',
        'Users don\'t engage between purchases'
      ],
      threats: [
        'Could add rewards layer to BNPL',
        'Competes for "checkout" moment',
        'Merchant relationships overlap',
        'Could acquire rewards company'
      ],
      ourAdvantage: [
        'Rewards-based, not debt-based',
        'Daily engagement, not just checkout',
        'Complementary - users can use both',
        'No credit risk or regulatory issues'
      ],
      overlap: 40,
      threatLevel: 'medium'
    },
    {
      id: 'tamara',
      name: 'Tamara',
      logo: '💳',
      type: 'indirect',
      category: 'Buy Now Pay Later (BNPL)',
      description: 'Saudi-based BNPL expanding in UAE. Direct Tabby competitor.',
      founded: '2020',
      funding: '$100M+ (Series B)',
      users: '3M+ users',
      merchants: '10,000+',
      model: 'BNPL - split payments',
      strengths: [
        'Strong Saudi presence',
        'Good funding',
        'Growing in UAE',
        'Merchant integrations'
      ],
      weaknesses: [
        'Same as Tabby - no rewards focus',
        'Second to Tabby in UAE',
        'Credit-based model'
      ],
      threats: [
        'Similar to Tabby - could add rewards',
        'Checkout integration',
        'Merchant overlap'
      ],
      ourAdvantage: [
        'Same advantages as vs Tabby',
        'Complementary services',
        'Different value proposition'
      ],
      overlap: 35,
      threatLevel: 'low'
    },
    {
      id: 'credit-cards',
      name: 'Bank Credit Card Rewards',
      logo: '🏦',
      type: 'indirect',
      category: 'Banking Rewards',
      description: 'Emirates NBD, ADCB, FAB credit card points programs.',
      founded: 'Various',
      funding: 'Bank-backed',
      users: '3M+ credit card holders',
      merchants: 'All card-accepting merchants',
      model: 'Points per AED spent, redeemable for rewards',
      strengths: [
        'Built into existing behavior',
        'Universal acceptance',
        'No app needed',
        'Premium card perks'
      ],
      weaknesses: [
        'Low earn rates (0.5-1%)',
        'Complex redemption',
        'No merchant-specific bonuses',
        'Only for credit card users',
        'No engagement between statements'
      ],
      threats: [
        'Banks could improve rewards',
        'Could partner with merchants for bonuses',
        'Already embedded in payments'
      ],
      ourAdvantage: [
        'Higher earn rates (5-10% vs 1%)',
        'Works with any payment method',
        'Instant rewards, no redemption hassle',
        'Gamified engagement',
        'Merchant-specific bonuses'
      ],
      overlap: 45,
      threatLevel: 'medium'
    },
    // POTENTIAL COMPETITORS
    {
      id: 'careem',
      name: 'Careem (Super App)',
      logo: '🚗',
      type: 'potential',
      category: 'Super App',
      description: 'Careem is building a super app with payments, delivery, and more. Could add rewards.',
      founded: '2012',
      funding: 'Acquired by Uber ($3.1B)',
      users: '10M+ across MENA',
      merchants: 'Growing (Careem Pay)',
      model: 'Super app - rides, delivery, payments',
      strengths: [
        'Massive brand recognition',
        'Large user base',
        'Super app vision',
        'Uber backing and resources',
        'Careem Pay expanding'
      ],
      weaknesses: [
        'Not focused on rewards/loyalty',
        'Rewards is not core business',
        'Super app is complex',
        'Distracted by many verticals'
      ],
      threats: [
        'BIGGEST THREAT: Could add rewards layer',
        'Has the users and merchants',
        'Super app could integrate loyalty',
        'Deep pockets'
      ],
      ourAdvantage: [
        'Rewards is our ONLY focus',
        'Move faster, innovate quicker',
        'Better merchant value prop',
        'We can partner WITH Careem',
        'First-mover in rewards space'
      ],
      overlap: 60,
      threatLevel: 'high'
    },
    {
      id: 'noon',
      name: 'Noon (E-commerce)',
      logo: '🟡',
      type: 'potential',
      category: 'E-commerce',
      description: 'UAE e-commerce giant. Has Noon Pay and could expand to offline rewards.',
      founded: '2016',
      funding: '$1B+ (Emaar backed)',
      users: '5M+ shoppers',
      merchants: 'E-commerce focused',
      model: 'E-commerce marketplace + Noon Pay',
      strengths: [
        'Large user base',
        'Noon Pay for payments',
        'Strong brand',
        'Offline expansion possible'
      ],
      weaknesses: [
        'E-commerce focused',
        'No offline retail presence',
        'Loyalty is not core',
        'Complex operations'
      ],
      threats: [
        'Could expand to offline rewards',
        'Noon Pay could add cashback',
        'Has resources and users'
      ],
      ourAdvantage: [
        'Offline-first focus',
        'Already building merchant network',
        'Rewards specialization',
        'Can complement Noon (online vs offline)'
      ],
      overlap: 30,
      threatLevel: 'medium'
    },
    {
      id: 'international',
      name: 'International Players',
      logo: '🌍',
      type: 'potential',
      category: 'Global Cashback Apps',
      description: 'Rakuten, Ibotta, Dosh - could expand to UAE.',
      founded: 'Various',
      funding: 'Well-funded (Rakuten: $1B+)',
      users: '50M+ globally',
      merchants: 'Varies by market',
      model: 'Cashback on purchases',
      strengths: [
        'Proven model in US/EU',
        'Strong technology',
        'Deep pockets',
        'Experienced teams'
      ],
      weaknesses: [
        'No UAE presence yet',
        'Would need local merchants',
        'Cultural adaptation needed',
        'Regulatory complexity'
      ],
      threats: [
        'Could enter UAE market',
        'Proven playbook',
        'Could acquire local player'
      ],
      ourAdvantage: [
        'Local-first approach',
        'UAE merchant relationships',
        'Cultural understanding',
        'Already in market',
        'Potential acquisition target'
      ],
      overlap: 50,
      threatLevel: 'medium'
    },
    // ADDITIONAL UAE COMPETITORS
    {
      id: 'amber',
      name: 'Amber (Al-Futtaim)',
      logo: '🟠',
      type: 'direct',
      category: 'Retail Loyalty Program',
      description: 'Al-Futtaim Group\'s multi-brand loyalty program across their retail portfolio.',
      founded: '2019',
      funding: 'Backed by Al-Futtaim Group',
      users: '500K+ members',
      merchants: '15+ Al-Futtaim brands',
      model: 'Points-based loyalty across Al-Futtaim stores (IKEA, ACE, etc.)',
      strengths: [
        'Strong parent company (Al-Futtaim)',
        'Cross-brand earning (IKEA, ACE, Marks & Spencer)',
        'Physical retail presence',
        'No subscription fee',
        'Integrated with major UAE retailers'
      ],
      weaknesses: [
        'Limited to Al-Futtaim ecosystem only',
        'No F&B or independent merchants',
        'Points expire',
        'No gamification or social features',
        'Not a true open platform'
      ],
      threats: [
        'Could expand beyond Al-Futtaim brands',
        'Strong retail relationships',
        'Corporate backing for expansion'
      ],
      ourAdvantage: [
        'Open platform for ALL merchants',
        'F&B and SME focus (not big retail)',
        'Real-time cashback vs slow points',
        'Gamified engagement',
        'Social features they lack'
      ],
      overlap: 35,
      threatLevel: 'medium'
    },
    {
      id: 'du-rewards',
      name: 'du Rewards',
      logo: '🔵',
      type: 'direct',
      category: 'Telecom Rewards',
      description: 'du telecom\'s loyalty program competing with Etisalat Smiles.',
      founded: '2018',
      funding: 'Backed by du (EITC)',
      users: '1M+ du customers',
      merchants: '2,000+',
      model: 'Points from telecom spend, redeemable for offers',
      strengths: [
        'Large du customer base',
        'Telco integration',
        'Marketing budget',
        'Exclusive du offers'
      ],
      weaknesses: [
        'Only for du customers',
        'Confusing points system',
        'Low engagement',
        'Slow to update offers',
        'Competing with Smiles'
      ],
      threats: [
        'Could partner with merchants aggressively',
        'Telco bundling',
        'Marketing reach'
      ],
      ourAdvantage: [
        'Open to everyone',
        'Simple cashback model',
        'Not tied to telecom bills',
        'Better user experience',
        'Daily engagement'
      ],
      overlap: 40,
      threatLevel: 'low'
    },
    {
      id: 'dubai-select',
      name: 'Dubai Select',
      logo: '⭐',
      type: 'direct',
      category: 'Premium Membership',
      description: 'Premium discount card targeting affluent expats and tourists.',
      founded: '2015',
      funding: 'Private',
      users: '50K+ members',
      merchants: '500+',
      model: 'Annual membership (AED 299-599) for discounts',
      strengths: [
        'Premium positioning',
        'High-end merchant partners',
        'Luxury focus',
        'Physical card + app'
      ],
      weaknesses: [
        'Niche market (premium only)',
        'Annual subscription barrier',
        'Limited merchant count',
        'No mass market appeal',
        'Discount-only, no rewards'
      ],
      threats: [
        'Could move down-market',
        'Premium merchant relationships',
        'Could add cashback'
      ],
      ourAdvantage: [
        'Free for users',
        'Mass market appeal',
        'Works everywhere, not just luxury',
        'Cashback vs static discounts',
        'Better unit economics'
      ],
      overlap: 25,
      threatLevel: 'low'
    },
    {
      id: 'vip-card',
      name: 'VIP Card UAE',
      logo: '💳',
      type: 'direct',
      category: 'Discount Card',
      description: 'Physical/digital discount card with F&B and entertainment offers.',
      founded: '2012',
      funding: 'Private',
      users: '100K+ cardholders',
      merchants: '1,000+',
      model: 'Annual card (AED 150-250) for discounts',
      strengths: [
        'Lower price than Entertainer',
        'F&B focus',
        'Long history in UAE',
        'Physical card distribution'
      ],
      weaknesses: [
        'Outdated technology',
        'No app innovation',
        'Static discounts only',
        'No user engagement',
        'Declining relevance'
      ],
      threats: [
        'Could modernize with app',
        'Established merchant base',
        'Price advantage vs Entertainer'
      ],
      ourAdvantage: [
        'Free platform',
        'Modern technology',
        'Real-time rewards',
        'Better engagement',
        'Future-proof model'
      ],
      overlap: 45,
      threatLevel: 'low'
    },
    {
      id: 'majid-share',
      name: 'SHARE (Majid Al Futtaim)',
      logo: '🛒',
      type: 'direct',
      category: 'Retail Loyalty',
      description: 'Majid Al Futtaim\'s loyalty program for Carrefour, Mall of Emirates, etc.',
      founded: '2018',
      funding: 'Backed by MAF ($35B conglomerate)',
      users: '2M+ members',
      merchants: 'MAF properties only',
      model: 'Points on purchases at MAF properties, redeemable for rewards',
      strengths: [
        'Massive parent company',
        'Carrefour integration (grocery)',
        'Mall of Emirates, City Centre',
        'Cross-vertical earning',
        'Strong data on spending'
      ],
      weaknesses: [
        'Limited to MAF ecosystem',
        'No independent merchants',
        'Points system, not cashback',
        'No F&B outside malls',
        'Corporate/slow innovation'
      ],
      threats: [
        'Could expand beyond MAF',
        'Grocery integration (daily purchase)',
        'Mall dominance in UAE'
      ],
      ourAdvantage: [
        'Open platform for all',
        'SME and F&B focus',
        'Cashback simplicity',
        'Faster innovation',
        'Complementary (different merchants)'
      ],
      overlap: 40,
      threatLevel: 'medium'
    },
    {
      id: 'shukran',
      name: 'Shukran (Landmark)',
      logo: '🎁',
      type: 'direct',
      category: 'Retail Loyalty',
      description: 'Landmark Group\'s loyalty program for Centrepoint, Splash, Max, etc.',
      founded: '2014',
      funding: 'Backed by Landmark Group',
      users: '5M+ members GCC-wide',
      merchants: 'Landmark brands only',
      model: 'Points on purchases, redeemable across Landmark stores',
      strengths: [
        'Huge GCC footprint',
        'Popular retail brands',
        'Fashion and lifestyle focus',
        'Established program'
      ],
      weaknesses: [
        'Only Landmark brands',
        'No F&B or services',
        'Points expire',
        'No daily engagement',
        'Not a platform'
      ],
      threats: [
        'Could expand to partners',
        'Strong retail data',
        'GCC scale'
      ],
      ourAdvantage: [
        'Open platform',
        'F&B focus (daily habit)',
        'Cashback > points',
        'Social features',
        'Different merchant base'
      ],
      overlap: 30,
      threatLevel: 'low'
    },
    {
      id: 'groupon',
      name: 'Groupon UAE',
      logo: '🟢',
      type: 'indirect',
      category: 'Daily Deals',
      description: 'Flash deal platform for experiences, services, and dining.',
      founded: '2008 (UAE: 2011)',
      funding: 'Public company ($500M+ raised historically)',
      users: '200K+ UAE users',
      merchants: '500+',
      model: 'Flash deals, merchant pays ~50% of deal value',
      strengths: [
        'Known brand',
        'Experience deals',
        'Travel and activities',
        'Email marketing reach'
      ],
      weaknesses: [
        'Declining relevance',
        'Deal fatigue',
        'Merchants see as desperate measure',
        'No loyalty mechanics',
        'One-time transactions'
      ],
      threats: [
        'Could pivot to loyalty',
        'Brand recognition',
        'Existing user base'
      ],
      ourAdvantage: [
        'Loyalty vs one-time deals',
        'Better merchant value prop',
        'Repeat customer focus',
        'Modern experience',
        'Growing vs declining'
      ],
      overlap: 30,
      threatLevel: 'low'
    },
    {
      id: 'cobone',
      name: 'Cobone',
      logo: '🎫',
      type: 'indirect',
      category: 'Daily Deals',
      description: 'Middle East daily deals platform, similar to Groupon.',
      founded: '2010',
      funding: 'Private (Tiger Global backed)',
      users: '300K+ UAE users',
      merchants: '400+',
      model: 'Flash deals for experiences and dining',
      strengths: [
        'Regional presence',
        'Experience focus',
        'Local team',
        'Established brand'
      ],
      weaknesses: [
        'Deal model is dying',
        'Low merchant retention',
        'No loyalty',
        'Commodity service',
        'Struggling business model'
      ],
      threats: [
        'Could pivot to cashback',
        'Could be acquired and pivoted',
        'Has merchant relationships'
      ],
      ourAdvantage: [
        'Growing market (loyalty)',
        'Better unit economics',
        'Merchant-friendly model',
        'Long-term relationships',
        'Modern tech stack'
      ],
      overlap: 25,
      threatLevel: 'low'
    }
  ];

  // Threat Categories
  const threatCategories = [
    {
      category: 'Market Entry Threats',
      icon: Swords,
      color: 'red',
      threats: [
        {
          threat: 'Super App Expansion',
          description: 'Careem, Noon, or regional super apps add rewards/loyalty features',
          likelihood: 'High',
          impact: 'High',
          timeframe: '12-24 months',
          mitigation: 'Move fast, build merchant loyalty, create network effects before they enter'
        },
        {
          threat: 'International Player Entry',
          description: 'Rakuten, Ibotta, or similar enters UAE market',
          likelihood: 'Medium',
          impact: 'High',
          timeframe: '24-36 months',
          mitigation: 'Build local merchant moat, become acquisition target if needed'
        },
        {
          threat: 'Bank-led Loyalty Coalition',
          description: 'UAE banks band together to create unified rewards program',
          likelihood: 'Low',
          impact: 'High',
          timeframe: '24+ months',
          mitigation: 'Partner with banks rather than compete, offer white-label solution'
        }
      ]
    },
    {
      category: 'Competitive Response Threats',
      icon: Shield,
      color: 'orange',
      threats: [
        {
          threat: 'Entertainer Pivots to Cashback',
          description: 'Entertainer adds real-time cashback to complement BOGO',
          likelihood: 'Medium',
          impact: 'High',
          timeframe: '6-12 months',
          mitigation: 'Differentiate on engagement, gamification, and merchant value prop'
        },
        {
          threat: 'BNPL Players Add Rewards',
          description: 'Tabby/Tamara add cashback or loyalty layer',
          likelihood: 'Medium',
          impact: 'Medium',
          timeframe: '12-18 months',
          mitigation: 'Position as complementary, partner rather than compete'
        },
        {
          threat: 'Merchant Exclusivity Deals',
          description: 'Competitors lock up key merchants with exclusivity',
          likelihood: 'Low',
          impact: 'Medium',
          timeframe: 'Ongoing',
          mitigation: 'Focus on non-exclusive partnerships, build merchant value'
        }
      ]
    },
    {
      category: 'Operational Threats',
      icon: AlertTriangle,
      color: 'yellow',
      threats: [
        {
          threat: 'Merchant Churn',
          description: 'Merchants leave due to low ROI or competitor offers',
          likelihood: 'Medium',
          impact: 'High',
          timeframe: 'Ongoing',
          mitigation: 'Strong success team, prove ROI, create switching costs'
        },
        {
          threat: 'User Fatigue',
          description: 'Users lose interest if rewards feel insufficient',
          likelihood: 'Medium',
          impact: 'High',
          timeframe: 'Ongoing',
          mitigation: 'Gamification, surprise rewards, social features, tier progression'
        },
        {
          threat: 'Fraud/Abuse',
          description: 'Users game the system to earn rewards unfairly',
          likelihood: 'High',
          impact: 'Medium',
          timeframe: 'Ongoing',
          mitigation: 'Fraud detection, transaction limits, merchant verification'
        }
      ]
    },
    {
      category: 'Regulatory Threats',
      icon: Building2,
      color: 'purple',
      threats: [
        {
          threat: 'Cashback Regulations',
          description: 'UAE regulates cashback/rewards programs',
          likelihood: 'Low',
          impact: 'High',
          timeframe: '24+ months',
          mitigation: 'Stay compliant, engage with regulators proactively'
        },
        {
          threat: 'Data Privacy Laws',
          description: 'Stricter data regulations limit targeting',
          likelihood: 'Medium',
          impact: 'Medium',
          timeframe: '12-24 months',
          mitigation: 'Privacy-first design, consent management, anonymization'
        },
        {
          threat: 'Payment License Requirements',
          description: 'Need expensive licenses to process payments',
          likelihood: 'Medium',
          impact: 'High',
          timeframe: '6-12 months',
          mitigation: 'Partner with licensed payment providers initially'
        }
      ]
    }
  ];

  // Defense Strategies
  const defenseStrategies = [
    {
      strategy: 'Network Effects',
      icon: Network,
      description: 'Build a flywheel where more users attract more merchants, and more merchants attract more users.',
      tactics: [
        'Focus on density in specific neighborhoods first',
        'Create merchant clusters (coffee shop + salon + grocery)',
        'User-generated merchant requests to guide expansion',
        'Social features that require friends to use Nuqta'
      ],
      metrics: ['User-to-user referral rate', 'Merchant density per area', 'Cross-merchant usage']
    },
    {
      strategy: 'Merchant Lock-In',
      icon: Lock,
      description: 'Make switching costs high for merchants through deep integration and proven ROI.',
      tactics: [
        'Integrate with POS systems where possible',
        'Provide valuable analytics and insights',
        'Create merchant dashboard they rely on',
        'Offer marketing tools competitors don\'t have',
        'Build personal relationships with owners'
      ],
      metrics: ['Merchant NPS', 'Dashboard login frequency', 'Churn rate']
    },
    {
      strategy: 'User Habit Formation',
      icon: Zap,
      description: 'Create daily engagement habits that make Nuqta part of users\' routine.',
      tactics: [
        'Daily check-in rewards',
        'Streak mechanics with escalating rewards',
        'Personalized deal notifications',
        'Social gifting for occasions',
        'Gamified tiers and badges'
      ],
      metrics: ['DAU/MAU ratio', 'Streak length', 'Sessions per day']
    },
    {
      strategy: 'Data & Personalization Moat',
      icon: Target,
      description: 'Build proprietary data assets that enable better personalization than competitors.',
      tactics: [
        'Learn user preferences from transactions',
        'Personalized deal recommendations',
        'Predictive offers based on behavior',
        'Location-aware suggestions',
        'Cross-merchant insights'
      ],
      metrics: ['Recommendation conversion rate', 'Personalization accuracy', 'User satisfaction']
    },
    {
      strategy: 'Speed & Innovation',
      icon: Rocket,
      description: 'Move faster than larger competitors who are slower to innovate.',
      tactics: [
        'Weekly feature releases',
        'Rapid A/B testing',
        'Close user feedback loops',
        'First to market with new features',
        'Agile team structure'
      ],
      metrics: ['Feature release velocity', 'Time to market', 'User feature adoption']
    },
    {
      strategy: 'Partnership Strategy',
      icon: Building2,
      description: 'Partner with potential competitors rather than fighting them.',
      tactics: [
        'White-label for banks and telcos',
        'Integration with BNPL players',
        'Corporate employee benefit partnerships',
        'Event and venue partnerships',
        'Co-marketing with complementary brands'
      ],
      metrics: ['Partnership revenue', 'B2B customer count', 'Integration usage']
    }
  ];

  // Our Moat Elements
  const moatElements = [
    {
      element: 'First Mover in UAE Unified Rewards',
      icon: Crown,
      strength: 90,
      description: 'No true unified cashback platform exists in UAE. We\'re building the network before others enter.',
      evidence: [
        'Entertainer is vouchers, not cashback',
        'Bank rewards are fragmented',
        'BNPL doesn\'t do rewards',
        'Super apps haven\'t focused here yet'
      ]
    },
    {
      element: 'Local Market Expertise',
      icon: Globe,
      strength: 85,
      description: 'Deep understanding of UAE consumer behavior, merchant landscape, and cultural nuances.',
      evidence: [
        'Founder network in UAE F&B and retail',
        'Understanding of expat vs local dynamics',
        'Ramadan, Eid, DSF campaign expertise',
        'Arabic + English content capability'
      ]
    },
    {
      element: 'Merchant Value Proposition',
      icon: Store,
      strength: 80,
      description: 'Unlike discount apps, we position as a customer loyalty tool that increases repeat visits.',
      evidence: [
        'Merchants see ROI through repeat customers',
        'We don\'t erode their margins like discounts',
        'Analytics help them understand customers',
        'Marketing partnership, not just listing'
      ]
    },
    {
      element: 'User Engagement Design',
      icon: Zap,
      strength: 75,
      description: 'Gamification, social features, and habit loops create daily engagement competitors lack.',
      evidence: [
        'Streaks drive daily opens',
        'Social gifting creates viral loops',
        'Tiers create progression motivation',
        'Challenges keep users engaged'
      ]
    },
    {
      element: 'Technology & Speed',
      icon: Rocket,
      strength: 70,
      description: 'Lean startup approach allows rapid iteration and feature deployment.',
      evidence: [
        'Weekly releases vs monthly for corporates',
        'Direct user feedback implementation',
        'Modern tech stack (React Native, Node.js)',
        'No legacy systems to maintain'
      ]
    },
    {
      element: 'Capital Efficiency',
      icon: DollarSign,
      strength: 85,
      description: 'Zero-CAC acquisition model through merchant-funded rewards creates sustainable unit economics.',
      evidence: [
        'Users acquired at merchant touchpoints',
        'Viral loops reduce marketing spend',
        '24x LTV:CAC ratio',
        'Cash-flow positive per transaction'
      ]
    }
  ];

  const filteredCompetitors = filterType === 'all'
    ? competitors
    : competitors.filter(c => c.type === filterType);

  const getThreatColor = (level: string) => {
    switch (level) {
      case 'high': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'low': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a1628] via-[#1a2d4a] to-[#0a1628] border-b border-[#c9a227]/20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-[#c9a227]/20 rounded-xl">
              <Swords className="w-8 h-8 text-[#c9a227]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Competitor Analysis</h1>
              <p className="text-gray-400">Threats, Defense Strategies & Competitive Moat</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/30">
              <p className="text-red-400 text-sm">High Threat</p>
              <p className="text-2xl font-bold">{competitors.filter(c => c.threatLevel === 'high').length}</p>
            </div>
            <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/30">
              <p className="text-yellow-400 text-sm">Medium Threat</p>
              <p className="text-2xl font-bold">{competitors.filter(c => c.threatLevel === 'medium').length}</p>
            </div>
            <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
              <p className="text-green-400 text-sm">Low Threat</p>
              <p className="text-2xl font-bold">{competitors.filter(c => c.threatLevel === 'low').length}</p>
            </div>
            <div className="bg-[#c9a227]/10 rounded-lg p-4 border border-[#c9a227]/30">
              <p className="text-[#c9a227] text-sm">Total Tracked</p>
              <p className="text-2xl font-bold">{competitors.length}</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mt-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#c9a227] text-[#0a1628] font-bold'
                    : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Landscape Tab */}
        {activeTab === 'landscape' && (
          <div className="space-y-8">
            {/* Filter */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Filter:</span>
              {['all', 'direct', 'indirect', 'potential'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    filterType === type
                      ? 'bg-[#c9a227] text-[#0a1628]'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                  {type !== 'all' && ` (${competitors.filter(c => c.type === type).length})`}
                </button>
              ))}
            </div>

            {/* Competitor Cards */}
            <div className="space-y-4">
              {filteredCompetitors.map((competitor) => {
                const isExpanded = expandedCompetitor === competitor.id;
                return (
                  <div key={competitor.id} className="bg-[#0a1628] rounded-xl border border-gray-800 overflow-hidden">
                    <div
                      className="p-6 cursor-pointer hover:bg-gray-800/30 transition-colors"
                      onClick={() => setExpandedCompetitor(isExpanded ? null : competitor.id)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className="text-4xl">{competitor.logo}</div>
                          <div>
                            <div className="flex items-center gap-3">
                              <h3 className="text-xl font-bold">{competitor.name}</h3>
                              <span className={`px-2 py-0.5 rounded text-xs border ${getThreatColor(competitor.threatLevel)}`}>
                                {competitor.threatLevel} threat
                              </span>
                            </div>
                            <p className="text-gray-400 text-sm mt-1">{competitor.category}</p>
                            <p className="text-gray-500 text-sm mt-2 max-w-2xl">{competitor.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-gray-500 text-xs">Overlap</p>
                            <p className="text-[#c9a227] font-bold">{competitor.overlap}%</p>
                          </div>
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-gray-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                      </div>

                      {/* Quick Stats */}
                      <div className="flex flex-wrap gap-4 mt-4">
                        <div className="bg-gray-800/50 rounded-lg px-3 py-2">
                          <p className="text-gray-500 text-xs">Users</p>
                          <p className="text-white text-sm font-medium">{competitor.users}</p>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg px-3 py-2">
                          <p className="text-gray-500 text-xs">Merchants</p>
                          <p className="text-white text-sm font-medium">{competitor.merchants}</p>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg px-3 py-2">
                          <p className="text-gray-500 text-xs">Funding</p>
                          <p className="text-white text-sm font-medium">{competitor.funding}</p>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg px-3 py-2">
                          <p className="text-gray-500 text-xs">Model</p>
                          <p className="text-white text-sm font-medium">{competitor.model}</p>
                        </div>
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="border-t border-gray-800 p-6 bg-gray-900/30">
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Strengths & Weaknesses */}
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-green-400 font-semibold mb-2 flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" />
                                Their Strengths
                              </h4>
                              <ul className="space-y-1">
                                {competitor.strengths.map((s, idx) => (
                                  <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                                    <span className="text-green-400">•</span> {s}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-red-400 font-semibold mb-2 flex items-center gap-2">
                                <XCircle className="w-4 h-4" />
                                Their Weaknesses
                              </h4>
                              <ul className="space-y-1">
                                {competitor.weaknesses.map((w, idx) => (
                                  <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                                    <span className="text-red-400">•</span> {w}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Threats & Our Advantages */}
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-yellow-400 font-semibold mb-2 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" />
                                Threats to Nuqta
                              </h4>
                              <ul className="space-y-1">
                                {competitor.threats.map((t, idx) => (
                                  <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                                    <span className="text-yellow-400">•</span> {t}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-[#c9a227] font-semibold mb-2 flex items-center gap-2">
                                <Star className="w-4 h-4" />
                                Our Advantage
                              </h4>
                              <ul className="space-y-1">
                                {competitor.ourAdvantage.map((a, idx) => (
                                  <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                                    <span className="text-[#c9a227]">•</span> {a}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Threats Tab */}
        {activeTab === 'threats' && (
          <div className="space-y-8">
            {/* Threat Matrix Overview */}
            <div className="bg-gradient-to-r from-[#0a1628] to-[#1a2d4a] rounded-2xl p-8 border border-[#c9a227]/20">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-[#c9a227]" />
                Threat Assessment Matrix
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/30">
                  <h4 className="text-red-400 font-semibold mb-2">High Impact + High Likelihood</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Super app (Careem) adds rewards</li>
                    <li>• Entertainer pivots to cashback</li>
                    <li>• Merchant churn from low ROI</li>
                  </ul>
                </div>
                <div className="bg-orange-500/10 rounded-xl p-4 border border-orange-500/30">
                  <h4 className="text-orange-400 font-semibold mb-2">High Impact + Low Likelihood</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Bank-led loyalty coalition</li>
                    <li>• Regulatory changes</li>
                    <li>• Major international entry</li>
                  </ul>
                </div>
                <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/30">
                  <h4 className="text-yellow-400 font-semibold mb-2">Low Impact + High Likelihood</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• User fatigue</li>
                    <li>• Fraud/abuse attempts</li>
                    <li>• Copycat startups</li>
                  </ul>
                </div>
                <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/30">
                  <h4 className="text-green-400 font-semibold mb-2">Low Impact + Low Likelihood</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Niche competitors</li>
                    <li>• Technology disruption</li>
                    <li>• Economic downturn</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Detailed Threats by Category */}
            {threatCategories.map((category) => (
              <div key={category.category} className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
                <h3 className={`text-lg font-bold mb-6 flex items-center gap-2 text-${category.color}-400`}>
                  <category.icon className="w-5 h-5" />
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.threats.map((threat, idx) => (
                    <div key={idx} className="bg-gray-800/30 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-white font-semibold">{threat.threat}</h4>
                        <div className="flex gap-2">
                          <span className={`px-2 py-0.5 rounded text-xs ${
                            threat.likelihood === 'High' ? 'bg-red-500/20 text-red-400' :
                            threat.likelihood === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-green-500/20 text-green-400'
                          }`}>
                            {threat.likelihood} likelihood
                          </span>
                          <span className={`px-2 py-0.5 rounded text-xs ${
                            threat.impact === 'High' ? 'bg-red-500/20 text-red-400' :
                            threat.impact === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-green-500/20 text-green-400'
                          }`}>
                            {threat.impact} impact
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{threat.description}</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-gray-500 text-xs">Timeframe: </span>
                          <span className="text-white text-sm">{threat.timeframe}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-[#c9a227]" />
                          <span className="text-[#c9a227] text-sm">{threat.mitigation}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Defense Strategy Tab */}
        {activeTab === 'defense' && (
          <div className="space-y-8">
            {/* Strategy Overview */}
            <div className="bg-gradient-to-r from-[#0a1628] to-[#1a2d4a] rounded-2xl p-8 border border-[#c9a227]/20">
              <h3 className="text-xl font-bold mb-4">Defense Strategy Framework</h3>
              <p className="text-gray-400 mb-6">
                Our competitive defense relies on building sustainable advantages that are difficult to replicate,
                rather than competing on features that can be copied.
              </p>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {defenseStrategies.map((strategy) => (
                  <div key={strategy.strategy} className="text-center">
                    <div className="w-12 h-12 bg-[#c9a227]/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <strategy.icon className="w-6 h-6 text-[#c9a227]" />
                    </div>
                    <p className="text-xs text-gray-400">{strategy.strategy}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Strategies */}
            <div className="grid md:grid-cols-2 gap-6">
              {defenseStrategies.map((strategy) => (
                <div key={strategy.strategy} className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-[#c9a227]/20 rounded-lg">
                      <strategy.icon className="w-5 h-5 text-[#c9a227]" />
                    </div>
                    <h4 className="text-lg font-bold">{strategy.strategy}</h4>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{strategy.description}</p>

                  <h5 className="text-[#c9a227] text-sm font-semibold mb-2">Tactics:</h5>
                  <ul className="space-y-1 mb-4">
                    {strategy.tactics.map((tactic, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                        {tactic}
                      </li>
                    ))}
                  </ul>

                  <h5 className="text-[#c9a227] text-sm font-semibold mb-2">Key Metrics:</h5>
                  <div className="flex flex-wrap gap-2">
                    {strategy.metrics.map((metric, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Our Moat Tab */}
        {activeTab === 'moat' && (
          <div className="space-y-8">
            {/* Moat Summary */}
            <div className="bg-gradient-to-r from-[#0a1628] to-[#1a2d4a] rounded-2xl p-8 border border-[#c9a227]/20">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-8 h-8 text-[#c9a227]" />
                <div>
                  <h3 className="text-xl font-bold">Nuqta's Competitive Moat</h3>
                  <p className="text-gray-400">What makes us defensible against competitors</p>
                </div>
              </div>
              <div className="bg-gray-800/30 rounded-xl p-6">
                <p className="text-gray-300 leading-relaxed">
                  Nuqta's moat is built on <span className="text-[#c9a227] font-semibold">network effects</span>,
                  <span className="text-[#c9a227] font-semibold"> local market expertise</span>, and
                  <span className="text-[#c9a227] font-semibold"> capital efficiency</span>. Unlike competitors
                  who either focus on discounts (Entertainer), credit (BNPL), or are tied to specific ecosystems
                  (telcos, banks), Nuqta is building the <span className="text-white font-semibold">unified rewards
                  infrastructure</span> for UAE retail that anyone can use and every merchant benefits from.
                </p>
              </div>
            </div>

            {/* Moat Elements */}
            <div className="space-y-4">
              {moatElements.map((moat) => (
                <div key={moat.element} className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#c9a227]/20 rounded-xl">
                      <moat.icon className="w-6 h-6 text-[#c9a227]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold">{moat.element}</h4>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500 text-sm">Strength:</span>
                          <span className="text-[#c9a227] font-bold">{moat.strength}%</span>
                        </div>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full mb-4 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#c9a227] to-[#e8c547] rounded-full"
                          style={{ width: `${moat.strength}%` }}
                        />
                      </div>
                      <p className="text-gray-400 text-sm mb-4">{moat.description}</p>
                      <div className="bg-gray-800/30 rounded-lg p-4">
                        <h5 className="text-[#c9a227] text-sm font-semibold mb-2">Evidence:</h5>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {moat.evidence.map((e, idx) => (
                            <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                              {e}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Moat Building Priorities */}
            <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#c9a227]" />
                Moat Building Priorities (Next 12 Months)
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/30">
                  <h4 className="text-red-400 font-semibold mb-3">Q1-Q2: Foundation</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Sign 250+ merchants</li>
                    <li>• Achieve 10K MAU</li>
                    <li>• Prove unit economics</li>
                    <li>• Build core engagement loops</li>
                  </ul>
                </div>
                <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/30">
                  <h4 className="text-yellow-400 font-semibold mb-3">Q3: Network Effects</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Launch referral program</li>
                    <li>• Create merchant density clusters</li>
                    <li>• Enable social features</li>
                    <li>• Start B2B partnerships</li>
                  </ul>
                </div>
                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                  <h4 className="text-green-400 font-semibold mb-3">Q4: Scale & Lock-In</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• POS integrations</li>
                    <li>• Advanced personalization</li>
                    <li>• Bank/telco partnerships</li>
                    <li>• Geographic expansion</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why We Win */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-green-500/20 rounded-2xl p-8 border border-[#c9a227]/30">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Crown className="w-6 h-6 text-[#c9a227]" />
                Why Nuqta Wins
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">vs. Entertainer:</h4>
                  <p className="text-gray-300 text-sm">
                    Zero cost to users vs AED 495/year. Cashback on EVERY purchase vs limited BOGO.
                    Modern engagement vs static vouchers.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">vs. Bank Rewards:</h4>
                  <p className="text-gray-300 text-sm">
                    5-10% rewards vs 0.5-1%. Works with any payment. Instant rewards vs complex redemption.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">vs. BNPL (Tabby/Tamara):</h4>
                  <p className="text-gray-300 text-sm">
                    Rewards-based vs debt-based. Daily engagement vs checkout only. Complementary services.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">vs. Super Apps (Careem):</h4>
                  <p className="text-gray-300 text-sm">
                    Rewards is our ONLY focus vs their distracted attention. Move faster, innovate quicker.
                    We can partner with them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 90-Day Playbook Tab */}
        {activeTab === 'playbook' && (
          <div className="space-y-8">
            {/* Playbook Overview */}
            <div className="bg-gradient-to-r from-[#0a1628] to-[#1a2d4a] rounded-2xl p-8 border border-[#c9a227]/20">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-[#c9a227]" />
                <div>
                  <h3 className="text-xl font-bold">90-Day Competitive Response Playbook</h3>
                  <p className="text-gray-400">Week-by-week actions to outmaneuver competitors</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/30 text-center">
                  <p className="text-red-400 font-bold text-2xl">Month 1</p>
                  <p className="text-gray-400 text-sm">Foundation & Intel</p>
                </div>
                <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/30 text-center">
                  <p className="text-yellow-400 font-bold text-2xl">Month 2</p>
                  <p className="text-gray-400 text-sm">Differentiation</p>
                </div>
                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30 text-center">
                  <p className="text-green-400 font-bold text-2xl">Month 3</p>
                  <p className="text-gray-400 text-sm">Market Position</p>
                </div>
              </div>
            </div>

            {/* Month 1 */}
            <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-red-400">
                <span className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-sm">M1</span>
                Month 1: Foundation & Intelligence Gathering
              </h3>
              <div className="space-y-4">
                {[
                  {
                    week: 'Week 1-2: Competitive Intelligence Setup',
                    actions: [
                      'Download and analyze all competitor apps (Entertainer, Smiles, Amber, SHARE)',
                      'Create accounts, test user journeys, document UX flows',
                      'Set up Google Alerts for all competitor names',
                      'Follow all competitors on LinkedIn, track job postings',
                      'Map competitor merchant networks (who do they have that we want?)',
                      'Create competitive tracking spreadsheet with weekly updates'
                    ]
                  },
                  {
                    week: 'Week 3-4: Merchant Intelligence',
                    actions: [
                      'Interview 10 merchants who use competitor programs',
                      'Ask: What works? What frustrates them? What\'s missing?',
                      'Document competitor pricing and terms',
                      'Identify merchants unhappy with current programs',
                      'Create "merchant pain points" matrix by competitor',
                      'Develop counter-positioning for each major competitor'
                    ]
                  }
                ].map((block, idx) => (
                  <div key={idx} className="bg-gray-800/30 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-3">{block.week}</h4>
                    <ul className="space-y-2">
                      {block.actions.map((action, actionIdx) => (
                        <li key={actionIdx} className="text-gray-300 text-sm flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Month 2 */}
            <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-yellow-400">
                <span className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center text-sm">M2</span>
                Month 2: Differentiation & Counter-Positioning
              </h3>
              <div className="space-y-4">
                {[
                  {
                    week: 'Week 5-6: Messaging & Positioning',
                    actions: [
                      'Create "Why Nuqta vs [Competitor]" one-pagers for sales team',
                      'Develop merchant objection handling scripts',
                      'Build comparison landing pages for SEO',
                      'Create social content highlighting our advantages',
                      'Train team on competitive talking points',
                      'Prepare "steal-back" offers for merchants on competitor platforms'
                    ]
                  },
                  {
                    week: 'Week 7-8: Feature Differentiation',
                    actions: [
                      'Launch 2-3 features competitors don\'t have (social gifting, streaks)',
                      'Create PR around unique features',
                      'Document case studies showing our advantages',
                      'Build "switching calculator" showing savings vs Entertainer',
                      'Partner with merchants frustrated by competitor terms',
                      'Start targeted outreach to competitor merchants'
                    ]
                  }
                ].map((block, idx) => (
                  <div key={idx} className="bg-gray-800/30 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-3">{block.week}</h4>
                    <ul className="space-y-2">
                      {block.actions.map((action, actionIdx) => (
                        <li key={actionIdx} className="text-gray-300 text-sm flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Month 3 */}
            <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-green-400">
                <span className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-sm">M3</span>
                Month 3: Market Position & Defense
              </h3>
              <div className="space-y-4">
                {[
                  {
                    week: 'Week 9-10: Market Capture',
                    actions: [
                      'Target 20% of competitor merchant lists with direct outreach',
                      'Offer migration incentives (free first 3 months)',
                      'Create co-marketing campaigns with switched merchants',
                      'Build density in areas where competitors are weak',
                      'Launch referral bonus for merchants who bring others',
                      'PR campaign: "The future of loyalty in UAE"'
                    ]
                  },
                  {
                    week: 'Week 11-12: Lock-In & Defense',
                    actions: [
                      'Launch merchant success metrics dashboard',
                      'Create merchant advisory board (lock in relationships)',
                      'Begin POS integration discussions (switching cost)',
                      'Establish exclusive partnerships in key categories',
                      'Document and publish merchant ROI case studies',
                      'Create early-adopter merchant benefits (lock-in)'
                    ]
                  }
                ].map((block, idx) => (
                  <div key={idx} className="bg-gray-800/30 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-3">{block.week}</h4>
                    <ul className="space-y-2">
                      {block.actions.map((action, actionIdx) => (
                        <li key={actionIdx} className="text-gray-300 text-sm flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Counter-Strategy by Competitor */}
            <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Swords className="w-5 h-5 text-[#c9a227]" />
                Specific Counter-Strategies by Competitor
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/30">
                  <h4 className="text-red-400 font-semibold mb-3">🎭 vs. Entertainer (HIGH PRIORITY)</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li><strong>Message:</strong> "Free rewards on EVERY purchase, no AED 495 subscription"</li>
                    <li><strong>Target:</strong> Price-sensitive users who won't pay upfront</li>
                    <li><strong>Action:</strong> Create "Entertainer migration" landing page</li>
                    <li><strong>Timing:</strong> Attack when subscriptions expire (Jan/Sept)</li>
                    <li><strong>Content:</strong> "How much did you really save with Entertainer?"</li>
                  </ul>
                </div>
                <div className="bg-orange-500/10 rounded-lg p-4 border border-orange-500/30">
                  <h4 className="text-orange-400 font-semibold mb-3">🚗 vs. Careem (HIGH PRIORITY)</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li><strong>Message:</strong> "We focus 100% on rewards - they're distracted"</li>
                    <li><strong>Target:</strong> Partner, not compete</li>
                    <li><strong>Action:</strong> Propose integration/partnership</li>
                    <li><strong>Timing:</strong> Before they build rewards in-house</li>
                    <li><strong>Content:</strong> Position as complementary service</li>
                  </ul>
                </div>
                <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/30">
                  <h4 className="text-yellow-400 font-semibold mb-3">😊 vs. Smiles/du Rewards</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li><strong>Message:</strong> "Works for everyone, not just [telco] customers"</li>
                    <li><strong>Target:</strong> Non-Etisalat/du users (50% of market)</li>
                    <li><strong>Action:</strong> Highlight simplicity vs confusing points</li>
                    <li><strong>Timing:</strong> Ongoing - they're slow to improve</li>
                    <li><strong>Content:</strong> "Simple cashback vs complicated points math"</li>
                  </ul>
                </div>
                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                  <h4 className="text-green-400 font-semibold mb-3">🛒 vs. SHARE/Amber/Shukran</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li><strong>Message:</strong> "Earn at your favorite local spots, not just big chains"</li>
                    <li><strong>Target:</strong> Users who shop beyond these ecosystems</li>
                    <li><strong>Action:</strong> Focus on SMEs and F&B they don't have</li>
                    <li><strong>Timing:</strong> Position as complementary</li>
                    <li><strong>Content:</strong> "Rewards at every neighborhood cafe"</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Weekly Competitive Rituals */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-green-500/20 rounded-2xl p-6 border border-[#c9a227]/30">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#c9a227]" />
                Weekly Competitive Rituals
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Every Monday</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Review competitor app updates</li>
                    <li>• Check competitor social media</li>
                    <li>• Update tracking spreadsheet</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Every Wednesday</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Review competitor job postings</li>
                    <li>• Check press/news mentions</li>
                    <li>• Note any merchant movements</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Every Friday</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Weekly competitive summary</li>
                    <li>• Share insights with team</li>
                    <li>• Plan response actions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Competitive Intel Tab */}
        {activeTab === 'intel' && (
          <div className="space-y-8">
            {/* Intel Overview */}
            <div className="bg-gradient-to-r from-[#0a1628] to-[#1a2d4a] rounded-2xl p-8 border border-[#c9a227]/20">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-8 h-8 text-[#c9a227]" />
                <div>
                  <h3 className="text-xl font-bold">Competitive Intelligence System</h3>
                  <p className="text-gray-400">How to gather and use competitive information</p>
                </div>
              </div>
              <p className="text-gray-300">
                Systematic competitive intelligence gives us an early warning system for threats and
                helps us identify opportunities to differentiate. Here's our framework for gathering,
                analyzing, and acting on competitive information.
              </p>
            </div>

            {/* Intelligence Sources */}
            <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#c9a227]" />
                Intelligence Gathering Sources
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
                  <h4 className="text-blue-400 font-semibold mb-3">Digital Intelligence</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• App Store reviews & ratings</li>
                    <li>• Social media monitoring</li>
                    <li>• Google Alerts (competitor names)</li>
                    <li>• LinkedIn job postings</li>
                    <li>• Press releases & news</li>
                    <li>• Website changes (Wayback Machine)</li>
                    <li>• SimilarWeb traffic estimates</li>
                  </ul>
                </div>
                <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/30">
                  <h4 className="text-purple-400 font-semibold mb-3">Human Intelligence</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Merchant interviews</li>
                    <li>• User feedback from competitor users</li>
                    <li>• Industry events & conferences</li>
                    <li>• Informal conversations</li>
                    <li>• Former employee insights (ethical)</li>
                    <li>• Investor/advisor network</li>
                    <li>• Mystery shopping competitors</li>
                  </ul>
                </div>
                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                  <h4 className="text-green-400 font-semibold mb-3">Market Intelligence</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Industry reports (Statista, etc.)</li>
                    <li>• Analyst reports</li>
                    <li>• Funding announcements</li>
                    <li>• Partnership announcements</li>
                    <li>• Regulatory filings</li>
                    <li>• Market size data</li>
                    <li>• Consumer surveys</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tracking Dashboard */}
            <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#c9a227]" />
                Competitive Tracking Dashboard Template
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4 text-gray-400">Metric</th>
                      <th className="text-center py-3 px-4 text-red-400">Entertainer</th>
                      <th className="text-center py-3 px-4 text-blue-400">Smiles</th>
                      <th className="text-center py-3 px-4 text-orange-400">Careem</th>
                      <th className="text-center py-3 px-4 text-[#c9a227]">Nuqta</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 text-gray-300">App Store Rating</td>
                      <td className="text-center py-3 px-4 text-white">4.7</td>
                      <td className="text-center py-3 px-4 text-white">4.2</td>
                      <td className="text-center py-3 px-4 text-white">4.6</td>
                      <td className="text-center py-3 px-4 text-[#c9a227]">4.2</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 text-gray-300">Instagram Followers</td>
                      <td className="text-center py-3 px-4 text-white">450K</td>
                      <td className="text-center py-3 px-4 text-white">280K</td>
                      <td className="text-center py-3 px-4 text-white">800K</td>
                      <td className="text-center py-3 px-4 text-[#c9a227]">0</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 text-gray-300">Est. Active Users</td>
                      <td className="text-center py-3 px-4 text-white">800K</td>
                      <td className="text-center py-3 px-4 text-white">1.5M</td>
                      <td className="text-center py-3 px-4 text-white">2M+</td>
                      <td className="text-center py-3 px-4 text-[#c9a227]">847</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 text-gray-300">Merchant Count</td>
                      <td className="text-center py-3 px-4 text-white">10,000+</td>
                      <td className="text-center py-3 px-4 text-white">5,000+</td>
                      <td className="text-center py-3 px-4 text-white">20,000+</td>
                      <td className="text-center py-3 px-4 text-[#c9a227]">3</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 text-gray-300">Recent Updates</td>
                      <td className="text-center py-3 px-4 text-white">Jan 2026</td>
                      <td className="text-center py-3 px-4 text-white">Dec 2025</td>
                      <td className="text-center py-3 px-4 text-white">Feb 2026</td>
                      <td className="text-center py-3 px-4 text-[#c9a227]">Feb 2026</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 text-gray-300">New Features (90d)</td>
                      <td className="text-center py-3 px-4 text-white">2</td>
                      <td className="text-center py-3 px-4 text-white">1</td>
                      <td className="text-center py-3 px-4 text-white">4</td>
                      <td className="text-center py-3 px-4 text-[#c9a227]">-</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-300">Threat Level</td>
                      <td className="text-center py-3 px-4"><span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs">HIGH</span></td>
                      <td className="text-center py-3 px-4"><span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">MED</span></td>
                      <td className="text-center py-3 px-4"><span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs">HIGH</span></td>
                      <td className="text-center py-3 px-4"><span className="px-2 py-1 bg-[#c9a227]/20 text-[#c9a227] rounded text-xs">US</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-500 text-xs mt-4">* Update this dashboard weekly. Track changes over time.</p>
            </div>

            {/* Early Warning Signals */}
            <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                Early Warning Signals to Monitor
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="text-red-400 font-semibold">🚨 Immediate Action Triggers</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                      Competitor announces cashback/loyalty feature
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                      Major funding round announced
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                      Competitor signs our target merchant
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                      Aggressive pricing/promotion launched
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                      International player announces UAE entry
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-yellow-400 font-semibold">⚠️ Watch Closely Signals</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                      Competitor hiring for loyalty/rewards roles
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                      New merchant partnerships announced
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                      App updates with new features
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                      Marketing campaign increase
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                      Price changes or new tiers
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Response Protocols */}
            <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#c9a227]" />
                Response Protocols
              </h3>
              <div className="space-y-4">
                <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/30">
                  <h4 className="text-red-400 font-semibold mb-2">Code Red: Competitor Launches Competing Feature</h4>
                  <p className="text-gray-300 text-sm mb-3">Example: Entertainer adds cashback, Careem launches rewards</p>
                  <ol className="space-y-1 text-sm text-gray-300">
                    <li>1. <strong>Hour 1:</strong> Full team briefing, analyze feature</li>
                    <li>2. <strong>Day 1:</strong> Create counter-messaging, update sales materials</li>
                    <li>3. <strong>Week 1:</strong> Accelerate our unique features, double down on differentiation</li>
                    <li>4. <strong>Week 2:</strong> PR response, merchant communication</li>
                  </ol>
                </div>
                <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/30">
                  <h4 className="text-yellow-400 font-semibold mb-2">Code Yellow: Competitor Aggressively Targeting Our Merchants</h4>
                  <p className="text-gray-300 text-sm mb-3">Example: Entertainer offers free listing to our merchants</p>
                  <ol className="space-y-1 text-sm text-gray-300">
                    <li>1. <strong>Day 1:</strong> Call affected merchants, understand the offer</li>
                    <li>2. <strong>Day 2:</strong> Prepare counter-offer if needed</li>
                    <li>3. <strong>Week 1:</strong> Strengthen relationships, show ROI data</li>
                    <li>4. <strong>Ongoing:</strong> Accelerate lock-in features (analytics, POS)</li>
                  </ol>
                </div>
                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                  <h4 className="text-green-400 font-semibold mb-2">Code Green: Competitor Shows Weakness</h4>
                  <p className="text-gray-300 text-sm mb-3">Example: Bad press, app issues, merchant complaints</p>
                  <ol className="space-y-1 text-sm text-gray-300">
                    <li>1. <strong>Day 1:</strong> Identify affected merchants/users</li>
                    <li>2. <strong>Day 2:</strong> Targeted outreach with migration offer</li>
                    <li>3. <strong>Week 1:</strong> PR highlighting our advantages (subtle)</li>
                    <li>4. <strong>Ongoing:</strong> Build case studies from switchers</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Tools & Resources */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-green-500/20 rounded-2xl p-6 border border-[#c9a227]/30">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-[#c9a227]" />
                Competitive Intelligence Tools
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Free Tools</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Google Alerts</li>
                    <li>• Social Blade</li>
                    <li>• App Store reviews</li>
                    <li>• LinkedIn job search</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Paid Tools</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• SimilarWeb (~$100/mo)</li>
                    <li>• Sensor Tower (apps)</li>
                    <li>• Crayon (CI platform)</li>
                    <li>• Owler (company intel)</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Social Listening</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Mention</li>
                    <li>• Brand24</li>
                    <li>• Hootsuite</li>
                    <li>• Manual monitoring</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Data Sources</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Crunchbase</li>
                    <li>• PitchBook</li>
                    <li>• Industry reports</li>
                    <li>• MENA VC newsletters</li>
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
