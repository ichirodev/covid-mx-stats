import React, { Component } from "react";
import TopBar from '../TopBar';
import Dashboard from '../Dashboard';

export default class DashboardPage extends Component {
    render() {
        return (
            <>
            <TopBar />
            <Dashboard />
            </>
        )
    }
}