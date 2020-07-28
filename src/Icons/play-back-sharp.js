import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPlayBackSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M496 400L256 256l240-144v288zM256 400L16 256l240-144v288z" />
    </Svg>
  );
}

export default SvgPlayBackSharp;

