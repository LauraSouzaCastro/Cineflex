import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from "react-router-dom";
export default function Filmes() {
    const [filmes, setFilmes] = useState([])
    useEffect(() => {
          const requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
          requisicao.then(resposta => {
              setFilmes(resposta.data);
          });
      }, []);
    return (
        <>
            <Texto>Selecione o filme</Texto>
            <ContainerFilmes>
            {filmes.map((f) => <Link to={`/sessoes/${f.id}`} key={f.id}><CardFilme><img src={f.posterURL} alt={f.title}/></CardFilme></Link>)}
            </ContainerFilmes>
        </>
    )
}

const ContainerFilmes = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
const CardFilme = styled.div`
  width: 145px;
  height: 209px;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  margin: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 129px;
    height: 193px;
  }
`
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