import styled from 'styled-components';
import GlobalStyle from './globalStyles';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function App() {
  const [filmes, setFilmes] = useState([])
  useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
		requisicao.then(resposta => {
			setFilmes(resposta.data);
		});
	}, []);
  return (
    <>
      <GlobalStyle/>
      <AppStyled>
        <Topo>CINEFLEX</Topo>
        <Texto>Selecione o filme</Texto>
        <Filmes>
          {filmes.map((f)=> <Filme key={f.id}><img src={f.posterURL} alt={f.title}/></Filme>)}
        </Filmes>
      </AppStyled>
    </>
    
  );
}
const AppStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 70px;
`
const Topo = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 67px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #C3CFD9;
  color: #E8833A;
  font-family: 'Roboto', sans-serif;
  font-size: 34px;
  line-height: 40px;
`
const Filmes = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
const Filme = styled.div`
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