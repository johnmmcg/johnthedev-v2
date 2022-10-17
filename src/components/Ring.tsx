import React, { useEffect, useRef } from 'react';
import Thing from './Thing.jsx';
import codeSvg from '../svg/code.svg';
import barbellSvg from '../svg/barbells.svg';
import coffeeSvg from '../svg/coffeeBeans.svg';
import d20Svg from '../svg/d20.svg';
import travelSvg from '../svg/travel.svg';
import './Ring.css';

const things = [
    {
        id: "lifting",
        icon: barbellSvg,
        color: "#6c5ce7",
        url: "https://www.instagram.com/light_roast.heavy_lifts/",
        title: "Barbells Icon by Elizabeth Fuqua"

    },
    {
        id: "coffee",
        icon: coffeeSvg,
        color: "#d63031",
        url: "https://www.instagram.com/light_roast.heavy_lifts/",
        title: "Coffee Icon by ghufronagustian"

    },
    {
        id: "dnd",
        icon: d20Svg,
        color: "#00b894",
        title: "D20 Icon by Fritz Duggan"
    },
    {
        id: "travel",
        icon: travelSvg,
        color: "#a29bfe",
        title: "Travel Icon by Ema Dimitrova"
    },
    {
        id: "coding",
        icon: codeSvg,
        color: "#636e72",
        url: "https://github.com/johnmmcg",
        title: "Coding Icon by Syahbani Gondrong"
    }
]

// thanks and credit to br3ntor for this React equally distributed ring list (https://stackoverflow.com/a/62466233)
export default function Ring() {
    const ringRef = useRef(null);

    useEffect(() => {
        const ringGraph = ringRef.current;
        const things = ringGraph.childNodes;
        let angle = 360 - 90;
        let dangle = 360 / things.length;
    
        for (let i = 0; i < things.length; i++) {
          let circle = things[i];
          angle += dangle;
          circle.style.transform = `rotate(${angle}deg) translate(${ringGraph.clientWidth /
            2}px) rotate(-${angle}deg)`;
        }
      }, []);

    return (
        <div id="ringContainer" ref={ringRef}>
            {things.map(data => <Thing data={data} key={data.id} />)}
        </div>
    )
}

