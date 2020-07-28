import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFilterOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M32 144h448M112 256h288M208 368h96"
      />
    </Svg>
  );
}

export default SvgFilterOutline;

