import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMoveSharp(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={32} d="M176 112l80-80 80 80M255.98 32l.02 448M176 400l80 80 80-80M400 176l80 80-80 80M112 176l-80 80 80 80M32 256h448" /></Svg>;
}

export default SvgMoveSharp;