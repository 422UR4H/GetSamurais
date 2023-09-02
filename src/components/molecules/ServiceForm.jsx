import { useState } from "react";
import { styled } from "styled-components";
import api from "../../services/api.js";
import ButtonSubmit from "../atoms/ButtonSubmit.jsx";
import Form from "../atoms/Form.jsx";
import Input from "../styles/Input.js";
import FormContainer from "../atoms/FormContainer.jsx";
import Checkbox from "../styles/Checkbox.js";
import Textarea from "../styles/Textarea.js";
import useToken from "../../hooks/useToken.js";
import useCategories from "../../hooks/useCategories.js";
import Select from "../styles/Select.js";


export default function ServiceForm({ form, handleForm, addService, setServiceId, setShowForm }) {
    const [selectedCategory, setSelectedCategory] = useState('Categoria');
    const [availableStatus, setAvailableStatus] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { categories } = useCategories();
    const { token } = useToken();

    function handleSubmit(e) {
        e.preventDefault();

        if (isLoading) return;
        setIsLoading(true);

        const { name, serviceDescription, price, paymentDescription } = form;
        const service = { name, serviceDescription, price, paymentDescription, status: availableStatus };
        const body = { service, categories: { category: selectedCategory } };
        if (paymentDescription === '') delete body.service.paymentDescription;

        api.createService(body, token)
            .then(({ data }) => {
                console.log("data")
                console.log(data)
                alert("Cadastro realizado com sucesso!");
                setServiceId(data.service.id);
                setShowForm(0); // change to 2 when implement PhotosForm
                addService(data.service) // move to PhotosForm
            })
            .catch((err) => {
                console.log(err);
                alert(err.response.data);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <StyledServiceForm $hasImage={!!form.mainPhoto}>
            <FormContainer>
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
                    <Input as="label" htmlFor="mainPhoto" className="label">
                        {form.mainPhoto || "Escolher imagem"}
                    </Input>
                    <Input
                        className="file-input"
                        name="mainPhoto"
                        id="mainPhoto"
                        type="file"
                        // value={form.mainPhoto}
                        onChange={handleForm}
                        max={1024 * 1024}
                        accept=".jpg,.png"
                        // multiple="true"
                        formEncType="multipart/form-data"
                    />
                    <Checkbox>
                        <label htmlFor="status">Serviço disponível</label>
                        <input
                            id="status"
                            name="status"
                            type="checkbox"
                            value={availableStatus}
                            onChange={() => setAvailableStatus(!availableStatus)}
                        />
                    </Checkbox>
                    <ButtonSubmit disabled={isLoading}>
                        Cadastrar Serviço
                    </ButtonSubmit>
                </Form>
            </FormContainer>
        </StyledServiceForm>
    );
}

const StyledServiceForm = styled.div`
    position: fixed;
    bottom: 124px;
    right: 27px;
    z-index: 4;

    * {
        opacity: 0.99;
    }

    .label {
        color: ${({ $hasImage }) => $hasImage ? "white" : "lightgray"};
        line-height: 28px;
        padding-block: 5px;
        overflow: hidden;
    }

    input[type="file"] {
        display: none;
    }
`;