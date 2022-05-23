import React, { Component } from "react";
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
  BarElement,
  Title,
  Tooltip,
  Legend
);

class EntityData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      d_time: "month",
      d_entities: ["Tierra malvada"],
      d_cases: [234]
    }
  }

  fetchApiData(pTime) {
    fetch('http://localhost:1337/entity', {
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
          d_entities: data.entities,
          d_cases: data.cases
        })
      }
    });
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
      <Bar
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
        }}
        data={{
          labels: this.state.d_entities,
          datasets: [
            {
              label: "Casos confirmados",
              data: this.state.d_cases,
              backgroundColor: "rgb(242, 136, 75)",
              borderColor: "rgba(23, 21, 19, 0.78)",
              borderWidth: "2",
            },
          ],
        }}
      />
    </div>
  );
}
};

export default EntityData;
