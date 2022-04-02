import React from "react";
import { Link } from "wouter";

function Gif(props) {
    const link = "/gif/";
    const randomId = props.id + Math.floor(Math.random() * (99 - 1)) + 1;
    return (
        <Link to={link.concat(props.id)}>
            <a className="active">
                <img
                    loading="lazy"
                    className="GifItemImage"
                    src={props.url}
                    alt={props.title}
                    key={randomId}
                />
            </a>
        </Link>
    );
}

export default React.memo(Gif, (prevProps, nextProps) => {
    return prevProps.id === nextProps.id;
});
