import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function SvgTrashBinOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M432 144l-28.67 275.74A32 32 0 01371.55 448H140.46a32 32 0 01-31.78-28.26L80 144" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><Rect x={32} y={64} width={448} height={80} rx={16} ry={16} fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><Path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M312 240L200 352M312 352L200 240" /></Svg>;
}

export default SvgTrashBinOutline;