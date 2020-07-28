import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgGitCommitOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Circle
        cx={256}
        cy={256}
        r={96}
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
        d="M160 256H48M464 256H352"
      />
    </Svg>
  );
}

export default SvgGitCommitOutline;

