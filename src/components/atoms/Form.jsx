import { styled } from "styled-components";

export default function Form({ children, onSubmit }) {
    return (
        <StyledForm onSubmit={onSubmit}>
            {children}
        </StyledForm>
    );
}

const StyledForm = styled.form`
    gap: 12px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;