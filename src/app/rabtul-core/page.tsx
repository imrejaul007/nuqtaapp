'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen, Layers, Code, Shield, Wallet, BarChart3, GitBranch,
  ChevronDown, ChevronUp, CheckCircle, AlertTriangle, Server,
  Globe, Zap, Users, Brain, Bell, Fingerprint, Settings,
  Network, Activity, Cloud, Lock, ArrowRight, ArrowUpRight,
  Terminal, Database, Eye, Monitor, Cpu, HardDrive, Clock,
  FileText, CreditCard, Store, Package, Star
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// ─── Types ──────────────────────────────────────────────────────────
interface Section {
  id: string;
  label: string;
  icon: React.ElementType;
}

// ─── Sidebar Sections ───────────────────────────────────────────────
const sections: Section[] = [
  { id: 'overview', label: 'Overview & Architecture', icon: BookOpen },
  { id: 'identity', label: 'Identity & SSO', icon: Fingerprint },
  { id: 'wallet', label: 'Wallet Ledger', icon: Wallet },
  { id: 'rules', label: 'Rule Engine', icon: Settings },
  { id: 'events', label: 'Event Bus', icon: Activity },
  { id: 'analytics', label: 'AI & Analytics (AIRA)', icon: Brain },
  { id: 'notifications', label: 'Notification Hub', icon: Bell },
  { id: 'fraud', label: 'Fraud & Audit', icon: Shield },
  { id: 'gateway', label: 'API Gateway', icon: GitBranch },
  { id: 'sdk', label: 'RTMN Core SDK', icon: Code },
  { id: 'matrix', label: 'App Integration Matrix', icon: Network },
  { id: 'infra', label: 'Infrastructure & Deploy', icon: Cloud },
  { id: 'security', label: 'Security Standards', icon: Lock },
  { id: 'monitoring', label: 'Monitoring & SLAs', icon: BarChart3 },
];

// ─── Helper Components ──────────────────────────────────────────────
function Expandable({ title, children, defaultOpen = false, icon: Icon, color = 'text-purple-400' }: {
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
          {headers.map((h, i) => (<th key={i} className="text-left px-3 py-2 text-purple-400 font-semibold whitespace-nowrap">{h}</th>))}
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
      {title && <p className="text-xs text-purple-400 font-semibold mb-1">{title}</p>}
      <pre className="bg-slate-950 border border-slate-700/50 rounded-lg p-4 text-xs text-slate-300 overflow-x-auto whitespace-pre">{code}</pre>
    </div>
  );
}

