import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLogoTwitch(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M80 32l-32 80v304h96v64h64l64-64h80l112-112V32zm336 256l-64 64h-96l-64 64v-64h-80V80h304z" /><Path d="M320 143h48v129h-48zM208 143h48v129h-48z" /></Svg>;
}

export default SvgLogoTwitch;