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
    y: '15%',
    w: '60%',
    h: '12%',
    align: 'center',
    fontSize: 56,
    bold: true,
    color: COLORS.white,
  });

  // 10% Cashback Highlight
  slide.addText('10% Offline Cashback', {
    x: '20%',
    y: '30%',
    w: '60%',
    h: '8%',
    align: 'center',
    fontSize: 24,
    bold: true,
    color: COLORS.accent,
  });

  // Key Metrics Grid
  const metrics = [
    { label: 'Raising', value: '$500K' },
    { label: 'TAM', value: '$150B' },
    { label: 'CAC Reduction', value: '75-85%' },
    { label: 'Launch', value: 'Q1 2026' },
  ];

  let yPos = 45;
  metrics.forEach((metric, index) => {
    const xPos = index % 2 === 0 ? '15%' : '55%';
    const newYPos = index % 2 === 0 ? yPos : yPos;

    slide.addShape(pptx.ShapeType.rect, {
      x: xPos,
      y: `${newYPos}%`,
      w: '30%',
      h: '12%',
      fill: { color: COLORS.slate[800], transparency: 50 },
      line: { color: COLORS.accent, width: 2 },
    });

    slide.addText([
      { text: `${metric.label}\n`, options: { fontSize: 10, color: COLORS.slate[400] } },
      { text: metric.value, options: { fontSize: 20, bold: true, color: COLORS.accent } },
    ], {
      x: xPos,
      y: `${newYPos + 2}%`,
      w: '30%',
      h: '8%',
      align: 'center',
      valign: 'middle',
    });

    if (index % 2 === 1) yPos += 15;
  });

  // Tagline
  slide.addText('Commerce Intelligence', {
    x: '20%',
    y: '80%',
    w: '60%',
    h: '6%',
    align: 'center',
    fontSize: 16,
    color: COLORS.slate[300],
  });

  // Contact
  slide.addText('rejaul@nuqtaapp.com', {
    x: '20%',
    y: '88%',
    w: '60%',
    h: '5%',
    align: 'center',
    fontSize: 11,
    color: COLORS.slate[500],
  });
}

// Slide 2: Problem (Outer Middle Panel)
function createProblem() {
  const slide = pptx.addSlide();
  slide.background = { color: COLORS.slate[50] };

  // Header Badge
  slide.addText('THE PROBLEM', {
    x: '20%',
    y: '8%',
    w: '60%',
    h: '6%',
    align: 'center',
    fontSize: 12,
    bold: true,
    color: COLORS.white,
    fill: { color: COLORS.red },
  });

  // Title
  slide.addText('AED 2.4B Wasted Annually', {
    x: '10%',
    y: '18%',
    w: '80%',
    h: '8%',
    align: 'center',
    fontSize: 28,
    bold: true,
    color: COLORS.red,
  });

  slide.addText('UAE shoppers lose AED 684 per person on suboptimal decisions', {
    x: '15%',
    y: '28%',
    w: '70%',
    h: '6%',
    align: 'center',
    fontSize: 12,
    color: COLORS.slate[600],
  });

  // Problem Stats
  const problems = [
    { stat: '73%', desc: 'Overpay for products' },
    { stat: '63%', desc: 'Rewards unclaimed' },
    { stat: '80%', desc: 'No price comparison' },
  ];

  let yPos = 40;
  problems.forEach((problem) => {
    slide.addText([
      { text: `${problem.stat}\n`, options: { fontSize: 32, bold: true, color: COLORS.red } },
      { text: problem.desc, options: { fontSize: 11, color: COLORS.slate[700] } },
    ], {
      x: '20%',
      y: `${yPos}%`,
      w: '60%',
      h: '12%',
      align: 'center',
    });
    yPos += 14;
  });

  // Merchant Pain
  slide.addText('Merchant Pain: -30% Margins to CAC', {
    x: '15%',
    y: '82%',
    w: '70%',
    h: '8%',
    align: 'center',
    fontSize: 13,
    bold: true,
    color: COLORS.white,
    fill: { color: COLORS.orange },
  });
}

