import { styled } from 'styled-components';
import formSamurai from '../../images/forms-samurai.png';

export default function FormContainer({ children }) {
    return (
        <StyledFormContainer>
            {children}
        </StyledFormContainer>
    );
}

const StyledFormContainer = styled.div`
    background-image: url(${formSamurai});
    background-size: cover;
    background-repeat: no-repeat;
    padding: 20px;
    border-radius: 30px;
    opacity: 0.9;
    
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: rgba(0, 0, 0, 0.35);
        z-index: -1;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 33%;
        border-radius: inherit;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent);
        z-index: -2;
    }
`;