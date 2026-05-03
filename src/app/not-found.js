'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, ArrowRight, Search } from 'lucide-react';
import ReusableNavbar from './components/reusable-navbar';
import Footer from './components/footer';

function ParticleBg() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let w, h, pts, raf;
    const init = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
      pts = Array.from({ length: 55 }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.4,
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(177,76,255,0.75)'; ctx.fill();
      });
      for (let i = 0; i < pts.length; i++)
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(177,76,255,${0.2 * (1 - d / 120)})`; ctx.lineWidth = 0.8; ctx.stroke();
          }
        }
      raf = requestAnimationFrame(draw);
    };
    init(); draw();
    const ro = new ResizeObserver(init); ro.observe(canvas);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);
  return (
    <canvas ref={canvasRef} style={{
      position: 'fixed', inset: 0, width: '100%', height: '100%',
      pointerEvents: 'none', zIndex: 0,
    }} />
  );
}

const quickLinks = [
  { label: 'Home',       href: '/'                      },
  { label: 'About Us',   href: '/pages/about-page'      },
  { label: 'Services',   href: '/pages/services-page'   },
  { label: 'Portfolio',  href: '/pages/portfolio-page'  },
  { label: 'Contact',    href: '/pages/contact-page'    },
];

export default function NotFound() {
  return (
    <>
    <ReusableNavbar/>
    <main style={{ minHeight: '100vh', background: '#000', color: '#fff', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '120px 6% 60px', textAlign: 'center', overflow: 'hidden' }}>
      <ParticleBg />

      {/* glowing orbs */}
      <div style={{ position: 'fixed', width: 500, height: 500, borderRadius: '50%', background: 'rgba(177,76,255,0.12)', filter: 'blur(120px)', top: -100, left: -150, pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'fixed', width: 400, height: 400, borderRadius: '50%', background: 'rgba(106,0,255,0.09)', filter: 'blur(120px)', bottom: '10%', right: -100, pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 600 }}>

        {/* 404 big number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
          style={{ marginBottom: 8 }}
        >
          <span style={{
            fontSize: 'clamp(100px, 20vw, 180px)',
            fontWeight: 900,
            lineHeight: 1,
            background: 'linear-gradient(135deg, #b14cff, #e0aaff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'block',
            letterSpacing: '-4px',
          }}>404</span>
        </motion.div>

        {/* glitch line */}
        <motion.div
          style={{ height: 2, background: 'linear-gradient(90deg, transparent, #b14cff, transparent)', marginBottom: 32, borderRadius: 2 }}
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        <motion.div
          className="nf-badge"
          initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(177,76,255,0.12)', border: '1px solid rgba(177,76,255,0.3)',
            borderRadius: 50, padding: '7px 16px',
            fontSize: 12, color: '#b14cff', letterSpacing: '1.5px',
            textTransform: 'uppercase', marginBottom: 20,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#b14cff', boxShadow: '0 0 8px #b14cff', animation: 'pulse 2s ease-in-out infinite' }} />
          Page Not Found
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2 }}
        >
          Oops! This page doesn't exist.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{ fontSize: 16, color: '#bbb', lineHeight: 1.8, marginBottom: 40, maxWidth: 480, margin: '0 auto 40px' }}
        >
          The page you're looking for may have been moved, deleted, or never existed. Let's get you back on track.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 50 }}
        >
          <Link href="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'linear-gradient(135deg, #b14cff, #6a00ff)',
            color: '#fff', padding: '14px 28px', borderRadius: 50,
            fontSize: 15, fontWeight: 700, textDecoration: 'none',
            boxShadow: '0 0 28px rgba(177,76,255,0.4)',
          }}>
            <Home size={16} /> Go Home
          </Link>
          <Link href="/pages/contact-page" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            border: '1px solid rgba(177,76,255,0.4)',
            color: '#e0aaff', padding: '14px 28px', borderRadius: 50,
            fontSize: 15, fontWeight: 700, textDecoration: 'none',
            background: 'rgba(177,76,255,0.08)',
          }}>
            Contact Us <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* quick links */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p style={{ fontSize: 13, color: '#555', marginBottom: 14, textTransform: 'uppercase', letterSpacing: '1px' }}>
            Quick Links
          </p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            {quickLinks.map((l, i) => (
              <Link key={i} href={l.href} style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 50, padding: '7px 16px',
                fontSize: 13, color: '#bbb', textDecoration: 'none',
                transition: 'all 0.2s',
              }}>
                {l.label}
              </Link>
            ))}
          </div>
        </motion.div>

      </div>
    </main>
    <Footer/>
    </>
  );
}
