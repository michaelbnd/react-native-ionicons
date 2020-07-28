import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTriangleSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M256 32L20 464h472L256 32z" />
    </Svg>
  );
}

export default SvgTriangleSharp;

