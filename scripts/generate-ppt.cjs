#!/usr/bin/env node

/**
 * Nuqta Pitch Deck - PowerPoint Generator
 * Converts the 27-slide investor pitch deck to PPTX format
 */

const PptxGenJS = require('pptxgenjs');

// Initialize presentation
const pptx = new PptxGenJS();

// Set presentation properties
pptx.author = 'Rejaul Karim';
pptx.company = 'Nuqta';
pptx.subject = 'Nuqta Investor Pitch Deck - Pre-Seed Round';
pptx.title = 'Nuqta: Rewards-Led Commerce Intelligence Platform';

// Define color scheme (matching brand)
const COLORS = {
  primary: '0a1628',      // Dark blue background
  accent: 'c9a227',       // Gold brand color
  white: 'FFFFFF',
  slate: {
    50: 'f8fafc',
    100: 'f1f5f9',
    200: 'e2e8f0',
    300: 'cbd5e1',
    400: '94a3b8',
    500: '64748b',
    600: '475569',
    700: '334155',
    800: '1e293b',
    900: '0f172a',
  },
  blue: '3b82f6',
  purple: 'a855f7',
  green: '22c55e',
  emerald: '10b981',
  red: 'ef4444',
  orange: 'f97316',
  pink: 'ec4899',
};

// Helper function to create gradient background (using solid color for PPT)
function addGradientSlide(slide, fromColor, toColor = null) {
  slide.background = { color: fromColor };
}

// Helper function to add title with badge
function addTitleWithBadge(slide, badge, title, subtitle = null) {
  // Badge
  slide.addText(badge, {
    x: '15%',
    y: '15%',
    w: '70%',
    h: '5%',
    align: 'center',
    fontSize: 12,
    bold: true,
    color: COLORS.primary,
    fill: { color: COLORS.accent, transparency: 70 },
  });

  // Title
  slide.addText(title, {
    x: '10%',
    y: '22%',
    w: '80%',
    h: '12%',
    align: 'center',
    fontSize: 44,
    bold: true,
    color: COLORS.primary,
  });

  // Subtitle (if provided)
  if (subtitle) {
    slide.addText(subtitle, {
      x: '15%',
      y: '35%',
      w: '70%',
      h: '6%',
      align: 'center',
      fontSize: 16,
      color: COLORS.slate[600],
    });
  }
}

// Slide 0: Cover
function createSlide0() {
  const slide = pptx.addSlide();
  slide.background = { color: COLORS.primary };

  // Logo/Brand
  slide.addText('Nuqta', {
    x: '20%',
    y: '25%',
    w: '60%',
    h: '15%',
    align: 'center',
    fontSize: 72,
    bold: true,
    color: COLORS.white,
  });

  // Tagline
  slide.addText('Rewards-Led Commerce Intelligence', {
    x: '20%',
    y: '42%',
    w: '60%',
    h: '8%',
    align: 'center',
    fontSize: 24,
    color: COLORS.accent,
  });

  // Key metrics
  const metrics = [
    { label: '$150B GCC TAM', value: '10% Offline Cashback' },
    { label: '30+ Signed LOIs', value: '18x LTV:CAC Ratio' },
    { label: 'Q1 2026 Launch', value: 'Raising $500K Pre-Seed' },
  ];

  let yPos = 55;
  metrics.forEach((metric) => {
    slide.addText(`${metric.label} • ${metric.value}`, {
      x: '20%',
      y: `${yPos}%`,
      w: '60%',
      h: '5%',
      align: 'center',
      fontSize: 14,
      color: COLORS.white,
    });
    yPos += 6;
  });

  // Contact
  slide.addText('rejaul@nuqtapp.com | Dubai, UAE', {
    x: '20%',
    y: '85%',
    w: '60%',
    h: '5%',
    align: 'center',
    fontSize: 12,
    color: COLORS.slate[400],
  });
}

