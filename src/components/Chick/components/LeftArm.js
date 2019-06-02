import React, { useState } from "react";
import posed from "react-pose";

import useInterval from "../../hooks/useInterval";

import leftArm from "../assets/chick/chick_0002_left-hand.png";

const BobbingBox = posed.div({
  up: { marginTop: -10 },
  down: { marginTop: 0 }
});

const LeftArm = ({ width = 35, animState = "idle", children }) => {
  const IDLE_INTERVAL = 500;
  const ACTIVE_INTERVAL = 300;

  const [bob, setToggleBob] = useState(true);
  useInterval(
    () => {
      setToggleBob(p => !p);
    },
    animState === "idle" ? IDLE_INTERVAL : ACTIVE_INTERVAL
  );

  return (
    <BobbingBox
      pose={bob ? "down" : "up"}
      style={{ position: "absolute", top: 80, left: 0, marginLeft: -10 }}
    >
      {children}
      <img src={leftArm} width={width} />
    </BobbingBox>
  );
};

export default LeftArm;
