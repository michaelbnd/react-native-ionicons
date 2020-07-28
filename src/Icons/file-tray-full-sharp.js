import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFileTrayFullSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M128 128h256v38H128zM112 192h288v38H112z" />
      <Path d="M448 64H64L32 256v192h448V256zm-12 192H320a64 64 0 01-128 0H76l22-150h316z" />
    </Svg>
  );
}

export default SvgFileTrayFullSharp;

