import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRepeatSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
        d="M320 120l48 48-48 48"
      />
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
        d="M352 168H64v96M192 392l-48-48 48-48"
      />
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
        d="M160 344h288v-96"
      />
    </Svg>
  );
}

export default SvgRepeatSharp;

