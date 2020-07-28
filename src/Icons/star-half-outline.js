import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStarHalfOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
        fill={props.fill}
        stroke={props.color}
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Path d="M256 48v316L118 464l54-160-140-96h172l52-160z" />
    </Svg>
  );
}

export default SvgStarHalfOutline;

