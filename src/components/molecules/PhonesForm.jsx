import { useNavigate } from "react-router-dom";
import api from "../../services/api.js";
import ButtonSubmit from "../atoms/ButtonSubmit.jsx";
import Form from "../atoms/Form.jsx";
import Input from "../styles/Input.js";

export default function PhonesForm({ form, handleForm, setCurrForm }) {
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const { name, nick, email, birthday, password } = form;
        const { cep, city, street, lotNumber, complement, neighborhood, federalUnit } = form;
        const body = {
            user: { name, nick, email, birthday, password },
            address: { cep, city, street, lotNumber, complement, neighborhood, federalUnit },
            phone: { phoneNumber: form.phone }
        }
        // if (body.address.lotNumber === '') body.address.lotNumber = 0;
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
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                name="phone"
                type="number"
                placeholder="Telefone"
                value={form.phone}
                onChange={handleForm}
                minLength={10}
                maxLength={11}
                required
            />
            <Input
                name="phone2"
                type="number"
                placeholder="Telefone 2"
                value={form.phone2}
                onChange={handleForm}
                minLength={10}
                maxLength={11}
                disabled={true}
            />
            <ButtonSubmit>Finalizar Cadastro</ButtonSubmit>
        </Form>
    );
}
