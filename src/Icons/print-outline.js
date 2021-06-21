import * as React from "react";
import Svg, { Path, Rect, Circle } from "react-native-svg";

function SvgPrintOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M384 368h24a40.12 40.12 0 0040-40V168a40.12 40.12 0 00-40-40H104a40.12 40.12 0 00-40 40v160a40.12 40.12 0 0040 40h24" fill="none" stroke="#000" strokeLinejoin="round" strokeWidth={32} /><Rect x={128} y={240} width={256} height={208} rx={24.32} ry={24.32} fill="none" stroke="#000" strokeLinejoin="round" strokeWidth={32} /><Path d="M384 128v-24a40.12 40.12 0 00-40-40H168a40.12 40.12 0 00-40 40v24" fill="none" stroke="#000" strokeLinejoin="round" strokeWidth={32} /><Circle cx={392} cy={184} r={24} /></Svg>;
}

export default SvgPrintOutline;