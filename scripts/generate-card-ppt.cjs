#!/usr/bin/env node

/**
 * Nuqta Investor One-Pager (Card) - PowerPoint Generator
 * Converts the A4 tri-fold investor one-pager to PPTX format
 */

const PptxGenJS = require('pptxgenjs');

// Initialize presentation
const pptx = new PptxGenJS();

// Set presentation properties
pptx.author = 'Rejaul Karim';
pptx.company = 'Nuqta';
pptx.subject = 'Nuqta Investor One-Pager';
pptx.title = 'Nuqta: Investor One-Pager - $500K Pre-Seed';

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
};

// Slide 1: Front Cover (Outer Right Panel)
function createFrontCover() {
  const slide = pptx.addSlide();
  slide.background = { color: COLORS.primary };

  // Nuqta Logo/Brand
  slide.addText('Nuqta', {
    x: '20%',
    y: '12%',
    w: '60%',
    h: '10%',
    align: 'center',
    fontSize: 56,
    bold: true,
    color: COLORS.white,
  });

  // Tagline
  slide.addText('Search. Save. Earn.', {
    x: '20%',
    y: '22%',
    w: '60%',
    h: '4%',
    align: 'center',
    fontSize: 12,
    color: COLORS.slate[400],
    italic: true,
  });

  // 10% Cashback Highlight with badges
  slide.addShape(pptx.ShapeType.rect, {
    x: '15%',
    y: '29%',
    w: '70%',
    h: '10%',
    fill: { color: COLORS.accent, transparency: 20 },
    line: { color: COLORS.accent, width: 2 },
  });

  slide.addText('10% Offline Cashback', {
    x: '15%',
    y: '30%',
    w: '70%',
    h: '8%',
    align: 'center',
    fontSize: 28,
    bold: true,
    color: COLORS.accent,
  });

  slide.addText('5× vs Cards  •  Instant  •  No Credit Check', {
    x: '15%',
    y: '36%',
    w: '70%',
    h: '3%',
    align: 'center',
    fontSize: 8,
    color: COLORS.slate[300],
  });

  // Key Metrics Grid (2x2)
  const metrics = [
    { label: 'Raise', value: '$500K', sublabel: 'Pre-Seed' },
    { label: 'TAM', value: '$150B', sublabel: 'GCC Market' },
    { label: '↓ CAC', value: '75-85%', sublabel: 'Merchant Savings' },
    { label: '2026', value: 'Q1', sublabel: 'Launch' },
  ];

  let yPos = 46;
  metrics.forEach((metric, index) => {
    const xPos = index % 2 === 0 ? '12%' : '54%';
    const newYPos = index % 2 === 0 ? yPos : yPos;

    slide.addShape(pptx.ShapeType.rect, {
      x: xPos,
      y: `${newYPos}%`,
      w: '34%',
      h: '13%',
      fill: { color: COLORS.slate[800], transparency: 80 },
      line: { color: COLORS.accent, width: 1.5 },
    });

    slide.addText([
      { text: `${metric.label}\n`, options: { fontSize: 8, color: COLORS.slate[400], bold: true } },
      { text: `${metric.value}\n`, options: { fontSize: 22, bold: true, color: COLORS.accent } },
      { text: metric.sublabel, options: { fontSize: 7, color: COLORS.slate[500] } },
    ], {
      x: xPos,
      y: `${newYPos + 1}%`,
      w: '34%',
      h: '11%',
      align: 'center',
      valign: 'middle',
    });

    if (index % 2 === 1) yPos += 16;
  });

  // Value Proposition
  slide.addText('Rewards-Led Commerce Intelligence Platform', {
    x: '15%',
    y: '80%',
    w: '70%',
    h: '5%',
    align: 'center',
    fontSize: 11,
    bold: true,
    color: COLORS.accent,
  });

  // Contact Section
  slide.addText([
    { text: '📧 ', options: { fontSize: 10 } },
    { text: 'rejaul@nuqtaapp.com\n', options: { fontSize: 10, color: COLORS.white } },
    { text: '📍 ', options: { fontSize: 9 } },
    { text: 'Dubai, UAE  •  ', options: { fontSize: 9, color: COLORS.slate[400] } },
    { text: 'Available 24/7', options: { fontSize: 9, color: COLORS.slate[500] } },
  ], {
    x: '15%',
    y: '87%',
    w: '70%',
    h: '8%',
    align: 'center',
    valign: 'middle',
  });
}

