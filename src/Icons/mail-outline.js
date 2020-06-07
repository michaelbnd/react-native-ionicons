import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgMailOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Rect
        x={48}
        y={96}
        width={416}
        height={320}
        rx={40}
        ry={40}
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M112 160l144 112 144-112"
      />
    </Svg>
  );
}

export default SvgMailOutline;

