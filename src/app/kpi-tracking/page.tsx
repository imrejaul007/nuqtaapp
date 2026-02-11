'use client';

import React, { useState } from 'react';
import {
  BarChart3, TrendingUp, Target, DollarSign, Users, Download,
  Eye, Heart, Share2, Clock, CheckCircle, AlertTriangle, Database,
  ChevronDown, ChevronUp, Copy, Check, Zap, Globe, Smartphone,
  ShoppingCart, Star, MessageCircle, RefreshCw, Calendar, PieChart
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

export default function KPITrackingPage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('acquisition');
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const kpiCategories = [
    {
      id: 'acquisition',
      name: 'User Acquisition',
      icon: Download,
      color: 'blue',
      metrics: [
        { name: 'App Downloads', formula: 'Total installs from app stores', source: 'App Store Connect, Google Play Console', target: '10K/week', benchmark: 'Top 10%: 15K+/week', frequency: 'Daily' },
        { name: 'Cost Per Install (CPI)', formula: 'Total Ad Spend / Total Installs', source: 'Meta Ads, Google Ads, TikTok Ads', target: '< AED 8', benchmark: 'UAE avg: AED 12-15', frequency: 'Daily' },
        { name: 'Customer Acquisition Cost (CAC)', formula: 'Total Marketing Spend / New Customers', source: 'Ads + Attribution', target: '< AED 15', benchmark: 'Good: < AED 20', frequency: 'Weekly' },
        { name: 'Install-to-Registration Rate', formula: 'Registrations / Downloads × 100', source: 'Firebase, Amplitude', target: '> 60%', benchmark: 'Industry: 40-50%', frequency: 'Daily' },
        { name: 'Organic vs Paid Split', formula: 'Organic Installs / Total Installs', source: 'Attribution platform', target: '> 30% organic', benchmark: 'Healthy: 25-40%', frequency: 'Weekly' },
        { name: 'Channel ROAS', formula: 'Revenue from Channel / Channel Spend', source: 'Attribution + Revenue', target: '> 3x', benchmark: 'Good: 2-4x', frequency: 'Weekly' }
      ]
    },
    {
      id: 'engagement',
      name: 'User Engagement',
      icon: Heart,
      color: 'pink',
      metrics: [
        { name: 'Daily Active Users (DAU)', formula: 'Unique users who open app daily', source: 'Firebase, Amplitude', target: '15K DAU by M6', benchmark: 'Growth: 20%+ MoM', frequency: 'Daily' },
        { name: 'Monthly Active Users (MAU)', formula: 'Unique users who open app monthly', source: 'Firebase, Amplitude', target: '50K MAU by M6', benchmark: 'Healthy DAU/MAU: 20%+', frequency: 'Weekly' },
        { name: 'Session Duration', formula: 'Total time in app / Sessions', source: 'Firebase, Amplitude', target: '> 5 minutes', benchmark: 'Good: 3-7 min', frequency: 'Weekly' },
        { name: 'Sessions Per User', formula: 'Total Sessions / Active Users', source: 'Firebase, Amplitude', target: '> 3 per week', benchmark: 'Engaged: 4-6/week', frequency: 'Weekly' },
        { name: 'Feature Adoption Rate', formula: 'Users using feature / Total users × 100', source: 'Amplitude events', target: '> 40% core features', benchmark: 'Varies by feature', frequency: 'Weekly' },
        { name: 'Push Notification CTR', formula: 'Clicks / Notifications sent × 100', source: 'OneSignal, Firebase', target: '> 8%', benchmark: 'Industry: 4-7%', frequency: 'Daily' }
      ]
    },
    {
      id: 'retention',
      name: 'Retention & Loyalty',
      icon: RefreshCw,
      color: 'green',
      metrics: [
        { name: 'Day 1 Retention', formula: 'Users returning D1 / D0 installs × 100', source: 'Firebase, Amplitude', target: '> 40%', benchmark: 'Top apps: 35-50%', frequency: 'Daily' },
        { name: 'Day 7 Retention', formula: 'Users returning D7 / D0 installs × 100', source: 'Firebase, Amplitude', target: '> 20%', benchmark: 'Good: 15-25%', frequency: 'Weekly' },
        { name: 'Day 30 Retention', formula: 'Users returning D30 / D0 installs × 100', source: 'Firebase, Amplitude', target: '> 10%', benchmark: 'Good: 8-15%', frequency: 'Monthly' },
        { name: 'Churn Rate', formula: 'Lost users / Start of period users × 100', source: 'Internal analytics', target: '< 5% monthly', benchmark: 'Good: 3-7%', frequency: 'Monthly' },
        { name: 'Reactivation Rate', formula: 'Reactivated / Churned users × 100', source: 'CRM + Analytics', target: '> 15%', benchmark: 'Good: 10-20%', frequency: 'Monthly' },
        { name: 'Net Promoter Score (NPS)', formula: 'Promoters % - Detractors %', source: 'In-app surveys', target: '> 50', benchmark: 'Good: 30-50', frequency: 'Monthly' }
      ]
    },
    {
      id: 'revenue',
      name: 'Revenue & Monetization',
      icon: DollarSign,
      color: 'yellow',
      metrics: [
        { name: 'Gross Merchandise Value (GMV)', formula: 'Total value of transactions', source: 'Transaction database', target: 'AED 10M/month by M12 (AED 120M Year 1)', benchmark: 'Growth: 30%+ MoM', frequency: 'Daily' },
        { name: 'Revenue', formula: 'Commission + Partner fees', source: 'Finance system', target: 'AED 800K/month by M12 (AED 9.6M Year 1)', benchmark: '8% of GMV', frequency: 'Daily' },
        { name: 'Average Order Value (AOV)', formula: 'Total GMV / Number of orders', source: 'Transaction database', target: 'AED 150+', benchmark: 'UAE avg: AED 120-180', frequency: 'Weekly' },
        { name: 'Transactions Per User', formula: 'Total transactions / Active users', source: 'Transaction + User data', target: '> 4 per month', benchmark: 'Power users: 8+', frequency: 'Weekly' },
        { name: 'Customer Lifetime Value (LTV)', formula: 'Avg revenue × Avg lifespan', source: 'Cohort analysis', target: 'AED 200+', benchmark: 'LTV:CAC > 3:1', frequency: 'Monthly' },
        { name: 'LTV:CAC Ratio', formula: 'Customer LTV / CAC', source: 'Calculated', target: '> 3:1', benchmark: 'Healthy: 3-5:1', frequency: 'Monthly' }
      ]
    },
    {
      id: 'merchant',
      name: 'Merchant Metrics',
      icon: ShoppingCart,
      color: 'purple',
      metrics: [
        { name: 'Active Merchants', formula: 'Merchants with transactions in period', source: 'Merchant database', target: '1,500+ by M6 (H1)', benchmark: 'Growth: 20%+ MoM', frequency: 'Weekly' },
        { name: 'Merchant Acquisition Cost', formula: 'Sales + Marketing / New merchants', source: 'Sales CRM + Finance', target: '< AED 2,000', benchmark: 'Good: AED 1-3K', frequency: 'Monthly' },
        { name: 'Merchant Churn Rate', formula: 'Lost merchants / Start merchants × 100', source: 'Merchant database', target: '< 3% monthly', benchmark: 'Good: 2-5%', frequency: 'Monthly' },
        { name: 'Avg GMV Per Merchant', formula: 'Total GMV / Active merchants', source: 'Transaction data', target: 'AED 10K+/month', benchmark: 'Top: AED 25K+', frequency: 'Monthly' },
        { name: 'Merchant Satisfaction (CSAT)', formula: 'Satisfied responses / Total × 100', source: 'Merchant surveys', target: '> 85%', benchmark: 'Good: 80-90%', frequency: 'Quarterly' },
        { name: 'Offer Redemption Rate', formula: 'Redeemed offers / Total offers × 100', source: 'Offer tracking', target: '> 15%', benchmark: 'Good: 10-20%', frequency: 'Weekly' }
      ]
    },
    {
      id: 'social',
      name: 'Social & Brand',
      icon: Globe,
      color: 'cyan',
      metrics: [
        { name: 'Total Followers', formula: 'Sum across all platforms', source: 'Social platforms', target: '100K by M6', benchmark: 'Quality > quantity', frequency: 'Weekly' },
        { name: 'Engagement Rate', formula: '(Likes + Comments + Shares) / Followers × 100', source: 'Social analytics', target: '> 5%', benchmark: 'Good: 3-6%', frequency: 'Weekly' },
        { name: 'Share of Voice', formula: 'Brand mentions / Category mentions × 100', source: 'Social listening tools', target: '> 20%', benchmark: 'Leader: 25%+', frequency: 'Monthly' },
        { name: 'Sentiment Score', formula: 'Positive mentions / Total mentions × 100', source: 'Social listening', target: '> 80% positive', benchmark: 'Healthy: 70-85%', frequency: 'Weekly' },
        { name: 'Influencer ROI', formula: '(Revenue attributed - Cost) / Cost × 100', source: 'Attribution + Contracts', target: '> 200%', benchmark: 'Good: 150-300%', frequency: 'Per campaign' },
        { name: 'Brand Awareness', formula: 'Survey: Heard of Nuqta %', source: 'Brand tracking survey', target: '> 40% by M6', benchmark: 'Growing: 30-50%', frequency: 'Quarterly' }
      ]
    },
    {
      id: 'marketing',
      name: 'Marketing Efficiency',
      icon: Target,
      color: 'orange',
      metrics: [
        { name: 'Marketing ROI', formula: '(Revenue - Marketing cost) / Marketing cost × 100', source: 'Finance + Attribution', target: '> 300%', benchmark: 'Good: 200-400%', frequency: 'Monthly' },
        { name: 'Budget Utilization', formula: 'Actual spend / Planned budget × 100', source: 'Finance system', target: '90-100%', benchmark: 'Optimal: 95-105%', frequency: 'Weekly' },
        { name: 'Cost Per Lead (CPL)', formula: 'Total spend / Leads generated', source: 'Ads + CRM', target: '< AED 5 (users)', benchmark: 'Varies by quality', frequency: 'Weekly' },
        { name: 'Conversion Rate', formula: 'Conversions / Visitors × 100', source: 'Analytics', target: '> 10% app→register', benchmark: 'Top: 15%+', frequency: 'Daily' },
        { name: 'Email Open Rate', formula: 'Opens / Delivered × 100', source: 'Email platform', target: '> 25%', benchmark: 'Industry: 15-25%', frequency: 'Per campaign' },
        { name: 'Email Click Rate', formula: 'Clicks / Opens × 100', source: 'Email platform', target: '> 5%', benchmark: 'Good: 3-7%', frequency: 'Per campaign' }
      ]
    }
  ];

  const dataSources = [
    { name: 'Firebase', type: 'App Analytics', metrics: 'Downloads, DAU/MAU, Retention, Events', setup: 'SDK integration required' },
    { name: 'Amplitude', type: 'Product Analytics', metrics: 'User journeys, Funnels, Cohorts', setup: 'SDK + Event tracking' },
    { name: 'Meta Ads Manager', type: 'Paid Ads', metrics: 'Impressions, Clicks, CPI, ROAS', setup: 'Pixel + App Events' },
    { name: 'Google Ads', type: 'Paid Ads', metrics: 'Search, Display, YouTube metrics', setup: 'Conversion tracking' },
    { name: 'TikTok Ads', type: 'Paid Ads', metrics: 'Video views, Engagement, CPI', setup: 'Pixel + Events' },
    { name: 'Sprout Social', type: 'Social Analytics', metrics: 'Engagement, Reach, Sentiment', setup: 'Account connection' },
    { name: 'Branch.io', type: 'Attribution', metrics: 'Install attribution, Deep links', setup: 'SDK + Link config' },
    { name: 'Mixpanel', type: 'Product Analytics', metrics: 'Alternative to Amplitude', setup: 'SDK integration' },
    { name: 'Google Analytics 4', type: 'Web Analytics', metrics: 'Web traffic, Conversions', setup: 'Tag implementation' },
    { name: 'Tableau/Looker', type: 'BI Dashboard', metrics: 'All consolidated metrics', setup: 'Data warehouse connect' }
  ];

  const reportingTemplates = {
    daily: [
      'App Downloads (by channel)',
      'DAU count',
      'Push notification sent/opened',
      'Social engagement summary',
      'Ad spend (running total)',
      'Any critical issues'
    ],
    weekly: [
      'All acquisition KPIs',
      'Retention cohort update',
      'Channel ROAS comparison',
      'Social growth & engagement',
      'Budget utilization %',
      'Top performing content',
      'Competitor activity notes'
    ],
    monthly: [
      'Full KPI dashboard review',
      'GMV & Revenue trends',
      'LTV:CAC analysis',
      'Merchant health metrics',
      'Brand awareness tracking',
      'Channel efficiency analysis',
      'Next month forecasts',
      'Strategic recommendations'
    ]
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; icon: string }> = {
      blue: { bg: 'bg-blue-600/20', border: 'border-blue-500/30', text: 'text-blue-400', icon: 'text-blue-400' },
      pink: { bg: 'bg-pink-600/20', border: 'border-pink-500/30', text: 'text-pink-400', icon: 'text-pink-400' },
      green: { bg: 'bg-green-600/20', border: 'border-green-500/30', text: 'text-green-400', icon: 'text-green-400' },
      yellow: { bg: 'bg-yellow-600/20', border: 'border-yellow-500/30', text: 'text-yellow-400', icon: 'text-yellow-400' },
      purple: { bg: 'bg-purple-600/20', border: 'border-purple-500/30', text: 'text-purple-400', icon: 'text-purple-400' },
      cyan: { bg: 'bg-cyan-600/20', border: 'border-cyan-500/30', text: 'text-cyan-400', icon: 'text-cyan-400' },
      orange: { bg: 'bg-orange-600/20', border: 'border-orange-500/30', text: 'text-orange-400', icon: 'text-orange-400' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-900">
      {/* Header */}
      <div className="bg-gray-900/80 border-b border-green-500/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-green-600 rounded-lg">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">KPI Tracking & Benchmarks</h1>
          </div>
          <p className="text-green-300 ml-14">
            Complete metrics library with formulas, data sources, targets & industry benchmarks
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800/60 rounded-xl p-4 border border-green-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-green-400" />
              <span className="text-green-400 text-sm">Total KPIs</span>
            </div>
            <p className="text-2xl font-bold text-white">42 Metrics</p>
            <p className="text-gray-400 text-xs">7 categories</p>
          </div>
          <div className="bg-gray-800/60 rounded-xl p-4 border border-blue-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Database className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 text-sm">Data Sources</span>
            </div>
            <p className="text-2xl font-bold text-white">10 Platforms</p>
            <p className="text-gray-400 text-xs">Integrated</p>
          </div>
          <div className="bg-gray-800/60 rounded-xl p-4 border border-purple-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 text-sm">Report Cadence</span>
            </div>
            <p className="text-2xl font-bold text-white">Daily/Weekly</p>
            <p className="text-gray-400 text-xs">+ Monthly deep-dive</p>
          </div>
          <div className="bg-gray-800/60 rounded-xl p-4 border border-orange-500/30">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-orange-400" />
              <span className="text-orange-400 text-sm">North Star</span>
            </div>
            <p className="text-2xl font-bold text-white">LTV:CAC</p>
            <p className="text-gray-400 text-xs">Target: 3:1+</p>
          </div>
        </div>

        {/* KPI Categories */}
        <div className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <PieChart className="w-5 h-5 text-green-400" />
            KPI Categories & Metrics
          </h2>

          {kpiCategories.map((category) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;

            return (
              <div key={category.id} className={`bg-gray-800/40 rounded-2xl border ${colors.border} overflow-hidden`}>
                <button
                  onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 ${colors.bg} rounded-lg`}>
                      <Icon className={`w-6 h-6 ${colors.icon}`} />
                    </div>
                    <div className="text-left">
                      <h3 className="text-white font-semibold">{category.name}</h3>
                      <p className="text-gray-400 text-sm">{category.metrics.length} metrics tracked</p>
                    </div>
                  </div>
                  {expandedCategory === category.id ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                </button>

                {expandedCategory === category.id && (
                  <div className="p-6 pt-0">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b border-gray-700">
                            <th className="py-3 px-4 text-gray-400 font-medium">Metric</th>
                            <th className="py-3 px-4 text-gray-400 font-medium">Formula / Definition</th>
                            <th className="py-3 px-4 text-gray-400 font-medium">Data Source</th>
                            <th className="py-3 px-4 text-gray-400 font-medium">Target</th>
                            <th className="py-3 px-4 text-gray-400 font-medium">Benchmark</th>
                            <th className="py-3 px-4 text-gray-400 font-medium">Frequency</th>
                          </tr>
                        </thead>
                        <tbody>
                          {category.metrics.map((metric, idx) => (
                            <tr key={idx} className="border-b border-gray-700/50 hover:bg-gray-800/30">
                              <td className="py-3 px-4 text-white font-medium">{metric.name}</td>
                              <td className="py-3 px-4 text-gray-300 text-sm">{metric.formula}</td>
                              <td className="py-3 px-4 text-blue-400 text-sm">{metric.source}</td>
                              <td className="py-3 px-4 text-green-400 font-medium">{metric.target}</td>
                              <td className="py-3 px-4 text-gray-400 text-sm">{metric.benchmark}</td>
                              <td className="py-3 px-4 text-purple-400 text-sm">{metric.frequency}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Data Sources */}
        <div className="bg-gray-800/40 rounded-2xl border border-green-500/20 p-6 mb-6">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Database className="w-5 h-5 text-blue-400" />
            Data Sources & Integration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dataSources.map((source, idx) => (
              <div key={idx} className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">{source.name}</span>
                  <span className="text-xs bg-blue-600/30 text-blue-300 px-2 py-1 rounded">{source.type}</span>
                </div>
                <p className="text-gray-400 text-sm mb-2">{source.metrics}</p>
                <p className="text-gray-500 text-xs">{source.setup}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reporting Templates */}
        <div className="bg-gray-800/40 rounded-2xl border border-green-500/20 p-6 mb-6">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-purple-400" />
            Reporting Templates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Daily */}
            <div className="bg-gray-900/50 rounded-lg p-4 border border-blue-500/30">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-blue-400 font-medium">Daily Snapshot</h3>
                <button
                  onClick={() => copyToClipboard(reportingTemplates.daily.join('\n'), 'daily')}
                  className="text-gray-400 hover:text-white"
                >
                  {copiedItem === 'daily' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <ul className="space-y-2">
                {reportingTemplates.daily.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                    <CheckCircle className="w-3 h-3 text-blue-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Weekly */}
            <div className="bg-gray-900/50 rounded-lg p-4 border border-green-500/30">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-green-400 font-medium">Weekly Report</h3>
                <button
                  onClick={() => copyToClipboard(reportingTemplates.weekly.join('\n'), 'weekly')}
                  className="text-gray-400 hover:text-white"
                >
                  {copiedItem === 'weekly' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <ul className="space-y-2">
                {reportingTemplates.weekly.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Monthly */}
            <div className="bg-gray-900/50 rounded-lg p-4 border border-purple-500/30">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-purple-400 font-medium">Monthly Deep-Dive</h3>
                <button
                  onClick={() => copyToClipboard(reportingTemplates.monthly.join('\n'), 'monthly')}
                  className="text-gray-400 hover:text-white"
                >
                  {copiedItem === 'monthly' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <ul className="space-y-2">
                {reportingTemplates.monthly.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                    <CheckCircle className="w-3 h-3 text-purple-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Dashboard Structure */}
        <div className="bg-gray-800/40 rounded-2xl border border-green-500/20 p-6 mb-6">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-orange-400" />
            Recommended Dashboard Structure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white font-medium mb-3">Executive Dashboard (C-Level)</h3>
              <div className="bg-gray-900/50 rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Total GMV & Revenue</span>
                  <span className="text-green-400">Line chart</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">LTV:CAC Ratio</span>
                  <span className="text-green-400">Single metric</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Active Users (DAU/MAU)</span>
                  <span className="text-green-400">Area chart</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Budget vs Actual</span>
                  <span className="text-green-400">Progress bar</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Top Channels by ROI</span>
                  <span className="text-green-400">Bar chart</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-medium mb-3">Marketing Operations Dashboard</h3>
              <div className="bg-gray-900/50 rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Real-time Downloads</span>
                  <span className="text-blue-400">Counter</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Campaign Performance</span>
                  <span className="text-blue-400">Table + Sparklines</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Channel Breakdown</span>
                  <span className="text-blue-400">Pie chart</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Retention Cohorts</span>
                  <span className="text-blue-400">Cohort grid</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Social Engagement</span>
                  <span className="text-blue-400">Multi-line chart</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alert Thresholds */}
        <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-2xl border border-green-500/30 p-6">
          <h3 className="text-xl font-bold text-white mb-4">⚠️ Alert Thresholds</h3>
          <p className="text-gray-300 mb-4">Set up automated alerts when KPIs breach these thresholds:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4">
              <h4 className="text-red-400 font-medium mb-2">Critical Alerts</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• CAC &gt; AED 25</li>
                <li>• D1 Retention &lt; 30%</li>
                <li>• ROAS &lt; 1.5x</li>
                <li>• NPS &lt; 20</li>
              </ul>
            </div>
            <div className="bg-orange-900/30 border border-orange-500/30 rounded-lg p-4">
              <h4 className="text-orange-400 font-medium mb-2">Warning Alerts</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• CAC &gt; AED 18</li>
                <li>• DAU drop &gt; 10%</li>
                <li>• Budget &gt; 95%</li>
                <li>• Engagement &lt; 4%</li>
              </ul>
            </div>
            <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-lg p-4">
              <h4 className="text-yellow-400 font-medium mb-2">Watch Alerts</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Organic share &lt; 25%</li>
                <li>• Email open &lt; 20%</li>
                <li>• Push CTR &lt; 5%</li>
                <li>• Churn &gt; 5%</li>
              </ul>
            </div>
            <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4">
              <h4 className="text-green-400 font-medium mb-2">Success Alerts</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• LTV:CAC &gt; 4:1</li>
                <li>• D30 Ret &gt; 15%</li>
                <li>• GMV target hit</li>
                <li>• Viral content (10K+)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    <GlobalFooter />
    </div>
  );
}
