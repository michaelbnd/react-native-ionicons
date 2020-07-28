import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGlassesOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M224 232a32 32 0 0164 0M448 200h16M64 200H48M64 200c0 96 16 128 80 128s80-32 80-128c0 0-16-16-80-16s-80 16-80 16zM448 200c0 96-16 128-80 128s-80-32-80-128c0 0 16-16 80-16s80 16 80 16z"
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}

export default SvgGlassesOutline;

