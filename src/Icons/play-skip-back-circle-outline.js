import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPlaySkipBackCircleOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M256 448c106 0 192-86 192-192S362 64 256 64 64 150 64 256s86 192 192 192z" fill="none" stroke={props.fill} strokeMiterlimit={10} strokeWidth={32} /><Path d="M192 176a16 16 0 0116 16v53l111.68-67.46a10.78 10.78 0 0116.32 9.33v138.26a10.78 10.78 0 01-16.32 9.31L208 267v53a16 16 0 01-32 0V192a16 16 0 0116-16z" /></Svg>;
}

export default SvgPlaySkipBackCircleOutline;