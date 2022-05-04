import React from "react";
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
import { Line } from "react-chartjs-2";
import "./graphics.css";
{
  /* For information on the charts documentation
   * https://react-chartjs-2.js.org/
   */
}

{
  /* Neccesary shit for React-ChartJS to work*/
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const lineOptions = {
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      beginAtZero: true,
    },
  },
  maintainAspectRatio: false,
};

const DateData = () => {
  return (
    <div className="graphics">
      <Line
        height={400}
        width={600}
        options={lineOptions}
        data={{
          labels: ["Jalisco", "Veracruh", "Sinaloa"],
          datasets: [
            {
              data: [1000, 1320, 1290],
              backgroundColor: "rgb(219, 38, 123)",
              borderColor: "rgba(48, 28, 37, 0.699)",
            },
          ],
        }}
      />
    </div>
  );
};

export default DateData;
