'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Play, ArrowLeft, Clock, Copy, CheckCircle,
  Video, Mic, Camera, Smartphone, Target,
  AlertTriangle, Zap, Star
} from 'lucide-react';
import RezFooter from '@/components/RezFooter';

// ============================================
// ReZ VIDEO PITCH SCRIPTS — 60s, 90s, and 3-min versions
// For YC application, angel DMs, and accelerator submissions
// ============================================

export default function ReZVideoScriptPage() {
  const [activeScript, setActiveScript] = useState<'60s' | '90s' | '3min'>('60s');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const scripts = {
    '60s': {
      title: '60-Second Pitch',
      useFor: 'YC Application Video, Twitter DM follow-up, Quick intro',
      wordCount: '~150 words',
      script: `Hi, I'm Rejaul, founder of ReZ.

Indians spend 42 lakh crore rupees at local shops every year — and earn zero rewards. Meanwhile, merchants pay 25-30% commission to Swiggy and Zomato just to get customers.

ReZ fixes both problems.

We're building India's cashback ecosystem for local commerce. Here's how it works: merchants pay just 5% commission — six times cheaper than Swiggy. That 5% goes back to consumers as ReZ Coins — spendable at any merchant on our platform.

It's a closed-loop: more merchants means more places to earn coins, which brings more users, which brings more merchants.

Our unit economics are strong: 76 rupee CAC, 3,900 rupee LTV — that's a 51x ratio. No VC subsidy needed because merchants fund the rewards.

We're launching in Bangalore — 4 zones, 500+ merchants mapped, 12 acquisition channels including our signature college business fest program.

Raising 500K on a SAFE at 5 million dollar cap.

Let's talk.`,
    },
    '90s': {
      title: '90-Second Pitch',
      useFor: 'Accelerator applications, Demo Day practice, Investor meetings opener',
      wordCount: '~220 words',
      script: `Hi, I'm Rejaul, founder of ReZ — India's cashback ecosystem for local commerce.

Here's the problem: Indians spend 42 lakh crore rupees at local shops every year but earn zero rewards back. If you shop online, you get cashback, loyalty points, discounts. At your neighborhood darshini or kirana store? Nothing.

On the other side, merchants are stuck paying 25-30% commission to Swiggy and Zomato. Most local merchants can't afford digital customer acquisition at all.

ReZ solves both problems with one product.

Merchants join ReZ and pay just 5% commission — six times cheaper than Swiggy. That 5% is converted into ReZ Coins and given to consumers as cashback. Consumers discover local merchants on our app, order, earn coins, and spend those coins at ANY merchant on the platform.

It's a closed-loop economy. The flywheel is: more merchants → more coin-earning opportunities → more users join → more merchants want to be on ReZ.

The numbers work beautifully: 650 rupee average order, 195 rupees ARPU per month, CAC of just 76 rupees, and LTV of 3,900 rupees. That's a 51x LTV-to-CAC ratio. Merchants fund the entire rewards system — zero VC subsidy burn.

We're launching in Bangalore across BTM, HSR, Koramangala, and Jayanagar. 500+ merchants already mapped. 12 acquisition channels including college business fests, campus ambassadors, and WhatsApp viral loops.

Year 1: 35,000 users, 10 crore revenue.
Year 3: 5 million users, 601 crore revenue, 34% net margin.

We're raising 500K dollars on a SAFE at 5 million dollar cap.

I'd love to show you the full model.`,
    },
    '3min': {
      title: '3-Minute Deep Dive',
      useFor: 'Full investor pitch meeting, Demo Day presentation, Content video',
      wordCount: '~400 words',
      script: `Hi, I'm Rejaul Karim, founder of ReZ.

Let me paint you a picture. You go to your favorite local restaurant. You pay 650 rupees. You walk out. No points. No cashback. No rewards. Nothing.

Now imagine the same meal, but you earn ReZ Coins worth 20 rupees — spendable at the salon next door, the pharmacy down the street, or the café across the road. Every local merchant you visit earns you coins. Every coin can be spent anywhere in the ecosystem.

That's ReZ.

THE PROBLEM:
India's local commerce market is 42 lakh crore rupees — and it's the largest undigitized loyalty market in the world. Online shopping has cashback and points. Credit cards have CRED. But the 60 million local merchants serving 1.4 billion consumers? Zero rewards infrastructure.

From the merchant side, the problem is worse. Swiggy charges 25-30% commission. Most local merchants — your darshini, your kirana store, your neighborhood salon — simply can't afford digital customer acquisition.

THE SOLUTION:
ReZ charges merchants just 5% commission — six times cheaper than Swiggy. That 5% is converted into ReZ Coins and given to consumers. The merchant acquires a new customer for 5% instead of 30%. The consumer earns rewards on everyday local shopping for the first time.

The magic is the closed loop. ReZ Coins can only be spent within our ecosystem. This creates incredible stickiness — once you have coins at multiple merchants, you don't leave. It's like airline miles but for your neighborhood.

THE BUSINESS MODEL:
Six revenue streams. Transaction commission is the core — 5% of 650 rupee AOV times 5 orders per user per month equals 162 rupees monthly revenue per user. Add promoted listings, merchant subscriptions at 1,500 rupees per month, affiliate revenue, and user subscriptions.

ARPU: 195 rupees per month. LTV: 3,900 rupees over 20 months. CAC: just 76 rupees blended across 12 channels. That's a 51x LTV to CAC ratio. And critically — merchants fund the rewards. Zero VC subsidy.

TRACTION:
We're launching in Bangalore — 4 zones: BTM Layout, HSR Layout, Koramangala, and Jayanagar. Over 500 merchants mapped across 12 categories. Our signature acquisition channel is college business fests — we partner with 20 student businesses per event, give them 10,000 rupees each in inventory, students get 100 free ReZ Coins. Effective CAC: under 10 rupees. We're doing 10 fests in month one.

THE NUMBERS:
Year 1: 35,000 users, 500 merchants, 10 crore revenue, 6% net margin.
Year 2: 1.5 million users across 120 cities — aggressive expansion.
Year 3: 5 million users, 40,000 merchants, 601 crore revenue, 34% net margin, valued at over 700 million dollars.

THE ASK:
We're raising 500,000 dollars on a SAFE at 5 million dollar cap with a 20% discount. Your 25 lakh rupee investment today could be worth 2-3 crore in 3 years.

ReZ is building the rewards layer for India's local commerce. The market is massive, the timing is right, and the unit economics work from day one.

Let's build this together.`,
    },
  };

  const currentScript = scripts[activeScript];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-900/40 via-pink-900/30 to-red-900/40 border-b border-red-500/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <Link href="/rez-financials/investors" className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 mb-4 text-sm">
            <ArrowLeft size={16} /> Back to Investor Strategy
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-3"><Video size={28} className="text-red-400" /> Video Pitch Scripts</h1>
          <p className="text-slate-300 mt-1">3 versions: 60s (YC), 90s (Accelerators), 3-min (Full Pitch)</p>
        </div>
      </div>

      {/* Script Selector */}
      <div className="sticky top-0 z-10 bg-[#0a1628]/95 backdrop-blur border-b border-slate-700/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-2 flex gap-2">
          {[
            { id: '60s' as const, label: '60-Second', sub: 'YC / Quick Intro' },
            { id: '90s' as const, label: '90-Second', sub: 'Accelerators' },
            { id: '3min' as const, label: '3-Minute', sub: 'Full Pitch' },
          ].map(opt => (
            <button key={opt.id} onClick={() => setActiveScript(opt.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeScript === opt.id ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}>
              <span className="block">{opt.label}</span>
              <span className="text-xs text-slate-500">{opt.sub}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        {/* Script Info */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2"><Play size={20} className="text-red-400" /> {currentScript.title}</h2>
            <p className="text-sm text-slate-400 mt-1">Use for: {currentScript.useFor}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 flex items-center gap-1"><Clock size={12} /> {currentScript.wordCount}</span>
            <button onClick={() => handleCopy(currentScript.script, activeScript)}
              className="flex items-center gap-1.5 bg-red-500/20 text-red-400 px-4 py-2 rounded-lg border border-red-500/30 hover:bg-red-500/30 text-sm font-medium">
              {copiedText === activeScript ? <CheckCircle size={14} /> : <Copy size={14} />}
              {copiedText === activeScript ? 'Copied!' : 'Copy Script'}
            </button>
          </div>
        </div>

        {/* Script Content */}
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
          <pre className="text-sm text-slate-200 whitespace-pre-wrap font-sans leading-relaxed">
            {currentScript.script}
          </pre>
        </div>

        {/* Recording Tips */}
        <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
          <h3 className="text-red-400 font-bold mb-4 flex items-center gap-2"><Camera size={18} /> Recording Tips</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Camera, title: 'Camera Setup', tips: ['Phone camera in landscape mode is fine', 'Clean background (plain wall or bookshelf)', 'Natural lighting facing you (window in front)', 'Frame from chest up — head space above'] },
              { icon: Mic, title: 'Audio', tips: ['Quiet room — no fan/AC noise', 'AirPods or wired earphone mic is fine', 'Speak clearly at natural pace', 'Don\'t rush — pauses are okay'] },
              { icon: Smartphone, title: 'Delivery', tips: ['Look at camera lens, not screen', 'No reading from script (memorize key points)', 'Smile naturally — show energy', 'Gestures are good — don\'t be stiff'] },
              { icon: Star, title: 'YC-Specific Tips', tips: ['YC wants 1-minute MAX', 'Start with what you\'re building, not who you are', 'Show the product if possible (screen share)', 'Be specific with numbers — they love data'] },
            ].map(tip => (
              <div key={tip.title} className="bg-slate-800/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <tip.icon size={14} className="text-red-400" />
                  <span className="text-white font-bold text-sm">{tip.title}</span>
                </div>
                {tip.tips.map((t, i) => (
                  <p key={i} className="text-xs text-slate-400 flex items-start gap-1.5 mb-1">
                    <span className="text-red-400 mt-0.5">&#x2022;</span> {t}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Practice Checklist */}
        <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
          <h3 className="text-green-400 font-bold mb-3 flex items-center gap-2"><Zap size={18} /> Before You Record</h3>
          <div className="space-y-2">
            {[
              'Practice the script 5-10 times until it feels natural (not memorized)',
              'Time yourself — stay under the target duration',
              'Record 3-5 takes and pick the best one',
              'Watch without sound — does your body language convey confidence?',
              'Watch with sound — are you clear, concise, and compelling?',
              'Ask a friend to watch — do they understand ReZ in one viewing?',
              'Upload to YouTube (unlisted) or Google Drive for easy sharing',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <span className="text-green-400 mt-0.5">&#x25CB;</span>
                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <RezFooter />
    </div>
  );
}
