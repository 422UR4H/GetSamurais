import { useEffect, useState } from "react";
import api from "../../services/api.js";
import { styled } from "styled-components";


export default function Counts() {
    const [usersAmount, setUsersAmount] = useState(0);
    const [servicesAmount, setServicesAmount] = useState(0);

    useEffect(() => {
        api.getUsersCount()
            .then(({ data }) => setUsersAmount(data.usersAmount))
            .catch((err) => console.log(err));

        api.getServicesCount()
            .then(({ data }) => setServicesAmount(data.servicesAmount))
            .catch((err) => console.log(err));

    }, []);

    return (
        <StyledCounts>
            <div>
                <h2>Usuários cadastrados</h2>
                <h1>{usersAmount}</h1>
            </div>
            <div>
                <h2>Serviços disponíveis</h2>
                <h1>{servicesAmount}</h1>
            </div>
        </StyledCounts>
    );
}

const StyledCounts = styled.section`
    background-color: #272a2b;
    color: white;
    padding: 20px;
    width: 100vw;
    margin-top: 15px;

    display: flex;
    justify-content: center;
    gap: 20px;

    h1 {
        color: red;
        font-size: 1.5em;
        line-height: 28px;
    }
    h2 {
        font-size: 1.2em;
        line-height: 25px;
    }
    & > div {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
`;