function Badge({ text, color = 'bg-purple-500/20 text-purple-400' }: { text: string; color?: string }) {
  return <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${color}`}>{text}</span>;
}

function InfoBox({ children, type = 'info' }: { children: React.ReactNode; type?: 'info' | 'warning' | 'success' }) {
  const colors = { info: 'bg-purple-500/10 border-purple-500/30 text-purple-300', warning: 'bg-amber-500/10 border-amber-500/30 text-amber-300', success: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' };
  return <div className={`border rounded-lg p-4 text-sm mb-4 ${colors[type]}`}>{children}</div>;
}

// ════════════════════════════════════════════════════════════════════
// SECTION: Overview & Architecture
// ════════════════════════════════════════════════════════════════════
function OverviewSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Rabtul Core — Overview & Architecture</h2>
      <p className="text-slate-400">The backbone infrastructure powering every app in the RTMN ecosystem. 9 core services, zero duplication, absolute authority.</p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Core Services', value: '9', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/30' },
          { label: 'Apps Connected', value: '16+', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/30' },
          { label: 'Events/Sec', value: '1M+', color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/30' },
          { label: 'Uptime SLA', value: '99.99%', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30' },
        ].map((s) => (
          <div key={s.label} className={`p-4 rounded-xl border ${s.bg} text-center`}>
            <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
            <div className="text-xs text-slate-400 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <InfoBox type="warning">
        <strong>5 Non-Negotiable Rules:</strong>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>NO app creates its own wallet — Rabtul Wallet Ledger is the ONLY source of truth</li>
          <li>NO app stores user identity — Rabtul Identity & SSO owns all authentication</li>
          <li>NO app defines earn/burn rules — Rabtul Rule Engine enforces all coin logic</li>
          <li>NO app sends notifications directly — Rabtul Notification Hub routes all messages</li>
          <li>NO app bypasses the API Gateway — every request flows through Rabtul</li>
        </ol>
      </InfoBox>

      <Expandable title="System Architecture Diagram" icon={Layers} defaultOpen>
        <CodeBlock code={`┌─────────────────────────────────────────────────────────────┐
│                    CONSUMER APPS                            │
│  Nuqta · Wasil · Rakab · Safar · Adzy · NuqtaPay · ...    │
└────────────────────────┬────────────────────────────────────┘
                         │ HTTPS / gRPC
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                  API GATEWAY (Kong/Envoy)                    │
│  Auth │ Rate Limit │ Route │ Load Balance │ Circuit Break   │
└────┬───────┬───────┬───────┬───────┬───────┬───────┬────────┘
     │       │       │       │       │       │       │
     ▼       ▼       ▼       ▼       ▼       ▼       ▼
┌────────┐┌──────┐┌──────┐┌──────┐┌──────┐┌──────┐┌──────┐
│Identity││Wallet││Rules ││Events││ AIRA ││Notify││Fraud │
│  & SSO ││Ledger││Engine││ Bus  ││AI/ML ││ Hub  ││Audit │
└────┬───┘└──┬───┘└──┬───┘└──┬───┘└──┬───┘└──┬───┘└──┬───┘
     │       │       │       │       │       │       │
     └───────┴───────┴───────┴───────┴───────┴───────┘
                         │
              ┌──────────┼──────────┐
              ▼          ▼          ▼
         ┌────────┐┌─────────┐┌─────────┐
         │PostgreS││  Redis  ││  Kafka  │
         │   QL   ││ Cluster ││ Streams │
         └────────┘└─────────┘└─────────┘
              │          │          │
              ▼          ▼          ▼
         ┌────────────────────────────┐
         │   Object Store (S3/GCS)   │
         │   + CDN (CloudFront)      │
         └────────────────────────────┘`} />
      </Expandable>

      <Expandable title="Request Lifecycle" icon={Activity}>
        <CodeBlock title="Full request flow — App to Rabtul and back" code={`1. App calls RTMN SDK method (e.g., sdk.wallet.earnCoins())
2. SDK serializes request → HTTPS POST to api.rabtul.io
3. API Gateway:
   a. Validates JWT token (Identity service check)
   b. Rate limit check (per-app, per-user quotas)
   c. Routes to target service based on path
4. Target service (e.g., Wallet Ledger):
   a. Validates request payload (JSON Schema)
   b. Checks rules via Rule Engine (earn eligible? caps hit?)
   c. Executes business logic (ACID transaction)
   d. Publishes event to Event Bus
5. Event Bus fans out:
   a. Analytics → updates ML models
   b. Notification Hub → sends push/SMS
   c. Fraud → scores transaction
   d. Other subscribed services
6. Response flows back through Gateway → SDK → App
7. Total latency target: < 200ms p99`} />
      </Expandable>

      <Expandable title="Service Dependencies" icon={Network}>
        <DocTable headers={['Service', 'Depends On', 'Depended By', 'Failure Mode']} rows={[
          ['Identity & SSO', 'PostgreSQL, Redis', 'All services', 'Cached tokens valid 15m'],
          ['Wallet Ledger', 'PostgreSQL, Identity, Rules', 'Events, Analytics', 'Queue writes, retry'],
          ['Rule Engine', 'PostgreSQL, Redis', 'Wallet, Events, Gateway', 'Fallback to cached rules'],
          ['Event Bus', 'Kafka, Redis', 'All services', 'Persistent queue, replay'],
          ['AIRA (AI/ML)', 'Event Bus, PostgreSQL', 'Recommendations, Fraud', 'Graceful degrade'],
          ['Notification Hub', 'Event Bus, Redis', 'None (leaf service)', 'Queue & retry'],
          ['Fraud & Audit', 'Event Bus, ML models', 'Wallet (blocking)', 'Allow with flag'],
          ['API Gateway', 'Identity (JWT verify)', 'All external callers', 'Circuit breaker'],
          ['RTMN Core SDK', 'API Gateway', 'All apps', 'Offline cache'],
        ]} />
      </Expandable>

      <Expandable title="Technology Stack" icon={Server}>
        <DocTable headers={['Layer', 'Technology', 'Purpose', 'Why Chosen']} rows={[
          ['API Gateway', 'Kong / Envoy', 'Request routing, rate limiting', 'Battle-tested, plugin ecosystem'],
          ['Services', 'Go (Golang)', 'Core microservices', 'Performance, concurrency, small binaries'],
          ['Database', 'PostgreSQL 16', 'Primary data store', 'ACID, JSONB, partitioning'],
          ['Cache', 'Redis Cluster 7', 'Caching, sessions, rate limits', 'Sub-ms latency, pub/sub'],
          ['Streaming', 'Apache Kafka', 'Event bus, async processing', 'Exactly-once, replay, partitions'],
          ['Search', 'Elasticsearch 8', 'Full-text search, logs', 'Inverted index, aggregations'],
          ['ML/AI', 'Python + TensorFlow', 'AIRA models, predictions', 'ML ecosystem, model serving'],
          ['Object Store', 'AWS S3 / GCS', 'Media, exports, backups', 'Durability, cost-effective'],
          ['CDN', 'CloudFront / Fastly', 'Static assets, API caching', 'Edge locations in GCC'],
          ['Orchestration', 'Kubernetes (EKS)', 'Container orchestration', 'Auto-scaling, self-healing'],
          ['CI/CD', 'GitHub Actions + ArgoCD', 'Build, test, deploy', 'GitOps, canary deploys'],
          ['Monitoring', 'Datadog + PagerDuty', 'Metrics, alerts, on-call', 'Full-stack observability'],
        ]} />
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION: Identity & SSO
// ════════════════════════════════════════════════════════════════════
function IdentitySection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Identity & SSO Service</h2>
      <p className="text-slate-400">Single Sign-On across all 16+ RTMN apps. One identity, verified once, trusted everywhere. Owns all user authentication, KYC, and session management.</p>

      <div className="grid grid-cols-3 gap-3">
        <div className="p-3 rounded-xl border bg-blue-500/10 border-blue-500/30 text-center">
          <div className="text-xl font-bold text-blue-400">99.99%</div>
          <div className="text-xs text-slate-400">Uptime SLA</div>
        </div>
        <div className="p-3 rounded-xl border bg-emerald-500/10 border-emerald-500/30 text-center">
          <div className="text-xl font-bold text-emerald-400">&lt;50ms</div>
          <div className="text-xs text-slate-400">Auth Latency p99</div>
        </div>
        <div className="p-3 rounded-xl border bg-purple-500/10 border-purple-500/30 text-center">
          <div className="text-xl font-bold text-purple-400">10M+</div>
          <div className="text-xs text-slate-400">Users Supported</div>
        </div>
      </div>

      <Expandable title="API Endpoints" icon={GitBranch} defaultOpen>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth', 'Rate Limit']} rows={[
          ['POST', '/v1/auth/register', 'Register new user (phone + OTP)', 'None', '5/min/IP'],
          ['POST', '/v1/auth/login', 'Login with phone + OTP or biometric', 'None', '10/min/IP'],
          ['POST', '/v1/auth/refresh', 'Refresh access token', 'Refresh Token', '30/min/user'],
          ['POST', '/v1/auth/logout', 'Invalidate session', 'Bearer JWT', '10/min/user'],
          ['GET', '/v1/auth/me', 'Get current user profile', 'Bearer JWT', '60/min/user'],
          ['PUT', '/v1/auth/me', 'Update profile fields', 'Bearer JWT', '10/min/user'],
          ['POST', '/v1/auth/kyc/initiate', 'Start Emirates ID / KYC verification', 'Bearer JWT', '3/min/user'],
          ['GET', '/v1/auth/kyc/status', 'Check KYC verification status', 'Bearer JWT', '30/min/user'],
          ['POST', '/v1/auth/device/register', 'Register device for push + fingerprint', 'Bearer JWT', '5/min/user'],
          ['DELETE', '/v1/auth/device/{id}', 'Remove registered device', 'Bearer JWT', '5/min/user'],
          ['GET', '/v1/auth/sessions', 'List active sessions', 'Bearer JWT', '10/min/user'],
          ['DELETE', '/v1/auth/sessions/{id}', 'Terminate specific session', 'Bearer JWT', '10/min/user'],
          ['POST', '/v1/auth/merchant/register', 'Register merchant account', 'None', '3/min/IP'],
          ['POST', '/v1/auth/merchant/verify', 'Verify merchant trade license', 'Bearer JWT', '5/min/user'],
          ['GET', '/v1/admin/users', 'List users (admin)', 'Admin L80+', '100/min'],
          ['PUT', '/v1/admin/users/{id}/status', 'Suspend/activate user', 'Admin L80+', '30/min'],
          ['GET', '/v1/admin/users/{id}/audit', 'User audit trail', 'Admin L70+', '30/min'],
        ]} />
      </Expandable>

      <Expandable title="Database Schema" icon={Database}>
        <DocTable headers={['Table', 'Field', 'Type', 'Constraints', 'Description']} rows={[
          ['users', 'id', 'UUID', 'PK', 'Unique user identifier'],
          ['users', 'phone', 'VARCHAR(20)', 'UNIQUE, NOT NULL', 'Primary phone number (+971...)'],
          ['users', 'email', 'VARCHAR(255)', 'UNIQUE, NULLABLE', 'Optional email address'],
          ['users', 'full_name', 'VARCHAR(255)', 'NOT NULL', 'Full name in English'],
          ['users', 'full_name_ar', 'VARCHAR(255)', 'NULLABLE', 'Full name in Arabic'],
          ['users', 'avatar_url', 'TEXT', 'NULLABLE', 'Profile photo URL'],
          ['users', 'kyc_status', 'ENUM', 'DEFAULT pending', 'none|pending|verified|rejected'],
          ['users', 'kyc_level', 'INT', 'DEFAULT 0', '0=none, 1=phone, 2=ID, 3=full'],
          ['users', 'status', 'ENUM', 'DEFAULT active', 'active|suspended|banned|deleted'],
          ['users', 'role', 'ENUM', 'DEFAULT consumer', 'consumer|merchant|admin'],
          ['users', 'trust_score', 'DECIMAL(5,2)', 'DEFAULT 50.00', 'Fraud trust score 0-100'],
          ['users', 'created_at', 'TIMESTAMPTZ', 'NOT NULL', 'Registration timestamp'],
          ['users', 'last_login_at', 'TIMESTAMPTZ', 'NULLABLE', 'Last successful login'],
          ['---', '---', '---', '---', '---'],
          ['sessions', 'id', 'UUID', 'PK', 'Session identifier'],
          ['sessions', 'user_id', 'UUID', 'FK → users.id', 'Owner of session'],
          ['sessions', 'device_id', 'UUID', 'FK → devices.id', 'Device used'],
          ['sessions', 'access_token_hash', 'VARCHAR(64)', 'INDEXED', 'SHA-256 of JWT'],
          ['sessions', 'refresh_token_hash', 'VARCHAR(64)', 'INDEXED', 'SHA-256 of refresh'],
          ['sessions', 'expires_at', 'TIMESTAMPTZ', 'NOT NULL', 'Token expiry time'],
          ['sessions', 'ip_address', 'INET', 'NOT NULL', 'Client IP'],
          ['sessions', 'is_active', 'BOOLEAN', 'DEFAULT true', 'Active session flag'],
          ['---', '---', '---', '---', '---'],
          ['devices', 'id', 'UUID', 'PK', 'Device identifier'],
          ['devices', 'user_id', 'UUID', 'FK → users.id', 'Device owner'],
          ['devices', 'fingerprint', 'VARCHAR(128)', 'UNIQUE', 'Device fingerprint hash'],
          ['devices', 'platform', 'ENUM', 'NOT NULL', 'ios|android|web'],
          ['devices', 'push_token', 'TEXT', 'NULLABLE', 'FCM/APNS push token'],
          ['devices', 'last_seen_at', 'TIMESTAMPTZ', 'NOT NULL', 'Last activity'],
          ['---', '---', '---', '---', '---'],
          ['kyc_records', 'id', 'UUID', 'PK', 'KYC record identifier'],
          ['kyc_records', 'user_id', 'UUID', 'FK → users.id', 'Applicant'],
          ['kyc_records', 'document_type', 'ENUM', 'NOT NULL', 'emirates_id|passport|trade_license'],
          ['kyc_records', 'document_number', 'VARCHAR(50)', 'ENCRYPTED', 'Document number (AES-256)'],
          ['kyc_records', 'verification_status', 'ENUM', 'NOT NULL', 'pending|approved|rejected'],
          ['kyc_records', 'verified_by', 'UUID', 'FK → users.id', 'Admin who verified'],
          ['kyc_records', 'verified_at', 'TIMESTAMPTZ', 'NULLABLE', 'Verification timestamp'],
        ]} />
        <CodeBlock title="Indexes" code={`CREATE UNIQUE INDEX idx_users_phone ON users(phone);
CREATE UNIQUE INDEX idx_users_email ON users(email) WHERE email IS NOT NULL;
CREATE INDEX idx_sessions_user ON sessions(user_id) WHERE is_active = true;
CREATE INDEX idx_sessions_expires ON sessions(expires_at);
CREATE INDEX idx_devices_user ON devices(user_id);
CREATE UNIQUE INDEX idx_devices_fingerprint ON devices(fingerprint);
CREATE INDEX idx_kyc_user ON kyc_records(user_id);

-- Partitioning: sessions table partitioned by month (created_at)
-- Retention: inactive sessions archived after 90 days`} />
      </Expandable>

      <Expandable title="Event Definitions" icon={Activity}>
        <DocTable headers={['Event Name', 'Payload', 'Producers', 'Consumers']} rows={[
          ['user.registered', '{user_id, phone, role, source_app}', 'Identity', 'Wallet, Analytics, Notify'],
          ['user.logged_in', '{user_id, device_id, ip, app_id}', 'Identity', 'Analytics, Fraud'],
          ['user.kyc_completed', '{user_id, kyc_level, document_type}', 'Identity', 'Wallet, Rules, Notify'],
          ['user.profile_updated', '{user_id, changed_fields[]}', 'Identity', 'Analytics, Search'],
          ['user.suspended', '{user_id, reason, admin_id}', 'Identity', 'Wallet, All Services'],
          ['session.created', '{session_id, user_id, device_id}', 'Identity', 'Analytics'],
          ['session.terminated', '{session_id, user_id, reason}', 'Identity', 'Analytics'],
          ['device.registered', '{device_id, user_id, platform}', 'Identity', 'Notify'],
        ]} />
      </Expandable>

      <Expandable title="Business Logic" icon={Settings}>
        <h4 className="text-white font-semibold mb-2">Authentication Flow</h4>
        <CodeBlock code={`1. User enters phone number
2. Server generates 6-digit OTP, stores hash in Redis (TTL 5 min)
3. OTP sent via Notification Hub (SMS → WhatsApp fallback)
4. User submits OTP
5. Server verifies OTP hash match
6. If new user → create user record, emit user.registered
7. Generate JWT access token (15 min TTL) + refresh token (30 day TTL)
8. Store session in sessions table
9. Return tokens to SDK

Biometric flow:
1. Device sends biometric challenge response
2. Server verifies against stored device public key
3. If valid → generate tokens (same as step 7 above)
4. No OTP needed for biometric-registered devices`} />

        <h4 className="text-white font-semibold mb-2 mt-4">JWT Token Structure</h4>
        <CodeBlock code={`{
  "sub": "user-uuid-here",
  "iss": "rabtul-identity",
  "aud": ["rabtul-api"],
  "role": "consumer|merchant|admin",
  "kyc_level": 2,
  "trust_score": 85.5,
  "permissions": ["wallet.read", "wallet.write"],
  "app_id": "nuqta-consumer",
  "device_id": "device-uuid",
  "exp": 1709123456,
  "iat": 1709122556
}`} />

        <h4 className="text-white font-semibold mb-2 mt-4">KYC Verification Levels</h4>
        <DocTable headers={['Level', 'Requirements', 'Unlocks', 'Daily Limits']} rows={[
          ['L0 — None', 'Phone number only', 'Browse, view offers', 'AED 0'],
          ['L1 — Phone', 'OTP verified phone', 'Earn coins, basic wallet', 'AED 500'],
          ['L2 — ID', 'Emirates ID scanned + matched', 'Full wallet, transfers', 'AED 5,000'],
          ['L3 — Full', 'ID + address + selfie liveness', 'Merchant, large transfers', 'AED 50,000'],
        ]} />
      </Expandable>

      <Expandable title="Error Codes" icon={AlertTriangle}>
        <DocTable headers={['Code', 'HTTP', 'Message', 'Resolution']} rows={[
          ['AUTH_001', '401', 'Invalid or expired OTP', 'Request new OTP'],
          ['AUTH_002', '401', 'Invalid JWT token', 'Refresh token or re-login'],
          ['AUTH_003', '403', 'Account suspended', 'Contact support'],
          ['AUTH_004', '429', 'Rate limit exceeded', 'Wait and retry'],
          ['AUTH_005', '409', 'Phone already registered', 'Login instead'],
          ['AUTH_006', '400', 'Invalid phone format', 'Use E.164 format'],
          ['AUTH_007', '403', 'KYC required for action', 'Complete KYC flow'],
          ['AUTH_008', '401', 'Session terminated', 'Re-authenticate'],
          ['AUTH_009', '400', 'Device limit exceeded (5)', 'Remove a device first'],
          ['AUTH_010', '403', 'Insufficient permissions', 'Check role & KYC level'],
        ]} />
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION: Wallet Ledger
// ════════════════════════════════════════════════════════════════════
function WalletSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Wallet Ledger Service</h2>
      <p className="text-slate-400">THE ONLY wallet system in the RTMN ecosystem. Single source of truth for all balances — Nuqta Coins, branded coins, promo coins, and fiat. No app may create its own wallet logic.</p>

      <InfoBox type="warning">
        <strong>Critical Rule:</strong> No application in the RTMN ecosystem may create, store, or manage wallet balances independently. ALL balance operations MUST go through the Wallet Ledger API. Violations trigger immediate audit alerts.
      </InfoBox>

      <div className="grid grid-cols-3 gap-3">
        <div className="p-3 rounded-xl border bg-emerald-500/10 border-emerald-500/30 text-center">
          <div className="text-xl font-bold text-emerald-400">1M+</div>
          <div className="text-xs text-slate-400">Txns/Day</div>
        </div>
        <div className="p-3 rounded-xl border bg-blue-500/10 border-blue-500/30 text-center">
          <div className="text-xl font-bold text-blue-400">&lt;100ms</div>
          <div className="text-xs text-slate-400">Txn Latency p99</div>
        </div>
        <div className="p-3 rounded-xl border bg-purple-500/10 border-purple-500/30 text-center">
          <div className="text-xl font-bold text-purple-400">ACID</div>
          <div className="text-xs text-slate-400">Consistency</div>
        </div>
      </div>

      <Expandable title="API Endpoints" icon={GitBranch} defaultOpen>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth', 'Rate Limit']} rows={[
          ['GET', '/v1/wallet/balance', 'Get all coin balances for user', 'Bearer JWT', '120/min/user'],
          ['GET', '/v1/wallet/balance/{coin_type}', 'Get specific coin type balance', 'Bearer JWT', '120/min/user'],
          ['POST', '/v1/wallet/earn', 'Credit coins to user wallet', 'Service Token', '1000/min/svc'],
          ['POST', '/v1/wallet/burn', 'Debit coins from user wallet', 'Service Token', '1000/min/svc'],
          ['POST', '/v1/wallet/transfer', 'P2P coin transfer between users', 'Bearer JWT (L2+)', '20/min/user'],
          ['POST', '/v1/wallet/redeem', 'Redeem coins for discount/cash', 'Bearer JWT', '30/min/user'],
          ['GET', '/v1/wallet/transactions', 'Transaction history (paginated)', 'Bearer JWT', '30/min/user'],
          ['GET', '/v1/wallet/transactions/{id}', 'Single transaction detail', 'Bearer JWT', '60/min/user'],
          ['POST', '/v1/wallet/hold', 'Place hold on coins (pre-auth)', 'Service Token', '500/min/svc'],
          ['POST', '/v1/wallet/hold/{id}/capture', 'Capture held coins', 'Service Token', '500/min/svc'],
          ['POST', '/v1/wallet/hold/{id}/release', 'Release held coins', 'Service Token', '500/min/svc'],
          ['GET', '/v1/wallet/branded/{merchant_id}', 'Get branded coin balance', 'Bearer JWT', '60/min/user'],
          ['POST', '/v1/wallet/branded/mint', 'Mint branded coins (merchant)', 'Merchant Token', '10/min/merchant'],
          ['GET', '/v1/admin/wallet/ledger', 'Full ledger view (admin)', 'Admin L80+', '30/min'],
          ['POST', '/v1/admin/wallet/adjust', 'Manual adjustment (admin)', 'Admin L100', '10/min'],
          ['GET', '/v1/admin/wallet/reconcile', 'Reconciliation report', 'Admin L80+', '5/min'],
        ]} />
      </Expandable>

      <Expandable title="Database Schema" icon={Database}>
        <DocTable headers={['Table', 'Field', 'Type', 'Constraints', 'Description']} rows={[
          ['wallets', 'id', 'UUID', 'PK', 'Wallet identifier'],
          ['wallets', 'user_id', 'UUID', 'FK → users.id, UNIQUE', 'Wallet owner'],
          ['wallets', 'nuqta_coins', 'DECIMAL(15,2)', 'DEFAULT 0, CHECK ≥ 0', 'Main Nuqta coin balance'],
          ['wallets', 'promo_coins', 'DECIMAL(15,2)', 'DEFAULT 0, CHECK ≥ 0', 'Promotional coin balance'],
          ['wallets', 'held_coins', 'DECIMAL(15,2)', 'DEFAULT 0, CHECK ≥ 0', 'Coins on hold (pre-auth)'],
          ['wallets', 'lifetime_earned', 'DECIMAL(15,2)', 'DEFAULT 0', 'Total coins ever earned'],
          ['wallets', 'lifetime_burned', 'DECIMAL(15,2)', 'DEFAULT 0', 'Total coins ever burned'],
          ['wallets', 'tier', 'ENUM', 'DEFAULT bronze', 'bronze|silver|gold|platinum'],
          ['wallets', 'updated_at', 'TIMESTAMPTZ', 'NOT NULL', 'Last balance change'],
          ['---', '---', '---', '---', '---'],
          ['transactions', 'id', 'UUID', 'PK', 'Transaction identifier'],
          ['transactions', 'wallet_id', 'UUID', 'FK → wallets.id', 'Affected wallet'],
          ['transactions', 'type', 'ENUM', 'NOT NULL', 'earn|burn|transfer_in|transfer_out|redeem|hold|capture|release|adjust'],
          ['transactions', 'coin_type', 'ENUM', 'NOT NULL', 'nuqta|promo|branded'],
          ['transactions', 'amount', 'DECIMAL(15,2)', 'NOT NULL, CHECK > 0', 'Transaction amount'],
          ['transactions', 'balance_before', 'DECIMAL(15,2)', 'NOT NULL', 'Balance before txn'],
          ['transactions', 'balance_after', 'DECIMAL(15,2)', 'NOT NULL', 'Balance after txn'],
          ['transactions', 'reference_type', 'VARCHAR(50)', 'NOT NULL', 'order|campaign|transfer|manual'],
          ['transactions', 'reference_id', 'UUID', 'NULLABLE', 'Source order/campaign ID'],
          ['transactions', 'source_app', 'VARCHAR(50)', 'NOT NULL', 'App that triggered txn'],
          ['transactions', 'rule_id', 'UUID', 'NULLABLE', 'Rule that authorized txn'],
          ['transactions', 'description', 'TEXT', 'NULLABLE', 'Human-readable description'],
          ['transactions', 'metadata', 'JSONB', 'DEFAULT {}', 'Additional context'],
          ['transactions', 'created_at', 'TIMESTAMPTZ', 'NOT NULL', 'Transaction timestamp'],
          ['---', '---', '---', '---', '---'],
          ['branded_coins', 'id', 'UUID', 'PK', 'Branded coin record'],
          ['branded_coins', 'wallet_id', 'UUID', 'FK → wallets.id', 'Holder wallet'],
          ['branded_coins', 'merchant_id', 'UUID', 'FK → merchants.id', 'Issuing merchant'],
          ['branded_coins', 'coin_name', 'VARCHAR(50)', 'NOT NULL', 'e.g., StarBucks Stars'],
          ['branded_coins', 'balance', 'DECIMAL(15,2)', 'DEFAULT 0, CHECK ≥ 0', 'Current balance'],
          ['branded_coins', 'exchange_rate', 'DECIMAL(8,4)', 'NOT NULL', 'To Nuqta coin rate'],
          ['---', '---', '---', '---', '---'],
          ['holds', 'id', 'UUID', 'PK', 'Hold identifier'],
          ['holds', 'wallet_id', 'UUID', 'FK → wallets.id', 'Wallet with hold'],
          ['holds', 'amount', 'DECIMAL(15,2)', 'NOT NULL', 'Held amount'],
          ['holds', 'status', 'ENUM', 'DEFAULT active', 'active|captured|released|expired'],
          ['holds', 'expires_at', 'TIMESTAMPTZ', 'NOT NULL', 'Auto-release time (30 min)'],
          ['holds', 'source_app', 'VARCHAR(50)', 'NOT NULL', 'Requesting app'],
        ]} />
        <CodeBlock title="Indexes & Partitioning" code={`CREATE UNIQUE INDEX idx_wallets_user ON wallets(user_id);
CREATE INDEX idx_txn_wallet_created ON transactions(wallet_id, created_at DESC);
CREATE INDEX idx_txn_reference ON transactions(reference_type, reference_id);
CREATE INDEX idx_txn_source_app ON transactions(source_app, created_at DESC);
CREATE INDEX idx_branded_wallet ON branded_coins(wallet_id);
CREATE INDEX idx_holds_active ON holds(wallet_id) WHERE status = 'active';

-- Partitioning: transactions by month (created_at RANGE)
-- Archival: transactions older than 24 months → cold storage
-- Hot partition: current + previous month in SSD-backed tablespace`} />
      </Expandable>

      <Expandable title="Event Definitions" icon={Activity}>
        <DocTable headers={['Event Name', 'Payload', 'Producers', 'Consumers']} rows={[
          ['wallet.created', '{wallet_id, user_id}', 'Wallet', 'Analytics'],
          ['wallet.earned', '{wallet_id, user_id, amount, coin_type, source_app, rule_id}', 'Wallet', 'Analytics, Notify, Fraud'],
          ['wallet.burned', '{wallet_id, user_id, amount, coin_type, source_app}', 'Wallet', 'Analytics, Notify, Fraud'],
          ['wallet.transferred', '{from_wallet, to_wallet, amount, coin_type}', 'Wallet', 'Analytics, Notify, Fraud'],
          ['wallet.redeemed', '{wallet_id, amount, merchant_id, discount_amount}', 'Wallet', 'Analytics, Notify'],
          ['wallet.held', '{hold_id, wallet_id, amount, source_app}', 'Wallet', 'Analytics'],
          ['wallet.hold_captured', '{hold_id, wallet_id, amount}', 'Wallet', 'Analytics, Notify'],
          ['wallet.hold_released', '{hold_id, wallet_id, amount}', 'Wallet', 'Analytics'],
          ['wallet.tier_changed', '{wallet_id, user_id, old_tier, new_tier}', 'Wallet', 'Notify, Rules, Analytics'],
          ['wallet.suspicious_activity', '{wallet_id, user_id, reason, risk_score}', 'Wallet', 'Fraud, Admin Alerts'],
        ]} />
      </Expandable>

      <Expandable title="Business Logic" icon={Settings}>
        <h4 className="text-white font-semibold mb-2">Coin Earning Flow</h4>
        <CodeBlock code={`1. App calls POST /v1/wallet/earn with {user_id, amount, source, rule_id}
2. Wallet service calls Rule Engine: "Can this user earn {amount} coins?"
3. Rule Engine checks:
   a. User eligibility (KYC level, trust score)
   b. Daily cap (has user hit daily earn limit?)
   c. Campaign validity (is the campaign still active?)
   d. Merchant tier (what earn rate applies?)
4. If approved → BEGIN TRANSACTION
   a. UPDATE wallets SET nuqta_coins = nuqta_coins + amount, lifetime_earned += amount
   b. INSERT INTO transactions (type='earn', ...)
   c. COMMIT
5. Publish wallet.earned event
6. Return {new_balance, transaction_id}`} />

        <h4 className="text-white font-semibold mb-2 mt-4">Double-Spend Prevention</h4>
        <CodeBlock code={`Strategy: Optimistic locking + idempotency keys
1. Every earn/burn request MUST include an idempotency_key
2. Idempotency keys stored in Redis (TTL 24h) + transactions table
3. If duplicate key detected → return original transaction (200 OK)
4. Balance updates use: UPDATE wallets SET balance = balance - amount
   WHERE balance >= amount RETURNING balance
5. If RETURNING returns 0 rows → insufficient balance (reject)
6. Holds use SELECT FOR UPDATE on wallet row`} />

        <h4 className="text-white font-semibold mb-2 mt-4">Tier Calculation</h4>
        <DocTable headers={['Tier', 'Lifetime Earned', 'Monthly Active', 'Benefits']} rows={[
          ['Bronze', '0+', 'Any', 'Base earn rate (1x)'],
          ['Silver', '1,000+', '3+ months', '1.2x earn rate, priority support'],
          ['Gold', '10,000+', '6+ months', '1.5x earn rate, exclusive offers'],
          ['Platinum', '50,000+', '12+ months', '2x earn rate, VIP access, cashback'],
        ]} />
      </Expandable>

      <Expandable title="Error Codes" icon={AlertTriangle}>
        <DocTable headers={['Code', 'HTTP', 'Message', 'Resolution']} rows={[
          ['WALLET_001', '400', 'Insufficient balance', 'Check balance before operation'],
          ['WALLET_002', '409', 'Duplicate idempotency key', 'Use unique key per request'],
          ['WALLET_003', '403', 'Daily earn cap exceeded', 'Wait for cap reset (midnight UTC)'],
          ['WALLET_004', '403', 'KYC level too low for transfer', 'Complete KYC Level 2+'],
          ['WALLET_005', '404', 'Wallet not found', 'Wallet auto-created on first earn'],
          ['WALLET_006', '400', 'Hold expired', 'Create new hold'],
          ['WALLET_007', '403', 'Transfer to self not allowed', 'Different recipient required'],
          ['WALLET_008', '400', 'Invalid coin type', 'Use nuqta|promo|branded'],
          ['WALLET_009', '403', 'Branded coin not accepted here', 'Check merchant acceptance'],
          ['WALLET_010', '500', 'Ledger reconciliation mismatch', 'Auto-alert to admin, retry'],
        ]} />
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// SECTION: Rule Engine
// ════════════════════════════════════════════════════════════════════
function RulesSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Rule Engine Service</h2>
      <p className="text-slate-400">Central rule engine for the entire RTMN ecosystem. HQ defines rules, Rabtul enforces them. Controls coin earn/burn rates, commission slabs, eligibility, caps, geo-fencing, and campaign logic.</p>

      <div className="grid grid-cols-3 gap-3">
        <div className="p-3 rounded-xl border bg-purple-500/10 border-purple-500/30 text-center">
          <div className="text-xl font-bold text-purple-400">10K+</div>
          <div className="text-xs text-slate-400">Active Rules</div>
        </div>
        <div className="p-3 rounded-xl border bg-orange-500/10 border-orange-500/30 text-center">
          <div className="text-xl font-bold text-orange-400">&lt;10ms</div>
          <div className="text-xs text-slate-400">Eval Latency p99</div>
        </div>
        <div className="p-3 rounded-xl border bg-blue-500/10 border-blue-500/30 text-center">
          <div className="text-xl font-bold text-blue-400">100%</div>
          <div className="text-xs text-slate-400">Cache Hit Rate</div>
        </div>
      </div>

      <Expandable title="API Endpoints" icon={GitBranch} defaultOpen>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth', 'Rate Limit']} rows={[
          ['POST', '/v1/rules/evaluate', 'Evaluate rules for an action', 'Service Token', '10K/min/svc'],
          ['POST', '/v1/rules/batch-evaluate', 'Evaluate multiple actions', 'Service Token', '1K/min/svc'],
          ['GET', '/v1/rules', 'List all rules (paginated)', 'Admin L70+', '30/min'],
          ['GET', '/v1/rules/{id}', 'Get rule detail', 'Admin L70+', '60/min'],
          ['POST', '/v1/rules', 'Create new rule', 'Admin L80+', '30/min'],
          ['PUT', '/v1/rules/{id}', 'Update existing rule', 'Admin L80+', '30/min'],
          ['DELETE', '/v1/rules/{id}', 'Soft-delete rule (deactivate)', 'Admin L80+', '10/min'],
          ['POST', '/v1/rules/{id}/simulate', 'Simulate rule on test data', 'Admin L70+', '30/min'],
          ['GET', '/v1/rules/audit/{id}', 'Rule change audit trail', 'Admin L80+', '30/min'],
          ['GET', '/v1/rules/categories', 'List rule categories', 'Admin L70+', '30/min'],
          ['POST', '/v1/rules/bulk-import', 'Import rules from CSV/JSON', 'Admin L100', '5/min'],
          ['GET', '/v1/rules/conflicts', 'Detect conflicting rules', 'Admin L80+', '10/min'],
        ]} />
      </Expandable>

      <Expandable title="Database Schema" icon={Database}>
        <DocTable headers={['Table', 'Field', 'Type', 'Constraints', 'Description']} rows={[
          ['rules', 'id', 'UUID', 'PK', 'Rule identifier'],
          ['rules', 'name', 'VARCHAR(100)', 'NOT NULL', 'Human-readable rule name'],
          ['rules', 'category', 'ENUM', 'NOT NULL', 'earn|burn|commission|eligibility|cap|geo|campaign'],
          ['rules', 'priority', 'INT', 'DEFAULT 100', 'Higher = evaluated first'],
          ['rules', 'conditions', 'JSONB', 'NOT NULL', 'Rule conditions (AST)'],
          ['rules', 'actions', 'JSONB', 'NOT NULL', 'Rule outcomes/effects'],
          ['rules', 'scope', 'JSONB', 'DEFAULT {}', '{apps, merchants, tiers, regions}'],
          ['rules', 'status', 'ENUM', 'DEFAULT draft', 'draft|active|paused|archived'],
          ['rules', 'valid_from', 'TIMESTAMPTZ', 'NULLABLE', 'Rule start date'],
          ['rules', 'valid_until', 'TIMESTAMPTZ', 'NULLABLE', 'Rule end date'],
          ['rules', 'created_by', 'UUID', 'FK → users.id', 'Admin who created'],
          ['rules', 'version', 'INT', 'DEFAULT 1', 'Rule version number'],
          ['rules', 'created_at', 'TIMESTAMPTZ', 'NOT NULL', 'Creation timestamp'],
          ['---', '---', '---', '---', '---'],
          ['rule_versions', 'id', 'UUID', 'PK', 'Version record ID'],
          ['rule_versions', 'rule_id', 'UUID', 'FK → rules.id', 'Parent rule'],
          ['rule_versions', 'version', 'INT', 'NOT NULL', 'Version number'],
          ['rule_versions', 'conditions', 'JSONB', 'NOT NULL', 'Conditions at this version'],
          ['rule_versions', 'actions', 'JSONB', 'NOT NULL', 'Actions at this version'],
          ['rule_versions', 'changed_by', 'UUID', 'FK → users.id', 'Who made change'],
          ['rule_versions', 'change_reason', 'TEXT', 'NULLABLE', 'Reason for change'],
          ['---', '---', '---', '---', '---'],
          ['rule_evaluations', 'id', 'UUID', 'PK', 'Evaluation log ID'],
          ['rule_evaluations', 'rule_id', 'UUID', 'FK → rules.id', 'Rule evaluated'],
          ['rule_evaluations', 'user_id', 'UUID', 'NOT NULL', 'User being evaluated'],
          ['rule_evaluations', 'result', 'ENUM', 'NOT NULL', 'allow|deny|modify'],
          ['rule_evaluations', 'input_data', 'JSONB', 'NOT NULL', 'Evaluation input'],
          ['rule_evaluations', 'output_data', 'JSONB', 'NOT NULL', 'Evaluation result'],
          ['rule_evaluations', 'latency_ms', 'INT', 'NOT NULL', 'Evaluation time'],
          ['rule_evaluations', 'created_at', 'TIMESTAMPTZ', 'NOT NULL', 'Timestamp'],
        ]} />
      </Expandable>

      <Expandable title="Business Logic" icon={Settings}>
        <h4 className="text-white font-semibold mb-2">Rule Condition DSL</h4>
        <CodeBlock title="Example: Earn rule for Nuqta app purchases" code={`{
  "name": "nuqta_purchase_earn_gold",
  "category": "earn",
  "priority": 200,
  "conditions": {
    "AND": [
      { "field": "user.tier", "op": "in", "value": ["gold", "platinum"] },
      { "field": "transaction.amount", "op": "gte", "value": 50 },
      { "field": "transaction.source_app", "op": "eq", "value": "nuqta" },
      { "field": "user.kyc_level", "op": "gte", "value": 1 },
      { "field": "geo.country", "op": "in", "value": ["AE", "SA", "BH"] }
    ]
  },
  "actions": {
    "earn_rate": 1.5,
    "coin_type": "nuqta",
    "formula": "transaction.amount * 0.05 * earn_rate",
    "cap_daily": 500,
    "cap_monthly": 5000
  },
  "scope": {
    "apps": ["nuqta"],
    "regions": ["AE", "SA", "BH"],
    "merchant_tiers": ["gold", "platinum"]
  }
}`} />

        <h4 className="text-white font-semibold mb-2 mt-4">Evaluation Pipeline</h4>
        <CodeBlock code={`1. Receive evaluation request {action, user_context, transaction_context}
2. Load applicable rules from Redis cache (indexed by category + scope)
3. Sort by priority (descending)
4. For each rule:
   a. Check valid_from / valid_until (time-bound)
   b. Check scope match (app, region, merchant tier)
   c. Evaluate conditions using AST walker
   d. If ALL conditions pass → apply actions
   e. If rule is "terminal" (stop_on_match: true) → stop evaluation
5. Aggregate results from all matching rules
6. Check caps (daily/weekly/monthly) against Redis counters
7. Return final decision {allow: bool, modifications: {...}}
8. Log evaluation to rule_evaluations (async)`} />

        <h4 className="text-white font-semibold mb-2 mt-4">Commission Slab Example</h4>
        <DocTable headers={['Merchant Tier', 'Monthly GMV', 'Commission %', 'Coin Earn Rate']} rows={[
          ['Starter', 'AED 0 - 10K', '15%', '1x'],
          ['Growth', 'AED 10K - 50K', '12%', '1.2x'],
          ['Scale', 'AED 50K - 200K', '10%', '1.5x'],
          ['Enterprise', 'AED 200K+', '8% (negotiable)', '2x'],
        ]} />
      </Expandable>

      <Expandable title="Event Definitions" icon={Activity}>
        <DocTable headers={['Event Name', 'Payload', 'Producers', 'Consumers']} rows={[
          ['rule.created', '{rule_id, name, category, created_by}', 'Rules', 'Analytics, Audit'],
          ['rule.updated', '{rule_id, version, changed_fields, changed_by}', 'Rules', 'Analytics, Audit, Cache'],
          ['rule.activated', '{rule_id, name}', 'Rules', 'All Services (cache refresh)'],
          ['rule.deactivated', '{rule_id, name, reason}', 'Rules', 'All Services (cache refresh)'],
          ['rule.evaluated', '{rule_id, user_id, result, latency_ms}', 'Rules', 'Analytics'],
          ['rule.cap_hit', '{rule_id, user_id, cap_type, cap_value}', 'Rules', 'Notify, Analytics'],
          ['rule.conflict_detected', '{rule_ids[], conflict_type}', 'Rules', 'Admin Alerts'],
        ]} />
      </Expandable>

      <Expandable title="Error Codes" icon={AlertTriangle}>
        <DocTable headers={['Code', 'HTTP', 'Message', 'Resolution']} rows={[
          ['RULE_001', '400', 'Invalid condition syntax', 'Check condition DSL format'],
          ['RULE_002', '409', 'Rule name conflict', 'Use unique rule name'],
          ['RULE_003', '404', 'Rule not found', 'Check rule ID'],
          ['RULE_004', '403', 'Cannot modify active rule', 'Pause rule first, then edit'],
          ['RULE_005', '422', 'Conflicting rules detected', 'Resolve conflicts before activation'],
          ['RULE_006', '400', 'Invalid scope definition', 'Check app/region/tier values'],
          ['RULE_007', '500', 'Rule evaluation timeout', 'Simplify conditions or split rule'],
          ['RULE_008', '403', 'Insufficient admin level', 'L80+ required for rule management'],
        ]} />
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// PLACEHOLDER SECTIONS — Will be filled in subsequent batches
// ════════════════════════════════════════════════════════════════════
function EventsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Event Bus Service</h2>
      <p className="text-slate-400">Real-time event streaming connecting all RTMN apps. Every transaction, action, and signal flows through the Event Bus. Kafka-powered, exactly-once delivery, full replay capability.</p>

      <div className="grid grid-cols-3 gap-3">
        <div className="p-3 rounded-xl border bg-orange-500/10 border-orange-500/30 text-center">
          <div className="text-xl font-bold text-orange-400">1M+</div>
          <div className="text-xs text-slate-400">Events/Sec</div>
        </div>
        <div className="p-3 rounded-xl border bg-blue-500/10 border-blue-500/30 text-center">
          <div className="text-xl font-bold text-blue-400">&lt;50ms</div>
          <div className="text-xs text-slate-400">E2E Latency p99</div>
        </div>
        <div className="p-3 rounded-xl border bg-emerald-500/10 border-emerald-500/30 text-center">
          <div className="text-xl font-bold text-emerald-400">Exactly Once</div>
          <div className="text-xs text-slate-400">Delivery</div>
        </div>
      </div>

      <Expandable title="API Endpoints" icon={GitBranch} defaultOpen>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth', 'Rate Limit']} rows={[
          ['POST', '/v1/events/publish', 'Publish single event', 'Service Token', '10K/min/svc'],
          ['POST', '/v1/events/publish/batch', 'Publish batch of events', 'Service Token', '1K/min/svc'],
          ['POST', '/v1/events/subscribe', 'Register event subscription', 'Service Token', '100/min/svc'],
          ['DELETE', '/v1/events/subscribe/{id}', 'Remove subscription', 'Service Token', '100/min/svc'],
          ['GET', '/v1/events/subscriptions', 'List active subscriptions', 'Service Token', '30/min'],
          ['POST', '/v1/events/replay', 'Replay events from timestamp', 'Admin L80+', '5/min'],
          ['GET', '/v1/events/dlq', 'List dead letter queue items', 'Admin L70+', '30/min'],
          ['POST', '/v1/events/dlq/{id}/retry', 'Retry DLQ event', 'Admin L70+', '30/min'],
          ['GET', '/v1/events/topics', 'List all event topics', 'Service Token', '30/min'],
          ['GET', '/v1/events/stats', 'Event throughput statistics', 'Admin L70+', '30/min'],
          ['GET', '/v1/events/schema/{topic}', 'Get event schema for topic', 'Service Token', '60/min'],
        ]} />
      </Expandable>

      <Expandable title="Event Topics & Schemas" icon={Database}>
        <DocTable headers={['Topic', 'Partitions', 'Retention', 'Producers', 'Avg Events/Sec']} rows={[
          ['user.events', '32', '30 days', 'Identity', '5K'],
          ['wallet.events', '64', '90 days', 'Wallet Ledger', '50K'],
          ['rule.events', '16', '30 days', 'Rule Engine', '1K'],
          ['transaction.events', '128', '365 days', 'BizOne, Nuqta', '100K'],
          ['notification.events', '32', '7 days', 'Notification Hub', '20K'],
          ['fraud.events', '16', '365 days', 'Fraud & Audit', '5K'],
          ['analytics.events', '64', '30 days', 'AIRA', '10K'],
          ['merchant.events', '32', '90 days', 'BizOne', '10K'],
          ['campaign.events', '16', '30 days', 'HQ Admin', '2K'],
          ['system.events', '8', '7 days', 'All Services', '500'],
        ]} />
        <CodeBlock title="Standard Event Envelope" code={`{
  "event_id": "uuid-v4",
  "topic": "wallet.events",
  "type": "wallet.earned",
  "version": "1.0",
  "timestamp": "2025-01-15T10:30:00Z",
  "source": {
    "service": "wallet-ledger",
    "instance": "wallet-prod-03",
    "app_id": "nuqta-consumer"
  },
  "data": {
    "wallet_id": "uuid",
    "user_id": "uuid",
    "amount": 150.00,
    "coin_type": "nuqta"
  },
  "metadata": {
    "correlation_id": "uuid",
    "trace_id": "uuid",
    "idempotency_key": "unique-key"
  }
}`} />
      </Expandable>

      <Expandable title="Database Schema" icon={Database}>
        <DocTable headers={['Table', 'Field', 'Type', 'Constraints', 'Description']} rows={[
          ['subscriptions', 'id', 'UUID', 'PK', 'Subscription identifier'],
          ['subscriptions', 'service_id', 'VARCHAR(50)', 'NOT NULL', 'Subscribing service name'],
          ['subscriptions', 'topic', 'VARCHAR(100)', 'NOT NULL', 'Event topic to subscribe'],
          ['subscriptions', 'event_types', 'TEXT[]', 'NULLABLE', 'Specific types (null=all)'],
          ['subscriptions', 'webhook_url', 'TEXT', 'NOT NULL', 'Delivery webhook URL'],
          ['subscriptions', 'filter', 'JSONB', 'DEFAULT {}', 'Optional event filter'],
          ['subscriptions', 'status', 'ENUM', 'DEFAULT active', 'active|paused|failed'],
          ['subscriptions', 'retry_policy', 'JSONB', 'NOT NULL', '{max_retries, backoff_ms}'],
          ['subscriptions', 'created_at', 'TIMESTAMPTZ', 'NOT NULL', 'Created timestamp'],
          ['---', '---', '---', '---', '---'],
          ['dead_letter_queue', 'id', 'UUID', 'PK', 'DLQ entry identifier'],
          ['dead_letter_queue', 'event_id', 'UUID', 'NOT NULL', 'Original event ID'],
          ['dead_letter_queue', 'subscription_id', 'UUID', 'FK → subscriptions.id', 'Failed subscription'],
          ['dead_letter_queue', 'event_payload', 'JSONB', 'NOT NULL', 'Full event data'],
          ['dead_letter_queue', 'failure_reason', 'TEXT', 'NOT NULL', 'Error message'],
          ['dead_letter_queue', 'retry_count', 'INT', 'DEFAULT 0', 'Retry attempts so far'],
          ['dead_letter_queue', 'max_retries', 'INT', 'NOT NULL', 'Max retry limit'],
          ['dead_letter_queue', 'next_retry_at', 'TIMESTAMPTZ', 'NULLABLE', 'Next retry time'],
          ['dead_letter_queue', 'status', 'ENUM', 'DEFAULT pending', 'pending|retrying|exhausted|resolved'],
        ]} />
      </Expandable>

      <Expandable title="Business Logic" icon={Settings}>
        <h4 className="text-white font-semibold mb-2">Event Processing Pipeline</h4>
        <CodeBlock code={`1. Producer publishes event via POST /v1/events/publish
2. Event Bus validates schema against registered schema
3. Event assigned partition key (typically user_id or merchant_id)
4. Kafka producer sends to topic partition (exactly-once semantics)
5. Consumer groups (one per subscribing service) read events:
   a. Deserialize event envelope
   b. Check subscription filters
   c. Deliver to webhook URL (HTTP POST, 5s timeout)
   d. If 2xx → acknowledge offset
   e. If 4xx → send to DLQ (no retry for client errors)
   f. If 5xx/timeout → exponential backoff retry (3 attempts)
   g. If exhausted → send to DLQ, alert ops
6. DLQ events reviewed by admin, can be replayed manually`} />

        <h4 className="text-white font-semibold mb-2 mt-4">Cross-App Trigger Examples</h4>
        <DocTable headers={['Trigger Event', 'Source App', 'Target Service', 'Action Taken']} rows={[
          ['wallet.earned', 'Nuqta', 'Notification Hub', 'Push: "You earned 50 coins!"'],
          ['wallet.tier_changed', 'Wallet', 'Rule Engine', 'Refresh earn rate rules'],
          ['user.kyc_completed', 'Identity', 'Wallet', 'Upgrade transaction limits'],
          ['transaction.completed', 'BizOne', 'AIRA', 'Update recommendation model'],
          ['merchant.approved', 'HQ Admin', 'BizOne', 'Activate merchant dashboard'],
          ['fraud.alert_triggered', 'Fraud', 'Wallet', 'Hold suspicious funds'],
          ['campaign.ended', 'HQ Admin', 'Rule Engine', 'Deactivate campaign rules'],
        ]} />
      </Expandable>

      <Expandable title="Error Codes" icon={AlertTriangle}>
        <DocTable headers={['Code', 'HTTP', 'Message', 'Resolution']} rows={[
          ['EVENT_001', '400', 'Invalid event schema', 'Check event type and required fields'],
          ['EVENT_002', '400', 'Unknown topic', 'Register topic first'],
          ['EVENT_003', '413', 'Event payload too large (>1MB)', 'Reduce payload, use references'],
          ['EVENT_004', '429', 'Publish rate limit exceeded', 'Batch events or increase quota'],
          ['EVENT_005', '409', 'Duplicate subscription', 'Subscription already exists'],
          ['EVENT_006', '404', 'Subscription not found', 'Check subscription ID'],
          ['EVENT_007', '500', 'Kafka broker unavailable', 'Automatic failover, retry in 5s'],
          ['EVENT_008', '403', 'Replay requires admin access', 'L80+ admin required'],
        ]} />
      </Expandable>
    </div>
  );
}

function AnalyticsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">AIRA — AI & Analytics Engine</h2>
      <p className="text-slate-400">Artificial Intelligence for RTMN Analytics. Unified analytics and ML engine serving all apps. Recommendations, predictions, fraud detection, user segmentation, and A/B testing.</p>

      <div className="grid grid-cols-3 gap-3">
        <div className="p-3 rounded-xl border bg-pink-500/10 border-pink-500/30 text-center">
          <div className="text-xl font-bold text-pink-400">95%</div>
          <div className="text-xs text-slate-400">ML Accuracy</div>
        </div>
        <div className="p-3 rounded-xl border bg-blue-500/10 border-blue-500/30 text-center">
          <div className="text-xl font-bold text-blue-400">&lt;200ms</div>
          <div className="text-xs text-slate-400">Prediction p99</div>
        </div>
        <div className="p-3 rounded-xl border bg-emerald-500/10 border-emerald-500/30 text-center">
          <div className="text-xl font-bold text-emerald-400">12+</div>
          <div className="text-xs text-slate-400">ML Models</div>
        </div>
      </div>

      <Expandable title="API Endpoints" icon={GitBranch} defaultOpen>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth', 'Rate Limit']} rows={[
          ['GET', '/v1/analytics/recommend/{user_id}', 'Get personalized recommendations', 'Service Token', '500/min/svc'],
          ['POST', '/v1/analytics/predict/churn', 'Churn probability for user set', 'Service Token', '100/min/svc'],
          ['POST', '/v1/analytics/predict/ltv', 'Lifetime value prediction', 'Service Token', '100/min/svc'],
          ['POST', '/v1/analytics/segment', 'Get user segment membership', 'Service Token', '200/min/svc'],
          ['GET', '/v1/analytics/trends/{metric}', 'Metric trend data (time series)', 'Admin L70+', '60/min'],
          ['POST', '/v1/analytics/ab-test/create', 'Create A/B test experiment', 'Admin L80+', '10/min'],
          ['GET', '/v1/analytics/ab-test/{id}/results', 'Get A/B test results', 'Admin L70+', '30/min'],
          ['POST', '/v1/analytics/cohort', 'Define user cohort', 'Admin L70+', '30/min'],
          ['GET', '/v1/analytics/dashboard/{type}', 'Dashboard data (real-time)', 'Admin L70+', '60/min'],
          ['POST', '/v1/analytics/query', 'Custom analytics query (SQL-like)', 'Admin L80+', '20/min'],
          ['GET', '/v1/analytics/models', 'List active ML models', 'Admin L80+', '30/min'],
          ['POST', '/v1/analytics/models/{id}/retrain', 'Trigger model retraining', 'Admin L100', '5/min'],
          ['GET', '/v1/analytics/fraud/score/{user_id}', 'Get fraud risk score', 'Service Token', '500/min/svc'],
          ['POST', '/v1/analytics/search/similar', 'Find similar users/merchants', 'Service Token', '100/min/svc'],
        ]} />
      </Expandable>

      <Expandable title="ML Models" icon={Brain}>
        <DocTable headers={['Model', 'Type', 'Input Features', 'Output', 'Retrain Freq']} rows={[
          ['Recommendation Engine', 'Collaborative Filtering', 'Purchase history, browsing, location', 'Top-N items + merchants', 'Daily'],
          ['Churn Predictor', 'Gradient Boosted Trees', 'Activity freq, recency, value, complaints', 'Churn probability (0-1)', 'Weekly'],
          ['LTV Calculator', 'Neural Network', 'Transaction history, tier, engagement', 'Predicted 12-month value', 'Weekly'],
          ['Fraud Detector', 'Ensemble (RF + NN)', 'Amount, velocity, device, location, time', 'Risk score (0-100)', 'Real-time (online)'],
          ['User Segmenter', 'K-Means + RFM', 'Recency, frequency, monetary', '8 segments (Champions...Lost)', 'Daily'],
          ['Demand Forecaster', 'LSTM', 'Historical sales, seasonality, events', 'Next 30-day demand', 'Daily'],
          ['Price Optimizer', 'Bayesian Optimization', 'Demand elasticity, competitor, inventory', 'Optimal price point', 'Hourly'],
          ['Content Ranker', 'Learning to Rank', 'User prefs, CTR history, freshness', 'Ranked content list', 'Real-time'],
          ['Cross-Sell Engine', 'Association Rules', 'Basket analysis, purchase sequences', 'Complementary items', 'Daily'],
          ['Search Ranker', 'TF-IDF + BERT', 'Query, user context, merchant data', 'Ranked search results', 'Weekly'],
          ['Notification Timer', 'Bandit Algorithm', 'Open history, time, device, location', 'Optimal send time', 'Real-time'],
          ['Anomaly Detector', 'Isolation Forest', 'System metrics, traffic patterns', 'Anomaly score + alert', 'Real-time'],
        ]} />
      </Expandable>

      <Expandable title="Database Schema" icon={Database}>
        <DocTable headers={['Table', 'Field', 'Type', 'Constraints', 'Description']} rows={[
          ['user_features', 'user_id', 'UUID', 'PK', 'User identifier'],
          ['user_features', 'segment', 'VARCHAR(30)', 'NOT NULL', 'Current segment'],
          ['user_features', 'rfm_score', 'JSONB', 'NOT NULL', '{recency, frequency, monetary}'],
          ['user_features', 'churn_score', 'DECIMAL(5,4)', 'NOT NULL', 'Churn probability'],
          ['user_features', 'ltv_predicted', 'DECIMAL(12,2)', 'NOT NULL', 'Predicted LTV (AED)'],
          ['user_features', 'fraud_score', 'DECIMAL(5,2)', 'NOT NULL', 'Fraud risk 0-100'],
          ['user_features', 'preferred_categories', 'TEXT[]', 'DEFAULT {}', 'Top 5 categories'],
          ['user_features', 'preferred_times', 'JSONB', 'DEFAULT {}', 'Activity time patterns'],
          ['user_features', 'updated_at', 'TIMESTAMPTZ', 'NOT NULL', 'Last feature refresh'],
          ['---', '---', '---', '---', '---'],
          ['experiments', 'id', 'UUID', 'PK', 'A/B test identifier'],
          ['experiments', 'name', 'VARCHAR(100)', 'NOT NULL', 'Experiment name'],
          ['experiments', 'variants', 'JSONB', 'NOT NULL', '[{name, weight, config}]'],
          ['experiments', 'metric', 'VARCHAR(50)', 'NOT NULL', 'Primary success metric'],
          ['experiments', 'status', 'ENUM', 'DEFAULT draft', 'draft|running|concluded'],
          ['experiments', 'sample_size', 'INT', 'NOT NULL', 'Required sample per variant'],
          ['experiments', 'confidence', 'DECIMAL(5,4)', 'DEFAULT 0.95', 'Required stat confidence'],
          ['experiments', 'start_date', 'TIMESTAMPTZ', 'NULLABLE', 'Experiment start'],
          ['experiments', 'end_date', 'TIMESTAMPTZ', 'NULLABLE', 'Experiment end'],
          ['---', '---', '---', '---', '---'],
          ['predictions', 'id', 'UUID', 'PK', 'Prediction record'],
          ['predictions', 'model_id', 'VARCHAR(50)', 'NOT NULL', 'Model that made prediction'],
          ['predictions', 'user_id', 'UUID', 'NOT NULL', 'Subject user'],
          ['predictions', 'prediction', 'JSONB', 'NOT NULL', 'Prediction output'],
          ['predictions', 'confidence', 'DECIMAL(5,4)', 'NOT NULL', 'Model confidence'],
          ['predictions', 'created_at', 'TIMESTAMPTZ', 'NOT NULL', 'Prediction timestamp'],
        ]} />
      </Expandable>

      <Expandable title="Business Logic" icon={Settings}>
        <h4 className="text-white font-semibold mb-2">Recommendation Pipeline</h4>
        <CodeBlock code={`1. User opens app → API calls /v1/analytics/recommend/{user_id}
2. Check Redis cache for recent recommendations (TTL 1 hour)
3. If cache miss:
   a. Load user feature vector from user_features table
   b. Load candidate items (top 1000 by popularity in user's region)
   c. Score each candidate using collaborative filtering model
   d. Apply business rules (exclude out-of-stock, expired offers)
   e. Re-rank using personalization model (CTR prediction)
   f. Cache top 50 results in Redis
4. Return top N items with explanation ("Because you visited...")
5. Log impression event for model feedback loop`} />

        <h4 className="text-white font-semibold mb-2 mt-4">User Segmentation (RFM)</h4>
        <DocTable headers={['Segment', 'Recency', 'Frequency', 'Monetary', 'Action']} rows={[
          ['Champions', 'Recent', 'Often', 'High', 'Reward, upsell premium'],
          ['Loyal', 'Recent', 'Often', 'Medium', 'Loyalty programs, referrals'],
          ['Potential', 'Recent', 'Low', 'Medium', 'Engagement campaigns'],
          ['New Users', 'Recent', 'First', 'Low', 'Onboarding, welcome offers'],
          ['At Risk', 'Lapsing', 'Medium', 'Medium', 'Win-back campaigns'],
          ['Hibernating', 'Old', 'Low', 'Low', 'Re-activation offers'],
          ['Lost', 'Very Old', 'None', 'None', 'Heavy discount or remove'],
          ['High Value', 'Any', 'Any', 'Very High', 'VIP treatment, dedicated support'],
        ]} />
      </Expandable>

      <Expandable title="Error Codes" icon={AlertTriangle}>
        <DocTable headers={['Code', 'HTTP', 'Message', 'Resolution']} rows={[
          ['AIRA_001', '404', 'User features not found', 'User needs more activity for predictions'],
          ['AIRA_002', '503', 'Model serving unavailable', 'Fallback to popularity-based results'],
          ['AIRA_003', '400', 'Invalid query syntax', 'Check analytics query DSL'],
          ['AIRA_004', '429', 'Prediction rate limit', 'Cache results, reduce frequency'],
          ['AIRA_005', '422', 'Insufficient data for cohort', 'Broaden cohort criteria'],
          ['AIRA_006', '409', 'Experiment name conflict', 'Use unique experiment name'],
          ['AIRA_007', '403', 'Model retrain requires L100', 'Escalate to super admin'],
        ]} />
      </Expandable>
    </div>
  );
}

function NotificationsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Notification Hub Service</h2>
      <p className="text-slate-400">Unified notification system for the entire RTMN ecosystem. Push, SMS, WhatsApp, email, in-app — all routed intelligently through a single service. No app sends notifications directly.</p>

      <div className="grid grid-cols-3 gap-3">
        <div className="p-3 rounded-xl border bg-cyan-500/10 border-cyan-500/30 text-center">
          <div className="text-xl font-bold text-cyan-400">100M+</div>
          <div className="text-xs text-slate-400">Msgs/Day</div>
        </div>
        <div className="p-3 rounded-xl border bg-blue-500/10 border-blue-500/30 text-center">
          <div className="text-xl font-bold text-blue-400">5</div>
          <div className="text-xs text-slate-400">Channels</div>
        </div>
        <div className="p-3 rounded-xl border bg-emerald-500/10 border-emerald-500/30 text-center">
          <div className="text-xl font-bold text-emerald-400">99.5%</div>
          <div className="text-xs text-slate-400">Delivery Rate</div>
        </div>
      </div>

      <Expandable title="API Endpoints" icon={GitBranch} defaultOpen>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth', 'Rate Limit']} rows={[
          ['POST', '/v1/notify/send', 'Send notification to user', 'Service Token', '5K/min/svc'],
          ['POST', '/v1/notify/send/batch', 'Send to multiple users', 'Service Token', '100/min/svc'],
          ['POST', '/v1/notify/send/segment', 'Send to user segment', 'Admin L70+', '10/min'],
          ['GET', '/v1/notify/user/{id}/preferences', 'Get user notification prefs', 'Bearer JWT', '30/min'],
          ['PUT', '/v1/notify/user/{id}/preferences', 'Update notification prefs', 'Bearer JWT', '10/min'],
          ['GET', '/v1/notify/user/{id}/history', 'Notification history', 'Bearer JWT', '30/min'],
          ['POST', '/v1/notify/template', 'Create notification template', 'Admin L70+', '30/min'],
          ['GET', '/v1/notify/templates', 'List templates', 'Admin L70+', '30/min'],
          ['PUT', '/v1/notify/template/{id}', 'Update template', 'Admin L70+', '30/min'],
          ['GET', '/v1/notify/stats', 'Delivery statistics', 'Admin L70+', '30/min'],
          ['GET', '/v1/notify/stats/channel/{channel}', 'Per-channel stats', 'Admin L70+', '30/min'],
        ]} />
      </Expandable>

      <Expandable title="Channel Configuration" icon={Bell}>
        <DocTable headers={['Channel', 'Provider', 'Fallback', 'Cost/Msg', 'Latency', 'Use Case']} rows={[
          ['Push (iOS)', 'APNS', 'SMS', 'Free', '<1s', 'Real-time alerts, offers'],
          ['Push (Android)', 'FCM', 'SMS', 'Free', '<1s', 'Real-time alerts, offers'],
          ['Push (Web)', 'FCM Web', 'Email', 'Free', '<2s', 'Desktop notifications'],
          ['SMS', 'Twilio → MessageBird', 'WhatsApp', 'AED 0.05', '<5s', 'OTP, critical alerts'],
          ['WhatsApp', 'Meta Business API', 'SMS', 'AED 0.15', '<3s', 'Rich messages, support'],
          ['Email', 'SendGrid → SES', 'None', 'AED 0.002', '<30s', 'Receipts, reports, marketing'],
          ['In-App', 'Internal WebSocket', 'Push', 'Free', '<0.5s', 'Banners, badges, modals'],
        ]} />
      </Expandable>

      <Expandable title="Database Schema" icon={Database}>
        <DocTable headers={['Table', 'Field', 'Type', 'Constraints', 'Description']} rows={[
          ['notifications', 'id', 'UUID', 'PK', 'Notification identifier'],
          ['notifications', 'user_id', 'UUID', 'NOT NULL', 'Recipient user'],
          ['notifications', 'channel', 'ENUM', 'NOT NULL', 'push|sms|whatsapp|email|in_app'],
          ['notifications', 'template_id', 'UUID', 'FK → templates.id', 'Template used'],
          ['notifications', 'title', 'VARCHAR(100)', 'NOT NULL', 'Notification title'],
          ['notifications', 'body', 'TEXT', 'NOT NULL', 'Notification body'],
          ['notifications', 'data', 'JSONB', 'DEFAULT {}', 'Deeplink, action data'],
          ['notifications', 'status', 'ENUM', 'DEFAULT queued', 'queued|sent|delivered|failed|read'],
          ['notifications', 'sent_at', 'TIMESTAMPTZ', 'NULLABLE', 'When sent to provider'],
          ['notifications', 'delivered_at', 'TIMESTAMPTZ', 'NULLABLE', 'Provider confirmed delivery'],
          ['notifications', 'read_at', 'TIMESTAMPTZ', 'NULLABLE', 'User opened/read'],
          ['notifications', 'source_app', 'VARCHAR(50)', 'NOT NULL', 'Requesting app'],
          ['notifications', 'source_event', 'VARCHAR(100)', 'NULLABLE', 'Triggering event'],
          ['notifications', 'created_at', 'TIMESTAMPTZ', 'NOT NULL', 'Created timestamp'],
          ['---', '---', '---', '---', '---'],
          ['templates', 'id', 'UUID', 'PK', 'Template identifier'],
          ['templates', 'name', 'VARCHAR(100)', 'UNIQUE', 'Template key name'],
          ['templates', 'channel', 'ENUM', 'NOT NULL', 'Target channel'],
          ['templates', 'title_template', 'TEXT', 'NOT NULL', 'Title with {{variables}}'],
          ['templates', 'body_template', 'TEXT', 'NOT NULL', 'Body with {{variables}}'],
          ['templates', 'locale', 'VARCHAR(5)', 'DEFAULT en', 'Language code (en|ar)'],
          ['---', '---', '---', '---', '---'],
          ['user_preferences', 'user_id', 'UUID', 'PK', 'User identifier'],
          ['user_preferences', 'push_enabled', 'BOOLEAN', 'DEFAULT true', 'Push notifications on/off'],
          ['user_preferences', 'sms_enabled', 'BOOLEAN', 'DEFAULT true', 'SMS on/off'],
          ['user_preferences', 'email_enabled', 'BOOLEAN', 'DEFAULT true', 'Email on/off'],
          ['user_preferences', 'whatsapp_enabled', 'BOOLEAN', 'DEFAULT true', 'WhatsApp on/off'],
          ['user_preferences', 'quiet_hours_start', 'TIME', 'NULLABLE', 'Do not disturb start'],
          ['user_preferences', 'quiet_hours_end', 'TIME', 'NULLABLE', 'Do not disturb end'],
          ['user_preferences', 'preferred_channel', 'ENUM', 'DEFAULT push', 'First-choice channel'],
        ]} />
      </Expandable>

      <Expandable title="Business Logic" icon={Settings}>
        <h4 className="text-white font-semibold mb-2">Smart Routing Algorithm</h4>
        <CodeBlock code={`1. Notification request received with {user_id, template, data}
2. Load user preferences from user_preferences table
3. Determine optimal channel:
   a. If user has preferred_channel and it's available → use it
   b. If quiet hours active → queue for after quiet hours (or use in_app only)
   c. Channel priority: push → whatsapp → sms → email (default)
   d. If push token missing → skip push, try next
   e. AIRA optimal-time model may delay by up to 30 min
4. Render template with variables: {{user.name}}, {{amount}}, etc.
5. Send to provider (async, with 3 retry attempts)
6. Track delivery status via provider webhooks
7. If primary channel fails → automatic fallback to next channel
8. Update notification record with final status`} />

        <h4 className="text-white font-semibold mb-2 mt-4">Rate Limiting (Anti-Spam)</h4>
        <DocTable headers={['Rule', 'Limit', 'Window', 'Override']} rows={[
          ['Push per user', '20/day', '24 hours', 'Critical alerts bypass'],
          ['SMS per user', '5/day', '24 hours', 'OTP bypasses'],
          ['WhatsApp per user', '10/day', '24 hours', 'Support bypasses'],
          ['Email per user', '3/day', '24 hours', 'Transactional bypasses'],
          ['Marketing batch', '1M/hour', '1 hour', 'Admin L100 override'],
        ]} />
      </Expandable>

      <Expandable title="Error Codes" icon={AlertTriangle}>
        <DocTable headers={['Code', 'HTTP', 'Message', 'Resolution']} rows={[
          ['NOTIFY_001', '400', 'Invalid template variables', 'Check required template vars'],
          ['NOTIFY_002', '404', 'Template not found', 'Create template first'],
          ['NOTIFY_003', '429', 'User notification limit exceeded', 'Wait or use critical flag'],
          ['NOTIFY_004', '400', 'No valid channel for user', 'User has disabled all channels'],
          ['NOTIFY_005', '503', 'Provider temporarily unavailable', 'Auto-failover to backup'],
          ['NOTIFY_006', '400', 'Invalid locale', 'Use en or ar'],
          ['NOTIFY_007', '413', 'Message body too long', 'SMS: 160 chars, Push: 4KB'],
        ]} />
      </Expandable>
    </div>
  );
}
function FraudSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Fraud & Audit Service</h2>
      <p className="text-slate-400">Real-time fraud detection and complete audit trail for regulatory compliance. Every transaction scored, every action logged. ML models + rule-based velocity checks.</p>

      <div className="grid grid-cols-3 gap-3">
        <div className="p-3 rounded-xl border bg-red-500/10 border-red-500/30 text-center">
          <div className="text-xl font-bold text-red-400">&lt;0.01%</div>
          <div className="text-xs text-slate-400">Fraud Rate</div>
        </div>
        <div className="p-3 rounded-xl border bg-blue-500/10 border-blue-500/30 text-center">
          <div className="text-xl font-bold text-blue-400">&lt;50ms</div>
          <div className="text-xs text-slate-400">Scoring p99</div>
        </div>
        <div className="p-3 rounded-xl border bg-emerald-500/10 border-emerald-500/30 text-center">
          <div className="text-xl font-bold text-emerald-400">100%</div>
          <div className="text-xs text-slate-400">Audit Coverage</div>
        </div>
      </div>

      <Expandable title="API Endpoints" icon={GitBranch} defaultOpen>
        <DocTable headers={['Method', 'Endpoint', 'Description', 'Auth', 'Rate Limit']} rows={[
          ['POST', '/v1/fraud/score', 'Score a transaction (sync)', 'Service Token', '10K/min/svc'],
          ['POST', '/v1/fraud/score/batch', 'Score batch of transactions', 'Service Token', '100/min/svc'],
          ['GET', '/v1/fraud/alerts', 'List fraud alerts (paginated)', 'Admin L70+', '30/min'],
          ['PUT', '/v1/fraud/alerts/{id}/resolve', 'Resolve fraud alert', 'Admin L70+', '30/min'],
          ['GET', '/v1/fraud/user/{id}/risk', 'User risk profile', 'Admin L70+', '60/min'],
          ['POST', '/v1/fraud/user/{id}/flag', 'Manually flag user', 'Admin L80+', '10/min'],
          ['POST', '/v1/fraud/user/{id}/unflag', 'Remove manual flag', 'Admin L80+', '10/min'],
          ['GET', '/v1/fraud/rules', 'List fraud rules', 'Admin L80+', '30/min'],
          ['POST', '/v1/fraud/rules', 'Create fraud rule', 'Admin L80+', '10/min'],
          ['GET', '/v1/audit/trail/{entity_type}/{entity_id}', 'Audit trail for entity', 'Admin L70+', '60/min'],
          ['GET', '/v1/audit/user/{id}', 'Full user audit history', 'Admin L70+', '30/min'],
          ['GET', '/v1/audit/export', 'Export audit data (CSV/JSON)', 'Admin L80+', '5/min'],
          ['GET', '/v1/fraud/dashboard', 'Fraud overview dashboard', 'Admin L70+', '30/min'],
        ]} />
      </Expandable>

      <Expandable title="Database Schema" icon={Database}>
        <DocTable headers={['Table', 'Field', 'Type', 'Constraints', 'Description']} rows={[
          ['fraud_scores', 'id', 'UUID', 'PK', 'Score record ID'],
          ['fraud_scores', 'user_id', 'UUID', 'NOT NULL', 'Scored user'],
          ['fraud_scores', 'transaction_id', 'UUID', 'NULLABLE', 'Related transaction'],
          ['fraud_scores', 'risk_score', 'DECIMAL(5,2)', 'NOT NULL', 'Score 0-100'],
          ['fraud_scores', 'risk_level', 'ENUM', 'NOT NULL', 'low|medium|high|critical'],
          ['fraud_scores', 'signals', 'JSONB', 'NOT NULL', 'Contributing risk signals'],
          ['fraud_scores', 'model_version', 'VARCHAR(20)', 'NOT NULL', 'ML model version used'],
          ['fraud_scores', 'action_taken', 'ENUM', 'DEFAULT none', 'none|flag|hold|block'],
          ['fraud_scores', 'created_at', 'TIMESTAMPTZ', 'NOT NULL', 'Scoring timestamp'],
          ['---', '---', '---', '---', '---'],
          ['fraud_alerts', 'id', 'UUID', 'PK', 'Alert identifier'],
          ['fraud_alerts', 'user_id', 'UUID', 'NOT NULL', 'Flagged user'],
          ['fraud_alerts', 'alert_type', 'ENUM', 'NOT NULL', 'velocity|amount|device|geo|pattern'],
          ['fraud_alerts', 'severity', 'ENUM', 'NOT NULL', 'low|medium|high|critical'],
          ['fraud_alerts', 'description', 'TEXT', 'NOT NULL', 'Human-readable description'],
          ['fraud_alerts', 'evidence', 'JSONB', 'NOT NULL', 'Supporting evidence data'],
          ['fraud_alerts', 'status', 'ENUM', 'DEFAULT open', 'open|investigating|resolved|false_positive'],
          ['fraud_alerts', 'resolved_by', 'UUID', 'FK → users.id', 'Admin who resolved'],
          ['fraud_alerts', 'resolved_at', 'TIMESTAMPTZ', 'NULLABLE', 'Resolution timestamp'],
          ['---', '---', '---', '---', '---'],
          ['audit_log', 'id', 'UUID', 'PK', 'Audit entry identifier'],
          ['audit_log', 'actor_id', 'UUID', 'NOT NULL', 'Who performed action'],
          ['audit_log', 'actor_type', 'ENUM', 'NOT NULL', 'user|merchant|admin|system'],
          ['audit_log', 'action', 'VARCHAR(100)', 'NOT NULL', 'Action performed'],
          ['audit_log', 'entity_type', 'VARCHAR(50)', 'NOT NULL', 'Affected entity type'],
          ['audit_log', 'entity_id', 'UUID', 'NOT NULL', 'Affected entity ID'],
          ['audit_log', 'changes', 'JSONB', 'DEFAULT {}', '{before: {...}, after: {...}}'],
          ['audit_log', 'ip_address', 'INET', 'NOT NULL', 'Actor IP address'],
          ['audit_log', 'user_agent', 'TEXT', 'NULLABLE', 'Device/browser info'],
          ['audit_log', 'source_app', 'VARCHAR(50)', 'NOT NULL', 'App that generated action'],
          ['audit_log', 'created_at', 'TIMESTAMPTZ', 'NOT NULL', 'Action timestamp'],
        ]} />
        <CodeBlock title="Partitioning & Indexes" code={`-- audit_log partitioned by month (created_at RANGE)
-- Retention: 7 years for financial audit, 2 years for general
CREATE INDEX idx_audit_entity ON audit_log(entity_type, entity_id, created_at DESC);
CREATE INDEX idx_audit_actor ON audit_log(actor_id, created_at DESC);
CREATE INDEX idx_fraud_scores_user ON fraud_scores(user_id, created_at DESC);
CREATE INDEX idx_fraud_alerts_status ON fraud_alerts(status) WHERE status = 'open';`} />
      </Expandable>

      <Expandable title="Business Logic" icon={Settings}>
        <h4 className="text-white font-semibold mb-2">Real-Time Fraud Scoring</h4>
        <CodeBlock code={`1. Transaction event received from Event Bus or sync API
2. Extract features:
   - Amount, currency, merchant category
   - User's historical avg transaction (30/60/90 day)
   - Transaction velocity (last 1h, 24h, 7d)
   - Device fingerprint match (known device?)
   - IP geolocation vs user's usual location
   - Time of day (unusual hour?)
3. ML Model scores transaction (ensemble: Random Forest + Neural Net)
4. Rule-based checks (post-ML):
   - Amount > AED 5,000 on unverified (KYC < L2)? → flag
   - 10+ transactions in 1 hour? → velocity alert
   - New device + high amount? → step-up auth required
   - IP country mismatch? → flag for review
5. Combined score (0-100):
   - 0-30: Low risk → allow
   - 31-60: Medium risk → allow + log
   - 61-80: High risk → hold funds + alert admin
   - 81-100: Critical → block + freeze + immediate alert
6. Publish fraud.scored event with result`} />

        <h4 className="text-white font-semibold mb-2 mt-4">Velocity Check Rules</h4>
        <DocTable headers={['Rule', 'Threshold', 'Window', 'Action']} rows={[
          ['Transaction count', '>10 transactions', '1 hour', 'Flag + step-up auth'],
          ['Total amount', '>AED 10,000', '24 hours', 'Review if KYC < L2'],
          ['Failed attempts', '>5 failures', '30 minutes', 'Temporary block (15 min)'],
          ['New device + transfer', '>AED 1,000', 'First 24h', 'Hold + verify'],
          ['Cross-border', 'Any amount', 'If IP != usual', 'Step-up auth required'],
          ['Rapid P2P transfers', '>3 unique recipients', '1 hour', 'Flag for laundering'],
        ]} />
      </Expandable>

      <Expandable title="Compliance Reports" icon={FileText}>
        <DocTable headers={['Report', 'Frequency', 'Regulator', 'Content']} rows={[
          ['Suspicious Transaction Report (STR)', 'As needed', 'CBUAE / SAMA', 'Flagged transactions, user info, evidence'],
          ['Currency Transaction Report (CTR)', 'Daily', 'CBUAE', 'Transactions > AED 55,000 / SAR 60,000'],
          ['KYC Compliance Report', 'Monthly', 'CBUAE / SAMA', 'KYC completion rates, rejection reasons'],
          ['Fraud Summary Report', 'Monthly', 'Internal + Regulator', 'Fraud rate, types, losses, resolution time'],
          ['Audit Trail Export', 'On demand', 'Any regulator', 'Full action history for any entity'],
          ['AML Risk Assessment', 'Quarterly', 'CBUAE / SAMA', 'Risk scoring methodology, thresholds, exceptions'],
        ]} />
      </Expandable>

      <Expandable title="Error Codes" icon={AlertTriangle}>
        <DocTable headers={['Code', 'HTTP', 'Message', 'Resolution']} rows={[
          ['FRAUD_001', '403', 'Transaction blocked — critical risk', 'Manual review required'],
          ['FRAUD_002', '402', 'Funds held pending review', 'Admin will review within 24h'],
          ['FRAUD_003', '403', 'Account frozen', 'Contact support with ID verification'],
          ['FRAUD_004', '429', 'Velocity limit exceeded', 'Wait before retrying'],
          ['FRAUD_005', '400', 'Step-up authentication required', 'Complete additional verification'],
          ['FRAUD_006', '403', 'User flagged — restricted operations', 'Admin unflag required'],
          ['FRAUD_007', '500', 'Fraud scoring unavailable', 'Fallback: allow with enhanced logging'],
        ]} />
      </Expandable>
    </div>
  );
}

function GatewaySection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">API Gateway Service</h2>
      <p className="text-slate-400">Single entry point for all API calls across the RTMN ecosystem. Authentication, rate limiting, routing, load balancing, and circuit breaking at scale. Every request passes through here.</p>

      <div className="grid grid-cols-3 gap-3">
        <div className="p-3 rounded-xl border bg-indigo-500/10 border-indigo-500/30 text-center">
          <div className="text-xl font-bold text-indigo-400">10M+</div>
          <div className="text-xs text-slate-400">Req/Sec Peak</div>
        </div>
        <div className="p-3 rounded-xl border bg-blue-500/10 border-blue-500/30 text-center">
          <div className="text-xl font-bold text-blue-400">&lt;15ms</div>
          <div className="text-xs text-slate-400">Gateway Overhead</div>
        </div>
        <div className="p-3 rounded-xl border bg-emerald-500/10 border-emerald-500/30 text-center">
          <div className="text-xl font-bold text-emerald-400">99.999%</div>
          <div className="text-xs text-slate-400">Availability</div>
        </div>
      </div>

      <Expandable title="Gateway Routes" icon={GitBranch} defaultOpen>
        <DocTable headers={['Route Prefix', 'Target Service', 'Auth', 'Rate Limit (default)', 'Version']} rows={[
          ['/v1/auth/*', 'Identity & SSO', 'Varies', '100/min/IP', 'v1'],
          ['/v1/wallet/*', 'Wallet Ledger', 'JWT / Service', '120/min/user', 'v1'],
          ['/v1/rules/*', 'Rule Engine', 'Service / Admin', '10K/min/svc', 'v1'],
          ['/v1/events/*', 'Event Bus', 'Service / Admin', '10K/min/svc', 'v1'],
          ['/v1/analytics/*', 'AIRA', 'Service / Admin', '500/min/svc', 'v1'],
          ['/v1/notify/*', 'Notification Hub', 'Service / Admin', '5K/min/svc', 'v1'],
          ['/v1/fraud/*', 'Fraud & Audit', 'Service / Admin', '10K/min/svc', 'v1'],
          ['/v1/merchant/*', 'BizOne API', 'Merchant JWT', '300/min/merchant', 'v1'],
          ['/v1/admin/*', 'HQ Admin API', 'Admin JWT L70+', '100/min/admin', 'v1'],
          ['/v1/consumer/*', 'Nuqta Consumer API', 'Consumer JWT', '300/min/user', 'v1'],
        ]} />
      </Expandable>

      <Expandable title="Gateway Pipeline" icon={Settings}>
        <CodeBlock title="Request processing pipeline (ordered)" code={`┌─ Incoming Request ─────────────────────────────────────┐
│                                                         │
│  1. TLS Termination (mTLS for service-to-service)      │
│  2. IP Allowlist/Blocklist check                       │
│  3. Request ID generation (X-Request-Id header)        │
│  4. Rate Limiting (token bucket per IP/user/app)       │
│  5. Authentication:                                    │
│     a. Extract JWT from Authorization header           │
│     b. Verify signature (RS256, public key from JWKS)  │
│     c. Check token expiry                              │
│     d. Extract claims (user_id, role, permissions)     │
│     e. Enrich request headers with claims              │
│  6. Authorization (RBAC check for endpoint)            │
│  7. Request validation (size limit: 10MB)              │
│  8. Route to target service (least-connections LB)     │
│  9. Circuit Breaker check (half-open/open/closed)      │
│ 10. Forward request + await response                   │
│ 11. Response transformation (strip internal headers)   │
│ 12. Access logging (async to Elasticsearch)            │
│ 13. Metrics emission (Datadog StatsD)                  │
│                                                         │
└─ Outgoing Response ─────────────────────────────────────┘`} />
      </Expandable>

      <Expandable title="Rate Limiting Configuration" icon={Shield}>
        <DocTable headers={['Tier', 'Req/Sec', 'Burst', 'Daily Limit', 'Cost']} rows={[
          ['Free (Consumer)', '10', '20', '10K', 'Free'],
          ['Starter (Merchant)', '50', '100', '50K', 'Included'],
          ['Growth (Merchant)', '200', '500', '200K', 'Included'],
          ['Enterprise', '1,000', '2,000', 'Unlimited', 'Negotiated'],
          ['Internal Service', '10,000', '20,000', 'Unlimited', 'N/A'],
          ['Admin', '100', '200', '100K', 'N/A'],
        ]} />
        <InfoBox>Rate limits are enforced using Redis-backed token bucket algorithm. Limits applied per: IP, user_id, app_id, and service_id. Response headers include X-RateLimit-Remaining, X-RateLimit-Reset.</InfoBox>
      </Expandable>

      <Expandable title="Circuit Breaker" icon={AlertTriangle}>
        <DocTable headers={['State', 'Condition', 'Behavior', 'Transition']} rows={[
          ['Closed', 'Error rate < 50%', 'Normal request forwarding', '→ Open when error rate ≥ 50% over 10s'],
          ['Open', 'Circuit tripped', 'Return 503 immediately (no forwarding)', '→ Half-Open after 30s timeout'],
          ['Half-Open', 'Testing recovery', 'Allow 3 probe requests through', '→ Closed if probes succeed, Open if fail'],
        ]} />
        <CodeBlock title="Per-service circuit breaker config" code={`{
  "identity": { "threshold": 50, "timeout_sec": 30, "probes": 3 },
  "wallet":   { "threshold": 30, "timeout_sec": 15, "probes": 5 },
  "rules":    { "threshold": 50, "timeout_sec": 30, "probes": 3 },
  "events":   { "threshold": 70, "timeout_sec": 60, "probes": 3 },
  "aira":     { "threshold": 80, "timeout_sec": 120, "probes": 2 },
  "notify":   { "threshold": 70, "timeout_sec": 60, "probes": 3 },
  "fraud":    { "threshold": 30, "timeout_sec": 15, "probes": 5 }
}`} />
      </Expandable>

      <Expandable title="Error Codes" icon={AlertTriangle}>
        <DocTable headers={['Code', 'HTTP', 'Message', 'Resolution']} rows={[
          ['GW_001', '401', 'Missing or invalid Authorization header', 'Include valid JWT token'],
          ['GW_002', '401', 'Token expired', 'Refresh token via /v1/auth/refresh'],
          ['GW_003', '403', 'Insufficient permissions for endpoint', 'Check role and required level'],
          ['GW_004', '429', 'Rate limit exceeded', 'Respect X-RateLimit-Reset header'],
          ['GW_005', '503', 'Service unavailable (circuit open)', 'Retry after Retry-After header'],
          ['GW_006', '504', 'Upstream timeout (30s)', 'Service may be overloaded'],
          ['GW_007', '413', 'Request body too large (>10MB)', 'Reduce payload size'],
          ['GW_008', '404', 'Route not found', 'Check API version and path'],
          ['GW_009', '400', 'Invalid API version', 'Use v1 (current stable)'],
        ]} />
      </Expandable>
    </div>
  );
}

function SdkSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">RTMN Core SDK</h2>
      <p className="text-slate-400">Developer SDK for all apps in the RTMN ecosystem. Wallet, auth, events, analytics — all in one package. Build once, run everywhere. Available for iOS, Android, Web, React Native, and Flutter.</p>

      <div className="grid grid-cols-3 gap-3">
        <div className="p-3 rounded-xl border bg-yellow-500/10 border-yellow-500/30 text-center">
          <div className="text-xl font-bold text-yellow-400">5</div>
          <div className="text-xs text-slate-400">Platforms</div>
        </div>
        <div className="p-3 rounded-xl border bg-blue-500/10 border-blue-500/30 text-center">
          <div className="text-xl font-bold text-blue-400">100+</div>
          <div className="text-xs text-slate-400">Integrations</div>
        </div>
        <div className="p-3 rounded-xl border bg-emerald-500/10 border-emerald-500/30 text-center">
          <div className="text-xl font-bold text-emerald-400">&lt;200KB</div>
          <div className="text-xs text-slate-400">Bundle Size</div>
        </div>
      </div>

      <Expandable title="SDK Modules" icon={Code} defaultOpen>
        <DocTable headers={['Module', 'Methods', 'Description', 'Size']} rows={[
          ['@rtmn/auth', '12', 'Login, register, KYC, sessions, biometric', '45KB'],
          ['@rtmn/wallet', '16', 'Balance, earn, burn, transfer, holds, history', '35KB'],
          ['@rtmn/events', '8', 'Publish, subscribe, track user actions', '20KB'],
          ['@rtmn/analytics', '10', 'Track events, get recommendations, A/B tests', '30KB'],
          ['@rtmn/notify', '6', 'Register push token, preferences, in-app messages', '15KB'],
          ['@rtmn/payments', '10', 'Payment intents, QR codes, subscriptions', '25KB'],
          ['@rtmn/core', '—', 'Base module (HTTP client, config, cache)', '30KB'],
        ]} />
      </Expandable>

      <Expandable title="SDK API Reference" icon={Terminal}>
        <CodeBlock title="Initialization" code={`import { RtmnSDK } from '@rtmn/core';

const sdk = RtmnSDK.init({
  appId: 'nuqta-consumer',
  appSecret: 'sk_live_...',
  environment: 'production',  // 'sandbox' | 'production'
  region: 'ae',               // 'ae' | 'sa' | 'bh'
  enableOffline: true,        // Cache for offline support
  logLevel: 'warn',           // 'debug' | 'info' | 'warn' | 'error'
});`} />

        <CodeBlock title="Authentication" code={`// Register new user
const user = await sdk.auth.register({
  phone: '+971501234567',
  fullName: 'Ahmed Mohammed',
});

// Login with OTP
await sdk.auth.requestOTP({ phone: '+971501234567' });
const session = await sdk.auth.verifyOTP({
  phone: '+971501234567',
  otp: '123456',
});

// Biometric login (subsequent)
const session = await sdk.auth.biometricLogin();

// Get current user
const me = await sdk.auth.me();
// → { id, phone, name, kycLevel, tier, trustScore }`} />

        <CodeBlock title="Wallet Operations" code={`// Get balance
const balance = await sdk.wallet.getBalance();
// → { nuqtaCoins: 1500, promoCoins: 200, held: 0, tier: 'gold' }

// Earn coins (called by service, not directly by consumer)
await sdk.wallet.earn({
  amount: 50,
  coinType: 'nuqta',
  reference: { type: 'purchase', id: 'order-uuid' },
  idempotencyKey: 'earn-order-uuid',
});

// Redeem coins
const redemption = await sdk.wallet.redeem({
  amount: 100,
  merchantId: 'merchant-uuid',
  idempotencyKey: 'redeem-uuid',
});

// Transaction history
const txns = await sdk.wallet.getTransactions({
  limit: 20,
  offset: 0,
  coinType: 'nuqta',  // optional filter
});`} />

        <CodeBlock title="Analytics & Events" code={`// Track custom event
sdk.analytics.track('product_viewed', {
  productId: 'prod-123',
  category: 'electronics',
  price: 299.99,
});

// Get recommendations
const recs = await sdk.analytics.getRecommendations({
  type: 'products',
  limit: 10,
});

// A/B test variant
const variant = sdk.analytics.getVariant('checkout_flow_v2');
// → { name: 'variant_b', config: { showTimer: true } }`} />
      </Expandable>

      <Expandable title="Platform Support" icon={Cpu}>
        <DocTable headers={['Platform', 'Package', 'Min Version', 'Install', 'Size']} rows={[
          ['iOS (Swift)', 'RtmnSDK-iOS', 'iOS 14+', 'CocoaPods / SPM', '1.2MB'],
          ['Android (Kotlin)', 'rtmn-sdk-android', 'API 24+', 'Maven Central', '900KB'],
          ['Web (TypeScript)', '@rtmn/sdk', 'ES2020+', 'npm / yarn', '180KB'],
          ['React Native', '@rtmn/sdk-react-native', 'RN 0.72+', 'npm / yarn', '200KB'],
          ['Flutter (Dart)', 'rtmn_sdk', 'Flutter 3.10+', 'pub.dev', '150KB'],
        ]} />
      </Expandable>

      <Expandable title="Offline Support" icon={HardDrive}>
        <CodeBlock code={`Offline Strategy:
1. SDK caches last-known balance in local storage
2. Actions queued in IndexedDB / SQLite (ordered queue)
3. When online:
   a. Sync queue replays in order
   b. Conflicts resolved by server timestamp
   c. Balance refreshed from server
4. Read operations use cache with TTL:
   - Balance: 5 min cache
   - Transactions: 15 min cache
   - Recommendations: 1 hour cache
   - User profile: 30 min cache
5. Write operations always queue and sync
6. SDK emits 'online'/'offline' events for UI updates`} />
      </Expandable>

      <Expandable title="Error Handling" icon={AlertTriangle}>
        <CodeBlock title="SDK Error Structure" code={`class RtmnError extends Error {
  code: string;      // 'WALLET_001', 'AUTH_003', etc.
  httpStatus: number; // 400, 401, 403, 429, 500, etc.
  message: string;   // Human-readable message
  retryable: boolean; // Can this be retried?
  retryAfter?: number; // Seconds to wait before retry
}

// Usage
try {
  await sdk.wallet.earn({ ... });
} catch (error) {
  if (error instanceof RtmnError) {
    if (error.retryable) {
      // Auto-retry after error.retryAfter seconds
    } else {
      // Show error.message to user
    }
  }
}`} />
      </Expandable>
    </div>
  );
}
function MatrixSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">App Integration Matrix</h2>
      <p className="text-slate-400">How every RTMN app connects to each Rabtul core service. 16 products across 9 services — the complete dependency and integration map.</p>

      <InfoBox>Every app MUST integrate with Identity (SSO) and API Gateway. Wallet, Events, and Analytics are required for all transactional apps. Notification Hub and Fraud are required for all user-facing apps.</InfoBox>

      <Expandable title="16 Apps × 9 Services Matrix" icon={Network} defaultOpen>
        <DocTable headers={['App', 'Identity', 'Wallet', 'Rules', 'Events', 'AIRA', 'Notify', 'Fraud', 'Gateway', 'SDK']} rows={[
          ['Nuqta (Consumer)', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '✅'],
          ['BizOne (Merchant)', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '✅'],
          ['HQ Admin', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '—'],
          ['NuqtaPay', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '✅'],
          ['Wasil (Delivery)', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '✅'],
          ['Rakab (Ride)', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '✅'],
          ['Safar (Travel)', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '✅'],
          ['Adzy (Ads)', '✅', '✅', '✅', '✅', '✅', '✅', '—', '✅', '✅'],
          ['Eventora', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '✅'],
          ['Inventora', '✅', '—', '✅', '✅', '✅', '✅', '—', '✅', '✅'],
          ['NextaBizz', '✅', '✅', '✅', '✅', '✅', '✅', '—', '✅', '✅'],
          ['Ajer (Rent)', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '✅'],
          ['Rabtul Tech', '✅', '—', '—', '✅', '✅', '—', '—', '✅', '—'],
          ['Freelance Hub', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '✅'],
          ['Investor Portal', '✅', '—', '—', '✅', '✅', '✅', '—', '✅', '—'],
          ['Merchant Academy', '✅', '—', '—', '✅', '✅', '✅', '—', '✅', '✅'],
        ]} />
      </Expandable>

      <Expandable title="Integration Depth Per App" icon={Layers}>
        <DocTable headers={['App', 'SDK Version', 'Modules Used', 'Daily API Calls', 'Primary Use Case']} rows={[
          ['Nuqta', 'Full SDK', 'auth, wallet, analytics, notify, payments', '5M+', 'Consumer earn/burn coins, discover offers'],
          ['BizOne', 'Full SDK', 'auth, wallet, analytics, notify, events', '3M+', 'Merchant POS, inventory, settlements'],
          ['HQ Admin', 'Direct API', 'All services via admin endpoints', '500K', 'Platform governance, coin minting, rules'],
          ['NuqtaPay', 'Full SDK', 'auth, wallet, payments, fraud', '2M+', 'Payment processing, QR, P2P transfers'],
          ['Wasil', 'Full SDK', 'auth, wallet, events, notify', '1M+', 'Delivery tracking, driver wallet, orders'],
          ['Rakab', 'Full SDK', 'auth, wallet, events, notify', '800K', 'Ride payments, driver earnings, surge pricing'],
          ['Safar', 'Full SDK', 'auth, wallet, analytics, notify', '500K', 'Travel bookings, coin redemption'],
          ['Adzy', 'Lite SDK', 'auth, wallet, analytics', '300K', 'Ad spend via coins, campaign tracking'],
          ['Eventora', 'Full SDK', 'auth, wallet, events, notify', '200K', 'Event tickets, coin payments'],
          ['Ajer', 'Full SDK', 'auth, wallet, fraud, notify', '400K', 'Rent payments, deposit management'],
        ]} />
      </Expandable>

      <Expandable title="Service-Level Integration Patterns" icon={Code}>
        <h4 className="text-white font-semibold mb-2">Pattern 1: Sync Request (Direct API Call)</h4>
        <CodeBlock code={`Used for: Auth login, balance check, fraud scoring
Flow: App → Gateway → Service → Response
Latency: < 200ms p99
Example: sdk.wallet.getBalance() → Gateway → Wallet Ledger → balance`} />

        <h4 className="text-white font-semibold mb-2 mt-4">Pattern 2: Async Event (Fire & Forget)</h4>
        <CodeBlock code={`Used for: Analytics tracking, audit logging, notifications
Flow: App → Gateway → Event Bus → Consumers process async
Latency: < 50ms (acknowledgment), processing async
Example: sdk.analytics.track('purchase') → Event Bus → AIRA + Notify`} />

        <h4 className="text-white font-semibold mb-2 mt-4">Pattern 3: Saga (Multi-Service Transaction)</h4>
        <CodeBlock code={`Used for: Coin earn + notification + analytics (atomic)
Flow: App → Gateway → Orchestrator → Multiple services
Rollback: If any step fails, compensating actions triggered
Example: POS checkout → Wallet earn + Notify user + Update analytics
         If wallet fails → no notification sent, analytics rolled back`} />
      </Expandable>
    </div>
  );
}

function InfraSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Infrastructure & Deployment</h2>
      <p className="text-slate-400">Multi-region cloud infrastructure, CI/CD pipeline, container orchestration, and disaster recovery. Designed for 99.99% uptime in the GCC region.</p>

      <Expandable title="Multi-Region Architecture" icon={Globe} defaultOpen>
        <CodeBlock code={`Primary Region: AWS me-south-1 (Bahrain)
├── EKS Cluster (24 nodes, auto-scale to 96)
├── RDS PostgreSQL (Multi-AZ, 3 replicas)
├── ElastiCache Redis (6-node cluster)
├── MSK Kafka (6 brokers, 3 AZ)
├── S3 (media, exports, backups)
└── CloudFront (CDN, 6 edge locations)

Secondary Region: AWS eu-west-1 (Ireland)
├── EKS Cluster (12 nodes, auto-scale to 48)
├── RDS PostgreSQL (read replica, async)
├── ElastiCache Redis (3-node cluster)
└── S3 (cross-region replication)

DR Region: GCP me-central-2 (Dammam, KSA)
├── GKE Cluster (cold standby, 6 nodes)
├── Cloud SQL (async replica)
└── GCS (backup replication)

Traffic Routing: Route53 latency-based → Primary
Failover: Automatic if primary health check fails (60s)`} />
      </Expandable>

      <Expandable title="Kubernetes Architecture" icon={Server}>
        <DocTable headers={['Namespace', 'Services', 'Replicas', 'CPU Request', 'Memory Request']} rows={[
          ['rabtul-identity', 'identity-api, identity-worker', '6 / 3', '2 vCPU', '4 GB'],
          ['rabtul-wallet', 'wallet-api, wallet-worker, wallet-cron', '8 / 4 / 1', '4 vCPU', '8 GB'],
          ['rabtul-rules', 'rules-api, rules-cache-sync', '4 / 2', '2 vCPU', '4 GB'],
          ['rabtul-events', 'events-api, events-consumer', '4 / 12', '2 vCPU', '8 GB'],
          ['rabtul-aira', 'aira-api, aira-ml-serve, aira-trainer', '4 / 6 / 2', '8 vCPU', '32 GB'],
          ['rabtul-notify', 'notify-api, notify-worker', '4 / 8', '2 vCPU', '4 GB'],
          ['rabtul-fraud', 'fraud-api, fraud-scorer, fraud-worker', '4 / 4 / 2', '4 vCPU', '8 GB'],
          ['rabtul-gateway', 'kong-proxy, kong-admin', '8 / 2', '4 vCPU', '8 GB'],
          ['rabtul-infra', 'prometheus, grafana, jaeger', '2 / 1 / 2', '4 vCPU', '16 GB'],
        ]} />
      </Expandable>

      <Expandable title="CI/CD Pipeline" icon={GitBranch}>
        <CodeBlock title="GitOps deployment flow" code={`Developer Workflow:
1. Feature branch → PR → Code review
2. PR triggers:
   ├── Lint (golangci-lint)
   ├── Unit tests (go test -race)
   ├── Integration tests (testcontainers)
   ├── Security scan (Snyk, Trivy)
   └── Build Docker image → push to ECR
3. PR merged to main → ArgoCD detects change
4. ArgoCD deployment strategy:
   ├── Canary: 5% traffic → 25% → 50% → 100%
   ├── Health checks at each stage (5 min)
   ├── Auto-rollback if error rate > 1%
   └── Full deploy: ~15 min end-to-end

Hotfix Workflow:
1. Hotfix branch from main
2. Expedited review (1 reviewer)
3. Deploy directly to canary (5%)
4. If healthy (5 min) → full rollout
5. Total hotfix time: < 30 min`} />
      </Expandable>

      <Expandable title="Database Strategy" icon={Database}>
        <DocTable headers={['Database', 'Engine', 'Size', 'Backup', 'Replication']} rows={[
          ['identity_db', 'PostgreSQL 16', '100 GB', 'Every 6h + WAL', 'Multi-AZ + read replica'],
          ['wallet_db', 'PostgreSQL 16', '500 GB', 'Every 1h + WAL', 'Multi-AZ + 2 read replicas'],
          ['rules_db', 'PostgreSQL 16', '50 GB', 'Every 6h + WAL', 'Multi-AZ + read replica'],
          ['events_db', 'PostgreSQL 16', '1 TB', 'Every 6h + WAL', 'Multi-AZ (write-heavy)'],
          ['analytics_db', 'PostgreSQL 16 + TimescaleDB', '2 TB', 'Daily + WAL', 'Multi-AZ + read replica'],
          ['audit_db', 'PostgreSQL 16', '5 TB', 'Every 1h + WAL', 'Multi-AZ + cold archive'],
          ['cache_cluster', 'Redis 7 Cluster', '64 GB', 'RDB every 1h', '6-node (3 primary, 3 replica)'],
          ['kafka_cluster', 'MSK Kafka 3.5', '10 TB', 'Topic replication=3', '6 brokers, 3 AZ'],
          ['search_cluster', 'Elasticsearch 8', '500 GB', 'Daily snapshot', '6-node (3 data, 3 coord)'],
        ]} />
      </Expandable>

      <Expandable title="Disaster Recovery" icon={Shield}>
        <DocTable headers={['Scenario', 'RTO', 'RPO', 'Recovery Action']} rows={[
          ['Single pod failure', '<30s', '0', 'Kubernetes auto-restart'],
          ['Single node failure', '<2 min', '0', 'Kubernetes reschedule + new node'],
          ['AZ failure', '<5 min', '0', 'Multi-AZ auto-failover'],
          ['Primary region failure', '<15 min', '<1 min', 'Route53 failover to secondary'],
          ['Database corruption', '<1 hour', '<1 hour', 'Restore from latest backup + WAL replay'],
          ['Full cloud provider failure', '<4 hours', '<5 min', 'DR activation on GCP'],
          ['Ransomware/Security breach', '<2 hours', '<1 hour', 'Immutable backups + clean redeploy'],
        ]} />
      </Expandable>
    </div>
  );
}

