'use client';

import React, { useState } from 'react';
import {
  Video,
  Users,
  MapPin,
  Search,
  TrendingUp,
  Instagram,
  Play,
  Mic,
  Camera,
  Gift,
  DollarSign,
  Target,
  Calendar,
  CheckCircle,
  Sparkles,
  Heart,
  MessageCircle,
  Share2,
  Eye,
  Clock,
  Zap,
  Star,
  Trophy,
  Coins,
  Store,
  Coffee,
  ShoppingBag,
  Utensils,
  Smartphone,
  ChevronRight,
  BarChart3
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

type SeriesId = 'savings' | 'podcast' | 'discovery' | 'dealfinder';

interface ContentSeries {
  id: SeriesId;
  name: string;
  tagline: string;
  icon: React.ElementType;
  color: string;
  description: string;
  format: string;
  frequency: string;
  duration: string;
  platforms: string[];
  episodeIdeas: {
    title: string;
    hook: string;
    location?: string;
  }[];
  productionNeeds: string[];
  kpis: string[];
  hashtags: string[];
  cta: string;
}

const contentSeries: ContentSeries[] = [
  {
    id: 'savings',
    name: 'How Much You Save',
    tagline: 'Family Savings Series',
    icon: DollarSign,
    color: 'green',
    description: 'Street interviews asking people about their monthly spending and showing them how much they could save with Nuqta. Real people, real numbers, real reactions.',
    format: 'Street Interview / Man-on-the-Street',
    frequency: '3x per week',
    duration: '60-90 seconds (Reels/TikTok)',
    platforms: ['Instagram Reels', 'TikTok', 'YouTube Shorts'],
    episodeIdeas: [
      { title: 'Coffee Lovers Edition', hook: 'How much do you spend on coffee monthly?', location: 'Dubai Marina' },
      { title: 'Family Grocery Run', hook: 'Family of 4 grocery bill reveal', location: 'Carrefour / Spinneys' },
      { title: 'Dining Out Disaster', hook: 'Restaurant bills adding up?', location: 'JBR / Downtown' },
      { title: 'Couple Date Night', hook: 'How much do date nights cost you?', location: 'City Walk' },
      { title: 'Student Budget', hook: 'University students monthly spend', location: 'Knowledge Village' },
      { title: 'Office Workers Lunch', hook: 'Daily lunch spend calculator', location: 'DIFC / Business Bay' },
      { title: 'Weekend Shopping', hook: 'Mall shopping totals exposed', location: 'Dubai Mall / MOE' },
      { title: 'Fitness & Wellness', hook: 'Gym, supplements, healthy food', location: 'Sports area' },
      { title: 'Parents with Kids', hook: 'Kids activities and treats cost', location: 'Kids play areas' },
      { title: 'Expat Life Costs', hook: 'New to Dubai spending shock', location: 'Various' },
    ],
    productionNeeds: [
      'Portable mic for street interviews',
      'Smartphone gimbal for stable shots',
      'Calculator prop (branded Nuqta)',
      'Release forms for interviewees',
      'Nuqta branded t-shirts for team',
      'Small gift cards for participants (AED 20)'
    ],
    kpis: [
      'Views per episode: 10K+ target',
      'Engagement rate: >5%',
      'Shares: 100+ per video',
      'App downloads from series: Track with UTM',
      'Comments about savings: Monitor sentiment'
    ],
    hashtags: ['#HowMuchYouSave', '#NuqtaSavings', '#DubaiSavings', '#UAEMoney', '#SaveWithNuqta', '#FamilySavings', '#MoneySmart'],
    cta: 'Download Nuqta and start saving TODAY!'
  },
  {
    id: 'podcast',
    name: 'Did You Know?',
    tagline: 'App Features Podcast Series',
    icon: Mic,
    color: 'purple',
    description: 'Casual podcast-style videos where hosts discuss app features, tips, and hacks. "Did you know with this app you can do THIS?" format. Educational but entertaining.',
    format: 'Podcast / Talk Show Style',
    frequency: '2x per week',
    duration: '2-3 minutes (YouTube) + 60s clips (Reels/TikTok)',
    platforms: ['YouTube', 'Instagram Reels', 'TikTok', 'Spotify (audio)'],
    episodeIdeas: [
      { title: 'The QR Scan Magic', hook: 'Did you know you earn cashback just by scanning?' },
      { title: 'Social Bonus Explained', hook: 'Get 5% EXTRA when friends use Nuqta' },
      { title: 'Hidden Gem Merchants', hook: 'Discover places you never knew gave cashback' },
      { title: 'Coin Stacking Strategy', hook: 'How to maximize your Nuqta coins' },
      { title: 'Family Account Tips', hook: 'Add family members, multiply savings' },
      { title: 'Weekend Deal Hunt', hook: 'Best days to shop with Nuqta' },
      { title: 'Merchant Spotlight', hook: 'This cafe gives 15% cashback?!' },
      { title: 'Redemption Hacks', hook: 'Best ways to use your earned coins' },
      { title: 'Notification Settings', hook: 'Never miss a deal near you' },
      { title: 'Referral Program Deep Dive', hook: 'Earn AED 50 for every friend' },
    ],
    productionNeeds: [
      'Podcast setup (2 chairs, small table)',
      'Ring lights for good lighting',
      'Lapel mics for clear audio',
      'Branded backdrop/background',
      'Phone/tablet to show app demos',
      'Intro/outro music (licensed)'
    ],
    kpis: [
      'Watch time: >60% average',
      'Subscriber growth: +500/month',
      'Feature adoption: Track in-app',
      'Comments/questions: Respond to all',
      'Clip performance: Track per platform'
    ],
    hashtags: ['#DidYouKnowNuqta', '#NuqtaTips', '#AppHacks', '#CashbackTips', '#NuqtaPodcast', '#SaveSmarter'],
    cta: 'Try this feature now - link in bio!'
  },
  {
    id: 'discovery',
    name: 'Nuqta Discovers',
    tagline: 'Location & Deals Discovery Series',
    icon: MapPin,
    color: 'blue',
    description: 'Explore different locations, neighborhoods, and hidden gems in UAE. Showcase partner merchants, their stories, and exclusive deals available through Nuqta.',
    format: 'Travel/Discovery Vlog Style',
    frequency: '2x per week',
    duration: '90-120 seconds (Reels) + 5-8 min (YouTube)',
    platforms: ['Instagram Reels', 'TikTok', 'YouTube'],
    episodeIdeas: [
      { title: 'Hidden Cafes of Al Quoz', hook: 'Industrial area coffee gems', location: 'Al Quoz' },
      { title: 'JBR Food Trail', hook: 'Best beachside eats with cashback', location: 'JBR' },
      { title: 'Old Dubai Treasures', hook: 'Heritage area deals', location: 'Al Fahidi / Deira' },
      { title: 'Downtown Date Spots', hook: 'Romantic restaurants with rewards', location: 'Downtown Dubai' },
      { title: 'Marina Breakfast Run', hook: 'Morning spots with savings', location: 'Dubai Marina' },
      { title: 'Business Bay Lunch Guide', hook: 'Office worker paradise', location: 'Business Bay' },
      { title: 'Sharjah Savings Safari', hook: 'Cross-border deals', location: 'Sharjah' },
      { title: 'Abu Dhabi Edition', hook: 'Capital city cashback tour', location: 'Abu Dhabi' },
      { title: 'Mall Crawler', hook: 'Best mall deals with Nuqta', location: 'Various malls' },
      { title: 'Late Night Eats', hook: '24-hour spots with rewards', location: 'Various' },
    ],
    productionNeeds: [
      'Good quality camera/smartphone',
      'Gimbal for smooth walking shots',
      'Drone for location establishing shots',
      'Portable lighting for indoors',
      'Merchant interview releases',
      'Food/product photography skills'
    ],
    kpis: [
      'Location tags: Track merchant visits',
      'Saves: >500 per video',
      'Merchant traffic increase: Survey',
      'New merchant sign-ups from series',
      'User-generated location content'
    ],
    hashtags: ['#NuqtaDiscovers', '#DubaiHiddenGems', '#UAEFoodie', '#DubaiDeals', '#ExploreWithNuqta', '#FoodieFinds'],
    cta: 'Find this place on Nuqta app!'
  },
  {
    id: 'dealfinder',
    name: 'Deal Finder Challenge',
    tagline: 'Hide & Seek Coin Card Series',
    icon: Search,
    color: 'yellow',
    description: 'Interactive series where we hide Nuqta coin cards (with real rewards) around UAE locations. Viewers follow clues to find them. Creates excitement, engagement, and foot traffic to partner locations.',
    format: 'Interactive Challenge / Treasure Hunt',
    frequency: '1x per week (weekend)',
    duration: '60 seconds clue video + Stories updates',
    platforms: ['Instagram (main)', 'TikTok', 'Twitter/X'],
    episodeIdeas: [
      { title: 'Marina Treasure Hunt', hook: 'AED 500 hidden in Dubai Marina', location: 'Dubai Marina' },
      { title: 'Mall Mystery', hook: 'Find the golden Nuqta card', location: 'Dubai Mall' },
      { title: 'JBR Beach Hunt', hook: 'Summer treasure on the beach', location: 'JBR Beach' },
      { title: 'Coffee Shop Quest', hook: 'Hidden in a partner cafe', location: 'Partner cafe' },
      { title: 'Downtown Chase', hook: 'Burj Khalifa area treasure', location: 'Downtown' },
      { title: 'Campus Hunt', hook: 'University students edition', location: 'Universities' },
      { title: 'Weekend Warrior', hook: 'Multiple cards, multiple locations', location: 'Various' },
      { title: 'Night Owl Edition', hook: 'Evening treasure hunt', location: 'Night spots' },
      { title: 'Partner Special', hook: 'Hidden at new partner launch', location: 'New merchant' },
      { title: 'Grand Finale', hook: 'AED 2,000 ultimate hunt', location: 'Multiple' },
    ],
    productionNeeds: [
      'Physical Nuqta coin cards (printed)',
      'QR codes linked to rewards',
      'Clue graphics/videos',
      'Real-time Stories capability',
      'Prize fulfillment system',
      'Safety/rules documentation'
    ],
    kpis: [
      'Participation: # of hunters',
      'Story views during hunt: 50K+',
      'New followers per hunt: 1K+',
      'App downloads during hunt',
      'UGC from participants',
      'Partner location foot traffic'
    ],
    hashtags: ['#NuqtaDealFinder', '#DubaiTreasureHunt', '#FindTheNuqta', '#NuqtaChallenge', '#WinWithNuqta', '#DealHunt'],
    cta: 'Follow NOW to get the next clue!'
  }
];

export default function SocialContentStrategyPage() {
  const [activeSeries, setActiveSeries] = useState<SeriesId>('savings');
  const [activeTab, setActiveTab] = useState<'overview' | 'calendar' | 'production'>('overview');

  const currentSeries = contentSeries.find(s => s.id === activeSeries)!;

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green': return { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400', solid: 'bg-green-500' };
      case 'purple': return { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400', solid: 'bg-purple-500' };
      case 'blue': return { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', solid: 'bg-blue-500' };
      case 'yellow': return { bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', text: 'text-yellow-400', solid: 'bg-yellow-500' };
      default: return { bg: 'bg-gray-500/10', border: 'border-gray-500/30', text: 'text-gray-400', solid: 'bg-gray-500' };
    }
  };

  const colors = getColorClasses(currentSeries.color);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2a4a] to-[#0a1628]">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-900/50 to-purple-900/50 border-b border-pink-500/30">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
              <Video size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Social Content Strategy</h1>
              <p className="text-pink-300">4 Content Series for CMO + Designer to Execute</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1"><Calendar size={14} /> Launch: Feb 2026</span>
            <span className="flex items-center gap-1"><Users size={14} /> Owner: CMO + Designer</span>
            <span className="flex items-center gap-1"><Target size={14} /> Goal: 10K followers in 30 days</span>
          </div>
        </div>
      </div>

      {/* Series Selector */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {contentSeries.map((series) => {
            const Icon = series.icon;
            const seriesColors = getColorClasses(series.color);
            const isActive = activeSeries === series.id;
            return (
              <button
                key={series.id}
                onClick={() => setActiveSeries(series.id)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  isActive
                    ? `${seriesColors.bg} ${seriesColors.border} ${seriesColors.text}`
                    : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                }`}
              >
                <Icon size={24} className={isActive ? seriesColors.text : 'text-slate-500'} />
                <p className="font-bold mt-2 text-sm">{series.name}</p>
                <p className="text-xs opacity-70">{series.tagline}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-2 border-b border-white/10 pb-2">
          {[
            { id: 'overview', label: 'Series Overview' },
            { id: 'calendar', label: 'Episode Ideas' },
            { id: 'production', label: 'Production Guide' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-4 py-2 rounded-t-lg font-medium transition-all ${
                activeTab === tab.id
                  ? `${colors.bg} ${colors.text}`
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Series Header */}
            <div className={`${colors.bg} rounded-2xl p-8 border ${colors.border}`}>
              <div className="flex items-start gap-6">
                <div className={`w-20 h-20 rounded-2xl ${colors.solid} flex items-center justify-center`}>
                  <currentSeries.icon size={40} className="text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-2">{currentSeries.name}</h2>
                  <p className={`${colors.text} text-lg mb-4`}>{currentSeries.tagline}</p>
                  <p className="text-slate-300 leading-relaxed">{currentSeries.description}</p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <Play size={20} className={colors.text} />
                <p className="text-slate-400 text-sm mt-2">Format</p>
                <p className="text-white font-medium">{currentSeries.format}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <Calendar size={20} className={colors.text} />
                <p className="text-slate-400 text-sm mt-2">Frequency</p>
                <p className="text-white font-medium">{currentSeries.frequency}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <Clock size={20} className={colors.text} />
                <p className="text-slate-400 text-sm mt-2">Duration</p>
                <p className="text-white font-medium text-sm">{currentSeries.duration}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <Share2 size={20} className={colors.text} />
                <p className="text-slate-400 text-sm mt-2">Platforms</p>
                <p className="text-white font-medium text-sm">{currentSeries.platforms.join(', ')}</p>
              </div>
            </div>

            {/* Hashtags & CTA */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Sparkles size={20} className={colors.text} />
                  Hashtags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {currentSeries.hashtags.map((tag, idx) => (
                    <span key={idx} className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className={`${colors.bg} rounded-xl p-6 border ${colors.border}`}>
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Zap size={20} className={colors.text} />
                  Call to Action
                </h3>
                <p className={`${colors.text} text-xl font-bold`}>{currentSeries.cta}</p>
              </div>
            </div>

            {/* KPIs */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <BarChart3 size={20} className={colors.text} />
                Key Performance Indicators
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {currentSeries.kpis.map((kpi, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-300">
                    <CheckCircle size={16} className={colors.text} />
                    <span className="text-sm">{kpi}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Episode Ideas Tab */}
        {activeTab === 'calendar' && (
          <div className="space-y-6">
            <div className={`${colors.bg} rounded-xl p-4 border ${colors.border}`}>
              <p className={`${colors.text} font-medium`}>
                {currentSeries.episodeIdeas.length} Episode Ideas for {currentSeries.name}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {currentSeries.episodeIdeas.map((episode, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-all">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full ${colors.solid} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-bold mb-1">{episode.title}</h4>
                      <p className={`${colors.text} text-sm mb-2`}>"{episode.hook}"</p>
                      {episode.location && (
                        <p className="text-slate-500 text-xs flex items-center gap-1">
                          <MapPin size={12} /> {episode.location}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Production Tab */}
        {activeTab === 'production' && (
          <div className="space-y-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Camera size={20} className={colors.text} />
                Production Requirements
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {currentSeries.productionNeeds.map((need, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <CheckCircle size={18} className={colors.text} />
                    <span className="text-slate-300">{need}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Workflow */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-white font-bold mb-4">Production Workflow</h3>
              <div className="space-y-3">
                {[
                  { step: 1, task: 'Plan episode topic and location', owner: 'CMO' },
                  { step: 2, task: 'Create shot list and script outline', owner: 'CMO + Designer' },
                  { step: 3, task: 'Coordinate with location/merchant', owner: 'BDA' },
                  { step: 4, task: 'Shoot content', owner: 'Designer + CMO' },
                  { step: 5, task: 'Edit video with branding', owner: 'Designer' },
                  { step: 6, task: 'Write captions and hashtags', owner: 'CMO' },
                  { step: 7, task: 'Schedule and publish', owner: 'CMO' },
                  { step: 8, task: 'Monitor engagement and respond', owner: 'CMO' },
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                    <div className={`w-8 h-8 rounded-full ${colors.solid} flex items-center justify-center text-white font-bold text-sm`}>
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <span className="text-white">{item.task}</span>
                    </div>
                    <span className="text-slate-500 text-sm">{item.owner}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Weekly Content Calendar */}
      <div className="max-w-7xl mx-auto px-4 py-8 border-t border-white/10">
        <h2 className="text-2xl font-bold text-white mb-6">Weekly Content Calendar</h2>
        <div className="grid grid-cols-7 gap-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, idx) => (
            <div key={day} className="text-center">
              <p className="text-slate-400 text-sm mb-2">{day}</p>
              <div className={`p-3 rounded-xl ${idx === 5 || idx === 6 ? 'bg-yellow-500/10 border border-yellow-500/30' : 'bg-white/5 border border-white/10'}`}>
                {idx === 0 && <div className="text-xs text-green-400 mb-1">Savings #1</div>}
                {idx === 1 && <div className="text-xs text-purple-400 mb-1">Podcast</div>}
                {idx === 2 && <div className="text-xs text-green-400 mb-1">Savings #2</div>}
                {idx === 3 && <div className="text-xs text-blue-400 mb-1">Discovery</div>}
                {idx === 4 && <div className="text-xs text-green-400 mb-1">Savings #3</div>}
                {idx === 5 && <div className="text-xs text-yellow-400 mb-1">Deal Finder</div>}
                {idx === 6 && <div className="text-xs text-blue-400 mb-1">Discovery #2</div>}
                {idx === 1 && <div className="text-xs text-purple-400">Podcast</div>}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-green-500"></span> How Much You Save (3x)</span>
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-purple-500"></span> Did You Know Podcast (2x)</span>
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-blue-500"></span> Nuqta Discovers (2x)</span>
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-yellow-500"></span> Deal Finder (1x weekend)</span>
        </div>
      </div>

      {/* Quick Start Checklist */}
      <div className="max-w-7xl mx-auto px-4 py-8 border-t border-white/10">
        <h2 className="text-2xl font-bold text-white mb-6">Launch Checklist</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { task: 'Create Instagram Business account @nuqtaapp', done: false },
            { task: 'Create TikTok account @nuqtaapp', done: false },
            { task: 'Create YouTube channel', done: false },
            { task: 'Design profile pics and banners', done: false },
            { task: 'Write bio with value prop', done: false },
            { task: 'Set up Linktree/bio link', done: false },
            { task: 'Create content templates in Canva', done: false },
            { task: 'Purchase basic equipment (gimbal, mic)', done: false },
            { task: 'Film first 3 episodes of each series', done: false },
            { task: 'Schedule first week of content', done: false },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
              <input type="checkbox" className="w-5 h-5 rounded" defaultChecked={item.done} />
              <span className="text-slate-300">{item.task}</span>
            </div>
          ))}
        </div>
      </div>

      <GlobalFooter />
    </div>
  );
}
