'use client';

import React, { useState } from 'react';
import {
  MessageSquare,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  User,
  Gift,
  Star,
  Bell,
  Heart,
  TrendingUp,
  Zap,
  Award,
  Target,
  Sparkles,
  Clock,
  MapPin
} from 'lucide-react';

interface SMSTemplate {
  id: string;
  name: string;
  category: string;
  message: string;
  characterCount: number;
  sendTiming: string;
  audienceSegment: string;
  icon: React.ElementType;
  variables: string[];
}

const smsTemplates: SMSTemplate[] = [
  // WELCOME SERIES
  {
    id: 'sms-welcome-1',
    name: 'Welcome SMS (Immediate)',
    category: 'Welcome Series',
    message: `Welcome to Nuqta! 🎉 You're now earning rewards at 500+ Dubai spots. Your first purchase = 2x points for 7 days! Download: nuqta.ae/app`,
    characterCount: 139,
    sendTiming: 'Immediately after signup',
    audienceSegment: 'New users',
    icon: User,
    variables: []
  },
  {
    id: 'sms-welcome-2',
    name: 'Profile Reminder (Day 1)',
    category: 'Welcome Series',
    message: `{{name}}, complete your Nuqta profile = 50 FREE points! Takes 30 seconds. Tap here: nuqta.ae/profile 🎁`,
    characterCount: 105,
    sendTiming: '24 hours after signup if incomplete',
    audienceSegment: 'Incomplete profiles',
    icon: Star,
    variables: ['{{name}}']
  },
  {
    id: 'sms-welcome-3',
    name: 'First Purchase Nudge (Day 3)',
    category: 'Welcome Series',
    message: `{{name}}, your 2x points bonus is waiting! ☕ Every coffee, meal & gym visit = double rewards. Find spots: nuqta.ae/near`,
    characterCount: 123,
    sendTiming: 'Day 3 if no purchase',
    audienceSegment: '0 transactions',
    icon: Zap,
    variables: ['{{name}}']
  },
  {
    id: 'sms-welcome-4',
    name: 'Last Chance Bonus (Day 6)',
    category: 'Welcome Series',
    message: `⚠️ {{name}}, 2x points expires TOMORROW! Make your first purchase now + get 100 bonus points. Don't miss out! nuqta.ae/app`,
    characterCount: 131,
    sendTiming: 'Day 6 if no purchase',
    audienceSegment: '0 transactions',
    icon: Bell,
    variables: ['{{name}}']
  },

  // TRANSACTIONAL
  {
    id: 'sms-trans-1',
    name: 'Points Earned Confirmation',
    category: 'Transactional',
    message: `✅ +{{points}} points earned at {{merchant}}! Balance: {{balance}} points. {{points_away}} more to your next reward! 🎯`,
    characterCount: 115,
    sendTiming: 'Immediately after transaction',
    audienceSegment: 'Active users',
    icon: Check,
    variables: ['{{points}}', '{{merchant}}', '{{balance}}', '{{points_away}}']
  },
  {
    id: 'sms-trans-2',
    name: 'Reward Unlocked',
    category: 'Transactional',
    message: `🎉 You unlocked: {{reward_name}}! Open the Nuqta app to claim it. Valid until {{expiry}}. Enjoy! nuqta.ae/rewards`,
    characterCount: 118,
    sendTiming: 'When reward unlocked',
    audienceSegment: 'Users unlocking rewards',
    icon: Gift,
    variables: ['{{reward_name}}', '{{expiry}}']
  },
  {
    id: 'sms-trans-3',
    name: 'Reward Redeemed',
    category: 'Transactional',
    message: `✅ Reward used: {{reward_name}} at {{merchant}}. Hope you enjoyed it! Keep earning for more treats 🎁`,
    characterCount: 100,
    sendTiming: 'After redemption',
    audienceSegment: 'Users redeeming',
    icon: Award,
    variables: ['{{reward_name}}', '{{merchant}}']
  },

  // ENGAGEMENT
  {
    id: 'sms-engage-1',
    name: 'Points Expiring Soon',
    category: 'Engagement',
    message: `⏰ {{name}}, {{points}} points expire in 7 days! Use them before they're gone: nuqta.ae/rewards`,
    characterCount: 95,
    sendTiming: '7 days before expiry',
    audienceSegment: 'Users with expiring points',
    icon: Clock,
    variables: ['{{name}}', '{{points}}']
  },
  {
    id: 'sms-engage-2',
    name: 'Streak Reminder',
    category: 'Engagement',
    message: `🔥 {{name}}, you're on a {{streak}}-day streak! Visit any Nuqta merchant today to keep it alive. nuqta.ae/near`,
    characterCount: 109,
    sendTiming: 'If streak at risk (no visit in 20+ hours)',
    audienceSegment: 'Users with active streaks',
    icon: TrendingUp,
    variables: ['{{name}}', '{{streak}}']
  },
  {
    id: 'sms-engage-3',
    name: 'Win-Back (14 Days)',
    category: 'Engagement',
    message: `{{name}}, we miss you! 😊 Here's 50 bonus points to welcome you back. Valid 7 days. nuqta.ae/claim`,
    characterCount: 102,
    sendTiming: '14 days inactive',
    audienceSegment: 'Lapsed users',
    icon: Heart,
    variables: ['{{name}}']
  },
  {
    id: 'sms-engage-4',
    name: 'Win-Back (30 Days)',
    category: 'Engagement',
    message: `{{name}}, you have {{points}} points waiting! That's AED {{value}} in rewards. Don't let them expire. nuqta.ae/app`,
    characterCount: 114,
    sendTiming: '30 days inactive',
    audienceSegment: 'At-risk users',
    icon: Bell,
    variables: ['{{name}}', '{{points}}', '{{value}}']
  },

  // PROMOTIONAL
  {
    id: 'sms-promo-1',
    name: 'Double Points Weekend',
    category: 'Promotional',
    message: `🔥 THIS WEEKEND: 2x points at ALL Nuqta merchants! Fri-Sun only. Every scan = double rewards. Go! nuqta.ae/app`,
    characterCount: 115,
    sendTiming: 'Thursday evening',
    audienceSegment: 'All active users',
    icon: Zap,
    variables: []
  },
  {
    id: 'sms-promo-2',
    name: 'Flash Sale (4 Hours)',
    category: 'Promotional',
    message: `⚡ FLASH: 3x points for the next 4 HOURS only! Any purchase, any merchant. Go now! nuqta.ae/near`,
    characterCount: 99,
    sendTiming: 'Start of flash promo',
    audienceSegment: 'High-engagement users',
    icon: Sparkles,
    variables: []
  },
  {
    id: 'sms-promo-3',
    name: 'New Merchant Nearby',
    category: 'Promotional',
    message: `🆕 {{merchant}} just joined Nuqta near you! Get 3x points on your first visit this week. 📍 {{location}}`,
    characterCount: 108,
    sendTiming: 'New merchant launch',
    audienceSegment: 'Users within 3km',
    icon: MapPin,
    variables: ['{{merchant}}', '{{location}}']
  },
  {
    id: 'sms-promo-4',
    name: 'Category Bonus',
    category: 'Promotional',
    message: `☕ Coffee lovers! 2x points at all cafes this week. {{count}}+ spots across Dubai. Time to caffeinate! nuqta.ae/cafes`,
    characterCount: 117,
    sendTiming: 'Start of category promo',
    audienceSegment: 'Users with cafe history',
    icon: Target,
    variables: ['{{count}}']
  },
  {
    id: 'sms-promo-5',
    name: 'Payday Promo',
    category: 'Promotional',
    message: `💰 It's payday! Celebrate with 2x points all weekend at restaurants. Your wallet AND your points thank you 🙌`,
    characterCount: 112,
    sendTiming: '25th-28th of month',
    audienceSegment: 'All users',
    icon: Gift,
    variables: []
  },

  // MILESTONE
  {
    id: 'sms-mile-1',
    name: 'First Reward Earned',
    category: 'Milestone',
    message: `🎉 CONGRATS {{name}}! You earned your first reward! Open app to claim: {{reward}}. You did it! nuqta.ae/rewards`,
    characterCount: 112,
    sendTiming: 'First reward unlocked',
    audienceSegment: 'New reward earners',
    icon: Award,
    variables: ['{{name}}', '{{reward}}']
  },
  {
    id: 'sms-mile-2',
    name: 'Birthday Greeting',
    category: 'Milestone',
    message: `🎂 Happy Birthday {{name}}! Here's {{points}} bonus points + 2x rewards all week. Celebrate on us! nuqta.ae/birthday`,
    characterCount: 117,
    sendTiming: 'Birthday morning (8am)',
    audienceSegment: 'Birthday users',
    icon: Gift,
    variables: ['{{name}}', '{{points}}']
  },
  {
    id: 'sms-mile-3',
    name: 'Tier Upgrade',
    category: 'Milestone',
    message: `⬆️ Level up! You're now a {{tier}} member! New perks unlocked. See what's new: nuqta.ae/status 🌟`,
    characterCount: 103,
    sendTiming: 'Upon tier upgrade',
    audienceSegment: 'Upgrading users',
    icon: TrendingUp,
    variables: ['{{tier}}']
  },
  {
    id: 'sms-mile-4',
    name: '1 Year Anniversary',
    category: 'Milestone',
    message: `🎊 1 YEAR with Nuqta! You've earned {{points}} points & saved AED {{savings}}. Here's 200 bonus points! 🎁`,
    characterCount: 109,
    sendTiming: 'Anniversary date',
    audienceSegment: 'Anniversary users',
    icon: Star,
    variables: ['{{points}}', '{{savings}}']
  },

  // REFERRAL
  {
    id: 'sms-ref-1',
    name: 'Referral Reminder',
    category: 'Referral',
    message: `{{name}}, share Nuqta = free points! You & your friend both get 100 points. Your link: {{link}} 🤝`,
    characterCount: 107,
    sendTiming: 'After 5th transaction',
    audienceSegment: 'Engaged users',
    icon: User,
    variables: ['{{name}}', '{{link}}']
  },
  {
    id: 'sms-ref-2',
    name: 'Referral Success',
    category: 'Referral',
    message: `🎉 Cha-ching! Your friend {{friend}} just joined + made a purchase. +100 points for you! Keep sharing: {{link}}`,
    characterCount: 115,
    sendTiming: 'When referral converts',
    audienceSegment: 'Referrers',
    icon: Gift,
    variables: ['{{friend}}', '{{link}}']
  },

  // LOCATION-BASED
  {
    id: 'sms-geo-1',
    name: 'Nearby Merchant Alert',
    category: 'Location',
    message: `📍 Hey {{name}}! You're near {{merchant}} - a Nuqta spot! Pop in and earn points on your next purchase 🎯`,
    characterCount: 111,
    sendTiming: 'When near merchant (opt-in)',
    audienceSegment: 'Geo-enabled users',
    icon: MapPin,
    variables: ['{{name}}', '{{merchant}}']
  },
  {
    id: 'sms-geo-2',
    name: 'Area Hot Spots',
    category: 'Location',
    message: `🗺️ {{count}} Nuqta merchants near you in {{area}}! Explore & earn: nuqta.ae/near`,
    characterCount: 80,
    sendTiming: 'Weekend mornings',
    audienceSegment: 'By location',
    icon: Target,
    variables: ['{{count}}', '{{area}}']
  }
];

