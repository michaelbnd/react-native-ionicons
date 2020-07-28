import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMenuOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
        d="M80 160h352M80 256h352M80 352h352"
      />
    </Svg>
  );
}

export default SvgMenuOutline;

