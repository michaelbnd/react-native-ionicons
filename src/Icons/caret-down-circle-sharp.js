import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCaretDownCircleSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zm-99.73-44L256 342.09 147.73 212z" />
    </Svg>
  );
}

export default SvgCaretDownCircleSharp;

