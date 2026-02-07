'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Copy,
  Check,
  MessageCircle,
  Phone,
  Mail,
  AlertTriangle,
  HelpCircle,
  UserX,
  CreditCard,
  Store,
  Smartphone,
  Gift,
  RefreshCw,
  Shield,
  Clock,
  Star,
  ThumbsUp,
  ThumbsDown,
  Search,
  Filter,
  ChevronDown,
  ChevronRight,
  Headphones,
  Zap,
  Heart
} from 'lucide-react';

interface Template {
  id: string;
  title: string;
  category: string;
  channel: 'whatsapp' | 'email' | 'phone' | 'in-app';
  scenario: string;
  template: string;
  arabicTemplate?: string;
  tags: string[];
  priority: 'high' | 'medium' | 'low';
}

const supportTemplates: Template[] = [
  // User Support - Account Issues
  {
    id: 'u1',
    title: 'Welcome New User',
    category: 'User - Onboarding',
    channel: 'whatsapp',
    scenario: 'User just signed up for Nuqta app',
    template: `Hi [Name]! 👋

Welcome to Nuqta! 🎉

You're now part of Dubai's smartest rewards community. Here's how to start earning:

1️⃣ Scan QR at partner stores
2️⃣ Pay normally (cash/card)
3️⃣ Earn coins automatically
4️⃣ Redeem coins on next visit!

Your first purchase = BONUS 50 coins! 🪙

Questions? Just reply here - we're always happy to help!

Team Nuqta`,
    arabicTemplate: `مرحباً [الاسم]! 👋

أهلاً بك في نقطة! 🎉

أنت الآن جزء من أذكى مجتمع مكافآت في دبي.

١- امسح رمز QR في المتاجر الشريكة
٢- ادفع بشكل عادي
٣- اكسب النقاط تلقائياً
٤- استبدل النقاط في زيارتك القادمة!

أول عملية شراء = 50 نقطة مجانية! 🪙

فريق نقطة`,
    tags: ['new user', 'welcome', 'onboarding'],
    priority: 'high'
  },
  {
    id: 'u2',
    title: 'Account Login Issue',
    category: 'User - Account',
    channel: 'whatsapp',
    scenario: 'User cannot login to their account',
    template: `Hi [Name],

Sorry you're having trouble logging in! Let me help:

🔐 Quick fixes:
1. Check if you're using the correct phone number
2. Make sure you have a stable internet connection
3. Try closing and reopening the app

If that doesn't work:
→ Tap "Forgot Password" on the login screen
→ We'll send a new OTP to your registered number

Still stuck? Share your registered phone number and I'll check your account status right away.

Team Nuqta`,
    tags: ['login', 'password', 'OTP', 'access'],
    priority: 'high'
  },
  {
    id: 'u3',
    title: 'OTP Not Received',
    category: 'User - Account',
    channel: 'whatsapp',
    scenario: 'User is not receiving OTP for verification',
    template: `Hi [Name],

I understand OTP delays can be frustrating. Let's fix this:

Please check:
✅ Phone number is correct with country code (+971)
✅ You have network signal
✅ SMS inbox isn't full
✅ No message blocking apps

If still not received after 2 minutes:
→ Tap "Resend OTP" in the app
→ Check spam/blocked messages folder

Let me verify your number: Is it +971 XX XXX XXXX?

I'll manually trigger an OTP for you if needed.

Team Nuqta`,
    tags: ['OTP', 'verification', 'SMS', 'phone'],
    priority: 'high'
  },
  {
    id: 'u4',
    title: 'Coins Not Credited',
    category: 'User - Transactions',
    channel: 'whatsapp',
    scenario: 'User made a purchase but coins were not added',
    template: `Hi [Name],

Thanks for reaching out! I'll help you get your coins sorted right away.

To investigate, please share:
📍 Store name where you made the purchase
📅 Date and approximate time
💰 Transaction amount
🧾 Receipt photo (if available)

Coins usually appear within 5 minutes, but sometimes there's a small delay during peak hours.

I'll check with the merchant and update you within 30 minutes.

Team Nuqta`,
    tags: ['coins', 'transaction', 'missing', 'not credited'],
    priority: 'high'
  },
  {
    id: 'u5',
    title: 'Coins Credited - Resolved',
    category: 'User - Transactions',
    channel: 'whatsapp',
    scenario: 'Follow-up after coins issue is resolved',
    template: `Hi [Name],

Great news! ✅

Your [X] coins from [Store Name] have been credited to your account.

Current balance: [XXX] coins 🪙

You can redeem these at any Nuqta partner store on your next visit!

Sorry for the brief delay - thanks for your patience.

Happy earning! 🎉

Team Nuqta`,
    tags: ['coins', 'resolved', 'credited'],
    priority: 'medium'
  },
  {
    id: 'u6',
    title: 'Redemption Issue',
    category: 'User - Redemption',
    channel: 'whatsapp',
    scenario: 'User had problem redeeming coins',
    template: `Hi [Name],

Sorry to hear about the redemption issue! Let me help.

Please share:
📍 Which store were you at?
🪙 How many coins did you try to redeem?
❌ What error message appeared (if any)?

Quick checks:
• Minimum redemption is usually [X] coins
• Some stores have maximum redemption limits
• Coins must be at least 24 hours old to redeem

I'll look into this immediately and get back to you.

Team Nuqta`,
    tags: ['redemption', 'coins', 'error', 'redeem'],
    priority: 'high'
  },
  {
    id: 'u7',
    title: 'Refund Request - User',
    category: 'User - Refunds',
    channel: 'whatsapp',
    scenario: 'User requests refund for a purchase',
    template: `Hi [Name],

I understand you'd like a refund. Here's how it works with Nuqta:

📌 Nuqta is a rewards platform - actual purchases are made directly with merchants.

For product/service refunds:
→ Please contact the store directly
→ If they process a refund, your Nuqta coins earned on that transaction will be automatically adjusted

For coins-related issues:
→ If you accidentally redeemed coins, please let me know which store and amount
→ We'll review and process within 24 hours

How can I assist you further?

Team Nuqta`,
    tags: ['refund', 'return', 'money back'],
    priority: 'high'
  },
  {
    id: 'u8',
    title: 'App Crash/Bug Report',
    category: 'User - Technical',
    channel: 'whatsapp',
    scenario: 'User reports app crashing or technical issues',
    template: `Hi [Name],

Sorry for the trouble! Let me help fix this.

Quick troubleshooting:
1️⃣ Close the app completely and reopen
2️⃣ Check if you have the latest version (App Store/Play Store)
3️⃣ Try clearing app cache (Settings → Apps → Nuqta → Clear Cache)
4️⃣ Restart your phone

If issue persists, please share:
📱 Phone model:
📲 App version:
🔄 What were you doing when it crashed?

Our tech team monitors these reports and releases fixes regularly.

Team Nuqta`,
    tags: ['crash', 'bug', 'technical', 'app issue'],
    priority: 'medium'
  },
  {
    id: 'u9',
    title: 'Store Not Found',
    category: 'User - Discovery',
    channel: 'whatsapp',
    scenario: 'User cannot find a store in the app',
    template: `Hi [Name],

Thanks for asking! Let me help you find partner stores.

🔍 In the app:
→ Tap "Explore" to see all partners
→ Use filters for category or area
→ Enable location for "Near Me" stores

If a specific store isn't showing:
• They might be a new partner (updating soon!)
• Try searching by exact name
• Check if you're in the right area

Which store are you looking for? I'll check if they're a partner.

Team Nuqta`,
    tags: ['store', 'find', 'search', 'partner'],
    priority: 'low'
  },
  {
    id: 'u10',
    title: 'Account Deletion Request',
    category: 'User - Account',
    channel: 'whatsapp',
    scenario: 'User wants to delete their account',
    template: `Hi [Name],

I'm sorry to see you go! 😢

Before we proceed, please note:
⚠️ All your coins will be permanently lost
⚠️ Transaction history will be deleted
⚠️ This action cannot be undone

If you're sure, please confirm:
✅ "I want to delete my Nuqta account"

May I ask why you're leaving? Your feedback helps us improve:
• Not enough partner stores?
• App issues?
• Something else?

If there's anything we can do to keep you, please let us know!

Team Nuqta`,
    tags: ['delete', 'account', 'close', 'remove'],
    priority: 'high'
  },

  // Merchant Support
  {
    id: 'm1',
    title: 'Welcome New Merchant',
    category: 'Merchant - Onboarding',
    channel: 'email',
    scenario: 'New merchant just signed up',
    template: `Subject: Welcome to Nuqta Partner Program! 🎉

Dear [Business Name] Team,

Congratulations on joining Nuqta! You're now part of Dubai's fastest-growing rewards network.

WHAT'S NEXT:

📅 Onboarding Call: [Date/Time]
Our team will walk you through:
• POS system setup
• Dashboard access
• QR code placement
• Staff training basics

🎁 YOUR STARTER KIT (arriving in 2-3 days):
• 2x QR code standees
• Table talkers
• Window sticker
• Staff training cards

📊 ACCESS YOUR DASHBOARD:
URL: dashboard.nuqta.app
Email: [their email]
Temporary Password: [password]
(Please change on first login)

Questions? Your dedicated account manager is:
[Name] - [Phone] - [Email]

We're excited to grow together!

Best regards,
Nuqta Partnerships Team`,
    tags: ['merchant', 'welcome', 'onboarding', 'new'],
    priority: 'high'
  },
  {
    id: 'm2',
    title: 'POS Issue - Merchant',
    category: 'Merchant - Technical',
    channel: 'whatsapp',
    scenario: 'Merchant reports POS integration issue',
    template: `Hi [Name],

Sorry for the POS trouble! Let's fix this quickly.

🔧 Quick checks:
1. Is the POS connected to internet/WiFi?
2. Have you tried restarting the POS terminal?
3. Is the Nuqta app on POS updated?

If still not working:
📞 Call our tech support: +971 XX XXX XXXX
⏰ Available: 9 AM - 10 PM daily

For urgent issues during business hours, we can send a technician within 2 hours.

Please share:
• POS model/brand
• Error message (if any)
• When did it stop working?

I'll escalate this immediately.

Team Nuqta`,
    tags: ['POS', 'technical', 'merchant', 'integration'],
    priority: 'high'
  },
  {
    id: 'm3',
    title: 'Dashboard Access Issue',
    category: 'Merchant - Technical',
    channel: 'whatsapp',
    scenario: 'Merchant cannot access dashboard',
    template: `Hi [Name],

I'll help you access your dashboard right away!

🔗 Dashboard: dashboard.nuqta.app

If you've forgotten your password:
→ Click "Forgot Password"
→ Enter your registered email
→ Check inbox (and spam folder)

If email not recognized:
Please confirm your registered business email and I'll reset it manually.

Once logged in, you can:
📊 View real-time transaction data
👥 See customer insights
📈 Track your performance
💰 Check settlement reports

Need a quick demo? I can schedule a 15-min call.

Team Nuqta`,
    tags: ['dashboard', 'login', 'access', 'merchant'],
    priority: 'medium'
  },
  {
    id: 'm4',
    title: 'Settlement Query',
    category: 'Merchant - Finance',
    channel: 'whatsapp',
    scenario: 'Merchant asking about payment settlement',
    template: `Hi [Name],

Happy to clarify your settlement details!

📅 Settlement Schedule:
• Settlements processed: Weekly (every Sunday)
• Funds arrive: Within 2-3 business days
• Minimum threshold: AED 100

📊 Your Recent Settlements:
[To be filled with actual data]

💰 Current Pending Balance: AED [XXX]
📆 Next Settlement Date: [Date]

To view detailed breakdown:
→ Dashboard → Finance → Settlements

If you notice any discrepancy, please share:
• Transaction date range
• Expected vs received amount

I'll investigate immediately.

Team Nuqta`,
    tags: ['settlement', 'payment', 'finance', 'money'],
    priority: 'high'
  },
  {
    id: 'm5',
    title: 'Marketing Materials Request',
    category: 'Merchant - Materials',
    channel: 'whatsapp',
    scenario: 'Merchant needs additional QR codes or materials',
    template: `Hi [Name],

Of course! Happy to send additional materials.

📦 Available (FREE):
• QR Code Standees
• Table Talkers
• Window Stickers
• Staff Training Cards
• Promo Posters

What do you need and how many?

📍 Delivery Address:
[Confirm address]

🚚 Delivery: Within 2-3 business days

Also, would you like us to schedule a quick photoshoot for your social media? It's included in your package! 📸

Team Nuqta`,
    tags: ['materials', 'QR', 'standee', 'marketing'],
    priority: 'low'
  },
  {
    id: 'm6',
    title: 'Staff Training Request',
    category: 'Merchant - Training',
    channel: 'whatsapp',
    scenario: 'Merchant needs staff training',
    template: `Hi [Name],

Great initiative! Well-trained staff = more engaged customers = more repeat visits! 🎯

🎓 Training Options:

1️⃣ Video Training (Send Now)
• 5-minute video covering all basics
• Can share in staff WhatsApp group

2️⃣ On-Site Training (Schedule)
• 30-minute session at your location
• Best for new staff or full team

3️⃣ Quick Reference Cards
• Pocket cards with step-by-step guide
• Already in your starter kit!

Which works best for you?

Key points we'll cover:
✅ How to scan customer QR
✅ Processing coin redemptions
✅ Handling common questions
✅ Troubleshooting tips

Team Nuqta`,
    tags: ['training', 'staff', 'education', 'merchant'],
    priority: 'medium'
  },
  {
    id: 'm7',
    title: 'Coin Rate Change Request',
    category: 'Merchant - Settings',
    channel: 'whatsapp',
    scenario: 'Merchant wants to change their coin earning rate',
    template: `Hi [Name],

I can help you adjust your coin settings!

📊 Your Current Settings:
• Earning Rate: [X]% coins per transaction
• Redemption Value: 1 coin = AED [X]
• Max Redemption: [X]% per bill

⚙️ To change rates:
You can do this directly in your dashboard:
→ Settings → Coin Configuration

OR share what you'd like and I'll update:
• New earning rate: ____%
• New redemption value: ____
• Any caps or limits: ____

💡 Pro Tip: Higher earning rates = more customer engagement!
Average partners offer 5-10% in coins.

Changes take effect immediately.

Team Nuqta`,
    tags: ['coins', 'rate', 'settings', 'configuration'],
    priority: 'medium'
  },
  {
    id: 'm8',
    title: 'Customer Dispute',
    category: 'Merchant - Disputes',
    channel: 'whatsapp',
    scenario: 'Merchant reports issue with customer claim',
    template: `Hi [Name],

I understand there's a customer dispute. Let me investigate.

📋 Please share:
• Customer name or phone number
• Transaction date and amount
• What is the customer claiming?
• Your side of the situation

🔍 I'll check:
• Transaction records in our system
• QR scan logs
• Any technical issues during that time

Timeline: I'll review and respond within 2 hours.

Our policy:
• We always verify both sides fairly
• Transaction logs are definitive proof
• We protect our merchant partners from false claims

Team Nuqta`,
    tags: ['dispute', 'customer', 'complaint', 'issue'],
    priority: 'high'
  },
  {
    id: 'm9',
    title: 'Contract Renewal',
    category: 'Merchant - Contract',
    channel: 'email',
    scenario: 'Merchant contract coming up for renewal',
    template: `Subject: Your Nuqta Partnership - Renewal Time! 🎉

Dear [Business Name] Team,

Your partnership with Nuqta has been amazing!

📈 YOUR YEAR IN REVIEW:
• Total Transactions: [XXX]
• Customers Served: [XXX]
• Repeat Customer Rate: [XX]%
• Total Coins Distributed: [XXX]

🎁 RENEWAL OFFER:
As a valued partner, we're pleased to offer:
• Same great rate: [X]% platform fee
• FREE: Marketing package worth AED [X]
• BONUS: Featured spot in app for 1 month
• NEW: Enhanced analytics dashboard

📝 To Renew:
Simply reply "RENEW" and we'll send the updated agreement.

Current agreement expires: [Date]

Questions? Your account manager [Name] is happy to discuss: [Phone]

Here's to another successful year together!

Best regards,
Nuqta Partnerships Team`,
    tags: ['renewal', 'contract', 'partnership'],
    priority: 'high'
  },
  {
    id: 'm10',
    title: 'Merchant Churn Prevention',
    category: 'Merchant - Retention',
    channel: 'whatsapp',
    scenario: 'Merchant considering leaving or shows low engagement',
    template: `Hi [Name],

I noticed [Business Name] hasn't had many transactions lately. Just wanted to check in!

Is everything okay?

Common reasons partners see slow periods:
• Staff not prompting customers to scan
• QR codes not visible enough
• Need fresh marketing push

🎁 We'd like to help:
• FREE social media feature this week
• Additional QR standees for better visibility
• Staff re-training session
• Custom promotion for your customers

What would help most?

Also, I'd love to hear any feedback - positive or negative. Your input helps us improve!

Team Nuqta`,
    tags: ['churn', 'retention', 'inactive', 'engagement'],
    priority: 'high'
  },

  // General Templates
  {
    id: 'g1',
    title: 'Escalation to Manager',
    category: 'Internal - Escalation',
    channel: 'whatsapp',
    scenario: 'Issue needs manager attention',
    template: `Hi [Name],

I understand this is frustrating and important to you.

I've escalated your case to my manager who will personally review it.

📞 You'll receive a call from [Manager Name] within [X] hours.

Your case reference: #[XXX]

In the meantime, is there anything else I can help with?

We appreciate your patience and value your [business/loyalty].

Team Nuqta`,
    tags: ['escalation', 'manager', 'priority'],
    priority: 'high'
  },
  {
    id: 'g2',
    title: 'Positive Feedback Response',
    category: 'General',
    channel: 'whatsapp',
    scenario: 'User or merchant gives positive feedback',
    template: `Hi [Name],

Wow, thank you so much for the kind words! 😊

Your feedback means the world to our team. We're building Nuqta to make rewards simple and valuable - and messages like yours keep us motivated!

🌟 Would you mind sharing your experience?
• A quick Google review helps others discover us
• Or share your Nuqta story on social media - tag us @nuqtaapp!

As a thank you, I'm adding BONUS [50] coins to your account! 🪙

Keep earning, keep saving!

Team Nuqta`,
    tags: ['feedback', 'positive', 'thank you', 'review'],
    priority: 'low'
  },
  {
    id: 'g3',
    title: 'Complaint Response',
    category: 'General',
    channel: 'whatsapp',
    scenario: 'User or merchant files complaint',
    template: `Hi [Name],

I'm truly sorry about your experience. This isn't the standard we aim for.

Thank you for bringing this to our attention - it helps us improve.

I've noted your feedback about:
[Summarize complaint]

Here's what we're doing:
1. [Immediate action]
2. [Follow-up action]
3. [Preventive measure]

I'll personally follow up within [24 hours] to ensure this is resolved.

Your patience means a lot. We'll make this right.

Team Nuqta`,
    tags: ['complaint', 'issue', 'sorry', 'problem'],
    priority: 'high'
  },
  {
    id: 'g4',
    title: 'Feature Request Response',
    category: 'General',
    channel: 'whatsapp',
    scenario: 'User suggests a new feature',
    template: `Hi [Name],

Great suggestion! 💡

I love hearing ideas from our community - you're helping shape Nuqta's future!

I've shared your suggestion with our product team:
"[Feature request summary]"

While I can't promise timelines, I can tell you:
• We review all suggestions weekly
• Popular requests get prioritized
• You'll be notified when we ship it!

Any other ideas? We're all ears!

Team Nuqta`,
    tags: ['feature', 'suggestion', 'request', 'idea'],
    priority: 'low'
  },
  {
    id: 'g5',
    title: 'Out of Office / Delayed Response',
    category: 'General',
    channel: 'whatsapp',
    scenario: 'Need to inform about delayed response',
    template: `Hi [Name],

Thank you for reaching out!

Due to high volume, responses are slightly delayed today. But don't worry - your message is important to us!

⏰ Expected response time: Within [X] hours

For urgent matters:
📞 Hotline: +971 XX XXX XXXX
🌐 FAQ: app.nuqta.app/help

We'll get back to you as soon as possible.

Team Nuqta`,
    tags: ['delayed', 'waiting', 'response time'],
    priority: 'low'
  },
  {
    id: 'g6',
    title: 'Partnership Inquiry Response',
    category: 'General',
    channel: 'email',
    scenario: 'Business inquires about partnering with Nuqta',
    template: `Subject: Re: Partnership with Nuqta - Let's Talk! 🤝

Hi [Name],

Thank you for your interest in partnering with Nuqta!

We'd love to learn more about [Business Name] and explore how we can grow together.

🎯 WHAT WE OFFER PARTNERS:
• Zero setup cost
• Free POS integration
• Dedicated marketing support
• Real-time analytics dashboard
• Featured app placement

📞 NEXT STEP:
Let's schedule a quick 15-minute call:
[Calendar link]

Or reply with your preferred time and I'll call you.

Looking forward to connecting!

Best regards,
[Your Name]
Nuqta Partnerships Team
+971 XX XXX XXXX`,
    tags: ['partnership', 'inquiry', 'new business'],
    priority: 'high'
  },

  // Phone Call Scripts
  {
    id: 'p1',
    title: 'Inbound Call - Greeting',
    category: 'Phone - Scripts',
    channel: 'phone',
    scenario: 'Answering incoming support call',
    template: `"Thank you for calling Nuqta! This is [Your Name], how can I help you today?"

[Listen to customer]

"I'd be happy to help you with that. Let me just verify your account.
Can I have your registered phone number please?"

[Verify identity]

"Perfect, I can see your account. Let me look into [their issue] for you."

[Resolve or escalate]

"Is there anything else I can help you with today?"

[End call]

"Thank you for being part of Nuqta! Have a great day!"`,
    tags: ['phone', 'call', 'script', 'inbound'],
    priority: 'medium'
  },
  {
    id: 'p2',
    title: 'Outbound Call - Merchant Follow-up',
    category: 'Phone - Scripts',
    channel: 'phone',
    scenario: 'Calling merchant for follow-up',
    template: `"Hi, this is [Your Name] from Nuqta. Am I speaking with [Contact Name]?"

[If yes]

"Great! I'm calling to follow up on [reason - onboarding/issue/check-in].

How has your experience been so far?"

[Listen and respond]

"That's great to hear / I understand, let me help with that."

[Address any concerns]

"Just a reminder - if you ever need anything:
- Your account manager is [Name]
- WhatsApp support: [Number]
- We're here 9 AM to 10 PM daily"

"Any questions before I go?"

"Perfect! Thank you for partnering with Nuqta. Have a wonderful day!"`,
    tags: ['phone', 'outbound', 'merchant', 'follow-up'],
    priority: 'medium'
  }
];

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  'User - Onboarding': { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/30' },
  'User - Account': { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
  'User - Transactions': { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30' },
  'User - Redemption': { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30' },
  'User - Refunds': { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/30' },
  'User - Technical': { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/30' },
  'User - Discovery': { bg: 'bg-indigo-500/10', text: 'text-indigo-400', border: 'border-indigo-500/30' },
  'Merchant - Onboarding': { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30' },
  'Merchant - Technical': { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/30' },
  'Merchant - Finance': { bg: 'bg-lime-500/10', text: 'text-lime-400', border: 'border-lime-500/30' },
  'Merchant - Materials': { bg: 'bg-teal-500/10', text: 'text-teal-400', border: 'border-teal-500/30' },
  'Merchant - Training': { bg: 'bg-sky-500/10', text: 'text-sky-400', border: 'border-sky-500/30' },
  'Merchant - Settings': { bg: 'bg-violet-500/10', text: 'text-violet-400', border: 'border-violet-500/30' },
  'Merchant - Disputes': { bg: 'bg-rose-500/10', text: 'text-rose-400', border: 'border-rose-500/30' },
  'Merchant - Contract': { bg: 'bg-fuchsia-500/10', text: 'text-fuchsia-400', border: 'border-fuchsia-500/30' },
  'Merchant - Retention': { bg: 'bg-pink-500/10', text: 'text-pink-400', border: 'border-pink-500/30' },
  'Internal - Escalation': { bg: 'bg-slate-500/10', text: 'text-slate-400', border: 'border-slate-500/30' },
  'General': { bg: 'bg-gray-500/10', text: 'text-gray-400', border: 'border-gray-500/30' },
  'Phone - Scripts': { bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/30' },
};

const channelIcons: Record<string, React.ElementType> = {
  whatsapp: MessageCircle,
  email: Mail,
  phone: Phone,
  'in-app': Smartphone,
};

export default function SupportTemplatesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedChannel, setSelectedChannel] = useState<string>('all');
  const [expandedTemplate, setExpandedTemplate] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ['all', ...Array.from(new Set(supportTemplates.map(t => t.category)))];
  const channels = ['all', 'whatsapp', 'email', 'phone', 'in-app'];

  const filteredTemplates = supportTemplates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.scenario.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    const matchesChannel = selectedChannel === 'all' || template.channel === selectedChannel;
    return matchesSearch && matchesCategory && matchesChannel;
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
            <span className="text-slate-400">Support Response Templates</span>
          </div>
          <Link
            href="/sop"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="text-sm">SOPs</span>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/30 mb-4">
            <Headphones className="text-cyan-400" size={16} />
            <span className="text-cyan-400 text-sm font-medium">Customer Support</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Support Response Templates</h1>
          <p className="text-slate-400">Ready-to-use templates for user and merchant support</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/30 text-center">
            <MessageCircle className="text-green-400 mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-green-400">{supportTemplates.filter(t => t.channel === 'whatsapp').length}</div>
            <div className="text-slate-400 text-xs">WhatsApp</div>
          </div>
          <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/30 text-center">
            <Mail className="text-blue-400 mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-blue-400">{supportTemplates.filter(t => t.channel === 'email').length}</div>
            <div className="text-slate-400 text-xs">Email</div>
          </div>
          <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/30 text-center">
            <Phone className="text-amber-400 mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-amber-400">{supportTemplates.filter(t => t.channel === 'phone').length}</div>
            <div className="text-slate-400 text-xs">Phone Scripts</div>
          </div>
          <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/30 text-center">
            <Zap className="text-purple-400 mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-purple-400">{supportTemplates.length}</div>
            <div className="text-slate-400 text-xs">Total Templates</div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search templates, scenarios, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-black/30 rounded-lg border border-white/10 text-white placeholder:text-slate-500 focus:border-[#c9a227]/50 focus:outline-none"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-black/30 rounded-lg border border-white/10 text-white focus:border-[#c9a227]/50 focus:outline-none"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat} className="bg-slate-900">
                    {cat === 'all' ? 'All Categories' : cat}
                  </option>
                ))}
              </select>
              <select
                value={selectedChannel}
                onChange={(e) => setSelectedChannel(e.target.value)}
                className="px-4 py-2 bg-black/30 rounded-lg border border-white/10 text-white focus:border-[#c9a227]/50 focus:outline-none"
              >
                {channels.map(ch => (
                  <option key={ch} value={ch} className="bg-slate-900">
                    {ch === 'all' ? 'All Channels' : ch.charAt(0).toUpperCase() + ch.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="space-y-4">
          {filteredTemplates.map(template => {
            const colors = categoryColors[template.category] || categoryColors['General'];
            const ChannelIcon = channelIcons[template.channel];
            const isExpanded = expandedTemplate === template.id;

            return (
              <div
                key={template.id}
                className={`rounded-xl border ${colors.border} overflow-hidden transition-all`}
              >
                <button
                  onClick={() => setExpandedTemplate(isExpanded ? null : template.id)}
                  className={`w-full p-4 flex items-center justify-between ${colors.bg} hover:bg-white/5 transition-all text-left`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center`}>
                      <ChannelIcon className={colors.text} size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-white font-bold">{template.title}</h3>
                        {template.priority === 'high' && (
                          <span className="px-2 py-0.5 text-xs bg-red-500/20 text-red-400 rounded border border-red-500/30">High Priority</span>
                        )}
                      </div>
                      <p className="text-slate-400 text-sm">{template.scenario}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 text-xs rounded ${colors.bg} ${colors.text} border ${colors.border}`}>
                      {template.category}
                    </span>
                    {isExpanded ? (
                      <ChevronDown className={colors.text} size={20} />
                    ) : (
                      <ChevronRight className={colors.text} size={20} />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="p-4 border-t border-white/10 bg-black/20">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-slate-400 text-sm">Tags:</span>
                      {template.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 text-xs bg-white/5 text-slate-300 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="bg-black/30 rounded-lg p-4 relative">
                      <button
                        onClick={() => copyToClipboard(template.template, template.id)}
                        className="absolute top-2 right-2 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                      >
                        {copiedId === template.id ? (
                          <Check className="text-green-400" size={16} />
                        ) : (
                          <Copy className="text-slate-400" size={16} />
                        )}
                      </button>
                      <pre className="text-slate-300 text-sm whitespace-pre-wrap font-sans pr-10">
                        {template.template}
                      </pre>
                    </div>

                    {template.arabicTemplate && (
                      <div className="mt-4">
                        <h4 className="text-white font-bold mb-2">Arabic Version</h4>
                        <div className="bg-black/30 rounded-lg p-4 relative" dir="rtl">
                          <button
                            onClick={() => copyToClipboard(template.arabicTemplate!, template.id + '-ar')}
                            className="absolute top-2 left-2 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                          >
                            {copiedId === template.id + '-ar' ? (
                              <Check className="text-green-400" size={16} />
                            ) : (
                              <Copy className="text-slate-400" size={16} />
                            )}
                          </button>
                          <pre className="text-slate-300 text-sm whitespace-pre-wrap font-sans pl-10">
                            {template.arabicTemplate}
                          </pre>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <HelpCircle className="text-slate-500 mx-auto mb-4" size={48} />
            <p className="text-slate-400">No templates found matching your search</p>
          </div>
        )}

        {/* Quick Reference */}
        <div className="mt-12 bg-gradient-to-r from-[#c9a227]/20 to-amber-500/20 rounded-xl p-6 border border-[#c9a227]/30">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Star className="text-[#c9a227]" size={20} />
            Response Best Practices
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/20 rounded-lg p-4">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <Clock size={16} className="text-[#c9a227]" /> Response Times
              </h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• WhatsApp: Under 5 minutes</li>
                <li>• Email: Under 2 hours</li>
                <li>• Phone: Answer within 3 rings</li>
                <li>• Escalations: 30 min callback</li>
              </ul>
            </div>
            <div className="bg-black/20 rounded-lg p-4">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <Heart size={16} className="text-[#c9a227]" /> Tone Guidelines
              </h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Friendly but professional</li>
                <li>• Use customer&apos;s name</li>
                <li>• Acknowledge their frustration</li>
                <li>• Always offer next steps</li>
              </ul>
            </div>
            <div className="bg-black/20 rounded-lg p-4">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <Shield size={16} className="text-[#c9a227]" /> Escalation Triggers
              </h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Financial disputes &gt;AED 500</li>
                <li>• Legal threats</li>
                <li>• Social media complaints</li>
                <li>• Repeat issues (3+ times)</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
