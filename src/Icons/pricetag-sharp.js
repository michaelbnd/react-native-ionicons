import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPricetagSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M304 32L16 320l176 176 288-288V32zm80 128a32 32 0 1132-32 32 32 0 01-32 32z" />
    </Svg>
  );
}

export default SvgPricetagSharp;

