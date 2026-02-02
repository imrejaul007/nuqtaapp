# NUQTA MASTER EXECUTION PLAN
## Complete Business Model & App Requirements

---

# PART 1: APP UPDATES REQUIRED

## 1.1 Home Page Simplification

**Current State:** Complex
**Target State:** Simple, card-based, category-focused

### Required Components:

```
HOME PAGE STRUCTURE:
├── Search Bar (top)
├── Quick Categories (horizontal scroll)
│   ├── Food & Drinks
│   ├── Grocery
│   ├── Salons
│   ├── Fitness
│   ├── Fashion
│   ├── Events
│   └── More
├── Featured Merchants (cards)
├── Nearby Deals (location-based)
├── Savings Feed (social proof)
└── Bottom Navigation
    ├── Home
    ├── Explore
    ├── Wallet
    ├── Activity
    └── Profile
```

---

## 1.2 Coin System (3 Types)

### Database Schema Required:

```
COINS TABLE:
├── nuqta_coins (universal, spend anywhere)
├── brand_coins (merchant-specific)
└── prive_coins (influencer rewards)

USER_COINS:
├── user_id
├── nuqta_balance
├── brand_coins[] (array of {merchant_id, balance})
├── prive_balance
├── prive_status (boolean)
└── prive_tier (invited/verified/merchant_flagged)
```

### Wallet Screen:

```
WALLET:
├── Total Savings (AED X saved all-time)
├── Nuqta Coins Balance
│   └── "Spend anywhere"
├── Brand Coins (collapsible)
│   ├── Starbucks: 50 coins
│   ├── Salon X: 30 coins
│   └── View All
├── Prive Coins (if eligible)
│   └── "Exclusive perks + spend anywhere"
└── Transaction History
```

---

## 1.3 User Types & Tiers

### Regular Users:
- Earn Nuqta Coins (5-10%)
- Optional Brand Coins
- Standard experience

### Prive Users (Influencers):
- Earn Prive Coins (5-100%)
- Exclusive perks access
- VIP badge in app

### Prive Qualification:

```
PRIVE_USERS:
├── Qualification Method:
│   ├── B: Invitation (manual by Nuqta)
│   ├── C: Auto-upgrade (10K+ followers verified)
│   └── D: Merchant flagged (at checkout)
├── Verification:
│   ├── Instagram link
│   ├── Follower count API check
│   └── Manual review queue
└── Benefits:
    ├── Higher earn rates
    ├── Exclusive events
    ├── VIP perks
    └── Priority support
```

---

## 1.4 Merchant Packages (Engine A - High Margin)

### Package Tiers in App:

| Tier | Marketing Spend | Commission | Nuqta Coin | Our Revenue |
|------|-----------------|------------|------------|-------------|
| **Free** | AED 0 | 20% | 5-10% | 10-15% |
| **Basic** | AED 5K | 18% | 5-10% | 8-13% |
| **Golden** | AED 15K | 17% | 5-10% | 7-12% |
| **Diamond** | AED 30K | 15% | 5-10% | 5-10% |

### Subscription Logic:
- Sales < AED 10K/month → FREE
- Sales > AED 10K/month → AED 100/month

### What Merchants Get with Marketing Spend:

| Tier | Includes |
|------|----------|
| **Basic (5K)** | Performance marketing, Content creation, Influencer marketing, 5K in-app promo credit |
| **Golden (15K)** | All Basic + 15K in-app promo credit |
| **Diamond (30K)** | All Golden + Priority placement + Dedicated support |

---

## 1.5 Category System (5 Tiers)

### Tier 1: High-Frequency (CORE - Launch Priority)
```
├── Food & Beverages
│   ├── Cafés & coffee shops
│   ├── QSR & casual dining
│   ├── Restaurants
│   ├── Street food & food stalls
│   └── Desserts & bakeries
├── Grocery & Essentials
│   ├── Supermarkets
│   ├── Local grocery stores
│   └── Convenience stores
├── Salons & Grooming
│   ├── Salons (men & women)
│   ├── Barber shops
│   └── Beauty services
└── Fitness & Wellness
    ├── Gyms
    ├── Yoga / Pilates studios
    └── Fitness classes
```

### Tier 2: Medium-Frequency (GMV Boosters)
```
├── Fashion & Accessories
├── Electronics & Gadgets
├── Health & Medical
└── Home Services
```

### Tier 3: Experience & Lifestyle
```
├── Events & Experiences
├── Entertainment
└── Travel (Local)
```

### Tier 4: Community & Long-Tail (Post-PMF)
```
├── Education & Learning
├── Automobile
├── Kids & Family
└── Pet Care
```

