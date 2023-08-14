import styled from "styled-components";

const Checkbox = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 1.15em;
    color: white;

    background-color: rgba(0, 0, 0, 0.5);
    width: 280px;
    height: 40px;
    border-radius: 20px;
    border: white 1px solid;
    padding-inline: 13px 15px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
        width: 25px;
        height: 25px;
        border-radius: 20px;
        border: white 1px solid;
        padding-inline: 13px;

        &:focus {
            outline: none;
            box-shadow: 0 0 7px 1px rgba(255, 30, 0, 1);
        }
    }
`;
export default Checkbox;