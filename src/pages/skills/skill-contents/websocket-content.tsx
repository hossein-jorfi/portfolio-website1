import { LineChart } from "@/components/ui/line-chart";
import { useEffect, useState } from "react";

const CHART_DATA = [
  { month: "January", price: 186, resistance: 80 },
  { month: "February", price: 305, resistance: 200 },
  { month: "March", price: 237, resistance: 120 },
  { month: "April", price: 73, resistance: 190 },
  { month: "May", price: 209, resistance: 130 },
  { month: "June", price: 214, resistance: 140 },
];
const WebsocketContent = () => {
  const [chartData, setChartData] = useState(CHART_DATA);
  const [profit, setProfit] = useState(10);

  useEffect(() => {
    const id = setInterval(() => {
      setChartData(
        chartData?.map((item, index) => {
          if (index === chartData?.length - 1) {
            return {
              ...item,
              price: Math.random() * 1000,
              resistance: Math.random() * 1000,
            };
          } else {
            return item;
          }
        })
      );
      setProfit(Math.random() * (100 - -100) + -100);
    }, 1000);
    return () => clearInterval(id);
  }, [chartData, profit]);

  return (
    <div>
      <Profit value={profit} />
      {/* <div className="border-2"> */}
        <LineChart chartData={chartData} />
      {/* </div> */}
    </div>
  );
};

export default WebsocketContent;

const Profit = ({ value }: { value: number }) => {
  return (
    <>
      <p
        className={`font-bold ${
          value >= 0 ? "text-green-600" : "text-red-600"
        }`}
      >
        {value >= 0 ? "+" : null}
        {value?.toFixed(2)}%
      </p>
    </>
  );
};
