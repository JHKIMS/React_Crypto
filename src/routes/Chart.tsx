import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexCharts from "react-apexcharts";

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string
  high: string
  low: string
  close: string
  volume: string
  market_cap: number;
}
interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>fetchCoinHistory(coinId));
  return (
  <div>
    {isLoading? "Loading Chart...":( 
  <ApexCharts 
    type="line"
    series={[
        {
            name: "ChartPrice",
            data: data?.map((price) => parseFloat(price.close))??[]
        },
    ]}
    options={{
        theme:{
            mode: "light"
        },
        chart:{
            height: 300,
            width:500,
            background: "tranparent",
        },
        grid: { 
            show: false,
        },
        stroke: {
            curve: "smooth",
            width: 5,
        },
        xaxis: {
            axisBorder: {show: false},
            axisTicks: {show: false},
            labels: {show: false,}
        },
        yaxis: {
            labels: {
                style:{
                    fontSize: '15px',
                    fontWeight: 700,
                }  
            }
        }
    }}
    />
  )}
</div>
  )
}

export default Chart;
