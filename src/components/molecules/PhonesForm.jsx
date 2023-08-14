import { useNavigate } from "react-router-dom";
import api from "../../services/api.js";
import ButtonSubmit from "../atoms/ButtonSubmit.jsx";
import Form from "../atoms/Form.jsx";
import Input from "../styles/Input.js";
import { useState } from "react";
import useToken from "../../hooks/useToken.js";

export default function PhonesForm({ form, handleForm, setCurrForm }) {
    // const [isFixingPhone, setIsFixingPhone] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    // const { token } = useToken();

    // function fixPhone(phoneNumber) {
    //     api.createPhone(phoneNumber, token)
    //         .then(() => {
    //             alert("Telefone cadastrado com sucesso!");
    //             setIsFixingPhone(false);
    //             setCurrForm(1);
    //             navigate("/");
    //         })
    //         .catch((err) => console.log(err));
    // }
    
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

        // if (isFixingPhone) {
        //     fixPhone(phoneNumber);
        //     return;
        // }
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
                if (status === 207) {
                    alert("Seu cadastro foi realizado! Mas...");
                    alert(data.message);
                    alert("Você poderá alterá-lo em breve. Não se preocupe por enquanto");
                    // setIsFixingPhone(true);
                    // return;
                } else {
                    alert("Cadastro realizado com sucesso!");
                }
                setCurrForm(1);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                alert("Houve um erro inesperado! Tente novamente outro cep");
                setCurrForm(1);
                navigate("/cadastro");
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
