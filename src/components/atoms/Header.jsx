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
    
`;