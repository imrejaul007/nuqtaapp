'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Store,
  MapPin,
  Phone,
  Mail,
  User,
  Coffee,
  Scissors,
  Dumbbell,
  Utensils,
  Star,
  Target,
  TrendingUp,
  Clock,
  CheckCircle2,
  Circle,
  AlertCircle,
  ChevronDown,
  ChevronRight,
  Copy,
  Check,
  ExternalLink,
  Instagram,
  Globe,
  DollarSign,
  Users,
  Calendar,
  MessageCircle,
  Sparkles,
  Award,
  Building2
} from 'lucide-react';

interface MerchantLead {
  id: string;
  name: string;
  category: 'cafe' | 'restaurant' | 'salon' | 'gym' | 'retail';
  location: string;
  area: string;
  rating: number;
  reviewCount: string;
  instagram?: string;
  phone?: string;
  email?: string;
  website?: string;
  decisionMaker?: string;
  estimatedTraffic: 'high' | 'medium' | 'low';
  priority: 'hot' | 'warm' | 'cold';
  whyTarget: string[];
  pitchAngle: string;
  status: 'to-contact' | 'contacted' | 'meeting' | 'negotiating' | 'signed' | 'lost';
  notes?: string;
}

const merchantPipeline: MerchantLead[] = [
  // Cafes - Dubai Marina/JBR
  {
    id: 'm1',
    name: 'Urth by Nabz&G',
    category: 'cafe',
    location: 'Dubai Marina Mall',
    area: 'Dubai Marina',
    rating: 4.5,
    reviewCount: '2,500+',
    instagram: '@urthdubai',
    estimatedTraffic: 'high',
    priority: 'hot',
    whyTarget: [
      'High foot traffic location',
      'Premium positioning matches Nuqta brand',
      'Strong social media presence',
      'Health-conscious audience = high repeat rate'
    ],
    pitchAngle: 'Your customers are already loyal - let them earn rewards for it. Track who comes back and reward your best customers.',
    status: 'to-contact',
    notes: 'Popular with fitness crowd - good crossover with gym category'
  },
  {
    id: 'm2',
    name: 'Common Grounds',
    category: 'cafe',
    location: 'JBR Walk',
    area: 'JBR',
    rating: 4.3,
    reviewCount: '1,800+',
    instagram: '@commongroundscoffee',
    estimatedTraffic: 'high',
    priority: 'hot',
    whyTarget: [
      'Prime JBR location',
      'Tourist + resident mix',
      'Multiple visit types (work, social, meals)',
      'Strong brand recognition'
    ],
    pitchAngle: 'JBR has thousands of visitors daily but how many become regulars? Nuqta turns tourists into locals and locals into loyalists.',
    status: 'to-contact'
  },
  {
    id: 'm3',
    name: '% Arabica',
    category: 'cafe',
    location: 'Dubai Mall, City Walk',
    area: 'Downtown/City Walk',
    rating: 4.4,
    reviewCount: '3,000+',
    instagram: '@arababoroasters',
    estimatedTraffic: 'high',
    priority: 'hot',
    whyTarget: [
      'Premium coffee brand',
      'Multiple locations = potential for expansion',
      'Strong Instagram following',
      'Minimalist brand = good visual fit'
    ],
    pitchAngle: 'Your brand doesn\'t do discounts - and neither do we. Nuqta rewards without devaluing your premium positioning.',
    status: 'to-contact',
    notes: 'Start with one location, expand to others'
  },

  // Salons - Marina/JLT
  {
    id: 'm4',
    name: 'Tips & Toes',
    category: 'salon',
    location: 'Dubai Marina Mall',
    area: 'Dubai Marina',
    rating: 4.2,
    reviewCount: '1,200+',
    instagram: '@tipsandtoesdubai',
    website: 'tipsandtoes.com',
    estimatedTraffic: 'high',
    priority: 'hot',
    whyTarget: [
      'Established chain with loyal customers',
      'Regular appointment-based visits',
      'High average ticket value',
      'Multiple services = multiple earning opportunities'
    ],
    pitchAngle: 'Your clients visit monthly for nails, maybe quarterly for spa. Nuqta coins give them reason to come back for both.',
    status: 'to-contact'
  },
  {
    id: 'm5',
    name: 'Sisters Beauty Lounge',
    category: 'salon',
    location: 'JLT Cluster D',
    area: 'JLT',
    rating: 4.4,
    reviewCount: '800+',
    instagram: '@sistersbeautylounge',
    estimatedTraffic: 'medium',
    priority: 'warm',
    whyTarget: [
      'Strong local reputation',
      'Appointment-based = predictable traffic',
      'Good online reviews',
      'Active social media'
    ],
    pitchAngle: 'Your 5-star reviews bring new clients. Nuqta turns those one-time visitors into monthly regulars.',
    status: 'to-contact'
  },

  // Gyms - Marina
  {
    id: 'm6',
    name: 'GymNation',
    category: 'gym',
    location: 'Marina Walk',
    area: 'Dubai Marina',
    rating: 4.1,
    reviewCount: '2,000+',
    website: 'gymnation.ae',
    estimatedTraffic: 'high',
    priority: 'hot',
    whyTarget: [
      'High volume gym chain',
      'Budget-conscious members value rewards',
      'Multiple locations for expansion',
      'Member retention is their key metric'
    ],
    pitchAngle: 'Your members already pay monthly. Give them coins every visit - watch attendance and retention increase.',
    status: 'to-contact',
    notes: 'Corporate HQ decision - may need to pitch to management'
  },
  {
    id: 'm7',
    name: 'Warehouse Gym',
    category: 'gym',
    location: 'Al Quoz',
    area: 'Al Quoz',
    rating: 4.6,
    reviewCount: '1,500+',
    instagram: '@thewarehousegym',
    estimatedTraffic: 'high',
    priority: 'warm',
    whyTarget: [
      'Premium CrossFit/functional fitness',
      'Highly engaged community',
      'Members share on social media',
      'Good for influencer crossover'
    ],
    pitchAngle: 'Your members post every WOD. Imagine if they also posted about earning rewards. Free marketing from happy customers.',
    status: 'to-contact'
  },

  // Restaurants - Downtown/DIFC
  {
    id: 'm8',
    name: 'Opa Dubai',
    category: 'restaurant',
    location: 'Fairmont Hotel',
    area: 'Sheikh Zayed Road',
    rating: 4.3,
    reviewCount: '2,200+',
    instagram: '@opadubai',
    estimatedTraffic: 'high',
    priority: 'warm',
    whyTarget: [
      'Popular venue with high energy',
      'Mix of regulars and special occasion visitors',
      'High average spend',
      'Good for "earn coins on big night out" positioning'
    ],
    pitchAngle: 'Your big spenders are your best customers. Reward them, and they\'ll choose Opa over competitors every time.',
    status: 'to-contact'
  },
  {
    id: 'm9',
    name: 'Tresind Studio',
    category: 'restaurant',
    location: 'DIFC',
    area: 'DIFC',
    rating: 4.7,
    reviewCount: '500+',
    instagram: '@tresindstudio',
    estimatedTraffic: 'medium',
    priority: 'warm',
    whyTarget: [
      'Michelin-recommended',
      'Premium clientele',
      'High ticket value',
      'Exclusive feel matches Nuqta positioning'
    ],
    pitchAngle: 'Your guests expect exceptional. Extend that experience beyond dinner with rewards they can use anywhere.',
    status: 'to-contact',
    notes: 'Premium positioning - may need special partnership terms'
  },

  // Additional Leads
  {
    id: 'm10',
    name: 'The Sum of Us',
    category: 'cafe',
    location: 'Al Quoz',
    area: 'Al Quoz',
    rating: 4.4,
    reviewCount: '3,500+',
    instagram: '@thesumofusdxb',
    estimatedTraffic: 'high',
    priority: 'hot',
    whyTarget: [
      'Cult following in Dubai',
      'Destination cafe - people drive here',
      'All-day dining',
      'Strong brand with engaged community'
    ],
    pitchAngle: 'People drive across Dubai to visit you. Reward that loyalty and they\'ll bring friends.',
    status: 'to-contact'
  },
  {
    id: 'm11',
    name: 'Caffe Nero',
    category: 'cafe',
    location: 'Multiple locations',
    area: 'Various',
    rating: 4.1,
    reviewCount: '1,000+',
    website: 'caffenero.ae',
    estimatedTraffic: 'high',
    priority: 'warm',
    whyTarget: [
      'Multiple locations across Dubai',
      'Daily coffee habit customers',
      'Existing loyalty program may be outdated',
      'High transaction volume'
    ],
    pitchAngle: 'Your customers visit daily. That\'s 250+ visits per year. Are you rewarding them for that loyalty?',
    status: 'to-contact',
    notes: 'Chain HQ - pitch to regional management'
  },
  {
    id: 'm12',
    name: 'The Nails Spa',
    category: 'salon',
    location: 'Marina Walk',
    area: 'Dubai Marina',
    rating: 4.5,
    reviewCount: '600+',
    instagram: '@thenailsspa',
    estimatedTraffic: 'medium',
    priority: 'warm',
    whyTarget: [
      'Nails = regular appointments',
      'Good reviews',
      'Marina location = high-income clientele',
      'Service-based = relationship with clients'
    ],
    pitchAngle: 'Your clients come every 2-3 weeks. That\'s 20+ visits a year. Reward their loyalty, not just their first visit.',
    status: 'to-contact'
  }
];

