import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgReturnUpForwardSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
        d="M400 160l64 64-64 64"
      />
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
        d="M448 224H48v128"
      />
    </Svg>
  );
}

export default SvgReturnUpForwardSharp;

