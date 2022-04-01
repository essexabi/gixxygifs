import React from "react";

import "Styles/GifList.scss";

import { Link } from "wouter";
import useGlobalMode from "hooks/useGlobalMode";
import useGlobalGif from "hooks/useGlobalGif";


function GifList(props) {
    const gifs = useGlobalGif();
    const adultMode = useGlobalMode();
    const link = "/gif/";
    return (
        <>
          

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

                
        

        </>
    );
}

export default GifList;
