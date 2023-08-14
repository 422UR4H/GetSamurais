import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainTemplate from "../components/templates/MainTemplate.jsx";
import api from "../services/api.js";


export default function ServicePage() {
    const [service, setService] = useState();
    const { id } = useParams();

    useEffect(() => {
        api.getServicesById(id)
            .then(({ data }) => setService(data.service))
            .catch((err) => console.log(err));
    }, []);

    return (
        <MainTemplate>
            
        </MainTemplate>
    );
}