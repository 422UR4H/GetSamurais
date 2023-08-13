import { useState } from "react";
import { styled } from "styled-components";
import useToken from "../../hooks/useToken.js";
import useForm from "../../hooks/useForm.js";
import LoginForm from "./LoginForm.jsx";
import Overlay from "../atoms/Overlay.jsx";
import Button from "../atoms/Button.jsx";
import Logo from "../atoms/Logo.jsx";
import { useNavigate } from "react-router-dom";


export default function Header() {
    const navigate = useNavigate();
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const { token, logout } = useToken();
    const { form, handleForm } = useForm({ email: "", password: "" });

    function handleLoginClick() {
        setIsLoginOpen(true);
    }

    function handleLogoutClick() {
        logout();
        navigate.reload();
    }

    function handleOverlayClick() {
        setIsLoginOpen(false);
    }

    return (
        <StyledHeader>
            {isLoginOpen &&
                <>
                    <Overlay className="orverlay" onClick={handleOverlayClick} />
                    <LoginForm
                        form={form}
                        handleForm={handleForm}
                    />
                </>
            }
            <Logo />

            {token ?
                <Button onClick={handleLogoutClick}>Sair</Button>
                :
                <Button onClick={handleLoginClick}>Entrar</Button>
            }
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    background-color: indigo;
    width: 100vw;
    padding: 15px 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
`;