// Slide 3: Market & Investment (Outer Left Panel)
function createMarketInvestment() {
  const slide = pptx.addSlide();
  slide.background = { color: COLORS.slate[50] };

  // Header
  slide.addText('MARKET & INVESTMENT', {
    x: '20%',
    y: '8%',
    w: '60%',
    h: '6%',
    align: 'center',
    fontSize: 12,
    bold: true,
    color: COLORS.white,
    fill: { color: COLORS.blue },
  });

  // Market Opportunity
  slide.addText('$150B GCC Opportunity', {
    x: '10%',
    y: '18%',
    w: '80%',
    h: '7%',
    align: 'center',
    fontSize: 24,
    bold: true,
    color: COLORS.blue,
  });

  // TAM/SAM/SOM
  const market = [
    { label: 'TAM (GCC)', value: '$150B' },
    { label: 'SAM (UAE+KSA)', value: '$85B' },
    { label: 'SOM (Y1-3)', value: '$8.5B' },
  ];

  let yPos = 30;
  market.forEach((m) => {
    slide.addText([
      { text: `${m.label}: `, options: { fontSize: 10, color: COLORS.slate[600] } },
      { text: m.value, options: { fontSize: 16, bold: true, color: COLORS.blue } },
    ], {
      x: '20%',
      y: `${yPos}%`,
      w: '60%',
      h: '5%',
      align: 'center',
    });
    yPos += 7;
  });

  // GTM Phases
  slide.addText('GTM: Dubai → UAE → GCC', {
    x: '15%',
    y: '56%',
    w: '70%',
    h: '5%',
    align: 'center',
    fontSize: 12,
    bold: true,
    color: COLORS.primary,
  });

  // Competition
  slide.addText('No Direct Competitor in GCC', {
    x: '15%',
    y: '64%',
    w: '70%',
    h: '5%',
    align: 'center',
    fontSize: 11,
    color: COLORS.green,
    bold: true,
  });

  // The Ask - Highlighted
  slide.addShape(pptx.ShapeType.rect, {
    x: '10%',
    y: '73%',
    w: '80%',
    h: '20%',
    fill: { color: COLORS.primary },
    line: { color: COLORS.accent, width: 3 },
  });

  slide.addText('THE ASK', {
    x: '10%',
    y: '75%',
    w: '80%',
    h: '4%',
    align: 'center',
    fontSize: 10,
    bold: true,
    color: COLORS.accent,
  });

  slide.addText('$500K Pre-Seed', {
    x: '10%',
    y: '79%',
    w: '80%',
    h: '6%',
    align: 'center',
    fontSize: 20,
    bold: true,
    color: COLORS.white,
  });

  slide.addText('SAFE • $6M Cap • 20% Discount', {
    x: '10%',
    y: '86%',
    w: '80%',
    h: '4%',
    align: 'center',
    fontSize: 9,
    color: COLORS.slate[300],
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
    x: '20%',
    y: '8%',
    w: '60%',
    h: '6%',
    align: 'center',
    fontSize: 12,
    bold: true,
    color: COLORS.white,
    fill: { color: COLORS.green },
  });

  slide.addText('10% Instant Cashback', {
    x: '10%',
    y: '18%',
    w: '80%',
    h: '7%',
    align: 'center',
    fontSize: 24,
    bold: true,
    color: COLORS.green,
  });

  // User Journey
  const steps = [
    { num: '1', text: 'Search: Compare prices across stores' },
    { num: '2', text: 'Shop: Buy offline, show QR at checkout' },
    { num: '3', text: 'Earn: Get 10% cashback instantly' },
  ];

  let yPos = 32;
  steps.forEach((step) => {
    slide.addText([
      { text: `${step.num}. `, options: { fontSize: 14, bold: true, color: COLORS.accent } },
      { text: step.text, options: { fontSize: 11, color: COLORS.slate[700] } },
    ], {
      x: '15%',
      y: `${yPos}%`,
      w: '70%',
      h: '6%',
      align: 'left',
    });
    yPos += 9;
  });

  // Business Model
  slide.addText('Business Model', {
    x: '20%',
    y: '58%',
    w: '60%',
    h: '5%',
    align: 'center',
    fontSize: 12,
    bold: true,
    color: COLORS.primary,
  });

  slide.addText([
    { text: 'Merchant pays 10% → ', options: { fontSize: 10, color: COLORS.slate[600] } },
    { text: 'Nuqta 5% ', options: { fontSize: 10, bold: true, color: COLORS.green } },
    { text: '+ User 5%', options: { fontSize: 10, bold: true, color: COLORS.blue } },
  ], {
    x: '15%',
    y: '65%',
    w: '70%',
    h: '5%',
    align: 'center',
  });

  // 12M Projections
  slide.addText('Year 1: 10K users, AED 9M GMV, AED 450K revenue', {
    x: '10%',
    y: '75%',
    w: '80%',
    h: '8%',
    align: 'center',
    fontSize: 10,
    color: COLORS.slate[700],
  });

  slide.addText('Dual Coin System: Gold (universal) + Merchant Coins', {
    x: '10%',
    y: '84%',
    w: '80%',
    h: '6%',
    align: 'center',
    fontSize: 9,
    color: COLORS.slate[600],
    italic: true,
  });
}

