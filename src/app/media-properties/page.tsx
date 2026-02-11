'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Mic,
  Film,
  Music2,
  Radio,
  Tv,
  Video,
  Newspaper,
  Gamepad2,
  Trophy,
  Star,
  Users,
  TrendingUp,
  DollarSign,
  Calendar,
  ChevronDown,
  ChevronRight,
  Copy,
  Check,
  Sparkles,
  Play,
  Pause,
  Volume2,
  Globe,
  Heart,
  MessageCircle,
  Share2,
  Zap,
  Target,
  Clock,
  Bot,
  Wand2,
  Cat,
  Bird,
  Dog,
  BookOpen,
  Briefcase,
  Lightbulb,
  Utensils,
  Camera
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

interface MediaProperty {
  id: string;
  name: string;
  type: string;
  icon: React.ElementType;
  description: string;
  format: string;
  frequency: string;
  duration: string;
  platforms: string[];
  contentIdeas: string[];
  monetization: string;
  productionCost: string;
  expectedReach: string;
}

interface PodcastSeries {
  name: string;
  description: string;
  format: string;
  episodes: string[];
  guests: string[];
}

const mediaProperties: MediaProperty[] = [
  {
    id: 'story-lab',
    name: 'Nuqta Story Lab',
    type: 'Short Films',
    icon: Film,
    description: 'Cinematic short films telling stories of Dubai - the dreams, struggles, wins, and everyday moments. Nuqta woven naturally into narratives.',
    format: '3-10 minute short films, episodic series',
    frequency: '2-4 films per month',
    duration: '3-10 minutes',
    platforms: ['YouTube', 'Instagram IGTV', 'TikTok (teasers)'],
    contentIdeas: [
      'The Coffee Shop Dreams - Entrepreneur building business one coffee at a time',
      'Points of Connection - Strangers who meet through Nuqta merchants',
      'The Countdown - Saving enough points for the perfect anniversary gift',
      'Night Shift - A delivery driver\'s Dubai journey, earning rewards along the way',
      'First Salary - New graduate\'s first month making money work smarter'
    ],
    monetization: 'Brand partnerships, sponsored story integrations, film festival submissions',
    productionCost: 'AED 5,000-15,000 per film',
    expectedReach: '50K-200K views per film'
  },
  {
    id: 'ai-podcast',
    name: 'AI Conversations',
    type: 'AI-Generated Podcast',
    icon: Bot,
    description: 'Synthetic voice podcasts discussing topics, using AI to create content at scale across multiple languages.',
    format: 'AI-generated voice discussions, summaries, tips',
    frequency: 'Daily episodes',
    duration: '5-15 minutes',
    platforms: ['Spotify', 'Apple Podcasts', 'YouTube', 'SoundCloud'],
    contentIdeas: [
      'Daily Dubai - News and happenings in 5 minutes',
      'Money Minutes - Daily savings tips and financial literacy',
      'Merchant of the Day - Spotlight on Nuqta partners',
      'Points Report - Weekly rewards and deals summary',
      'Language editions - Same content in 10+ languages'
    ],
    monetization: 'Sponsored segments, merchant spotlights, premium ad-free tier',
    productionCost: 'AED 500-1,000/month (AI tools)',
    expectedReach: '10K-50K listens per episode'
  },
  {
    id: 'animal-podcast',
    name: 'Paws & Points',
    type: 'Pet-Focused Content',
    icon: Cat,
    description: 'Dubai\'s pet community - pet-friendly cafes, groomers, vets, pet stores, all earning Nuqta points.',
    format: 'Video series, podcast, social content',
    frequency: '3-4 episodes per week',
    duration: '10-20 minutes',
    platforms: ['YouTube', 'Instagram', 'TikTok', 'Spotify'],
    contentIdeas: [
      'Pet-friendly cafe tours with points earned',
      'Best pet groomers in Dubai (Nuqta verified)',
      'Vet clinic reviews - where your pet is treated royally',
      'Pet parent stories - how they save on pet care',
      'Adoption stories with Nuqta merchant support'
    ],
    monetization: 'Pet brand partnerships, vet clinic sponsorships, pet store collaborations',
    productionCost: 'AED 3,000-8,000/month',
    expectedReach: '20K-80K per episode'
  },
  {
    id: 'cartoon-podcast',
    name: 'Desi Toons Talk',
    type: 'Indian Cartoon Podcast',
    icon: Tv,
    description: 'Nostalgia-driven podcast discussing classic and new Indian cartoons, animated shows, with Dubai-living twist.',
    format: 'Discussion podcast, animated clips, memes',
    frequency: '2 episodes per week',
    duration: '30-45 minutes',
    platforms: ['YouTube', 'Spotify', 'Apple Podcasts'],
    contentIdeas: [
      'Chhota Bheem meets Dubai - If cartoon characters lived in UAE',
      'Rating our childhood cartoons as adults',
      'Indian animation industry deep dive',
      'Cartoon-themed cafes in Dubai',
      'Kids vs parents: Cartoon generation gap'
    ],
    monetization: 'Family-focused brand partnerships, streaming service sponsorships',
    productionCost: 'AED 2,000-5,000/month',
    expectedReach: '15K-40K per episode (Indian expat community)'
  },
  {
    id: 'business-series',
    name: 'Nuqta Business Insider',
    type: 'Business Documentary',
    icon: Briefcase,
    description: 'Behind-the-scenes of Dubai businesses, entrepreneur journeys, success stories of Nuqta merchant partners.',
    format: 'Documentary-style series, interviews, case studies',
    frequency: '4 episodes per month',
    duration: '15-30 minutes',
    platforms: ['YouTube', 'LinkedIn', 'Spotify'],
    contentIdeas: [
      'How [Merchant] Built Their Empire - Partner success stories',
      'The Numbers Behind the Coffee Shop - Business economics revealed',
      'From 0 to 100 Customers - New merchant journey',
      'Dubai Business Secrets - What successful owners know',
      'The Loyalty Effect - How rewards changed their business'
    ],
    monetization: 'B2B sponsorships, merchant feature fees, consulting leads',
    productionCost: 'AED 8,000-20,000/episode',
    expectedReach: '30K-100K (quality over quantity)'
  },
  {
    id: 'marketing-case-study',
    name: 'Marketing Dissected',
    type: 'Case Study Series',
    icon: Lightbulb,
    description: 'Deep dives into marketing campaigns, viral moments, brand strategies - educational content for marketers.',
    format: 'Analysis videos, podcast episodes, LinkedIn articles',
    frequency: '2 episodes per week',
    duration: '15-25 minutes',
    platforms: ['YouTube', 'LinkedIn', 'Spotify'],
    contentIdeas: [
      'How [UAE Brand] Went Viral - Breakdown',
      'Dubai Mall\'s Marketing Secrets',
      'Why This Campaign Failed (And What We\'d Do Different)',
      'Loyalty Program Masterclass - Global examples',
      'Nuqta Marketing Behind the Scenes'
    ],
    monetization: 'Marketing agency partnerships, tool sponsorships, consulting services',
    productionCost: 'AED 3,000-8,000/episode',
    expectedReach: '20K-60K (marketing professionals)'
  },
  {
    id: 'food-discovery',
    name: 'Hidden Dubai Eats',
    type: 'Food Discovery Series',
    icon: Utensils,
    description: 'Finding Dubai\'s best hidden gems, hole-in-the-wall restaurants, underrated spots - all on Nuqta.',
    format: 'Video series, reels, stories',
    frequency: '5-7 episodes per week',
    duration: '5-15 minutes (long), 30-60s (short)',
    platforms: ['YouTube', 'Instagram', 'TikTok'],
    contentIdeas: [
      'AED 20 vs AED 200 [Dish] Challenge',
      'Locals-only spots tourists never find',
      'Rating viral TikTok restaurants - Worth it?',
      'Best [cuisine] in every Dubai neighborhood',
      '24 hours eating only at Nuqta merchants'
    ],
    monetization: 'Restaurant partnerships, food brand sponsorships, tourism collaborations',
    productionCost: 'AED 5,000-15,000/month',
    expectedReach: '100K-500K (highest volume)'
  },
  {
    id: 'music-parody',
    name: 'Nuqta Jams',
    type: 'Music Video Parodies',
    icon: Music2,
    description: 'Viral music parodies about Dubai life, rewards, saving money - catchy, shareable, memorable.',
    format: 'Music video parodies, song covers with new lyrics',
    frequency: '2-4 videos per month',
    duration: '1-3 minutes',
    platforms: ['YouTube', 'Instagram Reels', 'TikTok'],
    contentIdeas: [
      'Shape of You (Rewards Remix) - Ed Sheeran parody about earning points',
      'Money Talks - Original song about smart spending',
      'Dubai Nights (Taylor Swift style) - Lifestyle anthem',
      'Points on Points - Hip hop track about stacking rewards',
      'The Coffee Song - Ode to Dubai coffee culture'
    ],
    monetization: 'Viral marketing value, music streaming revenue, brand collaborations',
    productionCost: 'AED 10,000-30,000/video',
    expectedReach: '200K-1M+ (viral potential)'
  },
  {
    id: 'sports-news',
    name: 'Nuqta Sports Brief',
    type: 'Sports News & Analysis',
    icon: Trophy,
    description: 'Quick sports updates, analysis, and predictions - Football, Cricket, WWE, F1, and more.',
    format: 'Daily updates, weekly deep dives, live reactions',
    frequency: 'Daily updates',
    duration: '5-15 minutes',
    platforms: ['YouTube', 'TikTok', 'Instagram', 'Twitter/X'],
    contentIdeas: [
      'Premier League Daily Brief',
      'IPL Season Coverage',
      'WWE PPV Live Reactions',
      'F1 Dubai/Abu Dhabi GP Special',
      'Kabaddi League Updates (Indian audience)'
    ],
    monetization: 'Sports betting partnerships (where legal), sports bar merchant features',
    productionCost: 'AED 3,000-8,000/month',
    expectedReach: '50K-200K per sports event'
  },
  {
    id: 'social-experiment',
    name: 'Dubai Experiments',
    type: 'Social Experiment Series',
    icon: Users,
    description: 'Fun, ethical social experiments in Dubai - testing generosity, habits, reactions, with Nuqta rewards.',
    format: 'Hidden camera, street interviews, challenges',
    frequency: '4-6 experiments per month',
    duration: '5-15 minutes',
    platforms: ['YouTube', 'TikTok', 'Instagram'],
    contentIdeas: [
      'Paying random strangers\' bills with Nuqta',
      'Can you survive a day with only Nuqta points?',
      'Asking people how much they spend on coffee',
      'Giving away free rewards to strangers',
      'Testing if Dubai is generous - results will shock you'
    ],
    monetization: 'High brand value, viral marketing, advertiser interest',
    productionCost: 'AED 5,000-15,000/experiment',
    expectedReach: '100K-1M (viral potential)'
  }
];

