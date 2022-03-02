import React from "react";
import "../Styles/NavBar.scss";
import Logo from "./Logo";
import ModeToggle from "./ModeToggle"
import Searcher from "./Searcher";
import RandomButton from "./RandomButton";

const NavBar = () => {
    return (
        <header className="header-wrapper-outer">
            <Logo />
            <RandomButton />
            <ModeToggle />
            <Searcher />
        </header>
    );
};

export default NavBar;
