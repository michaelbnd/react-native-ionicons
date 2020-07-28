import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function SvgPulseOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M48 320h64l64-256 64 384 64-224 32 96h64"
      />
      <Circle
        cx={432}
        cy={320}
        r={32}
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}

export default SvgPulseOutline;

