import React, { useContext } from "react";

import "../../Styles/DetailGif.scss";

import GifContext from "../../components/context/GifContext";

import Logo from "../../components/Logo";

export default function Detail({ params }) {
    const { gifs } = useContext(GifContext);
    console.log(params.id);

    const gif = gifs.find((gif) => gif.id === params.id);

    return (
        
            
            <div className="DetailGif">
                <Logo />

                <h1 style={{ color: "white" }}>{gif.title}</h1>
                <img src={gif.url} alt={gif.title} />

            </div>
        
    );
}
