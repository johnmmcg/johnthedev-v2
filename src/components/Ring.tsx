import { useEffect, useRef } from 'react';
import Thing from './Thing.jsx';
import codeSvg from '../svg/code.svg';
import barbellSvg from '../svg/barbells.svg';
import coffeeSvg from '../svg/coffeeBeans.svg';
import resumeSvg from '../svg/resume.svg';
import linkedinSvg from '../svg/linkedin.svg';
import './Ring.css';
import { useWindowSize } from '../hooks.jsx';

const things = [
  {
    id: 'coding',
    label: 'GitHub',
    icon: codeSvg,
    color: '#636e72',
    url: 'https://github.com/johnmmcg',
    title: 'Coding Icon by Syahbani Gondrong',
  },
  {
    id: 'lifting',
    label: 'Powerlifting',
    icon: barbellSvg,
    color: '#6c5ce7',
    url: 'https://www.instagram.com/light_roast.heavy_lifts/',
    title: 'Barbells Icon by Elizabeth Fuqua',
  },
  {
    id: 'coffee',
    label: 'Coffee',
    icon: coffeeSvg,
    color: '#d63031',
    url: 'https://www.instagram.com/light_roast.heavy_lifts/',
    title: 'Coffee Icon by ghufronagustian',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: linkedinSvg,
    color: '#a29bfe',
    url: 'https://www.linkedin.com/in/johnmmcg/',
    title: 'Network Icon by Yoon Ro',
  },
  {
    id: 'resume',
    label: 'Resume',
    icon: resumeSvg,
    color: '#00b894',
    url: '/John_McGuinness_Resume_2023.pdf',
    title: 'Resume Icon by Adrien Coquet',
  },
];

// thanks and credit to br3ntor for this React equally distributed ring list (https://stackoverflow.com/a/62466233)
export default function Ring() {
  const ringRef = useRef(null);
  const { isSmallScreen } = useWindowSize();

  useEffect(() => {
    const ringGraph = ringRef.current;
    const things = ringGraph.childNodes;
    let angle = 360 - 90;
    let dangle = 360 / things.length;
    let translateSize = isSmallScreen
      ? ringGraph.clientWidth / 2 - 30
      : ringGraph.clientWidth / 2 + 20;
    for (let i = 0; i < things.length; i++) {
      let circle = things[i];
      angle += dangle;
      circle.style.transform = `rotate(${angle}deg) translate(${translateSize}px) rotate(-${angle}deg)`;
    }
  }, [isSmallScreen]);

  return (
    <div
      id="ringContainer"
      ref={ringRef}
    >
      {things.map((data) => (
        <Thing
          data={data}
          key={data.id}
        />
      ))}
    </div>
  );
}
