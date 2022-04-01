import { Link } from "wouter";
import useTrendingTags from "hooks/useTrendingTags";
export default function TrendingSearches() {
    const trends = useTrendingTags();

    return (
        <div className="TrendingSearches">
            <h3 className="TrendingSearches-title">Top global searches</h3>
            <ul className="TrendingSearches-list">
                {trends.map((trend) => (
                    <li key={trend}>
                        <Link
                            className="TrendingSearches-link"
                            to={`/search/${trend}`}
                        >
                            {trend}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
