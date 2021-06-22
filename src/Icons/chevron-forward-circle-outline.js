import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChevronForwardCircleOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M64 256c0 106 86 192 192 192s192-86 192-192S362 64 256 64 64 150 64 256z" fill="none" stroke={props.fill} strokeMiterlimit={10} strokeWidth={32} /><Path fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M216 352l96-96-96-96" /></Svg>;
}

export default SvgChevronForwardCircleOutline;