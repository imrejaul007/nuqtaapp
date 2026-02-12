'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen, Layers, Package, Code, Smartphone, Store, Shield,
  Coins, Wallet, BarChart3, GitBranch, Terminal, ArrowRight,
  ChevronDown, ChevronUp, CheckCircle, AlertTriangle, Server,
  Globe, Zap, Users, Brain, Bell, Eye, Fingerprint, Settings,
  Network, Activity, Cloud, CreditCard, DollarSign,
  ShoppingCart, Lock, FileText, Building2, Search,
  ArrowUpRight, TrendingUp, Clock, Star, MapPin, Heart,
  Monitor, Cpu, HardDrive, Wifi
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

interface Section { id: string; label: string; icon: React.ElementType; screens?: number; }

const sections: Section[] = [
  { id: 'overview', label: 'Overview & Architecture', icon: BookOpen },
  { id: 'dashboards', label: 'Dashboards', icon: BarChart3, screens: 10 },
  { id: 'analytics', label: 'Analytics', icon: TrendingUp, screens: 10 },
  { id: 'coins', label: 'Coin Economy', icon: Coins, screens: 9 },
  { id: 'content', label: 'Content', icon: FileText, screens: 10 },
  { id: 'finance', label: 'Finance', icon: DollarSign, screens: 9 },
  { id: 'gamification', label: 'Gamification', icon: Star, screens: 4 },
  { id: 'infrastructure', label: 'Infrastructure', icon: Server, screens: 11 },
  { id: 'marketing', label: 'Marketing', icon: Eye, screens: 12 },
  { id: 'merchants', label: 'Merchant Management', icon: Store, screens: 7 },
  { id: 'offers', label: 'Offers', icon: Zap, screens: 4 },
  { id: 'operations', label: 'Operations', icon: Settings, screens: 8 },
  { id: 'platform', label: 'Platform & Config', icon: Shield, screens: 64 },
  { id: 'apps', label: 'Specialized Apps', icon: Code, screens: 7 },
  { id: 'users', label: 'Users', icon: Users, screens: 5 },
  { id: 'crosscutting', label: 'Cross-Cutting Specs', icon: Layers },
];

