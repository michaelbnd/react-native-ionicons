import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFlashSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M432 208H288l32-192L80 304h144l-32 192z" />
    </Svg>
  );
}

export default SvgFlashSharp;