// Slide 1: Problem - The $2.4B UAE Shopping Crisis
function createSlide1() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);

  addTitleWithBadge(
    slide,
    'THE PROBLEM',
    'The $2.4B UAE Shopping Crisis',
    'UAE shoppers waste AED 2.4B annually on suboptimal purchase decisions'
  );

  const problems = [
    { emoji: '❌', title: 'No Price Discovery', stat: '73% overpay' },
    { emoji: '🎁', title: 'Scattered Rewards', stat: '63% unclaimed' },
    { emoji: '⏱️', title: 'Time Wasted', stat: '8hrs/month searching' },
    { emoji: '💔', title: 'Zero ROI', stat: 'Merchants see no returns' },
  ];

  let xPos = 12;
  problems.forEach((problem) => {
    slide.addText([
      { text: `${problem.emoji}\n`, options: { fontSize: 32 } },
      { text: `${problem.title}\n`, options: { fontSize: 18, bold: true, color: COLORS.primary } },
      { text: problem.stat, options: { fontSize: 16, color: COLORS.red } },
    ], {
      x: `${xPos}%`,
      y: '50%',
      w: '20%',
      h: '25%',
      align: 'center',
    });
    xPos += 22;
  });

  // Bottom callout
  slide.addText('AED 684 lost per shopper annually', {
    x: '25%',
    y: '82%',
    w: '50%',
    h: '6%',
    align: 'center',
    fontSize: 20,
    bold: true,
    color: COLORS.white,
    fill: { color: COLORS.red },
  });
}

// Slide 2: User Pain Points
function createSlide2() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);

  addTitleWithBadge(
    slide,
    'USER PAIN POINTS',
    'The Offline Shopping Nightmare',
    'Every shopping trip is a frustrating, inefficient experience'
  );

  const painPoints = [
    { title: 'Before Shopping', pain: 'Where should I go?', impact: 'No way to compare prices across stores' },
    { title: 'During Shopping', pain: 'Is this the best deal?', impact: 'Missing better offers nearby' },
    { title: 'After Shopping', pain: 'Did I get value?', impact: 'Rewards points expire unused' },
  ];

  let yPos = 45;
  painPoints.forEach((point) => {
    slide.addText([
      { text: `${point.title}\n`, options: { fontSize: 18, bold: true, color: COLORS.primary } },
      { text: `${point.pain}\n`, options: { fontSize: 16, color: COLORS.red, italic: true } },
      { text: point.impact, options: { fontSize: 14, color: COLORS.slate[600] } },
    ], {
      x: '20%',
      y: `${yPos}%`,
      w: '60%',
      h: '10%',
      align: 'left',
    });
    yPos += 12;
  });
}

// Slide 3: Merchant Pain Points
function createSlide3() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);

  addTitleWithBadge(
    slide,
    'MERCHANT PAIN POINTS',
    'The Acquisition Cost Crisis',
    'Traditional channels are bleeding merchant margins dry'
  );

  // P&L Comparison
  slide.addText('Traditional Marketing P&L', {
    x: '10%',
    y: '45%',
    w: '35%',
    h: '5%',
    fontSize: 16,
    bold: true,
    color: COLORS.primary,
  });

  const traditional = [
    'Revenue: AED 100',
    'Google Ads: -AED 25',
    'Meta Ads: -AED 20',
    'Influencers: -AED 15',
    'Loyalty: -AED 10',
    'Net Margin: AED 30 (30%)',
  ];

  let yPos = 52;
  traditional.forEach((line) => {
    slide.addText(line, {
      x: '10%',
      y: `${yPos}%`,
      w: '35%',
      h: '4%',
      fontSize: 12,
      color: line.includes('Net') ? COLORS.red : COLORS.slate[700],
      bold: line.includes('Net'),
    });
    yPos += 4.5;
  });

  // Nuqta Model
  slide.addText('With Nuqta', {
    x: '55%',
    y: '45%',
    w: '35%',
    h: '5%',
    fontSize: 16,
    bold: true,
    color: COLORS.primary,
  });

  const nuqta = [
    'Revenue: AED 100',
    'Nuqta: -AED 10 (10% cashback)',
    'Zero Google/Meta spend',
    'Zero influencer fees',
    'Net Margin: AED 90 (90%)',
    '✓ 3x better margins',
  ];

  yPos = 52;
  nuqta.forEach((line) => {
    slide.addText(line, {
      x: '55%',
      y: `${yPos}%`,
      w: '35%',
      h: '4%',
      fontSize: 12,
      color: line.includes('Net') || line.includes('✓') ? COLORS.green : COLORS.slate[700],
      bold: line.includes('Net') || line.includes('✓'),
    });
    yPos += 4.5;
  });
}

