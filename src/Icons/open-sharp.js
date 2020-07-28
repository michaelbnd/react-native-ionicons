import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgOpenSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M201.37 288l176-176H48v352h352V134.63l-176 176L201.37 288z" />
      <Path d="M320 48v32h89.37l-32 32L400 134.63l32-32V192h32V48H320z" />
    </Svg>
  );
}

export default SvgOpenSharp;

