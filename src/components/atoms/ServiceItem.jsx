import { styled } from "styled-components";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import formatCurrency from "../../scripts/formatCurrency.js";
import CategoryIcon from "./CategoryIcon.jsx";


export default function ServiceItem({ onClick, service }) {
    const { createdAt, id, price, category } = service;
    const name = service.service;

    return (
        <StyledServiceItem onClick={onClick}>
            <CategoryIcon category={category} />
            <h2>{category}</h2>
            <h1>{name}</h1>
            <p>{dayjs(createdAt).format("DD/MM/YYYY")}</p>
            <span>{formatCurrency(price)}</span>
        </StyledServiceItem>
    );
}

const StyledServiceItem = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 1.15em;
    color: white;
    
    background-color: #111419;
    padding: 20px;
    min-width: 220px;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    h2 {
        color: red;
        font-size: 0.8em;
    }

    p {
        color: gray;
        font-size: 0.8em;
    }

    span {
        font-size: 0.9em;
        font-weight: 400;
        text-align: end;
    }
`;