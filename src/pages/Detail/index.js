import React, { useEffect, useState } from "react";

import "Styles/DetailGif.scss";

import useGlobalGif from "hooks/useGlobalGif";

import Logo from "components/Logo";
import GifDetail from "components/GifDetail";

export default function Detail({ params }) {
    const gifs = useGlobalGif();
    const [gif, setGif] = useState({});

    useEffect(()=>{

        window.scrollTo(0, 0);

        setGif(gifs.find((gif) => gif.id === params.id));

    
    }, [gifs, params.id])
    

    
    return (
        <>
            <Logo />

            <GifDetail {...gif}/>
           
        </>
    );
}
