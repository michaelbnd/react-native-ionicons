import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgCardOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Rect
        x={48}
        y={96}
        width={416}
        height={320}
        rx={56}
        ry={56}
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Path
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={60}
        d="M48 192h416M128 300h48v20h-48z"
      />
    </Svg>
  );
}

export default SvgCardOutline;

