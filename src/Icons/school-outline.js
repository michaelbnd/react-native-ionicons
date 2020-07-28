import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSchoolOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M32 192L256 64l224 128-224 128L32 192z"
      />
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M112 240v128l144 80 144-80V240M480 368V192M256 320v128"
      />
    </Svg>
  );
}

export default SvgSchoolOutline;

