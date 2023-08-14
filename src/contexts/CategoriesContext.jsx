import { createContext, useState } from "react";

const CategoriesContext = createContext();

export function CategoriesProvider({ children }) {
    const lsCategories = JSON.parse(localStorage.getItem("categories"));
    const [categories, setCategories] = useState(lsCategories?.categories);

    function putCategories(data) {
        setCategories(data.categories);
        localStorage.setItem("categories", JSON.stringify(data));
    }

    return (
        <CategoriesContext.Provider value={{ categories, putCategories }}>
            {children}
        </CategoriesContext.Provider>
    );
}

export default CategoriesContext;