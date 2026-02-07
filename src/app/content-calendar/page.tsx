'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Calendar,
  Instagram,
  Video,
  Image,
  FileText,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Target,
  Users,
  Store,
  Megaphone,
  TrendingUp,
  Heart,
  MessageCircle,
  Share2,
  Clock,
  Tag,
  Zap,
  Star,
  Gift,
  Coffee,
  Scissors,
  Dumbbell,
  ShoppingBag,
  Music,
  Camera,
  Smartphone
} from 'lucide-react';

interface ContentPost {
  id: string;
  day: number;
  date: string;
  dayOfWeek: string;
  platform: 'instagram' | 'tiktok' | 'linkedin' | 'all';
  type: 'reel' | 'post' | 'story' | 'carousel';
  theme: string;
  title: string;
  caption: string;
  hashtags: string[];
  hook?: string;
  cta: string;
  visualIdea: string;
  category: 'awareness' | 'education' | 'social-proof' | 'promotion' | 'engagement' | 'behind-scenes';
  bestTime: string;
}

const contentCalendar: ContentPost[] = [
  // Week 1 - Launch Announcement & Awareness
  {
    id: 'w1d1',
    day: 1,
    date: 'Launch Day',
    dayOfWeek: 'Monday',
    platform: 'all',
    type: 'reel',
    theme: 'Launch Announcement',
    title: 'Nuqta is HERE!',
    hook: 'Stop giving away discounts. Start giving rewards.',
    caption: `Dubai, meet Nuqta! 🪙✨

The smartest way to earn rewards at your favorite spots.

No cards. No codes. Just scan & earn.

🎁 Download now and get 100 BONUS coins!

Every coffee. Every haircut. Every gym session.
You're already spending - why not earn?

#NuqtaLaunch #DubaiRewards`,
    hashtags: ['NuqtaLaunch', 'DubaiRewards', 'EarnWhileYouSpend', 'DubaiLife', 'RewardsApp', 'CashbackDubai'],
    cta: 'Download now - Link in bio!',
    visualIdea: 'Fast-paced montage: Coffee pour → QR scan → Coins animation → Happy customer. Gold & black theme.',
    category: 'awareness',
    bestTime: '12:00 PM'
  },
  {
    id: 'w1d2',
    day: 2,
    date: 'Day 2',
    dayOfWeek: 'Tuesday',
    platform: 'instagram',
    type: 'carousel',
    theme: 'How It Works',
    title: 'How Nuqta Works (Swipe)',
    caption: `Still using punch cards? 🙈

Here's how smart Dubai earns rewards 👇

Swipe to see how easy it is!

No cards to lose.
No codes to remember.
Just pure rewards. 🪙

Tag someone who needs this!`,
    hashtags: ['HowItWorks', 'DubaiApp', 'RewardsProgram', 'SmartShopping', 'NuqtaApp'],
    cta: 'Try it today - Link in bio',
    visualIdea: '5-slide carousel: 1) Find store 2) Scan QR 3) Pay normally 4) Earn coins 5) Redeem anywhere',
    category: 'education',
    bestTime: '7:00 PM'
  },
  {
    id: 'w1d3',
    day: 3,
    date: 'Day 3',
    dayOfWeek: 'Wednesday',
    platform: 'tiktok',
    type: 'reel',
    theme: 'Pain Point',
    title: 'POV: Your punch card betrayed you',
    hook: 'POV: You finally got all 10 stamps...',
    caption: `POV: You finally got all 10 stamps and they say "we don't do that anymore" 💀

This is why we built Nuqta.

Your rewards. Digital. Forever.
Can't lose what's in your phone 📱

#CoffeeLover #DubaiProblems #RewardsApp`,
    hashtags: ['DubaiProblems', 'CoffeeLover', 'POV', 'RewardsApp', 'NuqtaTip'],
    cta: 'Never lose rewards again - Download Nuqta',
    visualIdea: 'Trendy POV format - person looking devastated, then showing Nuqta app as the solution',
    category: 'awareness',
    bestTime: '8:00 PM'
  },
  {
    id: 'w1d4',
    day: 4,
    date: 'Day 4',
    dayOfWeek: 'Thursday',
    platform: 'instagram',
    type: 'story',
    theme: 'Partner Spotlight',
    title: 'Partner Store Feature',
    caption: `NEW PARTNER ALERT! 🎉

[Store Name] is now on Nuqta!

Earn coins on every visit.

📍 Location
⏰ Hours
🪙 Earn up to X coins

Swipe up to find them in the app!`,
    hashtags: ['NuqtaPartner', 'DubaiCafe', 'NewOnNuqta'],
    cta: 'Find them in the app!',
    visualIdea: 'Store photos with Nuqta gold overlay, QR code visible, coin animation',
    category: 'social-proof',
    bestTime: '5:00 PM'
  },
  {
    id: 'w1d5',
    day: 5,
    date: 'Day 5',
    dayOfWeek: 'Friday',
    platform: 'all',
    type: 'reel',
    theme: 'Weekend Vibes',
    title: 'Weekend = Earning Season',
    hook: 'Your weekend plans just got better...',
    caption: `Your weekend plans just got rewarding 🪙

Brunch? Earn coins.
Salon? Earn coins.
Gym? Earn coins.
Shopping? You guessed it... COINS.

Make every dirham count this weekend!

Where are you earning first? 👇`,
    hashtags: ['DubaiWeekend', 'FridayVibes', 'WeekendPlans', 'NuqtaRewards', 'DubaiLife'],
    cta: 'Start your earning weekend!',
    visualIdea: 'Split screen showing different activities (brunch, salon, gym) with coin animations',
    category: 'engagement',
    bestTime: '10:00 AM'
  },
  {
    id: 'w1d6',
    day: 6,
    date: 'Day 6',
    dayOfWeek: 'Saturday',
    platform: 'instagram',
    type: 'post',
    theme: 'User Tip',
    title: 'Pro Tip: Maximize Your Coins',
    caption: `PRO TIP 💡

Want to earn MORE coins?

1️⃣ Check the app for "Double Coins" days
2️⃣ Visit partner stores during happy hours
3️⃣ Refer friends = Bonus coins for both

The smart ones are already doing this 😉

What's your highest coin balance? Drop it below! 👇`,
    hashtags: ['NuqtaTips', 'ProTip', 'MaximizeRewards', 'SmartShopping', 'DubaiSavings'],
    cta: 'Start earning smarter today',
    visualIdea: 'Clean infographic style with gold accents, numbered tips',
    category: 'education',
    bestTime: '4:00 PM'
  },
  {
    id: 'w1d7',
    day: 7,
    date: 'Day 7',
    dayOfWeek: 'Sunday',
    platform: 'instagram',
    type: 'story',
    theme: 'Week 1 Recap',
    title: 'Week 1 Stats',
    caption: `WEEK 1 COMPLETE! 🎉

📊 This week on Nuqta:
• [X] new users joined
• [X] coins distributed
• [X] redemptions made

Thank you Dubai! This is just the beginning.

Share your first Nuqta experience!`,
    hashtags: ['NuqtaStats', 'Week1', 'DubaiCommunity', 'ThankYou'],
    cta: 'Join the community!',
    visualIdea: 'Animated stats with gold numbers, confetti effect',
    category: 'social-proof',
    bestTime: '6:00 PM'
  },

  // Week 2 - Education & Social Proof
  {
    id: 'w2d1',
    day: 8,
    date: 'Week 2',
    dayOfWeek: 'Monday',
    platform: 'tiktok',
    type: 'reel',
    theme: 'Behind the Scenes',
    title: 'Day in the Life: Nuqta User',
    hook: 'A day in Dubai, but make it rewarding...',
    caption: `A day earning coins in Dubai 🪙

7am: Morning coffee ☕ +15 coins
12pm: Lunch with colleagues 🍽️ +45 coins
3pm: Quick salon visit 💇 +80 coins
7pm: Gym session 💪 +30 coins

Total: 170 coins = AED 17 saved

This could be you tomorrow 👀`,
    hashtags: ['DayInMyLife', 'DubaiVlog', 'RewardsLife', 'NuqtaUser', 'DITL'],
    cta: 'Start your rewarding day',
    visualIdea: 'Vlog style showing real locations in Dubai with coin pop-ups',
    category: 'education',
    bestTime: '7:00 PM'
  },
  {
    id: 'w2d2',
    day: 9,
    date: 'Week 2',
    dayOfWeek: 'Tuesday',
    platform: 'instagram',
    type: 'carousel',
    theme: 'Partner Categories',
    title: 'Where Can You Earn?',
    caption: `"Where can I use Nuqta?"

EVERYWHERE you already go! 👇

Swipe to see all categories:
☕ Cafes & Restaurants
💇 Salons & Spas
💪 Gyms & Fitness
🛍️ Shopping
🎬 Entertainment
💊 Pharmacies
And more coming soon!

Which category excites you most? Comment below!`,
    hashtags: ['NuqtaPartners', 'DubaiStores', 'EarnEverywhere', 'RewardsCategories'],
    cta: 'Explore partners in the app',
    visualIdea: '7 slides, each category with icon and example partners',
    category: 'education',
    bestTime: '1:00 PM'
  },
  {
    id: 'w2d3',
    day: 10,
    date: 'Week 2',
    dayOfWeek: 'Wednesday',
    platform: 'all',
    type: 'reel',
    theme: 'Testimonial',
    title: 'Real User Story',
    hook: 'I saved AED 500 in one month...',
    caption: `"I didn't believe it at first..."

Meet [Name], Nuqta user since Day 1.

In just 4 weeks:
✅ Earned 5,000+ coins
✅ Saved AED 500
✅ Zero extra effort

"I was spending anyway. Now I'm earning."

Your turn? 🪙`,
    hashtags: ['NuqtaStory', 'RealResults', 'UserTestimonial', 'DubaiSavings'],
    cta: 'Start earning like [Name]',
    visualIdea: 'Interview style with user, show their app balance, b-roll of them at stores',
    category: 'social-proof',
    bestTime: '6:00 PM'
  },
  {
    id: 'w2d4',
    day: 11,
    date: 'Week 2',
    dayOfWeek: 'Thursday',
    platform: 'instagram',
    type: 'post',
    theme: 'Myth Busting',
    title: 'Myth vs Reality',
    caption: `Let's bust some myths 💥

❌ MYTH: "Rewards apps are complicated"
✅ REALITY: Scan. Pay. Earn. That's it.

❌ MYTH: "I need to spend more to earn"
✅ REALITY: Earn on what you already buy

❌ MYTH: "The coins aren't worth much"
✅ REALITY: 100 coins = AED 10. Real value.

❌ MYTH: "It's just for cafes"
✅ REALITY: 9+ categories, 100+ partners

Still have questions? Ask below! 👇`,
    hashtags: ['MythBusted', 'NuqtaFacts', 'RewardsReality', 'DubaiApp'],
    cta: 'Download and see for yourself',
    visualIdea: 'Clean myth vs reality format with X and ✓ visuals',
    category: 'education',
    bestTime: '7:00 PM'
  },
  {
    id: 'w2d5',
    day: 12,
    date: 'Week 2',
    dayOfWeek: 'Friday',
    platform: 'tiktok',
    type: 'reel',
    theme: 'Trending Audio',
    title: 'Use Trending Sound',
    hook: 'When you realize you could have been earning all along...',
    caption: `When you realize you spent AED 10,000 last year at cafes and earned... nothing 😭

vs Me with Nuqta earning 10% back 💅

It's giving... smart money 🪙

#SmartMoney #DubaiGirl #RewardsApp`,
    hashtags: ['SmartMoney', 'DubaiGirl', 'Relatable', 'NuqtaMoment', 'TrendingAudio'],
    cta: 'Be the smart one',
    visualIdea: 'Use trending sound, reaction format with coin rain effect',
    category: 'awareness',
    bestTime: '9:00 PM'
  },
  {
    id: 'w2d6',
    day: 13,
    date: 'Week 2',
    dayOfWeek: 'Saturday',
    platform: 'instagram',
    type: 'story',
    theme: 'Poll & Engagement',
    title: 'This or That',
    caption: `THIS OR THAT 👆👇

Where do you spend most?

☕ Cafes
vs
🍽️ Restaurants

[Poll]

Either way, you should be earning! 🪙`,
    hashtags: ['ThisOrThat', 'Poll', 'DubaiFood', 'NuqtaEngagement'],
    cta: 'Vote now!',
    visualIdea: 'Split screen poll, interactive story element',
    category: 'engagement',
    bestTime: '2:00 PM'
  },
  {
    id: 'w2d7',
    day: 14,
    date: 'Week 2',
    dayOfWeek: 'Sunday',
    platform: 'all',
    type: 'reel',
    theme: 'Merchant Feature',
    title: 'Featured Partner Deep Dive',
    hook: 'This cafe gives you 15% back in coins...',
    caption: `PARTNER SPOTLIGHT 🔦

[Cafe Name] is giving their customers 15% back in Nuqta coins!

That means:
• AED 50 coffee → 75 coins (AED 7.50 back)
• Weekly visits → AED 30/month back
• Yearly → AED 360 in free coffee ☕

Find them on the app and start earning!

📍 [Location]`,
    hashtags: ['PartnerSpotlight', 'DubaiCafe', 'NuqtaPartner', 'CoffeeLovers'],
    cta: 'Visit this weekend!',
    visualIdea: 'Cinematic shots of cafe, coffee being made, QR scan, coin animation',
    category: 'social-proof',
    bestTime: '11:00 AM'
  },

  // Week 3 - Promotions & Growth
  {
    id: 'w3d1',
    day: 15,
    date: 'Week 3',
    dayOfWeek: 'Monday',
    platform: 'all',
    type: 'reel',
    theme: 'Referral Push',
    title: 'Refer & Earn',
    hook: 'Free money hack that actually works...',
    caption: `FREE MONEY HACK 💰

Refer a friend to Nuqta:
✅ They get 100 bonus coins
✅ You get 100 bonus coins

Refer 10 friends = 1,000 FREE coins = AED 100

No limits. No catch.
Just share and earn.

Your referral code is in the app!

Tag 3 friends who need this 👇`,
    hashtags: ['ReferAndEarn', 'FreeMoneyHack', 'NuqtaReferral', 'DubaiDeals'],
    cta: 'Share your code now!',
    visualIdea: 'Money/coin animation, show referral flow, celebration when coins hit',
    category: 'promotion',
    bestTime: '12:00 PM'
  },
  {
    id: 'w3d2',
    day: 16,
    date: 'Week 3',
    dayOfWeek: 'Tuesday',
    platform: 'instagram',
    type: 'carousel',
    theme: 'Success Stories',
    title: 'Top Earners This Month',
    caption: `TOP EARNERS OF THE MONTH 🏆

Swipe to see who's winning at rewards!

1️⃣ Sara - 8,500 coins
2️⃣ Mohammed - 7,200 coins
3️⃣ Priya - 6,800 coins
4️⃣ Alex - 5,900 coins
5️⃣ Fatima - 5,500 coins

Average savings: AED 680/month! 💰

Will you be on next month's list?`,
    hashtags: ['TopEarners', 'NuqtaLeaderboard', 'DubaiSavers', 'RewardsChampion'],
    cta: 'Start climbing the leaderboard',
    visualIdea: 'Leaderboard style with profile silhouettes and coin counts',
    category: 'social-proof',
    bestTime: '6:00 PM'
  },
  {
    id: 'w3d3',
    day: 17,
    date: 'Week 3',
    dayOfWeek: 'Wednesday',
    platform: 'tiktok',
    type: 'reel',
    theme: 'Comparison',
    title: 'Regular Customer vs Nuqta User',
    hook: 'Same coffee. Different outcomes.',
    caption: `Same coffee shop. Same order. Different outcomes.

Regular customer:
Pays AED 25. Gets nothing.

Nuqta user:
Pays AED 25. Gets 25 coins back.

After 10 visits:
Regular: Spent AED 250. Got 0.
Nuqta: Spent AED 250. Got AED 25 back.

Be the smart one ☕🪙`,
    hashtags: ['SmartCustomer', 'CoffeeMath', 'NuqtaLogic', 'DubaiTips'],
    cta: 'Be the Nuqta user',
    visualIdea: 'Split screen comparison, same actions but one shows coins accumulating',
    category: 'education',
    bestTime: '7:30 PM'
  },
  {
    id: 'w3d4',
    day: 18,
    date: 'Week 3',
    dayOfWeek: 'Thursday',
    platform: 'instagram',
    type: 'story',
    theme: 'Flash Promo',
    title: 'Double Coins Thursday',
    caption: `⚡ DOUBLE COINS THURSDAY ⚡

For the next 24 hours:
2X COINS at ALL partners!

AED 100 spend = 200 coins (not 100!)

This is NOT a drill 🚨

Go. Earn. Win.`,
    hashtags: ['DoubleCoins', 'FlashPromo', 'ThursdayDeal', 'NuqtaPromo'],
    cta: 'Earn double NOW!',
    visualIdea: 'Urgent design with countdown timer, 2X graphics, gold everywhere',
    category: 'promotion',
    bestTime: '9:00 AM'
  },
  {
    id: 'w3d5',
    day: 19,
    date: 'Week 3',
    dayOfWeek: 'Friday',
    platform: 'all',
    type: 'reel',
    theme: 'Weekend Plans',
    title: 'Weekend Earning Guide',
    hook: 'Your weekend earning itinerary...',
    caption: `Weekend Earning Itinerary 📋

FRIDAY:
🕐 9am: Breakfast at [Cafe] +40 coins
🕐 2pm: Mall shopping +120 coins
🕐 8pm: Dinner out +80 coins

SATURDAY:
🕐 10am: Gym +30 coins
🕐 1pm: Brunch squad +100 coins
🕐 5pm: Salon prep +90 coins

SUNDAY:
🕐 11am: Coffee catch-up +30 coins

Weekend total: 490 coins = AED 49! 💰

Save this for your earning weekend!`,
    hashtags: ['WeekendGuide', 'DubaiWeekend', 'EarningItinerary', 'NuqtaWeekend'],
    cta: 'Save & share!',
    visualIdea: 'Aesthetic weekend planner format with coin counts',
    category: 'education',
    bestTime: '10:00 AM'
  },
  {
    id: 'w3d6',
    day: 20,
    date: 'Week 3',
    dayOfWeek: 'Saturday',
    platform: 'instagram',
    type: 'post',
    theme: 'Community',
    title: 'User Generated Content',
    caption: `You're amazing 🥹

Look at our community earning coins across Dubai!

📸 by @user1 - morning coffee ritual
📸 by @user2 - gym gains + coin gains
📸 by @user3 - salon day earning

Tag us in your Nuqta moments!
Best posts get featured + bonus coins 🪙`,
    hashtags: ['NuqtaCommunity', 'UserLove', 'DubaiRewards', 'NuqtaMoments'],
    cta: 'Tag us to be featured!',
    visualIdea: 'Collage of user photos with Nuqta at different locations',
    category: 'social-proof',
    bestTime: '3:00 PM'
  },
  {
    id: 'w3d7',
    day: 21,
    date: 'Week 3',
    dayOfWeek: 'Sunday',
    platform: 'linkedin',
    type: 'post',
    theme: 'Business Angle',
    title: 'For Business Owners',
    caption: `To Dubai business owners:

Your customers are spending. But are they coming back?

Nuqta helps you:
✅ Turn one-time visitors into regulars
✅ Build loyalty without discounting
✅ Get real data on customer behavior
✅ Zero upfront cost

We've helped [X] businesses increase repeat visits by 40%.

Interested? Let's talk.

#DubaiBusiness #CustomerLoyalty #RetailTech #StartupDubai`,
    hashtags: ['DubaiBusiness', 'CustomerLoyalty', 'RetailTech', 'B2B', 'StartupDubai'],
    cta: 'DM for partnership info',
    visualIdea: 'Professional design, business dashboard preview, statistics',
    category: 'awareness',
    bestTime: '10:00 AM'
  },

  // Week 4 - Retention & Momentum
  {
    id: 'w4d1',
    day: 22,
    date: 'Week 4',
    dayOfWeek: 'Monday',
    platform: 'tiktok',
    type: 'reel',
    theme: 'Trend Participation',
    title: 'Join Trending Challenge',
    hook: 'POV: explaining Nuqta to your friends',
    caption: `POV: explaining Nuqta to your friends for the 100th time

"So like... you just scan and get money back?"

YES. THAT'S LITERALLY IT.

Stop asking. Start earning. 🪙

#ExplainingToFriends #POV #NuqtaLife`,
    hashtags: ['POV', 'ExplainingToFriends', 'Relatable', 'NuqtaLife', 'DubaiHumor'],
    cta: 'Show them this video',
    visualIdea: 'Relatable POV format with trending sound',
    category: 'engagement',
    bestTime: '8:00 PM'
  },
  {
    id: 'w4d2',
    day: 23,
    date: 'Week 4',
    dayOfWeek: 'Tuesday',
    platform: 'instagram',
    type: 'carousel',
    theme: 'New Partners',
    title: 'New Partners This Week',
    caption: `FRESH PARTNERS ALERT 🚨

Swipe to see who just joined Nuqta:

1️⃣ [Cafe Name] - JBR
2️⃣ [Salon Name] - Downtown
3️⃣ [Gym Name] - Marina
4️⃣ [Restaurant Name] - DIFC
5️⃣ [Store Name] - Mall of Emirates

More coming every week!

Which one are you visiting first? 👇`,
    hashtags: ['NewPartners', 'NuqtaGrows', 'DubaiSpots', 'JustAdded'],
    cta: 'Find them in the app',
    visualIdea: 'Partner logos/photos with location tags',
    category: 'awareness',
    bestTime: '6:00 PM'
  },
  {
    id: 'w4d3',
    day: 24,
    date: 'Week 4',
    dayOfWeek: 'Wednesday',
    platform: 'all',
    type: 'reel',
    theme: 'Redemption Joy',
    title: 'First Redemption Moment',
    hook: 'The face when your coins become free stuff...',
    caption: `POV: Using your coins for the first time 🤩

That moment when the barista says:
"Your coins covered your entire order"

THERE IS NO BETTER FEELING.

This could be you this week! ☕🪙

When was your first redemption?`,
    hashtags: ['FirstRedemption', 'FreeCoffee', 'NuqtaMoment', 'RewardsFeel'],
    cta: 'Redeem your coins today',
    visualIdea: 'Happy reaction video, show redemption flow, celebration',
    category: 'social-proof',
    bestTime: '7:00 PM'
  },
  {
    id: 'w4d4',
    day: 25,
    date: 'Week 4',
    dayOfWeek: 'Thursday',
    platform: 'instagram',
    type: 'story',
    theme: 'Q&A',
    title: 'AMA Session',
    caption: `ASK US ANYTHING! 🙋‍♀️

Drop your questions about Nuqta:

• How does it work?
• Best earning tips?
• New features coming?
• Partner suggestions?

We'll answer everything in stories!

⏰ Q&A live for 24 hours`,
    hashtags: ['AMA', 'AskNuqta', 'QandA', 'NuqtaCommunity'],
    cta: 'Ask away!',
    visualIdea: 'Question box sticker, branded background',
    category: 'engagement',
    bestTime: '11:00 AM'
  },
  {
    id: 'w4d5',
    day: 26,
    date: 'Week 4',
    dayOfWeek: 'Friday',
    platform: 'all',
    type: 'reel',
    theme: 'Month Recap',
    title: '1 Month of Nuqta',
    hook: 'What a month it has been...',
    caption: `1 MONTH OF NUQTA! 🎂

The numbers are in:

👥 [X,000] users joined
🪙 [X] million coins distributed
💰 AED [X] saved by our community
🏪 [X] partner stores
❤️ [X] happy redemptions

This is just Month 1.

Thank you Dubai for believing in us!
The best is yet to come 🚀`,
    hashtags: ['OneMonth', 'NuqtaMilestone', 'ThankYouDubai', 'JustTheBeginning'],
    cta: 'Join the journey',
    visualIdea: 'Celebration video with animated stats, confetti, team shots',
    category: 'social-proof',
    bestTime: '12:00 PM'
  },
  {
    id: 'w4d6',
    day: 27,
    date: 'Week 4',
    dayOfWeek: 'Saturday',
    platform: 'instagram',
    type: 'post',
    theme: 'Coming Soon',
    title: 'Sneak Peek',
    caption: `SNEAK PEEK 👀

Something exciting is coming to Nuqta...

Can you guess what it is?

Hint: 🎁 + 🎰 = ?

Comment your guesses below!
First correct answer wins 500 bonus coins 🪙`,
    hashtags: ['ComingSoon', 'SneakPeek', 'NewFeature', 'GuessAndWin'],
    cta: 'Guess in comments!',
    visualIdea: 'Teaser graphic with hidden elements, mystery reveal style',
    category: 'engagement',
    bestTime: '4:00 PM'
  },
  {
    id: 'w4d7',
    day: 28,
    date: 'Week 4',
    dayOfWeek: 'Sunday',
    platform: 'all',
    type: 'reel',
    theme: 'Call to Action',
    title: 'Your Turn to Join',
    hook: 'If you are still not on Nuqta...',
    caption: `If you're STILL not on Nuqta...

What are you waiting for?

✅ 10,000+ users earning
✅ 100+ partner stores
✅ AED 100,000+ saved by community
✅ 100 free coins when you join

Every day without Nuqta = money left on the table.

Download now. Start earning.
Your wallet will thank you later 🪙

Link in bio!`,
    hashtags: ['JoinNuqta', 'StopWaiting', 'StartEarning', 'DubaiApp'],
    cta: 'Download NOW!',
    visualIdea: 'Urgent, FOMO-inducing, countdown style, show everything they are missing',
    category: 'promotion',
    bestTime: '5:00 PM'
  },

  // Week 5 (Days 29-30)
  {
    id: 'w5d1',
    day: 29,
    date: 'Week 5',
    dayOfWeek: 'Monday',
    platform: 'instagram',
    type: 'carousel',
    theme: 'Monthly Summary',
    title: 'Month 1 Highlights',
    caption: `MONTH 1: THE HIGHLIGHTS 📸

Swipe through our favorite moments:

1️⃣ Launch day excitement
2️⃣ First 1,000 users
3️⃣ Partner grand openings
4️⃣ Community love
5️⃣ Behind the scenes

Thank you for an incredible first month!

What was YOUR favorite Nuqta moment? 💛`,
    hashtags: ['MonthlyRecap', 'NuqtaHighlights', 'CommunityLove', 'ThankYou'],
    cta: 'Share your moment!',
    visualIdea: 'Photo compilation carousel with captions',
    category: 'social-proof',
    bestTime: '7:00 PM'
  },
  {
    id: 'w5d2',
    day: 30,
    date: 'Week 5',
    dayOfWeek: 'Tuesday',
    platform: 'all',
    type: 'reel',
    theme: 'Future Vision',
    title: 'Month 2 Preview',
    hook: 'Month 1 was just the warm-up...',
    caption: `Month 1 was just the warm-up...

MONTH 2 COMING UP:

🆕 New partner categories
🎁 Surprise features
🏆 Bigger rewards
🎉 Special events
🤝 More ways to earn

Stay tuned. Stay earning.

The Nuqta journey continues! 🚀🪙`,
    hashtags: ['Month2Preview', 'WhatsComing', 'NuqtaGrows', 'StayTuned'],
    cta: 'Turn on notifications!',
    visualIdea: 'Hype video with quick cuts, teaser reveals, building excitement',
    category: 'awareness',
    bestTime: '6:00 PM'
  }
];

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  'awareness': { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
  'education': { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/30' },
  'social-proof': { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30' },
  'promotion': { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30' },
  'engagement': { bg: 'bg-pink-500/10', text: 'text-pink-400', border: 'border-pink-500/30' },
  'behind-scenes': { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/30' },
};

const platformIcons: Record<string, React.ElementType> = {
  instagram: Instagram,
  tiktok: Video,
  linkedin: FileText,
  all: Sparkles,
};

const Layers = ({ className, size }: { className?: string; size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
    <polyline points="2 17 12 22 22 17"></polyline>
    <polyline points="2 12 12 17 22 12"></polyline>
  </svg>
);

const typeIcons: Record<string, React.ElementType> = {
  reel: Video,
  post: Image,
  story: Clock,
  carousel: Layers,
};

export default function ContentCalendarPage() {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedPost, setExpandedPost] = useState<string | null>(null);

  const weeks = [
    { week: 1, title: 'Launch & Awareness', days: '1-7' },
    { week: 2, title: 'Education & Social Proof', days: '8-14' },
    { week: 3, title: 'Promotions & Growth', days: '15-21' },
    { week: 4, title: 'Retention & Momentum', days: '22-28' },
    { week: 5, title: 'Monthly Recap', days: '29-30' },
  ];

  const weekPosts = contentCalendar.filter(post => {
    if (selectedWeek === 1) return post.day >= 1 && post.day <= 7;
    if (selectedWeek === 2) return post.day >= 8 && post.day <= 14;
    if (selectedWeek === 3) return post.day >= 15 && post.day <= 21;
    if (selectedWeek === 4) return post.day >= 22 && post.day <= 28;
    if (selectedWeek === 5) return post.day >= 29 && post.day <= 30;
    return false;
  });

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
            <span className="text-slate-400">Content Calendar</span>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 rounded-full border border-pink-500/30 mb-4">
            <Calendar className="text-pink-400" size={16} />
            <span className="text-pink-400 text-sm font-medium">30-Day Launch Calendar</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Content Calendar</h1>
          <p className="text-slate-400">Complete posting schedule for launch month</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl p-4 border border-pink-500/30 text-center">
            <Calendar className="text-pink-400 mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-white">30</div>
            <div className="text-slate-400 text-xs">Days</div>
          </div>
          <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-xl p-4 border border-purple-500/30 text-center">
            <Video className="text-purple-400 mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-white">{contentCalendar.filter(p => p.type === 'reel').length}</div>
            <div className="text-slate-400 text-xs">Reels</div>
          </div>
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-4 border border-blue-500/30 text-center">
            <Image className="text-blue-400 mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-white">{contentCalendar.filter(p => p.type === 'carousel').length}</div>
            <div className="text-slate-400 text-xs">Carousels</div>
          </div>
          <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl p-4 border border-amber-500/30 text-center">
            <Clock className="text-amber-400 mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-white">{contentCalendar.filter(p => p.type === 'story').length}</div>
            <div className="text-slate-400 text-xs">Stories</div>
          </div>
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-4 border border-green-500/30 text-center">
            <FileText className="text-green-400 mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-white">{contentCalendar.filter(p => p.type === 'post').length}</div>
            <div className="text-slate-400 text-xs">Posts</div>
          </div>
        </div>

        {/* Week Selector */}
        <div className="flex overflow-x-auto gap-2 pb-4 mb-6">
          {weeks.map(week => (
            <button
              key={week.week}
              onClick={() => setSelectedWeek(week.week)}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                selectedWeek === week.week
                  ? 'bg-[#c9a227] text-black'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-white/10'
              }`}
            >
              <div className="font-bold">Week {week.week}</div>
              <div className="text-xs opacity-75">Days {week.days}</div>
            </button>
          ))}
        </div>

        {/* Week Title */}
        <div className="bg-gradient-to-r from-[#c9a227]/20 to-amber-500/20 rounded-xl p-4 border border-[#c9a227]/30 mb-6">
          <h2 className="text-xl font-bold text-white">
            Week {selectedWeek}: {weeks.find(w => w.week === selectedWeek)?.title}
          </h2>
          <p className="text-slate-400 text-sm">
            {weekPosts.length} posts scheduled
          </p>
        </div>

        {/* Posts Grid */}
        <div className="space-y-4">
          {weekPosts.map(post => {
            const colors = categoryColors[post.category];
            const PlatformIcon = platformIcons[post.platform];
            const TypeIcon = typeIcons[post.type];
            const isExpanded = expandedPost === post.id;

            return (
              <div
                key={post.id}
                className={`rounded-xl border ${colors.border} overflow-hidden`}
              >
                <button
                  onClick={() => setExpandedPost(isExpanded ? null : post.id)}
                  className={`w-full p-4 flex items-center justify-between ${colors.bg} hover:bg-white/5 transition-all text-left`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-bold text-white">Day</span>
                      <span className="text-3xl font-bold text-[#c9a227]">{post.day}</span>
                    </div>
                    <div className="w-px h-12 bg-white/10" />
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center`}>
                        <PlatformIcon className={colors.text} size={20} />
                      </div>
                      <div>
                        <h3 className="text-white font-bold">{post.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`px-2 py-0.5 text-xs rounded ${colors.bg} ${colors.text}`}>
                            {post.type}
                          </span>
                          <span className="text-slate-500 text-xs">{post.dayOfWeek}</span>
                          <span className="text-slate-500 text-xs">• {post.bestTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`${colors.text} transition-transform ${isExpanded ? 'rotate-90' : ''}`} size={20} />
                </button>

                {isExpanded && (
                  <div className="p-4 border-t border-white/10 bg-black/20 space-y-4">
                    {/* Hook */}
                    {post.hook && (
                      <div className="bg-amber-500/10 rounded-lg p-3 border border-amber-500/30">
                        <span className="text-amber-400 text-xs font-bold uppercase">Hook</span>
                        <p className="text-white mt-1">&quot;{post.hook}&quot;</p>
                      </div>
                    )}

                    {/* Caption */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-400 text-sm font-medium">Caption</span>
                        <button
                          onClick={() => copyToClipboard(post.caption, post.id + '-caption')}
                          className="flex items-center gap-1 px-2 py-1 bg-white/10 rounded text-xs text-slate-300 hover:bg-white/20"
                        >
                          {copiedId === post.id + '-caption' ? <Check size={12} /> : <Copy size={12} />}
                          Copy
                        </button>
                      </div>
                      <div className="bg-black/30 rounded-lg p-4">
                        <pre className="text-slate-300 text-sm whitespace-pre-wrap font-sans">
                          {post.caption}
                        </pre>
                      </div>
                    </div>

                    {/* Hashtags */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-400 text-sm font-medium">Hashtags</span>
                        <button
                          onClick={() => copyToClipboard(post.hashtags.map(h => '#' + h).join(' '), post.id + '-hashtags')}
                          className="flex items-center gap-1 px-2 py-1 bg-white/10 rounded text-xs text-slate-300 hover:bg-white/20"
                        >
                          {copiedId === post.id + '-hashtags' ? <Check size={12} /> : <Copy size={12} />}
                          Copy All
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {post.hashtags.map(tag => (
                          <span key={tag} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Visual Idea */}
                    <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/30">
                      <span className="text-purple-400 text-xs font-bold uppercase flex items-center gap-1">
                        <Camera size={12} /> Visual Idea
                      </span>
                      <p className="text-slate-300 text-sm mt-1">{post.visualIdea}</p>
                    </div>

                    {/* CTA */}
                    <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/30">
                      <span className="text-green-400 text-xs font-bold uppercase">Call to Action</span>
                      <p className="text-white mt-1">{post.cta}</p>
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> Best time: {post.bestTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Tag size={12} /> {post.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Content Mix Guide */}
        <div className="mt-12 bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Target className="text-[#c9a227]" size={20} />
            Content Mix Strategy
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(categoryColors).map(([category, colors]) => {
              const count = contentCalendar.filter(p => p.category === category).length;
              const percentage = Math.round((count / contentCalendar.length) * 100);
              return (
                <div key={category} className={`${colors.bg} rounded-lg p-4 border ${colors.border}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`${colors.text} font-bold capitalize`}>{category.replace('-', ' ')}</span>
                    <span className={`${colors.text} text-sm`}>{count} posts</span>
                  </div>
                  <div className="h-2 bg-black/30 rounded-full overflow-hidden">
                    <div className={`h-full ${colors.bg.replace('/10', '')}`} style={{ width: `${percentage}%` }} />
                  </div>
                  <span className="text-slate-400 text-xs mt-1 block">{percentage}% of content</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Posting Tips */}
        <div className="mt-8 bg-gradient-to-r from-[#c9a227]/20 to-amber-500/20 rounded-xl p-6 border border-[#c9a227]/30">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Sparkles className="text-[#c9a227]" size={20} />
            Posting Best Practices
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/20 rounded-lg p-4">
              <h4 className="text-white font-bold mb-2">Timing</h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Instagram: 12pm, 6-7pm</li>
                <li>• TikTok: 7-9pm</li>
                <li>• LinkedIn: 10am weekdays</li>
                <li>• Stories: Throughout the day</li>
              </ul>
            </div>
            <div className="bg-black/20 rounded-lg p-4">
              <h4 className="text-white font-bold mb-2">Engagement</h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Reply to comments within 1 hour</li>
                <li>• Use polls/questions in stories</li>
                <li>• Tag relevant accounts</li>
                <li>• Cross-post to all platforms</li>
              </ul>
            </div>
            <div className="bg-black/20 rounded-lg p-4">
              <h4 className="text-white font-bold mb-2">Optimization</h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Use trending audio on Reels</li>
                <li>• First 3 seconds = hook</li>
                <li>• Include CTA in every post</li>
                <li>• A/B test caption styles</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
