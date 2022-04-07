import React, { useState, useEffect } from "react";
import { Redirect } from "wouter";
import "Styles/Category.scss";
import useCategory from "hooks/useCategory";
import Logo from "components/Logo";
import LoadSpinner from "components/LoadSpinner";
import Subcategory from "components/Subcategory";
//import useSEO from "hooks/useSEO";
import { Helmet } from "react-helmet";
export default function Category({ params }) {
    const name = decodeURI(params.name);

    const { subcategories, loading, isError } = useCategory(name);

    // useSEO({
    //     description: `In the category "${name}" you can find ${subcategories.subcategories.map(
    //         (subcategory) => ` "${subcategory.name}"`
    //     )} tags GIFS`,
    //     title: `${name}`,
    // });

    return (
        <div className="Category">
            <Helmet>
                <title>{name} | GixxyGifs</title>
                <meta
                    name="description"
                    content={`In the category "${name}" you can find ${subcategories.subcategories.map(
                        (subcategory) => ` "${subcategory.name}"`
                    )} tags GIFS`}
                />
            </Helmet>
            <Logo />
            <h1 className="Category-title">{name}</h1>
            {loading ? (
                <LoadSpinner />
            ) : isError ? (
                <Redirect to="/404" />
            ) : (
                <div className="Category-list">
                    {subcategories.subcategories.map((subcategory) => (
                        <Subcategory
                            key={subcategory.name}
                            name={subcategory.name}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
