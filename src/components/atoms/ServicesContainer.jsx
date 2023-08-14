import { styled } from "styled-components";

export default function ServicesContainer({ children }) {
    return (
        <StyledServicesContainer>
            {children}
        </StyledServicesContainer>
    );
}

const StyledServicesContainer = styled.div`
    background-color: white;
    margin-top: 20px;
    padding: 20px;
    border-radius: 30px;

    display: flex;
    flex-direction: column;
    gap: 20px;
`;