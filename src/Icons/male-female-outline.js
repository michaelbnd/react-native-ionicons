import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgMaleFemaleOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Circle cx={216} cy={200} r={136} fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><Path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M216 352v128M272 416H160M432 112V32h-80M335.28 128.72L432 32" /></Svg>;
}

export default SvgMaleFemaleOutline;