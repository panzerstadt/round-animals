import React from "react";

import styles from "./index.module.css";

const TextBox = ({ text = "chirp!" }) => {
  return (
    <div className={styles.text}>
      <span>{text}</span>
    </div>
  );
};

export default TextBox;
