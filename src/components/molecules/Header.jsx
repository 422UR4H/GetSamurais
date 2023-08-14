import { useState } from "react";
import { styled } from "styled-components";
import useToken from "../../hooks/useToken.js";
import useForm from "../../hooks/useForm.js";
import LoginForm from "./LoginForm.jsx";
import Overlay from "../atoms/Overlay.jsx";
import Button from "../atoms/Button.jsx";
import Logo from "../atoms/Logo.jsx";
import { useNavigate } from "react-router-dom";
import sakuraPng from "../../images/sakura.png";


export default function Header() {
    const navigate = useNavigate();
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const { token, logout } = useToken();
    const { form, setForm, handleForm } = useForm({ email: "", password: "" });

    function handleLoginClick() {
        setIsLoginOpen(true);
    }

    function handleLogoutClick() {
        logout();
        navigate("/");
    }

    function handleOverlayClick() {
        setIsLoginOpen(false);
    }

    return (
        <StyledHeader>
            <div>
                {isLoginOpen &&
                    <>
                        <Overlay onClick={handleOverlayClick} />
                        <LoginForm
                            form={form}
                            setForm={setForm}
                            handleForm={handleForm}
                            setIsLoginOpen={setIsLoginOpen}
                        />
                    </>
                }
                <Logo />

                {token ?
                    <Button onClick={handleLogoutClick}>Sair</Button>
                    :
                    <Button onClick={handleLoginClick}>Entrar</Button>
                }
            </div>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;

    &>div {
        width: 100vw;
        padding: 15px 20px;
        box-shadow: 0 3px 8px 2px rgba(0, 0, 0, 0.4);

        display: flex;
        align-items: center;
        justify-content: space-between;

        background-image: url(${sakuraPng});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;

        opacity: 0.99;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: inherit;
            background-color: rgba(0, 0, 0, 0.55);
            z-index: -1;
        }

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: inherit;
            background: linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent);
            z-index: -2;
        }
    }
`;