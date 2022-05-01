import { Link } from "react-router-dom";
import React, { Component } from "react";
import {MdOutlineDashboard} from 'react-icons/md';
import "./TopBar.css";

export default class TopBar extends Component {
    render() {
        return (
            <div className="topbar">
                <Link to="/login" style={{textDecoration: "none !important"}}><MdOutlineDashboard className="topbar-text" size="1.5rem"/></Link>
            </div>
        )
    }
}