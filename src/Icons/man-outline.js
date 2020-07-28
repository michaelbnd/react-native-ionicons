import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function SvgManOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M208 208v264a23.73 23.73 0 0024 24h0a23.73 23.73 0 0024-24"
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
      <Path
        d="M256 336v136a23.73 23.73 0 0024 24h0a23.73 23.73 0 0024-24V208"
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
      <Path
        d="M208 192v88a23.72 23.72 0 01-24 24h0a23.72 23.72 0 01-24-24v-88a48 48 0 0148-48h96a48 48 0 0148 48v88a23.72 23.72 0 01-24 24h0a23.72 23.72 0 01-24-24v-88"
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
      <Circle
        cx={256}
        cy={56}
        r={40}
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}

export default SvgManOutline;

