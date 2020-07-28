import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVolumeOffSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M237.65 176.1H144v159.8h93.65L368 440V72L237.65 176.1z" />
    </Svg>
  );
}

export default SvgVolumeOffSharp;

