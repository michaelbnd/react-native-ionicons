import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgJournalOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Rect
        x={96}
        y={48}
        width={320}
        height={416}
        rx={48}
        ry={48}
        fill={props.fill}
        stroke={props.color}
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinejoin="round"
        strokeWidth={60}
        d="M320 48v416"
      />
    </Svg>
  );
}

export default SvgJournalOutline;

