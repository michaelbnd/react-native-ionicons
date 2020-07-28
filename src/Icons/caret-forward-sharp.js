import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCaretForwardSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M144 448l224-192L144 64v384z" />
    </Svg>
  );
}

export default SvgCaretForwardSharp;

