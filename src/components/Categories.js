import React from "react";

import {Link} from "wouter";

import "Styles/Categories.scss";
import useCategories from "hooks/useCategories";
export default function Categories() {
    const categories = useCategories();
    return (
        <div className="Categories">
            <h1 className="Categories-title">Categories</h1>
            {categories.map((category) => (
                <Link to={"/category/" + category.name} key={category.gif.id}>
                    <a>
                    <div className="CategoryLink" style={{"--url": "url('" + category.gif.images.downsized.url + "')"}} >
                        <h3 className="CategoryLink-title">{category.name}</h3>               
                    </div>
                    </a>
                </Link>
            )
                
            )}

        </div>
    );
}
