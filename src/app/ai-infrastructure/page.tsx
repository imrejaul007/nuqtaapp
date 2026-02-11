'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Brain, Server, Cloud, Lock, Database, Layers, BarChart3, Zap,
  Shield, Eye, Target, Globe, ArrowRight, CheckCircle, Clock,
  Cpu, Network, GitBranch, Code, Terminal, Key, Fingerprint,
  AlertTriangle, TrendingUp, Activity, Users, Package, Settings,
  Bell, FileText, RefreshCw, Gauge, Timer, Lightbulb
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// AI & Infrastructure Products
const infrastructureProducts = [
  {
    id: 'aira',
    name: 'AIRA',
    arabic: 'أيرا',
    fullName: 'AI Recommendation & Analytics',
    tagline: 'The Brain of the Ecosystem',
    description: 'Advanced AI engine powering personalized recommendations, predictive analytics, and intelligent automation across all Nuqta products.',
    icon: Brain,
    status: 'Q3 2027',
    color: 'from-purple-500 to-pink-600',
    textColor: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    capabilities: [
      {
        name: 'Personalized Recommendations',
        description: 'ML-powered suggestions for products, merchants, and offers based on user behavior',
        metrics: ['95% relevance score', '40% higher engagement', 'Real-time adaptation'],
        icon: Target,
      },
      {
        name: 'Predictive Analytics',
        description: 'Forecast user actions, churn risk, spend patterns, and lifetime value',
        metrics: ['85% prediction accuracy', '30% churn reduction', 'Early warning system'],
        icon: TrendingUp,
      },
      {
        name: 'Fraud Detection',
        description: 'Real-time transaction monitoring with ML-based anomaly detection',
        metrics: ['<0.01% false positives', 'Sub-second detection', '$10M+ fraud prevented'],
        icon: Shield,
      },
      {
        name: 'Dynamic Pricing',
        description: 'Optimize pricing, promotions, and rewards based on demand and user segments',
        metrics: ['15% revenue lift', 'Automated campaigns', 'A/B testing engine'],
        icon: BarChart3,
      },
      {
        name: 'Natural Language Processing',
        description: 'Power chatbots, search, and content understanding across the ecosystem',
        metrics: ['Arabic + English', '98% intent accuracy', 'Multi-dialect support'],
        icon: Brain,
      },
      {
        name: 'Computer Vision',
        description: 'Document verification, product recognition, and visual search',
        metrics: ['99.5% OCR accuracy', 'KYC automation', 'Visual search'],
        icon: Eye,
      },
    ],
    techStack: ['TensorFlow', 'PyTorch', 'Apache Spark', 'Kubernetes', 'Redis', 'Elasticsearch'],
  },
  {
    id: 'rabtul',
    name: 'Rabtul',
    arabic: 'ربطل',
    fullName: 'API & Integration Layer',
    tagline: 'Connect Everything',
    description: 'Unified API gateway and integration platform connecting all Nuqta products, external partners, and third-party services.',
    icon: Layers,
    status: 'Q2 2027',
    color: 'from-blue-500 to-cyan-600',
    textColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    capabilities: [
      {
        name: 'Unified API Gateway',
        description: 'Single entry point for all ecosystem APIs with rate limiting, authentication, and monitoring',
        metrics: ['<50ms latency', '99.99% uptime', 'Auto-scaling'],
        icon: Network,
      },
      {
        name: 'Event Streaming',
        description: 'Real-time event bus connecting all products - transactions, user actions, notifications',
        metrics: ['1M+ events/sec', 'Exactly-once delivery', 'Event replay'],
        icon: Activity,
      },
      {
        name: 'Partner Integrations',
        description: 'Pre-built connectors for banks, payment processors, delivery partners, and merchants',
        metrics: ['50+ integrations', 'Webhook support', 'SDK libraries'],
        icon: GitBranch,
      },
      {
        name: 'Developer Portal',
        description: 'Self-service portal for external developers with documentation, sandbox, and API keys',
        metrics: ['Interactive docs', 'Code samples', 'Testing tools'],
        icon: Code,
      },
      {
        name: 'Data Synchronization',
        description: 'Keep data consistent across all products and external systems',
        metrics: ['Real-time sync', 'Conflict resolution', 'Audit trails'],
        icon: RefreshCw,
      },
      {
        name: 'Workflow Automation',
        description: 'Build automated workflows connecting multiple products and actions',
        metrics: ['Visual builder', 'Trigger-based', 'Error handling'],
        icon: Settings,
      },
    ],
    techStack: ['Kong Gateway', 'Apache Kafka', 'GraphQL', 'gRPC', 'OpenAPI', 'Node.js'],
  },
  {
    id: 'datapulse',
    name: 'DataPulse',
    arabic: 'داتا بالس',
    fullName: 'Analytics & Business Intelligence',
    tagline: 'Insights That Drive Growth',
    description: 'Comprehensive analytics platform providing real-time dashboards, custom reports, and business intelligence for all stakeholders.',
    icon: BarChart3,
    status: 'Q3 2027',
    color: 'from-emerald-500 to-green-600',
    textColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    capabilities: [
      {
        name: 'Real-time Dashboards',
        description: 'Live metrics for operations, finance, marketing, and product teams',
        metrics: ['100+ metrics', 'Custom widgets', 'Role-based views'],
        icon: Gauge,
      },
      {
        name: 'Custom Reports',
        description: 'Build and schedule reports with drag-and-drop interface',
        metrics: ['Export formats', 'Email delivery', 'Embedding'],
        icon: FileText,
      },
      {
        name: 'Cohort Analysis',
        description: 'Understand user behavior over time - retention, engagement, monetization',
        metrics: ['Behavioral cohorts', 'Funnel analysis', 'Segmentation'],
        icon: Users,
      },
      {
        name: 'Revenue Analytics',
        description: 'Track GMV, take rates, unit economics across all products',
        metrics: ['P&L by product', 'Margin analysis', 'Forecasting'],
        icon: TrendingUp,
      },
      {
        name: 'Alerting System',
        description: 'Proactive alerts for anomalies, thresholds, and business events',
        metrics: ['Multi-channel', 'Escalation rules', 'Smart grouping'],
        icon: Bell,
      },
      {
        name: 'Data Warehouse',
        description: 'Centralized data repository with historical data and advanced querying',
        metrics: ['Petabyte scale', 'SQL interface', 'Data governance'],
        icon: Database,
      },
    ],
    techStack: ['Snowflake', 'Apache Airflow', 'dbt', 'Metabase', 'Looker', 'Python'],
  },
  {
    id: 'cloudsync',
    name: 'CloudSync',
    arabic: 'كلاود سينك',
    fullName: 'Multi-Region Cloud Infrastructure',
    tagline: 'Built for Scale',
    description: 'Robust, scalable cloud infrastructure spanning multiple GCC regions with high availability and disaster recovery.',
    icon: Cloud,
    status: 'Q2 2027',
    color: 'from-cyan-500 to-blue-600',
    textColor: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    capabilities: [
      {
        name: 'Multi-Region Deployment',
        description: 'Primary and failover regions across UAE, Saudi Arabia, and Europe',
        metrics: ['3 active regions', 'Auto-failover', 'Data residency'],
        icon: Globe,
      },
      {
        name: 'Auto-Scaling',
        description: 'Automatically scale resources based on demand - handle 10x traffic spikes',
        metrics: ['0-1000 pods/min', 'Cost optimization', 'Predictive scaling'],
        icon: Zap,
      },
      {
        name: 'Container Orchestration',
        description: 'Kubernetes-based platform for all microservices with GitOps deployment',
        metrics: ['500+ services', 'Zero-downtime', 'Canary deploys'],
        icon: Package,
      },
      {
        name: 'CDN & Edge',
        description: 'Global content delivery with edge caching for fast user experiences',
        metrics: ['<50ms global', '99.9% cache hit', 'Edge compute'],
        icon: Network,
      },
      {
        name: 'Database Services',
        description: 'Managed databases - PostgreSQL, MongoDB, Redis, Elasticsearch',
        metrics: ['Multi-AZ', 'Auto backup', 'Point-in-time'],
        icon: Database,
      },
      {
        name: 'Observability',
        description: 'Complete monitoring, logging, and tracing across all services',
        metrics: ['Distributed tracing', 'Log aggregation', 'APM'],
        icon: Activity,
      },
    ],
    techStack: ['AWS', 'GCP', 'Kubernetes', 'Terraform', 'Prometheus', 'Grafana'],
  },
  {
    id: 'securevault',
    name: 'SecureVault',
    arabic: 'سيكيور فولت',
    fullName: 'Security & Compliance',
    tagline: 'Bank-Grade Protection',
    description: 'Enterprise security infrastructure ensuring data protection, regulatory compliance, and fraud prevention across the ecosystem.',
    icon: Lock,
    status: 'Q2 2027',
    color: 'from-red-500 to-orange-600',
    textColor: 'text-red-400',
    bgColor: 'bg-red-500/10',
    capabilities: [
      {
        name: 'Encryption',
        description: 'AES-256 encryption at rest, TLS 1.3 in transit, tokenization for sensitive data',
        metrics: ['Zero plaintext', 'Key rotation', 'HSM backed'],
        icon: Lock,
      },
      {
        name: 'Identity & Access',
        description: 'Centralized IAM with SSO, MFA, and role-based access control',
        metrics: ['Biometric auth', 'Zero trust', 'Audit logs'],
        icon: Fingerprint,
      },
      {
        name: 'Compliance',
        description: 'PCI DSS Level 1, SOC 2 Type II, GDPR, UAE PDPL compliant',
        metrics: ['Annual audits', 'Certifications', 'DPO appointed'],
        icon: Shield,
      },
      {
        name: 'Fraud Prevention',
        description: 'Real-time transaction monitoring, device fingerprinting, velocity checks',
        metrics: ['ML models', '<100ms scoring', 'Case management'],
        icon: AlertTriangle,
      },
      {
        name: 'Secrets Management',
        description: 'Secure storage and rotation of API keys, credentials, and certificates',
        metrics: ['Auto-rotation', 'Least privilege', 'Audit trails'],
        icon: Key,
      },
      {
        name: 'Penetration Testing',
        description: 'Regular security assessments by internal and external teams',
        metrics: ['Quarterly pentests', 'Bug bounty', '24/7 SOC'],
        icon: Terminal,
      },
    ],
    techStack: ['HashiCorp Vault', 'AWS KMS', 'Datadog SIEM', 'CrowdStrike', 'Auth0', 'Snyk'],
  },
];

