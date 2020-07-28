import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPlaySkipForwardSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M368.53 64v163.52L96 64v384l272.53-163.52V448H416V64h-47.47z" />
    </Svg>
  );
}

export default SvgPlaySkipForwardSharp;

