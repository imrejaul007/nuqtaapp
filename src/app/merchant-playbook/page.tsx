'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Store,
  Utensils,
  Scissors,
  Dumbbell,
  Stethoscope,
  Coffee,
  ShoppingBag,
  Film,
  Users,
  Target,
  Clock,
  CheckCircle2,
  Calendar,
  FileText,
  BarChart3,
  TrendingUp,
  Phone,
  Mail,
  MessageCircle,
  Camera,
  Megaphone,
  Star,
  Crown,
  Rocket,
  Zap,
  Gift,
  Shield,
  DollarSign,
  Award,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Play,
  Briefcase,
  ClipboardList,
  UserCheck,
  Settings,
  Bell,
  PieChart,
  Layers,
  MapPin,
  Globe,
  Sparkles,
  AlertCircle,
  Check,
  X
} from 'lucide-react';

export default function MerchantPlaybookPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedCategory, setExpandedCategory] = useState<string | null>('fnb');
  const [expandedPhase, setExpandedPhase] = useState<string | null>('onboarding');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Layers },
    { id: 'category-playbooks', label: 'Category Playbooks', icon: Store },
    { id: 'onboarding', label: 'Onboarding Journey', icon: ClipboardList },
    { id: 'operations', label: 'Operations Matrix', icon: Settings },
    { id: 'reporting', label: 'Reporting System', icon: BarChart3 },
  ];

  // Merchant Categories with full playbooks
  const categoryPlaybooks = [
    {
      id: 'fnb',
      name: 'F&B / Restaurants',
      icon: Utensils,
      color: 'red',
      marketSize: '15,000+ in UAE',
      avgTicket: 'AED 80-150',
      painPoints: [
        'Empty tables 2-5pm weekdays',
        'High customer acquisition cost',
        'Intense competition',
        'Margin pressure from delivery apps',
        'No repeat customer data'
      ],
      valueProps: [
        'Fill slow hours with targeted promos',
        'Zero upfront cost - pay only on sales',
        'Own your customer data',
        'No 30% delivery commission',
        'Build loyalty without plastic cards'
      ],
      pitchDeck: {
        opener: '"How many empty tables do you have between 2-5pm on weekdays?"',
        problem: 'You are paying 30% to delivery apps, but they own your customers. You need new customers in-store.',
        solution: 'Nuqta brings you dine-in customers who discover you on our app and get rewarded for visiting.',
        proof: 'Restaurants on our platform see 15-25% increase in weekday traffic.',
        ask: 'Let us fill your slow hours. You only pay when we send you actual paying customers.',
      },
      idealDealStructure: {
        discount: '15-25% off',
        timing: '2-5pm weekdays only',
        conditions: 'Dine-in only, min spend AED 50',
        exclusions: 'Alcohol, delivery, catering'
      },
      onboardingChecklist: [
        'Photograph menu (30 items max)',
        'Capture 10 ambiance photos',
        'Record 15-sec video tour',
        'Get Google Maps link',
        'Collect owner WhatsApp',
        'Train cashier on QR scanning',
        'Install table tents & stickers',
        'Set up first promotion'
      ],
      successMetrics: [
        'Weekly Nuqta transactions',
        'Average ticket size',
        'Repeat customer rate',
        'Slow hour fill rate',
        'Google review improvement'
      ]
    },
    {
      id: 'salon',
      name: 'Salons & Spas',
      icon: Scissors,
      color: 'pink',
      marketSize: '8,000+ in UAE',
      avgTicket: 'AED 150-400',
      painPoints: [
        'Sunday-Tuesday empty chairs',
        'Last-minute cancellations',
        'Staff idle time',
        'Expensive Instagram ads',
        'Client poaching by staff'
      ],
      valueProps: [
        'Fill slow days guaranteed',
        'Reduce no-show losses',
        'Attract new demographics',
        'Free Instagram exposure',
        'Build client loyalty to salon (not staff)'
      ],
      pitchDeck: {
        opener: '"What is your average booking rate on Sundays and Mondays?"',
        problem: 'You pay rent and staff 7 days a week, but only busy 4 days. That is 43% waste.',
        solution: 'Nuqta sends beauty seekers to fill your slow days with bookings.',
        proof: 'Salons see 40% increase in Sunday-Tuesday bookings within 2 months.',
        ask: 'Let us fill your empty chairs. Zero risk - you only pay per customer.',
      },
      idealDealStructure: {
        discount: '20-30% off',
        timing: 'Sun-Tue only',
        conditions: 'Selected services only, booking required',
        exclusions: 'Senior stylists, bridal packages'
      },
      onboardingChecklist: [
        'Photograph salon interior (5 shots)',
        'List services with prices',
        'Get staff photos for profiles',
        'Set up booking link integration',
        'Train reception on Nuqta check-in',
        'Install mirror stickers',
        'Create first slow-day promotion'
      ],
      successMetrics: [
        'Sunday-Tuesday booking rate',
        'New client acquisition',
        'Service upsell rate',
        'Client return within 30 days',
        'Instagram follower growth'
      ]
    },
    {
      id: 'gym',
      name: 'Gyms & Fitness',
      icon: Dumbbell,
      color: 'green',
      marketSize: '2,500+ in UAE',
      avgTicket: 'AED 300-800/month',
      painPoints: [
        'January rush then dropoff',
        'High membership churn',
        'Empty group classes',
        'Competition from boutiques',
        'Lead generation cost'
      ],
      valueProps: [
        'Steady lead flow year-round',
        'Fill underbooked classes',
        'Convert trials to members',
        'Compete with boutiques',
        'Reduce churn with rewards'
      ],
      pitchDeck: {
        opener: '"What percentage of your trial members convert to full memberships?"',
        problem: 'You spend AED 200+ per lead, but only convert 20%. That is AED 1,000 per member.',
        solution: 'Nuqta sends fitness-minded users who are already motivated to try new gyms.',
        proof: 'Gyms see 35% trial-to-member conversion from Nuqta users vs 20% industry average.',
        ask: 'Let us send you qualified fitness leads. Pay only for trials that show up.',
      },
      idealDealStructure: {
        discount: 'Free trial class or 20% off first month',
        timing: 'Off-peak hours (10am-4pm)',
        conditions: 'First-time visitors only',
        exclusions: 'Personal training, premium memberships'
      },
      onboardingChecklist: [
        'Photograph facility (gym floor, classes, amenities)',
        'List class schedule',
        'Set up trial booking process',
        'Train front desk on check-in',
        'Install entrance signage',
        'Create trial offer promotion'
      ],
      successMetrics: [
        'Trial signups per month',
        'Trial to member conversion',
        'Class attendance rate',
        'Member retention 90-day',
        'Referral rate from members'
      ]
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Clinics',
      icon: Stethoscope,
      color: 'blue',
      marketSize: '5,000+ in UAE',
      avgTicket: 'AED 200-1,000',
      painPoints: [
        'Insurance dependency',
        'Cash-pay patient shortage',
        'Elective procedure marketing limits',
        'High Google Ads cost',
        'Patient acquisition cost'
      ],
      valueProps: [
        'Attract cash-pay patients',
        'Promote checkups legally',
        'Lower acquisition cost',
        'Build patient loyalty',
        'Cross-sell services'
      ],
      pitchDeck: {
        opener: '"What percentage of your patients are cash-pay vs insurance?"',
        problem: 'Insurance reimbursements are shrinking. You need more cash-pay patients for elective services.',
        solution: 'Nuqta promotes your checkups and screenings to health-conscious users.',
        proof: 'Clinics see 25% increase in dental cleaning and health checkup bookings.',
        ask: 'Let us send you preventive care patients. They convert to higher-value services.',
      },
      idealDealStructure: {
        discount: 'Package deals (cleaning + checkup)',
        timing: 'Any time',
        conditions: 'New patients, selected services',
        exclusions: 'Insurance claims, surgeries'
      },
      onboardingChecklist: [
        'Verify DHA/DOH license',
        'List approved services for promotion',
        'Get clinic photos (reception, rooms)',
        'Ensure medical advertising compliance',
        'Train reception on Nuqta process',
        'Create screening package promotion'
      ],
      successMetrics: [
        'New patient appointments',
        'Cash-pay patient ratio',
        'Service cross-sell rate',
        'Patient return rate',
        'Online review score'
      ]
    },
    {
      id: 'cafe',
      name: 'Coffee Shops & Cafes',
      icon: Coffee,
      color: 'amber',
      marketSize: '6,000+ in UAE',
      avgTicket: 'AED 40-80',
      painPoints: [
        'Starbucks competition',
        'Post-morning lull',
        'Low margins on coffee',
        'Student market price sensitivity',
        'Differentiation challenge'
      ],
      valueProps: [
        'Become the local favorite',
        'Fill afternoon tables',
        'Attract study crowd',
        'Build community hub status',
        'Compete on experience not price'
      ],
      pitchDeck: {
        opener: '"How full are your tables between 2-6pm on weekdays?"',
        problem: 'Morning rush then empty. You are paying rent for space that sits unused.',
        solution: 'Nuqta positions you as the go-to study spot and afternoon hangout.',
        proof: 'Cafes see 50% increase in afternoon traffic with our study spot feature.',
        ask: 'Let us make you the neighborhood favorite. Zero risk trial.',
      },
      idealDealStructure: {
        discount: '15-20% off or combo deals',
        timing: '2-6pm weekdays',
        conditions: 'Dine-in only',
        exclusions: 'Delivery, catering'
      },
      onboardingChecklist: [
        'Photograph ambiance and seating',
        'List signature drinks',
        'Highlight WiFi and power outlets',
        'Get study spot features listed',
        'Train baristas on app',
        'Install table cards',
        'Create afternoon special promotion'
      ],
      successMetrics: [
        'Afternoon transaction count',
        'Average ticket increase',
        'Repeat customer rate',
        'Instagram mentions',
        'Google Maps searches'
      ]
    },
    {
      id: 'retail',
      name: 'Retail & Shopping',
      icon: ShoppingBag,
      color: 'purple',
      marketSize: '20,000+ in UAE',
      avgTicket: 'AED 100-500',
      painPoints: [
        'Online competition',
        'Footfall decline',
        'Inventory clearance',
        'Seasonal fluctuations',
        'High mall rent'
      ],
      valueProps: [
        'Drive footfall to store',
        'Clear inventory faster',
        'Compete with online',
        'Build in-store loyalty',
        'Get discovery traffic'
      ],
      pitchDeck: {
        opener: '"How much of your business has moved online in the last 2 years?"',
        problem: 'People browse online but you need them in-store to close the sale.',
        solution: 'Nuqta rewards people for visiting physical stores. In-store exclusive deals.',
        proof: 'Retail stores see 20% footfall increase from Nuqta discovery.',
        ask: 'Let us bring shoppers through your door. Pay only for actual purchases.',
      },
      idealDealStructure: {
        discount: '10-20% off',
        timing: 'Weekdays preferred',
        conditions: 'In-store only, min spend',
        exclusions: 'Sale items, gift cards'
      },
      onboardingChecklist: [
        'Photograph store and product range',
        'List key product categories',
        'Set up store profile with map',
        'Train staff on app process',
        'Install entrance signage',
        'Create launch promotion'
      ],
      successMetrics: [
        'Store visits from app',
        'Conversion rate',
        'Average basket size',
        'Return customer rate',
        'Product category performance'
      ]
    },
    {
      id: 'entertainment',
      name: 'Entertainment & Activities',
      icon: Film,
      color: 'indigo',
      marketSize: '1,500+ in UAE',
      avgTicket: 'AED 150-400',
      painPoints: [
        'Weekday emptiness',
        'Group booking dependency',
        'Summer slowdown',
        'Birthday party competition',
        'High fixed costs'
      ],
      valueProps: [
        'Fill weekday slots',
        'Attract family groups',
        'Year-round promotions',
        'Birthday package leads',
        'Corporate event leads'
      ],
      pitchDeck: {
        opener: '"What is your weekday vs weekend occupancy rate?"',
        problem: 'Fixed costs are the same, but weekdays are half empty.',
        solution: 'Nuqta sends families and groups looking for activities on slow days.',
        proof: 'Entertainment venues see 30% increase in weekday bookings.',
        ask: 'Let us fill your weekday slots. Pay only when groups show up.',
      },
      idealDealStructure: {
        discount: '20-30% off',
        timing: 'Weekdays and off-peak weekends',
        conditions: 'Advance booking',
        exclusions: 'Public holidays, special events'
      },
      onboardingChecklist: [
        'Photograph all activity areas',
        'List all activities with pricing',
        'Set up booking integration',
        'Get birthday party packages listed',
        'Train staff on group check-in',
        'Create weekday family deal'
      ],
      successMetrics: [
        'Weekday bookings',
        'Group size average',
        'Birthday party leads',
        'Corporate inquiries',
        'Repeat family visits'
      ]
    }
  ];

  // Package tiers with service details
  const packageTiers = [
    {
      id: 'starter',
      name: 'Starter',
      icon: Rocket,
      color: 'slate',
      price: 'Free',
      commission: '20%',
      merchantsPerManager: 'Self-service',
      weeklyAttention: '0 hours (DIY)',
      idealFor: 'Testing Nuqta, very small businesses',
      services: {
        platform: ['App listing', 'Basic profile', 'QR payments', 'Basic analytics'],
        marketing: ['Self-service only'],
        materials: ['1x QR board', '1x sticker'],
        support: ['Email only (48hr response)'],
        reporting: ['Self-serve dashboard']
      }
    },
    {
      id: 'growth',
      name: 'Growth',
      icon: TrendingUp,
      color: 'blue',
      price: 'AED 1,500/mo',
      commission: '18%',
      merchantsPerManager: '1:20',
      weeklyAttention: '2 hours',
      idealFor: 'Single-location businesses ready to grow',
      services: {
        platform: ['Priority listing', 'Enhanced profile', '2x featured promos/mo', '1x push notification/mo'],
        marketing: ['AED 500 ads budget', '4 social posts/mo', 'GMB setup', '2 WhatsApp campaigns/mo'],
        materials: ['5x stickers', 'Window decals', '10x table tents'],
        support: ['WhatsApp support (24hr)', 'Monthly strategy call'],
        reporting: ['Monthly performance report', 'Weekly metrics email']
      }
    },
    {
      id: 'professional',
      name: 'Professional',
      icon: Star,
      color: 'amber',
      price: 'AED 3,500/mo',
      commission: '15%',
      merchantsPerManager: '1:15',
      weeklyAttention: '3 hours',
      idealFor: 'Established businesses wanting marketing support',
      services: {
        platform: ['Top priority listing', 'Premium profile', '4x featured promos/mo', '4x push notifications/mo', 'Exclusive badge'],
        marketing: ['AED 1,500 ads budget', '8 posts + 4 reels/mo', 'Full GMB management', '4 WhatsApp campaigns/mo', 'Email marketing 2x/mo', 'Influencer barter deals'],
        materials: ['10x stickers', 'Full signage kit', '20x table tents', '1x outdoor board'],
        support: ['Priority WhatsApp (4hr)', 'Bi-weekly strategy call', 'Dedicated account manager'],
        reporting: ['Weekly performance report', 'Real-time dashboard', 'Competitor benchmarking']
      }
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      icon: Crown,
      color: 'purple',
      price: 'Custom',
      commission: '12-15%',
      merchantsPerManager: '1:10',
      weeklyAttention: '4+ hours',
      idealFor: 'Chains, franchises, premium brands',
      services: {
        platform: ['Exclusive category placement', 'Custom branded profile', 'Unlimited promos', 'API integration', 'Category sponsorship'],
        marketing: ['Custom ads budget', 'Unlimited content', 'Paid influencer campaigns', 'Full marketing calendar', 'Event activations'],
        materials: ['Unlimited everything', 'Custom branded items', 'Full installation service'],
        support: ['24/7 phone support', 'Weekly strategy calls', 'Dedicated success team', 'Quarterly business reviews'],
        reporting: ['Real-time enterprise dashboard', 'Custom KPI tracking', 'Monthly executive summary', 'Competitive intelligence']
      }
    }
  ];

  // Onboarding phases
  const onboardingPhases = [
    {
      id: 'acquisition',
      name: 'Phase 1: Acquisition',
      duration: 'Day 0',
      icon: Target,
      color: 'blue',
      steps: [
        { task: 'Initial contact (cold call/walk-in/referral)', owner: 'BDA', time: '10 mins' },
        { task: 'Qualify merchant (size, category, fit)', owner: 'BDA', time: '5 mins' },
        { task: 'Schedule pitch meeting or do on-spot demo', owner: 'BDA', time: '2 mins' },
        { task: 'Present value proposition with category deck', owner: 'BDA', time: '15 mins' },
        { task: 'Handle objections (use objection matrix)', owner: 'BDA', time: '10 mins' },
        { task: 'Recommend package tier based on needs', owner: 'BDA', time: '5 mins' },
        { task: 'Get verbal commitment', owner: 'BDA', time: '2 mins' }
      ],
      deliverables: ['Lead qualified', 'Package selected', 'Verbal yes'],
      tips: ['Always demo on your phone', 'Show competitor already on platform', 'Calculate their potential savings']
    },
    {
      id: 'contracting',
      name: 'Phase 2: Contracting',
      duration: 'Day 1-2',
      icon: FileText,
      color: 'green',
      steps: [
        { task: 'Send digital contract via email', owner: 'BDA', time: '5 mins' },
        { task: 'Follow up call if not signed in 24hrs', owner: 'BDA', time: '5 mins' },
        { task: 'Collect trade license copy', owner: 'BDA', time: '2 mins' },
        { task: 'Verify business details', owner: 'Operations', time: '10 mins' },
        { task: 'Set up merchant in system', owner: 'Operations', time: '15 mins' },
        { task: 'Assign to manager (Growth+ packages)', owner: 'Operations', time: '5 mins' }
      ],
      deliverables: ['Signed contract', 'Trade license', 'System account created'],
      tips: ['Use DocuSign for speed', 'Call within 24hrs if unsigned', 'Celebrate signing with thank you message']
    },
    {
      id: 'onboarding',
      name: 'Phase 3: Onboarding',
      duration: 'Day 3-7',
      icon: Settings,
      color: 'amber',
      steps: [
        { task: 'Schedule onboarding visit', owner: 'Account Manager', time: '5 mins' },
        { task: 'Visit location for content capture', owner: 'Content Team', time: '60 mins' },
        { task: 'Take photos (menu, ambiance, exterior)', owner: 'Content Team', time: '30 mins' },
        { task: 'Record video content', owner: 'Content Team', time: '15 mins' },
        { task: 'Train staff on QR scanning process', owner: 'Account Manager', time: '20 mins' },
        { task: 'Install physical materials', owner: 'Account Manager', time: '15 mins' },
        { task: 'Set up first promotion', owner: 'Account Manager', time: '15 mins' },
        { task: 'Test full customer journey', owner: 'Account Manager', time: '10 mins' }
      ],
      deliverables: ['Profile live', 'Staff trained', 'Materials installed', 'First promo active'],
      tips: ['Bring all materials to single visit', 'Train manager AND cashier', 'Do test transaction yourself']
    },
    {
      id: 'launch',
      name: 'Phase 4: Launch',
      duration: 'Day 7-14',
      icon: Rocket,
      color: 'purple',
      steps: [
        { task: 'Publish merchant profile', owner: 'Operations', time: '5 mins' },
        { task: 'Activate all promotions', owner: 'Account Manager', time: '10 mins' },
        { task: 'Send launch announcement to merchant', owner: 'Account Manager', time: '5 mins' },
        { task: 'Feature in app discovery section', owner: 'Marketing', time: '10 mins' },
        { task: 'Share on Nuqta social media', owner: 'Marketing', time: '15 mins' },
        { task: 'Monitor first transactions', owner: 'Account Manager', time: 'Ongoing' },
        { task: 'Call merchant after first 5 transactions', owner: 'Account Manager', time: '10 mins' },
        { task: 'Address any issues immediately', owner: 'Account Manager', time: 'As needed' }
      ],
      deliverables: ['Live on platform', 'First transactions', 'Merchant engaged'],
      tips: ['Celebrate first transaction with merchant', 'Fix issues within 2 hours', 'Send screenshots of their listing']
    },
    {
      id: 'ongoing',
      name: 'Phase 5: Ongoing Operations',
      duration: 'Continuous',
      icon: Settings,
      color: 'indigo',
      steps: [
        { task: 'Weekly check-in call (Growth+)', owner: 'Account Manager', time: '15 mins' },
        { task: 'Monthly performance review', owner: 'Account Manager', time: '30 mins' },
        { task: 'Refresh promotions monthly', owner: 'Account Manager', time: '20 mins' },
        { task: 'New content creation quarterly', owner: 'Content Team', time: '60 mins' },
        { task: 'Handle support requests', owner: 'Support Team', time: 'As needed' },
        { task: 'Upsell to higher tier when ready', owner: 'Account Manager', time: '30 mins' },
        { task: 'Renew contract annually', owner: 'Account Manager', time: '20 mins' }
      ],
      deliverables: ['Consistent performance', 'Merchant satisfaction', 'Retention'],
      tips: ['Never ghost a merchant', 'Proactively suggest improvements', 'Celebrate their milestones']
    }
  ];

  const getColorClass = (color: string, type: 'bg' | 'text' | 'border') => {
    const colors: Record<string, Record<string, string>> = {
      red: { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500/30' },
      pink: { bg: 'bg-pink-500/20', text: 'text-pink-400', border: 'border-pink-500/30' },
      green: { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30' },
      blue: { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' },
      amber: { bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/30' },
      purple: { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/30' },
      indigo: { bg: 'bg-indigo-500/20', text: 'text-indigo-400', border: 'border-indigo-500/30' },
      slate: { bg: 'bg-slate-500/20', text: 'text-slate-400', border: 'border-slate-500/30' },
    };
    return colors[color]?.[type] || '';
  };

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#0a1628] via-[#1a2942] to-[#0a1628] border-b border-[#c9a227]/20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#c9a227] mb-6 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="bg-[#c9a227]/20 p-3 rounded-xl">
                <Store className="w-8 h-8 text-[#c9a227]" />
              </div>
              <div>
                <h1 className="text-4xl font-black">Merchant Operations Playbook</h1>
                <p className="text-gray-400 mt-1">Complete guide from acquisition to ongoing success</p>
              </div>
            </div>
            <Link
              href="/merchant-onboarding"
              className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#c9a227] to-[#d4af37] hover:from-[#d4af37] hover:to-[#e8c547] text-black font-bold rounded-xl transition-all shadow-lg shadow-[#c9a227]/20"
            >
              <UserCheck size={20} />
              Start Onboarding
            </Link>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="sticky top-0 z-50 bg-[#0a1628]/95 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-[#c9a227] text-black'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">

        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Hero Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                <div className="text-4xl font-bold text-[#c9a227]">7</div>
                <div className="text-gray-400 mt-1">Merchant Categories</div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                <div className="text-4xl font-bold text-blue-400">4</div>
                <div className="text-gray-400 mt-1">Package Tiers</div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                <div className="text-4xl font-bold text-green-400">5</div>
                <div className="text-gray-400 mt-1">Lifecycle Phases</div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                <div className="text-4xl font-bold text-purple-400">14</div>
                <div className="text-gray-400 mt-1">Days to Launch</div>
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="bg-gradient-to-r from-[#c9a227]/10 to-purple-500/10 rounded-xl p-6 border border-[#c9a227]/30">
              <h3 className="text-xl font-bold text-white mb-4">What is in this playbook?</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <Store className="text-red-400 mb-2" size={24} />
                  <h4 className="font-bold text-white">Category Playbooks</h4>
                  <p className="text-sm text-gray-400 mt-1">Pitch decks, pain points, value props, and ideal deal structures for each merchant type</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <ClipboardList className="text-green-400 mb-2" size={24} />
                  <h4 className="font-bold text-white">Onboarding Journey</h4>
                  <p className="text-sm text-gray-400 mt-1">Step-by-step process from first contact to live merchant with checklists</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <Settings className="text-blue-400 mb-2" size={24} />
                  <h4 className="font-bold text-white">Operations Matrix</h4>
                  <p className="text-sm text-gray-400 mt-1">What each package gets, how managers operate, service delivery</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <BarChart3 className="text-purple-400 mb-2" size={24} />
                  <h4 className="font-bold text-white">Reporting System</h4>
                  <p className="text-sm text-gray-400 mt-1">Monthly report cards for merchants and users with KPIs</p>
                </div>
              </div>
            </div>

            {/* Merchant Onboarding CTA */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-500/30">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center">
                    <UserCheck className="text-green-400" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Ready to Onboard a Merchant?</h3>
                    <p className="text-gray-400 mt-1">Complete the 5-step onboarding process to get merchants live on Nuqta</p>
                  </div>
                </div>
                <Link
                  href="/merchant-onboarding"
                  className="flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-500/20 whitespace-nowrap"
                >
                  <Rocket size={20} />
                  Start Onboarding Flow
                  <ChevronRight size={20} />
                </Link>
              </div>
            </div>

            {/* SOP Hub CTA */}
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl p-6 border border-blue-500/30">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                    <ClipboardList className="text-blue-400" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Standard Operating Procedures</h3>
                    <p className="text-gray-400 mt-1">Step-by-step procedures for acquisition, onboarding, marketing, support & finance</p>
                  </div>
                </div>
                <Link
                  href="/sop"
                  className="flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 whitespace-nowrap"
                >
                  <FileText size={20} />
                  View All SOPs
                  <ChevronRight size={20} />
                </Link>
              </div>
            </div>

            {/* Merchant Loyalty Mechanics */}
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl p-6 border border-orange-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <Award className="text-orange-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Merchant Loyalty Mechanics</h3>
                  <p className="text-gray-400 text-sm">Beyond cashback - build habit, not just one-time visits</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {/* Streak Rewards */}
                <div className="bg-white/5 rounded-xl p-5 border border-orange-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="text-orange-400" size={20} />
                    <span className="font-bold text-white">Streak Rewards</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                      <span className="text-gray-300 text-sm">&quot;Visit 4 times this month&quot;</span>
                      <span className="text-green-400 font-medium text-sm">+5% extra cashback</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                      <span className="text-gray-300 text-sm">&quot;7-day streak at your store&quot;</span>
                      <span className="text-green-400 font-medium text-sm">+150 bonus coins</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                      <span className="text-gray-300 text-sm">&quot;30-day streak&quot;</span>
                      <span className="text-[#c9a227] font-medium text-sm">+1,000 coins + badge</span>
                    </div>
                  </div>
                </div>

                {/* Category Challenges */}
                <div className="bg-white/5 rounded-xl p-5 border border-purple-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="text-purple-400" size={20} />
                    <span className="font-bold text-white">Category Challenges</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                      <span className="text-gray-300 text-sm">&quot;Try 3 new cafes this month&quot;</span>
                      <span className="text-green-400 font-medium text-sm">Unlock bonus</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                      <span className="text-gray-300 text-sm">&quot;Visit 5 salons in category&quot;</span>
                      <span className="text-green-400 font-medium text-sm">+150 coins</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                      <span className="text-gray-300 text-sm">&quot;Explore 10 new merchants&quot;</span>
                      <span className="text-[#c9a227] font-medium text-sm">Explorer badge</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-4 flex items-center gap-3">
                <TrendingUp className="text-green-400 flex-shrink-0" size={24} />
                <div>
                  <span className="text-white font-medium">Merchant Benefit:</span>
                  <span className="text-gray-400 ml-2">Streak rewards drive repeat visits. Customers return for the challenge, not just the discount.</span>
                </div>
              </div>
            </div>

            {/* Merchant Lifecycle Overview */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Merchant Lifecycle Overview</h3>
              <div className="relative">
                <div className="absolute top-6 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 via-amber-500 via-purple-500 to-indigo-500 rounded-full" />
                <div className="grid grid-cols-5 gap-4">
                  {[
                    { phase: 'Acquisition', icon: Target, color: 'blue', days: 'Day 0' },
                    { phase: 'Contracting', icon: FileText, color: 'green', days: 'Day 1-2' },
                    { phase: 'Onboarding', icon: Settings, color: 'amber', days: 'Day 3-7' },
                    { phase: 'Launch', icon: Rocket, color: 'purple', days: 'Day 7-14' },
                    { phase: 'Ongoing', icon: TrendingUp, color: 'indigo', days: 'Continuous' },
                  ].map((item, idx) => (
                    <div key={idx} className="text-center pt-8">
                      <div className={`w-12 h-12 mx-auto rounded-full ${getColorClass(item.color, 'bg')} border-2 ${getColorClass(item.color, 'border')} flex items-center justify-center mb-2`}>
                        <item.icon className={getColorClass(item.color, 'text')} size={20} />
                      </div>
                      <div className="font-bold text-white text-sm">{item.phase}</div>
                      <div className="text-xs text-gray-500">{item.days}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Package Tier Summary */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Package Tier Summary</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {packageTiers.map((tier) => (
                  <div key={tier.id} className={`rounded-xl p-4 ${getColorClass(tier.color, 'bg')} border ${getColorClass(tier.color, 'border')}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <tier.icon className={getColorClass(tier.color, 'text')} size={20} />
                      <span className={`font-bold ${getColorClass(tier.color, 'text')}`}>{tier.name}</span>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{tier.price}</div>
                    <div className="text-sm text-gray-400 mb-3">{tier.commission} commission</div>
                    <div className="text-xs text-gray-500">
                      <div>Manager ratio: {tier.merchantsPerManager}</div>
                      <div>Weekly attention: {tier.weeklyAttention}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CATEGORY PLAYBOOKS TAB */}
        {activeTab === 'category-playbooks' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Category-Specific Playbooks</h2>
              <p className="text-gray-400">Complete pitch decks and strategies for each merchant type</p>
            </div>

            {/* Full Playbook Links */}
            <div className="bg-gradient-to-r from-[#c9a227]/10 to-purple-500/10 rounded-xl p-6 border border-[#c9a227]/30 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">📚 Full Category Playbooks (Complete Sales Guides)</h3>
              <p className="text-gray-400 text-sm mb-4">Each playbook includes industry overview, custom Nuqta services, pitch scripts, ROI calculators, objection handling, and closing techniques.</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {[
                  { name: 'Cafe & Restaurant', href: '/playbook-cafe', icon: Utensils, color: 'orange', engine: 'A' },
                  { name: 'Salon & Spa', href: '/playbook-salon', icon: Scissors, color: 'pink', engine: 'A' },
                  { name: 'Gym & Fitness', href: '/playbook-gym', icon: Dumbbell, color: 'green', engine: 'A' },
                  { name: 'Fashion & Retail', href: '/playbook-fashion', icon: ShoppingBag, color: 'purple', engine: 'A' },
                  { name: 'Entertainment', href: '/playbook-entertainment', icon: Film, color: 'fuchsia', engine: 'A/C' },
                  { name: 'Supermarket', href: '/playbook-supermarket', icon: Store, color: 'emerald', engine: 'B' },
                  { name: 'Gold & Jewelry', href: '/playbook-gold', icon: Star, color: 'amber', engine: 'B' },
                  { name: 'Electronics', href: '/playbook-electronics', icon: Settings, color: 'cyan', engine: 'B' },
                  { name: 'Pharmacy', href: '/playbook-pharmacy', icon: Stethoscope, color: 'red', engine: 'B' },
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className={`flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-[#c9a227]/50 transition-all group`}
                  >
                    <item.icon className="text-[#c9a227] group-hover:scale-110 transition-transform" size={24} />
                    <span className="text-white text-sm font-medium text-center">{item.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${item.engine === 'A' ? 'bg-green-500/20 text-green-400' : item.engine === 'B' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-purple-500/20 text-purple-400'}`}>
                      Engine {item.engine}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Category Selector */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {categoryPlaybooks.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setExpandedCategory(expandedCategory === cat.id ? null : cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    expandedCategory === cat.id
                      ? `${getColorClass(cat.color, 'bg')} border ${getColorClass(cat.color, 'border')} ${getColorClass(cat.color, 'text')}`
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  <cat.icon size={18} />
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Expanded Category Playbook */}
            {categoryPlaybooks.map((category) => (
              expandedCategory === category.id && (
                <div key={category.id} className={`rounded-xl border ${getColorClass(category.color, 'border')} overflow-hidden`}>
                  {/* Category Header */}
                  <div className={`${getColorClass(category.color, 'bg')} p-6`}>
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-white/10`}>
                        <category.icon className={getColorClass(category.color, 'text')} size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{category.name} Playbook</h3>
                        <div className="flex gap-4 mt-1 text-sm text-gray-300">
                          <span>Market: {category.marketSize}</span>
                          <span>Avg Ticket: {category.avgTicket}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-[#0a1628]/50 space-y-6">
                    {/* Pain Points & Value Props */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-red-500/10 rounded-xl p-5 border border-red-500/20">
                        <h4 className="font-bold text-red-400 mb-3 flex items-center gap-2">
                          <AlertCircle size={18} />
                          Pain Points (What They Struggle With)
                        </h4>
                        <ul className="space-y-2">
                          {category.painPoints.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                              <X size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-green-500/10 rounded-xl p-5 border border-green-500/20">
                        <h4 className="font-bold text-green-400 mb-3 flex items-center gap-2">
                          <CheckCircle2 size={18} />
                          Value Props (What We Solve)
                        </h4>
                        <ul className="space-y-2">
                          {category.valueProps.map((prop, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                              <Check size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                              {prop}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Pitch Deck */}
                    <div className={`${getColorClass(category.color, 'bg')} rounded-xl p-5 border ${getColorClass(category.color, 'border')}`}>
                      <h4 className={`font-bold ${getColorClass(category.color, 'text')} mb-4 flex items-center gap-2`}>
                        <Megaphone size={18} />
                        Pitch Deck - How to Sell
                      </h4>
                      <div className="grid md:grid-cols-5 gap-4">
                        <div className="bg-white/5 rounded-lg p-3">
                          <div className="text-xs text-gray-500 mb-1">1. OPENER</div>
                          <p className="text-sm text-white italic">{category.pitchDeck.opener}</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3">
                          <div className="text-xs text-gray-500 mb-1">2. PROBLEM</div>
                          <p className="text-sm text-gray-300">{category.pitchDeck.problem}</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3">
                          <div className="text-xs text-gray-500 mb-1">3. SOLUTION</div>
                          <p className="text-sm text-gray-300">{category.pitchDeck.solution}</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3">
                          <div className="text-xs text-gray-500 mb-1">4. PROOF</div>
                          <p className="text-sm text-gray-300">{category.pitchDeck.proof}</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3">
                          <div className="text-xs text-gray-500 mb-1">5. ASK</div>
                          <p className="text-sm text-white font-medium">{category.pitchDeck.ask}</p>
                        </div>
                      </div>
                    </div>

                    {/* Ideal Deal Structure */}
                    <div className="bg-[#c9a227]/10 rounded-xl p-5 border border-[#c9a227]/30">
                      <h4 className="font-bold text-[#c9a227] mb-4 flex items-center gap-2">
                        <DollarSign size={18} />
                        Ideal Deal Structure
                      </h4>
                      <div className="grid md:grid-cols-4 gap-4">
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Discount Range</div>
                          <div className="text-white font-medium">{category.idealDealStructure.discount}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Best Timing</div>
                          <div className="text-white font-medium">{category.idealDealStructure.timing}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Conditions</div>
                          <div className="text-white font-medium">{category.idealDealStructure.conditions}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Exclusions</div>
                          <div className="text-white font-medium">{category.idealDealStructure.exclusions}</div>
                        </div>
                      </div>
                    </div>

                    {/* Onboarding Checklist & Success Metrics */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                        <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                          <ClipboardList size={18} className="text-blue-400" />
                          Category-Specific Onboarding Checklist
                        </h4>
                        <ul className="space-y-2">
                          {category.onboardingChecklist.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                              <div className="w-5 h-5 rounded border border-gray-600 flex items-center justify-center text-xs text-gray-500">
                                {idx + 1}
                              </div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                        <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                          <BarChart3 size={18} className="text-green-400" />
                          Success Metrics to Track
                        </h4>
                        <ul className="space-y-2">
                          {category.successMetrics.map((metric, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                              <TrendingUp size={14} className="text-green-400" />
                              {metric}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        )}

        {/* ONBOARDING TAB */}
        {activeTab === 'onboarding' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Merchant Onboarding Journey</h2>
              <p className="text-gray-400">Step-by-step process from first contact to ongoing success</p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {onboardingPhases.map((phase, phaseIdx) => (
                <div key={phase.id} className="mb-6">
                  <button
                    onClick={() => setExpandedPhase(expandedPhase === phase.id ? null : phase.id)}
                    className={`w-full rounded-xl p-4 border transition-all ${
                      expandedPhase === phase.id
                        ? `${getColorClass(phase.color, 'bg')} ${getColorClass(phase.color, 'border')}`
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full ${getColorClass(phase.color, 'bg')} border ${getColorClass(phase.color, 'border')} flex items-center justify-center`}>
                          <phase.icon className={getColorClass(phase.color, 'text')} size={20} />
                        </div>
                        <div className="text-left">
                          <h3 className="text-lg font-bold text-white">{phase.name}</h3>
                          <p className="text-sm text-gray-400">{phase.duration}</p>
                        </div>
                      </div>
                      {expandedPhase === phase.id ? (
                        <ChevronUp className="text-gray-400" />
                      ) : (
                        <ChevronDown className="text-gray-400" />
                      )}
                    </div>
                  </button>

                  {expandedPhase === phase.id && (
                    <div className={`mt-2 rounded-xl p-6 ${getColorClass(phase.color, 'bg')} border ${getColorClass(phase.color, 'border')}`}>
                      {/* Steps Table */}
                      <div className="mb-6">
                        <h4 className="font-bold text-white mb-4">Steps</h4>
                        <div className="space-y-2">
                          {phase.steps.map((step, idx) => (
                            <div key={idx} className="flex items-center gap-4 bg-white/5 rounded-lg p-3">
                              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">
                                {idx + 1}
                              </div>
                              <div className="flex-1">
                                <p className="text-white text-sm">{step.task}</p>
                              </div>
                              <div className="text-xs text-gray-400 w-24">{step.owner}</div>
                              <div className="text-xs text-gray-500 w-16 text-right">{step.time}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Deliverables & Tips */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white/5 rounded-lg p-4">
                          <h5 className="font-bold text-green-400 mb-2 flex items-center gap-2">
                            <CheckCircle2 size={16} />
                            Deliverables
                          </h5>
                          <ul className="space-y-1">
                            {phase.deliverables.map((d, idx) => (
                              <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                                <Check size={14} className="text-green-400" />
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4">
                          <h5 className="font-bold text-amber-400 mb-2 flex items-center gap-2">
                            <Zap size={16} />
                            Pro Tips
                          </h5>
                          <ul className="space-y-1">
                            {phase.tips.map((t, idx) => (
                              <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                                <Sparkles size={14} className="text-amber-400" />
                                {t}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* OPERATIONS MATRIX TAB */}
        {activeTab === 'operations' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Service Delivery Matrix</h2>
              <p className="text-gray-400">What each package tier receives and how we operate</p>
            </div>

            {/* Package Comparison */}
            {packageTiers.map((tier) => (
              <div key={tier.id} className={`rounded-xl border ${getColorClass(tier.color, 'border')} overflow-hidden`}>
                <div className={`${getColorClass(tier.color, 'bg')} p-4 flex items-center justify-between`}>
                  <div className="flex items-center gap-3">
                    <tier.icon className={getColorClass(tier.color, 'text')} size={24} />
                    <div>
                      <h3 className={`text-xl font-bold ${getColorClass(tier.color, 'text')}`}>{tier.name} Package</h3>
                      <p className="text-sm text-gray-400">{tier.idealFor}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{tier.price}</div>
                    <div className="text-sm text-gray-400">{tier.commission} commission</div>
                  </div>
                </div>

                <div className="p-6 bg-[#0a1628]/50">
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-white/5 rounded-lg p-3 text-center">
                      <Users size={20} className="mx-auto text-gray-400 mb-1" />
                      <div className="text-sm text-gray-500">Manager Ratio</div>
                      <div className="text-white font-medium">{tier.merchantsPerManager}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 text-center">
                      <Clock size={20} className="mx-auto text-gray-400 mb-1" />
                      <div className="text-sm text-gray-500">Weekly Attention</div>
                      <div className="text-white font-medium">{tier.weeklyAttention}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 text-center">
                      <Target size={20} className="mx-auto text-gray-400 mb-1" />
                      <div className="text-sm text-gray-500">Ideal For</div>
                      <div className="text-white font-medium text-xs">{tier.idealFor}</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-5 gap-4">
                    {Object.entries(tier.services).map(([category, items]) => (
                      <div key={category} className="bg-white/5 rounded-lg p-3">
                        <h5 className="font-bold text-white text-sm mb-2 capitalize">{category.replace(/([A-Z])/g, ' $1')}</h5>
                        <ul className="space-y-1">
                          {items.map((item, idx) => (
                            <li key={idx} className="text-xs text-gray-400 flex items-start gap-1">
                              <Check size={12} className="text-green-400 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Manager Weekly Rhythm */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Account Manager Weekly Rhythm</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-[#c9a227]">Day</th>
                      <th className="text-left py-3 px-4 text-gray-400">Starter (20 merchants)</th>
                      <th className="text-left py-3 px-4 text-blue-400">Growth (20 merchants)</th>
                      <th className="text-left py-3 px-4 text-amber-400">Professional (15 merchants)</th>
                      <th className="text-left py-3 px-4 text-purple-400">Enterprise (10 merchants)</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4 font-medium">Sunday</td>
                      <td className="py-3 px-4 text-gray-500">Self-service</td>
                      <td className="py-3 px-4">Review weekly metrics, plan outreach</td>
                      <td className="py-3 px-4">Strategy calls (3-4 merchants)</td>
                      <td className="py-3 px-4">Executive check-in calls</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4 font-medium">Monday</td>
                      <td className="py-3 px-4 text-gray-500">-</td>
                      <td className="py-3 px-4">Check-in calls (5 merchants)</td>
                      <td className="py-3 px-4">Content planning session</td>
                      <td className="py-3 px-4">Campaign execution review</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4 font-medium">Tuesday</td>
                      <td className="py-3 px-4 text-gray-500">-</td>
                      <td className="py-3 px-4">Promo updates, content delivery</td>
                      <td className="py-3 px-4">Promo optimization + reporting</td>
                      <td className="py-3 px-4">Influencer campaign coordination</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4 font-medium">Wednesday</td>
                      <td className="py-3 px-4 text-gray-500">-</td>
                      <td className="py-3 px-4">Check-in calls (5 merchants)</td>
                      <td className="py-3 px-4">Site visits + content capture</td>
                      <td className="py-3 px-4">Event planning + coordination</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4 font-medium">Thursday</td>
                      <td className="py-3 px-4 text-gray-500">-</td>
                      <td className="py-3 px-4">Ad performance review</td>
                      <td className="py-3 px-4">Performance reports delivery</td>
                      <td className="py-3 px-4">Executive reports + planning</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4 font-medium">Friday</td>
                      <td className="py-3 px-4 text-gray-500">-</td>
                      <td className="py-3 px-4 text-gray-500">Off (UAE)</td>
                      <td className="py-3 px-4 text-gray-500">Off (UAE)</td>
                      <td className="py-3 px-4">Emergency support only</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Saturday</td>
                      <td className="py-3 px-4 text-gray-500">-</td>
                      <td className="py-3 px-4">Check-in calls (5 merchants)</td>
                      <td className="py-3 px-4">Strategy calls (3-4 merchants)</td>
                      <td className="py-3 px-4">Weekend promotion monitoring</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* REPORTING TAB */}
        {activeTab === 'reporting' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Monthly Report Cards</h2>
              <p className="text-gray-400">Performance reports for merchants and users</p>
            </div>

            {/* Merchant Report Card */}
            <div className="bg-gradient-to-br from-[#c9a227]/10 to-purple-500/10 rounded-xl p-6 border border-[#c9a227]/30">
              <div className="flex items-center gap-3 mb-6">
                <Store className="text-[#c9a227]" size={28} />
                <h3 className="text-2xl font-bold text-white">Merchant Monthly Report Card</h3>
              </div>

              <div className="bg-[#0a1628] rounded-xl p-6 border border-white/10">
                {/* Report Header */}
                <div className="flex justify-between items-start mb-6 pb-4 border-b border-white/10">
                  <div>
                    <div className="text-sm text-gray-500">Performance Report For</div>
                    <div className="text-xl font-bold text-white">Cafe Milano - Al Barsha</div>
                    <div className="text-sm text-gray-400">January 2026 | Growth Package</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Overall Score</div>
                    <div className="text-4xl font-bold text-green-400">A-</div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-[#c9a227]">247</div>
                    <div className="text-sm text-gray-400">Nuqta Transactions</div>
                    <div className="text-xs text-green-400 mt-1">↑ 23% vs last month</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-blue-400">AED 18,520</div>
                    <div className="text-sm text-gray-400">Revenue via Nuqta</div>
                    <div className="text-xs text-green-400 mt-1">↑ 31% vs last month</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-green-400">42%</div>
                    <div className="text-sm text-gray-400">Repeat Customer Rate</div>
                    <div className="text-xs text-green-400 mt-1">↑ 8% vs last month</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-purple-400">4.6</div>
                    <div className="text-sm text-gray-400">Avg Rating</div>
                    <div className="text-xs text-green-400 mt-1">↑ 0.2 vs last month</div>
                  </div>
                </div>

                {/* Performance Breakdown */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-white mb-3">Sales Performance</h4>
                    <div className="space-y-3">
                      {[
                        { label: 'Total transactions', value: '247', change: '+46' },
                        { label: 'Average ticket size', value: 'AED 75', change: '+AED 8' },
                        { label: 'Peak day', value: 'Thursday', change: '38 txns' },
                        { label: 'Slow day improvement', value: 'Tuesday', change: '+62%' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-white/5 rounded p-2">
                          <span className="text-gray-400 text-sm">{item.label}</span>
                          <div className="text-right">
                            <span className="text-white font-medium">{item.value}</span>
                            <span className="text-green-400 text-xs ml-2">{item.change}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-3">Customer Insights</h4>
                    <div className="space-y-3">
                      {[
                        { label: 'New customers acquired', value: '143', change: 'via Nuqta' },
                        { label: 'Returning customers', value: '104', change: '42% rate' },
                        { label: 'Top customer segment', value: 'Students', change: '38%' },
                        { label: 'Reviews collected', value: '28', change: '4.6 avg' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-white/5 rounded p-2">
                          <span className="text-gray-400 text-sm">{item.label}</span>
                          <div className="text-right">
                            <span className="text-white font-medium">{item.value}</span>
                            <span className="text-blue-400 text-xs ml-2">{item.change}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Marketing Activities */}
                <div className="bg-blue-500/10 rounded-lg p-4 mb-6">
                  <h4 className="font-bold text-blue-400 mb-3">Marketing Activities This Month</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-gray-400">Social Posts Published</div>
                      <div className="text-white font-medium">4 posts, 2 reels</div>
                      <div className="text-xs text-blue-400">12.3K total reach</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Ad Spend (Your Budget)</div>
                      <div className="text-white font-medium">AED 500</div>
                      <div className="text-xs text-green-400">37 conversions (AED 13.5 each)</div>
                    </div>
                    <div>
                      <div className="text-gray-400">WhatsApp Campaigns</div>
                      <div className="text-white font-medium">2 campaigns sent</div>
                      <div className="text-xs text-blue-400">23% click rate</div>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="bg-[#c9a227]/10 rounded-lg p-4">
                  <h4 className="font-bold text-[#c9a227] mb-3">Recommendations for Next Month</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <Zap size={16} className="text-[#c9a227] mt-0.5" />
                      Increase Monday promotion - currently lowest day
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap size={16} className="text-[#c9a227] mt-0.5" />
                      Consider combo deal to increase avg ticket to AED 85+
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap size={16} className="text-[#c9a227] mt-0.5" />
                      Upgrade to Professional for influencer marketing
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* User Report Card */}
            <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl p-6 border border-green-500/30">
              <div className="flex items-center gap-3 mb-6">
                <Users className="text-green-400" size={28} />
                <h3 className="text-2xl font-bold text-white">User Monthly Savings Report</h3>
              </div>

              <div className="bg-[#0a1628] rounded-xl p-6 border border-white/10">
                {/* Report Header */}
                <div className="flex justify-between items-start mb-6 pb-4 border-b border-white/10">
                  <div>
                    <div className="text-sm text-gray-500">Savings Report For</div>
                    <div className="text-xl font-bold text-white">Ahmed K.</div>
                    <div className="text-sm text-gray-400">January 2026 | Member since Oct 2025</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Saver Level</div>
                    <div className="text-xl font-bold text-[#c9a227] flex items-center gap-2">
                      <Crown size={24} />
                      Gold Saver
                    </div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-green-500/10 rounded-lg p-4 text-center border border-green-500/20">
                    <div className="text-3xl font-bold text-green-400">AED 847</div>
                    <div className="text-sm text-gray-400">Total Saved This Month</div>
                    <div className="text-xs text-green-400 mt-1">Your best month yet!</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-blue-400">23</div>
                    <div className="text-sm text-gray-400">Transactions</div>
                    <div className="text-xs text-gray-500 mt-1">↑ 5 vs last month</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-purple-400">AED 2,340</div>
                    <div className="text-sm text-gray-400">Total Saved Lifetime</div>
                    <div className="text-xs text-gray-500 mt-1">4 months active</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-[#c9a227]">1,250</div>
                    <div className="text-sm text-gray-400">Coins Balance</div>
                    <div className="text-xs text-gray-500 mt-1">Worth AED 125</div>
                  </div>
                </div>

                {/* Savings Breakdown */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-white mb-3">Where You Saved Most</h4>
                    <div className="space-y-2">
                      {[
                        { category: 'Cafes & Restaurants', amount: 'AED 423', percent: '50%', color: 'text-red-400' },
                        { category: 'Salons & Beauty', amount: 'AED 180', percent: '21%', color: 'text-pink-400' },
                        { category: 'Fitness & Gym', amount: 'AED 120', percent: '14%', color: 'text-green-400' },
                        { category: 'Entertainment', amount: 'AED 124', percent: '15%', color: 'text-purple-400' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-white/5 rounded p-2">
                          <div className={`w-2 h-2 rounded-full ${item.color.replace('text-', 'bg-')}`} />
                          <span className="text-gray-400 text-sm flex-1">{item.category}</span>
                          <span className={`font-medium ${item.color}`}>{item.amount}</span>
                          <span className="text-gray-500 text-xs w-10 text-right">{item.percent}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-3">Your Favorite Spots</h4>
                    <div className="space-y-2">
                      {[
                        { name: 'Cafe Milano', visits: 8, saved: 'AED 240' },
                        { name: 'Urban Cuts Salon', visits: 2, saved: 'AED 180' },
                        { name: 'Fit Zone Gym', visits: 12, saved: 'AED 120' },
                        { name: 'Escape Room Dubai', visits: 2, saved: 'AED 124' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between bg-white/5 rounded p-2">
                          <div>
                            <span className="text-white text-sm">{item.name}</span>
                            <span className="text-gray-500 text-xs ml-2">{item.visits} visits</span>
                          </div>
                          <span className="text-green-400 font-medium">{item.saved}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="bg-[#c9a227]/10 rounded-lg p-4 mb-6">
                  <h4 className="font-bold text-[#c9a227] mb-3">Achievements Unlocked</h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: 'First Save', icon: '🎉' },
                      { name: '10 Transactions', icon: '⭐' },
                      { name: 'AED 500 Saved', icon: '💰' },
                      { name: 'Referral Champion', icon: '👥' },
                      { name: 'Gold Saver', icon: '👑' },
                    ].map((badge, idx) => (
                      <div key={idx} className="bg-white/10 rounded-lg px-3 py-2 flex items-center gap-2">
                        <span className="text-xl">{badge.icon}</span>
                        <span className="text-sm text-white">{badge.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next Goals */}
                <div className="bg-purple-500/10 rounded-lg p-4">
                  <h4 className="font-bold text-purple-400 mb-3">Next Goals</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white/5 rounded p-3">
                      <div className="text-sm text-gray-400 mb-1">Save AED 1,000 in a month</div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 rounded-full" style={{ width: '85%' }} />
                      </div>
                      <div className="text-xs text-purple-400 mt-1">AED 153 to go</div>
                    </div>
                    <div className="bg-white/5 rounded p-3">
                      <div className="text-sm text-gray-400 mb-1">Refer 5 friends</div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 rounded-full" style={{ width: '60%' }} />
                      </div>
                      <div className="text-xs text-purple-400 mt-1">2 more referrals</div>
                    </div>
                    <div className="bg-white/5 rounded p-3">
                      <div className="text-sm text-gray-400 mb-1">Try 10 new places</div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 rounded-full" style={{ width: '70%' }} />
                      </div>
                      <div className="text-xs text-purple-400 mt-1">3 new places to discover</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Report Delivery Schedule */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Report Delivery Schedule</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-[#c9a227]">Report Type</th>
                      <th className="text-left py-3 px-4 text-[#c9a227]">Frequency</th>
                      <th className="text-left py-3 px-4 text-[#c9a227]">Delivery</th>
                      <th className="text-left py-3 px-4 text-[#c9a227]">Available For</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">Merchant Performance Report</td>
                      <td className="py-3 px-4">Monthly</td>
                      <td className="py-3 px-4">Email + Dashboard</td>
                      <td className="py-3 px-4">Growth, Professional, Enterprise</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">Merchant Weekly Metrics</td>
                      <td className="py-3 px-4">Weekly</td>
                      <td className="py-3 px-4">WhatsApp + Email</td>
                      <td className="py-3 px-4">Professional, Enterprise</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">User Savings Report</td>
                      <td className="py-3 px-4">Monthly</td>
                      <td className="py-3 px-4">In-App + Email</td>
                      <td className="py-3 px-4">All Users</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">Executive Summary</td>
                      <td className="py-3 px-4">Monthly</td>
                      <td className="py-3 px-4">PDF + Call</td>
                      <td className="py-3 px-4">Enterprise only</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Competitive Intelligence</td>
                      <td className="py-3 px-4">Quarterly</td>
                      <td className="py-3 px-4">PDF Report</td>
                      <td className="py-3 px-4">Professional, Enterprise</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
