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

const OtherData = () => {
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
              backgroundColor: "red",
              borderColor: "black",
            },
          ],
        }}
      />
    </div>
  );
};

export default OtherData;
