import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTriangleOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M48 448L256 64l208 384H48z"
      />
    </Svg>
  );
}

export default SvgTriangleOutline;

