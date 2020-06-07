import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCodeOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M160 368L32 256l128-112M352 368l128-112-128-112"
      />
    </Svg>
  );
}

export default SvgCodeOutline;

