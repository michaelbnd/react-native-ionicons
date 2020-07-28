import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChevronForwardOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={48}
        d="M184 112l144 144-144 144"
      />
    </Svg>
  );
}

export default SvgChevronForwardOutline;