const categoryIcons: Record<string, React.ElementType> = {
  cafe: Coffee,
  restaurant: Utensils,
  salon: Scissors,
  gym: Dumbbell,
  retail: Store,
};

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  cafe: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30' },
  restaurant: { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/30' },
  salon: { bg: 'bg-pink-500/10', text: 'text-pink-400', border: 'border-pink-500/30' },
  gym: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
  retail: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30' },
};

const priorityColors: Record<string, { bg: string; text: string }> = {
  hot: { bg: 'bg-red-500/20', text: 'text-red-400' },
  warm: { bg: 'bg-amber-500/20', text: 'text-amber-400' },
  cold: { bg: 'bg-blue-500/20', text: 'text-blue-400' },
};

const statusColors: Record<string, { bg: string; text: string; icon: React.ElementType }> = {
  'to-contact': { bg: 'bg-slate-500/20', text: 'text-slate-400', icon: Circle },
  'contacted': { bg: 'bg-blue-500/20', text: 'text-blue-400', icon: MessageCircle },
  'meeting': { bg: 'bg-purple-500/20', text: 'text-purple-400', icon: Calendar },
  'negotiating': { bg: 'bg-amber-500/20', text: 'text-amber-400', icon: Clock },
  'signed': { bg: 'bg-green-500/20', text: 'text-green-400', icon: CheckCircle2 },
  'lost': { bg: 'bg-red-500/20', text: 'text-red-400', icon: AlertCircle },
};

