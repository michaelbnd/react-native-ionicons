import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgContrastOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Circle cx={256} cy={256} r={208} fill="none" stroke="#000" strokeLinejoin="round" strokeWidth={32} /><Path d="M256 464c-114.88 0-208-93.12-208-208S141.12 48 256 48z" /></Svg>;
}

export default SvgContrastOutline;