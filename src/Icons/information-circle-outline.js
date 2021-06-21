import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgInformationCircleOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64z" fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={32} /><Path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M220 220h32v116" /><Path fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="M208 340h88" /><Path d="M248 130a26 26 0 1026 26 26 26 0 00-26-26z" /></Svg>;
}

export default SvgInformationCircleOutline;