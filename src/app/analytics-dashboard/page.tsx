'use client';

import React, { useState } from 'react';
import {
  BarChart3, LineChart, PieChart, TrendingUp, TrendingDown, Users, Target,
  DollarSign, ShoppingBag, Clock, Zap, Eye, Download, Filter, Calendar,
  ArrowUpRight, ArrowDownRight, Activity, Layers, Bell, Settings,
  ChevronDown, ChevronUp, Smartphone, Mail, MessageCircle
} from 'lucide-react';

interface DashboardMetric {
  name: string;
  description: string;
  formula: string;
  source: string;
  frequency: string;
  target?: string;
  alert?: string;
}

interface DashboardSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  metrics: DashboardMetric[];
  visualizations: string[];
  filters: string[];
}

export default function AnalyticsDashboardPage() {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [expandedMetric, setExpandedMetric] = useState<string | null>(null);

  const dashboardSections: DashboardSection[] = [
    {
      id: 'overview',
      title: 'Executive Overview',
      icon: <BarChart3 className="w-6 h-6" />,
      description: 'High-level KPIs and health metrics for leadership',
      metrics: [
        {
          name: 'Total Active Users (MAU)',
          description: 'Monthly Active Users who performed at least one action',
          formula: 'COUNT(DISTINCT user_id) WHERE last_activity >= 30 days ago',
          source: 'user_events table',
          frequency: 'Daily',
          target: '50,000 by Q2',
          alert: 'Alert if < 5% WoW growth'
        },
        {
          name: 'Daily Active Users (DAU)',
          description: 'Users who performed at least one action today',
          formula: 'COUNT(DISTINCT user_id) WHERE activity_date = today',
          source: 'user_events table',
          frequency: 'Real-time',
          target: 'DAU/MAU ratio > 25%',
          alert: 'Alert if DAU drops > 20% from 7-day avg'
        },
        {
          name: 'Total Points Earned',
          description: 'Sum of all points earned across the platform',
          formula: 'SUM(points_earned) WHERE status = credited',
          source: 'transactions table',
          frequency: 'Real-time',
          target: '10M points/month'
        },
        {
          name: 'Total Points Redeemed',
          description: 'Sum of all points redeemed for rewards',
          formula: 'SUM(points_redeemed) WHERE status = completed',
          source: 'redemptions table',
          frequency: 'Real-time',
          target: 'Redemption rate > 60%'
        },
        {
          name: 'Gross Merchandise Value (GMV)',
          description: 'Total transaction value processed through Nuqta',
          formula: 'SUM(transaction_amount) WHERE status = verified',
          source: 'transactions table',
          frequency: 'Daily',
          target: 'AED 5M/month'
        },
        {
          name: 'Revenue',
          description: 'Total revenue from merchant fees and partnerships',
          formula: 'SUM(merchant_fees + partner_revenue)',
          source: 'revenue table',
          frequency: 'Daily',
          target: 'AED 250K/month'
        }
      ],
      visualizations: [
        'KPI cards with trend indicators',
        'Daily/Weekly/Monthly trend line charts',
        'GMV vs Revenue waterfall chart',
        'Points economy balance (earned vs redeemed)'
      ],
      filters: ['Date range', 'User segment', 'Region/Area']
    },
    {
      id: 'acquisition',
      title: 'User Acquisition',
      icon: <Users className="w-6 h-6" />,
      description: 'New user signups, sources, and conversion funnel',
      metrics: [
        {
          name: 'New User Signups',
          description: 'Total new account registrations',
          formula: 'COUNT(*) WHERE created_at = date_range',
          source: 'users table',
          frequency: 'Real-time',
          target: '500/day'
        },
        {
          name: 'Signup Conversion Rate',
          description: 'App downloads that convert to registered users',
          formula: '(Registrations / App Downloads) × 100',
          source: 'analytics + users',
          frequency: 'Daily',
          target: '> 40%'
        },
        {
          name: 'First Transaction Rate',
          description: 'New users who complete first transaction within 7 days',
          formula: '(Users with txn in 7 days / New signups) × 100',
          source: 'users + transactions',
          frequency: 'Weekly',
          target: '> 50%'
        },
        {
          name: 'Cost Per Acquisition (CPA)',
          description: 'Marketing spend per new user acquired',
          formula: 'Marketing spend / New users acquired',
          source: 'marketing + users',
          frequency: 'Weekly',
          target: '< AED 15'
        },
        {
          name: 'Acquisition Source Mix',
          description: 'Breakdown of where new users come from',
          formula: 'COUNT by utm_source/referral_type',
          source: 'user_attribution',
          frequency: 'Daily'
        },
        {
          name: 'Referral Signups',
          description: 'Users acquired through referral program',
          formula: 'COUNT(*) WHERE referral_code IS NOT NULL',
          source: 'users table',
          frequency: 'Daily',
          target: '> 30% of signups'
        }
      ],
      visualizations: [
        'Signup funnel (Download → Register → First Txn)',
        'Acquisition channel pie chart',
        'CPA trend over time',
        'Cohort signup heatmap',
        'Referral network visualization'
      ],
      filters: ['Date range', 'Acquisition channel', 'Campaign', 'Device type']
    },
    {
      id: 'engagement',
      title: 'User Engagement',
      icon: <Activity className="w-6 h-6" />,
      description: 'User activity, retention, and behavioral metrics',
      metrics: [
        {
          name: 'DAU/MAU Ratio',
          description: 'Stickiness indicator - daily vs monthly engagement',
          formula: 'DAU / MAU × 100',
          source: 'Derived metric',
          frequency: 'Daily',
          target: '> 25%',
          alert: 'Alert if drops below 20%'
        },
        {
          name: 'Sessions Per User',
          description: 'Average app sessions per user per day',
          formula: 'COUNT(sessions) / COUNT(DISTINCT users)',
          source: 'session_logs',
          frequency: 'Daily',
          target: '> 2 sessions/day'
        },
        {
          name: 'Average Session Duration',
          description: 'Time spent in app per session',
          formula: 'AVG(session_end - session_start)',
          source: 'session_logs',
          frequency: 'Daily',
          target: '> 3 minutes'
        },
        {
          name: 'Feature Adoption Rate',
          description: 'Percentage of users using key features',
          formula: '(Users using feature / Total users) × 100',
          source: 'feature_events',
          frequency: 'Weekly'
        },
        {
          name: 'Push Notification CTR',
          description: 'Click-through rate on push notifications',
          formula: '(Clicks / Delivered) × 100',
          source: 'push_analytics',
          frequency: 'Daily',
          target: '> 5%'
        },
        {
          name: 'Challenge Participation Rate',
          description: 'Users actively participating in challenges',
          formula: '(Users with challenge activity / MAU) × 100',
          source: 'challenges table',
          frequency: 'Daily',
          target: '> 40%'
        }
      ],
      visualizations: [
        'DAU/WAU/MAU trend lines',
        'User activity heatmap (hour × day)',
        'Feature adoption matrix',
        'Session duration distribution',
        'Engagement score histogram'
      ],
      filters: ['Date range', 'User tier', 'User cohort', 'Device type']
    },
    {
      id: 'retention',
      title: 'Retention & Churn',
      icon: <TrendingUp className="w-6 h-6" />,
      description: 'User retention curves and churn analysis',
      metrics: [
        {
          name: 'D1/D7/D30 Retention',
          description: 'Users returning after 1, 7, 30 days from signup',
          formula: '(Users active on Day N / Original cohort) × 100',
          source: 'user_events + users',
          frequency: 'Daily',
          target: 'D1: 60%, D7: 40%, D30: 25%'
        },
        {
          name: 'Weekly Retention Rate',
          description: 'Users retained week-over-week',
          formula: '(Active users this week who were active last week / Last week active) × 100',
          source: 'user_events',
          frequency: 'Weekly',
          target: '> 70%'
        },
        {
          name: 'Churn Rate',
          description: 'Percentage of users who stopped using the app',
          formula: '(Users inactive 30+ days / Total users) × 100',
          source: 'users table',
          frequency: 'Monthly',
          target: '< 5% monthly'
        },
        {
          name: 'Resurrection Rate',
          description: 'Churned users who became active again',
          formula: '(Reactivated users / Churned users) × 100',
          source: 'user_events',
          frequency: 'Monthly',
          target: '> 10%'
        },
        {
          name: 'Time to Churn',
          description: 'Average days before user churns',
          formula: 'AVG(last_active_date - signup_date) for churned users',
          source: 'users table',
          frequency: 'Monthly'
        },
        {
          name: 'At-Risk Users',
          description: 'Users showing churn signals (14-30 days inactive)',
          formula: 'COUNT(*) WHERE last_active BETWEEN 14-30 days ago',
          source: 'users table',
          frequency: 'Daily',
          alert: 'Trigger re-engagement campaign'
        }
      ],
      visualizations: [
        'Retention curve by cohort',
        'Cohort retention heatmap',
        'Churn funnel analysis',
        'Resurrection timeline',
        'At-risk user segment breakdown'
      ],
      filters: ['Signup cohort', 'Acquisition channel', 'User tier', 'First transaction category']
    },
    {
      id: 'transactions',
      title: 'Transaction Analytics',
      icon: <ShoppingBag className="w-6 h-6" />,
      description: 'Purchase behavior and transaction patterns',
      metrics: [
        {
          name: 'Total Transactions',
          description: 'Number of verified transactions',
          formula: 'COUNT(*) WHERE status = verified',
          source: 'transactions table',
          frequency: 'Real-time',
          target: '10,000/day'
        },
        {
          name: 'Average Transaction Value',
          description: 'Average spend per transaction',
          formula: 'SUM(amount) / COUNT(*)',
          source: 'transactions table',
          frequency: 'Daily',
          target: 'AED 75'
        },
        {
          name: 'Transactions Per User',
          description: 'Average transactions per active user per month',
          formula: 'COUNT(transactions) / COUNT(DISTINCT users)',
          source: 'transactions table',
          frequency: 'Monthly',
          target: '> 8 txns/month'
        },
        {
          name: 'Category Distribution',
          description: 'Transaction breakdown by merchant category',
          formula: 'COUNT(*) GROUP BY category',
          source: 'transactions + merchants',
          frequency: 'Daily'
        },
        {
          name: 'Peak Transaction Hours',
          description: 'Busiest hours for transactions',
          formula: 'COUNT(*) GROUP BY HOUR(created_at)',
          source: 'transactions table',
          frequency: 'Daily'
        },
        {
          name: 'Receipt Scan Success Rate',
          description: 'Percentage of scans that successfully parse',
          formula: '(Successful scans / Total scans) × 100',
          source: 'scan_logs',
          frequency: 'Daily',
          target: '> 95%'
        }
      ],
      visualizations: [
        'Transaction volume over time',
        'Category breakdown pie/bar chart',
        'Transaction heatmap (time × day)',
        'Average ticket size trend',
        'Top merchants leaderboard'
      ],
      filters: ['Date range', 'Merchant category', 'User tier', 'Transaction amount range']
    },
    {
      id: 'rewards',
      title: 'Rewards & Redemptions',
      icon: <Zap className="w-6 h-6" />,
      description: 'Points economy and redemption behavior',
      metrics: [
        {
          name: 'Points Issued',
          description: 'Total points credited to users',
          formula: 'SUM(points) WHERE type = credit',
          source: 'points_ledger',
          frequency: 'Real-time'
        },
        {
          name: 'Points Redeemed',
          description: 'Total points used for rewards',
          formula: 'SUM(points) WHERE type = debit',
          source: 'points_ledger',
          frequency: 'Real-time'
        },
        {
          name: 'Points Liability',
          description: 'Outstanding points balance (financial liability)',
          formula: 'SUM(user_balances) × point_value',
          source: 'users table',
          frequency: 'Daily',
          alert: 'Alert if > AED 500K'
        },
        {
          name: 'Redemption Rate',
          description: 'Percentage of earned points that get redeemed',
          formula: '(Points redeemed / Points issued) × 100',
          source: 'points_ledger',
          frequency: 'Monthly',
          target: '60-70%'
        },
        {
          name: 'Average Redemption Value',
          description: 'Average AED value per redemption',
          formula: 'SUM(redemption_value) / COUNT(*)',
          source: 'redemptions table',
          frequency: 'Daily'
        },
        {
          name: 'Time to First Redemption',
          description: 'Days from signup to first redemption',
          formula: 'AVG(first_redemption_date - signup_date)',
          source: 'users + redemptions',
          frequency: 'Weekly',
          target: '< 30 days'
        },
        {
          name: 'Popular Rewards',
          description: 'Most redeemed reward types',
          formula: 'COUNT(*) GROUP BY reward_type ORDER BY DESC',
          source: 'redemptions table',
          frequency: 'Weekly'
        }
      ],
      visualizations: [
        'Points flow sankey diagram',
        'Redemption category breakdown',
        'Points balance distribution histogram',
        'Time to redemption curve',
        'Reward popularity ranking'
      ],
      filters: ['Date range', 'Reward type', 'User tier', 'Points range']
    },
    {
      id: 'merchants',
      title: 'Merchant Performance',
      icon: <DollarSign className="w-6 h-6" />,
      description: 'Partner merchant analytics and performance',
      metrics: [
        {
          name: 'Active Merchants',
          description: 'Merchants with at least one transaction this month',
          formula: 'COUNT(DISTINCT merchant_id) WHERE txn_date >= 30 days ago',
          source: 'transactions + merchants',
          frequency: 'Daily',
          target: '500 active'
        },
        {
          name: 'Merchant GMV',
          description: 'Total transaction value per merchant',
          formula: 'SUM(amount) GROUP BY merchant_id',
          source: 'transactions table',
          frequency: 'Daily'
        },
        {
          name: 'Average Merchant Rating',
          description: 'User satisfaction rating per merchant',
          formula: 'AVG(rating) GROUP BY merchant_id',
          source: 'reviews table',
          frequency: 'Weekly'
        },
        {
          name: 'New Merchant Onboarding',
          description: 'New merchants added to platform',
          formula: 'COUNT(*) WHERE onboarded_date = date_range',
          source: 'merchants table',
          frequency: 'Weekly',
          target: '20 new/month'
        },
        {
          name: 'Merchant Churn Rate',
          description: 'Merchants who stopped transacting',
          formula: '(Inactive merchants / Total merchants) × 100',
          source: 'merchants table',
          frequency: 'Monthly',
          target: '< 5%'
        },
        {
          name: 'Revenue Per Merchant',
          description: 'Average revenue generated per merchant',
          formula: 'Total merchant revenue / Active merchants',
          source: 'revenue table',
          frequency: 'Monthly'
        }
      ],
      visualizations: [
        'Merchant leaderboard table',
        'GMV by category breakdown',
        'Merchant growth trend',
        'Geographic merchant density map',
        'Merchant health scorecard'
      ],
      filters: ['Date range', 'Merchant category', 'Location', 'Merchant tier']
    },
    {
      id: 'campaigns',
      title: 'Campaign Performance',
      icon: <Target className="w-6 h-6" />,
      description: 'Marketing campaign and promotion analytics',
      metrics: [
        {
          name: 'Campaign Reach',
          description: 'Users who saw the campaign',
          formula: 'COUNT(DISTINCT user_id) WHERE campaign_viewed = true',
          source: 'campaign_events',
          frequency: 'Real-time'
        },
        {
          name: 'Campaign Conversion Rate',
          description: 'Users who completed campaign action',
          formula: '(Conversions / Impressions) × 100',
          source: 'campaign_events',
          frequency: 'Daily',
          target: 'Varies by campaign type'
        },
        {
          name: 'Promotion Redemption Rate',
          description: 'Usage rate of promotional offers',
          formula: '(Redemptions / Offers delivered) × 100',
          source: 'promotions table',
          frequency: 'Daily'
        },
        {
          name: 'Incremental Revenue',
          description: 'Additional revenue attributed to campaign',
          formula: 'Campaign GMV - Baseline GMV',
          source: 'transactions + campaigns',
          frequency: 'Per campaign'
        },
        {
          name: 'Cost Per Conversion',
          description: 'Campaign cost per converting user',
          formula: 'Campaign cost / Conversions',
          source: 'campaigns + marketing',
          frequency: 'Per campaign'
        },
        {
          name: 'ROI',
          description: 'Return on investment for campaigns',
          formula: '(Revenue - Cost) / Cost × 100',
          source: 'campaigns + revenue',
          frequency: 'Per campaign',
          target: '> 200%'
        }
      ],
      visualizations: [
        'Campaign performance comparison table',
        'Conversion funnel by campaign',
        'A/B test results dashboard',
        'Channel attribution chart',
        'Campaign calendar with results'
      ],
      filters: ['Campaign name', 'Date range', 'Channel', 'Target segment']
    }
  ];

  const currentSection = dashboardSections.find(s => s.id === activeSection)!;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="w-10 h-10" />
            <h1 className="text-4xl font-bold">Analytics Dashboard Specifications</h1>
          </div>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Comprehensive specifications for all dashboard metrics, visualizations, and data sources for Nuqta's analytics platform.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Section Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {dashboardSections.map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                activeSection === section.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {section.icon}
              <span className="hidden md:inline">{section.title}</span>
            </button>
          ))}
        </div>

        {/* Section Content */}
        <div className="space-y-8">
          {/* Section Header */}
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-indigo-600 p-3 rounded-xl text-white">
                {currentSection.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{currentSection.title}</h2>
                <p className="text-slate-400">{currentSection.description}</p>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-slate-400 text-sm flex items-center gap-1">
                <Filter className="w-4 h-4" />
                Available Filters:
              </span>
              {currentSection.filters.map((filter, idx) => (
                <span key={idx} className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm">
                  {filter}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {currentSection.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedMetric(expandedMetric === `${activeSection}-${idx}` ? null : `${activeSection}-${idx}`)}
                  className="w-full p-6 text-left"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{metric.name}</h3>
                      <p className="text-slate-400 text-sm">{metric.description}</p>
                    </div>
                    {expandedMetric === `${activeSection}-${idx}` ? (
                      <ChevronUp className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </div>

                  {metric.target && (
                    <div className="mt-3 flex items-center gap-2">
                      <Target className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 text-sm">Target: {metric.target}</span>
                    </div>
                  )}
                </button>

                {expandedMetric === `${activeSection}-${idx}` && (
                  <div className="border-t border-slate-700 p-6 space-y-4">
                    <div>
                      <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">Formula / Calculation</p>
                      <code className="text-indigo-300 bg-slate-900 px-3 py-2 rounded block text-sm font-mono">
                        {metric.formula}
                      </code>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">Data Source</p>
                        <p className="text-white text-sm">{metric.source}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">Update Frequency</p>
                        <p className="text-white text-sm">{metric.frequency}</p>
                      </div>
                    </div>

                    {metric.alert && (
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                        <div className="flex items-center gap-2 text-yellow-400">
                          <Bell className="w-4 h-4" />
                          <span className="text-sm">{metric.alert}</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Visualizations */}
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Eye className="w-5 h-5 text-indigo-400" />
              Recommended Visualizations
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {currentSection.visualizations.map((viz, idx) => (
                <div key={idx} className="bg-slate-700/50 rounded-lg p-4 flex items-center gap-3">
                  <div className="bg-indigo-500/20 p-2 rounded-lg">
                    {idx % 3 === 0 ? <LineChart className="w-5 h-5 text-indigo-400" /> :
                     idx % 3 === 1 ? <BarChart3 className="w-5 h-5 text-indigo-400" /> :
                     <PieChart className="w-5 h-5 text-indigo-400" />}
                  </div>
                  <span className="text-slate-300 text-sm">{viz}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dashboard Implementation Guide */}
        <div className="mt-12 bg-slate-800/50 rounded-xl border border-slate-700 p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Dashboard Implementation Guide</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-6 border border-blue-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-400" />
                Data Architecture
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• PostgreSQL for transactional data</li>
                <li>• ClickHouse for analytics queries</li>
                <li>• Redis for real-time counters</li>
                <li>• ETL pipeline: Airbyte → dbt</li>
                <li>• Data refresh: 15-min intervals</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-purple-400" />
                Technical Stack
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Visualization: Metabase / Looker</li>
                <li>• Alerting: PagerDuty integration</li>
                <li>• Exports: CSV, PDF, API</li>
                <li>• Access: Role-based permissions</li>
                <li>• Mobile: Responsive dashboards</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-xl p-6 border border-green-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-green-400" />
                Reporting Cadence
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Daily: Key KPIs email</li>
                <li>• Weekly: Exec summary deck</li>
                <li>• Monthly: Deep-dive analysis</li>
                <li>• Quarterly: Board presentation</li>
                <li>• Ad-hoc: Custom queries</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sample Dashboard Mockup */}
        <div className="mt-8 bg-slate-800/50 rounded-xl border border-slate-700 p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Sample Executive Dashboard View</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Active Users', value: '47,832', change: '+12.5%', up: true },
              { label: 'Daily Transactions', value: '8,943', change: '+8.2%', up: true },
              { label: 'Points Issued', value: '2.4M', change: '+15.1%', up: true },
              { label: 'Churn Rate', value: '4.2%', change: '-0.8%', up: false }
            ].map((metric, idx) => (
              <div key={idx} className="bg-slate-700/50 rounded-xl p-4">
                <p className="text-slate-400 text-sm mb-1">{metric.label}</p>
                <p className="text-2xl font-bold text-white">{metric.value}</p>
                <div className={`flex items-center gap-1 text-sm ${metric.up ? 'text-green-400' : 'text-red-400'}`}>
                  {metric.up ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                  {metric.change}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-700/50 rounded-xl p-4">
              <p className="text-white font-medium mb-4">User Growth Trend</p>
              <div className="h-40 flex items-end justify-between gap-1">
                {[40, 45, 42, 55, 60, 58, 70, 75, 72, 85, 90, 95].map((height, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-t from-indigo-600 to-purple-500 rounded-t flex-1"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between text-slate-400 text-xs mt-2">
                <span>Jan</span>
                <span>Jun</span>
                <span>Dec</span>
              </div>
            </div>

            <div className="bg-slate-700/50 rounded-xl p-4">
              <p className="text-white font-medium mb-4">Transaction Categories</p>
              <div className="space-y-3">
                {[
                  { category: 'F&B', percentage: 35, color: 'bg-pink-500' },
                  { category: 'Grocery', percentage: 25, color: 'bg-blue-500' },
                  { category: 'Retail', percentage: 20, color: 'bg-green-500' },
                  { category: 'Entertainment', percentage: 12, color: 'bg-yellow-500' },
                  { category: 'Other', percentage: 8, color: 'bg-slate-500' }
                ].map((cat, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-slate-300 text-sm w-24">{cat.category}</span>
                    <div className="flex-1 bg-slate-600 rounded-full h-2">
                      <div
                        className={`${cat.color} h-2 rounded-full`}
                        style={{ width: `${cat.percentage}%` }}
                      />
                    </div>
                    <span className="text-slate-400 text-sm w-10">{cat.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
