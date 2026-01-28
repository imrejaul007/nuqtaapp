#!/usr/bin/env node

/**
 * Nuqta Pitch Deck - PowerPoint Generator
 * Converts the 27-slide investor pitch deck to PPTX format
 */

import PptxGenJS from 'pptxgenjs';

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
  slide.addText('rejaul@nuqtaapp.com | Dubai, UAE', {
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

// Slide 7: User Journey
function createSlide7() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);

  addTitleWithBadge(
    slide,
    'HOW IT WORKS',
    'The 3-Step User Journey',
    'From search to cashback in under 60 seconds'
  );

  const steps = [
    { num: '1', title: 'Search & Compare', desc: 'User searches "Nike shoes". Nuqta shows prices at 5 stores + 10% cashback offer.' },
    { num: '2', title: 'Shop Offline', desc: 'User visits store, buys shoes, shows QR code at checkout. Merchant scans.' },
    { num: '3', title: 'Instant Cashback', desc: 'User receives 10% cashback as Nuqta Gold Coins (spendable everywhere) + merchant reward coins.' },
  ];

  let yPos = 45;
  steps.forEach((step) => {
    slide.addShape(pptx.ShapeType.rect, {
      x: '12%',
      y: `${yPos}%`,
      w: '76%',
      h: '12%',
      fill: { color: COLORS.white },
      line: { color: COLORS.accent, width: 2 },
    });

    slide.addText(step.num, {
      x: '15%',
      y: `${yPos + 2}%`,
      w: '8%',
      h: '8%',
      fontSize: 32,
      bold: true,
      color: COLORS.accent,
      align: 'center',
    });

    slide.addText([
      { text: `${step.title}\n`, options: { fontSize: 16, bold: true, color: COLORS.primary } },
      { text: step.desc, options: { fontSize: 12, color: COLORS.slate[600] } },
    ], {
      x: '25%',
      y: `${yPos + 2}%`,
      w: '60%',
      h: '8%',
      align: 'left',
      valign: 'top',
    });

    yPos += 14;
  });
}

// Slide 8: Platform Overview
function createSlide8() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);

  addTitleWithBadge(
    slide,
    'THE PLATFORM',
    'NOT a Marketplace. NOT a Wallet.',
    'We are Commerce Intelligence + Rewards Infrastructure'
  );

  // What we are NOT
  slide.addText('What We Are NOT ❌', {
    x: '10%',
    y: '45%',
    w: '35%',
    h: '5%',
    fontSize: 16,
    bold: true,
    color: COLORS.red,
  });

  const notList = ['Marketplace (no inventory)', 'Payment processor', 'Pure loyalty program', 'Coupon aggregator'];
  let yPos = 52;
  notList.forEach((item) => {
    slide.addText(`• ${item}`, {
      x: '10%',
      y: `${yPos}%`,
      w: '35%',
      h: '4%',
      fontSize: 12,
      color: COLORS.slate[700],
    });
    yPos += 5;
  });

  // What we ARE
  slide.addText('What We ARE ✓', {
    x: '55%',
    y: '45%',
    w: '35%',
    h: '5%',
    fontSize: 16,
    bold: true,
    color: COLORS.green,
  });

  const areList = ['Commerce Intelligence', 'Price discovery engine', 'Rewards infrastructure', 'Data platform'];
  yPos = 52;
  areList.forEach((item) => {
    slide.addText(`• ${item}`, {
      x: '55%',
      y: `${yPos}%`,
      w: '35%',
      h: '4%',
      fontSize: 12,
      color: COLORS.slate[700],
    });
    yPos += 5;
  });
}

