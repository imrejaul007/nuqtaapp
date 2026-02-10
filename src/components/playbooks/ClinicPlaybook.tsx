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
  Stethoscope,
  Heart,
  Activity,
  Sparkles,
  UserCheck,
  Monitor,
  Camera,
  Megaphone,
  MapPin,
  Gift,
  Percent,
  Store,
  Eye,
  Smile,
  Baby
} from 'lucide-react';

/**
 * CLINICS & MEDICAL SERVICES SALES PLAYBOOK
 * Complete sales guide for medical/healthcare merchant acquisition
 *
 * Industry: Dental Clinics, Dermatology, Aesthetic Clinics, Eye Care, Physiotherapy
 * Engine: A (High Margin 50-70%)
 * Commission: 12-18%
 *
 * UAE Market Stats:
 * - Healthcare market size UAE: $20B
 * - 4,000+ private clinics in Dubai
 * - Average dental visit: AED 300-800
 * - Average aesthetic treatment: AED 500-5,000
 * - 60% of healthcare spending is out-of-pocket
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
          <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center">
            <Icon className="text-teal-400" size={20} />
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

const ClinicPlaybook = () => {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Header */}
      <div className="bg-gradient-to-b from-teal-500/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
          <Link href="/merchant-playbook" className="inline-flex items-center gap-2 text-slate-400 hover:text-teal-400 mb-6 transition-colors">
            <ArrowLeft size={20} />
            <span>All Playbooks</span>
          </Link>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 rounded-full mb-6">
              <Stethoscope className="text-teal-400" size={16} />
              <span className="text-teal-400 text-sm font-medium">Engine A • High Margin</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              <span className="text-teal-400">Clinics & Medical</span> Sales Playbook
            </h1>
            <p className="text-slate-400 text-lg">Complete guide to signing healthcare merchants</p>
            <p className="text-slate-500 text-sm mt-2">From Cold Outreach to Signed Contract</p>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'UAE Healthcare', value: '$20B', color: 'teal' },
            { label: 'Private Clinics', value: '4,000+', color: 'cyan' },
            { label: 'Commission', value: '12-18%', color: 'emerald' },
            { label: 'Avg Visit', value: 'AED 400', color: 'amber' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
              <p className="text-teal-400 text-xl font-black">{stat.value}</p>
              <p className="text-slate-400 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-32">

        {/* Part 1: Industry Overview */}
        <div className="mb-8">
          <h2 className="text-teal-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-teal-500 text-[#0a1628] flex items-center justify-center text-xs font-black">1</span>
            Industry Overview
          </h2>

          <CollapsibleSection title="Healthcare Market in UAE" icon={BarChart3} defaultOpen={true}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'UAE Healthcare', value: '$20B' },
                  { label: 'Private Clinics', value: '4,000+' },
                  { label: 'Dental Clinics', value: '1,500+' },
                  { label: 'Out-of-Pocket', value: '60%' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                    <p className="text-teal-400 text-lg font-bold">{stat.value}</p>
                    <p className="text-slate-400 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                <h4 className="text-red-400 font-semibold mb-2">🇦🇪 GCC-Specific Pain Points</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• <strong className="text-red-300">4,000+ private clinics in Dubai</strong> - fierce competition for patients</li>
                  <li>• <strong className="text-red-300">15% no-show rate</strong> - costs AED 500+ per empty appointment slot</li>
                  <li>• <strong className="text-red-300">Insurance patients = low margins</strong> - network rates squeeze profit</li>
                  <li>• <strong className="text-red-300">Patients skip follow-ups</strong> - dental cleanings, skin checks postponed</li>
                  <li>• <strong className="text-red-300">Google/Instagram ads cost AED 100+</strong> per lead with no guarantee</li>
                  <li>• <strong className="text-red-300">Medical tourism competition</strong> - patients fly to Turkey/Thailand for procedures</li>
                  <li>• <strong className="text-red-300">Expat turnover</strong> - patients leave UAE every 2-3 years</li>
                  <li>• <strong className="text-red-300">Price shopping for aesthetics</strong> - patients compare Botox prices on Instagram</li>
                  <li>• <strong className="text-red-300">Ramadan operational challenges</strong> - patient flow drops during fasting hours</li>
                  <li>• <strong className="text-red-300">Doctor-hopping culture</strong> - patients try different clinics each visit</li>
                  <li>• <strong className="text-red-300">Summer exodus</strong> - 30% drop as residents travel for holidays</li>
                </ul>
              </div>

              <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                <h4 className="text-emerald-400 font-semibold mb-2">✨ How Nuqta Solves Each Pain Point</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• <strong className="text-red-300">4,000+ clinics competing?</strong> → <strong className="text-emerald-300">Stand out with rewards</strong> - be the clinic where patients earn on every visit</li>
                  <li>• <strong className="text-red-300">15% no-show rate?</strong> → <strong className="text-emerald-300">40% reduction</strong> - automated reminders + patients don&apos;t want to lose coins</li>
                  <li>• <strong className="text-red-300">Insurance low margins?</strong> → <strong className="text-emerald-300">Attract cash-paying patients</strong> - 500K+ users preferring cash transactions</li>
                  <li>• <strong className="text-red-300">Skip follow-ups?</strong> → <strong className="text-emerald-300">Automated checkup reminders</strong> - dental cleanings, skin checks, eye exams never forgotten</li>
                  <li>• <strong className="text-red-300">AED 100+ per lead?</strong> → <strong className="text-emerald-300">Pay only 12-18% on actual visits</strong> - no upfront cost, pay when patient spends</li>
                  <li>• <strong className="text-red-300">Medical tourism?</strong> → <strong className="text-emerald-300">Coins make staying local rewarding</strong> - why fly to Turkey when you earn rewards here?</li>
                  <li>• <strong className="text-red-300">Expat turnover?</strong> → <strong className="text-emerald-300">Continuous acquisition</strong> - new patients from 500K+ users replace departing expats</li>
                  <li>• <strong className="text-red-300">Price shopping aesthetics?</strong> → <strong className="text-emerald-300">Compete on value</strong> - Botox with coins = effectively cheaper than Instagram deals</li>
                  <li>• <strong className="text-red-300">Ramadan slow?</strong> → <strong className="text-emerald-300">Post-iftar campaigns</strong> - Eid glow-up specials, post-fasting health checks</li>
                  <li>• <strong className="text-red-300">Doctor-hopping?</strong> → <strong className="text-emerald-300">Coins create loyalty</strong> - patients stick with coin-earning clinic</li>
                  <li>• <strong className="text-red-300">Summer exodus?</strong> → <strong className="text-emerald-300">Summer survival campaigns</strong> - bonus coins for those who stay</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 2: Target Sub-Categories */}
        <div className="mb-8">
          <h2 className="text-teal-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-teal-500 text-[#0a1628] flex items-center justify-center text-xs font-black">2</span>
            Target Sub-Categories
          </h2>

          <CollapsibleSection title="Healthcare Segments" icon={Stethoscope}>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: 'Dental Clinics', icon: Smile, count: '1,500+', avgSpend: 'AED 400-800', frequency: '2-4x/year' },
                { name: 'Aesthetic/Derma', icon: Sparkles, count: '800+', avgSpend: 'AED 500-5,000', frequency: '4-12x/year' },
                { name: 'Eye Care/Optical', icon: Eye, count: '500+', avgSpend: 'AED 300-2,000', frequency: '1-2x/year' },
                { name: 'Physiotherapy', icon: Activity, count: '400+', avgSpend: 'AED 200-400', frequency: '8-20x/series' },
                { name: 'General Practice', icon: Stethoscope, count: '1,000+', avgSpend: 'AED 200-500', frequency: '3-6x/year' },
                { name: 'Pediatric', icon: Baby, count: '300+', avgSpend: 'AED 300-600', frequency: '4-8x/year' },
              ].map((segment, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <segment.icon className="text-teal-400" size={20} />
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
                      <p className="text-teal-400 font-medium">{segment.frequency}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 3: Nuqta Service Packages */}
        <div className="mb-8">
          <h2 className="text-teal-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-teal-500 text-[#0a1628] flex items-center justify-center text-xs font-black">3</span>
            Nuqta Service Packages
          </h2>

          <CollapsibleSection title="What Clinics Get" icon={Gift}>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Patient Loyalty', desc: 'Coins on every visit - checkups, treatments, products', icon: Gift },
                { title: 'Appointment Reminders', desc: 'Automated follow-up notifications for regular care', icon: Clock },
                { title: 'No-Show Reduction', desc: 'Coin incentives for keeping appointments', icon: Calendar },
                { title: 'Cash Patient Acquisition', desc: 'Attract patients paying out-of-pocket', icon: DollarSign },
                { title: 'Treatment Upsells', desc: 'Promote elective procedures with bonus coins', icon: TrendingUp },
                { title: 'Package Promotions', desc: 'Sell treatment packages with loyalty bonuses', icon: Gift },
                { title: 'Referral Program', desc: 'Patients refer friends and family', icon: UserCheck },
                { title: 'Review Generation', desc: 'Happy patients become Google reviewers', icon: Megaphone },
              ].map((feature, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10 flex gap-3">
                  <feature.icon className="text-teal-400 flex-shrink-0" size={20} />
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
          <h2 className="text-teal-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-teal-500 text-[#0a1628] flex items-center justify-center text-xs font-black">4</span>
            The 60-Second Pitch
          </h2>

          <CollapsibleSection title="Perfect Pitch Script" icon={MessageSquare}>
            <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-xl p-6 border border-teal-500/30">
              <div className="space-y-4 text-slate-300">
                <p><span className="text-teal-400 font-bold">HOOK:</span> &quot;What percentage of patients actually come back for their 6-month dental checkup?&quot;</p>

                <p><span className="text-teal-400 font-bold">PROBLEM:</span> &quot;Most clinics lose 50% of patients after the first visit. They forget to schedule follow-ups, and you&apos;re competing with 20+ other clinics on Google. Meanwhile, no-shows cost you AED 500 per empty slot.&quot;</p>

                <p><span className="text-teal-400 font-bold">SOLUTION:</span> &quot;Nuqta turns one-time patients into regulars. They earn coins on every visit, get automated reminders for checkups, and have an incentive to choose you over competitors.&quot;</p>

                <p><span className="text-teal-400 font-bold">PROOF:</span> &quot;Clinics on Nuqta see 40% reduction in no-shows and 60% increase in follow-up appointment completion.&quot;</p>

                <p><span className="text-teal-400 font-bold">ASK:</span> &quot;Can I show you how [Clinic Name] would appear to our 500K+ users? Takes 10 minutes.&quot;</p>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 5: ROI Calculator */}
        <div className="mb-8">
          <h2 className="text-teal-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-teal-500 text-[#0a1628] flex items-center justify-center text-xs font-black">5</span>
            ROI Calculator
          </h2>

          <CollapsibleSection title="Financial Impact Example" icon={Calculator}>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-white font-semibold mb-3">Example: Dental Clinic with 3 Chairs</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Current no-shows per month:</span>
                    <span className="text-white">40 appointments</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">No-show reduction (40%):</span>
                    <span className="text-emerald-400">16 recovered appointments</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Revenue per appointment:</span>
                    <span className="text-white">AED 500</span>
                  </div>
                  <div className="flex justify-between border-t border-white/10 pt-2">
                    <span className="text-slate-400">Recovered revenue/month:</span>
                    <span className="text-emerald-400 font-bold">AED 8,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">New patients from Nuqta (15):</span>
                    <span className="text-emerald-400">+AED 7,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Nuqta commission (15%):</span>
                    <span className="text-amber-400">-AED 2,325</span>
                  </div>
                  <div className="flex justify-between bg-emerald-500/20 p-2 rounded-lg">
                    <span className="text-emerald-400 font-bold">Net profit increase/month:</span>
                    <span className="text-emerald-400 font-bold">AED 13,175</span>
                  </div>
                </div>
              </div>

              <div className="bg-teal-500/10 rounded-xl p-4 border border-teal-500/20">
                <p className="text-teal-400 font-semibold">Key Insight:</p>
                <p className="text-slate-300 text-sm">The lifetime value of a dental patient is AED 5,000+ over 5 years. Nuqta helps you retain patients who would otherwise drift to competitors after one visit.</p>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 6: Objection Handling */}
        <div className="mb-8">
          <h2 className="text-teal-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-teal-500 text-[#0a1628] flex items-center justify-center text-xs font-black">6</span>
            Objection Handling
          </h2>

          <CollapsibleSection title="Common Objections & Responses" icon={Shield}>
            <div className="space-y-3">
              {[
                { objection: 'Healthcare isn\'t about loyalty programs', response: 'It\'s about patient retention. 50% of patients never return after first visit. Nuqta helps them remember their checkups and choose you.' },
                { objection: 'Our patients are mostly insurance', response: 'Perfect opportunity to grow cash-paying patients. They have higher margins and aren\'t restricted by network limitations.' },
                { objection: 'Medical services shouldn\'t be gamified', response: 'We\'re not gamifying healthcare - we\'re rewarding preventive care. Patients who maintain checkups have better outcomes.' },
                { objection: 'We have a patient management system', response: 'Nuqta complements your PMS. We bring NEW patients and drive retention behaviors your PMS can\'t incentivize.' },
                { objection: 'Our doctors are the draw, not rewards', response: 'Absolutely. But patients forget which clinic they visited. Coins create recall - they remember where their rewards are building.' },
                { objection: 'DHA/DOH regulations are strict', response: 'Nuqta is fully compliant. We\'re a loyalty program, not medical advice. We don\'t interfere with treatment decisions.' },
                { objection: 'Aesthetic clinics don\'t need help', response: 'Aesthetic is highly competitive. When patients are price-shopping Botox, having coins at your clinic tips the decision.' },
                { objection: 'We get referrals from other doctors', response: 'Great for serious cases. But routine procedures like cleanings, facials, checkups - patients choose based on convenience and incentives.' },
                { objection: 'Our marketing budget goes to Google', response: 'Google costs AED 100+ per lead with no guarantee. Nuqta charges only when patients actually visit and pay.' },
                { objection: 'Patients will expect discounts', response: 'Coins aren\'t discounts - they\'re earned rewards for loyalty. You maintain full pricing while rewarding repeat behavior.' },
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
          <h2 className="text-teal-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-teal-500 text-[#0a1628] flex items-center justify-center text-xs font-black">7</span>
            Competitor Landscape
          </h2>

          <CollapsibleSection title="What Clinics Use Today" icon={Target}>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: 'Google/Facebook Ads', weakness: 'High CPC, no guarantee of booking', nuqtaAdvantage: 'Pay only when patient visits' },
                  { name: 'Insurance Networks', weakness: 'Low margins, long reimbursement', nuqtaAdvantage: 'Cash patients, instant payment' },
                  { name: 'Referral Cards', weakness: 'Manual tracking, often forgotten', nuqtaAdvantage: 'Automatic digital tracking' },
                  { name: 'Medical Tourism Agencies', weakness: 'High commission 15-30%', nuqtaAdvantage: 'Lower commission on local patients' },
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
          <h2 className="text-teal-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-teal-500 text-[#0a1628] flex items-center justify-center text-xs font-black">8</span>
            Discovery Questions
          </h2>

          <CollapsibleSection title="Questions to Uncover Pain Points" icon={MessageSquare}>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'What percentage of patients are cash vs insurance?',
                'What is your no-show rate? How do you handle it?',
                'How do patients typically find your clinic?',
                'What is your patient return rate for routine care?',
                'Which services have the longest wait for appointments?',
                'Do you have capacity for more patients?',
                'How do you remind patients about check-ups?',
                'What is your slowest day/time?',
                'Are you DHA/DOH licensed for marketing?',
                'Do you want to grow specific services (whitening, facials)?',
              ].map((question, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-white/5 rounded-lg p-3 border border-white/10">
                  <span className="text-teal-400 font-bold text-sm">{idx + 1}.</span>
                  <p className="text-slate-300 text-sm">{question}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 9: Pre-Meeting Checklist */}
        <div className="mb-8">
          <h2 className="text-teal-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-teal-500 text-[#0a1628] flex items-center justify-center text-xs font-black">9</span>
            Pre-Meeting Checklist
          </h2>

          <CollapsibleSection title="Research Checklist" icon={Users}>
            <div className="space-y-2">
              <ChecklistItem>Research clinic&apos;s Google reviews and ratings</ChecklistItem>
              <ChecklistItem>Check their service menu and price range</ChecklistItem>
              <ChecklistItem>Identify specialty (dental, derma, etc.)</ChecklistItem>
              <ChecklistItem>Look up accepted insurance networks</ChecklistItem>
              <ChecklistItem>Find clinic manager or owner on LinkedIn</ChecklistItem>
              <ChecklistItem>Note number of practitioners/chairs</ChecklistItem>
              <ChecklistItem>Check if they have existing loyalty program</ChecklistItem>
              <ChecklistItem>Prepare ROI calculator with their services</ChecklistItem>
              <ChecklistItem>Have 2-3 similar clinic case studies</ChecklistItem>
              <ChecklistItem>Bring compliance information for DHA/DOH</ChecklistItem>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Materials to Prepare" icon={FileText}>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { item: 'Healthcare Pitch Deck', desc: 'With compliance messaging' },
                { item: 'ROI Calculator', desc: 'Pre-filled with their services' },
                { item: 'Reception Stickers', desc: 'Subtle, professional design' },
                { item: 'Case Studies', desc: '2-3 similar specialty clinics' },
                { item: 'Contract Template', desc: 'Ready for signature' },
                { item: 'Demo Phone', desc: 'Show patient flow mockup' },
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
          <h2 className="text-teal-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-teal-500 text-[#0a1628] flex items-center justify-center text-xs font-black">10</span>
            Closing Scripts
          </h2>

          <CollapsibleSection title="Closing the Deal" icon={Target}>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl p-4 border border-emerald-500/20">
                <h4 className="text-emerald-400 font-semibold mb-2">The Assumptive Close</h4>
                <p className="text-slate-300 text-sm italic">&quot;Great, let&apos;s start with your dental cleaning and whitening services. Should we schedule the content shoot for this week or next?&quot;</p>
              </div>
              <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-xl p-4 border border-teal-500/20">
                <h4 className="text-teal-400 font-semibold mb-2">The Pilot Close</h4>
                <p className="text-slate-300 text-sm italic">&quot;Let&apos;s start with just your preventive services - cleanings and check-ups. When you see the 30% increase in bookings, we&apos;ll add cosmetic services.&quot;</p>
              </div>
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl p-4 border border-amber-500/20">
                <h4 className="text-amber-400 font-semibold mb-2">The No-Show Close</h4>
                <p className="text-slate-300 text-sm italic">&quot;You mentioned 15% no-show rate. That&apos;s AED 30,000 lost monthly. Nuqta patients show up because they&apos;re earning rewards. The contract just needs your signature.&quot;</p>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 11: Onboarding Timeline */}
        <div className="mb-8">
          <h2 className="text-teal-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-teal-500 text-[#0a1628] flex items-center justify-center text-xs font-black">11</span>
            Onboarding Timeline
          </h2>

          <CollapsibleSection title="From Signature to Live" icon={Calendar}>
            <div className="space-y-3">
              {[
                { day: 'Day 1', task: 'Contract signed, DHA/DOH license verified', owner: 'BDA' },
                { day: 'Day 2-3', task: 'System setup, services listed (compliance reviewed)', owner: 'Operations' },
                { day: 'Day 4-5', task: 'Clinic photos (reception, rooms)', owner: 'Content Team' },
                { day: 'Day 6', task: 'Staff training (reception + admin)', owner: 'Account Manager' },
                { day: 'Day 6', task: 'QR materials installed discreetly', owner: 'Account Manager' },
                { day: 'Day 7-10', task: 'Compliance review and soft launch', owner: 'Operations' },
                { day: 'Day 10-14', task: 'Full launch with preventive care focus', owner: 'Marketing' },
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white/5 rounded-lg p-3 border border-white/10">
                  <div className="bg-teal-500/20 px-3 py-1 rounded-full">
                    <span className="text-teal-400 text-sm font-bold">{step.day}</span>
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
          <h2 className="text-teal-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-teal-500 text-[#0a1628] flex items-center justify-center text-xs font-black">12</span>
            Follow-Up Sequence
          </h2>

          <CollapsibleSection title="If Not Closed on Spot" icon={TrendingUp}>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-white font-semibold mb-3">7-Day Follow-Up Sequence</h4>
                <div className="space-y-2">
                  {[
                    { day: 'Same Day', action: 'Email thank you + deck + compliance info', channel: 'Email' },
                    { day: 'Day 2', action: 'Share similar clinic success story', channel: 'WhatsApp' },
                    { day: 'Day 4', action: 'Call to address compliance concerns', channel: 'Phone' },
                    { day: 'Day 6', action: 'Share patient retention statistics', channel: 'Email' },
                    { day: 'Day 7', action: 'Final push with pilot offer', channel: 'WhatsApp' },
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <span className="text-teal-400 font-medium w-20">{step.day}</span>
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
          <h2 className="text-teal-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-teal-500 text-[#0a1628] flex items-center justify-center text-xs font-black">13</span>
            Key Stats to Remember
          </h2>

          <CollapsibleSection title="Healthcare Industry Quick Facts" icon={Bookmark}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { stat: '$20B', label: 'UAE Healthcare Market' },
                { stat: '4,000+', label: 'Private Clinics' },
                { stat: 'AED 400', label: 'Avg Consultation' },
                { stat: '15-20%', label: 'No-Show Rate' },
                { stat: '40%', label: 'Insurance Patients' },
                { stat: 'AED 200', label: 'Cleaning Cost' },
                { stat: '6 months', label: 'Checkup Interval' },
                { stat: '<30%', label: 'Patient Return Rate' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                  <p className="text-teal-400 text-xl font-bold">{item.stat}</p>
                  <p className="text-slate-400 text-xs">{item.label}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 14: Power Phrases */}
        <div className="mb-8">
          <h2 className="text-teal-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-teal-500 text-[#0a1628] flex items-center justify-center text-xs font-black">14</span>
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
                  'Patients who remember to come back',
                  'Fill empty slots from no-shows',
                  'Grow your cash-paying patients',
                  'Preventive care drives better outcomes',
                  'Stand out from clinic competition',
                  'Pay only on actual visits'
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
                  '"Get more patients with discounts"',
                  '"Replace your booking system"',
                  '"Medical loyalty program"',
                  '"Compete on price"',
                  '"We\'ll flood you with patients"',
                  '"Insurance patients too"'
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
          <h2 className="text-teal-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-teal-500 text-[#0a1628] flex items-center justify-center text-xs font-black">15</span>
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
                  <p className="text-emerald-400 text-sm">How to onboard clinic merchants</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Battle-tested campaigns to sign dental, derma, and medical clinics. Healthcare compliance-focused approach.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Medical center blitz campaigns</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Dental clinic chain partnerships</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Aesthetic clinic networks</span>
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
                  <p className="text-purple-400 text-sm">How to bring patients to clinics</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Viral campaigns for health-conscious users. Checkup reminders, wellness rewards, and family healthcare.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-purple-400" />
                  <span>Dental checkup reminder campaigns</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-purple-400" />
                  <span>Skin care season promotions</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-purple-400" />
                  <span>Family health package rewards</span>
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
                <p className="text-2xl font-bold text-teal-400">5</p>
                <p className="text-xs text-slate-400">Merchant Campaigns</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-400">6</p>
                <p className="text-xs text-slate-400">User Campaigns</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-cyan-400">AED 400</p>
                <p className="text-xs text-slate-400">Avg Visit Value</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#c9a227]">40%</p>
                <p className="text-xs text-slate-400">No-Show Reduction</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Footer */}
        <div className="bg-gradient-to-r from-teal-500/20 to-transparent rounded-2xl p-6 border border-teal-500/30 text-center">
          <Stethoscope className="text-teal-400 mx-auto mb-3" size={32} />
          <h3 className="text-white font-bold text-lg mb-2">Ready for the Meeting?</h3>
          <p className="text-slate-400 text-sm mb-4">Access the pitch deck and other materials</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/deck-merchant" className="px-4 py-2 bg-teal-500 text-white rounded-full font-semibold text-sm hover:bg-teal-600 transition-colors">
              View Clinic Deck
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
          Clinics & Medical Playbook v1.0 • Last Updated: February 2026
        </p>
      </div>
    </div>
  );
};

export default ClinicPlaybook;
