import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSquareSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M48 48h416v416H48z" />
    </Svg>
  );
}

export default SvgSquareSharp;

