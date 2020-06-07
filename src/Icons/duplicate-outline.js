import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgDuplicateOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Rect
        x={128}
        y={128}
        width={336}
        height={336}
        rx={57}
        ry={57}
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Path
        d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24M296 216v160M376 296H216"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </Svg>
  );
}

export default SvgDuplicateOutline;

