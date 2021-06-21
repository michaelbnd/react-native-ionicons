import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSchoolOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M32 192L256 64l224 128-224 128L32 192z" /><Path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M112 240v128l144 80 144-80V240M480 368V192M256 320v128" /></Svg>;
}

export default SvgSchoolOutline;