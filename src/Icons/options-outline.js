import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function SvgOptionsOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M368 128h80M64 128h240M368 384h80M64 384h240M208 256h240M64 256h80" /><Circle cx={336} cy={128} r={32} fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><Circle cx={176} cy={256} r={32} fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><Circle cx={336} cy={384} r={32} fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></Svg>;
}

export default SvgOptionsOutline;