import React from "react";
import { useState } from "react";
import { Col, Container, Form, Button, Row } from "react-bootstrap";
import "./LoginScreen.css";
import loginIcon from "../images/loginIcon.png";
import loginBG from "../images/loginBG.png";

export default function LoginScreen() {
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
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="E-mail"
                value={Email}
                id="email "
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value={Password}
                id="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary btn-block" type="submit">
              Login
            </Button>

            <div className="text-left mt-3">
              <a href="#">
                <small className="reset">Reset Password</small>
              </a>
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
