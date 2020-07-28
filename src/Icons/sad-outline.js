import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgSadOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Circle cx={184} cy={232} r={24} />
      <Path d="M256 288c45.42 0 83.62 29.53 95.71 69.83a8 8 0 01-7.87 10.17H168.15a8 8 0 01-7.82-10.17C172.32 317.53 210.53 288 256 288z" />
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

export default SvgSadOutline;