export default function MerchantPipelinePage() {
  const [expandedMerchant, setExpandedMerchant] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterPriority, setFilterPriority] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ['all', 'cafe', 'restaurant', 'salon', 'gym', 'retail'];
  const priorities = ['all', 'hot', 'warm', 'cold'];

  const filteredMerchants = merchantPipeline.filter(m => {
    const matchesCategory = filterCategory === 'all' || m.category === filterCategory;
    const matchesPriority = filterPriority === 'all' || m.priority === filterPriority;
    return matchesCategory && matchesPriority;
  });

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
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
            <span className="text-slate-400">Merchant Pipeline</span>
          </div>
          <Link
            href="/merchant-acquisition"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="text-sm">Acquisition</span>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/30 mb-4">
            <Target className="text-green-400" size={16} />
            <span className="text-green-400 text-sm font-medium">First 10 Merchants</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Pilot Merchant Pipeline</h1>
          <p className="text-slate-400">Priority targets for launch in Dubai Marina, JBR, Downtown</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {categories.slice(1).map(cat => {
            const colors = categoryColors[cat];
            const Icon = categoryIcons[cat];
            const count = merchantPipeline.filter(m => m.category === cat).length;
            return (
              <div
                key={cat}
                onClick={() => setFilterCategory(filterCategory === cat ? 'all' : cat)}
                className={`${colors.bg} rounded-xl p-4 border ${colors.border} text-center cursor-pointer transition-all hover:scale-105 ${filterCategory === cat ? 'ring-2 ring-white/50' : ''}`}
              >
                <Icon className={`${colors.text} mx-auto mb-2`} size={24} />
                <div className="text-xl font-bold text-white">{count}</div>
                <div className="text-slate-400 text-xs capitalize">{cat}s</div>
              </div>
            );
          })}
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-6">
          <div className="flex gap-2">
            <span className="text-slate-400 text-sm py-2">Priority:</span>
            {priorities.map(priority => (
              <button
                key={priority}
                onClick={() => setFilterPriority(priority)}
                className={`px-3 py-1 rounded-lg text-sm transition-all ${
                  filterPriority === priority
                    ? 'bg-[#c9a227] text-black font-medium'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10'
                }`}
              >
                {priority === 'all' ? 'All' : priority.charAt(0).toUpperCase() + priority.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Pipeline Legend */}
        <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-6">
          <div className="flex flex-wrap gap-4">
            {Object.entries(statusColors).map(([status, colors]) => {
              const Icon = colors.icon;
              return (
                <div key={status} className="flex items-center gap-2">
                  <div className={`p-1 rounded ${colors.bg}`}>
                    <Icon className={colors.text} size={14} />
                  </div>
                  <span className="text-slate-400 text-xs capitalize">{status.replace('-', ' ')}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Merchant List */}
        <div className="space-y-4">
          {filteredMerchants.map((merchant, index) => {
            const catColors = categoryColors[merchant.category];
            const CatIcon = categoryIcons[merchant.category];
            const priorityColor = priorityColors[merchant.priority];
            const statusColor = statusColors[merchant.status];
            const StatusIcon = statusColor.icon;
            const isExpanded = expandedMerchant === merchant.id;

            return (
              <div
                key={merchant.id}
                className={`rounded-xl border ${catColors.border} overflow-hidden`}
              >
                <button
                  onClick={() => setExpandedMerchant(isExpanded ? null : merchant.id)}
                  className={`w-full p-4 flex items-center justify-between ${catColors.bg} hover:bg-white/5 transition-all text-left`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <span className="text-3xl font-bold text-white">#{index + 1}</span>
                    </div>
                    <div className="w-px h-12 bg-white/10" />
                    <div className={`w-12 h-12 rounded-xl ${catColors.bg} border ${catColors.border} flex items-center justify-center`}>
                      <CatIcon className={catColors.text} size={24} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-white font-bold text-lg">{merchant.name}</h3>
                        <span className={`px-2 py-0.5 text-xs rounded ${priorityColor.bg} ${priorityColor.text} uppercase font-bold`}>
                          {merchant.priority}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="flex items-center gap-1 text-slate-400 text-sm">
                          <MapPin size={12} />
                          {merchant.area}
                        </span>
                        <span className="flex items-center gap-1 text-amber-400 text-sm">
                          <Star size={12} />
                          {merchant.rating} ({merchant.reviewCount})
                        </span>
                        <div className={`flex items-center gap-1 px-2 py-0.5 rounded ${statusColor.bg}`}>
                          <StatusIcon className={statusColor.text} size={12} />
                          <span className={`${statusColor.text} text-xs capitalize`}>{merchant.status.replace('-', ' ')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`${catColors.text} transition-transform ${isExpanded ? 'rotate-90' : ''}`} size={20} />
                </button>

                {isExpanded && (
                  <div className="p-4 border-t border-white/10 bg-black/20 space-y-4">
                    {/* Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <span className="text-slate-400 text-sm font-medium">Location</span>
                        <p className="text-white flex items-center gap-2">
                          <MapPin size={14} className="text-slate-500" />
                          {merchant.location}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <span className="text-slate-400 text-sm font-medium">Estimated Traffic</span>
                        <p className={`capitalize ${
                          merchant.estimatedTraffic === 'high' ? 'text-green-400' :
                          merchant.estimatedTraffic === 'medium' ? 'text-amber-400' : 'text-slate-400'
                        }`}>
                          {merchant.estimatedTraffic} foot traffic
                        </p>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3">
                      {merchant.instagram && (
                        <a
                          href={`https://instagram.com/${merchant.instagram.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-1.5 bg-pink-500/20 text-pink-400 rounded-lg text-sm hover:bg-pink-500/30 transition-all"
                        >
                          <Instagram size={14} />
                          {merchant.instagram}
                          <ExternalLink size={12} />
                        </a>
                      )}
                      {merchant.website && (
                        <a
                          href={`https://${merchant.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 text-blue-400 rounded-lg text-sm hover:bg-blue-500/30 transition-all"
                        >
                          <Globe size={14} />
                          Website
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>

                    {/* Why Target */}
                    <div>
                      <span className="text-slate-400 text-sm font-medium">Why Target This Merchant</span>
                      <ul className="mt-2 space-y-1">
                        {merchant.whyTarget.map((reason, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                            <CheckCircle2 className="text-green-400 flex-shrink-0 mt-0.5" size={14} />
                            {reason}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pitch Angle */}
                    <div className="bg-gradient-to-r from-[#c9a227]/20 to-amber-500/10 rounded-lg p-4 border border-[#c9a227]/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[#c9a227] text-sm font-bold uppercase flex items-center gap-2">
                          <Sparkles size={14} />
                          Pitch Angle
                        </span>
                        <button
                          onClick={() => copyToClipboard(merchant.pitchAngle, merchant.id)}
                          className="p-1.5 bg-white/10 rounded hover:bg-white/20"
                        >
                          {copiedId === merchant.id ? (
                            <Check className="text-green-400" size={14} />
                          ) : (
                            <Copy className="text-slate-400" size={14} />
                          )}
                        </button>
                      </div>
                      <p className="text-white italic">&quot;{merchant.pitchAngle}&quot;</p>
                    </div>

                    {/* Notes */}
                    {merchant.notes && (
                      <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/30">
                        <span className="text-blue-400 text-xs font-bold uppercase">Notes</span>
                        <p className="text-slate-300 text-sm mt-1">{merchant.notes}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Area Strategy */}
        <div className="mt-12 bg-gradient-to-r from-[#c9a227]/20 to-amber-500/20 rounded-xl p-6 border border-[#c9a227]/30">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <MapPin className="text-[#c9a227]" size={20} />
            Geographic Strategy: Start Small, Expand Smart
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/20 rounded-lg p-4">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <Award className="text-amber-400" size={16} />
                Phase 1: Dubai Marina
              </h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• High-density residential</li>
                <li>• Young professionals</li>
                <li>• Walkable lifestyle</li>
                <li>• Target: 3-4 merchants</li>
              </ul>
            </div>
            <div className="bg-black/20 rounded-lg p-4">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <Award className="text-amber-400" size={16} />
                Phase 1: JBR
              </h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Tourist + resident mix</li>
                <li>• Beachfront lifestyle</li>
                <li>• High spend per visit</li>
                <li>• Target: 2-3 merchants</li>
              </ul>
            </div>
            <div className="bg-black/20 rounded-lg p-4">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <Award className="text-amber-400" size={16} />
                Phase 2: Downtown/DIFC
              </h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Business professionals</li>
                <li>• Premium positioning</li>
                <li>• Lunch + after-work crowd</li>
                <li>• Target: 2-3 merchants</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Outreach Cadence */}
        <div className="mt-8 bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Calendar className="text-purple-400" size={20} />
            Outreach Cadence
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold flex-shrink-0">1</div>
              <div>
                <h4 className="text-white font-bold">Day 1: Initial Contact</h4>
                <p className="text-slate-400 text-sm">Visit in person during off-peak. Ask for owner/manager. Leave info if not available.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold flex-shrink-0">2</div>
              <div>
                <h4 className="text-white font-bold">Day 3: Follow-up</h4>
                <p className="text-slate-400 text-sm">Call or WhatsApp to schedule proper meeting. Send one-pager.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold flex-shrink-0">3</div>
              <div>
                <h4 className="text-white font-bold">Day 5-7: Demo Meeting</h4>
                <p className="text-slate-400 text-sm">Show app, explain merchant dashboard, discuss terms.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold flex-shrink-0">4</div>
              <div>
                <h4 className="text-white font-bold">Day 10-14: Close</h4>
                <p className="text-slate-400 text-sm">Send contract, schedule onboarding, install materials.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
