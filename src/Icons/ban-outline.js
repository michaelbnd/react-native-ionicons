import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgBanOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" {...props}><Circle cx={256} cy={256} r={208} fill="none" stroke={props.fill} strokeMiterlimit={10} strokeWidth={32} /><Path fill="none" stroke={props.fill} strokeMiterlimit={10} strokeWidth={32} d="M108.92 108.92l294.16 294.16" /></Svg>;
}

export default SvgBanOutline;