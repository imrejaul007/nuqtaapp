'use client';

import React, { useState } from 'react';
import {
  Megaphone,
  Target,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowRight,
  Users,
  Building2,
  Rocket,
  Lightbulb,
  Calendar,
  Clock,
  Flag,
  Star,
  Award,
  Globe,
  Heart,
  Zap,
  Eye,
  MessageSquare,
  BarChart3,
  PieChart,
  Share2,
  Instagram,
  Smartphone,
  Mail,
  Gift,
  Sparkles,
  Hash,
  Video,
  Image,
  Mic,
  Radio,
  Camera
} from 'lucide-react';

/**
 * CMO AGENT REPORT
 *
 * AI Agent: Sarbajit Bhatacharjee (21 years experience)
 * Background: Former CMO at Noon.com, built brand from 0 to household name
 * Expertise: Brand Building, Growth Marketing, Viral Campaigns, Community Building
 *
 * This is a comprehensive marketing analysis and action plan for Nuqta.
 */

type SectionId = 'profile' | 'diagnosis' | 'problems' | 'solutions' | 'execution' | 'metrics';

const sections: { id: SectionId; label: string }[] = [
  { id: 'profile', label: 'Agent Profile' },
  { id: 'diagnosis', label: 'Marketing Diagnosis' },
  { id: 'problems', label: 'Problems Identified' },
  { id: 'solutions', label: 'Marketing Solutions' },
  { id: 'execution', label: 'Campaign Playbook' },
  { id: 'metrics', label: 'Marketing Metrics' },
];

