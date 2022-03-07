import React from "react";

import {Link} from "wouter";
import useTrendingTags from "hooks/useTrendingTags";
import "Styles/TrendingSearchs.scss"

export default function TrendingSearchs(){

    const trends = useTrendingTags();

    return (
        <div className="TrendingSearchs">
            <h3 className="TrendingSearchs-title">Top global searches</h3>
            <ul className="TrendingSearchs-list">
                {trends.map((trend) => (
                    <li key={trend}>
                        <Link
                            className="TrendingSearchs-link"
                            to={`/search/${trend}`}
                        >
                            {trend}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}