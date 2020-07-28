import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgShareSocialOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Circle
        cx={128}
        cy={256}
        r={48}
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Circle
        cx={384}
        cy={112}
        r={48}
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Circle
        cx={384}
        cy={400}
        r={48}
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
        d="M169.83 279.53l172.34 96.94M342.17 135.53l-172.34 96.94"
      />
    </Svg>
  );
}

export default SvgShareSocialOutline;

