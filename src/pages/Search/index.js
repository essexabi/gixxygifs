import React, { useCallback, useRef, useEffect } from "react";
import debounce from "just-debounce-it";

import "Styles/Search.scss";

import { useGifsLauncher } from "hooks/useGifsLauncher";
import useNearScreen from "hooks/useNearScreen";

import LoadSpinner from "components/LoadSpinner";
import GifList from "components/GifList";
import Logo from "components/Logo";
//import useSEO from "hooks/useSEO";
import { Helmet } from "react-helmet";

export default function Search({ params }) {
    const { keyword } = params;

    const { loading, gifs, setPage } = useGifsLauncher({ keyword });
    const externalReference = useRef();
    const { isNearScreen } = useNearScreen({
        externalReference: loading ? null : externalReference,
        once: false,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debounceHandleNextPage = useCallback(
        debounce(() => {
            return setPage((prevPage) => prevPage + 1);
        }, 200),
        [setPage]
    );

    const title = gifs ? `${gifs.length} gifs for ${decodeURI(keyword)}` : "";
    //useSEO({
    //   title: `${title}`,
    //});

    useEffect(
        function () {
            if (isNearScreen) debounceHandleNextPage();
        },
        [debounceHandleNextPage, isNearScreen]
    );

    return (
        <div className="Search">
            <Helmet>
                <title>{title} | GixxyGifs</title>
                <meta name="description" content={`${title} results.`} />
            </Helmet>
            <Logo />

            <div className="GifList" id="GifList">
                <div className="ListTitle">
                    <h1>{decodeURI(keyword)}</h1>
                </div>
                {loading ? (
                    <LoadSpinner />
                ) : (
                    <>
                        <GifList gifs={gifs} />
                        <div id="visor" ref={externalReference}></div>
                    </>
                )}
            </div>
        </div>
    );
}
