import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  days: string[];
  dataValue: number[];
  label: string;
}
export default function LineChart({ days, dataValue, label }: LineChartProps) {
  const data = {
    labels: days,
    datasets: [
      {
        label: label,
        data: dataValue,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: label,
      },
    },
  };

  return <Line data={data} options={options} />;
}
