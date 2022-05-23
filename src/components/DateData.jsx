import React, { Component, useEffect } from "react";
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
import { Dropdown } from "react-bootstrap";

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

class DateData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      d_dates: ['1999/10/23'],
      d_cases: [1239],
      d_time: "month"
    }
  }

  fetchApiData(pTime) {
    fetch('http://localhost:1337/dateLatest', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({reqTime: pTime})
    })
    .then(response => 
      response.json()
    )
    .then(data => {
      if(data.message) {
        console.log(data.message)
      } else {
        this.setState({
          d_cases: data.cases.reverse(),
          d_dates: data.dates.reverse()
        })
      }
    })
  }
  componentDidMount() {
    this.fetchApiData(this.state.d_time)
  }

  render() {
    const dates = this.state.d_dates;
    const cases = this.state.d_cases;
  return (
    <div className="graphics">
      <Dropdown className="d-inline">
          <Dropdown.Toggle
            variant="secondary"
            style={{fontSize: "12px"}}
          >
            Selecciona un periodo de tiempo...
          </Dropdown.Toggle>
          <Dropdown.Menu variant="secondary"
          style={{fontSize: "11px"}}>
            <Dropdown.Item onClick={() => {
              this.fetchApiData("month");
            }}>
              Un mes atras
            </Dropdown.Item>
            <Dropdown.Item onClick={() => {
              this.fetchApiData("week");
              }}>
              Una semana atras
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      <Line
        height={400}
        width={600}
        options={lineOptions}
        data={{
          labels: dates,
          datasets: [
            {
              label: "Numero de casos registrados",
              data: cases,
              backgroundColor: "rgb(85, 140, 217)",
              borderColor: "rgba(19, 29, 43, 0.8)",
            },
          ],
        }}
      />
    </div>
  );
}
};

export default DateData;
