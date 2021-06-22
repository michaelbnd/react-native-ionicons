import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFileTrayFullOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M384 80H128c-26 0-43 14-48 40L48 272v112a48.14 48.14 0 0048 48h320a48.14 48.14 0 0048-48V272l-32-152c-5-27-23-40-48-40z" fill="none" stroke={props.fill} strokeLinejoin="round" strokeWidth={32} /><Path fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M48 272h144M320 272h144M192 272a64 64 0 00128 0M144 144h224M128 208h256" /></Svg>;
}

export default SvgFileTrayFullOutline;