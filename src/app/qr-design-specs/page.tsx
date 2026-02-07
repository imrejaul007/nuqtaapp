'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  QrCode,
  Printer,
  Ruler,
  Palette,
  Image,
  FileText,
  CheckCircle2,
  Copy,
  Check,
  Download,
  AlertTriangle,
  Eye,
  Layers,
  Square,
  Circle,
  Type,
  Sparkles,
  Store,
  Target
} from 'lucide-react';

interface DesignSpec {
  id: string;
  name: string;
  type: 'standee' | 'table-talker' | 'sticker' | 'poster' | 'card';
  dimensions: string;
  dimensionsMm: string;
  material: string;
  quantity: string;
  placement: string;
  designNotes: string[];
  printSpecs: string[];
  costEstimate: string;
}

const designSpecs: DesignSpec[] = [
  {
    id: 'd1',
    name: 'Counter Standee (Large)',
    type: 'standee',
    dimensions: '8.5" × 11" (A4)',
    dimensionsMm: '210mm × 297mm',
    material: 'Acrylic with printed insert',
    quantity: '2 per merchant',
    placement: 'Checkout counter, entrance',
    designNotes: [
      'QR code minimum 3" × 3" (76mm)',
      'Nuqta logo top center',
      '"Scan to Earn" headline',
      'Clear call-to-action',
      'Keep design clean - no clutter',
      'Gold (#C9A227) as accent color',
      'Black or white background'
    ],
    printSpecs: [
      'CMYK color mode',
      '300 DPI minimum',
      '0.125" bleed on all sides',
      'PDF/X-1a format for print',
      'Embed all fonts',
      'Convert text to outlines'
    ],
    costEstimate: 'AED 25-35 per unit'
  },
  {
    id: 'd2',
    name: 'Table Talker',
    type: 'table-talker',
    dimensions: '4" × 6" (10cm × 15cm)',
    dimensionsMm: '100mm × 150mm',
    material: 'Thick cardstock (350gsm) with fold',
    quantity: '5-10 per merchant (table service)',
    placement: 'Restaurant/cafe tables',
    designNotes: [
      'Double-sided design (same on both)',
      'QR code 2" × 2" (50mm) minimum',
      '"Earn Coins Here" or "Scan & Earn"',
      'Include brief "How it works"',
      'Tent-fold design for stability',
      'Matte or gloss lamination'
    ],
    printSpecs: [
      '350gsm or 400gsm cardstock',
      'Matte lamination recommended',
      'Score line for clean fold',
      '300 DPI, CMYK',
      'Die-cut if rounded corners'
    ],
    costEstimate: 'AED 3-5 per unit'
  },
  {
    id: 'd3',
    name: 'Window Sticker',
    type: 'sticker',
    dimensions: '6" × 6" (15cm × 15cm)',
    dimensionsMm: '150mm × 150mm',
    material: 'Vinyl sticker (front adhesive for inside application)',
    quantity: '2 per merchant',
    placement: 'Entrance door/window',
    designNotes: [
      'Simple design - visible from outside',
      'Nuqta logo prominent',
      '"We Accept Nuqta" or "Earn Nuqta Coins Here"',
      'White background for visibility',
      'Gold logo/text',
      'No QR code needed (too small to scan from outside)'
    ],
    printSpecs: [
      'Front-adhesive vinyl',
      'UV-resistant ink',
      'Die-cut to shape',
      'White ink print on clear or white vinyl'
    ],
    costEstimate: 'AED 8-12 per unit'
  },
  {
    id: 'd4',
    name: 'A3 Poster',
    type: 'poster',
    dimensions: '11.7" × 16.5" (A3)',
    dimensionsMm: '297mm × 420mm',
    material: 'Coated paper (170gsm) or foam board',
    quantity: '1-2 per merchant',
    placement: 'Wall near entrance or checkout',
    designNotes: [
      'Large QR code (4"+ / 100mm+)',
      'Eye-catching headline',
      'Step-by-step instructions (1-2-3)',
      'Value proposition clear',
      'Room for merchant co-branding optional',
      'Framed or mounted on foam board'
    ],
    printSpecs: [
      '170gsm coated paper or 5mm foam board',
      'Gloss or matte finish',
      '300 DPI minimum',
      'CMYK, PDF/X-1a'
    ],
    costEstimate: 'AED 15-25 per unit (paper), AED 40-60 (foam)'
  },
  {
    id: 'd5',
    name: 'Staff Training Card',
    type: 'card',
    dimensions: '3.5" × 2" (Business card size)',
    dimensionsMm: '89mm × 51mm',
    material: 'Thick cardstock (400gsm)',
    quantity: '10 per merchant',
    placement: 'Staff pockets, near POS',
    designNotes: [
      'Front: Quick reference steps',
      'Back: Troubleshooting / FAQ',
      'Pocket-sized for easy access',
      'Laminated for durability',
      'Bold, easy-to-read text'
    ],
    printSpecs: [
      '400gsm cardstock',
      'Double-sided print',
      'Matte lamination both sides',
      'Rounded corners optional'
    ],
    costEstimate: 'AED 1-2 per unit'
  }
];

