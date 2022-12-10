import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Texto from './Texto';
export default function Filmes({setNome, setCpf, setSelecionados, setAssentos, setVoltar, setIdSessao, setIdAssentos}) {
    const [filmes, setFilmes] = useState([]);
    useEffect(() => {
          const requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
          requisicao.then(resposta => {
              setFilmes(resposta.data);
          });
          setNome("");
          setCpf("");
          setSelecionados([]);
          setAssentos([]);
          setVoltar(null);
          setIdSessao(null);
          setIdAssentos(null);
      }, [setNome, setCpf, setSelecionados, setAssentos, setVoltar, setIdSessao, setIdAssentos]);
    return (
        <>
            <Texto texto="Selecione o filme" />
            <ContainerFilmes>
              {filmes.map((f) => <Link to={`/sessoes/${f.id}`} key={f.id} data-test="movie"><CardFilme><img src={f.posterURL} alt={f.title}/></CardFilme></Link>)}
            </ContainerFilmes>
        </>
    );
}

const ContainerFilmes = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
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
`;