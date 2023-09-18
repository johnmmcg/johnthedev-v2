import React from 'react';
import './RingLink.css';

export default function RingLink({ data }) {
  return (
    <a
      id={data.id}
      href={data.url}
      className="ring-link flex items-center justify-center"
      style={{ background: data.color }}
      data-astro-reload
      target={data.target || '_blank'}
    >
      <h3 className="text-xs text-indigo-100 md:text-base">{data.label}</h3>
      <img
        src={data.icon.src}
        alt={data.title}
        title={data.title}
        width="90px"
        height="90px"
      />
    </a>
  );
}
