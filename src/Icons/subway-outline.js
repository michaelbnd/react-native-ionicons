import * as React from "react";
import Svg, { Rect, Path, Circle } from "react-native-svg";

function SvgSubwayOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Rect
        x={112}
        y={32}
        width={288}
        height={352}
        rx={48}
        ry={48}
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={32}
      />
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M208 80h96"
      />
      <Rect
        x={112}
        y={128}
        width={288}
        height={96}
        rx={32}
        ry={32}
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Circle
        cx={176}
        cy={320}
        r={16}
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Circle
        cx={336}
        cy={320}
        r={16}
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M144 464h224M336 432l48 48M176 432l-48 48"
      />
    </Svg>
  );
}

export default SvgSubwayOutline;
