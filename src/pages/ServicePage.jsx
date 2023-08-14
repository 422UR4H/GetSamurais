import { useParams } from "react-router-dom";
import MainTemplate from "../components/templates/MainTemplate.jsx";
import { useEffect } from "react";

export default function ServicePage() {
    const { id } = useParams();

    useEffect(() => {
        
    }, []);

    return (
        <MainTemplate>
            
        </MainTemplate>
    );
}