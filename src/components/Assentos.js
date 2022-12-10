import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Texto from './Texto';
import Rodape from './Rodape';
import Assento from './Assento';
import Descricao from './Descricao';
import Formulario from './Formulario';
import styled from 'styled-components';

export default function Assentos({setIdAssentos, idSessao, setVoltar, nome, setNome, cpf, setCpf, selecionados, setSelecionados, assentos, setAssentos}) {
    const params = useParams();
    const [seats, setSeats] = useState([]);
    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${params.id}/seats`);
        requisicao.then(resposta => {
        setAssentos(resposta.data);
        setSeats(resposta.data.seats);
        });
        setVoltar(`/sessoes/${idSessao}`);
        setIdAssentos(params.id);
        setSelecionados([...[]]);
    }, [params.id, setAssentos, setVoltar, idSessao, setIdAssentos, setSelecionados]);
    return (
        <>
            <Texto texto="Selecione o(s) assento(s)"/>
            <ContainerAssentos>{seats.map((a) => <Assento key={a.id} seat={a} selecionados={selecionados} setSelecionados={setSelecionados}/>)}</ContainerAssentos>
            <Descricao />
            <Formulario selecionados={selecionados} nome={nome} setNome={setNome} cpf={cpf} setCpf={setCpf}/>
            <Rodape sessao={assentos}/>
        </>
    );
}
const ContainerAssentos = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 24px;
`;