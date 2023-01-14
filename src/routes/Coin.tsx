import { useParams } from "react-router-dom";

interface ParamsProp{
    coinId:string;
}

function Coin(){
    const {coinId} = useParams<ParamsProp>();
    return <h1>Coin: {coinId}</h1>
}
export default Coin;