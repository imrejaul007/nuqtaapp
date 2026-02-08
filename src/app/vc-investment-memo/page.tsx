'use client';

import React, { useState } from 'react';
import {
  Building2,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Target,
  BarChart3,
  PieChart,
  LineChart,
  DollarSign,
  Users,
  Store,
  Shield,
  Briefcase,
  Scale,
  Clock,
  Calendar,
  Zap,
  Globe,
  Award,
  FileText,
  ThumbsUp,
  ThumbsDown,
  AlertCircle,
  ChevronDown,
  ChevronRight,
  Star,
  Flag,
  Percent,
  ArrowRight,
  ArrowUpRight,
  Rocket,
  Eye,
  Lock,
  UserPlus,
  Handshake,
  CircleDollarSign,
  Gauge,
  Activity,
  Crown,
  Gavel
} from 'lucide-react';

// ========================================
// INSTITUTIONAL VC INVESTMENT MEMO
// ========================================

interface ScoreItem {
  category: string;
  grade: string;
  score: number;
  reasoning: string;
}

const investmentScorecard: ScoreItem[] = [
  { category: 'Market Opportunity', grade: 'A-', score: 88, reasoning: '$35B GCC SAM validated, real problem (AED 2.4B waste in broken loyalty)' },
  { category: 'Product Differentiation', grade: 'A', score: 92, reasoning: 'POS moat + habit loops + event infrastructure = defensible' },
  { category: 'Unit Economics', grade: 'A', score: 95, reasoning: '16.8x LTV:CAC target, 2-month payback, exceptional if validated' },
  { category: 'Business Model', grade: 'A-', score: 88, reasoning: 'Two-engine architecture (High vs Low margin merchants) is sophisticated' },
  { category: 'Competitive Position', grade: 'B+', score: 78, reasoning: '12-18 month window before Careem can copy, POS creates switching cost' },
  { category: 'Team', grade: 'C+', score: 58, reasoning: '4 filled C-suite (CEO, CTO, CMO, CHRO) but still hiring critical roles' },
  { category: 'Traction', grade: 'C+', score: 62, reasoning: '32 LOIs positive but zero live users/revenue until launch' },
  { category: 'Execution Plan', grade: 'B+', score: 82, reasoning: 'H1 roadmap is detailed, 90-day sprints well-defined' },
  { category: 'Financial Rigor', grade: 'B', score: 75, reasoning: 'Comprehensive models, some inconsistencies fixed, needs validation' },
  { category: 'Regulatory Path', grade: 'B-', score: 68, reasoning: 'SVF license complex but not blocking, conservative model excludes float' }
];

const marketData = {
  tam: { value: '$23.7B', label: 'GCC Local Commerce + Loyalty', source: 'IMARC Group 2024' },
  sam: { value: '$11.2B', label: 'UAE E-Commerce + Loyalty', source: 'UAE Market Analysis' },
  som: { value: '$1.2B', label: '3-Year GMV Target', source: 'Bottom-up calculation' }
};

const competitorAnalysis = [
  { name: 'Careem Rewards', users: '3M', merchants: '50K+', threat: 'MEDIUM-HIGH', moat: 'Distribution + Brand', weakness: 'Conflicts with own wallet' },
  { name: 'Tabby', users: '500K+', merchants: '3K+', threat: 'LOW', moat: 'BNPL leader', weakness: 'No discovery layer' },
  { name: 'Spotpay', users: 'N/A', merchants: '1.5K+', threat: 'LOW', moat: 'QR efficiency (AED 12 CAC)', weakness: 'Pure cashback, no moats' },
  { name: 'Yalla', users: 'N/A', merchants: 'N/A', threat: 'LOW', moat: 'Gamified cashback', weakness: 'Declining engagement' }
];

