import styled from "styled-components"
import { Link } from "react-router-dom";
export default function Sucesso({nome, cpf, selecionados, assentos, setNome, setCpf, setSelecionados}){
    return (
        <Container>
            <TextoSucesso>Pedido feito <br/> com sucesso!</TextoSucesso>
            <Titulo>Filme e sessão</Titulo>
            <Dados>{assentos.movie.title}<br/>{assentos.day.date} {assentos.name}</Dados>
            <Titulo>Ingressos</Titulo>
            <Dados>{selecionados.map((s) => <p key={s.id}>Assento {s.name}</p>)}</Dados>
            <Titulo>Comprador</Titulo>
            <Dados>Nome: {nome} <br/> CPF: {cpf}</Dados>
            <Link to="/"><Botao onClick={() => {setNome("");setCpf("");setSelecionados([...[]]);}}>Voltar pra Home</Botao></Link>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Titulo = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #293845;
    padding-left: 29px;
    padding-bottom: 10px;
    align-self: start;
`
const Dados = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.04em;
    color: #293845;
    padding-left: 29px;
    padding-bottom: 50px;
    align-self: start;
`
const TextoSucesso = styled.div`
    width: 100%;
    height: 110px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #247A6B;
`
const Botao = styled.button`
    width: 225px;
    height: 42px;
    background-color: #E8833A;
    border-radius: 3px;
    border: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    margin-top: 50px;
`