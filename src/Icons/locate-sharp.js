import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLocateSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={48}
        d="M256 96V56M256 456v-40M256 112a144 144 0 10144 144 144 144 0 00-144-144zM416 256h40M56 256h40"
      />
    </Svg>
  );
}

export default SvgLocateSharp;

