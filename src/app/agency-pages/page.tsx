'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import GlobalFooter from '@/components/GlobalFooter';
import {
  ArrowLeft,
  Store,
  Coffee,
  Scissors,
  Dumbbell,
  Utensils,
  ShoppingBag,
  Building2,
  Car,
  Plane,
  Heart,
  Sparkles,
  Users,
  TrendingUp,
  DollarSign,
  Target,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Zap,
  Gift,
  Star,
  Clock,
  MessageCircle,
  Mail,
  Phone,
  Globe,
  ChevronDown,
  ChevronRight,
  Copy,
  Check,
  Award,
  Repeat,
  UserPlus,
  PieChart,
  Calendar
} from 'lucide-react';

interface CategoryPage {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  tagline: string;
  heroStat: { value: string; label: string };
  painPoints: string[];
  solutions: {
    title: string;
    description: string;
    impact: string;
  }[];
  features: string[];
  caseStudy: {
    business: string;
    before: string;
    after: string;
    testimonial: string;
  };
  pricing: {
    tier: string;
    price: string;
    features: string[];
  }[];
  cta: string;
}

const categoryPages: CategoryPage[] = [
  {
    id: 'cafe',
    name: 'Cafes & Coffee Shops',
    icon: Coffee,
    color: 'from-amber-500 to-orange-600',
    tagline: 'Turn every coffee into a customer for life',
    heroStat: { value: '67%', label: 'of cafe visits are repeat customers with loyalty programs' },
    painPoints: [
      'High customer churn - they try once and never return',
      'Competing with chains that have their own apps',
      'No way to track who your best customers are',
      'Marketing feels like shouting into the void',
      'Slim margins make every customer count'
    ],
    solutions: [
      {
        title: 'Instant Loyalty Without the App',
        description: 'Customers earn points with a simple scan - no downloads, no friction. Works with any phone.',
        impact: '+40% repeat visits'
      },
      {
        title: 'Know Your Regulars',
        description: 'See who visits most, what they order, and when. Personalize their experience automatically.',
        impact: '+25% average spend'
      },
      {
        title: 'Automated Marketing',
        description: 'Win-back campaigns, birthday rewards, and "we miss you" messages - all on autopilot.',
        impact: '-60% marketing effort'
      },
      {
        title: 'Compete with the Big Chains',
        description: 'Offer a loyalty experience that rivals Starbucks without building your own tech.',
        impact: 'Level playing field'
      }
    ],
    features: [
      'QR code check-in system',
      'Points per AED spent',
      'Custom reward tiers',
      'Customer insights dashboard',
      'Automated email/SMS campaigns',
      'Integration with POS systems',
      'Staff training included',
      'Dedicated account manager'
    ],
    caseStudy: {
      business: 'Brew House Cafe - Dubai Marina',
      before: '150 daily customers, 20% repeat rate, no customer data',
      after: '220 daily customers, 45% repeat rate, 2,000+ profiles',
      testimonial: '"Nuqta transformed our cafe. We finally know our customers and they keep coming back."'
    },
    pricing: [
      { tier: 'Starter', price: 'Free', features: ['Up to 500 customers', 'Basic analytics', 'QR check-in', 'Email support'] },
      { tier: 'Growth', price: 'AED 499/mo', features: ['Unlimited customers', 'Advanced analytics', 'Automated campaigns', 'Priority support'] },
      { tier: 'Premium', price: 'AED 999/mo', features: ['Everything in Growth', 'Custom integrations', 'Dedicated manager', 'White-label option'] }
    ],
    cta: 'Get Your Free QR Kit'
  },
  {
    id: 'salon',
    name: 'Salons & Spas',
    icon: Scissors,
    color: 'from-pink-500 to-rose-600',
    tagline: 'Build a client list that grows itself',
    heroStat: { value: '5x', label: 'cheaper to retain a client than acquire a new one' },
    painPoints: [
      'Clients shop around and never commit',
      'No-shows eating into your revenue',
      'Spending on ads but can\'t track ROI',
      'Manual booking and follow-ups are exhausting',
      'Competing on price is a race to the bottom'
    ],
    solutions: [
      {
        title: 'Loyalty That Brings Them Back',
        description: 'Reward clients for every visit. After 5 cuts, they get a free treatment. Simple, effective.',
        impact: '+50% rebooking rate'
      },
      {
        title: 'Reduce No-Shows',
        description: 'Automated reminders and points that expire if they miss. Psychology that works.',
        impact: '-35% no-shows'
      },
      {
        title: 'Referral Machine',
        description: 'Happy clients refer friends. Both get rewarded. Your best marketing is word of mouth.',
        impact: '+30% new clients from referrals'
      },
      {
        title: 'VIP Treatment, Automated',
        description: 'Birthday rewards, anniversary gifts, top-spender perks - all automatic.',
        impact: '+45% client satisfaction'
      }
    ],
    features: [
      'Appointment-linked points',
      'Service-specific rewards',
      'Referral tracking',
      'Birthday automation',
      'Client preference storage',
      'Staff performance tracking',
      'Multi-location support',
      'Booking integration'
    ],
    caseStudy: {
      business: 'Glow Beauty Lounge - JBR',
      before: '300 monthly clients, high churn, manual follow-ups',
      after: '500 monthly clients, 60% retention, automated engagement',
      testimonial: '"Our regulars feel special and our new clients become regulars. Nuqta just works."'
    },
    pricing: [
      { tier: 'Starter', price: 'Free', features: ['Up to 200 clients', 'Basic rewards', 'QR check-in', 'Email support'] },
      { tier: 'Growth', price: 'AED 599/mo', features: ['Unlimited clients', 'Full automation', 'Referral program', 'Priority support'] },
      { tier: 'Premium', price: 'AED 1,199/mo', features: ['Multi-location', 'Booking integration', 'Custom branding', 'Dedicated manager'] }
    ],
    cta: 'Start Free Trial'
  },
  {
    id: 'gym',
    name: 'Gyms & Fitness Studios',
    icon: Dumbbell,
    color: 'from-green-500 to-emerald-600',
    tagline: 'Turn members into lifelong fitness partners',
    heroStat: { value: '80%', label: 'of gym members quit within 5 months' },
    painPoints: [
      'Member dropout is killing your revenue',
      'January rush disappears by March',
      'No engagement between gym visits',
      'Competing with at-home fitness apps',
      'Members don\'t feel connected to your community'
    ],
    solutions: [
      {
        title: 'Reward Consistency',
        description: 'Points for every visit. Streak bonuses. Make showing up feel rewarding.',
        impact: '+60% visit frequency'
      },
      {
        title: 'Gamify Fitness',
        description: 'Challenges, leaderboards, achievement badges. Turn workouts into wins.',
        impact: '+45% member engagement'
      },
      {
        title: 'Community Building',
        description: 'Connect members through shared rewards. Group challenges. Social features.',
        impact: '+35% retention'
      },
      {
        title: 'Smart Re-engagement',
        description: 'Automatic outreach when members miss workouts. Bring them back before they quit.',
        impact: '-40% member churn'
      }
    ],
    features: [
      'Check-in rewards',
      'Class attendance tracking',
      'Streak & milestone bonuses',
      'Challenge creation tools',
      'Member leaderboards',
      'PT session rewards',
      'Supplement shop integration',
      'Corporate program support'
    ],
    caseStudy: {
      business: 'Iron House Gym - Downtown Dubai',
      before: '500 members, 50% 6-month retention, low engagement',
      after: '750 members, 75% retention, active community',
      testimonial: '"Our members are now competing to earn points. The energy in the gym has transformed."'
    },
    pricing: [
      { tier: 'Starter', price: 'Free', features: ['Up to 100 members', 'Basic check-in', 'Monthly reports', 'Email support'] },
      { tier: 'Growth', price: 'AED 799/mo', features: ['Up to 500 members', 'Challenges & streaks', 'Automated messaging', 'Priority support'] },
      { tier: 'Premium', price: 'AED 1,499/mo', features: ['Unlimited members', 'White-label app', 'API access', 'Dedicated manager'] }
    ],
    cta: 'Transform Your Gym'
  },
  {
    id: 'restaurant',
    name: 'Restaurants & Dining',
    icon: Utensils,
    color: 'from-red-500 to-rose-600',
    tagline: 'Fill tables and keep them coming back',
    heroStat: { value: '70%', label: 'of diners choose restaurants based on loyalty rewards' },
    painPoints: [
      'Empty tables during off-peak hours',
      'Delivery apps taking 30% commissions',
      'No direct relationship with customers',
      'One-time visitors who never return',
      'Reviews on platforms you can\'t control'
    ],
    solutions: [
      {
        title: 'Own Your Customer Relationship',
        description: 'Build direct connections. No middleman. Your customers, your data.',
        impact: '-25% delivery app dependency'
      },
      {
        title: 'Fill Quiet Hours',
        description: 'Double points during slow periods. Turn dead time into revenue.',
        impact: '+40% off-peak revenue'
      },
      {
        title: 'Birthday & Celebration Marketing',
        description: 'Capture birthdays, anniversaries. Automatic invites to celebrate with you.',
        impact: '+50% special occasion bookings'
      },
      {
        title: 'Feedback That Helps',
        description: 'Private feedback before public reviews. Fix issues before they go online.',
        impact: '+0.5 star average rating'
      }
    ],
    features: [
      'Dine-in & takeaway rewards',
      'Table reservation integration',
      'Special occasion tracking',
      'Private feedback system',
      'Menu item rewards',
      'Happy hour automation',
      'Group dining incentives',
      'Catering program support'
    ],
    caseStudy: {
      business: 'Spice Route Restaurant - Business Bay',
      before: '60% table occupancy, high delivery costs, few regulars',
      after: '85% occupancy, 40% direct orders, strong regular base',
      testimonial: '"We stopped being dependent on delivery apps. Our profits went up 30%."'
    },
    pricing: [
      { tier: 'Starter', price: 'Free', features: ['Basic rewards', 'QR menus', 'Customer profiles', 'Email support'] },
      { tier: 'Growth', price: 'AED 699/mo', features: ['Full loyalty program', 'Reservation link', 'SMS campaigns', 'Priority support'] },
      { tier: 'Premium', price: 'AED 1,299/mo', features: ['Multi-outlet', 'POS integration', 'Custom campaigns', 'Dedicated manager'] }
    ],
    cta: 'Boost Your Restaurant'
  },
  {
    id: 'retail',
    name: 'Retail & Shopping',
    icon: ShoppingBag,
    color: 'from-purple-500 to-violet-600',
    tagline: 'Make every shopper a repeat customer',
    heroStat: { value: '3x', label: 'more likely to buy when enrolled in loyalty program' },
    painPoints: [
      'Online competition eating into foot traffic',
      'Customers compare prices and leave',
      'Seasonal peaks and painful valleys',
      'No way to bring browsers back',
      'Discounting erodes your margins'
    ],
    solutions: [
      {
        title: 'Points Instead of Discounts',
        description: 'Reward future purchases, not current ones. Protect margins while driving loyalty.',
        impact: '+20% margin protection'
      },
      {
        title: 'Bring Them Back',
        description: 'Automated win-back campaigns. "Your points are waiting" drives returns.',
        impact: '+35% return visits'
      },
      {
        title: 'VIP Recognition',
        description: 'Identify and reward your best shoppers. Early access, exclusive previews.',
        impact: '+50% VIP spending'
      },
      {
        title: 'Cross-Sell Opportunities',
        description: 'Know what they buy. Suggest what they\'ll love. Personalized recommendations.',
        impact: '+25% basket size'
      }
    ],
    features: [
      'Purchase-based points',
      'Receipt scanning',
      'Product category rewards',
      'VIP tier system',
      'Inventory alerts',
      'Gift card integration',
      'Seasonal campaigns',
      'Multi-store tracking'
    ],
    caseStudy: {
      business: 'Style Haven Boutique - Mall of Emirates',
      before: '1,000 monthly customers, 15% repeat rate',
      after: '1,500 monthly customers, 40% repeat rate, 200 VIPs',
      testimonial: '"Our VIP customers now spend 3x more. Nuqta helped us identify and reward them."'
    },
    pricing: [
      { tier: 'Starter', price: 'Free', features: ['Basic rewards', 'Customer profiles', 'Monthly reports', 'Email support'] },
      { tier: 'Growth', price: 'AED 599/mo', features: ['VIP tiers', 'Automated campaigns', 'Product insights', 'Priority support'] },
      { tier: 'Premium', price: 'AED 1,199/mo', features: ['Multi-store', 'POS integration', 'API access', 'Dedicated manager'] }
    ],
    cta: 'Grow Your Retail Business'
  },
  {
    id: 'automotive',
    name: 'Automotive Services',
    icon: Car,
    color: 'from-slate-500 to-slate-700',
    tagline: 'Keep customers in your service bay',
    heroStat: { value: '46%', label: 'of car owners would switch for better rewards' },
    painPoints: [
      'Customers only come for emergencies',
      'No relationship between services',
      'Competing with dealer service centers',
      'Seasonal slowdowns hurt cash flow',
      'Hard to upsell additional services'
    ],
    solutions: [
      {
        title: 'Service Reminder Rewards',
        description: 'Automatic reminders for oil changes, tire rotations. Points for staying on schedule.',
        impact: '+60% service compliance'
      },
      {
        title: 'Referral Bonuses',
        description: 'Car owners know car owners. Reward referrals with free services.',
        impact: '+40% new customers from referrals'
      },
      {
        title: 'Service History Tracking',
        description: 'Know every car\'s history. Recommend services proactively.',
        impact: '+30% additional services'
      },
      {
        title: 'Fleet & Corporate Programs',
        description: 'Bulk rewards for businesses with vehicle fleets.',
        impact: 'New revenue stream'
      }
    ],
    features: [
      'Vehicle profile management',
      'Service reminder automation',
      'Multi-vehicle family accounts',
      'Fleet/corporate programs',
      'Parts purchase rewards',
      'Referral tracking',
      'Seasonal promotions',
      'Warranty integration'
    ],
    caseStudy: {
      business: 'QuickFix Auto - Al Quoz',
      before: '200 monthly services, sporadic visits, price competition',
      after: '350 monthly services, loyal customer base, premium positioning',
      testimonial: '"Customers now come to us first, not just when something breaks."'
    },
    pricing: [
      { tier: 'Starter', price: 'Free', features: ['Basic tracking', 'Service reminders', 'Customer profiles', 'Email support'] },
      { tier: 'Growth', price: 'AED 699/mo', features: ['Full program', 'Fleet accounts', 'Automated marketing', 'Priority support'] },
      { tier: 'Premium', price: 'AED 1,299/mo', features: ['Multi-location', 'Custom integration', 'White-label', 'Dedicated manager'] }
    ],
    cta: 'Rev Up Your Business'
  }
];

