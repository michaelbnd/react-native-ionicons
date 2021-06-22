import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBarcodeSharp(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path fill="none" stroke={props.fill} strokeLinecap="square" strokeLinejoin="round" strokeWidth={32} d="M400 400.33l48-.33V112l-48 .33M112 112l-48 .33v288l48-.33M384 192v128M320 160v192M256 176v160M192 160v192M128 192v128" /></Svg>;
}

export default SvgBarcodeSharp;