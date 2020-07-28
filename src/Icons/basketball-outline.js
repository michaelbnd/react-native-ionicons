import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgBasketballOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Circle
        cx={256}
        cy={256}
        r={192}
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Path
        d="M432.94 255.05a192 192 0 01-176.31-180.7M255 433.61A192 192 0 0074.29 256.69M120.24 120.24l271.52 271.52M120.24 391.76l271.52-271.52"
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}

export default SvgBasketballOutline;

