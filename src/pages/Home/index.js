import React from "react";

import useTrendingGifsLauncher from "../../components/hooks/useTrendingGifsLauncher";
import LoadSpinner from "../../components/LoadSpinner";
import GifList from "../../components/GifList";
export default function Home() {
    
    const {loading, gifs} = useTrendingGifsLauncher();

    if (loading) return <LoadSpinner />
    return (
        
        <GifList gifs={gifs}/>
        
    );
}
