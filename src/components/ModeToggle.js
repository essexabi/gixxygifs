import React, { useContext } from "react";

import ModeContext from "context/ModeContext";

import Toggle from "react-toggle";
import "Styles/ModeToggle.scss";

const ModeToggle = () => {

    const {adultMode, setAdultMode} = useContext(ModeContext);

    const onChange = () => {
        setAdultMode(!adultMode ? true : false)
    }


    return (
        <div className="modeToggle">
            <span>Adult mode</span>
            <Toggle
                defaultChecked={adultMode}
                className="adultMode"
                aria-label="Adult Mode"
                onChange={onChange}
            />
        </div>
    );
};

export default ModeToggle;
