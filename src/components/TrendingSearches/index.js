import React, { Suspense } from "react";

import useNearScreen from "hooks/useNearScreen";
import "Styles/TrendingSearches.scss";
import LoadSpinner from "components/LoadSpinner"

const TrendingSearches = React.lazy(() => import("./TrendingSearches"));

export default function LazyTrendingSearches() {
    const { isNearScreen, reference } = useNearScreen({ distance: "50px" });

    return (
        <div ref={reference}>
            <Suspense fallback={<LoadSpinner />}>{isNearScreen ? <TrendingSearches /> : <LoadSpinner />}</Suspense>
        </div>
    );
}
