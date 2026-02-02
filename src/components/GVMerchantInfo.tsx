'use client';

import React, { useState } from 'react';
import {
  Store,
  Smartphone,
  Coins,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle2,
  DollarSign,
  Users,
  BarChart3,
  Clock,
  Gift,
  ArrowRight,
  Phone,
  Mail,
  Building2,
  Percent,
  Calculator,
  Star,
  ChevronDown,
  ChevronRight,
  Share2,
  Instagram,
  MessageCircle,
  Send,
  Settings,
  Bell,
  Target,
  Download,
  Lock,
  FileText
} from 'lucide-react';

/**
 * GV MERCHANT INFO PAGE
 * Benefits, packages, and information for Global Village merchants
 * Brand colors: #c9a227 (gold), #0a1628 (dark blue)
 */

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors text-left"
      >
        <span className="text-white font-medium pr-4">{question}</span>
        {isOpen ? (
          <ChevronDown className="text-[#c9a227] flex-shrink-0" size={20} />
        ) : (
          <ChevronRight className="text-slate-400 flex-shrink-0" size={20} />
        )}
      </button>
      {isOpen && (
        <div className="px-4 pb-4 border-t border-white/10 pt-3">
          <p className="text-slate-300 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

const GVMerchantInfo = () => {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#c9a227]/20 via-[#c9a227]/10 to-transparent overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 rounded-full mb-6 border border-[#c9a227]/30">
              <Store className="text-[#c9a227]" size={16} />
              <span className="text-[#c9a227] text-sm font-medium">For Global Village Merchants</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
              Turn Every Visitor Into a<br />
              <span className="text-[#c9a227]">Guaranteed Customer</span>
            </h1>
            <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
              Join Nuqta and get more customers, higher spending, and real-time insights -
              without any upfront cost or POS changes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#packages" className="px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-full font-bold hover:bg-[#d4b03f] transition-colors">
                View Packages
              </a>
              <a href="#how-it-works" className="px-6 py-3 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-colors">
                How It Works
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-[#c9a227]/10 border-y border-[#c9a227]/20">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: '7M+', label: 'GV Visitors/Season' },
              { value: 'AED 300+', label: 'Avg. Customer Spend' },
              { value: '0', label: 'Upfront Cost' },
              { value: '24hrs', label: 'Go Live Time' },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-[#c9a227] text-2xl sm:text-3xl font-black">{stat.value}</p>
                <p className="text-slate-400 text-xs sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">How Nuqta Works For You</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Simple process, no tech headaches, instant results</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '1',
              icon: Users,
              title: 'Visitor Gets Coins',
              description: 'Every GV ticket holder receives AED 30 worth of GV Coins in their Nuqta app'
            },
            {
              step: '2',
              icon: Store,
              title: 'They Visit Your Store',
              description: 'Visitors are motivated to spend AED 300+ to unlock their free coins'
            },
            {
              step: '3',
              icon: Smartphone,
              title: 'Customer Logs Purchase',
              description: 'After purchase, customer logs transaction in the Nuqta app'
            },
            {
              step: '4',
              icon: Coins,
              title: 'Coins Unlocked',
              description: 'Customer gets their coins, you get a paying customer who spent AED 300+'
            }
          ].map((item, idx) => (
            <div key={idx} className="relative">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 h-full">
                <div className="w-10 h-10 rounded-full bg-[#c9a227] text-[#0a1628] flex items-center justify-center font-black text-lg mb-4">
                  {item.step}
                </div>
                <item.icon className="text-[#c9a227] mb-3" size={28} />
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </div>
              {idx < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2">
                  <ArrowRight className="text-[#c9a227]/30" size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gradient-to-b from-transparent via-[#c9a227]/5 to-transparent py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Why Merchants Love Nuqta</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Real benefits, real results</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: 'Higher Average Order Value',
                description: 'Customers spend minimum AED 300 to unlock coins - that\'s 2-3x typical impulse purchases',
                highlight: '+200% AOV'
              },
              {
                icon: Users,
                title: 'Guaranteed Customers',
                description: 'Every coin holder is pre-motivated to spend. No more "just looking" window shoppers',
                highlight: '100% Intent'
              },
              {
                icon: Shield,
                title: 'Zero Upfront Cost',
                description: 'No setup fees, no subscription, no hardware. You only pay when you make money',
                highlight: 'AED 0'
              },
              {
                icon: Zap,
                title: 'No POS Integration',
                description: 'App-based transaction logging means zero changes to your existing systems. Keep using what you know',
                highlight: 'No Tech Hassle'
              },
              {
                icon: BarChart3,
                title: 'Real-Time Analytics',
                description: 'See exactly who shops at your store, what they buy, and when. Make smarter decisions',
                highlight: 'Live Data'
              },
              {
                icon: Gift,
                title: 'Loyalty Program Built-In',
                description: 'Customers earn Nuqta coins they can spend at your store (or across UAE). Repeat visits guaranteed',
                highlight: 'Repeat Customers'
              }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#c9a227]/30 transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a227]/20 flex items-center justify-center group-hover:bg-[#c9a227]/30 transition-colors">
                    <benefit.icon className="text-[#c9a227]" size={24} />
                  </div>
                  <span className="px-3 py-1 bg-[#c9a227]/20 text-[#c9a227] text-xs font-bold rounded-full">
                    {benefit.highlight}
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-slate-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Transparent Pricing</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Pay only when you make money. No hidden fees, no surprises.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Standard Package */}
          <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
            <div className="p-6">
              <h3 className="text-white font-bold text-xl mb-2">Standard</h3>
              <p className="text-slate-400 text-sm mb-4">For most GV merchants</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black text-white">5%</span>
                <span className="text-slate-400 text-sm">commission</span>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  'Pay only on Nuqta-driven sales',
                  'Real-time dashboard access',
                  'Customer insights & analytics',
                  'Nuqta app listing',
                  'Digital storefront',
                  'Standard support'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Premium Package */}
          <div className="bg-gradient-to-b from-[#c9a227]/20 to-[#c9a227]/5 rounded-2xl border-2 border-[#c9a227] overflow-hidden relative">
            <div className="absolute top-0 right-0 bg-[#c9a227] text-[#0a1628] px-4 py-1 text-xs font-bold rounded-bl-xl">
              RECOMMENDED
            </div>
            <div className="p-6">
              <h3 className="text-[#c9a227] font-bold text-xl mb-2">Premium</h3>
              <p className="text-slate-400 text-sm mb-4">For high-volume merchants</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black text-white">6%</span>
                <span className="text-slate-400 text-sm">commission</span>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  'Everything in Standard',
                  'Featured placement in app',
                  'Priority customer matching',
                  'Custom promotions & campaigns',
                  'Advanced analytics dashboard',
                  'Dedicated account manager',
                  'Marketing co-op support'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="text-[#c9a227] flex-shrink-0 mt-0.5" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#d4b03f] transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Enterprise Package */}
          <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
            <div className="p-6">
              <h3 className="text-white font-bold text-xl mb-2">Enterprise</h3>
              <p className="text-slate-400 text-sm mb-4">For pavilion operators</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black text-white">Custom</span>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  'Everything in Premium',
                  'Volume discounts',
                  'Multi-store management',
                  'White-label options',
                  'API access',
                  'Custom integrations',
                  'On-site training'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Commission Calculator */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Calculator className="text-[#c9a227]" size={24} />
              <h3 className="text-white font-bold text-lg">Quick Math</h3>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              At 5% commission, if Nuqta brings you a customer who spends AED 500:
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-[#0a1628] rounded-xl p-4">
                <p className="text-2xl font-bold text-white">AED 500</p>
                <p className="text-slate-500 text-xs">Customer Spend</p>
              </div>
              <div className="bg-[#0a1628] rounded-xl p-4">
                <p className="text-2xl font-bold text-red-400">-AED 25</p>
                <p className="text-slate-500 text-xs">Nuqta Fee (5%)</p>
              </div>
              <div className="bg-[#c9a227]/20 rounded-xl p-4 border border-[#c9a227]/30">
                <p className="text-2xl font-bold text-[#c9a227]">AED 475</p>
                <p className="text-slate-500 text-xs">You Keep</p>
              </div>
            </div>
            <p className="text-center text-slate-500 text-xs mt-4">
              * You only pay commission on Nuqta-verified sales. No customers = no fee.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-[#c9a227]/5 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Why Nuqta vs. Others?</h2>
            <p className="text-slate-400 max-w-xl mx-auto">We&apos;re not just another loyalty program</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-slate-400 font-medium py-4 px-4">Feature</th>
                  <th className="text-center text-[#c9a227] font-bold py-4 px-4">Nuqta</th>
                  <th className="text-center text-slate-400 font-medium py-4 px-4">Delivery Apps</th>
                  <th className="text-center text-slate-400 font-medium py-4 px-4">Traditional Loyalty</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { feature: 'Commission Rate', nuqta: '5-8%', others: '15-30%', traditional: '2-5%' },
                  { feature: 'Setup Cost', nuqta: 'AED 0', others: 'AED 0', traditional: 'AED 5,000+' },
                  { feature: 'POS Integration', nuqta: 'Not Required', others: 'Required', traditional: 'Required' },
                  { feature: 'Go-Live Time', nuqta: '24 Hours', others: '1-2 Weeks', traditional: '2-4 Weeks' },
                  { feature: 'Customer Data', nuqta: 'Full Access', others: 'Limited', traditional: 'Limited' },
                  { feature: 'Works Across UAE', nuqta: 'Yes', others: 'No', traditional: 'No' },
                  { feature: 'Minimum AOV', nuqta: 'AED 300+', others: 'Any', traditional: 'Any' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-white/5">
                    <td className="text-slate-300 py-4 px-4">{row.feature}</td>
                    <td className="text-center py-4 px-4">
                      <span className="text-[#c9a227] font-semibold">{row.nuqta}</span>
                    </td>
                    <td className="text-center text-slate-400 py-4 px-4">{row.others}</td>
                    <td className="text-center text-slate-400 py-4 px-4">{row.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What's the Catch - Objection Handling */}
      <section className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 rounded-full mb-4 border border-emerald-500/30">
            <Shield className="text-emerald-400" size={16} />
            <span className="text-emerald-400 text-sm font-medium">Full Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">&ldquo;What&apos;s the Catch?&rdquo;</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Fair questions you&apos;re probably thinking. Here are honest answers.</p>
        </div>

        <div className="space-y-4 mb-12">
          {[
            {
              question: '"5% commission on top of my costs?"',
              answer: "You're paying AED 5 per AED 100 of NEW high-value sales. These are tourists spending AED 300+ who might have walked past your booth. Without Nuqta, they'd browse and buy nothing, or spend AED 50 at 6 different stalls."
            },
            {
              question: '"What if they don\'t spend AED 300?"',
              answer: "Then their coins don't unlock and you pay zero commission. No risk at all. They might still buy something smaller, but you're not charged unless they hit the threshold."
            },
            {
              question: '"Do tourists actually use apps like this?"',
              answer: "Yes! Tourists love deals - that's why Entertainer works. Nuqta gives them free money (AED 30 coins) just for buying what they were already considering. Our activation rate is 73% among coin holders. They're motivated."
            },
            {
              question: '"How many visitors actually have Nuqta coins?"',
              answer: "We partner with the venue directly - every ticket holder gets coins loaded automatically. Last season, 2.3M GV visitors had Nuqta coins. Ask us for exact numbers for your venue."
            },
            {
              question: '"Do I need to verify every transaction?"',
              answer: "Yes, but it takes 2 seconds - just tap approve in your merchant app. We show you the amount claimed vs what you actually sold. You can also set up auto-approve for transactions under a certain amount."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <p className="text-white font-bold mb-2">{item.question}</p>
              <p className="text-slate-400 text-sm">{item.answer}</p>
            </div>
          ))}
        </div>

        {/* Still skeptical */}
        <div className="bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-2xl p-6 text-center">
          <p className="text-white">
            <span className="text-[#c9a227] font-bold">Still not sure?</span> We&apos;ll show you last season&apos;s data from merchants similar to you. If the math doesn&apos;t work for your booth type, we&apos;ll tell you honestly.
          </p>
        </div>
      </section>

      {/* Social Viral - Free Marketing */}
      <section className="bg-gradient-to-b from-pink-500/5 to-transparent py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/20 rounded-full mb-4 border border-pink-500/30">
              <Share2 className="text-pink-400" size={16} />
              <span className="text-pink-400 text-sm font-medium">Free Marketing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Customers <span className="text-pink-400">Promote You</span> for Free
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">Word-of-mouth marketing that actually works</p>
          </div>

          {/* Social sharing flow */}
          <div className="bg-white/5 backdrop-blur-xl border border-pink-500/20 rounded-3xl p-6 sm:p-8 mb-8">
            <h3 className="text-pink-400 font-bold text-center mb-6 text-lg">How Customers Spread the Word</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
              <div className="px-5 py-4 bg-white/5 rounded-xl border border-white/10 flex-1 max-w-[180px]">
                <Coins className="w-8 h-8 text-[#c9a227] mx-auto mb-2" />
                <p className="text-white font-bold text-sm">Earns Coins</p>
                <p className="text-slate-400 text-xs">At your booth</p>
              </div>
              <ArrowRight className="text-pink-400 hidden md:block" size={24} />
              <span className="text-pink-400 md:hidden text-xl">↓</span>
              <div className="px-5 py-4 bg-white/5 rounded-xl border border-white/10 flex-1 max-w-[180px]">
                <Share2 className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                <p className="text-white font-bold text-sm">Shares on Social</p>
                <p className="text-slate-400 text-xs">Instagram, WhatsApp</p>
              </div>
              <ArrowRight className="text-pink-400 hidden md:block" size={24} />
              <span className="text-pink-400 md:hidden text-xl">↓</span>
              <div className="px-5 py-4 bg-white/5 rounded-xl border border-white/10 flex-1 max-w-[180px]">
                <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-white font-bold text-sm">Friends See It</p>
                <p className="text-slate-400 text-xs">&ldquo;Where did you shop?&rdquo;</p>
              </div>
              <ArrowRight className="text-pink-400 hidden md:block" size={24} />
              <span className="text-pink-400 md:hidden text-xl">↓</span>
              <div className="px-5 py-4 bg-pink-500/20 rounded-xl border-2 border-pink-500 flex-1 max-w-[180px]">
                <Store className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                <p className="text-pink-400 font-bold text-sm">New Customers!</p>
                <p className="text-slate-400 text-xs">Zero ad spend</p>
              </div>
            </div>
          </div>

          {/* Channels */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { icon: Instagram, title: 'Instagram Stories', desc: 'Customers share their GV finds and tag your booth', color: 'pink' },
              { icon: MessageCircle, title: 'WhatsApp Groups', desc: '"Great deals at this pavilion!" spreads fast', color: 'emerald' },
              { icon: Send, title: 'Referral Bonus', desc: 'Customers earn extra coins for bringing friends', color: 'blue' }
            ].map((item, idx) => (
              <div key={idx} className={`bg-white/5 border rounded-xl p-5 text-center ${
                item.color === 'pink' ? 'border-pink-500/30' :
                item.color === 'emerald' ? 'border-emerald-500/30' :
                'border-blue-500/30'
              }`}>
                <item.icon className={`w-8 h-8 mx-auto mb-3 ${
                  item.color === 'pink' ? 'text-pink-400' :
                  item.color === 'emerald' ? 'text-emerald-400' :
                  'text-blue-400'
                }`} />
                <p className="text-white font-bold mb-1">{item.title}</p>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-2xl p-6 text-center">
            <div className="flex flex-wrap justify-center gap-6 mb-4">
              <div className="text-center">
                <p className="text-3xl font-black text-pink-400">23%</p>
                <p className="text-slate-400 text-xs">new customers from referrals</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-purple-400">AED 0</p>
                <p className="text-slate-400 text-xs">marketing cost</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-emerald-400">4.2x</p>
                <p className="text-slate-400 text-xs">higher lifetime value</p>
              </div>
            </div>
            <p className="text-white">
              <span className="text-pink-400 font-bold">Every happy customer is free advertising.</span> When they share savings, their friends discover YOUR booth.
            </p>
          </div>
        </div>
      </section>

      {/* Free Merchant OS */}
      <section className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 rounded-full mb-4 border border-cyan-500/30">
            <Settings className="text-cyan-400" size={16} />
            <span className="text-cyan-400 text-sm font-medium">Free Merchant OS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Your <span className="text-cyan-400">Complete Business</span> Toolkit
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">Everything to run & grow your business - included free</p>
        </div>

        {/* Branded Coins Highlight */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-[#c9a227]/20 to-orange-500/20 border-2 border-[#c9a227]/50 rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#c9a227]/30 flex items-center justify-center flex-shrink-0">
                <Coins className="w-8 h-8 text-[#c9a227]" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-[#c9a227] font-black text-xl mb-1">Your Branded Coins</h3>
                <p className="text-white">Customers earn <span className="text-[#c9a227] font-bold">&ldquo;[Your Booth] Coins&rdquo;</span> - not generic points. They see YOUR brand every time they check their balance, building loyalty to YOUR pavilion.</p>
              </div>
              <div className="text-center flex-shrink-0">
                <p className="text-3xl font-black text-emerald-400">+40%</p>
                <p className="text-slate-400 text-xs">Higher repeat rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Users, title: 'Customer Database', desc: 'Full CRM with profiles, preferences, history', color: 'cyan' },
            { icon: Bell, title: 'Campaign Manager', desc: 'Send SMS, push, email to your customers', color: 'pink' },
            { icon: Target, title: 'Location Targeting', desc: 'Reach customers when near your booth', color: 'emerald' },
            { icon: Gift, title: 'Offer Creator', desc: 'Create flash sales, specials, deals', color: 'purple' },
            { icon: BarChart3, title: 'Analytics Dashboard', desc: 'Track sales, retention, peak hours', color: 'blue' },
            { icon: FileText, title: 'Digital Receipts', desc: 'Customers get digital records automatically', color: 'orange' },
            { icon: Download, title: 'Data Export', desc: 'Export your customer data anytime', color: 'gold' },
            { icon: Lock, title: 'Data Ownership', desc: 'Your data stays yours - never shared', color: 'red' }
          ].map((item, idx) => (
            <div key={idx} className={`bg-white/5 backdrop-blur-xl border rounded-xl p-4 ${
              item.color === 'cyan' ? 'border-cyan-500/30' :
              item.color === 'pink' ? 'border-pink-500/30' :
              item.color === 'emerald' ? 'border-emerald-500/30' :
              item.color === 'purple' ? 'border-purple-500/30' :
              item.color === 'blue' ? 'border-blue-500/30' :
              item.color === 'orange' ? 'border-orange-500/30' :
              item.color === 'gold' ? 'border-[#c9a227]/30' :
              'border-red-500/30'
            }`}>
              <item.icon className={`w-8 h-8 mb-3 ${
                item.color === 'cyan' ? 'text-cyan-400' :
                item.color === 'pink' ? 'text-pink-400' :
                item.color === 'emerald' ? 'text-emerald-400' :
                item.color === 'purple' ? 'text-purple-400' :
                item.color === 'blue' ? 'text-blue-400' :
                item.color === 'orange' ? 'text-orange-400' :
                item.color === 'gold' ? 'text-[#c9a227]' :
                'text-red-400'
              }`} />
              <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
              <p className="text-slate-400 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Campaign examples */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
          <p className="text-[#c9a227] font-bold text-center mb-4">Campaign Examples You Can Send</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-sm">
            {[
              { type: 'Flash Sale', msg: '"Next 2 hours: 2x coins on all purchases!"' },
              { type: 'Win-Back', msg: '"We miss you! Visit today for bonus coins"' },
              { type: 'Post-GV', msg: '"Visit our Dubai Mall store for rewards!"' },
              { type: 'Location', msg: '"You\'re nearby! Pop in for your rewards"' }
            ].map((campaign, idx) => (
              <div key={idx} className="p-3 bg-white/5 rounded-xl">
                <p className="text-[#c9a227] font-bold text-xs mb-1">{campaign.type}</p>
                <p className="text-slate-400 text-xs italic">{campaign.msg}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key point */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border-2 border-cyan-500/30 rounded-2xl p-6 text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <div className="text-center">
              <p className="text-3xl font-black text-cyan-400">AED 0</p>
              <p className="text-slate-400 text-xs">Cost for all features</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-emerald-400">100%</p>
              <p className="text-slate-400 text-xs">Your data ownership</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-[#c9a227]">Unlimited</p>
              <p className="text-slate-400 text-xs">Campaigns per month</p>
            </div>
          </div>
          <p className="text-white text-lg">
            <span className="text-cyan-400 font-bold">Similar tools cost AED 500-2000/month.</span> With Nuqta, you get everything <span className="text-emerald-400 font-bold">completely free</span>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-to-b from-transparent via-[#c9a227]/5 to-transparent py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">More Questions</h2>
          </div>

          <div className="space-y-3">
            <FAQItem
              question="Do I need to change my POS system?"
              answer="No! Nuqta uses app-based transaction logging. Customers log their purchases in the Nuqta app, you verify via your merchant dashboard. No hardware, no software changes, no IT headaches."
            />
            <FAQItem
              question="How do customers find my store?"
              answer="Your store appears in the Nuqta app map, in the venue merchant directory, and in personalized recommendations. Premium merchants get featured placement and priority in search results."
            />
            <FAQItem
              question="Can I run my own promotions?"
              answer="Absolutely! Premium and Enterprise merchants can create custom offers, flash sales, and targeted promotions through the merchant dashboard. You control the discounts."
            />
            <FAQItem
              question="How do I see my sales data?"
              answer="Every merchant gets access to a real-time dashboard showing transactions, customer demographics, peak hours, and more. Premium merchants get advanced analytics and exportable reports."
            />
            <FAQItem
              question="What happens after the season ends?"
              answer="This is the best part! Nuqta works across all of UAE year-round. Every customer you acquire during GV season becomes a repeat customer at your permanent locations. They've already downloaded the app and linked to your store - they'll get notifications about your other branches and keep earning coins with you. GV is your customer acquisition engine for the whole year."
            />
            <FAQItem
              question="How do I get started?"
              answer="Simply contact us, sign the merchant agreement, and upload your store details. We'll have you live in the app within 24 hours. No setup fee, no long-term commitment."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="bg-gradient-to-b from-transparent via-[#c9a227]/5 to-transparent py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Trusted by Merchants</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Our average ticket size went from AED 150 to AED 350 after joining Nuqta. The ROI is incredible.",
                merchant: "India Pavilion Merchant",
                rating: 5
              },
              {
                quote: "No POS changes was the biggest win for us. We were live in hours, not weeks.",
                merchant: "Food & Beverage Vendor",
                rating: 5
              },
              {
                quote: "The real-time data helps us staff better and stock smarter. Game changer.",
                merchant: "Retail Shop Owner",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="text-[#c9a227] fill-[#c9a227]" size={16} />
                  ))}
                </div>
                <p className="text-slate-300 text-sm mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                <p className="text-[#c9a227] text-sm font-medium">— {testimonial.merchant}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Year-Round Value Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        <div className="bg-gradient-to-r from-emerald-500/10 to-[#c9a227]/10 rounded-3xl p-8 border-2 border-emerald-500/30">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 rounded-full mb-4 border border-emerald-500/30">
              <TrendingUp className="text-emerald-400" size={16} />
              <span className="text-emerald-400 text-sm font-medium">Beyond GV Season</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
              GV is Your <span className="text-emerald-400">Customer Acquisition Engine</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-3xl font-black text-[#c9a227]">7M+</p>
              <p className="text-slate-400 text-sm">GV Visitors This Season</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-3xl font-black text-emerald-400">365</p>
              <p className="text-slate-400 text-sm">Days of Repeat Visits</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-3xl font-black text-purple-400">500+</p>
              <p className="text-slate-400 text-sm">Partner Stores UAE-wide</p>
            </div>
          </div>

          <p className="text-slate-300 text-center">
            Every customer you acquire at GV downloads the app, links to your store, and becomes a <span className="text-emerald-400 font-bold">year-round repeat customer</span> at your permanent locations. GV season pays for itself in lifetime customer value.
          </p>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="max-w-4xl mx-auto px-4 pb-8">
        <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-6 border-2 border-red-500/30 text-center">
          <p className="text-white font-bold text-lg mb-2">
            <span className="text-red-400">Limited Partnership Spots</span> for GV 2024-25 Season
          </p>
          <p className="text-slate-400 text-sm mb-4">
            We only partner with select merchants per pavilion to ensure exclusivity and quality. Spots are filling fast.
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <div className="px-4 py-2 bg-white/10 rounded-full text-slate-300">
              <span className="text-red-400 font-bold">3 spots left</span> - Food & Beverage
            </div>
            <div className="px-4 py-2 bg-white/10 rounded-full text-slate-300">
              <span className="text-red-400 font-bold">5 spots left</span> - Retail & Souvenirs
            </div>
            <div className="px-4 py-2 bg-white/10 rounded-full text-slate-300">
              <span className="text-orange-400 font-bold">7 spots left</span> - Services
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
        <div className="bg-gradient-to-r from-[#c9a227]/20 via-[#c9a227]/10 to-[#c9a227]/20 rounded-3xl p-8 sm:p-12 border border-[#c9a227]/30 text-center">
          <Building2 className="text-[#c9a227] mx-auto mb-6" size={48} />
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            Join Nuqta today and start turning GV visitors into loyal, year-round customers.
            Zero risk, zero upfront cost.
          </p>

          {/* Onboarding Timeline */}
          <div className="grid grid-cols-4 gap-2 mb-8 max-w-lg mx-auto text-center">
            {[
              { day: 'Today', action: 'Quick Call', icon: '📞' },
              { day: 'Day 1', action: 'Setup', icon: '⚙️' },
              { day: 'Day 2', action: 'Go Live', icon: '🚀' },
              { day: 'Week 1', action: 'First Sales', icon: '💰' }
            ].map((step, idx) => (
              <div key={idx} className="p-2 bg-white/5 rounded-lg">
                <p className="text-xl mb-1">{step.icon}</p>
                <p className="text-[#c9a227] text-xs font-bold">{step.day}</p>
                <p className="text-slate-400 text-xs">{step.action}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a
              href="mailto:merchants@nuqtapp.com?subject=GV Partnership - Schedule Setup Call"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-full font-bold hover:bg-[#d4b03f] transition-colors"
            >
              <Mail size={18} />
              Schedule Setup Call
            </a>
            <a
              href="tel:+971503764345"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-colors"
            >
              <Phone size={18} />
              +971 50 376 4345
            </a>
          </div>

          <div className="flex flex-wrap gap-6 justify-center text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-400" size={16} />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-400" size={16} />
              <span>Live in 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-400" size={16} />
              <span>Pay only on success</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-slate-500 text-xs mb-4">Merchant Pitch Decks by Category</p>
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <a href="/deck-cafe" className="text-slate-400 text-sm hover:text-[#c9a227] transition-colors">
              Cafes & Restaurants →
            </a>
            <a href="/deck-salon" className="text-slate-400 text-sm hover:text-[#c9a227] transition-colors">
              Salons & Spas →
            </a>
            <a href="/deck-supermarket" className="text-slate-400 text-sm hover:text-[#c9a227] transition-colors">
              Supermarkets →
            </a>
            <a href="/deck-gold" className="text-slate-400 text-sm hover:text-[#c9a227] transition-colors">
              Gold & Jewelry →
            </a>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/deck-gv" className="text-slate-400 text-sm hover:text-[#c9a227] transition-colors">
              GV Partnership Deck →
            </a>
            <a href="/deck-merchant" className="text-slate-400 text-sm hover:text-[#c9a227] transition-colors">
              General Merchant Deck →
            </a>
            <a href="/data-room" className="text-slate-400 text-sm hover:text-[#c9a227] transition-colors">
              Data Room →
            </a>
          </div>
          <p className="text-center text-slate-600 text-xs mt-4">
            © 2026 Nuqta. The Everyday Savings Platform.
          </p>
        </div>
      </section>
    </div>
  );
};

export default GVMerchantInfo;
