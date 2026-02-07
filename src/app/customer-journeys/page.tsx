'use client';

import React, { useState } from 'react';
import {
  MapPin, User, ShoppingBag, Gift, Star, ArrowRight, Clock, MessageCircle,
  Smartphone, Mail, Bell, Target, Heart, TrendingUp, CheckCircle, AlertCircle,
  Zap, Coffee, Car, Plane, Home, Briefcase, GraduationCap, Users
} from 'lucide-react';

interface JourneyStage {
  name: string;
  description: string;
  touchpoints: string[];
  userActions: string[];
  emotions: string;
  painPoints: string[];
  opportunities: string[];
  kpis: string[];
}

interface CustomerJourney {
  id: string;
  persona: string;
  icon: React.ReactNode;
  description: string;
  demographics: string;
  goals: string[];
  stages: JourneyStage[];
  color: string;
}

export default function CustomerJourneysPage() {
  const [selectedJourney, setSelectedJourney] = useState<string>('new-user');
  const [expandedStage, setExpandedStage] = useState<number | null>(null);

  const journeys: CustomerJourney[] = [
    {
      id: 'new-user',
      persona: 'New User Onboarding',
      icon: <User className="w-6 h-6" />,
      description: 'First-time user discovering and signing up for Nuqta',
      demographics: 'Age 25-40, smartphone user, shops 2-3x/week in Dubai',
      goals: ['Find rewards app', 'Understand value proposition', 'Sign up easily', 'Earn first points'],
      color: 'from-blue-500 to-cyan-500',
      stages: [
        {
          name: 'Awareness',
          description: 'User discovers Nuqta through various channels',
          touchpoints: ['Social media ads', 'Friend referral', 'Store signage', 'Google search', 'Influencer content'],
          userActions: ['Sees ad/content', 'Clicks to learn more', 'Visits website/app store'],
          emotions: 'Curious, Skeptical',
          painPoints: ['Too many rewards apps', 'Unclear value proposition', 'Privacy concerns'],
          opportunities: ['Clear USP messaging', 'Social proof', 'Instant reward preview'],
          kpis: ['Ad impressions', 'CTR', 'App store visits']
        },
        {
          name: 'Consideration',
          description: 'User evaluates Nuqta against alternatives',
          touchpoints: ['App store listing', 'Website', 'Reviews', 'FAQ page'],
          userActions: ['Reads reviews', 'Compares features', 'Checks merchant list'],
          emotions: 'Evaluating, Comparing',
          painPoints: ['Complex sign-up process', 'Limited merchant info', 'Unclear earning rates'],
          opportunities: ['Merchant directory', 'Earning calculator', 'Video explainers'],
          kpis: ['Time on page', 'FAQ views', 'App downloads']
        },
        {
          name: 'Registration',
          description: 'User creates their Nuqta account',
          touchpoints: ['App onboarding', 'SMS verification', 'Profile setup'],
          userActions: ['Downloads app', 'Enters phone number', 'Verifies OTP', 'Completes profile'],
          emotions: 'Hopeful, Impatient',
          painPoints: ['Long forms', 'Too many permissions', 'Slow verification'],
          opportunities: ['Social login', 'Progressive profiling', 'Instant welcome bonus'],
          kpis: ['Download to registration rate', 'Time to complete', 'Drop-off points']
        },
        {
          name: 'First Transaction',
          description: 'User earns their first Nuqta points',
          touchpoints: ['Store visit', 'Receipt scan', 'Push notification', 'Points confirmation'],
          userActions: ['Visits merchant', 'Makes purchase', 'Scans receipt', 'Views points'],
          emotions: 'Excited, Validated',
          painPoints: ['Confusing scan process', 'Delayed points', 'Receipt rejected'],
          opportunities: ['Gamified first scan', 'Instant gratification', 'Bonus points'],
          kpis: ['Time to first transaction', 'First scan success rate', 'Points earned']
        },
        {
          name: 'Habit Formation',
          description: 'User develops regular Nuqta usage habits',
          touchpoints: ['Daily app opens', 'Regular transactions', 'Push notifications', 'Email updates'],
          userActions: ['Checks points daily', 'Plans purchases around rewards', 'Engages with challenges'],
          emotions: 'Engaged, Motivated',
          painPoints: ['Notification fatigue', 'Slow point accumulation', 'Limited redemption options'],
          opportunities: ['Personalized challenges', 'Streak rewards', 'Tier progression'],
          kpis: ['DAU/MAU ratio', 'Transactions per week', '30-day retention']
        }
      ]
    },
    {
      id: 'power-user',
      persona: 'Power User Journey',
      icon: <Star className="w-6 h-6" />,
      description: 'Highly engaged user maximizing their rewards',
      demographics: 'Age 30-45, high disposable income, brand loyal, 10+ transactions/week',
      goals: ['Maximize point earning', 'Reach highest tier', 'Get exclusive rewards', 'Share with friends'],
      color: 'from-purple-500 to-pink-500',
      stages: [
        {
          name: 'Optimization',
          description: 'User actively seeks to maximize earnings',
          touchpoints: ['Merchant map', 'Earning multipliers', 'Special offers', 'Partner notifications'],
          userActions: ['Checks daily bonuses', 'Plans shopping routes', 'Stacks offers', 'Times purchases'],
          emotions: 'Strategic, Satisfied',
          painPoints: ['Missing multipliers', 'Expired offers', 'Complex stacking rules'],
          opportunities: ['AI recommendations', 'Offer calendar', 'Auto-apply bonuses'],
          kpis: ['Points per transaction', 'Multiplier usage', 'Offer redemption rate']
        },
        {
          name: 'Tier Climbing',
          description: 'User works toward next tier status',
          touchpoints: ['Tier progress bar', 'Milestone notifications', 'Tier benefits page', 'VIP previews'],
          userActions: ['Tracks progress', 'Increases spending', 'Completes challenges', 'Maintains streaks'],
          emotions: 'Ambitious, Competitive',
          painPoints: ['Slow progress', 'Unclear requirements', 'Losing tier status'],
          opportunities: ['Progress boosters', 'Tier retention grace period', 'Exclusive challenges'],
          kpis: ['Tier upgrade rate', 'Time to tier', 'Tier retention rate']
        },
        {
          name: 'VIP Experience',
          description: 'User enjoys premium tier benefits',
          touchpoints: ['VIP support', 'Exclusive events', 'Partner perks', 'Early access'],
          userActions: ['Attends events', 'Uses VIP benefits', 'Provides feedback', 'Showcases status'],
          emotions: 'Valued, Exclusive',
          painPoints: ['Benefits not worth effort', 'Crowded events', 'Poor VIP support'],
          opportunities: ['Personalized concierge', 'Money-can\'t-buy experiences', 'Status badges'],
          kpis: ['VIP benefit usage', 'NPS score', 'Churn rate']
        },
        {
          name: 'Advocacy',
          description: 'User becomes brand ambassador',
          touchpoints: ['Referral program', 'Social sharing', 'Reviews', 'User community'],
          userActions: ['Refers friends', 'Shares achievements', 'Writes reviews', 'Mentors new users'],
          emotions: 'Proud, Influential',
          painPoints: ['Low referral rewards', 'Sharing friction', 'No recognition'],
          opportunities: ['Ambassador program', 'Leaderboards', 'Public recognition'],
          kpis: ['Referrals per user', 'Social shares', 'Review submissions']
        }
      ]
    },
    {
      id: 'family-shopper',
      persona: 'Family Shopper Journey',
      icon: <Users className="w-6 h-6" />,
      description: 'Parent managing household rewards and family activities',
      demographics: 'Age 30-45, married with children, suburban, high grocery/F&B spend',
      goals: ['Save on family expenses', 'Plan family activities', 'Teach kids about rewards', 'Get family deals'],
      color: 'from-green-500 to-teal-500',
      stages: [
        {
          name: 'Family Setup',
          description: 'Setting up family account and linking members',
          touchpoints: ['Family account creation', 'Member invites', 'Spending limits', 'Kid profiles'],
          userActions: ['Creates family group', 'Invites spouse', 'Sets up kid accounts', 'Configures limits'],
          emotions: 'Organized, Protective',
          painPoints: ['Complex setup', 'Privacy concerns', 'Limited kid features'],
          opportunities: ['One-click family setup', 'Age-appropriate interfaces', 'Parental controls'],
          kpis: ['Family account adoption', 'Members per family', 'Setup completion rate']
        },
        {
          name: 'Coordinated Earning',
          description: 'Family members earn points together',
          touchpoints: ['Shared wallet', 'Family challenges', 'Combined progress', 'Split receipts'],
          userActions: ['Assigns shopping tasks', 'Tracks family spending', 'Combines points', 'Monitors kids'],
          emotions: 'Collaborative, Responsible',
          painPoints: ['Attribution confusion', 'Uneven contribution', 'No family dashboard'],
          opportunities: ['Family leaderboard', 'Contribution tracking', 'Joint goals'],
          kpis: ['Family earning rate', 'Member participation', 'Combined transactions']
        },
        {
          name: 'Family Rewards',
          description: 'Redeeming points for family experiences',
          touchpoints: ['Family reward catalog', 'Experience booking', 'Kid rewards', 'Family events'],
          userActions: ['Browses family options', 'Plans outings', 'Lets kids choose', 'Books experiences'],
          emotions: 'Excited, Generous',
          painPoints: ['Limited family options', 'Complex booking', 'Availability issues'],
          opportunities: ['Family bundles', 'Kid reward section', 'Priority booking'],
          kpis: ['Family redemptions', 'Experience bookings', 'Kid engagement']
        },
        {
          name: 'Family Traditions',
          description: 'Nuqta becomes part of family routines',
          touchpoints: ['Weekly family challenges', 'Monthly family rewards', 'Seasonal campaigns', 'Milestone celebrations'],
          userActions: ['Weekly family shopping', 'Monthly reward planning', 'Celebrates achievements', 'Shares with extended family'],
          emotions: 'Bonded, Tradition-building',
          painPoints: ['Routine fatigue', 'Changing interests', 'Aging out of features'],
          opportunities: ['Evolving family features', 'Milestone rewards', 'Multi-generational support'],
          kpis: ['Long-term retention', 'Family lifetime value', 'Multi-year engagement']
        }
      ]
    },
    {
      id: 'tourist',
      persona: 'Tourist Visitor Journey',
      icon: <Plane className="w-6 h-6" />,
      description: 'Short-term visitor experiencing Dubai and earning rewards',
      demographics: 'Age 25-55, international tourist, 3-14 day stay, high discretionary spend',
      goals: ['Explore Dubai', 'Get tourist deals', 'Quick rewards', 'Memorable experiences'],
      color: 'from-orange-500 to-red-500',
      stages: [
        {
          name: 'Pre-Arrival',
          description: 'Tourist discovers Nuqta before visiting Dubai',
          touchpoints: ['Travel blogs', 'Dubai tourism site', 'Airport ads', 'Hotel partnerships'],
          userActions: ['Researches Dubai deals', 'Downloads app pre-trip', 'Browses experiences', 'Plans itinerary'],
          emotions: 'Anticipating, Planning',
          painPoints: ['App not available in country', 'Confusing for non-residents', 'No pre-booking'],
          opportunities: ['Tourist mode', 'Pre-arrival bonuses', 'Itinerary integration'],
          kpis: ['Pre-arrival downloads', 'Tourist registrations', 'Pre-booking rate']
        },
        {
          name: 'Arrival Experience',
          description: 'Tourist arrives and activates Nuqta',
          touchpoints: ['Airport welcome', 'Hotel check-in', 'First transaction', 'Welcome bonus'],
          userActions: ['Arrives at DXB', 'Activates tourist mode', 'Gets welcome bonus', 'First purchase'],
          emotions: 'Excited, Overwhelmed',
          painPoints: ['Complex activation', 'Language barriers', 'Roaming issues'],
          opportunities: ['Airport kiosk', 'Instant activation', 'Multi-language support'],
          kpis: ['Activation rate', 'Time to first transaction', 'Welcome bonus redemption']
        },
        {
          name: 'Exploration',
          description: 'Tourist explores Dubai while earning rewards',
          touchpoints: ['Tourist hotspot notifications', 'Experience offers', 'Restaurant deals', 'Shopping bonuses'],
          userActions: ['Visits attractions', 'Dines at restaurants', 'Shops at malls', 'Books experiences'],
          emotions: 'Adventurous, Value-seeking',
          painPoints: ['Missing tourist spots', 'Timing issues', 'Language barriers'],
          opportunities: ['GPS-triggered offers', 'Tourist bundles', 'Concierge chat'],
          kpis: ['Transactions per day', 'Categories explored', 'Points earned']
        },
        {
          name: 'Departure Rewards',
          description: 'Tourist maximizes value before leaving',
          touchpoints: ['Last-day offers', 'Airport redemption', 'Duty-free deals', 'Return visit incentive'],
          userActions: ['Final shopping', 'Airport redemption', 'Redeems points', 'Plans return'],
          emotions: 'Rushed, Satisfied',
          painPoints: ['Insufficient points', 'Limited airport options', 'Account dormancy'],
          opportunities: ['Guaranteed redemption', 'Airport partners', 'Points never expire'],
          kpis: ['Departure redemption rate', 'Return intent', 'Points balance at departure']
        },
        {
          name: 'Return Visitor',
          description: 'Tourist returns to Dubai with existing account',
          touchpoints: ['Welcome back notification', 'Loyalty bonus', 'Preference memory', 'VIP status'],
          userActions: ['Reactivates account', 'Claims return bonus', 'Revisits favorites', 'Explores new'],
          emotions: 'Familiar, Valued',
          painPoints: ['Forgotten account', 'Expired benefits', 'Changed merchants'],
          opportunities: ['Persistent preferences', 'Return bonuses', 'VIP fast-track'],
          kpis: ['Return visitor rate', 'Repeat transactions', 'Lifetime value']
        }
      ]
    },
    {
      id: 'corporate',
      persona: 'Corporate Employee Journey',
      icon: <Briefcase className="w-6 h-6" />,
      description: 'Employee using Nuqta through corporate partnership',
      demographics: 'Age 25-50, office worker, corporate card user, lunch/coffee buyer',
      goals: ['Expense optimization', 'Lunch rewards', 'Team activities', 'Personal benefits'],
      color: 'from-indigo-500 to-purple-500',
      stages: [
        {
          name: 'Corporate Onboarding',
          description: 'Employee joins through company program',
          touchpoints: ['HR announcement', 'Company portal', 'Desk drop', 'Team intro'],
          userActions: ['Receives invite', 'Links corporate email', 'Connects card', 'Joins team'],
          emotions: 'Interested, Passive',
          painPoints: ['Mandatory feeling', 'Privacy with employer', 'Extra app fatigue'],
          opportunities: ['Instant enrollment', 'Privacy assurance', 'Welcome bonus'],
          kpis: ['Enrollment rate', 'Time to activate', 'Card linking rate']
        },
        {
          name: 'Daily Usage',
          description: 'Employee uses Nuqta for daily expenses',
          touchpoints: ['Coffee orders', 'Lunch purchases', 'Meeting catering', 'Office supplies'],
          userActions: ['Morning coffee', 'Team lunch', 'Meeting orders', 'Snack runs'],
          emotions: 'Habitual, Appreciative',
          painPoints: ['Forgetting to scan', 'Team split bills', 'Expense reporting'],
          opportunities: ['Auto-capture', 'Team ordering', 'Expense integration'],
          kpis: ['Daily transactions', 'Average order value', 'Participation rate']
        },
        {
          name: 'Team Engagement',
          description: 'Teams compete and collaborate on rewards',
          touchpoints: ['Team challenges', 'Department leaderboards', 'Team rewards', 'Company events'],
          userActions: ['Joins team challenges', 'Checks leaderboard', 'Organizes team lunch', 'Votes on rewards'],
          emotions: 'Competitive, Social',
          painPoints: ['Low team participation', 'Unfair advantages', 'Irrelevant rewards'],
          opportunities: ['Team bonding events', 'Fair handicapping', 'Team choice rewards'],
          kpis: ['Team participation', 'Challenge completion', 'Social engagement']
        },
        {
          name: 'Personal Benefits',
          description: 'Employee uses earned rewards personally',
          touchpoints: ['Personal redemptions', 'Weekend use', 'Family sharing', 'Exclusive offers'],
          userActions: ['Redeems for personal use', 'Uses on weekends', 'Shares with family', 'Accesses corporate perks'],
          emotions: 'Rewarded, Grateful',
          painPoints: ['Work/personal separation', 'Limited personal options', 'Taxability concerns'],
          opportunities: ['Personal wallet', 'Family extension', 'Tax guidance'],
          kpis: ['Personal redemption rate', 'Weekend usage', 'Work-life balance score']
        }
      ]
    },
    {
      id: 'student',
      persona: 'University Student Journey',
      icon: <GraduationCap className="w-6 h-6" />,
      description: 'Student managing limited budget with rewards',
      demographics: 'Age 18-25, university student, budget-conscious, social, mobile-first',
      goals: ['Stretch budget', 'Social rewards', 'Campus deals', 'Build credit history'],
      color: 'from-pink-500 to-rose-500',
      stages: [
        {
          name: 'Campus Discovery',
          description: 'Student discovers Nuqta on campus',
          touchpoints: ['Campus event', 'Student ambassador', 'University partnership', 'Social media'],
          userActions: ['Attends campus event', 'Signs up for bonus', 'Verifies student status', 'Joins student tier'],
          emotions: 'Curious, Skeptical',
          painPoints: ['Another app', 'Limited spending', 'Verification hassle'],
          opportunities: ['Instant student verification', 'No minimum spend', 'Campus exclusives'],
          kpis: ['Campus sign-ups', 'Verification rate', 'First-week activation']
        },
        {
          name: 'Budget Maximizing',
          description: 'Student uses Nuqta to stretch limited funds',
          touchpoints: ['Student discounts', 'Campus offers', 'Budget tracker', 'Deal alerts'],
          userActions: ['Hunts deals', 'Times purchases', 'Tracks spending', 'Shares finds'],
          emotions: 'Resourceful, Thrifty',
          painPoints: ['Insufficient deals', 'Minimum spends', 'Premium-only rewards'],
          opportunities: ['Student-priced rewards', 'No minimums', 'Budget tools'],
          kpis: ['Savings achieved', 'Deal usage', 'Budget adherence']
        },
        {
          name: 'Social Earning',
          description: 'Student earns through social activities',
          touchpoints: ['Group orders', 'Event check-ins', 'Social challenges', 'Referral program'],
          userActions: ['Group coffee runs', 'Event attendance', 'Social sharing', 'Friend referrals'],
          emotions: 'Social, Connected',
          painPoints: ['Split payment hassle', 'Missing group credit', 'Low referral value'],
          opportunities: ['Group earning', 'Event bonuses', 'Referral tiers'],
          kpis: ['Social transactions', 'Referrals made', 'Group order frequency']
        },
        {
          name: 'Graduation Transition',
          description: 'Student graduates and transitions account',
          touchpoints: ['Graduation bonus', 'Account transition', 'Alumni benefits', 'Career perks'],
          userActions: ['Updates status', 'Claims grad bonus', 'Maintains account', 'Uses alumni perks'],
          emotions: 'Nostalgic, Forward-looking',
          painPoints: ['Losing student benefits', 'Starting over', 'Different needs'],
          opportunities: ['Smooth transition', 'Loyalty recognition', 'Career-stage benefits'],
          kpis: ['Graduation retention', 'Account transition rate', 'Post-grad engagement']
        }
      ]
    }
  ];

  const selectedJourneyData = journeys.find(j => j.id === selectedJourney)!;

  const emotionColors: Record<string, string> = {
    'Curious': 'bg-blue-100 text-blue-700',
    'Skeptical': 'bg-yellow-100 text-yellow-700',
    'Evaluating': 'bg-purple-100 text-purple-700',
    'Comparing': 'bg-indigo-100 text-indigo-700',
    'Hopeful': 'bg-green-100 text-green-700',
    'Impatient': 'bg-orange-100 text-orange-700',
    'Excited': 'bg-pink-100 text-pink-700',
    'Validated': 'bg-emerald-100 text-emerald-700',
    'Engaged': 'bg-cyan-100 text-cyan-700',
    'Motivated': 'bg-teal-100 text-teal-700',
    'Strategic': 'bg-violet-100 text-violet-700',
    'Satisfied': 'bg-lime-100 text-lime-700',
    'Ambitious': 'bg-rose-100 text-rose-700',
    'Competitive': 'bg-red-100 text-red-700',
    'Valued': 'bg-amber-100 text-amber-700',
    'Exclusive': 'bg-fuchsia-100 text-fuchsia-700',
    'Proud': 'bg-sky-100 text-sky-700',
    'Influential': 'bg-slate-100 text-slate-700'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-10 h-10" />
            <h1 className="text-4xl font-bold">Customer Journey Maps</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">
            Detailed journey maps for different user personas, showing touchpoints, emotions, pain points, and opportunities at each stage.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Persona Selector */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {journeys.map(journey => (
            <button
              key={journey.id}
              onClick={() => {
                setSelectedJourney(journey.id);
                setExpandedStage(null);
              }}
              className={`p-4 rounded-xl border-2 transition-all ${
                selectedJourney === journey.id
                  ? 'border-white bg-white/10'
                  : 'border-slate-700 bg-slate-800/50 hover:border-slate-500'
              }`}
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${journey.color} flex items-center justify-center text-white mx-auto mb-3`}>
                {journey.icon}
              </div>
              <p className="text-white font-medium text-sm text-center">{journey.persona}</p>
            </button>
          ))}
        </div>

        {/* Selected Journey Details */}
        <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-8 mb-8">
          <div className="flex items-start gap-6 mb-8">
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${selectedJourneyData.color} flex items-center justify-center text-white flex-shrink-0`}>
              {selectedJourneyData.icon}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">{selectedJourneyData.persona}</h2>
              <p className="text-slate-300 text-lg mb-4">{selectedJourneyData.description}</p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-slate-700/50 px-4 py-2 rounded-lg">
                  <p className="text-slate-400 text-xs">Demographics</p>
                  <p className="text-white text-sm">{selectedJourneyData.demographics}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Goals */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-cyan-400" />
              User Goals
            </h3>
            <div className="flex flex-wrap gap-3">
              {selectedJourneyData.goals.map((goal, idx) => (
                <span key={idx} className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm">
                  {goal}
                </span>
              ))}
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="relative">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <ArrowRight className="w-5 h-5 text-cyan-400" />
              Journey Stages
            </h3>

            {/* Timeline connector */}
            <div className="absolute left-8 top-20 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 hidden lg:block"></div>

            <div className="space-y-4">
              {selectedJourneyData.stages.map((stage, idx) => (
                <div key={idx} className="relative">
                  {/* Stage number indicator */}
                  <div className={`absolute left-4 w-8 h-8 rounded-full bg-gradient-to-r ${selectedJourneyData.color} flex items-center justify-center text-white font-bold text-sm z-10 hidden lg:flex`}>
                    {idx + 1}
                  </div>

                  <div
                    className={`lg:ml-16 bg-slate-700/50 rounded-xl border transition-all cursor-pointer ${
                      expandedStage === idx ? 'border-cyan-500' : 'border-slate-600 hover:border-slate-500'
                    }`}
                    onClick={() => setExpandedStage(expandedStage === idx ? null : idx)}
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-semibold text-white">{stage.name}</h4>
                        <ArrowRight className={`w-5 h-5 text-slate-400 transition-transform ${expandedStage === idx ? 'rotate-90' : ''}`} />
                      </div>
                      <p className="text-slate-300">{stage.description}</p>

                      {/* Emotions */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {stage.emotions.split(', ').map((emotion, eIdx) => (
                          <span
                            key={eIdx}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${emotionColors[emotion] || 'bg-slate-600 text-slate-200'}`}
                          >
                            {emotion}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {expandedStage === idx && (
                      <div className="border-t border-slate-600 p-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Touchpoints */}
                        <div>
                          <h5 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                            <Smartphone className="w-4 h-4" />
                            Touchpoints
                          </h5>
                          <ul className="space-y-2">
                            {stage.touchpoints.map((tp, tIdx) => (
                              <li key={tIdx} className="text-slate-300 text-sm flex items-start gap-2">
                                <span className="text-cyan-500 mt-1">•</span>
                                {tp}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* User Actions */}
                        <div>
                          <h5 className="text-sm font-semibold text-green-400 mb-3 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" />
                            User Actions
                          </h5>
                          <ul className="space-y-2">
                            {stage.userActions.map((action, aIdx) => (
                              <li key={aIdx} className="text-slate-300 text-sm flex items-start gap-2">
                                <span className="text-green-500 mt-1">•</span>
                                {action}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Pain Points */}
                        <div>
                          <h5 className="text-sm font-semibold text-red-400 mb-3 flex items-center gap-2">
                            <AlertCircle className="w-4 h-4" />
                            Pain Points
                          </h5>
                          <ul className="space-y-2">
                            {stage.painPoints.map((pain, pIdx) => (
                              <li key={pIdx} className="text-slate-300 text-sm flex items-start gap-2">
                                <span className="text-red-500 mt-1">•</span>
                                {pain}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Opportunities */}
                        <div>
                          <h5 className="text-sm font-semibold text-yellow-400 mb-3 flex items-center gap-2">
                            <Zap className="w-4 h-4" />
                            Opportunities
                          </h5>
                          <ul className="space-y-2">
                            {stage.opportunities.map((opp, oIdx) => (
                              <li key={oIdx} className="text-slate-300 text-sm flex items-start gap-2">
                                <span className="text-yellow-500 mt-1">•</span>
                                {opp}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* KPIs */}
                        <div className="md:col-span-2 lg:col-span-4">
                          <h5 className="text-sm font-semibold text-purple-400 mb-3 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" />
                            Key Metrics to Track
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {stage.kpis.map((kpi, kIdx) => (
                              <span key={kIdx} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                                {kpi}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Journey Optimization Framework */}
        <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Journey Optimization Framework</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-6 border border-blue-500/30">
              <h3 className="text-lg font-semibold text-white mb-4">Reduce Friction</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  Simplify registration to under 30 seconds
                </li>
                <li className="flex items-start gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  Enable one-tap receipt scanning
                </li>
                <li className="flex items-start gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  Auto-apply all eligible bonuses
                </li>
                <li className="flex items-start gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  Instant redemption at checkout
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-lg font-semibold text-white mb-4">Increase Engagement</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                  Personalized challenges based on behavior
                </li>
                <li className="flex items-start gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                  Streak rewards to build habits
                </li>
                <li className="flex items-start gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                  Social features and leaderboards
                </li>
                <li className="flex items-start gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                  Surprise & delight moments
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-xl p-6 border border-green-500/30">
              <h3 className="text-lg font-semibold text-white mb-4">Drive Advocacy</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  Generous referral rewards both ways
                </li>
                <li className="flex items-start gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  Easy social sharing with status
                </li>
                <li className="flex items-start gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  Ambassador program for power users
                </li>
                <li className="flex items-start gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  Recognition for contributions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
