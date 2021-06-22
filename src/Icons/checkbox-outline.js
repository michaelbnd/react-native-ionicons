import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function SvgCheckboxOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M352 176L217.6 336 160 272" /><Rect x={64} y={64} width={384} height={384} rx={48} ry={48} fill="none" stroke={props.fill} strokeLinejoin="round" strokeWidth={32} /></Svg>;
}

export default SvgCheckboxOutline;