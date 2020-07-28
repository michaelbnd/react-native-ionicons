import * as React from "react";
import Svg, { Circle } from "react-native-svg";

function SvgDiscOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Circle
        cx={256}
        cy={256}
        r={208}
        fill={props.fill}
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
      <Circle
        cx={256}
        cy={256}
        r={96}
        fill={props.fill}
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
      <Circle cx={256} cy={256} r={32} />
    </Svg>
  );
}

export default SvgDiscOutline;

