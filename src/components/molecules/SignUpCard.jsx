import { styled } from "styled-components";
import samuraiImg from "../../images/samurai-japones-ilustracao.png";
import Button from "../atoms/Button.jsx";
import { useNavigate } from "react-router-dom";


export default function SignUpCard() {
    const navigate = useNavigate();

    return (
        <StyledSignUpCard>
            <h1>Ainda não é membro?</h1>
            <Button onClick={() => navigate("/cadastro")}>Cadastrer-se!</Button>
            <p>E se torne mais um samurai em nossa equipe.</p>
        </StyledSignUpCard>
    );
}

const StyledSignUpCard = styled.section`
    background-image: url(${samuraiImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    padding-block: 40px;
    padding-inline: 20px;
    margin-top: 15px;
    margin-inline: 6px;
    border-radius: 30px;
    opacity: 0.99;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: rgba(0, 0, 0, 0.65);
        z-index: -1;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 33%;
        border-radius: inherit;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
        z-index: -2;
    }

    h1 {
        color: white;
        font-size: 1.7em;
        text-align: center;
        margin-bottom: 8px;
    }

    p {
        color: white;
        font-size: 1.25em;
    }
`;