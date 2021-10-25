import React, { useState } from "react";
import "../login/login.css";
import image from "../../ABRD.png";
import { Link, useHistory } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const loginsubmit = (e) => {
    e.preventDefault();
    history.push("/dashboard");
  };

  return (
    <React.Fragment>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={loginsubmit}>
            <img src={image} className="img-login" alt="" />

            <div className="form-group">
              <input
                type="email"
                value={email}
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
            <Row>
              <Col className="fixed-margin">
                New User? <Link to="/register">Register</Link>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
