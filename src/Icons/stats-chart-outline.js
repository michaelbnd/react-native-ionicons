import * as React from "react";
import Svg, { Rect } from "react-native-svg";

function SvgStatsChartOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Rect
        x={64}
        y={320}
        width={48}
        height={160}
        rx={8}
        ry={8}
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Rect
        x={288}
        y={224}
        width={48}
        height={256}
        rx={8}
        ry={8}
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Rect
        x={400}
        y={112}
        width={48}
        height={368}
        rx={8}
        ry={8}
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Rect
        x={176}
        y={32}
        width={48}
        height={448}
        rx={8}
        ry={8}
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </Svg>
  );
}

export default SvgStatsChartOutline;

