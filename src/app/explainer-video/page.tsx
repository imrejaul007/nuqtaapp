'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Video,
  Play,
  Pause,
  Clock,
  Copy,
  Check,
  ChevronDown,
  ChevronRight,
  Mic,
  Music,
  Camera,
  Image,
  FileText,
  Sparkles,
  Target,
  Users,
  Store,
  QrCode,
  Smartphone,
  Gift,
  TrendingUp,
  Heart,
  Zap,
  Star,
  Volume2
} from 'lucide-react';

interface VideoScene {
  id: string;
  scene: number;
  duration: string;
  title: string;
  visual: string;
  voiceover: string;
  textOverlay?: string;
  music: string;
  notes?: string;
}

interface VideoVersion {
  id: string;
  title: string;
  duration: string;
  purpose: string;
  platform: string[];
  scenes: VideoScene[];
}

const videoVersions: VideoVersion[] = [
  {
    id: 'v1',
    title: 'Main Explainer (60 seconds)',
    duration: '60 seconds',
    purpose: 'App Store, Website, YouTube Ads',
    platform: ['App Store', 'Website', 'YouTube'],
    scenes: [
      {
        id: 's1',
        scene: 1,
        duration: '0-5s',
        title: 'Hook / Problem',
        visual: 'Person pulls out wallet stuffed with punch cards, loyalty cards falling everywhere. Frustrated expression.',
        voiceover: 'Still carrying punch cards? Losing rewards you actually earned?',
        textOverlay: 'Sound familiar?',
        music: 'Upbeat, building tension',
        notes: 'Quick cuts, relatable frustration'
      },
      {
        id: 's2',
        scene: 2,
        duration: '5-10s',
        title: 'Solution Intro',
        visual: 'Phone appears with Nuqta app. Gold and black branding. Clean, premium feel.',
        voiceover: 'Meet Nuqta. The smart way Dubai earns rewards.',
        textOverlay: 'NUQTA',
        music: 'Transition to confident, modern beat'
      },
      {
        id: 's3',
        scene: 3,
        duration: '10-20s',
        title: 'How It Works - Step 1',
        visual: 'Person walks into trendy Dubai café. Camera follows as they approach counter.',
        voiceover: 'Walk into any Nuqta partner store...',
        music: 'Continues building'
      },
      {
        id: 's4',
        scene: 4,
        duration: '20-30s',
        title: 'How It Works - Step 2',
        visual: 'Close-up of QR code being scanned with phone. Satisfying scan animation. Coins appear on screen.',
        voiceover: 'Scan the QR code. Pay like normal. Coins earned automatically.',
        textOverlay: '+25 Coins ✨',
        music: 'Coin sound effect on earn'
      },
      {
        id: 's5',
        scene: 5,
        duration: '30-40s',
        title: 'Universal Rewards',
        visual: 'Split screen showing different locations: café, salon, gym, restaurant. Coins accumulating.',
        voiceover: 'Earn at the café. The salon. The gym. Your coins work everywhere.',
        textOverlay: 'One app. All your favorite spots.',
        music: 'Peak energy'
      },
      {
        id: 's6',
        scene: 6,
        duration: '40-50s',
        title: 'Redemption',
        visual: 'Person at checkout, uses coins to pay. Staff smiles. "AED 0.00" on screen.',
        voiceover: 'Then redeem at ANY partner. This coffee? On your coins.',
        textOverlay: 'Free coffee? Yes please.',
        music: 'Triumphant moment'
      },
      {
        id: 's7',
        scene: 7,
        duration: '50-55s',
        title: 'Social Proof',
        visual: 'Quick montage of happy people scanning QR codes at different locations around Dubai.',
        voiceover: 'Join thousands already earning across Dubai.',
        textOverlay: '100+ partners. Endless rewards.',
        music: 'Community feel'
      },
      {
        id: 's8',
        scene: 8,
        duration: '55-60s',
        title: 'Call to Action',
        visual: 'App icon with download buttons. Nuqta logo. "100 bonus coins" badge.',
        voiceover: 'Download Nuqta now. Get 100 free coins to start.',
        textOverlay: 'Download Free • 100 Bonus Coins',
        music: 'Strong finish, memorable'
      }
    ]
  },
  {
    id: 'v2',
    title: 'Short Social (15 seconds)',
    duration: '15 seconds',
    purpose: 'Instagram Reels, TikTok, Stories',
    platform: ['Instagram', 'TikTok', 'Stories'],
    scenes: [
      {
        id: 'ss1',
        scene: 1,
        duration: '0-3s',
        title: 'Hook',
        visual: 'POV: Looking at wallet full of useless punch cards',
        voiceover: 'POV: You lost another punch card',
        textOverlay: 'POV: You lost another punch card 😭',
        music: 'Trending sound (sad/funny)'
      },
      {
        id: 'ss2',
        scene: 2,
        duration: '3-8s',
        title: 'Solution',
        visual: 'Quick transition to Nuqta app, scanning QR, coins appearing',
        voiceover: 'Or you just use Nuqta',
        textOverlay: 'One app. All rewards. 🪙',
        music: 'Beat drop'
      },
      {
        id: 'ss3',
        scene: 3,
        duration: '8-12s',
        title: 'Benefit',
        visual: 'Montage: café, salon, gym - coins adding up',
        voiceover: 'Earn everywhere. Spend anywhere.',
        textOverlay: 'Scan → Earn → Redeem',
        music: 'Continues'
      },
      {
        id: 'ss4',
        scene: 4,
        duration: '12-15s',
        title: 'CTA',
        visual: 'App icon, "Download now" text, 100 coins badge',
        voiceover: 'Download free. 100 bonus coins.',
        textOverlay: '🔗 Link in bio',
        music: 'End on high note'
      }
    ]
  },
  {
    id: 'v3',
    title: 'Merchant Explainer (45 seconds)',
    duration: '45 seconds',
    purpose: 'B2B Sales, Merchant Acquisition',
    platform: ['Sales Meetings', 'LinkedIn', 'Email'],
    scenes: [
      {
        id: 'ms1',
        scene: 1,
        duration: '0-8s',
        title: 'Problem',
        visual: 'Empty café, owner looking worried. Customers walking by without entering.',
        voiceover: 'Customers come once and never return. Sound familiar?',
        textOverlay: 'The Retention Problem',
        music: 'Concerned, building'
      },
      {
        id: 'ms2',
        scene: 2,
        duration: '8-15s',
        title: 'Old Solutions Fail',
        visual: 'Discounts crossed out. "50% OFF" signs with X. Money flying away.',
        voiceover: 'Discounts destroy your margins. Punch cards get lost. Loyalty apps nobody downloads.',
        textOverlay: 'Discounts ≠ Loyalty',
        music: 'Tension'
      },
      {
        id: 'ms3',
        scene: 3,
        duration: '15-22s',
        title: 'Nuqta Solution',
        visual: 'Nuqta merchant dashboard, happy customers scanning, coins animation.',
        voiceover: 'Nuqta rewards your customers with coins - not discounts. They earn with you, spend across the network.',
        textOverlay: 'Coins, Not Discounts',
        music: 'Confident, solution-oriented'
      },
      {
        id: 'ms4',
        scene: 4,
        duration: '22-32s',
        title: 'Benefits',
        visual: 'Dashboard showing: repeat visits up 40%, customer data, zero setup cost.',
        voiceover: 'Get real customer data. See who comes back. Zero setup cost.',
        textOverlay: '40% more repeat visits',
        music: 'Building confidence'
      },
      {
        id: 'ms5',
        scene: 5,
        duration: '32-38s',
        title: 'How Easy',
        visual: 'QR standee on counter, staff scanning customer, simple flow.',
        voiceover: 'Just place our QR code. We handle the rest - including marketing your business to our users.',
        textOverlay: 'Setup in 24 hours',
        music: 'Easy, approachable'
      },
      {
        id: 'ms6',
        scene: 6,
        duration: '38-45s',
        title: 'CTA',
        visual: 'Partner logos, "Join 100+ Dubai businesses", contact info.',
        voiceover: 'Join 100+ Dubai businesses already growing with Nuqta.',
        textOverlay: 'Partner with Nuqta today',
        music: 'Strong finish'
      }
    ]
  }
];

