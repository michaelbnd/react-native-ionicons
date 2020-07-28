import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgAlbumsOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Rect
        x={64}
        y={176}
        width={384}
        height={256}
        rx={28.87}
        ry={28.87}
        fill={props.fill}
        stroke={props.color}
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Path
        stroke={props.color}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
        d="M144 80h224M112 128h288"
      />
    </Svg>
  );
}

export default SvgAlbumsOutline;

