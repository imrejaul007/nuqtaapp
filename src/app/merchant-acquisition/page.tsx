'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Store,
  CheckCircle2,
  Circle,
  Phone,
  MapPin,
  Clock,
  DollarSign,
  Target,
  Zap,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Users,
  MessageCircle,
  Star,
  AlertTriangle,
  FileText,
  Calendar,
  Trophy,
  TrendingUp,
  Coffee,
  Utensils,
  Building2
} from 'lucide-react';

export default function MerchantAcquisitionPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>('pitch');

  // Target Areas for Restaurants
  const targetAreas = [
    { area: 'Business Bay', restaurants: '200+', priority: 1, reason: 'High foot traffic, professionals' },
    { area: 'Al Barsha', restaurants: '150+', priority: 2, reason: 'Diverse cuisine, residential' },
    { area: 'Deira', restaurants: '300+', priority: 3, reason: 'High volume, price-sensitive' },
    { area: 'JBR', restaurants: '100+', priority: 4, reason: 'Tourist + resident mix' },
    { area: 'Downtown', restaurants: '150+', priority: 5, reason: 'Premium segment' },
  ];

  // Daily Visit Schedule
  const dailySchedule = [
    { time: '10:00-11:00', activity: 'Prepare: Research restaurants, print materials', location: 'Office' },
    { time: '11:00-13:00', activity: 'Visit 3 restaurants (pre-lunch)', location: 'Target Area 1' },
    { time: '13:00-14:00', activity: 'Lunch break + follow-up calls', location: 'Flexible' },
    { time: '14:00-16:00', activity: 'Visit 3 restaurants (afternoon)', location: 'Target Area 2' },
    { time: '16:00-17:00', activity: 'Follow-up emails, update tracker', location: 'Office' },
    { time: '17:00-18:00', activity: 'Evening calls to decision makers', location: 'Office' },
  ];

  // Pitch Script
  const pitchScript = {
    opening: `"Hi, I am [Name] from Nuqta. We are a new cashback app launching in Dubai. I noticed your restaurant and think your customers would love earning rewards here. Do you have 2 minutes?"`,
    problem: `"Most restaurants struggle with two things: getting new customers and keeping them coming back. Marketing is expensive and loyalty cards don't work."`,
    solution: `"Nuqta solves this. When customers pay through our app, they get instant cashback. This means: 1) They are more likely to choose you, 2) They come back more often, 3) You only pay when they actually buy."`,
    offer: `"We are launching with a special deal for founding restaurants: Free to join, just 15% commission on Nuqta transactions. No monthly fees, no setup costs. Plus, we will feature you to our users."`,
    close: `"Can I show you a quick demo? It takes 30 seconds to see how it works."`,
    objectionHandlers: [
      { objection: 'We already have a loyalty program', response: 'Great! Nuqta complements existing programs. Your customers get double rewards - yours AND cashback. More incentive to visit.' },
      { objection: '15% is too high', response: 'Think of it as marketing cost with guaranteed ROI. You only pay when customers actually buy. Compare that to ads where you pay for clicks, not sales.' },
      { objection: 'We need to think about it', response: 'Totally understand. Can I leave you our one-pager? And would it help if I showed you a case study from another restaurant using Nuqta?' },
      { objection: 'We are too busy right now', response: 'No problem. When is a better time to chat? I can come back at a quieter hour, or we can do a quick call.' },
    ]
  };

  // Merchant Acquisition Tracker
  const acquisitionStages = [
    { stage: 'Visited', count: 0, target: 30, color: 'gray' },
    { stage: 'Interested', count: 0, target: 15, color: 'yellow' },
    { stage: 'Demo Given', count: 0, target: 12, color: 'blue' },
    { stage: 'Docs Sent', count: 0, target: 10, color: 'purple' },
    { stage: 'Signed', count: 0, target: 10, color: 'green' },
  ];

  // What to Bring
  const visitChecklist = [
    { item: 'Nuqta one-pager (printed)', quantity: '10 copies', status: 'required' },
    { item: 'Business cards', quantity: '20 cards', status: 'required' },
    { item: 'Phone with demo app', quantity: '1', status: 'required' },
    { item: 'Tablet for presentation', quantity: '1', status: 'optional' },
    { item: 'Merchant sign-up QR code', quantity: '5 printed', status: 'required' },
    { item: 'Case study printout', quantity: '5 copies', status: 'required' },
  ];

  // Restaurant Value Proposition
  const restaurantBenefits = [
    { benefit: 'Zero Upfront Cost', desc: 'No setup fees, no monthly charges', icon: DollarSign },
    { benefit: 'Pay Only on Sales', desc: '15% commission only when customers buy', icon: Target },
    { benefit: 'New Customers', desc: 'We drive Nuqta users to your door', icon: Users },
    { benefit: 'Higher Retention', desc: 'Cashback brings them back again', icon: TrendingUp },
    { benefit: 'Free Marketing', desc: 'Featured in app to all users', icon: Star },
    { benefit: 'Easy Integration', desc: 'QR code setup in 10 minutes', icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <header className="bg-[#0a1628]/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/marketing-dashboard" className="text-gray-400 hover:text-white transition-colors">
                <ArrowLeft size={24} />
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-blue-400">First 10 Merchants Playbook</h1>
                <p className="text-gray-400 text-sm">Restaurant-First Strategy | CEO + BDA</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Signed:</span>
              <span className="text-2xl font-bold text-white">0</span>
              <span className="text-gray-400">/10</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Why Restaurants First */}
        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-500/30 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Utensils className="text-blue-400" size={32} />
            <h2 className="text-2xl font-bold text-white">Why Restaurants First?</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-blue-400 font-bold mb-1">High Frequency</div>
              <div className="text-gray-400 text-sm">People eat out 3-5x/week. More transactions = more data.</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-blue-400 font-bold mb-1">Easy Demo</div>
              <div className="text-gray-400 text-sm">Quick coffee purchase to show how it works.</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-blue-400 font-bold mb-1">Social Proof</div>
              <div className="text-gray-400 text-sm">Restaurant photos make great content.</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-blue-400 font-bold mb-1">Good Margins</div>
              <div className="text-gray-400 text-sm">60-70% margins can absorb 15% commission.</div>
            </div>
          </div>
        </div>

        {/* Acquisition Funnel */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
          <h3 className="text-xl font-bold text-white mb-4">Acquisition Funnel</h3>
          <div className="flex items-center justify-between mb-4">
            {acquisitionStages.map((stage, idx) => (
              <React.Fragment key={idx}>
                <div className="text-center flex-1">
                  <div className={`w-16 h-16 rounded-full mx-auto mb-2 flex items-center justify-center font-bold text-lg ${
                    stage.color === 'green' ? 'bg-green-500/20 text-green-400 border-2 border-green-500/50' :
                    stage.color === 'blue' ? 'bg-blue-500/20 text-blue-400 border-2 border-blue-500/50' :
                    stage.color === 'purple' ? 'bg-purple-500/20 text-purple-400 border-2 border-purple-500/50' :
                    stage.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400 border-2 border-yellow-500/50' :
                    'bg-gray-500/20 text-gray-400 border-2 border-gray-500/50'
                  }`}>
                    {stage.count}
                  </div>
                  <div className="text-white text-sm font-medium">{stage.stage}</div>
                  <div className="text-gray-500 text-xs">Target: {stage.target}</div>
                </div>
                {idx < acquisitionStages.length - 1 && (
                  <ChevronRight className="text-gray-600 flex-shrink-0" size={24} />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="text-center text-gray-400 text-sm">
            Visit 30 → Interest 15 (50%) → Demo 12 (80%) → Docs 10 (83%) → Signed 10 (100%)
          </div>
        </div>

        {/* Target Areas */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <MapPin className="text-red-400" size={24} />
            Target Areas (Priority Order)
          </h3>
          <div className="space-y-3">
            {targetAreas.map((area, idx) => (
              <div key={idx} className="bg-white/5 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    area.priority === 1 ? 'bg-red-500/20 text-red-400' :
                    area.priority === 2 ? 'bg-orange-500/20 text-orange-400' :
                    area.priority === 3 ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {area.priority}
                  </div>
                  <div>
                    <div className="text-white font-bold">{area.area}</div>
                    <div className="text-gray-400 text-sm">{area.reason}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[#c9a227] font-bold">{area.restaurants}</div>
                  <div className="text-gray-500 text-xs">restaurants</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Schedule */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Clock className="text-[#c9a227]" size={24} />
            Daily Visit Schedule (CEO + BDA)
          </h3>
          <div className="space-y-2">
            {dailySchedule.map((slot, idx) => (
              <div key={idx} className="bg-white/5 rounded-lg p-3 flex items-center gap-4">
                <div className="w-24 text-[#c9a227] font-mono text-sm">{slot.time}</div>
                <div className="flex-1">
                  <div className="text-white text-sm">{slot.activity}</div>
                </div>
                <div className="text-gray-500 text-xs">{slot.location}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-[#c9a227]/10 rounded-lg p-3 border border-[#c9a227]/30">
            <div className="text-[#c9a227] font-bold text-sm">Daily Target: Visit 6 restaurants, Get 2 interested</div>
          </div>
        </div>

        {/* Pitch Script */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
          <button
            onClick={() => setExpandedSection(expandedSection === 'pitch' ? null : 'pitch')}
            className="w-full flex items-center justify-between"
          >
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <MessageCircle className="text-green-400" size={24} />
              The Pitch Script (Memorize This)
            </h3>
            {expandedSection === 'pitch' ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
          </button>

          {expandedSection === 'pitch' && (
            <div className="mt-6 space-y-4">
              <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                <div className="text-green-400 font-bold text-sm mb-2">1. OPENING (10 seconds)</div>
                <p className="text-gray-300 italic">{pitchScript.opening}</p>
              </div>

              <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/30">
                <div className="text-yellow-400 font-bold text-sm mb-2">2. PROBLEM (15 seconds)</div>
                <p className="text-gray-300 italic">{pitchScript.problem}</p>
              </div>

              <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
                <div className="text-blue-400 font-bold text-sm mb-2">3. SOLUTION (30 seconds)</div>
                <p className="text-gray-300 italic">{pitchScript.solution}</p>
              </div>

              <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/30">
                <div className="text-purple-400 font-bold text-sm mb-2">4. OFFER (15 seconds)</div>
                <p className="text-gray-300 italic">{pitchScript.offer}</p>
              </div>

              <div className="bg-[#c9a227]/10 rounded-lg p-4 border border-[#c9a227]/30">
                <div className="text-[#c9a227] font-bold text-sm mb-2">5. CLOSE (Ask for the demo)</div>
                <p className="text-gray-300 italic">{pitchScript.close}</p>
              </div>

              {/* Objection Handlers */}
              <div className="mt-6">
                <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                  <AlertTriangle className="text-orange-400" size={20} />
                  Common Objections & Responses
                </h4>
                <div className="space-y-3">
                  {pitchScript.objectionHandlers.map((item, idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-4">
                      <div className="text-red-400 font-bold text-sm mb-1">Objection: &quot;{item.objection}&quot;</div>
                      <div className="text-green-400 text-sm">Response: &quot;{item.response}&quot;</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* What to Bring */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <FileText className="text-purple-400" size={24} />
            Visit Checklist - What to Bring
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {visitChecklist.map((item, idx) => (
              <div key={idx} className={`flex items-center justify-between p-3 rounded-lg ${
                item.status === 'required' ? 'bg-red-500/10 border border-red-500/30' : 'bg-white/5'
              }`}>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border-2 border-gray-500 flex-shrink-0"></div>
                  <span className="text-white">{item.item}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm">{item.quantity}</span>
                  {item.status === 'required' && (
                    <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded">Required</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Restaurant Benefits */}
        <div className="bg-gradient-to-r from-[#c9a227]/20 to-yellow-500/20 rounded-xl p-6 border border-[#c9a227]/30 mb-8">
          <h3 className="text-xl font-bold text-[#c9a227] mb-4">What Restaurants Get (Sell These Benefits)</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {restaurantBenefits.map((item, idx) => (
              <div key={idx} className="bg-white/5 rounded-lg p-4">
                <item.icon className="text-[#c9a227] mb-2" size={24} />
                <div className="text-white font-bold mb-1">{item.benefit}</div>
                <div className="text-gray-400 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Trophy className="text-yellow-400" size={24} />
            Success Metrics
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-white mb-1">6</div>
              <div className="text-gray-400 text-sm">Visits/day</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-white mb-1">33%</div>
              <div className="text-gray-400 text-sm">Interest rate</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-white mb-1">67%</div>
              <div className="text-gray-400 text-sm">Close rate</div>
            </div>
            <div className="bg-green-500/20 rounded-lg p-4 text-center border border-green-500/30">
              <div className="text-3xl font-bold text-green-400 mb-1">10</div>
              <div className="text-green-400 text-sm">7-Day Target</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-500/30">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Ready to Hit the Streets?</h3>
              <p className="text-gray-400">Your first merchant visit starts NOW.</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/sales-kit"
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-colors"
              >
                <FileText size={20} />
                Sales Materials
              </Link>
              <Link
                href="/marketing-dashboard"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-colors"
              >
                <Store size={20} />
                Back to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 mt-12">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>Merchant Acquisition Playbook | Nuqta 2026</p>
        </div>
      </footer>
    </div>
  );
}
