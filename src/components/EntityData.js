import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
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
  BarElement,
  Title,
  Tooltip,
  Legend
);

const EntityData = () => {
  return (
    <div className="graphics">
      <Bar
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
        }}
        data={{
          labels: ["Jalisco", "Veracruh", "Sinaloa"],
          datasets: [
            {
              data: [1000, 1320, 1290],
              backgroundColor: "rgb(255, 115, 60)",
              borderColor: "rgba(82, 82, 82, 0.78)",
              borderWidth: "4",
            },
          ],
        }}
      />
    </div>
  );
};

export default EntityData;
