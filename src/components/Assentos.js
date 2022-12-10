import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Texto from './Texto';
import Rodape from './Rodape';
import Assento from './Assento';
import styled from 'styled-components';

export default function Assentos() {
    const params = useParams();
    const [assentos, setAssentos] = useState([]);
    const [seats, setSeats] = useState([])
    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${params.id}/seats`);
        requisicao.then(resposta => {
            setAssentos(resposta.data);
            setSeats(resposta.data.seats);
        });
    }, [params.id]);
    console.log(seats)
    return (
        <>
            <Texto texto="Selecione o(s) assento(s)"/>
            <ContainerAssentos>{seats.map((a) => <Assento key={a.id} seat={a}/>)}</ContainerAssentos>
            <ContainerDescricao>
                <div>
                    <CorAssento cor="#1AAE9E" borda="#0E7D71"/>
                    <p>Selecionado</p>
                </div>
                <div>
                    <CorAssento cor="#C3CFD9" borda="#7B8B99"/>
                    <p>Disponível</p>
                </div>
                <div>
                    <CorAssento cor="#FBE192" borda="#F7C52B"/>
                    <p>Indisponível</p>
                </div>
            </ContainerDescricao>
            
            <Rodape sessao={assentos}/>
        </>
    )
}
const ContainerAssentos = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 24px;
`
const CorAssento = styled.div`
    width: 25px;
    height: 25px;
    background-color: ${props => props.cor};
    border: 1px solid;
    border-color: ${props => props.borda};
    border-radius: 17px;
    margin-bottom: 5px;
`
const ContainerDescricao = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 0 40px;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        display: flex;
        align-items: center;
        letter-spacing: -0.013em;
        color: #4E5A65;
    }
`