import React from 'react';
import './Thing.css';

export default function Thing({ data }) {
  return (
    <a
      id={data.id}
      href={data.url ? data.url : ''}
      target={data.url ? '_blank' : ''}
      className="thing flex items-center justify-center"
      style={{ background: data.color }}
    >
      <h3 className="text-xs text-indigo-100 md:text-base">{data.label}</h3>
      <img
        src={data.icon}
        alt={data.title}
        title={data.title}
        width="90px"
      />
    </a>
  );
}
