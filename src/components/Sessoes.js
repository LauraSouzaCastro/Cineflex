import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Dia from './Dia';
import Texto from './Texto';
import Rodape from './Rodape';

export default function Sessoes({setVoltar, setIdSessao}) {
    const params = useParams();
    const [sessoes, setSessoes] = useState([]);
    const [dias, setDias] = useState([]);
    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${params.id}/showtimes`);
        requisicao.then(resposta => {
            setSessoes(resposta.data);
            setDias(resposta.data.days);
        });
        setVoltar("/");
        setIdSessao(params.id);
    }, [params.id, setVoltar, setIdSessao]);
    return(
        <>
            <Texto texto="Selecione o horário" />
            <ContainerDia>
                {dias.map((d) => <Dia key={d.id} dia={d}/>)}
            </ContainerDia>
            <Rodape sessao={sessoes}/>
        </>
    );
}
const ContainerDia = styled.div`
    margin-bottom: 130px;
`;