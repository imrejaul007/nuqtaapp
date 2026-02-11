'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen, Layers, Database, Code, Smartphone, Store, Shield,
  Coins, Wallet, LayoutGrid, GitBranch, Terminal, ArrowRight,
  ChevronDown, ChevronUp, CheckCircle, AlertTriangle, Server,
  Globe, Zap, Users, Brain, Bell, Eye, Fingerprint, Settings,
  BarChart3, Network, Activity, Cloud, CreditCard, DollarSign,
  Package, ShoppingCart, Lock, FileText, Building2, Search,
  ArrowUpRight, TrendingUp, Clock, Star, MapPin, Heart,
  Monitor, Cpu, HardDrive, Wifi
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ─── Types ──────────────────────────────────────────────────────────
interface Section {
  id: string;
  label: string;
  icon: React.ElementType;
  audience: string;
}

// ─── Sidebar Sections ───────────────────────────────────────────────
const sections: Section[] = [
  { id: 'overview', label: 'Overview', icon: BookOpen, audience: 'PM + Dev' },
  { id: 'architecture', label: 'Architecture', icon: Layers, audience: 'Dev' },
  { id: 'ecosystem', label: 'Product Ecosystem', icon: Globe, audience: 'PM' },
  { id: 'admin-detailed', label: 'Admin Roles & Rules', icon: Lock, audience: 'PM + Dev' },
  { id: 'merchant-detailed', label: 'Merchant OS Features', icon: Store, audience: 'PM + Dev' },
  { id: 'database', label: 'Database Schema', icon: Database, audience: 'Dev' },
  { id: 'api', label: 'API Reference', icon: Code, audience: 'Dev' },
  { id: 'customer-app', label: 'Customer App (Nuqta)', icon: Smartphone, audience: 'PM + Dev' },
  { id: 'merchant-os', label: 'Merchant OS (BizOne)', icon: Store, audience: 'PM + Dev' },
  { id: 'admin-panel', label: 'Admin Panel (HQ)', icon: Shield, audience: 'PM + Dev' },
  { id: 'coins', label: 'Coin & Rewards', icon: Coins, audience: 'PM + Dev' },
  { id: 'wallet', label: 'Wallet & Payments', icon: Wallet, audience: 'PM + Dev' },
  { id: 'screens', label: 'Screen Flows', icon: LayoutGrid, audience: 'PM' },
  { id: 'roadmap', label: 'Development Roadmap', icon: GitBranch, audience: 'PM + Dev' },
  { id: 'tech-stack', label: 'Tech Stack & Setup', icon: Terminal, audience: 'Dev' },
  { id: 'security', label: 'Security & Compliance', icon: Fingerprint, audience: 'Dev' },
  { id: 'customer-onboarding', label: 'Customer Onboarding', icon: Smartphone, audience: 'PM + Dev' },
  { id: 'error-codes', label: 'API Error Codes', icon: AlertTriangle, audience: 'Dev' },
  { id: 'testing', label: 'Testing Strategy', icon: CheckCircle, audience: 'Dev' },
  { id: 'aira-ai', label: 'AIRA AI Engine', icon: Brain, audience: 'Dev' },
  { id: 'event-bus', label: 'Event Bus & Webhooks', icon: Network, audience: 'Dev' },
  { id: 'monitoring', label: 'Monitoring & Alerting', icon: Activity, audience: 'Dev' },
  { id: 'mobile-deploy', label: 'Mobile Deployment', icon: Cloud, audience: 'Dev' },
  { id: 'notifications', label: 'Notification System', icon: Bell, audience: 'PM + Dev' },
  { id: 'prive-vip', label: 'Prive VIP Program', icon: Star, audience: 'PM + Dev' },
  { id: 'wasil-verticals', label: 'Wasil Vertical Apps', icon: Globe, audience: 'PM' },
  { id: 'referral', label: 'Referral & Ambassador', icon: Users, audience: 'PM + Dev' },
  { id: 'product-dashboards', label: 'Product Dashboards', icon: Monitor, audience: 'PM + Dev' },
];

// ─── Expandable Section Component ───────────────────────────────────
function Expandable({ title, children, defaultOpen = false, icon: Icon, color = 'text-[#c9a227]' }: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  icon?: React.ElementType;
  color?: string;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-slate-700/50 rounded-xl overflow-hidden mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-slate-800/50 hover:bg-slate-800/80 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon className={`w-5 h-5 ${color}`} />}
          <span className="font-semibold text-white">{title}</span>
        </div>
        {open ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
      </button>
      {open && <div className="px-5 py-4 bg-slate-900/30">{children}</div>}
    </div>
  );
}

