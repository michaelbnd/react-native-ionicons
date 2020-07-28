import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function SvgLockClosedOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M336 208v-95a80 80 0 00-160 0v95"
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Rect
        x={96}
        y={208}
        width={320}
        height={272}
        rx={48}
        ry={48}
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}

export default SvgLockClosedOutline;

