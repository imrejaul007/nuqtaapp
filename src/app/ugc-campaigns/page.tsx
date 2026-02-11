'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Video,
  Camera,
  Upload,
  Share2,
  Trophy,
  Star,
  Users,
  TrendingUp,
  DollarSign,
  Gift,
  ChevronDown,
  ChevronRight,
  Copy,
  Check,
  Sparkles,
  MessageCircle,
  Heart,
  Eye,
  Play,
  Mic,
  Music2,
  Smartphone,
  Instagram,
  Youtube,
  Hash,
  Award,
  Target,
  Zap,
  Clock,
  CheckCircle,
  AlertCircle,
  ThumbsUp,
  Repeat
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

interface UGCCampaign {
  id: string;
  name: string;
  type: string;
  description: string;
  howItWorks: string[];
  prizes: {
    name: string;
    value: string;
    criteria: string;
  }[];
  contentRequirements: string[];
  hashtags: string[];
  platforms: string[];
  exampleIdeas: string[];
  metrics: {
    label: string;
    target: string;
  }[];
}

const ugcCampaigns: UGCCampaign[] = [
  {
    id: 'savings-video',
    name: 'Show Your Savings Challenge',
    type: 'Video Challenge',
    description: 'Users create videos showing how much they would have saved (or did save) using Nuqta. Upload past receipts, let the app calculate savings, then share a creative video.',
    howItWorks: [
      'Open Nuqta app → "Calculate Savings" feature',
      'Upload photos of your recent receipts (last 30 days)',
      'App calculates your potential/actual savings',
      'Record a video showing your reaction + savings amount',
      'Post on social media with required hashtags',
      'Earn cashback equal to your savings (up to AED 300)',
      'Top videos win bonus prizes weekly'
    ],
    prizes: [
      { name: 'Instant Cashback', value: 'Up to AED 300', criteria: 'Per valid video submission' },
      { name: 'Weekly Best Video', value: 'AED 500', criteria: 'Most creative/engaging video' },
      { name: 'Most Viral', value: 'AED 1,000', criteria: 'Highest views/engagement' },
      { name: 'Monthly Champion', value: 'iPhone', criteria: 'Best overall creator' }
    ],
    contentRequirements: [
      'Video must be 15-60 seconds',
      'Must show Nuqta app screen with savings calculation',
      'Face reveal preferred (higher engagement)',
      'Original audio or trending sounds',
      'Must tag @nuqta.ae',
      'Must use campaign hashtags',
      'No offensive content'
    ],
    hashtags: ['#NuqtaSavings', '#ShowYourSavings', '#NuqtaDubai', '#SmartSaver'],
    platforms: ['TikTok', 'Instagram Reels', 'YouTube Shorts'],
    exampleIdeas: [
      '"I spent AED 2,000 on coffee this month... Nuqta shows I could have saved AED 400!" *shocked face*',
      'POV: You check how much you would have saved with Nuqta *calculator sounds*',
      'My bank account after I started using Nuqta vs before (split screen)',
      '"Babe, we need to talk about your spending..." *shows Nuqta savings* "...you should have started earlier!"',
      'Rating my receipts by how much I could have saved *chef kiss to big savings*'
    ],
    metrics: [
      { label: 'Videos Created', target: '500+/month' },
      { label: 'Total Views', target: '2M+/month' },
      { label: 'New Users from UGC', target: '1,000+/month' },
      { label: 'Avg Engagement Rate', target: '8%+' }
    ]
  },
  {
    id: 'hero-trash',
    name: 'Hero or Trash',
    type: 'Product Review',
    description: 'Users review products/services from Nuqta partner merchants and rate them "Hero" (amazing) or "Trash" (skip it). Honest, entertaining reviews that help others decide.',
    howItWorks: [
      'Visit a Nuqta partner merchant',
      'Try a product or service',
      'Record your honest review (Hero or Trash verdict)',
      'Show your Nuqta points earned',
      'Post with campaign hashtags',
      'Earn bonus points for every approved review'
    ],
    prizes: [
      { name: 'Per Review Bonus', value: '50 points', criteria: 'Every approved review' },
      { name: 'Best Review Weekly', value: 'AED 300', criteria: 'Most helpful review' },
      { name: 'Top Reviewer Monthly', value: 'AED 1,000', criteria: 'Most quality reviews' },
      { name: 'Viral Review', value: 'AED 500', criteria: '10K+ views' }
    ],
    contentRequirements: [
      'Must be a Nuqta partner merchant',
      'Genuine purchase required (show receipt/app)',
      'Honest opinion (we love real reviews!)',
      '30-90 seconds ideal length',
      'Show product/service clearly',
      'Give clear Hero or Trash verdict',
      'Mention points earned at the end'
    ],
    hashtags: ['#NuqtaHeroOrTrash', '#HonestReview', '#NuqtaReviews', '#DubaiFinds'],
    platforms: ['TikTok', 'Instagram Reels', 'YouTube Shorts'],
    exampleIdeas: [
      'Is this viral Dubai cafe worth the hype? Hero or Trash *dramatic reveal*',
      'Testing the cheapest vs most expensive option at [merchant] - which is the hero?',
      'My brutally honest review of [product] - and I earned [X] points while doing it!',
      'You asked me to try this... Hero or Trash? *taste test*',
      'Spending my Nuqta points at [merchant] - was it worth it?'
    ],
    metrics: [
      { label: 'Reviews Created', target: '300+/month' },
      { label: 'Merchant Coverage', target: '50+ merchants reviewed' },
      { label: 'Avg Views per Review', target: '5,000+' },
      { label: 'User Trust Score', target: '85%+ find helpful' }
    ]
  },
  {
    id: 'ai-meme',
    name: 'AI Meme Style',
    type: 'Meme Content',
    description: 'Create memes about Dubai life, shopping, rewards, and saving money using AI tools or traditional meme formats. Relatable content that makes people laugh AND download Nuqta.',
    howItWorks: [
      'Create a meme about saving money, Dubai life, or rewards',
      'Use AI tools (optional) for creative enhancement',
      'Reference Nuqta naturally in the content',
      'Post on your social media',
      'Tag @nuqta.ae and use hashtags',
      'Best memes get featured on official Nuqta accounts'
    ],
    prizes: [
      { name: 'Featured Meme', value: '100 points', criteria: 'Reposted on Nuqta official' },
      { name: 'Meme of the Week', value: 'AED 200', criteria: 'Most engagement' },
      { name: 'Meme Lord Monthly', value: 'AED 500', criteria: 'Consistent quality' },
      { name: 'Viral Hit', value: 'AED 1,000', criteria: '50K+ reach' }
    ],
    contentRequirements: [
      'Must be original creation',
      'Dubai/UAE relevant or universal money themes',
      'Nuqta reference (subtle or direct)',
      'No offensive/political content',
      'Family-friendly humor',
      'Can be image, video, or carousel'
    ],
    hashtags: ['#NuqtaMemes', '#DubaiMemes', '#SavingsMemes', '#RewardsFunny'],
    platforms: ['Instagram', 'TikTok', 'Twitter/X'],
    exampleIdeas: [
      'Me checking my points balance vs my bank balance (SpongeBob format)',
      'POV: Your friend who doesn\'t use Nuqta tries to split the bill',
      'Nobody: ... Me at every cafe: "Do you accept Nuqta?"',
      'My personality is just having a lot of reward points (relatable meme)',
      'Dubai expenses hitting different when you have Nuqta (increasing/decreasing meme)'
    ],
    metrics: [
      { label: 'Memes Created', target: '200+/month' },
      { label: 'Total Reach', target: '500K+/month' },
      { label: 'Brand Mentions', target: '1,000+/month' },
      { label: 'Sentiment Score', target: '90%+ positive' }
    ]
  },
  {
    id: 'viral-hook',
    name: 'Viral Explanation Hook',
    type: 'Educational Viral',
    description: 'Create attention-grabbing explanations of how Nuqta works, savings tips, or money hacks using viral hook formats that stop the scroll.',
    howItWorks: [
      'Choose a viral hook format (see examples)',
      'Explain a Nuqta feature or money-saving tip',
      'Keep it punchy and valuable',
      'Strong opening line is critical',
      'End with clear call-to-action',
      'Post and watch it spread'
    ],
    prizes: [
      { name: 'Every 1K Views', value: '10 points', criteria: 'Tracked via analytics' },
      { name: 'Best Explainer', value: 'AED 300/week', criteria: 'Most clear & helpful' },
      { name: 'Viral Explainer', value: 'AED 1,000', criteria: '100K+ views' },
      { name: 'Ambassador Invite', value: 'Ongoing partnership', criteria: 'Consistent quality' }
    ],
    contentRequirements: [
      'Must start with hook in first 1-2 seconds',
      'Accurate information about Nuqta',
      'Value-driven content',
      '15-60 seconds optimal',
      'Fast-paced editing preferred',
      'Text overlays for accessibility'
    ],
    hashtags: ['#NuqtaHacks', '#DubaiHacks', '#MoneyTips', '#RewardsHack'],
    platforms: ['TikTok', 'Instagram Reels', 'YouTube Shorts'],
    exampleIdeas: [
      '"Stop scrolling if you live in Dubai and like free stuff..."',
      '"I\'m about to save you AED 500 a month. Here\'s how..."',
      '"POV: You just discovered the rewards app everyone\'s talking about"',
      '"The coffee shop doesn\'t want you to know this hack..."',
      '"3 ways I\'m getting paid to eat out in Dubai"',
      '"This app is basically free money and nobody is talking about it"'
    ],
    metrics: [
      { label: 'Videos Created', target: '100+/month' },
      { label: 'Avg Watch Time', target: '80%+' },
      { label: 'Save Rate', target: '5%+' },
      { label: 'Share Rate', target: '3%+' }
    ]
  },
  {
    id: 'social-experiment',
    name: 'Social Experiment',
    type: 'Experiment Content',
    description: 'Conduct fun social experiments related to spending, saving, or rewards. Give winners Nuqta coins and capture genuine reactions.',
    howItWorks: [
      'Design a fun social experiment',
      'Film participants (with consent)',
      'Incorporate Nuqta as prize/reward',
      'Capture genuine reactions',
      'Edit into engaging content',
      'Post with campaign tags'
    ],
    prizes: [
      { name: 'Experiment Budget', value: 'AED 500', criteria: 'For prizes to give away' },
      { name: 'Best Experiment', value: 'AED 1,000/week', criteria: 'Most engaging content' },
      { name: 'Viral Experiment', value: 'AED 2,000', criteria: '200K+ views' },
      { name: 'Series Partner', value: 'Ongoing collab', criteria: 'Consistent quality' }
    ],
    contentRequirements: [
      'All participants must consent',
      'Ethical experiments only',
      'Clear connection to Nuqta/rewards',
      'High production quality',
      '2-5 minutes ideal length',
      'Genuine reactions (no acting)'
    ],
    hashtags: ['#NuqtaExperiment', '#SocialExperiment', '#DubaiExperiment', '#RewardsExperiment'],
    platforms: ['YouTube', 'TikTok', 'Instagram'],
    exampleIdeas: [
      'Asking strangers: "What would you do for 1,000 Nuqta points?"',
      'Paying for strangers\' coffee with Nuqta coins - their reactions',
      'Giving people a choice: AED 50 cash or 500 Nuqta points (what they choose)',
      'Testing if people can guess how much they spent on coffee this month',
      'Surprising someone by paying their entire bill with Nuqta rewards'
    ],
    metrics: [
      { label: 'Experiments Posted', target: '20+/month' },
      { label: 'Avg Views', target: '50K+' },
      { label: 'Comment Engagement', target: '500+/video' },
      { label: 'Brand Recall', target: '70%+ remember Nuqta' }
    ]
  },
  {
    id: 'day-in-life',
    name: 'Day in My Life with Nuqta',
    type: 'Lifestyle Content',
    description: 'Show a day in your life highlighting all the places where you earn Nuqta points. Lifestyle content that showcases the breadth of the merchant network.',
    howItWorks: [
      'Plan a day visiting multiple Nuqta merchants',
      'Film yourself earning points throughout the day',
      'Show total points earned at the end',
      'Share your favorite discoveries',
      'Post as a vlog or montage'
    ],
    prizes: [
      { name: 'Content Stipend', value: 'AED 300', criteria: 'Pre-approved creators' },
      { name: 'Best Day Vlog', value: 'AED 500/week', criteria: 'Most engaging' },
      { name: 'Points Match', value: '2x points', criteria: 'All points earned that day' },
      { name: 'Featured Creator', value: 'Ongoing partnership', criteria: 'Quality + reach' }
    ],
    contentRequirements: [
      'Visit minimum 3 Nuqta merchants',
      'Show app/points earning at each stop',
      'Natural, authentic vibe',
      'Good lighting and audio',
      'End with total points tally',
      '3-10 minutes for YouTube, 60-90s for short-form'
    ],
    hashtags: ['#DayWithNuqta', '#DubaiDay', '#NuqtaLife', '#RewardsDay'],
    platforms: ['YouTube', 'TikTok', 'Instagram'],
    exampleIdeas: [
      'How I earned 500 points without trying (morning coffee, lunch, gym)',
      'Dubai weekend vlog but I only go to places where I earn rewards',
      'Testing if I can earn 1,000 points in 24 hours',
      'My Nuqta-powered date day (earned points at every stop)',
      'The ultimate Dubai self-care day + how many points I earned'
    ],
    metrics: [
      { label: 'Vlogs Created', target: '50+/month' },
      { label: 'Merchants Featured', target: '100+ unique' },
      { label: 'Avg Watch Time', target: '60%+' },
      { label: 'Discovery Rate', target: '30% try new merchants' }
    ]
  }
];

