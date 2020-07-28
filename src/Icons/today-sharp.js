import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgTodaySharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Rect x={112} y={208} width={128} height={128} rx={9.14} ry={9.14} />
      <Path d="M448 64h-48V32h-40v32H152V32h-40v32H64a32 32 0 00-32 32v352a32 32 0 0032 32h384a32 32 0 0032-32V96a32 32 0 00-32-32zm-12 372H76V176h360z" />
    </Svg>
  );
}

export default SvgTodaySharp;

