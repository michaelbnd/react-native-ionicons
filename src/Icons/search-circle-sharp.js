import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function SvgSearchCircleSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M256 64C150.13 64 64 150.13 64 256s86.13 192 192 192 192-86.13 192-192S361.87 64 256 64zm80 294.63l-54.15-54.15a88.08 88.08 0 1122.63-22.63L358.63 336z" />
      <Circle cx={232} cy={232} r={56} />
    </Svg>
  );
}

export default SvgSearchCircleSharp;

