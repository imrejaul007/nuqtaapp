'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Shield, FileText, Globe, BarChart3, Users, Lock,
  ArrowRight, CheckCircle, ChevronDown, ChevronUp,
  Activity, DollarSign, Zap, AlertTriangle, Settings,
  Building2, Search, Eye, Brain, Bell,
  BookOpen, CreditCard, Star, Clock,
  TrendingUp, Layers, Award, MapPin, Briefcase,
  Code, Monitor, UserCheck, Heart,
  Crown, Store, Package, Target, Rocket,
  Calculator, Wallet, HeartHandshake,
  Network, Sparkles, Stethoscope, Pill,
  Calendar, Video, Microscope, Clipboard,
  Thermometer, Syringe, ArrowUpRight
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

const keyStats = [
  { label: 'Health Modules', value: '8', suffix: 'services', color: 'text-red-400' },
  { label: 'Provider Network', value: '5K+', suffix: 'facilities', color: 'text-blue-400' },
  { label: 'GCC Coverage', value: '6', suffix: 'countries', color: 'text-emerald-400' },
  { label: 'Teleconsult', value: '<15', suffix: 'min wait', color: 'text-purple-400' },
];

const healthModules = [
  {
    id: 'telehealth', name: 'Teleconsultation', arabic: 'استشارة عن بعد', icon: Video,
    color: 'text-blue-400', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30',
    description: 'Video, audio, and chat consultations with licensed GCC doctors. Available 24/7 in Arabic and English.',
    capabilities: ['24/7 video consultations', 'Audio-only call option', 'Secure chat with doctor', 'E-prescription generation', 'Automatic medical record', 'Insurance verification before call', 'Specialist referrals', 'Follow-up scheduling'],
    regulators: ['DHA Telehealth License', 'MOHAP', 'SCFHS (KSA)'],
  },
  {
    id: 'booking', name: 'Clinic & Hospital Booking', arabic: 'حجز مواعيد', icon: Calendar,
    color: 'text-emerald-400', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/30',
    description: 'Book appointments at 5,000+ clinics, hospitals, labs, and dental centers across the GCC. Real-time availability.',
    capabilities: ['Search by specialty, location, insurance', 'Real-time slot availability', 'Doctor profiles & patient reviews', 'Insurance network verification', 'Appointment reminders (SMS/push)', 'Waitlist & cancellation alerts', 'Multi-family member booking', 'Hospital navigation & check-in QR'],
    regulators: ['DHA', 'DOH', 'MOHAP'],
  },
  {
    id: 'pharmacy', name: 'E-Pharmacy & Delivery', arabic: 'صيدلية', icon: Pill,
    color: 'text-orange-400', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-500/30',
    description: 'Order medications online with verified prescriptions. Delivery via Wasil in 60 minutes. Controlled substance compliance.',
    capabilities: ['Upload or digital prescription', 'Price comparison across pharmacies', 'Wasil 60-min delivery', 'Medication reminders', 'Refill scheduling', 'Controlled substance verification', 'Insurance claim submission', 'Generic alternative suggestions'],
    regulators: ['MOH Pharmacy', 'SFDA (KSA)', 'NHRA (Bahrain)'],
  },
  {
    id: 'insurance', name: 'Insurance & Claims', arabic: 'تأمين صحي', icon: Shield,
    color: 'text-purple-400', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/30',
    description: 'Digital insurance card, pre-authorization, claims submission, and reimbursement tracking. Works with Daman marketplace.',
    capabilities: ['Digital insurance card', 'Pre-authorization requests', 'Claims submission with receipts', 'Reimbursement tracking', 'Coverage check before booking', 'Co-pay calculator', 'Annual benefit utilization', 'Daman integration for new policies'],
    regulators: ['DHA', 'CCHI (KSA)', 'IA (UAE)'],
  },
  {
    id: 'records', name: 'Health Records', arabic: 'سجلات صحية', icon: Clipboard,
    color: 'text-cyan-400', bgColor: 'bg-cyan-500/10', borderColor: 'border-cyan-500/30',
    description: 'Unified personal health record. Lab results, prescriptions, imaging, vaccination records — all in one place. NABIDH/Malaffi ready.',
    capabilities: ['Unified medical history', 'Lab results aggregation', 'Prescription history', 'Imaging & radiology reports', 'Vaccination records', 'Allergy & chronic condition alerts', 'Share records with any doctor', 'NABIDH/Malaffi integration'],
    regulators: ['NABIDH (Dubai)', 'Malaffi (Abu Dhabi)', 'Seha (KSA)'],
  },
  {
    id: 'lab', name: 'Lab & Diagnostics', arabic: 'مختبرات', icon: Microscope,
    color: 'text-indigo-400', bgColor: 'bg-indigo-500/10', borderColor: 'border-indigo-500/30',
    description: 'Book lab tests and diagnostics at partner facilities or home sample collection. Results delivered digitally.',
    capabilities: ['Lab test booking (500+ tests)', 'Home sample collection', 'Results in app (within hours)', 'Doctor auto-notification', 'Test package comparisons', 'Annual health check packages', 'Corporate wellness programs', 'Trend tracking over time'],
    regulators: ['DHA Lab License', 'CAP Accreditation', 'JCI'],
  },
  {
    id: 'wellness', name: 'Wellness & Prevention', arabic: 'عافية', icon: Heart,
    color: 'text-pink-400', bgColor: 'bg-pink-500/10', borderColor: 'border-pink-500/30',
    description: 'Preventive health programs — fitness tracking, nutrition plans, mental health support, and corporate wellness.',
    capabilities: ['Fitness tracking integration', 'Nutrition & diet plans', 'Mental health support (therapy)', 'Meditation & stress management', 'Sleep tracking & insights', 'Corporate wellness programs', 'Health risk assessments', 'NuqtaCoin rewards for healthy habits'],
    regulators: ['Self-regulated (wellness)'],
  },
  {
    id: 'emergency', name: 'Emergency Services', arabic: 'طوارئ', icon: Syringe,
    color: 'text-red-400', bgColor: 'bg-red-500/10', borderColor: 'border-red-500/30',
    description: 'Emergency hospital finder, ambulance request, SOS sharing with contacts, and emergency medical info card.',
    capabilities: ['Nearest ER finder with wait times', 'Ambulance request integration', 'SOS location sharing', 'Emergency medical info card', 'Blood type & allergy display', 'Emergency contact notification', 'First aid guidance', 'Insurance info for ER staff'],
    regulators: ['Ambulance Services', 'DHA Emergency'],
  },
];

