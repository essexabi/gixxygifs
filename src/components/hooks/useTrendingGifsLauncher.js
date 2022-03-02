import {useEffect, useState, useContext} from "react";

import ModeContext from "../context/ModeContext";
import GifContext from "../context/GifContext";

import getTrendingGifs from "../../components/services/getTrendingGifs";

export default function useTrendingGifsLauncher(){

    const [loading, setLoading] = useState(false);
    const {gifs, setGifs} = useContext(GifContext);
    const {adultMode} = useContext(ModeContext);

    //const {keyword} = {keyword: "crazy loop"};
    useEffect(() => {
        setLoading(true)
        getTrendingGifs(adultMode).then((gifs) => {
            setGifs(gifs)
            setLoading(false)
        });
    }, [adultMode, setGifs]);

    return {loading, gifs}

}