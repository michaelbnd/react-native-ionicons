import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCaretForwardCircleSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zM212 147.73L342.09 256 212 364.27z" />
    </Svg>
  );
}

export default SvgCaretForwardCircleSharp;