// Architecture Overview
const architectureLayers = [
  { name: 'Presentation', description: 'Mobile apps, Web apps, Partner portals', color: 'bg-blue-500' },
  { name: 'API Gateway', description: 'Rabtul - routing, auth, rate limiting', color: 'bg-purple-500' },
  { name: 'Services', description: '500+ microservices - Nuqta, Qist, Hawil, Wasil...', color: 'bg-emerald-500' },
  { name: 'AI/ML', description: 'AIRA - recommendations, fraud, analytics', color: 'bg-pink-500' },
  { name: 'Data', description: 'DataPulse - warehouse, lake, real-time', color: 'bg-orange-500' },
  { name: 'Infrastructure', description: 'CloudSync - multi-region, K8s, CDN', color: 'bg-cyan-500' },
  { name: 'Security', description: 'SecureVault - encryption, IAM, compliance', color: 'bg-red-500' },
];

// SLA Guarantees
const slaGuarantees = [
  { metric: 'Uptime', value: '99.99%', description: 'Annual availability target' },
  { metric: 'API Latency', value: '<100ms', description: 'P99 response time' },
  { metric: 'Data Recovery', value: '<1 hour', description: 'RTO/RPO targets' },
  { metric: 'Security Response', value: '<15 min', description: 'Critical incident response' },
];

