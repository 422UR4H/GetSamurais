import { useRef, useState } from "react";
import api from "../../services/api.js";
import Form from "../atoms/Form.jsx";
import Input from "../styles/Input.js";
import ButtonSubmit from "../atoms/ButtonSubmit.jsx";


export default function AddressForm({ form, handleForm, setForm, setCurrForm }) {
    const [isCepValid, setIsCepValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const cepInputRef = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();

        if (isLoading) return;
        if (!isCepValid) {
            alert("Cep inválido!");
            return;
        }
        const cep = form.cep
            .replaceAll('-', '')
            .replaceAll('.', '')
            .replaceAll(' ', '');

        setForm({ ...form, cep });
        setCurrForm(3);
    }

    function validateCep() {
        const { cep } = form;
        if (cep === '') return;

        setIsLoading(true);
        api.getCep(cep)
            .then(({ data }) => {
                const { localidade, logradouro, bairro, uf } = data;
                setForm({
                    ...form,
                    city: localidade,
                    street: logradouro,
                    neighborhood: bairro,
                    federalUnit: uf,
                });
                setIsCepValid(true);
            })
            .catch((e) => {
                cepInputRef.current.select();
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                name="cep"
                type="text"
                placeholder="Cep"
                value={form.cep}
                onChange={handleForm}
                onBlur={validateCep}
                ref={cepInputRef}
                required
            />
            <Input
                name="lotNumber"
                type="number"
                placeholder="Número"
                value={form.lotNumber}
                onChange={handleForm}
                min={1}
            />
            <Input
                name="complement"
                type="text"
                placeholder="Complemento"
                value={form.complement}
                onChange={handleForm}
                maxLength={255}
            />
            <Input
                name="rua"
                type="text"
                placeholder="Rua / Logradouro"
                value={form.street}
                onChange={handleForm}
                readOnly={true}
                onFocus={(e) => e.target.blur()}
                maxLength={32}
                required
            />
            <Input
                name="neighborhood"
                type="text"
                placeholder="Bairro"
                value={form.neighborhood}
                onChange={handleForm}
                readOnly={true}
                onFocus={(e) => e.target.blur()}
                maxLength={32}
                required
            />
            <Input
                name="city"
                type="text"
                placeholder="Cidade"
                value={form.city}
                onChange={handleForm}
                readOnly={true}
                onFocus={(e) => e.target.blur()}
                minLength={3}
                maxLength={32}
                required
            />
            <Input
                name="federalUnit"
                type="text"
                placeholder="Estado (UF)"
                value={form.federalUnit}
                onChange={handleForm}
                readOnly={true}
                onFocus={(e) => e.target.blur()}
                minLength={2}
                maxLength={32}
                required
            />
            <ButtonSubmit disabled={isLoading}>
                Cadastrar Telefones
            </ButtonSubmit>
        </Form>
    );
}