// Slide 2: Problem (Outer Middle Panel)
function createProblem() {
  const slide = pptx.addSlide();
  slide.background = { color: COLORS.slate[50] };

  // Header Badge
  slide.addText('THE PROBLEM', {
    x: '5%',
    y: '4%',
    w: '90%',
    h: '5%',
    align: 'center',
    fontSize: 11,
    bold: true,
    color: COLORS.white,
    fill: { color: COLORS.red },
  });

  // Title with Badge
  slide.addShape(pptx.ShapeType.rect, {
    x: '10%',
    y: '11%',
    w: '80%',
    h: '8%',
    fill: { color: COLORS.red, transparency: 10 },
    line: { color: COLORS.red, width: 2 },
  });

  slide.addText('AED 2.4B Wasted Annually', {
    x: '10%',
    y: '12%',
    w: '80%',
    h: '6%',
    align: 'center',
    fontSize: 24,
    bold: true,
    color: COLORS.red,
  });

  slide.addText('UAE shoppers lose AED 684 per person yearly', {
    x: '10%',
    y: '21%',
    w: '80%',
    h: '4%',
    align: 'center',
    fontSize: 9,
    color: COLORS.slate[600],
  });

  // User Pain Points Section
  slide.addText('User Pain Points:', {
    x: '8%',
    y: '28%',
    w: '84%',
    h: '4%',
    align: 'left',
    fontSize: 10,
    bold: true,
    color: COLORS.primary,
  });

  const userProblems = [
    { stat: '73%', desc: 'Overpay for products', detail: 'No real-time price comparison' },
    { stat: '63%', desc: 'Rewards unclaimed', detail: 'Too complex to redeem' },
    { stat: '80%', desc: 'No comparison tools', detail: 'Rely on Google searches' },
  ];

  let yPos = 34;
  userProblems.forEach((problem) => {
    slide.addShape(pptx.ShapeType.rect, {
      x: '10%',
      y: `${yPos}%`,
      w: '80%',
      h: '9%',
      fill: { color: COLORS.white },
      line: { color: COLORS.red, width: 1 },
    });

    slide.addText([
      { text: `${problem.stat} `, options: { fontSize: 20, bold: true, color: COLORS.red } },
      { text: `${problem.desc}\n`, options: { fontSize: 9, bold: true, color: COLORS.slate[800] } },
      { text: problem.detail, options: { fontSize: 7, color: COLORS.slate[500], italic: true } },
    ], {
      x: '12%',
      y: `${yPos + 1}%`,
      w: '76%',
      h: '7%',
      align: 'center',
      valign: 'middle',
    });
    yPos += 10;
  });

  // Merchant Pain Section
  slide.addText('Merchant Pain:', {
    x: '8%',
    y: '66%',
    w: '84%',
    h: '4%',
    align: 'left',
    fontSize: 10,
    bold: true,
    color: COLORS.primary,
  });

  slide.addShape(pptx.ShapeType.rect, {
    x: '10%',
    y: '71%',
    w: '80%',
    h: '10%',
    fill: { color: COLORS.orange, transparency: 10 },
    line: { color: COLORS.orange, width: 2 },
  });

  slide.addText([
    { text: '-30% Margin Impact\n', options: { fontSize: 14, bold: true, color: COLORS.orange } },
    { text: 'CAC crisis eating profitability', options: { fontSize: 8, color: COLORS.slate[700] } },
  ], {
    x: '12%',
    y: '72%',
    w: '76%',
    h: '8%',
    align: 'center',
    valign: 'middle',
  });

  // Lost Value Callout
  slide.addShape(pptx.ShapeType.rect, {
    x: '10%',
    y: '84%',
    w: '80%',
    h: '10%',
    fill: { color: COLORS.red },
    line: { color: COLORS.red, width: 0 },
  });

  slide.addText([
    { text: '💸 Zero ROI Visibility\n', options: { fontSize: 9, bold: true, color: COLORS.white } },
    { text: 'Merchants spend blindly on Google Ads & Meta', options: { fontSize: 7, color: COLORS.slate[200] } },
  ], {
    x: '12%',
    y: '85%',
    w: '76%',
    h: '8%',
    align: 'center',
    valign: 'middle',
  });
}

