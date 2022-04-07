import React, {useState, useEffect} from "react";

import "Styles/Category.scss";
import useGlobalCategories from "hooks/useGlobalCategories";

export default function Category(name) {
    const [loading, setLoading] = useState(false);

    const [isError, setIsError] = useState(false);

    const categories = useGlobalCategories();

    const categorySubs = categories.find((category) => category.name === name);

    const storedSubcategories = localStorage.getItem("subcategories");

    const subcategoriesCache = categorySubs || JSON.parse(storedSubcategories);

    const [subcategories, setSubcategories] = useState(subcategoriesCache);
    
    useEffect(()=>{
    
        window.scrollTo(0, 0);
        try{if(!subcategories){
            setLoading(true)
        } else {
            setLoading(false);
            setSubcategories(subcategories);
            setIsError(false);
        }} catch {
            setLoading(false);
            setIsError(true);
        }
        

        localStorage.setItem("subcategories", JSON.stringify(subcategories));

    }, [subcategories])

    return {subcategories, loading, isError};
}
