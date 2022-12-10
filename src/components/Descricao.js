import styled from 'styled-components';

export default function Descricao(){
    return(
        <ContainerDescricao>
            <div>
                <CorAssento cor="#1AAE9E" borda="#0E7D71"/>
                <p>Selecionado</p>
            </div>
            <div>
                <CorAssento cor="#C3CFD9" borda="#7B8B99"/>
                <p>Disponível</p>
            </div>
            <div>
                <CorAssento cor="#FBE192" borda="#F7C52B"/>
                <p>Indisponível</p>
            </div>
        </ContainerDescricao>
    );
}

const CorAssento = styled.div`
    width: 25px;
    height: 25px;
    background-color: ${props => props.cor};
    border: 1px solid;
    border-color: ${props => props.borda};
    border-radius: 17px;
    margin-bottom: 5px;
`;
const ContainerDescricao = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 0 40px;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        display: flex;
        align-items: center;
        letter-spacing: -0.013em;
        color: #4E5A65;
    }
`;