// Slide 3: Market & Investment (Outer Left Panel)
function createMarketInvestment() {
  const slide = pptx.addSlide();
  slide.background = { color: COLORS.slate[50] };

  // Header
  slide.addText('MARKET & INVESTMENT', {
    x: '5%',
    y: '4%',
    w: '90%',
    h: '5%',
    align: 'center',
    fontSize: 11,
    bold: true,
    color: COLORS.white,
    fill: { color: COLORS.blue },
  });

  // Market Opportunity Section
  slide.addText('$150B GCC Market', {
    x: '5%',
    y: '11%',
    w: '90%',
    h: '5%',
    align: 'center',
    fontSize: 18,
    bold: true,
    color: COLORS.blue,
  });

  // TAM/SAM/SOM with visual bars
  const marketData = [
    { label: 'TAM', value: '$150B', desc: 'GCC Offline Retail', width: '85%', color: COLORS.blue },
    { label: 'SAM', value: '$85B', desc: 'UAE + KSA Focus Markets', width: '65%', color: COLORS.purple },
    { label: 'SOM', value: '$8.5B', desc: 'Year 1-3 Target (10%)', width: '45%', color: COLORS.emerald },
  ];

  let yPos = 18;
  marketData.forEach((m) => {
    // Label and value
    slide.addText([
      { text: `${m.label}: `, options: { fontSize: 9, bold: true, color: COLORS.slate[700] } },
      { text: `${m.value} `, options: { fontSize: 10, bold: true, color: m.color } },
      { text: `${m.desc}`, options: { fontSize: 7, color: COLORS.slate[500] } },
    ], {
      x: '8%',
      y: `${yPos}%`,
      w: '84%',
      h: '3%',
      align: 'left',
    });
    yPos += 4.5;
  });

  // GTM Phases Section
  slide.addText('Go-to-Market Phases', {
    x: '8%',
    y: '34%',
    w: '84%',
    h: '4%',
    align: 'left',
    fontSize: 10,
    bold: true,
    color: COLORS.primary,
  });

  const gtmPhases = [
    { phase: 'Q1 2026', focus: 'Dubai Mall Pilot', metrics: '10 merchants, 1K users' },
    { phase: 'Q2 2026', focus: 'Dubai Expansion', metrics: '50 merchants, 5K users' },
    { phase: 'Q3 2026', focus: 'UAE-wide', metrics: '200 merchants, 20K users' },
    { phase: 'Q4 2026', focus: 'GCC Launch', metrics: 'KSA + regional expansion' },
  ];

  yPos = 39;
  gtmPhases.forEach((gtm) => {
    slide.addText([
      { text: `${gtm.phase}: `, options: { fontSize: 8, bold: true, color: COLORS.accent } },
      { text: `${gtm.focus} `, options: { fontSize: 7, bold: true, color: COLORS.slate[700] } },
      { text: `(${gtm.metrics})`, options: { fontSize: 6, color: COLORS.slate[500], italic: true } },
    ], {
      x: '8%',
      y: `${yPos}%`,
      w: '84%',
      h: '3%',
      align: 'left',
    });
    yPos += 3.5;
  });

  // Competitive Landscape Table
  slide.addText('Competitive Landscape', {
    x: '8%',
    y: '54%',
    w: '84%',
    h: '4%',
    align: 'left',
    fontSize: 10,
    bold: true,
    color: COLORS.primary,
  });

  // Add table with competitive comparison
  const tableData = [
    [
      { text: '', options: { fontSize: 7, bold: true, color: COLORS.slate[600] } },
      { text: 'Nuqta', options: { fontSize: 7, bold: true, color: COLORS.accent } },
      { text: 'Cards', options: { fontSize: 7, color: COLORS.slate[500] } },
      { text: 'Smiles', options: { fontSize: 7, color: COLORS.slate[500] } },
    ],
    [
      { text: 'Offline', options: { fontSize: 7, color: COLORS.slate[700] } },
      { text: '✓', options: { fontSize: 9, color: COLORS.green } },
      { text: '×', options: { fontSize: 9, color: COLORS.red } },
      { text: '×', options: { fontSize: 9, color: COLORS.red } },
    ],
    [
      { text: 'Universal', options: { fontSize: 7, color: COLORS.slate[700] } },
      { text: '✓', options: { fontSize: 9, color: COLORS.green } },
      { text: '×', options: { fontSize: 9, color: COLORS.red } },
      { text: '✓', options: { fontSize: 9, color: COLORS.green } },
    ],
    [
      { text: 'Cashback', options: { fontSize: 7, color: COLORS.slate[700] } },
      { text: '10%', options: { fontSize: 7, bold: true, color: COLORS.accent } },
      { text: '2%', options: { fontSize: 7, color: COLORS.slate[500] } },
      { text: 'Points', options: { fontSize: 7, color: COLORS.slate[500] } },
    ],
  ];

  slide.addTable(tableData, {
    x: '8%',
    y: '59%',
    w: '84%',
    h: '14%',
    border: { pt: 1, color: COLORS.slate[300] },
    fill: { color: COLORS.white },
    align: 'center',
    valign: 'middle',
  });

  // Use of Funds Section
  slide.addText('Use of Funds', {
    x: '8%',
    y: '75%',
    w: '84%',
    h: '3%',
    align: 'left',
    fontSize: 9,
    bold: true,
    color: COLORS.primary,
  });

  const fundsData = [
    { category: 'Product & Tech', amount: '$200K', percent: '40%', color: COLORS.blue },
    { category: 'Marketing & Growth', amount: '$175K', percent: '35%', color: COLORS.emerald },
    { category: 'Operations & Legal', amount: '$125K', percent: '25%', color: COLORS.purple },
  ];

  yPos = 79;
  fundsData.forEach((fund) => {
    slide.addText([
      { text: `${fund.percent} `, options: { fontSize: 8, bold: true, color: fund.color } },
      { text: `${fund.category} `, options: { fontSize: 7, color: COLORS.slate[700] } },
      { text: `(${fund.amount})`, options: { fontSize: 6, color: COLORS.slate[500] } },
    ], {
      x: '8%',
      y: `${yPos}%`,
      w: '84%',
      h: '2.5%',
      align: 'left',
    });
    yPos += 3;
  });

  // The Ask - Highlighted
  slide.addShape(pptx.ShapeType.rect, {
    x: '8%',
    y: '90%',
    w: '84%',
    h: '8%',
    fill: { color: COLORS.primary },
    line: { color: COLORS.accent, width: 2 },
  });

  slide.addText([
    { text: 'THE ASK: ', options: { fontSize: 8, bold: true, color: COLORS.accent } },
    { text: '$500K Pre-Seed ', options: { fontSize: 12, bold: true, color: COLORS.white } },
    { text: '• SAFE • $6M Cap • 20% Discount', options: { fontSize: 7, color: COLORS.slate[300] } },
  ], {
    x: '8%',
    y: '91%',
    w: '84%',
    h: '6%',
    align: 'center',
    valign: 'middle',
  });
}

