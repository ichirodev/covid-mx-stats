import EntityData from "../EntityData";
import React, { useState } from "react";
import DateData from "../DateData";
import PatientData from "../PatientData";
import OtherData from "../OtherData";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import Badge from "react-bootstrap/Badge";
import "../TopBar.css";

const HomePage = () => {
  const [activeComponent, setActive] = useState(0);
  return (
    <>
      <div className="topbar">
        <Dropdown className="d-inline">
          <Dropdown.Toggle
            id="dropdown-autoclose-true"
            className="topbar-dropdown"
          >
            Selecciona las estadisticas
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setActive(0)}>
              Por estado
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setActive(1)}>
              Por fecha
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setActive(2)}>
              Por tipo de paciente
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div style={{ width: "100%" }}></div>
        <Badge
          bg="light"
          text="dark"
          style={{
            height: "fit-content",
            marginLeft: "4px",
            marginRight: "4px",
          }}
        >
          Versión Alpha
        </Badge>
      </div>
      <div>
        {activeComponent === 0 && <EntityData />}
        {activeComponent === 1 && <DateData />}
        {activeComponent === 2 && <PatientData />}
        {/*activeComponent === 3 && <OtherData />*/}
      </div>
    </>
  );
};

export default HomePage;