function SecuritySection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Security Standards</h2>
      <p className="text-slate-400">Enterprise-grade security for financial-grade infrastructure. PCI-DSS Level 1, CBUAE/SAMA compliance, mTLS, encryption at rest and in transit, comprehensive access control.</p>

      <Expandable title="Compliance Framework" icon={Shield} defaultOpen>
        <DocTable headers={['Standard', 'Status', 'Scope', 'Audit Frequency']} rows={[
          ['PCI-DSS Level 1', 'Required', 'NuqtaPay, Wallet Ledger, all payment flows', 'Annual (QSA audit)'],
          ['CBUAE Regulations', 'Required', 'UAE operations, AED transactions, KYC/AML', 'Quarterly reporting'],
          ['SAMA Regulations', 'Required', 'KSA operations, SAR transactions', 'Quarterly reporting'],
          ['GDPR', 'Required', 'EU data subjects (if any), data portability', 'Annual review'],
          ['UAE Data Protection Law', 'Required', 'All UAE user data', 'Annual review'],
          ['SOC 2 Type II', 'Planned', 'All infrastructure and services', 'Annual audit'],
          ['ISO 27001', 'Planned', 'Information security management', 'Annual audit'],
        ]} />
      </Expandable>

      <Expandable title="Authentication & Authorization" icon={Lock}>
        <DocTable headers={['Layer', 'Mechanism', 'Algorithm', 'Rotation']} rows={[
          ['User → App', 'JWT (access + refresh)', 'RS256 (2048-bit)', 'Access: 15 min, Refresh: 30 days'],
          ['App → Gateway', 'JWT Bearer token', 'RS256 (2048-bit)', 'Per-session'],
          ['Service → Service', 'mTLS + Service Token', 'TLS 1.3 + ECDSA P-256', 'Certificates: 90 days'],
          ['Admin → HQ', 'JWT + MFA (TOTP)', 'RS256 + SHA-256', 'Access: 15 min, MFA: 30s'],
          ['Gateway → Service', 'mTLS (mutual TLS)', 'TLS 1.3', 'Auto-rotated by cert-manager'],
        ]} />

        <h4 className="text-white font-semibold mb-2 mt-4">RBAC — Role-Based Access Control</h4>
        <DocTable headers={['Level', 'Role', 'Permissions', 'MFA Required']} rows={[
          ['L100', 'Super Admin (Founder)', 'Full access, coin minting, emergency controls, vault', 'Yes + Hardware Key'],
          ['L80', 'Admin', 'Merchant mgmt, settlements, campaigns, reports, rules', 'Yes (TOTP)'],
          ['L70', 'Operator', 'Content moderation, support escalation, routine ops', 'Yes (TOTP)'],
          ['L60', 'Support', 'Customer lookup, tickets, order status (read-mostly)', 'Yes (TOTP)'],
          ['L50', 'Merchant Owner', 'Full BizOne access for own stores', 'Optional'],
          ['L40', 'Merchant Manager', 'Store operations, staff, reports (no financials)', 'Optional'],
          ['L30', 'Merchant Staff', 'POS, orders, basic inventory (limited)', 'No'],
          ['L10', 'Consumer', 'Own wallet, orders, profile', 'No'],
        ]} />
      </Expandable>

      <Expandable title="Encryption Standards" icon={Lock}>
        <DocTable headers={['Data Type', 'At Rest', 'In Transit', 'Key Management']} rows={[
          ['Database (all)', 'AES-256 (TDE)', 'TLS 1.3', 'AWS KMS (auto-rotate 365d)'],
          ['PII fields', 'AES-256-GCM (field-level)', 'TLS 1.3', 'Dedicated KMS key'],
          ['KYC documents', 'AES-256-GCM + envelope', 'TLS 1.3 + mTLS', 'Separate KMS key, audit logged'],
          ['Payment card data', 'AES-256 (PCI tokenization)', 'TLS 1.3', 'HSM-backed keys'],
          ['Kafka messages', 'AES-256 (SSE)', 'TLS 1.2+', 'MSK managed encryption'],
          ['S3 objects', 'AES-256 (SSE-KMS)', 'TLS 1.3', 'Per-bucket KMS key'],
          ['Redis cache', 'AES-256 (at-rest)', 'TLS 1.2+', 'ElastiCache managed'],
          ['Backups', 'AES-256 (SSE-KMS)', 'TLS 1.3 for transfer', 'Immutable, cross-region copy'],
        ]} />
      </Expandable>

      <Expandable title="Network Security" icon={Globe}>
        <CodeBlock code={`Network Architecture:
├── Public Subnets (ALB / CloudFront only)
│   └── WAF (AWS WAF): SQL injection, XSS, rate limiting
├── Private Subnets (EKS nodes, services)
│   ├── Security Groups: Service-specific, least-privilege
│   ├── Network Policies: Namespace isolation (Calico)
│   └── Service Mesh: Istio (mTLS between all pods)
├── Data Subnets (RDS, Redis, Kafka)
│   ├── No public access
│   ├── VPC endpoints only
│   └── Security Groups: Only from service subnets
└── Management Subnet (bastion, CI/CD)
    ├── MFA-required SSH via Session Manager
    └── Audit logged (CloudTrail)

DDoS Protection:
├── AWS Shield Advanced (L3/L4)
├── CloudFront (L7 geo-blocking, rate limiting)
├── WAF rules (automated threat response)
└── Kong rate limiting (application layer)`} />
      </Expandable>

      <Expandable title="KYC/AML Requirements" icon={Fingerprint}>
        <DocTable headers={['Requirement', 'UAE (CBUAE)', 'KSA (SAMA)', 'Bahrain (CBB)']} rows={[
          ['Customer Identification', 'Emirates ID mandatory', 'National ID mandatory', 'CPR mandatory'],
          ['Enhanced Due Diligence', 'Transactions > AED 55K', 'Transactions > SAR 60K', 'Transactions > BHD 8K'],
          ['Ongoing Monitoring', 'Continuous', 'Continuous', 'Continuous'],
          ['STR Filing', 'goAML portal', 'SAFIRS portal', 'CBB portal'],
          ['Record Retention', '5 years minimum', '10 years minimum', '5 years minimum'],
          ['PEP Screening', 'Required', 'Required', 'Required'],
          ['Sanctions Screening', 'UN + UAE lists', 'UN + SAMA lists', 'UN + CBB lists'],
        ]} />
      </Expandable>
    </div>
  );
}

function MonitoringSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-2">Monitoring & SLAs</h2>
      <p className="text-slate-400">Full-stack observability with Datadog, PagerDuty, and custom dashboards. Per-service SLAs, incident response procedures, and performance targets.</p>

      <Expandable title="Service-Level Agreements (SLAs)" icon={BarChart3} defaultOpen>
        <DocTable headers={['Service', 'Availability', 'Latency p50', 'Latency p99', 'Error Budget/Month']} rows={[
          ['API Gateway', '99.999%', '<5ms', '<15ms', '26s downtime'],
          ['Identity & SSO', '99.99%', '<20ms', '<50ms', '4.3 min downtime'],
          ['Wallet Ledger', '99.99%', '<30ms', '<100ms', '4.3 min downtime'],
          ['Rule Engine', '99.99%', '<3ms', '<10ms', '4.3 min downtime'],
          ['Event Bus', '99.95%', '<10ms', '<50ms', '21.6 min downtime'],
          ['AIRA (AI/ML)', '99.9%', '<100ms', '<200ms', '43.2 min downtime'],
          ['Notification Hub', '99.9%', '<50ms', '<200ms', '43.2 min downtime'],
          ['Fraud & Audit', '99.99%', '<15ms', '<50ms', '4.3 min downtime'],
        ]} />
      </Expandable>

      <Expandable title="Key Metrics (Golden Signals)" icon={Activity}>
        <DocTable headers={['Signal', 'Metric', 'Alert Threshold', 'Dashboard']} rows={[
          ['Latency', 'p50, p95, p99 response time', 'p99 > 2x SLA for 5 min', 'Per-service latency graph'],
          ['Traffic', 'Requests per second (RPS)', 'RPS > 80% capacity for 10 min', 'Real-time traffic heatmap'],
          ['Errors', 'Error rate (5xx / total)', 'Error rate > 1% for 3 min', 'Error rate per service'],
          ['Saturation', 'CPU, memory, disk, connections', 'CPU > 80% or mem > 85% for 5 min', 'Resource utilization'],
        ]} />

        <h4 className="text-white font-semibold mb-2 mt-4">Business Metrics</h4>
        <DocTable headers={['Metric', 'Frequency', 'Alert Condition', 'Owner']} rows={[
          ['Coins earned/burned per hour', 'Real-time', 'Deviation > 3σ from mean', 'Product'],
          ['Transaction success rate', 'Real-time', 'Below 99.5%', 'Engineering'],
          ['KYC completion rate', 'Daily', 'Below 80%', 'Product'],
          ['Notification delivery rate', 'Hourly', 'Below 99%', 'Engineering'],
          ['Fraud detection rate', 'Real-time', 'ML model drift > 5%', 'Data Science'],
          ['Active users (DAU/MAU)', 'Hourly', 'Drop > 20% vs yesterday', 'Product'],
          ['API error rate by app', 'Real-time', 'Any app > 2%', 'Engineering'],
        ]} />
      </Expandable>

      <Expandable title="Incident Response" icon={AlertTriangle}>
        <DocTable headers={['Severity', 'Definition', 'Response Time', 'Escalation', 'Examples']} rows={[
          ['SEV-1 (Critical)', 'Platform down, data loss risk', '<5 min', 'CTO + all on-call', 'Full outage, security breach, data corruption'],
          ['SEV-2 (High)', 'Major feature degraded', '<15 min', 'Engineering lead + on-call', 'Wallet unavailable, auth failing, payment failures'],
          ['SEV-3 (Medium)', 'Minor feature issue', '<1 hour', 'On-call engineer', 'Slow analytics, notification delays, UI bugs'],
          ['SEV-4 (Low)', 'Cosmetic or informational', '<4 hours', 'Assigned engineer', 'Dashboard inconsistency, log warnings, minor typos'],
        ]} />

        <CodeBlock title="Incident Response Flow" code={`1. Alert fires (Datadog → PagerDuty)
2. On-call engineer acknowledged (SLA: 5 min for SEV-1)
3. Incident channel created (Slack #incident-YYYY-MM-DD)
4. Initial assessment:
   a. Identify affected services
   b. Check recent deployments (canary?)
   c. Check external dependencies
5. Mitigation:
   a. Rollback if deploy-related (ArgoCD)
   b. Scale up if load-related (HPA)
   c. Failover if region-related (Route53)
6. Communication:
   a. Internal: Slack updates every 15 min
   b. External: Status page update (statuspage.io)
7. Resolution confirmed:
   a. Monitoring shows recovery
   b. All SLA metrics within bounds
8. Post-incident:
   a. Blameless post-mortem within 48 hours
   b. Action items created and assigned
   c. SLA impact calculated`} />
      </Expandable>

      <Expandable title="Alerting Rules" icon={Bell}>
        <DocTable headers={['Alert Name', 'Condition', 'Severity', 'Channel', 'Auto-Action']} rows={[
          ['High Error Rate', '5xx > 1% for 3 min', 'SEV-2', 'PagerDuty + Slack', 'None'],
          ['Latency Spike', 'p99 > 2x SLA for 5 min', 'SEV-3', 'Slack', 'None'],
          ['Database Connection Pool', 'Connections > 80%', 'SEV-2', 'PagerDuty', 'Scale read replicas'],
          ['Kafka Consumer Lag', 'Lag > 10K messages for 5 min', 'SEV-3', 'Slack', 'Scale consumers'],
          ['Disk Usage', 'Disk > 85%', 'SEV-3', 'Slack', 'Expand volume'],
          ['Certificate Expiry', 'Cert expires in < 7 days', 'SEV-2', 'Slack + Email', 'cert-manager renew'],
          ['Fraud Spike', 'Fraud rate > 3x normal', 'SEV-1', 'PagerDuty + Slack', 'Auto-tighten rules'],
          ['Wallet Imbalance', 'Reconciliation mismatch', 'SEV-1', 'PagerDuty + Slack + CTO', 'Pause writes'],
          ['DDoS Detected', 'Traffic > 10x normal', 'SEV-1', 'PagerDuty + Slack', 'WAF auto-block'],
        ]} />
      </Expandable>

      <Expandable title="Datadog Dashboards" icon={Monitor}>
        <DocTable headers={['Dashboard', 'Audience', 'Key Widgets', 'Refresh Rate']} rows={[
          ['Platform Overview', 'CTO, Engineering', 'RPS, error rate, latency, active users', '10s'],
          ['Wallet Health', 'Engineering, Finance', 'Txn volume, balance totals, reconciliation', '30s'],
          ['Fraud Monitor', 'Security, Ops', 'Risk scores, alerts, blocked transactions', '10s'],
          ['API Gateway', 'Engineering', 'Traffic per route, rate limits, circuit states', '10s'],
          ['Event Bus', 'Engineering', 'Throughput, consumer lag, DLQ size', '30s'],
          ['Infrastructure', 'DevOps', 'CPU, memory, disk, pods, nodes', '30s'],
          ['Business KPIs', 'Product, Exec', 'DAU, coins flow, GMV, conversion', '5 min'],
          ['Cost Tracker', 'Finance, DevOps', 'AWS costs per service, trend, forecast', '1 hour'],
        ]} />
      </Expandable>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// Section Component Map
