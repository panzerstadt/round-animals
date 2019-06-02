import React, { useState } from "react";
import posed from "react-pose";

import useInterval from "../../hooks/useInterval";

import rightArm from "../assets/chick/chick_0001_right-hand.png";

const BobbingBox = posed.div({
  up: { marginTop: -10 },
  down: { marginTop: 0 }
});

const RightArm = ({ width = 35, animState = "idle", children }) => {
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
      style={{ position: "absolute", top: 80, right: 0, marginRight: -10 }}
    >
      {children}
      <img src={rightArm} width={width} />
    </BobbingBox>
  );
};

export default RightArm;
