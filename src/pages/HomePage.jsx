import useToken from "../hooks/useToken.js";
import MainTemplate from "../components/templates/MainTemplate.jsx";
import ServicesContainer from "../components/atoms/ServicesContainer.jsx";
import { useEffect, useState } from "react";
import api from "../services/api.js";
import ServiceItem from "../components/atoms/ServiceItem.jsx";
import Presentation from "../components/atoms/Presentation.jsx";
import Counts from "../components/atoms/Counts.jsx";
import SignUpCard from "../components/molecules/SignUpCard.jsx";
import ServiceInfo from "../components/atoms/ServiceInfo.jsx";
import Overlay from "../components/atoms/Overlay.jsx";


export default function HomePage() {
    const [serviceAllInfo, setServiceAllInfo] = useState(undefined);
    const [showService, setShowServce] = useState(false);
    const [services, setServices] = useState(undefined);
    const { token } = useToken();

    useEffect(() => {
        // get rank services
        api.getAllServices()
            .then(({ data }) => setServices(data.services))
            .catch((err) => console.log(err));
    }, []);

    function handleClick(id) {
        api.getServiceAllInfo(id)
            .then(({ data }) => {
                setServiceAllInfo(data.service);
                setShowServce(true);
            })
            .catch((err) => console.log(err));
    }

    return (
        <MainTemplate>
            {/* <ServicesContainer textHeader="Serviços mais procurados">
                put rank services
            </ServicesContainer> */}
            {/* <ServicesContainer textHeader="Melhores serviços">
                put rank services
            </ServicesContainer> */}

            {showService &&
                <>
                    <Overlay onClick={() => setShowServce(false)} />
                    <ServiceInfo serviceAllInfo={serviceAllInfo} />
                </>
            }

            <Presentation />
            {!token && <SignUpCard />}

            {services?.length > 0 &&
                <ServicesContainer textHeader="Serviços disponíveis">
                    {services.map((s) => (
                        <ServiceItem key={s.id} onClick={() => handleClick(s.id)} service={s} />
                    ))}
                </ServicesContainer>
            }
            <Counts />
            {!token && <SignUpCard />}
        </MainTemplate>
    );
}
