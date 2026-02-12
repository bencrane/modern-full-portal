const ProposalConfirmed = () => {
  const copyText = (text: string, btnId: string) => {
    navigator.clipboard.writeText(text).then(() => {
      const btn = document.getElementById(btnId);
      if (btn) {
        btn.textContent = 'Copied';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = 'Copy';
          btn.classList.remove('copied');
        }, 2000);
      }
    });
  };

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
          --bg: #0a0a0a;
          --card: #141414;
          --card-border: #1e1e1e;
          --text: #e8e8e8;
          --text-muted: #777;
          --accent: #6C3AED;
          --accent-light: #8B5CF6;
          --green: #22c55e;
          --green-muted: rgba(34,197,94,0.1);
        }
        body {
          font-family: 'DM Sans', sans-serif;
          background: var(--bg);
          color: var(--text);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .copy-btn {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          color: var(--text-muted);
          font-size: 12px;
          padding: 4px 10px;
          border-radius: 6px;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: all 0.2s;
        }
        .copy-btn:hover {
          background: rgba(255,255,255,0.1);
          color: var(--text);
        }
        .copy-btn.copied {
          background: var(--green-muted);
          color: var(--green);
          border-color: rgba(34,197,94,0.2);
        }
      `}</style>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet" />

      <div style={{ maxWidth: 480, width: '100%', animation: 'fadeUp 0.6s ease both' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'var(--accent)',
            color: 'white',
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: '0.5px',
            padding: '8px 18px',
            borderRadius: 100,
            marginBottom: 20
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>
            ACH TRANSFER
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.5px', marginBottom: 6 }}>Payment Instructions</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 15 }}>Complete your payment via ACH bank transfer</p>
        </div>

        {/* Amount Card */}
        <div style={{
          background: 'var(--card)',
          border: '1px solid var(--card-border)',
          borderRadius: 16,
          padding: 28,
          textAlign: 'center',
          marginBottom: 20
        }}>
          <div style={{ fontSize: 13, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600, marginBottom: 8 }}>Amount Due</div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 48, fontWeight: 500, letterSpacing: '-1px' }}>$4,000</div>
        </div>

        {/* Account Details Card */}
        <div style={{
          background: 'var(--card)',
          border: '1px solid var(--card-border)',
          borderRadius: 16,
          padding: 24,
          marginBottom: 20
        }}>
          <div style={{ fontSize: 13, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600, marginBottom: 16 }}>Account Details</div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid var(--card-border)' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: 14 }}>Account Name</span>
            <span style={{ fontWeight: 600, fontSize: 14 }}>Modern Full, LLC</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid var(--card-border)' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: 14 }}>Routing Number</span>
            <span style={{ fontWeight: 600, fontSize: 14, display: 'flex', alignItems: 'center', gap: 8, fontFamily: "'JetBrains Mono', monospace" }}>
              091311229
              <button id="copyRouting" className="copy-btn" onClick={() => copyText('091311229', 'copyRouting')}>Copy</button>
            </span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: 14 }}>Account Number</span>
            <span style={{ fontWeight: 600, fontSize: 14, display: 'flex', alignItems: 'center', gap: 8, fontFamily: "'JetBrains Mono', monospace" }}>
              202314840766
              <button id="copyAccount" className="copy-btn" onClick={() => copyText('202314840766', 'copyAccount')}>Copy</button>
            </span>
          </div>
        </div>

        {/* Bank Info Card */}
        <div style={{
          background: 'var(--card)',
          border: '1px solid var(--card-border)',
          borderRadius: 16,
          padding: 24,
          marginBottom: 28
        }}>
          <div style={{ fontSize: 13, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600, marginBottom: 16 }}>Bank Information</div>
          <div style={{ fontSize: 14 }}>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>Choice Financial Group</div>
            <div style={{ color: 'var(--text-muted)' }}>4501 23rd Avenue S</div>
            <div style={{ color: 'var(--text-muted)' }}>Fargo, ND 58104</div>
          </div>
        </div>

        {/* Note */}
        <div style={{
          background: 'var(--green-muted)',
          border: '1px solid rgba(34,197,94,0.15)',
          borderRadius: 12,
          padding: '16px 20px',
          fontSize: 13,
          color: 'rgba(34,197,94,0.85)',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          lineHeight: 1.5
        }}>
          <svg style={{ minWidth: 18 }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          ACH transfers typically arrive within 1-3 business days.
        </div>
      </div>
    </>
  );
};

export default ProposalConfirmed;
