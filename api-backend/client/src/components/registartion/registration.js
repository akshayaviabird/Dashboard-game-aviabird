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
  const [isLoading, setIsLaoding] = useState(false);
  const [hasError, setError] = useState(""); 
  // const [backendError,setBackendError]=useState("")
  const errorMessage = () => {
    return (
      <div className="row" style={{ marginTop: "12px" }}>
        <div className="col-md-4 offset-sm-4 text-left">
          <div
            className="alert alert-danger"
            style={{ display: hasError ? "" : "none" }}
          >
            {hasError}
          </div>
        </div>
        <div className="col-md-4 offset-sm-4 text-left"></div>
      </div>
    );
  };

  return (
    <React.Fragment>
      {isLoading && <Loader />}
      {errorMessage()}
      <Formik
        initialValues={{ name: "", email: "", password: "", file: undefined}}
        onSubmit={(values, { setSubmitting }) => {
          let data = new FormData(); 
          var imagedatas = document.querySelector('input[type="file"]').files[0];
          data.set("file", imagedatas);
          data.set("email",values.email)
          data.set("name",values.name)
          data.set("password",values.password)
          setIsLaoding(true);
          setTimeout(() => {
            fetch("/api/v1/auth/register", {
              method: "post",
              body: data
            })
              .then((response) => response.json())
              .then((data) => {
                if (data.success === "false") {
                  setError(data.msg);
                } else {
                  setIsLaoding(false);
                  history.push("/");
                  setSubmitting(false);
                }
              })
              .catch((err) => {
                console.log("error", err);
              })
              .finally(() => {
                setIsLaoding(false);
              });
          }, 500);
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Name Required"),
          email: Yup.string().email().required("Email Required"),
          password: Yup.string()
            .required("No password provided.")
            .min(6, "Password is too short - should be 6 chars minimum."),

          // file: Yup.mixed().required("A file is required")  
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
                  <div class="form-group">
                    <label>Upload Image*</label>
                    <div class="input-group">
                      <span class="input-group-btn">
                        <span class="btn btn-default btn-file">
                          <input
                            className="upload"
                            value={values.file} 
                            type="file"
                            name="photo1"
                            onChange={(event) =>{
                              props.setFieldValue("photo", event.target.files[0]);
                            }} 
                          />
                        </span>
                      </span>
                    </div>
                    <img id="img-upload" />
                  </div>
                  <button
                    type="submit"
                    className="login-btn"
                    // disabled={isSubmitting}
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
