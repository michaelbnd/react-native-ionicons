import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChevronForward(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={48}
        d="M184 112l144 144-144 144"
      />
    </Svg>
  );
}

export default SvgChevronForward;