const categoryColors: Record<string, string> = {
  'Welcome Series': 'bg-blue-50 text-blue-700 border-blue-200',
  'Transactional': 'bg-gray-50 text-gray-700 border-gray-200',
  'Engagement': 'bg-green-50 text-green-700 border-green-200',
  'Promotional': 'bg-purple-50 text-purple-700 border-purple-200',
  'Milestone': 'bg-amber-50 text-amber-700 border-amber-200',
  'Referral': 'bg-pink-50 text-pink-700 border-pink-200',
  'Location': 'bg-teal-50 text-teal-700 border-teal-200'
};

const categoryBgColors: Record<string, string> = {
  'Welcome Series': 'bg-blue-500',
  'Transactional': 'bg-gray-500',
  'Engagement': 'bg-green-500',
  'Promotional': 'bg-purple-500',
  'Milestone': 'bg-amber-500',
  'Referral': 'bg-pink-500',
  'Location': 'bg-teal-500'
};

export default function SMSTemplatesPage() {
  const [expandedTemplates, setExpandedTemplates] = useState<string[]>([]);
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(smsTemplates.map(t => t.category)))];

  const filteredTemplates = activeCategory === 'all'
    ? smsTemplates
    : smsTemplates.filter(t => t.category === activeCategory);

  const toggleTemplate = (id: string) => {
    setExpandedTemplates(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const copyToClipboard = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates({ ...copiedStates, [id]: true });
    setTimeout(() => {
      setCopiedStates(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  const getCharacterStatus = (count: number) => {
    if (count <= 160) return { color: 'text-green-600', label: '1 SMS', bg: 'bg-green-100' };
    if (count <= 306) return { color: 'text-amber-600', label: '2 SMS', bg: 'bg-amber-100' };
    return { color: 'text-red-600', label: '3+ SMS', bg: 'bg-red-100' };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <MessageSquare className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold">SMS Marketing Templates</h1>
          </div>
          <p className="text-xl text-green-100 max-w-2xl">
            25+ SMS templates for instant engagement. Short, punchy, and action-driving.
            Optimized for single-SMS delivery.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2">
              <span className="text-2xl font-bold">{smsTemplates.length}</span>
              <span className="text-green-100 ml-2">Templates</span>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2">
              <span className="text-2xl font-bold">{categories.length - 1}</span>
              <span className="text-green-100 ml-2">Categories</span>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2">
              <span className="text-2xl font-bold">160</span>
              <span className="text-green-100 ml-2">Char Limit</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border'
              }`}
            >
              {cat === 'all' ? 'All Templates' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Templates List */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="space-y-4">
          {filteredTemplates.map(template => {
            const isExpanded = expandedTemplates.includes(template.id);
            const Icon = template.icon;
            const charStatus = getCharacterStatus(template.characterCount);

            return (
              <div
                key={template.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Template Header */}
                <div
                  onClick={() => toggleTemplate(template.id)}
                  className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${categoryBgColors[template.category]} text-white`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{template.name}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className={`text-xs px-2 py-0.5 rounded-full border ${categoryColors[template.category]}`}>
                          {template.category}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${charStatus.bg} ${charStatus.color}`}>
                          {template.characterCount} chars • {charStatus.label}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(template.id, template.message);
                      }}
                      className="flex items-center gap-2 px-3 py-1.5 text-sm bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors"
                    >
                      {copiedStates[template.id] ? (
                        <>
                          <Check className="w-4 h-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy
                        </>
                      )}
                    </button>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="border-t border-gray-100 p-5 space-y-4">
                    {/* SMS Preview */}
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Message Preview</label>
                      <div className="bg-gray-100 rounded-2xl p-4 max-w-sm">
                        <div className="bg-green-500 text-white rounded-2xl rounded-bl-none p-3 text-sm">
                          {template.message}
                        </div>
                      </div>
                    </div>

                    {/* Character Count Bar */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="text-sm font-medium text-gray-700">Character Count</label>
                        <span className={`text-sm font-medium ${charStatus.color}`}>
                          {template.characterCount} / 160
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${template.characterCount <= 160 ? 'bg-green-500' : template.characterCount <= 306 ? 'bg-amber-500' : 'bg-red-500'}`}
                          style={{ width: `${Math.min((template.characterCount / 160) * 100, 100)}%` }}
                        />
                      </div>
                      {template.characterCount > 160 && (
                        <p className="text-xs text-amber-600 mt-1">
                          ⚠️ This message will be split into {Math.ceil(template.characterCount / 153)} segments
                        </p>
                      )}
                    </div>

                    {/* Variables */}
                    {template.variables.length > 0 && (
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">Variables Used</label>
                        <div className="flex flex-wrap gap-2">
                          {template.variables.map(v => (
                            <span key={v} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm font-mono">
                              {v}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Meta Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Send Timing</label>
                        <div className="text-sm text-gray-600">{template.sendTiming}</div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Audience Segment</label>
                        <div className="text-sm text-gray-600">{template.audienceSegment}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* SMS Best Practices */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">📱 SMS Best Practices</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">Message Length</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Keep under 160 characters</li>
                <li>• Every character counts</li>
                <li>• Use URL shorteners</li>
                <li>• Emojis = 2 characters each</li>
                <li>• Avoid multi-part SMS when possible</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">Timing & Frequency</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Send 10am-8pm only</li>
                <li>• Best days: Tue, Wed, Thu</li>
                <li>• Max 4-6 SMS per month</li>
                <li>• Transactional: send immediately</li>
                <li>• Never send past 9pm</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">Content Tips</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Start with value/hook</li>
                <li>• One clear CTA only</li>
                <li>• Personalize with name</li>
                <li>• Create urgency when relevant</li>
                <li>• Always include opt-out info</li>
              </ul>
            </div>
          </div>

          {/* UAE Compliance */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">🇦🇪 UAE SMS Compliance</h3>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2 text-green-400">✅ Required</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Obtain explicit consent before sending</li>
                    <li>• Provide clear opt-out mechanism</li>
                    <li>• Identify sender (use "Nuqta" as sender ID)</li>
                    <li>• Register with TRA for bulk SMS</li>
                    <li>• Keep consent records for 2+ years</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-red-400">❌ Prohibited</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Sending without consent</li>
                    <li>• Messaging during Ramadan fasting hours</li>
                    <li>• Misleading content or hidden fees</li>
                    <li>• Sending between 9pm-8am</li>
                    <li>• Excessive frequency (spam)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Variables Reference */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Available Variables</h3>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 overflow-x-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="font-mono text-green-300">{"{{name}}"}</span>
                  <p className="text-gray-400 mt-1">First name</p>
                </div>
                <div>
                  <span className="font-mono text-green-300">{"{{points}}"}</span>
                  <p className="text-gray-400 mt-1">Point amount</p>
                </div>
                <div>
                  <span className="font-mono text-green-300">{"{{merchant}}"}</span>
                  <p className="text-gray-400 mt-1">Business name</p>
                </div>
                <div>
                  <span className="font-mono text-green-300">{"{{balance}}"}</span>
                  <p className="text-gray-400 mt-1">Total balance</p>
                </div>
                <div>
                  <span className="font-mono text-green-300">{"{{reward}}"}</span>
                  <p className="text-gray-400 mt-1">Reward name</p>
                </div>
                <div>
                  <span className="font-mono text-green-300">{"{{link}}"}</span>
                  <p className="text-gray-400 mt-1">Short URL</p>
                </div>
                <div>
                  <span className="font-mono text-green-300">{"{{tier}}"}</span>
                  <p className="text-gray-400 mt-1">Member tier</p>
                </div>
                <div>
                  <span className="font-mono text-green-300">{"{{expiry}}"}</span>
                  <p className="text-gray-400 mt-1">Expiry date</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cost Calculator */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">💰 SMS Cost Reference (UAE)</h3>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-green-400">~0.08</p>
                  <p className="text-gray-400 text-sm">AED per SMS</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-400">~80</p>
                  <p className="text-gray-400 text-sm">AED per 1K users</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-400">~800</p>
                  <p className="text-gray-400 text-sm">AED per 10K users</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-400">98%</p>
                  <p className="text-gray-400 text-sm">Open rate (avg)</p>
                </div>
              </div>
              <p className="text-gray-400 text-xs mt-4 text-center">
                * Rates vary by provider. Budget for 4-6 SMS/user/month for active engagement campaigns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