const riskMatrix = [
  { risk: 'Runway Crisis', probability: 'High if SAFE fails', impact: 'Fatal', severity: 'critical', mitigation: 'Close SAFE immediately, reduce burn, explore bridge' },
  { risk: 'Unit Economics Unvalidated', probability: 'Medium', impact: 'High', severity: 'high', mitigation: 'Build cohort tracking Day 1, present as targets not proven' },
  { risk: 'Careem Competitive Response', probability: '60%', impact: 'High', severity: 'high', mitigation: 'First-mover on POS, reach 50K users before they copy' },
  { risk: 'Failed Series A Raise', probability: '35%', impact: 'Fatal', severity: 'critical', mitigation: 'Hit traction milestones, maintain 12+ month runway' },
  { risk: 'SVF License Delayed', probability: '25%', impact: 'Medium', severity: 'medium', mitigation: 'Model excludes float revenue, pure cashback fallback' },
  { risk: 'Merchant Churn >20%', probability: '30%', impact: 'High', severity: 'high', mitigation: 'POS lock-in, proactive success team, monitor D180 retention' }
];

const returnScenarios = [
  { scenario: 'Base Case', probability: '50%', year5Revenue: 'AED 118M', exitValuation: '$950M-1.2B', returnMultiple: '100-175x' },
  { scenario: 'Bull Case', probability: '20%', year5Revenue: 'AED 150M+', exitValuation: '$1.5B', returnMultiple: '150-200x' },
  { scenario: 'Conservative', probability: '20%', year5Revenue: 'AED 70M', exitValuation: '$700-800M', returnMultiple: '70-100x' },
  { scenario: 'Downside', probability: '10%', year5Revenue: 'Failure', exitValuation: '$0-100M', returnMultiple: '0-5x' }
];

const diligenceQuestions = [
  { question: 'Is founder full-time on Nuqta or running other ventures?', category: 'Team' },
  { question: 'What\'s the co-founder/CTO hiring timeline and candidates identified?', category: 'Team' },
  { question: 'Show working MVP - what % complete and what\'s missing for launch?', category: 'Product' },
  { question: 'Of 32 LOIs, how many have confirmed integration timelines?', category: 'Traction' },
  { question: 'Show any pilot data (events, campuses) - actual CAC and activation rates?', category: 'Validation' },
  { question: 'Agree model shows AED 2.95M GMV base (not AED 10M deck) is realistic?', category: 'Financials' },
  { question: 'Have you measured real CAC from any channel?', category: 'Unit Economics' },
  { question: 'When Careem adds POS integrations, what\'s your defensibility?', category: 'Competition' },
  { question: 'SVF license timeline and legal counsel identified?', category: 'Regulatory' },
  { question: 'If growth slower than modeled, what\'s the runway extension plan?', category: 'Contingency' }
];

