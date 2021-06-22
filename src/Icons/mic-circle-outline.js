import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function SvgMicCircleOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke={props.fill} strokeMiterlimit={10} strokeWidth={32} /><Path fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M224 368h64M336 224.3v23.92c0 39.42-40.58 71.48-80 71.48h0c-39.42 0-80-32.06-80-71.48V224.3M256 320v48" /><Rect x={208} y={128} width={96} height={160} rx={48} ry={48} /></Svg>;
}

export default SvgMicCircleOutline;