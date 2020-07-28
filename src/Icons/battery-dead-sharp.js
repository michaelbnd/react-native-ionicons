import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBatteryDeadSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
        d="M32 144h400v224H32zM480 218.67v74.66"
      />
    </Svg>
  );
}

export default SvgBatteryDeadSharp;

