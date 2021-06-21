import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function SvgGitCompareOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M304 160l-64-64 64-64M207 352l64 64-64 64" /><Circle cx={112} cy={96} r={48} fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><Circle cx={400} cy={416} r={48} fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><Path d="M256 96h84a60 60 0 0160 60v212M255 416h-84a60 60 0 01-60-60V144" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></Svg>;
}

export default SvgGitCompareOutline;