import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProposalE30c2203 = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [drawing, setDrawing] = useState(false);
  const [hasSigned, setHasSigned] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.parentElement?.getBoundingClientRect();
    if (rect) {
      canvas.width = rect.width;
      canvas.height = 150;
    }
  };

  const getCtx = () => canvasRef.current?.getContext('2d');

  const startDrawing = (x: number, y: number) => {
    setDrawing(true);
    setHasSigned(true);
    const ctx = getCtx();
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(x, y);
    }
  };

  const draw = (x: number, y: number) => {
    if (!drawing) return;
    const ctx = getCtx();
    if (ctx) {
      ctx.lineTo(x, y);
      ctx.strokeStyle = '#e8e8e8';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.stroke();
    }
  };

  const stopDrawing = () => setDrawing(false);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) startDrawing(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) draw(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const touch = e.touches[0];
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) startDrawing(touch.clientX - rect.left, touch.clientY - rect.top);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    if (!drawing) return;
    const touch = e.touches[0];
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) draw(touch.clientX - rect.left, touch.clientY - rect.top);
  };

  const clearSig = () => {
    const canvas = canvasRef.current;
    const ctx = getCtx();
    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setHasSigned(false);
    }
  };

  const submitSig = async () => {
    if (!hasSigned || !firstName || !lastName || !email) {
      alert('Please fill in all fields and sign the agreement.');
      return;
    }

    setIsSubmitting(true);

    const canvas = canvasRef.current;
    const signatureData = canvas?.toDataURL('image/png') || '';
    const signerName = `${firstName} ${lastName}`.trim();
    const signedHtml = document.documentElement.outerHTML;

    const payload = {
      signature: signatureData,
      signer_name: signerName,
      signed_html: signedHtml,
    };

    try {
      const response = await fetch('/api/public/proposals/e30c2203/sign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      navigate('/proposal/e30c2203/confirmed');
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
          --bg: #0a0a0a;
          --card: #141414;
          --card-border: #1e1e1e;
          --card-hover: #1a1a1a;
          --text: #e8e8e8;
          --text-muted: #777;
          --text-dim: #555;
          --accent: #6C3AED;
          --accent-light: #8B5CF6;
          --green: #22c55e;
          --green-muted: rgba(34,197,94,0.1);
          --warm: #f59e0b;
          --warm-muted: rgba(245,158,11,0.1);
        }
        body {
          font-family: 'DM Sans', sans-serif;
          background: var(--bg);
          color: var(--text);
          min-height: 100vh;
          padding: 24px;
          line-height: 1.6;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700&family=JetBrains+Mono:wght@500&family=Fraunces:ital,wght@0,600;0,700;1,400&display=swap" rel="stylesheet" />

      <div style={{ maxWidth: 640, margin: '0 auto', animation: 'fadeUp 0.6s ease both' }}>
        {/* HEADER */}
        <div style={{ textAlign: 'center', padding: '48px 0 40px', borderBottom: '1px solid var(--card-border)', marginBottom: 40 }}>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 32, fontWeight: 700, letterSpacing: '-0.5px', marginBottom: 8 }}>
            Custom Automation System<br />Design, Build &amp; Deployment
          </h1>
          <p style={{ fontFamily: "'Fraunces', serif", fontSize: 18, color: 'var(--text-muted)', fontStyle: 'italic', marginTop: 6, marginBottom: 4 }}>Prepared for Uraiv, LLC</p>
          <p style={{ color: 'var(--text-muted)', fontSize: 15 }}>Service Agreement</p>
          <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: 4, marginTop: 20, background: 'var(--card)', border: '1px solid var(--card-border)', padding: '12px 28px', borderRadius: 100 }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 36, fontWeight: 500 }}>$4,000</span>
            <span style={{ fontSize: 13, color: 'var(--text-muted)', marginLeft: 8 }}>one-time</span>
          </div>
        </div>

        {/* OVERVIEW */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--text-dim)', fontWeight: 600, marginBottom: 16 }}>Overview</div>
          <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.75 }}>
            This agreement covers the <strong style={{ color: 'var(--text)', fontWeight: 600 }}>full design, build, and installation</strong> of one automation system. The client is granted the option to select either system outlined below within 90 days of purchase. Payment of $4,000 must be made on or before February 12th, 2026 via Zelle.<br /><br />System architecture, tooling, and configuration are determined by the provider based on the client's business goals. Upon completion, the system will either be transferred to the client or hosted on the provider's infrastructure for up to one year. 30 days of priority support is included post-installation.
          </p>
        </div>

        {/* OPTION CARDS */}
        <div style={{ marginBottom: 36 }}>
          {/* Outbound Sales System */}
          <div style={{ background: 'var(--card)', border: '1px solid var(--card-border)', borderRadius: 16, padding: 28, marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, background: 'rgba(108,58,237,0.15)' }}>📨</div>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 700 }}>Outbound Sales System</div>
            </div>
            <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 20, lineHeight: 1.6 }}>
              A fully built outbound email infrastructure — from lead sourcing through campaign execution. Everything is configured and ready to send.
            </p>
            <ul style={{ listStyle: 'none' }}>
              {[
                ['Targeted lead list', 'Up to 5,000 contacts, sourced and verified against an ideal customer profile.'],
                ['Email sending system', 'Dedicated mailboxes set up and warmed, configured for deliverability.'],
                ['Full end-to-end email campaigns', 'Multi-step email sequences written, tested, and loaded.'],
                ['Sending automation', 'Scheduling, throttling, and sequencing configured end-to-end.'],
                ['AI reply handling', 'Positive reply detection and routing so no warm lead is missed.'],
                ['$300 in Google AI Studio credits', 'Set up on your behalf to cover initial infrastructure and API usage.'],
                ['Deliverability optimization', 'DNS records, SPF, DKIM, DMARC all configured for maximum inbox placement.'],
              ].map(([title, desc], i) => (
                <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '8px 0', fontSize: 14, color: 'var(--text-muted)', borderBottom: i < 6 ? '1px solid rgba(255,255,255,0.03)' : 'none' }}>
                  <span style={{ color: 'var(--green)', fontSize: 15, marginTop: 1, minWidth: 18 }}>✓</span>
                  <span><strong style={{ color: 'var(--text)', fontWeight: 500 }}>{title}</strong><br /><span style={{ fontSize: 13, color: 'var(--text-dim)', fontWeight: 400, marginTop: 2, display: 'inline-block' }}>{desc}</span></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Or divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '24px 0' }}>
            <div style={{ flex: 1, height: 1, background: 'var(--card-border)' }} />
            <span style={{ fontSize: 13, color: 'var(--text-dim)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px' }}>or</span>
            <div style={{ flex: 1, height: 1, background: 'var(--card-border)' }} />
          </div>

          {/* AI Ad Content Generation System */}
          <div style={{ background: 'var(--card)', border: '1px solid var(--card-border)', borderRadius: 16, padding: 28, marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, background: 'rgba(245,158,11,0.15)' }}>🎬</div>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 700 }}>AI Ad Content Generation System</div>
            </div>
            <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 20, lineHeight: 1.6 }}>
              An automated system that produces hyper-realistic AI-generated "UGC-style" video and image ad content — no creators, no shoots, no scheduling.
            </p>
            <ul style={{ listStyle: 'none' }}>
              {[
                ['AI avatar setup', 'Realistic digital presenters generated for each product video.'],
                ['Script generation pipeline', 'AI agent generates optimized prompts tailored to each product.'],
                ['Video production automation', 'End-to-end pipeline from product details to finished video, with multiple AI model support.'],
                ['Management dashboard', 'A dedicated interface to manage product details, trigger generation, and track output status.'],
                ['Automated status tracking', 'Real-time generation status and video delivery updated directly in the sheet.'],
                ['$300 in Google AI Studio credits', 'Set up on your behalf to cover initial AI generation and API usage.'],
              ].map(([title, desc], i) => (
                <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '8px 0', fontSize: 14, color: 'var(--text-muted)', borderBottom: i < 5 ? '1px solid rgba(255,255,255,0.03)' : 'none' }}>
                  <span style={{ color: 'var(--green)', fontSize: 15, marginTop: 1, minWidth: 18 }}>✓</span>
                  <span><strong style={{ color: 'var(--text)', fontWeight: 500 }}>{title}</strong><br /><span style={{ fontSize: 13, color: 'var(--text-dim)', fontWeight: 400, marginTop: 2, display: 'inline-block' }}>{desc}</span></span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* DISCLOSURE */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--text-dim)', fontWeight: 600, marginBottom: 16 }}>Disclosure</div>
          <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.75 }}>
            Deliverables listed above represent the intended scope and may be adjusted by the provider based on technical feasibility and platform availability. The final system may differ from what is described. 3rd-party platform or API usage will be incurred by the client directly (e.g. Google Gemini, OpenAI, SmartLead).
          </p>
        </div>

        {/* SIGNATURES */}
        <div style={{ marginTop: 40, paddingTop: 32, borderTop: '1px solid var(--card-border)' }}>
          <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--text-dim)', fontWeight: 600, marginBottom: 16 }}>Signature</div>

          <div style={{ background: 'var(--card)', border: '1px solid var(--card-border)', borderRadius: 16, padding: 28, marginBottom: 16 }}>
            <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--text-dim)', fontWeight: 600, marginBottom: 4 }}>Your details</div>
            <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                style={{ flex: 1, background: 'rgba(255,255,255,0.03)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '12px 14px', color: 'var(--text)', fontFamily: "'DM Sans', sans-serif", fontSize: 14, outline: 'none' }}
              />
              <input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                style={{ flex: 1, background: 'rgba(255,255,255,0.03)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '12px 14px', color: 'var(--text)', fontFamily: "'DM Sans', sans-serif", fontSize: 14, outline: 'none' }}
              />
            </div>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--card-border)', borderRadius: 8, padding: '12px 14px', color: 'var(--text)', fontFamily: "'DM Sans', sans-serif", fontSize: 14, outline: 'none' }}
            />
            <p style={{ fontSize: 12, color: 'var(--text-dim)', marginTop: 10 }}>A copy of this signed agreement will be sent to the email provided.</p>
          </div>

          <div style={{ background: 'var(--card)', border: '1px solid var(--card-border)', borderRadius: 16, padding: 28, marginBottom: 16 }}>
            <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--text-dim)', fontWeight: 600, marginBottom: 4 }}>Sign below</div>
            <div style={{ border: '1px solid var(--card-border)', borderRadius: 10, overflow: 'hidden', position: 'relative', marginBottom: 12 }}>
              <canvas
                ref={canvasRef}
                style={{ display: 'block', width: '100%', height: 150, cursor: 'crosshair' }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={stopDrawing}
              />
              {!hasSigned && (
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'var(--text-dim)', fontSize: 15, pointerEvents: 'none' }}>Sign here</div>
              )}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button
                onClick={clearSig}
                style={{ background: 'none', border: 'none', color: 'var(--text-dim)', fontSize: 14, fontFamily: "'DM Sans', sans-serif", cursor: 'pointer', padding: 0 }}
              >
                Clear
              </button>
              <button
                onClick={submitSig}
                disabled={isSubmitting || !firstName || !lastName || !email || !hasSigned}
                style={{ background: '#333', border: 'none', color: 'var(--text)', fontSize: 14, fontWeight: 600, fontFamily: "'DM Sans', sans-serif", padding: '12px 28px', borderRadius: 10, cursor: (!firstName || !lastName || !email || !hasSigned) ? 'not-allowed' : 'pointer', opacity: (isSubmitting || !firstName || !lastName || !email || !hasSigned) ? 0.4 : 1 }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </div>

          <p style={{ textAlign: 'center', fontSize: 14, color: 'var(--text-muted)', marginTop: 20, marginBottom: 40 }}>Payment instructions will be presented on the next page.</p>
        </div>

        <div style={{ height: 60 }} />
      </div>
    </>
  );
};

export default ProposalE30c2203;
