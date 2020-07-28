import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgReorderFourSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={44}
        d="M102 304h308M102 208h308M102 112h308M102 400h308"
      />
    </Svg>
  );
}

export default SvgReorderFourSharp;

