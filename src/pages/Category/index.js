import React, {useState, useEffect} from "react";

import "Styles/Category.scss";
import useGlobalCategories from "hooks/useGlobalCategories";
import Logo from "components/Logo";
import Subcategory from "components/Subcategory";

export default function Category({ params }) {
    const name = decodeURI(params.name)

    const categories = useGlobalCategories();

    const categorySubs = categories.find((category) => category.name === name);

    const storedSubcategories = localStorage.getItem("subcategories");

    const subcategoriesCache = categorySubs || JSON.parse(storedSubcategories);

    const [subcategories, setSubcategories] = useState(subcategoriesCache);
    
    useEffect(()=>{
    
        window.scrollTo(0, 0);

        setSubcategories(subcategories);
        

        localStorage.setItem("subcategories", JSON.stringify(subcategories));

    }, [subcategories])

    return (
        <div className="Category">
            <Logo />
            <h1 className="Category-title">{name}</h1>

            <div className="Category-list">

                {subcategoriesCache.subcategories.map((subcategory) => (
                    
                    <Subcategory key={subcategory.name} name={subcategory.name}/>
                      
                ))}
            </div>
        </div>
    );
}
