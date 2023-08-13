import { styled } from "styled-components";

export default function ServiceItem({ service }) {
    const { mainPhoto } = service;
    return (
        <StyledServiceItem imgUrl={mainPhoto}>
            ServiceItem
        </StyledServiceItem>
    );
}

const StyledServiceItem = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 1.15em;
    color: black;

    padding: 20px;
    border-radius: 20px;

    background-color: white;
    /* background-image: ${({ imgUrl }) => imgUrl && url(imgUrl)}; */
    /* background-size: cover; */
    /* background-repeat: no-repeat; */

    /* opacity: 0.9;
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
    &:focus { } */
`;