// Slide 4: Why Now (Inner Left Panel)
function createWhyNow() {
  const slide = pptx.addSlide();
  slide.background = { color: COLORS.slate[50] };

  slide.addText('WHY NOW', {
    x: '20%',
    y: '8%',
    w: '60%',
    h: '6%',
    align: 'center',
    fontSize: 12,
    bold: true,
    color: COLORS.white,
    fill: { color: COLORS.purple },
  });

  slide.addText('Perfect Timing Window', {
    x: '10%',
    y: '18%',
    w: '80%',
    h: '7%',
    align: 'center',
    fontSize: 22,
    bold: true,
    color: COLORS.purple,
  });

  const trends = [
    '📱 98% smartphone penetration',
    '💳 Tap-to-pay everywhere',
    '💰 CAC crisis for merchants',
    '🏆 UAE: Affluent early adopters',
    '⚡ 12-18mo first-mover advantage',
  ];

  let yPos = 32;
  trends.forEach((trend) => {
    slide.addText(trend, {
      x: '15%',
      y: `${yPos}%`,
      w: '70%',
      h: '6%',
      align: 'left',
      fontSize: 11,
      color: COLORS.slate[700],
    });
    yPos += 9;
  });

  slide.addText('Launch: Q1 2026 (30 days)', {
    x: '15%',
    y: '82%',
    w: '70%',
    h: '8%',
    align: 'center',
    fontSize: 13,
    bold: true,
    color: COLORS.white,
    fill: { color: COLORS.emerald },
  });
}

