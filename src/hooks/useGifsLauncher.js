import { useEffect, useState, useContext } from "react";

import getGifs from "services/getGifs";
import ModeContext from "context/ModeContext";
import GifContext from "context/GifContext";

const INITIAL_PAGE = 0;
export function useGifsLauncher({ keyword }) {
    const [loading, setLoading] = useState(false);
    const [loadingNextPage, setLoadingNextPage] = useState(false);
    const [page, setPage] = useState(INITIAL_PAGE);
    const { gifs, setGifs } = useContext(GifContext);
    const { adultMode } = useContext(ModeContext);

    useEffect(() => {
        setLoading(true);
        getGifs({ keyword, adultMode }).then((gifs) => {
            setGifs(gifs);
            setLoading(false);
        });



    }, [keyword, adultMode, setGifs]);

    useEffect(()=>{
        
        if(page === INITIAL_PAGE) return
        setLoadingNextPage(true);
        getGifs({keyword, adultMode, page})
        .then(nextGifs =>{
            setGifs(prevGifs=>prevGifs.concat(nextGifs))
            setLoadingNextPage(false);
        }
        )
    }, [keyword, adultMode, page, setGifs])

    return { loading, loadingNextPage, gifs, keyword , setPage};
}


