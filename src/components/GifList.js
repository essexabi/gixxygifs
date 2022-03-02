import React, { useContext } from "react";

import "../Styles/GifList.scss";

import { Link } from "wouter";
import ModeContext from "./context/ModeContext";
import GifContext from "./context/GifContext";

import Logo from "./Logo";

function GifList(props) {
    const { adultMode } = useContext(ModeContext);
    const { gifs } = useContext(GifContext);
    console.log(adultMode);
    const link = "/gif/";
    return (
        <>
            <Logo />

            <div className="GifList" id="GifList">



                {gifs.map(({ id, title, url, height, width }) => (
                    <div
                        className="GifItem"
                        key={id}
                        style={{ "--ratio": height / width }}
                    >

                        <Link to={link.concat(id)}>
                            <a className="active">
                                <img
                                    loading="lazy"
                                    className="GifItemImage"
                                    src={url}
                                    alt={title}
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
