import React from "react";
import { useState } from "react";
import { Col, Container, Form, Button, Row } from "react-bootstrap";
import "./LoginScreen.css";
import loginIcon from "../images/loginIcon.png";
import loginBG from "../images/loginBG.png";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  return (
    <Container className="mt-5">
      <Row>
        <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
          <img className="icon-img" src={loginIcon} alt="icon" />
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                type="string"
                placeholder="Name"
                id="name "
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSurname">
              <Form.Control
                type="string"
                placeholder="Surname"
                id="surname"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="E-Mail"
                id="email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                id="password"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                id="confirm-password"
                required
              />
            </Form.Group>

            <Button variant="primary btn-block" type="submit">
              Sign Up
            </Button>

            <div className="text-left mt-3">
              <a href="#">
                <small className="reset">Reset Password</small>
              </a>
            </div>

            <div className="text-left mt-3">
              <Link to="/login">
                <small className="reset">Already have an account?</small>
              </Link>
            </div>
          </Form>
        </Col>

        <Col lg={8} md={6} sm={12}>
          <img className="w-100" src={loginBG} alt="" />
        </Col>
      </Row>
    </Container>
  );
}
