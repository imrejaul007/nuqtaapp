'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Circle,
  Building2,
  User,
  Mail,
  Phone,
  MapPin,
  Globe,
  FileText,
  Upload,
  Camera,
  CreditCard,
  Shield,
  Star,
  Crown,
  Rocket,
  Gem,
  Coffee,
  ShoppingCart,
  Store,
  Scissors,
  Dumbbell,
  Utensils,
  Sparkles,
  AlertCircle,
  Calendar,
  Clock,
  DollarSign,
  Percent,
  Gift,
  Target,
  Users,
  Megaphone,
  BarChart3,
  Smartphone,
  Monitor,
  ChevronDown,
  ChevronUp,
  Download,
  ExternalLink,
  Loader2,
  X,
  Zap,
  Award,
  Heart,
  ShoppingBag,
  Film,
  Stethoscope,
  Settings
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

// Step indicator component
const StepIndicator = ({
  steps,
  currentStep
}: {
  steps: { id: number; title: string; description: string }[];
  currentStep: number;
}) => (
  <div className="flex items-center justify-between mb-8">
    {steps.map((step, index) => (
      <React.Fragment key={step.id}>
        <div className="flex flex-col items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
            currentStep > step.id
              ? 'bg-green-500 text-white'
              : currentStep === step.id
                ? 'bg-[#c9a227] text-black'
                : 'bg-white/10 text-slate-400'
          }`}>
            {currentStep > step.id ? <Check size={20} /> : step.id}
          </div>
          <span className={`text-xs mt-2 font-medium ${
            currentStep >= step.id ? 'text-white' : 'text-slate-500'
          }`}>
            {step.title}
          </span>
        </div>
        {index < steps.length - 1 && (
          <div className={`flex-1 h-1 mx-2 rounded ${
            currentStep > step.id ? 'bg-green-500' : 'bg-white/10'
          }`} />
        )}
      </React.Fragment>
    ))}
  </div>
);

// Business categories
const businessCategories = [
  { id: 'cafe', name: 'Cafe & Restaurant', icon: Utensils, engine: 'A', color: 'orange' },
  { id: 'salon', name: 'Salon & Spa', icon: Scissors, engine: 'A', color: 'pink' },
  { id: 'gym', name: 'Gym & Fitness', icon: Dumbbell, engine: 'A', color: 'emerald' },
  { id: 'fashion', name: 'Fashion & Retail', icon: ShoppingBag, engine: 'A', color: 'purple' },
  { id: 'entertainment', name: 'Entertainment', icon: Film, engine: 'A/C', color: 'fuchsia' },
  { id: 'supermarket', name: 'Supermarket', icon: Store, engine: 'B', color: 'green' },
  { id: 'gold', name: 'Gold & Jewelry', icon: Gem, engine: 'B', color: 'amber' },
  { id: 'electronics', name: 'Electronics', icon: Settings, engine: 'B', color: 'cyan' },
  { id: 'pharmacy', name: 'Pharmacy', icon: Stethoscope, engine: 'B', color: 'red' },
];

// Package tiers
const packageTiers = [
  {
    id: 'free',
    name: 'Free',
    icon: Rocket,
    color: 'slate',
    monthlyFee: 0,
    commission: { A: '20%', B: '8%' },
    features: ['Basic listing', 'Standard support', 'Basic analytics'],
    recommended: false
  },
  {
    id: 'basic',
    name: 'Basic',
    icon: Star,
    color: 'blue',
    monthlyFee: 2500,
    commission: { A: '18%', B: '7%' },
    features: ['Enhanced listing', 'Dedicated manager', 'Weekly reports', 'Basic marketing'],
    recommended: false
  },
  {
    id: 'golden',
    name: 'Golden',
    icon: Crown,
    color: 'amber',
    monthlyFee: 5000,
    commission: { A: '17%', B: '6%' },
    features: ['Premium listing', 'Priority support', 'Full marketing suite', 'Content creation', 'Influencer marketing'],
    recommended: true
  },
  {
    id: 'diamond',
    name: 'Diamond',
    icon: Gem,
    color: 'purple',
    monthlyFee: 10000,
    commission: { A: '15%', B: '5%' },
    features: ['VIP listing', 'Exclusive campaigns', 'Full agency support', 'PR coverage', 'Event sponsorship'],
    recommended: false
  }
];

// Required documents based on business type
const requiredDocuments = [
  { id: 'trade_license', name: 'Trade License', description: 'Valid UAE trade license' },
  { id: 'emirates_id', name: 'Owner Emirates ID', description: 'Front and back of Emirates ID' },
  { id: 'passport', name: 'Owner Passport', description: 'Passport copy of the owner' },
  { id: 'bank_details', name: 'Bank Details', description: 'Bank account for settlements' },
  { id: 'menu_catalog', name: 'Menu/Catalog', description: 'Product or service menu (optional)' },
];

export default function MerchantOnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    // Step 1: Business Info
    businessName: '',
    businessNameAr: '',
    category: '',
    subCategory: '',
    numberOfBranches: '1',
    establishedYear: '',
    website: '',
    instagram: '',

    // Step 2: Contact Info
    ownerName: '',
    ownerEmail: '',
    ownerPhone: '',
    businessAddress: '',
    emirate: '',
    area: '',
    poBox: '',

    // Step 3: Package Selection
    selectedPackage: 'golden',

    // Step 4: Documents
    documents: {} as Record<string, File | null>,

    // Step 5: Agreement
    agreedToTerms: false,
    agreedToPrivacy: false,
    agreedToCommission: false,
  });

  const steps = [
    { id: 1, title: 'Business', description: 'Business Information' },
    { id: 2, title: 'Contact', description: 'Contact Details' },
    { id: 3, title: 'Package', description: 'Select Package' },
    { id: 4, title: 'Documents', description: 'Upload Documents' },
    { id: 5, title: 'Agreement', description: 'Review & Sign' },
  ];

  const updateFormData = (field: string, value: string | boolean | File | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const updateDocument = (docId: string, file: File | null) => {
    setFormData(prev => ({
      ...prev,
      documents: { ...prev.documents, [docId]: file }
    }));
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  const selectedCategory = businessCategories.find(c => c.id === formData.category);
  const selectedPackage = packageTiers.find(p => p.id === formData.selectedPackage);

  // Success Screen
  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c9a227] to-[#e8c547] flex items-center justify-center">
                <span className="text-black font-bold text-xl">N</span>
              </div>
              <span className="text-2xl font-bold text-white">Nuqta</span>
            </Link>
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-green-400" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">Application Submitted!</h1>
            <p className="text-slate-400 mb-8">
              Thank you for applying to join Nuqta. Our team will review your application and contact you within 24-48 hours.
            </p>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-8 text-left">
              <h3 className="text-white font-bold mb-4">What happens next?</h3>
              <div className="space-y-4">
                {[
                  { step: 1, title: 'Application Review', desc: 'Our team reviews your documents and business details' },
                  { step: 2, title: 'Verification Call', desc: 'A brief call to verify your business and answer questions' },
                  { step: 3, title: 'Contract Signing', desc: 'Digital contract signing via DocuSign' },
                  { step: 4, title: 'Onboarding', desc: 'POS setup, menu upload, and marketing kickoff' },
                  { step: 5, title: 'Go Live!', desc: 'Your business is live on Nuqta app' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#c9a227]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#c9a227] font-bold text-sm">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#c9a227]/20 to-purple-500/20 rounded-xl p-6 border border-[#c9a227]/30 mb-8">
              <h3 className="text-white font-bold mb-2">Your Application Reference</h3>
              <p className="text-[#c9a227] text-2xl font-mono">NQT-{Date.now().toString().slice(-8)}</p>
              <p className="text-slate-400 text-sm mt-2">Save this for your records</p>
            </div>

            <div className="flex gap-4 justify-center">
              <Link
                href="/merchant-playbook"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all"
              >
                View Sales Playbook
              </Link>
              <Link
                href="/"
                className="px-6 py-3 bg-[#c9a227] hover:bg-[#d4af37] text-black font-bold rounded-lg transition-all"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c9a227] to-[#e8c547] flex items-center justify-center">
              <span className="text-black font-bold text-xl">N</span>
            </div>
            <span className="text-2xl font-bold text-white">Nuqta</span>
          </Link>
          <Link
            href="/merchant-playbook"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="text-sm">Back to Playbook</span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Merchant Onboarding</h1>
          <p className="text-slate-400">Join the Nuqta merchant network and grow your business</p>
        </div>

        {/* Step Indicator */}
        <StepIndicator steps={steps} currentStep={currentStep} />

        {/* Step Content */}
        <div className="bg-white/5 rounded-2xl border border-white/10 p-6 md:p-8">

          {/* Step 1: Business Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#c9a227]/20 flex items-center justify-center">
                  <Building2 className="text-[#c9a227]" size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Business Information</h2>
                  <p className="text-slate-400 text-sm">Tell us about your business</p>
                </div>
              </div>

              {/* Business Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Business Name (English) *
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => updateFormData('businessName', e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:border-[#c9a227] focus:outline-none transition-colors"
                    placeholder="e.g., Golden Spoon Cafe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Business Name (Arabic)
                  </label>
                  <input
                    type="text"
                    value={formData.businessNameAr}
                    onChange={(e) => updateFormData('businessNameAr', e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:border-[#c9a227] focus:outline-none transition-colors text-right"
                    placeholder="اسم المحل بالعربية"
                    dir="rtl"
                  />
                </div>
              </div>

              {/* Business Category */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-3">
                  Business Category *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {businessCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => updateFormData('category', category.id)}
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${
                        formData.category === category.id
                          ? 'bg-[#c9a227]/20 border-[#c9a227] text-white'
                          : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                      }`}
                    >
                      <category.icon size={24} className={formData.category === category.id ? 'text-[#c9a227]' : ''} />
                      <span className="text-sm font-medium text-center">{category.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        category.engine === 'A' ? 'bg-green-500/20 text-green-400' :
                        category.engine === 'B' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}>
                        Engine {category.engine}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional Business Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Number of Branches *
                  </label>
                  <select
                    value={formData.numberOfBranches}
                    onChange={(e) => updateFormData('numberOfBranches', e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#c9a227] focus:outline-none transition-colors"
                  >
                    {[1, 2, 3, 4, 5, '6-10', '10+'].map((num) => (
                      <option key={num} value={num} className="bg-slate-800">{num}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Year Established
                  </label>
                  <input
                    type="text"
                    value={formData.establishedYear}
                    onChange={(e) => updateFormData('establishedYear', e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:border-[#c9a227] focus:outline-none transition-colors"
                    placeholder="e.g., 2020"
                  />
                </div>
              </div>

              {/* Online Presence */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    <Globe size={16} className="inline mr-2" />
                    Website
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => updateFormData('website', e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:border-[#c9a227] focus:outline-none transition-colors"
                    placeholder="https://www.example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    <span className="inline-block w-4 h-4 mr-2 text-center">@</span>
                    Instagram Handle
                  </label>
                  <input
                    type="text"
                    value={formData.instagram}
                    onChange={(e) => updateFormData('instagram', e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:border-[#c9a227] focus:outline-none transition-colors"
                    placeholder="@yourbusiness"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Contact Information */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#c9a227]/20 flex items-center justify-center">
                  <User className="text-[#c9a227]" size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Contact Information</h2>
                  <p className="text-slate-400 text-sm">How can we reach you?</p>
                </div>
              </div>

              {/* Owner Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Owner/Manager Name *
                  </label>
                  <input
                    type="text"
                    value={formData.ownerName}
                    onChange={(e) => updateFormData('ownerName', e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:border-[#c9a227] focus:outline-none transition-colors"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    <Phone size={16} className="inline mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.ownerPhone}
                    onChange={(e) => updateFormData('ownerPhone', e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:border-[#c9a227] focus:outline-none transition-colors"
                    placeholder="+971 50 123 4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  <Mail size={16} className="inline mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.ownerEmail}
                  onChange={(e) => updateFormData('ownerEmail', e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:border-[#c9a227] focus:outline-none transition-colors"
                  placeholder="email@example.com"
                />
              </div>

              {/* Business Address */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  <MapPin size={16} className="inline mr-2" />
                  Business Address *
                </label>
                <textarea
                  value={formData.businessAddress}
                  onChange={(e) => updateFormData('businessAddress', e.target.value)}
                  rows={2}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:border-[#c9a227] focus:outline-none transition-colors resize-none"
                  placeholder="Shop/Building number, Street name, Area"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Emirate *
                  </label>
                  <select
                    value={formData.emirate}
                    onChange={(e) => updateFormData('emirate', e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#c9a227] focus:outline-none transition-colors"
                  >
                    <option value="" className="bg-slate-800">Select Emirate</option>
                    {['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'RAK', 'Fujairah', 'UAQ'].map((emirate) => (
                      <option key={emirate} value={emirate} className="bg-slate-800">{emirate}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Area *
                  </label>
                  <input
                    type="text"
                    value={formData.area}
                    onChange={(e) => updateFormData('area', e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:border-[#c9a227] focus:outline-none transition-colors"
                    placeholder="e.g., JLT, Marina"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    P.O. Box
                  </label>
                  <input
                    type="text"
                    value={formData.poBox}
                    onChange={(e) => updateFormData('poBox', e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:border-[#c9a227] focus:outline-none transition-colors"
                    placeholder="Optional"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Package Selection */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#c9a227]/20 flex items-center justify-center">
                  <Gift className="text-[#c9a227]" size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Select Your Package</h2>
                  <p className="text-slate-400 text-sm">Choose the plan that fits your business</p>
                </div>
              </div>

              {selectedCategory && (
                <div className="bg-white/5 rounded-lg p-4 border border-white/10 mb-6">
                  <div className="flex items-center gap-3">
                    <selectedCategory.icon className="text-[#c9a227]" size={24} />
                    <div>
                      <p className="text-white font-medium">{selectedCategory.name}</p>
                      <p className="text-slate-400 text-sm">Engine {selectedCategory.engine} - Commission rates shown below</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {packageTiers.map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => updateFormData('selectedPackage', tier.id)}
                    className={`relative p-6 rounded-xl border text-left transition-all ${
                      formData.selectedPackage === tier.id
                        ? 'bg-[#c9a227]/20 border-[#c9a227]'
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {tier.recommended && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="px-3 py-1 bg-[#c9a227] text-black text-xs font-bold rounded-full">
                          RECOMMENDED
                        </span>
                      </div>
                    )}

                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        tier.color === 'slate' ? 'bg-slate-500/20' :
                        tier.color === 'blue' ? 'bg-blue-500/20' :
                        tier.color === 'amber' ? 'bg-amber-500/20' :
                        'bg-purple-500/20'
                      }`}>
                        <tier.icon className={`${
                          tier.color === 'slate' ? 'text-slate-400' :
                          tier.color === 'blue' ? 'text-blue-400' :
                          tier.color === 'amber' ? 'text-amber-400' :
                          'text-purple-400'
                        }`} size={20} />
                      </div>
                      <div>
                        <h3 className="text-white font-bold">{tier.name}</h3>
                        <p className="text-slate-400 text-sm">
                          {tier.monthlyFee === 0 ? 'Free' : `AED ${tier.monthlyFee.toLocaleString()}/mo`}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="text-slate-400 text-xs">Commission Rate:</span>
                      <p className="text-white font-bold">
                        {selectedCategory?.engine === 'B' ? tier.commission.B : tier.commission.A}
                      </p>
                    </div>

                    <ul className="space-y-2">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                          <Check size={14} className="text-green-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {formData.selectedPackage === tier.id && (
                      <div className="absolute top-4 right-4">
                        <CheckCircle2 className="text-[#c9a227]" size={24} />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Investment Breakdown Preview */}
              {selectedPackage && selectedPackage.monthlyFee > 0 && (
                <div className="bg-gradient-to-r from-[#c9a227]/10 to-purple-500/10 rounded-xl p-6 border border-[#c9a227]/30">
                  <h4 className="text-white font-bold mb-4">What You Get with {selectedPackage.name} Package</h4>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[#c9a227] font-bold text-xl">70%</span>
                        <span className="text-[#c9a227] text-sm">Content</span>
                      </div>
                      <p className="text-slate-400 text-xs">Photography, videos, social media, influencer deals</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-blue-400 font-bold text-xl">30%</span>
                        <span className="text-blue-400 text-sm">Ads</span>
                      </div>
                      <p className="text-slate-400 text-xs">Meta, Google, TikTok ads & retargeting</p>
                    </div>
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                    <div className="flex items-center gap-2">
                      <Gift className="text-green-400" size={20} />
                      <span className="text-green-400 font-bold">BONUS: 100% In-App Ad Credit</span>
                    </div>
                    <p className="text-slate-300 text-sm mt-1">
                      Pay AED {selectedPackage.monthlyFee.toLocaleString()}/month → Get AED {selectedPackage.monthlyFee.toLocaleString()} in-app ad credit
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 4: Document Upload */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#c9a227]/20 flex items-center justify-center">
                  <FileText className="text-[#c9a227]" size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Upload Documents</h2>
                  <p className="text-slate-400 text-sm">Required for verification</p>
                </div>
              </div>

              <div className="bg-amber-500/10 rounded-lg p-4 border border-amber-500/20 mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-amber-400 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="text-amber-400 font-medium">Important</p>
                    <p className="text-slate-300 text-sm">
                      All documents must be clear, readable, and in PDF, JPG, or PNG format. Maximum file size: 10MB per document.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {requiredDocuments.map((doc) => (
                  <div key={doc.id} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="text-white font-medium">{doc.name}</h4>
                        <p className="text-slate-400 text-xs">{doc.description}</p>
                      </div>
                      {formData.documents[doc.id] && (
                        <CheckCircle2 className="text-green-400" size={20} />
                      )}
                    </div>

                    <div className="mt-3">
                      {formData.documents[doc.id] ? (
                        <div className="flex items-center justify-between bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                          <div className="flex items-center gap-2">
                            <FileText className="text-green-400" size={16} />
                            <span className="text-green-400 text-sm">
                              {(formData.documents[doc.id] as File).name}
                            </span>
                          </div>
                          <button
                            onClick={() => updateDocument(doc.id, null)}
                            className="text-slate-400 hover:text-red-400 transition-colors"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ) : (
                        <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-white/20 rounded-lg cursor-pointer hover:border-[#c9a227]/50 hover:bg-white/5 transition-all">
                          <Upload className="text-slate-400 mb-2" size={24} />
                          <span className="text-slate-400 text-sm">Click to upload or drag and drop</span>
                          <span className="text-slate-500 text-xs mt-1">PDF, JPG, PNG (max 10MB)</span>
                          <input
                            type="file"
                            className="hidden"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={(e) => {
                              const file = e.target.files?.[0] || null;
                              updateDocument(doc.id, file);
                            }}
                          />
                        </label>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <p className="text-slate-400 text-sm">
                  <strong className="text-white">Note:</strong> You can complete the onboarding now and upload documents later.
                  However, your business won&apos;t go live until all required documents are verified.
                </p>
              </div>
            </div>
          )}

          {/* Step 5: Agreement */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#c9a227]/20 flex items-center justify-center">
                  <Shield className="text-[#c9a227]" size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Review & Submit</h2>
                  <p className="text-slate-400 text-sm">Almost there! Review and accept the terms</p>
                </div>
              </div>

              {/* Summary */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-white font-bold mb-4">Application Summary</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-slate-400">Business Name:</span>
                    <p className="text-white font-medium">{formData.businessName || '-'}</p>
                  </div>
                  <div>
                    <span className="text-slate-400">Category:</span>
                    <p className="text-white font-medium">{selectedCategory?.name || '-'}</p>
                  </div>
                  <div>
                    <span className="text-slate-400">Package:</span>
                    <p className="text-white font-medium">{selectedPackage?.name || '-'}</p>
                  </div>
                  <div>
                    <span className="text-slate-400">Monthly Fee:</span>
                    <p className="text-white font-medium">
                      {selectedPackage?.monthlyFee === 0 ? 'Free' : `AED ${selectedPackage?.monthlyFee.toLocaleString()}`}
                    </p>
                  </div>
                  <div>
                    <span className="text-slate-400">Commission:</span>
                    <p className="text-white font-medium">
                      {selectedCategory?.engine === 'B' ? selectedPackage?.commission.B : selectedPackage?.commission.A}
                    </p>
                  </div>
                  <div>
                    <span className="text-slate-400">Contact:</span>
                    <p className="text-white font-medium">{formData.ownerPhone || '-'}</p>
                  </div>
                </div>
              </div>

              {/* Agreements */}
              <div className="space-y-4">
                <label className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10 cursor-pointer hover:bg-white/10 transition-all">
                  <input
                    type="checkbox"
                    checked={formData.agreedToTerms}
                    onChange={(e) => updateFormData('agreedToTerms', e.target.checked)}
                    className="mt-1 w-5 h-5 rounded border-white/20 bg-white/5 text-[#c9a227] focus:ring-[#c9a227]"
                  />
                  <div>
                    <span className="text-white font-medium">Terms of Service *</span>
                    <p className="text-slate-400 text-sm mt-1">
                      I have read and agree to the Nuqta Merchant Terms of Service and understand the commission structure.
                    </p>
                    <a href="/terms" target="_blank" className="text-[#c9a227] text-sm hover:underline inline-flex items-center gap-1 mt-1">
                      Read Terms <ExternalLink size={12} />
                    </a>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10 cursor-pointer hover:bg-white/10 transition-all">
                  <input
                    type="checkbox"
                    checked={formData.agreedToPrivacy}
                    onChange={(e) => updateFormData('agreedToPrivacy', e.target.checked)}
                    className="mt-1 w-5 h-5 rounded border-white/20 bg-white/5 text-[#c9a227] focus:ring-[#c9a227]"
                  />
                  <div>
                    <span className="text-white font-medium">Privacy Policy *</span>
                    <p className="text-slate-400 text-sm mt-1">
                      I consent to Nuqta collecting and processing my business information as described in the Privacy Policy.
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10 cursor-pointer hover:bg-white/10 transition-all">
                  <input
                    type="checkbox"
                    checked={formData.agreedToCommission}
                    onChange={(e) => updateFormData('agreedToCommission', e.target.checked)}
                    className="mt-1 w-5 h-5 rounded border-white/20 bg-white/5 text-[#c9a227] focus:ring-[#c9a227]"
                  />
                  <div>
                    <span className="text-white font-medium">Commission Agreement *</span>
                    <p className="text-slate-400 text-sm mt-1">
                      I understand and agree to pay {selectedCategory?.engine === 'B' ? selectedPackage?.commission.B : selectedPackage?.commission.A} commission
                      on all sales made through Nuqta app.
                    </p>
                  </div>
                </label>
              </div>

              {/* What Nuqta Provides Reminder */}
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-500/20">
                <h4 className="text-green-400 font-bold mb-3 flex items-center gap-2">
                  <Sparkles size={20} />
                  What You&apos;ll Get from Nuqta
                </h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    'Dedicated Marketing Manager',
                    'Free POS System',
                    'Professional Content Creation',
                    'Influencer Marketing',
                    'Performance Marketing',
                    'Price Engineering',
                    'Offline Marketing Support',
                    '100% In-App Ad Credit Bonus'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-300">
                      <Check className="text-green-400 flex-shrink-0" size={14} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                currentStep === 1
                  ? 'text-slate-500 cursor-not-allowed'
                  : 'text-white bg-white/10 hover:bg-white/20'
              }`}
            >
              <ArrowLeft size={18} />
              Back
            </button>

            {currentStep < 5 ? (
              <button
                onClick={nextStep}
                className="flex items-center gap-2 px-6 py-3 bg-[#c9a227] hover:bg-[#d4af37] text-black font-bold rounded-lg transition-all"
              >
                Continue
                <ArrowRight size={18} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!formData.agreedToTerms || !formData.agreedToPrivacy || !formData.agreedToCommission || isSubmitting}
                className={`flex items-center gap-2 px-8 py-3 rounded-lg font-bold transition-all ${
                  formData.agreedToTerms && formData.agreedToPrivacy && formData.agreedToCommission && !isSubmitting
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Check size={18} />
                    Submit Application
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <p className="text-slate-400 text-sm">
            Need help? Contact our merchant team at{' '}
            <a href="tel:+97145678901" className="text-[#c9a227] hover:underline">+971 4 567 8901</a>
            {' '}or{' '}
            <a href="mailto:merchants@nuqta.com" className="text-[#c9a227] hover:underline">merchants@nuqta.com</a>
          </p>
        </div>
      </main>
    <GlobalFooter />
    </div>
  );
}
