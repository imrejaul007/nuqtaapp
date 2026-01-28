#!/usr/bin/env python3
"""
Convert HTML documentation to PDF using weasyprint
"""
import os
import sys

try:
    from weasyprint import HTML
    WEASYPRINT_AVAILABLE = True
except ImportError:
    WEASYPRINT_AVAILABLE = False

def convert_html_to_pdf(html_file, pdf_file):
    """Convert HTML file to PDF"""
    if not WEASYPRINT_AVAILABLE:
        print("⚠️  weasyprint not installed")
        print("   Install with: pip3 install weasyprint")
        return False

    try:
        print(f"Converting {os.path.basename(html_file)} to PDF...")
        HTML(html_file).write_pdf(pdf_file)
        print(f"✓ Created {os.path.basename(pdf_file)}")
        return True
    except Exception as e:
        print(f"✗ Error: {e}")
        return False

def main():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

    files = [
        'H1_2026_EXECUTION_PLAN',
        'H2_2026_STRATEGY',
        'EVENT_ORGANIZER_PARTNERSHIP_MODEL'
    ]

    print("🔄 Converting HTML documentation to PDF...\n")

    success_count = 0
    for file in files:
        html_path = os.path.join(base_dir, f"{file}.html")
        pdf_path = os.path.join(base_dir, f"{file}.pdf")

        if not os.path.exists(html_path):
            print(f"✗ {file}.html not found, skipping...")
            continue

        if convert_html_to_pdf(html_path, pdf_path):
            success_count += 1

    print(f"\n✅ Successfully converted {success_count}/{len(files)} files to PDF")

    if not WEASYPRINT_AVAILABLE:
        print("\n📋 Alternative: Manual PDF Conversion")
        print("=" * 60)
        print("1. Open each HTML file in Chrome/Safari:")
        for file in files:
            print(f"   open {file}.html")
        print("\n2. Press Cmd+P → Save as PDF")
        print("=" * 60)

if __name__ == "__main__":
    main()
