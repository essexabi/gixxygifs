import {useEffect} from "react";

const handlePage = (page) => {

    return page
};

export default function useHandlePage(){
    
    useEffect(()=>{
        
        handlePage();
    },[]);

}
