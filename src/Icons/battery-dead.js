import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgBatteryDead(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Rect
        x={31}
        y={144}
        width={400}
        height={224}
        rx={45.7}
        ry={45.7}
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
        d="M479 218.67v74.66"
      />
    </Svg>
  );
}

export default SvgBatteryDead;

