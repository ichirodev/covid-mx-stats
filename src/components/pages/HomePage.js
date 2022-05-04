import EntityData from "../EntityData";
import React, { Component } from "react";
import TopBar from "../TopBar";
import DateData from "../DateData";
import PatientData from "../PatientData";
import OtherData from "../OtherData";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <TopBar />
        <div>
          <EntityData />
          <DateData />
          <PatientData />
          <OtherData />
        </div>
      </>
    );
  }
}
