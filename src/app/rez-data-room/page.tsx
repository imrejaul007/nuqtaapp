'use client';

import React from 'react';
import Link from 'next/link';
import {
  FolderOpen, FileText, BarChart3, Users, Shield,
  ArrowLeft, ExternalLink, CheckCircle, Lock,
  DollarSign, MapPin, Target, Rocket, Globe, Store,
  TrendingUp, Briefcase, Scale, Coins
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ============================================
// ReZ DATA ROOM — Virtual data room for investor due diligence
// Links to all relevant pages organized by category
// ============================================

const dataRoomSections = [
  {
    title: 'Executive Summary',
    icon: Rocket,
    color: 'orange',
    desc: 'Quick overview for busy investors',
    docs: [
      { name: 'ReZ Pitch Deck (12 Slides)', route: '/rez-deck', type: 'Interactive', status: 'ready' },
      { name: 'One-Pager Summary', route: '/rez-one-pager', type: 'Printable PDF', status: 'ready' },
      { name: 'Video Pitch Script', route: '/rez-video-script', type: 'Script', status: 'ready' },
    ],
  },
  {
    title: 'Financial Model & Projections',
    icon: BarChart3,
    color: 'green',
    desc: '3-year P&L with interactive assumptions',
    docs: [
      { name: 'ReZ Financial Model (Interactive)', route: '/rez-financials', type: 'Dashboard', status: 'ready' },
      { name: 'Monthly Breakdown (M1-M12)', route: '/rez-financials', type: 'Tab: Monthly', status: 'ready' },
      { name: 'Income Statement (3-Year)', route: '/rez-financials', type: 'Tab: Income', status: 'ready' },
      { name: 'Unit Economics Calculator', route: '/rez-financials', type: 'Tab: Unit Economics', status: 'ready' },
      { name: 'Scenario Analysis (Bull/Base/Bear)', route: '/rez-financials', type: 'Tab: Scenarios', status: 'ready' },
      { name: 'Adjustable Assumptions', route: '/rez-financials', type: 'Tab: Assumptions', status: 'ready' },
    ],
  },
  {
    title: 'Acquisition Strategy',
    icon: Target,
    color: 'purple',
    desc: '12 channels, 5 phases, complete playbooks',
    docs: [
      { name: 'Full Acquisition Strategy (10 Tabs)', route: '/rez-financials/acquisition', type: 'Interactive', status: 'ready' },
      { name: 'College Business Fest Plan', route: '/rez-financials/acquisition', type: 'Tab: College Fest', status: 'ready' },
      { name: 'Merchant Onboarding Plan (500+ mapped)', route: '/rez-financials/acquisition', type: 'Tab: Merchant Plan', status: 'ready' },
      { name: '12 Niche Merchant Playbooks', route: '/rez-financials/acquisition', type: 'Tab: Merchant Plan', status: 'ready' },
      { name: 'Budget Allocation (M1-M12)', route: '/rez-financials/acquisition', type: 'Tab: Budget', status: 'ready' },
      { name: 'Funnel Metrics & KPIs', route: '/rez-financials/acquisition', type: 'Tab: Funnel', status: 'ready' },
    ],
  },
  {
    title: 'Legal & Investment Documents',
    icon: Scale,
    color: 'blue',
    desc: 'SAFE/iSAFE terms, cap table, funding docs',
    docs: [
      { name: 'iSAFE Agreement & Terms', route: '/rez-financials/isafe', type: 'Legal Template', status: 'ready' },
      { name: 'Funding Documents Center', route: '/funding-docs', type: 'Cap Table, SAFE, Use of Funds', status: 'ready' },
      { name: 'Cap Table (Pre-Round)', route: '/funding-docs', type: 'Tab: Cap Table', status: 'ready' },
      { name: 'Use of Funds Breakdown', route: '/funding-docs', type: 'Tab: Use of Funds', status: 'ready' },
      { name: 'Founder Commitment & Governance', route: '/commitment', type: 'Accountability', status: 'ready' },
    ],
  },
  {
    title: 'Market & Competitive Analysis',
    icon: Globe,
    color: 'cyan',
    desc: 'Market size, competition, positioning',
    docs: [
      { name: 'VC Investment Memo', route: '/vc-investment-memo', type: 'Scorecard, Risks, Returns', status: 'ready' },
      { name: 'Investor FAQ', route: '/investor-faq', type: 'Q&A', status: 'ready' },
      { name: 'Competitive Positioning', route: '/rez-deck', type: 'Slide 10: Competition', status: 'ready' },
    ],
  },
  {
    title: 'Team & Organization',
    icon: Users,
    color: 'yellow',
    desc: 'Leadership, hiring plan, org structure',
    docs: [
      { name: 'Executive Team Profiles', route: '/executive-team', type: 'C-Suite Details', status: 'ready' },
      { name: 'Full Team Breakdown', route: '/team', type: 'All Departments', status: 'ready' },
      { name: 'Hiring Plan & Team Scaling', route: '/rez-financials/acquisition', type: 'Tab: Team', status: 'ready' },
      { name: 'Team Blueprint (Series A Stage)', route: '/team-blueprint', type: 'Future Org Chart', status: 'ready' },
    ],
  },
  {
    title: 'Product & Technology',
    icon: Coins,
    color: 'pink',
    desc: 'Product features, tech stack, roadmap',
    docs: [
      { name: 'User Journey & Product Flow', route: '/user-journey', type: 'UX Flow', status: 'ready' },
      { name: 'Value Chain Analysis', route: '/value-chain', type: 'Business Architecture', status: 'ready' },
      { name: 'Viral Growth Mechanics', route: '/viral-growth', type: 'Growth Loops', status: 'ready' },
    ],
  },
];

export default function ReZDataRoomPage() {
  const totalDocs = dataRoomSections.reduce((sum, s) => sum + s.docs.length, 0);
  const readyDocs = dataRoomSections.reduce((sum, s) => sum + s.docs.filter(d => d.status === 'ready').length, 0);

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900/80 via-blue-900/30 to-slate-900/80 border-b border-blue-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <Link href="/rez-financials/investors" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-4 text-sm">
            <ArrowLeft size={16} /> Back to Investor Strategy
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <FolderOpen size={20} className="text-blue-400" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">ReZ Data Room</h1>
              <p className="text-slate-300 text-sm">Virtual Due Diligence Room for Investors</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            {[
              { label: 'Total Documents', value: `${totalDocs}`, sub: 'Across all categories' },
              { label: 'Ready', value: `${readyDocs}/${totalDocs}`, sub: 'Documents complete' },
              { label: 'Categories', value: `${dataRoomSections.length}`, sub: 'Organized sections' },
              { label: 'Last Updated', value: 'Mar 2026', sub: 'All current' },
            ].map(kpi => (
              <div key={kpi.label} className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-3">
                <p className="text-xs text-slate-400">{kpi.label}</p>
                <p className="text-xl font-bold text-white">{kpi.value}</p>
                <p className="text-xs text-blue-400">{kpi.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        {/* Quick Access */}
        <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-5">
          <h3 className="text-orange-400 font-bold mb-3">Quick Access — Start Here</h3>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            {[
              { name: 'Pitch Deck', route: '/rez-deck', icon: FileText },
              { name: 'One-Pager', route: '/rez-one-pager', icon: FileText },
              { name: 'Financial Model', route: '/rez-financials', icon: BarChart3 },
              { name: 'iSAFE Terms', route: '/rez-financials/isafe', icon: Shield },
            ].map(item => (
              <Link key={item.name} href={item.route} className="flex items-center gap-2 bg-slate-800/50 border border-orange-500/20 rounded-lg px-4 py-3 hover:bg-slate-800 transition-colors">
                <item.icon size={16} className="text-orange-400" />
                <span className="text-white font-medium text-sm">{item.name}</span>
                <ExternalLink size={12} className="text-slate-500 ml-auto" />
              </Link>
            ))}
          </div>
        </div>

        {/* Sections */}
        {dataRoomSections.map(section => {
          const Icon = section.icon;
          return (
            <div key={section.title} className={`bg-slate-800/50 border border-${section.color}-500/20 rounded-xl overflow-hidden`}>
              <div className={`bg-${section.color}-500/5 px-5 py-3 border-b border-${section.color}-500/20`}>
                <div className="flex items-center gap-2">
                  <Icon size={18} className={`text-${section.color}-400`} />
                  <h2 className="text-white font-bold">{section.title}</h2>
                  <span className="text-xs text-slate-500 ml-2">({section.docs.length} documents)</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">{section.desc}</p>
              </div>
              <div className="divide-y divide-slate-700/30">
                {section.docs.map(doc => (
                  <Link key={doc.name} href={doc.route} className="flex items-center gap-3 px-5 py-3 hover:bg-slate-800/30 transition-colors">
                    <FileText size={14} className="text-slate-500 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white font-medium truncate">{doc.name}</p>
                      <p className="text-xs text-slate-500">{doc.type}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {doc.status === 'ready' ? (
                        <span className="flex items-center gap-1 text-xs text-green-400"><CheckCircle size={12} /> Ready</span>
                      ) : (
                        <span className="flex items-center gap-1 text-xs text-yellow-400"><Lock size={12} /> Pending</span>
                      )}
                      <ExternalLink size={12} className="text-slate-600" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}

        {/* Confidentiality Note */}
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 text-center">
          <Lock size={20} className="text-slate-400 mx-auto mb-2" />
          <h3 className="text-white font-bold text-sm">Confidentiality Notice</h3>
          <p className="text-xs text-slate-400 mt-1 max-w-lg mx-auto">
            This data room contains confidential and proprietary information of ReZ (Nuqta Technologies Pvt. Ltd.). By accessing these documents, you agree to maintain strict confidentiality and use the information solely for the purpose of evaluating a potential investment.
          </p>
        </div>
      </div>

      <GlobalFooter />
    </div>
  );
}
