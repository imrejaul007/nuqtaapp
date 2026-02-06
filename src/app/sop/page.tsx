'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import GlobalFooter from '@/components/GlobalFooter';
import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  Check,
  CheckCircle2,
  Circle,
  Clock,
  AlertCircle,
  Users,
  Store,
  Target,
  FileText,
  Camera,
  Megaphone,
  Phone,
  Mail,
  MessageCircle,
  Settings,
  BarChart3,
  DollarSign,
  CreditCard,
  Shield,
  Zap,
  Rocket,
  Star,
  Heart,
  Gift,
  Calendar,
  Clipboard,
  ClipboardList,
  ClipboardCheck,
  UserCheck,
  UserPlus,
  Building2,
  Briefcase,
  TrendingUp,
  PieChart,
  Send,
  Upload,
  Download,
  Eye,
  Edit,
  Trash2,
  RefreshCw,
  AlertTriangle,
  Info,
  HelpCircle,
  BookOpen,
  Layers,
  Monitor,
  Smartphone,
  Globe,
  MapPin,
  Package,
  Truck,
  Receipt,
  Calculator,
  Percent,
  Award,
  Crown,
  Sparkles,
  Printer,
  QrCode,
  Image,
  Video,
  Headphones,
  LifeBuoy,
  Flag,
  Bell,
  Lock,
  Key,
  Search,
  Filter,
  List,
  Grid,
  ExternalLink
} from 'lucide-react';

// SOP Section Component
interface SOPStep {
  step: number;
  title: string;
  description: string;
  responsible: string;
  timeframe: string;
  tools?: string[];
  tips?: string[];
  checkpoints?: string[];
}

interface SOPSection {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  description: string;
  steps: SOPStep[];
  kpis?: { metric: string; target: string }[];
  escalation?: string;
}

