import { useEffect, useState } from "react"
import getCategories from "services/getCategories";

export default function useCategories() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
            .then(setCategories)
    }, [])

    return categories;
}