export default function AgencyPagesPage() {
  const [expandedCategory, setExpandedCategory] = useState<string>('cafe');
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  const copyToClipboard = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates({ ...copiedStates, [id]: true });
    setTimeout(() => setCopiedStates(prev => ({ ...prev, [id]: false })), 2000);
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
            <span className="text-slate-400">Category Landing Pages</span>
          </div>
          <Link href="/merchant-playbook" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft size={16} />
            <span className="text-sm">Merchant Playbook</span>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#c9a227]/20 to-amber-500/20 rounded-full border border-[#c9a227]/30 mb-4">
            <Store className="text-[#c9a227]" size={16} />
            <span className="text-[#c9a227] text-sm font-medium">Industry-Specific Landing Pages</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How We Help <span className="text-[#c9a227]">Your Business</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Dedicated landing pages for each business category - speaking directly to their pain points with tailored solutions.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {categoryPages.map(cat => {
            const Icon = cat.icon;
            const isActive = expandedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setExpandedCategory(cat.id)}
                className={`p-4 rounded-xl border transition-all text-center ${
                  isActive
                    ? 'bg-gradient-to-br ' + cat.color + ' border-transparent text-white'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                }`}
              >
                <Icon className="mx-auto mb-2" size={24} />
                <span className="text-sm font-medium">{cat.name.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Detail */}
        {categoryPages.filter(c => c.id === expandedCategory).map(category => {
          const Icon = category.icon;
          return (
            <div key={category.id} className="space-y-8">
              {/* Category Hero */}
              <div className={`bg-gradient-to-r ${category.color} rounded-2xl p-8 text-white`}>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Icon size={40} />
                      <div>
                        <h2 className="text-3xl font-bold">{category.name}</h2>
                        <p className="text-white/80">{category.tagline}</p>
                      </div>
                    </div>
                    <div className="bg-white/20 backdrop-blur rounded-xl p-4 inline-block">
                      <span className="text-4xl font-bold">{category.heroStat.value}</span>
                      <p className="text-white/80 text-sm">{category.heroStat.label}</p>
                    </div>
                  </div>
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-white/90 transition-colors flex items-center gap-2">
                    {category.cta}
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              {/* Pain Points */}
              <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Target className="text-red-400" size={24} />
                  Your Challenges (We Get It)
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.painPoints.map((pain, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-black/30 rounded-lg">
                      <span className="text-red-400">✗</span>
                      <span className="text-slate-300 text-sm">{pain}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Sparkles className="text-[#c9a227]" size={24} />
                  How Nuqta Solves This
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.solutions.map((solution, idx) => (
                    <div key={idx} className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <h4 className="text-lg font-bold text-white mb-2">{solution.title}</h4>
                      <p className="text-slate-400 mb-4">{solution.description}</p>
                      <div className="flex items-center gap-2 text-green-400 font-medium">
                        <TrendingUp size={18} />
                        {solution.impact}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">What You Get</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {category.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-300">
                      <CheckCircle className="text-green-400 flex-shrink-0" size={16} />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Case Study */}
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-500/30">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Award className="text-green-400" size={24} />
                  Success Story
                </h3>
                <div className="mb-4">
                  <h4 className="font-bold text-white">{category.caseStudy.business}</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-black/30 rounded-lg p-4">
                    <span className="text-red-400 text-xs font-bold uppercase">Before Nuqta</span>
                    <p className="text-slate-300 text-sm mt-1">{category.caseStudy.before}</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <span className="text-green-400 text-xs font-bold uppercase">After Nuqta</span>
                    <p className="text-slate-300 text-sm mt-1">{category.caseStudy.after}</p>
                  </div>
                </div>
                <blockquote className="border-l-4 border-green-500 pl-4 italic text-slate-300">
                  {category.caseStudy.testimonial}
                </blockquote>
              </div>

              {/* Pricing */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6 text-center">Simple Pricing</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {category.pricing.map((tier, idx) => (
                    <div key={idx} className={`rounded-xl p-6 border ${
                      idx === 1 ? 'bg-[#c9a227]/10 border-[#c9a227]/50' : 'bg-white/5 border-white/10'
                    }`}>
                      {idx === 1 && (
                        <span className="bg-[#c9a227] text-black text-xs font-bold px-2 py-1 rounded mb-3 inline-block">
                          MOST POPULAR
                        </span>
                      )}
                      <h4 className="text-xl font-bold text-white">{tier.tier}</h4>
                      <p className="text-3xl font-bold text-[#c9a227] my-3">{tier.price}</p>
                      <ul className="space-y-2">
                        {tier.features.map((f, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 text-slate-300 text-sm">
                            <CheckCircle className="text-green-400" size={14} />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <button className={`w-full mt-6 py-3 rounded-lg font-bold transition-colors ${
                        idx === 1
                          ? 'bg-[#c9a227] text-black hover:bg-[#e8c547]'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}>
                        Get Started
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className={`bg-gradient-to-r ${category.color} rounded-2xl p-8 text-center text-white`}>
                <h3 className="text-2xl font-bold mb-2">Ready to Transform Your {category.name.split('&')[0].trim()}?</h3>
                <p className="text-white/80 mb-6">Join hundreds of Dubai businesses already growing with Nuqta</p>
                <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-white/90 transition-colors inline-flex items-center gap-2 text-lg">
                  {category.cta}
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          );
        })}

        {/* Implementation Note */}
        <div className="mt-12 bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-lg font-bold text-white mb-4">Implementation Notes</h3>
          <p className="text-slate-400 mb-4">
            These category pages should be deployed as separate landing pages for targeted advertising:
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• <strong>/for/cafes</strong> - Targeted at cafe owners via Google Ads, LinkedIn</li>
            <li>• <strong>/for/salons</strong> - Beauty industry advertising</li>
            <li>• <strong>/for/gyms</strong> - Fitness industry targeting</li>
            <li>• <strong>/for/restaurants</strong> - F&B industry campaigns</li>
            <li>• <strong>/for/retail</strong> - Retail business advertising</li>
            <li>• <strong>/for/automotive</strong> - Auto service industry</li>
          </ul>
          <p className="text-slate-500 text-sm mt-4">
            Each page speaks directly to the pain points and desires of that specific industry,
            increasing conversion rates compared to generic landing pages.
          </p>
        </div>
      </main>

      <GlobalFooter />
    </div>
  );
}
