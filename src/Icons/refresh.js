import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRefresh(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M320 146s24.36-12-64-12a160 160 0 10160 160" fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} /><Path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M256 58l80 80-80 80" /></Svg>;
}

export default SvgRefresh;