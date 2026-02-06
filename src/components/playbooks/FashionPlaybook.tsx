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
  Shirt,
  ShoppingBag,
  UserCheck,
  Monitor,
  Camera,
  Megaphone,
  MapPin,
  Receipt,
  Sparkles,
  Star,
  Gift,
  Percent,
  Tag,
  Heart
} from 'lucide-react';

/**
 * FASHION & RETAIL SALES PLAYBOOK
 * Complete sales guide for fashion/retail merchant acquisition
 *
 * Industry: Fashion Boutiques, Clothing Stores, Shoe Stores, Accessories
 * Engine: A (High Margin 50-70%)
 * Commission: 15-20%
 *
 * UAE Market Stats:
 * - Average transaction: AED 300-1,000
 * - Visit frequency: 1-2x per month
 * - Margin: 50-70%
 * - Fashion retail market UAE: $6B
 * - 12% of Nuqta LOIs are fashion/retail
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
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
            <Icon className="text-purple-400" size={20} />
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

const FashionPlaybook = () => {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Header */}
      <div className="bg-gradient-to-b from-purple-500/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
          <Link href="/merchant-playbook" className="inline-flex items-center gap-2 text-slate-400 hover:text-purple-400 mb-6 transition-colors">
            <ArrowLeft size={20} />
            <span>All Playbooks</span>
          </Link>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full mb-6">
              <ShoppingBag className="text-purple-400" size={16} />
              <span className="text-purple-400 text-sm font-medium">Engine A • High Margin</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              <span className="text-purple-400">Fashion & Retail</span> Sales Playbook
            </h1>
            <p className="text-slate-400 text-lg">Complete guide to signing fashion merchants</p>
            <p className="text-slate-500 text-sm mt-2">High Margin • Style-Driven Purchases</p>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Avg Transaction', value: 'AED 450' },
            { label: 'Frequency', value: '1-2x/month' },
            { label: 'Commission', value: '15-20%' },
            { label: 'Nuqta LOIs', value: '12%' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
              <p className="text-purple-400 text-xl font-black">{stat.value}</p>
              <p className="text-slate-400 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-32">

        {/* Part 1: Industry Overview */}
        <div className="mb-8">
          <h2 className="text-purple-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-purple-500 text-[#0a1628] flex items-center justify-center text-xs font-black">1</span>
            Industry Overview
          </h2>

          <CollapsibleSection title="Fashion Market in UAE" icon={BarChart3} defaultOpen={true}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'UAE Fashion Market', value: '$6B' },
                  { label: 'Fashion Stores', value: '5,000+' },
                  { label: 'Boutiques', value: '2,000+' },
                  { label: 'Avg Margin', value: '50-70%' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                    <p className="text-purple-400 text-lg font-bold">{stat.value}</p>
                    <p className="text-slate-400 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/20">
                <h4 className="text-purple-400 font-semibold mb-2">Key Pain Points</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• High competition from malls and online (Namshi, Ounass)</li>
                  <li>• Seasonal inventory - need to clear stock</li>
                  <li>• High CAC through Instagram influencers</li>
                  <li>• Customers shop around for best deals</li>
                  <li>• Hard to build loyalty in impulse-buy category</li>
                  <li>• End-of-season sales eat into margins</li>
                </ul>
              </div>

              <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20">
                <h4 className="text-blue-400 font-semibold mb-2">Why They Need Nuqta</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Earn coins = reason to shop at YOUR store</li>
                  <li>• New collection alerts bring customers back</li>
                  <li>• Coins help clear seasonal inventory</li>
                  <li>• Discovery by 500K+ fashion-conscious users</li>
                  <li>• Compete with online on experience + rewards</li>
                  <li>• VIP customer recognition and perks</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="What Nuqta Provides for Fashion" icon={Sparkles} defaultOpen={true}>
            <div className="space-y-4">
              <p className="text-slate-300 text-sm">
                For fashion retail, Nuqta drives loyalty through exclusive drops, VIP access, and rewards on high-margin items.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: UserCheck,
                    title: 'Dedicated Marketing Manager',
                    desc: 'Personal manager for campaign planning, seasonal promotions, and new collection launches.',
                    tier: 'Basic+'
                  },
                  {
                    icon: Monitor,
                    title: 'POS Integration',
                    desc: 'Seamless integration with your retail system for automatic transaction logging.',
                    tier: 'All Tiers'
                  },
                  {
                    icon: Camera,
                    title: 'Content Creation',
                    desc: 'Professional lookbook shoots, Instagram Reels, styling tips, and fashion content.',
                    tier: 'Golden+'
                  },
                  {
                    icon: Users,
                    title: 'Influencer Marketing',
                    desc: 'Coordinate fashion bloggers and influencers for barter or paid collaborations.',
                    tier: 'Golden+'
                  },
                  {
                    icon: Star,
                    title: 'VIP Program',
                    desc: 'Early access to new collections, private shopping events, and exclusive previews for top customers.',
                    tier: 'Golden+'
                  },
                  {
                    icon: Megaphone,
                    title: 'Seasonal Campaigns',
                    desc: 'DSF, Ramadan, Back-to-School, and seasonal fashion campaigns with bonus coins.',
                    tier: 'Basic+'
                  },
                  {
                    icon: MapPin,
                    title: 'In-Store Materials',
                    desc: 'Stylish counter displays, fitting room cards, and shopping bag inserts.',
                    tier: 'All Tiers'
                  },
                  {
                    icon: Tag,
                    title: 'Smart Sale Campaigns',
                    desc: 'Use coins to clear inventory without devaluing your brand with heavy discounts.',
                    tier: 'Basic+'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="text-purple-400" size={20} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-white font-bold text-sm">{item.title}</h4>
                          <span className="text-xs px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded-full">{item.tier}</span>
                        </div>
                        <p className="text-slate-400 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-500/30">
                <h4 className="text-purple-400 font-bold mb-2">👗 Sales Tip: Coins, Not Discounts</h4>
                <p className="text-slate-300 text-sm">
                  &quot;Discounts devalue your brand. 50% OFF screams desperation. But &apos;Earn 10% in coins&apos;?
                  That&apos;s smart shopping. Customers feel rewarded, not like they&apos;re getting leftovers.&quot;
                </p>
              </div>

              {/* Investment Breakdown */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 mt-4">
                <h4 className="text-white font-bold mb-3">📊 How We Invest Your Package Fee</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-purple-400 font-bold text-2xl">70%</span>
                      <span className="text-purple-400 text-sm font-medium">Content & Creative</span>
                    </div>
                    <ul className="text-slate-300 text-xs space-y-1">
                      <li>• Professional lookbook photography</li>
                      <li>• Fashion videos & Reels</li>
                      <li>• Social media content</li>
                      <li>• UGC creation</li>
                      <li>• Fashion influencer deals</li>
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
                        Whatever you spend on your package, you get the <span className="text-green-400 font-bold">same amount as in-app advertising credit</span> to promote your fashion store to Nuqta users!
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

          <CollapsibleSection title="Target Sub-Categories" icon={Shirt}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  category: 'Designer Boutique',
                  avgBill: 'AED 800-3,000',
                  frequency: '1x/month',
                  margin: '60-70%',
                  bestApproach: 'Focus on VIP experience, exclusivity'
                },
                {
                  category: 'Multi-Brand Fashion',
                  avgBill: 'AED 400-800',
                  frequency: '1-2x/month',
                  margin: '50-60%',
                  bestApproach: 'Focus on new arrivals, styling'
                },
                {
                  category: 'Fast Fashion',
                  avgBill: 'AED 150-400',
                  frequency: '2-3x/month',
                  margin: '45-55%',
                  bestApproach: 'Focus on frequency, trend alerts'
                },
                {
                  category: 'Shoe Store',
                  avgBill: 'AED 300-800',
                  frequency: '1x/month',
                  margin: '50-65%',
                  bestApproach: 'Focus on complete-the-look, accessories'
                },
                {
                  category: 'Accessories/Bags',
                  avgBill: 'AED 200-1,000',
                  frequency: '1-2x/month',
                  margin: '55-70%',
                  bestApproach: 'Focus on gifting, impulse purchase'
                },
                {
                  category: 'Kids Fashion',
                  avgBill: 'AED 200-500',
                  frequency: '1x/month',
                  margin: '50-60%',
                  bestApproach: 'Focus on parents, seasonal needs'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h4 className="text-purple-400 font-bold mb-2">{item.category}</h4>
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
                      <span className="text-purple-400 ml-1">{item.margin}</span>
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
                      <th className="text-left text-purple-400 font-medium py-2">Competitor</th>
                      <th className="text-left text-purple-400 font-medium py-2">Model</th>
                      <th className="text-left text-purple-400 font-medium py-2">Cost</th>
                      <th className="text-left text-purple-400 font-medium py-2">Weakness</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">Namshi/Ounass</td>
                      <td className="py-2">E-commerce</td>
                      <td className="py-2">Free shipping</td>
                      <td className="py-2">No try-on, returns hassle</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">Mall Loyalty (SHARE)</td>
                      <td className="py-2">Points program</td>
                      <td className="py-2">Internal</td>
                      <td className="py-2">Only works at that mall</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">Instagram Shopping</td>
                      <td className="py-2">Social commerce</td>
                      <td className="py-2">Organic/paid ads</td>
                      <td className="py-2">No loyalty, one-time purchase</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">Influencer Campaigns</td>
                      <td className="py-2">One-time posts</td>
                      <td className="py-2 text-red-400">AED 1,000-50,000</td>
                      <td className="py-2">No lasting loyalty</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium text-purple-400">Nuqta</td>
                      <td className="py-2">Loyalty + Discovery</td>
                      <td className="py-2 text-purple-400">15-20%</td>
                      <td className="py-2 text-purple-400">Best value</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/20">
                <h4 className="text-purple-400 font-semibold mb-2">Our Advantage</h4>
                <p className="text-slate-300 text-sm">
                  Online can&apos;t match the in-person experience - trying on clothes, feeling fabrics, getting styling advice.
                  Nuqta adds a loyalty layer that makes choosing physical retail rewarding AND fashionable.
                </p>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 2: The Pitch */}
        <div className="mb-8">
          <h2 className="text-purple-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-purple-500 text-[#0a1628] flex items-center justify-center text-xs font-black">2</span>
            The Pitch
          </h2>

          <CollapsibleSection title="60-Second Pitch" icon={Zap} defaultOpen={true}>
            <div className="bg-gradient-to-r from-purple-500/20 to-transparent rounded-xl p-4 border border-purple-500/30">
              <p className="text-white leading-relaxed">
                &quot;Hey [Name], love what you&apos;ve done with the store. Quick question - when a customer buys that perfect dress, do they come back for the matching bag? Or do they go wherever catches their eye next time?
                <br /><br />
                Fashion is an impulse buy, right? But what if you could turn impulse buyers into loyal customers?
                <br /><br />
                When they buy from you, they earn 10% back in Nuqta coins. Now when they&apos;re scrolling Instagram and see a new trend, they think &apos;I have AED 50 at [Your Store]&apos; - and they come back.
                <br /><br />
                Plus, we help with new collection drops, VIP early access, and seasonal campaigns. All managed for you.
                <br /><br />
                You pay 15-20% on Nuqta sales. But your margins are 60%+, so you still keep 40%+ profit. Want to see how many new loyal customers we can bring you?&quot;
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
                    <span className="text-slate-400">2. Nuqta customers/month (estimate 50-150):</span>
                    <span className="text-white font-mono">___ customers</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-slate-400">3. Repeat purchase rate:</span>
                    <span className="text-purple-400 font-mono">× 2.0 (vs 0.8 without)</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
                    <span className="text-purple-400">4. Extra monthly revenue:</span>
                    <span className="text-purple-400 font-mono font-bold">AED ___</span>
                  </div>
                </div>
              </div>

              <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/20">
                <h4 className="text-purple-400 font-semibold mb-2">Example: Fashion Boutique</h4>
                <p className="text-slate-300 text-sm">
                  AED 500 avg × 100 Nuqta customers × 1.2 extra visits = <strong className="text-white">AED 60,000/month extra</strong>
                  <br />
                  Cost: AED 10,200 (17%) | <strong className="text-purple-400">Extra profit at 60% margin: AED 25,800/month</strong>
                </p>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Seasonal Campaigns" icon={Calendar}>
            <div className="space-y-4">
              <p className="text-slate-300 text-sm">
                Fashion is seasonal. Nuqta&apos;s campaigns drive traffic at key moments throughout the year.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { season: 'DSF (Jan-Feb)', campaign: 'Dubai Shopping Festival', message: 'Double coins + new arrivals' },
                  { season: 'Ramadan (Mar-Apr)', campaign: 'Eid collection launch', message: 'Early access for VIPs' },
                  { season: 'Summer Sale (Jun-Jul)', campaign: 'Clear summer stock', message: 'Bonus coins on sale items' },
                  { season: 'Back to School (Aug-Sep)', campaign: 'Kids & teen fashion', message: 'Family shopping rewards' },
                  { season: 'Fall/Winter (Oct-Nov)', campaign: 'New season drop', message: 'Preview events + extra coins' },
                  { season: 'Black Friday (Nov)', campaign: 'Biggest sale day', message: 'Triple coins + flash deals' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="text-purple-400" size={16} />
                      <h4 className="text-white font-semibold text-sm">{item.season}</h4>
                    </div>
                    <p className="text-slate-400 text-xs">
                      <span className="text-purple-400">{item.campaign}</span> • {item.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 3: Objection Handling */}
        <div className="mb-8">
          <h2 className="text-purple-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-purple-500 text-[#0a1628] flex items-center justify-center text-xs font-black">3</span>
            Objection Handling
          </h2>

          <CollapsibleSection title="Top 10 Objections" icon={Shield} defaultOpen={true}>
            <div className="space-y-4">
              {[
                {
                  objection: '"15-20% is too much"',
                  response: 'Your margin is 60%+. After Nuqta, you keep 40-45% profit - on sales you wouldn\'t have had otherwise. Compare to influencers who cost AED 5,000+ for one post with no guaranteed sales.'
                },
                {
                  objection: '"Fashion customers are impulse buyers, not loyal"',
                  response: 'Exactly! That\'s why they need a reason to remember you. With coins waiting at your store, they\'re more likely to think of you first when the impulse hits.'
                },
                {
                  objection: '"Online is killing us"',
                  response: 'Online can\'t offer try-ons, immediate gratification, or styling advice. Nuqta gives customers a REASON to choose you over Namshi - rewards on top of experience.'
                },
                {
                  objection: '"We already discount heavily for sales"',
                  response: 'Discounts devalue your brand. Nuqta coins are rewards, not discounts. \"Earn 10% back\" sounds smarter than \"10% OFF\". Customer perception matters.'
                },
                {
                  objection: '"Our customers are tourists, they won\'t return"',
                  response: 'True for some, but residents shop too. Focus on locals who can be repeat customers. And tourists often come back annually - give them a reason to remember you.'
                },
                {
                  objection: '"We\'re a small boutique"',
                  response: 'Small means personal. Big chains can\'t match your styling advice and personal touch. Nuqta adds modern loyalty to your boutique experience. Best of both worlds.'
                },
                {
                  objection: '"Influencers work better for fashion"',
                  response: 'Influencers are one-time posts. Nuqta builds LASTING relationships. Use both: influencer for awareness, Nuqta to convert them to loyal customers.'
                },
                {
                  objection: '"We\'re already in a mall with SHARE"',
                  response: 'SHARE works only in that mall. Nuqta works at 500+ locations. Customers can earn everywhere and spend at YOUR store. More reasons to visit you specifically.'
                },
                {
                  objection: '"Fashion is too seasonal, sales vary too much"',
                  response: 'That\'s why Nuqta helps! We run DSF campaigns, Ramadan promotions, Back-to-School pushes. Our campaigns align with your peak seasons.'
                },
                {
                  objection: '"Let me think about it after the season"',
                  response: 'Next season is when you need Nuqta most! Sign up now, capture holiday shoppers with loyalty built in, and they\'ll return all year.'
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
                    <ChevronRight className="text-purple-400 flex-shrink-0 mt-0.5" size={16} />
                    <p className="text-slate-300 text-sm">{item.response}</p>
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 4: Closing */}
        <div className="mb-8">
          <h2 className="text-purple-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-purple-500 text-[#0a1628] flex items-center justify-center text-xs font-black">4</span>
            Closing the Deal
          </h2>

          <CollapsibleSection title="Closing Scripts" icon={Target} defaultOpen={true}>
            <div className="space-y-4">
              <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="text-purple-400" size={18} />
                  <h4 className="text-purple-400 font-semibold">The Complete Look Close</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  &quot;Every customer who buys a dress should come back for the bag, shoes, and accessories.
                  Nuqta makes that happen. How many &apos;complete the look&apos; sales are you missing?&quot;
                </p>
              </div>

              <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="text-yellow-400" size={18} />
                  <h4 className="text-yellow-400 font-semibold">The Season Close</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  &quot;DSF/Eid/Black Friday is coming. Get set up now, run double-coin campaigns,
                  and turn holiday shoppers into year-round customers.&quot;
                </p>
              </div>

              <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/30">
                <h4 className="text-purple-400 font-semibold mb-2">Never Leave Without:</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>✓ Signed LOI or contract</li>
                  <li>✓ Average transaction value</li>
                  <li>✓ Peak seasons for their business</li>
                  <li>✓ WhatsApp + Instagram of owner</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Quick Reference */}
        <div className="mb-8">
          <h2 className="text-purple-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-purple-500 text-[#0a1628] flex items-center justify-center text-xs font-black">5</span>
            Quick Reference
          </h2>

          <CollapsibleSection title="Key Stats" icon={Bookmark} defaultOpen={true}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: 'UAE Fashion Market', value: '$6B' },
                { label: 'Avg Transaction', value: 'AED 450' },
                { label: 'Commission', value: '15-20%' },
                { label: 'Avg Margin', value: '50-70%' },
                { label: 'Repeat Rate', value: '+150%' },
                { label: 'Nuqta Users', value: '500K+' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                  <p className="text-purple-400 text-lg sm:text-xl font-bold">{stat.value}</p>
                  <p className="text-slate-400 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Power Phrases" icon={Zap}>
            <div className="space-y-2">
              {[
                'Turn impulse buyers into loyal customers',
                'Coins, not discounts - protect your brand',
                'Complete the look sales',
                'VIP early access to new collections',
                'Compete with online on experience + rewards',
                '500K fashion-conscious users'
              ].map((phrase, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-purple-500/10 rounded-lg px-3 py-2 border border-purple-500/20">
                  <CheckCircle2 className="text-purple-400 flex-shrink-0" size={16} />
                  <p className="text-white text-sm font-medium">{phrase}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Contact Footer */}
        <div className="bg-gradient-to-r from-purple-500/20 to-transparent rounded-2xl p-6 border border-purple-500/30 text-center">
          <ShoppingBag className="text-purple-400 mx-auto mb-3" size={32} />
          <h3 className="text-white font-bold text-lg mb-2">Ready for the Meeting?</h3>
          <p className="text-slate-400 text-sm mb-4">Access the pitch deck and other materials</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/deck-merchant" className="px-4 py-2 bg-purple-500 text-white rounded-full font-semibold text-sm hover:bg-purple-600 transition-colors">
              View Fashion Deck
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
          Fashion & Retail Playbook v1.0 • Last Updated: February 2026
        </p>
      </div>
    </div>
  );
};

export default FashionPlaybook;
