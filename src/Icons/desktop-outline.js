import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgDesktopOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Rect x={32} y={64} width={448} height={320} rx={32} ry={32} fill="none" stroke={props.fill} strokeLinejoin="round" strokeWidth={32} /><Path stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M304 448l-8-64h-80l-8 64h96z" /><Path fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M368 448H144" /><Path d="M32 304v48a32.09 32.09 0 0032 32h384a32.09 32.09 0 0032-32v-48zm224 64a16 16 0 1116-16 16 16 0 01-16 16z" /></Svg>;
}

export default SvgDesktopOutline;