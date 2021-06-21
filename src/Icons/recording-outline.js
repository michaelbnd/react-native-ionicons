import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgRecordingOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Circle cx={128} cy={256} r={96} fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><Circle cx={384} cy={256} r={96} fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><Path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M128 352h256" /></Svg>;
}

export default SvgRecordingOutline;