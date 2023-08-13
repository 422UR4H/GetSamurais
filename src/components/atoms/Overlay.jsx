import { styled } from 'styled-components';

export default function Overlay({ onClick, children }) {
    return (
        <StyledOverlay onClick={onClick}>
            {children}
        </StyledOverlay>
    );
}

const StyledOverlay = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    padding-block: 80px;
    padding-inline: 30px;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
`;