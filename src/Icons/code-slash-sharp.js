import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCodeSlashSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M161.98 397.63L0 256l161.98-141.63 27.65 31.61L64 256l125.63 110.02-27.65 31.61zM350.02 397.63l-27.65-31.61L448 256 322.37 145.98l27.65-31.61L512 256 350.02 397.63zM222.15 442L182 430.08 289.85 70 330 81.92 222.15 442z" />
    </Svg>
  );
}

export default SvgCodeSlashSharp;

