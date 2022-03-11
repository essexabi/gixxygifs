import { useEffect, useContext } from "react";
import getCategories from "services/getCategories";
import CategoriesContext from "context/CategoriesContext";

export default function useCategories() {
    const {categories, setCategories} = useContext(CategoriesContext)
    useEffect(() => {
        getCategories()
            .then(setCategories)
    }, [setCategories]);

    return categories;
}