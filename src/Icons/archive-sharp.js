import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgArchiveSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Rect x={32} y={48} width={448} height={80} rx={12} ry={12} />
      <Path d="M64 160v280a24 24 0 0024 24h336a24 24 0 0024-24V160zm192 230.63L169.32 304 192 281.32l48 48.05V208h32v121.37l48.07-48.07 22.61 22.64z" />
    </Svg>
  );
}

export default SvgArchiveSharp;

