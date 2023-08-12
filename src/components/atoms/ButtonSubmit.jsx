import { styled } from "styled-components";

export default function ButtonSubmit({ children }) {
    return (
        <StyledButtonSubmit type="submit">
            {children}
        </StyledButtonSubmit>
    );
}

const StyledButtonSubmit = styled.button`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 1.15em;
    color: white;
    
    background-color: red;
    width: 280px;
    height: 40px;
    border-radius: 20px;
    border: none;
    margin-top: 10px;
    box-shadow: 0 0 7px 1px rgba(0, 0, 0, 1);

    &:focus {
        outline: none;
        filter: invert(1);
        box-shadow: 0 0 7px 1px rgba(255, 30, 0, 1);
    }

    cursor: pointer;
`;