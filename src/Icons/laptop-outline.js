import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgLaptopOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Rect x={48} y={96} width={416} height={304} rx={32.14} ry={32.14} fill="none" stroke={props.fill} strokeLinejoin="round" strokeWidth={32} /><Path stroke={props.fill} strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="M16 416h480" /></Svg>;
}

export default SvgLaptopOutline;