import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgBriefcaseOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Rect x={32} y={128} width={448} height={320} rx={48} ry={48} fill="none" stroke="#000" strokeLinejoin="round" strokeWidth={32} /><Path d="M144 128V96a32 32 0 0132-32h160a32 32 0 0132 32v32M480 240H32M320 240v24a8 8 0 01-8 8H200a8 8 0 01-8-8v-24" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></Svg>;
}

export default SvgBriefcaseOutline;