export default function AIInfrastructurePage() {
  const [expandedProduct, setExpandedProduct] = useState<string | null>('aira');

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0a1628] via-purple-900/20 to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full mb-6">
            <Cpu className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 font-bold">AI & Infrastructure</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            The <span className="text-purple-400">Brain & Backbone</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mb-8">
            Five critical infrastructure components powering the entire Nuqta ecosystem -
            AI recommendations, API integration, analytics, cloud infrastructure, and security.
          </p>

          {/* SLA Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {slaGuarantees.map((item, i) => (
              <div key={i} className="bg-purple-500/10 rounded-xl p-4 text-center border border-purple-500/30">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400">{item.value}</div>
                <div className="text-xs sm:text-sm text-white font-medium">{item.metric}</div>
                <div className="text-xs text-slate-500">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Architecture Overview */}
      <section className="bg-slate-800/30 border-b border-slate-700/50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8 flex items-center justify-center gap-2">
            <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
            Architecture Layers
          </h2>
          <div className="space-y-2">
            {architectureLayers.map((layer, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className={`w-3 h-3 rounded-full ${layer.color}`} />
                <div className="flex-1 bg-slate-900/50 rounded-lg p-3 sm:p-4 border border-slate-700/50">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold text-sm sm:text-base">{layer.name}</span>
                    <span className="text-slate-400 text-xs sm:text-sm">{layer.description}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="space-y-4 sm:space-y-6">
          {infrastructureProducts.map((product) => (
            <div
              key={product.id}
              className={`${product.bgColor} border-2 rounded-xl overflow-hidden`}
              style={{ borderColor: product.textColor.includes('purple') ? '#a855f7' : product.textColor.includes('blue') ? '#3b82f6' : product.textColor.includes('emerald') ? '#10b981' : product.textColor.includes('cyan') ? '#06b6d4' : '#ef4444' }}
            >
              <button
                onClick={() => setExpandedProduct(expandedProduct === product.id ? null : product.id)}
                className="w-full p-4 sm:p-6 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                    <product.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className={`text-lg sm:text-xl font-bold ${product.textColor}`}>
                        {product.name}
                      </h3>
                      <span className="text-slate-500 text-sm">{product.arabic}</span>
                      <span className="bg-slate-900/50 px-2 py-0.5 rounded text-xs text-slate-300">
                        {product.status}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm">{product.tagline}</p>
                  </div>
                </div>
                <ArrowRight className={`w-5 h-5 text-slate-400 transition-transform ${expandedProduct === product.id ? 'rotate-90' : ''}`} />
              </button>

              {expandedProduct === product.id && (
                <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                  <p className="text-slate-300 mb-6">{product.description}</p>

                  {/* Capabilities */}
                  <h4 className="text-white font-bold mb-4">Core Capabilities</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {product.capabilities.map((cap, i) => (
                      <div key={i} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50">
                        <cap.icon className={`w-6 h-6 ${product.textColor} mb-2`} />
                        <h5 className="text-white font-bold text-sm mb-1">{cap.name}</h5>
                        <p className="text-slate-400 text-xs mb-2">{cap.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {cap.metrics.map((metric, j) => (
                            <span key={j} className={`text-xs px-2 py-0.5 rounded ${product.bgColor} ${product.textColor}`}>
                              {metric}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <h4 className="text-white font-bold mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.techStack.map((tech, i) => (
                      <span key={i} className="bg-slate-900/50 px-3 py-1 rounded-lg text-sm text-slate-300 border border-slate-700/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Navigation */}
      <section className="bg-slate-800/30 border-t border-slate-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rtmn-ecosystem" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-xl font-bold hover:bg-purple-400 transition-colors">
              <Package className="w-5 h-5" /> Full Ecosystem
            </Link>
            <Link href="/ecosystem" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white border border-slate-700 rounded-xl font-bold hover:bg-slate-700 transition-colors">
              <Network className="w-5 h-5" /> Ecosystem Overview
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
