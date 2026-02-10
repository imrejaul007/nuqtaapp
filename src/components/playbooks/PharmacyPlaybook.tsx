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
  Pill,
  Heart,
  Activity,
  UserCheck,
  Monitor,
  Camera,
  Megaphone,
  MapPin,
  Receipt,
  Sparkles,
  Coins,
  Bell,
  Stethoscope,
  Leaf,
  Store
} from 'lucide-react';

/**
 * PHARMACY SALES PLAYBOOK
 * Complete sales guide for pharmacy merchant acquisition
 *
 * Industry: Pharmacies, Health Stores, Wellness Shops, Medical Supplies
 * Engine: B (Low Margin 15-25%)
 * Commission: 5-8%
 *
 * UAE Market Stats:
 * - Average transaction: AED 80-200
 * - Visit frequency: 2-4x per month
 * - Margin: 15-25%
 * - Pharmacy market UAE: $4B
 * - 5% of Nuqta LOIs are pharmacy/health
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
          <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
            <Icon className="text-red-400" size={20} />
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

const PharmacyPlaybook = () => {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Header */}
      <div className="bg-gradient-to-b from-red-500/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
          <Link href="/merchant-playbook" className="inline-flex items-center gap-2 text-slate-400 hover:text-red-400 mb-6 transition-colors">
            <ArrowLeft size={20} />
            <span>All Playbooks</span>
          </Link>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 rounded-full mb-6">
              <Pill className="text-red-400" size={16} />
              <span className="text-red-400 text-sm font-medium">Engine B • Low Margin</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              <span className="text-red-400">Pharmacy & Health</span> Sales Playbook
            </h1>
            <p className="text-slate-400 text-lg">Complete guide to signing pharmacy merchants</p>
            <p className="text-slate-500 text-sm mt-2">High Frequency • Essential Purchases</p>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Avg Transaction', value: 'AED 120' },
            { label: 'Frequency', value: '2-4x/month' },
            { label: 'Commission', value: '5-8%' },
            { label: 'Nuqta LOIs', value: '5%' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
              <p className="text-red-400 text-xl font-black">{stat.value}</p>
              <p className="text-slate-400 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-32">

        {/* Part 1: Industry Overview */}
        <div className="mb-8">
          <h2 className="text-red-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-red-500 text-[#0a1628] flex items-center justify-center text-xs font-black">1</span>
            Industry Overview
          </h2>

          <CollapsibleSection title="Pharmacy Market in UAE" icon={BarChart3} defaultOpen={true}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'UAE Pharmacy Market', value: '$4B' },
                  { label: 'Pharmacies in UAE', value: '3,000+' },
                  { label: 'Health Stores', value: '500+' },
                  { label: 'Avg Margin', value: '15-25%' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                    <p className="text-red-400 text-lg font-bold">{stat.value}</p>
                    <p className="text-slate-400 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                <h4 className="text-red-400 font-semibold mb-2">🇦🇪 GCC-Specific Pain Points</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• <strong className="text-red-300">Aster/Life/BinSina chains dominate</strong> - 70% market share</li>
                  <li>• <strong className="text-red-300">Regulated margins on prescriptions</strong> - government controls profit</li>
                  <li>• <strong className="text-red-300">3,000+ pharmacies in UAE</strong> - one on every corner</li>
                  <li>• <strong className="text-red-300">Online pharmacy apps</strong> delivering meds same-day</li>
                  <li>• <strong className="text-red-300">Insurance patients = hassle</strong> - low margins, paperwork</li>
                  <li>• <strong className="text-red-300">Zero differentiation</strong> - same products, same prices</li>
                  <li>• <strong className="text-red-300">Loyalty = convenience only</strong> - customers pick nearest</li>
                  <li>• <strong className="text-red-300">Wellness/supplements are margin</strong> but need push to sell</li>
                  <li>• <strong className="text-red-300">Expat health patterns</strong> - different needs by nationality</li>
                  <li>• <strong className="text-red-300">Chronic medication loyalty</strong> - once set, hard to switch</li>
                </ul>
              </div>

              <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                <h4 className="text-emerald-400 font-semibold mb-2">✨ How Nuqta Solves Each Pain Point</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• <strong className="text-red-300">Aster/Life chains dominate?</strong> → <strong className="text-emerald-300">Coins differentiate YOUR pharmacy</strong> - rewards chains can&apos;t match locally</li>
                  <li>• <strong className="text-red-300">Regulated prescription margins?</strong> → <strong className="text-emerald-300">Only 5-8% commission</strong> - sustainable for government-controlled margins</li>
                  <li>• <strong className="text-red-300">3,000+ pharmacies competing?</strong> → <strong className="text-emerald-300">Stand out with rewards</strong> - be the pharmacy where customers earn coins</li>
                  <li>• <strong className="text-red-300">Online pharmacy apps?</strong> → <strong className="text-emerald-300">In-person service + rewards</strong> - pharmacist advice online can&apos;t offer</li>
                  <li>• <strong className="text-red-300">Insurance = hassle?</strong> → <strong className="text-emerald-300">Attract cash customers</strong> - 500K+ users preferring direct purchase</li>
                  <li>• <strong className="text-red-300">Zero differentiation?</strong> → <strong className="text-emerald-300">Coins ARE the differentiator</strong> - same products, different rewards</li>
                  <li>• <strong className="text-red-300">Pick nearest only?</strong> → <strong className="text-emerald-300">Refill reminders + coins</strong> - they travel to YOUR pharmacy for rewards</li>
                  <li>• <strong className="text-red-300">Wellness/supplements need push?</strong> → <strong className="text-emerald-300">Bonus coins on 30%+ margin products</strong> - incentivize high-margin sales</li>
                  <li>• <strong className="text-red-300">Expat health patterns?</strong> → <strong className="text-emerald-300">Customer data insights</strong> - track needs by nationality, personalize</li>
                  <li>• <strong className="text-red-300">Chronic med hard to switch?</strong> → <strong className="text-emerald-300">Lock them in early</strong> - diabetic, BP patients stay loyal once earning coins</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="What Nuqta Provides for Pharmacy" icon={Sparkles} defaultOpen={true}>
            <div className="space-y-4">
              <p className="text-slate-300 text-sm">
                For pharmacies, Nuqta drives loyalty through reminders and rewards on high-margin wellness products.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: UserCheck,
                    title: 'Dedicated Account Manager',
                    desc: 'Personal manager for campaign planning, wellness promotions, and health awareness days.',
                    tier: 'Basic+'
                  },
                  {
                    icon: Monitor,
                    title: 'POS Integration',
                    desc: 'Seamless integration with your pharmacy system for automatic transaction logging.',
                    tier: 'All Tiers'
                  },
                  {
                    icon: Bell,
                    title: 'Refill Reminders',
                    desc: 'Automated reminders for prescription refills, keeping customers coming back to YOUR pharmacy.',
                    tier: 'Basic+'
                  },
                  {
                    icon: Heart,
                    title: 'Wellness Campaigns',
                    desc: 'Health awareness campaigns (Diabetes Day, Heart Health, etc.) with bonus coin promotions.',
                    tier: 'Golden+'
                  },
                  {
                    icon: Leaf,
                    title: 'Vitamin/Supplement Push',
                    desc: 'Targeted promotions for high-margin wellness products, vitamins, and supplements.',
                    tier: 'Basic+'
                  },
                  {
                    icon: Megaphone,
                    title: 'Seasonal Health Campaigns',
                    desc: 'Flu season, allergy season, Ramadan health - timely promotions for relevant products.',
                    tier: 'Basic+'
                  },
                  {
                    icon: MapPin,
                    title: 'In-Store Materials',
                    desc: 'Counter cards, shelf talkers, and prescription bag inserts for Nuqta promotion.',
                    tier: 'All Tiers'
                  },
                  {
                    icon: Coins,
                    title: 'Brand Partnerships',
                    desc: 'Access to pharma brand-funded promotions from vitamins, skincare, and wellness brands.',
                    tier: 'Golden+'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="text-red-400" size={20} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-white font-bold text-sm">{item.title}</h4>
                          <span className="text-xs px-2 py-0.5 bg-red-500/20 text-red-400 rounded-full">{item.tier}</span>
                        </div>
                        <p className="text-slate-400 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-xl p-4 border border-red-500/30">
                <h4 className="text-red-400 font-bold mb-2">💊 Sales Tip: Focus on Wellness, Not Just Prescriptions</h4>
                <p className="text-slate-300 text-sm">
                  &quot;Prescription drugs have regulated margins. But vitamins, skincare, and wellness products are 30-50% margin.
                  Nuqta drives customers to buy these high-margin items by rewarding overall spending.&quot;
                </p>
              </div>

              {/* Investment Breakdown */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 mt-4">
                <h4 className="text-white font-bold mb-3">📊 How We Invest Your Package Fee</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-red-400 font-bold text-2xl">70%</span>
                      <span className="text-red-400 text-sm font-medium">Content & Creative</span>
                    </div>
                    <ul className="text-slate-300 text-xs space-y-1">
                      <li>• Professional pharmacy photography</li>
                      <li>• Health tips & wellness videos</li>
                      <li>• Social media content</li>
                      <li>• UGC creation</li>
                      <li>• Health influencer deals</li>
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
                        Whatever you spend on your package, you get the <span className="text-green-400 font-bold">same amount as in-app advertising credit</span> to promote your pharmacy to Nuqta users!
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

          <CollapsibleSection title="Target Sub-Categories" icon={Stethoscope}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  category: 'Independent Pharmacy',
                  avgBill: 'AED 100-200',
                  frequency: '2-3x/month',
                  margin: '15-20%',
                  bestApproach: 'Focus on loyalty, personal service'
                },
                {
                  category: 'Chain Pharmacy',
                  avgBill: 'AED 80-150',
                  frequency: '2-4x/month',
                  margin: '15-18%',
                  bestApproach: 'Pilot at one location, then expand'
                },
                {
                  category: 'Health Store / GNC-type',
                  avgBill: 'AED 200-500',
                  frequency: '1-2x/month',
                  margin: '30-40%',
                  bestApproach: 'Higher margin - Engine A eligible'
                },
                {
                  category: 'Hospital Pharmacy',
                  avgBill: 'AED 150-500',
                  frequency: '1x/month',
                  margin: '15-20%',
                  bestApproach: 'Focus on chronic medication patients'
                },
                {
                  category: 'Wellness/Organic Store',
                  avgBill: 'AED 150-400',
                  frequency: '1-2x/month',
                  margin: '35-50%',
                  bestApproach: 'Higher margin - Engine A eligible'
                },
                {
                  category: 'Medical Supplies',
                  avgBill: 'AED 200-1,000',
                  frequency: '1x/month',
                  margin: '20-30%',
                  bestApproach: 'Focus on recurring orders'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h4 className="text-red-400 font-bold mb-2">{item.category}</h4>
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
                      <span className="text-red-400 ml-1">{item.margin}</span>
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
                      <th className="text-left text-red-400 font-medium py-2">Competitor</th>
                      <th className="text-left text-red-400 font-medium py-2">Model</th>
                      <th className="text-left text-red-400 font-medium py-2">Cost</th>
                      <th className="text-left text-red-400 font-medium py-2">Weakness</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">Aster/Life Online</td>
                      <td className="py-2">E-pharmacy</td>
                      <td className="py-2">Delivery fee</td>
                      <td className="py-2">No immediate pickup, impersonal</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">Chain Loyalty Cards</td>
                      <td className="py-2">Points program</td>
                      <td className="py-2">Internal</td>
                      <td className="py-2">Only works at one chain</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">Insurance Direct</td>
                      <td className="py-2">Covered meds</td>
                      <td className="py-2">Co-pay</td>
                      <td className="py-2">Limited network, paperwork</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">Careem/Talabat Pharmacy</td>
                      <td className="py-2">Delivery</td>
                      <td className="py-2 text-red-400">15-20% fee</td>
                      <td className="py-2">Takes customer data, high fee</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium text-red-400">Nuqta</td>
                      <td className="py-2">Loyalty + Discovery</td>
                      <td className="py-2 text-red-400">5-8%</td>
                      <td className="py-2 text-red-400">Best value</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                <h4 className="text-red-400 font-semibold mb-2">Our Advantage</h4>
                <p className="text-slate-300 text-sm">
                  Chain loyalty only works at that chain. Nuqta works everywhere. Plus, we add prescription reminders
                  and wellness promotions that drive repeat visits and high-margin purchases.
                </p>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 2: The Pitch */}
        <div className="mb-8">
          <h2 className="text-red-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-red-500 text-[#0a1628] flex items-center justify-center text-xs font-black">2</span>
            The Pitch
          </h2>

          <CollapsibleSection title="60-Second Pitch" icon={Zap} defaultOpen={true}>
            <div className="bg-gradient-to-r from-red-500/20 to-transparent rounded-xl p-4 border border-red-500/30">
              <p className="text-white leading-relaxed">
                &quot;Hi [Name], quick question - when a customer fills their prescription here, do they come back for their refill? Or do they go wherever is convenient?
                <br /><br />
                Most pharmacies lose customers to whoever is closest at the moment. But think about it - a customer with chronic medication needs refills every month for YEARS. That&apos;s thousands of dirhams in lifetime value.
                <br /><br />
                We&apos;ve built something to capture that. When they buy from you, they earn 5% back in Nuqta coins. When their refill is due, WE remind them - and they come to YOUR pharmacy because that&apos;s where they have coins.
                <br /><br />
                Plus, those coins get spent on vitamins, skincare, wellness products - your 30%+ margin items.
                <br /><br />
                You pay 5-8% on Nuqta sales. Want to see how much extra revenue you could capture?&quot;
              </p>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="ROI Calculator" icon={Calculator}>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-white font-semibold mb-3">Step-by-Step Calculation</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-slate-400">1. Average transaction:</span>
                    <span className="text-white font-mono">AED ___</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-slate-400">2. Nuqta customers/month (estimate 100-300):</span>
                    <span className="text-white font-mono">___ customers</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-slate-400">3. Extra visits from reminders:</span>
                    <span className="text-red-400 font-mono">+1.5 visits/month</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-slate-400">4. Wellness upsell rate:</span>
                    <span className="text-red-400 font-mono">+25%</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-red-500/20 rounded-lg border border-red-500/30">
                    <span className="text-red-400">5. Extra monthly revenue:</span>
                    <span className="text-red-400 font-mono font-bold">AED ___</span>
                  </div>
                </div>
              </div>

              <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                <h4 className="text-red-400 font-semibold mb-2">Example: Community Pharmacy</h4>
                <p className="text-slate-300 text-sm">
                  200 Nuqta customers × AED 120 × 1.5 extra visits = <strong className="text-white">AED 36,000/month extra</strong>
                  <br />
                  Cost: AED 2,160 (6%) | <strong className="text-red-400">Extra profit at 20% margin: AED 5,040/month</strong>
                </p>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Health Reminders" icon={Bell}>
            <div className="space-y-4">
              <p className="text-slate-300 text-sm">
                Pharmacy visits are often predictable. Nuqta&apos;s smart reminders ensure customers return to YOUR pharmacy.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { type: 'Prescription Refill', timing: '5 days before', message: 'Time to refill your medication' },
                  { type: 'Vitamin Subscription', timing: '25 days', message: 'Running low on vitamins?' },
                  { type: 'Flu Season', timing: 'October', message: 'Flu shots available + bonus coins' },
                  { type: 'Allergy Season', timing: 'March', message: 'Stock up on allergy relief' },
                  { type: 'Ramadan', timing: 'Pre-Ramadan', message: 'Health supplements for fasting' },
                  { type: 'Summer', timing: 'June', message: 'Sun protection and hydration' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <div className="flex items-center gap-2 mb-1">
                      <Bell className="text-red-400" size={16} />
                      <h4 className="text-white font-semibold text-sm">{item.type}</h4>
                    </div>
                    <p className="text-slate-400 text-xs">
                      <span className="text-red-400">{item.timing}</span> • {item.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 3: Objection Handling */}
        <div className="mb-8">
          <h2 className="text-red-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-red-500 text-[#0a1628] flex items-center justify-center text-xs font-black">3</span>
            Objection Handling
          </h2>

          <CollapsibleSection title="Top 10 Objections" icon={Shield} defaultOpen={true}>
            <div className="space-y-4">
              {[
                {
                  objection: '"Our margins are regulated on prescriptions"',
                  response: 'That\'s exactly why Nuqta focuses on wellness products - vitamins, skincare, supplements. These are 30-50% margin. We drive customers to buy MORE of those.'
                },
                {
                  objection: '"Customers just go to the nearest pharmacy"',
                  response: 'True - without a reason to choose. Nuqta gives them a reason. They have coins at YOUR pharmacy. When they need a refill, they come to YOU, not whoever is closest.'
                },
                {
                  objection: '"We already have a chain loyalty program"',
                  response: 'Your loyalty only works at your locations. Nuqta works across 500+ stores. Customers earn everywhere but can spend those coins at YOUR pharmacy. More reasons to visit.'
                },
                {
                  objection: '"5-8% is too much for pharmacy margins"',
                  response: 'Compare to Careem Pharmacy taking 15-20%. And we bring customers TO your store, not deliver away from it. Plus, we drive high-margin wellness sales, not just prescriptions.'
                },
                {
                  objection: '"Our customers are loyal to their doctor, not pharmacy"',
                  response: 'True for prescriptions. But who do they buy vitamins from? Skincare? Baby products? These are decision-based purchases - and Nuqta makes YOUR pharmacy the smart choice.'
                },
                {
                  objection: '"We\'re a small neighborhood pharmacy"',
                  response: 'That\'s your advantage! You know your customers by name. Nuqta adds modern loyalty tools to that personal relationship. Big chains can\'t match that combination.'
                },
                {
                  objection: '"Insurance covers most purchases"',
                  response: 'Insurance covers prescriptions. But co-pays, OTC products, wellness items - that\'s out of pocket. Nuqta rewards those purchases, which are often 40-50% of sales.'
                },
                {
                  objection: '"We don\'t have many walk-in customers"',
                  response: 'Nuqta helps with discovery. 500K users looking for pharmacies to earn at. Plus, your existing customers will visit more often with refill reminders.'
                },
                {
                  objection: '"Pharmacy regulations are strict"',
                  response: 'Nuqta is fully compliant. We don\'t discount prescriptions - we reward overall spending. This is a loyalty program, not a prescription discount scheme.'
                },
                {
                  objection: '"Let me check with the owner/chain"',
                  response: 'Let\'s set up a pilot at this location. Show them real data - more visits, higher wellness sales, better retention. Numbers speak louder than proposals.'
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
                    <ChevronRight className="text-red-400 flex-shrink-0 mt-0.5" size={16} />
                    <p className="text-slate-300 text-sm">{item.response}</p>
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 4: Closing */}
        <div className="mb-8">
          <h2 className="text-red-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-red-500 text-[#0a1628] flex items-center justify-center text-xs font-black">4</span>
            Closing the Deal
          </h2>

          <CollapsibleSection title="Closing Scripts" icon={Target} defaultOpen={true}>
            <div className="space-y-4">
              <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="text-red-400" size={18} />
                  <h4 className="text-red-400 font-semibold">The Chronic Patient Close</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  &quot;One diabetes patient visits 12x a year. That&apos;s AED 1,440/year minimum.
                  Nuqta makes sure they come to YOU every time. How many chronic patients do you have?&quot;
                </p>
              </div>

              <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="text-yellow-400" size={18} />
                  <h4 className="text-yellow-400 font-semibold">The Flu Season Close</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  &quot;Flu season starts in [X weeks]. Get set up now, run vaccine + immunity promotions,
                  and capture customers who&apos;ll need refills all winter.&quot;
                </p>
              </div>

              <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/30">
                <h4 className="text-red-400 font-semibold mb-2">Never Leave Without:</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>✓ Signed LOI or contract</li>
                  <li>✓ Prescription vs OTC split percentage</li>
                  <li>✓ Current loyalty program details</li>
                  <li>✓ WhatsApp of owner/manager</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Quick Reference */}
        <div className="mb-8">
          <h2 className="text-red-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-red-500 text-[#0a1628] flex items-center justify-center text-xs font-black">5</span>
            Quick Reference
          </h2>

          <CollapsibleSection title="Key Stats" icon={Bookmark} defaultOpen={true}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: 'UAE Pharmacy Market', value: '$4B' },
                { label: 'Avg Transaction', value: 'AED 120' },
                { label: 'Commission', value: '5-8%' },
                { label: 'Wellness Margin', value: '30-50%' },
                { label: 'Refill Frequency', value: '2-4x/mo' },
                { label: 'Nuqta Users', value: '500K+' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                  <p className="text-red-400 text-lg sm:text-xl font-bold">{stat.value}</p>
                  <p className="text-slate-400 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Power Phrases" icon={Zap}>
            <div className="space-y-2">
              {[
                'Refill reminders bring them back to YOU',
                'Wellness products are where you make money',
                'Chronic patients = lifetime value',
                'Compete with chains on loyalty',
                '5% on prescriptions funds 30% wellness sales',
                'Modern loyalty for neighborhood pharmacy'
              ].map((phrase, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-red-500/10 rounded-lg px-3 py-2 border border-red-500/20">
                  <CheckCircle2 className="text-red-400 flex-shrink-0" size={16} />
                  <p className="text-white text-sm font-medium">{phrase}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Marketing Campaigns Section */}
        <div className="mb-8">
          <h2 className="text-red-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-black">★</span>
            Marketing Campaigns
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Merchant Acquisition Campaign */}
            <div className="bg-gradient-to-br from-rose-500/20 to-red-500/20 rounded-2xl p-6 border border-rose-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/30 flex items-center justify-center">
                  <Store className="text-rose-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Merchant Acquisition</h3>
                  <p className="text-rose-400 text-sm">How to onboard pharmacy merchants</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Battle-tested campaigns to sign pharmacies. Recurring prescription focus with health & wellness rewards.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-rose-400" />
                  <span>Neighborhood Conquest: Area pharmacy focus</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-rose-400" />
                  <span>Merchant Referral: Pharmacist networks</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-rose-400" />
                  <span>Success Academy: Loyalty training</span>
                </div>
              </div>
              <Link
                href="/marketing-war-room?tab=merchant-campaigns"
                className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500 text-white rounded-lg font-semibold text-sm hover:bg-rose-600 transition-colors"
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
                  <p className="text-purple-400 text-sm">How to bring customers to pharmacies</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Viral campaigns for health-conscious users. Prescription reminders, wellness rewards, and family health.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-purple-400" />
                  <span>Streak Masters: Monthly prescription streaks</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-purple-400" />
                  <span>Neighborhood Champions: Local pharmacy</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-purple-400" />
                  <span>Golden Chain: Family health referrals</span>
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
                <p className="text-2xl font-bold text-red-400">5</p>
                <p className="text-xs text-slate-400">Merchant Campaigns</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-400">6</p>
                <p className="text-xs text-slate-400">User Campaigns</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-rose-400">4x/mo</p>
                <p className="text-xs text-slate-400">Visit Frequency</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#c9a227]">5-8%</p>
                <p className="text-xs text-slate-400">Commission</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Footer */}
        <div className="bg-gradient-to-r from-red-500/20 to-transparent rounded-2xl p-6 border border-red-500/30 text-center">
          <Pill className="text-red-400 mx-auto mb-3" size={32} />
          <h3 className="text-white font-bold text-lg mb-2">Ready for the Meeting?</h3>
          <p className="text-slate-400 text-sm mb-4">Access the pitch deck and other materials</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/deck-merchant" className="px-4 py-2 bg-red-500 text-white rounded-full font-semibold text-sm hover:bg-red-600 transition-colors">
              View Pharmacy Deck
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
          Pharmacy & Health Playbook v1.0 • Last Updated: February 2026
        </p>
      </div>
    </div>
  );
};

export default PharmacyPlaybook;
