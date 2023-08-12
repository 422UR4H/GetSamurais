import { styled } from "styled-components";
import useToken from "../../hooks/useToken.js";

export default function Header() {
    const { token, logout } = useToken();

    return (
        <StyledHeader>
            Header
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    width: 100vw;
    padding: 15px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
`;