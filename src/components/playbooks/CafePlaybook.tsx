'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  ChevronRight,
  CheckSquare,
  Square,
  Users,
  Calendar,
  FileText,
  MessageSquare,
  Target,
  AlertCircle,
  Phone,
  Mail,
  Clock,
  Bookmark,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Building2,
  Zap,
  Shield,
  Coffee,
  UtensilsCrossed,
  DollarSign,
  Percent,
  BarChart3,
  MapPin,
  Calculator,
  ArrowLeft,
  Star,
  Gift,
  Coins,
  Megaphone,
  Camera,
  UserCheck,
  Monitor,
  TrendingDown,
  Receipt,
  Settings,
  Sparkles,
  Store
} from 'lucide-react';

/**
 * CAFE & RESTAURANT SALES PLAYBOOK
 * Complete sales guide for F&B merchant acquisition
 *
 * Industry: Cafes, Restaurants, QSR, Dessert Shops, Bakeries
 * Engine: A (High Margin 60-70%)
 * Commission: 15-20%
 *
 * UAE Market Stats:
 * - Average cafe bill: AED 45-75
 * - Average restaurant bill: AED 80-150
 * - Repeat visit rate without loyalty: 32%
 * - F&B market size UAE: $8.5B
 * - 40% of Nuqta LOIs are F&B
 */

interface SectionProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const CollapsibleSection = ({ title, icon: Icon, children, defaultOpen = false }: SectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 sm:p-6 hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
            <Icon className="text-orange-400" size={20} />
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white">{title}</h2>
        </div>
        {isOpen ? <ChevronDown className="text-slate-400" /> : <ChevronRight className="text-slate-400" />}
      </button>
      {isOpen && (
        <div className="px-4 sm:px-6 pb-6 border-t border-white/10 pt-4">
          {children}
        </div>
      )}
    </div>
  );
};

const ChecklistItem = ({ children }: { children: React.ReactNode }) => {
  const [checked, setChecked] = useState(false);

  return (
    <button
      onClick={() => setChecked(!checked)}
      className={`flex items-start gap-3 w-full text-left p-2 rounded-lg transition-all ${
        checked ? 'bg-green-500/10' : 'hover:bg-white/5'
      }`}
    >
      {checked ? (
        <CheckSquare className="text-green-400 flex-shrink-0 mt-0.5" size={18} />
      ) : (
        <Square className="text-slate-500 flex-shrink-0 mt-0.5" size={18} />
      )}
      <span className={`text-sm ${checked ? 'text-slate-500 line-through' : 'text-slate-300'}`}>
        {children}
      </span>
    </button>
  );
};

