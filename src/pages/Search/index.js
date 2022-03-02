import React from "react";

import "../../Styles/GifList.scss";
import useGifsLauncher from "../../components/hooks/useGifsLauncher";

import LoadSpinner from "../../components/LoadSpinner";
import GifList from "../../components/GifList";

function Search({ params, value }) {
    const { keyword } = params;
    const { loading, gifs } = useGifsLauncher({ keyword });
    if (loading) return <LoadSpinner />;

    return <GifList gifs={gifs} />;
}

export default Search;
