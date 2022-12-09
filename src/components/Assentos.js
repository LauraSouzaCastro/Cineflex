import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Texto from './Texto';
import Rodape from './Rodape';

export default function Sessoes() {
    const params = useParams();
    const [assentos, setAssentos] = useState([]);
    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${params.id}/seats`);
        requisicao.then(resposta => {
            setAssentos(resposta.data);
        });
    }, [params.id]);
    console.log(assentos)
    return (
        <>
            <Texto texto="Selecione o(s) assento(s)" />
            <Rodape sessao={assentos}/>
        </>
    )
}