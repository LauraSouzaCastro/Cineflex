import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import GlobalStyle from './globalStyles';
import Filmes from './Filmes';
import Sessoes from './Sessoes';
import Assentos from './Assentos'
import Sucesso from './Sucesso'

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <AppStyled>
        <Topo>CINEFLEX</Topo>
        <Routes>
          <Route path="/" element={<Filmes />} />
          <Route path="/sessoes/:id" element={<Sessoes />} />
          <Route path="/assentos/:id" element={<Assentos />} />
          <Route path="/sucesso" element={<Sucesso />} />
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