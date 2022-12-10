import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Texto from './Texto';
import Rodape from './Rodape';
import Assento from './Assento';
import Descricao from './Descricao';
import Formulario from './Formulario';
import styled from 'styled-components';

export default function Assentos() {
    const params = useParams();
    const [assentos, setAssentos] = useState([]);
    const [seats, setSeats] = useState([])
    const [selecionados, setSelecionados] = useState([])
    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${params.id}/seats`);
        requisicao.then(resposta => {
            setAssentos(resposta.data);
            setSeats(resposta.data.seats);
        });
    }, [params.id]);
    console.log(selecionados)

    return (
        <>
            <Texto texto="Selecione o(s) assento(s)"/>
            <ContainerAssentos>{seats.map((a) => <Assento key={a.id} seat={a} selecionados={selecionados} setSelecionados={setSelecionados}/>)}</ContainerAssentos>
            <Descricao />
            <Formulario />
            <Rodape sessao={assentos}/>
        </>
    )
}
const ContainerAssentos = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 24px;
`