const pricingTiers = [
  { tier: 'Free', price: 'Free', period: '', target: 'Everyone', color: 'border-slate-500', bgColor: 'bg-slate-800/30', features: ['Clinic/hospital booking', 'Doctor search & reviews', 'Basic health records', 'Medication reminders', 'Emergency services'], popular: false },
  { tier: 'Tabib+', price: 'AED 29', period: '/month', target: 'Individuals & Families', color: 'border-red-500', bgColor: 'bg-red-500/10', features: ['All Free features', '3 teleconsultations/month', 'Full health records vault', 'Lab result tracking', 'Wellness programs', 'Family member profiles (up to 5)', 'Priority booking'], popular: true },
  { tier: 'Corporate', price: 'AED 15', period: '/employee/mo', target: 'Companies', color: 'border-purple-500', bgColor: 'bg-purple-500/10', features: ['All Tabib+ features', 'Corporate wellness dashboard', 'Tawzeef HR integration', 'Group health analytics', 'Annual checkup management', 'Sick leave verification', 'Occupational health'], popular: false },
  { tier: 'RTMN Internal', price: 'Custom', period: '', target: '10 RTMN Companies', color: 'border-[#c9a227]', bgColor: 'bg-[#c9a227]/10', features: ['Full platform for all staff', 'Daman insurance integration', 'Cross-company wellness', 'Executive health programs', 'Mental health support', 'Tawzeef sick leave sync'], popular: false },
];

const competitors = [
  { name: 'Tabib', telehealth: '✅', booking: '✅ 5K+', pharmacy: '✅ Wasil', records: '✅ NABIDH', insurance: '✅ Daman', arabic: '✅', price: 'Free-29' },
  { name: 'Okadoc', telehealth: '✅', booking: '✅ 2K+', pharmacy: '❌', records: '⚠️', insurance: '⚠️', arabic: '✅', price: 'Free' },
  { name: 'Vezeeta', telehealth: '✅', booking: '✅ 1K+', pharmacy: '❌', records: '❌', insurance: '❌', arabic: '✅', price: 'Free' },
  { name: 'Altibbi', telehealth: '✅', booking: '❌', pharmacy: '❌', records: '❌', insurance: '❌', arabic: '✅', price: '$5/consult' },
  { name: 'Hospital Apps', telehealth: '⚠️', booking: '⚠️ 1', pharmacy: '⚠️', records: '⚠️ Own', insurance: '✅ Own', arabic: '✅', price: 'Free' },
];