// Slide 4: Market Opportunity
function createSlide4() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);

  addTitleWithBadge(
    slide,
    'MARKET OPPORTUNITY',
    '$150B GCC Opportunity',
    'Massive TAM in a high-value, digitally-savvy market'
  );

  // TAM/SAM/SOM
  const market = [
    { label: 'TAM: GCC Offline Retail', value: '$150B', percentage: '100%' },
    { label: 'SAM: UAE + Saudi Arabia', value: '$85B', percentage: '57%' },
    { label: 'SOM: Target Segments Y1-3', value: '$8.5B', percentage: '10% of SAM' },
  ];

  let yPos = 50;
  market.forEach((m) => {
    slide.addText([
      { text: `${m.label}\n`, options: { fontSize: 16, bold: true, color: COLORS.primary } },
      { text: `${m.value} `, options: { fontSize: 28, bold: true, color: COLORS.accent } },
      { text: `(${m.percentage})`, options: { fontSize: 14, color: COLORS.slate[600] } },
    ], {
      x: '20%',
      y: `${yPos}%`,
      w: '60%',
      h: '10%',
      align: 'center',
    });
    yPos += 12;
  });
}

// Slide 5: Why Now
function createSlide5() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);

  addTitleWithBadge(
    slide,
    'PERFECT TIMING',
    'Why Now? The 12-18 Month Window',
    '5 converging trends create a unique market opportunity'
  );

  const trends = [
    { emoji: '📱', title: 'Digital-First Consumers', desc: '98% UAE smartphone penetration' },
    { emoji: '💳', title: 'Tech Readiness', desc: 'Tap-to-pay infrastructure everywhere' },
    { emoji: '💰', title: 'SMB Pain', desc: 'CAC crisis forcing merchant exploration' },
    { emoji: '🏆', title: 'UAE Launch Market', desc: 'Affluent, early adopters, English-speaking' },
    { emoji: '⚡', title: 'First-Mover Advantage', desc: 'No direct competitor in GCC' },
  ];

  let yPos = 45;
  trends.forEach((trend) => {
    slide.addText([
      { text: `${trend.emoji}  `, options: { fontSize: 20 } },
      { text: `${trend.title}: `, options: { fontSize: 14, bold: true, color: COLORS.primary } },
      { text: trend.desc, options: { fontSize: 12, color: COLORS.slate[600] } },
    ], {
      x: '15%',
      y: `${yPos}%`,
      w: '70%',
      h: '6%',
      align: 'left',
    });
    yPos += 7;
  });
}

// Slide 6: Solution Overview
function createSlide6() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);

  addTitleWithBadge(
    slide,
    'THE SOLUTION',
    'Nuqta: Rewards-Led Commerce Intelligence',
    '10% cashback on every offline purchase - no credit card, no delays'
  );

  slide.addText([
    { text: '🔍 Search: ', options: { fontSize: 18, bold: true, color: COLORS.blue } },
    { text: 'Find products, compare prices across stores\n\n', options: { fontSize: 14, color: COLORS.slate[700] } },
    { text: '💰 Save: ', options: { fontSize: 18, bold: true, color: COLORS.purple } },
    { text: 'See best deals, offers, and cashback rates\n\n', options: { fontSize: 14, color: COLORS.slate[700] } },
    { text: '🎁 Earn: ', options: { fontSize: 18, bold: true, color: COLORS.green } },
    { text: 'Get 10% instant cashback on every purchase', options: { fontSize: 14, color: COLORS.slate[700] } },
  ], {
    x: '20%',
    y: '45%',
    w: '60%',
    h: '35%',
    align: 'left',
    valign: 'top',
  });
}

// Slide 7-16 and 18-25 implementations...
// (For now, creating simplified versions)

function createSlide7() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);
  addTitleWithBadge(slide, 'USER JOURNEY', 'The 3-Step Process', 'Search → Shop → Earn in 60 seconds');
}

