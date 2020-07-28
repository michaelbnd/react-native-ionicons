import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function SvgArchiveOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M80 152v256a40.12 40.12 0 0040 40h272a40.12 40.12 0 0040-40V152"
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Rect
        x={48}
        y={64}
        width={416}
        height={80}
        rx={28}
        ry={28}
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
        d="M320 304l-64 64-64-64M256 345.89V224"
      />
    </Svg>
  );
}

export default SvgArchiveOutline;

