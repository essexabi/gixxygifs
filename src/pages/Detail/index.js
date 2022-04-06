import React, { useEffect, useState} from "react";

import "Styles/DetailGif.scss";

import useGlobalGif from "hooks/useGlobalGif";
import Logo from "components/Logo";
import GifDetail from "components/GifDetail";

export default function Detail({ params }) {
    const  gifs = useGlobalGif();

    const singleGif = gifs.find((gif) => gif.id === params.id);

    const storedGif = localStorage.getItem("gif");

    const gifCache =  singleGif || JSON.parse(storedGif);

    const [gif, setGif] = useState(gifCache);

    useEffect(() => {

        window.scrollTo(0, 0);

        setGif(gif);

        localStorage.setItem("gif", JSON.stringify(gif));
        
    }, [gif]);

    return (
        <div className="DetailGif">
            <Logo />
            <GifDetail {...gif} />
        </div>
    );
}
