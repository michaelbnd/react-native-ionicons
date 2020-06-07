import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgReturnDownForward(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M400 352l64-64-64-64"
      />
      <Path
        d="M448 288H154c-58.76 0-106-49.33-106-108v-20"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </Svg>
  );
}

export default SvgReturnDownForward;

