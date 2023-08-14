import { styled } from "styled-components";

const Select = styled.select`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 1.15em;
    color: white;

    background-color: rgba(0, 0, 0, 0.5);
    width: 280px;
    height: 40px;
    border-radius: 20px;
    border: white 1px solid;
    padding-inline: 13px;
    opacity: 0.9;
    background-color: rgba(0, 0, 0, 0.35);

    display: flex;
    align-items: center;
    justify-content: space-between;

    &:focus {
        outline: none;
        box-shadow: 0 0 7px 1px rgba(255, 30, 0, 1);
    }
`;
export default Select;