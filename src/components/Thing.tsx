
import React from 'react';
import './Thing.css';

export default function Thing({data}) {
    return (
        <a id={data.id} href={data.url ? data.url : ""} target={data.url ? '_blank' : '' } className="thing flex items-center justify-center" style={{ background: data.color }}>
            <img src={data.icon} alt={data.title} title={data.title} />
        </a>
    )
}

