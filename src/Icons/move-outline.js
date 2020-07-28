import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMoveOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M176 112l80-80 80 80M255.98 32l.02 448M176 400l80 80 80-80M400 176l80 80-80 80M112 176l-80 80 80 80M32 256h448"
      />
    </Svg>
  );
}

export default SvgMoveOutline;

