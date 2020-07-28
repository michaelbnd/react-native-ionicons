import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFunnelSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M0 48l192 240v128l128 48V288L512 48H0z" />
    </Svg>
  );
}

export default SvgFunnelSharp;

