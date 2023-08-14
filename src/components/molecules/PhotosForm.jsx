import { useState } from "react";
import { styled } from "styled-components";
import api from "../../services/api.js";
import Form from "../atoms/Form.jsx";
import Input from "../styles/Input.js";
import ButtonSubmit from "../atoms/ButtonSubmit.jsx";
import FormContainer from "../atoms/FormContainer.jsx";
import useToken from "../../hooks/useToken.js";


export default function PhotosForm({ serviceId, setShowServiceForm }) {
    const [isLoading, setIsLoading] = useState(false);
    const [photo, setPhoto] = useState('');
    const { token } = useToken();

    function handleSubmit(e) {
        e.preventDefault();

        if (isLoading) return;
        setIsLoading(true);

        api.createService(body, token)
            .then(({ data }) => {
                console.log(data)
                alert("Foto adicionada com sucesso!");
                setShowServiceForm(2);
                // addService()
            })
            .catch((err) => {
                console.log(err);
                alert(err.response.data);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <StyledServiceForm>
            <FormContainer>
                <Form onSubmit={handleSubmit}>
                    <Input
                        name="photo"
                        type="text"
                        placeholder="Url da foto principal"
                        value={photo}
                        onChange={(e) => setPhoto(e.target.value)}
                        maxLength={255}
                        required
                    />
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
`;