'use client';

import React, { useState } from 'react';
import {
  MessageCircle, Mic, Smile, AlertTriangle, CheckCircle, XCircle,
  Heart, Zap, Users, Globe, Copy, Check, Target, Star,
  ThumbsUp, ThumbsDown, Volume2, PenTool
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

export default function BrandVoicePage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'principles' | 'tone' | 'dos-donts' | 'examples'>('principles');

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const voicePrinciples = [
    {
      title: 'Rewarding',
      icon: <Star className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500',
      description: 'Every interaction should feel like a reward. We celebrate wins, recognize effort, and make people feel valued.',
      keywords: ['Celebrate', 'Earn', 'Win', 'Reward', 'Bonus', 'Unlock', 'Achievement'],
      example: 'You just unlocked 500 bonus points! That\'s smart shopping.'
    },
    {
      title: 'Friendly',
      icon: <Smile className="w-6 h-6" />,
      color: 'from-pink-500 to-rose-500',
      description: 'We\'re approachable, warm, and helpful. Like a friend who knows all the best deals and wants to share.',
      keywords: ['Hey', 'Great', 'Love', 'Enjoy', 'Happy', 'Welcome', 'Thanks'],
      example: 'Hey! Your favorite coffee shop has double points today. Thought you\'d want to know!'
    },
    {
      title: 'Simple',
      icon: <Target className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      description: 'Clear, concise, and jargon-free. We explain complex things simply and get to the point quickly.',
      keywords: ['Easy', 'Quick', 'Simple', 'Just', 'Done', 'Ready', 'Instant'],
      example: 'Scan. Earn. Redeem. That\'s it.'
    },
    {
      title: 'Local',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-green-500 to-teal-500',
      description: 'We know Dubai. We reference local culture, events, and experiences that resonate with our community.',
      keywords: ['Dubai', 'UAE', 'Local', 'Here', 'Nearby', 'Community', 'Neighborhood'],
      example: 'DSF is here! Earn double points at 200+ Dubai stores this weekend.'
    },
    {
      title: 'Empowering',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-purple-500 to-indigo-500',
      description: 'We help people feel smart and in control. Their choices matter and they\'re winning at everyday life.',
      keywords: ['Smart', 'Savvy', 'Choice', 'Control', 'Your', 'Deserve', 'Power'],
      example: 'Smart move! You saved AED 150 this month. Keep it up, savvy shopper!'
    }
  ];

  const toneGuidelines = [
    {
      context: 'Welcome & Onboarding',
      tone: 'Warm, Excited, Helpful',
      energy: 'High',
      example: 'Welcome to Nuqta! 🎉 You\'re about to turn everyday shopping into real rewards. Let\'s get you started in 30 seconds.',
      tips: ['Use exclamation marks sparingly but meaningfully', 'Focus on what they\'ll gain', 'Keep it action-oriented']
    },
    {
      context: 'Earning Points',
      tone: 'Celebratory, Encouraging',
      energy: 'High',
      example: 'Ka-ching! +250 points just landed in your wallet. You\'re 500 points away from your next reward!',
      tips: ['Celebrate every earn', 'Show progress toward next goal', 'Use sound words (ka-ching, boom)']
    },
    {
      context: 'Promotions & Offers',
      tone: 'Excited, Urgent, Helpful',
      energy: 'Medium-High',
      example: 'Heads up! Tim Hortons has 3x points today only. Your morning coffee just got more rewarding.',
      tips: ['Create FOMO without being pushy', 'Be specific about the value', 'Make it personal when possible']
    },
    {
      context: 'Redemption',
      tone: 'Congratulatory, Satisfying',
      energy: 'High',
      example: 'Woohoo! You just treated yourself to a free coffee using 1,000 points. Well deserved! ☕',
      tips: ['Make them feel smart', 'Reinforce the value', 'Encourage next goal']
    },
    {
      context: 'Error Messages',
      tone: 'Apologetic, Helpful, Calm',
      energy: 'Low-Medium',
      example: 'Hmm, that receipt didn\'t scan properly. No worries—try taking another photo with better lighting, or tap here for help.',
      tips: ['Never blame the user', 'Always offer a solution', 'Keep it calm and reassuring']
    },
    {
      context: 'Re-engagement',
      tone: 'Friendly, Curious, Value-focused',
      energy: 'Medium',
      example: 'We miss you! 👋 Your 2,500 points are waiting, and there are 5 new merchants near you. Come back and explore!',
      tips: ['Don\'t guilt-trip', 'Show what they\'re missing', 'Make return easy']
    },
    {
      context: 'Support',
      tone: 'Understanding, Patient, Solution-oriented',
      energy: 'Low-Medium',
      example: 'We\'re sorry to hear that. Let\'s fix this together. Can you tell us a bit more about what happened?',
      tips: ['Lead with empathy', 'Be patient and thorough', 'Own the problem']
    },
    {
      context: 'Achievement/Milestone',
      tone: 'Celebratory, Proud, Motivating',
      energy: 'Very High',
      example: '🏆 GOLD STATUS UNLOCKED! You\'ve joined the top 10% of Nuqta members. Enjoy 2x points on everything, forever!',
      tips: ['Make it feel special', 'Emphasize exclusivity', 'Preview new benefits']
    }
  ];

  const dosAndDonts = {
    dos: [
      { text: 'Use "you" and "your" to make it personal', example: 'Your points are ready to use!' },
      { text: 'Celebrate small wins, not just big ones', example: 'Nice! Every scan adds up.' },
      { text: 'Be specific with numbers and values', example: 'Save AED 50 with 5,000 points' },
      { text: 'Use active voice', example: 'You earned 200 points' },
      { text: 'Include a clear call-to-action', example: 'Tap to redeem your reward' },
      { text: 'Show progress and next steps', example: '750 more points to Silver tier!' },
      { text: 'Use local references when appropriate', example: 'Perfect for iftar gatherings' },
      { text: 'Keep messages scannable', example: 'Short sentences. Clear value.' },
      { text: 'Add personality with occasional emojis', example: 'Double points today! 🎉' },
      { text: 'Thank users for their loyalty', example: 'Thanks for being a Nuqta member!' }
    ],
    donts: [
      { text: 'Don\'t use corporate jargon', bad: 'Leverage our value proposition', good: 'Get more for less' },
      { text: 'Don\'t be passive aggressive', bad: 'You haven\'t visited in a while...', good: 'We have new rewards waiting for you!' },
      { text: 'Don\'t use ALL CAPS (except sparingly)', bad: 'AMAZING DEAL!!!', good: 'Amazing deal!' },
      { text: 'Don\'t guilt-trip users', bad: 'You\'re missing out!', good: 'Here\'s what\'s new' },
      { text: 'Don\'t make promises we can\'t keep', bad: 'Unlimited rewards!', good: 'Rewards on every purchase' },
      { text: 'Don\'t use complex sentence structures', bad: 'In order to facilitate the redemption of your accumulated points...', good: 'Ready to use your points?' },
      { text: 'Don\'t be robotic', bad: 'Transaction processed successfully', good: 'Done! Points on the way' },
      { text: 'Don\'t overuse exclamation marks', bad: 'Great news!!! You won!!!', good: 'Great news! You won!' },
      { text: 'Don\'t be vague about value', bad: 'Great savings await', good: 'Save up to 30% this weekend' },
      { text: 'Don\'t ignore errors or bad news', bad: 'Error occurred', good: 'Something went wrong. Here\'s how to fix it:' }
    ]
  };

  const messageExamples = [
    {
      category: 'Push Notifications',
      examples: [
        { context: 'Daily Bonus', message: '☀️ Good morning! Your daily bonus is ready. Tap to claim 50 free points.' },
        { context: 'Nearby Offer', message: '📍 You\'re near Carrefour! 2x points for the next 2 hours. Happy shopping!' },
        { context: 'Expiring Points', message: '⏰ Heads up: 500 points expire in 3 days. Use them on something nice!' },
        { context: 'New Merchant', message: '🆕 Shake Shack just joined Nuqta! Celebrate with 3x points this week.' },
        { context: 'Streak Reminder', message: '🔥 Don\'t break your 7-day streak! Scan any receipt today to keep it going.' },
        { context: 'Tier Progress', message: '⭐ You\'re 200 points from Gold! One more purchase and you\'re in.' }
      ]
    },
    {
      category: 'In-App Messages',
      examples: [
        { context: 'First Scan Success', message: 'You did it! 🎉 First scan complete. You just earned 100 welcome points + 150 from your purchase. Keep scanning!' },
        { context: 'Level Up', message: '🏆 Level Up! You\'re now Silver tier.\n\nYour new perks:\n✓ 1.5x points on all purchases\n✓ Early access to offers\n✓ Birthday bonus doubled' },
        { context: 'Redemption Complete', message: 'Enjoy your free coffee! ☕\n\nYou used: 1,000 points\nYou saved: AED 18\nRemaining: 4,500 points\n\nNext goal: Free lunch (2,500 pts)' },
        { context: 'Challenge Complete', message: '💪 Challenge crushed!\n\n"Coffee Week" complete\n+500 bonus points added\n\nNew challenge available!' },
        { context: 'Referral Success', message: '🤝 Your friend Sarah just joined!\n\nYou earned: 500 points\nSarah earned: 500 points\n\nRefer more friends to earn more!' }
      ]
    },
    {
      category: 'Email Subject Lines',
      examples: [
        { context: 'Welcome', message: 'Welcome to Nuqta! Here\'s 500 points to get started 🎁' },
        { context: 'Weekly Summary', message: 'Your week in points: You earned 1,250! 📊' },
        { context: 'Promotion', message: 'This weekend only: 3x points at 50+ stores 🛍️' },
        { context: 'Re-engagement', message: 'We miss you! Your 2,500 points are waiting 👋' },
        { context: 'Milestone', message: 'Congrats! You\'ve saved AED 500 with Nuqta 🎉' },
        { context: 'New Feature', message: 'New: Scan receipts with just one tap 📸' }
      ]
    },
    {
      category: 'Error Messages',
      examples: [
        { context: 'Scan Failed', message: 'Hmm, we couldn\'t read that receipt. Try again with better lighting, or tap "Need Help?" if this keeps happening.' },
        { context: 'Not Enough Points', message: 'You\'re 250 points short for this reward. Earn a bit more and it\'s yours! Or choose a smaller reward below.' },
        { context: 'Offer Expired', message: 'Aw, this offer just ended. But good news—here are 3 similar deals still running:' },
        { context: 'Connection Error', message: 'Lost connection. Don\'t worry, your points are safe! We\'ll sync as soon as you\'re back online.' },
        { context: 'Duplicate Receipt', message: 'Looks like we\'ve already got this receipt. Each receipt can only be scanned once—it keeps things fair for everyone!' }
      ]
    },
    {
      category: 'Social Media',
      examples: [
        { context: 'Announcement', message: '🚨 BIG NEWS: McDonald\'s is now on Nuqta! Earn points on every Happy Meal, McFlurry, and Big Mac. Download and start earning today!' },
        { context: 'Engagement', message: 'What\'s your go-to Nuqta reward? 👇\n\nA) Free coffee ☕\nB) Restaurant voucher 🍽️\nC) Shopping credit 🛍️\nD) Experience tickets 🎫' },
        { context: 'User Story', message: '📸 Member spotlight: @SarahInDubai just hit PLATINUM status after 6 months! She\'s earned AED 2,000 in rewards. Could be you next!' },
        { context: 'Seasonal', message: 'Ramadan Kareem! 🌙 This month, earn 2x points on all iftar & suhoor orders. Plus, we\'re donating 10% of points earned to local food banks.' },
        { context: 'Tip', message: '💡 Pro tip: Stack your points! Use a Nuqta partner card + scan your receipt = double the rewards. Smart shopping 101 📚' }
      ]
    }
  ];

  const arabicGuidelines = [
    {
      principle: 'Use Gulf Arabic (not MSA) for casual content',
      example: 'مبروك! كسبت ٥٠٠ نقطة',
      context: 'Casual, celebratory'
    },
    {
      principle: 'Use MSA for formal communications',
      example: 'نشكرك على ثقتك بنا',
      context: 'Customer service, legal'
    },
    {
      principle: 'Include English terms users know',
      example: 'Points باقية عندك ٢,٥٠٠',
      context: 'Where English terms are common'
    },
    {
      principle: 'Match energy level in translation',
      example: 'ييي! وصلت Gold! 🎉',
      context: 'Celebrations, achievements'
    },
    {
      principle: 'Respect cultural sensitivities',
      example: 'رمضان كريم 🌙',
      context: 'Religious/cultural occasions'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <MessageCircle className="w-10 h-10" />
            <h1 className="text-4xl font-bold">Brand Voice Guide</h1>
          </div>
          <p className="text-xl text-pink-100 max-w-3xl">
            How Nuqta speaks: Our voice principles, tone guidelines, and messaging examples for consistent, engaging communication.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'principles', label: 'Voice Principles', icon: <Heart className="w-4 h-4" /> },
            { id: 'tone', label: 'Tone Guidelines', icon: <Volume2 className="w-4 h-4" /> },
            { id: 'dos-donts', label: 'Do\'s & Don\'ts', icon: <ThumbsUp className="w-4 h-4" /> },
            { id: 'examples', label: 'Message Examples', icon: <PenTool className="w-4 h-4" /> }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-pink-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Voice Principles Tab */}
        {activeTab === 'principles' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {voicePrinciples.map((principle, idx) => (
                <div key={idx} className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
                  <div className={`bg-gradient-to-r ${principle.color} p-6`}>
                    <div className="flex items-center gap-3 text-white">
                      {principle.icon}
                      <h3 className="text-xl font-bold">{principle.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-300 mb-4">{principle.description}</p>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-slate-400 mb-2">Key Words</p>
                      <div className="flex flex-wrap gap-2">
                        {principle.keywords.map((word, wIdx) => (
                          <span key={wIdx} className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-sm">
                            {word}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <p className="text-sm font-medium text-slate-400 mb-2">Example</p>
                      <p className="text-white italic">"{principle.example}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Brand Personality */}
            <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Brand Personality</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">If Nuqta Were a Person...</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      A savvy local friend who knows all the best deals
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      Enthusiastic but not overwhelming
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      Celebrates your wins like they're their own
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      Makes complicated things simple
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      Respects your time and attention
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Nuqta is NOT...</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-300">
                      <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      A corporate robot sending generic messages
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      An aggressive salesperson pushing deals
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      A complicated financial service
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      A guilt-tripper when users are inactive
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      Too formal or too casual (we're balanced)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tone Guidelines Tab */}
        {activeTab === 'tone' && (
          <div className="space-y-6">
            {toneGuidelines.map((guideline, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
                <div className="p-6 border-b border-slate-700">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-xl font-bold text-white">{guideline.context}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      guideline.energy === 'Very High' ? 'bg-red-500/20 text-red-300' :
                      guideline.energy === 'High' ? 'bg-orange-500/20 text-orange-300' :
                      guideline.energy === 'Medium-High' ? 'bg-yellow-500/20 text-yellow-300' :
                      guideline.energy === 'Medium' ? 'bg-blue-500/20 text-blue-300' :
                      'bg-slate-500/20 text-slate-300'
                    }`}>
                      Energy: {guideline.energy}
                    </span>
                    <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">
                      {guideline.tone}
                    </span>
                  </div>
                </div>
                <div className="p-6 grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-medium text-slate-400 mb-3">Example Message</p>
                    <div className="bg-slate-700/50 rounded-lg p-4 relative">
                      <p className="text-white">{guideline.example}</p>
                      <button
                        onClick={() => copyToClipboard(guideline.example, `tone-${idx}`)}
                        className="absolute top-2 right-2 p-2 text-slate-400 hover:text-white transition-colors"
                      >
                        {copiedId === `tone-${idx}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-400 mb-3">Writing Tips</p>
                    <ul className="space-y-2">
                      {guideline.tips.map((tip, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2 text-slate-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Do's & Don'ts Tab */}
        {activeTab === 'dos-donts' && (
          <div className="grid md:grid-cols-2 gap-8">
            {/* Do's */}
            <div className="bg-slate-800/50 rounded-xl border border-green-500/30 overflow-hidden">
              <div className="bg-green-500/20 p-6 border-b border-green-500/30">
                <h2 className="text-2xl font-bold text-green-400 flex items-center gap-2">
                  <ThumbsUp className="w-6 h-6" />
                  Do's
                </h2>
              </div>
              <div className="p-6 space-y-4">
                {dosAndDonts.dos.map((item, idx) => (
                  <div key={idx} className="bg-slate-700/50 rounded-lg p-4">
                    <p className="text-white font-medium mb-2">{item.text}</p>
                    <div className="bg-green-500/10 border border-green-500/20 rounded p-3">
                      <p className="text-green-300 text-sm italic">"{item.example}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Don'ts */}
            <div className="bg-slate-800/50 rounded-xl border border-red-500/30 overflow-hidden">
              <div className="bg-red-500/20 p-6 border-b border-red-500/30">
                <h2 className="text-2xl font-bold text-red-400 flex items-center gap-2">
                  <ThumbsDown className="w-6 h-6" />
                  Don'ts
                </h2>
              </div>
              <div className="p-6 space-y-4">
                {dosAndDonts.donts.map((item, idx) => (
                  <div key={idx} className="bg-slate-700/50 rounded-lg p-4">
                    <p className="text-white font-medium mb-2">{item.text}</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-red-500/10 border border-red-500/20 rounded p-2">
                        <p className="text-xs text-red-400 mb-1">❌ Don't</p>
                        <p className="text-red-300 text-sm italic">"{item.bad}"</p>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/20 rounded p-2">
                        <p className="text-xs text-green-400 mb-1">✓ Do</p>
                        <p className="text-green-300 text-sm italic">"{item.good}"</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Message Examples Tab */}
        {activeTab === 'examples' && (
          <div className="space-y-8">
            {messageExamples.map((category, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
                <div className="bg-gradient-to-r from-pink-600/20 to-rose-600/20 p-6 border-b border-slate-700">
                  <h2 className="text-xl font-bold text-white">{category.category}</h2>
                </div>
                <div className="p-6 grid md:grid-cols-2 gap-4">
                  {category.examples.map((example, eIdx) => (
                    <div key={eIdx} className="bg-slate-700/50 rounded-lg p-4 relative group">
                      <p className="text-sm font-medium text-pink-400 mb-2">{example.context}</p>
                      <p className="text-white text-sm whitespace-pre-line">{example.message}</p>
                      <button
                        onClick={() => copyToClipboard(example.message, `example-${idx}-${eIdx}`)}
                        className="absolute top-2 right-2 p-2 text-slate-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                      >
                        {copiedId === `example-${idx}-${eIdx}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Arabic Guidelines */}
            <div className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
              <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 p-6 border-b border-slate-700">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Arabic Language Guidelines
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {arabicGuidelines.map((guideline, idx) => (
                    <div key={idx} className="bg-slate-700/50 rounded-lg p-4">
                      <p className="text-white font-medium mb-2">{guideline.principle}</p>
                      <div className="flex items-center gap-4">
                        <div className="bg-green-500/10 border border-green-500/20 rounded px-3 py-2">
                          <p className="text-green-300 text-lg" dir="rtl">{guideline.example}</p>
                        </div>
                        <span className="text-slate-400 text-sm">({guideline.context})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <GlobalFooter />
    </div>
  );
}
