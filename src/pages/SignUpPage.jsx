import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm.js";
import FormPagesTemplate from "../components/templates/FormPagesTemplate.jsx";
import api from "../services/api.js";
import FormHeader from "../components/atoms/FormHeader.jsx";
import UserForm from "../components/organisms/UserForm.jsx";
import AddressForm from "../components/organisms/AddressForm.jsx";
import PhonesForm from "../components/organisms/PhonesForm.jsx";
import { useState } from "react";


export default function SignUpPage() {
    const navigate = useNavigate();
    const [currForm, setCurrForm] = useState(1);
    const { form, handleForm } = useForm({
        name: "",
        nick: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",

        cep: "",
        city: "",
        street: "",
        lotNumber: "",
        complement: "",
        neighborhood: "",
        federalUnit: "",

        phone: ""
    });

    function userSubmit(e) {
        e.preventDefault(2);
        setCurrForm(2);
    }

    function addressSubmit(e) {
        e.preventDefault();
        setCurrForm(3);
    }

    function phoneSubmit(e) {
        e.preventDefault();
        
        api.signup(form)
            .then(() => {
                alert("Cadastro realizado com sucesso!");
                setCurrForm(1);
                navigate("/");
            })
            .catch((err) => alert(err.response.data));
    }

    return (
        <FormPagesTemplate>
            <FormHeader text="Cadastro" />
            {currForm === 1 && <UserForm form={form} handleForm={handleForm} userSubmit={userSubmit} />}
            {currForm === 2 && <AddressForm form={form} handleForm={handleForm} addressSubmit={addressSubmit} />}
            {currForm === 3 && <PhonesForm form={form} handleForm={handleForm} phoneSubmit={phoneSubmit} />}
        </FormPagesTemplate>
    );
}
