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
  Gem,
  Crown,
  UserCheck,
  Monitor,
  Camera,
  Megaphone,
  MapPin,
  Receipt,
  Sparkles,
  Coins,
  Gift,
  Star,
  Award,
  Store
} from 'lucide-react';

/**
 * GOLD & JEWELRY SALES PLAYBOOK
 * Complete sales guide for gold/jewelry merchant acquisition
 *
 * Industry: Gold Shops, Jewelry Stores, Diamond Dealers, Watch Boutiques
 * Engine: B (Low Margin 8-12%)
 * Commission: 5-8%
 *
 * UAE Market Stats:
 * - Average transaction: AED 2,000-15,000
 * - Visit frequency: 2-4x per year (occasion-based)
 * - Margin: 8-15% (gold), 20-40% (diamond jewelry)
 * - Gold/Jewelry market UAE: $12B
 * - 10% of Nuqta LOIs are gold/jewelry
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
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
            <Icon className="text-amber-400" size={20} />
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

const GoldPlaybook = () => {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Header */}
      <div className="bg-gradient-to-b from-amber-500/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
          <Link href="/merchant-playbook" className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 mb-6 transition-colors">
            <ArrowLeft size={20} />
            <span>All Playbooks</span>
          </Link>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full mb-6">
              <Gem className="text-amber-400" size={16} />
              <span className="text-amber-400 text-sm font-medium">Engine B • Low Margin</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              <span className="text-amber-400">Gold & Jewelry</span> Sales Playbook
            </h1>
            <p className="text-slate-400 text-lg">Complete guide to signing jewelry merchants</p>
            <p className="text-slate-500 text-sm mt-2">High Value Transactions • Occasion-Based Purchases</p>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Avg Transaction', value: 'AED 5K-15K' },
            { label: 'Frequency', value: '2-4x/year' },
            { label: 'Commission', value: '5-8%' },
            { label: 'Nuqta LOIs', value: '10%' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
              <p className="text-amber-400 text-xl font-black">{stat.value}</p>
              <p className="text-slate-400 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-32">

        {/* Part 1: Industry Overview */}
        <div className="mb-8">
          <h2 className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-500 text-[#0a1628] flex items-center justify-center text-xs font-black">1</span>
            Industry Overview
          </h2>

          <CollapsibleSection title="Gold & Jewelry Market in UAE" icon={BarChart3} defaultOpen={true}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'UAE Gold Market', value: '$12B' },
                  { label: 'Gold Souks', value: '300+' },
                  { label: 'Jewelry Stores', value: '2,000+' },
                  { label: 'Gold Margin', value: '8-15%' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                    <p className="text-amber-400 text-lg font-bold">{stat.value}</p>
                    <p className="text-slate-400 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                <h4 className="text-red-400 font-semibold mb-2">🇦🇪 GCC-Specific Pain Points</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• <strong className="text-red-300">Paper-thin margins 8-12%</strong> on gold (making charges only)</li>
                  <li>• <strong className="text-red-300">300+ gold shops in Gold Souk alone</strong> - brutal price competition</li>
                  <li>• <strong className="text-red-300">Customers price-check everywhere</strong> - visit 5+ shops before buying</li>
                  <li>• <strong className="text-red-300">Seasonal dependency</strong> - Diwali, Eid, wedding season or dead</li>
                  <li>• <strong className="text-red-300">Indian wedding tourist shopping</strong> - one-time buyers, no loyalty</li>
                  <li>• <strong className="text-red-300">Online gold investment apps</strong> - digital gold stealing customers</li>
                  <li>• <strong className="text-red-300">Gold price volatility</strong> - customers wait for price drops</li>
                  <li>• <strong className="text-red-300">Mall rent vs souk location</strong> - high rent = need volume</li>
                  <li>• <strong className="text-red-300">Trust is everything</strong> - customers stick to "family jeweler"</li>
                  <li>• <strong className="text-red-300">UAE residents travel for gold</strong> - India, Singapore cheaper</li>
                </ul>
              </div>

              <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                <h4 className="text-emerald-400 font-semibold mb-2">✨ How Nuqta Solves Each Pain Point</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• <strong className="text-red-300">Paper-thin margins 8-12%?</strong> → <strong className="text-emerald-300">Only 5-8% commission</strong> - sustainable for low-margin gold business</li>
                  <li>• <strong className="text-red-300">300+ Gold Souk competitors?</strong> → <strong className="text-emerald-300">Stand out with rewards</strong> - be the jeweler where customers earn coins</li>
                  <li>• <strong className="text-red-300">Price-check 5+ shops?</strong> → <strong className="text-emerald-300">Compete beyond price</strong> - experience + rewards = loyalty, not just price</li>
                  <li>• <strong className="text-red-300">Seasonal dependency?</strong> → <strong className="text-emerald-300">Diwali/Eid campaigns</strong> - bonus coins during festival seasons boost traffic</li>
                  <li>• <strong className="text-red-300">Tourist one-time buyers?</strong> → <strong className="text-emerald-300">Wedding customer referrals</strong> - one bride brings 10 family members via coins</li>
                  <li>• <strong className="text-red-300">Digital gold apps?</strong> → <strong className="text-emerald-300">Physical gold + rewards</strong> - experience digital gold can&apos;t offer</li>
                  <li>• <strong className="text-red-300">Wait for price drops?</strong> → <strong className="text-emerald-300">Coins offset price timing</strong> - rewards make buying now more attractive</li>
                  <li>• <strong className="text-red-300">Mall rent needs volume?</strong> → <strong className="text-emerald-300">500K+ affluent users</strong> discovering your jewelry store</li>
                  <li>• <strong className="text-red-300">Need to be family jeweler?</strong> → <strong className="text-emerald-300">Build trust through consistency</strong> - repeat coin-earner becomes loyal</li>
                  <li>• <strong className="text-red-300">Travel for cheaper gold?</strong> → <strong className="text-emerald-300">Local rewards make staying worth it</strong> - coins match travel savings</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="What Nuqta Provides for Gold/Jewelry" icon={Sparkles} defaultOpen={true}>
            <div className="space-y-4">
              <p className="text-slate-300 text-sm">
                For jewelry stores, Nuqta becomes a loyalty and discovery platform that brings high-value customers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: UserCheck,
                    title: 'Dedicated Account Manager',
                    desc: 'Personal manager for campaign planning, seasonal promotions, and customer engagement strategies.',
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
                    title: 'Professional Photography',
                    desc: 'High-quality product photography, Instagram content, and Reels for your collections.',
                    tier: 'Golden+'
                  },
                  {
                    icon: Gift,
                    title: 'Occasion Marketing',
                    desc: 'Automated reminders for anniversaries, birthdays, and cultural festivals to drive purchases.',
                    tier: 'Basic+'
                  },
                  {
                    icon: Star,
                    title: 'VIP Customer Program',
                    desc: 'Special tier for high-value customers with exclusive previews and priority service.',
                    tier: 'Golden+'
                  },
                  {
                    icon: Megaphone,
                    title: 'Festival Campaigns',
                    desc: 'Specialized campaigns for Diwali, Eid, wedding season, and other key buying occasions.',
                    tier: 'Basic+'
                  },
                  {
                    icon: MapPin,
                    title: 'In-Store Materials',
                    desc: 'Premium display materials, QR stands, and counter cards matching your store aesthetics.',
                    tier: 'All Tiers'
                  },
                  {
                    icon: Award,
                    title: 'Trust Certification',
                    desc: 'Nuqta-verified badge for your store, building customer confidence.',
                    tier: 'Diamond'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="text-amber-400" size={20} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-white font-bold text-sm">{item.title}</h4>
                          <span className="text-xs px-2 py-0.5 bg-amber-500/20 text-amber-400 rounded-full">{item.tier}</span>
                        </div>
                        <p className="text-slate-400 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-xl p-4 border border-amber-500/30">
                <h4 className="text-amber-400 font-bold mb-2">💎 Sales Tip: Focus on High-Value Customer Retention</h4>
                <p className="text-slate-300 text-sm">
                  &quot;A customer who buys once for AED 10,000 has a lifetime value of AED 50,000+ if they return for
                  anniversaries, birthdays, and gifts. Nuqta ensures they come back to YOU, not your competitor.&quot;
                </p>
              </div>

              {/* Investment Breakdown */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 mt-4">
                <h4 className="text-white font-bold mb-3">📊 How We Invest Your Package Fee</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-amber-500/10 rounded-lg p-4 border border-amber-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-amber-400 font-bold text-2xl">70%</span>
                      <span className="text-amber-400 text-sm font-medium">Content & Creative</span>
                    </div>
                    <ul className="text-slate-300 text-xs space-y-1">
                      <li>• Professional jewelry photography</li>
                      <li>• Collection showcase videos</li>
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
                        Whatever you spend on your package, you get the <span className="text-green-400 font-bold">same amount as in-app advertising credit</span> to promote your jewelry store to Nuqta users!
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

          <CollapsibleSection title="Target Sub-Categories" icon={Gem}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  category: 'Gold Souk Retailer',
                  avgBill: 'AED 3,000-10,000',
                  frequency: '2-3x/year',
                  margin: '8-12%',
                  bestApproach: 'Focus on trust, repeat purchases'
                },
                {
                  category: 'Luxury Jewelry Boutique',
                  avgBill: 'AED 10,000-50,000',
                  frequency: '1-2x/year',
                  margin: '25-40%',
                  bestApproach: 'Higher margin - can do Engine A'
                },
                {
                  category: 'Diamond Dealer',
                  avgBill: 'AED 15,000-100,000',
                  frequency: '1-2x/year',
                  margin: '15-25%',
                  bestApproach: 'Focus on engagement rings, special occasions'
                },
                {
                  category: 'Watch Boutique',
                  avgBill: 'AED 5,000-50,000',
                  frequency: '1x/year',
                  margin: '20-35%',
                  bestApproach: 'Focus on collector community, pre-owned'
                },
                {
                  category: 'Fashion Jewelry',
                  avgBill: 'AED 500-2,000',
                  frequency: '4-6x/year',
                  margin: '40-60%',
                  bestApproach: 'Higher margin - Engine A eligible'
                },
                {
                  category: 'Wedding Specialist',
                  avgBill: 'AED 20,000-100,000',
                  frequency: '1x (lifetime)',
                  margin: '15-20%',
                  bestApproach: 'Focus on referrals, family networks'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h4 className="text-amber-400 font-bold mb-2">{item.category}</h4>
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
                      <span className="text-amber-400 ml-1">{item.margin}</span>
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
                      <th className="text-left text-amber-400 font-medium py-2">Competitor</th>
                      <th className="text-left text-amber-400 font-medium py-2">Model</th>
                      <th className="text-left text-amber-400 font-medium py-2">Cost</th>
                      <th className="text-left text-amber-400 font-medium py-2">Weakness</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">Malabar Gold Loyalty</td>
                      <td className="py-2">Points program</td>
                      <td className="py-2">Internal</td>
                      <td className="py-2">Only works at Malabar</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">Joyalukkas</td>
                      <td className="py-2">Store card</td>
                      <td className="py-2">Internal</td>
                      <td className="py-2">Brand-specific, limited appeal</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">Google/Instagram Ads</td>
                      <td className="py-2">Advertising</td>
                      <td className="py-2 text-red-400">AED 100+/lead</td>
                      <td className="py-2">Expensive, low conversion</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">Online Gold Stores</td>
                      <td className="py-2">E-commerce</td>
                      <td className="py-2">Lower prices</td>
                      <td className="py-2">No physical experience, trust issues</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium text-amber-400">Nuqta</td>
                      <td className="py-2">Loyalty + Discovery</td>
                      <td className="py-2 text-amber-400">5-8%</td>
                      <td className="py-2 text-amber-400">Best value</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/20">
                <h4 className="text-amber-400 font-semibold mb-2">Our Advantage</h4>
                <p className="text-slate-300 text-sm">
                  Large chains have their own loyalty programs, but independent jewelers can&apos;t afford sophisticated CRM.
                  Nuqta gives small jewelers enterprise-level loyalty tools at a fraction of the cost.
                </p>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 2: The Pitch */}
        <div className="mb-8">
          <h2 className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-500 text-[#0a1628] flex items-center justify-center text-xs font-black">2</span>
            The Pitch
          </h2>

          <CollapsibleSection title="60-Second Pitch" icon={Zap} defaultOpen={true}>
            <div className="bg-gradient-to-r from-amber-500/20 to-transparent rounded-xl p-4 border border-amber-500/30">
              <p className="text-white leading-relaxed">
                &quot;Hi [Name], beautiful collection you have here. Quick question - when a customer buys a necklace for AED 10,000, do they come back for their anniversary or go somewhere else?
                <br /><br />
                Most jewelry stores lose customers to whoever is convenient at that moment. That AED 10,000 customer has AED 50,000+ lifetime value - but only if they remember you.
                <br /><br />
                We&apos;ve built something to fix that. When they buy from you, they earn 5% back in Nuqta coins. When their anniversary comes up, we remind them. When they want to gift someone, we remind them. And those coins? They can spend them at your store.
                <br /><br />
                You only pay 5-8% on Nuqta-driven sales. Compare that to AED 100+ per lead on Google Ads. Want to see how many high-value customers we can bring you?&quot;
              </p>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="ROI Calculator" icon={Calculator}>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-white font-semibold mb-3">Step-by-Step Calculation</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-slate-400">1. Average transaction value:</span>
                    <span className="text-white font-mono">AED ___</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-slate-400">2. Nuqta customers/month (estimate 20-50):</span>
                    <span className="text-white font-mono">___ customers</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-slate-400">3. Return visits per year:</span>
                    <span className="text-amber-400 font-mono">× 1.5 (vs 0.3 without)</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-amber-500/20 rounded-lg border border-amber-500/30">
                    <span className="text-amber-400">4. Extra annual revenue:</span>
                    <span className="text-amber-400 font-mono font-bold">AED ___</span>
                  </div>
                </div>
              </div>

              <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/20">
                <h4 className="text-amber-400 font-semibold mb-2">Example: Gold Souk Store</h4>
                <p className="text-slate-300 text-sm">
                  AED 5,000 avg × 30 Nuqta customers × 1.5 extra visits = <strong className="text-white">AED 225,000/year extra</strong>
                  <br />
                  Cost: AED 13,500 (6%) | <strong className="text-amber-400">Extra profit at 10% margin: AED 9,000/year</strong>
                </p>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Occasion Marketing" icon={Calendar}>
            <div className="space-y-4">
              <p className="text-slate-300 text-sm">
                Jewelry is occasion-based. Nuqta&apos;s smart reminders ensure customers think of YOUR store first.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { occasion: 'Wedding Anniversary', timing: '2 weeks before', message: 'Surprise her with something special' },
                  { occasion: 'Birthday', timing: '1 week before', message: 'A gift she\'ll treasure forever' },
                  { occasion: 'Diwali/Dhanteras', timing: '1 month before', message: 'Auspicious gold for prosperity' },
                  { occasion: 'Eid', timing: '2 weeks before', message: 'Celebrate with family treasures' },
                  { occasion: 'Valentine\'s Day', timing: '2 weeks before', message: 'Express your love' },
                  { occasion: 'Mother\'s Day', timing: '1 week before', message: 'Thank her with gold' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="text-amber-400" size={16} />
                      <h4 className="text-white font-semibold text-sm">{item.occasion}</h4>
                    </div>
                    <p className="text-slate-400 text-xs">
                      <span className="text-amber-400">{item.timing}</span> • {item.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 3: Objection Handling */}
        <div className="mb-8">
          <h2 className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-500 text-[#0a1628] flex items-center justify-center text-xs font-black">3</span>
            Objection Handling
          </h2>

          <CollapsibleSection title="Top 10 Objections" icon={Shield} defaultOpen={true}>
            <div className="space-y-4">
              {[
                {
                  objection: '"Our margins are only 8-10% on gold"',
                  response: 'That\'s why we charge only 5-8%. You still keep 2-5% profit on Nuqta sales, PLUS these are NEW customers you wouldn\'t have had. The volume makes up for it.'
                },
                {
                  objection: '"Gold customers only care about price"',
                  response: 'True for first-time buyers. But returning customers value trust and relationship. Nuqta builds that relationship. A customer who trusts you will pay slightly more.'
                },
                {
                  objection: '"We already have regular customers"',
                  response: 'Great! But are they EXCLUSIVE to you? Nuqta makes them loyal by giving them a reason to return - coins they can spend. Plus we bring you new customers.'
                },
                {
                  objection: '"5-8% is too much for gold"',
                  response: 'Compare to Google Ads at AED 100+ per lead. Even if only 1 in 10 leads converts, that\'s AED 1000 per customer. We cost AED 250-400 for a guaranteed sale.'
                },
                {
                  objection: '"Our customers are traditional, they won\'t use apps"',
                  response: 'The next generation will. And even traditional customers\' children use apps to research before buying. Being on Nuqta means being discovered by them.'
                },
                {
                  objection: '"We only sell during festivals"',
                  response: 'That\'s exactly when you need Nuqta! During Diwali/Eid, every gold shop advertises. Nuqta users already have coins - they\'ll choose YOU to spend them.'
                },
                {
                  objection: '"Big chains like Malabar have their own programs"',
                  response: 'But their programs only work at Malabar. Nuqta works at 500+ stores. Customers earn everywhere and spend anywhere - including your store. That\'s the advantage.'
                },
                {
                  objection: '"What about trust? People buy gold from known shops"',
                  response: 'Nuqta-verified stores get a trust badge. Plus, reviews from other Nuqta users. We help you build that reputation faster than years of word-of-mouth.'
                },
                {
                  objection: '"We have our own loyalty card"',
                  response: 'Does it remind customers of anniversaries? Does it bring new customers? Does it work across 500+ stores? Nuqta does all that. Use both!'
                },
                {
                  objection: '"Let me think about it after the season"',
                  response: 'The season is when you need Nuqta most! Sign up now, get set up before Diwali/Eid, and capture all those high-value purchases with Nuqta loyalty built in.'
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
                    <ChevronRight className="text-amber-400 flex-shrink-0 mt-0.5" size={16} />
                    <p className="text-slate-300 text-sm">{item.response}</p>
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 4: Closing */}
        <div className="mb-8">
          <h2 className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-500 text-[#0a1628] flex items-center justify-center text-xs font-black">4</span>
            Closing the Deal
          </h2>

          <CollapsibleSection title="Closing Scripts" icon={Target} defaultOpen={true}>
            <div className="space-y-4">
              <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="text-amber-400" size={18} />
                  <h4 className="text-amber-400 font-semibold">The Lifetime Value Close</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  &quot;One wedding customer can bring you AED 100,000+ over their lifetime - wedding jewelry, anniversaries, children&apos;s weddings. Nuqta makes sure they come back to YOU for all of it.&quot;
                </p>
              </div>

              <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="text-yellow-400" size={18} />
                  <h4 className="text-yellow-400 font-semibold">The Festival Close</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  &quot;Diwali/Eid is in [X weeks]. Every gold shop will be advertising. But only Nuqta stores will have customers with coins waiting to be spent. Don&apos;t miss the season.&quot;
                </p>
              </div>

              <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/30">
                <h4 className="text-amber-400 font-semibold mb-2">Never Leave Without:</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>✓ Signed LOI or contract</li>
                  <li>✓ Avg transaction value</li>
                  <li>✓ Peak seasons for their business</li>
                  <li>✓ WhatsApp of owner/manager</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Quick Reference */}
        <div className="mb-8">
          <h2 className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-500 text-[#0a1628] flex items-center justify-center text-xs font-black">5</span>
            Quick Reference
          </h2>

          <CollapsibleSection title="Key Stats" icon={Bookmark} defaultOpen={true}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: 'UAE Gold Market', value: '$12B' },
                { label: 'Avg Transaction', value: 'AED 5K+' },
                { label: 'Commission', value: '5-8%' },
                { label: 'Return Rate', value: '+150%' },
                { label: 'LTV Increase', value: '5x' },
                { label: 'Nuqta Users', value: '500K+' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                  <p className="text-amber-400 text-lg sm:text-xl font-bold">{stat.value}</p>
                  <p className="text-slate-400 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Power Phrases" icon={Zap}>
            <div className="space-y-2">
              {[
                'Turn one-time buyers into lifetime customers',
                'Occasion reminders bring them back',
                '5-8% vs AED 100+ per Google lead',
                'Compete with chains using smart loyalty',
                'Festival season advantage',
                '500K affluent users discovering stores'
              ].map((phrase, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-amber-500/10 rounded-lg px-3 py-2 border border-amber-500/20">
                  <CheckCircle2 className="text-amber-400 flex-shrink-0" size={16} />
                  <p className="text-white text-sm font-medium">{phrase}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Marketing Campaigns Section */}
        <div className="mb-8">
          <h2 className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-500 text-[#0a1628] flex items-center justify-center text-xs font-black">★</span>
            Marketing Campaigns
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Merchant Acquisition Campaign */}
            <div className="bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-2xl p-6 border border-yellow-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/30 flex items-center justify-center">
                  <Store className="text-yellow-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Merchant Acquisition</h3>
                  <p className="text-yellow-400 text-sm">How to onboard gold & jewelry merchants</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Battle-tested campaigns to sign gold and jewelry shops. High-value transaction focus with trust-building strategies.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-yellow-400" />
                  <span>Gold Souk Blitz: Dubai Gold Souk acquisition</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-yellow-400" />
                  <span>Content Studio: Luxury jewelry shoots</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-yellow-400" />
                  <span>Merchant Referral: Jeweler networks</span>
                </div>
              </div>
              <Link
                href="/marketing-war-room?tab=merchant-campaigns"
                className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 text-black rounded-lg font-semibold text-sm hover:bg-yellow-600 transition-colors"
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
                  <p className="text-purple-400 text-sm">How to bring buyers to jewelry stores</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Viral campaigns for affluent jewelry shoppers. Wedding season targeting, Diwali gold rush, and luxury referrals.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-purple-400" />
                  <span>Eid Gift Bonanza: Festival gold purchases</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-purple-400" />
                  <span>Golden Chain: Wedding referral chains</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-purple-400" />
                  <span>Diwali Dhamaka: Indian community gold rush</span>
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
                <p className="text-2xl font-bold text-amber-400">5</p>
                <p className="text-xs text-slate-400">Merchant Campaigns</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-400">6</p>
                <p className="text-xs text-slate-400">User Campaigns</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-400">AED 5K+</p>
                <p className="text-xs text-slate-400">Avg Transaction</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#c9a227]">5-8%</p>
                <p className="text-xs text-slate-400">Commission</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Footer */}
        <div className="bg-gradient-to-r from-amber-500/20 to-transparent rounded-2xl p-6 border border-amber-500/30 text-center">
          <Gem className="text-amber-400 mx-auto mb-3" size={32} />
          <h3 className="text-white font-bold text-lg mb-2">Ready for the Meeting?</h3>
          <p className="text-slate-400 text-sm mb-4">Access the pitch deck and other materials</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/deck-merchant" className="px-4 py-2 bg-amber-500 text-white rounded-full font-semibold text-sm hover:bg-amber-600 transition-colors">
              View Jewelry Deck
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
          Gold & Jewelry Playbook v1.0 • Last Updated: February 2026
        </p>
      </div>
    </div>
  );
};

export default GoldPlaybook;
