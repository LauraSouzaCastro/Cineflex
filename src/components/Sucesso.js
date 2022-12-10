import styled from "styled-components"

export default function Sucesso({nome, cpf, selecionados, assentos}){
    console.log(assentos)
    return (
        <div>
            <TextoSucesso>Pedido feito <br/> com sucesso!</TextoSucesso>
            <Titulo>Filme e sessão</Titulo>
            <Dados>{assentos.movie.title}<br/>{assentos.day.date} {assentos.name}</Dados>
            <Titulo>Ingressos</Titulo>
            <Dados>{selecionados.map((s) => <p key={s.id}>Assento {s.name}</p>)}</Dados>
            <Titulo>Comprador</Titulo>
            <Dados>Nome: {nome} <br/> CPF: {cpf}</Dados>
        </div>
    )
}

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