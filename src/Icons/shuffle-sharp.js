import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShuffleSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
        d="M400 304l48 48-48 48M400 112l48 48-48 48M64 352h128l60-92"
      />
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
        d="M64 160h128l128 192h96M416 160h-96l-32 48"
      />
    </Svg>
  );
}

export default SvgShuffleSharp;

