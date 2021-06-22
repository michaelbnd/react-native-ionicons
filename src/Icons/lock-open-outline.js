import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function SvgLockOpenOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M336 112a80 80 0 00-160 0v96" fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><Rect x={96} y={208} width={320} height={272} rx={48} ry={48} fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></Svg>;
}

export default SvgLockOpenOutline;