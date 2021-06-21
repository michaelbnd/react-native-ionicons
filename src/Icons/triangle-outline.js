import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTriangleOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M48 448L256 64l208 384H48z" /></Svg>;
}

export default SvgTriangleOutline;