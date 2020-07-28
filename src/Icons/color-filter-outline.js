import * as React from "react";
import Svg, { Circle } from "react-native-svg";

function SvgColorFilterOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Circle
        cx={256}
        cy={184}
        r={120}
        fill={props.fill}
        stroke={props.color}
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Circle
        cx={344}
        cy={328}
        r={120}
        fill={props.fill}
        stroke={props.color}
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Circle
        cx={168}
        cy={328}
        r={120}
        fill={props.fill}
        stroke={props.color}
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}

export default SvgColorFilterOutline;

