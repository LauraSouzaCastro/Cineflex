import { useParams } from 'react-router-dom';
import styled from 'styled-components';
export default function Sessoes() {
    const params = useParams();
	console.log(params); 
    return(
        <>
            <Texto>Selecione o horário</Texto>
        </>
    )
}

const Texto = styled.div`
  width: 100%;
  height: 100px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.04em;
  color: #293845;
`