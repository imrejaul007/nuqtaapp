'use client';

import React, { useState } from 'react';
import {
  AlertTriangle, Shield, Phone, Clock, Users, MessageCircle,
  FileText, CheckCircle, XCircle, AlertCircle, Zap, Eye,
  Radio, Mail, Smartphone, Globe, Copy, Check, ChevronDown, ChevronUp, Bell
} from 'lucide-react';
import GlobalFooter from '@/components/GlobalFooter';

interface CrisisScenario {
  id: string;
  title: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  description: string;
  examples: string[];
  immediateActions: string[];
  communicationPlan: {
    internal: string;
    users: string;
    media: string;
    regulators?: string;
  };
  sampleMessages: {
    channel: string;
    message: string;
  }[];
  recoverySteps: string[];
  preventionMeasures: string[];
}

export default function CrisisCommunicationPage() {
  const [expandedScenario, setExpandedScenario] = useState<string | null>('data-breach');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<'scenarios' | 'framework' | 'contacts' | 'templates'>('scenarios');

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const crisisScenarios: CrisisScenario[] = [
    {
      id: 'data-breach',
      title: 'Data Breach / Security Incident',
      severity: 'critical',
      description: 'Unauthorized access to user data, payment information, or personal details has been detected.',
      examples: [
        'Hacker accessed user database',
        'Employee leaked customer data',
        'Third-party vendor breach affecting our users',
        'Malware/ransomware attack on systems'
      ],
      immediateActions: [
        'Isolate affected systems immediately',
        'Engage cybersecurity response team',
        'Document timeline of events',
        'Assess scope of data compromised',
        'Notify legal and compliance teams',
        'Prepare regulatory notifications (UAE PDPL)'
      ],
      communicationPlan: {
        internal: 'All-hands alert within 1 hour. Crisis team assembled. All external comms paused pending review.',
        users: 'Direct notification to affected users within 72 hours (or as required by law). Clear explanation of what happened, what data was affected, and what we\'re doing.',
        media: 'Prepared statement only. No speculation. Direct media to official statement. CEO available for critical outlets only.',
        regulators: 'Notify UAE data protection authorities within required timeframe. Full cooperation with investigation.'
      },
      sampleMessages: [
        {
          channel: 'Email to Affected Users',
          message: `Subject: Important Security Notice from Nuqta

Dear [Name],

We're writing to inform you of a security incident that may have affected your Nuqta account.

What happened:
On [date], we detected unauthorized access to some of our systems. We immediately took action to secure our systems and launched an investigation.

What information was involved:
Based on our investigation, the following information may have been accessed: [specific data types].

What we're doing:
• We've secured all affected systems
• We've engaged leading cybersecurity experts
• We've notified relevant authorities
• We're enhancing our security measures

What you can do:
• Change your Nuqta password
• Monitor your accounts for unusual activity
• Enable two-factor authentication if you haven't already

We're deeply sorry this happened. Your trust is our priority, and we're committed to making this right.

If you have questions, contact our dedicated support line: [number]

Sincerely,
Rejaul Karim
CEO, Nuqta`
        },
        {
          channel: 'In-App Notification',
          message: 'Important: Please update your password. We detected a security issue and have secured your account. Tap here for details and next steps.'
        },
        {
          channel: 'Social Media Statement',
          message: 'We detected a security incident affecting some user data. We\'ve secured our systems and are contacting affected users directly. Your security is our priority. Updates: [link]'
        }
      ],
      recoverySteps: [
        'Complete forensic investigation',
        'Implement additional security measures',
        'Offer affected users credit monitoring (if applicable)',
        'Publish transparency report',
        'Conduct third-party security audit',
        'Update security policies and training'
      ],
      preventionMeasures: [
        'Regular security audits and penetration testing',
        'Employee security awareness training',
        'Multi-factor authentication enforcement',
        'Data encryption at rest and in transit',
        'Vendor security assessments',
        'Incident response drills'
      ]
    },
    {
      id: 'app-outage',
      title: 'Major App Outage',
      severity: 'high',
      description: 'App is down or severely degraded, preventing users from scanning receipts, viewing points, or redeeming rewards.',
      examples: [
        'Complete app unavailability',
        'Payment processing failure',
        'Receipt scanning not working',
        'Points not crediting to accounts',
        'Database connectivity issues'
      ],
      immediateActions: [
        'Activate engineering incident response',
        'Assess scope and impact',
        'Begin technical troubleshooting',
        'Update status page immediately',
        'Prepare customer communications',
        'Establish ETA for resolution if possible'
      ],
      communicationPlan: {
        internal: 'Engineering war room established. Hourly updates to leadership. Customer support briefed with talking points.',
        users: 'Immediate acknowledgment on all channels. Regular updates every 30-60 minutes. Clear when resolved.',
        media: 'Brief statement if asked. Focus on resolution efforts. No detailed technical explanations.'
      },
      sampleMessages: [
        {
          channel: 'Status Page',
          message: `🔴 Current Status: Service Disruption

We're aware that Nuqta is currently experiencing issues. Our team is actively working to resolve this.

Impact: Users may be unable to scan receipts or access their points.

Started: [time]
Last update: [time]

We'll update this page every 30 minutes until resolved. We apologize for the inconvenience.`
        },
        {
          channel: 'Push Notification',
          message: '⚠️ We\'re having technical difficulties. Receipt scanning is temporarily unavailable. Your points are safe. We\'re working to fix this ASAP.'
        },
        {
          channel: 'Twitter/X',
          message: 'We\'re aware Nuqta is currently down and are working urgently to fix it. Your points are safe. We\'ll update you as soon as we\'re back online. Sorry for the trouble! 🔧'
        },
        {
          channel: 'Resolution Announcement',
          message: '✅ We\'re back! Nuqta is fully operational. Thank you for your patience. As a thank you, everyone gets 2x points for the rest of today!'
        }
      ],
      recoverySteps: [
        'Confirm all systems operational',
        'Process any queued transactions',
        'Credit users for any lost points/opportunities',
        'Conduct post-mortem analysis',
        'Implement fixes to prevent recurrence',
        'Consider goodwill gesture (bonus points, etc.)'
      ],
      preventionMeasures: [
        'Redundant infrastructure',
        'Load testing and capacity planning',
        'Automated monitoring and alerting',
        'Disaster recovery procedures',
        'Regular failover testing'
      ]
    },
    {
      id: 'merchant-fraud',
      title: 'Merchant Fraud / Abuse',
      severity: 'high',
      description: 'A merchant partner is discovered to be committing fraud or abusing the rewards system.',
      examples: [
        'Fake receipt generation',
        'Point manipulation scheme',
        'Unauthorized reward redemptions',
        'Money laundering through rewards'
      ],
      immediateActions: [
        'Freeze merchant account immediately',
        'Preserve all transaction records',
        'Assess financial exposure',
        'Notify legal and fraud teams',
        'Identify affected users',
        'Consider law enforcement notification'
      ],
      communicationPlan: {
        internal: 'Need-to-know basis initially. Fraud team leads investigation. Legal counsel engaged.',
        users: 'Only notify if user benefits were affected. General communication about "system improvements" if widespread.',
        media: 'No proactive communication. Prepared holding statement only if media inquires.',
        regulators: 'Report to relevant financial authorities if required.'
      },
      sampleMessages: [
        {
          channel: 'Email to Affected Users',
          message: `Subject: Update About Your Nuqta Points

Hi [Name],

We recently identified some irregular activity at a merchant location where you earned points. Don't worry—your points are safe.

As part of our commitment to fairness, we've reviewed your account and confirmed all your legitimate points remain intact.

If you notice any discrepancies, please contact us at [support email].

Thank you for being a valued Nuqta member.

Best,
The Nuqta Team`
        },
        {
          channel: 'Merchant Termination Notice',
          message: 'Due to violations of our merchant agreement, your Nuqta partnership has been terminated effective immediately. All pending payments are under review. Contact legal@nuqta.com for inquiries.'
        }
      ],
      recoverySteps: [
        'Complete fraud investigation',
        'Recover any financial losses',
        'Make affected users whole',
        'Review and strengthen merchant vetting',
        'Enhance fraud detection systems',
        'Consider legal action if warranted'
      ],
      preventionMeasures: [
        'Robust merchant vetting process',
        'Transaction monitoring and anomaly detection',
        'Regular merchant audits',
        'Clear terms of service with consequences',
        'Fraud detection algorithms'
      ]
    },
    {
      id: 'negative-publicity',
      title: 'Negative Publicity / Social Media Crisis',
      severity: 'medium',
      description: 'Viral negative content, influencer complaint, or media story damaging brand reputation.',
      examples: [
        'Viral complaint about poor service',
        'Influencer posting negative experience',
        'News story about company practices',
        'Employee misconduct going public',
        'Competitor attack campaign'
      ],
      immediateActions: [
        'Monitor and assess the situation',
        'Gather facts before responding',
        'Prepare response options',
        'Brief leadership and relevant teams',
        'Engage with individual if appropriate',
        'Do not delete or hide legitimate complaints'
      ],
      communicationPlan: {
        internal: 'Brief PR and leadership. Prepare talking points. Customer service ready with responses.',
        users: 'Address directly if individual complaint. Public response only if widespread.',
        media: 'Prepared statement. Offer interview if story is significant and facts favor us.'
      },
      sampleMessages: [
        {
          channel: 'Response to Viral Complaint',
          message: 'Hi [Name], we\'re really sorry about your experience. This isn\'t the Nuqta standard we strive for. We\'d love to make this right—please DM us your details and we\'ll personally follow up within the hour.'
        },
        {
          channel: 'Public Statement (if needed)',
          message: 'We\'ve seen the feedback and we hear you. We take every concern seriously and are looking into this matter. We\'re committed to making Nuqta better for everyone. Updates to follow.'
        },
        {
          channel: 'Follow-up After Resolution',
          message: 'Update: We\'ve reached out to [user] and resolved their concern. We appreciate the feedback—it helps us improve. Thank you all for holding us accountable. 💙'
        }
      ],
      recoverySteps: [
        'Resolve the individual issue',
        'Analyze root cause',
        'Address systemic issues if any',
        'Monitor sentiment recovery',
        'Consider positive campaign to rebuild trust',
        'Document learnings for future'
      ],
      preventionMeasures: [
        'Proactive social listening',
        'Strong customer service culture',
        'Regular sentiment analysis',
        'Influencer relationship management',
        'Employee social media guidelines'
      ]
    },
    {
      id: 'points-error',
      title: 'Mass Points Error',
      severity: 'medium',
      description: 'Technical error causing incorrect points distribution—either too many or too few points credited.',
      examples: [
        'Double-crediting points to all users',
        'Points not crediting for 24+ hours',
        'Wrong multiplier applied to transactions',
        'Point balance showing incorrectly'
      ],
      immediateActions: [
        'Identify scope of the error',
        'Stop the bleeding (pause affected systems)',
        'Calculate financial impact',
        'Develop correction plan',
        'Prepare user communications'
      ],
      communicationPlan: {
        internal: 'Engineering and finance aligned on correction approach. Customer service briefed.',
        users: 'Transparent communication about the error. Clear explanation of correction plan.',
        media: 'Generally not newsworthy unless very large scale.'
      },
      sampleMessages: [
        {
          channel: 'Email - Points Overcredited',
          message: `Subject: A Quick Update About Your Points

Hi [Name],

We made a mistake. Due to a technical error, some bonus points were credited to accounts incorrectly—including yours.

Here's what happened: [brief explanation]

What we're doing: We'll be adjusting account balances to correct this over the next 48 hours. If you\'ve already redeemed any of these points, don't worry—we won't take anything back.

As a thank you for your understanding, we're adding 100 bonus points to your account.

Sorry for any confusion, and thank you for being part of Nuqta.

The Nuqta Team`
        },
        {
          channel: 'Email - Points Undercredited',
          message: `Subject: Your Missing Points Are On The Way! 🎉

Hi [Name],

We owe you some points! Due to a technical hiccup, some of your recent transactions didn't earn points correctly.

Good news: We've identified all affected transactions and will credit the missing points to your account within 24 hours.

Plus, we're adding an extra 50 bonus points as an apology for the inconvenience.

Thank you for your patience!

The Nuqta Team`
        }
      ],
      recoverySteps: [
        'Execute correction plan',
        'Verify all accounts corrected properly',
        'Consider goodwill gesture',
        'Root cause analysis',
        'Implement safeguards against recurrence'
      ],
      preventionMeasures: [
        'Transaction validation rules',
        'Automated anomaly detection',
        'Staging environment testing',
        'Rollback procedures',
        'Regular reconciliation checks'
      ]
    },
    {
      id: 'legal-regulatory',
      title: 'Legal / Regulatory Issue',
      severity: 'high',
      description: 'Legal action, regulatory inquiry, or compliance issue requiring formal response.',
      examples: [
        'Consumer protection complaint',
        'Regulatory inquiry about practices',
        'Lawsuit from user or partner',
        'Intellectual property dispute'
      ],
      immediateActions: [
        'Engage legal counsel immediately',
        'Preserve all relevant documents',
        'Brief leadership',
        'Do not communicate externally without legal approval',
        'Assess business impact'
      ],
      communicationPlan: {
        internal: 'Legal leads all communications. Strict need-to-know basis.',
        users: 'Only if legally required or strategically necessary. All messaging approved by legal.',
        media: 'No comment or brief holding statement only. All through legal/PR.',
        regulators: 'Full cooperation. All communications through legal counsel.'
      },
      sampleMessages: [
        {
          channel: 'Media Holding Statement',
          message: 'We are aware of [the matter] and are cooperating fully with [authorities/reviewing the claims]. We take our legal and regulatory obligations seriously. We have no further comment at this time.'
        },
        {
          channel: 'Internal Communication',
          message: 'Team, you may have heard about [situation]. Our legal team is handling this matter. Please direct all inquiries to [legal contact]. Do not discuss this with external parties, including on personal social media. Thank you for your professionalism.'
        }
      ],
      recoverySteps: [
        'Follow legal process to resolution',
        'Implement any required changes',
        'Consider public statement if vindicated',
        'Review and update compliance programs',
        'Document learnings'
      ],
      preventionMeasures: [
        'Regular compliance audits',
        'Legal review of new features/campaigns',
        'Clear terms of service',
        'Proper business licensing',
        'Regulatory relationship management'
      ]
    }
  ];

  const crisisTeam = [
    { role: 'Crisis Lead', name: 'Rejaul Karim', contact: 'CEO', backup: 'Gyandeep Bordoloi (COO)', responsibilities: 'Final decision authority, external spokesperson, regulatory liaison' },
    { role: 'Communications Lead', name: 'Sarbajit Bhatacharjee', contact: 'CMO', backup: 'PR Manager', responsibilities: 'All external communications, media relations, social media' },
    { role: 'Technical Lead', name: 'Deep Tednu Kuri', contact: 'CTO', backup: 'Senior Engineer', responsibilities: 'Technical investigation, system recovery, root cause analysis' },
    { role: 'Legal Lead', name: 'External Counsel', contact: 'Legal', backup: 'Law Firm on Retainer', responsibilities: 'Legal advice, regulatory compliance, documentation' },
    { role: 'Customer Success Lead', name: 'CS Lead', contact: 'Support', backup: 'Senior CS Manager', responsibilities: 'User communications, support team coordination, individual escalations' },
    { role: 'Finance Lead', name: 'Finance Officer', contact: 'Finance', backup: 'Finance Director', responsibilities: 'Financial impact assessment, insurance claims, vendor payments' }
  ];

  const severityColors = {
    critical: 'bg-red-500',
    high: 'bg-orange-500',
    medium: 'bg-yellow-500',
    low: 'bg-blue-500'
  };

  const severityBorders = {
    critical: 'border-red-500/50',
    high: 'border-orange-500/50',
    medium: 'border-yellow-500/50',
    low: 'border-blue-500/50'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-10 h-10" />
            <h1 className="text-4xl font-bold">Crisis Communication Plan</h1>
          </div>
          <p className="text-xl text-red-100 max-w-3xl">
            Comprehensive playbook for handling crises, including response procedures, communication templates, and escalation protocols.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'scenarios', label: 'Crisis Scenarios', icon: <AlertCircle className="w-4 h-4" /> },
            { id: 'framework', label: 'Response Framework', icon: <Shield className="w-4 h-4" /> },
            { id: 'contacts', label: 'Crisis Team', icon: <Users className="w-4 h-4" /> },
            { id: 'templates', label: 'Templates', icon: <FileText className="w-4 h-4" /> }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id as typeof activeSection)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                activeSection === tab.id
                  ? 'bg-red-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Crisis Scenarios Section */}
        {activeSection === 'scenarios' && (
          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-4">Severity Levels</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-red-500"></div>
                  <div>
                    <p className="text-white font-medium">Critical</p>
                    <p className="text-slate-400 text-sm">Immediate executive response</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                  <div>
                    <p className="text-white font-medium">High</p>
                    <p className="text-slate-400 text-sm">Same-day response required</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                  <div>
                    <p className="text-white font-medium">Medium</p>
                    <p className="text-slate-400 text-sm">24-48 hour response</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  <div>
                    <p className="text-white font-medium">Low</p>
                    <p className="text-slate-400 text-sm">Standard process handling</p>
                  </div>
                </div>
              </div>
            </div>

            {crisisScenarios.map(scenario => (
              <div
                key={scenario.id}
                className={`bg-slate-800/50 rounded-xl border ${severityBorders[scenario.severity]} overflow-hidden`}
              >
                <button
                  onClick={() => setExpandedScenario(expandedScenario === scenario.id ? null : scenario.id)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${severityColors[scenario.severity]}`}></div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{scenario.title}</h3>
                      <p className="text-slate-400">{scenario.description}</p>
                    </div>
                  </div>
                  {expandedScenario === scenario.id ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>

                {expandedScenario === scenario.id && (
                  <div className="border-t border-slate-700 p-6 space-y-6">
                    {/* Examples */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Examples</h4>
                      <div className="flex flex-wrap gap-2">
                        {scenario.examples.map((example, idx) => (
                          <span key={idx} className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Immediate Actions */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-yellow-400" />
                        Immediate Actions
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {scenario.immediateActions.map((action, idx) => (
                          <div key={idx} className="flex items-start gap-2 bg-slate-700/50 rounded-lg p-3">
                            <span className="bg-yellow-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                              {idx + 1}
                            </span>
                            <span className="text-slate-300 text-sm">{action}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Communication Plan */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <MessageCircle className="w-5 h-5 text-blue-400" />
                        Communication Plan
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-700/50 rounded-lg p-4">
                          <p className="text-blue-400 font-medium mb-2">Internal</p>
                          <p className="text-slate-300 text-sm">{scenario.communicationPlan.internal}</p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                          <p className="text-green-400 font-medium mb-2">Users</p>
                          <p className="text-slate-300 text-sm">{scenario.communicationPlan.users}</p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                          <p className="text-purple-400 font-medium mb-2">Media</p>
                          <p className="text-slate-300 text-sm">{scenario.communicationPlan.media}</p>
                        </div>
                        {scenario.communicationPlan.regulators && (
                          <div className="bg-slate-700/50 rounded-lg p-4">
                            <p className="text-orange-400 font-medium mb-2">Regulators</p>
                            <p className="text-slate-300 text-sm">{scenario.communicationPlan.regulators}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Sample Messages */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <Mail className="w-5 h-5 text-pink-400" />
                        Sample Messages
                      </h4>
                      <div className="space-y-4">
                        {scenario.sampleMessages.map((msg, idx) => (
                          <div key={idx} className="bg-slate-700/50 rounded-lg p-4 relative group">
                            <p className="text-pink-400 font-medium mb-2">{msg.channel}</p>
                            <pre className="text-slate-300 text-sm whitespace-pre-wrap font-sans">{msg.message}</pre>
                            <button
                              onClick={() => copyToClipboard(msg.message, `${scenario.id}-msg-${idx}`)}
                              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                            >
                              {copiedId === `${scenario.id}-msg-${idx}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recovery & Prevention */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          Recovery Steps
                        </h4>
                        <ul className="space-y-2">
                          {scenario.recoverySteps.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                              <span className="text-green-400">✓</span>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <Shield className="w-5 h-5 text-cyan-400" />
                          Prevention Measures
                        </h4>
                        <ul className="space-y-2">
                          {scenario.preventionMeasures.map((measure, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                              <span className="text-cyan-400">•</span>
                              {measure}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Response Framework Section */}
        {activeSection === 'framework' && (
          <div className="space-y-8">
            <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Crisis Response Framework</h2>

              <div className="space-y-6">
                {[
                  {
                    phase: 'Phase 1: Detection & Assessment',
                    time: '0-30 minutes',
                    color: 'from-red-500 to-orange-500',
                    steps: [
                      'Identify the crisis and gather initial facts',
                      'Assess severity level (Critical/High/Medium/Low)',
                      'Alert Crisis Lead and relevant team members',
                      'Begin documentation of timeline',
                      'Pause any scheduled external communications'
                    ]
                  },
                  {
                    phase: 'Phase 2: Containment',
                    time: '30 mins - 2 hours',
                    color: 'from-orange-500 to-yellow-500',
                    steps: [
                      'Assemble crisis team (virtual or in-person)',
                      'Take immediate actions to limit damage',
                      'Gather complete information',
                      'Develop response strategy and messaging',
                      'Brief customer support team'
                    ]
                  },
                  {
                    phase: 'Phase 3: Communication',
                    time: '2-4 hours',
                    color: 'from-yellow-500 to-green-500',
                    steps: [
                      'Approve all external messaging',
                      'Notify affected stakeholders',
                      'Update status page and social channels',
                      'Prepare for media inquiries',
                      'Monitor social media and news'
                    ]
                  },
                  {
                    phase: 'Phase 4: Resolution',
                    time: '4 hours - ongoing',
                    color: 'from-green-500 to-teal-500',
                    steps: [
                      'Implement technical/operational fixes',
                      'Verify resolution is complete',
                      'Send resolution communications',
                      'Plan goodwill gestures if appropriate',
                      'Document all actions taken'
                    ]
                  },
                  {
                    phase: 'Phase 5: Recovery & Learning',
                    time: '24-72 hours post-resolution',
                    color: 'from-teal-500 to-blue-500',
                    steps: [
                      'Conduct post-mortem analysis',
                      'Identify root causes and lessons learned',
                      'Implement preventive measures',
                      'Update crisis playbook',
                      'Debrief all involved teams'
                    ]
                  }
                ].map((phase, idx) => (
                  <div key={idx} className="relative">
                    <div className={`bg-gradient-to-r ${phase.color} p-0.5 rounded-xl`}>
                      <div className="bg-slate-800 rounded-xl p-6">
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <h3 className="text-lg font-bold text-white">{phase.phase}</h3>
                          <span className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {phase.time}
                          </span>
                        </div>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {phase.steps.map((step, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-2 text-slate-300 text-sm">
                              <CheckCircle className="w-4 h-4 text-white/50 mt-0.5 flex-shrink-0" />
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Communication Channels */}
            <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Communication Channels Priority</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { channel: 'Status Page', icon: <Globe className="w-5 h-5" />, priority: 1, use: 'Technical incidents, outages' },
                  { channel: 'In-App Banner', icon: <Smartphone className="w-5 h-5" />, priority: 2, use: 'Active users, urgent notices' },
                  { channel: 'Push Notification', icon: <Bell className="w-5 h-5" />, priority: 3, use: 'Critical updates to all users' },
                  { channel: 'Email', icon: <Mail className="w-5 h-5" />, priority: 4, use: 'Detailed explanations, affected users' },
                  { channel: 'Social Media', icon: <Radio className="w-5 h-5" />, priority: 5, use: 'Public acknowledgment, updates' },
                  { channel: 'Press Release', icon: <FileText className="w-5 h-5" />, priority: 6, use: 'Major incidents, formal statements' }
                ].map((channel, idx) => (
                  <div key={idx} className="bg-slate-700/50 rounded-lg p-4 flex items-start gap-4">
                    <div className="bg-slate-600 p-2 rounded-lg text-slate-300">
                      {channel.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-orange-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                          {channel.priority}
                        </span>
                        <p className="text-white font-medium">{channel.channel}</p>
                      </div>
                      <p className="text-slate-400 text-sm">{channel.use}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Crisis Team Section */}
        {activeSection === 'contacts' && (
          <div className="space-y-8">
            <div className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
              <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 p-6 border-b border-slate-700">
                <h2 className="text-2xl font-bold text-white">Crisis Response Team</h2>
                <p className="text-slate-300">Key contacts for crisis situations</p>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Role</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Primary</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Contact</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Backup</th>
                        <th className="text-left py-3 px-4 text-slate-400 font-medium">Responsibilities</th>
                      </tr>
                    </thead>
                    <tbody>
                      {crisisTeam.map((member, idx) => (
                        <tr key={idx} className="border-b border-slate-700/50">
                          <td className="py-4 px-4">
                            <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm font-medium">
                              {member.role}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-white">{member.name}</td>
                          <td className="py-4 px-4 text-slate-300 font-mono text-sm">{member.contact}</td>
                          <td className="py-4 px-4 text-slate-400">{member.backup}</td>
                          <td className="py-4 px-4 text-slate-300 text-sm">{member.responsibilities}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* External Contacts */}
            <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">External Contacts</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { type: 'Legal Counsel', name: '[Law Firm Name]', contact: '+971-XX-XXX-XXXX' },
                  { type: 'PR Agency', name: '[Agency Name]', contact: '+971-XX-XXX-XXXX' },
                  { type: 'Cybersecurity Firm', name: '[Security Partner]', contact: '+971-XX-XXX-XXXX' },
                  { type: 'Insurance Provider', name: '[Insurance Company]', contact: '+971-XX-XXX-XXXX' },
                  { type: 'UAE Data Protection', name: 'TDRA', contact: 'compliance@tdra.gov.ae' },
                  { type: 'Dubai Police', name: 'Cybercrime Unit', contact: '901' }
                ].map((contact, idx) => (
                  <div key={idx} className="bg-slate-700/50 rounded-lg p-4">
                    <p className="text-slate-400 text-sm mb-1">{contact.type}</p>
                    <p className="text-white font-medium">{contact.name}</p>
                    <p className="text-slate-300 text-sm font-mono">{contact.contact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Templates Section */}
        {activeSection === 'templates' && (
          <div className="space-y-6">
            {[
              {
                title: 'Initial Acknowledgment (Social Media)',
                template: 'We\'re aware of [issue] affecting [scope]. Our team is investigating and we\'ll share updates as we have them. Thank you for your patience.'
              },
              {
                title: 'Status Update Template',
                template: 'Update on [issue]: [What we know now]. [What we\'re doing]. Next update in [timeframe]. We appreciate your patience.'
              },
              {
                title: 'Resolution Announcement',
                template: '[Issue] has been resolved as of [time]. [Brief explanation of what happened]. [Any follow-up actions for users]. Thank you for bearing with us.'
              },
              {
                title: 'Apology Statement',
                template: 'We\'re sorry. [What happened] fell short of the experience you deserve. Here\'s what we\'re doing to make it right: [actions]. Thank you for your understanding.'
              },
              {
                title: 'No Comment Statement',
                template: 'We\'re aware of [the matter] and are reviewing it carefully. We have no further comment at this time.'
              },
              {
                title: 'Media Inquiry Response',
                template: 'Thank you for reaching out. [Prepared statement]. For further inquiries, please contact [PR contact]. We\'ll provide updates as they become available.'
              }
            ].map((template, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-xl border border-slate-700 p-6 relative group">
                <h3 className="text-lg font-semibold text-white mb-3">{template.title}</h3>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <p className="text-slate-300">{template.template}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(template.template, `template-${idx}`)}
                  className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                >
                  {copiedId === `template-${idx}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    <GlobalFooter />
    </div>
  );
}