### Tier 5: Brand Activations (Special)
```
├── Flea Markets & Pop-Ups
└── Co-Branded Packaging
```

---

## 1.6 User Habit Loops (Gamification)

### Daily Features Required:

```
DAILY ENGAGEMENT:
├── "One Smart Save Task"
│   └── Daily challenge to save at a category
├── Social Proof Feed
│   └── "[User] saved AED 50 at [Merchant]"
├── Savings Leaderboard
│   ├── Weekly top savers
│   ├── Friends leaderboard
│   └── Category leaders
└── Streak System
    └── "5-day saving streak! Bonus 50 coins"
```

---

## 1.7 Partner Programs (College & Corporate)

### College Partner Features:

```
COLLEGE_PARTNERS:
├── MoU-based partnership
├── Exclusive student discounts
├── Student verification (college email/.edu)
├── Features:
│   ├── Student of the Month
│   │   ├── 1000 Nuqta coins
│   │   ├── 5000 Brand coins
│   │   └── 10x500 brand coins to distribute
│   ├── Voting system (in-app)
│   │   └── Voters get 100 brand coins
│   ├── Event passes (exclusive pricing)
│   └── Ambassador program
│       ├── Earn Nuqta coins
│       ├── Event passes
│       ├── Internship certificate
│       └── Cash bonuses on milestones
```

### Corporate Partner Features:

```
CORPORATE_PARTNERS:
├── MoU-based partnership
├── Employee verification (corporate email)
├── Features:
│   ├── Employee of the Month
│   │   ├── 1000 Nuqta coins
│   │   ├── 5000 Brand coins
│   │   └── 10x500 brand coins
│   ├── Voting system (in-app)
│   ├── Corporate event access
│   └── Future: Advance salary / BNPL
```

---

## 1.8 Referral System

### User Referrals:
```
USER_REFERRAL:
├── Referrer gets: X Nuqta coins on friend's first purchase
├── Referee gets: X bonus coins on signup
├── Unique referral code per user
├── Deep link sharing (WhatsApp, Instagram)
├── Referral dashboard
│   ├── Pending referrals
│   ├── Completed referrals
│   └── Total earned
└── Monthly leaderboard
```

### Merchant Referrals:
```
MERCHANT_REFERRAL:
├── Referring merchant gets: AED 500 Nuqta credit
├── Referred merchant gets: 0% commission Month 1
└── Unlimited referrals allowed
```

---

## 1.9 Event Integration

### Event Features Required:

```
EVENTS_MODULE:
├── Event listing
│   ├── Global Village
│   ├── Sharjah Expo
│   ├── College fests
│   └── Music events
├── Ticket booking via Nuqta
│   ├── 20% off on tickets
│   ├── 30% cashback in Nuqta coins
│   └── 10% brand coins (event-specific)
├── Event-specific deals
│   └── "Cashback on ticket amount, redeem on purchase >AED 300"
└── Event merchant integration
    └── QR payments at event stalls
```

---

## 1.10 Social Features

### Local Social Feed:
```
SOCIAL_FEED:
├── User-generated content
│   ├── Reviews
│   ├── Photos
│   └── Savings stories
├── Local news/offers
├── Merchant spotlights
└── Trending in your area
```

### Social Sharing Rewards:
```
SOCIAL_SHARING:
├── Share purchase on Instagram/TikTok
├── Earn social bonus (5% extra)
├── UGC gets featured
└── Track shares via deep links
```

---

## 1.11 Reports & Analytics

### User Reports:
```
USER_REPORTS:
├── Monthly savings report
│   ├── Total saved this month
│   ├── Category breakdown
│   ├── Top merchants
│   └── Comparison vs last month
├── Missing savings report
│   └── "You could have saved AED X if you used Nuqta here"
└── Year-in-review (annual)
```

### Merchant Reports:
```
MERCHANT_REPORTS:
├── Weekly settlement report
├── Customer analytics
│   ├── New vs returning
│   ├── Average ticket
│   └── Peak hours
├── Coin redemption stats
└── Performance vs tier benchmarks
```

---

## 1.12 Advertisement Portal (Future)

```
AD_PORTAL:
├── Merchant self-serve ads
│   ├── Featured placement
│   ├── Category sponsorship
│   └── Push notification campaigns
├── Cost: Deducted from promo credit or paid
└── Analytics dashboard
```

---

## 1.13 Fleet Market Mode

