import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgMaleOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Circle
        cx={216}
        cy={296}
        r={152}
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
        d="M448 160V64h-96M324 188L448 64"
      />
    </Svg>
  );
}

export default SvgMaleOutline;

