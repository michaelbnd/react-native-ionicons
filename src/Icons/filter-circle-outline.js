import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFilterCircleOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" {...props}><Path fill="none" stroke={props.fill} strokeWidth={32} strokeMiterlimit={10} d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" /><Path fill="none" stroke={props.fill} strokeWidth={32} strokeLinecap="round" strokeLinejoin="round" d="M144 208h224M176 272h160M224 336h64" /></Svg>;
}

export default SvgFilterCircleOutline;