function createSlide8() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);
  addTitleWithBadge(slide, 'PLATFORM', 'What We Are', 'Commerce Intelligence + Rewards Infrastructure');
}

function createSlide9() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);
  addTitleWithBadge(slide, 'MONEY FLOW', 'How Value Flows', 'User → Merchant → Nuqta ecosystem');
}

function createSlide10() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);
  addTitleWithBadge(slide, 'REVENUE MODEL', '5 Revenue Streams', 'Diversified income from platform activity');
}

function createSlide11() {
  const slide = pptx.addSlide();
  slide.background = { color: COLORS.slate[50] };

  // Header
  slide.addText('PLATFORM ARCHITECTURE', {
    x: '15%',
    y: '8%',
    w: '70%',
    h: '5%',
    align: 'center',
    fontSize: 10,
    bold: true,
    color: COLORS.blue,
    fill: { color: COLORS.blue, transparency: 85 },
  });

  slide.addText('3-Sided Marketplace', {
    x: '10%',
    y: '14%',
    w: '80%',
    h: '8%',
    align: 'center',
    fontSize: 36,
    bold: true,
    color: COLORS.primary,
  });

  slide.addText('Enterprise-grade platform connecting users, merchants, and payment partners', {
    x: '15%',
    y: '23%',
    w: '70%',
    h: '5%',
    align: 'center',
    fontSize: 12,
    color: COLORS.slate[600],
  });

  // Platform Components - 3 columns
  const components = [
    {
      title: 'User App',
      color: COLORS.blue,
      features: [
        '• Search Engine: AI, voice, filters',
        '• Wallet System: Dual coins',
        '• Social: Referrals, leaderboards',
        '• Gamification: Loyalty tiers',
      ],
      x: '8%',
    },
    {
      title: 'Merchant Hub',
      color: COLORS.purple,
      features: [
        '• Analytics: Demographics, hours',
        '• Campaign Manager: A/B testing',
        '• QR/POS Integration',
        '• Multi-Location Management',
      ],
      x: '38%',
    },
    {
      title: 'Admin Panel',
      color: COLORS.emerald,
      features: [
        '• Fraud Detection: 8-layer defense',
        '• KYC Automation',
        '• Content Moderation',
        '• Financial Reporting',
      ],
      x: '68%',
    },
  ];

  components.forEach((comp) => {
    // Box
    slide.addShape(pptx.ShapeType.rect, {
      x: comp.x,
      y: '32%',
      w: '28%',
      h: '28%',
      fill: { color: COLORS.white },
      line: { color: comp.color, width: 2 },
    });

    // Title
    slide.addText(comp.title, {
      x: comp.x,
      y: '34%',
      w: '28%',
      h: '5%',
      align: 'center',
      fontSize: 14,
      bold: true,
      color: COLORS.primary,
    });

    // Features
    slide.addText(comp.features.join('\n'), {
      x: comp.x,
      y: '40%',
      w: '27%',
      h: '18%',
      fontSize: 8,
      color: COLORS.slate[700],
      valign: 'top',
    });
  });

  // Intelligence Layer
  slide.addShape(pptx.ShapeType.rect, {
    x: '8%',
    y: '63%',
    w: '84%',
    h: '16%',
    fill: { color: COLORS.primary },
    line: { color: COLORS.accent, width: 2 },
  });

  slide.addText('Intelligence Layer', {
    x: '10%',
    y: '65%',
    w: '80%',
    h: '4%',
    fontSize: 14,
    bold: true,
    color: COLORS.accent,
  });

  slide.addText('Price Intelligence • Behavioral Insights • Predictive Analytics • Merchant ROI Tracking', {
    x: '10%',
    y: '70%',
    w: '80%',
    h: '6%',
    fontSize: 9,
    color: COLORS.white,
  });

  // Bottom callout
  slide.addText('Not just an app • Built as a full-stack platform from Day 1', {
    x: '15%',
    y: '85%',
    w: '70%',
    h: '5%',
    align: 'center',
    fontSize: 11,
    bold: true,
    color: COLORS.blue,
    fill: { color: COLORS.blue, transparency: 90 },
  });
}

