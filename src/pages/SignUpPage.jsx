import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm.js";
import FormPagesTemplate from "../components/templates/FormPagesTemplate.jsx";
import api from "../services/api.js";
import FormHeader from "../components/atoms/FormHeader.jsx";
import UserForm from "../components/molecules/UserForm.jsx";
import AddressForm from "../components/molecules/AddressForm.jsx";
import PhonesForm from "../components/molecules/PhonesForm.jsx";
import { useState } from "react";


export default function SignUpPage() {
    const navigate = useNavigate();
    const [currForm, setCurrForm] = useState(1);
    const { form, handleForm, setForm } = useForm({
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

    return (
        <FormPagesTemplate>
            <FormHeader text="Cadastro" />
            {currForm === 1 && <UserForm
                form={form}
                handleForm={handleForm}
                setForm={setForm}
                setCurrForm={setCurrForm}
            />}
            {currForm === 2 && <AddressForm
                form={form}
                handleForm={handleForm}
                setForm={setForm}
                setCurrForm={setCurrForm}
            />}
            {currForm === 3 && <PhonesForm
                form={form}
                handleForm={handleForm}
                setCurrForm={setCurrForm}
            />}
        </FormPagesTemplate>
    );
}
