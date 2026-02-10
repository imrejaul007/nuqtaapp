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
  BarChart3,
  Calculator,
  ArrowLeft,
  Sparkles,
  UserCheck,
  Monitor,
  Camera,
  Megaphone,
  MapPin,
  Gift,
  Percent,
  Store,
  Shirt,
  Truck,
  Home,
  Timer
} from 'lucide-react';

/**
 * LAUNDRY & DRY CLEANING SALES PLAYBOOK
 * Complete sales guide for laundry service merchant acquisition
 *
 * Industry: Laundry, Dry Cleaning, Alterations, Shoe Repair
 * Engine: B (Medium Margin 30-45%)
 * Commission: 10-15%
 *
 * UAE Market Stats:
 * - Laundry market size UAE: $400M+
 * - 2,000+ laundries in Dubai
 * - Average laundry spend: AED 100-300/visit
 * - Weekly frequency for most households
 * - High competition from app-based services
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
          <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center">
            <Icon className="text-sky-400" size={20} />
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

const LaundryPlaybook = () => {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Header */}
      <div className="bg-gradient-to-b from-sky-500/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
          <Link href="/merchant-playbook" className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-400 mb-6 transition-colors">
            <ArrowLeft size={20} />
            <span>All Playbooks</span>
          </Link>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/20 rounded-full mb-6">
              <Shirt className="text-sky-400" size={16} />
              <span className="text-sky-400 text-sm font-medium">Engine B • Medium Margin</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              <span className="text-sky-400">Laundry & Dry Cleaning</span> Sales Playbook
            </h1>
            <p className="text-slate-400 text-lg">Complete guide to signing laundry service merchants</p>
            <p className="text-slate-500 text-sm mt-2">From Cold Outreach to Signed Contract</p>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'UAE Market', value: '$400M+', color: 'sky' },
            { label: 'Dubai Laundries', value: '2,000+', color: 'cyan' },
            { label: 'Commission', value: '10-15%', color: 'emerald' },
            { label: 'Avg Order', value: 'AED 150', color: 'amber' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
              <p className="text-sky-400 text-xl font-black">{stat.value}</p>
              <p className="text-slate-400 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-32">

        {/* Part 1: Industry Overview */}
        <div className="mb-8">
          <h2 className="text-sky-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-sky-500 text-[#0a1628] flex items-center justify-center text-xs font-black">1</span>
            Industry Overview
          </h2>

          <CollapsibleSection title="Laundry Market in UAE" icon={BarChart3} defaultOpen={true}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'UAE Market', value: '$400M+' },
                  { label: 'Laundries', value: '2,000+' },
                  { label: 'Dry Cleaners', value: '800+' },
                  { label: 'App Services', value: '15+' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                    <p className="text-sky-400 text-lg font-bold">{stat.value}</p>
                    <p className="text-slate-400 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                <h4 className="text-red-400 font-semibold mb-2">🇦🇪 GCC-Specific Pain Points</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• <strong className="text-red-300">Washmen/Laundryheap taking 20-30%</strong> commission AND stealing customers</li>
                  <li>• <strong className="text-red-300">2,000+ laundries in Dubai</strong> - one on every street corner</li>
                  <li>• <strong className="text-red-300">Zero differentiation</strong> - customers see laundry as commodity</li>
                  <li>• <strong className="text-red-300">Price war to the bottom</strong> - AED 2/piece undercutting margins</li>
                  <li>• <strong className="text-red-300">Summer exodus</strong> - 30-40% revenue drop as residents travel</li>
                  <li>• <strong className="text-red-300">Premium dry cleaning underutilized</strong> - kandura, abaya services sit empty</li>
                  <li>• <strong className="text-red-300">Cash transactions = no data</strong> - can&apos;t track or retarget customers</li>
                  <li>• <strong className="text-red-300">Convenience is king</strong> - customers switch for pickup/delivery</li>
                  <li>• <strong className="text-red-300">Building contracts under threat</strong> - apps targeting residential towers</li>
                  <li>• <strong className="text-red-300">Staff quality inconsistent</strong> - workers damage garments, lose customers</li>
                </ul>
              </div>

              <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                <h4 className="text-emerald-400 font-semibold mb-2">✨ How Nuqta Solves Each Pain Point</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• <strong className="text-red-300">Washmen takes 20-30%?</strong> → <strong className="text-emerald-300">Only 10-15% commission</strong> AND you keep the customer relationship</li>
                  <li>• <strong className="text-red-300">2,000+ laundries competing?</strong> → <strong className="text-emerald-300">Stand out with rewards</strong> - be the laundry where customers earn coins</li>
                  <li>• <strong className="text-red-300">Zero differentiation?</strong> → <strong className="text-emerald-300">Coins ARE the differentiator</strong> - commodity becomes rewarding experience</li>
                  <li>• <strong className="text-red-300">Price war to bottom?</strong> → <strong className="text-emerald-300">Compete on value, not price</strong> - cashback makes you effectively cheaper</li>
                  <li>• <strong className="text-red-300">Summer 30-40% drop?</strong> → <strong className="text-emerald-300">Double coins campaigns</strong> - keep remaining residents coming</li>
                  <li>• <strong className="text-red-300">Premium services empty?</strong> → <strong className="text-emerald-300">Bonus coins on kandura/abaya</strong> - incentivize premium upgrade</li>
                  <li>• <strong className="text-red-300">Cash = no data?</strong> → <strong className="text-emerald-300">QR scan captures everything</strong> - build database from every transaction</li>
                  <li>• <strong className="text-red-300">Customers switch for pickup?</strong> → <strong className="text-emerald-300">Coins create switching cost</strong> - they don&apos;t leave earned rewards</li>
                  <li>• <strong className="text-red-300">Building contracts threatened?</strong> → <strong className="text-emerald-300">Residents prefer your laundry</strong> - rewards beat app convenience</li>
                  <li>• <strong className="text-red-300">Staff damage garments?</strong> → <strong className="text-emerald-300">Quality differentiation</strong> - rewards + reviews build reputation</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 2: Target Sub-Categories */}
        <div className="mb-8">
          <h2 className="text-sky-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-sky-500 text-[#0a1628] flex items-center justify-center text-xs font-black">2</span>
            Target Sub-Categories
          </h2>

          <CollapsibleSection title="Laundry Service Segments" icon={Shirt}>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: 'Regular Laundry', icon: Shirt, count: '1,500+', avgSpend: 'AED 80-150', frequency: 'Weekly' },
                { name: 'Dry Cleaning', icon: Sparkles, count: '800+', avgSpend: 'AED 150-400', frequency: '2-4x/month' },
                { name: 'Express Service', icon: Timer, count: '500+', avgSpend: 'AED 120-200', frequency: 'As needed' },
                { name: 'Pickup & Delivery', icon: Truck, count: '300+', avgSpend: 'AED 150-300', frequency: 'Weekly' },
                { name: 'Alterations', icon: Shirt, count: '400+', avgSpend: 'AED 50-200', frequency: 'Monthly' },
                { name: 'Shoe Repair', icon: Sparkles, count: '200+', avgSpend: 'AED 50-150', frequency: 'Quarterly' },
              ].map((segment, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <segment.icon className="text-sky-400" size={20} />
                    <span className="text-white font-semibold">{segment.name}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <p className="text-slate-500">Count</p>
                      <p className="text-slate-300 font-medium">{segment.count}</p>
                    </div>
                    <div>
                      <p className="text-slate-500">Avg Spend</p>
                      <p className="text-slate-300 font-medium">{segment.avgSpend}</p>
                    </div>
                    <div>
                      <p className="text-slate-500">Frequency</p>
                      <p className="text-sky-400 font-medium">{segment.frequency}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 3: Nuqta Service Packages */}
        <div className="mb-8">
          <h2 className="text-sky-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-sky-500 text-[#0a1628] flex items-center justify-center text-xs font-black">3</span>
            Nuqta Service Packages
          </h2>

          <CollapsibleSection title="What Laundries Get" icon={Gift}>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Customer Loyalty', desc: 'Coins on every laundry order - regular and dry clean', icon: Gift },
                { title: 'App Competition Defense', desc: 'Keep customers loyal vs Washmen, Laundryheap', icon: Shield },
                { title: 'Dry Clean Upsells', desc: 'Bonus coins drive premium service adoption', icon: Sparkles },
                { title: 'Customer Database', desc: 'Track preferences even from cash customers', icon: Users },
                { title: 'Service Add-ons', desc: 'Promote alterations, shoe repair with coins', icon: Shirt },
                { title: 'Pickup Scheduling', desc: 'Reminder notifications for regular pickups', icon: Clock },
                { title: 'Referral Program', desc: 'Customers refer neighbors and colleagues', icon: UserCheck },
                { title: 'Summer Campaigns', desc: 'Drive traffic during slow travel months', icon: Calendar },
              ].map((feature, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10 flex gap-3">
                  <feature.icon className="text-sky-400 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-white font-medium">{feature.title}</p>
                    <p className="text-slate-400 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 4: The 60-Second Pitch */}
        <div className="mb-8">
          <h2 className="text-sky-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-sky-500 text-[#0a1628] flex items-center justify-center text-xs font-black">4</span>
            The 60-Second Pitch
          </h2>

          <CollapsibleSection title="Perfect Pitch Script" icon={MessageSquare}>
            <div className="bg-gradient-to-r from-sky-500/10 to-cyan-500/10 rounded-xl p-6 border border-sky-500/30">
              <div className="space-y-4 text-slate-300">
                <p><span className="text-sky-400 font-bold">HOOK:</span> &quot;How many of your regular customers have you lost to laundry apps like Washmen?&quot;</p>

                <p><span className="text-sky-400 font-bold">PROBLEM:</span> &quot;Laundry apps are taking your best customers. They offer convenience, but you offer quality and personal service. The problem is - customers don&apos;t have a reason to stay loyal when switching is so easy.&quot;</p>

                <p><span className="text-sky-400 font-bold">SOLUTION:</span> &quot;Nuqta gives customers a reason to stick with you. They earn coins on every order, so switching to an app means losing their rewards. Plus, we help you upsell dry cleaning and add-on services.&quot;</p>

                <p><span className="text-sky-400 font-bold">PROOF:</span> &quot;Laundries on Nuqta see 35% reduction in customer churn and 25% increase in dry cleaning orders.&quot;</p>

                <p><span className="text-sky-400 font-bold">ASK:</span> &quot;Can I show you how it works? Just takes a QR code at your counter.&quot;</p>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 5: ROI Calculator */}
        <div className="mb-8">
          <h2 className="text-sky-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-sky-500 text-[#0a1628] flex items-center justify-center text-xs font-black">5</span>
            ROI Calculator
          </h2>

          <CollapsibleSection title="Financial Impact Example" icon={Calculator}>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-white font-semibold mb-3">Example: Laundry with 200 Regular Customers</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Average weekly spend per customer:</span>
                    <span className="text-white">AED 120</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Current annual churn rate:</span>
                    <span className="text-white">30% (60 customers)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Churn reduction with Nuqta (35%):</span>
                    <span className="text-emerald-400">21 customers retained</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Retained revenue (21 × AED 120 × 52):</span>
                    <span className="text-emerald-400 font-bold">+AED 131,040/year</span>
                  </div>
                  <div className="flex justify-between border-t border-white/10 pt-2">
                    <span className="text-slate-400">Dry cleaning upsell increase (25%):</span>
                    <span className="text-emerald-400">+AED 30,000/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Nuqta commission (12%):</span>
                    <span className="text-amber-400">-AED 19,325</span>
                  </div>
                  <div className="flex justify-between bg-emerald-500/20 p-2 rounded-lg">
                    <span className="text-emerald-400 font-bold">Net profit increase/year:</span>
                    <span className="text-emerald-400 font-bold">AED 141,715</span>
                  </div>
                </div>
              </div>

              <div className="bg-sky-500/10 rounded-xl p-4 border border-sky-500/20">
                <p className="text-sky-400 font-semibold">Key Insight:</p>
                <p className="text-slate-300 text-sm">A loyal laundry customer is worth AED 6,240/year (AED 120 × 52 weeks). Losing them to a laundry app costs you that entire amount. Retention is everything.</p>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 6: Objection Handling */}
        <div className="mb-8">
          <h2 className="text-sky-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-sky-500 text-[#0a1628] flex items-center justify-center text-xs font-black">6</span>
            Objection Handling
          </h2>

          <CollapsibleSection title="Common Objections & Responses" icon={Shield}>
            <div className="space-y-3">
              {[
                { objection: 'My customers are loyal, they won\'t switch', response: 'Laundry apps are growing 30% yearly. They\'re targeting YOUR customers with convenience. Loyalty rewards give them a reason to stay.' },
                { objection: 'Laundry margins are too thin for commissions', response: 'We charge 10-15%, only on incremental business. Preventing one customer from churning pays for hundreds of transactions.' },
                { objection: 'We already have punch cards', response: 'Punch cards have 70% abandonment. Digital loyalty in their phone is always there, always reminding them.' },
                { objection: 'Apps have pickup/delivery, I can\'t compete', response: 'You compete on quality and trust. People worry about their clothes. Nuqta rewards them for choosing the trusted local option.' },
                { objection: 'Summer is slow, nothing can help', response: 'Summer campaigns with bonus coins for staying loyal. "Earn double while your neighbors are traveling" type promotions.' },
                { objection: 'Dry cleaning customers are different', response: 'Even better! Dry clean customers have higher margins. Nuqta helps upsell regular laundry customers to dry cleaning.' },
                { objection: 'We\'re a small family business', response: 'Perfect! Small businesses build on relationships. Nuqta strengthens those relationships with tangible rewards.' },
                { objection: 'My staff won\'t use another system', response: 'One QR code. Customer scans, done. 2-minute training. We provide everything.' },
                { objection: 'Do alterations count?', response: 'Everything counts! Alterations, shoe repair, dry cleaning, regular laundry - all earn coins. Cross-sell heaven.' },
                { objection: 'What about corporate accounts?', response: 'Corporate accounts can still earn coins. Builds loyalty with the office manager who decides where to send company laundry.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-red-400 font-medium mb-2">&quot;{item.objection}&quot;</p>
                  <p className="text-slate-300 text-sm">→ {item.response}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 7: Competitor Landscape */}
        <div className="mb-8">
          <h2 className="text-sky-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-sky-500 text-[#0a1628] flex items-center justify-center text-xs font-black">7</span>
            Competitor Landscape
          </h2>

          <CollapsibleSection title="What Laundries Use Today" icon={Target}>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: 'Laundry Apps (Washmen, etc.)', weakness: 'Take 20-30% commission, steal customers', nuqtaAdvantage: 'Keep your customers loyal to YOU' },
                  { name: 'Punch Cards', weakness: 'Lost, forgotten, messy', nuqtaAdvantage: 'Digital tracking, never lost' },
                  { name: 'WhatsApp Reminders', weakness: 'Manual, not scalable', nuqtaAdvantage: 'Automatic visit reminders' },
                  { name: 'Door Flyers', weakness: 'Low conversion, wasteful', nuqtaAdvantage: 'Target nearby residents digitally' },
                ].map((comp, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-white font-semibold mb-1">{comp.name}</p>
                    <p className="text-red-400 text-xs mb-2">Weakness: {comp.weakness}</p>
                    <p className="text-emerald-400 text-xs">Our Edge: {comp.nuqtaAdvantage}</p>
                  </div>
                ))}
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 8: Discovery Questions */}
        <div className="mb-8">
          <h2 className="text-sky-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-sky-500 text-[#0a1628] flex items-center justify-center text-xs font-black">8</span>
            Discovery Questions
          </h2>

          <CollapsibleSection title="Questions to Uncover Pain Points" icon={MessageSquare}>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'How many orders do you process per day?',
                'What percentage of customers use laundry apps?',
                'How often do your regular customers return?',
                'Do you offer dry cleaning? What % of revenue?',
                'What is your slowest day of the week?',
                'Do you offer pickup and delivery?',
                'How do you keep customers from switching to apps?',
                'What is your average order value?',
                'Do customers ask for alterations? Shoe repair?',
                'How many residential buildings are nearby?',
              ].map((question, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-white/5 rounded-lg p-3 border border-white/10">
                  <span className="text-sky-400 font-bold text-sm">{idx + 1}.</span>
                  <p className="text-slate-300 text-sm">{question}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 9: Pre-Meeting Checklist */}
        <div className="mb-8">
          <h2 className="text-sky-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-sky-500 text-[#0a1628] flex items-center justify-center text-xs font-black">9</span>
            Pre-Meeting Checklist
          </h2>

          <CollapsibleSection title="Research Checklist" icon={Users}>
            <div className="space-y-2">
              <ChecklistItem>Check Google reviews and ratings</ChecklistItem>
              <ChecklistItem>Note their service offerings (dry clean, alterations, etc.)</ChecklistItem>
              <ChecklistItem>Identify if they have pickup/delivery</ChecklistItem>
              <ChecklistItem>Check competitor laundry apps in their area</ChecklistItem>
              <ChecklistItem>Note busy vs slow times/days</ChecklistItem>
              <ChecklistItem>Find owner contact on Google listing</ChecklistItem>
              <ChecklistItem>Prepare ROI with their typical prices</ChecklistItem>
              <ChecklistItem>Have 2-3 similar laundry case studies</ChecklistItem>
              <ChecklistItem>Bring QR materials and counter displays</ChecklistItem>
              <ChecklistItem>Know residential density in their area</ChecklistItem>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Materials to Prepare" icon={FileText}>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { item: 'Laundry Services Deck', desc: 'Focus on app defense' },
                { item: 'ROI Calculator', desc: 'Pre-filled with their prices' },
                { item: 'Counter Stickers', desc: 'Clean, visible designs' },
                { item: 'Case Studies', desc: '2-3 laundry success stories' },
                { item: 'Contract Template', desc: 'Ready for signature' },
                { item: 'Demo Phone', desc: 'Show customer app flow' },
              ].map((material, idx) => (
                <div key={idx} className="bg-white/5 rounded-lg p-3 border border-white/10">
                  <p className="text-white font-medium text-sm">{material.item}</p>
                  <p className="text-slate-400 text-xs">{material.desc}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 10: Closing Scripts */}
        <div className="mb-8">
          <h2 className="text-sky-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-sky-500 text-[#0a1628] flex items-center justify-center text-xs font-black">10</span>
            Closing Scripts
          </h2>

          <CollapsibleSection title="Closing the Deal" icon={Target}>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl p-4 border border-emerald-500/20">
                <h4 className="text-emerald-400 font-semibold mb-2">The Assumptive Close</h4>
                <p className="text-slate-300 text-sm italic">&quot;Great, let&apos;s put the QR right by your register. Should we do the setup today or tomorrow morning when it&apos;s quieter?&quot;</p>
              </div>
              <div className="bg-gradient-to-r from-sky-500/10 to-cyan-500/10 rounded-xl p-4 border border-sky-500/20">
                <h4 className="text-sky-400 font-semibold mb-2">The App Defense Close</h4>
                <p className="text-slate-300 text-sm italic">&quot;You mentioned 20% of customers now use Washmen. Every week you wait, more switch. Nuqta gives them a reason to stay loyal to your shop.&quot;</p>
              </div>
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl p-4 border border-amber-500/20">
                <h4 className="text-amber-400 font-semibold mb-2">The Dry Clean Upsell Close</h4>
                <p className="text-slate-300 text-sm italic">&quot;Your dry cleaning is AED 35 vs AED 8 for regular wash. Nuqta nudges customers toward premium services. One suit pays for 10 regular loads of commission.&quot;</p>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 11: Onboarding Timeline */}
        <div className="mb-8">
          <h2 className="text-sky-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-sky-500 text-[#0a1628] flex items-center justify-center text-xs font-black">11</span>
            Onboarding Timeline
          </h2>

          <CollapsibleSection title="From Signature to Live" icon={Calendar}>
            <div className="space-y-3">
              {[
                { day: 'Day 1', task: 'Contract signed, trade license collected', owner: 'BDA' },
                { day: 'Day 2', task: 'System setup, services and prices listed', owner: 'Operations' },
                { day: 'Day 3', task: 'Photo of shop front and interior', owner: 'BDA' },
                { day: 'Day 3', task: 'Staff training (quick - usually just owner)', owner: 'Account Manager' },
                { day: 'Day 3', task: 'QR sticker installed by register', owner: 'Account Manager' },
                { day: 'Day 4-5', task: 'Profile live, first promotion set', owner: 'Operations' },
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white/5 rounded-lg p-3 border border-white/10">
                  <div className="bg-sky-500/20 px-3 py-1 rounded-full">
                    <span className="text-sky-400 text-sm font-bold">{step.day}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm">{step.task}</p>
                  </div>
                  <div className="text-slate-400 text-xs">{step.owner}</div>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 12: Follow-Up Sequence */}
        <div className="mb-8">
          <h2 className="text-sky-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-sky-500 text-[#0a1628] flex items-center justify-center text-xs font-black">12</span>
            Follow-Up Sequence
          </h2>

          <CollapsibleSection title="If Not Closed on Spot" icon={TrendingUp}>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-white font-semibold mb-3">4-Day Follow-Up Sequence</h4>
                <div className="space-y-2">
                  {[
                    { day: 'Same Day', action: 'WhatsApp thank you + deck', channel: 'WhatsApp' },
                    { day: 'Day 2', action: 'Share nearby laundry success story', channel: 'WhatsApp' },
                    { day: 'Day 3', action: 'Quick call to address concerns', channel: 'Phone' },
                    { day: 'Day 4', action: 'Final push with app competition angle', channel: 'WhatsApp' },
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <span className="text-sky-400 font-medium w-20">{step.day}</span>
                      <span className="text-slate-300 flex-1">{step.action}</span>
                      <span className="text-slate-500 text-xs">{step.channel}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 13: Key Stats */}
        <div className="mb-8">
          <h2 className="text-sky-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-sky-500 text-[#0a1628] flex items-center justify-center text-xs font-black">13</span>
            Key Stats to Remember
          </h2>

          <CollapsibleSection title="Laundry Industry Quick Facts" icon={Bookmark}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { stat: '$400M+', label: 'UAE Laundry Market' },
                { stat: '2,000+', label: 'Laundry Shops' },
                { stat: 'AED 50', label: 'Avg Order Value' },
                { stat: 'Weekly', label: 'Visit Frequency' },
                { stat: 'AED 35', label: 'Avg Dry Clean Item' },
                { stat: '15-20%', label: 'Using Apps' },
                { stat: '60%', label: 'Cash Payments' },
                { stat: '<50%', label: 'Customer Retention' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                  <p className="text-sky-400 text-xl font-bold">{item.stat}</p>
                  <p className="text-slate-400 text-xs">{item.label}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 14: Power Phrases */}
        <div className="mb-8">
          <h2 className="text-sky-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-sky-500 text-[#0a1628] flex items-center justify-center text-xs font-black">14</span>
            Power Phrases
          </h2>

          <CollapsibleSection title="What to Say (and Avoid)" icon={Megaphone}>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  Power Phrases
                </h4>
                {[
                  'Keep customers from laundry apps',
                  'Loyalty that prevents switching',
                  'Dry cleaning upsells made easy',
                  'Every service counts - alterations too',
                  'Summer retention campaigns',
                  'Quality + rewards = unbeatable'
                ].map((phrase, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-green-500/10 rounded-lg px-3 py-2 border border-green-500/20 mb-2">
                    <CheckCircle2 className="text-green-400 flex-shrink-0" size={16} />
                    <p className="text-white text-sm font-medium">{phrase}</p>
                  </div>
                ))}
              </div>
              <div>
                <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                  <XCircle size={16} />
                  Avoid Saying
                </h4>
                {[
                  '"Compete with Washmen on price"',
                  '"Your punch cards don\'t work"',
                  '"Apps are taking over"',
                  '"Discount your services"',
                  '"We\'ll bring new customers"',
                  '"It\'s free to try"'
                ].map((phrase, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-red-500/10 rounded-lg px-3 py-2 border border-red-500/20 mb-2">
                    <XCircle className="text-red-400 flex-shrink-0" size={16} />
                    <p className="text-slate-300 text-sm">{phrase}</p>
                  </div>
                ))}
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 15: Marketing Campaigns Section */}
        <div className="mb-8">
          <h2 className="text-sky-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-sky-500 text-[#0a1628] flex items-center justify-center text-xs font-black">15</span>
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
                  <p className="text-emerald-400 text-sm">How to onboard laundry merchants</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Battle-tested campaigns to sign laundries and dry cleaners in residential areas.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Residential area door-to-door</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Laundry association partnerships</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Building manager referrals</span>
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
                  <p className="text-purple-400 text-sm">How to bring customers to laundries</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Viral campaigns to drive laundry customers. Retention campaigns, referral programs, and seasonal promos.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-purple-400" />
                  <span>Neighborhood loyalty campaigns</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-purple-400" />
                  <span>Dry cleaning upgrade promos</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-purple-400" />
                  <span>Summer retention specials</span>
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
                <p className="text-2xl font-bold text-sky-400">5</p>
                <p className="text-xs text-slate-400">Merchant Campaigns</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-400">6</p>
                <p className="text-xs text-slate-400">User Campaigns</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-cyan-400">AED 150</p>
                <p className="text-xs text-slate-400">Avg Transaction</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#c9a227]">35%</p>
                <p className="text-xs text-slate-400">Churn Reduction</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Footer */}
        <div className="bg-gradient-to-r from-sky-500/20 to-transparent rounded-2xl p-6 border border-sky-500/30 text-center">
          <Shirt className="text-sky-400 mx-auto mb-3" size={32} />
          <h3 className="text-white font-bold text-lg mb-2">Ready for the Meeting?</h3>
          <p className="text-slate-400 text-sm mb-4">Access the pitch deck and other materials</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/deck-merchant" className="px-4 py-2 bg-sky-500 text-white rounded-full font-semibold text-sm hover:bg-sky-600 transition-colors">
              View Laundry Deck
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
          Laundry & Dry Cleaning Playbook v1.0 • Last Updated: February 2026
        </p>
      </div>
    </div>
  );
};

export default LaundryPlaybook;
