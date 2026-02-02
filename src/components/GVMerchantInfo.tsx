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
  ChevronRight
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

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          <FAQItem
            question="Do I need to change my POS system?"
            answer="No! Nuqta uses app-based transaction logging, not POS integration. Customers log their purchases in the Nuqta app, and you verify via your merchant dashboard. No hardware, no software changes, no IT headaches."
          />
          <FAQItem
            question="When do I pay the commission?"
            answer="You only pay commission on Nuqta-verified sales. We send you a monthly invoice based on transactions logged through the Nuqta app. If no customers come through Nuqta, you pay nothing."
          />
          <FAQItem
            question="How do customers find my store?"
            answer="Your store appears in the Nuqta app map, in the GV merchant directory, and in personalized recommendations. Premium merchants get featured placement and priority in search results."
          />
          <FAQItem
            question="What if a customer spends less than AED 300?"
            answer="No problem! They can still shop, but their GV Coins won&apos;t unlock. Many customers combine multiple purchases or return later to hit the threshold. You still benefit from the foot traffic."
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
            question="What happens after GV season ends?"
            answer="Nuqta works across all of UAE, not just Global Village! Your customers can continue earning and spending Nuqta coins at your other locations (if any) or at partner merchants year-round."
          />
          <FAQItem
            question="How do I get started?"
            answer="Simply contact us, sign the merchant agreement, and upload your store details. We&apos;ll have you live in the app within 24 hours. No setup fee, no commitment beyond the season."
          />
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

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
        <div className="bg-gradient-to-r from-[#c9a227]/20 via-[#c9a227]/10 to-[#c9a227]/20 rounded-3xl p-8 sm:p-12 border border-[#c9a227]/30 text-center">
          <Building2 className="text-[#c9a227] mx-auto mb-6" size={48} />
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            Join Nuqta today and start turning GV visitors into loyal customers.
            Zero risk, zero upfront cost.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a
              href="mailto:rejaul@nuqtapp.com?subject=GV Merchant Partnership"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-full font-bold hover:bg-[#d4b03f] transition-colors"
            >
              <Mail size={18} />
              Contact Us
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
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/deck-gv" className="text-slate-400 text-sm hover:text-[#c9a227] transition-colors">
              GV Partnership Deck →
            </a>
            <a href="/data-room" className="text-slate-400 text-sm hover:text-[#c9a227] transition-colors">
              Data Room →
            </a>
            <a href="/gv-playbook" className="text-slate-400 text-sm hover:text-[#c9a227] transition-colors">
              Sales Playbook →
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
