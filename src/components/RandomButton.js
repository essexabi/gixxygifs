import React, { useEffect, useState } from "react";
import { Link } from "wouter";

import "../Styles/RandomButton.scss"
import generateTags from "./services/generateTags";
import randomPng from "./images/random.png";


const RandomButton = () => {
    let url = generateTags();

    const [URLTag, SetURLTag] = useState(url);

    function randomButtonClick(){
        SetURLTag(generateTags());

    }
    
    return (
        <div className="randomButton" onClick={randomButtonClick}>
            <Link to ={URLTag}  >
                <a className="random">
                    <img src={randomPng} alt="random" />
                </a>
            </Link>
        </div>
    );
};

export default RandomButton;
