import {useEffect, useState} from "react";


import getSubGif from "services/getSubGif";

export default function useSubGif(name){
    const [gif, setGif] = useState([{}]);

    useEffect(()=>{

        getSubGif(name).then(setGif)

 

    },[name])


    return gif;
}