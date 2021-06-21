import * as React from "react";
import Svg, { Rect } from "react-native-svg";

function SvgKeypadSharp(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Rect x={80} y={16} width={96} height={96} rx={8} ry={8} /><Rect x={208} y={16} width={96} height={96} rx={8} ry={8} /><Rect x={336} y={16} width={96} height={96} rx={8} ry={8} /><Rect x={80} y={144} width={96} height={96} rx={8} ry={8} /><Rect x={208} y={144} width={96} height={96} rx={8} ry={8} /><Rect x={336} y={144} width={96} height={96} rx={8} ry={8} /><Rect x={80} y={272} width={96} height={96} rx={8} ry={8} /><Rect x={208} y={272} width={96} height={96} rx={8} ry={8} /><Rect x={208} y={400} width={96} height={96} rx={8} ry={8} /><Rect x={336} y={272} width={96} height={96} rx={8} ry={8} /></Svg>;
}

export default SvgKeypadSharp;