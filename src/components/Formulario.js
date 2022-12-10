import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Formulario({selecionados, nome, setNome, cpf, setCpf}){
    const navigate = useNavigate();
    function reservar (event) {
		event.preventDefault();
        if(selecionados.length === 0){
            alert("Selecione pelo menos um assento!")
        }else{
            const ids = selecionados.map((s) => s.id);
            const requisicao = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", {
                ids: ids,
                name: nome,
                cpf: cpf
            });
            requisicao.then(() => navigate("/sucesso")) ;
        }
	}
    return(
        <ContainerForm onSubmit={reservar}>
            <p>Nome do comprador:</p>
            <CaixaInput required type="text" value={nome} placeholder="Digite seu nome..." onChange={e => setNome(e.target.value)} data-test="client-name"/>
            <p>CPF do comprador:</p>
            <CaixaInput required type="text" value={cpf} placeholder="Digite seu CPF..." onChange={e => setCpf(e.target.value)} data-test="client-cpf"/>
            <Botao type="submit" data-test="book-seat-btn">Reservar assento(s)</Botao>
        </ContainerForm>
    );
}

const CaixaInput = styled.input`
    margin-left: 24px;
    width: 327px;
    height: 51px;
    background-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    padding-left: 18px;
    margin-bottom: 10px;
    &::placeholder{
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        color: #AFAFAF;
    }
`;
const ContainerForm = styled.form`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    margin-bottom: 150px;
    p{
        margin-left: 24px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #293845;
        margin-bottom: 5px;
    }
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
    align-self: center;
    margin-top: 57px;
`;