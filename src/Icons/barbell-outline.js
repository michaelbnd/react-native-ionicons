import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function SvgBarbellOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M48 256h416"
      />
      <Rect
        x={384}
        y={128}
        width={32}
        height={256}
        rx={16}
        ry={16}
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Rect
        x={96}
        y={128}
        width={32}
        height={256}
        rx={16}
        ry={16}
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Rect
        x={32}
        y={192}
        width={16}
        height={128}
        rx={8}
        ry={8}
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Rect
        x={464}
        y={192}
        width={16}
        height={128}
        rx={8}
        ry={8}
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}

export default SvgBarbellOutline;

