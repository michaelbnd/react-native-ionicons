import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNavigateSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M480 32L32 240h240v240L480 32z" />
    </Svg>
  );
}

export default SvgNavigateSharp;

