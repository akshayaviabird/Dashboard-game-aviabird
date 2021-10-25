import React, { useState } from "react";
import "../login/login.css";
import { Link, useHistory } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import image from "../../ABRD.png";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const loginsubmit = (e) => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <React.Fragment>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={loginsubmit}>
            <img src={image} className="img-login" alt="" />
            <div className="form-group">
              <input
                type="text"
                value={name}
                className="form-control"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
              Register
            </button>
            <Row>
              <Col className="fixed-margin">
                Already Registerd? <Link to="/">Login</Link>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