const brandColors = [
  { name: 'Nuqta Gold', hex: '#C9A227', rgb: 'RGB: 201, 162, 39', cmyk: 'CMYK: 17, 27, 100, 5' },
  { name: 'Rich Black', hex: '#0F0F0F', rgb: 'RGB: 15, 15, 15', cmyk: 'CMYK: 75, 68, 67, 90' },
  { name: 'Pure White', hex: '#FFFFFF', rgb: 'RGB: 255, 255, 255', cmyk: 'CMYK: 0, 0, 0, 0' },
  { name: 'Slate Gray', hex: '#64748B', rgb: 'RGB: 100, 116, 139', cmyk: 'CMYK: 55, 40, 25, 5' },
];

const qrBestPractices = [
  'Minimum QR size: 2cm × 2cm for close scanning, 5cm+ for distance',
  'Always include quiet zone (white border) around QR',
  'Test QR codes before mass printing',
  'Use high error correction (Level H) for logo overlay',
  'Ensure sufficient contrast between QR and background',
  'Avoid placing QR on highly reflective surfaces',
  'QR should link to dynamic URL (can update without reprinting)'
];

const vendorChecklist = [
  'Request proofs before final print run',
  'Check color accuracy against Pantone/brand guidelines',
  'Verify QR codes scan correctly on proofs',
  'Confirm material quality and finish',
  'Specify delivery timeline and packaging',
  'Request samples of materials before large orders',
  'Get quotes from 2-3 vendors for comparison'
];

