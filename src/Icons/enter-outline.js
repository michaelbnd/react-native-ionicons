import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEnterOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M176 176v-40a40 40 0 0140-40h208a40 40 0 0140 40v240a40 40 0 01-40 40H216a40 40 0 01-40-40v-40" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><Path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M272 336l80-80-80-80M48 256h288" /></Svg>;
}

export default SvgEnterOutline;