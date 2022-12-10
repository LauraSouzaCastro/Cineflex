import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
export default function Sucesso({idAssentos, setVoltar, nome, cpf, selecionados, assentos}){
    useEffect(() => {
       setVoltar(`/assentos/${idAssentos}`);
    }, [idAssentos, setVoltar]);
    return (
        <Container>
            <TextoSucesso>Pedido feito <br/> com sucesso!</TextoSucesso>
            <div data-test="movie-info">
                <Titulo>Filme e sessão</Titulo>
                <Dados>{assentos.movie.title}<br/>{assentos.day.date} {assentos.name}</Dados>
            </div>
            <div data-test="seats-info">
                <Titulo>Ingressos</Titulo>
                <Dados>{selecionados.map((s) => <p key={s.id}>Assento {s.name}</p>)}</Dados>
            </div>
            <div data-test="client-info">
                <Titulo>Comprador</Titulo>
                <Dados>Nome: {nome} <br/> CPF: {cpf}</Dados>
            </div>
            <Link to="/" data-test="go-home-btn"><Botao>Voltar pra Home</Botao></Link>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    div{
        align-self: start;
    }
`;
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
`;
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
`;
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
`;
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
    margin-bottom: 20px;
`;