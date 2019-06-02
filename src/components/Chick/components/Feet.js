import React from "react";

import feet from "../assets/chick/chick_0003_feet.png";

const Feet = ({ width = 200, ...props }) => {
  return (
    <div {...props}>
      <img src={feet} width={width} />
    </div>
  );
};

export default Feet;
