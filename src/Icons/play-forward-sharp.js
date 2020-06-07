import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPlayForwardSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M16 400l240-144L16 112v288zM256 400l240-144-240-144v288z" />
    </Svg>
  );
}

export default SvgPlayForwardSharp;

