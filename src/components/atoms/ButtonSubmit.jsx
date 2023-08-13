import { ThreeDots } from "react-loader-spinner";
import { styled } from "styled-components";

export default function ButtonSubmit({ disabled, children }) {
    return (
        <StyledButtonSubmit type="submit" disabled={disabled}>
            {disabled ?
                <ThreeDots
                    height="35"
                    color="black"
                    ariaLabel="three-dots-loading"
                />
                :
                children
            }
        </StyledButtonSubmit>
    );
}
ButtonSubmit.defaultPropt = { disabled: false }

const StyledButtonSubmit = styled.button`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 1.15em;
    color: white;
    
    background-color: red;
    width: 280px;
    height: 40px;
    border-radius: 20px;
    border: none;
    margin-top: 10px;
    box-shadow: 0 0 7px 1px rgba(0, 0, 0, 1);

    &:focus {
        outline: none;
        filter: invert(1);
        box-shadow: 0 0 7px 1px rgb(255, 30, 0);
    }
    &:disabled {
        filter: invert(1);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loader {
        fill: 500;
    }

    cursor: pointer;
`;