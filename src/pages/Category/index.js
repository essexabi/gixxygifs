import React from "react";

import "Styles/Category.scss";
import useGlobalCategories from "hooks/useGlobalCategories";
import Logo from "components/Logo";
import Subcategory from "components/Subcategory";

export default function Category({ params }) {
    const name = decodeURI(params.name)

    const categories = useGlobalCategories();
    const category = categories.find((category) => category.name === name);

    //console.log(name)
    //console.log(categories)
    //console.log(category)
    window.scrollTo(0, 0);

    return (
        <div className="Category">
            <Logo />
            <h1 className="Category-title">{name}</h1>

            <div className="Category-list">

                {category.subcategories.map((subcategory) => (
                    
                    <Subcategory name={subcategory.name}/>
                      
                ))}
            </div>
        </div>
    );
}
