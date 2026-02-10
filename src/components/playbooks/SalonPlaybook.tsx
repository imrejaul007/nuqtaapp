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
  XCircle,
  TrendingUp,
  Zap,
  Shield,
  DollarSign,
  Percent,
  BarChart3,
  Calculator,
  ArrowLeft,
  Star,
  Sparkles,
  Scissors,
  Heart,
  UserCheck,
  Monitor,
  Camera,
  TrendingDown,
  Megaphone,
  MapPin,
  Gift,
  Store
} from 'lucide-react';

/**
 * SALON & SPA SALES PLAYBOOK
 * Complete sales guide for beauty & wellness merchant acquisition
 *
 * Industry: Salons (Men & Women), Spas, Nail Bars, Barbershops
 * Engine: A (High Margin 50-65%)
 * Commission: 15-20%
 *
 * UAE Market Stats:
 * - Average salon bill: AED 150-250
 * - Average spa bill: AED 300-500
 * - Repeat visit rate without loyalty: 45%
 * - Beauty market size UAE: $2.8B
 * - 25% of Nuqta LOIs are beauty/wellness
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
          <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center">
            <Icon className="text-pink-400" size={20} />
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

const SalonPlaybook = () => {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Header */}
      <div className="bg-gradient-to-b from-pink-500/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
          <Link href="/merchant-playbook" className="inline-flex items-center gap-2 text-slate-400 hover:text-pink-400 mb-6 transition-colors">
            <ArrowLeft size={20} />
            <span>All Playbooks</span>
          </Link>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/20 rounded-full mb-6">
              <Scissors className="text-pink-400" size={16} />
              <span className="text-pink-400 text-sm font-medium">Engine A • High Margin</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              <span className="text-pink-400">Salon & Spa</span> Sales Playbook
            </h1>
            <p className="text-slate-400 text-lg">Complete guide to signing beauty & wellness merchants</p>
            <p className="text-slate-500 text-sm mt-2">From Cold Outreach to Signed Contract</p>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Avg Bill (Salon)', value: 'AED 180', color: 'pink' },
            { label: 'Avg Bill (Spa)', value: 'AED 400', color: 'purple' },
            { label: 'Commission', value: '15-20%', color: 'emerald' },
            { label: 'Nuqta LOIs', value: '25%', color: 'blue' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
              <p className="text-pink-400 text-xl font-black">{stat.value}</p>
              <p className="text-slate-400 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-32">

        {/* Part 1: Industry Overview */}
        <div className="mb-8">
          <h2 className="text-pink-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-pink-500 text-[#0a1628] flex items-center justify-center text-xs font-black">1</span>
            Industry Overview
          </h2>

          <CollapsibleSection title="Beauty & Wellness Market in UAE" icon={BarChart3} defaultOpen={true}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'UAE Beauty Market', value: '$2.8B' },
                  { label: 'Salons in Dubai', value: '5,000+' },
                  { label: 'Spas in Dubai', value: '800+' },
                  { label: 'Avg Margin', value: '50-65%' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                    <p className="text-pink-400 text-lg font-bold">{stat.value}</p>
                    <p className="text-slate-400 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-pink-500/10 rounded-xl p-4 border border-pink-500/20">
                <h4 className="text-pink-400 font-semibold mb-2">🇦🇪 GCC-Specific Pain Points</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• <strong className="text-pink-300">55% of clients never rebook</strong> - they try the new salon in the next building</li>
                  <li>• <strong className="text-pink-300">Beauty influencers cost AED 1,000-10,000</strong> per post - no guaranteed bookings</li>
                  <li>• <strong className="text-pink-300">Fresha/Booksy take 20-30%</strong> commission and own your client data</li>
                  <li>• <strong className="text-pink-300">5,000+ salons in Dubai alone</strong> - fierce competition on every street</li>
                  <li>• <strong className="text-pink-300">Expat client turnover</strong> - clients leave UAE every 2-3 years</li>
                  <li>• <strong className="text-pink-300">Staff poaching is rampant</strong> - stylists leave and take clients with them</li>
                  <li>• <strong className="text-pink-300">Mall rent pressure</strong> - AED 300-400/sqft means empty chairs bleed money</li>
                  <li>• <strong className="text-pink-300">Weekend-heavy traffic</strong> - weekdays are dead, Fri-Sat overbooked</li>
                  <li>• <strong className="text-pink-300">Home service competition</strong> - apps like Glamz sending stylists to homes</li>
                  <li>• <strong className="text-pink-300">Price sensitivity</strong> - clients compare prices on Instagram before booking</li>
                  <li>• <strong className="text-pink-300">Summer client exodus</strong> - 30% revenue drop as residents travel abroad</li>
                </ul>
              </div>

              <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                <h4 className="text-emerald-400 font-semibold mb-2">✨ How Nuqta Solves Each Pain Point</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• <strong className="text-pink-300">55% never rebook?</strong> → <strong className="text-emerald-300">Coins create rebooking incentive</strong> - 2x more return visits, clients don&apos;t leave rewards behind</li>
                  <li>• <strong className="text-pink-300">Influencers cost AED 10K?</strong> → <strong className="text-emerald-300">Pay only 15-20% on actual bookings</strong> - zero upfront cost, before/after content included</li>
                  <li>• <strong className="text-pink-300">Fresha takes 20-30%?</strong> → <strong className="text-emerald-300">Half the commission at 15-20%</strong> AND you own the client data, not the app</li>
                  <li>• <strong className="text-pink-300">5,000+ salons competing?</strong> → <strong className="text-emerald-300">Stand out with rewards</strong> - be the salon where clients earn coins, differentiate beyond service</li>
                  <li>• <strong className="text-pink-300">Expat clients leave?</strong> → <strong className="text-emerald-300">Continuous acquisition from 500K+ users</strong> - new clients replace departing expats automatically</li>
                  <li>• <strong className="text-pink-300">Staff poaching?</strong> → <strong className="text-emerald-300">YOU own the client database</strong> - stylists leave, your client relationships stay with you</li>
                  <li>• <strong className="text-pink-300">Mall rent bleeding money?</strong> → <strong className="text-emerald-300">Fill empty chairs with targeted notifications</strong> - push to nearby users during slow hours</li>
                  <li>• <strong className="text-pink-300">Weekdays dead?</strong> → <strong className="text-emerald-300">Double coins on Tue-Wed</strong> - incentivize weekday bookings, balance traffic</li>
                  <li>• <strong className="text-pink-300">Home service apps?</strong> → <strong className="text-emerald-300">In-salon rewards they can&apos;t match</strong> - coins + experience beats home convenience</li>
                  <li>• <strong className="text-pink-300">Price shopping on Instagram?</strong> → <strong className="text-emerald-300">Compete on value, not just price</strong> - cashback makes your price effectively lower</li>
                  <li>• <strong className="text-pink-300">Summer exodus?</strong> → <strong className="text-emerald-300">Summer survival campaigns</strong> - bonus coins keep remaining residents coming</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="What Nuqta Provides for Salons" icon={Sparkles} defaultOpen={true}>
            <div className="space-y-4">
              <p className="text-slate-300 text-sm">
                This is the core value proposition. Nuqta isn&apos;t just cashback - it&apos;s a complete growth partner for beauty businesses.
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
                    desc: 'No need to change your existing setup. We provide QR-based logging OR integrate with your booking system.',
                    tier: 'All Tiers'
                  },
                  {
                    icon: Camera,
                    title: 'Content Creation',
                    desc: 'Professional salon photography, before/after shots, Instagram posts, Reels, and Stories.',
                    tier: 'Basic+'
                  },
                  {
                    icon: Users,
                    title: 'Influencer Marketing',
                    desc: 'We coordinate beauty influencers and bloggers for barter or paid collaborations to drive awareness.',
                    tier: 'Golden+'
                  },
                  {
                    icon: TrendingDown,
                    title: 'Price Engineering',
                    desc: 'Strategic service pricing with Nuqta discounts so clients feel rewarded while you maintain margins.',
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
                    title: 'In-Salon Materials',
                    desc: 'Mirror stickers, reception displays, appointment cards - everything to promote Nuqta at your salon.',
                    tier: 'All Tiers'
                  },
                  {
                    icon: Gift,
                    title: 'Birthday & Win-back Campaigns',
                    desc: 'Automated campaigns to bring clients back on birthdays and re-engage lapsed customers.',
                    tier: 'Basic+'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="text-pink-400" size={20} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-white font-bold text-sm">{item.title}</h4>
                          <span className="text-xs px-2 py-0.5 bg-pink-500/20 text-pink-400 rounded-full">{item.tier}</span>
                        </div>
                        <p className="text-slate-400 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Investment Breakdown */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-white font-bold mb-3">📊 How We Invest Your Package Fee</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-pink-500/10 rounded-lg p-4 border border-pink-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-pink-400 font-bold text-2xl">70%</span>
                      <span className="text-pink-400 text-sm font-medium">Content & Creative</span>
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
                        Whatever you spend on your package, you get the <span className="text-green-400 font-bold">same amount as in-app advertising credit</span> to promote your salon to Nuqta users!
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

              <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl p-4 border border-pink-500/30">
                <h4 className="text-pink-400 font-bold mb-2">💅 Sales Tip: Lead with Services, Not Just Cashback</h4>
                <p className="text-slate-300 text-sm">
                  &quot;You&apos;re not just getting cashback for your clients. You&apos;re getting a dedicated marketing team,
                  content creation, influencer partnerships, and performance marketing - all included in your package.
                  70% goes to content creation (photography, videos, influencers) and 30% to paid ads.
                  Think of it as hiring a marketing agency that only gets paid when you make money.&quot;
                </p>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Target Sub-Categories" icon={Heart}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  category: 'Ladies Salon',
                  avgBill: 'AED 200-350',
                  frequency: '2-4x/month',
                  margin: '55%',
                  bestApproach: 'Focus on regular appointments (hair, nails)'
                },
                {
                  category: 'Men\'s Barbershop',
                  avgBill: 'AED 50-100',
                  frequency: '2-3x/month',
                  margin: '60%',
                  bestApproach: 'Focus on grooming habit, quick rewards'
                },
                {
                  category: 'Nail Bar',
                  avgBill: 'AED 100-200',
                  frequency: '2x/month',
                  margin: '60%',
                  bestApproach: 'Focus on regular maintenance appointments'
                },
                {
                  category: 'Spa & Wellness',
                  avgBill: 'AED 300-600',
                  frequency: '1-2x/month',
                  margin: '50%',
                  bestApproach: 'Focus on self-care routine, packages'
                },
                {
                  category: 'Medical Aesthetics',
                  avgBill: 'AED 500-2000',
                  frequency: '1x/month',
                  margin: '65%',
                  bestApproach: 'Focus on treatment courses, VIP status'
                },
                {
                  category: 'Unisex Salon',
                  avgBill: 'AED 150-250',
                  frequency: '2x/month',
                  margin: '55%',
                  bestApproach: 'Focus on family visits, referrals'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h4 className="text-pink-400 font-bold mb-2">{item.category}</h4>
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
                      <th className="text-left text-pink-400 font-medium py-2">Competitor</th>
                      <th className="text-left text-pink-400 font-medium py-2">Model</th>
                      <th className="text-left text-pink-400 font-medium py-2">Cost</th>
                      <th className="text-left text-pink-400 font-medium py-2">Weakness</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">Fresha</td>
                      <td className="py-2">Booking platform</td>
                      <td className="py-2">20%+</td>
                      <td className="py-2">Owns client data, no loyalty</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">Booksy</td>
                      <td className="py-2">Booking platform</td>
                      <td className="py-2">AED 200+/mo</td>
                      <td className="py-2">No discovery, no cashback</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">Treatwell</td>
                      <td className="py-2">Marketplace</td>
                      <td className="py-2">25-30%</td>
                      <td className="py-2">Commoditizes salons</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">Instagram Ads</td>
                      <td className="py-2">Advertising</td>
                      <td className="py-2 text-red-400">AED 100+/lead</td>
                      <td className="py-2">No guarantee, high cost</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium text-emerald-400">Nuqta</td>
                      <td className="py-2">Loyalty + Discovery</td>
                      <td className="py-2 text-emerald-400">15-20%</td>
                      <td className="py-2 text-emerald-400">None - best of all</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                <h4 className="text-emerald-400 font-semibold mb-2">Our Advantage</h4>
                <p className="text-slate-300 text-sm">
                  Booking apps charge 20-30% and own your clients. Nuqta costs 15-20%,
                  you keep 100% of client data, AND clients get rewarded for loyalty - making them
                  choose YOU over competitors.
                </p>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 2: Pre-Meeting */}
        <div className="mb-8">
          <h2 className="text-pink-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-pink-500 text-[#0a1628] flex items-center justify-center text-xs font-black">2</span>
            Pre-Meeting Preparation
          </h2>

          <CollapsibleSection title="Research Checklist" icon={Users} defaultOpen={true}>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-3">About the Business</h4>
                <div className="space-y-1">
                  <ChecklistItem>Check Google Maps reviews (service quality, wait times)</ChecklistItem>
                  <ChecklistItem>Visit Instagram (follower count, engagement, before/after photos)</ChecklistItem>
                  <ChecklistItem>Look for their price menu online or call to ask</ChecklistItem>
                  <ChecklistItem>Note: Do they use Fresha/Booksy? (visible on Google)</ChecklistItem>
                  <ChecklistItem>Visit as a customer if possible (or send someone)</ChecklistItem>
                  <ChecklistItem>Estimate daily clients (10-30 for small, 30-100 for large)</ChecklistItem>
                  <ChecklistItem>Check if they do packages/memberships</ChecklistItem>
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3">About the Decision Maker</h4>
                <div className="space-y-1">
                  <ChecklistItem>Owner or Salon Manager?</ChecklistItem>
                  <ChecklistItem>Single location or chain?</ChecklistItem>
                  <ChecklistItem>Are they at the salon daily or investor-owner?</ChecklistItem>
                  <ChecklistItem>Check LinkedIn for background</ChecklistItem>
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
                        <th className="text-left text-pink-400 font-medium py-2">Material</th>
                        <th className="text-left text-pink-400 font-medium py-2">Format</th>
                        <th className="text-left text-pink-400 font-medium py-2">Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      <tr className="border-b border-white/5">
                        <td className="py-2 font-medium">Salon Pitch Deck</td>
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
                        <td className="py-2">Phone spreadsheet</td>
                        <td className="py-2">Custom math</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">QR Sample</td>
                        <td className="py-2">Printed mock</td>
                        <td className="py-2">Show what they get</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-pink-500/10 rounded-xl p-4 border border-pink-500/20">
                <h4 className="text-pink-400 font-semibold mb-2">One-Pager Key Points</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• 55% of salon clients never rebook</li>
                  <li>• Nuqta brings them back 2x more</li>
                  <li>• You pay only 15-20% (vs 30% to Fresha)</li>
                  <li>• You OWN the client data forever</li>
                  <li>• 500K+ Nuqta users looking for salons</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 3: The Pitch */}
        <div className="mb-8">
          <h2 className="text-pink-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-pink-500 text-[#0a1628] flex items-center justify-center text-xs font-black">3</span>
            The Pitch
          </h2>

          <CollapsibleSection title="60-Second Pitch" icon={Zap} defaultOpen={true}>
            <div className="bg-gradient-to-r from-pink-500/20 to-transparent rounded-xl p-4 border border-pink-500/30">
              <p className="text-white leading-relaxed">
                &quot;Hey [Name], love what you&apos;ve done with the salon. Quick question - after a client comes in for the first time, what percentage actually rebook?
                <br /><br />
                Industry average is about 45%. Meaning 55% of clients you work so hard to get... just vanish. Try a different salon next time.
                <br /><br />
                We&apos;ve built something that fixes this. When a client pays, they log it in Nuqta and get 10% back in coins. But here&apos;s the thing - they can use those coins at YOUR salon or any Nuqta partner.
                <br /><br />
                So now they have AED 20-30 sitting in their account. When it&apos;s time for their next haircut or treatment, guess who they remember? The place where they have money waiting.
                <br /><br />
                Our salons see 2x more repeat bookings. You only pay 15-20% on Nuqta-driven visits. If nobody comes through us, you pay nothing. Want to see how this would work for your salon?&quot;
              </p>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="ROI Calculator Script" icon={Calculator}>
            <div className="space-y-4">
              <p className="text-slate-300 text-sm">Calculate their specific ROI on the spot:</p>

              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-white font-semibold mb-3">Step-by-Step Calculation</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-slate-400">1. Their average service bill:</span>
                    <span className="text-white font-mono">AED ___</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-slate-400">2. New Nuqta clients/month (estimate 50-150):</span>
                    <span className="text-white font-mono">___ clients</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-slate-400">3. Repeat multiplier:</span>
                    <span className="text-emerald-400 font-mono">× 2 visits</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-pink-500/20 rounded-lg border border-pink-500/30">
                    <span className="text-pink-400">4. Extra monthly revenue:</span>
                    <span className="text-pink-400 font-mono font-bold">AED ___</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-slate-400">5. Nuqta cost (16%):</span>
                    <span className="text-white font-mono">AED ___</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-emerald-500/20 rounded-lg border border-emerald-500/30">
                    <span className="text-emerald-400">6. Your extra profit (55% margin - 16% cost):</span>
                    <span className="text-emerald-400 font-mono font-bold">AED ___</span>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                <h4 className="text-emerald-400 font-semibold mb-2">Example: Ladies Salon</h4>
                <p className="text-slate-300 text-sm">
                  AED 200 avg bill × 100 Nuqta clients × 2 visits = <strong className="text-white">AED 40,000/month</strong>
                  <br />
                  Cost: AED 6,400 (16%) | <strong className="text-emerald-400">Extra profit: AED 15,600/month</strong>
                </p>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Discovery Questions" icon={MessageSquare}>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-2">Opening Questions</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>1. &quot;How long have you been running this salon?&quot;</li>
                  <li>2. &quot;What services are most popular here?&quot;</li>
                  <li>3. &quot;Do most of your clients rebook, or are they mostly one-timers?&quot;</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Pain Point Questions</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>4. &quot;What&apos;s your biggest challenge with getting clients to come back?&quot;</li>
                  <li>5. &quot;Do you use Fresha or any booking platform?&quot;</li>
                  <li>6. &quot;How do you currently get new clients?&quot;</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Closing Questions</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>7. &quot;If every client had AED 20 waiting at your salon, would they come back more?&quot;</li>
                  <li>8. &quot;What would stop you from trying something that costs nothing upfront?&quot;</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 4: Objection Handling */}
        <div className="mb-8">
          <h2 className="text-pink-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-pink-500 text-[#0a1628] flex items-center justify-center text-xs font-black">4</span>
            Objection Handling
          </h2>

          <CollapsibleSection title="Top 10 Objections" icon={Shield} defaultOpen={true}>
            <div className="space-y-4">
              {[
                {
                  objection: '"We already use Fresha/Booksy"',
                  response: 'Great - Nuqta works alongside booking apps. Fresha helps with scheduling, Nuqta helps with loyalty and discovery. They charge you for bookings, we bring you NEW clients who found you through Nuqta AND make them return. Different purposes, both valuable.'
                },
                {
                  objection: '"Our clients already come back"',
                  response: 'That\'s fantastic - you have loyal clients. But what about the 50%+ who visit once and don\'t return? Even adding 20 new regulars per month at AED 200 each = AED 48,000 extra revenue per year.'
                },
                {
                  objection: '"15-20% is too high for salon services"',
                  response: 'You\'re already paying 20-30% to booking platforms. And Instagram influencers cost AED 500+ per post with no guarantee. We cost less, bring verified customers, AND they come back more. The ROI is actually better.'
                },
                {
                  objection: '"My clients don\'t use apps"',
                  response: 'Actually, 94% of UAE residents have smartphones. Nuqta has 500K+ users - many are probably already looking for salons like yours. We bring you clients who are already app-savvy.'
                },
                {
                  objection: '"We have our own loyalty program"',
                  response: 'Most salon loyalty cards have 80% abandonment. Nuqta coins can be spent at 500+ places across UAE, so clients actually value them. Plus, we bring you NEW clients - your loyalty card only works on existing ones.'
                },
                {
                  objection: '"My stylists build relationships, not apps"',
                  response: 'Absolutely - and that\'s your competitive advantage! Nuqta just gets clients through your door the FIRST time. Your amazing stylists turn them into loyal clients. We\'re the introduction, you\'re the relationship.'
                },
                {
                  objection: '"We\'re fully booked already"',
                  response: 'Amazing problem to have! Two thoughts: 1) Are your slow days (weekdays, early mornings) fully booked? Nuqta can target those. 2) Higher demand means you could raise prices - more profit per client.'
                },
                {
                  objection: '"I need to check with my business partner"',
                  response: 'Of course. Can I send a summary for them to review? What specific concerns do you think they\'ll have? I can address those in the document.'
                },
                {
                  objection: '"Maybe after summer/Ramadan"',
                  response: 'Slow seasons are actually the BEST time to build loyalty. Clients you acquire now become your regulars during peak season. Plus, our current rates are promotional - they\'ll increase after launch.'
                },
                {
                  objection: '"How do I know it works?"',
                  response: 'You don\'t pay unless it works - that\'s our guarantee. Try us for 30 days. If you don\'t see at least 30 new repeat clients, cancel anytime. Zero risk.'
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
          <h2 className="text-pink-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-pink-500 text-[#0a1628] flex items-center justify-center text-xs font-black">5</span>
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
                  &quot;Perfect, let&apos;s get your salon set up. I just need your service menu and we can have you live by next week. What email should I send the agreement to?&quot;
                </p>
              </div>

              <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="text-yellow-400" size={18} />
                  <h4 className="text-yellow-400 font-semibold">The Exclusivity Close</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  &quot;We limit to 3 salons per area to protect our partners. The salon two buildings down asked for a meeting next week. Want to lock in your spot first?&quot;
                </p>
              </div>

              <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="text-blue-400" size={18} />
                  <h4 className="text-blue-400 font-semibold">The Guarantee Close</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  &quot;Here&apos;s my promise: 30 new repeat clients in 30 days, or you can cancel. No questions asked. What do you have to lose?&quot;
                </p>
              </div>

              <div className="bg-pink-500/10 rounded-xl p-4 border border-pink-500/30">
                <h4 className="text-pink-400 font-semibold mb-2">Never Leave Without:</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>✓ Signed LOI or contract</li>
                  <li>✓ OR a specific follow-up date/time</li>
                  <li>✓ Their WhatsApp number</li>
                  <li>✓ Service menu/price list</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Onboarding Timeline" icon={Calendar}>
            <div className="space-y-3">
              {[
                { day: 'Day 0', action: 'Contract signed', owner: 'BDA' },
                { day: 'Day 1', action: 'Trade license + service menu received', owner: 'BDA' },
                { day: 'Day 2', action: 'Listing created with photos', owner: 'Ops' },
                { day: 'Day 3', action: 'QR code + materials delivered', owner: 'Ops' },
                { day: 'Day 4', action: 'Staff training (15 min)', owner: 'BDA' },
                { day: 'Day 5', action: 'GO LIVE! 💅', owner: 'All' },
                { day: 'Day 7', action: 'First check-in call', owner: 'BDA' },
                { day: 'Day 30', action: 'Performance review', owner: 'BDA' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                  <div className="w-16 text-pink-400 font-bold text-sm">{item.day}</div>
                  <div className="flex-1 text-white text-sm">{item.action}</div>
                  <div className="text-slate-500 text-xs">{item.owner}</div>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 6: Follow-Up */}
        <div className="mb-8">
          <h2 className="text-pink-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-pink-500 text-[#0a1628] flex items-center justify-center text-xs font-black">6</span>
            Follow-Up Cadence
          </h2>

          <CollapsibleSection title="If Not Closed on Spot" icon={TrendingUp}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-pink-400 font-medium py-2">Day</th>
                    <th className="text-left text-pink-400 font-medium py-2">Channel</th>
                    <th className="text-left text-pink-400 font-medium py-2">Message</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-medium text-white">Day 0</td>
                    <td className="py-2">WhatsApp</td>
                    <td className="py-2">&quot;Lovely meeting you! Here&apos;s the summary we discussed. Let me know your thoughts!&quot;</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-medium text-white">Day 2</td>
                    <td className="py-2">WhatsApp</td>
                    <td className="py-2">&quot;Hey [Name], did you get a chance to review? Happy to answer any questions.&quot;</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-medium text-white">Day 5</td>
                    <td className="py-2">Call</td>
                    <td className="py-2">&quot;Hi, following up on Nuqta. What questions came up?&quot;</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-medium text-white">Day 7</td>
                    <td className="py-2">WhatsApp</td>
                    <td className="py-2">&quot;Quick update: [Salon name] nearby just signed. Limited spots left in your area.&quot;</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium text-white">Day 14</td>
                    <td className="py-2">Final</td>
                    <td className="py-2">&quot;Closing the loop - still interested? If timing isn&apos;t right, no worries at all.&quot;</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CollapsibleSection>
        </div>

        {/* Quick Reference */}
        <div className="mb-8">
          <h2 className="text-pink-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-pink-500 text-[#0a1628] flex items-center justify-center text-xs font-black">7</span>
            Quick Reference
          </h2>

          <CollapsibleSection title="Key Stats to Remember" icon={Bookmark} defaultOpen={true}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: 'UAE Beauty Market', value: '$2.8B' },
                { label: 'Rebooking Rate', value: '45%' },
                { label: 'With Nuqta', value: '85%' },
                { label: 'Commission Range', value: '15-20%' },
                { label: 'Avg Salon Bill', value: 'AED 180' },
                { label: 'Repeat Visits', value: '2x' },
                { label: 'Setup Time', value: '5 days' },
                { label: 'Nuqta Users', value: '500K+' },
                { label: 'Beauty LOIs', value: '25%' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                  <p className="text-pink-400 text-lg sm:text-xl font-bold">{stat.value}</p>
                  <p className="text-slate-400 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Power Phrases" icon={Zap}>
            <div className="space-y-2">
              {[
                'Your clients, your data - forever',
                '2x more rebookings, guaranteed',
                'Pay only when clients come back',
                '15% vs 30% to booking apps',
                '500K users looking for your services',
                'Cancel anytime, no lock-in'
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
                  '"Better than Fresha" (avoid direct attacks)',
                  '"Your stylists don\'t matter" (they do!)',
                  '"Guaranteed new clients" (illegal claim)',
                  '"We need salons" (sounds desperate)'
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
          <h2 className="text-pink-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-pink-500 text-[#0a1628] flex items-center justify-center text-xs font-black">★</span>
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
                  <p className="text-emerald-400 text-sm">How to onboard salon merchants</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Battle-tested campaigns to sign salon & spa merchants. Beauty industry focus with appointment-based loyalty strategies.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Category Conquest: Beauty vertical domination</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Content Studio: Before/after transformation shoots</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Merchant Referral: Salon owners refer salons</span>
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
                  <p className="text-purple-400 text-sm">How to bring clients to salons</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Viral campaigns to drive beauty-conscious customers. Transformation content, referral chains, and streak rewards.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-purple-400" />
                  <span>Nuqta Finds: Beauty transformation UGC</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-purple-400" />
                  <span>Golden Chain: Referral for beauty services</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-purple-400" />
                  <span>Flash Frenzy: Limited-time beauty deals</span>
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
                <p className="text-2xl font-bold text-pink-400">5</p>
                <p className="text-xs text-slate-400">Merchant Campaigns</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-400">6</p>
                <p className="text-xs text-slate-400">User Campaigns</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-400">AED 350</p>
                <p className="text-xs text-slate-400">Avg Ticket</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#c9a227]">3x</p>
                <p className="text-xs text-slate-400">Repeat Rate Target</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Footer */}
        <div className="bg-gradient-to-r from-pink-500/20 to-transparent rounded-2xl p-6 border border-pink-500/30 text-center">
          <Scissors className="text-pink-400 mx-auto mb-3" size={32} />
          <h3 className="text-white font-bold text-lg mb-2">Ready for the Meeting?</h3>
          <p className="text-slate-400 text-sm mb-4">Access the pitch deck and other materials</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/deck-salon" className="px-4 py-2 bg-pink-500 text-white rounded-full font-semibold text-sm hover:bg-pink-600 transition-colors">
              View Salon Deck
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
          Salon & Spa Playbook v1.0 • Last Updated: February 2026
        </p>
      </div>
    </div>
  );
};

export default SalonPlaybook;
