import * as React from "react";
import Svg, { Rect } from "react-native-svg";

function SvgTabletPortraitOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Rect
        x={80}
        y={16}
        width={352}
        height={480}
        rx={48}
        ry={48}
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}

export default SvgTabletPortraitOutline;

