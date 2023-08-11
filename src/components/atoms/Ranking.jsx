import { useEffect, useState } from "react";
import { styled } from "styled-components";
import api from "../../services/api.js";


export default function Ranking() {
    const [ranking, setRanking] = useState([]);

    useEffect(() => {
        
    }, []);

    return (
        <StyledRanking>
            Ranking
        </StyledRanking>
    );
}

const StyledRanking = styled.div`

`;