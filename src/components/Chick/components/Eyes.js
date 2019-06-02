import React from "react";

import eyes from "../assets/chick/chick_0000_eyes.png";

const Eyes = ({ width = 100, ...props }) => {
  return (
    <div {...props}>
      <img src={eyes} width={width} />
    </div>
  );
};

export default Eyes;
