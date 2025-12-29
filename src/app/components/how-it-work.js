'use client';

import '../css/how-it-work.css';
import { FaSearch, FaCogs, FaRocket, FaHeadset } from 'react-icons/fa';

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaSearch />,
      title: 'Requirement Analysis',
      desc: 'We deeply understand your business goals and challenges.'
    },
    {
      icon: <FaCogs />,
      title: 'Solution Planning',
      desc: 'We design scalable and efficient technical solutions.'
    },
    {
      icon: <FaRocket />,
      title: 'Development',
      desc: 'Our team builds high-quality, secure software.'
    },
    {
      icon: <FaHeadset />,
      title: 'Launch & Support',
      desc: 'We deploy, monitor, and continuously improve your product.'
    }
  ];

  return (
    <section className="how">
      <h2 className="how-title">How It Works</h2>

      {/* HEARTBEAT STYLE SMOOTH WAVE */}
      <svg
        className="heartbeat-wave"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
      >
        <path
          className="heartbeat-path"
          d="M0,120
             C150,180 350,40 600,120
             C850,180 1050,40 1200,120"
          fill="none"
          stroke="#4da6ff" // light blue
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>

      {/* CARDS */}
      <div className="how-boxes">
        {steps.map((step, i) => (
          <div className="how-box" key={i}>
            <div className="icon-wrapper">{step.icon}</div>
            <h4>{step.title}</h4>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
