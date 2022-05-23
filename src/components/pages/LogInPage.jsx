import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../LogInPage.css';
import {MdArrowBackIos} from 'react-icons/md';
import { Link } from "react-router-dom";

export default class LogInPage extends Component {
  render() {
    return (
      <>
      <div className="login-topbar">
        <Link to="/"><MdArrowBackIos size="60%" className="login-topbar-icon"/></Link>
      </div>
      <div className="login-page">
      <div className="login-form">
        <Form>
          <Form.Label htmlFor="basic-url" style={{display: "flex", justifyContent: "center", fontSize: "larger"}}>
            Ingresa a tu cuenta
            </Form.Label>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo electronico</Form.Label>
            <Form.Control type="email" placeholder="casos-covid@prueba.com.mx" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="**************" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Ingresar
          </Button>
        </Form>
      </div>
      <div className="register-box">
        <Link to="/register">
          <Button variant="outline-secondary">
            Registrarte dentro del sistema
          </Button>
        </Link>
      </div>
      </div>
      </>
    );
  }
}