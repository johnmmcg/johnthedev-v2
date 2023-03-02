import React, { useEffect, useRef, useState } from 'react';
import './Ticker.css';

const SPECIALTIES = [
  'building User Interfaces 💻',
  'React ⚛',
  'TypeScript & JavaScript',
  "implementing API's",
  'CSS/SCSS & Web-Animations',
  'GraphQL',
  'Global State Management',
  'implementing designs',
  'TDD with Jest & Jasmine',
  'Code Review',
  'Scrum Leadership',
  'Cross-Team Communication',
  'getting the job done 😎',
];

export const SPECIALTIES_REVERSED = SPECIALTIES.reverse();

const SCROLL_TO_BOTTOM_TIMING = {
  easing: 'cubic-bezier(0.68, -0.6, 0.32, 1)',
  duration: 1750,
  iterations: 1,
};

export default function Ticker({ items = SPECIALTIES_REVERSED }) {
  const containerRef = useRef<HTMLUListElement>(null);
  const [hover, setHover] = useState(false);
  const [tickInterval, setTickInterval] =
    useState<ReturnType<typeof setInterval>>();

  const bottomPercentage = `-${items.length * 100 - 100}%`;
  const scrollToBottom = (ref: React.MutableRefObject<HTMLUListElement>) => {
    if (!ref.current) return;
    const el = ref.current;

    el.animate(
      [
        { top: '0%', filter: 'blur(0px)' },
        { filter: 'blur(2px)' },
        { top: bottomPercentage, filter: 'blur(0px)' },
      ],
      SCROLL_TO_BOTTOM_TIMING
    );
    el.style.top = bottomPercentage;
  };

  const scrollToNext = (ref: React.MutableRefObject<HTMLUListElement>) => {
    if (!ref.current) return;
    const el = ref.current;
    if (el.style.top === '0%') {
      scrollToBottom(containerRef);
    } else {
      const nextTopPosition = `${parseInt(el.style.top) + 100}%`;
      el.animate([{ top: el.style.top }, { top: nextTopPosition }], {
        easing: 'cubic-bezier(0.68, -0.6, 0.32, 1)',
        duration: 1000,
      });
      el.style.top = nextTopPosition;
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      scrollToBottom(containerRef);
      containerRef.current.style.top = bottomPercentage;
    }
    startNewTickInterval(containerRef);
  }, [containerRef, bottomPercentage]);

  const startNewTickInterval = (
    ref: React.MutableRefObject<HTMLUListElement>
  ) => {
    clearInterval(tickInterval);
    const newInterval = setInterval(() => {
      if (ref.current) {
        scrollToNext(ref);
      }
    }, 4000);
    setTickInterval(newInterval);
  };

  const handleClick = () => {
    scrollToNext(containerRef);
    startNewTickInterval(containerRef);
  };

  return (
    <button
      className="tickerContainer"
      onClick={handleClick}
    >
      <ul
        className="ticker"
        ref={containerRef}
      >
        {items.map((item) => (
          <li
            key={item}
            className="list-none p-2 text-xl font-bold text-slate-700 sm:text-2xl"
          >
            {item}
          </li>
        ))}
      </ul>
      <div
        id="hover-field"
        className="absolute top-0 left-0 z-10 h-full w-full"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
    </button>
  );
}
