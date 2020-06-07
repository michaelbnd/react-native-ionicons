import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgColorWandOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Rect
        x={280.48}
        y={122.9}
        width={63.03}
        height={378.2}
        rx={10}
        ry={10}
        transform="rotate(-45 312.002 311.994)"
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={32}
      />
      <Path d="M156 200.757l44.753-44.753L268 223.25l-44.753 44.753z" />
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M48 192h48M90.18 90.18l33.94 33.94M192 48v48M293.82 90.18l-33.94 33.94M124.12 259.88l-33.94 33.94"
      />
    </Svg>
  );
}

export default SvgColorWandOutline;

