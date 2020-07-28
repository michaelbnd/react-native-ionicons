import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCheckmarkDoneOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M464 128L240 384l-96-96M144 384l-96-96M368 128L232 284"
      />
    </Svg>
  );
}

export default SvgCheckmarkDoneOutline;

