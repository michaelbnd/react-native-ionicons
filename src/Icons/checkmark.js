import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCheckmark(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M416 128L192 384l-96-96"
      />
    </Svg>
  );
}

export default SvgCheckmark;