// ─── Helpers ────────────────────────────────────────────────────────
function Expandable({ title, children, defaultOpen = false, icon: Icon, color = 'text-red-400' }: {
  title: string; children: React.ReactNode; defaultOpen?: boolean; icon?: React.ElementType; color?: string;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-slate-700/50 rounded-xl overflow-hidden mb-4">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 bg-slate-800/50 hover:bg-slate-800/80 transition-colors text-left">
        <div className="flex items-center gap-3">{Icon && <Icon className={`w-5 h-5 ${color}`} />}<span className="font-semibold text-white">{title}</span></div>
        {open ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
      </button>
      {open && <div className="px-5 py-4 bg-slate-900/30">{children}</div>}
    </div>
  );
}
function DocTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto mb-4"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700/50">
      {headers.map((h, i) => (<th key={i} className="text-left px-3 py-2 text-red-400 font-semibold whitespace-nowrap">{h}</th>))}
    </tr></thead><tbody>{rows.map((row, i) => (
      <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30">
        {row.map((cell, j) => (<td key={j} className={`px-3 py-2 ${j === 0 ? 'text-white font-medium' : 'text-slate-300'} whitespace-nowrap`}>{cell}</td>))}
      </tr>
    ))}</tbody></table></div>
  );
}
function CodeBlock({ title, code }: { title?: string; code: string }) {
  return (<div className="mb-4">{title && <p className="text-xs text-red-400 font-semibold mb-1">{title}</p>}<pre className="bg-slate-950 border border-slate-700/50 rounded-lg p-4 text-xs text-slate-300 overflow-x-auto whitespace-pre">{code}</pre></div>);
}
function Badge({ text, color = 'bg-red-500/20 text-red-400' }: { text: string; color?: string }) {
  return <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${color}`}>{text}</span>;
}
function InfoBox({ children, type = 'info' }: { children: React.ReactNode; type?: 'info' | 'warning' | 'success' }) {
  const colors = { info: 'bg-red-500/10 border-red-500/30 text-red-300', warning: 'bg-amber-500/10 border-amber-500/30 text-amber-300', success: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' };
  return <div className={`border rounded-lg p-4 text-sm mb-4 ${colors[type]}`}>{children}</div>;
}

// ════════════════════════════════════════════════════════════════════
function OverviewSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">HQ Admin — Overview</h2>
      <p className="text-slate-400">RTMN headquarters admin panel. 224 screens across 14 categories. Controls all merchants, users, coins, content, and platform configuration.</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[{ label: 'Total Screens', value: '224', color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/30' },
          { label: 'Categories', value: '14', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30' },
          { label: 'Admin Roles', value: '4', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/30' },
          { label: 'Platform Config', value: '64', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/30' },
        ].map(s => (<div key={s.label} className={`${s.bg} border rounded-lg p-4 text-center`}><div className={`text-2xl font-bold ${s.color}`}>{s.value}</div><div className="text-xs text-slate-400 mt-1">{s.label}</div></div>))}
      </div>
      <Expandable title="Admin Role Hierarchy" icon={Shield} defaultOpen={true}>
        <DocTable headers={['Level', 'Role', 'Access Scope', 'Key Powers']} rows={[
          ['100', 'Super Admin', 'Full platform access', 'Coin minting, emergency controls, founder vault, system config'],
          ['80', 'Admin', 'Most platform features', 'Merchant management, settlements, campaigns, reports, user management'],
          ['70', 'Operator', 'Routine operations', 'Content moderation, support escalation, order management, basic reports'],
          ['60', 'Support', 'Customer-facing only', 'Customer lookup, support tickets, order status, basic refunds'],
        ]} />
        <InfoBox type="warning">Zone-based access control: admins can be restricted to City, Region, Metro, or Country scope.</InfoBox>
      </Expandable>
      <Expandable title="System Architecture" icon={Layers}>
        <CodeBlock code={`┌──────────────────────────────────────────────────┐
│               HQ ADMIN PANEL (Web)                │
│  React + Next.js + Tailwind                       │
│  224 screens, role-based rendering                │
└──────────────────┬───────────────────────────────┘
                   │ HTTPS / WebSocket
                   ▼
┌──────────────────────────────────────────────────┐
│           RABTUL API GATEWAY                      │
│  Admin auth (Level 60-100) → Rate limiting        │
│  → Zone-based routing → Audit logging             │
└──────┬────────┬────────┬────────┬───────────────┘
       ▼        ▼        ▼        ▼
  ┌────────┐ ┌──────┐ ┌──────┐ ┌──────┐
  │Merchant│ │ Coin │ │ Rule │ │Fraud │
  │Service │ │Ledger│ │Engine│ │Audit │
  └────────┘ └──────┘ └──────┘ └──────┘

KEY PRINCIPLE: HQ Admin READS from all services
but WRITES only through Rabtul API Gateway.
All admin actions are audit-logged.`} />
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
function DashboardsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Dashboards</h2>
      <p className="text-slate-400">10 screens — main admin KPIs plus specialized dashboards for each department.</p>
      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['Main Dashboard', 'AdminDashboard', 'Standard', 'Platform-wide KPIs: GMV, active merchants, users, transactions today'],
        ['Global Dashboard', 'AdminGlobalDashboard', 'Tab View', 'Global business metrics: all countries, all products, all time'],
        ['Marketing Dashboard', 'AdminMarketingDashboard', 'Standard', 'Campaign performance, ad spend, ROI, acquisition funnel'],
        ['Finance Dashboard', 'AdminFinanceDashboard', 'Standard', 'Revenue, settlements, refunds, platform fees, payment gateway health'],
        ['Operations Dashboard', 'AdminOperationsDashboard', 'Standard', 'Order fulfillment, delivery SLAs, support tickets, uptime'],
        ['Regional Dashboard', 'AdminRegionalDashboard', 'Standard', 'Per-city/region breakdown: GMV, merchants, users, growth'],
        ['Support Dashboard', 'AdminSupportDashboard', 'Standard', 'Ticket volume, resolution time, CSAT, escalation rate'],
        ['Content Dashboard', 'AdminContentDashboard', 'Standard', 'UGC volume, moderation queue, creator performance, viral content'],
        ['Analytics Dashboard', 'AdminAnalyticsDashboard', 'Tab View', 'Custom analytics: cohort analysis, funnels, retention, LTV'],
        ['Ecosystem Analytics', 'AdminEcosystemAnalytics', 'Standard', 'Cross-product metrics: how Nuqta, BizOne, Wasil, Adzy interact'],
      ]} />
      <Expandable title="Main Dashboard KPI Cards" icon={BarChart3} defaultOpen={true}>
        <DocTable headers={['KPI', 'Source', 'Refresh', 'Access Level']} rows={[
          ['Total GMV Today', 'SUM(all transactions)', 'Real-time', 'Admin+'],
          ['Active Merchants', 'COUNT(merchants WHERE status=active)', 'Every 5 min', 'Admin+'],
          ['Active Users (DAU)', 'COUNT(DISTINCT users active today)', 'Every 15 min', 'Admin+'],
          ['Transactions Today', 'COUNT(transactions WHERE date=today)', 'Real-time', 'Admin+'],
          ['Coins in Circulation', 'SUM(wallet balances)', 'Every 15 min', 'Super Admin'],
          ['Platform Revenue', 'SUM(commission + fees)', 'Hourly', 'Super Admin'],
          ['Support Tickets Open', 'COUNT(tickets WHERE status=open)', 'Real-time', 'Operator+'],
          ['Fraud Alerts', 'COUNT(fraud_alerts WHERE status=new)', 'Real-time', 'Admin+'],
        ]} />
      </Expandable>
      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['GET', '/api/admin/dashboard/summary', 'Main dashboard KPIs', 'Operator+'],
          ['GET', '/api/admin/dashboard/global', 'Global metrics with filters', 'Admin+'],
          ['GET', '/api/admin/dashboard/regional', 'Regional breakdown', 'Admin+'],
          ['GET', '/api/admin/dashboard/finance', 'Finance metrics', 'Admin+'],
          ['GET', '/api/admin/dashboard/operations', 'Operations metrics', 'Operator+'],
          ['GET', '/api/admin/dashboard/ecosystem', 'Cross-product analytics', 'Super Admin'],
        ]} />
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
function AnalyticsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Analytics</h2>
      <p className="text-slate-400">10 screens — core analytics, AI insights, heatmaps, predictions, session replay, and product comparison.</p>
      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['Core Analytics', 'AdminAnalytics', 'Tab View', 'Metrics dashboard: users, revenue, orders, engagement, retention'],
        ['AI Insights', 'AdminAIInsights', 'Standard', 'AI predictions: revenue forecasting, churn risk, growth opportunities'],
        ['AI Recommendations', 'AdminAIRecommendations', 'Standard', 'Configure AIRA recommendation engine: algorithm weights, categories'],
        ['AI Moderation', 'AdminAIModerationQueue', 'Standard', 'AI-flagged content for human review: images, text, reviews'],
        ['Heatmaps', 'AdminHeatmaps', 'Standard', 'User behavior heatmaps: app screen engagement, click patterns'],
        ['Predictive Analytics', 'AdminPredictiveAnalytics', 'Standard', 'ML-based predictions: demand, revenue, churn, seasonal patterns'],
        ['Price Tracking', 'AdminPriceTracking', 'Standard', 'Monitor merchant pricing across categories, detect anomalies'],
        ['Product Comparison', 'AdminProductComparison', 'Standard', 'Compare product performance across merchants'],
        ['Recommendations', 'AdminRecommendations', 'Standard', 'Manage recommendation algorithms: collaborative, content-based, hybrid'],
        ['Session Replay', 'AdminSessionReplay', 'Standard', 'Replay user sessions to debug UX issues (anonymized)'],
      ]} />
      <Expandable title="AI Prediction Models" icon={Brain} defaultOpen={true}>
        <DocTable headers={['Model', 'Input', 'Output', 'Accuracy', 'Retrain']} rows={[
          ['Revenue Forecast', 'Historical revenue, seasonality, events', '7/30/90 day revenue prediction', '92%', 'Weekly'],
          ['Churn Prediction', 'Activity, orders, engagement, recency', 'Churn probability per user (0-1)', '87%', 'Daily'],
          ['Demand Forecast', 'Sales history, weather, events, trends', 'Product demand per SKU per day', '85%', 'Daily'],
          ['Fraud Scoring', 'Transaction patterns, device, velocity', 'Risk score per transaction (0-100)', '96%', 'Hourly'],
          ['Price Optimization', 'Demand elasticity, competitor pricing', 'Optimal price per product', '78%', 'Weekly'],
        ]} />
      </Expandable>
      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['GET', '/api/admin/analytics/overview', 'Core analytics dashboard', 'Operator+'],
          ['GET', '/api/admin/analytics/ai-insights', 'AI-generated insights', 'Admin+'],
          ['GET', '/api/admin/analytics/heatmaps', 'User behavior heatmaps', 'Admin+'],
          ['GET', '/api/admin/analytics/predictions/{type}', 'ML predictions by type', 'Admin+'],
          ['PUT', '/api/admin/analytics/recommendations/config', 'Update recommendation config', 'Super Admin'],
          ['GET', '/api/admin/analytics/sessions/{id}', 'Session replay data', 'Admin+'],
        ]} />
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
function CoinsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Coin Economy</h2>
      <p className="text-slate-400">9 screens — coin issuance, emergency controls, events, rules engine, economy overview, earning matrix, promo coins, promotion launcher, and redemption rules.</p>
      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['Issuance Control', 'AdminCoinIssuanceControl', 'Standard', 'Set daily/monthly coin issuance limits, track circulation'],
        ['Emergency Controls', 'AdminCoinEmergencyControls', 'Standard', 'Circuit breakers: freeze all coin operations, pause earning/burning'],
        ['Coin Events', 'AdminCoinEvents', 'Standard', 'Define events that trigger coin earning (purchase, review, referral)'],
        ['Rules Engine', 'AdminCoinRulesEngine', 'Standard', 'Expiry rules, rollover policies, minimum balances, caps'],
        ['Economy Overview', 'AdminCoinSystemOverview', 'Standard', 'Total supply, velocity, earn/burn ratio, inflation rate'],
        ['Earning Matrix', 'AdminEarningRuleMatrix', 'Standard', 'Activity-based earning rules: purchase %, actions, bonuses'],
        ['Promo Coins', 'AdminPromoCoinManager', 'Standard', 'Create promotional coin campaigns with expiry and restrictions'],
        ['Promotion Launcher', 'AdminPromotionLauncher', 'Standard', 'Launch coin promotions: 2x/3x earn events, sign-up bonuses'],
        ['Redemption Rules', 'AdminRedemptionRules', 'Standard', 'Set redemption restrictions: min balance, max per tx, excluded merchants'],
      ]} />
      <Expandable title="Coin Economy Health Metrics" icon={Coins} defaultOpen={true}>
        <DocTable headers={['Metric', 'Formula', 'Healthy Range', 'Alert Threshold']} rows={[
          ['Circulation', 'Total coins held by all users', 'Growing 5-10% monthly', '> 15% monthly growth'],
          ['Velocity', 'Coins redeemed / coins in circulation', '0.3-0.5 per month', '< 0.2 or > 0.7'],
          ['Earn/Burn Ratio', 'Coins earned / coins burned', '1.2-1.8', '> 2.0 (inflation risk)'],
          ['Expiry Rate', 'Expired coins / total earned', '10-20%', '> 30% (bad UX)'],
          ['Redemption Rate', 'Users who redeemed / users who earned', '40-60%', '< 30% (low engagement)'],
        ]} />
      </Expandable>
      <Expandable title="Emergency Controls" icon={AlertTriangle}>
        <CodeBlock code={`CIRCUIT BREAKERS (Super Admin only):

1. FREEZE ALL COIN OPS
   → Immediately stops all earn and burn
   → Existing balances preserved
   → Use case: suspected fraud, system bug

2. PAUSE EARNING ONLY
   → Users cannot earn new coins
   → Can still redeem existing balance
   → Use case: inflation control

3. PAUSE REDEMPTION ONLY
   → Users cannot redeem coins
   → Can still earn new coins
   → Use case: settlement issues

4. RATE LIMIT
   → Cap earning to X coins/user/day
   → Cap redemption to X coins/user/day
   → Use case: gradual control

5. MERCHANT FREEZE
   → Freeze coin ops for specific merchant
   → Use case: merchant fraud investigation

All emergency actions logged in audit trail.
Auto-recovery after 24h unless manually extended.`} />
      </Expandable>
      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['GET', '/api/admin/coins/overview', 'Coin economy health dashboard', 'Admin+'],
          ['POST', '/api/admin/coins/mint', 'Mint new coins (increase supply)', 'Super Admin'],
          ['POST', '/api/admin/coins/burn', 'Burn coins (decrease supply)', 'Super Admin'],
          ['PUT', '/api/admin/coins/rules', 'Update earning/redemption rules', 'Super Admin'],
          ['POST', '/api/admin/coins/emergency/{action}', 'Activate emergency control', 'Super Admin'],
          ['POST', '/api/admin/coins/promo', 'Create promotional coin campaign', 'Admin+'],
          ['GET', '/api/admin/coins/earning-matrix', 'View earning rule matrix', 'Admin+'],
          ['PUT', '/api/admin/coins/earning-matrix', 'Update earning rules', 'Super Admin'],
          ['PUT', '/api/admin/coins/redemption-rules', 'Update redemption restrictions', 'Super Admin'],
        ]} />
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
function ContentSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Content</h2>
      <p className="text-slate-400">10 screens — content management, moderation, creator workflow, social feed control, impact tracking, UGC management.</p>
      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['Content Management', 'AdminContent', 'Tab View', 'Reels, stories, posts — manage platform content'],
        ['Content Moderation', 'AdminContentModeration', 'Standard', 'Review queue: flagged content, approve/reject/escalate'],
        ['Creator Content', 'AdminCreatorContent', 'Standard', 'Creator approval workflow: review, approve, feature'],
        ['Creator Payouts', 'AdminCreatorPayouts', 'Standard', 'Creator payment management: earnings, invoices, tax forms'],
        ['Social Feed', 'AdminSocialFeedControl', 'Standard', 'Social feed algorithm tuning: weights, boosting, suppression'],
        ['Social Impact', 'AdminSocialImpact', 'Standard', 'Track social impact campaigns, donations, community initiatives'],
        ['Impact Verification', 'AdminSocialImpactVerification', 'Standard', 'Verify social impact claims: photo evidence, receipts'],
        ['Social Integration', 'AdminSocialIntegration', 'Standard', 'Social media integrations: Instagram, TikTok, YouTube sync'],
        ['UGC Management', 'AdminUGCManagement', 'Standard', 'User-generated content management: reviews, photos, videos'],
        ['UGC Review', 'AdminUGCReview', 'Standard', 'UGC campaign review: submissions, winners, rewards distribution'],
      ]} />
      <Expandable title="Content Moderation Workflow" icon={Eye} defaultOpen={true}>
        <CodeBlock code={`CONTENT SUBMISSION:
  User/Creator/Merchant submits content (photo/video/text/review)
  → AI pre-screen (Rabtul AIRA):
    - Nudity detection (confidence > 0.8 → auto-reject)
    - Hate speech detection
    - Spam detection
    - Brand safety check
    - Copyright detection

AI RESULT:
  PASS (confidence > 0.95) → Auto-approve, publish immediately
  FLAG (0.5-0.95) → Queue for human review
  REJECT (confidence > 0.95) → Auto-reject, notify user

HUMAN REVIEW QUEUE:
  1. Operator reviews flagged content
  2. Actions: Approve | Reject | Escalate to Admin
  3. Rejection: select reason → user notified
  4. Appeal: user can appeal → Admin reviews

MODERATION SLA:
  Flagged content reviewed within 4 hours
  Appeals resolved within 24 hours`} />
      </Expandable>
      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['GET', '/api/admin/content', 'List all content with filters', 'Operator+'],
          ['GET', '/api/admin/content/moderation-queue', 'Flagged content for review', 'Operator+'],
          ['PATCH', '/api/admin/content/{id}/moderate', 'Approve/reject content', 'Operator+'],
          ['GET', '/api/admin/creators', 'List creators and applications', 'Admin+'],
          ['POST', '/api/admin/creators/{id}/approve', 'Approve creator application', 'Admin+'],
          ['GET', '/api/admin/creators/payouts', 'Creator payout management', 'Admin+'],
          ['PUT', '/api/admin/social-feed/algorithm', 'Update feed algorithm weights', 'Super Admin'],
          ['GET', '/api/admin/ugc/campaigns', 'UGC campaign management', 'Admin+'],
        ]} />
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
function FinanceSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Finance</h2>
      <p className="text-slate-400">9 screens — bank offers, reconciliation, cashback, payment management, settlements, transactions, and wallet analytics.</p>
      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['Bank Offers', 'AdminBankOffers', 'Standard', 'Bank partnership offers: Visa/MC discounts, bank-funded cashback'],
        ['Bank Reconciliation', 'AdminBankReconciliation', 'Standard', 'Reconcile gateway settlements with bank statements'],
        ['Cashback', 'AdminCashback', 'Standard', 'Cashback distribution management: pending, approved, settled'],
        ['Cashback Rates', 'AdminCashbackRates', 'Standard', 'Category-wise cashback rates: set %, caps, eligible merchants'],
        ['Payments', 'AdminPayments', 'Standard', 'Payment gateway management: Razorpay, Paytm, PhonePe status'],
        ['Settlement Commission', 'AdminSettlementCommission', 'Standard', 'Merchant settlement processing: commission deduction, payouts'],
        ['Transactions', 'AdminTransactions', 'Standard', 'All transactions: search, filter, export, dispute resolution'],
        ['Wallet', 'AdminWallet', 'Standard', 'Wallet operations: top-ups, withdrawals, freezes, balance adjustments'],
        ['Wallet Analytics', 'AdminWalletAnalytics', 'Standard', 'Wallet economy: total balances, velocity, top-up patterns'],
      ]} />
      <Expandable title="Settlement Engine" icon={DollarSign} defaultOpen={true}>
        <CodeBlock code={`DAILY SETTLEMENT PROCESS (runs at 00:00 UTC):

1. AGGREGATE: Collect all completed transactions for T-1
2. CALCULATE per merchant:
   Gross = SUM(transactions.amount)
   Commission = Gross × merchant.commission_rate (3-15%)
   Gateway Fee = Gross × gateway_rate (1.5-2.5%)
   Refunds = SUM(refunds.amount)
   Coins Cost = SUM(coins_redeemed × coin_value)
   Net = Gross - Commission - Gateway Fee - Refunds + Tips
3. GENERATE settlement records
4. BATCH payment via bank API
5. NOTIFY merchants of settlement
6. RECONCILE: match bank confirmations to settlements

COMMISSION TIERS:
  Free tier:    10% commission
  Bronze:       8% commission
  Silver:       5% commission
  Diamond:      3% commission`} />
      </Expandable>
      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['GET', '/api/admin/finance/transactions', 'All transactions with filters', 'Admin+'],
          ['GET', '/api/admin/finance/settlements', 'Settlement history', 'Admin+'],
          ['POST', '/api/admin/finance/settlements/process', 'Trigger settlement batch', 'Super Admin'],
          ['GET', '/api/admin/finance/reconciliation', 'Bank reconciliation status', 'Admin+'],
          ['PUT', '/api/admin/finance/cashback-rates', 'Update cashback rates', 'Super Admin'],
          ['GET', '/api/admin/finance/wallet-analytics', 'Wallet economy dashboard', 'Admin+'],
          ['POST', '/api/admin/finance/wallet/{id}/freeze', 'Freeze user wallet', 'Admin+'],
          ['POST', '/api/admin/finance/wallet/{id}/adjust', 'Manual balance adjustment', 'Super Admin'],
        ]} />
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
function GamificationSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Gamification</h2>
      <p className="text-slate-400">4 screens — gamification management, scratch cards/games, referral programs, and tournaments.</p>
      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['Gamification', 'AdminGamification', 'Tab View', 'All gamification features: badges, streaks, challenges, leaderboards'],
        ['Game Config', 'AdminGameConfiguration', 'Standard', 'Configure scratch cards, spin wheels, treasure hunts, prize pools'],
        ['Referrals', 'AdminReferrals', 'Standard', 'Referral program setup: rewards for referrer + referee, limits, tracking'],
        ['Tournaments', 'AdminTournaments', 'Standard', 'Competition management: merchant sales tournaments, user challenges'],
      ]} />
      <Expandable title="Game Types & Configuration" icon={Star} defaultOpen={true}>
        <DocTable headers={['Game', 'Trigger', 'Prize Pool', 'Configuration']} rows={[
          ['Scratch Card', 'Post-purchase, daily login', 'Coins, discounts, free items', 'Win probability, prize tiers, daily limits'],
          ['Spin Wheel', 'Milestone achievement', 'Coins, vouchers, branded prizes', 'Segment weights, min/max prizes'],
          ['Treasure Hunt', 'Location-based check-in', 'Bonus coins, exclusive offers', 'GPS coordinates, radius, time window'],
          ['Daily Streak', 'Consecutive daily purchases', 'Multiplier coins (2x, 3x, 5x)', 'Streak length, reset rules, bonus thresholds'],
          ['Quiz/Trivia', 'In-app engagement', 'Coins per correct answer', 'Question pool, difficulty, time limit'],
        ]} />
      </Expandable>
      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['GET', '/api/admin/gamification', 'All gamification features', 'Admin+'],
          ['POST', '/api/admin/gamification/game', 'Create new game/contest', 'Admin+'],
          ['PUT', '/api/admin/gamification/game/{id}', 'Update game configuration', 'Admin+'],
          ['GET', '/api/admin/referrals', 'Referral program analytics', 'Admin+'],
          ['PUT', '/api/admin/referrals/config', 'Update referral rewards', 'Super Admin'],
          ['POST', '/api/admin/tournaments', 'Create tournament', 'Admin+'],
        ]} />
      </Expandable>
    </div>
  );
}

// Remaining sections as compact implementations
function InfrastructureSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Infrastructure</h2>
      <p className="text-slate-400">11 screens — API monitoring, quotas, background jobs, GMB sync, integrations, language management, logs, POS integration, platform health, and webhooks.</p>
      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['API Monitoring', 'AdminAPIMonitoring', 'Standard', 'API endpoint health: latency, error rates, throughput per service'],
        ['API Quotas', 'AdminAPIQuotas', 'Standard', 'Rate limiting and quota management per app/merchant/user'],
        ['Background Jobs', 'AdminBackgroundJobs', 'Standard', 'Job queue: settlements, reports, email sends, data exports'],
        ['GMB Sync', 'AdminGMBSync', 'Standard', 'Google My Business sync: merchant hours, photos, reviews'],
        ['Integrations', 'AdminIntegrations', 'Standard', 'Third-party integration management: status, logs, credentials'],
        ['Language Manager', 'AdminLanguageManager', 'Standard', 'Multi-language management: translations, RTL support, locale config'],
        ['Language Switcher', 'AdminLanguageSwitcher', 'Standard', 'Language configuration: supported languages, default, fallback'],
        ['System Logs', 'AdminLogs', 'Standard', 'System logs: errors, warnings, audit trail, search/filter'],
        ['POS Integration', 'AdminPOSIntegration', 'Standard', 'POS hardware integration management across all merchants'],
        ['Platform Health', 'AdminPlatformHealth', 'Standard', 'Platform health: uptime, services status, dependency health'],
        ['Webhook Manager', 'AdminWebhookManager', 'Standard', 'Webhook configuration: endpoints, events, retry policies, logs'],
      ]} />
      <Expandable title="Platform Health Dashboard" icon={Activity} defaultOpen={true}>
        <DocTable headers={['Service', 'SLA Target', 'Current', 'Dependencies']} rows={[
          ['API Gateway', '99.99%', 'Monitor', 'Kong, Redis, DNS'],
          ['Auth Service', '99.99%', 'Monitor', 'PostgreSQL, Redis, JWT'],
          ['Wallet Ledger', '99.99%', 'Monitor', 'PostgreSQL, Redis, Kafka'],
          ['Rule Engine', '99.95%', 'Monitor', 'Redis, PostgreSQL'],
          ['Event Bus', '99.95%', 'Monitor', 'Kafka, Zookeeper'],
          ['Notification Hub', '99.9%', 'Monitor', 'FCM, Twilio, SendGrid'],
          ['AIRA Engine', '99.9%', 'Monitor', 'TensorFlow, ClickHouse'],
          ['Fraud Service', '99.99%', 'Monitor', 'ML Models, Redis, Kafka'],
        ]} />
      </Expandable>
      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['GET', '/api/admin/infra/health', 'Platform health overview', 'Operator+'],
          ['GET', '/api/admin/infra/api-monitoring', 'API metrics dashboard', 'Admin+'],
          ['PUT', '/api/admin/infra/api-quotas', 'Update rate limits', 'Super Admin'],
          ['GET', '/api/admin/infra/jobs', 'Background job status', 'Admin+'],
          ['GET', '/api/admin/infra/logs', 'System logs with filters', 'Admin+'],
          ['POST', '/api/admin/infra/webhooks', 'Register webhook endpoint', 'Admin+'],
          ['PUT', '/api/admin/infra/languages', 'Update language config', 'Super Admin'],
        ]} />
      </Expandable>
    </div>
  );
}

function MarketingAdminSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Marketing</h2>
      <p className="text-slate-400">12 screens — campaigns, approvals, builder, email marketing, templates, multi-channel orchestration, and SMS campaigns.</p>
      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['General Marketing', 'AdminMarketing', 'Tab View', 'Marketing overview: active campaigns, spend, performance'],
        ['Barter Campaigns', 'AdminBarterCampaigns', 'Standard', 'Influencer barter deals: product exchange for content'],
        ['Campaign Approval', 'AdminCampaignApproval', 'Standard', 'Approval workflow for merchant-submitted campaigns'],
        ['Campaign Builder', 'AdminCampaignBuilder', 'Multi-Step', 'Drag-drop campaign builder: audience, channel, content, schedule'],
        ['Campaigns', 'AdminCampaigns', 'Tab View', 'All platform campaigns: push, SMS, email, in-app, WhatsApp'],
        ['Email Marketing', 'AdminEmailMarketing', 'Standard', 'Email campaign management: lists, sends, opens, clicks'],
        ['Email Template Builder', 'AdminEmailTemplateBuilder', 'Standard', 'Visual drag-drop email template builder'],
        ['Email Templates', 'AdminEmailTemplates', 'Standard', 'Template library: transactional, marketing, seasonal'],
        ['Marketing Orchestrator', 'AdminMarketingOrchestrator', 'Standard', 'Multi-channel orchestration: trigger-based, journey builder'],
        ['Multi-Channel', 'AdminMultiChannelMarketing', 'Standard', 'Cross-channel campaign management and attribution'],
        ['SMS Campaigns', 'AdminSMSCampaigns', 'Standard', 'SMS blast management: templates, scheduling, delivery reports'],
        ['SMS Templates', 'AdminSMSTemplates', 'Standard', 'SMS template library with variable substitution'],
      ]} />
      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['POST', '/api/admin/marketing/campaigns', 'Create platform campaign', 'Admin+'],
          ['GET', '/api/admin/marketing/campaigns', 'List all campaigns', 'Operator+'],
          ['PATCH', '/api/admin/marketing/campaigns/{id}/approve', 'Approve merchant campaign', 'Admin+'],
          ['POST', '/api/admin/marketing/email/send', 'Send email campaign', 'Admin+'],
          ['POST', '/api/admin/marketing/sms/send', 'Send SMS campaign', 'Admin+'],
          ['PUT', '/api/admin/marketing/orchestrator', 'Update journey automation', 'Admin+'],
        ]} />
      </Expandable>
    </div>
  );
}

function MerchantsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Merchant Management</h2>
      <p className="text-slate-400">7 screens — onboarding, intelligence, packages, profit engine, super OS, tier config, and trust scoring.</p>
      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['Merchants', 'AdminMerchants', 'Tab View', 'Merchant onboarding, approval, suspension, full lifecycle management'],
        ['Intelligence', 'AdminMerchantIntelligence', 'Standard', 'Merchant insights: performance ranking, risk scoring, growth potential'],
        ['Packages', 'AdminMerchantPackages', 'Standard', 'Tier packages config: Free/Bronze/Silver/Gold/Platinum features and pricing'],
        ['Profit Engine', 'AdminMerchantProfitEngine', 'Standard', 'ROI optimization: recommend tier upgrades, feature adoption'],
        ['Super OS', 'AdminMerchantSuperOS', 'Standard', 'Merchant OS management: feature flags, POS config, module access'],
        ['Tier Config', 'AdminMerchantTierConfig', 'Standard', 'Tier threshold and benefit configuration'],
        ['Trust Score', 'AdminMerchantTrustScore', 'Standard', 'Trust scoring: KYC status, compliance, review quality, dispute rate'],
      ]} />
      <Expandable title="Merchant Approval Workflow" icon={Store} defaultOpen={true}>
        <CodeBlock code={`SUBMISSION:
  Merchant completes onboarding → status: PENDING_REVIEW

REVIEW QUEUE:
  1. Operator checks documents (trade license, ID, bank)
  2. Auto-verification results from Rabtul Identity
  3. Risk score from Trust Score engine

ACTIONS:
  APPROVE → status: ACTIVE, merchant notified, can start selling
  REJECT → status: REJECTED, reason provided, can re-apply
  REQUEST_MORE_INFO → status: INFO_REQUESTED, specific docs requested
  SUSPEND → status: SUSPENDED, reason logged, merchant notified

APPROVAL SLA: 24-48 hours for standard, 4 hours for priority`} />
      </Expandable>
      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['GET', '/api/admin/merchants', 'List merchants with filters', 'Operator+'],
          ['GET', '/api/admin/merchants/{id}', 'Merchant detail view', 'Operator+'],
          ['POST', '/api/admin/merchants/{id}/approve', 'Approve merchant', 'Admin+'],
          ['POST', '/api/admin/merchants/{id}/reject', 'Reject merchant', 'Admin+'],
          ['POST', '/api/admin/merchants/{id}/suspend', 'Suspend merchant', 'Admin+'],
          ['GET', '/api/admin/merchants/{id}/intelligence', 'Merchant intelligence report', 'Admin+'],
          ['PUT', '/api/admin/merchants/packages', 'Update tier packages', 'Super Admin'],
          ['PUT', '/api/admin/merchants/tier-config', 'Update tier thresholds', 'Super Admin'],
        ]} />
      </Expandable>
    </div>
  );
}

function OffersSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Offers</h2>
      <p className="text-slate-400">4 screens — offer management, BOGO, flash sales, and vouchers.</p>
      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['Offers', 'AdminOffers', 'Tab View', 'Platform-wide offer management: create, approve, feature, analytics'],
        ['BOGO Management', 'AdminBOGOManagement', 'Standard', 'Buy One Get One offers: create platform-wide BOGO campaigns'],
        ['Flash Sales', 'AdminFlashSales', 'Standard', 'Time-limited flash sale management: scheduling, inventory, pricing'],
        ['Vouchers', 'AdminVouchers', 'Standard', 'Voucher generation: codes, limits, tracking, bulk generation'],
      ]} />
      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['POST', '/api/admin/offers', 'Create platform offer', 'Admin+'],
          ['GET', '/api/admin/offers', 'List all offers', 'Operator+'],
          ['POST', '/api/admin/offers/flash-sale', 'Create flash sale event', 'Admin+'],
          ['POST', '/api/admin/offers/vouchers/generate', 'Bulk generate voucher codes', 'Admin+'],
        ]} />
      </Expandable>
    </div>
  );
}

function OperationsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Operations</h2>
      <p className="text-slate-400">8 screens — support tickets, disputes, fraud alerts, detection rules, internal ops, offline reconciliation, ops intelligence, and city dashboard.</p>
      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['Support', 'AdminSupport', 'Tab View', 'Support ticket management: create, assign, escalate, resolve'],
        ['Disputes', 'AdminDisputeResolution', 'Standard', 'Dispute resolution: customer vs merchant, evidence, arbitration'],
        ['Fraud Alerts', 'AdminFraud', 'Standard', 'Real-time fraud alerts: suspicious transactions, device anomalies'],
        ['Fraud Detection', 'AdminFraudDetection', 'Standard', 'Fraud detection rules: velocity, amount, device, location patterns'],
        ['Internal Ops', 'AdminInternalOps', 'Standard', 'Internal operations: team tasks, SLAs, capacity planning'],
        ['Offline Reconciliation', 'AdminOfflineReconciliation', 'Standard', 'Reconcile offline POS transactions synced from merchants'],
        ['Ops Intelligence', 'AdminOpsIntelligence', 'Standard', 'Operations intelligence: bottlenecks, efficiency metrics, predictions'],
        ['City Dashboard', 'OperationsCityDashboard', 'Standard', 'City-level operations: merchant density, delivery coverage, demand'],
      ]} />
      <Expandable title="Fraud Detection Rules" icon={Shield} defaultOpen={true}>
        <DocTable headers={['Rule', 'Trigger', 'Action', 'Threshold']} rows={[
          ['Velocity Check', 'Too many transactions in short time', 'Flag + manual review', '> 10 tx in 5 minutes'],
          ['Amount Anomaly', 'Transaction amount far above average', 'Flag + hold settlement', '> 5x average order'],
          ['Device Fingerprint', 'New device on high-value transaction', 'Step-up authentication', 'First use + > AED 500'],
          ['Location Mismatch', 'IP location != merchant location', 'Flag for review', '> 500km distance'],
          ['Refund Pattern', 'High refund rate for merchant', 'Investigate merchant', '> 15% refund rate'],
          ['Account Takeover', 'Password change + large withdrawal', 'Freeze account', 'Within 1 hour'],
        ]} />
      </Expandable>
      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['GET', '/api/admin/support/tickets', 'List support tickets', 'Support+'],
          ['PATCH', '/api/admin/support/tickets/{id}', 'Update ticket status', 'Support+'],
          ['GET', '/api/admin/fraud/alerts', 'Real-time fraud alerts', 'Admin+'],
          ['PUT', '/api/admin/fraud/rules', 'Update fraud detection rules', 'Super Admin'],
          ['GET', '/api/admin/disputes', 'List open disputes', 'Operator+'],
          ['POST', '/api/admin/disputes/{id}/resolve', 'Resolve dispute', 'Admin+'],
          ['GET', '/api/admin/ops/city/{city}', 'City operations dashboard', 'Operator+'],
        ]} />
      </Expandable>
    </div>
  );
}

function PlatformSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Platform & Configuration</h2>
      <p className="text-slate-400">64 screens — the largest category. Broken into 9 sub-sections: Access Control, Regional, Deals & Pricing, Branding, Programs, User Insights, Notifications, System, and Commerce.</p>

      <Expandable title="Access Control (6 screens)" icon={Lock} defaultOpen={true}>
        <DocTable headers={['Screen', 'Component', 'Description']} rows={[
          ['Role Management', 'AdminRoleManagement', 'Create/edit admin roles with granular permissions'],
          ['RBAC Config', 'AdminRoleBasedAccess', 'Role-based access control configuration'],
          ['KYC Compliance', 'AdminKYCCompliance', 'KYC and age verification requirements'],
          ['Profile Verification', 'AdminProfileVerification', 'Student, Corporate, and special profile verification'],
          ['Auto-Ban Rules', 'AdminAutoBanRules', 'Automatic ban rules: fraud, abuse, spam thresholds'],
          ['Trust Passport', 'AdminTrustPassport', 'Universal trust verification across ecosystem'],
        ]} />
      </Expandable>

      <Expandable title="Regional & City Control (4 screens)" icon={MapPin}>
        <DocTable headers={['Screen', 'Component', 'Description']} rows={[
          ['Region Config', 'AdminRegionConfig', 'Regional configuration: currency, language, tax rules, compliance'],
          ['Regional Control', 'AdminRegionalControl', 'Regional admin controls: zone assignments, escalation paths'],
          ['City Lock Engine', 'AdminCityLockEngine', 'City merchant exclusivity: lock categories to approved merchants'],
          ['City Supply Lock', 'AdminCitySupplyLock', 'City supply chain lock: control which suppliers serve which city'],
        ]} />
      </Expandable>

      <Expandable title="Deals & Pricing (11 screens)" icon={DollarSign}>
        <DocTable headers={['Screen', 'Component', 'Description']} rows={[
          ['Checkout Priority', 'AdminCheckoutPriority', 'Coin priority at checkout: platform vs branded vs promo order'],
          ['Lightning Deals', 'AdminLightningDeals', 'Ultra short-duration deals (1-4 hours)'],
          ['Lock Price Deals', 'AdminLockPriceDeals', 'Fixed price guarantees for specific duration'],
          ['Sponsored Deals', 'AdminSponsoredDeals', 'Merchant-sponsored deals featured on homepage'],
          ['Mandatory Offers', 'AdminMandatoryOffers', 'Category-mandatory offers: min discount for visibility'],
          ['Nearby Offers', 'AdminNearbyOffers', 'Location-based offers: geofenced promotions'],
          ['Today\'s Offers', 'AdminTodaysOffers', 'Daily curated offers for homepage'],
          ['New Deals Settings', 'AdminNewDealsSettings', '"New" badge configuration and display rules'],
          ['Discount Buckets', 'AdminDiscountBuckets', 'Discount tiers: 10%, 20%, 30%, 50% category grouping'],
          ['Free Delivery Mgmt', 'AdminFreeDeliveryManagement', 'Free delivery thresholds and zone management'],
          ['Temporal Commerce', 'AdminTemporalCommerce', 'Time-based surge/discount pricing rules'],
        ]} />
      </Expandable>

      <Expandable title="Branding & Content (4 screens)" icon={Eye}>
        <DocTable headers={['Screen', 'Component', 'Description']} rows={[
          ['App Branding', 'AdminAppBranding', 'App appearance: colors, fonts, splash screen, app icon'],
          ['Brand Customization', 'AdminBrandCustomization', 'Brand themes: white-label options per region'],
          ['Hero Banners', 'AdminHeroBanners', 'Banner creation and scheduling for homepage carousel'],
          ['Video Moderation', 'AdminVideoModeration', 'Video content moderation: approve/reject/flag'],
        ]} />
      </Expandable>

      <Expandable title="Programs & Partners (7 screens)" icon={Users}>
        <DocTable headers={['Screen', 'Component', 'Description']} rows={[
          ['Exclusive Programs', 'AdminExclusivePrograms', 'Student, Corporate, Women, Birthday programs'],
          ['Special Programs', 'AdminSpecialPrograms', 'Prive, Student, Corporate tier management'],
          ['College/Corporate', 'AdminCollegeCorporateModule', 'College and corporate partnership management'],
          ['Co-Partner Brands', 'AdminCoPartnerBrands', 'Co-branded partnerships with external brands'],
          ['Partnerships', 'AdminPartnerships', 'Partnership management: terms, revenue share, SLAs'],
          ['Enterprise Hub', 'AdminEnterpriseHub', 'Enterprise client management: contracts, billing, support'],
          ['Government Console', 'AdminGovernmentConsole', 'Government partner access: reporting, compliance, data sharing'],
        ]} />
      </Expandable>

      <Expandable title="User Insights (5 screens)" icon={Brain}>
        <DocTable headers={['Screen', 'Component', 'Description']} rows={[
          ['Churn Prediction', 'AdminChurnPrediction', 'ML churn prediction: at-risk users, intervention recommendations'],
          ['Cohort Analysis', 'AdminCohortAnalysis', 'Cohort retention: week-over-week, month-over-month by segment'],
          ['Customer LTV', 'AdminCustomerLTV', 'Lifetime value analytics: per segment, per channel, per category'],
          ['Trending Algorithm', 'AdminTrendingAlgorithm', 'Trending algorithm tuning: recency, velocity, engagement weights'],
          ['Hotspot Management', 'AdminHotspotManagement', 'High-demand areas: surge zones, merchant density, delivery capacity'],
        ]} />
      </Expandable>

      <Expandable title="Notifications (4 screens)" icon={Bell}>
        <DocTable headers={['Screen', 'Component', 'Description']} rows={[
          ['Notifications', 'AdminNotifications', 'System notification management: templates, channels, scheduling'],
          ['Push Templates', 'AdminPushNotificationTemplates', 'Push notification template library with variable substitution'],
          ['Push Scheduler', 'AdminPushScheduler', 'Schedule push notifications: time optimization, A/B testing'],
          ['WhatsApp Templates', 'AdminWhatsAppTemplates', 'WhatsApp Business template management (Meta-approved)'],
        ]} />
      </Expandable>

      <Expandable title="System & Infrastructure (11 screens)" icon={Server}>
        <DocTable headers={['Screen', 'Component', 'Description']} rows={[
          ['Platform Settings', 'AdminSettings', 'Global platform settings: defaults, limits, feature flags'],
          ['Categories', 'AdminCategories', 'Product/business category taxonomy management'],
          ['Mode Control', 'AdminModeControl', 'Mode settings: Peak, Night, Celebration, Emergency modes'],
          ['A/B Test Results', 'AdminABTestResults', 'A/B test results dashboard: winners, statistical significance'],
          ['Experiments', 'AdminExperiments', 'Feature flags and experiment management'],
          ['Backup/Restore', 'AdminBackupRestore', 'Database backup/restore management'],
          ['Database Health', 'AdminDatabaseHealth', 'DB monitoring: query performance, connections, replication lag'],
          ['System Logs', 'AdminSystemLogs', 'Comprehensive system log viewer with search'],
          ['Audit Vault', 'AdminAuditVault', 'Compliance audit trail: immutable, searchable, exportable'],
          ['Founder Vault', 'AdminFounderVault', 'Emergency kill switches: platform-wide controls (Super Admin only)'],
          ['Developer Portal', 'AdminDeveloperPortal', 'API key management, documentation, sandbox access'],
        ]} />
      </Expandable>

      <Expandable title="Commerce & Revenue (12 screens)" icon={TrendingUp}>
        <DocTable headers={['Screen', 'Component', 'Description']} rows={[
          ['Commerce Protocol', 'AdminCommerceProtocol', 'Commerce configuration: checkout flow, payment methods, fees'],
          ['Competitive Defense', 'AdminCompetitiveDefense', 'Competitive monitoring: feature parity, pricing, market share'],
          ['Credit Engine', 'AdminCreditEngine', 'Credit system management: limits, scoring, collections'],
          ['Currency Exchange', 'AdminCurrencyExchange', 'Multi-currency rates and conversion management'],
          ['Monetization Hub', 'AdminMonetizationHub', 'Revenue stream management: commissions, ads, subscriptions, fees'],
          ['Scan Pay Settings', 'AdminScanPaySettings', 'QR/scan-to-pay configuration: limits, merchants, display'],
          ['Upload Bill Settings', 'AdminUploadBillSettings', 'Bill upload rewards: receipt scanning for coin earning'],
          ['Daily Check-in', 'AdminDailyCheckin', 'Daily check-in rewards configuration'],
          ['Friend Network', 'AdminFriendNetworkSettings', 'Friend network settings: social features, sharing rewards'],
          ['MSME Reports', 'AdminMSMEReports', 'MSME reporting: government compliance, growth metrics'],
          ['Translation Mgmt', 'AdminTranslationManagement', 'Translation workflow: source, translations, review, publish'],
          ['Institutional APIs', 'AdminInstitutionalAPIs', 'Institutional API management: government, banking, regulatory'],
        ]} />
      </Expandable>
    </div>
  );
}

function SpecializedAppsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Specialized Apps</h2>
      <p className="text-slate-400">7 screens — admin views for Adzy (ad platform), Rabtul (backend), and Prive (premium membership).</p>
      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['Adzy Dashboard', 'AdzyDashboard', 'Standard', 'Advertising platform: total ad spend, active campaigns, fill rates'],
        ['Adzy Inventory', 'AdzyAdInventory', 'Standard', 'Digital and physical ad placement management'],
        ['Rabtul Dashboard', 'RabtulDashboard', 'Standard', 'Backend system health: services, queues, databases, cache'],
        ['AIRA Engine', 'RabtulAIRAEngine', 'Standard', 'AI recommendation engine: model performance, retraining status'],
        ['API Gateway', 'RabtulAPIGateway', 'Standard', 'API gateway: rate limits, top consumers, error rates, latency'],
        ['Coin Ledger', 'RabtulCoinLedger', 'Standard', 'Coin ledger: supply, transactions, reconciliation, anomalies'],
        ['Prive Management', 'AdminPriveManagement', 'Standard', 'Premium membership management: tiers, benefits, subscribers'],
      ]} />
      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['GET', '/api/admin/adzy/dashboard', 'Adzy ad platform overview', 'Admin+'],
          ['GET', '/api/admin/adzy/inventory', 'Ad placement inventory', 'Admin+'],
          ['GET', '/api/admin/rabtul/health', 'Rabtul system health', 'Super Admin'],
          ['GET', '/api/admin/rabtul/aira', 'AIRA engine metrics', 'Super Admin'],
          ['GET', '/api/admin/rabtul/gateway', 'API gateway metrics', 'Super Admin'],
          ['GET', '/api/admin/rabtul/coin-ledger', 'Coin ledger overview', 'Super Admin'],
          ['GET', '/api/admin/prive', 'Prive membership management', 'Admin+'],
        ]} />
      </Expandable>
    </div>
  );
}

function UsersSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Users</h2>
      <p className="text-slate-400">5 screens — user management, admin users, habit tracking, reported content, and trust scores.</p>
      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['Users', 'AdminUsers', 'Tab View', 'User management: search, view, suspend, delete, export'],
        ['Admin Users', 'AdminUserManagement', 'Standard', 'Admin user management: create admins, assign roles, zones'],
        ['Habit Engine', 'AdminUserHabitEngine', 'Standard', 'User habit tracking: engagement patterns, retention triggers'],
        ['Reported Content', 'AdminUserReportedContent', 'Standard', 'User-reported content: review queue, action history'],
        ['Trust Scores', 'AdminUserTrustScore', 'Standard', 'User trust scoring: verification level, behavior, transaction history'],
      ]} />
      <Expandable title="User Trust Score Components" icon={Shield} defaultOpen={true}>
        <DocTable headers={['Component', 'Weight', 'Factors', 'Max Score']} rows={[
          ['Identity Verification', '30%', 'KYC complete, Emirates ID, phone verified, email verified', '30'],
          ['Transaction History', '25%', 'Purchase count, total spend, payment success rate', '25'],
          ['Behavioral', '20%', 'App engagement, review quality, referral quality', '20'],
          ['Compliance', '15%', 'Dispute rate, refund rate, report count', '15'],
          ['Tenure', '10%', 'Account age, continuous activity streak', '10'],
        ]} />
      </Expandable>
      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['GET', '/api/admin/users', 'List users with filters', 'Support+'],
          ['GET', '/api/admin/users/{id}', 'User detail view', 'Support+'],
          ['POST', '/api/admin/users/{id}/suspend', 'Suspend user', 'Admin+'],
          ['POST', '/api/admin/users/{id}/unsuspend', 'Unsuspend user', 'Admin+'],
          ['POST', '/api/admin/admin-users', 'Create admin user', 'Super Admin'],
          ['PUT', '/api/admin/admin-users/{id}/role', 'Update admin role', 'Super Admin'],
          ['GET', '/api/admin/users/{id}/trust-score', 'User trust score breakdown', 'Operator+'],
        ]} />
      </Expandable>
    </div>
  );
}

function CrossCuttingSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Cross-Cutting Specifications</h2>
      <p className="text-slate-400">Technical specs spanning all admin modules.</p>

      <Expandable title="Admin → BizOne → Rabtul Flow" icon={Network} defaultOpen={true}>
        <CodeBlock code={`HQ Admin sets rules ─────────► Rabtul Rule Engine stores rules
                                         │
                                         ▼
Merchant operates in BizOne ──► BizOne calls Rabtul APIs
                                         │
                                         ▼
                                  Rabtul evaluates rules
                                  Rabtul processes payments
                                  Rabtul credits/debits coins
                                  Rabtul sends notifications
                                         │
                                         ▼
                              Results flow back to Admin dashboards
                              (via Rabtul Event Bus → Analytics)

EXAMPLES:
  Admin sets "5% cashback on dining" → Rabtul Rule Engine
  Customer pays at restaurant → BizOne POS → Rabtul processes
  Rabtul credits 5% coins → Customer wallet updated
  Admin sees cashback spend in Finance Dashboard`} />
      </Expandable>

      <Expandable title="Audit Trail Requirements" icon={FileText}>
        <DocTable headers={['Event', 'Logged Fields', 'Retention', 'Access']} rows={[
          ['Admin login', 'user_id, ip, device, timestamp, 2FA_method', '5 years', 'Super Admin'],
          ['Merchant approval/rejection', 'admin_id, merchant_id, action, reason, timestamp', '7 years', 'Admin+'],
          ['Coin minting/burning', 'admin_id, amount, reason, approval_chain', '10 years', 'Super Admin'],
          ['Settlement processing', 'batch_id, merchants, amounts, bank_refs', '7 years', 'Admin+'],
          ['User suspension', 'admin_id, user_id, reason, evidence', '5 years', 'Admin+'],
          ['Configuration change', 'admin_id, setting_key, old_value, new_value', '3 years', 'Admin+'],
          ['Emergency control activation', 'admin_id, control_type, reason, duration', '10 years', 'Super Admin'],
        ]} />
        <InfoBox type="warning">All audit logs are immutable (append-only). Stored in separate audit database with restricted access. Compliant with CBUAE and SAMA regulations.</InfoBox>
      </Expandable>

      <Expandable title="Zone-Based Access Control" icon={Globe}>
        <DocTable headers={['Zone', 'Scope', 'Example', 'Admin Levels']} rows={[
          ['City', 'Single city operations', 'Dubai operations manager', 'Operator, Support'],
          ['Region', 'Multiple cities in region', 'Northern Emirates lead', 'Operator, Admin'],
          ['Metro', 'Metropolitan area', 'Abu Dhabi Metro lead', 'Admin'],
          ['Country', 'Entire country', 'UAE Country Manager', 'Admin, Super Admin'],
          ['Global', 'All countries', 'Global operations', 'Super Admin only'],
        ]} />
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// MAIN PAGE COMPONENT
// ════════════════════════════════════════════════════════════════════
export default function HqAdminPage() {
  const [activeSection, setActiveSection] = useState('overview');

  const sectionComponents: Record<string, React.ReactNode> = {
    'overview': <OverviewSection />,
    'dashboards': <DashboardsSection />,
    'analytics': <AnalyticsSection />,
    'coins': <CoinsSection />,
    'content': <ContentSection />,
    'finance': <FinanceSection />,
    'gamification': <GamificationSection />,
    'infrastructure': <InfrastructureSection />,
    'marketing': <MarketingAdminSection />,
    'merchants': <MerchantsSection />,
    'offers': <OffersSection />,
    'operations': <OperationsSection />,
    'platform': <PlatformSection />,
    'apps': <SpecializedAppsSection />,
    'users': <UsersSection />,
    'crosscutting': <CrossCuttingSection />,
  };

  return (
    <div className="min-h-screen bg-[#0a1628]">
      <div className="bg-gradient-to-b from-[#1a0d0d] to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/rtmn-group" className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 mb-4 text-sm">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to RTMN Group
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
              <Shield className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">HQ Admin — Complete Specification</h1>
              <p className="text-slate-400 text-sm mt-1">RTMN headquarters admin panel — everything to build the control center</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge text="224 Screens" color="bg-red-500/20 text-red-400" />
            <Badge text="14 Categories" color="bg-emerald-500/20 text-emerald-400" />
            <Badge text="4 Admin Roles" color="bg-purple-500/20 text-purple-400" />
            <Badge text="64 Platform Config" color="bg-amber-500/20 text-amber-400" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:hidden overflow-x-auto -mx-4 px-4 pb-4">
              <div className="flex gap-2 min-w-max">
                {sections.map(s => { const Icon = s.icon; const isActive = activeSection === s.id; return (
                  <button key={s.id} onClick={() => setActiveSection(s.id)} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${isActive ? 'bg-red-500 text-white' : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50'}`}>
                    <Icon size={14} />{s.label}
                  </button>
                ); })}
              </div>
            </div>
            <nav className="hidden lg:block sticky top-20 space-y-1 max-h-[calc(100vh-6rem)] overflow-y-auto">
              {sections.map(s => { const Icon = s.icon; const isActive = activeSection === s.id; return (
                <button key={s.id} onClick={() => { setActiveSection(s.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg ${isActive ? 'bg-red-500/20 text-red-400 border-l-2 border-red-400' : 'text-slate-400 hover:text-white hover:bg-slate-700/50 border-l-2 border-transparent'}`}>
                  <Icon size={16} /><span className="truncate">{s.label}</span>
                  {s.screens && <span className={`ml-auto text-xs px-1.5 py-0.5 rounded ${isActive ? 'bg-red-500/30 text-red-300' : 'bg-slate-800 text-slate-500'}`}>{s.screens}</span>}
                </button>
              ); })}
            </nav>
          </aside>
          <main className="flex-1 min-w-0">{sectionComponents[activeSection]}</main>
        </div>
      </div>

      <section className="bg-slate-800/30 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/bizone-os" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/20 text-blue-400 rounded-xl font-bold hover:bg-blue-500/30 transition-colors border border-blue-500/30">
              <Store className="w-5 h-5" /> BizOne OS Spec
            </Link>
            <Link href="/rabtul-core" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500/20 text-purple-400 rounded-xl font-bold hover:bg-purple-500/30 transition-colors border border-purple-500/30">
              <Server className="w-5 h-5" /> Rabtul Core Spec
            </Link>
            <Link href="/documentation" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 transition-colors border border-slate-600">
              <BookOpen className="w-5 h-5" /> Documentation Hub
            </Link>
          </div>
        </div>
      </section>
      <GlobalFooter />
    </div>
  );
}
