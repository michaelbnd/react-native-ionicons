import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function SvgMedalSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M80 32L16 160h289.11l80.22-128H80z" />
      <Path d="M496 144L424 32 298 231.08a128 128 0 00-84 0L189.53 192H43.82l86.66 134.89a128 128 0 10251 0zM256 422a70 70 0 1170-70 70.08 70.08 0 01-70 70z" />
      <Circle cx={256} cy={352} r={32} />
    </Svg>
  );
}

export default SvgMedalSharp;

