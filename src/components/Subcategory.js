import React, { useEffect } from "react";
import { Link } from "wouter";
import "Styles/Category.scss";
import useSubGif from "hooks/useSubGif";

export default function Subcategory(props) {
    const gif = useSubGif(props.name); 
    
    return (
        <Link className="Category-link" to={`/search/${props.name}`} key="pprops.name">
            <a>
                <div
                    className="Category-item"
                    style={{ "--url": "url('"+ gif[0].url+"')" }}
                >
                    <h3>{props.name}</h3>
                </div>
            </a>
        </Link>
    );
}
