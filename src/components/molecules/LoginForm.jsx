import { useState } from "react";
import { styled } from "styled-components";
import FormContainer from "../atoms/FormContainer.jsx";
import Input from "../styles/Input.js";
import Form from "../atoms/Form.jsx";
import api from "../../services/api.js";
import useToken from "../../hooks/useToken.js";
import ButtonSubmit from "../atoms/ButtonSubmit.jsx";
import FormHeader from "../atoms/FormHeader.jsx";
import { useNavigate } from "react-router-dom";


export default function LoginForm({ form, setForm, handleForm, setIsLoginOpen }) {
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useToken();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        if (isLoading) return;
        setIsLoading(true);

        api.signin(form)
            .then(({ data }) => {
                console.log(data);
                login(data);
                setIsLoginOpen(false);
                setForm({ email: "", password: "" });
                navigate("/");
            })
            .catch(({ response }) => {
                console.log(response);
                alert(response.data.message);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <StyledLoginForm>
            <FormContainer>
                <FormHeader text="Login" />
                <Form onSubmit={handleSubmit}>
                    <Input
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        value={form.email}
                        onChange={handleForm}
                        maxLength={64}
                        required
                    />
                    <Input
                        name="password"
                        type="password"
                        placeholder="Senha"
                        value={form.password}
                        onChange={handleForm}
                        minLength={3}
                        maxLength={32}
                        required
                    />
                    <ButtonSubmit disabled={isLoading}>
                        Entrar
                    </ButtonSubmit>
                </Form>
            </FormContainer>
        </StyledLoginForm>
    );
}

const StyledLoginForm = styled.div`
    position: fixed;
    top: 80px;
    right: 27px;
    z-index: 4;
`;