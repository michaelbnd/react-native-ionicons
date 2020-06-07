import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgCalendarSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Rect x={272} y={208} width={48} height={48} rx={4} ry={4} />
      <Rect x={352} y={208} width={48} height={48} rx={4} ry={4} />
      <Rect x={272} y={288} width={48} height={48} rx={4} ry={4} />
      <Rect x={352} y={288} width={48} height={48} rx={4} ry={4} />
      <Rect x={112} y={288} width={48} height={48} rx={4} ry={4} />
      <Rect x={192} y={288} width={48} height={48} rx={4} ry={4} />
      <Rect x={112} y={368} width={48} height={48} rx={4} ry={4} />
      <Rect x={192} y={368} width={48} height={48} rx={4} ry={4} />
      <Rect x={272} y={368} width={48} height={48} rx={4} ry={4} />
      <Path d="M448 64h-48V32h-40v32H152V32h-40v32H64a32 32 0 00-32 32v352a32 32 0 0032 32h384a32 32 0 0032-32V96a32 32 0 00-32-32zm-12 372H76V176h360z" />
    </Svg>
  );
}

export default SvgCalendarSharp;

