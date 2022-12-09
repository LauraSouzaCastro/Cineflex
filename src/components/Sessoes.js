import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Dia from './Dia';
export default function Sessoes() {
    const params = useParams();
    const [sessoes, setSessoes] = useState([]);
    const [dias, setDias] = useState([]);
    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${params.id}/showtimes`);
        requisicao.then(resposta => {
            setSessoes(resposta.data);
            setDias(resposta.data.days);
        });
    }, [params.id]);
    return(
        <>
            <Texto>Selecione o horário</Texto>
            <ContainerDia>
                {dias.map((d) => <Dia key={d.id} dia={d}/>)}
            </ContainerDia>
            <Rodape>
                <CardFilme>
                    <img src={sessoes.posterURL} alt={sessoes.title} />
                </CardFilme>
                <p>{sessoes.title}</p>
            </Rodape>
        </>
    )
}

const Texto = styled.div`
  width: 100%;
  height: 100px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.04em;
  color: #293845;
`
const Rodape = styled.div`
    position: fixed;
    width: 100%;
    height: 117px;
    left: 0;
    bottom: 0;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    display: flex;
    align-items: center;
    padding-left: 10px;
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        color: #293845;
        margin-left: 14px;
    }
`
const CardFilme = styled.div`
    width: 64px;
    height: 89px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 48px;
        height: 72px;
    }
`
const ContainerDia = styled.div`
    margin-bottom: 130px;
`