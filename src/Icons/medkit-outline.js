import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgMedkitOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Rect x={32} y={112} width={448} height={352} rx={48} ry={48} fill="none" stroke="#000" strokeLinejoin="round" strokeWidth={32} /><Path d="M144 112V80a32 32 0 0132-32h160a32 32 0 0132 32v32M256 208v160M336 288H176" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></Svg>;
}

export default SvgMedkitOutline;