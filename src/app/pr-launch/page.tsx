'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import GlobalFooter from '@/components/GlobalFooter';
import {
  ArrowLeft,
  Newspaper,
  Radio,
  Tv,
  Mic,
  Users,
  Calendar,
  Clock,
  Target,
  Mail,
  Phone,
  Globe,
  Copy,
  Check,
  ChevronDown,
  ChevronRight,
  FileText,
  Megaphone,
  Star,
  Zap,
  Award,
  Building2,
  TrendingUp,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

interface MediaOutlet {
  id: string;
  name: string;
  type: 'newspaper' | 'magazine' | 'online' | 'tv' | 'radio' | 'podcast';
  focus: string[];
  audience: string;
  contact?: string;
  notes: string;
  priority: 'high' | 'medium' | 'low';
}

interface PRActivity {
  id: string;
  phase: string;
  timing: string;
  activity: string;
  details: string;
  owner: string;
  deliverables: string[];
}

const mediaOutlets: MediaOutlet[] = [
  // Newspapers
  {
    id: 'm1',
    name: 'Gulf News',
    type: 'newspaper',
    focus: ['business', 'tech', 'lifestyle'],
    audience: 'UAE residents, business community',
    contact: 'business@gulfnews.com',
    notes: 'Largest English daily. Good for business/tech stories.',
    priority: 'high'
  },
  {
    id: 'm2',
    name: 'Khaleej Times',
    type: 'newspaper',
    focus: ['business', 'tech', 'startups'],
    audience: 'UAE residents, entrepreneurs',
    contact: 'editor@khaleejtimes.com',
    notes: 'Strong startup coverage. Tech-friendly editorial team.',
    priority: 'high'
  },
  {
    id: 'm3',
    name: 'The National',
    type: 'newspaper',
    focus: ['business', 'economy', 'UAE news'],
    audience: 'Business leaders, government',
    contact: 'news@thenationalnews.com',
    notes: 'Premium positioning. Great for credibility.',
    priority: 'high'
  },
  {
    id: 'm4',
    name: 'Al Bayan (Arabic)',
    type: 'newspaper',
    focus: ['UAE news', 'business', 'tech'],
    audience: 'Arabic-speaking UAE residents',
    contact: 'info@albayan.ae',
    notes: 'Important for Arabic audience reach.',
    priority: 'medium'
  },
  {
    id: 'm5',
    name: 'Emarat Al Youm (Arabic)',
    type: 'newspaper',
    focus: ['UAE news', 'lifestyle'],
    audience: 'Arabic-speaking Emiratis',
    contact: 'editor@emaratalyoum.com',
    notes: 'Strong local Emirati readership.',
    priority: 'medium'
  },

  // Online Publications
  {
    id: 'm6',
    name: 'Arabian Business',
    type: 'online',
    focus: ['business', 'startups', 'tech'],
    audience: 'Business executives, investors',
    contact: 'editorial@arabianbusiness.com',
    notes: 'Perfect for startup/funding news. Read by investors.',
    priority: 'high'
  },
  {
    id: 'm7',
    name: 'Entrepreneur Middle East',
    type: 'online',
    focus: ['startups', 'entrepreneurship', 'funding'],
    audience: 'Entrepreneurs, startup ecosystem',
    contact: 'editor@entrepreneur.com/me',
    notes: 'Ideal for founder stories, startup launches.',
    priority: 'high'
  },
  {
    id: 'm8',
    name: 'Zawya',
    type: 'online',
    focus: ['finance', 'business', 'tech'],
    audience: 'Financial professionals, investors',
    contact: 'editorial@zawya.com',
    notes: 'Good for funding announcements, business news.',
    priority: 'medium'
  },
  {
    id: 'm9',
    name: 'What\'s On Dubai',
    type: 'online',
    focus: ['lifestyle', 'entertainment', 'food'],
    audience: 'Dubai residents, tourists',
    contact: 'editorial@whatsondubai.com',
    notes: 'Perfect for lifestyle angle, restaurant/cafe partners.',
    priority: 'high'
  },
  {
    id: 'm10',
    name: 'Time Out Dubai',
    type: 'online',
    focus: ['lifestyle', 'restaurants', 'entertainment'],
    audience: 'Young professionals, expats',
    contact: 'editorial@timeoutdubai.com',
    notes: 'Great for lifestyle/experience-focused content.',
    priority: 'high'
  },
  {
    id: 'm11',
    name: 'Lovin Dubai',
    type: 'online',
    focus: ['lifestyle', 'news', 'viral content'],
    audience: 'Young Dubai residents, social media savvy',
    contact: 'hello@lovindubai.com',
    notes: 'Viral potential. Good for consumer launches.',
    priority: 'high'
  },
  {
    id: 'm12',
    name: 'Dubai Eye 103.8',
    type: 'radio',
    focus: ['business', 'lifestyle', 'interviews'],
    audience: 'Commuters, business professionals',
    contact: 'studio@dubaieye1038.com',
    notes: 'Morning show interviews are valuable. Business focus.',
    priority: 'medium'
  },
  {
    id: 'm13',
    name: 'Virgin Radio Dubai',
    type: 'radio',
    focus: ['lifestyle', 'entertainment'],
    audience: 'Young professionals',
    contact: 'info@virginradiodubai.com',
    notes: 'Good for lifestyle/fun angle.',
    priority: 'low'
  },
  {
    id: 'm14',
    name: 'Dubai One TV',
    type: 'tv',
    focus: ['business', 'lifestyle', 'local news'],
    audience: 'UAE residents',
    contact: 'programming@dmi.gov.ae',
    notes: 'Local TV coverage for credibility.',
    priority: 'medium'
  },
  {
    id: 'm15',
    name: 'Wamda',
    type: 'online',
    focus: ['startups', 'MENA tech', 'funding'],
    audience: 'MENA startup ecosystem',
    contact: 'editorial@wamda.com',
    notes: 'Regional startup publication. Good for MENA reach.',
    priority: 'medium'
  },
  {
    id: 'm16',
    name: 'TechCrunch (via pitch)',
    type: 'online',
    focus: ['tech', 'startups', 'funding'],
    audience: 'Global tech community',
    contact: 'tips@techcrunch.com',
    notes: 'Long shot but valuable if successful. For major funding news.',
    priority: 'low'
  }
];

const prTimeline: PRActivity[] = [
  {
    id: 'pr1',
    phase: 'Pre-Launch (Week -2)',
    timing: '2 weeks before launch',
    activity: 'Media List Preparation',
    details: 'Compile journalist contacts, research recent coverage, personalize pitches',
    owner: 'PR/Marketing',
    deliverables: ['Media contact spreadsheet', 'Journalist research notes', 'Personalized pitch angles']
  },
  {
    id: 'pr2',
    phase: 'Pre-Launch (Week -2)',
    timing: '2 weeks before launch',
    activity: 'Press Materials Creation',
    details: 'Create press release, media kit, founder bios, company backgrounder',
    owner: 'PR/Marketing',
    deliverables: ['Press release draft', 'Media kit PDF', 'High-res logos/images', 'Founder photos']
  },
  {
    id: 'pr3',
    phase: 'Pre-Launch (Week -1)',
    timing: '1 week before launch',
    activity: 'Embargo Outreach',
    details: 'Send embargoed press release to top-tier journalists for exclusive coverage',
    owner: 'PR/Marketing',
    deliverables: ['Embargo email template', 'Journalist follow-up tracker']
  },
  {
    id: 'pr4',
    phase: 'Pre-Launch (Week -1)',
    timing: '1 week before launch',
    activity: 'Influencer Seeding',
    details: 'Brief key influencers, set up early access, coordinate launch posts',
    owner: 'Marketing',
    deliverables: ['Influencer brief', 'Content calendar alignment', 'Early access credentials']
  },
  {
    id: 'pr5',
    phase: 'Launch Day',
    timing: 'Day 0',
    activity: 'Press Release Distribution',
    details: 'Send press release to full media list, post on PR Newswire/similar',
    owner: 'PR/Marketing',
    deliverables: ['Mass email send', 'PR wire submission', 'LinkedIn announcement']
  },
  {
    id: 'pr6',
    phase: 'Launch Day',
    timing: 'Day 0',
    activity: 'Founder Interviews',
    details: 'Pre-scheduled interviews with key journalists, podcast appearances',
    owner: 'Founders',
    deliverables: ['Interview prep notes', 'Key messages document', 'Talking points']
  },
  {
    id: 'pr7',
    phase: 'Launch Day',
    timing: 'Day 0',
    activity: 'Social Media Blitz',
    details: 'Coordinated posts across all channels, influencer posts go live',
    owner: 'Marketing',
    deliverables: ['Social content queue', 'Influencer post coordination', 'Hashtag monitoring']
  },
  {
    id: 'pr8',
    phase: 'Post-Launch (Week 1)',
    timing: 'Week 1',
    activity: 'Media Follow-up',
    details: 'Follow up with journalists who haven\'t published, offer additional info/interviews',
    owner: 'PR/Marketing',
    deliverables: ['Follow-up email sequence', 'Additional story angles', 'Interview availability']
  },
  {
    id: 'pr9',
    phase: 'Post-Launch (Week 1)',
    timing: 'Week 1',
    activity: 'Coverage Tracking',
    details: 'Monitor all media coverage, create coverage report, share with team/investors',
    owner: 'PR/Marketing',
    deliverables: ['Coverage spreadsheet', 'Press clippings folder', 'Social mentions report']
  },
  {
    id: 'pr10',
    phase: 'Post-Launch (Week 2-4)',
    timing: 'Weeks 2-4',
    activity: 'Ongoing PR',
    details: 'Pitch follow-up stories: user milestones, merchant partnerships, feature updates',
    owner: 'PR/Marketing',
    deliverables: ['Monthly PR calendar', 'Milestone announcements', 'Partner story pitches']
  }
];

const pressRelease = `FOR IMMEDIATE RELEASE

Nuqta Launches in Dubai: The Smart Way to Earn Rewards at Your Favorite Spots

Dubai's newest rewards app transforms everyday spending into valuable coins

DUBAI, UAE – [DATE] – Nuqta, a revolutionary rewards platform, officially launches today in Dubai, offering residents a smarter way to earn rewards at their favorite cafes, restaurants, salons, gyms, and more.

Unlike traditional loyalty programs that require punch cards or discount codes, Nuqta allows users to simply scan a QR code at partner locations, pay as normal, and automatically earn coins that can be redeemed at any partner store.

"We built Nuqta because we believe rewards should be simple, valuable, and everywhere," said [Founder Name], CEO and Co-founder of Nuqta. "Why should customers carry 10 different punch cards when they can earn and spend rewards across hundreds of businesses with one app?"

KEY FEATURES:
• Scan & Earn: Scan QR at partner stores, pay normally, earn coins automatically
• Universal Rewards: Redeem coins at any Nuqta partner, not just where you earned them
• No Discounting: Merchants reward with coins instead of discounts, protecting brand value
• Real-Time Analytics: Merchants get insights into customer behavior and repeat visits

Nuqta launches with [XX] partner merchants across Dubai, spanning categories including cafes, restaurants, salons, gyms, retail stores, and entertainment venues. The company has plans to expand to 500+ partners within the first year.

The app is available for free download on iOS and Android. New users receive 100 bonus coins upon signup.

ABOUT NUQTA:
Nuqta (Arabic for "point") is a Dubai-based rewards platform that connects consumers with local businesses. Founded in 2024, Nuqta's mission is to make rewards simple, valuable, and accessible to everyone. For more information, visit nuqta.app.

MEDIA CONTACT:
[Name]
[Email]
[Phone]

###

High-resolution images and logos available at: [Press Kit URL]`;

const talkingPoints = [
  {
    topic: 'What is Nuqta?',
    points: [
      'Nuqta is Dubai\'s smart rewards app - earn coins at 100+ partner locations',
      'Simple: Scan QR, pay normally, earn automatically',
      'Universal: Use coins at any partner, not just where you earned them',
      'Think of it as one loyalty program for all your favorite spots'
    ]
  },
  {
    topic: 'Problem You\'re Solving',
    points: [
      'Customers juggle 10+ punch cards, forget them, lose them',
      'Businesses give 50% discounts that destroy margins',
      'No loyalty - customers chase deals from business to business',
      'Merchants have zero data on customer behavior'
    ]
  },
  {
    topic: 'Why Now?',
    points: [
      'Post-COVID, consumers want value but businesses can\'t afford discounting',
      'Dubai\'s digital-first culture is ready for app-based rewards',
      'Competition is fragmented - no unified rewards platform exists',
      'Merchants desperately need tools to drive repeat visits'
    ]
  },
  {
    topic: 'Business Model',
    points: [
      'Merchants pay a small percentage on transactions processed through Nuqta',
      'No upfront costs for merchants - we succeed when they succeed',
      'We also offer marketing packages for enhanced visibility',
      'Sustainable model with multiple revenue streams'
    ]
  },
  {
    topic: 'Traction & Goals',
    points: [
      'Launching with [XX] partner merchants',
      'H1: 50K MAU, 1,500 merchants | Year 1: 100K MAU, 2,500 merchants',
      'Focus on Dubai first, then expand across UAE and GCC',
      'Team of [X] with combined experience in fintech, retail, marketing'
    ]
  },
  {
    topic: 'Differentiation',
    points: [
      'Not discounting - we reward with coins that maintain brand value',
      'Universal redemption - coins work everywhere, not siloed',
      'Full marketing support for merchants - we\'re partners, not just a platform',
      'Beautiful, simple UX - designed for Dubai\'s mobile-first consumers'
    ]
  }
];

const typeIcons: Record<string, React.ElementType> = {
  newspaper: Newspaper,
  magazine: FileText,
  online: Globe,
  tv: Tv,
  radio: Radio,
  podcast: Mic,
};

const typeColors: Record<string, { bg: string; text: string; border: string }> = {
  newspaper: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
  magazine: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30' },
  online: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/30' },
  tv: { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/30' },
  radio: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30' },
  podcast: { bg: 'bg-pink-500/10', text: 'text-pink-400', border: 'border-pink-500/30' },
};

export default function PRLaunchPage() {
  const [activeTab, setActiveTab] = useState<'plan' | 'media' | 'press' | 'talking'>('plan');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

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
            <span className="text-slate-400">PR Launch Plan</span>
          </div>
          <Link
            href="/marketing-bible"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="text-sm">Marketing</span>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/30 mb-4">
            <Megaphone className="text-purple-400" size={16} />
            <span className="text-purple-400 text-sm font-medium">Public Relations</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">PR Launch Plan</h1>
          <p className="text-slate-400">Complete media strategy for Nuqta launch</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto gap-2 pb-4 mb-6">
          {[
            { id: 'plan', label: 'Launch Timeline', icon: Calendar },
            { id: 'media', label: 'Media List', icon: Newspaper },
            { id: 'press', label: 'Press Release', icon: FileText },
            { id: 'talking', label: 'Talking Points', icon: MessageCircle },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#c9a227] text-black'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-white/10'
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Launch Timeline Tab */}
        {activeTab === 'plan' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/30">
              <h2 className="text-xl font-bold text-white mb-4">PR Launch Timeline</h2>
              <p className="text-slate-400">Complete PR plan from pre-launch to ongoing coverage</p>
            </div>

            <div className="space-y-4">
              {prTimeline.map((activity, index) => (
                <div
                  key={activity.id}
                  className="bg-white/5 rounded-xl border border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedItem(expandedItem === activity.id ? null : activity.id)}
                    className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-all text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-white font-bold">{activity.activity}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="px-2 py-0.5 text-xs bg-purple-500/20 text-purple-400 rounded">{activity.phase}</span>
                          <span className="text-slate-500 text-xs">{activity.timing}</span>
                        </div>
                      </div>
                    </div>
                    <ChevronRight className={`text-slate-400 transition-transform ${expandedItem === activity.id ? 'rotate-90' : ''}`} size={20} />
                  </button>

                  {expandedItem === activity.id && (
                    <div className="p-4 border-t border-white/10 bg-black/20 space-y-4">
                      <div>
                        <span className="text-slate-400 text-sm font-medium">Details</span>
                        <p className="text-slate-300">{activity.details}</p>
                      </div>
                      <div>
                        <span className="text-slate-400 text-sm font-medium">Owner</span>
                        <p className="text-white">{activity.owner}</p>
                      </div>
                      <div>
                        <span className="text-slate-400 text-sm font-medium">Deliverables</span>
                        <ul className="mt-1 space-y-1">
                          {activity.deliverables.map((d, i) => (
                            <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                              <Check className="text-green-400" size={14} />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Media List Tab */}
        {activeTab === 'media' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-500/30">
              <h2 className="text-xl font-bold text-white mb-4">UAE Media Outlets</h2>
              <p className="text-slate-400">{mediaOutlets.length} outlets across print, online, TV, and radio</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {Object.entries(typeColors).map(([type, colors]) => {
                const Icon = typeIcons[type];
                const count = mediaOutlets.filter(m => m.type === type).length;
                return (
                  <div key={type} className={`${colors.bg} rounded-xl p-3 border ${colors.border} text-center`}>
                    <Icon className={`${colors.text} mx-auto mb-1`} size={20} />
                    <div className="text-white font-bold">{count}</div>
                    <div className="text-slate-400 text-xs capitalize">{type}</div>
                  </div>
                );
              })}
            </div>

            {/* Media List */}
            <div className="space-y-3">
              {mediaOutlets.map(outlet => {
                const colors = typeColors[outlet.type];
                const Icon = typeIcons[outlet.type];

                return (
                  <div
                    key={outlet.id}
                    className={`rounded-xl border ${colors.border} p-4 ${colors.bg}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center`}>
                          <Icon className={colors.text} size={20} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-white font-bold">{outlet.name}</h3>
                            {outlet.priority === 'high' && (
                              <span className="px-2 py-0.5 text-xs bg-red-500/20 text-red-400 rounded">High Priority</span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <span className={`px-2 py-0.5 text-xs rounded ${colors.bg} ${colors.text} capitalize`}>
                              {outlet.type}
                            </span>
                            {outlet.focus.map(f => (
                              <span key={f} className="text-slate-500 text-xs">{f}</span>
                            ))}
                          </div>
                          <p className="text-slate-400 text-sm mt-2">{outlet.notes}</p>
                          {outlet.contact && (
                            <div className="flex items-center gap-2 mt-2">
                              <Mail className="text-slate-500" size={14} />
                              <span className="text-slate-300 text-sm">{outlet.contact}</span>
                              <button
                                onClick={() => copyToClipboard(outlet.contact!, outlet.id)}
                                className="p-1 bg-white/10 rounded hover:bg-white/20"
                              >
                                {copiedId === outlet.id ? <Check className="text-green-400" size={12} /> : <Copy className="text-slate-400" size={12} />}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                      <span className="text-slate-500 text-xs">{outlet.audience}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Press Release Tab */}
        {activeTab === 'press' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-blue-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">Press Release Template</h2>
                  <p className="text-slate-400">Ready-to-customize launch announcement</p>
                </div>
                <button
                  onClick={() => copyToClipboard(pressRelease, 'press-release')}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all"
                >
                  {copiedId === 'press-release' ? <Check size={16} /> : <Copy size={16} />}
                  Copy All
                </button>
              </div>
            </div>

            <div className="bg-black/30 rounded-xl p-6 border border-white/10">
              <pre className="text-slate-300 text-sm whitespace-pre-wrap font-sans">
                {pressRelease}
              </pre>
            </div>

            {/* PR Tips */}
            <div className="bg-amber-500/10 rounded-xl p-6 border border-amber-500/30">
              <h3 className="text-lg font-bold text-amber-400 mb-4 flex items-center gap-2">
                <Star size={20} />
                Press Release Tips
              </h3>
              <ul className="text-slate-300 text-sm space-y-2">
                <li>• Replace all [BRACKETS] with actual information</li>
                <li>• Keep the headline under 10 words</li>
                <li>• Lead with the most newsworthy angle</li>
                <li>• Include a compelling founder quote</li>
                <li>• Add specific numbers (users, partners, savings)</li>
                <li>• End with clear call-to-action and contact info</li>
                <li>• Attach high-res images and logos separately</li>
              </ul>
            </div>
          </div>
        )}

        {/* Talking Points Tab */}
        {activeTab === 'talking' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-xl p-6 border border-pink-500/30">
              <h2 className="text-xl font-bold text-white mb-2">Interview Talking Points</h2>
              <p className="text-slate-400">Key messages for media interviews and pitches</p>
            </div>

            <div className="space-y-4">
              {talkingPoints.map((topic, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-xl border border-white/10 p-4"
                >
                  <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                    <MessageCircle className="text-pink-400" size={18} />
                    {topic.topic}
                  </h3>
                  <ul className="space-y-2">
                    {topic.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                        <span className="text-pink-400 mt-1">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Interview Tips */}
            <div className="bg-gradient-to-r from-[#c9a227]/20 to-amber-500/20 rounded-xl p-6 border border-[#c9a227]/30">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Mic className="text-[#c9a227]" size={20} />
                Interview Best Practices
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-black/20 rounded-lg p-4">
                  <h4 className="text-white font-bold mb-2">Do:</h4>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Speak in sound bites (10-15 seconds)</li>
                    <li>• Use specific numbers and examples</li>
                    <li>• Bridge back to key messages</li>
                    <li>• Tell customer success stories</li>
                    <li>• Be enthusiastic but authentic</li>
                  </ul>
                </div>
                <div className="bg-black/20 rounded-lg p-4">
                  <h4 className="text-white font-bold mb-2">Avoid:</h4>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Technical jargon</li>
                    <li>• Bashing competitors by name</li>
                    <li>• Speculating on future plans</li>
                    <li>• Saying &quot;no comment&quot;</li>
                    <li>• Going off-the-record (assume everything is on)</li>
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
