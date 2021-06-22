import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowUpCircleOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M176 249.38L256 170l80 79.38M256 181.03V342" /><Path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke={props.fill} strokeMiterlimit={10} strokeWidth={32} /></Svg>;
}

export default SvgArrowUpCircleOutline;