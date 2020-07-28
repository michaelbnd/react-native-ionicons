import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function SvgBarChartOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M32 32v432a16 16 0 0016 16h432"
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Rect
        x={96}
        y={224}
        width={80}
        height={192}
        rx={20}
        ry={20}
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Rect
        x={240}
        y={176}
        width={80}
        height={240}
        rx={20}
        ry={20}
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Rect
        x={383.64}
        y={112}
        width={80}
        height={304}
        rx={20}
        ry={20}
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}

export default SvgBarChartOutline;

