import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import GlobalStyle from './globalStyles';
import Filmes from './Filmes';
import Sessoes from './Sessoes';
import Assentos from './Assentos';
import Sucesso from './Sucesso';
import { useState } from 'react';
import back from '../assets/back.png';
import { Link } from "react-router-dom";

export default function App() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [selecionados, setSelecionados] = useState([]);
  const [assentos, setAssentos] = useState([]);
  const [voltar, setVoltar] = useState(null);
  const [idSessao, setIdSessao] = useState(null);
  const [idAssentos, setIdAssentos] = useState(null);
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <AppStyled>
        <Topo voltar={voltar}><Link to={voltar} data-test="go-home-header-btn"><img src={back} alt="voltar"/></Link><p>CINEFLEX</p></Topo>
        <Routes>
          <Route path="/" element={<Filmes setNome={setNome} setCpf={setCpf} setSelecionados={setSelecionados} setAssentos={setAssentos} setVoltar={setVoltar} setIdSessao={setIdSessao} setIdAssentos={setIdAssentos}/>} />
          <Route path="/sessoes/:id" element={<Sessoes setIdSessao={setIdSessao} setVoltar={setVoltar}/>} />
          <Route path="/assentos/:id" element={<Assentos setIdAssentos={setIdAssentos} idSessao={idSessao} voltar={voltar} nome={nome} setNome={setNome} cpf={cpf} setCpf={setCpf} selecionados={selecionados} setSelecionados={setSelecionados} assentos={assentos} setAssentos={setAssentos} setVoltar={setVoltar}/>} />
          <Route path="/sucesso" element={<Sucesso setVoltar={setVoltar} idAssentos={idAssentos} nome={nome} cpf={cpf} selecionados={selecionados} assentos={assentos}/>} />
        </Routes>
      </AppStyled>
    </BrowserRouter>
  );
}
const AppStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 70px;
`;
const Topo = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 67px;
  display: flex;
  align-items: center;
  background-color: #C3CFD9;
  color: #E8833A;
  font-family: 'Roboto', sans-serif;
  font-size: 34px;
  line-height: 40px;
  img{
    width: 30px;
    display: ${props => props.voltar ? "flex" : "none"};
  }
  p{
    width: 100%;
    text-align: center;
    padding-right: ${props => props.voltar ? "30px" : "none"};
  }
`;