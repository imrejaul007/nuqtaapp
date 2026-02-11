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
  Monitor, Cpu, HardDrive, Wifi, UserPlus
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ─── Types ──────────────────────────────────────────────────────────
interface Section {
  id: string;
  label: string;
  icon: React.ElementType;
  screens?: number;
}

// ─── Sidebar Sections ───────────────────────────────────────────────
const sections: Section[] = [
  { id: 'overview', label: 'Overview & Architecture', icon: BookOpen },
  { id: 'auth', label: 'Auth & Onboarding', icon: UserPlus, screens: 3 },
  { id: 'dashboard', label: 'Dashboard & Analytics', icon: BarChart3, screens: 6 },
  { id: 'pos', label: 'POS & Transactions', icon: Smartphone, screens: 7 },
  { id: 'orders', label: 'Orders', icon: ShoppingCart, screens: 3 },
  { id: 'inventory', label: 'Inventory', icon: Package, screens: 10 },
  { id: 'customers', label: 'Customer Management', icon: Users, screens: 8 },
  { id: 'finance', label: 'Financial Management', icon: DollarSign, screens: 6 },
  { id: 'offers', label: 'Offers & Promotions', icon: Zap, screens: 10 },
  { id: 'marketing', label: 'Marketing', icon: Eye, screens: 5 },
  { id: 'kitchen', label: 'Kitchen & Restaurant', icon: Store, screens: 10 },
  { id: 'pricing', label: 'Pricing & Revenue', icon: TrendingUp, screens: 8 },
  { id: 'loyalty', label: 'Loyalty & Rewards', icon: Star, screens: 11 },
  { id: 'staff', label: 'Staff Management', icon: Users, screens: 9 },
  { id: 'payments', label: 'Payments & Settlements', icon: CreditCard, screens: 11 },
  { id: 'shipping', label: 'Shipping & Delivery', icon: Package, screens: 7 },
  { id: 'compliance', label: 'Compliance & Tax', icon: FileText, screens: 7 },
  { id: 'vendor', label: 'Vendor & Supplier', icon: Building2, screens: 8 },
  { id: 'reports', label: 'Reports', icon: BarChart3, screens: 12 },
  { id: 'digmarketing', label: 'Digital Marketing', icon: Globe, screens: 5 },
  { id: 'integrations', label: 'Integrations', icon: Zap, screens: 9 },
  { id: 'settings', label: 'Settings & Profile', icon: Settings, screens: 2 },
  { id: 'crosscutting', label: 'Cross-Cutting Specs', icon: Layers },
];

// ─── Helper Components ──────────────────────────────────────────────
function Expandable({ title, children, defaultOpen = false, icon: Icon, color = 'text-blue-400' }: {
  title: string; children: React.ReactNode; defaultOpen?: boolean; icon?: React.ElementType; color?: string;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-slate-700/50 rounded-xl overflow-hidden mb-4">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 bg-slate-800/50 hover:bg-slate-800/80 transition-colors text-left">
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

function DocTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm">
        <thead><tr className="border-b border-slate-700/50">
          {headers.map((h, i) => (<th key={i} className="text-left px-3 py-2 text-blue-400 font-semibold whitespace-nowrap">{h}</th>))}
        </tr></thead>
        <tbody>{rows.map((row, i) => (
          <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30">
            {row.map((cell, j) => (<td key={j} className={`px-3 py-2 ${j === 0 ? 'text-white font-medium' : 'text-slate-300'} whitespace-nowrap`}>{cell}</td>))}
          </tr>
        ))}</tbody>
      </table>
    </div>
  );
}

function CodeBlock({ title, code }: { title?: string; code: string }) {
  return (
    <div className="mb-4">
      {title && <p className="text-xs text-blue-400 font-semibold mb-1">{title}</p>}
      <pre className="bg-slate-950 border border-slate-700/50 rounded-lg p-4 text-xs text-slate-300 overflow-x-auto whitespace-pre">{code}</pre>
    </div>
  );
}

function Badge({ text, color = 'bg-blue-500/20 text-blue-400' }: { text: string; color?: string }) {
  return <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${color}`}>{text}</span>;
}

function InfoBox({ children, type = 'info' }: { children: React.ReactNode; type?: 'info' | 'warning' | 'success' }) {
  const colors = { info: 'bg-blue-500/10 border-blue-500/30 text-blue-300', warning: 'bg-amber-500/10 border-amber-500/30 text-amber-300', success: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' };
  return <div className={`border rounded-lg p-4 text-sm mb-4 ${colors[type]}`}>{children}</div>;
}

// ════════════════════════════════════════════════════════════════════
// SECTION: Overview & Architecture
// ════════════════════════════════════════════════════════════════════
function OverviewSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">BizOne Merchant OS — Overview</h2>
      <p className="text-slate-400">Complete merchant operating system powering every business in the RTMN ecosystem. 219 screens across 21 modules.</p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Total Screens', value: '219', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/30' },
          { label: 'Categories', value: '21', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30' },
          { label: 'POS Variants', value: '13', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/30' },
          { label: 'Merchant Tiers', value: '4', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/30' },
        ].map(s => (
          <div key={s.label} className={`${s.bg} border rounded-lg p-4 text-center`}>
            <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
            <div className="text-xs text-slate-400 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <Expandable title="System Architecture" icon={Layers} defaultOpen={true}>
        <CodeBlock title="BizOne ↔ Rabtul Data Flow" code={`┌─────────────────────────────────────────────────────┐
│                MERCHANT DEVICE                       │
│  (Tablet / Mobile / Desktop / POS Terminal)          │
└──────────────────┬──────────────────────────────────┘
                   │ HTTPS / WebSocket
                   ▼
┌──────────────────────────────────────────────────────┐
│              BizOne FRONTEND (React Native / Web)    │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐     │
│  │ POS  │ │ Inv  │ │ CRM  │ │ Fin  │ │ Staff│     │
│  └──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘     │
│     └────────┴────────┴────────┴────────┘           │
│                    BizOne SDK                        │
└──────────────────┬──────────────────────────────────┘
                   │ REST / gRPC
                   ▼
┌──────────────────────────────────────────────────────┐
│              RABTUL API GATEWAY                       │
│  Rate Limiting → Auth → Routing → Load Balancing     │
└──────┬────────┬────────┬────────┬───────────────────┘
       ▼        ▼        ▼        ▼
  ┌────────┐ ┌──────┐ ┌──────┐ ┌──────┐
  │Identity│ │Wallet│ │Rules │ │Events│
  │  SSO   │ │Ledger│ │Engine│ │ Bus  │
  └────────┘ └──────┘ └──────┘ └──────┘`} />
        <DocTable headers={['Layer', 'Technology', 'Purpose']} rows={[
          ['Frontend', 'React Native (iOS/Android), React (Web Dashboard)', 'Merchant UI across devices'],
          ['Offline Storage', 'SQLite (mobile), IndexedDB (web)', 'Offline-first POS transactions'],
          ['API Client', 'BizOne SDK (auto-generated from OpenAPI)', 'Type-safe API calls with retry logic'],
          ['API Gateway', 'Rabtul Gateway (NestJS + Kong)', 'Authentication, rate limiting, routing'],
          ['Core Services', 'Rabtul microservices (Node.js, Go)', 'Wallet, Rules, Events, Identity'],
          ['Database', 'PostgreSQL (primary), Redis (cache), MongoDB (logs)', 'ACID transactions, fast reads, audit trails'],
          ['Event Bus', 'Kafka (3-node cluster)', 'Real-time sync, webhook delivery'],
        ]} />
      </Expandable>

      <Expandable title="Module Dependency Map" icon={Network}>
        <CodeBlock code={`POS ──────────► Inventory (stock deduction)
 │              │
 ├─► Payments   ├─► Supplier & Procurement (auto-reorder)
 │              │
 ├─► CRM        └─► Reports (stock variance)
 │    │
 │    ├─► Loyalty & Rewards (points earn)
 │    └─► Marketing (campaign targeting)
 │
 ├─► Financial Management (revenue recording)
 │    └─► Compliance & Tax (GST/VAT calculation)
 │
 └─► Orders ──► Shipping & Delivery (dispatch)
                 │
Kitchen ◄────────┘ (KDS order routing)

Staff Management ──► All Modules (RBAC enforcement)
Dashboard ◄──────── All Modules (aggregated metrics)
Integrations ──────► External Systems (ERP, payment gateways)`} />
      </Expandable>

      <Expandable title="Merchant Tiers" icon={Star}>
        <DocTable headers={['Tier', 'Price/mo', 'Screens Access', 'Key Limits']} rows={[
          ['Free', '0 AED', '45 screens (POS, basic inventory, basic reports)', '1 store, 2 staff, 100 products'],
          ['Bronze', '199 AED', '120 screens (+CRM, marketing, analytics)', '3 stores, 10 staff, 5K products'],
          ['Silver', '499 AED', '180 screens (+multi-store, integrations, advanced)', '10 stores, 50 staff, 50K products'],
          ['Diamond', '999 AED', 'All 219 screens (full access)', 'Unlimited stores/staff/products'],
        ]} />
      </Expandable>

      <Expandable title="RBAC — Role-Based Access Control" icon={Shield}>
        <DocTable headers={['Role', 'Level', 'Access Scope', 'Key Permissions']} rows={[
          ['Owner', '50', 'Full access to all 219 screens', 'Create/delete staff, financial reports, settings, API keys'],
          ['Manager', '40', '~160 screens (no billing/settings)', 'Approve refunds, manage staff shifts, view reports, run campaigns'],
          ['Staff', '30', '~80 screens (operational only)', 'Process sales, view inventory, take orders, check in customers'],
        ]} />
        <InfoBox type="info">Every API call includes JWT with role level. Rabtul Gateway enforces access before routing to service.</InfoBox>
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION: Authentication & Onboarding (3 screens)
// ════════════════════════════════════════════════════════════════════
function AuthSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Authentication & Onboarding</h2>
      <p className="text-slate-400">3 screens — merchant registration, multi-step business setup, and completion.</p>

      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['Registration', 'MerchantSignup', 'Standard', 'Phone/email signup with business type selection (Retail, F&B, Services, B2B)'],
        ['Business Details', 'MerchantBusinessDetails', 'Multi-Step', '12-step onboarding wizard: docs, bank, store setup'],
        ['Completion', 'MerchantSuccess', 'Standard', 'Confirmation with next steps and dashboard redirect'],
      ]} />

      <Expandable title="12-Step Onboarding Flow" icon={UserPlus} defaultOpen={true}>
        <CodeBlock title="MerchantBusinessDetails — Step-by-Step" code={`Step 1:  Business Name & Category
         → Input: name, category (dropdown), sub-category
         → Validation: unique name check via API

Step 2:  Business Type & Structure
         → Sole Proprietorship / LLC / Partnership / Free Zone
         → Auto-adjusts required documents

Step 3:  Trade License Upload
         → Photo capture or file upload (PDF/JPG/PNG)
         → OCR auto-extraction (license #, expiry, activities)
         → Rabtul API: POST /api/kyc/document/verify

Step 4:  Owner Emirates ID / Aadhaar
         → Front + back photo
         → Biometric verification via Rabtul Identity
         → Rabtul API: POST /api/identity/verify

Step 5:  Tax Registration (TRN / GSTIN)
         → VAT/GST number input
         → Auto-validation against government registry
         → Rabtul API: POST /api/kyc/tax/verify

Step 6:  Bank Account Verification
         → IBAN / Account number + IFSC
         → Penny-drop verification (1 AED test credit)
         → Rabtul API: POST /api/wallet/bank/verify

Step 7:  Store Setup
         → Address (Google Maps picker), photos (min 3)
         → Operating hours per day, timezone
         → Delivery radius (if applicable)

Step 8:  Catalog Import
         → Options: Manual, CSV upload, Shopify/WooCommerce sync
         → Template download with sample data
         → Bulk validation: name, price, SKU, category

Step 9:  POS Configuration
         → Select POS variant (Standard, F&B, Services, Offline)
         → Hardware setup: printer, scanner, NFC reader
         → Test print receipt

Step 10: Staff Accounts
         → Invite staff by phone/email
         → Assign roles: Manager (L40) or Staff (L30)
         → Set per-module permissions

Step 11: Test Transaction
         → Sandbox mode enabled
         → Process test sale (AED 1.00)
         → Verify receipt, inventory deduction, coin earn

Step 12: HQ Review & Go-Live
         → Status: PENDING_REVIEW
         → HQ Admin reviews docs + bank
         → On approval: status → ACTIVE, merchant notified`} />
      </Expandable>

      <Expandable title="Data Model" icon={Layers}>
        <DocTable headers={['Entity', 'Field', 'Type', 'Constraints']} rows={[
          ['merchants', 'id', 'UUID', 'PK, auto-generated'],
          ['merchants', 'business_name', 'VARCHAR(255)', 'NOT NULL, UNIQUE'],
          ['merchants', 'business_type', 'ENUM', 'retail|f_and_b|services|b2b'],
          ['merchants', 'legal_structure', 'ENUM', 'sole|llc|partnership|free_zone'],
          ['merchants', 'category_id', 'UUID', 'FK → categories.id'],
          ['merchants', 'status', 'ENUM', 'draft|pending_review|active|suspended|closed'],
          ['merchants', 'tier', 'ENUM', 'free|bronze|silver|diamond'],
          ['merchants', 'owner_id', 'UUID', 'FK → merchant_users.id'],
          ['merchants', 'trade_license_number', 'VARCHAR(50)', 'UNIQUE, verified'],
          ['merchants', 'tax_registration_number', 'VARCHAR(50)', 'NULLABLE'],
          ['merchants', 'bank_account_verified', 'BOOLEAN', 'DEFAULT false'],
          ['merchants', 'onboarding_step', 'INTEGER', '1-12, tracks progress'],
          ['merchants', 'created_at', 'TIMESTAMP', 'DEFAULT NOW()'],
          ['merchant_users', 'id', 'UUID', 'PK'],
          ['merchant_users', 'merchant_id', 'UUID', 'FK → merchants.id'],
          ['merchant_users', 'role', 'ENUM', 'owner|manager|staff'],
          ['merchant_users', 'role_level', 'INTEGER', '50|40|30'],
          ['merchant_users', 'permissions', 'JSONB', '{"pos":true,"inventory":true,...}'],
          ['merchant_users', 'phone', 'VARCHAR(20)', 'NOT NULL, UNIQUE per merchant'],
          ['merchant_users', 'pin_hash', 'VARCHAR(255)', 'For quick POS login'],
        ]} />
      </Expandable>

      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['POST', '/api/merchant/signup', 'Create merchant account', 'Public'],
          ['PUT', '/api/merchant/onboarding/{step}', 'Update onboarding step data', 'Owner'],
          ['POST', '/api/merchant/onboarding/document', 'Upload verification document', 'Owner'],
          ['GET', '/api/merchant/onboarding/status', 'Get current onboarding progress', 'Owner'],
          ['POST', '/api/merchant/onboarding/complete', 'Submit for HQ review', 'Owner'],
          ['POST', '/api/merchant/staff/invite', 'Invite staff member', 'Owner'],
          ['PUT', '/api/merchant/staff/{id}/role', 'Update staff role/permissions', 'Owner'],
        ]} />
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION: Dashboard & Analytics (6 screens)
// ════════════════════════════════════════════════════════════════════
function DashboardSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Dashboard & Analytics</h2>
      <p className="text-slate-400">6 screens — main KPIs, deep analytics, benchmarks, deal performance, and multi-store views.</p>

      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['Main Dashboard', 'MerchantDashboard', 'Standard', 'Today\'s KPIs, sales trends, top products, pending actions'],
        ['Analytics', 'MerchantAnalytics', 'Tab View', 'Revenue, orders, customers, AOV, ratings over time'],
        ['Benchmarks', 'MerchantBenchmarks', 'Standard', 'Performance vs category average, city average, top 10%'],
        ['Deal Analytics', 'MerchantDealAnalytics', 'Standard', 'Offer/promotion performance, ROI, redemption rates'],
        ['Multi-Store Overview', 'MerchantMultiStore', 'Standard', 'All locations on map, per-store status badges'],
        ['Multi-Store Dashboard', 'MerchantMultiStoreDashboard', 'Tab View', 'Aggregated metrics, store comparison, cross-store trends'],
      ]} />

      <Expandable title="MerchantDashboard — KPI Cards" icon={BarChart3} defaultOpen={true}>
        <DocTable headers={['KPI Card', 'Metric', 'Data Source', 'Refresh Rate']} rows={[
          ['Today\'s Revenue', 'SUM(transactions.amount) WHERE date=today', 'Transactions Service', 'Real-time WebSocket'],
          ['Orders Today', 'COUNT(orders) WHERE date=today', 'Orders Service', 'Real-time WebSocket'],
          ['Average Order Value', 'revenue / orders_count', 'Computed client-side', 'Real-time'],
          ['Customers Today', 'COUNT(DISTINCT customer_id)', 'CRM Service', 'Every 5 min'],
          ['Top Product', 'MAX(quantity_sold) grouped by product', 'Inventory Service', 'Every 15 min'],
          ['Rating Average', 'AVG(reviews.rating) last 30 days', 'Reviews Service', 'Hourly'],
          ['Pending Actions', 'COUNT(low_stock + pending_orders + reviews)', 'Aggregated', 'Every 5 min'],
          ['Coin Earned Today', 'SUM(coin_transactions.amount) WHERE type=earn', 'Rabtul Wallet Ledger', 'Real-time'],
        ]} />
      </Expandable>

      <Expandable title="MerchantAnalytics — Tab Breakdown" icon={TrendingUp}>
        <DocTable headers={['Tab', 'Charts/Widgets', 'Filters', 'Export']} rows={[
          ['Revenue', 'Line chart (daily/weekly/monthly), payment method pie chart', 'Date range, store, category', 'CSV, PDF'],
          ['Orders', 'Bar chart (by hour), status funnel, channel breakdown', 'Date range, status, channel', 'CSV'],
          ['Customers', 'New vs returning, RFM distribution, cohort retention', 'Date range, segment, tier', 'CSV'],
          ['Products', 'Top sellers, slow movers, margin analysis, ABC classification', 'Date range, category', 'CSV, PDF'],
          ['Ratings', 'Star distribution, sentiment analysis, response rate', 'Date range, platform', 'CSV'],
        ]} />
      </Expandable>

      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['GET', '/api/merchant/dashboard/summary', 'Today\'s KPI summary', 'Manager+'],
          ['GET', '/api/merchant/analytics/revenue', 'Revenue analytics with filters', 'Manager+'],
          ['GET', '/api/merchant/analytics/orders', 'Order analytics', 'Manager+'],
          ['GET', '/api/merchant/analytics/customers', 'Customer analytics', 'Manager+'],
          ['GET', '/api/merchant/analytics/products', 'Product performance', 'Manager+'],
          ['GET', '/api/merchant/benchmarks', 'Category/city benchmarks', 'Owner'],
          ['GET', '/api/merchant/deals/analytics', 'Deal/promotion ROI', 'Manager+'],
          ['GET', '/api/merchant/multistore/overview', 'All stores summary', 'Owner'],
          ['GET', '/api/merchant/multistore/compare', 'Cross-store comparison', 'Owner'],
        ]} />
      </Expandable>

      <Expandable title="Data Model" icon={Layers}>
        <DocTable headers={['Entity', 'Field', 'Type', 'Description']} rows={[
          ['merchant_daily_stats', 'merchant_id', 'UUID', 'FK → merchants.id'],
          ['merchant_daily_stats', 'date', 'DATE', 'Partition key'],
          ['merchant_daily_stats', 'total_revenue', 'DECIMAL(12,2)', 'Sum of all transactions'],
          ['merchant_daily_stats', 'total_orders', 'INTEGER', 'Count of completed orders'],
          ['merchant_daily_stats', 'unique_customers', 'INTEGER', 'Distinct customer count'],
          ['merchant_daily_stats', 'avg_order_value', 'DECIMAL(10,2)', 'revenue / orders'],
          ['merchant_daily_stats', 'top_product_id', 'UUID', 'Best seller by quantity'],
          ['merchant_daily_stats', 'coins_earned', 'DECIMAL(12,2)', 'Total NuqtaCoin earned'],
          ['merchant_daily_stats', 'avg_rating', 'DECIMAL(3,2)', 'Average review rating'],
          ['merchant_benchmarks', 'category_id', 'UUID', 'Business category'],
          ['merchant_benchmarks', 'city', 'VARCHAR(50)', 'City for benchmark'],
          ['merchant_benchmarks', 'avg_revenue', 'DECIMAL(12,2)', 'Category average daily revenue'],
          ['merchant_benchmarks', 'top_10_pct_revenue', 'DECIMAL(12,2)', 'Top 10% threshold'],
        ]} />
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION: POS & Transactions (7 screens)
// ════════════════════════════════════════════════════════════════════
function PosSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">POS & Transactions</h2>
      <p className="text-slate-400">7 screens — the core point-of-sale system powering every merchant transaction.</p>

      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['Main POS', 'MerchantPOS', 'Full-Screen', 'Product grid, cart, checkout, payment — main selling screen'],
        ['Offline POS', 'MerchantOfflinePOS', 'Full-Screen', 'Offline mode with local SQLite storage'],
        ['Offline Sync', 'MerchantOfflinePOSSync', 'Modal', 'Sync offline transactions to cloud when connectivity resumes'],
        ['POS Integration', 'MerchantPOSIntegration', 'Tab View', 'Connect hardware: printers, scanners, card readers'],
        ['Transactions', 'MerchantPOSTransactions', 'Standard', 'Transaction history, search, void, refund'],
        ['Category POS', 'MerchantCategoryPOS', 'Full-Screen', 'Specialized POS for Restaurant, Salon, Medical, etc.'],
        ['Simple POS', 'MerchantSimplePOS', 'Full-Screen', 'Simplified single-screen POS for small merchants'],
      ]} />

      <Expandable title="Standard Sale Flow" icon={ShoppingCart} defaultOpen={true}>
        <CodeBlock title="MerchantPOS — Checkout Flow" code={`1. Merchant opens POS screen
2. Add items: scan barcode / search / browse grid / manual entry
3. Cart updates: line items, quantities, subtotal
4. Apply discounts: coupon code, loyalty points, manual discount
5. Select payment method:
   a) Cash → enter amount tendered → calculate change
   b) Card → tap/insert/swipe → gateway processes → Rabtul confirms
   c) QR Pay → display QR → customer scans with Nuqta app → Rabtul confirms
   d) Split → combine multiple methods (cash + card, card + coins)
   e) NuqtaCoin → customer taps coin redeem → Rabtul Wallet debit
