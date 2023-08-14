import { styled } from "styled-components";

export default function Presentation() {

    return (
        <StyledPresentation>
            <h1>Criamos um fluxo entre o profissional e o cliente 
                <span className="red"> DE GRAÇA!</span>
            </h1>
            <p>
                Nosso papel é servir como intermédio para os usuários se conectarem.<br />
                No nosso site você vai encontrar os profissionais que deveja.<br />
                E NÃO VAI PAGAR NADA POR ISSO!!!<br />
                Entre em contato <span className="red">livremente</span> com um verdadeiro 
                <span className="red"> SAMURAI</span> dos tempos atuais!
            </p>
        </StyledPresentation>
    );
}

const StyledPresentation = styled.section`
    background-color: #272a2b;
    color: white;
    padding: 20px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    h1 {
        font-size: 1.25em;
        line-height: 28px;
    }
    p {
        font-size: 0.9em;
        line-height: 20px;
    }
    .red {
        color: red;
    }
`;