import { useEffect, useRef, useState } from "react";
import api from "../../services/api.js";
import Form from "../atoms/Form.jsx";
import Input from "../styles/Input.js";
import ButtonSubmit from "../atoms/ButtonSubmit.jsx";

export default function UserForm({ form, handleForm, setForm, setCurrForm }) {
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isNickValid, setIsNickValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const confirmInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const nickInputRef = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();

        if (isLoading) return;
        if (!isNickValid) {
            alert("Apelido já cadastrado!");
            return;
        }
        if (!isEmailValid) {
            alert("Email já cadastrado!");
            return;
        }
        setCurrForm(2);
    }

    function validateNick() {
        const { nick } = form;
        if (nick === "") return;

        setIsLoading(true);
        api.getUserByNick(nick)
            .then(() => {
                setIsNickValid(true);
            })
            .catch((e) => {
                // nickInputRef.current.select()
                // setForm({...form, nick: '' });
                setIsNickValid(false);
            })
            .finally(() => setIsLoading(false));
    }

    function validateEmail() {
        const { email } = form;
        if (email === "") return;

        setIsLoading(true);
        api.getUserByEmail(email)
            .then(() => {
                setIsEmailValid(true);
            })
            .catch((e) => {
                // emailInputRef.current.select();
                // setForm({...form, email: '' })
                setIsEmailValid(false);
            })
            .finally(() => setIsLoading(false));
    }

    function validatePassword() {
        const { password, confirmPassword } = form;
        if (password === confirmPassword || confirmPassword === '') return;
        confirmInputRef.current.select();
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                name="name"
                type="text"
                placeholder="Nome completo"
                value={form.name}
                onChange={handleForm}
                minLength={3}
                maxLength={64}
                required
            />
            <Input
                name="nick"
                type="text"
                placeholder="Apelido"
                value={form.nick}
                onChange={handleForm}
                onBlur={validateNick}
                ref={nickInputRef}
                minLength={3}
                maxLength={16}
                required
            />
            <Input
                name="email"
                type="email"
                placeholder="E-mail"
                value={form.email}
                onChange={handleForm}
                onBlur={validateEmail}
                ref={emailInputRef}
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
            <Input
                name="confirmPassword"
                type="password"
                placeholder="Confirmar senha"
                value={form.confirmPassword}
                onChange={handleForm}
                onBlur={validatePassword}
                ref={confirmInputRef}
                minLength={3}
                maxLength={32}
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
            <ButtonSubmit disabled={isLoading}>
                Cadastrar Endereço
            </ButtonSubmit>
        </Form>
    );
}
