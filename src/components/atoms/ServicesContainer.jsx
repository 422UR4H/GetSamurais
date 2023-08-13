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
    padding: 20px;
    border-radius: 30px;
`;