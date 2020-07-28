import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLayersSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M480 150L256 48 32 150l224 104 224-104zM255.71 392.95l-144.81-66.2L32 362l224 102 224-102-78.69-35.3-145.6 66.25z" />
      <Path d="M480 256l-75.53-33.53L256.1 290.6l-148.77-68.17L32 256l224 102 224-102z" />
    </Svg>
  );
}

export default SvgLayersSharp;

