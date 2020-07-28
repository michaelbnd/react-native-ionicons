import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTabletLandscapeSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M0 82v348a18 18 0 0018 18h476a18 18 0 0018-18V82a18 18 0 00-18-18H18A18 18 0 000 82zm448 330H64V100h384z" />
    </Svg>
  );
}

export default SvgTabletLandscapeSharp;

