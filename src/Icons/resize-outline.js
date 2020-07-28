import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgResizeOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M304 96h112v112M405.77 106.2L111.98 400.02M208 416H96V304"
      />
    </Svg>
  );
}

export default SvgResizeOutline;

