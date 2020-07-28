import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgMaleFemaleOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Circle
        cx={216}
        cy={200}
        r={136}
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M216 352v128M272 416H160M432 112V32h-80M335.28 128.72L432 32"
      />
    </Svg>
  );
}

export default SvgMaleFemaleOutline;

