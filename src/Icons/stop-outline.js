import * as React from "react";
import Svg, { Rect } from "react-native-svg";

function SvgStopOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Rect
        x={96}
        y={96}
        width={320}
        height={320}
        rx={24}
        ry={24}
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </Svg>
  );
}

export default SvgStopOutline;

