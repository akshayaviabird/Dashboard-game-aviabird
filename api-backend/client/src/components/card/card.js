import React from "react";
import styles from "../card/card.css";

const Card = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};
export default Card;
