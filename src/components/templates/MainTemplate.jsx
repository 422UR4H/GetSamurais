import { useEffect, useState } from "react";
import { styled } from "styled-components";
import useToken from "../../hooks/useToken.js";
import Header from "../atoms/Header.jsx";
import Logo from "../atoms/Logo.jsx";


export default function MainTemplate({ children }) {
    const { token } = useToken();
    const [userLinks, setUserLinks] = useState([]);

    useEffect(() => {

    }, []);

    return (
        <StyledTemplate>
            <Header />
            <Logo />
            {children}
        </StyledTemplate>
    );
}

const StyledTemplate = styled.div`
    background-color: #111419;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;