import React, { useState } from "react";
import { useLocation } from "wouter";
import searchPng from "./images/search.png";
import "../Styles/Searcher.scss";
const Searcher = () => {
    const [keyword, setKeyword] = useState("");
    const [currentPath, toPath]  = useLocation();
    const handleSubmit = (event) => {
        event.preventDefault()

        currentPath.includes(`search/`)
        ? toPath(keyword)
        : toPath(`/search/${keyword}`)
    }

    const handleChange = (event) => {
        setKeyword(event.target.value)
    }

    return (
        <div className="search">
            <div className="searchIcon">
                <img src={searchPng} alt="" />
            </div>
            <form onSubmit={handleSubmit} >
                <input
                    onChange={handleChange}
                    type="text"
                    name="q"
                    value={keyword}
                    placeholder="Search your gif !"
                />
            </form>
        </div>
    );
};

export default Searcher;