const financialProjections = [
  { year: 'Year 1', users: '100K', consultations: '50K', revenue: 3, market: 'UAE — telehealth + booking' },
  { year: 'Year 2', users: '500K', consultations: '300K', revenue: 15, market: 'UAE + KSA' },
  { year: 'Year 3', users: '2M+', consultations: '1M+', revenue: 45, market: 'Full GCC' },
];

const roadmapPhases = [
  { phase: 'Phase 1', title: 'Foundation', timeline: 'Q4 2026', color: 'border-red-500', bgColor: 'bg-red-500/10', milestones: ['Teleconsultation platform', 'Clinic/hospital booking (UAE)', 'RTMN employee health portal', 'Basic health records', 'Insurance verification', 'Wasil pharmacy integration'] },
  { phase: 'Phase 2', title: 'Full Health Suite', timeline: 'Q1 2027', color: 'border-blue-500', bgColor: 'bg-blue-500/10', milestones: ['Lab & diagnostics booking', 'E-pharmacy with home delivery', 'NABIDH/Malaffi integration', 'Wellness & prevention programs', 'Corporate health dashboard', 'Consumer launch (Tabib+)'] },
  { phase: 'Phase 3', title: 'GCC Expansion', timeline: 'Q2-Q3 2027', color: 'border-purple-500', bgColor: 'bg-purple-500/10', milestones: ['KSA market (Seha integration)', 'Bahrain market', 'Emergency services', 'Mental health platform', '5,000+ provider network', '500K active users'] },
  { phase: 'Phase 4', title: 'Health Ecosystem', timeline: 'H2 2027-2028', color: 'border-[#c9a227]', bgColor: 'bg-[#c9a227]/10', milestones: ['AI symptom checker', 'Chronic disease management', 'Health-linked NuqtaCoin rewards', 'Daman health insurance marketplace', 'Wearable device integration', '2M+ users, 1M+ annual consultations'] },
];

const risks = [
  { risk: 'Healthcare licensing complexity across GCC', severity: 'high', mitigation: ['Partner with licensed facilities', 'Telemedicine license in each jurisdiction', 'Legal team per market', 'Start UAE then expand'] },
  { risk: 'Patient data privacy and security', severity: 'critical', mitigation: ['HIPAA-equivalent standards', 'NABIDH/Malaffi compliance', 'End-to-end encryption', 'SOC2 + ISO 27001 certified', 'Data residency in GCC'] },
  { risk: 'Provider network acquisition takes time', severity: 'high', mitigation: ['Start with hospital groups (5-10 = 500+ facilities)', 'Aggregator partnerships', 'Self-listing portal for clinics', 'Focus on top 3 specialties first'] },
  { risk: 'Teleconsultation reimbursement by insurers', severity: 'medium', mitigation: ['Daman insurance pre-integration', 'DHA telehealth guidelines compliance', 'Cash-pay option always available', 'Corporate wellness bypasses insurance'] },
];

const rtmnCompanies = [
  { name: 'All RTMN (500+ Staff)', needs: 'Corporate health portal, teleconsult, annual checkups', icon: Crown, color: 'text-[#c9a227]' },
  { name: 'Wasil Apps', needs: 'Driver health fitness, pharmacy delivery integration', icon: Package, color: 'text-orange-400' },
  { name: 'Rakab', needs: 'Driver medical clearance, accident health coverage', icon: MapPin, color: 'text-cyan-400' },
  { name: 'Eventora', needs: 'First aid stations, event medical services', icon: Star, color: 'text-violet-400' },
  { name: 'Daman Insurance', needs: 'Health insurance claims, provider network', icon: Heart, color: 'text-emerald-400' },
  { name: 'Tawzeef HR', needs: 'Sick leave verification, occupational health', icon: Users, color: 'text-blue-400' },
];

const corporateStructure = { parentCompany: 'Wasil Apps Pvt Ltd', entity: 'Tabib Health Platform', ownership: '100% owned by Wasil Apps (RTMN Group)', type: 'HealthTech — Digital Health Marketplace', regulator: 'DHA Telehealth License, MOHAP' };

