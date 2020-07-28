import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgHappyOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Circle cx={184} cy={232} r={24} />
      <Path d="M256.05 384c-45.42 0-83.62-29.53-95.71-69.83a8 8 0 017.82-10.17h175.69a8 8 0 017.82 10.17c-11.99 40.3-50.2 69.83-95.62 69.83z" />
      <Circle cx={328} cy={232} r={24} />
      <Circle
        cx={256}
        cy={256}
        r={208}
        fill={props.fill}
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}

export default SvgHappyOutline;

