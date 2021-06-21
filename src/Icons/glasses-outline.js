import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGlassesOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M224 232a32 32 0 0164 0M448 200h16M64 200H48M64 200c0 96 16 128 80 128s80-32 80-128c0 0-16-16-80-16s-80 16-80 16zM448 200c0 96-16 128-80 128s-80-32-80-128c0 0 16-16 80-16s80 16 80 16z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></Svg>;
}

export default SvgGlassesOutline;