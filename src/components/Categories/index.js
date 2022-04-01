import React, { Suspense } from "react";

import "Styles/Categories.scss";
import LoadSpinner from "components/LoadSpinner"
import useNearScreen from "hooks/useNearScreen";

const Categories = React.lazy(() => import("./Categories"));

export default function LazyCategories() {
    const { isNearScreen, reference } = useNearScreen({ distance: "100px" });
    console.log(reference);
    return (
        <div ref={reference}>
            <Suspense fallback={<LoadSpinner />}>{isNearScreen ? <Categories /> : <LoadSpinner />}</Suspense>
        </div>
    );
}
