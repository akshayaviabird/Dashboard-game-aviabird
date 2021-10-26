import React, { useState } from "react";
import "../login/login.css";
import image from "../../ABRD.png";
import { Link, useHistory ,Redirect} from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { authenticate, isAutheticated, signin } from "../../api/auth";
import Loader from "../common/loader";

const Login = () => {
 
  const history = useHistory();
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false
  });

  const { email, password, error, loading, didRedirect } = values;
  const { data } = isAutheticated();

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const loginsubmit = (e) => {
    e.preventDefault();
    if(email==='' || password === ''){
      return
    }
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }) 
    .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true
            }); 
          });
        }
      })
      .catch((data)=>{
        console.log("signin request failed")
      });

  };

  const performRedirect = () => {
    //TODO: do a redirect here
    // if (didRedirect) {
    //   if (user) {
    //     history.push("/dashboard");
    //   } else {
    //     return <p>redirect to user dashboard</p>;
    //   }
    // }
    if (data) {
      return <Redirect to="/dashboard" />;
    }
  };
  const loadingMessage = () => {
    return (
      loading &&  <Loader/>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      {loadingMessage()}
      {errorMessage()}
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
                onChange={handleChange("email")}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                value={password}
                onChange={handleChange("password")}
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
      {performRedirect()}
    </React.Fragment>
  );
};

export default Login;
