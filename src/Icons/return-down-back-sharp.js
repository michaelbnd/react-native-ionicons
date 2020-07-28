import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgReturnDownBackSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
        d="M112 352l-64-64 64-64"
      />
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
        d="M64 288h400V160"
      />
    </Svg>
  );
}

export default SvgReturnDownBackSharp;

