import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgTvOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Rect
        x={32}
        y={96}
        width={448}
        height={272}
        rx={32.14}
        ry={32.14}
        fill={props.fill}
        stroke={props.color}
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Path
        stroke={props.color}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
        d="M128 416h256"
      />
    </Svg>
  );
}

export default SvgTvOutline;

