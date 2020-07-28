import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgReorderTwoSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={44}
        d="M118 304h276M118 208h276"
      />
    </Svg>
  );
}

export default SvgReorderTwoSharp;

