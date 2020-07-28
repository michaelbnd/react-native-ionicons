import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChevronForwardCircleOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M64 256c0 106 86 192 192 192s192-86 192-192S362 64 256 64 64 150 64 256z"
        fill={props.fill}
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M216 352l96-96-96-96"
      />
    </Svg>
  );
}

export default SvgChevronForwardCircleOutline;

