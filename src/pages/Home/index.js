import React from "react";

import "Styles/Home.scss";
import useTrendingGifsLauncher from "hooks/useTrendingGifsLauncher";
import LoadSpinner from "components/LoadSpinner";
import GifList from "components/GifList";
import TrendingSearches from "components/TrendingSearches";
import Categories from "components/Categories";
import Logo from "components/Logo";
export default function Home() {
    const { loading, gifs, setPage } = useTrendingGifsLauncher();
    const handleNextPage=() => setPage( prevPage => prevPage + 1 );



    return (
        <div className="Home">
            <TrendingSearches />
            <Logo />

            <div className="GifList" id="GifList">
                <div className="ListTitle" name="title">
                    <h1>Trending GIFs</h1>
                </div>

                {loading ? (
                    <LoadSpinner />
                ) : (
                    <>
                        <GifList gifs={gifs} />
                    </>
                )}
                <div className="pagination">
                <button onClick={handleNextPage}>GIF me more!</button>
                </div>
            </div>
            <div className="SearchAndCategories">
                <Categories />
            </div>
        </div>
    );
}
