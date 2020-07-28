import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgReorderThree(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={44}
        d="M102 256h308M102 176h308M102 336h308"
      />
    </Svg>
  );
}

export default SvgReorderThree;

