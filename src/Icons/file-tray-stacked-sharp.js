import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFileTrayStackedSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M448 16H64L32 176v144h448V176zm-12 160H320a64 64 0 01-128 0H76L98 58h316zM320 352a64 64 0 01-128 0H32v144h448V352z" />
    </Svg>
  );
}

export default SvgFileTrayStackedSharp;