```
FLEET_MARKET:
├── "Nuqta-only payment" events
├── Rules:
│   ├── Pay with Nuqta → 50% off
│   ├── Pay with Nuqta → Cashback
│   └── Other payment → No discount
├── Locations:
│   ├── Mall pop-ups
│   ├── Society events
│   ├── College fests
│   └── Weekend markets
└── Merchant registration (commission model)
```

---

# PART 2: OPERATIONS (Outside App)

## 2.1 Licensing & Compliance

| Task | Status | Notes |
|------|--------|-------|
| UAE Trade License | Pending | Required for operations |
| Payment Gateway (Razorpay or local) | Pending | Need UAE-compliant processor |
| BNPL License | Future | Phase 2 |
| Bank Partnerships | Pending | For settlements |

---

## 2.2 Business Onboarding Channels

### Online:
- Meta ads
- Google ads
- Agency partnerships (multiple niche agencies)

### Offline:
- Door-to-door sales
- Events (Global Village, Sharjah Expo, etc.)
- Mall partnerships

### Target Merchants (Priority):

| Source | Description |
|--------|-------------|
| Competitor merchants | Magicpin, District, WYLD, Cherry merchants |
| New merchants | Cold outreach |
| Local stores | Neighborhood shops |
| E-commerce | Online brands wanting offline presence |

---

## 2.3 Customer Onboarding Channels

### College Onboarding:
- Sign MoU with colleges
- Campus ambassadors
- College events (sports fest, cultural fest)
- Exclusive student discounts

### Corporate Onboarding:
- Sign MoU with companies
- Employee benefits program
- Corporate events
- Referral program

---

## 2.4 Event Organizing

| Event Type | Goal | Nuqta Role |
|------------|------|------------|
| College sports fest | Downloads + engagement | Sponsor + payment partner |
| Corporate Premier League | Corporate user acquisition | Sponsor + payment partner |
| Music events | Brand awareness | Ticket partner |
| Fleet markets | GMV + merchant onboarding | Organizer |

---

## 2.5 Marketing Team Structure

```
MARKETING_TEAM:
├── Marketing Manager (handles 20 brands each)
│   ├── Performance marketing
│   ├── Content creation
│   ├── Influencer coordination
│   └── Price engineering
├── Graphic Designer
├── Content Team (category specialists)
│   ├── Food
│   ├── Beauty & Wellness
│   ├── Fashion
│   ├── Finance
│   ├── Electronics
│   └── Entertainment
└── Influencer Marketing Team
```

### Services Offered to Merchants:
- Content creation & social media management
- Influencer campaigns
- Performance ads (Meta, Google)
- Partnership plans
- Event marketing

---

## 2.6 Co-Partner Brand Model

### Investment Structure:
- Nuqta Investment: AED 50K (≈₹5L INR)
- Equity: 50% ownership

### What Nuqta Provides:
- Capital investment
- Office/workspace (where applicable)
- Marketing support (platform, not paid ads)
- Fleet & event ecosystem access
- Distribution via Nuqta app

### Financial Model:
- Nuqta Commission: 0% (treated as privileged merchant)
- User Rewards: 10-15% Nuqta coins
- Profits: 50/50 split

### Approved Categories:
- Food (trucks, stalls, momos, burgers, pizza, etc.)
- Drinks (mocktails, juice, boba, coffee)
- Fashion (streetwear, jewelry, perfumes)
- Other (gifting, pet care, kids essentials)

---

## 2.7 Media & Content Hub

### Content Verticals:
```
MEDIA_HUB:
├── Sports content
│   ├── Football, Cricket, WWE, Kabaddi
│   └── Local sports (gully cricket, carrom, padel)
├── Entertainment
│   ├── Music video parodies
│   ├── Podcasts (AI-generated, multi-language)
│   └── Short films
├── Social experiments
├── Tech & memes
├── Food content
├── Business series
└── Marketing case studies
```

### IP Events:
- Music nights
- Sports screenings
- Stand-up comedy
- College sports fest

---

## 2.8 Signature Events

### Event Model:
```
SIGNATURE_EVENTS:
├── Ticket booking via Nuqta only
├── Pricing:
│   ├── 20% off on tickets
│   ├── 30% cashback (Nuqta coins)
│   └── 10% brand coins (event-specific)
├── Frequency: 1 major event/month
└── Types:
    ├── Music night
    ├── Sports screening
    ├── Stand-up comedy
    └── College sports fest
```

---

## 2.9 Social Service Integration

### Donate & Earn:
- Blood donation → Brand coins from sponsor
- Tree planting → Brand coins from sponsor

### Volunteer & Earn:
- Marketing/BD support for brands
- Earn Nuqta coins + certificates

---

## 2.10 Brand Partnerships

