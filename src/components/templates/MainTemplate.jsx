import { useEffect, useState } from "react";
import { styled } from "styled-components";
import useToken from "../../hooks/useToken.js";
import Header from "../molecules/Header.jsx";


export default function MainTemplate({ children }) {
    const { token } = useToken();
    const [userLinks, setUserLinks] = useState([]);

    useEffect(() => {

    }, []);

    return (
        <StyledTemplate>
            <Header />
            {children}
        </StyledTemplate>
    );
}

const StyledTemplate = styled.div`
    padding-block: 90px 70px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;