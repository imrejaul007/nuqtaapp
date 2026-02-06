'use client';

import React, { useState } from 'react';
import {
  Building, Users, Camera, Megaphone, PenTool, BarChart3, Globe,
  Mail, Phone, Star, CheckCircle, AlertTriangle, FileText, DollarSign,
  ChevronDown, ChevronUp, Copy, Check, Clock, Shield, Target,
  Zap, Award, ExternalLink, Search
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

export default function VendorDirectoryPage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('agencies');
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const vendorCategories = [
    {
      id: 'agencies',
      name: 'Marketing & Creative Agencies',
      icon: Megaphone,
      color: 'purple',
      vendors: [
        {
          name: 'Traffic Digital',
          type: 'Full-Service Digital Agency',
          services: ['Performance Marketing', 'Social Media', 'Content Creation', 'SEO'],
          strengths: 'Strong in UAE market, app marketing experience',
          pricing: 'Retainer: AED 25-40K/month or % of spend',
          contact: 'hello@trafficdigital.ae',
          rating: 4.5,
          notes: 'Worked with major UAE apps, good Meta expertise'
        },
        {
          name: 'Amplify MENA',
          type: 'Performance Marketing',
          services: ['Paid Social', 'Paid Search', 'App Install Campaigns'],
          strengths: 'Data-driven, transparent reporting',
          pricing: '15-20% of ad spend',
          contact: 'info@amplifymena.com',
          rating: 4.3,
          notes: 'Specialized in app growth, Google Premier Partner'
        },
        {
          name: 'Socialize Agency',
          type: 'Social & Content',
          services: ['Social Media Management', 'Content Production', 'Community Management'],
          strengths: 'Creative content, bilingual team',
          pricing: 'Retainer: AED 15-30K/month',
          contact: 'dubai@socializeagency.com',
          rating: 4.4,
          notes: 'Great Arabic content, strong creative team'
        },
        {
          name: 'Netizency',
          type: 'Digital Strategy',
          services: ['Digital Strategy', 'Creative', 'Social', 'Influencer'],
          strengths: 'Strategic thinking, regional presence',
          pricing: 'Project-based or retainer AED 30-50K',
          contact: 'hello@netizency.com',
          rating: 4.2,
          notes: 'Good for brand strategy, larger budgets'
        }
      ]
    },
    {
      id: 'influencer',
      name: 'Influencer Platforms & Agencies',
      icon: Users,
      color: 'pink',
      vendors: [
        {
          name: 'Vamp',
          type: 'Influencer Platform',
          services: ['Influencer Discovery', 'Campaign Management', 'Analytics'],
          strengths: 'Large UAE influencer database, automated',
          pricing: 'Platform fee + influencer costs',
          contact: 'uae@vamp.me',
          rating: 4.4,
          notes: 'Self-service platform, good for micro-influencers'
        },
        {
          name: 'Influence Nation',
          type: 'Full-Service Influencer',
          services: ['Influencer Strategy', 'Talent Management', 'Campaigns'],
          strengths: 'Exclusive talent, premium influencers',
          pricing: '20-30% markup on talent',
          contact: 'hello@influencenation.ae',
          rating: 4.3,
          notes: 'Good for macro/mega influencers'
        },
        {
          name: 'Popular Pays (Lightricks)',
          type: 'Creator Platform',
          services: ['UGC Content', 'Influencer Campaigns', 'Content Licensing'],
          strengths: 'Quality UGC, content rights included',
          pricing: 'Per-content or subscription',
          contact: 'enterprise@popularpays.com',
          rating: 4.2,
          notes: 'Great for ad creative, less for awareness'
        },
        {
          name: 'Tagger Media',
          type: 'Influencer Intelligence',
          services: ['Discovery', 'Analytics', 'Fraud Detection'],
          strengths: 'Deep analytics, fraud detection',
          pricing: 'SaaS subscription',
          contact: 'sales@taggermedia.com',
          rating: 4.1,
          notes: 'Best for data & vetting, not execution'
        }
      ]
    },
    {
      id: 'production',
      name: 'Content & Video Production',
      icon: Camera,
      color: 'blue',
      vendors: [
        {
          name: 'Boomtown Productions',
          type: 'Video Production',
          services: ['Brand Videos', 'Social Content', 'TVC', 'Animation'],
          strengths: 'High quality, fast turnaround',
          pricing: 'AED 10-50K per project',
          contact: 'hello@boomtown.ae',
          rating: 4.5,
          notes: 'Go-to for brand videos, slightly premium'
        },
        {
          name: 'Story Dubai',
          type: 'Content Studio',
          services: ['Social Content', 'Reels/TikToks', 'Photography'],
          strengths: 'Volume production, social-first',
          pricing: 'AED 5-15K per shoot day',
          contact: 'create@storydubai.com',
          rating: 4.3,
          notes: 'Great for ongoing content needs'
        },
        {
          name: 'Shutterstock',
          type: 'Stock Content',
          services: ['Stock Photos', 'Videos', 'Music'],
          strengths: 'Huge library, instant access',
          pricing: 'Subscription or per-download',
          contact: 'enterprise@shutterstock.com',
          rating: 4.0,
          notes: 'For quick needs, supplement with original'
        },
        {
          name: 'Fiverr Pro',
          type: 'Freelance Marketplace',
          services: ['Graphic Design', 'Animation', 'Video Editing'],
          strengths: 'Flexible, cost-effective',
          pricing: 'Per-project, varies',
          contact: 'fiverr.com/pro',
          rating: 3.8,
          notes: 'Vet carefully, good for specific tasks'
        }
      ]
    },
    {
      id: 'pr',
      name: 'PR & Communications',
      icon: Globe,
      color: 'green',
      vendors: [
        {
          name: 'Weber Shandwick MENA',
          type: 'Global PR Agency',
          services: ['Media Relations', 'Crisis Comms', 'Corporate PR'],
          strengths: 'Strong media relationships, regional reach',
          pricing: 'Retainer: AED 30-60K/month',
          contact: 'dubai@webershandwick.com',
          rating: 4.4,
          notes: 'Premium, best for major announcements'
        },
        {
          name: 'Golin MENA',
          type: 'PR Agency',
          services: ['Consumer PR', 'Digital PR', 'Influencer PR'],
          strengths: 'Consumer focus, digital-savvy',
          pricing: 'Retainer: AED 25-45K/month',
          contact: 'mena@golin.com',
          rating: 4.3,
          notes: 'Good for consumer brands, launch campaigns'
        },
        {
          name: 'Atteline',
          type: 'Boutique PR',
          services: ['Lifestyle PR', 'Events', 'Influencer Seeding'],
          strengths: 'Lifestyle focus, personal touch',
          pricing: 'Retainer: AED 15-25K/month',
          contact: 'hello@atteline.com',
          rating: 4.2,
          notes: 'Good for lifestyle angle, smaller team'
        },
        {
          name: 'Presight',
          type: 'Media Monitoring',
          services: ['Media Monitoring', 'Analytics', 'Reporting'],
          strengths: 'Arabic & English coverage',
          pricing: 'SaaS subscription',
          contact: 'info@presight.io',
          rating: 4.0,
          notes: 'Track coverage, measure PR ROI'
        }
      ]
    },
    {
      id: 'tech',
      name: 'Marketing Technology',
      icon: BarChart3,
      color: 'orange',
      vendors: [
        {
          name: 'Branch.io',
          type: 'Attribution & Deep Linking',
          services: ['Mobile Attribution', 'Deep Links', 'Referrals'],
          strengths: 'Industry standard, reliable',
          pricing: 'Free tier + enterprise',
          contact: 'sales@branch.io',
          rating: 4.6,
          notes: 'Essential for app attribution'
        },
        {
          name: 'Amplitude',
          type: 'Product Analytics',
          services: ['User Analytics', 'Funnels', 'Cohorts', 'A/B Testing'],
          strengths: 'Deep product insights',
          pricing: 'Free tier + paid plans',
          contact: 'sales@amplitude.com',
          rating: 4.5,
          notes: 'Best for product analytics'
        },
        {
          name: 'OneSignal',
          type: 'Push Notifications',
          services: ['Push Notifications', 'In-App Messages', 'Email'],
          strengths: 'Easy to use, free tier',
          pricing: 'Freemium model',
          contact: 'sales@onesignal.com',
          rating: 4.3,
          notes: 'Good starting point for push'
        },
        {
          name: 'Sprout Social',
          type: 'Social Management',
          services: ['Social Publishing', 'Analytics', 'Listening'],
          strengths: 'All-in-one social tool',
          pricing: '$249-499/month',
          contact: 'sales@sproutsocial.com',
          rating: 4.4,
          notes: 'Comprehensive social platform'
        },
        {
          name: 'Mailchimp / Klaviyo',
          type: 'Email Marketing',
          services: ['Email Campaigns', 'Automation', 'CRM'],
          strengths: 'Mailchimp: easy. Klaviyo: powerful',
          pricing: 'Based on contacts',
          contact: 'Various',
          rating: 4.3,
          notes: 'Klaviyo better for e-commerce patterns'
        }
      ]
    },
    {
      id: 'events',
      name: 'Events & Activations',
      icon: Award,
      color: 'cyan',
      vendors: [
        {
          name: 'Done Events',
          type: 'Event Management',
          services: ['Corporate Events', 'Activations', 'Conferences'],
          strengths: 'Full-service, reliable execution',
          pricing: 'Project-based, AED 20-200K+',
          contact: 'info@done-events.com',
          rating: 4.4,
          notes: 'Good for launch events, activations'
        },
        {
          name: 'Purple Frog',
          type: 'Brand Activations',
          services: ['Mall Activations', 'Sampling', 'Experiential'],
          strengths: 'Consumer activations specialist',
          pricing: 'Per-activation pricing',
          contact: 'hello@purplefrog.ae',
          rating: 4.2,
          notes: 'Great for sampling, mall presence'
        },
        {
          name: 'The Agenda',
          type: 'Venue & Events',
          services: ['Venue Booking', 'Event Coordination'],
          strengths: 'Dubai Media City venues',
          pricing: 'Venue + services',
          contact: 'events@theagendadubai.com',
          rating: 4.0,
          notes: 'Trendy venue options'
        }
      ]
    }
  ];

  const rfpTemplate = `REQUEST FOR PROPOSAL (RFP)

Project: [Project Name]
Company: Nuqta
Date Issued: [Date]
Response Deadline: [Date]

1. COMPANY OVERVIEW
Nuqta is a rewards and loyalty app launching in Dubai, connecting users with exclusive offers from local merchants.

2. PROJECT SCOPE
[Detailed description of what you need]

3. DELIVERABLES
- [Deliverable 1]
- [Deliverable 2]
- [Deliverable 3]

4. TIMELINE
- Start Date: [Date]
- Key Milestones: [List]
- Completion Date: [Date]

5. BUDGET RANGE
[Indicate budget range if comfortable, or request pricing]

6. PROPOSAL REQUIREMENTS
Please include:
- Company overview and relevant experience
- Proposed approach and methodology
- Team members assigned
- Detailed timeline
- Pricing breakdown
- Case studies (minimum 2)
- References (minimum 2)

7. EVALUATION CRITERIA
- Relevant experience (30%)
- Proposed approach (25%)
- Pricing (25%)
- Team expertise (20%)

8. SUBMISSION DETAILS
Submit proposals to: [email]
Format: PDF
Deadline: [Date and time]

9. QUESTIONS
Direct questions to: [contact]
Q&A Deadline: [Date]`;

  const contractChecklist = [
    { item: 'Scope of work clearly defined', category: 'Scope' },
    { item: 'Deliverables listed with acceptance criteria', category: 'Scope' },
    { item: 'Timeline and milestones specified', category: 'Timeline' },
    { item: 'Payment terms and schedule', category: 'Financial' },
    { item: 'Late payment penalties (if any)', category: 'Financial' },
    { item: 'Intellectual property ownership', category: 'Legal' },
    { item: 'Confidentiality clause', category: 'Legal' },
    { item: 'Termination conditions (both parties)', category: 'Legal' },
    { item: 'Notice period for termination', category: 'Legal' },
    { item: 'Liability limitations', category: 'Legal' },
    { item: 'Performance guarantees/SLAs', category: 'Performance' },
    { item: 'Revision rounds included', category: 'Scope' },
    { item: 'Out-of-scope pricing', category: 'Financial' },
    { item: 'Key contacts and escalation path', category: 'Operations' },
    { item: 'Force majeure clause', category: 'Legal' },
    { item: 'Governing law and jurisdiction', category: 'Legal' }
  ];

  const vendorEvaluation = [
    { criteria: 'Relevant Experience', weight: '25%', description: 'Similar projects, industry knowledge' },
    { criteria: 'Quality of Work', weight: '20%', description: 'Portfolio review, case studies' },
    { criteria: 'Team Expertise', weight: '15%', description: 'Team credentials, account lead' },
    { criteria: 'Pricing & Value', weight: '20%', description: 'Competitive, transparent pricing' },
    { criteria: 'Communication', weight: '10%', description: 'Responsiveness, clarity' },
    { criteria: 'Cultural Fit', weight: '10%', description: 'Working style, values alignment' }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string }> = {
      purple: { bg: 'bg-purple-600/20', border: 'border-purple-500/30', text: 'text-purple-400' },
      pink: { bg: 'bg-pink-600/20', border: 'border-pink-500/30', text: 'text-pink-400' },
      blue: { bg: 'bg-blue-600/20', border: 'border-blue-500/30', text: 'text-blue-400' },
      green: { bg: 'bg-green-600/20', border: 'border-green-500/30', text: 'text-green-400' },
      orange: { bg: 'bg-orange-600/20', border: 'border-orange-500/30', text: 'text-orange-400' },
      cyan: { bg: 'bg-cyan-600/20', border: 'border-cyan-500/30', text: 'text-cyan-400' }
    };
    return colors[color] || colors.purple;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Header */}
      <div className="bg-gray-900/80 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-purple-600 rounded-lg">
              <Building className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">Vendor & Agency Directory</h1>
          </div>
          <p className="text-purple-300 ml-14">
            Preferred partners, RFP templates, contract guidelines & evaluation criteria
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800/60 rounded-xl p-4 border border-purple-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Building className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 text-sm">Total Vendors</span>
            </div>
            <p className="text-2xl font-bold text-white">25+</p>
            <p className="text-gray-400 text-xs">6 categories</p>
          </div>
          <div className="bg-gray-800/60 rounded-xl p-4 border border-green-500/30">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-green-400 text-sm">Vetted</span>
            </div>
            <p className="text-2xl font-bold text-white">All Rated</p>
            <p className="text-gray-400 text-xs">With reviews</p>
          </div>
          <div className="bg-gray-800/60 rounded-xl p-4 border border-blue-500/30">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 text-sm">RFP Template</span>
            </div>
            <p className="text-2xl font-bold text-white">Ready</p>
            <p className="text-gray-400 text-xs">Copy & customize</p>
          </div>
          <div className="bg-gray-800/60 rounded-xl p-4 border border-orange-500/30">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-orange-400" />
              <span className="text-orange-400 text-sm">Contract</span>
            </div>
            <p className="text-2xl font-bold text-white">16 Items</p>
            <p className="text-gray-400 text-xs">Checklist ready</p>
          </div>
        </div>

        {/* Vendor Categories */}
        <div className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <Search className="w-5 h-5 text-purple-400" />
            Vendor Directory by Category
          </h2>

          {vendorCategories.map((category) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;

            return (
              <div key={category.id} className={`bg-gray-800/40 rounded-2xl border ${colors.border} overflow-hidden`}>
                <button
                  onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 ${colors.bg} rounded-lg`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div className="text-left">
                      <h3 className="text-white font-semibold">{category.name}</h3>
                      <p className="text-gray-400 text-sm">{category.vendors.length} vendors</p>
                    </div>
                  </div>
                  {expandedCategory === category.id ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                </button>

                {expandedCategory === category.id && (
                  <div className="p-6 pt-0 space-y-4">
                    {category.vendors.map((vendor, idx) => (
                      <div key={idx} className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="text-white font-medium">{vendor.name}</h4>
                            <p className="text-gray-400 text-sm">{vendor.type}</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <span className="text-yellow-400">{vendor.rating}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-400">Services:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {vendor.services.map((service, sidx) => (
                                <span key={sidx} className={`${colors.bg} ${colors.text} px-2 py-0.5 rounded text-xs`}>
                                  {service}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <span className="text-gray-400">Strengths:</span>
                            <p className="text-gray-300 mt-1">{vendor.strengths}</p>
                          </div>
                          <div>
                            <span className="text-gray-400">Pricing:</span>
                            <p className="text-green-400 mt-1">{vendor.pricing}</p>
                          </div>
                          <div>
                            <span className="text-gray-400">Contact:</span>
                            <p className="text-blue-400 mt-1">{vendor.contact}</p>
                          </div>
                        </div>

                        <div className="mt-3 pt-3 border-t border-gray-700">
                          <p className="text-gray-400 text-sm">
                            <span className="text-gray-500">Notes:</span> {vendor.notes}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* RFP Template */}
        <div className="bg-gray-800/40 rounded-2xl border border-purple-500/20 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-400" />
              RFP Template
            </h2>
            <button
              onClick={() => copyToClipboard(rfpTemplate, 'rfp')}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              {copiedItem === 'rfp' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copiedItem === 'rfp' ? 'Copied!' : 'Copy Template'}
            </button>
          </div>
          <pre className="bg-gray-900/50 rounded-lg p-4 text-gray-300 text-sm overflow-x-auto whitespace-pre-wrap max-h-96 overflow-y-auto">
            {rfpTemplate}
          </pre>
        </div>

        {/* Vendor Evaluation Criteria */}
        <div className="bg-gray-800/40 rounded-2xl border border-purple-500/20 p-6 mb-6">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-orange-400" />
            Vendor Evaluation Criteria
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-3 px-4 text-gray-400 font-medium">Criteria</th>
                  <th className="py-3 px-4 text-gray-400 font-medium">Weight</th>
                  <th className="py-3 px-4 text-gray-400 font-medium">What to Evaluate</th>
                </tr>
              </thead>
              <tbody>
                {vendorEvaluation.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-700/50 hover:bg-gray-800/30">
                    <td className="py-3 px-4 text-white font-medium">{row.criteria}</td>
                    <td className="py-3 px-4 text-purple-400">{row.weight}</td>
                    <td className="py-3 px-4 text-gray-300">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Contract Checklist */}
        <div className="bg-gray-800/40 rounded-2xl border border-purple-500/20 p-6 mb-6">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-400" />
            Contract Review Checklist
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Scope', 'Timeline', 'Financial', 'Legal', 'Performance', 'Operations'].map((cat) => (
              <div key={cat} className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-white font-medium mb-3">{cat}</h3>
                <ul className="space-y-2">
                  {contractChecklist.filter(item => item.category === cat).map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {item.item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Vendor Onboarding Process */}
        <div className="bg-gray-800/40 rounded-2xl border border-purple-500/20 p-6 mb-6">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Vendor Onboarding Process
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            {[
              { step: 1, title: 'Discovery', desc: 'Identify need, create RFP', time: '1 week' },
              { step: 2, title: 'Shortlist', desc: 'Review proposals, shortlist 3', time: '1 week' },
              { step: 3, title: 'Pitch', desc: 'Presentations, Q&A', time: '1 week' },
              { step: 4, title: 'Select', desc: 'Score, negotiate, decide', time: '3-5 days' },
              { step: 5, title: 'Contract', desc: 'Legal review, sign', time: '3-5 days' },
              { step: 6, title: 'Kickoff', desc: 'Onboard, brief, start', time: '1 week' }
            ].map((phase, idx) => (
              <div key={idx} className="flex-1 bg-gray-900/50 rounded-lg p-4 border-l-4 border-purple-500">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {phase.step}
                  </div>
                  <span className="text-white font-medium">{phase.title}</span>
                </div>
                <p className="text-gray-400 text-sm mb-1">{phase.desc}</p>
                <p className="text-purple-400 text-xs">{phase.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Tips */}
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl border border-purple-500/30 p-6">
          <h3 className="text-xl font-bold text-white mb-4">💡 Vendor Management Best Practices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-green-400 font-medium mb-2">Always Get 3 Quotes</h4>
              <p className="text-gray-300 text-sm">For any engagement &gt;AED 10K, get minimum 3 competitive quotes</p>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-blue-400 font-medium mb-2">Check References</h4>
              <p className="text-gray-300 text-sm">Call 2 references before signing. Ask about challenges, not just wins</p>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-purple-400 font-medium mb-2">Start Small</h4>
              <p className="text-gray-300 text-sm">Begin with a pilot project before committing to long retainers</p>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-orange-400 font-medium mb-2">Document Everything</h4>
              <p className="text-gray-300 text-sm">Keep all briefs, feedback, and approvals in writing</p>
            </div>
          </div>
        </div>
      </div>

      <GlobalFooter />
    </div>
  );
}
