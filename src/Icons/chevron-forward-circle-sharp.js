import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChevronForwardCircleSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm-40 326.63L193.37 352l96-96-96-96L216 137.37 334.63 256z" />
    </Svg>
  );
}

export default SvgChevronForwardCircleSharp;

