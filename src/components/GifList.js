import React from "react";

import "Styles/GifList.scss";

import { Link } from "wouter";
import useGlobalMode from "hooks/useGlobalMode";
import useGlobalGif from "hooks/useGlobalGif";

import Logo from "./Logo";

function GifList(props) {
    const gifs = useGlobalGif();
    const adultMode = useGlobalMode();
    console.log(adultMode);
    const link = "/gif/";
    return (
        <>
            <Logo />
            <div className="ListTitle"><h1>{decodeURI(props.listTitle)}</h1></div>

            <div className="GifList" id="GifList">
                {gifs.map(({ id, title, url, height, width }) => (
                    
                        <div
                            className="GifItem"
                            style={{ "--ratio": height / width }}
                            key={id}
                        >
                            <Link to={link.concat(id)} >
                                <a className="active">
                                    <img
                                        loading="lazy"
                                        className="GifItemImage"
                                        src={url}
                                        alt={title}
                                        key={id+"img"}

                                    />
                                </a>
                            </Link>
                        </div>
                    
                ))}
            </div>
        </>
    );
}

export default GifList;