export default function CMOReportPage() {
  const [activeSection, setActiveSection] = useState<SectionId>('profile');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2a4a] to-[#0a1628]">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-900/50 to-pink-800/30 border-b border-pink-500/30">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-700 flex items-center justify-center shadow-xl">
              <Megaphone size={48} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-white">CMO Marketing Report</h1>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm border border-pink-500/30">
                  Agent Report
                </span>
              </div>
              <p className="text-pink-300 text-lg">AI Agent: Sarbajit Bhatacharjee • 21 Years Marketing Experience</p>
              <p className="text-slate-400 mt-2">Former CMO at Noon.com • Built brand 0→household name • $200M+ marketing budgets managed</p>
            </div>
            <div className="text-right">
              <p className="text-pink-400 font-bold text-xl">NUQTA</p>
              <p className="text-slate-500 text-sm">Analysis Date: Feb 2026</p>
              <div className="mt-2 flex items-center gap-2 justify-end">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm">Report Complete</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-[#0a1628]/80 backdrop-blur-sm border-b border-white/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                  activeSection === section.id
                    ? 'bg-pink-500 text-white'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Agent Profile Section */}
        {activeSection === 'profile' && (
          <div className="space-y-8">
            {/* Agent Card */}
            <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 rounded-2xl border border-pink-500/30 p-8">
              <div className="flex items-start gap-6">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-5xl font-bold text-white">
                  PS
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-2">Sarbajit Bhatacharjee</h2>
                  <p className="text-pink-400 text-lg mb-4">Chief Marketing Officer AI Agent</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/5 rounded-lg p-3 text-center">
                      <p className="text-2xl font-bold text-pink-400">21</p>
                      <p className="text-slate-400 text-sm">Years Experience</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 text-center">
                      <p className="text-2xl font-bold text-pink-400">$200M+</p>
                      <p className="text-slate-400 text-sm">Budgets Managed</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 text-center">
                      <p className="text-2xl font-bold text-pink-400">50M+</p>
                      <p className="text-slate-400 text-sm">Users Acquired</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-xl border border-white/10 p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Award className="text-pink-400" size={20} />
                  Professional Background
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span><strong>Noon.com CMO (2018-2024)</strong>: Built brand from launch to #1 e-commerce in GCC</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span><strong>Careem Marketing VP (2014-2018)</strong>: Led campaigns for 10 MENA markets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span><strong>P&G Brand Manager (2005-2014)</strong>: Managed $50M+ brand portfolios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span><strong>Education</strong>: MBA from INSEAD, Marketing from Wharton</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl border border-white/10 p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Star className="text-yellow-400" size={20} />
                  Core Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Brand Strategy',
                    'Growth Marketing',
                    'Viral Campaigns',
                    'Influencer Marketing',
                    'Community Building',
                    'Performance Marketing',
                    'Content Strategy',
                    'Social Media',
                    'Referral Programs',
                    'PR & Communications',
                    'Event Marketing',
                    'Partnership Marketing'
                  ].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Notable Achievements */}
            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Rocket className="text-pink-400" size={20} />
                Notable Achievements
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg p-4 border border-pink-500/30">
                  <div className="text-3xl font-bold text-pink-400">10M→50M</div>
                  <p className="text-slate-400 text-sm">Users at Noon.com in 3 years</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg p-4 border border-yellow-500/30">
                  <div className="text-3xl font-bold text-yellow-400">#1 App</div>
                  <p className="text-slate-400 text-sm">UAE App Store during Yellow Friday</p>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg p-4 border border-green-500/30">
                  <div className="text-3xl font-bold text-green-400">65% Organic</div>
                  <p className="text-slate-400 text-sm">User acquisition through brand</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-4 border border-blue-500/30">
                  <div className="text-3xl font-bold text-blue-400">12 Awards</div>
                  <p className="text-slate-400 text-sm">MENA Marketing excellence</p>
                </div>
              </div>
            </div>

            {/* Agent Message */}
            <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 rounded-xl border border-pink-500/30 p-6">
              <div className="flex items-start gap-4">
                <MessageSquare className="text-pink-400 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Opening Assessment (Feb 2026)</h4>
                  <p className="text-slate-300 leading-relaxed">
                    "The CMO is now hired and executing. Product is 100% complete, team of 8 is in place, March 1 launch is set.
                    The 14-day pre-launch campaign is now underway. We're building the Founders Circle (target: 100 users),
                    activating influencer partnerships, and creating anticipation for launch. The Marketing Bible is complete with
                    21 sections, content calendar, and campaign playbooks. This is our 'Yellow Friday' moment - March 1 launch.
                    Focus: Founders Circle signups, influencer content, social media buildup, and launch day viral moments."
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Marketing Diagnosis Section */}
        {activeSection === 'diagnosis' && (
          <div className="space-y-8">
            {/* Marketing Health Score */}
            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <BarChart3 className="text-pink-400" size={20} />
                Marketing Health Scorecard
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { area: 'Brand Strategy', score: 90, status: 'strong', note: 'Complete Marketing Bible' },
                  { area: 'Content Calendar', score: 85, status: 'strong', note: '200+ topics ready' },
                  { area: 'Launch Campaign', score: 80, status: 'good', note: '14-day sprint active' },
                  { area: 'Influencer Strategy', score: 75, status: 'good', note: 'Partnerships in progress' },
                  { area: 'Founders Circle', score: 40, status: 'building', note: 'Target: 100 users' },
                  { area: 'Social Presence', score: 50, status: 'building', note: 'Accounts active, growing' },
                  { area: 'Referral Program', score: 70, status: 'good', note: 'Ready in product' },
                  { area: 'Community Building', score: 35, status: 'starting', note: 'WhatsApp groups forming' }
                ].map((item) => (
                  <div key={item.area} className="bg-white/5 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 text-sm">{item.area}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        item.status === 'strong' ? 'bg-green-500/20 text-green-400' :
                        item.status === 'good' ? 'bg-blue-500/20 text-blue-400' :
                        item.status === 'building' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-orange-500/20 text-orange-400'
                      }`}>
                        {item.status.toUpperCase()}
                      </span>
                    </div>
                    <div className="flex items-end gap-2">
                      <div className="text-3xl font-bold text-white">{item.score}</div>
                      <div className="text-slate-500 text-sm mb-1">/100</div>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                      <div
                        className={`h-2 rounded-full ${
                          item.score >= 80 ? 'bg-green-500' :
                          item.score >= 60 ? 'bg-blue-500' :
                          item.score >= 40 ? 'bg-yellow-500' :
                          'bg-orange-500'
                        }`}
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                    <p className="text-slate-500 text-xs mt-2">{item.note}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-green-400 font-bold">Overall Marketing Health: 66/100 (LAUNCH READY)</p>
                <p className="text-slate-400 text-sm mt-1">
                  Marketing infrastructure in place. CMO executing 14-day pre-launch campaign. Focus on Founders Circle and launch execution.
                </p>
              </div>
            </div>

            {/* Current State Analysis */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-xl border border-white/10 p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Eye className="text-pink-400" size={20} />
                  Brand Visibility Analysis
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <p className="text-red-400 font-bold mb-2">Google Search Presence</p>
                    <p className="text-slate-400 text-sm">
                      "Nuqta UAE" returns 0 relevant results. Brand is invisible in search.
                    </p>
                  </div>
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <p className="text-red-400 font-bold mb-2">Social Media Footprint</p>
                    <p className="text-slate-400 text-sm">
                      Instagram: 0 followers. TikTok: None. LinkedIn: Basic. No community presence.
                    </p>
                  </div>
                  <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                    <p className="text-orange-400 font-bold mb-2">App Store Visibility</p>
                    <p className="text-slate-400 text-sm">
                      Not ranked for any loyalty-related keywords. Zero organic discovery.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl border border-white/10 p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="text-pink-400" size={20} />
                  Growth Channel Analysis
                </h3>
                <div className="space-y-3">
                  {[
                    { channel: 'Organic Search', status: 'inactive', traffic: '0%' },
                    { channel: 'Paid Ads', status: 'inactive', traffic: '0%' },
                    { channel: 'Social Media', status: 'inactive', traffic: '0%' },
                    { channel: 'Referrals', status: 'dormant', traffic: '5%' },
                    { channel: 'Direct', status: 'weak', traffic: '15%' },
                    { channel: 'Merchant Referrals', status: 'potential', traffic: '80%' }
                  ].map((ch) => (
                    <div key={ch.channel} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <span className="text-slate-300">{ch.channel}</span>
                      <div className="flex items-center gap-3">
                        <span className={`px-2 py-1 rounded text-xs ${
                          ch.status === 'inactive' ? 'bg-red-500/20 text-red-400' :
                          ch.status === 'dormant' ? 'bg-orange-500/20 text-orange-400' :
                          ch.status === 'weak' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                          {ch.status}
                        </span>
                        <span className="text-white font-bold w-12 text-right">{ch.traffic}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Competitive Marketing Gap */}
            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Target className="text-pink-400" size={20} />
                Competitive Marketing Analysis
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-slate-400">Metric</th>
                      <th className="text-center py-3 px-4 text-pink-400">Nuqta</th>
                      <th className="text-center py-3 px-4 text-slate-400">Entertainer</th>
                      <th className="text-center py-3 px-4 text-slate-400">Smiles</th>
                      <th className="text-center py-3 px-4 text-slate-400">Amber</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4 text-slate-300">Instagram Followers</td>
                      <td className="py-3 px-4 text-center text-red-400">0</td>
                      <td className="py-3 px-4 text-center text-slate-400">450K</td>
                      <td className="py-3 px-4 text-center text-slate-400">280K</td>
                      <td className="py-3 px-4 text-center text-slate-400">95K</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4 text-slate-300">App Store Rating</td>
                      <td className="py-3 px-4 text-center text-orange-400">4.2</td>
                      <td className="py-3 px-4 text-center text-slate-400">4.7</td>
                      <td className="py-3 px-4 text-center text-slate-400">4.5</td>
                      <td className="py-3 px-4 text-center text-slate-400">4.3</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4 text-slate-300">Monthly Content Posts</td>
                      <td className="py-3 px-4 text-center text-red-400">0</td>
                      <td className="py-3 px-4 text-center text-slate-400">60+</td>
                      <td className="py-3 px-4 text-center text-slate-400">45+</td>
                      <td className="py-3 px-4 text-center text-slate-400">30+</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4 text-slate-300">Influencer Partnerships</td>
                      <td className="py-3 px-4 text-center text-red-400">0</td>
                      <td className="py-3 px-4 text-center text-slate-400">100+</td>
                      <td className="py-3 px-4 text-center text-slate-400">50+</td>
                      <td className="py-3 px-4 text-center text-slate-400">25+</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-300">Brand Awareness (UAE)</td>
                      <td className="py-3 px-4 text-center text-red-400">&lt;1%</td>
                      <td className="py-3 px-4 text-center text-slate-400">85%</td>
                      <td className="py-3 px-4 text-center text-slate-400">60%</td>
                      <td className="py-3 px-4 text-center text-slate-400">35%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Problems Identified Section */}
        {activeSection === 'problems' && (
          <div className="space-y-6">
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-400 mb-2">Critical Marketing Problems Identified</h3>
              <p className="text-slate-400">Based on 21 years of marketing experience and MENA market expertise</p>
            </div>

            {/* Problem Cards */}
            {[
              {
                id: 1,
                severity: 'critical',
                title: 'Zero Brand Identity',
                impact: 'Users have no emotional connection or brand recall',
                details: [
                  'No brand story or narrative that resonates with UAE audience',
                  'Generic "rewards app" positioning - indistinguishable from competitors',
                  'No visual brand elements that create recognition (mascot, color, sound)',
                  'Missing the "why" - users don\'t understand what makes Nuqta different',
                  'No brand voice or personality in communications'
                ],
                myTake: 'Every successful app I\'ve built had a clear brand story. Noon had "Everything for Everyone". Careem had "Making Life Simpler". What\'s Nuqta\'s story? Right now, it\'s nothing.'
              },
              {
                id: 2,
                severity: 'critical',
                title: 'No Viral Mechanics Built Into Product',
                impact: 'Organic growth is impossible without redesigning user journey',
                details: [
                  'Referral program exists but has no compelling hook (not exciting enough)',
                  'No shareable moments in user journey (achievements, wins, milestones)',
                  'Missing social proof elements (leaderboards, community challenges)',
                  'No "golden coin moment" - that screenshot-worthy experience',
                  'WhatsApp sharing (UAE\'s #1 channel) not optimized'
                ],
                myTake: 'At Noon, our "Yellow Friday" countdown created 500K organic shares. The product itself needs to generate shares. Marketing can\'t fix a product that isn\'t inherently shareable.'
              },
              {
                id: 3,
                severity: 'critical',
                title: 'No Content or Social Media Presence',
                impact: 'Missing the primary discovery channel for UAE audiences',
                details: [
                  'Instagram (most important for UAE F&B) has zero presence',
                  'TikTok (fastest growing in UAE) not even started',
                  'No content calendar or content strategy',
                  'No UGC (user-generated content) strategy',
                  'Missing food photography/video that drives F&B engagement'
                ],
                myTake: 'In UAE, if you don\'t exist on Instagram, you don\'t exist. Period. 90% of F&B discovery happens through social. We\'re invisible.'
              },
              {
                id: 4,
                severity: 'high',
                title: 'No Influencer Strategy',
                impact: 'Missing the highest-ROI channel in UAE market',
                details: [
                  'Zero influencer partnerships (competitors have 25-100+ each)',
                  'No micro-influencer program for authentic content',
                  'No food blogger relationships',
                  'Missing UAE celebrity/personality endorsements',
                  'No affiliate program for content creators'
                ],
                myTake: 'One well-chosen micro-influencer in UAE can drive 1,000+ app downloads for AED 2,000. We\'re leaving the easiest growth lever completely unused.'
              },
              {
                id: 5,
                severity: 'high',
                title: 'No Community or Tribe',
                impact: 'Users are transactional, not loyal advocates',
                details: [
                  'No WhatsApp community for power users',
                  'No exclusive "Nuqta Insider" program',
                  'No user events or meetups',
                  'No gamification beyond basic points',
                  'No sense of belonging or identity'
                ],
                myTake: 'The Entertainer built a "savings community". Careem had "Captains". What\'s Nuqta\'s tribe called? Who are they? They need an identity.'
              },
              {
                id: 6,
                severity: 'high',
                title: 'No PR or Earned Media Strategy',
                impact: 'Missing free credibility and reach',
                details: [
                  'No press coverage or media relationships',
                  'No thought leadership content from founders',
                  'Missing startup/tech media presence',
                  'No award submissions or industry recognition',
                  'No crisis communication plan'
                ],
                myTake: 'One Gulf News feature can reach 500K readers. We haven\'t even tried.'
              },
              {
                id: 7,
                severity: 'medium',
                title: 'App Store Optimization (ASO) Non-Existent',
                impact: 'Zero organic app discovery',
                details: [
                  'Not ranking for any relevant keywords',
                  'Screenshots and app description not optimized',
                  'No localization (Arabic version weak)',
                  'Low review count affects ranking',
                  'No A/B testing on store listing'
                ],
                myTake: 'ASO is free marketing. We\'re not even playing the game.'
              },
              {
                id: 8,
                severity: 'medium',
                title: 'No Merchant Co-Marketing',
                impact: 'Not leveraging merchants\' existing audiences',
                details: [
                  'Merchants not promoting Nuqta on their channels',
                  'No co-branded content or campaigns',
                  'No table tents, stickers, or in-store visibility',
                  'Missing merchant success stories/case studies',
                  'No merchant ambassador program'
                ],
                myTake: 'Each merchant has their own following. We should be tapping 10+ merchants x 5,000 followers each = 50,000 free reach.'
              }
            ].map((problem) => (
              <div
                key={problem.id}
                className={`bg-white/5 rounded-xl border p-6 ${
                  problem.severity === 'critical' ? 'border-red-500/30' :
                  problem.severity === 'high' ? 'border-orange-500/30' :
                  'border-yellow-500/30'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      problem.severity === 'critical' ? 'bg-red-500/20' :
                      problem.severity === 'high' ? 'bg-orange-500/20' :
                      'bg-yellow-500/20'
                    }`}>
                      <AlertTriangle className={`${
                        problem.severity === 'critical' ? 'text-red-400' :
                        problem.severity === 'high' ? 'text-orange-400' :
                        'text-yellow-400'
                      }`} size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">Problem #{problem.id}: {problem.title}</h4>
                      <p className="text-slate-400 text-sm">{problem.impact}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    problem.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                    problem.severity === 'high' ? 'bg-orange-500/20 text-orange-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {problem.severity.toUpperCase()}
                  </span>
                </div>
                <ul className="space-y-2 mb-4">
                  {problem.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-300">
                      <XCircle className="text-red-400 mt-1 flex-shrink-0" size={14} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-pink-500/10 border border-pink-500/30 rounded-lg">
                  <p className="text-pink-300 italic">
                    <strong>My Take:</strong> "{problem.myTake}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Marketing Solutions Section */}
        {activeSection === 'solutions' && (
          <div className="space-y-8">
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-2">Strategic Marketing Solutions</h3>
              <p className="text-slate-400">Zero-budget to low-budget strategies that I've used to build billion-dollar brands</p>
            </div>

            {/* Solution 1: Brand Identity */}
            <div className="bg-white/5 rounded-xl border border-pink-500/30 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                  <Sparkles className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Solution 1: Create "The Golden Moment" Brand Identity</h3>
                  <p className="text-pink-400">Build a brand story around the magic of unexpected rewards</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="text-white font-bold mb-3">Brand Positioning Statement</h4>
                  <p className="text-slate-300 text-lg italic border-l-4 border-pink-500 pl-4">
                    "Nuqta turns everyday moments into golden opportunities. Every coffee, every meal, every experience -
                    a chance to unlock something magical. Because the best rewards are the ones you didn't expect."
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h5 className="text-pink-400 font-bold mb-2">Brand Pillars</h5>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li>• <strong>Magic</strong>: Unexpected golden moments</li>
                      <li>• <strong>Community</strong>: UAE's rewards tribe</li>
                      <li>• <strong>Discovery</strong>: Finding hidden gems</li>
                      <li>• <strong>Value</strong>: Real savings, not gimmicks</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h5 className="text-pink-400 font-bold mb-2">Brand Voice</h5>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li>• <strong>Tone</strong>: Playful, exciting, slightly cheeky</li>
                      <li>• <strong>Language</strong>: Simple, emoji-friendly, bilingual</li>
                      <li>• <strong>Personality</strong>: Friend who knows best spots</li>
                      <li>• <strong>Catchphrase</strong>: "Found your golden moment? ✨"</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg">
                  <h5 className="text-[#c9a227] font-bold mb-2">The "Golden Coin" Signature</h5>
                  <p className="text-slate-300">
                    Every key moment in the app should feature the signature golden coin animation/sound.
                    This becomes our sonic and visual brand - like Netflix's "tu-dum" or iPhone's unlock sound.
                    Users should feel a dopamine hit every time they hear/see it.
                  </p>
                </div>
              </div>
            </div>

            {/* Solution 2: Viral Mechanics */}
            <div className="bg-white/5 rounded-xl border border-green-500/30 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <Share2 className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Solution 2: Build Viral Loops Into Product</h3>
                  <p className="text-green-400">Make every user a marketing channel</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h5 className="text-green-400 font-bold mb-3">🎰 Golden Spin Referral</h5>
                    <p className="text-slate-300 text-sm mb-2">When friend signs up, BOTH get a spin:</p>
                    <ul className="text-slate-400 text-sm space-y-1">
                      <li>• 50 coins (common)</li>
                      <li>• 100 coins (uncommon)</li>
                      <li>• 500 coins (rare)</li>
                      <li>• 1000 coins (epic)</li>
                      <li>• FREE dinner for 2 (legendary - 1%)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h5 className="text-green-400 font-bold mb-3">📸 Share & Earn</h5>
                    <p className="text-slate-300 text-sm mb-2">Reward shareable moments:</p>
                    <ul className="text-slate-400 text-sm space-y-1">
                      <li>• Share first redemption = 50 coins</li>
                      <li>• Share milestone (100 coins) = 25 coins</li>
                      <li>• Post review with photo = 100 coins</li>
                      <li>• Story mention = 25 coins</li>
                      <li>• Friend signs up from share = 200 coins</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-white/5 rounded-lg">
                  <h5 className="text-green-400 font-bold mb-3">🏆 Leaderboard & Challenges</h5>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-3 bg-white/5 rounded">
                      <p className="text-white font-bold">Weekly Top Earner</p>
                      <p className="text-slate-400 text-sm">Top 3 get bonus coins + feature</p>
                    </div>
                    <div className="p-3 bg-white/5 rounded">
                      <p className="text-white font-bold">Weekend Warrior</p>
                      <p className="text-slate-400 text-sm">Visit 5 merchants = bonus</p>
                    </div>
                    <div className="p-3 bg-white/5 rounded">
                      <p className="text-white font-bold">Explorer Badge</p>
                      <p className="text-slate-400 text-sm">Try new merchant = 2x coins</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution 3: Content Strategy */}
            <div className="bg-white/5 rounded-xl border border-blue-500/30 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Instagram className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Solution 3: Content Factory - 30 Posts/Week</h3>
                  <p className="text-blue-400">Dominate social feeds with mouth-watering content</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="p-4 bg-white/5 rounded-lg text-center">
                    <Instagram className="text-pink-400 mx-auto mb-2" size={32} />
                    <p className="text-white font-bold">Instagram</p>
                    <p className="text-slate-400 text-sm">15 posts/week</p>
                    <p className="text-pink-400 text-xs">Food photos + reels</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg text-center">
                    <Video className="text-cyan-400 mx-auto mb-2" size={32} />
                    <p className="text-white font-bold">TikTok</p>
                    <p className="text-slate-400 text-sm">10 videos/week</p>
                    <p className="text-cyan-400 text-xs">Trending sounds + food</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg text-center">
                    <MessageSquare className="text-green-400 mx-auto mb-2" size={32} />
                    <p className="text-white font-bold">WhatsApp</p>
                    <p className="text-slate-400 text-sm">Daily deals</p>
                    <p className="text-green-400 text-xs">Broadcast channel</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg text-center">
                    <Globe className="text-blue-400 mx-auto mb-2" size={32} />
                    <p className="text-white font-bold">LinkedIn</p>
                    <p className="text-slate-400 text-sm">3 posts/week</p>
                    <p className="text-blue-400 text-xs">B2B + thought leadership</p>
                  </div>
                </div>

                <div className="p-4 bg-white/5 rounded-lg">
                  <h5 className="text-blue-400 font-bold mb-3">Content Pillars (Rotating Weekly)</h5>
                  <div className="grid md:grid-cols-5 gap-2">
                    {[
                      { day: 'Mon', theme: 'Merchant Monday', desc: 'Feature a merchant' },
                      { day: 'Tue', theme: 'Tip Tuesday', desc: 'Money-saving tips' },
                      { day: 'Wed', theme: 'Win Wednesday', desc: 'User wins/redemptions' },
                      { day: 'Thu', theme: 'Throwback', desc: 'Best deals this week' },
                      { day: 'Fri', theme: 'Foodie Friday', desc: 'Weekend recommendations' }
                    ].map((content) => (
                      <div key={content.day} className="p-3 bg-blue-500/10 rounded text-center">
                        <p className="text-blue-400 font-bold">{content.day}</p>
                        <p className="text-white text-sm">{content.theme}</p>
                        <p className="text-slate-400 text-xs">{content.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Solution 4: Influencer Strategy */}
            <div className="bg-white/5 rounded-xl border border-purple-500/30 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Star className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Solution 4: Influencer Army (50 Micro-Influencers)</h3>
                  <p className="text-purple-400">Partner with 50 food/lifestyle creators in 30 days</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h5 className="text-purple-400 font-bold mb-2">Tier 1: Nano (1K-10K)</h5>
                    <p className="text-slate-400 text-sm mb-2">30 creators</p>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• Cost: Free food + 500 coins</li>
                      <li>• Deliverable: 1 post + 3 stories</li>
                      <li>• Expected reach: 5K-15K each</li>
                      <li>• Focus: Authentic food lovers</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h5 className="text-purple-400 font-bold mb-2">Tier 2: Micro (10K-50K)</h5>
                    <p className="text-slate-400 text-sm mb-2">15 creators</p>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• Cost: AED 500-1500 + perks</li>
                      <li>• Deliverable: 1 reel + 5 stories</li>
                      <li>• Expected reach: 20K-50K each</li>
                      <li>• Focus: Food bloggers</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h5 className="text-purple-400 font-bold mb-2">Tier 3: Mid (50K-200K)</h5>
                    <p className="text-slate-400 text-sm mb-2">5 creators</p>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• Cost: AED 2000-5000</li>
                      <li>• Deliverable: Campaign package</li>
                      <li>• Expected reach: 100K+ each</li>
                      <li>• Focus: Lifestyle influencers</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                  <h5 className="text-purple-400 font-bold mb-2">Target Influencer Profiles</h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      '@dubaifoodie', '@uaefoodies', '@mydubai.food', '@foodieinuae',
                      '@brunchwithbae', '@dubaibrunchclub', '@coffeeloverdxb', '@marinafoodie',
                      '@jbrfoodguide', '@downtowndubai.eats'
                    ].map((handle) => (
                      <span key={handle} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                        {handle}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Solution 5: Community Building */}
            <div className="bg-white/5 rounded-xl border border-yellow-500/30 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Solution 5: Build "Nuqta Hunters" Community</h3>
                  <p className="text-yellow-400">Create UAE's most engaged rewards community</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h5 className="text-yellow-400 font-bold mb-3">Community Structure</h5>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="text-yellow-400">👑</span>
                        <span><strong>Gold Hunters</strong>: Top 1% - VIP access, exclusive events</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-slate-400">🥈</span>
                        <span><strong>Silver Hunters</strong>: Top 10% - Early access, bonus coins</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-orange-400">🥉</span>
                        <span><strong>Bronze Hunters</strong>: Active users - Community perks</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-400">🌱</span>
                        <span><strong>New Hunters</strong>: Onboarding journey + welcome bonus</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h5 className="text-yellow-400 font-bold mb-3">Community Channels</h5>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li>• <strong>WhatsApp Broadcast</strong>: Daily deals to 10K+ subscribers</li>
                      <li>• <strong>Telegram Group</strong>: Hunter discussions & tips</li>
                      <li>• <strong>Instagram Close Friends</strong>: Exclusive previews</li>
                      <li>• <strong>Monthly Meetups</strong>: Hunter dinners at partners</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                  <h5 className="text-yellow-400 font-bold mb-2">First 100 Hunters Program</h5>
                  <p className="text-slate-300">
                    Recruit our first 100 power users manually. Give them founding member status,
                    permanent 2x earning multiplier, and direct line to founders. They become our
                    street team and content creators. This worked at Careem - our first 100 Captains
                    recruited the next 1,000.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Campaign Playbook Section */}
        {activeSection === 'execution' && (
          <div className="space-y-8">
            <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-pink-400 mb-2">30-Day Marketing Blitz Playbook</h3>
              <p className="text-slate-400">Week-by-week execution plan to reach 50,000 users</p>
            </div>

            {/* Week 1 */}
            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
                  <span className="text-pink-400 font-bold">W1</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Week 1: Foundation & Brand Launch</h4>
                  <p className="text-slate-400 text-sm">Days 1-7: Build the brand presence</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    day: 'Day 1-2',
                    tasks: [
                      'Finalize brand guidelines (colors, voice, logo usage)',
                      'Set up Instagram, TikTok, LinkedIn profiles with consistent branding',
                      'Create content templates (story templates, post formats)',
                      'Write first 15 posts and schedule'
                    ]
                  },
                  {
                    day: 'Day 3-4',
                    tasks: [
                      'Launch Instagram with 9-post grid (looks established)',
                      'Start daily posting schedule',
                      'Identify and DM first 30 nano-influencers',
                      'Create WhatsApp broadcast channel'
                    ]
                  },
                  {
                    day: 'Day 5-7',
                    tasks: [
                      'First influencer dinners (3-5 nano-influencers)',
                      'Launch "First 100 Hunters" recruitment',
                      'Begin merchant co-marketing setup (table tents, stickers)',
                      'Submit app store listing optimization'
                    ]
                  }
                ].map((block) => (
                  <div key={block.day} className="p-4 bg-white/5 rounded-lg">
                    <h5 className="text-pink-400 font-bold mb-2">{block.day}</h5>
                    <ul className="space-y-1">
                      {block.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                          <CheckCircle className="text-green-400 mt-0.5 flex-shrink-0" size={14} />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Week 2 */}
            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <span className="text-purple-400 font-bold">W2</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Week 2: Influencer Activation</h4>
                  <p className="text-slate-400 text-sm">Days 8-14: Activate influencer network</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    day: 'Day 8-9',
                    tasks: [
                      'Host first "Nuqta Hunters Dinner" for top 10 influencers',
                      'Coordinate posting schedule for maximum overlap',
                      'Launch first TikTok video (trending sound + food reveal)',
                      'Send press kit to 20 journalists/bloggers'
                    ]
                  },
                  {
                    day: 'Day 10-11',
                    tasks: [
                      'First wave of influencer posts go live (coordinated)',
                      'Engage heavily on all posts (comments, shares)',
                      'Launch referral campaign with special influencer codes',
                      'Begin WhatsApp community building'
                    ]
                  },
                  {
                    day: 'Day 12-14',
                    tasks: [
                      'Second wave of influencer content',
                      'Launch "Golden Spin" referral feature with countdown',
                      'First merchant takeover on Instagram',
                      'Analyze first week metrics, optimize content'
                    ]
                  }
                ].map((block) => (
                  <div key={block.day} className="p-4 bg-white/5 rounded-lg">
                    <h5 className="text-purple-400 font-bold mb-2">{block.day}</h5>
                    <ul className="space-y-1">
                      {block.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                          <CheckCircle className="text-green-400 mt-0.5 flex-shrink-0" size={14} />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Week 3 */}
            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-400 font-bold">W3</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Week 3: Community & Viral Push</h4>
                  <p className="text-slate-400 text-sm">Days 15-21: Build momentum</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    day: 'Day 15-16',
                    tasks: [
                      'Launch "Nuqta Hunters Challenge" - most coins wins grand prize',
                      'Activate Tier 2 (micro) influencers with bigger reach',
                      'First PR piece published (target: Khaleej Times or Gulf News)',
                      'Launch weekly leaderboard feature'
                    ]
                  },
                  {
                    day: 'Day 17-18',
                    tasks: [
                      'TikTok challenge launch with branded hashtag #NuqtaGold',
                      'Cross-promote with 2-3 partner brands',
                      'Send personalized outreach to first 1,000 users for reviews',
                      'Mid-month check: Should be at 3,000+ users'
                    ]
                  },
                  {
                    day: 'Day 19-21',
                    tasks: [
                      'Launch UGC campaign "Show Your Golden Moment"',
                      'Best UGC featured on official channels',
                      'Weekend special: Double coins at all merchants',
                      'Prep for final week push'
                    ]
                  }
                ].map((block) => (
                  <div key={block.day} className="p-4 bg-white/5 rounded-lg">
                    <h5 className="text-green-400 font-bold mb-2">{block.day}</h5>
                    <ul className="space-y-1">
                      {block.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                          <CheckCircle className="text-green-400 mt-0.5 flex-shrink-0" size={14} />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Week 4 */}
            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                  <span className="text-yellow-400 font-bold">W4</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Week 4: Golden Week Launch Event</h4>
                  <p className="text-slate-400 text-sm">Days 22-30: Major push to 10K</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    day: 'Day 22-24',
                    tasks: [
                      'Launch "Golden Week" - 7 days of special rewards',
                      'Daily surprise drops (mystery rewards at random times)',
                      'All influencers post simultaneously (coordinated wave)',
                      'Limited edition "Founding Hunter" badge for sign-ups'
                    ]
                  },
                  {
                    day: 'Day 25-27',
                    tasks: [
                      'Activate Tier 3 (mid-tier) influencers with 100K+ reach',
                      'Live event: "Golden Hour" at flagship merchant location',
                      'Push notification blitz to existing users for referrals',
                      'Target: Hit 7,000 users'
                    ]
                  },
                  {
                    day: 'Day 28-30',
                    tasks: [
                      'Final push: Triple referral bonus weekend',
                      'Announce "Top Hunter of the Month" winners',
                      'Close Golden Week with gratitude post featuring community',
                      'Hit 50,000 users milestone 🎉',
                      'Compile learnings for Month 2 strategy'
                    ]
                  }
                ].map((block) => (
                  <div key={block.day} className="p-4 bg-white/5 rounded-lg">
                    <h5 className="text-yellow-400 font-bold mb-2">{block.day}</h5>
                    <ul className="space-y-1">
                      {block.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                          <CheckCircle className="text-green-400 mt-0.5 flex-shrink-0" size={14} />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Budget Allocation */}
            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <PieChart className="text-pink-400" size={20} />
                30-Day Marketing Budget: AED 25,000
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  {[
                    { category: 'Influencer Marketing', amount: 'AED 12,000', percent: '48%' },
                    { category: 'Content Production', amount: 'AED 5,000', percent: '20%' },
                    { category: 'Events & Activations', amount: 'AED 4,000', percent: '16%' },
                    { category: 'Paid Social (Boosting)', amount: 'AED 2,500', percent: '10%' },
                    { category: 'Tools & Software', amount: 'AED 1,500', percent: '6%' }
                  ].map((item) => (
                    <div key={item.category} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <span className="text-slate-300">{item.category}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-pink-400 font-bold">{item.amount}</span>
                        <span className="text-slate-500 text-sm">{item.percent}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-pink-500/10 border border-pink-500/30 rounded-lg">
                  <h5 className="text-pink-400 font-bold mb-2">Budget Philosophy</h5>
                  <p className="text-slate-300 text-sm">
                    This budget is intentionally lean. I've launched brands with $10M budgets and $10K budgets.
                    The $10K ones taught me more. At this stage, we need smart spending, not big spending.
                    Every dirham should generate content, community, or conversions. If we nail this 30 days,
                    we'll have proven the model for a larger Month 2 investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Marketing Metrics Section */}
        {activeSection === 'metrics' && (
          <div className="space-y-8">
            <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-pink-400 mb-2">Marketing KPIs & Success Metrics</h3>
              <p className="text-slate-400">How we measure success and iterate</p>
            </div>

            {/* 30-Day Targets */}
            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-6">30-Day Targets</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { metric: 'Total Users', target: '10,000', current: '0', status: 'pre-launch' },
                  { metric: 'Instagram Followers', target: '5,000', current: '0', status: 'starting' },
                  { metric: 'TikTok Followers', target: '2,500', current: '0', status: 'starting' },
                  { metric: 'Active Influencers', target: '50', current: '0', status: 'recruiting' },
                  { metric: 'Content Pieces Created', target: '120', current: '0', status: 'starting' },
                  { metric: 'Press Mentions', target: '5', current: '0', status: 'pitching' },
                  { metric: 'WhatsApp Subscribers', target: '3,000', current: '0', status: 'building' },
                  { metric: 'Community Members', target: '500', current: '0', status: 'starting' }
                ].map((item) => (
                  <div key={item.metric} className="bg-white/5 rounded-lg p-4">
                    <p className="text-slate-400 text-sm mb-1">{item.metric}</p>
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-bold text-white">{item.target}</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-slate-500 text-xs">Current: {item.current}</span>
                      <span className="text-xs px-2 py-1 bg-pink-500/20 text-pink-400 rounded">
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Funnel Metrics */}
            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-6">Marketing Funnel Targets</h3>
              <div className="space-y-4">
                {[
                  { stage: 'Awareness', metric: 'Impressions', target: '1,000,000', conversion: '100%' },
                  { stage: 'Interest', metric: 'Profile Visits', target: '50,000', conversion: '5%' },
                  { stage: 'Consideration', metric: 'App Store Views', target: '25,000', conversion: '50%' },
                  { stage: 'Download', metric: 'App Downloads', target: '15,000', conversion: '60%' },
                  { stage: 'Activation', metric: 'Registered Users', target: '10,000', conversion: '67%' },
                  { stage: 'First Transaction', metric: 'Active Users', target: '3,000', conversion: '30%' }
                ].map((item, idx) => (
                  <div key={item.stage} className="flex items-center gap-4">
                    <div className="w-24 text-right">
                      <span className="text-pink-400 font-medium">{item.stage}</span>
                    </div>
                    <div className="flex-1 bg-white/5 rounded-lg p-4 flex items-center justify-between">
                      <span className="text-slate-300">{item.metric}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-white font-bold">{item.target}</span>
                        {idx > 0 && (
                          <span className="text-slate-500 text-sm">({item.conversion} conversion)</span>
                        )}
                      </div>
                    </div>
                    {idx < 5 && (
                      <ArrowRight className="text-slate-600" size={20} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Channel Performance */}
            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-6">Target Channel Performance</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-slate-400">Channel</th>
                      <th className="text-center py-3 px-4 text-slate-400">Target Users</th>
                      <th className="text-center py-3 px-4 text-slate-400">Est. CAC</th>
                      <th className="text-center py-3 px-4 text-slate-400">% of Total</th>
                      <th className="text-center py-3 px-4 text-slate-400">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { channel: 'Influencer Marketing', users: '4,000', cac: 'AED 3', percent: '40%', priority: 'P1' },
                      { channel: 'Referral Program', users: '2,500', cac: 'AED 2', percent: '25%', priority: 'P1' },
                      { channel: 'Organic Social', users: '1,500', cac: 'AED 0', percent: '15%', priority: 'P2' },
                      { channel: 'Merchant Co-Marketing', users: '1,000', cac: 'AED 1', percent: '10%', priority: 'P2' },
                      { channel: 'PR/Earned Media', users: '500', cac: 'AED 0', percent: '5%', priority: 'P3' },
                      { channel: 'Paid Social', users: '500', cac: 'AED 5', percent: '5%', priority: 'P3' }
                    ].map((row) => (
                      <tr key={row.channel} className="border-b border-white/5">
                        <td className="py-3 px-4 text-slate-300">{row.channel}</td>
                        <td className="py-3 px-4 text-center text-white font-medium">{row.users}</td>
                        <td className="py-3 px-4 text-center text-green-400">{row.cac}</td>
                        <td className="py-3 px-4 text-center text-slate-400">{row.percent}</td>
                        <td className="py-3 px-4 text-center">
                          <span className={`px-2 py-1 rounded text-xs ${
                            row.priority === 'P1' ? 'bg-red-500/20 text-red-400' :
                            row.priority === 'P2' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-green-500/20 text-green-400'
                          }`}>
                            {row.priority}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Weekly Review Cadence */}
            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Calendar className="text-pink-400" size={20} />
                Weekly Marketing Review
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h5 className="text-pink-400 font-bold">Every Monday - Marketing Standup</h5>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 mt-0.5 flex-shrink-0" size={14} />
                      <span>Review last week's content performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 mt-0.5 flex-shrink-0" size={14} />
                      <span>Analyze influencer ROI by post</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 mt-0.5 flex-shrink-0" size={14} />
                      <span>Track user acquisition by channel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 mt-0.5 flex-shrink-0" size={14} />
                      <span>Identify top-performing content themes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 mt-0.5 flex-shrink-0" size={14} />
                      <span>Plan this week's content calendar</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h5 className="text-pink-400 font-bold">Key Questions Each Week</h5>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="p-2 bg-white/5 rounded">What content got the most engagement?</li>
                    <li className="p-2 bg-white/5 rounded">Which influencers drove actual downloads?</li>
                    <li className="p-2 bg-white/5 rounded">What's our best-performing referral source?</li>
                    <li className="p-2 bg-white/5 rounded">Are we on track for 50K users?</li>
                    <li className="p-2 bg-white/5 rounded">What's not working that we should stop?</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CMO Commitment */}
            <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 rounded-xl border border-pink-500/30 p-6">
              <div className="flex items-start gap-4">
                <MessageSquare className="text-pink-400 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">My Commitment as CMO Agent</h4>
                  <p className="text-slate-300 leading-relaxed">
                    "In 21 years of marketing, I've learned that startups don't fail for lack of money - they fail
                    for lack of focus. This 30-day plan is intentionally aggressive because urgency creates momentum.
                    We don't have the luxury of slow growth. Every day without marketing is a day competitors are
                    building their moat. My commitment: If we execute this plan with discipline, we will hit 10,000
                    users. Not might. Will. I've done this before at Careem (0 to 100K in 60 days), at Noon
                    (10M to 50M in 3 years). The playbook works. The only variable is execution."
                  </p>
                  <div className="mt-4 p-4 bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-lg">
                    <p className="text-[#c9a227] font-bold">
                      The Golden Rule: Every piece of content should make someone either screenshot it, share it,
                      or download the app. If it doesn't do one of these, we don't post it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
