import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgCalendarClearOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" {...props}><Rect fill="none" stroke="#000" strokeLinejoin="round" strokeWidth={32} x={48} y={80} width={416} height={384} rx={48} /><Path fill="none" stroke="#000" strokeLinejoin="round" strokeWidth={32} strokeLinecap="round" d="M128 48v32M384 48v32M464 160H48" /></Svg>;
}

export default SvgCalendarClearOutline;