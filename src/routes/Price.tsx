import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

interface IPriceProp {
  percent1h?: number;
  percent12h?: number;
  percent7d?: number;
  percent30d?: number;
  percent24h?: number;
}
const PriceInfo = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 10px;
`;
const NowPriceBanner = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;
const NowPrice = styled.span`
  background-color: white;
  align-items: center;
  padding: 10px 20px;
  color: #227093;
`;

function Price({ percent1h, percent12h, percent7d, percent30d, percent24h }: IPriceProp) {
  const percentList = [
    { text: "1h", value: percent1h },
    { text: "12h", value: percent12h },
    { text: "YesterDay", value: percent24h },
    { text: "7d", value: percent7d },
    { text: "30d", value: percent30d },
  ];
  return (
    <>
      <NowPriceBanner>
        <NowPrice>YesterDay: $ {percent24h}</NowPrice>
      </NowPriceBanner>
      <PriceInfo>1HoursAgo : {percent1h}%</PriceInfo>
      <PriceInfo>12HoursAgo : {percent12h}%</PriceInfo>
      <PriceInfo>LastWeek : {percent7d}%</PriceInfo>
      <PriceInfo>LastMonth : {percent30d}%</PriceInfo>
    </>
  );
}

export default Price;