'use client';

import React, { useState } from 'react';
import GlobalFooter from '@/components/GlobalFooter';
import {
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  Store,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Target,
  Coins,
  ShoppingBag,
  Repeat,
  Star,
  Bell,
  Settings,
  ChevronRight,
  Filter
} from 'lucide-react';

export default function DashboardPreviewPage() {
  const [activeTab, setActiveTab] = useState<'merchant' | 'admin' | 'user'>('merchant');

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0a1628] via-[#1a2942] to-[#0a1628] border-b border-[#c9a227]/20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="w-8 h-8 text-[#c9a227]" />
            <span className="text-[#c9a227] font-semibold">Product Design</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Dashboard Designs
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Preview of merchant analytics, admin panel, and user app interfaces
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-0 z-50 bg-[#0a1628]/95 backdrop-blur border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-2">
            {[
              { id: 'merchant', label: 'Merchant Dashboard', icon: Store },
              { id: 'admin', label: 'Admin Panel', icon: Settings },
              { id: 'user', label: 'User App', icon: Users },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-[#c9a227] text-black'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {activeTab === 'merchant' && <MerchantDashboard />}
        {activeTab === 'admin' && <AdminPanel />}
        {activeTab === 'user' && <UserApp />}
      </div>

      <GlobalFooter />
    </div>
  );
}

// ============================================
// MERCHANT DASHBOARD
// ============================================
function MerchantDashboard() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-white mb-2">Merchant Dashboard</h2>
        <p className="text-slate-400">What merchants see to track their Nuqta performance</p>
      </div>

      {/* Dashboard Header */}
      <div className="bg-slate-800/50 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#c9a227] rounded-xl flex items-center justify-center">
              <Store className="w-7 h-7 text-black" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">The Coffee House</h3>
              <p className="text-slate-400 text-sm">JLT Cluster C • Engine A Partner</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600">
              <Bell className="w-5 h-5 text-slate-300" />
            </button>
            <button className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600">
              <Settings className="w-5 h-5 text-slate-300" />
            </button>
          </div>
        </div>

        {/* Date Range */}
        <div className="flex items-center gap-2 mb-6">
          <button className="px-3 py-1.5 bg-[#c9a227] text-black rounded-lg text-sm font-semibold">Today</button>
          <button className="px-3 py-1.5 bg-slate-700 text-slate-300 rounded-lg text-sm">This Week</button>
          <button className="px-3 py-1.5 bg-slate-700 text-slate-300 rounded-lg text-sm">This Month</button>
          <button className="px-3 py-1.5 bg-slate-700 text-slate-300 rounded-lg text-sm flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            Custom
          </button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Transactions', value: '47', change: '+12%', icon: ShoppingBag, positive: true },
            { label: 'Revenue via Nuqta', value: 'AED 3,525', change: '+8%', icon: DollarSign, positive: true },
            { label: 'New Customers', value: '23', change: '+15%', icon: Users, positive: true },
            { label: 'Repeat Rate', value: '34%', change: '-2%', icon: Repeat, positive: false },
          ].map((kpi) => (
            <div key={kpi.label} className="bg-slate-700/50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <kpi.icon className="w-5 h-5 text-slate-400" />
                <span className={`text-xs font-semibold flex items-center gap-1 ${kpi.positive ? 'text-emerald-400' : 'text-red-400'}`}>
                  {kpi.positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {kpi.change}
                </span>
              </div>
              <p className="text-2xl font-black text-white">{kpi.value}</p>
              <p className="text-xs text-slate-400">{kpi.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-slate-800/50 rounded-2xl p-6">
          <h4 className="font-bold text-white mb-4">Revenue Trend (7 Days)</h4>
          <div className="h-48 flex items-end gap-2">
            {[65, 45, 80, 55, 90, 70, 85].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full bg-gradient-to-t from-[#c9a227] to-[#c9a227]/50 rounded-t-lg"
                  style={{ height: `${height}%` }}
                />
                <span className="text-xs text-slate-500">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Breakdown */}
        <div className="bg-slate-800/50 rounded-2xl p-6">
          <h4 className="font-bold text-white mb-4">Customer Breakdown</h4>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-400">New Customers</span>
                <span className="text-white font-semibold">23 (49%)</span>
              </div>
              <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '49%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-400">Returning Customers</span>
                <span className="text-white font-semibold">16 (34%)</span>
              </div>
              <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '34%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-400">VIP Customers</span>
                <span className="text-white font-semibold">8 (17%)</span>
              </div>
              <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-[#c9a227] rounded-full" style={{ width: '17%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-slate-800/50 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-bold text-white">Recent Transactions</h4>
          <button className="text-[#c9a227] text-sm font-semibold flex items-center gap-1">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-slate-400 text-sm border-b border-slate-700">
                <th className="pb-3">Time</th>
                <th className="pb-3">Customer</th>
                <th className="pb-3">Amount</th>
                <th className="pb-3">Commission</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { time: '2:45 PM', customer: 'Ahmed M.', amount: 'AED 85', commission: 'AED 12.75', status: 'Completed' },
                { time: '2:30 PM', customer: 'Sarah K.', amount: 'AED 42', commission: 'AED 6.30', status: 'Completed' },
                { time: '2:15 PM', customer: 'John D.', amount: 'AED 120', commission: 'AED 18.00', status: 'Completed' },
                { time: '1:50 PM', customer: 'Fatima A.', amount: 'AED 65', commission: 'AED 9.75', status: 'Completed' },
              ].map((tx, i) => (
                <tr key={i} className="border-b border-slate-700/50">
                  <td className="py-3 text-slate-400 text-sm">{tx.time}</td>
                  <td className="py-3 text-white">{tx.customer}</td>
                  <td className="py-3 text-white font-semibold">{tx.amount}</td>
                  <td className="py-3 text-[#c9a227]">{tx.commission}</td>
                  <td className="py-3">
                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ============================================
// ADMIN PANEL
// ============================================
function AdminPanel() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-white mb-2">Nuqta Admin Panel</h2>
        <p className="text-slate-400">Internal dashboard for operations team</p>
      </div>

      {/* Admin Header */}
      <div className="bg-gradient-to-br from-[#c9a227]/10 to-amber-500/10 border border-[#c9a227]/30 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-black text-white">Platform Overview</h3>
            <p className="text-slate-400">Real-time metrics as of 3:15 PM</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-slate-700 rounded-lg text-sm flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </button>
            <button className="px-4 py-2 bg-[#c9a227] text-black rounded-lg text-sm font-semibold">
              Export Report
            </button>
          </div>
        </div>

        {/* Global KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {[
            { label: 'Total MAU', value: '4,823', target: '5,000' },
            { label: 'Active Merchants', value: '187', target: '250' },
            { label: 'Today GMV', value: 'AED 45.2K', target: 'AED 50K' },
            { label: 'Today Revenue', value: 'AED 6.8K', target: 'AED 7.5K' },
            { label: 'D7 Retention', value: '38%', target: '40%' },
            { label: 'Avg Txn', value: 'AED 72', target: 'AED 75' },
          ].map((kpi) => (
            <div key={kpi.label} className="bg-slate-800/50 rounded-xl p-4 text-center">
              <p className="text-2xl font-black text-white">{kpi.value}</p>
              <p className="text-xs text-slate-400">{kpi.label}</p>
              <p className="text-xs text-[#c9a227] mt-1">Target: {kpi.target}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* User Growth */}
        <div className="bg-slate-800/50 rounded-2xl p-6">
          <h4 className="font-bold text-white mb-4">User Growth (30 Days)</h4>
          <div className="h-40 flex items-end justify-between gap-1">
            {Array.from({ length: 30 }, (_, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-emerald-500 to-emerald-500/30 rounded-t"
                style={{ height: `${30 + Math.random() * 70}%` }}
              />
            ))}
          </div>
          <div className="mt-4 flex justify-between text-xs text-slate-500">
            <span>30 days ago</span>
            <span>Today</span>
          </div>
        </div>

        {/* Merchant Distribution */}
        <div className="bg-slate-800/50 rounded-2xl p-6">
          <h4 className="font-bold text-white mb-4">Merchants by Engine</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded bg-emerald-500" />
              <span className="flex-1 text-sm text-slate-300">Engine A (High-Margin)</span>
              <span className="font-bold text-white">142</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded bg-blue-500" />
              <span className="flex-1 text-sm text-slate-300">Engine B (Low-Margin)</span>
              <span className="font-bold text-white">38</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded bg-purple-500" />
              <span className="flex-1 text-sm text-slate-300">Engine C (Events)</span>
              <span className="font-bold text-white">7</span>
            </div>
          </div>
          <div className="mt-4 h-4 rounded-full overflow-hidden flex">
            <div className="bg-emerald-500" style={{ width: '76%' }} />
            <div className="bg-blue-500" style={{ width: '20%' }} />
            <div className="bg-purple-500" style={{ width: '4%' }} />
          </div>
        </div>

        {/* Category GMV */}
        <div className="bg-slate-800/50 rounded-2xl p-6">
          <h4 className="font-bold text-white mb-4">GMV by Category</h4>
          <div className="space-y-3">
            {[
              { category: 'F&B', gmv: 'AED 125K', percent: 45 },
              { category: 'Beauty', gmv: 'AED 68K', percent: 25 },
              { category: 'Retail', gmv: 'AED 42K', percent: 15 },
              { category: 'Other', gmv: 'AED 40K', percent: 15 },
            ].map((item) => (
              <div key={item.category}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-400">{item.category}</span>
                  <span className="text-white">{item.gmv}</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full">
                  <div className="h-full bg-[#c9a227] rounded-full" style={{ width: `${item.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alerts & Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Alerts */}
        <div className="bg-slate-800/50 rounded-2xl p-6">
          <h4 className="font-bold text-white mb-4">System Alerts</h4>
          <div className="space-y-3">
            {[
              { type: 'warning', message: 'Merchant "Cafe Luna" has 0 transactions in 7 days', time: '2h ago' },
              { type: 'info', message: 'New merchant application: Gold Souk Jewelry', time: '4h ago' },
              { type: 'success', message: 'Daily settlement completed: AED 45,230', time: '6h ago' },
            ].map((alert, i) => (
              <div key={i} className={`p-3 rounded-lg flex items-start gap-3 ${
                alert.type === 'warning' ? 'bg-amber-500/10 border border-amber-500/30' :
                alert.type === 'info' ? 'bg-blue-500/10 border border-blue-500/30' :
                'bg-emerald-500/10 border border-emerald-500/30'
              }`}>
                <Bell className={`w-4 h-4 mt-0.5 ${
                  alert.type === 'warning' ? 'text-amber-400' :
                  alert.type === 'info' ? 'text-blue-400' :
                  'text-emerald-400'
                }`} />
                <div className="flex-1">
                  <p className="text-sm text-white">{alert.message}</p>
                  <p className="text-xs text-slate-500">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-slate-800/50 rounded-2xl p-6">
          <h4 className="font-bold text-white mb-4">Quick Actions</h4>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Add Merchant', icon: Store },
              { label: 'Send Push', icon: Bell },
              { label: 'View Reports', icon: BarChart3 },
              { label: 'User Lookup', icon: Users },
              { label: 'Create Campaign', icon: Target },
              { label: 'Manage Team', icon: Settings },
            ].map((action) => (
              <button key={action.label} className="p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors flex items-center gap-3">
                <action.icon className="w-5 h-5 text-[#c9a227]" />
                <span className="text-sm text-white">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// USER APP
// ============================================
function UserApp() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-white mb-2">User App Screens</h2>
        <p className="text-slate-400">Mobile app interface for consumers</p>
      </div>

      {/* Phone Mockups */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Home Screen */}
        <div className="flex flex-col items-center">
          <h4 className="font-bold text-white mb-4">Home Screen</h4>
          <div className="w-[280px] bg-slate-900 rounded-[40px] p-3 border-4 border-slate-700">
            <div className="bg-[#0a1628] rounded-[32px] overflow-hidden">
              {/* Status Bar */}
              <div className="bg-slate-800 px-4 py-2 flex justify-between text-xs text-white">
                <span>9:41</span>
                <span>📶 🔋</span>
              </div>

              {/* App Content */}
              <div className="p-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-slate-400 text-xs">Good afternoon</p>
                    <p className="text-white font-bold">Ahmed 👋</p>
                  </div>
                  <div className="flex items-center gap-2 bg-[#c9a227]/20 px-3 py-1.5 rounded-full">
                    <Coins className="w-4 h-4 text-[#c9a227]" />
                    <span className="text-[#c9a227] font-bold text-sm">2,450</span>
                  </div>
                </div>

                {/* Search */}
                <div className="bg-slate-800 rounded-xl p-3 mb-4 flex items-center gap-2">
                  <span className="text-slate-500">🔍</span>
                  <span className="text-slate-500 text-sm">Search merchants...</span>
                </div>

                {/* Categories */}
                <div className="flex gap-2 mb-4 overflow-x-auto">
                  {['All', '☕ Cafes', '💇 Salons', '🍔 Food', '🛍️ Shop'].map((cat) => (
                    <span key={cat} className={`px-3 py-1.5 rounded-full text-xs whitespace-nowrap ${
                      cat === 'All' ? 'bg-[#c9a227] text-black font-semibold' : 'bg-slate-800 text-slate-300'
                    }`}>
                      {cat}
                    </span>
                  ))}
                </div>

                {/* Nearby Merchants */}
                <p className="text-white font-semibold text-sm mb-2">Nearby Merchants</p>
                <div className="space-y-2">
                  {[
                    { name: 'Costa Coffee', cat: 'Cafe', dist: '150m', rate: '3x coins' },
                    { name: 'Tips & Toes', cat: 'Salon', dist: '200m', rate: '2x coins' },
                  ].map((m) => (
                    <div key={m.name} className="bg-slate-800 rounded-xl p-3 flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-700 rounded-lg" />
                      <div className="flex-1">
                        <p className="text-white text-sm font-semibold">{m.name}</p>
                        <p className="text-slate-500 text-xs">{m.cat} • {m.dist}</p>
                      </div>
                      <span className="text-[#c9a227] text-xs font-semibold">{m.rate}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Nav */}
              <div className="bg-slate-800 flex justify-around py-3">
                {['🏠', '🔍', '💳', '🎁', '👤'].map((icon, i) => (
                  <span key={i} className={i === 0 ? 'opacity-100' : 'opacity-50'}>{icon}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pay Screen */}
        <div className="flex flex-col items-center">
          <h4 className="font-bold text-white mb-4">Pay Screen</h4>
          <div className="w-[280px] bg-slate-900 rounded-[40px] p-3 border-4 border-slate-700">
            <div className="bg-[#0a1628] rounded-[32px] overflow-hidden">
              {/* Status Bar */}
              <div className="bg-slate-800 px-4 py-2 flex justify-between text-xs text-white">
                <span>9:41</span>
                <span>📶 🔋</span>
              </div>

              {/* App Content */}
              <div className="p-4 text-center">
                <p className="text-white font-bold mb-2">Costa Coffee</p>
                <p className="text-slate-400 text-xs mb-6">JLT Cluster C</p>

                {/* QR Code */}
                <div className="bg-white rounded-2xl p-6 mb-4 mx-auto w-48 h-48 flex items-center justify-center">
                  <div className="grid grid-cols-5 gap-1">
                    {Array.from({ length: 25 }, (_, i) => (
                      <div key={i} className={`w-6 h-6 ${Math.random() > 0.5 ? 'bg-black' : 'bg-white'}`} />
                    ))}
                  </div>
                </div>

                <p className="text-slate-400 text-xs mb-2">Show this to cashier</p>

                {/* Coin Multiplier */}
                <div className="bg-[#c9a227]/20 rounded-xl p-3 mb-4">
                  <p className="text-[#c9a227] font-bold">🔥 3x Coins Active!</p>
                  <p className="text-slate-400 text-xs">Earn 3 coins per AED 1 spent</p>
                </div>

                {/* Balance */}
                <div className="flex items-center justify-center gap-2">
                  <Coins className="w-5 h-5 text-[#c9a227]" />
                  <span className="text-white font-bold">2,450 coins</span>
                </div>
              </div>

              {/* Bottom Nav */}
              <div className="bg-slate-800 flex justify-around py-3 mt-4">
                {['🏠', '🔍', '💳', '🎁', '👤'].map((icon, i) => (
                  <span key={i} className={i === 2 ? 'opacity-100' : 'opacity-50'}>{icon}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Rewards Screen */}
        <div className="flex flex-col items-center">
          <h4 className="font-bold text-white mb-4">Rewards Screen</h4>
          <div className="w-[280px] bg-slate-900 rounded-[40px] p-3 border-4 border-slate-700">
            <div className="bg-[#0a1628] rounded-[32px] overflow-hidden">
              {/* Status Bar */}
              <div className="bg-slate-800 px-4 py-2 flex justify-between text-xs text-white">
                <span>9:41</span>
                <span>📶 🔋</span>
              </div>

              {/* App Content */}
              <div className="p-4">
                <p className="text-white font-bold mb-4">Redeem Rewards</p>

                {/* Balance Card */}
                <div className="bg-gradient-to-br from-[#c9a227] to-amber-600 rounded-xl p-4 mb-4">
                  <p className="text-black/60 text-xs">Your Balance</p>
                  <div className="flex items-center gap-2">
                    <Coins className="w-6 h-6 text-black" />
                    <span className="text-3xl font-black text-black">2,450</span>
                  </div>
                  <p className="text-black/60 text-xs mt-1">= AED 24.50 value</p>
                </div>

                {/* Rewards */}
                <p className="text-slate-400 text-xs mb-2">Available Rewards</p>
                <div className="space-y-2">
                  {[
                    { reward: 'AED 5 Off', coins: '500', merchant: 'Any merchant' },
                    { reward: 'Free Coffee', coins: '800', merchant: 'Costa Coffee' },
                    { reward: 'AED 20 Off', coins: '2000', merchant: 'Sephora' },
                  ].map((r) => (
                    <div key={r.reward} className="bg-slate-800 rounded-xl p-3 flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#c9a227]/20 rounded-lg flex items-center justify-center">
                        <Star className="w-5 h-5 text-[#c9a227]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-sm font-semibold">{r.reward}</p>
                        <p className="text-slate-500 text-xs">{r.merchant}</p>
                      </div>
                      <span className="text-[#c9a227] text-xs font-semibold">{r.coins}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Nav */}
              <div className="bg-slate-800 flex justify-around py-3">
                {['🏠', '🔍', '💳', '🎁', '👤'].map((icon, i) => (
                  <span key={i} className={i === 3 ? 'opacity-100' : 'opacity-50'}>{icon}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Notes */}
      <div className="bg-slate-800/30 rounded-xl p-6">
        <h4 className="font-bold text-white mb-4">Key App Features</h4>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { feature: 'Location-based Discovery', desc: 'GPS finds nearby merchants with best deals' },
            { feature: 'QR Payment', desc: 'Scan-to-pay with instant coin rewards' },
            { feature: 'Gamification', desc: 'Streaks, challenges, and tier progression' },
            { feature: 'Personalized Feed', desc: 'AI-recommended merchants based on behavior' },
            { feature: 'Social Sharing', desc: 'Share savings achievements with friends' },
            { feature: 'Push Notifications', desc: 'Flash deals and nearby offers' },
          ].map((f) => (
            <div key={f.feature} className="bg-slate-700/50 rounded-lg p-3">
              <p className="font-semibold text-white text-sm">{f.feature}</p>
              <p className="text-xs text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
