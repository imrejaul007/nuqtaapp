'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Users,
  Store,
  Megaphone,
  FileText,
  Camera,
  QrCode,
  Gift,
  Star,
  CheckCircle2,
  Circle,
  Clock,
  DollarSign,
  Target,
  Zap,
  Building2,
  Ticket,
  Music,
  Coffee,
  Scissors,
  Dumbbell,
  ShoppingBag,
  Printer,
  Image,
  Video,
  Flag,
  Trophy,
  Heart,
  Sparkles
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

/**
 * OFFLINE MARKETING PLAYBOOK
 * Complete guide for events, flyers, mall activations, and physical marketing
 */

// Event types and templates
const eventTypes = [
  {
    id: 'flea-market',
    name: 'Flea Market / Pop-up',
    icon: Store,
    color: 'orange',
    budget: 'AED 2,000-5,000',
    reach: '500-2,000 people',
    bestFor: 'Brand awareness, app downloads, merchant partnerships',
    frequency: 'Monthly',
    examples: ['Ripe Market', 'Night Market Dubai', 'JBR Beach Market'],
    setup: [
      'Book booth (2x2m minimum)',
      'Branded backdrop (roll-up banner)',
      'Table with Nuqta tablecloth',
      'iPad for demos',
      'QR codes for downloads',
      'Giveaways (branded items)',
      'Flyers (500 minimum)'
    ],
    staffing: '2-3 people per shift',
    kpis: ['App downloads', 'QR scans', 'Merchant signups', 'Email captures']
  },
  {
    id: 'mall-activation',
    name: 'Mall Activation',
    icon: Building2,
    color: 'blue',
    budget: 'AED 5,000-15,000',
    reach: '2,000-10,000 people',
    bestFor: 'Mass awareness, premium positioning, merchant demos',
    frequency: 'Quarterly',
    examples: ['Dubai Mall', 'Mall of Emirates', 'City Centre Deira', 'Circle Mall JVC'],
    setup: [
      'Premium booth (3x3m)',
      'LED screen for video loop',
      'Interactive demo stations (2-3)',
      'Photo opportunity corner',
      'Prize wheel / gamification',
      'Branded merchandise giveaways',
      'Professional staff uniforms'
    ],
    staffing: '4-6 people per shift',
    kpis: ['Foot traffic', 'App downloads', 'Social shares', 'Email captures', 'Merchant leads']
  },
  {
    id: 'university',
    name: 'University Campaign',
    icon: Users,
    color: 'purple',
    budget: 'AED 1,000-3,000',
    reach: '500-3,000 students',
    bestFor: 'Student acquisition, ambassador recruitment, viral potential',
    frequency: 'Per semester (2x/year)',
    examples: ['AUS', 'UAEU', 'Heriot-Watt', 'Middlesex Dubai', 'Murdoch Dubai'],
    setup: [
      'Portable booth/table',
      'Student-focused messaging',
      'Free coffee/snacks partnership',
      'Student discount cards',
      'Ambassador signup forms',
      'Instagram photo props'
    ],
    staffing: '2-3 people (ideally student ambassadors)',
    kpis: ['Student signups', 'Ambassador applications', 'Social tags', 'Referral codes activated']
  },
  {
    id: 'merchant-event',
    name: 'Merchant Launch Event',
    icon: Ticket,
    color: 'gold',
    budget: 'AED 3,000-8,000',
    reach: '100-500 people',
    bestFor: 'Partner celebration, PR opportunity, influencer content',
    frequency: 'Per major partner',
    examples: ['Restaurant soft launch', 'Salon grand opening', 'Gym partnership kickoff'],
    setup: [
      'Co-branded signage',
      'Photographer/videographer',
      'Influencer invitations',
      'Press release ready',
      'Special launch offer',
      'Live social posting'
    ],
    staffing: '3-4 people',
    kpis: ['Media coverage', 'Social impressions', 'Influencer posts', 'First-day transactions']
  },
  {
    id: 'sports-event',
    name: 'Sports & Fitness Event',
    icon: Dumbbell,
    color: 'green',
    budget: 'AED 2,000-5,000',
    reach: '500-5,000 people',
    bestFor: 'Health-conscious audience, gym partnerships',
    frequency: 'Monthly (during fitness season)',
    examples: ['Dubai Fitness Challenge', 'Color Run', 'Community yoga', 'Beach workouts'],
    setup: [
      'Branded tent/gazebo',
      'Hydration station sponsorship',
      'Fitness partner presence',
      'Recovery zone with offers',
      'Photo finish line'
    ],
    staffing: '3-4 people',
    kpis: ['App downloads', 'Fitness partner signups', 'Social shares']
  }
];

