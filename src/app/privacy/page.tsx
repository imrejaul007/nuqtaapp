'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye, Database, Users, Globe, Mail, Calendar } from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

export default function PrivacyPage() {
  const lastUpdated = 'February 10, 2026';

  const sections = [
    {
      id: 'information-we-collect',
      title: '1. Information We Collect',
      icon: Database,
      content: [
        {
          subtitle: 'Information You Provide',
          items: [
            'Account information (name, email, phone number)',
            'Payment information (securely processed through our payment partners)',
            'Receipt images you upload for cashback verification',
            'Profile preferences and settings',
            'Communications with our support team'
          ]
        },
        {
          subtitle: 'Information Collected Automatically',
          items: [
            'Device information (device type, operating system, unique identifiers)',
            'Location data (with your permission, to show nearby deals)',
            'Usage data (app features used, pages visited, time spent)',
            'Transaction history within the Nuqta platform'
          ]
        }
      ]
    },
    {
      id: 'how-we-use',
      title: '2. How We Use Your Information',
      icon: Eye,
      content: [
        {
          subtitle: 'We use your information to:',
          items: [
            'Process cashback and rewards for your purchases',
            'Show you personalized deals and offers near you',
            'Verify receipts and prevent fraud',
            'Improve our services and develop new features',
            'Communicate with you about your account and updates',
            'Comply with legal obligations'
          ]
        }
      ]
    },
    {
      id: 'data-sharing',
      title: '3. How We Share Your Information',
      icon: Users,
      content: [
        {
          subtitle: 'We may share your information with:',
          items: [
            'Partner merchants (anonymized transaction data for reward processing)',
            'Payment processors (to process transactions securely)',
            'Service providers (hosting, analytics, customer support)',
            'Legal authorities (when required by law or to protect rights)'
          ]
        },
        {
          subtitle: 'We DO NOT:',
          items: [
            'Sell your personal information to third parties',
            'Share your receipt images with merchants',
            'Provide your contact information to advertisers'
          ]
        }
      ]
    },
    {
      id: 'data-security',
      title: '4. Data Security',
      icon: Lock,
      content: [
        {
          subtitle: 'We protect your data through:',
          items: [
            'Industry-standard encryption (TLS 1.3) for data in transit',
            'AES-256 encryption for data at rest',
            'Regular security audits and penetration testing',
            'Strict access controls and employee training',
            'Secure data centers with SOC 2 compliance'
          ]
        }
      ]
    },
    {
      id: 'your-rights',
      title: '5. Your Rights & Choices',
      icon: Shield,
      content: [
        {
          subtitle: 'You have the right to:',
          items: [
            'Access your personal data we hold',
            'Correct inaccurate information',
            'Delete your account and associated data',
            'Export your data in a portable format',
            'Opt out of marketing communications',
            'Withdraw consent for location tracking'
          ]
        },
        {
          subtitle: 'To exercise these rights:',
          items: [
            'Use the privacy settings in your Nuqta app',
            'Email us at privacy@nuqta.com',
            'Contact our Data Protection Officer'
          ]
        }
      ]
    },
    {
      id: 'cookies',
      title: '6. Cookies & Tracking',
      icon: Globe,
      content: [
        {
          subtitle: 'We use cookies and similar technologies to:',
          items: [
            'Keep you logged in to your account',
            'Remember your preferences',
            'Analyze how our services are used',
            'Prevent fraud and ensure security'
          ]
        },
        {
          subtitle: 'You can control cookies through:',
          items: [
            'Your browser settings',
            'Our cookie preference center',
            'Mobile device settings for app tracking'
          ]
        }
      ]
    },
    {
      id: 'retention',
      title: '7. Data Retention',
      icon: Calendar,
      content: [
        {
          subtitle: 'We retain your data:',
          items: [
            'Account data: Until you delete your account, plus 30 days',
            'Transaction history: 7 years (for legal/tax compliance)',
            'Receipt images: 90 days after processing',
            'Analytics data: 24 months (anonymized)',
            'Support communications: 3 years'
          ]
        }
      ]
    },
    {
      id: 'children',
      title: '8. Children\'s Privacy',
      icon: Users,
      content: [
        {
          subtitle: '',
          items: [
            'Nuqta is not intended for users under 18 years of age',
            'We do not knowingly collect data from children',
            'If we learn we have collected data from a child, we will delete it promptly',
            'Parents/guardians can contact us to request deletion of any such data'
          ]
        }
      ]
    },
    {
      id: 'international',
      title: '9. International Data Transfers',
      icon: Globe,
      content: [
        {
          subtitle: '',
          items: [
            'Your data may be processed in the UAE and other countries',
            'We ensure appropriate safeguards for international transfers',
            'We comply with UAE data protection laws and GDPR where applicable',
            'Our cloud infrastructure uses UAE-based data centers where possible'
          ]
        }
      ]
    },
    {
      id: 'changes',
      title: '10. Changes to This Policy',
      icon: Mail,
      content: [
        {
          subtitle: '',
          items: [
            'We may update this policy from time to time',
            'We will notify you of significant changes via email or in-app notification',
            'Continued use after changes constitutes acceptance',
            'Previous versions are available upon request'
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-[#0a1628]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft size={20} />
            <span className="text-sm">Back to Home</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c9a227] to-[#e8c547] flex items-center justify-center">
              <span className="text-black font-bold text-sm">N</span>
            </div>
            <span className="font-bold text-lg">Nuqta</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full mb-6">
            <Shield size={16} className="text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Privacy Policy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black mb-4">
            Your Privacy <span className="text-emerald-400">Matters</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            At Nuqta, we believe you should always know what data we collect, how we use it, and your rights.
            This policy explains our practices in plain language.
          </p>
          <p className="text-sm text-slate-500 mt-4">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Quick Summary */}
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Lock size={20} className="text-emerald-400" />
            Quick Summary
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2"></div>
              <p className="text-slate-300">We collect only what&apos;s needed to provide our services</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2"></div>
              <p className="text-slate-300">We never sell your personal information</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2"></div>
              <p className="text-slate-300">You can access, export, or delete your data anytime</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2"></div>
              <p className="text-slate-300">Your data is encrypted and securely stored</p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-10">
          <h2 className="text-lg font-bold mb-4">Table of Contents</h2>
          <div className="grid sm:grid-cols-2 gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm text-slate-400 hover:text-[#c9a227] transition-colors py-1"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#c9a227]/20 flex items-center justify-center">
                  <section.icon size={20} className="text-[#c9a227]" />
                </div>
                <h2 className="text-xl font-bold">{section.title}</h2>
              </div>
              <div className="space-y-4">
                {section.content.map((block, blockIndex) => (
                  <div key={blockIndex}>
                    {block.subtitle && (
                      <p className="text-slate-300 font-medium mb-2">{block.subtitle}</p>
                    )}
                    <ul className="space-y-2">
                      {block.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3 text-slate-400 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-10 bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold mb-3">Questions About Your Privacy?</h2>
          <p className="text-slate-400 mb-4">
            We&apos;re here to help. Contact our privacy team for any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:privacy@nuqta.com"
              className="flex items-center gap-2 px-4 py-2 bg-[#c9a227] text-black font-medium rounded-lg hover:bg-[#e8c547] transition-colors"
            >
              <Mail size={18} />
              privacy@nuqta.com
            </a>
            <Link
              href="/contact"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Or visit our Contact page
            </Link>
          </div>
        </div>

        {/* Related Links */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link href="/terms" className="text-sm text-slate-400 hover:text-[#c9a227] transition-colors">
            Terms of Service
          </Link>
          <span className="text-slate-600">|</span>
          <Link href="/policies" className="text-sm text-slate-400 hover:text-[#c9a227] transition-colors">
            All Policies
          </Link>
          <span className="text-slate-600">|</span>
          <Link href="/faq" className="text-sm text-slate-400 hover:text-[#c9a227] transition-colors">
            FAQ
          </Link>
        </div>
      </main>

      <GlobalFooter />
    </div>
  );
}
