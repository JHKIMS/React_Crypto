import { useParams } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
    color: ${props => props.theme.accentColor}
`
function Coins(){
    const params = useParams();
    return <Title>Coins</Title>
}
export default Coins;