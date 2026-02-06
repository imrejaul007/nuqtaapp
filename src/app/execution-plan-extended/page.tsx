'use client';

import React, { useState } from 'react';
import {
  Calendar, Target, CheckCircle, Clock, Users, Megaphone, TrendingUp,
  ChevronDown, ChevronUp, Zap, Star, AlertTriangle, DollarSign,
  BarChart3, Globe, Heart, ShoppingCart, Award, Rocket, Copy, Check, Download
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

export default function ExecutionPlanExtendedPage() {
  const [expandedWeek, setExpandedWeek] = useState<string | null>('week5');
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const weeklyPlans = [
    {
      id: 'week5',
      week: 'Week 5',
      phase: 'Growth Acceleration',
      theme: 'Scale Winning Channels',
      budget: 'AED 45,000',
      goals: ['Scale to 15K weekly downloads', 'Launch 5 new merchant partnerships', 'Hit 25K social followers'],
      days: [
        {
          day: 'Sunday',
          tasks: [
            { task: 'Review Week 4 performance data', owner: 'CMO', priority: 'High', time: '9 AM' },
            { task: 'Increase budget 20% on top 3 campaigns', owner: 'Performance Lead', priority: 'High', time: '10 AM' },
            { task: 'Brief 3 new influencers for onboarding', owner: 'Influencer Manager', priority: 'Medium', time: '11 AM' },
            { task: 'Team standup - weekly goals alignment', owner: 'CMO', priority: 'High', time: '2 PM' }
          ]
        },
        {
          day: 'Monday',
          tasks: [
            { task: 'Launch new ad creative batch (5 variations)', owner: 'Performance Lead', priority: 'High', time: '9 AM' },
            { task: 'Merchant success stories content production', owner: 'Content Lead', priority: 'Medium', time: '10 AM' },
            { task: 'Negotiate with 2 mega influencers', owner: 'Influencer Manager', priority: 'High', time: '11 AM' },
            { task: 'Push notification: Weekend offer preview', owner: 'Growth Lead', priority: 'Medium', time: '4 PM' }
          ]
        },
        {
          day: 'Tuesday',
          tasks: [
            { task: 'Creative review session - approve new assets', owner: 'CMO', priority: 'High', time: '10 AM' },
            { task: 'Launch TikTok challenge with micro-influencers', owner: 'Content Lead', priority: 'High', time: '11 AM' },
            { task: 'Merchant onboarding calls (3 new)', owner: 'Partnerships', priority: 'Medium', time: '2 PM' },
            { task: 'Email campaign: Week 5 featured offers', owner: 'Content Lead', priority: 'Medium', time: '3 PM' }
          ]
        },
        {
          day: 'Wednesday',
          tasks: [
            { task: 'CEO sync - progress update', owner: 'CMO', priority: 'High', time: '2 PM' },
            { task: 'Mid-week performance check & optimize', owner: 'Performance Lead', priority: 'High', time: '10 AM' },
            { task: 'Community engagement blitz (respond to all)', owner: 'Community Manager', priority: 'Medium', time: '11 AM' },
            { task: 'Plan weekend activation logistics', owner: 'Events Lead', priority: 'Medium', time: '3 PM' }
          ]
        },
        {
          day: 'Thursday',
          tasks: [
            { task: 'Influencer content goes live (5 posts)', owner: 'Influencer Manager', priority: 'High', time: '10 AM' },
            { task: 'A/B test landing page variations', owner: 'Performance Lead', priority: 'Medium', time: '11 AM' },
            { task: 'Prepare weekly report draft', owner: 'Data Analyst', priority: 'Medium', time: '2 PM' },
            { task: 'User feedback analysis session', owner: 'Product + CMO', priority: 'Medium', time: '4 PM' }
          ]
        },
        {
          day: 'Friday',
          tasks: [
            { task: 'Weekend campaign boost - increase budgets', owner: 'Performance Lead', priority: 'High', time: '9 AM' },
            { task: 'Social media: Weekend offer posts', owner: 'Content Lead', priority: 'High', time: '10 AM' },
            { task: 'Team retrospective & next week planning', owner: 'CMO', priority: 'High', time: '3 PM' },
            { task: 'Submit weekly report to leadership', owner: 'CMO', priority: 'High', time: '5 PM' }
          ]
        }
      ]
    },
    {
      id: 'week6',
      week: 'Week 6',
      phase: 'Growth Acceleration',
      theme: 'User Engagement Focus',
      budget: 'AED 48,000',
      goals: ['Improve D7 retention to 25%', 'Launch referral program v1', 'Reach 30K social followers'],
      days: [
        {
          day: 'Sunday',
          tasks: [
            { task: 'Analyze retention cohorts from Week 1-4', owner: 'Data Analyst', priority: 'High', time: '9 AM' },
            { task: 'Finalize referral program mechanics', owner: 'Product + CMO', priority: 'High', time: '10 AM' },
            { task: 'Plan engagement push notification sequence', owner: 'Growth Lead', priority: 'High', time: '11 AM' },
            { task: 'Brief content team on referral launch', owner: 'CMO', priority: 'Medium', time: '2 PM' }
          ]
        },
        {
          day: 'Monday',
          tasks: [
            { task: 'Launch referral program', owner: 'Product', priority: 'Critical', time: '10 AM' },
            { task: 'Referral launch social media blitz', owner: 'Content Lead', priority: 'High', time: '11 AM' },
            { task: 'Email blast: Invite friends, earn rewards', owner: 'Content Lead', priority: 'High', time: '12 PM' },
            { task: 'Monitor referral tracking in real-time', owner: 'Data Analyst', priority: 'High', time: '2 PM' }
          ]
        },
        {
          day: 'Tuesday',
          tasks: [
            { task: 'Influencer posts about referral program', owner: 'Influencer Manager', priority: 'High', time: '10 AM' },
            { task: 'Optimize push notification timing', owner: 'Growth Lead', priority: 'Medium', time: '11 AM' },
            { task: 'Create referral leaderboard content', owner: 'Content Lead', priority: 'Medium', time: '2 PM' },
            { task: 'Merchant training: How to promote app', owner: 'Partnerships', priority: 'Medium', time: '3 PM' }
          ]
        },
        {
          day: 'Wednesday',
          tasks: [
            { task: 'Mid-week referral performance review', owner: 'CMO + Product', priority: 'High', time: '10 AM' },
            { task: 'CEO sync - referral launch results', owner: 'CMO', priority: 'High', time: '2 PM' },
            { task: 'Double down on top referrers outreach', owner: 'Community Manager', priority: 'Medium', time: '3 PM' },
            { task: 'Paid ads: Referral program creative', owner: 'Performance Lead', priority: 'High', time: '4 PM' }
          ]
        },
        {
          day: 'Thursday',
          tasks: [
            { task: 'User-generated content campaign launch', owner: 'Content Lead', priority: 'High', time: '10 AM' },
            { task: 'In-app message: Engagement nudges', owner: 'Product', priority: 'Medium', time: '11 AM' },
            { task: 'Review and optimize referral incentives', owner: 'CMO', priority: 'Medium', time: '2 PM' },
            { task: 'Prepare Week 6 report', owner: 'Data Analyst', priority: 'Medium', time: '4 PM' }
          ]
        },
        {
          day: 'Friday',
          tasks: [
            { task: 'Weekend referral bonus announcement', owner: 'Content Lead', priority: 'High', time: '10 AM' },
            { task: 'Celebrate top referrers publicly', owner: 'Community Manager', priority: 'Medium', time: '11 AM' },
            { task: 'Week 7 planning session', owner: 'CMO + Team', priority: 'High', time: '3 PM' },
            { task: 'Submit weekly report', owner: 'CMO', priority: 'High', time: '5 PM' }
          ]
        }
      ]
    },
    {
      id: 'week7',
      week: 'Week 7',
      phase: 'Growth Acceleration',
      theme: 'Merchant Expansion',
      budget: 'AED 50,000',
      goals: ['Onboard 15 new merchants', 'Launch 3 exclusive partnerships', 'Achieve 100K total downloads'],
      days: [
        {
          day: 'Sunday',
          tasks: [
            { task: 'Review merchant pipeline status', owner: 'Partnerships', priority: 'High', time: '9 AM' },
            { task: 'Prioritize high-value merchant targets', owner: 'CMO + Sales', priority: 'High', time: '10 AM' },
            { task: 'Create merchant case study from top performer', owner: 'Content Lead', priority: 'Medium', time: '11 AM' },
            { task: 'Plan merchant-focused content week', owner: 'Content Lead', priority: 'Medium', time: '2 PM' }
          ]
        },
        {
          day: 'Monday',
          tasks: [
            { task: 'Launch merchant spotlight series (social)', owner: 'Content Lead', priority: 'High', time: '10 AM' },
            { task: 'Exclusive partnership announcement prep', owner: 'CMO', priority: 'High', time: '11 AM' },
            { task: 'Merchant networking event planning', owner: 'Events Lead', priority: 'Medium', time: '2 PM' },
            { task: 'B2B advertising campaign launch', owner: 'Performance Lead', priority: 'Medium', time: '3 PM' }
          ]
        },
        {
          day: 'Tuesday',
          tasks: [
            { task: 'Major partnership announcement', owner: 'CMO + PR', priority: 'Critical', time: '10 AM' },
            { task: 'Press release distribution', owner: 'PR Lead', priority: 'High', time: '11 AM' },
            { task: 'Social amplification of partnership', owner: 'Content Lead', priority: 'High', time: '12 PM' },
            { task: 'Influencer partnership content', owner: 'Influencer Manager', priority: 'High', time: '2 PM' }
          ]
        },
        {
          day: 'Wednesday',
          tasks: [
            { task: 'Monitor partnership announcement impact', owner: 'Data Analyst', priority: 'High', time: '9 AM' },
            { task: 'CEO sync - partnership results', owner: 'CMO', priority: 'High', time: '2 PM' },
            { task: 'Merchant onboarding sprint (5 calls)', owner: 'Partnerships', priority: 'High', time: '10 AM' },
            { task: 'Plan merchant appreciation event', owner: 'Events Lead', priority: 'Medium', time: '4 PM' }
          ]
        },
        {
          day: 'Thursday',
          tasks: [
            { task: 'Second partnership announcement', owner: 'CMO + PR', priority: 'High', time: '10 AM' },
            { task: 'Merchant success webinar/training', owner: 'Partnerships', priority: 'Medium', time: '2 PM' },
            { task: 'Create merchant toolkit/marketing assets', owner: 'Creative Team', priority: 'Medium', time: '11 AM' },
            { task: 'Review 100K download milestone progress', owner: 'Data Analyst', priority: 'High', time: '4 PM' }
          ]
        },
        {
          day: 'Friday',
          tasks: [
            { task: '100K downloads celebration (if achieved)', owner: 'Content Lead', priority: 'High', time: '10 AM' },
            { task: 'User thank you campaign', owner: 'Community Manager', priority: 'Medium', time: '11 AM' },
            { task: 'Week 8 planning: Scale phase prep', owner: 'CMO + Team', priority: 'High', time: '3 PM' },
            { task: 'Month 2 comprehensive report', owner: 'CMO', priority: 'High', time: '5 PM' }
          ]
        }
      ]
    },
    {
      id: 'week8',
      week: 'Week 8',
      phase: 'Scale Phase Begins',
      theme: 'Optimization & Efficiency',
      budget: 'AED 55,000',
      goals: ['Reduce CAC by 15%', 'Improve ROAS to 4x', 'Launch loyalty tiers'],
      days: [
        {
          day: 'Sunday',
          tasks: [
            { task: 'Deep analysis: Top performing campaigns', owner: 'Data Analyst', priority: 'High', time: '9 AM' },
            { task: 'Identify underperforming spend to cut', owner: 'Performance Lead', priority: 'High', time: '10 AM' },
            { task: 'Loyalty tier system final review', owner: 'Product + CMO', priority: 'High', time: '11 AM' },
            { task: 'Team alignment on scale phase goals', owner: 'CMO', priority: 'High', time: '2 PM' }
          ]
        },
        {
          day: 'Monday',
          tasks: [
            { task: 'Reallocate budget to top channels', owner: 'Performance Lead', priority: 'High', time: '9 AM' },
            { task: 'Launch loyalty tier system', owner: 'Product', priority: 'Critical', time: '10 AM' },
            { task: 'Loyalty tier announcement content', owner: 'Content Lead', priority: 'High', time: '11 AM' },
            { task: 'Email: Loyalty tier explanation', owner: 'Content Lead', priority: 'High', time: '2 PM' }
          ]
        },
        {
          day: 'Tuesday',
          tasks: [
            { task: 'Influencer loyalty tier content', owner: 'Influencer Manager', priority: 'High', time: '10 AM' },
            { task: 'Optimize ad creative based on learnings', owner: 'Creative Team', priority: 'High', time: '11 AM' },
            { task: 'Launch retargeting campaigns', owner: 'Performance Lead', priority: 'High', time: '2 PM' },
            { task: 'Community: Loyalty tier Q&A', owner: 'Community Manager', priority: 'Medium', time: '3 PM' }
          ]
        },
        {
          day: 'Wednesday',
          tasks: [
            { task: 'CEO sync - Scale phase kickoff', owner: 'CMO', priority: 'High', time: '2 PM' },
            { task: 'CAC tracking dashboard update', owner: 'Data Analyst', priority: 'High', time: '10 AM' },
            { task: 'Test new audience segments', owner: 'Performance Lead', priority: 'Medium', time: '11 AM' },
            { task: 'Merchant loyalty tier promotion', owner: 'Partnerships', priority: 'Medium', time: '3 PM' }
          ]
        },
        {
          day: 'Thursday',
          tasks: [
            { task: 'Review loyalty tier adoption', owner: 'Product + CMO', priority: 'High', time: '10 AM' },
            { task: 'Launch lookalike audiences', owner: 'Performance Lead', priority: 'High', time: '11 AM' },
            { task: 'Content: User tier upgrade stories', owner: 'Content Lead', priority: 'Medium', time: '2 PM' },
            { task: 'Prepare efficiency report', owner: 'Data Analyst', priority: 'Medium', time: '4 PM' }
          ]
        },
        {
          day: 'Friday',
          tasks: [
            { task: 'CAC/ROAS progress review', owner: 'CMO', priority: 'High', time: '10 AM' },
            { task: 'Weekend tier upgrade promotion', owner: 'Content Lead', priority: 'Medium', time: '11 AM' },
            { task: 'Week 9 planning session', owner: 'CMO + Team', priority: 'High', time: '3 PM' },
            { task: 'Weekly report submission', owner: 'CMO', priority: 'High', time: '5 PM' }
          ]
        }
      ]
    },
    {
      id: 'week9',
      week: 'Week 9',
      phase: 'Scale Phase',
      theme: 'Geographic Expansion',
      budget: 'AED 60,000',
      goals: ['Expand to 3 new Dubai areas', 'Launch area-specific campaigns', 'Reach 40K active users'],
      days: [
        {
          day: 'Sunday',
          tasks: [
            { task: 'Analyze user distribution by area', owner: 'Data Analyst', priority: 'High', time: '9 AM' },
            { task: 'Identify 3 underserved areas to target', owner: 'CMO', priority: 'High', time: '10 AM' },
            { task: 'Create area-specific merchant lists', owner: 'Partnerships', priority: 'High', time: '11 AM' },
            { task: 'Plan hyper-local content strategy', owner: 'Content Lead', priority: 'Medium', time: '2 PM' }
          ]
        },
        {
          day: 'Monday',
          tasks: [
            { task: 'Launch JLT area campaign', owner: 'Performance Lead', priority: 'High', time: '10 AM' },
            { task: 'JLT merchant onboarding push', owner: 'Partnerships', priority: 'High', time: '11 AM' },
            { task: 'Local influencer activation (JLT)', owner: 'Influencer Manager', priority: 'Medium', time: '2 PM' },
            { task: 'Area-specific offer creation', owner: 'Product', priority: 'Medium', time: '3 PM' }
          ]
        },
        {
          day: 'Tuesday',
          tasks: [
            { task: 'Launch Business Bay campaign', owner: 'Performance Lead', priority: 'High', time: '10 AM' },
            { task: 'Business Bay merchant outreach', owner: 'Partnerships', priority: 'High', time: '11 AM' },
            { task: 'Corporate user targeting ads', owner: 'Performance Lead', priority: 'Medium', time: '2 PM' },
            { task: 'LinkedIn campaign for professionals', owner: 'Content Lead', priority: 'Medium', time: '3 PM' }
          ]
        },
        {
          day: 'Wednesday',
          tasks: [
            { task: 'CEO sync - Expansion progress', owner: 'CMO', priority: 'High', time: '2 PM' },
            { task: 'Launch Dubai Marina campaign', owner: 'Performance Lead', priority: 'High', time: '10 AM' },
            { task: 'Marina area activation event plan', owner: 'Events Lead', priority: 'Medium', time: '11 AM' },
            { task: 'Review area campaign performance', owner: 'Data Analyst', priority: 'High', time: '4 PM' }
          ]
        },
        {
          day: 'Thursday',
          tasks: [
            { task: 'Optimize area campaigns based on data', owner: 'Performance Lead', priority: 'High', time: '10 AM' },
            { task: 'Area-specific content production', owner: 'Content Lead', priority: 'Medium', time: '11 AM' },
            { task: 'Local community manager outreach', owner: 'Community Manager', priority: 'Medium', time: '2 PM' },
            { task: 'Plan neighborhood ambassador program', owner: 'CMO', priority: 'Medium', time: '4 PM' }
          ]
        },
        {
          day: 'Friday',
          tasks: [
            { task: 'Weekend area promotions live', owner: 'Content Lead', priority: 'High', time: '10 AM' },
            { task: 'Area expansion results review', owner: 'CMO', priority: 'High', time: '11 AM' },
            { task: 'Week 10 planning session', owner: 'CMO + Team', priority: 'High', time: '3 PM' },
            { task: 'Weekly report submission', owner: 'CMO', priority: 'High', time: '5 PM' }
          ]
        }
      ]
    },
    {
      id: 'week10',
      week: 'Week 10',
      phase: 'Scale Phase',
      theme: 'Power User Development',
      budget: 'AED 55,000',
      goals: ['Identify top 1000 power users', 'Launch VIP program', 'Increase transactions per user to 5'],
      days: [
        {
          day: 'Sunday',
          tasks: [
            { task: 'Segment users by transaction frequency', owner: 'Data Analyst', priority: 'High', time: '9 AM' },
            { task: 'Define power user criteria', owner: 'CMO + Product', priority: 'High', time: '10 AM' },
            { task: 'Design VIP program benefits', owner: 'Product', priority: 'High', time: '11 AM' },
            { task: 'Create power user outreach strategy', owner: 'Community Manager', priority: 'Medium', time: '2 PM' }
          ]
        },
        {
          day: 'Monday',
          tasks: [
            { task: 'Launch VIP program to top 100 users', owner: 'Product', priority: 'Critical', time: '10 AM' },
            { task: 'Personal outreach to top 50 users', owner: 'Community Manager', priority: 'High', time: '11 AM' },
            { task: 'VIP exclusive offer creation', owner: 'Partnerships', priority: 'High', time: '2 PM' },
            { task: 'VIP announcement content', owner: 'Content Lead', priority: 'Medium', time: '3 PM' }
          ]
        },
        {
          day: 'Tuesday',
          tasks: [
            { task: 'Expand VIP to top 500 users', owner: 'Product', priority: 'High', time: '10 AM' },
            { task: 'VIP user feedback collection', owner: 'Community Manager', priority: 'High', time: '11 AM' },
            { task: 'Create VIP content series', owner: 'Content Lead', priority: 'Medium', time: '2 PM' },
            { task: 'Exclusive VIP merchant deals', owner: 'Partnerships', priority: 'Medium', time: '3 PM' }
          ]
        },
        {
          day: 'Wednesday',
          tasks: [
            { task: 'CEO sync - VIP program launch', owner: 'CMO', priority: 'High', time: '2 PM' },
            { task: 'Analyze VIP adoption and engagement', owner: 'Data Analyst', priority: 'High', time: '10 AM' },
            { task: 'Power user interview sessions', owner: 'Product + CMO', priority: 'Medium', time: '11 AM' },
            { task: 'VIP referral bonus launch', owner: 'Growth Lead', priority: 'High', time: '4 PM' }
          ]
        },
        {
          day: 'Thursday',
          tasks: [
            { task: 'Full VIP rollout (top 1000)', owner: 'Product', priority: 'High', time: '10 AM' },
            { task: 'VIP badge and recognition system', owner: 'Product', priority: 'Medium', time: '11 AM' },
            { task: 'Power user testimonial collection', owner: 'Content Lead', priority: 'Medium', time: '2 PM' },
            { task: 'VIP WhatsApp community creation', owner: 'Community Manager', priority: 'Medium', time: '4 PM' }
          ]
        },
        {
          day: 'Friday',
          tasks: [
            { task: 'VIP weekend exclusive event', owner: 'Events Lead', priority: 'High', time: '10 AM' },
            { task: 'Celebrate power users publicly', owner: 'Content Lead', priority: 'Medium', time: '11 AM' },
            { task: 'Week 11 planning session', owner: 'CMO + Team', priority: 'High', time: '3 PM' },
            { task: 'Monthly comprehensive report', owner: 'CMO', priority: 'High', time: '5 PM' }
          ]
        }
      ]
    },
    {
      id: 'week11',
      week: 'Week 11',
      phase: 'Scale Phase',
      theme: 'Strategic Partnerships',
      budget: 'AED 60,000',
      goals: ['Launch 2 major brand partnerships', 'Secure 1 bank partnership', 'Media coverage in 5 outlets'],
      days: [
        {
          day: 'Sunday',
          tasks: [
            { task: 'Review partnership pipeline', owner: 'CMO', priority: 'High', time: '9 AM' },
            { task: 'Finalize terms with Brand Partner A', owner: 'CMO + Legal', priority: 'High', time: '10 AM' },
            { task: 'Bank partnership proposal review', owner: 'CEO + CMO', priority: 'High', time: '11 AM' },
            { task: 'Plan partnership announcement strategy', owner: 'PR Lead', priority: 'Medium', time: '2 PM' }
          ]
        },
        {
          day: 'Monday',
          tasks: [
            { task: 'Sign Brand Partner A agreement', owner: 'CEO + CMO', priority: 'Critical', time: '10 AM' },
            { task: 'Partnership announcement prep', owner: 'PR Lead', priority: 'High', time: '11 AM' },
            { task: 'Joint marketing campaign design', owner: 'Creative Team', priority: 'High', time: '2 PM' },
            { task: 'Media outreach for coverage', owner: 'PR Lead', priority: 'High', time: '3 PM' }
          ]
        },
        {
          day: 'Tuesday',
          tasks: [
            { task: 'Major partnership announcement', owner: 'CMO + PR', priority: 'Critical', time: '10 AM' },
            { task: 'Press conference / media event', owner: 'PR Lead', priority: 'High', time: '11 AM' },
            { task: 'Social media partnership content', owner: 'Content Lead', priority: 'High', time: '12 PM' },
            { task: 'Influencer partnership posts', owner: 'Influencer Manager', priority: 'High', time: '2 PM' }
          ]
        },
        {
          day: 'Wednesday',
          tasks: [
            { task: 'CEO sync - Partnership results', owner: 'CMO', priority: 'High', time: '2 PM' },
            { task: 'Bank partnership meeting', owner: 'CEO + CMO', priority: 'High', time: '10 AM' },
            { task: 'Monitor partnership announcement coverage', owner: 'PR Lead', priority: 'Medium', time: '11 AM' },
            { task: 'User campaign: Partnership exclusive offers', owner: 'Content Lead', priority: 'High', time: '4 PM' }
          ]
        },
        {
          day: 'Thursday',
          tasks: [
            { task: 'Brand Partner B announcement', owner: 'CMO + PR', priority: 'High', time: '10 AM' },
            { task: 'Co-branded content creation', owner: 'Creative Team', priority: 'Medium', time: '11 AM' },
            { task: 'Partnership performance tracking', owner: 'Data Analyst', priority: 'Medium', time: '2 PM' },
            { task: 'Media interview coordination', owner: 'PR Lead', priority: 'Medium', time: '4 PM' }
          ]
        },
        {
          day: 'Friday',
          tasks: [
            { task: 'Partnership week celebration content', owner: 'Content Lead', priority: 'Medium', time: '10 AM' },
            { task: 'Media coverage compilation', owner: 'PR Lead', priority: 'Medium', time: '11 AM' },
            { task: 'Week 12 planning session', owner: 'CMO + Team', priority: 'High', time: '3 PM' },
            { task: 'Weekly report submission', owner: 'CMO', priority: 'High', time: '5 PM' }
          ]
        }
      ]
    },
    {
      id: 'week12',
      week: 'Week 12',
      phase: 'Scale Phase',
      theme: 'Quarter 1 Wrap & Q2 Planning',
      budget: 'AED 50,000',
      goals: ['Complete Q1 targets', 'Comprehensive analysis', 'Q2 strategy finalization'],
      days: [
        {
          day: 'Sunday',
          tasks: [
            { task: 'Q1 full data analysis begin', owner: 'Data Analyst', priority: 'Critical', time: '9 AM' },
            { task: 'Review all KPI achievements', owner: 'CMO', priority: 'High', time: '10 AM' },
            { task: 'Team performance reviews prep', owner: 'CMO', priority: 'Medium', time: '11 AM' },
            { task: 'Q2 budget planning kickoff', owner: 'CMO + Finance', priority: 'High', time: '2 PM' }
          ]
        },
        {
          day: 'Monday',
          tasks: [
            { task: 'Q1 learnings documentation', owner: 'All Leads', priority: 'High', time: '10 AM' },
            { task: 'What worked / What didnt analysis', owner: 'CMO', priority: 'High', time: '11 AM' },
            { task: 'Q2 goals draft creation', owner: 'CMO', priority: 'High', time: '2 PM' },
            { task: 'Team 1:1s - feedback collection', owner: 'CMO', priority: 'Medium', time: '3 PM' }
          ]
        },
        {
          day: 'Tuesday',
          tasks: [
            { task: 'Q1 presentation creation', owner: 'CMO + Data', priority: 'High', time: '10 AM' },
            { task: 'Success stories compilation', owner: 'Content Lead', priority: 'Medium', time: '11 AM' },
            { task: 'Q2 campaign calendar draft', owner: 'CMO + Team', priority: 'High', time: '2 PM' },
            { task: 'Vendor/agency performance review', owner: 'CMO', priority: 'Medium', time: '4 PM' }
          ]
        },
        {
          day: 'Wednesday',
          tasks: [
            { task: 'CEO + Board Q1 presentation', owner: 'CMO', priority: 'Critical', time: '10 AM' },
            { task: 'Q2 budget approval discussion', owner: 'CMO + CEO + CFO', priority: 'High', time: '2 PM' },
            { task: 'Team celebration planning', owner: 'CMO', priority: 'Medium', time: '4 PM' },
            { task: 'Q2 hiring plan finalization', owner: 'CMO + HR', priority: 'Medium', time: '5 PM' }
          ]
        },
        {
          day: 'Thursday',
          tasks: [
            { task: 'Finalize Q2 strategy document', owner: 'CMO', priority: 'High', time: '10 AM' },
            { task: 'Team all-hands: Q1 results', owner: 'CMO', priority: 'High', time: '2 PM' },
            { task: 'Q2 goal setting with each lead', owner: 'CMO', priority: 'High', time: '3 PM' },
            { task: 'External stakeholder updates', owner: 'CMO', priority: 'Medium', time: '5 PM' }
          ]
        },
        {
          day: 'Friday',
          tasks: [
            { task: 'Q1 celebration / team event', owner: 'CMO + HR', priority: 'High', time: '12 PM' },
            { task: 'Recognize top performers', owner: 'CMO', priority: 'Medium', time: '1 PM' },
            { task: 'Final Q1 report submission', owner: 'CMO', priority: 'Critical', time: '3 PM' },
            { task: 'Q2 Week 1 prep and handoff', owner: 'CMO + Team', priority: 'High', time: '4 PM' }
          ]
        }
      ]
    }
  ];

  const milestones = [
    { week: 5, milestone: '75K total downloads', icon: Download, status: 'Target' },
    { week: 6, milestone: 'Referral program live', icon: Users, status: 'Target' },
    { week: 7, milestone: '100K downloads', icon: Award, status: 'Target' },
    { week: 8, milestone: 'Loyalty tiers launched', icon: Star, status: 'Target' },
    { week: 9, milestone: '3 area expansion', icon: Globe, status: 'Target' },
    { week: 10, milestone: 'VIP program active', icon: Heart, status: 'Target' },
    { week: 11, milestone: '2 major partnerships', icon: Zap, status: 'Target' },
    { week: 12, milestone: 'Q1 complete, Q2 ready', icon: Rocket, status: 'Target' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900">
      {/* Header */}
      <div className="bg-gray-900/80 border-b border-indigo-500/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-indigo-600 rounded-lg">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">Week 5-12 Execution Plan</h1>
          </div>
          <p className="text-indigo-300 ml-14">
            Daily tasks, responsibilities & milestone targets for Growth & Scale phases
          </p>
        </div>
      </div>

      {/* Milestone Timeline */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-gray-800/40 rounded-2xl border border-indigo-500/20 p-6 mb-6">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-indigo-400" />
            Key Milestones (Weeks 5-12)
          </h2>
          <div className="flex overflow-x-auto gap-4 pb-2">
            {milestones.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div key={idx} className="flex-shrink-0 bg-gray-900/50 rounded-lg p-4 border border-indigo-500/30 min-w-[140px]">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-5 h-5 text-indigo-400" />
                    <span className="text-indigo-400 font-medium">Week {m.week}</span>
                  </div>
                  <p className="text-white text-sm">{m.milestone}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Budget Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-800/60 rounded-xl p-4 border border-green-500/30">
            <span className="text-green-400 text-sm">Weeks 5-8</span>
            <p className="text-2xl font-bold text-white">AED 198K</p>
            <p className="text-gray-400 text-xs">Growth Phase</p>
          </div>
          <div className="bg-gray-800/60 rounded-xl p-4 border border-blue-500/30">
            <span className="text-blue-400 text-sm">Weeks 9-12</span>
            <p className="text-2xl font-bold text-white">AED 225K</p>
            <p className="text-gray-400 text-xs">Scale Phase</p>
          </div>
          <div className="bg-gray-800/60 rounded-xl p-4 border border-purple-500/30">
            <span className="text-purple-400 text-sm">Total 8 Weeks</span>
            <p className="text-2xl font-bold text-white">AED 423K</p>
            <p className="text-gray-400 text-xs">Full period</p>
          </div>
          <div className="bg-gray-800/60 rounded-xl p-4 border border-orange-500/30">
            <span className="text-orange-400 text-sm">Avg Weekly</span>
            <p className="text-2xl font-bold text-white">AED 52.9K</p>
            <p className="text-gray-400 text-xs">Per week</p>
          </div>
        </div>

        {/* Weekly Plans */}
        <div className="space-y-4">
          {weeklyPlans.map((week) => (
            <div key={week.id} className="bg-gray-800/40 rounded-2xl border border-indigo-500/20 overflow-hidden">
              <button
                onClick={() => setExpandedWeek(expandedWeek === week.id ? null : week.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-800/60 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-400">{week.week}</div>
                    <div className="text-xs text-gray-400">{week.budget}</div>
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-semibold">{week.theme}</h3>
                      <span className="text-xs bg-indigo-600/30 text-indigo-300 px-2 py-0.5 rounded">{week.phase}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {week.goals.map((goal, gidx) => (
                        <span key={gidx} className="text-gray-400 text-sm">• {goal}</span>
                      ))}
                    </div>
                  </div>
                </div>
                {expandedWeek === week.id ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
              </button>

              {expandedWeek === week.id && (
                <div className="p-6 pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {week.days.map((day, didx) => (
                      <div key={didx} className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                        <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-indigo-400" />
                          {day.day}
                        </h4>
                        <ul className="space-y-2">
                          {day.tasks.map((task, tidx) => (
                            <li key={tidx} className="text-sm">
                              <div className="flex items-start gap-2">
                                <span className={`px-1.5 py-0.5 rounded text-xs ${
                                  task.priority === 'Critical' ? 'bg-red-600 text-white' :
                                  task.priority === 'High' ? 'bg-orange-600 text-white' :
                                  'bg-gray-600 text-gray-200'
                                }`}>
                                  {task.time}
                                </span>
                                <div className="flex-1">
                                  <p className="text-gray-300">{task.task}</p>
                                  <p className="text-gray-500 text-xs">{task.owner}</p>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={() => {
                        const content = week.days.map(d =>
                          `${d.day}:\n${d.tasks.map(t => `  ${t.time} - ${t.task} (${t.owner})`).join('\n')}`
                        ).join('\n\n');
                        copyToClipboard(`${week.week} - ${week.theme}\n\n${content}`, week.id);
                      }}
                      className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      {copiedItem === week.id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      {copiedItem === week.id ? 'Copied!' : 'Copy Week Plan'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <div className="mt-8 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl border border-indigo-500/30 p-6">
          <h3 className="text-xl font-bold text-white mb-4">📊 8-Week Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-green-400 font-medium mb-2">Download Target</h4>
              <p className="text-2xl font-bold text-white">150K+</p>
              <p className="text-gray-400 text-sm">By end of Week 12</p>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-blue-400 font-medium mb-2">Active Users</h4>
              <p className="text-2xl font-bold text-white">50K+</p>
              <p className="text-gray-400 text-sm">Monthly active</p>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-purple-400 font-medium mb-2">Merchant Partners</h4>
              <p className="text-2xl font-bold text-white">200+</p>
              <p className="text-gray-400 text-sm">Active merchants</p>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-orange-400 font-medium mb-2">Total Investment</h4>
              <p className="text-2xl font-bold text-white">AED 423K</p>
              <p className="text-gray-400 text-sm">Marketing spend</p>
            </div>
          </div>
        </div>
      </div>

      <GlobalFooter />
    </div>
  );
}
