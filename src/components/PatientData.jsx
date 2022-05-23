import React, { Component } from "react";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { Dropdown } from "react-bootstrap";
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
  ArcElement,
  Tooltip,
  Legend
);

class PatientData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      d_types: ["Sin datos"],
      d_cases: [999],
      d_time: "month"
    }
  }

  fetchApiData(pTime) {
    fetch('http://localhost:1337/typeLatest', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({reqTime: pTime})
    })
    .then(response => response.json())
    .then(data => {
      if (data.message) {
        console.log(data.message)
      } else {
        this.setState({
          d_cases: data.cases,
          d_types: data.types
        })
      }
    })
  }

  componentDidMount() {
    this.fetchApiData(this.state.d_time);
  }
  render() {
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
      <Pie
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
        }}
        data={{
          labels: this.state.d_types,
          datasets: [
            {
              data: this.state.d_cases,
              backgroundColor: ["rgb(176, 132, 217)", 
              "rgb(230, 196, 129)",
              "rgb(216, 247, 193)",
              "rgb(114, 134, 179)",
              "rgb(250, 115, 151)",
              "rgb(168, 164, 245)",
              "rgb(82, 167, 186)",
              "rgb(135, 168, 93)",
              "rgb(71, 64, 66)"],
              borderColor: "black",
            },
          ],
        }}
      />
    </div>
  );
}
};

export default PatientData;
