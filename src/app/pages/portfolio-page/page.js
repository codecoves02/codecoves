'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, ArrowRight, Star, Eye, ShoppingBag, Globe, Smartphone, Palette, Package, Heart, Tag, Truck } from 'lucide-react';
import ReusableNavbar from '../../components/reusable-navbar';
import Footer from '../../components/footer';
import './portfolio-page.css';

const moreProjects = [
  { id: 2, title: 'MediCare — Healthcare App',    category: 'Mobile App', tags: ['React Native', 'Firebase', 'Node.js'],           desc: 'A mobile healthcare app for booking doctor appointments, viewing medical records, and teleconsultation.', color: '#68a063', gradient: 'linear-gradient(135deg, #0a2e0a, #1a4a1a)', emoji: '🏥', liveUrl: '#' },
  { id: 3, title: 'FinTrack — Finance Dashboard', category: 'Web App',    tags: ['React', 'Chart.js', 'Python', 'FastAPI'],         desc: 'A real-time financial analytics dashboard with expense tracking, budgeting, and AI-powered insights.',    color: '#ffd43b', gradient: 'linear-gradient(135deg, #2a1f00, #3d2e00)', emoji: '📊', liveUrl: '#' },
  { id: 4, title: 'SmartChat — AI Chatbot',       category: 'AI',         tags: ['OpenAI', 'Next.js', 'Python', 'WebSocket'],       desc: 'An AI-powered customer support chatbot platform with multi-language support and real-time analytics.',   color: '#b14cff', gradient: 'linear-gradient(135deg, #1a0030, #2d0050)', emoji: '🤖', liveUrl: '#' },
  { id: 5, title: 'EduLearn — LMS Platform',      category: 'Web App',    tags: ['Next.js', 'PostgreSQL', 'AWS', 'Stripe'],         desc: 'A complete learning management system with course creation, video streaming, quizzes, and certificates.',  color: '#2496ed', gradient: 'linear-gradient(135deg, #001a2e, #002d4a)', emoji: '📚', liveUrl: '#' },
  { id: 6, title: 'PropVista — Real Estate',       category: 'Web App',    tags: ['Next.js', 'Google Maps', 'Node.js', 'MySQL'],     desc: 'A real estate listing platform with advanced search, virtual tours, and mortgage calculator.',             color: '#28c840', gradient: 'linear-gradient(135deg, #001a0a, #002d12)', emoji: '🏠', liveUrl: '#' },
  { id: 7, title: 'FoodieApp — Food Delivery',     category: 'Mobile App', tags: ['React Native', 'Node.js', 'MongoDB', 'Maps API'], desc: 'A food delivery app with real-time order tracking, restaurant management, and payment integration.',       color: '#ff6b35', gradient: 'linear-gradient(135deg, #2a0f00, #4a1a00)', emoji: '🍔', liveUrl: '#' },
];

