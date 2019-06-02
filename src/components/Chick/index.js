import React, { useState, useEffect } from "react";
import posed from "react-pose";

import styles from "./index.module.css";

import ChickBody from "./components/Body";
import Eyes from "./components/Eyes";
import Feet from "./components/Feet";
import LeftArm from "./components/LeftArm";
import RightArm from "./components/RightArm";

const Chick = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setIsVisible(p => !p);
    }, 1000);
  }, []);

  return (
    <div className={styles.chick}>
      <ChickBody animState="idle">
        <Eyes className={styles.eyes} />
      </ChickBody>
      <Feet className={styles.feet} />
      <LeftArm />
      <RightArm />
    </div>
  );
};

export default Chick;
