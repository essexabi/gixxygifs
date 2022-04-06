import { useEffect, useState, useContext } from "react";

import getGifs from "services/getGifs";
import ModeContext from "context/ModeContext";
import GifContext from "context/GifContext";

const INITIAL_PAGE = 0;
export function useGifsLauncher({ keyword } = {keyword: null}) {
    const [loading, setLoading] = useState(false);
    const [loadingNextPage, setLoadingNextPage] = useState(false);
    const [page, setPage] = useState(INITIAL_PAGE);
    const { gifs, setGifs } = useContext(GifContext);
    const { adultMode } = useContext(ModeContext);

    const keywordToUse = keyword || localStorage.getItem('lastKeyword')

    useEffect(() => {
        setLoading(true);
        getGifs({ keyword: keywordToUse, adultMode }).then((gifs) => {
            setGifs(gifs);
            setLoading(false);
            localStorage.setItem('lastKeyword', keyword)
        });



    }, [keyword, keywordToUse, adultMode, setGifs]);

    useEffect(()=>{
        
        if(page === INITIAL_PAGE) return
        setLoadingNextPage(true);
        getGifs({keyword: keywordToUse, adultMode, page})
        .then(nextGifs =>{
            setGifs(prevGifs=>prevGifs.concat(nextGifs))
            setLoadingNextPage(false);
        }
        )
    }, [keywordToUse, adultMode, page, setGifs])

    return { loading, loadingNextPage, gifs, keyword, setPage};
}


