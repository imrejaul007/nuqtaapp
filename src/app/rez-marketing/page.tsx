'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Target, Users, Store, TrendingUp, DollarSign,
  Rocket, Megaphone, MapPin, Trophy, BarChart3,
  Instagram, MessageCircle, Video, Globe, Play, Star,
  Share2, Phone, QrCode, GraduationCap, Zap,
  Train, Bus, Utensils, Scissors, Sparkles, Coffee,
  Leaf, Car, Building2, Headphones, FileText
} from 'lucide-react';
import RezHeader from '@/components/RezHeader';
import RezFooter from '@/components/RezFooter';

export default function ReZMarketingIndiaPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'phase1' | 'phase2' | 'phase3' | 'channels' | 'team' | 'budget' | 'customer' | 'media' | 'viral'>('overview');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const tabs: Array<{id: 'overview' | 'phase1' | 'phase2' | 'phase3' | 'channels' | 'team' | 'budget' | 'customer' | 'media' | 'viral', label: string, icon: any}> = [
    { id: 'overview', label: 'Overview', icon: Target },
    { id: 'phase1', label: 'Phase 1 (Months 1-3)', icon: Rocket },
    { id: 'phase2', label: 'Phase 2 (Months 4-6)', icon: TrendingUp },
    { id: 'phase3', label: 'Phase 3 (Months 7-12)', icon: Trophy },
    { id: 'channels', label: 'Marketing Channels', icon: Megaphone },
    { id: 'team', label: 'Team Structure', icon: Users },
    { id: 'budget', label: 'Budget & KPIs', icon: DollarSign },
    { id: 'customer', label: 'Customer Acquisition', icon: Store },
    { id: 'media', label: 'Media House Strategy', icon: Video },
    { id: 'viral', label: 'Viral Growth Channels', icon: Zap },
  ];

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a1f30] to-[#0a1628] text-white">
      <RezHeader />

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">

        {/* Hero Section */}
        <div className="text-center space-y-4 py-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 px-4 py-2 rounded-full border border-orange-500/30">
            <MapPin className="text-orange-400" size={18} />
            <span className="text-orange-400 font-bold">India Market Strategy</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black">
            ReZ <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Marketing Plan</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Appeal-based rewards platform for India: Gamified savings, instant cashback, viral growth
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-lg px-6 py-3">
              <p className="text-2xl font-bold text-orange-400">₹10M+</p>
              <p className="text-sm text-gray-400">Launch Budget</p>
            </div>
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-lg px-6 py-3">
              <p className="text-2xl font-bold text-orange-400">Bangalore</p>
              <p className="text-sm text-gray-400">Launch City</p>
            </div>
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-lg px-6 py-3">
              <p className="text-2xl font-bold text-orange-400">12 Months</p>
              <p className="text-sm text-gray-400">to 100K MAU</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-white/10 sticky top-0 bg-[#0a1628]/95 backdrop-blur-md z-40">
          <div className="flex overflow-x-auto gap-2 py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* India Market Opportunity */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-orange-500/20 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-orange-400 mb-4">India Market Opportunity</h2>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { metric: '₹13L Cr', label: 'Retail Market', icon: Store },
                  { metric: '500M+', label: 'Smartphone Users', icon: Phone },
                  { metric: '450M+', label: 'UPI Payments', icon: QrCode },
                  { metric: '70%', label: 'Cashback Motivation', icon: TrendingUp },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4 text-center">
                    <item.icon className="text-orange-400 mx-auto mb-2" size={24} />
                    <p className="text-xl font-bold text-white">{item.metric}</p>
                    <p className="text-sm text-gray-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ReZ Value Proposition */}
            <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 border border-orange-500/30 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-orange-400 mb-4">ReZ Value Proposition</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    title: 'Appeal-Based Rewards',
                    desc: 'Earn coins by completing micro-tasks: watch ads, play games, complete surveys',
                    icon: Zap,
                    color: 'from-yellow-500/20 to-orange-500/20'
                  },
                  {
                    title: 'Instant Cashback',
                    desc: 'Redeem coins for instant cashback to UPI or bank transfer. No waiting.',
                    icon: DollarSign,
                    color: 'from-green-500/20 to-emerald-500/20'
                  },
                  {
                    title: 'Viral Growth',
                    desc: 'Referral bonuses, leaderboards, social sharing - users bring more users',
                    icon: Share2,
                    color: 'from-purple-500/20 to-pink-500/20'
                  },
                ].map((item, idx) => (
                  <div key={idx} className={`bg-gradient-to-br ${item.color} rounded-lg p-4 border border-white/10`}>
                    <item.icon className="text-orange-400 mb-2" size={28} />
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* GTM Philosophy */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">GTM Philosophy: Hyperlocal First</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    title: '1 City, 1 Category',
                    desc: 'Start with Bangalore → Food delivery. Prove model before expansion',
                    icon: MapPin
                  },
                  {
                    title: 'Density > Breadth',
                    desc: 'Own 50% of a micro-market (Koramangala) before expanding',
                    icon: Store
                  },
                  {
                    title: 'Proven Playbook',
                    desc: 'Replicate Bangalore success to Hyderabad, Pune, Delhi',
                    icon: Play
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4">
                    <item.icon className="text-blue-400 mb-2" size={24} />
                    <h3 className="font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Phase 1 Tab */}
        {activeTab === 'phase1' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 border-2 border-emerald-500/40 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-emerald-300">Phase 1: Bangalore Launch (Months 1-3)</h2>
                  <p className="text-gray-400">Target: 10K MAU • 100 Merchants</p>
                </div>
                <Rocket className="text-emerald-400" size={48} />
              </div>

              <div className="space-y-4">
                {/* Month 1 */}
                <div className="bg-white/5 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('month1')}
                    className="w-full flex items-center justify-between p-4 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-emerald-500 rounded-lg px-3 py-1">Month 1</div>
                      <span className="font-bold">Foundation & First 1K Users</span>
                    </div>
                    <span className="text-gray-400">Target: 1K MAU, 20 Merchants</span>
                  </button>
                  {expandedSection === 'month1' && (
                    <div className="p-4 border-t border-white/10 space-y-3">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-bold text-emerald-400 mb-2">Product & Tech</h4>
                          <ul className="text-sm space-y-1 text-gray-300">
                            <li>Complete app MVP (Android first)</li>
                            <li>UPI integration (Razorpay/PhonePe)</li>
                            <li>Core appeal system live</li>
                            <li>Merchant dashboard basic</li>
                            <li>Referral system functional</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-emerald-400 mb-2">Marketing Actions</h4>
                          <ul className="text-sm space-y-1 text-gray-300">
                            <li>Onboard 20 pilot merchants (Koramangala)</li>
                            <li>50 college ambassadors (5 campuses)</li>
                            <li>Launch Instagram/TikTok accounts</li>
                            <li>First 100 beta users (friends & family)</li>
                            <li>Founder's Circle campaign</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Month 2 */}
                <div className="bg-white/5 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('month2')}
                    className="w-full flex items-center justify-between p-4 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-500 rounded-lg px-3 py-1">Month 2</div>
                      <span className="font-bold">Early Traction</span>
                    </div>
                    <span className="text-gray-400">Target: 3K MAU, 40 Merchants</span>
                  </button>
                  {expandedSection === 'month2' && (
                    <div className="p-4 border-t border-white/10 space-y-3">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-bold text-blue-400 mb-2">Online Marketing</h4>
                          <ul className="text-sm space-y-1 text-gray-300">
                            <li>Meta Ads: ₹2L budget (college audience)</li>
                            <li>20 micro-influencers (5K-20K followers)</li>
                            <li>50 Instagram Reels/TikToks</li>
                            <li>WhatsApp groups (10 communities)</li>
                            <li>First viral challenge campaign</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-blue-400 mb-2">Offline Activation</h4>
                          <ul className="text-sm space-y-1 text-gray-300">
                            <li>20 merchant QR stickers</li>
                            <li>College event sponsorships (5) with 20 popup activities</li>
                            <li>Popup activation at MG Road (malls)</li>
                            <li>Referral contest launch</li>
                            <li>Weekend market activations</li>
                          </ul>
                          <div className="mt-4 bg-orange-500/10 border border-orange-500/20 rounded-lg p-3">
                            <h5 className="font-bold text-orange-400 mb-2">20 Popup Event Activities:</h5>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                              {[
                                'Jewelry', 'Custom t-shirts, hoodies', 'IPL/sports jerseys', 'Perfumes',
                                'Accessories', 'Posters & books', 'Craft items', 'Polaroid images',
                                'Crochet / Mehndi', 'Tops, dresses, kurtas', 'Games stall',
                                'Photo booth with props', 'Custom keychains', 'Temp tattoos & henna',
                                'Phone grips & PopSockets', 'Mini carnival games', 'Free food samples',
                                'Tarot card reading', 'Quick caricatures', 'Express nail art'
                              ].map((activity, idx) => (
                                <div key={idx} className="bg-white/5 rounded px-2 py-1 text-gray-300">
                                  <span className="text-orange-400">{idx + 1}.</span> {activity}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Month 3 */}
                <div className="bg-white/5 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('month3')}
                    className="w-full flex items-center justify-between p-4 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-purple-500 rounded-lg px-3 py-1">Month 3</div>
                      <span className="font-bold">Scale to 10K</span>
                    </div>
                    <span className="text-gray-400">Target: 10K MAU, 100 Merchants</span>
                  </button>
                  {expandedSection === 'month3' && (
                    <div className="p-4 border-t border-white/10 space-y-3">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-bold text-purple-400 mb-2">Growth Acceleration</h4>
                          <ul className="text-sm space-y-1 text-gray-300">
                            <li>Scale winning ads (₹5L budget)</li>
                            <li>50 micro-influencers network</li>
                            <li>Leaderboard & gamification features</li>
                            <li>iOS app launch (if metrics hit)</li>
                            <li>First press coverage</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-purple-400 mb-2">Exit Criteria</h4>
                          <ul className="text-sm space-y-1 text-gray-300">
                            <li>10K+ MAU achieved</li>
                            <li>30%+ D30 retention</li>
                            <li>100+ active merchants</li>
                            <li>CAC &lt; ₹100</li>
                            <li>Average 3 transactions/user/month</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Phase 2 Tab */}
        {activeTab === 'phase2' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/40 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-blue-300">Phase 2: Bangalore Scale (Months 4-6)</h2>
                  <p className="text-gray-400">Target: 30K MAU • 300 Merchants</p>
                </div>
                <TrendingUp className="text-blue-400" size={48} />
              </div>

              <div className="space-y-4">
                {/* Month 4 */}
                <div className="bg-white/5 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('month4')}
                    className="w-full flex items-center justify-between p-4 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-500 rounded-lg px-3 py-1">Month 4</div>
                      <span className="font-bold">Category Expansion</span>
                    </div>
                    <span className="text-gray-400">Target: 15K MAU, 150 Merchants</span>
                  </button>
                  {expandedSection === 'month4' && (
                    <div className="p-4 border-t border-white/10 space-y-3">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-bold text-blue-400 mb-2">New Categories</h4>
                          <ul className="text-sm space-y-1 text-gray-300">
                            <li>Expand to Groceries (BigBasket local stores)</li>
                            <li>Add Salons & Spas category</li>
                            <li>Include Cafe & Bakeries</li>
                            <li>Launch Fashion & Electronics (pilot)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-blue-400 mb-2">Product Features</h4>
                          <ul className="text-sm space-y-1 text-gray-300">
                            <li>Advanced gamification (streaks, badges)</li>
                            <li>Push notifications</li>
                            <li>In-app chat support</li>
                            <li>Merchant analytics dashboard</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Month 5 */}
                <div className="bg-white/5 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('month5')}
                    className="w-full flex items-center justify-between p-4 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-cyan-500 rounded-lg px-3 py-1">Month 5</div>
                      <span className="font-bold">Geographic Expansion</span>
                    </div>
                    <span className="text-gray-400">Target: 20K MAU, 200 Merchants</span>
                  </button>
                  {expandedSection === 'month5' && (
                    <div className="p-4 border-t border-white/10 space-y-3">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-bold text-cyan-400 mb-2">New Zones</h4>
                          <ul className="text-sm space-y-1 text-gray-300">
                            <li>Indiranagar expansion</li>
                            <li>HSR Layout launch</li>
                            <li>Whitefield pilot (IT corridor)</li>
                            <li>Jayanagar (traditional market)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-cyan-400 mb-2">Marketing Scale</h4>
                          <ul className="text-sm space-y-1 text-gray-300">
                            <li>Metro station branding (₹3L)</li>
                            <li>Auto rickshaw branding (₹2L)</li>
                            <li>100 micro-influencers</li>
                            <li>First macro influencer (100K+)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Month 6 */}
                <div className="bg-white/5 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('month6')}
                    className="w-full flex items-center justify-between p-4 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-indigo-500 rounded-lg px-3 py-1">Month 6</div>
                      <span className="font-bold">Market Validation</span>
                    </div>
                    <span className="text-gray-400">Target: 30K MAU, 300 Merchants</span>
                  </button>
                  {expandedSection === 'month6' && (
                    <div className="p-4 border-t border-white/10 space-y-3">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-bold text-indigo-400 mb-2">Validation Metrics</h4>
                          <ul className="text-sm space-y-1 text-gray-300">
                            <li>30K+ MAU in Bangalore</li>
                            <li>35%+ D30 retention</li>
                            <li>CAC &lt; ₹80 (economies of scale)</li>
                            <li>4+ transactions/user/month</li>
                            <li>25% of users from referrals</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-indigo-400 mb-2">Prep for Series A</h4>
                          <ul className="text-sm space-y-1 text-gray-300">
                            <li>Compile investor metrics</li>
                            <li>Create growth case study</li>
                            <li>Plan Hyderabad expansion</li>
                            <li>Build team for scale (5-7 people)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Phase 3 Tab */}
        {activeTab === 'phase3' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-2 border-purple-500/40 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-purple-300">Phase 3: Multi-City Scale (Months 7-12)</h2>
                  <p className="text-gray-400">Target: 100K MAU • 1,000 Merchants</p>
                </div>
                <Trophy className="text-purple-400" size={48} />
              </div>

              <div className="space-y-4">
                {/* Month 7-8 */}
                <div className="bg-white/5 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('month7-8')}
                    className="w-full flex items-center justify-between p-4 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-purple-500 rounded-lg px-3 py-1">Months 7-8</div>
                      <span className="font-bold">Hyderabad Launch</span>
                    </div>
                    <span className="text-gray-400">Target: 50K MAU, 500 Merchants</span>
                  </button>
                  {expandedSection === 'month7-8' && (
                    <div className="p-4 border-t border-white/10 space-y-3">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-bold text-purple-400 mb-2">Hyderabad Strategy</h4>
                          <ul className="text-sm space-y-1 text-gray-300">
                            <li>Replicate Bangalore playbook</li>
                            <li>Start with Gachibowli/HITEC City (IT hub)</li>
                            <li>Target 50 colleges (huge student market)</li>
                            <li>Local team setup (5 people)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-purple-400 mb-2">Marketing Adaptation</h4>
                          <ul className="text-sm space-y-1 text-gray-300">
                            <li>Telugu content & influencers</li>
                            <li>Local partnerships (Tollywood)</li>
                            <li>Tech park activations</li>
                            <li>Metro branding (₹4L budget)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Month 9-10 */}
                <div className="bg-white/5 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('month9-10')}
                    className="w-full flex items-center justify-between p-4 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-pink-500 rounded-lg px-3 py-1">Months 9-10</div>
                      <span className="font-bold">Pune & Chennai</span>
                    </div>
                    <span className="text-gray-400">Target: 75K MAU, 750 Merchants</span>
                  </button>
                  {expandedSection === 'month9-10' && (
                    <div className="p-4 border-t border-white/10 space-y-3">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-bold text-pink-400 mb-2">Pune Launch</h4>
                          <ul className="text-sm space-y-1 text-gray-300">
                            <li>Student-heavy market (3 universities)</li>
                            <li>Start with Kothrud/Hadapsar</li>
                            <li>Marathi content & influencers</li>
                            <li>Local team (3-4 people)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-pink-400 mb-2">Chennai Launch</h4>
                          <ul className="text-sm space-y-1 text-gray-300">
                            <li>Traditional yet tech-savvy market</li>
                            <li>Start with T. Nagar (shopping hub)</li>
                            <li>Tamil content & influencers</li>
                            <li>Film industry partnerships</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Month 11-12 */}
                <div className="bg-white/5 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('month11-12')}
                    className="w-full flex items-center justify-between p-4 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-amber-500 text-black rounded-lg px-3 py-1">Months 11-12</div>
                      <span className="font-bold">100K Milestone & Series A</span>
                    </div>
                    <span className="text-gray-400">Target: 100K MAU, 1,000 Merchants</span>
                  </button>
                  {expandedSection === 'month11-12' && (
                    <div className="p-4 border-t border-white/10 space-y-3">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-bold text-amber-400 mb-2">Year 1 Metrics</h4>
                          <ul className="text-sm space-y-1 text-gray-300">
                            <li>100K+ MAU across 4 cities</li>
                            <li>1,000+ active merchants</li>
                            <li>40%+ D30 retention</li>
                            <li>CAC &lt; ₹60 (national scale)</li>
                            <li>35% from referrals (viral loop)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-amber-400 mb-2">Series A Ready</h4>
                          <ul className="text-sm space-y-1 text-gray-300">
                            <li>Raise $2M-$5M at $25M-$40M valuation</li>
                            <li>Expand to 10 cities (Year 2)</li>
                            <li>Launch B2B SaaS (merchant tools)</li>
                            <li>Build 50+ person team</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Channels Tab */}
        {activeTab === 'channels' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Marketing Channels for India</h2>

              {/* Primary Channels */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-orange-400 mb-4">Primary Channels (First 6 Months)</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    {
                      title: 'College Ambassadors',
                      icon: GraduationCap,
                      desc: '50 students across 5 campuses in Bangalore. Commission-based per referral.',
                      budget: '₹50,000/month',
                      cpl: '₹30-40',
                      roi: 'High',
                      color: 'from-blue-500/20 to-blue-500/5'
                    },
                    {
                      title: 'Meta Ads (FB/IG)',
                      icon: Instagram,
                      desc: 'Target 18-30 age, college students, young professionals. Reels focus.',
                      budget: '₹2-5L/month',
                      cpl: '₹40-60',
                      roi: 'Medium-High',
                      color: 'from-pink-500/20 to-pink-500/5'
                    },
                    {
                      title: 'Micro-Influencers',
                      icon: Users,
                      desc: '5K-50K followers. Regional languages. Barter + cash deals.',
                      budget: '₹1-2L/month',
                      cpl: '₹35-50',
                      roi: 'High',
                      color: 'from-purple-500/20 to-purple-500/5'
                    },
                  ].map((channel, idx) => (
                    <div key={idx} className={`bg-gradient-to-br ${channel.color} rounded-lg p-4 border border-white/10`}>
                      <channel.icon className="text-orange-400 mb-2" size={24} />
                      <h4 className="font-bold text-white mb-2">{channel.title}</h4>
                      <p className="text-sm text-gray-300 mb-3">{channel.desc}</p>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div>
                          <p className="text-gray-400">Budget</p>
                          <p className="font-bold">{channel.budget}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">CPL</p>
                          <p className="font-bold">{channel.cpl}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">ROI</p>
                          <p className="font-bold text-green-400">{channel.roi}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* India-Specific Channels */}
              <div>
                <h3 className="text-lg font-bold text-green-400 mb-4">India-Specific Channels</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'ShareChat / Moj',
                      desc: 'Regional language short video platforms. Huge in Tier 2+ cities.',
                      audience: '150M+ MAU',
                      cost: '₹20-30 CPL',
                      why: 'Mass market penetration'
                    },
                    {
                      title: 'Regional Influencers',
                      desc: 'Tamil, Telugu, Kannada, Marathi creators. Regional resonance.',
                      audience: 'State-specific',
                      cost: '₹10-30K per post',
                      why: 'Cultural relevance'
                    },
                    {
                      title: 'College Events',
                      desc: 'Fests, sponsorships, activation booths at major universities.',
                      audience: 'Students (18-25)',
                      cost: '₹50K-2L per event',
                      why: 'High concentration of target users'
                    },
                    {
                      title: 'UPI Integration',
                      desc: 'Leverage PhonePe, Paytm user bases. Co-marketing opportunities.',
                      audience: '450M+ UPI users',
                      cost: 'Partnership fees',
                      why: 'Native payment behavior'
                    },
                  ].map((channel, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 rounded-lg p-4 border border-green-500/20">
                      <h4 className="font-bold text-white mb-2">{channel.title}</h4>
                      <p className="text-sm text-gray-300 mb-2">{channel.desc}</p>
                      <div className="flex gap-4 text-xs">
                        <div>
                          <span className="text-gray-400">Audience: </span>
                          <span className="text-green-400">{channel.audience}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Cost: </span>
                          <span className="text-green-400">{channel.cost}</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-400 mt-2">Why: {channel.why}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Team Tab */}
        {activeTab === 'team' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Team Structure for India Market</h2>

              {/* Launch Team */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-emerald-400 mb-4">Launch Team (Months 1-3) - 3-4 People</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      role: 'India Country Lead',
                      salary: '₹80,000-100,000',
                      responsibilities: ['Overall India strategy', 'Team building', 'Investor relations', 'Strategic partnerships'],
                      skills: ['Startup exp', 'Local market knowledge', 'Leadership']
                    },
                    {
                      role: 'Growth Lead',
                      salary: '₹50,000-70,000',
                      responsibilities: ['User acquisition strategy', 'Campaign management', 'College ambassador program', 'Influencer partnerships'],
                      skills: ['Performance marketing', 'College networks', 'Data analysis']
                    },
                    {
                      role: 'Content Creator (Hindi/English)',
                      salary: '₹35,000-50,000',
                      responsibilities: ['Reels/TikTok creation', 'Social media posts', 'Influencer coordination', 'Merchant content'],
                      skills: ['Video editing', 'Social media', 'Bilingual']
                    },
                    {
                      role: 'Merchant Acquisition',
                      salary: '₹30,000-45,000',
                      responsibilities: ['Merchant visits', 'Onboarding', 'QR deployment', 'Relationship management'],
                      skills: ['Sales', 'Communication', 'Local knowledge']
                    },
                  ].map((member, idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <h4 className="font-bold text-white mb-2">{member.role}</h4>
                      <p className="text-sm text-orange-400 mb-2">{member.salary}/month</p>
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs text-gray-400">Responsibilities:</p>
                          <ul className="text-xs text-gray-300">
                            {member.responsibilities.map((r, i) => <li key={i}>• {r}</li>)}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Skills:</p>
                          <div className="flex flex-wrap gap-1">
                            {member.skills.map((s, i) => (
                              <span key={i} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">{s}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scale Team */}
              <div>
                <h3 className="text-lg font-bold text-blue-400 mb-4">Scale Team (Months 4-12) - 8-12 People</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { role: 'City Head (Bangalore)', salary: '₹70,000-90,000', focus: 'Bangalore operations' },
                    { role: 'City Head (Hyderabad)', salary: '₹70,000-90,000', focus: 'Hyderabad launch & ops' },
                    { role: 'Performance Marketer', salary: '₹40,000-60,000', focus: 'Paid ads optimization' },
                    { role: 'Community Manager', salary: '₹25,000-35,000', focus: 'Social media & WhatsApp' },
                    { role: 'Customer Support Lead', salary: '₹30,000-45,000', focus: 'User support (multi-lingual)' },
                    { role: 'Merchant Success', salary: '₹35,000-50,000', focus: 'Merchant retention' },
                  ].map((member, idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <h4 className="font-bold text-white text-sm mb-1">{member.role}</h4>
                      <p className="text-xs text-blue-400 mb-1">{member.salary}/month</p>
                      <p className="text-xs text-gray-400">{member.focus}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total Cost */}
              <div className="mt-8 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg p-4 border border-orange-500/20">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-400">Launch Team Cost (Months 1-3)</p>
                    <p className="text-2xl font-bold text-orange-400">₹2-2.5L/month</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Scale Team Cost (Months 4-12)</p>
                    <p className="text-2xl font-bold text-orange-400">₹5-6L/month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Budget Tab */}
        {activeTab === 'budget' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Budget & KPIs</h2>

              {/* Year 1 Budget */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-orange-400 mb-4">Year 1 Budget: ₹10 Million</h3>
                <div className="space-y-4">
                  {[
                    { phase: 'Months 1-3', budget: '₹2.5M', breakdown: ['Team: ₹0.6M', 'Marketing: ₹1.5M', 'Tech/Tools: ₹0.3M', 'Operations: ₹0.1M'] },
                    { phase: 'Months 4-6', budget: '₹3M', breakdown: ['Team: ₹1.5M', 'Marketing: ₹1.2M', 'Tech/Tools: ₹0.2M', 'Operations: ₹0.1M'] },
                    { phase: 'Months 7-9', budget: '₹2.5M', breakdown: ['Team: ₹1.5M', 'Marketing: ₹0.8M', 'Tech/Tools: ₹0.15M', 'Operations: ₹0.05M'] },
                    { phase: 'Months 10-12', budget: '₹2M', breakdown: ['Team: ₹1.5M', 'Marketing: ₹0.4M', 'Tech/Tools: ₹0.08M', 'Operations: ₹0.02M'] },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-bold text-white">{item.phase}</h4>
                        <p className="text-xl font-bold text-orange-400">{item.budget}</p>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                        {item.breakdown.map((b, i) => (
                          <div key={i} className="bg-white/5 rounded px-2 py-1 text-gray-300">{b}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Marketing Budget Allocation */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-blue-400 mb-4">Marketing Budget Breakdown (₹5M Total)</h3>
                <div className="space-y-3">
                  {[
                    { channel: 'Meta Ads (FB/IG)', budget: '₹1.5M (30%)', cpl: '₹40-60', users: '25K-37K' },
                    { channel: 'Micro-Influencers', budget: '₹1M (20%)', cpl: '₹35-50', users: '20K-28K' },
                    { channel: 'College Ambassadors', budget: '₹0.5M (10%)', cpl: '₹30-40', users: '12K-16K' },
                    { channel: 'Content Production', budget: '₹0.75M (15%)', cpl: 'N/A', users: 'N/A (brand)' },
                    { channel: 'Offline Ads (Metro/Auto)', budget: '₹0.75M (15%)', cpl: '₹50-70', users: '10K-15K' },
                    { channel: 'Events & PR', budget: '₹0.5M (10%)', cpl: '₹60-80', users: '6K-8K' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-white/5 rounded-lg p-3 border border-white/10">
                      <div>
                        <p className="font-bold text-white">{item.channel}</p>
                        <p className="text-sm text-gray-400">CPL: {item.cpl} • Expected users: {item.users}</p>
                      </div>
                      <p className="text-lg font-bold text-blue-400">{item.budget}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* KPIs by Phase */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-purple-400 mb-4">KPIs by Phase</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left p-3 text-gray-400">Metric</th>
                        <th className="text-center p-3 text-emerald-400">Month 3</th>
                        <th className="text-center p-3 text-blue-400">Month 6</th>
                        <th className="text-center p-3 text-purple-400">Month 12</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { metric: 'MAU', m3: '10K', m6: '30K', m12: '100K' },
                        { metric: 'Merchants', m3: '100', m6: '300', m12: '1,000' },
                        { metric: 'D30 Retention', m3: '30%', m6: '35%', m12: '40%' },
                        { metric: 'CAC', m3: '₹100', m6: '₹80', m12: '₹60' },
                        { metric: 'Avg Transactions/User/Month', m3: '3', m6: '3.5', m12: '4' },
                        { metric: 'Referral %', m3: '20%', m6: '25%', m12: '35%' },
                        { metric: 'GMV', m3: '₹65L', m6: '₹3.9Cr', m12: '₹52Cr' },
                        { metric: 'Revenue', m3: '₹6.5L', m6: '₹39L', m12: '₹5.2Cr' },
                      ].map((row, idx) => (
                        <tr key={idx} className="border-b border-white/5">
                          <td className="p-3 font-medium text-white">{row.metric}</td>
                          <td className="p-3 text-center text-emerald-400">{row.m3}</td>
                          <td className="p-3 text-center text-blue-400">{row.m6}</td>
                          <td className="p-3 text-center text-purple-400">{row.m12}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Metrics to Watch */}
              <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-lg p-4 border border-red-500/20">
                <h3 className="text-lg font-bold text-red-400 mb-3">Key Metrics to Watch (Kill Switches)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { metric: 'D7 Retention &lt; 15%', action: 'Pause acquisition, fix onboarding' },
                    { metric: 'D30 Retention &lt; 25%', action: 'Re-evaluate value prop' },
                    { metric: 'CAC &gt; ₹150 (Month 3)', action: 'Cut expensive channels, focus on organic' },
                    { metric: 'Merchant churn &gt; 30%', action: 'Improve merchant tools/support' },
                    { metric: 'Referral rate &lt; 15%', action: 'Fix referral mechanics' },
                    { metric: 'Avg transactions &lt; 2/month', action: 'Improve app engagement' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/5 rounded p-3">
                      <p className="font-bold text-white">{item.metric}</p>
                      <p className="text-sm text-gray-400">{item.action}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Customer Acquisition Tab */}
        {activeTab === 'customer' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-800/20 border-2 border-emerald-500/40 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-emerald-300">Roadside Vendor Acquisition Strategy</h2>
                  <p className="text-gray-400">B2B2C Model: Bulk buying → Better margins → Extra cashback for customers</p>
                </div>
                <Store className="text-emerald-400" size={48} />
              </div>

              <div className="space-y-6">
                {/* The Problem */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h3 className="font-bold text-white mb-3">The Problem</h3>
                  <ul className="text-sm space-y-2 text-gray-300">
                    <li>• <span className="text-red-400">Roadside vendors have thin margins (10-15%)</span></li>
                    <li>• No bargaining power with suppliers</li>
                    <li>• Can't offer competitive prices</li>
                    <li>• Cashflow constraints limit inventory</li>
                    <li>• Need to compete with organized retail</li>
                  </ul>
                </div>

                {/* The Solution */}
                <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/10 rounded-lg p-4 border border-emerald-500/30">
                  <h3 className="font-bold text-emerald-300 mb-3">The ReZ Solution</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-xl font-bold text-white mb-2">Bulk Purchasing</p>
                      <p className="text-sm text-gray-300">ReZ buys inventory at bulk rates → Pass savings to vendors</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-white mb-2">Zero Inventory Cost</p>
                      <p className="text-sm text-gray-300">Vendors stock our items → No upfront payment required</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-white mb-2">Extra Cashback</p>
                      <p className="text-sm text-gray-300">Vendors offer 2-5% extra cashback on ReZ payments</p>
                    </div>
                  </div>
                </div>

                {/* How It Works */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h3 className="font-bold text-white mb-3">How It Works</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <div>
                        <p className="font-medium text-white">ReZ Approaches Vendor</p>
                        <p className="text-sm text-gray-400">Pitch bulk buying at 20-30% below market</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <div>
                        <p className="font-medium text-white">Vendor Stocks ReZ Items</p>
                        <p className="text-sm text-gray-400">No payment, inventory on consignment</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <div>
                        <p className="font-medium text-white">Customers Pay via ReZ</p>
                        <p className="text-sm text-gray-400">Get 2-5% extra cashback from vendor</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">4</span>
                      </div>
                      <div>
                        <p className="font-medium text-white">Vendor Wins Loyalty</p>
                        <p className="text-sm text-gray-400">Repeat customers → Better data → More cashback offers</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vendor Categories to Target */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h3 className="font-bold text-white mb-3">Roadside Business Types in Bangalore</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                    {[
                      'Food Stalls (chaat, momos, dosa, rolls)',
                      'Fruit Sellers (banana, mango, grapes, papaya)',
                      'Vegetable Sellers (tomato, onion, potato, spinach)',
                      'Tea Stalls (chai, filter coffee, snacks)',
                      'Flower Shops (garlands, bouquets, rose)',
                      'Coconut Sellers (tender coconut water)',
                      'Flower Pot Sellers (indoor plants, succulents)',
                      'Juice/Sharbat Stalls (sugarcane, fresh juices)',
                      'Street Snacks (chips, namkeen, popcorn, bhel)',
                      'Sweet Shops (mithai, jalebi, lassi, falooda)',
                      'Egg Sellers (egg stalls)',
                      'Chicken/Meat Shops (fresh chicken, mutton)',
                      'Fish Sellers (wet markets, karimeena)',
                      'Dairy Shops (milk, curd, paneer, ghee)',
                      'Bakeries (bread, buns, biscuits, puffs)',
                      'General Stores (kirana, daily needs)',
                      'Tobacco/Pan Shops (small retail)',
                      'Mobile Recharge (all operators)',
                      'Stationery (small items, pens, notebooks)',
                      'Grocery Kiranas (all household needs)',
                      'Chai Points (adda + breakfast items)',
                      'Breakfast Stalls (idli, vada, upma)',
                      'Paan Shops (betel leaf preparation)',
                      'Panipuri Stalls (small snacks)',
                    ].map((category, idx) => (
                      <div key={idx} className="bg-emerald-500/10 rounded px-2 py-1 text-emerald-300">
                        <span className="text-orange-400">•</span> {category}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits for Each Stakeholder */}
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-lg p-4 border border-blue-500/30">
                  <h3 className="font-bold text-blue-300 mb-3">Benefits for Each Stakeholder</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="font-bold text-white mb-2">🏪 Vendors</p>
                      <ul className="text-sm space-y-1 text-gray-300">
                        <li>• Better margins (10-15% vs 2-3%)</li>
                        <li>• No inventory cost</li>
                        <li>• Zero payment upfront</li>
                        <li>• Free branding materials</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-white mb-2">👥 Customers</p>
                      <ul className="text-sm space-y-1 text-gray-300">
                        <li>• 2-5% extra cashback</li>
                        <li>• Digital payments (UPI)</li>
                        <li>• Loyalty points on every purchase</li>
                        <li>• Trusted, verified vendors</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-white mb-2">💰 ReZ</p>
                      <ul className="text-sm space-y-1 text-gray-300">
                        <li>• Merchant acquisition at 0 cost</li>
                        <li>• Transaction revenue on every payment</li>
                        <li>• B2B data from daily operations</li>
                        <li>• Viral loops at neighborhood level</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Team Structure for Roadside Acquisition */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h3 className="font-bold text-white mb-3">Independent Roadside Acquisition Team</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      {
                        role: 'Team Lead (Roadside)',
                        salary: '₹50,000-60,000',
                        responsibilities: ['Overall vendor acquisition strategy', 'Bulk purchasing negotiations', 'Vendor relationships', 'Quality control'],
                        teamSize: '3-4 people'
                      },
                      {
                        role: 'Field Executives (2-3)',
                        salary: '₹30,000-40,000',
                        responsibilities: ['Daily vendor visits (10-15/day)', 'New vendor onboarding', 'Product delivery', 'Inventory management'],
                        teamSize: '6-8 people'
                      },
                      {
                        role: 'Warehouse Manager',
                        salary: '₹25,000-35,000',
                        responsibilities: ['Inventory storage', 'Order fulfillment', 'Quality checks', 'Distribution coordination'],
                        teamSize: '1 person'
                      },
                    ].map((member, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <p className="font-bold text-white text-sm">{member.role}</p>
                        <p className="text-xs text-emerald-400 mb-2">{member.salary}/month</p>
                        <ul className="text-xs text-gray-400 space-y-1">
                          {member.responsibilities.map((r, i) => <li key={i}>• {r}</li>)}
                        </ul>
                        <p className="text-xs text-gray-500 mt-2">Team: {member.teamSize}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rollout Strategy */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h3 className="font-bold text-white mb-3">Rollout Strategy</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-emerald-400">Phase 1 (Months 1-2): Pilot in 2 neighborhoods</p>
                      <p className="text-sm text-gray-400">Koramangala + Indiranagar → 50 vendors → Validate model</p>
                    </div>
                    <div>
                      <p className="font-medium text-blue-400">Phase 2 (Months 3-4): Expand to 10 neighborhoods</p>
                      <p className="text-sm text-gray-400">Full Bangalore South → 200 vendors → Optimize operations</p>
                    </div>
                    <div>
                      <p className="font-medium text-purple-400">Phase 3 (Months 5-6): Scale across Bangalore</p>
                      <p className="text-sm text-gray-400">All major zones → 500 vendors → City dominance</p>
                    </div>
                    <div>
                      <p className="font-bold text-orange-400 mt-4">Target by Month 6:</p>
                      <p className="text-sm text-gray-400">500 roadside vendors • 25K daily active customers • ₹50L+ daily GMV</p>
                    </div>
                  </div>
                </div>

                {/* Budget for Roadside Team */}
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-4 border border-emerald-500/20">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-xs text-gray-400">Team Cost (6 months)</p>
                      <p className="text-xl font-bold text-white">₹15-18L</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Inventory Investment</p>
                      <p className="text-xl font-bold text-white">₹5-8L</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Expected Revenue</p>
                      <p className="text-xl font-bold text-emerald-400">₹8-12L</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">ROI Target</p>
                      <p className="text-xl font-bold text-emerald-400">6-8 months</p>
                    </div>
                  </div>
                </div>

                {/* Key Metrics to Track */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h3 className="font-bold text-white mb-3">Key Metrics to Track</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { metric: 'Active Vendors', target: '500 by Month 6', current: '50 by Month 2', unit: 'vendors' },
                      { metric: 'Daily Orders', target: '25K by Month 6', current: '5K by Month 2', unit: 'orders' },
                      { metric: 'Average Order Value', target: '₹200', current: '₹150', unit: 'per order' },
                      { metric: 'Vendor Retention', target: '80% by Month 6', current: '90% by Month 2', unit: '%' },
                      { metric: 'Customer Retention', target: '60% by Month 6', current: '70% by Month 2', unit: '%' },
                      { metric: 'Repayment Rate', target: '95% on time', current: '98% by Month 2', unit: '%' },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white/5 rounded p-3 border border-white/10">
                        <p className="font-bold text-white">{item.metric}</p>
                        <p className="text-sm text-gray-400">Target: {item.target}</p>
                        <p className="text-sm text-emerald-400">Current: {item.current}</p>
                        <p className="text-xs text-gray-500">Unit: {item.unit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Media House Strategy */}
        {activeTab === 'media' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-2 border-purple-500/40 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-purple-300">Media House Strategy: Niche Content Teams</h2>
                  <p className="text-gray-400">Dedicated content teams for each business category → Reviews, testimonials, social media</p>
                </div>
                <Video className="text-purple-400" size={48} />
              </div>

              <div className="space-y-6">
                {/* Concept Overview */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h3 className="font-bold text-white mb-3">The Concept</h3>
                  <p className="text-sm text-gray-300 mb-3">Each niche has a dedicated 2-3 person media house team that:</p>
                  <ul className="text-sm space-y-2 text-gray-300">
                    <li>• <span className="text-purple-400">Visits businesses daily</span> (3-4 hours on-site)</li>
                    <li>• <span className="text-purple-400">Creates content</span> (photos, videos, reviews, offers)</li>
                    <li>• <span className="text-purple-400">Documents products/services</span> on ReZ platform</li>
                    <li>• <span className="text-purple-400">Manages social media</span> for business owners</li>
                    <li>• <span className="text-purple-400">Collects testimonials</span> from happy customers</li>
                    <li>• <span className="text-purple-400">Packages as monthly retainer</span> for recurring content</li>
                  </ul>
                </div>

                {/* 10 Niche Teams */}
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-lg p-4 border border-purple-500/30">
                  <h3 className="font-bold text-purple-300 mb-4">10 Niche Media House Teams</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      {
                        niche: 'Food & Restaurants',
                        services: ['Food photography', 'Menu digitization', 'Review collection', 'Social media posts', 'Reel content creation', 'Offer campaigns', 'Recipe tutorials', 'Behind-the-scenes'],
                        icon: 'Utensils',
                        teamSize: '3 people',
                        monthlyKPIs: '500 pieces content, 20 reviews, 15 videos, 10 offers',
                        businessKPIs: '20% more orders, 15% social engagement, 4.8 star rating'
                      },
                      {
                        niche: 'Beauty & Salons',
                        services: ['Before/After photos', 'Service showcases', 'Styling tutorials', 'Product reviews', 'Makeup tutorials', 'Seasonal trends', 'Consultation content'],
                        icon: 'Scissors',
                        teamSize: '2 people',
                        monthlyKPIs: '400 pieces content, 15 reviews, 10 videos, 8 offers',
                        businessKPIs: '25% more bookings, 20% social engagement, 4.7 star rating'
                      },
                      {
                        niche: 'Fashion & Clothing',
                        services: ['Outfit shoots', 'Size guides', 'Lookbooks', 'Product reviews', 'Seasonal collections', 'Influencer partnerships', 'Styling tips'],
                        icon: 'TrendingUp',
                        teamSize: '3 people',
                        monthlyKPIs: '600 pieces content, 20 reviews, 20 videos, 12 offers',
                        businessKPIs: '18% more sales, 25% social engagement, 4.5 star rating'
                      },
                      {
                        niche: 'Jewelry & Accessories',
                        services: ['Product photography', 'Gemstone education', 'Lifestyle shoots', 'Product reviews', 'Styling videos', 'Jewelry care tips', 'Customization content'],
                        icon: 'Sparkles',
                        teamSize: '2 people',
                        monthlyKPIs: '300 pieces content, 10 reviews, 8 videos, 6 offers',
                        businessKPIs: '15% more sales, 18% social engagement, 4.3 star rating'
                      },
                      {
                        niche: 'Sweets & Bakeries',
                        services: ['Food styling', 'Packaging design', 'Behind-the-scenes', 'Recipe tutorials', 'Product reviews', 'Festival content', 'Offer campaigns'],
                        icon: 'Coffee',
                        teamSize: '2 people',
                        monthlyKPIs: '350 pieces content, 12 reviews, 8 videos, 10 offers',
                        businessKPIs: '12% more orders, 22% social engagement, 4.6 star rating'
                      },
                      {
                        niche: 'Fruits & Vegetables',
                        services: ['Farm-to-table stories', 'Quality certification', 'Healthy eating education', 'Product reviews', 'Seasonal highlights', 'Recipe ideas', 'Sourcing content'],
                        icon: 'Leaf',
                        teamSize: '2 people',
                        monthlyKPIs: '400 pieces content, 10 reviews, 6 videos, 8 offers',
                        businessKPIs: '22% more orders, 18% social engagement, 4.4 star rating'
                      },
                      {
                        niche: 'Tea & Coffee',
                        services: ['Cafe ambience photos', 'Brew guides', 'Chai culture content', 'Latte art', 'Menu digitization', 'Customer testimonials', 'Offer campaigns'],
                        icon: 'Coffee',
                        teamSize: '2 people',
                        monthlyKPIs: '450 pieces content, 15 reviews, 10 videos, 12 offers',
                        businessKPIs: '15% more orders, 20% social engagement, 4.8 star rating'
                      },
                      {
                        niche: 'Mobile Recharge',
                        services: ['Plan comparison', 'Recharge tips', 'Network coverage', 'Offer aggregations', 'Data pack content', 'Tutorial videos', 'Customer reviews'],
                        icon: 'Phone',
                        teamSize: '2 people',
                        monthlyKPIs: '400 pieces content, 10 reviews, 8 videos, 12 offers',
                        businessKPIs: '10% more top-ups, 15% social engagement, 4.2 star rating'
                      },
                      {
                        niche: 'Grocery & Kirana',
                        services: ['Store tours', 'Product highlights', 'Deals compilation', 'Community stories', 'Inventory management', 'Customer service', 'Loyalty programs'],
                        icon: 'Store',
                        teamSize: '3 people',
                        monthlyKPIs: '600 pieces content, 20 reviews, 15 videos, 12 offers',
                        businessKPIs: '25% more orders, 18% social engagement, 4.8 star rating'
                      },
                      {
                        niche: 'General Stores',
                        services: ['Store branding', 'Inventory systems', 'Customer service', 'Loyalty programs', 'Offer campaigns', 'Promotional content', 'Staff training'],
                        icon: 'Building2',
                        teamSize: '2 people',
                        monthlyKPIs: '500 pieces content, 20 reviews, 10 videos, 12 offers',
                        businessKPIs: '20% more footfall, 15% social engagement, 4.5 star rating'
                      },
                      {
                        niche: 'Auto/Transport',
                        services: ['Showcase content', 'Feature videos', 'Maintenance tips', 'Service reviews', 'Customer testimonials', 'Offer campaigns', 'Comparison content'],
                        icon: 'Car',
                        teamSize: '2 people',
                        monthlyKPIs: '350 pieces content, 12 reviews, 8 videos, 10 offers',
                        businessKPIs: '12% more inquiries, 18% social engagement, 4.3 star rating'
                      }
                    ].map((team, idx) => {
                      const iconMap: Record<string, any> = {
                        'Utensils': Utensils,
                        'Scissors': Scissors,
                        'TrendingUp': TrendingUp,
                        'Sparkles': Sparkles,
                        'Coffee': Coffee,
                        'Leaf': Leaf,
                        'Phone': Phone,
                        'Store': Store,
                        'Building2': Building2,
                        'Car': Car,
                      };
                      const IconComponent = iconMap[team.icon] || Video;

                      return (
                        <div key={idx} className="bg-white/5 rounded-lg p-4 border border-white/10">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <IconComponent className="text-purple-400" size={24} />
                              <div>
                                <p className="font-bold text-white">{team.niche}</p>
                                <p className="text-xs text-purple-400">Team: {team.teamSize} people</p>
                              </div>
                            </div>
                            <div className="text-right text-xs text-gray-500">
                              ₹25,000-30,000/month
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-xs text-gray-500 mb-1">Monthly Content: {team.monthlyKPIs}</p>
                            <p className="text-xs text-emerald-400 mb-1">Business Impact: {team.businessKPIs}</p>
                            <div className="text-xs text-blue-400 mb-1">Services: {team.services.slice(0, 3).join(' • ')}...</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Content Production Workflow */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h3 className="font-bold text-white mb-3">Content Production Workflow</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <div>
                        <p className="font-medium text-white">On-Site Content Creation</p>
                        <p className="text-sm text-gray-400">3-4 hours → Photos, videos, reviews collected</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <div>
                        <p className="font-medium text-white">Content Processing & Upload</p>
                        <p className="text-sm text-gray-400">Same day → Edited, uploaded to ReZ</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <div>
                        <p className="font-medium text-white">Quality Assurance & Review</p>
                        <p className="text-sm text-gray-400">ReZ team reviews before publishing</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Benefits */}
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-lg p-4 border border-purple-500/30">
                  <h3 className="font-bold text-purple-300 mb-3">Business Benefits from Media House Service</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      {
                        title: 'Digital Presence',
                        icon: 'Video',
                        benefits: ['Professional social media', 'Online reviews & ratings', 'Product catalogs', 'Enhanced visibility', 'SEO optimization', 'Brand awareness']
                      },
                      {
                        title: 'Content Marketing',
                        icon: 'FileText',
                        benefits: ['Regular social posts', 'Video content', 'Recipe tutorials', 'Seasonal campaigns', 'Behind-the-scenes', 'Customer testimonials', 'Offer promotions']
                      },
                      {
                        title: 'Operational Support',
                        icon: 'Headphones',
                        benefits: ['Social media training', 'Content calendar management', 'Performance analytics', 'Ongoing optimization', '24/7 support team']
                      }
                    ].map((benefit, idx) => {
                      const benefitIconMap: Record<string, any> = {
                        'Video': Video,
                        'FileText': FileText,
                        'Headphones': Headphones,
                      };
                      const BenefitIcon = benefitIconMap[benefit.icon] || Video;

                      return (
                        <div key={idx} className="bg-white/5 rounded-lg p-3 border border-white/10">
                          <BenefitIcon className="text-purple-400 mb-2" size={20} />
                          <p className="font-bold text-white text-sm">{benefit.title}</p>
                          <ul className="text-xs text-gray-400 space-y-1">
                            {benefit.benefits.slice(0, 4).map((b, i) => <li key={i}>• {b}</li>)}
                            <li>• <span className="text-emerald-400">+ More based on tier</span></li>
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Pricing Model */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h3 className="font-bold text-white mb-3">Pricing Model for Businesses</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-4">
                        <p className="text-sm text-gray-400">Monthly Retainer</p>
                        <p className="text-2xl font-bold text-purple-400">₹30,000</p>
                      </div>
                      <div className="text-right text-xs text-gray-500">
                        <span className="text-gray-300">per business</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-4">
                        <p className="text-sm text-gray-400">Pay-Per-Piece</p>
                        <p className="text-2xl font-bold text-orange-400">₹50-100</p>
                      </div>
                      <div className="text-right text-xs text-gray-500">
                        <span className="text-gray-300">based on content volume</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-4">
                        <p className="text-sm text-gray-400">What's Included</p>
                        <p className="text-lg font-bold text-white">₹30,000 worth</p>
                      </div>
                      <div className="text-right text-xs text-gray-500">
                        <span className="text-gray-300">photos, videos, reviews, posts, SEO</span>
                      </div>
                    </div>
                    <div className="bg-orange-500/10 rounded-lg p-3 border-orange-500/20">
                      <p className="text-sm text-emerald-400 font-bold">Startup Offer:</p>
                      <p className="text-xs text-gray-300">First 3 months at 50% discount for first 20 businesses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Viral Growth Channels */}
        {activeTab === 'viral' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/20 border-2 border-yellow-500/40 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-yellow-300">Viral Growth Channels: Earn ReZ Coins</h2>
                  <p className="text-gray-400">Interactive challenges, street interviews, social media contests → Instant rewards</p>
                </div>
                <Zap className="text-yellow-400" size={48} />
              </div>

              <div className="space-y-6">
                {/* Overview */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h3 className="font-bold text-white mb-3">The Viral Growth Philosophy</h3>
                  <p className="text-sm text-gray-300 mb-3">
                    Transform everyday interactions into earning opportunities. People participate, share, and bring friends → organic viral growth.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-yellow-500/10 rounded-lg p-3 border border-yellow-500/20">
                      <p className="text-2xl font-bold text-yellow-400">25-500</p>
                      <p className="text-xs text-gray-400">ReZ coins per activity</p>
                    </div>
                    <div className="bg-yellow-500/10 rounded-lg p-3 border border-yellow-500/20">
                      <p className="text-2xl font-bold text-yellow-400">10x</p>
                      <p className="text-xs text-gray-400">Expected viral coefficient</p>
                    </div>
                    <div className="bg-yellow-500/10 rounded-lg p-3 border border-yellow-500/20">
                      <p className="text-2xl font-bold text-yellow-400">1000+</p>
                      <p className="text-xs text-gray-400">Daily active participants</p>
                    </div>
                  </div>
                </div>

                {/* Interactive Public Challenges */}
                <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-500/10 rounded-lg p-4 border border-yellow-500/30">
                  <h3 className="font-bold text-yellow-300 mb-4">🎯 Interactive Public Challenges</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      {
                        title: 'ReZ Challenge Zones',
                        location: 'Malls, Metro Stations, Colleges',
                        activities: ['30-sec Bangalore quizzes', 'Spot the difference games', 'Memory card challenges'],
                        rewards: '50-100 coins instantly',
                        frequency: 'Weekend activations',
                        team: '2 activation team members',
                        target: '200-300 participants/day'
                      },
                      {
                        title: 'Weekend City Quests',
                        location: 'Commercial Street, Indiranagar, Koramangala',
                        activities: ['Find 3 participating stores', 'Take photos with merchant QR codes', 'Complete tasks at locations'],
                        rewards: '500-1000 coins + prizes',
                        frequency: 'Saturday & Sunday',
                        team: '3 quest coordinators',
                        target: '150-200 participants/weekend'
                      },
                      {
                        title: 'Skill-Based Games',
                        location: 'Festivals, Markets, Public Events',
                        activities: ['1-min singing contests', '30-sec dance-offs', 'Quick drawing challenges', 'Photography contests'],
                        rewards: '200-500 coins + feature on ReZ',
                        frequency: 'Event-based',
                        team: '2 talent scouts',
                        target: '100+ talent discoveries/month'
                      }
                    ].map((challenge, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h4 className="font-bold text-white mb-2">{challenge.title}</h4>
                        <p className="text-xs text-yellow-400 mb-2">📍 {challenge.location}</p>
                        <ul className="text-xs text-gray-300 space-y-1 mb-2">
                          {challenge.activities.map((a, i) => <li key={i}>• {a}</li>)}
                        </ul>
                        <div className="space-y-1 mt-3 pt-2 border-t border-white/10">
                          <p className="text-xs text-gray-500">🎁 Rewards: <span className="text-emerald-400">{challenge.rewards}</span></p>
                          <p className="text-xs text-gray-500">📅 Frequency: <span className="text-blue-400">{challenge.frequency}</span></p>
                          <p className="text-xs text-gray-500">👥 Team: <span className="text-purple-400">{challenge.team}</span></p>
                          <p className="text-xs text-gray-500">🎯 Target: <span className="text-orange-400">{challenge.target}</span></p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Street Interviews */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h3 className="font-bold text-white mb-4">🎤 Street Interview & Interaction</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      {
                        title: 'ReZ Street Talk',
                        concept: 'Interview people at busy spots',
                        locations: 'MG Road, Brigade Road, Cubbon Park, KR Market',
                        questions: ['"What\'s your favorite local business?"', '"Show us your best money-saving tip"', '"What would you do with ₹1000 extra?"'],
                        rewards: '25-50 coins for answering + video feature',
                        kpis: '150+ interviews/week, 80% social share rate'
                      },
                      {
                        title: 'Flash Giveaways',
                        concept: 'Unexpected rewards for quick tasks',
                        locations: 'High footfall areas randomly',
                        questions: ['Selfie with ReZ mascot', 'Download app instantly', 'Share on Instagram story'],
                        rewards: '50-100 coins + surprise prizes',
                        kpis: '100+ giveaways/week, 70% conversion rate'
                      },
                      {
                        title: 'Vendor Spotlights',
                        concept: 'Interview roadside vendors',
                        locations: 'Street vendors across Bangalore',
                        questions: ['"Tell us your story"', '"What makes your business special?"', '"How did you start?"'],
                        rewards: '100 coins for vendor + platform feature',
                        kpis: '30 vendor features/week, merchant acquisition boost 25%'
                      },
                      {
                        title: 'Community Stories',
                        concept: 'Document local community heroes',
                        locations: 'Neighborhoods, local events',
                        questions: ['Local business success stories', 'Community helpers', 'Artisans & craftsmen'],
                        rewards: '200 coins for subjects, 50 coins for nominators',
                        kpis: '50 stories/month, strong community engagement'
                      }
                    ].map((interview, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-lg p-4 border border-yellow-500/20">
                        <h4 className="font-bold text-yellow-300 mb-2">{interview.title}</h4>
                        <p className="text-xs text-gray-400 mb-2">{interview.concept}</p>
                        <p className="text-xs text-gray-500 mb-2">📍 {interview.locations}</p>
                        <ul className="text-xs text-gray-300 space-y-1 mb-3">
                          {interview.questions.map((q, i) => <li key={i}>• {q}</li>)}
                        </ul>
                        <div className="pt-2 border-t border-white/10">
                          <p className="text-xs text-gray-500">🎁 Rewards: <span className="text-emerald-400">{interview.rewards}</span></p>
                          <p className="text-xs text-gray-500">📊 KPIs: <span className="text-blue-400">{interview.kpis}</span></p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Viral Social Media Challenges */}
                <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-500/10 rounded-lg p-4 border border-yellow-500/30">
                  <h3 className="font-bold text-yellow-300 mb-4">📱 Viral Social Media Challenges</h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: '#ReZSavingsChallenge',
                        frequency: 'Weekly themes',
                        examples: ['"Best Sunday market haul under ₹500"', '"Share street food finds"', '"Creative reuse item"'],
                        rewards: 'Best entries win 1000-5000 coins',
                        platforms: 'Instagram Reels, YouTube Shorts, TikTok',
                        engagement_target: '5000+ entries/month, 100K+ views'
                      },
                      {
                        title: '#ReZMyDay',
                        frequency: 'Daily documentation',
                        examples: ['"Morning chai routine"', '"Lunch from local tiffin"', '"Evening walk discoveries"'],
                        rewards: 'Top 10 daily winners get 200-500 coins',
                        platforms: 'Instagram Stories, Facebook Stories',
                        engagement_target: '3000+ daily participants'
                      },
                      {
                        title: '#ReZBuddyChallenge',
                        frequency: 'Ongoing referral program',
                        examples: ['"Tag your shopping buddy"', '"Bring a friend to challenge zones"'],
                        rewards: 'Both get 100 coins when friend signs up, top referrer gets 5000 coins weekly',
                        platforms: 'All social platforms',
                        engagement_target: 'Viral coefficient 10x, 50% referral rate'
                      },
                      {
                        title: '#ReZHiddenGems',
                        frequency: 'Bi-weekly discoveries',
                        examples: ['"Underrated local businesses"', '"Secret menu items"', '"Hidden Bangalore spots"'],
                        rewards: '500 coins per featured gem, monthly winner gets 10,000 coins',
                        platforms: 'Instagram Reels, YouTube',
                        engagement_target: '2000+ gems discovered, merchant partnerships'
                      }
                    ].map((challenge, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-bold text-white">{challenge.title}</h4>
                            <p className="text-xs text-yellow-400">{challenge.frequency}</p>
                          </div>
                          <Share2 className="text-yellow-400" size={24} />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Examples:</p>
                            <ul className="text-xs text-gray-300 space-y-1">
                              {challenge.examples.map((e, i) => <li key={i}>• {e}</li>)}
                            </ul>
                          </div>
                          <div>
                            <p className="text-xs text-emerald-400 mb-1">🎁 {challenge.rewards}</p>
                            <p className="text-xs text-blue-400 mb-1">📱 {challenge.platforms}</p>
                            <p className="text-xs text-purple-400">📊 {challenge.engagement_target}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Festival & Seasonal Campaigns */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h3 className="font-bold text-white mb-4">🎉 Festival & Seasonal Campaigns</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { festival: 'Diwali', campaign: 'Light Hunt', activity: 'Find best decorated shops', reward: '200-500 coins' },
                      { festival: 'Holi', campaign: 'Color Challenge', activity: 'Share safe Holi tips', reward: '150-300 coins' },
                      { festival: 'Ramadan', campaign: 'Iftar Guide', activity: 'Best iftar spots', reward: '100-250 coins' },
                      { festival: 'Pongal', campaign: 'Food Contest', activity: 'Traditional dishes', reward: '200-400 coins' },
                      { festival: 'Christmas', campaign: 'Charity Drive', activity: 'Acts of kindness', reward: '100-200 coins' },
                      { festival: 'New Year', campaign: 'Resolution Challenge', activity: '2024 goals', reward: '300-500 coins' }
                    ].map((fest, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-yellow-500/10 to-red-500/10 rounded-lg p-3 border border-yellow-500/20">
                        <p className="font-bold text-yellow-300 text-sm mb-1">{fest.festival}</p>
                        <p className="text-xs text-white mb-1">{fest.campaign}</p>
                        <p className="text-xs text-gray-400 mb-1">{fest.activity}</p>
                        <p className="text-xs text-emerald-400">🎁 {fest.reward}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Community-Based Initiatives */}
                <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 rounded-lg p-4 border border-emerald-500/30">
                  <h3 className="font-bold text-emerald-300 mb-4">🤝 Community-Based Initiatives</h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    {[
                      { tagline: '#ReZCleanDrive', activity: 'Clean up local areas', reward: '100-200 coins' },
                      { tagline: '#ReZShare', activity: 'Share with homeless/needy', reward: '150-300 coins' },
                      { tagline: '#ReZSkill', activity: 'Teach someone new skill', reward: '200-400 coins' },
                      { tagline: '#ReZLocalHero', activity: 'Nominate helpful locals', reward: '100-250 coins' },
                      { tagline: '#ReZPlant', activity: 'Tree planting drives', reward: '250-500 coins' },
                      { tagline: '#ReZEducate', activity: 'Teach kids digital skills', reward: '300-500 coins' },
                      { tagline: '#ReZHelp', activity: 'Assist elderly citizens', reward: '200-400 coins' },
                      { tagline: '#ReZCreate', activity: 'Local art & culture events', reward: '150-350 coins' }
                    ].map((initiative, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <p className="font-bold text-emerald-400 text-xs mb-2">{initiative.tagline}</p>
                        <p className="text-xs text-gray-300 mb-2">{initiative.activity}</p>
                        <p className="text-xs text-emerald-400">🎁 {initiative.reward}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Corporate & Partnership */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h3 className="font-bold text-white mb-4">🏢 Corporate & Partnership</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      {
                        title: 'Office "Lunch Roulette"',
                        concept: 'Random team gets ReZ coins for trying new places',
                        partners: 'Corporate HR teams',
                        impact: 'Employee engagement + merchant discovery'
                      },
                      {
                        title: 'Ride-Hacking Partnerships',
                        concept: 'Uber/Ola: earn coins for sharing rides',
                        partners: 'Uber, Ola, Rapido',
                        impact: 'High adoption, eco-friendly messaging'
                      },
                      {
                        title: 'Gym Challenges',
                        concept: 'Fitness goals = ReZ coins',
                        partners: 'Local gyms, fitness centers',
                        impact: 'Health + rewards motivation'
                      },
                      {
                        title: 'Library/Café Study Sessions',
                        concept: 'Check-in rewards for study spots',
                        partners: 'Cafes, libraries, coworking spaces',
                        impact: 'Student engagement'
                      },
                      {
                        title: 'Railway/Metro Activations',
                        concept: 'Quick challenges during commutes',
                        partners: 'Metro, Railway authorities',
                        impact: 'Mass reach, daily commuters'
                      },
                      {
                        title: 'College Ambassador Program',
                        concept: 'Student ambassadors run challenges',
                        partners: 'College student bodies',
                        impact: 'Youth market penetration'
                      }
                    ].map((partner, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-4 border border-blue-500/20">
                        <h4 className="font-bold text-blue-300 mb-2">{partner.title}</h4>
                        <p className="text-xs text-gray-400 mb-2">{partner.concept}</p>
                        <p className="text-xs text-purple-400 mb-1">🤝 Partners: {partner.partners}</p>
                        <p className="text-xs text-emerald-400">📈 Impact: {partner.impact}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Execution Timeline */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h3 className="font-bold text-white mb-3">📅 Execution Timeline</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">M1</span>
                      </div>
                      <div>
                        <p className="font-medium text-white">Month 1: Launch & Test</p>
                        <p className="text-sm text-gray-400">2 challenge zones, street interviews pilot, 1 social challenge</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">M2</span>
                      </div>
                      <div>
                        <p className="font-medium text-white">Month 2: Scale Core Activities</p>
                        <p className="text-sm text-gray-400">5 challenge zones, weekend quests, 2 social challenges</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">M3</span>
                      </div>
                      <div>
                        <p className="font-medium text-white">Month 3: Add Corporate Partners</p>
                        <p className="text-sm text-gray-400">8 challenge zones, corporate programs, festival campaigns</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">M6</span>
                      </div>
                      <div>
                        <p className="font-medium text-white">Month 6: City-Wide Rollout</p>
                        <p className="text-sm text-gray-400">All channels active, 10+ challenge zones, 1000+ daily participants</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Budget */}
                <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg p-4 border border-yellow-500/30">
                  <h3 className="font-bold text-yellow-300 mb-3">💰 Budget Breakdown</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-white mb-2">Monthly Costs:</p>
                      <ul className="text-xs text-gray-300 space-y-1">
                        <li>• Challenge Zone Setup: ₹15,000</li>
                        <li>• Street Interview Team (3): ₹75,000</li>
                        <li>• Social Challenge Prizes: ₹30,000</li>
                        <li>• Equipment & Supplies: ₹10,000</li>
                        <li>• Marketing & Promotion: ₹20,000</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm text-white mb-2">ROI Metrics:</p>
                      <ul className="text-xs text-gray-300 space-y-1">
                        <li>• Cost per acquisition: ₹25-40</li>
                        <li>• Daily participants: 1000+</li>
                        <li>• Viral coefficient: 10x</li>
                        <li>• Social reach: 500K+ monthly</li>
                        <li>• Merchant signups: 200+ monthly</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-8 border border-orange-500/30 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Execute ReZ Marketing in India?</h2>
          <p className="text-gray-300 mb-6">This plan is designed for execution. Start Phase 1 immediately and adapt based on real metrics.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/rez-financials" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-6 py-3 rounded-lg font-bold text-white transition-colors">
              View Financial Model
            </Link>
            <Link href="/rez-deck" className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg font-bold text-white transition-colors border border-white/20">
              See Pitch Deck
            </Link>
          </div>
        </div>

      </div>
      <RezFooter />
    </div>
  );
}
