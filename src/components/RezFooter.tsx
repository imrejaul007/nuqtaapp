'use client';

import React from 'react';
import Link from 'next/link';
import {
  Coins, Home, Presentation, FileText, Video, BarChart3, Scale,
  FolderOpen, Target, Users, Mail, Globe, ArrowRight,
  DollarSign, Store, Zap, TrendingUp, CheckCircle
} from 'lucide-react';

// ============================================
// ReZ FOOTER — ReZ-specific navigation only
// ============================================

const quickLinks = [
  { label: 'Overview', route: '/rez', icon: 'Home', desc: 'Central hub for all ReZ resources' },
  { label: 'Pitch Deck', route: '/rez-deck', icon: 'Presentation', desc: '12 interactive slides' },
  { label: 'One-Pager', route: '/rez-one-pager', icon: 'FileText', desc: 'Print-friendly PDF summary' },
  { label: 'Video Scripts', route: '/rez-video-script', icon: 'Video', desc: '60s / 90s / 3-min versions' },
  { label: 'Financial Model', route: '/rez-financials', icon: 'BarChart3', desc: '3-year P&L, 7 tabs' },
  { label: 'iSAFE Terms', route: '/rez-financials/isafe', icon: 'Scale', desc: 'Legal terms & conversion' },
  { label: 'Data Room', route: '/rez-data-room', icon: 'FolderOpen', desc: '35+ docs organized' },
  { label: 'Acquisition', route: '/rez-financials/acquisition', icon: 'Target', desc: '10 tabs, 12 channels' },
  { label: 'Investor Strategy', route: '/rez-financials/investors', icon: 'Users', desc: '40+ investors, 30+ grants' },
];

const metrics = [
  { label: 'AOV', value: '₹650' },
  { label: 'ARPU', value: '₹195/mo' },
  { label: 'LTV', value: '₹3,900' },
  { label: 'CAC', value: '₹76' },
  { label: 'LTV:CAC', value: '51.3x' },
  { label: 'Payback', value: '<1 mo' },
];

export default function RezFooter() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Quick Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {quickLinks.map(link => {
            const Icon = link.icon === 'Home' ? Home :
                         link.icon === 'Presentation' ? Presentation :
                         link.icon === 'FileText' ? FileText :
                         link.icon === 'Video' ? Video :
                         link.icon === 'BarChart3' ? BarChart3 :
                         link.icon === 'Scale' ? Scale :
                         link.icon === 'FolderOpen' ? FolderOpen :
                         link.icon === 'Target' ? Target :
                         link.icon === 'Users' ? Users :
                         Coins;
            return (
              <Link key={link.route} href={link.route} className="group">
                <div className="bg-slate-800/50 border border-orange-500/20 rounded-lg p-4 hover:border-orange-500/40 transition-all">
                  <Icon className="text-orange-400 mb-2" size={20} />
                  <p className="text-white font-medium text-sm">{link.label}</p>
                  <p className="text-slate-400 text-xs">{link.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Key Metrics Bar */}
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 mb-8">
          <h3 className="text-white font-bold text-sm mb-3">Unit Economics</h3>
          <div className="flex flex-wrap gap-3">
            {metrics.map(m => (
              <div key={m.label} className="flex items-center gap-2">
                <span className="text-slate-400 text-xs">{m.label}</span>
                <span className="text-orange-400 font-bold">{m.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Back */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800">
          <div className="flex items-center gap-3">
            <Coins className="text-orange-400" size={24} />
            <div>
              <p className="text-white font-bold">ReZ</p>
              <p className="text-xs text-slate-400">nuqtaapp.com/rez</p>
            </div>
          </div>
          <div className="flex gap-3">
            <a href="mailto:rejaul@nuqtaapp.com" className="flex items-center gap-1.5 text-slate-400 hover:text-white text-sm">
              <Mail size={14} /> Contact
            </a>
            <Link href="/" className="flex items-center gap-1.5 text-slate-400 hover:text-white text-sm">
              <Globe size={14} /> Back to Nuqta <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
