import * as React from "react";
import Svg, { Circle } from "react-native-svg";

function SvgEllipsisHorizontalOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Circle
        cx={256}
        cy={256}
        r={32}
        fill={props.fill}
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
      <Circle
        cx={416}
        cy={256}
        r={32}
        fill={props.fill}
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
      <Circle
        cx={96}
        cy={256}
        r={32}
        fill={props.fill}
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}

export default SvgEllipsisHorizontalOutline;