export default function VCInvestmentMemoPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>('verdict');

  const overallScore = Math.round(investmentScorecard.reduce((acc, item) => acc + item.score, 0) / investmentScorecard.length);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full mb-4">
              <Building2 className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">Institutional VC Investment Memo</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Nuqta Investment<br />Due Diligence Report
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Comprehensive analysis for Investment Committee review
            </p>
          </div>

          {/* Deal Summary */}
          <div className="max-w-4xl mx-auto bg-white/5 rounded-2xl border border-white/10 p-6 sm:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="text-white/60 text-sm mb-1">Company</div>
                <div className="text-white font-bold">Nuqta</div>
              </div>
              <div className="text-center">
                <div className="text-white/60 text-sm mb-1">Stage</div>
                <div className="text-white font-bold">Pre-Seed</div>
              </div>
              <div className="text-center">
                <div className="text-white/60 text-sm mb-1">Ask</div>
                <div className="text-[#c9a227] font-bold">$400K SAFE</div>
              </div>
              <div className="text-center">
                <div className="text-white/60 text-sm mb-1">Cap</div>
                <div className="text-white font-bold">$5M</div>
              </div>
            </div>

            {/* Verdict Box */}
            <div className="bg-gradient-to-r from-amber-500/20 to-emerald-500/20 rounded-xl border border-amber-500/30 p-6 text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                <span className="text-amber-400">{overallScore}</span>
                <span className="text-white/40 text-2xl">/100</span>
              </div>
              <div className="text-white/80 text-lg font-medium mb-2">Investment Grade Score</div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium">
                <AlertTriangle className="w-4 h-4" />
                CONDITIONAL INVEST
              </div>
              <p className="text-white/60 text-sm mt-4 max-w-2xl mx-auto">
                Strong market opportunity with exceptional unit economics targets. Pre-product stage and hiring gaps
                create execution risk. Recommend investment with milestone-based tranches and governance rights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white/5 rounded-xl border border-white/10 p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#c9a227]" />
            Executive Summary
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                <ThumbsUp className="w-4 h-4" /> Investment Thesis
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Nuqta is a differentiated UAE fintech play targeting the $35B GCC loyalty & local commerce market
                with a sustainable, defensible business model built on merchant POS lock-in, habit loops, and incentive
                alignment. The market opportunity is validated by 32 merchant LOIs, unit economics are exceptional
                (16.8x LTV:CAC target), and the team demonstrates strong execution capability with 4 C-suite positions filled.
              </p>
            </div>

            <div>
              <h3 className="text-amber-400 font-semibold mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" /> Key Concerns
              </h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  Pre-product stage with zero users/revenue until launch
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  Limited runway (4-5 months) creates urgency
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  Unit economics are targets, not validated with real data
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  Careem competitive response risk in 12-18 months
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Scorecard */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Gauge className="w-5 h-5 text-blue-400" />
          Investment Scorecard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {investmentScorecard.map((item) => (
            <div
              key={item.category}
              className="bg-white/5 rounded-xl border border-white/10 p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">{item.category}</span>
                <div className="flex items-center gap-2">
                  <span className={`text-lg font-bold ${
                    item.score >= 85 ? 'text-emerald-400' :
                    item.score >= 70 ? 'text-blue-400' :
                    item.score >= 60 ? 'text-amber-400' :
                    'text-red-400'
                  }`}>
                    {item.grade}
                  </span>
                  <span className="text-white/40 text-sm">({item.score}%)</span>
                </div>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                <div
                  className={`h-full rounded-full ${
                    item.score >= 85 ? 'bg-emerald-500' :
                    item.score >= 70 ? 'bg-blue-500' :
                    item.score >= 60 ? 'bg-amber-500' :
                    'bg-red-500'
                  }`}
                  style={{ width: `${item.score}%` }}
                />
              </div>
              <p className="text-white/50 text-xs">{item.reasoning}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Globe className="w-5 h-5 text-emerald-400" />
          Market Opportunity (TAM/SAM/SOM)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-emerald-500/10 to-transparent rounded-xl border border-emerald-500/20 p-6 text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">{marketData.tam.value}</div>
            <div className="text-white font-medium mb-1">TAM</div>
            <div className="text-white/60 text-sm">{marketData.tam.label}</div>
            <div className="text-white/40 text-xs mt-2">Source: {marketData.tam.source}</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-transparent rounded-xl border border-blue-500/20 p-6 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">{marketData.sam.value}</div>
            <div className="text-white font-medium mb-1">SAM</div>
            <div className="text-white/60 text-sm">{marketData.sam.label}</div>
            <div className="text-white/40 text-xs mt-2">Source: {marketData.sam.source}</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl border border-purple-500/20 p-6 text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">{marketData.som.value}</div>
            <div className="text-white font-medium mb-1">SOM (3-Year)</div>
            <div className="text-white/60 text-sm">{marketData.som.label}</div>
            <div className="text-white/40 text-xs mt-2">Source: {marketData.som.source}</div>
          </div>
        </div>

        <div className="mt-6 bg-white/5 rounded-xl border border-white/10 p-4">
          <h3 className="font-semibold text-white mb-3">Market Validation</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#c9a227]">32</div>
              <div className="text-white/60 text-sm">Signed LOIs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">AED 2.4B</div>
              <div className="text-white/60 text-sm">Annual loyalty waste</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">95%</div>
              <div className="text-white/60 text-sm">Offline no rewards</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">AED 850K</div>
              <div className="text-white/60 text-sm">LOI GMV potential/mo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Landscape */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Target className="w-5 h-5 text-amber-400" />
          Competitive Landscape
        </h2>

        <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead className="bg-white/5">
                <tr>
                  <th className="text-left text-white/60 text-sm font-medium px-4 py-3">Competitor</th>
                  <th className="text-center text-white/60 text-sm font-medium px-4 py-3">Users</th>
                  <th className="text-center text-white/60 text-sm font-medium px-4 py-3">Merchants</th>
                  <th className="text-center text-white/60 text-sm font-medium px-4 py-3">Threat Level</th>
                  <th className="text-left text-white/60 text-sm font-medium px-4 py-3">Their Moat</th>
                  <th className="text-left text-white/60 text-sm font-medium px-4 py-3">Their Weakness</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {competitorAnalysis.map((comp) => (
                  <tr key={comp.name}>
                    <td className="px-4 py-3 text-white font-medium">{comp.name}</td>
                    <td className="px-4 py-3 text-center text-white/70">{comp.users}</td>
                    <td className="px-4 py-3 text-center text-white/70">{comp.merchants}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        comp.threat === 'LOW' ? 'bg-emerald-500/20 text-emerald-400' :
                        comp.threat === 'MEDIUM-HIGH' ? 'bg-amber-500/20 text-amber-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {comp.threat}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-white/70 text-sm">{comp.moat}</td>
                    <td className="px-4 py-3 text-emerald-400/80 text-sm">{comp.weakness}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20 p-4">
          <h3 className="font-semibold text-emerald-400 mb-2">Nuqta&apos;s Competitive Advantages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { title: 'Neutral Positioning', desc: 'Recommends ANY payment method (Careem can\'t)' },
              { title: 'POS Lock-In', desc: 'Free merchant POS creates switching cost' },
              { title: 'Offline-First', desc: 'Merchant QR = discovery moment competitors miss' },
              { title: 'Habit Loops', desc: '8+ app opens/month vs 2-3 for competitors' }
            ].map((adv, i) => (
              <div key={i} className="bg-white/5 rounded-lg p-3">
                <div className="font-medium text-white text-sm mb-1">{adv.title}</div>
                <div className="text-white/50 text-xs">{adv.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Shield className="w-5 h-5 text-red-400" />
          Risk Assessment Matrix
        </h2>

        <div className="space-y-4">
          {riskMatrix.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl border p-4 ${
                item.severity === 'critical' ? 'bg-red-500/10 border-red-500/20' :
                item.severity === 'high' ? 'bg-amber-500/10 border-amber-500/20' :
                'bg-blue-500/10 border-blue-500/20'
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <AlertTriangle className={`w-5 h-5 ${
                    item.severity === 'critical' ? 'text-red-400' :
                    item.severity === 'high' ? 'text-amber-400' :
                    'text-blue-400'
                  }`} />
                  <h3 className="font-semibold text-white">{item.risk}</h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium uppercase ${
                  item.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                  item.severity === 'high' ? 'bg-amber-500/20 text-amber-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {item.severity}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <div className="text-white/40 text-xs uppercase mb-1">Probability</div>
                  <div className="text-white/70 text-sm">{item.probability}</div>
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase mb-1">Impact</div>
                  <div className="text-white/70 text-sm">{item.impact}</div>
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase mb-1">Mitigation</div>
                  <div className="text-emerald-400/80 text-sm">{item.mitigation}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Return Scenarios */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-emerald-400" />
          Return Scenarios Analysis
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {returnScenarios.map((scenario) => (
            <div
              key={scenario.scenario}
              className={`rounded-xl border p-6 ${
                scenario.scenario === 'Base Case' ? 'bg-blue-500/10 border-blue-500/20' :
                scenario.scenario === 'Bull Case' ? 'bg-emerald-500/10 border-emerald-500/20' :
                scenario.scenario === 'Conservative' ? 'bg-amber-500/10 border-amber-500/20' :
                'bg-red-500/10 border-red-500/20'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-white">{scenario.scenario}</h3>
                <span className="text-white/60 text-sm">{scenario.probability}</span>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-white/40 text-xs">Y5 Revenue</div>
                  <div className="text-white font-medium">{scenario.year5Revenue}</div>
                </div>
                <div>
                  <div className="text-white/40 text-xs">Exit Valuation</div>
                  <div className="text-white font-medium">{scenario.exitValuation}</div>
                </div>
                <div>
                  <div className="text-white/40 text-xs">Return Multiple</div>
                  <div className={`text-xl font-bold ${
                    scenario.scenario === 'Downside' ? 'text-red-400' : 'text-emerald-400'
                  }`}>
                    {scenario.returnMultiple}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-xl border border-emerald-500/20 p-6 text-center">
          <div className="text-white/60 text-sm mb-2">Blended Expected Value</div>
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-400 mb-2">62x</div>
          <div className="text-white/60 text-sm">Expected return on $400K investment = ~$25M expected value</div>
        </div>
      </section>

      {/* Due Diligence Checklist */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Eye className="w-5 h-5 text-purple-400" />
          Due Diligence Questions
        </h2>

        <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
          {diligenceQuestions.map((item, index) => (
            <div key={index} className="flex items-start gap-4 p-4 border-b border-white/10 last:border-0">
              <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-medium flex-shrink-0">
                {index + 1}
              </span>
              <div className="flex-1">
                <p className="text-white">{item.question}</p>
                <span className="text-purple-400 text-xs">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Terms */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Gavel className="w-5 h-5 text-[#c9a227]" />
          Recommended Investment Terms
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-xl border border-white/10 p-6">
            <h3 className="font-semibold text-white mb-4">Deal Structure</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-white/70">Instrument</span>
                <span className="text-white font-medium">SAFE (Post-Money)</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-white/70">Investment Amount</span>
                <span className="text-[#c9a227] font-medium">$300-400K</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-white/70">Valuation Cap</span>
                <span className="text-white font-medium">$4M (vs $5M ask)</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-white/70">Discount</span>
                <span className="text-white font-medium">20%</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-white/70">Pro-Rata Rights</span>
                <span className="text-emerald-400 font-medium">Yes</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl border border-white/10 p-6">
            <h3 className="font-semibold text-white mb-4">Milestone-Based Tranches</h3>
            <div className="space-y-4">
              <div className="bg-emerald-500/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-emerald-400 font-medium">Tranche 1</span>
                  <span className="text-white font-bold">$200K</span>
                </div>
                <p className="text-white/60 text-sm">Immediate upon signing - MVP completion, team setup</p>
              </div>
              <div className="bg-amber-500/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-amber-400 font-medium">Tranche 2</span>
                  <span className="text-white font-bold">$200K</span>
                </div>
                <p className="text-white/60 text-sm">Upon hitting: 25+ live merchants, 5K MAU, all critical hires made</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white/5 rounded-xl border border-white/10 p-6">
          <h3 className="font-semibold text-white mb-4">Governance & Conditions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { term: 'Board Observer Seat', value: 'Lead investor' },
              { term: 'Monthly Reporting', value: 'KPI dashboard required' },
              { term: 'Quarterly Meetings', value: 'Formal board meetings' },
              { term: 'Critical Hire Timeline', value: 'COO within 90 days' },
              { term: 'Product Launch', value: 'Q1 2026 mandatory' },
              { term: 'Anti-Dilution', value: 'Broad-based standard' }
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-white/70">{item.term}</span>
                <span className="text-white font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Verdict */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-amber-500/10 to-emerald-500/10 rounded-2xl border border-amber-500/20 p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Investment Committee Verdict</h2>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-amber-500/20 border border-amber-500/30">
              <AlertTriangle className="w-6 h-6 text-amber-400" />
              <span className="text-xl font-bold text-amber-400">CONDITIONAL INVEST</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-emerald-500/10 rounded-xl p-6">
              <h3 className="font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                <ThumbsUp className="w-5 h-5" /> INVEST IF
              </h3>
              <ul className="space-y-2">
                {[
                  'Q1 2026 launch timeline confirmed',
                  'Product demo shown and validated',
                  'COO hire commitment within 90 days',
                  'Milestone-based tranches accepted',
                  '$4M cap agreed (vs $5M ask)'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-500/10 rounded-xl p-6">
              <h3 className="font-semibold text-red-400 mb-3 flex items-center gap-2">
                <ThumbsDown className="w-5 h-5" /> PASS IF
              </h3>
              <ul className="space-y-2">
                {[
                  'Launch delayed beyond Q2 2026',
                  'No product demo available',
                  'Founder rejects milestone tranches',
                  'Key hire plan not committed',
                  'SVF license pathway blocked'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center border-t border-white/10 pt-6">
            <p className="text-white/60 text-sm mb-4">
              Investment Committee Recommendation | February 2026
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/deck-kang"
                className="inline-flex items-center gap-2 bg-[#c9a227] hover:bg-[#d4af37] text-black px-6 py-3 rounded-xl font-semibold transition-all"
              >
                View Full Pitch Deck
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/data-room"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all"
              >
                Access Data Room
                <Lock className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