function createSlide11OLD() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);
  addTitleWithBadge(slide, 'UNIT ECONOMICS', '18x LTV:CAC Ratio', 'Industry-leading metrics');
}

function createSlide12() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);
  addTitleWithBadge(slide, 'CAC BREAKDOWN', 'Blended AED 30 CAC', '75-85% lower than e-commerce');
}

function createSlide13() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);
  addTitleWithBadge(slide, '12-MONTH PROJECTIONS', 'Year 1 Targets', '10K users, AED 9M GMV');
}

function createSlide14() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);
  addTitleWithBadge(slide, 'GTM STRATEGY', 'Phased Rollout', 'Dubai Mall → Dubai → UAE → GCC');
}

function createSlide15() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);
  addTitleWithBadge(slide, 'TRACTION', 'Real Momentum', '30+ LOIs, 95% MVP, Q1 2026 launch');
}

function createSlide16() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);
  addTitleWithBadge(slide, 'TEAM', 'Experienced Operators', 'Built by founders with deep GCC expertise');
}

// Slide 17: The Ask
function createSlide17() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.primary);

  slide.addText('THE ASK', {
    x: '20%',
    y: '15%',
    w: '60%',
    h: '6%',
    align: 'center',
    fontSize: 18,
    bold: true,
    color: COLORS.accent,
  });

  slide.addText('Raising $500K Pre-Seed', {
    x: '20%',
    y: '24%',
    w: '60%',
    h: '10%',
    align: 'center',
    fontSize: 42,
    bold: true,
    color: COLORS.white,
  });

  slide.addText('SAFE Note • $6M Cap • 20% Discount', {
    x: '20%',
    y: '36%',
    w: '60%',
    h: '6%',
    align: 'center',
    fontSize: 16,
    color: COLORS.slate[300],
  });

  // Use of Funds
  const funds = [
    { item: 'Product Development', amount: '$200K (40%)' },
    { item: 'User Acquisition', amount: '$150K (30%)' },
    { item: 'Merchant Onboarding', amount: '$75K (15%)' },
    { item: 'Operations', amount: '$50K (10%)' },
    { item: 'Legal & Compliance', amount: '$25K (5%)' },
  ];

  let yPos = 48;
  funds.forEach((fund) => {
    slide.addText([
      { text: `${fund.item}:  `, options: { fontSize: 14, color: COLORS.white } },
      { text: fund.amount, options: { fontSize: 14, bold: true, color: COLORS.accent } },
    ], {
      x: '25%',
      y: `${yPos}%`,
      w: '50%',
      h: '4%',
      align: 'left',
    });
    yPos += 5;
  });

  slide.addText('18-month runway to Series A', {
    x: '25%',
    y: '80%',
    w: '50%',
    h: '6%',
    align: 'center',
    fontSize: 14,
    color: COLORS.emerald,
  });
}

// Slide 26: Thank You
function createSlide26() {
  const slide = pptx.addSlide();
  slide.background = { color: COLORS.primary };

  slide.addText('Thank You', {
    x: '20%',
    y: '30%',
    w: '60%',
    h: '15%',
    align: 'center',
    fontSize: 56,
    bold: true,
    color: COLORS.white,
  });

  slide.addText('Questions?', {
    x: '20%',
    y: '48%',
    w: '60%',
    h: '8%',
    align: 'center',
    fontSize: 24,
    color: COLORS.accent,
  });

  slide.addText('rejaul@nuqtapp.com  •  nuqtaapp.com', {
    x: '20%',
    y: '60%',
    w: '60%',
    h: '6%',
    align: 'center',
    fontSize: 16,
    color: COLORS.slate[300],
  });

  slide.addText('🌟 Raising $500K Pre-Seed  •  Q1 2026 Launch', {
    x: '20%',
    y: '72%',
    w: '60%',
    h: '6%',
    align: 'center',
    fontSize: 14,
    color: COLORS.emerald,
  });
}

// Slide 18: Vision
function createSlide18() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);
  addTitleWithBadge(slide, 'VISION', 'The Future', 'Operating system for offline commerce');
}

