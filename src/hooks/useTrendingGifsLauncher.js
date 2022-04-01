import {useEffect, useState, useContext} from "react";

import ModeContext from "context/ModeContext";
import GifContext from "context/GifContext";

import getTrendingGifs from "services/getTrendingGifs";

const INITIAL_PAGE = 0;
export default function useTrendingGifsLauncher(){

    const [loading, setLoading] = useState(false);
    const [loadingNextPage, setLoadingNextPage] = useState(false);
    const [page, setPage] = useState(INITIAL_PAGE);
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

    useEffect(()=>{
        
        if(page === INITIAL_PAGE) return
        setLoadingNextPage(true);
        getTrendingGifs({adultMode, page})
        .then(nextGifs =>{
            setGifs(prevGifs=>prevGifs.concat(nextGifs))
            setLoadingNextPage(false);
        }
        )
    }, [adultMode, page, setGifs])

    

    return {loading, loadingNextPage, setPage,  gifs}

}