import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function SvgHelpCircleOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M256 80a176 176 0 10176 176A176 176 0 00256 80z"
        fill={props.fill}
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
      <Path
        d="M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45 10 4.76 29.47 16.38 29.47 41.09 0 26-17 37.81-36.37 50.8S251 281.43 251 296"
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={28}
      />
      <Circle cx={250} cy={348} r={20} />
    </Svg>
  );
}

export default SvgHelpCircleOutline;

