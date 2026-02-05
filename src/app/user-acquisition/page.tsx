'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Users,
  CheckCircle2,
  Circle,
  Gift,
  Share2,
  MessageCircle,
  Phone,
  Mail,
  Instagram,
  Star,
  Target,
  Zap,
  ChevronRight,
  Heart,
  UserPlus,
  Trophy,
  Clock,
  DollarSign,
  TrendingUp
} from 'lucide-react';

export default function UserAcquisitionPage() {
  const [activePhase, setActivePhase] = useState<'founders' | 'beta' | 'growth'>('founders');

  // Acquisition phases
  const phases = [
    { id: 'founders', label: 'Founders Circle (0-100)', icon: Heart, color: 'red' },
    { id: 'beta', label: 'Beta Users (100-1K)', icon: Users, color: 'orange' },
    { id: 'growth', label: 'Growth (1K-25K)', icon: TrendingUp, color: 'green' },
  ];

  // Founders List Sources
  const foundersListSources = [
    { source: 'CEO Personal Network', target: 30, current: 0, method: 'Personal WhatsApp messages', conversion: '80%' },
    { source: 'Team Members (8 people x 5 each)', target: 40, current: 0, method: 'Each team member invites 5', conversion: '90%' },
    { source: 'Friends & Family Extended', target: 20, current: 0, method: 'Second-degree connections', conversion: '50%' },
    { source: 'LinkedIn Connections', target: 10, current: 0, method: 'DMs to relevant contacts', conversion: '20%' },
  ];

  // First 100 Strategy
  const first100Strategy = [
    {
      day: '1-3',
      target: 50,
      actions: [
        'CEO sends personal WhatsApp to 30 contacts',
        'Each team member (8) invites 5 people',
        'Create exclusive "Founders List" Google Form',
        'Promise: First 100 get lifetime special status'
      ],
      script: 'Hey [Name], I am finally launching Nuqta - the cashback app I have been building. Would love for you to be one of our first 100 users. You will get exclusive Founders status + extra rewards. Can I add you to our beta?'
    },
    {
      day: '4-5',
      target: 30,
      actions: [
        'Follow up with non-responders',
        'Ask first 50 to each invite 1 friend',
        'Post on personal social media',
        'LinkedIn post about the launch'
      ],
      script: 'Quick follow up - did you get a chance to check out Nuqta? I would really value your feedback as one of our founding users. Takes 2 mins to sign up.'
    },
    {
      day: '6-7',
      target: 20,
      actions: [
        'Activate second-degree connections',
        'Team members ask their friends to share',
        'Personal calls to high-value contacts',
        'Close any remaining gaps'
      ],
      script: 'We are at [X] founders! Just need [Y] more to hit 100. Know anyone who would be interested in saving money on their daily purchases?'
    }
  ];

  // User Value Proposition
  const userValueProp = [
    { benefit: 'Instant Cashback', desc: '5-20% back on every purchase', icon: DollarSign },
    { benefit: 'No Hidden Terms', desc: 'What you see is what you get', icon: CheckCircle2 },
    { benefit: 'Local Merchants', desc: 'Your favorite UAE spots', icon: Target },
    { benefit: 'Easy to Use', desc: 'Scan, pay, earn. That simple.', icon: Zap },
  ];

  // Referral Program Structure
  const referralProgram = {
    giver: 'AED 10 Nuqta Coins',
    receiver: 'AED 10 Nuqta Coins',
    conditions: [
      'Both must complete first transaction',
      'Coins credited within 24 hours',
      'No limit on referrals',
      'Stackable with other offers'
    ],
    tiers: [
      { referrals: 5, reward: 'Bronze Badge + AED 50 bonus', status: 'active' },
      { referrals: 10, reward: 'Silver Badge + AED 100 bonus', status: 'active' },
      { referrals: 25, reward: 'Gold Badge + AED 250 bonus', status: 'active' },
      { referrals: 50, reward: 'Platinum Badge + AED 500 bonus', status: 'active' },
    ]
  };

  // Activation Checklist
  const activationChecklist = [
    { step: 'Download app', completed: false, critical: true },
    { step: 'Create account', completed: false, critical: true },
    { step: 'Add payment method', completed: false, critical: true },
    { step: 'Make first transaction', completed: false, critical: true },
    { step: 'Refer first friend', completed: false, critical: false },
    { step: 'Complete profile', completed: false, critical: false },
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
                <h1 className="text-2xl font-bold text-green-400">First 100 Users Playbook</h1>
                <p className="text-gray-400 text-sm">Founders Circle Strategy</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Current:</span>
              <span className="text-2xl font-bold text-white">0</span>
              <span className="text-gray-400">/100</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Phase Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {phases.map((phase) => (
            <button
              key={phase.id}
              onClick={() => setActivePhase(phase.id as 'founders' | 'beta' | 'growth')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                activePhase === phase.id
                  ? `bg-${phase.color}-500/20 text-${phase.color}-400 border border-${phase.color}-500/50`
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              <phase.icon size={18} />
              {phase.label}
            </button>
          ))}
        </div>

        {/* Founders Circle Phase */}
        {activePhase === 'founders' && (
          <div className="space-y-8">
            {/* Hero Message */}
            <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-2xl p-6 border border-red-500/30">
              <h2 className="text-2xl font-bold text-white mb-2">The First 100 Are Personal</h2>
              <p className="text-gray-300 mb-4">
                Your first 100 users should come from your personal network. These are not strangers - they are friends,
                family, colleagues, and connections who trust you. They will give honest feedback and become your ambassadors.
              </p>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-red-400 font-bold mb-2">The Rule:</div>
                <p className="text-white">No paid ads. No influencers. No strangers. Just people who know you personally.</p>
              </div>
            </div>

            {/* Sources Breakdown */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Where Will 100 Users Come From?</h3>
              <div className="space-y-4">
                {foundersListSources.map((source, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-white font-bold">{source.source}</div>
                      <div className="text-[#c9a227] font-bold">{source.target} users</div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="text-gray-400">{source.method}</div>
                      <div className="text-green-400">Expected conversion: {source.conversion}</div>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full mt-3">
                      <div
                        className="h-full bg-[#c9a227] rounded-full"
                        style={{ width: `${(source.current / source.target) * 100}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{source.current}/{source.target} acquired</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-gray-400">Total Target</span>
                <span className="text-2xl font-bold text-[#c9a227]">100 Users</span>
              </div>
            </div>

            {/* Day by Day Strategy */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">7-Day Execution Plan</h3>
              <div className="space-y-6">
                {first100Strategy.map((phase, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-5 border border-green-500/30">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                          <span className="text-green-400 font-bold">D{phase.day}</span>
                        </div>
                        <div>
                          <div className="text-white font-bold">Day {phase.day}</div>
                          <div className="text-gray-400 text-sm">Target: +{phase.target} users</div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm text-gray-400 mb-2">Actions:</div>
                      <ul className="space-y-1">
                        {phase.actions.map((action, actionIdx) => (
                          <li key={actionIdx} className="flex items-start gap-2 text-sm text-gray-300">
                            <CheckCircle2 size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-xs text-[#c9a227] mb-1">Sample Script:</div>
                      <p className="text-gray-300 text-sm italic">&quot;{phase.script}&quot;</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* User Value Prop */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">What Do Users Get?</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {userValueProp.map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-b from-[#c9a227]/10 to-transparent rounded-lg p-4 text-center border border-[#c9a227]/30">
                    <item.icon className="text-[#c9a227] mx-auto mb-3" size={32} />
                    <div className="text-white font-bold mb-1">{item.benefit}</div>
                    <div className="text-gray-400 text-sm">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Founders Exclusive Benefits */}
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                <Star size={24} />
                Founders Circle Exclusive Benefits
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-white font-bold mb-2">Lifetime Founders Badge</div>
                  <div className="text-gray-400 text-sm">Special recognition in the app forever</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-white font-bold mb-2">Double Cashback First Month</div>
                  <div className="text-gray-400 text-sm">2x rewards on all transactions</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-white font-bold mb-2">Direct Access to CEO</div>
                  <div className="text-gray-400 text-sm">WhatsApp group with founders</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Beta Users Phase */}
        {activePhase === 'beta' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-2xl p-6 border border-orange-500/30">
              <h2 className="text-2xl font-bold text-white mb-2">Scale to 1,000: Referral + Community</h2>
              <p className="text-gray-300">
                Once you have 100 engaged users, activate referral loops and community growth.
                Each user should bring in 2-3 more users through word of mouth.
              </p>
            </div>

            {/* Referral Program */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Gift size={24} className="text-[#c9a227]" />
                Referral Program Structure
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-500/10 rounded-lg p-5 border border-green-500/30 text-center">
                  <div className="text-green-400 font-bold text-lg mb-2">Referrer Gets</div>
                  <div className="text-3xl font-bold text-white">{referralProgram.giver}</div>
                  <div className="text-gray-400 text-sm mt-2">When friend completes first transaction</div>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-5 border border-blue-500/30 text-center">
                  <div className="text-blue-400 font-bold text-lg mb-2">Friend Gets</div>
                  <div className="text-3xl font-bold text-white">{referralProgram.receiver}</div>
                  <div className="text-gray-400 text-sm mt-2">Welcome bonus on signup</div>
                </div>
              </div>

              <h4 className="font-bold text-white mb-3">Referral Tiers</h4>
              <div className="grid md:grid-cols-4 gap-3">
                {referralProgram.tiers.map((tier, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-[#c9a227] font-bold text-2xl mb-1">{tier.referrals}</div>
                    <div className="text-gray-400 text-xs mb-2">referrals</div>
                    <div className="text-white text-sm">{tier.reward}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Channels */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Community Channels to Build</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                  <MessageCircle className="text-green-400 mb-3" size={28} />
                  <div className="text-white font-bold mb-1">WhatsApp Group</div>
                  <div className="text-gray-400 text-sm mb-2">Nuqta Founders Circle</div>
                  <div className="text-green-400 text-xs">Target: 256 members (max)</div>
                </div>
                <div className="bg-pink-500/10 rounded-lg p-4 border border-pink-500/30">
                  <Instagram className="text-pink-400 mb-3" size={28} />
                  <div className="text-white font-bold mb-1">Instagram Community</div>
                  <div className="text-gray-400 text-sm mb-2">Close Friends + Broadcasts</div>
                  <div className="text-pink-400 text-xs">Target: 500 followers</div>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
                  <Mail className="text-blue-400 mb-3" size={28} />
                  <div className="text-white font-bold mb-1">Email List</div>
                  <div className="text-gray-400 text-sm mb-2">Weekly deals newsletter</div>
                  <div className="text-blue-400 text-xs">Target: 1,000 subscribers</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Growth Phase */}
        {activePhase === 'growth' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-500/30">
              <h2 className="text-2xl font-bold text-white mb-2">Growth Phase: 1K to 25K</h2>
              <p className="text-gray-300">
                Once you have 1,000 users with proven retention, activate paid channels.
                This is where the AED 75K budget comes into play.
              </p>
            </div>

            {/* Growth Channels */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Growth Channel Priority</h3>
              <div className="space-y-4">
                {[
                  { channel: 'Influencer Marketing', budget: 'AED 26,250', target: '10,000 users', cpa: 'AED 2.63', priority: 1 },
                  { channel: 'Paid Social (Meta)', budget: 'AED 18,750', target: '5,000 users', cpa: 'AED 3.75', priority: 2 },
                  { channel: 'Referral Program', budget: 'AED 5,000', target: '5,000 users', cpa: 'AED 1.00', priority: 3 },
                  { channel: 'Content Marketing', budget: 'AED 11,250', target: '3,000 users', cpa: 'AED 3.75', priority: 4 },
                  { channel: 'Events & Activations', budget: 'AED 7,500', target: '2,000 users', cpa: 'AED 3.75', priority: 5 },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#c9a227]/20 flex items-center justify-center text-[#c9a227] font-bold">
                        {item.priority}
                      </div>
                      <div>
                        <div className="text-white font-bold">{item.channel}</div>
                        <div className="text-gray-400 text-sm">Target: {item.target}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[#c9a227] font-bold">{item.budget}</div>
                      <div className="text-gray-400 text-sm">CPA: {item.cpa}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* User Activation Checklist */}
        <div className="mt-8 bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4">User Activation Checklist</h3>
          <p className="text-gray-400 mb-4">A user is only &quot;activated&quot; when they complete these steps:</p>
          <div className="grid md:grid-cols-2 gap-3">
            {activationChecklist.map((item, idx) => (
              <div key={idx} className={`flex items-center gap-3 p-3 rounded-lg ${
                item.critical ? 'bg-red-500/10 border border-red-500/30' : 'bg-white/5'
              }`}>
                <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 ${
                  item.completed ? 'bg-green-500 border-green-500' : 'border-gray-500'
                }`}>
                  {item.completed && <CheckCircle2 size={20} className="text-white" />}
                </div>
                <span className="text-white">{item.step}</span>
                {item.critical && <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded ml-auto">Critical</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-500/30">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Start Building Your Founders Circle</h3>
              <p className="text-gray-400">Send your first 20 personal invites today.</p>
            </div>
            <Link
              href="/marketing-dashboard"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-colors"
            >
              <UserPlus size={20} />
              Back to Dashboard
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 mt-12">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>User Acquisition Playbook | Nuqta 2026</p>
        </div>
      </footer>
    </div>
  );
}
