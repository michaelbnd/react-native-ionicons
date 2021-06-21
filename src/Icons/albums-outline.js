import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgAlbumsOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Rect x={64} y={176} width={384} height={256} rx={28.87} ry={28.87} fill="none" stroke="#000" strokeLinejoin="round" strokeWidth={32} /><Path stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="M144 80h224M112 128h288" /></Svg>;
}

export default SvgAlbumsOutline;