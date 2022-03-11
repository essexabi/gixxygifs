import React from "react";

import "Styles/Home.scss";
import useTrendingGifsLauncher from "hooks/useTrendingGifsLauncher";
import LoadSpinner from "components/LoadSpinner";
import GifList from "components/GifList";
import TrendingSearches from "components/TrendingSearches";
import Categories from "components/Categories";
export default function Home() {
    const { loading, gifs } = useTrendingGifsLauncher();

    window.scrollTo(0, 0);

    if (loading)  return <LoadSpinner />;

    return (
        
        <div className="Home">
            <TrendingSearches />
            <GifList gifs={gifs} listTitle="Trending GIFs" />
            <Categories />
        </div>
    );
}
