import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function SvgClipboardOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M336 64h32a48 48 0 0148 48v320a48 48 0 01-48 48H144a48 48 0 01-48-48V112a48 48 0 0148-48h32" fill="none" stroke="#000" strokeLinejoin="round" strokeWidth={32} /><Rect x={176} y={32} width={160} height={64} rx={26.13} ry={26.13} fill="none" stroke="#000" strokeLinejoin="round" strokeWidth={32} /></Svg>;
}

export default SvgClipboardOutline;