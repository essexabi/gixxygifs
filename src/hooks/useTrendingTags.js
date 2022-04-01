import { useEffect, useState } from "react"
import getTrendingTags from "services/getTrendingTags";

export default function useTrendingTags() {
    const [trends, setTrends] = useState([])

    useEffect(() => {
        getTrendingTags()
            .then(setTrends);
        return () => setTrends([])
    }, [])

    return trends
}

