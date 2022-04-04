import React, { useEffect, useState } from "react";

import "Styles/DetailGif.scss";

import useGlobalGif from "hooks/useGlobalGif";

import Logo from "components/Logo";
import GifDetail from "components/GifDetail";

export default function Detail({ params }) {
    const gifs = useGlobalGif();
    


    useEffect(()=>{

        window.scrollTo(0, 0);

        const gif = gifs.find((gif) => gif.id === params.id);

        return gif;
    
    }, [gifs, params.id])
    

    
    return (
        <>
            <Logo />

            <GifDetail {...gif}/>
           
        </>
    );
}
