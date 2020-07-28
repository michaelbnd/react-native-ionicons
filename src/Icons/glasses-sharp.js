import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGlassesSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M496 176H16v64h21.24l12.44 112h171.87L240 241.32V240a16 16 0 0132 0v1.32L290.45 352h171.87l12.44-112H496z" />
    </Svg>
  );
}

export default SvgGlassesSharp;

