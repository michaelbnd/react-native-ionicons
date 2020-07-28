import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPieChartSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M58 362.09l-6.51-14.59A224 224 0 01256 32h16v234.37z" />
      <Path d="M304 66.46v220.65L94.62 380.78A208.31 208.31 0 00272 480c114.69 0 208-93.31 208-208 0-103.81-76.45-190.1-176-205.54z" />
    </Svg>
  );
}

export default SvgPieChartSharp;

