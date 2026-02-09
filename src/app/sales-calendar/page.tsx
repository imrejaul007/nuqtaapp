'use client';

import React, { useState } from 'react';
import {
  Calendar,
  Coffee,
  Scissors,
  Utensils,
  ShoppingBag,
  Dumbbell,
  Sparkles,
  Pill,
  Gem,
  Car,
  Smartphone,
  Home,
  Cake,
  Shirt,
  TrendingUp,
  Users,
  Target,
  Clock,
  Zap,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Megaphone,
  Bell,
  Gift
} from 'lucide-react';

// Category Sales Days - Targeting slow weekdays
const categorySalesDays = [
  {
    id: 'cafe-monday',
    name: 'Cafe Monday',
    tagline: 'Start your week with savings',
    category: 'Coffee & Cafe',
    icon: Coffee,
    color: 'amber',
    day: 'Monday',
    weekOfMonth: 1, // 1st Monday
    normalCashback: 10,
    boostedCashback: 15,
    targetMerchants: ['Specialty coffee shops', 'Cafes', 'Bakeries', 'Juice bars'],
    whyThisDay: 'Mondays are slowest for cafes - people bring coffee from home. 15% cashback drives traffic.',
    estimatedLift: '+40% transactions',
    notificationTime: '7:00 AM',
    peakHours: '7AM - 10AM, 2PM - 5PM'
  },
  {
    id: 'glow-tuesday',
    name: 'Glow Tuesday',
    tagline: 'Treat yourself mid-week',
    category: 'Beauty & Salon',
    icon: Scissors,
    color: 'pink',
    day: 'Tuesday',
    weekOfMonth: 2, // 2nd Tuesday
    normalCashback: 10,
    boostedCashback: 15,
    targetMerchants: ['Salons', 'Spas', 'Nail studios', 'Barbershops', 'Beauty clinics'],
    whyThisDay: 'Tuesday-Wednesday are dead for salons. Weekend appointments are full, weekday slots empty.',
    estimatedLift: '+55% bookings',
    notificationTime: '9:00 AM',
    peakHours: '10AM - 1PM, 4PM - 8PM'
  },
  {
    id: 'dine-wednesday',
    name: 'Dine Wednesday',
    tagline: 'Hump day feast',
    category: 'Restaurants',
    icon: Utensils,
    color: 'orange',
    day: 'Wednesday',
    weekOfMonth: 3, // 3rd Wednesday
    normalCashback: 10,
    boostedCashback: 15,
    targetMerchants: ['Restaurants', 'Fine dining', 'Casual dining', 'Food courts'],
    whyThisDay: 'Wednesday dinners are 30% slower than weekends. Families and couples need a reason to dine out.',
    estimatedLift: '+35% dinner covers',
    notificationTime: '11:00 AM',
    peakHours: '12PM - 2PM, 7PM - 10PM'
  },
  {
    id: 'shop-thursday',
    name: 'Shop Thursday',
    tagline: 'Beat the weekend rush',
    category: 'Retail & Fashion',
    icon: ShoppingBag,
    color: 'purple',
    day: 'Thursday',
    weekOfMonth: 4, // 4th Thursday
    normalCashback: 10,
    boostedCashback: 15,
    targetMerchants: ['Fashion boutiques', 'Accessory stores', 'Shoe stores', 'Department stores'],
    whyThisDay: 'Thursday retail is 25% below weekend. Drive early shoppers before Friday rush.',
    estimatedLift: '+30% foot traffic',
    notificationTime: '10:00 AM',
    peakHours: '12PM - 3PM, 5PM - 9PM'
  },
  {
    id: 'fit-monday',
    name: 'Fit Monday',
    tagline: 'New week, new goals',
    category: 'Gym & Fitness',
    icon: Dumbbell,
    color: 'green',
    day: 'Monday',
    weekOfMonth: 2, // 2nd Monday
    normalCashback: 10,
    boostedCashback: 15,
    targetMerchants: ['Gyms', 'Yoga studios', 'CrossFit boxes', 'Pilates', 'Sports shops'],
    whyThisDay: 'Monday motivation is real but drops by Wednesday. Capture the fresh-start energy.',
    estimatedLift: '+25% sign-ups',
    notificationTime: '6:00 AM',
    peakHours: '6AM - 9AM, 5PM - 8PM'
  },
  {
    id: 'wellness-tuesday',
    name: 'Wellness Tuesday',
    tagline: 'Self-care essentials',
    category: 'Pharmacy & Health',
    icon: Pill,
    color: 'teal',
    day: 'Tuesday',
    weekOfMonth: 3, // 3rd Tuesday
    normalCashback: 10,
    boostedCashback: 15,
    targetMerchants: ['Pharmacies', 'Health stores', 'Supplement shops', 'Optical stores'],
    whyThisDay: 'Pharmacy visits are errand-driven. Give people a reason to stock up on a slow day.',
    estimatedLift: '+20% basket size',
    notificationTime: '9:00 AM',
    peakHours: '10AM - 1PM, 4PM - 7PM'
  },
  {
    id: 'sweet-wednesday',
    name: 'Sweet Wednesday',
    tagline: 'Midweek indulgence',
    category: 'Desserts & Bakery',
    icon: Cake,
    color: 'rose',
    day: 'Wednesday',
    weekOfMonth: 2, // 2nd Wednesday
    normalCashback: 10,
    boostedCashback: 15,
    targetMerchants: ['Bakeries', 'Dessert shops', 'Ice cream', 'Chocolate shops', 'Cake studios'],
    whyThisDay: 'Dessert purchases spike on weekends. Wednesday is dead - give people a treat day.',
    estimatedLift: '+45% orders',
    notificationTime: '2:00 PM',
    peakHours: '2PM - 5PM, 7PM - 10PM'
  },
  {
    id: 'home-thursday',
    name: 'Home Thursday',
    tagline: 'Refresh your space',
    category: 'Home & Living',
    icon: Home,
    color: 'indigo',
    day: 'Thursday',
    weekOfMonth: 1, // 1st Thursday
    normalCashback: 10,
    boostedCashback: 15,
    targetMerchants: ['Home decor', 'Furniture', 'Home fragrances', 'Kitchenware', 'Bedding'],
    whyThisDay: 'Home shopping is weekend-heavy. Thursday drives pre-weekend planning purchases.',
    estimatedLift: '+30% transactions',
    notificationTime: '11:00 AM',
    peakHours: '12PM - 3PM, 5PM - 9PM'
  },
  {
    id: 'tech-monday',
    name: 'Tech Monday',
    tagline: 'Upgrade your gear',
    category: 'Electronics',
    icon: Smartphone,
    color: 'blue',
    day: 'Monday',
    weekOfMonth: 3, // 3rd Monday
    normalCashback: 10,
    boostedCashback: 12, // Lower margin, lower boost
    targetMerchants: ['Electronics stores', 'Phone shops', 'Computer stores', 'Accessory shops'],
    whyThisDay: 'Electronics is research-heavy. Monday gives time to research before weekend purchase.',
    estimatedLift: '+20% sales',
    notificationTime: '10:00 AM',
    peakHours: '12PM - 3PM, 6PM - 9PM'
  },
  {
    id: 'glam-wednesday',
    name: 'Glam Wednesday',
    tagline: 'Sparkle mid-week',
    category: 'Jewellery & Gold',
    icon: Gem,
    color: 'yellow',
    day: 'Wednesday',
    weekOfMonth: 4, // 4th Wednesday
    normalCashback: 10,
    boostedCashback: 12, // High-value items
    targetMerchants: ['Jewellery stores', 'Gold shops', 'Watch stores', 'Accessory boutiques'],
    whyThisDay: 'Jewellery is special-occasion driven. Create a mid-week occasion.',
    estimatedLift: '+25% foot traffic',
    notificationTime: '11:00 AM',
    peakHours: '11AM - 2PM, 5PM - 9PM'
  },
  {
    id: 'auto-tuesday',
    name: 'Auto Tuesday',
    tagline: 'Car care day',
    category: 'Auto Services',
    icon: Car,
    color: 'red',
    day: 'Tuesday',
    weekOfMonth: 4, // 4th Tuesday
    normalCashback: 10,
    boostedCashback: 15,
    targetMerchants: ['Car wash', 'Detailing', 'Service centers', 'Tire shops', 'Auto accessories'],
    whyThisDay: 'Car services are weekend-heavy. Tuesday slots sit empty.',
    estimatedLift: '+35% bookings',
    notificationTime: '8:00 AM',
    peakHours: '8AM - 12PM, 3PM - 6PM'
  },
  {
    id: 'style-thursday',
    name: 'Style Thursday',
    tagline: 'Modest fashion day',
    category: 'Abaya & Traditional',
    icon: Shirt,
    color: 'slate',
    day: 'Thursday',
    weekOfMonth: 3, // 3rd Thursday
    normalCashback: 10,
    boostedCashback: 15,
    targetMerchants: ['Abaya boutiques', 'Traditional wear', 'Modest fashion', 'Kandura shops'],
    whyThisDay: 'Pre-Friday shopping for traditional wear. Capture the preparation mindset.',
    estimatedLift: '+40% sales',
    notificationTime: '10:00 AM',
    peakHours: '11AM - 2PM, 4PM - 8PM'
  },
];

