import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import GlobalStyle from './globalStyles';
import Filmes from './Filmes';
import Sessoes from './Sessoes';
import Assentos from './Assentos'
import Sucesso from './Sucesso'
import { useState } from 'react';

export default function App() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [selecionados, setSelecionados] = useState([]);
  const [assentos, setAssentos] = useState([]);
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <AppStyled>
        <Topo>CINEFLEX</Topo>
        <Routes>
          <Route path="/" element={<Filmes />} />
          <Route path="/sessoes/:id" element={<Sessoes />} />
          <Route path="/assentos/:id" element={<Assentos nome={nome} setNome={setNome} cpf={cpf} setCpf={setCpf} selecionados={selecionados} setSelecionados={setSelecionados} assentos={assentos} setAssentos={setAssentos}/>} />
          <Route path="/sucesso" element={<Sucesso nome={nome} cpf={cpf} selecionados={selecionados} assentos={assentos} setNome={setNome} setCpf={setCpf} setSelecionados={setSelecionados}/>} />
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