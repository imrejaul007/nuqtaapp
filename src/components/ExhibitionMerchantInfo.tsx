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
  Calculator,
  Star,
  ChevronDown,
  ChevronRight,
  Calendar,
  Timer,
  Target,
  Award
} from 'lucide-react';

/**
 * EXHIBITION MERCHANT INFO PAGE
 * Benefits, packages, and information for exhibition/event merchants
 * For short-term events (5-7 days) without ticket integration
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

const ExhibitionMerchantInfo = () => {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#c9a227]/20 via-[#c9a227]/10 to-transparent overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 rounded-full mb-6 border border-[#c9a227]/30">
              <Calendar className="text-[#c9a227]" size={16} />
              <span className="text-[#c9a227] text-sm font-medium">For Exhibition & Event Merchants</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
              Turn Browsers Into<br />
              <span className="text-[#c9a227]">AED 500+ Buyers</span>
            </h1>
            <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
              Join Nuqta at your next exhibition and get guaranteed high-value customers -
              without any upfront cost or tech changes.
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
              { value: 'AED 500+', label: 'Minimum Customer Spend' },
              { value: 'AED 100', label: 'Event Coins (per event!)' },
              { value: '0', label: 'Upfront Cost' },
              { value: '5-7 Days', label: 'Event Duration' },
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
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">How Nuqta Works At Events</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Simple process, no tech headaches, instant results</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '1',
              icon: Users,
              title: 'Visitor Registers for Event',
              description: 'At the Nuqta booth, ALL visitors (new AND existing users) get AED 100 Event Coins per event!'
            },
            {
              step: '2',
              icon: Store,
              title: 'They Visit Your Booth',
              description: 'Visitors are motivated to spend AED 500+ to unlock their free coins'
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
              description: 'Customer gets their coins, you get a high-value customer'
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

        {/* Key difference from GV */}
        <div className="mt-10 bg-purple-500/10 border border-purple-500/30 rounded-2xl p-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
              <Timer className="w-7 h-7 text-purple-400" />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-1">Short-Term Events = Higher Urgency</h4>
              <p className="text-slate-400 text-sm">
                Coins expire when the event ends. Visitors must spend AED 500+ during the event to unlock their AED 100 - creating immediate purchase urgency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gradient-to-b from-transparent via-[#c9a227]/5 to-transparent py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Why Nuqta At Your Next Event?</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Real benefits for short-term exhibitions</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: '5x Higher AOV',
                description: 'Typical exhibition purchase is AED 50-100. With Nuqta, it\'s AED 500+ minimum',
                highlight: '+400% AOV'
              },
              {
                icon: Target,
                title: 'Guaranteed Intent',
                description: 'Every Nuqta user at your booth is pre-motivated to spend AED 500+',
                highlight: '100% Intent'
              },
              {
                icon: Shield,
                title: 'Zero Upfront Cost',
                description: 'No booth fees for joining. You only pay commission on Nuqta-driven sales',
                highlight: 'AED 0'
              },
              {
                icon: Zap,
                title: 'No POS Integration',
                description: 'App-based transaction logging means zero changes to your setup',
                highlight: 'No Tech Hassle'
              },
              {
                icon: BarChart3,
                title: 'Real-Time Dashboard',
                description: 'See exactly who shops, how much they spend, and when - during the event',
                highlight: 'Live Data'
              },
              {
                icon: Gift,
                title: 'UAE-Wide Network',
                description: 'Event visitors become your customers beyond the exhibition too',
                highlight: 'Long-Term Value'
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
          <p className="text-slate-400 max-w-xl mx-auto">Same standard Nuqta terms. Pay only when you make money.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Standard Package */}
          <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
            <div className="p-6">
              <h3 className="text-white font-bold text-xl mb-2">Standard</h3>
              <p className="text-slate-400 text-sm mb-4">For most event exhibitors</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black text-white">5%</span>
                <span className="text-slate-400 text-sm">commission</span>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  'Pay only on Nuqta-driven sales',
                  'Real-time dashboard access',
                  'Customer insights',
                  'Event app listing',
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
              <p className="text-slate-400 text-sm mb-4">For high-volume booths</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black text-white">6%</span>
                <span className="text-slate-400 text-sm">commission</span>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  'Everything in Standard',
                  'Featured placement in app',
                  'Priority customer matching',
                  'Custom promotions',
                  'Dedicated support',
                  'Post-event analytics'
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
              <p className="text-slate-400 text-sm mb-4">For multi-booth operators</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black text-white">Custom</span>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  'Everything in Premium',
                  'Volume discounts',
                  'Multi-booth management',
                  'White-label options',
                  'API access'
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
              At 5% commission, if Nuqta brings you a customer who spends AED 600:
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-[#0a1628] rounded-xl p-4">
                <p className="text-2xl font-bold text-white">AED 600</p>
                <p className="text-slate-500 text-xs">Customer Spend</p>
              </div>
              <div className="bg-[#0a1628] rounded-xl p-4">
                <p className="text-2xl font-bold text-red-400">-AED 30</p>
                <p className="text-slate-500 text-xs">Nuqta Fee (5%)</p>
              </div>
              <div className="bg-[#c9a227]/20 rounded-xl p-4 border border-[#c9a227]/30">
                <p className="text-2xl font-bold text-[#c9a227]">AED 570</p>
                <p className="text-slate-500 text-xs">You Keep</p>
              </div>
            </div>
            <p className="text-center text-slate-500 text-xs mt-4">
              * Compare to a typical AED 50 impulse buy with no commission = AED 50. Nuqta nets you 11x more.
            </p>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="bg-[#c9a227]/5 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Events We Support</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Nuqta works for any short-term exhibition or event</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Trade Shows', icon: Building2 },
              { name: 'Book Fairs', icon: Award },
              { name: 'Food Festivals', icon: Store },
              { name: 'Art Exhibitions', icon: Star },
              { name: 'Night Markets', icon: Clock },
              { name: 'Pop-up Events', icon: Zap }
            ].map((event, idx) => (
              <div key={idx} className="bg-white/5 rounded-xl p-4 text-center border border-white/10 hover:border-[#c9a227]/30 transition-all">
                <event.icon className="text-[#c9a227] mx-auto mb-2" size={24} />
                <p className="text-white text-sm font-medium">{event.name}</p>
              </div>
            ))}
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
            question="How is this different from Global Village?"
            answer="For exhibitions without tickets, visitors get AED 100 Event Coins just for downloading the Nuqta app at our booth. They need to spend AED 500+ (vs AED 300 at GV) to unlock the coins. Coins expire at event end, creating urgency to spend during the short event duration."
          />
          <FAQItem
            question="What if my event is only 3 days?"
            answer="Nuqta works for any event duration - even single-day events. The coins simply expire when your event ends. Shorter events often see higher conversion because of increased urgency."
          />
          <FAQItem
            question="Do I need to change my POS system?"
            answer="No! Nuqta uses app-based transaction logging. Customers log their purchases in the Nuqta app, and you verify via your merchant dashboard. No hardware, no software changes."
          />
          <FAQItem
            question="When do I pay the commission?"
            answer="After the event ends, we send you an invoice based on Nuqta-verified transactions. Payment terms are 30 days. If no customers come through Nuqta, you pay nothing."
          />
          <FAQItem
            question="What if the AED 500 minimum is too high for my products?"
            answer="The AED 500 threshold is designed for higher-value purchases. If your average product is AED 50, customers can combine multiple items or save up multiple purchases to hit the threshold. This actually increases your total sale value."
          />
          <FAQItem
            question="Can I participate in multiple events?"
            answer="Absolutely! Once you're a Nuqta merchant, you can participate in any Nuqta-partnered event. Your dashboard works across all events."
          />
          <FAQItem
            question="What support do I get during the event?"
            answer="We provide real-time support via WhatsApp and phone during event hours. Premium merchants get a dedicated support contact."
          />
          <FAQItem
            question="How quickly can I get set up?"
            answer="If your event is coming up soon, we can get you live within 24-48 hours. Just contact us and we'll expedite your onboarding."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
        <div className="bg-gradient-to-r from-[#c9a227]/20 via-[#c9a227]/10 to-[#c9a227]/20 rounded-3xl p-8 sm:p-12 border border-[#c9a227]/30 text-center">
          <Calendar className="text-[#c9a227] mx-auto mb-6" size={48} />
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Got an Event Coming Up?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            Join Nuqta and turn your booth browsers into AED 500+ buyers.
            Zero risk, zero upfront cost.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a
              href="mailto:rejaul@nuqtapp.com?subject=Exhibition Merchant Partnership"
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
              <span>Live in 24-48 hours</span>
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
            <a href="/deck-exhibition" className="text-slate-400 text-sm hover:text-[#c9a227] transition-colors">
              Exhibition Partnership Deck →
            </a>
            <a href="/gv-merchants" className="text-slate-400 text-sm hover:text-[#c9a227] transition-colors">
              GV Merchant Info →
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

export default ExhibitionMerchantInfo;
