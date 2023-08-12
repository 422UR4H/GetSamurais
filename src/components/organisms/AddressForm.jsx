import Form from "../molecules/Form.jsx";
import Input from "../styles/Input.js";

export default function AddressForm({ form, handleForm, addressSubmit }) {
    return (
        <Form textButton="Cadastrar Telefones" onSubmit={addressSubmit}>
            <Input
                name="cep"
                type="text"
                placeholder="Cep"
                value={form.cep}
                onChange={handleForm}
                required
            />
            <Input
                name="lotNumber"
                type="number"
                placeholder="Número"
                value={form.lotNumber}
                onChange={handleForm}
            />
            <Input
                name="complement"
                type="text"
                placeholder="Compplemento"
                value={form.complement}
                onChange={handleForm}
            />
            <Input
                name="rua"
                type="text"
                placeholder="Rua / Logadouro"
                value={form.rua}
                onChange={handleForm}
                disabled={true}
                required
            />
            <Input
                name="neighborhood"
                type="text"
                placeholder="Bairro"
                value={form.neighborhood}
                onChange={handleForm}
                disabled={true}
                required
            />
            <Input
                name="city"
                type="text"
                placeholder="Cidade"
                value={form.city}
                onChange={handleForm}
                disabled={true}
                required
            />
            <Input
                name="federalUnit"
                type="text"
                placeholder="Estado (UF)"
                value={form.federalUnit}
                onChange={handleForm}
                disabled={true}
                required
            />
        </Form>
    );
}
