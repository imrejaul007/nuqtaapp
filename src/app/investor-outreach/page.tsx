'use client';

import React, { useState } from 'react';
import GlobalFooter from '@/components/GlobalFooter';
import {
  Users,
  Building2,
  Mail,
  Phone,
  Globe,
  Linkedin,
  Target,
  DollarSign,
  TrendingUp,
  CheckCircle,
  Clock,
  Star,
  Calendar,
  MessageSquare,
  Send,
  Copy,
  ExternalLink,
  Filter,
  Search,
  MapPin,
  Briefcase,
  Award,
  ArrowRight,
  Zap,
  Heart,
  AlertCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

/**
 * NUQTA INVESTOR OUTREACH
 * =======================
 * Target investor list, outreach templates, and CRM tracking
 */

interface Investor {
  id: string;
  name: string;
  type: 'vc' | 'angel' | 'family-office' | 'corporate' | 'accelerator';
  stage: string[];
  checkSize: string;
  focus: string[];
  location: string;
  website: string;
  portfolio: string[];
  contacts: { name: string; title: string; linkedin?: string; email?: string }[];
  status: 'target' | 'contacted' | 'meeting' | 'passed' | 'interested';
  priority: 'high' | 'medium' | 'low';
  notes?: string;
  lastContact?: string;
}

export default function InvestorOutreachPage() {
  const [activeTab, setActiveTab] = useState('target-list');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [expandedInvestor, setExpandedInvestor] = useState<string | null>(null);
  const [copiedTemplate, setCopiedTemplate] = useState<string | null>(null);

  const tabs = [
    { id: 'target-list', label: 'Target Investors', icon: Target },
    { id: 'templates', label: 'Outreach Templates', icon: Mail },
    { id: 'pipeline', label: 'Pipeline Tracker', icon: TrendingUp },
    { id: 'playbook', label: 'Outreach Playbook', icon: Briefcase },
  ];

  // Target Investor List
  const investors: Investor[] = [
    // UAE VCs
    {
      id: '1',
      name: 'BECO Capital',
      type: 'vc',
      stage: ['Seed', 'Series A'],
      checkSize: '$500K - $5M',
      focus: ['Fintech', 'E-commerce', 'SaaS'],
      location: 'Dubai, UAE',
      website: 'https://beco.capital',
      portfolio: ['Careem', 'Kitopi', 'Swvl', 'Fetchr'],
      contacts: [
        { name: 'Dany Farha', title: 'Co-Founder & CEO', linkedin: 'danyfarha' },
        { name: 'Amir Farha', title: 'Co-Founder', linkedin: 'amirfarha' }
      ],
      status: 'target',
      priority: 'high',
      notes: 'Top-tier MENA VC. Invested in Careem. Strong fintech interest.'
    },
    {
      id: '2',
      name: 'Nuwa Capital',
      type: 'vc',
      stage: ['Seed', 'Series A', 'Series B'],
      checkSize: '$1M - $10M',
      focus: ['Fintech', 'Logistics', 'Healthcare'],
      location: 'Abu Dhabi, UAE',
      website: 'https://nuwa.capital',
      portfolio: ['Tamara', 'Tabby', 'Sary'],
      contacts: [
        { name: 'Khaled Talhouni', title: 'Managing Partner', linkedin: 'khaledtalhouni' }
      ],
      status: 'target',
      priority: 'high',
      notes: 'Backed Tamara and Tabby (BNPL). Very relevant for Nuqta.'
    },
    {
      id: '3',
      name: 'Shorooq Partners',
      type: 'vc',
      stage: ['Pre-Seed', 'Seed', 'Series A'],
      checkSize: '$200K - $3M',
      focus: ['Fintech', 'E-commerce', 'Proptech'],
      location: 'Abu Dhabi, UAE',
      website: 'https://shorooq.com',
      portfolio: ['Sary', 'Trukker', 'Rain'],
      contacts: [
        { name: 'Shane Shin', title: 'Managing Partner', linkedin: 'shaneshin' },
        { name: 'Mahmoud Adi', title: 'Partner', linkedin: 'mahmoudadi' }
      ],
      status: 'target',
      priority: 'high',
      notes: 'Active early-stage investor. Good fit for seed round.'
    },
    {
      id: '4',
      name: 'Global Ventures',
      type: 'vc',
      stage: ['Seed', 'Series A'],
      checkSize: '$500K - $5M',
      focus: ['Fintech', 'Mobility', 'Food Tech'],
      location: 'Dubai, UAE',
      website: 'https://global.vc',
      portfolio: ['Vezeeta', 'Eyewa', 'Mumzworld'],
      contacts: [
        { name: 'Noor Sweid', title: 'Founder & GP', linkedin: 'noorsweid' }
      ],
      status: 'target',
      priority: 'high',
      notes: 'Consumer-focused VC. Strong track record in MENA.'
    },
    {
      id: '5',
      name: 'Wamda Capital',
      type: 'vc',
      stage: ['Seed', 'Series A', 'Series B'],
      checkSize: '$500K - $8M',
      focus: ['Tech', 'Consumer', 'Fintech'],
      location: 'Dubai, UAE',
      website: 'https://wamda.com/capital',
      portfolio: ['Carriage', 'Instashop', 'Bayzat'],
      contacts: [
        { name: 'Fadi Ghandour', title: 'Executive Chairman', linkedin: 'fadighandour' }
      ],
      status: 'target',
      priority: 'medium',
      notes: 'Established MENA VC. Good for Series A.'
    },
    // Angel Investors
    {
      id: '6',
      name: 'Dubai Angel Investors',
      type: 'angel',
      stage: ['Pre-Seed', 'Seed'],
      checkSize: '$25K - $250K',
      focus: ['Tech', 'Consumer', 'Fintech'],
      location: 'Dubai, UAE',
      website: 'https://dubaiangelinvestors.com',
      portfolio: ['Various startups'],
      contacts: [
        { name: 'Sonia Weymuller', title: 'Managing Director', linkedin: 'soniaweymuller' }
      ],
      status: 'target',
      priority: 'high',
      notes: 'Active angel network. Good for initial funding.'
    },
    {
      id: '7',
      name: 'MENA Angels',
      type: 'angel',
      stage: ['Pre-Seed', 'Seed'],
      checkSize: '$50K - $500K',
      focus: ['Tech', 'E-commerce', 'Fintech'],
      location: 'UAE/Regional',
      website: 'https://menaangels.com',
      portfolio: ['Regional startups'],
      contacts: [
        { name: 'Various Members', title: 'Angel Network', linkedin: '' }
      ],
      status: 'target',
      priority: 'medium',
      notes: 'Regional angel network with strong UAE presence.'
    },
    // Family Offices
    {
      id: '8',
      name: 'Al Futtaim Group',
      type: 'family-office',
      stage: ['Series A', 'Series B'],
      checkSize: '$5M - $50M',
      focus: ['Retail Tech', 'Fintech', 'E-commerce'],
      location: 'Dubai, UAE',
      website: 'https://alfuttaim.com',
      portfolio: ['Strategic investments'],
      contacts: [
        { name: 'Investment Team', title: 'Corporate Ventures', linkedin: '' }
      ],
      status: 'target',
      priority: 'medium',
      notes: 'Major retail group. Strategic fit with merchant network.'
    },
    {
      id: '9',
      name: 'Majid Al Futtaim Ventures',
      type: 'corporate',
      stage: ['Seed', 'Series A'],
      checkSize: '$1M - $10M',
      focus: ['Retail', 'Fintech', 'Consumer Tech'],
      location: 'Dubai, UAE',
      website: 'https://majidalfuttaim.com',
      portfolio: ['Retailo', 'Various'],
      contacts: [
        { name: 'MAF Ventures Team', title: 'Investment Team', linkedin: '' }
      ],
      status: 'target',
      priority: 'high',
      notes: 'Mall of the Emirates owner. Strategic partnership potential.'
    },
    // Accelerators
    {
      id: '10',
      name: 'Flat6Labs',
      type: 'accelerator',
      stage: ['Pre-Seed'],
      checkSize: '$50K - $100K',
      focus: ['Tech', 'Fintech', 'Consumer'],
      location: 'Abu Dhabi, UAE',
      website: 'https://flat6labs.com',
      portfolio: ['500+ startups'],
      contacts: [
        { name: 'Ryaan Sharif', title: 'Managing Director', linkedin: 'ryaansharif' }
      ],
      status: 'target',
      priority: 'low',
      notes: 'Good accelerator but we may be past this stage.'
    },
    {
      id: '11',
      name: 'Hub71',
      type: 'accelerator',
      stage: ['Seed', 'Series A'],
      checkSize: 'Incentives + Funding',
      focus: ['Tech', 'Fintech', 'AI'],
      location: 'Abu Dhabi, UAE',
      website: 'https://hub71.com',
      portfolio: ['Various startups'],
      contacts: [
        { name: 'Hub71 Team', title: 'Programs', linkedin: '' }
      ],
      status: 'target',
      priority: 'medium',
      notes: 'Government-backed. Good for Abu Dhabi expansion.'
    },
    // International VCs with MENA presence
    {
      id: '12',
      name: '500 Global',
      type: 'vc',
      stage: ['Pre-Seed', 'Seed'],
      checkSize: '$150K - $500K',
      focus: ['Tech', 'Fintech', 'Consumer'],
      location: 'Global / MENA',
      website: 'https://500.co',
      portfolio: ['Careem', 'JadoPado', 'Various'],
      contacts: [
        { name: 'MENA Team', title: 'Investment Team', linkedin: '' }
      ],
      status: 'target',
      priority: 'medium',
      notes: 'Strong MENA presence. Good brand for cap table.'
    },
    {
      id: '13',
      name: 'Plug and Play MENA',
      type: 'accelerator',
      stage: ['Pre-Seed', 'Seed'],
      checkSize: '$50K - $250K',
      focus: ['Fintech', 'Retail Tech', 'Consumer'],
      location: 'Abu Dhabi, UAE',
      website: 'https://plugandplay.ae',
      portfolio: ['Various startups'],
      contacts: [
        { name: 'PnP MENA Team', title: 'Investment', linkedin: '' }
      ],
      status: 'target',
      priority: 'medium',
      notes: 'Good corporate connections for merchant partnerships.'
    },
  ];

  // Outreach Templates
  const outreachTemplates = [
    {
      id: 'cold-intro',
      title: 'Cold Email Introduction',
      subject: 'Nuqta - UAE Rewards Platform | [Investor Name] Introduction',
      body: `Hi [First Name],

I'm Rejaul Karim, founder of Nuqta - we're building the rewards layer for everyday spending in the UAE.

**The Problem:** UAE consumers spend AED 180B annually on daily purchases but earn nothing back. Meanwhile, merchants struggle with 40-60% customer churn.

**Our Solution:** Nuqta is a unified cashback platform where users earn Nuqta Coins at any partner merchant, creating a loyalty network effect that benefits both sides.

**Traction:**
- MVP launching Feb 2026
- 15+ merchants in pipeline (cafes, salons, retail)
- Raising $200K pre-seed at $1.5M valuation

**Why Now:** UAE's cashless economy is booming (95% digital payments), yet no unified loyalty solution exists. The Entertainer proved the market at $100M exit, but required cumbersome vouchers.

I'd love to share more about our vision. Would you have 20 minutes this week for a call?

Best,
Rejaul Karim
Founder, Nuqta
[Phone] | [Email]
nuqta.ae`,
      tips: [
        'Personalize the opening with specific mention of their portfolio',
        'Keep under 200 words for cold emails',
        'Include one clear ask (meeting)',
        'Send Tuesday-Thursday, 9-11 AM local time'
      ]
    },
    {
      id: 'warm-intro',
      title: 'Warm Introduction Request',
      subject: 'Intro Request: Nuqta → [Investor Name]',
      body: `Hi [Connector Name],

Hope you're doing well! I wanted to reach out because I'm raising a pre-seed round for Nuqta and I noticed you're connected to [Investor Name] at [Fund].

**Quick context on Nuqta:**
We're building the rewards infrastructure for UAE retail - think a unified cashback platform where users earn Nuqta Coins at any partner merchant.

**Why [Fund] is a fit:**
- They've invested in [similar company] showing interest in consumer fintech
- [Investor Name] specifically focuses on [relevant area]
- Their portfolio includes [relevant company] which could be synergistic

**Our ask:** $200K pre-seed to launch MVP and onboard 250 merchants

Would you feel comfortable making an email introduction? I've drafted a forwardable blurb below:

---
[Connector] here - wanted to introduce you to Rejaul Karim, founder of Nuqta. They're building a unified rewards platform for UAE retail and are raising pre-seed. Given your focus on [area], thought this might be interesting. I'll let Rejaul share more directly.
---

Thanks so much for considering!

Best,
Rejaul`,
      tips: [
        'Make it easy - provide the forwardable blurb',
        'Explain why this specific fund is relevant',
        'Keep the ask simple and specific',
        'Follow up once if no response in 5 days'
      ]
    },
    {
      id: 'follow-up',
      title: 'Follow-Up Email',
      subject: 'Re: Nuqta - Quick Follow Up',
      body: `Hi [First Name],

Following up on my email last week about Nuqta. I know inboxes get busy, so wanted to resurface this.

**Quick update since then:**
- Signed our first 5 merchant partners
- Completed app designs with our UI/UX team
- Featured in [Publication] for our approach to loyalty

If now isn't the right time, I completely understand. Would it be helpful if I circled back after our MVP launch in February?

Either way, appreciate your time.

Best,
Rejaul`,
      tips: [
        'Wait 5-7 days before following up',
        'Add new information/progress',
        'Give them an easy out (reduces pressure)',
        'Maximum 2-3 follow-ups total'
      ]
    },
    {
      id: 'meeting-request',
      title: 'Post-Interest Meeting Request',
      subject: 'Nuqta Deep Dive - Scheduling',
      body: `Hi [First Name],

Great connecting briefly! As discussed, I'd love to walk you through Nuqta in more detail.

**For our call, I'll cover:**
1. Market opportunity & competitive landscape
2. Product demo and roadmap
3. Business model & unit economics
4. Team and funding ask

**Suggested times (Dubai time):**
- [Day 1], [Time 1]
- [Day 2], [Time 2]
- [Day 3], [Time 3]

Or feel free to book directly: [Calendly link]

Looking forward to it!

Best,
Rejaul`,
      tips: [
        'Provide 3 specific time options',
        'Include Calendly for convenience',
        'Set expectations for meeting content',
        'Confirm time zone clearly'
      ]
    },
    {
      id: 'post-meeting',
      title: 'Post-Meeting Follow-Up',
      subject: 'Thanks + Nuqta Materials',
      body: `Hi [First Name],

Thanks for taking the time to learn about Nuqta today. Really appreciated your questions about [specific topic discussed].

As promised, here are the materials we discussed:

1. **Pitch Deck:** [Link to deck]
2. **Financial Model:** [Link to model]
3. **Data Room:** [Link to data room]

**Key points from our discussion:**
- [Point 1 they raised and how you addressed it]
- [Point 2 and your response]

**Next Steps:**
- [Whatever was agreed - partner meeting, follow-up call, etc.]

Please let me know if you need any additional information. Happy to jump on a follow-up call or answer questions async.

Best,
Rejaul`,
      tips: [
        'Send within 2 hours of meeting',
        'Reference specific discussion points',
        'Include all promised materials',
        'Clearly state next steps'
      ]
    },
    {
      id: 'update-email',
      title: 'Monthly Investor Update',
      subject: 'Nuqta Update - [Month Year]',
      body: `Hi [First Name],

Quick monthly update on Nuqta's progress:

**Highlights:**
🚀 Launched MVP to beta users
📈 [X] users signed up in first week
🏪 [Y] merchants now live on platform
💰 [Z] transactions processed

**Key Metrics:**
- MAU: [Number]
- Merchants: [Number]
- GMV: AED [Amount]
- D7 Retention: [X]%

**Challenges:**
- [Honest assessment of what's hard]
- [How you're addressing it]

**Help Needed:**
- Intros to [specific merchant category]
- Advice on [specific challenge]

**What's Next:**
- [Key milestone 1]
- [Key milestone 2]

Thanks for your continued interest in Nuqta!

Best,
Rejaul`,
      tips: [
        'Send monthly or after major milestones',
        'Lead with wins, but be honest about challenges',
        'Include specific asks for help',
        'Keep it scannable with bullets'
      ]
    }
  ];

  const copyTemplate = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTemplate(id);
    setTimeout(() => setCopiedTemplate(null), 2000);
  };

  const filteredInvestors = investors.filter(inv => {
    if (selectedType !== 'all' && inv.type !== selectedType) return false;
    if (selectedStatus !== 'all' && inv.status !== selectedStatus) return false;
    return true;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'interested': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'meeting': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'contacted': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'passed': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'vc': return Building2;
      case 'angel': return Users;
      case 'family-office': return Heart;
      case 'corporate': return Briefcase;
      case 'accelerator': return Zap;
      default: return Building2;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a1628] via-[#1a2d4a] to-[#0a1628] border-b border-[#c9a227]/20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-[#c9a227]/20 rounded-xl">
              <Target className="w-8 h-8 text-[#c9a227]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Investor Outreach</h1>
              <p className="text-gray-400">Target List, Templates & Pipeline Tracking</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-white">{investors.length}</p>
              <p className="text-xs text-gray-400">Total Targets</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-[#c9a227]">{investors.filter(i => i.priority === 'high').length}</p>
              <p className="text-xs text-gray-400">High Priority</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-yellow-400">{investors.filter(i => i.status === 'contacted').length}</p>
              <p className="text-xs text-gray-400">Contacted</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-blue-400">{investors.filter(i => i.status === 'meeting').length}</p>
              <p className="text-xs text-gray-400">In Meetings</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-green-400">{investors.filter(i => i.status === 'interested').length}</p>
              <p className="text-xs text-gray-400">Interested</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mt-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#c9a227] text-[#0a1628] font-bold'
                    : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800'
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
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Target List Tab */}
        {activeTab === 'target-list' && (
          <div className="space-y-6">
            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">Type:</span>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1.5 text-sm text-white"
                >
                  <option value="all">All Types</option>
                  <option value="vc">VC Funds</option>
                  <option value="angel">Angel Networks</option>
                  <option value="family-office">Family Offices</option>
                  <option value="corporate">Corporate VC</option>
                  <option value="accelerator">Accelerators</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm">Status:</span>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1.5 text-sm text-white"
                >
                  <option value="all">All Status</option>
                  <option value="target">Target</option>
                  <option value="contacted">Contacted</option>
                  <option value="meeting">In Meetings</option>
                  <option value="interested">Interested</option>
                  <option value="passed">Passed</option>
                </select>
              </div>
            </div>

            {/* Investor Cards */}
            <div className="space-y-4">
              {filteredInvestors.map((investor) => {
                const TypeIcon = getTypeIcon(investor.type);
                const isExpanded = expandedInvestor === investor.id;

                return (
                  <div key={investor.id} className="bg-[#0a1628] rounded-xl border border-gray-800 overflow-hidden">
                    <div
                      className="p-6 cursor-pointer hover:bg-gray-800/30 transition-colors"
                      onClick={() => setExpandedInvestor(isExpanded ? null : investor.id)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-gray-800 rounded-xl">
                            <TypeIcon className="w-6 h-6 text-[#c9a227]" />
                          </div>
                          <div>
                            <div className="flex items-center gap-3">
                              <h3 className="text-lg font-bold text-white">{investor.name}</h3>
                              <Star className={`w-4 h-4 ${getPriorityColor(investor.priority)}`} />
                            </div>
                            <div className="flex flex-wrap items-center gap-2 mt-1">
                              <span className="text-gray-500 text-sm">{investor.type.replace('-', ' ').toUpperCase()}</span>
                              <span className="text-gray-600">•</span>
                              <span className="text-gray-400 text-sm flex items-center gap-1">
                                <MapPin className="w-3 h-3" /> {investor.location}
                              </span>
                              <span className="text-gray-600">•</span>
                              <span className="text-[#c9a227] text-sm">{investor.checkSize}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(investor.status)}`}>
                            {investor.status}
                          </span>
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-gray-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {investor.focus.map((f, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded bg-gray-800 text-gray-400 text-xs">
                            {f}
                          </span>
                        ))}
                        {investor.stage.map((s, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded bg-[#c9a227]/20 text-[#c9a227] text-xs">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="border-t border-gray-800 p-6 bg-gray-900/30">
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Contacts */}
                          <div>
                            <h4 className="text-sm font-semibold text-[#c9a227] mb-3">Key Contacts</h4>
                            <div className="space-y-2">
                              {investor.contacts.map((contact, idx) => (
                                <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50">
                                  <div>
                                    <p className="text-white font-medium">{contact.name}</p>
                                    <p className="text-gray-500 text-sm">{contact.title}</p>
                                  </div>
                                  {contact.linkedin && (
                                    <a
                                      href={`https://linkedin.com/in/${contact.linkedin}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="p-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 transition-colors"
                                    >
                                      <Linkedin className="w-4 h-4 text-blue-400" />
                                    </a>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Portfolio & Notes */}
                          <div>
                            <h4 className="text-sm font-semibold text-[#c9a227] mb-3">Notable Portfolio</h4>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {investor.portfolio.map((company, idx) => (
                                <span key={idx} className="px-2 py-1 rounded bg-gray-800 text-gray-300 text-sm">
                                  {company}
                                </span>
                              ))}
                            </div>

                            {investor.notes && (
                              <>
                                <h4 className="text-sm font-semibold text-[#c9a227] mb-2">Notes</h4>
                                <p className="text-gray-400 text-sm">{investor.notes}</p>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3 mt-6 pt-4 border-t border-gray-800">
                          <a
                            href={investor.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-sm hover:bg-gray-700 transition-colors"
                          >
                            <Globe className="w-4 h-4" />
                            Website
                          </a>
                          <button className="flex items-center gap-2 px-4 py-2 bg-[#c9a227] text-[#0a1628] rounded-lg text-sm font-medium hover:bg-[#e8c547] transition-colors">
                            <Mail className="w-4 h-4" />
                            Draft Email
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Templates Tab */}
        {activeTab === 'templates' && (
          <div className="space-y-6">
            {outreachTemplates.map((template) => (
              <div key={template.id} className="bg-[#0a1628] rounded-xl border border-gray-800 overflow-hidden">
                <div className="p-6 border-b border-gray-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white">{template.title}</h3>
                      <p className="text-gray-400 text-sm mt-1">Subject: {template.subject}</p>
                    </div>
                    <button
                      onClick={() => copyTemplate(`Subject: ${template.subject}\n\n${template.body}`, template.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        copiedTemplate === template.id
                          ? 'bg-green-500 text-white'
                          : 'bg-[#c9a227] text-[#0a1628] hover:bg-[#e8c547]'
                      }`}
                    >
                      {copiedTemplate === template.id ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy Template
                        </>
                      )}
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <pre className="text-gray-300 text-sm whitespace-pre-wrap font-sans leading-relaxed bg-gray-800/30 rounded-lg p-4">
                    {template.body}
                  </pre>

                  {template.tips && (
                    <div className="mt-4 p-4 rounded-lg bg-blue-500/10 border border-blue-500/30">
                      <h4 className="text-blue-400 font-semibold text-sm mb-2">Tips</h4>
                      <ul className="space-y-1">
                        {template.tips.map((tip, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                            <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pipeline Tab */}
        {activeTab === 'pipeline' && (
          <div className="space-y-8">
            {/* Pipeline Kanban */}
            <div className="grid grid-cols-5 gap-4">
              {['target', 'contacted', 'meeting', 'interested', 'passed'].map((status) => {
                const statusInvestors = investors.filter(i => i.status === status);
                return (
                  <div key={status} className="bg-gray-800/30 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-white capitalize">{status}</h3>
                      <span className={`px-2 py-0.5 rounded text-xs ${getStatusColor(status)}`}>
                        {statusInvestors.length}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {statusInvestors.map((inv) => (
                        <div key={inv.id} className="p-3 rounded-lg bg-gray-900/50 border border-gray-700">
                          <p className="text-white text-sm font-medium">{inv.name}</p>
                          <p className="text-gray-500 text-xs">{inv.checkSize}</p>
                        </div>
                      ))}
                      {statusInvestors.length === 0 && (
                        <p className="text-gray-600 text-sm text-center py-4">No investors</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Conversion Metrics */}
            <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-bold mb-4">Pipeline Metrics</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">{investors.length}</p>
                  <p className="text-gray-400 text-sm">Total Targets</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-yellow-400">
                    {((investors.filter(i => i.status !== 'target').length / investors.length) * 100).toFixed(0)}%
                  </p>
                  <p className="text-gray-400 text-sm">Contacted Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-400">
                    {((investors.filter(i => ['meeting', 'interested'].includes(i.status)).length / Math.max(1, investors.filter(i => i.status !== 'target').length)) * 100).toFixed(0)}%
                  </p>
                  <p className="text-gray-400 text-sm">Meeting Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-400">
                    {((investors.filter(i => i.status === 'interested').length / Math.max(1, investors.filter(i => ['meeting', 'interested', 'passed'].includes(i.status)).length)) * 100).toFixed(0)}%
                  </p>
                  <p className="text-gray-400 text-sm">Interest Rate</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Playbook Tab */}
        {activeTab === 'playbook' && (
          <div className="space-y-8">
            {/* Outreach Process */}
            <div className="bg-gradient-to-r from-[#0a1628] to-[#1a2d4a] rounded-2xl p-8 border border-[#c9a227]/20">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#c9a227]" />
                Investor Outreach Playbook
              </h3>
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  { step: '1', title: 'Research', desc: 'Deep dive on fund thesis, portfolio, and contacts', icon: Search },
                  { step: '2', title: 'Warm Intro', desc: 'Find mutual connections, request introductions', icon: Users },
                  { step: '3', title: 'Outreach', desc: 'Personalized email or LinkedIn message', icon: Mail },
                  { step: '4', title: 'Meeting', desc: '30-min intro call, share deck afterwards', icon: Calendar },
                  { step: '5', title: 'Follow Up', desc: 'Send materials, answer questions, close', icon: ArrowRight },
                ].map((step) => (
                  <div key={step.step} className="text-center">
                    <div className="w-12 h-12 bg-[#c9a227]/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-[#c9a227]" />
                    </div>
                    <div className="w-8 h-8 bg-[#c9a227] rounded-full mx-auto mb-2 flex items-center justify-center text-[#0a1628] font-bold text-sm">
                      {step.step}
                    </div>
                    <h4 className="font-semibold text-white">{step.title}</h4>
                    <p className="text-gray-400 text-xs mt-1">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Best Practices */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
                <h4 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Do's
                </h4>
                <ul className="space-y-3">
                  {[
                    'Research the investor thoroughly before reaching out',
                    'Personalize every email with specific references',
                    'Lead with traction and metrics, not just vision',
                    'Follow up persistently but respectfully (3x max)',
                    'Send updates monthly, even to investors who passed',
                    'Ask for feedback after rejections',
                    'Build relationships before you need to raise',
                    'Be transparent about challenges'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
                <h4 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Don'ts
                </h4>
                <ul className="space-y-3">
                  {[
                    'Send generic mass emails to investor lists',
                    'Pitch investors who don\'t invest in your stage/sector',
                    'Attach deck in first cold email (just tease it)',
                    'Follow up more than 3 times without response',
                    'Badmouth other investors or competitors',
                    'Exaggerate metrics or make false claims',
                    'Be pushy or aggressive in follow-ups',
                    'Neglect investors after they pass (they talk to each other)'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                      <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Timing Tips */}
            <div className="bg-[#0a1628] rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#c9a227]" />
                Timing & Cadence
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-[#c9a227] font-semibold mb-2">Best Days/Times</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Tuesday-Thursday</li>
                    <li>• 9-11 AM or 2-4 PM local time</li>
                    <li>• Avoid Mondays and Fridays</li>
                    <li>• Avoid major holidays</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[#c9a227] font-semibold mb-2">Follow-Up Cadence</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• 1st follow-up: 5-7 days</li>
                    <li>• 2nd follow-up: 7-10 days</li>
                    <li>• 3rd follow-up: 14 days (last one)</li>
                    <li>• After 3x: Move to nurture list</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[#c9a227] font-semibold mb-2">Fundraising Timeline</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Start 6 months before needed</li>
                    <li>• Expect 3-6 months to close</li>
                    <li>• 100 targets → 20 meetings → 2-5 terms</li>
                    <li>• Always be fundraising (relationships)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <GlobalFooter />
    </div>
  );
}
