'use client';

import React, { useState } from 'react';
import {
  Briefcase,
  MessageSquare,
  Phone,
  Mail,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Target,
  Users,
  DollarSign,
  TrendingUp,
  Clock,
  FileText,
  Copy,
  Check,
  ChevronRight,
  Building2,
  Star,
  Zap
} from 'lucide-react';

export default function SalesKitPage() {
  const [activeTab, setActiveTab] = useState<'scripts' | 'objections' | 'process' | 'materials'>('scripts');
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const copyToClipboard = (text: string, section: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0a1628] via-[#1a2942] to-[#0a1628] border-b border-[#c9a227]/20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-8 h-8 text-[#c9a227]" />
            <span className="text-[#c9a227] font-semibold">Sales Team</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Merchant Sales Kit
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Scripts, objection handling, and everything you need to close merchant partnerships
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-0 z-50 bg-[#0a1628]/95 backdrop-blur border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-2">
            {[
              { id: 'scripts', label: 'Sales Scripts', icon: MessageSquare },
              { id: 'objections', label: 'Objection Handling', icon: AlertCircle },
              { id: 'process', label: 'Sales Process', icon: Target },
              { id: 'materials', label: 'Materials', icon: FileText },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-[#c9a227] text-black'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {activeTab === 'scripts' && <ScriptsTab copyToClipboard={copyToClipboard} copiedSection={copiedSection} />}
        {activeTab === 'objections' && <ObjectionsTab />}
        {activeTab === 'process' && <ProcessTab />}
        {activeTab === 'materials' && <MaterialsTab />}
      </div>
    </div>
  );
}

interface ScriptsTabProps {
  copyToClipboard: (text: string, section: string) => void;
  copiedSection: string | null;
}

// ============================================
// SCRIPTS TAB
// ============================================
function ScriptsTab({ copyToClipboard, copiedSection }: ScriptsTabProps) {
  const coldCallScript = `Hi [Name], this is [Your Name] from Nuqta - the rewards app launching in UAE.

I'm reaching out because we're onboarding select [cafes/restaurants/salons] in [Area] for our launch, and [Business Name] came up as a top pick.

Quick question - are you currently using any loyalty program to bring customers back?

[If No] That's exactly why I'm calling. We've built a platform that brings you new customers without any upfront cost. You only pay a commission when we drive actual sales.

[If Yes] Interesting! Most programs charge monthly fees whether they work or not. We're different - you only pay when we actually send you paying customers.

Would you have 10 minutes this week for me to show you how it works? I can come by [Day] around [Time].`;

  const walkInScript = `Hi there! I'm [Name] from Nuqta. Is the owner or manager available?

[To Owner/Manager]

Great to meet you! I've been visiting [cafes/restaurants/salons] in the area because we're launching a rewards app that brings local businesses new customers.

I noticed you have great [specific compliment about the business]. Are you currently doing anything to bring first-time visitors back for repeat visits?

The reason I ask is - we've built a platform where thousands of UAE residents discover and get rewarded for visiting local businesses. And here's the best part: there's no monthly fee. You only pay a small commission when we actually send you a paying customer.

Can I show you a quick 2-minute demo on my phone?`;

  const followUpEmail = `Subject: Following up - Nuqta Partnership for [Business Name]

Hi [Name],

It was great speaking with you [yesterday/on Tuesday] about Nuqta.

As promised, here's what we discussed:

✅ No monthly fees or setup costs
✅ Only pay [X]% commission on Nuqta transactions
✅ Get featured to thousands of local customers
✅ Free marketing through our app & social media
✅ Real-time dashboard to track customers & sales

I've attached our merchant info sheet with all the details.

Ready to get started? Here's what happens next:
1. You sign a simple digital agreement (takes 2 minutes)
2. We set up your profile and train your staff (15 minutes)
3. You start receiving new customers!

Want me to come by [Day] to get you set up? It only takes about 20 minutes total.

Looking forward to welcoming [Business Name] to the Nuqta family!

Best,
[Your Name]
[Phone]`;

  const closingScript = `Based on everything we discussed, here's what I recommend:

For a [business type] like yours with [X] daily customers, our [Starter/Growth] package makes the most sense.

Here's the math:
- If we send you just 10 new customers per week
- At your average ticket of AED [X]
- That's AED [Y] in new revenue monthly
- Your commission would only be AED [Z]

That's [X]x return on what you pay us.

The only question is - do you want to be part of our launch merchants and get featured prominently, or wait and miss the early exposure?

[If hesitant] I totally understand wanting to think about it. How about this - let's start with our free Starter package for 30 days. If you're not happy with the results, you can cancel anytime. Fair enough?

Great! Let me get your details and we'll have you set up in 10 minutes.`;

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-white mb-2">Sales Scripts</h2>
        <p className="text-slate-400">Copy-paste scripts for every sales situation</p>
      </div>

      {/* Cold Call Script */}
      <div className="bg-slate-800/30 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6 text-blue-400" />
            <h3 className="text-xl font-black text-white">Cold Call Script</h3>
          </div>
          <button
            onClick={() => copyToClipboard(coldCallScript, 'cold-call')}
            className="flex items-center gap-2 px-3 py-1.5 bg-[#c9a227]/20 text-[#c9a227] rounded-lg text-sm font-semibold hover:bg-[#c9a227]/30"
          >
            {copiedSection === 'cold-call' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copiedSection === 'cold-call' ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <div className="bg-slate-900 rounded-lg p-4">
          <pre className="text-sm text-slate-300 whitespace-pre-wrap font-mono">{coldCallScript}</pre>
        </div>
      </div>

      {/* Walk-in Script */}
      <div className="bg-slate-800/30 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Building2 className="w-6 h-6 text-emerald-400" />
            <h3 className="text-xl font-black text-white">Walk-in Script</h3>
          </div>
          <button
            onClick={() => copyToClipboard(walkInScript, 'walk-in')}
            className="flex items-center gap-2 px-3 py-1.5 bg-[#c9a227]/20 text-[#c9a227] rounded-lg text-sm font-semibold hover:bg-[#c9a227]/30"
          >
            {copiedSection === 'walk-in' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copiedSection === 'walk-in' ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <div className="bg-slate-900 rounded-lg p-4">
          <pre className="text-sm text-slate-300 whitespace-pre-wrap font-mono">{walkInScript}</pre>
        </div>
      </div>

      {/* Follow-up Email */}
      <div className="bg-slate-800/30 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-purple-400" />
            <h3 className="text-xl font-black text-white">Follow-up Email</h3>
          </div>
          <button
            onClick={() => copyToClipboard(followUpEmail, 'follow-up')}
            className="flex items-center gap-2 px-3 py-1.5 bg-[#c9a227]/20 text-[#c9a227] rounded-lg text-sm font-semibold hover:bg-[#c9a227]/30"
          >
            {copiedSection === 'follow-up' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copiedSection === 'follow-up' ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <div className="bg-slate-900 rounded-lg p-4">
          <pre className="text-sm text-slate-300 whitespace-pre-wrap font-mono">{followUpEmail}</pre>
        </div>
      </div>

      {/* Closing Script */}
      <div className="bg-slate-800/30 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Star className="w-6 h-6 text-amber-400" />
            <h3 className="text-xl font-black text-white">Closing Script</h3>
          </div>
          <button
            onClick={() => copyToClipboard(closingScript, 'closing')}
            className="flex items-center gap-2 px-3 py-1.5 bg-[#c9a227]/20 text-[#c9a227] rounded-lg text-sm font-semibold hover:bg-[#c9a227]/30"
          >
            {copiedSection === 'closing' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copiedSection === 'closing' ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <div className="bg-slate-900 rounded-lg p-4">
          <pre className="text-sm text-slate-300 whitespace-pre-wrap font-mono">{closingScript}</pre>
        </div>
      </div>
    </div>
  );
}

// ============================================
// OBJECTIONS TAB
// ============================================
function ObjectionsTab() {
  const objections = [
    {
      objection: "We already have a loyalty program",
      response: "That's great! Many of our merchants do too. The difference is - your current program rewards existing customers, right? Nuqta brings you NEW customers who've never visited before. It's complementary, not competitive. You keep your program, and we add new revenue on top.",
      key: "Focus on NEW customers, not replacing existing program",
      category: "Competition"
    },
    {
      objection: "The commission is too high",
      response: "I understand the concern. Let me flip the perspective - you're not paying 15% commission. You're getting 85% of revenue you wouldn't have had otherwise. These are customers who discover you through our app, not your regulars. It's pure incremental revenue with zero marketing spend on your side.",
      key: "Reframe as incremental revenue, not a cost",
      category: "Pricing"
    },
    {
      objection: "We don't have time to manage another system",
      response: "Totally get it - you're busy running a business. Here's the good news: there's literally nothing to manage. We set everything up in 15 minutes. Your staff just scans a QR code at checkout - that's it. No daily reconciliation, no manual tracking. We handle everything.",
      key: "Emphasize zero operational burden",
      category: "Operations"
    },
    {
      objection: "Let me think about it",
      response: "Of course! Quick question - is there something specific holding you back, or do you just need time to digest? [Wait for answer] The reason I ask is - we're onboarding launch merchants right now who'll get premium placement when we launch. Once we hit our quota, new merchants join a waitlist. I'd hate for you to miss that window.",
      key: "Uncover real objection, create urgency",
      category: "Stalling"
    },
    {
      objection: "I need to talk to my partner/owner",
      response: "Absolutely - important decisions should be discussed. Would it help if I came back when they're here? Or I could send a short video explanation they can watch at their convenience. Which works better?",
      key: "Offer to present to decision maker directly",
      category: "Decision Maker"
    },
    {
      objection: "We tried something like this before and it didn't work",
      response: "I appreciate you sharing that. Can I ask what specifically didn't work? [Listen] That's really helpful feedback. Here's how we're different: [address specific concern]. Plus, with our model, if it's not working, you're not paying anything - there's no monthly fee, remember?",
      key: "Understand past failure, show how we're different",
      category: "Past Experience"
    },
    {
      objection: "We're not ready for new technology",
      response: "I hear you. The great news is this isn't really 'technology' for you. You don't need any new hardware or software. It works with your existing setup - we just add a QR code at your counter. Your staff learns it in 5 minutes.",
      key: "Minimize perceived tech complexity",
      category: "Technology"
    },
    {
      objection: "Business is slow right now, not a good time",
      response: "Actually, that's exactly when this makes the most sense. When business is slow, you need more customers, right? And with our model, there's no risk - you pay nothing unless we actually bring you sales. It's perfect for testing during slower periods.",
      key: "Slow times = best time to try risk-free",
      category: "Timing"
    },
    {
      objection: "How do I know this isn't a scam?",
      response: "Smart question - you should always verify. Here's our trade license [show on phone], our office is in [location], and here are some other merchants in the area already with us [show examples]. Want me to give you their number so you can ask them directly?",
      key: "Provide social proof and verification",
      category: "Trust"
    },
    {
      objection: "What if customers just use it for the discount and never come back?",
      response: "Great point. Here's what we see: customers who try a business through rewards are actually MORE likely to return. Why? Because they've now 'discovered' you. Plus, we have engagement features that keep reminding them about your business. But honestly, even a one-time new customer at 85% revenue is better than no customer.",
      key: "One-time customer still = net positive revenue",
      category: "Value"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-white mb-2">Objection Handling</h2>
        <p className="text-slate-400">How to respond to the most common merchant objections</p>
      </div>

      {/* Objection Cards */}
      <div className="space-y-4">
        {objections.map((obj, index) => (
          <div key={index} className="bg-slate-800/30 rounded-xl overflow-hidden">
            <div className="bg-red-500/10 border-l-4 border-red-500 px-6 py-4">
              <div className="flex items-center gap-2 mb-1">
                <XCircle className="w-5 h-5 text-red-400" />
                <span className="text-xs text-red-400 font-semibold uppercase">{obj.category}</span>
              </div>
              <p className="text-white font-semibold">&ldquo;{obj.objection}&rdquo;</p>
            </div>
            <div className="px-6 py-4">
              <div className="flex items-start gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <p className="text-slate-300">{obj.response}</p>
              </div>
              <div className="bg-[#c9a227]/10 rounded-lg px-4 py-2 mt-3">
                <p className="text-sm text-[#c9a227]"><strong>Key Point:</strong> {obj.key}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* General Tips */}
      <div className="bg-gradient-to-br from-[#c9a227]/10 to-amber-500/10 border border-[#c9a227]/30 rounded-xl p-6">
        <h3 className="text-xl font-black text-[#c9a227] mb-4">General Objection Handling Tips</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { tip: 'Listen First', desc: 'Let them finish. Never interrupt an objection.' },
            { tip: 'Empathize', desc: '"I understand" or "That makes sense" before responding.' },
            { tip: 'Clarify', desc: 'Ask questions to understand the real concern.' },
            { tip: 'Isolate', desc: '"If we solved this, would you be ready to move forward?"' },
            { tip: 'Use Stories', desc: '"Another merchant had the same concern, and here\'s what happened..."' },
            { tip: 'Stay Positive', desc: 'Never argue. Objections mean they\'re considering it.' },
          ].map((item) => (
            <div key={item.tip} className="bg-slate-800/50 rounded-lg p-3">
              <p className="font-bold text-white text-sm">{item.tip}</p>
              <p className="text-xs text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// PROCESS TAB
// ============================================
function ProcessTab() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-white mb-2">Sales Process</h2>
        <p className="text-slate-400">From lead to closed deal</p>
      </div>

      {/* Sales Funnel */}
      <div className="bg-slate-800/30 rounded-xl p-8">
        <h3 className="text-xl font-black text-white mb-6">Sales Funnel</h3>

        <div className="space-y-4">
          {[
            {
              stage: 'Lead Generation',
              color: 'blue',
              activities: ['Area mapping', 'Google Maps research', 'Referrals from signed merchants', 'Walk-by prospecting'],
              target: '50 leads/week',
            },
            {
              stage: 'Initial Contact',
              color: 'purple',
              activities: ['Cold call or walk-in', 'Quick value pitch', 'Qualify interest level', 'Schedule demo/follow-up'],
              target: '30 contacts/week',
            },
            {
              stage: 'Demo & Presentation',
              color: 'amber',
              activities: ['Show app demo', 'Explain commission model', 'Share success stories', 'Handle objections'],
              target: '15 demos/week',
            },
            {
              stage: 'Proposal & Close',
              color: 'emerald',
              activities: ['Present package options', 'ROI calculation', 'Address final concerns', 'Get commitment'],
              target: '8 closes/week',
            },
            {
              stage: 'Onboarding',
              color: 'pink',
              activities: ['Sign agreement', 'Staff training', 'Setup QR/materials', 'First transaction support'],
              target: '8 onboards/week',
            },
          ].map((stage, index) => (
            <div key={stage.stage} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full bg-${stage.color}-500/20 flex items-center justify-center`}>
                  <span className={`text-${stage.color}-400 font-black`}>{index + 1}</span>
                </div>
                {index < 4 && <div className={`w-0.5 h-full bg-${stage.color}-500/30 mt-2`} />}
              </div>
              <div className={`flex-1 bg-${stage.color}-500/10 border border-${stage.color}-500/30 rounded-xl p-4 mb-4`}>
                <div className="flex items-center justify-between mb-3">
                  <h4 className={`font-bold text-${stage.color}-400`}>{stage.stage}</h4>
                  <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">{stage.target}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {stage.activities.map((activity) => (
                    <div key={activity} className="flex items-center gap-2 text-sm text-slate-300">
                      <ChevronRight className="w-3 h-3 text-slate-500" />
                      {activity}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Schedule */}
      <div className="bg-slate-800/30 rounded-xl p-8">
        <h3 className="text-xl font-black text-white mb-6">Ideal Daily Schedule</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-[#c9a227] mb-4">Morning (9AM - 1PM)</h4>
            <div className="space-y-2">
              {[
                { time: '9:00-9:30', task: 'Review pipeline, plan route' },
                { time: '9:30-12:30', task: 'Field visits (target 8-10 merchants)' },
                { time: '12:30-1:00', task: 'Lunch break' },
              ].map((item) => (
                <div key={item.time} className="flex items-center gap-3 bg-slate-700/30 rounded-lg p-3">
                  <Clock className="w-4 h-4 text-slate-500" />
                  <span className="text-xs text-[#c9a227] w-20">{item.time}</span>
                  <span className="text-sm text-slate-300">{item.task}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#c9a227] mb-4">Afternoon (1PM - 6PM)</h4>
            <div className="space-y-2">
              {[
                { time: '1:00-4:00', task: 'Field visits (target 6-8 merchants)' },
                { time: '4:00-5:00', task: 'Follow-up calls & emails' },
                { time: '5:00-6:00', task: 'CRM updates, next day planning' },
              ].map((item) => (
                <div key={item.time} className="flex items-center gap-3 bg-slate-700/30 rounded-lg p-3">
                  <Clock className="w-4 h-4 text-slate-500" />
                  <span className="text-xs text-[#c9a227] w-20">{item.time}</span>
                  <span className="text-sm text-slate-300">{item.task}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* KPIs */}
      <div className="bg-gradient-to-br from-[#c9a227]/10 to-amber-500/10 border border-[#c9a227]/30 rounded-xl p-8">
        <h3 className="text-xl font-black text-[#c9a227] mb-6">Sales KPIs</h3>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            { metric: 'Visits/Day', target: '15-20', desc: 'Field visits' },
            { metric: 'Demos/Week', target: '15+', desc: 'Full presentations' },
            { metric: 'Close Rate', target: '50%+', desc: 'Demo to signed' },
            { metric: 'Signs/Week', target: '8+', desc: 'New merchants' },
          ].map((kpi) => (
            <div key={kpi.metric} className="bg-slate-800/50 rounded-lg p-4 text-center">
              <p className="text-3xl font-black text-[#c9a227]">{kpi.target}</p>
              <p className="font-semibold text-white">{kpi.metric}</p>
              <p className="text-xs text-slate-500">{kpi.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// MATERIALS TAB
// ============================================
function MaterialsTab() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-white mb-2">Sales Materials</h2>
        <p className="text-slate-400">Everything you need in the field</p>
      </div>

      {/* Digital Materials */}
      <div className="bg-slate-800/30 rounded-xl p-8">
        <h3 className="text-xl font-black text-white mb-6">Digital Materials</h3>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            { name: 'Engine A Merchant Deck', link: '/deck-merchant', desc: 'For cafes, restaurants, salons' },
            { name: 'Engine B Merchant Deck', link: '/deck-merchant-b', desc: 'For supermarkets, electronics' },
            { name: 'Cafe-Specific Deck', link: '/deck-cafe', desc: 'F&B tailored pitch' },
            { name: 'Salon-Specific Deck', link: '/deck-salon', desc: 'Beauty/wellness pitch' },
            { name: 'Supermarket Deck', link: '/deck-supermarket', desc: 'Grocery pitch' },
            { name: 'Gold/Jewelry Deck', link: '/deck-gold', desc: 'Jewelry store pitch' },
            { name: 'Contract Templates', link: '/contracts', desc: 'All agreement types' },
            { name: 'Business Playbook', link: '/business-playbook', desc: 'Full execution guide' },
          ].map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="flex items-center justify-between bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-colors"
            >
              <div>
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-xs text-slate-400">{item.desc}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-[#c9a227]" />
            </a>
          ))}
        </div>
      </div>

      {/* Physical Materials Checklist */}
      <div className="bg-slate-800/30 rounded-xl p-8">
        <h3 className="text-xl font-black text-white mb-6">Field Kit Checklist</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-[#c9a227] mb-4">Must Have</h4>
            <ul className="space-y-2">
              {[
                'Charged phone with Nuqta app',
                'Business cards',
                'Printed one-pagers (10-20)',
                'Sample QR code stand',
                'Portable charger',
                'Notebook & pen',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#c9a227] mb-4">Nice to Have</h4>
            <ul className="space-y-2">
              {[
                'Tablet for larger demos',
                'Branded polo/shirt',
                'Window stickers (samples)',
                'Table tent samples',
                'Small gift (chocolate/candy)',
                'Umbrella (UAE weather!)',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Quick Reference Card */}
      <div className="bg-gradient-to-br from-[#c9a227]/10 to-amber-500/10 border border-[#c9a227]/30 rounded-xl p-8">
        <h3 className="text-xl font-black text-[#c9a227] mb-6">Quick Reference: Key Numbers</h3>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            { label: 'Engine A Commission', value: '15-20%' },
            { label: 'Engine B Commission', value: '5-8%' },
            { label: 'Starter Package', value: 'FREE' },
            { label: 'Growth Package', value: 'AED 999/mo' },
            { label: 'Premium Package', value: 'AED 2,499/mo' },
            { label: 'Settlement Time', value: 'T+2 days' },
            { label: 'Setup Time', value: '15 minutes' },
            { label: 'Contract Term', value: '12 months' },
          ].map((item) => (
            <div key={item.label} className="bg-slate-800/50 rounded-lg p-3 text-center">
              <p className="text-xs text-slate-400">{item.label}</p>
              <p className="text-lg font-black text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
