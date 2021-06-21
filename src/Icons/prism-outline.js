import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPrismOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" {...props}><Path d="M229.73 45.88L37.53 327.79a31.79 31.79 0 0011.31 46L241 476.26a31.77 31.77 0 0029.92 0l192.2-102.51a31.79 31.79 0 0011.31-46L282.27 45.88a31.8 31.8 0 00-52.54 0zM256 32v448" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></Svg>;
}

export default SvgPrismOutline;