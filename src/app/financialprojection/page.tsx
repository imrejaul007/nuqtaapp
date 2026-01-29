'use client';

import { useEffect, useState } from 'react';

export default function FinancialProjection() {
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    // Initialize calculations on mount
    if (typeof window !== 'undefined') {
      recalculateAll();
    }
  }, []);

  const showTab = (tabName: string) => {
    setActiveTab(tabName);

    // Send message to iframe to switch tabs
    const iframe = document.getElementById('financial-model-iframe') as HTMLIFrameElement;
    if (iframe && iframe.contentWindow) {
      console.log('Sending showSheet message for:', tabName);

      // Try direct access first (same origin)
      try {
        const iframeWindow = iframe.contentWindow as any;
        if (iframeWindow && iframeWindow.showSheet) {
          console.log('Calling showSheet directly');
          iframeWindow.showSheet(tabName);
        } else {
          console.log('showSheet function not found, using postMessage');
          iframe.contentWindow.postMessage({
            type: 'showSheet',
            sheet: tabName
          }, '*');
        }
      } catch (e) {
        console.error('Direct access failed, using postMessage:', e);
        iframe.contentWindow.postMessage({
          type: 'showSheet',
          sheet: tabName
        }, '*');
      }
    } else {
      console.error('Iframe or contentWindow not available');
    }
  };

  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '1600px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '30px',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', fontWeight: 800 }}>
            🚀 Nuqta Financial Model 2026 - KPI-Gated Projection
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
            H1 → H2 → H3 → Phase 2 | Data-Driven Phase Progression | Multi-Location Expansion | AED Currency
          </p>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          background: '#f8f9fa',
          borderBottom: '2px solid #dee2e6',
          overflowX: 'auto'
        }}>
          {[
            { id: 'dashboard', label: '📊 Dashboard' },
            { id: 'assumptions', label: '🎯 Assumptions' },
            { id: 'advanced-metrics', label: '📈 Advanced Metrics' },
            { id: 'cash-flow', label: '💵 Cash Flow' },
            { id: 'h1-monthly', label: '📅 H1 Monthly' },
            { id: 'h2-monthly', label: '📅 H2 Monthly' },
            { id: 'h3-monthly', label: '📅 H3 Monthly' },
            { id: 'income', label: '💰 P&L' },
            { id: 'sensitivity', label: '🔄 Sensitivity' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => showTab(tab.id)}
              style={{
                padding: '15px 20px',
                cursor: 'pointer',
                border: 'none',
                background: activeTab === tab.id ? 'white' : 'none',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: activeTab === tab.id ? '#667eea' : '#495057',
                borderBottom: activeTab === tab.id ? '3px solid #667eea' : 'none',
                transition: 'all 0.3s',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.background = '#e9ecef';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.background = 'none';
                }
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content - Full iframe without wrapper */}
        <div style={{
          width: '100%',
          height: 'calc(100vh - 200px)',
          overflow: 'hidden'
        }}>
          <iframe
            id="financial-model-iframe"
            src="/financial-projection-content.html"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              display: 'block'
            }}
            title="Financial Projection Model"
            onLoad={() => {
              // Sync tab when iframe loads
              console.log('Iframe loaded, syncing to tab:', activeTab);
              const iframe = document.getElementById('financial-model-iframe') as HTMLIFrameElement;
              if (iframe && iframe.contentWindow) {
                // Add a small delay to ensure iframe is fully ready
                setTimeout(() => {
                  console.log('Sending initial showSheet message for:', activeTab);
                  try {
                    const iframeWindow = iframe.contentWindow as any;
                    if (iframeWindow && iframeWindow.showSheet) {
                      console.log('Calling showSheet directly on load');
                      iframeWindow.showSheet(activeTab);
                    } else {
                      console.log('showSheet not available yet, using postMessage');
                      iframe.contentWindow?.postMessage({
                        type: 'showSheet',
                        sheet: activeTab
                      }, '*');
                    }
                  } catch (e) {
                    console.error('Error on load:', e);
                  }
                }, 100);
              }
            }}
          />
        </div>
      </div>

    </div>
  );
}

function recalculateAll() {
  // Calculations are handled in the iframe
  console.log('Financial Model initialized');
}
