import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowRedoCircleSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48 48 141.13 48 256zm98 88c0-68.13 22.67-137.14 119.17-137.14V152L366 248l-100.83 96v-54.86c-66.69 0-91.32 19.29-119.17 54.86z" />
    </Svg>
  );
}

export default SvgArrowRedoCircleSharp;

