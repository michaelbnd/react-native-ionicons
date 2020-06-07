import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEllipseSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z" />
    </Svg>
  );
}

export default SvgEllipseSharp;

