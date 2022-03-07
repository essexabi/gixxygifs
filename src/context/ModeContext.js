import React, { useState } from "react";

const ModeContext = React.createContext({});

export function ModeContextProvider({ children }) {
    const [adultMode, setAdultMode] = useState(false);

    return (
        <ModeContext.Provider value={{ adultMode, setAdultMode }}>
            {children}
        </ModeContext.Provider>
    );
}

export default ModeContext;