// Slide 6: Traction, Team & Closing (Inner Right Panel)
function createTractionTeam() {
  const slide = pptx.addSlide();
  slide.background = { color: COLORS.slate[50] };

  slide.addText('TRACTION & TEAM', {
    x: '20%',
    y: '8%',
    w: '60%',
    h: '6%',
    align: 'center',
    fontSize: 12,
    bold: true,
    color: COLORS.white,
    fill: { color: COLORS.emerald },
  });

  // Traction Metrics
  const traction = [
    { emoji: '✓', text: '30+ Signed LOIs' },
    { emoji: '✓', text: '60+ Pipeline merchants' },
    { emoji: '✓', text: '95% MVP complete' },
    { emoji: '✓', text: '500+ user waitlist' },
  ];

  let yPos = 20;
  traction.forEach((item) => {
    slide.addText([
      { text: `${item.emoji} `, options: { fontSize: 14, color: COLORS.green } },
      { text: item.text, options: { fontSize: 11, bold: true, color: COLORS.slate[700] } },
    ], {
      x: '15%',
      y: `${yPos}%`,
      w: '70%',
      h: '5%',
      align: 'left',
    });
    yPos += 7;
  });

  // Team
  slide.addText('Team', {
    x: '20%',
    y: '48%',
    w: '60%',
    h: '5%',
    align: 'center',
    fontSize: 12,
    bold: true,
    color: COLORS.primary,
  });

  slide.addText([
    { text: 'Rejaul Karim\n', options: { fontSize: 12, bold: true, color: COLORS.primary } },
    { text: '10+ years tech & commerce\n', options: { fontSize: 9, color: COLORS.slate[600] } },
    { text: 'Deep GCC market expertise', options: { fontSize: 9, color: COLORS.slate[600] } },
  ], {
    x: '15%',
    y: '55%',
    w: '70%',
    h: '12%',
    align: 'center',
  });

  // Competitive Moats
  slide.addText('4 Competitive Moats', {
    x: '20%',
    y: '70%',
    w: '60%',
    h: '5%',
    align: 'center',
    fontSize: 11,
    bold: true,
    color: COLORS.primary,
  });

  const moats = ['Network effects', 'Data moat', 'First-mover (12-18mo)', 'Merchant lock-in'];

  slide.addText(moats.join(' • '), {
    x: '10%',
    y: '76%',
    w: '80%',
    h: '6%',
    align: 'center',
    fontSize: 8,
    color: COLORS.slate[600],
  });

  // Call to Action
  slide.addShape(pptx.ShapeType.rect, {
    x: '10%',
    y: '85%',
    w: '80%',
    h: '10%',
    fill: { color: COLORS.primary },
    line: { color: COLORS.accent, width: 2 },
  });

  slide.addText([
    { text: "Let's Talk\n", options: { fontSize: 14, bold: true, color: COLORS.accent } },
    { text: 'rejaul@nuqtaapp.com', options: { fontSize: 10, color: COLORS.white } },
  ], {
    x: '10%',
    y: '86%',
    w: '80%',
    h: '8%',
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
