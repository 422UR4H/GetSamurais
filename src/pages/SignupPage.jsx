import { useNavigate } from "react-router-dom";
import Form from "../components/molecules/Form.jsx";
import Input from "../components/styles/Input.js";
import SignTemplate from "../components/templates/SignTemplate.jsx";
import useForm from "../hooks/useForm.js";
import api from "../services/api.js";


export default function SignupPage() {
    const navigate = useNavigate();
    const { form, handleForm } = useForm({ name: "", email: "", password: "", confirmPassword: "" });

    function handleSubmit(e) {
        e.preventDefault();

        api.signup(form)
            .then(() => {
                alert("Cadastro realizado com sucesso!");
                navigate("/login");
            })
            .catch((err) => alert(err.response.data));
    }

    return (
        <SignTemplate>
            <Form textButton="Criar Conta" onSubmit={handleSubmit}>
                <Input
                    name="name"
                    type="text"
                    placeholder="Nome"
                    value={form.name}
                    onChange={handleForm}
                    required
                />
                <Input
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    value={form.email}
                    onChange={handleForm}
                    required
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Senha"
                    value={form.password}
                    onChange={handleForm}
                    required
                />
                <Input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirmar senha"
                    value={form.confirmPassword}
                    onChange={handleForm}
                    required
                />
            </Form>
        </SignTemplate>
    );
}
