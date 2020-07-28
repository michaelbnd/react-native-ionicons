import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPlaySharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M96 448l320-192L96 64v384z" />
    </Svg>
  );
}

export default SvgPlaySharp;

