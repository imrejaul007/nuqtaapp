'use client';

import React, { useState } from 'react';
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
  AlertCircle,
  Phone,
  Mail,
  Clock,
  Bookmark,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Building2,
  Zap,
  Shield
} from 'lucide-react';

/**
 * GV SALES PLAYBOOK
 * Interactive sales guide for Global Village partnership
 * Brand colors: #c9a227 (gold), #0a1628 (dark blue)
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
          <div className="w-10 h-10 rounded-xl bg-[#c9a227]/20 flex items-center justify-center">
            <Icon className="text-[#c9a227]" size={20} />
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

interface ChecklistItemProps {
  children: React.ReactNode;
}

const ChecklistItem = ({ children }: ChecklistItemProps) => {
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

const GVSalesPlaybook = () => {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#c9a227]/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 rounded-full mb-6">
              <Target className="text-[#c9a227]" size={16} />
              <span className="text-[#c9a227] text-sm font-medium">Internal Sales Guide</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              NUQTA × <span className="text-[#c9a227]">GLOBAL VILLAGE</span>
            </h1>
            <p className="text-slate-400 text-lg">Complete Sales Playbook</p>
            <p className="text-slate-500 text-sm mt-2">From First Contact to Signed Deal</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-32">

        {/* Part 1: Pre-Meeting */}
        <div className="mb-8">
          <h2 className="text-[#c9a227] text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#c9a227] text-[#0a1628] flex items-center justify-center text-xs font-black">1</span>
            Pre-Meeting Preparation
          </h2>

          <CollapsibleSection title="Research Checklist" icon={Users} defaultOpen={true}>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-3">About the Person You&apos;re Meeting</h4>
                <div className="space-y-1">
                  <ChecklistItem>Full name and exact title</ChecklistItem>
                  <ChecklistItem>LinkedIn profile reviewed</ChecklistItem>
                  <ChecklistItem>How long at GV?</ChecklistItem>
                  <ChecklistItem>Previous companies/roles</ChecklistItem>
                  <ChecklistItem>Any mutual connections?</ChecklistItem>
                  <ChecklistItem>Recent posts/articles they&apos;ve shared</ChecklistItem>
                  <ChecklistItem>Their decision-making power</ChecklistItem>
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3">About Global Village</h4>
                <div className="space-y-1">
                  <ChecklistItem>Current season dates (Oct-Apr typically)</ChecklistItem>
                  <ChecklistItem>This season&apos;s visitor numbers (target: 7M+)</ChecklistItem>
                  <ChecklistItem>Number of pavilions and merchants (~30 pavilions, 500+ merchants)</ChecklistItem>
                  <ChecklistItem>Ticket price (AED 25-30)</ChecklistItem>
                  <ChecklistItem>Any recent news or announcements</ChecklistItem>
                  <ChecklistItem>Current loyalty/rewards programs (if any)</ChecklistItem>
                  <ChecklistItem>Their app features and ratings</ChecklistItem>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Materials to Prepare" icon={FileText}>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-3">Must Have (Bring to Every Meeting)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left text-[#c9a227] font-medium py-2">Material</th>
                        <th className="text-left text-[#c9a227] font-medium py-2">Format</th>
                        <th className="text-left text-[#c9a227] font-medium py-2">Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      <tr className="border-b border-white/5">
                        <td className="py-2 font-medium">GV Partnership Deck</td>
                        <td className="py-2">iPad/Laptop + PDF</td>
                        <td className="py-2">Main presentation</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-2 font-medium">One-Pager</td>
                        <td className="py-2">Printed (5 copies)</td>
                        <td className="py-2">Leave-behind</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-2 font-medium">Pilot Proposal</td>
                        <td className="py-2">Printed (3 copies)</td>
                        <td className="py-2">Specific ask</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-2 font-medium">Business Card</td>
                        <td className="py-2">Physical</td>
                        <td className="py-2">Contact exchange</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Phone</td>
                        <td className="py-2">Charged 100%</td>
                        <td className="py-2">App demo</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-[#c9a227]/10 rounded-xl p-4 border border-[#c9a227]/20">
                <h4 className="text-[#c9a227] font-semibold mb-2">One-Pager Key Points</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• 7M visitors, unpredictable spending</li>
                  <li>• Every ticket = GV Coins (AED 30 value)</li>
                  <li>• Coins unlock on AED 300+ spend</li>
                  <li>• GV gets 10% of Nuqta revenue (AED 300K-1.5M)</li>
                  <li>• Zero cost, zero risk pilot</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Day-Before Checklist" icon={Calendar}>
            <div className="space-y-1">
              <ChecklistItem>Confirm meeting time and location</ChecklistItem>
              <ChecklistItem>Know exactly where to go (building, floor, room)</ChecklistItem>
              <ChecklistItem>Parking situation sorted</ChecklistItem>
              <ChecklistItem>All materials printed and organized</ChecklistItem>
              <ChecklistItem>Laptop/iPad charged</ChecklistItem>
              <ChecklistItem>Deck loads properly (test it)</ChecklistItem>
              <ChecklistItem>Phone charged</ChecklistItem>
              <ChecklistItem>Dressed appropriately (business casual for Dubai)</ChecklistItem>
              <ChecklistItem>Arrive 15 minutes early planned</ChecklistItem>
              <ChecklistItem>Emergency contact number for the person</ChecklistItem>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 2: Objection Handling */}
        <div className="mb-8">
          <h2 className="text-[#c9a227] text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#c9a227] text-[#0a1628] flex items-center justify-center text-xs font-black">2</span>
            Objection Handling
          </h2>

          <CollapsibleSection title="The 10 Objections You'll Face" icon={Shield} defaultOpen={true}>
            <div className="space-y-4">
              {[
                {
                  objection: "We don't know you / You're too small",
                  response: "That's why we propose a zero-risk pilot. One pavilion, 2 weekends. If it fails, you've lost nothing. If it works, you have real data to scale."
                },
                {
                  objection: "We can build this ourselves",
                  response: "Building costs AED 2-5M and 12-18 months. With Nuqta, you're live in 2 weeks at AED 0. Pilot with us first - if you love the model, you can always build later with real data."
                },
                {
                  objection: "Our merchants won't pay 5-8%",
                  response: "They only pay on Nuqta-driven sales. Zero customers = zero fee. They're already paying 15-30% to delivery apps. Plus, AED 300 minimum means higher AOV - they make more even after commission."
                },
                {
                  objection: "Visitors won't download another app",
                  response: "Their AED 30 ticket becomes free money. Coins expire in 24 hours - FOMO drives downloads. Plus, Nuqta works across all of UAE, not just GV. Download once, use everywhere."
                },
                {
                  objection: "What if it hurts our brand?",
                  response: "It's co-branded 'GV Rewards powered by Nuqta'. You approve all messaging. Kill switch available - 7-day termination. Pilot limits exposure to one pavilion."
                },
                {
                  objection: "We're talking to someone else",
                  response: "Great - let's pilot alongside them. Different pavilions, let results decide. Are they offering zero cost, 10% revenue share, and 2-week launch?"
                },
                {
                  objection: "We need board approval",
                  response: "Happy to prepare a board one-pager. Can we do a small operational pilot first, then take real data to the board?"
                },
                {
                  objection: "Timing isn't right",
                  response: "This requires AED 0 budget. Let's sign LOI now, launch when ready. Or pilot in the last month as a test run for next season."
                },
                {
                  objection: "We tried this before and it failed",
                  response: "What went wrong? Our model is designed to avoid common failures - app-based logging (no POS integration), coin expiry (no liability), revenue share (aligned incentives). Zero risk to try a different approach."
                },
                {
                  objection: "We want exclusivity",
                  response: "We can offer seasonal exclusivity - no competing winter events. You also get preferred 10% revenue share locked in forever as our first major partner."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-400 text-xs font-bold">{idx + 1}</span>
                    </div>
                    <p className="text-white font-medium">&quot;{item.objection}&quot;</p>
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

        {/* Part 3: During Meeting */}
        <div className="mb-8">
          <h2 className="text-[#c9a227] text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#c9a227] text-[#0a1628] flex items-center justify-center text-xs font-black">3</span>
            During the Meeting
          </h2>

          <CollapsibleSection title="Meeting Structure" icon={Clock}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-[#c9a227] font-medium py-2">Phase</th>
                    <th className="text-left text-[#c9a227] font-medium py-2">Time</th>
                    <th className="text-left text-[#c9a227] font-medium py-2">Goal</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-medium">Intro & Rapport</td>
                    <td className="py-2">5 min</td>
                    <td className="py-2">Build connection</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-medium">Discovery</td>
                    <td className="py-2">10 min</td>
                    <td className="py-2">Understand their needs</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-medium">Presentation</td>
                    <td className="py-2">15 min</td>
                    <td className="py-2">Show the opportunity</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-medium">Discussion</td>
                    <td className="py-2">15 min</td>
                    <td className="py-2">Handle questions</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Close</td>
                    <td className="py-2">5 min</td>
                    <td className="py-2">Get next step commitment</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="60-Second Pitch" icon={Zap}>
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-transparent rounded-xl p-4 border border-[#c9a227]/30">
              <p className="text-white leading-relaxed">
                &quot;Nuqta is a loyalty platform that turns every GV ticket into guaranteed spending. Here&apos;s the simple version: when someone buys an AED 30 ticket, they get AED 30 in GV Coins. But they can only use those coins if they spend AED 300 or more. This means every visitor is now motivated to spend more, and you get full visibility into what they&apos;re buying. We&apos;re proposing a zero-cost pilot with India Pavilion - if it works, you could see AED 200-400M in tracked GMV and earn 10% of our revenue. If it doesn&apos;t work, you&apos;ve lost nothing.&quot;
              </p>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Discovery Questions" icon={MessageSquare}>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-2">About Their Priorities</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>1. &quot;What are the biggest challenges you&apos;re focused on this season?&quot;</li>
                  <li>2. &quot;How do you currently track visitor spending inside the park?&quot;</li>
                  <li>3. &quot;What feedback do you get from merchants about traffic and sales?&quot;</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">About Decision Process</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>4. &quot;If this looks interesting, what would the decision process look like?&quot;</li>
                  <li>5. &quot;Who else would need to be involved in evaluating this?&quot;</li>
                  <li>6. &quot;What timeline are you working with for new initiatives?&quot;</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Closing Scripts" icon={Target}>
            <div className="space-y-4">
              <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="text-green-400" size={18} />
                  <h4 className="text-green-400 font-semibold">If They&apos;re Positive</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  &quot;Great! Can we schedule a follow-up next week to discuss the pilot details? I&apos;ll send over the proposal document today.&quot;
                </p>
              </div>

              <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="text-yellow-400" size={18} />
                  <h4 className="text-yellow-400 font-semibold">If They Need to Think</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  &quot;Totally understand. When would be a good time for me to follow up? I&apos;ll send you the one-pager and pilot proposal to review.&quot;
                </p>
              </div>

              <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="text-red-400" size={18} />
                  <h4 className="text-red-400 font-semibold">If They&apos;re Skeptical</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  &quot;I hear your concerns. Would it help if I addressed [specific concern]? Or perhaps we could do an even smaller test - just one weekend?&quot;
                </p>
              </div>

              <div className="bg-[#c9a227]/10 rounded-xl p-4 border border-[#c9a227]/30">
                <h4 className="text-[#c9a227] font-semibold mb-2">Never Leave Without:</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>✓ A clear next step</li>
                  <li>✓ A date/time for follow-up</li>
                  <li>✓ Their direct contact (email/phone)</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 4: Post-Meeting */}
        <div className="mb-8">
          <h2 className="text-[#c9a227] text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#c9a227] text-[#0a1628] flex items-center justify-center text-xs font-black">4</span>
            Post-Meeting Actions
          </h2>

          <CollapsibleSection title="Follow-Up Cadence" icon={TrendingUp}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-[#c9a227] font-medium py-2">Day</th>
                    <th className="text-left text-[#c9a227] font-medium py-2">Action</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-medium text-white">Day 0</td>
                    <td className="py-2">Thank you email + materials</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-medium text-white">Day 3</td>
                    <td className="py-2">Check-in: &quot;Just checking if you had a chance to review...&quot;</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-medium text-white">Day 7</td>
                    <td className="py-2">Call + email: &quot;Following up on our conversation...&quot;</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-medium text-white">Day 14</td>
                    <td className="py-2">Value-add: Share relevant article/news</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-medium text-white">Day 21</td>
                    <td className="py-2">Direct ask: &quot;What&apos;s holding us back?&quot;</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium text-white">Day 30</td>
                    <td className="py-2">Last attempt: &quot;Closing the loop...&quot;</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Email Templates" icon={Mail}>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-white font-semibold mb-2">Thank You Email (Day 0)</h4>
                <p className="text-slate-500 text-xs mb-2">Subject: Great meeting today - Nuqta × GV Partnership</p>
                <div className="bg-[#0a1628] rounded-lg p-3 text-slate-300 text-sm font-mono">
                  <p>Hi [Name],</p>
                  <br />
                  <p>Thank you for taking the time to meet today. I really enjoyed learning about [something specific they mentioned].</p>
                  <br />
                  <p>As discussed, I&apos;m attaching:</p>
                  <p>1. The one-pager summary</p>
                  <p>2. The pilot proposal for India Pavilion</p>
                  <br />
                  <p>Next step: [Whatever was agreed]</p>
                  <br />
                  <p>Best regards,</p>
                  <p>Rejaul Karim</p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-white font-semibold mb-2">Break-Up Email (Day 30)</h4>
                <p className="text-slate-500 text-xs mb-2">Subject: Closing the loop</p>
                <div className="bg-[#0a1628] rounded-lg p-3 text-slate-300 text-sm font-mono">
                  <p>Hi [Name],</p>
                  <br />
                  <p>I&apos;ve reached out a few times and haven&apos;t heard back, so I&apos;ll assume the timing isn&apos;t right for this partnership.</p>
                  <br />
                  <p>No hard feelings at all - I&apos;ll close this out for now.</p>
                  <br />
                  <p>If things change in the future, my door is always open. Would love to revisit for the next GV season.</p>
                  <br />
                  <p>Best,</p>
                  <p>Rejaul</p>
                </div>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 5: Key Stats */}
        <div className="mb-8">
          <h2 className="text-[#c9a227] text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#c9a227] text-[#0a1628] flex items-center justify-center text-xs font-black">5</span>
            Quick Reference
          </h2>

          <CollapsibleSection title="Key Stats to Remember" icon={Bookmark} defaultOpen={true}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: 'GV Visitors/Season', value: '7M' },
                { label: 'Ticket Price', value: 'AED 25-30' },
                { label: 'Pavilions', value: '~30' },
                { label: 'Merchants', value: '500+' },
                { label: 'GV Total GMV', value: '~AED 2B' },
                { label: 'Nuqta GMV Tracked', value: 'AED 200-400M' },
                { label: 'GV Revenue Share', value: '10%' },
                { label: 'GV Potential Revenue', value: 'AED 300K-1.5M' },
                { label: 'Pilot Location', value: 'India Pavilion' },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                  <p className="text-[#c9a227] text-lg sm:text-xl font-bold">{stat.value}</p>
                  <p className="text-slate-400 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Power Phrases" icon={Zap}>
            <div className="space-y-2">
              {[
                'Zero cost, zero risk, all upside',
                "You don't pay unless it works",
                'Pilot first, scale later',
                'You control the rules, we execute',
                'Every transaction tracked, not just redemptions',
                'Free marketing to 500K+ users'
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
                  '"We need this deal"',
                  '"Our valuation will..."',
                  '"Trust me"',
                  '"This is guaranteed to work"'
                ].map((phrase, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-red-500/10 rounded-lg px-3 py-2 border border-red-500/20">
                    <XCircle className="text-red-400 flex-shrink-0" size={16} />
                    <p className="text-slate-300 text-sm">{phrase}</p>
                  </div>
                ))}
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Emergency Scenarios" icon={AlertCircle}>
            <div className="space-y-3">
              {[
                { scenario: 'They Cancel Last Minute', response: '"No problem at all. When would work better for you? I\'m flexible this week."' },
                { scenario: 'They\'re Distracted', response: '"I notice you might have something urgent. Should we reschedule to a time when you can fully focus?"' },
                { scenario: 'Someone Unexpected Joins', response: '"Great to meet you. Would you like me to give a quick summary of what we\'ve covered so far?"' },
                { scenario: 'Tech Fails', response: 'Always have PDF backup. Can present from phone. Worst case: talk through one-pager.' },
                { scenario: 'Running Out of Time', response: '"I\'m mindful of your time. Let me jump to the most important point - the pilot proposal - and I can send the rest by email."' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-3 border border-white/10">
                  <p className="text-yellow-400 font-medium text-sm mb-1">{item.scenario}</p>
                  <p className="text-slate-300 text-sm">{item.response}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Contact Footer */}
        <div className="bg-gradient-to-r from-[#c9a227]/20 to-transparent rounded-2xl p-6 border border-[#c9a227]/30 text-center">
          <Building2 className="text-[#c9a227] mx-auto mb-3" size={32} />
          <h3 className="text-white font-bold text-lg mb-2">Ready for the Meeting?</h3>
          <p className="text-slate-400 text-sm mb-4">Access the pitch deck and other materials</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/deck-gv" className="px-4 py-2 bg-[#c9a227] text-[#0a1628] rounded-full font-semibold text-sm hover:bg-[#d4b03f] transition-colors">
              View GV Deck
            </a>
            <a href="/data-room" className="px-4 py-2 bg-white/10 text-white rounded-full font-semibold text-sm hover:bg-white/20 transition-colors">
              Data Room
            </a>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-4 justify-center text-sm">
            <div className="flex items-center gap-2 text-slate-400">
              <Mail size={14} />
              <span>rejaul@nuqtapp.com</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Phone size={14} />
              <span>+971 50 376 4345</span>
            </div>
          </div>
        </div>

        {/* Version */}
        <p className="text-center text-slate-600 text-xs mt-8">
          Version 1.0 • Last Updated: February 2026
        </p>
      </div>
    </div>
  );
};

export default GVSalesPlaybook;
