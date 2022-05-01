import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../LogInPage.css';
import {MdArrowBackIos} from 'react-icons/md';
import { Link } from "react-router-dom";

export default class RegisterPage extends Component {
  render() {
    return (
      <>
      <div className="login-topbar">
        <Link to="/login"><MdArrowBackIos size="60%" className="login-topbar-icon"/></Link>
      </div>
      <div className="login-page">
      <div className="login-form">
        <Form>
          <Form.Label htmlFor="basic-url" style={{display: "flex", justifyContent: "center", fontSize: "larger"}}>
            Crear una cuenta
            </Form.Label>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>* Nuevo correo electronico</Form.Label>
            <Form.Control type="email" placeholder="casos-covid@prueba.com.mx" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>* Nueva contraseña</Form.Label>
            <Form.Control type="password" placeholder="**************" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPasswordRepeat">
            <Form.Label>* Repite tu contraseña</Form.Label>
            <Form.Control type="password" placeholder="**************" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAccessCode">
            <Form.Label>* Código de acceso al sistema</Form.Label>
            <Form.Control type="text" placeholder="ABCDEF1234" rows={1}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Crear cuenta
          </Button>
        </Form>
      </div>
      </div>
      </>
    );
  }
}