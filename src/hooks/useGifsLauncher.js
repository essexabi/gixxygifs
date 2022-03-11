import { useEffect, useState, useContext } from "react";

import getGifs from "services/getGifs";
import ModeContext from "context/ModeContext";
import GifContext from "context/GifContext";

export default function useGifsLauncher({ keyword }) {
    const [loading, setLoading] = useState(false);
    const { gifs, setGifs } = useContext(GifContext);
    const { adultMode } = useContext(ModeContext);

    useEffect(() => {
        setLoading(true);
        getGifs({ keyword }, adultMode).then((gifs) => {
            setGifs(gifs);
            setLoading(false);
        });



    }, [keyword, adultMode, setGifs]);

    return { loading, gifs, keyword };
}
