import React, { useState } from "react";
import "../login/login.css";
import image from "../../ABRD.png";
import { Link, useHistory } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import Loader from "../common/loader";
const ValidatedSignUpForm = () => {
  const history = useHistory();
  const [isLoading,setIsLaoding]=useState(false)
  return (
    <React.Fragment>
      {isLoading&&<Loader/>}
   <Formik
      initialValues={{ name:"",email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setIsLaoding(true)
        setTimeout(() => {
          fetch('http://localhost:3000/api/v1/auth/register',{
            method:'post',
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
          }).then((response)=>response.json())
          .then((data)=>{
            setIsLaoding(false)
            history.push("/");
            setSubmitting(false);
          }).catch((err)=>{
            console.log('error',err)
          }).finally(()=>{
            setIsLaoding(false)
          })
        }, 500);
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required('Name Required'),
        email: Yup.string().email().required("Email Required"),
        password: Yup.string()
          .required("No password provided.")
          .min(6, "Password is too short - should be 6 chars minimum.")
          // .matches(/(?=.*[0-9])/, "Password must contain a number."),
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <div className="auth-wrapper">
            <div className="auth-inner">
              <form onSubmit={handleSubmit}>
                <img src={image} className="img-login" alt="avia-logo" />
                <div className="form-group">
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.name && touched.name ? "error" : "form-control"
                    }
                  />
                </div>
                {errors.name && touched.name && (
                  <div className="input-feedback">{errors.name}</div>
                )}

                <div className="form-group">
                  <input
                    name="email"
                    type="text"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.email && touched.email ? "error" : "form-control"
                    }
                  />
                </div>
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}

                <div className="form-group">
                  <input
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.password && touched.password
                        ? "error"
                        : "form-control"
                    }
                  />
                </div>
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
                <button
                  type="submit"
                  className="login-btn"
                  disabled={isSubmitting}
                >
                  Register
                </button>
                <Row>
                  <Col className="fixed-margin">
                    Already Registered? <Link to="/">login</Link>
                  </Col>
                </Row>
              </form>
            </div>
          </div>
        );
      }}
    </Formik>
    </React.Fragment>
 
  );
};
export default ValidatedSignUpForm;