// Print collateral specifications
const printCollateral = [
  {
    id: 'flyer-a5',
    name: 'A5 Flyer',
    size: '148 x 210 mm',
    purpose: 'Mass distribution at events, cafes, gyms',
    quantity: '1,000-5,000 per batch',
    cost: 'AED 150-300 per 1,000',
    design: {
      front: [
        'Nuqta logo (top center)',
        'Bold headline: "Earn Rewards Everywhere"',
        'App screenshot (mockup)',
        'QR code to download',
        '3 key benefits with icons',
        'Gold & black color scheme'
      ],
      back: [
        'How it works (3 steps)',
        'Partner logos (5-10)',
        'Social handles',
        'Website URL',
        'Limited time offer (if applicable)'
      ]
    },
    distribution: ['Events', 'Partner stores', 'University boards', 'Gym reception']
  },
  {
    id: 'poster-a3',
    name: 'A3 Poster',
    size: '297 x 420 mm',
    purpose: 'In-store display, event backdrops',
    quantity: '100-500 per batch',
    cost: 'AED 200-400 per 100',
    design: {
      content: [
        'Large Nuqta logo',
        'Hero image (happy customer)',
        'Primary message: "Pay. Earn. Enjoy."',
        'Large QR code',
        'Partner section (if co-branded)',
        'Contact info'
      ]
    },
    distribution: ['Partner store windows', 'Mall notice boards', 'University campuses']
  },
  {
    id: 'rollup-banner',
    name: 'Roll-up Banner',
    size: '85 x 200 cm',
    purpose: 'Events, activations, merchant stores',
    quantity: '5-10 banners',
    cost: 'AED 150-250 each',
    design: {
      content: [
        'Full-height Nuqta branding',
        'App mockup',
        'Key message',
        'QR code at eye level',
        'Partner logos at bottom'
      ]
    },
    distribution: ['All events', 'Partner stores', 'Office reception']
  },
  {
    id: 'table-tent',
    name: 'Table Tent',
    size: '10 x 15 cm',
    purpose: 'Restaurant tables, cafe counters',
    quantity: '500-2,000 per batch',
    cost: 'AED 100-200 per 500',
    design: {
      content: [
        'Front: "Scan to Earn Coins"',
        'QR code',
        'Back: "How to Earn" (3 steps)',
        'Partner-specific offer'
      ]
    },
    distribution: ['Partner restaurants', 'Cafes', 'Salons waiting areas']
  },
  {
    id: 'sticker-qr',
    name: 'QR Code Sticker',
    size: '5 x 5 cm',
    purpose: 'POS terminals, doors, mirrors',
    quantity: '1,000-5,000 per batch',
    cost: 'AED 50-100 per 1,000',
    design: {
      content: [
        'Nuqta logo mini',
        'QR code',
        '"Scan & Earn" text',
        'Waterproof/durable material'
      ]
    },
    distribution: ['Every partner POS', 'Store entrances', 'Mirrors (salons)', 'Gym equipment']
  },
  {
    id: 'merchant-kit',
    name: 'Merchant Welcome Kit',
    contents: ['2x Roll-up banners', '50x Table tents', '100x Stickers', '500x Flyers', 'Training guide'],
    purpose: 'New merchant onboarding',
    quantity: 'Per merchant',
    cost: 'AED 500-800 per kit',
    distribution: ['Delivered to merchant on signup']
  }
];

// Mall activation detailed guide
const mallActivationGuide = {
  timeline: [
    { week: -4, task: 'Contact mall management, get pricing', owner: 'BDA' },
    { week: -3, task: 'Negotiate terms, sign contract', owner: 'CEO' },
    { week: -3, task: 'Book booth location (high traffic area)', owner: 'BDA' },
    { week: -2, task: 'Design booth layout & graphics', owner: 'Design' },
    { week: -2, task: 'Order all printed materials', owner: 'Marketing' },
    { week: -1, task: 'Recruit & train activation staff', owner: 'HR' },
    { week: -1, task: 'Prepare giveaways & prizes', owner: 'Marketing' },
    { week: 0, task: 'Setup booth (day before)', owner: 'Team' },
    { week: 0, task: 'Run activation (3-7 days)', owner: 'All' },
    { week: 1, task: 'Analyze results, follow up leads', owner: 'Marketing' }
  ],
  boothLayout: {
    size: '3m x 3m minimum',
    zones: [
      { name: 'Welcome Zone', items: ['Reception table', 'Greeters', 'Flyers'] },
      { name: 'Demo Zone', items: ['iPads (3)', 'Screen showing app', 'Staff for demos'] },
      { name: 'Photo Zone', items: ['Branded backdrop', 'Props', 'Ring light'] },
      { name: 'Prize Zone', items: ['Prize wheel', 'Giveaway table', 'Winner board'] }
    ]
  },
  staffRoles: [
    { role: 'Booth Manager', qty: 1, responsibility: 'Overall coordination, problem solving' },
    { role: 'Greeters', qty: 2, responsibility: 'Attract visitors, hand out flyers' },
    { role: 'Demo Specialists', qty: 2, responsibility: 'App demos, answer questions' },
    { role: 'Photo/Social', qty: 1, responsibility: 'Take photos, post to social media' }
  ],
  prizes: [
    { prize: 'Grand Prize', value: 'AED 500 shopping voucher', qty: 1 },
    { prize: 'Daily Winner', value: 'AED 100 partner voucher', qty: '1 per day' },
    { prize: 'Instant Win', value: '50 bonus coins', qty: 'Unlimited' },
    { prize: 'Participation', value: 'Branded merchandise', qty: 'Everyone' }
  ]
};

