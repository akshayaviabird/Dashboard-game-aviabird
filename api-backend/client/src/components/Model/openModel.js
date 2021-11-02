import React from "react";
import Buttion from "../button/button";
import styles from "../Model/openmodel.css";
import Card from "../card/card";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.reset} />;
};
const Modeloverlay = (props) => {
  return (
    <Card className={styles.modal}>
      {/* <header className={styles.header}>
        <h2>{props.title}</h2>
      </header> */}
      {/* <div className={styles.content}>
        <p>{props.message}</p>
      </div> */}
      <footer className={styles.actions}>
        <Buttion onClick={props.reset}>Ok</Buttion>
      </footer>
    </Card>
  );
};

const OpenModel = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop reset={props.reset} />,
        document.getElementById("backdrop-overlay")
      )}
      {ReactDom.createPortal(
        <Modeloverlay />,
        document.getElementById("model-overlay")
      )}
    </>
  );
};
export default OpenModel;
