import React from "react";
import "./LMS_style.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { BiLogIn } from "react-icons/bi";

const Login_Page = () => {
  return (
    <div className="Login_Page img-fluid">
      <Form className="Form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="text-white">Login ID</Form.Label>
          <Form.Control className="text" type="email" placeholder="Login" />
          <FaUserAlt className="icons" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="text-white">Password</Form.Label>
          <Form.Control
            className="text"
            type="password"
            placeholder="Password"
          />
          <RiLockPasswordFill className="icons" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            className="text-white"
            type="checkbox"
            label="Remeber Me"
          />
        </Form.Group>
        <Button variant="success">
          <BiLogIn /> Sign In
        </Button>
      </Form>
    </div>
  );
};
export default Login_Page;
