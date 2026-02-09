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
  },

  // PERFORMANCE-BASED VALUE CAMPAIGNS
  {
    id: 'pay-later-ads',
    name: 'Performance-Based Ads',
    hook: 'Track Every Customer. See Your Real ROI.',
    subHook: 'Ads You Can Measure. Results You Can Trust.',
    targetPain: 'Spending on ads without knowing actual ROI',
    channels: ['Meta Ads', 'Google Ads', 'WhatsApp', 'Cold Calling', 'LinkedIn'],
    adCopy: {
      headline: '🚀 Finally: Ads Where You See EXACTLY What You Pay For',
      body: 'Most businesses spend AED 3-5K/month on ads and hope for the best. With Nuqta: we run your campaigns, track every customer who walks in, and you see your real ROI. Average ROI for our merchants: 4.2x.',
      cta: 'See Your Real Ad ROI →'
    },
    emailSubject: 'What if you could see EXACTLY which ads bring customers?',
    smsText: 'Hi [Name], we run ads and show you REAL ROI - every customer tracked. Our merchants see 4.2x average ROI. Interested? Reply YES.',
    whatsappText: 'Hi [Name]! 👋\n\nAre you running ads right now?\n\nMost business owners see:\n📊 1,000 impressions\n👆 50 clicks\n💰 AED 3,000 spent\n\nBut they DON\'T know:\n❓ How many actually visited?\n❓ How many purchased?\n❓ What\'s the real ROI?\n\nWith Nuqta Performance Ads:\n\n🎯 We create & run your campaigns\n📱 All traffic goes to your Nuqta profile\n🚶 Track every customer who visits\n💳 Track every purchase they make\n📈 See EXACT ROI in your dashboard\n\nAverage ROI for our merchants: 4.2x\n\nWant to see how performance-based ads work?',
    landingPageHeadline: 'Ads You Can Track. ROI You Can See. Results You Can Trust.',
    targetAudience: ['Already running ads', 'ROI-focused owners', 'Data-driven businesses'],
    bestFor: ['All business types', 'High-ticket services', 'SMBs'],
    urgencyTrigger: 'Get a custom ROI projection for your business',
    socialProof: 'Merchants using Nuqta ads see average 4.2x ROI with full tracking',
    color: 'cyan',
    icon: CreditCard
  },
  {
    id: 'content-roi',
    name: 'Content That Drives Revenue',
    hook: 'Professional Content + Trackable Results',
    subHook: 'See Which Content Brings Customers. Not Just Likes.',
    targetPain: 'Poor quality content not converting to sales',
    channels: ['Instagram', 'Meta Ads', 'WhatsApp', 'Cold Calling'],
    adCopy: {
      headline: '📸 Your Content Should SELL, Not Just Look Pretty',
      body: 'Professional photos and videos are nice. But do they bring customers? Our content package combines stunning visuals with trackable performance. 89% of our merchants see measurable increase in foot traffic.',
      cta: 'See Content ROI →'
    },
    emailSubject: 'Your content should bring customers, not just likes',
    smsText: 'Hi [Name], professional content + trackable results = real ROI. 89% of our merchants see increased foot traffic. Details: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nLet\'s talk about your content:\n\n❌ Random phone photos\n❌ Inconsistent posting\n❌ No idea what works\n❌ Likes but no customers\n\nWith Nuqta Content Package:\n\n📸 Professional photography\n🎬 Reels & video content\n✍️ Strategic captions that convert\n📱 Consistent posting schedule\n📊 Track which content brings customers\n💰 See actual ROI per post\n\n89% of our merchants see measurable increase in foot traffic from our content.\n\nWant to see examples and ROI data?',
    landingPageHeadline: 'Content That Converts. Results You Can Track. ROI You Can Measure.',
    targetAudience: ['Neglected social media', 'Poor engagement', 'No marketing ROI visibility'],
    bestFor: ['Cafes', 'Restaurants', 'Salons', 'Retail', 'Gyms'],
    urgencyTrigger: 'See your current content performance vs ours',
    socialProof: '89% of merchants see increased foot traffic from Nuqta content',
    color: 'pink',
    icon: Image
  },

  // VALUE & ROI CAMPAIGNS - CHANNEL SPECIFIC
  {
    id: 'social-roi',
    name: 'Social Media With Real ROI',
    hook: 'Track Every Customer From Instagram to Checkout',
    subHook: 'Finally See Your Social Media ROI.',
    targetPain: 'Spending on social media without knowing ROI',
    channels: ['LinkedIn', 'Meta Ads', 'Email', 'Direct Sales'],
    adCopy: {
      headline: '📱 Your Social Media Should Make Money, Not Just Get Likes',
      body: 'You invest in social media. But can you track how many customers it brings? With Nuqta: professional content + customer tracking. Our merchants see average 3.5x ROI on social content.',
      cta: 'Track Your Social ROI →'
    },
    emailSubject: 'What\'s the ROI of your social media?',
    smsText: 'Hi [Name], know your social media ROI? Nuqta merchants see 3.5x average ROI with full tracking. See how: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nQuick question: What\'s your social media ROI?\n\nIf you don\'t know, you\'re not alone. Most businesses track:\n\n📊 Likes: 500\n💬 Comments: 50\n👀 Views: 2,000\n\nBut they CAN\'T track:\n\n❓ How many became customers?\n❓ How much did they spend?\n❓ What\'s the actual ROI?\n\nWith Nuqta:\n\n✅ Professional content creation\n✅ Strategic posting\n✅ Customer tracking from social to store\n✅ Revenue attribution per post\n✅ Real ROI dashboard\n\nOur merchants see average 3.5x ROI on social content.\n\nWant to see how we track social to sales?',
    landingPageHeadline: 'Social Media With Measurable ROI. Track Every Customer.',
    targetAudience: ['Investing in social media', 'No ROI visibility', 'Data-driven owners'],
    bestFor: ['All business types'],
    urgencyTrigger: 'Get a custom social media ROI audit',
    socialProof: 'Merchants see average 3.5x ROI with Nuqta social management',
    color: 'blue',
    icon: Instagram
  },
  {
    id: 'influencer-roi',
    name: 'Influencer Marketing With ROI',
    hook: 'Track Every Customer From Influencer Posts',
    subHook: 'Know Exactly Which Influencers Drive Sales.',
    targetPain: 'Paying influencers but can\'t track results',
    channels: ['Instagram', 'Meta Ads', 'WhatsApp', 'Email'],
    adCopy: {
      headline: '🌟 Know Which Influencers Actually Bring Customers',
      body: 'You invest AED 2-10K per influencer post. But did it bring customers? With Nuqta\'s influencer program: barter-based visits, all traffic tracked. Average influencer visit brings 15-25 trackable new customers.',
      cta: 'Get Trackable Influencer Marketing →'
    },
    emailSubject: 'Which influencers actually bring you customers?',
    smsText: 'Hi [Name], investing in influencers? Track which ones bring REAL customers. Average: 15-25 per visit. Details: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nInfluencer marketing question:\n\nDo you know which influencers actually drive sales?\n\nMost businesses track:\n👀 Impressions: 50,000\n❤️ Likes: 2,000\n\nBut they CAN\'T track:\n❓ Customers brought: ???\n📊 Actual ROI: ???\n\nNuqta Influencer Program:\n\n🌟 Barter-based visits (value exchange)\n📱 Traffic goes to your Nuqta profile\n🚶 Track every customer from each influencer\n💰 See ROI per influencer visit\n📊 Know exactly who drives sales\n\nAverage influencer visit brings 15-25 trackable new customers.\n\nWant to see how our program works?',
    landingPageHeadline: 'Influencer Marketing You Can Track. Know Exactly Who Drives Sales.',
    targetAudience: ['Investing in influencers', 'Want ROI visibility', 'Visual businesses'],
    bestFor: ['Cafes', 'Restaurants', 'Salons', 'Fashion', 'Beauty'],
    urgencyTrigger: 'See your influencer ROI potential',
    socialProof: 'Average influencer visit brings 15-25 trackable customers',
    color: 'purple',
    icon: Star
  },
  {
    id: 'trackable-ads',
    name: 'Full-Funnel Ad Tracking',
    hook: 'From Click to Purchase. Track Everything.',
    subHook: 'Know Exactly Which Ads Bring Paying Customers.',
    targetPain: 'Running ads but can\'t track store visits or purchases',
    channels: ['Google Ads', 'Meta Ads', 'LinkedIn', 'Email'],
    adCopy: {
      headline: '🎯 Your Ads Get Clicks. But Do They Get Customers?',
      body: 'You see clicks, impressions, CTR. But do you know how many became paying customers? Nuqta connects online ads to offline purchases. Merchants with full tracking see 4x better ROI.',
      cta: 'Track Your Full Ad Funnel →'
    },
    emailSubject: 'Can you track which ads bring paying customers?',
    smsText: 'Hi [Name], know which ads bring paying customers? Merchants with Nuqta tracking see 4x better ROI: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nHere\'s what you probably see from your ads:\n\n📊 10,000 impressions\n👆 200 clicks\n💰 AED 4,000 spent\n📈 CTR: 2%\n\nHere\'s what you DON\'T see:\n\n❓ How many visited your store?\n❓ How many made a purchase?\n❓ What\'s your cost per actual customer?\n❓ Which ads drove the most revenue?\n\nWith Nuqta Full-Funnel Tracking:\n\n🎯 Run ads on Meta, Google, TikTok\n📱 Traffic goes to your Nuqta profile\n🚶 Track store visits\n💳 Track purchases\n📊 See revenue per campaign\n💰 Know your true CPA\n\nMerchants with full tracking see 4x better ROI.\n\nWant to see your actual ad performance potential?',
    landingPageHeadline: 'Track Every Customer. From Ad Click to Purchase.',
    targetAudience: ['Running ads', 'Want ROI visibility', 'High ad spend'],
    bestFor: ['All business types', 'High-ticket services'],
    urgencyTrigger: 'Get a custom ad performance audit',
    socialProof: 'Merchants with full tracking see 4x better ROI',
    color: 'red',
    icon: MousePointer
  },
  {
    id: 'all-in-one-value',
    name: 'All-in-One Marketing Platform',
    hook: 'One Platform. Full Marketing Stack. Real ROI.',
    subHook: 'Content + Ads + Loyalty + Tracking. Everything Connected.',
    targetPain: 'Using multiple disconnected tools with no unified ROI view',
    channels: ['LinkedIn', 'Email', 'Direct Sales', 'WhatsApp'],
    adCopy: {
      headline: '🚀 Everything Connected. Every Customer Tracked.',
      body: 'Content agency. Ad agency. Loyalty app. Analytics tool. CRM. None of them connect. You have no unified view of ROI. Nuqta combines everything in one platform. Merchants consolidating to Nuqta save 40% while improving ROI.',
      cta: 'Unify Your Marketing Stack →'
    },
    emailSubject: 'What if all your marketing was in one platform?',
    smsText: 'Hi [Name], using multiple marketing tools? Merchants who consolidate to Nuqta save 40% while improving ROI: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nQuick audit of your marketing tools:\n\n📱 Social media tool\n📸 Content/photographer\n🎯 Ads management\n🎁 Loyalty program\n📊 Analytics\n\nBiggest problem? They DON\'T connect.\n\n❌ No unified customer view\n❌ No cross-channel tracking\n❌ No true ROI visibility\n\nNuqta All-in-One:\n\n✅ Content creation\n✅ Social media management\n✅ Influencer program\n✅ Ad management\n✅ Loyalty & rewards\n✅ Full customer tracking\n✅ Unified ROI dashboard\n\nEverything connected. Every customer tracked.\n\nMerchants consolidating to Nuqta save 40% while improving ROI.\n\nWant to see the unified platform?',
    landingPageHeadline: 'One Platform. Complete Marketing. Unified ROI Tracking.',
    targetAudience: ['Using multiple tools', 'High marketing spend', 'Want unified view'],
    bestFor: ['Established businesses', 'Multi-location', 'High-revenue merchants'],
    urgencyTrigger: 'See your marketing consolidation potential',
    socialProof: 'Merchants consolidating to Nuqta save 40% while improving ROI',
    color: 'indigo',
    icon: Building2
  },

  // INDUSTRY-SPECIFIC VALUE & ROI CAMPAIGNS
  {
    id: 'cafe-complete',
    name: 'Café Complete Solution',
    hook: 'Everything Your Café Needs. One Platform. Clear ROI.',
    subHook: 'Content + Loyalty + Ads + Analytics. All Connected.',
    targetPain: 'Cafés juggling multiple tools with unclear combined ROI',
    channels: ['Instagram', 'Meta Ads', 'WhatsApp', 'Walk-ins'],
    adCopy: {
      headline: '☕ The Complete Marketing Solution Built for Cafés',
      body: 'Stunning coffee content, a loyalty program that works, targeted ads, and analytics showing you exactly what drives revenue. Cafés on Nuqta see average 35% increase in repeat visits and 3.2x marketing ROI.',
      cta: 'See the Complete Solution →'
    },
    emailSubject: '[Café Owners] One platform for ALL your marketing',
    smsText: 'Hi [Name], café owner? Get content + loyalty + ads + analytics in one platform. 35% more repeat visits. See how: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nAs a café owner, you need:\n\n📱 Social media content\n📸 Food photography\n🎁 Loyalty program\n🌟 Influencer visits\n📊 Customer tracking\n\nWith Nuqta Café Solution:\n\n☕ Professional food photography\n📱 Instagram content & management\n🎁 Digital loyalty (customers LOVE it)\n🌟 Influencer visits included\n🎯 Targeted ads to coffee lovers\n📊 Track every customer\'s journey\n💰 See ROI across everything\n\nOur café merchants see average:\n📈 35% increase in repeat visits\n💰 3.2x marketing ROI\n🎯 28% lower cost per customer\n\nWant to see how cafés use Nuqta?',
    landingPageHeadline: 'Café Marketing Complete. Content. Loyalty. Ads. Analytics. One Platform.',
    targetAudience: ['Café owners', 'Using multiple tools', 'Want unified solution'],
    bestFor: ['Independent cafés', 'Specialty coffee', 'Brunch spots', 'Dessert cafés'],
    urgencyTrigger: 'See your café\'s marketing ROI potential',
    socialProof: 'Cafés on Nuqta see average 35% increase in repeat visits',
    color: 'amber',
    icon: Coffee
  },
  {
    id: 'salon-complete',
    name: 'Salon Complete Solution',
    hook: 'Content + Bookings + Loyalty + Client Tracking',
    subHook: 'Know Which Marketing Fills Your Chairs.',
    targetPain: 'Salons can\'t track which marketing brings bookings',
    channels: ['Instagram', 'Meta Ads', 'WhatsApp', 'Walk-ins'],
    adCopy: {
      headline: '💇‍♀️ Track Which Marketing Actually Fills Your Chairs',
      body: 'Beautiful before/afters on Instagram. But which ones actually brought bookings? Nuqta connects your content to actual clients. Salons using Nuqta see 40% more rebookings.',
      cta: 'Track Your Salon\'s ROI →'
    },
    emailSubject: '[Salon Owners] Track which posts bring bookings',
    smsText: 'Hi [Name], salon owner? Track which content brings actual bookings. 40% more rebookings. See how: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nSalon marketing challenge:\n\n📸 You post beautiful before/afters\n❓ But which ones brought clients?\n📱 You invest in social media\n❓ But what\'s the ROI?\n🌟 You use influencers\n❓ But who booked from them?\n\nNuqta Salon Solution:\n\n💇‍♀️ Stunning transformation content\n📱 Instagram management\n🎁 Digital loyalty (rebooking incentives)\n📅 Automatic rebooking reminders\n🌟 Beauty influencer visits\n📊 Track source of every booking\n💰 See ROI per channel\n\nOur salon merchants see:\n📈 40% more rebookings\n💰 2.8x marketing ROI\n👥 25% more referrals\n\nWant to see your salon\'s ROI potential?',
    landingPageHeadline: 'Salon Marketing That You Can Track. From Post to Booking.',
    targetAudience: ['Salon owners', 'Spa owners', 'Want ROI visibility'],
    bestFor: ['Hair salons', 'Beauty salons', 'Spas', 'Nail bars', 'Aesthetics clinics'],
    urgencyTrigger: 'See which of your content converts best',
    socialProof: 'Salons using Nuqta see 40% increase in rebookings',
    color: 'pink',
    icon: Scissors
  },
  {
    id: 'restaurant-direct',
    name: 'Restaurant Direct Customer Engine',
    hook: 'Build Direct Relationships. Maximize Margins.',
    subHook: 'Loyal Diners Who Come Back Because of YOU.',
    targetPain: 'Restaurants losing margins to aggregators',
    channels: ['Meta Ads', 'Google Ads', 'WhatsApp', 'Walk-ins'],
    adCopy: {
      headline: '🍽️ Your Best Customers Should Come Directly to You',
      body: 'Build direct relationships with loyal diners. Restaurants using Nuqta see 40% more direct visits and 67% repeat customer rate. Keep your margins. Own your customer data.',
      cta: 'Build Direct Customer Loyalty →'
    },
    emailSubject: '[Restaurant Owners] Build direct customer relationships',
    smsText: 'Hi [Name], restaurant owner? Build direct customer loyalty. 40% more direct visits. 67% repeat rate. See how: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nRestaurant economics:\n\nDirect customers are more profitable:\n✅ No commission fees\n✅ You own the relationship\n✅ Higher repeat rates\n✅ Better margins\n\nNuqta Restaurant Solution:\n\n🍽️ Professional food content\n🎯 Ads driving dine-in traffic\n🎁 Loyalty program for direct customers\n🌟 Food blogger visits included\n📊 Track every diner\'s value\n💰 See true customer LTV\n\nRestaurants using Nuqta:\n📈 40% more direct visits\n🔄 67% repeat customer rate\n💰 3x higher customer lifetime value\n\nWant to see the ROI math?',
    landingPageHeadline: 'Build Direct Customer Loyalty. Maximize Margins. Own Your Data.',
    targetAudience: ['Restaurant owners', 'Margin-focused', 'Want customer ownership'],
    bestFor: ['Casual dining', 'Fine dining', 'Fast casual', 'Cloud kitchens'],
    urgencyTrigger: 'Calculate your customer lifetime value potential',
    socialProof: 'Restaurants see 40% more direct visits and 67% repeat rate',
    color: 'orange',
    icon: Store
  },
  {
    id: 'gym-retention',
    name: 'Gym Retention & Referral Engine',
    hook: '10% Better Retention = 30% More Revenue',
    subHook: 'Engagement + Retention + Referrals. Measurable Results.',
    targetPain: 'Gyms losing members and not maximizing referrals',
    channels: ['Instagram', 'Meta Ads', 'WhatsApp', 'Walk-ins'],
    adCopy: {
      headline: '💪 The Math: 10% Better Retention = 30% More Revenue',
      body: 'Acquiring a new member costs AED 200-500. Keeping one costs almost nothing. Gyms on Nuqta see 35% better retention and 40% more referrals. Small retention gains = huge revenue impact.',
      cta: 'Improve Your Retention →'
    },
    emailSubject: '[Gym Owners] 10% better retention = 30% more revenue',
    smsText: 'Hi [Name], gym owner? 35% better retention. 40% more referrals. 2.5x member LTV. See how: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nGym economics reality:\n\n💸 New member acquisition: AED 200-500\n📈 Small retention gains = BIG revenue\n\nThe opportunity:\n\n🎯 Keep members longer\n🎁 Reward every visit (motivation)\n🏆 Celebrate milestones (commitment)\n👥 Automate referrals (growth)\n\nNuqta Gym Solution:\n\n💪 Visit rewards (keep them motivated)\n🏆 Milestone badges (10, 50, 100 visits)\n📱 Dormant member re-engagement\n👥 Referral program (members bring friends)\n📊 Track attendance patterns\n💰 See member lifetime value\n\nGyms on Nuqta see:\n📈 35% better retention\n👥 40% more referrals\n💰 2.5x member LTV increase\n\nWant to see the retention ROI?',
    landingPageHeadline: 'Keep Members Longer. Get More Referrals. Track Every Result.',
    targetAudience: ['Gym owners', 'Fitness studios', 'Retention-focused'],
    bestFor: ['Gyms', 'CrossFit boxes', 'Yoga studios', 'Pilates', 'Martial arts'],
    urgencyTrigger: 'Calculate your retention opportunity',
    socialProof: 'Gyms see 35% better retention with Nuqta engagement',
    color: 'green',
    icon: Dumbbell
  },
  {
    id: 'retail-loyalty',
    name: 'Retail Loyalty & LTV Engine',
    hook: 'Build Customer Lifetime Value. Protect Margins.',
    subHook: 'Rewards That Increase Spend, Not Destroy Margins.',
    targetPain: 'Retailers destroying margins with discounts',
    channels: ['Meta Ads', 'Instagram', 'WhatsApp', 'Walk-ins'],
    adCopy: {
      headline: '🛍️ Loyalty Done Right: Increase Spend Without Discounting',
      body: 'Discounts train customers to wait for sales. Nuqta\'s coin-based rewards make customers feel valued while protecting your full pricing. Retailers see 45% increase in repeat purchases and 3.2x customer LTV.',
      cta: 'Build Smart Loyalty →'
    },
    emailSubject: '[Retail] Build loyalty without destroying margins',
    smsText: 'Hi [Name], retail owner? Build customer loyalty without 50% OFF sales. 45% more repeat purchases. See how: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nThe discount trap:\n\n🏷️ 50% OFF sale\n📈 Traffic spikes\n📉 Margins destroyed\n😰 Customers wait for next sale\n\nThe loyalty solution:\n\n🎁 Customers earn coins on EVERY purchase\n💰 They come back to use coins\n🛍️ You keep full pricing\n👑 They feel valued, not bargain-hunting\n📊 Track customer lifetime value\n\nNuqta Retail Solution:\n\n✅ Coin-based loyalty (protects margins)\n📸 Product photography\n📱 Social media content\n🎯 Ads to high-value customers\n📊 LTV tracking per customer\n\nRetail stores on Nuqta see:\n📈 45% increase in repeat purchases\n💰 Average 3.2x customer LTV\n🛡️ 95% price retention\n\nWant to see the loyalty ROI?',
    landingPageHeadline: 'Build Real Loyalty. Increase LTV. Protect Your Margins.',
    targetAudience: ['Retail owners', 'Boutique owners', 'Margin-focused'],
    bestFor: ['Fashion boutiques', 'Gift shops', 'Electronics', 'Home decor', 'Specialty retail'],
    urgencyTrigger: 'Calculate your customer LTV opportunity',
    socialProof: 'Retailers see 45% increase in repeat purchases with Nuqta',
    color: 'purple',
    icon: ShoppingCart
  },
  {
    id: 'clinic-patient',
    name: 'Clinic Patient Value Engine',
    hook: 'Maximize Patient Lifetime Value. Drive Referrals.',
    subHook: 'Retention + Referrals + Reputation. Measurable ROI.',
    targetPain: 'High patient acquisition costs, low retention focus',
    channels: ['Google Ads', 'Meta Ads', 'WhatsApp', 'Email'],
    adCopy: {
      headline: '🏥 A Patient Who Returns 10x Is Worth 10x More',
      body: 'You spend AED 300-500 acquiring a patient. But their value is in returns and referrals. Clinics using Nuqta see 40% more return visits, 35% increase in referrals, and 3.5x patient LTV increase.',
      cta: 'Increase Patient LTV →'
    },
    emailSubject: '[Clinics] Maximize patient lifetime value',
    smsText: 'Hi [Name], clinic owner? 40% more returns. 35% more referrals. 3.5x patient LTV. See how: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nClinic economics:\n\n💸 Acquisition cost per patient: AED 300-500\n📈 Real value is in returns & referrals\n\nThe opportunity:\n\n🎯 Increase visits per patient\n👥 Turn patients into referral sources\n⭐ Build reputation for organic leads\n\nNuqta Clinic Solution:\n\n🏥 Visit rewards (they come back!)\n👥 Referral program (family & friends)\n⭐ Review generation (reputation)\n📅 Appointment reminders (reduce no-shows)\n📊 Track patient lifetime value\n💰 See ROI on retention vs acquisition\n\nClinics on Nuqta see:\n📈 40% more return visits\n👥 35% increase in referrals\n⭐ 4.2x more reviews\n💰 3.5x patient LTV increase\n\nWant to see the patient value ROI?',
    landingPageHeadline: 'Maximize Patient Lifetime Value. More Visits. More Referrals. Better Reputation.',
    targetAudience: ['Clinic owners', 'Medical center managers', 'LTV-focused'],
    bestFor: ['Dental clinics', 'Aesthetic clinics', 'Dermatology', 'Physiotherapy', 'Medical centers'],
    urgencyTrigger: 'Calculate your patient LTV opportunity',
    socialProof: 'Clinics see 3.5x patient LTV increase with Nuqta',
    color: 'cyan',
    icon: Pill
  },

  // =====================================================
  // CAFÉ INDUSTRY - MULTIPLE PAIN POINT CAMPAIGNS
  // =====================================================
  {
    id: 'cafe-morning-rush',
    name: 'Café: Fill Your Morning Rush',
    hook: 'Turn Morning Coffee Into Morning Crowds',
    subHook: 'Capture the 7-9am Coffee Seekers in Your Area.',
    targetPain: 'Losing morning rush customers to chains like Starbucks',
    channels: ['Meta Ads', 'Google Ads', 'Instagram', 'WhatsApp'],
    adCopy: {
      headline: '☕ Where Do Your Neighbors Get Their Morning Coffee?',
      body: 'Every morning, hundreds of people near you buy coffee. Are they buying from you? Nuqta targets coffee lovers within 2km with breakfast rewards. Cafés see 45% increase in morning traffic.',
      cta: 'Capture Morning Rush →'
    },
    emailSubject: '[Café Owners] Where are your morning customers going?',
    smsText: 'Hi [Name], café owner? Capture your morning rush. Target coffee lovers within 2km. 45% more morning traffic. Details: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nMorning reality for cafés:\n\n☀️ 7-9am = Peak coffee time\n🏃 People rushing to work\n☕ They NEED coffee\n❓ But are they buying from YOU?\n\nProblem:\n❌ Starbucks has the app loyalty\n❌ Tim Hortons has drive-thru\n❌ You have... great coffee but no reach\n\nNuqta Morning Rush Solution:\n\n🎯 Target people within 2km\n☕ "Double coins before 9am" promotions\n📱 Push notifications at 7am\n🥐 Breakfast combo rewards\n📊 Track morning vs afternoon revenue\n\nCafés on Nuqta see:\n📈 45% increase in morning traffic\n☕ 3x more weekday morning orders\n🔄 67% become weekly regulars\n\nWant to capture your morning rush?',
    landingPageHeadline: 'Capture the Morning Rush. Turn Neighbors Into Regulars.',
    targetAudience: ['Café owners', 'Coffee shops', 'Losing to chains'],
    bestFor: ['Independent cafés', 'Specialty coffee', 'Neighborhood cafés'],
    urgencyTrigger: 'See how many coffee lovers are near you',
    socialProof: 'Cafés see 45% increase in morning traffic with targeted campaigns',
    color: 'amber',
    icon: Coffee
  },
  {
    id: 'cafe-instagram-worthy',
    name: 'Café: Instagram-Worthy Content',
    hook: 'Make Your Café the Most Instagrammed in the Area',
    subHook: 'Content That Makes People Want to Visit.',
    targetPain: 'Poor Instagram presence compared to trendy competitors',
    channels: ['Instagram', 'Meta Ads', 'WhatsApp', 'TikTok'],
    adCopy: {
      headline: '📸 Is Your Café Missing from Instagram?',
      body: 'When people search for "cafés near me" on Instagram, do they find you? Professional content that makes people crave your coffee and aesthetic. Our café clients see 3x more Instagram mentions.',
      cta: 'Become Instagram Famous →'
    },
    emailSubject: '[Café Owners] Your café should be on everyone\'s Instagram',
    smsText: 'Hi [Name], café owner? Make your café Instagram-famous. 3x more mentions. Professional content included. Details: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nInstagram reality for cafés:\n\n📱 People discover cafés on Instagram\n📸 They look for aesthetic photos\n🔍 They search "cafés near me"\n❓ Is YOUR café showing up?\n\nThe problem:\n❌ No time for content\n❌ Phone photos look amateur\n❌ Trendy cafés get all the attention\n\nNuqta Instagram Solution:\n\n📸 Professional photo shoots\n🎬 Reels showing your coffee art\n✨ Aesthetic flat lays\n🌟 Influencer visits included\n📊 Track followers to foot traffic\n\nCafés on Nuqta see:\n📈 3x more Instagram mentions\n📱 200% increase in tagged posts\n🚶 35% of new customers from Instagram\n\nWant to become Instagram-famous?',
    landingPageHeadline: 'Make Your Café Instagram-Famous. Content That Brings Customers.',
    targetAudience: ['Café owners', 'Poor Instagram presence', 'Competing with trendy spots'],
    bestFor: ['Specialty coffee', 'Aesthetic cafés', 'Brunch spots', 'Dessert cafés'],
    urgencyTrigger: 'Book your café photoshoot this week',
    socialProof: 'Cafés see 3x more Instagram mentions with professional content',
    color: 'pink',
    icon: Instagram
  },
  {
    id: 'cafe-weekday-slow',
    name: 'Café: Fix Your Weekday Slump',
    hook: 'Make Tuesday as Busy as Saturday',
    subHook: 'Fill Empty Tables on Slow Days.',
    targetPain: 'Packed weekends but empty weekdays',
    channels: ['Meta Ads', 'WhatsApp', 'Email', 'Instagram'],
    adCopy: {
      headline: '📅 Your Tuesday is Empty. Your Saturday is Packed. Let\'s Fix That.',
      body: 'Weekday slumps cost you revenue. Smart promotions bring customers on slow days. "Double coins on Tuesdays" has helped cafés increase weekday traffic by 40%.',
      cta: 'Fill Slow Days →'
    },
    emailSubject: '[Café Owners] How to make weekdays as busy as weekends',
    smsText: 'Hi [Name], café owner? Packed weekends, empty weekdays? Increase weekday traffic by 40%. See how: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nCafé owner reality:\n\n📅 Saturday: Waiting list, packed\n📅 Tuesday: Empty chairs, staff idle\n💸 Same rent, same staff cost\n📉 But only half the revenue on weekdays\n\nThe solution: Smart Promotions\n\n☕ "Double coins on Tuesdays"\n🥐 "Weekday breakfast special"\n👥 "Work from our café Wednesday"\n📊 Track which promotions work\n\nNuqta Weekday Solution:\n\n🎯 Target work-from-home customers\n💼 Business meeting packages\n📱 Push notifications on slow mornings\n🎁 Weekday-specific rewards\n📊 Compare day-by-day revenue\n\nCafés on Nuqta see:\n📈 40% increase in weekday traffic\n💰 Smoothed revenue across the week\n👥 New "regulars" who only come weekdays\n\nWant to fill your slow days?',
    landingPageHeadline: 'Turn Slow Days Into Busy Days. Smooth Your Revenue.',
    targetAudience: ['Café owners', 'Weekend-heavy traffic', 'Inconsistent revenue'],
    bestFor: ['Independent cafés', 'Specialty coffee', 'Brunch spots'],
    urgencyTrigger: 'Start filling slow days this week',
    socialProof: 'Cafés see 40% increase in weekday traffic with smart promotions',
    color: 'cyan',
    icon: Calendar
  },

  // =====================================================
  // SALON INDUSTRY - MULTIPLE PAIN POINT CAMPAIGNS
  // =====================================================
  {
    id: 'salon-rebooking',
    name: 'Salon: Automatic Rebooking Engine',
    hook: 'Never Lose a Client to "I Forgot to Book"',
    subHook: 'Automated Reminders That Fill Your Calendar.',
    targetPain: 'Clients don\'t rebook and forget to come back',
    channels: ['WhatsApp', 'Instagram', 'Meta Ads', 'SMS'],
    adCopy: {
      headline: '💇‍♀️ Your Clients Love You. They Just Forget to Rebook.',
      body: 'The average salon loses 30% of clients simply because they forget to book their next appointment. Automated reminders at the right time bring them back. See 40% more rebookings.',
      cta: 'Automate Rebooking →'
    },
    emailSubject: '[Salon Owners] Clients forget to rebook. Remind them automatically.',
    smsText: 'Hi [Name], salon owner? Clients forget to rebook. Automate reminders. 40% more rebookings. Details: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nSalon reality check:\n\n✂️ Client leaves happy\n📅 "I\'ll book soon!" they say\n⏰ 6 weeks pass...\n❓ Where did they go?\n\nThe truth:\n❌ They didn\'t leave for a competitor\n❌ They didn\'t hate your service\n✅ They simply FORGOT\n\nNuqta Rebooking Engine:\n\n📅 Auto-reminder 4 weeks after last visit\n💬 WhatsApp message: "Time for a trim!"\n🎁 "Rebook within 7 days for bonus coins"\n📊 Track rebooking rates\n\nSalons on Nuqta see:\n📈 40% more rebookings\n🔄 Average visit frequency: 5 weeks → 4 weeks\n💰 25% increase in revenue per client\n\nWant to automate rebooking?',
    landingPageHeadline: 'Never Lose Clients to Forgetfulness. Automate Rebooking.',
    targetAudience: ['Salon owners', 'Low rebooking rates', 'No reminder system'],
    bestFor: ['Hair salons', 'Beauty salons', 'Barber shops', 'Nail bars'],
    urgencyTrigger: 'See your current rebooking rate vs potential',
    socialProof: 'Salons see 40% more rebookings with automated reminders',
    color: 'pink',
    icon: Calendar
  },
  {
    id: 'salon-no-show',
    name: 'Salon: Reduce No-Shows by 50%',
    hook: 'Stop Losing Money to Empty Chairs',
    subHook: 'No-Shows Cost You AED 200+ Per Day.',
    targetPain: 'High no-show rates losing revenue',
    channels: ['WhatsApp', 'SMS', 'Meta Ads', 'Email'],
    adCopy: {
      headline: '😤 No-Shows Are Costing You AED 200+ Every Day',
      body: 'Every empty chair is lost revenue. Smart reminders and deposit incentives reduce no-shows by 50%. Your chair stays full, your revenue stays stable.',
      cta: 'Reduce No-Shows →'
    },
    emailSubject: '[Salon Owners] No-shows cost you AED 200/day. Fix it.',
    smsText: 'Hi [Name], salon owner? No-shows costing you money? Reduce by 50%. See how: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nNo-show math:\n\n✂️ Average service: AED 150\n❌ 2 no-shows per day = AED 300 lost\n📅 Per month = AED 6,000+ lost revenue\n😰 Plus: Staff sitting idle\n\nWhy clients no-show:\n❌ Forgot the appointment\n❌ No consequence for canceling\n❌ Booked elsewhere last minute\n\nNuqta No-Show Solution:\n\n📱 24-hour reminder (WhatsApp)\n⏰ 2-hour reminder (SMS)\n🎁 "Show up bonus" coins\n📊 Track no-show patterns\n💳 Optional: Deposit for high-no-show clients\n\nSalons on Nuqta see:\n📉 50% reduction in no-shows\n💰 AED 3,000+ saved per month\n📅 Better schedule predictability\n\nWant to stop losing money to empty chairs?',
    landingPageHeadline: 'Reduce No-Shows by 50%. Keep Your Chairs Full.',
    targetAudience: ['Salon owners', 'High no-show rates', 'Revenue loss'],
    bestFor: ['Hair salons', 'Beauty salons', 'Spas', 'Aesthetics clinics'],
    urgencyTrigger: 'Calculate your no-show losses',
    socialProof: 'Salons reduce no-shows by 50% with Nuqta reminders',
    color: 'red',
    icon: AlertTriangle
  },
  {
    id: 'salon-new-stylists',
    name: 'Salon: Fill New Stylist Calendars',
    hook: 'Your New Stylist Has Empty Slots. Let\'s Fix That.',
    subHook: 'Get Clients to Try New Team Members.',
    targetPain: 'New stylists have empty calendars while senior stylists are booked out',
    channels: ['Instagram', 'WhatsApp', 'Meta Ads', 'Walk-ins'],
    adCopy: {
      headline: '👩‍🎨 New Stylist? Let\'s Fill Their Calendar.',
      body: 'Senior stylists booked 3 weeks out. New stylists sitting idle. Incentivize clients to try new team members with bonus rewards. New stylists see 60% faster calendar fill.',
      cta: 'Fill New Stylist Calendars →'
    },
    emailSubject: '[Salon Owners] Your new stylist needs clients. Here\'s how.',
    smsText: 'Hi [Name], salon owner? New stylist with empty slots? Fill their calendar 60% faster. Details: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nSalon staffing reality:\n\n⭐ Senior stylist: Booked 3 weeks out\n👩‍🎨 New stylist: Empty calendar\n💸 Same salary, less revenue\n😰 New stylist gets discouraged\n\nThe solution: Incentivize trials\n\n🎁 "2x coins with our new stylist!"\n📸 Showcase their work on Instagram\n💬 "Same quality, more rewards"\n📊 Track new stylist bookings\n\nNuqta New Stylist Solution:\n\n✨ Feature new stylist in content\n🎁 Bonus rewards for trying them\n⭐ Collect reviews specifically for them\n📊 Track their customer retention\n\nSalons on Nuqta see:\n📈 60% faster new stylist calendar fill\n👥 New stylists build own following\n💰 Better team revenue distribution\n\nWant to fill new stylist calendars?',
    landingPageHeadline: 'Fill New Stylist Calendars Faster. Build Their Following.',
    targetAudience: ['Salon owners', 'Growing teams', 'Uneven bookings'],
    bestFor: ['Hair salons', 'Beauty salons', 'Growing salons'],
    urgencyTrigger: 'Get your new stylist booked this month',
    socialProof: 'New stylists fill calendars 60% faster with Nuqta incentives',
    color: 'purple',
    icon: Users
  },

  // =====================================================
  // RESTAURANT INDUSTRY - MULTIPLE PAIN POINT CAMPAIGNS
  // =====================================================
  {
    id: 'restaurant-dine-in',
    name: 'Restaurant: Drive Dine-In Over Delivery',
    hook: 'Delivery Takes 30%. Dine-In Keeps 100%.',
    subHook: 'Incentivize Customers to Visit, Not Order Online.',
    targetPain: 'Too dependent on delivery apps eating margins',
    channels: ['Meta Ads', 'Google Ads', 'Instagram', 'WhatsApp'],
    adCopy: {
      headline: '🍽️ Talabat Takes 30%. Dine-In Customers Pay Full Price.',
      body: 'Every delivery order costs you 25-30% in commission. Same customer dining in = 100% margin. Nuqta incentivizes dine-in visits with rewards. Restaurants see 40% shift from delivery to dine-in.',
      cta: 'Drive Dine-In Traffic →'
    },
    emailSubject: '[Restaurant Owners] Shift customers from delivery to dine-in',
    smsText: 'Hi [Name], restaurant owner? Delivery costs you 30%. Shift to dine-in. Keep full margins. See how: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nDelivery economics:\n\n📦 Order value: AED 80\n💸 Talabat commission: 25% = AED 20\n📉 Your profit: AED 60\n\nDine-in economics:\n\n🍽️ Same order: AED 80\n💰 Your profit: AED 80\n📈 Plus: Drinks, desserts, tips\n\nNuqta Dine-In Solution:\n\n🎁 "3x coins when you dine in"\n📱 Target delivery customers with dine-in offers\n🍽️ "Skip the wait, dine-in specials"\n📊 Track delivery vs dine-in revenue\n\nRestaurants on Nuqta see:\n📈 40% shift from delivery to dine-in\n💰 15% increase in average check\n🍷 Higher add-on sales (drinks, desserts)\n\nWant to drive more dine-in?',
    landingPageHeadline: 'Shift From Delivery to Dine-In. Keep 100% of Your Margins.',
    targetAudience: ['Restaurant owners', 'Heavy on delivery', 'Margin erosion'],
    bestFor: ['Casual dining', 'Fast casual', 'Family restaurants', 'Ethnic restaurants'],
    urgencyTrigger: 'Calculate your delivery commission losses',
    socialProof: 'Restaurants see 40% shift from delivery to dine-in',
    color: 'orange',
    icon: Store
  },
  {
    id: 'restaurant-slow-nights',
    name: 'Restaurant: Fill Slow Nights',
    hook: 'Monday-Wednesday Empty? Let\'s Change That.',
    subHook: 'Turn Slow Nights Into Profitable Nights.',
    targetPain: 'Packed Fri-Sat, empty Mon-Wed',
    channels: ['Meta Ads', 'Instagram', 'WhatsApp', 'Email'],
    adCopy: {
      headline: '📅 Your Monday Night Has 5 Tables. Friday Has 50.',
      body: 'Same staff, same rent, but Monday makes you nothing. Targeted promotions bring diners on slow nights. Restaurants see 35% increase in weekday covers.',
      cta: 'Fill Slow Nights →'
    },
    emailSubject: '[Restaurant Owners] Make Monday as busy as Friday',
    smsText: 'Hi [Name], restaurant owner? Empty weeknights? Fill them. 35% more covers. See how: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nRestaurant week reality:\n\n📅 Friday-Saturday: Fully booked, turning away\n📅 Monday-Wednesday: 20% capacity\n💸 Same rent, same staff\n📉 Weekdays are loss-makers\n\nThe solution: Weeknight incentives\n\n🍽️ "2x coins on weeknights"\n🍷 "Wine Wednesday special"\n👨‍👩‍👧 "Family Monday rewards"\n📊 Track day-by-day covers\n\nNuqta Slow Night Solution:\n\n🎯 Target nearby residents on slow days\n🎁 Higher rewards Mon-Wed\n📱 Push notifications Tuesday afternoon\n📊 Revenue comparison by day\n\nRestaurants on Nuqta see:\n📈 35% increase in weekday covers\n💰 Smoother weekly revenue\n👥 Build "weekday regulars"\n\nWant to fill your slow nights?',
    landingPageHeadline: 'Fill Slow Nights. Turn Monday Into a Profitable Night.',
    targetAudience: ['Restaurant owners', 'Weekend-heavy', 'Inconsistent covers'],
    bestFor: ['Casual dining', 'Fine dining', 'Neighborhood restaurants'],
    urgencyTrigger: 'Compare your weekday vs weekend revenue',
    socialProof: 'Restaurants see 35% increase in weekday covers',
    color: 'amber',
    icon: Calendar
  },
  {
    id: 'restaurant-reviews',
    name: 'Restaurant: Get 5-Star Reviews',
    hook: 'Turn Happy Diners Into 5-Star Reviews',
    subHook: 'Build Your Online Reputation Automatically.',
    targetPain: 'Few Google/Zomato reviews despite happy customers',
    channels: ['WhatsApp', 'Email', 'In-restaurant', 'SMS'],
    adCopy: {
      headline: '⭐ Your Customers Love You. But Google Doesn\'t Know.',
      body: 'Happy customers leave quietly. Unhappy ones leave reviews. Automated review requests at the right moment turn satisfaction into 5-star ratings. Restaurants see 4x more reviews.',
      cta: 'Get More 5-Star Reviews →'
    },
    emailSubject: '[Restaurant Owners] Turn happy customers into 5-star reviews',
    smsText: 'Hi [Name], restaurant owner? Happy customers but few reviews? Get 4x more reviews. See how: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nReview reality:\n\n😊 Happy customer: Leaves quietly\n😤 Unhappy customer: Writes long negative review\n📉 Your rating: Lower than deserved\n\nThe problem:\n❌ You don\'t ask for reviews\n❌ No easy way to leave one\n❌ Only angry people bother\n\nNuqta Review Solution:\n\n📱 WhatsApp after visit: "How was it?"\n⭐ One-tap review link\n🎁 "Leave a review, get bonus coins"\n📊 Track review volume and ratings\n\nRestaurants on Nuqta see:\n📈 4x more reviews\n⭐ Average rating increase: 0.3-0.5 stars\n🔍 Higher visibility on Google/Zomato\n\nWant more 5-star reviews?',
    landingPageHeadline: 'Turn Happy Diners Into 5-Star Reviews. Build Your Reputation.',
    targetAudience: ['Restaurant owners', 'Low review count', 'Want better rating'],
    bestFor: ['All restaurant types', 'New restaurants', 'Established restaurants'],
    urgencyTrigger: 'Check your current review count vs competitors',
    socialProof: 'Restaurants get 4x more reviews with Nuqta',
    color: 'yellow',
    icon: Star
  },

  // =====================================================
  // GYM/FITNESS INDUSTRY - MULTIPLE PAIN POINT CAMPAIGNS
  // =====================================================
  {
    id: 'gym-january',
    name: 'Gym: Capture New Year Resolution Crowd',
    hook: 'January Joiners Leave by March. Keep Them.',
    subHook: 'Turn Resolution Signups Into Lifetime Members.',
    targetPain: 'January rush followed by mass dropouts',
    channels: ['Meta Ads', 'Instagram', 'Google Ads', 'WhatsApp'],
    adCopy: {
      headline: '💪 80% of January Joiners Quit by March. Beat That.',
      body: 'New Year = New signups. But most quit within 8 weeks. Nuqta engagement keeps them coming. Turn resolution-makers into real members. See 50% better January retention.',
      cta: 'Keep January Joiners →'
    },
    emailSubject: '[Gym Owners] January joiners quit by March. Keep them.',
    smsText: 'Hi [Name], gym owner? Keep your January joiners. 50% better retention. See how: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nJanuary gym reality:\n\n🎉 January 1: Packed gym\n📉 February: Crowds thin\n😰 March: Where did everyone go?\n💸 You paid to acquire them, lost them in 8 weeks\n\nWhy they quit:\n❌ No accountability\n❌ Don\'t see progress\n❌ Feel invisible\n❌ Lost motivation\n\nNuqta January Retention:\n\n🏆 "First 10 visits" milestone badge\n💪 Weekly check-in rewards\n📊 Progress tracking\n🎁 "Made it to March!" bonus\n\nGyms on Nuqta see:\n📈 50% better January retention\n👥 Resolution members become regulars\n💰 LTV of January joiners: 2.5x higher\n\nReady for this January?',
    landingPageHeadline: 'Turn January Joiners Into Lifetime Members.',
    targetAudience: ['Gym owners', 'Fitness studios', 'New Year planning'],
    bestFor: ['Gyms', 'CrossFit boxes', 'Boutique fitness'],
    urgencyTrigger: 'Prepare for January now',
    socialProof: 'Gyms see 50% better January retention with Nuqta',
    color: 'green',
    icon: Rocket
  },
  {
    id: 'gym-dormant',
    name: 'Gym: Reactivate Dormant Members',
    hook: 'They\'re Still Paying. Get Them Back In.',
    subHook: 'Turn Ghost Members Into Active Members.',
    targetPain: 'Members paying but not showing up, then canceling',
    channels: ['WhatsApp', 'Email', 'SMS', 'Meta Ads'],
    adCopy: {
      headline: '👻 30% of Your Members Haven\'t Visited in 4 Weeks',
      body: 'Ghost members eventually cancel. Catch them before they do. Automated re-engagement brings them back. See 40% reactivation rate for dormant members.',
      cta: 'Reactivate Dormant Members →'
    },
    emailSubject: '[Gym Owners] Your ghost members are about to cancel. Save them.',
    smsText: 'Hi [Name], gym owner? Reactivate dormant members before they cancel. 40% come back. See how: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nGym member reality:\n\n👤 Joins with enthusiasm\n📉 Visits drop after 6 weeks\n👻 Becomes ghost member (paying, not coming)\n❌ Eventually cancels\n💸 You lose recurring revenue\n\nThe warning signs:\n⚠️ No visit in 2 weeks\n⚠️ Visit frequency dropping\n⚠️ Stopped using amenities\n\nNuqta Reactivation Engine:\n\n📊 Track attendance patterns\n📱 Auto-message after 2 weeks absent\n🎁 "We miss you! Bonus coins on your next visit"\n💪 Personalized workout reminders\n\nGyms on Nuqta see:\n📈 40% dormant member reactivation\n💰 Average 4 extra months before cancel\n📊 Early warning system for at-risk members\n\nWant to reactivate your ghost members?',
    landingPageHeadline: 'Reactivate Dormant Members Before They Cancel.',
    targetAudience: ['Gym owners', 'High ghost member count', 'Cancellation problems'],
    bestFor: ['Gyms', 'Fitness studios', 'Martial arts'],
    urgencyTrigger: 'See how many dormant members you have',
    socialProof: '40% of dormant members reactivate with Nuqta outreach',
    color: 'purple',
    icon: RefreshCw
  },
  {
    id: 'gym-referrals',
    name: 'Gym: Turn Members Into Recruiters',
    hook: 'Your Best Members Are Your Best Salespeople',
    subHook: 'Member Referrals Cost 80% Less Than Ads.',
    targetPain: 'High acquisition costs, underutilized referral potential',
    channels: ['WhatsApp', 'Instagram', 'Email', 'In-gym'],
    adCopy: {
      headline: '👥 Your Members Have Friends Who Need a Gym',
      body: 'Referrals convert 4x better than ads and cost 80% less. But most gyms don\'t have a real referral program. Make it easy and rewarding. See 40% of new members from referrals.',
      cta: 'Launch Referral Program →'
    },
    emailSubject: '[Gym Owners] Your members could bring you 40% of new signups',
    smsText: 'Hi [Name], gym owner? Turn members into recruiters. 40% of new members from referrals. See how: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nAcquisition costs reality:\n\n💸 Facebook ad lead: AED 50-100\n📞 Lead → Member conversion: 20%\n💰 Actual cost per member: AED 250-500\n\nReferral economics:\n\n👥 Member brings a friend\n✅ Already motivated\n✅ Trusted recommendation\n💰 Cost: Just the reward (AED 50-100)\n\nNuqta Referral Program:\n\n🎁 "Bring a friend, both get rewarded"\n📱 Easy share links\n📊 Track who refers whom\n🏆 "Top referrer of the month"\n\nGyms on Nuqta see:\n📈 40% of new members from referrals\n💰 80% lower acquisition cost\n👥 Referred members stay 2x longer\n\nWant to launch a referral program?',
    landingPageHeadline: 'Turn Members Into Recruiters. Lower Your Acquisition Costs.',
    targetAudience: ['Gym owners', 'High acquisition costs', 'No referral system'],
    bestFor: ['Gyms', 'CrossFit boxes', 'Yoga studios', 'Boutique fitness'],
    urgencyTrigger: 'See your referral program potential',
    socialProof: 'Gyms get 40% of new members from referrals with Nuqta',
    color: 'blue',
    icon: Users
  },

  // =====================================================
  // RETAIL INDUSTRY - MULTIPLE PAIN POINT CAMPAIGNS
  // =====================================================
  {
    id: 'retail-foot-traffic',
    name: 'Retail: Drive Foot Traffic From Online',
    hook: 'They Browse Online. Make Them Buy In-Store.',
    subHook: 'Convert Window Shoppers Into Walk-Ins.',
    targetPain: 'People browse online but don\'t visit the store',
    channels: ['Meta Ads', 'Google Ads', 'Instagram', 'WhatsApp'],
    adCopy: {
      headline: '🛍️ Your Products Are Getting Views. But Not Visits.',
      body: 'People see your posts. They browse your products. But they don\'t walk in. In-store visit incentives convert online interest into real foot traffic. See 30% increase in store visits.',
      cta: 'Drive Store Visits →'
    },
    emailSubject: '[Retail] Turn online browsers into store visitors',
    smsText: 'Hi [Name], retail owner? Turn online browsers into store visitors. 30% more foot traffic. See how: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nRetail reality:\n\n👀 People see your Instagram posts\n❤️ They like, they save\n❓ But they don\'t visit\n🛒 They buy from Amazon instead\n\nWhy they don\'t visit:\n❌ No urgency\n❌ No reason to come TODAY\n❌ Online is "easier"\n\nNuqta Foot Traffic Solution:\n\n🎁 "Visit today, get bonus coins"\n📍 Geo-targeted "You\'re nearby!" ads\n⏰ Limited in-store exclusives\n📊 Track online → in-store conversion\n\nRetail stores on Nuqta see:\n📈 30% increase in foot traffic\n💰 In-store customers spend 20% more\n📱 45% of visitors from online targeting\n\nWant to drive more store visits?',
    landingPageHeadline: 'Convert Online Interest Into In-Store Visits.',
    targetAudience: ['Retail owners', 'Good online presence', 'Low foot traffic'],
    bestFor: ['Fashion boutiques', 'Home decor', 'Gift shops', 'Specialty retail'],
    urgencyTrigger: 'See your online-to-store conversion potential',
    socialProof: 'Retailers see 30% increase in foot traffic from online targeting',
    color: 'indigo',
    icon: MapPin
  },
  {
    id: 'retail-basket-size',
    name: 'Retail: Increase Average Basket Size',
    hook: 'Customers Buy One Item. They Could Buy Three.',
    subHook: 'Smart Rewards That Increase Spend Per Visit.',
    targetPain: 'Low average transaction value',
    channels: ['In-store', 'WhatsApp', 'Email', 'Meta Ads'],
    adCopy: {
      headline: '🛒 Average Basket: AED 150. It Could Be AED 250.',
      body: 'Customers buy what they came for and leave. Tiered rewards encourage them to add more. "Spend AED 200, get 2x coins" increases basket size by 25%.',
      cta: 'Increase Basket Size →'
    },
    emailSubject: '[Retail] Your average basket could be 25% higher',
    smsText: 'Hi [Name], retail owner? Increase basket size by 25%. Tiered reward strategy. See how: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nBasket size reality:\n\n🛒 Customer comes for one item\n💰 Spends AED 150\n🚶 Leaves immediately\n❓ Could have bought more\n\nThe opportunity:\n\n📈 Average basket: AED 150\n🎯 Target basket: AED 200+\n💰 25% more revenue per customer\n\nNuqta Basket Size Strategy:\n\n🎁 "Spend AED 200, get 2x coins"\n📊 Tiered rewards (higher spend = more coins)\n💡 "Complete the look" suggestions\n📱 "You\'re AED 50 away from double rewards!"\n\nRetail stores on Nuqta see:\n📈 25% increase in average basket\n💰 More items per transaction\n🛍️ Higher revenue per customer\n\nWant to increase your basket size?',
    landingPageHeadline: 'Increase Average Basket Size by 25%. Smart Tiered Rewards.',
    targetAudience: ['Retail owners', 'Low average transaction', 'Want higher spend'],
    bestFor: ['Fashion boutiques', 'Electronics', 'Home decor', 'Gift shops'],
    urgencyTrigger: 'Calculate your basket size potential',
    socialProof: 'Retailers see 25% increase in basket size with tiered rewards',
    color: 'green',
    icon: ShoppingCart
  },
  {
    id: 'retail-seasonal',
    name: 'Retail: Maximize Seasonal Sales',
    hook: 'Ramadan, DSF, Eid - Are You Ready?',
    subHook: 'Capture Your Share of Seasonal Spending.',
    targetPain: 'Not capitalizing on peak shopping seasons',
    channels: ['Meta Ads', 'Instagram', 'WhatsApp', 'Email'],
    adCopy: {
      headline: '🎁 Seasonal Spending Is Huge. Are You Capturing It?',
      body: 'Ramadan, Dubai Shopping Festival, Eid - billions spent. But are customers choosing YOU? Seasonal campaigns at the right time capture your share. See 50% higher seasonal revenue.',
      cta: 'Plan Seasonal Campaigns →'
    },
    emailSubject: '[Retail] Seasonal shopping is coming. Are you ready?',
    smsText: 'Hi [Name], retail owner? Maximize seasonal sales. 50% higher seasonal revenue. See how: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nSeasonal spending in UAE:\n\n🌙 Ramadan: AED 5B+ spending\n🛍️ DSF: AED 3B+ spending\n🎉 Eid: AED 2B+ spending\n🎄 Festive: AED 1.5B+ spending\n\nThe question: Are YOU getting your share?\n\n❓ Do you have seasonal campaigns ready?\n❓ Are you targeting shoppers early?\n❓ Do you have special rewards?\n\nNuqta Seasonal Solution:\n\n📅 Pre-planned seasonal campaigns\n🎁 Special "Ramadan coins" promotions\n🎯 Target seasonal shoppers\n📊 Compare year-over-year performance\n\nRetail stores on Nuqta see:\n📈 50% higher seasonal revenue\n🛍️ Earlier customer engagement\n💰 Better share of seasonal spend\n\nReady to plan your seasonal campaigns?',
    landingPageHeadline: 'Capture Your Share of Seasonal Spending. Plan Ahead.',
    targetAudience: ['Retail owners', 'Seasonal business', 'Want to maximize peak periods'],
    bestFor: ['Fashion boutiques', 'Gift shops', 'Home decor', 'All retail'],
    urgencyTrigger: 'Plan for the next season now',
    socialProof: 'Retailers see 50% higher seasonal revenue with planned campaigns',
    color: 'amber',
    icon: Sparkles
  },

  // =====================================================
  // CLINIC/MEDICAL INDUSTRY - MULTIPLE PAIN POINT CAMPAIGNS
  // =====================================================
  {
    id: 'clinic-no-shows',
    name: 'Clinic: Reduce Appointment No-Shows',
    hook: 'No-Shows Cost You AED 500+ Per Day',
    subHook: 'Automated Reminders That Keep Your Schedule Full.',
    targetPain: 'High no-show rates wasting doctor time',
    channels: ['WhatsApp', 'SMS', 'Email', 'Meta Ads'],
    adCopy: {
      headline: '🏥 Every No-Show = AED 200+ Lost Revenue',
      body: 'Empty appointment slots can\'t be filled last minute. Smart reminders reduce no-shows by 60%. Keep your doctors busy, your revenue stable.',
      cta: 'Reduce No-Shows →'
    },
    emailSubject: '[Clinics] No-shows cost you AED 500/day. Fix it.',
    smsText: 'Hi [Name], clinic owner? Reduce no-shows by 60%. Keep schedule full. See how: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nClinic no-show math:\n\n👤 Consultation value: AED 200-500\n❌ 3 no-shows per day = AED 600-1,500 lost\n📅 Per month = AED 12,000-30,000 lost\n👨‍⚕️ Plus: Doctor time wasted\n\nWhy patients no-show:\n❌ Forgot the appointment\n❌ No easy way to reschedule\n❌ "I\'ll book again later"\n\nNuqta No-Show Solution:\n\n📱 48-hour reminder (WhatsApp)\n⏰ 4-hour reminder (SMS)\n📅 Easy one-tap reschedule\n🎁 "Show up on time" reward\n\nClinics on Nuqta see:\n📉 60% reduction in no-shows\n💰 AED 6,000+ saved per month\n📅 Predictable scheduling\n\nWant to reduce your no-shows?',
    landingPageHeadline: 'Reduce No-Shows by 60%. Keep Your Schedule Full.',
    targetAudience: ['Clinic owners', 'High no-show rates', 'Lost revenue'],
    bestFor: ['Dental clinics', 'Medical centers', 'Specialist clinics'],
    urgencyTrigger: 'Calculate your no-show losses',
    socialProof: 'Clinics reduce no-shows by 60% with Nuqta reminders',
    color: 'red',
    icon: AlertTriangle
  },
  {
    id: 'clinic-reviews',
    name: 'Clinic: Build 5-Star Reputation',
    hook: 'Turn Satisfied Patients Into 5-Star Reviews',
    subHook: 'Your Reputation Drives New Patient Acquisition.',
    targetPain: 'Low Google reviews despite happy patients',
    channels: ['WhatsApp', 'Email', 'SMS', 'In-clinic'],
    adCopy: {
      headline: '⭐ Patients Love You. But Google Doesn\'t Show It.',
      body: 'Happy patients rarely leave reviews. Unhappy ones always do. Automated review requests capture satisfaction. Clinics see 5x more reviews and 0.4 star rating increase.',
      cta: 'Get More 5-Star Reviews →'
    },
    emailSubject: '[Clinics] Your patients love you. Let Google know.',
    smsText: 'Hi [Name], clinic owner? Get 5x more reviews. Build your reputation. See how: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nClinic review reality:\n\n😊 Patient had great experience\n🚶 Leaves quietly\n❌ No review left\n\n😤 Patient had one issue\n💬 Writes long negative review\n📉 Your rating suffers\n\nNuqta Review Solution:\n\n📱 Post-visit "How was your visit?" message\n⭐ One-tap review link\n🎁 "Review us, get coins for next visit"\n📊 Track review volume and sentiment\n\nClinics on Nuqta see:\n📈 5x more reviews\n⭐ Average 0.4 star rating increase\n🔍 Higher ranking in Google searches\n\nWant to build your 5-star reputation?',
    landingPageHeadline: 'Turn Satisfied Patients Into 5-Star Reviews.',
    targetAudience: ['Clinic owners', 'Low review count', 'Want better rating'],
    bestFor: ['Dental clinics', 'Aesthetic clinics', 'Medical centers'],
    urgencyTrigger: 'Check your review count vs competitors',
    socialProof: 'Clinics get 5x more reviews with Nuqta',
    color: 'yellow',
    icon: Star
  },
  {
    id: 'clinic-family',
    name: 'Clinic: Capture Whole Families',
    hook: 'One Patient = One Family of Patients',
    subHook: 'Turn Individual Patients Into Family Accounts.',
    targetPain: 'Patients come alone but families go elsewhere',
    channels: ['WhatsApp', 'Email', 'In-clinic', 'Meta Ads'],
    adCopy: {
      headline: '👨‍👩‍👧 Your Patient Has a Family. Are They Your Patients Too?',
      body: 'Every patient has a spouse, kids, parents. Family referral programs turn one patient into 3-4. See 35% of new patients from family referrals.',
      cta: 'Capture Family Accounts →'
    },
    emailSubject: '[Clinics] One patient = one whole family',
    smsText: 'Hi [Name], clinic owner? Turn patients into family accounts. 35% more from family referrals. See how: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nFamily opportunity:\n\n👤 Your patient: 1 person\n👨‍👩‍👧 Their family: 3-4 people\n🏥 Where do the others go?\n❓ Different clinics? Competitors?\n\nThe opportunity:\n\n💰 Family account = 4x LTV\n🔄 Families tend to stick together\n👥 One trusted clinic for all\n\nNuqta Family Solution:\n\n🎁 "Add family members, get bonus coins"\n👨‍👩‍👧 Family rewards sharing\n📊 Track family vs individual accounts\n📅 Family appointment scheduling\n\nClinics on Nuqta see:\n📈 35% of new patients from family referrals\n👨‍👩‍👧 Average family size: 3.2 patients\n💰 4x LTV from family accounts\n\nWant to capture whole families?',
    landingPageHeadline: 'Turn Patients Into Family Accounts. 4x The Lifetime Value.',
    targetAudience: ['Clinic owners', 'Dental clinics', 'Family medicine'],
    bestFor: ['Dental clinics', 'General practice', 'Pediatric clinics', 'Family medicine'],
    urgencyTrigger: 'Calculate your family account potential',
    socialProof: 'Clinics get 35% of new patients from family referrals',
    color: 'blue',
    icon: Users
  },

  // =====================================================
  // ADDITIONAL CAFÉ CAMPAIGNS
  // =====================================================
  {
    id: 'cafe-work-remote',
    name: 'Café: Capture Remote Workers',
    hook: 'Become the Go-To Work-From-Café Spot',
    subHook: 'Remote Workers Spend 3x More Than Quick Visitors.',
    targetPain: 'Missing out on remote worker segment',
    channels: ['Instagram', 'LinkedIn', 'Meta Ads', 'Google Ads'],
    adCopy: {
      headline: '💻 Remote Workers Need Coffee AND WiFi. Give Them Both.',
      body: 'Remote workers spend 3-4 hours per visit and buy multiple items. Position your café as the perfect work spot. See 2.5x higher average ticket from remote worker customers.',
      cta: 'Attract Remote Workers →'
    },
    emailSubject: '[Café Owners] Remote workers spend 3x more per visit',
    smsText: 'Hi [Name], café owner? Capture remote workers. 3x higher spend per visit. See how: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nRemote worker opportunity:\n\n💻 They need a place to work\n☕ They need coffee (lots of it)\n📱 They need good WiFi\n⏰ They stay 3-4 hours\n\nThe math:\n\n🚶 Quick visitor: AED 25 (1 coffee)\n💻 Remote worker: AED 75-100 (coffee + lunch + snacks)\n📈 3x higher ticket size\n\nNuqta Remote Worker Package:\n\n💻 "Work from our café" campaigns\n☕ "Refill rewards" for long stays\n📱 WiFi password = Nuqta signup\n🎁 Loyalty for daily visitors\n📊 Track remote worker revenue\n\nCafés on Nuqta see:\n📈 2.5x higher average ticket\n👥 30% of revenue from remote workers\n🔄 Daily regulars (not one-time visitors)\n\nWant to become a work-from-café destination?',
    landingPageHeadline: 'Attract Remote Workers. 3x Higher Average Ticket.',
    targetAudience: ['Café owners', 'Good WiFi', 'Spacious seating'],
    bestFor: ['Specialty coffee', 'Quiet cafés', 'Large cafés'],
    urgencyTrigger: 'See your remote worker revenue potential',
    socialProof: 'Cafés see 2.5x higher average ticket from remote workers',
    color: 'blue',
    icon: Monitor
  },
  {
    id: 'cafe-delivery-direct',
    name: 'Café: Build Direct Delivery Orders',
    hook: 'Talabat Takes 30%. Direct Orders Keep 100%.',
    subHook: 'Build Your Own Delivery Customer Base.',
    targetPain: 'High delivery commissions eating profits',
    channels: ['Meta Ads', 'Instagram', 'WhatsApp', 'In-store'],
    adCopy: {
      headline: '☕ Every Delivery App Order Costs You AED 15-20',
      body: 'Build direct delivery relationships. Customers order through your Nuqta profile, you keep full margins. Cafés see 35% shift from aggregator to direct orders.',
      cta: 'Build Direct Delivery →'
    },
    emailSubject: '[Café Owners] Stop losing 30% on every delivery',
    smsText: 'Hi [Name], café owner? Delivery apps take 30%. Build direct orders. Keep full margins: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nDelivery economics for cafés:\n\n📦 Talabat order: AED 50\n💸 Commission: 30% = AED 15\n📉 Your profit: AED 35\n\nDirect order economics:\n\n📱 Order through your profile\n💰 Your profit: AED 50\n📈 43% more profit per order\n\nNuqta Direct Delivery:\n\n📱 Customers order via your Nuqta profile\n🎁 Reward direct orders with bonus coins\n📦 Same delivery, zero commission\n📊 Track direct vs aggregator revenue\n\nCafés on Nuqta see:\n📈 35% shift to direct orders\n💰 AED 2,000+ saved monthly\n👥 Build YOUR customer database\n\nWant to build direct delivery?',
    landingPageHeadline: 'Build Direct Delivery. Keep 100% of Your Margins.',
    targetAudience: ['Café owners', 'Heavy delivery', 'Margin-conscious'],
    bestFor: ['All cafés with delivery', 'Cloud kitchens'],
    urgencyTrigger: 'Calculate your aggregator commission losses',
    socialProof: 'Cafés see 35% shift from aggregator to direct orders',
    color: 'orange',
    icon: ShoppingCart
  },
  {
    id: 'cafe-loyalty-program',
    name: 'Café: Digital Loyalty That Works',
    hook: 'Paper Punch Cards Are Dead. Go Digital.',
    subHook: 'Modern Loyalty That Customers Actually Use.',
    targetPain: 'Paper loyalty cards get lost, no data',
    channels: ['In-store', 'Instagram', 'WhatsApp', 'Meta Ads'],
    adCopy: {
      headline: '📱 Your Paper Loyalty Cards Are in the Trash',
      body: '80% of paper punch cards are lost or forgotten. Digital loyalty lives in their phone. Plus you get data on every customer. See 55% higher loyalty program participation.',
      cta: 'Go Digital →'
    },
    emailSubject: '[Café Owners] Paper loyalty cards are failing you',
    smsText: 'Hi [Name], café owner? Paper punch cards get lost. Digital loyalty = 55% higher participation: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nPaper loyalty reality:\n\n📝 You print cards\n💸 Customers lose them\n🗑️ Cards end up in trash\n❌ No customer data\n📉 Low redemption rates\n\nDigital loyalty with Nuqta:\n\n📱 Lives in their phone (never lost)\n🔔 Push notification reminders\n📊 Full customer data\n🎁 Flexible rewards (not just "10th coffee free")\n💰 Track exact ROI\n\nNuqta Digital Loyalty:\n\n☕ Coins on every purchase\n🎁 Redeem for any item\n📊 See customer visit patterns\n💰 Track loyalty program ROI\n\nCafés on Nuqta see:\n📈 55% higher participation\n🔄 40% more repeat visits\n📊 Full customer insights\n\nReady to go digital?',
    landingPageHeadline: 'Digital Loyalty That Lives in Their Phone. Never Lost.',
    targetAudience: ['Café owners', 'Using paper cards', 'No customer data'],
    bestFor: ['All cafés', 'Independent cafés'],
    urgencyTrigger: 'See your loyalty program potential',
    socialProof: 'Digital loyalty sees 55% higher participation than paper',
    color: 'green',
    icon: Gift
  },

  // =====================================================
  // ADDITIONAL SALON CAMPAIGNS
  // =====================================================
  {
    id: 'salon-upsell',
    name: 'Salon: Increase Average Service Value',
    hook: 'They Came for a Haircut. Sell Them a Treatment.',
    subHook: 'Smart Upselling That Clients Actually Want.',
    targetPain: 'Low average ticket, missed upsell opportunities',
    channels: ['In-salon', 'WhatsApp', 'Email', 'Instagram'],
    adCopy: {
      headline: '💇‍♀️ Average Ticket: AED 150. It Could Be AED 250.',
      body: 'Clients book basic services but would pay more for add-ons. Smart recommendations increase average ticket by 40%. "Add a treatment, get bonus coins" works.',
      cta: 'Increase Average Ticket →'
    },
    emailSubject: '[Salon Owners] Your average ticket should be 40% higher',
    smsText: 'Hi [Name], salon owner? Increase average ticket by 40% with smart upselling. See how: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nSalon ticket reality:\n\n✂️ Client books: Haircut (AED 120)\n🚶 Leaves with: Just a haircut\n❌ Missed: Treatment, styling, products\n\nThe opportunity:\n\n💰 Average ticket: AED 150\n🎯 Target ticket: AED 210\n📈 40% increase possible\n\nNuqta Upsell Strategy:\n\n🎁 "Add treatment, get 2x coins"\n📱 Pre-visit recommendation messages\n💇‍♀️ Personalized add-on suggestions\n📊 Track upsell conversion rates\n\nSalons on Nuqta see:\n📈 40% higher average ticket\n💰 AED 3,000+ extra monthly revenue\n👥 Happier clients (better results!)\n\nWant to increase your average ticket?',
    landingPageHeadline: 'Increase Average Service Value by 40%. Smart Upselling.',
    targetAudience: ['Salon owners', 'Low average ticket', 'Missed upsells'],
    bestFor: ['Hair salons', 'Beauty salons', 'Spas'],
    urgencyTrigger: 'Calculate your upsell revenue potential',
    socialProof: 'Salons see 40% higher average ticket with smart upselling',
    color: 'amber',
    icon: TrendingUp
  },
  {
    id: 'salon-product-sales',
    name: 'Salon: Sell More Retail Products',
    hook: 'Clients Love Your Products. Make Them Buy.',
    subHook: 'Turn Service Clients Into Product Buyers.',
    targetPain: 'Low retail product sales despite recommendations',
    channels: ['In-salon', 'WhatsApp', 'Instagram', 'Email'],
    adCopy: {
      headline: '🧴 Your Clients Use Drugstore Products. They Could Use Yours.',
      body: 'Stylists recommend products but clients don\'t buy. Reward product purchases with coins. See 50% increase in retail sales.',
      cta: 'Boost Product Sales →'
    },
    emailSubject: '[Salon Owners] Your retail products are sitting on shelves',
    smsText: 'Hi [Name], salon owner? Increase retail product sales by 50%. Reward-based selling: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nRetail reality in salons:\n\n💇‍♀️ Stylist uses premium products\n✨ Client\'s hair looks amazing\n🗣️ "You should buy this shampoo"\n🚶 Client leaves without buying\n🛒 Buys drugstore products instead\n\nThe missed revenue:\n\n🧴 Average product: AED 80-150\n📈 High margin (40-60%)\n💰 Recurring purchase potential\n\nNuqta Product Sales Strategy:\n\n🎁 "Buy recommended products, get bonus coins"\n📱 Post-visit product recommendations\n🔄 Auto-reminders when product runs out\n📊 Track product sales per stylist\n\nSalons on Nuqta see:\n📈 50% increase in retail sales\n💰 Higher profit margins\n👥 Clients use better products (better results!)\n\nWant to boost your retail sales?',
    landingPageHeadline: 'Increase Retail Product Sales by 50%. Reward-Based.',
    targetAudience: ['Salon owners', 'Low retail sales', 'Product inventory'],
    bestFor: ['Hair salons', 'Beauty salons', 'Spas'],
    urgencyTrigger: 'Calculate your retail revenue potential',
    socialProof: 'Salons see 50% increase in retail sales with product rewards',
    color: 'purple',
    icon: ShoppingCart
  },
  {
    id: 'salon-birthday',
    name: 'Salon: Birthday Marketing Automation',
    hook: 'Every Client Has a Birthday. Capture Them All.',
    subHook: 'Automated Birthday Offers That Drive Visits.',
    targetPain: 'Missing birthday marketing opportunities',
    channels: ['WhatsApp', 'Email', 'SMS', 'Instagram'],
    adCopy: {
      headline: '🎂 Your Client\'s Birthday = Your Revenue Opportunity',
      body: 'Birthday offers have 3x higher redemption than regular promotions. Automated birthday campaigns bring clients in for their special day. See 70% birthday offer redemption.',
      cta: 'Launch Birthday Campaigns →'
    },
    emailSubject: '[Salon Owners] Birthdays = 3x higher conversion',
    smsText: 'Hi [Name], salon owner? Birthday offers convert 3x better. Automate them. 70% redemption: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nBirthday opportunity:\n\n🎂 Every client has a birthday\n🎁 They want to look good\n💰 They\'re willing to spend more\n👥 They often bring friends\n\nWhy it works:\n\n📈 Birthday offers: 3x higher conversion\n💰 Birthday visits: 40% higher ticket\n👯 Often bring friends (new clients!)\n\nNuqta Birthday Automation:\n\n📅 Collect birthdays at signup\n📱 Auto-message 7 days before\n🎁 "Birthday special: Double coins!"\n📊 Track birthday campaign ROI\n\nSalons on Nuqta see:\n📈 70% birthday offer redemption\n💰 40% higher birthday visit ticket\n👥 25% bring friends (new clients!)\n\nReady to launch birthday campaigns?',
    landingPageHeadline: 'Automate Birthday Marketing. 3x Higher Conversion.',
    targetAudience: ['Salon owners', 'No birthday campaigns', 'Want automation'],
    bestFor: ['All salons', 'Beauty salons', 'Spas'],
    urgencyTrigger: 'See how many birthdays you\'re missing',
    socialProof: 'Birthday campaigns see 70% redemption rate',
    color: 'pink',
    icon: Gift
  },

  // =====================================================
  // ADDITIONAL RESTAURANT CAMPAIGNS
  // =====================================================
  {
    id: 'restaurant-lunch-rush',
    name: 'Restaurant: Capture Nearby Office Workers',
    hook: 'Offices Near You = Daily Lunch Customers',
    subHook: 'Target Workers Within 1km for Lunch.',
    targetPain: 'Not capturing nearby office lunch crowd',
    channels: ['Google Ads', 'Meta Ads', 'LinkedIn', 'WhatsApp'],
    adCopy: {
      headline: '🏢 There Are 500 Office Workers Near You. Are They Eating With You?',
      body: 'Office workers need lunch every day. Target them with location-based campaigns. Restaurants see 45% increase in weekday lunch covers.',
      cta: 'Capture Lunch Crowd →'
    },
    emailSubject: '[Restaurant Owners] Nearby offices = daily lunch customers',
    smsText: 'Hi [Name], restaurant owner? Capture nearby office workers. 45% more lunch covers: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nLunch opportunity:\n\n🏢 Offices near your restaurant\n👥 Employees need lunch daily\n🔁 Potential for 5x weekly visits\n💰 Predictable daily revenue\n\nThe problem:\n\n❓ They don\'t know you exist\n❓ They default to the same 3 places\n❓ You\'re not in their consideration\n\nNuqta Lunch Rush Strategy:\n\n🎯 Geo-target offices within 1km\n📱 "Skip the line" pre-order\n☕ "Lunch combo + coffee" deals\n🎁 "Weekly regular" bonus coins\n📊 Track lunch vs dinner revenue\n\nRestaurants on Nuqta see:\n📈 45% increase in lunch covers\n🔄 30% become weekly regulars\n💰 Smoother daily revenue\n\nWant to capture your lunch crowd?',
    landingPageHeadline: 'Capture Office Workers for Lunch. Daily Regular Revenue.',
    targetAudience: ['Restaurant owners', 'Near offices', 'Low lunch traffic'],
    bestFor: ['Fast casual', 'Casual dining', 'Cafés with lunch'],
    urgencyTrigger: 'See how many offices are near you',
    socialProof: 'Restaurants see 45% increase in lunch covers with targeting',
    color: 'blue',
    icon: Building2
  },
  {
    id: 'restaurant-special-occasions',
    name: 'Restaurant: Capture Special Occasions',
    hook: 'Birthdays, Anniversaries, Celebrations - Be Their Choice',
    subHook: 'Special Occasions = High-Ticket Reservations.',
    targetPain: 'Missing out on celebration bookings',
    channels: ['Instagram', 'Meta Ads', 'Google Ads', 'WhatsApp'],
    adCopy: {
      headline: '🎉 Every Day, Someone Is Celebrating. Are They Celebrating With You?',
      body: 'Celebration bookings have 2x higher average ticket. Position your restaurant as the celebration destination. See 50% increase in special occasion bookings.',
      cta: 'Capture Celebrations →'
    },
    emailSubject: '[Restaurant Owners] Celebration bookings = 2x ticket',
    smsText: 'Hi [Name], restaurant owner? Capture celebration bookings. 2x higher average ticket: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nCelebration opportunity:\n\n🎂 Birthdays: Every day\n💕 Anniversaries: Every day\n🎓 Graduations, promotions, proposals\n👥 Groups of 4-8 people\n💰 2x higher average ticket\n\nWhy celebrations matter:\n\n🍾 Higher spend (wine, desserts)\n👥 Larger groups\n📸 Social media posts (free marketing!)\n🔄 Become their go-to celebration spot\n\nNuqta Celebration Strategy:\n\n🎂 "Birthday special" campaigns\n📅 Track customer anniversaries\n🎁 "Celebration bonus" rewards\n📸 Instagram-worthy presentation\n📊 Track celebration booking revenue\n\nRestaurants on Nuqta see:\n📈 50% increase in celebration bookings\n💰 2x higher average ticket\n📱 More social media mentions\n\nWant to be the celebration destination?',
    landingPageHeadline: 'Capture Special Occasion Bookings. 2x Higher Ticket.',
    targetAudience: ['Restaurant owners', 'Good ambiance', 'Want higher ticket'],
    bestFor: ['Fine dining', 'Casual dining', 'Romantic restaurants'],
    urgencyTrigger: 'See your celebration booking potential',
    socialProof: 'Restaurants see 50% increase in celebration bookings',
    color: 'pink',
    icon: Sparkles
  },
  {
    id: 'restaurant-catering',
    name: 'Restaurant: Build Catering Business',
    hook: 'Your Kitchen Can Handle More. Add Catering.',
    subHook: 'Corporate Catering = High-Value Recurring Orders.',
    targetPain: 'Kitchen underutilized, missing catering revenue',
    channels: ['LinkedIn', 'Meta Ads', 'Email', 'WhatsApp'],
    adCopy: {
      headline: '🍱 Your Kitchen Has Capacity. Corporate Catering Fills It.',
      body: 'Corporate catering orders average AED 500-2,000. Target nearby offices for meetings, events, team lunches. See new revenue stream from catering.',
      cta: 'Build Catering Revenue →'
    },
    emailSubject: '[Restaurant Owners] Corporate catering = AED 500-2,000 orders',
    smsText: 'Hi [Name], restaurant owner? Add corporate catering. AED 500-2K orders. Build new revenue stream: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nCatering opportunity:\n\n🏢 Offices need catering\n📅 Meetings, events, team lunches\n💰 Average order: AED 500-2,000\n🔄 Recurring (monthly meetings!)\n\nWhy catering works:\n\n📈 High-value orders\n🕐 Often during slow kitchen times\n🔁 Recurring clients\n💼 Corporate budgets (less price-sensitive)\n\nNuqta Catering Strategy:\n\n🎯 Target nearby companies on LinkedIn\n📱 Easy group ordering\n🎁 "Corporate catering rewards"\n📊 Track catering vs dine-in revenue\n💼 Build corporate client database\n\nRestaurants on Nuqta see:\n📈 New revenue stream (AED 5-15K/month)\n🔄 Recurring corporate clients\n💰 Higher margins on bulk orders\n\nWant to build catering revenue?',
    landingPageHeadline: 'Build Corporate Catering Business. High-Value Recurring Orders.',
    targetAudience: ['Restaurant owners', 'Kitchen capacity', 'Near offices'],
    bestFor: ['All restaurants', 'Cloud kitchens', 'Casual dining'],
    urgencyTrigger: 'See your catering revenue potential',
    socialProof: 'Restaurants add AED 5-15K monthly from catering',
    color: 'indigo',
    icon: Building2
  },

  // =====================================================
  // ADDITIONAL GYM CAMPAIGNS
  // =====================================================
  {
    id: 'gym-personal-training',
    name: 'Gym: Sell More Personal Training',
    hook: 'Members Want Results. PT Delivers Results.',
    subHook: 'Convert Regular Members Into PT Clients.',
    targetPain: 'Low personal training uptake',
    channels: ['In-gym', 'WhatsApp', 'Email', 'Instagram'],
    adCopy: {
      headline: '💪 Your Members Want Results Faster. Sell Them PT.',
      body: 'Personal training has highest margins but low uptake. Incentivize trial sessions, convert to packages. See 40% increase in PT sales.',
      cta: 'Boost PT Sales →'
    },
    emailSubject: '[Gym Owners] PT has highest margins. Sell more of it.',
    smsText: 'Hi [Name], gym owner? Increase personal training sales by 40%. See how: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nPersonal training opportunity:\n\n💪 Highest margin service\n📈 Members get better results\n🔄 Higher retention (PT clients stay longer)\n💰 Significant revenue boost\n\nThe problem:\n\n❌ Members don\'t try PT\n❌ Price objections\n❌ "I can do it myself"\n\nNuqta PT Conversion Strategy:\n\n🎁 "First PT session = bonus coins"\n📊 Track member progress, suggest PT\n💪 "Plateau buster" PT promotions\n📱 Trainer success story content\n\nGyms on Nuqta see:\n📈 40% increase in PT sales\n💰 AED 5,000+ extra monthly revenue\n🔄 PT clients retain 60% longer\n\nWant to boost PT sales?',
    landingPageHeadline: 'Increase Personal Training Sales by 40%.',
    targetAudience: ['Gym owners', 'Low PT uptake', 'Trainer capacity'],
    bestFor: ['Gyms', 'Boutique fitness', 'CrossFit boxes'],
    urgencyTrigger: 'Calculate your PT revenue potential',
    socialProof: 'Gyms see 40% increase in PT sales with incentive programs',
    color: 'green',
    icon: Dumbbell
  },
  {
    id: 'gym-class-attendance',
    name: 'Gym: Fill Your Classes',
    hook: 'Half-Empty Classes = Wasted Instructor Pay',
    subHook: 'Smart Incentives That Fill Every Class.',
    targetPain: 'Low class attendance, wasted instructor costs',
    channels: ['WhatsApp', 'Email', 'In-gym', 'Instagram'],
    adCopy: {
      headline: '🏋️ Your 6pm Yoga Has 20 Spots. Only 8 Show Up.',
      body: 'You\'re paying the instructor anyway. Fill those spots. Rewards for class attendance, especially for off-peak times. See 50% increase in class attendance.',
      cta: 'Fill Your Classes →'
    },
    emailSubject: '[Gym Owners] Half-empty classes = wasted money',
    smsText: 'Hi [Name], gym owner? Fill your classes. 50% higher attendance with incentives: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nClass attendance reality:\n\n🧘 Instructor cost: AED 200/class\n👥 Capacity: 20 people\n😰 Average attendance: 8 people\n💸 12 empty spots = wasted money\n\nThe problem:\n\n❌ Members don\'t prioritize classes\n❌ No consequence for no-show\n❌ Off-peak classes especially empty\n\nNuqta Class Filling Strategy:\n\n🎁 "Attend 4 classes this week = bonus"\n📅 Book ahead, get coins\n⏰ "2x coins for 6am classes"\n📊 Track class attendance patterns\n\nGyms on Nuqta see:\n📈 50% increase in class attendance\n💰 Better ROI on instructor costs\n👥 Members more engaged\n\nWant to fill your classes?',
    landingPageHeadline: 'Fill Every Class. Better ROI on Instructors.',
    targetAudience: ['Gym owners', 'Low class attendance', 'Group classes'],
    bestFor: ['Gyms with classes', 'Yoga studios', 'CrossFit boxes'],
    urgencyTrigger: 'Calculate your wasted class capacity',
    socialProof: 'Gyms see 50% increase in class attendance with rewards',
    color: 'purple',
    icon: Users
  },
  {
    id: 'gym-corporate',
    name: 'Gym: Win Corporate Memberships',
    hook: 'One HR Manager = 50 New Members',
    subHook: 'Corporate Wellness Programs = Bulk Signups.',
    targetPain: 'Missing corporate membership opportunities',
    channels: ['LinkedIn', 'Email', 'Meta Ads', 'Direct Sales'],
    adCopy: {
      headline: '🏢 That Office Building Has 200 Employees. Win Their Account.',
      body: 'Corporate wellness budgets are growing. Position your gym for company memberships. One contract = 20-50 members. Build B2B revenue stream.',
      cta: 'Win Corporate Accounts →'
    },
    emailSubject: '[Gym Owners] Corporate memberships = bulk signups',
    smsText: 'Hi [Name], gym owner? Win corporate accounts. One contract = 20-50 members: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nCorporate opportunity:\n\n🏢 Companies have wellness budgets\n👥 20-50 members per contract\n💰 Predictable recurring revenue\n🔄 Annual contracts (not monthly)\n\nWhy corporate works:\n\n📈 Bulk signups (efficiency)\n💸 Company pays (less churn)\n🏆 Employees motivate each other\n📊 Utilization often lower (more profit)\n\nNuqta Corporate Strategy:\n\n🎯 Target HR managers on LinkedIn\n📊 Corporate wellness reports\n🏆 Company leaderboards\n💼 Easy employee onboarding\n📱 Corporate group challenges\n\nGyms on Nuqta see:\n📈 20-50 members per corporate deal\n💰 Annual contract security\n🔄 Lower churn (company-subsidized)\n\nWant to win corporate accounts?',
    landingPageHeadline: 'Win Corporate Wellness Contracts. Bulk Member Signups.',
    targetAudience: ['Gym owners', 'Near offices', 'Want B2B revenue'],
    bestFor: ['Gyms', 'Fitness studios', 'Near business districts'],
    urgencyTrigger: 'See nearby companies with wellness budgets',
    socialProof: 'Corporate contracts bring 20-50 members each',
    color: 'blue',
    icon: Building2
  },

  // =====================================================
  // ADDITIONAL RETAIL CAMPAIGNS
  // =====================================================
  {
    id: 'retail-vip-program',
    name: 'Retail: Build VIP Customer Program',
    hook: '20% of Customers Drive 80% of Revenue',
    subHook: 'Identify, Reward, and Retain Your Best Customers.',
    targetPain: 'Not recognizing or rewarding best customers',
    channels: ['WhatsApp', 'Email', 'In-store', 'Instagram'],
    adCopy: {
      headline: '👑 Your Top 20% of Customers Are Worth 80% of Revenue',
      body: 'VIP customers spend more and visit more often. Identify and reward them. VIP programs increase top customer spend by 35%.',
      cta: 'Build VIP Program →'
    },
    emailSubject: '[Retail] Your VIP customers deserve VIP treatment',
    smsText: 'Hi [Name], retail owner? Build a VIP program. Top customers spend 35% more when recognized: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nVIP customer reality:\n\n👥 You have 1,000 customers\n💰 200 of them (20%) drive 80% of revenue\n❓ Do you know who they are?\n❓ Are you treating them special?\n\nThe opportunity:\n\n👑 VIPs want recognition\n💰 They\'ll spend more if rewarded\n🔄 They\'ll stay loyal longer\n📣 They\'ll refer friends\n\nNuqta VIP Program:\n\n📊 Auto-identify top spenders\n👑 VIP tier with special rewards\n🎁 Early access, exclusive offers\n📱 VIP-only communications\n💰 Track VIP customer value\n\nRetail stores on Nuqta see:\n📈 35% increase in VIP spending\n🔄 50% lower VIP churn\n📣 VIPs refer 3x more\n\nWant to build a VIP program?',
    landingPageHeadline: 'Build a VIP Program. Reward Your Best Customers.',
    targetAudience: ['Retail owners', 'Have repeat customers', 'No VIP program'],
    bestFor: ['Fashion boutiques', 'Jewelry', 'Premium retail'],
    urgencyTrigger: 'Identify your VIP customers today',
    socialProof: 'VIP programs increase top customer spend by 35%',
    color: 'amber',
    icon: Crown
  },
  {
    id: 'retail-new-arrivals',
    name: 'Retail: New Arrivals Marketing',
    hook: 'New Stock Sitting? Get It Moving Fast.',
    subHook: 'Alert Your Best Customers When New Items Arrive.',
    targetPain: 'New inventory not moving fast enough',
    channels: ['WhatsApp', 'Instagram', 'Email', 'SMS'],
    adCopy: {
      headline: '📦 New Arrivals Should Sell Fast. Yours Are Sitting.',
      body: 'Your loyal customers want to know when new items arrive. Automated new arrival alerts drive immediate traffic. See 40% of new stock sold in first week.',
      cta: 'Launch New Arrival Alerts →'
    },
    emailSubject: '[Retail] New arrivals should sell in the first week',
    smsText: 'Hi [Name], retail owner? New arrivals sitting? Alert your best customers. 40% sell in first week: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nNew arrivals challenge:\n\n📦 New stock arrives\n⏰ Takes 3-4 weeks to sell\n💸 Capital tied up\n📉 Some items never sell\n\nThe solution:\n\n📱 Alert loyal customers immediately\n🏃 Create urgency ("just arrived!")\n👀 First look for VIPs\n💰 Faster inventory turnover\n\nNuqta New Arrivals Strategy:\n\n📦 "New arrival" WhatsApp blast\n👑 VIPs get 24-hour early access\n🎁 "First week bonus coins"\n📊 Track new arrival sell-through\n\nRetail stores on Nuqta see:\n📈 40% of new stock sold in first week\n💰 Faster inventory turnover\n👥 Loyal customers feel "in the know"\n\nWant to move new arrivals faster?',
    landingPageHeadline: 'Move New Arrivals Fast. Alert Your Best Customers.',
    targetAudience: ['Retail owners', 'Slow inventory turnover', 'New stock sitting'],
    bestFor: ['Fashion boutiques', 'Home decor', 'Specialty retail'],
    urgencyTrigger: 'See how fast your new arrivals could sell',
    socialProof: '40% of new arrivals sell in first week with alerts',
    color: 'purple',
    icon: Sparkles
  },
  {
    id: 'retail-win-back',
    name: 'Retail: Win Back Lost Customers',
    hook: 'They Bought Once. Then Disappeared.',
    subHook: 'Automated Campaigns to Bring Them Back.',
    targetPain: 'One-time customers never return',
    channels: ['WhatsApp', 'Email', 'Meta Ads', 'SMS'],
    adCopy: {
      headline: '👋 Your Past Customers Haven\'t Visited in 6 Months',
      body: 'Customers who haven\'t returned aren\'t lost forever. Targeted win-back campaigns with the right incentive bring 25% back.',
      cta: 'Win Back Lost Customers →'
    },
    emailSubject: '[Retail] Bring back customers who disappeared',
    smsText: 'Hi [Name], retail owner? Win back customers who haven\'t visited in 6 months. 25% come back: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nLost customer reality:\n\n👤 Customer bought once\n⏰ 6 months pass, no return\n❓ Did they forget you?\n❓ Did they find someone else?\n❓ Are they lost forever?\n\nThe truth:\n\n✅ Most just forgot about you\n✅ Life got busy\n✅ The right message brings them back\n\nNuqta Win-Back Strategy:\n\n📊 Identify customers who haven\'t visited in 90+ days\n📱 "We miss you" message\n🎁 Special win-back offer\n📈 Track win-back rate\n\nRetail stores on Nuqta see:\n📈 25% win-back rate\n💰 Won-back customers spend 20% more\n🔄 Many become regular again\n\nWant to win back lost customers?',
    landingPageHeadline: 'Win Back Lost Customers. 25% Will Return.',
    targetAudience: ['Retail owners', 'Lost customers', 'Want reactivation'],
    bestFor: ['All retail', 'Fashion boutiques', 'Home decor'],
    urgencyTrigger: 'See how many customers you can win back',
    socialProof: '25% of lost customers return with win-back campaigns',
    color: 'orange',
    icon: RefreshCw
  },

  // =====================================================
  // ADDITIONAL CLINIC CAMPAIGNS
  // =====================================================
  {
    id: 'clinic-preventive',
    name: 'Clinic: Promote Preventive Care',
    hook: 'Patients Wait Until It Hurts. Bring Them Earlier.',
    subHook: 'Regular Check-Ups = Predictable Revenue.',
    targetPain: 'Patients only come when problems are severe',
    channels: ['WhatsApp', 'Email', 'SMS', 'Meta Ads'],
    adCopy: {
      headline: '🏥 Your Patients Visit When It\'s Too Late. Get Them Earlier.',
      body: 'Preventive care visits are easier, more profitable, and build long-term relationships. Remind patients about regular check-ups. See 45% increase in preventive visits.',
      cta: 'Promote Preventive Care →'
    },
    emailSubject: '[Clinics] Preventive care = predictable revenue',
    smsText: 'Hi [Name], clinic owner? Increase preventive care visits by 45%. Automated reminders: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nPatient behavior reality:\n\n😰 They wait until it hurts\n🏥 Come in with severe problems\n💸 Emergency visits (stressful for all)\n❌ Miss regular check-ups\n\nPreventive care benefits:\n\n✅ Predictable scheduling\n✅ Less stressful visits\n✅ Build long-term relationships\n✅ Catch issues early\n💰 Consistent revenue\n\nNuqta Preventive Care Strategy:\n\n📅 Track last visit dates\n📱 "Time for your check-up" reminders\n🎁 "Preventive care bonus coins"\n📊 Track preventive vs reactive visits\n\nClinics on Nuqta see:\n📈 45% increase in preventive visits\n💰 More predictable revenue\n👥 Healthier, happier patients\n\nWant to promote preventive care?',
    landingPageHeadline: 'Increase Preventive Care Visits by 45%.',
    targetAudience: ['Clinic owners', 'Low check-up rates', 'Want predictable revenue'],
    bestFor: ['Dental clinics', 'General practice', 'Wellness clinics'],
    urgencyTrigger: 'See your preventive care opportunity',
    socialProof: 'Clinics see 45% increase in preventive visits with reminders',
    color: 'green',
    icon: Heart
  },
  {
    id: 'clinic-treatment-completion',
    name: 'Clinic: Increase Treatment Completion',
    hook: 'Patients Start Treatment. Half Don\'t Finish.',
    subHook: 'Ensure Patients Complete Their Full Treatment Plan.',
    targetPain: 'Patients abandon treatment mid-way',
    channels: ['WhatsApp', 'SMS', 'Email', 'Phone'],
    adCopy: {
      headline: '🏥 Half Your Patients Don\'t Complete Their Treatment',
      body: 'Patients start strong but drop off after 2-3 visits. Automated follow-ups and rewards ensure they complete their full treatment plan. See 60% higher completion rates.',
      cta: 'Improve Treatment Completion →'
    },
    emailSubject: '[Clinics] Patients abandoning treatment? Fix it.',
    smsText: 'Hi [Name], clinic owner? Patients not completing treatment? 60% higher completion with follow-ups: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nTreatment completion problem:\n\n👤 Patient starts 6-visit treatment\n✅ Visit 1, 2: Shows up\n😰 Visit 3, 4: Starts skipping\n❌ Visit 5, 6: Never completes\n💸 Lost revenue + worse outcomes\n\nWhy they drop off:\n\n❌ Life gets busy\n❌ "Feeling better" after 2 visits\n❌ No reminder to continue\n\nNuqta Treatment Completion:\n\n📅 Track treatment plans\n📱 Auto-reminders for next visit\n🎁 "Complete your treatment" bonus\n📊 Track completion rates\n\nClinics on Nuqta see:\n📈 60% higher treatment completion\n💰 More revenue per patient\n👥 Better patient outcomes\n\nWant to improve treatment completion?',
    landingPageHeadline: 'Increase Treatment Completion by 60%.',
    targetAudience: ['Clinic owners', 'Multi-visit treatments', 'Low completion'],
    bestFor: ['Dental clinics', 'Physiotherapy', 'Dermatology', 'Specialist clinics'],
    urgencyTrigger: 'Calculate your treatment completion rate',
    socialProof: 'Clinics see 60% higher treatment completion with follow-ups',
    color: 'cyan',
    icon: CheckCircle2
  },
  {
    id: 'clinic-seasonal',
    name: 'Clinic: Capture Seasonal Demand',
    hook: 'Flu Season, Summer Check-Ups, Back-to-School',
    subHook: 'Seasonal Campaigns That Drive Appointments.',
    targetPain: 'Not capitalizing on seasonal health needs',
    channels: ['Meta Ads', 'WhatsApp', 'Email', 'Instagram'],
    adCopy: {
      headline: '🏥 Seasonal Health Needs = Seasonal Revenue Opportunities',
      body: 'Flu shots in winter, allergy treatments in spring, back-to-school check-ups. Time campaigns to seasonal demand. See 40% increase in seasonal appointments.',
      cta: 'Plan Seasonal Campaigns →'
    },
    emailSubject: '[Clinics] Seasonal campaigns = 40% more appointments',
    smsText: 'Hi [Name], clinic owner? Capture seasonal demand. 40% more appointments with seasonal campaigns: [link]',
    whatsappText: 'Hi [Name]! 👋\n\nSeasonal opportunities:\n\n❄️ Winter: Flu shots, immunity check-ups\n🌸 Spring: Allergy treatments\n☀️ Summer: Skin protection, hydration\n🎒 Fall: Back-to-school check-ups\n🌙 Ramadan: Pre/post health screens\n\nWhy seasonal works:\n\n📈 Patients already thinking about it\n🎯 Timely = higher conversion\n💰 Bulk bookings (families)\n📊 Predictable revenue cycles\n\nNuqta Seasonal Strategy:\n\n📅 Pre-planned seasonal campaigns\n📱 "Flu season is here" reminders\n🎁 "Family health check package"\n📊 Track seasonal vs regular revenue\n\nClinics on Nuqta see:\n📈 40% increase in seasonal appointments\n👨‍👩‍👧 Family bookings increase\n💰 Predictable seasonal revenue\n\nReady to plan seasonal campaigns?',
    landingPageHeadline: 'Capture Seasonal Health Demand. 40% More Appointments.',
    targetAudience: ['Clinic owners', 'General practice', 'Family medicine'],
    bestFor: ['General practice', 'Pediatric clinics', 'Family medicine'],
    urgencyTrigger: 'Plan for the next health season',
    socialProof: 'Seasonal campaigns drive 40% more appointments',
    color: 'amber',
    icon: Calendar
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
    { id: 'seasonal', name: 'Seasonal / Event', count: 3 },
    { id: 'performance', name: '🚀 Performance-Based', count: 2 },
    { id: 'roi-tracking', name: '📊 ROI & Tracking', count: 4 },
    { id: 'cafe', name: '☕ Café', count: 7 },
    { id: 'salon', name: '💇‍♀️ Salon', count: 7 },
    { id: 'restaurant', name: '🍽️ Restaurant', count: 7 },
    { id: 'gym', name: '💪 Gym/Fitness', count: 7 },
    { id: 'retail', name: '🛍️ Retail', count: 7 },
    { id: 'clinic', name: '🏥 Clinic', count: 7 },
  ];

  const filterCampaigns = () => {
    let filtered = campaigns;

    if (activeFilter !== 'all') {
      const filterMap: Record<string, string[]> = {
        'risk-free': ['free-trial', 'guarantee'],
        'pain-point': ['retention', 'roi-burn', 'competition', 'slow-days'],
        'value': ['free-pos', 'marketing-team', 'influencer', 'content-creation'],
        'financial': ['ad-credit', 'no-discount'],
        'seasonal': ['ramadan', 'summer', 'new-year'],
        'performance': ['pay-later-ads', 'content-roi'],
        'roi-tracking': ['social-roi', 'influencer-roi', 'trackable-ads', 'all-in-one-value'],
        'cafe': ['cafe-complete', 'cafe-morning-rush', 'cafe-instagram-worthy', 'cafe-weekday-slow'],
        'salon': ['salon-complete', 'salon-rebooking', 'salon-no-show', 'salon-new-stylists'],
        'restaurant': ['restaurant-direct', 'restaurant-dine-in', 'restaurant-slow-nights', 'restaurant-reviews'],
        'gym': ['gym-retention', 'gym-january', 'gym-dormant', 'gym-referrals'],
        'retail': ['retail-loyalty', 'retail-foot-traffic', 'retail-basket-size', 'retail-seasonal'],
        'clinic': ['clinic-patient', 'clinic-no-shows', 'clinic-reviews', 'clinic-family'],
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
            <div className="text-3xl font-bold text-blue-400">8</div>
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

        {/* PERFORMANCE-BASED CAMPAIGNS - Highlighted */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl p-6 border border-cyan-500/30 mb-8">
          <h2 className="text-xl font-bold text-cyan-400 mb-2">🚀 Performance-Based Campaigns</h2>
          <p className="text-slate-400 text-sm mb-4">Show merchants real ROI and trackable results</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-black/30 rounded-lg p-4 border border-cyan-500/30">
              <div className="flex items-center gap-2 mb-2">
                <CreditCard className="text-cyan-400" size={20} />
                <span className="text-cyan-400 font-bold">Performance-Based Ads</span>
              </div>
              <p className="text-white font-medium">Track every customer. See your real ROI.</p>
              <p className="text-slate-400 text-sm">Average merchant ROI: 4.2x</p>
            </div>
            <div className="bg-black/30 rounded-lg p-4 border border-pink-500/30">
              <div className="flex items-center gap-2 mb-2">
                <Image className="text-pink-400" size={20} />
                <span className="text-pink-400 font-bold">Content That Drives Revenue</span>
              </div>
              <p className="text-white font-medium">Professional content + trackable results</p>
              <p className="text-slate-400 text-sm">89% see increased foot traffic</p>
            </div>
          </div>
        </div>

        {/* ROI & TRACKING CAMPAIGNS - Highlighted */}
        <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-xl p-6 border border-purple-500/30 mb-8">
          <h2 className="text-xl font-bold text-purple-400 mb-2">📊 ROI & Tracking Campaigns</h2>
          <p className="text-slate-400 text-sm mb-4">Show merchants the value of trackable, measurable marketing</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-black/30 rounded-lg p-3 border border-blue-500/30">
              <Instagram className="text-blue-400 mb-2" size={20} />
              <p className="text-blue-400 text-sm font-bold">Social Media ROI</p>
              <p className="text-slate-500 text-xs">3.5x average ROI</p>
            </div>
            <div className="bg-black/30 rounded-lg p-3 border border-purple-500/30">
              <Star className="text-purple-400 mb-2" size={20} />
              <p className="text-purple-400 text-sm font-bold">Influencer Tracking</p>
              <p className="text-slate-500 text-xs">15-25 customers/visit</p>
            </div>
            <div className="bg-black/30 rounded-lg p-3 border border-red-500/30">
              <MousePointer className="text-red-400 mb-2" size={20} />
              <p className="text-red-400 text-sm font-bold">Full-Funnel Ads</p>
              <p className="text-slate-500 text-xs">4x better ROI</p>
            </div>
            <div className="bg-black/30 rounded-lg p-3 border border-indigo-500/30">
              <Building2 className="text-indigo-400 mb-2" size={20} />
              <p className="text-indigo-400 text-sm font-bold">All-in-One Platform</p>
              <p className="text-slate-500 text-xs">40% cost savings</p>
            </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-3">
            <div className="bg-black/20 rounded-lg p-2 text-center">
              <Coffee className="text-amber-400 mx-auto mb-1" size={16} />
              <p className="text-amber-400 text-xs">Café: 35% more repeats</p>
            </div>
            <div className="bg-black/20 rounded-lg p-2 text-center">
              <Scissors className="text-pink-400 mx-auto mb-1" size={16} />
              <p className="text-pink-400 text-xs">Salon: 40% more bookings</p>
            </div>
            <div className="bg-black/20 rounded-lg p-2 text-center">
              <Store className="text-orange-400 mx-auto mb-1" size={16} />
              <p className="text-orange-400 text-xs">Restaurant: 67% repeat</p>
            </div>
            <div className="bg-black/20 rounded-lg p-2 text-center">
              <Dumbbell className="text-green-400 mx-auto mb-1" size={16} />
              <p className="text-green-400 text-xs">Gym: 35% retention</p>
            </div>
            <div className="bg-black/20 rounded-lg p-2 text-center">
              <ShoppingCart className="text-purple-400 mx-auto mb-1" size={16} />
              <p className="text-purple-400 text-xs">Retail: 3.2x LTV</p>
            </div>
            <div className="bg-black/20 rounded-lg p-2 text-center">
              <Pill className="text-cyan-400 mx-auto mb-1" size={16} />
              <p className="text-cyan-400 text-xs">Clinic: 3.5x patient LTV</p>
            </div>
          </div>
        </div>

        {/* KEY VALUE PROPOSITIONS */}
        <div className="bg-gradient-to-r from-[#c9a227]/20 to-amber-500/20 rounded-xl p-6 border border-[#c9a227]/30 mb-8">
          <h2 className="text-xl font-bold text-[#c9a227] mb-4">Key Value Propositions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="text-green-400" size={20} />
                <span className="text-green-400 font-bold">1. Trackable Results</span>
              </div>
              <p className="text-white font-medium">See exactly which marketing brings customers</p>
              <p className="text-slate-400 text-sm">Full-funnel tracking from ad to purchase</p>
            </div>
            <div className="bg-black/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="text-amber-400" size={20} />
                <span className="text-amber-400 font-bold">2. Proven ROI</span>
              </div>
              <p className="text-white font-medium">Average 3-4x ROI across all channels</p>
              <p className="text-slate-400 text-sm">Real numbers from real merchants</p>
            </div>
            <div className="bg-black/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <PieChart className="text-red-400" size={20} />
                <span className="text-red-400 font-bold">3. Customer LTV</span>
              </div>
              <p className="text-white font-medium">Build lifetime value, not one-time visits</p>
              <p className="text-slate-400 text-sm">2-3x increase in customer lifetime value</p>
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
