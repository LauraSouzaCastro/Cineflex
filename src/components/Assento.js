import styled from "styled-components"

export default function Assento({seat}) {
    return(
        <BotaoAssento disponivel={seat.isAvailable}>{seat.name}</BotaoAssento>
    )
}
const BotaoAssento = styled.button`
    box-sizing: border-box;
    width: 26px;
    height: 26px;
    background-color: ${props => props.disponivel ?  "#C3CFD9": "#FBE192"};
    border: 1px solid;
    border-color: ${props => props.disponivel ?  "#808F9D": "#F7C52B"};
    border-radius: 12px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.04em;
    margin-right: 5px;
    margin-bottom: 18px;
`