6. Transaction created: POST /api/merchant/pos/transaction
7. Receipt generated: thermal print + digital (SMS/WhatsApp)
8. Inventory deducted: Rabtul Event Bus → Inventory Service
9. Coins earned: Rabtul Rule Engine evaluates → Wallet Ledger credits
10. Real-time update: WebSocket pushes to Dashboard`} />
      </Expandable>

      <Expandable title="Offline Mode Strategy" icon={Wifi}>
        <CodeBlock title="MerchantOfflinePOS — Sync Architecture" code={`ONLINE STATE:
  Transaction → API call → Rabtul processes → Confirm

OFFLINE DETECTION:
  navigator.onLine === false OR API timeout > 5s
  → Switch to offline mode automatically
  → Show offline indicator badge

OFFLINE STATE:
  Transaction → SQLite (mobile) / IndexedDB (web)
  → Local receipt with "OFFLINE" watermark
  → Queue in sync_queue table

SYNC ON RECONNECT:
  1. Detect connectivity restored
  2. Show MerchantOfflinePOSSync modal
  3. Process queue FIFO (oldest first)
  4. For each transaction:
     → POST /api/merchant/pos/transaction/offline-sync
     → Server validates (check stock, calculate coins)
     → On conflict: flag for manual review
  5. Update local IDs with server IDs
  6. Clear sync queue

CONFLICT RESOLUTION:
  - Stock insufficient: Auto-approve (sale already happened)
  - Price changed: Use price at time of sale (local cache)
  - Customer ID mismatch: Flag for review
  - Duplicate detection: Idempotency key per transaction`} />
      </Expandable>

      <Expandable title="POS Variants" icon={Smartphone}>
        <DocTable headers={['Variant', 'Component', 'Extra Features', 'Target Business']} rows={[
          ['Standard POS', 'MerchantPOS', 'Product grid, barcode scan, basic cart', 'Retail stores'],
          ['F&B POS', 'MerchantCategoryPOS[restaurant]', 'Table management, KDS integration, modifiers, courses', 'Restaurants, cafes'],
          ['Salon POS', 'MerchantCategoryPOS[salon]', 'Appointment booking, service duration, staff assignment', 'Beauty salons, spas'],
          ['Medical POS', 'MerchantCategoryPOS[medical]', 'Insurance verification, prescription tracking', 'Clinics, pharmacies'],
          ['Simple POS', 'MerchantSimplePOS', 'Single-page, amount entry only, no inventory', 'Street vendors, micro-merchants'],
          ['Offline POS', 'MerchantOfflinePOS', 'Full offline capability, local storage', 'Rural areas, events'],
          ['Soft POS', 'MerchantSoftPOS', 'NFC tap-to-pay on merchant\'s phone', 'Mobile merchants, delivery'],
        ]} />
      </Expandable>

      <Expandable title="Data Model" icon={Layers}>
        <DocTable headers={['Entity', 'Field', 'Type', 'Constraints']} rows={[
          ['pos_transactions', 'id', 'UUID', 'PK'],
          ['pos_transactions', 'merchant_id', 'UUID', 'FK, indexed'],
          ['pos_transactions', 'store_id', 'UUID', 'FK → merchant_stores.id'],
          ['pos_transactions', 'staff_id', 'UUID', 'FK → merchant_users.id (who processed)'],
          ['pos_transactions', 'customer_id', 'UUID', 'FK → users.id (nullable for walk-ins)'],
          ['pos_transactions', 'type', 'ENUM', 'sale|refund|void|exchange'],
          ['pos_transactions', 'status', 'ENUM', 'pending|completed|failed|voided|refunded'],
          ['pos_transactions', 'subtotal', 'DECIMAL(12,2)', 'Before tax/discount'],
          ['pos_transactions', 'discount_amount', 'DECIMAL(10,2)', 'Total discounts applied'],
          ['pos_transactions', 'tax_amount', 'DECIMAL(10,2)', 'Calculated VAT/GST'],
          ['pos_transactions', 'total', 'DECIMAL(12,2)', 'Final amount charged'],
          ['pos_transactions', 'payment_method', 'ENUM', 'cash|card|qr|split|coins|bnpl'],
          ['pos_transactions', 'payment_details', 'JSONB', '{"methods":[{"type":"cash","amount":50}]}'],
          ['pos_transactions', 'coins_earned', 'DECIMAL(10,2)', 'NuqtaCoin earned on this sale'],
          ['pos_transactions', 'coins_redeemed', 'DECIMAL(10,2)', 'NuqtaCoin used as payment'],
          ['pos_transactions', 'is_offline', 'BOOLEAN', 'Was processed offline'],
          ['pos_transactions', 'idempotency_key', 'VARCHAR(64)', 'UNIQUE, prevents duplicate sync'],
          ['pos_transactions', 'receipt_number', 'VARCHAR(20)', 'Sequential per store per day'],
          ['pos_transactions', 'created_at', 'TIMESTAMP', 'Transaction time'],
          ['pos_line_items', 'id', 'UUID', 'PK'],
          ['pos_line_items', 'transaction_id', 'UUID', 'FK → pos_transactions.id'],
          ['pos_line_items', 'product_id', 'UUID', 'FK → products.id'],
          ['pos_line_items', 'variant_id', 'UUID', 'FK → product_variants.id, nullable'],
          ['pos_line_items', 'quantity', 'DECIMAL(10,3)', 'Supports fractional (kg, liters)'],
          ['pos_line_items', 'unit_price', 'DECIMAL(10,2)', 'Price at time of sale'],
          ['pos_line_items', 'discount', 'DECIMAL(10,2)', 'Per-item discount'],
          ['pos_line_items', 'tax_rate', 'DECIMAL(5,2)', 'VAT/GST rate applied'],
          ['pos_line_items', 'total', 'DECIMAL(10,2)', '(qty × price) - discount + tax'],
        ]} />
      </Expandable>

      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['POST', '/api/merchant/pos/transaction', 'Create new sale/refund', 'Staff+'],
          ['POST', '/api/merchant/pos/transaction/offline-sync', 'Sync offline transactions', 'Staff+'],
          ['GET', '/api/merchant/pos/transactions', 'List transactions with filters', 'Staff+'],
          ['GET', '/api/merchant/pos/transactions/{id}', 'Get transaction details', 'Staff+'],
          ['POST', '/api/merchant/pos/transactions/{id}/void', 'Void a transaction', 'Manager+'],
          ['POST', '/api/merchant/pos/transactions/{id}/refund', 'Process refund (full/partial)', 'Manager+'],
          ['GET', '/api/merchant/pos/receipt/{id}', 'Get/regenerate receipt', 'Staff+'],
          ['POST', '/api/merchant/pos/drawer/open', 'Open cash drawer session', 'Staff+'],
          ['POST', '/api/merchant/pos/drawer/close', 'Close drawer with reconciliation', 'Manager+'],
          ['GET', '/api/merchant/pos/quick-products', 'Frequently sold products grid', 'Staff+'],
        ]} />
      </Expandable>

      <Expandable title="Permission Matrix" icon={Shield}>
        <DocTable headers={['Action', 'Owner', 'Manager', 'Staff']} rows={[
          ['Process sale', '✓', '✓', '✓'],
          ['Apply manual discount', '✓', '✓', '✗ (needs approval)'],
          ['Process refund', '✓', '✓', '✗'],
          ['Void transaction', '✓', '✓', '✗'],
          ['Open cash drawer', '✓', '✓', '✓'],
          ['Close/reconcile drawer', '✓', '✓', '✗'],
          ['View all transactions', '✓', '✓', 'Own transactions only'],
          ['Configure POS settings', '✓', '✗', '✗'],
          ['Connect hardware', '✓', '✓', '✗'],
          ['Switch POS variant', '✓', '✗', '✗'],
        ]} />
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// PLACEHOLDER SECTIONS (will be expanded)
// ════════════════════════════════════════════════════════════════════
function OrdersSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Orders</h2>
      <p className="text-slate-400">3 screens — core order management, multi-channel aggregation, and supplier purchase orders.</p>
      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['Core Orders', 'MerchantOrders', 'Tab View', 'All orders: pending, preparing, ready, dispatched, completed, cancelled'],
        ['Multi-Channel', 'MerchantOrdersMultiChannel', 'Standard', 'Aggregate orders from POS, Nuqta app, Wasil, WhatsApp, website'],
        ['Purchase Orders', 'MerchantPurchaseOrders', 'Standard', 'Create/manage supplier POs, track delivery, match invoices'],
      ]} />
      <Expandable title="Order Status Flow" icon={ShoppingCart} defaultOpen={true}>
        <CodeBlock code={`NEW ──► ACCEPTED ──► PREPARING ──► READY ──► DISPATCHED ──► DELIVERED ──► COMPLETED
 │         │            │           │          │                            │
 └► REJECTED  └► CANCELLED  └► CANCELLED  └► FAILED     └► RETURNED ──► REFUNDED

