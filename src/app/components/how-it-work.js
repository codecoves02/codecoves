'use client';

import { useEffect, useRef, useState } from 'react';
import '../css/how-it-work.css';

const steps = [
  { step: '01', title: 'Requirement Analysis', desc: 'We deeply understand your business goals and challenges.' },
  { step: '02', title: 'Planning & Strategy', desc: 'We design scalable and efficient technical solutions.' },
  { step: '03', title: 'Design & Development', desc: 'Our team builds secure and high-performance software.' },
  { step: '04', title: 'Testing & QA', desc: 'We ensure everything works perfectly before launch.' },
  { step: '05', title: 'Launch & Support', desc: 'We deploy your product and provide continuous support.' }
];

export default function HowItWorks() {
  const timelineRef = useRef(null);
  const [lines, setLines] = useState([]);
  const [drawnSegments, setDrawnSegments] = useState([]);
  const [chargedCards, setChargedCards] = useState([]);
  const [roundKey, setRoundKey] = useState(0);

  useEffect(() => {
    const items = Array.from(timelineRef.current.querySelectorAll('.timeline-item'));
    const parentRect = timelineRef.current.getBoundingClientRect();

    const extraHorizontal = 300;
    const extraVertical = 20;

    const newLines = [];

    items.forEach((item, index) => {
      if (index === items.length - 1) return;

      const rectCurrent = item.getBoundingClientRect();
      const rectNext = items[index + 1].getBoundingClientRect();
      const parentTop = parentRect.top + window.scrollY;
      const parentLeft = parentRect.left;

      const yStart = rectCurrent.top + rectCurrent.height / 2 + window.scrollY - parentTop;
      const yEnd = rectNext.top + window.scrollY - parentTop + extraVertical;

      let xStart, xTurn;
      if (index % 2 === 0) {
        xStart = rectCurrent.left + rectCurrent.width - parentLeft - 40;
        xTurn = xStart + extraHorizontal;
      } else {
        xStart = rectCurrent.left - parentLeft + 40;
        xTurn = xStart - extraHorizontal;
      }

      newLines.push({
        segments: [
          { x1: xStart, y1: yStart, x2: xTurn, y2: yStart }, // horizontal
          { x1: xTurn, y1: yStart, x2: xTurn, y2: yEnd },     // vertical
        ]
      });
    });

    setLines(newLines);

    const totalSegments = newLines.reduce((acc, l) => acc + l.segments.length, 0);
    setDrawnSegments(Array(totalSegments).fill(false));
    setChargedCards(Array(steps.length).fill(false)); // reset charged cards
  }, [roundKey]);

  // sequential animation with card charging
useEffect(() => {
  if (!lines.length) return;

  let currentCard = 0;
  let currentSeg = 0;

  const animateNext = () => {
    const flatIndex = currentCard * 2 + currentSeg;
    if (flatIndex >= drawnSegments.length) {
      setTimeout(() => setRoundKey(prev => prev + 1), 1000); // loop restart
      return;
    }

    // draw current segment
    setDrawnSegments(prev => {
      const newArr = [...prev];
      newArr[flatIndex] = true;
      return newArr;
    });

    // **charge the current card when vertical segment completes**
    if (currentSeg === 1) {
      setTimeout(() => {
        setChargedCards(prev => {
          const newArr = [...prev];
          newArr[currentCard] = true; // charge the **current card**
          return newArr;
        });
      }, 1500); // match segment animation duration
    }

    // move to next segment after current segment duration
    setTimeout(() => {
      if (currentSeg === 0) {
        currentSeg = 1;
      } else {
        currentSeg = 0;
        currentCard++;
      }
      animateNext();
    }, 1500);
  };

  animateNext();
}, [lines, roundKey]);


  return (
    <section className="process-section">
      <h2 className="process-title">
        How <span>It Works</span>
      </h2>

      <div className="timeline" ref={timelineRef}>
        {steps.map((item, index) => (
          <div
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${chargedCards[index] ? 'charged' : ''}`}
            key={index}
          >
            <div className="content">
              <span className="step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}

        <svg className="timeline-svg">
          {lines.map((line, cardIndex) =>
            line.segments.map((seg, segIndex) => {
              const length = Math.hypot(seg.x2 - seg.x1, seg.y2 - seg.y1);
              const flatIndex = cardIndex * 2 + segIndex;
              const isDrawn = drawnSegments[flatIndex];

              return (
                <line
                  key={`${cardIndex}-${segIndex}-${roundKey}`}
                  x1={seg.x1}
                  y1={seg.y1}
                  x2={seg.x2}
                  y2={seg.y2}
                  stroke="#b14cff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={length}
                  strokeDashoffset={isDrawn ? 0 : length}
                  style={{ transition: 'stroke-dashoffset 1.5s ease' }}
                />
              );
            })
          )}
        </svg>
      </div>
    </section>
  );
}
