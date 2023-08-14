import { ThreeDots } from 'react-loader-spinner';
import { styled } from 'styled-components'

export default function Button({ onClick, disabled, children }) {
    return (
        <StyledButton onClick={onClick} disabled={disabled}>
            {disabled ?
                <ThreeDots
                    height="35"
                    color="black"
                    ariaLabel="three-dots-loading"
                />
                :
                children
            }
        </StyledButton>
    )
}
Button.defaultPropt = { disabled: false };

const StyledButton = styled.button`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 1.15em;
    color: white;
    
    background-color: red;
    height: 40px;
    border-radius: 20px;
    border: none;
    padding-inline: 15px;
    /* box-shadow: 0 0 7px 1px rgba(0, 0, 0, 1); */

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

    cursor: pointer;
`;