const CafePlaybook = () => {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Header */}
      <div className="bg-gradient-to-b from-orange-500/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
          <Link href="/merchant-playbook" className="inline-flex items-center gap-2 text-slate-400 hover:text-orange-400 mb-6 transition-colors">
            <ArrowLeft size={20} />
            <span>All Playbooks</span>
          </Link>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 rounded-full mb-6">
              <Coffee className="text-orange-400" size={16} />
              <span className="text-orange-400 text-sm font-medium">Engine A • High Margin</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              <span className="text-orange-400">Cafe & Restaurant</span> Sales Playbook
            </h1>
            <p className="text-slate-400 text-lg">Complete guide to signing F&B merchants</p>
            <p className="text-slate-500 text-sm mt-2">From Cold Outreach to Signed Contract</p>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Avg Bill (Cafe)', value: 'AED 55', color: 'orange' },
            { label: 'Avg Bill (Restaurant)', value: 'AED 120', color: 'amber' },
            { label: 'Commission', value: '15-20%', color: 'emerald' },
            { label: 'Nuqta LOIs', value: '40%', color: 'blue' }
          ].map((stat, idx) => (
            <div key={idx} className={`bg-${stat.color}-500/10 border border-${stat.color}-500/30 rounded-xl p-3 text-center`}>
              <p className={`text-${stat.color}-400 text-xl font-black`}>{stat.value}</p>
              <p className="text-slate-400 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-32">

        {/* Part 1: Industry Overview */}
        <div className="mb-8">
          <h2 className="text-orange-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-orange-500 text-[#0a1628] flex items-center justify-center text-xs font-black">1</span>
            Industry Overview
          </h2>

          <CollapsibleSection title="F&B Market in UAE" icon={BarChart3} defaultOpen={true}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'UAE F&B Market', value: '$8.5B' },
                  { label: 'Dubai Restaurants', value: '13,000+' },
                  { label: 'Cafes in Dubai', value: '4,500+' },
                  { label: 'Avg Margin', value: '60-70%' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                    <p className="text-orange-400 text-lg font-bold">{stat.value}</p>
                    <p className="text-slate-400 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-orange-500/10 rounded-xl p-4 border border-orange-500/20">
                <h4 className="text-orange-400 font-semibold mb-2">🇦🇪 GCC-Specific Pain Points</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• <strong className="text-orange-300">68% of customers never return</strong> after first visit - they try the new cafe down the street</li>
                  <li>• <strong className="text-orange-300">Instagram/TikTok influencers</strong> cost AED 500-5,000 per post with no guaranteed ROI</li>
                  <li>• <strong className="text-orange-300">Talabat/Deliveroo take 30-35%</strong> commission AND own your customer data</li>
                  <li>• <strong className="text-orange-300">High rent in malls</strong> (AED 350-500/sqft in Dubai malls) means every empty seat hurts</li>
                  <li>• <strong className="text-orange-300">Expat population turnover</strong> - customers leave UAE every 2-3 years, need constant acquisition</li>
                  <li>• <strong className="text-orange-300">Summer exodus</strong> - 30-40% revenue drop June-August as residents travel</li>
                  <li>• <strong className="text-orange-300">Ramadan timing</strong> - operational challenges during holy month, unpredictable iftar traffic</li>
                  <li>• <strong className="text-orange-300">Competition from hotel F&B</strong> - hotels offer Friday brunches with entertainment</li>
                  <li>• <strong className="text-orange-300">Staff turnover</strong> - average 6-month tenure means losing customer relationships</li>
                  <li>• <strong className="text-orange-300">No customer data</strong> from cash/card payments - can&apos;t retarget or personalize</li>
                </ul>
              </div>

              <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                <h4 className="text-emerald-400 font-semibold mb-2">✨ How Nuqta Solves Each Pain Point</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• <strong className="text-orange-300">68% never return?</strong> → <strong className="text-emerald-300">Coins create pull-back effect</strong> - customers come back to earn/redeem, turning 1-time visitors into 2.5x repeat customers</li>
                  <li>• <strong className="text-orange-300">Influencers cost AED 5K?</strong> → <strong className="text-emerald-300">Pay only 15-20% on actual sales</strong> - zero upfront cost, pay only when customer spends</li>
                  <li>• <strong className="text-orange-300">Talabat takes 30-35%?</strong> → <strong className="text-emerald-300">Build direct dine-in loyalty at 15-20%</strong> - half the commission AND you own the customer data</li>
                  <li>• <strong className="text-orange-300">High mall rent?</strong> → <strong className="text-emerald-300">Fill empty seats with 500K+ Nuqta users</strong> discovering cafes daily - targeted push notifications to nearby users</li>
                  <li>• <strong className="text-orange-300">Expat turnover?</strong> → <strong className="text-emerald-300">Continuous new customer acquisition</strong> - constant flow from Nuqta user base replaces leaving expats</li>
                  <li>• <strong className="text-orange-300">Summer exodus?</strong> → <strong className="text-emerald-300">Double coins campaigns</strong> - residents who stay get extra incentive, maintaining traffic during slow months</li>
                  <li>• <strong className="text-orange-300">Ramadan unpredictable?</strong> → <strong className="text-emerald-300">Iftar targeting</strong> - push notifications to users near you during iftar hours, special Ramadan coin bonuses</li>
                  <li>• <strong className="text-orange-300">Hotel F&B competition?</strong> → <strong className="text-emerald-300">Differentiate with rewards</strong> - hotels can&apos;t match coin earning, create unique loyalty</li>
                  <li>• <strong className="text-orange-300">Staff turnover?</strong> → <strong className="text-emerald-300">YOU own customer data</strong> - relationships stay with the cafe, not the staff member</li>
                  <li>• <strong className="text-orange-300">No customer data?</strong> → <strong className="text-emerald-300">QR scan captures everything</strong> - know who visits, when, spending patterns, preferences - even from cash</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="What Nuqta Provides for F&B" icon={Sparkles} defaultOpen={true}>
            <div className="space-y-4">
              <p className="text-slate-300 text-sm">
                This is the core value proposition. Nuqta isn&apos;t just cashback - it&apos;s a complete growth partner for F&B businesses.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: UserCheck,
                    title: 'Dedicated Marketing Manager',
                    desc: 'A personal marketing manager assigned to your account. They handle everything from strategy to execution.',
                    tier: 'Basic+'
                  },
                  {
                    icon: Monitor,
                    title: 'Free POS Integration',
                    desc: 'No need to change your existing setup. We provide QR-based logging OR integrate with your POS for automatic tracking.',
                    tier: 'All Tiers'
                  },
                  {
                    icon: Camera,
                    title: 'Content Creation',
                    desc: 'Professional food photography, Instagram posts, Reels, and Stories - all created for your cafe/restaurant.',
                    tier: 'Basic+'
                  },
                  {
                    icon: Users,
                    title: 'Influencer Marketing',
                    desc: 'We coordinate food bloggers and influencers for barter or paid collaborations to drive awareness.',
                    tier: 'Golden+'
                  },
                  {
                    icon: TrendingDown,
                    title: 'Price Engineering',
                    desc: 'Strategic menu pricing (+20% markup) with Nuqta discounts so customers pay similar but feel rewarded.',
                    tier: 'Basic+'
                  },
                  {
                    icon: Megaphone,
                    title: 'Performance Marketing',
                    desc: 'Meta/Instagram ads, Google My Business optimization, WhatsApp campaigns - all managed for you.',
                    tier: 'Basic+'
                  },
                  {
                    icon: MapPin,
                    title: 'Offline Marketing',
                    desc: 'QR boards, table tents, window stickers, outdoor signage - everything to promote Nuqta at your location.',
                    tier: 'All Tiers'
                  },
                  {
                    icon: Receipt,
                    title: 'VAT & Compliance (Optional)',
                    desc: 'We can help with VAT filing and compliance documentation. Additional service available.',
                    tier: 'Optional Add-on'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="text-orange-400" size={20} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-white font-bold text-sm">{item.title}</h4>
                          <span className="text-xs px-2 py-0.5 bg-orange-500/20 text-orange-400 rounded-full">{item.tier}</span>
                        </div>
                        <p className="text-slate-400 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Investment Breakdown */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-4">
                <h4 className="text-white font-bold mb-3">📊 How We Invest Your Package Fee</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-orange-500/10 rounded-lg p-4 border border-orange-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-orange-400 font-bold text-2xl">70%</span>
                      <span className="text-orange-400 text-sm font-medium">Content & Creative</span>
                    </div>
                    <ul className="text-slate-300 text-xs space-y-1">
                      <li>• Professional photography</li>
                      <li>• Videography & Reels</li>
                      <li>• Social media content</li>
                      <li>• UGC creation</li>
                      <li>• Influencer & barter deals</li>
                      <li>• Graphics & design</li>
                    </ul>
                  </div>
                  <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-blue-400 font-bold text-2xl">30%</span>
                      <span className="text-blue-400 text-sm font-medium">Paid Advertising</span>
                    </div>
                    <ul className="text-slate-300 text-xs space-y-1">
                      <li>• Meta/Instagram ads</li>
                      <li>• Google Ads</li>
                      <li>• TikTok promotions</li>
                      <li>• Retargeting campaigns</li>
                      <li>• Performance marketing</li>
                      <li>• In-app promotions</li>
                    </ul>
                  </div>
                </div>

                {/* Bonus: In-App Ad Credit */}
                <div className="mt-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4 border border-green-500/30">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500/30 rounded-full p-2">
                      <span className="text-2xl">🎁</span>
                    </div>
                    <div>
                      <h5 className="text-green-400 font-bold">BONUS: 100% In-App Ad Credit</h5>
                      <p className="text-slate-300 text-sm">
                        Whatever you spend on your package, you get the <span className="text-green-400 font-bold">same amount as in-app advertising credit</span> to promote your business to Nuqta users!
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 bg-black/20 rounded-lg p-3">
                    <p className="text-slate-400 text-xs">
                      <span className="text-white font-medium">Example:</span> Pay AED 5,000/month package → Get AED 5,000 in-app ad credit to boost your visibility to thousands of Nuqta app users
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-xl p-4 border border-orange-500/30">
                <h4 className="text-orange-400 font-bold mb-2">💡 Sales Tip: Lead with Services, Not Just Cashback</h4>
                <p className="text-slate-300 text-sm">
                  &quot;You&apos;re not just getting cashback for your customers. You&apos;re getting a dedicated marketing team,
                  content creation, influencer partnerships, and performance marketing - all included in your package.
                  70% goes to content creation (photography, videos, influencers) and 30% to paid ads.
                  Think of it as hiring a marketing agency that only gets paid when you make money.&quot;
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left text-orange-400 font-medium py-2">Service</th>
                      <th className="text-center text-slate-400 font-medium py-2">Free</th>
                      <th className="text-center text-blue-400 font-medium py-2">Basic</th>
                      <th className="text-center text-amber-400 font-medium py-2">Golden</th>
                      <th className="text-center text-purple-400 font-medium py-2">Diamond</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-white/5">
                      <td className="py-2">Dedicated Manager</td>
                      <td className="py-2 text-center text-slate-500">-</td>
                      <td className="py-2 text-center text-green-400">✓ (1:25)</td>
                      <td className="py-2 text-center text-green-400">✓ (1:15)</td>
                      <td className="py-2 text-center text-green-400">✓ (1:10)</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2">Social Content</td>
                      <td className="py-2 text-center text-slate-500">-</td>
                      <td className="py-2 text-center">4 posts/mo</td>
                      <td className="py-2 text-center">8 posts + 4 reels</td>
                      <td className="py-2 text-center">Unlimited</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2">Influencer Marketing</td>
                      <td className="py-2 text-center text-slate-500">-</td>
                      <td className="py-2 text-center">Basic</td>
                      <td className="py-2 text-center">Nano + Micro</td>
                      <td className="py-2 text-center">All Tiers (Paid)</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2">Performance Ads</td>
                      <td className="py-2 text-center text-slate-500">-</td>
                      <td className="py-2 text-center text-green-400">✓</td>
                      <td className="py-2 text-center text-green-400">✓</td>
                      <td className="py-2 text-center text-green-400">✓</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2">Price Engineering</td>
                      <td className="py-2 text-center text-slate-500">-</td>
                      <td className="py-2 text-center text-green-400">✓</td>
                      <td className="py-2 text-center text-green-400">✓</td>
                      <td className="py-2 text-center text-green-400">✓</td>
                    </tr>
                    <tr>
                      <td className="py-2">In-App Promo Credit</td>
                      <td className="py-2 text-center text-slate-500">-</td>
                      <td className="py-2 text-center">AED 5K</td>
                      <td className="py-2 text-center">AED 15K</td>
                      <td className="py-2 text-center">AED 30K</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Target Sub-Categories" icon={UtensilsCrossed}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  category: 'Specialty Coffee',
                  avgBill: 'AED 35-55',
                  frequency: '3-4x/week',
                  margin: '70%',
                  bestApproach: 'Focus on repeat habit, morning regulars'
                },
                {
                  category: 'Casual Dining',
                  avgBill: 'AED 80-150',
                  frequency: '2-3x/month',
                  margin: '60%',
                  bestApproach: 'Focus on group visits, special occasions'
                },
                {
                  category: 'QSR / Fast Food',
                  avgBill: 'AED 40-60',
                  frequency: '4-6x/month',
                  margin: '55%',
                  bestApproach: 'Focus on lunch crowd, quick rewards'
                },
                {
                  category: 'Desserts & Bakeries',
                  avgBill: 'AED 45-75',
                  frequency: '2-3x/month',
                  margin: '65%',
                  bestApproach: 'Focus on treat occasions, sharing'
                },
                {
                  category: 'Fine Dining',
                  avgBill: 'AED 200-400',
                  frequency: '1-2x/month',
                  margin: '55%',
                  bestApproach: 'Focus on special occasions, VIP treatment'
                },
                {
                  category: 'Food Courts',
                  avgBill: 'AED 35-50',
                  frequency: '3-4x/month',
                  margin: '50%',
                  bestApproach: 'Focus on mall traffic, convenience'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h4 className="text-orange-400 font-bold mb-2">{item.category}</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div>
                      <span className="text-slate-500">Avg Bill:</span>
                      <span className="text-white ml-1">{item.avgBill}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Frequency:</span>
                      <span className="text-white ml-1">{item.frequency}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Margin:</span>
                      <span className="text-emerald-400 ml-1">{item.margin}</span>
                    </div>
                  </div>
                  <p className="text-slate-400 text-xs italic">{item.bestApproach}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Competitor Landscape" icon={Target}>
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left text-orange-400 font-medium py-2">Competitor</th>
                      <th className="text-left text-orange-400 font-medium py-2">Model</th>
                      <th className="text-left text-orange-400 font-medium py-2">Cost</th>
                      <th className="text-left text-orange-400 font-medium py-2">Weakness</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">Talabat/Deliveroo</td>
                      <td className="py-2">Delivery marketplace</td>
                      <td className="py-2 text-red-400">30-35%</td>
                      <td className="py-2">Own the customer, no dine-in</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">Chatfood</td>
                      <td className="py-2">Direct ordering</td>
                      <td className="py-2">AED 500+/mo</td>
                      <td className="py-2">No loyalty, no discovery</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">Zyda</td>
                      <td className="py-2">Online ordering</td>
                      <td className="py-2">5-8%</td>
                      <td className="py-2">Delivery only, complex setup</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">Entertainer</td>
                      <td className="py-2">Buy-one-get-one</td>
                      <td className="py-2">Free (devalues brand)</td>
                      <td className="py-2">50% discount, no data</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium text-emerald-400">Nuqta</td>
                      <td className="py-2">Loyalty + Discovery</td>
                      <td className="py-2 text-emerald-400">15-20% (on success)</td>
                      <td className="py-2 text-emerald-400">None - best of all</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                <h4 className="text-emerald-400 font-semibold mb-2">Our Advantage</h4>
                <p className="text-slate-300 text-sm">
                  Unlike delivery apps that take 30%+ and own your customer, Nuqta costs only 15-20%,
                  you keep the customer data, and it works for dine-in customers too.
                </p>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 2: Pre-Meeting Preparation */}
        <div className="mb-8">
          <h2 className="text-orange-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-orange-500 text-[#0a1628] flex items-center justify-center text-xs font-black">2</span>
            Pre-Meeting Preparation
          </h2>

          <CollapsibleSection title="Research Checklist" icon={Users} defaultOpen={true}>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-3">About the Business</h4>
                <div className="space-y-1">
                  <ChecklistItem>Google the cafe/restaurant name + reviews</ChecklistItem>
                  <ChecklistItem>Check their Instagram (followers, engagement, posting frequency)</ChecklistItem>
                  <ChecklistItem>Look at Google Maps rating and review count</ChecklistItem>
                  <ChecklistItem>Visit once as a customer (note service, price, ambiance)</ChecklistItem>
                  <ChecklistItem>Estimate daily footfall (observe or ask)</ChecklistItem>
                  <ChecklistItem>Identify peak hours (breakfast, lunch, evening)</ChecklistItem>
                  <ChecklistItem>Note competitors within 500m radius</ChecklistItem>
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3">About the Decision Maker</h4>
                <div className="space-y-1">
                  <ChecklistItem>Owner or Manager? (Owner is better)</ChecklistItem>
                  <ChecklistItem>LinkedIn profile check</ChecklistItem>
                  <ChecklistItem>Multiple locations? (chain vs independent)</ChecklistItem>
                  <ChecklistItem>Any mutual connections?</ChecklistItem>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Materials to Prepare" icon={FileText}>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-3">Must Have</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left text-orange-400 font-medium py-2">Material</th>
                        <th className="text-left text-orange-400 font-medium py-2">Format</th>
                        <th className="text-left text-orange-400 font-medium py-2">Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      <tr className="border-b border-white/5">
                        <td className="py-2 font-medium">Cafe/Restaurant Deck</td>
                        <td className="py-2">iPad/Phone</td>
                        <td className="py-2">Main presentation</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-2 font-medium">One-Pager</td>
                        <td className="py-2">Printed (5 copies)</td>
                        <td className="py-2">Leave-behind</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-2 font-medium">ROI Calculator</td>
                        <td className="py-2">Phone app/sheet</td>
                        <td className="py-2">Custom math for their business</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-2 font-medium">Contract Template</td>
                        <td className="py-2">Digital (ready to send)</td>
                        <td className="py-2">Close on the spot</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Business Card</td>
                        <td className="py-2">Physical</td>
                        <td className="py-2">Contact exchange</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-orange-500/10 rounded-xl p-4 border border-orange-500/20">
                <h4 className="text-orange-400 font-semibold mb-2">One-Pager Key Points</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• 68% of cafe customers never return</li>
                  <li>• Nuqta brings them back 2.5x more</li>
                  <li>• You pay only 15-20% (vs 30% to delivery apps)</li>
                  <li>• AED 0 upfront, cancel anytime</li>
                  <li>• 500K+ Nuqta users looking for cafes</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 3: The Pitch */}
        <div className="mb-8">
          <h2 className="text-orange-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-orange-500 text-[#0a1628] flex items-center justify-center text-xs font-black">3</span>
            The Pitch
          </h2>

          <CollapsibleSection title="60-Second Pitch" icon={Zap} defaultOpen={true}>
            <div className="bg-gradient-to-r from-orange-500/20 to-transparent rounded-xl p-4 border border-orange-500/30">
              <p className="text-white leading-relaxed">
                &quot;Hey [Name], I noticed [specific observation about their cafe]. Quick question - what percentage of your customers come back more than once?
                <br /><br />
                Most cafes see about 30%. The other 70% visit once and forget about you - even if they loved the coffee.
                <br /><br />
                We&apos;ve built a way to change that. When customers pay their bill, they log it in Nuqta and get 10% back in coins. Those coins? They can only spend them at participating places - including YOUR cafe.
                <br /><br />
                So now they have AED 5-10 sitting there, burning a hole in their pocket. They HAVE to come back. Our cafes see 2.5x more repeat visits.
                <br /><br />
                It costs you nothing upfront. You only pay 15-20% on Nuqta-driven visits. If it doesn&apos;t work, you pay nothing. Can I show you how the math works for YOUR cafe?&quot;
              </p>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="ROI Calculator Script" icon={Calculator}>
            <div className="space-y-4">
              <p className="text-slate-300 text-sm">Use this to calculate their specific ROI on the spot:</p>

              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-white font-semibold mb-3">Step-by-Step Calculation</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-slate-400">1. Their average bill:</span>
                    <span className="text-white font-mono">AED ___</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-slate-400">2. Nuqta customers/month (estimate 100-200):</span>
                    <span className="text-white font-mono">___ customers</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-slate-400">3. Repeat multiplier:</span>
                    <span className="text-emerald-400 font-mono">× 2.5 visits</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-orange-500/20 rounded-lg border border-orange-500/30">
                    <span className="text-orange-400">4. Extra monthly revenue:</span>
                    <span className="text-orange-400 font-mono font-bold">AED ___</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-slate-400">5. Nuqta cost (16%):</span>
                    <span className="text-white font-mono">AED ___</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-emerald-500/20 rounded-lg border border-emerald-500/30">
                    <span className="text-emerald-400">6. Your extra profit (60% margin - 16% cost):</span>
                    <span className="text-emerald-400 font-mono font-bold">AED ___</span>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                <h4 className="text-emerald-400 font-semibold mb-2">Example: Specialty Coffee Shop</h4>
                <p className="text-slate-300 text-sm">
                  AED 50 avg bill × 150 Nuqta customers × 2.5 visits = <strong className="text-white">AED 18,750/month</strong>
                  <br />
                  Cost: AED 3,000 (16%) | <strong className="text-emerald-400">Extra profit: AED 8,250/month</strong>
                </p>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Discovery Questions" icon={MessageSquare}>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-2">Opening Questions</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>1. &quot;How long have you been open here?&quot;</li>
                  <li>2. &quot;What&apos;s your busiest time of day?&quot;</li>
                  <li>3. &quot;Do you see the same faces often, or mostly new people?&quot;</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Pain Point Questions</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>4. &quot;What&apos;s your biggest challenge with marketing right now?&quot;</li>
                  <li>5. &quot;Have you tried Instagram ads? How did that go?&quot;</li>
                  <li>6. &quot;Do you use any loyalty program currently?&quot;</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Closing Questions</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>7. &quot;If I could guarantee 2x more repeat visits at lower cost than ads, would you try it?&quot;</li>
                  <li>8. &quot;What would stop you from trying something that costs AED 0 upfront?&quot;</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 4: Objection Handling */}
        <div className="mb-8">
          <h2 className="text-orange-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-orange-500 text-[#0a1628] flex items-center justify-center text-xs font-black">4</span>
            Objection Handling
          </h2>

          <CollapsibleSection title="Top 10 Objections" icon={Shield} defaultOpen={true}>
            <div className="space-y-4">
              {[
                {
                  objection: '"We already have regular customers"',
                  response: 'Great! This isn\'t about your regulars - they\'ll keep coming anyway. This is about the 70% who visit once and never return. Even adding 10 new regulars per month at AED 50 each = AED 7,500+ extra revenue.'
                },
                {
                  objection: '"15-20% is too expensive"',
                  response: 'Compare to what? Instagram ads cost AED 50+ per customer with no guarantee they return. We cost AED 8-12 per visit AND they come back 2.5x. You\'re paying for actual sales, not impressions.'
                },
                {
                  objection: '"We don\'t need another app"',
                  response: 'You don\'t use the app - customers do. Your operations don\'t change at all. They pay you normally, then log it in Nuqta. You get the data, they get coins, everyone wins.'
                },
                {
                  objection: '"My customers pay cash"',
                  response: 'Perfect - Nuqta works with any payment method. Cash, card, Apple Pay - doesn\'t matter. Customer just scans a QR code after paying. No POS integration needed.'
                },
                {
                  objection: '"We tried loyalty cards before"',
                  response: 'Paper cards have 90% abandonment rate. Nuqta coins are digital, can be spent at 500+ UAE stores, and customers get push notifications when they have coins. It\'s not comparable.'
                },
                {
                  objection: '"We\'re already on Talabat/Deliveroo"',
                  response: 'They charge 30%+ and own your customer data. Plus they\'re delivery only - what about dine-in customers? Nuqta works for all customers, costs less, and YOU own the data.'
                },
                {
                  objection: '"We don\'t have budget for marketing"',
                  response: 'That\'s why this is perfect - AED 0 upfront. You only pay when customers actually come and spend. If nobody comes through Nuqta, you pay nothing.'
                },
                {
                  objection: '"Let me think about it"',
                  response: 'Totally understand. What specifically do you need to think about? I can address any concerns now. Also, we\'re limiting cafes per area - wouldn\'t want your competitor across the street to grab the spot first.'
                },
                {
                  objection: '"I need to check with my partner/owner"',
                  response: 'Makes sense. Can we schedule a call with them this week? I can do the presentation again or answer any questions. What time works best?'
                },
                {
                  objection: '"Come back after Ramadan/summer"',
                  response: 'Actually, slow seasons are the BEST time to build loyalty. Customers you acquire now will be your regulars during peak season. Plus, we\'re doing promotional rates for early sign-ups that won\'t be available later.'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-400 text-xs font-bold">{idx + 1}</span>
                    </div>
                    <p className="text-white font-medium">{item.objection}</p>
                  </div>
                  <div className="flex items-start gap-3 ml-9">
                    <ChevronRight className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                    <p className="text-slate-300 text-sm">{item.response}</p>
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 5: Closing */}
        <div className="mb-8">
          <h2 className="text-orange-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-orange-500 text-[#0a1628] flex items-center justify-center text-xs font-black">5</span>
            Closing the Deal
          </h2>

          <CollapsibleSection title="Closing Scripts" icon={Target} defaultOpen={true}>
            <div className="space-y-4">
              <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="text-green-400" size={18} />
                  <h4 className="text-green-400 font-semibold">The Assumptive Close</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  &quot;Great, so let&apos;s get you set up. I just need your trade license and we can have you live by [day]. Which email should I send the agreement to?&quot;
                </p>
              </div>

              <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="text-yellow-400" size={18} />
                  <h4 className="text-yellow-400 font-semibold">The Urgency Close</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  &quot;Look, we limit cafes per area to protect our partners. There are 3 other cafes within 500m that I&apos;m meeting this week. First to sign gets exclusivity. Want to lock in your spot?&quot;
                </p>
              </div>

              <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="text-blue-400" size={18} />
                  <h4 className="text-blue-400 font-semibold">The Risk Reversal Close</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  &quot;Here&apos;s my commitment: Try us for 30 days. If you don&apos;t see at least 50 new repeat customers, I&apos;ll personally call you and cancel the agreement. No hard feelings. What do you have to lose?&quot;
                </p>
              </div>

              <div className="bg-orange-500/10 rounded-xl p-4 border border-orange-500/30">
                <h4 className="text-orange-400 font-semibold mb-2">Never Leave Without:</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>✓ Signed LOI or contract</li>
                  <li>✓ OR a specific follow-up date/time</li>
                  <li>✓ Their WhatsApp number (not just business line)</li>
                  <li>✓ Name of decision maker if you talked to manager</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Onboarding Timeline" icon={Calendar}>
            <div className="space-y-3">
              {[
                { day: 'Day 0', action: 'Contract signed', owner: 'BDA' },
                { day: 'Day 1', action: 'Trade license + menu received', owner: 'BDA' },
                { day: 'Day 2', action: 'Listing created on Nuqta app', owner: 'Ops' },
                { day: 'Day 3', action: 'QR code + materials delivered', owner: 'Ops' },
                { day: 'Day 4', action: 'Staff training (15 min)', owner: 'BDA' },
                { day: 'Day 5', action: 'GO LIVE! 🎉', owner: 'All' },
                { day: 'Day 7', action: 'First check-in call', owner: 'BDA' },
                { day: 'Day 30', action: 'Performance review + upsell', owner: 'BDA' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                  <div className="w-16 text-orange-400 font-bold text-sm">{item.day}</div>
                  <div className="flex-1 text-white text-sm">{item.action}</div>
                  <div className="text-slate-500 text-xs">{item.owner}</div>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 6: Follow-Up */}
        <div className="mb-8">
          <h2 className="text-orange-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-orange-500 text-[#0a1628] flex items-center justify-center text-xs font-black">6</span>
            Follow-Up Cadence
          </h2>

          <CollapsibleSection title="If Not Closed on Spot" icon={TrendingUp}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-orange-400 font-medium py-2">Day</th>
                    <th className="text-left text-orange-400 font-medium py-2">Channel</th>
                    <th className="text-left text-orange-400 font-medium py-2">Message</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-medium text-white">Day 0</td>
                    <td className="py-2">WhatsApp</td>
                    <td className="py-2">&quot;Great meeting you! Here&apos;s the one-pager we discussed. Let me know if any questions!&quot;</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-medium text-white">Day 2</td>
                    <td className="py-2">WhatsApp</td>
                    <td className="py-2">&quot;Hey [Name], did you get a chance to review? Happy to jump on a quick call.&quot;</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-medium text-white">Day 5</td>
                    <td className="py-2">Call</td>
                    <td className="py-2">&quot;Hi, following up on Nuqta. What questions came up after our chat?&quot;</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-medium text-white">Day 7</td>
                    <td className="py-2">WhatsApp</td>
                    <td className="py-2">&quot;Quick update: We signed [competitor/nearby cafe] yesterday. Just 2 spots left in your area.&quot;</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-medium text-white">Day 14</td>
                    <td className="py-2">Email</td>
                    <td className="py-2">Value-add: Share a cafe success story or industry insight</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium text-white">Day 21</td>
                    <td className="py-2">Final Call</td>
                    <td className="py-2">&quot;Closing the loop - is this still a priority for you? If not, no worries at all.&quot;</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CollapsibleSection>
        </div>

        {/* Quick Reference */}
        <div className="mb-8">
          <h2 className="text-orange-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-orange-500 text-[#0a1628] flex items-center justify-center text-xs font-black">7</span>
            Quick Reference
          </h2>

          <CollapsibleSection title="Key Stats to Remember" icon={Bookmark} defaultOpen={true}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: 'UAE F&B Market', value: '$8.5B' },
                { label: 'Customer Return Rate', value: '32%' },
                { label: 'With Nuqta', value: '80%' },
                { label: 'Commission Range', value: '15-20%' },
                { label: 'Avg Cafe Bill', value: 'AED 55' },
                { label: 'Repeat Visits', value: '2.5x' },
                { label: 'Setup Time', value: '5 days' },
                { label: 'Nuqta Users', value: '500K+' },
                { label: 'F&B LOIs Signed', value: '40%' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                  <p className="text-orange-400 text-lg sm:text-xl font-bold">{stat.value}</p>
                  <p className="text-slate-400 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Power Phrases" icon={Zap}>
            <div className="space-y-2">
              {[
                'Zero upfront, pay only on success',
                '2.5x more repeat visits, guaranteed',
                'You keep the customer data',
                '15% vs 30% to delivery apps',
                'Live in 5 days, cancel anytime',
                '500K hungry users looking for you'
              ].map((phrase, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-green-500/10 rounded-lg px-3 py-2 border border-green-500/20">
                  <CheckCircle2 className="text-green-400 flex-shrink-0" size={16} />
                  <p className="text-white text-sm font-medium">{phrase}</p>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <h4 className="text-red-400 font-semibold mb-2">Never Say:</h4>
              <div className="space-y-2">
                {[
                  '"We need to sign cafes" (sounds desperate)',
                  '"This is free" (nothing is free)',
                  '"Guaranteed results" (illegal in UAE)',
                  '"Better than Entertainer" (avoid comparison attacks)'
                ].map((phrase, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-red-500/10 rounded-lg px-3 py-2 border border-red-500/20">
                    <XCircle className="text-red-400 flex-shrink-0" size={16} />
                    <p className="text-slate-300 text-sm">{phrase}</p>
                  </div>
                ))}
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Marketing Campaigns Section */}
        <div className="mb-8">
          <h2 className="text-orange-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-orange-500 text-[#0a1628] flex items-center justify-center text-xs font-black">★</span>
            Marketing Campaigns
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Merchant Acquisition Campaign */}
            <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl p-6 border border-emerald-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/30 flex items-center justify-center">
                  <Store className="text-emerald-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Merchant Acquisition</h3>
                  <p className="text-emerald-400 text-sm">How to onboard cafe merchants</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Battle-tested campaigns to sign cafe & restaurant merchants. Includes event blitz, referral programs, and category conquest strategies.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Event Blitz: 50-100 merchants in 48 hours</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Category Conquest: F&B vertical domination</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>30-day free trial + QR instant setup</span>
                </div>
              </div>
              <Link
                href="/marketing-war-room?tab=merchant-campaigns"
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg font-semibold text-sm hover:bg-emerald-600 transition-colors"
              >
                <Megaphone size={16} />
                View Merchant Campaigns
              </Link>
            </div>

            {/* User Acquisition Campaign */}
            <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl p-6 border border-purple-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/30 flex items-center justify-center">
                  <Users className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">User Acquisition</h3>
                  <p className="text-purple-400 text-sm">How to bring customers to cafes</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Viral campaigns to drive customers to your partner cafes. Referral chains, streak rewards, and UGC campaigns for F&B discovery.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-purple-400" />
                  <span>Golden Chain Referral: K-factor 1.2+</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-purple-400" />
                  <span>Nuqta Finds: UGC cafe reviews</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-purple-400" />
                  <span>Neighborhood Champions: Local F&B focus</span>
                </div>
              </div>
              <Link
                href="/marketing-war-room?tab=user-campaigns"
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg font-semibold text-sm hover:bg-purple-600 transition-colors"
              >
                <Users size={16} />
                View User Campaigns
              </Link>
            </div>
          </div>

          {/* Quick Campaign Stats */}
          <div className="mt-4 bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-orange-400">5</p>
                <p className="text-xs text-slate-400">Merchant Campaigns</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-400">6</p>
                <p className="text-xs text-slate-400">User Campaigns</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-400">40%</p>
                <p className="text-xs text-slate-400">F&B LOI Share</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#c9a227]">2.5x</p>
                <p className="text-xs text-slate-400">Repeat Rate Target</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Footer */}
        <div className="bg-gradient-to-r from-orange-500/20 to-transparent rounded-2xl p-6 border border-orange-500/30 text-center">
          <Coffee className="text-orange-400 mx-auto mb-3" size={32} />
          <h3 className="text-white font-bold text-lg mb-2">Ready for the Meeting?</h3>
          <p className="text-slate-400 text-sm mb-4">Access the pitch deck and other materials</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/deck-cafe" className="px-4 py-2 bg-orange-500 text-white rounded-full font-semibold text-sm hover:bg-orange-600 transition-colors">
              View Cafe Deck
            </Link>
            <Link href="/contracts" className="px-4 py-2 bg-white/10 text-white rounded-full font-semibold text-sm hover:bg-white/20 transition-colors">
              Contract Template
            </Link>
            <Link href="/merchant-packages" className="px-4 py-2 bg-white/10 text-white rounded-full font-semibold text-sm hover:bg-white/20 transition-colors">
              Pricing Packages
            </Link>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-4 justify-center text-sm">
            <div className="flex items-center gap-2 text-slate-400">
              <Mail size={14} />
              <span>merchants@nuqtapp.com</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Phone size={14} />
              <span>+971 50 376 4345</span>
            </div>
          </div>
        </div>

        {/* Version */}
        <p className="text-center text-slate-600 text-xs mt-8">
          Cafe & Restaurant Playbook v1.0 • Last Updated: February 2026
        </p>
      </div>
    </div>
  );
};

export default CafePlaybook;