// Slide 5: Solution & Flow (Inner Middle Panel)
function createSolution() {
  const slide = pptx.addSlide();
  slide.background = { color: COLORS.slate[50] };

  slide.addText('THE SOLUTION', {
    x: '5%',
    y: '4%',
    w: '90%',
    h: '5%',
    align: 'center',
    fontSize: 11,
    bold: true,
    color: COLORS.white,
    fill: { color: COLORS.green },
  });

  slide.addText('10% Instant Cashback', {
    x: '5%',
    y: '11%',
    w: '90%',
    h: '5%',
    align: 'center',
    fontSize: 18,
    bold: true,
    color: COLORS.green,
  });

  slide.addText('5× more than credit cards, no credit check', {
    x: '5%',
    y: '16%',
    w: '90%',
    h: '3%',
    align: 'center',
    fontSize: 8,
    color: COLORS.slate[600],
  });

  // User Journey
  slide.addText('3-Step User Journey', {
    x: '8%',
    y: '21%',
    w: '84%',
    h: '4%',
    align: 'left',
    fontSize: 10,
    bold: true,
    color: COLORS.primary,
  });

  const steps = [
    { num: '1', title: 'Search', desc: 'Compare prices across stores nearby' },
    { num: '2', title: 'Shop', desc: 'Buy offline, show QR at checkout' },
    { num: '3', title: 'Earn', desc: 'Get 10% cashback instantly deposited' },
  ];

  let yPos = 26;
  steps.forEach((step) => {
    slide.addShape(pptx.ShapeType.rect, {
      x: '10%',
      y: `${yPos}%`,
      w: '80%',
      h: '6%',
      fill: { color: COLORS.white },
      line: { color: COLORS.green, width: 1 },
    });

    slide.addText([
      { text: `${step.num}. ${step.title}: `, options: { fontSize: 9, bold: true, color: COLORS.accent } },
      { text: step.desc, options: { fontSize: 8, color: COLORS.slate[700] } },
    ], {
      x: '12%',
      y: `${yPos + 1}%`,
      w: '76%',
      h: '4%',
      align: 'left',
      valign: 'middle',
    });
    yPos += 7;
  });

  // Business Model Section
  slide.addText('Revenue Split', {
    x: '8%',
    y: '49%',
    w: '84%',
    h: '4%',
    align: 'left',
    fontSize: 10,
    bold: true,
    color: COLORS.primary,
  });

  slide.addText('Merchant pays 10% commission:', {
    x: '10%',
    y: '53%',
    w: '80%',
    h: '3%',
    align: 'left',
    fontSize: 7,
    color: COLORS.slate[600],
  });

  const revenueData = [
    { label: 'User Cashback', percent: '5%', color: COLORS.blue },
    { label: 'Social Referral', percent: '5%', color: COLORS.purple },
    { label: 'Nuqta Revenue', percent: '5%', color: COLORS.green },
  ];

  yPos = 57;
  revenueData.forEach((rev) => {
    slide.addText([
      { text: `${rev.percent} `, options: { fontSize: 9, bold: true, color: rev.color } },
      { text: rev.label, options: { fontSize: 8, color: COLORS.slate[700] } },
    ], {
      x: '12%',
      y: `${yPos}%`,
      w: '76%',
      h: '3%',
      align: 'left',
    });
    yPos += 4;
  });

  // Dual Coin System
  slide.addText('Dual Coin System', {
    x: '8%',
    y: '71%',
    w: '84%',
    h: '4%',
    align: 'left',
    fontSize: 10,
    bold: true,
    color: COLORS.primary,
  });

  slide.addShape(pptx.ShapeType.rect, {
    x: '10%',
    y: '76%',
    w: '38%',
    h: '8%',
    fill: { color: COLORS.accent, transparency: 10 },
    line: { color: COLORS.accent, width: 1 },
  });

  slide.addText([
    { text: '🪙 Gold Coins\n', options: { fontSize: 8, bold: true, color: COLORS.accent } },
    { text: 'Universal, any merchant', options: { fontSize: 6, color: COLORS.slate[700] } },
  ], {
    x: '11%',
    y: '77%',
    w: '36%',
    h: '6%',
    align: 'center',
    valign: 'middle',
  });

  slide.addShape(pptx.ShapeType.rect, {
    x: '52%',
    y: '76%',
    w: '38%',
    h: '8%',
    fill: { color: COLORS.purple, transparency: 10 },
    line: { color: COLORS.purple, width: 1 },
  });

  slide.addText([
    { text: '💎 Merchant Coins\n', options: { fontSize: 8, bold: true, color: COLORS.purple } },
    { text: 'Brand-specific loyalty', options: { fontSize: 6, color: COLORS.slate[700] } },
  ], {
    x: '53%',
    y: '77%',
    w: '36%',
    h: '6%',
    align: 'center',
    valign: 'middle',
  });

  // 12-Month Projections
  slide.addText('12-Month Projections', {
    x: '8%',
    y: '86%',
    w: '84%',
    h: '3%',
    align: 'left',
    fontSize: 9,
    bold: true,
    color: COLORS.primary,
  });

  slide.addText([
    { text: '10K users ', options: { fontSize: 7, bold: true, color: COLORS.blue } },
    { text: '• ', options: { fontSize: 7, color: COLORS.slate[400] } },
    { text: 'AED 9M GMV ', options: { fontSize: 7, bold: true, color: COLORS.emerald } },
    { text: '• ', options: { fontSize: 7, color: COLORS.slate[400] } },
    { text: 'AED 450K Revenue', options: { fontSize: 7, bold: true, color: COLORS.green } },
  ], {
    x: '10%',
    y: '90%',
    w: '80%',
    h: '4%',
    align: 'center',
    valign: 'middle',
  });
}

