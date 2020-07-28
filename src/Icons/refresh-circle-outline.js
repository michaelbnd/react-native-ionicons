import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRefreshCircleOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M288 193s12.18-6-32-6a80 80 0 1080 80"
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={28}
      />
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={28}
        d="M256 149l40 40-40 40"
      />
      <Path
        d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"
        fill={props.fill}
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}

export default SvgRefreshCircleOutline;

