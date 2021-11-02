import React from "react";
import styles from "../button/button.css";

const UIButtion = (props) => {
  return (
    <button className={`${styles.button}`} onClick={props.onClick} type={props.type}>
      {props.children}
    </button>
  );
};
export default UIButtion;
