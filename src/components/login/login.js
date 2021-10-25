import React, { useState } from "react";
import "../login/login.css";
import image from "../../ABRD.png";
import { Link, useHistory } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
const ValidatedLoginForm = () => {
  const history = useHistory();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          history.push("/dashboard");
          setSubmitting(false);
        }, 500);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email().required("Required"),
        password: Yup.string()
          .required("No password provided.")
          .min(8, "Password is too short - should be 8 chars minimum.")
          .matches(/(?=.*[0-9])/, "Password must contain a number."),
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
        );
      }}
    </Formik>
  );
};
export default ValidatedLoginForm;
