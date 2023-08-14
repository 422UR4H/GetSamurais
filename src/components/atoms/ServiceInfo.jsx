import { styled } from "styled-components";
import samuraiPng from "../../images/guerreiro-samurai.png";
import formatCurrency from "../../scripts/formatCurrency.js";
import dayjs from "dayjs";


export default function ServiceInfo({ serviceAllInfo }) {
    const {
        category,
        createdAt,
        email,
        nick,
        name,
        price,
        service,
        serviceDescription,
        paymentDescription
    } = serviceAllInfo;
    console.log(serviceAllInfo)

    return (
        <StyledServiceInfo>
            <div>
                <h1>{service}</h1>
                <h2>{category}</h2>
                <h4>Descrição do serviço:</h4>
                <p>{serviceDescription}</p>
                {paymentDescription &&
                    <>
                        <h4>Descrição do pagamento:</h4>
                        <p>{paymentDescription}</p>
                    </>
                }
                <h3>Informações do samurai</h3>
                <h6>Apelido: {nick}</h6>
                <h4>Nome: {name}</h4>
                <h4>Email: {email}</h4>
                <h5>Valor do serviço: {formatCurrency(price)}</h5>
                <span>Criado em: {dayjs(createdAt).format("DD/MM/YYYY")}</span>
            </div>
        </StyledServiceInfo>
    );
}

const StyledServiceInfo = styled.div`
    position: fixed;
    z-index: 4;
    top: 10px;
    left: auto;
    
    max-height: 630px; // 630

    &>div {
        max-height: inherit;
        overflow-x: hidden;
        overflow-y: scroll;

        background-image: url(${samuraiPng});
        background-size: cover;
        background-repeat: no-repeat;
        padding: 20px;
        max-width: calc(100vw - 30px);
        border-radius: 30px;
        opacity: 0.99;

        color: white;
        font-size: 1.2em;
        line-height: 30px;

        h1 {
            font-size: 1.5em;
            text-align: center;
            line-height: 35px;
            margin-bottom: 15px;
        }
        h2 {
            color: red;
            font-size: 1.5em;
            font-weight: 500;
        }
        h3 {
            font-size: 1.27em;
            text-align: center;
            margin-top: 20px;
        }
        h6 {
            text-align: center;
            font-size: 1.15em;
            line-height: 40px;
        }
        h5 {
            font-size: 1.05em;
            color: red;
            margin-bottom: 10px;
        }
        p {
            margin-bottom: 10px;
        }
        span {
            font-size: 0.85em;
        }
        
        position: relative;
        
        &::before {
            overflow-y: scroll;

            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: inherit;
            background-color: rgba(0, 0, 0, 0.75);
            z-index: -1;
        }
    }
`;