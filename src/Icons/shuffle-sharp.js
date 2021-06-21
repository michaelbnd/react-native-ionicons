import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShuffleSharp(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path fill="none" stroke="#000" strokeLinecap="square" strokeMiterlimit={10} strokeWidth={32} d="M400 304l48 48-48 48M400 112l48 48-48 48M64 352h128l60-92" /><Path fill="none" stroke="#000" strokeLinecap="square" strokeMiterlimit={10} strokeWidth={32} d="M64 160h128l128 192h96M416 160h-96l-32 48" /></Svg>;
}

export default SvgShuffleSharp;