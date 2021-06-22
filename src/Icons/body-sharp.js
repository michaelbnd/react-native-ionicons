import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgBodySharp(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Circle cx={256} cy={56} r={56} /><Path d="M464 128H48v52h144l-32 325.13 51 6.87 21.65-192h47.02L301 512l51-6.98L320 180h144v-52z" /></Svg>;
}

export default SvgBodySharp;