// Slide 9: Money Flow
function createSlide9() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);

  addTitleWithBadge(
    slide,
    'BUSINESS MODEL',
    'The Money Flow',
    'How value flows through the Nuqta ecosystem'
  );

  const flow = [
    { step: '1', desc: 'User spends AED 100 at merchant' },
    { step: '2', desc: 'Merchant pays AED 10 to Nuqta (10%)' },
    { step: '3', desc: 'Nuqta takes AED 5 revenue (5% margin)' },
    { step: '4', desc: 'User gets AED 5 cashback (5% Gold Coins)' },
    { step: '5', desc: 'Merchant gives AED 5 reward (5% Merchant Coins)' },
  ];

  let yPos = 45;
  flow.forEach((f) => {
    slide.addText([
      { text: `${f.step}. `, options: { fontSize: 18, bold: true, color: COLORS.accent } },
      { text: f.desc, options: { fontSize: 14, color: COLORS.slate[700] } },
    ], {
      x: '20%',
      y: `${yPos}%`,
      w: '60%',
      h: '5%',
      align: 'left',
    });
    yPos += 7;
  });

  // Summary
  slide.addText('Net: User saves 10%, Merchant keeps 90%, Nuqta earns 5% commission', {
    x: '15%',
    y: '82%',
    w: '70%',
    h: '6%',
    align: 'center',
    fontSize: 14,
    bold: true,
    color: COLORS.white,
    fill: { color: COLORS.green },
  });
}

// Slide 10: Revenue Model
function createSlide10() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);

  addTitleWithBadge(
    slide,
    'REVENUE MODEL',
    '5 Revenue Streams',
    'Diversified income from platform activity'
  );

  const streams = [
    { name: 'Transaction Fees', percentage: '70%', desc: '5% margin on GMV' },
    { name: 'Merchant SaaS', percentage: '15%', desc: 'Analytics + CRM tools' },
    { name: 'Sponsored Search', percentage: '10%', desc: 'Featured placements' },
    { name: 'Data Licensing', percentage: '3%', desc: 'Anonymized insights' },
    { name: 'Premium Features', percentage: '2%', desc: 'Power user tools' },
  ];

  let yPos = 45;
  streams.forEach((stream) => {
    slide.addShape(pptx.ShapeType.rect, {
      x: '20%',
      y: `${yPos}%`,
      w: `${parseInt(stream.percentage)}%`,
      h: '5%',
      fill: { color: COLORS.accent },
    });

    slide.addText([
      { text: `${stream.name} (${stream.percentage})\n`, options: { fontSize: 14, bold: true, color: COLORS.primary } },
      { text: stream.desc, options: { fontSize: 11, color: COLORS.slate[600] } },
    ], {
      x: '20%',
      y: `${yPos + 6}%`,
      w: '60%',
      h: '5%',
      align: 'left',
    });

    yPos += 12;
  });
}

// Slide 11: Unit Economics
function createSlide11() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);

  addTitleWithBadge(
    slide,
    'UNIT ECONOMICS',
    '18x LTV:CAC Ratio',
    'Industry-leading metrics with blended AED 30 CAC'
  );

  const metrics = [
    { label: 'GMV per User (Yearly)', value: 'AED 9,000' },
    { label: 'Nuqta Margin (5%)', value: 'AED 450' },
    { label: 'Gross Margin (80%)', value: 'AED 360' },
    { label: 'Blended CAC', value: 'AED 30' },
    { label: 'Lifetime Value (5 years)', value: 'AED 540' },
    { label: 'LTV:CAC Ratio', value: '18:1' },
  ];

  let yPos = 42;
  metrics.forEach((metric, index) => {
    const isHighlight = metric.label.includes('LTV:CAC');
    slide.addText([
      { text: `${metric.label}: `, options: { fontSize: 14, color: COLORS.slate[600] } },
      { text: metric.value, options: { fontSize: 18, bold: true, color: isHighlight ? COLORS.green : COLORS.accent } },
    ], {
      x: '25%',
      y: `${yPos}%`,
      w: '50%',
      h: '5%',
      align: 'left',
    });
    yPos += 7;
  });
}