const voiceoverGuidelines = [
  { label: 'Tone', value: 'Friendly, confident, modern - like talking to a smart friend' },
  { label: 'Pace', value: 'Energetic but clear. Not rushed. Let key points land.' },
  { label: 'Accent', value: 'Neutral international English or Arabic (for Arabic version)' },
  { label: 'Gender', value: 'Either - recommend testing both' },
  { label: 'Age Feel', value: '25-35 years old - relatable to target audience' },
];

const musicGuidelines = [
  { label: 'Style', value: 'Modern, upbeat, electronic/pop hybrid' },
  { label: 'Energy', value: 'Builds throughout, peaks at "redeem" moment' },
  { label: 'Avoid', value: 'Generic corporate music, heavy bass, distracting lyrics' },
  { label: 'References', value: 'Think Apple ads, Revolut, modern fintech' },
  { label: 'Licensing', value: 'Royalty-free or licensed (Epidemic Sound, Artlist)' },
];

const productionNotes = [
  'Shoot in Dubai Marina, JBR, Downtown - recognizable locations',
  'Use real Nuqta partner locations if possible',
  'Diverse cast representing Dubai\'s multicultural population',
  'High production quality - this represents the brand',
  'Vertical and horizontal versions for different platforms',
  'Include Arabic subtitles for all versions',
  'Color grade: Warm, premium feel with gold accents matching brand',
];

