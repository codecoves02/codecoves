'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, ArrowRight, Star, Eye, ShoppingBag, Globe, Smartphone, Palette, Package, Heart, Tag, Truck } from 'lucide-react';
import ReusableNavbar from '../../components/reusable-navbar';
import Footer from '../../components/footer';
import './portfolio-page.css';

const moreProjects = [
  {
    id: 2, title: 'VoltrixStation — EV Charging Platform', category: 'Web App',
    tags: ['Next.js', 'Firebase', 'Admin Panel', 'Real-time'],
    desc: 'A full-featured electric vehicle charging platform. Users buy time-based plans, get a unique code, and charge at any station. Real-time session tracking shows remaining time. Includes a complete admin panel to manage stations, users, and plans.',
    fullDesc: 'VoltrixStation is a complete EV charging management platform built with Next.js and Firebase. The platform allows users to register, browse available charging plans (e.g. 130 PKR for 2 hours), and make payments. Upon successful payment, a unique session code is generated. The user visits any VoltrixStation charging station, enters the code, and begins charging. The platform tracks the session in real-time — if a user charges for 10 minutes and disconnects, the remaining 1 hour 50 minutes is displayed on their dashboard and can be used later. The admin panel gives full control over station management, user accounts, plan configuration, session monitoring, and revenue analytics.',
    features: ['User authentication & profiles', 'Multiple charging plans with pricing', 'Unique session code generation', 'Real-time session tracking & timer', 'Multi-station support', 'Session history & usage logs', 'Admin panel — full management', 'Revenue & analytics dashboard'],
    color: '#00d4aa', gradient: 'linear-gradient(135deg, #001a14, #003328)', emoji: '⚡', liveUrl: 'https://voltrixstation.com',
  },
  {
    id: 8, title: 'DFTL — Dawood Family Takaful', category: 'Corporate Website',
    tags: ['Next.js', 'SQL', 'Bootstrap', 'Custom CSS'],
    desc: 'Official corporate website for Dawood Family Takaful Ltd. — a leading takaful (Islamic insurance) company. Contributed to the project as part of a collaborative effort with the DFTL IT team.',
    fullDesc: `This is an official project of Dawood Family Takaful Ltd. (DFTL). All intellectual property, content, branding, and rights belong exclusively to DFTL.\n\nAs a contributor on this project, I worked collaboratively with the DFTL IT team on the development and modernization of their official corporate website. My specific contribution involved converting the existing website architecture to Next.js, significantly improving performance, SEO, and overall user experience through modern web standards.\n\nThe frontend was built using Bootstrap and custom CSS for a fully responsive, professional corporate look. Backend logic including user authentication and data management was handled using SQL-based infrastructure provided and maintained by the DFTL IT team.\n\nThe website features a complete corporate presence including takaful plan information, online plan purchase (Buy Now), payment integration, customer portal, and detailed product pages — all aligned with DFTL's brand identity and compliance requirements.`,
    features: [
      'Full corporate website — DFTL brand',
      'Takaful plan listings & details',
      'Online plan purchase (Buy Now)',
      'Payment integration',
      'Customer login portal (SQL backend by DFTL IT)',
      'Next.js migration for performance',
      'Bootstrap + custom CSS — fully responsive',
      'SEO optimized with Next.js SSR',
    ],
    color: '#1e88e5', gradient: 'linear-gradient(135deg, #001428, #002244)', emoji: '🛡️', liveUrl: '#',
    disclaimer: true,
  },
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
  title: 'A.H Garments — Premium Lingerie Store',
  category: 'E-Commerce',
  tags: ['Next.js', 'Firebase', 'Tailwind CSS'],
  color: '#e535ab',
  gradient: 'linear-gradient(135deg, #1a0010, #3d0030, #1a0010)',
  liveUrl: 'https://ahgarments.pk',
  desc: 'A fully custom e-commerce platform built for A.H Garments — a premium lingerie brand. Designed with elegance, performance, and conversion in mind — every pixel crafted to reflect the brand\'s luxury identity.',
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
  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
      <ReusableNavbar />
      <main className="pp-main pb-1">
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
                <div className="pp-project-brand">A.H Garments</div>
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
                  onClick={() => setActiveProject(p)}
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

      {/* ── PROJECT DETAIL MODAL ── */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="pp-modal-overlay"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="pp-modal"
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              onClick={e => e.stopPropagation()}
              style={{ '--mc': activeProject.color }}
            >
              {/* modal header */}
              <div className="pp-modal-header" style={{ background: activeProject.gradient }}>
                <div className="pp-modal-emoji">{activeProject.emoji}</div>
                <button className="pp-modal-close" onClick={() => setActiveProject(null)}>✕</button>
              </div>

              {/* modal body */}
              <div className="pp-modal-body">
                <div className="pp-modal-cat" style={{ color: activeProject.color }}>{activeProject.category}</div>
                <h2 className="pp-modal-title">{activeProject.title}</h2>

                <div className="pp-modal-tags">
                  {activeProject.tags.map(t => <span key={t} className="pp-tag">{t}</span>)}
                </div>

                <p className="pp-modal-desc">{activeProject.fullDesc || activeProject.desc}</p>

                {activeProject.disclaimer && (
                  <div className="pp-modal-disclaimer">
                    ⚠️ <strong>Note:</strong> This project was developed in collaboration with the DFTL IT team. All rights, content, and intellectual property belong exclusively to Dawood Family Takaful Ltd. (DFTL). This entry reflects only the contributor's technical involvement in the project.
                  </div>
                )}

                {activeProject.features && (
                  <div className="pp-modal-features">
                    <div className="pp-modal-features-title">Key Features</div>
                    <div className="pp-modal-features-grid">
                      {activeProject.features.map((f, i) => (
                        <div key={i} className="pp-modal-feature-item">
                          <span className="pp-modal-bullet" style={{ background: activeProject.color }} />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeProject.liveUrl !== '#' && (
                  <a href={activeProject.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="pp-modal-btn" style={{ background: `linear-gradient(135deg, ${activeProject.color}, ${activeProject.color}99)` }}>
                    <Eye size={16} /> View Live Project <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
