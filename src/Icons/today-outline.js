import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgTodayOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Rect
        x={48}
        y={80}
        width={416}
        height={384}
        rx={48}
        ry={48}
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Path d="M397.82 80H114.18C77.69 80 48 110.15 48 147.2V192h8c0-16 24-32 40-32h320c16 0 40 16 40 32h8v-44.8c0-37.05-29.69-67.2-66.18-67.2z" />
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M128 48v32M384 48v32"
      />
      <Rect x={96} y={208} width={128} height={128} rx={28.57} ry={28.57} />
      <Path
        d="M464 256v-48a48.14 48.14 0 00-48-48H96a48.14 48.14 0 00-48 48v48"
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </Svg>
  );
}

export default SvgTodayOutline;

