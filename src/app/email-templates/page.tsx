'use client';

import React, { useState } from 'react';
import {
  Mail,
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
  Calendar,
  Zap,
  Award,
  Target,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

interface EmailTemplate {
  id: string;
  name: string;
  category: string;
  subject: string;
  preheader: string;
  body: string;
  cta: string;
  ctaLink: string;
  sendTiming: string;
  audienceSegment: string;
  icon: React.ElementType;
}

const emailTemplates: EmailTemplate[] = [
  // WELCOME SERIES
  {
    id: 'welcome-1',
    name: 'Welcome Email (Day 0)',
    category: 'Welcome Series',
    subject: 'Welcome to Nuqta! Your rewards journey starts now 🎉',
    preheader: 'Earn points at 500+ Dubai locations',
    body: `Hi {{first_name}},

Welcome to the Nuqta family! 🎉

You've just joined Dubai's smartest rewards program. Here's what makes Nuqta special:

✨ **Earn Everywhere**
Get points at 500+ cafes, restaurants, salons & gyms across Dubai.

💰 **Real Rewards**
Turn your everyday spending into cashback, discounts, and exclusive perks.

🎯 **Personalized For You**
The more you use Nuqta, the better your rewards get.

**Your First Steps:**
1. Complete your profile → Earn 50 bonus points
2. Make your first purchase → Earn 2x points
3. Refer a friend → You both get 100 points

Ready to start earning?

See you out there,
The Nuqta Team

P.S. Your first purchase is worth DOUBLE points for the next 7 days!`,
    cta: 'Find Merchants Near You',
    ctaLink: 'https://app.nuqta.ae/explore',
    sendTiming: 'Immediately after signup',
    audienceSegment: 'New users (Day 0)',
    icon: User
  },
  {
    id: 'welcome-2',
    name: 'Profile Completion Reminder (Day 1)',
    category: 'Welcome Series',
    subject: '{{first_name}}, you\'re 50 points away from your first reward!',
    preheader: 'Complete your profile in 30 seconds',
    body: `Hey {{first_name}},

Quick question: Did you know you're leaving 50 points on the table? 🤔

All you need to do is complete your profile. It takes 30 seconds:

☐ Add your birthday → Get a special gift every year
☐ Set your preferences → Get personalized deals
☐ Upload a photo → Make your profile yours

**Bonus:** Complete everything today and we'll throw in an extra 25 points!

That's 75 points total – almost enough for a free coffee ☕

Let's do this,
The Nuqta Team`,
    cta: 'Complete My Profile',
    ctaLink: 'https://app.nuqta.ae/profile',
    sendTiming: '24 hours after signup if profile incomplete',
    audienceSegment: 'New users with incomplete profiles',
    icon: Star
  },
  {
    id: 'welcome-3',
    name: 'First Purchase Nudge (Day 3)',
    category: 'Welcome Series',
    subject: 'Your 2x points bonus expires in 4 days ⏰',
    preheader: 'Don\'t miss out on double rewards',
    body: `Hi {{first_name}},

Just a friendly reminder: Your **2x points welcome bonus** is still active!

Every AED you spend at any Nuqta merchant earns you DOUBLE points for the next 4 days.

**Here's what that looks like:**
- ☕ AED 25 coffee → Usually 25 points, NOW 50 points
- 🍕 AED 80 dinner → Usually 80 points, NOW 160 points
- 💇 AED 150 haircut → Usually 150 points, NOW 300 points

**Popular spots near you:**
• {{nearby_merchant_1}} - {{nearby_merchant_1_area}}
• {{nearby_merchant_2}} - {{nearby_merchant_2_area}}
• {{nearby_merchant_3}} - {{nearby_merchant_3_area}}

Make your first scan count!

Cheers,
The Nuqta Team`,
    cta: 'View All Merchants',
    ctaLink: 'https://app.nuqta.ae/merchants',
    sendTiming: 'Day 3 if no first purchase',
    audienceSegment: 'New users with 0 transactions',
    icon: Zap
  },
  {
    id: 'welcome-4',
    name: 'Last Chance Welcome Bonus (Day 6)',
    category: 'Welcome Series',
    subject: '⚠️ Last day for 2x points, {{first_name}}!',
    preheader: 'Your welcome bonus expires tomorrow',
    body: `{{first_name}}, this is it!

Your 2x points welcome bonus expires **TOMORROW**.

After that, you'll earn regular points (still great, but... you know... not DOUBLE 😅).

We'd hate for you to miss out. Here's a special incentive:

🎁 **Make your first purchase TODAY and we'll add 100 BONUS points** on top of your double points.

That's:
- Double points from your purchase
- PLUS 100 bonus points
- = A LOT of free stuff coming your way

One scan. That's all it takes.

Last call!
The Nuqta Team`,
    cta: 'Find A Merchant Now',
    ctaLink: 'https://app.nuqta.ae/merchants?sort=nearby',
    sendTiming: 'Day 6 if no first purchase',
    audienceSegment: 'New users with 0 transactions',
    icon: Bell
  },

  // ENGAGEMENT & RETENTION
  {
    id: 'engagement-1',
    name: 'Weekly Points Summary',
    category: 'Engagement',
    subject: 'Your week in rewards: {{points_earned}} points earned! 📊',
    preheader: 'See your progress and upcoming rewards',
    body: `Hi {{first_name}},

Here's your Nuqta week in review:

📊 **This Week's Stats**
• Points Earned: {{points_earned}}
• Visits Made: {{visit_count}}
• Favorite Spot: {{top_merchant}}
• Total Balance: {{total_points}} points

🎯 **You're {{points_to_next}} points away from:**
{{next_reward_name}}

**Keep the momentum going!**
You're on a {{streak_count}}-day streak. Visit any Nuqta merchant today to keep it alive!

💡 **Pro Tip:** Check in at the same place 5 times to unlock VIP rewards there.

See you this week,
The Nuqta Team`,
    cta: 'View My Rewards',
    ctaLink: 'https://app.nuqta.ae/rewards',
    sendTiming: 'Every Monday at 10am',
    audienceSegment: 'Active users (1+ transaction in 30 days)',
    icon: TrendingUp
  },
  {
    id: 'engagement-2',
    name: 'Points About to Expire',
    category: 'Engagement',
    subject: '{{expiring_points}} points expire in 7 days! 😱',
    preheader: 'Use them before you lose them',
    body: `Hey {{first_name}},

We noticed you have **{{expiring_points}} points** that will expire in 7 days!

That's real money waiting to be used. Don't let it disappear!

**Here's what you can get right now:**

🎁 {{reward_option_1}} – {{reward_1_points}} points
🎁 {{reward_option_2}} – {{reward_2_points}} points
🎁 {{reward_option_3}} – {{reward_3_points}} points

Or keep earning to reach something bigger. Just make sure to use your expiring points first!

**Why do points expire?**
We want to encourage you to enjoy your rewards, not just collect them. Think of it as our way of saying "treat yourself!" 🎉

Happy spending,
The Nuqta Team`,
    cta: 'Redeem Now',
    ctaLink: 'https://app.nuqta.ae/rewards',
    sendTiming: '7 days before point expiration',
    audienceSegment: 'Users with expiring points',
    icon: Bell
  },
  {
    id: 'engagement-3',
    name: 'Win-Back (30 Days Inactive)',
    category: 'Engagement',
    subject: 'We miss you, {{first_name}}! Here\'s 50 bonus points 🎁',
    preheader: 'Come back and claim your surprise',
    body: `Hey {{first_name}},

It's been a while! We've been busy adding new merchants and better rewards, and we want you to experience them.

**Here's a little "welcome back" gift:**

🎁 **50 BONUS POINTS** – Added to your account right now!

Your current balance: {{total_points}} points (+ 50 new)

**What's new since you've been away:**
• {{new_feature_1}}
• {{new_feature_2}}
• {{new_merchant_count}} new merchants added

We'd love to see you back. Your next coffee is practically free!

Miss you already,
The Nuqta Team

P.S. These bonus points expire in 14 days, so don't wait too long! ⏰`,
    cta: 'Claim My Points',
    ctaLink: 'https://app.nuqta.ae/rewards',
    sendTiming: '30 days after last activity',
    audienceSegment: 'Lapsed users (30+ days inactive)',
    icon: Heart
  },
  {
    id: 'engagement-4',
    name: 'Win-Back Final (60 Days Inactive)',
    category: 'Engagement',
    subject: 'Don\'t lose {{total_points}} points, {{first_name}}!',
    preheader: 'Your rewards are waiting',
    body: `{{first_name}},

We wanted to let you know that you still have **{{total_points}} points** in your Nuqta account.

That's worth approximately **AED {{points_value}}** in free stuff!

We don't want you to lose them. Points remain active as long as you make at least one visit every 6 months.

**Quick reminder of what you can get:**
{{available_rewards_list}}

Just one scan at any Nuqta merchant keeps your account active.

Here to help,
The Nuqta Team

P.S. Reply to this email if you have any questions about your account!`,
    cta: 'Keep My Points Active',
    ctaLink: 'https://app.nuqta.ae/merchants',
    sendTiming: '60 days after last activity',
    audienceSegment: 'At-risk users (60+ days inactive)',
    icon: Bell
  },

  // PROMOTIONAL
  {
    id: 'promo-1',
    name: 'Double Points Weekend',
    category: 'Promotional',
    subject: '🔥 THIS WEEKEND: Double points at ALL merchants!',
    preheader: 'Friday, Saturday & Sunday only',
    body: `{{first_name}}, big weekend alert! 🚨

This Friday, Saturday & Sunday, you'll earn **DOUBLE POINTS** at every single Nuqta merchant.

That's 500+ locations. All weekend. 2x points.

**The math is simple:**
Regular points × 2 = More free stuff, faster

**Hot spots to hit:**
☕ Cafes – Stack those coffee points
🍔 Restaurants – Weekend brunch = weekend points
💪 Gyms – Yes, even your workout earns double

**When:** Friday 5am – Sunday 11:59pm
**Where:** All Nuqta merchants
**How:** Just scan like normal – double points apply automatically

No code needed. No minimum spend. Just scan and earn.

Let's go!
The Nuqta Team`,
    cta: 'View All Merchants',
    ctaLink: 'https://app.nuqta.ae/merchants',
    sendTiming: 'Thursday evening before promo weekend',
    audienceSegment: 'All active users',
    icon: Zap
  },
  {
    id: 'promo-2',
    name: 'New Merchant Launch',
    category: 'Promotional',
    subject: '🆕 {{merchant_name}} is now on Nuqta! 3x points this week',
    preheader: 'Be first to earn at Dubai\'s newest partner',
    body: `Hey {{first_name}},

We're excited to announce our newest partner:

🎉 **{{merchant_name}}** is now on Nuqta!

And to celebrate, you'll earn **3x POINTS** on your first visit there (this week only!).

**About {{merchant_name}}:**
{{merchant_description}}

📍 Location: {{merchant_location}}
⏰ Hours: {{merchant_hours}}
⭐ Best for: {{merchant_best_for}}

**Launch Week Special:**
✅ 3x points on first visit
✅ Extra 50 points if you leave a review
✅ 100 bonus points if you refer a friend to visit

Be one of the first to check in!

Cheers,
The Nuqta Team`,
    cta: 'Get Directions',
    ctaLink: '{{merchant_maps_link}}',
    sendTiming: 'Launch day of new merchant',
    audienceSegment: 'Users within 5km of new merchant',
    icon: Sparkles
  },
  {
    id: 'promo-3',
    name: 'Category Bonus',
    category: 'Promotional',
    subject: '☕ Coffee lovers: 2x points at all cafes this week!',
    preheader: 'Your daily brew just got more rewarding',
    body: `{{first_name}}, good news for your caffeine habit! ☕

This week, you'll earn **DOUBLE POINTS** at every cafe on Nuqta.

That's {{cafe_count}}+ cafes across Dubai, all giving you 2x rewards.

**Fan favorites:**
• {{cafe_1}} – Known for: {{cafe_1_specialty}}
• {{cafe_2}} – Known for: {{cafe_2_specialty}}
• {{cafe_3}} – Known for: {{cafe_3_specialty}}

**Quick math:**
☕ 1 coffee/day × 7 days × 2x points = A free coffee earned!

Promo runs: {{promo_start}} – {{promo_end}}

Time to explore some new spots?

Happy sipping,
The Nuqta Team`,
    cta: 'View All Cafes',
    ctaLink: 'https://app.nuqta.ae/merchants?category=cafe',
    sendTiming: 'First day of category promotion',
    audienceSegment: 'Users with cafe transaction history',
    icon: Gift
  },

  // MILESTONE & CELEBRATION
  {
    id: 'milestone-1',
    name: 'First Reward Unlocked',
    category: 'Milestone',
    subject: '🎉 You did it! Your first reward is ready!',
    preheader: 'Time to treat yourself',
    body: `{{first_name}}, CONGRATULATIONS! 🎉🎉🎉

You just unlocked your **FIRST NUQTA REWARD!**

**Your reward:**
🎁 {{reward_name}}

**How to claim:**
1. Open the Nuqta app
2. Go to "My Rewards"
3. Tap "Redeem" on your reward
4. Show the QR code at the merchant

It's that simple. You earned it – now enjoy it!

**What's next?**
You're now {{points_to_next}} points away from your next reward: {{next_reward_name}}

Keep going!
The Nuqta Team

P.S. Share a photo of your reward! Tag us @nuqta.ae 📸`,
    cta: 'Claim My Reward',
    ctaLink: 'https://app.nuqta.ae/rewards',
    sendTiming: 'Immediately when first reward unlocked',
    audienceSegment: 'Users who just unlocked first reward',
    icon: Award
  },
  {
    id: 'milestone-2',
    name: 'Birthday Email',
    category: 'Milestone',
    subject: '🎂 Happy Birthday, {{first_name}}! Your gift is inside...',
    preheader: 'Open for a special surprise',
    body: `Happy Birthday, {{first_name}}! 🎂🎉

Today is YOUR day, and we wanted to make it extra special.

**Your Birthday Gift:**

🎁 **{{birthday_points}} BONUS POINTS**
Added to your account – no strings attached!

PLUS, for the next 7 days:
✨ **2x points on all purchases**
✨ **Special access to birthday-only rewards**

**Use your bonus to treat yourself:**
• {{birthday_reward_1}}
• {{birthday_reward_2}}
• {{birthday_reward_3}}

From everyone at Nuqta – have an amazing birthday!

Celebrate well,
The Nuqta Team

🎈🎈🎈`,
    cta: 'See Birthday Rewards',
    ctaLink: 'https://app.nuqta.ae/rewards?filter=birthday',
    sendTiming: 'On user birthday at 8am',
    audienceSegment: 'Users with birthdays today',
    icon: Gift
  },
  {
    id: 'milestone-3',
    name: 'Tier Upgrade',
    category: 'Milestone',
    subject: '⬆️ You\'ve been upgraded to {{new_tier}} status!',
    preheader: 'New perks unlocked',
    body: `{{first_name}}, you're moving up! 🚀

Based on your activity, you've been upgraded to:

⭐ **{{new_tier}} MEMBER**

**Your new perks:**
{{tier_benefit_1}}
{{tier_benefit_2}}
{{tier_benefit_3}}
{{tier_benefit_4}}

**How you got here:**
• Total visits: {{total_visits}}
• Points earned: {{total_points_earned}}
• Months active: {{months_active}}

**What's next?**
{{next_tier_name}} status unlocks at {{next_tier_threshold}} points. You're {{points_to_next_tier}} away!

Thank you for being such an active member of the Nuqta community.

Onwards and upwards,
The Nuqta Team`,
    cta: 'View My Status',
    ctaLink: 'https://app.nuqta.ae/profile/tier',
    sendTiming: 'Immediately upon tier upgrade',
    audienceSegment: 'Users who just upgraded tier',
    icon: TrendingUp
  },
  {
    id: 'milestone-4',
    name: 'Anniversary Email',
    category: 'Milestone',
    subject: '🎊 1 Year with Nuqta! Look what you\'ve achieved...',
    preheader: 'Your year in review + a special gift',
    body: `{{first_name}}, can you believe it's been a YEAR? 🎊

One year ago today, you joined Nuqta. Here's what you've accomplished:

**Your Year in Numbers:**
📍 Visits: {{total_visits}}
💰 Points Earned: {{total_points}}
🎁 Rewards Claimed: {{rewards_claimed}}
❤️ Favorite Spot: {{favorite_merchant}}
💵 Estimated Savings: AED {{total_savings}}

**Anniversary Gift:**
🎁 **{{anniversary_points}} BONUS POINTS** – Added to your account!

**Fun Fact:**
You've earned more than {{percentile}}% of Nuqta members this year. Not bad! 💪

Here's to another year of rewards!

Cheers,
The Nuqta Team`,
    cta: 'See My Year in Review',
    ctaLink: 'https://app.nuqta.ae/year-in-review',
    sendTiming: '1 year anniversary of signup',
    audienceSegment: 'Users on signup anniversary',
    icon: Calendar
  },

  // REFERRAL
  {
    id: 'referral-1',
    name: 'Referral Program Introduction',
    category: 'Referral',
    subject: 'Give 100 points, Get 100 points! 🤝',
    preheader: 'Share Nuqta with friends and both of you win',
    body: `Hey {{first_name}},

Know someone who'd love earning rewards on everyday purchases?

**Here's the deal:**

1. Share your referral link with a friend
2. They sign up and make their first purchase
3. You BOTH get **100 bonus points**!

**Your referral link:**
{{referral_link}}

**Why friends love Nuqta:**
✅ Free to join
✅ Earn at 500+ Dubai merchants
✅ No plastic cards to carry
✅ Real rewards, not gimmicks

The more friends you invite, the more you earn. There's no limit!

**Leaderboard:**
Top referrer this month has invited 23 friends. Think you can beat that? 😏

Share the love,
The Nuqta Team`,
    cta: 'Get My Referral Link',
    ctaLink: 'https://app.nuqta.ae/referral',
    sendTiming: 'After 3rd successful transaction',
    audienceSegment: 'Users with 3+ transactions',
    icon: User
  },
  {
    id: 'referral-2',
    name: 'Referral Success',
    category: 'Referral',
    subject: '🎉 Cha-ching! {{friend_name}} just earned you 100 points!',
    preheader: 'Your friend just joined and made a purchase',
    body: `{{first_name}}, great news! 🎉

Your friend **{{friend_name}}** just made their first Nuqta purchase!

**That means:**
✅ +100 points for you
✅ +100 points for {{friend_name}}
✅ A new rewards buddy in the making

**Your updated balance:** {{total_points}} points

**Keep it going:**
You've invited {{total_referrals}} friend(s) so far. Each one earns you 100 points!

Your referral link: {{referral_link}}

Thanks for spreading the word!
The Nuqta Team`,
    cta: 'Invite More Friends',
    ctaLink: 'https://app.nuqta.ae/referral',
    sendTiming: 'When referred friend makes first purchase',
    audienceSegment: 'Users whose referral just converted',
    icon: Gift
  },

  // TRANSACTIONAL
  {
    id: 'transaction-1',
    name: 'Purchase Confirmation',
    category: 'Transactional',
    subject: '✅ You earned {{points_earned}} points at {{merchant_name}}!',
    preheader: 'Transaction confirmed + your new balance',
    body: `Hi {{first_name}},

Thanks for your visit! Here's your receipt:

**Transaction Details:**
📍 Merchant: {{merchant_name}}
📅 Date: {{transaction_date}}
💰 Amount: AED {{transaction_amount}}
⭐ Points Earned: {{points_earned}}

**Your Balance:**
Previous: {{previous_balance}}
+ Earned: {{points_earned}}
= **New Balance: {{new_balance}} points**

**You're {{points_to_next}} points away from:**
{{next_reward_name}}

See you next time!
The Nuqta Team`,
    cta: 'View My Balance',
    ctaLink: 'https://app.nuqta.ae/balance',
    sendTiming: 'Immediately after transaction',
    audienceSegment: 'User who just made transaction',
    icon: Check
  },
  {
    id: 'transaction-2',
    name: 'Reward Redemption Confirmation',
    category: 'Transactional',
    subject: '🎁 Reward Redeemed: {{reward_name}}',
    preheader: 'Your reward is ready to use',
    body: `{{first_name}}, your reward is ready! 🎁

**Redeemed Reward:**
{{reward_name}}

**Details:**
📍 Valid at: {{valid_merchants}}
📅 Expires: {{expiry_date}}
🔢 Code: {{reward_code}}

**How to use:**
1. Visit the merchant
2. Show this email or open the app
3. Present the code above to the cashier

Enjoy your reward!
The Nuqta Team

Need help? Reply to this email or visit help.nuqta.ae`,
    cta: 'View in App',
    ctaLink: 'https://app.nuqta.ae/rewards/active',
    sendTiming: 'Immediately after reward redemption',
    audienceSegment: 'User who just redeemed reward',
    icon: Gift
  }
];

const categoryColors: Record<string, string> = {
  'Welcome Series': 'bg-blue-50 text-blue-700 border-blue-200',
  'Engagement': 'bg-green-50 text-green-700 border-green-200',
  'Promotional': 'bg-purple-50 text-purple-700 border-purple-200',
  'Milestone': 'bg-amber-50 text-amber-700 border-amber-200',
  'Referral': 'bg-pink-50 text-pink-700 border-pink-200',
  'Transactional': 'bg-gray-50 text-gray-700 border-gray-200'
};

const categoryBgColors: Record<string, string> = {
  'Welcome Series': 'bg-blue-500',
  'Engagement': 'bg-green-500',
  'Promotional': 'bg-purple-500',
  'Milestone': 'bg-amber-500',
  'Referral': 'bg-pink-500',
  'Transactional': 'bg-gray-500'
};

export default function EmailTemplatesPage() {
  const [expandedTemplates, setExpandedTemplates] = useState<string[]>([]);
  const [copiedStates, setCopiedStates] = useState<Record<string, string>>({});
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(emailTemplates.map(t => t.category)))];

  const filteredTemplates = activeCategory === 'all'
    ? emailTemplates
    : emailTemplates.filter(t => t.category === activeCategory);

  const toggleTemplate = (id: string) => {
    setExpandedTemplates(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const copyToClipboard = (id: string, field: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates({ ...copiedStates, [`${id}-${field}`]: 'copied' });
    setTimeout(() => {
      setCopiedStates(prev => {
        const newState = { ...prev };
        delete newState[`${id}-${field}`];
        return newState;
      });
    }, 2000);
  };

  const copyFullEmail = (template: EmailTemplate) => {
    const fullEmail = `SUBJECT: ${template.subject}
PREHEADER: ${template.preheader}

${template.body}

[CTA BUTTON: ${template.cta}]
Link: ${template.ctaLink}`;
    copyToClipboard(template.id, 'full', fullEmail);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Mail className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold">Email Marketing Templates</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-2xl">
            20+ ready-to-send email templates for every stage of the customer journey.
            Just copy, personalize, and send.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2">
              <span className="text-2xl font-bold">{emailTemplates.length}</span>
              <span className="text-blue-100 ml-2">Templates</span>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2">
              <span className="text-2xl font-bold">{categories.length - 1}</span>
              <span className="text-blue-100 ml-2">Categories</span>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2">
              <span className="text-2xl font-bold">100%</span>
              <span className="text-blue-100 ml-2">Customizable</span>
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
                  ? 'bg-blue-600 text-white shadow-lg'
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
                        <span className="text-sm text-gray-500">{template.sendTiming}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        copyFullEmail(template);
                      }}
                      className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      {copiedStates[`${template.id}-full`] ? (
                        <>
                          <Check className="w-4 h-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy All
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
                  <div className="border-t border-gray-100 p-5 space-y-6">
                    {/* Subject Line */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium text-gray-700">Subject Line</label>
                        <button
                          onClick={() => copyToClipboard(template.id, 'subject', template.subject)}
                          className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1"
                        >
                          {copiedStates[`${template.id}-subject`] ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                          {copiedStates[`${template.id}-subject`] ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 font-medium text-gray-900">
                        {template.subject}
                      </div>
                    </div>

                    {/* Preheader */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium text-gray-700">Preheader Text</label>
                        <button
                          onClick={() => copyToClipboard(template.id, 'preheader', template.preheader)}
                          className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1"
                        >
                          {copiedStates[`${template.id}-preheader`] ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                          {copiedStates[`${template.id}-preheader`] ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-gray-600 text-sm">
                        {template.preheader}
                      </div>
                    </div>

                    {/* Email Body */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium text-gray-700">Email Body</label>
                        <button
                          onClick={() => copyToClipboard(template.id, 'body', template.body)}
                          className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1"
                        >
                          {copiedStates[`${template.id}-body`] ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                          {copiedStates[`${template.id}-body`] ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 whitespace-pre-wrap text-gray-700 text-sm leading-relaxed max-h-96 overflow-y-auto">
                        {template.body}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">CTA Button Text</label>
                        <div className="bg-blue-600 text-white rounded-lg py-3 px-6 text-center font-medium flex items-center justify-center gap-2">
                          {template.cta}
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">CTA Link</label>
                        <div className="bg-gray-50 rounded-lg p-3 text-sm text-blue-600 break-all">
                          {template.ctaLink}
                        </div>
                      </div>
                    </div>

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

      {/* Best Practices */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">📧 Email Best Practices</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">Subject Lines</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Keep under 50 characters</li>
                <li>• Use personalization {"{{first_name}}"}</li>
                <li>• Create urgency when appropriate</li>
                <li>• A/B test emojis vs no emojis</li>
                <li>• Avoid spam trigger words</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">Sending Strategy</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Best days: Tue, Wed, Thu</li>
                <li>• Best times: 10am or 2pm</li>
                <li>• Avoid weekends for promos</li>
                <li>• Transactional: send immediately</li>
                <li>• Limit to 2-3 emails per week</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">Personalization</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Always use first name</li>
                <li>• Reference past purchases</li>
                <li>• Show nearby merchants</li>
                <li>• Include point balance</li>
                <li>• Segment by behavior</li>
              </ul>
            </div>
          </div>

          {/* Variables Reference */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Available Variables</h3>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b border-white/20">
                    <th className="pb-2 pr-4">Variable</th>
                    <th className="pb-2 pr-4">Description</th>
                    <th className="pb-2">Example</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/10">
                    <td className="py-2 pr-4 font-mono text-blue-300">{"{{first_name}}"}</td>
                    <td className="py-2 pr-4">User's first name</td>
                    <td className="py-2">Sarah</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-2 pr-4 font-mono text-blue-300">{"{{total_points}}"}</td>
                    <td className="py-2 pr-4">Current point balance</td>
                    <td className="py-2">1,250</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-2 pr-4 font-mono text-blue-300">{"{{merchant_name}}"}</td>
                    <td className="py-2 pr-4">Merchant business name</td>
                    <td className="py-2">Brew Lab Coffee</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-2 pr-4 font-mono text-blue-300">{"{{points_to_next}}"}</td>
                    <td className="py-2 pr-4">Points needed for next reward</td>
                    <td className="py-2">150</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-2 pr-4 font-mono text-blue-300">{"{{referral_link}}"}</td>
                    <td className="py-2 pr-4">User's unique referral URL</td>
                    <td className="py-2">nuqta.ae/r/ABC123</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-blue-300">{"{{next_reward_name}}"}</td>
                    <td className="py-2 pr-4">Next available reward</td>
                    <td className="py-2">Free Coffee</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    <GlobalFooter />
    </div>
  );
}
