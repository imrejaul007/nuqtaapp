'use client';

import React, { useState } from 'react';
import {
  Beaker, TrendingUp, Target, CheckCircle, XCircle, Clock,
  AlertCircle, Zap, BarChart3, Users, Store, ArrowRight,
  Play, Pause, ChevronDown, ChevronUp, Lightbulb, Rocket,
  Filter, Plus, Calendar, Trophy, Percent, DollarSign
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// Experiment Status Types
type ExperimentStatus = 'proposed' | 'running' | 'completed' | 'paused' | 'killed';

// Experiment Data
interface Experiment {
  id: string;
  name: string;
  hypothesis: string;
  metric: string;
  baseline: string;
  target: string;
  category: 'acquisition' | 'activation' | 'retention' | 'revenue' | 'referral';
  status: ExperimentStatus;
  confidence?: number;
  result?: 'winner' | 'loser' | 'inconclusive';
  uplift?: string;
  startDate?: string;
  endDate?: string;
  sampleSize?: number;
  learnings?: string;
  priority: 'high' | 'medium' | 'low';
  effort: 'low' | 'medium' | 'high';
  impact: 'low' | 'medium' | 'high';
  owner: string;
}

const experiments: Experiment[] = [
  // Running Experiments
  {
    id: 'exp-001',
    name: '2x Coins First Transaction',
    hypothesis: 'Doubling coins on first transaction will increase Day 1 retention by 20%',
    metric: 'Day 1 Retention',
    baseline: '65%',
    target: '78%',
    category: 'activation',
    status: 'running',
    confidence: 89,
    uplift: '+18%',
    startDate: '2025-01-15',
    sampleSize: 5000,
    priority: 'high',
    effort: 'low',
    impact: 'high',
    owner: 'Growth Team'
  },
  {
    id: 'exp-002',
    name: 'Split Bill Feature',
    hypothesis: 'Adding split bill will increase viral coefficient by 0.3',
    metric: 'Viral Coefficient',
    baseline: '0.8',
    target: '1.1',
    category: 'referral',
    status: 'running',
    confidence: 72,
    uplift: '+25%',
    startDate: '2025-01-20',
    sampleSize: 3000,
    priority: 'high',
    effort: 'high',
    impact: 'high',
    owner: 'Product Team'
  },
  {
    id: 'exp-003',
    name: 'Push Notification Timing',
    hypothesis: 'Sending push at 6PM instead of 12PM will increase open rates by 15%',
    metric: 'Push Open Rate',
    baseline: '12%',
    target: '14%',
    category: 'retention',
    status: 'running',
    confidence: 65,
    uplift: '+8%',
    startDate: '2025-01-25',
    sampleSize: 10000,
    priority: 'medium',
    effort: 'low',
    impact: 'medium',
    owner: 'Marketing Team'
  },
  // Completed Experiments
  {
    id: 'exp-004',
    name: 'Onboarding Gamification',
    hypothesis: 'Adding progress bar and checklist will increase onboarding completion by 25%',
    metric: 'Onboarding Completion',
    baseline: '45%',
    target: '56%',
    category: 'activation',
    status: 'completed',
    confidence: 95,
    result: 'winner',
    uplift: '+32%',
    startDate: '2025-01-01',
    endDate: '2025-01-14',
    sampleSize: 8000,
    learnings: 'Users respond strongly to visible progress. Implemented for all new users.',
    priority: 'high',
    effort: 'medium',
    impact: 'high',
    owner: 'Product Team'
  },
  {
    id: 'exp-005',
    name: 'Merchant Landing Page A/B',
    hypothesis: 'Social proof headlines will convert 20% better than feature-focused headlines',
    metric: 'Merchant Signup Rate',
    baseline: '3.2%',
    target: '3.8%',
    category: 'acquisition',
    status: 'completed',
    confidence: 97,
    result: 'winner',
    uplift: '+28%',
    startDate: '2024-12-15',
    endDate: '2025-01-05',
    sampleSize: 2000,
    learnings: '"500+ merchants already growing" beats "Grow your business with data"',
    priority: 'medium',
    effort: 'low',
    impact: 'medium',
    owner: 'Marketing Team'
  },
  {
    id: 'exp-006',
    name: 'Coin Expiration Warning',
    hypothesis: '7-day expiration warning will increase transactions by 15%',
    metric: 'Weekly Transactions',
    baseline: '2.8',
    target: '3.2',
    category: 'retention',
    status: 'completed',
    confidence: 88,
    result: 'winner',
    uplift: '+12%',
    startDate: '2024-12-20',
    endDate: '2025-01-10',
    sampleSize: 5000,
    learnings: 'Loss aversion works. Users with expiring coins transacted 2.1x more.',
    priority: 'medium',
    effort: 'low',
    impact: 'medium',
    owner: 'Growth Team'
  },
  {
    id: 'exp-007',
    name: 'Premium Subscription Pricing',
    hypothesis: 'AED 29/mo will convert better than AED 39/mo for Nuqta+',
    metric: 'Subscription Conversion',
    baseline: '2.1%',
    target: '4%',
    category: 'revenue',
    status: 'completed',
    confidence: 91,
    result: 'loser',
    uplift: '-5%',
    startDate: '2024-12-01',
    endDate: '2024-12-21',
    sampleSize: 3000,
    learnings: 'Lower price didnt improve conversion. Users see AED 39 as more premium. Revenue per user actually dropped.',
    priority: 'high',
    effort: 'low',
    impact: 'high',
    owner: 'Product Team'
  },
  // Proposed Experiments
  {
    id: 'exp-008',
    name: 'Referral Leaderboard',
    hypothesis: 'Public leaderboard will increase referrals by 40%',
    metric: 'Monthly Referrals',
    baseline: '0.3 per user',
    target: '0.42 per user',
    category: 'referral',
    status: 'proposed',
    priority: 'high',
    effort: 'medium',
    impact: 'high',
    owner: 'Growth Team'
  },
  {
    id: 'exp-009',
    name: 'Instagram Story Sharing',
    hypothesis: 'One-tap Instagram story share will double organic shares',
    metric: 'Organic Shares',
    baseline: '5%',
    target: '10%',
    category: 'referral',
    status: 'proposed',
    priority: 'high',
    effort: 'medium',
    impact: 'high',
    owner: 'Product Team'
  },
  {
    id: 'exp-010',
    name: 'Merchant Welcome Bonus',
    hypothesis: 'First 10 customers free will accelerate merchant activation',
    metric: 'Merchant First Transaction Time',
    baseline: '5 days',
    target: '2 days',
    category: 'activation',
    status: 'proposed',
    priority: 'medium',
    effort: 'low',
    impact: 'medium',
    owner: 'Sales Team'
  },
  {
    id: 'exp-011',
    name: 'Streak Multiplier',
    hypothesis: 'Daily streak multiplier will increase DAU/MAU by 10%',
    metric: 'DAU/MAU Ratio',
    baseline: '25%',
    target: '28%',
    category: 'retention',
    status: 'proposed',
    priority: 'high',
    effort: 'medium',
    impact: 'high',
    owner: 'Product Team'
  },
  {
    id: 'exp-012',
    name: 'Personalized Merchant Recommendations',
    hypothesis: 'AI recommendations will increase transaction diversity by 30%',
    metric: 'Unique Merchants/Month',
    baseline: '3.2',
    target: '4.2',
    category: 'retention',
    status: 'proposed',
    priority: 'medium',
    effort: 'high',
    impact: 'medium',
    owner: 'Data Team'
  },
  // Paused/Killed
  {
    id: 'exp-013',
    name: 'WhatsApp Chatbot Onboarding',
    hypothesis: 'WhatsApp onboarding will have higher completion than app',
    metric: 'Onboarding Completion',
    baseline: '45%',
    target: '60%',
    category: 'activation',
    status: 'paused',
    confidence: 45,
    startDate: '2025-01-10',
    learnings: 'Technical issues with WhatsApp API. Paused until resolved.',
    priority: 'medium',
    effort: 'high',
    impact: 'medium',
    owner: 'Engineering Team'
  }
];

// ICE Score Calculator
const calculateICE = (impact: string, confidence: number, ease: string): number => {
  const impactScore = impact === 'high' ? 10 : impact === 'medium' ? 5 : 2;
  const easeScore = ease === 'low' ? 10 : ease === 'medium' ? 5 : 2;
  return (impactScore * (confidence / 100) * easeScore);
};

// A/B Test Sample Size Calculator
const SampleSizeCalculator = () => {
  const [baseline, setBaseline] = useState(5);
  const [mde, setMde] = useState(20);
  const [confidence, setConfidence] = useState(95);
  const [power, setPower] = useState(80);

  // Simplified sample size calculation
  const calculateSampleSize = () => {
    const p1 = baseline / 100;
    const p2 = p1 * (1 + mde / 100);
    const z_alpha = confidence === 95 ? 1.96 : confidence === 99 ? 2.576 : 1.645;
    const z_beta = power === 80 ? 0.84 : power === 90 ? 1.28 : 0.52;

    const pooledP = (p1 + p2) / 2;
    const numerator = 2 * pooledP * (1 - pooledP) * Math.pow(z_alpha + z_beta, 2);
    const denominator = Math.pow(p2 - p1, 2);

    return Math.ceil(numerator / denominator);
  };

  const sampleSize = calculateSampleSize();
  const totalRequired = sampleSize * 2; // Control + Treatment

  return (
    <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl p-6 text-white">
      <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
        <BarChart3 size={24} />
        Sample Size Calculator
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="text-sm text-purple-200">Baseline Rate (%)</label>
          <input
            type="number"
            value={baseline}
            onChange={(e) => setBaseline(Number(e.target.value))}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 mt-1"
          />
        </div>
        <div>
          <label className="text-sm text-purple-200">Min Detectable Effect (%)</label>
          <input
            type="number"
            value={mde}
            onChange={(e) => setMde(Number(e.target.value))}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 mt-1"
          />
        </div>
        <div>
          <label className="text-sm text-purple-200">Confidence Level (%)</label>
          <select
            value={confidence}
            onChange={(e) => setConfidence(Number(e.target.value))}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 mt-1"
          >
            <option value={90}>90%</option>
            <option value={95}>95%</option>
            <option value={99}>99%</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-purple-200">Statistical Power (%)</label>
          <select
            value={power}
            onChange={(e) => setPower(Number(e.target.value))}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 mt-1"
          >
            <option value={70}>70%</option>
            <option value={80}>80%</option>
            <option value={90}>90%</option>
          </select>
        </div>
      </div>

      <div className="bg-white/10 rounded-xl p-4 grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-amber-400">{sampleSize.toLocaleString()}</div>
          <div className="text-sm text-purple-200">Per Variant</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-emerald-400">{totalRequired.toLocaleString()}</div>
          <div className="text-sm text-purple-200">Total Required</div>
        </div>
      </div>

      <div className="mt-4 text-sm text-purple-200">
        <p>To detect a <span className="text-white font-semibold">{mde}% relative change</span> from {baseline}% to {(baseline * (1 + mde/100)).toFixed(1)}% with {confidence}% confidence.</p>
      </div>
    </div>
  );
};

// Experiment Card Component
const ExperimentCard = ({ experiment }: { experiment: Experiment }) => {
  const [expanded, setExpanded] = useState(false);

  const statusColors: Record<ExperimentStatus, string> = {
    proposed: 'bg-gray-100 text-gray-700',
    running: 'bg-blue-100 text-blue-700',
    completed: 'bg-emerald-100 text-emerald-700',
    paused: 'bg-amber-100 text-amber-700',
    killed: 'bg-red-100 text-red-700'
  };

  const categoryColors = {
    acquisition: 'border-l-blue-500',
    activation: 'border-l-emerald-500',
    retention: 'border-l-purple-500',
    revenue: 'border-l-amber-500',
    referral: 'border-l-pink-500'
  };

  return (
    <div className={`bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden border-l-4 ${categoryColors[experiment.category]}`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 flex items-start justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex-1 text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColors[experiment.status]}`}>
              {experiment.status.charAt(0).toUpperCase() + experiment.status.slice(1)}
            </span>
            {experiment.result && (
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                experiment.result === 'winner' ? 'bg-emerald-100 text-emerald-700' :
                experiment.result === 'loser' ? 'bg-red-100 text-red-700' :
                'bg-gray-100 text-gray-600'
              }`}>
                {experiment.result === 'winner' ? '✓ Winner' : experiment.result === 'loser' ? '✗ Loser' : '? Inconclusive'}
              </span>
            )}
            <span className="text-xs text-gray-400 capitalize">{experiment.category}</span>
          </div>
          <h3 className="font-bold text-gray-900">{experiment.name}</h3>
          <p className="text-sm text-gray-500 mt-1">{experiment.hypothesis}</p>
        </div>

        <div className="flex items-center gap-4 ml-4">
          {experiment.status === 'running' && experiment.confidence && (
            <div className="text-right">
              <div className={`text-lg font-bold ${
                experiment.confidence >= 95 ? 'text-emerald-600' :
                experiment.confidence >= 80 ? 'text-amber-600' :
                'text-gray-500'
              }`}>
                {experiment.confidence}%
              </div>
              <div className="text-xs text-gray-400">confidence</div>
            </div>
          )}
          {experiment.uplift && (
            <div className="text-right">
              <div className={`text-lg font-bold ${
                experiment.uplift.includes('+') ? 'text-emerald-600' : 'text-red-600'
              }`}>
                {experiment.uplift}
              </div>
              <div className="text-xs text-gray-400">uplift</div>
            </div>
          )}
          {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>

      {expanded && (
        <div className="px-4 pb-4 border-t border-gray-100 pt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div>
              <div className="text-xs text-gray-500 uppercase">Metric</div>
              <div className="font-medium">{experiment.metric}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase">Baseline</div>
              <div className="font-medium">{experiment.baseline}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase">Target</div>
              <div className="font-medium text-emerald-600">{experiment.target}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase">Owner</div>
              <div className="font-medium">{experiment.owner}</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <div className="text-xs text-gray-500 uppercase mb-1">Impact</div>
              <div className={`font-bold ${
                experiment.impact === 'high' ? 'text-emerald-600' :
                experiment.impact === 'medium' ? 'text-amber-600' :
                'text-gray-500'
              }`}>
                {experiment.impact.toUpperCase()}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <div className="text-xs text-gray-500 uppercase mb-1">Effort</div>
              <div className={`font-bold ${
                experiment.effort === 'low' ? 'text-emerald-600' :
                experiment.effort === 'medium' ? 'text-amber-600' :
                'text-red-600'
              }`}>
                {experiment.effort.toUpperCase()}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <div className="text-xs text-gray-500 uppercase mb-1">Priority</div>
              <div className={`font-bold ${
                experiment.priority === 'high' ? 'text-red-600' :
                experiment.priority === 'medium' ? 'text-amber-600' :
                'text-gray-500'
              }`}>
                {experiment.priority.toUpperCase()}
              </div>
            </div>
          </div>

          {experiment.sampleSize && (
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <Users size={14} />
              Sample size: {experiment.sampleSize.toLocaleString()} users
            </div>
          )}

          {experiment.startDate && (
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <Calendar size={14} />
              {experiment.endDate ? `${experiment.startDate} → ${experiment.endDate}` : `Started ${experiment.startDate}`}
            </div>
          )}

          {experiment.learnings && (
            <div className="bg-amber-50 rounded-lg p-3 mt-3 border border-amber-200">
              <div className="flex items-start gap-2">
                <Lightbulb className="text-amber-600 shrink-0 mt-0.5" size={16} />
                <div className="text-sm">
                  <span className="font-semibold text-amber-800">Key Learning:</span>{' '}
                  <span className="text-amber-700">{experiment.learnings}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default function GrowthExperimentsPage() {
  const [filter, setFilter] = useState<'all' | ExperimentStatus>('all');
  const [categoryFilter, setCategoryFilter] = useState<'all' | Experiment['category']>('all');

  const filteredExperiments = experiments.filter(exp => {
    const statusMatch = filter === 'all' || exp.status === filter;
    const categoryMatch = categoryFilter === 'all' || exp.category === categoryFilter;
    return statusMatch && categoryMatch;
  });

  const stats = {
    running: experiments.filter(e => e.status === 'running').length,
    completed: experiments.filter(e => e.status === 'completed').length,
    proposed: experiments.filter(e => e.status === 'proposed').length,
    winners: experiments.filter(e => e.result === 'winner').length,
    winRate: Math.round((experiments.filter(e => e.result === 'winner').length / experiments.filter(e => e.result).length) * 100)
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a1628] via-purple-900 to-[#0a1628] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4">
              <Beaker className="text-emerald-400" size={18} />
              <span className="text-emerald-400 font-medium">Experimentation Engine</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">
              Growth <span className="text-emerald-400">Experiments</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Test everything. Measure everything. Scale what works.
              Data-driven experimentation framework.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-blue-400">{stats.running}</div>
                <div className="text-sm text-gray-300">Running</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-emerald-400">{stats.completed}</div>
                <div className="text-sm text-gray-300">Completed</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-gray-400">{stats.proposed}</div>
                <div className="text-sm text-gray-300">Proposed</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-amber-400">{stats.winners}</div>
                <div className="text-sm text-gray-300">Winners</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-pink-400">{stats.winRate}%</div>
                <div className="text-sm text-gray-300">Win Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Sample Size Calculator */}
        <div className="mb-8">
          <SampleSizeCalculator />
        </div>

        {/* Experimentation Framework */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Target className="text-purple-600" />
            Experimentation Framework
          </h2>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: '1', title: 'Hypothesis', desc: 'Clear, testable statement', icon: Lightbulb, color: 'bg-blue-100 text-blue-600' },
              { step: '2', title: 'Design', desc: 'Sample size, duration, metrics', icon: BarChart3, color: 'bg-purple-100 text-purple-600' },
              { step: '3', title: 'Build', desc: 'Implement A/B variants', icon: Beaker, color: 'bg-amber-100 text-amber-600' },
              { step: '4', title: 'Run', desc: 'Collect statistically significant data', icon: Play, color: 'bg-emerald-100 text-emerald-600' },
              { step: '5', title: 'Learn', desc: 'Document insights, ship winners', icon: Trophy, color: 'bg-pink-100 text-pink-600' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-2`}>
                  <item.icon size={24} />
                </div>
                <div className="font-bold text-gray-900">{item.title}</div>
                <div className="text-sm text-gray-500">{item.desc}</div>
                {i < 4 && <ArrowRight className="hidden md:block mx-auto mt-2 text-gray-300" size={20} />}
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Filter size={16} className="text-gray-400" />
            <span className="text-sm text-gray-500">Status:</span>
            <div className="flex gap-1">
              {(['all', 'running', 'completed', 'proposed', 'paused'] as const).map(status => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    filter === status
                      ? 'bg-[#0a1628] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Category:</span>
            <div className="flex gap-1">
              {(['all', 'acquisition', 'activation', 'retention', 'revenue', 'referral'] as const).map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    categoryFilter === cat
                      ? 'bg-[#0a1628] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Experiments List */}
        <div className="space-y-4 mb-8">
          {filteredExperiments.map(experiment => (
            <ExperimentCard key={experiment.id} experiment={experiment} />
          ))}
        </div>

        {/* Prioritization Matrix */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Rocket className="text-amber-600" />
            ICE Prioritization (Proposed Experiments)
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-600">Experiment</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-600">Impact</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-600">Confidence</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-600">Ease</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-600">ICE Score</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-600">Priority</th>
                </tr>
              </thead>
              <tbody>
                {experiments
                  .filter(e => e.status === 'proposed')
                  .sort((a, b) => {
                    const scoreA = calculateICE(a.impact, 70, a.effort);
                    const scoreB = calculateICE(b.impact, 70, b.effort);
                    return scoreB - scoreA;
                  })
                  .map((exp, i) => {
                    const score = calculateICE(exp.impact, 70, exp.effort);
                    return (
                      <tr key={exp.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div className="font-medium">{exp.name}</div>
                          <div className="text-xs text-gray-500">{exp.category}</div>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            exp.impact === 'high' ? 'bg-emerald-100 text-emerald-700' :
                            exp.impact === 'medium' ? 'bg-amber-100 text-amber-700' :
                            'bg-gray-100 text-gray-600'
                          }`}>
                            {exp.impact}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="text-gray-600">70%</span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            exp.effort === 'low' ? 'bg-emerald-100 text-emerald-700' :
                            exp.effort === 'medium' ? 'bg-amber-100 text-amber-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {exp.effort}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className={`text-lg font-bold ${
                            score >= 50 ? 'text-emerald-600' :
                            score >= 25 ? 'text-amber-600' :
                            'text-gray-500'
                          }`}>
                            {score.toFixed(0)}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="text-sm font-medium text-gray-600">#{i + 1}</span>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Learning Log */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Lightbulb className="text-amber-600" />
            Key Learnings from Experiments
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {experiments
              .filter(e => e.learnings)
              .map(exp => (
                <div key={exp.id} className="bg-white rounded-xl p-4 border border-amber-100">
                  <div className="flex items-center gap-2 mb-2">
                    {exp.result === 'winner' ? (
                      <CheckCircle className="text-emerald-500" size={16} />
                    ) : exp.result === 'loser' ? (
                      <XCircle className="text-red-500" size={16} />
                    ) : (
                      <AlertCircle className="text-amber-500" size={16} />
                    )}
                    <span className="font-semibold text-gray-900">{exp.name}</span>
                  </div>
                  <p className="text-sm text-gray-600">{exp.learnings}</p>
                </div>
              ))}
          </div>
        </div>

        {/* Best Practices */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <CheckCircle className="text-emerald-600" />
            Experimentation Best Practices
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
              <h3 className="font-bold text-emerald-800 mb-2">✓ DO</h3>
              <ul className="space-y-1 text-sm text-emerald-700">
                <li>• Define success metrics before starting</li>
                <li>• Run to statistical significance (95%+)</li>
                <li>• Document learnings, even from failures</li>
                <li>• Test one variable at a time</li>
                <li>• Consider novelty effect (wait 2+ weeks)</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-xl p-4 border border-red-100">
              <h3 className="font-bold text-red-800 mb-2">✗ DON&apos;T</h3>
              <ul className="space-y-1 text-sm text-red-700">
                <li>• Stop experiments early when results look good</li>
                <li>• Run too many experiments simultaneously</li>
                <li>• Ignore negative results</li>
                <li>• Make decisions on small sample sizes</li>
                <li>• Change experiment mid-run</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
              <h3 className="font-bold text-blue-800 mb-2">📊 Metrics</h3>
              <ul className="space-y-1 text-sm text-blue-700">
                <li>• Primary: One clear north star metric</li>
                <li>• Secondary: Supporting metrics to watch</li>
                <li>• Guardrails: Metrics that shouldn&apos;t drop</li>
                <li>• Sample: Per-variant calculation required</li>
                <li>• Duration: Minimum 1-2 full cycles</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <GlobalFooter />
    </div>
  );
}
