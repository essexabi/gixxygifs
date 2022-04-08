import React from "react";
import { Link } from "wouter";

import "Styles/GifList.scss";

import useGlobalMode from "hooks/useGlobalMode";
import useGlobalGif from "hooks/useGlobalGif";
import Gif from "components/Gif";

function GifList(props) {
    const gifs = useGlobalGif();
    const adultMode = useGlobalMode();
    const link = "/gif/";
    const randomId = props.id + Math.floor(Math.random() * (99 - 1)) + 1;
    
    return (
        <>
            {gifs.map(({ id, title, url, height, width }) => (
                <div
                    className="GifItem"
                    style={{ "--ratio": height / width }}
                    key={randomId}
                >
                    <Link to={link.concat(id)}>
                        <a className="active" >
                            <Gif id={id} title={title} url={url} />
                        </a>
                    </Link>
                </div>
            ))}


        </>
    );
}

export default GifList;
