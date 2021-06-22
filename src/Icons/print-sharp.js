import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function SvgPrintSharp(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M400 96V56a8 8 0 00-8-8H120a8 8 0 00-8 8v40" /><Rect x={152} y={264} width={208} height={160} rx={4} ry={4} fill="none" /><Rect x={152} y={264} width={208} height={160} rx={4} ry={4} fill="none" /><Path d="M408 112H104a56 56 0 00-56 56v208a8 8 0 008 8h56v72a8 8 0 008 8h272a8 8 0 008-8v-72h56a8 8 0 008-8V168a56 56 0 00-56-56zm-48 308a4 4 0 01-4 4H156a4 4 0 01-4-4V268a4 4 0 014-4h200a4 4 0 014 4zm34-212.08a24 24 0 1122-22 24 24 0 01-22 22z" /></Svg>;
}

export default SvgPrintSharp;