const podcastSeries: PodcastSeries[] = [
  {
    name: 'Nuqta Founder Chats',
    description: 'Interviews with Dubai business founders, entrepreneurs, and merchant partners',
    format: 'Long-form interview (45-60 min)',
    episodes: [
      'From Barista to Cafe Owner - The Coffee Journey',
      'Building a Fitness Empire in Dubai',
      'Why We Joined Nuqta - Merchant Stories',
      'The Salon Business in Dubai - Insider Secrets'
    ],
    guests: ['Merchant owners', 'Entrepreneurs', 'Industry experts', 'Investors']
  },
  {
    name: 'Money Talks Dubai',
    description: 'Financial literacy, saving tips, investment basics for UAE residents',
    format: 'Educational solo/duo (20-30 min)',
    episodes: [
      'Your First AED 10,000 - How to Save It',
      'Credit Cards: Friend or Foe in UAE',
      'Rewards Programs Compared - Which is Best',
      'Tax-Free Living: Maximize Your Earnings'
    ],
    guests: ['Financial advisors', 'Expat finance experts', 'Bank representatives']
  },
  {
    name: 'Expat Life Unfiltered',
    description: 'Real talk about living in Dubai - the good, bad, and everything in between',
    format: 'Casual conversation (30-45 min)',
    episodes: [
      'Culture Shock: First Year in Dubai',
      'Making Friends as an Adult Expat',
      'Dating in Dubai - The Real Story',
      'Is Dubai Actually Expensive? Let\'s Do the Math'
    ],
    guests: ['Long-term expats', 'New arrivals', 'Returnees', 'Local perspectives']
  }
];

