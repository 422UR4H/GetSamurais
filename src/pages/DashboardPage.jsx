import { useEffect, useState } from "react";
import AddButton from "../components/atoms/AddButton.jsx";
import MainTemplate from "../components/templates/MainTemplate.jsx";
import api from "../services/api.js";
import useToken from "../hooks/useToken.js";
import ServicesContainer from "../components/atoms/ServicesContainer.jsx";
import ServiceItem from "../components/atoms/ServiceItem.jsx";
import Overlay from "../components/atoms/Overlay.jsx";
import ServiceForm from "../components/molecules/ServiceForm.jsx";
import useForm from "../hooks/useForm.js";
import { useNavigate } from "react-router-dom";


export default function DashboardPage() {
    const navigate = useNavigate();
    const [services, setServices] = useState();
    const [serviceId, setServiceId] = useState("");
    const [showForm, setShowForm] = useState(0);
    const { token } = useToken();
    const { form, handleForm } = useForm({
        name: "",
        serviceDescription: "",
        price: "",
        paymentDescription: ""
    });

    useEffect(() => {
        if (!token) navigate("/");

        api.getServicesByUser(token)
            .then(({ data }) => setServices(data.services))
            .catch((err) => console.log(err));
    }, []);

    function handleAddClick() {
        setShowForm(1);
    }

    function addService(newService) {
        console.log(newService)
        setServices([...services, newService])
    }

    function handleOverlayClick() {
        setShowForm(0);
        navigate("/visao-geral");
    }

    return (
        <MainTemplate>
            {services?.length > 0 &&
                <ServicesContainer textHeader="Seu(s) Serviço(s)">
                    {services.map((s) => (
                        <ServiceItem key={s.id} onClick={() => navigate(`/servico/${s.id}`)} service={s} />
                    ))}
                </ServicesContainer>
            }

            <AddButton onClick={handleAddClick} />
            {showForm > 0 &&
                <>
                    <Overlay onClick={handleOverlayClick} />
                    {showForm === 1 &&
                        <ServiceForm
                            form={form}
                            handleForm={handleForm}
                            addService={addService}
                            setServiceId={setServiceId}
                            setShowForm={setShowForm}
                        />
                    }
                    {/* {showForm === 2 &&
                        <PhotosForm serviceId={serviceId} setShowForm={setShowForm}
                    } */}
                </>
            }
        </MainTemplate>
    );
}
