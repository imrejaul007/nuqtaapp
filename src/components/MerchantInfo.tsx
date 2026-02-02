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
  Calculator,
  Star,
  ChevronDown,
  ChevronRight,
  Target,
  Repeat,
  Heart,
  CreditCard,
  FileText,
  AlertCircle,
  Percent
} from 'lucide-react';

/**
 * MERCHANT INFO PAGE (Engine A)
 * Benefits, packages, terms, and FAQ for everyday merchants
 * For restaurants, cafes, retail, services
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

const MerchantInfo = () => {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#c9a227]/20 via-[#c9a227]/10 to-transparent overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 rounded-full mb-6 border border-[#c9a227]/30">
              <Store className="text-[#c9a227]" size={16} />
              <span className="text-[#c9a227] text-sm font-medium">For Merchants</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
              Build Customer Loyalty<br />
              <span className="text-[#c9a227]">Without The Hassle</span>
            </h1>
            <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
              Get customers who come back again and again. Pay only when they do.
              Zero upfront cost. Zero tech changes.
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
              { value: 'AED 0', label: 'Upfront Cost' },
              { value: '5-8%', label: 'Commission Only' },
              { value: '3x', label: 'More Repeat Visits' },
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
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">How Nuqta Works</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Simple process, no tech headaches, instant results</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '1',
              icon: CreditCard,
              title: 'Customer Pays You',
              description: 'Customer makes a purchase at your store as normal. No changes to your checkout process.'
            },
            {
              step: '2',
              icon: Smartphone,
              title: 'They Log in Nuqta',
              description: 'Customer opens Nuqta app and logs their purchase. Takes just 10 seconds.'
            },
            {
              step: '3',
              icon: CheckCircle2,
              title: 'You Verify',
              description: 'You approve the transaction via your merchant dashboard. One tap.'
            },
            {
              step: '4',
              icon: Coins,
              title: 'They Earn & Return',
              description: 'Customer earns coins (5-10% back). They come back to spend them!'
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

        {/* App-based highlight */}
        <div className="mt-10 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <Shield className="w-7 h-7 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-1">No POS Integration Required</h4>
              <p className="text-slate-400 text-sm">
                Keep using your existing payment system. Customers log purchases in the Nuqta app, you verify via dashboard. Zero IT headaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gradient-to-b from-transparent via-[#c9a227]/5 to-transparent py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Why Join Nuqta?</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Real benefits for your business</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Repeat,
                title: '3x More Repeat Visits',
                description: 'Customers with Nuqta coins come back 3x more often than regular customers',
                highlight: '3x'
              },
              {
                icon: TrendingUp,
                title: '40% Higher Spend',
                description: 'Coin users spend 40% more per visit because they\'re incentivized to hit thresholds',
                highlight: '+40%'
              },
              {
                icon: Shield,
                title: 'Zero Upfront Cost',
                description: 'No setup fees, no subscription, no hardware. You only pay when you make money',
                highlight: 'AED 0'
              },
              {
                icon: Zap,
                title: 'No POS Changes',
                description: 'App-based transaction logging means zero changes to your existing systems',
                highlight: 'No Tech'
              },
              {
                icon: BarChart3,
                title: 'Real-Time Analytics',
                description: 'See exactly who shops at your store, how often, and what they spend',
                highlight: 'Live Data'
              },
              {
                icon: Users,
                title: '500K+ User Network',
                description: 'Tap into our growing user base. More users = more potential customers',
                highlight: '500K+'
              }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#c9a227]/30 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <benefit.icon className="text-[#c9a227]" size={28} />
                  <span className="px-3 py-1 bg-[#c9a227]/20 rounded-full text-[#c9a227] text-sm font-bold">{benefit.highlight}</span>
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
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Pay only on results. No upfront fees. No monthly subscription.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Standard */}
          <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
            <h3 className="text-white font-bold text-2xl mb-2">Standard</h3>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-5xl font-black text-white">5%</span>
              <span className="text-slate-400">commission</span>
            </div>
            <p className="text-slate-400 text-sm mb-6">On Nuqta-verified sales only</p>

            <ul className="space-y-3 mb-8">
              {[
                'Listed in Nuqta app',
                'Merchant dashboard access',
                'Basic analytics',
                'Customer profiles',
                'Email support'
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="text-emerald-400 flex-shrink-0" size={18} />
                  {feature}
                </li>
              ))}
            </ul>

            <a href="#contact" className="block w-full py-3 px-6 bg-white/10 text-white text-center rounded-full font-bold hover:bg-white/20 transition-colors">
              Get Started
            </a>
          </div>

          {/* Premium - Featured */}
          <div className="bg-gradient-to-b from-[#c9a227]/20 to-[#c9a227]/5 rounded-3xl p-8 border-2 border-[#c9a227] relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-[#c9a227] text-[#0a1628] text-sm font-bold rounded-full">
              MOST POPULAR
            </div>
            <h3 className="text-[#c9a227] font-bold text-2xl mb-2">Premium</h3>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-5xl font-black text-white">6%</span>
              <span className="text-slate-400">commission</span>
            </div>
            <p className="text-slate-400 text-sm mb-6">On Nuqta-verified sales only</p>

            <ul className="space-y-3 mb-8">
              {[
                'Everything in Standard',
                'Featured placement in app',
                'Priority in search results',
                'Custom promotions & campaigns',
                'Advanced analytics',
                'Dedicated account manager'
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="text-[#c9a227] flex-shrink-0" size={18} />
                  {feature}
                </li>
              ))}
            </ul>

            <a href="#contact" className="block w-full py-3 px-6 bg-[#c9a227] text-[#0a1628] text-center rounded-full font-bold hover:bg-[#d4b03f] transition-colors">
              Get Started
            </a>
          </div>

          {/* Enterprise */}
          <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
            <h3 className="text-white font-bold text-2xl mb-2">Enterprise</h3>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-5xl font-black text-white">Custom</span>
            </div>
            <p className="text-slate-400 text-sm mb-6">For multi-location businesses</p>

            <ul className="space-y-3 mb-8">
              {[
                'Everything in Premium',
                'Volume discounts',
                'Multi-location management',
                'API access',
                'White-label options',
                'Custom integrations'
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="text-emerald-400 flex-shrink-0" size={18} />
                  {feature}
                </li>
              ))}
            </ul>

            <a href="#contact" className="block w-full py-3 px-6 bg-white/10 text-white text-center rounded-full font-bold hover:bg-white/20 transition-colors">
              Contact Us
            </a>
          </div>
        </div>

        {/* Key terms */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <FileText className="text-[#c9a227]" size={20} />
            Key Terms
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Contract Length', value: 'No lock-in', desc: 'Cancel anytime' },
              { label: 'Commission Basis', value: 'Sales only', desc: 'Pay only on results' },
              { label: 'Payment Terms', value: 'Monthly', desc: 'Invoice at month end' },
              { label: 'Onboarding', value: 'Free', desc: 'We set everything up' }
            ].map((term, idx) => (
              <div key={idx} className="p-4 bg-white/5 rounded-xl">
                <p className="text-slate-400 text-xs mb-1">{term.label}</p>
                <p className="text-white font-bold">{term.value}</p>
                <p className="text-emerald-400 text-xs">{term.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="bg-gradient-to-r from-emerald-500/10 to-[#c9a227]/10 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">See Your Potential</h2>
            <p className="text-slate-400">Example: Average Restaurant</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8">
            <div className="grid sm:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Avg Order Value', value: 'AED 80' },
                { label: 'Monthly Nuqta Customers', value: '150' },
                { label: 'Repeat Rate', value: '3x' },
                { label: 'Commission', value: '6%' }
              ].map((item, idx) => (
                <div key={idx} className="text-center p-4 bg-white/5 rounded-xl">
                  <p className="text-slate-400 text-xs mb-1">{item.label}</p>
                  <p className="text-xl font-black text-white">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-6 bg-white/5 rounded-xl text-center">
                <p className="text-slate-400 text-sm mb-1">Monthly Nuqta Revenue</p>
                <p className="text-3xl font-black text-emerald-400">AED 36,000</p>
                <p className="text-slate-500 text-xs">150 × AED 80 × 3 visits</p>
              </div>
              <div className="p-6 bg-white/5 rounded-xl text-center">
                <p className="text-slate-400 text-sm mb-1">Commission Paid</p>
                <p className="text-3xl font-black text-white">AED 2,160</p>
                <p className="text-slate-500 text-xs">6% of revenue</p>
              </div>
              <div className="p-6 bg-[#c9a227]/20 rounded-xl text-center border border-[#c9a227]/30">
                <p className="text-slate-400 text-sm mb-1">Net New Revenue</p>
                <p className="text-3xl font-black text-[#c9a227]">AED 33,840</p>
                <p className="text-slate-500 text-xs">Revenue you wouldn&apos;t have</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#c9a227]/10 rounded-xl text-center">
              <p className="text-white">
                <span className="text-[#c9a227] font-bold">17x ROI:</span> Pay AED 2,160 to generate AED 36,000 in loyal customer revenue
              </p>
            </div>
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
            answer="You only pay commission on Nuqta-verified sales. We send you a monthly invoice based on transactions verified through your dashboard. If no customers come through Nuqta, you pay nothing."
          />
          <FAQItem
            question="How do customers find my store?"
            answer="Your store appears in the Nuqta app based on location, category, and user preferences. Premium merchants get featured placement and priority in search results, driving more visibility."
          />
          <FAQItem
            question="What if a customer doesn't log their purchase?"
            answer="If a customer doesn't log their purchase in the app, you don't owe any commission - and they don't earn coins. The system only tracks and charges for verified Nuqta transactions."
          />
          <FAQItem
            question="Can I run promotions or special offers?"
            answer="Yes! Premium and Enterprise merchants can create custom promotions, bonus coin events, and targeted campaigns. This is a great way to bring customers back during slow periods."
          />
          <FAQItem
            question="How long does onboarding take?"
            answer="Most merchants go live within 24 hours. We handle all the setup - you just need to provide your business details and logo. No technical work required on your end."
          />
          <FAQItem
            question="Is there a minimum commitment?"
            answer="No. There's no contract lock-in. You can cancel at any time. We believe in earning your business every month."
          />
          <FAQItem
            question="What categories of merchants can join?"
            answer="We work with restaurants, cafes, retail stores, salons, gyms, entertainment venues, and service businesses. If you have repeat customers, Nuqta can help you keep them coming back."
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gradient-to-b from-transparent to-[#c9a227]/10 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white/5 backdrop-blur-xl border-2 border-[#c9a227]/30 rounded-3xl p-8 sm:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-[#c9a227]/20 flex items-center justify-center mx-auto mb-6">
              <Store className="w-8 h-8 text-[#c9a227]" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Ready to Build Customer Loyalty?
            </h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
              Join hundreds of UAE merchants who are turning one-time visitors into loyal regulars.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="mailto:merchants@nuqtapp.com"
                className="flex items-center justify-center gap-2 px-6 py-4 bg-[#c9a227] text-[#0a1628] rounded-full font-bold hover:bg-[#d4b03f] transition-colors"
              >
                <Mail size={20} />
                merchants@nuqtapp.com
              </a>
              <a
                href="tel:+971503764345"
                className="flex items-center justify-center gap-2 px-6 py-4 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-colors"
              >
                <Phone size={20} />
                +971 50 376 4345
              </a>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              {['Zero upfront cost', 'Go live in 24 hours', 'Cancel anytime', 'No POS changes'].map((item, idx) => (
                <span key={idx} className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer spacer for GlobalFooter */}
      <div className="h-32" />
    </div>
  );
};

export default MerchantInfo;