// Slide 12: CAC Breakdown
function createSlide12() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);

  addTitleWithBadge(
    slide,
    'CUSTOMER ACQUISITION',
    'Blended AED 30 CAC',
    '75-85% lower than traditional e-commerce'
  );

  const channels = [
    { name: 'Viral/Referral', cac: 'AED 0-5', volume: '40%' },
    { name: 'Organic (SEO)', cac: 'AED 10-15', volume: '30%' },
    { name: 'Digital Ads', cac: 'AED 50-80', volume: '20%' },
    { name: 'Partnerships', cac: 'AED 20-30', volume: '10%' },
  ];

  let yPos = 48;
  channels.forEach((channel) => {
    slide.addText([
      { text: `${channel.name}\n`, options: { fontSize: 14, bold: true, color: COLORS.primary } },
      { text: `CAC: ${channel.cac}  •  Volume: ${channel.volume}`, options: { fontSize: 12, color: COLORS.slate[600] } },
    ], {
      x: '20%',
      y: `${yPos}%`,
      w: '60%',
      h: '8%',
      align: 'left',
    });
    yPos += 10;
  });
}

// Slide 13: 12-Month Projections
function createSlide13() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);

  addTitleWithBadge(
    slide,
    '12-MONTH PROJECTIONS',
    'Year 1 Targets',
    'Conservative estimates based on 10K users'
  );

  const projections = [
    { metric: 'Active Users', value: '10,000' },
    { metric: 'Monthly GMV', value: 'AED 750K' },
    { metric: 'Annual GMV', value: 'AED 9M' },
    { metric: 'Platform Revenue (5%)', value: 'AED 450K' },
    { metric: 'Merchant Network', value: '60 partners' },
    { metric: 'Avg Transactions/User', value: '15/year' },
  ];

  let yPos = 45;
  projections.forEach((proj, index) => {
    const xPos = index % 2 === 0 ? '15%' : '55%';
    const newYPos = index % 2 === 0 ? yPos : yPos;

    slide.addText([
      { text: `${proj.metric}\n`, options: { fontSize: 12, color: COLORS.slate[600] } },
      { text: proj.value, options: { fontSize: 20, bold: true, color: COLORS.accent } },
    ], {
      x: xPos,
      y: `${newYPos}%`,
      w: '30%',
      h: '10%',
      align: 'center',
    });

    if (index % 2 === 1) yPos += 12;
  });
}

// Slide 14: GTM Strategy
function createSlide14() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);

  addTitleWithBadge(
    slide,
    'GO-TO-MARKET STRATEGY',
    'Institutional-Grade GTM',
    'Phased rollout: Dubai Mall → Dubai City → GCC'
  );

  const phases = [
    { phase: 'Phase 1: Dubai Mall Pilot', timeline: 'Months 1-3', desc: '10 anchor merchants, 1,000 users' },
    { phase: 'Phase 2: Dubai Expansion', timeline: 'Months 4-6', desc: '30 merchants, 5,000 users' },
    { phase: 'Phase 3: UAE Nationwide', timeline: 'Months 7-9', desc: '60 merchants, 10,000 users' },
    { phase: 'Phase 4: GCC Expansion', timeline: 'Months 10-12', desc: 'Saudi Arabia launch, 100+ merchants' },
  ];

  let yPos = 45;
  phases.forEach((p) => {
    slide.addText([
      { text: `${p.phase}\n`, options: { fontSize: 14, bold: true, color: COLORS.primary } },
      { text: `${p.timeline}  •  ${p.desc}`, options: { fontSize: 11, color: COLORS.slate[600] } },
    ], {
      x: '15%',
      y: `${yPos}%`,
      w: '70%',
      h: '8%',
      align: 'left',
    });
    yPos += 10;
  });
}

// Slide 15: Traction
function createSlide15() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);

  addTitleWithBadge(
    slide,
    'TRACTION',
    'Real Momentum, Real Validation',
    'Strong pre-launch signals from both sides of the marketplace'
  );

  const traction = [
    { metric: '30+ Signed LOIs', desc: 'Letters of Intent from merchants' },
    { metric: '60+ Pipeline', desc: 'Additional merchants in discussions' },
    { metric: '95% MVP Complete', desc: 'App ready for pilot launch' },
    { metric: '500+ Waitlist', desc: 'Early adopter users signed up' },
    { metric: 'Q1 2026 Launch', desc: 'Pilot starting in 30 days' },
  ];

  let yPos = 45;
  traction.forEach((t) => {
    slide.addText([
      { text: `${t.metric}\n`, options: { fontSize: 18, bold: true, color: COLORS.accent } },
      { text: t.desc, options: { fontSize: 12, color: COLORS.slate[600] } },
    ], {
      x: '20%',
      y: `${yPos}%`,
      w: '60%',
      h: '7%',
      align: 'center',
    });
    yPos += 9;
  });
}

