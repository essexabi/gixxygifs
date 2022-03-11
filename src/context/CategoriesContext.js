import React, { useState } from "react";

const CategoriesContext = React.createContext({});

export function CategoriesContextProvider({ children }) {
    const [categories, setCategories] = useState([]);
    return (
        <CategoriesContext.Provider value={{ categories, setCategories }}>
            {children}
        </CategoriesContext.Provider>
    );
}

export default CategoriesContext;