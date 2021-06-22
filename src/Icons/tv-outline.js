import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgTvOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Rect x={32} y={96} width={448} height={272} rx={32.14} ry={32.14} fill="none" stroke={props.fill} strokeLinejoin="round" strokeWidth={32} /><Path stroke={props.fill} strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="M128 416h256" /></Svg>;
}

export default SvgTvOutline;