import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgEllipsisHorizontalCircle(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Circle cx={256} cy={256} r={26} />
      <Circle cx={346} cy={256} r={26} />
      <Circle cx={166} cy={256} r={26} />
      <Path
        d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
        fill={props.fill}
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}

export default SvgEllipsisHorizontalCircle;