Triggers:
  NEW → ACCEPTED:       Staff clicks "Accept" or auto-accept rule fires
  ACCEPTED → PREPARING: Staff clicks "Start Preparing" or auto after 30s
  PREPARING → READY:    Staff clicks "Ready" or KDS marks complete
  READY → DISPATCHED:   Delivery partner picks up (Wasil integration)
  DISPATCHED → DELIVERED: Rider confirms drop-off + customer confirms
  DELIVERED → COMPLETED: Auto after 24h or customer confirms satisfaction`} />
      </Expandable>
      <Expandable title="Data Model" icon={Layers}>
        <DocTable headers={['Entity', 'Field', 'Type', 'Constraints']} rows={[
          ['orders', 'id', 'UUID', 'PK'],
          ['orders', 'merchant_id', 'UUID', 'FK, indexed'],
          ['orders', 'customer_id', 'UUID', 'FK → users.id'],
          ['orders', 'channel', 'ENUM', 'pos|app|wasil|whatsapp|website'],
          ['orders', 'status', 'ENUM', 'new|accepted|preparing|ready|dispatched|delivered|completed|cancelled|refunded'],
          ['orders', 'subtotal', 'DECIMAL(12,2)', 'Before tax/delivery'],
          ['orders', 'delivery_fee', 'DECIMAL(10,2)', 'Delivery charge'],
          ['orders', 'tax_amount', 'DECIMAL(10,2)', 'VAT/GST'],
          ['orders', 'total', 'DECIMAL(12,2)', 'Final amount'],
          ['orders', 'payment_status', 'ENUM', 'pending|paid|refunded|failed'],
          ['orders', 'delivery_address', 'JSONB', '{"lat","lng","address","instructions"}'],
          ['orders', 'estimated_ready_at', 'TIMESTAMP', 'ETA for preparation'],
          ['orders', 'notes', 'TEXT', 'Customer special instructions'],
          ['order_items', 'id', 'UUID', 'PK'],
          ['order_items', 'order_id', 'UUID', 'FK → orders.id'],
          ['order_items', 'product_id', 'UUID', 'FK → products.id'],
          ['order_items', 'quantity', 'INTEGER', 'NOT NULL'],
          ['order_items', 'unit_price', 'DECIMAL(10,2)', 'Price at order time'],
          ['order_items', 'modifiers', 'JSONB', '[{"name":"Extra cheese","price":5}]'],
          ['purchase_orders', 'id', 'UUID', 'PK'],
          ['purchase_orders', 'merchant_id', 'UUID', 'FK'],
          ['purchase_orders', 'supplier_id', 'UUID', 'FK → suppliers.id'],
          ['purchase_orders', 'status', 'ENUM', 'draft|sent|confirmed|received|invoiced|paid'],
          ['purchase_orders', 'expected_date', 'DATE', 'Expected delivery date'],
          ['purchase_orders', 'total_amount', 'DECIMAL(12,2)', 'PO total'],
        ]} />
      </Expandable>
      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['GET', '/api/merchant/orders', 'List orders with status/channel filters', 'Staff+'],
          ['GET', '/api/merchant/orders/{id}', 'Get order details', 'Staff+'],
          ['PATCH', '/api/merchant/orders/{id}/status', 'Update order status', 'Staff+'],
          ['POST', '/api/merchant/orders/{id}/refund', 'Process full/partial refund', 'Manager+'],
          ['GET', '/api/merchant/orders/multi-channel', 'Aggregated multi-channel view', 'Manager+'],
          ['POST', '/api/merchant/purchase-orders', 'Create purchase order', 'Manager+'],
          ['PATCH', '/api/merchant/purchase-orders/{id}', 'Update PO status/items', 'Manager+'],
          ['POST', '/api/merchant/purchase-orders/{id}/receive', 'Mark goods received (GRN)', 'Staff+'],
        ]} />
      </Expandable>
    </div>
  );
}

function InventorySection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Inventory</h2>
      <p className="text-slate-400">10 screens — stock management, forecasting, transfers, barcodes, batch tracking, and expiry.</p>
      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['Core Inventory', 'MerchantInventory', 'Tab View', 'Stock levels, categories, low-stock alerts, quick adjustments'],
        ['Advanced', 'MerchantInventoryAdvanced', 'Tab View', 'Variance analysis, forecasting, stock transfers, ABC classification'],
        ['Forecasting', 'MerchantInventoryForecasting', 'Standard', 'AI demand prediction per SKU, seasonal adjustments, reorder suggestions'],
        ['Transfers', 'MerchantInventoryTransfer', 'Standard', 'Inter-store stock transfers, request/approve workflow'],
        ['Auto Restock', 'MerchantAutoRestock', 'Standard', 'Set reorder points, auto-generate POs when stock hits threshold'],
        ['Autopilot', 'MerchantAutopilot', 'Standard', 'AI-driven inventory decisions: auto-reorder, dynamic safety stock'],
        ['Barcode Gen', 'MerchantBarcodeGenerator', 'Modal', 'Generate EAN-13, UPC-A, Code128 barcodes, print labels'],
        ['Barcode Scan', 'MerchantBarcodeScanner', 'Full-Screen', 'Camera/hardware scanner for stock count, receiving, search'],
        ['Batch Tracking', 'MerchantBatchTracking', 'Standard', 'Track production batches, lot numbers, supplier batches'],
        ['Expiry Dashboard', 'MerchantExpiryDashboard', 'Standard', 'FEFO management, expiry alerts, clearance automation'],
      ]} />
      <Expandable title="Stock Management Flow" icon={Package} defaultOpen={true}>
        <CodeBlock code={`STOCK IN:
  Purchase Order received → GRN created → Stock added
  Manual adjustment → Staff enters qty + reason
  Transfer IN → From another store → Stock added

STOCK OUT:
  POS sale → Auto-deduction via Rabtul Event Bus
  Transfer OUT → To another store → Stock deducted
  Waste/damage → Staff logs with reason + photo
  Expiry → Auto-flagged, moved to clearance or write-off

