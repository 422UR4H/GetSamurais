import { useNavigate } from "react-router-dom";
import api from "../../services/api.js";
import ButtonSubmit from "../atoms/ButtonSubmit.jsx";
import Form from "../atoms/Form.jsx";
import Input from "../styles/Input.js";
import { useState } from "react";

export default function PhonesForm({ form, handleForm, setCurrForm }) {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        if (isLoading) return;
        setIsLoading(true);

        const phoneNumber = form.phone
            .replaceAll('-', '')
            .replaceAll('.', '')
            .replaceAll('(', '')
            .replaceAll(')', '')
            .replaceAll(' ', '');

        const { name, nick, email, birthday, password } = form;
        const { cep, city, street, lotNumber, complement, neighborhood, federalUnit } = form;
        const body = {
            user: { name, nick, email, birthday, password },
            address: { cep, city, street, lotNumber, complement, neighborhood, federalUnit },
            phone: { phoneNumber }
        }
        if (body.address.lotNumber === '') delete body.address.lotNumber;
        if (body.address.complement === '') delete body.address.complement;

        api.signup(body)
            .then(({ status, data }) => {
                alert("Cadastro realizado com sucesso!");
                if (status === 207) alert(data.message);
                setCurrForm(1);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                alert(err.response.data);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                name="phone"
                type="tel"
                placeholder="Telefone"
                value={form.phone}
                onChange={handleForm}
                minLength={10}
                required
            />
            <ButtonSubmit disabled={isLoading}>
                Finalizar Cadastro
            </ButtonSubmit>
        </Form>
    );
}
