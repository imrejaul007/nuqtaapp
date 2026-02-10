'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Search,
  Users,
  Store,
  CreditCard,
  Shield,
  Gift,
  Smartphone,
  Coins,
  Clock,
  MapPin
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  questions: FAQItem[];
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const categories: FAQCategory[] = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Smartphone,
      color: 'text-blue-400',
      questions: [
        {
          question: 'What is Nuqta?',
          answer: 'Nuqta is a smart savings app that helps you earn cashback on everyday purchases at local merchants across the UAE. Simply shop at partner stores, upload your receipt, and earn Nuqta Coins that you can redeem on future purchases. 1 Nuqta Coin = 1 AED.'
        },
        {
          question: 'How do I sign up for Nuqta?',
          answer: 'Download the Nuqta app from the App Store or Google Play Store. Create an account using your email or phone number, verify your identity, and you\'re ready to start saving! The whole process takes less than 2 minutes.'
        },
        {
          question: 'Is Nuqta free to use?',
          answer: 'Yes! The basic Nuqta app is completely free. You can earn and redeem cashback without any subscription fees. We also offer Nuqta+ membership (AED 99/month) for users who want enhanced rewards, exclusive partner access, and premium benefits.'
        },
        {
          question: 'Where is Nuqta available?',
          answer: 'Nuqta is currently available in the UAE, with partner merchants across Dubai, Abu Dhabi, Sharjah, and other emirates. We\'re expanding across the GCC region soon.'
        }
      ]
    },
    {
      id: 'earning-cashback',
      title: 'Earning Cashback',
      icon: Coins,
      color: 'text-[#c9a227]',
      questions: [
        {
          question: 'How do I earn Nuqta Coins?',
          answer: 'There are several ways to earn: 1) Shop at partner merchants and upload your receipt, 2) Complete streak challenges (visit 4 times in a month for bonus rewards), 3) Try category challenges (visit 3 new cafes to unlock bonuses), 4) Refer friends to Nuqta, 5) Participate in seasonal promotions.'
        },
        {
          question: 'How much cashback can I earn?',
          answer: 'Cashback rates vary by merchant, typically ranging from 5% to 25% of your purchase. Nuqta+ members get an additional 2-5% on top of base rates. Check the app for current offers at each merchant.'
        },
        {
          question: 'How do I upload a receipt?',
          answer: 'After shopping at a partner merchant, open the Nuqta app, tap "Upload Receipt", take a clear photo of your receipt, and submit. Our AI processes the receipt and credits your coins within minutes. Make sure the date, merchant name, and total are visible.'
        },
        {
          question: 'How long does it take to receive my coins?',
          answer: 'Most receipts are processed within 5-10 minutes. Complex receipts may take up to 24 hours. If you don\'t receive your coins within 24 hours, contact support with your receipt details.'
        },
        {
          question: 'What are streak rewards?',
          answer: 'Streak rewards encourage regular visits. For example, "Visit 4 times this month, get 5% extra" means if you shop at a merchant 4 times in one month, you earn bonus cashback on all those visits. Streaks reset at the end of each month.'
        }
      ]
    },
    {
      id: 'redeeming',
      title: 'Redeeming Rewards',
      icon: Gift,
      color: 'text-emerald-400',
      questions: [
        {
          question: 'How do I redeem my Nuqta Coins?',
          answer: 'When paying at a partner merchant, open the Nuqta app and show your QR code or provide your phone number. The merchant will apply your coin balance to your purchase. 1 Nuqta Coin = 1 AED discount.'
        },
        {
          question: 'Is there a minimum redemption amount?',
          answer: 'No minimum! You can redeem any amount of coins you have. However, we recommend saving up for bigger purchases to maximize the satisfaction of your savings.'
        },
        {
          question: 'Can I use Nuqta Coins at any merchant?',
          answer: 'Nuqta Coins can be redeemed at any partner merchant in our network. Brand Coins (earned from specific merchant promotions) can only be redeemed at the issuing merchant.'
        },
        {
          question: 'Do my coins expire?',
          answer: 'Nuqta Coins remain valid as long as your account is active. If your account is inactive for 12 months, coins may expire. Brand Coins may have specific expiration dates set by merchants - check your app for details.'
        }
      ]
    },
    {
      id: 'nuqta-plus',
      title: 'Nuqta+ Membership',
      icon: CreditCard,
      color: 'text-purple-400',
      questions: [
        {
          question: 'What is Nuqta+?',
          answer: 'Nuqta+ is our premium membership (AED 99/month) that gives you access to 16+ exclusive partner discounts, enhanced cashback rates (up to 25%), priority customer support, early access to new features, and special member-only promotions.'
        },
        {
          question: 'What partners are included in Nuqta+?',
          answer: 'Nuqta+ includes premium partners like Careem (15% off rides), Talabat (10% off orders), Noon (12% off), fitness centers, salons, restaurants, and more. The full list is available in the app under "Nuqta+ Partners".'
        },
        {
          question: 'Can I cancel Nuqta+ anytime?',
          answer: 'Yes! Nuqta+ is a month-to-month subscription with no long-term commitment. You can cancel anytime from your account settings. Your benefits remain active until the end of your billing period.'
        },
        {
          question: 'Is there a Nuqta+ for businesses?',
          answer: 'Yes! We offer Nuqta+ for corporates at just AED 1/employee/month. Companies can provide Nuqta+ benefits to all employees. Universities can get Nuqta+ free for their students through our partnership program.'
        }
      ]
    },
    {
      id: 'merchants',
      title: 'For Merchants',
      icon: Store,
      color: 'text-orange-400',
      questions: [
        {
          question: 'How can my business join Nuqta?',
          answer: 'Contact our partnerships team at partners@nuqta.com or fill out the form on our website. We offer three packages: Starter (free, pay-per-transaction), Growth (AED 499/month), and Enterprise (custom pricing). Our team will help you choose the right fit.'
        },
        {
          question: 'What are the benefits for merchants?',
          answer: 'Merchants get: 1) Access to our user base for customer acquisition, 2) Free POS software and analytics dashboard, 3) Customer insights and behavior data, 4) Loyalty program tools, 5) Marketing exposure through the Nuqta app, 6) Reduced dependency on expensive discount platforms.'
        },
        {
          question: 'How does Nuqta verify purchases?',
          answer: 'We use AI-powered receipt scanning to verify purchases. For integrated merchants, we connect directly to your POS system for real-time verification. This prevents fraud while ensuring seamless cashback for customers.'
        },
        {
          question: 'What does Nuqta charge merchants?',
          answer: 'Our Starter plan is free - you only pay a small percentage of the cashback funded. Growth and Enterprise plans have monthly fees but lower transaction costs. Most merchants find Nuqta significantly cheaper than traditional discount platforms.'
        }
      ]
    },
    {
      id: 'security',
      title: 'Security & Privacy',
      icon: Shield,
      color: 'text-red-400',
      questions: [
        {
          question: 'Is my data safe with Nuqta?',
          answer: 'Absolutely. We use bank-grade encryption (TLS 1.3, AES-256) to protect your data. We never sell your personal information, and we comply with UAE data protection laws. See our Privacy Policy for full details.'
        },
        {
          question: 'What do you do with my receipt photos?',
          answer: 'Receipt photos are processed by our AI to verify purchases and credit your cashback. We extract only necessary information (merchant, date, amount) and delete the original image within 90 days. We never share receipt images with third parties.'
        },
        {
          question: 'How do I delete my account?',
          answer: 'You can delete your account from Settings > Account > Delete Account in the app. This will permanently remove your personal data within 30 days. Note: Any remaining coin balance will be forfeited upon deletion.'
        }
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: HelpCircle,
      color: 'text-pink-400',
      questions: [
        {
          question: 'My receipt wasn\'t accepted. What should I do?',
          answer: 'Common reasons for rejection: 1) Poor image quality - retake with better lighting, 2) Receipt is too old (over 7 days), 3) Merchant isn\'t a partner, 4) Receipt already submitted. If you believe it\'s an error, contact support with the receipt photo.'
        },
        {
          question: 'I didn\'t receive my cashback. Help!',
          answer: 'First, check your transaction history to see if it\'s pending. Processing can take up to 24 hours. If it\'s been longer, contact support at support@nuqta.com with your receipt and transaction details.'
        },
        {
          question: 'The app is crashing or not loading.',
          answer: 'Try these steps: 1) Force close and reopen the app, 2) Check your internet connection, 3) Update to the latest app version, 4) Clear app cache, 5) Reinstall the app. If issues persist, contact support.'
        },
        {
          question: 'How do I contact customer support?',
          answer: 'You can reach us via: 1) In-app chat (fastest), 2) Email: support@nuqta.com, 3) Phone: Available for Nuqta+ members, 4) Social media DMs. Our support hours are Sunday-Thursday, 9 AM - 6 PM UAE time.'
        }
      ]
    }
  ];

  const filteredCategories = categories.map(cat => ({
    ...cat,
    questions: cat.questions.filter(q =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(cat =>
    activeCategory === 'all' || cat.id === activeCategory
  ).filter(cat => cat.questions.length > 0);

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
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full mb-6">
            <HelpCircle size={16} className="text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">Help Center</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black mb-4">
            Frequently Asked <span className="text-[#c9a227]">Questions</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Find answers to common questions about Nuqta. Can&apos;t find what you&apos;re looking for?
            <Link href="/contact" className="text-[#c9a227] hover:underline ml-1">Contact us</Link>
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search for answers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#c9a227] transition-colors"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeCategory === 'all'
                ? 'bg-[#c9a227] text-black'
                : 'bg-slate-800/50 text-slate-400 hover:text-white'
            }`}
          >
            All Topics
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'bg-[#c9a227] text-black'
                  : 'bg-slate-800/50 text-slate-400 hover:text-white'
              }`}
            >
              <cat.icon size={16} />
              {cat.title}
            </button>
          ))}
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {filteredCategories.map((category) => (
            <div key={category.id}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center`}>
                  <category.icon size={20} className={category.color} />
                </div>
                <h2 className="text-xl font-bold">{category.title}</h2>
              </div>

              <div className="space-y-3">
                {category.questions.map((item, index) => {
                  const itemId = `${category.id}-${index}`;
                  const isOpen = openItems.includes(itemId);

                  return (
                    <div
                      key={index}
                      className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-800/80 transition-colors"
                      >
                        <span className="font-medium pr-4">{item.question}</span>
                        {isOpen ? (
                          <ChevronUp size={20} className="text-slate-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown size={20} className="text-slate-400 flex-shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 text-slate-400 text-sm leading-relaxed border-t border-slate-700 pt-3">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <HelpCircle size={48} className="mx-auto text-slate-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">No results found</h3>
            <p className="text-slate-400 mb-4">
              We couldn&apos;t find any questions matching &quot;{searchQuery}&quot;
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="text-[#c9a227] hover:underline"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Still Need Help */}
        <div className="mt-12 bg-gradient-to-r from-[#c9a227]/20 to-[#e8c547]/10 border border-[#c9a227]/30 rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Still have questions?</h2>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto">
            Our support team is here to help. Reach out and we&apos;ll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#c9a227] text-black font-bold rounded-lg hover:bg-[#e8c547] transition-colors"
            >
              Contact Support
            </Link>
            <Link
              href="/investor-faq"
              className="px-6 py-3 bg-slate-800 border border-slate-700 text-white font-medium rounded-lg hover:border-slate-600 transition-colors"
            >
              Investor FAQ
            </Link>
          </div>
        </div>
      </main>

      <GlobalFooter />
    </div>
  );
}
