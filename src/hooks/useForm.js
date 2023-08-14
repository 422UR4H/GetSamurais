import { useState } from "react"

export default function useForm(initialForm) {
    const [form, setForm] = useState(initialForm);

    function handleForm(e) {
        console.log(e)
        console.log(e.target.value)
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return { form, handleForm, setForm };
}