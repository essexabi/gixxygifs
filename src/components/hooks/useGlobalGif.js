import React, {useContext} from "react";
import GifContext from "../context/GifContext";

export default function useGlobaGif(){
    const { gifs } = useContext(GifContext);
    return gifs;
}