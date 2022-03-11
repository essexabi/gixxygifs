import React, {useContext} from "react";
import CategoriesContext from "context/CategoriesContext";

export default function useGlobaGif(){
    const { categories } = useContext(CategoriesContext);
    return categories;
}