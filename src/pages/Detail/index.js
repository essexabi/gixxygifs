import React from "react";

import "Styles/DetailGif.scss";

import useDetail from "hooks/useDetail";
import Logo from "components/Logo";
import GifDetail from "components/GifDetail";
import LoadSpinner from "components/LoadSpinner";
import { Redirect } from "wouter";
//import useSEO from "hooks/useSEO";
import { Helmet } from "react-helmet";

export default function Detail({ params }) {
    const { gif, loading, isError } = useDetail(params.id);

    const title = gif ? gif.title : "";
    //useSEO({ description: `Detail of ${title} GIF`, title: title });
    return (
        <div className="DetailGif">
            <Helmet>
                <title>{title} | GixxyGifs</title>
                <meta name="description" content={`Detail of ${title} GIF`} />
            </Helmet>
            <Logo />
            {loading ? (
                <LoadSpinner />
            ) : isError ? (
                <Redirect to="404" />
            ) : !gif ? null : (
                <GifDetail {...gif} />
            )}
        </div>
    );
}
