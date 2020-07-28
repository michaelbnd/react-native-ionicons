import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMenuSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z" />
    </Svg>
  );
}

export default SvgMenuSharp;

