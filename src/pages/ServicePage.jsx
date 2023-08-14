import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import api from "../services/api.js";
import samuraiPng from "../images/guerreiro-samurai-japones.png";
import Form from "../components/atoms/Form.jsx";
import Input from "../components/styles/Input.js";
import Select from "../components/styles/Select.js";
import Textarea from "../components/styles/Textarea.js";
import Checkbox from "../components/styles/Checkbox.js";
import ButtonSubmit from "../components/atoms/ButtonSubmit.jsx";
import useForm from "../hooks/useForm.js";
import useCategories from "../hooks/useCategories.js";
import Header from "../components/molecules/Header.jsx";
import dayjs from "dayjs";
import useToken from "../hooks/useToken.js";


export default function ServicePage() {
    const [selectedCategory, setSelectedCategory] = useState('Categoria');
    const [availableStatus, setAvailableStatus] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [service, setService] = useState();
    const { id } = useParams();
    const { token } = useToken();
    const { categories } = useCategories();
    const { form, setForm, handleForm } = useForm({
        name: "",
        serviceDescription: "",
        price: "",
        paymentDescription: ""
    });
    const navigate = useNavigate();

    useEffect(() => {
        //         alert(`Este serviço foi marcado como indisponível
        // Lembre-se de marcá-lo como disponível ao salvar!`);

        api.getServicesById(id)
            .then(({ data }) => {
                const {
                    service,
                    serviceDescription,
                    price,
                    paymentDescription,
                    status,
                    category
                } = data.service;

                setForm({
                    name: service,
                    price,
                    serviceDescription: serviceDescription || "",
                    paymentDescription: paymentDescription || ""
                })
                console.log(status)
                setAvailableStatus(status);
                setSelectedCategory(category)
                setService(data.service);
            })
            .catch((err) => console.log(err));

    }, []);
    console.log(service)
    console.log(availableStatus)


    function handleSubmit(e) {
        e.preventDefault();

        if (isLoading) return;
        setIsLoading(true);

        const { name, serviceDescription, price, paymentDescription } = form;
        const service = { name, serviceDescription, price, paymentDescription, status: availableStatus };
        const body = {
            service,
            categories: { category: selectedCategory }
        };
        if (paymentDescription === '') delete body.service.paymentDescription;

        api.updateService(body, token, id)
            .then(() => {
                alert("Serviço atualizado com sucesso!");
                navigate("/visao-geral");
            })
            .catch((err) => {
                console.log(err);
                alert(err.response.data);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <StyledServicePage>
            <Header />
            <Form onSubmit={handleSubmit}>
                <Input
                    name="name"
                    type="text"
                    placeholder="Nome do serviço"
                    value={form.name}
                    onChange={handleForm}
                    maxLength={32}
                    required
                />
                <Select
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                >
                    {categories?.map((c) => (
                        <option key={c.id} value={c.category}>{c.category}</option>
                    ))}
                </Select>
                <Textarea
                    name="serviceDescription"
                    type="text"
                    placeholder="Descrição"
                    value={form.serviceDescription}
                    onChange={handleForm}
                    maxLength={255}
                />
                <Input
                    name="price"
                    type="number"
                    placeholder="Preço em centavos"
                    value={form.price}
                    onChange={handleForm}
                    min={1}
                    required
                />
                <Textarea
                    name="paymentDescription"
                    type="text"
                    placeholder="Método de recebimento"
                    value={form.paymentDescription}
                    onChange={handleForm}
                    maxLength={255}
                />
                <Checkbox>
                    <label htmlFor="status">Serviço disponível</label>
                    <input
                        id="status"
                        name="status"
                        type="checkbox"
                        defaultChecked="true"
                        value={availableStatus}
                        onChange={() => setAvailableStatus(!availableStatus)}
                    />
                </Checkbox>
                <label>Criado em {dayjs(service?.createdAt).format("DD/MM/YYYY")}</label>
                <ButtonSubmit disabled={isLoading}>
                    Salvar Alterações
                </ButtonSubmit>
            </Form>
        </StyledServicePage>
    );
}

const StyledServicePage = styled.div`
    background-image: url(${samuraiPng});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: calc(100vh - 80px);
    padding-block: 20px 70px;
    padding-inline: 20px;
    margin-block: 70px 10px;
    opacity: 0.99;

    overflow: hidden;
    
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: rgba(0, 0, 0, 0.65);
        z-index: -1;
    }

    label {
        color: white;
    }
    button {
        margin-top: 0;
    }
`;