import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgTerminalOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Rect
        x={32}
        y={48}
        width={448}
        height={416}
        rx={48}
        ry={48}
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
        d="M96 112l80 64-80 64M192 240h64"
      />
    </Svg>
  );
}

export default SvgTerminalOutline;

