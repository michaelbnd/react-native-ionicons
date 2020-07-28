import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSearchCircleOutline(props) { 
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
        d="M232 160a72 72 0 1072 72 72 72 0 00-72-72z"
        fill={props.fill}
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
        d="M283.64 283.64L336 336"
      />
    </Svg>
  );
}

export default SvgSearchCircleOutline;

