import * as React from "react";
import Svg, { Circle, Rect } from "react-native-svg";

function SvgToggleOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Circle
        cx={368}
        cy={256}
        r={128}
        fill={props.fill}
        stroke={props.color}
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Rect
        x={16}
        y={128}
        width={480}
        height={256}
        rx={128}
        ry={128}
        fill={props.fill}
        stroke={props.color}
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}

export default SvgToggleOutline;

