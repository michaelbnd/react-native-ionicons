import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function SvgPersonAddSharp(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M106 304v-54h54v-36h-54v-54H70v54H16v36h54v54h36z" /><Circle cx={288} cy={144} r={112} /><Path d="M288 288c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128z" /></Svg>;
}

export default SvgPersonAddSharp;