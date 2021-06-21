import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFilterOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M32 144h448M112 256h288M208 368h96" /></Svg>;
}

export default SvgFilterOutline;