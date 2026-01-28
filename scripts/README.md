# Nuqta Scripts

Utility scripts for generating various formats of the Nuqta pitch deck.

## PowerPoint Generators

### 1. Pitch Deck Generator

Generate a PowerPoint (.pptx) version of the full 27-slide pitch deck:

```bash
npm run generate-ppt
```

**Output:**
- **File**: `Nuqta-Pitch-Deck-2026.pptx`
- **Location**: Root directory
- **Size**: ~241KB
- **Slides**: 27 slides
- **Format**: PowerPoint (PPTX)

### 2. Investor One-Pager Generator

Generate a PowerPoint version of the A4 tri-fold investor one-pager (card):

```bash
npm run generate-card-ppt
```

**Output:**
- **File**: `Nuqta-Investor-One-Pager-2026.pptx`
- **Location**: Root directory
- **Size**: ~104KB
- **Slides**: 6 slides (representing the tri-fold panels)
- **Format**: PowerPoint (PPTX)

## Pitch Deck Content

The generated PowerPoint deck includes all 27 slides from the web version:

1. **Slide 0**: Cover - Brand, tagline, key metrics
2. **Slide 1**: Problem - The $2.4B UAE shopping crisis
3. **Slide 2**: User Pain Points - Shopping frustrations
4. **Slide 3**: Merchant Pain Points - CAC crisis
5. **Slide 4**: Market Opportunity - $150B GCC TAM
6. **Slide 5**: Why Now - Perfect timing window
7. **Slide 6**: Solution Overview - 10% cashback
8. **Slide 7**: User Journey - 3-step process
9. **Slide 8**: Platform Overview - What we are/aren't
10. **Slide 9**: Money Flow - Ecosystem value flow
11. **Slide 10**: Revenue Model - 5 revenue streams
12. **Slide 11**: Unit Economics - 18x LTV:CAC
13. **Slide 12**: CAC Breakdown - Blended AED 30
14. **Slide 13**: 12-Month Projections - Year 1 targets
15. **Slide 14**: GTM Strategy - Phased rollout
16. **Slide 15**: Traction - 30+ LOIs, 95% MVP
17. **Slide 16**: Team - Founder & advisors
18. **Slide 17**: The Ask - $500K pre-seed raise
19. **Slide 18**: Vision - Future roadmap
20. **Slide 19**: Competitive Landscape - No direct competitor
21. **Slide 20**: Competitive Moats - 4 advantages
22. **Slide 21**: Roadmap - 18-month plan
23. **Slide 22**: Tech Stack - Modern architecture
24. **Slide 23**: FAQ - Common questions
25. **Slide 24**: Let's Talk - Contact info
26. **Slide 25**: Join Us - Investment opportunity
27. **Slide 26**: Thank You - Closing slide

## Investor One-Pager Content

The generated PowerPoint one-pager includes 6 slides representing the A4 tri-fold layout:

### Front Side (Outer Panels - Slides 1-3)
1. **Slide 1**: Front Cover (Right Panel) - Nuqta branding, 10% cashback, key metrics, contact
2. **Slide 2**: Problem (Middle Panel) - AED 2.4B wasted annually, user pain points, merchant struggles
3. **Slide 3**: Market & Investment (Left Panel) - $150B TAM, GTM strategy, $500K ask

### Back Side (Inner Panels - Slides 4-6)
4. **Slide 4**: Why Now (Left Panel) - Perfect timing, market readiness, first-mover advantage
5. **Slide 5**: Solution & Flow (Middle Panel) - 10% cashback, 3-step journey, business model
6. **Slide 6**: Traction, Team & Closing (Right Panel) - 30+ LOIs, team, moats, call-to-action

### Design Features

- **Brand Colors**:
  - Primary: #0a1628 (Dark blue)
  - Accent: #c9a227 (Gold)
- **Typography**: Professional hierarchy with consistent sizing
- **Layout**: Clean, investor-ready formatting
- **Compatibility**: Works with PowerPoint, Keynote, and Google Slides

### Technical Details

- **Library**: [pptxgenjs](https://www.npmjs.com/package/pptxgenjs) v4.0.1
- **Format**: Office Open XML (.pptx)
- **Script**: `generate-ppt.cjs` (CommonJS module)
- **Runtime**: Node.js 18+

### Customization

To modify the deck content, edit `scripts/generate-ppt.cjs`:

```javascript
// Example: Change cover slide text
function createSlide0() {
  const slide = pptx.addSlide();
  slide.addText('Your Text Here', {
    x: '20%',
    y: '25%',
    fontSize: 72,
    bold: true,
    color: 'FFFFFF',
  });
}
```

### Distribution

The generated PowerPoint file is perfect for:

- Email attachments to investors
- Offline presentations
- Printing handouts
- Sharing via Dropbox/Google Drive
- Uploading to pitch deck platforms

### Notes

- The PowerPoint version is a simplified representation of the web deck
- Complex animations and interactive features from the web version are not included
- Charts and data visualizations are rendered as text for simplicity
- For the full interactive experience, use the web version at `/deck-kang`

## Future Scripts

Additional scripts to be added:

- PDF generator (`generate-pdf.js`) - For non-editable distribution
- Image exporter (`export-slides.js`) - Export each slide as PNG/JPG
- Data extractor (`extract-data.js`) - Pull metrics for financial models

---

**Generated**: January 28, 2026
**Last Updated**: January 28, 2026
**Maintainer**: Rejaul Karim <rejaul@nuqtaapp.com>
