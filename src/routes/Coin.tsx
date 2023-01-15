import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

interface ParamsProp{
    coinId:string;
}
interface RouteState{
  name:string;
}

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
 `;
 const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;
const Loader = styled.span`
  text-align: center;
  display: block;
`

function Coin(){
    const [loading, setLoading] = useState(true);
    const {coinId} = useParams<ParamsProp>();
    const {state} = useLocation<RouteState>();
    // useLocation : ReactRouterDom이 보내주는 것
    return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading...(I can't find)"}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
    )
}
export default Coin;