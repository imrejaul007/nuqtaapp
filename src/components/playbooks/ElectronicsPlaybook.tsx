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
  Smartphone,
  Laptop,
  Tv,
  Headphones,
  UserCheck,
  Monitor,
  Camera,
  Megaphone,
  MapPin,
  Receipt,
  Sparkles,
  Coins,
  Wrench,
  Package,
  Store
} from 'lucide-react';

/**
 * ELECTRONICS SALES PLAYBOOK
 * Complete sales guide for electronics merchant acquisition
 *
 * Industry: Mobile Stores, Computer Shops, Electronics Retailers, Appliance Stores
 * Engine: B (Low Margin 5-15%)
 * Commission: 5-8%
 *
 * UAE Market Stats:
 * - Average transaction: AED 500-5,000
 * - Visit frequency: 2-4x per year
 * - Margin: 5-15%
 * - Electronics market UAE: $8B
 * - 8% of Nuqta LOIs are electronics
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
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
            <Icon className="text-cyan-400" size={20} />
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

const ElectronicsPlaybook = () => {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Header */}
      <div className="bg-gradient-to-b from-cyan-500/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
          <Link href="/merchant-playbook" className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 mb-6 transition-colors">
            <ArrowLeft size={20} />
            <span>All Playbooks</span>
          </Link>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 rounded-full mb-6">
              <Smartphone className="text-cyan-400" size={16} />
              <span className="text-cyan-400 text-sm font-medium">Engine B • Low Margin</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              <span className="text-cyan-400">Electronics</span> Sales Playbook
            </h1>
            <p className="text-slate-400 text-lg">Complete guide to signing electronics merchants</p>
            <p className="text-slate-500 text-sm mt-2">High Ticket Items • Price Competitive Market</p>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Avg Transaction', value: 'AED 1,500' },
            { label: 'Frequency', value: '2-4x/year' },
            { label: 'Commission', value: '5-8%' },
            { label: 'Nuqta LOIs', value: '8%' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
              <p className="text-cyan-400 text-xl font-black">{stat.value}</p>
              <p className="text-slate-400 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-32">

        {/* Part 1: Industry Overview */}
        <div className="mb-8">
          <h2 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-cyan-500 text-[#0a1628] flex items-center justify-center text-xs font-black">1</span>
            Industry Overview
          </h2>

          <CollapsibleSection title="Electronics Market in UAE" icon={BarChart3} defaultOpen={true}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'UAE Electronics Market', value: '$8B' },
                  { label: 'Retail Stores', value: '3,000+' },
                  { label: 'Mobile Shops', value: '1,500+' },
                  { label: 'Avg Margin', value: '5-15%' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                    <p className="text-cyan-400 text-lg font-bold">{stat.value}</p>
                    <p className="text-slate-400 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                <h4 className="text-red-400 font-semibold mb-2">🇦🇪 GCC-Specific Pain Points</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• <strong className="text-red-300">Amazon/Noon crushing retail</strong> - same-day delivery, better prices</li>
                  <li>• <strong className="text-red-300">Paper-thin margins 5-15%</strong> on phones (iPhone margin ~AED 50)</li>
                  <li>• <strong className="text-red-300">3,000+ electronics stores in UAE</strong> - brutal Computer Plaza competition</li>
                  <li>• <strong className="text-red-300">Customers price-check on phone</strong> while standing in store</li>
                  <li>• <strong className="text-red-300">Gray market imports</strong> from India/Singapore undercutting prices</li>
                  <li>• <strong className="text-red-300">Extended warranty is real profit</strong> but hard to sell</li>
                  <li>• <strong className="text-red-300">iPhone launch madness</strong> then crickets for months</li>
                  <li>• <strong className="text-red-300">DSF/Gitex conditioning</strong> - customers wait for "festival prices"</li>
                  <li>• <strong className="text-red-300">No trade-in system</strong> vs Apple Store direct</li>
                  <li>• <strong className="text-red-300">Accessories are margin</strong> but customers buy from Amazon</li>
                </ul>
              </div>

              <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                <h4 className="text-emerald-400 font-semibold mb-2">✨ How Nuqta Solves Each Pain Point</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• <strong className="text-red-300">Amazon/Noon crushing retail?</strong> → <strong className="text-emerald-300">Coins on purchases online can&apos;t match</strong> - in-store rewards beat delivery</li>
                  <li>• <strong className="text-red-300">Paper-thin margins 5-15%?</strong> → <strong className="text-emerald-300">Only 5-8% commission</strong> - sustainable for low-margin electronics</li>
                  <li>• <strong className="text-red-300">3,000+ stores competing?</strong> → <strong className="text-emerald-300">Stand out with rewards</strong> - be the store where customers earn coins</li>
                  <li>• <strong className="text-red-300">Price-check while in store?</strong> → <strong className="text-emerald-300">Coins close the deal</strong> - rewards make your price effectively lower</li>
                  <li>• <strong className="text-red-300">Gray market undercutting?</strong> → <strong className="text-emerald-300">Warranty + rewards</strong> - legitimate purchase with coins beats shady import</li>
                  <li>• <strong className="text-red-300">Extended warranty hard sell?</strong> → <strong className="text-emerald-300">Bonus coins on warranty</strong> - incentivize the upsell customers need</li>
                  <li>• <strong className="text-red-300">iPhone then crickets?</strong> → <strong className="text-emerald-300">Accessory campaigns</strong> - drive case, charger, AirPods sales between launches</li>
                  <li>• <strong className="text-red-300">DSF/Gitex waiting?</strong> → <strong className="text-emerald-300">Bonus coins drive traffic NOW</strong> - rewards without festival discounts</li>
                  <li>• <strong className="text-red-300">No trade-in vs Apple?</strong> → <strong className="text-emerald-300">Upgrade notifications</strong> - 2-year cycle alerts bring customers back</li>
                  <li>• <strong className="text-red-300">Accessories to Amazon?</strong> → <strong className="text-emerald-300">Redeem coins on accessories</strong> - high-margin upsell with earned rewards</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="What Nuqta Provides for Electronics" icon={Sparkles} defaultOpen={true}>
            <div className="space-y-4">
              <p className="text-slate-300 text-sm">
                For electronics stores, Nuqta helps compete with online giants by adding loyalty and discovery.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: UserCheck,
                    title: 'Dedicated Account Manager',
                    desc: 'Personal manager for campaign planning, seasonal promotions, and tech product launches.',
                    tier: 'Basic+'
                  },
                  {
                    icon: Monitor,
                    title: 'POS Integration',
                    desc: 'Seamless integration with your billing system for automatic transaction logging.',
                    tier: 'All Tiers'
                  },
                  {
                    icon: Camera,
                    title: 'Product Content',
                    desc: 'Professional product videos, Instagram Reels, and tech review content for your social media.',
                    tier: 'Golden+'
                  },
                  {
                    icon: Package,
                    title: 'Trade-In Marketing',
                    desc: 'Automated reminders to customers about trade-in opportunities for their old devices.',
                    tier: 'Basic+'
                  },
                  {
                    icon: Wrench,
                    title: 'Service Reminders',
                    desc: 'Warranty expiry reminders, service due notifications, and upgrade suggestions.',
                    tier: 'Basic+'
                  },
                  {
                    icon: Megaphone,
                    title: 'Launch Campaigns',
                    desc: 'Specialized campaigns for new product launches (iPhone, Samsung Galaxy, etc.).',
                    tier: 'Golden+'
                  },
                  {
                    icon: MapPin,
                    title: 'In-Store Materials',
                    desc: 'Counter cards, shelf talkers, and QR displays for Nuqta promotion.',
                    tier: 'All Tiers'
                  },
                  {
                    icon: Coins,
                    title: 'Brand Partnerships',
                    desc: 'Access to brand-funded promotions from Samsung, Apple, Sony, etc.',
                    tier: 'Golden+'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="text-cyan-400" size={20} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-white font-bold text-sm">{item.title}</h4>
                          <span className="text-xs px-2 py-0.5 bg-cyan-500/20 text-cyan-400 rounded-full">{item.tier}</span>
                        </div>
                        <p className="text-slate-400 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl p-4 border border-cyan-500/30">
                <h4 className="text-cyan-400 font-bold mb-2">📱 Sales Tip: Focus on Accessories & Repeat Purchases</h4>
                <p className="text-slate-300 text-sm">
                  &quot;The phone sale might be 5% margin. But the case, charger, earbuds, and screen protector are 30-50% margin.
                  Nuqta brings customers back for accessories, repairs, and upgrades - where you actually make money.&quot;
                </p>
              </div>

              {/* Investment Breakdown */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 mt-4">
                <h4 className="text-white font-bold mb-3">📊 How We Invest Your Package Fee</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-cyan-400 font-bold text-2xl">70%</span>
                      <span className="text-cyan-400 text-sm font-medium">Content & Creative</span>
                    </div>
                    <ul className="text-slate-300 text-xs space-y-1">
                      <li>• Professional product photography</li>
                      <li>• Tech review videos & Reels</li>
                      <li>• Social media content</li>
                      <li>• UGC creation</li>
                      <li>• Tech influencer deals</li>
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
                        Whatever you spend on your package, you get the <span className="text-green-400 font-bold">same amount as in-app advertising credit</span> to promote your electronics store to Nuqta users!
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

          <CollapsibleSection title="Target Sub-Categories" icon={Laptop}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  category: 'Mobile Phone Store',
                  avgBill: 'AED 2,000-5,000',
                  frequency: '1-2x/year',
                  margin: '5-10%',
                  bestApproach: 'Focus on accessories, repairs, trade-ins'
                },
                {
                  category: 'Computer Shop',
                  avgBill: 'AED 3,000-8,000',
                  frequency: '1x every 2-3 years',
                  margin: '8-15%',
                  bestApproach: 'Focus on peripherals, upgrades, repairs'
                },
                {
                  category: 'Electronics Hypermarket',
                  avgBill: 'AED 500-3,000',
                  frequency: '3-4x/year',
                  margin: '10-20%',
                  bestApproach: 'Focus on appliances, accessories'
                },
                {
                  category: 'Gaming Store',
                  avgBill: 'AED 200-2,000',
                  frequency: '4-6x/year',
                  margin: '15-25%',
                  bestApproach: 'Focus on games, accessories, community'
                },
                {
                  category: 'Home Appliances',
                  avgBill: 'AED 1,000-10,000',
                  frequency: '1-2x/year',
                  margin: '15-25%',
                  bestApproach: 'Focus on warranty, installation'
                },
                {
                  category: 'Accessories & Repairs',
                  avgBill: 'AED 100-500',
                  frequency: '4-6x/year',
                  margin: '30-50%',
                  bestApproach: 'High margin - Engine A eligible'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h4 className="text-cyan-400 font-bold mb-2">{item.category}</h4>
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
                      <span className="text-cyan-400 ml-1">{item.margin}</span>
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
                      <th className="text-left text-cyan-400 font-medium py-2">Competitor</th>
                      <th className="text-left text-cyan-400 font-medium py-2">Model</th>
                      <th className="text-left text-cyan-400 font-medium py-2">Cost</th>
                      <th className="text-left text-cyan-400 font-medium py-2">Weakness</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">Amazon/Noon</td>
                      <td className="py-2">E-commerce</td>
                      <td className="py-2">Lower prices</td>
                      <td className="py-2">No physical experience, returns hassle</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">Sharaf DG</td>
                      <td className="py-2">Store loyalty</td>
                      <td className="py-2">Internal</td>
                      <td className="py-2">Brand-specific, limited flexibility</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">Jumbo</td>
                      <td className="py-2">Store loyalty</td>
                      <td className="py-2">Internal</td>
                      <td className="py-2">Only works at Jumbo</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">Brand stores (Apple, Samsung)</td>
                      <td className="py-2">Direct retail</td>
                      <td className="py-2">Premium prices</td>
                      <td className="py-2">Limited selection, fixed pricing</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium text-cyan-400">Nuqta</td>
                      <td className="py-2">Loyalty + Discovery</td>
                      <td className="py-2 text-cyan-400">5-8%</td>
                      <td className="py-2 text-cyan-400">Best value</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-cyan-500/10 rounded-xl p-4 border border-cyan-500/20">
                <h4 className="text-cyan-400 font-semibold mb-2">Our Advantage</h4>
                <p className="text-slate-300 text-sm">
                  Online can&apos;t match the in-person experience - trying products, getting expert advice, immediate pickup.
                  Nuqta adds a loyalty layer that makes choosing physical retail rewarding AND smart.
                </p>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 2: The Pitch */}
        <div className="mb-8">
          <h2 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-cyan-500 text-[#0a1628] flex items-center justify-center text-xs font-black">2</span>
            The Pitch
          </h2>

          <CollapsibleSection title="60-Second Pitch" icon={Zap} defaultOpen={true}>
            <div className="bg-gradient-to-r from-cyan-500/20 to-transparent rounded-xl p-4 border border-cyan-500/30">
              <p className="text-white leading-relaxed">
                &quot;Hi [Name], I know electronics margins are tough - maybe 5-10% on phones. And Amazon is always undercutting, right?
                <br /><br />
                Here&apos;s what we&apos;ve figured out. When someone buys a phone from you, they earn 5% back in Nuqta coins. Now when they need a case, charger, or earbuds - where do they go?
                <br /><br />
                YOUR store. Because they have coins to spend. And accessories are 30-50% margin.
                <br /><br />
                Plus, when their phone is 18 months old, we remind them about trade-ins. When warranty expires, we remind them. They keep coming back.
                <br /><br />
                You pay 5-8% on Nuqta sales. But think about it - the accessory sales alone cover that. Want to see the numbers for your store?&quot;
              </p>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="ROI Calculator" icon={Calculator}>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-white font-semibold mb-3">Step-by-Step Calculation</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-slate-400">1. Average phone sale:</span>
                    <span className="text-white font-mono">AED ___</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-slate-400">2. Nuqta customers/month (estimate 50-100):</span>
                    <span className="text-white font-mono">___ customers</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-slate-400">3. Accessory attachment rate:</span>
                    <span className="text-cyan-400 font-mono">× 2.5 (vs 1.5 without)</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-slate-400">4. Avg accessory basket:</span>
                    <span className="text-white font-mono">AED 200</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-cyan-500/20 rounded-lg border border-cyan-500/30">
                    <span className="text-cyan-400">5. Extra accessory revenue:</span>
                    <span className="text-cyan-400 font-mono font-bold">AED ___</span>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-500/10 rounded-xl p-4 border border-cyan-500/20">
                <h4 className="text-cyan-400 font-semibold mb-2">Example: Mobile Phone Store</h4>
                <p className="text-slate-300 text-sm">
                  75 Nuqta customers × AED 200 extra accessories × 40% margin = <strong className="text-white">AED 6,000/month profit</strong>
                  <br />
                  Cost: AED 3,000 (5%) on phone sales | <strong className="text-cyan-400">Net extra profit: AED 3,000/month</strong>
                </p>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Lifecycle Marketing" icon={Calendar}>
            <div className="space-y-4">
              <p className="text-slate-300 text-sm">
                Electronics have natural upgrade cycles. Nuqta&apos;s reminders bring customers back at the right time.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { event: 'Phone 18 Months Old', timing: 'Automatic', message: 'Time for an upgrade? Trade in for coins' },
                  { event: 'Warranty Expiring', timing: '1 month before', message: 'Extend your protection' },
                  { event: 'New iPhone Launch', timing: 'Launch day', message: 'Pre-order with bonus coins' },
                  { event: 'Back to School', timing: 'August', message: 'Student laptop deals + extra coins' },
                  { event: 'Black Friday', timing: 'November', message: 'Double coins on all purchases' },
                  { event: 'Battery Health < 80%', timing: 'Automatic', message: 'Battery replacement discount' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="text-cyan-400" size={16} />
                      <h4 className="text-white font-semibold text-sm">{item.event}</h4>
                    </div>
                    <p className="text-slate-400 text-xs">
                      <span className="text-cyan-400">{item.timing}</span> • {item.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 3: Objection Handling */}
        <div className="mb-8">
          <h2 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-cyan-500 text-[#0a1628] flex items-center justify-center text-xs font-black">3</span>
            Objection Handling
          </h2>

          <CollapsibleSection title="Top 10 Objections" icon={Shield} defaultOpen={true}>
            <div className="space-y-4">
              {[
                {
                  objection: '"Our margins are only 5-10% on phones"',
                  response: 'That\'s why we charge only 5-8%. The magic is in accessories - 30-50% margin. Nuqta brings customers back for cases, chargers, repairs. That\'s where you make money.'
                },
                {
                  objection: '"Amazon is cheaper, we can\'t compete"',
                  response: 'Amazon can\'t offer same-day pickup, hands-on experience, or expert advice. Nuqta adds loyalty on top of that experience. Customers earn rewards AND get service.'
                },
                {
                  objection: '"Customers only care about price"',
                  response: 'For the main purchase, yes. But for accessories and services? They go where it\'s convenient. Nuqta makes YOUR store the convenient choice - they have coins there.'
                },
                {
                  objection: '"We already have warranty programs"',
                  response: 'Great! Nuqta reminds them about warranty. When it\'s expiring, they come back to YOU. When the phone is old, they trade in at YOUR store. We complement your programs.'
                },
                {
                  objection: '"Big chains like Sharaf DG dominate"',
                  response: 'They have their own closed loyalty. Nuqta is open - customers earn everywhere, spend anywhere. You get access to 500K users they\'re not reaching.'
                },
                {
                  objection: '"5-8% is too much for low margin business"',
                  response: 'Compare to Google/Instagram ads at AED 50-100 per lead. Most don\'t convert. We cost AED 75-150 per ACTUAL sale, plus they come back for accessories.'
                },
                {
                  objection: '"Our customers don\'t use apps"',
                  response: 'You sell smartphones! Your customers definitely use apps. And 500K people in UAE already have Nuqta. They\'re looking for electronics stores to earn at.'
                },
                {
                  objection: '"We\'re just a small shop"',
                  response: 'That\'s exactly who we help most. Big chains have their own programs. Nuqta gives small shops the same loyalty tools without the investment.'
                },
                {
                  objection: '"What about brand restrictions?"',
                  response: 'We work with the brands too. Samsung, Apple, Sony all understand loyalty programs. This doesn\'t violate any dealer agreements - it\'s your customer relationship.'
                },
                {
                  objection: '"Let me think about it after Black Friday"',
                  response: 'Black Friday is when you need Nuqta most! Sign up now, run double-coin promotions, and capture customers who\'ll come back for accessories and upgrades all year.'
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
                    <ChevronRight className="text-cyan-400 flex-shrink-0 mt-0.5" size={16} />
                    <p className="text-slate-300 text-sm">{item.response}</p>
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 4: Closing */}
        <div className="mb-8">
          <h2 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-cyan-500 text-[#0a1628] flex items-center justify-center text-xs font-black">4</span>
            Closing the Deal
          </h2>

          <CollapsibleSection title="Closing Scripts" icon={Target} defaultOpen={true}>
            <div className="space-y-4">
              <div className="bg-cyan-500/10 rounded-xl p-4 border border-cyan-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="text-cyan-400" size={18} />
                  <h4 className="text-cyan-400 font-semibold">The Accessory Close</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  &quot;Think about it: Every phone sale brings them back for accessories worth AED 200+.
                  That&apos;s 40% margin vs 5% on the phone. Nuqta makes that happen.&quot;
                </p>
              </div>

              <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="text-yellow-400" size={18} />
                  <h4 className="text-yellow-400 font-semibold">The Launch Close</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  &quot;iPhone [latest] is coming in [X weeks]. Get set up now, run pre-order campaigns,
                  and capture those high-value customers with Nuqta from Day 1.&quot;
                </p>
              </div>

              <div className="bg-cyan-500/10 rounded-xl p-4 border border-cyan-500/30">
                <h4 className="text-cyan-400 font-semibold mb-2">Never Leave Without:</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>✓ Signed LOI or contract</li>
                  <li>✓ Top 5 products by volume</li>
                  <li>✓ Current accessory attachment rate</li>
                  <li>✓ WhatsApp of owner/manager</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Quick Reference */}
        <div className="mb-8">
          <h2 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-cyan-500 text-[#0a1628] flex items-center justify-center text-xs font-black">5</span>
            Quick Reference
          </h2>

          <CollapsibleSection title="Key Stats" icon={Bookmark} defaultOpen={true}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: 'UAE Electronics', value: '$8B' },
                { label: 'Avg Transaction', value: 'AED 1,500' },
                { label: 'Commission', value: '5-8%' },
                { label: 'Accessory Margin', value: '30-50%' },
                { label: 'Attachment Rate', value: '+60%' },
                { label: 'Nuqta Users', value: '500K+' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                  <p className="text-cyan-400 text-lg sm:text-xl font-bold">{stat.value}</p>
                  <p className="text-slate-400 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Power Phrases" icon={Zap}>
            <div className="space-y-2">
              {[
                'Accessories are where you make money',
                'Compete with online on experience + rewards',
                'Trade-in reminders bring customers back',
                '5% on phones funds 40% accessory sales',
                'Warranty reminders = service revenue',
                'Beat Amazon on convenience + loyalty'
              ].map((phrase, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-cyan-500/10 rounded-lg px-3 py-2 border border-cyan-500/20">
                  <CheckCircle2 className="text-cyan-400 flex-shrink-0" size={16} />
                  <p className="text-white text-sm font-medium">{phrase}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Marketing Campaigns Section */}
        <div className="mb-8">
          <h2 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-cyan-500 text-[#0a1628] flex items-center justify-center text-xs font-black">★</span>
            Marketing Campaigns
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Merchant Acquisition Campaign */}
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/30 flex items-center justify-center">
                  <Store className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Merchant Acquisition</h3>
                  <p className="text-blue-400 text-sm">How to onboard electronics merchants</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Battle-tested campaigns to sign electronics stores. High-value purchase focus with warranty and service rewards.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-blue-400" />
                  <span>Event Blitz: GITEX & tech expo signups</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-blue-400" />
                  <span>Category Conquest: Electronics vertical</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-blue-400" />
                  <span>Content Studio: Tech product demos</span>
                </div>
              </div>
              <Link
                href="/marketing-war-room?tab=merchant-campaigns"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold text-sm hover:bg-blue-600 transition-colors"
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
                  <p className="text-purple-400 text-sm">How to bring buyers to tech stores</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Viral campaigns for tech enthusiasts. DSF deals, warranty reminders, and gadget referrals.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-purple-400" />
                  <span>Flash Frenzy: DSF electronics deals</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-purple-400" />
                  <span>Golden Chain: Tech enthusiast referrals</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-purple-400" />
                  <span>Back to School: Student tech deals</span>
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
                <p className="text-2xl font-bold text-cyan-400">5</p>
                <p className="text-xs text-slate-400">Merchant Campaigns</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-400">6</p>
                <p className="text-xs text-slate-400">User Campaigns</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-400">AED 1.5K</p>
                <p className="text-xs text-slate-400">Avg Transaction</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#c9a227]">10-15%</p>
                <p className="text-xs text-slate-400">Commission</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Footer */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-transparent rounded-2xl p-6 border border-cyan-500/30 text-center">
          <Smartphone className="text-cyan-400 mx-auto mb-3" size={32} />
          <h3 className="text-white font-bold text-lg mb-2">Ready for the Meeting?</h3>
          <p className="text-slate-400 text-sm mb-4">Access the pitch deck and other materials</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/deck-merchant" className="px-4 py-2 bg-cyan-500 text-white rounded-full font-semibold text-sm hover:bg-cyan-600 transition-colors">
              View Electronics Deck
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
          Electronics Playbook v1.0 • Last Updated: February 2026
        </p>
      </div>
    </div>
  );
};

export default ElectronicsPlaybook;
