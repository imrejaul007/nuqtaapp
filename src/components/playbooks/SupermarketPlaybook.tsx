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
  Phone,
  Mail,
  Clock,
  Bookmark,
  CheckCircle2,
  TrendingUp,
  Zap,
  Shield,
  DollarSign,
  BarChart3,
  Calculator,
  ArrowLeft,
  ShoppingCart,
  Store,
  Package,
  Truck,
  UserCheck,
  Monitor,
  Camera,
  Megaphone,
  MapPin,
  Receipt,
  Sparkles,
  Coins,
  CreditCard,
  Percent,
  Tag
} from 'lucide-react';

/**
 * SUPERMARKET & GROCERY SALES PLAYBOOK
 * Complete sales guide for grocery/supermarket merchant acquisition
 *
 * Industry: Supermarkets, Grocery Stores, Hypermarkets, Organic Stores
 * Engine: B (Low Margin 8-20%)
 * Commission: 5-8% (requires Brand Coins)
 *
 * UAE Market Stats:
 * - Average basket: AED 150-400
 * - Visit frequency: 2-4x per week
 * - Margin: 15-25%
 * - Grocery retail market UAE: $15B
 * - 20% of Nuqta LOIs are grocery/retail
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
          <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
            <Icon className="text-green-400" size={20} />
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

const SupermarketPlaybook = () => {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Header */}
      <div className="bg-gradient-to-b from-green-500/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
          <Link href="/merchant-playbook" className="inline-flex items-center gap-2 text-slate-400 hover:text-green-400 mb-6 transition-colors">
            <ArrowLeft size={20} />
            <span>All Playbooks</span>
          </Link>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full mb-6">
              <ShoppingCart className="text-green-400" size={16} />
              <span className="text-green-400 text-sm font-medium">Engine B • Low Margin</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              <span className="text-green-400">Supermarket & Grocery</span> Sales Playbook
            </h1>
            <p className="text-slate-400 text-lg">Complete guide to signing grocery merchants</p>
            <p className="text-slate-500 text-sm mt-2">Brand Coins Required • High Volume, Lower Commission</p>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Avg Basket', value: 'AED 250' },
            { label: 'Visit Frequency', value: '3x/week' },
            { label: 'Commission', value: '5-8%' },
            { label: 'Nuqta LOIs', value: '20%' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
              <p className="text-green-400 text-xl font-black">{stat.value}</p>
              <p className="text-slate-400 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Engine B Notice */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <Coins className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
            <div>
              <h3 className="text-yellow-400 font-bold mb-1">Engine B - Brand Coins Required</h3>
              <p className="text-slate-300 text-sm">
                Supermarkets operate on low margins (15-25%). Standard cashback isn&apos;t viable.
                They must participate via <strong className="text-white">Brand Coins</strong> - where brands fund the rewards, not the store.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-32">

        {/* Part 1: Industry Overview */}
        <div className="mb-8">
          <h2 className="text-green-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-green-500 text-[#0a1628] flex items-center justify-center text-xs font-black">1</span>
            Industry Overview
          </h2>

          <CollapsibleSection title="Grocery Market in UAE" icon={BarChart3} defaultOpen={true}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'UAE Grocery Market', value: '$15B' },
                  { label: 'Supermarkets in UAE', value: '2,500+' },
                  { label: 'Hypermarkets', value: '150+' },
                  { label: 'Avg Margin', value: '15-25%' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                    <p className="text-green-400 text-lg font-bold">{stat.value}</p>
                    <p className="text-slate-400 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                <h4 className="text-green-400 font-semibold mb-2">Key Pain Points</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Extremely thin margins (15-25%) make discounts risky</li>
                  <li>• Hard to differentiate from competitors</li>
                  <li>• Dark store / quick commerce eating into sales</li>
                  <li>• Customer loyalty is purely price-based</li>
                  <li>• Promotional costs eaten by store, not brands</li>
                  <li>• Limited customer data from cash transactions</li>
                </ul>
              </div>

              <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20">
                <h4 className="text-blue-400 font-semibold mb-2">Why They Need Nuqta (Brand Coins Model)</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Brands fund the rewards - zero cost to store</li>
                  <li>• Drives traffic without margin erosion</li>
                  <li>• Customer data and purchase insights</li>
                  <li>• Gamified loyalty increases basket size</li>
                  <li>• Competes with quick commerce on experience</li>
                  <li>• Brands get direct access to customers</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="What Nuqta Provides for Grocery" icon={Sparkles} defaultOpen={true}>
            <div className="space-y-4">
              <p className="text-slate-300 text-sm">
                For supermarkets, Nuqta works differently. Brands fund the rewards, stores get the traffic.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Coins,
                    title: 'Brand Coins Integration',
                    desc: 'Major FMCG brands (Nestle, P&G, Unilever) fund rewards when customers buy their products at your store.',
                    tier: 'All Tiers'
                  },
                  {
                    icon: Monitor,
                    title: 'POS Integration',
                    desc: 'We integrate with your existing POS system to track SKU-level purchases for brand coin attribution.',
                    tier: 'Required'
                  },
                  {
                    icon: UserCheck,
                    title: 'Dedicated Account Manager',
                    desc: 'Personal manager to handle brand partnerships, campaigns, and ensure smooth operations.',
                    tier: 'Basic+'
                  },
                  {
                    icon: Tag,
                    title: 'In-Store Promotions',
                    desc: 'Shelf talkers, digital displays, and promotional materials for Brand Coins campaigns.',
                    tier: 'All Tiers'
                  },
                  {
                    icon: BarChart3,
                    title: 'Analytics Dashboard',
                    desc: 'Real-time insights on customer behavior, popular SKUs, brand performance, and basket analysis.',
                    tier: 'Basic+'
                  },
                  {
                    icon: Megaphone,
                    title: 'Digital Marketing',
                    desc: 'Push notifications to Nuqta users about deals, new products, and exclusive offers at your store.',
                    tier: 'Golden+'
                  },
                  {
                    icon: MapPin,
                    title: 'Location Marketing',
                    desc: 'Geo-targeted campaigns to drive foot traffic from nearby Nuqta users.',
                    tier: 'Basic+'
                  },
                  {
                    icon: Receipt,
                    title: 'Brand Partnership Revenue',
                    desc: 'Earn additional revenue from brands who want to run campaigns in your store.',
                    tier: 'Golden+'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="text-green-400" size={20} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-white font-bold text-sm">{item.title}</h4>
                          <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full">{item.tier}</span>
                        </div>
                        <p className="text-slate-400 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-500/30">
                <h4 className="text-green-400 font-bold mb-2">💡 Key Selling Point: Zero Cost to Store</h4>
                <p className="text-slate-300 text-sm">
                  &quot;Unlike traditional loyalty programs, Nuqta Brand Coins cost you nothing.
                  Brands like Nestle and P&G fund the rewards when customers buy their products.
                  You get the traffic, the data, and the loyalty - brands pay for it.&quot;
                </p>
              </div>

              {/* Investment Breakdown */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 mt-4">
                <h4 className="text-white font-bold mb-3">📊 How We Invest Your Package Fee</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-green-400 font-bold text-2xl">70%</span>
                      <span className="text-green-400 text-sm font-medium">Content & Creative</span>
                    </div>
                    <ul className="text-slate-300 text-xs space-y-1">
                      <li>• Professional store photography</li>
                      <li>• Product & promo videos</li>
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
                        Whatever you spend on your package, you get the <span className="text-green-400 font-bold">same amount as in-app advertising credit</span> to promote your store to Nuqta users!
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
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Target Sub-Categories" icon={Store}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  category: 'Hypermarket',
                  avgBill: 'AED 300-600',
                  frequency: '1-2x/week',
                  margin: '15-20%',
                  bestApproach: 'Focus on brand partnerships, data'
                },
                {
                  category: 'Supermarket Chain',
                  avgBill: 'AED 150-300',
                  frequency: '2-3x/week',
                  margin: '18-22%',
                  bestApproach: 'Focus on customer loyalty, basket size'
                },
                {
                  category: 'Neighborhood Grocery',
                  avgBill: 'AED 50-150',
                  frequency: '4-5x/week',
                  margin: '20-25%',
                  bestApproach: 'Focus on convenience, community'
                },
                {
                  category: 'Organic/Health Store',
                  avgBill: 'AED 200-400',
                  frequency: '2x/week',
                  margin: '30-40%',
                  bestApproach: 'Higher margin - can do Engine A'
                },
                {
                  category: 'Wholesale/Cash & Carry',
                  avgBill: 'AED 500-2000',
                  frequency: '1-2x/month',
                  margin: '10-15%',
                  bestApproach: 'Focus on B2B, bulk rewards'
                },
                {
                  category: 'Convenience Store',
                  avgBill: 'AED 30-80',
                  frequency: 'Daily',
                  margin: '25-30%',
                  bestApproach: 'High frequency, small basket - focus on visits'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h4 className="text-green-400 font-bold mb-2">{item.category}</h4>
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
                      <span className="text-green-400 ml-1">{item.margin}</span>
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
                      <th className="text-left text-green-400 font-medium py-2">Competitor</th>
                      <th className="text-left text-green-400 font-medium py-2">Model</th>
                      <th className="text-left text-green-400 font-medium py-2">Cost</th>
                      <th className="text-left text-green-400 font-medium py-2">Weakness</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">Smiles (Etisalat)</td>
                      <td className="py-2">Points program</td>
                      <td className="py-2">Integration cost</td>
                      <td className="py-2">Telecom-focused, limited retail</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">SHARE (Carrefour)</td>
                      <td className="py-2">Store-owned loyalty</td>
                      <td className="py-2">Internal</td>
                      <td className="py-2">Only works at Carrefour</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">Quick Commerce (Talabat, etc)</td>
                      <td className="py-2">Delivery</td>
                      <td className="py-2 text-red-400">25-30% fee</td>
                      <td className="py-2">Takes customers away from store</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">Paper Loyalty Cards</td>
                      <td className="py-2">Stamps/punch</td>
                      <td className="py-2">Low</td>
                      <td className="py-2">No data, easy to lose, boring</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium text-green-400">Nuqta Brand Coins</td>
                      <td className="py-2">Brand-funded rewards</td>
                      <td className="py-2 text-green-400">AED 0 to store</td>
                      <td className="py-2 text-green-400">Best value</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                <h4 className="text-green-400 font-semibold mb-2">Our Advantage</h4>
                <p className="text-slate-300 text-sm">
                  Unlike store-funded loyalty programs that eat into slim margins, Nuqta Brand Coins are funded by brands.
                  The store gets customer traffic and data at ZERO cost. Brands get product-level attribution. Everyone wins.
                </p>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 2: The Pitch */}
        <div className="mb-8">
          <h2 className="text-green-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-green-500 text-[#0a1628] flex items-center justify-center text-xs font-black">2</span>
            The Pitch
          </h2>

          <CollapsibleSection title="60-Second Pitch" icon={Zap} defaultOpen={true}>
            <div className="bg-gradient-to-r from-green-500/20 to-transparent rounded-xl p-4 border border-green-500/30">
              <p className="text-white leading-relaxed">
                &quot;Hi [Name], I know supermarkets run on thin margins - 15-20%. So traditional loyalty programs don&apos;t work, right?
                <br /><br />
                We&apos;ve built something different. When customers buy products from brands like Nestle, P&G, or Unilever at your store,
                THOSE BRANDS pay the rewards - not you. We call it Brand Coins.
                <br /><br />
                So your customers come to YOUR store to earn coins on branded products. They keep coming back. You get the traffic,
                you get the data on what they buy, and it costs you literally AED 0.
                <br /><br />
                The brands are already signed up. They WANT to run campaigns at stores like yours.
                Can I show you which brands are actively looking to partner?&quot;
              </p>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="ROI Calculator" icon={Calculator}>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-white font-semibold mb-3">Step-by-Step Calculation</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-slate-400">1. Daily footfall:</span>
                    <span className="text-white font-mono">___ customers</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-slate-400">2. Nuqta users (estimate 20-30%):</span>
                    <span className="text-white font-mono">___ customers</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-slate-400">3. Avg basket increase with loyalty:</span>
                    <span className="text-green-400 font-mono">+15-20%</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-slate-400">4. Additional visits per month:</span>
                    <span className="text-green-400 font-mono">+2 visits</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-green-500/20 rounded-lg border border-green-500/30">
                    <span className="text-green-400">5. Extra monthly revenue:</span>
                    <span className="text-green-400 font-mono font-bold">AED ___</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
                    <span className="text-yellow-400">6. Cost to store:</span>
                    <span className="text-yellow-400 font-mono font-bold">AED 0</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                <h4 className="text-green-400 font-semibold mb-2">Example: Medium Supermarket</h4>
                <p className="text-slate-300 text-sm">
                  500 daily customers × 25% Nuqta users = 125 users × AED 250 basket × 15% increase = <strong className="text-white">AED 4,687/day extra</strong>
                  <br />
                  Cost: <strong className="text-green-400">AED 0</strong> | Extra monthly revenue: <strong className="text-green-400">AED 140,000+</strong>
                </p>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Brand Coins Explained" icon={Coins}>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-white font-semibold mb-3">How Brand Coins Work</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-400 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Brand Signs Up with Nuqta</p>
                      <p className="text-slate-400 text-sm">Nestle, P&G, Unilever, etc. fund coin rewards for their products</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-400 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Customer Buys at Your Store</p>
                      <p className="text-slate-400 text-sm">Scans receipt or POS integration tracks purchase</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-400 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Brand Pays the Coins</p>
                      <p className="text-slate-400 text-sm">Customer gets 5-15% back on branded items - funded by brand</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-400 font-bold text-sm">4</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Store Gets Traffic + Data</p>
                      <p className="text-slate-400 text-sm">You get more customers, basket insights, and it costs you nothing</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-4 border border-green-500/30">
                <h4 className="text-white font-semibold mb-2">Current Brand Partners</h4>
                <div className="flex flex-wrap gap-2">
                  {['Nestle', 'P&G', 'Unilever', 'Mars', 'PepsiCo', 'Coca-Cola', 'Almarai', 'Al Ain'].map((brand, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-white text-sm">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 3: Objection Handling */}
        <div className="mb-8">
          <h2 className="text-green-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-green-500 text-[#0a1628] flex items-center justify-center text-xs font-black">3</span>
            Objection Handling
          </h2>

          <CollapsibleSection title="Top 10 Objections" icon={Shield} defaultOpen={true}>
            <div className="space-y-4">
              {[
                {
                  objection: '"Our margins are too thin for discounts"',
                  response: 'That\'s exactly why Brand Coins exist. The brands fund the rewards, not you. Your margins stay intact. You just get more customers coming through the door.'
                },
                {
                  objection: '"We already have our own loyalty card"',
                  response: 'Does your loyalty card bring in NEW customers? Nuqta has 500K+ users looking for places to earn coins. We bring you traffic you don\'t have access to otherwise.'
                },
                {
                  objection: '"POS integration sounds complicated"',
                  response: 'We integrate with all major POS systems - Oracle, SAP, NCR. Our tech team handles everything. Most integrations are done in 2 weeks with zero disruption.'
                },
                {
                  objection: '"What if brands don\'t want my store?"',
                  response: 'Brands want distribution. They need stores like yours to reach customers. We already have 10+ brands actively looking for partners. Let me show you the list.'
                },
                {
                  objection: '"Customers won\'t download another app"',
                  response: 'Nuqta already has 500K+ users in UAE. They\'re not downloading for you - they already have it. They\'re LOOKING for places to earn coins. You just become an option.'
                },
                {
                  objection: '"Quick commerce is taking our customers"',
                  response: 'Exactly! Talabat charges you 25-30% and takes your customer data. Nuqta drives customers TO your store, costs you nothing, and you keep the relationship.'
                },
                {
                  objection: '"We\'re part of a chain, I can\'t decide"',
                  response: 'Let\'s do a pilot at your location. If it works, you bring the data to HQ. Win for you personally. We\'ll provide all the reporting.'
                },
                {
                  objection: '"I don\'t understand how it\'s free"',
                  response: 'Brands pay Nuqta for access to customers. Nuqta pays for the infrastructure. You provide the store. Customers earn coins. Everyone has a role - yours is providing the location.'
                },
                {
                  objection: '"What data do you collect?"',
                  response: 'We collect purchase data - what items were bought, when, how much. This helps brands understand purchasing patterns. You get access to these insights for your own use.'
                },
                {
                  objection: '"Sounds too good to be true"',
                  response: 'It\'s just a different model. Like how Google is free because advertisers pay. Nuqta is free to stores because brands pay. Here are 3 supermarkets already using it - call them.'
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

        {/* Part 4: Closing */}
        <div className="mb-8">
          <h2 className="text-green-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-green-500 text-[#0a1628] flex items-center justify-center text-xs font-black">4</span>
            Closing the Deal
          </h2>

          <CollapsibleSection title="Closing Scripts" icon={Target} defaultOpen={true}>
            <div className="space-y-4">
              <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="text-green-400" size={18} />
                  <h4 className="text-green-400 font-semibold">The Zero Cost Close</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  &quot;What if I told you we could add 20% to your customer traffic at zero cost?
                  Brands are literally paying to send customers to your store. Want to see the math?&quot;
                </p>
              </div>

              <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="text-yellow-400" size={18} />
                  <h4 className="text-yellow-400 font-semibold">The Urgency Close</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  &quot;Brands have limited campaign budgets this quarter. First 5 supermarkets in your area get priority placement.
                  Your competitor down the road is already in talks. Lock in your spot?&quot;
                </p>
              </div>

              <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="text-blue-400" size={18} />
                  <h4 className="text-blue-400 font-semibold">The Quick Commerce Counter</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  &quot;Talabat is taking 25% of your customers. With Nuqta, those customers come BACK to your store -
                  because that&apos;s where they earn coins. Fight back at zero cost.&quot;
                </p>
              </div>

              <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/30">
                <h4 className="text-green-400 font-semibold mb-2">Never Leave Without:</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>✓ Signed LOI or meeting with HQ</li>
                  <li>✓ POS system details (make/model)</li>
                  <li>✓ Avg daily footfall numbers</li>
                  <li>✓ WhatsApp of store manager + owner</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Quick Reference */}
        <div className="mb-8">
          <h2 className="text-green-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-green-500 text-[#0a1628] flex items-center justify-center text-xs font-black">5</span>
            Quick Reference
          </h2>

          <CollapsibleSection title="Key Stats" icon={Bookmark} defaultOpen={true}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: 'UAE Grocery Market', value: '$15B' },
                { label: 'Avg Basket', value: 'AED 250' },
                { label: 'Commission', value: '5-8%' },
                { label: 'Store Cost', value: 'AED 0' },
                { label: 'Brand Partners', value: '10+' },
                { label: 'Basket Increase', value: '+15-20%' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                  <p className="text-green-400 text-lg sm:text-xl font-bold">{stat.value}</p>
                  <p className="text-slate-400 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Power Phrases" icon={Zap}>
            <div className="space-y-2">
              {[
                'Zero cost to your store',
                'Brands fund the rewards',
                'Fight back against quick commerce',
                'Keep your margins intact',
                'Own your customer data',
                '500K users looking for places to shop'
              ].map((phrase, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-green-500/10 rounded-lg px-3 py-2 border border-green-500/20">
                  <CheckCircle2 className="text-green-400 flex-shrink-0" size={16} />
                  <p className="text-white text-sm font-medium">{phrase}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Contact Footer */}
        <div className="bg-gradient-to-r from-green-500/20 to-transparent rounded-2xl p-6 border border-green-500/30 text-center">
          <ShoppingCart className="text-green-400 mx-auto mb-3" size={32} />
          <h3 className="text-white font-bold text-lg mb-2">Ready for the Meeting?</h3>
          <p className="text-slate-400 text-sm mb-4">Access the pitch deck and other materials</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/deck-merchant" className="px-4 py-2 bg-green-500 text-white rounded-full font-semibold text-sm hover:bg-green-600 transition-colors">
              View Grocery Deck
            </Link>
            <Link href="/contracts" className="px-4 py-2 bg-white/10 text-white rounded-full font-semibold text-sm hover:bg-white/20 transition-colors">
              Contract Template
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

        <p className="text-center text-slate-600 text-xs mt-8">
          Supermarket & Grocery Playbook v1.0 • Last Updated: February 2026
        </p>
      </div>
    </div>
  );
};

export default SupermarketPlaybook;
