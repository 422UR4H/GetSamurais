import { styled } from "styled-components";

export default function ButtonSubmit({ children }) {
    return (
        <StyledButtonSubmit type="submit">
            {children}
        </StyledButtonSubmit>
    );
}

const StyledButtonSubmit = styled.button`
    
    cursor: pointer;
`;