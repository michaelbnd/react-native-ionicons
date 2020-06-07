import * as React from "react";
import Svg, { Circle } from "react-native-svg";

function SvgColorFilterOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Circle
        cx={256}
        cy={184}
        r={120}
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Circle
        cx={344}
        cy={328}
        r={120}
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Circle
        cx={168}
        cy={328}
        r={120}
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </Svg>
  );
}

export default SvgColorFilterOutline;

