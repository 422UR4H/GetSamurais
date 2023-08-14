import { styled } from "styled-components";
// import logo from "../../images/logo.png"

export default function Logo() {
    return (
        <StyledLogo>
            GetSamurais
            {/* <img src={logo} alt="Logo GetSamurais" /> */}
        </StyledLogo>
    );
}

const StyledLogo = styled.div`
    font-family: 'Saira Stencil One', 'cursive';
    font-size: 2em;
    color: red;
`;