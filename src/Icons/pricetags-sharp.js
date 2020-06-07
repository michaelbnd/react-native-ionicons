import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPricetagsSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M288 16L0 304l176 176 288-288V16zm80 128a32 32 0 1132-32 32 32 0 01-32 32z" />
      <Path d="M480 64v144L216.9 471.1 242 496l270-272V64h-32z" />
    </Svg>
  );
}

export default SvgPricetagsSharp;

