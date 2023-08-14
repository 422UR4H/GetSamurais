import { useContext } from "react";
import CategoriesContext from "../contexts/CategoriesContext.jsx";

export default function useCategories() {
    return useContext(CategoriesContext);
}