// Slide 16: Team
function createSlide16() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);

  addTitleWithBadge(
    slide,
    'TEAM',
    'Built by Experienced Operators',
    'Deep expertise in tech, commerce, and the GCC market'
  );

  slide.addText([
    { text: '👨‍💼 Founder: Rejaul Karim\n', options: { fontSize: 16, bold: true, color: COLORS.primary } },
    { text: '• 10+ years in tech and commerce\n', options: { fontSize: 12, color: COLORS.slate[600] } },
    { text: '• Previously built & scaled marketplace platform\n', options: { fontSize: 12, color: COLORS.slate[600] } },
    { text: '• Deep GCC market expertise\n\n', options: { fontSize: 12, color: COLORS.slate[600] } },

    { text: '🎯 Advisory Board:\n', options: { fontSize: 16, bold: true, color: COLORS.primary } },
    { text: '• E-commerce veterans\n', options: { fontSize: 12, color: COLORS.slate[600] } },
    { text: '• Retail industry experts\n', options: { fontSize: 12, color: COLORS.slate[600] } },
    { text: '• GCC market specialists', options: { fontSize: 12, color: COLORS.slate[600] } },
  ], {
    x: '20%',
    y: '45%',
    w: '60%',
    h: '40%',
    align: 'left',
    valign: 'top',
  });
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

// Slide 18: Vision
function createSlide18() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);

  addTitleWithBadge(
    slide,
    'VISION',
    'The Future of Commerce Intelligence',
    'Building the operating system for offline commerce'
  );

  const vision = [
    { year: 'Year 1', goal: 'Dominate Dubai with 10K users, 60 merchants' },
    { year: 'Year 2', goal: 'Expand to UAE + Saudi (50K users, 500 merchants)' },
    { year: 'Year 3', goal: 'GCC leader (200K users, 2,000 merchants)' },
    { year: 'Year 5', goal: 'Regional expansion + B2B commerce intelligence platform' },
  ];

  let yPos = 50;
  vision.forEach((v) => {
    slide.addText([
      { text: `${v.year}: `, options: { fontSize: 16, bold: true, color: COLORS.accent } },
      { text: v.goal, options: { fontSize: 13, color: COLORS.slate[700] } },
    ], {
      x: '15%',
      y: `${yPos}%`,
      w: '70%',
      h: '6%',
      align: 'left',
    });
    yPos += 9;
  });
}

// Slide 19: Competitive Landscape
function createSlide19() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);

  addTitleWithBadge(
    slide,
    'COMPETITIVE LANDSCAPE',
    'No Direct Competitor in GCC',
    'We combine features that no single player offers'
  );

  const competitors = [
    { name: 'Groupon/Cobone', weakness: 'Coupons only, no price intelligence' },
    { name: 'Talabat/Deliveroo', weakness: 'Food delivery, not offline retail' },
    { name: 'Noon/Amazon', weakness: 'E-commerce, not offline discovery' },
    { name: 'Google Shopping', weakness: 'No offline integration, no cashback' },
    { name: 'Bank Loyalty Programs', weakness: 'Locked to one bank, complex redemption' },
  ];

  let yPos = 48;
  competitors.forEach((comp) => {
    slide.addText([
      { text: `${comp.name}:  `, options: { fontSize: 13, bold: true, color: COLORS.primary } },
      { text: comp.weakness, options: { fontSize: 11, color: COLORS.red, italic: true } },
    ], {
      x: '15%',
      y: `${yPos}%`,
      w: '70%',
      h: '5%',
      align: 'left',
    });
    yPos += 7;
  });

  slide.addText('Nuqta = Price Discovery + Offline Commerce + Instant Cashback', {
    x: '15%',
    y: '82%',
    w: '70%',
    h: '6%',
    align: 'center',
    fontSize: 14,
    bold: true,
    color: COLORS.white,
    fill: { color: COLORS.green },
  });
}

