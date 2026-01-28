const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const util = require('util');

const execPromise = util.promisify(exec);

async function convertHTMLtoPDF() {
  console.log('Converting HTML files to PDF using system print command...\n');

  const files = [
    'H1_2026_EXECUTION_PLAN',
    'H2_2026_STRATEGY',
    'EVENT_ORGANIZER_PARTNERSHIP_MODEL'
  ];

  for (const file of files) {
    const htmlPath = path.join(__dirname, '..', `${file}.html`);
    const pdfPath = path.join(__dirname, '..', `${file}.pdf`);

    try {
      console.log(`Converting ${file}.html to PDF...`);

      // Use wkhtmltopdf or system print capabilities
      // For macOS, we can use webkit2pdf or textutil, but simplest is to instruct manual conversion

      // Check if file exists
      if (!fs.existsSync(htmlPath)) {
        console.log(`  ✗ ${file}.html not found, skipping...`);
        continue;
      }

      console.log(`  ✓ ${file}.html ready for PDF conversion`);
      console.log(`    HTML: ${htmlPath}`);
      console.log(`    PDF:  ${pdfPath}\n`);

    } catch (error) {
      console.error(`  ✗ Error: ${error.message}`);
    }
  }

  console.log('\n📋 Manual PDF Conversion Instructions:');
  console.log('════════════════════════════════════════════════════════════\n');
  console.log('For best results, convert HTML to PDF using Chrome:');
  console.log('\n1. Open each HTML file in Google Chrome:');
  files.forEach(file => {
    console.log(`   - open ${file}.html`);
  });
  console.log('\n2. For each file:');
  console.log('   • Press Cmd+P (Print)');
  console.log('   • Destination: "Save as PDF"');
  console.log('   • Paper size: A4');
  console.log('   • Margins: Default');
  console.log('   • Options: ✓ Background graphics');
  console.log('   • Save to project root directory');
  console.log('\n3. Or use automated command (requires Chrome):');
  console.log('   npx html-pdf-chrome H1_2026_EXECUTION_PLAN.html H1_2026_EXECUTION_PLAN.pdf');
  console.log('\n════════════════════════════════════════════════════════════\n');
}

convertHTMLtoPDF().catch(console.error);
