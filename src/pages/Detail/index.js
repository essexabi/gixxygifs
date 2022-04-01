import React, { useEffect, useState } from "react";

import "Styles/DetailGif.scss";

import useGlobalGif from "hooks/useGlobalGif";

import Logo from "components/Logo";
import Gif from "components/Gif";

export default function Detail({ params }) {
    

    const gifs = useGlobalGif();


    const gif = gifs.find((gif) => gif.id === params.id);
    
    window.scrollTo(0, 0);

    
    return (
        <>
            <Logo />

            <Gif {...gif}/>
           
        </>
    );
}
