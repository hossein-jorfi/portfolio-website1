import { LineChart } from "@/components/ui/line-chart";

const chartData = [
  { month: "January", price: 186, resistance: 80 },
  { month: "February", price: 305, resistance: 200 },
  { month: "March", price: 237, resistance: 120 },
  { month: "April", price: 73, resistance: 190 },
  { month: "May", price: 209, resistance: 130 },
  { month: "June", price: 214, resistance: 140 },
];
const WebsocketContent = () => {
  return (
    <div>
      <p>WebsocketContent</p>
      <LineChart chartData={chartData} />
    </div>
  );
};

export default WebsocketContent;