export default function ExplainerVideoPage() {
  const [activeVersion, setActiveVersion] = useState<string>('v1');
  const [expandedScene, setExpandedScene] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const currentVersion = videoVersions.find(v => v.id === activeVersion) || videoVersions[0];

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const copyFullScript = () => {
    const script = currentVersion.scenes.map(s =>
      `SCENE ${s.scene} (${s.duration})\nVisual: ${s.visual}\nVO: "${s.voiceover}"${s.textOverlay ? `\nText: ${s.textOverlay}` : ''}\n`
    ).join('\n');
    copyToClipboard(script, 'full-script');
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
            <span className="text-slate-400">Explainer Video</span>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 rounded-full border border-red-500/30 mb-4">
            <Video className="text-red-400" size={16} />
            <span className="text-red-400 text-sm font-medium">Video Production</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Explainer Video Scripts</h1>
          <p className="text-slate-400">Storyboards and voiceover scripts for Nuqta videos</p>
        </div>

        {/* Version Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {videoVersions.map(version => (
            <button
              key={version.id}
              onClick={() => setActiveVersion(version.id)}
              className={`p-4 rounded-xl border text-left transition-all ${
                activeVersion === version.id
                  ? 'bg-[#c9a227]/20 border-[#c9a227]/50'
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  activeVersion === version.id ? 'bg-[#c9a227]/30' : 'bg-white/10'
                }`}>
                  <Video className={activeVersion === version.id ? 'text-[#c9a227]' : 'text-slate-400'} size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold">{version.title}</h3>
                  <div className="flex items-center gap-2">
                    <Clock className="text-slate-500" size={12} />
                    <span className="text-slate-400 text-xs">{version.duration}</span>
                  </div>
                </div>
              </div>
              <p className="text-slate-400 text-sm">{version.purpose}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {version.platform.map(p => (
                  <span key={p} className="px-2 py-0.5 text-xs bg-white/5 text-slate-400 rounded">
                    {p}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>

        {/* Current Version Details */}
        <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-xl p-6 border border-red-500/30 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">{currentVersion.title}</h2>
              <p className="text-slate-400">{currentVersion.scenes.length} scenes • {currentVersion.duration}</p>
            </div>
            <button
              onClick={copyFullScript}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all"
            >
              {copiedId === 'full-script' ? <Check size={16} /> : <Copy size={16} />}
              Copy Full Script
            </button>
          </div>
        </div>

        {/* Scenes */}
        <div className="space-y-4 mb-8">
          {currentVersion.scenes.map((scene, index) => (
            <div
              key={scene.id}
              className="bg-white/5 rounded-xl border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setExpandedScene(expandedScene === scene.id ? null : scene.id)}
                className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-all text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-pink-500/20 border border-red-500/30 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-lg">{scene.scene}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{scene.title}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-slate-500 text-sm flex items-center gap-1">
                        <Clock size={12} />
                        {scene.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <ChevronRight className={`text-slate-400 transition-transform ${expandedScene === scene.id ? 'rotate-90' : ''}`} size={20} />
              </button>

              {expandedScene === scene.id && (
                <div className="p-4 border-t border-white/10 bg-black/20 space-y-4">
                  {/* Visual */}
                  <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Camera className="text-blue-400" size={16} />
                      <span className="text-blue-400 font-bold text-sm uppercase">Visual</span>
                    </div>
                    <p className="text-slate-300">{scene.visual}</p>
                  </div>

                  {/* Voiceover */}
                  <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Mic className="text-green-400" size={16} />
                        <span className="text-green-400 font-bold text-sm uppercase">Voiceover</span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(scene.voiceover, scene.id + '-vo')}
                        className="p-1.5 bg-white/10 rounded hover:bg-white/20"
                      >
                        {copiedId === scene.id + '-vo' ? (
                          <Check className="text-green-400" size={14} />
                        ) : (
                          <Copy className="text-slate-400" size={14} />
                        )}
                      </button>
                    </div>
                    <p className="text-white text-lg italic">&quot;{scene.voiceover}&quot;</p>
                  </div>

                  {/* Text Overlay */}
                  {scene.textOverlay && (
                    <div className="bg-amber-500/10 rounded-lg p-4 border border-amber-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="text-amber-400" size={16} />
                        <span className="text-amber-400 font-bold text-sm uppercase">On-Screen Text</span>
                      </div>
                      <p className="text-white font-bold text-xl">{scene.textOverlay}</p>
                    </div>
                  )}

                  {/* Music */}
                  <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Music className="text-purple-400" size={16} />
                      <span className="text-purple-400 font-bold text-sm uppercase">Music/Sound</span>
                    </div>
                    <p className="text-slate-300">{scene.music}</p>
                  </div>

                  {/* Notes */}
                  {scene.notes && (
                    <div className="bg-white/5 rounded-lg p-3">
                      <span className="text-slate-500 text-xs">Production Note: {scene.notes}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Voiceover Guidelines */}
        <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30 mb-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Mic className="text-green-400" size={20} />
            Voiceover Guidelines
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {voiceoverGuidelines.map((guide, i) => (
              <div key={i} className="bg-black/20 rounded-lg p-3">
                <span className="text-green-400 font-bold text-sm">{guide.label}</span>
                <p className="text-slate-300 text-sm mt-1">{guide.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Music Guidelines */}
        <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30 mb-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Music className="text-purple-400" size={20} />
            Music & Sound Guidelines
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {musicGuidelines.map((guide, i) => (
              <div key={i} className="bg-black/20 rounded-lg p-3">
                <span className="text-purple-400 font-bold text-sm">{guide.label}</span>
                <p className="text-slate-300 text-sm mt-1">{guide.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Production Notes */}
        <div className="bg-gradient-to-r from-[#c9a227]/20 to-amber-500/20 rounded-xl p-6 border border-[#c9a227]/30">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Camera className="text-[#c9a227]" size={20} />
            Production Notes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {productionNotes.map((note, i) => (
              <div key={i} className="flex items-start gap-2">
                <Star className="text-[#c9a227] flex-shrink-0 mt-0.5" size={14} />
                <span className="text-slate-300 text-sm">{note}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Export Options */}
        <div className="mt-8 bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Video className="text-red-400" size={20} />
            Export Specifications
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-slate-400 py-2 font-medium">Platform</th>
                  <th className="text-left text-slate-400 py-2 font-medium">Aspect Ratio</th>
                  <th className="text-left text-slate-400 py-2 font-medium">Resolution</th>
                  <th className="text-left text-slate-400 py-2 font-medium">Format</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="text-white py-2">App Store / YouTube</td>
                  <td className="text-slate-300 py-2">16:9 (Horizontal)</td>
                  <td className="text-slate-300 py-2">1920 × 1080</td>
                  <td className="text-slate-300 py-2">MP4, H.264</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="text-white py-2">Instagram Reels / TikTok</td>
                  <td className="text-slate-300 py-2">9:16 (Vertical)</td>
                  <td className="text-slate-300 py-2">1080 × 1920</td>
                  <td className="text-slate-300 py-2">MP4, H.264</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="text-white py-2">Instagram Feed</td>
                  <td className="text-slate-300 py-2">1:1 (Square)</td>
                  <td className="text-slate-300 py-2">1080 × 1080</td>
                  <td className="text-slate-300 py-2">MP4, H.264</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="text-white py-2">Stories</td>
                  <td className="text-slate-300 py-2">9:16 (Vertical)</td>
                  <td className="text-slate-300 py-2">1080 × 1920</td>
                  <td className="text-slate-300 py-2">MP4, max 15s</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