const viralHooks = [
  "Stop scrolling if you live in Dubai...",
  "I'm about to save you AED 500 a month...",
  "Nobody is talking about this app...",
  "POV: You just discovered free money...",
  "The secret Dubai residents don't share...",
  "3 words: Free. Coffee. Forever.",
  "Why is nobody talking about this?",
  "This changed how I spend money in Dubai...",
  "Delete your other rewards apps...",
  "The math isn't mathing until you see this..."
];

export default function UGCCampaignsPage() {
  const [expandedCampaign, setExpandedCampaign] = useState<string>('savings-video');
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  const copyToClipboard = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates({ ...copiedStates, [id]: true });
    setTimeout(() => setCopiedStates(prev => ({ ...prev, [id]: false })), 2000);
  };

  const copyHashtags = (hashtags: string[]) => {
    navigator.clipboard.writeText(hashtags.join(' '));
    setCopiedStates({ ...copiedStates, 'hashtags': true });
    setTimeout(() => setCopiedStates(prev => ({ ...prev, 'hashtags': false })), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-pink-950/10 to-slate-950">
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
            <span className="text-slate-400">UGC & Video Campaigns</span>
          </div>
          <Link href="/campaigns" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft size={16} />
            <span className="text-sm">All Campaigns</span>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full border border-pink-500/30 mb-4">
            <Video className="text-pink-400" size={16} />
            <span className="text-pink-400 text-sm font-medium">User-Generated Content</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Create. Share. <span className="text-pink-400">Earn.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Turn your creativity into rewards. Create videos, share your experience, and earn cashback while building your audience.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-pink-500/10 rounded-xl p-5 border border-pink-500/30 text-center">
            <Video className="text-pink-400 mx-auto mb-2" size={24} />
            <div className="text-3xl font-bold text-pink-400">6</div>
            <div className="text-slate-400 text-sm">Campaign Types</div>
          </div>
          <div className="bg-purple-500/10 rounded-xl p-5 border border-purple-500/30 text-center">
            <DollarSign className="text-purple-400 mx-auto mb-2" size={24} />
            <div className="text-3xl font-bold text-purple-400">AED 300</div>
            <div className="text-slate-400 text-sm">Max Cashback/Video</div>
          </div>
          <div className="bg-blue-500/10 rounded-xl p-5 border border-blue-500/30 text-center">
            <Trophy className="text-blue-400 mx-auto mb-2" size={24} />
            <div className="text-3xl font-bold text-blue-400">AED 5K+</div>
            <div className="text-slate-400 text-sm">Monthly Prizes</div>
          </div>
          <div className="bg-green-500/10 rounded-xl p-5 border border-green-500/30 text-center">
            <Users className="text-green-400 mx-auto mb-2" size={24} />
            <div className="text-3xl font-bold text-green-400">∞</div>
            <div className="text-slate-400 text-sm">Anyone Can Join</div>
          </div>
        </div>

        {/* Viral Hooks Reference */}
        <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl p-6 border border-pink-500/30 mb-12">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Zap className="text-pink-400" size={20} />
            Viral Hook Starters (Copy & Use)
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {viralHooks.map((hook, idx) => (
              <button
                key={idx}
                onClick={() => copyToClipboard(`hook-${idx}`, hook)}
                className="flex items-center justify-between p-3 bg-black/30 rounded-lg border border-white/10 hover:border-pink-500/50 transition-all text-left group"
              >
                <span className="text-slate-300 text-sm">"{hook}"</span>
                {copiedStates[`hook-${idx}`] ? (
                  <Check className="text-green-400 flex-shrink-0" size={16} />
                ) : (
                  <Copy className="text-slate-500 group-hover:text-pink-400 flex-shrink-0" size={16} />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Campaign Cards */}
        <div className="space-y-6 mb-12">
          {ugcCampaigns.map(campaign => (
            <div key={campaign.id} className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              {/* Header */}
              <button
                onClick={() => setExpandedCampaign(expandedCampaign === campaign.id ? '' : campaign.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                    <Video className="text-white" size={24} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white">{campaign.name}</h3>
                    <span className="text-pink-400 text-sm">{campaign.type}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden md:flex gap-2">
                    {campaign.platforms.map((p, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 text-slate-300 rounded text-xs">
                        {p}
                      </span>
                    ))}
                  </div>
                  {expandedCampaign === campaign.id ? (
                    <ChevronDown className="text-pink-400" size={24} />
                  ) : (
                    <ChevronRight className="text-slate-400" size={24} />
                  )}
                </div>
              </button>

              {/* Expanded */}
              {expandedCampaign === campaign.id && (
                <div className="border-t border-white/10 p-6 space-y-8">
                  {/* Description */}
                  <p className="text-slate-300 text-lg">{campaign.description}</p>

                  {/* How It Works */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Play className="text-pink-400" size={20} />
                      How It Works
                    </h4>
                    <ol className="space-y-3">
                      {campaign.howItWorks.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                            {idx + 1}
                          </span>
                          <span className="text-slate-300">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Prizes */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Trophy className="text-[#c9a227]" size={20} />
                      Prizes & Rewards
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {campaign.prizes.map((prize, idx) => (
                        <div key={idx} className="bg-[#c9a227]/10 rounded-xl p-4 border border-[#c9a227]/30">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-bold text-white">{prize.name}</h5>
                            <span className="text-[#c9a227] font-bold">{prize.value}</span>
                          </div>
                          <p className="text-slate-400 text-sm">{prize.criteria}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content Requirements & Examples */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <CheckCircle className="text-green-400" size={20} />
                        Content Requirements
                      </h4>
                      <ul className="space-y-2">
                        {campaign.contentRequirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                            <Check className="text-green-400 flex-shrink-0 mt-0.5" size={14} />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Sparkles className="text-purple-400" size={20} />
                        Content Ideas
                      </h4>
                      <ul className="space-y-2">
                        {campaign.exampleIdeas.map((idea, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-400 text-sm">
                            <Play className="text-purple-400 flex-shrink-0 mt-0.5" size={14} />
                            {idea}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Hashtags */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-bold text-white flex items-center gap-2">
                        <Hash className="text-blue-400" size={20} />
                        Required Hashtags
                      </h4>
                      <button
                        onClick={() => copyHashtags(campaign.hashtags)}
                        className="flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors text-sm"
                      >
                        {copiedStates['hashtags'] ? <Check size={14} /> : <Copy size={14} />}
                        Copy All
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {campaign.hashtags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expected Metrics */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <TrendingUp className="text-green-400" size={20} />
                      Expected Results
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {campaign.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-green-500/10 rounded-xl p-4 border border-green-500/30 text-center">
                          <p className="text-xl font-bold text-green-400">{metric.target}</p>
                          <p className="text-slate-400 text-xs">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Creator Guidelines */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-6">Creator Guidelines</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-green-400 mb-3 flex items-center gap-2">
                <ThumbsUp size={18} />
                Do's
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Be authentic and genuine</li>
                <li>• Show real reactions</li>
                <li>• Use good lighting/audio</li>
                <li>• Engage with comments</li>
                <li>• Tag all required accounts</li>
                <li>• Have fun with it!</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-red-400 mb-3 flex items-center gap-2">
                <AlertCircle size={18} />
                Don'ts
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Fake receipts or transactions</li>
                <li>• Misleading claims</li>
                <li>• Offensive content</li>
                <li>• Spam or low-effort posts</li>
                <li>• Copy others' content</li>
                <li>• Forget hashtags/tags</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-blue-400 mb-3 flex items-center gap-2">
                <Award size={18} />
                Pro Tips
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Hook viewers in first 2 seconds</li>
                <li>• Post at peak times (6-9pm)</li>
                <li>• Reply to all comments quickly</li>
                <li>• Use trending sounds</li>
                <li>• Make it shareable</li>
                <li>• Consistency beats perfection</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    <GlobalFooter />
    </div>
  );
}
