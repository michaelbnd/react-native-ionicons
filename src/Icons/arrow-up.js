import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowUp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={48}
        d="M112 244l144-144 144 144M256 120v292"
      />
    </Svg>
  );
}

export default SvgArrowUp;

