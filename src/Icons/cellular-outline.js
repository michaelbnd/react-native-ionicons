import * as React from "react";
import Svg, { Rect } from "react-native-svg";

function SvgCellularOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Rect
        x={416}
        y={96}
        width={64}
        height={320}
        rx={8}
        ry={8}
        fill={props.fill}
        stroke={props.color}
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Rect
        x={288}
        y={176}
        width={64}
        height={240}
        rx={8}
        ry={8}
        fill={props.fill}
        stroke={props.color}
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Rect
        x={160}
        y={240}
        width={64}
        height={176}
        rx={8}
        ry={8}
        fill={props.fill}
        stroke={props.color}
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Rect
        x={32}
        y={304}
        width={64}
        height={112}
        rx={8}
        ry={8}
        fill={props.fill}
        stroke={props.color}
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}

export default SvgCellularOutline;