// Slide 6: Traction, Team & Closing (Inner Right Panel)
function createTractionTeam() {
  const slide = pptx.addSlide();
  slide.background = { color: COLORS.slate[50] };

  slide.addText('TRACTION & TEAM', {
    x: '5%',
    y: '4%',
    w: '90%',
    h: '5%',
    align: 'center',
    fontSize: 11,
    bold: true,
    color: COLORS.white,
    fill: { color: COLORS.emerald },
  });

  // Traction Metrics
  slide.addText('Current Traction', {
    x: '8%',
    y: '11%',
    w: '84%',
    h: '4%',
    align: 'left',
    fontSize: 10,
    bold: true,
    color: COLORS.primary,
  });

  const traction = [
    { emoji: '✓', text: '30+ Signed LOIs', detail: 'Electronics, fashion, F&B' },
    { emoji: '✓', text: '60+ Pipeline', detail: 'Active merchant discussions' },
    { emoji: '✓', text: '95% MVP Complete', detail: 'Live in 30 days' },
    { emoji: '✓', text: 'Merchant NPS: 92', detail: '"Game-changer for our CAC"' },
  ];

  let yPos = 16;
  traction.forEach((item) => {
    slide.addText([
      { text: `${item.emoji} `, options: { fontSize: 9, color: COLORS.green } },
      { text: `${item.text} `, options: { fontSize: 8, bold: true, color: COLORS.slate[800] } },
      { text: `— ${item.detail}`, options: { fontSize: 6, color: COLORS.slate[500], italic: true } },
    ], {
      x: '10%',
      y: `${yPos}%`,
      w: '80%',
      h: '3%',
      align: 'left',
    });
    yPos += 4;
  });

  // Team Section
  slide.addText('Founder & Team', {
    x: '8%',
    y: '34%',
    w: '84%',
    h: '4%',
    align: 'left',
    fontSize: 10,
    bold: true,
    color: COLORS.primary,
  });

  slide.addShape(pptx.ShapeType.rect, {
    x: '10%',
    y: '39%',
    w: '80%',
    h: '16%',
    fill: { color: COLORS.white },
    line: { color: COLORS.accent, width: 1 },
  });

  slide.addText([
    { text: 'Rejaul Karim ', options: { fontSize: 10, bold: true, color: COLORS.primary } },
    { text: '— Founder & CEO\n', options: { fontSize: 7, color: COLORS.slate[600] } },
  ], {
    x: '12%',
    y: '40%',
    w: '76%',
    h: '4%',
    align: 'left',
  });

  const credentials = [
    '• 10+ years building tech & commerce platforms',
    '• Scaled ecommerce products to 500K+ users',
    '• Deep GCC market expertise & merchant network',
    '• Technical founder (full-stack + AI/ML)',
  ];

  yPos = 44;
  credentials.forEach((cred) => {
    slide.addText(cred, {
      x: '13%',
      y: `${yPos}%`,
      w: '74%',
      h: '2.5%',
      align: 'left',
      fontSize: 6,
      color: COLORS.slate[700],
    });
    yPos += 2.5;
  });

  // Competitive Moats Section
  slide.addText('4 Competitive Moats', {
    x: '8%',
    y: '57%',
    w: '84%',
    h: '4%',
    align: 'left',
    fontSize: 10,
    bold: true,
    color: COLORS.primary,
  });

  const moats = [
    { icon: '🌐', title: 'Network Effects', desc: 'More users → more merchants → more users' },
    { icon: '📊', title: 'Data Moat', desc: 'Price & behavior data = competitive intelligence' },
    { icon: '⚡', title: 'First-Mover', desc: '12-18 month head start in GCC market' },
    { icon: '🔒', title: 'Merchant Lock-In', desc: 'Direct checkout integration = switching costs' },
  ];

  yPos = 62;
  moats.forEach((moat) => {
    slide.addText([
      { text: `${moat.icon} ${moat.title}: `, options: { fontSize: 7, bold: true, color: COLORS.primary } },
      { text: moat.desc, options: { fontSize: 6, color: COLORS.slate[600] } },
    ], {
      x: '10%',
      y: `${yPos}%`,
      w: '80%',
      h: '3%',
      align: 'left',
    });
    yPos += 4;
  });

  // Call to Action
  slide.addShape(pptx.ShapeType.rect, {
    x: '8%',
    y: '84%',
    w: '84%',
    h: '12%',
    fill: { color: COLORS.primary },
    line: { color: COLORS.accent, width: 2 },
  });

  slide.addText([
    { text: "Let's Talk\n", options: { fontSize: 13, bold: true, color: COLORS.accent } },
    { text: 'rejaul@nuqtaapp.com\n', options: { fontSize: 9, color: COLORS.white } },
    { text: 'Dubai, UAE • Available 24/7', options: { fontSize: 7, color: COLORS.slate[400] } },
  ], {
    x: '8%',
    y: '85%',
    w: '84%',
    h: '10%',
    align: 'center',
    valign: 'middle',
  });
}

// Generate all slides
console.log('🎨 Generating Nuqta Investor One-Pager PowerPoint...\n');

createFrontCover();       console.log('✓ Slide 1: Front Cover (Outer Right)');
createProblem();          console.log('✓ Slide 2: Problem (Outer Middle)');
createMarketInvestment(); console.log('✓ Slide 3: Market & Investment (Outer Left)');
createWhyNow();           console.log('✓ Slide 4: Why Now (Inner Left)');
createSolution();         console.log('✓ Slide 5: Solution & Flow (Inner Middle)');
createTractionTeam();     console.log('✓ Slide 6: Traction, Team & Closing (Inner Right)');

// Save presentation
const filename = 'Nuqta-Investor-One-Pager-2026.pptx';
pptx.writeFile({ fileName: filename }).then(() => {
  console.log(`\n✅ Investor One-Pager PowerPoint generated successfully!`);
  console.log(`📄 File: ${filename}`);
  console.log(`📊 Total Slides: 6 (A4 Tri-Fold One-Pager)`);
  console.log(`🎯 Ready for investor distribution\n`);
}).catch(err => {
  console.error('❌ Error generating PowerPoint:', err);
  process.exit(1);
});
