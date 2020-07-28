import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgReorderThreeOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M96 256h320M96 176h320M96 336h320"
      />
    </Svg>
  );
}

export default SvgReorderThreeOutline;

