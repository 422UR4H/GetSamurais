import { styled } from "styled-components";
import Header from "../molecules/Header.jsx";
import Logo from "../atoms/Logo.jsx";
import FormContainer from "../atoms/FormContainer.jsx";

export default function FormPagesTemplate({ children }) {
    return (
        <StyledTemplate>
            <Header />
            <Logo />
            <FormContainer>
                {children}
            </FormContainer>
        </StyledTemplate>
    );
}

const StyledTemplate = styled.div`
    /* background-color: #181A1B; */
    /* background-color: #15181c; */
    background-color: #111419;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;