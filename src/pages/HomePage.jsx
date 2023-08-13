import useToken from "../hooks/useToken.js";
import MainTemplate from "../components/templates/MainTemplate.jsx";
import ServicesContainer from "../components/atoms/ServicesContainer.jsx";
import { useEffect, useState } from "react";
import api from "../services/api.js";
import ServiceItem from "../components/atoms/ServiceItem.jsx";


export default function HomePage() {
    const [services, setServices] = useState(undefined);
    const { token } = useToken();

    useEffect(() => {
        // get rank services
        api.getAllServices()
            .then(({ data }) => setServices(data.services))
            .catch((err) => console.log(err));
    }, []);

    return (
        <MainTemplate>
            {/* <ServicesContainer textHeader="Serviços mais procurados">
                put rank services
            </ServicesContainer> */}
            {/* <ServicesContainer textHeader="Melhores serviços">
                put rank services
            </ServicesContainer> */}
            {services?.length > 0 &&
                <ServicesContainer textHeader="Serviços disponíveis">
                    {services.map((s) => <ServiceItem service={s} />)}
                </ServicesContainer>
            }
        </MainTemplate>
    );
}