// Slide 20: Competitive Moats
function createSlide20() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);

  addTitleWithBadge(
    slide,
    'COMPETITIVE MOATS',
    '4 Defensible Advantages',
    'Network effects + data moats create winner-take-all dynamics'
  );

  const moats = [
    { emoji: '🔗', title: 'Network Effects', desc: 'More users → more merchants → better prices → more users' },
    { emoji: '📊', title: 'Data Moat', desc: 'Proprietary price/demand intelligence improves over time' },
    { emoji: '⚡', title: 'First-Mover Advantage', desc: '12-18 month head start in GCC market' },
    { emoji: '🤝', title: 'Merchant Lock-In', desc: 'Once integrated, high switching costs for merchants' },
  ];

  let yPos = 48;
  moats.forEach((moat) => {
    slide.addText([
      { text: `${moat.emoji}  ${moat.title}\n`, options: { fontSize: 15, bold: true, color: COLORS.primary } },
      { text: moat.desc, options: { fontSize: 12, color: COLORS.slate[600] } },
    ], {
      x: '15%',
      y: `${yPos}%`,
      w: '70%',
      h: '10%',
      align: 'left',
    });
    yPos += 11;
  });
}

// Slide 21: Roadmap
function createSlide21() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);

  addTitleWithBadge(
    slide,
    'PRODUCT ROADMAP',
    '18-Month Development Plan',
    'From pilot to Series A-ready product'
  );

  const roadmap = [
    { quarter: 'Q1 2026', milestone: 'Dubai Mall pilot launch, 10 merchants, 1K users' },
    { quarter: 'Q2 2026', milestone: 'Dubai expansion, merchant analytics dashboard, 5K users' },
    { quarter: 'Q3 2026', milestone: 'UAE nationwide, predictive pricing AI, 10K users' },
    { quarter: 'Q4 2026', milestone: 'Saudi Arabia launch, B2B intelligence platform' },
    { quarter: 'Q1 2027', milestone: 'Series A fundraise ($3-5M), 30K users, 200 merchants' },
  ];

  let yPos = 45;
  roadmap.forEach((item) => {
    slide.addText([
      { text: `${item.quarter}:  `, options: { fontSize: 13, bold: true, color: COLORS.accent } },
      { text: item.milestone, options: { fontSize: 11, color: COLORS.slate[700] } },
    ], {
      x: '15%',
      y: `${yPos}%`,
      w: '70%',
      h: '6%',
      align: 'left',
    });
    yPos += 8;
  });
}

// Slide 22: Tech Stack
function createSlide22() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);

  addTitleWithBadge(
    slide,
    'TECHNOLOGY',
    'Modern, Scalable Tech Stack',
    'Built for rapid iteration and scale'
  );

  const tech = [
    { category: 'Frontend', stack: 'React Native (iOS/Android), Next.js (Web)' },
    { category: 'Backend', stack: 'Node.js, PostgreSQL, Redis, AWS' },
    { category: 'AI/ML', stack: 'TensorFlow (price predictions, recommendations)' },
    { category: 'Payments', stack: 'Stripe Connect, local UAE payment gateways' },
    { category: 'Infrastructure', stack: 'AWS (scalable to millions of users)' },
  ];

  let yPos = 48;
  tech.forEach((t) => {
    slide.addText([
      { text: `${t.category}:  `, options: { fontSize: 13, bold: true, color: COLORS.primary } },
      { text: t.stack, options: { fontSize: 11, color: COLORS.slate[600] } },
    ], {
      x: '15%',
      y: `${yPos}%`,
      w: '70%',
      h: '6%',
      align: 'left',
    });
    yPos += 8;
  });
}

