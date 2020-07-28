import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgWineOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M398.57 80H113.43v16S87.51 272 256 272 398.57 96 398.57 96zM256 272v160"
        fill={props.fill}
        stroke={props.color}
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M352 432H160"
      />
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M112 160h288"
      />
    </Svg>
  );
}

export default SvgWineOutline;

