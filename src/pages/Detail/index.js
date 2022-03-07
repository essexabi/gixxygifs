import React from "react";

import "Styles/DetailGif.scss";

import useGlobalGif  from "hooks/useGlobalGif";

import Logo from "components/Logo";

export default function Detail({ params }) {
    console.log(params.id);

    const gifs = useGlobalGif();

    const gif = gifs.find((gif) => gif.id === params.id);

    return (
        
        <>    
            <Logo />
            <div className="DetailGif">

                <h1 style={{ color: "white" }}>{gif.title}</h1>
                <img src={gif.url} alt={gif.title} />

            </div>
            </>
    );
}
