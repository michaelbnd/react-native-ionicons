import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function SvgAlert(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M256 80c-8.66 0-16.58 7.36-16 16l8 216a8 8 0 008 8h0a8 8 0 008-8l8-216c.58-8.64-7.34-16-16-16z"
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Circle
        cx={256}
        cy={416}
        r={16}
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}

export default SvgAlert;

