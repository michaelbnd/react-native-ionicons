import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function SvgTvSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M488 384H24a8 8 0 01-8-8V88a8 8 0 018-8h464a8 8 0 018 8v288a8 8 0 01-8 8z" />
      <Rect x={112} y={400} width={288} height={32} rx={4} ry={4} />
    </Svg>
  );
}

export default SvgTvSharp;