const SOPCard = ({ sop, isExpanded, onToggle }: { sop: SOPSection; isExpanded: boolean; onToggle: () => void }) => {
  const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400' },
    green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400' },
    amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400' },
    purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400' },
    red: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400' },
    cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400' },
    pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-400' },
    orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400' },
    indigo: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/30', text: 'text-indigo-400' },
    emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400' },
  };

  const colors = colorClasses[sop.color] || colorClasses.blue;

  return (
    <div className={`rounded-xl border ${colors.border} overflow-hidden`}>
      <button
        onClick={onToggle}
        className={`w-full p-6 flex items-center justify-between ${colors.bg} hover:bg-white/5 transition-all`}
      >
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center`}>
            <sop.icon className={colors.text} size={24} />
          </div>
          <div className="text-left">
            <h3 className="text-lg font-bold text-white">{sop.title}</h3>
            <p className="text-slate-400 text-sm">{sop.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-slate-500 text-sm">{sop.steps.length} steps</span>
          {isExpanded ? (
            <ChevronDown className={colors.text} size={20} />
          ) : (
            <ChevronRight className={colors.text} size={20} />
          )}
        </div>
      </button>

      {isExpanded && (
        <div className="p-6 border-t border-white/10 space-y-6">
          {/* Steps */}
          <div className="space-y-4">
            {sop.steps.map((step, idx) => (
              <div key={idx} className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className={`w-8 h-8 rounded-full ${colors.bg} border ${colors.border} flex items-center justify-center flex-shrink-0`}>
                    <span className={`${colors.text} font-bold text-sm`}>{step.step}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-bold">{step.title}</h4>
                      <div className="flex items-center gap-3 text-xs">
                        <span className="text-slate-400 flex items-center gap-1">
                          <UserCheck size={12} /> {step.responsible}
                        </span>
                        <span className="text-slate-400 flex items-center gap-1">
                          <Clock size={12} /> {step.timeframe}
                        </span>
                      </div>
                    </div>
                    <p className="text-slate-300 text-sm mb-3">{step.description}</p>

                    {step.tools && step.tools.length > 0 && (
                      <div className="mb-3">
                        <span className="text-slate-500 text-xs">Tools:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {step.tools.map((tool, i) => (
                            <span key={i} className="px-2 py-1 bg-white/5 rounded text-xs text-slate-300">{tool}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    {step.checkpoints && step.checkpoints.length > 0 && (
                      <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                        <span className="text-green-400 text-xs font-medium flex items-center gap-1 mb-2">
                          <CheckCircle2 size={12} /> Checkpoints
                        </span>
                        <ul className="space-y-1">
                          {step.checkpoints.map((cp, i) => (
                            <li key={i} className="text-slate-300 text-xs flex items-center gap-2">
                              <Check size={10} className="text-green-400" /> {cp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {step.tips && step.tips.length > 0 && (
                      <div className="bg-amber-500/10 rounded-lg p-3 border border-amber-500/20 mt-3">
                        <span className="text-amber-400 text-xs font-medium flex items-center gap-1 mb-2">
                          <Zap size={12} /> Pro Tips
                        </span>
                        <ul className="space-y-1">
                          {step.tips.map((tip, i) => (
                            <li key={i} className="text-slate-300 text-xs">• {tip}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* KPIs */}
          {sop.kpis && sop.kpis.length > 0 && (
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                <BarChart3 size={16} /> Success Metrics
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {sop.kpis.map((kpi, idx) => (
                  <div key={idx} className={`${colors.bg} rounded-lg p-3 border ${colors.border}`}>
                    <div className={`${colors.text} font-bold text-lg`}>{kpi.target}</div>
                    <div className="text-slate-400 text-xs">{kpi.metric}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Escalation */}
          {sop.escalation && (
            <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
              <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2">
                <AlertTriangle size={16} /> Escalation Path
              </h4>
              <p className="text-slate-300 text-sm">{sop.escalation}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// All SOPs Data
const allSOPs: Record<string, SOPSection[]> = {
  'merchant-acquisition': [
    {
      id: 'lead-generation',
      title: 'Lead Generation & Prospecting',
      icon: Target,
      color: 'blue',
      description: 'How to identify and qualify potential merchant partners',
      steps: [
        {
          step: 1,
          title: 'Territory Research',
          description: 'Research assigned area using Google Maps, Zomato, TripAdvisor to identify potential merchants. Focus on high-traffic areas, malls, and popular neighborhoods.',
          responsible: 'Sales Rep',
          timeframe: '2-3 hours',
          tools: ['Google Maps', 'Zomato', 'Instagram', 'Google Sheets'],
          checkpoints: ['Minimum 50 prospects per area', 'Categorized by business type', 'Contact info collected'],
          tips: ['Check Instagram for engaged businesses', 'Look for businesses with good reviews but limited online presence']
        },
        {
          step: 2,
          title: 'Lead Qualification',
          description: 'Score leads based on: foot traffic, avg ticket size, current loyalty program, social media presence, and decision-maker accessibility.',
          responsible: 'Sales Rep',
          timeframe: '30 min per lead',
          tools: ['Lead Scoring Sheet', 'CRM'],
          checkpoints: ['Lead score assigned (1-10)', 'Decision maker identified', 'Best contact method noted']
        },
        {
          step: 3,
          title: 'Initial Outreach',
          description: 'Make first contact via preferred channel (visit, call, Instagram DM, WhatsApp). Introduce Nuqta briefly and request meeting.',
          responsible: 'Sales Rep',
          timeframe: '5-10 min per lead',
          tools: ['WhatsApp Business', 'Phone', 'Email templates'],
          tips: ['Visit during non-peak hours (2-5pm)', 'Ask for the owner/manager by name', 'Have business card ready']
        },
        {
          step: 4,
          title: 'Meeting Scheduling',
          description: 'Book discovery meeting within 48 hours. Send calendar invite with agenda. Prepare merchant-specific pitch deck.',
          responsible: 'Sales Rep',
          timeframe: '10 min',
          tools: ['Google Calendar', 'Pitch Deck Template'],
          checkpoints: ['Meeting confirmed', 'Reminder sent', 'Pitch customized to business type']
        }
      ],
      kpis: [
        { metric: 'Leads/Week', target: '50+' },
        { metric: 'Qualified Rate', target: '40%' },
        { metric: 'Meeting Book Rate', target: '25%' },
        { metric: 'Response Time', target: '<2 hrs' }
      ],
      escalation: 'If unable to reach decision maker after 3 attempts, escalate to Sales Manager for alternative approach or partnership introduction.'
    },
    {
      id: 'pitch-meeting',
      title: 'Pitch Meeting & Presentation',
      icon: Briefcase,
      color: 'purple',
      description: 'Conducting effective merchant pitch meetings',
      steps: [
        {
          step: 1,
          title: 'Pre-Meeting Prep',
          description: 'Review merchant profile, prepare customized ROI calculations, print materials, charge devices, arrive 10 min early.',
          responsible: 'Sales Rep',
          timeframe: '30 min before',
          tools: ['Category Playbook', 'ROI Calculator', 'Demo App', 'Printed Materials'],
          checkpoints: ['ROI calculated', 'Demo app working', 'Materials packed', 'Outfit professional']
        },
        {
          step: 2,
          title: 'Discovery Questions',
          description: 'Ask about current challenges, slow periods, customer acquisition costs, existing loyalty programs, marketing spend.',
          responsible: 'Sales Rep',
          timeframe: '10-15 min',
          tips: ['Listen more than talk', 'Take notes', 'Identify pain points for later reference']
        },
        {
          step: 3,
          title: 'Present Solution',
          description: 'Show how Nuqta solves their specific problems. Use category playbook pitch. Demo the app. Share case studies from similar businesses.',
          responsible: 'Sales Rep',
          timeframe: '15-20 min',
          tools: ['Pitch Deck', 'Demo Merchant App', 'Case Studies'],
          tips: ['Focus on their pain points', 'Use "You" more than "We"', 'Show competitor examples']
        },
        {
          step: 4,
          title: 'ROI Presentation',
          description: 'Walk through specific ROI calculations. Show potential revenue increase, customer retention improvement, and marketing value.',
          responsible: 'Sales Rep',
          timeframe: '5-10 min',
          tools: ['ROI Calculator', 'Package Comparison Sheet']
        },
        {
          step: 5,
          title: 'Handle Objections',
          description: 'Use objection handling scripts from playbook. Address concerns about commission, competition, and implementation.',
          responsible: 'Sales Rep',
          timeframe: '5-10 min',
          tools: ['Objection Handling Guide'],
          tips: ['Never argue', 'Acknowledge concern first', 'Use "Feel, Felt, Found" method']
        },
        {
          step: 6,
          title: 'Close or Next Steps',
          description: 'If ready: collect documents, start onboarding. If not ready: schedule follow-up within 48 hours with specific next action.',
          responsible: 'Sales Rep',
          timeframe: '5 min',
          checkpoints: ['Decision made OR follow-up scheduled', 'Contact info confirmed', 'Next action clear']
        }
      ],
      kpis: [
        { metric: 'Meeting Show Rate', target: '80%' },
        { metric: 'Same-Day Close', target: '30%' },
        { metric: 'Follow-Up Close', target: '40%' },
        { metric: 'Avg Meeting Time', target: '45 min' }
      ],
      escalation: 'For enterprise/chain merchants, involve Sales Manager or founder for second meeting if initial pitch shows strong interest.'
    },
    {
      id: 'contract-signing',
      title: 'Contract & Agreement Processing',
      icon: FileText,
      color: 'green',
      description: 'Document collection and contract execution process',
      steps: [
        {
          step: 1,
          title: 'Document Collection',
          description: 'Collect: Trade License, Emirates ID (owner), Passport copy, Bank account details. Verify all documents are valid and not expired.',
          responsible: 'Sales Rep',
          timeframe: 'During meeting or within 24h',
          tools: ['Document Checklist', 'Scanner/Phone Camera'],
          checkpoints: ['Trade license valid', 'Emirates ID valid', 'Bank details complete', 'All docs readable']
        },
        {
          step: 2,
          title: 'Contract Preparation',
          description: 'Fill merchant details in contract template. Select correct package tier. Calculate commission rate based on Engine type.',
          responsible: 'Sales Rep',
          timeframe: '15 min',
          tools: ['Contract Template', 'Package Calculator'],
          checkpoints: ['Merchant name matches license', 'Package correct', 'Commission rate correct', 'All fields filled']
        },
        {
          step: 3,
          title: 'Contract Review',
          description: 'Walk merchant through key terms: commission structure, payment schedule, marketing commitments, cancellation policy.',
          responsible: 'Sales Rep',
          timeframe: '10 min',
          tips: ['Highlight benefits, not restrictions', 'Explain in simple terms', 'Answer all questions honestly']
        },
        {
          step: 4,
          title: 'Digital Signature',
          description: 'Send contract via DocuSign/PandaDoc for digital signature. Ensure merchant signs all required pages.',
          responsible: 'Sales Rep',
          timeframe: '5 min',
          tools: ['DocuSign', 'PandaDoc'],
          checkpoints: ['All pages signed', 'Date correct', 'Signature valid']
        },
        {
          step: 5,
          title: 'Handover to Onboarding',
          description: 'Create merchant record in system. Upload all documents. Notify Onboarding team. Schedule kickoff call within 48 hours.',
          responsible: 'Sales Rep',
          timeframe: '30 min',
          tools: ['CRM', 'Slack #new-merchants'],
          checkpoints: ['Merchant in CRM', 'Docs uploaded', 'Onboarding notified', 'Kickoff scheduled']
        }
      ],
      kpis: [
        { metric: 'Doc Collection', target: '<24 hrs' },
        { metric: 'Contract Turnaround', target: 'Same day' },
        { metric: 'Handover Time', target: '<2 hrs' },
        { metric: 'Error Rate', target: '<5%' }
      ],
      escalation: 'If merchant disputes terms or requests custom modifications, escalate to Sales Manager before signing. Do not modify standard contract without approval.'
    }
  ],
  'merchant-onboarding': [
    {
      id: 'kickoff',
      title: 'Merchant Kickoff & Setup',
      icon: Rocket,
      color: 'amber',
      description: 'First 48 hours after contract signing',
      steps: [
        {
          step: 1,
          title: 'Welcome Call',
          description: 'Call merchant to welcome them, introduce their dedicated Account Manager, and set expectations for onboarding timeline.',
          responsible: 'Account Manager',
          timeframe: 'Within 4 hours of contract',
          tools: ['Phone', 'Welcome Script'],
          checkpoints: ['Merchant welcomed', 'AM introduced', 'Timeline shared', 'Questions answered']
        },
        {
          step: 2,
          title: 'System Account Creation',
          description: 'Create merchant account in Nuqta system. Set up merchant portal access. Configure package tier and commission settings.',
          responsible: 'Operations',
          timeframe: '2 hours',
          tools: ['Admin Portal', 'Merchant Dashboard'],
          checkpoints: ['Account created', 'Package configured', 'Portal access sent', 'Login tested']
        },
        {
          step: 3,
          title: 'POS Integration',
          description: 'Coordinate with merchant on POS system. Schedule technician visit if needed. Test transaction flow.',
          responsible: 'Tech Support',
          timeframe: '24-48 hours',
          tools: ['POS Integration Guide', 'Test Transactions'],
          checkpoints: ['POS identified', 'Integration type confirmed', 'Test successful', 'Staff trained']
        },
        {
          step: 4,
          title: 'Menu/Catalog Upload',
          description: 'Collect menu/product catalog from merchant. Format and upload to system. Add pricing and descriptions.',
          responsible: 'Content Team',
          timeframe: '24 hours',
          tools: ['Menu Template', 'Photo Guidelines'],
          checkpoints: ['Menu received', 'Formatted correctly', 'Pricing accurate', 'Photos added'],
          tips: ['Request high-res photos', 'Get bestseller recommendations', 'Include dietary info']
        },
        {
          step: 5,
          title: 'Marketing Materials Delivery',
          description: 'Prepare and deliver QR standees, table tents, window stickers, counter cards based on package tier.',
          responsible: 'Operations',
          timeframe: '3-5 days',
          tools: ['Material Order Form', 'Delivery Tracker'],
          checkpoints: ['Order placed', 'Materials produced', 'Delivery scheduled', 'Installation confirmed']
        }
      ],
      kpis: [
        { metric: 'Welcome Call', target: '<4 hrs' },
        { metric: 'Account Setup', target: '<24 hrs' },
        { metric: 'First Transaction', target: '<7 days' },
        { metric: 'Materials Delivery', target: '<5 days' }
      ],
      escalation: 'If POS integration faces technical issues, escalate to CTO within 24 hours. If merchant unresponsive for 48 hours, escalate to Sales Manager.'
    },
    {
      id: 'content-creation',
      title: 'Content Creation & Photography',
      icon: Camera,
      color: 'pink',
      description: 'Creating marketing content for merchant',
      steps: [
        {
          step: 1,
          title: 'Content Planning',
          description: 'Review merchant business, identify content needs, create 30-day content calendar including posts, stories, and reels.',
          responsible: 'Content Manager',
          timeframe: 'Day 1-2',
          tools: ['Content Calendar Template', 'Brand Guidelines'],
          checkpoints: ['Business analyzed', 'Calendar created', 'Themes identified', 'Merchant approved']
        },
        {
          step: 2,
          title: 'Photo/Video Shoot Scheduling',
          description: 'Schedule on-site photography session. Coordinate with merchant on timing, products to feature, and space preparation.',
          responsible: 'Content Manager',
          timeframe: 'Day 3-5',
          tools: ['Booking System', 'Shot List Template'],
          tips: ['Schedule during good lighting hours', 'Request bestsellers to be available', 'Prep merchant on day expectations']
        },
        {
          step: 3,
          title: 'Content Production',
          description: 'Execute photo/video shoot. Capture: exterior, interior, products, staff, process shots, customer testimonials.',
          responsible: 'Photographer/Videographer',
          timeframe: '2-4 hours on-site',
          tools: ['Camera Equipment', 'Lighting Kit', 'Shot List'],
          checkpoints: ['Exterior shots', 'Interior ambiance', 'Product hero shots', 'Process/making shots', 'Staff photos']
        },
        {
          step: 4,
          title: 'Post-Production',
          description: 'Edit photos and videos. Apply brand colors and style. Create multiple formats for different platforms.',
          responsible: 'Editor',
          timeframe: '2-3 days',
          tools: ['Lightroom', 'Premiere Pro', 'Canva'],
          checkpoints: ['Photos edited', 'Videos cut', 'Captions written', 'Hashtags prepared']
        },
        {
          step: 5,
          title: 'Content Approval',
          description: 'Send content batch to merchant for review. Get approval or revisions. Finalize content library.',
          responsible: 'Content Manager',
          timeframe: '24-48 hours',
          tools: ['Google Drive', 'WhatsApp'],
          checkpoints: ['Content sent', 'Feedback received', 'Revisions done', 'Final approval']
        }
      ],
      kpis: [
        { metric: 'Shoot Completion', target: '<7 days' },
        { metric: 'Deliverables', target: '50+ assets' },
        { metric: 'Approval Rate', target: '>90%' },
        { metric: 'Content Quality', target: '4.5/5' }
      ],
      escalation: 'If merchant repeatedly delays shoot or approval, escalate to Account Manager. If quality concerns, involve Creative Director.'
    },
    {
      id: 'go-live',
      title: 'Go-Live & Launch',
      icon: Zap,
      color: 'emerald',
      description: 'Making merchant live on Nuqta platform',
      steps: [
        {
          step: 1,
          title: 'Pre-Launch Checklist',
          description: 'Verify all systems ready: profile complete, menu uploaded, POS working, materials installed, staff trained.',
          responsible: 'Account Manager',
          timeframe: '1 day before launch',
          tools: ['Go-Live Checklist'],
          checkpoints: ['Profile 100%', 'Menu live', 'POS tested', 'Staff trained', 'Materials in place']
        },
        {
          step: 2,
          title: 'Soft Launch',
          description: 'Enable merchant on platform in limited mode. Process 5-10 test transactions. Resolve any issues.',
          responsible: 'Account Manager + Tech',
          timeframe: '1 day',
          tools: ['Admin Portal', 'Test Account'],
          checkpoints: ['Profile visible', 'Transactions working', 'Cashback calculated', 'Receipt generated']
        },
        {
          step: 3,
          title: 'Full Launch',
          description: 'Enable full visibility. Publish launch post on Nuqta social. Send push notification to nearby users.',
          responsible: 'Marketing + AM',
          timeframe: 'Launch day',
          tools: ['Social Media', 'Push Notification System'],
          checkpoints: ['Full visibility on', 'Launch post live', 'Push sent', 'Featured placement active']
        },
        {
          step: 4,
          title: 'Launch Monitoring',
          description: 'Monitor first 24-48 hours closely. Track transactions, user feedback, any issues. Be on standby for merchant calls.',
          responsible: 'Account Manager',
          timeframe: '48 hours',
          tools: ['Analytics Dashboard', 'Support Queue'],
          tips: ['Check in with merchant 3x on launch day', 'Respond to issues within 15 min', 'Celebrate first transactions with merchant']
        },
        {
          step: 5,
          title: 'Post-Launch Review',
          description: 'Call merchant after 1 week. Review metrics, gather feedback, address concerns, plan first month activities.',
          responsible: 'Account Manager',
          timeframe: 'Day 7',
          tools: ['Performance Report', 'Feedback Form'],
          checkpoints: ['Metrics reviewed', 'Feedback collected', 'Issues resolved', 'Month 1 plan confirmed']
        }
      ],
      kpis: [
        { metric: 'Launch Success', target: '100%' },
        { metric: 'First Week Trans', target: '50+' },
        { metric: 'Merchant Satisfaction', target: '4.5/5' },
        { metric: 'Issue Resolution', target: '<2 hrs' }
      ],
      escalation: 'Any critical technical issues blocking launch go directly to CTO. Merchant complaints about experience go to Head of Operations.'
    }
  ],
  'marketing-execution': [
    {
      id: 'social-media',
      title: 'Social Media Management',
      icon: Megaphone,
      color: 'purple',
      description: 'Managing merchant social media presence',
      steps: [
        {
          step: 1,
          title: 'Account Access',
          description: 'Get access to merchant Instagram/TikTok/Facebook business accounts or create if needed.',
          responsible: 'Social Media Manager',
          timeframe: 'Day 1',
          tools: ['Account Request Form'],
          checkpoints: ['Login credentials received', 'Admin access granted', 'Bio updated', 'Profile optimized']
        },
        {
          step: 2,
          title: 'Weekly Content Planning',
          description: 'Plan next week content every Friday. Include: 3 feed posts, 7 stories, 2 reels minimum.',
          responsible: 'Social Media Manager',
          timeframe: 'Every Friday',
          tools: ['Content Calendar', 'Scheduling Tool'],
          checkpoints: ['Posts scheduled', 'Stories ready', 'Reels edited', 'Captions written']
        },
        {
          step: 3,
          title: 'Daily Posting',
          description: 'Publish content at optimal times. Post stories throughout the day. Engage with comments and DMs.',
          responsible: 'Social Media Manager',
          timeframe: 'Daily (1 hour)',
          tools: ['Later/Hootsuite', 'Instagram'],
          tips: ['Best times: 12pm, 6pm, 9pm', 'Reply to all comments within 2 hours', 'Use location tags']
        },
        {
          step: 4,
          title: 'Community Engagement',
          description: 'Respond to all comments and DMs. Like and comment on tagged posts. Share user-generated content.',
          responsible: 'Social Media Manager',
          timeframe: 'Daily (30 min)',
          tools: ['Instagram DM', 'Story Reshare'],
          checkpoints: ['All DMs answered', 'Comments replied', 'UGC reshared', 'Mentions tracked']
        },
        {
          step: 5,
          title: 'Weekly Reporting',
          description: 'Generate weekly social media report. Track: followers, engagement, reach, best performing content.',
          responsible: 'Social Media Manager',
          timeframe: 'Every Monday',
          tools: ['Instagram Insights', 'Report Template'],
          checkpoints: ['Metrics captured', 'Insights noted', 'Recommendations made', 'Report sent']
        }
      ],
      kpis: [
        { metric: 'Posts/Week', target: '12+' },
        { metric: 'Engagement Rate', target: '>5%' },
        { metric: 'Follower Growth', target: '10%/mo' },
        { metric: 'Response Time', target: '<2 hrs' }
      ],
      escalation: 'Negative comments or PR issues escalate immediately to Marketing Manager. Account access issues go to merchant + AM.'
    },
    {
      id: 'paid-ads',
      title: 'Paid Advertising Management',
      icon: DollarSign,
      color: 'green',
      description: 'Running paid ad campaigns for merchants',
      steps: [
        {
          step: 1,
          title: 'Ad Account Setup',
          description: 'Set up Meta Business Manager, connect merchant pages, configure pixel tracking, set up payment method.',
          responsible: 'Performance Marketer',
          timeframe: 'Day 1-2',
          tools: ['Meta Business Manager', 'Google Ads'],
          checkpoints: ['Business Manager created', 'Pages connected', 'Pixel installed', 'Payment configured']
        },
        {
          step: 2,
          title: 'Audience Creation',
          description: 'Create target audiences: location-based (5km radius), interest-based, lookalike from existing customers.',
          responsible: 'Performance Marketer',
          timeframe: '2 hours',
          tools: ['Audience Manager', 'Customer Data'],
          tips: ['Start with 5km radius', 'Layer interests carefully', 'Create separate audiences for testing']
        },
        {
          step: 3,
          title: 'Creative Production',
          description: 'Create ad creatives: static images, carousel, video ads. Write compelling copy with clear CTA.',
          responsible: 'Designer + Copywriter',
          timeframe: '2-3 days',
          tools: ['Canva', 'Figma', 'Premiere Pro'],
          checkpoints: ['3+ image variants', '2+ video variants', 'Copy variations', 'CTA tested']
        },
        {
          step: 4,
          title: 'Campaign Launch',
          description: 'Set up campaign structure, set budget, launch with A/B testing. Monitor initial performance closely.',
          responsible: 'Performance Marketer',
          timeframe: '1 hour + monitoring',
          tools: ['Ads Manager', 'Analytics'],
          tips: ['Start with low daily budget', 'Test multiple audiences', 'Don\'t optimize for 48 hours']
        },
        {
          step: 5,
          title: 'Optimization',
          description: 'Review performance daily. Pause underperformers, scale winners, refresh creatives weekly.',
          responsible: 'Performance Marketer',
          timeframe: 'Daily (30 min)',
          tools: ['Ads Manager', 'Reporting Dashboard'],
          checkpoints: ['CTR monitored', 'CPA tracked', 'Budget adjusted', 'Creatives refreshed']
        }
      ],
      kpis: [
        { metric: 'ROAS', target: '>3x' },
        { metric: 'CPA', target: '<AED 15' },
        { metric: 'CTR', target: '>2%' },
        { metric: 'Budget Utilization', target: '>95%' }
      ],
      escalation: 'If CPA exceeds target by 2x for 3 days, escalate to Marketing Manager for strategy review. Account suspension issues go to Meta support immediately.'
    },
    {
      id: 'influencer',
      title: 'Influencer Marketing',
      icon: Star,
      color: 'pink',
      description: 'Managing influencer partnerships and barter deals',
      steps: [
        {
          step: 1,
          title: 'Influencer Identification',
          description: 'Research and shortlist relevant influencers based on: niche, followers, engagement rate, location, past brand work.',
          responsible: 'Influencer Manager',
          timeframe: '3-5 hours',
          tools: ['Influencer Database', 'Instagram', 'HypeAuditor'],
          checkpoints: ['10+ candidates', 'Engagement verified', 'Content quality checked', 'Audience authentic']
        },
        {
          step: 2,
          title: 'Outreach & Negotiation',
          description: 'Contact influencers via DM/email. Propose collaboration, negotiate terms (barter vs paid), agree on deliverables.',
          responsible: 'Influencer Manager',
          timeframe: '2-3 days',
          tools: ['Email Templates', 'Contract Template'],
          tips: ['Start with barter offers', 'Be clear on deliverables', 'Get usage rights in writing']
        },
        {
          step: 3,
          title: 'Brief & Coordination',
          description: 'Send detailed brief: key messages, hashtags, mentions, do\'s and don\'ts. Schedule visit date.',
          responsible: 'Influencer Manager',
          timeframe: '1 day before',
          tools: ['Creative Brief Template', 'Calendar'],
          checkpoints: ['Brief sent', 'Visit scheduled', 'Merchant notified', 'Special menu confirmed']
        },
        {
          step: 4,
          title: 'Content Execution',
          description: 'Coordinate influencer visit. Ensure smooth experience. Get content for approval before posting.',
          responsible: 'Influencer Manager + AM',
          timeframe: 'Visit day + 24h',
          tools: ['WhatsApp Group', 'Content Approval'],
          checkpoints: ['Visit completed', 'Content captured', 'Draft reviewed', 'Merchant approved']
        },
        {
          step: 5,
          title: 'Performance Tracking',
          description: 'Track posting, engagement, reach, and any promo code usage. Report ROI to merchant.',
          responsible: 'Influencer Manager',
          timeframe: '48h after posting',
          tools: ['Analytics', 'Promo Code Tracker'],
          checkpoints: ['Post live', 'Metrics captured', 'ROI calculated', 'Report sent']
        }
      ],
      kpis: [
        { metric: 'Collabs/Month', target: '5+ per merchant' },
        { metric: 'Avg Reach', target: '50K+' },
        { metric: 'Engagement', target: '>5%' },
        { metric: 'Barter Ratio', target: '>70%' }
      ],
      escalation: 'If influencer doesn\'t post as agreed, escalate to Marketing Manager for follow-up. Negative/inappropriate content requires immediate merchant notification.'
    }
  ],
  'customer-support': [
    {
      id: 'merchant-support',
      title: 'Merchant Support Handling',
      icon: Headphones,
      color: 'cyan',
      description: 'Responding to merchant queries and issues',
      steps: [
        {
          step: 1,
          title: 'Ticket Reception',
          description: 'Receive merchant query via WhatsApp, email, or phone. Log in support system with category and priority.',
          responsible: 'Support Agent',
          timeframe: 'Immediate',
          tools: ['Zendesk/Freshdesk', 'WhatsApp Business'],
          checkpoints: ['Query logged', 'Category assigned', 'Priority set', 'Auto-response sent']
        },
        {
          step: 2,
          title: 'Initial Response',
          description: 'Acknowledge receipt within SLA. Gather additional information if needed. Set expectation for resolution.',
          responsible: 'Support Agent',
          timeframe: 'Based on package tier',
          tools: ['Response Templates', 'CRM'],
          tips: ['Free tier: 48h | Basic: 24h | Golden: 4h | Diamond: 1h']
        },
        {
          step: 3,
          title: 'Issue Investigation',
          description: 'Research issue in system. Check transaction logs, settings, recent changes. Identify root cause.',
          responsible: 'Support Agent',
          timeframe: '15-30 min',
          tools: ['Admin Dashboard', 'Transaction Logs', 'Knowledge Base'],
          checkpoints: ['Logs reviewed', 'Root cause found', 'Solution identified']
        },
        {
          step: 4,
          title: 'Resolution',
          description: 'Implement fix or guide merchant through solution. Test to confirm issue resolved. Update ticket.',
          responsible: 'Support Agent',
          timeframe: 'Varies',
          tools: ['Admin Tools', 'Screen Share'],
          checkpoints: ['Fix applied', 'Merchant confirmed', 'Ticket updated']
        },
        {
          step: 5,
          title: 'Follow-Up & Close',
          description: 'Follow up after 24 hours to ensure continued resolution. Request feedback. Close ticket.',
          responsible: 'Support Agent',
          timeframe: '24h after resolution',
          tools: ['CSAT Survey', 'Support System'],
          checkpoints: ['Follow-up done', 'Feedback received', 'Ticket closed', 'Documentation updated']
        }
      ],
      kpis: [
        { metric: 'First Response', target: 'Per SLA' },
        { metric: 'Resolution Time', target: '<24h' },
        { metric: 'CSAT Score', target: '>4.5/5' },
        { metric: 'First Contact Res', target: '>70%' }
      ],
      escalation: 'Technical issues beyond L1 capability go to Tech team. Billing/commission disputes go to Finance. Churn risk goes to Account Manager immediately.'
    },
    {
      id: 'complaint-handling',
      title: 'Complaint & Escalation Management',
      icon: AlertTriangle,
      color: 'red',
      description: 'Handling merchant complaints and escalations',
      steps: [
        {
          step: 1,
          title: 'Complaint Receipt',
          description: 'Receive complaint, acknowledge immediately. Log as high priority. Notify relevant stakeholders.',
          responsible: 'Support Manager',
          timeframe: 'Within 1 hour',
          tools: ['Escalation Log', 'Slack Alert'],
          checkpoints: ['Logged as priority', 'Stakeholders notified', 'Owner assigned']
        },
        {
          step: 2,
          title: 'Investigation',
          description: 'Gather all facts from merchant and internal records. Interview relevant team members. Document timeline.',
          responsible: 'Support Manager',
          timeframe: '2-4 hours',
          tools: ['Investigation Template', 'Logs'],
          checkpoints: ['Merchant statement', 'Internal records', 'Timeline documented', 'Root cause identified']
        },
        {
          step: 3,
          title: 'Resolution Plan',
          description: 'Develop resolution plan. Determine compensation if applicable. Get approval from relevant authority.',
          responsible: 'Support Manager + Head',
          timeframe: '2 hours',
          tools: ['Compensation Guidelines', 'Approval Matrix'],
          tips: ['Focus on fixing root cause', 'Compensation should be proportionate', 'Document everything']
        },
        {
          step: 4,
          title: 'Communication',
          description: 'Call merchant directly. Explain findings, apologize sincerely, present resolution. Confirm acceptance.',
          responsible: 'Support Manager/AM',
          timeframe: 'Same day',
          tools: ['Phone', 'Email Confirmation'],
          checkpoints: ['Merchant called', 'Resolution presented', 'Acceptance confirmed', 'Written follow-up sent']
        },
        {
          step: 5,
          title: 'Prevention',
          description: 'Document learnings. Update processes to prevent recurrence. Share with team. Close complaint.',
          responsible: 'Support Manager',
          timeframe: '48 hours',
          tools: ['Post-Mortem Template', 'Process Update'],
          checkpoints: ['Learnings documented', 'Process updated', 'Team informed', 'Case closed']
        }
      ],
      kpis: [
        { metric: 'Response Time', target: '<1 hr' },
        { metric: 'Resolution Time', target: '<24 hrs' },
        { metric: 'Repeat Complaints', target: '<5%' },
        { metric: 'Satisfaction', target: '>80%' }
      ],
      escalation: 'Legal threats or media/social escalation immediately notify Founder/CEO. Financial disputes >AED 10K require Finance Director approval.'
    }
  ],
  'finance-operations': [
    {
      id: 'settlement',
      title: 'Merchant Settlement Process',
      icon: CreditCard,
      color: 'emerald',
      description: 'Weekly merchant payment processing',
      steps: [
        {
          step: 1,
          title: 'Transaction Reconciliation',
          description: 'Export all merchant transactions for settlement period. Reconcile against POS/payment records. Flag discrepancies.',
          responsible: 'Finance Team',
          timeframe: 'Every Sunday',
          tools: ['Admin Portal', 'Excel', 'Bank Statements'],
          checkpoints: ['All transactions exported', 'Amounts matched', 'Discrepancies flagged', 'Commission calculated']
        },
        {
          step: 2,
          title: 'Commission Calculation',
          description: 'Calculate commission for each merchant based on tier and transaction volume. Apply any promotional rates.',
          responsible: 'Finance Team',
          timeframe: '2-3 hours',
          tools: ['Settlement Calculator', 'Commission Rules'],
          checkpoints: ['Rates verified', 'Promos applied', 'Net amount calculated', 'Reviewed by second person']
        },
        {
          step: 3,
          title: 'Settlement Report Generation',
          description: 'Generate individual settlement reports for each merchant. Include transaction details and commission breakdown.',
          responsible: 'Finance Team',
          timeframe: '1 hour',
          tools: ['Report Generator', 'Email System'],
          checkpoints: ['Reports generated', 'Amounts verified', 'Format correct']
        },
        {
          step: 4,
          title: 'Payment Processing',
          description: 'Prepare bank transfer file. Process payments via corporate banking. Retain proof of transfer.',
          responsible: 'Finance Manager',
          timeframe: 'Monday-Tuesday',
          tools: ['Bank Portal', 'Payment File'],
          checkpoints: ['Transfer file prepared', 'Approvals obtained', 'Transfers executed', 'Proofs saved']
        },
        {
          step: 5,
          title: 'Notification & Confirmation',
          description: 'Send settlement notification to each merchant with report and payment proof. Update records.',
          responsible: 'Finance Team',
          timeframe: 'Within 24h of payment',
          tools: ['Email/WhatsApp', 'Merchant Portal'],
          checkpoints: ['Merchants notified', 'Reports attached', 'Portal updated', 'Queries addressed']
        }
      ],
      kpis: [
        { metric: 'Settlement Cycle', target: 'T+7 days' },
        { metric: 'Accuracy', target: '99.9%' },
        { metric: 'On-Time Payment', target: '100%' },
        { metric: 'Query Rate', target: '<2%' }
      ],
      escalation: 'Payment failures or bank issues escalate to CFO immediately. Merchant disputes over amounts escalate to Finance Manager with full documentation.'
    },
    {
      id: 'invoicing',
      title: 'Package Fee Invoicing',
      icon: Receipt,
      color: 'blue',
      description: 'Monthly package subscription billing',
      steps: [
        {
          step: 1,
          title: 'Invoice Preparation',
          description: 'Generate invoices for all active package subscriptions. Include package details, period, and any add-ons.',
          responsible: 'Finance Team',
          timeframe: '1st of each month',
          tools: ['Invoicing System', 'Merchant Database'],
          checkpoints: ['All active merchants', 'Correct packages', 'VAT calculated', 'Invoice numbers assigned']
        },
        {
          step: 2,
          title: 'Invoice Review',
          description: 'Review all invoices for accuracy. Check for new merchants, upgrades, or cancellations. Apply prorated amounts.',
          responsible: 'Finance Manager',
          timeframe: '2nd of month',
          tools: ['Invoice Review Checklist'],
          checkpoints: ['Amounts verified', 'Changes applied', 'Approved for sending']
        },
        {
          step: 3,
          title: 'Invoice Distribution',
          description: 'Send invoices via email and update merchant portal. Include payment details and due date.',
          responsible: 'Finance Team',
          timeframe: '3rd of month',
          tools: ['Email System', 'Merchant Portal'],
          checkpoints: ['Emails sent', 'Portal updated', 'Delivery confirmed']
        },
        {
          step: 4,
          title: 'Payment Collection',
          description: 'Monitor payments against invoices. Send reminders at Day 7, 14, 21. Escalate overdue accounts.',
          responsible: 'Finance Team',
          timeframe: 'Throughout month',
          tools: ['Payment Tracker', 'Reminder Templates'],
          tips: ['Reminder Day 7: Friendly | Day 14: Firm | Day 21: Final warning']
        },
        {
          step: 5,
          title: 'Reconciliation',
          description: 'Match received payments to invoices. Update records. Generate collection report. Handle discrepancies.',
          responsible: 'Finance Team',
          timeframe: 'End of month',
          tools: ['Bank Reconciliation', 'AR Report'],
          checkpoints: ['Payments matched', 'AR updated', 'Report generated', 'Discrepancies resolved']
        }
      ],
      kpis: [
        { metric: 'Invoice Accuracy', target: '100%' },
        { metric: 'On-Time Payment', target: '>90%' },
        { metric: 'Collection Rate', target: '>95%' },
        { metric: 'DSO', target: '<30 days' }
      ],
      escalation: 'Non-payment after 30 days triggers service review with Head of Operations. Non-payment after 60 days may result in service suspension (requires CFO approval).'
    }
  ],
  'tech-operations': [
    {
      id: 'pos-installation',
      title: 'POS Installation & Setup',
      icon: Monitor,
      color: 'blue',
      description: 'Installing and configuring merchant POS systems',
      steps: [
        {
          step: 1,
          title: 'Pre-Installation Assessment',
          description: 'Contact merchant to understand current POS system, internet connectivity, and hardware requirements. Schedule installation visit.',
          responsible: 'Tech Support',
          timeframe: 'Day 1',
          tools: ['POS Compatibility List', 'Site Assessment Form'],
          checkpoints: ['POS type identified', 'Internet confirmed', 'Visit scheduled', 'Requirements listed']
        },
        {
          step: 2,
          title: 'Hardware Preparation',
          description: 'Prepare necessary hardware: QR scanners, tablets, receipt printers. Test all equipment before visit.',
          responsible: 'Tech Support',
          timeframe: '1 day before visit',
          tools: ['Hardware Inventory', 'Test Checklist'],
          checkpoints: ['Hardware packed', 'All items tested', 'Cables included', 'Backup devices ready']
        },
        {
          step: 3,
          title: 'On-Site Installation',
          description: 'Install Nuqta integration on POS. Configure settings, connect hardware, test network connectivity.',
          responsible: 'Tech Specialist',
          timeframe: '2-4 hours on-site',
          tools: ['Installation Guide', 'Configuration Sheet'],
          checkpoints: ['Software installed', 'Hardware connected', 'Network stable', 'Settings configured']
        },
        {
          step: 4,
          title: 'Testing & Validation',
          description: 'Process 5 test transactions. Verify cashback calculation, receipt printing, and data sync to dashboard.',
          responsible: 'Tech Specialist',
          timeframe: '30 min',
          tools: ['Test Account', 'Validation Checklist'],
          checkpoints: ['Transactions successful', 'Cashback correct', 'Receipt printing', 'Dashboard sync']
        },
        {
          step: 5,
          title: 'Staff Training',
          description: 'Train cashiers and managers on processing Nuqta transactions. Provide quick reference guide and support contacts.',
          responsible: 'Tech Specialist',
          timeframe: '30-45 min',
          tools: ['Training Guide', 'Quick Reference Card'],
          tips: ['Train at least 2 staff members', 'Do hands-on practice', 'Leave printed materials']
        }
      ],
      kpis: [
        { metric: 'Installation Time', target: '<4 hrs' },
        { metric: 'First-Time Success', target: '>95%' },
        { metric: 'Training Completion', target: '100%' },
        { metric: 'Post-Install Issues', target: '<5%' }
      ],
      escalation: 'If POS incompatible, escalate to CTO for alternative solution. If merchant network issues, coordinate with their IT provider.'
    },
    {
      id: 'pos-troubleshooting',
      title: 'POS Troubleshooting',
      icon: Settings,
      color: 'orange',
      description: 'Resolving POS and transaction issues',
      steps: [
        {
          step: 1,
          title: 'Issue Identification',
          description: 'Gather detailed information: error messages, when started, what changed, frequency. Check system status.',
          responsible: 'Tech Support L1',
          timeframe: '5-10 min',
          tools: ['Ticket System', 'System Status Dashboard'],
          checkpoints: ['Error documented', 'Timeline noted', 'Impact assessed', 'System status checked']
        },
        {
          step: 2,
          title: 'Remote Diagnosis',
          description: 'Access merchant system remotely. Check logs, configuration, connectivity. Identify root cause.',
          responsible: 'Tech Support L1',
          timeframe: '15-30 min',
          tools: ['Remote Access Tool', 'Log Viewer', 'Diagnostic Scripts'],
          tips: ['Check internet first', 'Review recent changes', 'Look for patterns in errors']
        },
        {
          step: 3,
          title: 'Apply Fix',
          description: 'Implement solution: restart services, update configuration, clear cache, or push software update.',
          responsible: 'Tech Support L1/L2',
          timeframe: '15-60 min',
          tools: ['Admin Console', 'Update Manager'],
          checkpoints: ['Fix applied', 'Service restarted', 'Tested working', 'Merchant confirmed']
        },
        {
          step: 4,
          title: 'On-Site Visit (if needed)',
          description: 'If remote fix unsuccessful, schedule on-site visit within 24 hours. Bring replacement hardware if suspected.',
          responsible: 'Tech Specialist',
          timeframe: 'Within 24 hours',
          tools: ['Spare Parts Kit', 'Diagnostic Tools'],
          checkpoints: ['Visit scheduled', 'Parts prepared', 'Issue resolved', 'Root cause confirmed']
        },
        {
          step: 5,
          title: 'Documentation & Prevention',
          description: 'Document issue and solution in knowledge base. Update monitoring if needed. Follow up after 24 hours.',
          responsible: 'Tech Support',
          timeframe: '15 min',
          tools: ['Knowledge Base', 'Monitoring System'],
          checkpoints: ['Issue documented', 'KB updated', 'Follow-up scheduled', 'Merchant satisfied']
        }
      ],
      kpis: [
        { metric: 'First Response', target: '<15 min' },
        { metric: 'Remote Resolution', target: '>80%' },
        { metric: 'Same-Day Fix', target: '>95%' },
        { metric: 'Repeat Issues', target: '<3%' }
      ],
      escalation: 'L2 issues not resolved in 2 hours escalate to CTO. Hardware failures require immediate replacement dispatch.'
    },
    {
      id: 'qr-materials',
      title: 'QR Code & Materials Management',
      icon: QrCode,
      color: 'purple',
      description: 'Generating and delivering merchant marketing materials',
      steps: [
        {
          step: 1,
          title: 'QR Code Generation',
          description: 'Generate unique merchant QR codes in the admin system. Verify QR links to correct merchant profile.',
          responsible: 'Operations',
          timeframe: '5 min',
          tools: ['QR Generator', 'Admin Portal'],
          checkpoints: ['QR generated', 'Link verified', 'Profile correct', 'Format exported']
        },
        {
          step: 2,
          title: 'Material Design',
          description: 'Apply QR to material templates: standees, table tents, window stickers, counter cards. Add merchant logo/branding.',
          responsible: 'Design Team',
          timeframe: '1-2 hours',
          tools: ['Design Templates', 'Canva/Figma', 'Brand Assets'],
          checkpoints: ['Templates updated', 'QR placed correctly', 'Branding applied', 'Proofed for errors']
        },
        {
          step: 3,
          title: 'Print Production',
          description: 'Send files to print vendor. Specify quantities based on package tier. Include cutting/finishing instructions.',
          responsible: 'Operations',
          timeframe: '1-3 days',
          tools: ['Print Order Form', 'Vendor Portal'],
          tips: ['Order 10% extra for replacements', 'Use premium materials for Diamond tier']
        },
        {
          step: 4,
          title: 'Quality Check',
          description: 'Inspect printed materials for quality: colors, QR scannability, durability. Reject defective items.',
          responsible: 'Operations',
          timeframe: '30 min per batch',
          tools: ['QA Checklist', 'QR Scanner'],
          checkpoints: ['Colors accurate', 'QR scannable', 'No defects', 'Quantities correct']
        },
        {
          step: 5,
          title: 'Delivery & Installation',
          description: 'Coordinate delivery to merchant. Assist with placement and installation. Take photos of installed materials.',
          responsible: 'Account Manager',
          timeframe: '1-2 hours',
          tools: ['Delivery Tracker', 'Installation Guide'],
          checkpoints: ['Delivered on time', 'Installed correctly', 'Photos taken', 'Merchant trained']
        }
      ],
      kpis: [
        { metric: 'Production Time', target: '<5 days' },
        { metric: 'Quality Pass Rate', target: '>98%' },
        { metric: 'Delivery On-Time', target: '>95%' },
        { metric: 'QR Scan Success', target: '100%' }
      ],
      escalation: 'Print quality issues go to vendor immediately for reprinting. Urgent replacements request expedited production.'
    },
    {
      id: 'app-updates',
      title: 'App Profile Updates',
      icon: Smartphone,
      color: 'cyan',
      description: 'Updating merchant profiles in Nuqta app',
      steps: [
        {
          step: 1,
          title: 'Change Request Receipt',
          description: 'Receive update request from merchant/AM via ticket or email. Verify authorization for changes.',
          responsible: 'Content Team',
          timeframe: '1 hour',
          tools: ['Ticket System', 'Email'],
          checkpoints: ['Request logged', 'Details complete', 'Authorized source', 'Priority assigned']
        },
        {
          step: 2,
          title: 'Content Preparation',
          description: 'Prepare new content: resize images, format text, verify pricing, check for compliance issues.',
          responsible: 'Content Team',
          timeframe: '1-2 hours',
          tools: ['Image Editor', 'Content Guidelines'],
          checkpoints: ['Images sized', 'Text formatted', 'Pricing verified', 'Compliance checked']
        },
        {
          step: 3,
          title: 'System Update',
          description: 'Update merchant profile in CMS. Add new menu items, change hours, update photos, modify descriptions.',
          responsible: 'Content Team',
          timeframe: '30 min',
          tools: ['Merchant CMS', 'Admin Portal'],
          checkpoints: ['Changes applied', 'Preview checked', 'No broken links', 'Categories correct']
        },
        {
          step: 4,
          title: 'Review & Publish',
          description: 'Review changes in staging. Get approval if major update. Publish to live app.',
          responsible: 'Content Manager',
          timeframe: '15 min',
          tools: ['Staging Environment', 'Publishing Tool'],
          tips: ['Major changes need AM approval', 'Check mobile preview', 'Verify on both iOS/Android']
        },
        {
          step: 5,
          title: 'Confirmation',
          description: 'Notify merchant that updates are live. Send screenshot of updated profile. Close ticket.',
          responsible: 'Content Team',
          timeframe: '10 min',
          tools: ['Email/WhatsApp', 'Screenshot Tool'],
          checkpoints: ['Merchant notified', 'Screenshot sent', 'Ticket closed', 'Changes documented']
        }
      ],
      kpis: [
        { metric: 'Update Time', target: '<24 hrs' },
        { metric: 'Accuracy', target: '100%' },
        { metric: 'First-Time Right', target: '>95%' },
        { metric: 'Merchant Satisfaction', target: '>4.5/5' }
      ],
      escalation: 'Urgent updates (error corrections, wrong pricing) processed within 2 hours. App-breaking issues escalate to Tech team.'
    }
  ],
  'user-operations': [
    {
      id: 'user-support',
      title: 'User Support Handling',
      icon: LifeBuoy,
      color: 'green',
      description: 'Responding to Nuqta app user queries',
      steps: [
        {
          step: 1,
          title: 'Ticket/Query Receipt',
          description: 'Receive user query via in-app support, email, or social media. Log in support system with category.',
          responsible: 'User Support Agent',
          timeframe: 'Immediate',
          tools: ['Zendesk', 'In-App Chat', 'Social Media'],
          checkpoints: ['Query logged', 'Category assigned', 'User identified', 'Auto-reply sent']
        },
        {
          step: 2,
          title: 'Initial Response',
          description: 'Respond to user within SLA. Acknowledge issue, ask clarifying questions if needed.',
          responsible: 'User Support Agent',
          timeframe: '<2 hours',
          tools: ['Response Templates', 'User Profile'],
          tips: ['Personalize with user name', 'Be empathetic', 'Set clear expectations']
        },
        {
          step: 3,
          title: 'Issue Investigation',
          description: 'Check user account, transaction history, cashback calculations. Identify the problem.',
          responsible: 'User Support Agent',
          timeframe: '10-30 min',
          tools: ['User Admin Panel', 'Transaction Logs'],
          checkpoints: ['Account reviewed', 'Issue identified', 'Solution found', 'Documented']
        },
        {
          step: 4,
          title: 'Resolution',
          description: 'Apply fix: adjust cashback, resolve account issues, provide guidance. Confirm with user.',
          responsible: 'User Support Agent',
          timeframe: 'Varies',
          tools: ['Admin Tools', 'FAQ/Knowledge Base'],
          checkpoints: ['Fix applied', 'User informed', 'Confirmation received', 'Ticket updated']
        },
        {
          step: 5,
          title: 'Follow-Up & Close',
          description: 'Follow up if complex issue. Request app store review if positive experience. Close ticket.',
          responsible: 'User Support Agent',
          timeframe: '24h after resolution',
          tools: ['CSAT Survey', 'Review Request'],
          tips: ['Ask happy users for app review', 'Offer promo code for inconvenience if applicable']
        }
      ],
      kpis: [
        { metric: 'First Response', target: '<2 hrs' },
        { metric: 'Resolution Time', target: '<24 hrs' },
        { metric: 'CSAT Score', target: '>4.5/5' },
        { metric: 'First Contact Res', target: '>75%' }
      ],
      escalation: 'Technical bugs go to Tech team. Cashback disputes >AED 100 need supervisor approval. Fraud suspicion escalates to Security.'
    },
    {
      id: 'cashback-disputes',
      title: 'Cashback Dispute Resolution',
      icon: Percent,
      color: 'amber',
      description: 'Handling user complaints about missing cashback',
      steps: [
        {
          step: 1,
          title: 'Dispute Receipt',
          description: 'User reports missing or incorrect cashback. Collect: transaction date, merchant, amount, expected cashback.',
          responsible: 'User Support',
          timeframe: 'Immediate',
          tools: ['Dispute Form', 'Support System'],
          checkpoints: ['Details collected', 'Receipt/proof requested', 'Priority assigned', 'User acknowledged']
        },
        {
          step: 2,
          title: 'Transaction Verification',
          description: 'Check transaction in system. Verify merchant, amount, timestamp. Cross-reference with merchant POS data.',
          responsible: 'User Support',
          timeframe: '1 hour',
          tools: ['Transaction Dashboard', 'Merchant Logs'],
          checkpoints: ['Transaction found', 'Amount verified', 'Merchant confirmed', 'Discrepancy identified']
        },
        {
          step: 3,
          title: 'Root Cause Analysis',
          description: 'Determine why cashback missing: POS issue, user error, promo exclusion, timing, or system bug.',
          responsible: 'User Support L2',
          timeframe: '30 min',
          tools: ['RCA Template', 'Promo Rules'],
          tips: ['Check promo terms carefully', 'Verify user met minimum spend', 'Check excluded categories']
        },
        {
          step: 4,
          title: 'Resolution',
          description: 'If valid: credit cashback manually. If invalid: explain clearly to user with evidence. If unclear: escalate.',
          responsible: 'User Support L2',
          timeframe: '1-4 hours',
          tools: ['Manual Credit Tool', 'Email Templates'],
          checkpoints: ['Decision made', 'Credit applied or denied', 'User notified', 'Documentation complete']
        },
        {
          step: 5,
          title: 'Prevention',
          description: 'If systemic issue found, report to Tech. Update FAQ if common question. Close dispute ticket.',
          responsible: 'Support Manager',
          timeframe: 'End of day',
          tools: ['Bug Report', 'Knowledge Base'],
          checkpoints: ['Issue reported', 'FAQ updated', 'Trend monitored', 'Ticket closed']
        }
      ],
      kpis: [
        { metric: 'Resolution Time', target: '<24 hrs' },
        { metric: 'Valid Claims', target: '<10%' },
        { metric: 'User Satisfaction', target: '>85%' },
        { metric: 'Repeat Disputes', target: '<5%' }
      ],
      escalation: 'Disputes >AED 500 require Finance approval. Suspected fraud escalates to Security team immediately.'
    },
    {
      id: 'user-refunds',
      title: 'User Refund Process',
      icon: RefreshCw,
      color: 'red',
      description: 'Processing refunds for users',
      steps: [
        {
          step: 1,
          title: 'Refund Request',
          description: 'Receive refund request. Verify reason: app issue, merchant issue, coin purchase, or subscription.',
          responsible: 'User Support',
          timeframe: 'Immediate',
          tools: ['Refund Request Form', 'Support System'],
          checkpoints: ['Request logged', 'Reason verified', 'Amount confirmed', 'Policy checked']
        },
        {
          step: 2,
          title: 'Eligibility Check',
          description: 'Review refund policy. Check: timeframe, usage, terms violation. Determine if eligible.',
          responsible: 'User Support L2',
          timeframe: '30 min',
          tools: ['Refund Policy', 'User History'],
          checkpoints: ['Policy reviewed', 'Usage checked', 'Eligibility determined', 'Documentation ready']
        },
        {
          step: 3,
          title: 'Approval',
          description: 'Get approval based on amount: <AED 50 L2, AED 50-200 Manager, >AED 200 Finance.',
          responsible: 'Approving Authority',
          timeframe: '2-24 hours',
          tools: ['Approval Workflow', 'Slack'],
          checkpoints: ['Approval requested', 'Documentation attached', 'Approval received', 'Logged']
        },
        {
          step: 4,
          title: 'Process Refund',
          description: 'Execute refund via original payment method or coins. Update user account. Generate confirmation.',
          responsible: 'Finance Team',
          timeframe: '24-72 hours',
          tools: ['Payment System', 'Admin Portal'],
          checkpoints: ['Refund processed', 'Account updated', 'Confirmation generated', 'Receipt sent']
        },
        {
          step: 5,
          title: 'User Communication',
          description: 'Notify user of refund completion. Explain timeline for bank processing. Request feedback.',
          responsible: 'User Support',
          timeframe: 'Same day as processing',
          tools: ['Email/Push Notification'],
          tips: ['Apologize for inconvenience', 'Offer goodwill coins if appropriate', 'Ask for feedback']
        }
      ],
      kpis: [
        { metric: 'Approval Time', target: '<24 hrs' },
        { metric: 'Processing Time', target: '<3 days' },
        { metric: 'Refund Rate', target: '<1%' },
        { metric: 'Satisfaction', target: '>80%' }
      ],
      escalation: 'Fraudulent refund requests escalate to Security. App store refund requests handled separately per platform policies.'
    },
    {
      id: 'user-account',
      title: 'User Account Management',
      icon: UserCheck,
      color: 'indigo',
      description: 'Managing user accounts and profile updates',
      steps: [
        {
          step: 1,
          title: 'Request Receipt',
          description: 'Receive account request: profile update, phone change, account deletion, data export.',
          responsible: 'User Support',
          timeframe: 'Immediate',
          tools: ['Support System', 'Account Request Form'],
          checkpoints: ['Request logged', 'Type identified', 'User verified', 'Priority set']
        },
        {
          step: 2,
          title: 'Identity Verification',
          description: 'Verify user identity for sensitive changes. Require: Emirates ID, registered email/phone confirmation.',
          responsible: 'User Support L2',
          timeframe: '30 min',
          tools: ['Verification Checklist', 'ID Verification Tool'],
          checkpoints: ['ID verified', 'Phone/email confirmed', 'Security questions passed', 'Logged']
        },
        {
          step: 3,
          title: 'Execute Change',
          description: 'Make requested changes in admin panel. For deletions, follow data retention policy.',
          responsible: 'User Support L2',
          timeframe: '1-24 hours',
          tools: ['Admin Portal', 'Data Management'],
          tips: ['Phone change requires OTP to new number', 'Deletion has 30-day grace period']
        },
        {
          step: 4,
          title: 'Confirmation',
          description: 'Confirm changes to user. Provide updated info or deletion confirmation. Update records.',
          responsible: 'User Support',
          timeframe: '15 min',
          tools: ['Email/SMS', 'Confirmation Template'],
          checkpoints: ['Changes confirmed', 'User notified', 'Records updated', 'Ticket closed']
        },
        {
          step: 5,
          title: 'Audit Trail',
          description: 'Log all account changes for compliance. Maintain audit trail for data requests.',
          responsible: 'User Support L2',
          timeframe: '10 min',
          tools: ['Audit Log', 'Compliance System'],
          checkpoints: ['Change logged', 'Timestamp recorded', 'Agent recorded', 'Reason documented']
        }
      ],
      kpis: [
        { metric: 'Verification Time', target: '<1 hr' },
        { metric: 'Change Completion', target: '<24 hrs' },
        { metric: 'Audit Compliance', target: '100%' },
        { metric: 'User Satisfaction', target: '>4/5' }
      ],
      escalation: 'Account takeover attempts escalate to Security immediately. GDPR data requests go to Legal/Compliance.'
    }
  ],
  'hr-operations': [
    {
      id: 'employee-onboarding',
      title: 'New Employee Onboarding',
      icon: UserPlus,
      color: 'green',
      description: 'Onboarding new team members',
      steps: [
        {
          step: 1,
          title: 'Pre-Arrival Setup',
          description: 'Prepare workstation, order equipment, create accounts (email, Slack, tools). Send welcome package.',
          responsible: 'HR + IT',
          timeframe: '3 days before start',
          tools: ['Onboarding Checklist', 'IT Request Form'],
          checkpoints: ['Workstation ready', 'Accounts created', 'Equipment ordered', 'Welcome kit sent']
        },
        {
          step: 2,
          title: 'Day 1 Orientation',
          description: 'Welcome meeting, office tour, team introductions. Complete HR paperwork, set up devices.',
          responsible: 'HR + Hiring Manager',
          timeframe: 'Full day',
          tools: ['Orientation Deck', 'HR Forms', 'Welcome Lunch'],
          checkpoints: ['Paperwork complete', 'Tour done', 'Team met', 'Devices working']
        },
        {
          step: 3,
          title: 'Week 1 Training',
          description: 'Company overview, product training, role-specific training. Assign onboarding buddy.',
          responsible: 'Hiring Manager + Buddy',
          timeframe: 'Week 1',
          tools: ['Training Materials', 'Product Demos', 'LMS'],
          tips: ['Schedule 1:1 with key stakeholders', 'Set up coffee chats', 'Share company culture deck']
        },
        {
          step: 4,
          title: '30-Day Check-in',
          description: 'Review progress, address questions, gather feedback. Adjust training plan if needed.',
          responsible: 'Hiring Manager + HR',
          timeframe: 'Day 30',
          tools: ['Check-in Template', 'Feedback Form'],
          checkpoints: ['Progress reviewed', 'Questions addressed', 'Goals aligned', 'Support identified']
        },
        {
          step: 5,
          title: '90-Day Review',
          description: 'Formal performance review. Confirm role fit, set ongoing goals, complete probation.',
          responsible: 'Hiring Manager + HR',
          timeframe: 'Day 90',
          tools: ['Performance Review', 'Goal Setting Template'],
          checkpoints: ['Performance assessed', 'Goals set', 'Probation completed', 'Feedback documented']
        }
      ],
      kpis: [
        { metric: 'Time to Productivity', target: '<30 days' },
        { metric: 'Onboarding Satisfaction', target: '>4.5/5' },
        { metric: '90-Day Retention', target: '>95%' },
        { metric: 'Probation Pass Rate', target: '>90%' }
      ],
      escalation: 'Performance issues during probation escalate to HR for support plan. Equipment delays escalate to Operations.'
    },
    {
      id: 'sales-training',
      title: 'Sales Rep Training Program',
      icon: Award,
      color: 'amber',
      description: 'Training new sales team members',
      steps: [
        {
          step: 1,
          title: 'Classroom Training',
          description: 'Cover: Nuqta product, value proposition, competitor landscape, pricing, CRM usage.',
          responsible: 'Sales Manager',
          timeframe: 'Days 1-3',
          tools: ['Sales Training Deck', 'Product Demo', 'CRM Training'],
          checkpoints: ['Product understood', 'Value props memorized', 'CRM proficient', 'Quiz passed']
        },
        {
          step: 2,
          title: 'Category Playbook Training',
          description: 'Deep dive into each merchant category. Learn pitch scripts, objections, ideal customers.',
          responsible: 'Sales Manager',
          timeframe: 'Days 4-5',
          tools: ['Category Playbooks', 'Pitch Scripts', 'Role Play Scenarios'],
          tips: ['Practice each category pitch', 'Record and review', 'Memorize top 5 objections']
        },
        {
          step: 3,
          title: 'Shadowing',
          description: 'Shadow senior sales rep on 10+ merchant visits. Observe pitch, objection handling, closing.',
          responsible: 'Senior Sales Rep',
          timeframe: 'Week 2',
          tools: ['Shadowing Log', 'Observation Notes'],
          checkpoints: ['10 visits completed', 'Notes taken', 'Questions asked', 'Feedback received']
        },
        {
          step: 4,
          title: 'Supervised Selling',
          description: 'New rep leads pitch with senior rep observing. Get real-time feedback and coaching.',
          responsible: 'Senior Sales Rep',
          timeframe: 'Week 3',
          tools: ['Coaching Feedback Form', 'Call Recording'],
          checkpoints: ['5 supervised pitches', 'Feedback applied', 'Confidence building', 'Manager sign-off']
        },
        {
          step: 5,
          title: 'Certification & Solo',
          description: 'Pass final role-play assessment. Get certified. Begin solo territory work.',
          responsible: 'Sales Manager',
          timeframe: 'Week 4',
          tools: ['Certification Exam', 'Territory Assignment'],
          checkpoints: ['Exam passed', 'Role-play successful', 'Territory assigned', 'Quota set']
        }
      ],
      kpis: [
        { metric: 'Training Completion', target: '100%' },
        { metric: 'Certification Pass', target: '>85%' },
        { metric: 'First Month Sales', target: '5+ merchants' },
        { metric: 'Ramp to Full Quota', target: '<60 days' }
      ],
      escalation: 'Training challenges escalate to Sales Manager. Repeated certification failures require coaching plan or role reassessment.'
    },
    {
      id: 'performance-review',
      title: 'Performance Review Process',
      icon: TrendingUp,
      color: 'purple',
      description: 'Quarterly and annual performance reviews',
      steps: [
        {
          step: 1,
          title: 'Self-Assessment',
          description: 'Employee completes self-assessment: achievements, challenges, development areas, goals.',
          responsible: 'Employee',
          timeframe: '1 week before review',
          tools: ['Self-Assessment Form', 'Goal Tracker'],
          checkpoints: ['Form completed', 'Evidence attached', 'Goals reviewed', 'Submitted on time']
        },
        {
          step: 2,
          title: 'Manager Preparation',
          description: 'Review employee metrics, peer feedback, project outcomes. Prepare rating and discussion points.',
          responsible: 'Manager',
          timeframe: '2-3 days before',
          tools: ['Performance Data', 'Peer Feedback', 'Rating Matrix'],
          tips: ['Gather specific examples', 'Review previous goals', 'Prepare development suggestions']
        },
        {
          step: 3,
          title: 'Review Meeting',
          description: 'Conduct 1-hour review meeting. Discuss performance, provide feedback, agree on development areas.',
          responsible: 'Manager + Employee',
          timeframe: '1 hour',
          tools: ['Review Template', 'Private Meeting Room'],
          checkpoints: ['All areas discussed', 'Two-way dialogue', 'No surprises', 'Agreement reached']
        },
        {
          step: 4,
          title: 'Goal Setting',
          description: 'Set SMART goals for next period. Align with company OKRs. Agree on development plan.',
          responsible: 'Manager + Employee',
          timeframe: '30 min (same meeting)',
          tools: ['Goal Template', 'OKR Framework'],
          checkpoints: ['3-5 goals set', 'SMART criteria met', 'Timeline agreed', 'Support identified']
        },
        {
          step: 5,
          title: 'Documentation & Follow-up',
          description: 'Document review in HRIS. Share written summary. Schedule check-in for goal progress.',
          responsible: 'Manager + HR',
          timeframe: 'Within 3 days',
          tools: ['HRIS', 'Email', 'Calendar'],
          checkpoints: ['Review documented', 'Summary shared', 'Employee signed', 'Follow-up scheduled']
        }
      ],
      kpis: [
        { metric: 'Completion Rate', target: '100%' },
        { metric: 'On-Time Completion', target: '>95%' },
        { metric: 'Employee Satisfaction', target: '>4/5' },
        { metric: 'Goal Achievement', target: '>80%' }
      ],
      escalation: 'Underperformance requiring PIP goes to HR. Disputes about ratings escalate to skip-level manager.'
    }
  ],
  'content-quality': [
    {
      id: 'content-qa',
      title: 'Content Quality Assurance',
      icon: Eye,
      color: 'blue',
      description: 'Reviewing content before publishing',
      steps: [
        {
          step: 1,
          title: 'Content Submission',
          description: 'Creator submits content batch via shared drive. Include: raw files, edited versions, captions.',
          responsible: 'Content Creator',
          timeframe: 'Submission day',
          tools: ['Google Drive', 'Submission Form'],
          checkpoints: ['All files uploaded', 'Naming correct', 'Captions included', 'Checklist complete']
        },
        {
          step: 2,
          title: 'Technical Review',
          description: 'Check: image resolution, video quality, file formats, sizing for platforms.',
          responsible: 'QA Reviewer',
          timeframe: '30 min per batch',
          tools: ['QA Checklist', 'File Analyzer'],
          checkpoints: ['Resolution OK', 'Quality acceptable', 'Formats correct', 'Sizes appropriate']
        },
        {
          step: 3,
          title: 'Brand Review',
          description: 'Verify brand guidelines: colors, fonts, logo usage, tone of voice, hashtags.',
          responsible: 'Brand Manager',
          timeframe: '30 min',
          tools: ['Brand Guidelines', 'Style Guide'],
          checkpoints: ['Colors correct', 'Logo usage OK', 'Tone consistent', 'Hashtags approved']
        },
        {
          step: 4,
          title: 'Merchant Approval',
          description: 'Send approved content to merchant for final review. Collect feedback, make revisions.',
          responsible: 'Account Manager',
          timeframe: '24-48 hours',
          tools: ['Approval Form', 'WhatsApp/Email'],
          tips: ['Set clear deadline', 'Limit revision rounds', 'Get written approval']
        },
        {
          step: 5,
          title: 'Final Approval & Archive',
          description: 'Apply final changes. Get sign-off. Archive in content library with proper tagging.',
          responsible: 'Content Manager',
          timeframe: '30 min',
          tools: ['Content Library', 'Tagging System'],
          checkpoints: ['Final approved', 'Archived properly', 'Tagged correctly', 'Ready for use']
        }
      ],
      kpis: [
        { metric: 'First-Pass Rate', target: '>85%' },
        { metric: 'QA Turnaround', target: '<4 hrs' },
        { metric: 'Merchant Approval', target: '>90%' },
        { metric: 'Defect Rate', target: '<5%' }
      ],
      escalation: 'Quality issues require reshooting escalate to Creative Director. Repeated creator issues go to Content Manager.'
    },
    {
      id: 'brand-compliance',
      title: 'Brand Guidelines Compliance',
      icon: Shield,
      color: 'purple',
      description: 'Ensuring brand consistency across materials',
      steps: [
        {
          step: 1,
          title: 'Guidelines Distribution',
          description: 'Ensure all team members have current brand guidelines. Conduct quarterly refreshers.',
          responsible: 'Brand Manager',
          timeframe: 'Ongoing',
          tools: ['Brand Book', 'Training Deck'],
          checkpoints: ['All staff trained', 'Guidelines accessible', 'Updates communicated', 'Quiz completed']
        },
        {
          step: 2,
          title: 'Pre-Production Check',
          description: 'Review creative brief against brand guidelines before production starts.',
          responsible: 'Creative Director',
          timeframe: 'Before each project',
          tools: ['Brief Template', 'Brand Checklist'],
          checkpoints: ['Brief aligned', 'Templates used', 'Colors specified', 'Fonts noted']
        },
        {
          step: 3,
          title: 'In-Production Review',
          description: 'Spot-check work in progress. Catch issues early before full production.',
          responsible: 'Brand Manager',
          timeframe: 'Mid-production',
          tools: ['Review Session', 'Feedback Form'],
          tips: ['Review drafts early', 'Provide visual examples', 'Be specific about changes']
        },
        {
          step: 4,
          title: 'Final Audit',
          description: 'Comprehensive brand audit of finished materials before launch/publication.',
          responsible: 'Brand Manager',
          timeframe: '1-2 hours',
          tools: ['Audit Checklist', 'Brand Scorecard'],
          checkpoints: ['Logo correct', 'Colors accurate', 'Typography right', 'Messaging aligned']
        },
        {
          step: 5,
          title: 'Violation Tracking',
          description: 'Log any brand violations. Track patterns. Provide additional training where needed.',
          responsible: 'Brand Manager',
          timeframe: 'Ongoing',
          tools: ['Violation Log', 'Training Records'],
          checkpoints: ['Violations logged', 'Patterns identified', 'Training scheduled', 'Improvement tracked']
        }
      ],
      kpis: [
        { metric: 'Compliance Rate', target: '>95%' },
        { metric: 'Violation Frequency', target: '<5/month' },
        { metric: 'Training Completion', target: '100%' },
        { metric: 'Brand Consistency', target: '>90%' }
      ],
      escalation: 'Major brand violations escalate to CMO. Repeated violations by vendor may result in contract review.'
    },
    {
      id: 'photo-standards',
      title: 'Photography Standards',
      icon: Camera,
      color: 'pink',
      description: 'Maintaining photo quality for merchant content',
      steps: [
        {
          step: 1,
          title: 'Pre-Shoot Briefing',
          description: 'Review shot list, style references, merchant requirements. Check equipment.',
          responsible: 'Photographer',
          timeframe: '1 hour before',
          tools: ['Shot List', 'Style Guide', 'Equipment Checklist'],
          checkpoints: ['Brief understood', 'Style clear', 'Equipment ready', 'Batteries charged']
        },
        {
          step: 2,
          title: 'On-Site Capture',
          description: 'Execute shot list. Capture hero shots, lifestyle, details, ambiance. Minimum 100 RAW files.',
          responsible: 'Photographer',
          timeframe: '2-4 hours',
          tools: ['Camera', 'Lighting', 'Props'],
          checkpoints: ['Shot list complete', 'Multiple angles', 'Various compositions', 'Backup captured']
        },
        {
          step: 3,
          title: 'Culling & Selection',
          description: 'Review all images. Select best 30-50 for editing. Flag must-haves.',
          responsible: 'Photographer',
          timeframe: '1-2 hours',
          tools: ['Lightroom', 'Selection Criteria'],
          tips: ['Quality over quantity', 'Check for focus', 'Ensure variety', 'Consider platform needs']
        },
        {
          step: 4,
          title: 'Editing & Retouching',
          description: 'Edit selected images: color correction, exposure, retouching. Apply brand presets.',
          responsible: 'Photo Editor',
          timeframe: '2-4 hours',
          tools: ['Lightroom', 'Photoshop', 'Brand Presets'],
          checkpoints: ['Colors consistent', 'Exposure correct', 'Retouching natural', 'Presets applied']
        },
        {
          step: 5,
          title: 'Export & Delivery',
          description: 'Export in required formats/sizes. Organize by category. Deliver to content team.',
          responsible: 'Photo Editor',
          timeframe: '1 hour',
          tools: ['Export Presets', 'Naming Convention'],
          checkpoints: ['Formats correct', 'Sizes right', 'Named properly', 'Organized by type']
        }
      ],
      kpis: [
        { metric: 'Usable Images', target: '>80%' },
        { metric: 'Delivery Time', target: '<48 hrs' },
        { metric: 'Reshoots Needed', target: '<5%' },
        { metric: 'Client Approval', target: '>95%' }
      ],
      escalation: 'Weather/lighting issues may require reschedule. Equipment failure escalates to Operations for backup.'
    }
  ],
  'partnerships-events': [
    {
      id: 'event-setup',
      title: 'Event Setup & Execution',
      icon: Calendar,
      color: 'orange',
      description: 'Setting up Nuqta presence at events (GV, exhibitions)',
      steps: [
        {
          step: 1,
          title: 'Event Planning',
          description: 'Confirm event details: dates, location, booth size. Create event brief and staffing plan.',
          responsible: 'Events Manager',
          timeframe: '4 weeks before',
          tools: ['Event Brief', 'Staffing Template'],
          checkpoints: ['Details confirmed', 'Brief created', 'Staff assigned', 'Budget approved']
        },
        {
          step: 2,
          title: 'Merchant Coordination',
          description: 'Coordinate with event merchants. Collect materials, train on Nuqta, set up in system.',
          responsible: 'Events Team + AMs',
          timeframe: '2-3 weeks before',
          tools: ['Merchant List', 'Training Materials'],
          checkpoints: ['All merchants contacted', 'Materials collected', 'Training complete', 'System ready']
        },
        {
          step: 3,
          title: 'Booth & Materials Prep',
          description: 'Design and produce booth. Prepare: signage, standees, brochures, giveaways, tech setup.',
          responsible: 'Events + Design Team',
          timeframe: '1-2 weeks before',
          tools: ['Booth Design', 'Production Order'],
          checkpoints: ['Design approved', 'Production ordered', 'Tech tested', 'Inventory ready']
        },
        {
          step: 4,
          title: 'Setup Day',
          description: 'Install booth, set up tech, brief staff, final checks. Conduct walkthrough with team.',
          responsible: 'Events Team',
          timeframe: 'Day before/morning of',
          tools: ['Setup Checklist', 'Staff Briefing'],
          checkpoints: ['Booth installed', 'Tech working', 'Staff briefed', 'Safety checked']
        },
        {
          step: 5,
          title: 'Event Execution',
          description: 'Run booth during event. Track signups, transactions, issues. Daily debrief with team.',
          responsible: 'Events Team',
          timeframe: 'Event duration',
          tools: ['Daily Report', 'Issue Log'],
          checkpoints: ['Signups tracked', 'Issues logged', 'Staff rotated', 'Inventory managed']
        }
      ],
      kpis: [
        { metric: 'Signups/Day', target: '100+' },
        { metric: 'Merchant Activation', target: '>90%' },
        { metric: 'Customer Engagement', target: '500+/day' },
        { metric: 'Issues Resolved', target: '<1 hr' }
      ],
      escalation: 'Critical tech issues escalate to CTO. Major booth problems go to venue management. Safety issues stop operations immediately.'
    },
    {
      id: 'corporate-partnership',
      title: 'Corporate Partnership Onboarding',
      icon: Building2,
      color: 'indigo',
      description: 'Onboarding corporate partners for employee rewards',
      steps: [
        {
          step: 1,
          title: 'Partnership Agreement',
          description: 'Finalize partnership terms: employee count, coin allocation, custom features, pricing.',
          responsible: 'Partnerships Manager',
          timeframe: 'Week 1',
          tools: ['Partnership Agreement', 'Pricing Calculator'],
          checkpoints: ['Terms agreed', 'Contract signed', 'Payment received', 'Kickoff scheduled']
        },
        {
          step: 2,
          title: 'Technical Setup',
          description: 'Set up corporate account. Configure: SSO integration, employee upload, custom branding.',
          responsible: 'Tech + Partnerships',
          timeframe: 'Week 2',
          tools: ['Admin Portal', 'SSO Config', 'Employee Import'],
          checkpoints: ['Account created', 'SSO working', 'Employees imported', 'Branding applied']
        },
        {
          step: 3,
          title: 'Launch Materials',
          description: 'Create launch kit: announcement email, desk standees, digital assets, FAQ document.',
          responsible: 'Marketing + Design',
          timeframe: 'Week 2-3',
          tools: ['Launch Kit Template', 'Digital Assets'],
          checkpoints: ['Materials approved', 'Printed assets ready', 'Digital delivered', 'FAQ prepared']
        },
        {
          step: 4,
          title: 'Employee Onboarding',
          description: 'Coordinate with HR for announcement. Support employee signups. Handle initial queries.',
          responsible: 'Partnerships + Support',
          timeframe: 'Week 3-4',
          tools: ['Onboarding Guide', 'Support Queue'],
          tips: ['Offer signup support sessions', 'Create video walkthrough', 'Prepare FAQ for common questions']
        },
        {
          step: 5,
          title: 'Post-Launch Support',
          description: 'Monitor adoption. Provide weekly reports to HR. Address issues. Plan engagement activities.',
          responsible: 'Partnerships Manager',
          timeframe: 'Ongoing',
          tools: ['Analytics Dashboard', 'Report Template'],
          checkpoints: ['Adoption tracked', 'Reports sent', 'Issues addressed', 'Engagement planned']
        }
      ],
      kpis: [
        { metric: 'Setup Time', target: '<3 weeks' },
        { metric: 'Employee Adoption', target: '>50% in Month 1' },
        { metric: 'Active Usage', target: '>30%/month' },
        { metric: 'Partner Satisfaction', target: '>4.5/5' }
      ],
      escalation: 'SSO issues escalate to CTO. Partner complaints go to Head of Partnerships. Contract disputes involve Legal.'
    },
    {
      id: 'university-partnership',
      title: 'University Partnership Setup',
      icon: BookOpen,
      color: 'blue',
      description: 'Onboarding university partners for student rewards',
      steps: [
        {
          step: 1,
          title: 'MoU Signing',
          description: 'Sign partnership agreement with university. Define: student access, campus presence, co-marketing.',
          responsible: 'Partnerships Manager',
          timeframe: 'Week 1',
          tools: ['MoU Template', 'University Deck'],
          checkpoints: ['Agreement signed', 'Contact points set', 'Kickoff planned', 'Campus access confirmed']
        },
        {
          step: 2,
          title: 'Campus Activation Plan',
          description: 'Plan campus presence: booth locations, student ambassador recruitment, launch event.',
          responsible: 'Partnerships + Events',
          timeframe: 'Week 2',
          tools: ['Activation Plan', 'Ambassador Recruitment'],
          checkpoints: ['Locations approved', 'Ambassadors recruited', 'Event planned', 'Materials ordered']
        },
        {
          step: 3,
          title: 'Campus Merchant Onboarding',
          description: 'Onboard campus merchants: cafeteria, bookstore, food outlets. Set up special student offers.',
          responsible: 'Sales + Partnerships',
          timeframe: 'Week 2-3',
          tools: ['Merchant Onboarding Flow', 'Student Offers Template'],
          checkpoints: ['Merchants signed', 'System setup', 'Offers configured', 'Testing complete']
        },
        {
          step: 4,
          title: 'Launch Event',
          description: 'Execute campus launch: booth setup, signup drive, special promos, social media buzz.',
          responsible: 'Events + Marketing',
          timeframe: 'Launch day',
          tools: ['Event Checklist', 'Promo Materials'],
          tips: ['Partner with student council', 'Offer launch bonus coins', 'Create Instagram-worthy moment']
        },
        {
          step: 5,
          title: 'Ongoing Engagement',
          description: 'Maintain campus presence. Run monthly activations. Track student engagement. Report to university.',
          responsible: 'Partnerships + Campus Ambassador',
          timeframe: 'Ongoing',
          tools: ['Engagement Calendar', 'Ambassador Reports'],
          checkpoints: ['Monthly activations', 'Engagement tracked', 'Reports sent', 'Ambassador active']
        }
      ],
      kpis: [
        { metric: 'Student Signups', target: '20% of campus' },
        { metric: 'Weekly Active', target: '>30%' },
        { metric: 'Campus Merchants', target: '80%+ activated' },
        { metric: 'Ambassador Performance', target: '50 signups/mo' }
      ],
      escalation: 'Campus access issues escalate to university admin contact. Ambassador issues go to Partnerships Manager.'
    }
  ],
  'merchant-lifecycle': [
    {
      id: 'churn-prevention',
      title: 'Merchant Churn Prevention',
      icon: Heart,
      color: 'red',
      description: 'Identifying and preventing merchant churn',
      steps: [
        {
          step: 1,
          title: 'Risk Identification',
          description: 'Monitor churn signals: declining transactions, support complaints, payment delays, low engagement.',
          responsible: 'Account Manager',
          timeframe: 'Weekly review',
          tools: ['Churn Dashboard', 'Alert System'],
          checkpoints: ['Signals identified', 'Risk scored', 'Priority ranked', 'Action planned']
        },
        {
          step: 2,
          title: 'Outreach Call',
          description: 'Proactive call to at-risk merchant. Understand issues, gather feedback, show commitment.',
          responsible: 'Account Manager',
          timeframe: 'Within 48 hours of flag',
          tools: ['Call Script', 'Feedback Form'],
          tips: ['Listen actively', 'Don\'t be defensive', 'Ask about competitor offers', 'Show genuine concern']
        },
        {
          step: 3,
          title: 'Root Cause Analysis',
          description: 'Analyze merchant data and feedback. Identify specific pain points and potential solutions.',
          responsible: 'AM + Operations',
          timeframe: '24 hours',
          tools: ['RCA Template', 'Merchant History'],
          checkpoints: ['Issues identified', 'Root cause found', 'Solutions listed', 'Feasibility assessed']
        },
        {
          step: 4,
          title: 'Retention Offer',
          description: 'Develop customized retention offer: fee reduction, extra services, performance guarantee.',
          responsible: 'AM + Manager',
          timeframe: '24-48 hours',
          tools: ['Retention Offer Template', 'Approval Matrix'],
          checkpoints: ['Offer created', 'Approved', 'Merchant presented', 'Decision received']
        },
        {
          step: 5,
          title: 'Win-Back or Exit',
          description: 'If accepted: implement changes, monitor closely. If declined: conduct exit interview, maintain relationship.',
          responsible: 'Account Manager',
          timeframe: 'Ongoing',
          tools: ['Implementation Plan', 'Exit Interview Form'],
          checkpoints: ['Changes implemented', 'Progress tracked', 'Exit documented', 'Door left open']
        }
      ],
      kpis: [
        { metric: 'Churn Rate', target: '<5%/quarter' },
        { metric: 'At-Risk Response', target: '<48 hrs' },
        { metric: 'Save Rate', target: '>50%' },
        { metric: 'Win-Back Rate', target: '>20%' }
      ],
      escalation: 'High-value merchants at risk escalate to Head of Sales. Major service failures escalate to Operations.'
    },
    {
      id: 'package-upgrade',
      title: 'Package Upgrade Process',
      icon: TrendingUp,
      color: 'green',
      description: 'Upselling merchants to higher package tiers',
      steps: [
        {
          step: 1,
          title: 'Upgrade Opportunity ID',
          description: 'Identify upgrade candidates: high transaction volume, positive feedback, business growth, specific needs.',
          responsible: 'Account Manager',
          timeframe: 'Monthly review',
          tools: ['Upgrade Criteria', 'Merchant Analytics'],
          checkpoints: ['Candidates identified', 'Criteria met', 'Timing right', 'Approach planned']
        },
        {
          step: 2,
          title: 'Value Proposition',
          description: 'Prepare customized upgrade pitch. Show: additional benefits, ROI projection, success stories.',
          responsible: 'Account Manager',
          timeframe: '1 hour prep',
          tools: ['Upgrade Deck', 'ROI Calculator', 'Case Studies'],
          tips: ['Focus on their specific needs', 'Show what they are missing', 'Use data from their account']
        },
        {
          step: 3,
          title: 'Pitch Meeting',
          description: 'Present upgrade opportunity. Walk through benefits, answer questions, address concerns.',
          responsible: 'Account Manager',
          timeframe: '30-45 min',
          tools: ['Meeting Agenda', 'Comparison Sheet'],
          checkpoints: ['Benefits explained', 'Questions answered', 'Concerns addressed', 'Interest gauged']
        },
        {
          step: 4,
          title: 'Proposal & Negotiation',
          description: 'Send formal proposal. Negotiate terms if needed. Offer upgrade incentives within guidelines.',
          responsible: 'Account Manager',
          timeframe: '24-72 hours',
          tools: ['Proposal Template', 'Pricing Guidelines'],
          checkpoints: ['Proposal sent', 'Terms negotiated', 'Incentives approved', 'Agreement reached']
        },
        {
          step: 5,
          title: 'Upgrade Implementation',
          description: 'Process contract amendment. Activate new package features. Communicate timeline and next steps.',
          responsible: 'AM + Operations',
          timeframe: '24-48 hours',
          tools: ['Contract Amendment', 'Feature Activation'],
          checkpoints: ['Contract updated', 'Features activated', 'Merchant notified', 'Training scheduled']
        }
      ],
      kpis: [
        { metric: 'Upgrade Rate', target: '>15%/year' },
        { metric: 'Revenue Increase', target: '>20%' },
        { metric: 'Pitch to Close', target: '>30%' },
        { metric: 'Upgrade Satisfaction', target: '>4.5/5' }
      ],
      escalation: 'Enterprise upgrade discussions involve Sales Director. Custom pricing requires Finance approval.'
    },
    {
      id: 'contract-renewal',
      title: 'Contract Renewal Process',
      icon: RefreshCw,
      color: 'amber',
      description: 'Managing annual contract renewals',
      steps: [
        {
          step: 1,
          title: 'Renewal Pipeline',
          description: 'Identify contracts expiring in next 90 days. Prepare renewal strategy for each merchant.',
          responsible: 'Account Manager',
          timeframe: '90 days before expiry',
          tools: ['Renewal Dashboard', 'Strategy Template'],
          checkpoints: ['List generated', 'History reviewed', 'Strategy defined', 'Priority ranked']
        },
        {
          step: 2,
          title: 'Performance Review',
          description: 'Prepare annual performance summary. Highlight: value delivered, ROI, growth metrics.',
          responsible: 'Account Manager',
          timeframe: '60 days before',
          tools: ['Annual Review Report', 'Metrics Dashboard'],
          tips: ['Show concrete numbers', 'Highlight wins', 'Acknowledge challenges', 'Show improvement areas']
        },
        {
          step: 3,
          title: 'Renewal Meeting',
          description: 'Meet with merchant decision maker. Present performance, discuss future, propose renewal terms.',
          responsible: 'Account Manager',
          timeframe: '45-60 days before',
          tools: ['Renewal Deck', 'Proposal Options'],
          checkpoints: ['Meeting held', 'Performance discussed', 'Terms proposed', 'Feedback received']
        },
        {
          step: 4,
          title: 'Negotiation & Agreement',
          description: 'Negotiate renewal terms. Process any package changes. Get commitment and timeline.',
          responsible: 'AM + Manager',
          timeframe: '30-45 days before',
          tools: ['Pricing Guidelines', 'Approval Matrix'],
          checkpoints: ['Terms agreed', 'Approvals obtained', 'Contract prepared', 'Signing scheduled']
        },
        {
          step: 5,
          title: 'Contract Execution',
          description: 'Execute renewal contract. Update system. Confirm ongoing service. Schedule year plan meeting.',
          responsible: 'AM + Operations',
          timeframe: '7+ days before expiry',
          tools: ['Contract Template', 'Renewal Checklist'],
          checkpoints: ['Contract signed', 'System updated', 'Service confirmed', 'Year plan scheduled']
        }
      ],
      kpis: [
        { metric: 'Renewal Rate', target: '>85%' },
        { metric: 'On-Time Renewal', target: '>90%' },
        { metric: 'Revenue Retention', target: '>95%' },
        { metric: 'Price Increase', target: '>5%' }
      ],
      escalation: 'At-risk renewals escalate to Sales Director. Major account renewals require executive involvement.'
    },
    {
      id: 'merchant-offboarding',
      title: 'Merchant Offboarding',
      icon: Trash2,
      color: 'red',
      description: 'Properly offboarding departing merchants',
      steps: [
        {
          step: 1,
          title: 'Termination Request',
          description: 'Receive and document termination request. Verify authorization and contract terms.',
          responsible: 'Account Manager',
          timeframe: 'Within 24 hours',
          tools: ['Termination Form', 'Contract Review'],
          checkpoints: ['Request documented', 'Terms reviewed', 'Notice period confirmed', 'Exit date set']
        },
        {
          step: 2,
          title: 'Exit Interview',
          description: 'Conduct exit interview. Understand reasons, gather feedback, explore win-back opportunity.',
          responsible: 'AM + Manager',
          timeframe: 'Within 1 week',
          tools: ['Exit Interview Form', 'Feedback Template'],
          tips: ['Be professional', 'Listen without defending', 'Document everything', 'Leave door open']
        },
        {
          step: 3,
          title: 'Settlement',
          description: 'Calculate final settlement: pending payments, deposits, prepaid fees. Process refunds if applicable.',
          responsible: 'Finance',
          timeframe: '3-5 business days',
          tools: ['Settlement Calculator', 'Payment Processing'],
          checkpoints: ['Balance calculated', 'Payments cleared', 'Refunds processed', 'Statement sent']
        },
        {
          step: 4,
          title: 'System Deactivation',
          description: 'Remove merchant from app. Deactivate account. Archive data per retention policy.',
          responsible: 'Operations + Tech',
          timeframe: 'On exit date',
          tools: ['Deactivation Checklist', 'Archive Process'],
          checkpoints: ['Profile removed', 'Account deactivated', 'Data archived', 'Access revoked']
        },
        {
          step: 5,
          title: 'Materials Return',
          description: 'Coordinate return of Nuqta materials: POS equipment, signage, tablets if provided.',
          responsible: 'Operations',
          timeframe: 'Within 2 weeks',
          tools: ['Equipment List', 'Return Pickup'],
          checkpoints: ['Materials listed', 'Pickup scheduled', 'Items received', 'Condition documented']
        }
      ],
      kpis: [
        { metric: 'Settlement Time', target: '<7 days' },
        { metric: 'Exit Interview', target: '100%' },
        { metric: 'Equipment Return', target: '>95%' },
        { metric: 'Clean Exit', target: '100%' }
      ],
      escalation: 'Settlement disputes go to Finance Manager. Legal disputes involve Legal team. Win-back opportunities to Sales Director.'
    }
  ],
  'legal-compliance': [
    {
      id: 'contract-review',
      title: 'Contract Review & Approval',
      icon: FileText,
      color: 'blue',
      description: 'Reviewing and approving legal contracts',
      steps: [
        {
          step: 1,
          title: 'Contract Submission',
          description: 'Receive contract for review. Log in tracking system with urgency, type, and parties involved.',
          responsible: 'Requesting Team',
          timeframe: 'Immediate',
          tools: ['Contract Log', 'Request Form'],
          checkpoints: ['Contract logged', 'Type identified', 'Urgency set', 'Complete documents received']
        },
        {
          step: 2,
          title: 'Initial Legal Review',
          description: 'Review key terms: liability, payment terms, termination, IP rights, data protection clauses.',
          responsible: 'Legal Counsel',
          timeframe: '2-5 business days',
          tools: ['Review Checklist', 'Standard Terms Reference'],
          checkpoints: ['Key terms reviewed', 'Risk areas flagged', 'Comparison to standard', 'Notes documented']
        },
        {
          step: 3,
          title: 'Negotiation Support',
          description: 'Provide redlines and negotiation points. Support business team in discussions.',
          responsible: 'Legal Counsel',
          timeframe: 'As needed',
          tools: ['Redline Template', 'Negotiation Points'],
          tips: ['Prioritize must-haves vs nice-to-haves', 'Prepare fallback positions', 'Document all changes']
        },
        {
          step: 4,
          title: 'Final Approval',
          description: 'Review final version. Obtain internal approvals per authority matrix. Clear for signature.',
          responsible: 'Legal + Approver',
          timeframe: '1-2 days',
          tools: ['Approval Matrix', 'Signature Authority'],
          checkpoints: ['Final version reviewed', 'Approvals obtained', 'Cleared for signature', 'Logged']
        },
        {
          step: 5,
          title: 'Execution & Filing',
          description: 'Coordinate signing. Obtain executed copies. File in contract management system.',
          responsible: 'Legal',
          timeframe: '1-3 days',
          tools: ['DocuSign', 'Contract Repository'],
          checkpoints: ['Signed by all parties', 'Copies obtained', 'Filed correctly', 'Key dates calendared']
        }
      ],
      kpis: [
        { metric: 'Review Time', target: '<5 days' },
        { metric: 'First-Pass Approval', target: '>70%' },
        { metric: 'Contract Accuracy', target: '100%' },
        { metric: 'Filing Compliance', target: '100%' }
      ],
      escalation: 'High-value contracts (>AED 100K) require CEO approval. Unusual terms escalate to external counsel.'
    },
    {
      id: 'compliance-audit',
      title: 'Compliance Audit Process',
      icon: Shield,
      color: 'green',
      description: 'Conducting internal compliance audits',
      steps: [
        {
          step: 1,
          title: 'Audit Planning',
          description: 'Define audit scope, timeline, and team. Notify relevant departments. Prepare audit checklist.',
          responsible: 'Compliance Manager',
          timeframe: '2 weeks before',
          tools: ['Audit Plan Template', 'Notification Email'],
          checkpoints: ['Scope defined', 'Team assigned', 'Departments notified', 'Checklist prepared']
        },
        {
          step: 2,
          title: 'Document Collection',
          description: 'Request and collect required documentation. Verify completeness and organize for review.',
          responsible: 'Compliance Team',
          timeframe: '1 week',
          tools: ['Document Request List', 'Tracking Sheet'],
          checkpoints: ['All docs requested', 'Received and logged', 'Organized', 'Gaps identified']
        },
        {
          step: 3,
          title: 'Audit Execution',
          description: 'Review documents, conduct interviews, test controls. Document findings and evidence.',
          responsible: 'Compliance Team',
          timeframe: '1-2 weeks',
          tools: ['Audit Workpapers', 'Interview Guide'],
          tips: ['Be thorough but efficient', 'Document everything', 'Maintain independence']
        },
        {
          step: 4,
          title: 'Report Preparation',
          description: 'Compile findings, assess severity, draft recommendations. Review with management.',
          responsible: 'Compliance Manager',
          timeframe: '1 week',
          tools: ['Audit Report Template', 'Severity Matrix'],
          checkpoints: ['Findings compiled', 'Severity rated', 'Recommendations drafted', 'Management reviewed']
        },
        {
          step: 5,
          title: 'Remediation Tracking',
          description: 'Agree on action plans. Track remediation progress. Verify implementation.',
          responsible: 'Compliance Manager',
          timeframe: 'Ongoing',
          tools: ['Action Tracker', 'Follow-up Schedule'],
          checkpoints: ['Actions agreed', 'Owners assigned', 'Progress tracked', 'Implementation verified']
        }
      ],
      kpis: [
        { metric: 'Audit Completion', target: 'On schedule' },
        { metric: 'Finding Resolution', target: '<30 days' },
        { metric: 'Critical Findings', target: '0' },
        { metric: 'Repeat Findings', target: '<10%' }
      ],
      escalation: 'Critical compliance gaps escalate immediately to CEO and Board. Regulatory issues involve external counsel.'
    },
    {
      id: 'data-privacy',
      title: 'Data Privacy Compliance',
      icon: Lock,
      color: 'purple',
      description: 'Ensuring data privacy and protection compliance',
      steps: [
        {
          step: 1,
          title: 'Data Mapping',
          description: 'Maintain inventory of personal data: what, where, why collected. Update quarterly.',
          responsible: 'DPO/Compliance',
          timeframe: 'Quarterly',
          tools: ['Data Map Template', 'System Inventory'],
          checkpoints: ['All data identified', 'Purposes documented', 'Storage locations mapped', 'Retention noted']
        },
        {
          step: 2,
          title: 'Privacy Impact Assessment',
          description: 'Conduct PIA for new features/processes involving personal data. Document risks and mitigations.',
          responsible: 'DPO + Project Team',
          timeframe: 'Before launch',
          tools: ['PIA Template', 'Risk Register'],
          tips: ['Involve early in projects', 'Consider user perspective', 'Document all decisions']
        },
        {
          step: 3,
          title: 'Consent Management',
          description: 'Ensure proper consent collection. Maintain consent records. Handle opt-outs.',
          responsible: 'Product + Legal',
          timeframe: 'Ongoing',
          tools: ['Consent Management System', 'Opt-out Process'],
          checkpoints: ['Consent captured', 'Records maintained', 'Opt-outs processed', 'Preferences respected']
        },
        {
          step: 4,
          title: 'Data Subject Requests',
          description: 'Handle access, deletion, and portability requests within legal timeframes.',
          responsible: 'Support + Legal',
          timeframe: 'Per request',
          tools: ['DSR Process', 'Response Templates'],
          checkpoints: ['Request verified', 'Data located', 'Response prepared', 'Deadline met']
        },
        {
          step: 5,
          title: 'Breach Response',
          description: 'If breach occurs: contain, assess, notify as required, remediate. Document lessons learned.',
          responsible: 'Security + Legal',
          timeframe: 'Per incident',
          tools: ['Breach Response Plan', 'Notification Templates'],
          checkpoints: ['Breach contained', 'Impact assessed', 'Notifications sent', 'Remediation complete']
        }
      ],
      kpis: [
        { metric: 'DSR Response', target: '<30 days' },
        { metric: 'Consent Rate', target: '>80%' },
        { metric: 'Data Breaches', target: '0' },
        { metric: 'Audit Findings', target: '0 critical' }
      ],
      escalation: 'Data breaches require immediate CEO notification and potential regulatory reporting within 72 hours.'
    }
  ],
  'security-operations': [
    {
      id: 'access-management',
      title: 'Access Management',
      icon: Key,
      color: 'amber',
      description: 'Managing system access and permissions',
      steps: [
        {
          step: 1,
          title: 'Access Request',
          description: 'Receive access request. Verify requester identity and manager approval.',
          responsible: 'IT Security',
          timeframe: '1 business day',
          tools: ['Access Request Form', 'Approval Workflow'],
          checkpoints: ['Request logged', 'Identity verified', 'Manager approved', 'Role confirmed']
        },
        {
          step: 2,
          title: 'Role Assignment',
          description: 'Assign appropriate role based on job function. Apply least privilege principle.',
          responsible: 'IT Security',
          timeframe: '2-4 hours',
          tools: ['Role Matrix', 'Access Control System'],
          tips: ['Start with minimal access', 'Document justification', 'Set review dates for temp access']
        },
        {
          step: 3,
          title: 'Account Provisioning',
          description: 'Create accounts in relevant systems. Configure MFA. Send credentials securely.',
          responsible: 'IT Team',
          timeframe: '2-4 hours',
          tools: ['Provisioning System', 'Secure Credential Sharing'],
          checkpoints: ['Accounts created', 'MFA enabled', 'Credentials delivered', 'User acknowledged']
        },
        {
          step: 4,
          title: 'Access Reviews',
          description: 'Quarterly review of all access. Remove unnecessary permissions. Recertify active users.',
          responsible: 'IT Security + Managers',
          timeframe: 'Quarterly',
          tools: ['Access Review Report', 'Recertification Form'],
          checkpoints: ['All users reviewed', 'Excess removed', 'Recertifications complete', 'Exceptions documented']
        },
        {
          step: 5,
          title: 'Termination/Change',
          description: 'Immediately revoke access on termination. Adjust on role change. Collect company devices.',
          responsible: 'IT Security + HR',
          timeframe: 'Same day',
          tools: ['Termination Checklist', 'Access Revocation'],
          checkpoints: ['All access revoked', 'Devices collected', 'Handover complete', 'Documented']
        }
      ],
      kpis: [
        { metric: 'Provisioning Time', target: '<1 day' },
        { metric: 'Review Completion', target: '100%' },
        { metric: 'Termination Speed', target: 'Same day' },
        { metric: 'Audit Findings', target: '0' }
      ],
      escalation: 'Unauthorized access attempts escalate immediately to Security Lead. Failed terminations escalate to HR Director.'
    },
    {
      id: 'incident-response',
      title: 'Security Incident Response',
      icon: AlertTriangle,
      color: 'red',
      description: 'Responding to security incidents',
      steps: [
        {
          step: 1,
          title: 'Detection & Triage',
          description: 'Receive alert or report. Assess severity and scope. Activate incident response if needed.',
          responsible: 'Security Team',
          timeframe: 'Immediate',
          tools: ['Monitoring System', 'Incident Classification'],
          checkpoints: ['Alert received', 'Severity assessed', 'Scope determined', 'Response activated']
        },
        {
          step: 2,
          title: 'Containment',
          description: 'Isolate affected systems. Prevent spread. Preserve evidence. Maintain operations.',
          responsible: 'Security + IT',
          timeframe: '<1 hour for critical',
          tools: ['Containment Playbook', 'Isolation Tools'],
          tips: ['Prioritize containment over investigation', 'Document all actions', 'Preserve forensic evidence']
        },
        {
          step: 3,
          title: 'Investigation',
          description: 'Determine root cause, attack vector, and full impact. Collect and analyze evidence.',
          responsible: 'Security Team',
          timeframe: '24-72 hours',
          tools: ['Forensic Tools', 'Log Analysis'],
          checkpoints: ['Root cause found', 'Attack vector identified', 'Full impact assessed', 'Evidence preserved']
        },
        {
          step: 4,
          title: 'Eradication & Recovery',
          description: 'Remove threat. Restore systems from clean state. Verify security before resuming.',
          responsible: 'IT + Security',
          timeframe: 'Varies',
          tools: ['Recovery Playbook', 'Verification Checklist'],
          checkpoints: ['Threat removed', 'Systems restored', 'Security verified', 'Operations resumed']
        },
        {
          step: 5,
          title: 'Post-Incident Review',
          description: 'Document incident fully. Conduct lessons learned. Update defenses. Report as required.',
          responsible: 'Security Manager',
          timeframe: 'Within 1 week',
          tools: ['Incident Report', 'Lessons Learned Template'],
          checkpoints: ['Report completed', 'Lessons documented', 'Improvements planned', 'Notifications sent']
        }
      ],
      kpis: [
        { metric: 'Detection Time', target: '<15 min' },
        { metric: 'Containment Time', target: '<1 hr' },
        { metric: 'Resolution Time', target: '<24 hrs' },
        { metric: 'Recurrence', target: '0%' }
      ],
      escalation: 'Critical incidents (data breach, ransomware) escalate immediately to CEO, Legal, and potentially regulators.'
    },
    {
      id: 'fraud-prevention',
      title: 'Fraud Detection & Prevention',
      icon: Shield,
      color: 'orange',
      description: 'Detecting and preventing fraudulent activities',
      steps: [
        {
          step: 1,
          title: 'Monitoring',
          description: 'Run daily fraud detection algorithms. Review flagged transactions. Monitor for patterns.',
          responsible: 'Fraud Team',
          timeframe: 'Daily',
          tools: ['Fraud Detection System', 'Alert Dashboard'],
          checkpoints: ['Algorithms running', 'Alerts reviewed', 'Patterns noted', 'Escalations made']
        },
        {
          step: 2,
          title: 'Investigation',
          description: 'Investigate flagged accounts/transactions. Gather evidence. Determine if fraud.',
          responsible: 'Fraud Analyst',
          timeframe: '24-48 hours',
          tools: ['Investigation Toolkit', 'Evidence Collection'],
          tips: ['Check related accounts', 'Look for patterns', 'Document thoroughly', 'Remain objective']
        },
        {
          step: 3,
          title: 'Action',
          description: 'If confirmed fraud: block account, reverse transactions, report to authorities if needed.',
          responsible: 'Fraud Manager',
          timeframe: 'Immediate upon confirmation',
          tools: ['Account Block', 'Transaction Reversal', 'Report Template'],
          checkpoints: ['Account blocked', 'Transactions reversed', 'User notified', 'Authorities informed']
        },
        {
          step: 4,
          title: 'Recovery',
          description: 'Attempt to recover losses. Work with payment providers. Support legal action if warranted.',
          responsible: 'Fraud + Finance',
          timeframe: 'Ongoing',
          tools: ['Recovery Tracker', 'Legal Coordination'],
          checkpoints: ['Recovery attempted', 'Insurance claimed', 'Legal assessed', 'Results documented']
        },
        {
          step: 5,
          title: 'Prevention Update',
          description: 'Update fraud rules based on learnings. Train team on new patterns. Report metrics.',
          responsible: 'Fraud Manager',
          timeframe: 'Monthly',
          tools: ['Rule Engine', 'Training Materials'],
          checkpoints: ['Rules updated', 'Team trained', 'Metrics reported', 'Improvements tracked']
        }
      ],
      kpis: [
        { metric: 'Detection Rate', target: '>95%' },
        { metric: 'False Positive', target: '<5%' },
        { metric: 'Loss Rate', target: '<0.1%' },
        { metric: 'Recovery Rate', target: '>50%' }
      ],
      escalation: 'Large fraud cases (>AED 10K) escalate to CFO. Organized fraud rings involve law enforcement.'
    }
  ],
  'reporting-analytics': [
    {
      id: 'merchant-reports',
      title: 'Monthly Merchant Report Generation',
      icon: BarChart3,
      color: 'blue',
      description: 'Creating and sending merchant performance reports',
      steps: [
        {
          step: 1,
          title: 'Data Collection',
          description: 'Pull merchant performance data: transactions, revenue, customers, engagement metrics.',
          responsible: 'Analytics Team',
          timeframe: '1st of month',
          tools: ['Analytics Dashboard', 'Data Export'],
          checkpoints: ['All data pulled', 'Accuracy verified', 'Anomalies flagged', 'Period correct']
        },
        {
          step: 2,
          title: 'Report Generation',
          description: 'Generate individual reports for each merchant based on package tier template.',
          responsible: 'Analytics Team',
          timeframe: '2nd-3rd of month',
          tools: ['Report Generator', 'Template Library'],
          checkpoints: ['Reports generated', 'Templates correct', 'Calculations verified', 'Charts rendered']
        },
        {
          step: 3,
          title: 'Insights Addition',
          description: 'Account Managers add personalized insights, recommendations, and highlights.',
          responsible: 'Account Managers',
          timeframe: '3rd-4th of month',
          tools: ['Report Editor', 'Insight Templates'],
          tips: ['Include specific recommendations', 'Highlight wins', 'Compare to benchmarks', 'Add action items']
        },
        {
          step: 4,
          title: 'Quality Review',
          description: 'Review sample reports for accuracy and quality. Approve for distribution.',
          responsible: 'Operations Manager',
          timeframe: '4th of month',
          tools: ['Review Checklist', 'Approval System'],
          checkpoints: ['Data accurate', 'Insights relevant', 'Format correct', 'Approved']
        },
        {
          step: 5,
          title: 'Distribution',
          description: 'Send reports via email and update merchant dashboard. Schedule follow-up calls for key accounts.',
          responsible: 'Account Managers',
          timeframe: '5th of month',
          tools: ['Email System', 'Dashboard Update'],
          checkpoints: ['Emails sent', 'Dashboard updated', 'Delivery confirmed', 'Follow-ups scheduled']
        }
      ],
      kpis: [
        { metric: 'Report Accuracy', target: '100%' },
        { metric: 'On-Time Delivery', target: 'By 5th' },
        { metric: 'Merchant Engagement', target: '>60% open rate' },
        { metric: 'Follow-Up Rate', target: '>30%' }
      ],
      escalation: 'Data discrepancies escalate to Analytics Lead. Merchant complaints about reports go to Account Manager + Operations.'
    },
    {
      id: 'user-analytics',
      title: 'User Analytics Reporting',
      icon: PieChart,
      color: 'purple',
      description: 'Tracking and reporting user metrics',
      steps: [
        {
          step: 1,
          title: 'Daily Metrics Tracking',
          description: 'Monitor daily: DAU, signups, transactions, cashback issued, retention. Flag anomalies.',
          responsible: 'Analytics Team',
          timeframe: 'Daily by 10am',
          tools: ['Analytics Dashboard', 'Alert System'],
          checkpoints: ['Metrics updated', 'Trends noted', 'Anomalies flagged', 'Slack update posted']
        },
        {
          step: 2,
          title: 'Weekly Summary',
          description: 'Compile weekly metrics summary. Compare to targets and previous periods. Identify trends.',
          responsible: 'Analytics Team',
          timeframe: 'Every Monday',
          tools: ['Weekly Report Template', 'Trend Analysis'],
          checkpoints: ['Data compiled', 'Comparisons done', 'Trends identified', 'Report drafted']
        },
        {
          step: 3,
          title: 'Cohort Analysis',
          description: 'Run monthly cohort analysis: retention curves, LTV progression, activation funnels.',
          responsible: 'Analytics Lead',
          timeframe: 'Monthly',
          tools: ['Cohort Tools', 'Funnel Analysis'],
          tips: ['Segment by acquisition source', 'Track activation milestones', 'Compare cohort quality']
        },
        {
          step: 4,
          title: 'Executive Dashboard',
          description: 'Update executive dashboard with key metrics, visualizations, and commentary.',
          responsible: 'Analytics Lead',
          timeframe: 'Weekly',
          tools: ['Dashboard Tool', 'Data Visualization'],
          checkpoints: ['All metrics updated', 'Visualizations current', 'Commentary added', 'Accessible']
        },
        {
          step: 5,
          title: 'Monthly Presentation',
          description: 'Prepare and present monthly user metrics to leadership. Include insights and recommendations.',
          responsible: 'Analytics Lead',
          timeframe: 'First week of month',
          tools: ['Presentation Deck', 'Meeting'],
          checkpoints: ['Deck prepared', 'Insights included', 'Recommendations made', 'Questions addressed']
        }
      ],
      kpis: [
        { metric: 'Reporting Accuracy', target: '100%' },
        { metric: 'On-Time Delivery', target: '100%' },
        { metric: 'Insight Quality', target: '>4/5 rating' },
        { metric: 'Action Items', target: '>5/month' }
      ],
      escalation: 'Data integrity issues escalate to CTO. Significant metric drops trigger immediate leadership alert.'
    },
    {
      id: 'executive-dashboard',
      title: 'Executive Dashboard Updates',
      icon: Monitor,
      color: 'indigo',
      description: 'Maintaining real-time executive dashboards',
      steps: [
        {
          step: 1,
          title: 'Data Pipeline Check',
          description: 'Verify all data pipelines running correctly. Check for failures, delays, or data quality issues.',
          responsible: 'Analytics Team',
          timeframe: 'Daily by 9am',
          tools: ['Pipeline Monitor', 'Alert System'],
          checkpoints: ['Pipelines checked', 'Failures resolved', 'Data quality OK', 'Delays addressed']
        },
        {
          step: 2,
          title: 'Dashboard Refresh',
          description: 'Ensure all dashboard components refreshed with latest data. Verify calculations.',
          responsible: 'Analytics Team',
          timeframe: 'Daily',
          tools: ['Dashboard Admin', 'Calculation Validator'],
          checkpoints: ['All widgets refreshed', 'Calculations verified', 'No broken elements', 'Performance OK']
        },
        {
          step: 3,
          title: 'Alert Configuration',
          description: 'Maintain and tune alert thresholds. Add new alerts as needed. Remove obsolete ones.',
          responsible: 'Analytics Lead',
          timeframe: 'Weekly',
          tools: ['Alert Manager', 'Threshold Config'],
          tips: ['Avoid alert fatigue', 'Set meaningful thresholds', 'Test alerts regularly']
        },
        {
          step: 4,
          title: 'Feature Updates',
          description: 'Implement new dashboard requests. Add new metrics, visualizations, or views as needed.',
          responsible: 'Analytics Team',
          timeframe: 'Ongoing',
          tools: ['Dashboard Builder', 'Request Tracker'],
          checkpoints: ['Request received', 'Scoped', 'Implemented', 'Tested', 'Deployed']
        },
        {
          step: 5,
          title: 'User Training',
          description: 'Train new users on dashboard. Provide documentation. Gather feedback for improvements.',
          responsible: 'Analytics Lead',
          timeframe: 'As needed',
          tools: ['Training Guide', 'Documentation'],
          checkpoints: ['Training scheduled', 'Documentation updated', 'Feedback collected', 'Improvements planned']
        }
      ],
      kpis: [
        { metric: 'Uptime', target: '>99.5%' },
        { metric: 'Data Freshness', target: '<4 hrs' },
        { metric: 'User Satisfaction', target: '>4/5' },
        { metric: 'Alert Accuracy', target: '>95%' }
      ],
      escalation: 'Dashboard downtime escalates to Tech immediately. Data quality issues go to Analytics Lead.'
    }
  ]
};

export default function SOPPage() {
  const [activeCategory, setActiveCategory] = useState('merchant-acquisition');
  const [expandedSOPs, setExpandedSOPs] = useState<string[]>(['lead-generation']);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'merchant-acquisition', name: 'Merchant Acquisition', icon: Target, color: 'blue' },
    { id: 'merchant-onboarding', name: 'Merchant Onboarding', icon: Rocket, color: 'amber' },
    { id: 'marketing-execution', name: 'Marketing Execution', icon: Megaphone, color: 'purple' },
    { id: 'customer-support', name: 'Customer Support', icon: Headphones, color: 'cyan' },
    { id: 'finance-operations', name: 'Finance Operations', icon: DollarSign, color: 'emerald' },
    { id: 'tech-operations', name: 'Tech & Operations', icon: Monitor, color: 'blue' },
    { id: 'user-operations', name: 'User Operations', icon: Users, color: 'green' },
    { id: 'hr-operations', name: 'HR & People', icon: UserPlus, color: 'amber' },
    { id: 'content-quality', name: 'Content & Quality', icon: Camera, color: 'pink' },
    { id: 'partnerships-events', name: 'Partnerships & Events', icon: Calendar, color: 'orange' },
    { id: 'merchant-lifecycle', name: 'Merchant Lifecycle', icon: RefreshCw, color: 'red' },
    { id: 'legal-compliance', name: 'Legal & Compliance', icon: Shield, color: 'blue' },
    { id: 'security-operations', name: 'Security Operations', icon: Lock, color: 'red' },
    { id: 'reporting-analytics', name: 'Reporting & Analytics', icon: BarChart3, color: 'indigo' },
  ];

  const toggleSOP = (id: string) => {
    setExpandedSOPs(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const currentSOPs = allSOPs[activeCategory] || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c9a227] to-[#e8c547] flex items-center justify-center">
                <span className="text-black font-bold text-xl">N</span>
              </div>
              <span className="text-2xl font-bold text-white">Nuqta</span>
            </Link>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">Standard Operating Procedures</span>
          </div>
          <Link
            href="/merchant-playbook"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="text-sm">Back to Playbook</span>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Standard Operating Procedures</h1>
          <p className="text-slate-400">Comprehensive guides for all Nuqta operations - 14 categories, 44 SOPs</p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
            <input
              type="text"
              placeholder="Search SOPs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-[#c9a227] focus:outline-none"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#c9a227] text-black'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <cat.icon size={18} />
              {cat.name}
            </button>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
            <div className="text-3xl font-bold text-[#c9a227]">{Object.keys(allSOPs).length}</div>
            <div className="text-slate-400 text-sm">Categories</div>
          </div>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
            <div className="text-3xl font-bold text-blue-400">
              {Object.values(allSOPs).flat().length}
            </div>
            <div className="text-slate-400 text-sm">Total SOPs</div>
          </div>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
            <div className="text-3xl font-bold text-green-400">
              {Object.values(allSOPs).flat().reduce((acc, sop) => acc + sop.steps.length, 0)}
            </div>
            <div className="text-slate-400 text-sm">Total Steps</div>
          </div>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
            <div className="text-3xl font-bold text-purple-400">24/7</div>
            <div className="text-slate-400 text-sm">Access</div>
          </div>
        </div>

        {/* SOPs List */}
        <div className="space-y-4">
          {currentSOPs.map((sop) => (
            <SOPCard
              key={sop.id}
              sop={sop}
              isExpanded={expandedSOPs.includes(sop.id)}
              onToggle={() => toggleSOP(sop.id)}
            />
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-12 bg-gradient-to-r from-[#c9a227]/10 to-purple-500/10 rounded-xl p-6 border border-[#c9a227]/30">
          <h3 className="text-xl font-bold text-white mb-4">Related Resources</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Merchant Playbook', href: '/merchant-playbook', icon: BookOpen },
              { name: 'Operations Manual', href: '/operations', icon: Settings },
              { name: 'Company Policies', href: '/policies', icon: Shield },
              { name: 'Onboarding Flow', href: '/merchant-onboarding', icon: UserPlus },
            ].map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all group"
              >
                <link.icon className="text-[#c9a227]" size={20} />
                <span className="text-white text-sm">{link.name}</span>
                <ExternalLink className="text-slate-500 group-hover:text-white ml-auto" size={14} />
              </Link>
            ))}
          </div>
        </div>
      </main>

      <GlobalFooter />
    </div>
  );
}
