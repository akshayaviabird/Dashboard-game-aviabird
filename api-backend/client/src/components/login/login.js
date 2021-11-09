import React, { useState } from "react";
import "../login/login.css";
import image from "../../ABRD.png";
import { Link ,Redirect} from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { authenticate, isAutheticated, signin } from "../../api/auth";
import Loader from "../common/loader";

const Login = () => {
  
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false
  }); 

  const { email, password, error, loading } = values;
  const  data = isAutheticated();

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
        // if (data.success === 'false') { 
        //   setValues({ ...values, error: data.msg, loading: false });
        // } else {
          console.log(data)

          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true
            }); 
          });
        // }
      }).catch((err)=>{
        console.log('asdsd',err)
        setValues({ ...values, error: err.message, loading: false });
      })
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
    console.log('datat',data)
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
      <div className="row" style={{marginTop:'12px'}}>
        <div className="col-md-4 offset-sm-4 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
        <div className="col-md-4 offset-sm-4 text-left">
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
            <button   type="submit" className="login-btn">
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