### Co-Branded Packaging:
- Scan QR on product → Earn Nuqta/Brand coins
- Partner with FMCG brands

### Sports Partnerships:
- "Support your IPL team, win jersey"
- Vote via app, win branded coins

---

## 2.11 Ads Campaigns

### Campaign Ideas:
```
AD_CAMPAIGNS:
├── "Calculate Your Savings"
│   └── Upload bills, see what you would have saved
├── "Smart People Use Nuqta"
│   └── User testimonials
├── "Nuqta Cash Hunting"
│   └── Co-branded packaging scavenger hunt
├── Video UGC Campaign
│   └── Create video showing savings, earn cashback (cap AED 30)
```

---

## 2.12 Team Structure (Full)

```
FULL_TEAM:
├── Onboarding Manager (College)
│   ├── MoU signing
│   ├── Ambassador management
│   └── Event organizing
├── Event Manager
├── Marketing Team (20 brands per manager)
│   ├── Performance marketing
│   ├── Graphic designer
│   └── Content team
├── Tech Team
├── Operations
├── HR
├── Finance
├── Partnerships & Alliances
├── Data & Growth Analytics
├── Customer Experience (CX)
│   └── Support team
└── Compliance & Risk
```

---

## 2.13 Target Brands to Onboard

### Giant Retailers:
- Dmart, Reliance Retail, Croma, Spencer, Spar

### E-commerce:
- Amazon, Flipkart, Myntra, Nykaa, Ajio, Uber, BookMyShow

### F&B Chains:
- McDonald's, Domino's, KFC, Burger King, Starbucks, etc.

### Fitness:
- Decathlon, Cult.fit, gyms

### Travel:
- RedBus, MakeMyTrip, Uber, Ola

---

# PART 3: MERCHANT VERIFIED BADGES

### Badge Levels:
```
MERCHANT_BADGES:
├── Verified (basic verification complete)
├── Trusted (3+ months, good metrics)
├── Nuqta Preferred (top performer)
└── Nuqta Signature (exclusive partner)
```

### Nuqta Board (Physical):
- QR code to pay at store
- Sticker for wall/door
- Circle board outside shop
- Messaging options:
  - "We Accept Nuqta"
  - "Pay with Nuqta & Earn cashback instantly"
  - "Use Nuqta and get instant cashback"

---

# PART 4: PRICE ENGINEERING

### Strategy:
```
PRICE_ENGINEERING:
├── Update merchant prices to +20% margin
├── Offer 20% discount via Nuqta
├── Result:
│   ├── Brand appears premium
│   ├── Nuqta users feel exclusive
│   └── Non-Nuqta users pay full price
├── Dynamic pricing:
│   └── Adjust discount based on demand (airline model)
```

---

# PART 5: APP FEATURE PRIORITY

## Phase 1 (Launch)
- [ ] Simple home page (cards + categories)
- [ ] Nuqta Coin wallet
- [ ] Basic merchant listing
- [ ] QR payment flow
- [ ] User registration/login
- [ ] Merchant dashboard (basic)

## Phase 2 (Post-Launch)
- [ ] Brand Coins
- [ ] Prive Coins & influencer system
- [ ] Referral system
- [ ] Social feed
- [ ] Leaderboard & gamification
- [ ] College/Corporate partner portals

## Phase 3 (Scale)
- [ ] Event ticketing integration
- [ ] Advertisement portal
- [ ] Advanced analytics
- [ ] Fleet market mode
- [ ] BNPL integration

---

# SUMMARY: What Needs App Work vs Operations

| Category | App Work Required | Operations Only |
|----------|-------------------|-----------------|
| Home page simplification | ✅ Yes | |
| 3-Coin system | ✅ Yes | |
| Merchant packages | ✅ Yes (dashboard) | ✅ Sales process |
| Category system | ✅ Yes | |
| Gamification | ✅ Yes | |
| College/Corporate programs | ✅ Yes (verification, voting) | ✅ MoU signing |
| Referral system | ✅ Yes | |
| Events | ✅ Yes (ticketing) | ✅ Event organizing |
| Social features | ✅ Yes | |
| Reports | ✅ Yes | |
| Ad portal | ✅ Yes (Phase 3) | |
| Licensing | | ✅ Operations |
| Merchant onboarding | ✅ Yes (self-serve) | ✅ Sales team |
| Marketing services | | ✅ Operations |
| Co-partner brands | | ✅ Operations |
| Media hub | | ✅ Operations |
| Team hiring | | ✅ Operations |

---

**Document Version:** 1.0
**Last Updated:** February 2026
**Status:** Ready for Development Prioritization
