import React from "react";

import "Styles/Home.scss";
import useTrendingGifsLauncher from "hooks/useTrendingGifsLauncher";
import LoadSpinner from "components/LoadSpinner";
import GifList from "components/GifList";
import TrendingSearches from "components/TrendingSearches";
import Categories from "components/Categories";
import Logo from "components/Logo";
import { Helmet } from "react-helmet";
export default function Home() {
    // useSEO({
    //     description: "GixxyGifs is a gif searcher that helps you to find gifs easily. Navigate over the categories section or choose a gif among the trending gifs.",
    //     title: "Home",
    // });
    const { loading, gifs, setPage } = useTrendingGifsLauncher();
    const handleNextPage = () => setPage((prevPage) => prevPage + 1);

    return (
        <div className="Home">
            <Helmet>
                <title>Home | GixxyGifs</title>
                <meta
                    name="description"
                    content="GixxyGifs is a gif searcher that helps you to find gifs easily. Navigate over the categories section or choose a gif among the trending gifs."
                />
            </Helmet>
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
