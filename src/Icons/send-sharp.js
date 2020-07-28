import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSendSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M16 464l480-208L16 48v160l320 48-320 48z" />
    </Svg>
  );
}

export default SvgSendSharp;

