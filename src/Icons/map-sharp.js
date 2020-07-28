import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMapSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M327.71 130.93L184 39 32 144v336l152.29-98.93L328 473l152-105V32zM312 421l-112-72V91l112 72z" />
    </Svg>
  );
}

export default SvgMapSharp;

