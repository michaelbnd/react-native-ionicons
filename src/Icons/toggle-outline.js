import * as React from "react";
import Svg, { Circle, Rect } from "react-native-svg";

function SvgToggleOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Circle cx={368} cy={256} r={128} fill="none" stroke={props.fill} strokeLinejoin="round" strokeWidth={32} /><Rect x={16} y={128} width={480} height={256} rx={128} ry={128} fill="none" stroke={props.fill} strokeLinejoin="round" strokeWidth={32} /></Svg>;
}

export default SvgToggleOutline;