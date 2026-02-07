'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  Target,
  Zap,
  DollarSign,
  Users,
  TrendingUp,
  TrendingDown,
  Gift,
  Clock,
  Shield,
  Rocket,
  Heart,
  Star,
  CheckCircle2,
  AlertTriangle,
  Megaphone,
  MessageCircle,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  Globe,
  Calendar,
  Store,
  Coffee,
  Scissors,
  ShoppingCart,
  Dumbbell,
  Pill,
  Shirt,
  Gem,
  Gamepad2,
  Monitor,
  Copy,
  Download,
  Play,
  Sparkles,
  BadgePercent,
  Coins,
  BarChart3,
  PieChart,
  Eye,
  MousePointer,
  Share2,
  Crown,
  Award,
  Flame,
  ThumbsUp,
  Ban,
  RefreshCw,
  Wallet,
  CreditCard,
  Building2,
  MapPin,
  Lightbulb,
  FileText,
  Video,
  Image,
  Mic,
  Send
} from 'lucide-react';

interface Campaign {
  id: string;
  name: string;
  hook: string;
  subHook: string;
  targetPain: string;
  channels: string[];
  adCopy: {
    headline: string;
    body: string;
    cta: string;
  };
  emailSubject: string;
  smsText: string;
  whatsappText: string;
  landingPageHeadline: string;
  targetAudience: string[];
  bestFor: string[];
  urgencyTrigger: string;
  socialProof: string;
  color: string;
  icon: React.ElementType;
}

