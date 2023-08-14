import styled from "styled-components";
import Button from "./Button.jsx";

export default function AddButton({ onClick }) {
    return (
        <StyledAddButton onClick={onClick}>
            +
        </StyledAddButton>
    );
}

const StyledAddButton = styled.button`
    font-size: 2.1em;
    color: white;
    
    background-color: red;
    height: 50px;
    width: 50px;
    padding-bottom: 5px;
    border-radius: 50%;
    border: none;
    box-shadow: 3px 3px 7px 1px rgba(0, 0, 0, 0.6);

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    right: 27px;
    bottom: 65px;

    &:focus {
        outline: none;
        filter: invert(1);
        box-shadow: 0 0 7px 1px rgb(255, 30, 0);
    }
    &:disabled {
        filter: invert(1);
    }

    cursor: pointer;
`;

// const StyledAddButton = styled(Button)`
//     /* font-size: 10em; */
//     font-size: 350px;
//     background-color: black;
//     color: blue;
// `;