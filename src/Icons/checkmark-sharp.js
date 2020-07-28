import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCheckmarkSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={44}
        d="M416 128L192 384l-96-96"
      />
    </Svg>
  );
}

export default SvgCheckmarkSharp;