const campaigns: Campaign[] = [
  // RISK-FREE / TRIAL CAMPAIGNS
  {
    id: 'free-trial',
    name: 'Free 30-Day Trial',
    hook: 'Free One Month Performance Marketing',
    subHook: 'Pay Us ONLY If You Get Results',
    targetPain: 'Fear of wasting money on marketing that doesn\'t work',
    channels: ['Meta Ads', 'Google Ads', 'WhatsApp', 'Cold Calling', 'LinkedIn'],
    adCopy: {
      headline: '🎯 Free Marketing for 30 Days. Zero Risk.',
      body: 'We\'ll run your marketing campaigns for FREE for one month. If you don\'t see results? You pay nothing. If you love it? Then we talk. Simple as that.',
      cta: 'Start Free Trial →'
    },
    emailSubject: 'What if your next marketing campaign was FREE?',
    smsText: 'Hi [Name], Nuqta is offering FREE marketing for 30 days. No payment unless you see results. Interested? Reply YES for details.',
    whatsappText: 'Hi [Name]! 👋\n\nQuick question: What if you could get FREE performance marketing for your business for 30 days?\n\n✅ No upfront payment\n✅ No commitment\n✅ Pay only if you see results\n\nWe\'re offering this to select businesses in [Area]. Interested in learning more?',
    landingPageHeadline: 'Get 30 Days of FREE Marketing. Only Pay If It Works.',
    targetAudience: ['New business owners', 'Skeptical merchants', 'Budget-conscious SMBs'],
    bestFor: ['Cafes', 'Salons', 'Gyms', 'Retail'],
    urgencyTrigger: 'Limited to 10 businesses this month',
    socialProof: '47 businesses tried our free trial last month. 43 became paying customers.',
    color: 'green',
    icon: Gift
  },
  {
    id: 'guarantee',
    name: 'Results Guarantee',
    hook: '100% Money-Back Guarantee',
    subHook: 'If We Don\'t Deliver, You Get Every Dirham Back',
    targetPain: 'Previous bad experiences with marketing agencies',
    channels: ['Meta Ads', 'Google Ads', 'Email', 'Direct Sales'],
    adCopy: {
      headline: '💰 100% Money-Back Guarantee on Your Marketing',
      body: 'Tired of agencies that take your money and disappear? We guarantee results or you get a full refund. No questions asked. That\'s how confident we are.',
      cta: 'Get Guaranteed Results →'
    },
    emailSubject: 'The only marketing partner with a money-back guarantee',
    smsText: 'Hi [Name], tired of wasting money on marketing? Nuqta guarantees results or your money back. No risk. Reply for details.',
    whatsappText: 'Hi [Name]! 👋\n\nI know you\'ve probably been burned by marketing agencies before. That\'s why we do things differently:\n\n🛡️ 100% Money-Back Guarantee\n📊 Transparent reporting\n🎯 Results you can measure\n\nIf we don\'t deliver what we promise, you get every dirham back. Simple.\n\nWant to learn more?',
    landingPageHeadline: 'The Only Marketing Partner That Guarantees Your Results',
    targetAudience: ['Burned by agencies', 'Risk-averse owners', 'Established businesses'],
    bestFor: ['Restaurants', 'Spas', 'Clinics', 'Premium retail'],
    urgencyTrigger: 'This guarantee is only available for new partners',
    socialProof: 'In 2 years, only 3 out of 200+ merchants have asked for a refund.',
    color: 'blue',
    icon: Shield
  },

  // PAIN-POINT CAMPAIGNS
  {
    id: 'retention',
    name: 'Customer Retention Crisis',
    hook: 'Are You Facing Issues Retaining Your Customers?',
    subHook: 'Turn One-Time Buyers Into Lifetime Fans',
    targetPain: 'Customers visit once and never come back',
    channels: ['Meta Ads', 'Instagram', 'WhatsApp', 'Email'],
    adCopy: {
      headline: '😔 Customers Visit Once... Then Disappear Forever?',
      body: 'The average business loses 67% of first-time customers. But what if you could bring them back automatically? Our loyalty system turns one-time visitors into repeat customers who spend 3x more.',
      cta: 'Stop Losing Customers →'
    },
    emailSubject: 'Why your customers aren\'t coming back (and how to fix it)',
    smsText: 'Hi [Name], losing customers after their first visit? Nuqta helps businesses increase repeat visits by 40%. Free consultation: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nQuick question: How many of your customers come back for a second visit?\n\nIf it\'s less than 30%, you\'re losing money.\n\nOur merchants see:\n📈 40% increase in repeat visits\n💰 3x higher customer lifetime value\n🔄 Automatic re-engagement\n\nWant to see how it works for [Business Type]?',
    landingPageHeadline: 'Stop Losing Customers. Start Building Loyalty.',
    targetAudience: ['High foot traffic', 'Low repeat rate', 'Service businesses'],
    bestFor: ['Cafes', 'Salons', 'Restaurants', 'Gyms'],
    urgencyTrigger: 'Every day you wait, you lose more customers',
    socialProof: 'Café Arabica increased repeat visits from 23% to 61% in 3 months',
    color: 'amber',
    icon: Heart
  },
  {
    id: 'roi-burn',
    name: 'Stop Burning Money',
    hook: 'Are You Burning Too Much Money Without Getting ROI?',
    subHook: 'Finally, Marketing That Actually Makes You Money',
    targetPain: 'Spending on marketing with no measurable results',
    channels: ['LinkedIn', 'Meta Ads', 'Google Ads', 'Email'],
    adCopy: {
      headline: '🔥 Stop Burning Money on Marketing That Doesn\'t Work',
      body: 'You\'ve spent thousands on ads, influencers, and agencies. But where are the customers? We show you exactly how much you spend vs how much you earn. Real numbers. Real ROI.',
      cta: 'See Your Real ROI →'
    },
    emailSubject: 'You\'re probably wasting 60% of your marketing budget',
    smsText: 'Hi [Name], tired of marketing that burns money? Nuqta shows you EXACTLY what you get for every dirham spent. See real ROI: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nHonest question: Do you know the ROI of your current marketing?\n\nMost business owners don\'t. They spend AED 5,000/month and hope for the best.\n\nWith Nuqta:\n📊 See every dirham you spend\n💰 Track every customer it brings\n📈 Know your exact ROI\n\nNo more guessing. No more wasted budget.\n\nInterested in a free ROI analysis?',
    landingPageHeadline: 'Know Exactly What Your Marketing Returns. Every. Single. Dirham.',
    targetAudience: ['Frustrated with agencies', 'Data-driven owners', 'Already spending on marketing'],
    bestFor: ['Restaurants', 'Retail', 'Clinics', 'Premium services'],
    urgencyTrigger: 'Get a free marketing audit this week',
    socialProof: 'Our merchants average 4.2x ROI on their marketing spend',
    color: 'red',
    icon: Flame
  },
  {
    id: 'competition',
    name: 'Beat Your Competition',
    hook: 'Your Competitors Are Stealing Your Customers',
    subHook: 'While You Watch, They\'re Taking Market Share',
    targetPain: 'Losing customers to nearby competitors',
    channels: ['Meta Ads', 'Google Ads', 'WhatsApp', 'Cold Walk-ins'],
    adCopy: {
      headline: '👀 Your Competitors Are Already Using This...',
      body: 'While you\'re reading this, businesses in your area are using loyalty programs to steal your customers. They offer rewards. You don\'t. Guess where customers go?',
      cta: 'Don\'t Get Left Behind →'
    },
    emailSubject: '3 of your competitors just joined Nuqta',
    smsText: 'Hi [Name], did you know [Competitor] just started a loyalty program? Don\'t lose customers. Join Nuqta: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nI wanted to give you a heads up...\n\nWe just signed 3 [business types] in [Area]. They\'re about to launch loyalty programs that reward customers for every visit.\n\nWhen customers have a choice between earning rewards or not... where do you think they\'ll go?\n\n🏆 Be the first in your area\n📈 Capture market share\n💰 Don\'t lose to competitors\n\nWant to see what they\'re doing?',
    landingPageHeadline: 'Your Competitors Are Already Winning Customers With Rewards. Are You?',
    targetAudience: ['Competitive markets', 'Multiple options nearby', 'Established businesses'],
    bestFor: ['Cafes in malls', 'Salons in busy areas', 'Restaurants'],
    urgencyTrigger: 'Your competitors are signing up NOW',
    socialProof: '3 businesses in your area joined this month',
    color: 'purple',
    icon: Zap
  },
  {
    id: 'slow-days',
    name: 'Fill Slow Days',
    hook: 'Packed on Weekends, Empty on Weekdays?',
    subHook: 'Turn Your Dead Hours Into Profitable Hours',
    targetPain: 'Inconsistent foot traffic and revenue',
    channels: ['Meta Ads', 'Instagram', 'WhatsApp', 'Walk-ins'],
    adCopy: {
      headline: '📅 Your Tuesday Is Empty. Your Saturday Is Packed. Let\'s Fix That.',
      body: 'What if customers wanted to visit on slow days? With targeted promotions (2x coins on Tuesdays!), we turn your dead hours into busy hours. Consistent revenue, every day.',
      cta: 'Fill Your Slow Days →'
    },
    emailSubject: 'How to make Tuesday as busy as Saturday',
    smsText: 'Hi [Name], empty on weekdays? Nuqta helps fill slow days with targeted promotions. See how: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nLet me guess:\n\n🔥 Weekends: Packed, turning customers away\n😴 Weekdays: Empty, staff standing around\n\nWhat if you could balance that out?\n\nOur "Double Coins" promotions on slow days have helped merchants:\n📈 Increase weekday traffic by 35%\n💰 Reduce staff idle time\n🎯 Smooth out revenue\n\nWant to see how this works for [Business Type]?',
    landingPageHeadline: 'Turn Your Slowest Days Into Your Most Profitable Days',
    targetAudience: ['Weekend-heavy businesses', 'Service businesses', 'Appointment-based'],
    bestFor: ['Salons', 'Spas', 'Entertainment', 'Cafes'],
    urgencyTrigger: 'Start filling slow days this week',
    socialProof: 'Glow Spa increased Tuesday bookings by 47% in one month',
    color: 'cyan',
    icon: Calendar
  },

  // VALUE PROPOSITION CAMPAIGNS
  {
    id: 'free-pos',
    name: 'Free POS System',
    hook: 'Get a FREE Point-of-Sale System',
    subHook: 'No Hardware Costs. No Setup Fees. Just Results.',
    targetPain: 'High cost of technology and POS systems',
    channels: ['Meta Ads', 'Google Ads', 'WhatsApp', 'Cold Calling'],
    adCopy: {
      headline: '🎁 FREE POS System for Your Business',
      body: 'Stop paying thousands for POS systems. We give you a modern, touch-screen POS absolutely FREE. Track sales, manage inventory, accept all payments. All included with Nuqta partnership.',
      cta: 'Get Your Free POS →'
    },
    emailSubject: 'Your FREE Point-of-Sale system is waiting',
    smsText: 'Hi [Name], get a FREE POS system for your business. No cost, no catch. Limited time offer. Details: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nQuick offer for [Business Name]:\n\n🎁 FREE Point-of-Sale System\n📱 Modern touch screen\n💳 Accept all payments\n📊 Sales tracking included\n\nNo hardware costs. No setup fees.\n\nThis is part of our partnership package. We provide the technology, you focus on your business.\n\nInterested in learning more?',
    landingPageHeadline: 'Get a Modern POS System. Completely FREE.',
    targetAudience: ['New businesses', 'Upgrading POS', 'Budget-conscious'],
    bestFor: ['Cafes', 'Retail', 'Salons', 'Quick service'],
    urgencyTrigger: 'Only 20 free POS systems available this month',
    socialProof: 'We\'ve provided 150+ free POS systems to UAE merchants',
    color: 'emerald',
    icon: Monitor
  },
  {
    id: 'marketing-team',
    name: 'Your Own Marketing Team',
    hook: 'Get a Dedicated Marketing Manager',
    subHook: 'Without Paying a Full-Time Salary',
    targetPain: 'Can\'t afford professional marketing help',
    channels: ['LinkedIn', 'Meta Ads', 'Email', 'WhatsApp'],
    adCopy: {
      headline: '👨‍💼 Your Own Marketing Manager. No Salary Required.',
      body: 'A full-time marketing manager costs AED 15,000/month. Or you could get one included in your Nuqta partnership. Strategy, content, ads, analytics - all handled by your dedicated manager.',
      cta: 'Meet Your Marketing Manager →'
    },
    emailSubject: 'What if you had a marketing manager for a fraction of the cost?',
    smsText: 'Hi [Name], get a dedicated marketing manager without paying a salary. Included with Nuqta partnership. Learn more: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nHiring a marketing manager costs AED 15,000+/month.\n\nWith Nuqta, you get:\n\n👨‍💼 Dedicated marketing manager\n📸 Professional content creation\n📱 Social media management\n📊 Performance reporting\n\nAll included in your partnership. No extra hiring.\n\nWould you like to meet our team?',
    landingPageHeadline: 'A Dedicated Marketing Manager. Included In Your Package.',
    targetAudience: ['Owner-operators', 'Small teams', 'No marketing staff'],
    bestFor: ['All business types', 'Solo entrepreneurs', 'Family businesses'],
    urgencyTrigger: 'Our marketing managers are booking up fast',
    socialProof: 'Our marketing managers handle 200+ campaigns per month',
    color: 'indigo',
    icon: Users
  },
  {
    id: 'influencer',
    name: 'Free Influencer Marketing',
    hook: 'Get Influencers to Promote You. For FREE.',
    subHook: 'We Handle Everything. You Get the Customers.',
    targetPain: 'Influencer marketing is expensive and complicated',
    channels: ['Instagram', 'Meta Ads', 'WhatsApp', 'Email'],
    adCopy: {
      headline: '🌟 FREE Influencer Marketing for Your Business',
      body: 'Influencers charge thousands per post. But what if you could get them for free? Our barter program sends influencers to your business - you give them an experience, they give you content and reach.',
      cta: 'Get Free Influencer Visits →'
    },
    emailSubject: 'How to get influencers without paying them',
    smsText: 'Hi [Name], want influencers to promote your business for FREE? Our barter program makes it easy. Details: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nWhat if influencers promoted your business... for FREE?\n\n🌟 We send influencers to visit you\n📸 They create content at your location\n📱 They post to 10K-100K followers\n💰 You pay nothing (just a barter experience)\n\nOur merchants get 5+ influencer visits per month included in their package.\n\nWant to see how this works?',
    landingPageHeadline: 'Influencer Marketing. Zero Cost. Real Results.',
    targetAudience: ['Instagram-focused', 'Visual businesses', 'Trendy locations'],
    bestFor: ['Cafes', 'Restaurants', 'Salons', 'Fashion'],
    urgencyTrigger: 'Our influencer network has limited slots each month',
    socialProof: 'We\'ve facilitated 500+ influencer collaborations',
    color: 'pink',
    icon: Star
  },
  {
    id: 'content-creation',
    name: 'Professional Content',
    hook: 'Professional Photos & Videos. Included.',
    subHook: 'Stop Using Your Phone. Start Looking Professional.',
    targetPain: 'Poor quality content and no time to create it',
    channels: ['Meta Ads', 'Instagram', 'WhatsApp', 'Walk-ins'],
    adCopy: {
      headline: '📸 Professional Photos & Videos for Your Business',
      body: 'Your competitors have stunning content. You have phone photos. We send professional photographers to your location, create beautiful content, and manage your social media. All included.',
      cta: 'Get Professional Content →'
    },
    emailSubject: 'Your social media is costing you customers',
    smsText: 'Hi [Name], professional photos & videos for your business. Included free with Nuqta. See examples: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nHonest question: When was the last time you updated your Instagram?\n\nWith Nuqta, you get:\n\n📸 Professional photography shoot\n🎬 Video content for Reels\n✍️ Caption writing\n📱 Social media management\n\nNo more blurry phone photos. No more "I\'ll post later."\n\nWant to see examples of what we create?',
    landingPageHeadline: 'Look Professional Online. Without Lifting a Finger.',
    targetAudience: ['Neglected social media', 'Poor imagery', 'No time for content'],
    bestFor: ['All visual businesses', 'Food & beverage', 'Beauty', 'Retail'],
    urgencyTrigger: 'Book your photo shoot this month',
    socialProof: 'We create 500+ professional content pieces monthly',
    color: 'orange',
    icon: Video
  },

  // FINANCIAL / VALUE CAMPAIGNS
  {
    id: 'ad-credit',
    name: '100% Ad Credit Match',
    hook: 'Double Your Marketing Budget',
    subHook: 'Whatever You Spend, We Match in Ad Credits',
    targetPain: 'Limited marketing budget',
    channels: ['Meta Ads', 'Google Ads', 'Email', 'WhatsApp'],
    adCopy: {
      headline: '💰 We\'ll DOUBLE Your Marketing Budget',
      body: 'Spend AED 5,000 on your package? Get AED 5,000 in FREE in-app advertising credits. That\'s AED 10,000 of marketing for the price of AED 5,000. Double the reach. Double the customers.',
      cta: 'Double Your Budget →'
    },
    emailSubject: 'How to get 2x marketing for the price of 1x',
    smsText: 'Hi [Name], DOUBLE your marketing budget. Whatever you spend, we match in ad credits. Limited offer: [link]',
    whatsappText: 'Hi [Name]! 👋\n\n🎁 Special offer for [Business Name]:\n\nWhatever you spend on your package, we MATCH it in in-app advertising credits.\n\n💰 Spend AED 5,000 → Get AED 5,000 ad credits FREE\n💰 Spend AED 10,000 → Get AED 10,000 ad credits FREE\n\nThat\'s DOUBLE the marketing power.\n\nOur in-app ads reach 50,000+ users in Dubai.\n\nInterested in this offer?',
    landingPageHeadline: 'Spend AED 5,000. Get AED 10,000 in Marketing.',
    targetAudience: ['Budget-conscious', 'ROI-focused', 'Growth-minded'],
    bestFor: ['All business types'],
    urgencyTrigger: 'This matching offer ends this month',
    socialProof: 'Merchants using ad credits see 3x more app visibility',
    color: 'green',
    icon: Coins
  },
  {
    id: 'no-discount',
    name: 'Rewards Not Discounts',
    hook: 'Stop Destroying Your Margins With Discounts',
    subHook: 'There\'s a Better Way to Attract Customers',
    targetPain: 'Pressure to discount and margin erosion',
    channels: ['LinkedIn', 'Meta Ads', 'Email', 'Direct Sales'],
    adCopy: {
      headline: '🚫 50% OFF Is Killing Your Business',
      body: 'Every discount destroys your brand and margins. But customers expect deals. The solution? Cashback rewards. Customers feel rewarded without you losing money. They earn coins, you keep your margins.',
      cta: 'Protect Your Margins →'
    },
    emailSubject: 'Why discounting is slowly killing your business',
    smsText: 'Hi [Name], stop destroying margins with discounts. Reward customers with cashback instead. Learn how: [link]',
    whatsappText: 'Hi [Name]! 👋\n\n"50% OFF!" "Buy 1 Get 1 Free!"\n\nSounds familiar? Every discount:\n\n❌ Destroys your margins\n❌ Devalues your brand\n❌ Attracts deal-hunters, not loyal customers\n\nWith Nuqta\'s cashback system:\n\n✅ Customers feel rewarded\n✅ You keep your full price\n✅ They come back to use their coins\n\nWant to see how this works?',
    landingPageHeadline: 'Attract Customers Without Destroying Your Margins',
    targetAudience: ['Premium brands', 'Margin-conscious', 'Quality-focused'],
    bestFor: ['Fine dining', 'Luxury retail', 'Premium salons', 'Specialty stores'],
    urgencyTrigger: 'Every day you discount is money lost forever',
    socialProof: 'Our merchants maintain 95% of their pricing while increasing sales',
    color: 'amber',
    icon: BadgePercent
  },

  // INDUSTRY-SPECIFIC CAMPAIGNS
  {
    id: 'cafe-special',
    name: 'Café Growth Package',
    hook: 'The Ultimate Marketing Package for Cafés',
    subHook: 'Everything Your Café Needs to Grow',
    targetPain: 'Intense café competition in UAE',
    channels: ['Instagram', 'Meta Ads', 'WhatsApp', 'Walk-ins'],
    adCopy: {
      headline: '☕ Calling All Café Owners in Dubai',
      body: 'The café market is brutal. New spots open every week. How do you stand out? Professional food photography, influencer visits, loyalty rewards, and targeted ads - all designed specifically for cafés.',
      cta: 'Grow Your Café →'
    },
    emailSubject: '[Café Owners] The marketing package built for you',
    smsText: 'Hi [Name], exclusive marketing package for café owners. Photos, influencers, loyalty, ads - all included. Details: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nAs a café owner in [Area], you know how competitive it is.\n\nWe\'ve created a package specifically for cafés:\n\n☕ Food photography that makes people hungry\n📱 Instagram management\n🌟 Influencer visits (included free)\n🎯 Targeted ads to coffee lovers nearby\n💰 Loyalty program to bring them back\n\n50+ cafés in Dubai trust us with their marketing.\n\nWant to see what we\'ve done for cafés like yours?',
    landingPageHeadline: 'Marketing Built for Cafés. By People Who Love Coffee.',
    targetAudience: ['Café owners', 'Coffee shops', 'Specialty cafés'],
    bestFor: ['Independent cafés', 'Specialty coffee', 'Brunch spots'],
    urgencyTrigger: 'Only accepting 5 new cafés this month',
    socialProof: '50+ cafés in Dubai use Nuqta',
    color: 'amber',
    icon: Coffee
  },
  {
    id: 'salon-special',
    name: 'Salon Growth Package',
    hook: 'Fill Every Chair in Your Salon',
    subHook: 'The Complete Marketing Solution for Salons & Spas',
    targetPain: 'Empty appointment slots and inconsistent bookings',
    channels: ['Instagram', 'Meta Ads', 'WhatsApp', 'Walk-ins'],
    adCopy: {
      headline: '💇‍♀️ Salon Owners: Fill Your Empty Chairs',
      body: 'Empty chairs = lost revenue. Our salon-specific package fills your slow days, builds loyalty, and brings clients back automatically. Photography, social media, loyalty rewards - everything you need.',
      cta: 'Fill Your Chairs →'
    },
    emailSubject: '[Salon Owners] Never have an empty chair again',
    smsText: 'Hi [Name], exclusive package for salon owners. Fill empty chairs, build loyalty, get more bookings. Details: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nAs a salon owner, empty chairs are your enemy.\n\nOur salon package helps you:\n\n💇‍♀️ Fill slow days (2x rewards on Tuesdays!)\n📸 Stunning before/after content\n🌟 Beauty influencer visits\n🔄 Automatic rebooking reminders\n💰 Rewards that bring clients back\n\n30+ salons in Dubai trust us.\n\nWant to see results from salons like yours?',
    landingPageHeadline: 'The Complete Marketing Solution for Salons & Spas',
    targetAudience: ['Salon owners', 'Spa owners', 'Beauty professionals'],
    bestFor: ['Hair salons', 'Beauty salons', 'Spas', 'Nail bars'],
    urgencyTrigger: 'Book your salon photoshoot this week',
    socialProof: '30+ salons and spas in Dubai use Nuqta',
    color: 'pink',
    icon: Scissors
  },
  {
    id: 'restaurant-special',
    name: 'Restaurant Growth Package',
    hook: 'Pack Your Tables Every Night',
    subHook: 'Marketing That Fills Seats and Builds Regulars',
    targetPain: 'Inconsistent covers and lack of repeat diners',
    channels: ['Instagram', 'Meta Ads', 'Zomato/Talabat', 'WhatsApp'],
    adCopy: {
      headline: '🍽️ Restaurant Owners: Fill More Tables, Build More Regulars',
      body: 'New customers are expensive. Regulars are profitable. Our restaurant package brings diners in, makes them love you, and brings them back. Food photography, review management, loyalty rewards - the works.',
      cta: 'Fill Your Tables →'
    },
    emailSubject: '[Restaurant Owners] Turn first-timers into regulars',
    smsText: 'Hi [Name], restaurant marketing that actually works. Fill tables, build regulars, grow reviews. Details: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nRunning a restaurant in Dubai is tough.\n\nHigh rent. Fierce competition. Fickle customers.\n\nOur restaurant package:\n\n🍽️ Professional food photography\n⭐ Review generation & management\n🌟 Food blogger visits\n📱 Social media that makes people hungry\n💰 Loyalty program for repeat diners\n\nWant to see what we\'ve done for restaurants like yours?',
    landingPageHeadline: 'Marketing That Fills Seats and Keeps Them Coming Back',
    targetAudience: ['Restaurant owners', 'F&B operators', 'Chef-owners'],
    bestFor: ['Casual dining', 'Fine dining', 'Fast casual', 'Ethnic restaurants'],
    urgencyTrigger: 'Get featured in our next foodie campaign',
    socialProof: '70+ restaurants in UAE trust Nuqta',
    color: 'red',
    icon: Store
  },

  // SEASONAL / EVENT CAMPAIGNS
  {
    id: 'ramadan',
    name: 'Ramadan Ready',
    hook: 'Is Your Business Ready for Ramadan?',
    subHook: 'The Biggest Spending Season Is Coming',
    targetPain: 'Missing out on seasonal opportunities',
    channels: ['Meta Ads', 'WhatsApp', 'Email', 'Instagram'],
    adCopy: {
      headline: '🌙 Ramadan Is Coming. Is Your Business Ready?',
      body: 'Ramadan spending in UAE exceeds AED 5 billion. Are you capturing your share? Get your marketing ready NOW - iftar promotions, special rewards, targeted campaigns to families breaking fast.',
      cta: 'Get Ramadan Ready →'
    },
    emailSubject: 'Ramadan 2024: Is your business ready?',
    smsText: 'Hi [Name], Ramadan spending is massive. Is your business ready to capture it? Get Ramadan marketing ready: [link]',
    whatsappText: 'Hi [Name]! 👋\n\n🌙 Ramadan is [X weeks] away.\n\nAre you ready to capture the biggest spending season?\n\nOur Ramadan package:\n\n🍽️ Iftar/Suhoor promotions\n📱 Ramadan-themed content\n🎯 Target families breaking fast\n💰 Special rewards campaigns\n📊 Real-time performance tracking\n\nLast year, our merchants saw 40% revenue increase during Ramadan.\n\nWant to prepare your business?',
    landingPageHeadline: 'Capture Your Share of Ramadan Spending',
    targetAudience: ['All businesses', 'F&B especially', 'Retail'],
    bestFor: ['Restaurants', 'Cafes', 'Retail', 'Supermarkets'],
    urgencyTrigger: 'Ramadan prep starts NOW',
    socialProof: 'Our merchants saw 40% revenue increase during Ramadan 2023',
    color: 'emerald',
    icon: Sparkles
  },
  {
    id: 'summer',
    name: 'Summer Survival',
    hook: 'Survive the Summer Slump',
    subHook: 'When Everyone Leaves, Keep Customers Coming',
    targetPain: 'Summer slowdown when residents leave',
    channels: ['Meta Ads', 'Instagram', 'WhatsApp', 'Email'],
    adCopy: {
      headline: '☀️ The Summer Slump Is Coming. Are You Prepared?',
      body: 'Every summer, business drops when residents leave. But what if you could capture the customers who stay? Our summer campaign targets residents staying in UAE with exclusive offers.',
      cta: 'Beat the Summer Slump →'
    },
    emailSubject: 'How to survive (and thrive) this summer',
    smsText: 'Hi [Name], summer slump coming? Target customers who STAY in UAE. Special summer marketing package: [link]',
    whatsappText: 'Hi [Name]! 👋\n\n☀️ Summer is coming. Residents are leaving.\n\nBut 40% of customers STAY.\n\nOur summer package:\n\n🎯 Target residents staying in UAE\n❄️ Indoor activity promotions\n🏖️ "Staycation" campaigns\n💰 Extra rewards to drive traffic\n📱 Summer content themes\n\nBeat the slump. Stay busy.\n\nWant to prepare for summer?',
    landingPageHeadline: 'Turn the Summer Slump Into Summer Sales',
    targetAudience: ['All businesses', 'Location-dependent'],
    bestFor: ['Indoor entertainment', 'Malls', 'Cafes', 'Salons'],
    urgencyTrigger: 'Start summer prep now',
    socialProof: 'Our merchants maintained 80% revenue during summer slowdown',
    color: 'yellow',
    icon: TrendingUp
  },
  {
    id: 'new-year',
    name: 'New Year New Customers',
    hook: 'Start 2024 With a Customer Explosion',
    subHook: 'New Year Resolution: Grow Your Business',
    targetPain: 'Want to start fresh and grow',
    channels: ['Meta Ads', 'Email', 'WhatsApp', 'LinkedIn'],
    adCopy: {
      headline: '🎉 2024 Goal: Double Your Customers',
      body: 'New year, new customers. Start 2024 with a complete marketing overhaul. New content, new campaigns, new loyalty program. Make this the year your business takes off.',
      cta: 'Start 2024 Strong →'
    },
    emailSubject: 'Your 2024 business resolution starts here',
    smsText: 'Hi [Name], 2024 goal: more customers, more revenue. Start with Nuqta. Special new year offer: [link]',
    whatsappText: 'Hi [Name]! 👋\n\n🎉 Happy New Year!\n\nWhat\'s your 2024 business goal?\n\n📈 More customers?\n💰 Higher revenue?\n🔄 Better retention?\n\nWe can help with all three.\n\nSpecial New Year offer:\n✅ 50% off first month\n✅ Free photo shoot\n✅ Priority onboarding\n\nStart 2024 strong. Let\'s talk?',
    landingPageHeadline: 'Make 2024 the Year Your Business Takes Off',
    targetAudience: ['Growth-minded', 'New year planners', 'Fresh start seekers'],
    bestFor: ['All business types'],
    urgencyTrigger: 'New Year offer expires January 31',
    socialProof: 'Businesses that started with us in January grew 34% on average',
    color: 'purple',
    icon: Rocket
  }
];

