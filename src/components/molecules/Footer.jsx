import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export default function Footer() {
    return (
        <StyledFooter>
            <Link to="/">Tela Inicial</Link>
            <Link to="/visao-geral">Meus Serviços</Link>
        </StyledFooter>
    );
}

const StyledFooter = styled.footer`
    background-color: indigo;
    width: 100vw;
    padding: 15px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;

    a {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 1.15em;
        color: white;
    }
`;