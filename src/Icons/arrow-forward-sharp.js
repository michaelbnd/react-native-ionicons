import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowForwardSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={48}
        d="M268 112l144 144-144 144M392 256H100"
      />
    </Svg>
  );
}

export default SvgArrowForwardSharp;

