'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  Building2,
  Clock,
  Globe,
  Users,
  Store,
  Briefcase,
  CheckCircle2,
  Loader2
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'General inquiries and support',
      value: 'hello@nuqta.com',
      href: 'mailto:hello@nuqta.com',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20'
    },
    {
      icon: Store,
      title: 'Merchant Partnerships',
      description: 'Join as a partner merchant',
      value: 'partners@nuqta.com',
      href: 'mailto:partners@nuqta.com',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/20'
    },
    {
      icon: Briefcase,
      title: 'Investor Relations',
      description: 'Investment opportunities',
      value: 'investors@nuqta.com',
      href: 'mailto:investors@nuqta.com',
      color: 'text-[#c9a227]',
      bgColor: 'bg-[#c9a227]/20'
    },
    {
      icon: Users,
      title: 'Careers',
      description: 'Join our growing team',
      value: 'careers@nuqta.com',
      href: 'mailto:careers@nuqta.com',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20'
    }
  ];

  const subjectOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'support', label: 'Customer Support' },
    { value: 'merchant', label: 'Merchant Partnership' },
    { value: 'investor', label: 'Investment Inquiry' },
    { value: 'press', label: 'Press & Media' },
    { value: 'careers', label: 'Careers' },
    { value: 'feedback', label: 'Feedback & Suggestions' }
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-[#0a1628]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
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

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full mb-6">
            <MessageSquare size={16} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Contact Us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Let&apos;s <span className="text-[#c9a227]">Connect</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Have a question, want to partner with us, or just want to say hello?
            We&apos;d love to hear from you.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-slate-600 transition-all group"
            >
              <div className={`w-12 h-12 rounded-lg ${method.bgColor} flex items-center justify-center mb-4`}>
                <method.icon size={24} className={method.color} />
              </div>
              <h3 className="font-bold mb-1">{method.title}</h3>
              <p className="text-slate-400 text-sm mb-2">{method.description}</p>
              <p className={`${method.color} text-sm font-medium group-hover:underline`}>{method.value}</p>
            </a>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} className="text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-slate-400 mb-6">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'general', message: '' });
                  }}
                  className="text-[#c9a227] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#c9a227] transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#c9a227] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Subject *
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-[#c9a227] transition-colors"
                  >
                    {subjectOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#c9a227] transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#c9a227] text-black font-bold rounded-lg hover:bg-[#e8c547] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Info Section */}
          <div className="space-y-6">
            {/* Office Location */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#c9a227]/20 flex items-center justify-center">
                  <MapPin size={20} className="text-[#c9a227]" />
                </div>
                <h3 className="text-xl font-bold">Our Office</h3>
              </div>
              <div className="space-y-3 text-slate-300">
                <p className="font-medium text-white">Nuqta Technologies</p>
                <p>Dubai, United Arab Emirates</p>
                <p className="text-slate-400 text-sm">
                  (Full address available upon request for in-person meetings)
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Clock size={20} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">Business Hours</h3>
              </div>
              <div className="space-y-2 text-slate-300">
                <div className="flex justify-between">
                  <span>Sunday - Thursday</span>
                  <span className="text-white font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday - Saturday</span>
                  <span className="text-slate-400">Closed</span>
                </div>
                <p className="text-slate-400 text-sm mt-3">
                  * Response time: Within 24 business hours
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <Globe size={20} className="text-purple-400" />
                </div>
                <h3 className="text-xl font-bold">Follow Us</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Instagram', 'LinkedIn', 'Twitter', 'TikTok'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-sm text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-br from-[#c9a227]/10 to-transparent border border-[#c9a227]/30 rounded-2xl p-6">
              <h3 className="font-bold mb-4">Looking for something specific?</h3>
              <div className="space-y-2">
                <Link href="/faq" className="flex items-center gap-2 text-slate-300 hover:text-[#c9a227] transition-colors">
                  <ArrowLeft size={16} className="rotate-180" />
                  Frequently Asked Questions
                </Link>
                <Link href="/about" className="flex items-center gap-2 text-slate-300 hover:text-[#c9a227] transition-colors">
                  <ArrowLeft size={16} className="rotate-180" />
                  About Nuqta
                </Link>
                <Link href="/careers" className="flex items-center gap-2 text-slate-300 hover:text-[#c9a227] transition-colors">
                  <ArrowLeft size={16} className="rotate-180" />
                  Career Opportunities
                </Link>
                <Link href="/press-kit" className="flex items-center gap-2 text-slate-300 hover:text-[#c9a227] transition-colors">
                  <ArrowLeft size={16} className="rotate-180" />
                  Press & Media Kit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <GlobalFooter />
    </div>
  );
}
