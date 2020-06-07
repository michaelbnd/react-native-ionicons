import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgPhoneLandscapeOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Rect
        x={128}
        y={16}
        width={256}
        height={480}
        rx={48}
        ry={48}
        transform="rotate(-90 256 256)"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Path
        d="M16 336v-24a8 8 0 018-8h0a16 16 0 0016-16v-64a16 16 0 00-16-16h0a8 8 0 01-8-8v-24"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </Svg>
  );
}

export default SvgPhoneLandscapeOutline;

