import { Link } from "react-router-dom";
import React, { Component } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import Dropdown from "react-bootstrap/Dropdown";
import Badge from "react-bootstrap/Badge";
import "./TopBar.css";

export default class TopBar extends Component {
  render() {
    return (
      <div className="topbar">
        <Dropdown className="d-inline">
          <Dropdown.Toggle
            id="dropdown-autoclose-true"
            className="topbar-dropdown"
          >
            Selecciona las estadisticas
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Por estado</Dropdown.Item>
            <Dropdown.Item href="#">Por fecha</Dropdown.Item>
            <Dropdown.Item href="#">Por tipo de paciente</Dropdown.Item>
            <Dropdown.Item href="#">Por otros</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Badge bg="light" text="dark" style={{ height: "fit-content" }}>
          Ultima actualización: 00:01 a.m.
        </Badge>
        <Link to="/login" style={{ textDecoration: "none !important" }}>
          <MdOutlineDashboard className="topbar-text" size="25" />
        </Link>
      </div>
    );
  }
}