// ════════════════════════════════════════════════════════════════════
const sectionComponents: Record<string, React.FC> = {
  overview: OverviewSection,
  identity: IdentitySection,
  wallet: WalletSection,
  rules: RulesSection,
  events: EventsSection,
  analytics: AnalyticsSection,
  notifications: NotificationsSection,
  fraud: FraudSection,
  gateway: GatewaySection,
  sdk: SdkSection,
  matrix: MatrixSection,
  infra: InfraSection,
  security: SecuritySection,
  monitoring: MonitoringSection,
};

// ════════════════════════════════════════════════════════════════════
// MAIN PAGE COMPONENT
// ════════════════════════════════════════════════════════════════════
export default function RabtulCorePage() {
  const [activeSection, setActiveSection] = useState('overview');
  const ActiveComponent = sectionComponents[activeSection] || OverviewSection;

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900/40 via-[#0a1628] to-indigo-900/40 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-1 mb-4">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
              <Database className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">Rabtul Core — Technical Specification</h1>
              <p className="text-slate-400 text-sm">9 core services · Complete API reference · Database schemas · Event contracts</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge text="9 Core Services" color="bg-purple-500/20 text-purple-400" />
            <Badge text="16+ Apps Connected" color="bg-blue-500/20 text-blue-400" />
            <Badge text="99.99% Uptime SLA" color="bg-emerald-500/20 text-emerald-400" />
            <Badge text="Developer Reference" color="bg-amber-500/20 text-amber-400" />
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <aside className="lg:w-64 shrink-0">
          <div className="lg:sticky lg:top-4 overflow-x-auto lg:overflow-x-visible -mx-4 px-4 lg:mx-0 lg:px-0">
            <nav className="flex lg:flex-col gap-1 min-w-max lg:min-w-0">
              {sections.map((s) => {
                const Icon = s.icon;
                const isActive = activeSection === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveSection(s.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                      isActive
                        ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden lg:inline">{s.label}</span>
                    <span className="lg:hidden">{s.label.split(' ')[0]}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0">
          <div className="bg-slate-800/20 border border-slate-700/30 rounded-2xl p-6">
            <ActiveComponent />
          </div>
        </main>
      </div>

      <GlobalFooter />
    </div>
  );
}
