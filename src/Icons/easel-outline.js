import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgEaselOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Rect x={48} y={80} width={416} height={272} rx={32} ry={32} fill="none" stroke={props.fill} strokeLinejoin="round" strokeWidth={32} /><Path fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M256 416v-64M256 80V48M400 464l-32-112M112 464l32-112" /></Svg>;
}

export default SvgEaselOutline;