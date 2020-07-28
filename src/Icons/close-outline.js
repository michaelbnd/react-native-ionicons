import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCloseOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M368 368L144 144M368 144L144 368"
      />
    </Svg>
  );
}

export default SvgCloseOutline;