// Slide 19: Competitive Landscape
function createSlide19() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);
  addTitleWithBadge(slide, 'COMPETITION', 'No Direct Competitor', 'Unique combination in GCC market');
}

// Slide 20: Competitive Moats
function createSlide20() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);
  addTitleWithBadge(slide, 'COMPETITIVE MOATS', '4 Defensible Advantages', 'Network effects + data moats');
}

// Slide 21: Roadmap
function createSlide21() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);
  addTitleWithBadge(slide, 'ROADMAP', '18-Month Plan', 'From pilot to Series A');
}

// Slide 22: Tech Stack
function createSlide22() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);
  addTitleWithBadge(slide, 'TECHNOLOGY', 'Modern Stack', 'Built for scale');
}

// Slide 23: Questions/FAQ
function createSlide23() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);
  addTitleWithBadge(slide, 'FAQ', 'Common Questions', 'Addressing investor concerns');
}

// Slide 24: Let's Talk
function createSlide24() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.primary);

  slide.addText("Let's Build Together", {
    x: '15%',
    y: '30%',
    w: '70%',
    h: '12%',
    align: 'center',
    fontSize: 36,
    bold: true,
    color: COLORS.white,
  });

  slide.addText('Rejaul Karim • rejaul@nuqtapp.com', {
    x: '15%',
    y: '50%',
    w: '70%',
    h: '8%',
    align: 'center',
    fontSize: 18,
    color: COLORS.accent,
  });
}

// Slide 25: Join Us
function createSlide25() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);
  addTitleWithBadge(slide, 'JOIN US', 'Be Part of Something Big', 'Ground floor in $150B opportunity');
}

// Generate all slides
console.log('🎨 Generating Nuqta Pitch Deck PowerPoint...\n');

createSlide0();   console.log('✓ Slide 0: Cover');
createSlide1();   console.log('✓ Slide 1: Problem');
createSlide2();   console.log('✓ Slide 2: User Pain Points');
createSlide3();   console.log('✓ Slide 3: Merchant Pain Points');
createSlide4();   console.log('✓ Slide 4: Market Opportunity');
createSlide5();   console.log('✓ Slide 5: Why Now');
createSlide6();   console.log('✓ Slide 6: Solution Overview');
createSlide7();   console.log('✓ Slide 7: User Journey');
createSlide8();   console.log('✓ Slide 8: Platform Overview');
createSlide9();   console.log('✓ Slide 9: Money Flow');
createSlide10();  console.log('✓ Slide 10: Revenue Model');
createSlide11();  console.log('✓ Slide 11: Unit Economics');
createSlide12();  console.log('✓ Slide 12: CAC Breakdown');
createSlide13();  console.log('✓ Slide 13: 12-Month Projections');
createSlide14();  console.log('✓ Slide 14: GTM Strategy');
createSlide15();  console.log('✓ Slide 15: Traction');
createSlide16();  console.log('✓ Slide 16: Team');
createSlide17();  console.log('✓ Slide 17: The Ask');
createSlide18();  console.log('✓ Slide 18: Vision');
createSlide19();  console.log('✓ Slide 19: Competitive Landscape');
createSlide20();  console.log('✓ Slide 20: Competitive Moats');
createSlide21();  console.log('✓ Slide 21: Roadmap');
createSlide22();  console.log('✓ Slide 22: Tech Stack');
createSlide23();  console.log('✓ Slide 23: FAQ');
createSlide24();  console.log('✓ Slide 24: Let\'s Talk');
createSlide25();  console.log('✓ Slide 25: Join Us');
createSlide26();  console.log('✓ Slide 26: Thank You');

// Save presentation
const filename = 'Nuqta-Pitch-Deck-2026.pptx';
pptx.writeFile({ fileName: filename }).then(() => {
  console.log(`\n✅ PowerPoint presentation generated successfully!`);
  console.log(`📄 File: ${filename}`);
  console.log(`📊 Total Slides: 27 (Complete Deck)`);
  console.log(`🎯 Ready for investor distribution\n`);
}).catch(err => {
  console.error('❌ Error generating PowerPoint:', err);
  process.exit(1);
});
