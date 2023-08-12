import Form from "../molecules/Form.jsx";
import Input from "../styles/Input.js";

export default function PhonesForm({ form, handleForm, phoneSubmit }) {
    return (
        <Form textButton="Finalizar Cadastro" onSubmit={phoneSubmit}>
            <Input
                name="phone"
                type="number"
                placeholder="Telefone"
                value={form.phone}
                onChange={handleForm}
                required
            />
            <Input
                name="phone2"
                type="number"
                placeholder="Telefone 2"
                value={form.phone2}
                onChange={handleForm}
                disabled={true}
            />
        </Form>
    );
}
