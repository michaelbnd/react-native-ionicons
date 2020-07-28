import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBarbellSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M496 176h-58v-64h-76v122H150V112H74v64H16v160h58v64h76V278h212v122h76v-64h58V176z" />
    </Svg>
  );
}

export default SvgBarbellSharp;