const aiContent = [
  {
    type: 'AI Voice Podcasts',
    description: 'Synthetic voices delivering daily news, tips, and updates in multiple languages',
    languages: ['English', 'Arabic', 'Hindi', 'Urdu', 'Filipino', 'Malayalam', 'Russian', 'Chinese', 'French', 'Persian'],
    useCase: 'Scale content across 10+ languages with minimal production cost'
  },
  {
    type: 'AI Video Avatars',
    description: 'Digital presenters for news updates, merchant spotlights, and educational content',
    languages: ['All major languages'],
    useCase: 'Consistent brand presence without scheduling/availability constraints'
  },
  {
    type: 'AI Meme Generation',
    description: 'Automated meme creation based on trending topics and user behavior',
    languages: ['Visual-based, universal'],
    useCase: 'High volume content for meme accounts'
  },
  {
    type: 'AI Script Writing',
    description: 'Generate video scripts, podcast outlines, and social copy at scale',
    languages: ['All'],
    useCase: 'Speed up content production, maintain consistency'
  }
];

export default function MediaPropertiesPage() {
  const [expandedProperty, setExpandedProperty] = useState<string>('story-lab');
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  const copyToClipboard = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates({ ...copiedStates, [id]: true });
    setTimeout(() => setCopiedStates(prev => ({ ...prev, [id]: false })), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-red-950/10 to-slate-950">
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
            <span className="text-slate-400">IP & Media Properties</span>
          </div>
          <Link href="/media-hub" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft size={16} />
            <span className="text-sm">Media Hub</span>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full border border-red-500/30 mb-4">
            <Film className="text-red-400" size={16} />
            <span className="text-red-400 text-sm font-medium">Original Content & IP</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuqta <span className="text-red-400">Media Properties</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Original content IP that builds audience, drives engagement, and creates lasting brand value beyond traditional marketing.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-red-500/10 rounded-xl p-5 border border-red-500/30 text-center">
            <Film className="text-red-400 mx-auto mb-2" size={24} />
            <div className="text-3xl font-bold text-red-400">10</div>
            <div className="text-slate-400 text-sm">Media Properties</div>
          </div>
          <div className="bg-orange-500/10 rounded-xl p-5 border border-orange-500/30 text-center">
            <Mic className="text-orange-400 mx-auto mb-2" size={24} />
            <div className="text-3xl font-bold text-orange-400">3</div>
            <div className="text-slate-400 text-sm">Podcast Series</div>
          </div>
          <div className="bg-purple-500/10 rounded-xl p-5 border border-purple-500/30 text-center">
            <Bot className="text-purple-400 mx-auto mb-2" size={24} />
            <div className="text-3xl font-bold text-purple-400">4</div>
            <div className="text-slate-400 text-sm">AI Content Types</div>
          </div>
          <div className="bg-green-500/10 rounded-xl p-5 border border-green-500/30 text-center">
            <Globe className="text-green-400 mx-auto mb-2" size={24} />
            <div className="text-3xl font-bold text-green-400">10+</div>
            <div className="text-slate-400 text-sm">Languages</div>
          </div>
        </div>

        {/* Media Properties */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Play className="text-red-400" size={24} />
            Original Media Properties
          </h2>
          <div className="space-y-4">
            {mediaProperties.map(property => {
              const Icon = property.icon;
              const isExpanded = expandedProperty === property.id;

              return (
                <div key={property.id} className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                  <button
                    onClick={() => setExpandedProperty(isExpanded ? '' : property.id)}
                    className="w-full p-5 flex items-center justify-between hover:bg-white/5 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center">
                        <Icon className="text-white" size={24} />
                      </div>
                      <div className="text-left">
                        <h3 className="text-lg font-bold text-white">{property.name}</h3>
                        <p className="text-red-400 text-sm">{property.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="hidden md:block text-slate-400 text-sm">{property.frequency}</span>
                      <span className="hidden md:block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                        {property.expectedReach}
                      </span>
                      {isExpanded ? <ChevronDown className="text-red-400" size={20} /> : <ChevronRight className="text-slate-400" size={20} />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="border-t border-white/10 p-5 space-y-6">
                      <p className="text-slate-300">{property.description}</p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold text-white mb-3">Format & Details</h4>
                          <div className="space-y-2 text-sm">
                            <p><span className="text-slate-500">Format:</span> <span className="text-slate-300">{property.format}</span></p>
                            <p><span className="text-slate-500">Duration:</span> <span className="text-slate-300">{property.duration}</span></p>
                            <p><span className="text-slate-500">Frequency:</span> <span className="text-slate-300">{property.frequency}</span></p>
                          </div>

                          <h4 className="font-bold text-white mt-4 mb-3">Platforms</h4>
                          <div className="flex flex-wrap gap-2">
                            {property.platforms.map((p, idx) => (
                              <span key={idx} className="px-2 py-1 bg-white/10 text-slate-300 rounded text-xs">{p}</span>
                            ))}
                          </div>

                          <h4 className="font-bold text-white mt-4 mb-3">Economics</h4>
                          <div className="space-y-2 text-sm">
                            <p><span className="text-slate-500">Production:</span> <span className="text-amber-400">{property.productionCost}</span></p>
                            <p><span className="text-slate-500">Expected Reach:</span> <span className="text-green-400">{property.expectedReach}</span></p>
                            <p><span className="text-slate-500">Monetization:</span> <span className="text-slate-300">{property.monetization}</span></p>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-bold text-white mb-3">Content Ideas</h4>
                          <ul className="space-y-2">
                            {property.contentIdeas.map((idea, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                                <Sparkles className="text-red-400 flex-shrink-0 mt-0.5" size={14} />
                                {idea}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Podcast Series */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Mic className="text-orange-400" size={24} />
            Podcast Series
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {podcastSeries.map((podcast, idx) => (
              <div key={idx} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-orange-500/30 transition-all">
                <h3 className="text-lg font-bold text-white mb-2">{podcast.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{podcast.description}</p>
                <p className="text-orange-400 text-xs mb-4">{podcast.format}</p>

                <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Episode Ideas</h4>
                <ul className="space-y-1 mb-4">
                  {podcast.episodes.map((ep, epIdx) => (
                    <li key={epIdx} className="text-slate-300 text-xs flex items-center gap-1">
                      <Play size={10} className="text-orange-400" />
                      {ep}
                    </li>
                  ))}
                </ul>

                <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Potential Guests</h4>
                <div className="flex flex-wrap gap-1">
                  {podcast.guests.map((guest, gIdx) => (
                    <span key={gIdx} className="px-2 py-0.5 bg-orange-500/20 text-orange-300 rounded text-xs">{guest}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Content Strategy */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Bot className="text-purple-400" size={24} />
            AI-Powered Content at Scale
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {aiContent.map((ai, idx) => (
              <div key={idx} className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30">
                <h3 className="text-lg font-bold text-white mb-2">{ai.type}</h3>
                <p className="text-slate-400 text-sm mb-4">{ai.description}</p>

                <div className="mb-4">
                  <span className="text-xs font-bold text-slate-500 uppercase">Languages</span>
                  <p className="text-purple-300 text-sm mt-1">
                    {Array.isArray(ai.languages) ? ai.languages.slice(0, 5).join(', ') + (ai.languages.length > 5 ? '...' : '') : ai.languages}
                  </p>
                </div>

                <div className="bg-black/30 rounded-lg p-3">
                  <span className="text-xs font-bold text-slate-500 uppercase">Use Case</span>
                  <p className="text-slate-300 text-sm mt-1">{ai.useCase}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Priority */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-6">Launch Priority</h3>
          <div className="space-y-4">
            {[
              { priority: 'High Priority (Month 1-3)', items: ['Hidden Dubai Eats', 'AI Conversations (Daily Podcast)', 'Music Video Parodies'], reason: 'High engagement potential, viral opportunity' },
              { priority: 'Medium Priority (Month 4-6)', items: ['Nuqta Story Lab', 'Dubai Experiments', 'Business Insider'], reason: 'Brand building, differentiation' },
              { priority: 'Growth Phase (Month 7-12)', items: ['Full Podcast Network', 'Pet Content', 'Sports Coverage'], reason: 'Audience expansion, niche targeting' }
            ].map((phase, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-white/5 rounded-lg">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-black font-bold flex-shrink-0 ${
                  idx === 0 ? 'bg-red-500' : idx === 1 ? 'bg-orange-500' : 'bg-green-500'
                }`}>
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-bold text-white">{phase.priority}</h4>
                  <div className="flex flex-wrap gap-2 my-2">
                    {phase.items.map((item, iIdx) => (
                      <span key={iIdx} className="px-2 py-1 bg-white/10 text-slate-300 rounded text-sm">{item}</span>
                    ))}
                  </div>
                  <p className="text-slate-400 text-sm">{phase.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    <GlobalFooter />
    </div>
  );
}