/* ── Particle BG ── */
function ParticleBg() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let w, h, pts, raf;
    const init = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
      pts = Array.from({ length: 60 }, () => ({
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
        ctx.fillStyle = 'rgba(177,76,255,0.8)'; ctx.fill();
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
  return <canvas ref={canvasRef} className="pp-canvas" />;
}

const project = {
  title: 'LaceVeil — Premium Lingerie Store',
  category: 'E-Commerce',
  tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
  color: '#e535ab',
  gradient: 'linear-gradient(135deg, #1a0010, #3d0030, #1a0010)',
  liveUrl: '#',
  desc: 'A fully custom e-commerce platform built for a premium lingerie brand. Designed with elegance, performance, and conversion in mind — every pixel crafted to reflect the brand\'s luxury identity.',
  highlights: [
    { icon: <ShoppingBag size={18} />, title: 'Full E-Commerce',    desc: 'Product catalog, cart, wishlist, checkout, and order management.' },
    { icon: <Smartphone size={18} />,  title: 'Mobile First',       desc: 'Fully responsive design optimized for mobile shoppers.' },
    { icon: <Palette size={18} />,     title: 'Luxury UI/UX',       desc: 'Elegant, brand-aligned design with smooth animations.' },
    { icon: <Package size={18} />,     title: 'Admin Dashboard',    desc: 'Full product, order, and inventory management panel.' },
    { icon: <Heart size={18} />,       title: 'Wishlist & Reviews', desc: 'Save favorites and leave product reviews with ratings.' },
    { icon: <Tag size={18} />,         title: 'Promo & Discounts',  desc: 'Coupon codes, seasonal sales, and bundle offers.' },
    { icon: <Truck size={18} />,       title: 'Order Tracking',     desc: 'Real-time order status updates and delivery tracking.' },
    { icon: <Globe size={18} />,       title: 'SEO Optimized',      desc: 'Built with Next.js SSR for top search engine rankings.' },
  ],
  screens: [
    { label: 'Homepage',        emoji: '🏠', bg: 'linear-gradient(135deg, #1a0010, #4a0030)' },
    { label: 'Product Listing', emoji: '👗', bg: 'linear-gradient(135deg, #0d0020, #2d0050)' },
    { label: 'Product Detail',  emoji: '🛍️', bg: 'linear-gradient(135deg, #1a0010, #3d0030)' },
    { label: 'Cart & Checkout', emoji: '💳', bg: 'linear-gradient(135deg, #0a0020, #200040)' },
    { label: 'Admin Panel',     emoji: '⚙️', bg: 'linear-gradient(135deg, #0d0d0d, #1a0030)' },
  ],
};

export default function PortfolioPage() {
  const heroRef  = useRef(null);
  const detailRef = useRef(null);
  const inView   = useInView(detailRef, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <ReusableNavbar />
      <main className="pp-main">
        <ParticleBg />
        <div className="pp-orb pp-orb-1" />
        <div className="pp-orb pp-orb-2" />
        <div className="pp-orb pp-orb-3" />

        {/* ── HERO ── */}
        <div className="pp-hero" ref={heroRef}>
          <div className="pp-back-wrap">
            <Link href="/" className="pp-back"><ArrowLeft size={16} /> Back to Home</Link>
          </div>
          <motion.div className="pp-hero-badge" initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="pp-badge-dot" /> Our Work
          </motion.div>
          <motion.h1 className="pp-hero-title" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Projects That <span className="pp-purple">Speak</span><br />For Themselves
          </motion.h1>
          <motion.p className="pp-hero-sub" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Real work. Real results. Here's what we've built.
          </motion.p>
        </div>

        {/* ── PROJECT DETAIL ── */}
        <div className="pp-content" ref={detailRef}>

          {/* project hero card */}
          <motion.div className="pp-project-hero"
            initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* visual */}
            <div className="pp-project-visual" style={{ background: project.gradient }}>
              <motion.div className="pp-project-visual-inner"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="pp-project-icon-big">👗</div>
                <div className="pp-project-brand">LaceVeil</div>
                <div className="pp-project-brand-sub">Premium Lingerie</div>
              </motion.div>

              {/* floating badges */}
              {['Next.js', 'Stripe', 'MongoDB'].map((t, i) => (
                <motion.div key={t} className="pp-float-tag"
                  style={{ '--i': i }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                >{t}</motion.div>
              ))}

              <div className="pp-featured-badge"><Star size={11} fill="currentColor" /> Featured Project</div>
            </div>

            {/* info */}
            <div className="pp-project-info">
              <div className="pp-project-cat" style={{ color: project.color }}>{project.category}</div>
              <h2 className="pp-project-title">{project.title}</h2>
              <p className="pp-project-desc">{project.desc}</p>

              <div className="pp-project-tags">
                {project.tags.map(t => <span key={t} className="pp-tag">{t}</span>)}
              </div>

              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="pp-live-btn" style={{ background: `linear-gradient(135deg, ${project.color}, #6a00ff)` }}>
                <Eye size={16} /> View Live Project <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>

          {/* screens */}
          <motion.div className="pp-screens-section"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <div className="pp-section-label">App Screens</div>
            <h3 className="pp-section-title">What It <span className="pp-purple">Looks Like</span></h3>
            <div className="pp-screens-grid">
              {project.screens.map((s, i) => (
                <motion.div key={i} className="pp-screen-card"
                  style={{ background: s.bg }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.04, y: -4 }}
                >
                  <div className="pp-screen-emoji">{s.emoji}</div>
                  <div className="pp-screen-label">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* highlights */}
          <motion.div className="pp-highlights-section"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <div className="pp-section-label">Features</div>
            <h3 className="pp-section-title">What We <span className="pp-purple">Built</span></h3>
            <div className="pp-highlights-grid">
              {project.highlights.map((h, i) => (
                <motion.div key={i} className="pp-highlight-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="pp-highlight-icon" style={{ color: project.color }}>{h.icon}</div>
                  <h4>{h.title}</h4>
                  <p>{h.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* more projects grid */}
          <motion.div className="pp-more-section"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <div className="pp-section-label">More Work</div>
            <h3 className="pp-section-title">Other <span className="pp-purple">Projects</span></h3>
            <div className="pp-more-grid">
              {moreProjects.map((p, i) => (
                <motion.div key={p.id} className="pp-more-card"
                  style={{ '--mc': p.color }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="pp-more-visual" style={{ background: p.gradient }}>
                    <span className="pp-more-emoji">{p.emoji}</span>
                  </div>
                  <div className="pp-more-body">
                    <div className="pp-more-cat" style={{ color: p.color }}>{p.category}</div>
                    <h4 className="pp-more-title">{p.title}</h4>
                    <p className="pp-more-desc">{p.desc}</p>
                    <div className="pp-more-tags">
                      {p.tags.map(t => <span key={t} className="pp-tag">{t}</span>)}
                    </div>
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="pp-more-link" style={{ color: p.color }}>
                      <Eye size={13} /> View Project <ExternalLink size={12} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* ── CTA ── */}
        <motion.div className="pp-cta"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <div className="pp-cta-glow" />
          <h3>Want something like this?</h3>
          <p>Let's build your next big project together.</p>
          <Link href="/pages/contact-page" className="pp-cta-btn">
            Start a Project <ArrowRight size={18} />
          </Link>
        </motion.div>

      </main>
      <Footer />
    </>
  );
}