export default function QRDesignSpecsPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedSpec, setExpandedSpec] = useState<string | null>('d1');

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const typeIcons: Record<string, React.ElementType> = {
    standee: Square,
    'table-talker': Layers,
    sticker: Circle,
    poster: Image,
    card: FileText,
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
            <span className="text-slate-400">QR Design Specs</span>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/30 mb-4">
            <QrCode className="text-purple-400" size={16} />
            <span className="text-purple-400 text-sm font-medium">Print Materials</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">QR Standee & Materials Specs</h1>
          <p className="text-slate-400">Design specifications for merchant marketing materials</p>
        </div>

        {/* Material Types Overview */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {designSpecs.map(spec => {
            const Icon = typeIcons[spec.type];
            return (
              <button
                key={spec.id}
                onClick={() => setExpandedSpec(spec.id)}
                className={`rounded-xl p-4 border text-center transition-all ${
                  expandedSpec === spec.id
                    ? 'bg-[#c9a227]/20 border-[#c9a227]/50'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <Icon className={expandedSpec === spec.id ? 'text-[#c9a227]' : 'text-slate-400'} size={24} />
                <div className="text-white font-medium text-sm mt-2">{spec.name.split(' ')[0]}</div>
                <div className="text-slate-500 text-xs">{spec.type}</div>
              </button>
            );
          })}
        </div>

        {/* Design Specs Details */}
        <div className="space-y-6">
          {designSpecs.map(spec => {
            const Icon = typeIcons[spec.type];
            const isExpanded = expandedSpec === spec.id;

            if (!isExpanded) return null;

            return (
              <div
                key={spec.id}
                className="bg-white/5 rounded-xl border border-white/10 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-[#c9a227]/20 border border-[#c9a227]/30 flex items-center justify-center">
                        <Icon className="text-[#c9a227]" size={28} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">{spec.name}</h2>
                        <p className="text-slate-400">{spec.placement}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[#c9a227] font-bold">{spec.costEstimate}</div>
                      <div className="text-slate-500 text-sm">Qty: {spec.quantity}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Dimensions */}
                    <div className="bg-black/20 rounded-lg p-4">
                      <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                        <Ruler className="text-blue-400" size={16} />
                        Dimensions
                      </h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Imperial:</span>
                          <span className="text-white font-mono">{spec.dimensions}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Metric:</span>
                          <span className="text-white font-mono">{spec.dimensionsMm}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Material:</span>
                          <span className="text-white">{spec.material}</span>
                        </div>
                      </div>
                    </div>

                    {/* Print Specs */}
                    <div className="bg-black/20 rounded-lg p-4">
                      <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                        <Printer className="text-green-400" size={16} />
                        Print Specifications
                      </h3>
                      <ul className="space-y-1">
                        {spec.printSpecs.map((ps, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                            <CheckCircle2 className="text-green-400 flex-shrink-0" size={12} />
                            {ps}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Design Notes */}
                  <div className="mt-6 bg-gradient-to-r from-[#c9a227]/10 to-amber-500/10 rounded-lg p-4 border border-[#c9a227]/30">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                      <Sparkles className="text-[#c9a227]" size={16} />
                      Design Notes
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {spec.designNotes.map((note, i) => (
                        <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                          <span className="text-[#c9a227]">•</span>
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Colors */}
        <div className="mt-12 bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Palette className="text-[#c9a227]" size={20} />
            Brand Colors
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {brandColors.map((color, index) => (
              <div key={index} className="bg-black/20 rounded-lg p-4">
                <div
                  className="w-full h-16 rounded-lg mb-3 border border-white/10"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-bold text-sm">{color.name}</h4>
                  <button
                    onClick={() => copyToClipboard(color.hex, `color-${index}`)}
                    className="p-1 bg-white/10 rounded hover:bg-white/20"
                  >
                    {copiedId === `color-${index}` ? (
                      <Check className="text-green-400" size={12} />
                    ) : (
                      <Copy className="text-slate-400" size={12} />
                    )}
                  </button>
                </div>
                <div className="space-y-1 text-xs">
                  <p className="text-slate-300 font-mono">{color.hex}</p>
                  <p className="text-slate-500">{color.rgb}</p>
                  <p className="text-slate-500">{color.cmyk}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* QR Best Practices */}
        <div className="mt-8 bg-purple-500/10 rounded-xl p-6 border border-purple-500/30">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <QrCode className="text-purple-400" size={20} />
            QR Code Best Practices
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {qrBestPractices.map((practice, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle2 className="text-purple-400 flex-shrink-0 mt-0.5" size={16} />
                <span className="text-slate-300 text-sm">{practice}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vendor Checklist */}
        <div className="mt-8 bg-amber-500/10 rounded-xl p-6 border border-amber-500/30">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <AlertTriangle className="text-amber-400" size={20} />
            Print Vendor Checklist
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {vendorChecklist.map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <Circle className="text-amber-400 flex-shrink-0 mt-0.5" size={14} />
                <span className="text-slate-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Starter Kit Summary */}
        <div className="mt-8 bg-gradient-to-r from-[#c9a227]/20 to-amber-500/20 rounded-xl p-6 border border-[#c9a227]/30">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Store className="text-[#c9a227]" size={20} />
            Merchant Starter Kit Contents
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-slate-400 py-2 font-medium">Item</th>
                  <th className="text-left text-slate-400 py-2 font-medium">Quantity</th>
                  <th className="text-left text-slate-400 py-2 font-medium">Cost/Unit</th>
                  <th className="text-left text-slate-400 py-2 font-medium">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="text-white py-2">Counter Standee (Large)</td>
                  <td className="text-slate-300 py-2">2</td>
                  <td className="text-slate-300 py-2">AED 30</td>
                  <td className="text-white py-2">AED 60</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="text-white py-2">Table Talkers</td>
                  <td className="text-slate-300 py-2">5</td>
                  <td className="text-slate-300 py-2">AED 4</td>
                  <td className="text-white py-2">AED 20</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="text-white py-2">Window Stickers</td>
                  <td className="text-slate-300 py-2">2</td>
                  <td className="text-slate-300 py-2">AED 10</td>
                  <td className="text-white py-2">AED 20</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="text-white py-2">A3 Poster (Foam Board)</td>
                  <td className="text-slate-300 py-2">1</td>
                  <td className="text-slate-300 py-2">AED 50</td>
                  <td className="text-white py-2">AED 50</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="text-white py-2">Staff Training Cards</td>
                  <td className="text-slate-300 py-2">10</td>
                  <td className="text-slate-300 py-2">AED 1.5</td>
                  <td className="text-white py-2">AED 15</td>
                </tr>
                <tr className="bg-[#c9a227]/10">
                  <td className="text-[#c9a227] py-3 font-bold" colSpan={3}>TOTAL PER MERCHANT KIT</td>
                  <td className="text-[#c9a227] py-3 font-bold">~AED 165</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-400 text-xs mt-4">
            * Costs are estimates. Bulk orders (50+ kits) can reduce per-unit costs by 20-30%
          </p>
        </div>

        {/* File Naming Convention */}
        <div className="mt-8 bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <FileText className="text-blue-400" size={20} />
            File Naming Convention
          </h3>
          <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
            <p className="text-slate-400 mb-2"># Format:</p>
            <p className="text-white">nuqta_[item]_[size]_[version]_[date].pdf</p>
            <p className="text-slate-400 mt-4 mb-2"># Examples:</p>
            <p className="text-green-400">nuqta_standee_a4_v1_20240215.pdf</p>
            <p className="text-green-400">nuqta_tabletalker_4x6_v2_20240215.pdf</p>
            <p className="text-green-400">nuqta_sticker_6x6_v1_20240215.pdf</p>
          </div>
        </div>
      </main>
    </div>
  );
}
