import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBrushSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M480 96l-64-64-244 260 64 64zM142 320c-36.52 0-66 30.63-66 68.57 0 25.43-31 45.72-44 45.72C52.24 462.17 86.78 480 120 480c48.62 0 88-40.91 88-91.43 0-37.94-29.48-68.57-66-68.57z" />
    </Svg>
  );
}

export default SvgBrushSharp;

