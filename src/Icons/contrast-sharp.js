import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgContrastSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M256 32C132.29 32 32 132.29 32 256s100.29 224 224 224 224-100.29 224-224S379.71 32 256 32zM128.72 383.28A180 180 0 01256 76v360a178.82 178.82 0 01-127.28-52.72z" />
    </Svg>
  );
}

export default SvgContrastSharp;

