import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function SvgBarChartOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M32 32v432a16 16 0 0016 16h432"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Rect
        x={96}
        y={224}
        width={80}
        height={192}
        rx={20}
        ry={20}
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Rect
        x={240}
        y={176}
        width={80}
        height={240}
        rx={20}
        ry={20}
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Rect
        x={383.64}
        y={112}
        width={80}
        height={304}
        rx={20}
        ry={20}
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </Svg>
  );
}

export default SvgBarChartOutline;

