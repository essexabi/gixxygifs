import React, {useContext} from "react";
import ModeContext from "context/ModeContext";

export default function useGlobalMode(){
    const { adultMode } = useContext(ModeContext);

    return adultMode;
}