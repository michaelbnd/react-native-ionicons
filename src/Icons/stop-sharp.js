import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStopSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M80 80h352v352H80z" />
    </Svg>
  );
}

export default SvgStopSharp;

