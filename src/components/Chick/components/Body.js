import React, { useState } from "react";
import posed from "react-pose";

import useInterval from "../../hooks/useInterval";

import body from "../assets/chick/chick_0004_body.png";

const BobbingBox = posed.div({
  up: { marginTop: -10 },
  down: { marginTop: 0 }
});
const ChickBody = ({ height = 300, animState = "idle", children }) => {
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
    <BobbingBox pose={bob ? "up" : "down"} style={{ position: "relative" }}>
      {children}
      <img src={body} height={height} />
    </BobbingBox>
  );
};

export default ChickBody;