STOCK COUNT:
  1. Manager initiates count cycle (full or partial)
  2. Staff scans barcodes and enters physical counts
  3. System calculates variance (physical - system)
  4. Manager reviews variance report
  5. Approve adjustments → stock levels corrected
  6. Variance logged in audit trail`} />
      </Expandable>
      <Expandable title="Data Model" icon={Layers}>
        <DocTable headers={['Entity', 'Field', 'Type', 'Constraints']} rows={[
          ['products', 'id', 'UUID', 'PK'],
          ['products', 'merchant_id', 'UUID', 'FK, indexed'],
          ['products', 'name', 'VARCHAR(255)', 'NOT NULL'],
          ['products', 'sku', 'VARCHAR(50)', 'UNIQUE per merchant'],
          ['products', 'barcode', 'VARCHAR(50)', 'EAN-13/UPC-A'],
          ['products', 'category_id', 'UUID', 'FK → product_categories.id'],
          ['products', 'cost_price', 'DECIMAL(10,2)', 'Purchase cost'],
          ['products', 'selling_price', 'DECIMAL(10,2)', 'Retail price'],
          ['products', 'tax_rate', 'DECIMAL(5,2)', 'VAT/GST percentage'],
          ['products', 'unit_of_measure', 'ENUM', 'piece|kg|liter|meter|box'],
          ['products', 'track_inventory', 'BOOLEAN', 'DEFAULT true'],
          ['products', 'reorder_point', 'INTEGER', 'Low stock threshold'],
          ['products', 'reorder_quantity', 'INTEGER', 'Default reorder qty'],
          ['product_stock', 'product_id', 'UUID', 'FK → products.id'],
          ['product_stock', 'store_id', 'UUID', 'FK → merchant_stores.id'],
          ['product_stock', 'quantity', 'DECIMAL(10,3)', 'Current stock level'],
          ['product_stock', 'reserved', 'DECIMAL(10,3)', 'Reserved for pending orders'],
          ['product_stock', 'available', 'DECIMAL(10,3)', 'quantity - reserved (computed)'],
          ['stock_movements', 'id', 'UUID', 'PK'],
          ['stock_movements', 'product_id', 'UUID', 'FK → products.id'],
          ['stock_movements', 'type', 'ENUM', 'sale|purchase|transfer_in|transfer_out|adjustment|waste|return'],
          ['stock_movements', 'quantity', 'DECIMAL(10,3)', 'Positive or negative'],
          ['stock_movements', 'reference_id', 'UUID', 'FK to order/PO/transfer'],
          ['stock_movements', 'reason', 'TEXT', 'Reason for adjustment'],
          ['stock_movements', 'staff_id', 'UUID', 'Who performed'],
          ['product_batches', 'id', 'UUID', 'PK'],
          ['product_batches', 'product_id', 'UUID', 'FK → products.id'],
          ['product_batches', 'batch_number', 'VARCHAR(50)', 'Supplier batch reference'],
          ['product_batches', 'manufactured_date', 'DATE', 'Production date'],
          ['product_batches', 'expiry_date', 'DATE', 'Expiration date, indexed'],
          ['product_batches', 'quantity', 'DECIMAL(10,3)', 'Remaining in batch'],
          ['product_batches', 'cost_price', 'DECIMAL(10,2)', 'Batch purchase cost'],
        ]} />
      </Expandable>
      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['GET', '/api/merchant/inventory', 'List products with stock levels', 'Staff+'],
          ['GET', '/api/merchant/inventory/{id}', 'Product detail with stock history', 'Staff+'],
          ['POST', '/api/merchant/inventory/adjustment', 'Manual stock adjustment', 'Manager+'],
          ['GET', '/api/merchant/inventory/low-stock', 'Products below reorder point', 'Staff+'],
          ['GET', '/api/merchant/inventory/expiring', 'Products expiring within N days', 'Staff+'],
          ['POST', '/api/merchant/inventory/stock-count', 'Initiate stock count cycle', 'Manager+'],
          ['POST', '/api/merchant/inventory/transfer', 'Create inter-store transfer', 'Manager+'],
          ['GET', '/api/merchant/inventory/forecast/{id}', 'AI demand forecast for product', 'Manager+'],
          ['POST', '/api/merchant/inventory/barcode/generate', 'Generate barcode for product', 'Manager+'],
          ['GET', '/api/merchant/inventory/batches', 'List batches with FEFO order', 'Staff+'],
          ['PUT', '/api/merchant/inventory/auto-restock/{id}', 'Set reorder rules for product', 'Manager+'],
        ]} />
      </Expandable>
      <Expandable title="Permission Matrix" icon={Shield}>
        <DocTable headers={['Action', 'Owner', 'Manager', 'Staff']} rows={[
          ['View stock levels', '✓', '✓', '✓'],
          ['Adjust stock manually', '✓', '✓', '✗'],
          ['Create stock count', '✓', '✓', '✗'],
          ['Perform stock count (scan)', '✓', '✓', '✓'],
          ['Approve variance', '✓', '✓', '✗'],
          ['Create transfer', '✓', '✓', '✗'],
          ['Set reorder rules', '✓', '✓', '✗'],
          ['Enable Autopilot', '✓', '✗', '✗'],
          ['Write off expired stock', '✓', '✓', '✗'],
          ['Generate barcodes', '✓', '✓', '✓'],
        ]} />
      </Expandable>
    </div>
  );
}

function CustomersSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Customer Management</h2>
      <p className="text-slate-400">8 screens — CRM, appointments, billing, booking, scheduling, and insurance verification.</p>
      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['CRM', 'MerchantCRM', 'Tab View', 'RFM analysis, customer segmentation, purchase history, communications'],
        ['Appointments', 'MerchantAppointments', 'Standard', 'Schedule appointments, send reminders, staff assignment'],
        ['Bill Management', 'MerchantBillManagement', 'Standard', 'Create, track, and send bills to customers'],
        ['Bill Splitting', 'MerchantBillSplitting', 'Modal', 'Split bill by item, by person, or equal split'],
        ['Bill Hold', 'MerchantBillHold', 'Modal', 'Pause bill and resume later (tab system)'],
        ['Booking Calendar', 'MerchantBookingCalendar', 'Standard', 'Visual calendar for table/room/equipment bookings'],
        ['Class Schedule', 'MerchantClassSchedule', 'Standard', 'Schedule classes/sessions with capacity management'],
        ['Insurance', 'MerchantClinicInsurance', 'Standard', 'Verify insurance, process claims, track approvals (medical)'],
      ]} />
      <Expandable title="RFM Segmentation" icon={Users} defaultOpen={true}>
        <DocTable headers={['Segment', 'Recency', 'Frequency', 'Monetary', 'Action']} rows={[
          ['Champions', '< 7 days', '10+ visits/mo', 'Top 20% spend', 'Reward, upsell premium'],
          ['Loyal', '< 14 days', '5-9 visits/mo', 'Above average', 'Loyalty program, early access'],
          ['Potential', '< 30 days', '2-4 visits/mo', 'Average', 'Nurture, frequency offers'],
          ['At Risk', '30-60 days', '1-2 visits/mo', 'Below average', 'Win-back campaign, discount'],
          ['Lost', '> 60 days', '< 1 visit/mo', 'Low', 'Re-engagement SMS/push, heavy discount'],
        ]} />
        <InfoBox type="info">RFM scores computed nightly by Rabtul AIRA engine. Merchants see segment labels and recommended actions.</InfoBox>
      </Expandable>
      <Expandable title="Data Model" icon={Layers}>
        <DocTable headers={['Entity', 'Field', 'Type', 'Constraints']} rows={[
          ['merchant_customers', 'id', 'UUID', 'PK (composite: merchant_id + customer_id)'],
          ['merchant_customers', 'merchant_id', 'UUID', 'FK'],
          ['merchant_customers', 'customer_id', 'UUID', 'FK → users.id'],
          ['merchant_customers', 'first_visit', 'TIMESTAMP', 'First transaction date'],
          ['merchant_customers', 'last_visit', 'TIMESTAMP', 'Most recent transaction'],
          ['merchant_customers', 'total_visits', 'INTEGER', 'Lifetime visit count'],
          ['merchant_customers', 'total_spend', 'DECIMAL(12,2)', 'Lifetime spend'],
          ['merchant_customers', 'avg_order_value', 'DECIMAL(10,2)', 'Computed'],
          ['merchant_customers', 'rfm_segment', 'ENUM', 'champion|loyal|potential|at_risk|lost'],
          ['merchant_customers', 'tags', 'TEXT[]', 'Custom merchant tags'],
          ['merchant_customers', 'notes', 'TEXT', 'Merchant notes about customer'],
          ['appointments', 'id', 'UUID', 'PK'],
          ['appointments', 'merchant_id', 'UUID', 'FK'],
          ['appointments', 'customer_id', 'UUID', 'FK → users.id'],
          ['appointments', 'staff_id', 'UUID', 'FK → merchant_users.id'],
          ['appointments', 'service_id', 'UUID', 'FK → products.id (service type)'],
          ['appointments', 'start_time', 'TIMESTAMP', 'Appointment start'],
          ['appointments', 'duration_minutes', 'INTEGER', 'Service duration'],
          ['appointments', 'status', 'ENUM', 'booked|confirmed|in_progress|completed|no_show|cancelled'],
        ]} />
      </Expandable>
      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['GET', '/api/merchant/customers', 'List customers with RFM filters', 'Manager+'],
          ['GET', '/api/merchant/customers/{id}', 'Customer profile + purchase history', 'Staff+'],
          ['POST', '/api/merchant/customers/{id}/tag', 'Add/remove custom tags', 'Manager+'],
          ['POST', '/api/merchant/appointments', 'Create appointment', 'Staff+'],
          ['GET', '/api/merchant/appointments', 'List appointments with calendar view', 'Staff+'],
          ['PATCH', '/api/merchant/appointments/{id}', 'Update appointment status', 'Staff+'],
          ['POST', '/api/merchant/bills', 'Create bill', 'Staff+'],
          ['POST', '/api/merchant/bills/{id}/split', 'Split bill', 'Staff+'],
          ['POST', '/api/merchant/bills/{id}/hold', 'Hold/resume bill', 'Staff+'],
          ['POST', '/api/merchant/insurance/verify', 'Verify insurance coverage', 'Staff+'],
        ]} />
      </Expandable>
    </div>
  );
}
function FinanceSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Financial Management</h2>
      <p className="text-slate-400">6 screens — accounting, accountant portal, cash drawer, commissions, credit ledger, and post-payment rewards.</p>
      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['Accounting', 'MerchantAccounting', 'Tab View', 'Revenue, expenses, P&L, bank reconciliation, journal entries'],
        ['Accountant Portal', 'MerchantAccountantPortal', 'Standard', 'Read-only access for external accountant/CA, export to Tally/Xero'],
        ['Cash Drawer', 'MerchantCashDrawer', 'Standard', 'Open/close sessions, cash count, variance report, denomination entry'],
        ['Commission Calc', 'MerchantCommissionCalculator', 'Standard', 'Staff commission rules (% of sale, flat per transaction, tiered)'],
        ['Credit Ledger', 'MerchantCreditLedger', 'Standard', 'Customer credit accounts, running balances, payment collection'],
        ['Post-Payment Rewards', 'MerchantPostPaymentRewards', 'Standard', 'Configure rewards issued after payment confirmation'],
      ]} />
      <Expandable title="Cash Drawer Workflow" icon={DollarSign} defaultOpen={true}>
        <CodeBlock code={`OPEN SESSION:
  1. Staff opens drawer → enters opening float (counted denominations)
  2. System records opening_amount, staff_id, timestamp
  3. All cash transactions tracked against this session

DURING SESSION:
  - Cash sale → cash_in += amount
  - Cash refund → cash_out += amount
  - Pay-in (petty cash deposit) → cash_in += amount
  - Pay-out (supplier payment) → cash_out += amount

CLOSE SESSION:
  1. Staff counts physical cash by denomination
  2. System calculates expected: opening + cash_in - cash_out
  3. Variance = physical_count - expected
  4. If variance > threshold → Manager approval required
  5. Session closed, report generated

DENOMINATION ENTRY:
  AED 1000 × __  AED 500 × __  AED 200 × __
  AED 100 × __   AED 50 × __   AED 20 × __
  AED 10 × __    AED 5 × __    Coins × __`} />
      </Expandable>
      <Expandable title="Data Model" icon={Layers}>
        <DocTable headers={['Entity', 'Field', 'Type', 'Constraints']} rows={[
          ['cash_drawer_sessions', 'id', 'UUID', 'PK'],
          ['cash_drawer_sessions', 'store_id', 'UUID', 'FK'],
          ['cash_drawer_sessions', 'opened_by', 'UUID', 'FK → merchant_users.id'],
          ['cash_drawer_sessions', 'closed_by', 'UUID', 'FK, nullable'],
          ['cash_drawer_sessions', 'opening_amount', 'DECIMAL(10,2)', 'Counted at start'],
          ['cash_drawer_sessions', 'expected_amount', 'DECIMAL(10,2)', 'Computed at close'],
          ['cash_drawer_sessions', 'actual_amount', 'DECIMAL(10,2)', 'Physical count at close'],
          ['cash_drawer_sessions', 'variance', 'DECIMAL(10,2)', 'actual - expected'],
          ['cash_drawer_sessions', 'status', 'ENUM', 'open|closed|reconciled'],
          ['cash_drawer_sessions', 'denominations', 'JSONB', '{"1000":2,"500":5,...}'],
          ['commission_rules', 'id', 'UUID', 'PK'],
          ['commission_rules', 'merchant_id', 'UUID', 'FK'],
          ['commission_rules', 'staff_id', 'UUID', 'FK, nullable (all staff if null)'],
          ['commission_rules', 'type', 'ENUM', 'percentage|flat|tiered'],
          ['commission_rules', 'value', 'DECIMAL(10,2)', 'Percentage or flat amount'],
          ['commission_rules', 'tiers', 'JSONB', '[{"min":0,"max":10000,"rate":2},...]'],
          ['customer_credits', 'id', 'UUID', 'PK'],
          ['customer_credits', 'merchant_id', 'UUID', 'FK'],
          ['customer_credits', 'customer_id', 'UUID', 'FK → users.id'],
          ['customer_credits', 'balance', 'DECIMAL(10,2)', 'Outstanding credit amount'],
          ['customer_credits', 'credit_limit', 'DECIMAL(10,2)', 'Max allowed credit'],
        ]} />
      </Expandable>
      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['GET', '/api/merchant/finance/summary', 'P&L summary for period', 'Owner'],
          ['GET', '/api/merchant/finance/revenue', 'Revenue breakdown', 'Manager+'],
          ['POST', '/api/merchant/cash-drawer/open', 'Open drawer session', 'Staff+'],
          ['POST', '/api/merchant/cash-drawer/close', 'Close with denomination count', 'Manager+'],
          ['GET', '/api/merchant/cash-drawer/sessions', 'List drawer sessions', 'Manager+'],
          ['GET', '/api/merchant/commissions', 'Staff commission report', 'Manager+'],
          ['PUT', '/api/merchant/commissions/rules', 'Set commission rules', 'Owner'],
          ['GET', '/api/merchant/credits', 'Customer credit ledger', 'Manager+'],
          ['POST', '/api/merchant/credits/{customerId}/adjust', 'Add/deduct credit', 'Manager+'],
          ['GET', '/api/merchant/finance/export/{format}', 'Export to Tally/Xero/CSV', 'Owner'],
        ]} />
      </Expandable>
    </div>
  );
}

function OffersSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Offers & Promotions</h2>
      <p className="text-slate-400">10 screens — offer creation, BOGO, birthday offers, cart recovery, cashback, clearance, combos, cross-sell, and demand signals.</p>
      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['Create Offer', 'CreateOffer', 'Multi-Step', '5-step wizard: Type → Products → Rules → Schedule → Review'],
        ['BOGO Offers', 'MerchantBOGOOffers', 'Standard', 'Buy One Get One: buy X get Y free/discounted'],
        ['Birthday Offers', 'MerchantBirthdayOffers', 'Standard', 'Auto-trigger offers on customer birthday month'],
        ['Birthday Rewards', 'MerchantBirthdayRewards', 'Standard', 'Configure birthday-specific coin multipliers and gifts'],
        ['Cart Abandonment', 'MerchantCartAbandonment', 'Standard', 'Recovery campaigns for abandoned online carts'],
        ['Cashback Programs', 'MerchantCashbackPrograms', 'Standard', 'Configure cashback % by category, min spend, max cap'],
        ['Clearance Sales', 'MerchantClearanceSales', 'Standard', 'Markdown slow-moving/expiring inventory'],
        ['Combo Products', 'MerchantComboProducts', 'Standard', 'Bundle products at discounted combo price'],
        ['Cross-Sell', 'MerchantCrossSellSuggestions', 'Standard', 'AI-powered "frequently bought together" recommendations'],
        ['Demand Signals', 'MerchantDemandSignals', 'Standard', 'AI demand analysis: trending items, seasonal patterns'],
      ]} />
      <Expandable title="Offer Creation Wizard" icon={Zap} defaultOpen={true}>
        <CodeBlock code={`Step 1: OFFER TYPE
  → Discount (% off, flat off)
  → BOGO (Buy X Get Y)
  → Cashback (NuqtaCoin return)
  → Combo (bundle price)
  → Free item (with min purchase)
  → Birthday special

Step 2: PRODUCTS / CATEGORIES
  → All products | Specific products | Categories
  → Exclude items (high-margin protection)
  → Min cart value requirement

Step 3: RULES & LIMITS
  → Max redemptions (total / per customer)
  → Min order value
  → Valid payment methods
  → Customer segments (RFM-based)
  → New customer only flag
  → Promo code (optional)

Step 4: SCHEDULE
  → Start date/time, end date/time
  → Recurring (daily happy hour, weekly flash)
  → Day-of-week restrictions
  → Time-of-day restrictions

