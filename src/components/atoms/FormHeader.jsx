import { styled } from 'styled-components';

export default function FormHeader({ text }) {
    return (
        <StyledFormHeader>
            {text}
        </StyledFormHeader>
    );
}

const StyledFormHeader = styled.header`
    font-family: 'Finger Paint', 'cursive';
    font-size: 2em;
    font-weight: 400;
    color: rgb(255, 0, 0);

    margin-top: 6px;
    margin-bottom: 25px;

    display: flex;
    justify-content: center;
`;