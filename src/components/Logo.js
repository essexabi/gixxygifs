import React from "react";
import { Link } from "wouter";

import "../Styles/Logo.scss"
const Logo = () => {
    return (
        <div className="logo">         
                <Link className="logoLink" to="/home"><a className="logoLink">Gixxy<span>gifs</span></a></Link>
        </div>
    )
}

export default Logo;