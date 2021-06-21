import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgResize(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M304 96h112v112M405.77 106.2L111.98 400.02M208 416H96V304" /></Svg>;
}

export default SvgResize;