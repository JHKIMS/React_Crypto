import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexCharts from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}
interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const isDark = useRecoilValue(isDarkAtom);

  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  let candleData = data ?? [];
	if ("error" in candleData) {
		candleData = [];
	}
  return (
    <div>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        <ApexCharts
          type="candlestick"
          series={[
            {
              name: "시세",
              data: candleData.map((price) => ({
                x: price.time_close * 1000,
                y: [price.open, price.high, price.low, price.close],
              })),
            },
          ]}
          
          options={{
            chart: {
              type: 'candlestick',
              height: 350
            },
            title: {
              text: 'CandleStick Chart',
              align: 'left'
            },
            xaxis: {
              type: 'datetime'
            },
            yaxis: {
              tooltip: {
                enabled: true
              }
            }
          }}
        />
      )}
    </div>
  );
}

export default Chart;
