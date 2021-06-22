import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgManSharp(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Circle cx={256} cy={56} r={56} /><Path d="M336 128H176a32 32 0 00-32 32v160h48V192h8v320h52V328h8v184h52V192h8v128h48V160a32 32 0 00-32-32z" /></Svg>;
}

export default SvgManSharp;