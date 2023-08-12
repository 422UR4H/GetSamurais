import { styled } from "styled-components";
import ButtonSubmit from "../atoms/ButtonSubmit.jsx";

export default function Form({ children, textButton, onSubmit }) {
    return (
        <StyledForm onSubmit={onSubmit}>
            {children}
            <ButtonSubmit>{textButton}</ButtonSubmit>
        </StyledForm>
    );
}

const StyledForm = styled.form`
    gap: 12px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;