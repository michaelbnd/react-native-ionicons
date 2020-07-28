import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgEaselOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Rect
        x={48}
        y={80}
        width={416}
        height={272}
        rx={32}
        ry={32}
        fill={props.fill}
        stroke={props.color}
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M256 416v-64M256 80V48M400 464l-32-112M112 464l32-112"
      />
    </Svg>
  );
}

export default SvgEaselOutline;

