import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStatsChartSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M128 496H48V304h80zM352 496h-80V208h80zM464 496h-80V96h80zM240 496h-80V16h80z" />
    </Svg>
  );
}

export default SvgStatsChartSharp;

