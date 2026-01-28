const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

// Simple markdown to HTML converter with styling
function convertMarkdownToHTML(markdown, title) {
  const htmlContent = marked.parse(markdown);

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <style>
    @page {
      size: A4;
      margin: 2cm;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      line-height: 1.6;
      color: #1a1a1a;
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
    }

    h1 {
      color: #0a1628;
      font-size: 32px;
      font-weight: 900;
      margin-top: 40px;
      margin-bottom: 20px;
      border-bottom: 3px solid #c9a227;
      padding-bottom: 10px;
    }

    h2 {
      color: #0a1628;
      font-size: 24px;
      font-weight: 800;
      margin-top: 30px;
      margin-bottom: 15px;
    }

    h3 {
      color: #1e293b;
      font-size: 18px;
      font-weight: 700;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    h4 {
      color: #334155;
      font-size: 16px;
      font-weight: 600;
      margin-top: 15px;
      margin-bottom: 8px;
    }

    p {
      margin-bottom: 12px;
      text-align: justify;
    }

    ul, ol {
      margin-bottom: 15px;
      padding-left: 30px;
    }

    li {
      margin-bottom: 8px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      font-size: 14px;
    }

    th {
      background-color: #0a1628;
      color: white;
      padding: 12px;
      text-align: left;
      font-weight: 700;
    }

    td {
      padding: 10px 12px;
      border: 1px solid #e2e8f0;
    }

    tr:nth-child(even) {
      background-color: #f8fafc;
    }

    code {
      background-color: #f1f5f9;
      padding: 2px 6px;
      border-radius: 4px;
      font-family: 'Monaco', 'Courier New', monospace;
      font-size: 0.9em;
    }

    pre {
      background-color: #0a1628;
      color: #e2e8f0;
      padding: 15px;
      border-radius: 8px;
      overflow-x: auto;
      margin: 15px 0;
    }

    pre code {
      background-color: transparent;
      padding: 0;
      color: #e2e8f0;
    }

    blockquote {
      border-left: 4px solid #c9a227;
      padding-left: 20px;
      margin: 20px 0;
      font-style: italic;
      color: #475569;
    }

    strong {
      font-weight: 700;
      color: #0a1628;
    }

    em {
      font-style: italic;
    }

    hr {
      border: none;
      border-top: 2px solid #e2e8f0;
      margin: 30px 0;
    }

    .page-break {
      page-break-before: always;
    }

    @media print {
      body {
        padding: 0;
      }

      h1 {
        page-break-after: avoid;
      }

      h2, h3, h4 {
        page-break-after: avoid;
      }

      table {
        page-break-inside: avoid;
      }
    }
  </style>
</head>
<body>
  ${htmlContent}
</body>
</html>
  `.trim();
}

// Generate PDFs for key documents
async function generatePDFs() {
  console.log('Starting PDF generation...\n');

  const documents = [
    {
      input: path.join(__dirname, '..', 'H1_2026_EXECUTION_PLAN.md'),
      output: path.join(__dirname, '..', 'H1_2026_EXECUTION_PLAN.html'),
      title: 'H1 2026 Execution Plan - Nuqta'
    },
    {
      input: path.join(__dirname, '..', 'H2_2026_STRATEGY.md'),
      output: path.join(__dirname, '..', 'H2_2026_STRATEGY.html'),
      title: 'H2 2026 Strategy - Nuqta'
    },
    {
      input: path.join(__dirname, '..', 'EVENT_ORGANIZER_PARTNERSHIP_MODEL.md'),
      output: path.join(__dirname, '..', 'EVENT_ORGANIZER_PARTNERSHIP_MODEL.html'),
      title: 'Event Organizer Partnership Model - Nuqta'
    }
  ];

  for (const doc of documents) {
    try {
      console.log(`Converting ${path.basename(doc.input)} to HTML...`);

      // Read markdown file
      const markdown = fs.readFileSync(doc.input, 'utf8');

      // Convert to HTML
      const html = convertMarkdownToHTML(markdown, doc.title);

      // Write HTML file
      fs.writeFileSync(doc.output, html, 'utf8');

      console.log(`✓ Generated ${path.basename(doc.output)}\n`);
    } catch (error) {
      console.error(`✗ Error processing ${path.basename(doc.input)}:`, error.message);
    }
  }

  console.log('\n📄 HTML files generated successfully!');
  console.log('\nTo convert to PDF:');
  console.log('1. Open each HTML file in Chrome/Safari');
  console.log('2. Print → Save as PDF');
  console.log('3. Or use: npx html-pdf-node <filename.html> <filename.pdf>');
  console.log('\nHTML files created:');
  documents.forEach(doc => {
    console.log(`  - ${path.basename(doc.output)}`);
  });
}

generatePDFs().catch(console.error);
