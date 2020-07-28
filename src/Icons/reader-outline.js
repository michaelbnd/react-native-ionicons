import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgReaderOutline(props) { 
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M176 128h160M176 208h160M176 288h80"
      />
    </Svg>
  );
}

export default SvgReaderOutline;

