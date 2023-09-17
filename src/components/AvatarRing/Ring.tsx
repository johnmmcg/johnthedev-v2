import React, { useEffect, useRef } from 'react';
import RingLink from './RingLink.tsx';
import codeSvg from '../../svg/code.svg';
import codepenSvg from '../../svg/codepen.svg';
import instagramSvg from '../../svg/instagram.svg';
import resumeSvg from '../../svg/resume.svg';
import linkedinSvg from '../../svg/linkedin.svg';
import './Ring.css';
import { useWindowSize } from '../../hooks.tsx';

const links = [
  {
    id: 'github',
    label: 'GitHub',
    icon: codeSvg,
    color: '#636e72',
    url: 'https://github.com/johnmmcg',
  },
  {
    id: 'codepen',
    label: 'CodePen',
    icon: codepenSvg,
    color: '#6c5ce7',
    url: 'https://codepen.io/johnmmcg',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    icon: instagramSvg,
    color: '#d63031',
    url: 'https://www.instagram.com/light_roast.heavy_lifts/',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: linkedinSvg,
    color: '#a29bfe',
    url: 'https://www.linkedin.com/in/johnmmcg/',
  },
  {
    id: 'resume',
    label: 'Resume',
    icon: resumeSvg,
    color: '#00b894',
    url: '/John_McGuinness_Resume.pdf',
    title: 'Resume Icon by Adrien Coquet',
  },
];

// thanks and credit to br3ntor for this React equally distributed ring list (https://stackoverflow.com/a/62466233)
export default function Ring() {
  const ringRef = useRef<HTMLDivElement | null>(null);
  const { isSmallScreen } = useWindowSize();

  useEffect(() => {
    const ringGraph = ringRef.current;
    if (ringGraph) {
      const links = ringGraph.childNodes;
      let angle = 360 - 90;
      let dangle = 360 / links.length;
      let translateSize = isSmallScreen
      ? ringGraph.clientWidth / 2 - 20
      : ringGraph.clientWidth / 2 + 20;
      for (let i = 0; i < links.length; i++) {
        if (!links[i]) continue;
        let circle = links[i] as HTMLElement;
        angle += dangle;
        circle.style.transform = `rotate(${angle}deg) translate(${translateSize}px) rotate(-${angle}deg)`;
      }
    }
  }, [isSmallScreen]);

  return (
    <div
      id="ringContainer"
      ref={ringRef}
    >
      {links.map((data) => (
        <RingLink
          data={data}
          key={data.id}
        />
      ))}
    </div>
  );
}