// ─── Table Component ────────────────────────────────────────────────
function DocTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-700/50">
            {headers.map((h, i) => (
              <th key={i} className="text-left px-3 py-2 text-[#c9a227] font-semibold whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30">
              {row.map((cell, j) => (
                <td key={j} className={`px-3 py-2 ${j === 0 ? 'text-white font-medium' : 'text-slate-300'} whitespace-nowrap`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Code Block ─────────────────────────────────────────────────────
function CodeBlock({ title, code }: { title?: string; code: string }) {
  return (
    <div className="mb-4">
      {title && <div className="text-xs font-semibold text-[#c9a227] mb-1 uppercase tracking-wider">{title}</div>}
      <pre className="bg-slate-900 border border-slate-700/50 rounded-lg p-4 text-sm text-slate-300 overflow-x-auto whitespace-pre">
        {code}
      </pre>
    </div>
  );
}

// ─── Badge ──────────────────────────────────────────────────────────
function Badge({ text, color = 'bg-[#c9a227]/20 text-[#c9a227]' }: { text: string; color?: string }) {
  return <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${color}`}>{text}</span>;
}

// ─── Info Box ───────────────────────────────────────────────────────
function InfoBox({ type = 'info', children }: { type?: 'info' | 'warning' | 'action'; children: React.ReactNode }) {
  const styles = {
    info: 'bg-blue-500/10 border-blue-500/30 text-blue-300',
    warning: 'bg-amber-500/10 border-amber-500/30 text-amber-300',
    action: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
  };
  const icons = { info: Eye, warning: AlertTriangle, action: CheckCircle };
  const Icon = icons[type];
  return (
    <div className={`flex gap-3 p-4 rounded-xl border ${styles[type]} mb-4`}>
      <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
      <div className="text-sm">{children}</div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION 1: OVERVIEW
// ════════════════════════════════════════════════════════════════════
function OverviewSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">System Overview</h2>
      <p className="text-slate-400 mb-6">What RTMN / Nuqta is, how everything connects, and the core principles.</p>

      <InfoBox type="info">
        <strong>Golden Rule:</strong> &quot;Many apps. One economy. One rulebook. One truth.&quot; — RTMN is not building 100+ separate apps. It is building 4 core systems + distribution layers. The 100+ apps are different doors to the same mall.
      </InfoBox>

      <Expandable title="What Is RTMN / Nuqta?" icon={Globe} defaultOpen>
        <p className="text-slate-300 mb-4">
          RTMN (Nuqta) is a <strong className="text-white">Closed-Loop Commerce Operating System</strong> for the GCC market. It creates a self-contained economic loop where:
        </p>
        <ul className="space-y-2 text-slate-300 mb-4">
          <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" /> <span><strong className="text-white">Users</strong> discover merchants, engage with offers, transact, earn coins/rewards, and repeat</span></li>
          <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" /> <span><strong className="text-white">Merchants</strong> operate their entire business (POS, inventory, billing, CRM), acquire customers, run marketing, restock inventory, and access credit — all without leaving the ecosystem</span></li>
          <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" /> <span><strong className="text-white">HQ (RTMN)</strong> controls the rules, economics, distribution, and scale centrally</span></li>
        </ul>
      </Expandable>

      <Expandable title="The 4 Core Pillars" icon={Layers} defaultOpen>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {[
            { name: 'Nuqta / ReZ', desc: 'Customer Wallet + Loyalty Brain', screens: '213 + 141 Prive', color: 'border-emerald-500/50', icon: Smartphone },
            { name: 'BizOne', desc: 'Merchant Operating System', screens: '222', color: 'border-blue-500/50', icon: Store },
            { name: 'Adzy', desc: 'Closed Marketing Exchange', screens: 'Self-serve campaigns', color: 'border-purple-500/50', icon: TrendingUp },
            { name: 'Rabtul', desc: 'Infrastructure Backbone', screens: 'API Gateway + Services', color: 'border-amber-500/50', icon: Server },
          ].map(p => (
            <div key={p.name} className={`border ${p.color} rounded-xl p-4 bg-slate-800/30`}>
              <div className="flex items-center gap-2 mb-2">
                <p.icon className="w-5 h-5 text-[#c9a227]" />
                <h4 className="font-bold text-white">{p.name}</h4>
              </div>
              <p className="text-slate-400 text-sm">{p.desc}</p>
              <p className="text-[#c9a227] text-xs mt-2 font-semibold">{p.screens}</p>
            </div>
          ))}
        </div>
      </Expandable>

      <Expandable title="Closed-Loop Money Flow" icon={DollarSign}>
        <CodeBlock code={`User Transaction (1000 AED)
  → Merchant Receives (800-850 AED)
  → Platform Commission (150-200 AED)
     → ReZ Coins back to User (5-10%)
     → Platform Revenue (5-15%)
  → Merchant Spends on Ads (Adzy) → Reaches more RTMN users → More transactions
  → Merchant Restocks via NextaBizz → Better prices, credit available

RESULT: 100% of money stays in ecosystem. No leakage to Google/Meta.`} />
        <InfoBox type="action">
          <strong>PM Action:</strong> Ensure every feature spec maintains this closed loop. If money leaves the ecosystem (e.g., external ad spend), flag it for review.
        </InfoBox>
      </Expandable>

      <Expandable title="System Interconnection Diagram" icon={Network}>
        <CodeBlock code={`                    ┌─────────────────────────┐
                    │     HQ ADMIN (178)       │
                    │   Platform Governance     │
                    │   Merchant Approval       │
                    │   Financial Oversight     │
                    └───────────┬───────────────┘
                                │ Controls Rules & Config
                                ▼
         ┌────────────── RABTUL (Backbone) ──────────────────┐
         │  API Gateway │ Auth │ Coin Ledger │ AIRA AI       │
         │  Payment Service │ Notification │ Fraud           │
         └───┬──────────────┬──────────────┬─────────────────┘
             │              │              │
     ┌───────▼───────┐ ┌───▼──────┐ ┌────▼──────┐
     │  NUQTA (213)  │ │ BIZONE   │ │   ADZY    │
     │  Customer App │ │ (222)    │ │ Ad Exchange│
     │  Browse/Scan  │ │ POS/CRM  │ │ Campaigns │
     │  Earn Coins   │ │ Inventory│ │ Digital + │
     │  Wallet/Pay   │ │ Staff    │ │ Physical  │
     └───────┬───────┘ └───┬──────┘ └────┬──────┘
             │             │             │
             └─────────────┼─────────────┘
                           │
               ┌───────────▼────────────┐
               │   SINGLE ECONOMY       │
               │   One Wallet           │
               │   One Coin Ledger      │
               │   One Rule Engine      │
               │   One Settlement System│
               └────────────────────────┘`} />
      </Expandable>

      <Expandable title="Platform Statistics (Phase 1 Completion)" icon={BarChart3}>
        <DocTable
          headers={['Metric', 'Count']}
          rows={[
            ['Total Pages Built', '740+'],
            ['Routes Defined', '660+'],
            ['Admin Modules', '177+'],
            ['Merchant Modules', '93+'],
            ['User Features', '241+'],
            ['Prive VIP Pages', '141'],
            ['Cross-System API Endpoints', '50+'],
            ['Total Screens Designed', '1,103'],
          ]}
        />
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION 2: ARCHITECTURE
// ════════════════════════════════════════════════════════════════════
function ArchitectureSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Architecture</h2>
      <p className="text-slate-400 mb-6">Core systems, non-negotiable rules, and how apps communicate.</p>

      <Expandable title="5 Non-Negotiable Architecture Rules" icon={Lock} defaultOpen>
        <div className="space-y-4">
          {[
            { rule: 'Single Source of Truth', desc: 'Wallet/Coins → Rabtul Coin Ledger. Merchant data → BizOne. Rules → HQ Rule Engine. Ads → Adzy. Identity/AI → Rabtul. No app owns its own wallet, loyalty logic, or settlement math.' },
            { rule: 'UI Duplication Allowed, Logic Duplication Forbidden', desc: 'Multiple apps can show wallet screens, but ALL must call the same backend API. Offer evaluation, coin deduction, commission, and settlement logic exist in exactly ONE place.' },
            { rule: 'Every App Is a Client', desc: 'Even admin apps. Flow: App → API Gateway → Core Engines → Event Bus. No app directly talks to the database. No app bypasses the rule engine.' },
            { rule: 'Central Ownership', desc: 'Wallet balance owned by Rabtul. Offer rules owned by HQ. Merchant data owned by BizOne. Ads spend owned by Adzy. Permissions owned by IAM/RBAC. Apps only render and trigger.' },
            { rule: 'Apps Must Be Killable', desc: 'Every app must be launchable, killable, and replaceable independently. If an app dies, the system lives. This is why logic is centralized and state is shared.' },
          ].map((r, i) => (
            <div key={i} className="flex gap-3 p-3 bg-slate-800/30 rounded-lg border border-slate-700/30">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#c9a227]/20 flex items-center justify-center text-[#c9a227] font-bold text-sm">{i + 1}</div>
              <div>
                <h4 className="font-semibold text-white text-sm">{r.rule}</h4>
                <p className="text-slate-400 text-sm mt-1">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <InfoBox type="warning">
          <strong>Dev Rule:</strong> Any PR that duplicates wallet logic, coin calculation, or settlement math outside of Rabtul must be rejected. No exceptions.
        </InfoBox>
      </Expandable>

      <Expandable title="Pillar 1: Nuqta / ReZ (Customer Wallet + Loyalty Brain)" icon={Smartphone}>
        <p className="text-slate-300 mb-3">The universal customer passport across the entire ecosystem. <Badge text="213 Screens" /> <Badge text="141 Prive VIP" /></p>
        <DocTable
          headers={['Component', 'Description']}
          rows={[
            ['Coin System', 'Universal ReZ coins, branded coins, Prive coins, promo coins'],
            ['Loyalty Engine', 'Bronze → Silver → Gold → Platinum progression with multipliers'],
            ['Gamification', 'Tournaments, daily check-in, achievements, spin-and-win, scratch cards'],
            ['Rewards', 'Cashback, coupons, exclusive access, tier perks'],
            ['Prive VIP Program', '37+ pages, 3 subscription tiers (Lite/Plus/Premium)'],
            ['User Identity', 'Profile, KYC, trust score, social accounts, device management'],
            ['4 Shopping Modes', 'Browse & Shop, Scan & Pay (QR), Social Commerce, AI Discovery'],
          ]}
        />
        <InfoBox type="action"><strong>Strategic Lock-in:</strong> Users cannot exist in RTMN without Nuqta. Every transaction, reward, and interaction flows through it.</InfoBox>
      </Expandable>

      <Expandable title="Pillar 2: BizOne (Merchant OS)" icon={Store}>
        <p className="text-slate-300 mb-3">The complete operating system for merchants. <Badge text="222 Screens" /> <Badge text="98% Complete" color="bg-emerald-500/20 text-emerald-400" /></p>
        <DocTable
          headers={['Module', 'Screens', 'Key Features']}
          rows={[
            ['POS System', '28', 'Offline-first, category-specific POS, multi-payment, receipt'],
            ['Inventory', '35', 'Batch/expiry tracking, forecasting, transfer, label printing'],
            ['Orders & Fulfillment', '25', 'Multi-channel, delivery tracking, returns, refunds'],
            ['CRM', '20', 'Customer segmentation, loyalty, re-engagement, feedback'],
            ['Marketing & Offers', '22', 'Campaign creation, deal management, loyalty offers'],
            ['Analytics & Reports', '18', 'Sales, inventory, staff, financial dashboards'],
            ['Financial Management', '20', 'GST/e-invoicing, P&L, expense tracking, tax compliance'],
            ['Staff Management', '15', 'Roles, scheduling, commissions, activity logs'],
            ['Multi-Store', '12', 'Dashboard, transfer, warehouse, store comparison'],
            ['Integrations', '15', 'POS hardware, ERP, payment, delivery partners'],
          ]}
        />
        <p className="text-slate-400 text-sm mb-3"><strong className="text-white">Merchant Hierarchy:</strong> Owner (Level 50) → Manager (Level 40) → Staff/Cashier (Level 30)</p>
        <InfoBox type="action"><strong>Strategic Lock-in:</strong> Merchants cannot leave because their billing, inventory, customers, and credit history all live here.</InfoBox>
      </Expandable>

      <Expandable title="Pillar 3: Adzy (Closed Marketing Exchange)" icon={TrendingUp}>
        <p className="text-slate-300 mb-3">Internal advertising/marketing platform. NOT Google Ads, NOT Meta Ads — a closed-loop ad economy. <Badge text="90% Complete" color="bg-amber-500/20 text-amber-400" /></p>
        <DocTable
          headers={['Component', 'Description']}
          rows={[
            ['Dashboard', 'Campaign overview, spend analytics, ROI tracking'],
            ['Ad Inventory', 'Digital placements + physical screens in merchant locations'],
            ['Self-Serve Campaigns', 'Merchants create and manage their own campaigns'],
            ['Campaign Management', 'Scheduling, targeting, budgeting, A/B testing'],
            ['Email/SMS', 'Direct marketing via Notification Hub'],
            ['Hero Banners & Sponsored Deals', 'Premium placements in Nuqta app'],
          ]}
        />
        <InfoBox type="action"><strong>Strategic Value:</strong> 100% of ad spend stays inside RTMN. Merchants don&apos;t depend on Google/Meta. Money circulates, never leaks.</InfoBox>
      </Expandable>

      <Expandable title="Pillar 4: Rabtul (Infrastructure Backbone)" icon={Server}>
        <p className="text-slate-300 mb-3">The invisible backbone that makes everything scale. <Badge text="85% Complete" color="bg-blue-500/20 text-blue-400" /></p>
        <DocTable
          headers={['Service', 'Responsibility']}
          rows={[
            ['API Gateway', 'Unified entry point, rate limiting, request routing, monitoring'],
            ['Auth Service', 'JWT tokens, RBAC, multi-app SSO, device fingerprinting, 2FA'],
            ['Payment Service', 'UPI, cards, wallets, settlement engine, refunds'],
            ['Coin Ledger', 'Cross-app coin sync, real-time balance, transaction logging, expiry management'],
            ['AIRA Engine', 'AI/ML: personalization, recommendations, dynamic pricing, fraud scoring, churn prediction, demand forecasting'],
            ['Notification Hub', 'Push notifications, SMS, email, in-app messages'],
            ['Fraud Detection', 'Risk scoring, device fingerprinting, velocity checks, location mismatch'],
          ]}
        />
        <InfoBox type="warning"><strong>Dev Rule:</strong> No app directly talks to the database. No app bypasses the rule engine. Every app is a &quot;client&quot; calling Rabtul&apos;s central APIs.</InfoBox>
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION 3: DATABASE SCHEMA
// ════════════════════════════════════════════════════════════════════
function DatabaseSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Database Schema</h2>
      <p className="text-slate-400 mb-6">60+ tables across PostgreSQL, MongoDB, Redis, and Elasticsearch.</p>

      <InfoBox type="info">
        <strong>Polyglot Persistence:</strong> PostgreSQL 15 (primary ACID transactions), MongoDB 7 (analytics/logs), Redis 7 (caching/sessions/real-time), Elasticsearch 8 (search/discovery).
      </InfoBox>

      <Expandable title="User Domain" icon={Users} defaultOpen>
        <DocTable
          headers={['Table', 'Key Fields', 'Purpose']}
          rows={[
            ['users', 'UUID PK, phone, email, password_hash, gender, DOB, 2FA, preferences, status', 'Core user table'],
            ['user_addresses', 'user_id FK, label, address_line_1/2, city, state, pincode, lat/lng, is_default', 'Multiple addresses with geolocation'],
            ['user_sessions', 'user_id FK, token, device_info, ip_address, expires_at', 'JWT token management, device tracking'],
            ['user_social_accounts', 'user_id FK, provider (google/facebook/apple), provider_id, email', 'Social login integration'],
            ['user_colleges', 'user_id FK, college_id FK, course, year, student_id_card, verified', 'Student verification for campus program'],
          ]}
        />
      </Expandable>

      <Expandable title="Merchant Domain" icon={Store}>
        <DocTable
          headers={['Table', 'Key Fields', 'Purpose']}
          rows={[
            ['merchants', 'business_name, contact, GSTIN, PAN, FSSAI, commission_rate, settlement_frequency, verification_status, onboarding_status, assigned_city/team', 'Core merchant business data'],
            ['merchant_outlets', 'merchant_id FK, name, address, lat/lng, operating_hours (JSONB), features, is_active', 'Multi-location support with geolocation'],
            ['merchant_users', 'merchant_id FK, user_id FK, role (owner/manager/staff), permissions (JSONB)', 'Staff with roles and fine-grained permissions'],
            ['merchant_bank_accounts', 'merchant_id FK, account_number, IFSC, bank_name, verified (penny-drop), is_primary', 'Settlement account verification'],
          ]}
        />
        <InfoBox type="action">
          <strong>Dev Note:</strong> Merchant onboarding status flow: <code className="text-[#c9a227]">pending → documents_submitted → verified → live</code>. Bank verification uses penny-drop method.
        </InfoBox>
      </Expandable>

      <Expandable title="Commerce Domain" icon={ShoppingCart}>
        <DocTable
          headers={['Table', 'Key Fields', 'Purpose']}
          rows={[
            ['products', 'merchant_id FK, name, description, price, stock, variants (JSONB), images, attributes, category_id FK', 'Merchant products with pricing and variants'],
            ['categories', 'name, parent_id (self-referential), level (1-3), slug, seo_metadata (JSONB)', 'Hierarchical 3-level product categories'],
            ['orders', 'user_id FK, merchant_id FK, items (JSONB), pricing breakdown, coins_used, coins_earned, payment_method, delivery_info, rating, status', 'Full order lifecycle'],
            ['payments', 'order_id FK, gateway (razorpay/paytm/phonepe), method (UPI/card/wallet/COD), amount, status, gateway_response, failure_reason', 'Payment gateway integration'],
          ]}
        />
      </Expandable>

      <Expandable title="Wallet & Coins Domain" icon={Wallet}>
        <DocTable
          headers={['Table', 'Key Fields', 'Purpose']}
          rows={[
            ['wallets', 'user_id FK (1:1), rez_coins_balance, branded_coins (JSONB: {merchant_id: {balance, earned, spent}}), prive_coins, promo_coins, cash_balance, daily_limit, monthly_limit, is_frozen, freeze_reason', 'One wallet per user, all coin types'],
            ['wallet_transactions', 'wallet_id FK, type (earn/spend/transfer/refund/expire/admin_credit/admin_debit), amount, coin_type, reference_type, reference_id, balance_after, metadata (JSONB)', 'Every single coin movement with audit trail'],
            ['promo_coins', 'wallet_id FK, amount, expires_at, campaign_id, is_used', 'Expiring promotional coins with TTL'],
          ]}
        />
        <InfoBox type="warning">
          <strong>Critical:</strong> The <code className="text-[#c9a227]">wallets</code> table has a Redis-based lock for concurrent transaction prevention (30-second TTL). Never bypass this lock.
        </InfoBox>
      </Expandable>

      <Expandable title="Offers & Deals Domain" icon={Star}>
        <DocTable
          headers={['Table', 'Key Fields', 'Purpose']}
          rows={[
            ['offers', 'merchant_id FK, title, discount_type (percent/fixed/BOGO/cashback), discount_value, rez_coins_required, rez_coins_earned, time_restrictions, day_restrictions, usage_limit, user_segment, approval_status, is_boosted, is_featured', 'Comprehensive offer system with targeting'],
            ['offer_redemptions', 'offer_id FK, user_id FK, order_id FK, original_amount, discount_amount, final_amount, coins_used, coins_earned', 'Every redemption tracked with full financial breakdown'],
          ]}
        />
      </Expandable>

      <Expandable title="Loyalty & Premium Domain" icon={Heart}>
        <DocTable
          headers={['Table', 'Key Fields', 'Purpose']}
          rows={[
            ['loyalty_tiers', 'name (Bronze/Silver/Gold/Platinum), min_spend, min_orders, coin_multiplier, exclusive_offers, priority_support, free_delivery', 'Tier definitions with perks'],
            ['user_loyalty', 'user_id FK, current_tier, total_spend, total_orders, progress_to_next, streak_days, achievements (JSONB)', 'Per-user tier tracking'],
            ['prive_subscriptions', 'user_id FK, tier (Lite/Plus/Premium), plan_duration (1/3/6/12 months), auto_renew, started_at, expires_at, payment_id', 'Premium subscription management'],
            ['prive_merchants', 'merchant_id FK, exclusive_discount_percent, coin_multiplier, featured_in_prive', 'Merchants offering Prive-exclusive benefits'],
          ]}
        />
      </Expandable>

      <Expandable title="Admin & Operations Domain" icon={Shield}>
        <DocTable
          headers={['Table', 'Key Fields', 'Purpose']}
          rows={[
            ['admin_users', 'name, email, role (super_admin/operations_admin/support_admin/finance_admin), level (60-100), assigned_city, assigned_team, is_active', 'Role-based admin access'],
            ['admin_activity_logs', 'admin_id FK, action, resource_type, resource_id, old_values (JSONB), new_values (JSONB), ip_address, user_agent', 'Full audit trail of every admin action'],
          ]}
        />
      </Expandable>

      <Expandable title="Growth Domain" icon={TrendingUp}>
        <DocTable
          headers={['Table', 'Key Fields', 'Purpose']}
          rows={[
            ['referrals', 'referrer_id FK, referee_id FK, referral_code, referrer_coins_reward, referee_coins_reward, completion_conditions (JSONB), status', 'Configurable referral tracking'],
            ['student_ambassadors', 'user_id FK, college_id FK, commission_rate, total_referrals, total_earned, performance_tier', 'Campus ambassador program'],
            ['colleges', 'name, city, campus_manager, student_count, partnership_status', 'Partner college management'],
            ['campaigns', 'type (push/email/SMS/in-app), title, audience_segment, a_b_variant, scheduled_at, sent_count, open_rate, click_rate', 'Marketing campaigns with A/B testing'],
          ]}
        />
      </Expandable>

      <Expandable title="MongoDB Collections (Analytics)" icon={Activity}>
        <DocTable
          headers={['Collection', 'TTL', 'Purpose']}
          rows={[
            ['user_activity_logs', '180 days', 'Every app event (screen views, clicks, searches) with device/location context'],
            ['search_queries', '90 days', 'Search behavior tracking for autocomplete and relevance optimization'],
            ['ab_test_results', 'Permanent', 'Experiment variant assignment and conversion tracking'],
            ['notification_logs', '90 days', 'Delivery tracking across push/email/SMS channels'],
            ['fraud_detection_logs', '365 days', 'Risk scoring with signal detection (device changes, location, velocity)'],
          ]}
        />
      </Expandable>

      <Expandable title="Redis Key Patterns" icon={Zap}>
        <DocTable
          headers={['Pattern', 'TTL', 'Purpose']}
          rows={[
            ['session:{userId}', '24h', 'User session data and JWT cache'],
            ['wallet:lock:{walletId}', '30s', 'Concurrent transaction prevention'],
            ['wallet:balance:{userId}', '5min', 'Cached wallet balance for fast reads'],
            ['rate:limit:{ip}', '1min', 'API rate limiting per IP'],
            ['leaderboard:{type}', '10min', 'Gamification leaderboards (sorted sets)'],
            ['geo:merchants:{city}', '15min', 'Geospatial merchant locations'],
            ['otp:{phone}', '5min', 'OTP verification codes'],
            ['feature:flags', '1min', 'Feature flag cache for instant toggling'],
          ]}
        />
      </Expandable>

      <Expandable title="Elasticsearch Indices" icon={Search}>
        <DocTable
          headers={['Index', 'Source', 'Purpose']}
          rows={[
            ['products', 'PostgreSQL products table', 'Full-text search, autocomplete, geo-spatial product discovery'],
            ['merchants', 'PostgreSQL merchants + outlets', 'Merchant search with location-based filtering'],
            ['offers', 'PostgreSQL offers table', 'Real-time offer search with category/location/price filtering'],
          ]}
        />
      </Expandable>

      <Expandable title="Scaling Strategy" icon={Cloud}>
        <ul className="space-y-2 text-slate-300 text-sm">
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> <span><strong className="text-white">Table Partitioning:</strong> Orders by month, wallet transactions by quarter, merchants by city</span></li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> <span><strong className="text-white">Sharding:</strong> Citus or Vitess when DB exceeds 500GB or 10,000 QPS</span></li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> <span><strong className="text-white">Materialized Views:</strong> Complex dashboard aggregations pre-computed</span></li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> <span><strong className="text-white">Multi-Level Cache:</strong> Redis (5-10 min) → Application cache (1 min) → CDN</span></li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> <span><strong className="text-white">Connection Pooling:</strong> node-postgres, max 20 connections per service</span></li>
        </ul>
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION 4: API REFERENCE
// ════════════════════════════════════════════════════════════════════
function ApiSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">API Reference</h2>
      <p className="text-slate-400 mb-6">500+ endpoints organized by domain. All APIs go through Rabtul API Gateway.</p>

      <InfoBox type="info">
        <strong>Auth Pattern:</strong> All requests require <code className="text-[#c9a227]">Authorization: Bearer &lt;JWT&gt;</code> header. Tokens issued by Rabtul Auth Service. Role-based access (RBAC) enforced at gateway level.
      </InfoBox>

      <Expandable title="Authentication (7 endpoints)" icon={Fingerprint} defaultOpen>
        <DocTable
          headers={['Method', 'Endpoint', 'Description', 'Auth']}
          rows={[
            ['POST', '/api/auth/register', 'Register new user (phone + OTP)', 'Public'],
            ['POST', '/api/auth/login', 'Login with phone + OTP or password', 'Public'],
            ['POST', '/api/auth/verify-otp', 'Verify OTP code', 'Public'],
            ['POST', '/api/auth/logout', 'Invalidate session', 'Bearer'],
            ['POST', '/api/auth/refresh', 'Refresh JWT token', 'Refresh Token'],
            ['POST', '/api/auth/forgot-password', 'Initiate password reset', 'Public'],
            ['POST', '/api/auth/reset-password', 'Complete password reset', 'Reset Token'],
          ]}
        />
      </Expandable>

      <Expandable title="User Profile (5+ endpoints)" icon={Users}>
        <DocTable
          headers={['Method', 'Endpoint', 'Description']}
          rows={[
            ['GET', '/api/users/me', 'Get current user profile'],
            ['PUT', '/api/users/me', 'Update profile (name, email, preferences)'],
            ['POST', '/api/users/me/avatar', 'Upload profile picture (multipart)'],
            ['GET', '/api/users/me/addresses', 'List saved addresses'],
            ['POST', '/api/users/me/addresses', 'Add new address with lat/lng'],
            ['PUT', '/api/users/me/preferences', 'Update notification/privacy preferences'],
          ]}
        />
      </Expandable>

      <Expandable title="Wallet & Coins (6+ endpoints)" icon={Wallet}>
        <DocTable
          headers={['Method', 'Endpoint', 'Description']}
          rows={[
            ['GET', '/api/wallet/balance', 'Get all balances (ReZ coins, branded, Prive, promo, cash)'],
            ['POST', '/api/wallet/topup', 'Add money via UPI/Card/Net Banking'],
            ['GET', '/api/wallet/transactions', 'Paginated transaction history with filters'],
            ['GET', '/api/coins/balance', 'Coin-specific breakdown'],
            ['GET', '/api/coins/history', 'Coin earn/spend history'],
            ['POST', '/api/coins/redeem', 'Redeem coins at checkout'],
          ]}
        />
        <CodeBlock title="Example: GET /api/wallet/balance Response" code={`{
  "rez_coins": 1250,
  "branded_coins": {
    "merchant_abc123": { "balance": 50, "earned": 200, "spent": 150 }
  },
  "prive_coins": 300,
  "promo_coins": 100,
  "cash_balance": 500.00,
  "daily_limit": 5000,
  "monthly_limit": 50000,
  "is_frozen": false
}`} />
      </Expandable>

      <Expandable title="Products & Catalog (7+ endpoints)" icon={Package}>
        <DocTable
          headers={['Method', 'Endpoint', 'Description']}
          rows={[
            ['GET', '/api/products', 'List/search products (pagination, filters, sort)'],
            ['GET', '/api/products/:id', 'Product details with variants, reviews, offers'],
            ['GET', '/api/products/:id/reviews', 'Product reviews with ratings'],
            ['GET', '/api/categories', 'Category tree (3 levels)'],
            ['GET', '/api/categories/:id/products', 'Products in category'],
            ['GET', '/api/search/autocomplete', 'Search autocomplete suggestions'],
            ['GET', '/api/search/products', 'Full-text search with geo/category filters'],
          ]}
        />
      </Expandable>

      <Expandable title="Cart & Checkout (7+ endpoints)" icon={ShoppingCart}>
        <DocTable
          headers={['Method', 'Endpoint', 'Description']}
          rows={[
            ['GET', '/api/cart', 'Get current cart with pricing breakdown'],
            ['POST', '/api/cart/items', 'Add item to cart'],
            ['PUT', '/api/cart/items/:id', 'Update item quantity'],
            ['DELETE', '/api/cart/items/:id', 'Remove item from cart'],
            ['POST', '/api/cart/apply-coupon', 'Apply coupon/offer code'],
            ['POST', '/api/cart/validate', 'Validate cart before checkout (stock, pricing)'],
            ['POST', '/api/checkout', 'Create order and initiate payment'],
          ]}
        />
      </Expandable>

      <Expandable title="Orders (5+ endpoints)" icon={FileText}>
        <DocTable
          headers={['Method', 'Endpoint', 'Description']}
          rows={[
            ['GET', '/api/orders', 'List user orders (pagination, status filter)'],
            ['GET', '/api/orders/:id', 'Order details with items, payment, delivery'],
            ['POST', '/api/orders/:id/cancel', 'Cancel order (with reason)'],
            ['GET', '/api/orders/:id/track', 'Real-time delivery tracking'],
            ['POST', '/api/orders/:id/return', 'Initiate return/refund'],
          ]}
        />
      </Expandable>

      <Expandable title="Merchants (5+ endpoints)" icon={Store}>
        <DocTable
          headers={['Method', 'Endpoint', 'Description']}
          rows={[
            ['GET', '/api/merchants', 'List/search merchants with geo-filters'],
            ['GET', '/api/merchants/:id', 'Merchant details with outlets, hours, features'],
            ['GET', '/api/merchants/:id/products', 'Merchant product catalog'],
            ['GET', '/api/merchants/:id/offers', 'Active offers from this merchant'],
            ['GET', '/api/merchants/nearby', 'Geo-search merchants within radius'],
          ]}
        />
      </Expandable>

      <Expandable title="Merchant Dashboard (7+ endpoints)" icon={BarChart3}>
        <DocTable
          headers={['Method', 'Endpoint', 'Description', 'Role']}
          rows={[
            ['GET', '/api/merchant/dashboard', 'Dashboard stats (today sales, orders, visitors)', 'Owner/Manager'],
            ['GET', '/api/merchant/orders', 'Incoming orders with status management', 'All'],
            ['PUT', '/api/merchant/orders/:id/status', 'Update order status (accept/prepare/ready/deliver)', 'All'],
            ['GET', '/api/merchant/inventory', 'Inventory with stock levels, expiry alerts', 'Owner/Manager'],
            ['POST', '/api/merchant/products', 'Add new product with variants', 'Owner/Manager'],
            ['PUT', '/api/merchant/products/:id', 'Update product details/pricing/stock', 'Owner/Manager'],
            ['GET', '/api/merchant/analytics', 'Sales, customer, and performance analytics', 'Owner'],
          ]}
        />
      </Expandable>

      <Expandable title="Offers & Deals (5+ endpoints)" icon={Star}>
        <DocTable
          headers={['Method', 'Endpoint', 'Description']}
          rows={[
            ['GET', '/api/offers', 'List available offers (location, category filters)'],
            ['GET', '/api/offers/:id', 'Offer details with terms, restrictions'],
            ['POST', '/api/offers/:id/claim', 'Claim/redeem an offer'],
            ['GET', '/api/deals/flash', 'Time-limited flash deals'],
            ['GET', '/api/deals/personalized', 'AI-recommended deals for user'],
          ]}
        />
      </Expandable>

      <Expandable title="Admin Operations (6+ endpoints)" icon={Shield}>
        <DocTable
          headers={['Method', 'Endpoint', 'Description', 'Min Level']}
          rows={[
            ['GET', '/api/admin/dashboard', 'Platform-wide dashboard metrics', 'Level 60'],
            ['GET', '/api/admin/users', 'User management (search, filter, lookup)', 'Level 60'],
            ['GET', '/api/admin/merchants', 'Merchant list with status, compliance', 'Level 70'],
            ['POST', '/api/admin/merchants/:id/approve', 'Approve merchant application', 'Level 80'],
            ['GET', '/api/admin/transactions', 'Transaction monitoring and reconciliation', 'Level 70'],
            ['GET', '/api/admin/analytics', 'Business intelligence and custom reports', 'Level 80'],
          ]}
        />
      </Expandable>

      <Expandable title="Cross-System APIs (50+ endpoints)" icon={Network}>
        <p className="text-slate-400 text-sm mb-3">These APIs connect the 4 core pillars internally. Not exposed to clients directly.</p>
        <DocTable
          headers={['From → To', 'Endpoint', 'Purpose']}
          rows={[
            ['Nuqta → BizOne', 'POST /api/bizone/transaction/process', 'Process user transaction at merchant POS'],
            ['Nuqta → BizOne', 'GET /api/bizone/merchant/:id/offers', 'Fetch merchant offers for user display'],
            ['Nuqta → BizOne', 'POST /api/bizone/loyalty/sync-visit', 'Record user visit to merchant'],
            ['BizOne → Nuqta', 'POST /api/rez/coins/credit', 'Credit coins to user after confirmed sale'],
            ['BizOne → Nuqta', 'GET /api/rez/user/:id/tier', 'Check user loyalty tier for discount'],
            ['BizOne → Nuqta', 'POST /api/rez/loyalty/record-visit', 'Update user visit streak'],
            ['Nuqta → Rabtul', 'POST /api/rabtul/auth/validate', 'Validate JWT token'],
            ['Nuqta → Rabtul', 'GET /api/rabtul/coins/balance/:userId', 'Get real-time coin balance from ledger'],
            ['Nuqta → Rabtul', 'POST /api/rabtul/aira/recommend/:userId', 'Get AI personalized recommendations'],
            ['Adzy → Rabtul', 'POST /api/rabtul/aira/audience/create', 'Create target audience segment'],
            ['Adzy → Rabtul', 'GET /api/rabtul/aira/predictions/campaign', 'Get campaign performance predictions'],
            ['Admin → Rabtul', 'POST /api/admin/rabtul/coins/mint', 'Mint new coins (controlled supply)'],
            ['Admin → Rabtul', 'POST /api/admin/rabtul/coins/burn', 'Burn/remove coins from circulation'],
            ['Admin → Rabtul', 'GET /api/admin/rabtul/coins/supply', 'View total coin supply metrics'],
          ]}
        />
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION 5: CUSTOMER APP
// ════════════════════════════════════════════════════════════════════
function CustomerAppSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Customer App (Nuqta)</h2>
      <p className="text-slate-400 mb-6">213 screens + 141 Prive VIP pages. The universal customer passport.</p>

      <Expandable title="4 Shopping Modes" icon={Smartphone} defaultOpen>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {[
            { mode: 'Browse & Shop', desc: 'Traditional e-commerce — browse categories, product listings, add to cart, checkout', icon: ShoppingCart, color: 'border-blue-500/50' },
            { mode: 'Scan & Pay', desc: 'Offline stores — scan merchant QR code, view bill, pay with wallet/coins/UPI, get receipt', icon: Eye, color: 'border-emerald-500/50' },
            { mode: 'Social Commerce', desc: 'Creator-driven — BuzzLoop/creator profiles, curated collections, social feed shopping', icon: Users, color: 'border-purple-500/50' },
            { mode: 'AI Discovery', desc: 'AI-R chat-based recommendations — conversational shopping assistant powered by AIRA', icon: Brain, color: 'border-amber-500/50' },
          ].map(m => (
            <div key={m.mode} className={`border ${m.color} rounded-xl p-4 bg-slate-800/30`}>
              <div className="flex items-center gap-2 mb-2">
                <m.icon className="w-5 h-5 text-[#c9a227]" />
                <h4 className="font-bold text-white text-sm">{m.mode}</h4>
              </div>
              <p className="text-slate-400 text-xs">{m.desc}</p>
            </div>
          ))}
        </div>
      </Expandable>

      <Expandable title="Core User Flows" icon={ArrowRight} defaultOpen>
        <div className="space-y-4">
          <div>
            <h4 className="text-white font-semibold text-sm mb-2">Authentication Flow</h4>
            <CodeBlock code={`Login → OTP Verify → Home
  OR
Signup → OTP Verify → Profile Setup → Home`} />
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-2">Browse & Shop Flow</h4>
            <CodeBlock code={`Home → Category Hub → Product Listing → Product Detail
  → Add to Cart → Cart → Checkout → Payment → Order Confirmation`} />
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-2">Scan & Pay Flow (Offline)</h4>
            <CodeBlock code={`Home → Scan & Pay Button → QR Scanner → Merchant POS
  → Bill View → Payment (wallet/coins/UPI) → Receipt`} />
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-2">Social Commerce Flow</h4>
            <CodeBlock code={`Home → Social Tab → Social Hub → Creator Profile
  → Creator Store → Product Detail → Cart`} />
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-2">AI Discovery Flow</h4>
            <CodeBlock code={`Home → AI Recommendations → AI Chat → Recommendations
  → Product Detail → Cart`} />
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-2">Wallet Flow</h4>
            <CodeBlock code={`Home → Wallet → Add Money (UPI/Cards/Net Banking)
  | View Balance | Transaction History | Redeem Coins`} />
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-2">Loyalty/Rewards Flow</h4>
            <CodeBlock code={`Purchase → Earn Coins → View Tier Progress → Unlock Achievements
  → Redeem for Discounts → Tier Upgrade
  (Bronze → Silver → Gold → Platinum → Prive)`} />
          </div>
        </div>
      </Expandable>

      <Expandable title="Screen Inventory (213 screens)" icon={LayoutGrid}>
        <DocTable
          headers={['Section', 'Screen Count', 'Key Screens']}
          rows={[
            ['Home & Discovery', '15+', 'Home, Search, Categories, Trending, Map View'],
            ['Shopping', '25+', 'Product List, Product Detail, Cart, Checkout, Payment'],
            ['Wallet & Coins', '20+', 'Balance, Add Money, History, Redeem, QR Pay'],
            ['Loyalty & Rewards', '15+', 'Tier Progress, Achievements, Daily Check-in, Spin & Win'],
            ['Profile & Settings', '12+', 'Profile, Addresses, Payment Methods, Preferences'],
            ['Orders', '10+', 'Order List, Order Detail, Tracking, Returns'],
            ['Social', '15+', 'Social Hub, Creator Profile, Collections, Feed'],
            ['Gamification', '20+', 'Tournaments, Challenges, Leaderboard, Scratch Cards'],
            ['Offers & Deals', '12+', 'Offer List, Deal Detail, Flash Deals, Claimed'],
            ['Referral & Growth', '8+', 'Referral Dashboard, Share, Ambassador'],
          ]}
        />
      </Expandable>

      <Expandable title="Prive VIP Program (141 pages)" icon={Star}>
        <p className="text-slate-300 mb-3">Premium membership with exclusive merchant benefits, higher coin multipliers, and VIP access.</p>
        <DocTable
          headers={['Tier', 'Duration Options', 'Key Benefits']}
          rows={[
            ['Prive Lite', '1, 3, 6, 12 months', 'Basic exclusive discounts, 1.2x coin multiplier'],
            ['Prive Plus', '1, 3, 6, 12 months', 'Better discounts, 1.5x coins, priority support, free delivery'],
            ['Prive Premium', '1, 3, 6, 12 months', '2x coins, VIP access, concierge, exclusive events, all perks'],
          ]}
        />
        <InfoBox type="action">
          <strong>PM Note:</strong> 141 dedicated Prive pages are designed. Each Prive merchant must opt-in and configure exclusive discount percentage and coin multiplier via BizOne settings.
        </InfoBox>
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION 6: MERCHANT OS (BIZONE)
// ════════════════════════════════════════════════════════════════════
function MerchantOsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Merchant OS (BizOne)</h2>
      <p className="text-slate-400 mb-6">222 screens. The complete operating system for merchants — POS, inventory, billing, CRM, marketing, analytics.</p>

      <Expandable title="Module Breakdown (222 screens)" icon={Store} defaultOpen>
        <DocTable
          headers={['Module', 'Screens', 'Key Features']}
          rows={[
            ['POS System', '28', 'Offline-first POS, QR ordering, soft POS (phone-as-terminal), receipt printing, split payments, tips config, rush hour mode'],
            ['Inventory Management', '35', 'Batch/expiry tracking, low stock alerts, forecasting, label printing, stock reconciliation, waste tracking, ingredient tracking'],
            ['Orders & Fulfillment', '25', 'Multi-channel orders (in-store, online, delivery), order tracking, returns processing, delivery partner integration'],
            ['CRM & Customers', '20', 'Customer database, segmentation, loyalty tracking, re-engagement campaigns, review management, wishlist demand'],
            ['Marketing & Offers', '22', 'Create offers/deals, flash deals, vouchers, exclusive programs, loyalty builder, nearby offers, referral tracking'],
            ['Analytics & Reports', '18', 'Sales dashboard, inventory reports, staff performance, customer insights, demand signals, seasonal trends'],
            ['Financial Management', '20', 'GST setup wizard, e-invoicing, P&L, expense tracker, TDS/TCS reports, tax compliance, accountant portal'],
            ['Staff Management', '15', 'User roles (RBAC), shift scheduling, payroll, commissions, activity logs, leaderboard, team management'],
            ['Multi-Store', '12', 'Multi-store dashboard, stock transfers, warehouse management, store comparison, floor plan'],
            ['Integrations', '15', 'POS hardware, ERP connector, payment gateways, delivery partners, WhatsApp Business, Google/Meta Ads'],
            ['Supplier & Procurement', '12', 'Supplier management, purchase orders, contracts, performance tracking, vendor portal, invoice scanner'],
          ]}
        />
      </Expandable>

      <Expandable title="Merchant Hierarchy & Roles" icon={Users}>
        <DocTable
          headers={['Role', 'Level', 'Permissions']}
          rows={[
            ['Owner', '50', 'Full access: all modules, financial data, staff management, settings, multi-store, analytics'],
            ['Manager', '40', 'Operations: orders, inventory, staff scheduling, basic reports, CRM, limited financial access'],
            ['Staff / Cashier', '30', 'POS only: process transactions, accept orders, basic inventory lookup, no financial/settings access'],
          ]}
        />
        <InfoBox type="action">
          <strong>Dev Note:</strong> Permissions stored as JSONB in <code className="text-[#c9a227]">merchant_users.permissions</code>. Fine-grained — each module/action can be toggled independently.
        </InfoBox>
      </Expandable>

      <Expandable title="Merchant Onboarding Flow" icon={ArrowRight}>
        <div className="space-y-3">
          {[
            { step: '1', title: 'MerchantSignup', desc: 'Collects basic info — name, phone, email' },
            { step: '2', title: 'MerchantBusinessDetails', desc: 'Business info — GSTIN, PAN, FSSAI (food), business type, address with geolocation' },
            { step: '3', title: 'MerchantDocuments', desc: 'Upload verification documents (trade license, ID proof, bank statement)' },
            { step: '4', title: 'MerchantBankAccount', desc: 'Settlement bank account — verified via penny-drop method' },
            { step: '5', title: 'HQ Admin Review', desc: 'Admin (Level 80+) reviews and approves/rejects via POST /admin/merchants/{id}/approve' },
            { step: '6', title: 'MerchantSuccess', desc: 'Confirmation page — merchant goes live, gets access to BizOne OS' },
          ].map(s => (
            <div key={s.step} className="flex gap-3 p-3 bg-slate-800/30 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#c9a227]/20 flex items-center justify-center text-[#c9a227] font-bold text-sm">{s.step}</div>
              <div>
                <h4 className="font-semibold text-white text-sm">{s.title}</h4>
                <p className="text-slate-400 text-xs mt-0.5">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <InfoBox type="info">
          <strong>Status Flow:</strong> <code className="text-[#c9a227]">pending → documents_submitted → verified → live</code>. Quick onboarding path available for pre-verified merchants.
        </InfoBox>
      </Expandable>

      <Expandable title="Key Screens List" icon={Monitor}>
        <DocTable
          headers={['Screen', 'Type', 'Description']}
          rows={[
            ['MerchantSuperOSDashboard', 'Standard', 'Main dashboard — links to marketing, orders, POS'],
            ['MerchantSimplePOS', 'Modal', 'Quick billing for small transactions'],
            ['MerchantOfflinePOS', 'Tab View', 'Offline-first POS with sync when online'],
            ['MerchantInventoryAdvanced', 'Tab View', 'Full inventory with batch/expiry/forecasting'],
            ['MerchantOrdersMultiChannel', 'Tab View', 'Unified orders from all channels'],
            ['MerchantCRMDashboard', 'Tab View', 'Customer insights and segmentation'],
            ['MerchantMarketingCampaigns', 'Tab View', 'Create and manage ad campaigns'],
            ['MerchantSettlementEngine', 'Tab View', 'Track payouts and settlement status'],
            ['MerchantCreditLedger', 'Tab View', 'Credit line tracking and repayments'],
            ['MerchantAnalytics', 'Standard', 'Comprehensive sales and performance analytics'],
          ]}
        />
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION 7: ADMIN PANEL
// ════════════════════════════════════════════════════════════════════
function AdminPanelSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Admin Panel (HQ) — Complete Module Reference</h2>
      <p className="text-slate-400 mb-6">178 screens across 17 modules. Navigation: 5 bottom tabs (Dashboard, Orders, Campaigns, Merchants, Settings) + hidden pages accessible from Settings.</p>

      <InfoBox type="info">
        <strong>Roles:</strong> Super Admin, Admin, Operator, Support — see &quot;Admin Roles &amp; Rules&quot; section for detailed permissions per role.
      </InfoBox>

      <Expandable title="1. Dashboard (Home)" icon={BarChart3} defaultOpen>
        <DocTable
          headers={['Feature', 'Details']}
          rows={[
            ['Overview Stats', 'Total Revenue, Platform Fees (15%), Orders Today/This Week, Pending Orders'],
            ['Merchant Stats', 'Total, Pending Approval, Active, New This Month'],
            ['User Stats', 'Total, Active, New Today, New This Month'],
            ['Rez Coins Stats', 'Total Awarded, Pending Approval, Awarded Today, This Month'],
            ['Quick Actions', 'Review Coin Rewards, Approve Merchants, Manage Orders, Platform Wallet'],
            ['Pull to Refresh', 'Refreshes all stat cards'],
          ]}
        />
      </Expandable>

      <Expandable title="2. Orders Management" icon={ShoppingCart}>
        <h4 className="text-white font-semibold text-sm mb-2">Viewing</h4>
        <ul className="space-y-1 text-slate-300 text-sm mb-4">
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Search by order number</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Filter by status: All, Pending, Confirmed, Delivered, Cancelled</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Infinite scroll pagination</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Each order shows: order number, store name, items, status badge, customer info, date, total, payment status, delivery type, platform fee, lock fee, coins used, cashback</li>
        </ul>
        <h4 className="text-white font-semibold text-sm mb-2">Actions</h4>
        <DocTable
          headers={['Action', 'When Available']}
          rows={[
            ['View Details', 'All orders — modal shows full item breakdown'],
            ['Update Status', 'Based on workflow transitions'],
            ['Refund', 'Delivered or Confirmed + Paid — requires reason'],
            ['Cancel', 'Pending or Placed — requires reason'],
          ]}
        />
        <h4 className="text-white font-semibold text-sm mb-2">Status Workflow</h4>
        <CodeBlock code={`placed/pending → confirmed → preparing → ready → dispatched → delivered → returned/refunded`} />
      </Expandable>

      <Expandable title="3. Campaigns" icon={TrendingUp}>
        <h4 className="text-white font-semibold text-sm mb-2">Viewing</h4>
        <ul className="space-y-1 text-slate-300 text-sm mb-4">
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Tabs: All, Running, Upcoming, Expired, Inactive</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Search bar + Stats header</li>
        </ul>
        <h4 className="text-white font-semibold text-sm mb-2">Actions</h4>
        <DocTable
          headers={['Action', 'Details']}
          rows={[
            ['Create Campaign', 'FAB button — full form'],
            ['Edit Campaign', 'Tap campaign card'],
            ['Delete Campaign', 'Campaign menu'],
            ['Publish / Unpublish', 'Toggle'],
            ['Feature / Unfeature', 'Toggle'],
            ['Add / Edit / Delete Deals', 'Within campaign form'],
          ]}
        />
        <h4 className="text-white font-semibold text-sm mb-2">Campaign Form Fields</h4>
        <ul className="space-y-1 text-slate-300 text-sm">
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Title, Subtitle, Description</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Type: General, Cashback, Coins, Bank Offer, Bill Upload, Coin Drop, New User, Flash Sale</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Region: All, Bangalore, Dubai, China</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Banner Image (3:1), Icon Image (1:1)</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Start/End date &amp; time</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Active / Featured toggles</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Deals array (title, image, description)</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Store selection (multi-select)</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Gradient colors</li>
        </ul>
      </Expandable>

      <Expandable title="4. Merchants Management" icon={Store}>
        <h4 className="text-white font-semibold text-sm mb-2">Viewing</h4>
        <ul className="space-y-1 text-slate-300 text-sm mb-4">
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Search by name/email/phone</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Filter: All, Pending, Approved, Suspended</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Infinite scroll</li>
        </ul>
        <DocTable
          headers={['Action', 'When Available']}
          rows={[
            ['Approve', 'Pending merchants'],
            ['Reject', 'Pending — requires reason'],
            ['View Details', 'All — shows full info + wallet'],
            ['View Wallet', 'Approved — balance, sales, fees, orders'],
            ['Suspend', 'Approved — requires reason'],
          ]}
        />
      </Expandable>

      <Expandable title="5. Users Management" icon={Users}>
        <h4 className="text-white font-semibold text-sm mb-2">Viewing</h4>
        <ul className="space-y-1 text-slate-300 text-sm mb-4">
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Search by name/email/phone</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Filter by Role: All, User, Merchant, Admin</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Filter by Status: All, Active, Suspended</li>
        </ul>
        <DocTable
          headers={['Action', 'When Available']}
          rows={[
            ['View Details', 'All — full profile + wallet'],
            ['View Wallet', 'Balance, coins, transaction history'],
            ['Suspend', 'Active users'],
            ['Unsuspend', 'Suspended users'],
          ]}
        />
      </Expandable>

      <Expandable title="6. Coin Rewards" icon={Coins}>
        <h4 className="text-white font-semibold text-sm mb-2">Stats</h4>
        <p className="text-slate-300 text-sm mb-4">Total, Pending, Approved, Rejected, Credited</p>
        <h4 className="text-white font-semibold text-sm mb-2">Tabs: Pending | Approved | Rejected</h4>
        <p className="text-slate-300 text-sm mb-4">Each item shows: user info, amount, percentage, source (purchase/social/review/referral), dates</p>
        <DocTable
          headers={['Action', 'Tab']}
          rows={[
            ['Approve (single)', 'Pending'],
            ['Reject (with reason)', 'Pending'],
            ['Bulk Approve (multi-select)', 'Pending'],
          ]}
        />
      </Expandable>

      <Expandable title="7. Wallet" icon={Wallet}>
        <DocTable
          headers={['Tab', 'Content']}
          rows={[
            ['Overview', 'Total Revenue, Platform Fees Collected, Withdrawals Processed, Net Balance'],
            ['Transactions', 'Paginated list — type, description, amount, date, status'],
            ['Breakdown', '30-day daily revenue and fees breakdown'],
          ]}
        />
      </Expandable>

      <Expandable title="8. Explore" icon={Eye}>
        <h4 className="text-white font-semibold text-sm mb-2">Videos Tab</h4>
        <ul className="space-y-1 text-slate-300 text-sm mb-3">
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Stats: Published, Unpublished, Featured, Trending</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Filters: All, Published, Unpublished, Featured, Trending, Pending</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Actions: Add video, Edit, Delete, Publish/Unpublish, Feature/Unfeature, Set Trending</li>
        </ul>
        <h4 className="text-white font-semibold text-sm mb-2">Reviews Tab</h4>
        <ul className="space-y-1 text-slate-300 text-sm mb-3">
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Stats: Eligible, Featured</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Filters: Featured, Eligible</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Actions: Feature/Unfeature review</li>
        </ul>
        <h4 className="text-white font-semibold text-sm mb-2">Comparisons Tab</h4>
        <p className="text-slate-300 text-sm">Product comparison management</p>
      </Expandable>

      <Expandable title="9. Offers" icon={Star}>
        <h4 className="text-white font-semibold text-sm mb-2">Viewing</h4>
        <ul className="space-y-1 text-slate-300 text-sm mb-4">
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Zone filters: All, Exclusive, General, Student, Corporate, Women, Birthday, Senior, Defence</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Search bar, 50 items per page</li>
        </ul>
        <DocTable
          headers={['Action', 'Details']}
          rows={[
            ['Create Offer', 'FAB — full form modal'],
            ['Edit Offer', 'Tap offer card'],
            ['Delete Offer', 'Offer menu'],
            ['Publish / Unpublish', 'Toggle'],
            ['Feature / Mark Trending', 'Toggle'],
          ]}
        />
        <h4 className="text-white font-semibold text-sm mb-2 mt-4">Offer Form Fields</h4>
        <ul className="space-y-1 text-slate-300 text-sm">
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Title, Subtitle, Description, Image</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Category: General, Food, Grocery, Fashion, Electronics, Beauty, Wellness, Entertainment, etc.</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Type: Cashback, Discount, Voucher, Combo, Special, Walk-in</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Cashback %, Store selection, Exclusive Zone</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Validity dates, Priority, Tags, Free delivery toggle</li>
        </ul>
      </Expandable>

      <Expandable title="10. Loyalty" icon={Heart}>
        <h4 className="text-white font-semibold text-sm mb-2">Viewing</h4>
        <ul className="space-y-1 text-slate-300 text-sm mb-4">
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Stats: Total users, Active, Top tiers</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Category filter: All, Food &amp; Dining, Beauty, Grocery, etc.</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Sort: By Streak, By Coins, By Missions</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Search (debounced)</li>
        </ul>
        <h4 className="text-white font-semibold text-sm mb-2">User Card Shows</h4>
        <p className="text-slate-300 text-sm mb-4">Tier (Bronze/Silver/Gold/Platinum), Coins, Streak, Missions, Category coins breakdown</p>
        <DocTable
          headers={['Action', 'Details']}
          rows={[
            ['View User Details', 'Tap card'],
            ['Add Coins', 'Modal — amount, reason, category'],
          ]}
        />
      </Expandable>

      <Expandable title="11. Verifications" icon={Fingerprint}>
        <h4 className="text-white font-semibold text-sm mb-2">Viewing</h4>
        <ul className="space-y-1 text-slate-300 text-sm mb-4">
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Stats: Pending, Approved, Rejected</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Status filter: All, Pending, Approved, Rejected</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Type filter: Student, Corporate, Defence, Healthcare, Senior, Teacher, Government</li>
        </ul>
        <DocTable
          headers={['Action', 'When Available']}
          rows={[
            ['Approve', 'Pending — requires confirmation'],
            ['Reject', 'Pending — requires reason'],
            ['View Details', 'All — shows document preview'],
          ]}
        />
      </Expandable>

      <Expandable title="12. Homepage Deals" icon={LayoutGrid}>
        <h4 className="text-white font-semibold text-sm mb-2">Config Management</h4>
        <p className="text-slate-300 text-sm mb-4">Edit section title, subtitle, icon, active status</p>
        <h4 className="text-white font-semibold text-sm mb-2">Deal Items</h4>
        <DocTable
          headers={['Action', 'Details']}
          rows={[
            ['Create Item', 'FAB button'],
            ['Edit Item', 'Tap item'],
            ['Delete Item', 'Item menu'],
            ['Reorder Items', 'Drag & drop'],
            ['Toggle Active', 'Item card'],
          ]}
        />
        <h4 className="text-white font-semibold text-sm mb-2 mt-4">Item Form Fields</h4>
        <ul className="space-y-1 text-slate-300 text-sm">
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Title, Subtitle</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Tab Type: Offers, Cashback, Exclusive</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Item Type: Category, Campaign, Zone, Custom</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Icon/Emoji picker, Gradient colors</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Navigation path, Show count, Count label</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Requires verification toggle + verification type</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Regions (multi-select)</li>
        </ul>
      </Expandable>

      <Expandable title="13. Experiences" icon={Globe}>
        <h4 className="text-white font-semibold text-sm mb-2">Viewing</h4>
        <p className="text-slate-300 text-sm mb-4">Tabs: All, Active, Inactive, Featured — with search bar</p>
        <DocTable
          headers={['Action', 'Details']}
          rows={[
            ['Create', 'FAB — full form'],
            ['Edit', 'Tap experience'],
            ['Delete', 'Menu'],
            ['Toggle Active / Featured', 'Toggle'],
            ['Assign / Remove Stores', 'Modal selector'],
          ]}
        />
        <h4 className="text-white font-semibold text-sm mb-2 mt-4">Form Fields</h4>
        <ul className="space-y-1 text-slate-300 text-sm">
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Title, Subtitle, Description, Slug</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Icon/Emoji, Type (Custom/Premium/Deal/Category)</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Badge text &amp; colors, Background color</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Benefits array</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Filter criteria: Tags, Min rating, Store filters, Categories</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Regions, Sort order</li>
        </ul>
      </Expandable>

      <Expandable title="14. Mall" icon={Building2}>
        <h4 className="text-white font-semibold text-sm mb-2">Dashboard Tab</h4>
        <p className="text-slate-300 text-sm mb-4">Total brands, Featured, Luxury, Total offers, Active offers</p>

        <h4 className="text-white font-semibold text-sm mb-2">Brands Tab</h4>
        <DocTable
          headers={['Action', 'Details']}
          rows={[
            ['Create Brand', 'Modal form'],
            ['Edit Brand', 'Tap brand'],
            ['Delete Brand', 'Menu'],
            ['Toggle Active / Featured / Luxury', 'Toggles'],
          ]}
        />
        <p className="text-slate-300 text-sm mb-4">Form: Name, Slug, Description, Logo, External URL, Tier, Cashback %, Badges</p>

        <h4 className="text-white font-semibold text-sm mb-2">Categories Tab</h4>
        <DocTable
          headers={['Action', 'Details']}
          rows={[
            ['Create Category', 'Modal form'],
            ['Edit Category', 'Tap category'],
            ['Delete Category', 'Menu'],
            ['Toggle Active / Featured', 'Toggles'],
          ]}
        />
        <p className="text-slate-300 text-sm mb-4">Form: Name, Slug, Icon, Color, Max Cashback, Sort Order</p>

        <h4 className="text-white font-semibold text-sm mb-2">Offers Tab</h4>
        <DocTable
          headers={['Action', 'Details']}
          rows={[
            ['Create Offer', 'Modal form'],
            ['Edit Offer', 'Tap offer'],
            ['Delete Offer', 'Menu'],
            ['Toggle Active / Mall Exclusive', 'Toggles'],
          ]}
        />
        <p className="text-slate-300 text-sm">Form: Title, Subtitle, Image, Type, Value, Valid dates, Badge</p>
      </Expandable>

      <Expandable title="15. Extra Rewards" icon={Zap}>
        <h4 className="text-white font-semibold text-sm mb-2">Double Cashback Campaigns</h4>
        <DocTable
          headers={['Action', 'Details']}
          rows={[
            ['Create', 'Modal form'],
            ['Edit / Delete', 'Campaign menu'],
            ['Toggle Active', 'Toggle'],
          ]}
        />
        <p className="text-slate-300 text-sm mb-4">Form: Title, Subtitle, Description, Multiplier, Start/End dates, Eligible stores/categories, Terms, Min order, Max cashback, Priority</p>

        <h4 className="text-white font-semibold text-sm mb-2">Coin Drops</h4>
        <DocTable
          headers={['Action', 'Details']}
          rows={[
            ['Create', 'Modal form'],
            ['Edit / Delete', 'Menu'],
            ['Toggle Active', 'Toggle'],
          ]}
        />
        <p className="text-slate-300 text-sm">Form: Store selector, Multiplier, Normal cashback %, Category, Start/End dates, Min order, Max cashback, Priority</p>
      </Expandable>

      <Expandable title="16. Cash Store" icon={CreditCard}>
        <h4 className="text-white font-semibold text-sm mb-2">Voucher Brands Tab</h4>
        <DocTable
          headers={['Action', 'Details']}
          rows={[
            ['Create / Edit / Delete', 'Modal forms'],
            ['Toggle Active / Featured', 'Toggles'],
          ]}
        />
        <p className="text-slate-300 text-sm mb-4">Form: Name, Slug, Description, Category, Logo, Cashback rate, Denominations, Terms</p>

        <h4 className="text-white font-semibold text-sm mb-2">Coupons Tab</h4>
        <DocTable
          headers={['Action', 'Details']}
          rows={[
            ['Create / Edit / Delete', 'Modal forms'],
            ['Toggle Active / Auto-apply', 'Toggles'],
          ]}
        />
        <p className="text-slate-300 text-sm mb-4">Form: Title, Description, Code, Discount type/value, Min order, Max discount, Valid dates, Usage limit, Tags, Category, Image</p>

        <h4 className="text-white font-semibold text-sm mb-2">Double Cashback Campaigns Tab</h4>
        <p className="text-slate-300 text-sm mb-4">Same as Extra Rewards double cashback campaigns</p>

        <h4 className="text-white font-semibold text-sm mb-2">Coin Drops Tab</h4>
        <p className="text-slate-300 text-sm mb-4">Same as Extra Rewards coin drops</p>

        <h4 className="text-white font-semibold text-sm mb-2">Affiliate Analytics Tab</h4>
        <ul className="space-y-1 text-slate-300 text-sm">
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Brand selector dropdown</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Metrics: Total clicks, Conversions, Conversion rate, Click sources</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Time period selector</li>
        </ul>
      </Expandable>

      <Expandable title="17. Settings" icon={Settings}>
        <DocTable
          headers={['Group', 'Items']}
          rows={[
            ['Homepage Management', 'Deals Section, Experiences, Explore, Mall, Extra Rewards, Cash Store'],
            ['Offers & Zones', 'Offers Management'],
            ['Operations', 'Coin Rewards, Wallet, Users, Verifications, Loyalty'],
            ['System', 'Push Notifications toggle, Dark Mode toggle'],
            ['Management (Admin only)', 'Admin Users, System Config, Security (coming soon)'],
            ['Support', 'Help, Report Issues, Contact (coming soon)'],
          ]}
        />
      </Expandable>

      <Expandable title="Key Admin Workflows" icon={ArrowRight}>
        <div className="space-y-4">
          <div>
            <h4 className="text-white font-semibold text-sm mb-2">Merchant Approval Workflow</h4>
            <CodeBlock code={`Application Received → Auto-Checks (GSTIN verify, duplicate check)
  → Assigned to Operator (by city/team) → Document Review
  → Bank Penny-Drop Verification → Admin Approval (Level 80+)
  → Merchant Goes Live → Post-Onboarding Monitoring`} />
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-2">Refund Processing Workflow</h4>
            <CodeBlock code={`Customer Request → Support Ticket (Level 60) → Review Order/Payment
  → Approve Refund (Level 70) → Process via Payment Gateway
  → Coins Adjusted in Ledger → Customer Notified`} />
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-2">Emergency Controls</h4>
            <CodeBlock code={`Incident Detected → Super Admin (Level 100) → Emergency Panel
  → Actions: Freeze wallets | Pause transactions | Kill app feature
  → Toggle feature flag | Disable merchant | Block user segment
  → Incident logged with full audit trail`} />
          </div>
        </div>
      </Expandable>

      <Expandable title="Audit & Compliance" icon={Eye}>
        <InfoBox type="warning">
          <strong>Every admin action is logged.</strong> The <code className="text-[#c9a227]">admin_activity_logs</code> table records: admin ID, action, resource type/ID, old values, new values, IP address, user agent, timestamp. This is non-optional and cannot be disabled.
        </InfoBox>
        <ul className="space-y-2 text-slate-300 text-sm">
          <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" /> Merchant approval/rejection with reason</li>
          <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" /> User ban/suspend with evidence</li>
          <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" /> Refund approvals with amount trail</li>
          <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" /> Coin minting/burning with supply impact</li>
          <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" /> System config changes with before/after</li>
          <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" /> Feature flag toggles with scope</li>
        </ul>
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION 8: COIN & REWARDS
// ════════════════════════════════════════════════════════════════════
function CoinsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Coin & Rewards System</h2>
      <p className="text-slate-400 mb-6">The core economic engine. All coin logic lives in Rabtul Coin Ledger — no app owns its own wallet.</p>

      <Expandable title="5 Coin Types" icon={Coins} defaultOpen>
        <DocTable
          headers={['Coin Type', 'Scope', 'Earn', 'Spend', 'Expires']}
          rows={[
            ['ReZ Coins', 'Universal (all apps)', 'Purchases, referrals, gamification', 'Discounts at any merchant', 'No'],
            ['Branded Coins', 'Merchant-specific', 'Purchases at that merchant only', 'Redeem at that merchant only', 'Configurable'],
            ['Prive Coins', 'Premium members only', 'Higher earn rate on all purchases', 'Exclusive Prive redemptions', 'No'],
            ['Promo Coins', 'Campaign-specific', 'Marketing campaigns, events', 'Any merchant (usually)', 'Yes (TTL)'],
            ['Cash Balance', 'Real money', 'Top-up (UPI/Card/NetBanking)', 'Direct payment', 'No'],
          ]}
        />
      </Expandable>

      <Expandable title="How Coins Are Earned" icon={TrendingUp}>
        <div className="space-y-3 text-slate-300 text-sm">
          {[
            { method: 'Purchases', desc: 'Complete transaction → BizOne confirms sale → Rabtul Coin Ledger credits coins → Nuqta app updates balance', rate: '5-10% of transaction value' },
            { method: 'Referrals', desc: 'Referrer gets coins when referee completes first purchase', rate: 'Configurable (default: 100 referrer, 50 referee)' },
            { method: 'Daily Check-in', desc: 'Open app daily → earn streak bonus coins', rate: 'Increasing with streak length' },
            { method: 'Gamification', desc: 'Spin-and-win, scratch cards, tournaments, achievements', rate: 'Variable per game/campaign' },
            { method: 'Ad Engagement', desc: 'Adzy campaigns can reward coin bonuses for interaction', rate: 'Set by merchant campaign budget' },
            { method: 'Reviews', desc: 'Write product/merchant reviews to earn coins', rate: 'Fixed per verified review' },
            { method: 'Loyalty Tier Multiplier', desc: 'Higher tiers earn more coins per transaction', rate: 'Bronze 1x, Silver 1.2x, Gold 1.5x, Platinum 2x' },
          ].map(m => (
            <div key={m.method} className="flex gap-3 p-3 bg-slate-800/30 rounded-lg">
              <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-medium">{m.method}:</span> {m.desc}
                <span className="block text-[#c9a227] text-xs mt-1">{m.rate}</span>
              </div>
            </div>
          ))}
        </div>
      </Expandable>

      <Expandable title="How Coins Are Spent" icon={DollarSign}>
        <ul className="space-y-2 text-slate-300 text-sm">
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> <span>Redeem for discounts at checkout (configurable coin-to-AED rate via <code className="text-[#c9a227]">app_settings</code>)</span></li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> <span>Unlock exclusive offers (offers can require <code className="text-[#c9a227]">rez_coins_required</code> to access)</span></li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> <span>Some offers give coins back on redemption (<code className="text-[#c9a227]">rez_coins_earned</code>)</span></li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> <span>Prive membership payments (future)</span></li>
        </ul>
      </Expandable>

      <Expandable title="Loyalty Tiers" icon={Star}>
        <DocTable
          headers={['Tier', 'Min Spend', 'Min Orders', 'Coin Multiplier', 'Key Perks']}
          rows={[
            ['Bronze', '0', '0', '1.0x', 'Basic rewards, standard offers'],
            ['Silver', 'AED 500', '5', '1.2x', 'Better offers, early access to deals'],
            ['Gold', 'AED 2,000', '15', '1.5x', 'Exclusive offers, priority support, free delivery'],
            ['Platinum', 'AED 5,000', '30', '2.0x', 'VIP access, concierge, all Gold perks, exclusive events'],
          ]}
        />
        <InfoBox type="action">
          <strong>PM Note:</strong> Tier thresholds and multipliers are configurable via HQ Admin rule engine. Track: current tier, progress to next, streak days, achievements (JSONB) per user.
        </InfoBox>
      </Expandable>

      <Expandable title="Safety Controls" icon={Lock}>
        <DocTable
          headers={['Control', 'Default', 'Purpose']}
          rows={[
            ['Wallet PIN', 'Required for transactions', 'User-set 4-6 digit PIN for payment authorization'],
            ['Daily Spend Limit', '5,000 coins', 'Prevent excessive spending in single day'],
            ['Monthly Spend Limit', '50,000 coins', 'Prevent excessive spending in single month'],
            ['Wallet Freeze', 'Off', 'Admin can freeze wallet with reason (fraud, dispute)'],
            ['Redis Wallet Lock', '30s TTL', 'Prevent concurrent transactions on same wallet'],
            ['Coin Minting', 'Admin Level 100 only', 'Controlled supply — only Super Admin can mint new coins'],
            ['Coin Burning', 'Admin Level 100 only', 'Remove coins from circulation when needed'],
          ]}
        />
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION 9: WALLET & PAYMENTS
// ════════════════════════════════════════════════════════════════════
function WalletSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Wallet & Payments</h2>
      <p className="text-slate-400 mb-6">Payment processing, settlement engine, and BNPL (Qist) system.</p>

      <Expandable title="Payment Gateways" icon={CreditCard} defaultOpen>
        <DocTable
          headers={['Gateway', 'Methods Supported', 'Status']}
          rows={[
            ['Razorpay', 'UPI, Cards (credit/debit), Net Banking, Wallets', 'Primary'],
            ['Paytm', 'UPI, Paytm Wallet, Cards', 'Secondary'],
            ['PhonePe', 'UPI, PhonePe Wallet', 'Tertiary'],
          ]}
        />
        <p className="text-slate-400 text-sm mt-2">All payment processing goes through Rabtul Payment Service. The <code className="text-[#c9a227]">payments</code> table tracks: gateway, method, amount, status, gateway_response, failure_reason.</p>
      </Expandable>

      <Expandable title="Payment Flow" icon={ArrowRight}>
        <CodeBlock code={`User Initiates Payment
  → App calls POST /api/checkout
  → Rabtul validates cart, applies coins/coupons
  → Rabtul creates payment intent with gateway
  → User completes payment (UPI/Card/Wallet)
  → Gateway webhook → Rabtul confirms
  → Coin Ledger: deduct coins used, credit coins earned
  → Order created, merchant notified
  → Settlement queued for merchant payout`} />
      </Expandable>

      <Expandable title="Settlement Engine (Merchant Payouts)" icon={DollarSign}>
        <DocTable
          headers={['Config', 'Options', 'Default']}
          rows={[
            ['Commission Rate', '5% - 20% (per merchant)', '10%'],
            ['Settlement Frequency', 'Daily, Weekly, Monthly', 'Weekly'],
            ['Settlement Method', 'Bank Transfer (NEFT/IMPS/UPI)', 'NEFT'],
            ['Minimum Payout', 'Configurable per merchant', 'AED 100'],
          ]}
        />
        <CodeBlock title="Settlement Calculation" code={`Gross Transaction Amount:    AED 1,000
  - Platform Commission (10%): AED   100
  - Payment Gateway Fee (2%):  AED    20
  - BNPL Deduction (if any):   AED     0
  ─────────────────────────────────────
  Net Settlement to Merchant:  AED   880`} />
      </Expandable>

      <Expandable title="BNPL - Qist System (Phase 4)" icon={Clock}>
        <InfoBox type="info">
          <strong>Planned for Phase 4 — Supply, Finance & Merchant Lock-In.</strong> The infrastructure (settlement engine, bank accounts, transaction history) is being built in Phase 1 to enable this.
        </InfoBox>
        <DocTable
          headers={['Feature', 'Description']}
          rows={[
            ['Merchant Credit Lines', 'Credit based on BizOne transaction data (billing history, inventory levels, settlement history becomes the credit score)'],
            ['Inventory BNPL', 'Merchants buy inventory now via NextaBizz, pay later'],
            ['Auto-Deduction', 'Repayment automatically deducted from merchant settlement payouts'],
            ['Credit Scoring', 'Internal scoring based on: monthly GMV, transaction consistency, settlement history, inventory health, customer ratings'],
          ]}
        />
        <InfoBox type="action">
          <strong>Strategic Lock-in:</strong> Phase 4 output is &quot;Merchants CANNOT leave without losing money advantages.&quot; Credit based on platform data, better procurement pricing, and auto-deduction from settlements create deep financial entanglement.
        </InfoBox>
      </Expandable>

      <Expandable title="Wallet Features (20+ screens)" icon={Wallet}>
        <ul className="space-y-2 text-slate-300 text-sm">
          <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" /> View all balances: ReZ coins, branded coins, Prive coins, promo coins, cash — unified wallet screen</li>
          <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" /> Add money: UPI, Cards, Net Banking — processed via Rabtul Payment Service</li>
          <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" /> Transaction history: Complete ledger with type, amount, reference, balance-after</li>
          <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" /> Payment methods: Save and manage cards, UPI IDs, net banking accounts</li>
          <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" /> QR Pay: Scan merchant QR and pay directly from wallet</li>
          <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" /> Wallet PIN: Required for all transactions above configurable threshold</li>
        </ul>
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION 10: SCREEN FLOWS
// ════════════════════════════════════════════════════════════════════
function ScreenFlowsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Screen Flows</h2>
      <p className="text-slate-400 mb-6">1,103 total screens across the entire ecosystem. Breakdown by section and vertical.</p>

      <Expandable title="Total Screen Count by Section" icon={LayoutGrid} defaultOpen>
        <DocTable
          headers={['Section', 'Screens', 'Description']}
          rows={[
            ['BizOne (Merchant OS)', '222', 'POS, Inventory, Orders, CRM, Marketing, Financial, Staff, Multi-Store, Integrations'],
            ['Nuqta Customer App', '213', 'Shopping, Wallet, Loyalty, Gamification, Social, Profile, Orders'],
            ['Category Verticals', '182', 'Beauty, Fashion, Grocery, Healthcare, Fitness, Home, Tech, Events, etc.'],
            ['HQ Admin Panel', '178', 'Dashboard, Merchants, Users, Transactions, Campaigns, Config, Reports, Support'],
            ['Prive VIP', '141', 'Premium membership, exclusive deals, concierge, VIP access'],
            ['Discovery Layer', '~100', 'Search, browse, map, trending, AI recommendations'],
            ['Growth Stack', '~50', 'Referrals, ambassadors, campaigns, contests, gamification'],
            ['Wasil (Distribution)', '~17+', 'Vertical delivery apps (food, grocery, beauty, etc.)'],
            ['TOTAL', '1,103', 'All screens across the ecosystem'],
          ]}
        />
      </Expandable>

      <Expandable title="Category Verticals (182 screens)" icon={Globe}>
        <DocTable
          headers={['Vertical', 'Screens', 'Key Screens']}
          rows={[
            ['Beauty', '11', 'All, Clinics, Services, Products, Deals, Nearby, Concierge'],
            ['CashStore', '9', 'Stores, Coupons, Gift Cards, Track Cashback, Brand Detail'],
            ['College', '3', 'Home, Ambassador Dashboard, Student Verification'],
            ['Contests', '2', 'Contest Hub, Contest Detail'],
            ['Corporate', '7', 'Account, Orders, Invoices, Reports, Team, Verification'],
            ['Creator', '5', 'All Creators, Profile, Store, Collections, Picks'],
            ['Events', '12', 'Calendar, Concerts, Movies, Parks, Workshops, Gaming, Tickets'],
            ['Exclusive', '12', 'Deals, Products, Events, VIP, Birthday, Student, Women, Corporate'],
            ['Experience', '7', 'Detail, Booking, Gallery, Packages, Gift Card, Reviews, Wishlist'],
            ['Explore', '10', 'Category, Compare, Daily Check-in, Map, Trending, Spin & Win'],
            ['Fashion', '10', 'Brands, Deals, Occasions, Stores, Trending, Vibes'],
            ['Financial', '9', 'Bills, Category, Gold, OTT, Offers, Pay Bill, History'],
            ['FitCircle', '5', 'Home, Challenges, Nutrition, Profile, Workouts'],
            ['Fitness', '12', 'Category, Challenges, Gyms, Studios, Trainers, Store, Feed'],
            ['Grocery', '9', 'Category, Compare, Deals, Products, Stores, Fast Delivery'],
            ['Healthcare', '13', 'Category, Dental, Diagnostics, Doctors, Emergency, Pharmacy'],
            ['Home Services', '7', 'Category, Providers, Bookings, Available Today'],
            ['HomeHub', '4', 'Home, Room Planner, Services, Shop'],
            ['Lifestyle', '12', 'Profile, Events Hub, Fashion Feed, Style Quiz, Wardrobe'],
            ['Mall', '6', 'Brands, Cart, Categories, Collections'],
            ['Stores', '9', 'Children, Gifting, Luxury, Men, Women, Organic, Rental, Map'],
            ['StyleSync', '4', 'Closet, Home, Looks, Shop'],
            ['TechHunt', '4', 'Home, Compare, Deals, Wishlist'],
          ]}
        />
      </Expandable>

      <Expandable title="BizOne Merchant Screens (222)" icon={Store}>
        <p className="text-slate-300 text-sm mb-3">Full merchant screen list organized by module. Screen types: Standard, Modal, Tab View, Drawer.</p>
        <DocTable
          headers={['Module Group', 'Example Screens']}
          rows={[
            ['POS & Billing', 'MerchantSimplePOS, MerchantOfflinePOS, MerchantQROrdering, MerchantTokenDisplay, MerchantSoftPOS'],
            ['Inventory', 'MerchantInventoryAdvanced, MerchantExpiryDashboard, MerchantLowStockAlerts, MerchantStockReconciliation'],
            ['Orders', 'MerchantOrders, MerchantOrdersMultiChannel, MerchantReturns, MerchantUnifiedOrders'],
            ['CRM', 'MerchantCRMDashboard, MerchantCustomerSegments, MerchantReEngagement, MerchantReviewManagement'],
            ['Marketing', 'MerchantMarketingCampaigns, MerchantFlashDeals, MerchantLoyaltyBuilder, MerchantVouchers'],
            ['Financial', 'MerchantFinancials, MerchantProfitLoss, MerchantGSTReports, MerchantTaxCompliance, MerchantSettlementEngine'],
            ['Staff', 'MerchantStaff, MerchantUserRoles, MerchantShiftManagement, MerchantPayroll, MerchantStaffLeaderboard'],
            ['Multi-Store', 'MerchantMultiStoreDashboard, MerchantStoreTransfer, MerchantWarehouseManagement'],
            ['Supplier', 'MerchantSupplierManagement, MerchantPurchaseOrders, MerchantSupplierContracts, MerchantVendorPortal'],
          ]}
        />
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION 11: DEVELOPMENT ROADMAP
// ════════════════════════════════════════════════════════════════════
function RoadmapSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Development Roadmap</h2>
      <p className="text-slate-400 mb-6">6 phases from foundation to global scale.</p>

      <Expandable title="Phase Overview" icon={GitBranch} defaultOpen>
        <div className="space-y-4">
          {[
            { phase: '0', name: 'Foundation & Non-Negotiables', status: 'COMPLETE', color: 'bg-emerald-500/20 text-emerald-400', desc: 'Rabtul core (SSO, wallet ledger, rule engine, event bus, RBAC), RTMN Core SDK' },
            { phase: '1', name: 'Core Economy Launch', status: 'COMPLETE (Design)', color: 'bg-emerald-500/20 text-emerald-400', desc: 'ReZ + BizOne + Adzy + Rabtul = 740+ pages. Users can transact, merchants can bill, ads convert to sales' },
            { phase: '2', name: 'Discovery Clones', status: 'NEXT', color: 'bg-blue-500/20 text-blue-400', desc: 'AI-R (AI discovery), BuzzLoop (social commerce), CoinHunt (gamified discovery), LocalEdge (hyperlocal) — clone ReZ UI, same economy, different discovery UX' },
            { phase: '3', name: 'Transaction Expansion (Wasil)', status: 'FUTURE', color: 'bg-slate-500/20 text-slate-400', desc: 'Vertical apps: Dinezy (food), Grocify (grocery), Glowzy (beauty), MediEarn (healthcare), etc. — each a distribution surface' },
            { phase: '4', name: 'Supply, Finance & Merchant Lock-In', status: 'FUTURE', color: 'bg-slate-500/20 text-slate-400', desc: 'NextaBizz (procurement), RTMN Finance / Qist (BNPL/credit), auto-deduction settlements — financial entanglement' },
            { phase: '5', name: 'Acquisition Engine (Zero CAC)', status: 'FUTURE', color: 'bg-slate-500/20 text-slate-400', desc: 'Growth stack (Gigzy, BuzzLocal, JobLoop), ultra-light apps (Memezy, Quizzy, Spinzy), events — user acquisition at near-zero cost' },
            { phase: '6', name: 'Brands, Media & Global Scale', status: 'FUTURE', color: 'bg-slate-500/20 text-slate-400', desc: 'RTMN Media, RTMN Brands/Franchise, international expansion (GCC, Southeast Asia)' },
          ].map(p => (
            <div key={p.phase} className="flex gap-4 p-4 bg-slate-800/30 rounded-xl border border-slate-700/30">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#c9a227]/20 flex items-center justify-center text-[#c9a227] font-bold">{p.phase}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-white">{p.name}</h4>
                  <Badge text={p.status} color={p.color} />
                </div>
                <p className="text-slate-400 text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Expandable>

      <Expandable title="Phase 1 Deliverables (Current Focus)" icon={CheckCircle}>
        <DocTable
          headers={['Deliverable', 'Status', 'Details']}
          rows={[
            ['Rabtul API Gateway', 'Build', 'Unified entry point, rate limiting, auth routing'],
            ['Rabtul Auth Service', 'Build', 'JWT, RBAC, multi-app SSO, OTP, device fingerprinting'],
            ['Rabtul Coin Ledger', 'Build', 'Central coin wallet, transaction logging, balance sync'],
            ['Rabtul Payment Service', 'Build', 'Razorpay integration, payment processing, refunds'],
            ['Nuqta Customer App', 'Build', '213 screens, 4 shopping modes, wallet, loyalty'],
            ['BizOne Merchant OS', 'Build', '222 screens, POS, inventory, orders, CRM'],
            ['Adzy Marketing', 'Build', 'Campaign creation, ad inventory, merchant self-serve'],
            ['HQ Admin Panel', 'Build', '178 screens, merchant approval, user management, analytics'],
            ['AIRA AI Engine', 'Phase 2', 'Personalization, recommendations, fraud scoring'],
          ]}
        />
      </Expandable>

      <Expandable title="Team Structure (Phase 1)" icon={Users}>
        <DocTable
          headers={['Role', 'Responsibility']}
          rows={[
            ['Backend Lead', 'Rabtul architecture, API design, database schema, auth system'],
            ['Backend Engineer', 'API implementation, business logic, payment integration, testing'],
            ['DevOps', 'Infrastructure, CI/CD, monitoring, deployment, scaling'],
            ['Frontend Lead', 'React Native app development, UI/UX implementation, state management'],
          ]}
        />
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION 12: TECH STACK & SETUP
// ════════════════════════════════════════════════════════════════════
function TechStackSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Tech Stack & Setup</h2>
      <p className="text-slate-400 mb-6">Technologies, infrastructure, and development setup guide.</p>

      <Expandable title="Core Technology Stack" icon={Cpu} defaultOpen>
        <DocTable
          headers={['Layer', 'Technology', 'Version', 'Purpose']}
          rows={[
            ['Database (Primary)', 'PostgreSQL', '15', 'ACID transactions for financial data, 40+ tables'],
            ['Database (Analytics)', 'MongoDB', '7', 'Logs, analytics, flexible schema, 5 collections'],
            ['Cache & Real-time', 'Redis', '7', 'Sessions, rate limiting, leaderboards, geo queries, wallet locks'],
            ['Search', 'Elasticsearch', '8', 'Full-text search, autocomplete, geo-spatial discovery'],
            ['Backend Runtime', 'Node.js', '20 LTS', 'API server, event processing'],
            ['Backend Framework', 'Express.js / Fastify', 'Latest', 'HTTP routing, middleware, API endpoints'],
            ['Mobile App', 'React Native', '0.73+', 'Cross-platform iOS/Android customer + merchant apps'],
            ['Admin Panel', 'React / Next.js', '14+', 'Web-based HQ Admin dashboard'],
            ['API Protocol', 'REST + WebSocket', '-', 'REST for CRUD, WebSocket for real-time (orders, notifications)'],
          ]}
        />
      </Expandable>

      <Expandable title="Infrastructure" icon={Cloud}>
        <DocTable
          headers={['Component', 'Technology', 'Purpose']}
          rows={[
            ['API Gateway', 'Rabtul (custom)', 'Unified entry point, rate limiting, auth routing, monitoring'],
            ['Authentication', 'JWT + RBAC', 'Token-based auth, role-based access across all apps'],
            ['Event Bus', 'Redis Pub/Sub or Kafka', 'Inter-service communication, event-driven architecture'],
            ['Feature Flags', 'Custom (Redis-backed)', 'Instant feature toggling, A/B testing, gradual rollout'],
            ['CDN', 'CloudFront / Cloudflare', 'Static assets, image optimization, edge caching'],
            ['Object Storage', 'S3 / GCS', 'User uploads, merchant images, documents'],
            ['Monitoring', 'Prometheus + Grafana', 'Service health, API latency, error rates, business metrics'],
            ['Logging', 'ELK Stack', 'Centralized logging, search, alerting'],
            ['CI/CD', 'GitHub Actions', 'Automated testing, build, deployment'],
          ]}
        />
      </Expandable>

      <Expandable title="PostgreSQL Extensions" icon={HardDrive}>
        <DocTable
          headers={['Extension', 'Purpose']}
          rows={[
            ['PostGIS', 'Geospatial queries for merchant/user location, nearby search, delivery radius'],
            ['uuid-ossp', 'UUID generation for primary keys (collision-free distributed IDs)'],
            ['pg_trgm', 'Fuzzy text search and trigram matching for search'],
            ['btree_gist', 'GiST indexing for range queries (time-based, geo-based)'],
          ]}
        />
      </Expandable>

      <Expandable title="Connection Configuration" icon={Wifi}>
        <CodeBlock title="PostgreSQL Connection Pool" code={`{
  host: process.env.DB_HOST,
  port: 5432,
  database: 'rtmn_production',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  max: 20,                    // Max connections per service
  idleTimeoutMillis: 30000,   // Close idle connections after 30s
  connectionTimeoutMillis: 2000
}`} />
        <CodeBlock title="Redis Configuration" code={`{
  host: process.env.REDIS_HOST,
  port: 6379,
  password: process.env.REDIS_PASSWORD,
  db: 0,                      // Default DB for sessions
  maxRetriesPerRequest: 3,
  retryStrategy: (times) => Math.min(times * 50, 2000)
}`} />
        <CodeBlock title="Elasticsearch Configuration" code={`{
  node: process.env.ES_HOST,
  auth: { apiKey: process.env.ES_API_KEY },
  maxRetries: 3,
  requestTimeout: 30000
}`} />
      </Expandable>

      <Expandable title="Environment Variables Required" icon={Settings}>
        <DocTable
          headers={['Variable', 'Description', 'Example']}
          rows={[
            ['DB_HOST', 'PostgreSQL host', 'localhost / RDS endpoint'],
            ['DB_USER', 'Database username', 'rtmn_app'],
            ['DB_PASSWORD', 'Database password', '(secret)'],
            ['REDIS_HOST', 'Redis host', 'localhost / ElastiCache endpoint'],
            ['REDIS_PASSWORD', 'Redis password', '(secret)'],
            ['ES_HOST', 'Elasticsearch host', 'http://localhost:9200'],
            ['ES_API_KEY', 'Elasticsearch API key', '(secret)'],
            ['JWT_SECRET', 'JWT signing secret', '(secret, 256-bit)'],
            ['JWT_REFRESH_SECRET', 'Refresh token secret', '(secret, 256-bit)'],
            ['RAZORPAY_KEY_ID', 'Razorpay API key', 'rzp_live_xxx'],
            ['RAZORPAY_KEY_SECRET', 'Razorpay secret', '(secret)'],
            ['SMS_API_KEY', 'SMS provider API key', '(secret)'],
            ['S3_BUCKET', 'AWS S3 bucket name', 'rtmn-uploads'],
            ['CDN_URL', 'CDN base URL', 'https://cdn.nuqtaapp.com'],
          ]}
        />
      </Expandable>

      <Expandable title="Development Setup Guide" icon={Terminal}>
        <div className="space-y-4">
          <div>
            <h4 className="text-white font-semibold text-sm mb-2">1. Prerequisites</h4>
            <CodeBlock code={`Node.js 20 LTS
PostgreSQL 15
MongoDB 7
Redis 7
Elasticsearch 8 (optional for dev — can use in-memory search)
Docker & Docker Compose (recommended)`} />
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-2">2. Database Setup</h4>
            <CodeBlock code={`# Create database
createdb rtmn_development

# Enable extensions
psql rtmn_development -c "CREATE EXTENSION IF NOT EXISTS 'uuid-ossp';"
psql rtmn_development -c "CREATE EXTENSION IF NOT EXISTS 'postgis';"
psql rtmn_development -c "CREATE EXTENSION IF NOT EXISTS 'pg_trgm';"

# Run migrations
npm run migrate

# Seed test data
npm run seed`} />
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-2">3. Start Services</h4>
            <CodeBlock code={`# Start all services with Docker Compose
docker-compose up -d

# Or start individually
npm run dev:gateway    # Rabtul API Gateway (port 3000)
npm run dev:auth       # Auth Service (port 3001)
npm run dev:payment    # Payment Service (port 3002)
npm run dev:coin       # Coin Ledger (port 3003)
npm run dev:admin      # Admin Panel (port 3010)`} />
          </div>
        </div>
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION NEW-1: PRODUCT ECOSYSTEM (How All 16 Products Connect)
// ════════════════════════════════════════════════════════════════════
function EcosystemSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Product Ecosystem — How All 16 Products Connect</h2>
      <p className="text-slate-400 mb-6">Every product in RTMN serves a specific role in the closed-loop economy. Here is how they connect.</p>

      <InfoBox type="info">
        <strong>Key Principle:</strong> RTMN is NOT 16 separate businesses. It is 4 core systems (Nuqta, BizOne, Adzy, Rabtul) + distribution surfaces. Each &quot;product&quot; is a door into the same mall — they all share the same wallet, coin ledger, rule engine, and settlement system via Rabtul.
      </InfoBox>

      <Expandable title="Ecosystem Map: How Products Connect" icon={Network} defaultOpen>
        <CodeBlock code={`
┌─────────────────────────────────────────────────────────────────────┐
│                        RABTUL (Backbone)                            │
│   Auth │ Coin Ledger │ Payments │ AIRA AI │ Notifications │ Fraud  │
└──┬──────────┬──────────┬──────────┬──────────┬──────────┬──────────┘
   │          │          │          │          │          │
   ▼          ▼          ▼          ▼          ▼          ▼
┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐
│NUQTA │ │BIZONE│ │ ADZY │ │NUQTA │ │ QIST │ │HAWIL │
│Core  │ │Merch │ │  Ads │ │ PAY  │ │ BNPL │ │Remit │
│App   │ │  OS  │ │      │ │      │ │      │ │      │
└──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘
   │        │        │        │        │        │
   ├────────┼────────┼────────┼────────┼────────┤
   │     WASIL (Distribution Layer)              │
   │  ┌───────┬────────┬────────┬───────┐       │
   │  │SAFAR  │RAKAB   │EVENTORA│SAKIN  │       │
   │  │Travel │Rides   │Events  │Real   │       │
   │  │       │        │        │Estate │       │
   │  └───────┴────────┴────────┴───────┘       │
   │                                             │
   │  ┌───────┬────────┬────────┬───────┐       │
   │  │AJER   │INVNTORA│NEXTBIZ │FAKHIR │       │
   │  │Micro  │Supply  │B2B     │Luxury │       │
   │  │Jobs   │Chain   │Market  │       │       │
   │  └───────┴────────┴────────┴───────┘       │
   └─────────────────────────────────────────────┘`} />
      </Expandable>

      <Expandable title="Product-by-Product Breakdown" icon={Globe} defaultOpen>
        <div className="space-y-4">
          {[
            {
              name: 'Nuqta (Core App)',
              role: 'Customer Wallet + Loyalty Brain',
              connects: ['BizOne (transactions)', 'Rabtul (coins/auth)', 'Adzy (personalized offers)', 'NuqtaPay (payment processing)', 'All Wasil apps (discovery)'],
              dataFlow: 'User transactions → Rabtul Coin Ledger → coin credits → merchant settlement via BizOne',
              color: 'border-emerald-500/50',
            },
            {
              name: 'NuqtaPay',
              role: 'Payment Infrastructure & Gateway',
              connects: ['Nuqta (user payments)', 'BizOne (merchant settlements)', 'Qist (BNPL processing)', 'Hawil (remittance processing)', 'Rabtul (payment service)'],
              dataFlow: 'Payment initiation → gateway routing (Razorpay/Paytm) → confirmation → settlement queue → merchant payout',
              color: 'border-blue-500/50',
            },
            {
              name: 'BizOne (Merchant OS)',
              role: 'Complete Merchant Operating System',
              connects: ['Nuqta (customer transactions)', 'Adzy (merchant campaigns)', 'Inventora (supply chain)', 'NextaBizz (procurement)', 'Rabtul (settlement, coin credits)'],
              dataFlow: 'Merchant POS sale → order created → Rabtul processes payment → coins credited to user → settlement queued for merchant',
              color: 'border-blue-500/50',
            },
            {
              name: 'Adzy',
              role: 'Closed-Loop Marketing Exchange',
              connects: ['BizOne (merchant ad budgets)', 'Nuqta (user-facing ad placements)', 'Rabtul AIRA (audience targeting, predictions)', 'All Wasil apps (ad surfaces)'],
              dataFlow: 'Merchant creates campaign in BizOne → Adzy targets audience via AIRA → ads shown in Nuqta/Wasil → user clicks → transaction → merchant pays from ad budget',
              color: 'border-purple-500/50',
            },
            {
              name: 'Rabtul',
              role: 'Infrastructure Backbone',
              connects: ['ALL 15 other products — every app is a Rabtul client'],
              dataFlow: 'Every API call from any app → Rabtul Gateway → Auth → Service routing → Database → Response',
              color: 'border-amber-500/50',
            },
            {
              name: 'Wasil',
              role: 'Distribution Layer / Delivery Network',
              connects: ['Nuqta (order fulfillment)', 'BizOne (merchant delivery)', 'Safar/Rakab (transport)', 'Eventora (event logistics)'],
              dataFlow: 'Order placed in Nuqta → Wasil assigns delivery → real-time tracking → delivery confirmed → coins credited',
              color: 'border-orange-500/50',
            },
            {
              name: 'Safar',
              role: 'Travel & Tourism Vertical',
              connects: ['Nuqta (coin earning/spending on travel)', 'Rabtul (auth, payments)', 'Adzy (travel merchant promotions)', 'BizOne (travel merchant OS)'],
              dataFlow: 'User books travel in Safar → payment via NuqtaPay → coins earned in Nuqta → merchant gets settlement via BizOne',
              color: 'border-cyan-500/50',
            },
            {
              name: 'Rakab',
              role: 'Ride-Hailing & Transportation',
              connects: ['Nuqta (wallet payments)', 'Rabtul (real-time tracking, payments)', 'Wasil (delivery fleet sharing)', 'Adzy (driver/rider promotions)'],
              dataFlow: 'Ride request → driver matching → real-time tracking via Rabtul → payment from Nuqta wallet → coins earned → driver settlement',
              color: 'border-green-500/50',
            },
            {
              name: 'Eventora',
              role: 'Events & Experiences Platform',
              connects: ['Nuqta (ticket purchases, coin earning)', 'BizOne (event merchant POS)', 'Adzy (event promotions)', 'Rabtul (payments, auth)'],
              dataFlow: 'Event created by merchant in BizOne → promoted via Adzy → user buys ticket in Eventora → payment via NuqtaPay → coins earned',
              color: 'border-pink-500/50',
            },
            {
              name: 'Inventora',
              role: 'Supply Chain & Inventory Intelligence',
              connects: ['BizOne (merchant inventory data)', 'NextaBizz (procurement orders)', 'Rabtul (analytics, forecasting via AIRA)'],
              dataFlow: 'BizOne inventory levels → Inventora analyzes → triggers reorder suggestions → NextaBizz procurement → auto-payment from settlement',
              color: 'border-teal-500/50',
            },
            {
              name: 'NextaBizz',
              role: 'B2B Marketplace & Procurement',
              connects: ['BizOne (merchant restocking)', 'Inventora (demand signals)', 'Qist (BNPL for procurement)', 'Rabtul (payments, credit scoring)'],
              dataFlow: 'Merchant needs stock → NextaBizz shows suppliers → order placed → Qist BNPL if needed → auto-deduction from future settlements',
              color: 'border-indigo-500/50',
            },
            {
              name: 'Qist',
              role: 'Buy Now Pay Later (BNPL)',
              connects: ['NuqtaPay (payment processing)', 'BizOne (merchant credit lines)', 'NextaBizz (inventory BNPL)', 'Rabtul (credit scoring via AIRA)'],
              dataFlow: 'Merchant/user applies for credit → AIRA scores based on transaction history → credit approved → purchase now → auto-repayment from settlements/wallet',
              color: 'border-amber-500/50',
            },
            {
              name: 'Hawil',
              role: 'Digital Remittance & Money Transfer',
              connects: ['Nuqta (wallet-to-wallet transfers)', 'NuqtaPay (cross-border payments)', 'Rabtul (KYC, compliance, fraud detection)'],
              dataFlow: 'User initiates transfer → KYC verification → Rabtul processes → recipient notified → funds available in recipient wallet',
              color: 'border-yellow-500/50',
            },
            {
              name: 'Sakin',
              role: 'Real Estate & Property Services',
              connects: ['Nuqta (property-related coin earning)', 'BizOne (real estate agent OS)', 'Qist (property payment plans)', 'Rabtul (payments, auth)'],
              dataFlow: 'Property listed by agent in BizOne → user browses in Sakin → payment plan via Qist → NuqtaPay processes → coins earned on transactions',
              color: 'border-rose-500/50',
            },
            {
              name: 'Fakhir',
              role: 'Luxury & Premium Marketplace',
              connects: ['Nuqta Prive (VIP access)', 'BizOne (luxury merchant OS)', 'Adzy (premium ad placements)', 'Rabtul (enhanced KYC, fraud detection)'],
              dataFlow: 'Prive member accesses Fakhir → exclusive luxury deals → enhanced coin multipliers → premium merchant settlement terms',
              color: 'border-violet-500/50',
            },
            {
              name: 'Ajer',
              role: 'Micro-Jobs & Gig Economy',
              connects: ['Nuqta (worker payments via wallet)', 'BizOne (merchant job posting)', 'Rabtul (identity verification, payments)'],
              dataFlow: 'Merchant posts micro-job in BizOne → workers browse in Ajer → complete job → instant payment to Nuqta wallet → coins earned',
              color: 'border-sky-500/50',
            },
          ].map(p => (
            <div key={p.name} className={`border ${p.color} rounded-xl p-4 bg-slate-800/30`}>
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-bold text-white">{p.name}</h4>
                <Badge text={p.role} />
              </div>
              <div className="mb-2">
                <span className="text-xs font-semibold text-slate-500 uppercase">Connects To:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {p.connects.map((c, i) => (
                    <span key={i} className="text-xs bg-slate-700/50 text-slate-300 px-2 py-0.5 rounded-full">{c}</span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase">Data Flow:</span>
                <p className="text-slate-400 text-xs mt-1">{p.dataFlow}</p>
              </div>
            </div>
          ))}
        </div>
      </Expandable>

      <Expandable title="Cross-Product Rules (Non-Negotiable)" icon={Lock}>
        <div className="space-y-3">
          {[
            'Every product uses the SAME wallet (Rabtul Coin Ledger). No product has its own wallet.',
            'Every product uses the SAME auth (Rabtul Auth Service with SSO). One login = access to all products.',
            'Every product uses the SAME payment gateway (NuqtaPay via Rabtul). No product processes payments independently.',
            'Every product earns/spends the SAME coins. ReZ coins earned in Safar can be spent in Eventora.',
            'Every product\'s merchant data lives in BizOne. Travel agents, ride drivers, event organizers — all are BizOne merchants.',
            'Every product\'s ad/promotion budget flows through Adzy. No product runs its own ad system.',
            'Every product can be launched, killed, or replaced independently without affecting other products.',
          ].map((rule, i) => (
            <div key={i} className="flex gap-3 p-3 bg-slate-800/30 rounded-lg border border-slate-700/30">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#c9a227]/20 flex items-center justify-center text-[#c9a227] font-bold text-xs">{i + 1}</div>
              <p className="text-slate-300 text-sm">{rule}</p>
            </div>
          ))}
        </div>
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION NEW-2: DETAILED ADMIN ROLES & RULES
// ════════════════════════════════════════════════════════════════════
function AdminDetailedSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Admin Roles & Rules — Detailed Permissions</h2>
      <p className="text-slate-400 mb-6">Every admin action, what each role can and cannot do, and the complete rule engine.</p>

      <Expandable title="HQ Super Admin (Level 100)" icon={Shield} defaultOpen>
        <InfoBox type="warning">
          <strong>Highest authority.</strong> Only 1-2 people should have this role. Every action is logged and auditable.
        </InfoBox>
        <DocTable
          headers={['Module', 'Permissions', 'Critical Actions']}
          rows={[
            ['System Configuration', 'Full Read/Write', 'Zone management, rule engine config, feature flags, emergency controls'],
            ['Coin Supply', 'Mint / Burn', 'POST /admin/rabtul/coins/mint — create new coins. POST /admin/rabtul/coins/burn — remove coins from circulation'],
            ['Merchant Management', 'Full CRUD + Override', 'Approve/reject merchants, override commission rates, force-suspend, permanent ban'],
            ['User Management', 'Full CRUD + Override', 'Ban users, freeze wallets, override KYC, manual coin credit/debit'],
            ['Financial', 'Full Access', 'View all transactions, settlements, refunds. Override settlement terms. Manual payouts'],
            ['Admin Users', 'Create / Modify / Delete', 'Create new admin accounts, assign roles/levels, deactivate admins, reassign cities/teams'],
            ['Emergency Controls', 'Full Access', 'Freeze all wallets, pause all transactions, kill features, emergency maintenance mode'],
            ['Audit Logs', 'Full Read', 'View ALL admin activity logs including other Super Admins'],
            ['Rule Engine', 'Full Config', 'Set coin earn/spend rates, commission percentages, caps, expiry rules, tier thresholds'],
            ['Feature Flags', 'Full Toggle', 'Enable/disable any feature for any user segment, region, or globally'],
          ]}
        />
      </Expandable>

      <Expandable title="HQ Admin (Level 80)" icon={Shield}>
        <p className="text-slate-300 text-sm mb-3">Operations & management layer. Can manage merchants and users but cannot change system rules.</p>
        <DocTable
          headers={['Module', 'Permissions', 'Restrictions']}
          rows={[
            ['Merchant Management', 'Approve/Reject/Suspend', 'Cannot override commission rates. Cannot permanent ban (escalate to Level 100)'],
            ['User Management', 'View/Suspend/Warn', 'Cannot ban permanently. Cannot freeze wallets. Cannot manual coin credit'],
            ['Transactions', 'View All + Process Refunds', 'Cannot modify settlement terms. Cannot do manual payouts'],
            ['Campaigns', 'Create/Edit/Schedule', 'Cannot modify budget caps set by Level 100'],
            ['Reports', 'Full Read + Export', 'Can export CSV/PDF. Cannot modify report templates'],
            ['Analytics', 'Full Dashboard Access', 'Business intelligence, merchant performance, user metrics'],
            ['Support Escalation', 'Resolve Level 2 tickets', 'Can escalate to Level 100 for unresolved issues'],
            ['Settlements', 'View + Initiate', 'Cannot override amounts. Cannot change frequency'],
            ['Zone Admin', 'Manage assigned city/team', 'Only sees data for assigned geography'],
          ]}
        />
        <InfoBox type="info">
          <strong>Cannot Do:</strong> Mint/burn coins, change rule engine, create admin users, access emergency controls, modify feature flags, override financial terms.
        </InfoBox>
      </Expandable>

      <Expandable title="HQ Operator (Level 70)" icon={Settings}>
        <p className="text-slate-300 text-sm mb-3">Day-to-day operations. Handles routine tasks and escalations.</p>
        <DocTable
          headers={['Module', 'Permissions', 'Restrictions']}
          rows={[
            ['Merchant Monitoring', 'View + Flag Issues', 'Cannot approve/reject. Can flag for Level 80 review'],
            ['Order Management', 'View + Resolve Disputes', 'Can mark orders as resolved. Cannot process refunds over threshold'],
            ['Content Moderation', 'Review + Action', 'Remove inappropriate content, approve/reject user reviews'],
            ['Support Tickets', 'Handle Level 1 + Escalate', 'Resolve common issues. Escalate complex ones to Level 80'],
            ['Merchant Compliance', 'Monitor + Report', 'Check document validity, flag non-compliance'],
            ['User Lookup', 'View Profile + Orders', 'Cannot modify user data. Read-only with limited fields'],
            ['Transactions', 'View Assigned Region', 'Only sees transactions in assigned city/zone'],
            ['Notifications', 'Send Operational', 'Can send delivery/order updates. Cannot send marketing campaigns'],
          ]}
        />
        <InfoBox type="info">
          <strong>Cannot Do:</strong> Approve merchants, process refunds, access financial reports, manage campaigns, create users, access analytics dashboard.
        </InfoBox>
      </Expandable>

      <Expandable title="HQ Support (Level 60)" icon={Users}>
        <p className="text-slate-300 text-sm mb-3">Customer support team. Minimal permissions, focused on helping users.</p>
        <DocTable
          headers={['Module', 'Permissions', 'Restrictions']}
          rows={[
            ['Customer Lookup', 'Search by phone/email/ID', 'Read-only. Can see order history, wallet balance, tier status'],
            ['Support Tickets', 'Create + Respond', 'Handle Level 0 tickets (FAQ, how-to). Escalate everything else'],
            ['Order Status', 'View Only', 'Can check order status and delivery tracking. Cannot modify'],
            ['Refunds', 'Request Only', 'Can submit refund request for Level 70+ approval. Cannot process'],
            ['Knowledge Base', 'Read + Suggest Edits', 'Access support playbooks. Can suggest updates to KB articles'],
            ['Chat Support', 'Active Conversations', 'Handle live chat with users. Escalate to Level 70 if needed'],
          ]}
        />
        <InfoBox type="info">
          <strong>Cannot Do:</strong> View financial data, access merchant management, modify any user data, process transactions, access analytics, manage campaigns, view audit logs.
        </InfoBox>
      </Expandable>

      <Expandable title="Zone Admin (Geographic)" icon={MapPin}>
        <p className="text-slate-300 text-sm mb-3">A modifier role that restricts any admin level to a specific geographic zone.</p>
        <DocTable
          headers={['Zone Type', 'Example', 'Data Scope']}
          rows={[
            ['City', 'Dubai, Abu Dhabi, Sharjah', 'Only merchants/users/orders in that city'],
            ['Region', 'Northern Emirates, GCC-East', 'Multiple cities in a region'],
            ['Metro', 'Dubai Metro Area', 'Specific metro zones within a city'],
            ['Country', 'UAE, Saudi Arabia, Bahrain', 'Country-level access for expansion'],
          ]}
        />
        <InfoBox type="action">
          <strong>PM Note:</strong> Zone assignments stored in <code className="text-[#c9a227]">admin_users.assigned_city</code> and <code className="text-[#c9a227]">admin_users.assigned_team</code>. API Gateway filters all queries by zone automatically — admins never see data outside their zone.
        </InfoBox>
      </Expandable>

      <Expandable title="Rule Engine — Configurable Parameters" icon={Settings}>
        <p className="text-slate-300 text-sm mb-3">Super Admin (Level 100) controls these rules that affect the entire platform:</p>
        <DocTable
          headers={['Rule Category', 'Parameters', 'Default']}
          rows={[
            ['Coin Earn Rate', 'Base percentage per transaction', '5%'],
            ['Coin-to-AED Rate', 'How many coins = 1 AED', '10 coins = 1 AED'],
            ['Commission Rate', 'Platform commission per merchant', '10%'],
            ['Commission Cap', 'Maximum commission per transaction', 'AED 200'],
            ['Daily Coin Spend Limit', 'Max coins a user can spend/day', '5,000'],
            ['Monthly Coin Spend Limit', 'Max coins a user can spend/month', '50,000'],
            ['Promo Coin TTL', 'Expiry for promotional coins', '30 days'],
            ['Referral Reward (Referrer)', 'Coins given to referrer', '100'],
            ['Referral Reward (Referee)', 'Coins given to new user', '50'],
            ['Tier Thresholds', 'Spend/order requirements per tier', 'Bronze: 0, Silver: 500, Gold: 2000, Platinum: 5000'],
            ['Tier Multipliers', 'Coin earn multiplier per tier', '1.0x, 1.2x, 1.5x, 2.0x'],
            ['Settlement Delay', 'Days before merchant payout', 'T+1 (1 business day)'],
            ['Minimum Payout', 'Minimum amount for settlement', 'AED 100'],
            ['Fraud Score Threshold', 'Risk score to auto-flag', '0.7 (70%)'],
            ['OTP Expiry', 'Seconds before OTP expires', '300 (5 min)'],
            ['Session Duration', 'JWT token validity', '24 hours'],
            ['Rate Limit (API)', 'Requests per minute per IP', '100 rpm'],
          ]}
        />
      </Expandable>

      <Expandable title="Admin Audit Trail (Every Action Logged)" icon={Eye}>
        <CodeBlock title="Example Audit Log Entry" code={`{
  "admin_id": "admin_001",
  "admin_role": "hq_admin",
  "admin_level": 80,
  "action": "merchant_approve",
  "resource_type": "merchant",
  "resource_id": "merch_abc123",
  "old_values": { "status": "pending", "onboarding_status": "documents_submitted" },
  "new_values": { "status": "active", "onboarding_status": "verified" },
  "ip_address": "203.0.113.45",
  "user_agent": "Mozilla/5.0 (HQ Admin Panel)",
  "timestamp": "2026-03-15T14:30:00Z",
  "zone": "dubai",
  "notes": "All documents verified. Penny-drop successful."
}`} />
        <InfoBox type="warning">
          <strong>Non-Optional:</strong> Audit logging cannot be disabled. Every action from Level 60 to Level 100 is recorded. Logs retained for 2 years minimum for compliance.
        </InfoBox>
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION NEW-3: DETAILED MERCHANT OS FEATURES
// ════════════════════════════════════════════════════════════════════
function MerchantDetailedSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Merchant OS Features — Complete Feature List</h2>
      <p className="text-slate-400 mb-6">Every feature of the BizOne Merchant OS across all 222 screens, organized by module. Navigation: Bottom tabs (Dashboard, Products, Orders, Visits, Cashback, Deals, Analytics, Team, Audit, Wallet, Coins, More).</p>

      <InfoBox type="info">
        <strong>Roles:</strong> Owner, Manager, Staff (permission-based access). See Merchant Hierarchy &amp; Roles in Merchant OS (BizOne) section for detailed permissions.
      </InfoBox>

      <Expandable title="1. Dashboard (Home)" icon={BarChart3} defaultOpen>
        <DocTable
          headers={['Feature', 'Details']}
          rows={[
            ['Live Status', 'LIVE/OFFLINE real-time connection indicator'],
            ['Today\'s Highlights', 'Revenue, Orders, Customers, Pending Orders (with growth trends)'],
            ['Monthly Metrics', 'Revenue vs last month, Orders vs last month, Avg Order Value, Customer Growth'],
            ['Quick Stats Bar', 'Low Stock items, Pending orders, Total products'],
            ['Quick Actions', 'Add Product, View Orders, Stores, Cashback, Analytics, Reports, Store Visits, Events, Export'],
            ['Recent Activity', 'Last 5 orders with status'],
          ]}
        />
      </Expandable>

      <Expandable title="2. Products" icon={Package}>
        <h4 className="text-white font-semibold text-sm mb-2">Viewing</h4>
        <ul className="space-y-1 text-slate-300 text-sm mb-4">
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Grid / List view toggle</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Search bar with real-time filtering</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Filters: All, Active, Inactive, Low Stock, Out of Stock</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Store filter (multi-store support), 50 items per page with infinite scroll</li>
        </ul>
        <h4 className="text-white font-semibold text-sm mb-2">Actions</h4>
        <DocTable
          headers={['Action', 'Details']}
          rows={[
            ['Add Product', 'Full form — basic info, pricing, inventory, dimensions, SEO, cashback, media'],
            ['Edit Product', 'Same form pre-populated'],
            ['Delete Product', 'Confirmation dialog'],
            ['View Details', 'Full product page'],
            ['Manage Images', 'Upload, order, delete images'],
            ['Manage Variants', 'Add/Edit/Delete variants with pricing & stock'],
            ['Bulk Import', 'CSV upload with column mapping'],
            ['Bulk Export', 'CSV/Excel download with filters'],
            ['Bulk Actions', 'Multi-select: status change, price update, delete, categorize, tag'],
          ]}
        />
        <h4 className="text-white font-semibold text-sm mb-2 mt-4">Product Form Fields</h4>
        <ul className="space-y-1 text-slate-300 text-sm">
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Name, Description, Short Description, SKU, Barcode</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Category &amp; Subcategory, Brand</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Selling Price, Cost Price, Compare-at Price, Currency</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Stock Quantity, Low Stock Threshold, Track Inventory, Backorders</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Weight, Dimensions (L/W/H)</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Meta Title, Meta Description, Keywords, Tags</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Status (active/inactive/draft/archived), Visibility (public/hidden/featured)</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Cashback %, Max Cashback, Cashback Active toggle</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Images, Videos</li>
        </ul>
      </Expandable>

      <Expandable title="3. Orders" icon={ShoppingCart}>
        <h4 className="text-white font-semibold text-sm mb-2">Viewing</h4>
        <ul className="space-y-1 text-slate-300 text-sm mb-4">
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Store filter (All / specific store)</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Status tabs: All, Pending, Confirmed, Preparing, Ready, Out for Delivery, Delivered, Cancelled, Refunded</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Sort: By Date, By Priority (urgent/high/normal), By Amount</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> <strong className="text-white">Real-time order updates via WebSocket</strong></li>
        </ul>
        <h4 className="text-white font-semibold text-sm mb-2">Order Card Shows</h4>
        <p className="text-slate-300 text-sm mb-4">Order number, Urgent badge, Total, Status badge, Time elapsed, Store info, Customer info (name, phone, email), Delivery method, Items with images/quantity/price/discount, Payment method &amp; transaction ID, Delivery address &amp; fee</p>
        <DocTable
          headers={['Action', 'When Available']}
          rows={[
            ['Accept', 'Pending/Placed orders'],
            ['Decline', 'Pending/Placed orders'],
            ['Start Preparing', 'Confirmed orders'],
            ['Mark Ready', 'Preparing orders'],
            ['Update Status', 'All — modal with valid transitions'],
            ['View Full Details', 'Order detail page'],
            ['Print Invoice', 'Order detail page'],
          ]}
        />
        <h4 className="text-white font-semibold text-sm mb-2 mt-4">Order Analytics Sub-page</h4>
        <p className="text-slate-300 text-sm">Volume trends, Revenue by period, Avg order value, Status distribution, Top customers, Top products, Payment method breakdown, Delivery method analytics</p>
      </Expandable>

      <Expandable title="4. Store Visits" icon={MapPin}>
        <h4 className="text-white font-semibold text-sm mb-2">Stats</h4>
        <p className="text-slate-300 text-sm mb-3">Today, Upcoming, Checked In, Completed</p>
        <h4 className="text-white font-semibold text-sm mb-2">Filter Tabs</h4>
        <p className="text-slate-300 text-sm mb-3">All, Pending, Checked In, Completed, Cancelled</p>
        <h4 className="text-white font-semibold text-sm mb-2">Visit Card Shows</h4>
        <ul className="space-y-1 text-slate-300 text-sm mb-4">
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Customer name &amp; phone (clickable to call)</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Visit type: Scheduled / Walk-in</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Payment badge (&quot;Pay at Store&quot;)</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Date/time &amp; queue number</li>
        </ul>
        <DocTable
          headers={['Action', 'When Available']}
          rows={[
            ['Check In', 'Pending visits'],
            ['Complete', 'Checked-in visits'],
            ['Cancel', 'Pending or Checked-in visits'],
            ['Call Customer', 'All — phone number link'],
          ]}
        />
      </Expandable>

      <Expandable title="5. Cashback" icon={DollarSign}>
        <h4 className="text-white font-semibold text-sm mb-2">Metrics</h4>
        <p className="text-slate-300 text-sm mb-3">Total paid, Pending, Request count</p>
        <h4 className="text-white font-semibold text-sm mb-2">Filter</h4>
        <p className="text-slate-300 text-sm mb-3">All, Pending, Approved, Rejected + Social Media posts tab</p>
        <DocTable
          headers={['Action', 'Details']}
          rows={[
            ['Approve', 'With amount'],
            ['Reject', 'With rejection reason'],
            ['Bulk Approve / Reject', 'Multi-select'],
            ['Generate Sample Data', 'Testing button'],
          ]}
        />
      </Expandable>

      <Expandable title="6. Deals & Redemptions" icon={Star}>
        <DocTable
          headers={['Mode', 'Features']}
          rows={[
            ['Scanner', 'Code input, Verify Code, Result modal, Mark as Used'],
            ['List', 'Filter: All/Active/Used/Expired, Redemption records'],
            ['Stats', 'Daily redemptions, Total count, Active deals, Trends'],
          ]}
        />
      </Expandable>

      <Expandable title="7. Analytics" icon={BarChart3}>
        <h4 className="text-white font-semibold text-sm mb-2">Features</h4>
        <ul className="space-y-1 text-slate-300 text-sm mb-4">
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Date range selection: 7d, 30d, 90d</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Permission-based access</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> 2-minute cache for performance</li>
        </ul>
        <h4 className="text-white font-semibold text-sm mb-2">Analytics Cards</h4>
        <DocTable
          headers={['Card', 'Content']}
          rows={[
            ['Daily Performance', 'Line/bar chart'],
            ['Peak Hours', 'Hour-by-hour analysis'],
            ['Top Offers', 'Ranking'],
            ['Customer Segments', 'Breakdown'],
            ['Popular Items', 'Ordered list'],
            ['Revenue Trends', 'Trend lines'],
          ]}
        />
        <h4 className="text-white font-semibold text-sm mb-2 mt-4">Sub-pages</h4>
        <DocTable
          headers={['Sub-page', 'Details']}
          rows={[
            ['Sales Forecast', 'Projections, trends, seasonal adjustments'],
            ['Customer Analytics', 'Acquisition, retention, LTV, segmentation'],
            ['Product Analytics', 'Best/worst sellers, category performance'],
            ['Inventory Analytics', 'Stock levels, dead stock, turnover, reorder suggestions'],
            ['Trends', 'Market, category, seasonal, pricing'],
          ]}
        />
      </Expandable>

      <Expandable title="8. Team Management" icon={Users}>
        <h4 className="text-white font-semibold text-sm mb-2">Viewing</h4>
        <ul className="space-y-1 text-slate-300 text-sm mb-4">
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Tabs: Overview, Members, Actions</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Search members</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Filter by Role (Owner/Manager/Staff) and Status (Active/Pending/Deactivated)</li>
        </ul>
        <DocTable
          headers={['Action', 'Permission Required']}
          rows={[
            ['Invite Members', 'team:invite'],
            ['Change Roles', 'role:edit'],
            ['Remove Members', 'team:remove'],
            ['Change Status', 'team:status'],
          ]}
        />
        <h4 className="text-white font-semibold text-sm mb-2 mt-4">Sub-pages</h4>
        <DocTable
          headers={['Sub-page', 'Features']}
          rows={[
            ['Invite Members', 'Email input, role assignment, permissions'],
            ['Manage Roles', 'Define roles, map permissions, create custom roles'],
            ['Manage Permissions', 'Permission matrix, granular control'],
            ['Member Detail', 'Profile, role, permissions, last active'],
          ]}
        />
      </Expandable>

      <Expandable title="9. Audit Logs" icon={FileText}>
        <h4 className="text-white font-semibold text-sm mb-2">Viewing</h4>
        <ul className="space-y-1 text-slate-300 text-sm mb-4">
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Search by user/action/resource</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Filter by date range, action type, user, resource type</li>
        </ul>
        <DocTable
          headers={['Sub-page', 'Features']}
          rows={[
            ['Log Detail', 'Full entry — user, action, resource, before/after, timestamp, IP'],
            ['Timeline', 'Chronological view with clustering'],
            ['Statistics', 'Most active users, most modified resources, frequency charts'],
            ['Compliance', 'Policy adherence, violations, remediation'],
            ['Archives', 'Historical logs, restore, retention policies'],
            ['Filters', 'Saved custom filter presets'],
          ]}
        />
      </Expandable>

      <Expandable title="10. Wallet & Payouts" icon={Wallet}>
        <DocTable
          headers={['Tab', 'Content']}
          rows={[
            ['Overview', 'Total/Available/Pending/Cashback balance, Request Withdrawal, Update Bank'],
            ['Transactions', 'Filter: All/Credit/Withdrawal/Refund — ID, type, amount, status, date'],
            ['Bank Details', 'Account Number, IFSC, Holder Name, Bank, Branch, UPI ID'],
          ]}
        />
        <h4 className="text-white font-semibold text-sm mb-2 mt-4">Withdrawal Features</h4>
        <ul className="space-y-1 text-slate-300 text-sm">
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Withdrawal request modal</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Amount validation &amp; minimum enforcement</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Availability check</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Request confirmation</li>
        </ul>
      </Expandable>

      <Expandable title="11. Coins" icon={Coins}>
        <DocTable
          headers={['Tab', 'Features']}
          rows={[
            ['Award', 'Customer search (live, debounced), Recent customers, Award form (amount + reason)'],
            ['History', 'Award list — customer, amount, reason, date. 50 per page'],
            ['Stats', 'Total awarded (lifetime), This month, Active (redeemable), Per customer avg'],
          ]}
        />
      </Expandable>

      <Expandable title="12. Stores (11 Sub-pages)" icon={Store}>
        <h4 className="text-white font-semibold text-sm mb-2">Store List</h4>
        <p className="text-slate-300 text-sm mb-3">Grid / List view. Store cards: image, name, type, status, location. Actions: Edit, Deactivate, Delete, Activate</p>
        <h4 className="text-white font-semibold text-sm mb-2">Per-Store Sub-pages</h4>
        <DocTable
          headers={['Sub-page', 'Features']}
          rows={[
            ['Details', 'Name, description, category, location, contact, hours — edit all'],
            ['Deals', 'List, create, edit, manage deals/promotions'],
            ['Discounts', 'Create/edit discounts (%, fixed, code-based)'],
            ['Vouchers', 'Create, track redemptions, manage status'],
            ['Outlets', 'Multi-outlet management — add, edit, hours, location'],
            ['Gallery', 'Upload, organize, delete images'],
            ['Reviews', 'View ratings, manage, respond to reviews'],
            ['Promotional Videos', 'Upload, manage, publish, delete, view analytics'],
            ['UGC', 'User-generated content approval & moderation'],
            ['QR Code', 'Generate, display, download, print'],
            ['Payment Settings', 'Razorpay, Wallet, COD, UPI configuration'],
          ]}
        />
      </Expandable>

      <Expandable title="13. Events" icon={Clock}>
        <h4 className="text-white font-semibold text-sm mb-2">Event List</h4>
        <p className="text-slate-300 text-sm mb-3">Status filter: All, Draft, Published, Cancelled, Completed — Grid / List view</p>
        <DocTable
          headers={['Action', 'Details']}
          rows={[
            ['Create Event', 'Title, description, date/time, location, type, capacity, tickets, image'],
            ['Edit Event', 'Update all fields'],
            ['Publish / Cancel', 'Status management'],
            ['View Bookings', 'Per event — attendees, booking status, refunds, export'],
          ]}
        />
      </Expandable>

      <Expandable title="14. Social Impact" icon={Heart}>
        <DocTable
          headers={['Action', 'Details']}
          rows={[
            ['Create Initiative', 'Title, description, goal, duration, image'],
            ['Edit Initiative', 'Update details and goals'],
            ['View Participants', 'Contribution tracking, export'],
            ['Delete Initiative', 'With confirmation'],
          ]}
        />
      </Expandable>

      <Expandable title="15. Sponsors" icon={Building2}>
        <DocTable
          headers={['Action', 'Details']}
          rows={[
            ['Create Sponsor', 'Name, contact, partnership terms, logo, agreement'],
            ['Edit Sponsor', 'Update info, terms, documents'],
            ['View Contributions', 'Contribution history'],
            ['Delete Sponsor', 'With confirmation'],
          ]}
        />
      </Expandable>

      <Expandable title="16. Notifications" icon={Bell}>
        <h4 className="text-white font-semibold text-sm mb-2">Features</h4>
        <ul className="space-y-1 text-slate-300 text-sm mb-4">
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Inbox with unread count</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Filter by type: Orders, Products, System</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Mark as read / Delete</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Notification detail view</li>
        </ul>
        <h4 className="text-white font-semibold text-sm mb-2">Preferences</h4>
        <ul className="space-y-1 text-slate-300 text-sm">
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Enable/disable notification types</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Email / Push / In-app toggles</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Quiet hours setting</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Category-level controls</li>
        </ul>
      </Expandable>

      <Expandable title="17. Documents" icon={FileText}>
        <DocTable
          headers={['Document Type', 'Features']}
          rows={[
            ['Invoices', 'Generate PDF, Preview, Customize template, Download/Print, Email'],
            ['Packing Slips', 'Generate, Preview, Customize, Download/Print'],
            ['Shipping Labels', 'Generate, Preview, Print, Format selection'],
          ]}
        />
      </Expandable>

      <Expandable title="18. Categories" icon={LayoutGrid}>
        <DocTable
          headers={['Action', 'Details']}
          rows={[
            ['View Categories', 'Hierarchy with product counts'],
            ['Create Category', 'Name, parent, description'],
            ['Edit Category', 'Update details'],
            ['Delete Category', 'With confirmation'],
            ['Organize', 'Drag-and-drop reordering & nesting'],
          ]}
        />
      </Expandable>

      <Expandable title="19. Table Bookings" icon={Clock}>
        <ul className="space-y-1 text-slate-300 text-sm">
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> View all table bookings across stores</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Booking date/time, Party size, Customer info</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Booking status management</li>
          <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227] flex-shrink-0 mt-0.5" /> Cancel booking, Add notes, Confirm booking</li>
        </ul>
      </Expandable>

      <Expandable title="20. Onboarding" icon={ArrowRight}>
        <DocTable
          headers={['Step', 'Content']}
          rows={[
            ['Welcome', 'Overview, Start'],
            ['Step 1', 'Basic info, Business type, Industry'],
            ['Step 2', 'Business details, Registration, Address'],
            ['Step 3', 'Tax info, GST, Tax ID'],
            ['Step 4', 'Bank account, Payment methods, Withdrawal preferences'],
            ['Step 5', 'Store setup, Initial config'],
            ['Store Details', 'Name, category, location, hours'],
            ['Business Info', 'Name, type, industry, description'],
            ['Bank Details', 'Account, IFSC, holder, type'],
            ['Documents', 'Upload KYC, Registration, Tax docs, Address proof'],
            ['Review & Submit', 'Verify all info, Submit for approval'],
            ['Pending Approval', 'Status message, Timeline, Support contact'],
          ]}
        />
      </Expandable>

      <Expandable title="Cross-Functional Features" icon={Zap}>
        <DocTable
          headers={['Feature', 'Details']}
          rows={[
            ['Real-Time Updates', 'WebSocket for orders, dashboard metrics, live status'],
            ['Permission System', 'Role-based (Owner/Manager/Staff), Feature-level, Granular control'],
            ['Bulk Operations', 'Product import/export (CSV), Bulk status/price/delete/categorize'],
            ['Media Management', 'Image upload/crop/resize, Video upload, Gallery management'],
            ['Multi-Store', 'Store selector across products, orders, visits, analytics'],
            ['Search', 'Real-time with debouncing across all list pages'],
            ['Pagination', '20-50 items per page, infinite scroll'],
            ['Pull to Refresh', 'Available on all list pages'],
          ]}
        />
      </Expandable>

      <h3 className="text-xl font-bold text-white mt-8 mb-4 pt-6 border-t border-slate-700/50">Detailed Screen Reference (by Domain)</h3>

      <Expandable title="POS System (28 screens)" icon={Monitor}>
        <DocTable
          headers={['Feature', 'Screen', 'Description']}
          rows={[
            ['Simple POS', 'MerchantSimplePOS', 'Quick billing — add items, calculate total, accept payment. For small transactions'],
            ['Full POS', 'MerchantPOS', 'Complete POS with categories, variants, discounts, split payment, hold orders'],
            ['Offline POS', 'MerchantOfflinePOS', 'Works without internet. Syncs when back online. Critical for poor connectivity areas'],
            ['Offline Sync', 'MerchantOfflinePOSSync', 'Background sync engine — queues transactions offline, uploads when connected'],
            ['QR Ordering', 'MerchantQROrdering', 'Customers scan QR at table/counter, order from phone, merchant receives on POS'],
            ['Soft POS', 'MerchantSoftPOS', 'Phone-as-terminal — accept NFC/card payments directly on merchant phone'],
            ['Token Display', 'MerchantTokenDisplay', 'Queue management — display token numbers on screen for food/pharmacy orders'],
            ['Kitchen Display', 'MerchantKitchenDisplay', 'Kitchen order display (KOD) for restaurants — shows incoming orders with priority'],
            ['Waiter App', 'MerchantWaiterApp', 'Tableside ordering — waiter takes orders on phone, sends directly to kitchen'],
            ['Rush Hour Mode', 'MerchantRushHourMode', 'Simplified POS during peak hours — large buttons, quick actions, minimal steps'],
            ['POS Transactions', 'MerchantPOSTransactions', 'Transaction history with void/refund capabilities, daily reconciliation'],
            ['POS Integration', 'MerchantPOSIntegration', 'Connect external POS hardware — receipt printers, barcode scanners, cash drawers'],
            ['Tips Config', 'MerchantTipsConfig', 'Configure tip options — percentage presets, custom amounts, tip pooling rules'],
            ['Payment Links', 'MerchantPaymentLinks', 'Generate shareable payment links for remote transactions (WhatsApp, SMS)'],
            ['QR Payments', 'MerchantQRPayments', 'Merchant displays static QR — customer scans and pays any amount'],
            ['Print Templates', 'MerchantPrintTemplates', 'Customize receipt templates — add logo, footer, promo text, QR codes'],
            ['Hardware Hub', 'MerchantHardwareHub', 'Manage connected devices — printers, scanners, displays, NFC readers'],
            ['Hardware Diagnostics', 'MerchantHardwareDiagnostics', 'Test and troubleshoot connected hardware — print test, scan test, NFC test'],
          ]}
        />
      </Expandable>

      <Expandable title="Inventory Management (35 screens)" icon={Package}>
        <DocTable
          headers={['Feature', 'Screen', 'Description']}
          rows={[
            ['Basic Inventory', 'MerchantInventory', 'Product list with stock levels, pricing, categories. Quick stock updates'],
            ['Advanced Inventory', 'MerchantInventoryAdvanced', 'Batch tracking, serial numbers, expiry dates, cost tracking, reorder points'],
            ['Low Stock Alerts', 'MerchantLowStockAlerts', 'Automatic notifications when stock drops below configurable threshold'],
            ['Expiry Dashboard', 'MerchantExpiryDashboard', 'Track products approaching expiry — auto-discount suggestions, waste prevention'],
            ['Forecasting', 'MerchantInventoryForecasting', 'AI-powered demand prediction based on sales history, seasonality, trends'],
            ['Stock Transfer', 'MerchantStockTransfer', 'Transfer stock between outlets/warehouses with tracking and confirmation'],
            ['Stock Reconciliation', 'MerchantStockReconciliation', 'Physical stock count vs system count — identify discrepancies, adjust'],
            ['Variance Report', 'MerchantStockVarianceReport', 'Detailed report on stock gains/losses with categorized reasons'],
            ['Label Printing', 'MerchantLabelPrinting', 'Print product labels with barcode, price, expiry, batch number'],
            ['Product Variants', 'MerchantProductVariants', 'Size, color, material variations with individual stock tracking'],
            ['Product Bundles', 'MerchantProductBundles', 'Create combo offers — bundle multiple products at discounted price'],
            ['Ingredient Tracking', 'MerchantIngredientTracking', 'For food/salon — track raw ingredients, auto-deduct on order'],
            ['Recipe Management', 'MerchantRecipeManagement', 'Define recipes with ingredient quantities, auto-calculate food cost'],
            ['Recipe Costing', 'MerchantRecipeCosting', 'Cost per dish/service with ingredient cost breakdown, margin calculation'],
            ['Portion Control', 'MerchantPortionControl', 'Standardize portions — prevent waste, maintain consistency'],
            ['Waste Tracking', 'MerchantWasteTracking', 'Log wastage by category (expired, damaged, prep waste) with cost impact'],
            ['Waste Management', 'MerchantWasteManagement', 'Waste reduction strategies, reporting, trend analysis'],
            ['Quality Control', 'MerchantQualityControl', 'Quality check workflows — receiving, storage, serving, customer feedback'],
            ['HSN Codes', 'MerchantHSNCodes', 'Manage HSN/SAC codes for GST compliance on products/services'],
            ['Multi-Warehouse', 'MerchantMultiWarehouse', 'Manage multiple warehouses/storage locations with stock allocation'],
            ['Warehouse Management', 'MerchantWarehouseManagement', 'Bin locations, picking orders, receiving, put-away, cycle counting'],
          ]}
        />
      </Expandable>

      <Expandable title="Orders & Fulfillment (25 screens)" icon={ShoppingCart}>
        <DocTable
          headers={['Feature', 'Screen', 'Description']}
          rows={[
            ['Order Management', 'MerchantOrders', 'View/accept/reject incoming orders. Status updates (preparing, ready, delivered)'],
            ['Multi-Channel Orders', 'MerchantOrdersMultiChannel', 'Unified view of orders from in-store, online, delivery apps, WhatsApp'],
            ['Unified Orders', 'MerchantUnifiedOrders', 'Single interface for all order sources with priority sorting'],
            ['Returns', 'MerchantReturns', 'Process returns — reason tracking, refund method, restocking'],
            ['Shipping', 'MerchantShipping', 'Manage delivery logistics — carrier selection, label printing, tracking'],
            ['Table Booking', 'MerchantTableBooking', 'Restaurant table reservation system with floor plan'],
            ['Table Management', 'MerchantTableManagement', 'Live table status — occupied, reserved, available, cleaning'],
            ['Floor Plan', 'MerchantFloorPlan', 'Visual layout of restaurant/store — drag-and-drop table/section arrangement'],
            ['Quotations', 'MerchantQuotations', 'Create and send quotations to B2B customers with item/pricing details'],
            ['Purchase Orders', 'MerchantPurchaseOrders', 'Create POs to suppliers — items, quantities, expected delivery, payment terms'],
          ]}
        />
      </Expandable>

      <Expandable title="CRM & Customers (20 screens)" icon={Users}>
        <DocTable
          headers={['Feature', 'Screen', 'Description']}
          rows={[
            ['CRM Dashboard', 'MerchantCRMDashboard', 'Customer overview — total, new, returning, at-risk, VIP segments'],
            ['Customer Segments', 'MerchantCustomerSegments', 'Auto-segmentation based on spend, frequency, recency, tier'],
            ['Loyalty Program', 'MerchantLoyalty', 'Configure merchant-specific loyalty — branded coins, visit rewards, stamp cards'],
            ['Loyalty Builder', 'MerchantLoyaltyBuilder', 'Design custom loyalty programs — rules, tiers, rewards, conditions'],
            ['Loyalty Tiers', 'MerchantLoyaltyTiers', 'Merchant-level tiers with custom benefits and multipliers'],
            ['Re-Engagement', 'MerchantReEngagement', 'Auto-campaigns for inactive customers — win-back offers, reminders'],
            ['Review Management', 'MerchantReviewManagement', 'View/respond to customer reviews. Flag inappropriate content'],
            ['Referral Tracking', 'MerchantReferralTracking', 'Track customer referrals, reward completion, referral ROI'],
            ['Wishlist Demand', 'MerchantWishlistDemand', 'See what customers are wishlisting — stock accordingly'],
            ['Session Tracking', 'MerchantSessionTracking', 'In-store visit tracking via QR/NFC — frequency, duration, conversion'],
          ]}
        />
      </Expandable>

      <Expandable title="Marketing & Offers (22 screens)" icon={TrendingUp}>
        <DocTable
          headers={['Feature', 'Screen', 'Description']}
          rows={[
            ['Marketing Campaigns', 'MerchantMarketingCampaigns', 'Create push/email/SMS campaigns to customer segments'],
            ['Unified Marketing', 'MerchantUnifiedMarketing', 'Single view of all active campaigns across channels'],
            ['Flash Deals', 'MerchantFlashDeals', 'Time-limited flash offers with countdown, inventory limits'],
            ['Exclusive Deals', 'MerchantExclusiveDeals', 'Prive/VIP-only deals for premium customers'],
            ['Vouchers', 'MerchantVouchers', 'Create/distribute voucher codes — fixed discount, percentage, free item'],
            ['Today\'s Offers', 'MerchantTodaysOffers', 'Daily specials dashboard — quick setup for daily changing deals'],
            ['Nearby Offers', 'MerchantNearbyOffers', 'Configure geo-targeted offers for users near merchant location'],
            ['Lock Price Deals', 'MerchantLockPriceDeals', 'Allow users to lock current price for future purchase'],
            ['Free Delivery', 'MerchantFreeDelivery', 'Configure free delivery thresholds and promotions'],
            ['Seasonal Menu', 'MerchantSeasonalMenu', 'Time-based menus/catalogs for seasonal offerings'],
            ['Google Ads Manager', 'MerchantGoogleAdsManager', 'Connect and manage Google Ads from within BizOne'],
            ['Meta Ads Manager', 'MerchantMetaAdsManager', 'Connect and manage Facebook/Instagram Ads from within BizOne'],
            ['Offline Marketing', 'MerchantOfflineMarketing', 'Print materials — flyers, standees, QR tent cards, business cards'],
            ['WhatsApp Business', 'MerchantWhatsAppBusiness', 'WhatsApp catalog, order receiving, broadcast messages'],
            ['UGC Campaigns', 'MerchantUGCCampaigns', 'User-generated content campaigns — photo contests, reviews, social sharing'],
          ]}
        />
      </Expandable>

      <Expandable title="Financial Management (20 screens)" icon={DollarSign}>
        <DocTable
          headers={['Feature', 'Screen', 'Description']}
          rows={[
            ['Financials Overview', 'MerchantFinancials', 'Revenue, expenses, profit summary with period comparison'],
            ['Profit & Loss', 'MerchantProfitLoss', 'Detailed P&L statement — revenue breakdown, cost categories, net profit'],
            ['Profit View', 'MerchantProfitView', 'Quick profit widget showing today/week/month margins'],
            ['Expense Tracker', 'MerchantExpenseTracker', 'Log and categorize business expenses — rent, salaries, utilities, supplies'],
            ['Transactions', 'MerchantTransactions', 'All transaction history with search, filters, export'],
            ['Settlement Engine', 'MerchantSettlementEngine', 'Track platform settlements — pending, processing, completed, failed'],
            ['Failed Payments', 'MerchantFailedPayments', 'Track and retry failed payment attempts, understand failure reasons'],
            ['Payment Reminders', 'MerchantPaymentReminders', 'Send payment reminders to customers with outstanding dues'],
            ['Credit Ledger', 'MerchantCreditLedger', 'BNPL/credit tracking — balance, repayments, upcoming dues'],
            ['GST Setup Wizard', 'MerchantGSTSetupWizard', 'Step-by-step GST configuration — GSTIN, HSN codes, tax rates'],
            ['GST Reports', 'MerchantGSTReports', 'GSTR-1, GSTR-3B, GSTR-9 report generation for filing'],
            ['GSTR Export', 'MerchantGSTRExport', 'Export GST reports in format ready for government filing'],
            ['E-Invoice', 'MerchantEInvoice', 'Generate GST-compliant e-invoices with IRN and QR code'],
            ['Tax Compliance', 'MerchantTaxCompliance', 'Tax dashboard — filing deadlines, compliance status, alerts'],
            ['TDS/TCS Reports', 'MerchantTDSTCSReports', 'TDS/TCS deduction tracking and report generation'],
            ['Accountant Portal', 'MerchantAccountantPortal', 'Read-only access for merchant\'s CA/accountant — view reports, download data'],
            ['Salesman Commission', 'MerchantSalesmanCommission', 'Track and calculate commissions for sales staff'],
            ['Invoice Scanner', 'MerchantInvoiceScanner', 'OCR-based invoice scanning — auto-extract items, amounts, supplier details'],
          ]}
        />
      </Expandable>

      <Expandable title="Staff Management (15 screens)" icon={Users}>
        <DocTable
          headers={['Feature', 'Screen', 'Description']}
          rows={[
            ['Staff List', 'MerchantStaff', 'All staff members with role, status, contact, performance'],
            ['User Roles', 'MerchantUserRoles', 'Define custom roles with granular permissions — module/action level'],
            ['Team Management', 'MerchantTeamManagement', 'Organize staff into teams/departments with team leads'],
            ['Shift Management', 'MerchantShiftManagement', 'Schedule shifts — morning/evening/night, breaks, overtime'],
            ['Staff Roster', 'MerchantStaffRoster', 'Weekly/monthly roster view with drag-and-drop scheduling'],
            ['Holiday Calendar', 'MerchantHolidayCalendar', 'Public holidays, leave management, special hours'],
            ['Employee Scheduling', 'MerchantEmployeeScheduling', 'AI-optimized scheduling based on demand patterns'],
            ['Payroll', 'MerchantPayroll', 'Salary calculation — base, overtime, tips, commissions, deductions'],
            ['Staff Activity Log', 'MerchantStaffActivityLog', 'Track staff actions — logins, transactions processed, breaks taken'],
            ['Staff Sales', 'MerchantStaffSales', 'Sales performance per staff member — revenue, items sold, avg ticket'],
            ['Staff Leaderboard', 'MerchantStaffLeaderboard', 'Gamified performance ranking with rewards/recognition'],
          ]}
        />
      </Expandable>

      <Expandable title="Multi-Store & Integrations (27 screens)" icon={Building2}>
        <DocTable
          headers={['Feature', 'Screen', 'Description']}
          rows={[
            ['Multi-Store Dashboard', 'MerchantMultiStoreDashboard', 'Compare performance across all outlets — revenue, orders, ratings'],
            ['Multi-Store', 'MerchantMultiStore', 'Add/manage multiple outlet locations with individual settings'],
            ['Store Transfer', 'MerchantStoreTransfer', 'Transfer stock/equipment between outlets with tracking'],
            ['Warehouse Management', 'MerchantWarehouseManagement', 'Central warehouse for multi-store — allocation, picking, delivery'],
            ['ERP Connector', 'MerchantERPConnector', 'Connect to Tally, SAP, Oracle — bidirectional data sync'],
            ['Integration Hub', 'MerchantIntegrationHub', 'Manage all third-party integrations from one place'],
            ['Integration Health', 'MerchantIntegrationHealth', 'Monitor integration status — up/down, sync errors, last sync time'],
            ['Supplier Management', 'MerchantSupplierManagement', 'Supplier database with contact, payment terms, performance rating'],
            ['Supplier Contracts', 'MerchantSupplierContracts', 'Track contract terms, renewal dates, pricing agreements'],
            ['Supplier Performance', 'MerchantSupplierPerformance', 'Rate suppliers on delivery time, quality, pricing, responsiveness'],
            ['Supplier Returns', 'MerchantSupplierReturns', 'Process returns to suppliers — defective, over-delivery, wrong items'],
            ['Vendor Portal', 'MerchantVendorPortal', 'Self-service portal for suppliers — view POs, submit invoices, track payments'],
            ['Marketplace', 'MerchantMarketplace', 'BizOne app marketplace — discover and install extensions/integrations'],
          ]}
        />
      </Expandable>

      <Expandable title="Analytics & Special Features" icon={BarChart3}>
        <DocTable
          headers={['Feature', 'Screen', 'Description']}
          rows={[
            ['Analytics Dashboard', 'MerchantAnalytics', 'Comprehensive business analytics — revenue trends, customer insights, forecasts'],
            ['Performance', 'MerchantPerformance', 'KPI tracking — conversion rate, avg order value, customer retention'],
            ['Demand Signals', 'MerchantDemandSignals', 'Real-time demand indicators — trending products, peak hours, seasonal patterns'],
            ['Seasonal Trends', 'MerchantSeasonalTrends', 'Year-over-year seasonal analysis with planning recommendations'],
            ['Pricing Intelligence', 'MerchantPricingIntelligence', 'Competitor pricing comparison, optimal price recommendations'],
            ['Price Engineering', 'MerchantPriceEngineering', 'Menu/catalog engineering — categorize items by profitability vs popularity'],
            ['Dynamic Pricing', 'MerchantDynamicPricing', 'Auto-adjust pricing based on demand, time, inventory levels'],
            ['Menu Engineering', 'MerchantMenuEngineering', 'Analyze menu performance — stars, puzzles, workhorses, dogs'],
            ['Trust Score', 'MerchantTrustScoreDetail', 'Platform trust score breakdown — ratings, response time, compliance, quality'],
            ['Upsell Engine', 'MerchantUpsellEngine', 'AI-powered upsell/cross-sell suggestions at checkout'],
            ['Post-Payment Rewards', 'MerchantPostPaymentRewards', 'Configure rewards shown after payment — scratch cards, spin, next visit offers'],
            ['Gamification Rewards', 'MerchantGamificationRewards', 'Merchant-specific gamification — loyalty games, challenges, contests'],
            ['Prescriptions', 'MerchantPrescriptions', 'For pharmacy — manage prescriptions, verify, dispense, track'],
            ['Salon Packages', 'MerchantSalonPackages', 'For beauty — create service packages with bundled pricing'],
            ['Service Catalog', 'MerchantServiceCatalog', 'For service businesses — define services with duration, pricing, staff assignment'],
            ['Memberships', 'MerchantMemberships', 'Merchant membership plans — monthly/yearly packages with benefits'],
            ['Subscription Plans', 'MerchantSubscriptionPlans', 'Recurring subscription management — auto-billing, plan changes, cancellation'],
          ]}
        />
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION: SECURITY & COMPLIANCE
// ════════════════════════════════════════════════════════════════════
function SecuritySection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Security & Compliance</h2>
      <p className="text-slate-400 mb-6">KYC flows, PCI-DSS compliance, UAE PDPL, encryption standards, and 2FA implementation. Critical for production readiness.</p>

      <InfoBox type="warning">
        <strong>Production Blocker:</strong> No feature ships to production without passing security review. All items below must be implemented before UAE launch.
      </InfoBox>

      <Expandable title="KYC (Know Your Customer) Flows" icon={Fingerprint} defaultOpen>
        <h4 className="text-white font-semibold text-sm mb-2">User KYC Levels</h4>
        <DocTable
          headers={['Level', 'Requirement', 'Unlocks', 'Verification Method']}
          rows={[
            ['Level 0 (Guest)', 'Phone + OTP only', 'Browse, wishlist, limited offers', 'SMS OTP (5-min expiry)'],
            ['Level 1 (Basic)', 'Phone + Email + Name + DOB', 'Full shopping, earn coins, basic wallet', 'Email verification link'],
            ['Level 2 (Verified)', 'Level 1 + Emirates ID / Passport', 'Full wallet, Prive subscription, higher limits', 'Document OCR + liveness check'],
            ['Level 3 (Premium)', 'Level 2 + Address proof + Bank link', 'BNPL (Qist), high transaction limits, ambassador program', 'Address verification + bank penny-drop'],
          ]}
        />
        <h4 className="text-white font-semibold text-sm mb-2 mt-4">Merchant KYC</h4>
        <DocTable
          headers={['Step', 'Documents Required', 'Verification']}
          rows={[
            ['Business Identity', 'Trade License, Commercial Register', 'DED API verification (UAE)'],
            ['Owner Identity', 'Emirates ID / Passport of owner', 'OCR + liveness + match against trade license'],
            ['Tax Registration', 'TRN (Tax Registration Number), VAT certificate', 'FTA API validation'],
            ['Bank Verification', 'Bank account details, IBAN', 'Penny-drop test (send 0.01 AED, confirm)'],
            ['Address Proof', 'Ejari / Utility bill / Lease agreement', 'Manual review by Level 80+ admin'],
          ]}
        />
        <InfoBox type="action">
          <strong>Dev Note:</strong> KYC status stored in <code className="text-[#c9a227]">users.kyc_level</code> and <code className="text-[#c9a227]">merchants.verification_status</code>. State machine: <code className="text-[#c9a227]">pending → documents_submitted → under_review → verified | rejected</code>. All document images stored encrypted in S3 with restricted access.
        </InfoBox>
      </Expandable>

      <Expandable title="PCI-DSS Compliance" icon={Lock}>
        <DocTable
          headers={['Requirement', 'Implementation', 'Status']}
          rows={[
            ['Card data never touches our servers', 'Razorpay/Stripe tokenization — card details go directly to payment gateway SDK', 'Enforced'],
            ['PCI SAQ-A compliance', 'All payment forms are iframes from gateway, not custom HTML', 'Enforced'],
            ['No PAN storage', 'Only store last 4 digits + card brand for display', 'Enforced'],
            ['Tokenized recurring', 'Saved cards stored as gateway tokens, not card numbers', 'Enforced'],
            ['3D Secure mandatory', 'All card transactions require 3DS authentication', 'Enforced for UAE'],
            ['Payment page HTTPS', 'All payment flows force TLS 1.3, HSTS enabled', 'Enforced'],
            ['Annual PCI audit', 'Conducted by QSA (Qualified Security Assessor)', 'Scheduled'],
          ]}
        />
      </Expandable>

      <Expandable title="UAE PDPL (Personal Data Protection Law)" icon={Shield}>
        <DocTable
          headers={['Requirement', 'Implementation']}
          rows={[
            ['Lawful basis for processing', 'Consent collected at registration, contract basis for transactions, legitimate interest for analytics'],
            ['Data subject rights', 'Users can request data export (GDPR-style), deletion, correction via Settings → Privacy'],
            ['Cross-border transfer', 'Data stored in UAE region (AWS me-south-1). Transfer to India region requires explicit consent'],
            ['Data minimization', 'Only collect data needed for stated purpose. Review annually'],
            ['Breach notification', '72-hour notification window to UAE DPA. Automated breach detection triggers alert pipeline'],
            ['Privacy Impact Assessment', 'Required for any new feature collecting personal data. Template in /docs/security/pia-template.md'],
            ['Cookie consent', 'Banner with granular controls: Essential (always on), Analytics (opt-in), Marketing (opt-in)'],
            ['Right to be forgotten', 'Soft delete (30-day retention for legal obligations) → Hard delete. Cascade to all linked tables'],
          ]}
        />
      </Expandable>

      <Expandable title="Encryption Standards" icon={Lock}>
        <DocTable
          headers={['Layer', 'Standard', 'Details']}
          rows={[
            ['In Transit', 'TLS 1.3', 'All API calls, WebSocket connections, inter-service communication. HSTS with max-age=31536000'],
            ['At Rest (Database)', 'AES-256', 'PostgreSQL TDE (Transparent Data Encryption). RDS encrypted volumes'],
            ['At Rest (Files)', 'AES-256 (S3 SSE-KMS)', 'All uploaded documents, images, KYC documents. AWS KMS managed keys'],
            ['Passwords', 'bcrypt (cost 12)', 'Salted bcrypt hashing. No reversible encryption. Password rules: min 8 chars, 1 upper, 1 number'],
            ['API Tokens', 'HMAC-SHA256', 'JWT signed with RS256 (RSA 2048-bit). Refresh tokens encrypted in DB'],
            ['Wallet PIN', 'PBKDF2-SHA256 (100k iterations)', 'User wallet PIN for payment authorization. Never stored in plaintext'],
            ['PII Fields', 'AES-256-GCM (field-level)', 'Phone, email, Emirates ID stored encrypted at field level in PostgreSQL'],
            ['Redis Secrets', 'Encrypted at rest', 'ElastiCache with encryption enabled. OTPs, session tokens auto-expire'],
          ]}
        />
      </Expandable>

      <Expandable title="Two-Factor Authentication (2FA)" icon={Fingerprint}>
        <DocTable
          headers={['Flow', 'Method', 'When Required']}
          rows={[
            ['User Login', 'SMS OTP (6-digit, 5-min expiry)', 'Every login (primary auth method for UAE market)'],
            ['User Payment', 'Wallet PIN (4-6 digit)', 'Every transaction above AED 0 (configurable threshold)'],
            ['User High-Value', 'Biometric (FaceID/TouchID) + PIN', 'Transactions above AED 1,000 or wallet top-up'],
            ['Admin Login', 'Email + TOTP (Google Authenticator)', 'Every login — mandatory for all admin levels'],
            ['Admin Critical Action', 'Re-auth TOTP + confirmation', 'Coin minting, wallet freeze, emergency controls, system config'],
            ['Merchant Login', 'Phone OTP + optional TOTP', 'TOTP mandatory for Owner role, optional for Staff'],
            ['Merchant Payout', 'OTP to registered phone', 'Every withdrawal request'],
          ]}
        />
        <InfoBox type="action">
          <strong>Dev Note:</strong> OTPs stored in Redis with key <code className="text-[#c9a227]">otp:&#123;phone&#125;</code> (5-min TTL). Rate limit: 3 OTP requests per phone per 15 minutes. Lockout after 5 failed attempts (30-min cooldown). TOTP secrets encrypted with AES-256 in user record.
        </InfoBox>
      </Expandable>

      <Expandable title="Fraud Detection & Prevention" icon={AlertTriangle}>
        <DocTable
          headers={['Signal', 'Detection', 'Action']}
          rows={[
            ['Device Fingerprint Change', 'New device on existing account', 'Force re-authentication + notification to user'],
            ['Location Mismatch', 'Transaction from unusual geo-location', 'Risk score +0.3, flag for review if total > 0.7'],
            ['Velocity Check', 'Multiple transactions in short window', 'Block if >5 transactions/minute from same wallet'],
            ['Multiple Account Detection', 'Same device/IP creating multiple accounts', 'Block registration, flag existing accounts'],
            ['Coin Abuse', 'Earning coins via fake reviews/referrals', 'Hold coins for 72h review period, auto-flag patterns'],
            ['Chargeback Pattern', 'User with >2 chargebacks in 90 days', 'Auto-freeze wallet, escalate to Level 70 admin'],
            ['Merchant Fraud', 'Fake orders to self, inflated transactions', 'Cross-reference order patterns, customer uniqueness, settlement hold'],
          ]}
        />
        <p className="text-slate-400 text-sm mt-2">Fraud risk scores stored in MongoDB <code className="text-[#c9a227]">fraud_detection_logs</code> collection (365-day TTL). Threshold configurable in Rule Engine (default: 0.7 = auto-flag).</p>
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION: CUSTOMER ONBOARDING FLOW
// ════════════════════════════════════════════════════════════════════
function CustomerOnboardingSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Customer Onboarding Flow</h2>
      <p className="text-slate-400 mb-6">Registration, phone verification, KYC, wallet initialization, and first-purchase incentives.</p>

      <Expandable title="Registration Flow" icon={Smartphone} defaultOpen>
        <div className="space-y-3">
          {[
            { step: '1', title: 'Splash & Welcome', desc: 'App opens → 3-screen onboarding carousel (Discover, Earn, Save) → "Get Started" button' },
            { step: '2', title: 'Phone Number Entry', desc: 'Country code auto-detected (UAE +971 default). Phone input with validation. "Send OTP" button' },
            { step: '3', title: 'OTP Verification', desc: '6-digit SMS OTP. Auto-read on Android. 5-minute expiry. Resend after 30s cooldown. 3 resend max' },
            { step: '4', title: 'Profile Setup', desc: 'Name (required), Email (optional but encouraged — "unlock 50 coins"), Gender (optional), DOB (optional — "unlock birthday offers")' },
            { step: '5', title: 'Location Permission', desc: 'Request location access for nearby merchants/offers. Skip option available. Fallback to manual city selection' },
            { step: '6', title: 'Notification Permission', desc: 'Request push notification permission. Show value prop: "Get notified about deals near you"' },
            { step: '7', title: 'Wallet Auto-Creation', desc: 'Wallet created automatically with 0 balance. Wallet record in wallets table with user_id FK. All coin types initialized to 0' },
            { step: '8', title: 'Welcome Reward', desc: 'Award welcome bonus coins (configurable via Rule Engine, default: 50 ReZ coins). Show celebration animation' },
          ].map(s => (
            <div key={s.step} className="flex gap-3 p-3 bg-slate-800/30 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#c9a227]/20 flex items-center justify-center text-[#c9a227] font-bold text-sm">{s.step}</div>
              <div>
                <h4 className="font-semibold text-white text-sm">{s.title}</h4>
                <p className="text-slate-400 text-xs mt-0.5">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Expandable>

      <Expandable title="First Purchase Incentives" icon={Coins}>
        <DocTable
          headers={['Incentive', 'Trigger', 'Reward', 'Configurable']}
          rows={[
            ['Welcome Bonus', 'Account creation complete', '50 ReZ coins', 'Amount via Rule Engine'],
            ['Profile Completion', 'Email + DOB filled', '25 ReZ coins', 'Amount via Rule Engine'],
            ['First Order Cashback', 'First completed order', '20% cashback in coins (max 200)', 'Percentage + cap via Rule Engine'],
            ['First Review', 'Write first product/merchant review', '30 ReZ coins', 'Amount via Rule Engine'],
            ['Referral Code Entry', 'Enter referral code during onboarding', '50 ReZ coins (referee bonus)', 'Amount via Rule Engine'],
            ['First Scan & Pay', 'First QR payment at physical store', '50 ReZ coins + badge unlock', 'Amount via Rule Engine'],
            ['App Rating', 'Rate app on store after 3rd purchase', '25 ReZ coins', 'Amount via Rule Engine'],
          ]}
        />
        <InfoBox type="action">
          <strong>PM Note:</strong> All incentive amounts are configurable via HQ Admin Rule Engine. Track conversion rates for each incentive to optimize spending. First-purchase incentives should be time-limited (e.g., &quot;complete within 7 days&quot;).
        </InfoBox>
      </Expandable>

      <Expandable title="Progressive KYC" icon={Shield}>
        <p className="text-slate-300 text-sm mb-3">Users are not forced to complete KYC upfront. Features unlock progressively as they verify more info:</p>
        <CodeBlock code={`Level 0 (Phone only)     → Browse, wishlist, basic offers
Level 1 (+ Email + Name) → Full shopping, earn coins, basic wallet (daily limit: 500 AED)
Level 2 (+ Emirates ID)  → Full wallet, Prive, higher limits (daily limit: 5,000 AED)
Level 3 (+ Bank + Address)→ BNPL (Qist), ambassador, max limits (daily limit: 25,000 AED)`} />
        <InfoBox type="info">
          <strong>Nudge Strategy:</strong> Show contextual prompts when users hit a limit. Example: &quot;Verify your email to unlock 25 bonus coins and higher spending limits.&quot; Never block the user — always explain the benefit of upgrading.
        </InfoBox>
      </Expandable>

      <Expandable title="Social Login Integration" icon={Users}>
        <DocTable
          headers={['Provider', 'Data Received', 'Account Linking']}
          rows={[
            ['Google', 'Name, email, profile photo, Google ID', 'Auto-link if email matches existing account, otherwise create new'],
            ['Apple', 'Name (first login only), email (can be hidden), Apple ID', 'Apple relay email mapped to user. Name only on first auth'],
            ['Facebook', 'Name, email, profile photo, Facebook ID', 'Auto-link if email matches, otherwise create new. Deprecated for new installs'],
          ]}
        />
        <p className="text-slate-400 text-sm mt-2">Social accounts stored in <code className="text-[#c9a227]">user_social_accounts</code> table. One user can have multiple social logins linked. Phone number always required as primary identifier (UAE regulation).</p>
      </Expandable>

      <Expandable title="Onboarding Analytics Events" icon={BarChart3}>
        <DocTable
          headers={['Event', 'Trigger Point', 'Key Properties']}
          rows={[
            ['onboarding_started', 'User opens app first time', 'device_type, os_version, referral_source'],
            ['otp_requested', 'User taps Send OTP', 'phone_country, attempt_number'],
            ['otp_verified', 'OTP validation success', 'time_to_verify_seconds'],
            ['profile_completed', 'User fills name/email', 'fields_filled, skipped_fields'],
            ['location_permission', 'Permission dialog response', 'granted: true/false'],
            ['notification_permission', 'Permission dialog response', 'granted: true/false'],
            ['welcome_coins_awarded', 'Wallet created + coins credited', 'coin_amount'],
            ['first_purchase_completed', 'First order delivered', 'order_value, time_since_registration_hours'],
            ['onboarding_abandoned', 'User drops off at any step', 'last_completed_step, time_spent_seconds'],
          ]}
        />
        <InfoBox type="action">
          <strong>PM Action:</strong> Track funnel conversion at each step. Target benchmarks: OTP verification &gt;90%, Profile completion &gt;70%, First purchase within 7 days &gt;30%.
        </InfoBox>
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION: API ERROR CODES
// ════════════════════════════════════════════════════════════════════
function ErrorCodesSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">API Error Codes & Error Handling</h2>
      <p className="text-slate-400 mb-6">Standard error catalog, response format, retry strategies, and circuit breaker patterns.</p>

      <Expandable title="Standard Error Response Format" icon={Code} defaultOpen>
        <CodeBlock title="Error Response Schema" code={`{
  "success": false,
  "error": {
    "code": "ERR_WALLET_INSUFFICIENT_BALANCE",
    "message": "Insufficient wallet balance for this transaction",
    "details": {
      "required": 1500,
      "available": 800,
      "currency": "AED"
    },
    "request_id": "req_abc123xyz",
    "timestamp": "2026-03-15T14:30:00Z"
  }
}`} />
        <InfoBox type="info">
          <strong>Every error response</strong> includes a unique <code className="text-[#c9a227]">request_id</code> for tracing. Clients should log this and display it in support/contact flows.
        </InfoBox>
      </Expandable>

      <Expandable title="HTTP Status Codes Used" icon={Server}>
        <DocTable
          headers={['Code', 'Meaning', 'When Used']}
          rows={[
            ['200', 'OK', 'Successful GET, PUT, PATCH'],
            ['201', 'Created', 'Successful POST (new resource created)'],
            ['204', 'No Content', 'Successful DELETE'],
            ['400', 'Bad Request', 'Validation errors, malformed JSON, missing required fields'],
            ['401', 'Unauthorized', 'Missing/expired/invalid JWT token'],
            ['403', 'Forbidden', 'Valid token but insufficient permissions (RBAC violation)'],
            ['404', 'Not Found', 'Resource does not exist'],
            ['409', 'Conflict', 'Duplicate entry, concurrent modification, state conflict'],
            ['422', 'Unprocessable Entity', 'Business logic failure (e.g., order already cancelled)'],
            ['429', 'Too Many Requests', 'Rate limit exceeded (100 rpm default)'],
            ['500', 'Internal Server Error', 'Unexpected server error (triggers alert)'],
            ['502', 'Bad Gateway', 'Upstream service unavailable (payment gateway down)'],
            ['503', 'Service Unavailable', 'Maintenance mode or circuit breaker open'],
          ]}
        />
      </Expandable>

      <Expandable title="Domain Error Codes" icon={AlertTriangle}>
        <h4 className="text-white font-semibold text-sm mb-2">Authentication Errors (AUTH_*)</h4>
        <DocTable
          headers={['Code', 'Description', 'Client Action']}
          rows={[
            ['AUTH_INVALID_OTP', 'OTP is incorrect or expired', 'Show error, allow retry (max 5 attempts)'],
            ['AUTH_OTP_EXPIRED', 'OTP has passed 5-minute TTL', 'Prompt to resend OTP'],
            ['AUTH_OTP_RATE_LIMIT', 'Too many OTP requests (3 per 15 min)', 'Show cooldown timer'],
            ['AUTH_TOKEN_EXPIRED', 'JWT token has expired', 'Use refresh token, redirect to login if refresh fails'],
            ['AUTH_TOKEN_INVALID', 'JWT signature verification failed', 'Clear tokens, redirect to login'],
            ['AUTH_ACCOUNT_LOCKED', '5+ failed login attempts', 'Show lockout message with 30-min timer'],
            ['AUTH_DEVICE_NEW', 'Login from unrecognized device', 'Force OTP re-verification'],
            ['AUTH_2FA_REQUIRED', 'TOTP/biometric required for this action', 'Show 2FA prompt'],
          ]}
        />
        <h4 className="text-white font-semibold text-sm mb-2 mt-4">Wallet Errors (WALLET_*)</h4>
        <DocTable
          headers={['Code', 'Description', 'Client Action']}
          rows={[
            ['WALLET_INSUFFICIENT_BALANCE', 'Not enough coins/cash for transaction', 'Show balance, suggest top-up'],
            ['WALLET_FROZEN', 'Wallet frozen by admin (fraud/dispute)', 'Show support contact info'],
            ['WALLET_DAILY_LIMIT', 'Daily spend limit exceeded', 'Show limit, suggest upgrading KYC level'],
            ['WALLET_MONTHLY_LIMIT', 'Monthly spend limit exceeded', 'Show limit and reset date'],
            ['WALLET_PIN_INCORRECT', 'Wrong wallet PIN entered', 'Allow retry (max 5, then lock 30 min)'],
            ['WALLET_CONCURRENT_TX', 'Another transaction in progress (Redis lock)', 'Retry after 2 seconds (max 3 retries)'],
            ['WALLET_COIN_EXPIRED', 'Attempting to use expired promo coins', 'Remove from available balance, show message'],
          ]}
        />
        <h4 className="text-white font-semibold text-sm mb-2 mt-4">Order Errors (ORDER_*)</h4>
        <DocTable
          headers={['Code', 'Description', 'Client Action']}
          rows={[
            ['ORDER_OUT_OF_STOCK', 'Product out of stock during checkout', 'Show alternative or remove from cart'],
            ['ORDER_MERCHANT_OFFLINE', 'Merchant not accepting orders', 'Show merchant status, suggest alternatives'],
            ['ORDER_INVALID_TRANSITION', 'Invalid status change (e.g., delivered→preparing)', 'Show valid transitions'],
            ['ORDER_ALREADY_CANCELLED', 'Attempting to cancel already cancelled order', 'Refresh order status'],
            ['ORDER_REFUND_WINDOW_CLOSED', 'Refund request after allowed window', 'Show policy, suggest contacting support'],
            ['ORDER_PAYMENT_FAILED', 'Payment gateway rejected transaction', 'Show failure reason, allow retry with different method'],
          ]}
        />
        <h4 className="text-white font-semibold text-sm mb-2 mt-4">Merchant Errors (MERCHANT_*)</h4>
        <DocTable
          headers={['Code', 'Description', 'Client Action']}
          rows={[
            ['MERCHANT_NOT_VERIFIED', 'Merchant account not yet approved', 'Show onboarding status'],
            ['MERCHANT_SUSPENDED', 'Merchant suspended by admin', 'Show suspension notice + support contact'],
            ['MERCHANT_PERMISSION_DENIED', 'Staff member lacks permission for action', 'Show required role, contact store owner'],
            ['MERCHANT_STORE_LIMIT', 'Maximum store count reached for plan', 'Show upgrade options'],
          ]}
        />
      </Expandable>

      <Expandable title="Retry Strategy" icon={ArrowRight}>
        <DocTable
          headers={['Scenario', 'Strategy', 'Config']}
          rows={[
            ['Network timeout', 'Exponential backoff with jitter', '3 retries: 1s, 2s, 4s + random 0-500ms'],
            ['429 Rate limited', 'Wait for Retry-After header', 'Respect Retry-After value, max wait 60s'],
            ['5xx Server error', 'Exponential backoff', '3 retries: 2s, 4s, 8s. Give up after 3rd'],
            ['Payment webhook missed', 'Retry with idempotency key', '5 retries over 24 hours: 1m, 5m, 30m, 2h, 24h'],
            ['WebSocket disconnect', 'Auto-reconnect with backoff', '1s, 2s, 4s, 8s, 16s, then every 30s'],
            ['Redis lock conflict', 'Short retry with fixed delay', '3 retries at 2s interval, then fail'],
          ]}
        />
      </Expandable>

      <Expandable title="Circuit Breaker Pattern" icon={Zap}>
        <CodeBlock code={`Circuit Breaker States:
  CLOSED (normal)   → requests pass through normally
  OPEN (tripped)    → all requests immediately fail with 503
  HALF-OPEN (probe) → allow 1 request through to test recovery

Thresholds:
  failure_threshold: 5 failures in 30 seconds → OPEN
  recovery_timeout: 60 seconds → transition to HALF-OPEN
  success_threshold: 3 consecutive successes in HALF-OPEN → CLOSED

Applied to:
  - Payment gateway calls (Razorpay, Paytm, PhonePe)
  - External KYC verification APIs
  - SMS/Email delivery services
  - AIRA AI recommendation engine
  - Third-party logistics APIs`} />
        <InfoBox type="action">
          <strong>Dev Note:</strong> Circuit breaker state is stored in Redis. Dashboard monitors at <code className="text-[#c9a227]">/admin/system/circuit-breakers</code> show real-time status of all breakers. Super Admin can manually force-close breakers.
        </InfoBox>
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION: TESTING STRATEGY
// ════════════════════════════════════════════════════════════════════
function TestingSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Testing Strategy</h2>
      <p className="text-slate-400 mb-6">Unit, integration, E2E testing, coverage targets, and QA process.</p>

      <Expandable title="Testing Pyramid" icon={Layers} defaultOpen>
        <CodeBlock code={`                    ┌──────────┐
                    │   E2E    │  10% of tests
                    │  (Slow)  │  Critical user journeys
                    ├──────────┤
                    │Integration│  30% of tests
                    │ (Medium)  │  API + DB + Service
                    ├──────────┤
                    │   Unit    │  60% of tests
                    │  (Fast)   │  Functions + Components
                    └──────────┘`} />
      </Expandable>

      <Expandable title="Unit Testing" icon={Code}>
        <DocTable
          headers={['Area', 'Framework', 'Coverage Target', 'Focus Areas']}
          rows={[
            ['Backend Business Logic', 'Jest', '90%', 'Coin calculations, commission math, tier logic, offer evaluation, settlement amounts'],
            ['Backend Utilities', 'Jest', '85%', 'Validators, formatters, parsers, crypto helpers, date utils'],
            ['Backend Models', 'Jest', '80%', 'Model validations, hooks, virtual fields, query scopes'],
            ['React Native Components', 'React Testing Library', '75%', 'Render output, user interactions, state changes, prop handling'],
            ['Redux/State Logic', 'Jest', '90%', 'Reducers, selectors, action creators, async thunks'],
            ['Admin Panel Components', 'React Testing Library', '70%', 'Form validation, table rendering, modal behavior'],
          ]}
        />
        <InfoBox type="warning">
          <strong>Hard Rule:</strong> Any PR that changes coin logic, wallet operations, or settlement math MUST have 100% unit test coverage for the changed functions. No exceptions.
        </InfoBox>
      </Expandable>

      <Expandable title="Integration Testing" icon={Network}>
        <DocTable
          headers={['Test Type', 'Framework', 'What It Tests']}
          rows={[
            ['API Endpoint Tests', 'Supertest + Jest', 'Full request → response cycle, auth middleware, validation, DB operations'],
            ['Database Integration', 'Jest + test DB', 'Migrations, queries, transactions, constraints, cascading deletes'],
            ['Service-to-Service', 'Jest + mocks', 'Event bus communication, webhook delivery, cross-service API calls'],
            ['Payment Gateway', 'Razorpay test mode', 'Payment initiation, webhook handling, refund processing, settlement'],
            ['Redis Integration', 'Jest + test Redis', 'Caching, locking, session management, rate limiting, leaderboards'],
            ['Search Integration', 'Jest + test ES', 'Indexing, search queries, autocomplete, geo-spatial queries'],
          ]}
        />
      </Expandable>

      <Expandable title="E2E Testing" icon={Monitor}>
        <DocTable
          headers={['Journey', 'Tool', 'Steps Covered']}
          rows={[
            ['User Registration', 'Detox (Mobile) / Cypress (Web)', 'Phone entry → OTP → Profile → Location → Welcome coins'],
            ['Full Purchase Flow', 'Detox / Cypress', 'Browse → Add to cart → Checkout → Payment → Coins earned → Order status'],
            ['Merchant Onboarding', 'Cypress', 'Signup → Business details → Documents → Bank verify → Admin approval'],
            ['Scan & Pay', 'Detox', 'Open scanner → Scan QR → Confirm amount → Pay → Receipt'],
            ['Admin Merchant Approval', 'Cypress', 'Login → Navigate → Review docs → Approve → Verify merchant goes live'],
            ['Refund Flow', 'Cypress', 'Request → Admin review → Approve → Payment reversed → Coins adjusted'],
            ['Prive Subscription', 'Detox', 'Select tier → Payment → Benefits activated → Exclusive offers visible'],
          ]}
        />
      </Expandable>

      <Expandable title="QA Process" icon={CheckCircle}>
        <div className="space-y-3">
          {[
            { step: '1', title: 'PR Created', desc: 'Developer creates PR. CI runs: lint, unit tests, type check. All must pass to merge' },
            { step: '2', title: 'Code Review', desc: 'Minimum 1 approval required. Security-sensitive files (auth, wallet, payment) require 2 approvals' },
            { step: '3', title: 'Staging Deploy', desc: 'Auto-deploy to staging on PR merge. Integration tests run against staging DB' },
            { step: '4', title: 'QA Manual Testing', desc: 'QA team tests new features on staging. Regression test checklist for affected modules' },
            { step: '5', title: 'E2E Suite', desc: 'Full E2E suite runs nightly on staging. Broken tests block production deploy' },
            { step: '6', title: 'Production Deploy', desc: 'Canary deployment (5% traffic) → Monitor for 30 min → Full rollout. Rollback on error spike' },
            { step: '7', title: 'Post-Deploy Verification', desc: 'Smoke tests on production. Monitor error rates, latency, business metrics for 2 hours' },
          ].map(s => (
            <div key={s.step} className="flex gap-3 p-3 bg-slate-800/30 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">{s.step}</div>
              <div>
                <h4 className="font-semibold text-white text-sm">{s.title}</h4>
                <p className="text-slate-400 text-xs mt-0.5">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Expandable>

      <Expandable title="Coverage Thresholds (CI Enforced)" icon={BarChart3}>
        <DocTable
          headers={['Metric', 'Minimum', 'Blocking']}
          rows={[
            ['Overall line coverage', '80%', 'Yes — PR fails below this'],
            ['Branch coverage', '75%', 'Yes — PR fails below this'],
            ['Wallet/Coin module coverage', '95%', 'Yes — PR fails below this'],
            ['New code coverage (diff)', '90%', 'Yes — new code must be well-tested'],
            ['E2E critical paths', '100% passing', 'Yes — blocks production deploy'],
            ['Performance regression', '<10% latency increase', 'Warning (non-blocking)'],
          ]}
        />
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION: AIRA AI ENGINE
// ════════════════════════════════════════════════════════════════════
function AiraAiSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">AIRA AI Engine</h2>
      <p className="text-slate-400 mb-6">Recommendation algorithms, fraud scoring model, personalization engine, and ML training pipeline.</p>

      <InfoBox type="info">
        <strong>AIRA</strong> (AI Recommendation &amp; Analytics) lives in Rabtul and serves all apps. No app runs its own ML — every AI call goes through AIRA&apos;s centralized APIs.
      </InfoBox>

      <Expandable title="Core AI Capabilities" icon={Brain} defaultOpen>
        <DocTable
          headers={['Capability', 'Model', 'Input', 'Output', 'Latency Target']}
          rows={[
            ['Product Recommendations', 'Collaborative Filtering + Content-Based Hybrid', 'User history, preferences, browse behavior, similar users', 'Top 20 product recommendations per user', '<200ms (p99)'],
            ['Merchant Recommendations', 'Geo-aware collaborative filtering', 'Location, past visits, cuisine/category preferences, time of day', 'Top 10 nearby merchants ranked by relevance', '<150ms (p99)'],
            ['Offer Personalization', 'Multi-armed Bandit (Thompson Sampling)', 'User segment, tier, past redemptions, offer pool', 'Top 5 offers most likely to convert for user', '<100ms (p99)'],
            ['Search Ranking', 'Learning-to-Rank (LambdaMART)', 'Query text, user context, product features, click history', 'Re-ranked search results by predicted relevance', '<100ms (p99)'],
            ['Dynamic Pricing', 'Demand-supply regression + competitor analysis', 'Current demand, inventory levels, time, competitor prices', 'Suggested price adjustment (-10% to +20%)', '<300ms (p99)'],
            ['Fraud Scoring', 'Gradient Boosted Trees (XGBoost)', 'Device fingerprint, location, velocity, transaction patterns', 'Risk score 0.0 - 1.0 (>0.7 = auto-flag)', '<50ms (p99)'],
            ['Churn Prediction', 'Logistic Regression + Random Forest ensemble', 'Last activity, purchase frequency, engagement trend, support tickets', 'Churn probability 0.0 - 1.0 (>0.6 = trigger re-engagement)', 'Batch (daily)'],
            ['Demand Forecasting', 'Prophet + LSTM hybrid', 'Historical sales, seasonality, events, weather, promotions', '7/14/30 day demand forecast per product/store', 'Batch (daily)'],
          ]}
        />
      </Expandable>

      <Expandable title="Recommendation Pipeline" icon={ArrowRight}>
        <CodeBlock code={`User Opens App / Browses Category
  → AIRA API called: GET /api/aira/recommendations?user_id=X&context=home
  → Feature Store lookup (Redis): user profile, recent activity, preferences
  → Candidate Generation: pull 200 candidates from product/merchant pool
  → Filtering: remove out-of-stock, closed merchants, already purchased
  → Ranking: score each candidate with hybrid model
  → Re-ranking: apply business rules (boost Prive items for VIP, boost new merchants)
  → Diversification: ensure category variety in top 20
  → Response: return ranked list with scores + explanation tags
  → Client renders with "Recommended for You" / "Because you liked X"`} />
      </Expandable>

      <Expandable title="Fraud Scoring Model" icon={AlertTriangle}>
        <h4 className="text-white font-semibold text-sm mb-2">Features (Input Signals)</h4>
        <DocTable
          headers={['Feature', 'Type', 'Weight']}
          rows={[
            ['device_fingerprint_change', 'Boolean', 'High — new device on existing account'],
            ['location_distance_km', 'Numeric', 'High — distance from usual transaction location'],
            ['transaction_velocity', 'Numeric', 'High — transactions per hour'],
            ['amount_deviation', 'Numeric', 'Medium — deviation from user average spend'],
            ['time_of_day_anomaly', 'Boolean', 'Medium — transaction at unusual hour'],
            ['failed_otp_attempts', 'Numeric', 'Medium — recent failed login attempts'],
            ['account_age_days', 'Numeric', 'Low — newer accounts are riskier'],
            ['ip_reputation_score', 'Numeric', 'Medium — known proxy/VPN/datacenter IPs'],
            ['multiple_accounts_device', 'Boolean', 'High — same device linked to multiple accounts'],
            ['refund_rate_90d', 'Numeric', 'Medium — high refund rate indicates potential abuse'],
          ]}
        />
        <h4 className="text-white font-semibold text-sm mb-2 mt-4">Score Thresholds</h4>
        <DocTable
          headers={['Score Range', 'Action', 'Human Review']}
          rows={[
            ['0.0 - 0.3', 'Allow — no action', 'No'],
            ['0.3 - 0.5', 'Allow — log for monitoring', 'No'],
            ['0.5 - 0.7', 'Allow — flag for daily batch review', 'Optional'],
            ['0.7 - 0.9', 'Hold transaction — require additional verification', 'Required (Level 70+)'],
            ['0.9 - 1.0', 'Block transaction — freeze wallet', 'Required (Level 80+)'],
          ]}
        />
      </Expandable>

      <Expandable title="ML Training Pipeline" icon={Cpu}>
        <DocTable
          headers={['Stage', 'Schedule', 'Tool', 'Details']}
          rows={[
            ['Data Collection', 'Continuous', 'MongoDB → S3 Data Lake', 'User events, transactions, clicks logged to MongoDB, ETL to S3 daily'],
            ['Feature Engineering', 'Daily (2 AM)', 'Apache Spark', 'Compute user/product/merchant features, store in Feature Store (Redis)'],
            ['Model Training', 'Weekly (Sunday)', 'SageMaker', 'Retrain recommendation + fraud models on latest 90 days of data'],
            ['Model Evaluation', 'Post-training', 'Custom metrics', 'A/B test new model against current. Minimum: +2% CTR or -5% fraud rate'],
            ['Model Deployment', 'Post-evaluation', 'SageMaker Endpoint', 'Blue/green deployment. Shadow mode for 24h before taking traffic'],
            ['Monitoring', 'Continuous', 'CloudWatch + Custom', 'Track prediction latency, feature drift, model accuracy degradation'],
            ['Retraining Trigger', 'Automatic', 'CloudWatch Alarm', 'Auto-retrain if accuracy drops >5% or feature drift detected'],
          ]}
        />
      </Expandable>

      <Expandable title="AIRA API Endpoints" icon={Code}>
        <DocTable
          headers={['Endpoint', 'Method', 'Description']}
          rows={[
            ['/api/aira/recommendations', 'GET', 'Get personalized product/merchant recommendations'],
            ['/api/aira/offers', 'GET', 'Get personalized offer ranking for user'],
            ['/api/aira/search/rank', 'POST', 'Re-rank search results by predicted relevance'],
            ['/api/aira/fraud/score', 'POST', 'Score a transaction for fraud risk (real-time)'],
            ['/api/aira/churn/predict', 'GET', 'Get churn probability for user (cached daily)'],
            ['/api/aira/demand/forecast', 'GET', 'Get demand forecast for product/store (cached daily)'],
            ['/api/aira/pricing/suggest', 'POST', 'Get dynamic pricing suggestion for product'],
            ['/api/aira/segment/user', 'GET', 'Get AI-determined user segment (high-value, at-risk, etc.)'],
          ]}
        />
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION: EVENT BUS & WEBHOOKS
// ════════════════════════════════════════════════════════════════════
function EventBusSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Event Bus & Webhook Catalog</h2>
      <p className="text-slate-400 mb-6">Event types, payload schemas, retry policies, and inter-service communication patterns.</p>

      <Expandable title="Event Bus Architecture" icon={Network} defaultOpen>
        <CodeBlock code={`Producer (any service)
  → Event Bus (Redis Streams / SQS)
  → Consumer Groups (subscribed services)
  → Each consumer processes independently
  → Dead Letter Queue (DLQ) for failed events

Properties:
  - At-least-once delivery guarantee
  - Ordered within partition (user_id as partition key)
  - Events are immutable and append-only
  - 7-day retention in event store`} />
      </Expandable>

      <Expandable title="Event Catalog — Commerce" icon={ShoppingCart}>
        <DocTable
          headers={['Event', 'Producer', 'Consumers', 'Key Payload Fields']}
          rows={[
            ['order.created', 'Order Service', 'Merchant Notification, Analytics, Inventory', 'order_id, user_id, merchant_id, items[], total, payment_method'],
            ['order.confirmed', 'Merchant Action', 'User Notification, Analytics', 'order_id, merchant_id, estimated_time'],
            ['order.preparing', 'Merchant Action', 'User Notification, Kitchen Display', 'order_id, prep_started_at'],
            ['order.ready', 'Merchant Action', 'User Notification, Delivery Service', 'order_id, pickup_ready_at'],
            ['order.delivered', 'Delivery/Merchant', 'Coin Ledger, Analytics, Review Prompt', 'order_id, delivered_at, delivery_time_minutes'],
            ['order.cancelled', 'User/Merchant/Admin', 'Refund Service, Inventory, Analytics', 'order_id, cancelled_by, reason, refund_amount'],
            ['order.refunded', 'Refund Service', 'Wallet, User Notification, Analytics', 'order_id, refund_amount, refund_method, coins_reversed'],
            ['payment.success', 'Payment Gateway Webhook', 'Order Service, Wallet, Analytics', 'payment_id, order_id, amount, method, gateway_response'],
            ['payment.failed', 'Payment Gateway Webhook', 'Order Service, User Notification', 'payment_id, order_id, failure_reason, retry_eligible'],
          ]}
        />
      </Expandable>

      <Expandable title="Event Catalog — Wallet & Coins" icon={Coins}>
        <DocTable
          headers={['Event', 'Producer', 'Consumers', 'Key Payload Fields']}
          rows={[
            ['coins.earned', 'Coin Ledger', 'User Notification, Analytics, Gamification', 'user_id, amount, coin_type, source (purchase/referral/game), balance_after'],
            ['coins.spent', 'Coin Ledger', 'Analytics, Merchant Settlement', 'user_id, amount, coin_type, order_id, balance_after'],
            ['coins.expired', 'Coin Ledger (cron)', 'User Notification', 'user_id, amount, coin_type, expired_campaign_id'],
            ['wallet.topped_up', 'Payment Service', 'User Notification, Analytics', 'user_id, amount, method, balance_after'],
            ['wallet.frozen', 'Admin Action', 'User Notification, All Services', 'user_id, frozen_by, reason, admin_id'],
            ['tier.upgraded', 'Loyalty Engine', 'User Notification, Marketing', 'user_id, old_tier, new_tier, new_multiplier'],
            ['tier.downgraded', 'Loyalty Engine (cron)', 'User Notification', 'user_id, old_tier, new_tier, reason'],
          ]}
        />
      </Expandable>

      <Expandable title="Event Catalog — User & Merchant" icon={Users}>
        <DocTable
          headers={['Event', 'Producer', 'Consumers', 'Key Payload Fields']}
          rows={[
            ['user.registered', 'Auth Service', 'Welcome Coins, Analytics, CRM', 'user_id, phone, registration_source, referral_code'],
            ['user.kyc_verified', 'KYC Service', 'Wallet (upgrade limits), Notification', 'user_id, kyc_level, verification_method'],
            ['merchant.applied', 'Merchant Service', 'Admin Notification, Assignment Engine', 'merchant_id, business_name, city, category'],
            ['merchant.approved', 'Admin Action', 'Merchant Notification, Onboarding', 'merchant_id, approved_by, commission_rate'],
            ['merchant.suspended', 'Admin Action', 'Merchant Notification, Order Service (stop new orders)', 'merchant_id, suspended_by, reason'],
            ['review.created', 'Review Service', 'Merchant Notification, AIRA (retrain), Coin Award', 'review_id, user_id, merchant_id, rating, text'],
            ['referral.completed', 'Referral Service', 'Coin Ledger (award both), Analytics', 'referrer_id, referee_id, referral_code'],
          ]}
        />
      </Expandable>

      <Expandable title="Webhook Delivery" icon={Globe}>
        <h4 className="text-white font-semibold text-sm mb-2">Delivery Guarantees</h4>
        <DocTable
          headers={['Config', 'Value', 'Notes']}
          rows={[
            ['Delivery attempts', '5', 'Exponential backoff: 1m, 5m, 30m, 2h, 24h'],
            ['Timeout per attempt', '30 seconds', 'Response must be 2xx within timeout'],
            ['Signature', 'HMAC-SHA256', 'X-Webhook-Signature header with shared secret'],
            ['Idempotency', 'X-Event-ID header', 'Receivers must deduplicate by event ID'],
            ['Dead Letter Queue', 'After 5 failures', 'Event stored in DLQ, alert sent to ops team'],
            ['Replay', 'Manual via admin panel', 'Admin can replay events from last 7 days'],
          ]}
        />
        <h4 className="text-white font-semibold text-sm mb-2 mt-4">Webhook Payload Format</h4>
        <CodeBlock code={`{
  "event_id": "evt_abc123",
  "event_type": "order.delivered",
  "timestamp": "2026-03-15T14:30:00Z",
  "version": "1.0",
  "data": {
    "order_id": "ord_xyz789",
    "merchant_id": "merch_456",
    "total": 150.00,
    "currency": "AED"
  }
}`} />
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION: MONITORING & ALERTING
// ════════════════════════════════════════════════════════════════════
function MonitoringSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Monitoring & Alerting</h2>
      <p className="text-slate-400 mb-6">Key metrics per service, alert thresholds, SLA definitions, and observability stack.</p>

      <Expandable title="Observability Stack" icon={Activity} defaultOpen>
        <DocTable
          headers={['Tool', 'Purpose', 'Retention']}
          rows={[
            ['AWS CloudWatch', 'Infrastructure metrics (CPU, memory, network, disk)', '15 months'],
            ['Prometheus + Grafana', 'Application metrics (request rate, latency, error rate)', '90 days'],
            ['ELK Stack (Elasticsearch + Logstash + Kibana)', 'Centralized logging — all service logs', '30 days (hot), 90 days (warm)'],
            ['Jaeger / AWS X-Ray', 'Distributed tracing — trace requests across services', '7 days'],
            ['Sentry', 'Error tracking — crash reporting, stack traces, breadcrumbs', '90 days'],
            ['PagerDuty', 'Incident management — alert routing, escalation, on-call', 'Permanent'],
            ['Custom Dashboard', 'Business metrics — orders/min, GMV, user registrations', 'Permanent (aggregated)'],
          ]}
        />
      </Expandable>

      <Expandable title="Key Metrics per Service" icon={BarChart3}>
        <DocTable
          headers={['Service', 'Metric', 'Threshold (Warn)', 'Threshold (Critical)']}
          rows={[
            ['API Gateway', 'Request latency (p99)', '>500ms', '>2000ms'],
            ['API Gateway', 'Error rate (5xx)', '>1%', '>5%'],
            ['API Gateway', 'Requests per second', '>5000 rps', '>10000 rps'],
            ['Auth Service', 'Login success rate', '<95%', '<90%'],
            ['Auth Service', 'OTP delivery rate', '<98%', '<95%'],
            ['Payment Service', 'Payment success rate', '<95%', '<90%'],
            ['Payment Service', 'Settlement processing time', '>2 hours', '>6 hours'],
            ['Coin Ledger', 'Transaction processing time', '>200ms', '>1000ms'],
            ['Coin Ledger', 'Balance sync lag', '>5 seconds', '>30 seconds'],
            ['Order Service', 'Order processing time', '>30 seconds', '>2 minutes'],
            ['Search (ES)', 'Search latency (p95)', '>300ms', '>1000ms'],
            ['Redis', 'Memory usage', '>70%', '>90%'],
            ['PostgreSQL', 'Connection pool usage', '>70%', '>90%'],
            ['PostgreSQL', 'Replication lag', '>5 seconds', '>30 seconds'],
          ]}
        />
      </Expandable>

      <Expandable title="SLA Definitions" icon={CheckCircle}>
        <DocTable
          headers={['Service', 'SLA Target', 'Measurement Window', 'Consequence of Breach']}
          rows={[
            ['Platform Overall', '99.9% uptime', 'Monthly (max 43min downtime)', 'Post-mortem required, credits to affected merchants'],
            ['Payment Processing', '99.95% uptime', 'Monthly (max 22min downtime)', 'Immediate escalation to CTO, gateway failover'],
            ['Wallet Balance Accuracy', '100% consistency', 'Real-time', 'Any discrepancy triggers wallet freeze + investigation'],
            ['API Response Time', 'p95 < 500ms', 'Hourly rolling', 'Auto-scale triggers at threshold, alert at breach'],
            ['Order Notification', '<30 seconds to merchant', 'Per event', 'WebSocket fallback to push notification'],
            ['Settlement Processing', 'T+1 (1 business day)', 'Per settlement batch', 'Manual processing if automated fails'],
            ['Data Backup', 'RPO: 1 hour, RTO: 4 hours', 'Per incident', 'Automated restore from latest snapshot'],
          ]}
        />
      </Expandable>

      <Expandable title="Alert Escalation Policy" icon={Bell}>
        <DocTable
          headers={['Severity', 'Response Time', 'Notify', 'Examples']}
          rows={[
            ['P0 (Critical)', '<15 minutes', 'On-call engineer + CTO + PagerDuty', 'Payment service down, wallet inconsistency, data breach'],
            ['P1 (High)', '<30 minutes', 'On-call engineer + Team Lead', 'Error rate >5%, database replication lag, circuit breaker open'],
            ['P2 (Medium)', '<2 hours', 'Slack channel + assigned engineer', 'Latency degradation, memory pressure, failed cron jobs'],
            ['P3 (Low)', '<24 hours', 'Slack channel', 'Non-critical service degradation, log volume spike, certificate expiry (30 days)'],
          ]}
        />
      </Expandable>

      <Expandable title="Business Metrics Dashboard" icon={TrendingUp}>
        <DocTable
          headers={['Metric', 'Granularity', 'Alert Condition']}
          rows={[
            ['Orders per minute', 'Real-time', 'Drop >50% from rolling 1-hour average'],
            ['Gross Merchandise Value (GMV)', 'Hourly', 'Drop >30% from same hour yesterday'],
            ['New user registrations', 'Hourly', 'Drop >40% from same hour yesterday'],
            ['Payment failure rate', 'Real-time', 'Spike >10% (normal: 3-5%)'],
            ['Coin award rate', 'Daily', 'Spike >200% (possible coin abuse)'],
            ['Merchant offline rate', 'Real-time', '>20% of merchants showing offline'],
            ['App crash rate', 'Real-time', '>1% of sessions crashing'],
            ['Support ticket volume', 'Hourly', 'Spike >300% from baseline'],
          ]}
        />
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION: MOBILE DEPLOYMENT
// ════════════════════════════════════════════════════════════════════
function MobileDeploySection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Mobile Deployment</h2>
      <p className="text-slate-400 mb-6">App store process, OTA updates, crash reporting, and release management.</p>

      <Expandable title="App Store Presence" icon={Smartphone} defaultOpen>
        <DocTable
          headers={['App', 'Platform', 'Store', 'Bundle ID']}
          rows={[
            ['Nuqta (Customer)', 'iOS', 'Apple App Store', 'com.rtmn.nuqta'],
            ['Nuqta (Customer)', 'Android', 'Google Play Store', 'com.rtmn.nuqta'],
            ['BizOne (Merchant)', 'iOS', 'Apple App Store', 'com.rtmn.bizone'],
            ['BizOne (Merchant)', 'Android', 'Google Play Store', 'com.rtmn.bizone'],
            ['HQ Admin', 'Web Only', 'N/A (admin.rtmn.com)', 'N/A'],
          ]}
        />
      </Expandable>

      <Expandable title="Release Process" icon={GitBranch}>
        <div className="space-y-3">
          {[
            { step: '1', title: 'Feature Freeze', desc: 'No new features merged after freeze date. Only bug fixes and polish' },
            { step: '2', title: 'Release Branch', desc: 'Cut release/vX.Y.Z branch from develop. Version bump in package.json and build configs' },
            { step: '3', title: 'QA Regression', desc: 'Full regression test on release branch. Fix critical/high bugs only' },
            { step: '4', title: 'Beta Release', desc: 'TestFlight (iOS) + Internal Testing Track (Android). 48-hour soak period with internal team' },
            { step: '5', title: 'Staged Rollout', desc: 'Android: 5% → 25% → 50% → 100% over 7 days. iOS: phased release enabled' },
            { step: '6', title: 'Monitor', desc: 'Watch crash rates, ANRs, user reviews, business metrics. Halt rollout if crash rate >1%' },
            { step: '7', title: 'Full Release', desc: 'Complete rollout. Tag git release. Update changelog. Notify stakeholders' },
          ].map(s => (
            <div key={s.step} className="flex gap-3 p-3 bg-slate-800/30 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm">{s.step}</div>
              <div>
                <h4 className="font-semibold text-white text-sm">{s.title}</h4>
                <p className="text-slate-400 text-xs mt-0.5">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Expandable>

      <Expandable title="OTA (Over-The-Air) Updates" icon={Cloud}>
        <DocTable
          headers={['Update Type', 'Tool', 'When Used', 'User Impact']}
          rows={[
            ['JS Bundle Update', 'CodePush (App Center)', 'Bug fixes, UI tweaks, text changes', 'Silent — user sees changes on next app open'],
            ['Config Update', 'Remote Config (Firebase)', 'Feature flags, A/B tests, thresholds', 'Instant — no app restart needed'],
            ['Force Update', 'Custom API check', 'Security patches, breaking API changes', 'Blocking — user must update via store to continue'],
            ['Soft Update', 'Custom API check', 'New features, recommended upgrades', 'Non-blocking — dismissible prompt with "Update Later"'],
          ]}
        />
        <InfoBox type="action">
          <strong>Version Check:</strong> App calls <code className="text-[#c9a227]">GET /api/app/version</code> on launch. Response includes <code className="text-[#c9a227]">min_version</code> (force update if below), <code className="text-[#c9a227]">latest_version</code> (soft prompt), and <code className="text-[#c9a227]">codepush_key</code> for OTA.
        </InfoBox>
      </Expandable>

      <Expandable title="Crash Reporting & Stability" icon={AlertTriangle}>
        <DocTable
          headers={['Tool', 'Platform', 'Features']}
          rows={[
            ['Sentry', 'iOS + Android + Web', 'Stack traces, breadcrumbs, user context, release tracking, performance monitoring'],
            ['Firebase Crashlytics', 'iOS + Android', 'Real-time crash reporting, non-fatal error logging, ANR detection (Android)'],
            ['Custom Error Boundary', 'React Native', 'Graceful error UI, auto-report to Sentry, "Try Again" button, fallback screens'],
          ]}
        />
        <h4 className="text-white font-semibold text-sm mb-2 mt-4">Stability Targets</h4>
        <DocTable
          headers={['Metric', 'Target', 'Action if Breached']}
          rows={[
            ['Crash-free sessions', '>99.5%', 'Hotfix release within 24 hours'],
            ['ANR rate (Android)', '<0.5%', 'Profile main thread, fix blocking calls'],
            ['App launch time', '<2 seconds (cold)', 'Defer non-critical initialization'],
            ['Memory usage', '<200MB peak', 'Image cache limits, component unmounting'],
            ['Battery drain', '<5% per hour active use', 'Optimize background tasks, location polling'],
          ]}
        />
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION: NOTIFICATION SYSTEM
// ════════════════════════════════════════════════════════════════════
function NotificationSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Notification System</h2>
      <p className="text-slate-400 mb-6">Trigger catalog, templates, channels, scheduling, and A/B testing for notifications.</p>

      <Expandable title="Notification Channels" icon={Bell} defaultOpen>
        <DocTable
          headers={['Channel', 'Provider', 'Use Case', 'Delivery SLA']}
          rows={[
            ['Push Notification', 'Firebase Cloud Messaging (FCM) + APNs', 'Real-time alerts: orders, deals, coins earned', '<5 seconds'],
            ['SMS', 'Twilio / MSG91', 'OTP, critical alerts, order confirmations', '<10 seconds'],
            ['Email', 'SendGrid / AWS SES', 'Receipts, marketing, weekly digests, reports', '<60 seconds'],
            ['In-App', 'Custom (WebSocket + local storage)', 'Contextual messages, offers, system alerts', 'Instant (if app open)'],
            ['WhatsApp', 'WhatsApp Business API', 'Order updates, delivery tracking, support', '<30 seconds'],
          ]}
        />
      </Expandable>

      <Expandable title="Trigger Catalog — Transactional" icon={Zap}>
        <DocTable
          headers={['Trigger', 'Channels', 'Template', 'Priority']}
          rows={[
            ['OTP Verification', 'SMS', '"Your Nuqta code is {otp}. Valid for 5 minutes."', 'Critical'],
            ['Order Placed', 'Push + In-App', '"Order #{id} placed! {merchant} is preparing your order."', 'High'],
            ['Order Confirmed', 'Push + In-App', '"Great news! {merchant} confirmed your order #{id}."', 'High'],
            ['Order Ready', 'Push + SMS', '"Your order #{id} is ready for pickup/delivery!"', 'High'],
            ['Order Delivered', 'Push + In-App', '"Order #{id} delivered! Rate your experience for 30 coins."', 'Medium'],
            ['Payment Success', 'Push + Email', '"Payment of {amount} AED confirmed. {coins} coins earned!"', 'High'],
            ['Payment Failed', 'Push + SMS', '"Payment failed for order #{id}. Tap to retry."', 'Critical'],
            ['Coins Earned', 'Push + In-App', '"You earned {amount} ReZ coins! Balance: {balance}"', 'Medium'],
            ['Coins Expiring', 'Push + Email', '"{amount} promo coins expiring in {days} days. Use them now!"', 'Medium'],
            ['Tier Upgrade', 'Push + In-App + Email', '"Congratulations! You\'re now {tier} tier. {multiplier}x coin earnings!"', 'High'],
            ['Wallet Frozen', 'Push + SMS + Email', '"Your wallet has been temporarily frozen. Contact support."', 'Critical'],
            ['Refund Processed', 'Push + Email', '"Refund of {amount} AED processed for order #{id}."', 'High'],
          ]}
        />
      </Expandable>

      <Expandable title="Trigger Catalog — Marketing" icon={TrendingUp}>
        <DocTable
          headers={['Trigger', 'Channels', 'Audience', 'Scheduling']}
          rows={[
            ['Flash Sale', 'Push + In-App', 'All users in region', 'Scheduled — campaign start time'],
            ['Personalized Offer', 'Push', 'AIRA-segmented users', 'Optimal send time per user (AIRA)'],
            ['Re-engagement', 'Push + Email + SMS', 'Users inactive >7 days', 'Automated — 7d, 14d, 30d cadence'],
            ['Weekly Digest', 'Email', 'All opted-in users', 'Every Monday 9 AM local time'],
            ['Birthday Offer', 'Push + In-App', 'Users with DOB filled', 'On birthday, 9 AM local time'],
            ['New Merchant Near You', 'Push', 'Users within 5km radius', 'When merchant goes live'],
            ['Price Drop', 'Push + In-App', 'Users who wishlisted item', 'When price decreases >10%'],
            ['Cart Abandonment', 'Push', 'Users with items in cart >2 hours', '2 hours, 24 hours, 72 hours'],
            ['Review Prompt', 'In-App', 'Users after 3rd completed order', 'After delivery confirmed'],
          ]}
        />
      </Expandable>

      <Expandable title="User Preferences & Quiet Hours" icon={Settings}>
        <DocTable
          headers={['Setting', 'Options', 'Default']}
          rows={[
            ['Push Notifications', 'On / Off', 'On'],
            ['Email Notifications', 'On / Off', 'On'],
            ['SMS Notifications', 'On / Off', 'On (transactional only)'],
            ['Marketing Notifications', 'On / Off', 'On (opt-out anytime)'],
            ['Order Updates', 'On / Off', 'On (cannot disable)'],
            ['Deal Alerts', 'On / Off', 'On'],
            ['Coin Updates', 'On / Off', 'On'],
            ['Quiet Hours', 'Start time / End time', 'Off (user sets, e.g., 10 PM - 8 AM)'],
            ['Frequency Cap', 'Max notifications per day', '10 (marketing only, transactional unlimited)'],
          ]}
        />
        <InfoBox type="info">
          <strong>Quiet Hours:</strong> During quiet hours, marketing notifications are queued and delivered when the window opens. Transactional notifications (OTP, order updates, payment) are NEVER suppressed.
        </InfoBox>
      </Expandable>

      <Expandable title="Notification A/B Testing" icon={BarChart3}>
        <DocTable
          headers={['Element', 'Variants', 'Metric']}
          rows={[
            ['Title text', '2-4 variants (e.g., urgency vs. benefit)', 'Open rate'],
            ['Send time', 'Morning vs. afternoon vs. evening', 'Open rate + click-through'],
            ['Channel', 'Push only vs. Push + Email vs. Push + SMS', 'Conversion rate'],
            ['CTA text', '"Shop Now" vs. "See Deals" vs. "Claim Offer"', 'Click-through rate'],
            ['Personalization', 'Generic vs. name-personalized vs. offer-personalized', 'Conversion rate'],
            ['Image', 'With banner vs. without vs. product image', 'Open rate'],
          ]}
        />
        <p className="text-slate-400 text-sm mt-2">A/B tests configured in HQ Admin → Campaigns. Traffic split configurable (default: 50/50). Minimum sample: 1,000 sends per variant. Statistical significance: 95% confidence.</p>
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION: PRIVE VIP PROGRAM
// ════════════════════════════════════════════════════════════════════
function PriveVipSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Prive VIP Program</h2>
      <p className="text-slate-400 mb-6">141 pages. Premium subscription tiers, partner categories, benefits matrix, and the complete Prive experience.</p>

      <Expandable title="Subscription Tiers" icon={Star} defaultOpen>
        <DocTable
          headers={['Tier', 'Price (Monthly)', 'Price (Annual)', 'Coin Multiplier', 'Key Benefits']}
          rows={[
            ['Prive Lite', 'AED 29/month', 'AED 249/year (save 28%)', '1.5x', 'Basic exclusive offers, priority customer support, monthly surprise reward'],
            ['Prive Plus', 'AED 59/month', 'AED 499/year (save 30%)', '2.0x', 'All Lite + premium offers, free delivery on orders >AED 50, early access to sales, birthday bonus 500 coins'],
            ['Prive Premium', 'AED 99/month', 'AED 849/year (save 29%)', '3.0x', 'All Plus + VIP concierge, unlimited free delivery, exclusive events, partner lounge access, dedicated support line'],
          ]}
        />
        <InfoBox type="info">
          <strong>Plan durations:</strong> 1 month, 3 months, 6 months, 12 months. Auto-renew by default. Users can cancel anytime — benefits remain until period end. Stored in <code className="text-[#c9a227]">prive_subscriptions</code> table.
        </InfoBox>
      </Expandable>

      <Expandable title="Prive Benefits Matrix" icon={CheckCircle}>
        <DocTable
          headers={['Benefit', 'Lite', 'Plus', 'Premium']}
          rows={[
            ['Coin Earn Multiplier', '1.5x', '2.0x', '3.0x'],
            ['Exclusive Offers', 'Basic pool', 'Full pool', 'Full pool + VIP-only'],
            ['Free Delivery', 'No', 'Orders >AED 50', 'All orders'],
            ['Priority Support', 'Email only', 'Chat + Email', 'Dedicated phone line'],
            ['Early Access to Sales', 'No', '24h early', '48h early'],
            ['Birthday Bonus', '100 coins', '500 coins', '1,000 coins'],
            ['Monthly Surprise', '1 random reward', '2 random rewards', '3 premium rewards'],
            ['Partner Lounge Access', 'No', 'No', 'Yes (airport + mall lounges)'],
            ['Exclusive Events', 'No', 'Select events', 'All VIP events + +1 guest'],
            ['Concierge Service', 'No', 'No', 'WhatsApp concierge for bookings/queries'],
            ['Cashback Boost', '+2%', '+5%', '+10%'],
            ['Price Lock', '1 item/month', '3 items/month', 'Unlimited'],
            ['Return Window', 'Standard (7 days)', 'Extended (14 days)', 'Extended (30 days)'],
          ]}
        />
      </Expandable>

      <Expandable title="141 Prive Pages Breakdown" icon={LayoutGrid}>
        <DocTable
          headers={['Category', 'Pages', 'Content']}
          rows={[
            ['Prive Home & Dashboard', '12', 'Membership status, benefits overview, savings tracker, next reward countdown'],
            ['Prive Offers & Deals', '25', 'Exclusive offer catalog, partner deals, flash VIP sales, seasonal specials'],
            ['Prive Merchants', '20', 'Partner merchant directory, exclusive discounts per merchant, VIP menu items'],
            ['Prive Events', '15', 'VIP events calendar, RSVP, event details, past events gallery'],
            ['Prive Rewards', '18', 'Monthly surprises, scratch cards, spin wheel, bonus challenges'],
            ['Prive Concierge', '10', 'Chat interface, booking requests, recommendation requests, history'],
            ['Prive Lounge', '8', 'Lounge locations, access QR code, amenities, check-in'],
            ['Prive Profile', '8', 'Membership details, renewal, plan change, payment history, cancel'],
            ['Prive Partner Categories', '15', 'Dining, Beauty, Fashion, Travel, Entertainment, Wellness, Electronics'],
            ['Prive Onboarding', '5', 'Plan comparison, payment, welcome, benefits tour, first exclusive offer'],
            ['Prive Settings', '5', 'Notification preferences, auto-renew toggle, plan management, referral code'],
          ]}
        />
      </Expandable>

      <Expandable title="Partner Categories" icon={Heart}>
        <DocTable
          headers={['Category', 'Discount Range', 'Partner Examples', 'Prive Exclusive Perks']}
          rows={[
            ['Fine Dining', '10-25%', 'Premium restaurants, celebrity chef venues', 'Priority reservations, complimentary appetizer'],
            ['Beauty & Wellness', '15-30%', 'Luxury salons, spas, skincare clinics', 'Free add-on service, priority booking'],
            ['Fashion & Luxury', '10-20%', 'Designer boutiques, premium brands', 'Early access to collections, personal stylist'],
            ['Travel & Hotels', '15-25%', 'Hotels, airlines, car rentals', 'Room upgrades, late checkout, lounge access'],
            ['Entertainment', '10-20%', 'Cinemas, theme parks, concerts', 'Skip-the-line, premium seating'],
            ['Health & Fitness', '15-25%', 'Gyms, yoga studios, nutritionists', 'Free trial sessions, personalized plans'],
            ['Electronics', '5-15%', 'Apple resellers, Samsung stores, gadget shops', 'Extended warranty, priority repair'],
            ['Grocery & Essentials', '5-10%', 'Premium grocery, organic stores', 'Free delivery, exclusive product launches'],
          ]}
        />
      </Expandable>

      <Expandable title="Prive Merchant Integration" icon={Store}>
        <p className="text-slate-300 text-sm mb-3">Merchants opt into Prive via BizOne dashboard. Stored in <code className="text-[#c9a227]">prive_merchants</code> table.</p>
        <DocTable
          headers={['Field', 'Description']}
          rows={[
            ['exclusive_discount_percent', 'Additional discount for Prive members (on top of regular offers)'],
            ['coin_multiplier', 'Additional coin earning multiplier for Prive transactions at this merchant'],
            ['featured_in_prive', 'Whether merchant appears in Prive exclusive catalog'],
            ['prive_menu_items', 'JSONB — special menu items / services available only to Prive members'],
            ['prive_perks', 'JSONB — custom perks (priority seating, free add-on, etc.)'],
          ]}
        />
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION: WASIL VERTICAL APPS
// ════════════════════════════════════════════════════════════════════
function WasilVerticalsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Wasil Vertical Apps</h2>
      <p className="text-slate-400 mb-6">Category-specific apps built on the Nuqta platform: Dinezy, Grocify, Glowzy, MediEarn, and more.</p>

      <InfoBox type="info">
        <strong>Architecture Principle:</strong> Wasil vertical apps are NOT separate codebases. They are themed entry points into the same Nuqta platform with category-specific UI, curated merchants, and tailored features. Same backend, same wallet, same coins.
      </InfoBox>

      <Expandable title="Dinezy (Food & Dining)" icon={Store} defaultOpen>
        <DocTable
          headers={['Feature', 'Description']}
          rows={[
            ['Restaurant Discovery', 'Geo-based restaurant finder with cuisine filters, ratings, price range, dietary options (halal, vegan, gluten-free)'],
            ['Menu Browsing', 'Full digital menus with photos, descriptions, allergen info, nutrition data, chef recommendations'],
            ['Table Reservation', 'Real-time table availability, party size, special requests, confirmation, reminders'],
            ['Dine-in Ordering', 'QR scan at table → browse menu → order → pay. No waiter needed for ordering'],
            ['Delivery', 'Integrated delivery with Wasil logistics. Real-time tracking, estimated time, driver contact'],
            ['Takeaway/Pickup', 'Pre-order for pickup, queue number display, ready notification'],
            ['Split Bill', 'Split payment among group members. Each member pays their share via Nuqta wallet'],
            ['Loyalty', 'Restaurant-specific stamp cards, visit streaks, dish-specific rewards (e.g., 10th coffee free)'],
            ['Reviews & Ratings', 'Post-meal review prompt, dish-level ratings, photo reviews, verified diner badge'],
            ['Exclusive: Chef\'s Table', 'Prive members can book exclusive dining experiences with partner chefs'],
          ]}
        />
        <p className="text-slate-400 text-sm mt-2"><strong className="text-white">Target Market:</strong> UAE restaurant scene (estimated 12,000+ restaurants in Dubai alone). Focus on independent restaurants and mid-range chains.</p>
      </Expandable>

      <Expandable title="Grocify (Grocery & Essentials)" icon={ShoppingCart}>
        <DocTable
          headers={['Feature', 'Description']}
          rows={[
            ['Quick Commerce', '<30 minute delivery from dark stores and partner supermarkets'],
            ['Smart Lists', 'AI-powered shopping lists based on purchase history, auto-suggest reorders'],
            ['Subscription Baskets', 'Weekly/monthly recurring orders for essentials (milk, bread, eggs). Auto-delivery schedule'],
            ['Freshness Guarantee', 'Quality rating for fresh produce. Refund if below standard. Expiry date visibility'],
            ['Price Comparison', 'Compare prices across partner stores for same product. Best deal highlighting'],
            ['Bulk Buying', 'Wholesale pricing for bulk purchases. Group buying with neighbors for better rates'],
            ['Dietary Filters', 'Filter by organic, halal, vegan, sugar-free, keto, low-sodium. Nutritional info per product'],
            ['Recipe Integration', 'Recipes with "Add all ingredients to cart" button. Meal planning with auto-generated shopping list'],
            ['Loyalty', 'Category-specific earn rates (2x on fresh produce, 1.5x on pantry). Weekly spend targets for bonus coins'],
            ['Smart Reorder', 'One-tap reorder of previous orders. AI predicts when you will run out of staples'],
          ]}
        />
      </Expandable>

      <Expandable title="Glowzy (Beauty & Wellness)" icon={Heart}>
        <DocTable
          headers={['Feature', 'Description']}
          rows={[
            ['Salon Discovery', 'Find nearby salons/spas with specialization filters (hair, nails, skincare, massage), ratings, price range'],
            ['Service Booking', 'Book specific services with preferred stylist/therapist. Time slot selection, duration, pricing'],
            ['Package Deals', 'Multi-service packages at discounted rates (e.g., haircut + facial + manicure)'],
            ['Beauty Products', 'Shop beauty products directly. Salon-recommended products linked to services'],
            ['Virtual Try-On', 'AR-powered try-on for makeup, hair colors, nail designs (future phase)'],
            ['Skin Analysis', 'AI-powered skin analysis from selfie. Product and service recommendations based on skin type'],
            ['Loyalty', 'Visit streaks for regular appointments, service-specific rewards, referral bonuses for bringing friends'],
            ['Reviews', 'Stylist-level ratings and reviews, before/after photos, verified customer badge'],
            ['Memberships', 'Salon membership plans (e.g., unlimited blowouts for AED 299/month)'],
            ['Home Services', 'Book beauticians to come to your location. Verified professionals, safety protocols'],
          ]}
        />
      </Expandable>

      <Expandable title="MediEarn (Healthcare)" icon={Shield}>
        <DocTable
          headers={['Feature', 'Description']}
          rows={[
            ['Pharmacy Finder', 'Locate nearby pharmacies with medication availability check. 24-hour pharmacy filter'],
            ['Prescription Upload', 'Upload prescription photo → OCR extraction → pharmacist review → dispense or deliver'],
            ['Medicine Delivery', 'Prescription and OTC medicine delivery within 2 hours. Cold chain for temperature-sensitive drugs'],
            ['Health Products', 'Vitamins, supplements, health devices, personal care. Category-specific recommendations'],
            ['Doctor Appointment', 'Book appointments with clinics/doctors. Specialty filter, insurance compatibility (future)'],
            ['Health Records', 'Store prescriptions and reports digitally. Share with doctors securely'],
            ['Medication Reminders', 'Set reminders for recurring medications. Auto-reorder when running low'],
            ['Insurance Integration', 'Link health insurance card. Auto-apply co-pay at checkout (future)'],
            ['Loyalty', 'Earn coins on all health purchases. Higher earn rates for chronic medication orders'],
            ['Wellness Programs', 'Partner wellness programs — gym memberships, diet plans, health checkup packages'],
          ]}
        />
      </Expandable>

      <Expandable title="Other Verticals" icon={Globe}>
        <DocTable
          headers={['App', 'Category', 'Key Features']}
          rows={[
            ['Fitzy', 'Fitness & Sports', 'Gym discovery, class booking, trainer marketplace, workout tracking, fitness challenges with coin rewards'],
            ['Petzy', 'Pet Care', 'Pet store finder, vet appointments, grooming services, pet food delivery, pet-friendly venue listings'],
            ['Eduzy', 'Education', 'Tutor marketplace, course discovery, study material delivery, student discounts, campus rewards'],
            ['Homezy', 'Home Services', 'Plumber, electrician, AC repair, cleaning. Vetted professionals, upfront pricing, booking, tracking'],
            ['Autozy', 'Automotive', 'Car wash, mechanic, spare parts, car accessories. Service booking, maintenance reminders, loyalty'],
            ['Fashionzy', 'Fashion', 'Fashion store discovery, outfit recommendations, personal stylist, try-before-you-buy, style challenges'],
          ]}
        />
        <InfoBox type="action">
          <strong>PM Note:</strong> Each vertical app shares the same backend, wallet, and coin system. They are themed React Native builds with category-specific: color scheme, home screen layout, curated merchant list, and feature prioritization. A new vertical can be launched in ~2 weeks.
        </InfoBox>
      </Expandable>

      <Expandable title="Vertical App Architecture" icon={Layers}>
        <CodeBlock code={`Shared Layer (100% reused):
  ├── Authentication (Rabtul)
  ├── Wallet & Coins (Rabtul)
  ├── Payment Processing (Rabtul)
  ├── Search & Discovery (Elasticsearch)
  ├── Notifications (Notification Hub)
  └── Analytics (MongoDB + AIRA)

Category Layer (~80% shared, 20% custom):
  ├── Merchant Profiles (category-specific fields)
  ├── Product/Service Catalog (schema varies by category)
  ├── Booking System (services vs. products vs. table reservation)
  ├── Delivery/Fulfillment (varies: instant, scheduled, in-store)
  └── Loyalty Rules (category-specific earn rates and challenges)

UI Layer (~60% shared, 40% custom):
  ├── Theme (colors, fonts, icons per vertical)
  ├── Home Screen Layout (curated for category)
  ├── Browse/Filter UI (category-specific filters)
  ├── Checkout Flow (varies by purchase type)
  └── Post-Purchase (review prompts, reorder, loyalty)`} />
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION: REFERRAL & AMBASSADOR
// ════════════════════════════════════════════════════════════════════
function ReferralSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Referral & Ambassador Program</h2>
      <p className="text-slate-400 mb-6">Campus ambassador program full spec, referral mechanics, fraud prevention, and commission tiers.</p>

      <Expandable title="User Referral System" icon={Users} defaultOpen>
        <h4 className="text-white font-semibold text-sm mb-2">How It Works</h4>
        <CodeBlock code={`User A shares referral code/link → User B registers with code
  → User B completes first purchase → Referral "completed"
  → User A earns: 100 ReZ coins (referrer reward)
  → User B earns: 50 ReZ coins (referee reward)
  → Both notified via push + in-app`} />
        <h4 className="text-white font-semibold text-sm mb-2 mt-4">Referral Configuration (Rule Engine)</h4>
        <DocTable
          headers={['Parameter', 'Default', 'Configurable By']}
          rows={[
            ['Referrer Reward', '100 ReZ coins', 'Super Admin (Rule Engine)'],
            ['Referee Reward', '50 ReZ coins', 'Super Admin (Rule Engine)'],
            ['Completion Condition', 'First completed purchase by referee', 'Super Admin'],
            ['Max Referrals per User', '50 per month', 'Super Admin'],
            ['Referral Expiry', '30 days from code share', 'Super Admin'],
            ['Minimum Purchase', 'AED 10 (referee first order)', 'Super Admin'],
            ['Double Reward Campaign', 'Off (2x rewards during campaigns)', 'Admin (Level 80+)'],
          ]}
        />
        <InfoBox type="info">
          Referral data stored in <code className="text-[#c9a227]">referrals</code> table: referrer_id, referee_id, referral_code, status (pending/completed/expired), completion_conditions (JSONB), coins_awarded.
        </InfoBox>
      </Expandable>

      <Expandable title="Referral Fraud Prevention" icon={AlertTriangle}>
        <DocTable
          headers={['Fraud Signal', 'Detection Method', 'Action']}
          rows={[
            ['Self-referral', 'Same device fingerprint on referrer + referee accounts', 'Block reward, flag both accounts'],
            ['Referral farming', 'Same user creating multiple accounts with different phones', 'Device fingerprint + IP correlation. Block if >3 accounts from same device'],
            ['Fake purchases', 'Referee makes minimum purchase then immediately refunds', '72-hour hold on referral rewards. If order refunded, reverse coins'],
            ['Bot registrations', 'Rapid sequential registrations from similar IP ranges', 'CAPTCHA challenge, rate limit: max 10 referrals activated per IP per day'],
            ['Ring trading', 'Group of users referring each other in a circle', 'Graph analysis on referral network. Flag clusters with mutual referrals'],
            ['Disposable phone numbers', 'Known virtual/disposable number providers', 'Block registration from known VoIP ranges. Require carrier verification'],
          ]}
        />
        <InfoBox type="warning">
          <strong>Safety Rule:</strong> All referral rewards are held for 72 hours before crediting. If the referee&apos;s first order is cancelled/refunded during hold period, rewards are NOT credited. Fraud team reviews flagged referrals daily.
        </InfoBox>
      </Expandable>

      <Expandable title="Campus Ambassador Program" icon={Star}>
        <h4 className="text-white font-semibold text-sm mb-2">Program Overview</h4>
        <p className="text-slate-300 text-sm mb-4">University students represent Nuqta on campus. They onboard merchants, recruit users, and run local promotions — earning commissions and building their profile.</p>

        <h4 className="text-white font-semibold text-sm mb-2">Ambassador Tiers</h4>
        <DocTable
          headers={['Tier', 'Requirement', 'Commission Rate', 'Perks']}
          rows={[
            ['Bronze Ambassador', '0-25 referrals', '5% of first-order value', 'Ambassador badge, leaderboard access, campus swag kit'],
            ['Silver Ambassador', '26-100 referrals', '7% of first-order value', 'All Bronze + priority support, monthly bonus (500 coins), featured profile'],
            ['Gold Ambassador', '101-500 referrals', '10% of first-order value', 'All Silver + direct dashboard access, event organizing credits, mentorship'],
            ['Platinum Ambassador', '500+ referrals', '12% of first-order value + 2% recurring', 'All Gold + campus manager title, stipend, company merchandise, internship opportunity'],
          ]}
        />

        <h4 className="text-white font-semibold text-sm mb-2 mt-4">Ambassador Dashboard Features</h4>
        <DocTable
          headers={['Feature', 'Description']}
          rows={[
            ['Referral Tracking', 'Real-time count of signups, activations, first purchases from their code'],
            ['Commission Ledger', 'Detailed breakdown: referral → purchase → commission earned → payout'],
            ['Leaderboard', 'Campus-level and national leaderboard. Monthly prizes for top 10'],
            ['Performance Analytics', 'Conversion funnel: shares → clicks → signups → first purchase'],
            ['Payout Requests', 'Monthly payout to bank/UPI. Minimum: AED 50. Processing: T+3'],
            ['Marketing Materials', 'Download posters, QR code standees, social media templates, stories'],
            ['Event Tools', 'Create campus events, track attendance, photo uploads, event reports'],
          ]}
        />

        <h4 className="text-white font-semibold text-sm mb-2 mt-4">Ambassador Data Model</h4>
        <DocTable
          headers={['Table', 'Key Fields']}
          rows={[
            ['student_ambassadors', 'user_id FK, college_id FK, ambassador_code, commission_rate, total_referrals, total_earned, performance_tier, payout_bank_details, status'],
            ['colleges', 'name, city, campus_manager (admin user FK), student_count, partnership_status, ambassador_count, total_referrals_from_campus'],
            ['ambassador_payouts', 'ambassador_id FK, amount, period (month/year), status (pending/processing/paid/failed), bank_reference'],
          ]}
        />
      </Expandable>

      <Expandable title="Merchant Referral Program" icon={Store}>
        <p className="text-slate-300 text-sm mb-3">Existing merchants can refer other businesses to join the platform.</p>
        <DocTable
          headers={['Parameter', 'Value']}
          rows={[
            ['Referrer Reward', 'AED 500 in ReZ coins (credited when referred merchant completes onboarding + first 10 orders)'],
            ['Referred Merchant Benefit', '0% commission for first month'],
            ['Max Referrals', '10 per merchant per quarter'],
            ['Eligibility', 'Merchant must be active for >90 days with >50 completed orders'],
            ['Tracking', 'Unique merchant referral code. Stored in merchants.referred_by field'],
          ]}
        />
      </Expandable>

      <Expandable title="Referral Analytics (Admin View)" icon={BarChart3}>
        <DocTable
          headers={['Metric', 'Description', 'Dashboard Location']}
          rows={[
            ['Total Referral Codes Shared', 'All-time + trend', 'Admin → Growth → Referrals'],
            ['Activation Rate', 'Percentage of shared codes that result in signup', 'Admin → Growth → Referrals'],
            ['First Purchase Rate', 'Percentage of referred users who complete first purchase', 'Admin → Growth → Referrals'],
            ['Average Referral LTV', 'Lifetime value of referred users vs. organic users', 'Admin → Analytics → User'],
            ['Top Referrers', 'Users with most successful referrals', 'Admin → Growth → Leaderboard'],
            ['Fraud Flagged', 'Referrals flagged by fraud detection', 'Admin → Growth → Fraud Review'],
            ['Ambassador Performance', 'Per-campus breakdown of ambassador metrics', 'Admin → Growth → Ambassadors'],
            ['Referral Cost', 'Total coins awarded via referrals / total referred GMV', 'Admin → Finance → Marketing ROI'],
          ]}
        />
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// PRODUCT DASHBOARDS — Admin (RTMN HQ) + Merchant/Partner per Product
// ════════════════════════════════════════════════════════════════════
function ProductDashboardsSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Product Dashboards</h2>
        <p className="text-slate-400 mb-2">Every product in the RTMN ecosystem has two dashboard layers:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-1"><Shield className="w-4 h-4 text-red-400" /><span className="text-red-400 font-semibold text-sm">RTMN HQ Admin</span></div>
            <p className="text-slate-400 text-xs">Platform-level controls, approvals, compliance, revenue management, and system configuration.</p>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-1"><Store className="w-4 h-4 text-blue-400" /><span className="text-blue-400 font-semibold text-sm">Merchant / Partner Dashboard</span></div>
            <p className="text-slate-400 text-xs">Self-service portal for merchants, partners, organizers, drivers, brokers, etc. Built on BizOne OS.</p>
          </div>
        </div>
      </div>

      {/* ── NuqtaPay ── */}
      <Expandable title="NuqtaPay — Payment Processing" icon={CreditCard} defaultOpen={false}>
        <div className="space-y-4">
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
            <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2"><Shield className="w-4 h-4" /> RTMN HQ Admin</h4>
            <DocTable headers={['Module', 'Features', 'Access']} rows={[
              ['MDR Configuration', 'Set per-category merchant discount rates (1.5–3%)', 'Super Admin'],
              ['Fraud Detection', 'ML-based transaction scoring, velocity checks, device fingerprinting', 'Risk Team'],
              ['Settlement Engine', 'T+1 / T+2 settlement cycles, batch processing, bank reconciliation', 'Finance'],
              ['Merchant KYC', 'Document verification, bank account validation, compliance checks', 'Compliance'],
              ['Dispute Resolution', 'Chargeback management, evidence collection, arbitration workflow', 'Support'],
              ['Gateway Health', 'Monitor Razorpay/Paytm/PhonePe uptime, auto-failover routing', 'DevOps'],
              ['Revenue Dashboard', 'Total TPV, MDR revenue, settlement float income, refund costs', 'C-Suite'],
              ['Compliance', 'PCI-DSS audit logs, RBI mandate compliance, data retention policies', 'Legal'],
            ]} />
          </div>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <h4 className="text-blue-400 font-semibold mb-3 flex items-center gap-2"><Store className="w-4 h-4" /> Merchant Dashboard</h4>
            <DocTable headers={['Tab', 'Features', 'Details']} rows={[
              ['Overview', 'Live transaction feed, today\'s volume, success rate', 'Real-time WebSocket updates'],
              ['Transactions', 'Search/filter by date, status, amount; export CSV/PDF', 'Retention: 2 years'],
              ['Analytics', 'Hourly/daily/monthly volume charts, payment method breakdown', 'Compare periods'],
              ['Settlement', 'Payout history, pending settlements, bank account management', 'T+1 default cycle'],
              ['Refund Management', 'Initiate full/partial refunds, track refund status', 'Auto-credit to customer'],
              ['Chargeback', 'View disputes, upload evidence, track resolution', 'SLA: 7-day response'],
              ['Multi-location', 'Per-store transaction breakdown, location-level analytics', 'Up to 50 locations'],
              ['Integration', 'API keys, webhook configuration, SDK documentation', 'Test/Live mode toggle'],
            ]} />
          </div>
        </div>
      </Expandable>

      {/* ── Adzy ── */}
      <Expandable title="Adzy — Advertising & Marketing" icon={Eye} defaultOpen={false}>
        <div className="space-y-4">
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
            <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2"><Shield className="w-4 h-4" /> RTMN HQ Admin</h4>
            <DocTable headers={['Module', 'Features', 'Access']} rows={[
              ['Ad Review Queue', 'Approve/reject ad creatives, content policy enforcement', 'Content Team'],
              ['Platform Pricing', 'Set CPM/CPC/CPA rates per category, premium placement pricing', 'Revenue'],
              ['Audience Segments', 'Global audience pools, 1st-party data management, segment builder', 'Data Team'],
              ['Ad Inventory', 'Manage placements across Nuqta, BizOne, partner apps', 'Product'],
              ['Revenue Reports', 'Total ad spend, fill rates, eCPM, advertiser LTV', 'Finance'],
              ['Agency Console', 'Multi-client management, API access, white-label options', 'Partnerships'],
              ['Brand Safety', 'Category exclusions, keyword blocking, content adjacency rules', 'Compliance'],
              ['Attribution', 'Cross-platform attribution models, conversion windows, pixel management', 'Analytics'],
            ]} />
          </div>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <h4 className="text-blue-400 font-semibold mb-3 flex items-center gap-2"><Store className="w-4 h-4" /> Merchant Ads Manager</h4>
            <DocTable headers={['Tab', 'Features', 'Details']} rows={[
              ['Campaign Dashboard', 'Active/paused/completed campaigns, spend tracking, KPI cards', 'Real-time metrics'],
              ['Campaign Builder', '6-step wizard: Objective → Audience → Placement → Creative → Budget → Review', 'Draft auto-save'],
              ['Audience Builder', 'Demographics, interests, purchase history, lookalike targeting', '12+ filter dimensions'],
              ['Performance Analytics', 'Impressions, clicks, CTR, conversions, ROAS by campaign/ad set', 'Exportable reports'],
              ['A/B Testing', 'Split test creatives, audiences, placements with statistical significance', 'Auto-winner selection'],
              ['Attribution Reports', 'View-through, click-through, multi-touch attribution per campaign', '7/14/28-day windows'],
              ['Creative Studio', 'Template library, image/video editor, AI copy suggestions', 'Brand asset management'],
              ['Budget Optimizer', 'Auto-allocate budget to best-performing ad sets, dayparting rules', 'Min/max daily limits'],
              ['Competitor Insights', 'Category benchmarks, share of voice, trending ad formats', 'Anonymized data'],
              ['Settings', 'Billing, payment methods, team access, notification preferences', 'Invoice download'],
            ]} />
          </div>
        </div>
      </Expandable>

      {/* ── Eventora ── */}
      <Expandable title="Eventora — Events & Ticketing" icon={Star} defaultOpen={false}>
        <div className="space-y-4">
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
            <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2"><Shield className="w-4 h-4" /> RTMN HQ Admin</h4>
            <DocTable headers={['Module', 'Features', 'Access']} rows={[
              ['Event Approval', 'Review/approve event listings, content moderation, featured events', 'Content Team'],
              ['Venue Management', 'Venue registry, capacity management, interactive seat maps', 'Operations'],
              ['Commission Tiers', 'Set per-category commission rates (5–15%), volume discounts', 'Finance'],
              ['Fraud Prevention', 'Ticket scalping detection, bulk purchase limits, bot protection', 'Risk Team'],
              ['Settlement', 'Post-event settlement, refund pool management, organizer payouts', 'Finance'],
              ['Insurance', 'Event cancellation insurance, weather policies, force majeure rules', 'Legal'],
              ['Analytics', 'Platform-wide event metrics, category trends, seasonal patterns', 'Strategy'],
              ['Partner Integration', 'Venue partner APIs, AV equipment providers, catering integrations', 'Partnerships'],
            ]} />
          </div>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <h4 className="text-blue-400 font-semibold mb-3 flex items-center gap-2"><Store className="w-4 h-4" /> Event Organizer Dashboard</h4>
            <DocTable headers={['Tab', 'Features', 'Details']} rows={[
              ['Events Overview', 'All events list, status filters, quick stats per event', 'Draft/Live/Past/Cancelled'],
              ['Event Creation Wizard', '6-step: Details → Venue/Date → Tickets → Add-ons → Promotions → Review', 'Multi-day/recurring support'],
              ['Real-time Sales', 'Live ticket sales counter, revenue ticker, conversion funnel', 'WebSocket updates'],
              ['Attendee Management', 'Guest list, email/SMS blast, VIP tagging, dietary preferences', 'CSV import/export'],
              ['Analytics', 'Sales by ticket type, traffic sources, promo code performance', 'Comparison with past events'],
              ['Check-in System', 'QR scanner, NFC tap, manual search, real-time attendance count', 'Offline mode support'],
              ['Communications', 'Pre/post event emails, push notifications, SMS reminders', 'Template library'],
              ['Promo Codes', 'Create discount codes, early-bird pricing, group discounts', 'Usage limits & expiry'],
              ['Waitlist', 'Auto-waitlist when sold out, priority queue, auto-release', 'Notification on availability'],
              ['Settlement', 'Event revenue breakdown, platform fees, net payout, payout history', 'Post-event settlement'],
              ['Multi-Event', 'Festival/series management, shared attendees, bundle pricing', 'Cross-event analytics'],
              ['Team Access', 'Add staff, assign roles (Scanner, Manager, Finance), per-event access', 'Activity audit log'],
              ['Adzy Integration', 'Promote events via Adzy, track ad-driven ticket sales', 'One-click campaign setup'],
              ['Settings', 'Organizer profile, payout accounts, notification preferences, branding', 'Custom ticket templates'],
            ]} />
          </div>
        </div>
      </Expandable>

      {/* ── Ajer ── */}
      <Expandable title="Ajer — Vehicle Rentals" icon={MapPin} defaultOpen={false}>
        <div className="space-y-4">
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
            <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2"><Shield className="w-4 h-4" /> RTMN HQ Admin</h4>
            <DocTable headers={['Module', 'Features', 'Access']} rows={[
              ['Fleet Partner Approval', 'KYC verification, fleet size validation, insurance document check', 'Compliance'],
              ['Pricing Engine', 'Dynamic pricing rules, surge multipliers, seasonal rates', 'Revenue'],
              ['Insurance Management', 'Policy verification, claim processing, damage assessment workflow', 'Legal'],
              ['Vehicle Categories', 'Define vehicle types, features, pricing tiers, availability zones', 'Operations'],
              ['Dispute Resolution', 'Customer-partner disputes, damage claims, deposit refund decisions', 'Support'],
              ['Compliance', 'RTA/transport authority licensing, emission standards, age restrictions', 'Legal'],
              ['Analytics', 'Fleet utilization rates, revenue per vehicle, seasonal demand patterns', 'Strategy'],
              ['Quality Control', 'Vehicle inspection schedules, cleanliness ratings, maintenance alerts', 'Operations'],
            ]} />
          </div>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <h4 className="text-blue-400 font-semibold mb-3 flex items-center gap-2"><Store className="w-4 h-4" /> Fleet Partner Portal (70% BizOne Reuse)</h4>
            <DocTable headers={['Tab', 'Features', 'Details']} rows={[
              ['Dashboard', 'Active rentals, upcoming bookings, revenue today/week/month', 'Real-time vehicle status map'],
              ['Vehicle Listings', 'Add/edit vehicles, photos, specs, pricing, availability calendar', 'Bulk import via CSV'],
              ['Bookings', 'Incoming requests, confirmed bookings, handover/return workflow', 'In-app chat with customer'],
              ['Revenue Analytics', 'Per-vehicle earnings, utilization rate, peak vs off-peak breakdown', 'Monthly/quarterly reports'],
              ['Maintenance', 'Schedule servicing, track maintenance history, cost tracking', 'Auto-alerts at km intervals'],
              ['Insurance', 'Policy uploads, claim submissions, coverage status per vehicle', 'Expiry reminders'],
              ['Damage Reports', 'Photo evidence upload, assessment forms, deposit deductions', 'Before/after comparison'],
              ['Customer Reviews', 'Rating overview, review responses, quality score tracking', 'Automated review requests'],
              ['Settings', 'Business profile, payout accounts, team members, operating hours', 'Multi-location support'],
            ]} />
          </div>
        </div>
      </Expandable>

      {/* ── Rakab ── */}
      <Expandable title="Rakab — Ride-Hailing" icon={MapPin} defaultOpen={false}>
        <div className="space-y-4">
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
            <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2"><Shield className="w-4 h-4" /> RTMN HQ Admin</h4>
            <DocTable headers={['Module', 'Features', 'Access']} rows={[
              ['Driver Onboarding', 'License verification, background checks, vehicle inspection, training modules', 'Operations'],
              ['Surge Pricing', 'Dynamic multiplier rules, zone-based pricing, demand prediction', 'Revenue'],
              ['Driver Management', 'Rating monitoring, compliance tracking, suspension/deactivation workflow', 'Operations'],
              ['Corporate Accounts', 'B2B contracts, employee ride limits, consolidated billing', 'Enterprise Sales'],
              ['Safety Center', 'SOS alert monitoring, trip recording, incident management', 'Safety Team'],
              ['Route Optimization', 'ML-based ETA, traffic pattern learning, zone heat maps', 'Tech'],
              ['Commission Structure', 'Per-ride platform fee, incentive programs, bonus tiers', 'Finance'],
              ['Regulatory', 'City permits, transport authority compliance, driver hour limits', 'Legal'],
            ]} />
          </div>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <h4 className="text-blue-400 font-semibold mb-3 flex items-center gap-2"><Store className="w-4 h-4" /> Driver App & Dashboard</h4>
            <DocTable headers={['Tab', 'Features', 'Details']} rows={[
              ['Earnings Dashboard', 'Daily/weekly/monthly earnings, commission breakdown, bonus tracker', 'Real-time updates'],
              ['Heat Maps', 'Demand zones, surge areas, event-driven hotspots, optimal positioning', 'ML-powered predictions'],
              ['Multi-Mode Toggle', 'Switch between rides, Wasil deliveries, or both simultaneously', 'Unified earnings'],
              ['Trip History', 'Completed trips, cancelled trips, earnings per trip, ratings received', 'Exportable reports'],
              ['Incentives', 'Active bonus programs, progress toward targets, streak rewards', 'Real-time progress bar'],
              ['Vehicle Documents', 'Upload/renew license, insurance, registration, inspection certificates', 'Expiry alerts'],
              ['Performance Score', 'Acceptance rate, cancellation rate, rating average, completion rate', 'Tier progression'],
              ['Support', 'In-app tickets, fare adjustment requests, incident reporting', 'Priority queue for high-rated'],
            ]} />
          </div>
        </div>
      </Expandable>

      {/* ── Safar ── */}
      <Expandable title="Safar — Travel & Tourism" icon={Globe} defaultOpen={false}>
        <div className="space-y-4">
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
            <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2"><Shield className="w-4 h-4" /> RTMN HQ Admin</h4>
            <DocTable headers={['Module', 'Features', 'Access']} rows={[
              ['GDS Integration', 'Amadeus/Sabre/Travelport connections, fare caching, inventory sync', 'Tech'],
              ['Booking Management', 'All bookings (flights, hotels, packages), modification/cancellation processing', 'Operations'],
              ['Visa Processing', 'Application tracking, document verification, embassy liaison workflow', 'Travel Ops'],
              ['Partner Management', 'Hotel contracts, airline agreements, DMC partnerships, commission rates', 'Partnerships'],
              ['Revenue Management', 'Markup rules, dynamic pricing, package margin analysis', 'Finance'],
              ['Content Management', 'Destination pages, travel guides, package descriptions, photo library', 'Content'],
              ['Customer Support', 'Booking issues, refund processing, emergency assistance coordination', 'Support'],
              ['Compliance', 'ATOL/IATA licensing, travel insurance requirements, consumer protection', 'Legal'],
            ]} />
          </div>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <h4 className="text-blue-400 font-semibold mb-3 flex items-center gap-2"><Store className="w-4 h-4" /> Travel Partner Portal</h4>
            <DocTable headers={['Tab', 'Features', 'Details']} rows={[
              ['Dashboard', 'Booking volume, revenue, upcoming departures, customer inquiries', 'Real-time stats'],
              ['Inventory', 'Room/seat availability, blackout dates, rate plans, allotment management', 'Channel sync'],
              ['Bookings', 'Reservation list, modification requests, no-show management', 'Auto-confirmation'],
              ['Packages', 'Create/edit travel packages, itinerary builder, pricing tiers', 'Seasonal variations'],
              ['Reviews', 'Customer feedback, response management, rating analytics', 'Automated solicitation'],
              ['Content', 'Property/service photos, descriptions, amenity listings, virtual tours', 'Multi-language support'],
              ['Settlement', 'Commission statements, payout schedule, invoice generation', 'Monthly reconciliation'],
              ['Analytics', 'Occupancy/load rates, RevPAR, booking lead time, source markets', 'Competitive benchmarking'],
            ]} />
          </div>
        </div>
      </Expandable>

      {/* ── Wasil ── */}
      <Expandable title="Wasil — Delivery & Logistics" icon={Package} defaultOpen={false}>
        <div className="space-y-4">
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
            <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2"><Shield className="w-4 h-4" /> RTMN HQ Admin</h4>
            <DocTable headers={['Module', 'Features', 'Access']} rows={[
              ['Fleet Management', 'Rider onboarding, vehicle tracking, zone assignment, shift scheduling', 'Operations'],
              ['Delivery Zones', 'Geofence configuration, delivery radius per merchant, zone-based pricing', 'Operations'],
              ['Order Routing', 'Auto-dispatch algorithm, batching logic, priority rules, re-routing', 'Tech'],
              ['Rider Compliance', 'License verification, health certificates, uniform compliance', 'Compliance'],
              ['SLA Management', 'Delivery time targets, merchant SLAs, penalty/bonus structure', 'Operations'],
              ['Pricing Engine', 'Distance-based pricing, surge rules, subscription delivery plans', 'Revenue'],
              ['Quality Control', 'Delivery success rates, damage reports, customer satisfaction scores', 'Quality'],
              ['Analytics', 'Orders per hour, average delivery time, rider utilization, cost per delivery', 'Strategy'],
            ]} />
          </div>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <h4 className="text-blue-400 font-semibold mb-3 flex items-center gap-2"><Store className="w-4 h-4" /> Merchant Dashboard (Wasil)</h4>
            <DocTable headers={['Tab', 'Features', 'Details']} rows={[
              ['Orders', 'Incoming delivery orders, preparation timer, handoff confirmation', 'Real-time WebSocket'],
              ['Sales Analytics', 'Revenue by day/week, top items, delivery vs pickup split', 'Category breakdown'],
              ['Menu Management', 'Item availability toggle, prep time updates, out-of-stock marking', 'Sync with BizOne POS'],
              ['Delivery Zone', 'View delivery radius, request zone expansion, zone-based pricing', 'Map visualization'],
              ['Payouts', 'Settlement history, pending payouts, commission breakdown', 'Weekly/bi-weekly cycles'],
              ['Ratings', 'Delivery ratings, food quality ratings, packaging feedback', 'Per-order breakdown'],
              ['Promotions', 'Free delivery offers, bundle deals, flash sales for delivery', 'ROI tracking'],
              ['Settings', 'Operating hours, prep time defaults, auto-accept rules, holiday schedule', 'Per-location config'],
            ]} />
          </div>
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
            <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2"><Users className="w-4 h-4" /> Rider App</h4>
            <DocTable headers={['Tab', 'Features', 'Details']} rows={[
              ['Earnings', 'Daily/weekly earnings, tips, bonuses, incentive progress', 'Instant cashout option'],
              ['Orders', 'Active deliveries, navigation, pickup/dropoff confirmation', 'Multi-stop batching'],
              ['Route Planner', 'Optimized multi-drop routes, traffic avoidance, ETA updates', 'Turn-by-turn navigation'],
              ['Tier System', 'Bronze → Silver → Gold → Platinum, unlockable perks per tier', 'Monthly evaluation'],
              ['Schedule', 'Shift booking, availability calendar, peak hour bonuses', 'Flexible scheduling'],
              ['Performance', 'Completion rate, on-time rate, rating average, speed score', 'Weekly report card'],
              ['Support', 'Order issues, payment queries, accident reporting', 'Emergency SOS button'],
            ]} />
          </div>
        </div>
      </Expandable>

      {/* ── Qist (BNPL) ── */}
      <Expandable title="Qist — Buy Now Pay Later" icon={CreditCard} defaultOpen={false}>
        <div className="space-y-4">
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
            <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2"><Shield className="w-4 h-4" /> RTMN HQ Admin</h4>
            <DocTable headers={['Module', 'Features', 'Access']} rows={[
              ['Credit Scoring', 'ML scoring model, risk parameters, credit limit assignment rules', 'Risk Team'],
              ['Merchant Onboarding', 'Eligibility criteria, integration setup, category restrictions', 'Partnerships'],
              ['Default Monitoring', 'Overdue tracking, collection workflows, write-off policies', 'Collections'],
              ['Regulatory Compliance', 'CBUAE/RBI lending regulations, interest rate caps, disclosure requirements', 'Legal'],
              ['Portfolio Analytics', 'Default rates, recovery rates, portfolio age analysis, concentration risk', 'Finance'],
              ['Funding', 'Capital allocation, funding partner management, securitization', 'Treasury'],
              ['Fraud Prevention', 'Identity verification, velocity checks, synthetic ID detection', 'Risk Team'],
              ['Settlement', 'Merchant settlement after customer payment, reconciliation, adjustments', 'Finance'],
            ]} />
          </div>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <h4 className="text-blue-400 font-semibold mb-3 flex items-center gap-2"><Store className="w-4 h-4" /> Merchant Dashboard (Qist)</h4>
            <DocTable headers={['Tab', 'Features', 'Details']} rows={[
              ['Overview', 'BNPL-enabled transactions, conversion lift, average order value impact', 'Real-time stats'],
              ['Transactions', 'All BNPL orders, installment schedules, customer payment status', 'Search & filter'],
              ['Settlement', 'Upfront merchant payment (minus MDR), settlement history, reconciliation', 'T+1 settlement'],
              ['Conversion Analytics', 'BNPL vs cash checkout rates, cart abandonment reduction, AOV lift', 'A/B comparison'],
              ['Customer Insights', 'Repeat BNPL users, average installment size, preferred plans', 'Anonymized data'],
              ['Integration', 'Checkout widget setup, API documentation, test mode', 'Copy-paste integration'],
              ['Settings', 'Eligible categories, minimum order, maximum installment plans offered', 'Per-product config'],
            ]} />
          </div>
        </div>
      </Expandable>

      {/* ── Hawil (Remittance) ── */}
      <Expandable title="Hawil — Remittance & Transfers" icon={DollarSign} defaultOpen={false}>
        <div className="space-y-4">
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
            <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2"><Shield className="w-4 h-4" /> RTMN HQ Admin</h4>
            <DocTable headers={['Module', 'Features', 'Access']} rows={[
              ['Transfer Monitoring', 'Real-time transfer tracking, suspicious activity alerts, velocity monitoring', 'Compliance'],
              ['Corridor Management', 'Country corridors, exchange rate margins, partner bank integrations', 'Treasury'],
              ['AML/CFT', 'Sanctions screening, PEP checks, transaction monitoring rules, SAR filing', 'Compliance'],
              ['Partner SLAs', 'Payout partner performance, delivery time tracking, failure rate monitoring', 'Operations'],
              ['Card Issuance', 'Virtual/physical card management, spending limits, card lifecycle', 'Product'],
              ['FX Management', 'Rate sourcing, spread management, hedging, rate lock policies', 'Treasury'],
              ['Regulatory', 'CBUAE exchange house license, cross-border reporting, transaction limits', 'Legal'],
              ['Revenue', 'Transfer fees, FX spread revenue, card interchange income', 'Finance'],
            ]} />
          </div>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <h4 className="text-blue-400 font-semibold mb-3 flex items-center gap-2"><Store className="w-4 h-4" /> Recharge Partner Program</h4>
            <DocTable headers={['Tab', 'Features', 'Details']} rows={[
              ['Dashboard', 'Top-up volume, commission earned, active customers', 'Daily/weekly/monthly'],
              ['Top-up Processing', 'Process mobile/utility recharges, bill payments on behalf of customers', 'Multi-operator support'],
              ['Commission Tracking', 'Per-transaction commission, bonus tiers, payout schedule', 'Tiered rates by volume'],
              ['Customer Management', 'Registered customers, transaction history per customer', 'KYC verification assist'],
              ['Float Management', 'Wallet balance, top-up requests, auto-reload settings', 'Low-balance alerts'],
              ['Reports', 'Daily reconciliation, commission statements, tax reports', 'Downloadable PDF/CSV'],
              ['Settings', 'Operating hours, supported services, sub-agent management', 'Multi-location support'],
            ]} />
          </div>
        </div>
      </Expandable>

      {/* ── Sakin (Real Estate) ── */}
      <Expandable title="Sakin — Real Estate & Housing" icon={Building2} defaultOpen={false}>
        <div className="space-y-4">
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
            <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2"><Shield className="w-4 h-4" /> RTMN HQ Admin</h4>
            <DocTable headers={['Module', 'Features', 'Access']} rows={[
              ['Property Moderation', 'Listing approval, photo verification, price validation, duplicate detection', 'Content'],
              ['Financing Operations', 'Mortgage partner integrations, EMI calculator management, approval workflows', 'Finance'],
              ['Broker Management', 'Broker registration, license verification (RERA/DLD), commission structures', 'Partnerships'],
              ['Market Analytics', 'Price trends, inventory levels, demand heatmaps, rental yield analysis', 'Strategy'],
              ['Legal Compliance', 'RERA regulations, tenancy law compliance, escrow account management', 'Legal'],
              ['Developer Partnerships', 'Off-plan project listings, payment plan management, handover tracking', 'Business Dev'],
              ['Dispute Resolution', 'Tenant-landlord disputes, deposit return cases, maintenance escalations', 'Support'],
              ['Revenue', 'Listing fees, featured placement revenue, lead generation fees, financing referrals', 'Finance'],
            ]} />
          </div>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <h4 className="text-blue-400 font-semibold mb-3 flex items-center gap-2"><Store className="w-4 h-4" /> Broker Dashboard</h4>
            <DocTable headers={['Tab', 'Features', 'Details']} rows={[
              ['Listings', 'Active/draft/expired listings, quick edit, featured upgrade', 'Bulk upload support'],
              ['Leads', 'Incoming inquiries, lead scoring, follow-up reminders, conversion tracking', 'Auto-assignment rules'],
              ['Commission', 'Deal tracking, commission calculations, payment status, tax invoices', 'Split commission support'],
              ['Analytics', 'Listing views, inquiry rate, response time, market position', 'Competitor comparison'],
              ['CRM', 'Client database, property preferences, viewing history, communication log', 'Email/WhatsApp integration'],
              ['Documents', 'Contract templates, NOC generation, tenancy agreements, MOU drafts', 'E-signature support'],
              ['Calendar', 'Viewing appointments, key handover dates, contract renewals', 'Sync with Google/Outlook'],
            ]} />
          </div>
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
            <h4 className="text-purple-400 font-semibold mb-3 flex items-center gap-2"><Building2 className="w-4 h-4" /> Landlord Dashboard</h4>
            <DocTable headers={['Tab', 'Features', 'Details']} rows={[
              ['Properties', 'All owned properties, occupancy status, rental income overview', 'Multi-property management'],
              ['Tenant Screening', 'Application review, credit check results, reference verification', 'Automated scoring'],
              ['Financials', 'Rent collection, expense tracking, net yield calculation, tax reports', 'Auto-invoicing'],
              ['Maintenance', 'Tenant requests, vendor assignment, cost tracking, completion verification', 'Photo documentation'],
              ['Documents', 'Tenancy contracts, Ejari registration, utility transfer records', 'Renewal reminders'],
              ['Analytics', 'Occupancy rate, rent vs market rate, maintenance cost trends', 'Portfolio performance'],
            ]} />
          </div>
        </div>
      </Expandable>

      {/* ── Fakhir (Luxury) ── */}
      <Expandable title="Fakhir — Luxury & Concierge" icon={Star} defaultOpen={false}>
        <div className="space-y-4">
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
            <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2"><Shield className="w-4 h-4" /> RTMN HQ Admin</h4>
            <DocTable headers={['Module', 'Features', 'Access']} rows={[
              ['Membership Tiers', 'Define Elite/Prestige/Royal tiers, benefits per tier, upgrade criteria', 'Product'],
              ['Concierge Operations', 'Request queue, agent assignment, SLA tracking, quality scoring', 'Luxury Ops'],
              ['Partner Management', 'Luxury brand partnerships, exclusive access agreements, commission rates', 'Partnerships'],
              ['Experience Curation', 'Curate luxury experiences, private events, VIP access packages', 'Content'],
              ['Revenue', 'Membership fees, concierge service fees, partner commission income', 'Finance'],
              ['Quality Assurance', 'Mystery shopping, partner audits, customer satisfaction surveys', 'Quality'],
              ['Exclusivity Rules', 'Member limits per tier, waitlist management, invitation-only events', 'Product'],
              ['Analytics', 'Member LTV, engagement metrics, experience popularity, churn prediction', 'Strategy'],
            ]} />
          </div>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <h4 className="text-blue-400 font-semibold mb-3 flex items-center gap-2"><Store className="w-4 h-4" /> Luxury Partner Dashboard</h4>
            <DocTable headers={['Tab', 'Features', 'Details']} rows={[
              ['Bookings', 'Incoming reservations, VIP guest preferences, special requests', 'Priority flagging'],
              ['Availability', 'Calendar management, exclusive slot allocation, blackout dates', 'Real-time sync'],
              ['Commission', 'Booking revenue, commission statements, payout history', 'Monthly settlement'],
              ['Guest Profiles', 'VIP preferences, past interactions, allergies/requirements, gift history', 'CRM integration'],
              ['Experiences', 'List exclusive offerings, pricing, capacity, seasonal availability', 'Photo/video showcase'],
              ['Reviews', 'Member feedback, response management, quality score tracking', 'Curated review display'],
              ['Brand Assets', 'Logo usage, co-branding materials, marketing collateral', 'Approval workflow'],
              ['Settings', 'Contact info, team access, notification preferences, integration setup', 'Multi-location support'],
            ]} />
          </div>
        </div>
      </Expandable>

      {/* ── Inventora ── */}
      <Expandable title="Inventora — Inventory Management" icon={Package} defaultOpen={false}>
        <div className="space-y-4">
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
            <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2"><Shield className="w-4 h-4" /> RTMN HQ Admin</h4>
            <DocTable headers={['Module', 'Features', 'Access']} rows={[
              ['Platform Analytics', 'Aggregate inventory health across all merchants, stock-out trends', 'Strategy'],
              ['Supplier Network', 'Verified supplier directory, bulk negotiation, quality certifications', 'Partnerships'],
              ['Integration Management', 'BizOne sync health, API status, data pipeline monitoring', 'Tech'],
              ['Compliance', 'Expiry date tracking regulations, recall management, food safety compliance', 'Legal'],
            ]} />
          </div>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <h4 className="text-blue-400 font-semibold mb-3 flex items-center gap-2"><Store className="w-4 h-4" /> Merchant Dashboard (Inventora)</h4>
            <DocTable headers={['Tab', 'Features', 'Details']} rows={[
              ['Stock Overview', 'Real-time stock levels, low-stock alerts, category breakdown', 'Color-coded thresholds'],
              ['AI Forecasting', 'Demand prediction, auto-reorder suggestions, seasonal adjustments', 'ML model per SKU'],
              ['Multi-Warehouse', 'Per-location stock, inter-warehouse transfers, allocation rules', 'Up to 20 warehouses'],
              ['Purchase Orders', 'Create PO, supplier selection, approval workflow, delivery tracking', 'Auto-PO on low stock'],
              ['Barcode/SKU', 'Barcode generation, SKU management, batch/lot tracking, serial numbers', 'Scanner integration'],
              ['Supplier Scoring', 'Delivery reliability, price competitiveness, quality ratings, lead times', 'Auto-ranking'],
              ['Expiry Tracking', 'FEFO management, expiry alerts, discount/clearance automation', 'Waste reduction reports'],
              ['Reports', 'Stock valuation, turnover rates, dead stock analysis, shrinkage tracking', 'FIFO/LIFO/weighted avg'],
              ['BizOne Sync', 'Real-time POS integration, auto-deduction on sale, return restocking', 'Bi-directional sync'],
            ]} />
          </div>
        </div>
      </Expandable>

      {/* ── NextaBizz (B2B) ── */}
      <Expandable title="NextaBizz — B2B Marketplace" icon={Building2} defaultOpen={false}>
        <div className="space-y-4">
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
            <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2"><Shield className="w-4 h-4" /> RTMN HQ Admin</h4>
            <DocTable headers={['Module', 'Features', 'Access']} rows={[
              ['Marketplace Governance', 'Supplier verification, product quality standards, dispute arbitration', 'Operations'],
              ['Trade Finance', 'Credit line management, payment term approvals, default monitoring', 'Finance'],
              ['Category Management', 'Product taxonomy, minimum order quantities, industry classifications', 'Product'],
              ['Compliance', 'Trade licenses, import/export regulations, customs documentation', 'Legal'],
              ['Analytics', 'GMV, active buyers/sellers, category trends, cross-border trade flows', 'Strategy'],
              ['Partner APIs', 'Logistics partner integrations, payment gateway management, ERP connectors', 'Tech'],
            ]} />
          </div>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <h4 className="text-blue-400 font-semibold mb-3 flex items-center gap-2"><Store className="w-4 h-4" /> Supplier Dashboard</h4>
            <DocTable headers={['Tab', 'Features', 'Details']} rows={[
              ['Products', 'Catalog management, bulk pricing tiers, MOQ settings, variant management', 'Bulk upload CSV/Excel'],
              ['Orders', 'Incoming orders, fulfillment workflow, shipping label generation', 'Auto-accept rules'],
              ['Invoicing', 'Generate invoices, payment tracking, credit note management', 'Multi-currency support'],
              ['RFQ Responses', 'Incoming quote requests, bid submission, negotiation chat', 'Template responses'],
              ['Analytics', 'Sales by category, buyer retention, pricing competitiveness', 'Market share estimates'],
              ['Inventory', 'Stock sync with Inventora, availability management, lead time updates', 'Real-time sync'],
              ['Shipping', 'Carrier selection, rate comparison, tracking management, returns processing', 'Wasil integration'],
              ['Settings', 'Business profile, certifications, payment terms, team access', 'Verification badges'],
            ]} />
          </div>
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
            <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2"><ShoppingCart className="w-4 h-4" /> Buyer Dashboard</h4>
            <DocTable headers={['Tab', 'Features', 'Details']} rows={[
              ['Supplier Discovery', 'Search/filter suppliers, verified badges, rating comparison', 'AI recommendations'],
              ['RFQ Management', 'Create quote requests, compare bids, negotiate terms', 'Multi-supplier RFQ'],
              ['Orders', 'Purchase history, reorder shortcuts, delivery tracking', 'Approval workflows'],
              ['Credit Management', 'Available credit, payment schedules, statement downloads', 'Qist BNPL integration'],
              ['Procurement', 'Approved supplier lists, purchase budgets, spend analytics', 'Category-level budgets'],
              ['Reports', 'Spend analysis, supplier performance, savings tracking', 'Exportable dashboards'],
            ]} />
          </div>
        </div>
      </Expandable>

      {/* ── Nuqta+ ── */}
      <Expandable title="Nuqta+ — Premium Offers Network" icon={Star} defaultOpen={false}>
        <div className="space-y-4">
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
            <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2"><Shield className="w-4 h-4" /> RTMN HQ Admin</h4>
            <DocTable headers={['Module', 'Features', 'Access']} rows={[
              ['Offer Curation', 'Partner offer approval, quality scoring, featured offer selection', 'Content'],
              ['Partner Onboarding', 'Brand verification, offer terms review, integration setup', 'Partnerships'],
              ['Revenue Sharing', 'Commission structures per partner, tiered rates, settlement management', 'Finance'],
              ['Customer Analytics', 'Redemption rates, customer segments, offer performance ranking', 'Strategy'],
              ['Campaign Management', 'Seasonal campaigns, push notification scheduling, email targeting', 'Marketing'],
              ['Quality Control', 'Partner compliance audits, customer complaint tracking, offer accuracy', 'Operations'],
            ]} />
          </div>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <h4 className="text-blue-400 font-semibold mb-3 flex items-center gap-2"><Store className="w-4 h-4" /> Partner Dashboard (Nuqta+)</h4>
            <DocTable headers={['Tab', 'Features', 'Details']} rows={[
              ['Offer Management', 'Create/edit offers, set terms, capacity limits, validity periods', 'Bulk offer creation'],
              ['Guaranteed Customers', 'View committed foot traffic, walk-in tracking, conversion rates', 'Per-offer breakdown'],
              ['Transaction Reporting', 'Redemption history, revenue per offer, customer demographics', 'Real-time updates'],
              ['Coin Redemption', 'Coin-based offer redemptions, settlement calculations, reconciliation', 'NuqtaCoin integration'],
              ['Analytics', 'ROI per offer, customer acquisition cost, repeat visit rates', 'Comparison with peers'],
              ['Creative Assets', 'Upload offer images, brand guidelines, promotional materials', 'Template library'],
              ['Settlement', 'Monthly payout statements, commission deductions, payment history', 'Auto-invoicing'],
              ['Settings', 'Store locations, operating hours, team access, notification preferences', 'Multi-branch support'],
            ]} />
          </div>
        </div>
      </Expandable>

      {/* ── Rabtul ── */}
      <Expandable title="Rabtul — Developer & Integration Platform" icon={Code} defaultOpen={false}>
        <div className="space-y-4">
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
            <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2"><Shield className="w-4 h-4" /> RTMN HQ Admin</h4>
            <DocTable headers={['Module', 'Features', 'Access']} rows={[
              ['API Gateway', 'Rate limiting, API key management, usage monitoring, versioning', 'Tech'],
              ['Developer Management', 'App approvals, OAuth client registration, permission scoping', 'Platform'],
              ['SDK & Docs', 'SDK version management, documentation publishing, changelog', 'DevRel'],
              ['Webhook Registry', 'Event catalog, webhook health monitoring, retry policies', 'Tech'],
              ['Marketplace', 'Third-party app approvals, listing management, review/ratings', 'Product'],
              ['Analytics', 'API call volume, error rates, latency percentiles, top consumers', 'Tech'],
            ]} />
          </div>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <h4 className="text-blue-400 font-semibold mb-3 flex items-center gap-2"><Code className="w-4 h-4" /> Developer Portal</h4>
            <DocTable headers={['Tab', 'Features', 'Details']} rows={[
              ['Dashboard', 'API usage stats, active apps, recent errors, quota remaining', 'Real-time monitoring'],
              ['API Explorer', 'Interactive API console, request builder, response inspector', 'Try-before-you-code'],
              ['Apps', 'Register apps, manage OAuth credentials, configure permissions', 'Sandbox + production'],
              ['Webhooks', 'Subscribe to events, endpoint configuration, delivery logs', 'Retry configuration'],
              ['SDKs', 'Download SDKs (JS, Python, Swift, Kotlin), code samples', 'Version management'],
              ['Documentation', 'Full API reference, getting started guides, use case tutorials', 'Searchable'],
              ['Support', 'Developer forum, ticket submission, Stack Overflow integration', 'Priority for paid tiers'],
            ]} />
          </div>
        </div>
      </Expandable>

      {/* Cross-Product Integration Map */}
      <div className="mt-8 bg-gradient-to-r from-[#c9a227]/10 to-[#c9a227]/5 border border-[#c9a227]/30 rounded-xl p-6">
        <h3 className="text-lg font-bold text-[#c9a227] mb-4 flex items-center gap-2"><Network className="w-5 h-5" /> Cross-Product Data Flow</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <p className="text-white font-medium">Merchant-Side Integrations</p>
            <ul className="text-slate-400 space-y-1">
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 text-[#c9a227] flex-shrink-0" />BizOne POS → Inventora (auto stock deduction)</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 text-[#c9a227] flex-shrink-0" />BizOne → NuqtaPay (payment processing)</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 text-[#c9a227] flex-shrink-0" />BizOne → Wasil (delivery dispatch)</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 text-[#c9a227] flex-shrink-0" />BizOne → Adzy (in-app advertising)</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 text-[#c9a227] flex-shrink-0" />BizOne → Qist (BNPL at checkout)</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-white font-medium">Platform-Side Integrations</p>
            <ul className="text-slate-400 space-y-1">
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 text-[#c9a227] flex-shrink-0" />Nuqta → All products (unified customer identity)</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 text-[#c9a227] flex-shrink-0" />NuqtaCoin → All products (earn/spend across ecosystem)</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 text-[#c9a227] flex-shrink-0" />Rabtul → All products (unified API gateway)</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 text-[#c9a227] flex-shrink-0" />AIRA AI → All products (recommendations, fraud, personalization)</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 text-[#c9a227] flex-shrink-0" />Hawil → NuqtaPay (wallet funding, international transfers)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// MAIN PAGE COMPONENT
// ════════════════════════════════════════════════════════════════════
export default function DocumentationPage() {
  const [activeSection, setActiveSection] = useState('overview');

  const sectionComponents: Record<string, React.ReactNode> = {
    'overview': <OverviewSection />,
    'architecture': <ArchitectureSection />,
    'ecosystem': <EcosystemSection />,
    'admin-detailed': <AdminDetailedSection />,
    'merchant-detailed': <MerchantDetailedSection />,
    'database': <DatabaseSection />,
    'api': <ApiSection />,
    'customer-app': <CustomerAppSection />,
    'merchant-os': <MerchantOsSection />,
    'admin-panel': <AdminPanelSection />,
    'coins': <CoinsSection />,
    'wallet': <WalletSection />,
    'screens': <ScreenFlowsSection />,
    'roadmap': <RoadmapSection />,
    'tech-stack': <TechStackSection />,
    'security': <SecuritySection />,
    'customer-onboarding': <CustomerOnboardingSection />,
    'error-codes': <ErrorCodesSection />,
    'testing': <TestingSection />,
    'aira-ai': <AiraAiSection />,
    'event-bus': <EventBusSection />,
    'monitoring': <MonitoringSection />,
    'mobile-deploy': <MobileDeploySection />,
    'notifications': <NotificationSection />,
    'prive-vip': <PriveVipSection />,
    'wasil-verticals': <WasilVerticalsSection />,
    'referral': <ReferralSection />,
    'product-dashboards': <ProductDashboardsSection />,
  };

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#0d1d3a] to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/rtmn-group" className="inline-flex items-center gap-2 text-[#c9a227] hover:text-[#f4d35e] mb-4 text-sm">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to RTMN Group
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-[#c9a227]/20 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-[#c9a227]" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">RTMN System Documentation</h1>
              <p className="text-slate-400 text-sm mt-1">Complete technical & product documentation for PMs and developers</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge text="1,103 Screens" color="bg-emerald-500/20 text-emerald-400" />
            <Badge text="500+ APIs" color="bg-blue-500/20 text-blue-400" />
            <Badge text="60+ Tables" color="bg-purple-500/20 text-purple-400" />
            <Badge text="4 Core Systems" color="bg-amber-500/20 text-amber-400" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Mobile: horizontal scroll, Desktop: vertical */}
          <aside className="lg:w-64 flex-shrink-0">
            {/* Mobile: horizontal tabs */}
            <div className="lg:hidden overflow-x-auto -mx-4 px-4 pb-4">
              <div className="flex gap-2 min-w-max">
                {sections.map(s => {
                  const Icon = s.icon;
                  const isActive = activeSection === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setActiveSection(s.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                        isActive
                          ? 'bg-[#c9a227] text-black'
                          : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50'
                      }`}
                    >
                      <Icon size={14} />
                      {s.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Desktop: vertical sidebar */}
            <nav className="hidden lg:block sticky top-20 space-y-1">
              {sections.map(s => {
                const Icon = s.icon;
                const isActive = activeSection === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      setActiveSection(s.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg ${
                      isActive
                        ? 'bg-[#c9a227]/20 text-[#c9a227] border-l-2 border-[#c9a227]'
                        : 'text-slate-400 hover:text-white hover:bg-slate-700/50 border-l-2 border-transparent'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{s.label}</span>
                    <span className={`ml-auto text-xs px-1.5 py-0.5 rounded ${isActive ? 'bg-[#c9a227]/30 text-[#c9a227]' : 'bg-slate-800 text-slate-500'}`}>{s.audience}</span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Content Area */}
          <main className="flex-1 min-w-0">
            {sectionComponents[activeSection]}
          </main>
        </div>
      </div>

      {/* Bottom Nav */}
      <section className="bg-slate-800/30 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rtmn-group" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors">
              <Building2 className="w-5 h-5" /> RTMN Group
            </Link>
            <Link href="/rtmn-ecosystem" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 transition-colors border border-slate-600">
              <Globe className="w-5 h-5" /> RTMN Ecosystem
            </Link>
            <Link href="/rtmn-dashboard" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 transition-colors border border-slate-600">
              <BarChart3 className="w-5 h-5" /> RTMN Dashboard
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
