import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgHardwareChipOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Rect x={80} y={80} width={352} height={352} rx={48} ry={48} fill="none" stroke="#000" strokeLinejoin="round" strokeWidth={32} /><Rect x={144} y={144} width={224} height={224} rx={16} ry={16} fill="none" stroke="#000" strokeLinejoin="round" strokeWidth={32} /><Path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M256 80V48M336 80V48M176 80V48M256 464v-32M336 464v-32M176 464v-32M432 256h32M432 336h32M432 176h32M48 256h32M48 336h32M48 176h32" /></Svg>;
}

export default SvgHardwareChipOutline;