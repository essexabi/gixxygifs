import React from "react";

import "Styles/Search.scss";
import useGifsLauncher from "hooks/useGifsLauncher";

import LoadSpinner from "components/LoadSpinner";
import GifList from "components/GifList";

function Search({ params, value }) {
    const { keyword } = params;
    const { loading, gifs } = useGifsLauncher({ keyword });
    if (loading) return <LoadSpinner />;

    window.scrollTo(0, 0);

    return (
        <>
            <div className="Search">
                <GifList gifs={gifs} listTitle={keyword} />
            </div>
        </>
    );
}

export default Search;