// Monthly calendar view
const generateMonthCalendar = (month: number, year: number) => {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDay = firstDay.getDay(); // 0 = Sunday

  const weeks: (number | null)[][] = [];
  let currentWeek: (number | null)[] = [];

  // Add empty days for the first week
  for (let i = 0; i < startingDay; i++) {
    currentWeek.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  // Fill remaining days
  while (currentWeek.length < 7 && currentWeek.length > 0) {
    currentWeek.push(null);
  }
  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  return weeks;
};

// Get sales day for a specific date
const getSalesDayForDate = (day: number, month: number, year: number) => {
  const date = new Date(year, month, day);
  const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, etc.
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = dayNames[dayOfWeek];

  // Calculate which week of the month this day is in
  const firstDayOfMonth = new Date(year, month, 1);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const weekOfMonth = Math.ceil((day + firstDayOfWeek) / 7);

  return categorySalesDays.find(
    (salesDay) => salesDay.day === dayName && salesDay.weekOfMonth === weekOfMonth
  );
};

const colorClasses: Record<string, { bg: string; border: string; text: string; light: string }> = {
  amber: { bg: 'bg-amber-500', border: 'border-amber-500', text: 'text-amber-400', light: 'bg-amber-500/20' },
  pink: { bg: 'bg-pink-500', border: 'border-pink-500', text: 'text-pink-400', light: 'bg-pink-500/20' },
  orange: { bg: 'bg-orange-500', border: 'border-orange-500', text: 'text-orange-400', light: 'bg-orange-500/20' },
  purple: { bg: 'bg-purple-500', border: 'border-purple-500', text: 'text-purple-400', light: 'bg-purple-500/20' },
  green: { bg: 'bg-green-500', border: 'border-green-500', text: 'text-green-400', light: 'bg-green-500/20' },
  teal: { bg: 'bg-teal-500', border: 'border-teal-500', text: 'text-teal-400', light: 'bg-teal-500/20' },
  rose: { bg: 'bg-rose-500', border: 'border-rose-500', text: 'text-rose-400', light: 'bg-rose-500/20' },
  indigo: { bg: 'bg-indigo-500', border: 'border-indigo-500', text: 'text-indigo-400', light: 'bg-indigo-500/20' },
  blue: { bg: 'bg-blue-500', border: 'border-blue-500', text: 'text-blue-400', light: 'bg-blue-500/20' },
  yellow: { bg: 'bg-yellow-500', border: 'border-yellow-500', text: 'text-yellow-400', light: 'bg-yellow-500/20' },
  red: { bg: 'bg-red-500', border: 'border-red-500', text: 'text-red-400', light: 'bg-red-500/20' },
  slate: { bg: 'bg-slate-500', border: 'border-slate-500', text: 'text-slate-400', light: 'bg-slate-500/20' },
};

export default function SalesCalendarPage() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear] = useState(new Date().getFullYear());
  const [selectedDay, setSelectedDay] = useState<typeof categorySalesDays[0] | null>(null);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weeks = generateMonthCalendar(selectedMonth, selectedYear);

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0a1628] via-[#1a2d4a] to-[#0a1628] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#c9a227] to-amber-500 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-[#0a1628]" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-4xl font-bold text-white">Category Sales Calendar</h1>
              <p className="text-[#c9a227]">15% Cashback Days - Driving Weekday Traffic</p>
            </div>
          </div>
          <p className="text-slate-300 max-w-3xl">
            Strategic category-specific sales days targeting slow weekdays. Each category gets one dedicated
            day per month with boosted 15% cashback (vs normal 10%) to drive traffic when merchants need it most.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            <div className="bg-slate-800/50 rounded-xl p-4 border border-[#c9a227]/30">
              <div className="text-2xl font-bold text-[#c9a227]">12</div>
              <div className="text-sm text-slate-400">Category Days</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-bold text-green-400">15%</div>
              <div className="text-sm text-slate-400">Boosted Cashback</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-bold text-blue-400">Mon-Thu</div>
              <div className="text-sm text-slate-400">Weekdays Only</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-bold text-purple-400">+35%</div>
              <div className="text-sm text-slate-400">Avg Traffic Lift</div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Strategy Overview */}
        <div className="bg-gradient-to-r from-[#c9a227]/10 to-amber-500/5 rounded-xl p-6 border border-[#c9a227]/30 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-[#c9a227]" />
            <h2 className="text-lg font-bold text-white">Strategy: Drive Slow Days, Not Compete with Busy Days</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-900/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-red-400" />
                <span className="text-white font-medium">The Problem</span>
              </div>
              <p className="text-sm text-slate-400">
                Weekdays (Mon-Thu) see 40% less foot traffic than weekends. Merchants have empty slots,
                staff are idle, fixed costs don't stop.
              </p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-[#c9a227]" />
                <span className="text-white font-medium">Our Solution</span>
              </div>
              <p className="text-sm text-slate-400">
                Category-specific 15% cashback days on slow weekdays. One category per day,
                creating urgency and habit formation.
              </p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-white font-medium">Expected Outcome</span>
              </div>
              <p className="text-sm text-slate-400">
                30-50% traffic lift on sales days. Merchants see ROI, users build weekly habits,
                Nuqta becomes the "sales day" destination.
              </p>
            </div>
          </div>
        </div>

        {/* Calendar View */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Month Calendar */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              {/* Month Selector */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => setSelectedMonth((prev) => (prev === 0 ? 11 : prev - 1))}
                  className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5 rotate-180" />
                </button>
                <h3 className="text-xl font-bold text-white">
                  {monthNames[selectedMonth]} {selectedYear}
                </h3>
                <button
                  onClick={() => setSelectedMonth((prev) => (prev === 11 ? 0 : prev + 1))}
                  className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {/* Day Headers */}
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center text-xs font-medium text-slate-500 py-2">
                    {day}
                  </div>
                ))}

                {/* Calendar Days */}
                {weeks.map((week, weekIndex) =>
                  week.map((day, dayIndex) => {
                    const salesDay = day ? getSalesDayForDate(day, selectedMonth, selectedYear) : null;
                    const isWeekend = dayIndex === 0 || dayIndex === 5 || dayIndex === 6;

                    return (
                      <div
                        key={`${weekIndex}-${dayIndex}`}
                        onClick={() => salesDay && setSelectedDay(salesDay)}
                        className={`
                          relative aspect-square p-1 rounded-lg text-center
                          ${day ? 'cursor-pointer' : ''}
                          ${salesDay ? `${colorClasses[salesDay.color].light} border-2 ${colorClasses[salesDay.color].border}` : 'bg-slate-800/30'}
                          ${isWeekend && day ? 'bg-slate-700/20' : ''}
                          ${!day ? 'bg-transparent' : ''}
                          hover:bg-slate-700/50 transition-colors
                        `}
                      >
                        {day && (
                          <>
                            <div className={`text-sm ${salesDay ? colorClasses[salesDay.color].text : 'text-slate-400'}`}>
                              {day}
                            </div>
                            {salesDay && (
                              <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
                                <salesDay.icon className={`w-3 h-3 ${colorClasses[salesDay.color].text}`} />
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    );
                  })
                )}
              </div>

              {/* Legend */}
              <div className="mt-6 pt-6 border-t border-slate-700/50">
                <h4 className="text-sm font-medium text-slate-400 mb-3">This Month's Sales Days</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {categorySalesDays.slice(0, 6).map((salesDay) => (
                    <div
                      key={salesDay.id}
                      onClick={() => setSelectedDay(salesDay)}
                      className={`flex items-center gap-2 p-2 rounded-lg ${colorClasses[salesDay.color].light} cursor-pointer hover:opacity-80 transition-opacity`}
                    >
                      <salesDay.icon className={`w-4 h-4 ${colorClasses[salesDay.color].text}`} />
                      <span className="text-xs text-white truncate">{salesDay.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Selected Day Details */}
          <div className="lg:col-span-1">
            {selectedDay ? (
              <div className={`bg-slate-800/30 rounded-xl p-6 border-2 ${colorClasses[selectedDay.color].border}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${colorClasses[selectedDay.color].bg} flex items-center justify-center`}>
                    <selectedDay.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{selectedDay.name}</h3>
                    <p className={`text-sm ${colorClasses[selectedDay.color].text}`}>{selectedDay.tagline}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Cashback Boost */}
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Normal Cashback</span>
                      <span className="text-white">{selectedDay.normalCashback}%</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-slate-400">Sales Day Cashback</span>
                      <span className={`text-xl font-bold ${colorClasses[selectedDay.color].text}`}>
                        {selectedDay.boostedCashback}%
                      </span>
                    </div>
                  </div>

                  {/* Schedule */}
                  <div>
                    <div className="text-sm text-slate-400 mb-2">Schedule</div>
                    <div className="flex items-center gap-2 text-white">
                      <Calendar className="w-4 h-4 text-slate-500" />
                      <span>{selectedDay.weekOfMonth === 1 ? '1st' : selectedDay.weekOfMonth === 2 ? '2nd' : selectedDay.weekOfMonth === 3 ? '3rd' : '4th'} {selectedDay.day} of month</span>
                    </div>
                  </div>

                  {/* Notification */}
                  <div>
                    <div className="text-sm text-slate-400 mb-2">Push Notification</div>
                    <div className="flex items-center gap-2 text-white">
                      <Bell className="w-4 h-4 text-slate-500" />
                      <span>{selectedDay.notificationTime}</span>
                    </div>
                  </div>

                  {/* Peak Hours */}
                  <div>
                    <div className="text-sm text-slate-400 mb-2">Peak Hours</div>
                    <div className="flex items-center gap-2 text-white">
                      <Clock className="w-4 h-4 text-slate-500" />
                      <span>{selectedDay.peakHours}</span>
                    </div>
                  </div>

                  {/* Target Merchants */}
                  <div>
                    <div className="text-sm text-slate-400 mb-2">Target Merchants</div>
                    <div className="flex flex-wrap gap-1">
                      {selectedDay.targetMerchants.map((merchant) => (
                        <span key={merchant} className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded">
                          {merchant}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Why This Day */}
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="w-4 h-4 text-[#c9a227]" />
                      <span className="text-sm font-medium text-white">Why This Day?</span>
                    </div>
                    <p className="text-sm text-slate-400">{selectedDay.whyThisDay}</p>
                  </div>

                  {/* Expected Lift */}
                  <div className={`${colorClasses[selectedDay.color].light} rounded-lg p-4 text-center`}>
                    <div className="text-sm text-slate-400">Expected Traffic Lift</div>
                    <div className={`text-2xl font-bold ${colorClasses[selectedDay.color].text}`}>
                      {selectedDay.estimatedLift}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50 text-center">
                <Calendar className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-400">Select a Sales Day</h3>
                <p className="text-sm text-slate-500 mt-2">
                  Click on a highlighted day in the calendar to see details
                </p>
              </div>
            )}
          </div>
        </div>

        {/* All Category Days */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#c9a227]" />
            All Category Sales Days
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categorySalesDays.map((salesDay) => (
              <div
                key={salesDay.id}
                onClick={() => setSelectedDay(salesDay)}
                className={`bg-slate-800/30 rounded-xl p-5 border ${colorClasses[salesDay.color].border}/50 hover:${colorClasses[salesDay.color].border} cursor-pointer transition-all hover:scale-[1.02]`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${colorClasses[salesDay.color].light} flex items-center justify-center`}>
                      <salesDay.icon className={`w-5 h-5 ${colorClasses[salesDay.color].text}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{salesDay.name}</h3>
                      <p className="text-xs text-slate-400">{salesDay.category}</p>
                    </div>
                  </div>
                  <div className={`text-lg font-bold ${colorClasses[salesDay.color].text}`}>
                    {salesDay.boostedCashback}%
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">
                    {salesDay.weekOfMonth === 1 ? '1st' : salesDay.weekOfMonth === 2 ? '2nd' : salesDay.weekOfMonth === 3 ? '3rd' : '4th'} {salesDay.day}
                  </span>
                  <span className="text-green-400">{salesDay.estimatedLift}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Merchant Value Prop */}
        <div className="mt-12 bg-gradient-to-r from-green-500/10 to-emerald-500/5 rounded-xl p-6 border border-green-500/30">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-green-400" />
            <h2 className="text-lg font-bold text-white">Merchant Sales Pitch</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-white font-medium mb-3">What We Tell Merchants:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  "Your category gets a dedicated sales day every month"
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  "We drive traffic on your slowest days - Monday through Thursday"
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  "Users get 15% cashback - they'll come to you, not competitors"
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  "Push notifications go to thousands of users that morning"
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">Merchant Opt-In Requirements:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <ChevronRight className="w-4 h-4 text-[#c9a227] mt-0.5 flex-shrink-0" />
                  Must be Engine A partner (high-margin categories)
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <ChevronRight className="w-4 h-4 text-[#c9a227] mt-0.5 flex-shrink-0" />
                  Agree to honor 15% cashback on sales day
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <ChevronRight className="w-4 h-4 text-[#c9a227] mt-0.5 flex-shrink-0" />
                  Feature in-app promotion and signage
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <ChevronRight className="w-4 h-4 text-[#c9a227] mt-0.5 flex-shrink-0" />
                  Commit to at least 3 months of participation
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Notification Strategy */}
        <div className="mt-8 bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
          <div className="flex items-center gap-2 mb-4">
            <Megaphone className="w-5 h-5 text-purple-400" />
            <h2 className="text-lg font-bold text-white">Notification Strategy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-900/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Bell className="w-4 h-4 text-amber-400" />
                <span className="text-white font-medium">Morning Push</span>
              </div>
              <p className="text-sm text-slate-400">
                "☕ It's Cafe Monday! Get 15% cashback at 50+ cafes today only."
              </p>
              <div className="text-xs text-slate-500 mt-2">Sent at category-specific optimal time</div>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Gift className="w-4 h-4 text-green-400" />
                <span className="text-white font-medium">Reminder Push</span>
              </div>
              <p className="text-sm text-slate-400">
                "⏰ 4 hours left! Cafe Monday ends at midnight. Don't miss 15% back."
              </p>
              <div className="text-xs text-slate-500 mt-2">Sent at 8PM for last-minute visits</div>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="w-4 h-4 text-blue-400" />
                <span className="text-white font-medium">Next Day Teaser</span>
              </div>
              <p className="text-sm text-slate-400">
                "Tomorrow is Glow Tuesday! 15% cashback at salons. Book your slot now."
              </p>
              <div className="text-xs text-slate-500 mt-2">Sent day before for appointment-based categories</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
