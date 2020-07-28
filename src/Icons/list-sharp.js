import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgListSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinejoin="round"
        strokeWidth={48}
        d="M144 144h320M144 256h320M144 368h320"
      />
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M64 128h32v32H64zM64 240h32v32H64zM64 352h32v32H64z"
      />
    </Svg>
  );
}

export default SvgListSharp;

