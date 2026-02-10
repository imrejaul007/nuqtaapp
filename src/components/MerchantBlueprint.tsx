'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Store,
  Target,
  TrendingUp,
  Users,
  DollarSign,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Zap,
  Shield,
  BarChart3,
  Clock,
  Gift,
  Smartphone,
  Camera,
  Star,
  Crown,
  Rocket,
  ChevronRight,
  ChevronDown,
  Building2,
  Utensils,
  Scissors,
  Dumbbell,
  ShoppingBag,
  Film,
  Heart,
  Car,
  PawPrint,
  Shirt,
  Stethoscope,
  Coffee,
  Gem,
  Cpu,
  Pill,
  Calculator,
  FileText,
  Phone,
  Calendar,
  Award,
  Percent,
  CreditCard,
  Receipt,
  UserCheck,
  Settings,
  Bell,
  PieChart,
  MapPin,
  Globe,
  Sparkles,
  AlertTriangle,
  Lightbulb,
  HandshakeIcon,
  BadgeCheck,
  Banknote,
  CircleDollarSign,
  TrendingDown,
  RefreshCcw,
  Eye,
  MessageSquare,
  Share2,
  ThumbsUp,
  Megaphone
} from 'lucide-react';

export default function MerchantBlueprint() {
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedEngine, setExpandedEngine] = useState<string | null>('engine-a');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const sections = [
    { id: 'overview', label: 'Overview', icon: Target },
    { id: 'value-prop', label: 'Why Nuqta', icon: Lightbulb },
    { id: 'problems', label: 'Problems We Solve', icon: AlertTriangle },
    { id: 'advantage', label: 'The Nuqta Advantage', icon: Trophy },
    { id: 'engines', label: 'Commission Engines', icon: Settings },
    { id: 'journey', label: 'Merchant Journey', icon: MapPin },
    { id: 'roi', label: 'ROI Calculator', icon: Calculator },
    { id: 'categories', label: '14 Categories', icon: Store },
    { id: 'success', label: 'Success Metrics', icon: TrendingUp },
    { id: 'start', label: 'Get Started', icon: Rocket },
  ];

  // All 14 merchant categories
  const categories = [
    { id: 'cafe', name: 'Cafe & Restaurant', icon: Utensils, color: 'orange', engine: 'A', avgTicket: 'AED 55-120', commission: '15-20%', loiShare: '40%', href: '/playbook-cafe', marketSize: '15,000+', keyMetric: '3x repeat visits' },
    { id: 'salon', name: 'Salon & Spa', icon: Scissors, color: 'pink', engine: 'A', avgTicket: 'AED 350', commission: '15-20%', loiShare: '20%', href: '/playbook-salon', marketSize: '8,000+', keyMetric: '40% Sun-Tue boost' },
    { id: 'gym', name: 'Gym & Fitness', icon: Dumbbell, color: 'green', engine: 'A', avgTicket: 'AED 300/mo', commission: '15-20%', loiShare: '10%', href: '/playbook-gym', marketSize: '2,500+', keyMetric: '35% trial conversion' },
    { id: 'fashion', name: 'Fashion & Retail', icon: ShoppingBag, color: 'purple', engine: 'A', avgTicket: 'AED 400', commission: '15-20%', loiShare: '8%', href: '/playbook-fashion', marketSize: '20,000+', keyMetric: '20% footfall increase' },
    { id: 'entertainment', name: 'Entertainment', icon: Film, color: 'fuchsia', engine: 'A/C', avgTicket: 'AED 200', commission: '15-20%', loiShare: '5%', href: '/playbook-entertainment', marketSize: '1,500+', keyMetric: '30% weekday bookings' },
    { id: 'hotel', name: 'Hotels & Hospitality', icon: Building2, color: 'blue', engine: 'A', avgTicket: 'AED 500+', commission: '15-20%', loiShare: '12%', href: '/playbook-hotel', marketSize: '700+', keyMetric: '25% direct bookings' },
    { id: 'auto', name: 'Car Services & Auto', icon: Car, color: 'slate', engine: 'A', avgTicket: 'AED 200', commission: '15-20%', loiShare: '8%', href: '/playbook-auto', marketSize: '5,000+', keyMetric: '4x annual visits' },
    { id: 'clinic', name: 'Clinics & Medical', icon: Heart, color: 'teal', engine: 'A', avgTicket: 'AED 400', commission: '12-18%', loiShare: '6%', href: '/playbook-clinic', marketSize: '4,000+', keyMetric: '30% cash patient boost' },
    { id: 'pet', name: 'Pet Services', icon: PawPrint, color: 'amber', engine: 'A', avgTicket: 'AED 250', commission: '15-20%', loiShare: '4%', href: '/playbook-pet', marketSize: '1,000+', keyMetric: '50% rebooking rate' },
    { id: 'laundry', name: 'Laundry & Dry Cleaning', icon: Shirt, color: 'sky', engine: 'B', avgTicket: 'AED 80', commission: '10-15%', loiShare: '5%', href: '/playbook-laundry', marketSize: '2,000+', keyMetric: '2x monthly orders' },
    { id: 'supermarket', name: 'Supermarket & Grocery', icon: Store, color: 'emerald', engine: 'B', avgTicket: 'AED 150', commission: '5-10%', loiShare: '7%', href: '/playbook-supermarket', marketSize: '3,000+', keyMetric: '25% basket increase' },
    { id: 'gold', name: 'Gold & Jewelry', icon: Gem, color: 'yellow', engine: 'B', avgTicket: 'AED 5,000+', commission: '3-5%', loiShare: '3%', href: '/playbook-gold', marketSize: '2,500+', keyMetric: 'High-value customers' },
    { id: 'electronics', name: 'Electronics', icon: Cpu, color: 'cyan', engine: 'B', avgTicket: 'AED 1,500', commission: '3-8%', loiShare: '4%', href: '/playbook-electronics', marketSize: '1,500+', keyMetric: 'Accessory upsells' },
    { id: 'pharmacy', name: 'Pharmacy & Health', icon: Pill, color: 'red', engine: 'B', avgTicket: 'AED 80', commission: '5-10%', loiShare: '3%', href: '/playbook-pharmacy', marketSize: '3,500+', keyMetric: 'Repeat prescriptions' },
  ];

  // Problem-Solution Matrix
  const problemSolutions = [
    {
      problem: 'Empty tables/chairs during slow hours',
      icon: Clock,
      color: 'red',
      solution: 'Targeted promotions drive traffic during 2-5pm weekdays',
      proof: '30% increase in slow-hour traffic',
      categories: ['Restaurants', 'Cafes', 'Salons', 'Gyms']
    },
    {
      problem: 'High customer acquisition cost (CAC)',
      icon: DollarSign,
      color: 'orange',
      solution: 'Zero upfront cost - pay only when customers actually spend',
      proof: 'AED 0 vs AED 50-200 per customer on ads',
      categories: ['All Categories']
    },
    {
      problem: 'No repeat customer data',
      icon: Users,
      color: 'yellow',
      solution: 'Full customer analytics with purchase history & preferences',
      proof: 'Know your top 100 customers by name',
      categories: ['All Categories']
    },
    {
      problem: 'Losing to delivery apps (30% commission)',
      icon: TrendingDown,
      color: 'purple',
      solution: 'Drive dine-in traffic at 15-20% vs 30% delivery fees',
      proof: '50% savings on commission',
      categories: ['F&B', 'Restaurants', 'Cafes']
    },
    {
      problem: 'One-time customers never return',
      icon: RefreshCcw,
      color: 'blue',
      solution: 'Cashback rewards incentivize repeat visits',
      proof: '3x increase in repeat visits',
      categories: ['All Categories']
    },
    {
      problem: 'Expensive Instagram/Google ads',
      icon: Megaphone,
      color: 'pink',
      solution: 'Organic discovery through 500K+ Nuqta users',
      proof: 'Free exposure to high-intent shoppers',
      categories: ['Salons', 'Retail', 'Fashion']
    },
    {
      problem: 'No-shows and cancellations',
      icon: XCircle,
      color: 'red',
      solution: 'Reward-based bookings reduce no-show rates',
      proof: '40% reduction in no-shows',
      categories: ['Salons', 'Clinics', 'Gyms']
    },
    {
      problem: 'Seasonal fluctuations',
      icon: Calendar,
      color: 'green',
      solution: 'Year-round campaigns tied to events & holidays',
      proof: 'Steady traffic across 12 months',
      categories: ['Entertainment', 'Retail', 'Hotels']
    },
  ];

  // Competitive Comparison
  const competitors = [
    {
      name: 'Delivery Apps',
      icon: Smartphone,
      issues: ['30% commission', 'They own your customers', 'No loyalty building', 'Race to bottom on price'],
      nuqtaAdvantage: '15-20% commission, you own the relationship, build real loyalty'
    },
    {
      name: 'Traditional Loyalty Cards',
      icon: CreditCard,
      issues: ['Customers forget cards', 'No data insights', 'Manual tracking', 'High printing costs'],
      nuqtaAdvantage: 'Digital wallet, full analytics, automatic tracking, zero printing'
    },
    {
      name: 'Instagram/Google Ads',
      icon: Megaphone,
      issues: ['Pay per click (no guarantee)', 'High CPM costs', 'Algorithm changes', 'No retention'],
      nuqtaAdvantage: 'Pay only on actual purchases, guaranteed ROI, built-in retention'
    },
    {
      name: 'Discount Apps (Entertainer)',
      icon: Gift,
      issues: ['50% off kills margins', 'Attract deal-seekers only', 'No repeat incentive', 'Annual fees'],
      nuqtaAdvantage: '5-25% cashback preserves margins, builds habitual customers'
    },
  ];

  // Commission Engines
  const engines = [
    {
      id: 'engine-a',
      name: 'Engine A',
      subtitle: 'High-Margin Services',
      commission: '15-20%',
      color: 'green',
      description: 'For service-based businesses with high margins and repeat potential',
      categories: ['Restaurants', 'Cafes', 'Salons', 'Spas', 'Gyms', 'Hotels', 'Clinics', 'Car Services', 'Pet Services'],
      features: [
        'Priority app placement',
        'Featured promotions',
        'Push notifications',
        'Full marketing support',
        'Dedicated account manager',
        'Custom campaigns'
      ],
      idealFor: 'Businesses where customer lifetime value exceeds AED 500/year'
    },
    {
      id: 'engine-b',
      name: 'Engine B',
      subtitle: 'Volume-Based Retail',
      commission: '5-10%',
      color: 'yellow',
      description: 'For retail and grocery with lower margins but high transaction volume',
      categories: ['Supermarkets', 'Pharmacies', 'Electronics', 'Gold & Jewelry', 'Laundry'],
      features: [
        'App listing',
        'Basic promotions',
        'Monthly reports',
        'Self-service dashboard',
        'Email support',
        'Seasonal campaigns'
      ],
      idealFor: 'Businesses with thin margins but high purchase frequency'
    },
    {
      id: 'engine-c',
      name: 'Engine C',
      subtitle: 'Events & Experiences',
      commission: 'Custom (10-25%)',
      color: 'purple',
      description: 'For one-time events, experiences, and special occasions',
      categories: ['Entertainment Venues', 'Event Spaces', 'Exhibitions', 'Concerts', 'Experiences'],
      features: [
        'Event-specific campaigns',
        'Ticket integration',
        'Flash promotions',
        'Influencer partnerships',
        'Social media features',
        'Group booking tools'
      ],
      idealFor: 'Experience providers seeking to fill capacity'
    },
  ];

  // Merchant Journey Steps
  const journeySteps = [
    {
      phase: 'Discovery',
      duration: 'Day 0',
      icon: Eye,
      color: 'blue',
      title: 'You Discover Nuqta',
      description: 'Learn how Nuqta can transform your business',
      actions: [
        'Visit nuqtaapp.com/merchant-info',
        'Review your category playbook',
        'Calculate potential ROI',
        'Schedule a demo call'
      ]
    },
    {
      phase: 'Pitch',
      duration: 'Day 1-2',
      icon: MessageSquare,
      color: 'indigo',
      title: 'We Present Your Opportunity',
      description: 'Customized presentation for your business',
      actions: [
        'Category-specific pitch deck',
        'Competitor analysis in your area',
        'ROI projections for your business',
        'Package recommendation'
      ]
    },
    {
      phase: 'Agreement',
      duration: 'Day 3-5',
      icon: FileText,
      color: 'purple',
      title: 'Simple Onboarding',
      description: 'Quick paperwork and setup',
      actions: [
        'Digital contract signing',
        'Trade license verification',
        'Package selection',
        'Payment setup'
      ]
    },
    {
      phase: 'Setup',
      duration: 'Day 6-10',
      icon: Settings,
      color: 'pink',
      title: 'Content & Training',
      description: 'We capture content and train your team',
      actions: [
        'Professional photo shoot',
        'Menu/catalog digitization',
        'Staff training on QR process',
        'Physical materials installation'
      ]
    },
    {
      phase: 'Launch',
      duration: 'Day 11-14',
      icon: Rocket,
      color: 'orange',
      title: 'Go Live!',
      description: 'Your business is live on Nuqta',
      actions: [
        'Profile published on app',
        'First promotion activated',
        'Featured in discovery section',
        'Social media announcement'
      ]
    },
    {
      phase: 'Growth',
      duration: 'Ongoing',
      icon: TrendingUp,
      color: 'green',
      title: 'Continuous Optimization',
      description: 'We help you grow month over month',
      actions: [
        'Weekly performance reviews',
        'Campaign optimization',
        'Seasonal promotions',
        'Upsell opportunities'
      ]
    },
  ];

  // ROI Examples by Category
  const roiExamples = [
    {
      category: 'Restaurant',
      icon: Utensils,
      color: 'orange',
      monthlyRevenue: 100000,
      nuqtaShare: 20,
      commission: 18,
      calculation: {
        totalRevenue: 100000,
        nuqtaRevenue: 20000,
        commissionPaid: 3600,
        newCustomerValue: 15000,
        netBenefit: 11400
      }
    },
    {
      category: 'Salon',
      icon: Scissors,
      color: 'pink',
      monthlyRevenue: 80000,
      nuqtaShare: 25,
      commission: 18,
      calculation: {
        totalRevenue: 80000,
        nuqtaRevenue: 20000,
        commissionPaid: 3600,
        newCustomerValue: 12000,
        netBenefit: 8400
      }
    },
    {
      category: 'Supermarket',
      icon: Store,
      color: 'emerald',
      monthlyRevenue: 500000,
      nuqtaShare: 10,
      commission: 7,
      calculation: {
        totalRevenue: 500000,
        nuqtaRevenue: 50000,
        commissionPaid: 3500,
        newCustomerValue: 25000,
        netBenefit: 21500
      }
    },
  ];

  // Success Metrics
  const successMetrics = [
    { metric: '3x', label: 'Repeat Visits', description: 'Customers return 3x more often with Nuqta rewards', icon: RefreshCcw, color: 'green' },
    { metric: '40%', label: 'Higher Spend', description: 'Nuqta customers spend 40% more per visit', icon: TrendingUp, color: 'blue' },
    { metric: '0', label: 'Upfront Cost', description: 'Zero setup fees, zero monthly minimums', icon: DollarSign, color: 'yellow' },
    { metric: '24hrs', label: 'Go Live', description: 'From signup to live in under 24 hours', icon: Clock, color: 'purple' },
    { metric: '500K+', label: 'User Network', description: 'Instant access to 500K+ active users', icon: Users, color: 'pink' },
    { metric: '17x', label: 'ROI', description: 'Average return on commission investment', icon: BarChart3, color: 'orange' },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string; light: string }> = {
      green: { bg: 'bg-green-500', text: 'text-green-400', border: 'border-green-500/30', light: 'bg-green-500/20' },
      yellow: { bg: 'bg-yellow-500', text: 'text-yellow-400', border: 'border-yellow-500/30', light: 'bg-yellow-500/20' },
      purple: { bg: 'bg-purple-500', text: 'text-purple-400', border: 'border-purple-500/30', light: 'bg-purple-500/20' },
      blue: { bg: 'bg-blue-500', text: 'text-blue-400', border: 'border-blue-500/30', light: 'bg-blue-500/20' },
      red: { bg: 'bg-red-500', text: 'text-red-400', border: 'border-red-500/30', light: 'bg-red-500/20' },
      orange: { bg: 'bg-orange-500', text: 'text-orange-400', border: 'border-orange-500/30', light: 'bg-orange-500/20' },
      pink: { bg: 'bg-pink-500', text: 'text-pink-400', border: 'border-pink-500/30', light: 'bg-pink-500/20' },
      indigo: { bg: 'bg-indigo-500', text: 'text-indigo-400', border: 'border-indigo-500/30', light: 'bg-indigo-500/20' },
      teal: { bg: 'bg-teal-500', text: 'text-teal-400', border: 'border-teal-500/30', light: 'bg-teal-500/20' },
      cyan: { bg: 'bg-cyan-500', text: 'text-cyan-400', border: 'border-cyan-500/30', light: 'bg-cyan-500/20' },
      amber: { bg: 'bg-amber-500', text: 'text-amber-400', border: 'border-amber-500/30', light: 'bg-amber-500/20' },
      emerald: { bg: 'bg-emerald-500', text: 'text-emerald-400', border: 'border-emerald-500/30', light: 'bg-emerald-500/20' },
      fuchsia: { bg: 'bg-fuchsia-500', text: 'text-fuchsia-400', border: 'border-fuchsia-500/30', light: 'bg-fuchsia-500/20' },
      slate: { bg: 'bg-slate-500', text: 'text-slate-400', border: 'border-slate-500/30', light: 'bg-slate-500/20' },
      sky: { bg: 'bg-sky-500', text: 'text-sky-400', border: 'border-sky-500/30', light: 'bg-sky-500/20' },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#0a1628] via-[#1a2942] to-[#0a1628] border-b border-[#c9a227]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#c9a227] mb-4 sm:mb-6 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Dashboard</span>
          </Link>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-[#c9a227] to-[#e8c547] p-3 sm:p-4 rounded-2xl shadow-lg shadow-[#c9a227]/20">
                <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-black" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black">Merchant Blueprint</h1>
                <p className="text-gray-400 mt-1 text-sm sm:text-base">Complete guide to how Nuqta helps every merchant succeed</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Link
                href="/merchant-onboarding"
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#c9a227] to-[#d4af37] hover:from-[#d4af37] hover:to-[#e8c547] text-black font-bold rounded-xl transition-all shadow-lg shadow-[#c9a227]/20 text-sm sm:text-base"
              >
                <Rocket size={18} />
                <span>Start Onboarding</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Section Navigation */}
      <div className="sticky top-0 z-50 bg-[#0a1628]/95 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg font-semibold transition-all whitespace-nowrap text-sm ${
                  activeSection === section.id
                    ? 'bg-[#c9a227] text-black'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <section.icon size={16} />
                <span className="hidden sm:inline">{section.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">

        {/* OVERVIEW SECTION */}
        {activeSection === 'overview' && (
          <div className="space-y-8">
            {/* Hero Banner */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 via-purple-500/10 to-blue-500/10 rounded-2xl p-6 sm:p-8 border border-[#c9a227]/30">
              <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 rounded-full text-[#c9a227] text-sm font-medium mb-4">
                  <Sparkles size={16} />
                  The Complete Merchant Success Guide
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
                  Turn Every Customer Into a <span className="text-[#c9a227]">Repeat Customer</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 mb-6">
                  Nuqta is the UAE's first receipt-based loyalty platform. Zero upfront cost.
                  Pay only when customers spend. Build real loyalty that lasts.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center gap-2 text-green-400">
                    <CheckCircle2 size={20} />
                    <span>0% Upfront Cost</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-400">
                    <CheckCircle2 size={20} />
                    <span>500K+ Users</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-400">
                    <CheckCircle2 size={20} />
                    <span>14 Categories</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#c9a227]">
                    <CheckCircle2 size={20} />
                    <span>24hr Go-Live</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {successMetrics.slice(0, 4).map((stat, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10 text-center">
                  <div className={`text-3xl sm:text-4xl font-black ${getColorClasses(stat.color).text}`}>{stat.metric}</div>
                  <div className="text-white font-medium mt-1">{stat.label}</div>
                  <div className="text-gray-500 text-xs sm:text-sm mt-1">{stat.description}</div>
                </div>
              ))}
            </div>

            {/* What's In This Blueprint */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FileText className="text-[#c9a227]" size={24} />
                What's In This Blueprint
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {sections.slice(1).map((section, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSection(section.id)}
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all text-left group"
                  >
                    <div className="p-2 rounded-lg bg-[#c9a227]/20">
                      <section.icon className="text-[#c9a227]" size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium group-hover:text-[#c9a227] transition-colors">{section.label}</div>
                    </div>
                    <ChevronRight className="text-gray-500 group-hover:text-[#c9a227] transition-colors" size={18} />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/merchant-info" className="bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-xl p-5 border border-green-500/30 hover:border-green-500/50 transition-all group">
                <Store className="text-green-400 mb-3" size={28} />
                <h4 className="font-bold text-white group-hover:text-green-400 transition-colors">Merchant Info</h4>
                <p className="text-sm text-gray-400 mt-1">Benefits, pricing & FAQ</p>
              </Link>
              <Link href="/merchant-playbook" className="bg-gradient-to-br from-blue-500/20 to-indigo-500/10 rounded-xl p-5 border border-blue-500/30 hover:border-blue-500/50 transition-all group">
                <Target className="text-blue-400 mb-3" size={28} />
                <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors">Category Playbooks</h4>
                <p className="text-sm text-gray-400 mt-1">Pitch scripts by industry</p>
              </Link>
              <Link href="/merchant-onboarding" className="bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-xl p-5 border border-purple-500/30 hover:border-purple-500/50 transition-all group">
                <Rocket className="text-purple-400 mb-3" size={28} />
                <h4 className="font-bold text-white group-hover:text-purple-400 transition-colors">Start Onboarding</h4>
                <p className="text-sm text-gray-400 mt-1">5-step signup process</p>
              </Link>
              <Link href="/merchant-database" className="bg-gradient-to-br from-[#c9a227]/20 to-amber-500/10 rounded-xl p-5 border border-[#c9a227]/30 hover:border-[#c9a227]/50 transition-all group">
                <Users className="text-[#c9a227] mb-3" size={28} />
                <h4 className="font-bold text-white group-hover:text-[#c9a227] transition-colors">Target Merchants</h4>
                <p className="text-sm text-gray-400 mt-1">250+ target brands</p>
              </Link>
            </div>
          </div>
        )}

        {/* VALUE PROPOSITION SECTION */}
        {activeSection === 'value-prop' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Why Merchants Choose Nuqta</h2>
              <p className="text-gray-400 text-lg">The only loyalty platform where you pay for results, not promises</p>
            </div>

            {/* Core Value Props */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-2xl p-6 border border-green-500/30">
                <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                  <DollarSign className="text-green-400" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Zero Risk Model</h3>
                <p className="text-gray-300 mb-4">No setup fees. No monthly minimums. No long-term contracts. You only pay commission when customers actually spend at your business.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-green-400 text-sm">
                    <CheckCircle2 size={16} />
                    AED 0 upfront investment
                  </li>
                  <li className="flex items-center gap-2 text-green-400 text-sm">
                    <CheckCircle2 size={16} />
                    Cancel anytime, no penalties
                  </li>
                  <li className="flex items-center gap-2 text-green-400 text-sm">
                    <CheckCircle2 size={16} />
                    Pay only on verified sales
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/10 rounded-2xl p-6 border border-blue-500/30">
                <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                  <Users className="text-blue-400" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Instant Customer Base</h3>
                <p className="text-gray-300 mb-4">Get discovered by 500,000+ active Nuqta users actively looking for places to spend. No waiting for ads to work.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-blue-400 text-sm">
                    <CheckCircle2 size={16} />
                    500K+ active users
                  </li>
                  <li className="flex items-center gap-2 text-blue-400 text-sm">
                    <CheckCircle2 size={16} />
                    High-intent shoppers
                  </li>
                  <li className="flex items-center gap-2 text-blue-400 text-sm">
                    <CheckCircle2 size={16} />
                    Geo-targeted discovery
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-2xl p-6 border border-purple-500/30">
                <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                  <RefreshCcw className="text-purple-400" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Built-In Retention</h3>
                <p className="text-gray-300 mb-4">Cashback rewards automatically bring customers back. No loyalty cards to manage. No points to track manually.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-purple-400 text-sm">
                    <CheckCircle2 size={16} />
                    3x repeat visits
                  </li>
                  <li className="flex items-center gap-2 text-purple-400 text-sm">
                    <CheckCircle2 size={16} />
                    40% higher spend
                  </li>
                  <li className="flex items-center gap-2 text-purple-400 text-sm">
                    <CheckCircle2 size={16} />
                    Automatic reminders
                  </li>
                </ul>
              </div>
            </div>

            {/* How It Works - Simple */}
            <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">How Nuqta Works (4 Simple Steps)</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#c9a227]/20 flex items-center justify-center mx-auto mb-4 relative">
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#c9a227] text-black text-sm font-bold flex items-center justify-center">1</span>
                    <CreditCard className="text-[#c9a227]" size={28} />
                  </div>
                  <h4 className="font-bold text-white mb-2">Customer Pays</h4>
                  <p className="text-sm text-gray-400">Customer visits your store and pays normally with any method</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4 relative">
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-500 text-white text-sm font-bold flex items-center justify-center">2</span>
                    <Camera className="text-blue-400" size={28} />
                  </div>
                  <h4 className="font-bold text-white mb-2">Snaps Receipt</h4>
                  <p className="text-sm text-gray-400">Customer photographs their receipt in the Nuqta app</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4 relative">
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-green-500 text-white text-sm font-bold flex items-center justify-center">3</span>
                    <BadgeCheck className="text-green-400" size={28} />
                  </div>
                  <h4 className="font-bold text-white mb-2">You Verify</h4>
                  <p className="text-sm text-gray-400">Quick scan of customer's QR code confirms the visit</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4 relative">
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-purple-500 text-white text-sm font-bold flex items-center justify-center">4</span>
                    <Gift className="text-purple-400" size={28} />
                  </div>
                  <h4 className="font-bold text-white mb-2">They Return</h4>
                  <p className="text-sm text-gray-400">Customer earns cashback and is incentivized to come back</p>
                </div>
              </div>
            </div>

            {/* What You Get */}
            <div className="bg-gradient-to-r from-[#c9a227]/10 to-purple-500/10 rounded-2xl p-6 sm:p-8 border border-[#c9a227]/30">
              <h3 className="text-2xl font-bold text-white mb-6">What Every Merchant Gets</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: Store, label: 'App Listing', desc: 'Profile visible to 500K+ users' },
                  { icon: BarChart3, label: 'Analytics Dashboard', desc: 'Real-time sales & customer data' },
                  { icon: Megaphone, label: 'Promotion Tools', desc: 'Create offers & campaigns' },
                  { icon: Camera, label: 'Content Creation', desc: 'Professional photos included' },
                  { icon: Bell, label: 'Push Notifications', desc: 'Reach customers directly' },
                  { icon: Award, label: 'Featured Placement', desc: 'Priority in discovery feed' },
                  { icon: Users, label: 'Customer Insights', desc: 'Know your top customers' },
                  { icon: Phone, label: 'Dedicated Support', desc: 'Account manager assigned' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                    <div className="p-2 rounded-lg bg-[#c9a227]/20">
                      <item.icon className="text-[#c9a227]" size={18} />
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{item.label}</div>
                      <div className="text-gray-500 text-xs">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* PROBLEMS WE SOLVE SECTION */}
        {activeSection === 'problems' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Problems We Solve</h2>
              <p className="text-gray-400 text-lg">Every merchant pain point, addressed by Nuqta</p>
            </div>

            {/* Problem Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {problemSolutions.map((item, idx) => (
                <div key={idx} className={`rounded-2xl border ${getColorClasses(item.color).border} overflow-hidden`}>
                  <div className={`${getColorClasses(item.color).light} p-4 flex items-center gap-3`}>
                    <div className={`p-2 rounded-lg bg-white/10`}>
                      <item.icon className={getColorClasses(item.color).text} size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{item.problem}</h3>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {item.categories.map((cat, i) => (
                          <span key={i} className="text-xs px-2 py-0.5 bg-white/10 rounded text-gray-300">{cat}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-white/5">
                    <div className="flex items-start gap-3 mb-3">
                      <CheckCircle2 className="text-green-400 flex-shrink-0 mt-0.5" size={18} />
                      <div>
                        <div className="text-white font-medium">Nuqta Solution</div>
                        <div className="text-gray-400 text-sm">{item.solution}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-green-500/10 rounded-lg">
                      <TrendingUp className="text-green-400" size={16} />
                      <span className="text-green-400 text-sm font-medium">{item.proof}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Stats */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-500/30">
              <h3 className="text-xl font-bold text-white mb-4 text-center">The Bottom Line</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400">8</div>
                  <div className="text-gray-400 text-sm">Pain Points Solved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">14</div>
                  <div className="text-gray-400 text-sm">Categories Covered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">0</div>
                  <div className="text-gray-400 text-sm">Upfront Risk</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#c9a227]">17x</div>
                  <div className="text-gray-400 text-sm">Average ROI</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* THE NUQTA ADVANTAGE SECTION */}
        {activeSection === 'advantage' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">The Nuqta Advantage</h2>
              <p className="text-gray-400 text-lg">Why merchants choose us over alternatives</p>
            </div>

            {/* Competitor Comparison */}
            <div className="grid md:grid-cols-2 gap-6">
              {competitors.map((comp, idx) => (
                <div key={idx} className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                  <div className="p-4 border-b border-white/10 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-500/20">
                      <comp.icon className="text-red-400" size={24} />
                    </div>
                    <h3 className="font-bold text-white text-lg">{comp.name}</h3>
                  </div>
                  <div className="p-4">
                    <div className="mb-4">
                      <div className="text-red-400 text-sm font-medium mb-2">Their Problems:</div>
                      <ul className="space-y-1">
                        {comp.issues.map((issue, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                            <XCircle size={14} className="text-red-400" />
                            {issue}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                      <div className="text-green-400 text-sm font-medium mb-1">Nuqta Advantage:</div>
                      <div className="text-white text-sm">{comp.nuqtaAdvantage}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Head to Head Comparison */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 overflow-x-auto">
              <h3 className="text-xl font-bold text-white mb-6">Head-to-Head Comparison</h3>
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 text-gray-400 font-medium">Feature</th>
                    <th className="text-center py-3 text-gray-400 font-medium">Delivery Apps</th>
                    <th className="text-center py-3 text-gray-400 font-medium">Instagram Ads</th>
                    <th className="text-center py-3 text-gray-400 font-medium">Loyalty Cards</th>
                    <th className="text-center py-3 text-[#c9a227] font-bold">Nuqta</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Commission Rate', delivery: '30%', ads: 'Variable', loyalty: '0%', nuqta: '5-20%' },
                    { feature: 'Upfront Cost', delivery: 'AED 0', ads: 'AED 500+', loyalty: 'AED 5,000+', nuqta: 'AED 0' },
                    { feature: 'Customer Ownership', delivery: 'No', ads: 'No', loyalty: 'Yes', nuqta: 'Yes' },
                    { feature: 'Guaranteed ROI', delivery: 'No', ads: 'No', loyalty: 'No', nuqta: 'Yes' },
                    { feature: 'Analytics', delivery: 'Limited', ads: 'Basic', loyalty: 'None', nuqta: 'Full' },
                    { feature: 'Repeat Incentive', delivery: 'No', ads: 'No', loyalty: 'Sometimes', nuqta: 'Always' },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-white/5">
                      <td className="py-3 text-white font-medium">{row.feature}</td>
                      <td className="text-center py-3 text-gray-400">{row.delivery}</td>
                      <td className="text-center py-3 text-gray-400">{row.ads}</td>
                      <td className="text-center py-3 text-gray-400">{row.loyalty}</td>
                      <td className="text-center py-3 text-[#c9a227] font-medium">{row.nuqta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* COMMISSION ENGINES SECTION */}
        {activeSection === 'engines' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">3 Commission Engines</h2>
              <p className="text-gray-400 text-lg">Tailored pricing for every business model</p>
            </div>

            {/* Engine Cards */}
            <div className="grid lg:grid-cols-3 gap-6">
              {engines.map((engine) => (
                <div
                  key={engine.id}
                  className={`rounded-2xl border ${getColorClasses(engine.color).border} overflow-hidden ${
                    expandedEngine === engine.id ? 'ring-2 ring-offset-2 ring-offset-[#0a1628]' : ''
                  } ${expandedEngine === engine.id ? (engine.color === 'green' ? 'ring-green-500' : engine.color === 'yellow' ? 'ring-yellow-500' : 'ring-purple-500') : ''}`}
                >
                  <button
                    onClick={() => setExpandedEngine(expandedEngine === engine.id ? null : engine.id)}
                    className={`w-full ${getColorClasses(engine.color).light} p-6 text-left`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className={`text-sm font-medium ${getColorClasses(engine.color).text} mb-1`}>{engine.subtitle}</div>
                        <h3 className="text-2xl font-bold text-white">{engine.name}</h3>
                        <div className="text-3xl font-black text-white mt-2">{engine.commission}</div>
                      </div>
                      <ChevronDown className={`text-white transition-transform ${expandedEngine === engine.id ? 'rotate-180' : ''}`} size={24} />
                    </div>
                  </button>

                  {expandedEngine === engine.id && (
                    <div className="p-6 bg-white/5 space-y-4">
                      <p className="text-gray-300">{engine.description}</p>

                      <div>
                        <div className="text-sm font-medium text-gray-400 mb-2">Categories:</div>
                        <div className="flex flex-wrap gap-1">
                          {engine.categories.map((cat, i) => (
                            <span key={i} className={`text-xs px-2 py-1 rounded ${getColorClasses(engine.color).light} ${getColorClasses(engine.color).text}`}>
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-medium text-gray-400 mb-2">Features Included:</div>
                        <ul className="space-y-1">
                          {engine.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                              <CheckCircle2 size={14} className={getColorClasses(engine.color).text} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={`p-3 rounded-lg ${getColorClasses(engine.color).light} border ${getColorClasses(engine.color).border}`}>
                        <div className="text-sm font-medium text-white">Ideal For:</div>
                        <div className={`text-sm ${getColorClasses(engine.color).text}`}>{engine.idealFor}</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Commission FAQ */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Commission FAQ</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { q: 'When do I pay commission?', a: 'Only after a verified customer transaction. No sales = no fees.' },
                  { q: 'How is commission calculated?', a: 'Percentage of the total receipt value (excluding VAT).' },
                  { q: 'Can I change engines later?', a: 'Yes, you can upgrade or adjust with 30 days notice.' },
                  { q: 'Are there hidden fees?', a: 'No. Commission is the only cost. No setup, monthly, or hidden fees.' },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-white/5 rounded-lg">
                    <div className="text-white font-medium mb-1">{item.q}</div>
                    <div className="text-gray-400 text-sm">{item.a}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* MERCHANT JOURNEY SECTION */}
        {activeSection === 'journey' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">The Merchant Journey</h2>
              <p className="text-gray-400 text-lg">From first contact to ongoing success in 14 days</p>
            </div>

            {/* Journey Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 transform -translate-x-1/2" />

              <div className="space-y-6 lg:space-y-0">
                {journeySteps.map((step, idx) => (
                  <div key={idx} className={`lg:flex lg:items-center lg:gap-8 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className={`flex-1 ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className={`bg-white/5 rounded-2xl p-6 border border-white/10 lg:inline-block ${idx % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'} max-w-md`}>
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`p-2 rounded-lg ${getColorClasses(step.color).light}`}>
                            <step.icon className={getColorClasses(step.color).text} size={24} />
                          </div>
                          <div>
                            <div className={`text-sm font-medium ${getColorClasses(step.color).text}`}>{step.phase} • {step.duration}</div>
                            <h3 className="text-lg font-bold text-white">{step.title}</h3>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm mb-3">{step.description}</p>
                        <ul className="space-y-1">
                          {step.actions.map((action, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                              <CheckCircle2 size={14} className={getColorClasses(step.color).text} />
                              {action}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Center Node */}
                    <div className="hidden lg:flex items-center justify-center w-12">
                      <div className={`w-10 h-10 rounded-full ${getColorClasses(step.color).bg} flex items-center justify-center text-white font-bold z-10`}>
                        {idx + 1}
                      </div>
                    </div>

                    <div className="flex-1" />
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-purple-500/10 rounded-2xl p-6 sm:p-8 border border-[#c9a227]/30 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Your Journey?</h3>
              <p className="text-gray-400 mb-6">Join 500+ merchants already growing with Nuqta</p>
              <Link
                href="/merchant-onboarding"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#c9a227] to-[#d4af37] hover:from-[#d4af37] hover:to-[#e8c547] text-black font-bold rounded-xl transition-all shadow-lg shadow-[#c9a227]/20"
              >
                <Rocket size={20} />
                Start Onboarding Now
                <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        )}

        {/* ROI CALCULATOR SECTION */}
        {activeSection === 'roi' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">ROI Calculator</h2>
              <p className="text-gray-400 text-lg">See exactly what Nuqta can do for your business</p>
            </div>

            {/* ROI Examples */}
            <div className="grid lg:grid-cols-3 gap-6">
              {roiExamples.map((example, idx) => (
                <div key={idx} className={`rounded-2xl border ${getColorClasses(example.color).border} overflow-hidden`}>
                  <div className={`${getColorClasses(example.color).light} p-4 flex items-center gap-3`}>
                    <div className="p-2 rounded-lg bg-white/10">
                      <example.icon className={getColorClasses(example.color).text} size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-300">Example</div>
                      <h3 className="text-xl font-bold text-white">{example.category}</h3>
                    </div>
                  </div>
                  <div className="p-4 bg-white/5 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Monthly Revenue</span>
                      <span className="text-white font-medium">AED {example.calculation.totalRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Nuqta Share ({example.nuqtaShare}%)</span>
                      <span className="text-white font-medium">AED {example.calculation.nuqtaRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Commission Paid ({example.commission}%)</span>
                      <span className="text-red-400 font-medium">-AED {example.calculation.commissionPaid.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">New Customer Value</span>
                      <span className="text-green-400 font-medium">+AED {example.calculation.newCustomerValue.toLocaleString()}</span>
                    </div>
                    <div className="border-t border-white/10 pt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-bold">Net Monthly Benefit</span>
                        <span className="text-2xl font-bold text-green-400">+AED {example.calculation.netBenefit.toLocaleString()}</span>
                      </div>
                      <div className="text-center mt-2">
                        <span className={`text-sm px-3 py-1 rounded-full ${getColorClasses(example.color).light} ${getColorClasses(example.color).text}`}>
                          {Math.round(example.calculation.netBenefit / example.calculation.commissionPaid)}x ROI
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ROI Formula */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">The ROI Formula</h3>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                  <Users className="text-blue-400 mx-auto mb-2" size={28} />
                  <div className="text-white font-bold">New Customers</div>
                  <div className="text-gray-400 text-sm">From Nuqta discovery</div>
                </div>
                <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                  <RefreshCcw className="text-green-400 mx-auto mb-2" size={28} />
                  <div className="text-white font-bold">3x Repeat Visits</div>
                  <div className="text-gray-400 text-sm">Cashback incentives</div>
                </div>
                <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                  <TrendingUp className="text-purple-400 mx-auto mb-2" size={28} />
                  <div className="text-white font-bold">40% Higher Spend</div>
                  <div className="text-gray-400 text-sm">Larger basket sizes</div>
                </div>
                <div className="p-4 bg-[#c9a227]/10 rounded-xl border border-[#c9a227]/20">
                  <CircleDollarSign className="text-[#c9a227] mx-auto mb-2" size={28} />
                  <div className="text-white font-bold">Net Profit</div>
                  <div className="text-gray-400 text-sm">Revenue - Commission</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 14 CATEGORIES SECTION */}
        {activeSection === 'categories' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">14 Merchant Categories</h2>
              <p className="text-gray-400 text-lg">Complete playbooks for every industry we serve</p>
            </div>

            {/* Category Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={cat.href}
                  className={`rounded-xl border ${getColorClasses(cat.color).border} overflow-hidden hover:scale-105 transition-all group`}
                >
                  <div className={`${getColorClasses(cat.color).light} p-4`}>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/10">
                        <cat.icon className={getColorClasses(cat.color).text} size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-white group-hover:text-[#c9a227] transition-colors">{cat.name}</h3>
                        <div className="flex items-center gap-2 text-xs">
                          <span className={`px-1.5 py-0.5 rounded ${cat.engine === 'A' ? 'bg-green-500/20 text-green-400' : cat.engine === 'B' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-purple-500/20 text-purple-400'}`}>
                            Engine {cat.engine}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-white/5 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Market Size</span>
                      <span className="text-white">{cat.marketSize}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Avg Ticket</span>
                      <span className="text-white">{cat.avgTicket}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Commission</span>
                      <span className={getColorClasses(cat.color).text}>{cat.commission}</span>
                    </div>
                    <div className="pt-2 border-t border-white/10">
                      <div className="flex items-center gap-2 text-sm">
                        <TrendingUp size={14} className="text-green-400" />
                        <span className="text-green-400">{cat.keyMetric}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Master Playbook Link */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-purple-500/10 rounded-2xl p-6 border border-[#c9a227]/30">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Want the Full Playbook?</h3>
                  <p className="text-gray-400">Access complete pitch scripts, objection handling, and ROI calculators</p>
                </div>
                <Link
                  href="/merchant-playbook"
                  className="flex items-center gap-2 px-6 py-3 bg-[#c9a227] hover:bg-[#d4af37] text-black font-bold rounded-xl transition-all whitespace-nowrap"
                >
                  <Target size={20} />
                  Merchant Playbook
                  <ChevronRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* SUCCESS METRICS SECTION */}
        {activeSection === 'success' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Success Metrics</h2>
              <p className="text-gray-400 text-lg">What merchants achieve with Nuqta</p>
            </div>

            {/* Main Metrics */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {successMetrics.map((metric, idx) => (
                <div key={idx} className={`rounded-2xl p-6 border ${getColorClasses(metric.color).border} ${getColorClasses(metric.color).light}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-white/10`}>
                      <metric.icon className={getColorClasses(metric.color).text} size={28} />
                    </div>
                    <div className={`text-4xl font-black ${getColorClasses(metric.color).text}`}>{metric.metric}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{metric.label}</h3>
                  <p className="text-gray-400">{metric.description}</p>
                </div>
              ))}
            </div>

            {/* Testimonial Placeholder */}
            <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
              <div className="flex items-center gap-2 mb-6">
                <Star className="text-[#c9a227]" size={24} />
                <h3 className="text-xl font-bold text-white">Merchant Success Stories</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { category: 'Restaurant', quote: 'Nuqta filled our slow 2-5pm slots. Now those hours are as busy as dinner.', metric: '+35% weekday revenue' },
                  { category: 'Salon', quote: 'Sunday used to be our worst day. Now it is fully booked with Nuqta customers.', metric: '+40% Sunday bookings' },
                  { category: 'Supermarket', quote: 'Our basket size increased because customers want to maximize their cashback.', metric: '+25% basket size' },
                ].map((story, idx) => (
                  <div key={idx} className="p-4 bg-white/5 rounded-xl">
                    <div className="text-[#c9a227] text-sm font-medium mb-2">{story.category}</div>
                    <p className="text-gray-300 text-sm mb-3">"{story.quote}"</p>
                    <div className="flex items-center gap-2">
                      <TrendingUp size={16} className="text-green-400" />
                      <span className="text-green-400 font-medium text-sm">{story.metric}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* GET STARTED SECTION */}
        {activeSection === 'start' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Get Started with Nuqta</h2>
              <p className="text-gray-400 text-lg">Join 500+ merchants already growing their business</p>
            </div>

            {/* 3 Ways to Start */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-2xl p-6 border border-green-500/30 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="text-green-400" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Online Signup</h3>
                <p className="text-gray-400 mb-4">Complete the 5-step onboarding form online in 10 minutes</p>
                <Link
                  href="/merchant-onboarding"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all"
                >
                  <Rocket size={18} />
                  Start Now
                </Link>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/10 rounded-2xl p-6 border border-blue-500/30 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-blue-400" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Schedule a Call</h3>
                <p className="text-gray-400 mb-4">Talk to our team and get a customized demo for your business</p>
                <a
                  href="tel:+971501234567"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition-all"
                >
                  <Phone size={18} />
                  Call Us
                </a>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-2xl p-6 border border-purple-500/30 text-center">
                <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="text-purple-400" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">WhatsApp Us</h3>
                <p className="text-gray-400 mb-4">Quick questions? Chat with us on WhatsApp anytime</p>
                <a
                  href="https://wa.me/971501234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-xl transition-all"
                >
                  <MessageSquare size={18} />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* What Happens Next */}
            <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">What Happens After You Sign Up</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { step: '1', title: 'We Verify', desc: 'Quick verification of your business documents', time: '24 hours' },
                  { step: '2', title: 'Content Visit', desc: 'Our team visits to capture photos & train staff', time: '3-5 days' },
                  { step: '3', title: 'Profile Setup', desc: 'We build your stunning profile in the app', time: '1-2 days' },
                  { step: '4', title: 'Go Live!', desc: 'Your business is live to 500K+ users', time: 'Day 7-14' },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-white/5 rounded-xl text-center">
                    <div className="w-10 h-10 rounded-full bg-[#c9a227] text-black font-bold flex items-center justify-center mx-auto mb-3">
                      {item.step}
                    </div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-400 mb-2">{item.desc}</p>
                    <span className="text-xs px-2 py-1 bg-[#c9a227]/20 text-[#c9a227] rounded-full">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-r from-[#c9a227] to-[#d4af37] rounded-2xl p-6 sm:p-8 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-3">Ready to Grow Your Business?</h3>
              <p className="text-black/70 mb-6 max-w-xl mx-auto">
                Join the Nuqta merchant network and start turning every customer into a repeat customer. Zero risk. Zero upfront cost.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/merchant-onboarding"
                  className="flex items-center gap-2 px-8 py-4 bg-black hover:bg-gray-900 text-white font-bold rounded-xl transition-all"
                >
                  <Rocket size={20} />
                  Start Onboarding
                </Link>
                <Link
                  href="/merchant-info"
                  className="flex items-center gap-2 px-8 py-4 bg-white/20 hover:bg-white/30 text-black font-bold rounded-xl transition-all"
                >
                  <FileText size={20} />
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-500 text-sm">
              © 2025 Nuqta. The Merchant Blueprint.
            </div>
            <div className="flex gap-4">
              <Link href="/merchant-playbook" className="text-gray-400 hover:text-[#c9a227] text-sm transition-colors">Category Playbooks</Link>
              <Link href="/merchant-onboarding" className="text-gray-400 hover:text-[#c9a227] text-sm transition-colors">Start Onboarding</Link>
              <Link href="/merchant-info" className="text-gray-400 hover:text-[#c9a227] text-sm transition-colors">Merchant Info</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Trophy icon component (not in lucide-react)
function Trophy({ className, size }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}
