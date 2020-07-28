import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEggOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M256 48C192 48 96 171.69 96 286.55S160 464 256 464s160-62.59 160-177.45S320 48 256 48z"
        fill={props.fill}
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}

export default SvgEggOutline;

