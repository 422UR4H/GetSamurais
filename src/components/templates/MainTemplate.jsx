import { useEffect, useState } from "react";
import { styled } from "styled-components";
import useToken from "../../hooks/useToken.js";
import Header from "../atoms/Header.jsx";
import Logo from "../atoms/Logo.jsx";


export default function MainTemplate() {
    const { token } = useToken();
    const [userLinks, setUserLinks] = useState([]);

    useEffect(() => {
        
    }, []);

    return (
        <StyledTemplate>
            <Header />
            <Logo />
        </StyledTemplate>
    );
}

const StyledTemplate = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;