Step 5: REVIEW & PUBLISH
  → Preview offer card (as customer sees it)
  → Estimated cost impact
  → Approval: auto-publish or HQ review (if > threshold)
  → Rabtul API: POST /api/rabtul/rules/offer/create`} />
      </Expandable>
      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['POST', '/api/merchant/offers', 'Create new offer', 'Manager+'],
          ['GET', '/api/merchant/offers', 'List offers with status filters', 'Manager+'],
          ['PUT', '/api/merchant/offers/{id}', 'Update offer details', 'Manager+'],
          ['DELETE', '/api/merchant/offers/{id}', 'Deactivate offer', 'Manager+'],
          ['GET', '/api/merchant/offers/{id}/analytics', 'Offer performance and ROI', 'Manager+'],
          ['POST', '/api/merchant/offers/bogo', 'Create BOGO offer', 'Manager+'],
          ['POST', '/api/merchant/offers/cashback', 'Create cashback program', 'Manager+'],
          ['GET', '/api/merchant/demand-signals', 'AI demand analysis', 'Manager+'],
          ['POST', '/api/merchant/cart-abandonment/campaign', 'Create recovery campaign', 'Manager+'],
          ['POST', '/api/merchant/combos', 'Create combo/bundle', 'Manager+'],
        ]} />
      </Expandable>
    </div>
  );
}

function MarketingSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Marketing</h2>
      <p className="text-slate-400">5 screens — campaigns, content, Adzy hub, contest builder, and creator collaboration.</p>
      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['Campaigns', 'MerchantCampaigns', 'Tab View', 'SMS, push, email, WhatsApp campaigns with targeting and scheduling'],
        ['Content', 'MerchantContent', 'Standard', 'Create/manage social content, product showcases, stories'],
        ['Adzy Hub', 'MerchantAdzyHub', 'Standard', 'Performance marketing via Adzy: run ads on Nuqta platform'],
        ['Contest Builder', 'MerchantContestBuilder', 'Multi-Step', 'Create giveaways, photo contests, check-in challenges'],
        ['Creator Hub', 'MerchantCreatorHub', 'Standard', 'Find and collaborate with local creators/influencers'],
      ]} />
      <Expandable title="Campaign Types & Channels" icon={Eye} defaultOpen={true}>
        <DocTable headers={['Channel', 'Use Case', 'Cost', 'Targeting']} rows={[
          ['Push Notification', 'Flash sales, order updates, loyalty reminders', 'Free (own customers)', 'Segment, behavior, location'],
          ['SMS', 'Birthday offers, re-engagement, OTP', '0.05 AED/msg', 'Phone number list, segments'],
          ['WhatsApp Business', 'Order confirmation, catalogs, 1:1 chat', '0.15 AED/msg', 'Opted-in customers'],
          ['Email', 'Newsletters, receipts, win-back series', 'Free up to 5K/mo', 'Email list, segments'],
          ['Adzy (In-App Ads)', 'Acquire new customers on Nuqta app', 'CPC/CPM bidding', 'Location, interest, demographics'],
        ]} />
      </Expandable>
      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['POST', '/api/merchant/campaigns', 'Create campaign', 'Manager+'],
          ['GET', '/api/merchant/campaigns', 'List campaigns', 'Manager+'],
          ['GET', '/api/merchant/campaigns/{id}/analytics', 'Campaign performance', 'Manager+'],
          ['POST', '/api/merchant/content', 'Publish content/story', 'Manager+'],
          ['POST', '/api/merchant/adzy/campaign', 'Launch Adzy ad campaign', 'Owner'],
          ['POST', '/api/merchant/contests', 'Create contest/giveaway', 'Manager+'],
          ['GET', '/api/merchant/creators', 'Browse available creators', 'Manager+'],
          ['POST', '/api/merchant/creators/{id}/invite', 'Invite creator to collaborate', 'Manager+'],
        ]} />
      </Expandable>
    </div>
  );
}

function KitchenSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Kitchen & Restaurant Ops</h2>
      <p className="text-slate-400">10 screens — KDS, recipes, menu management, portion control, ingredient tracking, and waiter app.</p>
      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['KDS', 'MerchantKDS', 'Full-Screen', 'Kitchen Display System: order cards, prep timers, bump-off on completion'],
        ['Kitchen Display', 'MerchantKitchenDisplay', 'Full-Screen', 'Station-specific view (grill, fry, cold, dessert)'],
        ['Recipe Management', 'MerchantRecipeManagement', 'Standard', 'Create recipes with ingredients, steps, allergens, photos'],
        ['Recipe Costing', 'MerchantRecipeCosting', 'Standard', 'Auto-calculate food cost per dish based on ingredient prices'],
        ['Menu Management', 'MerchantMenuManagement', 'Tab View', 'Add/edit menu items, prices, photos, availability, modifiers'],
        ['Menu Engineering', 'MerchantMenuEngineering', 'Standard', 'Stars/Puzzles/Dogs/Plowhorses matrix (popularity vs profitability)'],
        ['Seasonal Menu', 'MerchantSeasonalMenu', 'Standard', 'Schedule seasonal menu changes, limited-time items'],
        ['Portion Control', 'MerchantPortionControl', 'Standard', 'Define standard portions, track waste, cost variance alerts'],
        ['Ingredient Tracking', 'MerchantIngredientTracking', 'Standard', 'Track raw ingredient usage per dish, wastage, supplier cost'],
        ['Waiter App', 'MerchantWaiterApp', 'Mobile', 'Table-side ordering, bill splitting, tip management, course firing'],
      ]} />
      <Expandable title="KDS Order Flow" icon={Store} defaultOpen={true}>
        <CodeBlock code={`ORDER RECEIVED (from POS, App, or Wasil):
  1. Order appears on KDS main screen with timer
  2. If multi-station: items route to correct station
     - Grill station gets burger items
     - Cold station gets salads
     - Drinks station gets beverages
  3. Staff taps "Start" → timer turns yellow
  4. Staff taps "Done" → item bumps off screen
  5. When ALL items done → order status → READY
  6. Expo screen shows assembled orders for pickup/delivery

TIMER COLORS:
  Green:  < target prep time
  Yellow: within 2 min of target
  Red:    exceeded target (alert to manager)

KDS MODES:
  - Order View: Full order cards
  - Item View: Individual items across orders
  - Summary View: Aggregated counts (make 5 burgers, 3 salads)`} />
      </Expandable>
      <Expandable title="Menu Engineering Matrix" icon={TrendingUp}>
        <DocTable headers={['Quadrant', 'Popularity', 'Profitability', 'Action']} rows={[
          ['Stars', 'High', 'High', 'Promote heavily, keep as-is, feature placement'],
          ['Plowhorses', 'High', 'Low', 'Increase price slightly, reduce portion, find cheaper ingredients'],
          ['Puzzles', 'Low', 'High', 'Better placement, staff recommendations, rename/repackage'],
          ['Dogs', 'Low', 'Low', 'Remove from menu, replace, or restructure completely'],
        ]} />
        <InfoBox type="info">Menu Engineering uses last 90 days of POS data. Items auto-classified nightly. Merchants get actionable recommendations.</InfoBox>
      </Expandable>
      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['GET', '/api/merchant/kds/orders', 'Active orders for kitchen display', 'Staff+'],
          ['PATCH', '/api/merchant/kds/orders/{id}/status', 'Update item/order status', 'Staff+'],
          ['POST', '/api/merchant/recipes', 'Create recipe with ingredients', 'Manager+'],
          ['GET', '/api/merchant/recipes/{id}/cost', 'Calculate recipe food cost', 'Manager+'],
          ['GET', '/api/merchant/menu', 'Get full menu with categories', 'Staff+'],
          ['PUT', '/api/merchant/menu/items/{id}', 'Update menu item', 'Manager+'],
          ['GET', '/api/merchant/menu/engineering', 'Menu engineering matrix', 'Manager+'],
          ['POST', '/api/merchant/menu/seasonal', 'Schedule seasonal menu', 'Manager+'],
          ['GET', '/api/merchant/portions', 'Portion standard vs actual report', 'Manager+'],
          ['GET', '/api/merchant/ingredients/usage', 'Ingredient usage & waste report', 'Manager+'],
        ]} />
      </Expandable>
    </div>
  );
}
function PricingSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Pricing & Revenue</h2>
      <p className="text-slate-400">8 screens — dynamic pricing, price engineering, AI insights, competitor monitoring, bundles, and upsell engine.</p>
      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['Dynamic Pricing', 'MerchantDynamicPricing', 'Standard', 'Time/demand-based pricing rules (happy hour, surge, slow periods)'],
        ['Price Engineering', 'MerchantPriceEngineering', 'Standard', 'Strategic pricing: cost-plus, value-based, competitive positioning'],
        ['Pricing Intelligence', 'MerchantPricingIntelligence', 'Standard', 'AI insights: optimal price points, elasticity analysis, margin optimization'],
        ['Competitor Pricing', 'MerchantCompetitorPricing', 'Standard', 'Monitor competitor prices, alerts on undercut, market position'],
        ['Product Bundles', 'MerchantProductBundles', 'Standard', 'Create product bundles with combined pricing'],
        ['Product Bundling', 'MerchantProductBundling', 'Standard', 'AI-suggested bundles based on purchase patterns'],
        ['Upsell Engine', 'MerchantUpsellEngine', 'Standard', 'Configure upsell rules at POS and checkout'],
        ['Lock Price Deals', 'MerchantLockPriceDeals', 'Standard', 'Fixed price guarantees for a duration (price freeze)'],
      ]} />
      <Expandable title="Dynamic Pricing Rules" icon={TrendingUp} defaultOpen={true}>
        <DocTable headers={['Rule Type', 'Trigger', 'Action', 'Example']} rows={[
          ['Happy Hour', 'Time window (e.g., 2-5 PM)', 'Reduce price by X%', '20% off coffee 2-5 PM weekdays'],
          ['Surge', 'Demand > threshold in last 30 min', 'Increase price by X%', '+15% on Friday evenings'],
          ['Slow Period', 'Orders < threshold for 2+ hours', 'Auto-discount by X%', '10% off if < 5 orders in 2h'],
          ['Expiry-based', 'Product expiring within N days', 'Progressive markdown', '25% off at 7 days, 50% at 3 days'],
          ['Weather', 'Integration with weather API', 'Adjust seasonal items', 'Hot drinks +10% on cold days'],
          ['Inventory', 'Stock > threshold (overstock)', 'Clearance pricing', 'Auto 15% off items > 90 days old'],
        ]} />
      </Expandable>
      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['POST', '/api/merchant/pricing/rules', 'Create dynamic pricing rule', 'Owner'],
          ['GET', '/api/merchant/pricing/rules', 'List active pricing rules', 'Manager+'],
          ['GET', '/api/merchant/pricing/intelligence', 'AI pricing recommendations', 'Owner'],
          ['GET', '/api/merchant/pricing/competitors', 'Competitor price monitoring', 'Owner'],
          ['POST', '/api/merchant/bundles', 'Create product bundle', 'Manager+'],
          ['GET', '/api/merchant/bundles/suggestions', 'AI bundle suggestions', 'Manager+'],
          ['POST', '/api/merchant/upsell/rules', 'Configure upsell rules', 'Manager+'],
          ['POST', '/api/merchant/pricing/lock', 'Create price lock deal', 'Owner'],
        ]} />
      </Expandable>
    </div>
  );
}

function LoyaltySection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Loyalty & Rewards</h2>
      <p className="text-slate-400">11 screens — loyalty programs, builders, tiers, points rules, memberships, gamification, branded coins, and referral tracking.</p>
      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['Core Loyalty', 'MerchantLoyalty', 'Tab View', 'Loyalty program overview, active members, redemption stats'],
        ['Loyalty Builder', 'MerchantLoyaltyBuilder', 'Multi-Step', 'Build custom loyalty program: rules, tiers, rewards'],
        ['Loyalty Offers', 'MerchantLoyaltyOffers', 'Standard', 'Loyalty-exclusive offers for tier members'],
        ['Loyalty Tiers', 'MerchantLoyaltyTiers', 'Standard', 'Configure tiers: Bronze → Silver → Gold → Platinum'],
        ['Points Rules', 'MerchantPointsRules', 'Standard', 'Earning rules: X points per AED, bonus categories, multipliers'],
        ['Memberships', 'MerchantMemberships', 'Standard', 'Paid membership programs with benefits (annual/monthly)'],
        ['Gamification', 'MerchantGamificationRewards', 'Standard', 'Achievement badges, streaks, challenges, leaderboards'],
        ['Branded Coins', 'MerchantBrandedCoinConfig', 'Standard', 'Configure merchant-specific branded NuqtaCoins'],
        ['Token Display', 'MerchantTokenDisplay', 'Standard', 'How coins/points appear to customers in-app'],
        ['Referral Tracking', 'MerchantReferralTracking', 'Standard', 'Track customer referrals, reward both referrer and referee'],
        ['VIP Programs', 'MerchantExclusivePrograms', 'Standard', 'Invite-only VIP programs with exclusive perks'],
      ]} />
      <Expandable title="Loyalty Tier Structure" icon={Star} defaultOpen={true}>
        <DocTable headers={['Tier', 'Points to Qualify', 'Earn Rate', 'Perks']} rows={[
          ['Bronze', '0 (default)', '1 point per AED 1', 'Basic earn/redeem'],
          ['Silver', '500 points / 3 months', '1.5x earn rate', '+5% bonus on all purchases, birthday double points'],
          ['Gold', '2,000 points / 3 months', '2x earn rate', '+10% bonus, free delivery, early access to sales'],
          ['Platinum', '5,000 points / 3 months', '3x earn rate', '+15% bonus, dedicated support, VIP events, free upgrades'],
        ]} />
        <InfoBox type="info">Tier evaluation runs monthly via Rabtul Rule Engine. Tier downgrade has 1-month grace period.</InfoBox>
      </Expandable>
      <Expandable title="Branded Coins" icon={Coins}>
        <CodeBlock code={`BRANDED COIN FLOW:
  1. Merchant configures branded coin in MerchantBrandedCoinConfig
     → Name, icon, earn rate, expiry (30/60/90 days)
     → Rabtul API: POST /api/rabtul/coins/branded/create

  2. Customer purchases → earns branded coins + platform coins
     → Rabtul Wallet Ledger: credit branded_coin + platform_coin
     → Customer sees: "You earned 50 CoffeeBucks + 10 NuqtaCoin"

  3. Customer redeems at same merchant
     → Branded coins ONLY at issuing merchant
     → Platform NuqtaCoins at ANY merchant

  4. Settlement: branded coins are merchant-funded
     → Deducted from merchant settlement, not platform cost`} />
      </Expandable>
      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['GET', '/api/merchant/loyalty', 'Loyalty program overview', 'Manager+'],
          ['POST', '/api/merchant/loyalty/program', 'Create/update loyalty program', 'Owner'],
          ['PUT', '/api/merchant/loyalty/tiers', 'Configure tier thresholds and perks', 'Owner'],
          ['PUT', '/api/merchant/loyalty/points-rules', 'Set earning rules', 'Owner'],
          ['POST', '/api/merchant/loyalty/offers', 'Create tier-exclusive offer', 'Manager+'],
          ['POST', '/api/merchant/memberships', 'Create membership plan', 'Owner'],
          ['POST', '/api/merchant/branded-coins', 'Configure branded coin (→ Rabtul)', 'Owner'],
          ['GET', '/api/merchant/referrals', 'Referral tracking report', 'Manager+'],
          ['POST', '/api/merchant/gamification/challenge', 'Create customer challenge', 'Manager+'],
          ['POST', '/api/merchant/exclusive-programs', 'Create VIP program', 'Owner'],
        ]} />
      </Expandable>
    </div>
  );
}

function StaffSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Staff Management</h2>
      <p className="text-slate-400">9 screens — directory, roster, scheduling, shifts, sales tracking, leaderboard, activity log, roles, and team management.</p>
      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['Staff Directory', 'MerchantStaff', 'Standard', 'All staff members, roles, contact info, status (active/inactive)'],
        ['Roster', 'MerchantStaffRoster', 'Standard', 'Weekly/monthly roster view, shift assignments, availability'],
        ['Scheduling', 'MerchantEmployeeScheduling', 'Standard', 'Drag-drop shift scheduling, auto-fill based on availability'],
        ['Shift Management', 'MerchantShiftManagement', 'Standard', 'Define shift types (morning/evening/night), break rules, overtime'],
        ['Sales Tracking', 'MerchantStaffSales', 'Standard', 'Per-staff sales performance, items sold, revenue generated'],
        ['Leaderboard', 'MerchantStaffLeaderboard', 'Standard', 'Gamified ranking: top sellers, best ratings, most upsells'],
        ['Activity Log', 'MerchantStaffActivityLog', 'Standard', 'Audit trail: logins, transactions, voids, refunds per staff'],
        ['User Roles', 'MerchantUserRoles', 'Standard', 'Configure custom roles with granular permissions per module'],
        ['Team Management', 'MerchantTeamManagement', 'Standard', 'Organize staff into teams, assign team leads, team targets'],
      ]} />
      <Expandable title="RBAC Permission Matrix" icon={Shield} defaultOpen={true}>
        <DocTable headers={['Module', 'Owner (L50)', 'Manager (L40)', 'Staff (L30)']} rows={[
          ['POS — Process sale', '✓', '✓', '✓'],
          ['POS — Void/refund', '✓', '✓', '✗'],
          ['POS — Manual discount > 20%', '✓', '✗', '✗'],
          ['Inventory — View stock', '✓', '✓', '✓'],
          ['Inventory — Adjust stock', '✓', '✓', '✗'],
          ['Inventory — Auto-restock rules', '✓', '✓', '✗'],
          ['Orders — View all', '✓', '✓', '✓ (own)'],
          ['Orders — Cancel/refund', '✓', '✓', '✗'],
          ['CRM — View customers', '✓', '✓', '✓'],
          ['CRM — Send campaigns', '✓', '✓', '✗'],
          ['Finance — View P&L', '✓', '✗', '✗'],
          ['Finance — Cash drawer close', '✓', '✓', '✗'],
          ['Staff — Manage staff', '✓', '✗', '✗'],
          ['Staff — View leaderboard', '✓', '✓', '✓'],
          ['Settings — All settings', '✓', '✗', '✗'],
          ['Reports — Financial reports', '✓', '✗', '✗'],
          ['Reports — Sales reports', '✓', '✓', '✗'],
          ['Marketing — Create campaigns', '✓', '✓', '✗'],
          ['Loyalty — Configure program', '✓', '✗', '✗'],
          ['Integrations — API keys', '✓', '✗', '✗'],
        ]} />
      </Expandable>
      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['GET', '/api/merchant/staff', 'List all staff members', 'Manager+'],
          ['POST', '/api/merchant/staff', 'Add new staff member', 'Owner'],
          ['PUT', '/api/merchant/staff/{id}/role', 'Update role and permissions', 'Owner'],
          ['DELETE', '/api/merchant/staff/{id}', 'Deactivate staff member', 'Owner'],
          ['GET', '/api/merchant/staff/roster', 'Get weekly roster', 'Manager+'],
          ['POST', '/api/merchant/staff/shifts', 'Create/assign shift', 'Manager+'],
          ['GET', '/api/merchant/staff/{id}/sales', 'Staff sales performance', 'Manager+'],
          ['GET', '/api/merchant/staff/leaderboard', 'Sales leaderboard', 'Staff+'],
          ['GET', '/api/merchant/staff/{id}/activity', 'Staff activity audit log', 'Manager+'],
          ['PUT', '/api/merchant/roles/{id}', 'Update custom role definition', 'Owner'],
        ]} />
      </Expandable>
    </div>
  );
}

function PaymentsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Payments & Settlements</h2>
      <p className="text-slate-400">11 screens — payment processing, links, QR, soft POS, subscriptions, reminders, failed recovery, settlement engine, and wallet.</p>
      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['Payments', 'MerchantPayments', 'Tab View', 'All payment methods, gateway status, processing history'],
        ['Payment Links', 'MerchantPaymentLinks', 'Standard', 'Generate shareable payment links (SMS, WhatsApp, email)'],
        ['Payment Intents', 'MerchantPaymentIntents', 'Standard', 'Track payment lifecycle: created → authorized → captured → settled'],
        ['QR Payments', 'MerchantQRPayments', 'Standard', 'Static/dynamic QR codes for scan-to-pay'],
        ['Soft POS', 'MerchantSoftPOS', 'Full-Screen', 'NFC tap-to-pay on merchant phone (no hardware needed)'],
        ['Subscriptions', 'MerchantSubscriptions', 'Standard', 'Recurring billing management for subscription services'],
        ['Subscription Plans', 'MerchantSubscriptionPlans', 'Standard', 'Create/manage subscription plan templates'],
        ['Payment Reminders', 'MerchantPaymentReminders', 'Standard', 'Auto-reminders for pending/overdue payments'],
        ['Failed Payments', 'MerchantFailedPayments', 'Standard', 'Failed payment recovery: retry, alternate method, dunning'],
        ['Settlement Engine', 'MerchantSettlementEngine', 'Standard', 'View settlements, payout schedule, fee breakdown'],
        ['Wallet', 'MerchantWallet', 'Tab View', 'Merchant digital wallet: balance, top-up, withdraw, transaction history'],
      ]} />
      <Expandable title="Settlement Calculation" icon={DollarSign} defaultOpen={true}>
        <CodeBlock code={`SETTLEMENT = Gross Sales - Platform Commission - Gateway Fees - Refunds + Tips

