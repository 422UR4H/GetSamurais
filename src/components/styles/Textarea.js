import styled from "styled-components";

const Textarea = styled.textarea`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 1.15em;
    color: white;
    
    background-color: rgba(0, 0, 0, 0.5);
    width: 280px;
    height: 100px;
    border-radius: 20px;
    border: white 1px solid;
    padding-inline: 13px;
    padding-block: 8px;

    &::placeholder {    
        color: lightgray;    
        font-family: 'Lexend Deca', sans-serif;
    }
    &:focus {
        outline: none;
        box-shadow: 0 0 7px 1px rgba(255, 30, 0, 1);
    }
    &:read-only {
        background-color: rgba(0, 0, 0, 0.75);
        color: rgba(255, 255, 255, 0.6);
        &::placeholder {
            color: rgba(255, 255, 255, 0.4);
        }
    }
    &[type="date"]::-webkit-calendar-picker-indicator {
        cursor: pointer;
        filter: invert(1);
    }
`;

export default Textarea;