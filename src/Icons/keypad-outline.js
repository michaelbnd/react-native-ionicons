import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgKeypadOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Circle cx={256} cy={448} r={32} fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={32} /><Circle cx={256} cy={320} r={32} fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={32} /><Path d="M288 192a32 32 0 11-32-32 32 32 0 0132 32z" fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={32} /><Circle cx={256} cy={64} r={32} fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={32} /><Circle cx={384} cy={320} r={32} fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={32} /><Circle cx={384} cy={192} r={32} fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={32} /><Circle cx={384} cy={64} r={32} fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={32} /><Circle cx={128} cy={320} r={32} fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={32} /><Circle cx={128} cy={192} r={32} fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={32} /><Circle cx={128} cy={64} r={32} fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={32} /></Svg>;
}

export default SvgKeypadOutline;