import { styled } from "styled-components";
import Button from "../atoms/Button.jsx";
import { useNavigate } from "react-router-dom";

export default function GoHomeFooter() {
    const navigate = useNavigate();

    return (
        <StyledGoHomeFooter>
            <Button onClick={() => navigate("/")}>
                Voltar ao Início
            </Button>
        </StyledGoHomeFooter>
    );
}

const StyledGoHomeFooter = styled.footer`
    background-color: indigo;
    width: 100vw;
    padding: 10px;
    box-shadow: 0 -3px 8px 2px rgba(0, 0, 0, 0.4);

    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;

    display: flex;
    justify-content: center;
`;