// Slide 23: Questions
function createSlide23() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);

  addTitleWithBadge(
    slide,
    'FAQ',
    'Frequently Asked Questions',
    'Addressing common investor concerns'
  );

  const faqs = [
    { q: 'Why offline vs online?', a: 'Offline is 90% of retail. Huge untapped market.' },
    { q: 'How do you beat Google?', a: "We don't compete. We enable offline commerce Google can't index." },
    { q: 'What if merchants refuse?', a: "They're already paying 25-30% to ads. 10% is a bargain." },
    { q: 'User acquisition risk?', a: '10% cashback is self-marketing. Viral coefficient >1.2' },
  ];

  let yPos = 45;
  faqs.forEach((faq) => {
    slide.addText([
      { text: `Q: ${faq.q}\n`, options: { fontSize: 12, bold: true, color: COLORS.primary } },
      { text: `A: ${faq.a}`, options: { fontSize: 11, color: COLORS.slate[600] } },
    ], {
      x: '15%',
      y: `${yPos}%`,
      w: '70%',
      h: '8%',
      align: 'left',
    });
    yPos += 10;
  });
}

// Slide 24: Let's Talk
function createSlide24() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.primary);

  slide.addText("Let's Build the Future Together", {
    x: '15%',
    y: '30%',
    w: '70%',
    h: '12%',
    align: 'center',
    fontSize: 36,
    bold: true,
    color: COLORS.white,
  });

  slide.addText('Rejaul Karim', {
    x: '15%',
    y: '48%',
    w: '70%',
    h: '6%',
    align: 'center',
    fontSize: 20,
    bold: true,
    color: COLORS.accent,
  });

  slide.addText('Founder & CEO, Nuqta', {
    x: '15%',
    y: '55%',
    w: '70%',
    h: '4%',
    align: 'center',
    fontSize: 14,
    color: COLORS.slate[300],
  });

  slide.addText('rejaul@nuqtaapp.com', {
    x: '15%',
    y: '62%',
    w: '70%',
    h: '4%',
    align: 'center',
    fontSize: 16,
    color: COLORS.white,
  });

  slide.addText('📍 Dubai, UAE', {
    x: '15%',
    y: '68%',
    w: '70%',
    h: '4%',
    align: 'center',
    fontSize: 14,
    color: COLORS.slate[400],
  });
}

// Slide 25: Join Us
function createSlide25() {
  const slide = pptx.addSlide();
  addGradientSlide(slide, COLORS.slate[50]);

  addTitleWithBadge(
    slide,
    'JOIN THE JOURNEY',
    'Be Part of Something Big',
    'Help us transform offline commerce in the GCC'
  );

  slide.addText([
    { text: '🚀 What You Get:\n\n', options: { fontSize: 18, bold: true, color: COLORS.primary } },
    { text: '• Ground floor in $150B market opportunity\n', options: { fontSize: 13, color: COLORS.slate[700] } },
    { text: '• Proven founder with execution track record\n', options: { fontSize: 13, color: COLORS.slate[700] } },
    { text: '• Investor-friendly terms (SAFE, 20% discount)\n', options: { fontSize: 13, color: COLORS.slate[700] } },
    { text: '• Real traction (30+ signed LOIs, 95% MVP)\n', options: { fontSize: 13, color: COLORS.slate[700] } },
    { text: '• Clear path to Series A ($3-5M in 18 months)\n', options: { fontSize: 13, color: COLORS.slate[700] } },
  ], {
    x: '15%',
    y: '45%',
    w: '70%',
    h: '35%',
    align: 'left',
    valign: 'top',
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

  slide.addText('rejaul@nuqtaapp.com  •  nuqtaapp.com', {
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
createSlide23();  console.log('✓ Slide 23: Questions/FAQ');
createSlide24();  console.log('✓ Slide 24: Let\'s Talk');
createSlide25();  console.log('✓ Slide 25: Join Us');
createSlide26();  console.log('✓ Slide 26: Thank You');

// Save presentation
const filename = 'Nuqta-Pitch-Deck-2026.pptx';
await pptx.writeFile({ fileName: filename });

console.log(`\n✅ PowerPoint presentation generated successfully!`);
console.log(`📄 File: ${filename}`);
console.log(`📊 Total Slides: 27`);
console.log(`🎯 Ready for investor distribution\n`);
