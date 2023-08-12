import Form from "../molecules/Form.jsx";
import Input from "../styles/Input.js";

export default function UserForm({ form, handleForm, userSubmit }) {
    return (
        <Form textButton="Cadastrar Endereço" onSubmit={userSubmit}>
            <Input
                name="name"
                type="text"
                placeholder="Nome completo"
                value={form.name}
                onChange={handleForm}
                required
            />
            <Input
                name="nick"
                type="text"
                placeholder="Apelido"
                value={form.nick}
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
            <Input
                name="birthday"
                type="date"
                placeholder="Data de nascimento"
                value={form.birthday}
                onChange={handleForm}
                required
            />
        </Form>
    );
}
