import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBarChartSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M496 496H16V16h32v448h448v32z" />
      <Path d="M192 432H80V208h112zM336 432H224V160h112zM479.64 432h-112V96h112z" />
    </Svg>
  );
}

export default SvgBarChartSharp;