// Campaign Card Component
const CampaignCard = ({ campaign, isExpanded, onToggle }: {
  campaign: Campaign;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const colorClasses: Record<string, { bg: string; border: string; text: string; button: string }> = {
    green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400', button: 'bg-green-500 hover:bg-green-600' },
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', button: 'bg-blue-500 hover:bg-blue-600' },
    amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400', button: 'bg-amber-500 hover:bg-amber-600' },
    red: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400', button: 'bg-red-500 hover:bg-red-600' },
    purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400', button: 'bg-purple-500 hover:bg-purple-600' },
    cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', button: 'bg-cyan-500 hover:bg-cyan-600' },
    emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400', button: 'bg-emerald-500 hover:bg-emerald-600' },
    indigo: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/30', text: 'text-indigo-400', button: 'bg-indigo-500 hover:bg-indigo-600' },
    pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-400', button: 'bg-pink-500 hover:bg-pink-600' },
    orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400', button: 'bg-orange-500 hover:bg-orange-600' },
    yellow: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', text: 'text-yellow-400', button: 'bg-yellow-500 hover:bg-yellow-600' },
  };

  const colors = colorClasses[campaign.color] || colorClasses.blue;

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className={`rounded-xl border ${colors.border} overflow-hidden`}>
      <button
        onClick={onToggle}
        className={`w-full p-6 flex items-center justify-between ${colors.bg} hover:bg-white/5 transition-all`}
      >
        <div className="flex items-center gap-4">
          <div className={`w-14 h-14 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center`}>
            <campaign.icon className={colors.text} size={28} />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-white">{campaign.name}</h3>
            </div>
            <p className={`${colors.text} font-medium text-sm`}>{campaign.hook}</p>
            <p className="text-slate-400 text-xs mt-1">{campaign.subHook}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex gap-1">
            {campaign.channels.slice(0, 3).map((channel, idx) => (
              <span key={idx} className="px-2 py-1 bg-white/5 rounded text-xs text-slate-400">{channel}</span>
            ))}
          </div>
          {isExpanded ? (
            <ChevronDown className={colors.text} size={20} />
          ) : (
            <ChevronRight className={colors.text} size={20} />
          )}
        </div>
      </button>

      {isExpanded && (
        <div className="p-6 border-t border-white/10 space-y-6">
          {/* Target Pain Point */}
          <div className={`${colors.bg} rounded-lg p-4 border ${colors.border}`}>
            <h4 className={`${colors.text} font-bold mb-2 flex items-center gap-2`}>
              <Target size={16} /> Target Pain Point
            </h4>
            <p className="text-white">{campaign.targetPain}</p>
          </div>

          {/* Ad Copy */}
          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-white font-bold flex items-center gap-2">
                <Megaphone size={16} /> Ad Copy
              </h4>
              <button
                onClick={() => copyToClipboard(`${campaign.adCopy.headline}\n\n${campaign.adCopy.body}\n\n${campaign.adCopy.cta}`, 'ad')}
                className="flex items-center gap-1 text-xs text-slate-400 hover:text-white"
              >
                {copiedField === 'ad' ? <CheckCircle2 size={14} className="text-green-400" /> : <Copy size={14} />}
                {copiedField === 'ad' ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-bold text-white">{campaign.adCopy.headline}</p>
              <p className="text-slate-300 text-sm">{campaign.adCopy.body}</p>
              <button className={`mt-2 px-4 py-2 ${colors.button} text-white text-sm font-bold rounded-lg`}>
                {campaign.adCopy.cta}
              </button>
            </div>
          </div>

          {/* Multi-Channel Copy */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Email */}
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <h5 className="text-slate-400 text-xs font-medium flex items-center gap-1">
                  <Mail size={12} /> Email Subject
                </h5>
                <button
                  onClick={() => copyToClipboard(campaign.emailSubject, 'email')}
                  className="text-slate-500 hover:text-white"
                >
                  {copiedField === 'email' ? <CheckCircle2 size={12} className="text-green-400" /> : <Copy size={12} />}
                </button>
              </div>
              <p className="text-white text-sm">{campaign.emailSubject}</p>
            </div>

            {/* SMS */}
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <h5 className="text-slate-400 text-xs font-medium flex items-center gap-1">
                  <MessageCircle size={12} /> SMS Text
                </h5>
                <button
                  onClick={() => copyToClipboard(campaign.smsText, 'sms')}
                  className="text-slate-500 hover:text-white"
                >
                  {copiedField === 'sms' ? <CheckCircle2 size={12} className="text-green-400" /> : <Copy size={12} />}
                </button>
              </div>
              <p className="text-white text-sm">{campaign.smsText}</p>
            </div>

            {/* WhatsApp */}
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <h5 className="text-slate-400 text-xs font-medium flex items-center gap-1">
                  <Send size={12} /> WhatsApp
                </h5>
                <button
                  onClick={() => copyToClipboard(campaign.whatsappText, 'whatsapp')}
                  className="text-slate-500 hover:text-white"
                >
                  {copiedField === 'whatsapp' ? <CheckCircle2 size={12} className="text-green-400" /> : <Copy size={12} />}
                </button>
              </div>
              <p className="text-white text-sm whitespace-pre-line text-xs">{campaign.whatsappText.substring(0, 150)}...</p>
            </div>
          </div>

          {/* Full WhatsApp Message */}
          <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-green-400 font-bold flex items-center gap-2">
                <Send size={16} /> Full WhatsApp Message
              </h4>
              <button
                onClick={() => copyToClipboard(campaign.whatsappText, 'whatsapp-full')}
                className="flex items-center gap-1 text-xs text-green-400 hover:text-green-300"
              >
                {copiedField === 'whatsapp-full' ? <CheckCircle2 size={14} /> : <Copy size={14} />}
                {copiedField === 'whatsapp-full' ? 'Copied!' : 'Copy Full Message'}
              </button>
            </div>
            <pre className="text-slate-300 text-sm whitespace-pre-wrap font-sans">{campaign.whatsappText}</pre>
          </div>

          {/* Landing Page Headline */}
          <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-purple-400 font-bold flex items-center gap-2">
                <Globe size={16} /> Landing Page Headline
              </h4>
              <button
                onClick={() => copyToClipboard(campaign.landingPageHeadline, 'landing')}
                className="text-purple-400 hover:text-purple-300"
              >
                {copiedField === 'landing' ? <CheckCircle2 size={14} /> : <Copy size={14} />}
              </button>
            </div>
            <p className="text-xl font-bold text-white">{campaign.landingPageHeadline}</p>
          </div>

          {/* Campaign Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Target Audience */}
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h5 className="text-slate-400 text-xs font-medium mb-2 flex items-center gap-1">
                <Users size={12} /> Target Audience
              </h5>
              <div className="flex flex-wrap gap-1">
                {campaign.targetAudience.map((audience, idx) => (
                  <span key={idx} className="px-2 py-1 bg-blue-500/20 rounded text-xs text-blue-400">{audience}</span>
                ))}
              </div>
            </div>

            {/* Best For */}
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h5 className="text-slate-400 text-xs font-medium mb-2 flex items-center gap-1">
                <Store size={12} /> Best For
              </h5>
              <div className="flex flex-wrap gap-1">
                {campaign.bestFor.map((business, idx) => (
                  <span key={idx} className="px-2 py-1 bg-green-500/20 rounded text-xs text-green-400">{business}</span>
                ))}
              </div>
            </div>

            {/* Urgency Trigger */}
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h5 className="text-slate-400 text-xs font-medium mb-2 flex items-center gap-1">
                <Clock size={12} /> Urgency Trigger
              </h5>
              <p className="text-amber-400 text-sm font-medium">{campaign.urgencyTrigger}</p>
            </div>

            {/* Social Proof */}
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h5 className="text-slate-400 text-xs font-medium mb-2 flex items-center gap-1">
                <Award size={12} /> Social Proof
              </h5>
              <p className="text-emerald-400 text-sm font-medium">{campaign.socialProof}</p>
            </div>
          </div>

          {/* Channels */}
          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
            <h5 className="text-slate-400 text-xs font-medium mb-2">Recommended Channels</h5>
            <div className="flex flex-wrap gap-2">
              {campaign.channels.map((channel, idx) => (
                <span key={idx} className={`px-3 py-1.5 ${colors.bg} border ${colors.border} rounded-lg text-sm ${colors.text} font-medium`}>
                  {channel}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function MerchantCampaignsPage() {
  const [expandedCampaigns, setExpandedCampaigns] = useState<string[]>(['free-trial']);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = [
    { id: 'all', name: 'All Campaigns', count: campaigns.length },
    { id: 'risk-free', name: 'Risk-Free / Trial', count: 2 },
    { id: 'pain-point', name: 'Pain-Point', count: 4 },
    { id: 'value', name: 'Value Proposition', count: 4 },
    { id: 'financial', name: 'Financial / ROI', count: 2 },
    { id: 'industry', name: 'Industry-Specific', count: 3 },
    { id: 'seasonal', name: 'Seasonal / Event', count: 3 },
  ];

  const filterCampaigns = () => {
    let filtered = campaigns;

    if (activeFilter !== 'all') {
      const filterMap: Record<string, string[]> = {
        'risk-free': ['free-trial', 'guarantee'],
        'pain-point': ['retention', 'roi-burn', 'competition', 'slow-days'],
        'value': ['free-pos', 'marketing-team', 'influencer', 'content-creation'],
        'financial': ['ad-credit', 'no-discount'],
        'industry': ['cafe-special', 'salon-special', 'restaurant-special'],
        'seasonal': ['ramadan', 'summer', 'new-year'],
      };
      filtered = campaigns.filter(c => filterMap[activeFilter]?.includes(c.id));
    }

    if (searchQuery) {
      filtered = filtered.filter(c =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.hook.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.targetPain.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  };

  const toggleCampaign = (id: string) => {
    setExpandedCampaigns(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c9a227] to-[#e8c547] flex items-center justify-center">
                <span className="text-black font-bold text-xl">N</span>
              </div>
              <span className="text-2xl font-bold text-white">Nuqta</span>
            </Link>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">Merchant Acquisition Campaigns</span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/merchant-playbook"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} />
              <span className="text-sm">Playbook</span>
            </Link>
            <Link
              href="/sop"
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-slate-300 text-sm transition-all"
            >
              <FileText size={16} />
              SOPs
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Merchant Acquisition Campaigns</h1>
          <p className="text-slate-400">Ready-to-use marketing campaigns to sign new merchants</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-500/30">
            <div className="text-3xl font-bold text-green-400">{campaigns.length}</div>
            <div className="text-slate-400 text-sm">Campaign Ideas</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-4 border border-blue-500/30">
            <div className="text-3xl font-bold text-blue-400">6</div>
            <div className="text-slate-400 text-sm">Categories</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-500/30">
            <div className="text-3xl font-bold text-purple-400">4+</div>
            <div className="text-slate-400 text-sm">Channels per Campaign</div>
          </div>
          <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl p-4 border border-amber-500/30">
            <div className="text-3xl font-bold text-amber-400">Copy</div>
            <div className="text-slate-400 text-sm">Ready to Use</div>
          </div>
        </div>

        {/* Your 3 Original Ideas - Highlighted */}
        <div className="bg-gradient-to-r from-[#c9a227]/20 to-amber-500/20 rounded-xl p-6 border border-[#c9a227]/30 mb-8">
          <h2 className="text-xl font-bold text-[#c9a227] mb-4">Your Campaign Ideas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Gift className="text-green-400" size={20} />
                <span className="text-green-400 font-bold">1. Free Trial</span>
              </div>
              <p className="text-white font-medium">Free one month performance marketing</p>
              <p className="text-slate-400 text-sm">Pay us only if you get results</p>
            </div>
            <div className="bg-black/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="text-amber-400" size={20} />
                <span className="text-amber-400 font-bold">2. Retention</span>
              </div>
              <p className="text-white font-medium">Are you facing issues retaining customers?</p>
              <p className="text-slate-400 text-sm">Turn one-time buyers into regulars</p>
            </div>
            <div className="bg-black/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Flame className="text-red-400" size={20} />
                <span className="text-red-400 font-bold">3. Stop Burning</span>
              </div>
              <p className="text-white font-medium">Are you burning too much money?</p>
              <p className="text-slate-400 text-sm">Without getting ROI</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Target className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
            <input
              type="text"
              placeholder="Search campaigns..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-[#c9a227] focus:outline-none"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                activeFilter === filter.id
                  ? 'bg-[#c9a227] text-black'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {filter.name} ({filter.count})
            </button>
          ))}
        </div>

        {/* Campaign List */}
        <div className="space-y-4">
          {filterCampaigns().map(campaign => (
            <CampaignCard
              key={campaign.id}
              campaign={campaign}
              isExpanded={expandedCampaigns.includes(campaign.id)}
              onToggle={() => toggleCampaign(campaign.id)}
            />
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-12 bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4">Related Resources</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Merchant Playbook', href: '/merchant-playbook', icon: Target },
              { name: 'Category Playbooks', href: '/merchant-playbook', icon: Store },
              { name: 'Sales Kit', href: '/sales-kit', icon: Megaphone },
              { name: 'SOPs', href: '/sop', icon: FileText },
            ].map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all"
              >
                <link.icon className="text-[#c9a227]" size={20} />
                <span className="text-white text-sm">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