export default function TabibPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [expandedRisk, setExpandedRisk] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Stethoscope },
    { id: 'modules', label: '8 Health Modules', icon: Layers },
    { id: 'pricing', label: 'Pricing', icon: DollarSign },
    { id: 'rtmn', label: 'RTMN Internal', icon: Network },
    { id: 'financials', label: 'Financials', icon: BarChart3 },
    { id: 'roadmap', label: 'Roadmap', icon: Rocket },
    { id: 'competition', label: 'Competition', icon: Target },
    { id: 'risks', label: 'Risks', icon: AlertTriangle },
    { id: 'deck', label: 'Pitch Deck', icon: Briefcase },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628]">
      <div className="bg-gradient-to-br from-[#0a1628] via-[#1a2d4a] to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Link href="/rtmn-ecosystem" className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 mb-4 text-sm"><ArrowRight className="w-4 h-4 rotate-180" /> RTMN Ecosystem</Link>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-lg shadow-red-500/20"><Stethoscope className="w-7 h-7 sm:w-10 sm:h-10 text-white" /></div>
                <div><h1 className="text-3xl sm:text-5xl font-black text-white">Tabib <span className="text-red-400">طبيب</span></h1><p className="text-red-400 text-sm sm:text-lg font-medium">Healthcare, Connected.</p></div>
              </div>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mb-4">The <span className="text-red-400 font-medium">GCC digital health platform</span>. Teleconsult, book clinics, order medication, manage records — <span className="text-blue-400 font-medium">5,000+ providers</span>, <span className="text-[#c9a227] font-medium">one app</span>.</p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#c9a227]/20 border border-[#c9a227]/50 rounded-full"><HeartHandshake className="w-4 h-4 text-[#c9a227]" /><span className="text-[#c9a227] text-xs sm:text-sm font-medium">A Wasil Apps Product</span></div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">{keyStats.map((stat, i) => (<div key={i} className="bg-slate-800/50 rounded-xl p-3 sm:p-4 border border-slate-700/50 text-center min-w-[120px]"><div className={`text-xl sm:text-2xl font-bold ${stat.color}`}>{stat.value}</div><div className="text-[10px] sm:text-xs text-slate-400">{stat.suffix}</div><div className="text-[10px] sm:text-xs text-slate-500 mt-1">{stat.label}</div></div>))}</div>
          </div>
          <div className="mt-8 bg-gradient-to-r from-red-500/20 to-rose-500/10 rounded-xl p-4 sm:p-6 border border-red-500/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div><div className="flex items-center gap-2 mb-2"><Zap className="w-5 h-5 text-red-400" /><span className="text-lg font-bold text-white">The Core Promise</span></div><p className="text-xl sm:text-2xl font-bold text-white"><span className="text-red-400">See a doctor in 15 minutes.</span> Meds <span className="text-orange-400">delivered in 60.</span></p></div>
              <div className="flex gap-3"><div className="bg-slate-900/50 rounded-lg p-3 text-center"><div className="text-2xl font-bold text-red-400">5K+</div><div className="text-xs text-slate-400">Providers</div></div><div className="bg-slate-900/50 rounded-lg p-3 text-center"><div className="text-2xl font-bold text-[#c9a227]">8</div><div className="text-xs text-slate-400">Modules</div></div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-40 bg-[#0a1628]/95 backdrop-blur-sm border-b border-slate-700/50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex overflow-x-auto py-2 gap-1 sm:gap-2 scrollbar-hide">{tabs.map((tab) => (<button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${activeTab === tab.id ? 'bg-red-500 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}><tab.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />{tab.label}</button>))}</div></div></div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-red-400" /> Executive Summary</h2>
              <p className="text-slate-300"><strong className="text-white">Tabib</strong> (طبيب — &quot;doctor&quot;) is the GCC&apos;s unified digital health platform. It combines <strong className="text-red-400">8 health modules</strong> — teleconsultation, clinic booking, e-pharmacy, insurance claims, health records, lab booking, wellness, and emergency services — into one app. With <strong className="text-blue-400">5,000+ providers</strong> and deep integration with <strong className="text-emerald-400">Daman</strong> (insurance), <strong className="text-orange-400">Wasil</strong> (pharmacy delivery), and <strong className="text-blue-400">Tawzeef</strong> (corporate health).</p>
            </div>
            <div className="bg-gradient-to-r from-red-500/10 to-rose-500/5 rounded-xl p-6 border border-red-500/30">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Building2 className="w-5 h-5 text-red-400" /> Corporate Structure</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">{[['Parent Company', corporateStructure.parentCompany], ['Entity Name', corporateStructure.entity], ['Ownership', corporateStructure.ownership]].map(([l, v]) => (<div key={l} className="flex justify-between py-2 border-b border-slate-700/50"><span className="text-slate-400">{l}</span><span className="text-white font-medium text-sm text-right">{v}</span></div>))}</div>
                <div className="space-y-3">{[['Product Type', corporateStructure.type], ['Regulation', corporateStructure.regulator], ['Integration', 'Wasil + Daman + Tawzeef + NuqtaPay']].map(([l, v]) => (<div key={l} className="flex justify-between py-2 border-b border-slate-700/50"><span className="text-slate-400">{l}</span><span className="text-white font-medium text-right text-sm">{v}</span></div>))}</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'modules' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-red-500/10 to-rose-500/5 rounded-xl p-6 border border-red-500/30">
              <h2 className="text-xl font-bold text-white mb-2">8 Health Modules</h2>
              <p className="text-slate-400">Every healthcare need — from teleconsult to emergency — in one platform.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {healthModules.map((mod) => {
                const Icon = mod.icon; const isActive = activeModule === mod.id;
                return (
                  <button key={mod.id} onClick={() => setActiveModule(isActive ? null : mod.id)} className={`text-left rounded-xl border p-5 transition-all ${isActive ? `${mod.bgColor} ${mod.borderColor} ring-1 ring-current` : 'bg-slate-800/30 border-slate-700/50 hover:border-slate-600/50'}`}>
                    <div className="flex items-center gap-3 mb-2"><div className={`w-10 h-10 rounded-xl ${mod.bgColor} ${mod.borderColor} border flex items-center justify-center`}><Icon className={`w-5 h-5 ${mod.color}`} /></div><div><h3 className="text-white font-bold text-xs">{mod.name}</h3><span className="text-[10px] text-slate-500">{mod.arabic}</span></div></div>
                    <p className="text-xs text-slate-400 line-clamp-2">{mod.description}</p>
                  </button>
                );
              })}
            </div>
            {activeModule && (() => {
              const mod = healthModules.find(m => m.id === activeModule);
              if (!mod) return null; const Icon = mod.icon;
              return (
                <div className={`rounded-xl border ${mod.borderColor} ${mod.bgColor} p-6`}>
                  <div className="flex items-center gap-3 mb-4"><Icon className={`w-6 h-6 ${mod.color}`} /><h3 className="text-xl font-bold text-white">{mod.name}</h3></div>
                  <p className="text-slate-300 mb-4">{mod.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">{mod.capabilities.map((cap, i) => (<div key={i} className="flex items-start gap-2"><CheckCircle className={`w-4 h-4 ${mod.color} shrink-0 mt-0.5`} /><span className="text-sm text-slate-300">{cap}</span></div>))}</div>
                  <div className="border-t border-slate-700/50 pt-3"><span className="text-xs text-slate-400 font-semibold">Regulators: </span>{mod.regulators.map((r) => (<span key={r} className="text-xs px-2 py-0.5 bg-slate-700/50 rounded-full text-slate-300 mr-1">{r}</span>))}</div>
                </div>
              );
            })()}
          </div>
        )}

        {activeTab === 'pricing' && (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">{pricingTiers.map((tier) => (<div key={tier.tier} className={`rounded-xl border ${tier.color} ${tier.bgColor} p-6 relative ${tier.popular ? 'ring-2 ring-red-500/50' : ''}`}>{tier.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 bg-red-500 text-white rounded-full font-bold">Most Popular</span>}<h3 className="text-lg font-bold text-white">{tier.tier}</h3><div className="flex items-baseline gap-1 my-2"><span className="text-3xl font-black text-white">{tier.price}</span><span className="text-sm text-slate-400">{tier.period}</span></div><p className="text-xs text-slate-400 mb-4">{tier.target}</p><ul className="space-y-2">{tier.features.map((f, i) => (<li key={i} className="text-xs text-slate-300 flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />{f}</li>))}</ul></div>))}</div>)}

        {activeTab === 'rtmn' && (<div className="space-y-8"><div className="bg-gradient-to-r from-[#c9a227]/20 to-yellow-500/10 rounded-xl p-6 border-2 border-[#c9a227]"><h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><Network className="w-5 h-5 text-[#c9a227]" /> RTMN Group Health Platform</h2><p className="text-slate-300">Tabib serves as the unified health platform for RTMN&apos;s 500+ employees — teleconsult access, annual checkups, corporate wellness, and integration with Tawzeef HR and Daman insurance.</p></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{rtmnCompanies.map((c) => { const Icon = c.icon; return (<div key={c.name} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 flex items-start gap-3"><Icon className={`w-5 h-5 ${c.color} shrink-0 mt-0.5`} /><div><h3 className="text-white font-bold text-sm">{c.name}</h3><p className="text-xs text-slate-400 mt-0.5">{c.needs}</p></div></div>); })}</div></div>)}

        {activeTab === 'financials' && (<div className="space-y-8"><div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50"><h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><BarChart3 className="w-5 h-5 text-red-400" /> Financial Projections</h2><div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700/50">{['Year', 'Users', 'Consultations', 'Revenue (AED M)', 'Market'].map((h) => (<th key={h} className="text-left px-3 py-2 text-red-400 font-semibold">{h}</th>))}</tr></thead><tbody>{financialProjections.map((fp) => (<tr key={fp.year} className="border-b border-slate-800/50"><td className="px-3 py-3 text-white font-medium">{fp.year}</td><td className="px-3 py-3 text-slate-300">{fp.users}</td><td className="px-3 py-3 text-slate-300">{fp.consultations}</td><td className="px-3 py-3 text-emerald-400 font-bold">{fp.revenue}M</td><td className="px-3 py-3 text-slate-400">{fp.market}</td></tr>))}</tbody></table></div></div><div className="grid grid-cols-2 lg:grid-cols-4 gap-3">{[{ label: 'GCC Health Spend', value: '$60B', sub: 'Annual market' }, { label: 'Digital Health', value: '$2.5B', sub: 'GCC market by 2027' }, { label: 'Telehealth', value: '45%', sub: 'CAGR in MENA' }, { label: 'Mandatory Insurance', value: '90%+', sub: 'UAE/KSA coverage' }].map((m) => (<div key={m.label} className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50"><div className="text-2xl font-bold text-white">{m.value}</div><div className="text-xs text-slate-400 mt-1">{m.sub}</div><div className="text-xs text-slate-500 mt-1">{m.label}</div></div>))}</div></div>)}

        {activeTab === 'roadmap' && (<div className="space-y-6">{roadmapPhases.map((phase) => (<div key={phase.phase} className={`${phase.bgColor} rounded-xl p-6 border-2 ${phase.color}`}><div className="flex items-center justify-between mb-4"><div><span className="text-xs text-slate-400">{phase.phase}</span><h3 className="text-lg font-bold text-white">{phase.title}</h3></div><span className="text-sm text-slate-300 font-medium">{phase.timeline}</span></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-2">{phase.milestones.map((m, i) => (<div key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /><span className="text-sm text-slate-300">{m}</span></div>))}</div></div>))}</div>)}

        {activeTab === 'competition' && (<div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50"><h2 className="text-xl font-bold text-white mb-4">Competitive Comparison</h2><div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-slate-700/50">{['', 'Telehealth', 'Booking', 'Pharmacy', 'Records', 'Insurance', 'Arabic', 'Price'].map((h) => (<th key={h} className="text-left px-2 py-2 text-red-400 font-semibold whitespace-nowrap text-xs">{h}</th>))}</tr></thead><tbody>{competitors.map((c) => (<tr key={c.name} className={`border-b border-slate-800/50 ${c.name === 'Tabib' ? 'bg-red-500/10' : ''}`}><td className="px-2 py-2 text-white font-bold whitespace-nowrap">{c.name}</td>{[c.telehealth, c.booking, c.pharmacy, c.records, c.insurance, c.arabic, c.price].map((val, j) => (<td key={j} className={`px-2 py-2 whitespace-nowrap text-xs ${val.startsWith('✅') ? 'text-emerald-400' : val.startsWith('❌') ? 'text-red-400' : 'text-amber-400'}`}>{val}</td>))}</tr>))}</tbody></table></div></div>)}

        {activeTab === 'risks' && (<div className="space-y-4">{risks.map((r) => (<div key={r.risk} className="bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden"><button onClick={() => setExpandedRisk(expandedRisk === r.risk ? null : r.risk)} className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-800/50 transition-colors"><div className="flex items-center gap-3"><span className={`px-2 py-0.5 rounded text-xs font-bold ${r.severity === 'critical' ? 'bg-red-500/20 text-red-400' : r.severity === 'high' ? 'bg-orange-500/20 text-orange-400' : 'bg-amber-500/20 text-amber-400'}`}>{r.severity.toUpperCase()}</span><span className="text-white font-medium text-sm">{r.risk}</span></div>{expandedRisk === r.risk ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}</button>{expandedRisk === r.risk && (<div className="px-5 pb-4"><div className="space-y-2">{r.mitigation.map((m, i) => (<div key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><span className="text-sm text-slate-300">{m}</span></div>))}</div></div>)}</div>))}</div>)}

        {/* Pitch Deck */}
        {activeTab === 'deck' && (
          <div className="space-y-8">
            {/* Investment Thesis */}
            <div className="bg-gradient-to-r from-red-500/20 to-red-500/5 rounded-2xl p-6 border border-red-500/30">
              <h2 className="text-2xl font-bold text-white mb-2">Investment Thesis</h2>
              <p className="text-slate-300 leading-relaxed">Tabib is not a telemedicine app — it is a full-stack healthcare operating system. When a patient consults on Tabib, the prescription flows to MediEarn, the insurance claim flows to Daman, the payment flows through NuqtaPay, and the patient earns Nuqta Coins. No other healthtech platform in the MENA region connects consultation, pharmacy, insurance, and rewards into one seamless experience.</p>
            </div>
            {/* TAM/SAM/SOM */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Market Opportunity</h3>
              <div className="grid grid-cols-3 gap-4">
                {[{label:'TAM',value:'$5B+',detail:'UAE Healthcare Market'},{label:'SAM',value:'$1.2B',detail:'Digital Health & Telemedicine'},{label:'SOM',value:'$50M',detail:'Year 3 Tabib Revenue Target'}].map(m=>(
                  <div key={m.label} className="bg-slate-800/30 rounded-xl p-4 text-center border border-slate-700/50">
                    <div className="text-xs text-slate-400">{m.label}</div>
                    <div className="text-2xl font-black text-white mt-1">{m.value}</div>
                    <div className="text-xs text-slate-500 mt-1">{m.detail}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Key Differentiators */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Key Differentiators</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[{title:'End-to-End Connected Care',desc:'Doctor consultation to e-prescription to pharmacy delivery to insurance claim — all in one seamless flow. No app-switching, no paperwork'},{title:'MediEarn Pharmacy Integration',desc:'Doctor prescribes inside Tabib, MediEarn delivers medicine to your door within 60 minutes. Prescription verified automatically'},{title:'Daman Insurance Built-In',desc:'Insurance verification before consultation, automatic claims submission after visit. Co-pay calculated upfront — no surprises'},{title:'Arabic-First, UAE-Native',desc:'Fully bilingual (Arabic/English), DHA/MOHAP licensed, NABIDH/Malaffi integrated. Built for the GCC from day one'},{title:'Family Health Hub',desc:'Manage health records, appointments, and prescriptions for your entire family from one account'}].map(d=>(
                  <div key={d.title} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5"/>
                    <div><div className="text-white font-medium text-sm">{d.title}</div>
                    <div className="text-xs text-slate-400">{d.desc}</div></div>
                  </div>
                ))}
              </div>
            </div>
            {/* 3-Year Financials */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Financial Projections</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-slate-700/50">
                    {['Year','Revenue','Costs','Net Profit'].map(h=><th key={h} className="text-left px-3 py-2 text-[#c9a227] font-semibold">{h}</th>)}
                  </tr></thead>
                  <tbody>
                    {[{y:'Year 1',r:'AED 3M',c:'AED 2.2M',n:'AED 0.8M'},{y:'Year 2',r:'AED 15M',c:'AED 7.5M',n:'AED 7.5M'},{y:'Year 3',r:'AED 50M',c:'AED 18M',n:'AED 32M'}].map(row=>(
                      <tr key={row.y} className="border-b border-slate-800/50">
                        <td className="px-3 py-3 text-white font-medium">{row.y}</td>
                        <td className="px-3 py-3 text-emerald-400">{row.r}</td>
                        <td className="px-3 py-3 text-red-400">{row.c}</td>
                        <td className="px-3 py-3 text-[#c9a227] font-bold">{row.n}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Comparable Companies */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Comparable Companies</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[{name:'Teladoc',val:'$8B',market:'Telemedicine + chronic care'},{name:'Practo',val:'$1B',market:'Doctor booking + teleconsult'},{name:'Doctolib',val:'$6B',market:'Doctor booking SaaS'},{name:'1mg (Tata)',val:'$1B',market:'Online pharmacy + health'}].map(c=>(
                  <div key={c.name} className="bg-slate-800/30 rounded-xl p-4 text-center border border-slate-700/50">
                    <div className="text-white font-bold">{c.name}</div>
                    <div className="text-2xl font-black text-[#c9a227] mt-1">{c.val}</div>
                    <div className="text-xs text-slate-500 mt-1">{c.market}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Unicorn Path */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><ArrowUpRight className="w-5 h-5"/> Unicorn Path</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[{stage:'50K users',val:'~$30M',rev:'~3M AED',time:'Q4 2026'},{stage:'200K users',val:'~$120M',rev:'~15M AED',time:'Q4 2027'},{stage:'800K users',val:'~$400M',rev:'~50M AED',time:'Q4 2028'},{stage:'3M users (GCC)',val:'~$1B+',rev:'~200M AED',time:'2029+'}].map((ms,i)=>(
                  <div key={ms.stage} className={`rounded-xl p-4 text-center border ${i===3?'bg-[#c9a227]/10 border-[#c9a227]/40':'bg-slate-900/50 border-slate-700/50'}`}>
                    <div className={`text-xl font-bold ${i===3?'text-[#c9a227]':'text-white'}`}>{ms.val}</div>
                    <div className="text-xs text-slate-400 mt-1">{ms.stage}</div>
                    <div className="text-xs text-slate-500">{ms.time}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* RTMN Multiplier */}
            <div className="bg-gradient-to-r from-[#c9a227]/10 to-transparent rounded-xl p-6 border border-[#c9a227]/30">
              <h3 className="text-lg font-bold text-[#c9a227] mb-3">RTMN Ecosystem Multiplier</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[{s:'MediEarn Pharmacy Loop',d:'Every Tabib consultation generates a prescription — MediEarn fulfills it. Two revenue events from one patient visit'},{s:'Daman Insurance Lock-In',d:'Insurance verification + claims inside Tabib means patients never need to leave. Daman gets digital claims, Tabib gets stickiness'},{s:'Nuqta Coins Retention',d:'Health rewards keep patients engaged. Annual checkup = coins. Medication adherence = coins. Preventive care becomes rewarding'},{s:'Corporate via Tawzeef',d:'Tawzeef HR clients get Tabib as employee benefit. 50+ companies = thousands of users with zero consumer CAC'},{s:'Wasil delivery fleet',d:'Pharmacy delivery via Wasil fleet enables 60-minute medicine delivery — no competitor has integrated logistics'},{s:'RTMN captive users',d:'500+ RTMN employees as founding users provide immediate traction and real-world case studies'}].map(s=>(
                  <div key={s.s} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#c9a227] shrink-0 mt-0.5"/>
                    <div><div className="text-white font-medium text-xs">{s.s}</div><div className="text-xs text-slate-500">{s.d}</div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <section className="py-12 px-4 border-t border-slate-800/50"><div className="max-w-4xl mx-auto text-center"><h2 className="text-2xl font-bold text-white mb-4">Healthcare, Connected.</h2><p className="text-slate-400 mb-8">8 modules. 5,000+ providers. Teleconsult in 15 min. One platform.</p><div className="flex flex-wrap justify-center gap-4"><Link href="/daman" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-500 transition-colors"><Heart className="w-5 h-5" /> Daman Insurance</Link><Link href="/wasil" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-500 transition-colors"><Package className="w-5 h-5" /> Wasil Delivery</Link><Link href="/tawzeef" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 transition-colors"><Users className="w-5 h-5" /> Tawzeef HR</Link></div></div></section>
      <GlobalFooter />
    </div>
  );
}
