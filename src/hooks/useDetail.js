import { useEffect, useState } from "react";

import "Styles/DetailGif.scss";

import useGlobalGif from "hooks/useGlobalGif";

export default function Detail(id) {
    const [loading, setLoading] = useState(false);

    const [isError, setIsError] = useState(false);

    const gifs = useGlobalGif();

    const singleGif = gifs.find((gif) => gif.id === id);

    const storedGif = localStorage.getItem("gif");

    const gifCache = singleGif || JSON.parse(storedGif);

    const [gif, setGif] = useState(gifCache);

    useEffect(() => {
        window.scrollTo(0, 0);

        try {
            if (!gif) {
                setLoading(true);
            } else {
                setLoading(false);
                setGif(gif);
                setIsError(false);
            }
        } catch {
            setLoading(false);
            setIsError(true);
        }

        localStorage.setItem("gif", JSON.stringify(gif));
    }, [gif]);

    return { gif, loading, isError };
}
