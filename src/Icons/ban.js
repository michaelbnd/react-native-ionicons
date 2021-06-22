import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgBan(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" {...props}><Circle fill="none" stroke={props.fill} strokeMiterlimit={10} strokeWidth={48} cx={256} cy={256} r={200} /><Path stroke={props.fill} strokeMiterlimit={10} strokeWidth={48} d="M114.58 114.58l282.84 282.84" /></Svg>;
}

export default SvgBan;