// Budget breakdown
const budgetBreakdown = {
  monthly: 'AED 5,000-10,000',
  breakdown: [
    { item: 'Event booth fees', percentage: 30, amount: 'AED 1,500-3,000' },
    { item: 'Print materials', percentage: 25, amount: 'AED 1,250-2,500' },
    { item: 'Giveaways & prizes', percentage: 20, amount: 'AED 1,000-2,000' },
    { item: 'Staff/temps', percentage: 15, amount: 'AED 750-1,500' },
    { item: 'Miscellaneous', percentage: 10, amount: 'AED 500-1,000' }
  ]
};

export default function OfflineMarketingPage() {
  const [activeTab, setActiveTab] = useState<'events' | 'collateral' | 'mall' | 'budget'>('events');
  const [selectedEvent, setSelectedEvent] = useState<string | null>('flea-market');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2a4a] to-[#0a1628]">
      {/* Header */}
      <header className="bg-[#0a1628]/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6">
          <div className="flex items-center gap-4">
            <Link href="/marketing-hub" className="text-gray-400 hover:text-white transition-colors">
              <ArrowLeft size={24} />
            </Link>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <MapPin className="text-orange-400" size={24} />
                Offline Marketing Playbook
              </h1>
              <p className="text-gray-400 text-sm">Events, Flyers, Mall Activations & Physical Marketing</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-[#0a1628]/80 backdrop-blur-sm border-b border-white/10 sticky top-[72px] sm:top-[88px] z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-2">
            {[
              { id: 'events', label: 'Event Types', icon: Calendar },
              { id: 'collateral', label: 'Print Collateral', icon: Printer },
              { id: 'mall', label: 'Mall Activation Guide', icon: Building2 },
              { id: 'budget', label: 'Budget & ROI', icon: DollarSign },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-3 sm:px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all flex items-center gap-2 text-sm ${
                  activeTab === tab.id
                    ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <tab.icon size={16} />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
        {/* Event Types */}
        {activeTab === 'events' && (
          <div className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Event List */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white mb-4">Event Types</h3>
                {eventTypes.map((event) => (
                  <button
                    key={event.id}
                    onClick={() => setSelectedEvent(event.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      selectedEvent === event.id
                        ? 'bg-orange-500/20 border-orange-500/50'
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        event.color === 'orange' ? 'bg-orange-500/20 text-orange-400' :
                        event.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                        event.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                        event.color === 'green' ? 'bg-green-500/20 text-green-400' :
                        'bg-[#c9a227]/20 text-[#c9a227]'
                      }`}>
                        <event.icon size={20} />
                      </div>
                      <div>
                        <div className="text-white font-medium">{event.name}</div>
                        <div className="text-gray-400 text-sm">{event.budget}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Event Details */}
              <div className="lg:col-span-2">
                {selectedEvent && (() => {
                  const event = eventTypes.find(e => e.id === selectedEvent);
                  if (!event) return null;
                  return (
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                          event.color === 'orange' ? 'bg-orange-500/20 text-orange-400' :
                          event.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                          event.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                          event.color === 'green' ? 'bg-green-500/20 text-green-400' :
                          'bg-[#c9a227]/20 text-[#c9a227]'
                        }`}>
                          <event.icon size={28} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{event.name}</h3>
                          <p className="text-gray-400">{event.bestFor}</p>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4 mb-6">
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-gray-400 text-sm mb-1">Budget</div>
                          <div className="text-white font-bold">{event.budget}</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-gray-400 text-sm mb-1">Reach</div>
                          <div className="text-white font-bold">{event.reach}</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-gray-400 text-sm mb-1">Frequency</div>
                          <div className="text-white font-bold">{event.frequency}</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-gray-400 text-sm mb-1">Staffing</div>
                          <div className="text-white font-bold">{event.staffing}</div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-white font-bold mb-3">Example Venues</h4>
                        <div className="flex flex-wrap gap-2">
                          {event.examples.map((ex, i) => (
                            <span key={i} className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm">
                              {ex}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-white font-bold mb-3">Setup Checklist</h4>
                        <div className="space-y-2">
                          {event.setup.map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <Circle className="text-gray-500 flex-shrink-0" size={14} />
                              <span className="text-gray-300 text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-white font-bold mb-3">KPIs to Track</h4>
                        <div className="flex flex-wrap gap-2">
                          {event.kpis.map((kpi, i) => (
                            <span key={i} className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                              {kpi}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        )}

        {/* Print Collateral */}
        {activeTab === 'collateral' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {printCollateral.map((item) => (
                <div key={item.id} className="bg-white/5 rounded-xl p-5 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#c9a227]/20 rounded-lg flex items-center justify-center">
                      {item.id === 'flyer-a5' && <FileText className="text-[#c9a227]" size={24} />}
                      {item.id === 'poster-a3' && <Image className="text-[#c9a227]" size={24} />}
                      {item.id === 'rollup-banner' && <Flag className="text-[#c9a227]" size={24} />}
                      {item.id === 'table-tent' && <Coffee className="text-[#c9a227]" size={24} />}
                      {item.id === 'sticker-qr' && <QrCode className="text-[#c9a227]" size={24} />}
                      {item.id === 'merchant-kit' && <Gift className="text-[#c9a227]" size={24} />}
                    </div>
                    <div>
                      <h3 className="text-white font-bold">{item.name}</h3>
                      <p className="text-gray-400 text-sm">{item.size || 'Complete kit'}</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-400">Purpose:</span>
                      <span className="text-gray-300 ml-2">{item.purpose}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Quantity:</span>
                      <span className="text-gray-300 ml-2">{item.quantity}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Cost:</span>
                      <span className="text-green-400 ml-2 font-medium">{item.cost}</span>
                    </div>
                  </div>

                  {item.design && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-2">Design Elements</h4>
                      <div className="space-y-1">
                        {(item.design.front || item.design.content || []).slice(0, 3).map((el, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="text-green-400 flex-shrink-0 mt-0.5" size={12} />
                            <span className="text-gray-300 text-xs">{el}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.contents && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-2">Kit Contents</h4>
                      <div className="space-y-1">
                        {item.contents.map((c, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="text-green-400 flex-shrink-0 mt-0.5" size={12} />
                            <span className="text-gray-300 text-xs">{c}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-4">
                    <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-2">Distribution</h4>
                    <div className="flex flex-wrap gap-1">
                      {item.distribution.map((d, i) => (
                        <span key={i} className="bg-white/10 text-gray-400 px-2 py-0.5 rounded text-xs">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Order Summary */}
            <div className="bg-[#c9a227]/10 rounded-xl p-6 border border-[#c9a227]/30">
              <h3 className="text-[#c9a227] font-bold mb-4">Recommended First Order</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-black/20 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-white">2,000</div>
                  <div className="text-gray-400 text-sm">A5 Flyers</div>
                  <div className="text-green-400 text-xs">~AED 250</div>
                </div>
                <div className="bg-black/20 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-white">5</div>
                  <div className="text-gray-400 text-sm">Roll-up Banners</div>
                  <div className="text-green-400 text-xs">~AED 750</div>
                </div>
                <div className="bg-black/20 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-white">500</div>
                  <div className="text-gray-400 text-sm">Table Tents</div>
                  <div className="text-green-400 text-xs">~AED 100</div>
                </div>
                <div className="bg-black/20 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-white">2,000</div>
                  <div className="text-gray-400 text-sm">QR Stickers</div>
                  <div className="text-green-400 text-xs">~AED 100</div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="text-gray-400">Total First Order: </span>
                <span className="text-white font-bold text-xl">~AED 1,200</span>
              </div>
            </div>
          </div>
        )}

        {/* Mall Activation Guide */}
        {activeTab === 'mall' && (
          <div className="space-y-6">
            {/* Timeline */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Calendar className="text-blue-400" size={24} />
                Mall Activation Timeline
              </h3>
              <div className="space-y-3">
                {mallActivationGuide.timeline.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                    <div className={`w-16 text-center font-bold ${
                      item.week < 0 ? 'text-yellow-400' : item.week === 0 ? 'text-green-400' : 'text-blue-400'
                    }`}>
                      {item.week === 0 ? 'Event' : `Week ${item.week}`}
                    </div>
                    <div className="flex-1 text-white">{item.task}</div>
                    <div className="text-gray-400 text-sm">{item.owner}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Booth Layout */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Building2 className="text-purple-400" size={20} />
                  Booth Layout ({mallActivationGuide.boothLayout.size})
                </h3>
                <div className="space-y-4">
                  {mallActivationGuide.boothLayout.zones.map((zone, idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-4">
                      <h4 className="text-white font-medium mb-2">{zone.name}</h4>
                      <div className="flex flex-wrap gap-2">
                        {zone.items.map((item, i) => (
                          <span key={i} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Users className="text-green-400" size={20} />
                  Staff Roles
                </h3>
                <div className="space-y-3">
                  {mallActivationGuide.staffRoles.map((role, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 font-bold text-sm">
                        {role.qty}
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium">{role.role}</div>
                        <div className="text-gray-400 text-sm">{role.responsibility}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Prizes */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-yellow-500/20 rounded-xl p-6 border border-[#c9a227]/30">
              <h3 className="text-lg font-bold text-[#c9a227] mb-4 flex items-center gap-2">
                <Trophy size={20} />
                Prize Structure
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {mallActivationGuide.prizes.map((prize, idx) => (
                  <div key={idx} className="bg-black/20 rounded-lg p-4 text-center">
                    <div className="text-[#c9a227] font-bold mb-1">{prize.prize}</div>
                    <div className="text-white">{prize.value}</div>
                    <div className="text-gray-400 text-sm">Qty: {prize.qty}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Budget & ROI */}
        {activeTab === 'budget' && (
          <div className="space-y-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <DollarSign className="text-green-400" size={24} />
                Monthly Offline Marketing Budget: {budgetBreakdown.monthly}
              </h3>
              <div className="space-y-4">
                {budgetBreakdown.breakdown.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white">{item.item}</span>
                      <span className="text-gray-400">{item.amount}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-green-500 to-emerald-400 h-3 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <div className="text-right text-xs text-gray-500 mt-1">{item.percentage}%</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ROI Expectations */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-xl p-5 border border-green-500/30">
                <div className="text-gray-400 text-sm mb-1">Cost per App Download</div>
                <div className="text-2xl font-bold text-white">AED 5-10</div>
                <div className="text-green-400 text-sm">At events & activations</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-xl p-5 border border-blue-500/30">
                <div className="text-gray-400 text-sm mb-1">Merchant Leads per Event</div>
                <div className="text-2xl font-bold text-white">5-15</div>
                <div className="text-blue-400 text-sm">Qualified merchant contacts</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-xl p-5 border border-purple-500/30">
                <div className="text-gray-400 text-sm mb-1">Brand Impressions</div>
                <div className="text-2xl font-bold text-white">10,000+</div>
                <div className="text-purple-400 text-sm">Per mall activation</div>
              </div>
            </div>

            {/* Quarterly Plan */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4">Quarterly Offline Marketing Calendar</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-gray-400 text-sm">
                      <th className="pb-3">Month</th>
                      <th className="pb-3">Event 1</th>
                      <th className="pb-3">Event 2</th>
                      <th className="pb-3">Budget</th>
                    </tr>
                  </thead>
                  <tbody className="text-white">
                    <tr className="border-t border-white/5">
                      <td className="py-3 font-medium">Month 1</td>
                      <td className="py-3">Flea Market (AED 2K)</td>
                      <td className="py-3">University Visit (AED 1K)</td>
                      <td className="py-3 text-green-400">AED 5,000</td>
                    </tr>
                    <tr className="border-t border-white/5">
                      <td className="py-3 font-medium">Month 2</td>
                      <td className="py-3">Mall Activation (AED 8K)</td>
                      <td className="py-3">Merchant Launch (AED 3K)</td>
                      <td className="py-3 text-green-400">AED 12,000</td>
                    </tr>
                    <tr className="border-t border-white/5">
                      <td className="py-3 font-medium">Month 3</td>
                      <td className="py-3">Sports Event (AED 3K)</td>
                      <td className="py-3">2x Flea Markets (AED 4K)</td>
                      <td className="py-3 text-green-400">AED 8,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-right">
                <span className="text-gray-400">Q1 Total: </span>
                <span className="text-white font-bold text-xl">AED 25,000</span>
              </div>
            </div>
          </div>
        )}
      </main>
    <GlobalFooter />
    </div>
  );
}
