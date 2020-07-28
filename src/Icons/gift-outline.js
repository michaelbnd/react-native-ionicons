import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function SvgGiftOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M256 104v56h56a56 56 0 10-56-56zM256 104v56h-56a56 56 0 1156-56z"
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
      <Rect
        x={64}
        y={160}
        width={384}
        height={112}
        rx={32}
        ry={32}
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Path
        d="M416 272v144a48 48 0 01-48 48H144a48 48 0 01-48-48V272M256 160v304"
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}

export default SvgGiftOutline;