Example (Daily Settlement):
  Gross Sales:           AED 10,000
  - Platform Commission: AED    500  (5% of gross)
  - Gateway Fee:         AED    200  (2% card processing via NuqtaPay)
  - Refunds:             AED    150  (3 refund transactions)
  + Tips:                AED    120  (customer tips, 100% to merchant)
  ─────────────────────────────────
  Net Settlement:        AED  9,270

SETTLEMENT CYCLE:
  T+1: Standard (next business day)
  T+0: Available for Diamond tier (instant, 0.5% fee)
  Weekly: Option for merchants preferring weekly batches

PAYOUT METHOD:
  Bank transfer (verified IBAN) → auto-scheduled
  Merchant Wallet → instant (can withdraw anytime)`} />
      </Expandable>
      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['GET', '/api/merchant/payments', 'Payment history with filters', 'Manager+'],
          ['POST', '/api/merchant/payment-links', 'Generate payment link', 'Staff+'],
          ['POST', '/api/merchant/qr/generate', 'Generate QR code for payment', 'Staff+'],
          ['POST', '/api/merchant/subscriptions', 'Create subscription for customer', 'Manager+'],
          ['GET', '/api/merchant/subscriptions', 'List active subscriptions', 'Manager+'],
          ['POST', '/api/merchant/payments/{id}/retry', 'Retry failed payment', 'Manager+'],
          ['GET', '/api/merchant/settlements', 'Settlement history', 'Owner'],
          ['GET', '/api/merchant/settlements/upcoming', 'Next settlement preview', 'Owner'],
          ['GET', '/api/merchant/wallet/balance', 'Wallet balance (→ Rabtul)', 'Owner'],
          ['POST', '/api/merchant/wallet/withdraw', 'Withdraw to bank account', 'Owner'],
        ]} />
      </Expandable>
    </div>
  );
}
function ShippingSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Shipping & Delivery</h2>
      <p className="text-slate-400">7 screens — shipping management, delivery partner bridge, internal fleet, free delivery, stock/store transfers, and multi-warehouse.</p>
      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['Shipping', 'MerchantShipping', 'Tab View', 'Shipping rules, zones, rates, carrier selection, label printing'],
        ['Delivery Bridge', 'MerchantDeliveryBridge', 'Standard', 'Integrate with Wasil/3rd party delivery: auto-dispatch, tracking'],
        ['Internal Fleet', 'MerchantDeliveryFleet', 'Standard', 'Own delivery team: driver management, route optimization'],
        ['Free Delivery', 'MerchantFreeDelivery', 'Standard', 'Configure free delivery thresholds, zones, promotions'],
        ['Stock Transfer', 'MerchantStockTransfer', 'Standard', 'Request/approve inventory transfers between locations'],
        ['Store Transfer', 'MerchantStoreTransfer', 'Standard', 'Transfer equipment, supplies between stores'],
        ['Multi-Warehouse', 'MerchantMultiWarehouse', 'Standard', 'Manage multiple warehouses, allocation rules, fulfillment priority'],
      ]} />
      <Expandable title="Delivery Integration Flow" icon={Package} defaultOpen={true}>
        <CodeBlock code={`ORDER READY FOR DELIVERY:
  1. Order status → READY
  2. System checks delivery method:
     a) Wasil Integration → POST /api/wasil/delivery/request
        → Wasil assigns rider → tracking URL returned
        → Real-time status via WebSocket
     b) Internal Fleet → assign to available driver
        → Driver app notified → accepts/rejects
        → Route optimized via Google Maps API
     c) Customer Pickup → notification sent to customer
  3. Tracking shared with customer via push + SMS
  4. Delivery confirmed → order status → DELIVERED
  5. Settlement: delivery fee allocated to carrier/fleet

MULTI-WAREHOUSE FULFILLMENT:
  Priority: 1) Nearest to customer  2) Highest stock  3) Lowest shipping cost
  Split order across warehouses if single warehouse can't fulfill`} />
      </Expandable>
      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['GET', '/api/merchant/shipping/zones', 'List delivery zones and rates', 'Manager+'],
          ['PUT', '/api/merchant/shipping/zones', 'Update zone configuration', 'Owner'],
          ['POST', '/api/merchant/delivery/dispatch', 'Dispatch order for delivery', 'Staff+'],
          ['GET', '/api/merchant/delivery/tracking/{orderId}', 'Real-time delivery tracking', 'Staff+'],
          ['GET', '/api/merchant/fleet/drivers', 'List internal fleet drivers', 'Manager+'],
          ['POST', '/api/merchant/transfers', 'Create stock/store transfer', 'Manager+'],
          ['PATCH', '/api/merchant/transfers/{id}/approve', 'Approve transfer request', 'Manager+'],
          ['GET', '/api/merchant/warehouses', 'List warehouses with stock levels', 'Manager+'],
        ]} />
      </Expandable>
    </div>
  );
}

function ComplianceSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Compliance & Tax</h2>
      <p className="text-slate-400">7 screens — compliance checklists, GST/VAT reporting, e-invoicing, TDS/TCS, and tax management.</p>
      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['Compliance', 'MerchantCompliance', 'Standard', 'Compliance dashboard: license expiry, regulatory checklist, document status'],
        ['GST Reports', 'MerchantGSTReports', 'Tab View', 'GSTR-1, GSTR-3B, GSTR-9 generation and filing status'],
        ['GST Setup', 'MerchantGSTSetupWizard', 'Multi-Step', 'Configure GSTIN, HSN codes, tax rates per category'],
        ['GSTR Export', 'MerchantGSTRExport', 'Standard', 'Export GST returns in government-compatible format'],
        ['E-Invoice', 'MerchantEInvoice', 'Standard', 'Generate e-invoices with IRN, QR code (India mandate)'],
        ['TDS/TCS', 'MerchantTDSTCSReports', 'Standard', 'Tax deducted/collected at source reports and certificates'],
        ['Tax Management', 'MerchantTaxCompliance', 'Tab View', 'VAT (UAE 5%), GST (India slabs), tax calendar, filing reminders'],
      ]} />
      <Expandable title="Tax Configuration by Region" icon={FileText} defaultOpen={true}>
        <DocTable headers={['Region', 'Tax Type', 'Rate', 'E-Invoice', 'Filing Frequency']} rows={[
          ['UAE', 'VAT', '5% standard, 0% exempt', 'Not mandatory yet', 'Quarterly'],
          ['Saudi Arabia', 'VAT', '15%', 'Mandatory (ZATCA Phase 2)', 'Quarterly'],
          ['India', 'GST', '5%/12%/18%/28% slab-based', 'Mandatory > 20Cr turnover', 'Monthly GSTR-1, GSTR-3B'],
          ['Qatar', 'No VAT', '0%', 'N/A', 'N/A'],
          ['Bahrain', 'VAT', '10%', 'Coming 2025', 'Quarterly'],
        ]} />
      </Expandable>
      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['GET', '/api/merchant/compliance/status', 'Compliance dashboard status', 'Owner'],
          ['GET', '/api/merchant/tax/config', 'Tax configuration for merchant', 'Owner'],
          ['PUT', '/api/merchant/tax/config', 'Update tax settings', 'Owner'],
          ['GET', '/api/merchant/gst/reports/{type}', 'Generate GST report (GSTR-1/3B/9)', 'Owner'],
          ['POST', '/api/merchant/gst/export', 'Export GSTR in filing format', 'Owner'],
          ['POST', '/api/merchant/einvoice/generate', 'Generate e-invoice with IRN', 'Manager+'],
          ['GET', '/api/merchant/tds-tcs/reports', 'TDS/TCS certificates and reports', 'Owner'],
        ]} />
      </Expandable>
    </div>
  );
}

function VendorSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Vendor & Supplier</h2>
      <p className="text-slate-400">8 screens — supplier management, performance, contracts, vendor portal, procurement, returns, and quotations.</p>
      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['Supplier Management', 'MerchantSupplierManagement', 'Standard', 'Supplier directory: contact, payment terms, lead times, categories'],
        ['Performance', 'MerchantSupplierPerformance', 'Standard', 'Delivery reliability, quality ratings, price competitiveness'],
        ['Contracts', 'MerchantSupplierContracts', 'Standard', 'Contract management: terms, renewal dates, pricing agreements'],
        ['Vendor Management', 'MerchantVendorManagement', 'Standard', 'Vendor catalog, approved vendor lists, onboarding status'],
        ['Vendor Portal', 'MerchantVendorPortal', 'Standard', 'Self-service portal for vendors to view POs, submit invoices'],
        ['Procurement', 'MerchantSuppliersProcurement', 'Standard', 'Purchase requisition → PO → GRN → Invoice matching workflow'],
        ['Returns', 'MerchantSupplierReturns', 'Standard', 'Return defective goods, debit notes, credit tracking'],
        ['Quotations', 'MerchantQuotations', 'Standard', 'Request for quotation (RFQ), compare quotes, select supplier'],
      ]} />
      <Expandable title="Procurement Workflow" icon={Building2} defaultOpen={true}>
        <CodeBlock code={`REQUISITION → APPROVAL → PO → RECEIVING → INVOICE → PAYMENT

1. REQUISITION
   Auto-trigger: stock < reorder point
   Manual: staff creates purchase request
   → Items, quantities, preferred supplier, urgency

2. APPROVAL (if amount > threshold)
   Manager reviews → approves/rejects
   Auto-approve: POs under AED 1,000

3. PURCHASE ORDER
   PO generated → sent to supplier (email/portal)
   Status: draft → sent → confirmed → partially_received → received

4. GOODS RECEIVED NOTE (GRN)
   Staff scans/counts received items
   Quality check: accept/reject/partial
   Stock auto-updated in Inventory module

5. INVOICE MATCHING
   3-way match: PO ↔ GRN ↔ Supplier Invoice
   Discrepancies flagged for manual review

6. PAYMENT
   Approved invoices → payment queue
   Payment via: bank transfer, merchant wallet, credit terms`} />
      </Expandable>
      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['GET', '/api/merchant/suppliers', 'List suppliers', 'Manager+'],
          ['POST', '/api/merchant/suppliers', 'Add new supplier', 'Manager+'],
          ['GET', '/api/merchant/suppliers/{id}/performance', 'Supplier performance metrics', 'Manager+'],
          ['POST', '/api/merchant/procurement/requisition', 'Create purchase requisition', 'Staff+'],
          ['POST', '/api/merchant/procurement/po', 'Create purchase order from requisition', 'Manager+'],
          ['POST', '/api/merchant/procurement/grn', 'Record goods received', 'Staff+'],
          ['POST', '/api/merchant/procurement/invoice-match', 'Match invoice to PO + GRN', 'Manager+'],
          ['POST', '/api/merchant/rfq', 'Send request for quotation', 'Manager+'],
          ['POST', '/api/merchant/supplier-returns', 'Create supplier return', 'Manager+'],
        ]} />
      </Expandable>
    </div>
  );
}

function ReportsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Reports</h2>
      <p className="text-slate-400">12 screens — P&L, financials, daybook, day-end, transactions, data export, stock variance, seasonal trends, performance, events, and campaigns.</p>
      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['P&L Statement', 'MerchantProfitLoss', 'Standard', 'Profit and loss: revenue, COGS, gross margin, operating expenses, net profit'],
        ['Profit View', 'MerchantProfitView', 'Standard', 'Visual profit breakdown: charts, category margins, trend analysis'],
        ['Financials', 'MerchantFinancials', 'Tab View', 'Balance sheet, cash flow, accounts receivable/payable'],
        ['Daybook', 'MerchantDaybook', 'Standard', 'Daily ledger: all transactions in chronological order'],
        ['Day-End Report', 'MerchantDayEndReport', 'Standard', 'End-of-day summary: sales, refunds, cash drawer, staff performance'],
        ['Transactions', 'MerchantTransactions', 'Standard', 'Full transaction history with advanced search and filters'],
        ['Data Export', 'MerchantDataExport', 'Standard', 'Export any report to CSV, PDF, Excel; schedule automated exports'],
        ['Stock Variance', 'MerchantStockVarianceReport', 'Standard', 'Physical vs system stock differences, shrinkage analysis'],
        ['Seasonal Trends', 'MerchantSeasonalTrends', 'Standard', 'Year-over-year seasonal patterns, peak period analysis'],
        ['Performance', 'MerchantPerformance', 'Standard', 'KPI dashboard: sales targets vs actual, category performance'],
        ['Event Stream', 'MerchantEventStream', 'Standard', 'Real-time event analytics: customer visits, transactions, app opens'],
        ['Campaign Analytics', 'MerchantMarketingCampaigns', 'Standard', 'Marketing campaign ROI, channel performance, attribution'],
      ]} />
      <Expandable title="Report Generation" icon={BarChart3} defaultOpen={true}>
        <DocTable headers={['Report', 'Frequency', 'Auto-Generate', 'Export Formats']} rows={[
          ['Day-End Report', 'Daily', 'Auto at store closing time', 'PDF, Email'],
          ['P&L Statement', 'Monthly', 'Auto on 1st of month', 'PDF, Excel, Tally'],
          ['GST Reports', 'Monthly/Quarterly', 'Auto per filing schedule', 'JSON (GSTN), PDF'],
          ['Stock Variance', 'Weekly', 'Auto every Sunday', 'CSV, PDF'],
          ['Staff Performance', 'Weekly', 'Auto every Monday', 'PDF, Email to owner'],
          ['Seasonal Trends', 'Monthly', 'On demand', 'PDF, Excel'],
          ['Custom Reports', 'On demand', 'Schedule via cron', 'CSV, PDF, Excel'],
        ]} />
      </Expandable>
      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['GET', '/api/merchant/reports/pnl', 'P&L statement for period', 'Owner'],
          ['GET', '/api/merchant/reports/financials', 'Financial statements', 'Owner'],
          ['GET', '/api/merchant/reports/daybook', 'Daily ledger entries', 'Manager+'],
          ['GET', '/api/merchant/reports/day-end', 'Day-end summary report', 'Manager+'],
          ['GET', '/api/merchant/reports/transactions', 'Transaction history with filters', 'Manager+'],
          ['POST', '/api/merchant/reports/export', 'Export report in specified format', 'Manager+'],
          ['GET', '/api/merchant/reports/stock-variance', 'Stock variance report', 'Manager+'],
          ['GET', '/api/merchant/reports/seasonal', 'Seasonal trend analysis', 'Manager+'],
          ['GET', '/api/merchant/reports/performance', 'KPI performance dashboard', 'Manager+'],
          ['GET', '/api/merchant/reports/campaigns', 'Campaign analytics', 'Manager+'],
        ]} />
      </Expandable>
    </div>
  );
}
function DigMarketingSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Digital Marketing</h2>
      <p className="text-slate-400">5 screens — Meta Ads, Google Ads, WhatsApp Business, unified marketing, and offline materials.</p>
      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['Meta Ads', 'MerchantMetaAdsManager', 'Standard', 'Create/manage Facebook & Instagram ads, audience targeting, performance'],
        ['Google Ads', 'MerchantGoogleAdsManager', 'Standard', 'Google Search, Display, Maps ads, keyword management, bidding'],
        ['WhatsApp Business', 'MerchantWhatsAppBusiness', 'Standard', 'WhatsApp catalog, broadcast messages, chatbot, order notifications'],
        ['Unified Marketing', 'MerchantUnifiedMarketing', 'Tab View', 'Single dashboard for all marketing channels: Adzy + Meta + Google + SMS'],
        ['Offline Marketing', 'MerchantOfflineMarketing', 'Standard', 'Generate QR codes, print materials, table tents, flyers with tracking'],
      ]} />
      <Expandable title="Unified Marketing Dashboard" icon={Globe} defaultOpen={true}>
        <DocTable headers={['Channel', 'Metrics Shown', 'Actions Available', 'Integration']} rows={[
          ['Adzy (Nuqta Platform)', 'Impressions, clicks, conversions, ROAS', 'Create/pause campaigns, adjust budget', 'Native API'],
          ['Meta (Facebook/Instagram)', 'Reach, engagement, clicks, cost per result', 'Boost posts, create ads, view insights', 'Meta Business API'],
          ['Google Ads', 'Impressions, clicks, CPC, conversions', 'Manage keywords, adjust bids', 'Google Ads API'],
          ['SMS Campaigns', 'Sent, delivered, clicked, converted', 'Send blasts, schedule, segment', 'Rabtul Notifications'],
          ['WhatsApp', 'Messages sent, read rate, responses', 'Broadcast, templates, chatbot config', 'WhatsApp Business API'],
          ['Offline (QR/Print)', 'Scans, redemptions, attribution', 'Generate QR, download templates', 'Internal tracking'],
        ]} />
      </Expandable>
      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['POST', '/api/merchant/marketing/meta/campaign', 'Create Meta ad campaign', 'Owner'],
          ['POST', '/api/merchant/marketing/google/campaign', 'Create Google ad campaign', 'Owner'],
          ['GET', '/api/merchant/marketing/unified', 'Unified marketing dashboard data', 'Manager+'],
          ['POST', '/api/merchant/whatsapp/broadcast', 'Send WhatsApp broadcast', 'Manager+'],
          ['POST', '/api/merchant/marketing/offline/qr', 'Generate trackable QR code', 'Manager+'],
          ['GET', '/api/merchant/marketing/attribution', 'Cross-channel attribution report', 'Manager+'],
        ]} />
      </Expandable>
    </div>
  );
}

function IntegrationsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Integrations</h2>
      <p className="text-slate-400">9 screens — integration hub, health monitoring, ERP connector, control plane, hardware hub, diagnostics, print templates, and aggregator bridge.</p>
      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['Integrations', 'MerchantIntegrations', 'Standard', 'Browse available integrations, connect/disconnect, status'],
        ['Integration Hub', 'MerchantIntegrationHub', 'Tab View', 'Central platform: all active integrations, data flow, logs'],
        ['Health Monitor', 'MerchantIntegrationHealth', 'Standard', 'Real-time health of all integrations: uptime, errors, latency'],
        ['ERP Connector', 'MerchantERPConnector', 'Standard', 'Connect to Tally, SAP, Xero, QuickBooks, Zoho — bidirectional sync'],
        ['Control Plane', 'MerchantControlPlane', 'Standard', 'Central control: toggle features, sync settings, data mapping'],
        ['Hardware Hub', 'MerchantHardwareHub', 'Standard', 'Manage POS hardware: printers, scanners, NFC readers, tablets'],
        ['Diagnostics', 'MerchantHardwareDiagnostics', 'Standard', 'Test hardware connections, print test page, scan test, NFC test'],
        ['Print Templates', 'MerchantPrintTemplates', 'Standard', 'Customize receipt layouts, barcode label formats, report templates'],
        ['Aggregator Bridge', 'MerchantAggregatorBridge', 'Standard', 'Connect food aggregators: Zomato, Swiggy, Talabat, Deliveroo'],
      ]} />
      <Expandable title="Available Integrations" icon={Zap} defaultOpen={true}>
        <DocTable headers={['Category', 'Integrations', 'Sync Type', 'Status']} rows={[
          ['ERP/Accounting', 'Tally, Xero, QuickBooks, Zoho Books, SAP Business One', 'Bidirectional', 'Available'],
          ['E-commerce', 'Shopify, WooCommerce, Magento, BigCommerce', 'Product/order sync', 'Available'],
          ['Payment Gateways', 'Razorpay, Paytm, PhonePe, Stripe, PayTabs', 'Via NuqtaPay', 'Available'],
          ['Food Aggregators', 'Zomato, Swiggy, Talabat, Deliveroo, Noon Food', 'Order/menu sync', 'Available'],
          ['Delivery', 'Wasil, Aramex, DHL, FedEx, local couriers', 'Dispatch/tracking', 'Available'],
          ['CRM', 'HubSpot, Salesforce, Zoho CRM, Freshsales', 'Customer sync', 'Available'],
          ['Communication', 'WhatsApp Business API, Twilio, SendGrid, Mailchimp', 'Messaging', 'Available'],
          ['Hardware', 'Epson, Star Micronics, Zebra, Honeywell scanners', 'ESC/POS, USB HID', 'Available'],
          ['Social', 'Instagram Shopping, Facebook Shops, Google Business', 'Product/review sync', 'Available'],
        ]} />
      </Expandable>
      <Expandable title="Hardware Compatibility" icon={Cpu}>
        <DocTable headers={['Device Type', 'Protocol', 'Supported Models', 'Connection']} rows={[
          ['Receipt Printer', 'ESC/POS', 'Epson TM-T88VI, Star TSP143, Bixolon SRP-350', 'USB, Bluetooth, WiFi, LAN'],
          ['Barcode Scanner', 'USB HID / BLE', 'Honeywell Voyager, Zebra DS2208, Socket Mobile', 'USB, Bluetooth LE'],
          ['NFC Reader', 'CCID', 'ACR122U, Socket Mobile D600', 'USB, Bluetooth'],
          ['Cash Drawer', 'RJ-11 trigger', 'APG VB320, Star CD3', 'Via receipt printer'],
          ['Card Terminal', 'Smart POS', 'Ingenico, Verifone, PAX', 'Bluetooth, USB'],
          ['Label Printer', 'ZPL', 'Zebra ZD421, DYMO LabelWriter', 'USB, WiFi'],
          ['Tablet/Display', 'Android/iPadOS', 'Samsung Tab A, iPad 10th gen, Lenovo Tab', 'WiFi, Cellular'],
        ]} />
      </Expandable>
      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['GET', '/api/merchant/integrations', 'List available integrations', 'Owner'],
          ['POST', '/api/merchant/integrations/{id}/connect', 'Connect integration with credentials', 'Owner'],
          ['DELETE', '/api/merchant/integrations/{id}/disconnect', 'Disconnect integration', 'Owner'],
          ['GET', '/api/merchant/integrations/health', 'Health status of all integrations', 'Manager+'],
          ['POST', '/api/merchant/hardware/test', 'Test hardware connection', 'Manager+'],
          ['PUT', '/api/merchant/print-templates/{id}', 'Update print template', 'Manager+'],
          ['POST', '/api/merchant/aggregator/sync', 'Sync menu/orders with aggregators', 'Manager+'],
        ]} />
      </Expandable>
    </div>
  );
}

function SettingsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Settings & Profile</h2>
      <p className="text-slate-400">2 screens — general settings and business profile.</p>
      <DocTable headers={['Screen', 'Component', 'Type', 'Description']} rows={[
        ['Settings', 'MerchantSettings', 'Tab View', 'All configuration: store, POS, payments, notifications, security'],
        ['Profile', 'MerchantProfile', 'Standard', 'Business profile: logo, description, photos, social links, hours'],
      ]} />
      <Expandable title="Settings Categories" icon={Settings} defaultOpen={true}>
        <DocTable headers={['Category', 'Settings', 'Access']} rows={[
          ['Store', 'Store name, address, hours, timezone, delivery radius, photos', 'Owner'],
          ['POS', 'Default POS variant, receipt template, tax settings, rounding rules', 'Owner'],
          ['Payments', 'Accepted methods, tip settings, minimum order, currency display', 'Owner'],
          ['Notifications', 'Order alerts, low stock alerts, review notifications, channels', 'Owner'],
          ['Security', 'Staff PIN requirements, session timeout, 2FA, IP whitelist', 'Owner'],
          ['Billing', 'Subscription tier, payment method, invoices, upgrade/downgrade', 'Owner'],
          ['API', 'API keys, webhook URLs, rate limits, sandbox mode', 'Owner'],
          ['Localization', 'Language, currency format, date format, number format', 'Owner'],
          ['Branding', 'Logo, colors, custom receipt header/footer, email templates', 'Owner'],
          ['Data', 'Export all data, delete account, data retention policy', 'Owner'],
        ]} />
      </Expandable>
      <Expandable title="API Endpoints" icon={Code}>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth']} rows={[
          ['GET', '/api/merchant/settings', 'Get all settings', 'Owner'],
          ['PUT', '/api/merchant/settings/{category}', 'Update settings category', 'Owner'],
          ['GET', '/api/merchant/profile', 'Get business profile', 'Staff+'],
          ['PUT', '/api/merchant/profile', 'Update business profile', 'Owner'],
          ['POST', '/api/merchant/api-keys', 'Generate new API key', 'Owner'],
          ['DELETE', '/api/merchant/api-keys/{id}', 'Revoke API key', 'Owner'],
        ]} />
      </Expandable>
    </div>
  );
}

function CrossCuttingSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Cross-Cutting Specifications</h2>
      <p className="text-slate-400">Technical specs that span all modules: offline sync, notifications, NuqtaCoin, Rabtul integration, and hardware.</p>

      <Expandable title="Offline Sync Strategy" icon={Wifi} defaultOpen={true}>
        <CodeBlock code={`STORAGE:
  Mobile: SQLite (React Native) — max 500MB local DB
  Web: IndexedDB — max 50MB per domain
  Sync Queue: ordered list of pending operations

SYNC PROTOCOL:
  1. Online check every 5 seconds (navigator.onLine + API ping)
  2. When offline: all writes go to local DB + sync_queue
  3. When online: process sync_queue FIFO
  4. For each item: POST to API with idempotency_key
  5. Server returns: success | conflict | duplicate
  6. On conflict: merge strategy per entity type

CONFLICT RESOLUTION:
  Transactions: server-wins (sale already happened, accept as-is)
  Inventory: last-write-wins (most recent count is accurate)
  Customers: merge (combine data from both versions)
  Settings: server-wins (central config takes precedence)

OFFLINE CAPABILITIES:
  ✓ Process sales (full POS)
  ✓ View product catalog
  ✓ View customer profiles (cached)
  ✓ Print receipts
  ✗ Process card payments (requires gateway)
  ✗ Real-time inventory check
  ✗ Send notifications
  ✗ Access reports`} />
      </Expandable>

      <Expandable title="Real-Time Notifications" icon={Bell}>
        <DocTable headers={['Trigger Event', 'Channel', 'Recipient', 'Template']} rows={[
          ['New order received', 'Push + Sound', 'All staff on duty', 'New order #{id} from {channel}: {items}'],
          ['Order ready for pickup', 'Push + SMS', 'Customer', 'Your order is ready! Collect from {store}'],
          ['Low stock alert', 'Push + Email', 'Manager + Owner', '{product} is below reorder point ({qty} remaining)'],
          ['Negative review (< 3 stars)', 'Push', 'Manager + Owner', 'New {stars}-star review from {customer}'],
          ['Payment received', 'Push', 'Staff on POS', 'Payment of AED {amount} confirmed'],
          ['Settlement processed', 'Email + Push', 'Owner', 'Settlement of AED {amount} deposited to {bank}'],
          ['Staff clock-in/out', 'Push', 'Manager', '{staff_name} clocked {in/out} at {time}'],
          ['License expiry (30 days)', 'Email + Push', 'Owner', 'Your trade license expires in {days} days'],
          ['Daily sales summary', 'Email', 'Owner', 'Today: AED {revenue}, {orders} orders, {customers} customers'],
        ]} />
      </Expandable>

      <Expandable title="NuqtaCoin Integration at POS" icon={Coins}>
        <CodeBlock code={`EARN FLOW (at checkout):
  1. Sale completed → total = AED 100
  2. BizOne calls Rabtul: POST /api/rabtul/rules/evaluate
     → Sends: merchant_id, customer_id, amount, category
  3. Rabtul Rule Engine evaluates:
     → Base earn: 5% of AED 100 = 5 NuqtaCoin
     → Tier bonus: Gold customer → 2x = 10 NuqtaCoin
     → Campaign bonus: Weekend 3x → 15 NuqtaCoin
     → Branded coins: merchant awards 5 "CoffeeBucks"
  4. Rabtul Wallet Ledger:
     → Credit 15 NuqtaCoin to customer
     → Credit 5 branded coins to customer
  5. Receipt shows: "You earned 15 NuqtaCoin + 5 CoffeeBucks!"

REDEEM FLOW (at checkout):
  1. Customer requests coin redemption at POS
  2. BizOne calls: GET /api/rabtul/wallet/balance/{userId}
     → Returns: {nuqtacoin: 250, coffeebucks: 45}
  3. Customer chooses amount to redeem (max = order total)
  4. BizOne calls: POST /api/rabtul/wallet/debit
     → Deduct coins from customer wallet
     → Priority: branded first → promo → platform
  5. POS adjusts bill: total - coins_value = remaining
  6. Remaining paid via cash/card/etc.
  7. Receipt: "Redeemed 50 NuqtaCoin (AED 50 off)"`} />
      </Expandable>

      <Expandable title="Rabtul API Integration Map" icon={Network}>
        <DocTable headers={['BizOne Action', 'Rabtul API Call', 'Service']} rows={[
          ['Staff login', 'POST /api/rabtul/auth/login', 'Identity & SSO'],
          ['Verify JWT on each request', 'POST /api/rabtul/auth/validate', 'Identity & SSO'],
          ['Process payment', 'POST /api/rabtul/payments/charge', 'Payment Service'],
          ['Earn coins on sale', 'POST /api/rabtul/rules/evaluate', 'Rule Engine'],
          ['Credit coins to customer', 'POST /api/rabtul/wallet/credit', 'Wallet Ledger'],
          ['Debit coins on redemption', 'POST /api/rabtul/wallet/debit', 'Wallet Ledger'],
          ['Check customer coin balance', 'GET /api/rabtul/wallet/balance/{id}', 'Wallet Ledger'],
          ['Send notification', 'POST /api/rabtul/notifications/send', 'Notification Hub'],
          ['Publish event (sale, order)', 'POST /api/rabtul/events/publish', 'Event Bus'],
          ['Get AI recommendations', 'POST /api/rabtul/aira/recommend', 'AIRA Engine'],
          ['Fraud check on high-value tx', 'POST /api/rabtul/fraud/score', 'Fraud & Audit'],
          ['Log audit event', 'POST /api/rabtul/audit/log', 'Fraud & Audit'],
          ['KYC document verification', 'POST /api/rabtul/kyc/verify', 'Identity & SSO'],
        ]} />
      </Expandable>

      <Expandable title="POS Hardware Protocols" icon={Cpu}>
        <CodeBlock code={`RECEIPT PRINTER (ESC/POS):
  Connection: USB, Bluetooth, WiFi, LAN
  Protocol: ESC/POS command set (Epson standard)
  Paper: 80mm thermal (standard), 58mm (compact)
  Features: logo print, barcode, QR code, cut
  Auto-discovery: USB HID enumeration, mDNS for network

BARCODE SCANNER:
  Connection: USB HID (acts as keyboard), Bluetooth LE
  Formats: EAN-13, UPC-A, Code128, QR Code, DataMatrix
  Mode: Continuous scan (POS), single scan (stock count)
  Buffer: 50 scans offline, auto-sync when POS focused

NFC READER:
  Connection: USB CCID, Bluetooth
  Use: Soft POS tap-to-pay, loyalty card tap
  Protocol: ISO 14443 Type A/B, EMV contactless
  Security: P2PE encryption for card data

CASH DRAWER:
  Trigger: RJ-11 from receipt printer (auto-open on sale)
  Manual: button in POS UI (requires Manager+ for non-sale open)
  Detection: micro-switch reports open/closed state`} />
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// MAIN PAGE COMPONENT
// ════════════════════════════════════════════════════════════════════
export default function BizOneOsPage() {
  const [activeSection, setActiveSection] = useState('overview');

  const sectionComponents: Record<string, React.ReactNode> = {
    'overview': <OverviewSection />,
    'auth': <AuthSection />,
    'dashboard': <DashboardSection />,
    'pos': <PosSection />,
    'orders': <OrdersSection />,
    'inventory': <InventorySection />,
    'customers': <CustomersSection />,
    'finance': <FinanceSection />,
    'offers': <OffersSection />,
    'marketing': <MarketingSection />,
    'kitchen': <KitchenSection />,
    'pricing': <PricingSection />,
    'loyalty': <LoyaltySection />,
    'staff': <StaffSection />,
    'payments': <PaymentsSection />,
    'shipping': <ShippingSection />,
    'compliance': <ComplianceSection />,
    'vendor': <VendorSection />,
    'reports': <ReportsSection />,
    'digmarketing': <DigMarketingSection />,
    'integrations': <IntegrationsSection />,
    'settings': <SettingsSection />,
    'crosscutting': <CrossCuttingSection />,
  };

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#0d1d3a] to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/bizone" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-4 text-sm">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to BizOne
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
              <Store className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">BizOne Merchant OS — Complete Specification</h1>
              <p className="text-slate-400 text-sm mt-1">Everything PMs and developers need to build the merchant operating system</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge text="219 Screens" color="bg-blue-500/20 text-blue-400" />
            <Badge text="21 Categories" color="bg-emerald-500/20 text-emerald-400" />
            <Badge text="13 POS Variants" color="bg-purple-500/20 text-purple-400" />
            <Badge text="4 Merchant Tiers" color="bg-amber-500/20 text-amber-400" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            {/* Mobile: horizontal tabs */}
            <div className="lg:hidden overflow-x-auto -mx-4 px-4 pb-4">
              <div className="flex gap-2 min-w-max">
                {sections.map(s => {
                  const Icon = s.icon;
                  const isActive = activeSection === s.id;
                  return (
                    <button key={s.id} onClick={() => setActiveSection(s.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                        isActive ? 'bg-blue-500 text-white' : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50'
                      }`}>
                      <Icon size={14} />
                      {s.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Desktop: vertical sidebar */}
            <nav className="hidden lg:block sticky top-20 space-y-1 max-h-[calc(100vh-6rem)] overflow-y-auto">
              {sections.map(s => {
                const Icon = s.icon;
                const isActive = activeSection === s.id;
                return (
                  <button key={s.id}
                    onClick={() => { setActiveSection(s.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg ${
                      isActive ? 'bg-blue-500/20 text-blue-400 border-l-2 border-blue-400' : 'text-slate-400 hover:text-white hover:bg-slate-700/50 border-l-2 border-transparent'
                    }`}>
                    <Icon size={16} />
                    <span className="truncate">{s.label}</span>
                    {s.screens && <span className={`ml-auto text-xs px-1.5 py-0.5 rounded ${isActive ? 'bg-blue-500/30 text-blue-300' : 'bg-slate-800 text-slate-500'}`}>{s.screens}</span>}
                  </button>
                );
              })}
            </nav>
          </aside>

          <main className="flex-1 min-w-0">
            {sectionComponents[activeSection]}
          </main>
        </div>
      </div>

      {/* Bottom Nav */}
      <section className="bg-slate-800/30 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/hq-admin" className="inline-flex items-center gap-2 px-6 py-3 bg-red-500/20 text-red-400 rounded-xl font-bold hover:bg-red-500/30 transition-colors border border-red-500/30">
              <Shield className="w-5 h-5" /> HQ Admin Spec
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
