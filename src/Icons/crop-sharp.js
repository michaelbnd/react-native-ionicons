import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCropSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M166 346V32h-44v90H32v44h90v224h224v90h44v-90h90v-44H166z" />
      <Path d="M346 320h44V122H192v44h154v154z" />
    </Svg>
  );
}

export default SvgCropSharp;

