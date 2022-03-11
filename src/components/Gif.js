import React from 'react'

export default function Gif ({ id, title, url }) {
    return (
        <div className="DetailGif">
        <h1 style={{ color: "white" }}>{title}</h1>
        <img src={url} alt={title} />
    </div>
    );
}
 